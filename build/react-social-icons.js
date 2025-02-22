"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcon = void 0;
Object.defineProperty(exports, "keyFor", {
  enumerable: true,
  get: function get() {
    return _networks.keyFor;
  }
});

var _socialIcon = _interopRequireDefault(require("./social-icon.js"));

var _networks = require("./networks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SocialIcon = _socialIcon["default"];
exports.SocialIcon = SocialIcon;