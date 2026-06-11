import {
  Code2,
  Brain,
  Palette,
  Megaphone,
  Sparkles,
  Share2,
  Search,
  Globe,
  Smartphone,
  Monitor,
  Camera,
  Video,
  PenTool,
  Bot,
  Cpu,
  ShoppingCart,
  BarChart3,
  Rocket,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export const serviceIcons = {
  code2: Code2,
  brain: Brain,
  palette: Palette,
  megaphone: Megaphone,
  sparkles: Sparkles,
  share2: Share2,
  search: Search,
  globe: Globe,
  smartphone: Smartphone,
  monitor: Monitor,
  camera: Camera,
  video: Video,
  pentool: PenTool,
  bot: Bot,
  cpu: Cpu,
  shoppingcart: ShoppingCart,
  barchart3: BarChart3,
  rocket: Rocket,
  briefcase: Briefcase,
  shieldcheck: ShieldCheck,
};

export function getServiceIcon(iconKey) {
  return serviceIcons[iconKey] || Code2;
}
