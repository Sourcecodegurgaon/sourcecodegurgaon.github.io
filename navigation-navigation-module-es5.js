function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationNavigationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>navigation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/navigation/navigation-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/navigation/navigation-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: NavigationPageRoutingModule */

  /***/
  function srcAppNavigationNavigationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationPageRoutingModule", function () {
      return NavigationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navigation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation.page */
    "./src/app/navigation/navigation.page.ts");

    var routes = [{
      path: '',
      component: _navigation_page__WEBPACK_IMPORTED_MODULE_3__["NavigationPage"]
    }];

    var NavigationPageRoutingModule = function NavigationPageRoutingModule() {
      _classCallCheck(this, NavigationPageRoutingModule);
    };

    NavigationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NavigationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/navigation/navigation.module.ts ***!
    \*************************************************/

  /*! exports provided: NavigationPageModule */

  /***/
  function srcAppNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationPageModule", function () {
      return NavigationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navigation-routing.module */
    "./src/app/navigation/navigation-routing.module.ts");
    /* harmony import */


    var _navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navigation.page */
    "./src/app/navigation/navigation.page.ts");

    var NavigationPageModule = function NavigationPageModule() {
      _classCallCheck(this, NavigationPageModule);
    };

    NavigationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavigationPageRoutingModule"]],
      declarations: [_navigation_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPage"]]
    })], NavigationPageModule);
    /***/
  },

  /***/
  "./src/app/navigation/navigation.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/navigation/navigation.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationNavigationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/navigation/navigation.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/navigation/navigation.page.ts ***!
    \***********************************************/

  /*! exports provided: NavigationPage */

  /***/
  function srcAppNavigationNavigationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationPage", function () {
      return NavigationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationPage = /*#__PURE__*/function () {
      function NavigationPage() {
        _classCallCheck(this, NavigationPage);
      }

      _createClass(NavigationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationPage;
    }();

    NavigationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.page.scss */
      "./src/app/navigation/navigation.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavigationPage);
    /***/
  }
}]);
//# sourceMappingURL=navigation-navigation-module-es5.js.map