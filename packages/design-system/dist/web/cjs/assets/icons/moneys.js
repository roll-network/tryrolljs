'use strict';

var React = require('react');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgMoneys = function SvgMoneys(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.43 5.115c-.575.533-.97 1.408-.97 2.805v5.15c0 1.01.207 1.744.53 2.269.319.515.78.88 1.39 1.107a3.14 3.14 0 0 0 .615.162c.335.076.708.112 1.115.112h8.79c1.205 0 2.095-.301 2.68-.845.575-.534.97-1.408.97-2.805V7.92c0-.41-.043-.773-.107-1.142-.183-.914-.596-1.511-1.15-1.895-.574-.396-1.371-.613-2.393-.613H6.11c-1.205 0-2.095.301-2.68.845Zm-1.02-1.1c.955-.886 2.265-1.245 3.7-1.245h8.79c1.218 0 2.345.258 3.245.88.916.632 1.523 1.592 1.77 2.844l.004.017c.075.428.131.883.131 1.409v5.15c0 1.683-.485 3.008-1.45 3.905-.955.886-2.265 1.245-3.7 1.245H6.11c-.485 0-.964-.042-1.422-.143-.3-.05-.58-.133-.824-.222l-.006-.002c-.89-.333-1.632-.898-2.144-1.727-.506-.82-.754-1.846-.754-3.056V7.92c0-1.683.485-3.008 1.45-3.905Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.652 6.108a.75.75 0 0 1 .684-.202c1.087.23 2.038.742 2.711 1.613.67.867 1.004 2.013 1.004 3.401v5.15c0 1.683-.484 3.009-1.45 3.905-.955.886-2.265 1.245-3.7 1.245h-8.79c-.803 0-1.567-.108-2.253-.367-1.445-.536-2.425-1.665-2.763-3.367a.75.75 0 0 1 .9-.878c.336.076.71.112 1.116.112h8.79c1.205 0 2.095-.301 2.68-.844.575-.534.97-1.409.97-2.806V7.92c0-.427-.036-.796-.105-1.13a.75.75 0 0 1 .206-.682Zm1.397 1.636c.002.058.002.117.002.176v5.15c0 1.683-.484 3.009-1.45 3.905-.955.886-2.265 1.245-3.7 1.245h-8.79c-.063 0-.125 0-.187-.002.33.605.827.996 1.457 1.229l.006.002c.473.18 1.048.271 1.724.271h8.79c1.205 0 2.095-.301 2.68-.845.575-.533.97-1.408.97-2.805v-5.15c0-1.151-.276-1.946-.691-2.484a2.63 2.63 0 0 0-.81-.692Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.498 8.61a1.89 1.89 0 1 0 0 3.78 1.89 1.89 0 0 0 0-3.78Zm-3.39 1.89a3.39 3.39 0 1 1 6.78 0 3.39 3.39 0 0 1-6.78 0ZM4.78 7.55a.75.75 0 0 1 .75.75v4.4a.75.75 0 0 1-1.5 0V8.3a.75.75 0 0 1 .75-.75ZM16.222 7.55a.75.75 0 0 1 .75.75v4.4a.75.75 0 0 1-1.5 0V8.3a.75.75 0 0 1 .75-.75Z"
  })));
};

module.exports = SvgMoneys;
