import React from "react";
import "./Modal.css";
import { IconClosing } from "./IconClosing";
export default function Modal(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? "text" : _ref$content,
    _ref$display = _ref.display,
    display = _ref$display === void 0 ? true : _ref$display,
    closeModal = _ref.closeModal;
  function close() {
    closeModal(false);
  }
  return /*#__PURE__*/React.createElement("div", null, display && /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: close
  }), /*#__PURE__*/React.createElement(IconClosing, null), content);
}