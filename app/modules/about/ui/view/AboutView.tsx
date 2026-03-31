"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutHero from "../components/AboutHero";
import { useRouter } from "next/navigation";

const AboutView = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* 1. Unique A-Frame Hero Reveal */}
      <AboutHero
        title="About MYSA"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920"
        quote="&ldquo;Some places are built to be visited. Others are created to be felt.&rdquo;"
      />

      {/* 3. The Origin Story */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
              alt="Mountainscape near Fojal"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              The Decision to Step Away
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                After years in the pace and density of city life, Akshay and
                Naina came to the mountains near Fojal, just outside Manali, for
                a short escape.
              </p>
              <p>
                What they found was something they hadn’t realised they were
                missing – space, stillness, and a different rhythm of living.
              </p>
              <p className="font-medium text-primary italic">
                They stayed, and slowly, MYSA took shape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. The Meaning of MYSA */}
      <section className="py-24 bg-gray-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-center bg-white p-12 md:p-20 rounded-[4rem] shadow-sm border border-accent/10"
        >
          <h4 className="text-sm uppercase tracking-widest text-accent mb-6">
            Etymology
          </h4>
          <h3 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter italic">
            mysa
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            &ldquo;The name comes from the Swedish word for comfort – not as a
            feature, but as a feeling. A sense of ease, warmth, and being
            completely at home in your surroundings.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* 5. Architecture & Wood */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200"
              alt="A-frame Cabin Interior"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Quietly Rooted Architecture
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              The house itself is an A-frame – the first of its kind in the
              region. Its clean, triangular form brings a subtle European
              character to the landscape, while remaining quietly rooted in the
              mountains around it.
            </p>
            <div className="p-8 bg-accent/5 rounded-2xl border-l-4 border-accent">
              <h4 className="font-bold text-primary mb-2">Tactile Luxury</h4>
              <p className="text-gray-600 font-light italic">
                &ldquo;Wood defines the space – from the structure to the
                custom-made furniture – paired with natural textures and soft,
                warm tones.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Untouched Setting */}
      <section className="relative py-32 md:py-48 bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920"
          alt="Mountain Forest Path"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 px-6 md:px-16 lg:px-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Untouched and Unhurried
            </h3>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              While Manali has grown into a busy destination, MYSA sits just
              beyond it, in a setting that remains untouched and unhurried. No
              traffic, no crowds – just open views, fresh mountain air, and the
              quiet presence of nature.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12 mb-12">
              {[
                "Apple Orchards",
                "Hidden Trails",
                "Glacial Water",
                "Pure Stillness",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-6 py-2 border border-accent/30 rounded-full text-accent text-sm tracking-widest uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-8 md:p-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl"
            >
              <h4 className="text-2xl font-bold text-accent mb-4">
                The Spa Ritual
              </h4>
              <p className="text-lg text-white/70 font-light italic">
                &ldquo;Return to stillness in the spa – the warmth of the sauna,
                the calm of the jacuzzi, the feeling of slowing down
                completely.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Sustainability & Soul */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              From Tourist to Traveller
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Akshay and Naina built it with a clear intention – to shift the
              experience from being a tourist to becoming a traveller. To create
              a space where time feels different, where comfort is effortless,
              and where connection to nature is immediate.
            </p>
          </div>
          <div className="space-y-8 border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Sustainable Foundation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Sustainability is part of that philosophy. Local materials, local
              craftsmanship, and local employment are woven into the foundation
              of MYSA. Water flows directly from glacial sources, and energy is
              considered with the same care as every other detail.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final Note */}
      <section className="py-24 md:py-32 bg-gray-50 px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="inline-block p-4 rounded-full bg-accent/10 mb-6">
            <Image
              src="/logos/mysa-logo-2.png"
              alt="MYSA"
              width={80}
              height={40}
              className="w-16 h-8 object-contain"
            />
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Settle into a different pace – naturally.
          </h3>
          <p className="text-xl text-gray-600 font-light italic">
            &ldquo;MYSA remains personal. You feel it in the atmosphere, in the
            way the space is held, and in the quiet balance between design and
            nature.&rdquo;
          </p>
          <div className="pt-12">
            <button
              className="bg-primary cursor-pointer text-white px-12 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-secondary transition-colors duration-300"
              onClick={() => router.push("/properties")}
            >
              Explore the Stays
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutView;
