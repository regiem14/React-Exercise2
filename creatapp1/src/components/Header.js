import React from 'react'

const Header = ({title}) => {
    return (
        <header>

            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>

        </header>
    )
}

Header.defaultProps = {
    title:"React to do list app"
}
export default Header