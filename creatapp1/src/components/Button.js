import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return    <button style={{backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: '#777'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button