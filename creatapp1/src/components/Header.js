import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>

            <h1 style={{textAlign:'center', backgroundColor:'yellow', color:'blue'}}>RMSL TO-DO-APP</h1>

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
