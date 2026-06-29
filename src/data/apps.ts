import { TestTube, Sparkles, Bell, Clock } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  glow: string;
  delay: number;
}

export interface AppData {
  name: string;
  slug: string;
  hero_tagline: string;
  hero_title: string;
  short_description: string;
  full_description: string;
  features: Feature[];
  screenshots: Screenshot[];
  playstore_link: string;
  is_featured: boolean;
}

export const apps: AppData[] = [
  {
    name: "VitaCase",
    slug: "vitacase",
    hero_tagline: "Smart Health Tracking",
    hero_title: "All Your Health Data in One Place",
    short_description: "Track your medical tests, medications and history with ease.",
    full_description: "VitaCase is your ultimate companion for managing personal health records. Designed with privacy and clarity in mind, it empowers users to take control of their medical journey through intuitive tracking and intelligent reminders.",
    features: [
      { 
        title: "Track all your medical tests in one place", 
        description: "Store and manage your lab results in one secure place. Always accessible when you need them.", 
        iconName: "TestTube" 
      },
      { 
        title: "Understand what your results mean", 
        description: "Simple explanations of complex results. Understand what your numbers actually mean.", 
        iconName: "Sparkles" 
      },
      { 
        title: "Never miss a dose with smart reminders", 
        description: "Stay on track with your treatments. Smart alerts ensure you never miss a dose.", 
        iconName: "Bell" 
      },
      { 
        title: "See the big picture of your health", 
        description: "View your data over time. Spot trends and share comprehensive history with your doctor.", 
        iconName: "Clock" 
      }
    ],
    screenshots: [
      {
        src: "/screenshots/vitacase_1.png",
        alt: "Manage Your Files",
        glow: "rgba(79, 124, 255, 0.4)",
        delay: 0
      },
      {
        src: "/screenshots/vitacase_2.png",
        alt: "Never Miss Appointments",
        glow: "rgba(34, 211, 238, 0.4)",
        delay: 200
      },
      {
        src: "/screenshots/vitacase_3.png",
        alt: "Never Forget Medications",
        glow: "rgba(139, 92, 246, 0.4)",
        delay: 400
      }
    ],
    playstore_link: "https://play.google.com/store/apps/details?id=com.limanex.vitacase",
    is_featured: true
  }
];
