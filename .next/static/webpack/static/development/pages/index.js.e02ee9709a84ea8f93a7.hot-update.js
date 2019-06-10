webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GameView.js":
/*!********************************!*\
  !*** ./components/GameView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _QuestionCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./QuestionCard */ "./components/QuestionCard.js");
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Control */ "./components/Control.js");
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GameOver */ "./components/GameOver.js");
/* harmony import */ var _questions_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../questions.json */ "./questions.json");
var _questions_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../questions.json */ "./questions.json", 1);








var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz/components/GameView.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n\twidth: 40%;\n\ttext-align: center;\n\tmargin: 3rem auto;\n\tfont-size: 2em;\n\tfont-weight: 300;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n\ttext-align: center;\n\tfont-size: 3rem;\n\tfont-weight: 300;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h3(_templateObject());
var Explanation = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p(_templateObject2());

var GameView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GameView, _Component);

  function GameView() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GameView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      questions: [],
      questionsCount: 0,
      currentQuestion: 0,
      quizIsRunning: true,
      showExplanation: false,
      correctAnswers: 0,
      questionAnswered: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "nextQuestion", function () {
      if (_this.state.questions.length - 1 == _this.state.currentQuestion) {
        // quiz is over
        _this.setState({
          quizIsRunning: false
        });

        return;
      }

      _this.setState(function (prevState) {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          questionAnswered: false,
          showExplanation: false
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "answerSelected", function (e) {
      console.log(e.target.className);

      _this.setState({
        questionAnswered: true,
        showExplanation: true
      });

      if (e.target.className === 'correct') {
        _this.setState(function (prevState) {
          return {
            correctAnswers: prevState.correctAnswers + 1
          };
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        questions: _questions_json__WEBPACK_IMPORTED_MODULE_13__
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentQuestion = this.state.questions[this.state.currentQuestion] || '';
      return !this.state.quizIsRunning ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Frage 1 von 10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: this.state.questionAnswered ? {
          pointerEvents: 'none'
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_QuestionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        question: this.state.questions[this.state.currentQuestion] || '',
        answerSelected: this.answerSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), this.state.showExplanation && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Explanation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, currentQuestion.explanation), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Control__WEBPACK_IMPORTED_MODULE_11__["default"], {
        next: this.nextQuestion,
        gameOver: this.props.gameOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_GameOver__WEBPACK_IMPORTED_MODULE_12__["default"], {
        gameOver: this.props.gameOver,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });
    }
  }]);

  return GameView;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ })

})
//# sourceMappingURL=index.js.e02ee9709a84ea8f93a7.hot-update.js.map