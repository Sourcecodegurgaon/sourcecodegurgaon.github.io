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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\n  <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n  <div class=\"social-button mt-4\">\n    <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\n      Facebook\n    </button>\n    <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\n      Google+\n    </button>\n  </div>\n  <div class=\"input-group mb-3 mt-3\">\n\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\n    </mat-form-field>\n\n  </div>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\n  </mat-form-field>\n\n  <div class=\"input-group-prepend other-option\">\n    <label class=\"checkbox\">\n      <input type=\"checkbox\" value=\"remember-me\" />Remember Me\n    </label>\n    <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\n  </div>\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\n    Login\n  </button>\n  <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\n    Sign Up\n  </button>\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\n  <mat-tab-group #matgroup class=\"form-tab-conatiner\">\n    <mat-tab label=\"Personal Details \" class=\"tabs-align-padding\">\n      <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\n        <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\n        <p class=\"forms-star\">*required</p>\n\n\n        <mat-form-field>\n          <mat-label>Title*</mat-label>\n          <mat-select name=\"title\" [(ngModel)]=\"Buyer.title\" class=\"drop-down-list\">\n            <mat-option value=\"Mr\">Mr</mat-option>\n            <mat-option value=\"Ms\">Ms</mat-option>\n            <mat-option value=\"Mrs\">Mrs</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"First Name\" [formControl]=\"firstnameFormControl\" id=\"name\" required\n            [(ngModel)]=\"Buyer.firstname\" name=\"First\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"firstnameFormControl.hasError('First Name') && !firstnameFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"firstnameFormControl.hasError('required')\">\n            FirstName is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"LastName\" [formControl]=\"lastnameFormControl\" id=\"name\" required\n            [(ngModel)]=\"Buyer.Lastname\" name=\"Last\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"lastnameFormControl.hasError('LastName') && !lastnameFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"lastnameFormControl.hasError('required')\">\n            LastName is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" id=\"name\" [(ngModel)]=\"Buyer.Email\"\n            name=\"Email\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\" id=\"name\" required\n            [(ngModel)]=\"Buyer.DOB\" name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Financial Position*</mat-label>\n          <mat-select name=\"FinancialPosition\" [(ngModel)]=\"Buyer.FinancialPosition\" value=\"FinancialPosition\"\n            class=\"example-full-width\">\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\n            <mat-option value=\"Mortgage to be Arranged\">Mortgage to be Arranged</mat-option>\n            <mat-option value=\"Mortgage Arrange\">Mortgage Arrange</mat-option>\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Chain Status*</mat-label>\n          <mat-select name=\"ChainStatus\" [(ngModel)]=\"Buyer.ChainStatus\" value=\"ChainStatus\" class=\"example-full-width\">\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\n            <mat-option value=\"In Chain(Sellinng to buy)\">In Chain(Sellinng to buy)</mat-option>\n            <mat-option value=\"Chain-Free\">Chain-Free</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <div class=\"button-next\">\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n        </div>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Property Details\" class=\"tabs-align-padding\">\n      <div class=\"tabs-align-padding\">\n\n        <!-- <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Postcode\" aria-label=\"Postcode\" [matAutocomplete]=\"auto\"\n            [formControl]=\"postcodeCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let postcode of filteredPostcodes | async\" [value]=\"postcode.name\">\n              <span>{{postcode.name}}</span> |\n              <small>Population: {{postcode.population}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n\n        <!-- <hr> -->\n\n        <p>Search by Address</p>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" [(ngModel)]=\"Buyer.Address\"\n            name=\"Addressname\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\n            Please enter a valid address\n          </mat-error>\n          <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\n            Address is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Buyer.Town\"\n            name=\"Towncity\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\n            Please enter a valid Town/City\n          </mat-error>\n          <mat-error *ngIf=\"TownFormControl.hasError('required')\">\n            Town/City is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"State/Provience/Country\" [formControl]=\"stateFormControl\" required\n            [(ngModel)]=\"Buyer.state\" name=\"state\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error\n            *ngIf=\"stateFormControl.hasError('State/Provience/Country') && !stateFormControl.hasError('required')\">\n            Please enter a valid State/Provience/Country\n          </mat-error>\n          <mat-error *ngIf=\"stateFormControl.hasError('required')\">\n            State/Provience/Country is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Postcode\" [formControl]=\"postcodeFormControl\" [(ngModel)]=\"Buyer.postcode\"\n            name=\"postcode\" id=\"name\" class=\"mat-mail-input\" [matAutocomplete]=\"auto\"  aria-label=\"Number\"> \n          \n            <mat-autocomplete #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n                <span>{{state.name}}</span> \n              </mat-option>\n            </mat-autocomplete>\n          <mat-error *ngIf=\"postcodeFormControl.hasError('Postcode') && !postcodeFormControl.hasError('required')\">\n            Please enter a valid Postcode\n          </mat-error>\n          <mat-error *ngIf=\"postcodeFormControl.hasError('required')\">\n            Postcode is <strong>required</strong>\n          </mat-error>\n\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Country*</mat-label>\n          <mat-select name=\"Country\" [(ngModel)]=\"Buyer.Country\" value=\"Country\" class=\"example-full-width\">\n            <mat-option value=\"Austria\">Austria</mat-option>\n            <mat-option value=\"India\">India</mat-option>\n            <mat-option value=\"USA\">USA</mat-option>\n            <mat-option value=\"Germany\">Germany</mat-option>\n            <mat-option value=\"France\">France</mat-option>\n            <mat-option value=\"Iataly\">Iataly</mat-option>\n            <mat-option value=\"Spain\">Spain</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Address Name\" [formControl]=\"addressnameFormControl\"\n            [(ngModel)]=\"Buyer.addressname\" name=\"addressname\" id=\"name\" class=\"mat-mail-input\">\n          <mat-error\n            *ngIf=\"addressnameFormControl.hasError('Address Name') && !addressnameFormControl.hasError('required')\">\n            Please enter a valid Address Name\n          </mat-error>\n          <mat-error *ngIf=\"addressnameFormControl.hasError('required')\">\n            Address Name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n\n        <div class=\"form-group\">\n          <label for=\"pwd\">Search Radius (KM)</label>\n          <mat-slider [(ngModel)]=\"Buyer.SearchRadius\" name=\"SearchRadius\" style=\"width: 100%\" min=\"5\" max=\"50\"\n            step=\"0.5\" thumbLabel tickInterval=\"1\">\n            <label for=\"pwd\">Search Radius</label>\n          </mat-slider>\n        </div>\n\n\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Property type*</mat-label>\n          <mat-select name=\"Propertytype\" [(ngModel)]=\"Buyer.Propertytype\" value=\"Propertytype\"\n            class=\"example-full-width\">\n            <mat-option value=\"Flat\">Flat</mat-option>\n            <mat-option value=\"Cottage\">Cottage</mat-option>\n            <mat-option value=\"Studio\">Studio</mat-option>\n            <mat-option value=\"Lodge\">Lodge</mat-option>\n            <mat-option value=\"Farm\">Farm</mat-option>\n            <mat-option value=\"Town House\">Town House</mat-option>\n            <mat-option value=\"Maisonette\">Maisonette</mat-option>\n            <mat-option value=\"Bungalow\">Bungalow</mat-option>\n            <mat-option value=\"Farmhouse\">Farmhouse</mat-option>\n            <mat-option value=\"Mews House\">Mews House</mat-option>\n            <mat-option value=\"Houseboat\">Houseboat</mat-option>\n            <mat-option value=\"Country house\">Country house</mat-option>\n            <mat-option value=\"Detached house\">Detached house</mat-option>\n            <mat-option value=\"Barn conversion\">Barn conversion</mat-option>\n            <mat-option value=\"Terraced House\">Terraced House</mat-option>\n            <mat-option value=\"Terraced Bungalow\">Terraced Bungalow</mat-option>\n            <mat-option value=\"Equestrian Property\">Equestrian Property</mat-option>\n            <mat-option value=\"End Terrace House\">End Terrace House</mat-option>\n            <mat-option value=\"Detached bungalow\">Detached bungalow</mat-option>\n\n            <mat-option value=\"Link-Detached House\">Link-Detached House</mat-option>\n            <mat-option value=\"Barn conversion/farmhouse\">Barn conversion/farmhouse</mat-option>\n            <mat-option value=\"Semi-Detached Bungalow\">Semi-Detached Bungalow</mat-option>\n            <mat-option value=\"Mobile/Park Home\">Mobile/Park Home</mat-option>\n            <mat-option value=\"Semi-Detached House\">Semi-Detached House</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <div class=\" mt-4\">\n          <label for=\"pwd\">Price Range (Offer) *</label>\n          <mat-slider style=\"width: 100%\" name=\"PriceRange\" [(ngModel)]=\"Buyer.PriceRange\" min=\"20\" max=\"120\" step=\"0.5\"\n            value=\"1.5\" thumbLabel tickInterval=\"1\">\n          </mat-slider>\n        </div>\n\n\n\n\n        <mat-radio-group aria-label=\"Select an option\" name=\"Validity\" [(ngModel)]=\"Buyer.Validity\" value=\"Validity\">\n          <label>Offer Validity:</label>\n          <mat-radio-button class=\"col-12\" value=\"0-2Months\">0-2Months</mat-radio-button>\n          <mat-radio-button value=\"2-6Months\" class=\"col-12\">2-6Months</mat-radio-button>\n        </mat-radio-group>\n\n\n\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Buyer.Condition\" name=\"Condition\">\n          <label>Property Condition:</label>\n          <mat-radio-button value=\"NewlyRefurbished\" class=\"col-12\">Newly Refurbished</mat-radio-button>\n          <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\n\n          <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\n\n          <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\n        </mat-radio-group>\n\n\n\n\n        <div class=\"button-next-tab2\">\n          <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\n          <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n        </div>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Optional Details\">\n      <div class=\"tabs-align-padding\">\n        <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\n\n        <mat-form-field class=\"example-full-width mt-4\">\n          <mat-label>Type*</mat-label>\n          <mat-select name=\"Type\" name=\"Type\" [(ngModel)]=\"Buyer.Type\" class=\"example-full-width\">\n            <mat-option value=\"Buying to Live\">Buying to Live</mat-option>\n            <mat-option value=\"Buying as Investment\">Buying as Investment</mat-option>\n            <mat-option value=\"Buying to Let\">Buying to Let</mat-option>\n\n          </mat-select>\n        </mat-form-field>\n\n\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Position*</mat-label>\n          <mat-select name=\"Position\" [(ngModel)]=\"Buyer.Position\" value=\"Position\" class=\"example-full-width\">\n            <mat-option value=\"Cash Buyer\">Cash Buyer</mat-option>\n            <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\n            <mat-option value=\"Selling To Move\">Selling To Move</mat-option>\n            <mat-option value=\"Mortgage To be Arranged\">Mortgage To be Arranged</mat-option>\n            <mat-option value=\"Mortgage Arranged\">Mortgage Arranged</mat-option>\n            <mat-option value=\"Mortgage Free\">Mortgage Free</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"button-next-tab2\">\n          <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\n          <button class=\"btn btn-primary btnNext btn-next\" type=\"submit\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</form>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\n\n  <div class=\"thanku-section\">\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\n      and we will share your property details with all the\n      interested buyers in you area</p>\n\n  </div>\n  <section id=\"matchproperties\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Properties</h3>\n    <div class=\"match-section\" routerLink='/selectedpropertydetail' *ngFor=\"let property of matchedProperties\">\n      <img src=\"assets/Images/download.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">{{ property.Addressname }}</span><br>\n          <span class=\"discription-p\"> No. of Rooms:{{property.norooms}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.PropertyType}}</span><br>\n          <span class=\"discription-p\">Post Code: {{property.postcode}}</span></p>\n      </div>\n    </div>\n\n  </section>\n\n  <!-- <section id=\"youmaylike\">\n                <h3 class=\"mt-3 mb-3 font-headings\">Other Properties you may Like</h3>\n            \n                <div class=\"match-section\">\n                        <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n                        <div class=\"match-content\">\n                                <p><span class=\"area-p\">Green Park</span><br>\n                                        <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n                                        <span class=\"discription-p property-type-color\">Type of Property:\n                                                Home</span><br>\n                                        <span class=\"discription-p\">Post Code: SW5101</span></p>\n                        </div>\n                </div> -->\n  <!--Second-->\n  <!-- <div class=\"match-section mt-3\">\n                        <img src=\"assets/Images/02102015113614AM1914835512@635793825792031250.png\"\n                                class=\"match-images float-left\">\n                        <div class=\"match-content\">\n                                <p><span class=\"area-p\">Hyde Park</span><br>\n                                        <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n                                        <span class=\"discription-p property-type-color\">Type of Property:\n                                                Flat</span><br>\n                                        <span class=\"discription-p\">Post Code: NW7W25 </span></p>\n                        </div>\n                </div>\n              \n                <div class=\"match-section mt-3\">\n                        <img src=\"assets/Images/GatewayApartments.png\"\n                                class=\"match-images float-left\">\n                        <div class=\"match-content\">\n                                <p><span class=\"area-p\">Green Park</span><br>\n                                        <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n                                        <span class=\"discription-p property-type-color\">Type of Property:\n                                                Flat</span><br>\n                                        <span class=\"discription-p\">Post Code: W25R43</span></p>\n                        </div>\n                </div>\n\n\n        </section> -->\n\n  <section id=\"propertyinlondon\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Other Properties in London</h3>\n    <!--First-section-->\n    <div class=\"match-section\">\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">Hyde Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Home</span><br>\n          <span class=\"discription-p\">Post Code: SW5101</span></p>\n      </div>\n    </div>\n    <!--Second-->\n    <div class=\"match-section mt-3\">\n      <img src=\"assets/Images/02102015113614AM1914835512@635793825792031250.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">Hyde Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: NW7W25 </span></p>\n      </div>\n    </div>\n    <!--Third-->\n    <div class=\"match-section mt-3 mb-4\">\n      <img src=\"assets/Images/avatar_96978a54ef2d_128.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p><span class=\"area-p\">Green Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: W25R43</span></p>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n  </section>\n\n\n\n\n\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\n<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"container forms-container\">\n  <div class=\"row\">\n    <section class=\"col\">\n      <div class=\"social-login text-center  p-2\" *ngIf=\"!isLoggedIn\">\n        <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\n        <div class=\"social-button mt-4\">\n          <button type=\"button\" class=\"btn btn-facebook \" (click)=\"authService.FacebookAuth()\">\n            Facebook\n          </button>\n          <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">\n            Google+\n          </button>\n        </div>\n        <div class=\"input-group mb-3 mt-3\">\n       \n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Enter email\" #userEmail></textarea>\n          </mat-form-field>\n          \n        </div>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Leave a comment\" placeholder=\"Password\" #userPassword></textarea>\n        </mat-form-field>\n\n        <div class=\"input-group-prepend other-option\">\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" value=\"remember-me\" />Remember Me\n          </label>\n          <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\n        </div>\n        <button type=\"button\" class=\"btn btn-social-login\"\n          (click)=\"authService.SignIn(userEmail.value, userPassword.value)\">\n          Login\n        </button>\n        <button type=\"button\" class=\"btn btn-social-login\"\n          (click)=\"authService.SignUp(userEmail.value, userPassword.value)\">\n          Sign Up\n        </button>\n      </div>\n\n\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\n        <mat-tab-group #matgroup class=\"form-tab-conatiner\" mat-align-tabs=\"center\">\n          <mat-tab label=\"Personal Details\">\n            <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\n              <h4 class=\"mt-4 forms-heading\">Personal Details</h4>\n              <p class=\"forms-star\">*required</p>\n\n\n              <mat-form-field>\n                <mat-label>Title*</mat-label>\n                <mat-select name=\"title\" [(ngModel)]=\"Seller.Title\" Value=\"Title\" class=\"drop-down-list\">\n                  <mat-option value=\"Mr\">Mr</mat-option>\n                  <mat-option value=\"Ms\">Ms</mat-option>\n                  <mat-option value=\"Mrs\">Mrs</mat-option>\n\n                </mat-select>\n              </mat-form-field>\n\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"First Name\" [formControl]=\"FirstnameFormControl\"\n                    [(ngModel)]=\"Seller.Firstname\" name=\"First\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"FirstnameFormControl.hasError('First Name') && !FirstnameFormControl.hasError('required')\">\n                    Please enter a valid name\n                  </mat-error>\n                  <mat-error *ngIf=\"FirstnameFormControl.hasError('required')\">\n                    FirstName is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"LastName\" [formControl]=\"LastnameFormControl\" id=\"name\"\n                    [(ngModel)]=\"Seller.Lastname\" name=\"Last\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"LastnameFormControl.hasError('LastName') && !LastnameFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"LastnameFormControl.hasError('required')\">\n                    LastName is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Email Address*\" [formControl]=\"EmailFormControl\" id=\"name\"\n                    [(ngModel)]=\"Seller.Email\" name=\"Email\" class=\"mat-mail-input\">\n                  <mat-error\n                    *ngIf=\"EmailFormControl.hasError('Email Address*') && !EmailFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"EmailFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              </form>\n\n\n              <mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth*\" [formControl]=\"DOBFormControl\" id=\"name\" [(ngModel)]=\"Seller.DOB\"\n                  name=\"DOB\" class=\"mat-mail-input\" class=\"example-full-width\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <mat-error\n                    *ngIf=\"DOBFormControl.hasError('DOB') && !DOBFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"DOBFormControl.hasError('required')\">\n                    DOB is <strong>required</strong>\n                  </mat-error>\n              </mat-form-field>\n\n\n              <div class=\"form-group\" *ngIf=\"!isLoggedIn\">\n                <label for=\"pwd\">Enter A Password*</label>\n                <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"Seller.Password\" name=\"Password\"\n                  required />\n              </div>\n              <div class=\"form-group\" *ngIf=\"!isLoggedIn\">\n                <label for=\"pwd\">Enter Password Again*</label>\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"Seller.Confirm\" name=\"Confirm\" required />\n              </div>\n              <ul class=\"submit-button\">\n                <div class=\"button-next\">\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n                </div>\n              </ul>\n            </div>\n          </mat-tab>\n\n          <mat-tab label=\"Property Details\">\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step2\">\n              <div class=\"seller-form-upper\">\n                <p>\n                  Property Enquiry<br />\n                  <span>Please fill the form below to list your property</span>\n                </p>\n                <hr class=\"top-hr\" />\n              </div>\n              <div class=\" container  forms-container\">\n                <p>Search by Address</p>\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\"\n                      [(ngModel)]=\"Seller.Address\" name=\"Address\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\n                      Please enter a valid address\n                    </mat-error>\n                    <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\n                      Address is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"Seller.Town\"\n                      name=\"Town\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error *ngIf=\"TownFormControl.hasError('Town/City') && !TownFormControl.hasError('required')\">\n                      Please enter a valid Town/City\n                    </mat-error>\n                    <mat-error *ngIf=\"TownFormControl.hasError('required')\">\n                      Town/City is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"State/Provience/Country\" [formControl]=\"stateFormControl\"\n                      [(ngModel)]=\"Seller.state\" name=\"state\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"stateFormControl.hasError('State/Provience/Country') && !stateFormControl.hasError('required')\">\n                      Please enter a valid State/Provience/Country\n                    </mat-error>\n                    <mat-error *ngIf=\"stateFormControl.hasError('required')\">\n                      State/Provience/Country is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Postcode\" [formControl]=\"postcodeFormControl\"\n                      [(ngModel)]=\"Seller.postcode\" name=\"postcode\" id=\"name\" class=\"mat-mail-input\" [matAutocomplete]=\"auto\"  aria-label=\"Number\">\n                      <mat-autocomplete #auto=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n                          <span>{{state.name}}</span> \n                        </mat-option>\n                      </mat-autocomplete>\n                    <mat-error\n                      *ngIf=\"postcodeFormControl.hasError('Postcode') && !postcodeFormControl.hasError('required')\">\n                      Please enter a valid Postcode\n                    </mat-error>\n                    <mat-error *ngIf=\"postcodeFormControl.hasError('required')\">\n                      Postcode is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Country*</mat-label>\n                  <mat-select name=\"Country\" [(ngModel)]=\"Seller.Country\" value=\"Country\" class=\"example-full-width\">\n                    <mat-option value=\"Austria\">Austria</mat-option>\n                    <mat-option value=\"India\">India</mat-option>\n                    <mat-option value=\"USA\">USA</mat-option>\n                    <mat-option value=\"Germany\">Germany</mat-option>\n                    <mat-option value=\"France\">France</mat-option>\n                    <mat-option value=\"Iataly\">Iataly</mat-option>\n                    <mat-option value=\"Spain\">Spain</mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <label for=\"text\" class=\" \">Property Type*:</label>\n                <section class=\"example-section\" [(ngModel)]=\"Seller.PropertyType\" name=\"PropertyType\"\n                  value=\"PropertyType\">\n\n                  <mat-checkbox class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Detached House\">Detached House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Masionette\">Masionette</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Semi Detached House\">Semi Detached House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"End Of Terrace House\">End Of Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Purpose-Built Flat\">Purpose-Built Flat</mat-checkbox>\n                </section>\n\n\n\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Address Name\" [formControl]=\"addressnameFormControl\"\n                      [(ngModel)]=\"Seller.Addressname\" name=\"addressname\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"addressnameFormControl.hasError('Address Name') && !addressnameFormControl.hasError('required')\">\n                      Please enter a valid Address Name\n                    </mat-error>\n                    <mat-error *ngIf=\"addressnameFormControl.hasError('required')\">\n                      Address Name is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n                <form class=\"example-form\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Number of Rooms\" [formControl]=\"noroomsFormControl\"\n                      [(ngModel)]=\"Seller.norooms\" name=\"norooms\" id=\"name\" class=\"mat-mail-input\">\n                    <mat-error\n                      *ngIf=\"noroomsFormControl.hasError('Number of Rooms') && !noroomsFormControl.hasError('required')\">\n                      Please enter a valid Number of Rooms\n                    </mat-error>\n                    <mat-error *ngIf=\"noroomsFormControl.hasError('required')\">\n                      Number of Rooms is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                </form>\n\n\n\n\n\n                <div class=\"\">\n                  <label for=\"pwd\">Expected Amount (Offer) *</label>\n                  <mat-slider style=\"width: 100%\" name=\"ExpectedAmount\" [(ngModel)]=\"Seller.ExpectedAmount\" min=\"0\"\n                    max=\"1000000\" step=\"1000\" value=\"50000\" thumbLabel tickInterval=\"1\">\n                  </mat-slider>\n                </div>\n\n\n                <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"Seller.PropertyCondition\"\n                  name=\"PropertyCondition\">\n                  <label>Property Condition:</label>\n                  <mat-radio-button value=\"NewlyRefurbished\" class=\"col-12\">Newly Refurbished</mat-radio-button>\n                  <mat-radio-button value=\"Refurbished\" class=\"col-12\">Refurbished</mat-radio-button>\n\n                  <mat-radio-button value=\"New Build\" class=\"col-12\">New Build</mat-radio-button>\n\n                  <mat-radio-button value=\"Needs modernisation\" class=\"col-12\">Needs modernisation</mat-radio-button>\n                </mat-radio-group>\n\n                <mat-form-field class=\"example-full-width\">\n                  <mat-label>Ownership:</mat-label>\n                  <mat-select name=\"ownership\" [(ngModel)]=\"Seller.ownership\" value=\"ownership\"\n                    class=\"example-full-width\">\n                    <mat-option value=\"Freehold\">Freehold</mat-option>\n                    <mat-option value=\"Leasehold\">Leasehold</mat-option>\n                    <mat-option value=\"Share of Freehold\">Share of Freehold</mat-option>\n\n\n                  </mat-select>\n                </mat-form-field>\n\n                <label for=\"text\" class=\" \">Select the Applicable Features:</label>\n                <section class=\"example-section\" [(ngModel)]=\"Seller.ApplicableFeatures\" name=\"ApplicableFeatures\"\n                  value=\"ApplicableFeatures\">\n\n                  <mat-checkbox class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Driveway\">Driveway</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Period features\">Period features</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Garage\">Garage</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Wheelchair friendly\">Wheelchair friendly</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"Gated community\">Gated community</mat-checkbox>\n                  <mat-checkbox class=\"example-margin\" value=\"External Rear Garden\">External Rear Garden</mat-checkbox>\n                </section>\n\n\n\n\n          \n\n                <div class=\"button-next-tab2\">\n                  <a (click)=\"matgroup.selectedIndex = 0\" class=\"btn  btnPrevious btn-next\">Previous</a>\n                  <a (click)=\"matgroup.selectedIndex = 2\" class=\"btn btn-primary btnNext btn-next\">Next</a>\n                </div>\n              </div>\n            </div>\n             \n          </mat-tab>\n\n          <mat-tab label=\"Optional Details\">\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step3\">\n              <div class=\"seller-form-upper\">\n                <p>\n                  List Your Property<br />\n                  <span>Please fill the form below to list your property</span>\n                </p>\n                <hr class=\"top-hr\" />\n              </div>\n              <h4 class=\"mt-4 forms-heading\">Optional Details</h4>\n\n              <div class=\"forms-container\">\n                <p class=\"mt-4 forms-heading-optional\">\n                  Upload Property Images*\n                </p>\n\n                <div class=\"col-4 frmCaption\">Image 1*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 2*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 3*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"col-4 frmCaption\">Image 4*</div>\n                <div class=\"col-12\">\n                  <label class=\"customUpload btnUpload btnM\">\n                    <span>Choose files</span>\n\n                    <input type=\"file\" class=\"upload\" />\n                  </label>\n                </div>\n                <div class=\"button-next-tab2\">\n                  <a (click)=\"matgroup.selectedIndex = 1\" class=\"btn  btnPrevious btn-next\">Previous</a>\n                  <button class=\"btn btn-primary btnNext btn-next\" (click)=\"onSubmit\">\n                    Submit\n                  </button>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n        </mat-tab-group>\n      </form>\n    </section>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellermatches/sellermatches.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">3</span> Matches</p>\n\n  <div class=\"thanku-section\">\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\n      and we will share your property details with all the\n      interested buyers in you area</p>\n\n  </div>\n  <section class=\"\" id=\"matchproperties\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Matched Buyers</h3>\n    <div class=\"match-section\" *ngFor=\"let property of matchedProperties\">\n      <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">{{property.addressname}}</span><br>\n          <span class=\"discription-p\"> Serach Radius:{{property.SearchRadius}}</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            {{property.Propertytype}}</span><br>\n          <span class=\"discription-p\">Post Code: {{property.postcode}}</span></p>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"youmaylike\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Buyers with similar requirement</h3>\n    <!--First-section-->\n    <div class=\"match-section\">\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'><span class=\"area-p\">Green Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Home</span><br>\n          <span class=\"discription-p\">Post Code: SW5101</span></p>\n      </div>\n    </div>\n    <!--Second-->\n    <div class=\"match-section mt-3\">\n      <img src=\"assets/Images/02102015113614AM1914835512@635793825792031250.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">Hyde Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: NW7W25 </span></p>\n      </div>\n    </div>\n    <!--Third-->\n    <div class=\"match-section mt-3\">\n      <img src=\"assets/Images/GatewayApartments.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">Green Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: W25R43</span></p>\n      </div>\n    </div>\n\n\n  </section>\n\n  <section id=\"propertyinlondon\">\n    <h3 class=\"mt-3 mb-3 font-headings\">Other Buyers in Your Area</h3>\n    <!--First-section-->\n    <div class=\"match-section\">\n      <img src=\"assets/Images/property-1.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">Hyde Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Home</span><br>\n          <span class=\"discription-p\">Post Code: SW5101</span></p>\n      </div>\n    </div>\n    <!--Second-->\n    <div class=\"match-section mt-3\">\n      <img src=\"assets/Images/02102015113614AM1914835512@635793825792031250.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'> <span class=\"area-p\">Hyde Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: NW7W25 </span></p>\n      </div>\n    </div>\n    <!--Third-->\n    <div class=\"match-section mt-3 mb-4\">\n      <img src=\"assets/Images/avatar_96978a54ef2d_128.png\" class=\"match-images float-left\">\n      <div class=\"match-content\">\n        <p routerLink='/buyerdetails'><span class=\"area-p\">Green Park</span><br>\n          <span class=\"discription-p\"> No. of Rooms: 5</span><br>\n          <span class=\"discription-p property-type-color\">Type of Property:\n            Flat</span><br>\n          <span class=\"discription-p\">Post Code: W25R43</span></p>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n  </section>\n\n\n\n\n\n</div>\n");

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");












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
        // options: string[] = ['SW5101', 'NW7W25', 'W25R43'];
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6)
        ]);
        this.states = [
            {
                name: 'SW5101'
            },
            {
                name: 'NW7W25',
            },
            {
                name: 'W25R43',
            },
        ];
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
        this.filteredStates = this.postcodeFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(state => state ? this._filterStates(state) : this.states.slice()));
    }
    toggleBackground() {
        this.background = this.background ? "" : "primary";
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
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
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
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
            });
            console.log(this.matchedProperties);
        });
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
        this.ApplicableFeatures = "Period features";
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");












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
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6),
        ]);
        this.states = [
            {
                name: 'SW5101'
            },
            {
                name: 'NW7W25',
            },
            {
                name: 'W25R43',
            },
        ];
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
        this.filteredStates = this.postcodeFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(state => state ? this._filterStates(state) : this.states.slice()));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
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
SellerformService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SellerformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SellerformService);



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
            });
            console.log(this.matchedProperties);
        });
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

module.exports = __webpack_require__(/*! C:\Users\13\Desktop\streethok\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);