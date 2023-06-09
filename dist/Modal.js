"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _IconClosing = require("./IconClosing");
function Modal(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? "text" : _ref$content,
    _ref$display = _ref.display,
    display = _ref$display === void 0 ? false : _ref$display,
    closeModal = _ref.closeModal;
  function close() {
    closeModal(false);
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, display && /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-backdrop",
    onClick: close
  }), /*#__PURE__*/_react["default"].createElement(_IconClosing.IconClosing, null), content);
}