import React from 'react'

const Header = ({title}) => {
    return (
        <header>
            <h2 style= {{textAlign:'center'}}>
                {title}
            </h2>
        </header>
    )
}

Header.defaultProps = {
    title:"React to do list app"
}
export default Header