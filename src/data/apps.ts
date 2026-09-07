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
  width: number;
  height: number;
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
  icon_url?: string;
  video_url?: string;
  video_poster?: string;
  badge?: string;
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
        src: "/screenshots/vitacase_1.webp",
        alt: "VitaCase app — Your life your vault all in one place",
        glow: "rgba(79, 124, 255, 0.4)",
        delay: 0,
        width: 1080,
        height: 2336,
      },
      {
        src: "/screenshots/vitacase_2.webp",
        alt: "VitaCase app — All your documents in one place",
        glow: "rgba(34, 211, 238, 0.4)",
        delay: 150,
        width: 1080,
        height: 2336,
      },
      {
        src: "/screenshots/vitacase_3.webp",
        alt: "VitaCase app — Find what matters when you need it",
        glow: "rgba(139, 92, 246, 0.4)",
        delay: 300,
        width: 1080,
        height: 2336,
      },
      {
        src: "/screenshots/vitacase_4.webp",
        alt: "VitaCase app — Never miss what matters with medicine reminders",
        glow: "rgba(59, 130, 246, 0.4)",
        delay: 450,
        width: 1080,
        height: 2336,
      },
      {
        src: "/screenshots/vitacase_5.webp",
        alt: "VitaCase app — Private, secure, encrypted on device",
        glow: "rgba(168, 85, 247, 0.4)",
        delay: 600,
        width: 1080,
        height: 2336,
      },
    ],
    playstore_link: "https://play.google.com/store/apps/details?id=com.limanex.vitacase",
    is_featured: true,
    icon_url: "/vitacase-icon.webp",
    badge: "Smart Health Tracking"
  },
  {
    name: "Meowoirs",
    slug: "meowoirs",
    hero_tagline: "Every Cat Has A Story",
    hero_title: "A Dedicated Cat Memory Journal & Relationship Diary",
    short_description: "A quiet, personal memory journal designed exclusively for cats and the humans who love them.",
    full_description: "Meowoirs exists to honor the emotional, irreplaceable relationship between humans and cats. Whether it is the companion sleeping at the foot of your bed for ten years, a timid foster kitten discovering trust, or a friendly neighborhood tabby waiting on a stone wall every morning, every feline leaves paw prints on our lives. Meowoirs provides a quiet, dedicated sanctuary to record those moments before time fades them.",
    features: [
      {
        title: "Dedicated Cat Profiles (Home & Street)",
        description: "Easily organize profiles for indoor companions and outdoor neighborhood cats. Keep photos, notes, and individual memory streams distinct for each feline.",
        iconName: "Heart"
      },
      {
        title: "Daily Photo & Note Journaling",
        description: "Save photos alongside your daily notes. Record the funny quirks, quiet naps in sunlit patches, sudden bursts of playfulness, and gentle headbutts.",
        iconName: "Camera"
      },
      {
        title: "Dual Mood Reflections",
        description: "Capture feelings on both sides of every memory: record how your cat felt alongside your own emotional reflection to remember how each moment felt.",
        iconName: "Sparkles"
      },
      {
        title: "100% Offline-First & Private",
        description: "Your memories belong to you and your cat alone. No account required, no remote servers collecting photos—everything stays safely on your personal device.",
        iconName: "ShieldCheck"
      }
    ],
    screenshots: [
      {
        src: "/screenshots/meowoirs_1.webp",
        alt: "Meowoirs app — cat profiles and memory timeline",
        glow: "rgba(249, 115, 22, 0.4)",
        delay: 0,
        width: 896,
        height: 1200
      },
      {
        src: "/screenshots/meowoirs_2.webp",
        alt: "Meowoirs app — emotional mood reflections and daily cat stories",
        glow: "rgba(168, 85, 247, 0.4)",
        delay: 200,
        width: 1200,
        height: 896
      },
      {
        src: "/screenshots/meowoirs_3.webp",
        alt: "Meowoirs app — editorial memory entries with photos and notes",
        glow: "rgba(34, 211, 238, 0.4)",
        delay: 400,
        width: 896,
        height: 1200
      }
    ],
    icon_url: "/meowoirs-icon.webp",
    video_url: "/videos/meowoirs-main-video.mp4",
    video_poster: "/videos/meowoirs-video-poster.webp",
    playstore_link: "https://play.google.com/store/apps/details?id=com.limanex.meowoirs",
    is_featured: true,
    badge: "New Release"
  }
];
