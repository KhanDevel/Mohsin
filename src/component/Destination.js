import './Destination.css'
import PopularCityImage from './PopularCityimage'
import Charming from './Charming'
import CrasoulCard from './CrasoulCard'
import React, { useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

function Destination() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    return (
        <div className='Destination-wraper' >
                <div className='populur-destination' >
                    <div className='populur-view-all' >
                        <div>
                            <h1>Destination <b>populur</b></h1>

                        </div>
                        <div>
                            <a>view all populur destination</a>
                        </div>
                    </div>
                    <div className='popularcity-wraper' >
                        <div className='city-wraper' >
                            {/* <div className='charmingImg-wraper' >
                                <div className='charmingImg' >

                                </div>
                                <div>
                                    <h2>charming destination</h2>
                                    <p>4days/5days</p>
                                </div>
                            </div> */}

                                    <Charming/>
                                    <Charming/>
                                    <Charming/>
                                    <Charming/>
                                    <Charming/>
                                    <Charming/>
                                    <Charming/>
                        </div>
                        <div className='city-imge' >
                            <PopularCityImage/>
                            <PopularCityImage/>
                            <PopularCityImage/>
                            <PopularCityImage/>
                        </div>

                    </div>
                </div>

                <div className='storieWrapper' >
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    // centeredSlides={true}
                    spaceBetween={1}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                    <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                </Swiper>
                </div>

                {/* <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={5}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    // modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                    <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                    <SwiperSlide>
                   <CrasoulCard/>
                    </SwiperSlide>
                </Swiper> */}

        </div>
    )
}

export default Destination