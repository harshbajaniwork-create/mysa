"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { PRIVACY_POLICY_CONTENT } from "../../constants/privacy-content";

import { LegalSubsection } from "@/types/legal-types";

export const PrivacyView = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is in view
      },
    );

    const sections = [
      PRIVACY_POLICY_CONTENT.introduction.id,
      ...PRIVACY_POLICY_CONTENT.sections.map((s) => s.id),
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const tocItems = [
    {
      id: PRIVACY_POLICY_CONTENT.introduction.id,
      title: PRIVACY_POLICY_CONTENT.introduction.title,
    },
    ...PRIVACY_POLICY_CONTENT.sections,
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {PRIVACY_POLICY_CONTENT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium"
          >
            Last Updated: {PRIVACY_POLICY_CONTENT.lastUpdated}
          </motion.p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden lg:block w-1/4 sticky top-32 h-fit">
            <h3 className="text-xl font-bold mb-6 text-primary border-b pb-2">
              Contents
            </h3>
            <ul className="space-y-3">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm font-medium transition-all duration-300 block py-1 border-l-2 pl-4 ${
                      activeId === item.id
                        ? "text-accent border-accent font-bold"
                        : "text-foreground/60 border-transparent hover:text-accent hover:border-accent/30"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="lg:w-3/4 space-y-16">
            <section
              id={PRIVACY_POLICY_CONTENT.introduction.id}
              className="prose prose-lg max-w-none scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                {PRIVACY_POLICY_CONTENT.introduction.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {PRIVACY_POLICY_CONTENT.introduction.content}
              </p>
            </section>

            {PRIVACY_POLICY_CONTENT.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-primary mb-8 pb-4 border-b border-accent/20">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    {section.content}
                  </p>
                )}

                {section.subsections &&
                  section.subsections.map((sub: LegalSubsection, idx) => (
                    <div key={idx} className="mb-8">
                      <h3 className="text-lg font-bold text-primary mb-4">
                        {sub.title}
                      </h3>
                      {sub.content && (
                        <p className="text-foreground/80 mb-4">{sub.content}</p>
                      )}
                      {sub.points && (
                        <ul className="space-y-3">
                          {sub.points.map((point: string, pIdx: number) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-4 text-foreground/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                {section.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-primary/5 p-6 rounded-xl border border-primary/10"
                      >
                        <h4 className="font-bold text-primary mb-2">
                          {item.label}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.details && (
                  <div className="bg-accent/5 p-8 rounded-2xl border border-accent/20">
                    <ul className="space-y-3">
                      {section.details.map((detail: string, idx: number) => (
                        <li key={idx} className="font-medium text-primary">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {section.grievance && (
                      <p className="mt-6 pt-6 border-t border-accent/20 text-sm italic text-foreground/70">
                        {section.grievance}
                      </p>
                    )}
                  </div>
                )}

                {section.extra && (
                  <p className="mt-8 text-sm text-foreground/60 bg-gray-50 p-4 rounded-lg">
                    {section.extra}
                  </p>
                )}

                {section.footer && (
                  <p className="mt-8 font-medium text-primary/80">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
