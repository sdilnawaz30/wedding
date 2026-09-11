"use client";

import React, { useEffect, useRef } from "react";

export function FlowerPetalShower({ onComplete }: { onComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 2, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // ========================================================
    // ASSETS: REALISTIC PETALS & GLITTER
    // ========================================================
    const createPetalAsset = (base: string, highlight: string, shadow: string, size: number) => {
      const oc = document.createElement("canvas");
      oc.width = size * 2; oc.height = size * 2;
      const octx = oc.getContext("2d");
      if (!octx) return oc;
      octx.translate(size, size);
      
      // Asymmetric realistic petal shape
      octx.beginPath();
      octx.moveTo(0, -size * 0.8);
      octx.bezierCurveTo(size * 0.6, -size * 0.5, size * 0.8, size * 0.2, 0, size * 0.9);
      octx.bezierCurveTo(-size * 0.5, size * 0.4, -size * 0.4, -size * 0.2, 0, -size * 0.8);
      octx.closePath();

      const grad = octx.createRadialGradient(-size * 0.2, -size * 0.3, size * 0.1, 0, 0, size);
      grad.addColorStop(0, highlight);
      grad.addColorStop(0.5, base);
      grad.addColorStop(1, shadow);
      
      octx.fillStyle = grad;
      octx.fill();
      return oc;
    };

    const assets = {
      petalRoyal: createPetalAsset("#B76E79", "#D68D9A", "#8E3157", 18),
      petalBlush: createPetalAsset("#E6C9CE", "#FFFDF8", "#C7A6AC", 14),
      petalWhite: createPetalAsset("#FFFDF8", "#FFFFFF", "#E6DDE3", 16),
      petalChampagne: createPetalAsset("#F5E6C4", "#FFFFFF", "#D8B86A", 12),
    };

    // ========================================================
    // PHYSICS ENGINE ENTITIES
    // ========================================================
    const rockets: any[] = [];
    const sparks: any[] = [];
    const petals: any[] = [];
    const glitter: any[] = [];
    let startTime = performance.now();
    let elapsedSec = 0;

    // --- Helpers ---
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    // --- Ignite a Firework Burst ---
    const explode = (x: number, y: number, colorSet: string[], count: number, size: number) => {
      // Ignition flash
      glitter.push({ x, y, life: 0, maxLife: 0.2, size: size * 3, color: "#FFFFFF", isFlash: true });

      for (let i = 0; i < count; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(size * 0.5, size * 2.0); // Cinematic explosive velocity
        sparks.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colorSet[Math.floor(Math.random() * colorSet.length)],
          life: 0,
          maxLife: rand(1.0, 1.8), // Seconds
          size: rand(1, 2.5),
          drag: rand(0.92, 0.96), // Strong initial burst, rapidly slowing
          gravity: 0.15,
        });

        // 10% chance to spawn fine glitter
        if (Math.random() < 0.1) {
          glitter.push({
            x, y,
            vx: Math.cos(angle) * (speed * 0.8),
            vy: Math.sin(angle) * (speed * 0.8),
            color: Math.random() > 0.5 ? "#C9A34E" : "#FFFFFF",
            life: 0,
            maxLife: rand(1.0, 2.5),
            size: rand(0.5, 1.5),
            drag: 0.9,
            gravity: 0.05,
          });
        }
      }
    };

    // --- Choreographed Rockets ---
    const scheduleRocket = (launchTime: number, startX: number, startY: number, targetX: number, targetY: number, colors: string[], count: number, burstSize: number) => {
      rockets.push({
        launchTime, startX, startY, x: startX, y: startY, targetX, targetY,
        colors, count, burstSize,
        launched: false, dead: false,
        flightDuration: 0.25, // 0.25 seconds travel time
      });
    };

    // BURST 1: small gold upper-left
    scheduleRocket(0.25, width * 0.4, height * 0.5, width * 0.2, height * 0.2, ["#C9A34E", "#F5E6C4", "#FFFFFF"], 60, 8);
    // BURST 2: pink/champagne upper-right
    scheduleRocket(0.35, width * 0.6, height * 0.5, width * 0.8, height * 0.25, ["#E6C9CE", "#B76E79", "#F5E6C4"], 70, 9);
    // BURST 3: large gold/white center
    scheduleRocket(0.45, width * 0.5, height * 0.6, width * 0.5, height * 0.35, ["#FFFFFF", "#C9A34E", "#F5E6C4", "#FFFDF8"], 150, 14);
    // BURST 4: royal-pink/gold left
    scheduleRocket(0.55, width * 0.45, height * 0.55, width * 0.3, height * 0.4, ["#B76E79", "#8E3157", "#C9A34E"], 90, 11);
    // BURST 5: champagne/blush right
    scheduleRocket(0.65, width * 0.55, height * 0.55, width * 0.7, height * 0.45, ["#F5E6C4", "#E6C9CE", "#FFFFFF"], 80, 10);
    // BURST 6: small secondary edges
    scheduleRocket(0.75, width * 0.5, height * 0.5, width * 0.1, height * 0.5, ["#C9A34E", "#FFFDF8"], 40, 6);
    scheduleRocket(0.75, width * 0.5, height * 0.5, width * 0.9, height * 0.5, ["#C9A34E", "#FFFDF8"], 40, 6);


    // --- Realistic Rose Petal Burst (t=0.70s) ---
    let petalsLaunched = false;
    const launchPetals = () => {
      const keys = Object.keys(assets);
      for (let i = 0; i < 60; i++) {
        const assetName = keys[Math.floor(Math.random() * keys.length)];
        const angle = rand(0, Math.PI * 2);
        // Extremely fast outward velocity, resembling a cinematic shockwave
        const speed = rand(15, 35); 
        
        petals.push({
          asset: assets[assetName as keyof typeof assets],
          x: width / 2, y: height * 0.45,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: rand(0, Math.PI * 2),
          vrot: rand(-0.2, 0.2),
          scaleX: 1, // for 3D flip
          scaleY: 1,
          flipSpeed: rand(0.05, 0.15),
          size: rand(0.5, 1.2), // Cinematic depth sizing
          life: 0,
          maxLife: rand(2.5, 3.5), // Short realistic fall
          drag: rand(0.85, 0.92), // High drag causes them to slow quickly
          gravity: rand(0.5, 1.5), // Falls shortly after slowing
        });
      }
    };

    // ========================================================
    // RENDER LOOP
    // ========================================================
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05); // Cap dt
      lastTime = time;
      elapsedSec = (time - startTime) / 1000;

      // Subtle motion blur clear
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${0.4 * (dt * 60)})`;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      // 0.15s - 0.30s: Champagne-Gold Flash
      if (elapsedSec >= 0.15 && elapsedSec <= 0.35) {
        const intensity = Math.max(0, 1 - ((elapsedSec - 0.15) / 0.20));
        ctx.globalCompositeOperation = "screen";
        const g = ctx.createRadialGradient(width/2, height*0.45, 0, width/2, height*0.45, width);
        g.addColorStop(0, `rgba(255, 253, 248, ${intensity * 0.6})`);
        g.addColorStop(0.5, `rgba(201, 163, 78, ${intensity * 0.2})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
      }

      // Rockets logic
      for (const r of rockets) {
        if (!r.launched && elapsedSec >= r.launchTime) {
          r.launched = true;
          r.launchStart = elapsedSec;
        }
        if (r.launched && !r.dead) {
          const t = (elapsedSec - r.launchStart) / r.flightDuration;
          if (t >= 1) {
            r.dead = true;
            explode(r.targetX, r.targetY, r.colors, r.count, r.burstSize);
          } else {
            // Easing out curve
            const ease = 1 - Math.pow(1 - t, 3);
            r.x = r.startX + (r.targetX - r.startX) * ease;
            r.y = r.startY + (r.targetY - r.startY) * ease;
            
            // Draw rocket glowing head
            ctx.globalCompositeOperation = "screen";
            ctx.fillStyle = "#FFFDF8";
            ctx.beginPath(); ctx.arc(r.x, r.y, 2, 0, Math.PI*2); ctx.fill();
            // Rocket trail
            glitter.push({ x: r.x, y: r.y, vx: 0, vy: 0, life: 0, maxLife: 0.3, size: 1, color: "#C9A34E" });
            ctx.globalCompositeOperation = "source-over";
          }
        }
      }

      // Pusvaanam Fountains (0.60s - 1.60s)
      if (elapsedSec >= 0.60 && elapsedSec <= 1.60) {
        const spawnFountain = (fx: number, fy: number, angleCenter: number) => {
          for (let i = 0; i < 4; i++) { // Intense spark density
            const angle = angleCenter + rand(-0.3, 0.3);
            const speed = rand(15, 25);
            sparks.push({
              x: fx, y: fy,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              color: Math.random() > 0.8 ? "#FFFDF8" : "#C9A34E",
              life: 0, maxLife: rand(0.5, 1.2),
              size: rand(1.5, 3),
              drag: 0.95, gravity: 0.3, // Heavy gravity pulls them down quickly
            });
            // Glitter specks
            if(Math.random() < 0.2) {
              glitter.push({ x: fx, y: fy, vx: Math.cos(angle)*speed*0.6, vy: Math.sin(angle)*speed*0.6, life: 0, maxLife: 1.0, size: rand(0.5, 1.5), color: "#FFFFFF", drag: 0.9, gravity: 0.1 });
            }
          }
        };
        spawnFountain(width * 0.2, height * 0.9, -Math.PI / 2.2); // Left fountain
        spawnFountain(width * 0.8, height * 0.9, -Math.PI / 1.8); // Right fountain
      }

      // Trigger Petals (0.70s)
      if (elapsedSec >= 0.70 && !petalsLaunched) {
        launchPetals();
        petalsLaunched = true;
      }

      // Update & Draw Sparks
      ctx.globalCompositeOperation = "screen";
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life += dt;
        s.vx *= s.drag;
        s.vy *= s.drag;
        s.vy += s.gravity;
        s.x += s.vx;
        s.y += s.vy;

        const lifeRatio = s.life / s.maxLife;
        if (lifeRatio >= 1) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = s.color;
        ctx.globalAlpha = (1 - lifeRatio) * Math.min(1, lifeRatio * 5); // Fade in quickly, fade out slowly
        ctx.lineWidth = s.size * (1 - lifeRatio * 0.5); // Thin out over time
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 1.5, s.y - s.vy * 1.5);
        ctx.stroke();
      }

      // Update & Draw Glitter
      for (let i = glitter.length - 1; i >= 0; i--) {
        const g = glitter[i];
        g.life += dt;
        if (g.life >= g.maxLife) {
          glitter.splice(i, 1);
          continue;
        }

        const lifeRatio = g.life / g.maxLife;
        if (!g.isFlash) {
          g.vx *= g.drag; g.vy *= g.drag; g.vy += g.gravity;
          g.x += g.vx; g.y += g.vy;
        }

        const alpha = g.isFlash ? (1 - lifeRatio) : (Math.sin(g.life * 15) * 0.5 + 0.5) * (1 - lifeRatio);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = g.color;
        ctx.beginPath(); ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // Update & Draw Petals
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          petals.splice(i, 1);
          continue;
        }

        // Cinematic Physics
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity * (p.life * 0.5); // Gravity increases over time as momentum dies
        
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        
        // 3D Tumble effect
        p.scaleX = Math.cos(p.life * p.flipSpeed * Math.PI * 2);

        const fadeRatio = Math.max(0, (p.maxLife - p.life) / 1.0); // Fade out over last 1 second
        ctx.globalAlpha = Math.min(1, fadeRatio);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(p.size * p.scaleX, p.size * p.scaleY);
        ctx.drawImage(p.asset, -p.asset.width / 2, -p.asset.height / 2);
        ctx.restore();
      }

      ctx.globalAlpha = 1.0;

      // End
      if (elapsedSec > 4.5) {
        onComplete?.();
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[80] w-full h-full"
      aria-hidden="true"
    />
  );
}
