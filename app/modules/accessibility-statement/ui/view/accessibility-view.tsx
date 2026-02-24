"use client";

import React, { useEffect, useState } from "react";
import { ACCESSIBILITY_CONTENT } from "../../constants/accessibility-content";
import { LegalSubsection } from "../../../../../types/legal-types";
import { motion } from "framer-motion";

export const AccessibilityView = () => {
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
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    const sections = [
      ACCESSIBILITY_CONTENT.introduction.id,
      ...ACCESSIBILITY_CONTENT.sections.map((s) => s.id),
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const tocItems = [
    {
      id: ACCESSIBILITY_CONTENT.introduction.id,
      title: ACCESSIBILITY_CONTENT.introduction.title,
    },
    ...ACCESSIBILITY_CONTENT.sections,
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
            {ACCESSIBILITY_CONTENT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium"
          >
            Last Updated: {ACCESSIBILITY_CONTENT.lastUpdated}
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
              id={ACCESSIBILITY_CONTENT.introduction.id}
              className="prose prose-lg max-w-none scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                {ACCESSIBILITY_CONTENT.introduction.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {ACCESSIBILITY_CONTENT.introduction.content}
              </p>
            </section>

            {ACCESSIBILITY_CONTENT.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-primary mb-8 pb-4 border-b border-accent/20">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.subsections &&
                  section.subsections.map(
                    (sub: LegalSubsection, idx: number) => (
                      <div key={idx} className="mb-8">
                        <h3 className="text-lg font-bold text-primary mb-4">
                          {sub.title}
                        </h3>
                        {sub.content && (
                          <p className="text-foreground/80 mb-4">
                            {sub.content}
                          </p>
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
                    ),
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
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
