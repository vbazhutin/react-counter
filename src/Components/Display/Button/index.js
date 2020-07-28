import PropTypes from 'prop-types'
import React from 'react';
import './Button.css'

export const Button = ({buttonHandler, increment, buttonTxt}) => {
  const handleClick = (event) => {
    buttonHandler(event)
  }

  return <button onClick={handleClick} data-increment={increment}>{buttonTxt}</button>
}

Button.propTypes = {
  buttonHandler: PropTypes.func,
  buttonTxt: PropTypes.string.isRequired,
  increment: PropTypes.number
}

Button.defaultProps = {
  increment: 1,
  buttonTxt: 'Add 2'
}


