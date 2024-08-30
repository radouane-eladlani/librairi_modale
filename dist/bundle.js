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

var css_248z = ".modal-content{background:#fff;border-radius:5px;max-width:500px;padding:20px;width:100%}.modal-header{align-items:center;display:flex;justify-content:space-between}.modal-body{margin-top:10px}.confirmation-message{background-color:#4caf50;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.2);color:#fff;font-size:18px;left:50%;margin:0 auto;max-width:500px;padding:50px;position:fixed;text-align:center;top:50%;transform:translate(-50%,-50%);z-index:1000}.close-button{background:none;border:none;color:#fff;cursor:pointer;font-size:24px;font-weight:700;line-height:1;position:absolute;right:10px;top:5px}";
styleInject(css_248z);

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, title), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: onClose,
    className: "close-button"
  }, "\xD7")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-body"
  }, children)));
};

module.exports = Modal;
