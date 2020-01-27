(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  Thank You,Your Details Have Been Stored\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\" routerLink=\"/sellermatches\">{{cancelButtonText}}</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  Thank You,Your Details Have Been Stored\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\"\n    routerLink=\"/matches\">{{cancelButtonText}}</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<!-- <app-dashboard></app-dashboard> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n\n<div class=\"container confirm-main-container\">\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Personal Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Name:\n            <span class=\"output\">&nbsp;{{ Buyer.Firstname }} {{ Buyer.Lastname }}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{Buyer.Email}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{Buyer.DOB}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Chain status:<span class=\"output\">&nbsp;{{Buyer.ChainStatus}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Financial Position:<span\n              class=\"output\">&nbsp;{{Buyer.FinancialPosition}}</span></td>\n\n        </tr>\n\n      </tbody>\n    </table>\n\n  </div>\n\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Property Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Property Type:\n            <span class=\"output\">&nbsp;{{Buyer.Propertytype}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Search Radius:<span class=\"output\">&nbsp;{{Buyer.SearchRadius}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Price Range:<span class=\"output\">&nbsp;{{Buyer.PriceRange}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Offer validity:<span class=\"output\">&nbsp;{{Buyer.Validity}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Property Condition:<span class=\"output\">&nbsp;{{Buyer.Condition}}</span></td>\n\n        </tr>\n\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Operational Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Type:\n            <span class=\"output\">&nbsp;{{Buyer.Type}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Position:<span class=\"output\">&nbsp; {{Buyer.Position}}</span></td>\n\n        </tr>\n\n\n      </tbody>\n    </table>\n\n  </div>\n\n\n  <div class=\"endind-button mt-5\">\n    <button type=\"button\" class=\"btn btn-back\">Back</button>\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\" >Submit</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container chats-main-container\">\n   <div class=\"wrapper-chat-container\">\n    <h3 class=\"property-detail-h3\">My Chats</h3>\n      <div class=\"chat-container\">\n          <img src=\"/assets/Images/Henrik_Urdal-removebg-preview.png\">\n          <p class=\"chat-p\">Jhon doe<br>\n         <span class=\"user-class\">Seller</span></p>\n      </div>\n\n\n   </div>\n\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Top navigation -->\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/register-student\">\n    <img\n      class=\"brand-logo\"\n      src=\"assets/Images/logo.png\"\n      alt=\"positronX.io Logo\"\n    />\n    <span class=\"dasboard-text\">Dashboard</span>\n  </a>\n</nav>\n<!-- Sidebar navigation -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">\n              <i class=\"fas fa-user\"></i>User Profile\n            </a>\n          </li>\n          <!-- Calling SignOut() Api from AuthService -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"authService.GoogleAuth()\">\n              <i class=\"fas fa-sign-out-alt\"></i>Log in\n            </a>\n          </li>\n          <!-- Calling SignOut() Api from AuthService -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <!-- Main content -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"inner-adjust\">\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\n          <h1 class=\"h2\">User Profile</h1>\n        </div>\n        <!-- Show user data when logged in -->\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <img\n                class=\"align-self-start mr-5 img-thumbnail rounded-circle\"\n                src=\"{{\n                  user.photoURL ? user.photoURL : '/assets/dummy-user.png'\n                }}\"\n                alt=\"{{ user.displayName }}\"\n              />\n              <div class=\"media-body\">\n                <h1>\n                  Hello:\n                  <strong>{{\n                    user.displayName ? user.displayName : \"User\"\n                  }}</strong>\n                </h1>\n                <p>\n                  User ID: <strong>{{ user.uid }}</strong>\n                </p>\n                <p>\n                  Email: <strong>{{ user.email }}</strong>\n                </p>\n                <p>\n                  Email Verified: <strong>{{ user.emailVerified }}</strong>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n      <div class=\"authBlock text-center mt-3\">\n        <h4 >Reset Password</h4>\n  \n        <p class=\"text-center p-3\">Please enter your email address to request a password reset.</p>\n        <div class=\"input-group p-4\">\n         \n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\"   #passwordResetEmail required>\n      </div>\n      \n  \n        <!-- Calling ForgotPassword from AuthService Api -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn btn-social-login\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\n      \n        </div>\n      </div>\n  \n      <div class=\"redirectToLogin text-center\">\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n      </div>\n  \n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"social-login text-center\" >\n    <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n    <div class=\"social-button mt-4\">\n    <button type=\"button\" class=\"btn btn-facebook \"  (click)=\"authService.FacebookAuth()\">Facebook</button>\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">Google+</button>\n    </div>\n    <form action=\"\">\n    <div class=\"input-group mb-3 mt-3\">\n        <div class=\"input-group-prepend\">\n            <!-- <i class=\"fa fa-user input-group-text nav-login-form\" aria-hidden=\"true\"></i> -->\n        </div>\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\"  #userEmail required>\n    </div>\n\n    <div class=\"input-group-prepend\">\n        <!-- <i class=\"fa fa-lock input-group-text nav-login-form-password\" aria-hidden=\"true\"></i> -->\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  name=\"password\"\n             #userPassword required>\n    </div>\n\n    <div class=\"input-group-prepend other-option\">\n        <!-- <label class=\"checkbox\">\n            <input type=\"checkbox\" value=\"remember-me\">Remember Me\n        </label> -->\n        <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\n    </div>\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value,userPassword.value)\">Login</button>\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value,userPassword.value)\">Sign Up</button>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n  \n      <div class=\"authBlock\">\n        <h4 class=\"text-center mt-3\">Thank You for Registering</h4>\n  \n        <div class=\"formGroup p-3\" *ngIf=\"authService.userData as user\">\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n        </div>\n        \n        <!-- Calling SendVerificationMail() method using authService Api -->\n        <div class=\"formGroup\">\n        \n          <p class=\"text-center\" (click)=\"authService.SendVerificationMail()\">Resend Verification Email</p>  \n         \n        </div>\n  \n      </div>\n  \n      <!-- <div class=\"redirectToLogin text-center\">\n        <span class=\"text-center\">Go back to?<span class=\"redirect text-center\" routerLink=\"/sign-in\"> Sign in</span></span>\n      </div> -->\n  \n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"container confirm-main-container\">\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Personal Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Name:\n            <span class=\"output\">&nbsp;{{Seller.Firstname}} {{Seller.Lastname}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{Seller.Email}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{Seller.DOB}}</span></td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Property Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Property Type:\n            <span class=\"output\">&nbsp;{{Seller.PropertyType}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">No of Rooms:<span class=\"output\">&nbsp; {{Seller.norooms}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Expected Amount (Offer):<span\n              class=\"output\">&nbsp;{{Seller.ExpectedAmount}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Ownership:<span class=\"output\">&nbsp;{{Seller.ownership}}</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Property Condition:<span\n              class=\"output\">&nbsp;{{Seller.PropertyCondition}}</span></td>\n\n        </tr>\n\n        <tr>\n          <td class=\"details-p-headings\"> Applicable Features:<span\n              class=\"output\">&nbsp;{{Seller.ApplicableFeatures}}</span></td>\n\n        </tr>\n\n\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"confirm-first-container mt-3\">\n    <p class=\"confirm-page-heading\">Operational Details</p>\n    <table class=\"table\">\n\n      <tbody>\n        <tr>\n          <td class=\"details-p-headings\">Type:\n            <span class=\"output\">&nbsp;Buying As Investment</span></td>\n\n        </tr>\n        <tr>\n          <td class=\"details-p-headings\">Position:<span class=\"output\">&nbsp; Mortage Free</span></td>\n\n        </tr>\n\n\n      </tbody>\n    </table>\n\n  </div>\n\n\n  <div class=\"endind-button mt-5\">\n    <button type=\"button\" class=\"btn btn-back\">Back</button>\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container profile-main-container\">\n    <div class=\"profile-wrapper-content\">\n        <p class=\"profile-heading\">My Profile</p>\n        <div class=\"profile-name-image mt-4\">\n            <img src=\"/assets/Images/profilepic.jpeg\" class=\"rounded-circle Profile-pic\" alt=\"Cinque Terre\">\n            <p class=\"profile-name\">Mr.John Doe</p>\n        </div>\n    </div>\n<div class=\"profile-name-field-option\">\n    <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">First Name</p></div>\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"fname\"></p></div>\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \n      </div>\n      <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">Last Name</p></div>\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"lname\"></p></div>\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \n      </div>\n      <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">Phone No</p></div>\n        <div ><p class=\"fname-text2\"><input type=\"number\" class=\"form-control\" id=\"number\"></p></div>\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \n      </div>\n      <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">Email Id</p></div>\n        <div ><p class=\"fname-text2\"><input type=\"email\" class=\"form-control\" id=\"date\"></p></div>\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \n      </div>\n      <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">Date of Birth</p></div>\n        <div ><p class=\"fname-text2\"><input type=\"date\" class=\"form-control\" id=\"date\"></p></div>\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \n      </div>\n      <div class=\"grid-container\">\n        <div><p class=\"fname-text1\">Password</p></div>\n        <div ><p class=\"fname-text2\">*******</p></div>\n  \n      </div>\n</div>\n\n<div class=\"edit-profile-submitbutton\">\n<button type=\"button\" class=\"btn btn-back\">BACK</button>\n<button type=\"button\" class=\"btn btn-back\">SUBMIT</button>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n    <div class=\"footer\">\n<div class=\"image-social\">\n<img src=\"/assets/Images/facebook.png\"  class=\"facebook-icon\">\n<img src=\"/assets/Images/twitter.png\" class=\"twitter-icon\" >\n<img src=\"/assets/Images/instagram.png\" class=\"instagram-icon\">\n</div>\n    </div>\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n\t<p>\n\t\t{{message}}\n\t</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n\t<button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" tabindex=\"1\">{{confirmButtonText}}</button>\n\t<button mat-raised-button mat-dialog-close tabindex=\"-1\">{{cancelButtonText}}</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\n  <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n  <div class=\"social-button mt-4\">\n    <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\n      Facebook\n    </button>\n    <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\n      Google+\n    </button>\n  </div>\n  <div class=\"input-group mb-3 mt-3\">\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\n    </mat-form-field>\n\n  </div>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\n  </mat-form-field>\n\n  <div class=\"input-group-prepend other-option\">\n    <label class=\"checkbox\">\n      <input type=\"checkbox\" value=\"remember-me\" />Remember Me\n    </label>\n    <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\n  </div>\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\n    Login\n  </button>\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\n    Sign Up\n  </button>\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\n  <mat-tab-group #matgroup class=\"form-tab-conatiner\">\n    <mat-tab label=\"Personal Details \" class=\"tabs-align-padding\">\n      <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\n        <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\n        <p class=\"forms-star\">*required</p>\n\n\n        <mat-form-field>\n          <mat-label>Title*</mat-label>\n          <mat-select name=\"title\" [(ngModel)]=\"Buyer.title\" class=\"drop-down-list\">\n            <mat-option value=\"Mr\">Mr</mat-option>\n            <mat-option value=\"Ms\">Ms</mat-option>\n            <mat-option value=\"Mrs\">Mrs</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"First Name\" [formControl]=\"firstnameFormControl\" id=\"name\" required\n            [(ngModel)]=\"Buyer.firstname\" name=\"First\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"firstnameFormControl.hasError('First Name') && !firstnameFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"firstnameFormControl.hasError('required')\">\n            FirstName is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"LastName\" [formControl]=\"lastnameFormControl\" id=\"name\" required\n            [(ngModel)]=\"Buyer.Lastname\" name=\"Last\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"lastnameFormControl.hasError('LastName') && !lastnameFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"lastnameFormControl.hasError('required')\">\n            LastName is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" id=\"name\" [(ngModel)]=\"Buyer.Email\"\n            name=\"Email\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" id=\"name\" required\n            [(ngModel)]=\"Buyer.DOB\" name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Financial Position*</mat-label>\n          <mat-select name=\"FinancialPosition\" [(ngModel)]=\"Buyer.FinancialPosition\" value=\"FinancialPosition\"\n            class=\"example-full-width\">\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\n            <mat-option value=\"Mortgage to be Arranged\">Mortgage to be Arranged</mat-option>\n            <mat-option value=\"Mortgage Arrange\">Mortgage Arrange</mat-option>\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Chain Status*</mat-label>\n          <mat-select name=\"ChainStatus\" [(ngModel)]=\"Buyer.ChainStatus\" value=\"ChainStatus\" class=\"example-full-width\">\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\n            <mat-option value=\"In Chain(Sellinng to buy)\">In Chain(Sellinng to buy)</mat-option>\n            <mat-option value=\"Chain-Free\">Chain-Free</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <div class=\"button-next\">\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n        </div>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Property Details\" class=\"tabs-align-padding\">\n      <div class=\"tabs-align-padding\">\n\n     \n\n        <p>Search by Address</p>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" [(ngModel)]=\"Buyer.Address\"\n            name=\"Addressname\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\n            Please enter a valid address\n          </mat-error>\n          <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\n            Address is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Buyer.Town\"\n            name=\"Towncity\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\n            Please enter a valid Town/City\n          </mat-error>\n          <mat-error *ngIf=\"TownFormControl.hasError('required')\">\n            Town/City is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"State/Provience/Country\" [formControl]=\"stateFormControl\" required\n            [(ngModel)]=\"Buyer.state\" name=\"state\" id=\"name\" class=\"mat-mail-input\"  (keyup)=\"changeMyControl()\">\n          <!-- <mat-error\n            *ngIf=\"stateFormControl.hasError('State/Provience/Country') && !stateFormControl.hasError('required')\">\n            Please enter a valid State/Provience/Country\n          </mat-error>\n          <mat-error *ngIf=\"stateFormControl.hasError('required')\">\n            State/Provience/Country is <strong>required</strong>\n          </mat-error> -->\n        </mat-form-field>\n\n   \n        <form [formGroup]=\"form\">\n\n          <mat-form-field class=\"example-full-width\" >\n              <input type=\"text\" placeholder=\"Postcode\" matInput formControlName=\"project\" [matAutocomplete]=\"projectAutoComplete\" [(ngModel)]=\"Buyer.postcode\">\n              <mat-autocomplete #projectAutoComplete=\"matAutocomplete\" [displayWith]=\"displayWith\">\n                  <mat-option *ngFor=\"let project of projects\" [value]=\"project\">\n                    <span>{{project.postcode}} </span>&nbsp;\n                    <span> {{project.latitude}} </span> |\n                    <span> {{project.longitude}}</span>\n                  </mat-option>\n              </mat-autocomplete>\n      \n              <mat-error *ngIf=\"form.controls['project'].hasError('required')\">\n                  Please enter a value\n              </mat-error>\n      \n              <mat-error *ngIf=\"form.controls['project'].hasError('incorrect')\">\n              select postcode from list    \n              </mat-error>\n          </mat-form-field>\n      \n      </form>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Country*</mat-label>\n          <mat-select name=\"Country\" [(ngModel)]=\"Buyer.Country\" value=\"Country\" class=\"example-full-width\">\n            <mat-option value=\"Austria\">Austria</mat-option>\n            <mat-option value=\"India\">India</mat-option>\n            <mat-option value=\"USA\">USA</mat-option>\n            <mat-option value=\"Germany\">Germany</mat-option>\n            <mat-option value=\"France\">France</mat-option>\n            <mat-option value=\"Iataly\">Iataly</mat-option>\n            <mat-option value=\"Spain\">Spain</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Address Name\" [formControl]=\"addressnameFormControl\"\n            [(ngModel)]=\"Buyer.addressname\" name=\"addressname\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error\n            *ngIf=\"addressnameFormControl.hasError('Address Name') && !addressnameFormControl.hasError('required')\">\n            Please enter a valid Address Name\n          </mat-error>\n          <mat-error *ngIf=\"addressnameFormControl.hasError('required')\">\n            Address Name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <div class=\"form-group\">\n          <label for=\"pwd\">Search Radius (KM)</label>\n          <mat-slider [(ngModel)]=\"Buyer.SearchRadius\" name=\"SearchRadius\" style=\"width: 100%\" min=\"5\" max=\"50\"\n            step=\"0.5\" thumbLabel tickInterval=\"1\">\n            <label for=\"pwd\">Search Radius</label>\n          </mat-slider>\n        </div>\n\n\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Property type*</mat-label>\n          <mat-select name=\"Propertytype\" [(ngModel)]=\"Buyer.Propertytype\" value=\"Propertytype\"\n            class=\"example-full-width\">\n            <mat-option value=\"Flat\">Flat</mat-option>\n            <mat-option value=\"Cottage\">Cottage</mat-option>\n            <mat-option value=\"Studio\">Studio</mat-option>\n            <mat-option value=\"Lodge\">Lodge</mat-option>\n            <mat-option value=\"Farm\">Farm</mat-option>\n            <mat-option value=\"Town House\">Town House</mat-option>\n            <mat-option value=\"Maisonette\">Maisonette</mat-option>\n            <mat-option value=\"Bungalow\">Bungalow</mat-option>\n            <mat-option value=\"Farmhouse\">Farmhouse</mat-option>\n            <mat-option value=\"Mews House\">Mews House</mat-option>\n            <mat-option value=\"Houseboat\">Houseboat</mat-option>\n            <mat-option value=\"Country house\">Country house</mat-option>\n            <mat-option value=\"Detached house\">Detached house</mat-option>\n            <mat-option value=\"Barn conversion\">Barn conversion</mat-option>\n            <mat-option value=\"Terraced House\">Terraced House</mat-option>\n            <mat-option value=\"Terraced Bungalow\">Terraced Bungalow</mat-option>\n            <mat-option value=\"Equestrian Property\">Equestrian Property</mat-option>\n            <mat-option value=\"End Terrace House\">End Terrace House</mat-option>\n            <mat-option value=\"Detached bungalow\">Detached bungalow</mat-option>\n\n            <mat-option value=\"Link-Detached House\">Link-Detached House</mat-option>\n            <mat-option value=\"Barn conversion/farmhouse\">Barn conversion/farmhouse</mat-option>\n            <mat-option value=\"Semi-Detached Bungalow\">Semi-Detached Bungalow</mat-option>\n            <mat-option value=\"Mobile/Park Home\">Mobile/Park Home</mat-option>\n            <mat-option value=\"Semi-Detached House\">Semi-Detached House</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <div class=\" mt-4\">\n          <label for=\"pwd\">Price Range (Offer) *</label>\n          <mat-slider style=\"width: 100%\" name=\"PriceRange\" [(ngModel)]=\"Buyer.PriceRange\" min=\"20\" max=\"120\" step=\"0.5\"\n            value=\"1.5\" thumbLabel tickInterval=\"1\">\n          </mat-slider>\n        </div>\n\n\n\n\n        <mat-radio-group aria-label=\"Select an option\" name=\"Validity\" [(ngModel)]=\"Buyer.Validity\" value=\"Validity\">\n          <label>Offer Validity:</label>\n          <mat-radio-button class=\"col-12\" value=\"0-2Months\">0-2Months</mat-radio-button>\n          <mat-radio-button value=\"2-6Months\" class=\"col-12\">2-6Months</mat-radio-button>\n        </mat-radio-group>\n\n\n\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Buyer.Condition\" name=\"Condition\">\n          <label>Property Condition:</label>\n          <mat-radio-button value=\"NewlyRefurbished\" class=\"col-12\">Newly Refurbished</mat-radio-button>\n          <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\n\n          <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\n\n          <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\n        </mat-radio-group>\n\n\n\n\n        <div class=\"button-next-tab2\">\n          <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\n          <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n        </div>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Optional Details\">\n      <div class=\"tabs-align-padding\">\n        <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\n\n        <mat-form-field class=\"example-full-width mt-4\">\n          <mat-label>Type*</mat-label>\n          <mat-select name=\"Type\" name=\"Type\" [(ngModel)]=\"Buyer.Type\" class=\"example-full-width\">\n            <mat-option value=\"Buying to Live\">Buying to Live</mat-option>\n            <mat-option value=\"Buying as Investment\">Buying as Investment</mat-option>\n            <mat-option value=\"Buying to Let\">Buying to Let</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Position*</mat-label>\n          <mat-select name=\"Position\" [(ngModel)]=\"Buyer.Position\" value=\"Position\" class=\"example-full-width\">\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\n            <mat-option value=\"Selling To Move\">Selling To Move</mat-option>\n            <mat-option value=\"Mortgage To be Arranged\">Mortgage To be Arranged</mat-option>\n            <mat-option value=\"Mortgage Arranged\">Mortgage Arranged</mat-option>\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"button-next-tab2\">\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\n          <button class=\"btn btn-primary btnNext btn-next\" type=\"submit\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-0\">\n  <div class=\"back\">\n    <div class=\"upper-back\"></div>\n  </div>\n</div>\n<div class=\"upper-button\">\n  <button mat-raised-button class=\"home-button\" routerLink=\"/ownaproperty/buy\">Buy/Rent</button>\n  <button mat-raised-button class=\"home-button\" routerLink=\"/ownaproperty/sell\">Sell/Let</button>\n\n</div>\n\n<mat-card>\n  <mat-card-title>What is Streetsnap ?</mat-card-title>\n  <mat-card-content>\n    <p class=\"text-center pt-2 pr-3 pl-3 home-text-font\">\n      Streetsnap is a platform that helps landlords get offers without listing\n      their property on the market.\n    </p>\n    <p class=\"text-center  pr-3 pl-3 home-text-font\">\n      Buyers get the chance to find properties they wouldn't otherwise find on\n      property portals\n    </p>\n  </mat-card-content>\n\n  <mat-card-title>How does it work ?</mat-card-title>\n  <mat-card-content>\n    <p class=\"text-center pt-2 pr-4 pl-4 home-text-font\">\n      Buyers fill requirements, providing details such as location, size,\n      amenities etc and their offer price.\n    </p>\n    <p class=\"text-center pr-4 pl-4 home-text-font\">\n      Registered property owners get matched offers, after which they decide if\n      they want to reveal property details and pursue the match further\n    </p>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\n\n  <div class=\"thanku-section\">\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\n      and we will share your property details with all the\n      interested buyers in you area</p>\n\n  </div>\n  <section id=\"matchproperties\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Properties</h3>\n    <div class=\"match-section\" routerLink='/selectedpropertydetail' *ngFor=\"let property of matchedProperties\">\n      <img src=\"assets/Images/download.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">{{ property.detail.Addressname }}</span><br>\n          <span class=\"discription-p\"> No. of Rooms:{{property.detail.norooms}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.detail.PropertyType}}</span><br>\n          <span class=\"discription-p\">Post Code: {{property.detail.postcode}}</span></p>\n      </div>\n    </div>\n\n  </section>\n\n\n\n  <section id=\"propertyinlondon\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Other Properties in London</h3>\n    <!--First-section-->\n    <div class=\"match-section\" *ngFor=\"let property of unmatchedProperties\">\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">{{property.addressname}}</span><br>\n          <span class=\"discription-p\"> No. of Rooms:{{property.detail.norooms}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.detail.PropertyType}</span><br>\n          <span class=\"discription-p\">Post Code: {{property.detail.postcode.postcode}}</span>\n          <span *ngIf=\"property.distance\" class=\"discription-p\">Distance: {{property.distance}}</span></p>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n  </section>\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\n  <p class=\"mt-3 main-heading text-center\">My Properties</p>\n\n  <section class=\"mt-4\" id=\"matchproperties\">\n    <mat-card style=\"margin-top: 10px;\" *ngFor=\"let property of propertyDetails\" class=\"match-section\"\n      routerLink='/selectedpropertydetail'>\n      <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\n      <mat-card-content class=\"match-content\">\n        <p> <span class=\"area-p\">{{property.Address}}</span><br>\n          <span class=\"discription-p\">Expected Amount: {{property.ExpectedAmount}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property: {{property.PropertyType}}\n            Home</span><br>\n          <span class=\"discription-p\">Post Code: {{property.postcode}}</span></p>\n      </mat-card-content>\n    </mat-card>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-requirement-container container\">\n  <p class=\"my-requirement-heading\">\n    My Requirements\n  </p>\n\n\n  <mat-card *ngFor=\"let requirement of propertyDetails\" class=\"my-requirement-one mt-3\"\n    routerLink='/requirementdetails'>\n\n    <p> <span class=\"area-p\">{{requirement.Address}}</span><br>\n      <span class=\"discription-p\"> Radius: {{requirement.SearchRadius}}</span>&nbsp;|&nbsp;<span\n        class=\"discription-p\">{{requirement.postcode}}</span><br>\n\n      <span class=\"discription-p property-type-color\">Street Name:\n        {{requirement.addressname}}</span>&nbsp;|&nbsp;<span class=\"discription-p\">Price Range:\n        {{requirement.PriceRange}}k</span><br>\n    </p>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mobile-wrapper\">\n  <div class=\"mobile-container\">\n    <div class=\"content\">\n      <nav>\n        <img src=\"/assets/Images/menu.png\" class=\"open\" />\n        <img src=\"/assets/Images/menu-close.png\" class=\"close-img\" />\n        <p class=\"menu-text\">Menu</p>\n        <div class=\"imge-logo-header\">\n          <img src=\"assets/Images/logo1.png\" class=\"logo-nav\" routerLink=\"\" />\n\n          <i class=\"fa fa-user\" aria-hidden=\"true\" (click)=\"authService.SignOut()\" *ngIf=\"isLoggedIn\"\n            routerLink=\"\"><span class=\"log-out-text\">Logout</span></i>\n        </div>\n\n        <div class=\"nav-div\">\n          <div class=\"search-grid-conatiner\" *ngIf=\"isLoggedIn\">\n            <div></div>\n            <div>\n              <input type=\"text\" placeholder=\"Search..\" /><img src=\"assets/Images/asset1.png\"\n                class=\"nav-link-icon-search\" />\n            </div>\n            <div></div>\n          </div>\n          <ul class=\"nav-links\" *ngIf=\"isLoggedIn; show\">\n            <div class=\"grid-container\" routerLink=\"/profile\">\n              <div><img src=\"assets/Images/my-profile-icon-png-1.png\" /></div>\n              <div>\n                <li>\n                  <a routerLink=\"/profile\" class=\"nav-links-text\">My Profile</a>\n                </li>\n              </div>\n              <div>\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\n              </div>\n            </div>\n            <div class=\"grid-container\" routerLink=\"/myproperties\">\n              <div>\n                <img src=\"assets/Images/download-removebg-preview.png\" />\n              </div>\n              <div>\n                <li>\n                  <a routerLink=\"/myproperties\" class=\"nav-links-text\">My Properties</a>\n                </li>\n              </div>\n              <div>\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\n              </div>\n            </div>\n            <div class=\"grid-container\" routerLink=\"/myrequirement\">\n              <div>\n                <img src=\"assets/Images/135-512-removebg-preview.png\" />\n              </div>\n              <div>\n                <li>\n                  <a routerLink=\"/myrequirement\" class=\"nav-links-text\">My Requirements</a>\n                </li>\n              </div>\n              <div>\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\n              </div>\n            </div>\n            <div class=\"grid-container\" routerLink=\"/prefrences\">\n              <div>\n                <img src=\"assets/Images/user_2-09-512-removebg-preview.png\" />\n              </div>\n              <div>\n                <li>\n                  <a routerLink=\"/prefrences\" class=\"nav-links-text\">Prefrences</a>\n                </li>\n              </div>\n              <div>\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\n              </div>\n            </div>\n            <div class=\"grid-container\" routerLink=\"/chats\">\n              <div><img src=\"assets/Images/31-512-removebg-preview.png\" /></div>\n              <div>\n                <li>\n                  <a routerLink=\"/chats\" class=\"nav-links-text\">My chat</a>\n                </li>\n              </div>\n              <div>\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\n              </div>\n            </div>\n          </ul>\n          <div *ngIf=\"!isLoggedIn\">\n            <div class=\"social-login text-center\">\n              <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n              <div class=\"social-button mt-4\">\n                <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\n                  Facebook\n                </button>\n                <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\n                  Google+\n                </button>\n              </div>\n              \n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\n                </mat-form-field>\n                \n             \n              <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\n              </mat-form-field>\n\n                <div class=\"input-group-prepend other-option\">\n                  <!-- <label class=\"checkbox\">\n                    <input type=\"checkbox\" value=\"remember-me\">Remember Me\n                </label> -->\n                  <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\n                </div>\n                <button type=\"button\" class=\"btn btn-social-login\" (click)=\"\n                    authService.SignIn(userEmail.value, userPassword.value)\n                  \">\n                  Login\n                </button>\n                <button type=\"button\" class=\"btn btn-social-login\" (click)=\"\n                    authService.SignUp(userEmail.value, userPassword.value)\n                  \">\n                  Sign Up\n                </button>\n            \n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group [(selectedIndex)]=\"activeTab\">\n  <mat-tab label=\"LOOKING FOR PROPERTY\">\n    <mat-card>\n      <div class=\"own-porpety-text\">\n        <p class=\"text-justify owna-property-text\">Reach out to our\n          database of registered sellers who are not on the market, but\n          would sell if the right offer came along</p>\n      </div>\n      <div class=\"own-property-list\">\n        <ul class=\"own-property-list-style\">\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Qualified\n            landlords are sent your offers and\n            then decide\n            if they want to let </li>\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Different\n            offers from the rest of sites</li>\n\n        </ul>\n      </div>\n    </mat-card>\n    <mat-card>\n      <div class=\"own-property-image\">\n        <p class=\"own-property-image-text pr-3 pl-3 pb-2\">Register a 'feeler'\n          for a property\n          in your desired area</p>\n      </div>\n      <div class=\"button-own-a-property\">\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-2\" routerLink=\"/forms\">MAKE AN\n          offer</button>\n      </div>\n    </mat-card>\n\n    <mat-card>\n      <img mat-card-image src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\n      <p class=\"own-property-text-home-worth pt-2\">How much is your\n        home worth?</p>\n      <p class=\"own-property-text-home-worth-ans\">Get a free,\n        no-obligation valuation of your home from\n        one of our specially-selected local experts.</p>\n    </mat-card>\n\n    <mat-card>\n      <div class=\"own-property-blog mt-3\">\n        <p class=\"own-property-blog-heading pt-2\">\n          Blog\n        </p>\n        <div class=\"own-property-blogs-content\">\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\n                  own-property-blog-image\">\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\n            Price\n            Index</p>\n          <p class=\"own-property-blogs-content-c2\">Annual house price\n            growth in the UK’s most buoyant city has fallen below 5% for\n            the first time since 2012.</p>\n        </div>\n\n        <div class=\"own-property-blogs-content-2 pt-3\">\n\n          <img src=\"assets/Images/asset-2.png\" class=\"float-left\n                  own-property-blog-image\">\n          <p class=\"own-property-blogs-content-c1-2\">Housebuilding\n            levels fall to\n            three</p>\n          <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\n            properties were\n            started in the year to the end of June, significantly below\n            the Government’s target of 300,000.</p>\n\n\n        </div>\n        <div class=\"own-property-blogs-content-2 pt-3\">\n\n          <img src=\"assets/Images/asset-3.png\" class=\"float-left\n                  own-property-blog-image\">\n          <p class=\"own-property-blogs-content-c1-2\">Many first-time\n            buyers </p>\n          <p class=\"own-property-blogs-content-c2-2\">More than half of\n            people taking their\n            first step on the property ladder think\n            they can borrow up to 10 times their income.</p>\n\n        </div>\n      </div>\n    </mat-card>\n\n    <mat-card>\n      <div class=\"own-property-blogs-content-2\">\n        <img mat-card-image src=\"assets/Images/buying.png\">\n        <p class=\"own-property-last-image-text\">\n          Buying property guides<br>\n\n          <span class=\"own-property-last-line\"> Get the latest advice\n            and tips on buying</span>\n        </p>\n\n      </div>\n    </mat-card>\n\n\n  </mat-tab>\n\n\n\n  <mat-tab label=\"OWN A PROPERTY\">\n    <mat-card>\n      <div class=\"own-porpety-text\">\n        <p class=\"text-justify owna-property-text\">Would you sell your property if the\n          right offer came along?</p>\n      </div>\n\n      <div class=\"own-property-list\">\n        <ul class=\"own-property-list-style\">\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Register it with us\n            and receive potential offers\n            from buyers looking for property in your area! </li>\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Free service for\n            sellers</li>\n\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> You get offers\n            from buyers who are interested in\n            your locality. For your type of property</li>\n\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> Only reveal your\n            details to buyers you authorise</li>\n\n        </ul>\n      </div>\n\n    </mat-card>\n    <mat-card>\n      <div class=\"Looking-property-image\">\n        <p class=\"looking-property-image-text pr-3 pl-3\">Register your property with\n          Streethook</p>\n      </div>\n      <div class=\"button-own-a-property\">\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-4\" routerLink=\"/sellerform\">LIST PROPERTY\n          NOW</button>\n      </div>\n    </mat-card>\n\n\n\n\n    <mat-card>\n      <div class=\"own-property-home-worth mt-4 pb-2 mb-2\">\n        <img src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\n        <p class=\"own-property-text-home-worth pt-2\">How much is your\n          home worth?</p>\n        <p class=\"own-property-text-home-worth-ans\">Get a free,\n          no-obligation valuation of your home from\n          one of our specially-selected local experts.</p>\n\n      </div>\n    </mat-card>\n    <mat-card>\n      <div class=\"own-property-blog mt-3\">\n        <p class=\"own-property-blog-heading pt-2\">\n          Blog\n        </p>\n        <div class=\"own-property-blogs-content\">\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\n                    own-property-blog-image\">\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\n            Price\n            Index</p>\n          <p class=\"own-property-blogs-content-c2\">Annual house price\n            growth in the UK’s most buoyant city has fallen below 5% for\n            the first time since 2012.</p>\n        </div>\n      </div>\n\n      <div class=\"own-property-blogs-content-2 pt-3\">\n        <img src=\"assets/Images/asset-2.png\" class=\"float-left\n                    own-property-blog-image\">\n        <p class=\"own-property-blogs-content-c1-2\">Housebuilding\n          levels fall to\n          three</p>\n        <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\n          properties were\n          started in the year to the end of June, significantly below\n          the Government’s target of 300,000.</p>\n      </div>\n\n\n      <div class=\"own-property-blogs-content-2 pt-3\">\n\n        <img src=\"assets/Images/asset-3.png\" class=\"float-left\n                    own-property-blog-image\">\n        <p class=\"own-property-blogs-content-c1-2\">Many first-time\n          buyers </p>\n        <p class=\"own-property-blogs-content-c2-2\">More than half of\n          people taking their\n          first step on the property ladder think\n          they can borrow up to 10 times their income.</p>\n\n      </div>\n\n    </mat-card>\n    <mat-card>\n      <!-- <hr class=\"horizontal-line pt-3\"> -->\n      <div class=\"own-property-blogs-content-2\">\n\n        <img src=\"assets/Images/buying.png\" class=\"own-property-last-image\">\n        <p class=\"own-property-last-image-text\">\n          Buying property guides<br>\n\n          <span class=\"own-property-last-line\"> Get the latest advice\n            and tips on buying</span>\n        </p>\n\n      </div>\n    </mat-card>\n\n\n\n\n\n\n\n\n  </mat-tab>\n\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"prefrences-main-div container\">\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\n    <div class=\"prefrence-notification\">\n                <h5 class=\"text-center notification-heading\">Notification Prefrences</h5>\n                <div class=\"prefrence-radio\">\n          <form>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email for every match\n                </p></label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email me once a week with all the matches \n                  that I have\n                </p> </label>\n              </div>\n          </form>\n        </div>\n\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div *ngIf=\"user\">\n    <div class=\"profile-wrapper-content\">\n      <p class=\"profile-heading\">My Profile</p>\n      <div class=\"profile-name-image mt-4\">\n        <img src=\"{{user.photoURL}}\" class=\"rounded-circle Profile-pic\" />\n        <p class=\"profile-name\">{{ user.displayName }}</p>\n      </div>\n    </div>\n    <div class=\"profile-name-field-option\">\n      <div class=\"grid-container\">\n        <div>\n          <p class=\"fname-text1\">Name</p>\n        </div>\n        <div>\n          <p class=\"fname-text2\" *ngIf=\"user\">{{ user.displayName }}</p>\n        </div>\n      </div>\n\n      <div class=\"grid-container\">\n        <div>\n          <p class=\"fname-text1\">Phone No</p>\n        </div>\n        <div>\n          <p class=\"fname-text2\"></p>\n        </div>\n\n      </div>\n      <div class=\"grid-container\">\n        <div>\n          <p class=\"fname-text1\">Email Id</p>\n        </div>\n        <div>\n          <p class=\"fname-text2\">\n\n            {{ user.email }} </p>\n        </div>\n\n      </div>\n      <div class=\"grid-container\">\n        <div>\n          <p class=\"fname-text1\">Date of Birth</p>\n        </div>\n        <div>\n          <p class=\"fname-text2 \" *ngIf=\"Buyer\">{{ Buyer.DOB }}</p>\n        </div>\n\n      </div>\n      <div class=\"grid-container\">\n        <div>\n          <p class=\"fname-text1\">Password</p>\n        </div>\n        <div>\n          <p class=\"fname-text2\">*******</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container property-detail-container\">\n    <h3 class=\"property-detail-h3\">Property Details</h3>\n    <div class=\"wrapper-detail-container\">\n      \n\n\n            <div class=\"streetname\">\n                    <table class=\"table\">\n   \n                            <tbody>\n                              <tr>\n                                <td class=\"details-p-headings\">Street Name</td>\n                                <td class=\"details-output-p\">Green Park</td>\n                               \n                              </tr>\n                              <tr>\n                                    <td class=\"details-p-headings\">Post Code</td>\n                                    <td class=\"details-output-p\">NW7W25</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Property type</td>\n                                    <td class=\"details-output-p\">Terrace House</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">No of rooms</td>\n                                    <td class=\"details-output-p\">5</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Condition</td>\n                                    <td class=\"details-output-p\">New Build</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Ownership</td>\n                                    <td class=\"details-output-p\">Freehold</td>\n                                   \n                                  </tr>\n                            </tbody>\n                          </table>\n        \n                </div>\n\n\n           \n\n\n\n    </div>\n<div class=\"button-details\">\n    <button type=\"button\" class=\"btn button-ask\">Ask For Property Details</button>\n    <button type=\"button\" class=\"btn btn-chat\">Initiate chat</button>\n\n</div>\n\n\n\n\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container property-detail-container\">\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\n    <div class=\"wrapper-detail-container\">\n     \n        <h3 class=\"property-detail-h3\">Property Details</h3>\n\n            <div class=\"streetname\">\n                    <table class=\"table\">\n   \n                            <tbody>\n                              <tr>\n                                <td class=\"details-p-headings\">Pincode</td>\n                                <td class=\"details-output-p\">NW7W25</td>\n                               \n                              </tr>\n                              <tr>\n                                    <td class=\"details-p-headings\">Country</td>\n                                    <td class=\"details-output-p\">Susex</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Address Name</td>\n                                    <td class=\"details-output-p\">Bachlester</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Offer Validity</td>\n                                    <td class=\"details-output-p\">0-2months</td>\n                                   \n                                  </tr>\n                          \n                                  <tr>\n                                    <td class=\"details-p-headings\">Property Condition</td>\n                                    <td class=\"details-output-p\">New Build</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Price Range(offer)</td>\n                                    <td class=\"details-output-p\">20-100k</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Streetname</td>\n                                    <td class=\"details-output-p\">Bawsar</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Radius</td>\n                                    <td class=\"details-output-p\">5miles</td>\n                                   \n                                  </tr>\n                               \n                                  <tr>\n                                    <td class=\"details-p-headings\">Town Name</td>\n                                    <td class=\"details-output-p\">Bintulu</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Property Type</td>\n                                    <td class=\"details-output-p\">Detached House</td>\n                                   \n                                  </tr>\n                               \n                             \n                                 \n                            </tbody>\n                          </table>\n        \n                </div>\n\n\n           \n\n\n\n    </div>\n\n\n\n\n\n\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container property-detail-container\">\n  <h3 class=\"property-detail-h3\">Park Avenue</h3>\n  <div class=\"wrapper-detail-container\">\n    <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n      <!-- Indicators -->\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      </ul>\n\n      <!-- The slideshow -->\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"/assets/Images/452fh75sy--1734472_diner-view-1.png\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"/assets/Images/432-park-avenue-15.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"/assets/Images/Project-Photo-1-Godrej-Park-Avenue-Greater-Noida-5117125_345_1366_300_450.jpg\"\n            alt=\"New York\" width=\"1100\" height=\"500\">\n        </div>\n      </div>\n\n      <!-- Left and right controls -->\n\n    </div>\n\n\n    <!-- <div class=\"streetname\">\n                    <table class=\"table\">\n   \n                            <tbody>\n                              <tr>\n                                <td class=\"details-p-headings\">Pincode</td>\n                                <td class=\"details-output-p\">{{property.postcode}}</td>\n                               \n                              </tr>\n                              <tr>\n                                    <td class=\"details-p-headings\">Country</td>\n                                    <td class=\"details-output-p\">{{property.country}}</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Address</td>\n                                    <td class=\"details-output-p\">{{property.Address}}</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">No of Rooms</td>\n                                    <td class=\"details-output-p\">{{property.norooms}}</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Property Condition</td>\n                                    <td class=\"details-output-p\">{{property.condition}}</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Price Range(offer)</td>\n                                    <td class=\"details-output-p\">20-100k</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Streetname</td>\n                                    <td class=\"details-output-p\">Bawsar</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Ownership</td>\n                                    <td class=\"details-output-p\">Freehold</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Town Name</td>\n                                    <td class=\"details-output-p\">Bintulu</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Property Type</td>\n                                    <td class=\"details-output-p\">Detached House</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Applicable Feature</td>\n                                    <td class=\"details-output-p\">Period Feature</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Offer Validity</td>\n                                    <td class=\"details-output-p\">0-2months</td>\n                                   \n                                  </tr>\n                                  <tr>\n                                    <td class=\"details-p-headings\">Radius</td>\n                                    <td class=\"details-output-p\">5miles</td>\n                                   \n                                  </tr>\n                            </tbody>\n                          </table>\n        \n                </div> -->\n\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"container forms-container\">\n  <div class=\"row\">\n    <section class=\"col\">\n      <div class=\"social-login text-center  p-2\" *ngIf=\"!isLoggedIn\">\n        <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n        <div class=\"social-button mt-4\">\n          <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\n            Facebook\n          </button>\n          <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\n            Google+\n          </button>\n        </div>\n        <div class=\"input-group mb-3 mt-3\">\n       \n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\n          </mat-form-field>\n          \n        </div>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\n        </mat-form-field>\n\n        <div class=\"input-group-prepend other-option\">\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" value=\"remember-me\" />Remember Me\n          </label>\n          <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\n        </div>\n        <button type=\"button\" class=\"btn btn-social-login\"\n          (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\n          Login\n        </button>\n        <button type=\"button\" class=\"btn btn-social-login\"\n          (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\n          Sign Up\n        </button>\n      </div>\n\n\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\n        <mat-tab-group #matgroup class=\"form-tab-conatiner\" mat-align-tabs=\"center\">\n          <mat-tab label=\"Personal Details\">\n            <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\n              <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\n              <p class=\"forms-star\">*required</p>\n\n\n              <mat-form-field>\n                <mat-label>Title*</mat-label>\n                <mat-select name=\"title\" [(ngModel)]=\"Seller.Title\" Value=\"Title\" class=\"drop-down-list\">\n                  <mat-option value=\"Mr\">Mr</mat-option>\n                  <mat-option value=\"Ms\">Ms</mat-option>\n                  <mat-option value=\"Mrs\">Mrs</mat-option>\n\n                </mat-select>\n              </mat-form-field>\n\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"First Name\" [formControl]=\"FirstnameFormControl\"\n                    [(ngModel)]=\"Seller.Firstname\" name=\"First\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"FirstnameFormControl.hasError('First Name') && !FirstnameFormControl.hasError('required')\">\n                    Please enter a valid name\n                  </mat-error>\n                  <mat-error *ngIf=\"FirstnameFormControl.hasError('required')\">\n                    FirstName is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"LastName\" [formControl]=\"LastnameFormControl\" id=\"name\"\n                    [(ngModel)]=\"Seller.Lastname\" name=\"Last\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"LastnameFormControl.hasError('LastName') && !LastnameFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"LastnameFormControl.hasError('required')\">\n                    LastName is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Email Address*\" [formControl]=\"EmailFormControl\" id=\"name\"\n                    [(ngModel)]=\"Seller.Email\" name=\"Email\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"EmailFormControl.hasError('Email Address*') && !EmailFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"EmailFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth*\" [formControl]=\"DOBFormControl\" id=\"name\" [(ngModel)]=\"Seller.DOB\"\n                  name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <mat-error\n                    *ngIf=\"DOBFormControl.hasError('DOB') && !DOBFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"DOBFormControl.hasError('required')\">\n                    DOB is <strong>required</strong>\n                  </mat-error>\n              </mat-form-field>\n\n\n              <div class=\"form-group\" *ngIf=\"!isLoggedIn\">\n                <label for=\"pwd\">Enter A Password*</label>\n                <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"Seller.Password\" name=\"Password\"\n                  required />\n              </div>\n              <div class=\"form-group\" *ngIf=\"!isLoggedIn\">\n                <label for=\"pwd\">Enter Password Again*</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"Seller.Confirm\" name=\"Confirm\" required />\n              </div>\n              <ul class=\"submit-button\">\n                <div class=\"button-next\">\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n                </div>\n              </ul>\n            </div>\n          </mat-tab>\n\n          <mat-tab label=\"Property Details\">\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step2\">\n              <div class=\"seller-form-upper\">\n                <p>\n                  Property Enquiry<br />\n                  <span>Please fill the form below to list your property</span>\n                </p>\n                <hr class=\"top-hr\" />\n              </div>\n              <div class=\" container  forms-container\">\n                <p>Search by Address</p>\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\"\n                      [(ngModel)]=\"Seller.Address\" name=\"Address\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\n                      Please enter a valid address\n                    </mat-error>\n                    <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\n                      Address is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Seller.Town\"\n                      name=\"Town\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\n                      Please enter a valid Town/City\n                    </mat-error>\n                    <mat-error *ngIf=\"TownFormControl.hasError('required')\">\n                      Town/City is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"State/Provience/Country\" [formControl]=\"stateFormControl\"\n                      [(ngModel)]=\"Seller.state\" name=\"state\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"stateFormControl.hasError('State/Provience/Country') && !stateFormControl.hasError('required')\">\n                      Please enter a valid State/Provience/Country\n                    </mat-error>\n                    <mat-error *ngIf=\"stateFormControl.hasError('required')\">\n                      State/Provience/Country is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n           \n                <form [formGroup]=\"form\">\n\n                  <mat-form-field class=\"example-full-width\" >\n                      <input type=\"text\" placeholder=\"Postcode\" matInput formControlName=\"project\" [matAutocomplete]=\"projectAutoComplete\" [(ngModel)]=\"Seller.postcode\">\n                      <mat-autocomplete #projectAutoComplete=\"matAutocomplete\" [displayWith]=\"displayWith\">\n                          <mat-option *ngFor=\"let project of projects\" [value]=\"project\">\n                            <span>{{project.postcode}} </span>&nbsp;\n                            <span> {{project.latitude}} </span> |\n                            <span> {{project.longitude}}</span>\n                          </mat-option>\n                      </mat-autocomplete>\n              \n                      <mat-error *ngIf=\"form.controls['project'].hasError('required')\">\n                          Please enter a value\n                      </mat-error>\n              \n                      <mat-error *ngIf=\"form.controls['project'].hasError('incorrect')\">\n                      select postcode from list    \n                      </mat-error>\n                  </mat-form-field>\n              \n              </form>\n            \n\n\n\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Country*</mat-label>\n                  <mat-select name=\"Country\" [(ngModel)]=\"Seller.Country\" value=\"Country\" class=\"example-full-width\" [ngModelOptions]=\"{standalone: true}\">\n                    <mat-option value=\"Austria\">Austria</mat-option>\n                    <mat-option value=\"India\">India</mat-option>\n                    <mat-option value=\"USA\">USA</mat-option>\n                    <mat-option value=\"Germany\">Germany</mat-option>\n                    <mat-option value=\"France\">France</mat-option>\n                    <mat-option value=\"Iataly\">Iataly</mat-option>\n                    <mat-option value=\"Spain\">Spain</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <label for=\"text\" class=\" \">Property Type*:</label>\n                <section class=\"example-section\" [(ngModel)]=\"Seller.PropertyType\" \n                  value=\"PropertyType\">\n\n                  <mat-checkbox class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Detached House\">Detached House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Masionette\">Masionette</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Semi Detached House\">Semi Detached House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"End Of Terrace House\">End Of Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Purpose-Built Flat\">Purpose-Built Flat</mat-checkbox>\n                </section>\n\n\n\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Address Name\" [formControl]=\"addressnameFormControl\"\n                      [(ngModel)]=\"Seller.Addressname\" name=\"addressname\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"addressnameFormControl.hasError('Address Name') && !addressnameFormControl.hasError('required')\">\n                      Please enter a valid Address Name\n                    </mat-error>\n                    <mat-error *ngIf=\"addressnameFormControl.hasError('required')\">\n                      Address Name is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Number of Rooms\" [formControl]=\"noroomsFormControl\"\n                      [(ngModel)]=\"Seller.norooms\" name=\"norooms\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"noroomsFormControl.hasError('Number of Rooms') && !noroomsFormControl.hasError('required')\">\n                      Please enter a valid Number of Rooms\n                    </mat-error>\n                    <mat-error *ngIf=\"noroomsFormControl.hasError('required')\">\n                      Number of Rooms is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n\n\n                <div class=\"\">\n                  <label for=\"pwd\">Expected Amount (Offer) *</label>\n                  <mat-slider style=\"width: 100%\" name=\"ExpectedAmount\" [(ngModel)]=\"Seller.ExpectedAmount\" min=\"0\"\n                    max=\"1000000\" step=\"1000\" value=\"50000\" thumbLabel tickInterval=\"1\">\n                  </mat-slider>\n                </div>\n\n\n                <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Seller.PropertyCondition\"\n                  name=\"PropertyCondition\">\n                  <label>Property Condition:</label>\n                  <mat-radio-button value=\"NewlyRefurbished\" class=\"col-12\">Newly Refurbished</mat-radio-button>\n                  <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\n\n                  <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\n\n                  <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\n                </mat-radio-group>\n\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Ownership:</mat-label>\n                  <mat-select name=\"ownership\" [(ngModel)]=\"Seller.ownership\" value=\"ownership\"\n                    class=\"example-full-width\">\n                    <mat-option value=\"Freehold\">Freehold</mat-option>\n                    <mat-option value=\"Leasehold\">Leasehold</mat-option>\n                    <mat-option value=\"Share of Freehold\">Share of Freehold</mat-option>\n\n\n                  </mat-select>\n                </mat-form-field>\n\n                <label for=\"text\" class=\" \">Select the Applicable Features:</label>\n                <section class=\"example-section\" [(ngModel)]=\"Seller.ApplicableFeatures\" \n                  value=\"ApplicableFeatures\">\n\n                  <mat-checkbox class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Driveway\">Driveway</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Period features\">Period features</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Garage\">Garage</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Wheelchair friendly\">Wheelchair friendly</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Gated community\">Gated community</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"External Rear Garden\">External Rear Garden</mat-checkbox>\n                </section>\n\n\n\n\n          \n\n                <div class=\"button-next-tab2\">\n                  <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\n                  <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n                </div>\n              </div>\n            </div>\n             \n          </mat-tab>\n\n          <mat-tab label=\"Optional Details\">\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step3\">\n              <div class=\"seller-form-upper\">\n                <p>\n                  List Your Property<br />\n                  <span>Please fill the form below to list your property</span>\n                </p>\n                <hr class=\"top-hr\" />\n              </div>\n              <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\n\n              <div class=\"forms-container\">\n                <p class=\"mt-4 forms-heading-optional\">\n                  Upload Property Images*\n                </p>\n\n                <div class=\"col-4 frmCaption\">Image 1*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 2*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 3*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 4*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"button-next-tab2\">\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\n                  <button class=\"btn btn-primary btnNext btn-next\" (click)=\"onSubmit\">\n                    Submit\n                  </button>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n        </mat-tab-group>\n      </form>\n    </section>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\n\n  <div class=\"thanku-section\">\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\n      and we will share your property details with all the\n      interested buyers in you area</p>\n\n  </div>\n  <section class=\"\" id=\"matchproperties\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Buyers</h3>\n    <div class=\"match-section\" *ngFor=\"let property of matchedProperties\">\n      <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">{{property.detail.addressname}}</span><br>\n          <span class=\"discription-p\"> Serach Radius:{{property.detail.SearchRadius}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.detail.Propertytype}}</span><br>\n          <span class=\"discription-p\">Post Code: {{property.detail.postcode}}</span>\n       \n\n          \n      </div>\n    </div>\n  </section>\n\n\n\n  <section id=\"youmaylike\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Buyers with similar requirement</h3>\n    <!--First-section-->\n    <div class=\"match-section\"  *ngFor=\"let property of unmatchedProperties\">\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'><span class=\"area-p\">{{ property.detail.Addressname }}</span><br>\n          <span class=\"discription-p\"> No. of Rooms:{{property.detail.SearchRadius}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.detail.Propertytype}}</span><br>\n          <span class=\"discription-p\">Post Code:{{property.detail.postcode}}</span>\n          <span *ngIf=\"property.distance\" class=\"discription-p\">Distance: {{property.distance}}</span></p>\n\n         \n\n      </div>\n    </div>\n  </section>\n\n\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/alert-dialog/alert-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/alert-dialog/alert-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AlertDialogComponent = class AlertDialogComponent {
    constructor(data, dialogRef) {
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
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
AlertDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AlertDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert-dialog/alert-dialog.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AlertDialogComponent);



/***/ }),

/***/ "./src/app/alertdialogbuyer/alertdialogbuyer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/alertdialogbuyer/alertdialogbuyer.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0ZGlhbG9nYnV5ZXIvYWxlcnRkaWFsb2didXllci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/alertdialogbuyer/alertdialogbuyer.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertdialogbuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertdialogbuyerComponent", function() { return AlertdialogbuyerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AlertdialogbuyerComponent = class AlertdialogbuyerComponent {
    constructor(data, dialogRef) {
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
    ngOnInit() {
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
AlertdialogbuyerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AlertdialogbuyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alertdialogbuyer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alertdialogbuyer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alertdialogbuyer/alertdialogbuyer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alertdialogbuyer.component.css */ "./src/app/alertdialogbuyer/alertdialogbuyer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AlertdialogbuyerComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ownaproperty/ownaproperty.component */ "./src/app/ownaproperty/ownaproperty.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matches/matches.component */ "./src/app/matches/matches.component.ts");
/* harmony import */ var _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./propertydetails/propertydetails.component */ "./src/app/propertydetails/propertydetails.component.ts");
/* harmony import */ var _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sellerform/sellerform.component */ "./src/app/sellerform/sellerform.component.ts");
/* harmony import */ var _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sellermatches/sellermatches.component */ "./src/app/sellermatches/sellermatches.component.ts");
/* harmony import */ var _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buyerdetails/buyerdetails.component */ "./src/app/buyerdetails/buyerdetails.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myproperties/myproperties.component */ "./src/app/myproperties/myproperties.component.ts");
/* harmony import */ var _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selectedpropertydetail/selectedpropertydetail.component */ "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts");
/* harmony import */ var _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./myrequirement/myrequirement.component */ "./src/app/myrequirement/myrequirement.component.ts");
/* harmony import */ var _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./requirementdetails/requirementdetails.component */ "./src/app/requirementdetails/requirementdetails.component.ts");
/* harmony import */ var _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./prefrences/prefrences.component */ "./src/app/prefrences/prefrences.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

























const routes = [
    { path: "ownaproperty/:use", component: _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_3__["OwnapropertyComponent"] },
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "forms", component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"] },
    { path: "confirmation", component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"] },
    { path: "matches", component: _matches_matches_component__WEBPACK_IMPORTED_MODULE_7__["MatchesComponent"] },
    { path: "propertydetails", component: _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_8__["PropertydetailsComponent"] },
    { path: "sellerform", component: _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_9__["SellerformComponent"] },
    { path: "sellermatches", component: _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_10__["SellermatchesComponent"] },
    {
        path: "buyerdetails",
        component: _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_11__["BuyerdetailsComponent"]
    },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
    { path: "editprofile", component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_13__["EditprofileComponent"] },
    { path: "myproperties", component: _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_14__["MypropertiesComponent"] },
    {
        path: "selectedpropertydetail",
        component: _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_15__["SelectedpropertydetailComponent"]
    },
    { path: "myrequirement", component: _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_16__["MyrequirementComponent"] },
    { path: "requirementdetails", component: _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_17__["RequirementdetailsComponent"] },
    { path: "prefrences", component: _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_18__["PrefrencesComponent"] },
    { path: "chats", component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_19__["ChatsComponent"] },
    { path: "sign-in", component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"] },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"] },
    { path: "forgot-password", component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"] },
    { path: "verify-email-address", component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_22__["VerifyEmailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'street';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ownaproperty/ownaproperty.component */ "./src/app/ownaproperty/ownaproperty.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matches/matches.component */ "./src/app/matches/matches.component.ts");
/* harmony import */ var _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./propertydetails/propertydetails.component */ "./src/app/propertydetails/propertydetails.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sellerform/sellerform.component */ "./src/app/sellerform/sellerform.component.ts");
/* harmony import */ var _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sellermatches/sellermatches.component */ "./src/app/sellermatches/sellermatches.component.ts");
/* harmony import */ var _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buyerdetails/buyerdetails.component */ "./src/app/buyerdetails/buyerdetails.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./myproperties/myproperties.component */ "./src/app/myproperties/myproperties.component.ts");
/* harmony import */ var _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./selectedpropertydetail/selectedpropertydetail.component */ "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts");
/* harmony import */ var _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./myrequirement/myrequirement.component */ "./src/app/myrequirement/myrequirement.component.ts");
/* harmony import */ var _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./requirementdetails/requirementdetails.component */ "./src/app/requirementdetails/requirementdetails.component.ts");
/* harmony import */ var _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./prefrences/prefrences.component */ "./src/app/prefrences/prefrences.component.ts");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/app/components/verify-email/verify-email.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./forms/confirmation-dialog.component */ "./src/app/forms/confirmation-dialog.component.ts");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _forms_material__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./forms/material */ "./src/app/forms/material.ts");
/* harmony import */ var _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./alertdialogbuyer/alertdialogbuyer.component */ "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts");


























// Firebase modules

























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _ownaproperty_ownaproperty_component__WEBPACK_IMPORTED_MODULE_8__["OwnapropertyComponent"],
            _forms_forms_component__WEBPACK_IMPORTED_MODULE_9__["FormsComponent"],
            _matches_matches_component__WEBPACK_IMPORTED_MODULE_10__["MatchesComponent"],
            _propertydetails_propertydetails_component__WEBPACK_IMPORTED_MODULE_11__["PropertydetailsComponent"],
            _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationComponent"],
            _sellerform_sellerform_component__WEBPACK_IMPORTED_MODULE_13__["SellerformComponent"],
            _sellermatches_sellermatches_component__WEBPACK_IMPORTED_MODULE_14__["SellermatchesComponent"],
            _buyerdetails_buyerdetails_component__WEBPACK_IMPORTED_MODULE_15__["BuyerdetailsComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
            _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_17__["EditprofileComponent"],
            _myproperties_myproperties_component__WEBPACK_IMPORTED_MODULE_18__["MypropertiesComponent"],
            _selectedpropertydetail_selectedpropertydetail_component__WEBPACK_IMPORTED_MODULE_19__["SelectedpropertydetailComponent"],
            _myrequirement_myrequirement_component__WEBPACK_IMPORTED_MODULE_20__["MyrequirementComponent"],
            _requirementdetails_requirementdetails_component__WEBPACK_IMPORTED_MODULE_21__["RequirementdetailsComponent"],
            _prefrences_prefrences_component__WEBPACK_IMPORTED_MODULE_22__["PrefrencesComponent"],
            _chats_chats_component__WEBPACK_IMPORTED_MODULE_23__["ChatsComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["DashboardComponent"],
            _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_32__["SignInComponent"],
            _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_33__["ForgotPasswordComponent"],
            _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_34__["VerifyEmailComponent"],
            _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__["AlertDialogComponent"],
            _forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__["ConfirmationDialog"],
            _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__["AlertdialogbuyerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].firebaseConfig, 'street'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_29__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"],
            _forms_material__WEBPACK_IMPORTED_MODULE_80__["MaterialModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__["MatTabsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_41__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_42__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_43__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_38__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_45__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_46__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_49__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_52__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_53__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_54__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_55__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_56__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_57__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_58__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_59__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_60__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_61__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_63__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_64__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_65__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_66__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_62__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_67__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_69__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_70__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_71__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_72__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_73__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_74__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_75__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_76__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_77__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_40__["ScrollingModule"],
        ],
        entryComponents: [_forms_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_78__["ConfirmationDialog"], _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_79__["AlertDialogComponent"], _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_81__["AlertdialogbuyerComponent"]],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["FirestoreSettingsToken"], useValue: {} }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
            }
            else {
                localStorage.setItem("user", null);
            }
        });
    }
    logout() {
        throw new Error("Method not implemented.");
    }
    // Sign in with email/password
    SignIn(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                this.ngZone.run(() => {
                    this.router.navigate(["profile"]);
                });
                this.SetUserData(result.user);
            }
            catch (error) {
                window.alert(error.message);
            }
        });
    }
    // Sign up with email/password
    SignUp(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                /* Call the SendVerificaitonMail() function when new user sign
                up and returns promise */
                this.SendVerificationMail();
                this.SetUserData(result.user);
            }
            catch (error) {
                window.alert(error.message);
            }
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.currentUser.sendEmailVerification();
            this.router.navigate(["verify-email-address"]);
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
                window.alert("Password reset email sent, check your inbox.");
            }
            catch (error) {
                window.alert(error);
            }
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem("user"));
        return user !== null && user.emailVerified !== false ? true : false;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    }
    // Sign in with Google
    FacebookAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.auth.signInWithPopup(provider);
                this.ngZone.run(() => {
                    // this.router.navigate(["profile"]);
                });
                this.SetUserData(result.user);
            }
            catch (error) {
                window.alert(error);
            }
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out
    SignOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            localStorage.removeItem("user");
            this.router.navigate(["home"]);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
     }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/buyerdetails/buyerdetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/buyerdetails/buyerdetails.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-main-container {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.confirm-first-container {\n  background-color: white;\n  padding-bottom: 1px;\n}\n\n.table td,\n.table th {\n  padding: .75rem;\n  vertical-align: top;\n  border-top: none;\n}\n\n.confirm-page-heading {\n  margin-left: 16px;\n  /* margin-top: 9px; */\n  padding-top: 15px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\ntable {\n  margin-left: 11px;\n  margin-top: -15px;\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.table td {\n  padding: 5px;\n}\n\n.details-p-headings {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  color: #5E5959;\n  font-size: 14px;\n\n}\n\n.output {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: lighter;\n}\n\n.endind-button {\n  /* background-color: unset; */\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.btn.btn-back {\n  width: 33%;\n  background-color: #244D93;\n  /* height: 35px; */\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.btn-next {\n  width: 33%;\n  background-color: #244D93;\n  /* height: 35px; */\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.or-text {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5ZXJkZXRhaWxzL2J1eWVyZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYnV5ZXJkZXRhaWxzL2J1eWVyZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uY29uZmlybS1maXJzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogLjc1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY29uZmlybS1wYWdlLWhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgLyogbWFyZ2luLXRvcDogOXB4OyAqL1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudGFibGUge1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4udGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzVFNTk1OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG5cbi5vdXRwdXQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uZW5kaW5kLWJ1dHRvbiB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHVuc2V0OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLmJ0bi1iYWNrIHtcbiAgd2lkdGg6IDMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgd2lkdGg6IDMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLm9yLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/buyerdetails/buyerdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/buyerdetails/buyerdetails.component.ts ***!
  \********************************************************/
/*! exports provided: BuyerdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerdetailsComponent", function() { return BuyerdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/forms.service */ "./src/app/forms/forms.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alertdialogbuyer/alertdialogbuyer.component */ "./src/app/alertdialogbuyer/alertdialogbuyer.component.ts");









let BuyerdetailsComponent = class BuyerdetailsComponent {
    constructor(activatedRoute, formsService, authService, afAuth, stateService, dialog, snackBar, route) {
        this.activatedRoute = activatedRoute;
        this.formsService = formsService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
    }
    ngOnInit() {
        // Auth
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
                this.LoggedIn();
            }
            else {
                localStorage.setItem("user", null);
                this.LoggedOut();
            }
        });
        this.Buyer = this.stateService.Buyer;
    }
    submitForm() {
        this.isLoading = true;
        this.return = this.formsService.createCustomer(this.userData.uid, this.Buyer).then(data => {
            if (data == true) {
                this.isLoading = false;
                const dialogRef = this.dialog.open(_alertdialogbuyer_alertdialogbuyer_component__WEBPACK_IMPORTED_MODULE_8__["AlertdialogbuyerComponent"], {
                    data: {
                        message: 'HelloWorld',
                        buttonText: {
                            cancel: 'Done'
                        }
                    },
                });
            }
        });
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
};
BuyerdetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BuyerdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-buyerdetails",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyerdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buyerdetails/buyerdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyerdetails.component.css */ "./src/app/buyerdetails/buyerdetails.component.css")).default]
    })
], BuyerdetailsComponent);



/***/ }),

/***/ "./src/app/chats/chats.component.css":
/*!*******************************************!*\
  !*** ./src/app/chats/chats.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chats-main-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n\n}\n.property-detail-h3\n{\n    font-family: 'Open Sans', sans-serif;\n \n    font-size: 24px;\n    text-align: center;\n    margin: 15px 0px 15px 0px;\n}\n.chat-container\n{\n    background-color: white;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-content: center;\n    align-items: center;\n    padding: 15px;\n\n}\n.chat-p {\n    margin-right: 50px;\n    margin-top: 10px;\n    text-align: center;\n    font-size: 20px;\n}\n.user-class {\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdHMtbWFpbi1jb250YWluZXJcbntcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG5cbn1cbi5wcm9wZXJ0eS1kZXRhaWwtaDNcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xufVxuLmNoYXQtY29udGFpbmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbn1cbi5jaGF0LXAge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udXNlci1jbGFzcyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chats/chats.component.ts":
/*!******************************************!*\
  !*** ./src/app/chats/chats.component.ts ***!
  \******************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatsComponent = class ChatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chats.component.css */ "./src/app/chats/chats.component.css")).default]
    })
], ChatsComponent);



/***/ }),

/***/ "./src/app/common.css":
/*!****************************!*\
  !*** ./src/app/common.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  margin: 1em;\n}\n\nmat-card-title {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-social-login\n{\n    width: 100%;\n    background-color: #244D93;\n    color: white;\n  \n    font-family: 'Open Sans', sans-serif;\n   width: 80%;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZOztJQUVaLG9DQUFvQztHQUNyQyxVQUFVO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNvY2lhbC1sb2dpblxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICBcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICB3aWR0aDogODAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");



let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-facebook\n\n\n{\n background-color: #244D93;\n color: white;\n width: 30%;\n    height: 35px;\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.btn-google\n{\n    background-color: #DD4B33;\n    color: white;\n    width: 30%;\n    height: 35px;\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.social-login h4\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 700;\n}\n.social-button {\n    display: flex;\n    /* justify-content: center; */\n    justify-content: space-evenly;\n    align-items: center;\n\n}\n.color-signup\n{\n    color: #244D93;\n}\n.btn-social-login\n{\n    width: 100%;\n    background-color: #244D93;\n    color: white;\n    margin-top: 3%;\n    font-family: 'Open Sans', sans-serif;\n  \n}\ni.fa.fa-user.input-group-text.nav-login-form{\n  position: absolute;\n  font-size: 23px;\n  left: 0px;\n  width: 10%;\n  z-index: 10;\n  margin-top: -4%;\n}\n.social-login.text-center {\n  padding: 15px;\n}\n.checkbox\n{\n  background: none transparent;\n     border: none; \n     border-left: none; \n     border-right: none; \n    cursor: pointer;\n    /* display: block; */\n    height: auto;\n    position: absolute;\n    top: none; \n     left: none; \n    right: 9px;\n     width: none; \n    /* transition: all .2s; */\n    display: flex;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DOztBQUV4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSw0QkFBNEI7S0FDekIsWUFBWTtLQUNaLGlCQUFpQjtLQUNqQixrQkFBa0I7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7S0FDUixVQUFVO0lBQ1gsVUFBVTtLQUNULFdBQVc7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWZhY2Vib29rXG5cblxue1xuIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gY29sb3I6IHdoaXRlO1xuIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuLmJ0bi1nb29nbGVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5zb2NpYWwtbG9naW4gaDRcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zb2NpYWwtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5jb2xvci1zaWdudXBcbntcbiAgICBjb2xvcjogIzI0NEQ5Mztcbn1cbi5idG4tc29jaWFsLWxvZ2luXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBcbn1cbmkuZmEuZmEtdXNlci5pbnB1dC1ncm91cC10ZXh0Lm5hdi1sb2dpbi1mb3Jte1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAlO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuLnNvY2lhbC1sb2dpbi50ZXh0LWNlbnRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2hlY2tib3hcbntcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcbiAgICAgYm9yZGVyOiBub25lOyBcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7IFxuICAgICBib3JkZXItcmlnaHQ6IG5vbmU7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogbm9uZTsgXG4gICAgIGxlZnQ6IG5vbmU7IFxuICAgIHJpZ2h0OiA5cHg7XG4gICAgIHdpZHRoOiBub25lOyBcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgLjJzOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");



let SignInComponent = class SignInComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
SignInComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/verify-email/verify-email.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");



let VerifyEmailComponent = class VerifyEmailComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
VerifyEmailComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.component.css */ "./src/app/components/verify-email/verify-email.component.css")).default]
    })
], VerifyEmailComponent);



/***/ }),

/***/ "./src/app/confirmation/confirmation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-main-container {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.confirm-first-container {\n  background-color: white;\n  padding-bottom: 1px;\n}\n\n.table td,\n.table th {\n  padding: .75rem;\n  vertical-align: top;\n  border-top: none;\n}\n\n.confirm-page-heading {\n  margin-left: 16px;\n  /* margin-top: 9px; */\n  padding-top: 15px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  color: black;\n  font-size: 16px;\n}\n\ntable {\n  margin-left: 11px;\n  margin-top: -15px;\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.table td {\n  padding: 5px;\n}\n\n.details-p-headings {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  color: #5E5959;\n  font-size: 14px;\n\n}\n\n.output {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: lighter;\n}\n\n.endind-button {\n  /* background-color: unset; */\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.btn.btn-back {\n  width: 33%;\n  background-color: #244D93;\n  /* height: 35px; */\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.btn-next {\n  width: 33%;\n  background-color: #244D93;\n  /* height: 35px; */\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.or-text {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uY29uZmlybS1maXJzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLnRhYmxlIHRkLFxuLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogLjc1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY29uZmlybS1wYWdlLWhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgLyogbWFyZ2luLXRvcDogOXB4OyAqL1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudGFibGUge1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4udGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzVFNTk1OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG5cbi5vdXRwdXQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uZW5kaW5kLWJ1dHRvbiB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHVuc2V0OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLmJ0bi1iYWNrIHtcbiAgd2lkdGg6IDMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgd2lkdGg6IDMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLm9yLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sellerform_sellerform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sellerform/sellerform.service */ "./src/app/sellerform/sellerform.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert-dialog/alert-dialog.component */ "./src/app/alert-dialog/alert-dialog.component.ts");









let ConfirmationComponent = class ConfirmationComponent {
    constructor(activatedRoute, SellerformService, authService, afAuth, stateService, dialog, snackBar, route) {
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
    ngOnInit() {
        // Auth
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
                this.LoggedIn();
            }
            else {
                localStorage.setItem("user", null);
                this.LoggedOut();
            }
        });
        this.Seller = this.stateService.Seller;
    }
    submitForm() {
        this.isLoading = true;
        this.return = this.SellerformService.createCustomer(this.userData.uid, this.Seller).then(data => {
            if (data == true) {
                this.isLoading = false;
                const dialogRef = this.dialog.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], {
                    data: {
                        message: 'HelloWorld',
                        buttonText: {
                            cancel: 'Done'
                        }
                    },
                });
            }
        });
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
};
ConfirmationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _sellerform_sellerform_service__WEBPACK_IMPORTED_MODULE_3__["SellerformService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirmation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation.component.css */ "./src/app/confirmation/confirmation.component.css")).default]
    })
], ConfirmationComponent);



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-main-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    background-color: #EBEBEB;\npadding-bottom: 60px;\n    margin: 0;\n}\n.Profile-pic {\n    width: 37%;\n \n}\np.profile-heading {\n    /* text-align: center; */\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    align-items: center;\n    font-size: 27px;\n    padding-top: 7px;\n}\n.profile-name-image {\n    display: flex;\n    /* justify-content: space-evenly; */\n    justify-content: space-evenly;\n    align-items: center;\n    align-content: center;\n}\n.profile-name {\n    font-size: 25px;\n    color: red;\n    font-family: 'Open Sans', sans-serif;\n\n}\n.profile-name-field-option\n{\n    background-color: white;\n    padding-top: 20px;\n    padding-left: 10px;\n    margin-top: 30px;\n}\n.grid-container {\n    display: grid;\n    grid-template-columns: 3fr 4fr 1fr;\n    grid-gap: 10px;\n    padding: 0px;\n  }\n.grid-container > div {\n    background-color: rgba(255, 255, 255, 0.8);\n\n    padding: 0px 5px;\n   \n  }\n.fname-text1 {\n    font-size: 20px;\n    font-family: 'Open Sans', sans-serif;\n\n}\n.fname-text2 {\n    font-size: 20px;\n    font-family: 'Open Sans', sans-serif;\n\n}\n.fname-text3 {\n    font-size: 15px;\n    font-family: 'Open Sans', sans-serif;\n\n}\ninput#date {\n    /* width: 78%; */\n    margin-right: -58px;\n    padding: 0px;\n    /* margin: 0px; */\n}\n.edit-profile-submitbutton {\n    display: flex;\n    justify-content: space-evenly;\n    align-content: center;\n    align-items: center;\n    margin-top: 25px;\n}\n.btn-back {\n    background-color: white;\n    width: 31%;\n    color: black;\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QixvQkFBb0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysb0NBQW9DOztBQUV4QztBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsWUFBWTtFQUNkO0FBRUE7SUFDRSwwQ0FBMEM7O0lBRTFDLGdCQUFnQjs7RUFFbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixvQ0FBb0M7O0FBRXhDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DOztBQUV4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYWluLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xucGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLlByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogMzclO1xuIFxufVxucC5wcm9maWxlLWhlYWRpbmcge1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xufVxuLnByb2ZpbGUtbmFtZS1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9maWxlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxufVxuLnByb2ZpbGUtbmFtZS1maWVsZC1vcHRpb25cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLmdyaWQtY29udGFpbmVyID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgXG4gIH1cbiAgLmZuYW1lLXRleHQxIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG4uZm5hbWUtdGV4dDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cbn1cbi5mbmFtZS10ZXh0MyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxufVxuaW5wdXQjZGF0ZSB7XG4gICAgLyogd2lkdGg6IDc4JTsgKi9cbiAgICBtYXJnaW4tcmlnaHQ6IC01OHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvKiBtYXJnaW46IDBweDsgKi9cbn1cbi5lZGl0LXByb2ZpbGUtc3VibWl0YnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uYnRuLWJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzMSU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditprofileComponent = class EditprofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")).default]
    })
], EditprofileComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\n{\n    overflow-x: hidden;\n}\n.footer\n{\n    width: 100%;\n    background-color: #FCF4EE;\n    padding: 20px;\n  \n  \n}\n.image-social {\n    display: flex;\n  align-content: center;\n  justify-content: space-between;\n  justify-content: center;\n    margin: 0px;\n    padding: 0px;\n    align-items: center;\n}\nimg.facebook-icon {\n    width: 12%;\n    padding: 0.5%;\n}\n.twitter-icon\n{\n    width: 12%;\n    padding: 0.8%;\n}\n.instagram-icon\n{\n    padding: 0.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTs7O0FBR2pCO0FBQ0E7SUFDSSxhQUFhO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5Qix1QkFBdUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxue1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5mb290ZXJcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGNEVFO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIFxuICBcbn1cbi5pbWFnZS1zb2NpYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmltZy5mYWNlYm9vay1pY29uIHtcbiAgICB3aWR0aDogMTIlO1xuICAgIHBhZGRpbmc6IDAuNSU7XG59XG4udHdpdHRlci1pY29uXG57XG4gICAgd2lkdGg6IDEyJTtcbiAgICBwYWRkaW5nOiAwLjglO1xufVxuLmluc3RhZ3JhbS1pY29uXG57XG4gICAgcGFkZGluZzogMC41JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/forms/confirmation-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/forms/confirmation-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmationDialog = class ConfirmationDialog {
    constructor(data, dialogRef) {
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
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
ConfirmationDialog.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'confirmation-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/confirmation-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationDialog);



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-containers {\n  width: auto;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.forms-container {\n  padding-bottom: 4%;\n}\n.row {\n  overflow-x: hidden;\n}\n.btn-facebook {\n  background-color: #244d93;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.btn-google {\n  background-color: #dd4b33;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.social-login h4 {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700;\n}\n.social-button {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: space-evenly;\n  align-items: center;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}\n.color-signup {\n  color: #244d93;\n}\n.btn-social-login {\n  width: 100%;\n  background-color: #244d93;\n  color: white;\n  margin-top: 3%;\n  font-family: \"Open Sans\", sans-serif;\n}\n.dropdown-toggle::after {\n  margin-left: 0.255em;\n  vertical-align: 2.255em;\n  content: \"\";\n  border-top: 0.4em solid;\n  border-right: 0.4em solid transparent;\n  border-bottom: 0;\n  border-left: 0.4em solid transparent;\n  float: right;\n  text-align: center;\n  margin-top: 3%;\n}\n.btn.btn-back {\n  width: 33%;\n  background-color: #244d93;\n  /* height: 35px; */\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n}\n.btn-next {\n  width: 33%;\n  background-color: #244d93;\n  /* height: 35px; */\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n}\n.or-text {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n.second-container {\n  background-color: white;\n}\ninput#Tittle {\n  width: 20%;\n}\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n.button-next {\n  display: flex;\n  justify-content: center;\n  padding: 17px;\n}\n.button-next-tab2 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n}\n.form-check-input {\n  width: auto;\n}\n.last-radio-button {\n  margin-right: 0px;\n}\n.radio-align {\n\n  flex-direction: column;\n  margin: 0;\n  display: flex;\n}\n.input\n{\n  border: none;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n  border: none;\n}\n.mat-mail-input {\n  border: none;\n}\n.tabs-align-padding {\n \n  padding: 17px;\n  background: white;\n  margin: 10px;\n}\n.mat-tab-label {\n  height: 48px;\n  padding: 0 14px;\n  cursor: pointer;\n  box-sizing: border-box;\n  opacity: .6;\n  min-width: 160px;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n  font-size: 13px;\n}\n.social-login {\n  padding: 15px;\n}\n.social-login {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVycyB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmZvcm1zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbn1cbi5yb3cge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzMztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zb2NpYWwtbG9naW4gaDQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb2xvci1zaWdudXAge1xuICBjb2xvcjogIzI0NGQ5Mztcbn1cblxuLmJ0bi1zb2NpYWwtbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMi4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMC40ZW0gc29saWQ7XG4gIGJvcmRlci1yaWdodDogMC40ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuLmJ0bi5idG4tYmFjayB7XG4gIHdpZHRoOiAzMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDRkOTM7XG4gIC8qIGhlaWdodDogMzVweDsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgd2lkdGg6IDMzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ub3ItdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWNvbmQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0I1RpdHRsZSB7XG4gIHdpZHRoOiAyMCU7XG59XG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uYnV0dG9uLW5leHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTdweDtcbn1cblxuLmJ1dHRvbi1uZXh0LXRhYjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmxhc3QtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5yYWRpby1hbGlnbiB7XG5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmlucHV0XG57XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1hdC1tYWlsLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLnRhYnMtYWxpZ24tcGFkZGluZyB7XG4gXG4gIHBhZGRpbmc6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWF0LXRhYi1sYWJlbCB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG9wYWNpdHk6IC42O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uc29jaWFsLWxvZ2luIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zb2NpYWwtbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/app/forms/forms.ts");
/* harmony import */ var _forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms.service */ "./src/app/forms/forms.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _requireMatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requireMatch */ "./src/app/forms/requireMatch.ts");
/* harmony import */ var _ukpincodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ukpincodes */ "./src/app/forms/ukpincodes.ts");













let FormsComponent = class FormsComponent {
    constructor(authService, afs, // Inject Firestore service
    formsService, firestore, afAuth, db, dialog, snackBar, route, router, stateService) {
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
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email
        ]);
        this.lastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)
        ]);
        this.firstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)
        ]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)
        ]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)
        ]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)
        ]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)
        ]);
        this.projects = _ukpincodes__WEBPACK_IMPORTED_MODULE_12__["proj"];
    }
    toggleBackground() {
        this.background = this.background ? "" : "primary";
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
                this.LoggedIn();
            }
            else {
                localStorage.setItem("user", null);
                this.LoggedOut();
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _requireMatch__WEBPACK_IMPORTED_MODULE_11__["RequireMatch"]]),
        });
    }
    displayWith(obj) {
        return obj ? obj.postcode : undefined;
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    newCustomer() {
        this.submitted = false;
        this.Buyer = new _forms__WEBPACK_IMPORTED_MODULE_3__["Buyer"]();
    }
    onSubmit() {
        this.stateService.Buyer = this.Buyer;
        this.router.navigate(["buyerdetails"]);
    }
};
FormsComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_9__["StateServiceService"] }
];
FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forms",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")).default]
    })
], FormsComponent);



/***/ }),

/***/ "./src/app/forms/forms.service.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.service.ts ***!
  \****************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let FormsService = class FormsService {
    constructor(db) {
        this.db = db;
        this.dbPath = "Buyer";
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customersRef = null;
        this.customersRef = db.collection(this.dbPath);
    }
    createCustomer(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.customersRef
                .doc(key)
                .collection("requirements")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Document successfully written!");
            });
            return true;
        });
    }
    updateCustomer(key, value) {
        return this.customersRef.doc(key).update(value);
    }
    deleteCustomer(key) {
        return this.customersRef.doc(key).delete();
    }
    getCustomersList() {
        return this.customersRef;
    }
    deleteAll() {
        this.customersRef.get().subscribe(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
            });
        }, error => {
            console.log("Error: ", error);
        });
    }
};
FormsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], FormsService);



/***/ }),

/***/ "./src/app/forms/forms.ts":
/*!********************************!*\
  !*** ./src/app/forms/forms.ts ***!
  \********************************/
/*! exports provided: Buyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buyer", function() { return Buyer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Buyer {
    constructor() {
        this.title = "Mr";
        this.ChainStatus = "First Time Buyer";
        this.FinancialPosition = "Mortgage Free";
        this.Type = "Buying to Live";
        this.Position = "Cash Buyer";
        this.Propertytype = "Flat";
        this.SearchRadius = 5;
        this.PriceRange = 0;
        this.active = true;
    }
}


/***/ }),

/***/ "./src/app/forms/material.ts":
/*!***********************************!*\
  !*** ./src/app/forms/material.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/forms/requireMatch.ts":
/*!***************************************!*\
  !*** ./src/app/forms/requireMatch.ts ***!
  \***************************************/
/*! exports provided: RequireMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireMatch", function() { return RequireMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function RequireMatch(control) {
    const selection = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}


/***/ }),

/***/ "./src/app/forms/ukpincodes.ts":
/*!*************************************!*\
  !*** ./src/app/forms/ukpincodes.ts ***!
  \*************************************/
/*! exports provided: proj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proj", function() { return proj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const proj = [
    {
        postcode: "AB10 1XG",
        latitude: "57.14416516",
        longitude: "-2.114847768"
    },
    {
        postcode: "AB21 7LF",
        latitude: "57.20342973",
        longitude: "-2.173905553"
    },
    {
        postcode: "AB21 7LG",
        latitude: "57.2109551",
        longitude: " -2.1818873"
    },
    {
        postcode: "AB10 1XG",
        latitude: "57.14416516",
        longitude: "-2.114847768"
    },
    {
        postcode: "AB10 6RN",
        latitude: "57.13787976",
        longitude: "-2.121486688"
    },
    {
        postcode: "AB10 7JB",
        latitude: "57.12427377",
        longitude: "-2.127189644"
    },
    {
        postcode: "AB11 5QN",
        latitude: "57.14270109",
        longitude: "-2.093295"
    },
    {
        postcode: "AB11 6UL",
        latitude: "57.13754663",
        longitude: "-2.112233"
    },
    {
        postcode: "AB11 8RQ",
        latitude: "57.13597762",
        longitude: "-2.072114784"
    },
    {
        postcode: "AB12 3FJ",
        latitude: "57.0980029",
        longitude: "-2.077438"
    },
    {
        postcode: "AB12 4NA",
        latitude: "57.06427275",
        longitude: "-2.130018015"
    },
    {
        postcode: "AB12 5GL",
        latitude: "57.08193792",
        longitude: "-2.246567389"
    },
    {
        postcode: "AB12 9SP",
        latitude: "57.14870708",
        longitude: "-2.097806027"
    },
    {
        postcode: "AB14 0TQ",
        latitude: "57.10155692",
        longitude: "-2.268485752"
    },
    {
        postcode: "AB15 5HB",
        latitude: "57.147428",
        longitude: "-2.1472662"
    },
    {
        postcode: "AB15 6NA",
        latitude: "57.151797",
        longitude: "-2.185398"
    },
    {
        postcode: "AB15 8UF",
        latitude: "57.15400596",
        longitude: "-2.22440188"
    },
    {
        postcode: "AB15 9SE",
        latitude: "57.11864762",
        longitude: "-2.174250607"
    },
    {
        postcode: "AB16 5ST",
        latitude: "57.16346588",
        longitude: "-2.15933343"
    },
    {
        postcode: "AB16 6SZ",
        latitude: "57.15875117",
        longitude: "-2.165214861"
    },
    {
        postcode: "AB16 7NX",
        latitude: "57.1684384",
        longitude: "-2.161636"
    },
    {
        postcode: "AB21 0AL",
        latitude: "57.26342",
        longitude: "-2.158605"
    },
    {
        postcode: "AB21 0TF",
        latitude: "57.221883",
        longitude: "-2.273318"
    },
    {
        postcode: "AB21 7LD",
        latitude: "57.21213578",
        longitude: "-2.185602"
    },
    {
        postcode: "AB21 7LE",
        latitude: "57.21176269",
        longitude: "-2.182487264"
    },
    {
        postcode: "AB21 7LF",
        latitude: "57.20342973",
        longitude: "-2.173905553"
    },
    {
        postcode: "AB21 7LG",
        latitude: "57.2109551",
        longitude: "-2.1818873"
    },
    {
        postcode: "AB21 7LH",
        latitude: "57.21026483",
        longitude: "-2.180907185"
    },
    {
        postcode: "AB21 7LJ",
        latitude: "57.21035313",
        longitude: "-2.181967108"
    },
    {
        postcode: "AB21 7LL",
        latitude: "57.21245975",
        longitude: "-2.184957476"
    },
    {
        postcode: "AB21 7LN",
        latitude: "57.21032413",
        longitude: "-2.1833741"
    },
    {
        postcode: "AB21 7LP",
        latitude: "57.20990264",
        longitude: "-2.182891931"
    },
    {
        postcode: "AB21 7LQ",
        latitude: "57.209272",
        longitude: "-2.183832"
    },
    {
        postcode: "AB21 7LR",
        latitude: "57.20890384",
        longitude: "-2.184045758"
    },
    {
        postcode: "AB21 7LS",
        latitude: "57.20880379",
        longitude: "-2.184889505"
    },
    {
        postcode: "AB21 7LT",
        latitude: "57.20906884",
        longitude: "-2.181778686"
    },
    {
        postcode: "AB21 7LU",
        latitude: "57.20888863",
        longitude: "-2.182158539"
    },
    {
        postcode: "AB21 7LW",
        latitude: "57.20477389",
        longitude: "-2.176262271"
    },
    {
        postcode: "AB21 7LX",
        latitude: "57.21008563",
        longitude: "-2.180591773"
    },
    {
        postcode: "AB21 7LY",
        latitude: "57.21018632",
        longitude: "-2.179284462"
    },
    {
        postcode: "AB21 7LZ",
        latitude: "57.20943173",
        longitude: "-2.179297353"
    },
    {
        postcode: "AB21 7NA",
        latitude: "57.20944281",
        longitude: "-2.177824089"
    },
    {
        postcode: "AB21 7NB",
        latitude: "57.20886052",
        longitude: "-2.176695622"
    },
    {
        postcode: "AB21 7ND",
        latitude: "57.20869801",
        longitude: "-2.177274228"
    },
    {
        postcode: "AB21 7NE",
        latitude: "57.20905905",
        longitude: "-2.176050968"
    },
    {
        postcode: "AB21 7NF",
        latitude: "57.20572651",
        longitude: "-2.17595232"
    },
    {
        postcode: "AB21 7NG",
        latitude: "57.20437174",
        longitude: "-2.176128"
    },
    {
        postcode: "AB21 7NH",
        latitude: "57.2075614",
        longitude: "-2.174256073"
    },
    {
        postcode: "AB21 7NJ",
        latitude: "57.20852021",
        longitude: "-2.175949077"
    },
    {
        postcode: "AB21 7NP",
        latitude: "57.20744352",
        longitude: "-2.175050072"
    },
    {
        postcode: "AB21 7NQ",
        latitude: "57.20672308",
        longitude: "-2.176337785"
    },
    {
        postcode: "AB21 7NR",
        latitude: "57.20738739",
        longitude: "-2.176638915"
    },
    {
        postcode: "AB21 7NS",
        latitude: "57.20773663",
        longitude: "-2.177418593"
    },
    {
        postcode: "AB21 7NX",
        latitude: "57.234409",
        longitude: "-2.187884"
    },
    {
        postcode: "AB21 7NY",
        latitude: "57.227939",
        longitude: "-2.170957"
    },
    {
        postcode: "AB21 7PB",
        latitude: "57.196572",
        longitude: "-2.182743"
    },
    {
        postcode: "AB21 7PE",
        latitude: "57.24397199",
        longitude: "-2.165530199"
    },
    {
        postcode: "AB21 7PH",
        latitude: "57.25003939",
        longitude: "-2.162508131"
    },
    {
        postcode: "AB21 7PP",
        latitude: "57.260503",
        longitude: "-2.176926"
    },
    {
        postcode: "AB21 7PQ",
        latitude: "57.25335422",
        longitude: "-2.182030123"
    },
    {
        postcode: "AB21 7PR",
        latitude: "57.256957",
        longitude: "-2.181219894"
    },
    {
        postcode: "AB21 7PS",
        latitude: "57.25068153",
        longitude: "-2.191281023"
    },
    {
        postcode: "AB21 7PU",
        latitude: "57.248606",
        longitude: "-2.175018"
    },
    {
        postcode: "AB21 7PW",
        latitude: "57.2558193",
        longitude: "-2.172876"
    },
    {
        postcode: "AB21 7PY",
        latitude: "57.25559803",
        longitude: "-2.195251339"
    },
    {
        postcode: "AB21 7PZ",
        latitude: "57.26069219",
        longitude: "-2.200400651"
    },
    {
        postcode: "AB21 7QQ",
        latitude: "57.19981186",
        longitude: "-2.190885191"
    },
    {
        postcode: "AB21 7UU",
        latitude: "57.23941856",
        longitude: "-2.190245134"
    },
    {
        postcode: "AB21 7XA",
        latitude: "57.225777",
        longitude: "-2.161656"
    },
    {
        postcode: "AB21 7XB",
        latitude: "57.23719184",
        longitude: "-2.164406"
    },
    {
        postcode: "AB21 7YS",
        latitude: "57.19981186",
        longitude: "-2.190885191"
    },
    {
        postcode: "AB21 9AB",
        latitude: "57.189905",
        longitude: "-2.170814"
    },
    {
        postcode: "AB21 9AD",
        latitude: "57.177536",
        longitude: "-2.170923179"
    },
    {
        postcode: "AB21 9AE",
        latitude: "57.17852307",
        longitude: "-2.171654686"
    },
    {
        postcode: "AB21 9AG",
        latitude: "57.17780848",
        longitude: "-2.168327"
    },
    {
        postcode: "AB21 9AH",
        latitude: "57.17933943",
        longitude: "-2.172452428"
    },
    {
        postcode: "AB21 9AJ",
        latitude: "57.1788539",
        longitude: "-2.172780973"
    },
    {
        postcode: "AB21 9AL",
        latitude: "57.17953523",
        longitude: "-2.173776602"
    },
    {
        postcode: "AB21 9AN",
        latitude: "57.17830289",
        longitude: "-2.174978245"
    },
    {
        postcode: "AB21 9AP",
        latitude: "57.177288",
        longitude: "-2.17461"
    },
    {
        postcode: "AB21 9AR",
        latitude: "57.17849405",
        longitude: "-2.173159718"
    },
    {
        postcode: "AB21 9AS",
        latitude: "57.17642552",
        longitude: "-2.174919743"
    },
    {
        postcode: "AB21 9AT",
        latitude: "57.17786761",
        longitude: "-2.177887227"
    },
    {
        postcode: "AB21 9AU",
        latitude: "57.17827773",
        longitude: "-2.180055966"
    },
    {
        postcode: "AB21 9AX",
        latitude: "57.179997",
        longitude: "-2.183654"
    },
    {
        postcode: "AB21 9AY",
        latitude: "57.17901827",
        longitude: "-2.183533084"
    },
    {
        postcode: "AB21 9BB",
        latitude: "57.17977019",
        longitude: "-2.185339771"
    },
    {
        postcode: "AB21 9BD",
        latitude: "57.17927605",
        longitude: "-2.185386916"
    },
    {
        postcode: "AB21 9BE",
        latitude: "57.17842416",
        longitude: "-2.184373689"
    },
    {
        postcode: "AB21 9BG",
        latitude: "57.17547777",
        longitude: "-2.157681"
    },
    {
        postcode: "AB21 9BH",
        latitude: "57.1766626",
        longitude: "-2.178659"
    },
    {
        postcode: "AB21 9BJ",
        latitude: "57.17630577",
        longitude: "-2.177036209"
    },
    {
        postcode: "AB21 9BL",
        latitude: "57.1753406",
        longitude: "-2.179843198"
    },
    {
        postcode: "AB21 9BN",
        latitude: "57.17591763",
        longitude: "-2.178357482"
    },
    {
        postcode: "AB21 9BP",
        latitude: "57.17632981",
        longitude: "-2.1790872"
    },
    {
        postcode: "AB21 9BQ",
        latitude: "57.17600307",
        longitude: "-2.181417643"
    },
    {
        postcode: "AB21 9BR",
        latitude: "57.17540996",
        longitude: "-2.181580122"
    },
    {
        postcode: "AB21 9BS",
        latitude: "57.17485431",
        longitude: "-2.180684306"
    },
    {
        postcode: "AB21 9BT",
        latitude: "57.17460099",
        longitude: "-2.18192346"
    },
    {
        postcode: "AB21 9BU",
        latitude: "57.17372803",
        longitude: "-2.183027222"
    },
    {
        postcode: "AB21 9BX",
        latitude: "57.1749244",
        longitude: "-2.181908512"
    },
    {
        postcode: "AB21 9BY",
        latitude: "57.17493932",
        longitude: "-2.183992463"
    },
    {
        postcode: "AB21 9DA",
        latitude: "57.17384698",
        longitude: "-2.181539371"
    },
    {
        postcode: "AB21 9DB",
        latitude: "57.17357675",
        longitude: "-2.182050726"
    },
    {
        postcode: "AB21 9DD",
        latitude: "57.17464349",
        longitude: "-2.183577526"
    },
    {
        postcode: "AB21 9DE",
        latitude: "57.17418288",
        longitude: "-2.185262154"
    },
    {
        postcode: "AB21 9DF",
        latitude: "57.17446825",
        longitude: "-2.186669356"
    },
    {
        postcode: "AB21 9DG",
        latitude: "57.17655574",
        longitude: "-2.182264"
    },
    {
        postcode: "AB21 9DH",
        latitude: "57.17467266",
        longitude: "-2.188142322"
    },
    {
        postcode: "AB21 9DJ",
        latitude: "57.17519768",
        longitude: "-2.185449164"
    },
    {
        postcode: "AB21 9DL",
        latitude: "57.17540663",
        longitude: "-2.183862476"
    },
    {
        postcode: "AB21 9DN",
        latitude: "57.17579391",
        longitude: "-2.18316976"
    },
    {
        postcode: "AB21 9DP",
        latitude: "57.17636344",
        longitude: "-2.18069168"
    },
    {
        postcode: "AB21 9DQ",
        latitude: "57.17709329",
        longitude: "-2.179140517"
    },
    {
        postcode: "AB21 9DR",
        latitude: "57.17705065",
        longitude: "-2.177535965"
    },
    {
        postcode: "AB21 9DT",
        latitude: "57.1775465",
        longitude: "-2.169764607"
    },
    {
        postcode: "AB21 9DU",
        latitude: "57.178677",
        longitude: "-2.170710484"
    },
    {
        postcode: "AB21 9DX",
        latitude: "57.18105185",
        longitude: "-2.174858924"
    },
    {
        postcode: "AB21 9DY",
        latitude: "57.18217946",
        longitude: "-2.177874891"
    },
    {
        postcode: "AB21 9EA",
        latitude: "57.18220781",
        longitude: "-2.17688251"
    },
    {
        postcode: "AB21 9EB",
        latitude: "57.18309423",
        longitude: "-2.179087"
    },
    {
        postcode: "AB21 9ED",
        latitude: "57.18358713",
        longitude: "-2.179734432"
    },
    {
        postcode: "AB21 9EE",
        latitude: "57.18391907",
        longitude: "-2.180033815"
    },
    {
        postcode: "AB21 9EF",
        latitude: "57.18246934",
        longitude: "-2.17615591"
    },
    {
        postcode: "AB21 9EG",
        latitude: "57.18154195",
        longitude: "-2.176531"
    },
    {
        postcode: "AB21 9EH",
        latitude: "57.18357966",
        longitude: "-2.178675671"
    },
    {
        postcode: "AB21 9EJ",
        latitude: "57.18310477",
        longitude: "-2.177829716"
    },
    {
        postcode: "AB21 9EL",
        latitude: "57.18344098",
        longitude: "-2.181421057"
    },
    {
        postcode: "AB21 9EN",
        latitude: "57.184346",
        longitude: "-2.182848"
    },
    {
        postcode: "AB21 9EP",
        latitude: "57.18457661",
        longitude: "-2.184983378"
    },
    {
        postcode: "AB21 9EQ",
        latitude: "57.18407483",
        longitude: "-2.184120642"
    },
    {
        postcode: "AB21 9ER",
        latitude: "57.18243035",
        longitude: "-2.184526004"
    },
    {
        postcode: "AB21 9ET",
        latitude: "57.181302",
        longitude: "-2.181626"
    },
    {
        postcode: "AB21 9EU",
        latitude: "57.18173326",
        longitude: "-2.182074346"
    },
    {
        postcode: "AB21 9EW",
        latitude: "57.18359058",
        longitude: "-2.183555783"
    },
    {
        postcode: "AB21 9EX",
        latitude: "57.18073324",
        longitude: "-2.184070918"
    },
    {
        postcode: "AB21 9EY",
        latitude: "57.18098381",
        longitude: "-2.184717281"
    },
    {
        postcode: "AB21 9HA",
        latitude: "57.18133895",
        longitude: "-2.187415"
    },
    {
        postcode: "AB21 9HB",
        latitude: "57.17998167",
        longitude: "-2.182016098"
    },
    {
        postcode: "AB21 9HE",
        latitude: "57.17976508",
        longitude: "-2.169923662"
    },
    {
        postcode: "AB21 9HH",
        latitude: "57.17948533",
        longitude: "-2.170369"
    },
    {
        postcode: "AB21 9HJ",
        latitude: "57.18665703",
        longitude: "-2.181321034"
    },
    {
        postcode: "AB21 9HN",
        latitude: "57.18803294",
        longitude: "-2.180268932"
    },
    {
        postcode: "AB21 9HQ",
        latitude: "57.183863",
        longitude: "-2.181175"
    },
    {
        postcode: "AB21 9HR",
        latitude: "57.184196",
        longitude: "-2.180763"
    },
    {
        postcode: "AB21 9HS",
        latitude: "57.18670953",
        longitude: "-2.182280841"
    },
    {
        postcode: "AB21 9HT",
        latitude: "57.18565976",
        longitude: "-2.181431946"
    },
    {
        postcode: "AB21 9HU",
        latitude: "57.18860644",
        longitude: "-2.181247873"
    },
    {
        postcode: "AB21 9HW",
        latitude: "57.18822243",
        longitude: "-2.179674249"
    },
    {
        postcode: "AB21 9HX",
        latitude: "57.18805643",
        longitude: "-2.17653"
    },
    {
        postcode: "AB21 9HY",
        latitude: "57.18963254",
        longitude: "-2.179830011"
    },
    {
        postcode: "AB21 9HZ",
        latitude: "57.18701758",
        longitude: "-2.180462509"
    },
    {
        postcode: "AB21 9JB",
        latitude: "57.18996383",
        longitude: "-2.180576167"
    },
    {
        postcode: "AB21 9JD",
        latitude: "57.190324",
        longitude: "-2.179567995"
    },
    {
        postcode: "AB21 9JE",
        latitude: "57.19068017",
        longitude: "-2.182168058"
    },
    {
        postcode: "AB21 9JH",
        latitude: "57.19089426",
        longitude: "-2.183194956"
    },
    {
        postcode: "AB21 9JJ",
        latitude: "57.191223",
        longitude: "-2.186158"
    },
    {
        postcode: "AB21 9JL",
        latitude: "57.19092559",
        longitude: "-2.186322277"
    },
    {
        postcode: "AB21 9JP",
        latitude: "57.190004",
        longitude: "-2.183986333"
    },
    {
        postcode: "AB21 9JQ",
        latitude: "57.18997006",
        longitude: "-2.182478921"
    },
    {
        postcode: "AB21 9JR",
        latitude: "57.18968951",
        longitude: "-2.184744"
    },
    {
        postcode: "AB21 9JS",
        latitude: "57.19185892",
        longitude: "-2.180800528"
    },
    {
        postcode: "AB21 9JT",
        latitude: "57.19096554",
        longitude: "-2.177007"
    },
    {
        postcode: "AB21 9JU",
        latitude: "57.19209418",
        longitude: "-2.179610341"
    },
    {
        postcode: "AB21 9JX",
        latitude: "57.1938524",
        longitude: "-2.181306697"
    },
    {
        postcode: "AB21 9JY",
        latitude: "57.19136462",
        longitude: "-2.180963571"
    },
    {
        postcode: "AB21 9LA",
        latitude: "57.190951",
        longitude: "-2.175038"
    },
    {
        postcode: "AB21 9LB",
        latitude: "57.17748483",
        longitude: "-2.168871172"
    },
    {
        postcode: "AB21 9LD",
        latitude: "57.17704491",
        longitude: "-2.168687227"
    },
    {
        postcode: "AB21 9LE",
        latitude: "57.17755312",
        longitude: "-2.171501324"
    },
    {
        postcode: "AB21 9LF",
        latitude: "57.17318065",
        longitude: "-2.156034632"
    },
    {
        postcode: "AB21 9LG",
        latitude: "57.17497928",
        longitude: "-2.168347029"
    },
    {
        postcode: "AB21 9LJ",
        latitude: "57.17679912",
        longitude: "-2.171084338"
    },
    {
        postcode: "AB21 9LL",
        latitude: "57.17723881",
        longitude: "-2.171433707"
    },
    {
        postcode: "AB21 9LN",
        latitude: "57.17790107",
        longitude: "-2.173239641"
    },
    {
        postcode: "AB21 9LP",
        latitude: "57.17647219",
        longitude: "-2.167047215"
    },
    {
        postcode: "AB21 9LQ",
        latitude: "57.1770927",
        longitude: "-2.166289"
    },
    {
        postcode: "AB21 9LR",
        latitude: "57.17683432",
        longitude: "-2.164931789"
    },
    {
        postcode: "AB21 9LS",
        latitude: "57.1764492",
        longitude: "-2.164053484"
    },
    {
        postcode: "AB21 9LT",
        latitude: "57.17529817",
        longitude: "-2.164974553"
    },
    {
        postcode: "AB21 9LU",
        latitude: "57.176151",
        longitude: "-2.164863"
    },
    {
        postcode: "AB21 9LW",
        latitude: "57.17498494",
        longitude: "-2.164080065"
    },
    {
        postcode: "AB21 9LX",
        latitude: "57.175291",
        longitude: "-2.163056"
    },
    {
        postcode: "AB21 9LZ",
        latitude: "57.17920705",
        longitude: "-2.177198966"
    },
    {
        postcode: "AB21 9NA",
        latitude: "57.1755707",
        longitude: "-2.162643772"
    },
    {
        postcode: "AB21 9NB",
        latitude: "57.173947",
        longitude: "-2.160685"
    },
    {
        postcode: "AB21 9ND",
        latitude: "57.17367479",
        longitude: "-2.155970565"
    },
    {
        postcode: "AB21 9NL",
        latitude: "57.17362402",
        longitude: "-2.153308"
    },
    {
        postcode: "AB21 9NN",
        latitude: "57.17343843",
        longitude: "-2.150925469"
    },
    {
        postcode: "AB21 9NP",
        latitude: "57.176529",
        longitude: "-2.157653"
    },
    {
        postcode: "AB21 9NS",
        latitude: "57.17568158",
        longitude: "-2.153068162"
    },
    {
        postcode: "AB21 9NT",
        latitude: "57.178448",
        longitude: "-2.160026"
    },
    {
        postcode: "AB21 9NU",
        latitude: "57.17916414",
        longitude: "-2.169242736"
    },
    {
        postcode: "AB21 9NX",
        latitude: "57.178122",
        longitude: "-2.162324"
    },
    {
        postcode: "AB21 9NY",
        latitude: "57.1761219",
        longitude: "-2.15995"
    },
    {
        postcode: "AB21 9PA",
        latitude: "57.17932894",
        longitude: "-2.166927798"
    },
    {
        postcode: "AB21 9PB",
        latitude: "57.17848224",
        longitude: "-2.168644164"
    },
    {
        postcode: "AB21 9PD",
        latitude: "57.17505314",
        longitude: "-2.173474379"
    },
    {
        postcode: "AB21 0TG",
        latitude: "57.19169523",
        longitude: "-2.287688298"
    },
    {
        postcode: "AB21 0TH",
        latitude: "57.19400333",
        longitude: "-2.27997868"
    },
    {
        postcode: "AB21 0TJ",
        latitude: "57.2019023",
        longitude: "-2.278664796"
    },
    {
        postcode: "AB21 0TL",
        latitude: "57.197769",
        longitude: "-2.278898"
    },
    {
        postcode: "AB21 0TN",
        latitude: "57.18741832",
        longitude: "-2.276140172"
    },
    {
        postcode: "AB21 0TP",
        latitude: "57.18699492",
        longitude: "-2.288644382"
    },
    {
        postcode: "AB21 0TQ",
        latitude: "57.182373",
        longitude: "-2.294581507"
    },
    {
        postcode: "AB21 0TR",
        latitude: "57.178136",
        longitude: "-2.300716"
    },
    {
        postcode: "AB21 0TS",
        latitude: "57.1846082",
        longitude: "-2.303068"
    },
    {
        postcode: "AB21 0TT",
        latitude: "57.19090046",
        longitude: "-2.257899"
    },
    {
        postcode: "AB21 0TU",
        latitude: "57.196678",
        longitude: "-2.242318"
    },
    {
        postcode: "AB21 0TW",
        latitude: "57.20754433",
        longitude: "-2.286321875"
    },
    {
        postcode: "AB21 0TX",
        latitude: "57.19791491",
        longitude: "-2.2657596"
    },
    {
        postcode: "AB21 0TY",
        latitude: "57.19961469",
        longitude: "-2.264811934"
    },
    {
        postcode: "AB21 0TZ",
        latitude: "57.18946005",
        longitude: "-2.274964162"
    },
    {
        postcode: "AB21 0UA",
        latitude: "57.26378399",
        longitude: "-2.187685168"
    },
    {
        postcode: "AB21 0UB",
        latitude: "57.21548974",
        longitude: "-2.195006101"
    },
    {
        postcode: "AB21 0UD",
        latitude: "57.27307547",
        longitude: "-2.185527002"
    },
    {
        postcode: "AB21 0UE",
        latitude: "57.2632708",
        longitude: "-2.155969"
    },
    {
        postcode: "AB21 0UF",
        latitude: "57.2670021",
        longitude: "-2.173641764"
    },
    {
        postcode: "AB21 0UG",
        latitude: "57.24394718",
        longitude: "-2.184154"
    },
    {
        postcode: "AB21 0UL",
        latitude: "57.271847",
        longitude: "-2.170829"
    },
    {
        postcode: "AB21 0UN",
        latitude: "57.28477643",
        longitude: "-2.155130503"
    },
    {
        postcode: "AB21 0UP",
        latitude: "57.28412848",
        longitude: "-2.169923947"
    },
    {
        postcode: "AB21 0UQ",
        latitude: "57.2662304",
        longitude: "-2.179440986"
    },
    {
        postcode: "AB21 0UR",
        latitude: "57.261788",
        longitude: "-2.182536"
    },
    {
        postcode: "AB21 0US",
        latitude: "57.25040342",
        longitude: "-2.17885021"
    },
    {
        postcode: "AB21 0UT",
        latitude: "57.23788008",
        longitude: "-2.179684101"
    },
    {
        postcode: "AB21 0UU",
        latitude: "57.26319941",
        longitude: "-2.188146382"
    },
    {
        postcode: "AB21 0UW",
        latitude: "57.2630805",
        longitude: "-2.183520461"
    },
    {
        postcode: "AB21 0UX",
        latitude: "57.31018894",
        longitude: "-2.258685064"
    },
    {
        postcode: "AB21 0UY",
        latitude: "57.26416285",
        longitude: "-2.186626062"
    },
    {
        postcode: "AB21 0UZ",
        latitude: "57.2632368",
        longitude: "-2.187168456"
    },
    {
        postcode: "AB21 0WA",
        latitude: "57.20619042",
        longitude: "-2.289141902"
    },
    {
        postcode: "AB21 0WB",
        latitude: "57.2649617",
        longitude: "-2.187044583"
    },
    {
        postcode: "AB21 0WF",
        latitude: "57.264052",
        longitude: "-2.182315"
    },
    {
        postcode: "AB21 0WG",
        latitude: "57.26563892",
        longitude: "-2.184677176"
    },
    {
        postcode: "AB21 0WH",
        latitude: "57.20285428",
        longitude: "-2.286732425"
    },
    {
        postcode: "AB21 0WJ",
        latitude: "57.26704519",
        longitude: "-2.193322387"
    },
    {
        postcode: "AB21 0WL",
        latitude: "57.26606643",
        longitude: "-2.193085139"
    },
    {
        postcode: "AB21 0WN",
        latitude: "57.26636987",
        longitude: "-2.194048"
    },
    {
        postcode: "AB21 0WP",
        latitude: "57.26665102",
        longitude: "-2.192623968"
    },
    {
        postcode: "AB21 0WQ",
        latitude: "57.26777407",
        longitude: "-2.192497195"
    },
    {
        postcode: "AB21 0WW",
        latitude: "57.26694751",
        longitude: "-2.186640165"
    },
    {
        postcode: "AB21 0WZ",
        latitude: "57.27040715",
        longitude: "-2.191781366"
    },
    {
        postcode: "AB21 0XA",
        latitude: "57.20344411",
        longitude: "-2.284121864"
    },
    {
        postcode: "AB21 0XB",
        latitude: "57.20408923",
        longitude: "-2.284855102"
    },
    {
        postcode: "AB21 0XD",
        latitude: "57.20339966",
        longitude: "-2.287862156"
    },
    {
        postcode: "AB21 0XF",
        latitude: "57.26262988",
        longitude: "-2.184529474"
    },
    {
        postcode: "AB21 0XG",
        latitude: "57.26350079",
        longitude: "-2.184815667"
    },
    {
        postcode: "AB21 0XN",
        latitude: "57.20236625",
        longitude: "-2.2836"
    },
    {
        postcode: "AB21 0XP",
        latitude: "57.20167577",
        longitude: "-2.283545546"
    },
    {
        postcode: "AB21 0XQ",
        latitude: "57.20749692",
        longitude: "-2.287414027"
    },
    {
        postcode: "AB21 0XR",
        latitude: "57.20803691",
        longitude: "-2.286971281"
    },
    {
        postcode: "AB21 0XS",
        latitude: "57.20759747",
        longitude: "-2.286653354"
    },
    {
        postcode: "AB21 0XT",
        latitude: "57.20713613",
        longitude: "-2.288056794"
    },
    {
        postcode: "AB21 0XU",
        latitude: "57.20690977",
        longitude: "-2.288833023"
    },
    {
        postcode: "AB21 0XW",
        latitude: "57.20592318",
        longitude: "-2.288163207"
    },
    {
        postcode: "AB21 0XX",
        latitude: "57.20522416",
        longitude: "-2.287446008"
    },
    {
        postcode: "AB21 0XY",
        latitude: "57.23748289",
        longitude: "-2.262399767"
    },
    {
        postcode: "AB21 0XZ",
        latitude: "57.26329729",
        longitude: "-2.182692626"
    },
    {
        postcode: "AB21 0YA",
        latitude: "57.23766981",
        longitude: "-2.267470542"
    },
    {
        postcode: "AB21 0YB",
        latitude: "57.23689375",
        longitude: "-2.264897115"
    },
    {
        postcode: "AB21 0YD",
        latitude: "57.240101",
        longitude: "-2.277313"
    },
    {
        postcode: "AB21 0YE",
        latitude: "57.23582968",
        longitude: "-2.2668277"
    },
    {
        postcode: "AB21 0YF",
        latitude: "57.23726236",
        longitude: "-2.264750661"
    },
    {
        postcode: "AB21 0YG",
        latitude: "57.23768231",
        longitude: "-2.26581395"
    },
    {
        postcode: "AB21 0YL",
        latitude: "57.238205",
        longitude: "-2.285599"
    },
    {
        postcode: "AB21 0YN",
        latitude: "57.20232456",
        longitude: "-2.286612458"
    },
    {
        postcode: "AB21 0YP",
        latitude: "57.20239098",
        longitude: "-2.285057176"
    },
    {
        postcode: "AB21 0YQ",
        latitude: "57.248493",
        longitude: "-2.263539"
    },
    {
        postcode: "AB21 0YR",
        latitude: "57.2543685",
        longitude: "-2.267028"
    },
    {
        postcode: "AB21 0YS",
        latitude: "57.258119",
        longitude: "-2.282123"
    },
    {
        postcode: "AB21 0YT",
        latitude: "57.26366187",
        longitude: "-2.273710214"
    },
    {
        postcode: "AB21 0YX",
        latitude: "57.2746572",
        longitude: "-2.277672388"
    },
    {
        postcode: "AB21 0ZR",
        latitude: "57.20511732",
        longitude: "-2.294777824"
    },
    {
        postcode: "AB21 0ZS",
        latitude: "57.204815",
        longitude: "-2.2931521"
    },
    {
        postcode: "AB21 0ZT",
        latitude: "57.20425179",
        longitude: "-2.292073"
    },
    {
        postcode: "AB21 7AA",
        latitude: "57.20958",
        longitude: "-2.188584334"
    },
    {
        postcode: "AB21 7AB",
        latitude: "57.21153045",
        longitude: "-2.187684408"
    },
    {
        postcode: "AB21 7AD",
        latitude: "57.20968008",
        longitude: "-2.187608788"
    },
    {
        postcode: "AB21 7AE",
        latitude: "57.211316",
        longitude: "-2.186806"
    },
    {
        postcode: "AB21 7AF",
        latitude: "57.212604",
        longitude: "-2.190223"
    },
    {
        postcode: "AB21 7AG",
        latitude: "57.21200391",
        longitude: "-2.189441674"
    },
    {
        postcode: "AB21 7AH",
        latitude: "57.215315",
        longitude: "-2.185419"
    },
    {
        postcode: "AB21 7AJ",
        latitude: "57.21971108",
        longitude: "-2.183520076"
    },
    {
        postcode: "AB21 7AL",
        latitude: "57.22016593",
        longitude: "-2.173189563"
    },
    {
        postcode: "AB21 7AN",
        latitude: "57.20842543",
        longitude: "-2.166413709"
    },
    {
        postcode: "AB21 7AP",
        latitude: "57.20679632",
        longitude: "-2.15488552"
    },
    {
        postcode: "AB21 7AQ",
        latitude: "57.21578241",
        longitude: "-2.144724135"
    },
    {
        postcode: "AB21 7AR",
        latitude: "57.20735097",
        longitude: "-2.133451472"
    },
    {
        postcode: "AB21 7AS",
        latitude: "57.23214286",
        longitude: "-2.142485884"
    },
    {
        postcode: "AB21 7AT",
        latitude: "57.22258065",
        longitude: "-2.153809121"
    },
    {
        postcode: "AB21 7AU",
        latitude: "57.20503389",
        longitude: "-2.188942467"
    },
    {
        postcode: "AB21 7AX",
        latitude: "57.205005",
        longitude: "-2.189803"
    },
    {
        postcode: "AB21 7AY",
        latitude: "57.20513924",
        longitude: "-2.190747"
    },
    {
        postcode: "AB21 7AZ",
        latitude: "57.19985591",
        longitude: "-2.185473619"
    },
    {
        postcode: "AB21 7BA",
        latitude: "57.205965",
        longitude: "-2.190666661"
    },
    {
        postcode: "AB21 7BB",
        latitude: "57.20624257",
        longitude: "-2.185621556"
    },
    {
        postcode: "AB21 7BD",
        latitude: "57.20585564",
        longitude: "-2.185752"
    },
    {
        postcode: "AB21 7BE",
        latitude: "57.20683064",
        longitude: "-2.188835787"
    },
    {
        postcode: "AB21 7BG",
        latitude: "57.20674757",
        longitude: "-2.190308574"
    },
    {
        postcode: "AB21 7BH",
        latitude: "57.20655364",
        longitude: "-2.187857754"
    },
    {
        postcode: "AB21 7BJ",
        latitude: "57.20678431",
        longitude: "-2.189779068"
    },
    {
        postcode: "AB21 7BL",
        latitude: "57.20743493",
        longitude: "-2.18721666"
    },
    {
        postcode: "AB21 7BN",
        latitude: "57.20678078",
        longitude: "-2.186137402"
    },
    {
        postcode: "AB21 7BP",
        latitude: "57.20749998",
        longitude: "-2.185760302"
    },
    {
        postcode: "AB21 7BQ",
        latitude: "57.20785747",
        longitude: "-2.186987053"
    },
    {
        postcode: "AB21 7BR",
        latitude: "57.20866588",
        longitude: "-2.187024254"
    },
    {
        postcode: "AB21 7BS",
        latitude: "57.20818533",
        longitude: "-2.183959409"
    },
    {
        postcode: "AB21 7BT",
        latitude: "57.20791575",
        longitude: "-2.18402428"
    },
    {
        postcode: "AB21 7BU",
        latitude: "57.20765525",
        longitude: "-2.184022983"
    },
    {
        postcode: "AB21 7BW",
        latitude: "57.2117153",
        longitude: "-2.190433"
    },
    {
        postcode: "AB21 7BX",
        latitude: "57.20728872",
        longitude: "-2.182812775"
    },
    {
        postcode: "AB21 7BY",
        latitude: "57.20685533",
        longitude: "-2.184316951"
    },
    {
        postcode: "AB21 7DA",
        latitude: "57.20962857",
        longitude: "-2.186002767"
    },
    {
        postcode: "AB21 7DB",
        latitude: "57.21061874",
        longitude: "-2.184617162"
    },
    {
        postcode: "AB21 7DD",
        latitude: "57.21160615",
        longitude: "-2.185102197"
    },
    {
        postcode: "AB21 7DE",
        latitude: "57.21130918",
        longitude: "-2.185464918"
    },
    {
        postcode: "AB21 7DG",
        latitude: "57.2093943",
        longitude: "-2.180340081"
    },
    {
        postcode: "AB21 7DH",
        latitude: "57.21076878",
        longitude: "-2.186422378"
    },
    {
        postcode: "AB21 7DJ",
        latitude: "57.21009485",
        longitude: "-2.186567966"
    },
    {
        postcode: "AB21 7DL",
        latitude: "57.20859099",
        longitude: "-2.189043433"
    },
    {
        postcode: "AB21 7DN",
        latitude: "57.20816096",
        longitude: "-2.188279768"
    },
    {
        postcode: "AB21 7DQ",
        latitude: "57.2063245",
        longitude: "-2.19088574"
    },
    {
        postcode: "AB21 7DR",
        latitude: "57.20441734",
        longitude: "-2.192696593"
    },
    {
        postcode: "AB21 7DS",
        latitude: "57.20402005",
        longitude: "-2.194018657"
    },
    {
        postcode: "AB21 7DT",
        latitude: "57.20272024",
        longitude: "-2.192257411"
    },
    {
        postcode: "AB21 7DU",
        latitude: "57.2004928",
        longitude: "-2.203433712"
    },
    {
        postcode: "AB21 7DW",
        latitude: "57.20090007",
        longitude: "-2.190046748"
    },
    {
        postcode: "AB21 7DX",
        latitude: "57.20268031",
        longitude: "-2.188980083"
    },
    {
        postcode: "AB21 7DY",
        latitude: "57.20241186",
        longitude: "-2.188283569"
    },
    {
        postcode: "AB21 7DZ",
        latitude: "57.19605657",
        longitude: "-2.178984224"
    },
    {
        postcode: "AB21 7EA",
        latitude: "57.197985",
        longitude: "-2.176434"
    },
    {
        postcode: "AB21 7EB",
        latitude: "57.20237727",
        longitude: "-2.18738964"
    },
    {
        postcode: "AB21 7ED",
        latitude: "57.20277797",
        longitude: "-2.189741936"
    },
    {
        postcode: "AB21 7EE",
        latitude: "57.203588",
        longitude: "-2.18850533"
    },
    {
        postcode: "AB21 7EG",
        latitude: "57.20513332",
        longitude: "-2.194421757"
    },
    {
        postcode: "AB21 7EH",
        latitude: "57.20392158",
        longitude: "-2.187894023"
    },
    {
        postcode: "AB21 7EJ",
        latitude: "57.2039536",
        longitude: "-2.1904928"
    },
    {
        postcode: "AB21 7EL",
        latitude: "57.20441554",
        longitude: "-2.187962743"
    },
    {
        postcode: "AB21 7EN",
        latitude: "57.20371641",
        longitude: "-2.186932989"
    },
    {
        postcode: "AB21 7EP",
        latitude: "57.20535929",
        longitude: "-2.187603395"
    },
    {
        postcode: "AB21 7EQ",
        latitude: "57.2123163",
        longitude: "-2.190767711"
    },
    {
        postcode: "AB21 7ER",
        latitude: "57.21106901",
        longitude: "-2.18988386"
    },
    {
        postcode: "AB21 7ES",
        latitude: "57.20983926",
        longitude: "-2.189281582"
    },
    {
        postcode: "AB21 7ET",
        latitude: "57.21036912",
        longitude: "-2.189367071"
    },
    {
        postcode: "AB21 7EW",
        latitude: "57.20520868",
        longitude: "-2.186195689"
    },
    {
        postcode: "AB21 7EX",
        latitude: "57.21236412",
        longitude: "-2.188847526"
    },
    {
        postcode: "AB21 7EY",
        latitude: "57.213773",
        longitude: "-2.189798"
    },
    {
        postcode: "AB21 7EZ",
        latitude: "57.19799527",
        longitude: "-2.186391"
    },
    {
        postcode: "AB21 7FA",
        latitude: "57.20434791",
        longitude: "-2.18511548"
    },
    {
        postcode: "AB21 7FB",
        latitude: "57.20505639",
        longitude: "-2.185913535"
    },
    {
        postcode: "AB21 7FD",
        latitude: "57.20515871",
        longitude: "-2.18353053"
    },
    {
        postcode: "AB21 7FE",
        latitude: "57.20375475",
        longitude: "-2.185311127"
    },
    {
        postcode: "AB21 7FF",
        latitude: "57.20313598",
        longitude: "-2.184596316"
    },
    {
        postcode: "AB21 7FG",
        latitude: "57.20264251",
        longitude: "-2.184196624"
    },
    {
        postcode: "AB21 7FH",
        latitude: "57.20367815",
        longitude: "-2.18241422"
    },
    {
        postcode: "AB21 7FJ",
        latitude: "57.20346477",
        longitude: "-2.180890432"
    },
    {
        postcode: "AB21 7FL",
        latitude: "57.20030329",
        longitude: "-2.186667468"
    },
    {
        postcode: "AB21 7FN",
        latitude: "57.20114817",
        longitude: "-2.186340729"
    },
    {
        postcode: "AB21 7FP",
        latitude: "57.20101304",
        longitude: "-2.180464668"
    },
    {
        postcode: "AB21 7FQ",
        latitude: "57.20142091",
        longitude: "-2.184140882"
    },
    {
        postcode: "AB21 7FR",
        latitude: "57.20190888",
        longitude: "-2.182157222"
    },
    {
        postcode: "AB21 7FS",
        latitude: "57.20211066",
        longitude: "-2.179278369"
    },
    {
        postcode: "AB21 7FT",
        latitude: "57.2029472",
        longitude: "-2.17848797"
    },
    {
        postcode: "AB21 7FU",
        latitude: "57.20300358",
        longitude: "-2.17673381"
    },
    {
        postcode: "AB21 7FW",
        latitude: "57.20217848",
        longitude: "-2.175786462"
    },
    {
        postcode: "AB21 7FX",
        latitude: "57.20231106",
        longitude: "-2.183566036"
    },
    {
        postcode: "AB21 7FY",
        latitude: "57.20128945",
        longitude: "-2.18188936"
    },
    {
        postcode: "AB21 7FZ",
        latitude: "57.20260135",
        longitude: "-2.175308494"
    },
    {
        postcode: "AB21 7GA",
        latitude: "57.1969444",
        longitude: "-2.186170592"
    },
    {
        postcode: "AB21 7GB",
        latitude: "57.195444",
        longitude: "-2.18608"
    },
    {
        postcode: "AB21 7GD",
        latitude: "57.19756962",
        longitude: "-2.188573321"
    },
    {
        postcode: "AB21 7GF",
        latitude: "57.192815",
        longitude: "-2.184247"
    },
    {
        postcode: "AB21 7GH",
        latitude: "57.213452",
        longitude: "-2.187892117"
    },
    {
        postcode: "AB21 7GJ",
        latitude: "57.21249968",
        longitude: "-2.188301888"
    },
    {
        postcode: "AB21 7GL",
        latitude: "57.20591075",
        longitude: "-2.191231205"
    },
    {
        postcode: "AB21 7GN",
        latitude: "57.19618688",
        longitude: "-2.18206282"
    },
    {
        postcode: "AB21 7GQ",
        latitude: "57.19872351",
        longitude: "-2.191806332"
    },
    {
        postcode: "AB21 7HF",
        latitude: "57.21105203",
        longitude: "-2.183179056"
    },
    {
        postcode: "AB21 7HG",
        latitude: "57.198686",
        longitude: "-2.180387"
    },
    {
        postcode: "AB21 7JJ",
        latitude: "57.20868757",
        longitude: "-2.178300513"
    },
    {
        postcode: "AB21 7JL",
        latitude: "57.20898166",
        longitude: "-2.179940771"
    },
    {
        postcode: "AB21 7JN",
        latitude: "57.20742841",
        longitude: "-2.179386947"
    },
    {
        postcode: "AB21 7JP",
        latitude: "57.20765915",
        longitude: "-2.181341362"
    },
    {
        postcode: "AB21 7JQ",
        latitude: "57.20742524",
        longitude: "-2.181588512"
    },
    {
        postcode: "AB21 7JR",
        latitude: "57.2071466",
        longitude: "-2.181703013"
    },
    {
        postcode: "AB21 7JS",
        latitude: "57.2069129",
        longitude: "-2.181801182"
    },
    {
        postcode: "AB21 7JT",
        latitude: "57.20664327",
        longitude: "-2.181899172"
    },
    {
        postcode: "AB21 7JU",
        latitude: "57.2077684",
        longitude: "-2.180332142"
    },
    {
        postcode: "AB21 7JW",
        latitude: "57.20824369",
        longitude: "-2.180897284"
    },
    {
        postcode: "AB21 7JX",
        latitude: "57.20819956",
        longitude: "-2.1803508"
    },
    {
        postcode: "AB21 7JY",
        latitude: "57.20800487",
        longitude: "-2.178297217"
    },
    {
        postcode: "AB21 7JZ",
        latitude: "57.20859673",
        longitude: "-2.179011886"
    },
    {
        postcode: "AB21 7LA",
        latitude: "57.21099292",
        longitude: "-2.180579655"
    },
    {
        postcode: "AB21 7LB",
        latitude: "57.21015159",
        longitude: "-2.178440017"
    },
    {
        postcode: "AB21 9PE",
        latitude: "57.17818503",
        longitude: "-2.169221714"
    },
    {
        postcode: "BB1 3HJ",
        latitude: "53.75332986",
        longitude: "-2.450445251"
    },
    {
        postcode: "BB1 3HL",
        latitude: "53.75002441",
        longitude: "-2.456991317"
    },
    {
        postcode: "BB1 3HN",
        latitude: "53.75170996",
        longitude: "-2.453369966"
    },
    {
        postcode: "BB1 3HP",
        latitude: "53.756595",
        longitude: "-2.45004"
    },
    {
        postcode: "BB1 3HQ",
        latitude: "53.74977988",
        longitude: "-2.459824431"
    },
    {
        postcode: "BB1 3HR",
        latitude: "53.75395092",
        longitude: "-2.445401611"
    },
    {
        postcode: "BB1 3HT",
        latitude: "53.758904",
        longitude: "-2.447957"
    },
    {
        postcode: "BB1 3HU",
        latitude: "53.75501367",
        longitude: "-2.450554"
    },
    {
        postcode: "BB1 3HW",
        latitude: "53.75242068",
        longitude: "-2.44841851"
    },
    {
        postcode: "BB1 3HY",
        latitude: "53.751346",
        longitude: "-2.445178311"
    },
    {
        postcode: "BB1 3JA",
        latitude: "53.75235279",
        longitude: "-2.444929732"
    },
    {
        postcode: "BB1 3JB",
        latitude: "53.75161253",
        longitude: "-2.445801486"
    },
    {
        postcode: "BB1 3JD",
        latitude: "53.749095",
        longitude: "-2.443834919"
    },
    {
        postcode: "BB1 3JL",
        latitude: "53.74959825",
        longitude: "-2.455606723"
    },
    {
        postcode: "BB1 3JP",
        latitude: "53.74860947",
        longitude: "-2.453260746"
    },
    {
        postcode: "BB1 3JR",
        latitude: "53.74878797",
        longitude: "-2.451215504"
    },
    {
        postcode: "BB1 3JS",
        latitude: "53.74897969",
        longitude: "-2.452809805"
    },
    {
        postcode: "BB1 3JT",
        latitude: "53.75004871",
        longitude: "-2.452957789"
    },
    {
        postcode: "BB1 3JU",
        latitude: "53.75022635",
        longitude: "-2.451261"
    },
    {
        postcode: "BB1 3JW",
        latitude: "53.7491",
        longitude: "-2.454585"
    },
    {
        postcode: "BB1 3JX",
        latitude: "53.75094463",
        longitude: "-2.451344782"
    },
    {
        postcode: "BB1 3JY",
        latitude: "53.74913406",
        longitude: "-2.450006071"
    },
    {
        postcode: "BB1 3JZ",
        latitude: "53.74980842",
        longitude: "-2.447541461"
    },
    {
        postcode: "BB1 3LA",
        latitude: "53.74821611",
        longitude: "-2.447918792"
    },
    {
        postcode: "BB1 3LB",
        latitude: "53.74910731",
        longitude: "-2.44754917"
    },
    {
        postcode: "BB1 3LD",
        latitude: "53.75124974",
        longitude: "-2.446677216"
    },
    {
        postcode: "BB1 3LE",
        latitude: "53.75209638",
        longitude: "-2.448612204"
    },
    {
        postcode: "BB1 3LF",
        latitude: "53.75156752",
        longitude: "-2.448227437"
    },
    {
        postcode: "BB1 3LG",
        latitude: "53.7514765",
        longitude: "-2.450925863"
    },
    {
        postcode: "BB1 3LH",
        latitude: "53.74938987",
        longitude: "-2.448901806"
    },
    {
        postcode: "BB1 3LJ",
        latitude: "53.74810133",
        longitude: "-2.44976757"
    },
    {
        postcode: "BB1 3LL",
        latitude: "53.74918011",
        longitude: "-2.452099239"
    },
    {
        postcode: "BB1 3LN",
        latitude: "53.74987159",
        longitude: "-2.452258313"
    },
    {
        postcode: "BB1 3LP",
        latitude: "53.7463168",
        longitude: "-2.438967408"
    },
    {
        postcode: "BB1 3LQ",
        latitude: "53.75063786",
        longitude: "-2.449263909"
    },
    {
        postcode: "BB1 3LR",
        latitude: "53.74691338",
        longitude: "-2.438048656"
    },
    {
        postcode: "BB1 3LS",
        latitude: "53.74981648",
        longitude: "-2.43312007"
    },
    {
        postcode: "BB1 3LU",
        latitude: "53.74904074",
        longitude: "-2.433885464"
    },
    {
        postcode: "BB1 3LW",
        latitude: "53.74597682",
        longitude: "-2.438539293"
    },
    {
        postcode: "BB1 3LX",
        latitude: "53.74782106",
        longitude: "-2.435616729"
    },
    {
        postcode: "BB1 3LY",
        latitude: "53.74885452",
        longitude: "-2.433185991"
    },
    {
        postcode: "BB1 3LZ",
        latitude: "53.7485948",
        longitude: "-2.432925529"
    },
    {
        postcode: "BB1 3NA",
        latitude: "53.74785916",
        longitude: "-2.435025734"
    },
    {
        postcode: "BB1 3NB",
        latitude: "53.74791952",
        longitude: "-2.433252187"
    },
    {
        postcode: "BB1 3ND",
        latitude: "53.74757798",
        longitude: "-2.433248671"
    },
    {
        postcode: "BB1 3NG",
        latitude: "53.74698512",
        longitude: "-2.433151587"
    },
    {
        postcode: "BB1 3NH",
        latitude: "53.74755478",
        longitude: "-2.437160672"
    },
    {
        postcode: "BB1 3NJ",
        latitude: "53.74853539",
        longitude: "-2.436913069"
    },
    {
        postcode: "BB1 3NN",
        latitude: "53.74831003",
        longitude: "-2.441990668"
    },
    {
        postcode: "BB1 3NP",
        latitude: "53.74994474",
        longitude: "-2.442295964"
    },
    {
        postcode: "BB1 3NQ",
        latitude: "53.74809227",
        longitude: "-2.4375"
    },
    {
        postcode: "BB1 3NR",
        latitude: "53.75008513",
        longitude: "-2.443434"
    },
    {
        postcode: "BB1 3NS",
        latitude: "53.74902698",
        longitude: "-2.442559275"
    },
    {
        postcode: "BB1 3NT",
        latitude: "53.75957242",
        longitude: "-2.449162131"
    },
    {
        postcode: "BB1 3NU",
        latitude: "53.762635",
        longitude: "-2.45015"
    },
    {
        postcode: "BB1 3NW",
        latitude: "53.74932024",
        longitude: "-2.441030758"
    },
    {
        postcode: "BB1 3NY",
        latitude: "53.74791815",
        longitude: "-2.441016066"
    },
    {
        postcode: "BB1 3WW",
        latitude: "53.74293091",
        longitude: "-2.484903506"
    },
    {
        postcode: "BB1 4AA",
        latitude: "53.770548",
        longitude: "-2.460962"
    },
    {
        postcode: "BB1 4AB",
        latitude: "53.774784",
        longitude: "-2.448308"
    },
    {
        postcode: "BB1 4AD",
        latitude: "53.78120782",
        longitude: "-2.446464333"
    },
    {
        postcode: "BB1 4AE",
        latitude: "53.78763004",
        longitude: "-2.452391333"
    },
    {
        postcode: "BB1 4AF",
        latitude: "53.78505623",
        longitude: "-2.464975928"
    },
    {
        postcode: "BB1 4AG",
        latitude: "53.782237",
        longitude: "-2.464444"
    },
    {
        postcode: "BB1 4AH",
        latitude: "53.77843714",
        longitude: "-2.427390468"
    },
    {
        postcode: "BB1 4AJ",
        latitude: "53.77720289",
        longitude: "-2.418015316"
    },
    {
        postcode: "BB1 4AL",
        latitude: "53.773361",
        longitude: "-2.424426"
    },
    {
        postcode: "BB1 4AN",
        latitude: "53.775899",
        longitude: "-2.408018"
    },
    {
        postcode: "BB1 4AP",
        latitude: "53.772233",
        longitude: "-2.438282"
    },
    {
        postcode: "BB1 4AQ",
        latitude: "53.77636683",
        longitude: "-2.462118136"
    },
    {
        postcode: "BB1 4AR",
        latitude: "53.76098682",
        longitude: "-2.426121019"
    },
    {
        postcode: "BB1 4AS",
        latitude: "53.756252",
        longitude: "-2.425755"
    },
    {
        postcode: "BB1 4AT",
        latitude: "53.766156",
        longitude: "-2.443543"
    },
    {
        postcode: "BB1 4AU",
        latitude: "53.75791867",
        longitude: "-2.441894429"
    },
    {
        postcode: "BB1 4AW",
        latitude: "53.76301062",
        longitude: "-2.423168341"
    },
    {
        postcode: "BB1 4BH",
        latitude: "53.76457847",
        longitude: "-2.427128275"
    },
    {
        postcode: "BB1 4BJ",
        latitude: "53.76553128",
        longitude: "-2.427107611"
    },
    {
        postcode: "BB1 4BL",
        latitude: "53.76547446",
        longitude: "-2.425392805"
    },
    {
        postcode: "BB1 4BN",
        latitude: "53.76561411",
        longitude: "-2.426562324"
    },
    {
        postcode: "BB1 4BP",
        latitude: "53.76635181",
        longitude: "-2.42637259"
    },
    {
        postcode: "BB1 4BQ",
        latitude: "53.765161",
        longitude: "-2.427876143"
    },
    {
        postcode: "BB1 4BS",
        latitude: "53.76651975",
        longitude: "-2.422096198"
    },
    {
        postcode: "BB1 4BW",
        latitude: "53.76595894",
        longitude: "-2.42564043"
    },
    {
        postcode: "BB1 4BX",
        latitude: "53.76695485",
        longitude: "-2.423602464"
    },
    {
        postcode: "BB1 4BY",
        latitude: "53.7666468",
        longitude: "-2.424297209"
    },
    {
        postcode: "BB1 4BZ",
        latitude: "53.76733308",
        longitude: "-2.420709"
    },
    {
        postcode: "BB1 4DA",
        latitude: "53.76800529",
        longitude: "-2.421382896"
    },
    {
        postcode: "BB1 4DB",
        latitude: "53.76765895",
        longitude: "-2.422744811"
    },
    {
        postcode: "BB1 4DD",
        latitude: "53.76796913",
        longitude: "-2.418879307"
    },
    {
        postcode: "BB1 4DG",
        latitude: "53.76817585",
        longitude: "-2.418881366"
    },
    {
        postcode: "BB1 4DH",
        latitude: "53.76927246",
        longitude: "-2.418861946"
    },
    {
        postcode: "BB1 4DJ",
        latitude: "53.76965096",
        longitude: "-2.418577454"
    },
    {
        postcode: "BB1 4DL",
        latitude: "53.76900125",
        longitude: "-2.416735243"
    },
    {
        postcode: "BB1 4DR",
        latitude: "53.76915398",
        longitude: "-2.419331082"
    },
    {
        postcode: "BB1 4DS",
        latitude: "53.76929704",
        longitude: "-2.41954491"
    },
    {
        postcode: "BB1 4DT",
        latitude: "53.7699674",
        longitude: "-2.420613623"
    },
    {
        postcode: "BB1 4DU",
        latitude: "53.76988036",
        longitude: "-2.417229451"
    },
    {
        postcode: "BB1 4DW",
        latitude: "53.76920776",
        longitude: "-2.416797976"
    },
    {
        postcode: "BB1 4DX",
        latitude: "53.77043602",
        longitude: "-2.417690123"
    },
    {
        postcode: "BB1 4DY",
        latitude: "53.77065822",
        longitude: "-2.418405416"
    },
    {
        postcode: "BB1 4DZ",
        latitude: "53.770921",
        longitude: "-2.420365236"
    },
    {
        postcode: "BB1 4EA",
        latitude: "53.77081958",
        longitude: "-2.421092482"
    },
    {
        postcode: "BB1 4EB",
        latitude: "53.77131964",
        longitude: "-2.422022999"
    },
    {
        postcode: "BB1 4ED",
        latitude: "53.77085563",
        longitude: "-2.418498413"
    },
    {
        postcode: "BB1 4EE",
        latitude: "53.7708439",
        longitude: "-2.416707988"
    },
    {
        postcode: "BB1 4EF",
        latitude: "53.76917434",
        longitude: "-2.416069412"
    },
    {
        postcode: "BB1 4EG",
        latitude: "53.76809667",
        longitude: "-2.423507767"
    },
    {
        postcode: "BB1 4EH",
        latitude: "53.76625441",
        longitude: "-2.428480295"
    },
    {
        postcode: "BB1 4EJ",
        latitude: "53.76697137",
        longitude: "-2.426545749"
    },
    {
        postcode: "BB1 4EL",
        latitude: "53.76869676",
        longitude: "-2.421556709"
    },
    {
        postcode: "BB1 4EN",
        latitude: "53.76758669",
        longitude: "-2.425383827"
    },
    {
        postcode: "BB1 4EP",
        latitude: "53.76828796",
        longitude: "-2.420232718"
    },
    {
        postcode: "BB1 4ER",
        latitude: "53.76212489",
        longitude: "-2.432093951"
    },
    {
        postcode: "BB1 4ES",
        latitude: "53.76468982",
        longitude: "-2.421061451"
    },
    {
        postcode: "BB1 4ET",
        latitude: "53.76372296",
        longitude: "-2.432595793"
    },
    {
        postcode: "BB1 4EU",
        latitude: "53.76485565",
        longitude: "-2.425007297"
    },
    {
        postcode: "BB1 4EX",
        latitude: "53.76372879",
        longitude: "-2.425951592"
    },
    {
        postcode: "BB1 4EY",
        latitude: "53.76427043",
        longitude: "-2.425289609"
    },
    {
        postcode: "BB1 4EZ",
        latitude: "53.76471717",
        longitude: "-2.423625"
    },
    {
        postcode: "BB1 4HA",
        latitude: "53.76476585",
        longitude: "-2.422442674"
    },
    {
        postcode: "BB1 4HB",
        latitude: "53.76637432",
        longitude: "-2.42000121"
    },
    {
        postcode: "BB1 4HD",
        latitude: "53.76675233",
        longitude: "-2.419853279"
    },
    {
        postcode: "BB1 4HF",
        latitude: "53.765981",
        longitude: "-2.419619988"
    },
    {
        postcode: "BB1 4HG",
        latitude: "53.76288579",
        longitude: "-2.415172898"
    },
    {
        postcode: "BB1 4HH",
        latitude: "53.76430551",
        longitude: "-2.417871957"
    },
    {
        postcode: "BB1 4HJ",
        latitude: "53.76421918",
        longitude: "-2.416854728"
    },
    {
        postcode: "BB1 4HL",
        latitude: "53.76501629",
        longitude: "-2.417666639"
    },
    {
        postcode: "BB1 4HN",
        latitude: "53.7642318",
        longitude: "-2.415808143"
    },
    {
        postcode: "BB1 4HP",
        latitude: "53.76506577",
        longitude: "-2.418941412"
    },
    {
        postcode: "BB1 4HQ",
        latitude: "53.76483198",
        longitude: "-2.418969423"
    },
    {
        postcode: "BB1 4HR",
        latitude: "53.76592368",
        longitude: "-2.417781842"
    },
    {
        postcode: "BB1 4HS",
        latitude: "53.76643942",
        longitude: "-2.416800881"
    },
    {
        postcode: "BB1 4HT",
        latitude: "53.76667839",
        longitude: "-2.417865192"
    },
    {
        postcode: "BB1 4HU",
        latitude: "53.76687554",
        longitude: "-2.418034028"
    },
    {
        postcode: "BB1 4HW",
        latitude: "53.76555153",
        longitude: "-2.416245955"
    },
    {
        postcode: "BB1 4HX",
        latitude: "53.76762649",
        longitude: "-2.416615424"
    },
    {
        postcode: "BB1 4HY",
        latitude: "53.76758901",
        longitude: "-2.417055009"
    },
    {
        postcode: "BB1 4HZ",
        latitude: "53.76721374",
        longitude: "-2.416414115"
    },
    {
        postcode: "BB1 4JA",
        latitude: "53.76678343",
        longitude: "-2.416091271"
    },
    {
        postcode: "BB1 4JB",
        latitude: "53.76731687",
        longitude: "-2.415186299"
    },
    {
        postcode: "BB1 4JD",
        latitude: "53.7660714",
        longitude: "-2.414066566"
    },
    {
        postcode: "BB1 4JE",
        latitude: "53.76691557",
        longitude: "-2.414272096"
    },
    {
        postcode: "BB1 4JF",
        latitude: "53.76693669",
        longitude: "-2.413362062"
    },
    {
        postcode: "BB1 4JG",
        latitude: "53.76739092",
        longitude: "-2.414565025"
    },
    {
        postcode: "BB1 4JH",
        latitude: "53.76780808",
        longitude: "-2.413491995"
    },
    {
        postcode: "BB1 4JJ",
        latitude: "53.76726297",
        longitude: "-2.412576387"
    },
    {
        postcode: "BB1 4JN",
        latitude: "53.76794614",
        longitude: "-2.412552747"
    },
    {
        postcode: "BB1 4JQ",
        latitude: "53.76782171",
        longitude: "-2.414751323"
    },
    {
        postcode: "BB1 4JR",
        latitude: "53.7675928",
        longitude: "-2.413368511"
    },
    {
        postcode: "BB1 4JS",
        latitude: "53.76628851",
        longitude: "-2.411049782"
    },
    {
        postcode: "BB1 4JT",
        latitude: "53.76368623",
        longitude: "-2.415029104"
    },
    {
        postcode: "BB1 4JU",
        latitude: "53.76362494",
        longitude: "-2.414558245"
    },
    {
        postcode: "BB1 4JW",
        latitude: "53.76722952",
        longitude: "-2.411847861"
    },
    {
        postcode: "BB1 4JX",
        latitude: "53.76448167",
        longitude: "-2.413732349"
    },
    {
        postcode: "BB1 4JY",
        latitude: "53.764836",
        longitude: "-2.412795"
    },
    {
        postcode: "BB1 4JZ",
        latitude: "53.7682026",
        longitude: "-2.413768955"
    },
    {
        postcode: "BB1 4LA",
        latitude: "53.76844375",
        longitude: "-2.414211293"
    },
    {
        postcode: "BB1 4LB",
        latitude: "53.77289716",
        longitude: "-2.415560027"
    },
    {
        postcode: "BB1 4LD",
        latitude: "53.76793853",
        longitude: "-2.417346726"
    },
    {
        postcode: "BB1 4LJ",
        latitude: "53.76872684",
        longitude: "-2.415518817"
    },
    {
        postcode: "BB1 4LL",
        latitude: "53.76986419",
        longitude: "-2.414119082"
    },
    {
        postcode: "BB1 4LN",
        latitude: "53.76936024",
        longitude: "-2.414296178"
    },
    {
        postcode: "BB1 4LP",
        latitude: "53.771337",
        longitude: "-2.41471"
    },
    {
        postcode: "BB1 4LQ",
        latitude: "53.76819711",
        longitude: "-2.417940967"
    },
    {
        postcode: "BB1 4LR",
        latitude: "53.771196",
        longitude: "-2.413811807"
    },
    {
        postcode: "BB1 4LS",
        latitude: "53.77114602",
        longitude: "-2.4151179"
    },
    {
        postcode: "BB1 4LT",
        latitude: "53.77130759",
        longitude: "-2.415180184"
    },
    {
        postcode: "BB1 4LU",
        latitude: "53.77134144",
        longitude: "-2.415787409"
    },
    {
        postcode: "BB1 4LW",
        latitude: "53.76982698",
        longitude: "-2.414482837"
    },
    {
        postcode: "BB1 4LX",
        latitude: "53.77177459",
        longitude: "-2.415291002"
    },
    {
        postcode: "BB1 4LY",
        latitude: "53.77214077",
        longitude: "-2.415962211"
    },
    {
        postcode: "BB1 4NA",
        latitude: "53.77065091",
        longitude: "-2.415340592"
    },
    {
        postcode: "BB1 4NB",
        latitude: "53.76953816",
        longitude: "-2.414828938"
    },
    {
        postcode: "BB1 4ND",
        latitude: "53.76929114",
        longitude: "-2.408363"
    },
    {
        postcode: "BB1 4NF",
        latitude: "53.77039929",
        longitude: "-2.402153694"
    },
    {
        postcode: "BB1 4NG",
        latitude: "53.76916375",
        longitude: "-2.406056122"
    },
    {
        postcode: "BB1 4NL",
        latitude: "53.76882909",
        longitude: "-2.409314735"
    },
    {
        postcode: "BB1 4NN",
        latitude: "53.76890301",
        longitude: "-2.40872377"
    },
    {
        postcode: "BB1 4NP",
        latitude: "53.76834303",
        longitude: "-2.409522401"
    },
    {
        postcode: "BB1 4NQ",
        latitude: "53.77071709",
        longitude: "-2.411790985"
    },
    {
        postcode: "BB1 4NR",
        latitude: "53.76810965",
        longitude: "-2.409429102"
    },
    {
        postcode: "BB1 4NS",
        latitude: "53.76795972",
        longitude: "-2.411217827"
    },
    {
        postcode: "BB1 4NT",
        latitude: "53.77036964",
        longitude: "-2.410892439"
    },
    {
        postcode: "BB1 4NW",
        latitude: "53.7680815",
        longitude: "-2.409777763"
    },
    {
        postcode: "BB1 4NX",
        latitude: "53.77047473",
        longitude: "-2.41169758"
    },
    {
        postcode: "BB1 4NY",
        latitude: "53.7709609",
        longitude: "-2.411459586"
    },
    {
        postcode: "BB1 4NZ",
        latitude: "53.76989962",
        longitude: "-2.409036892"
    },
    {
        postcode: "BB1 4PA",
        latitude: "53.77132615",
        longitude: "-2.407154235"
    },
    {
        postcode: "BB1 4PB",
        latitude: "53.769438",
        longitude: "-2.407728"
    },
    {
        postcode: "BB1 4PD",
        latitude: "53.76942322",
        longitude: "-2.40904743"
    },
    {
        postcode: "BB1 4PE",
        latitude: "53.76930534",
        longitude: "-2.409349714"
    },
    {
        postcode: "BB1 4PF",
        latitude: "53.76855714",
        longitude: "-2.407354994"
    },
    {
        postcode: "BB1 4PG",
        latitude: "53.76994069",
        longitude: "-2.407535286"
    },
    {
        postcode: "BB1 4PH",
        latitude: "53.76400303",
        longitude: "-2.419552782"
    },
    {
        postcode: "BB1 4RA",
        latitude: "53.7645973",
        longitude: "-2.411473179"
    },
    {
        postcode: "BB1 4RB",
        latitude: "53.76406959",
        longitude: "-2.413333885"
    },
    {
        postcode: "BB1 4RD",
        latitude: "53.76576806",
        longitude: "-2.410801971"
    },
    {
        postcode: "BB1 4RE",
        latitude: "53.76499802",
        longitude: "-2.415163408"
    },
    {
        postcode: "AB23 8AA",
        latitude: "57.18505346",
        longitude: "-2.096247971"
    },
    {
        postcode: "AB23 8AB",
        latitude: "57.24952836",
        longitude: "-2.060272722"
    },
    {
        postcode: "AB23 8AD",
        latitude: "57.25176506",
        longitude: "-2.060326108"
    },
    {
        postcode: "AB23 8AE",
        latitude: "57.19078145",
        longitude: "-2.100250435"
    },
    {
        postcode: "AB23 8AG",
        latitude: "57.19305559",
        longitude: "-2.098419919"
    },
    {
        postcode: "AB23 8AH",
        latitude: "57.19080053",
        longitude: "-2.098844096"
    },
    {
        postcode: "AB23 8AJ",
        latitude: "57.18657847",
        longitude: "-2.086821934"
    },
    {
        postcode: "AB23 8AP",
        latitude: "57.19940599",
        longitude: "-2.09909884"
    },
    {
        postcode: "AB23 8AR",
        latitude: "57.21793017",
        longitude: "-2.070536553"
    },
    {
        postcode: "AB23 8AT",
        latitude: "57.17971735",
        longitude: "-2.084093104"
    },
    {
        postcode: "AB23 8AU",
        latitude: "57.19140437",
        longitude: "-2.096297623"
    },
    {
        postcode: "AB23 8AW",
        latitude: "57.19232979",
        longitude: "-2.096068387"
    },
    {
        postcode: "AB23 8AX",
        latitude: "57.19496195",
        longitude: "-2.083317017"
    },
    {
        postcode: "AB23 8AZ",
        latitude: "57.19619105",
        longitude: "-2.085636538"
    },
    {
        postcode: "AB23 8BA",
        latitude: "57.19037631",
        longitude: "-2.089593981"
    },
    {
        postcode: "AB23 8BB",
        latitude: "57.1925496",
        longitude: "-2.090410039"
    },
    {
        postcode: "AB23 8BD",
        latitude: "57.201021",
        longitude: "-2.089372"
    },
    {
        postcode: "AB23 8BE",
        latitude: "57.21730063",
        longitude: "-2.071826843"
    },
    {
        postcode: "AB23 8BJ",
        latitude: "57.20550303",
        longitude: "-2.102061535"
    },
    {
        postcode: "AB23 8BL",
        latitude: "57.18608375",
        longitude: "-2.088078"
    },
    {
        postcode: "AB23 8BN",
        latitude: "57.20459423",
        longitude: "-2.092458896"
    },
    {
        postcode: "AB23 8BP",
        latitude: "57.20563152",
        longitude: "-2.086502631"
    },
    {
        postcode: "AB23 8BQ",
        latitude: "57.21267911",
        longitude: "-2.078969833"
    },
    {
        postcode: "AB23 8BR",
        latitude: "57.21404236",
        longitude: "-2.082317099"
    },
    {
        postcode: "AB23 8BS",
        latitude: "57.21692538",
        longitude: "-2.08292"
    },
    {
        postcode: "AB23 8BT",
        latitude: "57.21927675",
        longitude: "-2.072261"
    },
    {
        postcode: "AB23 8BU",
        latitude: "57.18647682",
        longitude: "-2.090825303"
    },
    {
        postcode: "AB23 8BW",
        latitude: "57.188786",
        longitude: "-2.090268196"
    },
    {
        postcode: "AB23 8BX",
        latitude: "57.17813228",
        longitude: "-2.089944691"
    },
    {
        postcode: "AB23 8BY",
        latitude: "57.18282892",
        longitude: "-2.092074"
    },
    {
        postcode: "AB23 8BZ",
        latitude: "57.19293104",
        longitude: "-2.096864195"
    },
    {
        postcode: "AB23 8DA",
        latitude: "57.18104636",
        longitude: "-2.084790871"
    },
    {
        postcode: "AB23 8DB",
        latitude: "57.18012778",
        longitude: "-2.088146583"
    },
    {
        postcode: "AB23 8DD",
        latitude: "57.17812473",
        longitude: "-2.087926779"
    },
    {
        postcode: "AB23 8DF",
        latitude: "57.18224794",
        longitude: "-2.099863344"
    },
    {
        postcode: "AB23 8DJ",
        latitude: "57.17817016",
        longitude: "-2.087182582"
    },
    {
        postcode: "AB23 8DL",
        latitude: "57.17729749",
        longitude: "-2.088868"
    },
    {
        postcode: "AB23 8DN",
        latitude: "57.17691149",
        longitude: "-2.08868471"
    },
    {
        postcode: "AB23 8DP",
        latitude: "57.17732609",
        longitude: "-2.086717476"
    },
    {
        postcode: "AB23 8DQ",
        latitude: "57.17715504",
        longitude: "-2.087246344"
    },
    {
        postcode: "AB23 8DR",
        latitude: "57.17646498",
        longitude: "-2.084879584"
    },
    {
        postcode: "AB23 8DS",
        latitude: "57.17676122",
        longitude: "-2.085177976"
    },
    {
        postcode: "AB23 8DT",
        latitude: "57.17638233",
        longitude: "-2.087509147"
    },
    {
        postcode: "AB23 8DU",
        latitude: "57.180461",
        longitude: "-2.086361"
    },
    {
        postcode: "AB23 8DX",
        latitude: "57.17653397",
        longitude: "-2.089014591"
    },
    {
        postcode: "AB23 8EA",
        latitude: "57.1768928",
        longitude: "-2.089710117"
    },
    {
        postcode: "AB23 8EB",
        latitude: "57.17696402",
        longitude: "-2.090603428"
    },
    {
        postcode: "AB23 8ED",
        latitude: "57.17804198",
        longitude: "-2.090589533"
    },
    {
        postcode: "AB23 8EE",
        latitude: "57.18649969",
        longitude: "-2.096284829"
    },
    {
        postcode: "AB23 8EF",
        latitude: "57.18937631",
        longitude: "-2.09354584"
    },
    {
        postcode: "AB23 8EG",
        latitude: "57.187094",
        longitude: "-2.093507"
    },
    {
        postcode: "AB23 8EH",
        latitude: "57.19052566",
        longitude: "-2.105445074"
    },
    {
        postcode: "AB23 8EJ",
        latitude: "57.17822956",
        longitude: "-2.092045527"
    },
    {
        postcode: "AB23 8EL",
        latitude: "57.1778058",
        longitude: "-2.094145046"
    },
    {
        postcode: "AB23 8EN",
        latitude: "57.17787712",
        longitude: "-2.094872987"
    },
    {
        postcode: "AB23 8EP",
        latitude: "57.17914449",
        longitude: "-2.093850729"
    },
    {
        postcode: "AB23 8EQ",
        latitude: "57.17928867",
        longitude: "-2.093239092"
    },
    {
        postcode: "AB23 8ER",
        latitude: "57.17855296",
        longitude: "-2.092029793"
    },
    {
        postcode: "AB23 8ES",
        latitude: "57.17917265",
        longitude: "-2.092213284"
    },
    {
        postcode: "AB23 8ET",
        latitude: "57.17921852",
        longitude: "-2.090906691"
    },
    {
        postcode: "AB23 8EU",
        latitude: "57.189091",
        longitude: "-2.101404"
    },
    {
        postcode: "AB23 8EW",
        latitude: "57.18735341",
        longitude: "-2.096601"
    },
    {
        postcode: "AB23 8EX",
        latitude: "57.18306227",
        longitude: "-2.092222999"
    },
    {
        postcode: "AB23 8EY",
        latitude: "57.188546",
        longitude: "-2.098507"
    },
    {
        postcode: "AB23 8EZ",
        latitude: "57.18602653",
        longitude: "-2.092379297"
    },
    {
        postcode: "AB23 8FB",
        latitude: "57.18311012",
        longitude: "-2.088153705"
    },
    {
        postcode: "AB23 8FD",
        latitude: "57.18302774",
        longitude: "-2.090304006"
    },
    {
        postcode: "AB23 8FE",
        latitude: "57.184927",
        longitude: "-2.096942"
    },
    {
        postcode: "AB23 8FF",
        latitude: "57.19170872",
        longitude: "-2.097688296"
    },
    {
        postcode: "AB23 8FG",
        latitude: "57.18201372",
        longitude: "-2.088829302"
    },
    {
        postcode: "AB23 8FP",
        latitude: "57.17798905",
        longitude: "-2.08924966"
    },
    {
        postcode: "AB23 8FT",
        latitude: "57.19704018",
        longitude: "-2.103179982"
    },
    {
        postcode: "AB23 8FW",
        latitude: "57.19621416",
        longitude: "-2.102681227"
    },
    {
        postcode: "AB23 8FX",
        latitude: "57.1973465",
        longitude: "-2.102088624"
    },
    {
        postcode: "AB23 8FY",
        latitude: "57.1787349",
        longitude: "-2.088871034"
    },
    {
        postcode: "AB23 8GA",
        latitude: "57.18977325",
        longitude: "-2.102845311"
    },
    {
        postcode: "AB23 8GD",
        latitude: "57.19096443",
        longitude: "-2.08296"
    },
    {
        postcode: "AB23 8GE",
        latitude: "57.19753359",
        longitude: "-2.103975703"
    },
    {
        postcode: "AB23 8GH",
        latitude: "57.19272527",
        longitude: "-2.106874367"
    },
    {
        postcode: "AB23 8GL",
        latitude: "57.19881854",
        longitude: "-2.103499392"
    },
    {
        postcode: "AB23 8GN",
        latitude: "57.19914932",
        longitude: "-2.105403512"
    },
    {
        postcode: "AB23 8GP",
        latitude: "57.199924",
        longitude: "-2.102724949"
    },
    {
        postcode: "AB23 8GQ",
        latitude: "57.20004792",
        longitude: "-2.105041981"
    },
    {
        postcode: "AB23 8GS",
        latitude: "57.1950914",
        longitude: "-2.102545722"
    },
    {
        postcode: "AB23 8GT",
        latitude: "57.19812038",
        longitude: "-2.100419312"
    },
    {
        postcode: "AB23 8GW",
        latitude: "57.19156025",
        longitude: "-2.078941163"
    },
    {
        postcode: "AB23 8GX",
        latitude: "57.187569",
        longitude: "-2.083201"
    },
    {
        postcode: "AB23 8HA",
        latitude: "57.17961283",
        longitude: "-2.092197842"
    },
    {
        postcode: "AB23 8HD",
        latitude: "57.18082399",
        longitude: "-2.09426853"
    },
    {
        postcode: "AB23 8HE",
        latitude: "57.19011714",
        longitude: "-2.099702631"
    },
    {
        postcode: "AB23 8HG",
        latitude: "57.187025",
        longitude: "-2.102192"
    },
    {
        postcode: "AB23 8HJ",
        latitude: "57.18049127",
        longitude: "-2.094730833"
    },
    {
        postcode: "AB23 8HL",
        latitude: "57.18044583",
        longitude: "-2.095425445"
    },
    {
        postcode: "AB23 8HN",
        latitude: "57.24553459",
        longitude: "-2.052246163"
    },
    {
        postcode: "AB23 8HP",
        latitude: "57.18102754",
        longitude: "-2.098238987"
    },
    {
        postcode: "AB23 8HQ",
        latitude: "57.18030148",
        longitude: "-2.096235585"
    },
    {
        postcode: "AB23 8HR",
        latitude: "57.18028186",
        longitude: "-2.098369331"
    },
    {
        postcode: "AB23 8HS",
        latitude: "57.1799761",
        longitude: "-2.098798581"
    },
    {
        postcode: "AB23 8HT",
        latitude: "57.17910602",
        longitude: "-2.09717528"
    },
    {
        postcode: "AB23 8HU",
        latitude: "57.24536342",
        longitude: "-2.053538"
    },
    {
        postcode: "AB23 8HW",
        latitude: "57.24484207",
        longitude: "-2.054217004"
    },
    {
        postcode: "AB23 8HX",
        latitude: "57.17830682",
        longitude: "-2.096809293"
    },
    {
        postcode: "AB23 8HY",
        latitude: "57.24469758",
        longitude: "-2.056089"
    },
    {
        postcode: "AB23 8HZ",
        latitude: "57.18994948",
        longitude: "-2.084696"
    },
    {
        postcode: "AB23 8JA",
        latitude: "57.17878397",
        longitude: "-2.095437691"
    },
    {
        postcode: "AB23 8JB",
        latitude: "57.17942946",
        longitude: "-2.097109969"
    },
    {
        postcode: "AB23 8JD",
        latitude: "57.17951073",
        longitude: "-2.096564338"
    },
    {
        postcode: "AB23 8JJ",
        latitude: "57.17980748",
        longitude: "-2.096151593"
    },
    {
        postcode: "AB23 8JL",
        latitude: "57.17863169",
        longitude: "-2.094874926"
    },
    {
        postcode: "AB23 8JN",
        latitude: "57.17716909",
        longitude: "-2.09270447"
    },
    {
        postcode: "AB23 8JP",
        latitude: "57.17745643",
        longitude: "-2.09285405"
    },
    {
        postcode: "AB23 8JQ",
        latitude: "57.17722048",
        longitude: "-2.096029079"
    },
    {
        postcode: "AB23 8JR",
        latitude: "57.17785776",
        longitude: "-2.096692336"
    },
    {
        postcode: "AB23 8JS",
        latitude: "57.19745879",
        longitude: "-2.096098"
    },
    {
        postcode: "AB23 8JW",
        latitude: "57.19668875",
        longitude: "-2.093117571"
    },
    {
        postcode: "AB23 8JX",
        latitude: "57.19597631",
        longitude: "-2.096789447"
    },
    {
        postcode: "AB23 8JZ",
        latitude: "57.18926771",
        longitude: "-2.094620996"
    },
    {
        postcode: "AB23 8LA",
        latitude: "57.19948565",
        longitude: "-2.100588523"
    },
    {
        postcode: "AB23 8LB",
        latitude: "57.20066251",
        longitude: "-2.10047588"
    },
    {
        postcode: "AB23 8LD",
        latitude: "57.20024872",
        longitude: "-2.101186403"
    },
    {
        postcode: "AB23 8LE",
        latitude: "57.24928594",
        longitude: "-2.060023745"
    },
    {
        postcode: "AB23 8LH",
        latitude: "57.19458301",
        longitude: "-2.098010305"
    },
    {
        postcode: "AB23 8LU",
        latitude: "57.19407285",
        longitude: "-2.095593055"
    },
    {
        postcode: "AB23 8LZ",
        latitude: "57.17654976",
        longitude: "-2.0920248"
    },
    {
        postcode: "AB23 8NA",
        latitude: "57.19863831",
        longitude: "-2.114487606"
    },
    {
        postcode: "AB23 8NB",
        latitude: "57.19558709",
        longitude: "-2.100544802"
    },
    {
        postcode: "AB23 8ND",
        latitude: "57.19504884",
        longitude: "-2.099633214"
    },
    {
        postcode: "AB23 8NE",
        latitude: "57.19471926",
        longitude: "-2.09605806"
    },
    {
        postcode: "AB23 8NF",
        latitude: "57.19531192",
        longitude: "-2.096340915"
    },
    {
        postcode: "AB23 8NG",
        latitude: "57.1955077",
        longitude: "-2.098707772"
    },
    {
        postcode: "AB23 8NH",
        latitude: "57.19499649",
        longitude: "-2.097663903"
    },
    {
        postcode: "AB23 8NJ",
        latitude: "57.19442049",
        longitude: "-2.099052359"
    },
    {
        postcode: "AB23 8NL",
        latitude: "57.19218444",
        longitude: "-2.0981694"
    },
    {
        postcode: "AB23 8NN",
        latitude: "57.207088",
        longitude: "-2.108257"
    },
    {
        postcode: "AB23 8NP",
        latitude: "57.21056",
        longitude: "-2.113283"
    },
    {
        postcode: "AB23 8NQ",
        latitude: "57.21925783",
        longitude: "-2.110362295"
    },
    {
        postcode: "AB23 8NR",
        latitude: "57.21750793",
        longitude: "-2.09976"
    },
    {
        postcode: "AB23 8NS",
        latitude: "57.21218778",
        longitude: "-2.100258943"
    },
    {
        postcode: "AB23 8NT",
        latitude: "57.20874187",
        longitude: "-2.095746945"
    },
    {
        postcode: "AB23 8NU",
        latitude: "57.19347985",
        longitude: "-2.095756988"
    },
    {
        postcode: "AB23 8PA",
        latitude: "57.18154989",
        longitude: "-2.096404"
    },
    {
        postcode: "AB23 8PB",
        latitude: "57.18281027",
        longitude: "-2.092867515"
    },
    {
        postcode: "AB23 8PD",
        latitude: "57.18236971",
        longitude: "-2.093395751"
    },
    {
        postcode: "AB23 8PJ",
        latitude: "57.18306",
        longitude: "-2.095250236"
    },
    {
        postcode: "AB23 8PL",
        latitude: "57.18384359",
        longitude: "-2.092489633"
    },
    {
        postcode: "AB23 8PN",
        latitude: "57.18355477",
        longitude: "-2.094325131"
    },
    {
        postcode: "AB23 8PP",
        latitude: "57.18251116",
        longitude: "-2.096406764"
    },
    {
        postcode: "AB23 8PQ",
        latitude: "57.18202724",
        longitude: "-2.094883651"
    },
    {
        postcode: "AB23 8PR",
        latitude: "57.18297089",
        longitude: "-2.094307097"
    },
    {
        postcode: "AB23 8PS",
        latitude: "57.18166657",
        longitude: "-2.096652685"
    },
    {
        postcode: "AB23 8PT",
        latitude: "57.18270853",
        longitude: "-2.096738123"
    },
    {
        postcode: "AB23 8PW",
        latitude: "57.24959946",
        longitude: "-2.061830616"
    },
    {
        postcode: "AB23 8PX",
        latitude: "57.18226633",
        longitude: "-2.099334051"
    },
    {
        postcode: "AB23 8QA",
        latitude: "57.18496917",
        longitude: "-2.10063169"
    },
    {
        postcode: "AB23 8QB",
        latitude: "57.18341638",
        longitude: "-2.099039381"
    },
    {
        postcode: "AB23 8QD",
        latitude: "57.18496772",
        longitude: "-2.102418347"
    },
    {
        postcode: "AB23 8QE",
        latitude: "57.18550773",
        longitude: "-2.101146003"
    },
    {
        postcode: "AB23 8QF",
        latitude: "57.19419456",
        longitude: "-2.100756124"
    },
    {
        postcode: "AB23 8QG",
        latitude: "57.194239",
        longitude: "-2.101351948"
    },
    {
        postcode: "AB23 8QH",
        latitude: "57.19180388",
        longitude: "-2.102255304"
    },
    {
        postcode: "AB23 8QJ",
        latitude: "57.18367603",
        longitude: "-2.100115345"
    },
    {
        postcode: "AB23 8QL",
        latitude: "57.18445856",
        longitude: "-2.098843661"
    },
    {
        postcode: "AB23 8QN",
        latitude: "57.18449291",
        longitude: "-2.100828907"
    },
    {
        postcode: "AB23 8QP",
        latitude: "57.19279215",
        longitude: "-2.102076029"
    },
    {
        postcode: "AB23 8QQ",
        latitude: "57.19244272",
        longitude: "-2.100966447"
    },
    {
        postcode: "AB23 8QS",
        latitude: "57.19113",
        longitude: "-2.102451989"
    },
    {
        postcode: "AB23 8QT",
        latitude: "57.18367952",
        longitude: "-2.095648856"
    },
    {
        postcode: "AB23 8QU",
        latitude: "57.19283014",
        longitude: "-2.099527945"
    },
    {
        postcode: "AB23 8QW",
        latitude: "57.19310615",
        longitude: "-2.102573301"
    },
    {
        postcode: "AB23 8QX",
        latitude: "57.18404691",
        longitude: "-2.096840886"
    },
    {
        postcode: "AB23 8RA",
        latitude: "57.18458471",
        longitude: "-2.098347709"
    },
    {
        postcode: "AB23 8RB",
        latitude: "57.18620887",
        longitude: "-2.100685"
    },
    {
        postcode: "AB23 8RD",
        latitude: "57.246539",
        longitude: "-2.086582"
    },
    {
        postcode: "AB23 8RG",
        latitude: "57.19849052",
        longitude: "-2.098103429"
    },
    {
        postcode: "AB23 8RH",
        latitude: "57.19915673",
        longitude: "-2.096202007"
    },
    {
        postcode: "AB23 8RJ",
        latitude: "57.20061181",
        longitude: "-2.096404403"
    },
    {
        postcode: "AB23 8RL",
        latitude: "57.20109657",
        longitude: "-2.096819429"
    },
    {
        postcode: "AB23 8RN",
        latitude: "57.19659385",
        longitude: "-2.099703579"
    },
    {
        postcode: "AB23 8RP",
        latitude: "57.2001989",
        longitude: "-2.096006125"
    },
    {
        postcode: "AB23 8SA",
        latitude: "57.25901721",
        longitude: "-2.086131"
    },
    {
        postcode: "AB23 8SB",
        latitude: "57.24853333",
        longitude: "-2.087249696"
    },
    {
        postcode: "AB23 8SD",
        latitude: "57.24874823",
        longitude: "-2.088244509"
    },
    {
        postcode: "AB23 8SH",
        latitude: "57.25419",
        longitude: "-2.061673"
    },
    {
        postcode: "AB23 8SJ",
        latitude: "57.24651128",
        longitude: "-2.057948"
    },
    {
        postcode: "AB23 8SL",
        latitude: "57.22962339",
        longitude: "-2.100538247"
    },
    {
        postcode: "AB23 8SP",
        latitude: "57.25337241",
        longitude: "-2.061522059"
    },
    {
        postcode: "AB23 8SQ",
        latitude: "57.246394",
        longitude: "-2.058626889"
    },
    {
        postcode: "AB23 8SR",
        latitude: "57.2453334",
        longitude: "-2.060182996"
    },
    {
        postcode: "AB23 8SS",
        latitude: "57.25280619",
        longitude: "-2.061654"
    },
    {
        postcode: "AB23 8ST",
        latitude: "57.24593527",
        longitude: "-2.06015084"
    },
    {
        postcode: "AB23 8SU",
        latitude: "57.24563087",
        longitude: "-2.05797963"
    },
    {
        postcode: "AB23 8SW",
        latitude: "57.24534285",
        longitude: "-2.05920537"
    },
    {
        postcode: "AB23 8SX",
        latitude: "57.24698979",
        longitude: "-2.052314515"
    },
    {
        postcode: "AB23 8SY",
        latitude: "57.25218117",
        longitude: "-2.053979233"
    },
    {
        postcode: "AB23 8TP",
        latitude: "57.24801008",
        longitude: "-2.060618233"
    },
    {
        postcode: "AB23 8TR",
        latitude: "57.249905",
        longitude: "-2.060090826"
    },
    {
        postcode: "AB23 8TS",
        latitude: "57.25323006",
        longitude: "-2.058671139"
    },
    {
        postcode: "AB23 8TW",
        latitude: "57.24620376",
        longitude: "-2.062172889"
    },
    {
        postcode: "AB23 8UA",
        latitude: "57.22927954",
        longitude: "-2.092106745"
    },
    {
        postcode: "AB23 8UB",
        latitude: "57.23003301",
        longitude: "-2.093582765"
    },
    {
        postcode: "AB23 8UD",
        latitude: "57.23069051",
        longitude: "-2.103241"
    },
    {
        postcode: "AB23 8UE",
        latitude: "57.22792231",
        longitude: "-2.093196471"
    },
    {
        postcode: "AB23 8UF",
        latitude: "57.22548718",
        longitude: "-2.081415234"
    },
    {
        postcode: "AB23 8UG",
        latitude: "57.23014594",
        longitude: "-2.098601756"
    },
    {
        postcode: "AB23 8UH",
        latitude: "57.260039",
        longitude: "-2.111545"
    },
    {
        postcode: "AB23 8UJ",
        latitude: "57.25583391",
        longitude: "-2.102416463"
    },
    {
        postcode: "AB23 8UL",
        latitude: "57.26201",
        longitude: "-2.09567"
    },
    {
        postcode: "AB23 8UN",
        latitude: "57.25393165",
        longitude: "-2.129310866"
    },
    {
        postcode: "AB23 8UP",
        latitude: "57.24245592",
        longitude: "-2.115617828"
    },
    {
        postcode: "AB23 8UQ",
        latitude: "57.24538468",
        longitude: "-2.105022077"
    },
    {
        postcode: "AB23 8UR",
        latitude: "57.23754333",
        longitude: "-2.104171395"
    },
    {
        postcode: "AB23 8US",
        latitude: "57.23391449",
        longitude: "-2.113819"
    },
    {
        postcode: "AB23 8UT",
        latitude: "57.22499376",
        longitude: "-2.11498344"
    },
    {
        postcode: "AB23 8UU",
        latitude: "57.239532",
        longitude: "-2.12926"
    },
    {
        postcode: "AB23 8UW",
        latitude: "57.22879391",
        longitude: "-2.092850856"
    },
    {
        postcode: "AB23 8UX",
        latitude: "57.245516",
        longitude: "-2.128105"
    },
    {
        postcode: "AB23 8UY",
        latitude: "57.23016106",
        longitude: "-2.102146362"
    },
    {
        postcode: "AB23 8UZ",
        latitude: "57.22331834",
        longitude: "-2.09934527"
    },
    {
        postcode: "AB23 8WA",
        latitude: "57.24974522",
        longitude: "-2.057555242"
    },
    {
        postcode: "AB23 8WB",
        latitude: "57.25022967",
        longitude: "-2.058898364"
    },
    {
        postcode: "AB23 8WD",
        latitude: "57.2487679",
        longitude: "-2.053477067"
    },
    {
        postcode: "AB23 8WE",
        latitude: "57.2486336",
        longitude: "-2.052432857"
    },
    {
        postcode: "AB23 8WF",
        latitude: "57.24813027",
        longitude: "-2.052995"
    },
    {
        postcode: "AB23 8WG",
        latitude: "57.24803078",
        longitude: "-2.054702278"
    },
    {
        postcode: "AB23 8WH",
        latitude: "57.24848955",
        longitude: "-2.053194945"
    },
    {
        postcode: "AB23 8WJ",
        latitude: "57.24809937",
        longitude: "-2.061728666"
    },
    {
        postcode: "AB23 8WL",
        latitude: "57.24704315",
        longitude: "-2.053573984"
    },
    {
        postcode: "AB23 8WS",
        latitude: "57.24951242",
        longitude: "-2.087136"
    },
    {
        postcode: "AB23 8WT",
        latitude: "57.25276408",
        longitude: "-2.087508326"
    },
    {
        postcode: "AB23 8WU",
        latitude: "57.25307162",
        longitude: "-2.051262461"
    },
    {
        postcode: "AB23 8WY",
        latitude: "57.246925",
        longitude: "-2.055347"
    },
    {
        postcode: "AB23 8WZ",
        latitude: "57.24669282",
        longitude: "-2.053556902"
    },
    {
        postcode: "AB23 8XA",
        latitude: "57.25343486",
        longitude: "-2.140214708"
    },
    {
        postcode: "AB23 8XB",
        latitude: "57.255322",
        longitude: "-2.130642"
    },
    {
        postcode: "AB23 8XD",
        latitude: "57.25895223",
        longitude: "-2.138511766"
    },
    {
        postcode: "AB23 8XE",
        latitude: "57.26770553",
        longitude: "-2.142955028"
    },
    {
        postcode: "AB23 8XF",
        latitude: "57.25135207",
        longitude: "-2.05986139"
    },
    {
        postcode: "AB23 8XG",
        latitude: "57.25365361",
        longitude: "-2.055705083"
    },
    {
        postcode: "AB23 8XH",
        latitude: "57.27681",
        longitude: "-2.13843"
    },
    {
        postcode: "AB23 8XJ",
        latitude: "57.281349",
        longitude: "-2.151948"
    },
    {
        postcode: "AB23 8XL",
        latitude: "57.281836",
        longitude: "-2.134617"
    },
    {
        postcode: "AB23 8XN",
        latitude: "57.27981138",
        longitude: "-2.120130367"
    },
    {
        postcode: "AB23 8XP",
        latitude: "57.27752768",
        longitude: "-2.102178317"
    },
    {
        postcode: "AB23 8XQ",
        latitude: "57.2708276",
        longitude: "-2.130083204"
    },
    {
        postcode: "AB23 8XR",
        latitude: "57.25052511",
        longitude: "-2.061782"
    },
    {
        postcode: "AB23 8XS",
        latitude: "57.24674122",
        longitude: "-2.065156545"
    },
    {
        postcode: "AB23 8XU",
        latitude: "57.254812",
        longitude: "-2.055408"
    },
    {
        postcode: "AB23 8XW",
        latitude: "57.25146966",
        longitude: "-2.058137995"
    },
    {
        postcode: "AB23 8XX",
        latitude: "57.25934083",
        longitude: "-2.053243811"
    },
    {
        postcode: "AB23 8XY",
        latitude: "57.26415382",
        longitude: "-2.057345711"
    },
    {
        postcode: "AB23 8XZ",
        latitude: "57.25083981",
        longitude: "-2.060374308"
    },
    {
        postcode: "AB23 8YA",
        latitude: "57.26695907",
        longitude: "-2.069901072"
    },
    {
        postcode: "AB23 8YB",
        latitude: "57.268001",
        longitude: "-2.051565"
    },
    {
        postcode: "AB23 8YD",
        latitude: "57.2767318",
        longitude: "-2.052771504"
    },
    {
        postcode: "AB23 8YE",
        latitude: "57.27503918",
        longitude: "-2.038739408"
    },
    {
        postcode: "AB23 8YF",
        latitude: "57.25026663",
        longitude: "-2.056677722"
    },
    {
        postcode: "AB23 8YG",
        latitude: "57.24883769",
        longitude: "-2.088758448"
    },
    {
        postcode: "AB23 8YH",
        latitude: "57.28447304",
        longitude: "-2.032047926"
    },
    {
        postcode: "AB23 8YJ",
        latitude: "57.27881919",
        longitude: "-2.064732453"
    },
    {
        postcode: "AB23 8YL",
        latitude: "57.274968",
        longitude: "-2.090181"
    },
    {
        postcode: "AB23 8YN",
        latitude: "57.26087747",
        longitude: "-2.084792384"
    },
    {
        postcode: "AB23 8YP",
        latitude: "57.26390705",
        longitude: "-2.081234982"
    },
    {
        postcode: "AB23 8YQ",
        latitude: "57.25259071",
        longitude: "-2.061918514"
    },
    {
        postcode: "AB23 8YR",
        latitude: "57.257184",
        longitude: "-2.071986986"
    },
    {
        postcode: "AB23 8YS",
        latitude: "57.25842479",
        longitude: "-2.085333743"
    },
    {
        postcode: "AB23 8YT",
        latitude: "57.25072472",
        longitude: "-2.087868076"
    },
    {
        postcode: "AB23 8YU",
        latitude: "57.24796429",
        longitude: "-2.09162319"
    },
    {
        postcode: "AB23 8YW",
        latitude: "57.25065366",
        longitude: "-2.054954771"
    },
    {
        postcode: "AB23 8YX",
        latitude: "57.235399",
        longitude: "-2.089505"
    },
    {
        postcode: "AB23 8YY",
        latitude: "57.2374526",
        longitude: "-2.06576963"
    },
    {
        postcode: "AB23 8YZ",
        latitude: "57.25015044",
        longitude: "-2.055368327"
    },
    {
        postcode: "AB23 8ZA",
        latitude: "57.23221928",
        longitude: "-2.1007441"
    },
    {
        postcode: "AB23 8ZB",
        latitude: "57.23099781",
        longitude: "-2.100492305"
    },
    {
        postcode: "AB23 8ZD",
        latitude: "57.23205985",
        longitude: "-2.097894614"
    },
    {
        postcode: "AB23 8ZE",
        latitude: "57.233774",
        longitude: "-2.099903534"
    },
    {
        postcode: "AB23 8ZF",
        latitude: "57.23455399",
        longitude: "-2.101794099"
    },
    {
        postcode: "AB23 8ZG",
        latitude: "57.229909",
        longitude: "-2.090999"
    },
    {
        postcode: "AB23 8ZH",
        latitude: "57.23039684",
        longitude: "-2.087322688"
    },
    {
        postcode: "AB23 8ZJ",
        latitude: "57.23061893",
        longitude: "-2.090818133"
    },
    {
        postcode: "AB23 8ZL",
        latitude: "57.23086356",
        longitude: "-2.08788696"
    },
    {
        postcode: "AB23 8ZN",
        latitude: "57.2298382",
        longitude: "-2.089739598"
    },
    {
        postcode: "AB23 8ZP",
        latitude: "57.25057295",
        longitude: "-2.086525338"
    },
    {
        postcode: "AB23 8ZQ",
        latitude: "57.24976475",
        longitude: "-2.054058544"
    },
    {
        postcode: "AB23 8ZR",
        latitude: "57.24810122",
        longitude: "-2.057867526"
    },
    {
        postcode: "AB23 8ZS",
        latitude: "57.24892798",
        longitude: "-2.057123096"
    },
    {
        postcode: "AB23 8ZT",
        latitude: "57.24724765",
        longitude: "-2.058280458"
    },
    {
        postcode: "AB23 8ZU",
        latitude: "57.24782272",
        longitude: "-2.057916801"
    },
    {
        postcode: "AB23 8ZW",
        latitude: "57.24692341",
        longitude: "-2.060086173"
    },
    {
        postcode: "AB23 8ZX",
        latitude: "57.2487382",
        longitude: "-2.059575415"
    },
    {
        postcode: "AB24 1AW",
        latitude: "57.166527",
        longitude: "-2.088164"
    },
    {
        postcode: "AB24 1FR",
        latitude: "57.16482",
        longitude: "-2.089251"
    },
    {
        postcode: "AB24 1GU",
        latitude: "57.16474677",
        longitude: "-2.091135623"
    },
    {
        postcode: "AB24 1RF",
        latitude: "57.16470332",
        longitude: "-2.08910182"
    },
    {
        postcode: "AB24 1RG",
        latitude: "57.16469519",
        longitude: "-2.08789481"
    },
    {
        postcode: "AB24 1RN",
        latitude: "57.16884221",
        longitude: "-2.103713057"
    },
    {
        postcode: "AB24 1RP",
        latitude: "57.16799886",
        longitude: "-2.10243745"
    },
    {
        postcode: "AB24 1RQ",
        latitude: "57.16942",
        longitude: "-2.100175928"
    },
    {
        postcode: "AB24 1RZ",
        latitude: "57.16538687",
        longitude: "-2.087912991"
    },
    {
        postcode: "AB24 1SA",
        latitude: "57.16787761",
        longitude: "-2.096765427"
    },
    {
        postcode: "AB24 1SB",
        latitude: "57.16891102",
        longitude: "-2.09628859"
    },
    {
        postcode: "AB24 1SD",
        latitude: "57.17027702",
        longitude: "-2.095531467"
    },
    {
        postcode: "AB24 1SE",
        latitude: "57.16915361",
        longitude: "-2.096223078"
    },
    {
        postcode: "AB24 1SG",
        latitude: "57.16906484",
        longitude: "-2.094833818"
    },
    {
        postcode: "AB24 1SH",
        latitude: "57.16934349",
        longitude: "-2.094603027"
    },
    {
        postcode: "AB24 1SJ",
        latitude: "57.17075422",
        longitude: "-2.094077462"
    },
    {
        postcode: "AB24 1SL",
        latitude: "57.16964",
        longitude: "-2.094455"
    },
    {
        postcode: "AB24 1SN",
        latitude: "57.167689",
        longitude: "-2.096318"
    },
    {
        postcode: "AB24 1SX",
        latitude: "57.16464541",
        longitude: "-2.094574463"
    },
    {
        postcode: "AB24 1SY",
        latitude: "57.16505961",
        longitude: "-2.093269315"
    },
    {
        postcode: "AB24 1SZ",
        latitude: "57.16472955",
        longitude: "-2.090276"
    },
    {
        postcode: "AB24 1TA",
        latitude: "57.16525853",
        longitude: "-2.091517175"
    },
    {
        postcode: "AB24 1TB",
        latitude: "57.16570001",
        longitude: "-2.089699468"
    },
    {
        postcode: "AB24 1TD",
        latitude: "57.16557282",
        longitude: "-2.091666765"
    },
    {
        postcode: "AB24 1TE",
        latitude: "57.16507608",
        longitude: "-2.09525347"
    },
    {
        postcode: "AB24 1TF",
        latitude: "57.1666967",
        longitude: "-2.090280613"
    },
    {
        postcode: "AB24 1TG",
        latitude: "57.16735204",
        longitude: "-2.09086095"
    },
    {
        postcode: "AB24 1TH",
        latitude: "57.16574106",
        longitude: "-2.094941028"
    },
    {
        postcode: "AB24 1TJ",
        latitude: "57.16590344",
        longitude: "-2.09403204"
    },
    {
        postcode: "AB24 1TL",
        latitude: "57.16630179",
        longitude: "-2.08942"
    },
    {
        postcode: "AB24 1TN",
        latitude: "57.16677678",
        longitude: "-2.091339051"
    },
    {
        postcode: "AB24 1TP",
        latitude: "57.16746793",
        longitude: "-2.092084851"
    },
    {
        postcode: "AB24 1TQ",
        latitude: "57.16877966",
        longitude: "-2.091790474"
    },
    {
        postcode: "AB24 1TR",
        latitude: "57.1689499",
        longitude: "-2.092386194"
    },
    {
        postcode: "AB24 1TS",
        latitude: "57.16750341",
        longitude: "-2.092696748"
    },
    {
        postcode: "AB24 1TT",
        latitude: "57.166892",
        longitude: "-2.093455828"
    },
    {
        postcode: "AB24 1TU",
        latitude: "57.16639031",
        longitude: "-2.091619189"
    },
    {
        postcode: "AB24 1TW",
        latitude: "57.16591369",
        longitude: "-2.092328996"
    },
    {
        postcode: "AB24 1TX",
        latitude: "57.16699831",
        longitude: "-2.095423778"
    },
    {
        postcode: "AB24 1TY",
        latitude: "57.16659415",
        longitude: "-2.095323524"
    },
    {
        postcode: "AB24 1TZ",
        latitude: "57.167918",
        longitude: "-2.090812736"
    },
    {
        postcode: "AB24 1UA",
        latitude: "57.16901778",
        longitude: "-2.097628288"
    },
    {
        postcode: "AB24 1UF",
        latitude: "57.16875621",
        longitude: "-2.098768"
    },
    {
        postcode: "AB24 1UG",
        latitude: "57.16474677",
        longitude: "-2.091268"
    },
    {
        postcode: "AB24 1UH",
        latitude: "57.16798177",
        longitude: "-2.10136259"
    },
    {
        postcode: "AB24 1UJ",
        latitude: "57.16943926",
        longitude: "-2.09855543"
    },
    {
        postcode: "AB24 1UL",
        latitude: "57.16937687",
        longitude: "-2.097926888"
    },
    {
        postcode: "AB24 1UN",
        latitude: "57.16944931",
        longitude: "-2.09718295"
    },
    {
        postcode: "AB24 1UP",
        latitude: "57.168589",
        longitude: "-2.094501879"
    },
    {
        postcode: "AB24 1UQ",
        latitude: "57.16851819",
        longitude: "-2.093096154"
    },
    {
        postcode: "AB24 1UR",
        latitude: "57.16842942",
        longitude: "-2.091657318"
    },
    {
        postcode: "AB24 1US",
        latitude: "57.16811495",
        longitude: "-2.091739216"
    },
    {
        postcode: "AB24 1UT",
        latitude: "57.16815908",
        longitude: "-2.093145"
    },
    {
        postcode: "AB24 1UU",
        latitude: "57.1679372",
        longitude: "-2.100932544"
    },
    {
        postcode: "AB24 1UW",
        latitude: "57.17087866",
        longitude: "-2.09581415"
    },
    {
        postcode: "AB24 1UX",
        latitude: "57.16827458",
        longitude: "-2.094799"
    },
    {
        postcode: "AB24 1UY",
        latitude: "57.17011424",
        longitude: "-2.096936651"
    },
    {
        postcode: "AB24 1UZ",
        latitude: "57.17052822",
        longitude: "-2.095615"
    },
    {
        postcode: "AB24 1WA",
        latitude: "57.16669806",
        longitude: "-2.088379091"
    },
    {
        postcode: "AB24 1WB",
        latitude: "57.168736",
        longitude: "-2.090203181"
    },
    {
        postcode: "AB24 1WD",
        latitude: "57.16884369",
        longitude: "-2.090203181"
    },
    {
        postcode: "AB24 1WE",
        latitude: "57.16810766",
        longitude: "-2.089407673"
    },
    {
        postcode: "AB24 1WF",
        latitude: "57.167991",
        longitude: "-2.089407673"
    },
    {
        postcode: "AB24 1WG",
        latitude: "57.16728166",
        longitude: "-2.088793869"
    },
    {
        postcode: "AB24 1WH",
        latitude: "57.167416",
        longitude: "-2.088959"
    },
    {
        postcode: "AB24 1WS",
        latitude: "57.17333145",
        longitude: "-2.095241684"
    },
    {
        postcode: "AB24 1WT",
        latitude: "57.172568",
        longitude: "-2.094843205"
    },
    {
        postcode: "AB24 1WU",
        latitude: "57.175265",
        longitude: "-2.103417"
    },
    {
        postcode: "AB24 1XA",
        latitude: "57.16902115",
        longitude: "-2.093213174"
    },
    {
        postcode: "AB24 1XB",
        latitude: "57.16752076",
        longitude: "-2.09352356"
    },
    {
        postcode: "AB24 1XD",
        latitude: "57.1677984",
        longitude: "-2.094632141"
    },
    {
        postcode: "AB24 1XE",
        latitude: "57.1700265",
        longitude: "-2.0942079"
    },
    {
        postcode: "AB24 1XF",
        latitude: "57.17130229",
        longitude: "-2.093930024"
    },
    {
        postcode: "AB24 1XG",
        latitude: "57.17187766",
        longitude: "-2.093319607"
    },
    {
        postcode: "AB24 1XH",
        latitude: "57.16952445",
        longitude: "-2.092867182"
    },
    {
        postcode: "AB24 1XJ",
        latitude: "57.16906756",
        longitude: "-2.091179355"
    },
    {
        postcode: "AB24 1XL",
        latitude: "57.167382",
        longitude: "-2.086479"
    },
    {
        postcode: "AB24 1XN",
        latitude: "57.17373858",
        longitude: "-2.091356269"
    },
    {
        postcode: "AB24 1XP",
        latitude: "57.17741512",
        longitude: "-2.099850277"
    },
    {
        postcode: "AB24 1XQ",
        latitude: "57.17131005",
        longitude: "-2.095550676"
    },
    {
        postcode: "AB24 1XR",
        latitude: "57.175539",
        longitude: "-2.098174771"
    },
    {
        postcode: "AB24 1XS",
        latitude: "57.17460425",
        longitude: "-2.098833828"
    },
    {
        postcode: "AB24 1XT",
        latitude: "57.17253387",
        longitude: "-2.092709373"
    },
    {
        postcode: "AB24 1XU",
        latitude: "57.17222923",
        longitude: "-2.09165021"
    },
    {
        postcode: "AB24 1XW",
        latitude: "57.16595932",
        longitude: "-2.091353565"
    },
    {
        postcode: "AB24 1XX",
        latitude: "57.16602447",
        longitude: "-2.088857"
    },
    {
        postcode: "AB24 1XZ",
        latitude: "57.17346744",
        longitude: "-2.093439"
    },
    {
        postcode: "AB24 1YA",
        latitude: "57.17118617",
        longitude: "-2.093053267"
    },
    {
        postcode: "AB24 1ZS",
        latitude: "57.16472955",
        longitude: "-2.090110465"
    },
    {
        postcode: "AB24 2AA",
        latitude: "57.16630644",
        longitude: "-2.116834597"
    },
    {
        postcode: "AB24 2AB",
        latitude: "57.16678107",
        longitude: "-2.118390391"
    },
    {
        postcode: "AB24 2AE",
        latitude: "57.16769519",
        longitude: "-2.120642141"
    },
    {
        postcode: "AB24 2AH",
        latitude: "57.1683316",
        longitude: "-2.122066291"
    },
    {
        postcode: "AB24 2AS",
        latitude: "57.16936469",
        longitude: "-2.122020094"
    },
    {
        postcode: "AB24 2AX",
        latitude: "57.17033362",
        longitude: "-2.123280077"
    },
    {
        postcode: "AB24 2BA",
        latitude: "57.17093326",
        longitude: "-2.125994"
    },
    {
        postcode: "AB24 2BD",
        latitude: "57.17102999",
        longitude: "-2.127582005"
    },
    {
        postcode: "AB24 2BE",
        latitude: "57.16701527",
        longitude: "-2.1177132"
    },
    {
        postcode: "AB24 2BG",
        latitude: "57.17311631",
        longitude: "-2.142159077"
    },
    {
        postcode: "AB24 2BH",
        latitude: "57.17171279",
        longitude: "-2.127485138"
    },
    {
        postcode: "AB24 2BL",
        latitude: "57.17239409",
        longitude: "-2.128860105"
    },
    {
        postcode: "AB24 2BP",
        latitude: "57.173159",
        longitude: "-2.143945825"
    },
    {
        postcode: "AB24 2BQ",
        latitude: "57.17236831",
        longitude: "-2.144273007"
    },
    {
        postcode: "AB24 2BR",
        latitude: "57.17300289",
        longitude: "-2.147616"
    },
    {
        postcode: "AB24 2BT",
        latitude: "57.17225524",
        longitude: "-2.141014679"
    },
    {
        postcode: "AB24 2BX",
        latitude: "57.17228715",
        longitude: "-2.137145"
    },
    {
        postcode: "AB24 2DB",
        latitude: "57.17186918",
        longitude: "-2.13259571"
    },
    {
        postcode: "AB24 2DD",
        latitude: "57.17155709",
        longitude: "-2.130395145"
    },
    {
        postcode: "AB24 2DU",
        latitude: "57.172375",
        longitude: "-2.138171"
    },
    {
        postcode: "AB24 2DY",
        latitude: "57.17206391",
        longitude: "-2.135308543"
    },
    {
        postcode: "AB24 2EE",
        latitude: "57.17131646",
        longitude: "-2.128542144"
    },
    {
        postcode: "AB24 2EH",
        latitude: "57.170788",
        longitude: "-2.127151892"
    },
    {
        postcode: "AB24 2EU",
        latitude: "57.17055611",
        longitude: "-2.125380984"
    },
    {
        postcode: "AB24 2EW",
        latitude: "57.17042003",
        longitude: "-2.126703456"
    },
    {
        postcode: "AB24 2FF",
        latitude: "57.17121739",
        longitude: "-2.109937645"
    },
    {
        postcode: "AB24 2GE",
        latitude: "57.17293776",
        longitude: "-2.14118266"
    },
    {
        postcode: "AB24 2GF",
        latitude: "57.17293081",
        longitude: "-2.139363476"
    },
    {
        postcode: "AB24 2GG",
        latitude: "57.17260587",
        longitude: "-2.132515664"
    },
    {
        postcode: "AB24 2GH",
        latitude: "57.17282654",
        longitude: "-2.13615476"
    }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-image: url(/assets/Images/handshake.jpg);\n  width: 100%;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.upper-back {\n  background-color: black;\n  width: 100%;\n  height: 250px;\n  opacity: 0.5;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.upper-button {\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  z-index: 100;\n\n  font-family: 'Open Sans', sans-serif;\n  position: relative;\n  top: -145px;\n}\n\n.home-button {\n  background-color: #244D93;\ncolor: white;\n  width: 35%;\n}\n\n@font-face {\n  font-family: 'Segoe UI Regular';\n  font-style: normal;\n  font-weight: normal;\n  src: local('Segoe UI Regular'), url('/assets/font/Segoe UI.woff') format('woff');\n}\n\n.home-text-font {\n  font-family: 'Segoe UI Regular';\n  color: #707070;\n  margin-bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBbUQ7RUFDbkQsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IsWUFBWTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdGQUFnRjtBQUNsRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL0ltYWdlcy9oYW5kc2hha2UuanBnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnVwcGVyLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4udXBwZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xuXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNDVweDtcbn1cblxuLmhvbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbmNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDM1JTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiBsb2NhbCgnU2Vnb2UgVUkgUmVndWxhcicpLCB1cmwoJy9hc3NldHMvZm9udC9TZWdvZSBVSS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG59XG5cbi5ob21lLXRleHQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
    }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../common.css */ "./src/app/common.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/matches/matches.component.css":
/*!***********************************************!*\
  !*** ./src/app/matches/matches.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.thanku-section {\n    background-color: white;\n    \n}\n.thanku-p-section\n{\n    font-size: 13px;\n    text-align: center;\n    padding: 18px;\n}\n.match-section\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    height: 150px;\n    background-color: white;\n    display: flex;\n    justify-content: flex-start;\n    /* align-content: flex-start; */\n    align-content: flex-start;\n    align-items: flex-start;\n}\n.match-images {\n    margin-top: 14px;\n    margin-right: 9px;\n    width: 36%;\n}\n.match-content {\n    padding-top: 26px;\n}\n/*===========================================================================================================\nFont-sizes\n=============================================================================================================*/\n.area-p\n{\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n}\n.discription-p\n{\n    font-size: 15px;\n    font-family: 'Segoe UI Regular';\n}\n.property-type-color{\n    color: #8BB440;\n}\n.font-headings\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n    font-size: 21px;\n}\n.thanku-p-section\n{\n    font-family: 'Roboto', sans-serif;\n    font-weight: medium;\n    color: black;\n    font-size: 14px;\n}\n.main-heading\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n}\n@media screen and (max-width:375px)\n{\n    .match-images {\n        margin-top: 14px;\n        margin-right: 9px;\n        width: 34%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7OzhHQUU4RztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBVUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi50aGFua3Utc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgXG59XG4udGhhbmt1LXAtc2VjdGlvblxue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMThweDtcbn1cbi5tYXRjaC1zZWN0aW9uXG57XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1hdGNoLWltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICB3aWR0aDogMzYlO1xufVxuLm1hdGNoLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRm9udC1zaXplc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uYXJlYS1wXG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXNjcmlwdGlvbi1wXG57XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XG59XG4ucHJvcGVydHktdHlwZS1jb2xvcntcbiAgICBjb2xvcjogIzhCQjQ0MDtcbn1cbi5mb250LWhlYWRpbmdzXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbn1cbi50aGFua3UtcC1zZWN0aW9uXG57XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluLWhlYWRpbmdcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxue1xuICAgIC5tYXRjaC1pbWFnZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICAgICAgd2lkdGg6IDM0JTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/matches/matches.component.ts":
/*!**********************************************!*\
  !*** ./src/app/matches/matches.component.ts ***!
  \**********************************************/
/*! exports provided: MatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesComponent", function() { return MatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _matches_matches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matches/matches.service */ "./src/app/matches/matches.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");




let MatchesComponent = class MatchesComponent {
    constructor(MatchesService, stateService) {
        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details
        this.MatchesService.getSellerProperties(this.uid).subscribe(ref => {
            ref.forEach(item => {
                if (item.data().postcode == this.stateService.Buyer.postcode) {
                    this.matchedProperties.push(item.data()); //Use this object to populate html
                }
                else if (item.data().postcode.latitude &&
                    item.data().postcode.longitude) {
                    console.log(item.data().postcode.latitude);
                    this.distanceInKm = this.getDistanceFromLatLonInKm(this.stateService.Buyer.postcode.latitude, this.stateService.Buyer.postcode.longitude, item.data().postcode.latitude, item.data().postcode.longitude);
                    this.unmatchedProperties.push({
                        detail: item.data(),
                        distance: this.distanceInKm
                    });
                    console.log({ detail: item.data(), distance: this.distanceInKm });
                }
                else {
                    this.unmatchedProperties.push({ detail: item.data() });
                    console.log({ detail: item.data() });
                }
            });
            console.log(this.matchedProperties);
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
                Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
MatchesComponent.ctorParameters = () => [
    { type: _matches_matches_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] }
];
MatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-matches",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./matches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/matches/matches.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./matches.component.css */ "./src/app/matches/matches.component.css")).default]
    })
], MatchesComponent);



/***/ }),

/***/ "./src/app/matches/matches.service.ts":
/*!********************************************!*\
  !*** ./src/app/matches/matches.service.ts ***!
  \********************************************/
/*! exports provided: MatchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesService", function() { return MatchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let MatchesService = class MatchesService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Seller");
        // Collection Group
        this.propertiesRef = db.collectionGroup("properties");
    }
    getSellerProperties(uid) {
        return this.propertiesRef.get();
    }
};
MatchesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MatchesService);



/***/ }),

/***/ "./src/app/myproperties/myproperties.component.css":
/*!*********************************************************!*\
  !*** ./src/app/myproperties/myproperties.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n}\n\n.match-section\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    height: 150px;\n    background-color: white;\n    display: flex;\n    justify-content: flex-start;\n    /* align-content: flex-start; */\n    align-content: flex-start;\n    align-items: flex-start;\n}\n\n.match-images {\n    margin-top: 10px;\n    margin-right: 9px;\n    width: 35%;\n}\n\n.match-content {\n    padding-top: 12px;\n}\n\n/*===========================================================================================================\nFont-sizes\n=============================================================================================================*/\n\n.area-p\n{\n    font-size: 12px;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n}\n\n.discription-p\n{\n    font-size: 12px;\n    font-family: 'Segoe UI Regular';\n}\n\n.property-type-color{\n    color: #8BB440;\n}\n\n.font-headings\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n    font-size: 21px;\n    text-transform: capitalize;\n}\n\n.main-heading\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n}\n\n@media screen and (max-width:375px)\n{\n    .match-images {\n        /* margin-top: 14px; */\n        margin-right: 9px;\n        width: 34%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9wZXJ0aWVzL215cHJvcGVydGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTs7OEdBRThHOztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQVVBOztJQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL215cHJvcGVydGllcy9teXByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaGVzLW1haW4tY29udGFpbmVyXG57XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ubWF0Y2gtc2VjdGlvblxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tYXRjaC1pbWFnZXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgd2lkdGg6IDM1JTtcbn1cbi5tYXRjaC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkZvbnQtc2l6ZXNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmFyZWEtcFxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGlzY3JpcHRpb24tcFxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xufVxuLnByb3BlcnR5LXR5cGUtY29sb3J7XG4gICAgY29sb3I6ICM4QkI0NDA7XG59XG4uZm9udC1oZWFkaW5nc1xue1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluLWhlYWRpbmdcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxue1xuICAgIC5tYXRjaC1pbWFnZXMge1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNHB4OyAqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICAgICAgd2lkdGg6IDM0JTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/myproperties/myproperties.component.ts":
/*!********************************************************!*\
  !*** ./src/app/myproperties/myproperties.component.ts ***!
  \********************************************************/
/*! exports provided: MypropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypropertiesComponent", function() { return MypropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myproperties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myproperties.service */ "./src/app/myproperties/myproperties.service.ts");



let MypropertiesComponent = class MypropertiesComponent {
    constructor(myproperty_service) {
        this.myproperty_service = myproperty_service;
        this.propertyDetails = [];
    }
    ngOnInit() {
        // User ID
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details
        this.myproperty_service.getSellerProperties(this.uid).then(res => {
            res.forEach(element => {
                this.propertyDetails.push(element.data());
            });
            console.log(this.propertyDetails);
        });
    }
};
MypropertiesComponent.ctorParameters = () => [
    { type: _myproperties_service__WEBPACK_IMPORTED_MODULE_2__["MypropertiesService"] }
];
MypropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-myproperties",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myproperties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myproperties/myproperties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myproperties.component.css */ "./src/app/myproperties/myproperties.component.css")).default]
    })
], MypropertiesComponent);



/***/ }),

/***/ "./src/app/myproperties/myproperties.service.ts":
/*!******************************************************!*\
  !*** ./src/app/myproperties/myproperties.service.ts ***!
  \******************************************************/
/*! exports provided: MypropertiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypropertiesService", function() { return MypropertiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let MypropertiesService = class MypropertiesService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Seller");
    }
    getSellerProperties(uid) {
        return this.customersRef
            .doc(uid)
            .collection("properties")
            .ref.get();
    }
};
MypropertiesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MypropertiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MypropertiesService);



/***/ }),

/***/ "./src/app/myrequirement/myrequirement.component.css":
/*!***********************************************************!*\
  !*** ./src/app/myrequirement/myrequirement.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-requirement-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.my-requirement-one\n{\n    background-color: white;\n \n}\n.my-requirement-heading\n{\n    text-align: center;\n    font-size: 22px;\n}\n.area-p\n{\n    font-size:20px;\n    font-family: 'Open Sans', sans-serif;\n  \n    text-align: center;\n}\n.discription-p\n{\n    font-size: 12px;\n    font-family: 'Segoe UI Regular';\n    margin-bottom: 0px !important;\n}\n.property-type-color{\n    color: #8BB440;\n}\n.my-requirement-one {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlyZXF1aXJlbWVudC9teXJlcXVpcmVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHVCQUF1Qjs7QUFFM0I7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxvQ0FBb0M7O0lBRXBDLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9teXJlcXVpcmVtZW50L215cmVxdWlyZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1yZXF1aXJlbWVudC1jb250YWluZXJcbntcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4ubXktcmVxdWlyZW1lbnQtb25lXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gXG59XG4ubXktcmVxdWlyZW1lbnQtaGVhZGluZ1xue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uYXJlYS1wXG57XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlzY3JpcHRpb24tcFxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LXR5cGUtY29sb3J7XG4gICAgY29sb3I6ICM4QkI0NDA7XG59XG4ubXktcmVxdWlyZW1lbnQtb25lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/myrequirement/myrequirement.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/myrequirement/myrequirement.component.ts ***!
  \**********************************************************/
/*! exports provided: MyrequirementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrequirementComponent", function() { return MyrequirementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myrequirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myrequirement.service */ "./src/app/myrequirement/myrequirement.service.ts");



let MyrequirementComponent = class MyrequirementComponent {
    constructor(myrequirement_service) {
        this.myrequirement_service = myrequirement_service;
        this.propertyDetails = [];
    }
    ngOnInit() {
        // User ID
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details
        this.myrequirement_service.getBuyerRequirement(this.uid).then(res => {
            res.forEach(element => {
                console.log(element.data());
                this.propertyDetails.push(element.data());
            });
        });
    }
};
MyrequirementComponent.ctorParameters = () => [
    { type: _myrequirement_service__WEBPACK_IMPORTED_MODULE_2__["MyrequirementService"] }
];
MyrequirementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-myrequirement",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myrequirement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myrequirement/myrequirement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myrequirement.component.css */ "./src/app/myrequirement/myrequirement.component.css")).default]
    })
], MyrequirementComponent);



/***/ }),

/***/ "./src/app/myrequirement/myrequirement.service.ts":
/*!********************************************************!*\
  !*** ./src/app/myrequirement/myrequirement.service.ts ***!
  \********************************************************/
/*! exports provided: MyrequirementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrequirementService", function() { return MyrequirementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let MyrequirementService = class MyrequirementService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Buyer");
    }
    getBuyerRequirement(uid) {
        return this.customersRef
            .doc(uid)
            .collection("requirements")
            .ref.get();
    }
};
MyrequirementService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MyrequirementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MyrequirementService);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n@font-face {\n  font-family: HelveticaNeueLight;\n  src: url('/assets/font/HelveticaNeueLight.ttf');\n}\nul{\n  list-style-type: none;\n}\n.nav-div\n{\n  height: 100vh;\n  width: 100%;\n  background-color: white;\n  position: absolute;\n  top: 70px;\n  left: 0;\n  z-index: 200;\n}\n.content {\n  padding: 19px;\n  background-color: #FBF4EF;\n}\nlabel {\n  background: none transparent;\n  border: 2px solid black;\n  border-left: 0 solid transparent;\n  border-right: 0 solid transparent;\n  cursor: pointer;\n  display: block;\n  height: 19px;\n  position: absolute;\n  top: 19px;\n  left: 20px; \n  width: 36px;\n  transition: all .2s;\n}\nlabel::before {\n  background: black;\n  content: '';\n  height: 2px;\n  width: 36px;\n  transition: all .2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* top: 18px; */\n  margin-top: 6.2px;\n\n}\nlabel::after {\n  background: black;\n  content: '';\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 6px;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  transform: rotate(90deg);\n  transition: all .2s;\n}\n.menu-text{\n  position: absolute;\n  top: 40px;\n  left: 13px;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.menu-text::after\n{\n  display: none;\n}\n.logo-nav\n{\n  width: 50%;\n}\n.imge-logo-header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-top: 0px;\n  padding-left: 0;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 30px;\n  position: absolute;\n  top: 14px;\n  right: 0px;\n  margin-top: 0px;\n}\n.user-img\n{\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 38px;\n \n}\nimg.open {\n  width: 17%;\n  position: absolute;\n  top: 0px;\n  left: 4px;\n}\nimg.close-img\n{\n  width: 6%;\n  position: absolute;\n  top: 17px;\n  left: 27px;\n}\n.has-search .form-control {\n  padding-left: 2.375rem;\n}\n.has-search .form-control-feedback {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n.nav-links {\n  margin: 0;\n  padding: 0px;\n}\n.main {\n  width: 50%;\n  margin: 50px auto;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  /* padding: 10px; */\n  margin-left: calc(-50vw + 50%);\nmargin-right: calc(-50vw + 50%);\nmargin-top: calc(-50vw + 50%);\n}\n.grid-container > div {\n \n\n  text-align: Left;\n  font-size: 18.5px;\n  padding: 17px;\n\n\n}\n.grid-container:hover\n{\n  background-color: #EBEBEB;\n  text-decoration: none;\n}\nimg.nav-link-icon {\n  float: right;\n  /* text-align: right; */\n  /* display: flex; */\n}\n.nav-links-text {\n  color: black;\n  font-family: 'HelveticaNeueLight';\n}\ninput[type=text] {\n     /* float: right; */\n     padding: 15px;\n     border: 1px solid lightgrey;\n     /* margin-top: 8px; */\n     /* margin-right: 16px; */\n     font-size: 17px;\n     width: 87%;  \n     \n}\n.search-grid-conatiner\n{\n  display: grid;\n  grid-template-columns: 11fr  ;\n}\n.search-grid-conatiner > div\n{\n  font-size: 18.5px;\n  padding: 14px;\n  padding-top: 5px;\n  padding-bottom: 11px;\n  background-color: #FBF4EF;\n}\n.nav-link-icon-search {\n  width: 38px;\n  padding: 4px;\n  margin-top: -4px;\n  border: 1px solid lightgrey;\n  background-color: white;\n  height: 56.5px;\n}\ni.fa.fa-user {\n  display: flex;\n  flex-direction: column;\n \n}\nspan.log-out-text {\n  font-size: 12px;\n  position: relative;\n  right: 12px;\n  margin-top: 5px;\n  text-transform: uppercase;\n  font-family: HelveticaNeueLight;\n}\n.btn-facebook\n\n\n{\n background-color: #244D93;\n color: white;\n width: 30%;\n    height: 35px;\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.btn-google\n{\n    background-color: #DD4B33;\n    color: white;\n    width: 30%;\n    height: 35px;\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.social-login h4\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 700;\n}\n.social-button {\n    display: flex;\n    /* justify-content: center; */\n    justify-content: space-evenly;\n    align-items: center;\n\n}\n.color-signup\n{\n    color: #244D93;\n}\n.btn-social-login\n{\n    width: 100%;\n    background-color: #244D93;\n    color: white;\n    margin-top: 3%;\n    font-family: 'Open Sans', sans-serif;\n  \n}\ni.fa.fa-user.input-group-text.nav-login-form{\n  position: absolute;\n  font-size: 23px;\n  left: 0px;\n  width: 10%;\n  z-index: 10;\n  margin-top: -4%;\n}\n.social-login.text-center {\n  padding: 15px;\n}\n.checkbox\n{\n  background: none transparent;\n     border: none; \n     border-left: none; \n     border-right: none; \n    cursor: pointer;\n    /* display: block; */\n    height: auto;\n    position: absolute;\n    top: none; \n     left: none; \n    right: 9px;\n     width: none; \n    /* transition: all .2s; */\n    display: flex;\n    flex-direction: row;\n\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n  border: none;\n}\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTtBQUNyRTtFQUNFLCtCQUErQjtFQUMvQiwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFFWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjs7QUFFbkI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUVILHdCQUF3QjtFQUVoQyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7O0VBRUUsU0FBUztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QjtBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7OztBQUdmO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7QUFDQTtLQUNLLGtCQUFrQjtLQUNsQixhQUFhO0tBQ2IsMkJBQTJCO0tBQzNCLHFCQUFxQjtLQUNyQix3QkFBd0I7S0FDeEIsZUFBZTtLQUNmLFVBQVU7O0FBRWY7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7QUFDQTs7OztDQUlDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osVUFBVTtJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUJBQW1COztBQUV2QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DOztBQUV4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSw0QkFBNEI7S0FDekIsWUFBWTtLQUNaLGlCQUFpQjtLQUNqQixrQkFBa0I7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7S0FDUixVQUFVO0lBQ1gsVUFBVTtLQUNULFdBQVc7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0Esb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVMaWdodDtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udC9IZWx2ZXRpY2FOZXVlTGlnaHQudHRmJyk7XG59XG51bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5hdi1kaXZcbntcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjAwO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGNEVGO1xufVxuXG5sYWJlbCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyMHB4OyBcbiAgd2lkdGg6IDM2cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxubGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAzNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIHRvcDogMThweDsgKi9cbiAgbWFyZ2luLXRvcDogNi4ycHg7XG5cbn1cblxubGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4ubWVudS10ZXh0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLm1lbnUtdGV4dDo6YWZ0ZXJcbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2dvLW5hdlxue1xuICB3aWR0aDogNTAlO1xufVxuLmltZ2UtbG9nby1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udXNlci1pbWdcbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LXNpemU6IDM4cHg7XG4gXG59XG5pbWcub3BlbiB7XG4gIHdpZHRoOiAxNyU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDRweDtcbn1cbmltZy5jbG9zZS1pbWdcbntcbiAgd2lkdGg6IDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgbGVmdDogMjdweDtcbn1cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xufVxuXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuMzc1cmVtO1xuICBoZWlnaHQ6IDIuMzc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4zNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xufVxuLm5hdi1saW5rcyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4O1xufVxuLm1haW4ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC01MHZ3ICsgNTAlKTtcbm1hcmdpbi1yaWdodDogY2FsYygtNTB2dyArIDUwJSk7XG5tYXJnaW4tdG9wOiBjYWxjKC01MHZ3ICsgNTAlKTtcbn1cblxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcbiBcblxuICB0ZXh0LWFsaWduOiBMZWZ0O1xuICBmb250LXNpemU6IDE4LjVweDtcbiAgcGFkZGluZzogMTdweDtcblxuXG59XG4uZ3JpZC1jb250YWluZXI6aG92ZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW1nLm5hdi1saW5rLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xufVxuLm5hdi1saW5rcy10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYU5ldWVMaWdodCc7XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgIC8qIG1hcmdpbi10b3A6IDhweDsgKi9cbiAgICAgLyogbWFyZ2luLXJpZ2h0OiAxNnB4OyAqL1xuICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgIHdpZHRoOiA4NyU7ICBcbiAgICAgXG59XG4uc2VhcmNoLWdyaWQtY29uYXRpbmVyXG57XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTFmciAgO1xufVxuLnNlYXJjaC1ncmlkLWNvbmF0aW5lciA+IGRpdlxue1xuICBmb250LXNpemU6IDE4LjVweDtcbiAgcGFkZGluZzogMTRweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY0RUY7XG59XG4ubmF2LWxpbmstaWNvbi1zZWFyY2gge1xuICB3aWR0aDogMzhweDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU2LjVweDtcbn1cbmkuZmEuZmEtdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gXG59XG5zcGFuLmxvZy1vdXQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUxpZ2h0O1xufVxuLmJ0bi1mYWNlYm9va1xuXG5cbntcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuIGNvbG9yOiB3aGl0ZTtcbiB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5idG4tZ29vZ2xlXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG4uc29jaWFsLWxvZ2luIGg0XG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc29jaWFsLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4uY29sb3Itc2lnbnVwXG57XG4gICAgY29sb3I6ICMyNDREOTM7XG59XG4uYnRuLXNvY2lhbC1sb2dpblxue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgXG59XG5pLmZhLmZhLXVzZXIuaW5wdXQtZ3JvdXAtdGV4dC5uYXYtbG9naW4tZm9ybXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwJTtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6IC00JTtcbn1cbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNoZWNrYm94XG57XG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XG4gICAgIGJvcmRlcjogbm9uZTsgXG4gICAgIGJvcmRlci1sZWZ0OiBub25lOyBcbiAgICAgYm9yZGVyLXJpZ2h0OiBub25lOyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IG5vbmU7IFxuICAgICBsZWZ0OiBub25lOyBcbiAgICByaWdodDogOXB4O1xuICAgICB3aWR0aDogbm9uZTsgXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let NavComponent = class NavComponent {
    constructor(authService, afs, // Inject Firestore service
    afAuth) {
        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.isLoggedIn = true;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
                this.LoggedIn();
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
                this.LoggedOut();
            }
        });
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
};
NavComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/ownaproperty/ownaproperty.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ownaproperty/ownaproperty.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.own-porpety-text {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.owna-property-text {\n  font-size: 18px;\n  font-family: 'Open Sans', sans-serif;\n\n}\n.own-property-list {\n  padding-right: 15px;\n  padding-left: 0px;\n  text-align: justify;\n  font-family: 'Roboto', sans-serif;\n  font-weight: medium;\n}\nul.own-property-list-style {\n  font-size: 15px;\n  text-align: justify;\n  list-style: none;\n}\n.own-property-image {\n  background-image: url(\"/assets/Images/image-new.png\");\n  height: 164px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 10px;\n\n}\n.own-property-image-text {\n  position: absolute;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-size: 21px;\n  text-transform: capitalize;\n  font-family: 'Roboto', sans-serif;\n  font-weight: medium;\n}\n.btn-own-property-offer {\n  width: 90%;\n  background-color: #244D93;\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Open Sans', sans-serif;\n}\n.own-property-home-worth {\n  background-color: white;\n}\n.own-property-text-home-worth {\n  text-align: left;\n  margin-bottom: .5em;\n  padding-left: 31px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n}\n.own-property-text-home-worth-ans {\n  text-align: left;\n  padding-left: 31px;\n  padding-right: 31px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n.own-property-blog {\n  background-color: white;\n  padding-bottom: 5px;\n}\n.own-property-blog-heading {\n  font-size: 25px;\n  text-transform: uppercase;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n}\n.own-property-blog-image {\n  width: 23%;\n  margin-right: 9px;\n  margin-left: 5px;\n}\n.own-property-blogs-content-c1 {\n  /* margin-right: 88px; */\n  text-align: left;\n  margin-bottom: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n.own-property-blogs-content-c2 {\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n\n}\n.own-property-blogs-content-c1-2 {\n  text-align: left;\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n.own-property-blogs-content-c2-2 {\n  text-align: left;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n}\nhr {\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 2px solid grey;\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.own-property-last-image {\n  width: -webkit-fill-available;\n}\n.own-property-last-image-text {\n  text-align: left;\n  margin-left: 20px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  margin-top: 10px;\n}\n.own-property-last-line {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\nli {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n.Looking-property-image {\n  background-image: url(\"/assets/Images/image-new2.png\");\n  height: 305px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 10px;\n\n}\n.looking-property-image-text {\n  position: relative;\n  /* top: 227px; */\n  position: relative;\n  top: 76%;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-size: 23px;\n  text-transform: capitalize;\n  font-family: 'Roboto', sans-serif;\n}\n.button-own-a-property {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duYXByb3BlcnR5L293bmFwcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHNEQUFzRDtFQUN0RCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vd25hcHJvcGVydHkvb3duYXByb3BlcnR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vd24tcG9ycGV0eS10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm93bmEtcHJvcGVydHktdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5vd24tcHJvcGVydHktbGlzdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG59XG5cbnVsLm93bi1wcm9wZXJ0eS1saXN0LXN0eWxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ub3duLXByb3BlcnR5LWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9JbWFnZXMvaW1hZ2UtbmV3LnBuZ1wiKTtcbiAgaGVpZ2h0OiAxNjRweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4ub3duLXByb3BlcnR5LWltYWdlLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbWVkaXVtO1xufVxuXG4uYnRuLW93bi1wcm9wZXJ0eS1vZmZlciB7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4ub3duLXByb3BlcnR5LWhvbWUtd29ydGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm93bi1wcm9wZXJ0eS10ZXh0LWhvbWUtd29ydGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDMxcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm93bi1wcm9wZXJ0eS10ZXh0LWhvbWUtd29ydGgtYW5zIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5vd24tcHJvcGVydHktYmxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ub3duLXByb3BlcnR5LWJsb2ctaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ub3duLXByb3BlcnR5LWJsb2ctaW1hZ2Uge1xuICB3aWR0aDogMjMlO1xuICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMxIHtcbiAgLyogbWFyZ2luLXJpZ2h0OiA4OHB4OyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG5cbn1cbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMS0yIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMi0yIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5ociB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5vd24tcHJvcGVydHktbGFzdC1pbWFnZSB7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4ub3duLXByb3BlcnR5LWxhc3QtaW1hZ2UtdGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5vd24tcHJvcGVydHktbGFzdC1saW5lIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLkxvb2tpbmctcHJvcGVydHktaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0ltYWdlcy9pbWFnZS1uZXcyLnBuZ1wiKTtcbiAgaGVpZ2h0OiAzMDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuLmxvb2tpbmctcHJvcGVydHktaW1hZ2UtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogdG9wOiAyMjdweDsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDc2JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG4uYnV0dG9uLW93bi1hLXByb3BlcnR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ownaproperty/ownaproperty.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ownaproperty/ownaproperty.component.ts ***!
  \********************************************************/
/*! exports provided: OwnapropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnapropertyComponent", function() { return OwnapropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OwnapropertyComponent = class OwnapropertyComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.useCase = params["use"];
            if (this.useCase == "buy") {
                this.activeTab = 0;
            }
            else if (this.useCase == "sell") {
                this.activeTab = 1;
            }
            console.log(this.useCase);
        });
    }
};
OwnapropertyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OwnapropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ownaproperty",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ownaproperty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ownaproperty/ownaproperty.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ownaproperty.component.css */ "./src/app/ownaproperty/ownaproperty.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../common.css */ "./src/app/common.css")).default]
    })
], OwnapropertyComponent);



/***/ }),

/***/ "./src/app/prefrences/prefrences.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prefrences/prefrences.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prefrences-main-div\n{\n    padding-left: 8px;\n    padding-right: 8px;\n}\n.property-detail-h3\n{\n    font-family: 'Open Sans', sans-serif;\n \n    font-size: 24px;\n    text-align: center;\n    margin: 15px 0px 15px 0px;\n}\n.prefrence-notification\n{\n    background-color: white;\n    padding: 5px;\n}\n.prefrence-radio {\n    margin: 20px;\n}\n.notification-heading {\n    padding-top: 10px;\n    font-size: 22px;\n    font-weight: normal;\n}\n.radio-text\n{\n    font-family: 'Roboto', sans-serif !important;\n    font-weight: 400;\n    color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZnJlbmNlcy9wcmVmcmVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ByZWZyZW5jZXMvcHJlZnJlbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZWZyZW5jZXMtbWFpbi1kaXZcbntcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ucHJvcGVydHktZGV0YWlsLWgzXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuIFxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcbn1cbi5wcmVmcmVuY2Utbm90aWZpY2F0aW9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLnByZWZyZW5jZS1yYWRpbyB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuLm5vdGlmaWNhdGlvbi1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5yYWRpby10ZXh0XG57XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjpibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/prefrences/prefrences.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prefrences/prefrences.component.ts ***!
  \****************************************************/
/*! exports provided: PrefrencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefrencesComponent", function() { return PrefrencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrefrencesComponent = class PrefrencesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrefrencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prefrences',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prefrences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prefrences/prefrences.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prefrences.component.css */ "./src/app/prefrences/prefrences.component.css")).default]
    })
], PrefrencesComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-main-container {\n  padding-right: 8px;\n  padding-left: 8px;\n  background-color: #EBEBEB;\n  padding-bottom: 60px;\n  margin: 0;\n}\n\n.Profile-pic {\n  width: 37%;\n\n}\n\np.profile-heading {\n  /* text-align: center; */\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center;\n  font-size: 27px;\n  padding-top: 7px;\n}\n\n.profile-name-image {\n  display: flex;\n  /* justify-content: space-evenly; */\n  justify-content: space-evenly;\n  align-items: center;\n  align-content: center;\n}\n\n.profile-name {\n  font-size: 25px;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\n.profile-name-field-option {\n  background-color: white;\n  padding-top: 10px;\n  padding-left: 10px;\n  margin-top: 30px;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 3fr 4fr;\n  grid-gap: 10px;\n  padding: 0px;\n}\n\n.grid-container>div {\n  background-color: rgba(255, 255, 255, 0.8);\n\n  padding: 0px 5px;\n\n}\n\n.fname-text1 {\n  font-size: 20px;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\n.fname-text2 {\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\n.fname-text3 {\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQzs7RUFFMUMsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DOztBQUV0QyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbWFpbi1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uUHJvZmlsZS1waWMge1xuICB3aWR0aDogMzclO1xuXG59XG5cbnAucHJvZmlsZS1oZWFkaW5nIHtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI3cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5wcm9maWxlLW5hbWUtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5wcm9maWxlLW5hbWUtZmllbGQtb3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmdyaWQtY29udGFpbmVyPmRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblxuICBwYWRkaW5nOiAwcHggNXB4O1xuXG59XG5cbi5mbmFtZS10ZXh0MSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5mbmFtZS10ZXh0MiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5mbmFtZS10ZXh0MyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _forms_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/forms.service */ "./src/app/forms/forms.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(FormsService) {
        this.FormsService = FormsService;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
        if (this.user) {
            //
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileComponent.prototype, "Buyer", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../common.css */ "./src/app/common.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/propertydetails/propertydetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/propertydetails/propertydetails.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-detail-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.wrapper-detail-container\n{\n    background-color: white;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.property-detail-h3\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    margin: 15px 0px 15px 0px;\n}\n.streetname {\n    /* display: flex; */\n    align-items: space-between;\n    /* text-align: left; */\n    /* justify-content: space-between; */\n    margin-left: 50px;\n    /* margin-right: 20px; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n.details-p-headings\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n    font-size: 14px;\n}\n.details-output-p\n{\n    font-family: 'Segoe UI Regular';\n}\n.table td, .table th {\n    padding: .75rem;\n    vertical-align: top;\n border-top: none;\n}\n.button-details {\n    display: flex;\n    /* justify-content: center; */\n  \n  \n    align-content: center;\n    margin-top: 70px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.btn-chat {\n    background-color: #244D93;\n    color: white;\n    width: 44%;\n    height: 35px;\n    /* display: flex; */\n    font-family: 'Open Sans', sans-serif;\n    font-size: 15px;\n}\n.button-ask\n{\n    background-color: #244D93;\n    color: white;\n    width: 50%;\n    height: 35px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 13px;\n    margin-bottom: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHlkZXRhaWxzL3Byb3BlcnR5ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7O0lBRzdCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eWRldGFpbHMvcHJvcGVydHlkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZGV0YWlsLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ucHJvcGVydHktZGV0YWlsLWgzXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcbn1cbi5zdHJlZXRuYW1lIHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kZXRhaWxzLXAtaGVhZGluZ3NcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRldGFpbHMtb3V0cHV0LXBcbntcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xufVxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IC43NXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuIGJvcmRlci10b3A6IG5vbmU7XG59XG4uYnV0dG9uLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIFxuICBcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnRuLWNoYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA0NCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5idXR0b24tYXNrXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/propertydetails/propertydetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/propertydetails/propertydetails.component.ts ***!
  \**************************************************************/
/*! exports provided: PropertydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertydetailsComponent", function() { return PropertydetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropertydetailsComponent = class PropertydetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PropertydetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propertydetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propertydetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/propertydetails/propertydetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propertydetails.component.css */ "./src/app/propertydetails/propertydetails.component.css")).default]
    })
], PropertydetailsComponent);



/***/ }),

/***/ "./src/app/requirementdetails/requirementdetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/requirementdetails/requirementdetails.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-detail-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    padding-bottom: 9px;\n}\n.wrapper-detail-container\n{\n    background-color: white;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.property-detail-h3\n{\n    font-family: 'Open Sans', sans-serif;\n \n    font-size: 24px;\n    text-align: center;\n    margin: 15px 0px 15px 0px;\n}\n.streetname {\n    /* display: flex; */\n    align-items: space-between;\n    /* text-align: left; */\n    /* justify-content: space-between; */\n    margin-left: 50px;\n    /* margin-right: 20px; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    padding-top: 10px;\n}\n.details-p-headings\n{\n    font-family: 'Open Sans', sans-serif;\n   \n    font-size: 17px;\n    color: #00A8FF;\n}\n.details-output-p\n{\n    font-family: 'Open Sans', sans-serif;\n    font-size: 15px;\n}\n.table td, .table th {\n    padding: .75rem;\n    vertical-align: top;\n border-top: none;\n}\n.button-details {\n    display: flex;\n    /* justify-content: center; */\n  \n  \n    align-content: center;\n    margin-top: 70px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.btn-chat {\n    background-color: #244D93;\n    color: white;\n    width: 44%;\n    height: 35px;\n    /* display: flex; */\n    font-family: 'Open Sans', sans-serif;\n    font-size: 15px;\n}\n.button-ask\n{\n    background-color: #244D93;\n    color: white;\n    width: 50%;\n    height: 35px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 13px;\n    margin-bottom: 18px;\n}\n.carousel-item {\n    height: 170px;\n    background-size: cover;\n}\n.carousel-indicators li {\n    width: 13px;\n    height: 13px;\n    border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWlyZW1lbnRkZXRhaWxzL3JlcXVpcmVtZW50ZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOzs7SUFHN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZXF1aXJlbWVudGRldGFpbHMvcmVxdWlyZW1lbnRkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZGV0YWlsLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xufVxuLndyYXBwZXItZGV0YWlsLWNvbnRhaW5lclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9wZXJ0eS1kZXRhaWwtaDNcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xufVxuLnN0cmVldG5hbWUge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmRldGFpbHMtcC1oZWFkaW5nc1xue1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgIFxuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogIzAwQThGRjtcbn1cbi5kZXRhaWxzLW91dHB1dC1wXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAuNzVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiBib3JkZXItdG9wOiBub25lO1xufVxuLmJ1dHRvbi1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBcbiAgXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ0bi1jaGF0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNDQlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYnV0dG9uLWFza1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/requirementdetails/requirementdetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/requirementdetails/requirementdetails.component.ts ***!
  \********************************************************************/
/*! exports provided: RequirementdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementdetailsComponent", function() { return RequirementdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequirementdetailsComponent = class RequirementdetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
RequirementdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requirementdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./requirementdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirementdetails/requirementdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./requirementdetails.component.css */ "./src/app/requirementdetails/requirementdetails.component.css")).default]
    })
], RequirementdetailsComponent);



/***/ }),

/***/ "./src/app/selectedpropertydetail/selectedpropertydetail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/selectedpropertydetail/selectedpropertydetail.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-detail-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    padding-bottom: 9px;\n}\n.wrapper-detail-container\n{\n    background-color: white;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.property-detail-h3\n{\n    font-family: 'Open Sans', sans-serif;\n \n    font-size: 24px;\n    text-align: center;\n    margin: 15px 0px 15px 0px;\n}\n.streetname {\n    /* display: flex; */\n    align-items: space-between;\n    /* text-align: left; */\n    /* justify-content: space-between; */\n    margin-left: 50px;\n    /* margin-right: 20px; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    padding-top: 20px;\n}\n.details-p-headings\n{\n    font-family: 'Open Sans', sans-serif;\n   \n    font-size: 17px;\n    color: #00A8FF;\n}\n.details-output-p\n{\n    font-family: 'Open Sans', sans-serif;\n    font-size: 15px;\n}\n.table td, .table th {\n    padding: .75rem;\n    vertical-align: top;\n border-top: none;\n}\n.button-details {\n    display: flex;\n    /* justify-content: center; */\n  \n  \n    align-content: center;\n    margin-top: 70px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.btn-chat {\n    background-color: #244D93;\n    color: white;\n    width: 44%;\n    height: 35px;\n    /* display: flex; */\n    font-family: 'Open Sans', sans-serif;\n    font-size: 15px;\n}\n.button-ask\n{\n    background-color: #244D93;\n    color: white;\n    width: 50%;\n    height: 35px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 13px;\n    margin-bottom: 18px;\n}\n.carousel-item {\n    height: 170px;\n    background-size: cover;\n}\n.carousel-indicators li {\n    width: 13px;\n    height: 13px;\n    border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0ZWRwcm9wZXJ0eWRldGFpbC9zZWxlY3RlZHByb3BlcnR5ZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7OztJQUc3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGVkcHJvcGVydHlkZXRhaWwvc2VsZWN0ZWRwcm9wZXJ0eWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWRldGFpbC1jb250YWluZXJcbntcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcbn1cbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ucHJvcGVydHktZGV0YWlsLWgzXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuIFxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcbn1cbi5zdHJlZXRuYW1lIHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5kZXRhaWxzLXAtaGVhZGluZ3NcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICBcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6ICMwMEE4RkY7XG59XG4uZGV0YWlscy1vdXRwdXQtcFxue1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjc1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5idXR0b24tZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgXG4gIFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG4tY2hhdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDQ0JTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmJ1dHRvbi1hc2tcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/selectedpropertydetail/selectedpropertydetail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/selectedpropertydetail/selectedpropertydetail.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectedpropertydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedpropertydetailComponent", function() { return SelectedpropertydetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _selectedpropertydetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedpropertydetail.service */ "./src/app/selectedpropertydetail/selectedpropertydetail.service.ts");



let SelectedpropertydetailComponent = class SelectedpropertydetailComponent {
    constructor(SelectedpropertydetailService) {
        this.SelectedpropertydetailService = SelectedpropertydetailService;
        this.isLoading = false;
        this.propertyDetails = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details
        this.SelectedpropertydetailService.getSellerProperties(this.uid).then(res => {
            res.forEach(element => {
                this.propertyDetails.push(element.data());
            });
            console.log(this.propertyDetails);
        });
    }
};
SelectedpropertydetailComponent.ctorParameters = () => [
    { type: _selectedpropertydetail_service__WEBPACK_IMPORTED_MODULE_2__["SelectedpropertydetailService"] }
];
SelectedpropertydetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectedpropertydetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selectedpropertydetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectedpropertydetail/selectedpropertydetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selectedpropertydetail.component.css */ "./src/app/selectedpropertydetail/selectedpropertydetail.component.css")).default]
    })
], SelectedpropertydetailComponent);



/***/ }),

/***/ "./src/app/selectedpropertydetail/selectedpropertydetail.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/selectedpropertydetail/selectedpropertydetail.service.ts ***!
  \**************************************************************************/
/*! exports provided: SelectedpropertydetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedpropertydetailService", function() { return SelectedpropertydetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let SelectedpropertydetailService = class SelectedpropertydetailService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Seller");
    }
    getSellerProperties(uid) {
        return this.customersRef
            .doc(uid)
            .collection("properties")
            .ref.get();
    }
};
SelectedpropertydetailService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SelectedpropertydetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SelectedpropertydetailService);



/***/ }),

/***/ "./src/app/sellerform/requireMatch.ts":
/*!********************************************!*\
  !*** ./src/app/sellerform/requireMatch.ts ***!
  \********************************************/
/*! exports provided: RequireMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequireMatch", function() { return RequireMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function RequireMatch(control) {
    const selection = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}


/***/ }),

/***/ "./src/app/sellerform/seller.ts":
/*!**************************************!*\
  !*** ./src/app/sellerform/seller.ts ***!
  \**************************************/
/*! exports provided: Seller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seller", function() { return Seller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Seller {
    constructor() {
        this.Title = "Mr";
        this.Country = "India";
        this.PropertyType = "Terrace House";
        this.ownership = "Freehold";
        this.active = true;
        this.ExpectedAmount = 50000;
    }
}


/***/ }),

/***/ "./src/app/sellerform/sellerform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sellerform/sellerform.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-containers {\n\n  width: auto;\n  background-color: white;\n\n}\n\n.forms-container {\n\n  padding-bottom: 4%;\n  padding-top: 1%;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.tab-content {\n  padding: 20px;\n}\n\n.row {\n  overflow-x: hidden;\n}\n\nnav {\n  background-color: #244D93;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 11px;\n  margin-top: 62px;\n\n}\n\n.nav-link {\n  color: white;\n}\n\n.nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #244D93;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700 !important;\n}\n\n.other-option {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.nav-link {\n  display: block;\n  padding: 0rem 1rem;\n\n}\n\ndiv#nav-tabContent {\n  width: auto;\n}\n\n.seller-form-upper {\n  padding-top: 6px;\n}\n\n.seller-form-upper p {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n}\n\n.seller-form-upper span {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n}\n\n.top-hr {\n  margin-top: -1rem;\n  margin-bottom: 0rem;\n  border: 0;\n  border-top: 2px solid grey\n}\n\n.btn-facebook {\n  background-color: #244D93;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.btn-google {\n  background-color: #DD4B33;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.social-login h4 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n\n.social-button {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: space-evenly;\n  align-items: center;\n\n}\n\n.color-signup {\n  color: #244D93;\n}\n\n.btn-social-login {\n  width: 100%;\n  background-color: #244D93;\n  color: white;\n  margin-top: 3%;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\nbutton.btn.dropdown-toggle {\n  width: 100%;\n}\n\n.dropdown-menu.show {\n  width: 100%;\n}\n\n.dropdown-toggle::after {\n\n  margin-left: .255em;\n  vertical-align: 2.255em;\n  content: \"\";\n  border-top: .4em solid;\n  border-right: .4em solid transparent;\n  border-bottom: 0;\n  border-left: .4em solid transparent;\n  float: right;\n  text-align: center;\n  margin-top: 3%;\n}\n\n/* span.text-dropdown {\n    float: left;\n} */\n\n.dropdown-item {\n  text-align: center;\n}\n\nbutton.btn.dropdown-toggle {\n  width: 100%;\n  /* border: 1px solid grey; */\n  border: 1px solid #CED4DA;\n}\n\n.endind-button {\n  /* background-color: unset; */\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n}\n\n.btn.btn-back {\n  width: 33%;\n  background-color: #244D93;\n  /* height: 35px; */\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.btn-next {\n  background-color: #244D93;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.or-text {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.second-container {\n  background-color: white;\n\n}\n\ninput#Tittle {\n  width: 100%;\n}\n\n.forms-heading {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  font-size: 18px;\n}\n\n.forms-star {\n  font-family: 'Open Sans', sans-serif;\n}\n\nlabel {\n  font-family: 'Open Sans', sans-serif;\n  color: #707070;\n}\n\n.dropdown-item {\n  font-family: 'Open Sans', sans-serif;\n  color: #707070;\n}\n\n.form-or-p {\n  border-radius: 50%;\n  width: 36px;\n  height: 26px;\n  /* padding: 8px; */\n  background: #fff;\n  border: 1px solid black;\n  color: #666;\n  text-align: center;\n  font: 19px 'Open Sans', sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center\n}\n\n.forms-or {\n  display: flex;\n  justify-content: center;\n}\n\n.form-or-p:before,\n.form-or-p:after {\n  background-color: #333;\n  content: \"\";\n  display: inline-block;\n  height: 1px;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.form-or-p:before {\n  right: .5em;\n  margin-left: -100%;\n}\n\n.form-or-p:after {\n  left: .5em;\n  margin-right: -100%;\n}\n\nbtnDefault,\n.btnUpload {\n  background-color: lightgrey;\n  border: 1px solid #CCCCCC;\n  color: #333333;\n  cursor: pointer;\n  font-weight: 400;\n  display: inline-block;\n  padding: 6px 12px;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n}\n\n.btnDefault:focus,\n.btnDefault:hover,\n.btnUpload:focus,\n.btnUpload:hover {\n  background-color: grey;\n}\n\n.btnM {\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 6px 12px;\n}\n\n.customUpload {\n  overflow: hidden;\n  position: relative;\n  display: block;\n}\n\n.customUpload input.upload {\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.forms-heading-optional {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n\n  padding-left: 16px;\n}\n\n.optional-button-group {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  align-content: center;\n  margin-top: 40px;\n}\n\n.row-check {\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox-check {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: auto;\n}\n\n.radio-align {\n\n  flex-direction: column;\n  margin: 0;\n  display: flex;\n\n}\n\n.radio-main-container {\n  justify-content: space-between;\n  /* margin: 0; */\n  /* padding: 0; */\n\n  align-content: center;\n}\n\n.submit-button {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-top: 16px;\n}\n\n.step.finish {\n  background-color: #244D93\n}\n\na.nav-link.disabled {\n\n  color: white;\n}\n\n.button-next {\n  display: flex;\n  justify-content: center;\n}\n\n.button-next-tab2 {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 20px;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n  border: none;\n}\n\n.mat-mail-input {\n  border: none;\n}\n\n.tabs-align-padding {\n \n  padding: 17px;\n}\n\n.mat-tab-label {\n  height: 48px;\n  padding: 0 14px;\n  cursor: pointer;\n  box-sizing: border-box;\n  opacity: .6;\n  min-width: 160px;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n  font-size: 13px;\n}\n\n.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\n  display: none;\n}\n\n.example-section {\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.tabs-align-padding {\n \n  padding: 17px;\n}\n\n.mat-tab-group.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\n  display: none;\n}\n\n.tab-pane {\n  background: white;\n \n}\n\n.social-login {\n  background-color: white;\n}\n\n.mat-tab-label {\n  height: 48px;\n  padding: 0 20px !important;\n  cursor: pointer;\n  box-sizing: border-box;\n  opacity: .6;\n  min-width: 160px;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyZm9ybS9zZWxsZXJmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVDtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUNIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhOztBQUVmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtBQUN2Qjs7QUFJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVyZm9ybS9zZWxsZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJzIHtcblxuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmZvcm1zLWNvbnRhaW5lciB7XG5cbiAgcGFkZGluZy1ib3R0b206IDQlO1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5yb3cge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgbWFyZ2luLXRvcDogNjJweDtcblxufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjQ0RDkzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTYgI2RlZTJlNiAjZmZmO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLm90aGVyLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHJlbSAxcmVtO1xuXG59XG5cbmRpdiNuYXYtdGFiQ29udGVudCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uc2VsbGVyLWZvcm0tdXBwZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uc2VsbGVyLWZvcm0tdXBwZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VsbGVyLWZvcm0tdXBwZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvcC1ociB7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uc29jaWFsLWxvZ2luIGg0IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc29jaWFsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uY29sb3Itc2lnbnVwIHtcbiAgY29sb3I6ICMyNDREOTM7XG59XG5cbi5idG4tc29jaWFsLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxufVxuXG5idXR0b24uYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24tbWVudS5zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcblxuICBtYXJnaW4tbGVmdDogLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMi4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogLjRlbSBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4vKiBzcGFuLnRleHQtZHJvcGRvd24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufSAqL1xuLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRUQ0REE7XG59XG5cbi5lbmRpbmQtYnV0dG9uIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4uYnRuLWJhY2sge1xuICB3aWR0aDogMzMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICAvKiBoZWlnaHQ6IDM1cHg7ICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uYnRuLW5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLm9yLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uc2Vjb25kLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cbmlucHV0I1RpdHRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybXMtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZm9ybXMtc3RhciB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5mb3JtLW9yLXAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIC8qIHBhZGRpbmc6IDhweDsgKi9cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQ6IDE5cHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyXG59XG5cbi5mb3Jtcy1vciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1vci1wOmJlZm9yZSxcbi5mb3JtLW9yLXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1vci1wOmJlZm9yZSB7XG4gIHJpZ2h0OiAuNWVtO1xuICBtYXJnaW4tbGVmdDogLTEwMCU7XG59XG5cbi5mb3JtLW9yLXA6YWZ0ZXIge1xuICBsZWZ0OiAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xufVxuXG5idG5EZWZhdWx0LFxuLmJ0blVwbG9hZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5idG5EZWZhdWx0OmZvY3VzLFxuLmJ0bkRlZmF1bHQ6aG92ZXIsXG4uYnRuVXBsb2FkOmZvY3VzLFxuLmJ0blVwbG9hZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5idG5NIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuXG4uY3VzdG9tVXBsb2FkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5mb3Jtcy1oZWFkaW5nLW9wdGlvbmFsIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ub3B0aW9uYWwtYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnJvdy1jaGVjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaGVja2JveC1jaGVjayB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJhZGlvLWFsaWduIHtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuLnJhZGlvLW1haW4tY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBtYXJnaW46IDA7ICovXG4gIC8qIHBhZGRpbmc6IDA7ICovXG5cbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5cblxuLnN1Ym1pdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uc3RlcC5maW5pc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzXG59XG5cbmEubmF2LWxpbmsuZGlzYWJsZWQge1xuXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1uZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24tbmV4dC10YWIyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYXQtbWFpbC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi50YWJzLWFsaWduLXBhZGRpbmcge1xuIFxuICBwYWRkaW5nOiAxN3B4O1xufVxuLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAuNjtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1iZWZvcmUubWF0LWVsZXZhdGlvbi16NC5tYXQtcmlwcGxlLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi50YWJzLWFsaWduLXBhZGRpbmcge1xuIFxuICBwYWRkaW5nOiAxN3B4O1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWJlZm9yZS5tYXQtZWxldmF0aW9uLXo0Lm1hdC1yaXBwbGUubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGFiLXBhbmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiBcbn1cbi5zb2NpYWwtbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAuNjtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sellerform/sellerform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sellerform/sellerform.component.ts ***!
  \****************************************************/
/*! exports provided: SellerformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerformComponent", function() { return SellerformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _seller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seller */ "./src/app/sellerform/seller.ts");
/* harmony import */ var _sellerform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sellerform.service */ "./src/app/sellerform/sellerform.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _requireMatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./requireMatch */ "./src/app/sellerform/requireMatch.ts");
/* harmony import */ var _ukpincodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ukpincodes */ "./src/app/sellerform/ukpincodes.ts");













let SellerformComponent = class SellerformComponent {
    constructor(authService, afs, // Inject Firestore service
    afAuth, firestore, SellerformService, dialog, snackBar, route, router, stateService) {
        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.SellerformService = SellerformService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.stateService = stateService;
        this.isLoggedIn = true;
        this.Seller = new _seller__WEBPACK_IMPORTED_MODULE_4__["Seller"]();
        this.submitted = false;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("");
        this.FirstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
        ]);
        this.LastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
        ]);
        this.EmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
        ]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
        ]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
        ]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
        ]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6),
        ]);
        this.noroomsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(2),
        ]);
        this.DOBFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ]);
        this.projects = _ukpincodes__WEBPACK_IMPORTED_MODULE_12__["proj"];
    }
    ngOnInit() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem("user"));
                this.LoggedIn();
            }
            else {
                localStorage.setItem("user", null);
                JSON.parse(localStorage.getItem("user"));
                this.LoggedOut();
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _requireMatch__WEBPACK_IMPORTED_MODULE_11__["RequireMatch"]]),
        });
    }
    displayWith(obj) {
        return obj ? obj.postcode : undefined;
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    newCustomer() {
        this.submitted = false;
        this.Seller = new _seller__WEBPACK_IMPORTED_MODULE_4__["Seller"]();
    }
    onSubmit() {
        // Get Seller variable into local scope for html
        this.stateService.Seller = this.Seller;
        this.router.navigate(["confirmation"]);
    }
};
SellerformComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _sellerform_service__WEBPACK_IMPORTED_MODULE_5__["SellerformService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_9__["StateServiceService"] }
];
SellerformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sellerform",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sellerform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellerform/sellerform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sellerform.component.css */ "./src/app/sellerform/sellerform.component.css")).default]
    })
], SellerformComponent);



/***/ }),

/***/ "./src/app/sellerform/sellerform.service.ts":
/*!**************************************************!*\
  !*** ./src/app/sellerform/sellerform.service.ts ***!
  \**************************************************/
/*! exports provided: SellerformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerformService", function() { return SellerformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let SellerformService = class SellerformService {
    constructor(db) {
        this.db = db;
        this.dbPath = "/Seller";
        this.customersRef = null;
        this.customersRef = db.collection(this.dbPath);
    }
    createCustomer(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.customersRef
                .doc(key)
                .collection("properties")
                .add(Object.assign({}, customer))
                .then(function (data) {
                // console.log("Document successfully written!");
            });
            return true;
        });
    }
    updateCustomer(key, value) {
        return this.customersRef.doc(key).update(value);
    }
    deleteCustomer(key) {
        return this.customersRef.doc(key).delete();
    }
    getCustomersList() {
        return this.customersRef;
    }
    deleteAll() {
        this.customersRef.get().subscribe(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
            });
        }, error => {
            console.log("Error: ", error);
        });
    }
};
SellerformService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SellerformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SellerformService);



/***/ }),

/***/ "./src/app/sellerform/ukpincodes.ts":
/*!******************************************!*\
  !*** ./src/app/sellerform/ukpincodes.ts ***!
  \******************************************/
/*! exports provided: proj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proj", function() { return proj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const proj = [
    {
        postcode: "AB10 1XG",
        latitude: "57.14416516",
        longitude: "-2.114847768"
    },
    {
        postcode: "AB21 7LF",
        latitude: "57.20342973",
        longitude: "-2.173905553"
    },
    {
        postcode: "AB21 7LG",
        latitude: "57.2109551",
        longitude: " -2.1818873"
    },
    {
        postcode: "AB10 1XG",
        latitude: "57.14416516",
        longitude: "-2.114847768"
    },
    {
        postcode: "AB10 6RN",
        latitude: "57.13787976",
        longitude: "-2.121486688"
    },
    {
        postcode: "AB10 7JB",
        latitude: "57.12427377",
        longitude: "-2.127189644"
    },
    {
        postcode: "AB11 5QN",
        latitude: "57.14270109",
        longitude: "-2.093295"
    },
    {
        postcode: "AB11 6UL",
        latitude: "57.13754663",
        longitude: "-2.112233"
    },
    {
        postcode: "AB11 8RQ",
        latitude: "57.13597762",
        longitude: "-2.072114784"
    },
    {
        postcode: "AB12 3FJ",
        latitude: "57.0980029",
        longitude: "-2.077438"
    },
    {
        postcode: "AB12 4NA",
        latitude: "57.06427275",
        longitude: "-2.130018015"
    },
    {
        postcode: "AB12 5GL",
        latitude: "57.08193792",
        longitude: "-2.246567389"
    },
    {
        postcode: "AB12 9SP",
        latitude: "57.14870708",
        longitude: "-2.097806027"
    },
    {
        postcode: "AB14 0TQ",
        latitude: "57.10155692",
        longitude: "-2.268485752"
    },
    {
        postcode: "AB15 5HB",
        latitude: "57.147428",
        longitude: "-2.1472662"
    },
    {
        postcode: "AB15 6NA",
        latitude: "57.151797",
        longitude: "-2.185398"
    },
    {
        postcode: "AB15 8UF",
        latitude: "57.15400596",
        longitude: "-2.22440188"
    },
    {
        postcode: "AB15 9SE",
        latitude: "57.11864762",
        longitude: "-2.174250607"
    },
    {
        postcode: "AB16 5ST",
        latitude: "57.16346588",
        longitude: "-2.15933343"
    },
    {
        postcode: "AB16 6SZ",
        latitude: "57.15875117",
        longitude: "-2.165214861"
    },
    {
        postcode: "AB16 7NX",
        latitude: "57.1684384",
        longitude: "-2.161636"
    },
    {
        postcode: "AB21 0AL",
        latitude: "57.26342",
        longitude: "-2.158605"
    },
    {
        postcode: "AB21 0TF",
        latitude: "57.221883",
        longitude: "-2.273318"
    },
    {
        postcode: "AB21 7LD",
        latitude: "57.21213578",
        longitude: "-2.185602"
    },
    {
        postcode: "AB21 7LE",
        latitude: "57.21176269",
        longitude: "-2.182487264"
    },
    {
        postcode: "AB21 7LF",
        latitude: "57.20342973",
        longitude: "-2.173905553"
    },
    {
        postcode: "AB21 7LG",
        latitude: "57.2109551",
        longitude: "-2.1818873"
    },
    {
        postcode: "AB21 7LH",
        latitude: "57.21026483",
        longitude: "-2.180907185"
    },
    {
        postcode: "AB21 7LJ",
        latitude: "57.21035313",
        longitude: "-2.181967108"
    },
    {
        postcode: "AB21 7LL",
        latitude: "57.21245975",
        longitude: "-2.184957476"
    },
    {
        postcode: "AB21 7LN",
        latitude: "57.21032413",
        longitude: "-2.1833741"
    },
    {
        postcode: "AB21 7LP",
        latitude: "57.20990264",
        longitude: "-2.182891931"
    },
    {
        postcode: "AB21 7LQ",
        latitude: "57.209272",
        longitude: "-2.183832"
    },
    {
        postcode: "AB21 7LR",
        latitude: "57.20890384",
        longitude: "-2.184045758"
    },
    {
        postcode: "AB21 7LS",
        latitude: "57.20880379",
        longitude: "-2.184889505"
    },
    {
        postcode: "AB21 7LT",
        latitude: "57.20906884",
        longitude: "-2.181778686"
    },
    {
        postcode: "AB21 7LU",
        latitude: "57.20888863",
        longitude: "-2.182158539"
    },
    {
        postcode: "AB21 7LW",
        latitude: "57.20477389",
        longitude: "-2.176262271"
    },
    {
        postcode: "AB21 7LX",
        latitude: "57.21008563",
        longitude: "-2.180591773"
    },
    {
        postcode: "AB21 7LY",
        latitude: "57.21018632",
        longitude: "-2.179284462"
    },
    {
        postcode: "AB21 7LZ",
        latitude: "57.20943173",
        longitude: "-2.179297353"
    },
    {
        postcode: "AB21 7NA",
        latitude: "57.20944281",
        longitude: "-2.177824089"
    },
    {
        postcode: "AB21 7NB",
        latitude: "57.20886052",
        longitude: "-2.176695622"
    },
    {
        postcode: "AB21 7ND",
        latitude: "57.20869801",
        longitude: "-2.177274228"
    },
    {
        postcode: "AB21 7NE",
        latitude: "57.20905905",
        longitude: "-2.176050968"
    },
    {
        postcode: "AB21 7NF",
        latitude: "57.20572651",
        longitude: "-2.17595232"
    },
    {
        postcode: "AB21 7NG",
        latitude: "57.20437174",
        longitude: "-2.176128"
    },
    {
        postcode: "AB21 7NH",
        latitude: "57.2075614",
        longitude: "-2.174256073"
    },
    {
        postcode: "AB21 7NJ",
        latitude: "57.20852021",
        longitude: "-2.175949077"
    },
    {
        postcode: "AB21 7NP",
        latitude: "57.20744352",
        longitude: "-2.175050072"
    },
    {
        postcode: "AB21 7NQ",
        latitude: "57.20672308",
        longitude: "-2.176337785"
    },
    {
        postcode: "AB21 7NR",
        latitude: "57.20738739",
        longitude: "-2.176638915"
    },
    {
        postcode: "AB21 7NS",
        latitude: "57.20773663",
        longitude: "-2.177418593"
    },
    {
        postcode: "AB21 7NX",
        latitude: "57.234409",
        longitude: "-2.187884"
    },
    {
        postcode: "AB21 7NY",
        latitude: "57.227939",
        longitude: "-2.170957"
    },
    {
        postcode: "AB21 7PB",
        latitude: "57.196572",
        longitude: "-2.182743"
    },
    {
        postcode: "AB21 7PE",
        latitude: "57.24397199",
        longitude: "-2.165530199"
    },
    {
        postcode: "AB21 7PH",
        latitude: "57.25003939",
        longitude: "-2.162508131"
    },
    {
        postcode: "AB21 7PP",
        latitude: "57.260503",
        longitude: "-2.176926"
    },
    {
        postcode: "AB21 7PQ",
        latitude: "57.25335422",
        longitude: "-2.182030123"
    },
    {
        postcode: "AB21 7PR",
        latitude: "57.256957",
        longitude: "-2.181219894"
    },
    {
        postcode: "AB21 7PS",
        latitude: "57.25068153",
        longitude: "-2.191281023"
    },
    {
        postcode: "AB21 7PU",
        latitude: "57.248606",
        longitude: "-2.175018"
    },
    {
        postcode: "AB21 7PW",
        latitude: "57.2558193",
        longitude: "-2.172876"
    },
    {
        postcode: "AB21 7PY",
        latitude: "57.25559803",
        longitude: "-2.195251339"
    },
    {
        postcode: "AB21 7PZ",
        latitude: "57.26069219",
        longitude: "-2.200400651"
    },
    {
        postcode: "AB21 7QQ",
        latitude: "57.19981186",
        longitude: "-2.190885191"
    },
    {
        postcode: "AB21 7UU",
        latitude: "57.23941856",
        longitude: "-2.190245134"
    },
    {
        postcode: "AB21 7XA",
        latitude: "57.225777",
        longitude: "-2.161656"
    },
    {
        postcode: "AB21 7XB",
        latitude: "57.23719184",
        longitude: "-2.164406"
    },
    {
        postcode: "AB21 7YS",
        latitude: "57.19981186",
        longitude: "-2.190885191"
    },
    {
        postcode: "AB21 9AB",
        latitude: "57.189905",
        longitude: "-2.170814"
    },
    {
        postcode: "AB21 9AD",
        latitude: "57.177536",
        longitude: "-2.170923179"
    },
    {
        postcode: "AB21 9AE",
        latitude: "57.17852307",
        longitude: "-2.171654686"
    },
    {
        postcode: "AB21 9AG",
        latitude: "57.17780848",
        longitude: "-2.168327"
    },
    {
        postcode: "AB21 9AH",
        latitude: "57.17933943",
        longitude: "-2.172452428"
    },
    {
        postcode: "AB21 9AJ",
        latitude: "57.1788539",
        longitude: "-2.172780973"
    },
    {
        postcode: "AB21 9AL",
        latitude: "57.17953523",
        longitude: "-2.173776602"
    },
    {
        postcode: "AB21 9AN",
        latitude: "57.17830289",
        longitude: "-2.174978245"
    },
    {
        postcode: "AB21 9AP",
        latitude: "57.177288",
        longitude: "-2.17461"
    },
    {
        postcode: "AB21 9AR",
        latitude: "57.17849405",
        longitude: "-2.173159718"
    },
    {
        postcode: "AB21 9AS",
        latitude: "57.17642552",
        longitude: "-2.174919743"
    },
    {
        postcode: "AB21 9AT",
        latitude: "57.17786761",
        longitude: "-2.177887227"
    },
    {
        postcode: "AB21 9AU",
        latitude: "57.17827773",
        longitude: "-2.180055966"
    },
    {
        postcode: "AB21 9AX",
        latitude: "57.179997",
        longitude: "-2.183654"
    },
    {
        postcode: "AB21 9AY",
        latitude: "57.17901827",
        longitude: "-2.183533084"
    },
    {
        postcode: "AB21 9BB",
        latitude: "57.17977019",
        longitude: "-2.185339771"
    },
    {
        postcode: "AB21 9BD",
        latitude: "57.17927605",
        longitude: "-2.185386916"
    },
    {
        postcode: "AB21 9BE",
        latitude: "57.17842416",
        longitude: "-2.184373689"
    },
    {
        postcode: "AB21 9BG",
        latitude: "57.17547777",
        longitude: "-2.157681"
    },
    {
        postcode: "AB21 9BH",
        latitude: "57.1766626",
        longitude: "-2.178659"
    },
    {
        postcode: "AB21 9BJ",
        latitude: "57.17630577",
        longitude: "-2.177036209"
    },
    {
        postcode: "AB21 9BL",
        latitude: "57.1753406",
        longitude: "-2.179843198"
    },
    {
        postcode: "AB21 9BN",
        latitude: "57.17591763",
        longitude: "-2.178357482"
    },
    {
        postcode: "AB21 9BP",
        latitude: "57.17632981",
        longitude: "-2.1790872"
    },
    {
        postcode: "AB21 9BQ",
        latitude: "57.17600307",
        longitude: "-2.181417643"
    },
    {
        postcode: "AB21 9BR",
        latitude: "57.17540996",
        longitude: "-2.181580122"
    },
    {
        postcode: "AB21 9BS",
        latitude: "57.17485431",
        longitude: "-2.180684306"
    },
    {
        postcode: "AB21 9BT",
        latitude: "57.17460099",
        longitude: "-2.18192346"
    },
    {
        postcode: "AB21 9BU",
        latitude: "57.17372803",
        longitude: "-2.183027222"
    },
    {
        postcode: "AB21 9BX",
        latitude: "57.1749244",
        longitude: "-2.181908512"
    },
    {
        postcode: "AB21 9BY",
        latitude: "57.17493932",
        longitude: "-2.183992463"
    },
    {
        postcode: "AB21 9DA",
        latitude: "57.17384698",
        longitude: "-2.181539371"
    },
    {
        postcode: "AB21 9DB",
        latitude: "57.17357675",
        longitude: "-2.182050726"
    },
    {
        postcode: "AB21 9DD",
        latitude: "57.17464349",
        longitude: "-2.183577526"
    },
    {
        postcode: "AB21 9DE",
        latitude: "57.17418288",
        longitude: "-2.185262154"
    },
    {
        postcode: "AB21 9DF",
        latitude: "57.17446825",
        longitude: "-2.186669356"
    },
    {
        postcode: "AB21 9DG",
        latitude: "57.17655574",
        longitude: "-2.182264"
    },
    {
        postcode: "AB21 9DH",
        latitude: "57.17467266",
        longitude: "-2.188142322"
    },
    {
        postcode: "AB21 9DJ",
        latitude: "57.17519768",
        longitude: "-2.185449164"
    },
    {
        postcode: "AB21 9DL",
        latitude: "57.17540663",
        longitude: "-2.183862476"
    },
    {
        postcode: "AB21 9DN",
        latitude: "57.17579391",
        longitude: "-2.18316976"
    },
    {
        postcode: "AB21 9DP",
        latitude: "57.17636344",
        longitude: "-2.18069168"
    },
    {
        postcode: "AB21 9DQ",
        latitude: "57.17709329",
        longitude: "-2.179140517"
    },
    {
        postcode: "AB21 9DR",
        latitude: "57.17705065",
        longitude: "-2.177535965"
    },
    {
        postcode: "AB21 9DT",
        latitude: "57.1775465",
        longitude: "-2.169764607"
    },
    {
        postcode: "AB21 9DU",
        latitude: "57.178677",
        longitude: "-2.170710484"
    },
    {
        postcode: "AB21 9DX",
        latitude: "57.18105185",
        longitude: "-2.174858924"
    },
    {
        postcode: "AB21 9DY",
        latitude: "57.18217946",
        longitude: "-2.177874891"
    },
    {
        postcode: "AB21 9EA",
        latitude: "57.18220781",
        longitude: "-2.17688251"
    },
    {
        postcode: "AB21 9EB",
        latitude: "57.18309423",
        longitude: "-2.179087"
    },
    {
        postcode: "AB21 9ED",
        latitude: "57.18358713",
        longitude: "-2.179734432"
    },
    {
        postcode: "AB21 9EE",
        latitude: "57.18391907",
        longitude: "-2.180033815"
    },
    {
        postcode: "AB21 9EF",
        latitude: "57.18246934",
        longitude: "-2.17615591"
    },
    {
        postcode: "AB21 9EG",
        latitude: "57.18154195",
        longitude: "-2.176531"
    },
    {
        postcode: "AB21 9EH",
        latitude: "57.18357966",
        longitude: "-2.178675671"
    },
    {
        postcode: "AB21 9EJ",
        latitude: "57.18310477",
        longitude: "-2.177829716"
    },
    {
        postcode: "AB21 9EL",
        latitude: "57.18344098",
        longitude: "-2.181421057"
    },
    {
        postcode: "AB21 9EN",
        latitude: "57.184346",
        longitude: "-2.182848"
    },
    {
        postcode: "AB21 9EP",
        latitude: "57.18457661",
        longitude: "-2.184983378"
    },
    {
        postcode: "AB21 9EQ",
        latitude: "57.18407483",
        longitude: "-2.184120642"
    },
    {
        postcode: "AB21 9ER",
        latitude: "57.18243035",
        longitude: "-2.184526004"
    },
    {
        postcode: "AB21 9ET",
        latitude: "57.181302",
        longitude: "-2.181626"
    },
    {
        postcode: "AB21 9EU",
        latitude: "57.18173326",
        longitude: "-2.182074346"
    },
    {
        postcode: "AB21 9EW",
        latitude: "57.18359058",
        longitude: "-2.183555783"
    },
    {
        postcode: "AB21 9EX",
        latitude: "57.18073324",
        longitude: "-2.184070918"
    },
    {
        postcode: "AB21 9EY",
        latitude: "57.18098381",
        longitude: "-2.184717281"
    },
    {
        postcode: "AB21 9HA",
        latitude: "57.18133895",
        longitude: "-2.187415"
    },
    {
        postcode: "AB21 9HB",
        latitude: "57.17998167",
        longitude: "-2.182016098"
    },
    {
        postcode: "AB21 9HE",
        latitude: "57.17976508",
        longitude: "-2.169923662"
    },
    {
        postcode: "AB21 9HH",
        latitude: "57.17948533",
        longitude: "-2.170369"
    },
    {
        postcode: "AB21 9HJ",
        latitude: "57.18665703",
        longitude: "-2.181321034"
    },
    {
        postcode: "AB21 9HN",
        latitude: "57.18803294",
        longitude: "-2.180268932"
    },
    {
        postcode: "AB21 9HQ",
        latitude: "57.183863",
        longitude: "-2.181175"
    },
    {
        postcode: "AB21 9HR",
        latitude: "57.184196",
        longitude: "-2.180763"
    },
    {
        postcode: "AB21 9HS",
        latitude: "57.18670953",
        longitude: "-2.182280841"
    },
    {
        postcode: "AB21 9HT",
        latitude: "57.18565976",
        longitude: "-2.181431946"
    },
    {
        postcode: "AB21 9HU",
        latitude: "57.18860644",
        longitude: "-2.181247873"
    },
    {
        postcode: "AB21 9HW",
        latitude: "57.18822243",
        longitude: "-2.179674249"
    },
    {
        postcode: "AB21 9HX",
        latitude: "57.18805643",
        longitude: "-2.17653"
    },
    {
        postcode: "AB21 9HY",
        latitude: "57.18963254",
        longitude: "-2.179830011"
    },
    {
        postcode: "AB21 9HZ",
        latitude: "57.18701758",
        longitude: "-2.180462509"
    },
    {
        postcode: "AB21 9JB",
        latitude: "57.18996383",
        longitude: "-2.180576167"
    },
    {
        postcode: "AB21 9JD",
        latitude: "57.190324",
        longitude: "-2.179567995"
    },
    {
        postcode: "AB21 9JE",
        latitude: "57.19068017",
        longitude: "-2.182168058"
    },
    {
        postcode: "AB21 9JH",
        latitude: "57.19089426",
        longitude: "-2.183194956"
    },
    {
        postcode: "AB21 9JJ",
        latitude: "57.191223",
        longitude: "-2.186158"
    },
    {
        postcode: "AB21 9JL",
        latitude: "57.19092559",
        longitude: "-2.186322277"
    },
    {
        postcode: "AB21 9JP",
        latitude: "57.190004",
        longitude: "-2.183986333"
    },
    {
        postcode: "AB21 9JQ",
        latitude: "57.18997006",
        longitude: "-2.182478921"
    },
    {
        postcode: "AB21 9JR",
        latitude: "57.18968951",
        longitude: "-2.184744"
    },
    {
        postcode: "AB21 9JS",
        latitude: "57.19185892",
        longitude: "-2.180800528"
    },
    {
        postcode: "AB21 9JT",
        latitude: "57.19096554",
        longitude: "-2.177007"
    },
    {
        postcode: "AB21 9JU",
        latitude: "57.19209418",
        longitude: "-2.179610341"
    },
    {
        postcode: "AB21 9JX",
        latitude: "57.1938524",
        longitude: "-2.181306697"
    },
    {
        postcode: "AB21 9JY",
        latitude: "57.19136462",
        longitude: "-2.180963571"
    },
    {
        postcode: "AB21 9LA",
        latitude: "57.190951",
        longitude: "-2.175038"
    },
    {
        postcode: "AB21 9LB",
        latitude: "57.17748483",
        longitude: "-2.168871172"
    },
    {
        postcode: "AB21 9LD",
        latitude: "57.17704491",
        longitude: "-2.168687227"
    },
    {
        postcode: "AB21 9LE",
        latitude: "57.17755312",
        longitude: "-2.171501324"
    },
    {
        postcode: "AB21 9LF",
        latitude: "57.17318065",
        longitude: "-2.156034632"
    },
    {
        postcode: "AB21 9LG",
        latitude: "57.17497928",
        longitude: "-2.168347029"
    },
    {
        postcode: "AB21 9LJ",
        latitude: "57.17679912",
        longitude: "-2.171084338"
    },
    {
        postcode: "AB21 9LL",
        latitude: "57.17723881",
        longitude: "-2.171433707"
    },
    {
        postcode: "AB21 9LN",
        latitude: "57.17790107",
        longitude: "-2.173239641"
    },
    {
        postcode: "AB21 9LP",
        latitude: "57.17647219",
        longitude: "-2.167047215"
    },
    {
        postcode: "AB21 9LQ",
        latitude: "57.1770927",
        longitude: "-2.166289"
    },
    {
        postcode: "AB21 9LR",
        latitude: "57.17683432",
        longitude: "-2.164931789"
    },
    {
        postcode: "AB21 9LS",
        latitude: "57.1764492",
        longitude: "-2.164053484"
    },
    {
        postcode: "AB21 9LT",
        latitude: "57.17529817",
        longitude: "-2.164974553"
    },
    {
        postcode: "AB21 9LU",
        latitude: "57.176151",
        longitude: "-2.164863"
    },
    {
        postcode: "AB21 9LW",
        latitude: "57.17498494",
        longitude: "-2.164080065"
    },
    {
        postcode: "AB21 9LX",
        latitude: "57.175291",
        longitude: "-2.163056"
    },
    {
        postcode: "AB21 9LZ",
        latitude: "57.17920705",
        longitude: "-2.177198966"
    },
    {
        postcode: "AB21 9NA",
        latitude: "57.1755707",
        longitude: "-2.162643772"
    },
    {
        postcode: "AB21 9NB",
        latitude: "57.173947",
        longitude: "-2.160685"
    },
    {
        postcode: "AB21 9ND",
        latitude: "57.17367479",
        longitude: "-2.155970565"
    },
    {
        postcode: "AB21 9NL",
        latitude: "57.17362402",
        longitude: "-2.153308"
    },
    {
        postcode: "AB21 9NN",
        latitude: "57.17343843",
        longitude: "-2.150925469"
    },
    {
        postcode: "AB21 9NP",
        latitude: "57.176529",
        longitude: "-2.157653"
    },
    {
        postcode: "AB21 9NS",
        latitude: "57.17568158",
        longitude: "-2.153068162"
    },
    {
        postcode: "AB21 9NT",
        latitude: "57.178448",
        longitude: "-2.160026"
    },
    {
        postcode: "AB21 9NU",
        latitude: "57.17916414",
        longitude: "-2.169242736"
    },
    {
        postcode: "AB21 9NX",
        latitude: "57.178122",
        longitude: "-2.162324"
    },
    {
        postcode: "AB21 9NY",
        latitude: "57.1761219",
        longitude: "-2.15995"
    },
    {
        postcode: "AB21 9PA",
        latitude: "57.17932894",
        longitude: "-2.166927798"
    },
    {
        postcode: "AB21 9PB",
        latitude: "57.17848224",
        longitude: "-2.168644164"
    },
    {
        postcode: "AB21 9PD",
        latitude: "57.17505314",
        longitude: "-2.173474379"
    },
    {
        postcode: "AB21 0TG",
        latitude: "57.19169523",
        longitude: "-2.287688298"
    },
    {
        postcode: "AB21 0TH",
        latitude: "57.19400333",
        longitude: "-2.27997868"
    },
    {
        postcode: "AB21 0TJ",
        latitude: "57.2019023",
        longitude: "-2.278664796"
    },
    {
        postcode: "AB21 0TL",
        latitude: "57.197769",
        longitude: "-2.278898"
    },
    {
        postcode: "AB21 0TN",
        latitude: "57.18741832",
        longitude: "-2.276140172"
    },
    {
        postcode: "AB21 0TP",
        latitude: "57.18699492",
        longitude: "-2.288644382"
    },
    {
        postcode: "AB21 0TQ",
        latitude: "57.182373",
        longitude: "-2.294581507"
    },
    {
        postcode: "AB21 0TR",
        latitude: "57.178136",
        longitude: "-2.300716"
    },
    {
        postcode: "AB21 0TS",
        latitude: "57.1846082",
        longitude: "-2.303068"
    },
    {
        postcode: "AB21 0TT",
        latitude: "57.19090046",
        longitude: "-2.257899"
    },
    {
        postcode: "AB21 0TU",
        latitude: "57.196678",
        longitude: "-2.242318"
    },
    {
        postcode: "AB21 0TW",
        latitude: "57.20754433",
        longitude: "-2.286321875"
    },
    {
        postcode: "AB21 0TX",
        latitude: "57.19791491",
        longitude: "-2.2657596"
    },
    {
        postcode: "AB21 0TY",
        latitude: "57.19961469",
        longitude: "-2.264811934"
    },
    {
        postcode: "AB21 0TZ",
        latitude: "57.18946005",
        longitude: "-2.274964162"
    },
    {
        postcode: "AB21 0UA",
        latitude: "57.26378399",
        longitude: "-2.187685168"
    },
    {
        postcode: "AB21 0UB",
        latitude: "57.21548974",
        longitude: "-2.195006101"
    },
    {
        postcode: "AB21 0UD",
        latitude: "57.27307547",
        longitude: "-2.185527002"
    },
    {
        postcode: "AB21 0UE",
        latitude: "57.2632708",
        longitude: "-2.155969"
    },
    {
        postcode: "AB21 0UF",
        latitude: "57.2670021",
        longitude: "-2.173641764"
    },
    {
        postcode: "AB21 0UG",
        latitude: "57.24394718",
        longitude: "-2.184154"
    },
    {
        postcode: "AB21 0UL",
        latitude: "57.271847",
        longitude: "-2.170829"
    },
    {
        postcode: "AB21 0UN",
        latitude: "57.28477643",
        longitude: "-2.155130503"
    },
    {
        postcode: "AB21 0UP",
        latitude: "57.28412848",
        longitude: "-2.169923947"
    },
    {
        postcode: "AB21 0UQ",
        latitude: "57.2662304",
        longitude: "-2.179440986"
    },
    {
        postcode: "AB21 0UR",
        latitude: "57.261788",
        longitude: "-2.182536"
    },
    {
        postcode: "AB21 0US",
        latitude: "57.25040342",
        longitude: "-2.17885021"
    },
    {
        postcode: "AB21 0UT",
        latitude: "57.23788008",
        longitude: "-2.179684101"
    },
    {
        postcode: "AB21 0UU",
        latitude: "57.26319941",
        longitude: "-2.188146382"
    },
    {
        postcode: "AB21 0UW",
        latitude: "57.2630805",
        longitude: "-2.183520461"
    },
    {
        postcode: "AB21 0UX",
        latitude: "57.31018894",
        longitude: "-2.258685064"
    },
    {
        postcode: "AB21 0UY",
        latitude: "57.26416285",
        longitude: "-2.186626062"
    },
    {
        postcode: "AB21 0UZ",
        latitude: "57.2632368",
        longitude: "-2.187168456"
    },
    {
        postcode: "AB21 0WA",
        latitude: "57.20619042",
        longitude: "-2.289141902"
    },
    {
        postcode: "AB21 0WB",
        latitude: "57.2649617",
        longitude: "-2.187044583"
    },
    {
        postcode: "AB21 0WF",
        latitude: "57.264052",
        longitude: "-2.182315"
    },
    {
        postcode: "AB21 0WG",
        latitude: "57.26563892",
        longitude: "-2.184677176"
    },
    {
        postcode: "AB21 0WH",
        latitude: "57.20285428",
        longitude: "-2.286732425"
    },
    {
        postcode: "AB21 0WJ",
        latitude: "57.26704519",
        longitude: "-2.193322387"
    },
    {
        postcode: "AB21 0WL",
        latitude: "57.26606643",
        longitude: "-2.193085139"
    },
    {
        postcode: "AB21 0WN",
        latitude: "57.26636987",
        longitude: "-2.194048"
    },
    {
        postcode: "AB21 0WP",
        latitude: "57.26665102",
        longitude: "-2.192623968"
    },
    {
        postcode: "AB21 0WQ",
        latitude: "57.26777407",
        longitude: "-2.192497195"
    },
    {
        postcode: "AB21 0WW",
        latitude: "57.26694751",
        longitude: "-2.186640165"
    },
    {
        postcode: "AB21 0WZ",
        latitude: "57.27040715",
        longitude: "-2.191781366"
    },
    {
        postcode: "AB21 0XA",
        latitude: "57.20344411",
        longitude: "-2.284121864"
    },
    {
        postcode: "AB21 0XB",
        latitude: "57.20408923",
        longitude: "-2.284855102"
    },
    {
        postcode: "AB21 0XD",
        latitude: "57.20339966",
        longitude: "-2.287862156"
    },
    {
        postcode: "AB21 0XF",
        latitude: "57.26262988",
        longitude: "-2.184529474"
    },
    {
        postcode: "AB21 0XG",
        latitude: "57.26350079",
        longitude: "-2.184815667"
    },
    {
        postcode: "AB21 0XN",
        latitude: "57.20236625",
        longitude: "-2.2836"
    },
    {
        postcode: "AB21 0XP",
        latitude: "57.20167577",
        longitude: "-2.283545546"
    },
    {
        postcode: "AB21 0XQ",
        latitude: "57.20749692",
        longitude: "-2.287414027"
    },
    {
        postcode: "AB21 0XR",
        latitude: "57.20803691",
        longitude: "-2.286971281"
    },
    {
        postcode: "AB21 0XS",
        latitude: "57.20759747",
        longitude: "-2.286653354"
    },
    {
        postcode: "AB21 0XT",
        latitude: "57.20713613",
        longitude: "-2.288056794"
    },
    {
        postcode: "AB21 0XU",
        latitude: "57.20690977",
        longitude: "-2.288833023"
    },
    {
        postcode: "AB21 0XW",
        latitude: "57.20592318",
        longitude: "-2.288163207"
    },
    {
        postcode: "AB21 0XX",
        latitude: "57.20522416",
        longitude: "-2.287446008"
    },
    {
        postcode: "AB21 0XY",
        latitude: "57.23748289",
        longitude: "-2.262399767"
    },
    {
        postcode: "AB21 0XZ",
        latitude: "57.26329729",
        longitude: "-2.182692626"
    },
    {
        postcode: "AB21 0YA",
        latitude: "57.23766981",
        longitude: "-2.267470542"
    },
    {
        postcode: "AB21 0YB",
        latitude: "57.23689375",
        longitude: "-2.264897115"
    },
    {
        postcode: "AB21 0YD",
        latitude: "57.240101",
        longitude: "-2.277313"
    },
    {
        postcode: "AB21 0YE",
        latitude: "57.23582968",
        longitude: "-2.2668277"
    },
    {
        postcode: "AB21 0YF",
        latitude: "57.23726236",
        longitude: "-2.264750661"
    },
    {
        postcode: "AB21 0YG",
        latitude: "57.23768231",
        longitude: "-2.26581395"
    },
    {
        postcode: "AB21 0YL",
        latitude: "57.238205",
        longitude: "-2.285599"
    },
    {
        postcode: "AB21 0YN",
        latitude: "57.20232456",
        longitude: "-2.286612458"
    },
    {
        postcode: "AB21 0YP",
        latitude: "57.20239098",
        longitude: "-2.285057176"
    },
    {
        postcode: "AB21 0YQ",
        latitude: "57.248493",
        longitude: "-2.263539"
    },
    {
        postcode: "AB21 0YR",
        latitude: "57.2543685",
        longitude: "-2.267028"
    },
    {
        postcode: "AB21 0YS",
        latitude: "57.258119",
        longitude: "-2.282123"
    },
    {
        postcode: "AB21 0YT",
        latitude: "57.26366187",
        longitude: "-2.273710214"
    },
    {
        postcode: "AB21 0YX",
        latitude: "57.2746572",
        longitude: "-2.277672388"
    },
    {
        postcode: "AB21 0ZR",
        latitude: "57.20511732",
        longitude: "-2.294777824"
    },
    {
        postcode: "AB21 0ZS",
        latitude: "57.204815",
        longitude: "-2.2931521"
    },
    {
        postcode: "AB21 0ZT",
        latitude: "57.20425179",
        longitude: "-2.292073"
    },
    {
        postcode: "AB21 7AA",
        latitude: "57.20958",
        longitude: "-2.188584334"
    },
    {
        postcode: "AB21 7AB",
        latitude: "57.21153045",
        longitude: "-2.187684408"
    },
    {
        postcode: "AB21 7AD",
        latitude: "57.20968008",
        longitude: "-2.187608788"
    },
    {
        postcode: "AB21 7AE",
        latitude: "57.211316",
        longitude: "-2.186806"
    },
    {
        postcode: "AB21 7AF",
        latitude: "57.212604",
        longitude: "-2.190223"
    },
    {
        postcode: "AB21 7AG",
        latitude: "57.21200391",
        longitude: "-2.189441674"
    },
    {
        postcode: "AB21 7AH",
        latitude: "57.215315",
        longitude: "-2.185419"
    },
    {
        postcode: "AB21 7AJ",
        latitude: "57.21971108",
        longitude: "-2.183520076"
    },
    {
        postcode: "AB21 7AL",
        latitude: "57.22016593",
        longitude: "-2.173189563"
    },
    {
        postcode: "AB21 7AN",
        latitude: "57.20842543",
        longitude: "-2.166413709"
    },
    {
        postcode: "AB21 7AP",
        latitude: "57.20679632",
        longitude: "-2.15488552"
    },
    {
        postcode: "AB21 7AQ",
        latitude: "57.21578241",
        longitude: "-2.144724135"
    },
    {
        postcode: "AB21 7AR",
        latitude: "57.20735097",
        longitude: "-2.133451472"
    },
    {
        postcode: "AB21 7AS",
        latitude: "57.23214286",
        longitude: "-2.142485884"
    },
    {
        postcode: "AB21 7AT",
        latitude: "57.22258065",
        longitude: "-2.153809121"
    },
    {
        postcode: "AB21 7AU",
        latitude: "57.20503389",
        longitude: "-2.188942467"
    },
    {
        postcode: "AB21 7AX",
        latitude: "57.205005",
        longitude: "-2.189803"
    },
    {
        postcode: "AB21 7AY",
        latitude: "57.20513924",
        longitude: "-2.190747"
    },
    {
        postcode: "AB21 7AZ",
        latitude: "57.19985591",
        longitude: "-2.185473619"
    },
    {
        postcode: "AB21 7BA",
        latitude: "57.205965",
        longitude: "-2.190666661"
    },
    {
        postcode: "AB21 7BB",
        latitude: "57.20624257",
        longitude: "-2.185621556"
    },
    {
        postcode: "AB21 7BD",
        latitude: "57.20585564",
        longitude: "-2.185752"
    },
    {
        postcode: "AB21 7BE",
        latitude: "57.20683064",
        longitude: "-2.188835787"
    },
    {
        postcode: "AB21 7BG",
        latitude: "57.20674757",
        longitude: "-2.190308574"
    },
    {
        postcode: "AB21 7BH",
        latitude: "57.20655364",
        longitude: "-2.187857754"
    },
    {
        postcode: "AB21 7BJ",
        latitude: "57.20678431",
        longitude: "-2.189779068"
    },
    {
        postcode: "AB21 7BL",
        latitude: "57.20743493",
        longitude: "-2.18721666"
    },
    {
        postcode: "AB21 7BN",
        latitude: "57.20678078",
        longitude: "-2.186137402"
    },
    {
        postcode: "AB21 7BP",
        latitude: "57.20749998",
        longitude: "-2.185760302"
    },
    {
        postcode: "AB21 7BQ",
        latitude: "57.20785747",
        longitude: "-2.186987053"
    },
    {
        postcode: "AB21 7BR",
        latitude: "57.20866588",
        longitude: "-2.187024254"
    },
    {
        postcode: "AB21 7BS",
        latitude: "57.20818533",
        longitude: "-2.183959409"
    },
    {
        postcode: "AB21 7BT",
        latitude: "57.20791575",
        longitude: "-2.18402428"
    },
    {
        postcode: "AB21 7BU",
        latitude: "57.20765525",
        longitude: "-2.184022983"
    },
    {
        postcode: "AB21 7BW",
        latitude: "57.2117153",
        longitude: "-2.190433"
    },
    {
        postcode: "AB21 7BX",
        latitude: "57.20728872",
        longitude: "-2.182812775"
    },
    {
        postcode: "AB21 7BY",
        latitude: "57.20685533",
        longitude: "-2.184316951"
    },
    {
        postcode: "AB21 7DA",
        latitude: "57.20962857",
        longitude: "-2.186002767"
    },
    {
        postcode: "AB21 7DB",
        latitude: "57.21061874",
        longitude: "-2.184617162"
    },
    {
        postcode: "AB21 7DD",
        latitude: "57.21160615",
        longitude: "-2.185102197"
    },
    {
        postcode: "AB21 7DE",
        latitude: "57.21130918",
        longitude: "-2.185464918"
    },
    {
        postcode: "AB21 7DG",
        latitude: "57.2093943",
        longitude: "-2.180340081"
    },
    {
        postcode: "AB21 7DH",
        latitude: "57.21076878",
        longitude: "-2.186422378"
    },
    {
        postcode: "AB21 7DJ",
        latitude: "57.21009485",
        longitude: "-2.186567966"
    },
    {
        postcode: "AB21 7DL",
        latitude: "57.20859099",
        longitude: "-2.189043433"
    },
    {
        postcode: "AB21 7DN",
        latitude: "57.20816096",
        longitude: "-2.188279768"
    },
    {
        postcode: "AB21 7DQ",
        latitude: "57.2063245",
        longitude: "-2.19088574"
    },
    {
        postcode: "AB21 7DR",
        latitude: "57.20441734",
        longitude: "-2.192696593"
    },
    {
        postcode: "AB21 7DS",
        latitude: "57.20402005",
        longitude: "-2.194018657"
    },
    {
        postcode: "AB21 7DT",
        latitude: "57.20272024",
        longitude: "-2.192257411"
    },
    {
        postcode: "AB21 7DU",
        latitude: "57.2004928",
        longitude: "-2.203433712"
    },
    {
        postcode: "AB21 7DW",
        latitude: "57.20090007",
        longitude: "-2.190046748"
    },
    {
        postcode: "AB21 7DX",
        latitude: "57.20268031",
        longitude: "-2.188980083"
    },
    {
        postcode: "AB21 7DY",
        latitude: "57.20241186",
        longitude: "-2.188283569"
    },
    {
        postcode: "AB21 7DZ",
        latitude: "57.19605657",
        longitude: "-2.178984224"
    },
    {
        postcode: "AB21 7EA",
        latitude: "57.197985",
        longitude: "-2.176434"
    },
    {
        postcode: "AB21 7EB",
        latitude: "57.20237727",
        longitude: "-2.18738964"
    },
    {
        postcode: "AB21 7ED",
        latitude: "57.20277797",
        longitude: "-2.189741936"
    },
    {
        postcode: "AB21 7EE",
        latitude: "57.203588",
        longitude: "-2.18850533"
    },
    {
        postcode: "AB21 7EG",
        latitude: "57.20513332",
        longitude: "-2.194421757"
    },
    {
        postcode: "AB21 7EH",
        latitude: "57.20392158",
        longitude: "-2.187894023"
    },
    {
        postcode: "AB21 7EJ",
        latitude: "57.2039536",
        longitude: "-2.1904928"
    },
    {
        postcode: "AB21 7EL",
        latitude: "57.20441554",
        longitude: "-2.187962743"
    },
    {
        postcode: "AB21 7EN",
        latitude: "57.20371641",
        longitude: "-2.186932989"
    },
    {
        postcode: "AB21 7EP",
        latitude: "57.20535929",
        longitude: "-2.187603395"
    },
    {
        postcode: "AB21 7EQ",
        latitude: "57.2123163",
        longitude: "-2.190767711"
    },
    {
        postcode: "AB21 7ER",
        latitude: "57.21106901",
        longitude: "-2.18988386"
    },
    {
        postcode: "AB21 7ES",
        latitude: "57.20983926",
        longitude: "-2.189281582"
    },
    {
        postcode: "AB21 7ET",
        latitude: "57.21036912",
        longitude: "-2.189367071"
    },
    {
        postcode: "AB21 7EW",
        latitude: "57.20520868",
        longitude: "-2.186195689"
    },
    {
        postcode: "AB21 7EX",
        latitude: "57.21236412",
        longitude: "-2.188847526"
    },
    {
        postcode: "AB21 7EY",
        latitude: "57.213773",
        longitude: "-2.189798"
    },
    {
        postcode: "AB21 7EZ",
        latitude: "57.19799527",
        longitude: "-2.186391"
    },
    {
        postcode: "AB21 7FA",
        latitude: "57.20434791",
        longitude: "-2.18511548"
    },
    {
        postcode: "AB21 7FB",
        latitude: "57.20505639",
        longitude: "-2.185913535"
    },
    {
        postcode: "AB21 7FD",
        latitude: "57.20515871",
        longitude: "-2.18353053"
    },
    {
        postcode: "AB21 7FE",
        latitude: "57.20375475",
        longitude: "-2.185311127"
    },
    {
        postcode: "AB21 7FF",
        latitude: "57.20313598",
        longitude: "-2.184596316"
    },
    {
        postcode: "AB21 7FG",
        latitude: "57.20264251",
        longitude: "-2.184196624"
    },
    {
        postcode: "AB21 7FH",
        latitude: "57.20367815",
        longitude: "-2.18241422"
    },
    {
        postcode: "AB21 7FJ",
        latitude: "57.20346477",
        longitude: "-2.180890432"
    },
    {
        postcode: "AB21 7FL",
        latitude: "57.20030329",
        longitude: "-2.186667468"
    },
    {
        postcode: "AB21 7FN",
        latitude: "57.20114817",
        longitude: "-2.186340729"
    },
    {
        postcode: "AB21 7FP",
        latitude: "57.20101304",
        longitude: "-2.180464668"
    },
    {
        postcode: "AB21 7FQ",
        latitude: "57.20142091",
        longitude: "-2.184140882"
    },
    {
        postcode: "AB21 7FR",
        latitude: "57.20190888",
        longitude: "-2.182157222"
    },
    {
        postcode: "AB21 7FS",
        latitude: "57.20211066",
        longitude: "-2.179278369"
    },
    {
        postcode: "AB21 7FT",
        latitude: "57.2029472",
        longitude: "-2.17848797"
    },
    {
        postcode: "AB21 7FU",
        latitude: "57.20300358",
        longitude: "-2.17673381"
    },
    {
        postcode: "AB21 7FW",
        latitude: "57.20217848",
        longitude: "-2.175786462"
    },
    {
        postcode: "AB21 7FX",
        latitude: "57.20231106",
        longitude: "-2.183566036"
    },
    {
        postcode: "AB21 7FY",
        latitude: "57.20128945",
        longitude: "-2.18188936"
    },
    {
        postcode: "AB21 7FZ",
        latitude: "57.20260135",
        longitude: "-2.175308494"
    },
    {
        postcode: "AB21 7GA",
        latitude: "57.1969444",
        longitude: "-2.186170592"
    },
    {
        postcode: "AB21 7GB",
        latitude: "57.195444",
        longitude: "-2.18608"
    },
    {
        postcode: "AB21 7GD",
        latitude: "57.19756962",
        longitude: "-2.188573321"
    },
    {
        postcode: "AB21 7GF",
        latitude: "57.192815",
        longitude: "-2.184247"
    },
    {
        postcode: "AB21 7GH",
        latitude: "57.213452",
        longitude: "-2.187892117"
    },
    {
        postcode: "AB21 7GJ",
        latitude: "57.21249968",
        longitude: "-2.188301888"
    },
    {
        postcode: "AB21 7GL",
        latitude: "57.20591075",
        longitude: "-2.191231205"
    },
    {
        postcode: "AB21 7GN",
        latitude: "57.19618688",
        longitude: "-2.18206282"
    },
    {
        postcode: "AB21 7GQ",
        latitude: "57.19872351",
        longitude: "-2.191806332"
    },
    {
        postcode: "AB21 7HF",
        latitude: "57.21105203",
        longitude: "-2.183179056"
    },
    {
        postcode: "AB21 7HG",
        latitude: "57.198686",
        longitude: "-2.180387"
    },
    {
        postcode: "AB21 7JJ",
        latitude: "57.20868757",
        longitude: "-2.178300513"
    },
    {
        postcode: "AB21 7JL",
        latitude: "57.20898166",
        longitude: "-2.179940771"
    },
    {
        postcode: "AB21 7JN",
        latitude: "57.20742841",
        longitude: "-2.179386947"
    },
    {
        postcode: "AB21 7JP",
        latitude: "57.20765915",
        longitude: "-2.181341362"
    },
    {
        postcode: "AB21 7JQ",
        latitude: "57.20742524",
        longitude: "-2.181588512"
    },
    {
        postcode: "AB21 7JR",
        latitude: "57.2071466",
        longitude: "-2.181703013"
    },
    {
        postcode: "AB21 7JS",
        latitude: "57.2069129",
        longitude: "-2.181801182"
    },
    {
        postcode: "AB21 7JT",
        latitude: "57.20664327",
        longitude: "-2.181899172"
    },
    {
        postcode: "AB21 7JU",
        latitude: "57.2077684",
        longitude: "-2.180332142"
    },
    {
        postcode: "AB21 7JW",
        latitude: "57.20824369",
        longitude: "-2.180897284"
    },
    {
        postcode: "AB21 7JX",
        latitude: "57.20819956",
        longitude: "-2.1803508"
    },
    {
        postcode: "AB21 7JY",
        latitude: "57.20800487",
        longitude: "-2.178297217"
    },
    {
        postcode: "AB21 7JZ",
        latitude: "57.20859673",
        longitude: "-2.179011886"
    },
    {
        postcode: "AB21 7LA",
        latitude: "57.21099292",
        longitude: "-2.180579655"
    },
    {
        postcode: "AB21 7LB",
        latitude: "57.21015159",
        longitude: "-2.178440017"
    },
    {
        postcode: "AB21 9PE",
        latitude: "57.17818503",
        longitude: "-2.169221714"
    },
    {
        postcode: "BB1 3HJ",
        latitude: "53.75332986",
        longitude: "-2.450445251"
    },
    {
        postcode: "BB1 3HL",
        latitude: "53.75002441",
        longitude: "-2.456991317"
    },
    {
        postcode: "BB1 3HN",
        latitude: "53.75170996",
        longitude: "-2.453369966"
    },
    {
        postcode: "BB1 3HP",
        latitude: "53.756595",
        longitude: "-2.45004"
    },
    {
        postcode: "BB1 3HQ",
        latitude: "53.74977988",
        longitude: "-2.459824431"
    },
    {
        postcode: "BB1 3HR",
        latitude: "53.75395092",
        longitude: "-2.445401611"
    },
    {
        postcode: "BB1 3HT",
        latitude: "53.758904",
        longitude: "-2.447957"
    },
    {
        postcode: "BB1 3HU",
        latitude: "53.75501367",
        longitude: "-2.450554"
    },
    {
        postcode: "BB1 3HW",
        latitude: "53.75242068",
        longitude: "-2.44841851"
    },
    {
        postcode: "BB1 3HY",
        latitude: "53.751346",
        longitude: "-2.445178311"
    },
    {
        postcode: "BB1 3JA",
        latitude: "53.75235279",
        longitude: "-2.444929732"
    },
    {
        postcode: "BB1 3JB",
        latitude: "53.75161253",
        longitude: "-2.445801486"
    },
    {
        postcode: "BB1 3JD",
        latitude: "53.749095",
        longitude: "-2.443834919"
    },
    {
        postcode: "BB1 3JL",
        latitude: "53.74959825",
        longitude: "-2.455606723"
    },
    {
        postcode: "BB1 3JP",
        latitude: "53.74860947",
        longitude: "-2.453260746"
    },
    {
        postcode: "BB1 3JR",
        latitude: "53.74878797",
        longitude: "-2.451215504"
    },
    {
        postcode: "BB1 3JS",
        latitude: "53.74897969",
        longitude: "-2.452809805"
    },
    {
        postcode: "BB1 3JT",
        latitude: "53.75004871",
        longitude: "-2.452957789"
    },
    {
        postcode: "BB1 3JU",
        latitude: "53.75022635",
        longitude: "-2.451261"
    },
    {
        postcode: "BB1 3JW",
        latitude: "53.7491",
        longitude: "-2.454585"
    },
    {
        postcode: "BB1 3JX",
        latitude: "53.75094463",
        longitude: "-2.451344782"
    },
    {
        postcode: "BB1 3JY",
        latitude: "53.74913406",
        longitude: "-2.450006071"
    },
    {
        postcode: "BB1 3JZ",
        latitude: "53.74980842",
        longitude: "-2.447541461"
    },
    {
        postcode: "BB1 3LA",
        latitude: "53.74821611",
        longitude: "-2.447918792"
    },
    {
        postcode: "BB1 3LB",
        latitude: "53.74910731",
        longitude: "-2.44754917"
    },
    {
        postcode: "BB1 3LD",
        latitude: "53.75124974",
        longitude: "-2.446677216"
    },
    {
        postcode: "BB1 3LE",
        latitude: "53.75209638",
        longitude: "-2.448612204"
    },
    {
        postcode: "BB1 3LF",
        latitude: "53.75156752",
        longitude: "-2.448227437"
    },
    {
        postcode: "BB1 3LG",
        latitude: "53.7514765",
        longitude: "-2.450925863"
    },
    {
        postcode: "BB1 3LH",
        latitude: "53.74938987",
        longitude: "-2.448901806"
    },
    {
        postcode: "BB1 3LJ",
        latitude: "53.74810133",
        longitude: "-2.44976757"
    },
    {
        postcode: "BB1 3LL",
        latitude: "53.74918011",
        longitude: "-2.452099239"
    },
    {
        postcode: "BB1 3LN",
        latitude: "53.74987159",
        longitude: "-2.452258313"
    },
    {
        postcode: "BB1 3LP",
        latitude: "53.7463168",
        longitude: "-2.438967408"
    },
    {
        postcode: "BB1 3LQ",
        latitude: "53.75063786",
        longitude: "-2.449263909"
    },
    {
        postcode: "BB1 3LR",
        latitude: "53.74691338",
        longitude: "-2.438048656"
    },
    {
        postcode: "BB1 3LS",
        latitude: "53.74981648",
        longitude: "-2.43312007"
    },
    {
        postcode: "BB1 3LU",
        latitude: "53.74904074",
        longitude: "-2.433885464"
    },
    {
        postcode: "BB1 3LW",
        latitude: "53.74597682",
        longitude: "-2.438539293"
    },
    {
        postcode: "BB1 3LX",
        latitude: "53.74782106",
        longitude: "-2.435616729"
    },
    {
        postcode: "BB1 3LY",
        latitude: "53.74885452",
        longitude: "-2.433185991"
    },
    {
        postcode: "BB1 3LZ",
        latitude: "53.7485948",
        longitude: "-2.432925529"
    },
    {
        postcode: "BB1 3NA",
        latitude: "53.74785916",
        longitude: "-2.435025734"
    },
    {
        postcode: "BB1 3NB",
        latitude: "53.74791952",
        longitude: "-2.433252187"
    },
    {
        postcode: "BB1 3ND",
        latitude: "53.74757798",
        longitude: "-2.433248671"
    },
    {
        postcode: "BB1 3NG",
        latitude: "53.74698512",
        longitude: "-2.433151587"
    },
    {
        postcode: "BB1 3NH",
        latitude: "53.74755478",
        longitude: "-2.437160672"
    },
    {
        postcode: "BB1 3NJ",
        latitude: "53.74853539",
        longitude: "-2.436913069"
    },
    {
        postcode: "BB1 3NN",
        latitude: "53.74831003",
        longitude: "-2.441990668"
    },
    {
        postcode: "BB1 3NP",
        latitude: "53.74994474",
        longitude: "-2.442295964"
    },
    {
        postcode: "BB1 3NQ",
        latitude: "53.74809227",
        longitude: "-2.4375"
    },
    {
        postcode: "BB1 3NR",
        latitude: "53.75008513",
        longitude: "-2.443434"
    },
    {
        postcode: "BB1 3NS",
        latitude: "53.74902698",
        longitude: "-2.442559275"
    },
    {
        postcode: "BB1 3NT",
        latitude: "53.75957242",
        longitude: "-2.449162131"
    },
    {
        postcode: "BB1 3NU",
        latitude: "53.762635",
        longitude: "-2.45015"
    },
    {
        postcode: "BB1 3NW",
        latitude: "53.74932024",
        longitude: "-2.441030758"
    },
    {
        postcode: "BB1 3NY",
        latitude: "53.74791815",
        longitude: "-2.441016066"
    },
    {
        postcode: "BB1 3WW",
        latitude: "53.74293091",
        longitude: "-2.484903506"
    },
    {
        postcode: "BB1 4AA",
        latitude: "53.770548",
        longitude: "-2.460962"
    },
    {
        postcode: "BB1 4AB",
        latitude: "53.774784",
        longitude: "-2.448308"
    },
    {
        postcode: "BB1 4AD",
        latitude: "53.78120782",
        longitude: "-2.446464333"
    },
    {
        postcode: "BB1 4AE",
        latitude: "53.78763004",
        longitude: "-2.452391333"
    },
    {
        postcode: "BB1 4AF",
        latitude: "53.78505623",
        longitude: "-2.464975928"
    },
    {
        postcode: "BB1 4AG",
        latitude: "53.782237",
        longitude: "-2.464444"
    },
    {
        postcode: "BB1 4AH",
        latitude: "53.77843714",
        longitude: "-2.427390468"
    },
    {
        postcode: "BB1 4AJ",
        latitude: "53.77720289",
        longitude: "-2.418015316"
    },
    {
        postcode: "BB1 4AL",
        latitude: "53.773361",
        longitude: "-2.424426"
    },
    {
        postcode: "BB1 4AN",
        latitude: "53.775899",
        longitude: "-2.408018"
    },
    {
        postcode: "BB1 4AP",
        latitude: "53.772233",
        longitude: "-2.438282"
    },
    {
        postcode: "BB1 4AQ",
        latitude: "53.77636683",
        longitude: "-2.462118136"
    },
    {
        postcode: "BB1 4AR",
        latitude: "53.76098682",
        longitude: "-2.426121019"
    },
    {
        postcode: "BB1 4AS",
        latitude: "53.756252",
        longitude: "-2.425755"
    },
    {
        postcode: "BB1 4AT",
        latitude: "53.766156",
        longitude: "-2.443543"
    },
    {
        postcode: "BB1 4AU",
        latitude: "53.75791867",
        longitude: "-2.441894429"
    },
    {
        postcode: "BB1 4AW",
        latitude: "53.76301062",
        longitude: "-2.423168341"
    },
    {
        postcode: "BB1 4BH",
        latitude: "53.76457847",
        longitude: "-2.427128275"
    },
    {
        postcode: "BB1 4BJ",
        latitude: "53.76553128",
        longitude: "-2.427107611"
    },
    {
        postcode: "BB1 4BL",
        latitude: "53.76547446",
        longitude: "-2.425392805"
    },
    {
        postcode: "BB1 4BN",
        latitude: "53.76561411",
        longitude: "-2.426562324"
    },
    {
        postcode: "BB1 4BP",
        latitude: "53.76635181",
        longitude: "-2.42637259"
    },
    {
        postcode: "BB1 4BQ",
        latitude: "53.765161",
        longitude: "-2.427876143"
    },
    {
        postcode: "BB1 4BS",
        latitude: "53.76651975",
        longitude: "-2.422096198"
    },
    {
        postcode: "BB1 4BW",
        latitude: "53.76595894",
        longitude: "-2.42564043"
    },
    {
        postcode: "BB1 4BX",
        latitude: "53.76695485",
        longitude: "-2.423602464"
    },
    {
        postcode: "BB1 4BY",
        latitude: "53.7666468",
        longitude: "-2.424297209"
    },
    {
        postcode: "BB1 4BZ",
        latitude: "53.76733308",
        longitude: "-2.420709"
    },
    {
        postcode: "BB1 4DA",
        latitude: "53.76800529",
        longitude: "-2.421382896"
    },
    {
        postcode: "BB1 4DB",
        latitude: "53.76765895",
        longitude: "-2.422744811"
    },
    {
        postcode: "BB1 4DD",
        latitude: "53.76796913",
        longitude: "-2.418879307"
    },
    {
        postcode: "BB1 4DG",
        latitude: "53.76817585",
        longitude: "-2.418881366"
    },
    {
        postcode: "BB1 4DH",
        latitude: "53.76927246",
        longitude: "-2.418861946"
    },
    {
        postcode: "BB1 4DJ",
        latitude: "53.76965096",
        longitude: "-2.418577454"
    },
    {
        postcode: "BB1 4DL",
        latitude: "53.76900125",
        longitude: "-2.416735243"
    },
    {
        postcode: "BB1 4DR",
        latitude: "53.76915398",
        longitude: "-2.419331082"
    },
    {
        postcode: "BB1 4DS",
        latitude: "53.76929704",
        longitude: "-2.41954491"
    },
    {
        postcode: "BB1 4DT",
        latitude: "53.7699674",
        longitude: "-2.420613623"
    },
    {
        postcode: "BB1 4DU",
        latitude: "53.76988036",
        longitude: "-2.417229451"
    },
    {
        postcode: "BB1 4DW",
        latitude: "53.76920776",
        longitude: "-2.416797976"
    },
    {
        postcode: "BB1 4DX",
        latitude: "53.77043602",
        longitude: "-2.417690123"
    },
    {
        postcode: "BB1 4DY",
        latitude: "53.77065822",
        longitude: "-2.418405416"
    },
    {
        postcode: "BB1 4DZ",
        latitude: "53.770921",
        longitude: "-2.420365236"
    },
    {
        postcode: "BB1 4EA",
        latitude: "53.77081958",
        longitude: "-2.421092482"
    },
    {
        postcode: "BB1 4EB",
        latitude: "53.77131964",
        longitude: "-2.422022999"
    },
    {
        postcode: "BB1 4ED",
        latitude: "53.77085563",
        longitude: "-2.418498413"
    },
    {
        postcode: "BB1 4EE",
        latitude: "53.7708439",
        longitude: "-2.416707988"
    },
    {
        postcode: "BB1 4EF",
        latitude: "53.76917434",
        longitude: "-2.416069412"
    },
    {
        postcode: "BB1 4EG",
        latitude: "53.76809667",
        longitude: "-2.423507767"
    },
    {
        postcode: "BB1 4EH",
        latitude: "53.76625441",
        longitude: "-2.428480295"
    },
    {
        postcode: "BB1 4EJ",
        latitude: "53.76697137",
        longitude: "-2.426545749"
    },
    {
        postcode: "BB1 4EL",
        latitude: "53.76869676",
        longitude: "-2.421556709"
    },
    {
        postcode: "BB1 4EN",
        latitude: "53.76758669",
        longitude: "-2.425383827"
    },
    {
        postcode: "BB1 4EP",
        latitude: "53.76828796",
        longitude: "-2.420232718"
    },
    {
        postcode: "BB1 4ER",
        latitude: "53.76212489",
        longitude: "-2.432093951"
    },
    {
        postcode: "BB1 4ES",
        latitude: "53.76468982",
        longitude: "-2.421061451"
    },
    {
        postcode: "BB1 4ET",
        latitude: "53.76372296",
        longitude: "-2.432595793"
    },
    {
        postcode: "BB1 4EU",
        latitude: "53.76485565",
        longitude: "-2.425007297"
    },
    {
        postcode: "BB1 4EX",
        latitude: "53.76372879",
        longitude: "-2.425951592"
    },
    {
        postcode: "BB1 4EY",
        latitude: "53.76427043",
        longitude: "-2.425289609"
    },
    {
        postcode: "BB1 4EZ",
        latitude: "53.76471717",
        longitude: "-2.423625"
    },
    {
        postcode: "BB1 4HA",
        latitude: "53.76476585",
        longitude: "-2.422442674"
    },
    {
        postcode: "BB1 4HB",
        latitude: "53.76637432",
        longitude: "-2.42000121"
    },
    {
        postcode: "BB1 4HD",
        latitude: "53.76675233",
        longitude: "-2.419853279"
    },
    {
        postcode: "BB1 4HF",
        latitude: "53.765981",
        longitude: "-2.419619988"
    },
    {
        postcode: "BB1 4HG",
        latitude: "53.76288579",
        longitude: "-2.415172898"
    },
    {
        postcode: "BB1 4HH",
        latitude: "53.76430551",
        longitude: "-2.417871957"
    },
    {
        postcode: "BB1 4HJ",
        latitude: "53.76421918",
        longitude: "-2.416854728"
    },
    {
        postcode: "BB1 4HL",
        latitude: "53.76501629",
        longitude: "-2.417666639"
    },
    {
        postcode: "BB1 4HN",
        latitude: "53.7642318",
        longitude: "-2.415808143"
    },
    {
        postcode: "BB1 4HP",
        latitude: "53.76506577",
        longitude: "-2.418941412"
    },
    {
        postcode: "BB1 4HQ",
        latitude: "53.76483198",
        longitude: "-2.418969423"
    },
    {
        postcode: "BB1 4HR",
        latitude: "53.76592368",
        longitude: "-2.417781842"
    },
    {
        postcode: "BB1 4HS",
        latitude: "53.76643942",
        longitude: "-2.416800881"
    },
    {
        postcode: "BB1 4HT",
        latitude: "53.76667839",
        longitude: "-2.417865192"
    },
    {
        postcode: "BB1 4HU",
        latitude: "53.76687554",
        longitude: "-2.418034028"
    },
    {
        postcode: "BB1 4HW",
        latitude: "53.76555153",
        longitude: "-2.416245955"
    },
    {
        postcode: "BB1 4HX",
        latitude: "53.76762649",
        longitude: "-2.416615424"
    },
    {
        postcode: "BB1 4HY",
        latitude: "53.76758901",
        longitude: "-2.417055009"
    },
    {
        postcode: "BB1 4HZ",
        latitude: "53.76721374",
        longitude: "-2.416414115"
    },
    {
        postcode: "BB1 4JA",
        latitude: "53.76678343",
        longitude: "-2.416091271"
    },
    {
        postcode: "BB1 4JB",
        latitude: "53.76731687",
        longitude: "-2.415186299"
    },
    {
        postcode: "BB1 4JD",
        latitude: "53.7660714",
        longitude: "-2.414066566"
    },
    {
        postcode: "BB1 4JE",
        latitude: "53.76691557",
        longitude: "-2.414272096"
    },
    {
        postcode: "BB1 4JF",
        latitude: "53.76693669",
        longitude: "-2.413362062"
    },
    {
        postcode: "BB1 4JG",
        latitude: "53.76739092",
        longitude: "-2.414565025"
    },
    {
        postcode: "BB1 4JH",
        latitude: "53.76780808",
        longitude: "-2.413491995"
    },
    {
        postcode: "BB1 4JJ",
        latitude: "53.76726297",
        longitude: "-2.412576387"
    },
    {
        postcode: "BB1 4JN",
        latitude: "53.76794614",
        longitude: "-2.412552747"
    },
    {
        postcode: "BB1 4JQ",
        latitude: "53.76782171",
        longitude: "-2.414751323"
    },
    {
        postcode: "BB1 4JR",
        latitude: "53.7675928",
        longitude: "-2.413368511"
    },
    {
        postcode: "BB1 4JS",
        latitude: "53.76628851",
        longitude: "-2.411049782"
    },
    {
        postcode: "BB1 4JT",
        latitude: "53.76368623",
        longitude: "-2.415029104"
    },
    {
        postcode: "BB1 4JU",
        latitude: "53.76362494",
        longitude: "-2.414558245"
    },
    {
        postcode: "BB1 4JW",
        latitude: "53.76722952",
        longitude: "-2.411847861"
    },
    {
        postcode: "BB1 4JX",
        latitude: "53.76448167",
        longitude: "-2.413732349"
    },
    {
        postcode: "BB1 4JY",
        latitude: "53.764836",
        longitude: "-2.412795"
    },
    {
        postcode: "BB1 4JZ",
        latitude: "53.7682026",
        longitude: "-2.413768955"
    },
    {
        postcode: "BB1 4LA",
        latitude: "53.76844375",
        longitude: "-2.414211293"
    },
    {
        postcode: "BB1 4LB",
        latitude: "53.77289716",
        longitude: "-2.415560027"
    },
    {
        postcode: "BB1 4LD",
        latitude: "53.76793853",
        longitude: "-2.417346726"
    },
    {
        postcode: "BB1 4LJ",
        latitude: "53.76872684",
        longitude: "-2.415518817"
    },
    {
        postcode: "BB1 4LL",
        latitude: "53.76986419",
        longitude: "-2.414119082"
    },
    {
        postcode: "BB1 4LN",
        latitude: "53.76936024",
        longitude: "-2.414296178"
    },
    {
        postcode: "BB1 4LP",
        latitude: "53.771337",
        longitude: "-2.41471"
    },
    {
        postcode: "BB1 4LQ",
        latitude: "53.76819711",
        longitude: "-2.417940967"
    },
    {
        postcode: "BB1 4LR",
        latitude: "53.771196",
        longitude: "-2.413811807"
    },
    {
        postcode: "BB1 4LS",
        latitude: "53.77114602",
        longitude: "-2.4151179"
    },
    {
        postcode: "BB1 4LT",
        latitude: "53.77130759",
        longitude: "-2.415180184"
    },
    {
        postcode: "BB1 4LU",
        latitude: "53.77134144",
        longitude: "-2.415787409"
    },
    {
        postcode: "BB1 4LW",
        latitude: "53.76982698",
        longitude: "-2.414482837"
    },
    {
        postcode: "BB1 4LX",
        latitude: "53.77177459",
        longitude: "-2.415291002"
    },
    {
        postcode: "BB1 4LY",
        latitude: "53.77214077",
        longitude: "-2.415962211"
    },
    {
        postcode: "BB1 4NA",
        latitude: "53.77065091",
        longitude: "-2.415340592"
    },
    {
        postcode: "BB1 4NB",
        latitude: "53.76953816",
        longitude: "-2.414828938"
    },
    {
        postcode: "BB1 4ND",
        latitude: "53.76929114",
        longitude: "-2.408363"
    },
    {
        postcode: "BB1 4NF",
        latitude: "53.77039929",
        longitude: "-2.402153694"
    },
    {
        postcode: "BB1 4NG",
        latitude: "53.76916375",
        longitude: "-2.406056122"
    },
    {
        postcode: "BB1 4NL",
        latitude: "53.76882909",
        longitude: "-2.409314735"
    },
    {
        postcode: "BB1 4NN",
        latitude: "53.76890301",
        longitude: "-2.40872377"
    },
    {
        postcode: "BB1 4NP",
        latitude: "53.76834303",
        longitude: "-2.409522401"
    },
    {
        postcode: "BB1 4NQ",
        latitude: "53.77071709",
        longitude: "-2.411790985"
    },
    {
        postcode: "BB1 4NR",
        latitude: "53.76810965",
        longitude: "-2.409429102"
    },
    {
        postcode: "BB1 4NS",
        latitude: "53.76795972",
        longitude: "-2.411217827"
    },
    {
        postcode: "BB1 4NT",
        latitude: "53.77036964",
        longitude: "-2.410892439"
    },
    {
        postcode: "BB1 4NW",
        latitude: "53.7680815",
        longitude: "-2.409777763"
    },
    {
        postcode: "BB1 4NX",
        latitude: "53.77047473",
        longitude: "-2.41169758"
    },
    {
        postcode: "BB1 4NY",
        latitude: "53.7709609",
        longitude: "-2.411459586"
    },
    {
        postcode: "BB1 4NZ",
        latitude: "53.76989962",
        longitude: "-2.409036892"
    },
    {
        postcode: "BB1 4PA",
        latitude: "53.77132615",
        longitude: "-2.407154235"
    },
    {
        postcode: "BB1 4PB",
        latitude: "53.769438",
        longitude: "-2.407728"
    },
    {
        postcode: "BB1 4PD",
        latitude: "53.76942322",
        longitude: "-2.40904743"
    },
    {
        postcode: "BB1 4PE",
        latitude: "53.76930534",
        longitude: "-2.409349714"
    },
    {
        postcode: "BB1 4PF",
        latitude: "53.76855714",
        longitude: "-2.407354994"
    },
    {
        postcode: "BB1 4PG",
        latitude: "53.76994069",
        longitude: "-2.407535286"
    },
    {
        postcode: "BB1 4PH",
        latitude: "53.76400303",
        longitude: "-2.419552782"
    },
    {
        postcode: "BB1 4RA",
        latitude: "53.7645973",
        longitude: "-2.411473179"
    },
    {
        postcode: "BB1 4RB",
        latitude: "53.76406959",
        longitude: "-2.413333885"
    },
    {
        postcode: "BB1 4RD",
        latitude: "53.76576806",
        longitude: "-2.410801971"
    },
    {
        postcode: "BB1 4RE",
        latitude: "53.76499802",
        longitude: "-2.415163408"
    },
    {
        postcode: "AB23 8AA",
        latitude: "57.18505346",
        longitude: "-2.096247971"
    },
    {
        postcode: "AB23 8AB",
        latitude: "57.24952836",
        longitude: "-2.060272722"
    },
    {
        postcode: "AB23 8AD",
        latitude: "57.25176506",
        longitude: "-2.060326108"
    },
    {
        postcode: "AB23 8AE",
        latitude: "57.19078145",
        longitude: "-2.100250435"
    },
    {
        postcode: "AB23 8AG",
        latitude: "57.19305559",
        longitude: "-2.098419919"
    },
    {
        postcode: "AB23 8AH",
        latitude: "57.19080053",
        longitude: "-2.098844096"
    },
    {
        postcode: "AB23 8AJ",
        latitude: "57.18657847",
        longitude: "-2.086821934"
    },
    {
        postcode: "AB23 8AP",
        latitude: "57.19940599",
        longitude: "-2.09909884"
    },
    {
        postcode: "AB23 8AR",
        latitude: "57.21793017",
        longitude: "-2.070536553"
    },
    {
        postcode: "AB23 8AT",
        latitude: "57.17971735",
        longitude: "-2.084093104"
    },
    {
        postcode: "AB23 8AU",
        latitude: "57.19140437",
        longitude: "-2.096297623"
    },
    {
        postcode: "AB23 8AW",
        latitude: "57.19232979",
        longitude: "-2.096068387"
    },
    {
        postcode: "AB23 8AX",
        latitude: "57.19496195",
        longitude: "-2.083317017"
    },
    {
        postcode: "AB23 8AZ",
        latitude: "57.19619105",
        longitude: "-2.085636538"
    },
    {
        postcode: "AB23 8BA",
        latitude: "57.19037631",
        longitude: "-2.089593981"
    },
    {
        postcode: "AB23 8BB",
        latitude: "57.1925496",
        longitude: "-2.090410039"
    },
    {
        postcode: "AB23 8BD",
        latitude: "57.201021",
        longitude: "-2.089372"
    },
    {
        postcode: "AB23 8BE",
        latitude: "57.21730063",
        longitude: "-2.071826843"
    },
    {
        postcode: "AB23 8BJ",
        latitude: "57.20550303",
        longitude: "-2.102061535"
    },
    {
        postcode: "AB23 8BL",
        latitude: "57.18608375",
        longitude: "-2.088078"
    },
    {
        postcode: "AB23 8BN",
        latitude: "57.20459423",
        longitude: "-2.092458896"
    },
    {
        postcode: "AB23 8BP",
        latitude: "57.20563152",
        longitude: "-2.086502631"
    },
    {
        postcode: "AB23 8BQ",
        latitude: "57.21267911",
        longitude: "-2.078969833"
    },
    {
        postcode: "AB23 8BR",
        latitude: "57.21404236",
        longitude: "-2.082317099"
    },
    {
        postcode: "AB23 8BS",
        latitude: "57.21692538",
        longitude: "-2.08292"
    },
    {
        postcode: "AB23 8BT",
        latitude: "57.21927675",
        longitude: "-2.072261"
    },
    {
        postcode: "AB23 8BU",
        latitude: "57.18647682",
        longitude: "-2.090825303"
    },
    {
        postcode: "AB23 8BW",
        latitude: "57.188786",
        longitude: "-2.090268196"
    },
    {
        postcode: "AB23 8BX",
        latitude: "57.17813228",
        longitude: "-2.089944691"
    },
    {
        postcode: "AB23 8BY",
        latitude: "57.18282892",
        longitude: "-2.092074"
    },
    {
        postcode: "AB23 8BZ",
        latitude: "57.19293104",
        longitude: "-2.096864195"
    },
    {
        postcode: "AB23 8DA",
        latitude: "57.18104636",
        longitude: "-2.084790871"
    },
    {
        postcode: "AB23 8DB",
        latitude: "57.18012778",
        longitude: "-2.088146583"
    },
    {
        postcode: "AB23 8DD",
        latitude: "57.17812473",
        longitude: "-2.087926779"
    },
    {
        postcode: "AB23 8DF",
        latitude: "57.18224794",
        longitude: "-2.099863344"
    },
    {
        postcode: "AB23 8DJ",
        latitude: "57.17817016",
        longitude: "-2.087182582"
    },
    {
        postcode: "AB23 8DL",
        latitude: "57.17729749",
        longitude: "-2.088868"
    },
    {
        postcode: "AB23 8DN",
        latitude: "57.17691149",
        longitude: "-2.08868471"
    },
    {
        postcode: "AB23 8DP",
        latitude: "57.17732609",
        longitude: "-2.086717476"
    },
    {
        postcode: "AB23 8DQ",
        latitude: "57.17715504",
        longitude: "-2.087246344"
    },
    {
        postcode: "AB23 8DR",
        latitude: "57.17646498",
        longitude: "-2.084879584"
    },
    {
        postcode: "AB23 8DS",
        latitude: "57.17676122",
        longitude: "-2.085177976"
    },
    {
        postcode: "AB23 8DT",
        latitude: "57.17638233",
        longitude: "-2.087509147"
    },
    {
        postcode: "AB23 8DU",
        latitude: "57.180461",
        longitude: "-2.086361"
    },
    {
        postcode: "AB23 8DX",
        latitude: "57.17653397",
        longitude: "-2.089014591"
    },
    {
        postcode: "AB23 8EA",
        latitude: "57.1768928",
        longitude: "-2.089710117"
    },
    {
        postcode: "AB23 8EB",
        latitude: "57.17696402",
        longitude: "-2.090603428"
    },
    {
        postcode: "AB23 8ED",
        latitude: "57.17804198",
        longitude: "-2.090589533"
    },
    {
        postcode: "AB23 8EE",
        latitude: "57.18649969",
        longitude: "-2.096284829"
    },
    {
        postcode: "AB23 8EF",
        latitude: "57.18937631",
        longitude: "-2.09354584"
    },
    {
        postcode: "AB23 8EG",
        latitude: "57.187094",
        longitude: "-2.093507"
    },
    {
        postcode: "AB23 8EH",
        latitude: "57.19052566",
        longitude: "-2.105445074"
    },
    {
        postcode: "AB23 8EJ",
        latitude: "57.17822956",
        longitude: "-2.092045527"
    },
    {
        postcode: "AB23 8EL",
        latitude: "57.1778058",
        longitude: "-2.094145046"
    },
    {
        postcode: "AB23 8EN",
        latitude: "57.17787712",
        longitude: "-2.094872987"
    },
    {
        postcode: "AB23 8EP",
        latitude: "57.17914449",
        longitude: "-2.093850729"
    },
    {
        postcode: "AB23 8EQ",
        latitude: "57.17928867",
        longitude: "-2.093239092"
    },
    {
        postcode: "AB23 8ER",
        latitude: "57.17855296",
        longitude: "-2.092029793"
    },
    {
        postcode: "AB23 8ES",
        latitude: "57.17917265",
        longitude: "-2.092213284"
    },
    {
        postcode: "AB23 8ET",
        latitude: "57.17921852",
        longitude: "-2.090906691"
    },
    {
        postcode: "AB23 8EU",
        latitude: "57.189091",
        longitude: "-2.101404"
    },
    {
        postcode: "AB23 8EW",
        latitude: "57.18735341",
        longitude: "-2.096601"
    },
    {
        postcode: "AB23 8EX",
        latitude: "57.18306227",
        longitude: "-2.092222999"
    },
    {
        postcode: "AB23 8EY",
        latitude: "57.188546",
        longitude: "-2.098507"
    },
    {
        postcode: "AB23 8EZ",
        latitude: "57.18602653",
        longitude: "-2.092379297"
    },
    {
        postcode: "AB23 8FB",
        latitude: "57.18311012",
        longitude: "-2.088153705"
    },
    {
        postcode: "AB23 8FD",
        latitude: "57.18302774",
        longitude: "-2.090304006"
    },
    {
        postcode: "AB23 8FE",
        latitude: "57.184927",
        longitude: "-2.096942"
    },
    {
        postcode: "AB23 8FF",
        latitude: "57.19170872",
        longitude: "-2.097688296"
    },
    {
        postcode: "AB23 8FG",
        latitude: "57.18201372",
        longitude: "-2.088829302"
    },
    {
        postcode: "AB23 8FP",
        latitude: "57.17798905",
        longitude: "-2.08924966"
    },
    {
        postcode: "AB23 8FT",
        latitude: "57.19704018",
        longitude: "-2.103179982"
    },
    {
        postcode: "AB23 8FW",
        latitude: "57.19621416",
        longitude: "-2.102681227"
    },
    {
        postcode: "AB23 8FX",
        latitude: "57.1973465",
        longitude: "-2.102088624"
    },
    {
        postcode: "AB23 8FY",
        latitude: "57.1787349",
        longitude: "-2.088871034"
    },
    {
        postcode: "AB23 8GA",
        latitude: "57.18977325",
        longitude: "-2.102845311"
    },
    {
        postcode: "AB23 8GD",
        latitude: "57.19096443",
        longitude: "-2.08296"
    },
    {
        postcode: "AB23 8GE",
        latitude: "57.19753359",
        longitude: "-2.103975703"
    },
    {
        postcode: "AB23 8GH",
        latitude: "57.19272527",
        longitude: "-2.106874367"
    },
    {
        postcode: "AB23 8GL",
        latitude: "57.19881854",
        longitude: "-2.103499392"
    },
    {
        postcode: "AB23 8GN",
        latitude: "57.19914932",
        longitude: "-2.105403512"
    },
    {
        postcode: "AB23 8GP",
        latitude: "57.199924",
        longitude: "-2.102724949"
    },
    {
        postcode: "AB23 8GQ",
        latitude: "57.20004792",
        longitude: "-2.105041981"
    },
    {
        postcode: "AB23 8GS",
        latitude: "57.1950914",
        longitude: "-2.102545722"
    },
    {
        postcode: "AB23 8GT",
        latitude: "57.19812038",
        longitude: "-2.100419312"
    },
    {
        postcode: "AB23 8GW",
        latitude: "57.19156025",
        longitude: "-2.078941163"
    },
    {
        postcode: "AB23 8GX",
        latitude: "57.187569",
        longitude: "-2.083201"
    },
    {
        postcode: "AB23 8HA",
        latitude: "57.17961283",
        longitude: "-2.092197842"
    },
    {
        postcode: "AB23 8HD",
        latitude: "57.18082399",
        longitude: "-2.09426853"
    },
    {
        postcode: "AB23 8HE",
        latitude: "57.19011714",
        longitude: "-2.099702631"
    },
    {
        postcode: "AB23 8HG",
        latitude: "57.187025",
        longitude: "-2.102192"
    },
    {
        postcode: "AB23 8HJ",
        latitude: "57.18049127",
        longitude: "-2.094730833"
    },
    {
        postcode: "AB23 8HL",
        latitude: "57.18044583",
        longitude: "-2.095425445"
    },
    {
        postcode: "AB23 8HN",
        latitude: "57.24553459",
        longitude: "-2.052246163"
    },
    {
        postcode: "AB23 8HP",
        latitude: "57.18102754",
        longitude: "-2.098238987"
    },
    {
        postcode: "AB23 8HQ",
        latitude: "57.18030148",
        longitude: "-2.096235585"
    },
    {
        postcode: "AB23 8HR",
        latitude: "57.18028186",
        longitude: "-2.098369331"
    },
    {
        postcode: "AB23 8HS",
        latitude: "57.1799761",
        longitude: "-2.098798581"
    },
    {
        postcode: "AB23 8HT",
        latitude: "57.17910602",
        longitude: "-2.09717528"
    },
    {
        postcode: "AB23 8HU",
        latitude: "57.24536342",
        longitude: "-2.053538"
    },
    {
        postcode: "AB23 8HW",
        latitude: "57.24484207",
        longitude: "-2.054217004"
    },
    {
        postcode: "AB23 8HX",
        latitude: "57.17830682",
        longitude: "-2.096809293"
    },
    {
        postcode: "AB23 8HY",
        latitude: "57.24469758",
        longitude: "-2.056089"
    },
    {
        postcode: "AB23 8HZ",
        latitude: "57.18994948",
        longitude: "-2.084696"
    },
    {
        postcode: "AB23 8JA",
        latitude: "57.17878397",
        longitude: "-2.095437691"
    },
    {
        postcode: "AB23 8JB",
        latitude: "57.17942946",
        longitude: "-2.097109969"
    },
    {
        postcode: "AB23 8JD",
        latitude: "57.17951073",
        longitude: "-2.096564338"
    },
    {
        postcode: "AB23 8JJ",
        latitude: "57.17980748",
        longitude: "-2.096151593"
    },
    {
        postcode: "AB23 8JL",
        latitude: "57.17863169",
        longitude: "-2.094874926"
    },
    {
        postcode: "AB23 8JN",
        latitude: "57.17716909",
        longitude: "-2.09270447"
    },
    {
        postcode: "AB23 8JP",
        latitude: "57.17745643",
        longitude: "-2.09285405"
    },
    {
        postcode: "AB23 8JQ",
        latitude: "57.17722048",
        longitude: "-2.096029079"
    },
    {
        postcode: "AB23 8JR",
        latitude: "57.17785776",
        longitude: "-2.096692336"
    },
    {
        postcode: "AB23 8JS",
        latitude: "57.19745879",
        longitude: "-2.096098"
    },
    {
        postcode: "AB23 8JW",
        latitude: "57.19668875",
        longitude: "-2.093117571"
    },
    {
        postcode: "AB23 8JX",
        latitude: "57.19597631",
        longitude: "-2.096789447"
    },
    {
        postcode: "AB23 8JZ",
        latitude: "57.18926771",
        longitude: "-2.094620996"
    },
    {
        postcode: "AB23 8LA",
        latitude: "57.19948565",
        longitude: "-2.100588523"
    },
    {
        postcode: "AB23 8LB",
        latitude: "57.20066251",
        longitude: "-2.10047588"
    },
    {
        postcode: "AB23 8LD",
        latitude: "57.20024872",
        longitude: "-2.101186403"
    },
    {
        postcode: "AB23 8LE",
        latitude: "57.24928594",
        longitude: "-2.060023745"
    },
    {
        postcode: "AB23 8LH",
        latitude: "57.19458301",
        longitude: "-2.098010305"
    },
    {
        postcode: "AB23 8LU",
        latitude: "57.19407285",
        longitude: "-2.095593055"
    },
    {
        postcode: "AB23 8LZ",
        latitude: "57.17654976",
        longitude: "-2.0920248"
    },
    {
        postcode: "AB23 8NA",
        latitude: "57.19863831",
        longitude: "-2.114487606"
    },
    {
        postcode: "AB23 8NB",
        latitude: "57.19558709",
        longitude: "-2.100544802"
    },
    {
        postcode: "AB23 8ND",
        latitude: "57.19504884",
        longitude: "-2.099633214"
    },
    {
        postcode: "AB23 8NE",
        latitude: "57.19471926",
        longitude: "-2.09605806"
    },
    {
        postcode: "AB23 8NF",
        latitude: "57.19531192",
        longitude: "-2.096340915"
    },
    {
        postcode: "AB23 8NG",
        latitude: "57.1955077",
        longitude: "-2.098707772"
    },
    {
        postcode: "AB23 8NH",
        latitude: "57.19499649",
        longitude: "-2.097663903"
    },
    {
        postcode: "AB23 8NJ",
        latitude: "57.19442049",
        longitude: "-2.099052359"
    },
    {
        postcode: "AB23 8NL",
        latitude: "57.19218444",
        longitude: "-2.0981694"
    },
    {
        postcode: "AB23 8NN",
        latitude: "57.207088",
        longitude: "-2.108257"
    },
    {
        postcode: "AB23 8NP",
        latitude: "57.21056",
        longitude: "-2.113283"
    },
    {
        postcode: "AB23 8NQ",
        latitude: "57.21925783",
        longitude: "-2.110362295"
    },
    {
        postcode: "AB23 8NR",
        latitude: "57.21750793",
        longitude: "-2.09976"
    },
    {
        postcode: "AB23 8NS",
        latitude: "57.21218778",
        longitude: "-2.100258943"
    },
    {
        postcode: "AB23 8NT",
        latitude: "57.20874187",
        longitude: "-2.095746945"
    },
    {
        postcode: "AB23 8NU",
        latitude: "57.19347985",
        longitude: "-2.095756988"
    },
    {
        postcode: "AB23 8PA",
        latitude: "57.18154989",
        longitude: "-2.096404"
    },
    {
        postcode: "AB23 8PB",
        latitude: "57.18281027",
        longitude: "-2.092867515"
    },
    {
        postcode: "AB23 8PD",
        latitude: "57.18236971",
        longitude: "-2.093395751"
    },
    {
        postcode: "AB23 8PJ",
        latitude: "57.18306",
        longitude: "-2.095250236"
    },
    {
        postcode: "AB23 8PL",
        latitude: "57.18384359",
        longitude: "-2.092489633"
    },
    {
        postcode: "AB23 8PN",
        latitude: "57.18355477",
        longitude: "-2.094325131"
    },
    {
        postcode: "AB23 8PP",
        latitude: "57.18251116",
        longitude: "-2.096406764"
    },
    {
        postcode: "AB23 8PQ",
        latitude: "57.18202724",
        longitude: "-2.094883651"
    },
    {
        postcode: "AB23 8PR",
        latitude: "57.18297089",
        longitude: "-2.094307097"
    },
    {
        postcode: "AB23 8PS",
        latitude: "57.18166657",
        longitude: "-2.096652685"
    },
    {
        postcode: "AB23 8PT",
        latitude: "57.18270853",
        longitude: "-2.096738123"
    },
    {
        postcode: "AB23 8PW",
        latitude: "57.24959946",
        longitude: "-2.061830616"
    },
    {
        postcode: "AB23 8PX",
        latitude: "57.18226633",
        longitude: "-2.099334051"
    },
    {
        postcode: "AB23 8QA",
        latitude: "57.18496917",
        longitude: "-2.10063169"
    },
    {
        postcode: "AB23 8QB",
        latitude: "57.18341638",
        longitude: "-2.099039381"
    },
    {
        postcode: "AB23 8QD",
        latitude: "57.18496772",
        longitude: "-2.102418347"
    },
    {
        postcode: "AB23 8QE",
        latitude: "57.18550773",
        longitude: "-2.101146003"
    },
    {
        postcode: "AB23 8QF",
        latitude: "57.19419456",
        longitude: "-2.100756124"
    },
    {
        postcode: "AB23 8QG",
        latitude: "57.194239",
        longitude: "-2.101351948"
    },
    {
        postcode: "AB23 8QH",
        latitude: "57.19180388",
        longitude: "-2.102255304"
    },
    {
        postcode: "AB23 8QJ",
        latitude: "57.18367603",
        longitude: "-2.100115345"
    },
    {
        postcode: "AB23 8QL",
        latitude: "57.18445856",
        longitude: "-2.098843661"
    },
    {
        postcode: "AB23 8QN",
        latitude: "57.18449291",
        longitude: "-2.100828907"
    },
    {
        postcode: "AB23 8QP",
        latitude: "57.19279215",
        longitude: "-2.102076029"
    },
    {
        postcode: "AB23 8QQ",
        latitude: "57.19244272",
        longitude: "-2.100966447"
    },
    {
        postcode: "AB23 8QS",
        latitude: "57.19113",
        longitude: "-2.102451989"
    },
    {
        postcode: "AB23 8QT",
        latitude: "57.18367952",
        longitude: "-2.095648856"
    },
    {
        postcode: "AB23 8QU",
        latitude: "57.19283014",
        longitude: "-2.099527945"
    },
    {
        postcode: "AB23 8QW",
        latitude: "57.19310615",
        longitude: "-2.102573301"
    },
    {
        postcode: "AB23 8QX",
        latitude: "57.18404691",
        longitude: "-2.096840886"
    },
    {
        postcode: "AB23 8RA",
        latitude: "57.18458471",
        longitude: "-2.098347709"
    },
    {
        postcode: "AB23 8RB",
        latitude: "57.18620887",
        longitude: "-2.100685"
    },
    {
        postcode: "AB23 8RD",
        latitude: "57.246539",
        longitude: "-2.086582"
    },
    {
        postcode: "AB23 8RG",
        latitude: "57.19849052",
        longitude: "-2.098103429"
    },
    {
        postcode: "AB23 8RH",
        latitude: "57.19915673",
        longitude: "-2.096202007"
    },
    {
        postcode: "AB23 8RJ",
        latitude: "57.20061181",
        longitude: "-2.096404403"
    },
    {
        postcode: "AB23 8RL",
        latitude: "57.20109657",
        longitude: "-2.096819429"
    },
    {
        postcode: "AB23 8RN",
        latitude: "57.19659385",
        longitude: "-2.099703579"
    },
    {
        postcode: "AB23 8RP",
        latitude: "57.2001989",
        longitude: "-2.096006125"
    },
    {
        postcode: "AB23 8SA",
        latitude: "57.25901721",
        longitude: "-2.086131"
    },
    {
        postcode: "AB23 8SB",
        latitude: "57.24853333",
        longitude: "-2.087249696"
    },
    {
        postcode: "AB23 8SD",
        latitude: "57.24874823",
        longitude: "-2.088244509"
    },
    {
        postcode: "AB23 8SH",
        latitude: "57.25419",
        longitude: "-2.061673"
    },
    {
        postcode: "AB23 8SJ",
        latitude: "57.24651128",
        longitude: "-2.057948"
    },
    {
        postcode: "AB23 8SL",
        latitude: "57.22962339",
        longitude: "-2.100538247"
    },
    {
        postcode: "AB23 8SP",
        latitude: "57.25337241",
        longitude: "-2.061522059"
    },
    {
        postcode: "AB23 8SQ",
        latitude: "57.246394",
        longitude: "-2.058626889"
    },
    {
        postcode: "AB23 8SR",
        latitude: "57.2453334",
        longitude: "-2.060182996"
    },
    {
        postcode: "AB23 8SS",
        latitude: "57.25280619",
        longitude: "-2.061654"
    },
    {
        postcode: "AB23 8ST",
        latitude: "57.24593527",
        longitude: "-2.06015084"
    },
    {
        postcode: "AB23 8SU",
        latitude: "57.24563087",
        longitude: "-2.05797963"
    },
    {
        postcode: "AB23 8SW",
        latitude: "57.24534285",
        longitude: "-2.05920537"
    },
    {
        postcode: "AB23 8SX",
        latitude: "57.24698979",
        longitude: "-2.052314515"
    },
    {
        postcode: "AB23 8SY",
        latitude: "57.25218117",
        longitude: "-2.053979233"
    },
    {
        postcode: "AB23 8TP",
        latitude: "57.24801008",
        longitude: "-2.060618233"
    },
    {
        postcode: "AB23 8TR",
        latitude: "57.249905",
        longitude: "-2.060090826"
    },
    {
        postcode: "AB23 8TS",
        latitude: "57.25323006",
        longitude: "-2.058671139"
    },
    {
        postcode: "AB23 8TW",
        latitude: "57.24620376",
        longitude: "-2.062172889"
    },
    {
        postcode: "AB23 8UA",
        latitude: "57.22927954",
        longitude: "-2.092106745"
    },
    {
        postcode: "AB23 8UB",
        latitude: "57.23003301",
        longitude: "-2.093582765"
    },
    {
        postcode: "AB23 8UD",
        latitude: "57.23069051",
        longitude: "-2.103241"
    },
    {
        postcode: "AB23 8UE",
        latitude: "57.22792231",
        longitude: "-2.093196471"
    },
    {
        postcode: "AB23 8UF",
        latitude: "57.22548718",
        longitude: "-2.081415234"
    },
    {
        postcode: "AB23 8UG",
        latitude: "57.23014594",
        longitude: "-2.098601756"
    },
    {
        postcode: "AB23 8UH",
        latitude: "57.260039",
        longitude: "-2.111545"
    },
    {
        postcode: "AB23 8UJ",
        latitude: "57.25583391",
        longitude: "-2.102416463"
    },
    {
        postcode: "AB23 8UL",
        latitude: "57.26201",
        longitude: "-2.09567"
    },
    {
        postcode: "AB23 8UN",
        latitude: "57.25393165",
        longitude: "-2.129310866"
    },
    {
        postcode: "AB23 8UP",
        latitude: "57.24245592",
        longitude: "-2.115617828"
    },
    {
        postcode: "AB23 8UQ",
        latitude: "57.24538468",
        longitude: "-2.105022077"
    },
    {
        postcode: "AB23 8UR",
        latitude: "57.23754333",
        longitude: "-2.104171395"
    },
    {
        postcode: "AB23 8US",
        latitude: "57.23391449",
        longitude: "-2.113819"
    },
    {
        postcode: "AB23 8UT",
        latitude: "57.22499376",
        longitude: "-2.11498344"
    },
    {
        postcode: "AB23 8UU",
        latitude: "57.239532",
        longitude: "-2.12926"
    },
    {
        postcode: "AB23 8UW",
        latitude: "57.22879391",
        longitude: "-2.092850856"
    },
    {
        postcode: "AB23 8UX",
        latitude: "57.245516",
        longitude: "-2.128105"
    },
    {
        postcode: "AB23 8UY",
        latitude: "57.23016106",
        longitude: "-2.102146362"
    },
    {
        postcode: "AB23 8UZ",
        latitude: "57.22331834",
        longitude: "-2.09934527"
    },
    {
        postcode: "AB23 8WA",
        latitude: "57.24974522",
        longitude: "-2.057555242"
    },
    {
        postcode: "AB23 8WB",
        latitude: "57.25022967",
        longitude: "-2.058898364"
    },
    {
        postcode: "AB23 8WD",
        latitude: "57.2487679",
        longitude: "-2.053477067"
    },
    {
        postcode: "AB23 8WE",
        latitude: "57.2486336",
        longitude: "-2.052432857"
    },
    {
        postcode: "AB23 8WF",
        latitude: "57.24813027",
        longitude: "-2.052995"
    },
    {
        postcode: "AB23 8WG",
        latitude: "57.24803078",
        longitude: "-2.054702278"
    },
    {
        postcode: "AB23 8WH",
        latitude: "57.24848955",
        longitude: "-2.053194945"
    },
    {
        postcode: "AB23 8WJ",
        latitude: "57.24809937",
        longitude: "-2.061728666"
    },
    {
        postcode: "AB23 8WL",
        latitude: "57.24704315",
        longitude: "-2.053573984"
    },
    {
        postcode: "AB23 8WS",
        latitude: "57.24951242",
        longitude: "-2.087136"
    },
    {
        postcode: "AB23 8WT",
        latitude: "57.25276408",
        longitude: "-2.087508326"
    },
    {
        postcode: "AB23 8WU",
        latitude: "57.25307162",
        longitude: "-2.051262461"
    },
    {
        postcode: "AB23 8WY",
        latitude: "57.246925",
        longitude: "-2.055347"
    },
    {
        postcode: "AB23 8WZ",
        latitude: "57.24669282",
        longitude: "-2.053556902"
    },
    {
        postcode: "AB23 8XA",
        latitude: "57.25343486",
        longitude: "-2.140214708"
    },
    {
        postcode: "AB23 8XB",
        latitude: "57.255322",
        longitude: "-2.130642"
    },
    {
        postcode: "AB23 8XD",
        latitude: "57.25895223",
        longitude: "-2.138511766"
    },
    {
        postcode: "AB23 8XE",
        latitude: "57.26770553",
        longitude: "-2.142955028"
    },
    {
        postcode: "AB23 8XF",
        latitude: "57.25135207",
        longitude: "-2.05986139"
    },
    {
        postcode: "AB23 8XG",
        latitude: "57.25365361",
        longitude: "-2.055705083"
    },
    {
        postcode: "AB23 8XH",
        latitude: "57.27681",
        longitude: "-2.13843"
    },
    {
        postcode: "AB23 8XJ",
        latitude: "57.281349",
        longitude: "-2.151948"
    },
    {
        postcode: "AB23 8XL",
        latitude: "57.281836",
        longitude: "-2.134617"
    },
    {
        postcode: "AB23 8XN",
        latitude: "57.27981138",
        longitude: "-2.120130367"
    },
    {
        postcode: "AB23 8XP",
        latitude: "57.27752768",
        longitude: "-2.102178317"
    },
    {
        postcode: "AB23 8XQ",
        latitude: "57.2708276",
        longitude: "-2.130083204"
    },
    {
        postcode: "AB23 8XR",
        latitude: "57.25052511",
        longitude: "-2.061782"
    },
    {
        postcode: "AB23 8XS",
        latitude: "57.24674122",
        longitude: "-2.065156545"
    },
    {
        postcode: "AB23 8XU",
        latitude: "57.254812",
        longitude: "-2.055408"
    },
    {
        postcode: "AB23 8XW",
        latitude: "57.25146966",
        longitude: "-2.058137995"
    },
    {
        postcode: "AB23 8XX",
        latitude: "57.25934083",
        longitude: "-2.053243811"
    },
    {
        postcode: "AB23 8XY",
        latitude: "57.26415382",
        longitude: "-2.057345711"
    },
    {
        postcode: "AB23 8XZ",
        latitude: "57.25083981",
        longitude: "-2.060374308"
    },
    {
        postcode: "AB23 8YA",
        latitude: "57.26695907",
        longitude: "-2.069901072"
    },
    {
        postcode: "AB23 8YB",
        latitude: "57.268001",
        longitude: "-2.051565"
    },
    {
        postcode: "AB23 8YD",
        latitude: "57.2767318",
        longitude: "-2.052771504"
    },
    {
        postcode: "AB23 8YE",
        latitude: "57.27503918",
        longitude: "-2.038739408"
    },
    {
        postcode: "AB23 8YF",
        latitude: "57.25026663",
        longitude: "-2.056677722"
    },
    {
        postcode: "AB23 8YG",
        latitude: "57.24883769",
        longitude: "-2.088758448"
    },
    {
        postcode: "AB23 8YH",
        latitude: "57.28447304",
        longitude: "-2.032047926"
    },
    {
        postcode: "AB23 8YJ",
        latitude: "57.27881919",
        longitude: "-2.064732453"
    },
    {
        postcode: "AB23 8YL",
        latitude: "57.274968",
        longitude: "-2.090181"
    },
    {
        postcode: "AB23 8YN",
        latitude: "57.26087747",
        longitude: "-2.084792384"
    },
    {
        postcode: "AB23 8YP",
        latitude: "57.26390705",
        longitude: "-2.081234982"
    },
    {
        postcode: "AB23 8YQ",
        latitude: "57.25259071",
        longitude: "-2.061918514"
    },
    {
        postcode: "AB23 8YR",
        latitude: "57.257184",
        longitude: "-2.071986986"
    },
    {
        postcode: "AB23 8YS",
        latitude: "57.25842479",
        longitude: "-2.085333743"
    },
    {
        postcode: "AB23 8YT",
        latitude: "57.25072472",
        longitude: "-2.087868076"
    },
    {
        postcode: "AB23 8YU",
        latitude: "57.24796429",
        longitude: "-2.09162319"
    },
    {
        postcode: "AB23 8YW",
        latitude: "57.25065366",
        longitude: "-2.054954771"
    },
    {
        postcode: "AB23 8YX",
        latitude: "57.235399",
        longitude: "-2.089505"
    },
    {
        postcode: "AB23 8YY",
        latitude: "57.2374526",
        longitude: "-2.06576963"
    },
    {
        postcode: "AB23 8YZ",
        latitude: "57.25015044",
        longitude: "-2.055368327"
    },
    {
        postcode: "AB23 8ZA",
        latitude: "57.23221928",
        longitude: "-2.1007441"
    },
    {
        postcode: "AB23 8ZB",
        latitude: "57.23099781",
        longitude: "-2.100492305"
    },
    {
        postcode: "AB23 8ZD",
        latitude: "57.23205985",
        longitude: "-2.097894614"
    },
    {
        postcode: "AB23 8ZE",
        latitude: "57.233774",
        longitude: "-2.099903534"
    },
    {
        postcode: "AB23 8ZF",
        latitude: "57.23455399",
        longitude: "-2.101794099"
    },
    {
        postcode: "AB23 8ZG",
        latitude: "57.229909",
        longitude: "-2.090999"
    },
    {
        postcode: "AB23 8ZH",
        latitude: "57.23039684",
        longitude: "-2.087322688"
    },
    {
        postcode: "AB23 8ZJ",
        latitude: "57.23061893",
        longitude: "-2.090818133"
    },
    {
        postcode: "AB23 8ZL",
        latitude: "57.23086356",
        longitude: "-2.08788696"
    },
    {
        postcode: "AB23 8ZN",
        latitude: "57.2298382",
        longitude: "-2.089739598"
    },
    {
        postcode: "AB23 8ZP",
        latitude: "57.25057295",
        longitude: "-2.086525338"
    },
    {
        postcode: "AB23 8ZQ",
        latitude: "57.24976475",
        longitude: "-2.054058544"
    },
    {
        postcode: "AB23 8ZR",
        latitude: "57.24810122",
        longitude: "-2.057867526"
    },
    {
        postcode: "AB23 8ZS",
        latitude: "57.24892798",
        longitude: "-2.057123096"
    },
    {
        postcode: "AB23 8ZT",
        latitude: "57.24724765",
        longitude: "-2.058280458"
    },
    {
        postcode: "AB23 8ZU",
        latitude: "57.24782272",
        longitude: "-2.057916801"
    },
    {
        postcode: "AB23 8ZW",
        latitude: "57.24692341",
        longitude: "-2.060086173"
    },
    {
        postcode: "AB23 8ZX",
        latitude: "57.2487382",
        longitude: "-2.059575415"
    },
    {
        postcode: "AB24 1AW",
        latitude: "57.166527",
        longitude: "-2.088164"
    },
    {
        postcode: "AB24 1FR",
        latitude: "57.16482",
        longitude: "-2.089251"
    },
    {
        postcode: "AB24 1GU",
        latitude: "57.16474677",
        longitude: "-2.091135623"
    },
    {
        postcode: "AB24 1RF",
        latitude: "57.16470332",
        longitude: "-2.08910182"
    },
    {
        postcode: "AB24 1RG",
        latitude: "57.16469519",
        longitude: "-2.08789481"
    },
    {
        postcode: "AB24 1RN",
        latitude: "57.16884221",
        longitude: "-2.103713057"
    },
    {
        postcode: "AB24 1RP",
        latitude: "57.16799886",
        longitude: "-2.10243745"
    },
    {
        postcode: "AB24 1RQ",
        latitude: "57.16942",
        longitude: "-2.100175928"
    },
    {
        postcode: "AB24 1RZ",
        latitude: "57.16538687",
        longitude: "-2.087912991"
    },
    {
        postcode: "AB24 1SA",
        latitude: "57.16787761",
        longitude: "-2.096765427"
    },
    {
        postcode: "AB24 1SB",
        latitude: "57.16891102",
        longitude: "-2.09628859"
    },
    {
        postcode: "AB24 1SD",
        latitude: "57.17027702",
        longitude: "-2.095531467"
    },
    {
        postcode: "AB24 1SE",
        latitude: "57.16915361",
        longitude: "-2.096223078"
    },
    {
        postcode: "AB24 1SG",
        latitude: "57.16906484",
        longitude: "-2.094833818"
    },
    {
        postcode: "AB24 1SH",
        latitude: "57.16934349",
        longitude: "-2.094603027"
    },
    {
        postcode: "AB24 1SJ",
        latitude: "57.17075422",
        longitude: "-2.094077462"
    },
    {
        postcode: "AB24 1SL",
        latitude: "57.16964",
        longitude: "-2.094455"
    },
    {
        postcode: "AB24 1SN",
        latitude: "57.167689",
        longitude: "-2.096318"
    },
    {
        postcode: "AB24 1SX",
        latitude: "57.16464541",
        longitude: "-2.094574463"
    },
    {
        postcode: "AB24 1SY",
        latitude: "57.16505961",
        longitude: "-2.093269315"
    },
    {
        postcode: "AB24 1SZ",
        latitude: "57.16472955",
        longitude: "-2.090276"
    },
    {
        postcode: "AB24 1TA",
        latitude: "57.16525853",
        longitude: "-2.091517175"
    },
    {
        postcode: "AB24 1TB",
        latitude: "57.16570001",
        longitude: "-2.089699468"
    },
    {
        postcode: "AB24 1TD",
        latitude: "57.16557282",
        longitude: "-2.091666765"
    },
    {
        postcode: "AB24 1TE",
        latitude: "57.16507608",
        longitude: "-2.09525347"
    },
    {
        postcode: "AB24 1TF",
        latitude: "57.1666967",
        longitude: "-2.090280613"
    },
    {
        postcode: "AB24 1TG",
        latitude: "57.16735204",
        longitude: "-2.09086095"
    },
    {
        postcode: "AB24 1TH",
        latitude: "57.16574106",
        longitude: "-2.094941028"
    },
    {
        postcode: "AB24 1TJ",
        latitude: "57.16590344",
        longitude: "-2.09403204"
    },
    {
        postcode: "AB24 1TL",
        latitude: "57.16630179",
        longitude: "-2.08942"
    },
    {
        postcode: "AB24 1TN",
        latitude: "57.16677678",
        longitude: "-2.091339051"
    },
    {
        postcode: "AB24 1TP",
        latitude: "57.16746793",
        longitude: "-2.092084851"
    },
    {
        postcode: "AB24 1TQ",
        latitude: "57.16877966",
        longitude: "-2.091790474"
    },
    {
        postcode: "AB24 1TR",
        latitude: "57.1689499",
        longitude: "-2.092386194"
    },
    {
        postcode: "AB24 1TS",
        latitude: "57.16750341",
        longitude: "-2.092696748"
    },
    {
        postcode: "AB24 1TT",
        latitude: "57.166892",
        longitude: "-2.093455828"
    },
    {
        postcode: "AB24 1TU",
        latitude: "57.16639031",
        longitude: "-2.091619189"
    },
    {
        postcode: "AB24 1TW",
        latitude: "57.16591369",
        longitude: "-2.092328996"
    },
    {
        postcode: "AB24 1TX",
        latitude: "57.16699831",
        longitude: "-2.095423778"
    },
    {
        postcode: "AB24 1TY",
        latitude: "57.16659415",
        longitude: "-2.095323524"
    },
    {
        postcode: "AB24 1TZ",
        latitude: "57.167918",
        longitude: "-2.090812736"
    },
    {
        postcode: "AB24 1UA",
        latitude: "57.16901778",
        longitude: "-2.097628288"
    },
    {
        postcode: "AB24 1UF",
        latitude: "57.16875621",
        longitude: "-2.098768"
    },
    {
        postcode: "AB24 1UG",
        latitude: "57.16474677",
        longitude: "-2.091268"
    },
    {
        postcode: "AB24 1UH",
        latitude: "57.16798177",
        longitude: "-2.10136259"
    },
    {
        postcode: "AB24 1UJ",
        latitude: "57.16943926",
        longitude: "-2.09855543"
    },
    {
        postcode: "AB24 1UL",
        latitude: "57.16937687",
        longitude: "-2.097926888"
    },
    {
        postcode: "AB24 1UN",
        latitude: "57.16944931",
        longitude: "-2.09718295"
    },
    {
        postcode: "AB24 1UP",
        latitude: "57.168589",
        longitude: "-2.094501879"
    },
    {
        postcode: "AB24 1UQ",
        latitude: "57.16851819",
        longitude: "-2.093096154"
    },
    {
        postcode: "AB24 1UR",
        latitude: "57.16842942",
        longitude: "-2.091657318"
    },
    {
        postcode: "AB24 1US",
        latitude: "57.16811495",
        longitude: "-2.091739216"
    },
    {
        postcode: "AB24 1UT",
        latitude: "57.16815908",
        longitude: "-2.093145"
    },
    {
        postcode: "AB24 1UU",
        latitude: "57.1679372",
        longitude: "-2.100932544"
    },
    {
        postcode: "AB24 1UW",
        latitude: "57.17087866",
        longitude: "-2.09581415"
    },
    {
        postcode: "AB24 1UX",
        latitude: "57.16827458",
        longitude: "-2.094799"
    },
    {
        postcode: "AB24 1UY",
        latitude: "57.17011424",
        longitude: "-2.096936651"
    },
    {
        postcode: "AB24 1UZ",
        latitude: "57.17052822",
        longitude: "-2.095615"
    },
    {
        postcode: "AB24 1WA",
        latitude: "57.16669806",
        longitude: "-2.088379091"
    },
    {
        postcode: "AB24 1WB",
        latitude: "57.168736",
        longitude: "-2.090203181"
    },
    {
        postcode: "AB24 1WD",
        latitude: "57.16884369",
        longitude: "-2.090203181"
    },
    {
        postcode: "AB24 1WE",
        latitude: "57.16810766",
        longitude: "-2.089407673"
    },
    {
        postcode: "AB24 1WF",
        latitude: "57.167991",
        longitude: "-2.089407673"
    },
    {
        postcode: "AB24 1WG",
        latitude: "57.16728166",
        longitude: "-2.088793869"
    },
    {
        postcode: "AB24 1WH",
        latitude: "57.167416",
        longitude: "-2.088959"
    },
    {
        postcode: "AB24 1WS",
        latitude: "57.17333145",
        longitude: "-2.095241684"
    },
    {
        postcode: "AB24 1WT",
        latitude: "57.172568",
        longitude: "-2.094843205"
    },
    {
        postcode: "AB24 1WU",
        latitude: "57.175265",
        longitude: "-2.103417"
    },
    {
        postcode: "AB24 1XA",
        latitude: "57.16902115",
        longitude: "-2.093213174"
    },
    {
        postcode: "AB24 1XB",
        latitude: "57.16752076",
        longitude: "-2.09352356"
    },
    {
        postcode: "AB24 1XD",
        latitude: "57.1677984",
        longitude: "-2.094632141"
    },
    {
        postcode: "AB24 1XE",
        latitude: "57.1700265",
        longitude: "-2.0942079"
    },
    {
        postcode: "AB24 1XF",
        latitude: "57.17130229",
        longitude: "-2.093930024"
    },
    {
        postcode: "AB24 1XG",
        latitude: "57.17187766",
        longitude: "-2.093319607"
    },
    {
        postcode: "AB24 1XH",
        latitude: "57.16952445",
        longitude: "-2.092867182"
    },
    {
        postcode: "AB24 1XJ",
        latitude: "57.16906756",
        longitude: "-2.091179355"
    },
    {
        postcode: "AB24 1XL",
        latitude: "57.167382",
        longitude: "-2.086479"
    },
    {
        postcode: "AB24 1XN",
        latitude: "57.17373858",
        longitude: "-2.091356269"
    },
    {
        postcode: "AB24 1XP",
        latitude: "57.17741512",
        longitude: "-2.099850277"
    },
    {
        postcode: "AB24 1XQ",
        latitude: "57.17131005",
        longitude: "-2.095550676"
    },
    {
        postcode: "AB24 1XR",
        latitude: "57.175539",
        longitude: "-2.098174771"
    },
    {
        postcode: "AB24 1XS",
        latitude: "57.17460425",
        longitude: "-2.098833828"
    },
    {
        postcode: "AB24 1XT",
        latitude: "57.17253387",
        longitude: "-2.092709373"
    },
    {
        postcode: "AB24 1XU",
        latitude: "57.17222923",
        longitude: "-2.09165021"
    },
    {
        postcode: "AB24 1XW",
        latitude: "57.16595932",
        longitude: "-2.091353565"
    },
    {
        postcode: "AB24 1XX",
        latitude: "57.16602447",
        longitude: "-2.088857"
    },
    {
        postcode: "AB24 1XZ",
        latitude: "57.17346744",
        longitude: "-2.093439"
    },
    {
        postcode: "AB24 1YA",
        latitude: "57.17118617",
        longitude: "-2.093053267"
    },
    {
        postcode: "AB24 1ZS",
        latitude: "57.16472955",
        longitude: "-2.090110465"
    },
    {
        postcode: "AB24 2AA",
        latitude: "57.16630644",
        longitude: "-2.116834597"
    },
    {
        postcode: "AB24 2AB",
        latitude: "57.16678107",
        longitude: "-2.118390391"
    },
    {
        postcode: "AB24 2AE",
        latitude: "57.16769519",
        longitude: "-2.120642141"
    },
    {
        postcode: "AB24 2AH",
        latitude: "57.1683316",
        longitude: "-2.122066291"
    },
    {
        postcode: "AB24 2AS",
        latitude: "57.16936469",
        longitude: "-2.122020094"
    },
    {
        postcode: "AB24 2AX",
        latitude: "57.17033362",
        longitude: "-2.123280077"
    },
    {
        postcode: "AB24 2BA",
        latitude: "57.17093326",
        longitude: "-2.125994"
    },
    {
        postcode: "AB24 2BD",
        latitude: "57.17102999",
        longitude: "-2.127582005"
    },
    {
        postcode: "AB24 2BE",
        latitude: "57.16701527",
        longitude: "-2.1177132"
    },
    {
        postcode: "AB24 2BG",
        latitude: "57.17311631",
        longitude: "-2.142159077"
    },
    {
        postcode: "AB24 2BH",
        latitude: "57.17171279",
        longitude: "-2.127485138"
    },
    {
        postcode: "AB24 2BL",
        latitude: "57.17239409",
        longitude: "-2.128860105"
    },
    {
        postcode: "AB24 2BP",
        latitude: "57.173159",
        longitude: "-2.143945825"
    },
    {
        postcode: "AB24 2BQ",
        latitude: "57.17236831",
        longitude: "-2.144273007"
    },
    {
        postcode: "AB24 2BR",
        latitude: "57.17300289",
        longitude: "-2.147616"
    },
    {
        postcode: "AB24 2BT",
        latitude: "57.17225524",
        longitude: "-2.141014679"
    },
    {
        postcode: "AB24 2BX",
        latitude: "57.17228715",
        longitude: "-2.137145"
    },
    {
        postcode: "AB24 2DB",
        latitude: "57.17186918",
        longitude: "-2.13259571"
    },
    {
        postcode: "AB24 2DD",
        latitude: "57.17155709",
        longitude: "-2.130395145"
    },
    {
        postcode: "AB24 2DU",
        latitude: "57.172375",
        longitude: "-2.138171"
    },
    {
        postcode: "AB24 2DY",
        latitude: "57.17206391",
        longitude: "-2.135308543"
    },
    {
        postcode: "AB24 2EE",
        latitude: "57.17131646",
        longitude: "-2.128542144"
    },
    {
        postcode: "AB24 2EH",
        latitude: "57.170788",
        longitude: "-2.127151892"
    },
    {
        postcode: "AB24 2EU",
        latitude: "57.17055611",
        longitude: "-2.125380984"
    },
    {
        postcode: "AB24 2EW",
        latitude: "57.17042003",
        longitude: "-2.126703456"
    },
    {
        postcode: "AB24 2FF",
        latitude: "57.17121739",
        longitude: "-2.109937645"
    },
    {
        postcode: "AB24 2GE",
        latitude: "57.17293776",
        longitude: "-2.14118266"
    },
    {
        postcode: "AB24 2GF",
        latitude: "57.17293081",
        longitude: "-2.139363476"
    },
    {
        postcode: "AB24 2GG",
        latitude: "57.17260587",
        longitude: "-2.132515664"
    },
    {
        postcode: "AB24 2GH",
        latitude: "57.17282654",
        longitude: "-2.13615476"
    }
];


/***/ }),

/***/ "./src/app/sellermatches/sellermatches.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sellermatches/sellermatches.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\n{\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.thanku-section {\n    background-color: white;\n    \n}\n.thanku-p-section\n{\n    font-size: 13px;\n    text-align: center;\n    padding: 18px;\n}\n.match-section\n{\n    padding-right: 8px;\n    padding-left: 8px;\n    height: 150px;\n    background-color: white;\n    display: flex;\n    justify-content: flex-start;\n    /* align-content: flex-start; */\n    align-content: flex-start;\n    align-items: flex-start;\n}\n.match-images {\n    margin-top: 18px;\n    margin-right: 9px;\n    width: 33%;\n}\n.match-content {\n    padding-top: 26px;\n}\n/*===========================================================================================================\nFont-sizes\n=============================================================================================================*/\n.area-p\n{\n    font-size: 18px;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n}\n.discription-p\n{\n    font-size: 15px;\n    font-family: 'Segoe UI Regular';\n}\n.property-type-color{\n    color: #8BB440;\n}\n.font-headings\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bold;\n    font-size: 21px;\n    text-transform: capitalize;\n}\n.thanku-p-section\n{\n    font-family: 'Roboto', sans-serif;\n    font-weight: medium;\n    color: black;\n    font-size: 14px;\n}\n.main-heading\n{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 400;\n    font-size: 24px;\n}\n@media screen and (max-width:375px)\n{\n    .match-images {\n        /* margin-top: 14px; */\n        margin-right: 9px;\n        width: 34%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVybWF0Y2hlcy9zZWxsZXJtYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7OzhHQUU4RztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBVUE7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVybWF0Y2hlcy9zZWxsZXJtYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxue1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi50aGFua3Utc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgXG59XG4udGhhbmt1LXAtc2VjdGlvblxue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMThweDtcbn1cbi5tYXRjaC1zZWN0aW9uXG57XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLyogYWxpZ24tY29udGVudDogZmxleC1zdGFydDsgKi9cbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1hdGNoLWltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICB3aWR0aDogMzMlO1xufVxuLm1hdGNoLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRm9udC1zaXplc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uYXJlYS1wXG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXNjcmlwdGlvbi1wXG57XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XG59XG4ucHJvcGVydHktdHlwZS1jb2xvcntcbiAgICBjb2xvcjogIzhCQjQ0MDtcbn1cbi5mb250LWhlYWRpbmdzXG57XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50aGFua3UtcC1zZWN0aW9uXG57XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluLWhlYWRpbmdcbntcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxue1xuICAgIC5tYXRjaC1pbWFnZXMge1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiAxNHB4OyAqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICAgICAgd2lkdGg6IDM0JTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/sellermatches/sellermatches.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sellermatches/sellermatches.component.ts ***!
  \**********************************************************/
/*! exports provided: SellermatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellermatchesComponent", function() { return SellermatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sellermatches_sellermatches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sellermatches/sellermatches.service */ "./src/app/sellermatches/sellermatches.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-service.service */ "./src/app/state-service.service.ts");




let SellermatchesComponent = class SellermatchesComponent {
    constructor(SellermatchesService, stateService) {
        this.SellermatchesService = SellermatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details
        this.SellermatchesService.getSellerProperties(this.uid).subscribe(res => {
            res.forEach(item => {
                if (item.data().postcode == this.stateService.Seller.postcode) {
                    this.matchedProperties.push(item.data()); //Use this object to populate html
                }
                else if (item.data().postcode.latitude &&
                    item.data().postcode.longitude) {
                    console.log(item.data().postcode.latitude);
                    this.distanceInKm = this.getDistanceFromLatLonInKm(this.stateService.Seller.postcode.latitude, this.stateService.Seller.postcode.longitude, item.data().postcode.latitude, item.data().postcode.longitude);
                    this.unmatchedProperties.push({
                        detail: item.data(),
                        distance: this.distanceInKm
                    });
                    console.log({ detail: item.data(), distance: this.distanceInKm });
                }
                else {
                    this.unmatchedProperties.push(item.data());
                    console.log({ detail: item.data() });
                }
            });
            console.log(this.matchedProperties);
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
                Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
SellermatchesComponent.ctorParameters = () => [
    { type: _sellermatches_sellermatches_service__WEBPACK_IMPORTED_MODULE_2__["SellermatchesService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] }
];
SellermatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sellermatches",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sellermatches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sellermatches.component.css */ "./src/app/sellermatches/sellermatches.component.css")).default]
    })
], SellermatchesComponent);



/***/ }),

/***/ "./src/app/sellermatches/sellermatches.service.ts":
/*!********************************************************!*\
  !*** ./src/app/sellermatches/sellermatches.service.ts ***!
  \********************************************************/
/*! exports provided: SellermatchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellermatchesService", function() { return SellermatchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let SellermatchesService = class SellermatchesService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Buyer");
        // Collection Group
        this.propertiesRef = db.collectionGroup("requirements");
    }
    getSellerProperties(uid) {
        return this.propertiesRef.get();
    }
};
SellermatchesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SellermatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SellermatchesService);



/***/ }),

/***/ "./src/app/state-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/state-service.service.ts ***!
  \******************************************/
/*! exports provided: StateServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateServiceService", function() { return StateServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StateServiceService = class StateServiceService {
    constructor() { }
};
StateServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], StateServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\God\Desktop\streethok\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);