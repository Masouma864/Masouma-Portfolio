import React from 'react';
import CountUp from 'react-countup';

const CountBox = ({ iconClassName, start, end, duration, label }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className={iconClassName}></i>
      
        <CountUp start={start} end={end} duration={duration} className="purecounter" />
        <p>{label}</p>
        
      </div>
    </div>
  );
};
export default CountBox;