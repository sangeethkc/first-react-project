import React, { useState } from "react"
import "./CountButton.css"

const CountButton = (props) => {

    const [CurrentCount, setCurrentCount] = useState(0)

    const HandleClick = () => {
        setCurrentCount(CurrentCount + props.incrementBy)
    }

    const divStyle = {
        color : "blue",
    }

    return ( 
    <div style={divStyle}>
        <button onClick={HandleClick}>+{props.incrementBy}</button>
        <div className="count-display">{CurrentCount}</div>
    </div>
    )
}
export default CountButton