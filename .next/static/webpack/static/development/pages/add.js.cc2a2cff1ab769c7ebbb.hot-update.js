webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/QuestionForm.js":
/*!************************************!*\
  !*** ./components/QuestionForm.js ***!
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






var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz/components/QuestionForm.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tpadding: 2rem;\n\tfieldset {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 2rem;\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 4px;\n\t\tlabel {\n\t\t\tmargin-bottom: 2rem;\n\t\t\tfont-size: 1.6rem;\n\t\t\tinput,\n\t\t\ttextarea {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\tline-height: 1.5;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tmargin-top: 1rem;\n\t\t\t}\n\t\t}\n\t\tbutton {\n\t\t\tpadding: 1rem;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Form = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].form(_templateObject(), function (props) {
  return props.theme.primary;
});

var QuestionForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuestionForm, _Component);

  function QuestionForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Form, {
        action: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Question", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "correct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Correct", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "correct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "wrong1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Wrong", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "wrong1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "wrong2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Wrong", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "wrong2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "wrong3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Wrong", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "wrong3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Description", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
        type: "text",
        name: "description",
        rows: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return QuestionForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionForm);

/***/ })

})
//# sourceMappingURL=add.js.cc2a2cff1ab769c7ebbb.hot-update.js.map