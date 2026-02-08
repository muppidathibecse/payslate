import GraphIcon from "@/src/icons/GraphIcon";

export const avatarDetails = [
    {
        id: 1,
        url: '/assets/hero-section/avatars/Avatar1.png',
    },
    {
        id: 2,
        url: '/assets/hero-section/avatars/Avatar2.png',
    },
    {
        id: 3,
        url: '/assets/hero-section/avatars/Avatar3.png',
    }
]

export const featureDetails = [
    {
        id: 1,
        title: 'Cash Flow Tracking',
        description: 'Stay on top of every cash in and out across your company.',
        icon: <GraphIcon />,
        bg: "#F1EFFF",
    },
    {
        id: 2,
        title: 'Material Book Management',
        description: 'Easily categorize and track all your business materials and inventory.',
        icon: <GraphIcon />,
        bg: "#EFF4FF",
    },
    {
        id: 3,
        title: 'Automated Reporting',
        description: 'Generate instant reports for customers, vendors, and departments.',
        icon: <GraphIcon />,
        bg: "#EFF2FF",
    },
    {
        id: 4,
        title: 'Multi-User Collaboration',
        description: 'Share books securely with managers or partners using customizable permissions.',
        icon: <GraphIcon />,
        bg: "#FFEFFB",
    }
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