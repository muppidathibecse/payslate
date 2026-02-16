import {
  Description,
  PRIVACY_POLICY_DATA,
  PrivacyHeader,
} from "@/src/components/privacyPolicyComponents/privacyPolicyData";

import {
  Heading,
  List,
  Paragraph,
} from "@/src/components/privacyPolicyComponents/PrivacyPolicyFormat";

const page = () => {
  return (
    <section className="flex justify-center w-full px-4 pt-18 md:pt-25 2xl:px-0">
      <div className="w-full flex flex-col 2xl:w-360 mb-20">
        <span className="text-secondary text-[16px] font-semibold">
          {PrivacyHeader.label}
        </span>
        <h1 className="text-text text-[20px] sm:text-[30px] md:text-[40px] font-bold">
          {PrivacyHeader.heading}
        </h1>
        <span className="text-text-1 text-[16px] font-normal mb-10">
         {PrivacyHeader.date}
        </span>
        <Paragraph label={Description} />
        {PRIVACY_POLICY_DATA.map((section) => (
          <section key={section.id}>
            <Heading label={section.heading} />
            {section.data.map((item, index) => {
              switch (item.type) {
                case "Paragraph":
                  return <Paragraph key={index} label={item.data as string} />;
                case "List":
                  return (
                    <List
                      key={index}
                      items={item.data as string[]}
                      type={item.listType as "ul" | "ol"}
                    />
                  );
                default:
                  return null;
              }
            })}
          </section>
        ))}
      </div>
    </section>
  );
};

export default page;
