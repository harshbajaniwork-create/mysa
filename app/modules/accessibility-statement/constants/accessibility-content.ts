import { LegalContent } from "../../../../types/legal-types";

export const ACCESSIBILITY_CONTENT: LegalContent = {
  title: "Accessibility Statement",
  lastUpdated: "February 24, 2026",
  introduction: {
    id: "adjustments",
    title: "Accessibility adjustments on this site",
    content:
      "We have adapted this site in accordance with WCAG 2.1 guidelines, and have made the site accessible to the level of AA. This site's contents have been adapted to work with assistive technologies, such as screen readers and keyboard use. As part of this effort, we have also implemented various technical adjustments to ensure a seamless experience for all users.",
  },
  sections: [
    {
      id: "efforts",
      title: "Our Accessibility Efforts",
      content:
        "We have taken the following steps to ensure the accessibility of our website:",
      subsections: [
        {
          title: "Technical Fixes",
          points: [
            "Used specialized accessibility tools to find and fix potential issues",
            "Set the official language of the site for screen readers",
            "Optimized the content order of all site pages",
            "Defined clear and semantic heading structures",
            "Added descriptive alternative text to all images",
            "Implemented color combinations that meet high contrast requirements",
            "Reduced the use of unnecessary motion and animations",
            "Ensured all media (video and audio) elements are accessible",
          ],
        },
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Content",
      content:
        "The accessibility of certain pages on the site may depend on contents that do not belong to Mysa (such as embedded maps or social media feeds). We strive to ensure these are as accessible as possible, but we declare partial compliance for pages containing third-party elements.",
    },
    {
      id: "contact",
      title: "Requests, issues, and suggestions",
      content:
        "If you find an accessibility issue on the site, or if you require further assistance, you are welcome to contact us through our accessibility coordinator:",
      details: [
        "Coordinator: Accessibility Team @ Mysa",
        "Phone: +91-7374000057",
        "Email: Info@mysacottage.com",
        "Address: Dhara Chowk, Runga Road, Fozal Valley 175129",
      ],
    },
  ],
};
