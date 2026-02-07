import Card from "./Card";

const featuresData = [
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

const details = {
  label: "Key Features",
  title: "All-in-one platform to manage your company finances",
  description:
    "Payslate simplifies financial operations by combining cash flow management, material tracking, and business accounts in one secure, real-time system.",
};

const KEY_FEATUURES_CARD_STYLE =
  "relative px-3 lg:nth-[3n+2]:before:content-[''] lg:nth-[3n+2]:before:absolute lg:nth-[3n+2]:before:inset-y-0 lg:nth-[3n+2]:before:left-0 lg:nth-[3n+2]:before:w-px lg:nth-[3n+2]:before:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)] lg:nth-[3n+2]:after:content-[''] lg:nth-[3n+2]:after:absolute lg:nth-[3n+2]:after:inset-y-0 lg:nth-[3n+2]:after:right-0 lg:nth-[3n+2]:after:w-px lg:nth-[3n+2]:after:bg-[linear-gradient(to_bottom,#F5F5F5,#CBCBCB,#F5F5F5)]";

const Features = () => (
  <section
    id="features"
    className="mx-auto bg-white max-w-7xl px-4 py-20"
    aria-labelledby="features-heading"
  >
    <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="w-full">
        <p className="text-base font-semibold uppercase text-primary">
          {details.label}
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2
            id="features-heading"
            className="max-w-xl text-2xl sm:text-3xl lg:text-4xl font-bold text-text"
          >
            {details.title}
          </h2>

          <p className="max-w-md text-base font-normal text-muted">
            {details.description}
          </p>
        </div>
      </div>
    </header>

    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-[url('/assets/imageBg.png')] bg-cover bg-center bg-no-repeat">
      {featuresData.map((feature, index) => (
        <li
          key={index}
          className={KEY_FEATUURES_CARD_STYLE}
        >
          <Card
            title={feature.title}
            description={feature.description}
            dotColor={feature.color}
            dotBgColor={feature.bgColor}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default Features;
