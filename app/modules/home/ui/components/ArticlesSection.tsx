"use client";

import React from "react";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: { url: string };
  tags: { name: string }[];
  date: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h2>
            <p className="text-gray-500 text-lg">
              Insights, stories, and tips for your next adventure.
            </p>
          </div>
          <button className="text-primary font-bold hover:underline mb-2">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-sm">
                <img
                  src={article.image.url}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm"
                    >
                      {tag.name.replace("#", "")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-2">
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                  {article.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold text-sm">
                  Read Story{" "}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
