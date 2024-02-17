import React from 'react';

const ServiceItem = ({ iconClass, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
      <div className="icon-box">
        <div className="icon"><i className={iconClass}></i></div>
        <h4><a href="">{title}</a></h4>
        <p>{description}</p>
      </div>
    </div>
    
  );
};

export default ServiceItem;