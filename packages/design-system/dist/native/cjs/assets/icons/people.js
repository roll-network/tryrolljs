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

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgPeople = function SvgPeople(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.91 2.75c-1.016 0-1.83.814-1.83 1.83 0 .978.752 1.766 1.704 1.828.08-.007.162-.007.242 0a1.84 1.84 0 0 0 1.714-1.83 1.83 1.83 0 0 0-1.83-1.828Zm-3.33 1.83a3.323 3.323 0 0 1 3.33-3.33 3.33 3.33 0 0 1 3.33 3.33v.005a3.339 3.339 0 0 1-3.213 3.325.75.75 0 0 1-.122-.006.75.75 0 0 1-.122.006 3.323 3.323 0 0 1-3.203-3.33ZM16.811 8.851c1.52-.266 3.254-.012 4.514.824l.002.001c.861.574 1.391 1.406 1.391 2.334 0 .928-.53 1.76-1.391 2.334-1.251.837-2.964 1.09-4.48.836a.75.75 0 1 1 .248-1.48c1.223.206 2.53-.021 3.398-.603l.002-.001c.548-.366.723-.774.723-1.086 0-.312-.175-.72-.723-1.085-.88-.584-2.206-.81-3.425-.596a.75.75 0 0 1-.259-1.478ZM2.73 4.58a3.33 3.33 0 0 1 3.33-3.33 3.323 3.323 0 0 1 3.33 3.33 3.323 3.323 0 0 1-3.202 3.33.75.75 0 0 1-.123-.006.75.75 0 0 1-.122.006A3.339 3.339 0 0 1 2.73 4.585V4.58Zm1.5-.003a1.84 1.84 0 0 0 1.715 1.83c.08-.006.161-.006.241 0A1.823 1.823 0 0 0 7.89 4.58c0-1.016-.814-1.83-1.83-1.83a1.83 1.83 0 0 0-1.83 1.827ZM3.476 10.925c.88-.584 2.206-.81 3.425-.596A.75.75 0 1 0 7.16 8.85c-1.52-.266-3.254-.012-4.514.824l-.002.001c-.861.574-1.391 1.406-1.391 2.334 0 .927.53 1.76 1.39 2.334 1.252.837 2.965 1.09 4.482.836a.75.75 0 1 0-.249-1.48c-1.223.206-2.53-.021-3.398-.603l-.002-.001c-.548-.366-.723-.774-.723-1.086 0-.312.175-.72.723-1.085ZM11.91 10.22c-1.016 0-1.83.814-1.83 1.83 0 .978.752 1.766 1.704 1.828.081-.007.164-.007.245 0 .943-.054 1.703-.844 1.711-1.83a1.83 1.83 0 0 0-1.83-1.828Zm-3.33 1.83a3.324 3.324 0 0 1 3.33-3.33 3.33 3.33 0 0 1 3.33 3.33v.006c-.013 1.794-1.425 3.272-3.218 3.324a.759.759 0 0 1-.117-.006.756.756 0 0 1-.122.006 3.323 3.323 0 0 1-3.203-3.33ZM12.004 16.235c1.168 0 2.377.291 3.322.921.861.575 1.391 1.407 1.391 2.334 0 .928-.53 1.76-1.39 2.334-.95.635-2.158.929-3.327.929-1.17 0-2.378-.294-3.327-.929-.86-.574-1.39-1.406-1.39-2.334 0-.927.53-1.76 1.39-2.334h.003c.948-.63 2.159-.92 3.328-.92Zm-2.5 2.17c-.547.366-.722.773-.722 1.085 0 .313.175.72.724 1.086.652.436 1.553.677 2.494.677.94 0 1.842-.24 2.493-.676.55-.366.724-.774.724-1.087 0-.312-.175-.72-.723-1.086-.645-.43-1.546-.669-2.49-.669-.944 0-1.848.24-2.5.67Z"
  })));
};

module.exports = SvgPeople;
