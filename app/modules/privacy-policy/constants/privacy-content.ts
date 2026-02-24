import { LegalContent } from "../../../../types/legal-types";

export const PRIVACY_POLICY_CONTENT: LegalContent = {
  title: "Privacy Policy",
  lastUpdated: "January 1, 2026",
  introduction: {
    id: "introduction",
    title: "1. INTRODUCTION",
    content:
      'Mysa A-Frame Cottage ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.staymysa.in (the "Site") and use our services. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site or services. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting to the Site, and you waive the right to receive specific notice of each such change or modification.',
  },
  sections: [
    {
      id: "information-we-collect",
      title: "2. INFORMATION WE COLLECT",
      subsections: [
        {
          title: "2.1 Information You Provide Directly",
          points: [
            "Booking and Reservation Information: Name, email address, phone number, check-in/out dates, guest count, room preferences, special requests, and payment information (processed via third-party gateways).",
            "Contact Form Information: Name, email, phone number, subject, message content, and attachments.",
            "Account Information: Username, password, billing address, and activity history.",
            "Communication Information: Emails, messages, newsletter subscriptions, feedback, and customer service interactions.",
          ],
        },
        {
          title: "2.2 Information Collected Automatically",
          points: [
            "Device and Access Information: IP address, browser type/version, operating system, device type, pages visited, and referring URLs.",
            "Cookies and Tracking Technologies: Session and persistent cookies, web beacons, pixels, and analytics data.",
            "Location Information: Approximate location based on IP address, precise location with permission.",
          ],
        },
        {
          title: "2.3 Information from Third Parties",
          points: [
            "Payment Processors: Transaction data and billing information.",
            "Analytics Providers: Usage data from Google Analytics.",
            "Social Media: Public profile information if accounts are linked.",
            "Guest Communication: Reviews from Google, Booking.com, TripAdvisor, etc.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "3. HOW WE USE YOUR INFORMATION",
      items: [
        {
          label: "Booking Services",
          content:
            "Process reservations, send confirmations/reminders, manage check-in/out, process payments, and handle cancellations.",
        },
        {
          label: "Communication",
          content:
            "Respond to inquiries, send newsletters (with consent), and notify about updates or service announcements.",
        },
        {
          label: "Personalization",
          content:
            "Customize Site experience, remember preferences, and tailor content or recommendations.",
        },
        {
          label: "Analytics",
          content:
            "Analyze usage patterns to improve Site functionality and user experience.",
        },
        {
          label: "Marketing",
          content: "Send promotional offers and conduct marketing campaigns.",
        },
        {
          label: "Legal & Security",
          content:
            "Comply with legal obligations, prevent fraud, and protect the safety of guests and staff.",
        },
      ],
    },
    {
      id: "sharing-info",
      title: "4. HOW WE SHARE YOUR INFORMATION",
      content:
        "We do NOT sell your personal information to third parties. We share information with:",
      subsections: [
        {
          title: "4.1 Service Providers",
          content:
            "Third parties assist in operations: Payment processors (Stripe, Razorpay), Email services (Mailchimp), Hosting (Wix), and Analytics (Google Analytics).",
        },
        {
          title: "4.2 Business Partners",
          content:
            "Booking partners (Airbnb, Booking.com) and activity operators with your consent.",
        },
      ],
      extra:
        "We also disclose information for legal requirements or business transfers (mergers/acquisitions).",
    },
    {
      id: "cookies",
      title: "5. COOKIES AND TRACKING",
      subsections: [
        {
          title: "5.1 Types of Cookies Use",
          points: [
            "Essential: Required for Site functionality (security, payments).",
            "Analytics: Google Analytics and Hotjar for performance tracking.",
            "Marketing: Google Ads and Facebook Pixel for campaign tracking.",
            "Preference: Remembering user settings (language, dark mode).",
          ],
        },
      ],
      footer:
        "You can manage cookies through your browser settings. Note that disabling them may affect functionality.",
    },
    {
      id: "security",
      title: "6. DATA SECURITY",
      content:
        "We implement industry-standard measures: SSL Encryption (HTTPS), Secure Payment Processing (no card storage on our servers), Access Controls, and Regular Security Audits.",
    },
    {
      id: "retention",
      title: "7. DATA RETENTION",
      content:
        "Booking data is retained for 7 years for legal compliance in India. Account info is kept while active. Analytics data is deleted after 26 months of inactivity.",
    },
    {
      id: "rights",
      title: "8. YOUR PRIVACY RIGHTS",
      content:
        "Under Indian Data Protection Law, you have the right to access, correction, erasure ('Right to be Forgotten'), data portability, and to object to processing. Contact admin@staymysa.in to exercise these rights.",
    },
    {
      id: "children",
      title: "9. CHILDREN'S PRIVACY",
      content:
        "Our Site is not intended for children under 18. We do not knowingly collect information from children. Parents can contact us for data deletion if necessary.",
    },
    {
      id: "contact",
      title: "13. CONTACT INFORMATION",
      details: [
        "Email: admin@staymysa.in / privacy@staymysa.in",
        "Phone: +91-7374000057",
        "Address: Mysa A-Frame Cottage, Fozal Valley, Kullu, Himachal Pradesh 175101, India",
      ],
      grievance:
        "For grievances, contact our Grievance Redressal Officer at grievance@staymysa.in.",
    },
  ],
};
