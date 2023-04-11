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
var SvgSecurityTime = function SvgSecurityTime(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.003 1.248c.608 0 1.253.084 1.784.277l.006.003 4.99 1.87c.747.279 1.383.84 1.83 1.485.447.646.747 1.44.747 2.237v7.43c0 .739-.239 1.538-.589 2.233-.35.696-.849 1.365-1.442 1.808l-4.298 3.208-.001.001c-.858.645-1.957.945-3.02.945s-2.162-.3-3.02-.945L4.691 18.59c-.593-.443-1.093-1.112-1.443-1.808-.35-.695-.589-1.494-.589-2.233V7.12c0-.797.3-1.59.747-2.237.447-.645 1.083-1.206 1.83-1.485l4.99-1.87c.525-.196 1.168-.28 1.776-.28Zm-1.25 1.685-4.99 1.87c-.403.15-.812.484-1.122.934-.311.449-.48.95-.48 1.383v7.43c0 .441.15 1.007.428 1.56.277.551.643 1.012 1 1.28l4.302 3.21c.552.416 1.318.645 2.12.645.8 0 1.566-.23 2.119-.644l.002-.002 4.3-3.21c.356-.267.722-.728 1-1.28.277-.552.428-1.118.428-1.559V7.12c0-.433-.17-.934-.48-1.383-.311-.45-.72-.784-1.122-.934l-4.988-1.87c-.319-.115-.777-.185-1.267-.185-.493 0-.945.07-1.25.185Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.25 11.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.25 9.5a.75.75 0 0 1 .75.75v.93a1.74 1.74 0 0 1-.857 1.505l-.755.457a.75.75 0 1 1-.776-1.284l.771-.467a.24.24 0 0 0 .117-.211v-.93a.75.75 0 0 1 .75-.75Z"
  })));
};

module.exports = SvgSecurityTime;
