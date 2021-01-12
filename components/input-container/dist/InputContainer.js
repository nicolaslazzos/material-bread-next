"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InputContainer;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _materialBread = require("material-bread");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function InputContainer(props) {
  // color
  var mainColor = props.color || "black";
  var blurColor = "grey";
  var errorColor = "red"; // border style

  var focusStyle = {
    borderStyle: {
      borderWidth: 2.5,
      borderColor: mainColor
    },
    color: mainColor
  };
  var blurStyle = {
    borderStyle: {
      borderWidth: 0.5,
      borderColor: blurColor
    },
    color: blurColor
  }; // hooks

  var _useState = (0, _react.useState)(blurStyle),
      _useState2 = _slicedToArray(_useState, 2),
      dynamicStyle = _useState2[0],
      setDynamicStyle = _useState2[1];

  (0, _react.useEffect)(function () {
    var inputFocused = props.inputFocused,
        errorMessage = props.errorMessage;

    if (errorMessage) {
      setDynamicStyle({
        borderStyle: {
          borderWidth: inputFocused ? 2.5 : 0.5,
          borderColor: errorColor
        },
        color: errorColor
      });
    } else if (inputFocused) {
      setDynamicStyle(focusStyle);
    } else if (!inputFocused) {
      setDynamicStyle(blurStyle);
    }
  }, [props.errorMessage, props.inputFocused]);
  var color = dynamicStyle.color,
      borderStyle = dynamicStyle.borderStyle;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: props.containerStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _objectSpread({}, styles.inputContainerStyle, {
      display: 'inline-grid'
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _objectSpread({}, styles.inputBorderStyle, {}, borderStyle)
  }, !!props.iconLeft && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _objectSpread({}, styles.iconContainerStyle, {
      paddingLeft: 10
    })
  }, /*#__PURE__*/_react["default"].createElement(_materialBread.IconButton, _extends({
    size: 28,
    color: color
  }, props.iconLeft, {
    onPress: function onPress() {
      var _props$iconLeft, _props$iconLeft$onPre;

      return !props.disabled && ((_props$iconLeft = props.iconLeft) === null || _props$iconLeft === void 0 ? void 0 : (_props$iconLeft$onPre = _props$iconLeft.onPress) === null || _props$iconLeft$onPre === void 0 ? void 0 : _props$iconLeft$onPre.call(_props$iconLeft));
    }
  }))), props.children, !!props.iconRight && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: _objectSpread({}, styles.iconContainerStyle, {
      paddingRight: 10
    })
  }, /*#__PURE__*/_react["default"].createElement(_materialBread.IconButton, _extends({
    size: 28,
    color: color
  }, props.iconRight, {
    onPress: function onPress() {
      var _props$iconRight, _props$iconRight$onPr;

      return !props.disabled && ((_props$iconRight = props.iconRight) === null || _props$iconRight === void 0 ? void 0 : (_props$iconRight$onPr = _props$iconRight.onPress) === null || _props$iconRight$onPr === void 0 ? void 0 : _props$iconRight$onPr.call(_props$iconRight));
    }
  })))), !!props.errorMessage && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: _objectSpread({}, styles.textStyle, {}, styles.errorMessageStyle)
  }, props.errorMessage), !!props.description && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: _objectSpread({}, styles.textStyle, {}, styles.descriptionStyle)
  }, props.description), !!props.label && (props.inputFocused || props.inputHasValue) && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    ellipsizeMode: "tail",
    numberOfLines: 1,
    style: _objectSpread({}, styles.textStyle, {}, styles.labelStyle, {
      color: color
    })
  }, props.label)));
}

var styles = {
  inputContainerStyle: {
    paddingVertical: 5,
    paddingTop: 9
  },
  inputBorderStyle: {
    flexDirection: "row",
    borderRadius: 4,
    marginBottom: 3,
    height: 51
  },
  textStyle: {
    fontSize: 13,
    paddingHorizontal: 3,
    marginLeft: 6,
    marginRight: 6
  },
  labelStyle: {
    position: "absolute",
    backgroundColor: "white",
    marginLeft: 9,
    marginRight: 9
  },
  descriptionStyle: {
    color: "grey"
  },
  errorMessageStyle: {
    color: "red"
  },
  iconContainerStyle: {
    alignItems: "center",
    justifyContent: "center"
  }
};

//# sourceMappingURL=InputContainer.js.map