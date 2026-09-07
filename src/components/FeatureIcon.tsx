import { TestTube, Sparkles, Bell, Clock, Heart, Camera, ShieldCheck, BookOpen, HelpCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  TestTube,
  Sparkles,
  Bell,
  Clock,
  Heart,
  Camera,
  ShieldCheck,
  BookOpen,
};

interface FeatureIconProps extends LucideProps {
  name: string;
  className?: string;
}

export function FeatureIcon({ name, ...props }: FeatureIconProps) {
  const Icon = iconMap[name] || HelpCircle;
  return <Icon {...props} />;
}
