"use client";

import React from "react";
import Image from "next/image";

import Stars from "@/components/ui/Stars";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const items = [
    {
      id: 1,
      name: "Joe",
      para: "",
      icon: "/Testimonials/test1.png",
    },
    {
      id: 2,
      name: "James",
      para: "",
      icon: "/Testimonials/test1.png",
    },
    {
      id: 3,
      name: "Beth",
      para: "",
      icon: "/Testimonials/test1.png",
    },
  ];

  return (
    <div className="mx-auto h-[560px] w-full p-4 pb-10 lg:h-[450px]">
      <Swiper
        spaceBetween={10}
        modules={[Pagination]}
        className="h-full w-full"
        pagination={{
          //el: ".custom-pagination",
          clickable: true,
          // renderBullet: function (index, className) {
          //   return `<span class="${className} block h-[1px] flex-1 bg-gray-400 transition-all duration-300"></span>`;
          // },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2, // md screens and up
          },
          820: {
            slidesPerView: 3, // md screens and up
          },
          1200: {
            slidesPerView: 4, // md screens and up
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="h-auto my-20 w-full border-[1px] border-gray-200 bg-zinc-900 text-white relative">
              <div className="absolute z-20 -top-13 w-full flex justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={130}
                  height={130}
                  className="object-cover rounded-full border-4 border-amber-400"
                />
              </div>
              <p className="text-center p-4 pt-25">
                <em className="text-center">
                  {item.para}
                  The editors at WOS Publication are true professionals. I'm
                  very pleased with the quality of their thesis editing
                  services. Thank you! I highly recommend their services to
                  students who want to boost their chances of graduation.
                </em>
              </p>
              <h4 className="text-center text-xl font-bold">{item.name}</h4>
              <Stars />
              <div className="p-4" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
