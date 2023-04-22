import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({title, onAdd, showAdd}) => {
    
//   const clickEvent = () => {
//     alert('This is an example of on onclick Event!');
//      console.log('Alert test on console');}
    return (
        <header className='header'>

            <h1 style={{textAlign:'left'}}>RMSL TO-DO-APP</h1>
            <Button text={showAdd ? 'Add tasks' : 'Close'} color={showAdd ? 'green' : 'red'} onClick={onAdd}  />
            {/* <Button text='Delete' color='red' />
            <Button text='About' /> */}

        </header>
    )
}

Header.defaultProps = {
    title:"React to do list app"
}


Header.propTypes = {
    title: PropTypes.string
}

const h2Styles = {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'green'
}


export default Header
