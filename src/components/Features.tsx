// data/features.ts
const featuresData = [
  {
    title: "Multi-Book Management",
    description: "Manage cash, materials & accounts organized and auditable.",
    color: "bg-blue-500",
  },
  {
    title: "Cash Flow Tracking",
    description:
      "Monitor every inflow and outflow of cash with real-time updates.",
    color: "bg-red-500",
  },
  {
    title: "Material & Stock Control",
    description:
      "Keep accurate records of materials, pricing, and stock levels.",
    color: "bg-green-500",
  },
  {
    title: "Automated Reports",
    description:
      "Generate instant summaries for customers, vendors, and departments.",
    color: "bg-purple-500",
  },
  {
    title: "Collaborative Access",
    description:
      "Share books securely with partners or managers using customizable permissions.",
    color: "bg-orange-500",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize KPIs, trends, and insights to make smarter business decisions.",
    color: "bg-indigo-500",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="mx-auto bg-white max-w-7xl px-4 py-20"
      aria-labelledby="features-heading"
    >
      
      <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase text-[#804FB0]">
            Key Features
          </p>
          <h2
            id="features-heading"
            className="mt-2 max-w-xl text-3xl font-semibold text-gray-900"
          >
            All-in-one platform to manage your company finances
          </h2>
        </div>

        <p className="max-w-md text-sm text-gray-600">
          Payslate simplifies financial operations by combining cash flow
          management, material tracking, and business accounts in one secure,
          real-time system.
        </p>
      </header>

      
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, index) => (
          <li
            key={index}
            className="rounded-xl border border-gray-100 bg-white p-6"
          >
            <article className="flex flex-col gap-3">
        
              <span
                className={`h-2 w-2 rounded-full ${feature.color}`}
                aria-hidden="true"
              />

              <h3 className="text-base font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600">{feature.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
