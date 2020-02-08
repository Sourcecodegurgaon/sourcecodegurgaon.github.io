function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertDialogAlertDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n  Thank You,Your Details Have Been Stored\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\" routerLink=\"/sellermatches\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertdialogbuyerAlertdialogbuyerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n  Thank You,Your Details Have Been Stored\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\"\r\n    routerLink=\"/matches\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav></app-nav>\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<!-- <app-dashboard></app-dashboard> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyerdetailsBuyerdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Name:\r\n            <span class=\"output\">&nbsp;{{ Buyer.Firstname }} {{ Buyer.Lastname }}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{Buyer.Email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{Buyer.DOB}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Chain status:<span class=\"output\">&nbsp;{{Buyer.ChainStatus}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Financial Position:<span\r\n              class=\"output\">&nbsp;{{Buyer.FinancialPosition}}</span></td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Property Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Type:\r\n            <span class=\"output\">&nbsp;{{Buyer.Propertytype}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Search Radius:<span class=\"output\">&nbsp;{{Buyer.SearchRadius}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Price Range:<span class=\"output\">&nbsp;{{Buyer.PriceRange}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Offer validity:<span class=\"output\">&nbsp;{{Buyer.Validity}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Condition:<span class=\"output\">&nbsp;{{Buyer.Condition}}</span></td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Operational Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Type:\r\n            <span class=\"output\">&nbsp;{{Buyer.Type}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Position:<span class=\"output\">&nbsp; {{Buyer.Position}}</span></td>\r\n\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" (click)=\"matgroup.forms.selectedIndex = 0\" class=\"btn btn-back\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\" >Submit</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatsChatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container chats-main-container\">\r\n   <div class=\"wrapper-chat-container\">\r\n    <h3 class=\"property-detail-h3\">My Chats</h3>\r\n      <div class=\"chat-container\">\r\n          <img src=\"/assets/Images/Henrik_Urdal-removebg-preview.png\">\r\n          <p class=\"chat-p\">Jhon doe<br>\r\n         <span class=\"user-class\">Seller</span></p>\r\n      </div>\r\n\r\n\r\n   </div>\r\n\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Top navigation -->\r\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/register-student\">\r\n    <img\r\n      class=\"brand-logo\"\r\n      src=\"assets/Images/logo.png\"\r\n      alt=\"positronX.io Logo\"\r\n    />\r\n    <span class=\"dasboard-text\">Dashboard</span>\r\n  </a>\r\n</nav>\r\n<!-- Sidebar navigation -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\r\n      <div class=\"sidebar-sticky\">\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\">\r\n              <i class=\"fas fa-user\"></i>User Profile\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.GoogleAuth()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log in\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <!-- Main content -->\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n      <div class=\"inner-adjust\">\r\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\r\n          <h1 class=\"h2\">User Profile</h1>\r\n        </div>\r\n        <!-- Show user data when logged in -->\r\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"media\">\r\n              <img\r\n                class=\"align-self-start mr-5 img-thumbnail rounded-circle\"\r\n                src=\"{{\r\n                  user.photoURL ? user.photoURL : '/assets/dummy-user.png'\r\n                }}\"\r\n                alt=\"{{ user.displayName }}\"\r\n              />\r\n              <div class=\"media-body\">\r\n                <h1>\r\n                  Hello:\r\n                  <strong>{{\r\n                    user.displayName ? user.displayName : \"User\"\r\n                  }}</strong>\r\n                </h1>\r\n                <p>\r\n                  User ID: <strong>{{ user.uid }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email: <strong>{{ user.email }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email Verified: <strong>{{ user.emailVerified }}</strong>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n      <div class=\"authBlock text-center mt-3\">\r\n        <h4 >Reset Password</h4>\r\n  \r\n        <p class=\"text-center p-3\">Please enter your email address to request a password reset.</p>\r\n        <div class=\"input-group p-4\">\r\n         \r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\"   #passwordResetEmail required>\r\n      </div>\r\n      \r\n  \r\n        <!-- Calling ForgotPassword from AuthService Api -->\r\n        <div class=\"formGroup\">\r\n          <button type=\"button\" class=\"btn btn-social-login\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\r\n      \r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"redirectToLogin text-center\">\r\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div class=\"social-login text-center\" >\r\n    <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n    <div class=\"social-button mt-4\">\r\n    <button type=\"button\" class=\"btn btn-facebook \"  (click)=\"authService.FacebookAuth()\">Facebook</button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">Google+</button>\r\n    </div>\r\n    <form action=\"\">\r\n    <div class=\"input-group mb-3 mt-3\">\r\n        <div class=\"input-group-prepend\">\r\n            <!-- <i class=\"fa fa-user input-group-text nav-login-form\" aria-hidden=\"true\"></i> -->\r\n        </div>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\"  #userEmail required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend\">\r\n        <!-- <i class=\"fa fa-lock input-group-text nav-login-form-password\" aria-hidden=\"true\"></i> -->\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  name=\"password\"\r\n             #userPassword required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend other-option\">\r\n        <!-- <label class=\"checkbox\">\r\n            <input type=\"checkbox\" value=\"remember-me\">Remember Me\r\n        </label> -->\r\n        <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value,userPassword.value)\">Login</button>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value,userPassword.value)\">Sign Up</button>\r\n  </form>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVerifyEmailVerifyEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n  \r\n      <div class=\"authBlock\">\r\n        <h4 class=\"text-center mt-3\">Thank You for Registering</h4>\r\n  \r\n        <div class=\"formGroup p-3\" *ngIf=\"authService.userData as user\">\r\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\r\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\r\n        </div>\r\n        \r\n        <!-- Calling SendVerificationMail() method using authService Api -->\r\n        <div class=\"formGroup\">\r\n        \r\n          <p class=\"text-center\" (click)=\"authService.SendVerificationMail()\">Resend Verification Email</p>  \r\n         \r\n        </div>\r\n  \r\n      </div>\r\n  \r\n      <!-- <div class=\"redirectToLogin text-center\">\r\n        <span class=\"text-center\">Go back to?<span class=\"redirect text-center\" routerLink=\"/sign-in\"> Sign in</span></span>\r\n      </div> -->\r\n  \r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfirmationConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Name:\r\n            <span class=\"output\">&nbsp;{{Seller.Firstname}} {{Seller.Lastname}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{Seller.Email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{Seller.DOB}}</span></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Property Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Type:\r\n            <span class=\"output\">&nbsp;{{Seller.PropertyType}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">No of Rooms:<span class=\"output\">&nbsp; {{Seller.norooms}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Expected Amount (Offer):<span\r\n              class=\"output\">&nbsp;{{Seller.ExpectedAmount}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Ownership:<span class=\"output\">&nbsp;{{Seller.ownership}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Condition:<span\r\n              class=\"output\">&nbsp;{{Seller.PropertyCondition}}</span></td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"details-p-headings\"> Applicable Features:<span\r\n              class=\"output\">&nbsp;{{Seller.ApplicableFeatures}}</span></td>\r\n\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Operational Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Type:\r\n            <span class=\"output\">&nbsp;Buying As Investment</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Position:<span class=\"output\">&nbsp; Mortage Free</span></td>\r\n\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" class=\"btn btn-back\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditprofileEditprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container profile-main-container\">\r\n    <div class=\"profile-wrapper-content\">\r\n        <p class=\"profile-heading\">My Profile</p>\r\n        <div class=\"profile-name-image mt-4\">\r\n            <img src=\"/assets/Images/profilepic.jpeg\" class=\"rounded-circle Profile-pic\" alt=\"Cinque Terre\">\r\n            <p class=\"profile-name\">Mr.John Doe</p>\r\n        </div>\r\n    </div>\r\n<div class=\"profile-name-field-option\">\r\n    <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">First Name</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"fname\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Last Name</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"lname\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Phone No</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"number\" class=\"form-control\" id=\"number\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Email Id</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"email\" class=\"form-control\" id=\"date\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Date of Birth</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"date\" class=\"form-control\" id=\"date\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Password</p></div>\r\n        <div ><p class=\"fname-text2\">*******</p></div>\r\n  \r\n      </div>\r\n</div>\r\n\r\n<div class=\"edit-profile-submitbutton\">\r\n<button type=\"button\" class=\"btn btn-back\">BACK</button>\r\n<button type=\"button\" class=\"btn btn-back\">SUBMIT</button>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container p-0\">\r\n    <div class=\"footer\">\r\n<div class=\"image-social\">\r\n<img src=\"/assets/Images/facebook.png\"  class=\"facebook-icon\">\r\n<img src=\"/assets/Images/twitter.png\" class=\"twitter-icon\" >\r\n<img src=\"/assets/Images/instagram.png\" class=\"instagram-icon\">\r\n</div>\r\n    </div>\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsConfirmationDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n\t<p>\r\n\t\t{{message}}\r\n\t</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n\t<button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" tabindex=\"1\">{{confirmButtonText}}</button>\r\n\t<button mat-raised-button mat-dialog-close tabindex=\"-1\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\r\n  <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n  <div class=\"social-button mt-4\">\r\n    <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\r\n      Facebook\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\r\n      Google+\r\n    </button>\r\n  </div>\r\n  <div class=\"input-group mb-3 mt-3\">\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\r\n  </mat-form-field>\r\n\r\n  <div class=\"input-group-prepend other-option\">\r\n    <label class=\"checkbox\">\r\n      <input type=\"checkbox\" value=\"remember-me\" />Remember Me\r\n    </label>\r\n    <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\r\n    Login\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\r\n    Sign Up\r\n  </button>\r\n</div>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\r\n  <mat-tab-group #matgroup class=\"form-tab-conatiner\">\r\n    <mat-tab label=\"Personal Details \" class=\"tabs-align-padding\">\r\n      <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n        <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\r\n        <p class=\"forms-star\">*required</p>\r\n\r\n        <mat-form-field>\r\n          <mat-label>Title*</mat-label>\r\n          <mat-select name=\"title\" [(ngModel)]=\"Buyer.title\" class=\"drop-down-list\">\r\n            <mat-option value=\"Mr\">Mr</mat-option>\r\n            <mat-option value=\"Ms\">Ms</mat-option>\r\n            <mat-option value=\"Mrs\">Mrs</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"First Name\" [formControl]=\"firstnameFormControl\" id=\"name\" required\r\n            [(ngModel)]=\"Buyer.firstname\" name=\"First\" class=\"mat-mail-input\">\r\n          <mat-error *ngIf=\"firstnameFormControl.hasError('First Name') && !firstnameFormControl.hasError('required')\">\r\n            Please enter a valid email address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"firstnameFormControl.hasError('required')\">\r\n            FirstName is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"LastName\" [formControl]=\"lastnameFormControl\" id=\"name\" required\r\n            [(ngModel)]=\"Buyer.Lastname\" name=\"Last\" class=\"mat-mail-input\">\r\n          <mat-error *ngIf=\"lastnameFormControl.hasError('LastName') && !lastnameFormControl.hasError('required')\">\r\n            Please enter a valid email address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"lastnameFormControl.hasError('required')\">\r\n            LastName is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" id=\"name\" [(ngModel)]=\"Buyer.Email\"\r\n            name=\"Email\" class=\"mat-mail-input\">\r\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n            Please enter a valid email address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"MM/DD/YY\" id=\"name\" required\r\n            [(ngModel)]=\"Buyer.DOB\" name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Chain Status*</mat-label>\r\n          <mat-select name=\"ChainStatus\" [(ngModel)]=\"Buyer.ChainStatus\" value=\"ChainStatus\" class=\"example-full-width\">\r\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\r\n            <mat-option value=\"In Chain(Sellinng to buy)\">In Chain(Sellinng to buy)</mat-option>\r\n            <mat-option value=\"Chain-Free\">Chain-Free</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <div class=\"button-next\">\r\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Property Details\" class=\"tabs-align-padding\">\r\n      <div class=\"tabs-align-padding\">\r\n        <p>Search by Postcode</p>\r\n\r\n        <mat-option>\r\n          <input [formControl]=\"autoCompleteControl\" type=\"text\" placeholder=\"Enter Postcode\" aria-label=\"Post Code\"\r\n            matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"Buyer.postcode\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\r\n            (optionSelected)='getPosts($event.option.value)'>\r\n            <mat-option *ngFor=\"let item of addressianAutoComplete$ | async; let index=index\" [value]=\"item\">\r\n              <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n              </span> | <span>{{ item.citytown | titlecase}}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-option>\r\n\r\n        <hr class=\"Line-form\">\r\n\r\n        <p>Search by Address</p>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" name=\"Address\" id=\"name\"\r\n            class=\"mat-mail-input\" [(ngModel)]=\"Buyer.Address\">\r\n          <mat-error *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\r\n            Please enter a valid address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\r\n            Address is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Buyer.Town\"\r\n            name=\"Towncity\" id=\"name\" class=\"mat-mail-input\">\r\n          <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\r\n            Please enter a valid Town/City\r\n          </mat-error>\r\n          <mat-error *ngIf=\"TownFormControl.hasError('required')\">\r\n            Town/City is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"County\" [formControl]=\"stateFormControl\" required [(ngModel)]=\"Buyer.state\"\r\n            name=\"state\" id=\"name\" class=\"mat-mail-input\" (keyup)=\"changeMyControl()\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Financial Position*</mat-label>\r\n          <mat-select name=\"FinancialPosition\" [(ngModel)]=\"Buyer.FinancialPosition\" value=\"FinancialPosition\"\r\n            class=\"example-full-width\">\r\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\r\n            <mat-option value=\"Mortgage to be Arranged\">Mortgage to be Arranged</mat-option>\r\n            <mat-option value=\"Mortgage Arrange\">Mortgage Arrange</mat-option>\r\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n     \r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"pwd\">Search Radius (Miles)</label>\r\n          <mat-slider [(ngModel)]=\"Buyer.SearchRadius\" name=\"SearchRadius\" style=\"width: 100%\" min=\"5\" max=\"50\"\r\n            step=\"0.5\" thumbLabel tickInterval=\"1\">\r\n            <label for=\"pwd\">Search Radius</label>\r\n          </mat-slider>\r\n        </div>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Property type*</mat-label>\r\n          <mat-select name=\"Propertytype\" [(ngModel)]=\"Buyer.Propertytype\" value=\"Propertytype\"\r\n            class=\"example-full-width\">\r\n            <mat-option value=\"Flat\">Flat</mat-option>\r\n            <mat-option value=\"Cottage\">Cottage</mat-option>\r\n            <mat-option value=\"Studio\">Studio</mat-option>\r\n            <mat-option value=\"Lodge\">Lodge</mat-option>\r\n            <mat-option value=\"Farm\">Farm</mat-option>\r\n            <mat-option value=\"Town House\">Town House</mat-option>\r\n            <mat-option value=\"Maisonette\">Maisonette</mat-option>\r\n            <mat-option value=\"Bungalow\">Bungalow</mat-option>\r\n            <mat-option value=\"Farmhouse\">Farmhouse</mat-option>\r\n            <mat-option value=\"Mews House\">Mews House</mat-option>\r\n            <mat-option value=\"Houseboat\">Houseboat</mat-option>\r\n            <mat-option value=\"Country house\">Country house</mat-option>\r\n            <mat-option value=\"Detached house\">Detached house</mat-option>\r\n            <mat-option value=\"Barn conversion\">Barn conversion</mat-option>\r\n            <mat-option value=\"Terraced House\">Terraced House</mat-option>\r\n            <mat-option value=\"Terraced Bungalow\">Terraced Bungalow</mat-option>\r\n            <mat-option value=\"Equestrian Property\">Equestrian Property</mat-option>\r\n            <mat-option value=\"End Terrace House\">End Terrace House</mat-option>\r\n            <mat-option value=\"Detached bungalow\">Detached bungalow</mat-option>\r\n\r\n            <mat-option value=\"Link-Detached House\">Link-Detached House</mat-option>\r\n            <mat-option value=\"Barn conversion/farmhouse\">Barn conversion/farmhouse</mat-option>\r\n            <mat-option value=\"Semi-Detached Bungalow\">Semi-Detached Bungalow</mat-option>\r\n            <mat-option value=\"Mobile/Park Home\">Mobile/Park Home</mat-option>\r\n            <mat-option value=\"Semi-Detached House\">Semi-Detached House</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div class=\" mt-4\">\r\n          <label for=\"pwd\">Price Range (Offer) *</label>\r\n          <mat-slider style=\"width: 100%\" name=\"PriceRange\" [(ngModel)]=\"Buyer.PriceRange\" min=\"20\" max=\"120\" step=\"0.5\"\r\n            value=\"1.5\" thumbLabel tickInterval=\"1\">\r\n          </mat-slider>\r\n        </div>\r\n\r\n        <mat-radio-group aria-label=\"Select an option\" name=\"Validity\" [(ngModel)]=\"Buyer.Validity\" value=\"Validity\">\r\n          <label>Offer Validity:</label>\r\n          <mat-radio-button class=\"col-12\" value=\"0-2Months\">0-2Months</mat-radio-button>\r\n          <mat-radio-button value=\"2-6Months\" class=\"col-12\">2-6Months</mat-radio-button>\r\n\r\n          <input matInput placeholder=\"Explain Validity\"  name=\"Explain\" id=\"name\" class=\"mat-mail-input mt-2 mb-3\">\r\n\r\n        </mat-radio-group>\r\n\r\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Buyer.Condition\" name=\"Condition\">\r\n          <label>Property Condition:</label>\r\n         \r\n          <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\r\n          <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\r\n          <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n        <div class=\"button-next-tab2\">\r\n          <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n          <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Optional Details\">\r\n      <div class=\"tabs-align-padding\">\r\n        <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\r\n\r\n        <mat-form-field class=\"example-full-width mt-4\">\r\n          <mat-label>Type*</mat-label>\r\n          <mat-select name=\"Type\" name=\"Type\" [(ngModel)]=\"Buyer.Type\" class=\"example-full-width\">\r\n            <mat-option value=\"Buying to Live\">Buying to Live</mat-option>\r\n            <mat-option value=\"Buying as Investment\">Buying as Investment</mat-option>\r\n            <mat-option value=\"Buying to Let\">Buying to Let</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Position*</mat-label>\r\n          <mat-select name=\"Position\" [(ngModel)]=\"Buyer.Position\" value=\"Position\" class=\"example-full-width\">\r\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\r\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\r\n            <mat-option value=\"Selling To Move\">Selling To Move</mat-option>\r\n            <mat-option value=\"Mortgage To be Arranged\">Mortgage To be Arranged</mat-option>\r\n            <mat-option value=\"Mortgage Arranged\">Mortgage Arranged</mat-option>\r\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div class=\"button-next-tab2\">\r\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n          <button class=\"btn btn-primary btnNext btn-next\" type=\"submit\">\r\n            Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-0\">\r\n  <div class=\"back\">\r\n    <div class=\"upper-back\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"upper-button\">\r\n  <button mat-raised-button class=\"home-button\" routerLink=\"/ownaproperty/buy\">Buy/Rent</button>\r\n  <button mat-raised-button class=\"home-button\" routerLink=\"/ownaproperty/sell\">Sell/Let</button>\r\n\r\n</div>\r\n\r\n<mat-card>\r\n  <mat-card-title>What is Streetsnap ?</mat-card-title>\r\n  <mat-card-content>\r\n    <p class=\"text-center pt-2 pr-3 pl-3 home-text-font\">\r\n      Streetsnap is a platform that helps landlords get offers without listing\r\n      their property on the market.\r\n    </p>\r\n    <p class=\"text-center  pr-3 pl-3 home-text-font\">\r\n      Buyers get the chance to find properties they wouldn't otherwise find on\r\n      property portals\r\n    </p>\r\n  </mat-card-content>\r\n\r\n  <mat-card-title>How does it work ?</mat-card-title>\r\n  <mat-card-content>\r\n    <p class=\"text-center pt-2 pr-4 pl-4 home-text-font\">\r\n      Buyers fill requirements, providing details such as location, size,\r\n      amenities etc and their offer price.\r\n    </p>\r\n    <p class=\"text-center pr-4 pl-4 home-text-font\">\r\n      Registered property owners get matched offers, after which they decide if\r\n      they want to reveal property details and pursue the match further\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMatchesMatchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\r\n\r\n  <div class=\"thanku-section\">\r\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\r\n      and we will share your property details with all the\r\n      interested buyers in you area</p>\r\n\r\n  </div>\r\n  <section id=\"matchproperties\">\r\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Properties</h3>\r\n    <div class=\"match-section\" routerLink='/selectedpropertydetail' *ngFor=\"let property of matchedProperties\">\r\n      <img src=\"assets/Images/download.png\" class=\"match-images float-left\">\r\n      <div class=\"match-content\">\r\n        <p><span class=\"area-p\">{{ property.Addressname}}</span><br>\r\n          <span class=\"discription-p\"> No. of Rooms:{{property.norooms}}</span><br>\r\n          <span class=\"discription-p property-type-color\">Type of Property:\r\n            {{property.PropertyType}}</span><br>\r\n          <span class=\"discription-p\">Post Code: {{property.postcode.postcode}}</span></p>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n  <section id=\"propertyinlondon\">\r\n    <h3 class=\"mt-3 mb-3 font-headings\">Other Properties in London</h3>\r\n    <div class=\"match-section\" *ngFor=\"let property of unmatchedProperties\">\r\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\r\n      <div class=\"match-content\">\r\n        <p><span class=\"area-p\">{{ property.detail.Address }}</span><br>\r\n          <span class=\"discription-p\"> No. of Rooms:{{property.detail.norooms}}</span><br>\r\n          <span class=\"discription-p property-type-color\">Type of Property:\r\n            {{property.detail.PropertyType}}</span><br>\r\n          <span class=\"discription-p\">Post Code: {{property.detail.postcode.postcode}}</span><br>\r\n          <span *ngIf=\"property.distance\" class=\"discription-p\">Distance: {{property.distance | number:'1.1-1'}}\r\n            (kms)</span></p>\r\n      </div>\r\n    </div>\r\n  </section> \r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMypropertiesMypropertiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n  <p class=\"mt-3 main-heading text-center\">My Properties</p>\r\n\r\n  <section class=\"mt-4\" id=\"matchproperties\">\r\n    <mat-card style=\"margin-top: 10px;\" *ngFor=\"let property of propertyDetails\" class=\"match-section\"\r\n      routerLink='/selectedpropertydetail'>\r\n      <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\r\n      <mat-card-content class=\"match-content\">\r\n        <p> <span class=\"area-p\">{{property.Address}}</span><br>\r\n          <span class=\"discription-p\">Expected Amount: {{property.ExpectedAmount}}</span><br>\r\n          <span class=\"discription-p property-type-color\">Type of Property: {{property.PropertyType}}\r\n            Home</span><br>\r\n          <span class=\"discription-p\">Post Code: {{property.postcode}}</span></p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </section>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyrequirementMyrequirementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-requirement-container container\">\r\n  <p class=\"my-requirement-heading\">\r\n    My Requirements\r\n  </p>\r\n\r\n\r\n  <mat-card *ngFor=\"let requirement of propertyDetails\" class=\"my-requirement-one mt-3\"\r\n    routerLink='/requirementdetails'>\r\n\r\n    <p> <span class=\"area-p\">{{requirement.Address}}</span><br>\r\n      <span class=\"discription-p\"> Radius: {{requirement.SearchRadius}}</span>&nbsp;|&nbsp;<span\r\n        class=\"discription-p\">{{requirement.postcode}}</span><br>\r\n\r\n      <span class=\"discription-p property-type-color\">Street Name:\r\n        {{requirement.addressname}}</span>&nbsp;|&nbsp;<span class=\"discription-p\">Price Range:\r\n        {{requirement.PriceRange}}k</span><br>\r\n    </p>\r\n  </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mobile-wrapper\">\r\n  <div class=\"mobile-container\">\r\n    <div class=\"content\">\r\n      <nav>\r\n        <img src=\"/assets/Images/menu.png\" class=\"open\" />\r\n        <img src=\"/assets/Images/menu-close.png\" class=\"close-img\" />\r\n        <!-- <p class=\"menu-text\">Menu</p> -->\r\n        <div class=\"imge-logo-header\">\r\n          <img src=\"assets/Images/logo1.png\" class=\"logo-nav\" routerLink=\"\" />\r\n\r\n          <i class=\"fa fa-user\" aria-hidden=\"true\" (click)=\"authService.SignOut()\" *ngIf=\"isLoggedIn\"\r\n            routerLink=\"\"><span class=\"log-out-text\">Logout</span></i>\r\n        </div>\r\n\r\n        <div class=\"nav-div\">\r\n          <div class=\"search-grid-conatiner\" *ngIf=\"isLoggedIn\">\r\n            <div></div>\r\n            <div>\r\n              <input type=\"text\" placeholder=\"Search..\" /><img src=\"assets/Images/asset1.png\"\r\n                class=\"nav-link-icon-search\" />\r\n            </div>\r\n            <div></div>\r\n          </div>\r\n          <ul class=\"nav-links\" *ngIf=\"isLoggedIn; show\">\r\n            <div class=\"grid-container\" routerLink=\"/profile\">\r\n              <div><img src=\"assets/Images/my-profile-icon-png-1.png\" /></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/profile\" class=\"nav-links-text\">My Profile</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/myproperties\">\r\n              <div>\r\n                <img src=\"assets/Images/download-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/myproperties\" class=\"nav-links-text\">My Properties</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/myrequirement\">\r\n              <div>\r\n                <img src=\"assets/Images/135-512-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/myrequirement\" class=\"nav-links-text\">My Requirements</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/prefrences\">\r\n              <div>\r\n                <img src=\"assets/Images/user_2-09-512-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/prefrences\" class=\"nav-links-text\">Prefrences</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/chats\">\r\n              <div><img src=\"assets/Images/31-512-removebg-preview.png\" /></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/chats\" class=\"nav-links-text\">My chat</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n          </ul>\r\n          <div *ngIf=\"!isLoggedIn\">\r\n            <div class=\"social-login text-center\">\r\n              <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n              <div class=\"social-button mt-4\">\r\n                <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\r\n                  Facebook\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\r\n                  Google+\r\n                </button>\r\n              </div>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\r\n              </mat-form-field>\r\n\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\r\n              </mat-form-field>\r\n\r\n              <div class=\"input-group-prepend other-option\">\r\n                <!-- <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" value=\"remember-me\">Remember Me\r\n                </label> -->\r\n                <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-social-login\" (click)=\"\r\n                    authService.SignIn(userEmail.value, userPassword.value)\r\n                  \">\r\n                Login\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-social-login\" (click)=\"\r\n                    authService.SignUp(userEmail.value, userPassword.value)\r\n                  \">\r\n                Sign Up\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOwnapropertyOwnapropertyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group [(selectedIndex)]=\"activeTab\">\r\n  <mat-tab label=\"LOOKING FOR PROPERTY\">\r\n    <mat-card>\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text\">Reach out to our\r\n          database of registered sellers who are not on the market, but\r\n          would sell if the right offer came along</p>\r\n      </div>\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Qualified\r\n            landlords are sent your offers and\r\n            then decide\r\n            if they want to let </li>\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Different\r\n            offers from the rest of sites</li>\r\n\r\n        </ul>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"own-property-image\">\r\n        <p class=\"own-property-image-text pr-3 pl-3 pb-2\">Register a 'feeler'\r\n          for a property\r\n          in your desired area</p>\r\n      </div>\r\n      <div class=\"button-own-a-property\">\r\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-2\" routerLink=\"/forms\">MAKE AN\r\n          offer</button>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <img mat-card-image src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\r\n      <p class=\"own-property-text-home-worth pt-2\">How much is your\r\n        home worth?</p>\r\n      <p class=\"own-property-text-home-worth-ans\">Get a free,\r\n        no-obligation valuation of your home from\r\n        one of our specially-selected local experts.</p>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2\">\r\n          Blog\r\n        </p>\r\n        <div class=\"own-property-blogs-content\">\r\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n            Price\r\n            Index</p>\r\n          <p class=\"own-property-blogs-content-c2\">Annual house price\r\n            growth in the UK’s most buoyant city has fallen below 5% for\r\n            the first time since 2012.</p>\r\n        </div>\r\n\r\n        <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n          <img src=\"assets/Images/asset-2.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1-2\">Housebuilding\r\n            levels fall to\r\n            three</p>\r\n          <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n            properties were\r\n            started in the year to the end of June, significantly below\r\n            the Government’s target of 300,000.</p>\r\n\r\n\r\n        </div>\r\n        <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n          <img src=\"assets/Images/asset-3.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1-2\">Many first-time\r\n            buyers </p>\r\n          <p class=\"own-property-blogs-content-c2-2\">More than half of\r\n            people taking their\r\n            first step on the property ladder think\r\n            they can borrow up to 10 times their income.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-blogs-content-2\">\r\n        <img mat-card-image src=\"assets/Images/buying.png\">\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n  </mat-tab>\r\n\r\n\r\n\r\n  <mat-tab label=\"OWN A PROPERTY\">\r\n    <mat-card>\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text\">Would you sell your property if the\r\n          right offer came along?</p>\r\n      </div>\r\n\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Register it with us\r\n            and receive potential offers\r\n            from buyers looking for property in your area! </li>\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Free service for\r\n            sellers</li>\r\n\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> You get offers\r\n            from buyers who are interested in\r\n            your locality. For your type of property</li>\r\n\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> Only reveal your\r\n            details to buyers you authorise</li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"Looking-property-image\">\r\n        <p class=\"looking-property-image-text pr-3 pl-3\">Register your property with\r\n          Streethook</p>\r\n      </div>\r\n      <div class=\"button-own-a-property\">\r\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-4\" routerLink=\"/sellerform\">LIST PROPERTY\r\n          NOW</button>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-home-worth mt-4 pb-2 mb-2\">\r\n        <img src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\r\n        <p class=\"own-property-text-home-worth pt-2\">How much is your\r\n          home worth?</p>\r\n        <p class=\"own-property-text-home-worth-ans\">Get a free,\r\n          no-obligation valuation of your home from\r\n          one of our specially-selected local experts.</p>\r\n\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2\">\r\n          Blog\r\n        </p>\r\n        <div class=\"own-property-blogs-content\">\r\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n            Price\r\n            Index</p>\r\n          <p class=\"own-property-blogs-content-c2\">Annual house price\r\n            growth in the UK’s most buoyant city has fallen below 5% for\r\n            the first time since 2012.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"own-property-blogs-content-2 pt-3\">\r\n        <img src=\"assets/Images/asset-2.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n        <p class=\"own-property-blogs-content-c1-2\">Housebuilding\r\n          levels fall to\r\n          three</p>\r\n        <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n          properties were\r\n          started in the year to the end of June, significantly below\r\n          the Government’s target of 300,000.</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n        <img src=\"assets/Images/asset-3.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n        <p class=\"own-property-blogs-content-c1-2\">Many first-time\r\n          buyers </p>\r\n        <p class=\"own-property-blogs-content-c2-2\">More than half of\r\n          people taking their\r\n          first step on the property ladder think\r\n          they can borrow up to 10 times their income.</p>\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n    <mat-card>\r\n      <!-- <hr class=\"horizontal-line pt-3\"> -->\r\n      <div class=\"own-property-blogs-content-2\">\r\n\r\n        <img src=\"assets/Images/buying.png\" class=\"own-property-last-image\">\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrefrencesPrefrencesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"prefrences-main-div container\">\r\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\r\n    <div class=\"prefrence-notification\">\r\n                <h5 class=\"text-center notification-heading\">Notification Prefrences</h5>\r\n                <div class=\"prefrence-radio\">\r\n          <form>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email for every match\r\n                </p></label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email me once a week with all the matches \r\n                  that I have\r\n                </p> </label>\r\n              </div>\r\n          </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n  <div *ngIf=\"user\">\r\n    <div class=\"profile-wrapper-content\">\r\n      <p class=\"profile-heading\">My Profile</p>\r\n      <div class=\"profile-name-image mt-4\">\r\n        <img src=\"{{user.photoURL}}\" class=\"rounded-circle Profile-pic\" />\r\n        <p class=\"profile-name\">{{ user.displayName }}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"profile-name-field-option\">\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Name</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\" *ngIf=\"user\">{{ user.displayName }}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Phone No</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\"></p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Email Id</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\">\r\n\r\n            {{ user.email }} </p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Date of Birth</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2 \" *ngIf=\"Buyer\">{{ Buyer.DOB }}</p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Password</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\">*******</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPropertydetailsPropertydetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container property-detail-container\">\r\n    <h3 class=\"property-detail-h3\">Property Details</h3>\r\n    <div class=\"wrapper-detail-container\">\r\n      \r\n\r\n\r\n            <div class=\"streetname\">\r\n                    <table class=\"table\">\r\n   \r\n                            <tbody>\r\n                              <tr>\r\n                                <td class=\"details-p-headings\">Street Name</td>\r\n                                <td class=\"details-output-p\">Green Park</td>\r\n                               \r\n                              </tr>\r\n                              <tr>\r\n                                    <td class=\"details-p-headings\">Post Code</td>\r\n                                    <td class=\"details-output-p\">NW7W25</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Property type</td>\r\n                                    <td class=\"details-output-p\">Terrace House</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">No of rooms</td>\r\n                                    <td class=\"details-output-p\">5</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Condition</td>\r\n                                    <td class=\"details-output-p\">New Build</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Ownership</td>\r\n                                    <td class=\"details-output-p\">Freehold</td>\r\n                                   \r\n                                  </tr>\r\n                            </tbody>\r\n                          </table>\r\n        \r\n                </div>\r\n\r\n\r\n           \r\n\r\n\r\n\r\n    </div>\r\n<div class=\"button-details\">\r\n    <button type=\"button\" class=\"btn button-ask\">Ask For Property Details</button>\r\n    <button type=\"button\" class=\"btn btn-chat\">Initiate chat</button>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequirementdetailsRequirementdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container property-detail-container\">\r\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\r\n    <div class=\"wrapper-detail-container\">\r\n     \r\n        <h3 class=\"property-detail-h3\">Property Details</h3>\r\n\r\n            <div class=\"streetname\">\r\n                    <table class=\"table\">\r\n   \r\n                            <tbody>\r\n                              <tr>\r\n                                <td class=\"details-p-headings\">Pincode</td>\r\n                                <td class=\"details-output-p\">NW7W25</td>\r\n                               \r\n                              </tr>\r\n                              <tr>\r\n                                    <td class=\"details-p-headings\">Country</td>\r\n                                    <td class=\"details-output-p\">Susex</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Address Name</td>\r\n                                    <td class=\"details-output-p\">Bachlester</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Offer Validity</td>\r\n                                    <td class=\"details-output-p\">0-2months</td>\r\n                                   \r\n                                  </tr>\r\n                          \r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Property Condition</td>\r\n                                    <td class=\"details-output-p\">New Build</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Price Range(offer)</td>\r\n                                    <td class=\"details-output-p\">20-100k</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Streetname</td>\r\n                                    <td class=\"details-output-p\">Bawsar</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Radius</td>\r\n                                    <td class=\"details-output-p\">5miles</td>\r\n                                   \r\n                                  </tr>\r\n                               \r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Town Name</td>\r\n                                    <td class=\"details-output-p\">Bintulu</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Property Type</td>\r\n                                    <td class=\"details-output-p\">Detached House</td>\r\n                                   \r\n                                  </tr>\r\n                               \r\n                             \r\n                                 \r\n                            </tbody>\r\n                          </table>\r\n        \r\n                </div>\r\n\r\n\r\n           \r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectedpropertydetailSelectedpropertydetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3\">Park Avenue</h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n      <!-- Indicators -->\r\n      <ul class=\"carousel-indicators\">\r\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n      </ul>\r\n\r\n      <!-- The slideshow -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"/assets/Images/452fh75sy--1734472_diner-view-1.png\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"/assets/Images/432-park-avenue-15.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"/assets/Images/Project-Photo-1-Godrej-Park-Avenue-Greater-Noida-5117125_345_1366_300_450.jpg\"\r\n            alt=\"New York\" width=\"1100\" height=\"500\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Left and right controls -->\r\n\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"streetname\">\r\n                    <table class=\"table\">\r\n   \r\n                            <tbody>\r\n                              <tr>\r\n                                <td class=\"details-p-headings\">Pincode</td>\r\n                                <td class=\"details-output-p\">{{property.postcode}}</td>\r\n                               \r\n                              </tr>\r\n                              <tr>\r\n                                    <td class=\"details-p-headings\">Country</td>\r\n                                    <td class=\"details-output-p\">{{property.country}}</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Address</td>\r\n                                    <td class=\"details-output-p\">{{property.Address}}</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">No of Rooms</td>\r\n                                    <td class=\"details-output-p\">{{property.norooms}}</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Property Condition</td>\r\n                                    <td class=\"details-output-p\">{{property.condition}}</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Price Range(offer)</td>\r\n                                    <td class=\"details-output-p\">20-100k</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Streetname</td>\r\n                                    <td class=\"details-output-p\">Bawsar</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Ownership</td>\r\n                                    <td class=\"details-output-p\">Freehold</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Town Name</td>\r\n                                    <td class=\"details-output-p\">Bintulu</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Property Type</td>\r\n                                    <td class=\"details-output-p\">Detached House</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Applicable Feature</td>\r\n                                    <td class=\"details-output-p\">Period Feature</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Offer Validity</td>\r\n                                    <td class=\"details-output-p\">0-2months</td>\r\n                                   \r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"details-p-headings\">Radius</td>\r\n                                    <td class=\"details-output-p\">5miles</td>\r\n                                   \r\n                                  </tr>\r\n                            </tbody>\r\n                          </table>\r\n        \r\n                </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSellerformSellerformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container forms-container\">\r\n  <div class=\"row\">\r\n    <section class=\"col\">\r\n      <div class=\"social-login text-center  p-2\" *ngIf=\"!isLoggedIn\">\r\n        <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n        <div class=\"social-button mt-4\">\r\n          <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\r\n            Facebook\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\r\n            Google+\r\n          </button>\r\n        </div>\r\n        <div class=\"input-group mb-3 mt-3\">\r\n       \r\n          <mat-form-field class=\"example-full-width\">\r\n            <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\r\n          </mat-form-field>\r\n          \r\n        </div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\r\n        </mat-form-field>\r\n\r\n        <div class=\"input-group-prepend other-option\">\r\n          <label class=\"checkbox\">\r\n            <input type=\"checkbox\" value=\"remember-me\" />Remember Me\r\n          </label>\r\n          <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-social-login\"\r\n          (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\r\n          Login\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-social-login\"\r\n          (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\r\n          Sign Up\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\r\n        <mat-tab-group #matgroup class=\"form-tab-conatiner\" mat-align-tabs=\"center\">\r\n          <mat-tab label=\"Personal Details\">\r\n            <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n              <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\r\n              <p class=\"forms-star\">*required</p>\r\n\r\n\r\n              <mat-form-field>\r\n                <mat-label>Title*</mat-label>\r\n                <mat-select name=\"title\" [(ngModel)]=\"Seller.Title\" Value=\"Title\" class=\"drop-down-list\">\r\n                  <mat-option value=\"Mr\">Mr</mat-option>\r\n                  <mat-option value=\"Ms\">Ms</mat-option>\r\n                  <mat-option value=\"Mrs\">Mrs</mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n\r\n\r\n              <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"First Name\" [formControl]=\"FirstnameFormControl\"\r\n                    [(ngModel)]=\"Seller.Firstname\" name=\"First\" class=\"mat-mail-input\">\r\n                  <mat-error\r\n                    *ngIf=\"FirstnameFormControl.hasError('First Name') && !FirstnameFormControl.hasError('required')\">\r\n                    Please enter a valid name\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"FirstnameFormControl.hasError('required')\">\r\n                    FirstName is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </form>\r\n\r\n\r\n              <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"LastName\" [formControl]=\"LastnameFormControl\" id=\"name\"\r\n                    [(ngModel)]=\"Seller.Lastname\" name=\"Last\" class=\"mat-mail-input\">\r\n                  <mat-error\r\n                    *ngIf=\"LastnameFormControl.hasError('LastName') && !LastnameFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"LastnameFormControl.hasError('required')\">\r\n                    LastName is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </form>\r\n\r\n\r\n              <form class=\"example-form\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Email Address*\" [formControl]=\"EmailFormControl\" id=\"name\"\r\n                    [(ngModel)]=\"Seller.Email\" name=\"Email\" class=\"mat-mail-input\">\r\n                  <mat-error\r\n                    *ngIf=\"EmailFormControl.hasError('Email Address*') && !EmailFormControl.hasError('required')\">\r\n                    Please enter a valid email address\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"EmailFormControl.hasError('required')\">\r\n                    Email is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </form>\r\n\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"DD/MM/YY*\" [formControl]=\"DOBFormControl\" id=\"name\" [(ngModel)]=\"Seller.DOB\"\r\n                  name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n                <mat-error\r\n                    *ngIf=\"DOBFormControl.hasError('DOB') && !DOBFormControl.hasError('required')\">\r\n                    Please enter a valid Date of Birth\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"DOBFormControl.hasError('required')\">\r\n                    DOB is <strong>required</strong>\r\n                  </mat-error>\r\n              </mat-form-field>\r\n\r\n           \r\n              <ul class=\"submit-button\">\r\n                <div class=\"button-next\">\r\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n                </div>\r\n              </ul>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Property Details\">\r\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step2\">\r\n              <div class=\"seller-form-upper\">\r\n                <p>\r\n                  Property Enquiry<br />\r\n                  <span>Please fill the form below to list your property</span>\r\n                </p>\r\n                <hr class=\"top-hr\" />\r\n              </div>\r\n              <p class=\"mt-4\">Search by Postcode</p>\r\n         \r\n         \r\n              <mat-option>\r\n                <input [formControl]=\"autoCompleteControl\" type=\"text\" placeholder=\"Enter Postcode\" aria-label=\"Post Code\"\r\n                  matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"Seller.postcode\">\r\n                <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\r\n                  (optionSelected)='getPosts($event.option.value)'>\r\n                  <mat-option *ngFor=\"let item of addressianAutoComplete$ | async; let index=index\" [value]=\"item\">\r\n                    <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                    </span> | <span>{{ item.citytown | titlecase}}</span>\r\n                  </mat-option>\r\n                </mat-autocomplete>\r\n              </mat-option>\r\n\r\n        \r\n\r\n        <hr class=\"Line-form\">\r\n              <div class=\" container  forms-container\">\r\n                <p>Search by Address</p>\r\n\r\n\r\n\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\"\r\n                      [(ngModel)]=\"Seller.Address\" name=\"Address\" id=\"name\" class=\"mat-mail-input\">\r\n                    <mat-error\r\n                      *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\r\n                      Please enter a valid address\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\r\n                      Address is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n\r\n\r\n\r\n\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Seller.Town\"\r\n                      name=\"Town\" id=\"name\" class=\"mat-mail-input\">\r\n                    <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\r\n                      Please enter a valid Town/City\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"TownFormControl.hasError('required')\">\r\n                      Town/City is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n\r\n\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"State/Provience/Country\" [formControl]=\"stateFormControl\"\r\n                      [(ngModel)]=\"Seller.state\" name=\"state\" id=\"name\" class=\"mat-mail-input\">\r\n                    <mat-error\r\n                      *ngIf=\"stateFormControl.hasError('State/Provience/Country') && !stateFormControl.hasError('required')\">\r\n                      Please enter a valid State/Provience/Country\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"stateFormControl.hasError('required')\">\r\n                      State/Provience/Country is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n\r\n                <label for=\"text\" class=\" \">Property Type*:</label>\r\n                <section class=\"example-section\" [(ngModel)]=\"Seller.PropertyType\" \r\n                  value=\"PropertyType\">\r\n\r\n                  <mat-radio-button class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"Detached House\">Detached House</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"Masionette\">Masionette</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"Semi Detached House\">Semi Detached House</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"End Of Terrace House\">End Of Terrace House</mat-radio-button>\r\n                  <mat-radio-button class=\"example-margin\" value=\"Purpose-Built Flat\">Purpose-Built Flat</mat-radio-button>\r\n                </section>\r\n\r\n            \r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Number of Rooms\" [formControl]=\"noroomsFormControl\"\r\n                      [(ngModel)]=\"Seller.norooms\" name=\"norooms\" id=\"name\" class=\"mat-mail-input\" type=\"number\">\r\n                    <mat-error\r\n                      *ngIf=\"noroomsFormControl.hasError('Number of Rooms') && !noroomsFormControl.hasError('required')\">\r\n                      Please enter a valid Number of Rooms\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"noroomsFormControl.hasError('required')\">\r\n                      Number of Rooms is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n                <div class=\"\">\r\n                  <label for=\"pwd\">Expected Amount (Offer) *</label>\r\n                  <mat-slider style=\"width: 100%\" name=\"ExpectedAmount\" [(ngModel)]=\"Seller.ExpectedAmount\" min=\"100000\"\r\n                    max=\"100000000\" step=\"1000\" value=\"50000\" thumbLabel tickInterval=\"1\">\r\n                  </mat-slider>\r\n                </div>\r\n                <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Seller.PropertyCondition\"\r\n                  name=\"PropertyCondition\">\r\n                  <label>Property Condition:</label>\r\n                 \r\n                  <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\r\n\r\n                  <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\r\n\r\n                  <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Seller.ownership\" value=\"ownership\"\r\n                class=\"example-full-width\">\r\n                <mat-label>Ownership:</mat-label>\r\n               \r\n                <mat-radio-button value=\"Freehold\" class=\"col-12\">Freehold</mat-radio-button>\r\n\r\n                <mat-radio-button value=\"Leasehold\" class=\"col-12\">Leasehold</mat-radio-button>\r\n\r\n                <mat-radio-button value=\"Share of Freehold\" class=\"col-12\">Share of Freehold</mat-radio-button>\r\n              </mat-radio-group>\r\n\r\n          \r\n\r\n                <label for=\"text\" class=\" \">Select the Applicable Features:</label>\r\n                <section class=\"example-section\" [(ngModel)]=\"Seller.ApplicableFeatures\" \r\n                  value=\"ApplicableFeatures\">\r\n\r\n                  <mat-checkbox class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"Driveway\">Driveway</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"Period features\">Period features</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"Garage\">Garage</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"Wheelchair friendly\">Wheelchair friendly</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"Gated community\">Gated community</mat-checkbox>\r\n                  <mat-checkbox class=\"example-margin\" value=\"External Rear Garden\">External Rear Garden</mat-checkbox>\r\n                </section>\r\n\r\n\r\n\r\n\r\n          \r\n\r\n                <div class=\"button-next-tab2\">\r\n                  <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n                  <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n             \r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Optional Details\">\r\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step3\">\r\n              <div class=\"seller-form-upper\">\r\n                <p>\r\n                  List Your Property<br />\r\n                  <span>Please fill the form below to list your property</span>\r\n                </p>\r\n                <hr class=\"top-hr\" />\r\n              </div>\r\n              <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\r\n\r\n              <div class=\"forms-container\">\r\n                <p class=\"mt-4 forms-heading-optional\">\r\n                  Upload Property Images*\r\n                </p>\r\n\r\n                <div class=\"col-4 frmCaption\">Image 1*</div>\r\n                <div class=\"col-12\">\r\n                  <label class=\"customUpload btnUpload btnM\">\r\n                    <span>Choose files</span>\r\n                    <input type=\"file\" class=\"upload\" />\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-4 frmCaption\">Image 2*</div>\r\n                <div class=\"col-12\">\r\n                  <label class=\"customUpload btnUpload btnM\">\r\n                    <span>Choose files</span>\r\n\r\n                    <input type=\"file\" class=\"upload\" />\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-4 frmCaption\">Image 3*</div>\r\n                <div class=\"col-12\">\r\n                  <label class=\"customUpload btnUpload btnM\">\r\n                    <span>Choose files</span>\r\n\r\n                    <input type=\"file\" class=\"upload\" />\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-4 frmCaption\">Image 4*</div>\r\n                <div class=\"col-12\">\r\n                  <label class=\"customUpload btnUpload btnM\">\r\n                    <span>Choose files</span>\r\n\r\n                    <input type=\"file\" class=\"upload\" />\r\n                  </label>\r\n                </div>\r\n                <div class=\"button-next-tab2\">\r\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n                  <button class=\"btn btn-primary btnNext btn-next\" (click)=\"onSubmit\">\r\n                    Submit\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </form>\r\n    </section>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSellermatchesSellermatchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\r\n\r\n  <div class=\"thanku-section\">\r\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\r\n      and we will share your property details with all the\r\n      interested buyers in you area</p>\r\n\r\n  </div>\r\n  <section class=\"\" id=\"matchproperties\">\r\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Buyers</h3>\r\n    <div class=\"match-section\"  routerLink='/selectedpropertydetail' *ngFor=\"let property of matchedProperties\">\r\n      <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\r\n      <div class=\"match-content\">\r\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">{{property.addressname}}</span><br>\r\n          <span class=\"discription-p\"> Serach Radius:{{property.SearchRadius}}</span><br>\r\n          <span class=\"discription-p property-type-color\">Type of Property:\r\n            {{property.Propertytype}}</span><br>\r\n          <span class=\"discription-p\">Post Code: {{property.postcode.postcode}}</span>\r\n\r\n          \r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n  <section id=\"youmaylike\">\r\n    <h3 class=\"mt-3 mb-3 font-headings\">Buyers with similar requirement</h3>\r\n    <!--First-section-->\r\n    <div class=\"match-section\"  *ngFor=\"let property of unmatchedProperties\">\r\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\r\n      <div class=\"match-content\">\r\n        <p routerLink='/buyerdetails'><span class=\"area-p\">{{property.detail.addressname}}</span><br>\r\n          <span class=\"discription-p\"> No. of Rooms:{{property.detail.SearchRadius}}</span><br>\r\n          <span class=\"discription-p property-type-color\">Type of Property:\r\n            {{property.detail.Propertytype}}</span><br>\r\n          <span class=\"discription-p\">Post Code:{{property.detail.postcode.postcode}}</span><br>\r\n          <span class=\"discription-p\"> Distance: {{property.distance | number:'1.1-1'}} (kms)</span></p>\r\n\r\n         \r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/alert-dialog/alert-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: AlertDialogComponent */

  /***/
  function srcAppAlertDialogAlertDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function () {
      return AlertDialogComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AlertDialogComponent =
    /*#__PURE__*/
    function () {
      function AlertDialogComponent(data, dialogRef) {
        _classCallCheck(this, AlertDialogComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "";
        this.cancelButtonText = "Cancel";

        if (data) {
          this.message = data.message || this.message;

          if (data.buttonText) {
            this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
        }

        this.dialogRef.updateSize('300vw', '300vw');
      }

      _createClass(AlertDialogComponent, [{
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return AlertDialogComponent;
    }();

    AlertDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    AlertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertDialogComponent);
    /***/
  },

  /***/
  "./src/app/alertdialogbuyer/alertdialogbuyer.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/alertdialogbuyer/alertdialogbuyer.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlertdialogbuyerAlertdialogbuyerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0ZGlhbG9nYnV5ZXIvYWxlcnRkaWFsb2didXllci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/alertdialogbuyer/alertdialogbuyer.component.ts ***!
    \****************************************************************/

  /*! exports provided: AlertdialogbuyerComponent */

  /***/
  function srcAppAlertdialogbuyerAlertdialogbuyerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertdialogbuyerComponent", function () {
      return AlertdialogbuyerComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AlertdialogbuyerComponent =
    /*#__PURE__*/
    function () {
      function AlertdialogbuyerComponent(data, dialogRef) {
        _classCallCheck(this, AlertdialogbuyerComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "";
        this.cancelButtonText = "Cancel";

        if (data) {
          this.message = data.message || this.message;

          if (data.buttonText) {
            this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
        }

        this.dialogRef.updateSize('300vw', '300vw');
      }

      _createClass(AlertdialogbuyerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return AlertdialogbuyerComponent;
    }();

    AlertdialogbuyerComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    AlertdialogbuyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alertdialogbuyer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertdialogbuyer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alertdialogbuyer.component.css */
      "./src/app/alertdialogbuyer/alertdialogbuyer.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertdialogbuyerComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ownaproperty/ownaproperty.component */
    "./src/app/ownaproperty/ownaproperty.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/forms/forms.component.ts");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/confirmation/confirmation.component.ts");
    /* harmony import */


    var _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./matches/matches.component */
    "./src/app/matches/matches.component.ts");
    /* harmony import */


    var _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./propertydetails/propertydetails.component */
    "./src/app/propertydetails/propertydetails.component.ts");
    /* harmony import */


    var _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sellerform/sellerform.component */
    "./src/app/sellerform/sellerform.component.ts");
    /* harmony import */


    var _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sellermatches/sellermatches.component */
    "./src/app/sellermatches/sellermatches.component.ts");
    /* harmony import */


    var _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./buyerdetails/buyerdetails.component */
    "./src/app/buyerdetails/buyerdetails.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./editprofile/editprofile.component */
    "./src/app/editprofile/editprofile.component.ts");
    /* harmony import */


    var _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./myproperties/myproperties.component */
    "./src/app/myproperties/myproperties.component.ts");
    /* harmony import */


    var _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./selectedpropertydetail/selectedpropertydetail.component */
    "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts");
    /* harmony import */


    var _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./myrequirement/myrequirement.component */
    "./src/app/myrequirement/myrequirement.component.ts");
    /* harmony import */


    var _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./requirementdetails/requirementdetails.component */
    "./src/app/requirementdetails/requirementdetails.component.ts");
    /* harmony import */


    var _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./prefrences/prefrences.component */
    "./src/app/prefrences/prefrences.component.ts");
    /* harmony import */


    var _chats_chats_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./chats/chats.component */
    "./src/app/chats/chats.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/verify-email/verify-email.component */
    "./src/app/components/verify-email/verify-email.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var routes = [{
      path: "ownaproperty/:use",
      component: _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_3__["OwnapropertyComponent"]
    }, {
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: "forms",
      component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"]
    }, {
      path: "confirmation",
      component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"]
    }, {
      path: "matches",
      component: _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__["MatchesComponent"]
    }, {
      path: "propertydetails",
      component: _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_8__["PropertydetailsComponent"]
    }, {
      path: "sellerform",
      component: _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_9__["SellerformComponent"]
    }, {
      path: "sellermatches",
      component: _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_10__["SellermatchesComponent"]
    }, {
      path: "buyerdetails",
      component: _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_11__["BuyerdetailsComponent"]
    }, {
      path: "profile",
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]
    }, {
      path: "editprofile",
      component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_13__["EditprofileComponent"]
    }, {
      path: "myproperties",
      component: _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_14__["MypropertiesComponent"]
    }, {
      path: "selectedpropertydetail",
      component: _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_15__["SelectedpropertydetailComponent"]
    }, {
      path: "myrequirement",
      component: _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_16__["MyrequirementComponent"]
    }, {
      path: "requirementdetails",
      component: _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_17__["RequirementdetailsComponent"]
    }, {
      path: "prefrences",
      component: _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_18__["PrefrencesComponent"]
    }, {
      path: "chats",
      component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_19__["ChatsComponent"]
    }, {
      path: "sign-in",
      component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"]
    }, {
      path: "dashboard",
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"]
    }, {
      path: "forgot-password",
      component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"]
    }, {
      path: "verify-email-address",
      component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_22__["VerifyEmailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'street';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ownaproperty/ownaproperty.component */
    "./src/app/ownaproperty/ownaproperty.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/app/forms/forms.component.ts");
    /* harmony import */


    var _matches_matches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./matches/matches.component */
    "./src/app/matches/matches.component.ts");
    /* harmony import */


    var _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./propertydetails/propertydetails.component */
    "./src/app/propertydetails/propertydetails.component.ts");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/confirmation/confirmation.component.ts");
    /* harmony import */


    var _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sellerform/sellerform.component */
    "./src/app/sellerform/sellerform.component.ts");
    /* harmony import */


    var _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sellermatches/sellermatches.component */
    "./src/app/sellermatches/sellermatches.component.ts");
    /* harmony import */


    var _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./buyerdetails/buyerdetails.component */
    "./src/app/buyerdetails/buyerdetails.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./editprofile/editprofile.component */
    "./src/app/editprofile/editprofile.component.ts");
    /* harmony import */


    var _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./myproperties/myproperties.component */
    "./src/app/myproperties/myproperties.component.ts");
    /* harmony import */


    var _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./selectedpropertydetail/selectedpropertydetail.component */
    "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts");
    /* harmony import */


    var _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./myrequirement/myrequirement.component */
    "./src/app/myrequirement/myrequirement.component.ts");
    /* harmony import */


    var _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./requirementdetails/requirementdetails.component */
    "./src/app/requirementdetails/requirementdetails.component.ts");
    /* harmony import */


    var _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./prefrences/prefrences.component */
    "./src/app/prefrences/prefrences.component.ts");
    /* harmony import */


    var _chats_chats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./chats/chats.component */
    "./src/app/chats/chats.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/sign-in/sign-in.component */
    "./src/app/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/verify-email/verify-email.component */
    "./src/app/components/verify-email/verify-email.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! ./forms/confirmation-dialog.component */
    "./src/app/forms/confirmation-dialog.component.ts");
    /* harmony import */


    var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! ./alert-dialog/alert-dialog.component */
    "./src/app/alert-dialog/alert-dialog.component.ts");
    /* harmony import */


    var _forms_material__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! ./forms/material */
    "./src/app/forms/material.ts");
    /* harmony import */


    var _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! ./alertdialogbuyer/alertdialogbuyer.component */
    "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); // Firebase modules


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_8__["OwnapropertyComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__["FormsComponent"], _matches_matches_component__WEBPACK_IMPORTED_MODULE_10__["MatchesComponent"], _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_11__["PropertydetailsComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationComponent"], _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_13__["SellerformComponent"], _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_14__["SellermatchesComponent"], _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_15__["BuyerdetailsComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__["EditprofileComponent"], _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_18__["MypropertiesComponent"], _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_19__["SelectedpropertydetailComponent"], _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_20__["MyrequirementComponent"], _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_21__["RequirementdetailsComponent"], _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_22__["PrefrencesComponent"], _chats_chats_component__WEBPACK_IMPORTED_MODULE_23__["ChatsComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"], _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_32__["SignInComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__["ForgotPasswordComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_34__["VerifyEmailComponent"], _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__["AlertDialogComponent"], _forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__["ConfirmationDialog"], _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__["AlertdialogbuyerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].firebaseConfig, 'street'), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__["AngularFireDatabaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"], _forms_material__WEBPACK_IMPORTED_MODULE_80__["MaterialModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__["MatTabsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_42__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_49__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_55__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_56__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_57__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_58__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_59__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_60__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_61__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_63__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_64__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_65__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_66__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_67__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_71__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_72__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_73__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_75__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_76__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_77__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__["ScrollingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_82__["HttpClientModule"]],
      entryComponents: [_forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__["ConfirmationDialog"], _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__["AlertDialogComponent"], _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__["AlertdialogbuyerComponent"]],
      providers: [_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], {
        provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["FirestoreSettingsToken"],
        useValue: {}
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this.userData = user;
            localStorage.setItem("user", JSON.stringify(_this.userData));
          } else {
            localStorage.setItem("user", null);
          }
        });
      }

      _createClass(AuthService, [{
        key: "logout",
        value: function logout() {
          throw new Error("Method not implemented.");
        } // Sign in with email/password

      }, {
        key: "SignIn",
        value: function SignIn(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

                  case 3:
                    result = _context.sent;
                    this.ngZone.run(function () {
                      _this2.router.navigate(["profile"]);
                    });
                    this.SetUserData(result.user);
                    _context.next = 11;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    window.alert(_context.t0.message);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 8]]);
          }));
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

                  case 3:
                    result = _context2.sent;

                    /* Call the SendVerificaitonMail() function when new user sign
                    up and returns promise */
                    this.SendVerificationMail();
                    this.SetUserData(result.user);
                    _context2.next = 11;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](0);
                    window.alert(_context2.t0.message);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 8]]);
          }));
        } // Send email verfificaiton when new user sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.auth.currentUser.sendEmailVerification();

                  case 2:
                    this.router.navigate(["verify-email-address"]);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);

                  case 3:
                    window.alert("Password reset email sent, check your inbox.");
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    window.alert(_context4.t0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 6]]);
          }));
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        } // Sign in with Google

      }, {
        key: "FacebookAuth",
        value: function FacebookAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var result;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.afAuth.auth.signInWithPopup(provider);

                  case 3:
                    result = _context5.sent;
                    this.ngZone.run(function () {// this.router.navigate(["profile"]);
                    });
                    this.SetUserData(result.user);
                    _context5.next = 11;
                    break;

                  case 8:
                    _context5.prev = 8;
                    _context5.t0 = _context5["catch"](0);
                    window.alert(_context5.t0);

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 8]]);
          }));
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out

      }, {
        key: "SignOut",
        value: function SignOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.afAuth.auth.signOut();

                  case 2:
                    localStorage.removeItem("user");
                    this.router.navigate(["home"]);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem("user"));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning

      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/buyerdetails/buyerdetails.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/buyerdetails/buyerdetails.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuyerdetailsBuyerdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  /* margin-top: 9px; */\r\n  padding-top: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: bold;\r\n  color: #5E5959;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.output {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXJkZXRhaWxzL2J1eWVyZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYnV5ZXJkZXRhaWxzL2J1eWVyZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNvbmZpcm0tZmlyc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4udGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLmNvbmZpcm0tcGFnZS1oZWFkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAvKiBtYXJnaW4tdG9wOiA5cHg7ICovXHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVFNTk1OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5lbmRpbmQtYnV0dG9uIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm9yLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/buyerdetails/buyerdetails.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/buyerdetails/buyerdetails.component.ts ***!
    \********************************************************/

  /*! exports provided: BuyerdetailsComponent */

  /***/
  function srcAppBuyerdetailsBuyerdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyerdetailsComponent", function () {
      return BuyerdetailsComponent;
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


    var _forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../forms/forms.service */
    "./src/app/forms/forms.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../alertdialogbuyer/alertdialogbuyer.component */
    "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts");

    var BuyerdetailsComponent =
    /*#__PURE__*/
    function () {
      function BuyerdetailsComponent(activatedRoute, formsService, authService, afAuth, stateService, dialog, snackBar, route) {
        _classCallCheck(this, BuyerdetailsComponent);

        this.activatedRoute = activatedRoute;
        this.formsService = formsService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.isLoading = false;
        this.selectedIndex = 0;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
      }

      _createClass(BuyerdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // Auth
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this3.userData = user;
              localStorage.setItem("user", JSON.stringify(_this3.userData));

              _this3.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this3.LoggedOut();
            }
          });
          this.Buyer = this.stateService.Buyer;
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;

          this.isLoading = true;
          this.return = this.formsService.createCustomer(this.userData.uid, this.Buyer).then(function (data) {
            if (data == true) {
              _this4.isLoading = false;

              var dialogRef = _this4.dialog.open(_alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_8__["AlertdialogbuyerComponent"], {
                data: {
                  message: 'HelloWorld',
                  buttonText: {
                    cancel: 'Done'
                  }
                }
              });
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }]);

      return BuyerdetailsComponent;
    }();

    BuyerdetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BuyerdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-buyerdetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buyerdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buyerdetails.component.css */
      "./src/app/buyerdetails/buyerdetails.component.css")).default]
    })], BuyerdetailsComponent);
    /***/
  },

  /***/
  "./src/app/chats/chats.component.css":
  /*!*******************************************!*\
    !*** ./src/app/chats/chats.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatsChatsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chats-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.chat-container\r\n{\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n\r\n}\r\n.chat-p {\r\n    margin-right: 50px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.user-class {\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMtbWFpbi1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcbi5jaGF0LWNvbnRhaW5lclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuXHJcbn1cclxuLmNoYXQtcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi51c2VyLWNsYXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chats/chats.component.ts":
  /*!******************************************!*\
    !*** ./src/app/chats/chats.component.ts ***!
    \******************************************/

  /*! exports provided: ChatsComponent */

  /***/
  function srcAppChatsChatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsComponent", function () {
      return ChatsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatsComponent =
    /*#__PURE__*/
    function () {
      function ChatsComponent() {
        _classCallCheck(this, ChatsComponent);
      }

      _createClass(ChatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatsComponent;
    }();

    ChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chats',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chats.component.css */
      "./src/app/chats/chats.component.css")).default]
    })], ChatsComponent);
    /***/
  },

  /***/
  "./src/app/common.css":
  /*!****************************!*\
    !*** ./src/app/common.css ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n  margin: 1em;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authService) {
        _classCallCheck(this, DashboardComponent);

        this.authService = authService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/forgot-password/forgot-password.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n  \r\n    font-family: 'Open Sans', sans-serif;\r\n   width: 80%;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZOztJQUVaLG9DQUFvQztHQUNyQyxVQUFVO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNvY2lhbC1sb2dpblxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(authService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/components/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/sign-in/sign-in.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/sign-in/sign-in.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-facebook\r\n\r\n\r\n{\r\n background-color: #244D93;\r\n color: white;\r\n width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.btn-google\r\n{\r\n    background-color: #DD4B33;\r\n    color: white;\r\n    width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.social-login h4\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 700;\r\n}\r\n.social-button {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n\r\n}\r\n.color-signup\r\n{\r\n    color: #244D93;\r\n}\r\n.btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n    margin-top: 3%;\r\n    font-family: 'Open Sans', sans-serif;\r\n  \r\n}\r\ni.fa.fa-user.input-group-text.nav-login-form{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n.checkbox\r\n{\r\n  background: none transparent;\r\n     border: none; \r\n     border-left: none; \r\n     border-right: none; \r\n    cursor: pointer;\r\n    /* display: block; */\r\n    height: auto;\r\n    position: absolute;\r\n    top: none; \r\n     left: none; \r\n    right: 9px;\r\n     width: none; \r\n    /* transition: all .2s; */\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DOztBQUV4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSw0QkFBNEI7S0FDekIsWUFBWTtLQUNaLGlCQUFpQjtLQUNqQixrQkFBa0I7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7S0FDUixVQUFVO0lBQ1gsVUFBVTtLQUNULFdBQVc7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWZhY2Vib29rXHJcblxyXG5cclxue1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuIGNvbG9yOiB3aGl0ZTtcclxuIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYnRuLWdvb2dsZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zb2NpYWwtbG9naW4gaDRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jb2xvci1zaWdudXBcclxue1xyXG4gICAgY29sb3I6ICMyNDREOTM7XHJcbn1cclxuLmJ0bi1zb2NpYWwtbG9naW5cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbn1cclxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm17XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tdG9wOiAtNCU7XHJcbn1cclxuLnNvY2lhbC1sb2dpbi50ZXh0LWNlbnRlciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uY2hlY2tib3hcclxue1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgICAgYm9yZGVyOiBub25lOyBcclxuICAgICBib3JkZXItbGVmdDogbm9uZTsgXHJcbiAgICAgYm9yZGVyLXJpZ2h0OiBub25lOyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBub25lOyBcclxuICAgICBsZWZ0OiBub25lOyBcclxuICAgIHJpZ2h0OiA5cHg7XHJcbiAgICAgd2lkdGg6IG5vbmU7IFxyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/sign-in/sign-in.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sign-in/sign-in.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(authService) {
        _classCallCheck(this, SignInComponent);

        this.authService = authService;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/components/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/components/verify-email/verify-email.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/verify-email/verify-email.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVerifyEmailVerifyEmailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/verify-email/verify-email.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/verify-email/verify-email.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VerifyEmailComponent */

  /***/
  function srcAppComponentsVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
      return VerifyEmailComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");

    var VerifyEmailComponent =
    /*#__PURE__*/
    function () {
      function VerifyEmailComponent(authService) {
        _classCallCheck(this, VerifyEmailComponent);

        this.authService = authService;
      }

      _createClass(VerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailComponent;
    }();

    VerifyEmailComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-email.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-email.component.css */
      "./src/app/components/verify-email/verify-email.component.css")).default]
    })], VerifyEmailComponent);
    /***/
  },

  /***/
  "./src/app/confirmation/confirmation.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/confirmation/confirmation.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfirmationConfirmationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  /* margin-top: 9px; */\r\n  padding-top: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: bold;\r\n  color: #5E5959;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.output {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNvbmZpcm0tZmlyc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4udGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLmNvbmZpcm0tcGFnZS1oZWFkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAvKiBtYXJnaW4tdG9wOiA5cHg7ICovXHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVFNTk1OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5lbmRpbmQtYnV0dG9uIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm9yLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/confirmation/confirmation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/confirmation/confirmation.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppConfirmationConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
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


    var _sellerform_sellerform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sellerform/sellerform.service */
    "./src/app/sellerform/sellerform.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../alert-dialog/alert-dialog.component */
    "./src/app/alert-dialog/alert-dialog.component.ts");

    var ConfirmationComponent =
    /*#__PURE__*/
    function () {
      function ConfirmationComponent(activatedRoute, SellerformService, authService, afAuth, stateService, dialog, snackBar, route) {
        _classCallCheck(this, ConfirmationComponent);

        this.activatedRoute = activatedRoute;
        this.SellerformService = SellerformService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
      }

      _createClass(ConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          // Auth
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this5.userData = user;
              localStorage.setItem("user", JSON.stringify(_this5.userData));

              _this5.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this5.LoggedOut();
            }
          });
          this.Seller = this.stateService.Seller;
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this6 = this;

          this.isLoading = true;
          this.return = this.SellerformService.createCustomer(this.userData.uid, this.Seller).then(function (data) {
            if (data == true) {
              _this6.isLoading = false;

              var dialogRef = _this6.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], {
                data: {
                  message: 'HelloWorld',
                  buttonText: {
                    cancel: 'Done'
                  }
                }
              });
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _sellerform_sellerform_service__WEBPACK_IMPORTED_MODULE_3__["SellerformService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-confirmation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation.component.css */
      "./src/app/confirmation/confirmation.component.css")).default]
    })], ConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/editprofile/editprofile.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditprofileEditprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    background-color: #EBEBEB;\r\npadding-bottom: 60px;\r\n    margin: 0;\r\n}\r\n.Profile-pic {\r\n    width: 37%;\r\n \r\n}\r\np.profile-heading {\r\n    /* text-align: center; */\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    font-size: 27px;\r\n    padding-top: 7px;\r\n}\r\n.profile-name-image {\r\n    display: flex;\r\n    /* justify-content: space-evenly; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.profile-name {\r\n    font-size: 25px;\r\n    color: red;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.profile-name-field-option\r\n{\r\n    background-color: white;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n    margin-top: 30px;\r\n}\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: 3fr 4fr 1fr;\r\n    grid-gap: 10px;\r\n    padding: 0px;\r\n  }\r\n.grid-container > div {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n\r\n    padding: 0px 5px;\r\n   \r\n  }\r\n.fname-text1 {\r\n    font-size: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.fname-text2 {\r\n    font-size: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.fname-text3 {\r\n    font-size: 15px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\ninput#date {\r\n    /* width: 78%; */\r\n    margin-right: -58px;\r\n    padding: 0px;\r\n    /* margin: 0px; */\r\n}\r\n.edit-profile-submitbutton {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    align-items: center;\r\n    margin-top: 25px;\r\n}\r\n.btn-back {\r\n    background-color: white;\r\n    width: 31%;\r\n    color: black;\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QixvQkFBb0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysb0NBQW9DOztBQUV4QztBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsWUFBWTtFQUNkO0FBRUE7SUFDRSwwQ0FBMEM7O0lBRTFDLGdCQUFnQjs7RUFFbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixvQ0FBb0M7O0FBRXhDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DOztBQUV4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbnBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5Qcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gXHJcbn1cclxucC5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4ucHJvZmlsZS1uYW1lLWZpZWxkLW9wdGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICBcclxuICB9XHJcbiAgLmZuYW1lLXRleHQxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmZuYW1lLXRleHQyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmZuYW1lLXRleHQzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuaW5wdXQjZGF0ZSB7XHJcbiAgICAvKiB3aWR0aDogNzglOyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNThweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC8qIG1hcmdpbjogMHB4OyAqL1xyXG59XHJcbi5lZGl0LXByb2ZpbGUtc3VibWl0YnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5idG4tYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMSU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/editprofile/editprofile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/editprofile/editprofile.component.ts ***!
    \******************************************************/

  /*! exports provided: EditprofileComponent */

  /***/
  function srcAppEditprofileEditprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function () {
      return EditprofileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditprofileComponent =
    /*#__PURE__*/
    function () {
      function EditprofileComponent() {
        _classCallCheck(this, EditprofileComponent);
      }

      _createClass(EditprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditprofileComponent;
    }();

    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editprofile.component.css */
      "./src/app/editprofile/editprofile.component.css")).default]
    })], EditprofileComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*\r\n{\r\n    overflow-x: hidden;\r\n}\r\n.footer\r\n{\r\n    width: 100%;\r\n    background-color: #FCF4EE;\r\n    padding: 20px;\r\n  \r\n  \r\n}\r\n.image-social {\r\n    display: flex;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-content: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    align-items: center;\r\n}\r\nimg.facebook-icon {\r\n    width: 12%;\r\n    padding: 0.5%;\r\n}\r\n.twitter-icon\r\n{\r\n    width: 12%;\r\n    padding: 0.8%;\r\n}\r\n.instagram-icon\r\n{\r\n    padding: 0.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTs7O0FBR2pCO0FBQ0E7SUFDSSxhQUFhO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5Qix1QkFBdUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxyXG57XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmZvb3RlclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0Y0RUU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gIFxyXG59XHJcbi5pbWFnZS1zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZy5mYWNlYm9vay1pY29uIHtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG59XHJcbi50d2l0dGVyLWljb25cclxue1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIHBhZGRpbmc6IDAuOCU7XHJcbn1cclxuLmluc3RhZ3JhbS1pY29uXHJcbntcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/forms/confirmation-dialog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/forms/confirmation-dialog.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfirmationDialog */

  /***/
  function srcAppFormsConfirmationDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function () {
      return ConfirmationDialog;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ConfirmationDialog =
    /*#__PURE__*/
    function () {
      function ConfirmationDialog(data, dialogRef) {
        _classCallCheck(this, ConfirmationDialog);

        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";

        if (data) {
          this.message = data.message || this.message;

          if (data.buttonText) {
            this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
          }
        }
      }

      _createClass(ConfirmationDialog, [{
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return ConfirmationDialog;
    }();

    ConfirmationDialog.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'confirmation-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmationDialog);
    /***/
  },

  /***/
  "./src/app/forms/forms.component.css":
  /*!*******************************************!*\
    !*** ./src/app/forms/forms.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-containers {\r\n  width: auto;\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.forms-container {\r\n  padding-bottom: 4%;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244d93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #dd4b33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.color-signup {\r\n  color: #244d93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244d93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  margin-left: 0.255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: 0.4em solid;\r\n  border-right: 0.4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: 0.4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244d93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244d93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.second-container {\r\n  background-color: white;\r\n}\r\n\r\ninput#Tittle {\r\n  width: 20%;\r\n}\r\n\r\n.example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 17px;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.form-check-input {\r\n  width: auto;\r\n}\r\n\r\n.last-radio-button {\r\n  margin-right: 0px;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.input {\r\n  border: none;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.tabs-align-padding {\r\n\r\n  padding: 17px;\r\n  background: white;\r\n  margin: 10px;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.social-login {\r\n  padding: 15px;\r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.Line-form {\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1COztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJzIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0ZDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiBoNCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbG9yLXNpZ251cCB7XHJcbiAgY29sb3I6ICMyNDRkOTM7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0ZDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAyLjI1NWVtO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLXRvcDogMC40ZW0gc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1iYWNrIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDRkOTM7XHJcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1uZXh0IHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDRkOTM7XHJcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm9yLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2Vjb25kLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0I1RpdHRsZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5idXR0b24tbmV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxN3B4O1xyXG59XHJcblxyXG4uYnV0dG9uLW5leHQtdGFiMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubGFzdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tYWxpZ24ge1xyXG5cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtbWFpbC1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udGFicy1hbGlnbi1wYWRkaW5nIHtcclxuXHJcbiAgcGFkZGluZzogMTdweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLkxpbmUtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLm1hdC1vcHRpb24ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/forms/forms.component.ts":
  /*!******************************************!*\
    !*** ./src/app/forms/forms.component.ts ***!
    \******************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forms */
    "./src/app/forms/forms.ts");
    /* harmony import */


    var _forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forms.service */
    "./src/app/forms/forms.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent(authService, afs, // Inject Firestore service
      formsService, firestore, afAuth, db, dialog, snackBar, route, router, stateService, postcodeService) {
        _classCallCheck(this, FormsComponent);

        this.authService = authService;
        this.afs = afs;
        this.formsService = formsService;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.stateService = stateService;
        this.postcodeService = postcodeService;
        this.addressianAutoComplete$ = null;
        this.autoCompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.isLoggedIn = true;
        this.Buyer = new _forms__WEBPACK_IMPORTED_MODULE_3__["Buyer"]();
        this.submitted = false;
        this.links = ["First", "Second", "Third"];
        this.activeLink = this.links[0];
        this.background = "";
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.lastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.firstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)]);
      }

      _createClass(FormsComponent, [{
        key: "toggleBackground",
        value: function toggleBackground() {
          this.background = this.background ? "" : "primary";
        }
      }, {
        key: "addLink",
        value: function addLink() {
          this.links.push("Link ".concat(this.links.length + 1));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this7.userData = user;
              localStorage.setItem("user", JSON.stringify(_this7.userData));

              _this7.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this7.LoggedOut();
            }
          }); // this.filteredOptions = this.myControl.valueChanges.pipe(
          //   startWith(""),
          //   map(value => (typeof value === "string" ? value : value.postcode)),
          //   map(postcode =>
          //     postcode ? this._filter(postcode) : this.options.slice()
          //   )
          // );
          // The auto population of github method

          this.addressianAutoComplete$ = this.autoCompleteControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (value) {
            if (value !== "") {
              _this7.lookup(_this7.Buyer.postcode).subscribe(function (data) {
                _this7.data = data;
              });

              return _this7.lookup(_this7.Buyer.postcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
          })); // End method
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }, {
        key: "newCustomer",
        value: function newCustomer() {
          this.submitted = false;
          this.Buyer = new _forms__WEBPACK_IMPORTED_MODULE_3__["Buyer"]();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.stateService.Buyer = this.Buyer;
          this.router.navigate(["buyerdetails"]);
        }
      }, {
        key: "lookup",
        value: function lookup(value) {
          return this.postcodeService.search(value);
        }
      }, {
        key: "getPosts",
        value: function getPosts(value) {
          this.Buyer.Address = value.address;
          this.Buyer.Town = value.citytown;
          this.Buyer.state = value.county;
          this.Buyer.postcode = value.postcode;
          console.log(value);
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
      }, {
        type: _forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_9__["StateServiceService"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]
      }];
    };

    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forms",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forms.component.css */
      "./src/app/forms/forms.component.css")).default]
    })], FormsComponent);
    /***/
  },

  /***/
  "./src/app/forms/forms.service.ts":
  /*!****************************************!*\
    !*** ./src/app/forms/forms.service.ts ***!
    \****************************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppFormsFormsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsService", function () {
      return FormsService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var FormsService =
    /*#__PURE__*/
    function () {
      function FormsService(db) {
        _classCallCheck(this, FormsService);

        this.db = db;
        this.dbPath = "Buyer";
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customersRef = null;
        this.customersRef = db.collection(this.dbPath);
      }

      _createClass(FormsService, [{
        key: "createCustomer",
        value: function createCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.customersRef.doc(key).collection("requirements").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context7.sent;
                    return _context7.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(key, value) {
          return this.customersRef.doc(key).update(value);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(key) {
          return this.customersRef.doc(key).delete();
        }
      }, {
        key: "getCustomersList",
        value: function getCustomersList() {
          return this.customersRef;
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          this.customersRef.get().subscribe(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          }, function (error) {
            console.log("Error: ", error);
          });
        }
      }]);

      return FormsService;
    }();

    FormsService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], FormsService);
    /***/
  },

  /***/
  "./src/app/forms/forms.ts":
  /*!********************************!*\
    !*** ./src/app/forms/forms.ts ***!
    \********************************/

  /*! exports provided: Buyer */

  /***/
  function srcAppFormsFormsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Buyer", function () {
      return Buyer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Buyer = function Buyer() {
      _classCallCheck(this, Buyer);

      this.title = "Mr";
      this.ChainStatus = "First Time Buyer";
      this.FinancialPosition = "Mortgage Free";
      this.Type = "Buying to Live";
      this.Position = "Cash Buyer";
      this.Propertytype = "Flat";
      this.SearchRadius = 5;
      this.PriceRange = 0;
      this.active = true;
    };
    /***/

  },

  /***/
  "./src/app/forms/material.ts":
  /*!***********************************!*\
    !*** ./src/app/forms/material.ts ***!
    \***********************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppFormsMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\r\n  background-image: url(/assets/Images/handshake.jpg);\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.upper-back {\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 250px;\r\n  opacity: 0.5;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n\r\n  font-family: 'Open Sans', sans-serif;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n\r\n.home-button {\r\n  background-color: #244D93;\r\ncolor: white;\r\n  width: 35%;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Segoe UI Regular';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: local('Segoe UI Regular'), url('/assets/font/Segoe UI.woff') format('woff');\r\n}\r\n\r\n.home-text-font {\r\n  font-family: 'Segoe UI Regular';\r\n  color: #707070;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBbUQ7RUFDbkQsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IsWUFBWTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdGQUFnRjtBQUNsRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSW1hZ2VzL2hhbmRzaGFrZS5qcGcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi51cHBlci1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi51cHBlci1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xNDVweDtcclxufVxyXG5cclxuLmhvbWUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG5jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBSZWd1bGFyJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IGxvY2FsKCdTZWdvZSBVSSBSZWd1bGFyJyksIHVybCgnL2Fzc2V0cy9mb250L1NlZ29lIFVJLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxufVxyXG5cclxuLmhvbWUtdGV4dC1mb250IHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../common.css */
      "./src/app/common.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/http.service.ts":
  /*!*********************************!*\
    !*** ./src/app/http.service.ts ***!
    \*********************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.configUrl = "https://api-trial.addressian.co.uk/address/";
      }

      _createClass(HttpService, [{
        key: "search",
        value: function search(query) {
          var headerDict = {
            "x-api-key": "BcLIABSb6J3HsvGTpI5jA8FrtOaQqR67736r1Hip"
          };
          var url = "https://api-trial.addressian.co.uk/address/";
          return this.http.get(url + query, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict)
          });
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/matches/matches.component.css":
  /*!***********************************************!*\
    !*** ./src/app/matches/matches.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMatchesMatchesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    height: 150px;\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    /* align-content: flex-start; */\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n.match-images {\r\n    margin-top: 14px;\r\n    margin-right: 9px;\r\n    width: 36%;\r\n}\r\n.match-content {\r\n    padding-top: 26px;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: medium;\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        margin-top: 14px;\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7OzhHQUU4RztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBVUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLm1hdGNoLWltYWdlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB3aWR0aDogMzYlO1xyXG59XHJcbi5tYXRjaC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGlzY3JpcHRpb24tcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubWFpbi1oZWFkaW5nXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweClcclxue1xyXG4gICAgLm1hdGNoLWltYWdlcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgICAgICB3aWR0aDogMzQlO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/matches/matches.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/matches/matches.component.ts ***!
    \**********************************************/

  /*! exports provided: MatchesComponent */

  /***/
  function srcAppMatchesMatchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchesComponent", function () {
      return MatchesComponent;
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


    var _matches_matches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../matches/matches.service */
    "./src/app/matches/matches.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");

    var MatchesComponent =
    /*#__PURE__*/
    function () {
      function MatchesComponent(MatchesService, stateService) {
        _classCallCheck(this, MatchesComponent);

        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
      }

      _createClass(MatchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.MatchesService.getSellerProperties(this.uid).subscribe(function (ref) {
            ref.forEach(function (item) {
              if (item.data().postcode.postcode == _this8.stateService.Buyer.postcode.postcode) {
                console.log(item.data());

                _this8.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().latitude && item.data().longitude) {
                _this8.distanceInKm = _this8.getDistanceFromLatLonInKm(_this8.stateService.Buyer.latitude, _this8.stateService.Buyer.longitude, item.data().latitude, item.data().longitude);

                _this8.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this8.distanceInKm
                });
              } else {
                _this8.unmatchedProperties.push({
                  detail: item.data()
                });
              }
            });

            _this8.unmatchedProperties.sort(_this8.compare);

            console.log(_this8.unmatchedProperties);
          });
        }
      }, {
        key: "getDistanceFromLatLonInKm",
        value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

          var dLon = this.deg2rad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d;
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "compare",
        value: function compare(a, b) {
          var distA = a.distance;
          var distB = b.distance;
          var comparison = 0;

          if (distA > distB) {
            comparison = 1;
          } else if (distA < distB) {
            comparison = -1;
          }

          return comparison;
        }
      }]);

      return MatchesComponent;
    }();

    MatchesComponent.ctorParameters = function () {
      return [{
        type: _matches_matches_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    MatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-matches",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matches.component.css */
      "./src/app/matches/matches.component.css")).default]
    })], MatchesComponent);
    /***/
  },

  /***/
  "./src/app/matches/matches.service.ts":
  /*!********************************************!*\
    !*** ./src/app/matches/matches.service.ts ***!
    \********************************************/

  /*! exports provided: MatchesService */

  /***/
  function srcAppMatchesMatchesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchesService", function () {
      return MatchesService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var MatchesService =
    /*#__PURE__*/
    function () {
      function MatchesService(db) {
        _classCallCheck(this, MatchesService);

        this.db = db;
        this.customersRef = db.collection("Seller"); // Collection Group

        this.propertiesRef = db.collectionGroup("properties");
      }

      _createClass(MatchesService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.propertiesRef.get();
        }
      }]);

      return MatchesService;
    }();

    MatchesService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MatchesService);
    /***/
  },

  /***/
  "./src/app/myproperties/myproperties.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/myproperties/myproperties.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMypropertiesMypropertiesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n\r\n.match-section\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    height: 150px;\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    /* align-content: flex-start; */\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n\r\n.match-images {\r\n    margin-top: 10px;\r\n    margin-right: 9px;\r\n    width: 35%;\r\n}\r\n\r\n.match-content {\r\n    padding-top: 12px;\r\n}\r\n\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n\r\n.area-p\r\n{\r\n    font-size: 12px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.discription-p\r\n{\r\n    font-size: 12px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\n\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        /* margin-top: 14px; */\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9wZXJ0aWVzL215cHJvcGVydGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTs7OEdBRThHOztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQVVBOztJQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL215cHJvcGVydGllcy9teXByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaGVzLW1haW4tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubWF0Y2gtc2VjdGlvblxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAvKiBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5tYXRjaC1pbWFnZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxufVxyXG4ubWF0Y2gtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkZvbnQtc2l6ZXNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5hcmVhLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBSZWd1bGFyJztcclxufVxyXG4ucHJvcGVydHktdHlwZS1jb2xvcntcclxuICAgIGNvbG9yOiAjOEJCNDQwO1xyXG59XHJcbi5mb250LWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRpbmdcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxyXG57XHJcbiAgICAubWF0Y2gtaW1hZ2VzIHtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNCU7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/myproperties/myproperties.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/myproperties/myproperties.component.ts ***!
    \********************************************************/

  /*! exports provided: MypropertiesComponent */

  /***/
  function srcAppMypropertiesMypropertiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypropertiesComponent", function () {
      return MypropertiesComponent;
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


    var _myproperties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myproperties.service */
    "./src/app/myproperties/myproperties.service.ts");

    var MypropertiesComponent =
    /*#__PURE__*/
    function () {
      function MypropertiesComponent(myproperty_service) {
        _classCallCheck(this, MypropertiesComponent);

        this.myproperty_service = myproperty_service;
        this.propertyDetails = [];
      }

      _createClass(MypropertiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          // User ID
          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.myproperty_service.getSellerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this9.propertyDetails.push(element.data());
            });
            console.log(_this9.propertyDetails);
          });
        }
      }]);

      return MypropertiesComponent;
    }();

    MypropertiesComponent.ctorParameters = function () {
      return [{
        type: _myproperties_service__WEBPACK_IMPORTED_MODULE_2__["MypropertiesService"]
      }];
    };

    MypropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-myproperties",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myproperties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myproperties.component.css */
      "./src/app/myproperties/myproperties.component.css")).default]
    })], MypropertiesComponent);
    /***/
  },

  /***/
  "./src/app/myproperties/myproperties.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/myproperties/myproperties.service.ts ***!
    \******************************************************/

  /*! exports provided: MypropertiesService */

  /***/
  function srcAppMypropertiesMypropertiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MypropertiesService", function () {
      return MypropertiesService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var MypropertiesService =
    /*#__PURE__*/
    function () {
      function MypropertiesService(db) {
        _classCallCheck(this, MypropertiesService);

        this.db = db;
        this.customersRef = db.collection("Seller");
      }

      _createClass(MypropertiesService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.customersRef.doc(uid).collection("properties").ref.get();
        }
      }]);

      return MypropertiesService;
    }();

    MypropertiesService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MypropertiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MypropertiesService);
    /***/
  },

  /***/
  "./src/app/myrequirement/myrequirement.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/myrequirement/myrequirement.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyrequirementMyrequirementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-requirement-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.my-requirement-one\r\n{\r\n    background-color: white;\r\n \r\n}\r\n.my-requirement-heading\r\n{\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n.area-p\r\n{\r\n    font-size:20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n  \r\n    text-align: center;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 12px;\r\n    font-family: 'Segoe UI Regular';\r\n    margin-bottom: 0px !important;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.my-requirement-one {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlyZXF1aXJlbWVudC9teXJlcXVpcmVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHVCQUF1Qjs7QUFFM0I7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxvQ0FBb0M7O0lBRXBDLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9teXJlcXVpcmVtZW50L215cmVxdWlyZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yZXF1aXJlbWVudC1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuLm15LXJlcXVpcmVtZW50LW9uZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuIFxyXG59XHJcbi5teS1yZXF1aXJlbWVudC1oZWFkaW5nXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uYXJlYS1wXHJcbntcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaXNjcmlwdGlvbi1wXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvcGVydHktdHlwZS1jb2xvcntcclxuICAgIGNvbG9yOiAjOEJCNDQwO1xyXG59XHJcbi5teS1yZXF1aXJlbWVudC1vbmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/myrequirement/myrequirement.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/myrequirement/myrequirement.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyrequirementComponent */

  /***/
  function srcAppMyrequirementMyrequirementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrequirementComponent", function () {
      return MyrequirementComponent;
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


    var _myrequirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myrequirement.service */
    "./src/app/myrequirement/myrequirement.service.ts");

    var MyrequirementComponent =
    /*#__PURE__*/
    function () {
      function MyrequirementComponent(myrequirement_service) {
        _classCallCheck(this, MyrequirementComponent);

        this.myrequirement_service = myrequirement_service;
        this.propertyDetails = [];
      }

      _createClass(MyrequirementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          // User ID
          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.myrequirement_service.getBuyerRequirement(this.uid).then(function (res) {
            res.forEach(function (element) {
              console.log(element.data());

              _this10.propertyDetails.push(element.data());
            });
          });
        }
      }]);

      return MyrequirementComponent;
    }();

    MyrequirementComponent.ctorParameters = function () {
      return [{
        type: _myrequirement_service__WEBPACK_IMPORTED_MODULE_2__["MyrequirementService"]
      }];
    };

    MyrequirementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-myrequirement",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myrequirement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myrequirement.component.css */
      "./src/app/myrequirement/myrequirement.component.css")).default]
    })], MyrequirementComponent);
    /***/
  },

  /***/
  "./src/app/myrequirement/myrequirement.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/myrequirement/myrequirement.service.ts ***!
    \********************************************************/

  /*! exports provided: MyrequirementService */

  /***/
  function srcAppMyrequirementMyrequirementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrequirementService", function () {
      return MyrequirementService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var MyrequirementService =
    /*#__PURE__*/
    function () {
      function MyrequirementService(db) {
        _classCallCheck(this, MyrequirementService);

        this.db = db;
        this.customersRef = db.collection("Buyer");
      }

      _createClass(MyrequirementService, [{
        key: "getBuyerRequirement",
        value: function getBuyerRequirement(uid) {
          return this.customersRef.doc(uid).collection("requirements").ref.get();
        }
      }]);

      return MyrequirementService;
    }();

    MyrequirementService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MyrequirementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MyrequirementService);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.css":
  /*!***************************************!*\
    !*** ./src/app/nav/nav.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\r\n\r\n@font-face {\r\n  font-family: HelveticaNeueLight;\r\n  src: url('/assets/font/HelveticaNeueLight.ttf');\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-div {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.content {\r\n  padding: 19px;\r\n  background-color: #FBF4EF;\r\n}\r\n\r\nlabel {\r\n  background: none transparent;\r\n  border: 2px solid black;\r\n  border-left: 0 solid transparent;\r\n  border-right: 0 solid transparent;\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 19px;\r\n  position: absolute;\r\n  top: 19px;\r\n  left: 20px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n}\r\n\r\nlabel::before {\r\n  background: black;\r\n  content: '';\r\n  height: 2px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  /* top: 18px; */\r\n  margin-top: 6.2px;\r\n\r\n}\r\n\r\nlabel::after {\r\n  background: black;\r\n  content: '';\r\n  height: 4px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 6px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 100%;\r\n  transform: rotate(90deg);\r\n  transition: all .2s;\r\n}\r\n\r\n.menu-text {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 13px;\r\n  text-transform: uppercase;\r\n  margin-top: 2px;\r\n}\r\n\r\n.menu-text::after {\r\n  display: none;\r\n}\r\n\r\n.logo-nav {\r\n  width: 50%;\r\n}\r\n\r\n.imge-logo-header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding-top: 0px;\r\n  padding-left: 0;\r\n}\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-size: 30px;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 0px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.user-img {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-size: 38px;\r\n\r\n}\r\n\r\nimg.open {\r\n  width: 17%;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n}\r\n\r\nimg.close-img {\r\n  width: 6%;\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 25px;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n  height: 2.375rem;\r\n  line-height: 2.375rem;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  color: #aaa;\r\n}\r\n\r\n.nav-links {\r\n  margin: 0;\r\n  padding: 0px;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  margin: 50px auto;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  /* padding: 10px; */\r\n  margin-left: calc(-50vw + 50%);\r\n  margin-right: calc(-50vw + 50%);\r\n  margin-top: calc(-50vw + 50%);\r\n}\r\n\r\n.grid-container>div {\r\n\r\n\r\n  text-align: Left;\r\n  font-size: 18.5px;\r\n  padding: 17px;\r\n\r\n\r\n}\r\n\r\n.grid-container:hover {\r\n  background-color: #EBEBEB;\r\n  text-decoration: none;\r\n}\r\n\r\nimg.nav-link-icon {\r\n  float: right;\r\n  /* text-align: right; */\r\n  /* display: flex; */\r\n}\r\n\r\n.nav-links-text {\r\n  color: black;\r\n  font-family: 'HelveticaNeueLight';\r\n}\r\n\r\ninput[type=text] {\r\n  /* float: right; */\r\n  padding: 15px;\r\n  border: 1px solid lightgrey;\r\n  /* margin-top: 8px; */\r\n  /* margin-right: 16px; */\r\n  font-size: 17px;\r\n  width: 87%;\r\n\r\n}\r\n\r\n.search-grid-conatiner {\r\n  display: grid;\r\n  grid-template-columns: 11fr;\r\n}\r\n\r\n.search-grid-conatiner>div {\r\n  font-size: 18.5px;\r\n  padding: 14px;\r\n  padding-top: 5px;\r\n  padding-bottom: 11px;\r\n  background-color: #FBF4EF;\r\n}\r\n\r\n.nav-link-icon-search {\r\n  width: 38px;\r\n  padding: 4px;\r\n  margin-top: -4px;\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n  height: 56.5px;\r\n}\r\n\r\ni.fa.fa-user {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\nspan.log-out-text {\r\n  font-size: 12px;\r\n  position: relative;\r\n  right: 12px;\r\n  margin-top: 5px;\r\n  text-transform: uppercase;\r\n  font-family: HelveticaNeueLight;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTs7QUFFckU7RUFDRSwrQkFBK0I7RUFDL0IsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBRVgsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUVYLHdCQUF3QjtFQUV4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhOzs7QUFHZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVOztBQUVaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlTGlnaHQ7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udC9IZWx2ZXRpY2FOZXVlTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtZGl2IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwcHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyMDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxOXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY0RUY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1sZWZ0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE5cHg7XHJcbiAgbGVmdDogMjBweDtcclxuICB3aWR0aDogMzZweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxubGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIHRvcDogMThweDsgKi9cclxuICBtYXJnaW4tdG9wOiA2LjJweDtcclxuXHJcbn1cclxuXHJcbmxhYmVsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4ubWVudS10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5tZW51LXRleHQ6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9nby1uYXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pbWdlLWxvZ28taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTRweDtcclxuICByaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuXHJcbn1cclxuXHJcbmltZy5vcGVuIHtcclxuICB3aWR0aDogMTclO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiA0cHg7XHJcbn1cclxuXHJcbmltZy5jbG9zZS1pbWcge1xyXG4gIHdpZHRoOiA2JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNnB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyLjM3NXJlbTtcclxuICBoZWlnaHQ6IDIuMzc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC01MHZ3ICsgNTAlKTtcclxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXI+ZGl2IHtcclxuXHJcblxyXG4gIHRleHQtYWxpZ246IExlZnQ7XHJcbiAgZm9udC1zaXplOiAxOC41cHg7XHJcbiAgcGFkZGluZzogMTdweDtcclxuXHJcblxyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5pbWcubmF2LWxpbmstaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbn1cclxuXHJcbi5uYXYtbGlua3MtdGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhTmV1ZUxpZ2h0JztcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIC8qIG1hcmdpbi10b3A6IDhweDsgKi9cclxuICAvKiBtYXJnaW4tcmlnaHQ6IDE2cHg7ICovXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiA4NyU7XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLWdyaWQtY29uYXRpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTFmcjtcclxufVxyXG5cclxuLnNlYXJjaC1ncmlkLWNvbmF0aW5lcj5kaXYge1xyXG4gIGZvbnQtc2l6ZTogMTguNXB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGNEVGO1xyXG59XHJcblxyXG4ubmF2LWxpbmstaWNvbi1zZWFyY2gge1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDU2LjVweDtcclxufVxyXG5cclxuaS5mYS5mYS11c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG5zcGFuLmxvZy1vdXQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUxpZ2h0O1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGg0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jb2xvci1zaWdudXAge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1sb2dpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLnRleHQtY2VudGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IG5vbmU7XHJcbiAgbGVmdDogbm9uZTtcclxuICByaWdodDogOXB4O1xyXG4gIHdpZHRoOiBub25lO1xyXG4gIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(authService, afs, // Inject Firestore service
      afAuth) {
        _classCallCheck(this, NavComponent);

        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.isLoggedIn = true;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this11.userData = user;
              localStorage.setItem("user", JSON.stringify(_this11.userData));

              _this11.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this11.LoggedOut();
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }, {
        key: "user",
        get: function get() {
          return this._user;
        },
        set: function set(value) {
          this._user = value;
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/ownaproperty/ownaproperty.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/ownaproperty/ownaproperty.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOwnapropertyOwnapropertyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.own-porpety-text {\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n.owna-property-text {\r\n  font-size: 18px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.own-property-list {\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  text-align: justify;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: medium;\r\n}\r\nul.own-property-list-style {\r\n  font-size: 15px;\r\n  text-align: justify;\r\n  list-style: none;\r\n}\r\n.own-property-image {\r\n  background-image: url(\"/assets/Images/image-new.png\");\r\n  height: 164px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.own-property-image-text {\r\n  position: absolute;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 21px;\r\n  text-transform: capitalize;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: medium;\r\n}\r\n.btn-own-property-offer {\r\n  width: 90%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n.own-property-home-worth {\r\n  background-color: white;\r\n}\r\n.own-property-text-home-worth {\r\n  text-align: left;\r\n  margin-bottom: .5em;\r\n  padding-left: 31px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-text-home-worth-ans {\r\n  text-align: left;\r\n  padding-left: 31px;\r\n  padding-right: 31px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-blog {\r\n  background-color: white;\r\n  padding-bottom: 5px;\r\n}\r\n.own-property-blog-heading {\r\n  font-size: 25px;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-blog-image {\r\n  width: 23%;\r\n  margin-right: 9px;\r\n  margin-left: 5px;\r\n}\r\n.own-property-blogs-content-c1 {\r\n  /* margin-right: 88px; */\r\n  text-align: left;\r\n  margin-bottom: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2 {\r\n  text-align: left;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n\r\n}\r\n.own-property-blogs-content-c1-2 {\r\n  text-align: left;\r\n  margin: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2-2 {\r\n  text-align: left;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n}\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 2px solid grey;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n.own-property-last-image {\r\n  width: -webkit-fill-available;\r\n}\r\n.own-property-last-image-text {\r\n  text-align: left;\r\n  margin-left: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  margin-top: 10px;\r\n}\r\n.own-property-last-line {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n}\r\nli {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-end;\r\n}\r\n.Looking-property-image {\r\n  background-image: url(\"/assets/Images/image-new2.png\");\r\n  height: 305px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.looking-property-image-text {\r\n  position: relative;\r\n  /* top: 227px; */\r\n  position: relative;\r\n  top: 76%;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 23px;\r\n  text-transform: capitalize;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.button-own-a-property {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duYXByb3BlcnR5L293bmFwcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHNEQUFzRDtFQUN0RCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vd25hcHJvcGVydHkvb3duYXByb3BlcnR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm93bi1wb3JwZXR5LXRleHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5vd25hLXByb3BlcnR5LXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWxpc3Qge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxufVxyXG5cclxudWwub3duLXByb3BlcnR5LWxpc3Qtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSW1hZ2VzL2ltYWdlLW5ldy5wbmdcIik7XHJcbiAgaGVpZ2h0OiAxNjRweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWltYWdlLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxufVxyXG5cclxuLmJ0bi1vd24tcHJvcGVydHktb2ZmZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktaG9tZS13b3J0aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktdGV4dC1ob21lLXdvcnRoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LXRleHQtaG9tZS13b3J0aC1hbnMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMxcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1ibG9nLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWJsb2ctaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMxIHtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDg4cHg7ICovXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn1cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMxLTIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ub3duLXByb3BlcnR5LWJsb2dzLWNvbnRlbnQtYzItMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaHIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWxhc3QtaW1hZ2Uge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWxhc3QtaW1hZ2UtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWxhc3QtbGluZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLkxvb2tpbmctcHJvcGVydHktaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSW1hZ2VzL2ltYWdlLW5ldzIucG5nXCIpO1xyXG4gIGhlaWdodDogMzA1cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG4ubG9va2luZy1wcm9wZXJ0eS1pbWFnZS10ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogdG9wOiAyMjdweDsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA3NiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5idXR0b24tb3duLWEtcHJvcGVydHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ownaproperty/ownaproperty.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ownaproperty/ownaproperty.component.ts ***!
    \********************************************************/

  /*! exports provided: OwnapropertyComponent */

  /***/
  function srcAppOwnapropertyOwnapropertyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnapropertyComponent", function () {
      return OwnapropertyComponent;
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

    var OwnapropertyComponent =
    /*#__PURE__*/
    function () {
      function OwnapropertyComponent(route) {
        _classCallCheck(this, OwnapropertyComponent);

        this.route = route;
      }

      _createClass(OwnapropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.params.subscribe(function (params) {
            _this12.useCase = params["use"];

            if (_this12.useCase == "buy") {
              _this12.activeTab = 0;
            } else if (_this12.useCase == "sell") {
              _this12.activeTab = 1;
            }

            console.log(_this12.useCase);
          });
        }
      }]);

      return OwnapropertyComponent;
    }();

    OwnapropertyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    OwnapropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-ownaproperty",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ownaproperty.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ownaproperty.component.css */
      "./src/app/ownaproperty/ownaproperty.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../common.css */
      "./src/app/common.css")).default]
    })], OwnapropertyComponent);
    /***/
  },

  /***/
  "./src/app/prefrences/prefrences.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/prefrences/prefrences.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrefrencesPrefrencesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".prefrences-main-div\r\n{\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.prefrence-notification\r\n{\r\n    background-color: white;\r\n    padding: 5px;\r\n}\r\n.prefrence-radio {\r\n    margin: 20px;\r\n}\r\n.notification-heading {\r\n    padding-top: 10px;\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n}\r\n.radio-text\r\n{\r\n    font-family: 'Roboto', sans-serif !important;\r\n    font-weight: 400;\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZnJlbmNlcy9wcmVmcmVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ByZWZyZW5jZXMvcHJlZnJlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZWZyZW5jZXMtbWFpbi1kaXZcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnByb3BlcnR5LWRldGFpbC1oM1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiBcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAwcHg7XHJcbn1cclxuLnByZWZyZW5jZS1ub3RpZmljYXRpb25cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnByZWZyZW5jZS1yYWRpbyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ucmFkaW8tdGV4dFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjpibGFjaztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/prefrences/prefrences.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/prefrences/prefrences.component.ts ***!
    \****************************************************/

  /*! exports provided: PrefrencesComponent */

  /***/
  function srcAppPrefrencesPrefrencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrefrencesComponent", function () {
      return PrefrencesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrefrencesComponent =
    /*#__PURE__*/
    function () {
      function PrefrencesComponent() {
        _classCallCheck(this, PrefrencesComponent);
      }

      _createClass(PrefrencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrefrencesComponent;
    }();

    PrefrencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prefrences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prefrences.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prefrences.component.css */
      "./src/app/prefrences/prefrences.component.css")).default]
    })], PrefrencesComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-main-container {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n  background-color: #EBEBEB;\r\n  padding-bottom: 60px;\r\n  margin: 0;\r\n}\r\n\r\n.Profile-pic {\r\n  width: 37%;\r\n\r\n}\r\n\r\np.profile-heading {\r\n  /* text-align: center; */\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  align-items: center;\r\n  font-size: 27px;\r\n  padding-top: 7px;\r\n}\r\n\r\n.profile-name-image {\r\n  display: flex;\r\n  /* justify-content: space-evenly; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.profile-name {\r\n  font-size: 25px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.profile-name-field-option {\r\n  background-color: white;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 3fr 4fr;\r\n  grid-gap: 10px;\r\n  padding: 0px;\r\n}\r\n\r\n.grid-container>div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n\r\n  padding: 0px 5px;\r\n\r\n}\r\n\r\n.fname-text1 {\r\n  font-size: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.fname-text2 {\r\n  font-size: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.fname-text3 {\r\n  font-size: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQzs7RUFFMUMsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DOztBQUV0QyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLlByb2ZpbGUtcGljIHtcclxuICB3aWR0aDogMzclO1xyXG5cclxufVxyXG5cclxucC5wcm9maWxlLWhlYWRpbmcge1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZS1maWVsZC1vcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNGZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyPmRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5cclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQxIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQyIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _forms_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../forms/forms.service */
    "./src/app/forms/forms.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(FormsService) {
        _classCallCheck(this, ProfileComponent);

        this.FormsService = FormsService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(localStorage.getItem("user"));
          console.log(this.user);

          if (this.user) {//
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileComponent.prototype, "Buyer", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../common.css */
      "./src/app/common.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/propertydetails/propertydetails.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/propertydetails/propertydetails.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPropertydetailsPropertydetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n    background-color: white;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.streetname {\r\n    /* display: flex; */\r\n    align-items: space-between;\r\n    /* text-align: left; */\r\n    /* justify-content: space-between; */\r\n    margin-left: 50px;\r\n    /* margin-right: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n.details-p-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n.details-output-p\r\n{\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    /* display: flex; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHlkZXRhaWxzL3Byb3BlcnR5ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7O0lBRzdCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eWRldGFpbHMvcHJvcGVydHlkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZGV0YWlsLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4ud3JhcHBlci1kZXRhaWwtY29udGFpbmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLnByb3BlcnR5LWRldGFpbC1oM1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAwcHg7XHJcbn1cclxuLnN0cmVldG5hbWUge1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cclxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmRldGFpbHMtb3V0cHV0LXBcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBSZWd1bGFyJztcclxufVxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uYnV0dG9uLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIFxyXG4gIFxyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnV0dG9uLWFza1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/propertydetails/propertydetails.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/propertydetails/propertydetails.component.ts ***!
    \**************************************************************/

  /*! exports provided: PropertydetailsComponent */

  /***/
  function srcAppPropertydetailsPropertydetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertydetailsComponent", function () {
      return PropertydetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PropertydetailsComponent =
    /*#__PURE__*/
    function () {
      function PropertydetailsComponent() {
        _classCallCheck(this, PropertydetailsComponent);
      }

      _createClass(PropertydetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PropertydetailsComponent;
    }();

    PropertydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-propertydetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./propertydetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./propertydetails.component.css */
      "./src/app/propertydetails/propertydetails.component.css")).default]
    })], PropertydetailsComponent);
    /***/
  },

  /***/
  "./src/app/requirementdetails/requirementdetails.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/requirementdetails/requirementdetails.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequirementdetailsRequirementdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n    background-color: white;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.streetname {\r\n    /* display: flex; */\r\n    align-items: space-between;\r\n    /* text-align: left; */\r\n    /* justify-content: space-between; */\r\n    margin-left: 50px;\r\n    /* margin-right: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    padding-top: 10px;\r\n}\r\n.details-p-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n   \r\n    font-size: 17px;\r\n    color: #00A8FF;\r\n}\r\n.details-output-p\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    /* display: flex; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWlyZW1lbnRkZXRhaWxzL3JlcXVpcmVtZW50ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOzs7SUFHN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZXF1aXJlbWVudGRldGFpbHMvcmVxdWlyZW1lbnRkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZGV0YWlsLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuLndyYXBwZXItZGV0YWlsLWNvbnRhaW5lclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcbi5zdHJlZXRuYW1lIHtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcclxuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjMDBBOEZGO1xyXG59XHJcbi5kZXRhaWxzLW91dHB1dC1wXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uYnV0dG9uLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIFxyXG4gIFxyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnV0dG9uLWFza1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/requirementdetails/requirementdetails.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/requirementdetails/requirementdetails.component.ts ***!
    \********************************************************************/

  /*! exports provided: RequirementdetailsComponent */

  /***/
  function srcAppRequirementdetailsRequirementdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequirementdetailsComponent", function () {
      return RequirementdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RequirementdetailsComponent =
    /*#__PURE__*/
    function () {
      function RequirementdetailsComponent() {
        _classCallCheck(this, RequirementdetailsComponent);
      }

      _createClass(RequirementdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RequirementdetailsComponent;
    }();

    RequirementdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requirementdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./requirementdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./requirementdetails.component.css */
      "./src/app/requirementdetails/requirementdetails.component.css")).default]
    })], RequirementdetailsComponent);
    /***/
  },

  /***/
  "./src/app/selectedpropertydetail/selectedpropertydetail.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/selectedpropertydetail/selectedpropertydetail.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectedpropertydetailSelectedpropertydetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n    background-color: white;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.streetname {\r\n    /* display: flex; */\r\n    align-items: space-between;\r\n    /* text-align: left; */\r\n    /* justify-content: space-between; */\r\n    margin-left: 50px;\r\n    /* margin-right: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n   \r\n    font-size: 17px;\r\n    color: #00A8FF;\r\n}\r\n.details-output-p\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    /* display: flex; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0ZWRwcm9wZXJ0eWRldGFpbC9zZWxlY3RlZHByb3BlcnR5ZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7OztJQUc3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGVkcHJvcGVydHlkZXRhaWwvc2VsZWN0ZWRwcm9wZXJ0eWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4uc3RyZWV0bmFtZSB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uZGV0YWlscy1wLWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzAwQThGRjtcclxufVxyXG4uZGV0YWlscy1vdXRwdXQtcFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBcclxuICBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG4tY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ1dHRvbi1hc2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/selectedpropertydetail/selectedpropertydetail.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SelectedpropertydetailComponent */

  /***/
  function srcAppSelectedpropertydetailSelectedpropertydetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedpropertydetailComponent", function () {
      return SelectedpropertydetailComponent;
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


    var _selectedpropertydetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./selectedpropertydetail.service */
    "./src/app/selectedpropertydetail/selectedpropertydetail.service.ts");

    var SelectedpropertydetailComponent =
    /*#__PURE__*/
    function () {
      function SelectedpropertydetailComponent(SelectedpropertydetailService) {
        _classCallCheck(this, SelectedpropertydetailComponent);

        this.SelectedpropertydetailService = SelectedpropertydetailService;
        this.isLoading = false;
        this.propertyDetails = [];
      }

      _createClass(SelectedpropertydetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.SelectedpropertydetailService.getSellerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this13.propertyDetails.push(element.data());
            });
            console.log(_this13.propertyDetails);
          });
        }
      }]);

      return SelectedpropertydetailComponent;
    }();

    SelectedpropertydetailComponent.ctorParameters = function () {
      return [{
        type: _selectedpropertydetail_service__WEBPACK_IMPORTED_MODULE_2__["SelectedpropertydetailService"]
      }];
    };

    SelectedpropertydetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selectedpropertydetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selectedpropertydetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selectedpropertydetail.component.css */
      "./src/app/selectedpropertydetail/selectedpropertydetail.component.css")).default]
    })], SelectedpropertydetailComponent);
    /***/
  },

  /***/
  "./src/app/selectedpropertydetail/selectedpropertydetail.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/selectedpropertydetail/selectedpropertydetail.service.ts ***!
    \**************************************************************************/

  /*! exports provided: SelectedpropertydetailService */

  /***/
  function srcAppSelectedpropertydetailSelectedpropertydetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedpropertydetailService", function () {
      return SelectedpropertydetailService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var SelectedpropertydetailService =
    /*#__PURE__*/
    function () {
      function SelectedpropertydetailService(db) {
        _classCallCheck(this, SelectedpropertydetailService);

        this.db = db;
        this.customersRef = db.collection("Seller");
      }

      _createClass(SelectedpropertydetailService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.customersRef.doc(uid).collection("properties").ref.get();
        }
      }]);

      return SelectedpropertydetailService;
    }();

    SelectedpropertydetailService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SelectedpropertydetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SelectedpropertydetailService);
    /***/
  },

  /***/
  "./src/app/sellerform/seller.ts":
  /*!**************************************!*\
    !*** ./src/app/sellerform/seller.ts ***!
    \**************************************/

  /*! exports provided: Seller */

  /***/
  function srcAppSellerformSellerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Seller", function () {
      return Seller;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Seller = function Seller() {
      _classCallCheck(this, Seller);

      this.Title = "Mr";
      this.Country = "India";
      this.PropertyType = "Terrace House";
      this.ownership = "Freehold";
      this.active = true;
      this.ExpectedAmount = 50000;
    };
    /***/

  },

  /***/
  "./src/app/sellerform/sellerform.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/sellerform/sellerform.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSellerformSellerformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-containers {\r\n\r\n  width: auto;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.forms-container {\r\n\r\n  padding-bottom: 4%;\r\n  padding-top: 1%;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.tab-content {\r\n  padding: 20px;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden;\r\n}\r\n\r\nnav {\r\n  background-color: #244D93;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  border-radius: 11px;\r\n  margin-top: 62px;\r\n\r\n}\r\n\r\n.nav-link {\r\n  color: white;\r\n}\r\n\r\n.nav-tabs .nav-item.show .nav-link,\r\n.nav-tabs .nav-link.active {\r\n  color: #244D93;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.other-option {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0rem 1rem;\r\n\r\n}\r\n\r\ndiv#nav-tabContent {\r\n  width: auto;\r\n}\r\n\r\n.seller-form-upper {\r\n  padding-top: 6px;\r\n}\r\n\r\n.seller-form-upper p {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.seller-form-upper span {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.top-hr {\r\n  margin-top: -1rem;\r\n  margin-bottom: 0rem;\r\n  border: 0;\r\n  border-top: 2px solid grey\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n\r\n  margin-left: .255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: .4em solid;\r\n  border-right: .4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: .4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n/* span.text-dropdown {\r\n    float: left;\r\n} */\r\n\r\n.dropdown-item {\r\n  text-align: center;\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n  /* border: 1px solid grey; */\r\n  border: 1px solid #CED4DA;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  background-color: #244D93;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.second-container {\r\n  background-color: white;\r\n\r\n}\r\n\r\ninput#Tittle {\r\n  width: 100%;\r\n}\r\n\r\n.forms-heading {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n}\r\n\r\n.forms-star {\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nlabel {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #707070;\r\n}\r\n\r\n.dropdown-item {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #707070;\r\n}\r\n\r\n.form-or-p {\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 26px;\r\n  /* padding: 8px; */\r\n  background: #fff;\r\n  border: 1px solid black;\r\n  color: #666;\r\n  text-align: center;\r\n  font: 19px 'Open Sans', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.forms-or {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.form-or-p:before,\r\n.form-or-p:after {\r\n  background-color: #333;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 1px;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n\r\n.form-or-p:before {\r\n  right: .5em;\r\n  margin-left: -100%;\r\n}\r\n\r\n.form-or-p:after {\r\n  left: .5em;\r\n  margin-right: -100%;\r\n}\r\n\r\nbtnDefault,\r\n.btnUpload {\r\n  background-color: lightgrey;\r\n  border: 1px solid #CCCCCC;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  font-weight: 400;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btnDefault:focus,\r\n.btnDefault:hover,\r\n.btnUpload:focus,\r\n.btnUpload:hover {\r\n  background-color: grey;\r\n}\r\n\r\n.btnM {\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  padding: 6px 12px;\r\n}\r\n\r\n.customUpload {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.customUpload input.upload {\r\n  cursor: pointer;\r\n  margin: 0;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  padding: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.forms-heading-optional {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n\r\n  padding-left: 16px;\r\n}\r\n\r\n.optional-button-group {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-top: 40px;\r\n}\r\n\r\n.row-check {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checkbox-check {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n\r\n}\r\n\r\n.radio-main-container {\r\n  justify-content: space-between;\r\n  /* margin: 0; */\r\n  /* padding: 0; */\r\n\r\n  align-content: center;\r\n}\r\n\r\n.submit-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-top: 16px;\r\n}\r\n\r\n.step.finish {\r\n  background-color: #244D93\r\n}\r\n\r\na.nav-link.disabled {\r\n\r\n  color: white;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.tabs-align-padding {\r\n \r\n  padding: 17px;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.tabs-align-padding {\r\n \r\n  padding: 17px;\r\n}\r\n\r\n.mat-tab-group.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.tab-pane {\r\n  background: white;\r\n \r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 20px !important;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n}\r\n\r\n.Line-form\r\n{\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyZm9ybS9zZWxsZXJmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVDtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUNIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhOztBQUVmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtBQUN2Qjs7QUFJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1COztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlcmZvcm0vc2VsbGVyZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVycyB7XHJcblxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmZvcm1zLWNvbnRhaW5lciB7XHJcblxyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxubmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgbWFyZ2luLXRvcDogNjJweDtcclxuXHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMyNDREOTM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZWUyZTYgI2RlZTJlNiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdGhlci1vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcblxyXG59XHJcblxyXG5kaXYjbmF2LXRhYkNvbnRlbnQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2VsbGVyLWZvcm0tdXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZWxsZXItZm9ybS11cHBlciBwIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VsbGVyLWZvcm0tdXBwZXIgc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50b3AtaHIge1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbG9yLXNpZ251cCB7XHJcbiAgY29sb3I6ICMyNDREOTM7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG5idXR0b24uYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAuMjU1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246IDIuMjU1ZW07XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItdG9wOiAuNGVtIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi8qIHNwYW4udGV4dC1kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufSAqL1xyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0VENERBO1xyXG59XHJcblxyXG4uZW5kaW5kLWJ1dHRvbiB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJhY2sge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5vci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaW5wdXQjVGl0dGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm1zLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZvcm1zLXN0YXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLmZvcm0tb3ItcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICAvKiBwYWRkaW5nOiA4cHg7ICovXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjb2xvcjogIzY2NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogMTlweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLmZvcm1zLW9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1vci1wOmJlZm9yZSxcclxuLmZvcm0tb3ItcDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tb3ItcDpiZWZvcmUge1xyXG4gIHJpZ2h0OiAuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcclxufVxyXG5cclxuLmZvcm0tb3ItcDphZnRlciB7XHJcbiAgbGVmdDogLjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xyXG59XHJcblxyXG5idG5EZWZhdWx0LFxyXG4uYnRuVXBsb2FkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYnRuRGVmYXVsdDpmb2N1cyxcclxuLmJ0bkRlZmF1bHQ6aG92ZXIsXHJcbi5idG5VcGxvYWQ6Zm9jdXMsXHJcbi5idG5VcGxvYWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5idG5NIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG59XHJcblxyXG4uY3VzdG9tVXBsb2FkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmN1c3RvbVVwbG9hZCBpbnB1dC51cGxvYWQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZm9ybXMtaGVhZGluZy1vcHRpb25hbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5vcHRpb25hbC1idXR0b24tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnJvdy1jaGVjayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY2hlY2sge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnJhZGlvLWFsaWduIHtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5yYWRpby1tYWluLWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8qIG1hcmdpbjogMDsgKi9cclxuICAvKiBwYWRkaW5nOiAwOyAqL1xyXG5cclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnN0ZXAuZmluaXNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzXHJcbn1cclxuXHJcbmEubmF2LWxpbmsuZGlzYWJsZWQge1xyXG5cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idXR0b24tbmV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1uZXh0LXRhYjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubWF0LW1haWwtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4udGFicy1hbGlnbi1wYWRkaW5nIHtcclxuIFxyXG4gIHBhZGRpbmc6IDE3cHg7XHJcbn1cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3BhY2l0eTogLjY7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1iZWZvcmUubWF0LWVsZXZhdGlvbi16NC5tYXQtcmlwcGxlLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi50YWJzLWFsaWduLXBhZGRpbmcge1xyXG4gXHJcbiAgcGFkZGluZzogMTdweDtcclxufVxyXG4ubWF0LXRhYi1ncm91cC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tYmVmb3JlLm1hdC1lbGV2YXRpb24tejQubWF0LXJpcHBsZS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50YWItcGFuZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiBcclxufVxyXG4uc29jaWFsLWxvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LXRhYi1sYWJlbCB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLkxpbmUtZm9ybVxyXG57XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxufVxyXG4ubWF0LW9wdGlvbiB7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLm1hdC1vcHRpb24gaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcblxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sellerform/sellerform.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/sellerform/sellerform.component.ts ***!
    \****************************************************/

  /*! exports provided: SellerformComponent */

  /***/
  function srcAppSellerformSellerformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerformComponent", function () {
      return SellerformComponent;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _seller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./seller */
    "./src/app/sellerform/seller.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SellerformComponent =
    /*#__PURE__*/
    function () {
      function SellerformComponent(authService, afs, // Inject Firestore service
      afAuth, router, stateService, sellerService) {
        _classCallCheck(this, SellerformComponent);

        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.stateService = stateService;
        this.sellerService = sellerService;
        this.addressianAutoComplete$ = null;
        this.autoCompleteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.isLoggedIn = true;
        this.Seller = new _seller__WEBPACK_IMPORTED_MODULE_4__["Seller"]();
        this.submitted = false;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.FirstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.LastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.EmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)]);
        this.noroomsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2)]);
        this.DOBFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
      }

      _createClass(SellerformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this14.userData = user;
              localStorage.setItem("user", JSON.stringify(_this14.userData));
              JSON.parse(localStorage.getItem("user"));

              _this14.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this14.LoggedOut();
            }
          }); // The auto population of github method

          this.addressianAutoComplete$ = this.autoCompleteControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (value) {
            if (value !== "") {
              _this14.lookup(_this14.Seller.postcode).subscribe(function (data) {
                _this14.data = data;
              });

              return _this14.lookup(_this14.Seller.postcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            }
          })); // End method
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }, {
        key: "newCustomer",
        value: function newCustomer() {
          this.submitted = false;
          this.Seller = new _seller__WEBPACK_IMPORTED_MODULE_4__["Seller"]();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // Get Seller variable into local scope for html
          this.stateService.Seller = this.Seller;
          this.router.navigate(["confirmation"]);
        }
      }, {
        key: "lookup",
        value: function lookup(value) {
          return this.sellerService.search(value);
        }
      }, {
        key: "getPosts",
        value: function getPosts(value) {
          this.Seller.Address = value.address;
          this.Seller.Town = value.citytown;
          this.Seller.state = value.county;
          this.Seller.postcode = value.postcode;
          console.log(value);
        }
      }]);

      return SellerformComponent;
    }();

    SellerformComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_8__["StateServiceService"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"]
      }];
    };

    SellerformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sellerform",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sellerform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sellerform.component.css */
      "./src/app/sellerform/sellerform.component.css")).default]
    })], SellerformComponent);
    /***/
  },

  /***/
  "./src/app/sellerform/sellerform.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/sellerform/sellerform.service.ts ***!
    \**************************************************/

  /*! exports provided: SellerformService */

  /***/
  function srcAppSellerformSellerformServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerformService", function () {
      return SellerformService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var SellerformService =
    /*#__PURE__*/
    function () {
      function SellerformService(db) {
        _classCallCheck(this, SellerformService);

        this.db = db;
        this.dbPath = "/Seller";
        this.customersRef = null;
        this.customersRef = db.collection(this.dbPath);
      }

      _createClass(SellerformService, [{
        key: "createCustomer",
        value: function createCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.customersRef.doc(key).collection("properties").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context8.sent;
                    return _context8.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(key, value) {
          return this.customersRef.doc(key).update(value);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(key) {
          return this.customersRef.doc(key).delete();
        }
      }, {
        key: "getCustomersList",
        value: function getCustomersList() {
          return this.customersRef;
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          this.customersRef.get().subscribe(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          }, function (error) {
            console.log("Error: ", error);
          });
        }
      }]);

      return SellerformService;
    }();

    SellerformService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SellerformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SellerformService);
    /***/
  },

  /***/
  "./src/app/sellermatches/sellermatches.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/sellermatches/sellermatches.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSellermatchesSellermatchesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    height: 150px;\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    /* align-content: flex-start; */\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n.match-images {\r\n    margin-top: 18px;\r\n    margin-right: 9px;\r\n    width: 33%;\r\n}\r\n.match-content {\r\n    padding-top: 26px;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    text-transform: capitalize;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: medium;\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        /* margin-top: 14px; */\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVybWF0Y2hlcy9zZWxsZXJtYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7OzhHQUU4RztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBVUE7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVybWF0Y2hlcy9zZWxsZXJtYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLm1hdGNoLWltYWdlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB3aWR0aDogMzMlO1xyXG59XHJcbi5tYXRjaC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGlzY3JpcHRpb24tcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYWluLWhlYWRpbmdcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxyXG57XHJcbiAgICAubWF0Y2gtaW1hZ2VzIHtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNCU7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sellermatches/sellermatches.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/sellermatches/sellermatches.component.ts ***!
    \**********************************************************/

  /*! exports provided: SellermatchesComponent */

  /***/
  function srcAppSellermatchesSellermatchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellermatchesComponent", function () {
      return SellermatchesComponent;
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


    var _sellermatches_sellermatches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sellermatches/sellermatches.service */
    "./src/app/sellermatches/sellermatches.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-service.service */
    "./src/app/state-service.service.ts");

    var SellermatchesComponent =
    /*#__PURE__*/
    function () {
      function SellermatchesComponent(SellermatchesService, stateService) {
        _classCallCheck(this, SellermatchesComponent);

        this.SellermatchesService = SellermatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
      }

      _createClass(SellermatchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.SellermatchesService.getSellerProperties(this.uid).subscribe(function (res) {
            res.forEach(function (item) {
              if (item.data().postcode.postcode == _this15.stateService.Seller.postcode.postcode) {
                _this15.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().latitude && item.data().longitude) {
                console.log(item.data().postcode.latitude);
                _this15.distanceInKm = _this15.getDistanceFromLatLonInKm(_this15.stateService.Seller.latitude, _this15.stateService.Seller.longitude, item.data().latitude, item.data().longitude);

                _this15.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this15.distanceInKm
                });

                console.log({
                  detail: item.data(),
                  distance: _this15.distanceInKm
                });
              } else {
                _this15.unmatchedProperties.push(item.data()); // console.log({ detail: item.data() });

              }
            });

            _this15.unmatchedProperties.sort(_this15.compare);

            console.log(_this15.matchedProperties);
          });
        }
      }, {
        key: "getDistanceFromLatLonInKm",
        value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km

          var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

          var dLon = this.deg2rad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km

          return d;
        }
      }, {
        key: "deg2rad",
        value: function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }
      }, {
        key: "compare",
        value: function compare(a, b) {
          var distA = a.distance;
          var distB = b.distance;
          var comparison = 0;

          if (distA > distB) {
            comparison = 1;
          } else if (distA < distB) {
            comparison = -1;
          }

          return comparison;
        }
      }]);

      return SellermatchesComponent;
    }();

    SellermatchesComponent.ctorParameters = function () {
      return [{
        type: _sellermatches_sellermatches_service__WEBPACK_IMPORTED_MODULE_2__["SellermatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    SellermatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sellermatches",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sellermatches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sellermatches.component.css */
      "./src/app/sellermatches/sellermatches.component.css")).default]
    })], SellermatchesComponent);
    /***/
  },

  /***/
  "./src/app/sellermatches/sellermatches.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/sellermatches/sellermatches.service.ts ***!
    \********************************************************/

  /*! exports provided: SellermatchesService */

  /***/
  function srcAppSellermatchesSellermatchesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellermatchesService", function () {
      return SellermatchesService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var SellermatchesService =
    /*#__PURE__*/
    function () {
      function SellermatchesService(db) {
        _classCallCheck(this, SellermatchesService);

        this.db = db; // Collection Group

        this.propertiesRef = db.collectionGroup("requirements");
      }

      _createClass(SellermatchesService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.propertiesRef.get();
        }
      }]);

      return SellermatchesService;
    }();

    SellermatchesService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SellermatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SellermatchesService);
    /***/
  },

  /***/
  "./src/app/state-service.service.ts":
  /*!******************************************!*\
    !*** ./src/app/state-service.service.ts ***!
    \******************************************/

  /*! exports provided: StateServiceService */

  /***/
  function srcAppStateServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateServiceService", function () {
      return StateServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StateServiceService = function StateServiceService() {
      _classCallCheck(this, StateServiceService);
    };

    StateServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], StateServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyAAyKY3KkG0l5LNzd1SDfOaF1FMpHWW0FA",
        authDomain: "streethook-d1b9a.firebaseapp.com",
        databaseURL: "https://streethook-d1b9a.firebaseio.com",
        projectId: "streethook-d1b9a",
        storageBucket: "streethook-d1b9a.appspot.com",
        messagingSenderId: "462416760955",
        appId: "1:462416760955:web:20980765f71edeefe292de"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\God\Desktop\streethok\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map