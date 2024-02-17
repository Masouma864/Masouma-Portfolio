import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioDetails from "./PortfolioDetails";
import PortfolioData from './utils';
import { Animate } from "react-simple-animate";
import './Portfolio.css'

const Portfolio = () => {
  // const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // setShowDetails(true);
  };
  const handleCloseDetails = () => {
    // setShowDetails(false);
    setSelectedItem(null);
  };

  return (
    <>
     {/* Render PortfolioDetails if an item is selected */}
     {selectedItem && <PortfolioDetails item={selectedItem} onClose={handleCloseDetails} />}
     <section id="portfolio" className="portfolio">
         <Animate
                  play
                  duration={1}
                  delay={0.1}
                  start={{
                    transform: "translateY(50px)",
                  }}
                  end={{
                    transform: "translateY(0px)",
                  }}
                >
      <div className="container">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      
        {/* Render PortfolioItem components */}
        <div className="row portfolio-container">
          {PortfolioData.map((item) => (
            <PortfolioItem
              key={item.id}
              item={item}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
   
      </div>
         </Animate>
    </section>
     
    </>
   
  );
};

export default Portfolio;
