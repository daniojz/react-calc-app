import React from "react";
import "./numbers.css";
import PropTypes from "prop-types"
import Button from "../../atoms/Button/Button";

const Numbers = ({onClickHandler}) => {
  return (
    <section className="numbers-component">
        {renderNumbers(onClickHandler)}
    </section>
  );
};

const renderNumbers = (onClickHandler) => {
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    return numbers.map((number) => <Button type="number-component" key={number} text={number} clickHandler={onClickHandler}></Button>)
}

Numbers.propTypes = {
  onClickHandler: PropTypes.func.isRequired
}
export default Numbers;
