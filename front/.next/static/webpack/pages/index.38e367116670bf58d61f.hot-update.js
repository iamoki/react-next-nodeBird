webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/oki-an/Desktop/project/react-next-nodebird/front/components/FollowButton.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  _s();\n\n  var post = _ref.post;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      followLoading = _useSelector.followLoading,\n      unfollowLoading = _useSelector.unfollowLoading;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])(); // 게시글 작성사 목록의 아이디가 내가 팔로우 하고있다면 그사람들의 리스트\n\n  var isFollowing = me === null || me === void 0 ? void 0 : me.Following.find(function (v) {\n    return v.id === post.User.id;\n  });\n  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    // 팔로우 하고있다면 언팔액션\n    if (isFollowing) {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_REQUEST\"]\n      });\n    } else {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"FOLLOW_REQUEST\"]\n      });\n    }\n  }, [isFollowing]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    loading: followLoading || unfollowLoading,\n    onClickButton: onClickButton,\n    children: isFollowing ? '언팔로우' : '팔로우'\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(FollowButton, \"EmyM98b7yhkDGxSSUGFn8Q9dj0c=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c = FollowButton;\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/YmQ0ZiJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmciLCJmaW5kIiwidiIsImlkIiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQy9CLHFCQUErQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUQ7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0FBQUEsTUFBWUMsYUFBWixnQkFBWUEsYUFBWjtBQUFBLE1BQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FGK0IsQ0FHL0I7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRU0sU0FBSixDQUFjQyxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU2IsSUFBSSxDQUFDYyxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBbkIsQ0FBcEI7QUFDQSxNQUFNRSxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQztBQUNBLFFBQUdQLFdBQUgsRUFBZ0I7QUFDWkYsY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRUMsK0RBQWdCQTtBQURqQixPQUFELENBQVI7QUFHSCxLQUpELE1BSU87QUFDSFgsY0FBUSxDQUFDO0FBQ0xVLFlBQUksRUFBRUUsNkRBQWNBO0FBRGYsT0FBRCxDQUFSO0FBR0g7QUFDSixHQVhnQyxFQVc5QixDQUFDVixXQUFELENBWDhCLENBQWpDO0FBWUEsc0JBQ0kscUVBQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVKLGFBQWEsSUFBSUMsZUFBbEM7QUFBbUQsaUJBQWEsRUFBRVMsYUFBbEU7QUFBQSxjQUNLTixXQUFXLEdBQUcsTUFBSCxHQUFZO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBdEJEOztHQUFNVixZO1VBQzZDRSx1RCxFQUM5Qk8sdUQ7OztLQUZmVCxZO0FBd0JOQSxZQUFZLENBQUNxQixTQUFiLEdBQXlCO0FBQ3JCcEIsTUFBSSxFQUFFcUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERixDQUF6QjtBQUlleEIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5cblxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAvLyDqsozsi5zquIAg7J6R7ISx7IKsIOuqqeuhneydmCDslYTsnbTrlJTqsIAg64K06rCAIO2MlOuhnOyasCDtlZjqs6Dsnojri6TrqbQg6re47IKs656M65Ok7J2YIOumrOyKpO2KuFxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXIuaWQpO1xuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIC8vIO2MlOuhnOyasCDtlZjqs6Dsnojri6TrqbQg7Ja47YyU7JWh7IWYXG4gICAgICAgIGlmKGlzRm9sbG93aW5nKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1RcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbaXNGb2xsb3dpbmddKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrQnV0dG9uPXtvbkNsaWNrQnV0dG9ufT5cbiAgICAgICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICk7XG59O1xuXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FollowButton.js\n");

/***/ })

})