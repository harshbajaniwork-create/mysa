import { LegalContent } from "../../../../types/legal-types";

export const TERMS_CONTENT: LegalContent = {
  title: "Terms & Conditions",
  lastUpdated: "January 1, 2026",
  introduction: {
    id: "legal-disclaimer",
    title: "A Legal Disclaimer",
    content:
      "The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of Terms & Conditions. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific terms you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Terms & Conditions.",
  },
  sections: [
    {
      id: "basics",
      title: "Terms & Conditions - The Basics",
      content:
        "Having said that, Terms and Conditions (“T&C”) are a set of legally binding terms defined by you, as the owner of this website. The T&C set forth the legal boundaries governing the activities of the website visitors, or your customers, while they visit or engage with this website. The T&C are meant to establish the legal relationship between the site visitors and you as the website owner.",
      subsections: [
        {
          title: "Customization",
          content:
            "T&C should be defined according to the specific needs and nature of each website. For example, a website offering products to customers in e-commerce transactions requires T&C that are different from the T&C of a website only providing information (like a blog, a landing page, and so on).",
        },
        {
          title: "Legal Protection",
          content:
            "T&C provide you as the website owner the ability to protect yourself from potential legal exposure, but this may differ from jurisdiction to jurisdiction, so make sure to receive local legal advice if you are trying to protect yourself from legal exposure.",
        },
      ],
    },
    {
      id: "what-to-include",
      title: "What To Include In The T&C Document",
      content:
        "Generally speaking, T&C often address these types of issues: Who is allowed to use the website; the possible payment methods; a declaration that the website owner may change his or her offering in the future; the types of warranties the website owner gives his or her customers; a reference to issues of intellectual property or copyrights, where relevant; the website owner’s right to suspend or cancel a member’s account; and much much more.",
    },
  ],
};
