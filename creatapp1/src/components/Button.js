import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, clickEvent}) => {

    // const clickEvent = () => { 
    //     alert('this is an example of an onclick Event!')
    //     console.log('test for on click event on react')
    // }
    
    return    <button onClick={clickEvent} style={{backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: '#777'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button