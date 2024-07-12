import { motion } from "framer-motion";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { carouselDatas } from "@/api/carousel/CarouselData";
import Link from "next/link";
import { paths } from "@/utils/paths";
import { useAnimation } from "../context/AnimationContext";
import { useState } from "react";


const CarouselPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { context } = useAnimation();

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, EffectFade, Autoplay]}
        autoplay = {{delay: 5000, disableOnInteraction: false}}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {carouselDatas.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className=" relative flex items-center justify-center md:h-screen h-[70vh] overflow-hidden "
              style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundSize: "cover",
                objectFit: "fill",
                backgroundPosition: "center",
              }}
            >
              <div className=" md:p-24 p-10 bg-black/40 absolute left-0 top-0 flex justify-center items-center w-full h-full">
                <motion.div
                  variants={context.parent}
                  initial="hidden"
                  animate={currentSlide === index ? "show" : "hidden"}
                  className=" text-white flex flex-col gap-7 justify-center items-center w-full md:max-w-[50vw]"
                >
                  <motion.p
                    variants={context.children}
                    className="  md:text-base text-sm "
                  >
                    {item.title}
                  </motion.p>
                  <motion.h1
                    variants={context.children}
                    className=" md:text-6xl text-4xl font-semibold text-center"
                  >
                    {item.desc}
                  </motion.h1>
                  <motion.p
                    variants={context.children}
                    className=" cursor-pointer p-2 text-white rounded-md bg-green-700 hover:bg-green-600"
                  >
                    <Link href={paths.donate}>Donate Now</Link>
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselPage;
