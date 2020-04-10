function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs2-tabs2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabs2Tabs2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tabs2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\ntext\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs2/tabs2-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: Tabs2PageRoutingModule */

  /***/
  function srcAppTabs2Tabs2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageRoutingModule", function () {
      return Tabs2PageRoutingModule;
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


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var routes = [{
      path: '',
      component: _tabs2_page__WEBPACK_IMPORTED_MODULE_3__["Tabs2Page"]
    }];

    var Tabs2PageRoutingModule = function Tabs2PageRoutingModule() {
      _classCallCheck(this, Tabs2PageRoutingModule);
    };

    Tabs2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tabs2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.module.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.module.ts ***!
    \***************************************/

  /*! exports provided: Tabs2PageModule */

  /***/
  function srcAppTabs2Tabs2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2PageModule", function () {
      return Tabs2PageModule;
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


    var _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs2-routing.module */
    "./src/app/tabs2/tabs2-routing.module.ts");
    /* harmony import */


    var _tabs2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs2.page */
    "./src/app/tabs2/tabs2.page.ts");

    var Tabs2PageModule = function Tabs2PageModule() {
      _classCallCheck(this, Tabs2PageModule);
    };

    Tabs2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs2PageRoutingModule"]],
      declarations: [_tabs2_page__WEBPACK_IMPORTED_MODULE_6__["Tabs2Page"]]
    })], Tabs2PageModule);
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.scss":
  /*!***************************************!*\
    !*** ./src/app/tabs2/tabs2.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabs2Tabs2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMyL3RhYnMyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs2/tabs2.page.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs2/tabs2.page.ts ***!
    \*************************************/

  /*! exports provided: Tabs2Page */

  /***/
  function srcAppTabs2Tabs2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tabs2Page", function () {
      return Tabs2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Tabs2Page = /*#__PURE__*/function () {
      function Tabs2Page() {
        _classCallCheck(this, Tabs2Page);
      }

      _createClass(Tabs2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Tabs2Page;
    }();

    Tabs2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs2/tabs2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs2.page.scss */
      "./src/app/tabs2/tabs2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Tabs2Page);
    /***/
  }
}]);
//# sourceMappingURL=tabs2-tabs2-module-es5.js.map