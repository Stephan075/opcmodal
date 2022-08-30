"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _ModalModule = _interopRequireDefault(require("./Modal.module.css"));

var _undraw_superhero_kguv = _interopRequireDefault(require("./assets/images/undraw_superhero_kguv.svg"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    closeModal
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(_ModalModule.default.modal),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(_ModalModule.default.modalContent, " "),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(_ModalModule.default.modalImg, " "),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _undraw_superhero_kguv.default,
          alt: "validateImg"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(_ModalModule.default.text),
        children: "The employer was created! Thank you \uD83D\uDE00"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "".concat(_ModalModule.default.modalBtn, " "),
        onClick: closeModal,
        children: "\u2716"
      })]
    })
  });
};

exports.Modal = Modal;
Modal.propTypes = {
  currentData: _propTypes.default.object,
  isOpen: _propTypes.default.bool,
  closeModal: _propTypes.default.func
};