import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Workbanner1 from "../images/workbanner1.png"
import Workbanner2 from "../images/workbanner2.png"
import Workbanner3 from "../images/workbanner3.png"
import Workbanner4 from "../images/workbanner4.png"

const CardSlider = () => {
  const cards = [
    { id: 1, content: 'Card 23223' , bgImg: Workbanner1 },
    { id: 2, content: 'haii' , bgImg: Workbanner2 },
    { id: 3, content: 'Card 3' , bgImg: Workbanner3 },
    { id: 4, content: 'Card 4' , bgImg: Workbanner4 },
    { id: 5, content: 'Card 5' , bgImg: Workbanner2 },
    { id: 6, content: 'Card 6' , bgImg: Workbanner3 },
  ];

  return (
    <div
      style={{ padding: '20px' }}
      onMouseEnter={() => document.querySelector('.swiper').swiper.autoplay.stop()}
      onMouseLeave={() => document.querySelector('.swiper').swiper.autoplay.start()}
    >


      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={4000} 
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}

         breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}

      >
        {cards.map((card) => (
            
          <SwiperSlide key={card.id}>

             <div className="item">
                
              <div className="work-image position-relative">
                <a href="#">
                  {/* <img src={Workbanner1} alt="" className="img-fluid" /> */}
                  <img className='bgImg' src={card.bgImg} alt="" />
                  <div className="image-title mt-5 ms-5">
                    <h4 className="mb-0"> {card.content} </h4>
                    <p>E-Commerce</p>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
