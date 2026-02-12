import {
  Description,
  IntellectualPropertyDescription,
  LiabilityDescription,
  ProfileCreation,
  ProfileCreationData,
  ResolutionDescription,
  ServicesData,
  ServicesDescription,
  ServicesLabel,
  TerminationData,
  TerminationDescription,
  ThirdPartyServicesDescription,
  TransactionInformation,
  TransactionInformationData,
  UsersMustData,
  UsersProhibitedData,
  WarrantiesData,
  WarrantiesDescription,
} from "@/src/components/privacyPolicyComponents/termsData";

import {
  Heading,
  List,
  Paragraph,
} from "@/src/components/privacyPolicyComponents/PrivacyPolicyFormat";

const page = () => {
  return (
    <section className="flex justify-center w-full px-4 pt-18 md:pt-25 2xl:px-0">
      <div className="w-full flex flex-col 2xl:w-360 mb-20">
        <span className="text-secondary text-base font-semibold">PAYSLATE</span>
        <span className="text-text text-[20px] sm:text-[30px] md:text-[40px] font-bold">
          Terms and Conditions
        </span>
        <span className="text-text-1 text-base font-normal mb-10">
          Effective January 10, 2026
        </span>
        <Paragraph label={Description} />
        <Heading label="1. Services" />
        <Paragraph label={ServicesLabel} />
        <List items={ServicesData} type="ul" />
        <Paragraph label={ServicesDescription} />
        <Heading label="2. Profile Creation" />
        <Paragraph label={ProfileCreation} />
        <List items={ProfileCreationData} type="ul" />
        <Heading label="3. Transaction Information" />
        <Paragraph label={TransactionInformation} />
        <List items={TransactionInformationData} type="ul" />
        <Heading label="4. Third-Party Services" />
        <Paragraph label={ThirdPartyServicesDescription} />
        <Heading label="5. User Responsibilities" />
        <Paragraph label="Users must:" />
        <List items={UsersMustData} type="ul" />
        <Paragraph label="Users are prohibited from:" />
        <List items={UsersProhibitedData} type="ul" />
        <Heading label="6. Intellectual Property" />
        <Paragraph label={IntellectualPropertyDescription} />
        <Heading label="7. Termination" />
        <Paragraph label={TerminationDescription} />
        <List items={TerminationData} type="ul" />
        <Heading label="8. Disclaimers and Warranties" />
        <Paragraph label={WarrantiesDescription} />
        <List items={WarrantiesData} type="ul" />
        <Heading label="9. Limitation of Liability" />
        <Paragraph label={LiabilityDescription} />
        <Heading label="10. Governing Law and Dispute Resolution" />
        <Paragraph label={ResolutionDescription} />
        <Paragraph label="For further queries, contact us at support@dotmite.com." className='mt-4'/>
      </div>
    </section>
  );
};

export default page;