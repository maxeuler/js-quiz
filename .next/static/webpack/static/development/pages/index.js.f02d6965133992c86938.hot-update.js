webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuestionCard.js":
/*!************************************!*\
  !*** ./components/QuestionCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz/components/QuestionCard.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\twidth: 40%;\n\tborder: 2px solid ", ";\n\tborder-radius: 10px;\n\tbox-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);\n\tmargin: 4rem auto;\n\tp {\n\t\ttext-align: center;\n\t\tfont-size: 1.4rem;\n\t\tmargin: 2rem;\n\t}\n\t.answers {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-gap: 20px;\n\t\tmargin: 3rem auto;\n\t\twidth: 80%;\n\t}\n\tbutton {\n\t\theight: 8rem;\n\t\twidth: 16rem;\n\t\tmargin: 0 auto;\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 5px;\n\t\tfont-size: 1.4rem;\n\t\tcursor: pointer;\n\t\t:hover {\n\t\t\tbackground: rgba(0, 0, 0, 0.05);\n\t\t}\n\t\t:focus {\n\t\t\tborder: 2px solid #2ecc71;\n\n\t\t\toutline: none;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Card = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
});

var QuestionCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuestionCard, _Component);

  function QuestionCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionCard, [{
    key: "render",
    value: function render() {
      var question = this.props.question;
      var answers = [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "correct",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, question.correct), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "wrong",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, question.wrong1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "wrong",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, question.wrong2), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "wrong",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, question.wrong3)];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, question.question), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "answers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, answers.sort(function () {
        return Math.random() - 0.5;
      })));
    }
  }]);

  return QuestionCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionCard);

/***/ })

})
//# sourceMappingURL=index.js.f02d6965133992c86938.hot-update.js.map