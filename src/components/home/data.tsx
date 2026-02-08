import { AppleStoreIcon } from "@/src/icons/AppStore";
import CapgeminiLogo from "@/src/icons/CapgeminiLogo";
import DecathlonLogo from "@/src/icons/DecathlonLogo";
import GraphIcon from "@/src/icons/GraphIcon";
import HsbcLogo from "@/src/icons/HsbcLogo";
import LottoSocialLogo from "@/src/icons/LottoSocialLogo";
import NikeLogo from "@/src/icons/NikeLogo";
import { PlayStoreIcon } from "@/src/icons/PlayStore";
import TcsLogo from "@/src/icons/TcsLogo";
import XeroxLogo from "@/src/icons/XeroxLogo";
import { label } from "framer-motion/client";

export const avatarDetails = [
  {
    id: 1,
    url: "/assets/hero-section/avatars/Avatar1.png",
  },
  {
    id: 2,
    url: "/assets/hero-section/avatars/Avatar2.png",
  },
  {
    id: 3,
    url: "/assets/hero-section/avatars/Avatar3.png",
  },
];

export const featureDetails = [
  {
    id: 1,
    title: "Cash Flow Tracking",
    description: "Stay on top of every cash in and out across your company.",
    icon: <GraphIcon />,
    bg: "#F1EFFF",
  },
  {
    id: 2,
    title: "Material Book Management",
    description:
      "Easily categorize and track all your business materials and inventory.",
    icon: <GraphIcon />,
    bg: "#EFF4FF",
  },
  {
    id: 3,
    title: "Automated Reporting",
    description:
      "Generate instant reports for customers, vendors, and departments.",
    icon: <GraphIcon />,
    bg: "#EFF2FF",
  },
  {
    id: 4,
    title: "Multi-User Collaboration",
    description:
      "Share books securely with managers or partners using customizable permissions.",
    icon: <GraphIcon />,
    bg: "#FFEFFB",
  },
];

export const featuresData = [
  {
    title: "Multi-Book Management",
    description: "Manage cash, materials & accounts organized and auditable.",
    color: "#2E68FD",
    bgColor: "#ECF0FB",
  },
  {
    title: "Cash Flow Tracking",
    description:
      "Monitor every inflow and outflow of cash with real-time updates.",
    color: "#FC4343",
    bgColor: "#FEEDED",
  },
  {
    title: "Material & Stock Control",
    description:
      "Keep accurate records of materials, pricing, and stock levels.",
    color: "#08A965",
    bgColor: "#E5FCF2",
  },
  {
    title: "Automated Reports",
    description:
      "Generate instant summaries for customers, vendors, and departments.",
    color: "#3B7793",
    bgColor: "#E1F1F9",
  },
  {
    title: "Collaborative Access",
    description:
      "Share books securely with partners or managers using customizable permissions.",
    color: "#D77E1B",
    bgColor: "#FAEEE2",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize KPIs, trends, and insights to make smarter business decisions.",
    color: "#932EFA",
    bgColor: "#F4EDFC",
  },
];

export const details = {
  label: "Key Features",
  title: "All-in-one platform to manage your company finances",
  description:
    "Payslate simplifies financial operations by combining cash flow management, material tracking, and business accounts in one secure, real-time system.",
};

export const KEY_FEATUURES_CARD_STYLE =
  "relative px-3 lg:nth-[3n+2]:before:content-[''] lg:nth-[3n+2]:before:absolute lg:nth-[3n+2]:before:inset-y-0 lg:nth-[3n+2]:before:left-0 lg:nth-[3n+2]:before:w-px lg:nth-[3n+2]:before:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)] lg:nth-[3n+2]:after:content-[''] lg:nth-[3n+2]:after:absolute lg:nth-[3n+2]:after:inset-y-0 lg:nth-[3n+2]:after:right-0 lg:nth-[3n+2]:after:w-px lg:nth-[3n+2]:after:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)]";

export const TestimonialData = {
  label: "TESTIMONIAL",
  title: "We've build trust with reviews from real users",
  paragraph:
    "Boost your credibility by featuring genuine testimonials from realusers.",
};

export const Logos = [
  {
    icon: <DecathlonLogo />,
  },
  {
    icon: <XeroxLogo />,
  },
  {
    icon: <HsbcLogo />,
  },
  {
    icon: <NikeLogo />,
  },
  {
    icon: <TcsLogo />,
  },
  {
    icon: <CapgeminiLogo />,
  },
  {
    icon: <LottoSocialLogo />,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
    name: "Ethan Williams",
    role: "Digital Marketing Specialist",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    rating: 3,
    text: "Smooth payments, clear pricing, and a stress-free workflow. Everything just works perfectly.",
    name: "Sarah Miller",
    role: "Startup Founder",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 3,
    rating: 4,
    text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
    name: "Daniel Thompson",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 4,
    rating: 2,
    text: "Everything feels simple and intuitive. I didn’t need any onboarding.",
    name: "Alex Morgan",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    id: 5,
    rating: 1,
    text: "Good experience overall, but there’s room for improvement.",
    name: "Chris Lee",
    role: "Freelancer",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    id: 6,
    rating: 5,
    text: "Fast payments and very clear pricing. Highly recommended.",
    name: "Emily Stone",
    role: "Business Owner",
    avatar: "https://i.pravatar.cc/100?img=29",
  },
  {
    id: 7,
    rating: 4,
    text: "Best payment experience I’ve had so far.",
    name: "Ryan Cooper",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=35",
  },
  {
    id: 8,
    rating: 3,
    text: "Nice UI and easy to use, but support could be faster.",
    name: "Olivia Brown",
    role: "Consultant",
    avatar: "https://i.pravatar.cc/100?img=41",
  },
  {
    id: 9,
    rating: 2,
    text: "Reliable and transparent. Exactly what we needed.",
    name: "Mark Wilson",
    role: "CTO",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    id: 10,
    rating: 1,
    text: "Everything works flawlessly. Love the experience!",
    name: "Sophia Turner",
    role: "Startup Founder",
    avatar: "https://i.pravatar.cc/100?img=58",
  },
];

export const DownloadAppSectionData = {
  label: "Download App",
  subheading: "All-in-one platform to manage your company finances",
  paragraph:
    "Payslate simplifies financial operations by combining cash flow management, material tracking, and business accounts in one secure, real-time system.",
};

export const appDownloadOptions = [
  {
    platform: "android",
    title: "Download for Android",
    description:
      "The best finance app ever built on Google. Get it on Google Play.",
    ctaLabel: "Play Store",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.dotmite.payslate",
  },
  {
    platform: "ios",
    title: "Download for iOS",
    description:
      "The best finance app ever built on Apple. Get it on the App Store.",
    ctaLabel: "App Store",
    storeUrl: "https://apps.apple.com/in/app/payslate/id6737227735",
  },
];

export const navLinks1 = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export const navLinks2 = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Key Features", href: "#key-features" },
  { label: "Testimonial", href: "#testimonial" },
];

export const buttons = [
  {
    label: "App Store",
    className: "uppercase font-medium text-sm",
    icon: <AppleStoreIcon />,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.dotmite.payslate",
  },
  {
    label: "Play Store",
    className: "uppercase font-medium text-sm",
    icon: <PlayStoreIcon />,
    storeUrl: "https://apps.apple.com/in/app/payslate/id6737227735",
  },
];
