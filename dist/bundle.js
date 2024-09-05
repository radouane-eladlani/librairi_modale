'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".modal-overlay{align-items:center!important;background:rgba(0,0,0,.5)!important;bottom:0!important;display:flex!important;justify-content:center!important;left:0!important;position:fixed!important;right:0!important;top:0!important}.modal-content{background:#fff!important;border-radius:5px!important;max-width:500px!important;padding:20px!important;position:relative!important;width:100%!important}.modal-close{background:none!important;border:none!important;cursor:pointer!important;font-size:1.5em!important;position:absolute!important;right:10px!important;top:10px!important}.modal-title{margin-top:0!important}.modal-body{margin-top:20px!important}";
styleInject(css_248z);

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\u2716"), title && /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "modal-title"
  }, title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-body"
  }, children)));
};

module.exports = Modal;
