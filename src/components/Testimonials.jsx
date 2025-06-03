"use client";

import React from "react";
import Image from "next/image";

import Stars from "@/components/ui/Stars";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const items = [
    {
      id: 1,
      name: "Joe",
      para: "The editors at WOS Publication are true professionals. I'm very pleased with the quality of their thesis editing services. Thank you! I highly recommend their services to students who want to boost their chances of graduation.",
      icon: "/Testimonials/test1.png",
    },
    {
      id: 2,
      name: "Stepheny",
      para: "There was an issue with the quality of the English in my manuscript, but the editors at WOS Publication did an excellent job refining it. Thanks to their hard work, my research was accepted for publication. I will definitely reach out to them again in the future.",
      icon: "/Testimonials/test2.png",
    },
    {
      id: 3,
      name: "Ben",
      para: "I'm grateful to WOS Publication for transforming my paper into a professionally written piece. I'm very pleased with the results and will definitely make them my first choice for editing any future research manuscripts.",
      icon: "/Testimonials/test3.png",
    },
    {
      id: 4,
      name: "Andrew",
      para: "I’m extremely grateful to WOS Publication for editing my dissertation. Their expert editors played a key role in perfecting my work, ultimately helping me achieve my post-graduation. This was my first time using their services to edit a manuscript, and I’m truly impressed by the exceptional quality of the editing.",
      icon: "/Testimonials/test4.png",
    },
    {
      id: 5,
      name: "Tisha",
      para: "I can't emphasize enough how fortunate I feel to have discovered WOS Publication. Their Amazon marketing services are truly the best in the industry, and their team is outstanding. They've certainly earned my trust, and I'll be a returning client for sure!",
      icon: "/Testimonials/test5.png",
    },
    // {
    //   id: 6,
    //   name: "andrew",
    //   para: "",
    //   icon: "/Testimonials/test1.png",
    // },
  ];

  return (
    <div className="mx-auto h-[560px] w-full p-4 pb-10 lg:h-[550px]">
      <Swiper
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="h-full w-full max-w-300"
        pagination={{
          //el: ".custom-pagination",
          clickable: true,
          // renderBullet: function (index, className) {
          //   return `<span class="${className} block h-[1px] flex-1 bg-gray-400 transition-all duration-300"></span>`;
          // },
        }}
        navigation={true}
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
        }}
      >
        {/* <div className="mx-20 bg-black"> */}
        {items.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="h-[380px] my-20 w-full border-[1px] border-gray-200 bg-zinc-900 text-white relative rounded-lg">
              <div className="absolute z-20 -top-13 w-full flex justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={130}
                  height={130}
                  className="object-cover absolute rounded-full overflow-hidden border-4 border-amber-400"
                />
              </div>
              <p className="text-center p-4 pt-25">
                <em className="text-center">{item.para}</em>
              </p>
              <h4 className="text-center text-xl font-bold">{item.name}</h4>
              <Stars />
              <div className="p-4" />
            </div>
          </SwiperSlide>
        ))}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
