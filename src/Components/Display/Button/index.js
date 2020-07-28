import PropTypes from 'prop-types'
import React from 'react';

export const Button = (props) => {
  const handleClick = () => {
    props.buttonHandler()
  }

  return <button onClick={handleClick}>{props.buttonTxt}</button>
}

Button.propTypes = { buttonHandler: PropTypes.func, buttonTxt: PropTypes.string.isRequired}


