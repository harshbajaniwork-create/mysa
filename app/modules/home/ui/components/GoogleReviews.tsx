"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Dhiral",
    text: "Had an amazing experience at Mysa. The property is beautifully designed, very clean and gives a cosy, homely vibe. The location is peaceful and perfect to relax in nature. Food was tasty and fresh, the overall hospitality really made the stay memorable.",
    rating: 5,
    date: "A month ago",
  },
  {
    name: "Aashu kumar Rao",
    text: "Our stay at Mysa A-Frame was absolutely wonderful. Waking up to the fresh air and breathtaking mountain views was the highlight. The host was extremely welcoming. Highly recommended for nature lovers visiting Manali! ✌️",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Amit Rathor",
    text: "I stayed for a week at Mysa Cottage and it was a great experience. The rooms were clean and cozy with beautiful mountain views. The hosts made me feel more like family. The Himachali food was delicious. Perfect for a natural, authentic Himachal experience.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "The Art Of Living",
    text: "This homestay in Fojal is truly a hidden gem. Warm hospitality, cozy vibes, and lovely bonfire nights. The days feel peaceful and the nights turn magical with star-filled skies. A dreamy place I’d definitely recommend!",
    rating: 5,
    date: "2 months ago",
  },
];

const GoogleReviews = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end start"],
  });

  // Delay the aggressive scrolling until the section is more established in view
  const x = useTransform(scrollYProgress, [0, 0.45, 1], ["0%", "0%", "-60%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-[#FAFAFA] overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-6 mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl mb-6 shadow-sm border border-border/50"
            >
              <div className="w-5 h-5 relative flex items-center justify-center bg-blue-500 rounded-full">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] font-black text-primary">
                Google Reviews
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-primary leading-none tracking-tighter"
            >
              DON&apos;T JUST <br />
              <span className="text-secondary italic font-light">
                take our word
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 bg-white p-6 md:p-8 rounded-4xl shadow-xl border border-secondary/10"
          >
            <div className="text-6xl font-black text-primary tracking-tighter">
              5.0
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-2">
                Mysa A-frame Manali
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile View: Native horizontal snap scroll */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={`mobile-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white min-w-[85vw] w-[85vw] max-w-[85vw] snap-center p-8 rounded-[2.5rem] shadow-xl shadow-primary/5 flex flex-col justify-between shrink-0"
          >
            <div>
              <Quote className="text-secondary/20 mb-6" size={40} />
              <p className="text-lg font-medium text-primary/80 leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-secondary/10">
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center text-secondary font-black text-lg">
                {review.name.charAt(0)}
              </div>
              <div>
                <div className="font-black text-primary text-base">
                  {review.name}
                </div>
                <div className="text-[10px] text-muted-foreground font-bold flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                  <Star
                    size={10}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                  <span>Google Review • {review.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View: Framer motion style scroll */}
      <div className="hidden md:block relative pl-24 w-[150vw]">
        <motion.div style={{ x }} className="flex gap-10">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={`desktop-${idx}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white min-w-[480px] max-w-[480px] p-12 rounded-[3.5rem] shadow-2xl shadow-primary/5 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 shrink-0"
            >
              <div>
                <Quote
                  className="text-secondary/20 mb-8 group-hover:text-amber-400/30 transition-colors duration-500"
                  size={56}
                />
                <p className="text-2xl font-medium text-primary/80 leading-relaxed mb-10">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-secondary/10">
                <div className="w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center text-secondary font-black text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-primary text-lg">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-bold flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                    <Star
                      size={12}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                    <span>Google Review • {review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
