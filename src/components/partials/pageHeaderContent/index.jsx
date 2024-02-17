import React from "react";

const PageHeaderContent = (props) => {

    const {headerTitle, headerText} = props;
  return (
    <div className="section-title">
      <h2>{headerTitle}</h2>
      <p>{headerText}</p>
    </div>
  );
};

export default PageHeaderContent;
