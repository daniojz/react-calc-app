import React from "react";
import "./result.css";
import PropTypes from 'prop-types';

const Result = ({ value }) => {

  return (
    <div className="result-component">
      <span>{value}</span>
    </div>
  );
};

Result.propTypes = {
  value: PropTypes.string.isRequired
}

export default Result;
