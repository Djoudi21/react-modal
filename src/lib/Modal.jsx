import React from "react";
import "./Modal.css";
import {IconClosing} from "./IconClosing";

export default function Modal({ content = "text", display = false, closeModal }) {
    function close() {
        closeModal(false)
    }
    return (
        <div>
            {display && <div className="modal-backdrop" onClick={close}/>}
            <IconClosing/>
            {content}
        </div>
    )
}
