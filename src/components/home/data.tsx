import AppleLogo from "@/src/icons/AppleLogo";
import { AppleStoreIcon } from "@/src/icons/AppStore";
import CameraIcon from "@/src/icons/CameraIcon";
import CapgeminiLogo from "@/src/icons/CapgeminiLogo";
import CashFlowIcon from "@/src/icons/CashFlowIcon";
import CollaborationIcon from "@/src/icons/CollaborationIcon";
import DecathlonLogo from "@/src/icons/DecathlonLogo";
import DownloadIcon from "@/src/icons/DownloadIcon";
import FileDataIcon from "@/src/icons/FileDataIcon";
import GraphIcon from "@/src/icons/GraphIcon";
import HsbcLogo from "@/src/icons/HsbcLogo";
import LottoSocialLogo from "@/src/icons/LottoSocialLogo";
import MaterialIcon from "@/src/icons/MaterialIcon";
import NikeLogo from "@/src/icons/NikeLogo";
import { PlayStoreIcon } from "@/src/icons/PlayStore";
import PlayStoreLogo from "@/src/icons/PlayStoreLogo";
import TcsLogo from "@/src/icons/TcsLogo";
import XeroxLogo from "@/src/icons/XeroxLogo";
import { title } from "process";

export const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonial" },
];

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
    icon: <CashFlowIcon />,
    bg: "#F1EFFF",
  },
  {
    id: 2,
    title: "Material Book Management",
    description: "Track materials, pricing, and stock details with precision.",
    icon: <MaterialIcon />,
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
    icon: <CollaborationIcon />,
    bg: "#FFEFFB",
  },
];

export const featuresData = [
  {
    title: "Multi-Book Management",
    description:
      "Maintain separate books for cash, materials, and vendors — fully organized and auditable.",
    color: "#2E68FD",
    bgColor: "#ECF0FB",
  },
  {
    title: "Transaction Management",
    description:
      "Add income, expenses, and purchase entries instantly with category and date tracking.",
    color: "#FC4343",
    bgColor: "#FEEDED",
  },
  {
    title: "Material & Stock Control",
    description:
      "Keep accurate records of procurement details, pricing, and stock availability.",
    color: "#08A965",
    bgColor: "#E5FCF2",
  },
  {
    title: "Vendor Ledger Tracking",
    description:
      "Track vendor-wise transactions, outstanding balances, and payment history.",
    color: "#3B7793",
    bgColor: "#E1F1F9",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Owner, Partner, Manager, and Employee roles with customized visibility and control.",
    color: "#D77E1B",
    bgColor: "#FAEEE2",
  },
  {
    title: "Analytics Dashboard",
    description:
      "View KPIs, cash trends, expense distribution, and operational insights in real time.",
    color: "#932EFA",
    bgColor: "#F4EDFC",
  },
];

export const details = {
  label: "Key Features",
  title: "All-in-One Platform to Manage Industrial Business Finance",
  description:
    "Payslate simplifies financial operations by combining cash flow management, material tracking, vendor records, and structured permissions in one powerful system.",
};

export const KEY_FEATUURES_CARD_STYLE =
  "relative px-5 lg:nth-[3n+2]:before:content-[''] lg:nth-[3n+2]:before:absolute lg:nth-[3n+2]:before:inset-y-0 lg:nth-[3n+2]:before:left-0 lg:nth-[3n+2]:before:top-8 lg:nth-[3n+2]:before:w-px lg:nth-[3n+2]:before:h-[145px]  lg:nth-[3n+2]:before:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)] lg:nth-[3n+2]:after:content-[''] lg:nth-[3n+2]:after:absolute lg:nth-[3n+2]:after:inset-y-0 lg:nth-[3n+2]:after:right-0 lg:nth-[3n+2]:after:top-8 lg:nth-[3n+2]:after:w-px lg:nth-[3n+2]:after:h-[145px] lg:nth-[3n+2]:after:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)]";

export const TestimonialData = {
  label: "TESTIMONIAL",
  title: "Trusted by Industrial Business Owners",
  paragraph:
    "Experience a finance management app built for operational clarity and team transparency. No confusion, no scattered records — just structured financial control.",
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

export const LogosData = [
  {
    customerName: "DECATHLON",
    logo: "/assets/icons/companyLogos/decathlonIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/decathlonColoredIcon.svg",
  },
  {
    customerName: "XEROX",
    logo: "/assets/icons/companyLogos/xeroxIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/xeroxColoredIcon.svg",
  },
  {
    customerName: "HSBC",
    logo: "/assets/icons/companyLogos/hsbcIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/hsbcColoredIcon.svg",
  },
  {
    customerName: "NIKE",
    logo: "/assets/icons/companyLogos/nikeIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/nikeColoredIcon.svg",
  },
  {
    customerName: "TCS",
    logo: "/assets/icons/companyLogos/tcsIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/tcsColoredIcon.svg",
  },
  {
    customerName: "CAPGEMINI",
    logo: "/assets/icons/companyLogos/capgeminiIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/capgeminiColoredIcon.svg",
  },
  {
    customerName: "LOTTOSOCIAL",
    logo: "/assets/icons/companyLogos/lottoSocialIcon.svg",
    coloredLogo: "/assets/icons/companyLogos/lottoSocialColoredIcon.svg",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "Payslate completely changed how we manage our daily cash and expenses. Everything is now recorded properly and easy to track, giving our partners full financial visibility without constant follow-ups. It has made our financial workflow more structured, transparent, and professional.",
    name: "Deepak Gowda",
    role: "Manufacturing Business Owner",
  },
  {
    id: 2,
    rating: 2,
    text: "We used to manage materials and vendor payments manually, which often created confusion. With Payslate, everything is organized in one place with clear transaction history and accurate records. It gives us better control, accountability, and confidence in our financial decisions.",
    name: "Arjun Mehta",
    role: "Industrial Contractor",
  },
  {
    id: 3,
    rating: 4,
    text: "The role-based access feature fits perfectly with our company structure. Employees can add transactions while management monitors operations in real time. Cash flow tracking is now accurate, secure, and saves us hours of manual verification every week.",
    name: "Sandeep Sharma",
    role: "Operations Manager",
  },
];

export const DownloadAppSectionData = {
  label: "Download App",
  subheading: "Manage Cash, Materials & Vendors — All in One App",
  paragraph:
    "Payslate is designed for industrial businesses that need structured financial workflows, secure collaboration, and real-time visibility.",
};

export const appDownloadOptions = [
  {
    platform: "ios",
    title: "Download for iOS",
    description:
      "Track transactions, manage materials, and monitor vendors securely on your iPhone.",
    ctaLabel: "App Store",
    storeUrl: "https://apps.apple.com/in/app/payslate/id6737227735",
  },
  {
    platform: "android",
    title: "Download for Android",
    description:
      "Complete financial control for your industrial business — anytime, anywhere.",
    ctaLabel: "Play Store",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.dotmite.payslate",
  },
];

export const navLinks1 = [
  { label: "home", href: "/#home" },
  { label: "features", href: "/#feat" },
  { label: "how it Works", href: "/#how-it-works" },
  { label: "key features", href: "/#features" },
];

export const navLinks2 = [
  { label: "testimonial", href: "/#testimonial" },
  { label: "download app", href: "/#download" },
  { label: "privacy policy", href: "/privacy" },
  { label: "term and conditions", href: "/termsandcondition" },
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

export const SocialMediaData = [
  {
    name: "instagram",
    icon: "/assets/icons/socialMediaIcons/instagramIcon.svg",
    link: "https://www.instagram.com/",
  },
  {
    name: "facebook",
    icon: "/assets/icons/socialMediaIcons/facebookIcon.svg",
    link: "https://www.facebook.com/",
  },
  {
    name: "linkedin",
    icon: "/assets/icons/socialMediaIcons/linkedinIcon.svg",
    link: "https://www.linkedin.com/",
  },
];

export const DownloadOptionData = [
  {
    label: "Download on the",
    name: "App Store",
    link: "https://apps.apple.com/in/app/payslate/id6737227735",
    icon: <AppleLogo />,
  },
  {
    label: "GET IT ON",
    name: "Google Play",
    link: "https://play.google.com/store/apps/details?id=com.dotmite.payslate",
    icon: <PlayStoreLogo />,
  },
];

export const ExploreAppData = {
  title: "Take Control of Your Business Finance Today",
  description:
    "Payslate brings your cash flow, material tracking, vendor management, and transactions into one secure and structured platform.",
  buttonLabel: "Download Payslate now",
};

export const HowItWorksSteps = [
  {
    number: "01",
    title: "Create Your Business Profile",
    description:
      "Set up your industrial business in minutes and define roles for your team.",
    icon: <DownloadIcon />,
  },
  {
    number: "02",
    title: "Create Books & Categories",
    description:
      "Organize operations with dedicated Cash Book, Material Book, and Vendor records.",
    icon: <FileDataIcon />,
  },
  {
    number: "03",
    title: "Track, Collaborate & Analyze",
    description:
      "Track transactions, share access, and get real-time insights.",
    icon: <CameraIcon />,
  },
];