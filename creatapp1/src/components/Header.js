import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>

            <h1 style={{textAlign:'center'}}>RMSL TO-DO-APP</h1>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>

        </header>
    )
}

Header.defaultProps = {
    title:"React to do list app"
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header
