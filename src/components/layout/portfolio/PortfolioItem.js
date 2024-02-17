import React from "react";
import { Link } from 'react-router-dom';

const PortfolioItem = ({ item , onItemClick }) => {
    const handleClick = () => {
        onItemClick(item);
      };
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app" >
      <div className="portfolio-wrap">
      <img src={item.imageUrlMain} className="img-fluid fixed-height" alt={item.title} />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.category}</p>
          <div className="portfolio-links">
            <a href={item.imageUrl} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
              <i className="bx bx-plus"></i>
            </a>
           
               <Link to="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details" onClick={handleClick}>
                <i className="bx bx-link"></i>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
