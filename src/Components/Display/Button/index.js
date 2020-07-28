import PropTypes from 'prop-types'
import React from 'react';
import './Button.css'

export const Button = (props) => {
  const handleClick = () => {
    console.log('button handler')
    props.buttonHandler()
  }

  return <button onClick={handleClick}>{props.buttonTxt}</button>
}

Button.propTypes = { buttonHandler: PropTypes.func, buttonTxt: PropTypes.string.isRequired}


