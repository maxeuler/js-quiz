webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/QuestionForm.js":
/*!************************************!*\
  !*** ./components/QuestionForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");









var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz/components/QuestionForm.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tpadding: 2rem;\n\tmargin: 2rem 0;\n\tfieldset {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 4rem;\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 4px;\n\t\tlabel {\n\t\t\tmargin-bottom: 2rem;\n\t\t\tfont-size: 1.6rem;\n\t\t\tinput,\n\t\t\ttextarea {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\tline-height: 1.5;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tmargin-top: 1rem;\n\t\t\t\tborder: 1px solid ", ";\n\t\t\t}\n\t\t}\n\t\tbutton {\n\t\t\tpadding: 1rem 2rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tborder: none;\n\t\t\tborder-radius: 3px;\n\t\t\tbackground: ", ";\n\t\t\tcolor: #fff;\n\t\t\tmargin: 0 auto;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Form = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].form(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.primary;
});

var QuestionForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(QuestionForm, _Component);

  function QuestionForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QuestionForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(QuestionForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      question: '',
      correct: '',
      wrong1: '',
      wrong2: '',
      wrong3: '',
      explanation: '',
      newQuestion: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submit", function (e) {
      e.preventDefault();

      var question = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state);

      _this.setState({
        newQuestion: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, question)
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(QuestionForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Form, {
        method: "POST",
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Question", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        name: "question",
        onChange: this.handleChange,
        value: this.state.question,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "correct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Correct Answer", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        name: "correct",
        onChange: this.handleChange,
        value: this.state.correct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "wrong1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Wrong Answer", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        name: "wrong1",
        onChange: this.handleChange,
        value: this.state.wrong1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "wrong2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Wrong Answer", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        name: "wrong2",
        onChange: this.handleChange,
        value: this.state.wrong2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "wrong3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Wrong Answer", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "text",
        name: "wrong3",
        onChange: this.handleChange,
        value: this.state.wrong3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "explanation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Explanation", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        type: "text",
        name: "explanation",
        rows: "5",
        onChange: this.handleChange,
        value: this.state.explanation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return QuestionForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionForm);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./questions.json":
false

})
//# sourceMappingURL=add.js.31329a0445b6a98aaf4d.hot-update.js.map