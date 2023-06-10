import React, {useState} from 'react';
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => {
    const [display, setDisplay] = useState(false)
    function close() {
        setDisplay(false)
    }

    function handleDisplay() {
        setDisplay(true)
    }
    return (
        <div style={{ width: 640, margin: "15px auto" }}>
            <h1>Hello React</h1>
            <button onClick={handleDisplay}>display</button>
            <Modal display={display} closeModal={close} content={'content'} />
        </div>
    )
};

render(<App />, document.getElementById("root"));
