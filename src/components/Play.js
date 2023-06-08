import React ,{ useRef } from "react"

const Play = ({setUsername}) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    }
    return (
        <div className="start">
            <div className="kbc_game"><h1><span className="gold">🏆</span> KBC Game</h1></div>
            <input type="text" placeholder="Enter you name" className="startInput" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
    )
}

export default Play
