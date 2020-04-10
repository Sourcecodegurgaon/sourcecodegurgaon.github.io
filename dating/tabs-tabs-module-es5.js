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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tabs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search-main-container\">\n    <div class=\"username-search\">\n      <p class=\"username-serch-text\">Username Search</p>\n      <input type=\"text\" id=\"gender\" name=\"gender\" class=\"form-field-zip-code search-country\">\n      <p class=\"caution\">Enter atleast 4 characters of the username</p>\n      <div class=\"button-container\">\n        <button type=\"button\" class=\"button-common\" (click)=\"matgroup.selectedIndex = 1\" routerLink=\"/search-result\">Search</button>\n      </div>\n    </div>\n     <p class=\"or-text\">OR</p>\n     <p class=\"username-serch-text\">Advanced Search</p>\n\n     <label for=\"name\" class=\"form-label\">Zip/Postalcode</label><br>\n     <input type=\"text\" id=\"Postalcode\" name=\"Postalcode\" class=\"form-field-zip-code search-country\"><br>\n\n     <label class=\"form-label\">Distance</label><br>\n     <select id=\"alcohol\" class=\"country-field search-country\">\n       <option value=\"week\">30 miles</option>\n       <option value=\"daily\">20 miles</option>\n     </select>\n\n     <label class=\"form-label\">Gender</label><br>\n     <select id=\"alcohol\" class=\"country-field search-country\">\n       <option value=\"week\">Male</option>\n       <option value=\"daily\">Female</option>\n     </select>\n\n\n     <label class=\"form-label\">Any Pets?</label><br>\n     <mat-form-field>\n       <mat-label class=\"label-dropdown\">Pets</mat-label>\n       <mat-select multiple>\n         <mat-select-trigger>\n           {{activity.value ? activity.value[0] : ''}}\n           <span *ngIf=\"activity.value?.length > 1\" class=\"example-additional-selection\">\n             (+{{activity.value.length - 1}} {{activity.value?.length === 2 ? 'other' : 'others'}})\n           </span>\n         </mat-select-trigger>\n         <mat-option *ngFor=\"let activity of activityList\" [value]=\"activity\">{{activity}}</mat-option>\n       </mat-select>\n     </mat-form-field><br>\n     \n<div class=\"radio-tabs\">\n  <p>I'm Looking To Meet</p>\n  <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" class=\"radio\">\n  <label for=\"male\">- Any -</label><br>\n  <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\" class=\"radio\">\n  <label for=\"female\">Does not Matter</label><br>\n  <input type=\"radio\" id=\"other\" name=\"gender\" value=\"other\" class=\"radio\">\n  <label for=\"other\">A few good friends</label><br>\n  <input type=\"radio\" id=\"diverse\" name=\"diverse\" value=\"diverse\" class=\"radio\">\n  <label for=\"diverse\">A lot of acquaintances</label>\n</div>\n\n     <label class=\"form-label\">Sort By</label><br>\n     <select id=\"alcohol\" class=\"country-field search-country\">\n       <option value=\"week\">Newest Member</option>\n       <option value=\"daily\">Oldes Member</option>\n     </select>\n     <div class=\"button-container\">\n      <button type=\"button\" class=\"button-common button-prev\">Reset</button>\n      <button type=\"button\" class=\"button-common\" routerLink=\"/search-result\">Search</button>\n\n\n    </div>\n  </div>\n</ion-content>";
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


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
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


    __webpack_exports__["default"] = ".background {\n  background-image: url('BackgroundTile.png');\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  overflow-x: auto;\n}\n\n.card-content-font {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  text-align: center;\n  color: #707070;\n}\n\n.card-one {\n  border: 1px solid #707070;\n}\n\n.tittle-card {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: 27px;\n  text-align: center;\n  color: #707070;\n  padding: 1em;\n}\n\nform.form-fields {\n  margin: 2em;\n}\n\ninput {\n  /* height: 6vh; */\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n}\n\ntextarea {\n  border-radius: 7px;\n  margin-top: 15px;\n  border: 1px solid;\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n}\n\nselect {\n  border-radius: 7px;\n  height: 47px;\n  margin-top: 10px;\n  border: 1px solid;\n  margin-bottom: 15px;\n  width: 55%;\n  font-size: 16px;\n  margin-left: 0px;\n  padding-left: 10px;\n}\n\n.form-label {\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.form-label-country {\n  font-size: 19px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.button-container {\n  display: flex;\n  margin: 1em;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 0px;\n}\n\nbutton.button-common {\n  height: 35px;\n  padding: 0px 20px;\n  border: 1px solid #707070;\n  background-color: #449D44;\n  color: white;\n  border-radius: 7px;\n  font-size: 17px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: bold;\n}\n\n.search-country {\n  width: 100% !important;\n  background-color: #F2F2F2 !important;\n  padding-left: 10px;\n}\n\n.main-register-card {\n  border: 1px solid #707070;\n}\n\n.mat-background {\n  background-color: #F5F5F5;\n}\n\n.card-one-white {\n  background-color: white;\n  padding: 1px;\n}\n\np.register-with-us {\n  padding: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.5em;\n  padding: 0 22vw 0 19vw;\n  border: none;\n  text-align: left;\n  line-height: 60px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 2vh;\n  left: 0;\n  width: 32px;\n  height: 100%;\n}\n\n.loginBtn:focus {\n  outline: none;\n}\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n}\n\n.loginBtn--facebook:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n\n/* Google */\n\n.loginBtn--google {\n  background: #4184F3;\n}\n\n.loginBtn--google:before {\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n\n.social-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np.or-text {\n  text-align: center;\n  font-size: 27px;\n}\n\n.having-trouble {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 0.5em;\n}\n\n.upload-card-register {\n  margin: 2em;\n  border: 1px solid #F5F5F5;\n}\n\n.profile-heading {\n  background-color: #F5F5F5;\n  padding: 0.3em;\n  border-bottom: 1px solid #F5F5F5;\n}\n\np.profile-card-title {\n  font-size: 14px;\n  margin: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.upload-content {\n  margin: 10px;\n}\n\n.input-choose {\n  border: none !important;\n  height: 30px;\n}\n\n.submit-button {\n  margin: 0px;\n  border: none;\n  padding: 0px 8vw;\n  height: 41px;\n  background-color: #5ADB00;\n  color: white;\n  font-size: 15px;\n}\n\np.terms {\n  padding-bottom: 10px;\n}\n\n.radio {\n  height: auto;\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5vw;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('dropdown.png') no-repeat 96% !important;\n}\n\nselect::-ms-expand {\n  display: none;\n}\n\n.label-dropdown {\n  padding-left: 10px;\n}\n\n.condition-text-container {\n  height: 20vh;\n  overflow: auto;\n  border: 1px solid #707070;\n  border-radius: 7px;\n  background-color: #F2F2F2 !important;\n}\n\np.condition-text {\n  font-size: 12px;\n  color: black;\n  text-align: justify;\n  padding: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.terms-checkbox {\n  margin-left: 0px;\n  margin-bottom: 0px;\n  margin-top: 1vh;\n}\n\n.button-prev {\n  background-color: #E81E16 !important;\n}\n\n.search-main-container {\n  align-items: center;\n  justify-content: center;\n  margin: 7vw;\n}\n\np.username-serch-text {\n  text-align: center;\n  font-size: 22px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n}\n\n.or-text {\n  text-align: center;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBRUksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNGLGNBQUE7QUNBRjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUU7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9DQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFFSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtBO0VBRUksc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0E7RUFFSSx5QkFBQTtBQ0hKOztBREtBO0VBQ0kseUJBQUE7QUNGSjs7QURJQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGFBQUE7QUNHSjs7QURFRSxhQUFBOztBQUNBO0VBQ0UseUJBQUE7QUNDSjs7QURDRTtFQUVFLHlHQUFBO0FDQ0o7O0FEQ0U7O0VBRUUseUJBQUE7RUFDQSxtREFBQTtBQ0VKOztBREVFLFdBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUdBQUE7QUNFSjs7QURBRTs7RUFFRSxtQkFBQTtBQ0dKOztBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxZQUFBO0FDU0o7O0FEUEE7RUFFSSx1QkFBQTtFQUNBLFlBQUE7QUNTSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRFBBO0VBQ0ksb0JBQUE7QUNVSjs7QURSQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1VBOztBRFBBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlGQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QUNXSjs7QURQRTtFQUFxQixhQUFBO0FDV3ZCOztBRFRBO0VBRUksa0JBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDWUo7O0FEVkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxvQ0FBQTtBQ2VKOztBRGJBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDaUJKOztBRGZBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5jYXJkLWNvbnRlbnQtZm9udFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcblxyXG59XHJcbi5jYXJkLW9uZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcblxyXG59XHJcbi50aXR0bGUtY2FyZFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5mb3JtLmZvcm0tZmllbGRze1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbn1cclxuaW5wdXR7XHJcbiAgICAvKiBoZWlnaHQ6IDZ2aDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHRleHRhcmVhXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gXHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbn1cclxuICAuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmZvcm0tbGFiZWwtY291bnRyeVxyXG57XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ0OUQ0NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuLnNlYXJjaC1jb3VudHJ5XHJcbntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1haW4tcmVnaXN0ZXItY2FyZFxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG59XHJcbi5tYXQtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5jYXJkLW9uZS13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5wLnJlZ2lzdGVyLXdpdGgtdXMge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2dpbkJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgcGFkZGluZzogMCAyMnZ3IDAgMTl2dztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAubG9naW5CdG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAydmg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBGYWNlYm9vayAqL1xyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpiZWZvcmUge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1mYWNlYm9vazpob3ZlcixcclxuICAubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzVCN0JENSwgIzQ4NjRCMSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEdvb2dsZSAqL1xyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MTg0RjM7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuICAubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG4gIH1cclxuXHJcbiAgLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucC5vci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG4uaGF2aW5nLXRyb3VibGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbn1cclxuLnVwbG9hZC1jYXJkLXJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcclxufVxyXG4ucHJvZmlsZS1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1O1xyXG59XHJcbnAucHJvZmlsZS1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnVwbG9hZC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uaW5wdXQtY2hvb3NlXHJcbntcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxufVxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCA4dnc7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnAudGVybXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJhZGlvXHJcbntcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxubWFyZ2luLXRvcDogMnB4O1xyXG5tYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvZHJvcGRvd24ucG5nXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdDo6LW1zLWV4cGFuZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5sYWJlbC1kcm9wZG93blxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbmRpdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxucC5jb25kaXRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnRlcm1zLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuLmJ1dHRvbi1wcmV2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODFFMTYgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLW1haW4tY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogN3Z3XHJcbn1cclxucC51c2VybmFtZS1zZXJjaC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLm9yLXRleHRcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59IiwiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvSW1hZ2VzL0JhY2tncm91bmRUaWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50LWZvbnQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJkLW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi50aXR0bGUtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5mb3JtLmZvcm0tZmllbGRzIHtcbiAgbWFyZ2luOiAyZW07XG59XG5cbmlucHV0IHtcbiAgLyogaGVpZ2h0OiA2dmg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDU1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWxhYmVsLWNvdW50cnkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG5idXR0b24uYnV0dG9uLWNvbW1vbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlENDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4uc2VhcmNoLWNvdW50cnkge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm1haW4tcmVnaXN0ZXItY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi5tYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jYXJkLW9uZS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAucmVnaXN0ZXItd2l0aC11cyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dpbkJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAgMjJ2dyAwIDE5dnc7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4ubG9naW5CdG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJ2aDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luQnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogRmFjZWJvb2sgKi9cbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2OUJBO1xufVxuXG4ubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZmFjZWJvb2sucG5nXCIpIDZweCA2cHggbm8tcmVwZWF0O1xufVxuXG4ubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxuLmxvZ2luQnRuLS1mYWNlYm9vazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QjdCRDU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcbn1cblxuLyogR29vZ2xlICovXG4ubG9naW5CdG4tLWdvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICM0MTg0RjM7XG59XG5cbi5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZ1wiKSA2cHggNnB4IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4ubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNFNzRCMzc7XG59XG5cbi5zb2NpYWwtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAub3ItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4uaGF2aW5nLXRyb3VibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDAuNWVtO1xufVxuXG4udXBsb2FkLWNhcmQtcmVnaXN0ZXIge1xuICBtYXJnaW46IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y1RjVGNTtcbn1cblxuLnByb2ZpbGUtaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNTtcbn1cblxucC5wcm9maWxlLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi51cGxvYWQtY29udGVudCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmlucHV0LWNob29zZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDh2dztcbiAgaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUFEQjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxucC50ZXJtcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmFkaW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cblxuc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9JbWFnZXMvZHJvcGRvd24ucG5nXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxhYmVsLWRyb3Bkb3duIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29uZGl0aW9uLXRleHQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyICFpbXBvcnRhbnQ7XG59XG5cbnAuY29uZGl0aW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi50ZXJtcy1jaGVja2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMXZoO1xufVxuXG4uYnV0dG9uLXByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTgxRTE2ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtbWFpbi1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA3dnc7XG59XG5cbnAudXNlcm5hbWUtc2VyY2gtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm9yLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNzA3MDcwO1xufSJdfQ== */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage() {
        _classCallCheck(this, TabsPage);

        this.activity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.activityList = ['Yoga', 'Cooking', 'Watching Movies'];
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