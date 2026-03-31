"use client";

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

  // Swiper's "cards" effect loops poorly with 3 or fewer slides. Duplicating fixes index/visibility glitches.
  const displayImages = images.length <= 3 ? [...images, ...images] : images;

  return (
    <div className="w-full">
      <div
        className="relative w-full flex justify-center lg:justify-end pr-0 lg:pr-8"
        style={{ maxWidth: "600px" }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards, Autoplay]}
          onSlideChange={(swiper) => onIndexChange?.(swiper.realIndex % images.length)}
          style={{
            width: isMobile ? "300px" : "487px",
            height: isMobile ? "400px" : "600px",
            aspectRatio: "3/4",
          }}
        >
          {displayImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
            >
              <Image
                src={img}
                alt={`Slide ${(index % images.length) + 1}`}
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
