import React from "react";
import "./mathOperators.css";
import PropTypes from "prop-types"
import Button from "../../atoms/Button/Button";

const MathOperators = ({mathOperation, equalOperation}) => {
  return (
    <section className="mathOperators-component">
        <Button type="operator-component" text="+" clickHandler={mathOperation}></Button>
        <Button type="operator-component" text="-" clickHandler={mathOperation}></Button>
        <Button type="operator-component" text="*" clickHandler={mathOperation}></Button>
        <Button type="operator-component" text="/" clickHandler={mathOperation}></Button>
        <Button type="operator-component" text="=" clickHandler={equalOperation}></Button>
    </section>
  );
};

MathOperators.propTypes = {
  mathOperation: PropTypes.func.isRequired,
  equalOperation: PropTypes.func.isRequired
}

export default MathOperators;
