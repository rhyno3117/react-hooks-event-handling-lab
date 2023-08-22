// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.

import React from "react";


function Keypad () {
    function handleChange() {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={handleChange}/>
    )
}

export default Keypad;