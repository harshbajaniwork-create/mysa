"use client";

import { useEffect, useState } from "react";

import { TERMS_CONTENT } from "../../constants/terms-content";
import { LegalSubsection } from "../../../../../types/legal-types";
import { motion } from "framer-motion";

export const TermsView = () => {
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
      TERMS_CONTENT.introduction.id,
      ...TERMS_CONTENT.sections.map((s) => s.id),
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const tocItems = [
    {
      id: TERMS_CONTENT.introduction.id,
      title: TERMS_CONTENT.introduction.title,
    },
    ...TERMS_CONTENT.sections,
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
            {TERMS_CONTENT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium"
          >
            Last Updated: {TERMS_CONTENT.lastUpdated}
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
              id={TERMS_CONTENT.introduction.id}
              className="prose prose-lg max-w-none scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                {TERMS_CONTENT.introduction.title}
              </h2>
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20 italic text-foreground/80 leading-relaxed">
                {TERMS_CONTENT.introduction.content}
              </div>
            </section>

            {TERMS_CONTENT.sections.map((section) => (
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
                      <div
                        key={idx}
                        className="mb-8 pl-6 border-l-2 border-primary/10"
                      >
                        <h3 className="text-lg font-bold text-primary mb-4">
                          {sub.title}
                        </h3>
                        {sub.content && (
                          <p className="text-foreground/80 mb-4 leading-relaxed tracking-wide">
                            {sub.content}
                          </p>
                        )}
                      </div>
                    ),
                  )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
