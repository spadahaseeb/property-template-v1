"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
// components
import Stats from "@/components/shared/Stats";
import Heading from "@/components/shared/Heading";
import Review from "@/components/shared/Review";
import TrustedBy from "@/components/homepage/TrustedBy";
import { TrustedByContent } from "@/assets/content";

const Testimonials = ({
  className,
  quotesImg,
}: {
  className?: string;
  quotesImg: string;
}) => {
  return (
    <>
      <section
        className={twMerge(
          "lg:pt-[187px] lg:pb-[155px] py-[100px] text-black",
          className
        )}
      >
        <div className="container">
          {/* heading & review wrapper  */}
          <div className="gap-20 flex xl:flex-row flex-col justify-between pb-[76px]">
            {/* heading content  */}
            <div className="xl:max-w-[450px] max-w-[900px] w-full">
              <Heading
                heading="What our customers are <br className='hidden sm:block' /> saying us?"
                discription="Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like."
                className="pb-5 sm:text-left text-transform-none"
                headingStyles="pb-5"
              />

              {/* stats  */}
              <div className="flex xs:gap-[67px] gap-5 w-[max-content] m-auto sm:m-0">
                <Stats stat={"10m+"} statDiscription={"happy people"} />
                <Stats stat={"4.88"} statDiscription={"overall rating"}>
                  <Image
                    src="/images/stars.webp"
                    alt="rating"
                    width={80}
                    height={10}
                    className="pt-[7px] w-[78px] h-auto"
                  />
                </Stats>
              </div>
            </div>

            {/* review content  */}
            <div className="xl:max-w-[600px]">
              <Swiper
                className="overflow-visible"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2000 }}
                navigation={{
                  prevEl: ".swiper-naviagtion-button-left-tstm",
                  nextEl: ".swiper-naviagtion-button-right-tstm",
                }}
                loop={true}
                speed={500}
                slidesPerView={1}
                spaceBetween={15}
              >
                <SwiperSlide className="select-none">
                  <Review quotesImg={quotesImg} />
                </SwiperSlide>
                <SwiperSlide className="select-none">
                  <Review quotesImg={quotesImg} />
                </SwiperSlide>
              </Swiper>

              <div className="flex items-center m-auto w-[max-content] sm:m-0 gap-[25px] pt-[25px]">
                <div className="swiper-naviagtion-button-left-tstm testimonialSwiperBtn">
                  <ChevronLeft size={16} strokeWidth={1} />
                </div>
                <div className="swiper-naviagtion-button-right-tstm testimonialSwiperBtn">
                  <ChevronRight size={16} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trusted by section  */}
        <hr className="w-full h-[1px] border-none outline-none bg-gray-light" />
        <div className="container">
          <TrustedBy data={TrustedByContent} />
        </div>
      </section>
    </>
  );
};
export default Testimonials;
