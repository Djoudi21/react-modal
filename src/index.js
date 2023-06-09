import React, {useState} from 'react';
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => {
    const [toto, setToto] = useState(false)
    function close() {
        console.log('CLOSE')
        setToto(!toto)
    }

    function display() {
        setToto(!toto)
    }
    return (
        <div style={{ width: 640, margin: "15px auto" }}>
            <h1>Hello React</h1>
            <button onClick={display}>display</button>
            <Modal display={toto} closeModal={close} content={'content'} />
        </div>
    )
};

render(<App />, document.getElementById("root"));
