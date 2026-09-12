/**
 * Authentic Wedding Data Configuration
 * Strictly based on the primary wedding invitation card.
 */

export const weddingData = {
  couple: {
    groom: {
      fullName: "S. Mohamed Dil Nawaz",
      degree: "B.E.",
      profession: "Network Engineer",
      parents: "Mr. Samiyullah & Mrs. Hussainara Begum",
      organization: "Metropolitan Transport Corporation Ltd.",
      paternalGrandparent: "Rakiman (Late)",
      maternalGrandparent: "Mohammed Ayub (Late)",
    },
    bride: {
      fullName: "A. Sharmila Begum",
      degree: "M.Sc.",
      profession: "Professor",
      parents: "Mr. & Mrs. Abdul Aleem",
      paternalGrandparent: "Abdul Azeez",
      maternalGrandparent: "Mohiddin (Late)",
    },
  },
  date: {
    gregorian: "Sunday, 18 October 2026",
    gregorianFormatted: "SUNDAY, 18 OCTOBER 2026",
    hijri: "6 Jumada Al-Awwal 1448 AH",
    year: 2026,
    month: "October",
    day: 18,
    dayOfWeek: "Sunday",
  },
  ceremonies: {
    nikah: {
      name: "NIKKAH",
      title: "Nikkah Ceremony",
      time: "11:00 A.M.",
      venueName: "EDGAH MOSQUE",
      address: "38, 238, Angappa Naicken St, Seethakadi Nagar, George Town, Chennai, Tamil Nadu 600001",
      mapsUrl:
        "https://maps.app.goo.gl/6pWaCgnRazAFwRb86",
    },
    valima: {
      name: "VALIMA",
      title: "Valima Reception",
      time: "LUNCH FROM 12:30 PM ONWARDS",
      timeFormatted: "12:30 PM onwards",
      venueName: "ZAI PALACE",
      address:
        "No. 514/141, Surya Narayana Chetty Street, Royapuram, Chennai - 600013.",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Zai+Palace,+514/141,+Surya+Narayana+Chetty+Street,+Royapuram,+Chennai+-+600013",
      transit: {
        busRoutes: "1, 4, 56D, 56C, 56K & 101",
        busStop: "KALMANDAPAM",
      },
      blessings: {
        children: "Adyan & Hamahaan",
        parents: "Younus & Faarish",
      },
    },
  },
  rsvp: {
    // Configurable WhatsApp contact number (e.g. +91 98400 00000)
    whatsappNumber: "919840000000",
    joinUsMessage:
      "Assalamu Alaikum,\nI would be delighted to attend the Nikkah & Valima of S. Mohamed Dil Nawaz & A. Sharmila Begum on Sunday, 18 October 2026.",
    cantAttendMessage:
      "Assalamu Alaikum,\nThank you for the warm invitation. Unfortunately, I won't be able to attend the wedding of S. Mohamed Dil Nawaz & A. Sharmila Begum on Sunday, 18 October 2026. Wishing the couple a lifetime of love and blessings.",
  },
};

export function getWhatsAppRsvpUrl(attending: boolean): string {
  const message = attending
    ? weddingData.rsvp.joinUsMessage
    : weddingData.rsvp.cantAttendMessage;
  return `https://wa.me/${weddingData.rsvp.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
