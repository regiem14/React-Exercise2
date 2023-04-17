import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 style={{textAlign:'center'}}>
                React To do list App
            </h1>

            <h1 style={{textAlign:'center'}}>
                {props.title}
            </h1>

        </header>
    )
}

// Header.defaultProps = {
//     title:"React to do list app"
// }
export default Header