import React from 'react'

const Header = ({title}) => {
    return (
        <header>
            {/* <h2 style= {{textAlign:'center'}}>
                {title}
            </h2> */}

            <h1 style={{textAlign:'center'}}>
                React To do list App
            </h1>
        </header>
    )
}

Header.defaultProps = {
    title:"React to do list app"
}
export default Header