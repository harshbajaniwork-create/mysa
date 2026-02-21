"use client";

import React from "react";
import { motion } from "framer-motion";

interface Event {
  id: number;
  title: string;
  slug: string;
  location: string;
  date: string;
  featured_image: { url: string };
  tags: { name: string }[];
}

interface EventsSectionProps {
  events: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events and Festivals
            </h2>
          </div>
          <button className="text-primary font-bold hover:underline mb-2">
            See All Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col sm:flex-row h-full group cursor-pointer"
            >
              <div className="sm:w-2/5 relative overflow-hidden">
                <img
                  src={event.featured_image.url}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                  {event.tags[0]?.name.replace("#", "")}
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="text-primary font-bold text-sm mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    <i className="giz-map-pin mr-2 opacity-50"></i>
                    {event.location}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-primary font-bold text-sm">
                    Learn More →
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

export default EventsSection;
