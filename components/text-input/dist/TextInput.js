"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextInput;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _InputContainer = _interopRequireDefault(require("./InputContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TextInput(props) {
  var _props$inputFocused;

  var mainColor = props.color || "#6f00ff";

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var onFocus = function onFocus(e) {
    var _props$onFocus;

    setFocused(true);
    props === null || props === void 0 ? void 0 : (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);
  };

  var onBlur = function onBlur(e) {
    var _props$onBlur;

    setFocused(false);
    props === null || props === void 0 ? void 0 : (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);
  };

  var getKeyboardType = function getKeyboardType() {
    if (!props.type) return "default";

    switch (props.type) {
      case "email":
      case "email-address":
        return "email-address";

      case "phone":
      case "phone-pad":
        return "phone-pad";

      case "month":
      case "numeric":
        return "numeric";

      case "number-pad":
        return "number-pad";

      default:
        return "default";
    }
  };

  var keyboardType = getKeyboardType();
  return /*#__PURE__*/_react["default"].createElement(_InputContainer["default"], _extends({}, props, {
    inputFocused: (_props$inputFocused = props.inputFocused) !== null && _props$inputFocused !== void 0 ? _props$inputFocused : focused,
    inputHasValue: !!props.value,
    color: mainColor
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, _extends({}, props, {
    placeholder: focused ? undefined : props.label,
    placeholderTextColor: props.placeholderTextColor || "grey",
    selectionColor: mainColor,
    keyboardType: props.keyboardType || keyboardType,
    onFocus: onFocus,
    onBlur: onBlur,
    editable: !props.disabled,
    style: [styles.textInputStyle, props.style]
  })));
}

var styles = {
  textInputStyle: {
    height: 50,
    paddingHorizontal: 12,
    fontSize: 16,
    flex: 1,
    outline: 'none'
  }
};

//# sourceMappingURL=TextInput.js.map