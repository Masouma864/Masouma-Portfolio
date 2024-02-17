import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PortfolioDetails = ({ item , onClose }) => {
 
  return (
    <div id="portfolio-details" className="portfolio-details">
      <button className="close-button" onClick={onClose}>
        <i className="bx bx-x"></i>
      </button>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="portfolio-title">{item.title}</h2>
            <div className="portfolio-details-slider swiper-container">
              <div className="swiper-wrapper align-items-center">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {item.imageUrl.map((image, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <img
                        src={image}
                        className="img-fluid"
                        alt={`Image ${index}` }
                        
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
           
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-4 portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>Category</strong>: {item.category}
              </li>
              <li>
                <strong>Client</strong>: {item.client}
              </li>
              <li>
                <strong>Project date</strong>: {item.date}
              </li>
              <li>
                <strong>Project URL</strong>: <a href={item.url}>{item.url}</a>
              </li>
            </ul>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
