const UsersMustData = [
  "Ensure all information provided is accurate, complete, and up-to-date.",
  "Comply with applicable laws while using the Platform.",
  "Regularly back up their Transaction Information.",
];

const WarrantiesData = [
  "User-provided inaccurate or incomplete information.",
  "Unauthorized access to Profiles.",
  "Reliance on Third-Party Services.",
];

const UsersProhibitedData = [
  "Using the Platform for unlawful or fraudulent purposes.",
  "Uploading harmful or malicious code.",
  "Copying, modifying, or distributing Platform content without authorization.",
];

const ProfileCreationData = [
  "Transaction-related updates.",
  "Payment reminders.",
  "Service information and promotional offers.",
];

const TerminationData = [
  "Access to the Services will be disabled.",
  "Any outstanding payments owed by the User become immediately payable.",
  "Provisions intended to survive termination remain effective.",
];

const ServicesData = [
  "Cash Book: Records cash inflows and outflows.",
  "Material Book: Tracks material inflows and outflows.",
  "Accounts Book: Manages customer dues and supplier payments.",
];

const TransactionInformationData = [
  "The use of the Platform to record transactions.",
  "The creation of a profile on the Platform.",
  "Consent to receive transaction-related communications from Payslate.",
];

const ServicesLabel =
  'The Platform facilitates the management of daily transactions for small businesses, such as vendors, merchants, and suppliers ("Merchants"), by enabling the recording of inflows and outflows of cash and materials, and tracking account balances in the following books:';

const ServicesDescription =
  "The Platform also provides analytical insights to assist Users in better managing their transactions and financial activities. The Services collectively include the Platform’s features, updates, and enhancements.";

const ProfileCreation =
  'To access the Services, Merchants must create a profile on the Platform ("Profile") by providing accurate and up-to-date information, including business details and contact information. Merchants are solely responsible for maintaining the confidentiality of their login credentials and promptly notifying Payslate of any unauthorized access or security breaches.';

const TransactionInformation =
  'Merchants can upload details of transactions with their Customers, including amounts, items, and payment statuses ("Transaction Information"), on the Platform. Transaction Information is shared with Customers through electronic communications such as SMS, WhatsApp, or email, based on the contact details provided.';

const ThirdPartyServicesDescription =
  'The Platform may integrate with third-party services or contain links to external platforms ("Third-Party Services"). Payslate does not endorse or assume responsibility for the content, accuracy, or functionality of Third-Party Services.';

const IntellectualPropertyDescription =
  "Payslate owns or licenses all intellectual property rights related to the Platform and Services. Users are granted a limited, non-exclusive, revocable license to use the Platform in accordance with these Terms. Feedback provided by Users may be used by Payslate without any obligation for compensation or acknowledgment.";

const TerminationDescription =
  "Payslate reserves the right to terminate access to the Platform or Services if a User violates these Terms. Upon termination:";

const WarrantiesDescription =
  'Payslate provides the Platform and Services "as is" without any warranties. Users acknowledge that Payslate is not a financial institution and does not directly provide financial products or services. Payslate disclaims liability for any loss or damages arising from:';

const LiabilityDescription =
  "To the fullest extent permitted by law, Payslate is not liable for any indirect, incidental, or consequential damages arising from the use of the Platform or Services.";

const ResolutionDescription =
  "These Terms are governed by the laws of India. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, India.";

export const TermsHeader = {
  label: "Payslate",
  heading: "Terms and Conditions",
  date: "Effective January 10, 2026",
};

export const Description =
  'These terms and conditions ("Terms") govern your use of or access to Payslate ("Website"), the "Payslate" mobile application ("App"), and the associated services ("Services") provided by Dotmite Technologies Private Limited ("Payslate"). The Website and App are collectively referred to as the "Platform."By accessing or using the Platform or Services, you agree to comply with these Terms, including our Privacy Policy, and any additional guidelines or terms issued by us from time to time. If you do not agree with these Terms, please refrain from using the Platform or Services. These Terms form a binding legal agreement between Dotmite Technologies Private Limited and the user ("User"), including Merchants and Customers (collectively referred to as "you").';

export const TERMS_DATA = [
  {
    id: 1,
    heading: "1. Services",
    data: [
      {
        type: "Paragraph",
        data: ServicesLabel,
      },
      {
        type: "List",
        listType: "ul",
        data: ServicesData,
      },
      {
        type: "Paragraph",
        data: ServicesDescription,
      },
    ],
  },
  {
    id: 2,
    heading: "2. Profile Creation",
    data: [
      {
        type: "Paragraph",
        data: ProfileCreation,
      },
      {
        type: "List",
        listType: "ul",
        data: ProfileCreationData,
      },
    ],
  },
  {
    id: 3,
    heading: "3. Transaction Information",
    data: [
      {
        type: "Paragraph",
        data: TransactionInformation,
      },
      {
        type: "List",
        listType: "ul",
        data: TransactionInformationData,
      },
    ],
  },
  {
    id: 4,
    heading: "4. Third-Party Services",
    data: [
      {
        type: "Paragraph",
        data: ThirdPartyServicesDescription,
      },
    ],
  },
  {
    id: 5,
    heading: "5. User Responsibilities",
    data: [
      {
        type: "Paragraph",
        data: "Users must:",
      },
      {
        type: "List",
        listType: "ul",
        data: UsersMustData,
      },
      {
        type: "Paragraph",
        data: "Users are prohibited from:",
      },
      {
        type: "List",
        listType: "ul",
        data: UsersProhibitedData,
      },
    ],
  },
  {
    id: 6,
    heading: "6. Intellectual Property",
    data: [
      {
        type: "Paragraph",
        data: IntellectualPropertyDescription,
      },
    ],
  },
  {
    id: 7,
    heading: "7. Termination",
    data: [
      {
        type: "Paragraph",
        data: TerminationDescription,
      },
      {
        type: "List",
        listType: "ul",
        data: TerminationData,
      },
    ],
  },
  {
    id: 8,
    heading: "8. Disclaimers and Warranties",
    data: [
      {
        type: "Paragraph",
        data: WarrantiesDescription,
      },
      {
        type: "List",
        listType: "ul",
        data: WarrantiesData,
      },
    ],
  },
  {
    id: 9,
    heading: "9. Limitation of Liability",
    data: [
      {
        type: "Paragraph",
        data: LiabilityDescription,
      },
    ],
  },
  {
    id: 10,
    heading: "10. Governing Law and Dispute Resolution",
    data: [
      {
        type: "Paragraph",
        data: ResolutionDescription,
      },
      {
        type: "Paragraph",
        data: "For further queries, contact us at support@dotmite.com.",
      },
    ],
  },
];
