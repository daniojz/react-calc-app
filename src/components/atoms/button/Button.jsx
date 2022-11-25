import React from "react";
import "./button.css";
import PropTypes from 'prop-types'

const Button = ({text, type, clickHandler}) => {
  return (
    <button className={type} onClick={()=>{clickHandler(text)}}>
      <span>{text}</span>
    </button>
  )
};

Button.propTypes = {
  text: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Button;