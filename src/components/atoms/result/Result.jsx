import React from "react";
import "./result.css";

const Result = ({ value }) => {
  return (
    <div className="result-component">
      <span>{value}</span>
    </div>
  );
};

export default Result;
