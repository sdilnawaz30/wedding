"use client";

import { useState } from "react";
import { PageContainer } from "@/components/PageContainer";
import { WeddingHero } from "@/components/WeddingHero";
import { IslamicBlessing } from "@/components/IslamicBlessing";
import { HeartScratchDate } from "@/components/HeartScratchDate";
import { FamilyInvitation } from "@/components/FamilyInvitation";
import { NikkahEvent } from "@/components/NikkahEvent";
import { ValimaEvent } from "@/components/ValimaEvent";
import { WeddingRSVP } from "@/components/WeddingRSVP";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { CinematicIntro } from "@/components/CinematicIntro";
import { weddingData } from "@/lib/weddingData";

export default function Home() {
  const [showCinematicIntro, setShowCinematicIntro] = useState(true);
  const [isOpened, setIsOpened] = useState(true);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  const groomName = weddingData.couple.groom.fullName;
  const brideName = weddingData.couple.bride.fullName;
  const weddingDate = weddingData.date.gregorian;

  const handleOpen = () => {
    setIsOpened(true);
    setShouldPlayAudio(true);
  };

  const handleReplay = () => {
    setIsOpened(false);
    setIntroKey((prev) => prev + 1);
  };

  return (
    <>
      {/* 0. Brand New Cinematic Video Intro Experience */}
      {showCinematicIntro && (
        <CinematicIntro
          onComplete={() => {
            setShowCinematicIntro(false);
            setShouldPlayAudio(true);
          }}
        />
      )}

      {/* 1. Full-Screen 3D Envelope Opening Experience (Available via Replay) */}
      {!isOpened && !showCinematicIntro && (
        <EnvelopeIntro
          key={introKey}
          onOpen={handleOpen}
          coupleNames={`${groomName} & ${brideName}`}
          weddingDate={weddingDate}
        />
      )}

      {/* 2. Main Wedding Invitation Canvas */}
      <PageContainer
        autoPlayAudio={shouldPlayAudio}
        onReplayIntro={handleReplay}
      >
        {/* Cinematic Islamic Wedding Hero */}
        <WeddingHero
          groomName={groomName}
          groomDegree={weddingData.couple.groom.degree}
          groomRole={weddingData.couple.groom.profession}
          brideName={brideName}
          brideDegree={weddingData.couple.bride.degree}
          brideRole={weddingData.couple.bride.profession}
          weddingDate={weddingDate}
          ceremonyTime={weddingData.ceremonies.nikkah.time}
        />

        {/* Dedicated Islamic Blessing & Quran Verse Section */}
        <IslamicBlessing />

        {/* Interactive Heart Scratch-Off Date & Countdown Timer Section */}
        <HeartScratchDate />

        {/* Formal Family Invitation & Lineage Section */}
        <FamilyInvitation />

        {/* Sacred Nikkah Ceremony & Venue Directions Section */}
        <NikkahEvent />

        {/* Valima Reception at Zai Palace & Bus Route Section */}
        <ValimaEvent />

        {/* Zero-Backend WhatsApp RSVP Section */}
        <WeddingRSVP />
      </PageContainer>
    </>
  );
}
