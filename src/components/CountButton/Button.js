import React from "react"

const Button = (props) => {

    const ClickEvent = () => { alert("Clicked") }

    return <div><button onClick={ClickEvent} style={{ color : "blue", background : "black"}}>
        {props.children}
        </button></div>
}

export default Button