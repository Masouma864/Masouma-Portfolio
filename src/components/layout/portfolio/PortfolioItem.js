import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Image } from "react-bootstrap";

const PortfolioItem = ({ item, onItemClick }) => {
  const handleClick = () => {
    onItemClick(item);
  };

  const imageStyle = {
    height: "250px", // Adjust the height as needed
    weight: "250px", // Adjust the height as needed
    objectFit: "cover",
  };

  return (
    <Col lg={4} md={6} className="portfolio-item filter-app">
      <Card className="portfolio-wrap">
        <div className="img-container">
          <Image src={item.imageUrlMain} style={imageStyle} alt={item.title} />
        </div>
        <Card.Body className="portfolio-info">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <div className="portfolio-links">
            <a
              href={item.imageUrl}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title={item.title}
            >
              <i className="bx bx-plus"></i>
            </a>
            <Link
              to="#"
              data-gallery="portfolioDetailsGallery"
              data-glightbox="type: external"
              className="portfolio-details-lightbox"
              title="Portfolio Details"
              onClick={handleClick}
            >
              <i className="bx bx-link"></i>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PortfolioItem;