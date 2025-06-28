import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import { MainHeading } from "../../components"
import TestimonialsCard from './TestimonialsCard'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonials } from "../../../redux/actions/testimonial";

import './swiper.css'

const Testimonials = () => {

    ////////////////////////////// VARIABLES //////////////////////////////////////
    const styles = `.swiper-slide {width:300px}`;
    const dispatch = useDispatch()
    const { testimonials } = useSelector(state => state.testimonial)

    ////////////////////////////// STATES /////////////////////////////////////////

    ////////////////////////////// FUNCTIONS ///////////////////////////////////////
    useEffect(() => {
        dispatch(getTestimonials())
    }, [])

    ////////////////////////////// USE EFFECTS ////////////////////////////////////


    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <motion.section
                whileInView={{ opacity: [0, 1] }}
                animate={{ y: [0, 1] }}
                transition={{ duration: .3, delayChildren: .5 }}
                name="testimonials"
                className="bg-white text-black py-10 px-5"
            >

                <div className="w-full flex justify-center">
                    <MainHeading
                        forwardHeading={<span className="text-orange">Testimonials</span>}
                        small
                        backHeading="Testimonials"
                        detail="Discover the experiences of my clients and how my web development services have helped them achieve their goals. Your satisfaction is my priority!"
                        className="text-orange font-extrabold shadow-none text-center"
                    />
                </div>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="w-full py-10"
                >
                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="w-[300px] bg-gray-100 rounded-md shadow-md">
                                <TestimonialsCard
                                    content={testimonial.content}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    image={testimonial.image}
                                    className="text-gray-800"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </motion.section>

        </>
    )
}

export default Testimonials;