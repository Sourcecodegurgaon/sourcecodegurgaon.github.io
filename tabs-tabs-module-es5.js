function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tabs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search-main-container\">\n    <div class=\"username-search\">\n      <p class=\"username-serch-text\">Username Search</p>\n      <input type=\"text\" id=\"gender\" name=\"gender\" class=\"form-field-zip-code search-country\">\n      <p class=\"caution\">Enter atleast 4 characters of the username</p>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" (click)=\"matgroup.selectedIndex = 1\">Search</button>\n      </div>\n    </div>\n     <p class=\"or-text\">OR</p>\n     <p class=\"username-serch-text\">Advanced Search</p>\n\n     <label for=\"name\" class=\"form-label\">Zip/Postalcode</label><br>\n     <input type=\"text\" id=\"Postalcode\" name=\"Postalcode\" class=\"form-field-zip-code search-country\"><br>\n\n\n\n\n\n\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 15px;\n  border: 1px solid;\n  margin-bottom: 20px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  margin: 1em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\n\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\n.main-register-card {\n  border: 1px solid #707070;\n}\n\n.mat-background {\n  background-color: #F5F5F5;\n}\n\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\n\np.register-with-us {\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.5em;\n  padding: 0 22vw 0 19vw;\n  border: none;\n  text-align: left;\n  line-height: 60px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 2vh;\n  left: 0;\n  width: 32px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n}\n\n.loginBtn--facebook:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  background: #4184F3;\n}\n\n.loginBtn--google:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\n\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.upload-content {\n  margin: 10px;\n}\n\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\n\np.terms {\n  padding-bottom: 10px;\n}\n\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n.label-dropdown {\n  padding-left: 10px;\n}\n\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\n\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n\n.button-prev {\n  background-color: #E81E16 !important;\n}\n\n.search-main-container {\n  align-items: center;\n  justify-content: center;\n  margin: 7vw;\n}\n\np.username-serch-text {\n  text-align: center;\n  font-size: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.or-text {\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9LOlxcQW5ndWxhciBQcm9qZWN0XFxub3Q0RGF0aW5nL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7QUNBRjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9DQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFFSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtBO0VBRUksc0JBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBREtBO0VBRUkseUJBQUE7QUNISjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FESUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0FDR0o7O0FERUUsYUFBQTs7QUFDQTtFQUNFLHlCQUFBO0FDQ0o7O0FEQ0U7RUFFRSx5R0FBQTtBQ0NKOztBRENFOztFQUVFLHlCQUFBO0VBQ0EsbURBQUE7QUNFSjs7QURFRSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDSjs7QURDRTtFQUNFLHVHQUFBO0FDRUo7O0FEQUU7O0VBRUUsbUJBQUE7QUNHSjs7QURBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtBQ1NKOztBRFBBO0VBRUksdUJBQUE7RUFDQSxZQUFBO0FDU0o7O0FETkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNTSjs7QURQQTtFQUNJLG9CQUFBO0FDVUo7O0FEUkE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVQTs7QURQQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5RkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FDV0o7O0FEUEU7RUFBcUIsYUFBQTtBQ1d2Qjs7QURUQTtFQUVJLGtCQUFBO0FDV0o7O0FEVEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ1lKOztBRFZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2NKOztBRFpBO0VBQ0ksb0NBQUE7QUNlSjs7QURiQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ2lCSjs7QURmQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY2FyZC1jb250ZW50LWZvbnRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufVxyXG4uY2FyZC1vbmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG5cclxufVxyXG4udGl0dGxlLWNhcmRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuZm9ybS5mb3JtLWZpZWxkc3tcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcbmlucHV0e1xyXG4gICAgLyogaGVpZ2h0OiA2dmg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYVxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuIFxyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcbiAgLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5mb3JtLWxhYmVsLWNvdW50cnlcclxue1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM0NDlENDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbi5zZWFyY2gtY291bnRyeVxyXG57XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluLXJlZ2lzdGVyLWNhcmRcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxufVxyXG4ubWF0LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG4uY2FyZC1vbmUtd2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxucC5yZWdpc3Rlci13aXRoLXVzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW5CdG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIHBhZGRpbmc6IDAgMjJ2dyAwIDE5dnc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgLmxvZ2luQnRuOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnZoO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubG9naW5CdG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRmFjZWJvb2sgKi9cclxuICAubG9naW5CdG4tLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBHb29nbGUgKi9cclxuICAubG9naW5CdG4tLWdvb2dsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDE4NEYzO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI0U3NEIzNztcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnAub3ItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuLmhhdmluZy10cm91YmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG59XHJcbi51cGxvYWQtY2FyZC1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxuLnByb2ZpbGUtaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG5wLnByb2ZpbGUtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi51cGxvYWQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmlucHV0LWNob29zZVxyXG57XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggOHZ3O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBREIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5wLnRlcm1zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yYWRpb1xyXG57XHJcbmhlaWdodDogYXV0bztcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbm1hcmdpbi10b3A6IDJweDtcclxubWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL215d2lsZGFsYmVydGEuY2EvaW1hZ2VzL0dGWC1NV0EtUGFya3MtUmVzZXJ2YXRpb25zLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL2Ryb3Bkb3duLnBuZ1wiKSBuby1yZXBlYXQgOTYlICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBzZWxlY3Q6Oi1tcy1leHBhbmQgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ubGFiZWwtZHJvcGRvd25cclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb25kaXRpb24tdGV4dC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcbnAuY29uZGl0aW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi50ZXJtcy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcbi5idXR0b24tcHJldiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxRTE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDd2d1xyXG59XHJcbnAudXNlcm5hbWUtc2VyY2gtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5vci10ZXh0XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9CYWNrZ3JvdW5kVGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmNhcmQtY29udGVudC1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uY2FyZC1vbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuXG4udGl0dGxlLWNhcmQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuZm9ybS5mb3JtLWZpZWxkcyB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5pbnB1dCB7XG4gIC8qIGhlaWdodDogNnZoOyAqL1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDdweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybS1sYWJlbC1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYnV0dG9uLmJ1dHRvbi1jb21tb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5RDQ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnNlYXJjaC1jb3VudHJ5IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1yZWdpc3Rlci1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbn1cblxuLm1hdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNhcmQtb25lLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxucC5yZWdpc3Rlci13aXRoLXVzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMCAyMnZ3IDAgMTl2dztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5sb2dpbkJ0bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnZoO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9naW5CdG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBGYWNlYm9vayAqL1xuLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzY5QkE7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmdcIikgNnB4IDZweCBuby1yZXBlYXQ7XG59XG5cbi5sb2dpbkJ0bi0tZmFjZWJvb2s6aG92ZXIsXG4ubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM1QjdCRDUsICM0ODY0QjEpO1xufVxuXG4vKiBHb29nbGUgKi9cbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogIzQxODRGMztcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nXCIpIDZweCA2cHggbm8tcmVwZWF0O1xufVxuXG4ubG9naW5CdG4tLWdvb2dsZTpob3Zlcixcbi5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI0U3NEIzNztcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5vci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG59XG5cbi5oYXZpbmctdHJvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi51cGxvYWQtY2FyZC1yZWdpc3RlciB7XG4gIG1hcmdpbjogMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG4ucHJvZmlsZS1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgcGFkZGluZzogMC4zZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xufVxuXG5wLnByb2ZpbGUtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnVwbG9hZC1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaW5wdXQtY2hvb3NlIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwcHggOHZ3O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QURCMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5wLnRlcm1zIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDV2dztcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9teXdpbGRhbGJlcnRhLmNhL2ltYWdlcy9HRlgtTVdBLVBhcmtzLVJlc2VydmF0aW9ucy5wbmcpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9kcm9wZG93bi5wbmdcIikgbm8tcmVwZWF0IDk2JSAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFiZWwtZHJvcGRvd24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb25kaXRpb24tdGV4dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjIgIWltcG9ydGFudDtcbn1cblxucC5jb25kaXRpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRlcm1zLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5idXR0b24tcHJldiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1tYWluLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDd2dztcbn1cblxucC51c2VybmFtZS1zZXJjaC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM3MDcwNzA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsPage;
    }();

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map