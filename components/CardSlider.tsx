"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "@/app/globals.css";
import { useMediaQuery } from "react-responsive";

interface CardSliderProps {
  images: string[];
  onIndexChange?: (index: number) => void;
}

export const CardSlider = ({ images, onIndexChange }: CardSliderProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    // Full viewport width, tall aspect ratio to match Armenia inspo
    <div className="w-full px-6 md:px-16 lg:px-24">
      <div
        className="relative w-full"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards, Autoplay]}
          onSlideChange={(swiper) => onIndexChange?.(swiper.realIndex)}
          style={{
            width: isMobile ? "300px" : "487px",
            height: isMobile ? "400px" : "600px",
            aspectRatio: "3/4",
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                height={500}
                width={500}
                className="object-cover sm:h-[600px] sm:w-[487px] h-[400px] w-[300px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 900px"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
