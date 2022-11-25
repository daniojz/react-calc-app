import React from "react";
import "./functions.css";
import PropTypes from "prop-types"
import Button from "../../atoms/Button/Button";

const Functions = ({resetFunction, deleteFunction}) => {
  return (
    <section className="functions-component">
        <Button type="operator-component" text="CE" clickHandler={resetFunction}></Button>
        <Button type="operator-component" text="Supr" clickHandler={deleteFunction}></Button>
    </section>
  );
};

Functions.propTypes = {
  resetFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired
}

export default Functions;
