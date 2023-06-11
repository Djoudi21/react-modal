"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
var _IconClosing = require("./IconClosing");
/**
 * Modal component that displays a congratulatory message.
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.display - Flag indicating whether the modal should be displayed or hidden.
 * @param {Function} props.closeModal - Callback function to close the modal.
 * @returns {JSX.Element|null} The modal component.
 */
function Modal(_ref) {
  var _ref$display = _ref.display,
    display = _ref$display === void 0 ? false : _ref$display,
    closeModal = _ref.closeModal;
  /**
   * Closes the modal.
   */
  function close() {
    closeModal(false);
  }
  (0, _react.useEffect)(function () {
    if (display) {
      setTimeout(function () {
        close();
      }, 2000);
    }
  }, [display]);
  if (!display) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop",
    onClick: close
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-card__center"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "70",
    height: "70",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "4"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "green",
    stroke: "#000",
    d: "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    stroke: "#fff",
    d: "M17 24L22 29L32 19"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-card-text"
  }, "F\xE9licitations!"))));
}