"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _background = _interopRequireDefault(require("./background.js"));

var _icon = _interopRequireDefault(require("./icon.js"));

var _mask = _interopRequireDefault(require("./mask.js"));

var _networks = require("./networks.js");

var _styles = require("./styles.js");

var _excluded = ["url", "network", "bgColor", "fgColor", "className", "label", "children", "defaultSVG", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getNetworkKey(props) {
  return props.network || (0, _networks.keyFor)(props.url);
}

function SocialIcon(props) {
  var url = props.url,
      network = props.network,
      bgColor = props.bgColor,
      fgColor = props.fgColor,
      className = props.className,
      label = props.label,
      children = props.children,
      defaultSVG = props.defaultSVG,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded);

  if (_typeof(defaultSVG) === 'object' && defaultSVG !== null) {
    (0, _networks.keyTo)(_networks.DEFAULT_KEY, defaultSVG);
  }

  var networkKey = getNetworkKey({
    url: url,
    network: network
  });
  return _react["default"].createElement("a", _extends({}, rest, {
    href: url,
    className: 'social-icon' + (className ? ' ' + className : ''),
    style: _objectSpread(_objectSpread({}, _styles.socialIcon), style),
    "aria-label": label || networkKey
  }), _react["default"].createElement("div", {
    className: "social-container",
    style: _styles.socialContainer
  }, _react["default"].createElement("svg", {
    className: "social-svg",
    style: _styles.socialSvg,
    viewBox: "0 0 64 64"
  }, _react["default"].createElement(_background["default"], null), _react["default"].createElement(_icon["default"], {
    networkKey: networkKey,
    fgColor: fgColor
  }), _react["default"].createElement(_mask["default"], {
    networkKey: networkKey,
    bgColor: bgColor
  }))), children);
}

SocialIcon.propTypes = {
  className: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  fgColor: _propTypes["default"].string,
  label: _propTypes["default"].string,
  network: _propTypes["default"].string,
  url: _propTypes["default"].string,
  defaultSVG: _propTypes["default"].exact({
    icon: _propTypes["default"].string,
    mask: _propTypes["default"].string,
    color: _propTypes["default"].string
  }),
  style: _propTypes["default"].PropTypes.object,
  children: _propTypes["default"].node
};
var _default = SocialIcon;
exports["default"] = _default;