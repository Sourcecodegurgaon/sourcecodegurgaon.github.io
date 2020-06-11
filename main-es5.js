function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<app-myMatches *ngIf=\"isLoggedIn\"></app-myMatches>\r\n\r\n\r\n\r\n<div class=\"home_content_container\" *ngIf=\"!isLoggedIn\">\r\n\r\n\r\n  <div class=\"slider\">\r\n    <img src=\"../../assets/Images/baby-touching-woman-s-face-1257110 (1).jpg\" alt=\"\"  class=\"slider-image\">\r\n\r\n     <div class=\"text-over-image heading-nestimate\">Join <span class=\"light\">Free</span> Today!</div>\r\n   \r\n    </div>\r\n\r\n<mat-card class=\"radio-cn\">\r\n  <div class=\"custom-buttons\">\r\n    <p class=\"i-am\">I am</p>\r\n    <div class=\"upper-custom-button\">\r\n    \r\n    <div class=\"custom-button-first\" >\r\n      <label class=\"radio-container custom-text\">a home owner\r\n        <input type=\"radio\" name=\"home\"    value=\"owner\" #owner [(ngModel)]=\"home\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  \r\n    </div>\r\n\r\n  <div class=\"upper-custom-button mt-2\">\r\n\r\n    <div class=\"custom-button-first\" >\r\n      <label class=\"radio-container custom-text\">a home seeker\r\n        <input type=\"radio\" name=\"home\"  value=\"seeker\" #seeker [(ngModel)]=\"home2\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    \r\n    </div>\r\n  </div>\r\n      <div class=\"large-button mt-3\">\r\n      \r\n        <div class=\"create-nestimate\" (click)=\"homeradio()\">\r\n          <span class=\"text-create-nestimate mr-1\">Create Your</span>\r\n          <img src=\"../../assets/Images/Nestimatelogobutton.png\" class=\"button-image\" >\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</mat-card>\r\n<mat-card class=\"second-card\">\r\n <div class=\"image-over\">\r\n\r\n   <img mat-card-image src=\"../../assets/Images/buyer.jpg\" class=\"buyer-jpg\">\r\n   <p class=\"text-over-image-second\">Introducing:a unique property platform</p>\r\n </div>\r\n\r\n  <mat-card-content>\r\n    <p class=\"text-center pt-2 pr-3 pl-3 home-text-font heading-nestimate\">\r\n      Create Your Nestimate free of any committment, to answer an immediate need or gently explore the possibilities of dreams\r\n    </p>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n  <!-- <mat-card>\r\n    <mat-card-title class=\"title heading-nestimate\">Welcome to Nestimate!</mat-card-title>\r\n\r\n    <mat-card-content>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font paragraph-color\">\r\n        A platform that matches people and homes - both owners and buyers/tenants - based on a mutually agreed price.\r\n      </p>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font paragraph-color\">Free of any commitment or investment. </p>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font paragraph-color\">To answer an immediate need, or gently explore the\r\n        possibilities of dreams.</p>\r\n    </mat-card-content>\r\n  </mat-card> -->\r\n\r\n\r\n\r\n\r\n  <mat-card class=\"card-steps\">\r\n    <mat-card-title class=\"title heading-nestimate heading-nestimate-font\">How does Nestimate work ?</mat-card-title>\r\n\r\n      <div class=\"steps-container\">\r\n\r\n           <div class=\"step\">\r\n            <img src=\"../../assets/Images/firststep1.png\" class=\"step-mage\">\r\n        \r\n            <p class=\"step-text \"><b class=\"outputText\">1.Create your Nestimate </b><br> <span class=\"slider-text  heading-nestimate\">Open a world of possibilities! Create Nestimates on our platform by defining your home requirements through our simple online questionnaire.</span></p>\r\n\r\n           </div>\r\n\r\n           <div class=\"step\">\r\n            <img src=\"/assets/Images/secondstep.png\" class=\"step-mage\">\r\n         \r\n            <p class=\"step-text\"><b class=\"outputText\">2.Review matched Nestimates</b><br><span class=\"slider-text heading-nestimate\">If you are a home owner, our unique algorithm will match you with the most relevant Nestimates by home seekers.\r\n            </span></p>\r\n            \r\n            \r\n            <p class=\"slider-text heading-nestimate\">If you are a home seeker we will match you with Nestimates created by home owners, who may not be actively on the market but might consider selling or renting their property if the right offer came along. \r\n             .</p>\r\n           \r\n\r\n           \r\n\r\n           </div>\r\n\r\n\r\n           <div class=\"step\">\r\n            <img src=\"/assets/Images/thirdstep.png\" class=\"step-mage\">\r\n        \r\n            <p class=\"step-text\"><b class=\"outputText\">3.Express Interest</b><br><span class=\"slider-text heading-nestimate\">Should you want to take things further, you can express interest on matched Nestimates. If the match is mutually agreed, a local estate agent of your choice will sort out the formalities.</span></p>\r\n           </div>\r\n      </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"cookies-policy\" *ngIf=\"cookie\"> \r\n<div class=\"cookies-policy-text\">\r\n<div class=\"policy-heading outputText\">\r\n\r\n  <p clas=\"policy-heading \">Cookie Policy</p>\r\n  <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"closeCookie()\">\r\n</div>\r\n\r\n  <div class=\"policy-content outputText\">\r\n    <p>We use cookies to provide you with a better service. Continue browsing if you are happy with this, otherwise you can find out how to manage cookies here.</p>\r\n  </div>\r\n</div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyPropertyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div  *ngIf=\"buy\">\r\n    <mat-card>\r\n      <img mat-card-image src=\"assets/Images/buyer.jpg\" alt=\"\" class=\"home-page-valuation\">\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text paragraph-color\">\r\n          Search our database of registered sellers or landlords <b>who are not actively on the market</b>,\r\n           but might consider selling or renting their property if the right offer came along. </p>\r\n      </div>\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li class=\"paragraph-color\"><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png \">Enter the estimated ‘best price’ for you and see what’s possible. </li>\r\n          <li class=\"paragraph-color\"><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Start by registering your details here.</li>\r\n\r\n        </ul>\r\n        <div class=\"button-own-a-property\">\r\n          <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-2\" routerLink=\"/fillFormBuyer\">MAKE AN\r\n            offer</button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"own-property-image\">\r\n        <img src=\"/assets/Images/image-new.png\" class=\"image-test\">\r\n        <p class=\"own-property-image-text pr-3 pl-3 pb-2 heading-nestimate\">Start by registering your details here</p>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      \r\n      <p class=\"own-property-text-home-worth pt-2 heading-nestimate\">How much is your\r\n        home worth?</p>\r\n      <p class=\"own-property-text-home-worth-ans paragraph-color\">Get a free,\r\n        no-obligation valuation of your home from\r\n        one of our specially-selected local experts.</p>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n\r\n\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2 heading-nestimate\">\r\n          Blog\r\n        </p>\r\n      </div>\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-1.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n      Price\r\n      Index</p>\r\n    <p class=\"own-property-blogs-content-c2\">Annual house price\r\n      growth in the UK’s most buoyant city has fallen below 5% for\r\n      the first time since 2012.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-2.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1-2 \">Housebuilding\r\n      levels fall to\r\n      three</p>\r\n    <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n      properties were\r\n      started in the year to the end of June, significantly below\r\n      the Government’s target of 300,000.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-3.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1-2 paragraph-color\">Many first-time\r\n      buyers </p>\r\n    <p class=\"own-property-blogs-content-c2-2 paragraph-color\">More than half of\r\n      people taking their\r\n      first step on the property ladder think\r\n      they can borrow up to 10 times their income.</p>\r\n  </div>\r\n</div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-blogs-content-2  heading-nestimate\">\r\n        <img mat-card-image src=\"assets/Images/buying.png\">\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"sell\">\r\n    <mat-card>\r\n      <img src=\"assets/Images/seller.jpg \"alt=\"\" mat-card-image>\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text\">Might you sell or let your property if offered the right price or rent?.</p>\r\n      </div>\r\n\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Register your home here and see what’s possible</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"button-own-a-property\">\r\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-4\" routerLink=\"/fillformseller\" >LIST PROPERTY\r\n          NOW</button>\r\n      </div>\r\n      \r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"Looking-property-image heading-nestimate\">\r\n        <p class=\"looking-property-image-text pr-3 pl-3\">Register your property with\r\n          Streethook</p>\r\n      </div>\r\n    \r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-home-worth mt-4 pb-2 mb-2\">\r\n        \r\n        <p class=\"own-property-text-home-worth pt-2\">How much is your\r\n          home worth?</p>\r\n        <p class=\"own-property-text-home-worth-ans\">Get a free,\r\n          no-obligation valuation of your home from\r\n          one of our specially-selected local experts.</p>\r\n\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n\r\n\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2 heading-nestimate\">\r\n          Blog\r\n        </p>\r\n      </div>\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-1.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n      Price\r\n      Index</p>\r\n    <p class=\"own-property-blogs-content-c2\">Annual house price\r\n      growth in the UK’s most buoyant city has fallen below 5% for\r\n      the first time since 2012.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-2.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1-2\">Housebuilding\r\n      levels fall to\r\n      three</p>\r\n    <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n      properties were\r\n      started in the year to the end of June, significantly below\r\n      the Government’s target of 300,000.</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"own-property-blogs-content  paragraph-color\">\r\n  <div class=\"blog-image\">\r\n    <img src=\"assets/Images/asset-3.png\" class=\"own-property-blog-image\">\r\n  </div>\r\n  <div class=\"blog-text\">\r\n    <p class=\"own-property-blogs-content-c1-2\">Many first-time\r\n      buyers </p>\r\n    <p class=\"own-property-blogs-content-c2-2\">More than half of\r\n      people taking their\r\n      first step on the property ladder think\r\n      they can borrow up to 10 times their income.</p>\r\n  </div>\r\n</div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <!-- <hr class=\"horizontal-line pt-3\"> -->\r\n      <div class=\"own-property-blogs-content-2 heading-nestimate\">\r\n        <img src=\"assets/Images/buying.png\" class=\"own-property-last-image\" mat-card-image>\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerAlertDialogBuyerDataSubmissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n  Thanks for completing the first step! Your journey to finding the best offers for your property starts here\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\"\r\n    routerLink=\"/matchNestimate\">DONE</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerConfirmBuyerDetailAlertDialogBuyerDataSubmissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n  Thanks for completing the first step! You are on your way to finding your perfect home! \r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\"\r\n    routerLink=\"/buyerMatchlisting\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerMatchListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n  \r\n\r\n  <mat-card class=\"thanku-section\">\r\n    <img mat-card-image src=\"../../../../../../assets/Images/matched.jpg\" class=\"match-image\">\r\n  </mat-card>\r\n  \r\n  <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length < 1\"><span class=\"outputText\" ></span>&nbsp;No Match Listing(s)</p>\r\n  <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length > 0\">You have<span\r\n    style=\"color:red\">{{matchedProperties.length}}</span>&nbsp;&nbsp;Matched Nestimates created by<span style=\"color:red\"> Home Owner</span></p>\r\n \r\n \r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Sort By</mat-label>\r\n    <mat-select name=\"ChainStatus\" [(ngModel)]=\"listingBuyer.ChainStatus\" value=\"ChainStatus\"\r\n      class=\"example-full-width select-sortby\">\r\n      <mat-option value='low' (click)=\"lowtohigh()\">Price Range - Low to High</mat-option>\r\n      <mat-option value='high' (click)=\"hightoLow()\">Price Range - High to Low</mat-option>\r\n      <mat-option value='date'>Listed date</mat-option>\r\n      <mat-option value='rooms' (click)=\"roomshightolow()\">No of Rooms</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  \r\n  <div class=\"mat-card-content-new m\" *ngFor=\"let property of matchedProperties\">\r\n    <mat-card>\r\n      <span class=\"heading-nestimate card-heading-font\">Nestimate by  {{property.usertitle}} {{property.username | shortName}}</span>\r\n    </mat-card>\r\n    <mat-card class=\"mat-card mt-2\">\r\n      <div class=\"mat-card-content-new-content\">\r\n        <div class=\"mat-card-content-image\">\r\n          <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n        </div>\r\n        <div class=\"mat-card-content-text\">\r\n          <div class=\"price-range\">\r\n            <span class=\"heading-nestimate\">Their Desired Price</span> <br>\r\n            <span class=\"outputText price-font\">&pound;{{property.MaxAmount}}</span>\r\n          </div>\r\n          <div class=\"other-text\">\r\n            <p class=\"heading-nestimate\">Post Code:<span\r\n                class=\"outputText\">{{property.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n            <p class=\"heading-nestimate\">Poperty Type:<span\r\n                class=\"outputText\">{{property.PropertyType}}</span></p>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"button\" class=\"btn btn-primary\" routerLink='/buyerSelectedPropertyDetail/\r\n            {{property.Lookingpostcode}}/\r\n            {{property.Lookingstate}}/\r\n            {{property.LookingTown}}/\r\n            {{property.norooms}}/\r\n            {{property.PropertyCondition}}/\r\n            {{property.MaxAmount}}/\r\n            {{property.LookingAddress}}/\r\n            {{property.ownership}}/\r\n            {{property.PropertyType}}/\r\n            {{property.features}}/\r\n            {{property.UserId}}/\r\n            {{property.MinAmount}}/\r\n            {{property.Maxbathrooms}}/\r\n            {{property.Maxrooms}}/\r\n            {{property.Maxreception}}'>See Details</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  \r\n  \r\n\r\n  <div *ngIf=\"unmatchedProperties.length\">\r\n    <div class=\"other-container\">\r\n    <p class=\"mt-3 main-heading heading-nestimate\"><span class=\"outputText\"></span>Other Nestimates that may be of interest to you</p>\r\n     </div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Sort By</mat-label>\r\n    <mat-select name=\"ChainStatus\" [(ngModel)]=\"listingBuyer.ChainStatus\" value=\"ChainStatus\"\r\n      class=\"example-full-width\">\r\n      <mat-option value='low' (click)=\"unmatchedlowtohigh()\">Price Range - Low to High</mat-option>\r\n      <mat-option value='high' (click)=\"unmatchedhightoLow()\">Price Range - High to Low</mat-option>\r\n      <mat-option value='date'>Listed date</mat-option>\r\n      <mat-option value='rooms' (click)=\"unmatchedroomshightolow()\">No of Rooms</mat-option>\r\n      <mat-option value='Distance' (click)=\"unmatchedDistance()\">Distance</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  \r\n    <div class=\"mat-card-content-new\" *ngFor=\"let property of unmatchedProperties\">\r\n    <mat-card>\r\n      <span class=\"heading-nestimate card-heading-font\">Nestimate by  {{property.detail.usertitle}} {{property.detail.username | shortName}}</span>\r\n    </mat-card>\r\n    <mat-card class=\"mat-card mt-2\">\r\n      <div class=\"mat-card-content-new-content\">\r\n        <div class=\"mat-card-content-image\">\r\n          <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n        </div>\r\n        <div class=\"mat-card-content-text\">\r\n          <div class=\"price-range\">\r\n            <span class=\"heading-nestimate\">Their Desired Price</span> <br>\r\n            <span class=\"outputText price-font\">&pound;{{property.detail.MaxAmount}}</span>\r\n          </div>\r\n          <div class=\"other-text\">\r\n            <p class=\"heading-nestimate\">Distance:<span\r\n                class=\"outputText\">{{property.distance | number:'1.1-1'}}</span></p>&nbsp; &nbsp;\r\n            <p class=\"heading-nestimate\">Poperty Type:<span\r\n                class=\"outputText\">{{property.detail.PropertyType}}</span></p>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"button\" class=\"btn btn-primary\" routerLink='/buyerSelectedPropertyDetail/{{property.detail.Lookingpostcode}}/\r\n            {{property.detail.Lookingstate}}/\r\n            {{property.detail.LookingTown}}/\r\n            {{property.detail.norooms}}/\r\n            {{property.detail.PropertyCondition}}/\r\n            {{property.detail.MaxAmount}}/\r\n            {{property.detail.LookingAddress}}/\r\n            {{property.detail.ownership}}/\r\n            {{property.detail.PropertyType}}/\r\n            {{property.detail.features}}/\r\n        {{property.detail.UserId}}/\r\n        {{property.detail.MinAmount}}/\r\n        {{property.detail.Maxbathrooms}}/\r\n        {{property.detail.Maxrooms}}/\r\n        {{property.detail.Maxreception}}'>See Details</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html":
  /*!***********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html ***!
    \***********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerSelectedPropertyDetailBuyerSelectedPropertyDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<div class=\"property-selected-detail-background\">\r\n<div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3\">{{title}} {{unNamed | shortName}}</h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\">\r\n      <img  src=\"assets/Images/single-nestimate.jpg\" class=\"match-images\">\r\n    </div>\r\n\r\n\r\n    <div class=\"streetname\">\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Desired  Price</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{MaxAmount}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Postcode</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Lookingpostcode}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Streetname</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Lookingstate}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Type</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{PropertyType}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Bedrooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Maxrooms}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Ownership</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{ownership}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Condition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{PropertyCondition}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Bathrooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Maxbathrooms}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Reception Rooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Maxreception}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Features</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{features}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n\r\n\r\n    <div class=\"selected-button m-3\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"backClicked()\">Back</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"Overlayopen()\" *ngIf=\"express\">Express Interest</button>\r\n      <button mat-raised-button color=\"primary\"(click)=\"Disablebutton\"disabled *ngIf=\"datastored\">You have</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"continue-form\" *ngIf=\"overlay\">\r\n\r\n  <div class=\"continue-form-data\">\r\n  <div class=\"nestimate-logo\">\r\n    <img src=\"../../../../assets/Images/single-nestimate.jpg\" class=\"nestimate-logo\">\r\n\r\n  </div>\r\n  <div class=\"continue-text\">\r\n    <p class=\"overlay-text\">Thank you.Please sit back as the seller will now receive a notificationof your Nestimate.Depending upon their decision to pursue or decline,we will send you an update.Your personal details will not be sahred will the seller however they will be shared with an estate agent selected  by seller,if they are interested to pursue your Nestimate</p>\r\n\r\n    \r\n  </div>\r\n  <div class=\"continue-button\">\r\n\r\n    <div class=\"continue-button-container\" (click)=\"submitForm()\">\r\n      OK\r\n    </div> \r\n <div class=\"continue-button mt-2\" (click)=\"continueClose()\">\r\n    \r\n    <div class=\"continue-button-container\">\r\n      CANCEL\r\n    </div> \r\n  </div>\r\n</div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerConfirmBuyerDetailConfirmBuyerDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isBuyer\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading heading-nestimate\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr> \r\n          <td class=\"details-p-headings heading-nestimate\">Name:\r\n            <span class=\"output   outputText\">&nbsp;{{user.Name}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings heading-nestimate\">Email Address:<span class=\"output   outputText\">&nbsp;{{user.Email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings heading-nestimate\">Date of Birth:<span\r\n              class=\"output   outputText\">&nbsp;{{user.DOB | date :'longDate'}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings heading-nestimate\">Chain status:<span class=\"output   outputText\">&nbsp;{{listingBuyer.ChainStatus}}</span>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings heading-nestimate\">Financial Position:<span\r\n              class=\"output   outputText\">&nbsp;{{listingBuyer.FinancialPosition}} </span></td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n     \r\n\r\n\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" class=\"btn btn-back\" routerLink=\"/fillFormBuyer/{{listingBuyer.Currentpostcode}}/{{listingBuyer.CurrentTown}}/{{listingBuyer.Currentstate}}/{{listingBuyer.Currentcountry}}/{{listingBuyer.Lookingpostcode}}/{{listingBuyer.LookingStreetname}}/{{listingBuyer.Lookingstate}}/{{listingBuyer.Country}}/{{listingBuyer.FinancialPosition}}/{{listingBuyer.SearchRadius}}/{{listingBuyer.PropertyType}}/{{listingBuyer.Roommin}}/{{listingBuyer.Roomsmax}}/{{listingBuyer.MinAmount}}/{{listingBuyer.MaxAmount}}/{{listingBuyer.Validity}}/{{listingBuyer.Minbathroom}}/{{listingBuyer.Maxbathroom}}/{{listingBuyer.Minreception}}/{{listingBuyer.Maxreception}}/{{listingBuyer.Conditions}}/{{listingBuyer.Ownership}}/{{listingBuyer.CurrentAddress}}\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerFillFormBuyerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<!--Login-Form-->\r\n\r\n<div class=\"continue-form\" \r\n*ngIf=\"overlay\">\r\n  <div class=\"nestimate-logo\">\r\n    <img src=\"../../../../assets/Images/single-nestimate.jpg\" class=\"nestimate-logo\">\r\n\r\n  </div>\r\n  <div class=\"continue-text\">\r\n    <p class=\"overlay-text\">Thanks for registering!</p>\r\n    <p class=\"overlay-text\">Next Step: Register your home  reuirements and see what’s possible. Complete the questionnaire to create your Nestimate.\r\n    </p>\r\n\r\n    <p class=\"overlay-text-third\">\r\n      Based on the answers provided by you on the questionnaire, our system will match the most relevant home owner created Nestimates with yours.\r\n      Once you've finished, sit back, relax and let us do the hard work for you!</p>\r\n  </div>\r\n  <div class=\"continue-button\" (click)=\"continueClose()\">\r\n    <div class=\"continue-button-container\">\r\n      CONTINUE\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\r\n  <mat-card class=\"sign-in-main\" *ngIf=\"!newUser\">\r\n    <div class=\"user-cross\">\r\n      <h4 class=\"heading-nestimate\">Login</h4>\r\n\r\n    </div>\r\n    <div class=\"social-button mt-4\">\r\n      <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n        Facebook\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n        Google+\r\n      </button>\r\n    </div>\r\n    <div class=\"input-group mb-3 mt-3\"></div>\r\n     <form (keydown.enter)=\"save()\">\r\n\r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n        <input type=\"text\" class=\"form-control custom-field\" type=\"email\" name=\"emails\"  #userEmailLogin  [(ngModel)]=\"emails\" placeholder=\"Enter Email\">\r\n      </div>\r\n \r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-lock form-control-feedback\"></span>\r\n        <input type=\"password\" class=\"form-control custom-field\" name=\"passs\"  #userPasswordLogin type=\"password\" [(ngModel)]=\"passs\" placeholder=\"Enter Passowrd\">\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n \r\n  </form>\r\n    <div class=\"input-group-prepend other-option\">\r\n      <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"signIn(userEmailLogin.value, userPasswordLogin.value)\">\r\n      Login\r\n    </button>\r\n    <p class=\"dont-have-account pt-2 heading-nestimate\" id=\"#dont-have-account\" (click)=\"NewUser()\">Don't have an account? <span class=\"hyper outputText\">Sign up</span></p>\r\n  </mat-card>\r\n  <mat-card class=\"mt-4 sign-up-main\" *ngIf=\"newUser\">\r\n\r\n    <div class=\"sign-up\">\r\n      <div class=\"signup-heading\">\r\n\r\n        <div class=\"user-cross\">\r\n          <h4 class=\"heading-nestimate\">Sign up</h4>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"social-button mt-2\">\r\n        <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n          Facebook\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n          Google+\r\n        </button>\r\n      </div>\r\n      <div class=\"input-group mb-3 mt-3\">\r\n        <form (keydown)=\"keyDownFunction($event)\">\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-user-circle-o form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control custom-field\" placeholder=\"Full Name\" name=\"name\"  [(ngModel)]=\"name\" #displayName>\r\n          </div>\r\n     \r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" type=\"email\" placeholder=\"Email\" #userEmailRegister type=\"email\" name=\"email\" [(ngModel)]=\"email\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-lock form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" placeholder=\"Password\" #userPasswordRegister type=\"password\" name=\"password\"\r\n            [(ngModel)]=\"password\">\r\n          </div>\r\n       \r\n        </form>\r\n      </div>\r\n\r\n\r\n      <section class=\"example-section property-con-form\">\r\n\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Email\">Email</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"SMS\">SMS</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Post\">Post</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"All\">Email,SMS and Post from acrefully\r\n          selected<br> third port\r\n        </mat-checkbox>\r\n        <label for=\"text\" class=\"heading-nestimate \">By clicking the sms box,you agreeing to recieve\"</label>\r\n        <label for=\"text\" class=\"heading-nestimate policy\">By clicking below to register, you confirm that you agree to our<span routerLink=\"/terms\"> Terms & Conditions </span>and you have read and understood our <span routerLink=\"/PrivacyPolicy\">Privacy Policy</span> </label>\r\n      </section>\r\n\r\n      <button type=\"button\" class=\"btn btn-social-login\"\r\n        (click)=\"signUp(displayName.value,userEmailRegister.value,userPasswordRegister.value)\">\r\n        Sign Up\r\n      </button>\r\n   <p class=\"dont-have-account pt-2 heading-nestimate\" (click)=\"OldUser()\">Already have an account? Click here to\r\n        sign in</p> \r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--Login-form-end-->\r\n\r\n\r\n<form  *ngIf=\"isLoggedIn\">\r\n  <mat-tab-group #matgroup class=\"form-tab-conatiner\" [selectedIndex]=\"selectedIndex\">\r\n    <mat-tab label=\"Personal Details \" class=\"tabs-align-padding\">\r\n      <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n        <mat-card class=\"card-margin background-new-form\">\r\n          <mat-card-title class=\"mat_card_title\">\r\n\r\n            \r\n            <p class=\"forms-heading new-heading-nestimate\">Personal Details</p>\r\n          </mat-card-title>\r\n          <p class=\"forms-star new-heading-nestimate\">*required</p>\r\n       \r\n  \r\n          <label class=\"new-heading-nestimate\">Title*</label><br>\r\n            <mat-form-field>\r\n              <mat-select name=\"title\" [(ngModel)]=\"user.title\" class=\"drop-down-list\">\r\n                <mat-option value=\"Mr\">Mr</mat-option>\r\n                <mat-option value=\"Ms\">Ms</mat-option>\r\n                <mat-option value=\"Mrs\">Mrs</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Full Name\" required\r\n              name=\"Name\" class=\"mat-mail-input\"   [(ngModel)]=\"user.Name\">\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n\r\n            <input matInput  placeholder=\"Email Address*\" \r\n             name=\"Email\" class=\"mat-mail-input\"   [(ngModel)]=\"user.email\" [formControl]=\"emailFormControl\" >\r\n        \r\n             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n              Email is <strong>required</strong>\r\n            </mat-error>\r\n        \r\n        \r\n        \r\n        \r\n            </mat-form-field>\r\n\r\n\r\n\r\n\r\n          <!--Date Of Birth Field-->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"DD/MM/YYYY*\" name=\"DOB\"\r\n              class=\"mat-mail-input\"  value=\"DOB\"    [(ngModel)]=\"user.DOB\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n         \r\n          </mat-form-field>\r\n          <!--Date Of Birth Field End-->\r\n\r\n\r\n          <!--Phone Number field-->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <span matPrefix>+44 &nbsp;</span>\r\n            <input matInput placeholder=\"Phone Number\" name=\"phonenumber\" class=\"mat-mail-input\"   [(ngModel)]=\"user.Phone\" type=”tel”  [formControl]=\"phoneFormControl\" maxlength=\"10\">\r\n            <mat-error *ngIf=\"phoneFormControl.hasError('phonenumber') && !phoneFormControl.hasError('required')\">\r\n              Please enter a valid Phone Number\r\n            </mat-error>\r\n            <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\r\n              Phone Number is <strong>required</strong>\r\n            </mat-error>\r\n            <mat-error *ngIf=\"phoneFormControl.hasError('pattern')\">\r\n              Phone Number is <strong>not valid</strong>\r\n          \r\n            </mat-error>\r\n          </mat-form-field>\r\n         \r\n          <!--Phone Number field-->\r\n    \r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Your Buying Position*</mat-label>\r\n            <mat-select name=\"ChainStatus\" [(ngModel)]=\"listingBuyer.ChainStatus\" value=\"ChainStatus\"\r\n              class=\"example-full-width\">\r\n              <mat-option value=\"First Time Buyer\" (click)=\"otherOption()\">First Time Buyer</mat-option>\r\n              <mat-option value=\"In Chain\" (click)=\"otherOption()\">In Chain</mat-option>\r\n              <mat-option value=\"Cash Buyer\" (click)=\"otherOption()\">Cash Buyer</mat-option>\r\n              <mat-option value=\"Other (Please specify)\" (click)=\"otherChain()\">Other (Please specify)</mat-option>\r\n            </mat-select>\r\n            \r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\" *ngIf=\"other\">\r\n          <input matInput placeholder=\"other\" name=\"other\" class=\"mat-mail-input\"   >\r\n          </mat-form-field>\r\n       \r\n        </mat-card>\r\n        <mat-card class=\"card-margin background-new-form\">\r\n          <label class=\"new-heading-nestimate\">Your Address</label>\r\n         \r\n\r\n          <p class=\"new-heading-nestimate\">Area - Search by Postcode</p>\r\n\r\n          <mat-option class=\"postcode-background\" style=\"background-color: #F5F5F5;\">\r\n            <input [formControl]=\"autoCompleteControlCurrent\" type=\"text\" placeholder=\"Enter Postcode\"\r\n              aria-label=\"Post-Code\" matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"listingBuyer.Currentpostcode\">\r\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\r\n              (optionSelected)='getPost($event.option.value)'>\r\n              <mat-option *ngFor=\"let item of addressianAutoCompleteCurrent$ | async; let index=index\" [value]=\"item\">\r\n                <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                </span> | <span>{{ item.citytown | titlecase}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-option>\r\n\r\n         \r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Town/City\" [(ngModel)]=\"listingBuyer.CurrentTown\" name=\"CurrentTowncity\"\r\n              class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n          \r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Full Address\" [formControl]=\"AddressFormControl\" name=\"CurrentAddress\"\r\n              class=\"mat-mail-input\" [(ngModel)]=\"listingBuyer.CurrentAddress\">\r\n            <mat-error *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\r\n              Please enter a valid address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\r\n              Address is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"County\" required [(ngModel)]=\"listingBuyer.Currentstate\" name=\"state\"\r\n              class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Country\" required  name=\"state\"\r\n              class=\"mat-mail-input\" [(ngModel)]=\"listingBuyer.Currentcountry\" name=\"country\">\r\n          </mat-form-field>\r\n\r\n        </mat-card>\r\n        <div class=\"button-next\">\r\n          <a (click)=\"selectTab(1, 0)\" class=\" btn btn-primary btnNext btn-next\">Next</a>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Property Details\" class=\"tabs-align-padding\">\r\n      <div class=\"tabs-align-padding\">\r\n\r\n     \r\n\r\n        <mat-card class=\"card-margin background-new-form\">\r\n          <mat-card-title class=\"mat_card_title new-heading-nestimate\">are you looking to</mat-card-title>\r\n          <mat-radio-group aria-label=\"Select an option\" class=\"radio-top-buyer\">\r\n            <mat-radio-button value=\"buy\">buy</mat-radio-button>\r\n            <mat-radio-button value=\"rent\">rent</mat-radio-button>\r\n          </mat-radio-group>\r\n          <mat-card-title class=\"mat_card_title new-heading-nestimate\">Please fill in the details of your desired property</mat-card-title>\r\n          <p class=\"mt-4 new-heading-nestimate\">Area - Search by Postcode</p>\r\n          <mat-option style=\"background-color: #F5F5F5;\">\r\n            <input [formControl]=\"autoCompleteControlLooking\" type=\"text\" placeholder=\"Enter Postcode\"\r\n              aria-label=\"Post Code\" matInput [matAutocomplete]=\"autolooking\"\r\n              [(ngModel)]=\"listingBuyer.Lookingpostcode\" name=\"Lookingpostcode\">\r\n            <mat-autocomplete autoActivesecondOption #autolooking=\"matAutocomplete\"\r\n              (optionSelected)='getPosts($event.option.value)'>\r\n              <mat-option *ngFor=\"let item of addressianAutoCompleteLooking$ | async; let index=index\" [value]=\"item\">\r\n                <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                </span> | <span>{{ item.citytown | titlecase}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-option>\r\n\r\n\r\n\r\n          <p class=\"mt-4\" class=\"new-heading-nestimate\">Area - Search by Address</p>\r\n          <mat-form-field class=\"example-full-width mb-3\">\r\n            <input matInput placeholder=\"Street Name\" class=\"mat-mail-input\" [(ngModel)]=\"listingBuyer.LookingStreetname\" name=\"LookingStreetname\">\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width mb-3\">\r\n            <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\" [(ngModel)]=\"listingBuyer.LookingTown\" name=\"LookingTown\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"County\" [formControl]=\"stateFormControl\" required  [(ngModel)]=\"listingBuyer.Lookingstate\" name=\"Lookingstate\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Country\" [formControl]=\"stateFormControl\" required  [(ngModel)]=\"listingBuyer.Country\" name=\"Country\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n        </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-card class=\"card-margin background-new-form\">\r\n          <div id=\"finanacial\">\r\n            <label class=\"new-heading-nestimate\">Financial Position*</label><br>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select name=\"FinancialPosition\" [(ngModel)]=\"listingBuyer.FinancialPosition\"\r\n                value=\"FinancialPosition\" class=\"example-full-width\">\r\n                <mat-option value=\"Mortgate to be arranged\" name=\"Mortgate to be arranged\" (click)=\"removefinancialPostion()\">Mortgate to be arranged</mat-option>\r\n                <mat-option value=\"Mortgage arranged \" name=\"Mortgage arranged \" (click)=\"removefinancialPostion()\">Mortgage arranged </mat-option>\r\n                <mat-option value=\"Cash Buyer\" name=\"Cash Buyer\" (click)=\"removefinancialPostion()\">Cash Buyer</mat-option>\r\n                <mat-option value=\"Please specify\" name=\"Please specify\" (click)=\"financialPostion()\">Other</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n      \r\n\r\n\r\n        <mat-form-field class=\"example-full-width\" *ngIf=\"finanacial\">\r\n        <input matInput placeholder=\"other\" name=\"other\" class=\"mat-mail-input\"   >\r\n        </mat-form-field>\r\n\r\n        <label class=\"new-heading-nestimate\">Search Radius (Miles)</label><br>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select [(ngModel)]=\"listingBuyer.SearchRadius\" name=\"SearchRadius\" value=\"SearchRadius\"\r\n              class=\"example-full-width\">\r\n              <mat-option value=\"This postcode only\">This postcode only</mat-option>\r\n              <mat-option value=\"0.25\">Within ¼ mile</mat-option>\r\n              <mat-option value=\"0.5\">Within ½ mile</mat-option>\r\n              <mat-option value=\"1.0\">Within 1 mile</mat-option>\r\n              <mat-option value=\"3.0\">Within 3 miles</mat-option>\r\n              <mat-option value=\"5.0\">Within 5 miles</mat-option>\r\n              <mat-option value=\"10.0\">Within 10 miles</mat-option>\r\n              <mat-option value=\"15.0\">Within 15 miles</mat-option>\r\n              <mat-option value=\"20.0\">Within 20 miles</mat-option>\r\n              <mat-option value=\"30.0\">Within 30 miles</mat-option>\r\n              <mat-option value=\"40.0\">Within 40 miles</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <div id=\"Property-type\">\r\n            <label class=\"new-heading-nestimate\">Property Type</label><br>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-select name=\"Propertytype\" [(ngModel)]=\"listingBuyer.PropertyType\" value=\"Propertytype\"\r\n                class=\"example-full-width\">\r\n                <mat-option value=\"Flat\">Flat</mat-option>\r\n                <mat-option value=\"Studio\">Studio</mat-option>\r\n                <mat-option value=\"Terracedhouse\">Terraced house</mat-option>\r\n                <mat-option class=\"example-margin\" value=\"Maisonette\">Maisonette</mat-option>\r\n                <mat-option value=\"Semi-detached\">Semi-detached house</mat-option>\r\n                <mat-option value=\"Bungalow\">Bungalow</mat-option>\r\n                <mat-option value=\"Detachedhouse\">Detached house</mat-option>\r\n                <mat-option value=\"Cottage\">Cottage</mat-option>\r\n                <mat-option value=\"Townhouse\">Town house</mat-option>\r\n                <mat-option value=\"Countryhouse\">Country house</mat-option>\r\n                <mat-option value=\"Barnconversion\">Barn conversion</mat-option>\r\n                <mat-option value=\"Farm\">Farm</mat-option>\r\n                <mat-option value=\"Houseboat\">Houseboat</mat-option>\r\n                <mat-option value=\"Lodge\">Lodge</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n <!--Min Max Amount-->\r\n <label class=\"new-heading-nestimate\">Number of Rooms</label>\r\n <div class=\"price-selection\">\r\n   <mat-form-field class=\"filed-width\" >\r\n     <mat-label>Min  Rooms</mat-label>\r\n     <mat-select [(value)]=\"Roommin\" name=\"Roommin\" [(ngModel)]=\"listingBuyer.Roommin\">\r\n      <mat-option value=\"Studio\">Studio</mat-option>\r\n       <mat-option value=\"1\">1</mat-option>\r\n       <mat-option value=\"2\">2</mat-option>\r\n       <mat-option value=\"3\">3</mat-option>\r\n       <mat-option value=\"4\">4</mat-option>\r\n       <mat-option value=\"5\">5</mat-option>\r\n     </mat-select>\r\n   </mat-form-field>\r\n   <mat-form-field class=\"filed-width\">\r\n     <mat-label>Max  Rooms</mat-label>\r\n     <mat-select [(value)]=\"Roomsmax\" name=\"Roomsmax\" [(ngModel)]=\"listingBuyer.Roomsmax\">\r\n       <mat-option value=\"Studio\">Studio</mat-option>\r\n       <mat-option value=\"1\">1</mat-option>\r\n       <mat-option value=\"2\">2</mat-option>\r\n       <mat-option value=\"3\">3</mat-option>\r\n       <mat-option value=\"4\">4</mat-option>\r\n       <mat-option value=\"5\">5</mat-option>\r\n     </mat-select>\r\n   </mat-form-field>\r\n </div>\r\n<!--Max-No of Rooms-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!--Min Max Amount-->\r\n          <label class=\"heading-nestimate\">Price Range</label>\r\n          <div class=\"price-selection\">\r\n            <mat-form-field class=\"filed-width\">\r\n              <mat-label>MinAmount</mat-label>\r\n              <mat-select [(value)]=\"min\" name=\"MinAmount\" [(ngModel)]=\"listingBuyer.MinAmount\">\r\n                <mat-option value=\"50000\">50,000</mat-option>\r\n                <mat-option value=\"60000\">60,000</mat-option>\r\n                <mat-option value=\"70000\">70,000</mat-option>\r\n                <mat-option value=\"80000\">80,000</mat-option>\r\n                <mat-option value=\"90000\">90,000</mat-option>\r\n                <mat-option value=\"100000\">100,000</mat-option>\r\n                <mat-option value=\"110000\">110,000</mat-option>\r\n                <mat-option value=\"120000\">120,000</mat-option>\r\n                <mat-option value=\"125000\">125,000</mat-option>\r\n                <mat-option value=\"130000\">130,000</mat-option>\r\n                <mat-option value=\"140000\">140,000</mat-option>\r\n                <mat-option value=\"150000\">150,000</mat-option>\r\n                <mat-option value=\"160000\">160,000</mat-option>\r\n                <mat-option value=\"170000\">170,000</mat-option>\r\n                <mat-option value=\"175000\">175,000</mat-option>\r\n                <mat-option value=\"180000\">180,000</mat-option>\r\n                <mat-option value=\"190000\">190,000</mat-option>\r\n                <mat-option value=\"200000\">200,000</mat-option>\r\n                <mat-option value=\"210000\">210,000</mat-option>\r\n                <mat-option value=\"220000\">220,000</mat-option>\r\n                <mat-option value=\"230000\">230,000</mat-option>\r\n                <mat-option value=\"240000\">240,000</mat-option>\r\n                <mat-option value=\"250000\">250,000</mat-option>\r\n                <mat-option value=\"260000\">260,000</mat-option>\r\n                <mat-option value=\"270000\">270,000</mat-option>\r\n                <mat-option value=\"280000\">280,000</mat-option>\r\n                <mat-option value=\"290000\">290,000</mat-option>\r\n                <mat-option value=\"300000\">300,000</mat-option>\r\n                <mat-option value=\"325000\">325,000</mat-option>\r\n                <mat-option value=\"350000\">350,000</mat-option>\r\n                <mat-option value=\"375000\">375,000</mat-option>\r\n                <mat-option value=\"400000\">400,000</mat-option>\r\n                <mat-option value=\"425000\">425,000</mat-option>\r\n                <mat-option value=\"450000\">450,000</mat-option>\r\n                <mat-option value=\"475000\">475,000</mat-option>\r\n                <mat-option value=\"500000\">500,000</mat-option>\r\n                <mat-option value=\"525000\">525,000</mat-option>\r\n                <mat-option value=\"550000\">550,000</mat-option>\r\n                <mat-option value=\"575000\">575,000</mat-option>\r\n                <mat-option value=\"600000\">600,000</mat-option>\r\n                <mat-option value=\"625000\">625,000</mat-option>\r\n                <mat-option value=\"650000\">650,000</mat-option>\r\n                <mat-option value=\"675000\">675,000</mat-option>\r\n                <mat-option value=\"700000\">700,000</mat-option>\r\n                <mat-option value=\"725000\">725,000</mat-option>\r\n                <mat-option value=\"750000\">750,000</mat-option>\r\n                <mat-option value=\"775000\">775,000</mat-option>\r\n                <mat-option value=\"800000\">800,000</mat-option>\r\n                <mat-option value=\"825000\">825,000</mat-option>\r\n                <mat-option value=\"850000\">850,000</mat-option>\r\n                <mat-option value=\"875000\">875,000</mat-option>\r\n                <mat-option value=\"900000\">900,000</mat-option>\r\n                <mat-option value=\"925000\">925,000</mat-option>\r\n                <mat-option value=\"950000\">950,000</mat-option>\r\n                <mat-option value=\"975000\">975,000</mat-option>\r\n                <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                <mat-option value=\"\">No min</mat-option>\r\n\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"filed-width\">\r\n              <mat-label>MaxAmount</mat-label>\r\n              <mat-select [(value)]=\"max\" name=\"MaxAmount\" [(ngModel)]=\"listingBuyer.MaxAmount\">\r\n                <mat-option value=\"50000\">50,000</mat-option>\r\n                <mat-option value=\"60000\">60,000</mat-option>\r\n                <mat-option value=\"70000\">70,000</mat-option>\r\n                <mat-option value=\"80000\">80,000</mat-option>\r\n                <mat-option value=\"90000\">90,000</mat-option>\r\n                <mat-option value=\"100000\">100,000</mat-option>\r\n                <mat-option value=\"110000\">110,000</mat-option>\r\n                <mat-option value=\"120000\">120,000</mat-option>\r\n                <mat-option value=\"125000\">125,000</mat-option>\r\n                <mat-option value=\"130000\">130,000</mat-option>\r\n                <mat-option value=\"140000\">140,000</mat-option>\r\n                <mat-option value=\"150000\">150,000</mat-option>\r\n                <mat-option value=\"160000\">160,000</mat-option>\r\n                <mat-option value=\"170000\">170,000</mat-option>\r\n                <mat-option value=\"175000\">175,000</mat-option>\r\n                <mat-option value=\"180000\">180,000</mat-option>\r\n                <mat-option value=\"190000\">190,000</mat-option>\r\n                <mat-option value=\"200000\">200,000</mat-option>\r\n                <mat-option value=\"210000\">210,000</mat-option>\r\n                <mat-option value=\"220000\">220,000</mat-option>\r\n                <mat-option value=\"230000\">230,000</mat-option>\r\n                <mat-option value=\"240000\">240,000</mat-option>\r\n                <mat-option value=\"250000\">250,000</mat-option>\r\n                <mat-option value=\"260000\">260,000</mat-option>\r\n                <mat-option value=\"270000\">270,000</mat-option>\r\n                <mat-option value=\"280000\">280,000</mat-option>\r\n                <mat-option value=\"290000\">290,000</mat-option>\r\n                <mat-option value=\"300000\">300,000</mat-option>\r\n                <mat-option value=\"325000\">325,000</mat-option>\r\n                <mat-option value=\"350000\">350,000</mat-option>\r\n                <mat-option value=\"375000\">375,000</mat-option>\r\n                <mat-option value=\"400000\">400,000</mat-option>\r\n                <mat-option value=\"425000\">425,000</mat-option>\r\n                <mat-option value=\"450000\">450,000</mat-option>\r\n                <mat-option value=\"475000\">475,000</mat-option>\r\n                <mat-option value=\"500000\">500,000</mat-option>\r\n                <mat-option value=\"525000\">525,000</mat-option>\r\n                <mat-option value=\"550000\">550,000</mat-option>\r\n                <mat-option value=\"575000\">575,000</mat-option>\r\n                <mat-option value=\"600000\">600,000</mat-option>\r\n                <mat-option value=\"625000\">625,000</mat-option>\r\n                <mat-option value=\"650000\">650,000</mat-option>\r\n                <mat-option value=\"675000\">675,000</mat-option>\r\n                <mat-option value=\"700000\">700,000</mat-option>\r\n                <mat-option value=\"725000\">725,000</mat-option>\r\n                <mat-option value=\"750000\">750,000</mat-option>\r\n                <mat-option value=\"775000\">775,000</mat-option>\r\n                <mat-option value=\"800000\">800,000</mat-option>\r\n                <mat-option value=\"825000\">825,000</mat-option>\r\n                <mat-option value=\"850000\">850,000</mat-option>\r\n                <mat-option value=\"875000\">875,000</mat-option>\r\n                <mat-option value=\"900000\">900,000</mat-option>\r\n                <mat-option value=\"925000\">925,000</mat-option>\r\n                <mat-option value=\"950000\">950,000</mat-option>\r\n                <mat-option value=\"975000\">975,000</mat-option>\r\n                <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                <mat-option value=\"\">No max</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!--Min Max Amount End-->\r\n\r\n\r\n          <!--Offer validity Group-->\r\n\r\n          <mat-radio-group aria-label=\"Select an option\" id=\"name \" name=\"Validity\" [(ngModel)]=\"listingBuyer.Validity\"\r\n            value=\"Validity\">\r\n            <label class=\"new-heading-nestimate\">How long should your Nestimate be active?</label><br>\r\n            <div class=\"radio-button-align\">\r\n              <mat-radio-button value=\"1\" class=\"mr-2\">1 Month</mat-radio-button>\r\n              <mat-radio-button value=\"3\">3 Months</mat-radio-button>\r\n              <mat-radio-button value=\"6\">6 Months</mat-radio-button>\r\n              <mat-radio-button value=\"Indefinite\">Indefinite\r\n              </mat-radio-button>\r\n            </div>\r\n          </mat-radio-group>\r\n          <p class=\"Label-notes new-heading-nestimate\">*Note:Your Nestimate will remain active for the selected time period above</p>\r\n          <!--Offer validity Group End-->\r\n          \r\n\r\n\r\n\r\n\r\n\r\n\r\n        </mat-card>\r\n\r\n        <mat-card class=\"card-margin background-new-form\">\r\n          <label class=\"new-heading-nestimate\">Optional Details</label><br>\r\n <!--No of Bathrooms-->\r\n <label class=\"new-heading-nestimate\">No of Bathrooms</label>\r\n <div class=\"price-selection\">\r\n   <mat-form-field class=\"filed-width\" >\r\n     <mat-label>Min</mat-label>\r\n     <mat-select [(value)]=\"Minbathroom\" name=\"Minbathroom\" [(ngModel)]=\"listingBuyer.Minbathroom\">\r\n      <mat-option value=\"1\">1</mat-option>\r\n       <mat-option value=\"2\">2</mat-option>\r\n       <mat-option value=\"3 or more\">3 or more</mat-option>\r\n     </mat-select>\r\n   </mat-form-field>\r\n   <mat-form-field class=\"filed-width\">\r\n     <mat-label>Max</mat-label>\r\n     <mat-select [(value)]=\"Maxbathroom\" name=\"Maxbathroom\" [(ngModel)]=\"listingBuyer.Maxbathroom\">\r\n       <mat-option value=\"1\">1</mat-option>\r\n       <mat-option value=\"2\">2</mat-option>\r\n       <mat-option value=\"3 or more\">3 or more</mat-option>\r\n     </mat-select>\r\n   </mat-form-field>\r\n </div>\r\n      \r\n\r\n\r\n\r\n  <!--No of reception-->\r\n  <label class=\"new-heading-nestimate\">No of Reception Rooms</label>\r\n  <div class=\"price-selection\">\r\n    <mat-form-field class=\"filed-width\" >\r\n      <mat-label>Min</mat-label>\r\n      <mat-select [(value)]=\"Minreception\" name=\"Minreception\" [(ngModel)]=\"listingBuyer.Minreception\">\r\n        <mat-option value=\"1\">1</mat-option>\r\n        <mat-option value=\"2\">2</mat-option>\r\n        <mat-option value=\"3 or more\">3 or more</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"filed-width\">\r\n      <mat-label>Max</mat-label>\r\n      <mat-select [(value)]=\"Maxreception\" name=\"Maxreception\" [(ngModel)]=\"listingBuyer.Maxreception\">\r\n        <mat-option value=\"1\">1</mat-option>\r\n        <mat-option value=\"2\">2</mat-option>\r\n        <mat-option value=\"3 or more\">3 or more</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <label class=\"new-heading-nestimate\">Property Condition</label>\r\n        <mat-form-field class=\"example-full-width\">\r\n      \r\n          <mat-select [(value)]=\"Conditions\" name=\"Conditions\" [(ngModel)]=\"listingBuyer.Conditions\">\r\n            <mat-option value=\"New Build\">New Build</mat-option>\r\n            <mat-option value=\"Needs Modernisation\">Needs Modernisation</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <label class=\"new-heading-nestimate\">Ownership</label>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select name=\"Ownership\" [(ngModel)]=\"listingBuyer.Ownership\" value=\"Ownership\"\r\n              class=\"example-full-width\">\r\n              <mat-option value=\"Leasehold\">Leasehold</mat-option>\r\n              <mat-option value=\"Freehold\">Freehold</mat-option>\r\n              <mat-option value=\"Share of Freehold\">Share of Freehold</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n<label class=\"new-heading-nestimate\">Property Features</label>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-select  [formControl]=\"Condition\" multiple\r\n              [(ngModel)]=\"listingBuyer.features\" #sl class=\"mat-select-edit mat-check\">\r\n  \r\n              <div class=\"select-constion\">\r\n                <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"sl.close()\">\r\n              </div>\r\n              <mat-option *ngFor=\"let Conditions of ConditionsList\" [value]=\"Conditions\" class=\"mat-check\">{{Conditions}}</mat-option>\r\n  \r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n\r\n        </mat-card>\r\n\r\n\r\n        <div class=\"button-next-tab2\">\r\n          <a (click)=\"selectTab(0, 1)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n          <a (click)=\"onSubmit()\" class=\"btn btn-primary btnNext btn-next\">Submit</a>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n\r\n  </mat-tab-group>\r\n</form>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerMatchedNestimatesMatchedNestimatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"nestimate-matches\">\n\n<div class=\"button\">\n\n<div class=\"matched\">\n<div class=\"matched-text heading-nestimate\" routerLink=\"/MatchesNestimate\">Matched <br>Nestimates</div>\n</div>\n<div class=\"unmatvhed\">\n    <div class=\"matched-text heading-nestimate\" routerLink=\"/Unmatched\">Nestimates that may interest you</div>\n\n</div>\n</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerMatchedNestimatesMatchesNestimateMatchesNestimateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\n  \n\n    <mat-card class=\"thanku-section\" >\n      <img mat-card-image src=\"../../../../../../assets/Images/matched.jpg\"  class=\"match-image\">  \n    </mat-card >\n    \n    <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length < 1\"><span class=\"outputText\" ></span>&nbsp;No Match Listing(s)</p>\n   \n    <div *ngIf=\"matchedProperties.length\">\n    \n      <section id=\"matchproperties\">\n        <div class=\"match-section\" routerLink='/buyerSelectedPropertyDetail/\n      {{property.Lookingpostcode}}/\n      {{property.Lookingstate}}/\n      {{property.LookingTown}}/\n      {{property.norooms}}/\n      {{property.PropertyCondition}}/\n      {{property.MaxAmount}}/\n      {{property.LookingAddress}}/\n      {{property.ownership}}/\n      {{property.PropertyType}}/\n      {{property.features}}/\n      {{property.UserId}}/\n      {{property.MinAmount}}/\n      {{property.Maxbathrooms}}/\n      {{property.Maxrooms}}/\n      {{property.Maxreception}}\n      ' *ngFor=\"let property of matchedProperties\">\n     \n          <mat-card class=\"mat-card-matches\">\n            <img  src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images \">\n            \n            <div class=\"match-content\">\n              <p><span class=\"heading-nestimate\">Streetname:</span><span class=\"paragraph-color\">{{property.LookingAddress}}</span><br>\n                 <span class=\"heading-nestimate\">Post Code:</span><span class=\"paragraph-color\"> {{property.Lookingpostcode }}</span><br>\n                 <span class=\"heading-nestimate\">Price Range:</span><span class=\"paragraph-color\">{{property.MaxAmount}}</span><br>\n                 <span class=\"heading-nestimater\">Property Type:</span><span class=\"paragraph-color\">{{property.PropertyType}}</span></p>\n            </div>\n          </mat-card>\n        </div>\n      </section>\n    </div>\n \n  </div>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormBuyerMatchedNestimatesUnMatchesNestimateUnMatchesNestimateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\n  \n\n    <mat-card class=\"thanku-section\" >\n      <img mat-card-image src=\"../../../../../../assets/Images/unmatchedtop.jpg\"  class=\"match-image\">  \n    </mat-card >\n    \n   \n    <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length > 0\" ><span class=\"outputText\">{{matchedProperties.length}}</span>&nbsp;Match Listing(s)</p>\n \n    <div *ngIf=\"unmatchedProperties.length\">\n      <p class=\"mt-3 main-heading heading-nestimate\"><span class=\"outputText\">{{unmatchedProperties.length}}</span> &nbsp;Other listings that may interest</p>\n   \n      <section id=\"propertyinlondon\">\n        <div class=\"match-section\" routerLink='/buyerSelectedPropertyDetail/{{property.detail.Lookingpostcode}}/\n      {{property.detail.Lookingstate}}/\n      {{property.detail.LookingTown}}/\n      {{property.detail.norooms}}/\n      {{property.detail.PropertyCondition}}/\n      {{property.detail.MaxAmount}}/\n      {{property.detail.LookingAddress}}/\n      {{property.detail.ownership}}/\n      {{property.detail.PropertyType}}/\n      {{property.detail.features}}/\n  {{property.detail.UserId}}/\n  {{property.detail.MinAmount}}/\n  {{property.detail.Maxbathrooms}}/\n  {{property.detail.Maxrooms}}/\n  {{property.detail.Maxreception}}\n  \n      ' *ngFor=\"let property of unmatchedProperties\">\n          <mat-card class=\"mat-card-matches\">\n            <img  src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images \">\n            <div class=\"match-content\">\n              <p><span class=\"heading-nestimate\">Streetname:</span><span class=\"paragraph-color\">{{property.detail.LookingAddress}}</span><br>\n                 <span class=\"heading-nestimate\">Post Code:</span><span class=\"paragraph-color\"> {{property.detail.Lookingpostcode }}</span><br>\n                 <span  class=\"heading-nestimate\">Distance:</span><span class=\"paragraph-color\">{{property.distance | number:'1.1-1'}}\n                  (kms)</span><br>\n                  <span class=\"heading-nestimate\">Price Range:</span><span class=\"paragraph-color\">{{property.detail.MaxAmount}}</span><br>\n                  <span class=\"heading-nestimater\">Property Type:</span><span class=\"paragraph-color\">{{property.detail.PropertyType}}</span></p>\n            </div>\n          </mat-card>\n  \n  \n  \n        </div>\n      </section>\n    </div>\n  </div>\n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerConfirmSellerDetailAlertDialogSellerDataSubmissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\n  Thanks for completing the first step! Your journey to finding the best offers for your property starts here.\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\" routerLink=\"/sellerMatchlisting\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerConfirmSellerDetailConfirmSellerDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n\r\n<div *ngIf=\"isBuyer\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Name:\r\n            <span class=\"output\">&nbsp;{{user.Name}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{user.email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{user.DOB  | date :'longDate'}}</span></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" class=\"btn btn-back\" routerLink=\"/fillformseller/{{listingSeller.Lookingpostcode}}/{{listingSeller.LookingAddress}}/{{listingSeller.LookingTown}}/{{listingSeller.Lookingstate}}/{{listingSeller.PropertyType}}/{{listingSeller.Maxrooms}}/{{listingSeller.MaxAmount}}/{{listingSeller.ownership}}/{{listingSeller.Maxbathrooms}}/{{listingSeller.Maxreception}}/{{listingSeller.PropertyCondition}}/{{listingSeller.features}}/{{listingSeller.Country}}\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerMatchListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n\r\n\r\n  <mat-card class=\"thanku-section\">\r\n    <img mat-card-image src=\"../../../../../../assets/Images/matched.jpg\" class=\"match-image\">\r\n  </mat-card>\r\n\r\n  <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length < 1\"><span\r\n      class=\"outputText\"></span>&nbsp;No Match Listing</p>\r\n  <p class=\"mt-3 main-heading heading-nestimate\" *ngIf=\"matchedProperties.length > 0\">You have<span\r\n      style=\"color:red\">{{matchedProperties.length}}</span>&nbsp;&nbsp;Matched Nestimates created by<span style=\"color:red\"> Home Seekers</span></p>\r\n  <div>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Sort By</mat-label>\r\n      <mat-select name=\"ChainStatus\"  value=\"ChainStatus\"\r\n        class=\"example-full-width\">\r\n        <mat-option value='Search Radius' (click)=\"matchedsearch()\">Search Radius</mat-option>\r\n        <mat-option value='low' (click)=\"lowtohigh()\">Price Range - Low to High</mat-option>\r\n        <mat-option value='high' (click)=\"hightoLow()\">Price Range - High to Low</mat-option>\r\n        <mat-option value='date'>Listed date</mat-option>\r\n        <mat-option value='rooms' (click)=\"roomshightolow()\">No of Rooms</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  \r\n    <section class=\"\" id=\"matchproperties\" *ngIf=\"matchedProperties.length\">\r\n    <div class=\"mat-card-content-new\" *ngFor=\"let property of matchedProperties\">\r\n      <mat-card>\r\n        <span class=\"heading-nestimate card-heading-font\">Nestimate by {{property.title}} {{property.username  | shortName}}</span>\r\n      </mat-card>\r\n      <mat-card>\r\n        <div class=\"mat-card-content-new-content\">\r\n\r\n          <div class=\"mat-card-content-image\">\r\n            <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n\r\n          </div>\r\n\r\n          <div class=\"mat-card-content-text\">\r\n\r\n            <div class=\"price-range\">\r\n\r\n              <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n              <span class=\"outputText price-font\">&pound;{{property.MinAmount}} -\r\n                &pound;{{property.MaxAmount}}</span>\r\n            </div>\r\n\r\n            <div class=\"other-text\">\r\n              <p class=\"heading-nestimate\">Chain Status:<span\r\n                  class=\"outputText\">{{property.ChainStatus}}</span></p>&nbsp; &nbsp;\r\n              <p class=\"heading-nestimate\">Poperty Type:<span\r\n                  class=\"outputText\">{{property.PropertyType}}</span></p>\r\n            </div>\r\n\r\n            <div class=\"button-container\">\r\n\r\n              <button type=\"button\" class=\"btn btn-primary\" routerLink='/SellerSelectedProperty/\r\n              {{property.MaxAmount}}\r\n              /{{property.Lookingpostcode}}\r\n              /{{property.LookingStreetname}}\r\n              /{{property.Position}}\r\n              /{{property.PropertyType}}\r\n              /{{property.Roomsmax}}\r\n              /{{property.Ownership}}\r\n              /{{property.Conditions}}\r\n                /{{property.Maxbathroom}}\r\n                 /{{property.Maxreception}}\r\n                /{{property.features}}\r\n              /{{property.UserId}}\r\n              /{{property.FinancialPosition}}'>See Details</button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n  </section><br><br>\r\n\r\n    <section id=\"youmaylike\">\r\n      <div class=\"other-container\">\r\n      <p class=\"mt-3 main-heading heading-nestimate\"><span clas=\"outputText\"></span>Other Nestimates that may be of interest to you</p>\r\n    </div>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Sort By</mat-label>\r\n            <mat-select name=\"ChainStatus\" \r\n              class=\"example-full-width\">\r\n              \r\n              <mat-option value='Search Radius' (click)=\"unmatchedmatchedsearch()\">Search Radius</mat-option>\r\n              <mat-option value='low' (click)=\"unmatchedlowtohigh()\">Price Range - Low to High</mat-option>\r\n              <mat-option value='high' (click)=\"unmatchedhightoLow()\">Price Range - High to Low</mat-option>\r\n              <mat-option value='date'>Listed date</mat-option>\r\n              <mat-option value='rooms' (click)=\"unmatchedroomshightolow()\">No of Rooms</mat-option>\r\n              <mat-option value='distance' (click)=\"unmatcheddistance()\">Distance</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n     \r\n      <div class=\"mat-card-content-new\" *ngFor=\"let property of unmatchedProperties\">\r\n        <mat-card>\r\n          <span class=\"heading-nestimate card-heading-font\">Nestimate by \r\n          {{property.detail.title}} {{property.detail.username | shortName}}\r\n            \r\n            </span>\r\n        </mat-card>\r\n      \r\n        <mat-card>\r\n          <div class=\"mat-card-content-new-content\">\r\n\r\n            <div class=\"mat-card-content-image\">\r\n              <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n\r\n            </div>\r\n\r\n            <div class=\"mat-card-content-text\">\r\n\r\n              <div class=\"price-range\">\r\n\r\n                <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n                <span class=\"outputText price-font\">&pound;{{property.detail.MinAmount}} -\r\n                  &pound;{{property.detail.MaxAmount}}</span>\r\n              </div>\r\n\r\n              <div class=\"other-text\">\r\n                <p class=\"heading-nestimate\">Chain Status:<span\r\n                    class=\"outputText\">{{property.detail.ChainStatus}}</span></p>&nbsp; &nbsp;\r\n                <p class=\"heading-nestimate\">Poperty Type:<span\r\n                    class=\"outputText\">{{property.detail.PropertyType}}</span></p>\r\n              </div>\r\n\r\n              <div class=\"button-container\">\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" routerLink='/SellerSelectedProperty/\r\n      {{property.detail.MaxAmount}}\r\n      /{{property.detail.Lookingpostcode}}\r\n      /{{property.detail.LookingStreetname}}\r\n      /{{property.detail.Position}}\r\n      /{{property.detail.PropertyType}}\r\n      /{{property.detail.Roomsmax}}\r\n      /{{property.detail.Ownership}}\r\n      /{{property.detail.Conditions}}\r\n        /{{property.detail.Maxbathroom}}\r\n         /{{property.detail.Maxreception}}\r\n        /{{property.detail.features}}\r\n      /{{property.detail.UserId}}\r\n      /{{property.detail.FinancialPosition}}'>See Details</button>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html":
  /*!*****************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html ***!
    \*****************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailAgentSelectionAgentSelectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <mat-card-title class=\"title-agent-selection heading-nestimate\">Agent Selection</mat-card-title>\r\n\r\n\r\n    <mat-card class=\"mt-2\">\r\n        <mat-card-title class=\"note-agent-selection heading-nestimate\">\r\n            Based on the postcode property we recommend you with the following agent\r\n        </mat-card-title>\r\n\r\n    </mat-card>\r\n  \r\n\r\n\r\n    <mat-card class=\"mt-2\">\r\n       <div class=\"agent-selection-radiobutton-container\">\r\n       \r\n     <div class=\"agent-selection-name\">\r\n    <mat-card-title class=\"agent-selection-name heading-nestimate\">Name</mat-card-title>\r\n    <mat-radio-group class=\"example-section\"  value=\"Name\" name=\"Name\">\r\n        <div class=\"radio-button-align\">\r\n        <mat-radio-button class=\"example-margin outputText\" value=\"Rohit Verma\">Rohit Verma</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin  outputText\" value=\"Rohit Bhandari\">Rohit Bhandari</mat-radio-button>\r\n        <mat-radio-button class=\"example-margin  outputText\" value=\"Anumpam\">Anumpam</mat-radio-button>\r\n     \r\n        </div>\r\n      </mat-radio-group>\r\n    \r\n    \r\n    </div>\r\n     <div class=\"agent-selection-commision\">\r\n        <mat-card-title class=\"agent-selection-name heading-nestimate\">Commission</mat-card-title>\r\n        <p class=\"Commission-text outputText\">5%</p>\r\n        <p class=\"Commission-text outputText\">10%</p>\r\n        <p class=\"Commission-text outputText\">20%</p>\r\n     </div>\r\n       </div>\r\n\r\n    </mat-card>\r\n\r\n    <mat-card class=\"mt-2  agent-button\">\r\n        <button mat-raised-button color=\"primary\" routerLink=\"/mymatches\">Select Agent</button>\r\n\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html":
  /*!****************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html ***!
    \****************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailSellerSelectedPropertyDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isSellerSelected\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<div class=\"property-selected-detail-background\">\r\n<div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3 heading-nestimate\">{{title}} {{unNamed | shortName}}</h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\">\r\n      <img  src=\"assets/Images/single-nestimate.jpg\" class=\"match-images\">\r\n    </div>\r\n\r\n\r\n    <div class=\"streetname\">\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Buyer Price Range</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{PriceRange}}</mat-card-subtitle>\r\n      </mat-card>\r\n      \r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Post Code</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Lookingpostcode}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Street Name</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{LookingStreetname}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n   <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Buying Position</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Position}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Financial Position</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{FinancialPosition}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property type</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{PropertyType}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Bedrooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Roomsmax}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Ownership</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{ownership}}</mat-card-subtitle>\r\n      </mat-card>\r\n      \r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Condition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Conditions}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Bathrooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Maxbathroom}} </mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">No of Reception Rooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Maxreception}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Features</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p paragraph-color\">{{features}}</mat-card-subtitle>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"selected-button m-3\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"backClicked()\">Back</button>\r\n      <button mat-raised-button color=\"primary\"(click)=\"Overlayopen()\" >Express Interest</button>\r\n      <button mat-raised-button color=\"primary\"(click)=\"Disablebutton\" >You have</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"continue-form\" *ngIf=\"overlay\">\r\n\r\n  <div class=\"continue-form-data\">\r\n  <div class=\"nestimate-logo\">\r\n    <img src=\"../../../../assets/Images/single-nestimate.jpg\" class=\"nestimate-logo\">\r\n\r\n  </div>\r\n  <div class=\"continue-text\">\r\n    <p class=\"overlay-text\">Thank you  for expressing</p>\r\n\r\n    <p class=\"overlay-text-third\">interest in this buyers Nestimate.Please Sit back while we notify the buyer and await their rsponse.If they confirm their interest  you will be required to select a local estate agent who will contact both parties and start the process </p>\r\n  </div>\r\n  <div class=\"continue-button\">\r\n\r\n    <div class=\"continue-button-container\" (click)=\"submitForm()\">\r\n      OK\r\n    </div> \r\n <div class=\"continue-button mt-2\" (click)=\"continueClose()\">\r\n    \r\n    <div class=\"continue-button-container\">\r\n      CANCEL\r\n    </div> \r\n  </div>\r\n</div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePropertyFillFormSellerFillFormSellerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<!--Login Form-->\r\n\r\n<div class=\"continue-form\" \r\n*ngIf=\"overlay\">\r\n  <div class=\"nestimate-logo\">\r\n    <img src=\"../../../../assets/Images/single-nestimate.jpg\" class=\"nestimate-logo\">\r\n\r\n  </div>\r\n  <div class=\"continue-text\">\r\n    <p class=\"overlay-text\">Thanks for registering!</p>\r\n    <p class=\"overlay-text\">Next Step: Register your home and see what’s possible. Complete the questionnaire to create your Nestimate.\r\n    </p>\r\n\r\n    <p class=\"overlay-text-third\">\r\n    \r\nBased on the answers provided by you on the questionnaire, our system will match the most relevant home seeker created Nestimates with yours.\r\nOnce you've finished, sit back, relax and let us do the hard work for you!</p>\r\n  </div>\r\n  <div class=\"continue-button\" (click)=\"continueClose()\">\r\n    <div class=\"continue-button-container\">\r\n      CONTINUE\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\r\n  <mat-card class=\"sign-in-main\" *ngIf=\"!newUser\">\r\n    <div class=\"user-cross\">\r\n      <h4 class=\"heading-nestimate\">Login</h4>\r\n\r\n    </div>\r\n    <div class=\"social-button mt-4\">\r\n      <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n        Facebook\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n        Google+\r\n      </button>\r\n    </div>\r\n    <div class=\"input-group mb-3 mt-3\"></div>\r\n     <form (keydown.enter)=\"save()\">\r\n\r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n        <input type=\"text\" class=\"form-control custom-field\" type=\"email\" name=\"emails\"  #userEmailLogin  [(ngModel)]=\"emails\" placeholder=\"Enter Email\">\r\n      </div>\r\n \r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-lock form-control-feedback\"></span>\r\n        <input type=\"password\" class=\"form-control custom-field\" name=\"passs\"  #userPasswordLogin type=\"password\" [(ngModel)]=\"passs\" placeholder=\"Enter Passowrd\">\r\n      </div>\r\n      \r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n \r\n  </form>\r\n    <div class=\"input-group-prepend other-option\">\r\n      <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"signIn(userEmailLogin.value, userPasswordLogin.value)\">\r\n      Login\r\n    </button>\r\n    <p class=\"dont-have-account pt-2 heading-nestimate\" id=\"#dont-have-account\" (click)=\"NewUser()\">Don't have an account? <span class=\"hyper outputText\">Sign up</span></p>\r\n  </mat-card>\r\n  <mat-card class=\"mt-4 sign-up-main\" *ngIf=\"newUser\">\r\n\r\n    <div class=\"sign-up\">\r\n      <div class=\"signup-heading\">\r\n\r\n        <div class=\"user-cross\">\r\n          <h4 class=\"heading-nestimate\">Sign up</h4>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"social-button mt-2\">\r\n        <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n          Facebook\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n          Google+\r\n        </button>\r\n      </div>\r\n      <div class=\"input-group mb-3 mt-3\">\r\n        <form (keydown)=\"keyDownFunction($event)\">\r\n\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-user-circle-o form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control custom-field\" placeholder=\"Full Name\" name=\"name\"  [(ngModel)]=\"name\" #displayName>\r\n          </div>\r\n     \r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" type=\"email\" placeholder=\"Email\" #userEmailRegister type=\"email\" name=\"email\" [(ngModel)]=\"email\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-lock form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" placeholder=\"Password\" #userPasswordRegister type=\"password\" name=\"password\"\r\n            [(ngModel)]=\"password\">\r\n          </div>\r\n\r\n  \r\n       \r\n       \r\n        </form>\r\n      </div>\r\n\r\n\r\n      <section class=\"example-section property-con-form\">\r\n\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Email\">Email</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"SMS\">SMS</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Post\">Post</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"All\">Email,SMS and Post from acrefully\r\n          selected<br> third port\r\n        </mat-checkbox>\r\n        <label for=\"text\" class=\"heading-nestimate \">By clicking the sms box,you agreeing to recieve\"</label>\r\n        <label for=\"text\" class=\"heading-nestimate policy\">By clicking below to register, you confirm that you agree to our<span routerLink=\"/terms\"> Terms & Conditions </span>and you have read and understood our <span routerLink=\"/PrivacyPolicy\">Privacy Policy</span> </label>\r\n      </section>\r\n\r\n      <button type=\"button\" class=\"btn btn-social-login\"\r\n        (click)=\"signUp(displayName.value,userEmailRegister.value,userPasswordRegister.value)\">\r\n        Sign Up\r\n      </button>\r\n    <p class=\"dont-have-account pt-2 heading-nestimate\" (click)=\"OldUser()\">Already have an account? Click here to\r\n        sign in</p> \r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--Login Form End-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container forms-container\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"row\">\r\n    <section class=\"col\">\r\n      <form role=\"form\"  *ngIf=\"isLoggedIn\">\r\n        <mat-tab-group #matgroup class=\"form-tab-conatiner\" mat-align-tabs=\"center\" [selectedIndex]=\"selectedIndex\">\r\n          <mat-tab label=\"Personal Details\">\r\n            <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n              <mat-card class=\"card-margin background-new-form\">\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading new-heading-nestimate\">Personal Details</p>\r\n                </mat-card-title>\r\n                <p class=\"forms-star new-heading-nestimate\">*required</p>\r\n              </mat-card>\r\n              <mat-card class=\"card-margin background-new-form\">\r\n\r\n                <label class=\"new-heading-nestimate\">Title*</label><br>\r\n                <mat-form-field>\r\n                  <mat-select name=\"title\" [(ngModel)]=\"user.title\" class=\"drop-down-list\">\r\n                    <mat-option value=\"Mr\">Mr</mat-option>\r\n                    <mat-option value=\"Ms\">Ms</mat-option>\r\n                    <mat-option value=\"Mrs\">Mrs</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--First Name-->\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Full Name\" [formControl]=\"FirstnameFormControl\"\r\n                      name=\"First\" class=\"mat-mail-input\" [(ngModel)]=\"user.Name\">\r\n                    <mat-error\r\n                      *ngIf=\"FirstnameFormControl.hasError('First Name') && !FirstnameFormControl.hasError('required')\">\r\n                      Please enter a valid name\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FirstnameFormControl.hasError('required')\">\r\n                      FirstName is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--First Name End-->\r\n\r\n\r\n                <!--Email Field End-->\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Email Address*\" \r\n                       name=\"Email\" class=\"mat-mail-input\" [(ngModel)]=\"user.Email\" [formControl]=\"emailFormControl\" >\r\n        \r\n                       <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                        Please enter a valid email address\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                        Email is <strong>required</strong>\r\n                      </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--Email Field End-->\r\n\r\n\r\n                <!--Date Of Birth Field-->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"DD/MM/YYYY*\"\r\n                    name=\"DOB\" class=\"mat-mail-input\" [(ngModel)]=\"user.DOB\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n                <!--Date Of Birth Field End-->\r\n\r\n\r\n                <!--Phone Number field-->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <span matPrefix>+44 &nbsp;</span>\r\n                  <input matInput placeholder=\"Phone Number\"  name=\"phonenumber\"\r\n                    class=\"mat-mail-input\" [(ngModel)]=\"user.Phone\" type=”tel”  [formControl]=\"phoneFormControl\" maxlength=\"10\"> \r\n                    <mat-error *ngIf=\"phoneFormControl.hasError('phonenumber') && !phoneFormControl.hasError('required')\">\r\n                      Please enter a valid Phone Number\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"phoneFormControl.hasError('required')\">\r\n                      Phone Number is <strong>required</strong>\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"phoneFormControl.hasError('pattern')\">\r\n                      Phone Number is <strong>not valid</strong>\r\n                  \r\n                    </mat-error>\r\n                </mat-form-field>\r\n                \r\n                <!--Phone Number field-->\r\n\r\n           \r\n\r\n              </mat-card>\r\n                 <!--Current Living-->\r\n                 <mat-card class=\"card-margin background-new-form\">\r\n                  <mat-card-title class=\"mat_card_title\">\r\n                    <p class=\"forms-heading new-heading-nestimate\">Your Address</p>\r\n                  </mat-card-title>\r\n                  <p class=\"paragraph-color new-heading-nestimate\">Area - Search by Postcode</p>\r\n                  <mat-option style=\"background-color: #F5F5F5;\">\r\n                    <input [formControl]=\"autoCompleteControlCurrent\" type=\"text\" placeholder=\"Enter Postcode\"\r\n                      aria-label=\"Post Code\" matInput [matAutocomplete]=\"autoCurrent\"\r\n                      [(ngModel)]=\"user.Currentpostcode\">\r\n                    <mat-autocomplete autoActiveFirstOption #autoCurrent=\"matAutocomplete\"\r\n                      (optionSelected)='getPosts($event.option.value)'>\r\n                      <mat-option *ngFor=\"let item of addressianAutoCompleteCurrent$ | async; let index=index\"\r\n                        [value]=\"item\">\r\n                        <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                        </span> | <span>{{ item.citytown | titlecase}}</span>\r\n                      </mat-option>\r\n                    </mat-autocomplete>\r\n                  </mat-option>\r\n                  <p class=\"paragraph-color new-heading-nestimate\">Area - Search by Address</p>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" name=\"CurrentAddress\"\r\n                      class=\"mat-mail-input\" [(ngModel)]=\"user.CurrentAddress\">\r\n  \r\n                  </mat-form-field>\r\n  \r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\"\r\n                      [(ngModel)]=\"user.CurrentTown\" name=\"CurrentTown\" class=\"mat-mail-input\">\r\n  \r\n                  </mat-form-field>\r\n  \r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"County\" [formControl]=\"stateFormControl\" required\r\n                      [(ngModel)]=\"user.Currentstate\" name=\"Currentstate\" class=\"mat-mail-input\">\r\n                  </mat-form-field>\r\n                </mat-card>\r\n                <!--Current Living  End-->\r\n              <ul class=\"submit-button\">\r\n                <div class=\"button-next\">\r\n                  <a (click)=\"selectTab(1, 0)\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n                </div>\r\n              </ul>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Property Details\">\r\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step2\">\r\n  \r\n\r\n\r\n          \r\n\r\n\r\n\r\n              <!--Where Are Looking for property-->\r\n              <mat-card class=\"card-margin background-new-form\">\r\n                <mat-card-title class=\"mat_card_title new-heading-nestimate\">are you looking to</mat-card-title>\r\n                <mat-radio-group aria-label=\"Select an option\" class=\"radio-top-buyer\">\r\n                  <mat-radio-button value=\"sell\">sell</mat-radio-button>\r\n                  <mat-radio-button value=\"let\">let</mat-radio-button>\r\n                </mat-radio-group>\r\n                <p class=\"forms-heading new-heading-nestimate pb-2\">Please fill in details of the property for sale</p>\r\n                <mat-checkbox (change)='getSame(Seller)' class=\"paragraph-color\" style=\"color:white\">Same as residential address</mat-checkbox>\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading new-heading-nestimate\">Address of property for sale</p>\r\n                </mat-card-title>\r\n\r\n                <p class=\"mt-4 new-heading-nestimate\">Search by Postcode</p>\r\n\r\n                <mat-option style=\"background-color: #F5F5F5;\">\r\n                  <input [formControl]=\"autoCompleteControlLooking\" type=\"text\" placeholder=\"Enter Postcode\"\r\n                    aria-label=\"Post-Code\" matInput [matAutocomplete]=\"autoLooking\"\r\n                    [(ngModel)]=\"listingSeller.Lookingpostcode\">\r\n                  <mat-autocomplete autoActiveSecondOption #autoLooking=\"matAutocomplete\"\r\n                    (optionSelected)='getPost($event.option.value)'>\r\n                    <mat-option *ngFor=\"let item of addressianAutoCompleteLooking$ | async; let index=index\"\r\n                      [value]=\"item\">\r\n                      <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                      </span> | <span>{{ item.citytown | titlecase}}</span>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-option>\r\n\r\n\r\n\r\n                <p class=\"mt-4 new-heading-nestimate\">Search by Address</p>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Address\" name=\"LookingAddress\" class=\"mat-mail-input\"\r\n                    [(ngModel)]=\"listingSeller.LookingAddress\">\r\n\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width mb-3\">\r\n                  <input matInput placeholder=\"Town/City\" [(ngModel)]=\"listingSeller.LookingTown\" name=\"LookingTowncity\"\r\n                    class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"County\" required [(ngModel)]=\"listingSeller.Lookingstate\"\r\n                    name=\"Lookingstate\" class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Country\" required [(ngModel)]=\"listingSeller.Country\"\r\n                    name=\"Country\" class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n              </mat-card>\r\n              <!--Where Are Looking for property End-->\r\n\r\n\r\n\r\n              <mat-card class=\"card-margin background-new-form\">\r\n\r\n                <label for=\"text\" class=\"new-heading-nestimate \">Property Type*:</label><br>\r\n  \r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <mat-select [(ngModel)]=\"listingSeller.PropertyType\" value=\"PropertyType\"\r\n                    name=\"PropertyType\">\r\n                      <mat-option value=\"Flat\">Flat</mat-option>\r\n                      <mat-option class=\"example-margin\" value=\"Studio\">Studio</mat-option>\r\n                      <mat-option class=\"example-margin\" value=\"Terracedhouse\">Terraced house</mat-option>\r\n                   \r\n                      <mat-option class=\"example-margin\" value=\"Maisonette\">Maisonette</mat-option>\r\n                      <mat-option class=\"example-margin\" value=\"Semi-detached\">Semi-detached house</mat-option>\r\n                        <mat-option class=\"example-margin\" value=\"Bungalow\">Bungalow</mat-option>\r\n                          <mat-option class=\"example-margin\" value=\"Detachedhouse\">Detached house</mat-option>\r\n                            <mat-option class=\"example-margin\" value=\"Town house\">Town house</mat-option>\r\n                              <mat-option class=\"example-margin\" value=\"Country house\">Country house</mat-option>\r\n                                <mat-option class=\"example-margin\" value=\"Barn conversion\">Barn conversion</mat-option>\r\n                                  <mat-option class=\"example-margin\" value=\"Farm\">Farm</mat-option>\r\n                                  <mat-option class=\"example-margin\" value=\"Houseboat\">Houseboat</mat-option>\r\n                                  <mat-option class=\"example-margin\" value=\"Lodge\">Lodge</mat-option>\r\n\r\n                    </mat-select>\r\n                  </mat-form-field><br>\r\n         \r\n\r\n\r\n\r\n\r\n              \r\n\r\n                <!--Min Max Rooms-->\r\n                <label class=\"new-heading-nestimate\">No of Bedrooms</label>\r\n                <div class=\"price-selection\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                 \r\n                    <mat-select [(value)]=\"Maxrooms\" name=\"Maxrooms\" [(ngModel)]=\"listingSeller.Maxrooms\">\r\n                      <mat-option value=\"Studio\">Studio</mat-option>\r\n                      <mat-option value=\"1\">1</mat-option>\r\n                      <mat-option value=\"2\">2</mat-option>\r\n                      <mat-option value=\"3\">3</mat-option>\r\n                      <mat-option value=\"4\">4</mat-option>\r\n                      <mat-option value=\"5\">5 or More</mat-option> \r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!--Min Max Rooms End-->\r\n\r\n\r\n                <!--Min Max Amount-->\r\n                <label class=\"new-heading-nestimate\">Desired Price</label>\r\n                <div class=\"price-selection\">\r\n              \r\n\r\n                  <mat-form-field class=\"example-full-width\">\r\n                  \r\n                    <mat-select [(value)]=\"max\" name=\"MaxAmount\" [(ngModel)]=\"listingSeller.MaxAmount\">\r\n                      <mat-option value=\"50000\">50,000</mat-option>\r\n                      <mat-option value=\"60000\">60,000</mat-option>\r\n                      <mat-option value=\"70000\">70,000</mat-option>\r\n                      <mat-option value=\"80000\">80,000</mat-option>\r\n                      <mat-option value=\"90000\">90,000</mat-option>\r\n                      <mat-option value=\"100000\">100,000</mat-option>\r\n                      <mat-option value=\"110000\">110,000</mat-option>\r\n                      <mat-option value=\"120000\">120,000</mat-option>\r\n                      <mat-option value=\"125000\">125,000</mat-option>\r\n                      <mat-option value=\"130000\">130,000</mat-option>\r\n                      <mat-option value=\"140000\">140,000</mat-option>\r\n                      <mat-option value=\"150000\">150,000</mat-option>\r\n                      <mat-option value=\"160000\">160,000</mat-option>\r\n                      <mat-option value=\"170000\">170,000</mat-option>\r\n                      <mat-option value=\"175000\">175,000</mat-option>\r\n                      <mat-option value=\"180000\">180,000</mat-option>\r\n                      <mat-option value=\"190000\">190,000</mat-option>\r\n                      <mat-option value=\"200000\">200,000</mat-option>\r\n                      <mat-option value=\"210000\">210,000</mat-option>\r\n                      <mat-option value=\"220000\">220,000</mat-option>\r\n                      <mat-option value=\"230000\">230,000</mat-option>\r\n                      <mat-option value=\"240000\">240,000</mat-option>\r\n                      <mat-option value=\"250000\">250,000</mat-option>\r\n                      <mat-option value=\"260000\">260,000</mat-option>\r\n                      <mat-option value=\"270000\">270,000</mat-option>\r\n                      <mat-option value=\"280000\">280,000</mat-option>\r\n                      <mat-option value=\"290000\">290,000</mat-option>\r\n                      <mat-option value=\"300000\">300,000</mat-option>\r\n                      <mat-option value=\"325000\">325,000</mat-option>\r\n                      <mat-option value=\"350000\">350,000</mat-option>\r\n                      <mat-option value=\"375000\">375,000</mat-option>\r\n                      <mat-option value=\"400000\">400,000</mat-option>\r\n                      <mat-option value=\"425000\">425,000</mat-option>\r\n                      <mat-option value=\"450000\">450,000</mat-option>\r\n                      <mat-option value=\"475000\">475,000</mat-option>\r\n                      <mat-option value=\"500000\">500,000</mat-option>\r\n                      <mat-option value=\"525000\">525,000</mat-option>\r\n                      <mat-option value=\"550000\">550,000</mat-option>\r\n                      <mat-option value=\"575000\">575,000</mat-option>\r\n                      <mat-option value=\"600000\">600,000</mat-option>\r\n                      <mat-option value=\"625000\">625,000</mat-option>\r\n                      <mat-option value=\"650000\">650,000</mat-option>\r\n                      <mat-option value=\"675000\">675,000</mat-option>\r\n                      <mat-option value=\"700000\">700,000</mat-option>\r\n                      <mat-option value=\"725000\">725,000</mat-option>\r\n                      <mat-option value=\"750000\">750,000</mat-option>\r\n                      <mat-option value=\"775000\">775,000</mat-option>\r\n                      <mat-option value=\"800000\">800,000</mat-option>\r\n                      <mat-option value=\"825000\">825,000</mat-option>\r\n                      <mat-option value=\"850000\">850,000</mat-option>\r\n                      <mat-option value=\"875000\">875,000</mat-option>\r\n                      <mat-option value=\"900000\">900,000</mat-option>\r\n                      <mat-option value=\"925000\">925,000</mat-option>\r\n                      <mat-option value=\"950000\">950,000</mat-option>\r\n                      <mat-option value=\"975000\">975,000</mat-option>\r\n                      <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                      <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                      <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                      <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                      <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                      <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                      <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                      <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                      <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                      <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                      <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                      <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                      <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                      <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                      <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                      <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                      <mat-option value=\"\">No max</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!--Min Max Amount End-->\r\n\r\n\r\n                <!--Ownership Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label class=\"new-heading-nestimate\">Ownership</mat-label>\r\n                  <mat-select placeholder=\"Ownership\" [(ngModel)]=\"listingSeller.ownership\" value=\"ownership\" name=\"ownership\">\r\n                    <mat-option value=\"Leasehold\">Leasehold</mat-option>\r\n                    <mat-option value=\"Freehold\">Freehold</mat-option>\r\n                    <mat-option value=\"Share of Freehold\">Share of Freehold</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Ownership Field End-->\r\n\r\n\r\n               \r\n\r\n              </mat-card>\r\n  \r\n<mat-card class=\"card-margin background-new-form\">\r\n\r\n  <p class=\"forms-heading new-heading-nestimate pb-2\">Optional Details</p>\r\n\r\n  <!--Min Max No of Bathrooms-->\r\n  <label class=\"new-heading-nestimate\">No of Bathrooms</label>\r\n  <div class=\"price-selection\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-select [(value)]=\"Maxbathrooms\" name=\"Maxbathrooms\" [(ngModel)]=\"listingSeller.Maxbathrooms\">\r\n        <mat-option value=\"1\">1</mat-option>\r\n        <mat-option value=\"2\">2</mat-option>\r\n        <mat-option value=\"3\">3 or more</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <!--Min Max No of Bathrooms End-->\r\n<!--Min Max No of Reception Rooms-->\r\n<label class=\"new-heading-nestimate\">No of Reception Rooms</label>\r\n<div class=\"price-selection\">\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n\r\n    <mat-select [(value)]=\"Maxreception\" name=\"Maxreception\" [(ngModel)]=\"listingSeller.Maxreception\">\r\n      <mat-option value=\"1\">1</mat-option>\r\n      <mat-option value=\"2\">2</mat-option>\r\n      <mat-option value=\"3\">3 or more</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<!--Min Max No of Reception Rooms End-->\r\n\r\n                <!--PropertyCondition Field-->\r\n                <label class=\"new-heading-nestimate\">Property Condition</label>\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                 \r\n                  <mat-select  [(ngModel)]=\"listingSeller.PropertyCondition\"\r\n                     value=\"PropertyCondition\" name=\"PropertyCondition\">\r\n                    <mat-option value=\"Refurbished\">Refurbished</mat-option>\r\n                    <mat-option value=\"NewBuild\">New Build</mat-option>\r\n                    <mat-option value=\"Needsmodernisation\">Needs modernisation</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--PropertyCondition Field End-->\r\n                <!--Aplicable Features-->\r\n                <label class=\"new-heading-nestimate\">Property Features</label>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  \r\n                  <mat-select [formControl]=\"features\" multiple [(ngModel)]=\"listingSeller.features\" #sl>\r\n                    <div class=\"select-constion\">\r\n                      <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"sl.close()\">\r\n                    </div>\r\n                    <mat-option *ngFor=\"let features of applicable\" [value]=\"features\" class=\"select-check mat-check\">{{features}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Aplicable Feature End-->\r\n\r\n</mat-card>\r\n  \r\n\r\n              <div class=\"button-next-tab2\">\r\n                <a (click)=\"selectTab(0, 1)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n                <a (click)=\"selectTab(2, 1)\" class=\"btn btn-primary btnNext btn-next\" (click)=\"onSubmit()\">Next</a>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </mat-tab>\r\n\r\n    \r\n        </mat-tab-group>\r\n      </form>\r\n    </section>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAgentSignupAgentSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isAgentSelected\" class=\"loading-container\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"agent-signup-background\">\r\n\r\n\r\n\r\n<div class=\"extra-buttons\">\r\n\r\n<div class=\"dark-button\" routerLink=\"/Agentsignupform\">Join Us</div>\r\n<div class=\"Light-button\" routerLink=\"/Agentsignupform\">Log In</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<mat-card class=\"dark-background\">\r\n <div class=\"heading-nestimate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nostrum eligendi corrupti repellendus autem ea, eum ipsa temporibus sint quo, aliquid odio obcaecati hic dolorem nesciunt! Cum, distinctio, fugiat placeat dolor autem odit accusamus ipsum in, tenetur porro quos officiis dolorum! Commodi odio, nesciunt molestiae quod dolorum non nam iusto!\r\n </div>\r\n\r\n\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"container property-detail-container\">\r\n    <h3 class=\"property-detail-h3\">Agent Signup</h3>\r\n    <div class=\"wrapper-detail-container\">\r\n      <form #addressForm=\"ngForm\"  (ngSubmit)=\"logValue()\" >\r\n     <mat-card >\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Name of Agent\" required\r\n                   name=\"name\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Name\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Contact Person\" \r\n                   name=\"ContactPerson\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.ContactPerson\" >\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Phone Number\" \r\n                   name=\"Phone Number\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.PhoneNumber\" >\r\n              </mat-form-field>\r\n         \r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\" required\r\n                   name=\"Email\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Email\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Address\" required\r\n                   name=\"Address\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Address\">\r\n              </mat-form-field>\r\n            \r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Commission\" required\r\n                 name=\"Commission\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.commission\">\r\n            </mat-form-field>\r\n          </mat-card>\r\n\r\n\r\n        <mat-card class=\"mt-2\">     <mat-card-title class=\"signup-caution\">In which areas do you deal?</mat-card-title> </mat-card>\r\n        <mat-card class=\"mt-2\" >\r\n         <div class=\"search-postcode-field\" *ngFor=\"let Postcode of Postcodes; let i = index;\">\r\n            <mat-form-field class=\"\">\r\n                <input matInput placeholder=\"Search Postcode\" required\r\n                   name=\"SearchPostcode_{{i}}\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.SearchPostcode\" >\r\n              </mat-form-field>\r\n              <button mat-raised-button color=\"primary\" class=\"button-agent-signup\" (click)=\"addPostcodes()\">Add Postcode</button>\r\n         </div>\r\n        </mat-card>\r\n    <mat-card class=\"mt-2\">   <mat-card-title class=\"signup-caution-last\">*If your are national agent mail us at contactus@snapstreet.com</mat-card-title> </mat-card>\r\n    \r\n  <mat-card class=\" mt-2 button-card\">\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"submit-agent-signup\" (click)=\"submitForm()\">Submit</button>\r\n\r\n  </mat-card>\r\n</form>\r\n  </div>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agentsignupform/agentsignupform.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agentsignupform/agentsignupform.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAgentsignupformAgentsignupformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-background\" *ngIf=\"!loggedIn\">\n \n<app-template></app-template>\n\n</div>\n<div class=\"agent-form\" *ngIf=\"loggedIn\">\n  <div class=\"agent-form-heading heading-nestimate\">Agent SignUp Form</div>\n <mat-card class=\"mat-card-item\">\n\n  <div class=\"heading-signup heading-nestimate\">Please fill your company details</div> \n </mat-card>   \n<mat-card class=\"mat-card-item\">\n    <form>\n        <mat-form-field class=\"full-width\">\n          <mat-label>First name</mat-label>\n          <input matInput #first >\n        </mat-form-field>\n\n\n        <mat-form-field class=\"full-width\">\n            <mat-label>Company Name</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n\n\n          <div class=\"full-width mb-4\">\n          <mat-option style=\"background-color: #F5F5F5;\">\n            <input type=\"text\" placeholder=\"Enter Postcode\"\n              aria-label=\"Post Code\" matInput [matAutocomplete]=\"autolooking\"\n             name=\"Lookingpostcode\">\n            <mat-autocomplete autoActivesecondOption #autolooking=\"matAutocomplete\">\n              <mat-option  [value]=\"item\">\n              </mat-option>\n            </mat-autocomplete>\n          </mat-option>\n        </div>\n\n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Address</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n\n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Job title</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n         \n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Phone Number</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n\n         \n          <mat-form-field class=\"full-width\">\n            <mat-label>Email address</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Sole Agency Fees</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Multiple Agency Fees</mat-label>\n            <input matInput #first >\n          </mat-form-field>\n          <label style=\"color:white\">Upload Image</label>\n<div class=\"file-upload\">\n    \n          <input type=\"file\" name=\"fileToUpload\" id=\"fileToUpload\">\n          <button mat-raised-button color=\"primary\">Upload Image</button>\n</div>\n          \n<div class=\"submit-button\">\n<button mat-raised-button color=\"primary\">Submit</button>\n</div>\n    </form>\n</mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuChatsChatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container chats-main-container\">\r\n   <div class=\"wrapper-chat-container\">\r\n    <h3 class=\"property-detail-h3\">My Chats</h3>\r\n      <div class=\"chat-container\">\r\n          <img src=\"/assets/Images/Henrik_Urdal-removebg-preview.png\">\r\n          <p class=\"chat-p\">Jhon doe<br>\r\n         <span class=\"user-class\">Seller</span></p>\r\n      </div>\r\n\r\n\r\n   </div>\r\n\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPrefrencesPrefrencesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"prefrences-main-div container\">\r\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\r\n    \r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyListingsMyListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-requirement-container container\">\r\n  <p class=\"my-requirement-heading heading-nestimate\">\r\n    My Nestimates\r\n  </p>\r\n\r\n  <mat-tab-group>\r\n    <mat-tab label=\"To Buy\" class=\"mat-label-align\" *ngIf=\"propertyRequirementDetails.length > 0\">\r\n      <div class=\"mat-card-content-new\" *ngFor=\"let requirement of propertyRequirementDetails\" >\r\n        <mat-card class=\"mat-card\">\r\n          <div class=\"mat-card-content-new-content\">\r\n            <div class=\"mat-card-content-image\">\r\n              <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n            </div>\r\n            <div class=\"mat-card-content-text\">\r\n              <div class=\"price-range\">\r\n                <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n                <span class=\"outputText price-font\">&pound;{{requirement.MinAmount}}     -     \t&pound;{{requirement.MaxAmount}}</span>\r\n              </div>\r\n              <div class=\"other-text\">\r\n                <p class=\"heading-nestimate\">Search SearchRadius:<span\r\n                    class=\"outputText\">{{requirement.SearchRadius}}</span></p>&nbsp; &nbsp;\r\n                <p class=\"heading-nestimate\">Poperty Type:<span\r\n                    class=\"outputText\">{{requirement.PropertyType}}</span></p>\r\n              </div>\r\n              <div class=\"button-container\">\r\n                <button type=\"button\" class=\"btn btn-primary\" >See Details</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"To Sell\" class=\"mat-label-align\" *ngIf=\"propertyDetails.length > 0\">\r\n      \r\n      <div class=\"mat-card-content-new\"  *ngFor=\"let property of propertyDetails\"  >\r\n        <mat-card class=\"mat-card\">\r\n          <div class=\"mat-card-content-new-content\">\r\n            <div class=\"mat-card-content-image\">\r\n              <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n            </div>\r\n            <div class=\"mat-card-content-text\">\r\n              <div class=\"price-range\">\r\n                <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n                <span class=\"outputText price-font\">&pound;{{property.MaxAmount}}</span>\r\n              </div>\r\n              <div class=\"other-text\">\r\n                <p class=\"heading-nestimate\">Looking Postcode:<span\r\n                    class=\"outputText\">{{property.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n                <p class=\"heading-nestimate\">Poperty Type:<span\r\n                    class=\"outputText\">{{property.PropertyType}}</span></p>\r\n              </div>\r\n              <div class=\"button-container\">\r\n                <button type=\"button\" class=\"btn btn-primary\" >See Details</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n\r\n   \r\n    \r\n    \r\n    \r\n    </mat-tab>\r\n  \r\n  </mat-tab-group>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyMatchesMyMatchesSelectedDetailsMyMatchesSelectedDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n  </div>\r\n  \r\n  <div class=\"property-selected-detail-background\">\r\n    <div class=\"container property-detail-container\">\r\n      <!-- <h3 class=\"property-detail-h3 heading-nestimate\">{{title}} {{unNamed | shortName}}</h3> -->\r\n      <div class=\"wrapper-detail-container\">\r\n        <div id=\"demo\">\r\n          <img  src=\"assets/Images/single-nestimate.jpg\" class=\"match-images\">\r\n        </div>\r\n    \r\n    \r\n        <div class=\"streetname\">\r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Pincode</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Lookingpostcode}}</mat-card-subtitle>\r\n          </mat-card>\r\n          \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">County</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p outputText\">{{Lookingstate}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Address</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p outputText\">{{LookingAddress}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n    \r\n       <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Property Condition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{PropertyCondition}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n    \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Ownership</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p outputText\">{{ownership}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Property type</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p paragraph-color\">{{PropertyType}}</mat-card-subtitle>\r\n          </mat-card>\r\n      \r\n    \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Ownership</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p paragraph-color\">{{ownership}}</mat-card-subtitle>\r\n          </mat-card>\r\n          \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Property Type</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p outputText\">{{PropertyType}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n          <mat-card class=\"Mat-card-div\">\r\n            <mat-card-title class=\"details-p-headings heading-nestimate\">Applicable Feature</mat-card-title>\r\n            <mat-card-subtitle class=\"details-output-p outputText\">{{features}}</mat-card-subtitle>\r\n          </mat-card>\r\n    \r\n    \r\n    \r\n        </div>\r\n        <div class=\"selected-button m-3\">\r\n          <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='pending'\" disabled>Pending</button>\r\n          <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='confirm_interest'\" routerLink=\"/selectAgent\">Confirm  Interest</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyMatchesMyMatchesToSellSelectedDetailMyMatchesToSellSelectedDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n  \r\n<div class=\"property-selected-detail-background\">\r\n  <div class=\"container property-detail-container\">\r\n    <!-- <h3 class=\"property-detail-h3 heading-nestimate\">{{title}} {{unNamed | shortName}}</h3> -->\r\n    <div class=\"wrapper-detail-container\">\r\n      <div id=\"demo\">\r\n        <img  src=\"assets/Images/single-nestimate.jpg\" class=\"match-images\">\r\n      </div>\r\n  \r\n  \r\n      <div class=\"streetname\">\r\n        <mat-card class=\"Mat-card-div\">\r\n          <mat-card-title class=\"details-p-headings heading-nestimate\">Pincode</mat-card-title>\r\n          <mat-card-subtitle class=\"details-output-p paragraph-color\">{{Lookingpostcode}}</mat-card-subtitle>\r\n        </mat-card>\r\n        \r\n        \r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">ChainStatus</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{ChainStatus}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">FinancialPosition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{FinancialPosition}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Type</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Type}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Position</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Position}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">SearchRadius</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{SearchRadius}}</mat-card-subtitle>\r\n      </mat-card>\r\n  \r\n  \r\n  \r\n      </div>\r\n      <div class=\"selected-button m-3\">\r\n        <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='pending'\" disabled>Pending</button>\r\n        <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='confirm_interest'\" routerLink=\"/selectAgent\">Confirm Interest</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3\">{{LookingAddress}}</h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\">\r\n      <img *ngIf=\"PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images\">\r\n      <img *ngIf=\"PropertyType=='TerracedHouse'\" src=\"assets/Images/Terraced.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images\">\r\n\r\n    </div>\r\n    <div class=\"streetname\">\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">Pincode</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{Lookingpostcode}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings heading-nestimate\">PriceRange</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p outputText\">{{MaxAmount}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <div class=\"selected-button\">\r\n      \r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyMatchesMyMatchesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container matches-main-container\">\r\n  <p class=\"nestimate-heading heading-nestimate\">Nestimates Activity</p>\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n\r\n    <mat-tab label=\"Your action\r\n    needed\">\r\n\r\n    <!-- <div class=\"heading-nestimate actvity-headings\"> Confirmed By you </div> -->\r\n      <div class=\"mat-card-content-new\"  *ngFor=\"let property of sellerProperty\">\r\n        <!-- <mat-card>\r\n          <span class=\"heading-nestimate card-heading-font\">Nestimate by</span>\r\n        </mat-card> -->\r\n        <mat-card class=\"mat-card mt-2\" *ngIf=\"property.matchStatus=='confirm_interest'\">\r\n          <div class=\"mat-card-content-new-content\">\r\n            <div class=\"mat-card-content-image\">\r\n              <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n            </div>\r\n            <div class=\"mat-card-content-text\">\r\n              <div class=\"price-range\">\r\n                <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n                <span class=\"outputText price-font\">&pound;{{property.MaxAmount}}</span>\r\n              </div>\r\n              <div class=\"other-text\">\r\n                <p class=\"heading-nestimate\">Postcode:<span\r\n                    class=\"outputText\">{{property.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n                <p class=\"heading-nestimate\">Poperty Type:<span\r\n                    class=\"outputText\">{{property.PropertyType}}</span></p>\r\n              </div>\r\n              <div class=\"button-container\">\r\n               <button type=\"button\" class=\"btn btn-primary\"  routerLink='/mymatchesselecteddetail/{{property.Lookingpostcode}}/{{property.LookingAddress}}/{{property.Roomsmax}}/{{property.PropertyCondition}}/{{property.MaxAmount}}/{{property.Lookingstate}}/{{property.PropertyType}}/{{property.ownership}}/{{property.features}}/{{property.matchStatus}}'>See Details</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n      <!-- <div class=\"heading-nestimate actvity-headings\">Awaiting your confirmation</div> -->\r\n\r\n      <div class=\"mat-card-content-new\"  *ngFor=\"let buyerProperty of buyerProperty\">\r\n        <!-- <mat-card>\r\n          <span class=\"heading-nestimate card-heading-font\">Nestimate by</span>\r\n        </mat-card> -->\r\n        <mat-card class=\"mat-card mt-2\" *ngIf=\"property.matchStatus=='confirm_interest'\">\r\n          <div class=\"mat-card-content-new-content\">\r\n            <div class=\"mat-card-content-image\">\r\n              <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n            </div>\r\n            <div class=\"mat-card-content-text\">\r\n              <div class=\"price-range\">\r\n                <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n                <span class=\"outputText price-font\">&pound;{{buyerProperty.MaxAmount}}</span>\r\n              </div>\r\n              <div class=\"other-text\">\r\n                <p class=\"heading-nestimate\">Postcode:<span\r\n                    class=\"outputText\">{{buyerProperty.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n                <p class=\"heading-nestimate\">Poperty Type:<span\r\n                    class=\"outputText\">{{buyerProperty.PropertyType}}</span></p>\r\n              </div>\r\n              <div class=\"button-container\">\r\n               <button type=\"button\" class=\"btn btn-primary\"  routerLink='/MyMatchesseller/{{buyerProperty.Lookingpostcode}}/{{buyerProperty.ChainStatus}}/{{buyerProperty.FinancialPosition}}/{{buyerProperty.Type}}/{{buyerProperty.Position}}/{{buyerProperty.SearchRadius}}/{{buyerProperty.PriceRange}}/{{buyerProperty.matchStatus}}'>See Details</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n\r\n\r\n\r\n<mat-tab label=\"Awaiting Response\">\r\n  <!-- <div class=\"heading-nestimate actvity-headings\">Awaiting confirmation from other party</div> -->\r\n  <div class=\"mat-card-content-new\" *ngFor=\"let property of sellerProperty\">\r\n    <!-- <mat-card>\r\n      <span class=\"heading-nestimate card-heading-font\">Nestimate by</span>\r\n    </mat-card> -->\r\n    <mat-card class=\"mat-card mt-2\">\r\n      <div class=\"mat-card-content-new-content\">\r\n        <div class=\"mat-card-content-image\">\r\n          <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n        </div>\r\n        <div class=\"mat-card-content-text\">\r\n          <div class=\"price-range\">\r\n            <span class=\"heading-nestimate\">Their Desired Price</span> <br>\r\n            <span class=\"outputText price-font\">&pound;{{property.MaxAmount}}</span>\r\n          </div>\r\n          <div class=\"other-text\">\r\n            <p class=\"heading-nestimate\">Postcode:<span\r\n                class=\"outputText\">{{property.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n            <p class=\"heading-nestimate\">Poperty Type:<span\r\n                class=\"outputText\">{{property.PropertyType}}</span></p>\r\n          </div>\r\n          <div class=\"button-container\">\r\n           <button type=\"button\" class=\"btn btn-primary\" routerLink='/mymatchesselecteddetail/{{property.Lookingpostcode}}/{{property.LookingAddress}}/{{property.norooms}}/{{property.PropertyCondition}}/{{property.MinAmount}}/{{property.Lookingstate}}/{{property.PropertyType}}/{{property.ownership}}/{{property.features}}/{{property.matchStatus}}'>See Details</button>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\t\r\n\r\n  <!-- <div class=\"heading-nestimate actvity-headings\">Confirmed by other party</div> -->\r\n  <div class=\"mat-card-content-new\"  *ngFor=\"let buyerProperty of buyerProperty\">\r\n    <!-- <mat-card>\r\n      <span class=\"heading-nestimate card-heading-font\">Nestimate by</span>\r\n    </mat-card> -->\r\n    <mat-card class=\"mat-card mt-2\">\r\n      <div class=\"mat-card-content-new-content\">\r\n        <div class=\"mat-card-content-image\">\r\n          <img src=\"../../../../../../assets/Images/sidelogo.png\" class=\"match-images\">\r\n        </div>\r\n        <div class=\"mat-card-content-text\">\r\n          <div class=\"price-range\">\r\n            <span class=\"heading-nestimate\">Their Price Range</span> <br>\r\n            <span class=\"outputText price-font\">&pound;{{buyerProperty.MinAmount}}  - &pound;{{buyerProperty.MaxAmount}}</span>\r\n          </div>\r\n          <div class=\"other-text\">\r\n            <p class=\"heading-nestimate\">Postcode:<span\r\n                class=\"outputText\">{{buyerProperty.Lookingpostcode}}</span></p>&nbsp; &nbsp;\r\n            <p class=\"heading-nestimate\">Poperty Type:<span\r\n                class=\"outputText\">{{buyerProperty.PropertyType}}</span></p>\r\n          </div>\r\n          <div class=\"button-container\">\r\n           <button type=\"button\" class=\"btn btn-primary\"  routerLink='/MyMatchesseller/{{buyerProperty.Lookingpostcode}}/{{buyerProperty.ChainStatus}}/{{buyerProperty.FinancialPosition}}/{{buyerProperty.Type}}/{{buyerProperty.Position}}/{{buyerProperty.SearchRadius}}/{{buyerProperty.MaxAmount}}/{{buyerProperty.matchStatus}}'>See Details</button>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\t\r\n\r\n</mat-tab>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   \r\n  </mat-tab-group>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/select-agent/select-agent.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/select-agent/select-agent.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyMatchesSelectAgentSelectAgentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <mat-card-title class=\"title-agent-selection heading-nestimate\">Agent Selection</mat-card-title>\n\n\n    <mat-card class=\"mt-2 dark-background\">\n        <mat-card-title class=\"note-agent-selection heading-nestimate\">\n            You are nearly there! To complete the final step - select a local estate agent from the list below. They\n            will be in touch after receiving details of the Nestimate\n        </mat-card-title>\n\n\n        <div class=\"mandatory\">\n\n\n            <div class=\"mandatory-text heading-nestimate\">I consent my details being sent to the selected estate agent\n                and their partners to they can contact me.</div>\n\n            <div class=\"mandatory-slide\">\n                <mat-slide-toggle></mat-slide-toggle>\n            </div>\n\n\n\n\n        </div>\n\n    </mat-card>\n\n\n\n    <mat-card class=\"mt-2 p-0 dark-background mb-2\">\n        <div class=\"agent-selection-radiobutton-container\">\n\n            <div class=\"agent-selection-name\">\n                <div class=\"image-agent-section\">\n                    <img src=\"../../../../assets/Images/dexter.png\" class=\"agent-image\">\n                </div>\n                <div class=\"agent-address-section\">\n                    <div class=\"company-name heading-nestimate\">Dexters London </div>\n                    <div class=\"dexter-address heading-nestimate\">C-131, Ashok Vihar, Phase</div>\n                </div>\n            </div>\n            <div class=\"agent-selection-commision\">\n\n                <div class=\"agency-text mb-1\">\n                    <div class=\"sole-agency-fees heading-nestimate\">\n                        Sole agency Fees</div>\n\n                    <div class=\"Multiple-agency-fees heading-nestimate\">\n                        Multiple agency Fees</div>\n                </div>\n\n                <div class=\"agency-percentage mb-1\">\n                    <div class=\"sole-agency-percen heading-nestimate\">\n                        1.50%</div>\n\n                    <div class=\"Multiple-agency-percen  heading-nestimate\">\n                        1.75%</div>\n                </div>\n\n            </div>\n\n            <div class=\"agent-selction buttons\">\n                <button mat-raised-button color=\"primary\">Read Reviews</button>\n                <button mat-raised-button color=\"primary\" routerLink=\"/mymatches\">Select Agent</button>\n\n            </div>\n        </div>\n\n    </mat-card>\n\n    <mat-card class=\"mt-2 p-0 dark-background mb-2\">\n        <div class=\"agent-selection-radiobutton-container\">\n\n            <div class=\"agent-selection-name\">\n                <div class=\"image-agent-section\">\n                    <img src=\"../../../../assets/Images/brinkley.jpg\" class=\"agent-image\">\n                </div>\n                <div class=\"agent-address-section\">\n                    <div class=\"company-name heading-nestimate\">Brinkle</div>\n                    <div class=\"dexter-address heading-nestimate\">C-131, Ashok Vihar, Phase</div>\n                </div>\n            </div>\n            <div class=\"agent-selection-commision\">\n\n                <div class=\"agency-text mb-1\">\n                    <div class=\"sole-agency-fees heading-nestimate\">\n                        Sole agency Fees</div>\n\n                    <div class=\"Multiple-agency-fees heading-nestimate\">\n                        Multiple agency Fees</div>\n                </div>\n\n                <div class=\"agency-percentage mb-1\">\n                    <div class=\"sole-agency-percen heading-nestimate\">\n                        1.50%</div>\n\n                    <div class=\"Multiple-agency-percen  heading-nestimate\">\n                        1.75%</div>\n                </div>\n\n            </div>\n\n            <div class=\"agent-selction buttons\">\n                <button mat-raised-button color=\"primary\">Read Reviews</button>\n                <button mat-raised-button color=\"primary\" routerLink=\"/mymatches\">Select Agent</button>\n\n            </div>\n        </div>\n\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n  <div *ngIf=\"user\">\r\n    <div class=\"profile-wrapper-content\">\r\n      <p class=\"profile-heading heading-nestimate\">My Profile</p>\r\n      <div class=\"profile-name-image mt-4\">\r\n        <img src=\"{{user.photoURL}}\" class=\"rounded-circle Profile-pic\"  *ngIf=\"photoURL\">\r\n        <p class=\"profile-name heading-nestimate\">{{ user.Name }}</p>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"profile-name-field-option\">\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1 heading-nestimate\">Name</p>\r\n        </div>\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text2 outputText\" *ngIf=\"user\">{{ user.Name }}</p>\r\n          <a routerLink=\"/editprofile\" class=\"outputText\">Edit</a>\r\n        </div>\r\n      <div>\r\n      \r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1 heading-nestimate\">Phone No</p>\r\n        </div>\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text2 outputText\">{{user.Phone}}</p>\r\n          <a routerLink=\"/editprofile\" class=\"outputText\">Edit</a>\r\n        </div>\r\n  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1 heading-nestimate\">Email Id</p>\r\n        </div>\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text2 outputText\">\r\n\r\n            {{user.Email}} </p>\r\n            <a routerLink=\"/editprofile\" class=\"outputText\">Edit</a>\r\n        </div>\r\n      \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text1 heading-nestimate\">Date of Birth</p>\r\n        </div>\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text2 outputText \" >{{user.DOB | date :'longDate' }}</p>\r\n          <a routerLink=\"/editprofile\" class=\"outputText\">Edit</a>\r\n        </div>\r\n      \r\n      </div>\r\n\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1 heading-nestimate\">Address</p>\r\n        </div>\r\n        <div class=\"profile-output\">\r\n          <p class=\"fname-text2 outputText \" >{{user.Address}}</p>\r\n          <a routerLink=\"/editprofile\" class=\"outputText\">Edit</a>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <div class=\"prefrence-notification\">\r\n    <h5 class=\"text-center notification-heading\">Notification Prefrences</h5>\r\n    <div class=\"prefrence-radio\">\r\n<form>\r\n<div class=\"form-check\">\r\n    <label class=\"form-check-label\">\r\n      <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email for every match\r\n    </p></label>\r\n  </div>\r\n  <div class=\"form-check\">\r\n    <label class=\"form-check-label\">\r\n      <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email me once a week with all the matches \r\n      that I have\r\n    </p> </label>\r\n  </div>\r\n</form> \r\n</div> \r\n\r\n\r\n</div>\r\n\r\n\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMyProfileEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container profile-main-container\">\r\n  <div class=\"profile-wrapper-content\">\r\n    <p class=\"profile-heading heading-nestimate\"></p>\r\n    <div class=\"profile-name-image mt-4\">\r\n      <!-- <img src=\"{{user.photoURL}}\" class=\"rounded-circle Profile-pic\" alt=\"Cinque Terre\"> -->\r\n      <p class=\"profile-name\">{{user.Name}}</p>\r\n    </div>\r\n  </div>\r\n  <mat-card class=\"profile-name-field-option\">\r\n    <div class=\"grid-container\">\r\n      <div>\r\n        <span class=\"fname-text1 heading-nestimate\">Name</span>\r\n      </div>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput  required name=\"Name\" class=\"mat-mail-input\" [(ngModel)]=\"user.Name\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"grid-container\">\r\n      <div>\r\n        <span class=\"fname-text1 heading-nestimate\">Phone No</span>\r\n      </div>\r\n      <div>\r\n         <!--Phone Number field-->\r\n         <mat-form-field class=\"example-full-width\">\r\n          <span matPrefix>+44 &nbsp;</span>\r\n          <input matInput  name=\"phonenumber\" class=\"mat-mail-input\"   [(ngModel)]=\"user.Phone\" type=”tel”  >\r\n        </mat-form-field>\r\n       \r\n        <!--Phone Number field-->\r\n      </div>\r\n    </div>\r\n    <div class=\"grid-container\">\r\n      <div>\r\n        <span class=\"fname-text1 heading-nestimate\">Email Id</span>\r\n      </div>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput  name=\"Email\" class=\"mat-mail-input\" [(ngModel)]=\"user.email\"\r\n            >\r\n        </mat-form-field>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"grid-container\">\r\n      <div>\r\n        <span class=\"fname-text1 heading-nestimate\">Date of Birth</span>\r\n      </div>\r\n      <div>\r\n        <p class=\"fname-text2\">\r\n          <!--Date Of Birth Field-->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker\" name=\"DOB\" class=\"mat-mail-input\" value=\"DOB\"\r\n              [(ngModel)]=\"user.DOB\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n          <!--Date Of Birth Field End-->\r\n\r\n\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"grid-container\">\r\n      <div>\r\n        <span class=\"fname-text1 heading-nestimate\">Address</span>\r\n      </div>\r\n      <div>\r\n\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput  required name=\"Address\" class=\"mat-mail-input\"  [(ngModel)]=\"user.Address\">\r\n        </mat-form-field>\r\n  \r\n      </div>\r\n    </div>\r\n\r\n\r\n  </mat-card>\r\n\r\n  <mat-card class=\"mt-2\">\r\n    <div class=\"prefrence-notification \">\r\n      <h5 class=\"text-center notification-heading\">Notification Prefrences</h5>\r\n      <div class=\"prefrence-radio\">\r\n  <form>\r\n  <div class=\"form-check\">\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email for every match\r\n      </p></label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label\">\r\n        <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email me once a week with all the matches \r\n        that I have\r\n      </p> </label>\r\n    </div>\r\n  </form> \r\n  </div> \r\n  \r\n  \r\n  </div>\r\n  \r\n  \r\n  </mat-card>\r\n\r\n\r\n\r\n  <div class=\"edit-profile-submitbutton\">\r\n    <!-- <button type=\"button\" class=\"btn btn-back heading-nestimate\" routerLink=\"/profile\">BACK</button> -->\r\n    <button type=\"button\" class=\"btn btn-back heading-nestimate\" (click)=\"userDetail()\">Save</button>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuNavigationBarNavigationBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-desktop-button\" (click)=\" openLogIn()\">\r\n  <div class=\"login-button-main\">\r\n\r\n    <p class=\"Login-buton-text\">Log In</p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"mobile-wrapper\">\r\n  <div class=\"mobile-container\">\r\n    <div class=\"content\">\r\n\r\n      <nav>\r\n        <div class=\"main-navigation-bar\">\r\n          <div class=\"menu-toogle\">\r\n            <img src=\"../../../assets/Images/menu.svg\" class=\"icon-size\" *ngIf=\"open\" (click)=\"openMenu()\">\r\n            <img src=\"../../../assets/Images/close-outline.svg\" class=\"icon-size\" *ngIf=\"close\" (click)=\"closeMenu()\">\r\n          </div>\r\n\r\n          <div class=\"plus-icon\">\r\n            <img src=\"../../../assets/Images/add-outline.svg\" class=\"icon-size\" (click)=\"plusmenu()\"\r\n              *ngIf=\"plusOpenMenu\">\r\n            <img src=\"../../../assets/Images/close-outline.svg\" class=\"icon-size\" *ngIf=\"plusclose\"\r\n              (click)=\"plusCloseMenu()\">\r\n\r\n          </div>\r\n          <div class=\"imge-logo-header\">\r\n            <img src=\"assets/Images/Nestimatelogo1.png\" class=\"logo-nav\" routerLink=\"/\" (click)=\"closeMenu()\" />\r\n          </div>\r\n\r\n          <div class=\"notification\" (click)=\"notificationoverlayopen()\">\r\n            <div class=\"notification\" *ngIf=\"isLoggedIn\">\r\n              <img src=\"../../../assets/Images/notifications.svg\" class=\"icon-size\">\r\n\r\n              <span class=\"log-out-text red-text\" *ngIf=\"matches>0\">{{matches}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"logout\">\r\n            <div class=\"logout-icon\" *ngIf=\"!isLoggedIn\" (click)=\" openLogIn()\">\r\n              <img src=\"../../../assets/Images/person-outline.svg\" class=\"icon-size\">\r\n              <span class=\"log-out-text heading-nestimate\">LogIn</span>\r\n            </div>\r\n            <div class=\"logout-icon\" *ngIf=\"isLoggedIn\">\r\n              <img src=\"../../../assets/Images/person.svg\" class=\"icon-size\" (click)=\"authService.SignOut()\">\r\n              <span class=\"log-out-text heading-nestimate\">Logout</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"nav-div\" *ngIf=\"menuItem\">\r\n          <app-template></app-template>\r\n\r\n          <ul class=\"nav-links\" *ngIf=\"isLoggedIn\" (click)=\"Itemmenu()\">\r\n            <div class=\"grid-container\" routerLink=\"/\">\r\n              <div><img src=\"assets/Images/homemenu.png\" class=\"home-menu-image\"></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/\" class=\"nav-links-text\">Home</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/editprofile\">\r\n              <div><img src=\"assets/Images/my-profile-icon-png-1.png\" /></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/profile\" class=\"nav-links-text\">Edit Profile</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/myListing\">\r\n              <div>\r\n                <img src=\"assets/Images/135-512-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/myListing\" class=\"nav-links-text\">My Nestimates</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/mymatches\">\r\n              <div>\r\n                <img src=\"assets/Images/download-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/mymatches\" class=\"nav-links-text\">Activity</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"plus=menu-item\" *ngIf=\"plusMenu\">\r\n  <app-plus (click)=\"plusMenuContainer()\"></app-plus>\r\n</div>\r\n\r\n<div class=\"main-background-login\" *ngIf=\"navLogin\">\r\n  <div class=\"nav-login\">\r\n    <div *ngIf=\"isLoading\" class=\"loading-container\">\r\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    </div>\r\n    <div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\r\n      <mat-card class=\"sign-in-main\" *ngIf=\"!newUser\">\r\n        <div class=\"user-cross\">\r\n          <h4 class=\"heading-nestimate\">Login</h4>\r\n          <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"newclose()\">\r\n        </div>\r\n        <div class=\"social-button mt-4\">\r\n          <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n            Facebook\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleLogin()\">\r\n            Google+\r\n          </button>\r\n        </div>\r\n        <div class=\"input-group mb-3 mt-3\"></div>\r\n        <form (keydown.enter)=\"save()\">\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control custom-field\" type=\"email\" name=\"emails\" #userEmailLogin\r\n              [(ngModel)]=\"emails\" placeholder=\"Enter Email\">\r\n          </div>\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-lock form-control-feedback\"></span>\r\n            <input type=\"password\" class=\"form-control custom-field\" name=\"passs\" #userPasswordLogin type=\"password\"\r\n              [(ngModel)]=\"passs\" placeholder=\"Enter Passowrd\">\r\n          </div>\r\n        </form>\r\n        <div class=\"input-group-prepend other-option\">\r\n          <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-social-login\"\r\n          (click)=\"signIn(userEmailLogin.value, userPasswordLogin.value)\">\r\n          Login\r\n        </button>\r\n        <p class=\"dont-have-account pt-2 heading-nestimate\" id=\"#dont-have-account\" (click)=\"NewUser()\">Don't have an\r\n          account?<span class=\"hyper outputText\">Sign up</span></p>\r\n      </mat-card>\r\n      <mat-card class=\"mt-4 sign-up-main\" *ngIf=\"newUser\">\r\n\r\n        <div class=\"sign-up\">\r\n          <div class=\"signup-heading\">\r\n            <div class=\"user-cross\">\r\n              <h4 class=\"heading-nestimate\">Sign up</h4>\r\n              <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"newclose()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"social-button mt-2\">\r\n            <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n              Facebook\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n              Google+\r\n            </button>\r\n          </div>\r\n          <div class=\"input-group mb-3 mt-3\">\r\n            <form (keydown)=\"keyDownFunction($event)\">\r\n              <div class=\"form-group has-search\">\r\n                <span class=\"fa fa-user-circle-o form-control-feedback\"></span>\r\n                <input type=\"text\" class=\"form-control custom-field\" placeholder=\"Full Name\" name=\"name\"\r\n                  [(ngModel)]=\"name\" #displayName>\r\n              </div>\r\n\r\n              <div class=\"form-group has-search\">\r\n                <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n                <input class=\"form-control custom-field\" type=\"email\" placeholder=\"Email\" #userEmailRegister\r\n                  type=\"email\" name=\"email\" [(ngModel)]=\"email\">\r\n              </div>\r\n              <div class=\"form-group has-search\">\r\n                <span class=\"fa fa-lock form-control-feedback\"></span>\r\n                <input class=\"form-control custom-field\" placeholder=\"Password\" #userPasswordRegister type=\"password\"\r\n                  name=\"password\" [(ngModel)]=\"password\">\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <section class=\"example-section property-con-form\">\r\n            <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Email\">Email</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin heading-nestimate\" value=\"SMS\">SMS</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Post\">Post</mat-checkbox>\r\n            <mat-checkbox class=\"example-margin heading-nestimate\" value=\"All\">Email,SMS and Post from acrefully\r\n              selected<br> third port\r\n            </mat-checkbox>\r\n            <p class=\"heading-nestimate m-0 \">By clicking the sms box,you agreeing to recieve\"</p>\r\n            <p for=\"text\" class=\"heading-nestimate policy\">By clicking below to register, you confirm that you agree to\r\n              our<span routerLink=\"/terms\"> Terms & Conditions </span>and you have read and understood our <span\r\n                routerLink=\"/PrivacyPolicy\">Privacy Policy</span> </p>\r\n          </section>\r\n          <button type=\"button\" class=\"btn btn-social-login\"\r\n            (click)=\"signUp(displayName.value,userEmailRegister.value,userPasswordRegister.value)\">\r\n            Sign Up\r\n          </button>\r\n          <p class=\"dont-have-account pt-2 heading-nestimate\" (click)=\"OldUser()\">Already have an account? Click here to\r\n            sign in</p>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div *ngIf=\"notificationoverlay\">\r\n\r\n  <app-notification></app-notification>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<div class=\"grid-item\">\r\n\r\n<div class=\"notification\">\r\n <div class=\"notification-icon\">\r\n<img src=\"../../../assets/Images/file.png\" class=\"icon\">\r\n </div>\r\n <div class=\"text heading-nestimate\">\r\nA seller expressed insterest on your Nestimate.Click Review<br>\r\n\r\n22 hrsago\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"notification\">\r\n    <div class=\"notification-icon\">\r\n   <img src=\"../../../assets/Images/interface.png\" class=\"icon\">\r\n    </div>\r\n    <div class=\"text heading-nestimate\">\r\n   Your Nestimate was accepted<br>\r\n   \r\n   1 Dayago\r\n   </div>\r\n   \r\n   </div>\r\n\r\n   \r\n   <div class=\"notification\">\r\n    <div class=\"notification-icon\">\r\n   <img src=\"../../../assets/Images/delete.png\" class=\"icon\">\r\n    </div>\r\n    <div class=\"text heading-nestimate\">\r\n   Your Nestimate was not accepted<br>\r\n   \r\n   22 hrsago\r\n   </div>\r\n   \r\n   </div>\r\n\r\n   <div class=\"notification\">\r\n    <div class=\"notification-icon\">\r\n   <img src=\"../../../assets/Images/file.png\" class=\"icon\">\r\n    </div>\r\n    <div class=\"text heading-nestimate\">\r\n   A seller expressed insterest on your Nestimate.Click Review<br>\r\n   \r\n   22 hrsago\r\n   </div>\r\n   \r\n   </div>\r\n   \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/plus/plus.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/plus/plus.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPlusPlusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"background-plus\" >\r\n    <mat-card class=\"cards\">\r\n        <button type=\"button\" class=\"btn btn-primary button-plus\" routerLink=\"/fillFormBuyer/:Currentpostcode/:CurrentTown/:Currentstate/:Currentcountry/:Lookingpostcode/:LookingStreetname/:Lookingstate/:Country/:FinancialPosition/:SearchRadius/:PropertyType/:Roommin/:Roomsmax/:MinAmount/:MaxAmount/:Validity/:Minbathroom/:Maxbathroom/:Minreception/:Maxreception/:Conditions/:Ownership/:CurrentAddress\">New Buy listing</button>\r\n        \r\n     </mat-card>\r\n     <mat-card  class=\"cards\">\r\n        <button type=\"button\" class=\"btn btn-primary button-plus-new\" routerLink=\"/fillformseller/:Lookingpostcode/:LookingAddress/:LookingTown/:Lookingstate/:PropertyType/:Maxrooms/:MaxAmount/:ownership/:Maxbathrooms/:Maxreception/:PropertyCondition/:features/:Country\">New Seller listing</button>\r\n     </mat-card>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container p-0\">\r\n    <div class=\"footer\">\r\n<div class=\"image-social\">\r\n<img src=\"/assets/Images/facebook.png\"  class=\"facebook-icon\">\r\n<img src=\"/assets/Images/twitter.png\" class=\"twitter-icon\" >\r\n<img src=\"/assets/Images/instagram.png\" class=\"instagram-icon\">\r\n</div>\r\n    <div class=\"privacy-policy\">\r\n   <p class=\"peivacy-policy-heading heading-nestimate\" routerLink=\"/PrivacyPolicy\">Privacy Policy</p>\r\n   <p class=\"peivacy-policy-heading heading-nestimate\" routerLink=\"/terms\">Terms & Condition</p>\r\n\r\n   \r\n    </div>\r\n    </div>\r\n\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscAlertFormdialogAlertFormdialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content class=\"fixed\">\r\n   {{data.message}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\" class=\"fixed\">\r\n<button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\">Ok</button>\r\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Top navigation -->\r\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/register-student\">\r\n    <img\r\n      class=\"brand-logo\"\r\n      src=\"assets/Images/logo.png\"\r\n      alt=\"positronX.io Logo\"\r\n    />\r\n    <span class=\"dasboard-text\">Dashboard</span>\r\n  </a>\r\n</nav>\r\n<!-- Sidebar navigation -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\r\n      <div class=\"sidebar-sticky\">\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\">\r\n              <i class=\"fas fa-user\"></i>User Profile\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.GoogleAuth()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log in\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <!-- Main content -->\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n      <div class=\"inner-adjust\">\r\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\r\n          <h1 class=\"h2\">User Profile</h1>\r\n        </div>\r\n        <!-- Show user data when logged in -->\r\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"media\">\r\n              <img\r\n                class=\"align-self-start mr-5 img-thumbnail rounded-circle\"\r\n                src=\"{{\r\n                  user.photoURL ? user.photoURL : '/assets/dummy-user.png'\r\n                }}\"\r\n                alt=\"{{ user.displayName }}\"\r\n              />\r\n              <div class=\"media-body\">\r\n                <h1>\r\n                  Hello:\r\n                  <strong>{{\r\n                    user.displayName ? user.displayName : \"User\"\r\n                  }}</strong>\r\n                </h1>\r\n                <p>\r\n                  User ID: <strong>{{ user.uid }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email: <strong>{{ user.email }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email Verified: <strong>{{ user.emailVerified }}</strong>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n      <div class=\"authBlock text-center mt-3\">\r\n        <h4 >Reset Password</h4>\r\n  \r\n        <p class=\"text-center p-3\">Please enter your email address to request a password reset.</p>\r\n        <div class=\"input-group p-4\">\r\n         \r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\"   #passwordResetEmail required>\r\n      </div>\r\n      \r\n  \r\n        <!-- Calling ForgotPassword from AuthService Api -->\r\n        <div class=\"formGroup\">\r\n          <button type=\"button\" class=\"btn btn-social-login\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\r\n      \r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"redirectToLogin text-center\">\r\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscComponentsSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div class=\"social-login text-center\" >\r\n    <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n    <div class=\"social-button mt-4\">\r\n    <button type=\"button\" class=\"btn btn-facebook \"  (click)=\"authService.FacebookAuth()\">Facebook</button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">Google+</button>\r\n    </div>\r\n    <form action=\"\">\r\n    <div class=\"input-group mb-3 mt-3\">\r\n        <div class=\"input-group-prepend\">\r\n            <!-- <i class=\"fa fa-user input-group-text nav-login-form\" aria-hidden=\"true\"></i> -->\r\n        </div>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\"  #userEmail required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend\">\r\n        <!-- <i class=\"fa fa-lock input-group-text nav-login-form-password\" aria-hidden=\"true\"></i> -->\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  name=\"password\"\r\n             #userPassword required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend other-option\">\r\n        <!-- <label class=\"checkbox\">\r\n            <input type=\"checkbox\" value=\"remember-me\">Remember Me\r\n        </label> -->\r\n        <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value,userPassword.value)\">Login</button>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value,userPassword.value)\">Sign Up</button>\r\n  </form>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscComponentsVerifyEmailVerifyEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n  \r\n      <div class=\"authBlock\">\r\n        <h4 class=\"text-center mt-3\">Thank You for Registering</h4>\r\n  \r\n        <div class=\"formGroup p-3\" *ngIf=\"authService.userData as user\">\r\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\r\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\r\n        </div>\r\n        \r\n        <!-- Calling SendVerificationMail() method using authService Api -->\r\n        <div class=\"formGroup\">\r\n        \r\n          <p class=\"text-center\" (click)=\"authService.SendVerificationMail()\">Resend Verification Email</p>  \r\n         \r\n        </div>\r\n  \r\n      </div>\r\n  \r\n      <!-- <div class=\"redirectToLogin text-center\">\r\n        <span class=\"text-center\">Go back to?<span class=\"redirect text-center\" routerLink=\"/sign-in\"> Sign in</span></span>\r\n      </div> -->\r\n  \r\n    </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"privacy-policy-page\">\r\n  \r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading pt-5 heading-nestimate\">Privacy Policy</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">Last updated:07/April/2020</p>\r\n        <p class=\" paragraph=privacy paragraph-color\">Nestimate (\"us\", \"we\", or \"our\") operates http:// nestimate.co.uk. This page informs you of our policies regarding the collection, use and disclosure of\r\n            Personal Information we receive from users of the Site.\r\n        </p>\r\n        <p class=\" paragraph=privacy paragraph-color\">We use your Personal Information only for providing and improving the Site. By\r\n            using the Site, you\r\n            agree to the collection and use of information in accordance with this policy.\r\n        </p>\r\n    </div>\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Information Collection And Use</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">While using our Site, we may ask you to provide us with certain personally identifiable information\r\n            that can be used to contact or identify you. Personally identifiable information may include, but is not\r\n            limited to your name (\"Personal Information\").\r\n            </p>\r\n    </div>\r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Log Data</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\"> Like many site operators, we collect information that your browser sends whenever you visit our Site\r\n            (\"Log Data\").\r\n            </p>\r\n\r\n            <p class=\" paragraph=privacy paragraph-color\" > This Log Data may include information such as your computer's Internet Protocol (\"IP\") address,\r\n                browser type, browser version, the pages of our Site that you visit, the time and date of your visit,\r\n                the time spent on those pages and other statistics.\r\n                </p>\r\n\r\n                <p class=\" paragraph=privacy paragraph-color\">In addition, we may use third party services such as Google Analytics that collect, monitor and\r\n                    analyze this…\r\n                    </p>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Communications</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">We may use your Personal Information to contact you with newsletters, marketing or promotional\r\n            materials and other information that ...</p>\r\n    </div>\r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Cookies</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">Cookies are files with small amount of data, which may include an anonymous unique identifier.\r\n            Cookies are sent to your browser from a web site and stored on your computer's hard drive.\r\n            </p>\r\n            <p class=\" paragraph=privacy paragraph-color\">Like many sites, we use \"cookies\" to collect information. You can instruct your browser to refuse all\r\n                cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may\r\n                not be able to use some portions of our Site.\r\n                </p>\r\n    </div>\r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Security</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">The security of your Personal Information is important to us, but remember that no method of\r\n            transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to\r\n            use commercially acceptable means to protect your Personal Information, we cannot guarantee its\r\n            absolute security.\r\n            \r\n            </p>\r\n        \r\n    </div>\r\n\r\n\r\n    <div class=\"privacy-policy-paragraph\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Changes To This Privacy Policy</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">This Privacy Policy is effective as of 07/Apri/2020 and will remain in effect except with respect to any\r\n            changes in its provisions in the future, which will be in effect immediately after being posted on this\r\n            page.</p>\r\n            <p class=\" paragraph=privacy paragraph-color\">We reserve the right to update or change our Privacy Policy at any time and you should check this\r\n                Privacy Policy periodically. Your continued use of the Service after we post any modifications to the\r\n                Privacy Policy on this page will constitute your acknowledgment of the modifications and your\r\n                consent to abide and be bound by the modified Privacy Policy.</p>\r\n                <p class=\" paragraph=privacy paragraph-color\">If we make any material changes to this Privacy Policy, we will notify you either through the email\r\n                    address you have provided us, or by placing a prominent notice on our website.</p>\r\n        \r\n    </div>\r\n\r\n    <div class=\"privacy-policy-paragraph pb-3\">\r\n        <h5 class=\"paragraph-privacy-heading heading-nestimate\">Contact Us</h5>\r\n        <p class=\" paragraph=privacy paragraph-color\">If you have any questions about this Privacy Policy, please contact us.</p>\r\n    </div>\r\n\r\n \r\n    \r\n    \r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscSelectedPropertyDialogSelectedPropertyDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\r\nWe will notify the seller of your interest in this property \r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n<button mat-raised-button color=\"primary\" routerLink=\"/mymatches\" (click)=\"onConfirmClick()\">OK</button>\r\n<button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" >Cancel</button>\r\n</mat-dialog-actions>";
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


    __webpack_exports__["default"] = "<app-nav></app-nav>\r\n\r\n<router-outlet></router-outlet>\r\n<app-Footer></app-Footer>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTemplateTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<div class=\"continue-form\" \r\n*ngIf=\"overlay\">\r\n  <div class=\"nestimate-logo\">\r\n    <img src=\"../../../../assets/Images/single-nestimate.jpg\" class=\"nestimate-logo\">\r\n\r\n  </div>\r\n  <div class=\"continue-text\">\r\n    <p class=\"overlay-text\">Thanks for registering!</p>\r\n    <p class=\"overlay-text\">NEXT STEP:Complete the Nestimate Questionnaire</p>\r\n\r\n    <p class=\"overlay-text-third\">Your search for the perfect home on offer starts here! The answers you give on the\r\n      Nestimate Questionnaire helps our system to find the right buyer,seller,tenant,landlord created nestimates to\r\n      match with you with.Once you've finished the form,sit back,relax and let us do the hard work for you!</p>\r\n  </div>\r\n  <div class=\"continue-button\" (click)=\"continueClose()\">\r\n    <div class=\"continue-button-container\">\r\n      CONTINUE\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\r\n  <mat-card class=\"sign-in-main\" *ngIf=\"!newUser\">\r\n    <div class=\"user-cross\">\r\n      <h4 class=\"heading-nestimate\">Login</h4>\r\n\r\n    </div>\r\n    <div class=\"social-button mt-4\">\r\n      <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n        Facebook\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n        Google+\r\n      </button>\r\n    </div>\r\n    <div class=\"input-group mb-3 mt-3\"></div>\r\n     <form (keydown.enter)=\"save()\">\r\n\r\n \r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n        <input type=\"text\" class=\"form-control custom-field\" type=\"email\" name=\"emails\"  #userEmailLogin  [(ngModel)]=\"emails\" placeholder=\"Enter Email\">\r\n      </div>\r\n \r\n      <div class=\"form-group has-search\">\r\n        <span class=\"fa fa-lock form-control-feedback\"></span>\r\n        <input type=\"password\" class=\"form-control custom-field\" name=\"passs\"  #userPasswordLogin type=\"password\" [(ngModel)]=\"passs\" placeholder=\"Enter Passowrd\">\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    \r\n \r\n  </form>\r\n    <div class=\"input-group-prepend other-option\">\r\n      <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"signIn(userEmailLogin.value, userPasswordLogin.value)\">\r\n      Login\r\n    </button>\r\n    <p class=\"dont-have-account pt-2 heading-nestimate\" id=\"#dont-have-account\" (click)=\"NewUser()\">Don't have an account? <span class=\"hyper outputText\">Sign up</span></p>\r\n  </mat-card>\r\n  <mat-card class=\"mt-4 sign-up-main\" *ngIf=\"newUser\">\r\n\r\n    <div class=\"sign-up\">\r\n      <div class=\"signup-heading\">\r\n\r\n        <div class=\"user-cross\">\r\n          <h4 class=\"heading-nestimate\">Sign up</h4>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"social-button mt-2\">\r\n        <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\r\n          Facebook\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleSignup()\">\r\n          Google+\r\n        </button>\r\n      </div>\r\n      <div class=\"input-group mb-3 mt-3\">\r\n        <form (keydown)=\"keyDownFunction($event)\">\r\n\r\n          \r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-user-circle-o form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control custom-field\" placeholder=\"Full Name\" name=\"name\"  [(ngModel)]=\"name\" #displayName>\r\n          </div>\r\n     \r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-envelope-o form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" type=\"email\" placeholder=\"Email\" #userEmailRegister type=\"email\" name=\"email\" [(ngModel)]=\"email\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-lock form-control-feedback\"></span>\r\n            <input  class=\"form-control custom-field\" placeholder=\"Password\" #userPasswordRegister type=\"password\" name=\"password\"\r\n            [(ngModel)]=\"password\">\r\n          </div>\r\n       \r\n        </form>\r\n      </div>\r\n\r\n\r\n      <section class=\"example-section property-con-form\">\r\n\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Email\">Email</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"SMS\">SMS</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"Post\">Post</mat-checkbox>\r\n        <mat-checkbox class=\"example-margin heading-nestimate\" value=\"All\">Email,SMS and Post from acrefully\r\n          selected<br> third port\r\n        </mat-checkbox>\r\n        <label for=\"text\" class=\"heading-nestimate \">By clicking the sms box,you agreeing to recieve\"</label>\r\n        <label for=\"text\" class=\"heading-nestimate policy\">By clicking below to register, you confirm that you agree to our<span routerLink=\"/terms\"> Terms & Conditions </span>and you have read and understood our <span routerLink=\"/PrivacyPolicy\">Privacy Policy</span> </label>\r\n      </section>\r\n\r\n      <button type=\"button\" class=\"btn btn-social-login\"\r\n        (click)=\"signUp(displayName.value,userEmailRegister.value,userPasswordRegister.value)\">\r\n        Sign Up\r\n      </button>\r\n  <p class=\"dont-have-account pt-2 heading-nestimate\" (click)=\"OldUser()\">Already have an account? Click here to\r\n        sign in</p> \r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-condition/terms-condition.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-condition/terms-condition.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsConditionTermsConditionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>terms-condition works!</p>\n";
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
  "./src/app/Helper/date.adapter.ts":
  /*!****************************************!*\
    !*** ./src/app/Helper/date.adapter.ts ***!
    \****************************************/

  /*! exports provided: AppDateAdapter, APP_DATE_FORMATS */

  /***/
  function srcAppHelperDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function () {
      return AppDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function () {
      return APP_DATE_FORMATS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppDateAdapter =
    /*#__PURE__*/
    function (_angular_material__WE) {
      _inherits(AppDateAdapter, _angular_material__WE);

      function AppDateAdapter() {
        _classCallCheck(this, AppDateAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(AppDateAdapter).apply(this, arguments));
      }

      _createClass(AppDateAdapter, [{
        key: "parse",
        value: function parse(value) {
          if (typeof value === 'string' && value.indexOf('/') > -1) {
            var str = value.split('/');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
          }

          var timestamp = typeof value === 'number' ? value : Date.parse(value);
          return isNaN(timestamp) ? null : new Date(timestamp);
        }
      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (displayFormat == "input") {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
          } else if (displayFormat == "inputMonth") {
            var _month = date.getMonth() + 1;

            var _year = date.getFullYear();

            return this._to2digit(_month) + '/' + _year;
          } else {
            return date.toDateString();
          }
        }
      }, {
        key: "_to2digit",
        value: function _to2digit(n) {
          return ('00' + n).slice(-2);
        }
      }]);

      return AppDateAdapter;
    }(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]);

    var APP_DATE_FORMATS = {
      parse: {
        dateInput: {
          month: 'short',
          year: 'numeric',
          day: 'numeric'
        }
      },
      display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: 'inputMonth',
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/Home/Home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/Home/Home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\r\n  background-image: url(/assets/Images/home.jpeg);\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.upper-back {\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 250px;\r\n  opacity: 0.5;\r\n}\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n.home-button {\r\n  background-color:var(--light-blue-color);\r\n  color: white;\r\n  width: 35%;\r\n}\r\n.home-button-SELL\r\n{\r\n  background-color: var(--DARK-BLUE-COLOR);\r\n  color: white;\r\n  width: 35%;\r\n}\r\n.home-text-font {\r\n \r\n\r\n  margin-bottom: 0.5rem;\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n.how_does_it_work_steps {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\nimg.step-mage {\r\n  width: 33%;\r\n  margin: 14px;\r\n}\r\np.step-text {\r\n  text-align: center;\r\n  color: var(--DARK-BLUE-COLOR)\r\n}\r\n.steps-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.step {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em 0px;\r\n}\r\n@media only screen and (min-width:768px)\r\n{\r\n  .icon-size\r\n  {\r\n    width: 50% !important;\r\n  }\r\n}\r\n.cookies-policy {\r\n  background-color: RGB( 80 80 90);\r\nposition: absolute;\r\n  padding: 3px;\r\n  position: fixed;\r\nbottom: 0px;\r\nz-index: 1;\r\n}\r\n.policy-content {\r\n  margin: 13px;\r\n  text-align: justify;\r\n}\r\n.policy-heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 13px;\r\n}\r\np\r\n{\r\n  margin-bottom: 0px;\r\n}\r\nimg.button-cross {\r\n  width: 17px;\r\n}\r\n.custom-button-first {\r\n  border: 2px solid  var(--light-blue-color);\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n  width: 50%;\r\n  flex-direction: inherit;\r\n    display: flex;\r\n    justify-content: space-around;\r\n   \r\n}\r\n.blue-circle {\r\n  padding: 5px;\r\n  border: 2px solid var(--light-blue-color);\r\n  border-radius: 50%;\r\n  width: 17%;\r\n}\r\n.custom-text {\r\n  font-size: 16px;\r\n  font-family: 'Roboto-Bold';\r\n}\r\n.upper-custom-button {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.create-nestimate {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  justify-content: center;\r\n  background-color:var(--DARK-BLUE-COLOR);\r\n  padding: 7px;\r\n  border-radius: 5px;\r\n  width: 90%;\r\n}\r\nimg.button-image {\r\n  width: 50%;\r\n}\r\n.text-create-nestimate\r\n{\r\n  color: white;\r\n}\r\n.large-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\np.i-am {\r\n  /* text-align: center; */\r\n  width: 60%;\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  font-family: 'Roboto-Bold';\r\n}\r\n.custom-button-first:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n.radio-container {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.radio-container input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  border: 2px solid var(--light-blue-color);\r\n  border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.radio-container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.radio-container input:checked ~ .checkmark {\r\n  background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.radio-container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.radio-container .checkmark:after {\r\n \ttop: 9px;\r\n\tleft: 9px;\r\n\twidth: 8px;\r\n\theight: 8px;\r\n  border-radius: 50%;\r\n}\r\nlabel\r\n{\r\n  margin-bottom: 0px !important;\r\n}\r\n.slider-image\r\n{\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n@media screen and (min-width:701px)\r\n{\r\n  .slider-image\r\n{\r\n\r\n  height: 82vh;\r\n}\r\n.radio-cn {\r\n  position: absolute;\r\n  bottom: 18vh;\r\n  right: 3vw;\r\n}\r\n.cookies-policy {\r\n\r\n  width: 100vw;\r\n}\r\n}\r\n.light{\r\n  font-style: italic;\r\n  color: var(--light-blue-color);\r\n}\r\n.text-over-image {\r\n  /* position: absolute; */\r\n  position: relative;\r\n  /* bottom: 50vh; */\r\n  top: -8vh;\r\n  /* bottom: 50vh; */\r\n  text-align: center;\r\n  z-index: 1;\r\n  font-size: 20px;\r\n}\r\n.radio-cn.mat-card {\r\n\r\n  background-color: var(--BAckground-dark-color);\r\n}\r\np.text-over-image-second {\r\n  position: absolute;\r\n  top: 2vh;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-family: 'Roboto-Bold';\r\n}\r\n.second-card\r\n{\r\n  background-color: var(--BAckground-dark-color); \r\n}\r\np.slider-text.heading-nestimate {\r\n  text-align: center;\r\n  margin-top: 4px;\r\n}\r\n.card-steps\r\n{\r\n  background-color:  var(--BAckground-dark-color);\r\n}\r\n.heading-nestimate-font{\r\n  font-size: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Ib21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7RUFDL0MsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztFQUVFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7OztFQUdFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBRVQsYUFBYTtFQUViLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTs7RUFFRTs7SUFFRSxxQkFBcUI7RUFDdkI7QUFDRjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDLGtCQUFrQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQixXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtJQUNyQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQztBQUNBO0VBQ0UsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUEsNENBQTRDO0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsa0JBQWtCO0FBQ3BCO0FBRUEsK0NBQStDO0FBQy9DO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsNERBQTREO0FBQzVEO0VBQ0Usd0NBQXdDO0FBQzFDO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRSxjQUFjO0FBQ2hCO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsUUFBUTtDQUNULFNBQVM7Q0FDVCxVQUFVO0NBQ1YsV0FBVztFQUNWLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTs7RUFFRTs7O0VBR0EsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBOztFQUVFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTs7RUFFRSwrQ0FBK0M7QUFDakQ7QUFDRTtFQUNBLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL0hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9JbWFnZXMvaG9tZS5qcGVnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi51cHBlci1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4udXBwZXItYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTE0NXB4O1xyXG59XHJcblxyXG4uaG9tZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbGlnaHQtYmx1ZS1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuLmhvbWUtYnV0dG9uLVNFTExcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5ob21lLXRleHQtZm9udCB7XHJcbiBcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uaG93X2RvZXNfaXRfd29ya19zdGVwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmltZy5zdGVwLW1hZ2Uge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgbWFyZ2luOiAxNHB4O1xyXG59XHJcbnAuc3RlcC10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUilcclxufVxyXG5cclxuXHJcbi5zdGVwcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zdGVwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDFlbSAwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KVxyXG57XHJcbiAgLmljb24tc2l6ZVxyXG4gIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmNvb2tpZXMtcG9saWN5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoIDgwIDgwIDkwKTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogMHB4O1xyXG56LWluZGV4OiAxO1xyXG59XHJcbi5wb2xpY3ktY29udGVudCB7XHJcbiAgbWFyZ2luOiAxM3B4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLnBvbGljeS1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMTNweDtcclxufVxyXG5wXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuaW1nLmJ1dHRvbi1jcm9zcyB7XHJcbiAgd2lkdGg6IDE3cHg7XHJcbn1cclxuLmN1c3RvbS1idXR0b24tZmlyc3Qge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgIFxyXG59XHJcbi5ibHVlLWNpcmNsZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTclO1xyXG59XHJcbi5jdXN0b20tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xyXG59XHJcbi51cHBlci1jdXN0b20tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jcmVhdGUtbmVzdGltYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbmltZy5idXR0b24taW1hZ2Uge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLnRleHQtY3JlYXRlLW5lc3RpbWF0ZVxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5sYXJnZS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5wLmktYW0ge1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICB3aWR0aDogNjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XHJcbn1cclxuLmN1c3RvbS1idXR0b24tZmlyc3Q6aG92ZXJcclxue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmFkaW8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXHJcbi5yYWRpby1jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbi5yYWRpby1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xyXG4ucmFkaW8tY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cclxuLnJhZGlvLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcclxuIFx0dG9wOiA5cHg7XHJcblx0bGVmdDogOXB4O1xyXG5cdHdpZHRoOiA4cHg7XHJcblx0aGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmxhYmVsXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uc2xpZGVyLWltYWdlXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMXB4KVxyXG57XHJcbiAgLnNsaWRlci1pbWFnZVxyXG57XHJcblxyXG4gIGhlaWdodDogODJ2aDtcclxufVxyXG4ucmFkaW8tY24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE4dmg7XHJcbiAgcmlnaHQ6IDN2dztcclxufVxyXG4uY29va2llcy1wb2xpY3kge1xyXG5cclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxufVxyXG4ubGlnaHR7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxufVxyXG4udGV4dC1vdmVyLWltYWdlIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGJvdHRvbTogNTB2aDsgKi9cclxuICB0b3A6IC04dmg7XHJcbiAgLyogYm90dG9tOiA1MHZoOyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucmFkaW8tY24ubWF0LWNhcmQge1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQWNrZ3JvdW5kLWRhcmstY29sb3IpO1xyXG59XHJcbnAudGV4dC1vdmVyLWltYWdlLXNlY29uZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnZoO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XHJcbn1cclxuLnNlY29uZC1jYXJkXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQWNrZ3JvdW5kLWRhcmstY29sb3IpOyBcclxufVxyXG5wLnNsaWRlci10ZXh0LmhlYWRpbmctbmVzdGltYXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbi5jYXJkLXN0ZXBzXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tQkFja2dyb3VuZC1kYXJrLWNvbG9yKTtcclxufVxyXG4gIC5oZWFkaW5nLW5lc3RpbWF0ZS1mb250e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/Home/Home.component.ts ***!
    \****************************************/

  /*! exports provided: home, HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "home", function () {
      return home;
    });
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
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! .././auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../http.service */
    "./src/app/http.service.ts");

    var home = function home() {
      _classCallCheck(this, home);
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService, afAuth, Router, HttpService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.afAuth = afAuth;
        this.Router = Router;
        this.HttpService = HttpService;
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoggedIn = true;
        this.isLoading = false;
        this.cookie = true;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this.userData = user;
              localStorage.setItem("user", JSON.stringify(_this.userData));

              _this.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this.LoggedOut();
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
          this.cookie = false;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this2 = this;

          this.isLoading = true;
          this.authService.FacebookAuth().then(function (data) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this3 = this;

          this.isLoading = true;
          this.authService.GoogleAuth().then(function (data) {
            _this3.isLoading = false;
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, pass) {
          var _this4 = this;

          this.isLoading = true;
          this.authService.SignIn(email, pass).then(function (data) {
            _this4.isLoading = false;
          });
        }
      }, {
        key: "closeCookie",
        value: function closeCookie() {
          this.cookie = false;
        }
      }, {
        key: "homeradio",
        value: function homeradio(value) {
          if (value == this.home) {
            this.Router.navigate(["/fillFormBuyer/:Currentpostcode/:CurrentTown/:Currentstate/:Currentcountry/:Lookingpostcode/:LookingStreetname/:Lookingstate/:Country/:FinancialPosition/:SearchRadius/:PropertyType/:Roommin/:Roomsmax/:MinAmount/:MaxAmount/:Validity/:Minbathroom/:Maxbathroom/:Minreception/:Maxreception/:Conditions/:Ownership/:CurrentAddress"]);
          }

          if (value == this.home2) {
            this.Router.navigate(["/fillformseller/:Lookingpostcode/:LookingAddress/:LookingTown/:Lookingstate/:PropertyType/:Maxrooms/:MaxAmount/:ownership/:Maxbathrooms/:Maxreception/:PropertyCondition/:features/:Country"]);
          }

          console.log(home);
        }
      }, {
        key: "register",
        value: function register() {}
      }, {
        key: "user",
        get: function get() {
          return this._user;
        },
        set: function set(value) {
          this._user = value;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-Home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Home.component.css */
      "./src/app/Home/Home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../common.css */
      "./src/app/common.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/Property.component.css":
  /*!******************************************************!*\
    !*** ./src/app/Home/Property/Property.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyPropertyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".own-porpety-text {\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n.owna-property-text {\r\n  font-size: 16px;\r\n  color: var(--light-blue-color);\r\n}\r\n.own-property-list {\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  text-align: justify;\r\n  font-weight: medium;\r\n}\r\nul.own-property-list-style {\r\n  font-size: 15px;\r\n  text-align: justify;\r\n  list-style: none;\r\n}\r\n.own-property-image-text {\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 21px;\r\n  text-transform: capitalize;\r\n  color: var(--DARK-BLUE-COLOR);\r\n}\r\n.btn-own-property-offer {\r\n  width: 90%;\r\n  background-color: var(--DARK-BLUE-COLOR);\r\n  color: white;\r\n  text-transform: uppercase;\r\n  \r\n}\r\n.own-property-home-worth {\r\n  background-color: white;\r\n}\r\n.own-property-text-home-worth {\r\n  text-align: left;\r\n  margin-bottom: .5em;\r\n  color: var(--DARK-BLUE-COLOR);\r\n}\r\n.own-property-text-home-worth-ans {\r\n  text-align: left;\r\n  color: var(--light-blue-color);\r\n}\r\n.own-property-blog {\r\n  background-color: white;\r\n  padding-bottom: 5px;\r\n}\r\n.own-property-blog-heading {\r\n  font-size: 25px;\r\n  text-transform: uppercase;\r\n  \r\n  font-weight: 400;\r\n}\r\n.own-property-blogs-content-c1 {\r\n  text-align: left;\r\n  margin-bottom: 0;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2 {\r\n  text-align: left;\r\n  font-size: 15px;\r\n\r\n}\r\n.own-property-blogs-content-c1-2 {\r\n  text-align: left;\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2-2 {\r\n  text-align: left;\r\n  font-size: 15px;\r\n}\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 2px solid grey;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n.own-property-last-image {\r\n  width: -webkit-fill-available;\r\n}\r\n.own-property-last-image-text {\r\n  text-align: left;\r\n  margin-left: 20px;\r\n  \r\n  font-weight: 400;\r\n  margin-top: 10px;\r\n}\r\nli {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-end;\r\n  align-items: center;\r\n  color: var(--light-blue-color);\r\n}\r\n.Looking-property-image {\r\n  background-image: url(\"/assets/Images/image-new2.png\");\r\n  height: 305px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.looking-property-image-text {\r\n  position: relative;\r\n  /* top: 227px; */\r\n  position: relative;\r\n  top: 76%;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 23px;\r\n  text-transform: capitalize;\r\n}\r\n.button-own-a-property {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 3vh;\r\n}\r\n.own-property-image\r\n{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.heading-nestimate\r\n{\r\n  color: var(--DARK-BLUE-COLOR);\r\n}\r\n.paragraph-color\r\n{\r\n  color: var(--light-blue-color);\r\n}\r\n.own-property-blogs-content.paragraph-color {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-gap:12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9Qcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0I7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7O0VBRXpCLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCOztFQUVqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvUHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vd24tcG9ycGV0eS10ZXh0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ub3duYS1wcm9wZXJ0eS10ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWxpc3Qge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXdlaWdodDogbWVkaXVtO1xyXG59XHJcblxyXG51bC5vd24tcHJvcGVydHktbGlzdC1zdHlsZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ub3duLXByb3BlcnR5LWltYWdlLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiB2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcblxyXG4uYnRuLW93bi1wcm9wZXJ0eS1vZmZlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWhvbWUtd29ydGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LXRleHQtaG9tZS13b3J0aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIGNvbG9yOiB2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LXRleHQtaG9tZS13b3J0aC1hbnMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWJsb2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZy1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMxIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59XHJcbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMS0yIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMyLTIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1sYXN0LWltYWdlIHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1sYXN0LWltYWdlLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxubGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxufVxyXG4uTG9va2luZy1wcm9wZXJ0eS1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9JbWFnZXMvaW1hZ2UtbmV3Mi5wbmdcIik7XHJcbiAgaGVpZ2h0OiAzMDVweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcbi5sb29raW5nLXByb3BlcnR5LWltYWdlLXRleHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiB0b3A6IDIyN3B4OyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDc2JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYnV0dG9uLW93bi1hLXByb3BlcnR5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbn1cclxuLm93bi1wcm9wZXJ0eS1pbWFnZVxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkaW5nLW5lc3RpbWF0ZVxyXG57XHJcbiAgY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuLnBhcmFncmFwaC1jb2xvclxyXG57XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWJsb2dzLWNvbnRlbnQucGFyYWdyYXBoLWNvbG9yIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gIGdyaWQtZ2FwOjEycHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/Property/Property.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Home/Property/Property.component.ts ***!
    \*****************************************************/

  /*! exports provided: PropertyComponent */

  /***/
  function srcAppHomePropertyPropertyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyComponent", function () {
      return PropertyComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var PropertyComponent =
    /*#__PURE__*/
    function () {
      function PropertyComponent(route, router, authService, afAuth) {
        _classCallCheck(this, PropertyComponent);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.afAuth = afAuth;
        this.buy = false;
        this.sell = false;
        this.isLoggedIn = true;
      }

      _createClass(PropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.params.subscribe(function (params) {
            _this5.useCase = params["use"];

            if (_this5.useCase == "buy") {
              _this5.activeTab = 0;
              _this5.buy = true;
              _this5.sell = false;
            } else if (_this5.useCase == "sell") {
              _this5.activeTab = 1;
              _this5.buy = false;
              _this5.sell = true;
            }

            console.log(_this5.useCase);
          });
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this5.userData = user;
              localStorage.setItem("user", JSON.stringify(_this5.userData));

              _this5.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this5.LoggedOut();
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
        key: "buyerCheck",
        value: function buyerCheck() {
          if (this.isLoggedIn == true) {
            this.router.navigate(["fillFormBuyer"]);
          } else if (this.isLoggedIn == false) {
            this.router.navigate(["checkLogin"]);
          }
        }
      }, {
        key: "sellerCheck",
        value: function sellerCheck() {
          if (this.isLoggedIn == true) {
            this.router.navigate(["fillformseller"]);
          } else if (this.isLoggedIn == false) {
            this.router.navigate(["checkLogin"]);
          }
        }
      }]);

      return PropertyComponent;
    }();

    PropertyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-Property",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Property.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Property.component.css */
      "./src/app/Home/Property/Property.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../common.css */
      "./src/app/common.css")).default]
    })], PropertyComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AlertDialogBuyerDataSubmissionComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerAlertDialogBuyerDataSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertDialogBuyerDataSubmissionComponent", function () {
      return AlertDialogBuyerDataSubmissionComponent;
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
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../state-service.service */
    "./src/app/state-service.service.ts");

    var AlertDialogBuyerDataSubmissionComponent =
    /*#__PURE__*/
    function () {
      function AlertDialogBuyerDataSubmissionComponent(data, dialogRef, stateService) {
        _classCallCheck(this, AlertDialogBuyerDataSubmissionComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.stateService = stateService;
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

      _createClass(AlertDialogBuyerDataSubmissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listingBuyer = this.stateService.listingBuyer;
        }
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return AlertDialogBuyerDataSubmissionComponent;
    }();

    AlertDialogBuyerDataSubmissionComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    AlertDialogBuyerDataSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alertDialogBuyerDataSubmission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertDialogBuyerDataSubmission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertDialogBuyerDataSubmissionComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: AlertDialogBuyerDataSubmissionComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailAlertDialogBuyerDataSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertDialogBuyerDataSubmissionComponent", function () {
      return AlertDialogBuyerDataSubmissionComponent;
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

    var AlertDialogBuyerDataSubmissionComponent =
    /*#__PURE__*/
    function () {
      function AlertDialogBuyerDataSubmissionComponent(data, dialogRef) {
        _classCallCheck(this, AlertDialogBuyerDataSubmissionComponent);

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

      _createClass(AlertDialogBuyerDataSubmissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return AlertDialogBuyerDataSubmissionComponent;
    }();

    AlertDialogBuyerDataSubmissionComponent.ctorParameters = function () {
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

    AlertDialogBuyerDataSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alertDialogBuyerDataSubmission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertDialogBuyerDataSubmission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertDialogBuyerDataSubmissionComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerMatchListingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0px !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.thank-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 12vh;\r\n    background-color: whie;\r\n    background: #ffffffdb;\r\n    padding: 20px;\r\n    margin-right: 8px;\r\n}\r\n.mat-card-content-new-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nspan.outputText.price-font {\r\n    font-size: 1.8em;\r\n}\r\n.other-text {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan.heading-nestimate.card-heading-font {\r\n    text-align: left;\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n.mat-card-content-new {\r\n    margin-top: 1em;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-size: 22px;\r\n}\r\n.btn-secondary\r\n{\r\n    background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.match-images { \r\n    height: 19vh;\r\n}\r\n.mat-card\r\n{\r\n    padding: 10px 5px;\r\n}\r\nselect#country {\r\n    float: right;\r\n    height: 2em;\r\n    border: 1px solid;\r\n    background-color: transparent;\r\n    color: var(--DARK-BLUE-COLOR );\r\n    border: transparent;\r\n}\r\n.example-full-width{\r\n  \r\n    background-color: transparent;\r\n    float: right;\r\n}\r\n.other-container {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: justify;\r\n    /* font-size: 5px; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllck1hdGNoTGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOzs4R0FFOEc7QUFDOUc7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx3Q0FBd0M7QUFDNUM7QUFVQTs7SUFFSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllck1hdGNoTGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGNoZXMtbWFpbi1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuLnRoYW5rdS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50aGFua3UtcC1zZWN0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0Y2gtc2VjdGlvblxyXG57XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi50aGFuay10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaWU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmZGI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNhcmQtY29udGVudC1uZXctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zcGFuLm91dHB1dFRleHQucHJpY2UtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcbi5vdGhlci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zcGFuLmhlYWRpbmctbmVzdGltYXRlLmNhcmQtaGVhZGluZy1mb250IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudC1uZXcge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi50aGFua3UtcC1zZWN0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubWFpbi1oZWFkaW5nXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uYnRuLXNlY29uZGFyeVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tYXQtY2FyZC1tYXRjaGVzXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdGNoLWltYWdlcyB7IFxyXG4gICAgaGVpZ2h0OiAxOXZoO1xyXG59XHJcbi5tYXQtY2FyZFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxufVxyXG5zZWxlY3QjY291bnRyeSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tREFSSy1CTFVFLUNPTE9SICk7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ub3RoZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIC8qIGZvbnQtc2l6ZTogNXB4OyAqL1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: BuyerMatcheListingComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerMatchListingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyerMatcheListingComponent", function () {
      return BuyerMatcheListingComponent;
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


    var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./buyerMatchListing.service */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././../.././state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../Model/listingBuyer */
    "./src/app/Model/listingBuyer.ts");

    var BuyerMatcheListingComponent =
    /*#__PURE__*/
    function () {
      function BuyerMatcheListingComponent(MatchesService, stateService) {
        _classCallCheck(this, BuyerMatcheListingComponent);

        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__["listingBuyer"]();
        this.isThanku = true;
      }

      _createClass(BuyerMatcheListingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.MatchesService.getSellerProperties(this.uid).subscribe(function (ref) {
            ref.forEach(function (item) {
              // console.log("from the db " + item.data().Lookingpostcode);
              // console.log(
              //   "from the localStorage " +
              //   JSON.stringify(this.stateService.listingBuyer.Lookingpostcode));
              _this6.less = item.data().MaxAmount - item.data().MaxAmount * 3 / 100;
              _this6.more = item.data().MaxAmount * 1 + item.data().MaxAmount * 10 / 100 * 1;

              if (item.data().Lookingpostcode == _this6.stateService.listingBuyer.Lookingpostcode && item.data().PropertyType == _this6.stateService.listingBuyer.PropertyType && _this6.more >= _this6.stateService.listingBuyer.MinAmount && _this6.less <= _this6.stateService.listingBuyer.MaxAmount) {
                _this6.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().PropertyType == _this6.stateService.listingBuyer.PropertyType && item.data().MaxAmount >= _this6.stateService.listingBuyer.MinAmount && item.data().MaxAmount <= _this6.stateService.listingBuyer.MaxAmount && item.data().latitude && item.data().longitude) {
                _this6.distanceInKm = _this6.getDistanceFromLatLonInKm(_this6.listingBuyer.latitude, _this6.listingBuyer.longitude, item.data().latitude, item.data().longitude);

                _this6.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this6.distanceInKm
                });
              } // else {
              //   this.unmatchedProperties.push({ detail: item.data() });
              // }

            });

            _this6.unmatchedProperties.sort(_this6.compare);
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
      }, {
        key: "closeThank",
        value: function closeThank() {
          this.isThanku = false;
        }
      }, {
        key: "hightoLow",
        value: function hightoLow() {
          this.matchedProperties.sort(function (a, b) {
            return b.MaxAmount - a.MaxAmount;
          });
        }
      }, {
        key: "lowtohigh",
        value: function lowtohigh() {
          this.matchedProperties.sort(function (a, b) {
            return a.MaxAmount - b.MaxAmount;
          });
        }
      }, {
        key: "roomshightolow",
        value: function roomshightolow() {
          this.matchedProperties.sort(function (a, b) {
            return a.Maxrooms - b.Maxrooms;
          });
        } //For unmatched

      }, {
        key: "unmatchedhightoLow",
        value: function unmatchedhightoLow() {
          this.unmatchedProperties.sort(function (a, b) {
            return b.detail.MaxAmount - a.detail.MaxAmount;
          });
        }
      }, {
        key: "unmatchedlowtohigh",
        value: function unmatchedlowtohigh() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.detail.MaxAmount - b.detail.MaxAmount;
          });
        }
      }, {
        key: "unmatchedroomshightolow",
        value: function unmatchedroomshightolow() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.detail.Maxrooms - b.detail.Maxrooms;
          });
        }
      }, {
        key: "unmatchedDistance",
        value: function unmatchedDistance() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.distance - b.distance;
          });
        }
      }]);

      return BuyerMatcheListingComponent;
    }();

    BuyerMatcheListingComponent.ctorParameters = function () {
      return [{
        type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    BuyerMatcheListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-buyerMatchListing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buyerMatchListing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buyerMatchListing.component.css */
      "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css")).default]
    })], BuyerMatcheListingComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: MatchesService */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerMatchListingServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.customersRef = db.collection("listingSeller"); // Collection Group

        this.propertiesRef = db.collectionGroup("properties");
        this.Userref = db.collection("users");
      }

      _createClass(MatchesService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.propertiesRef.get();
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.Userref.get();
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
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css":
  /*!********************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerSelectedPropertyDetailBuyerSelectedPropertyDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n.streetname {\r\n\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{\r\n    font-size: 17px;\r\n  \r\n}\r\n.details-output-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.property-selected-detail-background\r\n{\r\n    background-image: url('/assets/Images/selectedPropertybackgroung.jpg');\r\n    background-position: center;\r\n    background-size: contain;\r\n}\r\n.continue-form {\r\n    background-color: var(--light-blue-color);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0vh;\r\n    position: fixed;\r\n    bottom: 0px;\r\n  }\r\n.nestimate-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\nimg.nestimate-logo {\r\n    height: 22vh;\r\n    }\r\n.overlay-text{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.overlay-text-third{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.continue-text {\r\n    margin: 2em;\r\n    font-size: 17px;\r\n    text-align: left;\r\n  }\r\n.continue-button-container\r\n  {\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n    font-size: 18px;\r\n  }\r\n.continue-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    border: 3px solid white;\r\n    margin: 0vh 15vw;\r\n    padding: 0.6em\r\n  }\r\n.continue-form-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n.mat-card-title\r\n{\r\n    margin-bottom: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllclNlbGVjdGVkUHJvcGVydHlEZXRhaWwvYnV5ZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxlQUFlOztBQUVuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOzs7SUFHN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFFVCxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsVUFBVTtBQUNkO0FBQ0E7O0lBRUksc0VBQXNFO0lBQ3RFLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxZQUFZO0lBQ1o7QUFDRjtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7QUFFQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7O0lBRUUsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEI7RUFDRjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1CdXllci9jb25maXJtQnV5ZXJEZXRhaWwvYnV5ZXJNYXRjaExpc3RpbmcvYnV5ZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2J1eWVyU2VsZWN0ZWRQcm9wZXJ0eURldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICBcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdHJlZXRuYW1lIHtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uZGV0YWlscy1wLWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICBcclxufVxyXG4uZGV0YWlscy1vdXRwdXQtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBcclxuICBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG4tY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnV0dG9uLWFza1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5zZWxlY3RlZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2I2RlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmltZy5tYXRjaC1pbWFnZXMge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLk1hdC1jYXJkLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxMHB4XHJcbn1cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBpbWcubWF0Y2gtaW1hZ2VzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuLnByb3BlcnR5LXNlbGVjdGVkLWRldGFpbC1iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JbWFnZXMvc2VsZWN0ZWRQcm9wZXJ0eWJhY2tncm91bmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLmNvbnRpbnVlLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZS1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgLm5lc3RpbWF0ZS1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgaW1nLm5lc3RpbWF0ZS1sb2dvIHtcclxuICAgIGhlaWdodDogMjJ2aDtcclxuICAgIH1cclxuICAub3ZlcmxheS10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktdGV4dC10aGlyZHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgfVxyXG4gIC5jb250aW51ZS10ZXh0IHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXJcclxuICB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuY29udGludWUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHZoIDE1dnc7XHJcbiAgICBwYWRkaW5nOiAwLjZlbVxyXG4gIH1cclxuICAuY29udGludWUtZm9ybS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: BuyerSelectedPropertyDetailComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerSelectedPropertyDetailBuyerSelectedPropertyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyerSelectedPropertyDetailComponent", function () {
      return BuyerSelectedPropertyDetailComponent;
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


    var _buyerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./buyerSelectedPropertyDetail.service */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../.././state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../buyerMatchListing.service */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var BuyerSelectedPropertyDetailComponent =
    /*#__PURE__*/
    function () {
      function BuyerSelectedPropertyDetailComponent(Selected_propertydetail_Service, stateService, dialog, snackBar, MatchesService, _Activatedroute, _router, HttpService, _location) {
        _classCallCheck(this, BuyerSelectedPropertyDetailComponent);

        this.Selected_propertydetail_Service = Selected_propertydetail_Service;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.MatchesService = MatchesService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.HttpService = HttpService;
        this._location = _location;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
        this.isBuyerSelected = false;
        this.overlay = false;
        this.datastored = false;
        this.express = true;
      }

      _createClass(BuyerSelectedPropertyDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this7.Lookingpostcode = params.get("Lookingpostcode");
            _this7.Lookingstate = params.get("Lookingstate");
            _this7.LookingTown = params.get("LookingTown");
            _this7.norooms = params.get("norooms");
            _this7.PropertyCondition = params.get("PropertyCondition");
            _this7.MaxAmount = params.get("MaxAmount");
            _this7.LookingAddress = params.get("LookingAddress");
            _this7.ownership = params.get("ownership");
            _this7.PropertyType = params.get("PropertyType").replace(/\s/g, "");
            _this7.features = params.get("features");
            _this7.UserId = params.get("UserId").replace(/\s/g, "");
            _this7.MinAmount = params.get("MinAmount");
            _this7.Maxbathrooms = params.get("Maxbathrooms");
            _this7.Maxrooms = params.get("Maxrooms");
            _this7.Maxreception = params.get("Maxreception");
            console.log(_this7.UserId);
          });
          this.Selected_propertydetail_Service.getUser(this.UserId).subscribe(function (dref) {
            dref.forEach(function (element) {
              if (_this7.UserId == element.data().uid) {
                _this7.title = element.data().title;
                _this7.unNamed = element.data().Name;
                console.log(element.data().Name);
              }
            });
          });
          console.log("user id" + this.userId);
          console.log(this.Email);
        } //Create Database BuyerMatches

      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this8 = this;

          this.matchesBuyer = {
            Lookingpostcode: this.Lookingpostcode,
            Lookingstate: this.Lookingstate,
            LookingTown: this.LookingTown,
            norooms: this.norooms,
            PropertyCondition: this.PropertyCondition,
            MaxAmount: this.MaxAmount,
            LookingAddress: this.LookingAddress,
            ownership: this.ownership,
            PropertyType: this.PropertyType,
            features: this.features,
            UserId: this.UserId,
            MinAmount: this.MinAmount,
            Maxbathrooms: this.Maxbathrooms,
            Maxrooms: this.Maxrooms,
            Maxreception: this.Maxreception,
            matchStatus: "pending"
          };
          this.isBuyerSelected = true;
          this.return = this.Selected_propertydetail_Service.matchesBuyerCreate(this.uid, this.matchesBuyer).then(function (data) {
            if (data == true) {
              _this8.isBuyerSelected = false;
              _this8.overlay = false;
            }
          });
          this.matchesSeller = {
            LookingStreetname: this.stateService.listingBuyer.LookingStreetname,
            Lookingpostcode: this.stateService.listingBuyer.Lookingpostcode,
            PropertyType: this.stateService.listingBuyer.PropertyType,
            Conditions: this.stateService.listingBuyer.Conditions,
            ChainStatus: this.stateService.listingBuyer.ChainStatus,
            FinancialPosition: this.stateService.listingBuyer.FinancialPosition,
            SearchRadius: this.stateService.listingBuyer.SearchRadius,
            MinAmount: this.stateService.listingBuyer.MinAmount,
            MaxAmount: this.stateService.listingBuyer.MaxAmount,
            Validity: this.stateService.listingBuyer.Validity,
            Type: this.stateService.listingBuyer.Type,
            Position: this.stateService.listingBuyer.Position,
            UserId: this.stateService.listingBuyer.UserId,
            matchStatus: "confirm_interest"
          };
          this.isBuyerSelected = true;
          this.return = this.Selected_propertydetail_Service.matchesSellerCreate(this.UserId, this.matchesSeller).then(function (data) {
            if (data == true) {
              _this8.isBuyerSelected = false;
              _this8.datastored = true;
              _this8.express = false;
            }
          });
          this.backClicked();
        }
      }, {
        key: "Overlayopen",
        value: function Overlayopen() {
          this.overlay = true;
        }
      }, {
        key: "continueClose",
        value: function continueClose() {
          this.overlay = false;
        }
      }, {
        key: "register",
        value: function register() {
          this.HttpService.sentEmail("http://localhost:3000/sendmail", this.user).subscribe(function (data) {
            var res = data;
            console.log('{user.email} is successfully send');
          }, function (err) {
            console.log(err);
          }, function () {});
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return BuyerSelectedPropertyDetailComponent;
    }();

    BuyerSelectedPropertyDetailComponent.ctorParameters = function () {
      return [{
        type: _buyerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__["SelectedpropertydetailService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__["MatchesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }];
    };

    BuyerSelectedPropertyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-buyerSelectedPropertyDetail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buyerSelectedPropertyDetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buyerSelectedPropertyDetail.component.css */
      "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css")).default]
    })], BuyerSelectedPropertyDetailComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: SelectedpropertydetailService */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailBuyerMatchListingBuyerSelectedPropertyDetailBuyerSelectedPropertyDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matcheBuyerRef = null;
        this.matcheSellerRef = null;
        this.customersRef = db.collection("listingSeller");
        this.Userref = db.collection("users");
      } //create Database Buyer Matches


      _createClass(SelectedpropertydetailService, [{
        key: "matchesBuyerCreate",
        value: function matchesBuyerCreate(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.db.collection("matchesBuyer").doc(key).collection("matches").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context.sent;
                    return _context.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "matchesSellerCreate",
        value: function matchesSellerCreate(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.db.collection("matchesSeller").doc(key).collection("matches").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document seller successfully written!");
                    });

                  case 2:
                    this.return = _context2.sent;
                    return _context2.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.Userref.get();
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
      providedIn: "root"
    })], SelectedpropertydetailService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailConfirmBuyerDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  /* margin-top: 9px; */\r\n  padding-top: 15px;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.output {\r\n  \r\n  font-weight: lighter;\r\n}\r\n\r\n.endind-button {\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  \r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  \r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\nsection.example-section.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9jb25maXJtQnV5ZXJEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBRVQsYUFBYTtFQUViLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9jb25maXJtQnV5ZXJEZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtLW1haW4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jb25maXJtLWZpcnN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxufVxyXG5cclxuLnRhYmxlIHRkLFxyXG4udGFibGUgdGgge1xyXG4gIHBhZGRpbmc6IC43NXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5jb25maXJtLXBhZ2UtaGVhZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgLyogbWFyZ2luLXRvcDogOXB4OyAqL1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLmVuZGluZC1idXR0b24ge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbn1cclxuXHJcbi5idG4tbmV4dCB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbn1cclxuXHJcbi5vci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuc2VjdGlvbi5leGFtcGxlLXNlY3Rpb24ucHJvcGVydHktY29uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ConfirmBuyerDetailComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailConfirmBuyerDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmBuyerDetailComponent", function () {
      return ConfirmBuyerDetailComponent;
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


    var _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./alertDialogBuyerDataSubmission.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _confirmBuyerDetail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./confirmBuyerDetail.service */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.service.ts");

    var ConfirmBuyerDetailComponent =
    /*#__PURE__*/
    function () {
      function ConfirmBuyerDetailComponent(activatedRoute, formsService, authService, afAuth, stateService, dialog, snackBar, route, _location, postcodeService, BuyerdetailService) {
        _classCallCheck(this, ConfirmBuyerDetailComponent);

        this.activatedRoute = activatedRoute;
        this.formsService = formsService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this._location = _location;
        this.postcodeService = postcodeService;
        this.BuyerdetailService = BuyerdetailService;
        this.isLoading = false;
        this.selectedIndex = 0;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.maxNumberOfTabs = 2;
        this.Needsmodernisation = String;
        this.isBuyer = false;
        this.Date = new Date();
      }

      _createClass(ConfirmBuyerDetailComponent, [{
        key: "equals",
        value: function equals(objOne, objTwo) {
          if (typeof objOne !== "undefined" && typeof objTwo !== "undefined") {
            return objOne.id === objTwo.id;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.BuyerdetailService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this9.uid) {
                _this9.user.Name = element.data().Name;
                _this9.user.Email = element.data().email;
                _this9.user.DOB = element.data().DOB.toDate();
                _this9.user.Phone = element.data().Phone;
                _this9.user.title = element.data().title;
                console.log(element.data().Name);
              }
            });
          }); // Auth

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this9.userData = user;
              localStorage.setItem("user", JSON.stringify(_this9.userData));

              _this9.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this9.LoggedOut();
            }
          });
          this.listingBuyer = this.stateService.listingBuyer; //Lookup Declared Function

          this.postcodeService.getLat(this.listingBuyer.Lookingpostcode).subscribe(function (data) {
            _this9.postcodeCoordinates = data;
            _this9.listingBuyer.longitude = _this9.postcodeCoordinates.result.longitude, _this9.listingBuyer.latitude = _this9.postcodeCoordinates.result.latitude, _this9.listingBuyer.UserId = _this9.userData.uid, _this9.isBuyer = true;
            _this9.isBuyer = false; //   this.return = this.formsService
            //     .createCustomer(this.userData.uid, this.listingBuyer)
            //     .then(data => {
            //       if (data == true) {
            //         this.isBuyer = false;
            //       }
            //     });
          });
        }
      }, {
        key: "uid",
        value: function uid(_uid) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this10 = this;

          this.listingBuyer.UserId = this.userData.uid;
          this.isLoading = true;
          this.listingBuyer.username = this.user.Name;
          this.listingBuyer.useremail = this.user.Email;
          this.listingBuyer.userdob = this.user.DOB;
          this.listingBuyer.userphone = this.user.Phone;
          this.listingBuyer.usertitle = this.user.title;
          this.listingBuyer.LookingTown;
          this.return = this.formsService.createCustomer(this.userData.uid, this.listingBuyer).then(function (data) {
            if (data == true) {
              _this10.isLoading = false;

              var dialogRef = _this10.dialog.open(_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogBuyerDataSubmissionComponent"], {
                data: {
                  message: "HelloWorld",
                  buttonText: {
                    cancel: "Done"
                  }
                }
              });
            }
          });
          this.notification = {
            time: new Date(),
            viewed: "no"
          };
          this.return = this.formsService.notificationCustomer(this.userData.uid, this.notification).then(function (data) {
            console.log("notification" + data);
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
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }, {
        key: "Lat",
        value: function Lat() {
          this.listingBuyer.latitude = this.data;
        }
      }, {
        key: "userDetail",
        value: function userDetail() {
          var _this11 = this;

          console.log(this.user);
          this.return = this.formsService.createUserCustomer(this.user).then(function (data) {
            console.log(_this11.user);
          });
        }
      }]);

      return ConfirmBuyerDetailComponent;
    }();

    ConfirmBuyerDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]
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
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]
      }, {
        type: _confirmBuyerDetail_service__WEBPACK_IMPORTED_MODULE_11__["BuyerdetailService"]
      }];
    };

    ConfirmBuyerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-confirmBuyerDetail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmBuyerDetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmBuyerDetail.component.css */
      "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css")).default]
    })], ConfirmBuyerDetailComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.service.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.service.ts ***!
    \**********************************************************************************************/

  /*! exports provided: BuyerdetailService */

  /***/
  function srcAppHomePropertyFillFormBuyerConfirmBuyerDetailConfirmBuyerDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyerdetailService", function () {
      return BuyerdetailService;
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

    var BuyerdetailService =
    /*#__PURE__*/
    function () {
      function BuyerdetailService(db) {
        _classCallCheck(this, BuyerdetailService);

        this.db = db;
        this.userCollection = db.collection("users");
        this.userDetail = db.collectionGroup("${user.uid}");
      }

      _createClass(BuyerdetailService, [{
        key: "getUserDetail",
        value: function getUserDetail(uid) {
          return this.customersRef.get();
        }
      }, {
        key: "createUserCustomer",
        value: function createUserCustomer(user) {
          var userRef = this.db.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.Email,
            Name: user.Name,
            DOB: user.DOB,
            Phone: user.Phone
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.userCollection.get();
        }
      }]);

      return BuyerdetailService;
    }();

    BuyerdetailService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    BuyerdetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BuyerdetailService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerFillFormBuyerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-containers {\r\n  width: auto;\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.forms-container {\r\n  padding-bottom: 4%;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden; \r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244d93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #dd4b33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.color-signup {\r\n  color: #244d93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244d93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  margin-left: 0.255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: 0.4em solid;\r\n  border-right: 0.4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: 0.4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244d93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color:var(--DARK-BLUE-COLOR);\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n/* .second-container {\r\n  background-color: white;\r\n} */\r\n\r\ninput#Tittle {\r\n  width: 20%;\r\n}\r\n\r\n.example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 17px;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.form-check-input {\r\n  width: auto;\r\n}\r\n\r\n.last-radio-button {\r\n  margin-right: 0px;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.input {\r\n  border: none;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.tabs-align-padding {\r\n\r\n\r\n\r\n  margin: 10px;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.social-login {\r\n  padding: 15px;\r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.Line-form {\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n\r\n.mat-card-buyer\r\n{\r\n  border: 1px solid black;\r\n}\r\n\r\n.property-con-form\r\n{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfieldset {\r\n \r\n  border: 2px solid black;\r\n  display: block;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  padding-top: 0.35em;\r\n  padding-bottom: 0.625em;\r\n  padding-left: 0.75em;\r\n  padding-right: 0.75em;\r\n width: auto;\r\n}\r\n\r\nlegend\r\n{\r\n  width: auto;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.text-field-height\r\n{\r\n  height: 200px;\r\n}\r\n\r\ntextarea#mat-input-15 {\r\n  height: 200px;\r\n}\r\n\r\nsection.checkbox-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mat_card_title\r\n{\r\n  font-size: 17px;\r\n}\r\n\r\n.forms-heading {\r\n  margin: 0px;\r\n}\r\n\r\n.forms-star\r\n{\r\n  font-size: 14px;\r\n}\r\n\r\n.price-selection {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  flex-direction: initial;\r\n  width: 100%;\r\n  justify-content: space-evenly\r\n}\r\n\r\n.Label-notes {\r\n  font-size: 12px;\r\n}\r\n\r\n.radio-button-align {\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.card-margin\r\n{\r\n  margin: 10px;\r\n}\r\n\r\n.filed-width\r\n{\r\n  width: 49% !important;\r\n}\r\n\r\n.select-constion {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 18px;\r\n}\r\n\r\nimg.button-cross {\r\n  height: 2vh;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\ninput[type=\"tel\"] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\ninput[type=\"tel\"]::-webkit-inner-spin-button, \r\ninput[type=\"tel\"]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n.continue-form {\r\n  background-color: var(--light-blue-color);\r\n  /* position: absolute; */\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.nestimate-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg.nestimate-logo {\r\n  height: 22vh;\r\n  margin-top: 3vh;\r\n}\r\n\r\n.overlay-text{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.overlay-text-third{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.continue-text {\r\n  margin: 2em;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n\r\n.continue-button-container\r\n{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n  font-size: 18px;\r\n}\r\n\r\n.continue-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 3px solid white;\r\n  margin: 0vh 15vw;\r\n  padding: 0.6em\r\n}\r\n\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n\r\n.home-button {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 35%;\r\n}\r\n\r\n.home-text-font {\r\n\r\n  color: #707070;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  border-radius: 19px;\r\n  padding: 0.5em;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.sign-in-main\r\n{\r\n  display: block;\r\n}\r\n\r\n.user-cross {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nimg.button-cross {\r\n  position: absolute;\r\n  right: 0px;\r\n  margin: 0px 10px;\r\n  width: 16px;\r\n}\r\n\r\n.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  text-align: left;\r\n \r\n}\r\n\r\n.continue-form {\r\n  background-color: var(--light-blue-color);\r\n  /* position: absolute; */\r\nheight: 100vh;\r\n  width: 100vw;\r\n  position: fixed;\r\n    z-index: 10;\r\n    top: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.nestimate-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg.nestimate-logo {\r\n  height: 22vh;\r\n  margin-top: 3vh;\r\n}\r\n\r\n.overlay-text{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.overlay-text-third{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.continue-text {\r\n  margin: 2em;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n\r\n.continue-button-container\r\n{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n  font-size: 18px;\r\n}\r\n\r\n.continue-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 3px solid white;\r\n  margin: 0vh 15vw;\r\n  padding: 0.6em\r\n}\r\n\r\n.input-container { /* IE10 */\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.icon {\r\n  padding: 10px;\r\n  background: var( --DARK-BLUE-COLOR);\r\n  color: white;\r\n  min-width: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  padding: 10px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.input-group {\r\n \r\n\r\n  display: block;\r\n \r\n}\r\n\r\n.input-field:hover {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.hyper:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n.policy\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n\r\n  line-height: 3rem;\r\n\r\n\r\n  pointer-events: none;\r\n  display: flex;\r\n  color: #aaa;\r\n  font-size: 22px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.form-control\r\n{\r\n  height: 7vh;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1.5em;\r\n  \r\n    margin-bottom: 1rem;\r\n\r\n    margin-top: 1.5em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n}\r\n\r\n.form-group.blue-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: baseline;\r\n}\r\n\r\n.background-new-form\r\n{\r\n  background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n\r\n.new-heading-nestimate\r\n{\r\n  color: white;\r\n}\r\n\r\n.form-group.blue-form.double-form {\r\n  width: 48%;\r\n}\r\n\r\n.radio-top-buyer {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2ZpbGxGb3JtQnV5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1COztBQUVyQjs7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBQ0E7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCLFdBQVc7QUFDWjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWDtBQUNGOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBRVQsYUFBYTtFQUViLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHlDQUF5QztFQUN6Qyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBT0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUlBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZOztBQUVkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFJQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBRVQsYUFBYTtFQUViLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7O0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsd0JBQXdCO0FBQzFCLGFBQWE7RUFDWCxZQUFZO0VBQ1osZUFBZTtJQUNiLFdBQVc7SUFDWCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUNBLG1CQUN3QixTQUFTO0VBQy9CLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUNBOzs7RUFHRSxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7O0VBRWYsaUJBQWlCOzs7RUFHakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6Qjs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCOztJQUVmLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjs7QUFFL0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSx3Q0FBd0M7QUFDMUM7O0FBQ0E7O0VBRUUsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9Ib21lL1Byb3BlcnR5L2ZpbGxGb3JtQnV5ZXIvZmlsbEZvcm1CdXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVycyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZm9ybXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDRkOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGg0IHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sb3Itc2lnbnVwIHtcclxuICBjb2xvcjogIzI0NGQ5MztcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtbG9naW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDRkOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMjU1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246IDIuMjU1ZW07XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItdG9wOiAwLjRlbSBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6IDAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJhY2sge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5vci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLnNlY29uZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59ICovXHJcblxyXG5pbnB1dCNUaXR0bGUge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLW5leHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTdweDtcclxufVxyXG5cclxuLmJ1dHRvbi1uZXh0LXRhYjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmxhc3QtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnJhZGlvLWFsaWduIHtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWF0LW1haWwtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRhYnMtYWxpZ24tcGFkZGluZyB7XHJcblxyXG5cclxuXHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbCB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvcGFjaXR5OiAuNjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5MaW5lLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ubWF0LW9wdGlvbiBpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHJcbn1cclxuLm1hdC1jYXJkLWJ1eWVyXHJcbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4ucHJvcGVydHktY29uLWZvcm1cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5maWVsZHNldCB7XHJcbiBcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xyXG4gd2lkdGg6IGF1dG87XHJcbn1cclxubGVnZW5kXHJcbntcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRleHQtZmllbGQtaGVpZ2h0XHJcbntcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhI21hdC1pbnB1dC0xNSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5zZWN0aW9uLmNoZWNrYm94LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubWF0X2NhcmRfdGl0bGVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZm9ybXMtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZvcm1zLXN0YXJcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2Utc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbml0aWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XHJcbn1cclxuLkxhYmVsLW5vdGVzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJhZGlvLWJ1dHRvbi1hbGlnbiB7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbi5jYXJkLW1hcmdpblxyXG57XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlZC13aWR0aFxyXG57XHJcbiAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3QtY29uc3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbmltZy5idXR0b24tY3Jvc3Mge1xyXG4gIGhlaWdodDogMnZoO1xyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZWxcIl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZWxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcbi5jb250aW51ZS1mb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuLm5lc3RpbWF0ZS1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmltZy5uZXN0aW1hdGUtbG9nbyB7XHJcbiAgaGVpZ2h0OiAyMnZoO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxufVxyXG4ub3ZlcmxheS10ZXh0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG59XHJcblxyXG4ub3ZlcmxheS10ZXh0LXRoaXJke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG59XHJcbi5jb250aW51ZS10ZXh0IHtcclxuICBtYXJnaW46IDJlbTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWNvbnRhaW5lclxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jb250aW51ZS1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbjogMHZoIDE1dnc7XHJcbiAgcGFkZGluZzogMC42ZW1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4udXBwZXItYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTE0NXB4O1xyXG59XHJcblxyXG4uaG9tZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcblxyXG5cclxuLmhvbWUtdGV4dC1mb250IHtcclxuXHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY29sb3Itc2lnbnVwIHtcclxuICBjb2xvcjogIzI0NEQ5MztcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtbG9naW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcblxyXG59XHJcblxyXG5pLmZhLmZhLXVzZXIuaW5wdXQtZ3JvdXAtdGV4dC5uYXYtbG9naW4tZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tdG9wOiAtNCU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogbm9uZTtcclxuICBsZWZ0OiBub25lO1xyXG4gIHJpZ2h0OiA5cHg7XHJcbiAgd2lkdGg6IG5vbmU7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5zaWduLWluLW1haW5cclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi51c2VyLWNyb3NzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pbWcuYnV0dG9uLWNyb3NzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG59XHJcbi5wcm9wZXJ0eS1jb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gXHJcbn1cclxuLmNvbnRpbnVlLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcblxyXG4ubmVzdGltYXRlLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1nLm5lc3RpbWF0ZS1sb2dvIHtcclxuICBoZWlnaHQ6IDIydmg7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG59XHJcbi5vdmVybGF5LXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbn1cclxuXHJcbi5vdmVybGF5LXRleHQtdGhpcmR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbn1cclxuLmNvbnRpbnVlLXRleHQge1xyXG4gIG1hcmdpbjogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5jb250aW51ZS1idXR0b24tY29udGFpbmVyXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOiAwdmggMTV2dztcclxuICBwYWRkaW5nOiAwLjZlbVxyXG59XHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhciggLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoIC0tREFSSy1CTFVFLUNPTE9SKTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gXHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gXHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZDpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKCAtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuLmh5cGVyOmhvdmVyXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvbGljeVxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcclxufVxyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIuMzc1cmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuXHJcblxyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbn1cclxuLmZvcm0tZ3JvdXAuYmx1ZS1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcbi5iYWNrZ3JvdW5kLW5ldy1mb3JtXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcbi5uZXctaGVhZGluZy1uZXN0aW1hdGVcclxue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9ybS1ncm91cC5ibHVlLWZvcm0uZG91YmxlLWZvcm0ge1xyXG4gIHdpZHRoOiA0OCU7XHJcbn1cclxuLnJhZGlvLXRvcC1idXllciB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts ***!
    \************************************************************************/

  /*! exports provided: FillFormBuyerComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerFillFormBuyerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FillFormBuyerComponent", function () {
      return FillFormBuyerComponent;
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
    /*! ./../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Model/listingBuyer */
    "./src/app/Model/listingBuyer.ts");
    /* harmony import */


    var _Model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Model/user */
    "./src/app/Model/user.ts");
    /* harmony import */


    var _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../../Helper/date.adapter */
    "./src/app/Helper/date.adapter.ts");
    /* harmony import */


    var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../Misc/alertFormdialog/alertFormdialog.component */
    "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");
    /* harmony import */


    var _alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./alertDialogBuyerDataSubmission.component */
    "./src/app/Home/Property/fillFormBuyer/alertDialogBuyerDataSubmission.component.ts");
    /* harmony import */


    var _Model_notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../Model/notification */
    "./src/app/Model/notification.ts");

    var FillFormBuyerComponent =
    /*#__PURE__*/
    function () {
      function FillFormBuyerComponent(authService, afs, // Inject Firestore service
      fillFormsService, firestore, afAuth, db, dialog, snackBar, route, router, stateService, postcodeService, formBuilder, fb) {
        _classCallCheck(this, FillFormBuyerComponent);

        this.authService = authService;
        this.afs = afs;
        this.fillFormsService = fillFormsService;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.stateService = stateService;
        this.postcodeService = postcodeService;
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.addressianAutoCompleteCurrent$ = null;
        this.autoCompleteControlCurrent = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.addressianAutoCompleteLooking$ = null;
        this.autoCompleteControlLooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.isLoggedIn = false;
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"]();
        this.notification = new _Model_notification__WEBPACK_IMPORTED_MODULE_18__["notification"]();
        this.buyerUser = new _Model_user__WEBPACK_IMPORTED_MODULE_4__["user"]();
        this.submitted = false;
        this.links = ["First", "Second", "Third"];
        this.activeLink = this.links[0];
        this.background = "";
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.Condition = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.ConditionsList = ["Garden", "Driveway", "Period Features", "Garage", "Gated Community", "Loft Conversion", "Conservatory/Sun room", "Granny Annexe", "Rear Extension"];
        this.other = false;
        this.finanacial = false;
        this.overlay = false;
        this.message = "";
        this.cancelButtonText = "Cancel";
        this.newUser = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]);
        this.firstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6)]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
      }

      _createClass(FillFormBuyerComponent, [{
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
          var _this12 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this12.userData = user;
              localStorage.setItem("user", JSON.stringify(_this12.userData));

              _this12.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this12.LoggedOut();
            }
          });
          this.addressianAutoCompleteLooking$ = this.autoCompleteControlLooking.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (value) {
            if (value !== "") {
              _this12.lookup(_this12.listingBuyer.Lookingpostcode).subscribe(function (data) {
                _this12.data = data;
              });

              return _this12.lookup(_this12.listingBuyer.Lookingpostcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
            }
          })); // The auto population of github method

          this.addressianAutoCompleteCurrent$ = this.autoCompleteControlCurrent.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (value) {
            if (value !== "") {
              _this12.lookup(_this12.listingBuyer.Currentpostcode).subscribe(function (data) {
                _this12.data = data;
              });

              return _this12.lookup(_this12.listingBuyer.Currentpostcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["of"])(null);
            }
          }));
          this.sub = this.route.paramMap.subscribe(function (params) {
            _this12.Cpostcode = params.get("Currentpostcode");
            _this12.Ctown = params.get("CurrentTown");
            _this12.Cstate = params.get("Currentstate");
            _this12.Ccountry = params.get("Currentcountry");
            _this12.Lpostcode = params.get("Lookingpostcode");
            _this12.Lstreetname = params.get("LookingStreetname"); // this.Ltown = params.get("LookingTown");

            _this12.Lstate = params.get("Lookingstate");
            _this12.Lcountry = params.get("Country");
            _this12.Financial = params.get("FinancialPosition");
            _this12.radius = params.get("SearchRadius");
            _this12.Type = params.get("PropertyType");
            _this12.Minroom = params.get("Roommin");
            _this12.Maxroom = params.get("Roomsmax");
            _this12.AmountMin = params.get("MinAmount");
            _this12.amountmax = params.get("MaxAmount");
            _this12.offer = params.get("Validity");
            _this12.bathroommin = params.get("Minbathroom");
            _this12.bathroommax = params.get("Maxbathroom");
            _this12.receptionmin = params.get("Minreception");
            _this12.receptionmax = params.get("Maxreception");
            _this12.condition = params.get("Conditions");
            _this12.ownership = params.get("Ownership");
            _this12.Caddress = params.get("CurrentAddress"); //  this.Ltown = params.get("LookingTown"); 
          });

          if (this.Cpostcode != ":Currentpostcode") {
            this.listingBuyer.Currentpostcode = this.Cpostcode;
          }

          if (this.Ctown != ":CurrentTown") {
            this.listingBuyer.CurrentTown = this.Ctown;
          }

          if (this.Cstate != ":Currentstate") {
            this.listingBuyer.Currentstate = this.Cstate;
          }

          if (this.Ccountry != ":Currentcountry") {
            this.listingBuyer.Currentcountry = this.Ccountry;
          }

          if (this.Lpostcode != ":Lookingpostcode") {
            this.listingBuyer.Lookingpostcode = this.Lpostcode;
          }

          if (this.Lstreetname != ":LookingStreetname") {
            this.listingBuyer.LookingStreetname = this.Lstreetname;
          } // if(this.Ltown != ":LookingTown")
          // {
          //   this.listingBuyer.LookingTown = this.Ltown
          // }


          if (this.Lstate != ":Lookingstate") {
            this.listingBuyer.Lookingstate = this.Lstate;
          }

          if (this.Lcountry != ":Country") {
            this.listingBuyer.Country = this.Lcountry;
          }

          if (this.Financial != ":FinancialPosition") {
            this.listingBuyer.FinancialPosition = this.Financial;
          }

          if (this.radius != ":SearchRadius") {
            this.listingBuyer.SearchRadius = this.radius;
          }

          if (this.Type != ":PropertyType") {
            this.listingBuyer.PropertyType = this.Type;
          }

          if (this.Minroom != ":Roommin") {
            this.listingBuyer.Roommin = this.Minroom;
          }

          if (this.Maxroom != ":Roomsmax") {
            this.listingBuyer.Roomsmax = this.Maxroom;
          }

          if (this.AmountMin != ":MinAmount") {
            this.listingBuyer.MinAmount = this.AmountMin;
          }

          if (this.amountmax != ":MaxAmount") {
            this.listingBuyer.MaxAmount = this.amountmax;
          }

          if (this.offer != ":Validity") {
            this.listingBuyer.Validity = this.offer;
          }

          if (this.bathroommin != ":Minbathroom") [this.listingBuyer.Minbathroom = this.bathroommin];

          if (this.bathroommax != ":Maxbathroom") {
            this.listingBuyer.Maxbathroom = this.bathroommax;
          }

          if (this.receptionmin != ":Minreception") {
            this.listingBuyer.Minreception = this.receptionmin;
          }

          if (this.receptionmax != ":Maxreception") {
            this.listingBuyer.Maxreception = this.receptionmax;
          }

          if (this.condition != ":Conditions") {
            this.listingBuyer.Conditions = this.condition;
          }

          if (this.ownership != ":Ownership") {
            this.listingBuyer.Ownership = this.ownership;
          }

          if (this.Caddress != ":CurrentAddress") {
            this.listingBuyer.CurrentAddress = this.Caddress;
          } // if(this.Ltown !=":LookingTown")
          // {
          //   this.listingBuyer.LookingTown = this.Ltown
          // }

        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          var _this13 = this;

          this.isLoggedIn = true; //Pre - populate the email field

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.fillFormsService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this13.uid) {
                _this13.user.Name = element.data().Name;
                _this13.user.email = element.data().email;
                _this13.user.DOB = element.data().DOB.toDate();
                _this13.user.Phone = element.data().Phone;
                _this13.user.title = element.data().title;
                console.log(_this13.user.DOB);
              }
            });
          });
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
          this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"]();
        }
      }, {
        key: "lookup",
        value: function lookup(value) {
          return this.postcodeService.search(value);
        }
      }, {
        key: "getPost",
        value: function getPost(value) {
          //this.listingBuyer.CurrentAddress = value.address;
          this.listingBuyer.CurrentTown = value.citytown;
          this.listingBuyer.Currentstate = value.county;
          this.listingBuyer.Currentpostcode = value.postcode;
          console.log(value);
        }
      }, {
        key: "getPosts",
        value: function getPosts(value) {
          this.listingBuyer.LookingTown = value.citytown;
          this.listingBuyer.Lookingstate = value.county;
          this.listingBuyer.Lookingpostcode = value.postcode;
          this.listingBuyer.LookingStreetname = value.address[2];
          console.log(value);
        }
      }, {
        key: "selectTab",
        value: function selectTab(nextIndex, presentIndex) {
          if (presentIndex == 0) {
            if (this.user.Name == null) {
              var dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                data: {
                  message: "Please enter valid fulll name"
                }
              });
            } else if (this.user.email == null) {
              var _dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                data: {
                  message: "Please enter valid email"
                }
              });
            } else if (Math.floor(Math.abs(Date.now() - new Date(this.user.DOB).getTime()) / (1000 * 3600 * 24) / 365.25) < 18) {
              var _dialogRef2 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                data: {
                  message: "Age Must be 18+"
                }
              });
            } else if (this.user.Phone == null) {
              var _dialogRef3 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                data: {
                  message: "Please enter valid phone number"
                }
              });
            } else if (this.listingBuyer.ChainStatus == null) {
              var _dialogRef4 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                data: {
                  message: "Please fill Listing Buyer"
                }
              });
            } else {
              this.userDetail();
              this.selectedIndex = nextIndex;
            }
          } else if (presentIndex == 1) {
            if (nextIndex > presentIndex) {
              if (this.listingBuyer.Currentpostcode == null) {
                var _dialogRef5 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Current Postcode"
                  }
                });
              } else if (this.listingBuyer.CurrentAddress == null) {
                var _dialogRef6 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Current Address"
                  }
                });
              } else if (this.listingBuyer.Currentstate == null) {
                var _dialogRef7 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Current Sate"
                  }
                });
              } else if (this.listingBuyer.CurrentTown == null) {
                var _dialogRef8 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Current Town"
                  }
                });
              } else if (this.listingBuyer.Lookingpostcode == null) {
                var _dialogRef9 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill LookingPostcode"
                  }
                });
              } else if (this.listingBuyer.LookingStreetname == null) {
                var _dialogRef10 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill LookingStreetname"
                  }
                });
              } else if (this.listingBuyer.Lookingstate == null) {
                var _dialogRef11 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Looking State"
                  }
                });
              } else if (this.listingBuyer.FinancialPosition == null) {
                var _dialogRef12 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Financial Position"
                  }
                });
              } else if (this.listingBuyer.SearchRadius == null) {
                var _dialogRef13 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please fill Select Radius"
                  }
                });
              } else if (this.listingBuyer.PropertyType == null) {
                var _dialogRef14 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select Property Type"
                  }
                });
              } else if (this.listingBuyer.MinAmount == null) {
                var _dialogRef15 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select MinAmount"
                  }
                });
              } else if (this.listingBuyer.MaxAmount == null) {
                var _dialogRef16 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select MaxAmount"
                  }
                });
              } else if (this.listingBuyer.Validity == null) {
                var _dialogRef17 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select Validity"
                  }
                });
              } else {
                this.selectedIndex = nextIndex;
              }
            } else {
              this.selectedIndex = nextIndex;
            }
          } else if (presentIndex == 2) {
            if (nextIndex > presentIndex) {
              if (this.listingBuyer.Type == null || this.listingBuyer.Position == null || this.listingBuyer.otherInfo == null) {
                this.openAlertDialog();
              } else {
                this.onSubmit();
              }
            } else {
              this.selectedIndex = nextIndex;
            }
          }
        }
      }, {
        key: "openAlertDialog",
        value: function openAlertDialog() {
          var dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_16__["AltertFormDialogComponent"], {
            data: {
              message: "Please Fill form  fields before proceeding"
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.stateService.listingBuyer = this.listingBuyer;
          this.router.navigate(["confirmbuyerdetail"]);
        }
      }, {
        key: "userDetail",
        value: function userDetail() {
          var _this14 = this;

          console.log(this.user);
          this.return = this.fillFormsService.createUserCustomer(this.user).then(function (data) {
            console.log(_this14.user);
          });
        }
      }, {
        key: "otherOption",
        value: function otherOption() {
          this.other = false;
        }
      }, {
        key: "otherChain",
        value: function otherChain() {
          this.other = true;
        }
      }, {
        key: "financialPostion",
        value: function financialPostion() {
          this.finanacial = true;
        }
      }, {
        key: "removefinancialPostion",
        value: function removefinancialPostion() {
          this.finanacial = false;
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this15 = this;

          // //Lookup Declared Function
          this.postcodeService.getLat(this.listingBuyer.Lookingpostcode).subscribe(function (data) {
            _this15.postcodeCoordinates = data;
            _this15.listingBuyer.longitude = _this15.postcodeCoordinates.result.longitude, _this15.listingBuyer.latitude = _this15.postcodeCoordinates.result.latitude, _this15.listingBuyer.UserId = _this15.userData.uid, _this15.return = _this15.fillFormsService.createCustomer(_this15.userData.uid, _this15.listingBuyer).then(function (data) {
              if (data == true) {}
            });
          });
          this.listingBuyer.UserId = this.userData.uid;
          this.isLoading = true;
          this.return = this.fillFormsService.createCustomer(this.userData.uid, this.listingBuyer).then(function (data) {
            if (data == true) {
              _this15.isLoading = false;

              var dialogRef = _this15.dialog.open(_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_17__["AlertDialogBuyerDataSubmissionComponent"], {
                data: {}
              });
            }
          });
        } //Login Form

      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this16 = this;

          this.isLoading = true;
          this.authService.FacebookAuth().then(function (data) {
            _this16.isLoading = false;
          });
        } //SignIn Google

      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this17 = this;

          this.isLoading = true;
          this.authService.GoogleAuth().then(function (data) {
            _this17.isLoading = false;
          });
        } //Signup Google

      }, {
        key: "googleSignup",
        value: function googleSignup() {
          var _this18 = this;

          this.isLoading = true;
          this.authService.GoogleAuthSignup().then(function (data) {
            _this18.isLoading = false;
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, pass) {
          var _this19 = this;

          console.log(email + pass);
          this.isLoading = true;
          this.authService.SignIn(email, pass).then(function (data) {
            _this19.isLoading = false;
          });
        }
      }, {
        key: "NewUser",
        value: function NewUser() {
          this.newUser = true;
        }
      }, {
        key: "OldUser",
        value: function OldUser() {
          this.newUser = false;
        }
      }, {
        key: "close",
        value: function close() {
          this.newUser = false;
          this.newUser = false;
        }
      }, {
        key: "signUp",
        value: function signUp(displayName, email, pass) {
          var _this20 = this;

          console.log(displayName);
          this.overlay = true;
          this.authService.SignUp(email, pass).then(function (data) {
            _this20.isLoading = false;
            _this20.user.Name = displayName;
            _this20.user.DOB = null;
            _this20.user.Phone = null;
            _this20.return = _this20.fillFormsService.createUserCustomer(_this20.user).then(function (data) {
              console.log(data);
            });
          });
        }
      }, {
        key: "userNew",
        value: function userNew() {
          this.user.DOB = null;
          this.user.Phone = null;
          this.user.name;
          this.return = this.fillFormsService.createUserCustomer(this.user).then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "continueClose",
        value: function continueClose() {
          this.overlay = false;
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {
          if (event.keyCode == 13) {
            this.signUp(this.name, this.email, this.password);
          }
        }
      }, {
        key: "saves",
        value: function saves() {
          this.signIn(this.emails, this.passs);
        }
      }]);

      return FillFormBuyerComponent;
    }();

    FillFormBuyerComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
      }, {
        type: _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_10__["StateServiceService"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }];
    };

    FillFormBuyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-fillFormBuyer",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fillFormBuyer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html")).default,
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useClass: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_15__["AppDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
        useValue: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_15__["APP_DATE_FORMATS"]
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fillFormBuyer.component.css */
      "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css")).default]
    })], FillFormBuyerComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts ***!
    \**********************************************************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppHomePropertyFillFormBuyerFillFormBuyerServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.dbPath = "listingBuyer";
        this.dbUserPath = "buyerUser";
        this.dbnotification = "notification";
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customersRef = null;
        this.listingUserRef = null;
        this.notificationref = null;
        this.customersRef = db.collection(this.dbPath);
        this.listingUserRef = db.collection(this.dbUserPath);
        this.userCollection = db.collection("users");
        this.userDetail = db.collectionGroup("${user.uid}"); //Notification DB

        this.notificationref = db.collection(this.dbnotification);
      } //Create Customer Notification


      _createClass(FormsService, [{
        key: "notificationCustomer",
        value: function notificationCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.notificationref.doc(key).collection("").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context3.sent;
                    return _context3.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //Create Customer ListingBuyer

      }, {
        key: "createCustomer",
        value: function createCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.customersRef.doc(key).collection("requirements").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context4.sent;
                    return _context4.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "createUserCustomer",
        value: function createUserCustomer(user) {
          var userRef = this.db.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            Name: user.Name,
            DOB: user.DOB,
            Phone: user.Phone,
            title: user.title = "Mr"
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.userCollection.get();
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(key, value) {
          return this.userCollection.doc(key).update(value);
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(key) {
          return this.customersRef.doc(key).delete();
        }
      }, {
        key: "getCustomersList",
        value: function getCustomersList(listingBuyer) {
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
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesMatchedNestimatesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nestimate-matches\r\n{\r\n    background-image: url('laptop.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.button {\r\n    display: grid;\r\n    grid-template-columns: 5fr 2fr;\r\n    grid-gap: 1em;\r\n    margin: 1em;\r\n    align-items: center;\r\n    height: 50vh;\r\n}\r\n.matched-text.heading-nestimate {\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL21hdGNoZWQtbmVzdGltYXRlcy9tYXRjaGVkLW5lc3RpbWF0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQ0FBZ0U7SUFDaEUsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL21hdGNoZWQtbmVzdGltYXRlcy9tYXRjaGVkLW5lc3RpbWF0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXN0aW1hdGUtbWF0Y2hlc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvbGFwdG9wLmpwZycpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcbi5tYXRjaGVkLXRleHQuaGVhZGluZy1uZXN0aW1hdGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: MatchedNestimatesComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesMatchedNestimatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchedNestimatesComponent", function () {
      return MatchedNestimatesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MatchedNestimatesComponent =
    /*#__PURE__*/
    function () {
      function MatchedNestimatesComponent() {
        _classCallCheck(this, MatchedNestimatesComponent);
      }

      _createClass(MatchedNestimatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatchedNestimatesComponent;
    }();

    MatchedNestimatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-matched-nestimates',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matched-nestimates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matched-nestimates.component.css */
      "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.css")).default]
    })], MatchedNestimatesComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/buyerMatchListing.service.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/buyerMatchListing.service.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: MatchesService */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesMatchesNestimateBuyerMatchListingServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.customersRef = db.collection("listingSeller"); // Collection Group

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
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesMatchesNestimateMatchesNestimateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0px !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.thank-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 12vh;\r\n    background-color: whie;\r\n    background: #ffffffdb;\r\n    padding: 20px;\r\n    margin-right: 8px;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-size: 22px;\r\n}\r\n.btn-secondary\r\n{\r\n    background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        margin-top: 14px;\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.match-images { \r\n    height: 16vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL21hdGNoZWQtbmVzdGltYXRlcy9tYXRjaGVzLW5lc3RpbWF0ZS9tYXRjaGVzLW5lc3RpbWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTs7OEdBRThHO0FBQzlHOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksd0NBQXdDO0FBQzVDO0FBU0E7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKO0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL1Byb3BlcnR5L2ZpbGxGb3JtQnV5ZXIvbWF0Y2hlZC1uZXN0aW1hdGVzL21hdGNoZXMtbmVzdGltYXRlL21hdGNoZXMtbmVzdGltYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLnRoYW5rLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZkYjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkZvbnQtc2l6ZXNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5hcmVhLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kaXNjcmlwdGlvbi1wXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ucHJvcGVydHktdHlwZS1jb2xvcntcclxuICAgIGNvbG9yOiAjOEJCNDQwO1xyXG59XHJcbi5mb250LWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1haW4taGVhZGluZ1xyXG57XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnlcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tREFSSy1CTFVFLUNPTE9SKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpXHJcbntcclxuICAgIC5tYXRjaC1pbWFnZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLW1hdGNoZXNcclxue1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0Y2gtaW1hZ2VzIHsgXHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: MatchesNestimateComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesMatchesNestimateMatchesNestimateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchesNestimateComponent", function () {
      return MatchesNestimateComponent;
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


    var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./buyerMatchListing.service */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/buyerMatchListing.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../Model/listingBuyer */
    "./src/app/Model/listingBuyer.ts");

    var MatchesNestimateComponent =
    /*#__PURE__*/
    function () {
      function MatchesNestimateComponent(MatchesService, stateService) {
        _classCallCheck(this, MatchesNestimateComponent);

        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__["listingBuyer"]();
        this.isThanku = true;
      }

      _createClass(MatchesNestimateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.MatchesService.getSellerProperties(this.uid).subscribe(function (ref) {
            ref.forEach(function (item) {
              console.log("from the db " + item.data().Lookingpostcode);
              console.log("from the localStorage " + JSON.stringify(_this21.listingBuyer.Lookingpostcode));

              if (item.data().Lookingpostcode == _this21.listingBuyer.Lookingpostcode) {
                _this21.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().latitude && item.data().longitude) {
                _this21.distanceInKm = _this21.getDistanceFromLatLonInKm(_this21.listingBuyer.latitude, _this21.listingBuyer.longitude, item.data().latitude, item.data().longitude);

                _this21.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this21.distanceInKm
                });
              } else {
                _this21.unmatchedProperties.push({
                  detail: item.data()
                });
              }
            });

            _this21.unmatchedProperties.sort(_this21.compare);
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
      }, {
        key: "closeThank",
        value: function closeThank() {
          this.isThanku = false;
        }
      }]);

      return MatchesNestimateComponent;
    }();

    MatchesNestimateComponent.ctorParameters = function () {
      return [{
        type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    MatchesNestimateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-matches-nestimate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matches-nestimate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matches-nestimate.component.css */
      "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.css")).default]
    })], MatchesNestimateComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/buyerMatchListing.service.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/buyerMatchListing.service.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: MatchesService */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesUnMatchesNestimateBuyerMatchListingServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.customersRef = db.collection("listingSeller"); // Collection Group

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
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.css":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.css ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesUnMatchesNestimateUnMatchesNestimateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0px !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.thank-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 12vh;\r\n    background-color: whie;\r\n    background: #ffffffdb;\r\n    padding: 20px;\r\n    margin-right: 8px;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-size: 22px;\r\n}\r\n.btn-secondary\r\n{\r\n    background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        margin-top: 14px;\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.match-images { \r\n    height: 16vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL21hdGNoZWQtbmVzdGltYXRlcy91bi1tYXRjaGVzLW5lc3RpbWF0ZS91bi1tYXRjaGVzLW5lc3RpbWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTs7OEdBRThHO0FBQzlHOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksd0NBQXdDO0FBQzVDO0FBU0E7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKO0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL1Byb3BlcnR5L2ZpbGxGb3JtQnV5ZXIvbWF0Y2hlZC1uZXN0aW1hdGVzL3VuLW1hdGNoZXMtbmVzdGltYXRlL3VuLW1hdGNoZXMtbmVzdGltYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLnRoYW5rLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZkYjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkZvbnQtc2l6ZXNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5hcmVhLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5kaXNjcmlwdGlvbi1wXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ucHJvcGVydHktdHlwZS1jb2xvcntcclxuICAgIGNvbG9yOiAjOEJCNDQwO1xyXG59XHJcbi5mb250LWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1haW4taGVhZGluZ1xyXG57XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnlcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tREFSSy1CTFVFLUNPTE9SKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpXHJcbntcclxuICAgIC5tYXRjaC1pbWFnZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLW1hdGNoZXNcclxue1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0Y2gtaW1hZ2VzIHsgXHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: UnMatchesNestimateComponent */

  /***/
  function srcAppHomePropertyFillFormBuyerMatchedNestimatesUnMatchesNestimateUnMatchesNestimateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnMatchesNestimateComponent", function () {
      return UnMatchesNestimateComponent;
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


    var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./buyerMatchListing.service */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/buyerMatchListing.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../.././../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../Model/listingBuyer */
    "./src/app/Model/listingBuyer.ts");

    var UnMatchesNestimateComponent =
    /*#__PURE__*/
    function () {
      function UnMatchesNestimateComponent(MatchesService, stateService) {
        _classCallCheck(this, UnMatchesNestimateComponent);

        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_4__["listingBuyer"]();
        this.isThanku = true;
      }

      _createClass(UnMatchesNestimateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.MatchesService.getSellerProperties(this.uid).subscribe(function (ref) {
            ref.forEach(function (item) {
              console.log("from the db " + item.data().Lookingpostcode);
              console.log("from the localStorage " + JSON.stringify(_this22.listingBuyer.Lookingpostcode));

              if (item.data().Lookingpostcode == _this22.listingBuyer.Lookingpostcode) {
                _this22.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().latitude && item.data().longitude) {
                _this22.distanceInKm = _this22.getDistanceFromLatLonInKm(_this22.listingBuyer.latitude, _this22.listingBuyer.longitude, item.data().latitude, item.data().longitude);

                _this22.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this22.distanceInKm
                });
              } else {
                _this22.unmatchedProperties.push({
                  detail: item.data()
                });
              }
            });

            _this22.unmatchedProperties.sort(_this22.compare);
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
      }, {
        key: "closeThank",
        value: function closeThank() {
          this.isThanku = false;
        }
      }]);

      return UnMatchesNestimateComponent;
    }();

    UnMatchesNestimateComponent.ctorParameters = function () {
      return [{
        type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    UnMatchesNestimateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-un-matches-nestimate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./un-matches-nestimate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./un-matches-nestimate.component.css */
      "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.css")).default]
    })], UnMatchesNestimateComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: AlertDialogComponent */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailAlertDialogSellerDataSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      selector: 'app-alertDialogSellerDataSubmission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertDialogSellerDataSubmission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AlertDialogComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css":
  /*!****************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailConfirmSellerDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  padding-top: 15px;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\nsection.example-section.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  /* margin-top: -5px; */\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL2NvbmZpcm1TZWxsZXJEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCOztBQUdBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1TZWxsZXIvY29uZmlybVNlbGxlckRldGFpbC9jb25maXJtU2VsbGVyRGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1tYWluLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY29uZmlybS1maXJzdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCxcclxuLnRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG4uY29uZmlybS1wYWdlLWhlYWRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuXHJcblxyXG4uZW5kaW5kLWJ1dHRvbiB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJhY2sge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3ItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbnNlY3Rpb24uZXhhbXBsZS1zZWN0aW9uLnByb3BlcnR5LWNvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8qIG1hcmdpbi10b3A6IC01cHg7ICovXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ConfirmSellerDetailComponent */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailConfirmSellerDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmSellerDetailComponent", function () {
      return ConfirmSellerDetailComponent;
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


    var _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../fillFormSeller.service */
    "./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./alertDialogSellerDataSubmission.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _confirmseller_detail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./confirmseller-detail.service */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmseller-detail.service.ts");

    var ConfirmSellerDetailComponent =
    /*#__PURE__*/
    function () {
      function ConfirmSellerDetailComponent(activatedRoute, SellerformService, authService, afAuth, stateService, dialog, snackBar, route, _location, postcodeService, ConfirmsellerDetailService, router) {
        _classCallCheck(this, ConfirmSellerDetailComponent);

        this.activatedRoute = activatedRoute;
        this.SellerformService = SellerformService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.route = route;
        this._location = _location;
        this.postcodeService = postcodeService;
        this.ConfirmsellerDetailService = ConfirmsellerDetailService;
        this.router = router;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.isBuyer = false;
      }

      _createClass(ConfirmSellerDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.ConfirmsellerDetailService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this23.uid) {
                _this23.user.Name = element.data().Name;
                _this23.user.Email = element.data().email;
                _this23.user.DOB = element.data().DOB.toDate();
                _this23.user.Phone = element.data().Phone;
                _this23.user.Currentpostcode = element.data().Currentpostcode;
                _this23.user.title = element.data().title;
              }
            });
          }); // Auth

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this23.userData = user;
              localStorage.setItem("user", JSON.stringify(_this23.userData));

              _this23.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this23.LoggedOut();
            }
          });
          this.listingSeller = this.stateService.listingSeller; //For Seller

          this.postcodeService.getLat(this.listingSeller.Lookingpostcode).subscribe(function (data) {
            _this23.postcodeCoordinates = data;
            _this23.listingSeller.longitude = _this23.postcodeCoordinates.result.longitude, _this23.listingSeller.latitude = _this23.postcodeCoordinates.result.latitude, _this23.listingSeller.UserId = _this23.userData.uid, _this23.isBuyer = true;
            _this23.isBuyer = false; // this.return = this.SellerformService.createCustomer(this.userData.uid,this.listingSeller)
            // .then(data => {
            //   if (data == true) {
            //     
            //     console.log(this.listingSeller.latitude);
            //   }
            // });
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this24 = this;

          this.listingSeller.UserId = this.userData.uid;
          this.isLoading = true;
          this.listingSeller.username = this.user.Name;
          this.listingSeller.usertitle = this.user.title;
          this.return = this.SellerformService.createCustomer(this.userData.uid, this.listingSeller).then(function (data) {
            if (data == true) {
              _this24.isLoading = false;

              var dialogRef = _this24.dialog.open(_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], {
                data: {
                  message: "HelloWorld",
                  buttonText: {
                    cancel: "Done"
                  }
                }
              });
            }
          });
          this.notification = {
            time: new Date(),
            viewed: "no"
          };
          this.return = this.SellerformService.notificationCustomer(this.userData.uid, this.notification).then(function (data) {
            console.log("notification" + data);
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
        key: "backClicked",
        value: function backClicked() {
          this._location.getState();
        }
      }]);

      return ConfirmSellerDetailComponent;
    }();

    ConfirmSellerDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_3__["SellerformService"]
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
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]
      }, {
        type: _confirmseller_detail_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmsellerDetailService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ConfirmSellerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-confirmSellerDetail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmSellerDetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmSellerDetail.component.css */
      "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css")).default]
    })], ConfirmSellerDetailComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmseller-detail.service.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmseller-detail.service.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ConfirmsellerDetailService */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailConfirmsellerDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmsellerDetailService", function () {
      return ConfirmsellerDetailService;
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

    var ConfirmsellerDetailService =
    /*#__PURE__*/
    function () {
      function ConfirmsellerDetailService(db) {
        _classCallCheck(this, ConfirmsellerDetailService);

        this.db = db;
        this.userCollection = db.collection("users");
        this.userDetail = db.collectionGroup("${user.uid}");
      }

      _createClass(ConfirmsellerDetailService, [{
        key: "getUser",
        value: function getUser(uid) {
          return this.userCollection.get();
        }
      }]);

      return ConfirmsellerDetailService;
    }();

    ConfirmsellerDetailService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ConfirmsellerDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConfirmsellerDetailService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerMatchListingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0px !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.match-section\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/* .match-images {\r\n    width: 30%;\r\n    margin-right: 1em;\r\n} */\r\n.mat-card-content-new-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nspan.outputText.price-font {\r\n    font-size: 1.8em;\r\n}\r\n.other-text {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan.heading-nestimate.card-heading-font {\r\n    text-align: left;\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n.mat-card-content-new {\r\n    margin-top: 1em;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-size: 21px;\r\n    text-transform: capitalize;\r\n}\r\n.thanku-p-section\r\n{\r\n\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n \r\n    font-size: 22px;\r\n}\r\n.btn-secondary\r\n{\r\n    background-color: var(--DARK-BLUE-COLOR);\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    align-items: center;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    width: 100% !important;\r\n    align-items: center;\r\n    margin-top: 8px;\r\n    justify-content: center;\r\n    padding: 6px\r\n}\r\n.thank-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 12vh;\r\n    background-color: whie;\r\n    background: #ffffffdb;\r\n    padding: 20px;\r\n    margin-right: 8px;\r\n}\r\n.match-images { \r\n    height: 19vh;\r\n}\r\nselect#country {\r\n    float: right;\r\n    height: 2em;\r\n    border: 1px solid;\r\n    background-color: transparent;\r\n    color: var(--DARK-BLUE-COLOR );\r\n    border: transparent;\r\n}\r\n.sort-by-drop {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.example-full-width{\r\n    float: right;\r\n    background-color: transparent;\r\n}\r\n.other-container {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: justify;\r\n    /* font-size: 5px; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJNYXRjaExpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7OEdBRThHO0FBQzlHOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBOzs7SUFHSSxlQUFlO0FBQ25CO0FBQ0E7OztJQUdJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx3Q0FBd0M7QUFDNUM7QUFTQTs7SUFFSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJNYXRjaExpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaGVzLW1haW4tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi50aGFua3Utc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdGNoLXNlY3Rpb25cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiAubWF0Y2gtaW1hZ2VzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufSAqL1xyXG4ubWF0LWNhcmQtY29udGVudC1uZXctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zcGFuLm91dHB1dFRleHQucHJpY2UtZm9udCB7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcbi5vdGhlci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zcGFuLmhlYWRpbmctbmVzdGltYXRlLmNhcmQtaGVhZGluZy1mb250IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudC1uZXcge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubWFpbi1oZWFkaW5nXHJcbntcclxuIFxyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5idG4tc2Vjb25kYXJ5XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWF0LWNhcmQtbWF0Y2hlc1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4XHJcbn1cclxuLnRoYW5rLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZkYjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ubWF0Y2gtaW1hZ2VzIHsgXHJcbiAgICBoZWlnaHQ6IDE5dmg7XHJcbn1cclxuc2VsZWN0I2NvdW50cnkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUiApO1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc29ydC1ieS1kcm9wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5vdGhlci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgLyogZm9udC1zaXplOiA1cHg7ICovXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: SellerMatchListingComponent */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerMatchListingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerMatchListingComponent", function () {
      return SellerMatchListingComponent;
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


    var _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sellerMatchListing.service */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../state-service.service */
    "./src/app/state-service.service.ts");

    var SellerMatchListingComponent =
    /*#__PURE__*/
    function () {
      function SellerMatchListingComponent(SellermatchesService, stateService) {
        _classCallCheck(this, SellerMatchListingComponent);

        this.SellermatchesService = SellermatchesService;
        this.stateService = stateService;
        this.isLoading = false;
        this.propertyDetails = [];
        this.matchedProperties = [];
        this.unmatchedProperties = [];
        this.isThanku = true;
        this.hello = false;
      }

      _createClass(SellerMatchListingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.SellermatchesService.getSellerProperties(this.uid).subscribe(function (res) {
            res.forEach(function (item) {
              if (item.data().Lookingpostcode == _this25.stateService.listingSeller.Lookingpostcode) {
                _this25.matchedProperties.push(item.data()); //Use this object to populate html

              } else if (item.data().latitude && item.data().longitude) {
                _this25.distanceInKm = _this25.getDistanceFromLatLonInKm(_this25.stateService.listingSeller.latitude, _this25.stateService.listingSeller.longitude, item.data().latitude, item.data().longitude);

                _this25.unmatchedProperties.push({
                  detail: item.data(),
                  distance: _this25.distanceInKm
                }); //console.log({ detail: item.data(), distance: this.distanceInKm });


                console.log(_this25.unmatchedProperties.length);
              } else {
                _this25.unmatchedProperties.push({
                  detail: item.data()
                });
              }
            });

            _this25.unmatchedProperties.sort(_this25.compare);

            _this25.noOfMatches = _this25.matchedProperties.length;
            _this25.noOfUnmatched = _this25.unmatchedProperties.length; //console.log(this.matchedProperties[0]);
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
      }, {
        key: "closeThank",
        value: function closeThank() {
          this.isThanku = false;
        }
      }, {
        key: "getShortName",
        value: function getShortName(fullName) {
          return fullName.split(' ').map(function (n) {
            return n[0];
          }).join('');
        }
      }, {
        key: "test",
        value: function test(value) {
          if (value == this.sort.low) {
            this.hello = true;
          }
        }
      }, {
        key: "hightoLow",
        value: function hightoLow() {
          this.matchedProperties.sort(function (a, b) {
            return b.MaxAmount - a.MaxAmount;
          });
        }
      }, {
        key: "lowtohigh",
        value: function lowtohigh() {
          this.matchedProperties.sort(function (a, b) {
            return a.MaxAmount - b.MaxAmount;
          });
        }
      }, {
        key: "roomshightolow",
        value: function roomshightolow() {
          this.matchedProperties.sort(function (a, b) {
            return a.Maxrooms - b.Maxrooms;
          });
        }
      }, {
        key: "matchedsearch",
        value: function matchedsearch() {
          this.matchedProperties.sort(function (a, b) {
            return a.SearchRadius - b.SearchRadius;
          });
        } //For unmatched

      }, {
        key: "unmatchedhightoLow",
        value: function unmatchedhightoLow() {
          this.unmatchedProperties.sort(function (a, b) {
            return b.detail.MaxAmount - a.detail.MaxAmount;
          });
        }
      }, {
        key: "unmatchedlowtohigh",
        value: function unmatchedlowtohigh() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.detail.MaxAmount - b.detail.MaxAmount;
          });
        }
      }, {
        key: "unmatchedroomshightolow",
        value: function unmatchedroomshightolow() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.detail.Maxrooms - b.detail.Maxrooms;
          });
        }
      }, {
        key: "unmatchedmatchedsearch",
        value: function unmatchedmatchedsearch() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.detail.SearchRadius - b.detail.SearchRadius;
          });
        }
      }, {
        key: "unmatcheddistance",
        value: function unmatcheddistance() {
          this.unmatchedProperties.sort(function (a, b) {
            return a.distance - b.distance;
          });
        }
      }]);

      return SellerMatchListingComponent;
    }();

    SellerMatchListingComponent.ctorParameters = function () {
      return [{
        type: _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["SellerMatchListingService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }];
    };

    SellerMatchListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sellerMatchListing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sellerMatchListing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sellerMatchListing.component.css */
      "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css")).default]
    })], SellerMatchListingComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: SellerMatchListingService */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerMatchListingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerMatchListingService", function () {
      return SellerMatchListingService;
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

    var SellerMatchListingService =
    /*#__PURE__*/
    function () {
      function SellerMatchListingService(db) {
        _classCallCheck(this, SellerMatchListingService);

        this.db = db;
        this.customersRef = db.collection("listingSeller"); // Collection Group

        this.propertiesRef = db.collectionGroup("requirements");
        this.Userref = db.collection("users");
      }

      _createClass(SellerMatchListingService, [{
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.propertiesRef.get();
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.Userref.get();
        }
      }]);

      return SellerMatchListingService;
    }();

    SellerMatchListingService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SellerMatchListingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SellerMatchListingService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailAgentSelectionAgentSelectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-agent-selection {\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n.note-agent-selection {\r\n    font-size: 20px;\r\n}\r\n.agent-selection-radiobutton-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.agent-selection-name {\r\n    font-size: 20px;\r\n}\r\n.agent-selection-commision {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.agent-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.button-card{\r\n    display: flex;\r\n    justify-content: ali;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2FnZW50U2VsZWN0aW9uL2FnZW50U2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2FnZW50U2VsZWN0aW9uL2FnZW50U2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYWdlbnQtc2VsZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ubm90ZS1hZ2VudC1zZWxlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hZ2VudC1zZWxlY3Rpb24tcmFkaW9idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuLmFnZW50LXNlbGVjdGlvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYWdlbnQtc2VsZWN0aW9uLWNvbW1pc2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFnZW50LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idXR0b24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGFsaTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: AgentSelectionComponent */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailAgentSelectionAgentSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentSelectionComponent", function () {
      return AgentSelectionComponent;
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


    var _agentSelection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./agentSelection.service */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts");

    var AgentSelectionComponent =
    /*#__PURE__*/
    function () {
      function AgentSelectionComponent(AgentSelectionService) {
        _classCallCheck(this, AgentSelectionComponent);

        this.AgentSelectionService = AgentSelectionService;
      }

      _createClass(AgentSelectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AgentSelectionComponent;
    }();

    AgentSelectionComponent.ctorParameters = function () {
      return [{
        type: _agentSelection_service__WEBPACK_IMPORTED_MODULE_2__["AgentSelectionService"]
      }];
    };

    AgentSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agentSelection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agentSelection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agentSelection.component.css */
      "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css")).default]
    })], AgentSelectionComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: AgentSelectionService */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailAgentSelectionAgentSelectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentSelectionService", function () {
      return AgentSelectionService;
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

    var AgentSelectionService =
    /*#__PURE__*/
    function () {
      function AgentSelectionService(db) {
        _classCallCheck(this, AgentSelectionService);

        this.db = db; //private dbPathBuyer = "matchesBuyer"; 

        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //Buyer Database

        this.customersRef = db.collection("agentSignup");
      } //Fetching Buyer Detail


      _createClass(AgentSelectionService, [{
        key: "getBuyerProperties",
        value: function getBuyerProperties(uid) {
          return this.customersRef.doc(uid).collection("agents").ref.get();
        }
      }]);

      return AgentSelectionService;
    }();

    AgentSelectionService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AgentSelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AgentSelectionService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailSellerSelectedPropertyDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.property-selected-detail-background\r\n{\r\n    background-image: url('/assets/Images/selectedPropertybackgroung.jpg');\r\n    background-position: center;\r\n    background-size: contain;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding: 1em;\r\n}\r\n.streetname {\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{   \r\n    font-size: 17px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.details-output-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\n.continue-form {\r\n    background-color: var(--light-blue-color);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0vh;\r\n    position: fixed;\r\n    bottom: 0px;\r\n  }\r\n.nestimate-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\nimg.nestimate-logo {\r\n    height: 22vh;\r\n    }\r\n.overlay-text{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.overlay-text-third{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.continue-text {\r\n    margin: 2em;\r\n    font-size: 17px;\r\n    text-align: left;\r\n  }\r\n.continue-button-container\r\n  {\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n    font-size: 18px;\r\n  }\r\n.continue-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    border: 3px solid white;\r\n    margin: 0vh 15vw;\r\n    padding: 0.6em\r\n  }\r\n.continue-form-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL3NlbGxlclNlbGVjdGVkUHJvcGVydHlEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLHNFQUFzRTtJQUN0RSwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCO0FBRUE7OztJQUdJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2Qjs7O0lBRzdCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBRVQsYUFBYTtJQUViLHVCQUF1QjtJQUV2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxZQUFZO0lBQ1o7QUFDRjtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7QUFFQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0E7O0lBRUUsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEI7RUFDRjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1TZWxsZXIvY29uZmlybVNlbGxlckRldGFpbC9zZWxsZXJNYXRjaExpc3Rpbmcvc2VsbGVyU2VsZWN0ZWRQcm9wZXJ0eURldGFpbC9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktZGV0YWlsLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuLnByb3BlcnR5LXNlbGVjdGVkLWRldGFpbC1iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9JbWFnZXMvc2VsZWN0ZWRQcm9wZXJ0eWJhY2tncm91bmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICBcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5zdHJlZXRuYW1lIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5kZXRhaWxzLXAtaGVhZGluZ3NcclxueyAgIFxyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldGFpbHMtb3V0cHV0LXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5idXR0b24tZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgXHJcbiAgXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnRuLWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ1dHRvbi1hc2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiNkZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pbWcubWF0Y2gtaW1hZ2VzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5NYXQtY2FyZC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTBweFxyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmNvbnRpbnVlLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZS1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgdG9wOiAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgLm5lc3RpbWF0ZS1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgaW1nLm5lc3RpbWF0ZS1sb2dvIHtcclxuICAgIGhlaWdodDogMjJ2aDtcclxuICAgIH1cclxuICAub3ZlcmxheS10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXktdGV4dC10aGlyZHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgfVxyXG4gIC5jb250aW51ZS10ZXh0IHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXJcclxuICB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuY29udGludWUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHZoIDE1dnc7XHJcbiAgICBwYWRkaW5nOiAwLjZlbVxyXG4gIH1cclxuICAuY29udGludWUtZm9ybS1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts":
  /*!************************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: SellerSelectedPropertyComponent */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailSellerSelectedPropertyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerSelectedPropertyComponent", function () {
      return SellerSelectedPropertyComponent;
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


    var _sellerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sellerSelectedPropertyDetail.service */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../.././state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sellerMatchListing.service */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SellerSelectedPropertyComponent =
    /*#__PURE__*/
    function () {
      function SellerSelectedPropertyComponent(seller_Selected_propertydetail_Service, stateService, dialog, snackBar, SellerMatchListingService, _Activatedroute, _router, _location) {
        _classCallCheck(this, SellerSelectedPropertyComponent);

        this.seller_Selected_propertydetail_Service = seller_Selected_propertydetail_Service;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.SellerMatchListingService = SellerMatchListingService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this._location = _location;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
        this.isSellerSelected = false;
        this.overlay = false;
      }

      _createClass(SellerSelectedPropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this26.PriceRange = params.get("MaxAmount");
            _this26.Lookingpostcode = params.get("Lookingpostcode");
            _this26.LookingStreetname = params.get("LookingStreetname");
            _this26.Position = params.get("Position");
            _this26.PropertyType = params.get("PropertyType");
            _this26.Roomsmax = params.get("Roomsmax");
            _this26.ownership = params.get("Ownership");
            _this26.Conditions = params.get("Conditions");
            _this26.Maxbathroom = params.get("Maxbathroom");
            _this26.Maxreception = params.get("Maxreception");
            _this26.features = params.get("features");
            _this26.UserId = params.get("UserId").replace(/\s/g, "");
            _this26.FinancialPosition = params.get("FinancialPosition"); //   this.ChainStatus = params.get("ChainStatus");
            // this.FinancialPosition = params.get("FinancialPosition");
            // this.SearchRadius = params.get("SearchRadius");
            // this.PriceRange = params.get("PriceRange");
            // this.Validity = params.get("Validity");
            // this.Type = params.get("Type");
            // this.Position = params.get("Position");
          });
          this.seller_Selected_propertydetail_Service.getUser(this.UserId).subscribe(function (dref) {
            dref.forEach(function (element) {
              if (_this26.UserId == element.data().uid) {
                _this26.title = element.data().title;
                _this26.unNamed = element.data().Name;
                console.log(element.data().Name);
              }
            });
          });
          console.log("user id" + this.UserId);
        } //Create Database match Seller

      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this27 = this;

          this.matchesSeller = {
            PriceRange: this.PriceRange,
            Lookingpostcode: this.Lookingpostcode,
            LookingStreetname: this.LookingStreetname,
            Position: this.Position,
            PropertyType: this.PropertyType,
            Roomsmax: this.Roomsmax,
            Ownership: this.ownership,
            Conditions: this.Conditions,
            Maxbathroom: this.Maxbathroom,
            Maxreception: this.Maxreception,
            features: this.features,
            FinancialPosition: this.FinancialPosition,
            UserId: this.UserId,
            matchStatus: "pending"
          };
          console.log(this.UserId);
          this.isSellerSelected = true;
          this.return = this.seller_Selected_propertydetail_Service.matchesSellerCreate(this.uid, this.matchesSeller).then(function (data) {
            if (data == true) {
              _this27.isSellerSelected = false;
              _this27.overlay = false;
            }
          });
          this.matchesBuyer = {
            Lookingpostcode: this.stateService.listingSeller.Lookingpostcode,
            Lookingstate: this.stateService.listingSeller.Lookingstate,
            LookingTown: this.stateService.listingSeller.LookingTown,
            Roomsmax: this.stateService.listingSeller.Maxrooms,
            PropertyCondition: this.stateService.listingSeller.PropertyCondition,
            MaxAmount: this.stateService.listingSeller.MaxAmount,
            LookingAddress: this.stateService.listingSeller.LookingAddress,
            ownership: this.stateService.listingSeller.ownership,
            PropertyType: this.stateService.listingSeller.PropertyType,
            features: this.stateService.listingSeller.features,
            UserId: this.stateService.listingSeller.UserId,
            matchStatus: "confirm_interest"
          };
          console.log(this.UserId);
          this.isSellerSelected = true;
          this.return = this.seller_Selected_propertydetail_Service.matchesBuyerCreate(this.UserId, this.matchesBuyer).then(function (data) {
            if (data == true) {
              _this27.isSellerSelected = false;
            }
          });
          this.backClicked();
        }
      }, {
        key: "Overlayopen",
        value: function Overlayopen() {
          this.overlay = true;
        }
      }, {
        key: "continueClose",
        value: function continueClose() {
          this.overlay = false;
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return SellerSelectedPropertyComponent;
    }();

    SellerSelectedPropertyComponent.ctorParameters = function () {
      return [{
        type: _sellerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__["SellerSelectedPropertyDetailService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__["SellerMatchListingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }];
    };

    SellerSelectedPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-Propertydetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sellerSelectedPropertyDetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sellerSelectedPropertyDetail.component.css */
      "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css")).default]
    })], SellerSelectedPropertyComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: SellerSelectedPropertyDetailService */

  /***/
  function srcAppHomePropertyFillFormSellerConfirmSellerDetailSellerMatchListingSellerSelectedPropertyDetailSellerSelectedPropertyDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerSelectedPropertyDetailService", function () {
      return SellerSelectedPropertyDetailService;
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

    var SellerSelectedPropertyDetailService =
    /*#__PURE__*/
    function () {
      function SellerSelectedPropertyDetailService(db) {
        _classCallCheck(this, SellerSelectedPropertyDetailService);

        this.db = db;
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matcheBuyerRef = null;
        this.matcheSellerRef = null;
        this.customersRef = db.collection("listingBuyer");
        this.Userref = db.collection("users");
      } //create Database Seller Matches


      _createClass(SellerSelectedPropertyDetailService, [{
        key: "matchesSellerCreate",
        value: function matchesSellerCreate(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.db.collection("matchesSeller").doc(key).collection("matches").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context5.sent;
                    return _context5.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "matchesBuyerCreate",
        value: function matchesBuyerCreate(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.db.collection("matchesBuyer").doc(key).collection("matches").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Document successfully written!");
                    });

                  case 2:
                    this.return = _context6.sent;
                    return _context6.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.Userref.get();
        }
      }]);

      return SellerSelectedPropertyDetailService;
    }();

    SellerSelectedPropertyDetailService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SellerSelectedPropertyDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SellerSelectedPropertyDetailService);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePropertyFillFormSellerFillFormSellerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-containers {\r\n\r\n  width: auto;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.forms-container {\r\n\r\n  padding-bottom: 4%;\r\n  padding-top: 1%;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.tab-content {\r\n  padding: 20px;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden;\r\n}\r\n\r\nnav {\r\n  background-color: #244D93;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  border-radius: 11px;\r\n  margin-top: 62px;\r\n\r\n}\r\n\r\n.nav-link {\r\n  color: white;\r\n}\r\n\r\n.nav-tabs .nav-item.show .nav-link,\r\n.nav-tabs .nav-link.active {\r\n  color: #244D93;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n  \r\n  font-weight: 700 !important;\r\n}\r\n\r\n.other-option {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0rem 1rem;\r\n\r\n}\r\n\r\ndiv#nav-tabContent {\r\n  width: auto;\r\n}\r\n\r\n.seller-form-upper {\r\n  padding-top: 6px;\r\n}\r\n\r\n.seller-form-upper p {\r\n  \r\n  font-size: 14px;\r\n}\r\n\r\n.seller-form-upper span {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.top-hr {\r\n  margin-top: -1rem;\r\n  margin-bottom: 0rem;\r\n  border: 0;\r\n  border-top: 2px solid grey\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  margin-top: 3%;\r\n  border-radius: 19px;\r\n  padding: 0.5em;\r\n\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n\r\n  margin-left: .255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: .4em solid;\r\n  border-right: .4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: .4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n/* span.text-dropdown {\r\n    float: left;\r\n} */\r\n\r\n.dropdown-item {\r\n  text-align: center;\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n  /* border: 1px solid grey; */\r\n  border: 1px solid #CED4DA;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  color: white;\r\n}\r\n\r\n.btn-next {\r\n  background-color: var(--DARK-BLUE-COLOR);\r\n  color: white;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.second-container {\r\n  background-color: white;\r\n\r\n}\r\n\r\ninput#Tittle {\r\n  width: 100%;\r\n}\r\n\r\n.forms-heading {\r\n  \r\n  font-size: 18px;\r\n}\r\n\r\n.dropdown-item {\r\n  \r\n  color: #707070;\r\n}\r\n\r\n.form-or-p {\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 26px;\r\n  /* padding: 8px; */\r\n  background: #fff;\r\n  border: 1px solid black;\r\n  color: #666;\r\n  text-align: center;\r\n  font: 19px 'Open Sans', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.forms-or {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.form-or-p:before,\r\n.form-or-p:after {\r\n  background-color: #333;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 1px;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n\r\n.form-or-p:before {\r\n  right: .5em;\r\n  margin-left: -100%;\r\n}\r\n\r\n.form-or-p:after {\r\n  left: .5em;\r\n  margin-right: -100%;\r\n}\r\n\r\nbtnDefault,\r\n.btnUpload {\r\n  background-color: lightgrey;\r\n  border: 1px solid #CCCCCC;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  font-weight: 400;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btnDefault:focus,\r\n.btnDefault:hover,\r\n.btnUpload:focus,\r\n.btnUpload:hover {\r\n  background-color: grey;\r\n}\r\n\r\n.btnM {\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  padding: 6px 12px;\r\n}\r\n\r\n.customUpload {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.customUpload input.upload {\r\n  cursor: pointer;\r\n  margin: 0;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  padding: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.forms-heading-optional {\r\n  \r\n  font-weight: 700;\r\n  font-size: 16px;\r\n\r\n  padding-left: 16px;\r\n}\r\n\r\n.optional-button-group {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-top: 40px;\r\n}\r\n\r\n.row-check {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checkbox-check {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n\r\n}\r\n\r\n.radio-main-container {\r\n  justify-content: space-between;\r\n  /* margin: 0; */\r\n  /* padding: 0; */\r\n\r\n  align-content: center;\r\n}\r\n\r\n.submit-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-top: 16px;\r\n}\r\n\r\n.step.finish {\r\n  background-color: #244D93\r\n}\r\n\r\na.nav-link.disabled {\r\n\r\n  color: white;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.mat-tab-group.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 20px !important;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n}\r\n\r\n.Line-form\r\n{\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n\r\nfieldset {\r\n \r\n  border: 2px solid black;\r\n  display: block;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  padding-top: 0.35em;\r\n  padding-bottom: 0.625em;\r\n  padding-left: 0.75em;\r\n  padding-right: 0.75em;\r\n width: auto;\r\n}\r\n\r\nlegend\r\n{\r\n  width: auto;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.text-field-height\r\n{\r\n  height: 200px;\r\n}\r\n\r\ntextarea#mat-input-15 {\r\n  height: 200px;\r\n}\r\n\r\n.mat_card_title\r\n{\r\n  font-size: 17px;\r\n}\r\n\r\n.forms-heading {\r\n  margin: 0px;\r\n}\r\n\r\n.forms-star\r\n{\r\n  font-size: 14px;\r\n}\r\n\r\n.price-selection {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  flex-direction: initial;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.Label-notes {\r\n  font-size: 12px;\r\n}\r\n\r\n.radio-button-align {\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-margin\r\n{\r\n  margin: 10px;\r\n}\r\n\r\n.filed-width\r\n{\r\n  width: 49% !important;\r\n}\r\n\r\n.select-constion {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 18px;\r\n}\r\n\r\nimg.button-cross {\r\n  height: 2vh;\r\n}\r\n\r\nlabel {\r\n\r\nmargin-bottom: .0rem !important;\r\n}\r\n\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n\r\n.home-button {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 35%;\r\n}\r\n\r\n.home-text-font {\r\n\r\n  color: #707070;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n \r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.sign-in-main\r\n{\r\n  display: block;\r\n}\r\n\r\n.user-cross {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nimg.button-cross {\r\n  position: absolute;\r\n  right: 0px;\r\n  margin: 0px 10px;\r\n  width: 16px;\r\n}\r\n\r\n.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  text-align: left;\r\n \r\n}\r\n\r\n.continue-form {\r\n  background-color: var(--light-blue-color);\r\n  width: 100vw;\r\n  position: fixed;\r\n    z-index: 10;\r\n    top: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n\r\n\r\n}\r\n\r\n.nestimate-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg.nestimate-logo {\r\n  height: 22vh;\r\n  margin-top: 3vh;\r\n}\r\n\r\n.overlay-text{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.overlay-text-third{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.continue-text {\r\n  margin: 2em;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n\r\n.continue-button-container\r\n{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n  font-size: 18px;\r\n}\r\n\r\n.continue-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 3px solid white;\r\n  margin: 0vh 15vw;\r\n  padding: 0.6em\r\n}\r\n\r\n.input-container { /* IE10 */\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.icon {\r\n  padding: 10px;\r\n  /* background: var( --DARK-BLUE-COLOR);\r\n  color: white; */\r\n  min-width: 50px;\r\n  text-align: center;\r\n  border-top: 1px solid;\r\n  border-bottom: 0.8px solid;\r\n  border-left: 1px solid;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  padding: 10px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.input-group {\r\n \r\n\r\n  display: block;\r\n \r\n}\r\n\r\n.input-field:hover {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.hyper:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n.policy\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n\r\n  line-height: 3rem;\r\n\r\n\r\n  pointer-events: none;\r\n  display: flex;\r\n  color: #aaa;\r\n  font-size: 22px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.form-control\r\n{\r\n  height: 7vh;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1.5em;\r\n  \r\n    margin-bottom: 1rem;\r\n\r\n    margin-top: 1.5em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n}\r\n\r\n.radio-top-buyer {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  display: flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9maWxsRm9ybVNlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7RUFDWCx1QkFBdUI7O0FBRXpCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0NBQWtDOztFQUVsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Q7QUFDRjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBOztHQUVHOztBQUNIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFLQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBQ1I7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7O0VBRWYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhOztBQUVmOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLHFCQUFxQjtBQUN2Qjs7QUFJQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7O0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtDQUN0QixXQUFXO0FBQ1o7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUNBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBOztBQUVBLCtCQUErQjtBQUMvQjs7QUFNQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBSUE7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZOztBQUVkOztBQUlBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjOzs7QUFHaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixlQUFlO0lBQ2IsV0FBVztJQUNYLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhOzs7QUFHakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBOztFQUVFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQjtBQUNGOztBQUNBLG1CQUN3QixTQUFTO0VBQy9CLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiO2lCQUNlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUNBOzs7RUFHRSxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7O0VBRWYsaUJBQWlCOzs7RUFHakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6Qjs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCOztJQUVmLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjs7QUFFL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1TZWxsZXIvZmlsbEZvcm1TZWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcnMge1xyXG5cclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IDYycHg7XHJcblxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICNkZWUyZTYgI2ZmZjtcclxuICBcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdGhlci1vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcblxyXG59XHJcblxyXG5kaXYjbmF2LXRhYkNvbnRlbnQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2VsbGVyLWZvcm0tdXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5zZWxsZXItZm9ybS11cHBlciBwIHtcclxuICBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWxsZXItZm9ybS11cHBlciBzcGFuIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRvcC1ociB7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXlcclxufVxyXG4uY29sb3Itc2lnbnVwIHtcclxuICBjb2xvcjogIzI0NEQ5MztcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtbG9naW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcblxyXG59XHJcblxyXG5idXR0b24uYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAuMjU1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246IDIuMjU1ZW07XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3JkZXItdG9wOiAuNGVtIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi8qIHNwYW4udGV4dC1kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufSAqL1xyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uYnRuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0VENERBO1xyXG59XHJcblxyXG4uZW5kaW5kLWJ1dHRvbiB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJhY2sge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tREFSSy1CTFVFLUNPTE9SKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaW5wdXQjVGl0dGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm1zLWhlYWRpbmcge1xyXG4gIFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIFxyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uZm9ybS1vci1wIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIC8qIHBhZGRpbmc6IDhweDsgKi9cclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250OiAxOXB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG4uZm9ybXMtb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLW9yLXA6YmVmb3JlLFxyXG4uZm9ybS1vci1wOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1vci1wOmJlZm9yZSB7XHJcbiAgcmlnaHQ6IC41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG59XHJcblxyXG4uZm9ybS1vci1wOmFmdGVyIHtcclxuICBsZWZ0OiAuNWVtO1xyXG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XHJcbn1cclxuXHJcbmJ0bkRlZmF1bHQsXHJcbi5idG5VcGxvYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5idG5EZWZhdWx0OmZvY3VzLFxyXG4uYnRuRGVmYXVsdDpob3ZlcixcclxuLmJ0blVwbG9hZDpmb2N1cyxcclxuLmJ0blVwbG9hZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmJ0bk0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbn1cclxuXHJcbi5jdXN0b21VcGxvYWQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY3VzdG9tVXBsb2FkIGlucHV0LnVwbG9hZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5mb3Jtcy1oZWFkaW5nLW9wdGlvbmFsIHtcclxuICBcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ub3B0aW9uYWwtYnV0dG9uLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5yb3ctY2hlY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNoZWNrIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yYWRpby1hbGlnbiB7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4ucmFkaW8tbWFpbi1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvKiBtYXJnaW46IDA7ICovXHJcbiAgLyogcGFkZGluZzogMDsgKi9cclxuXHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGVwLmZpbmlzaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5M1xyXG59XHJcblxyXG5hLm5hdi1saW5rLmRpc2FibGVkIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLW5leHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tbmV4dC10YWIyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLm1hdC1tYWlsLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tYmVmb3JlLm1hdC1lbGV2YXRpb24tejQubWF0LXJpcHBsZS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWJlZm9yZS5tYXQtZWxldmF0aW9uLXo0Lm1hdC1yaXBwbGUubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvcGFjaXR5OiAuNjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5MaW5lLWZvcm1cclxue1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuLm1hdC1vcHRpb24ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cclxufVxyXG5maWVsZHNldCB7XHJcbiBcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xyXG4gd2lkdGg6IGF1dG87XHJcbn1cclxubGVnZW5kXHJcbntcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRleHQtZmllbGQtaGVpZ2h0XHJcbntcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhI21hdC1pbnB1dC0xNSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ubWF0X2NhcmRfdGl0bGVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZm9ybXMtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZvcm1zLXN0YXJcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2Utc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbml0aWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5MYWJlbC1ub3RlcyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yYWRpby1idXR0b24tYWxpZ24ge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkLW1hcmdpblxyXG57XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlZC13aWR0aFxyXG57XHJcbiAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3QtY29uc3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbmltZy5idXR0b24tY3Jvc3Mge1xyXG4gIGhlaWdodDogMnZoO1xyXG59XHJcbmxhYmVsIHtcclxuXHJcbm1hcmdpbi1ib3R0b206IC4wcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4udXBwZXItYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTE0NXB4O1xyXG59XHJcblxyXG4uaG9tZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcblxyXG5cclxuLmhvbWUtdGV4dC1mb250IHtcclxuXHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY29sb3Itc2lnbnVwIHtcclxuICBjb2xvcjogIzI0NEQ5MztcclxufVxyXG5cclxuLmJ0bi1zb2NpYWwtbG9naW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gXHJcblxyXG59XHJcblxyXG5pLmZhLmZhLXVzZXIuaW5wdXQtZ3JvdXAtdGV4dC5uYXYtbG9naW4tZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tdG9wOiAtNCU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogbm9uZTtcclxuICBsZWZ0OiBub25lO1xyXG4gIHJpZ2h0OiA5cHg7XHJcbiAgd2lkdGg6IG5vbmU7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5zaWduLWluLW1haW5cclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi51c2VyLWNyb3NzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pbWcuYnV0dG9uLWNyb3NzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG59XHJcbi5wcm9wZXJ0eS1jb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gXHJcbn1cclxuLmNvbnRpbnVlLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG5cclxufVxyXG4ubmVzdGltYXRlLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1nLm5lc3RpbWF0ZS1sb2dvIHtcclxuICBoZWlnaHQ6IDIydmg7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG59XHJcbi5vdmVybGF5LXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbn1cclxuXHJcbi5vdmVybGF5LXRleHQtdGhpcmR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbn1cclxuLmNvbnRpbnVlLXRleHQge1xyXG4gIG1hcmdpbjogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5jb250aW51ZS1idXR0b24tY29udGFpbmVyXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOiAwdmggMTV2dztcclxuICBwYWRkaW5nOiAwLjZlbVxyXG59XHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6IHZhciggLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG4gIGNvbG9yOiB3aGl0ZTsgKi9cclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxuICBib3JkZXItYm90dG9tOiAwLjhweCBzb2xpZDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkOmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoIC0tREFSSy1CTFVFLUNPTE9SKTtcclxufVxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gXHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gXHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZDpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKCAtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuLmh5cGVyOmhvdmVyXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBvbGljeVxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyLjM3NXJlbTtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcblxyXG5cclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcbi5mb3JtLWNvbnRyb2xcclxue1xyXG4gIGhlaWdodDogN3ZoO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG59XHJcblxyXG4ucmFkaW8tdG9wLWJ1eWVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FillFormSellerComponent */

  /***/
  function srcAppHomePropertyFillFormSellerFillFormSellerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FillFormSellerComponent", function () {
      return FillFormSellerComponent;
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


    var _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Model/listingSeller */
    "./src/app/Model/listingSeller.ts");
    /* harmony import */


    var _Model_sellerUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Model/sellerUser */
    "./src/app/Model/sellerUser.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../../Helper/date.adapter */
    "./src/app/Helper/date.adapter.ts");
    /* harmony import */


    var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../Misc/alertFormdialog/alertFormdialog.component */
    "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");
    /* harmony import */


    var _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./fillFormSeller.service */
    "./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts");
    /* harmony import */


    var _fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");

    var FillFormSellerComponent =
    /*#__PURE__*/
    function () {
      function FillFormSellerComponent(authService, afs, // Inject Firestore service
      afAuth, router, stateService, sellerService, dialog, SellerformService, fillFormsService, _Activatedroute, _router) {
        _classCallCheck(this, FillFormSellerComponent);

        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.stateService = stateService;
        this.sellerService = sellerService;
        this.dialog = dialog;
        this.SellerformService = SellerformService;
        this.fillFormsService = fillFormsService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.addressianAutoCompleteLooking$ = null;
        this.autoCompleteControlLooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.addressianAutoCompleteCurrent$ = null;
        this.autoCompleteControlCurrent = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.isLoggedIn = false;
        this.listingSeller = new _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__["listingSeller"]();
        this.sellerUser = new _Model_sellerUser__WEBPACK_IMPORTED_MODULE_5__["sellerUser"]();
        this.submitted = false;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_8__["VERSION"];
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("");
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.features = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.applicable = ["Garden", "Driveway", "Period Features", "Garage", "Gated Community", "Loft Conversion", "Conservatory/Sun room", "Granny Annexe", "Rear Extension"];
        this.newUser = false;
        this.model = {};
        this.loading = false;
        this.overlay = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]);
        this.phoneFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
        this.FirstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.LastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.EmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(6)]);
        this.noroomsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(2)]);
        this.DOBFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
      }

      _createClass(FillFormSellerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this28.userData = user;
              localStorage.setItem("user", JSON.stringify(_this28.userData));
              JSON.parse(localStorage.getItem("user"));

              _this28.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this28.LoggedOut();
            }
          }); // The auto population of github method

          this.addressianAutoCompleteLooking$ = this.autoCompleteControlLooking.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (value) {
            if (value !== "") {
              _this28.lookup(_this28.listingSeller.Lookingpostcode).subscribe(function (data) {
                _this28.data = data;
              });

              return _this28.lookup(_this28.listingSeller.Lookingpostcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
          })); // End method

          this.addressianAutoCompleteCurrent$ = this.autoCompleteControlCurrent.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(""), // delay emits
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(1000), // use switch map so as to cancel previous subscribed events, before creating new once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (value) {
            if (value !== "") {
              _this28.lookup(_this28.listingSeller.Currentpostcode).subscribe(function (data) {
                _this28.data = data;
              });

              return _this28.lookup(_this28.listingSeller.Currentpostcode);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
          }));
          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this28.Lookpostcode = params.get("Lookingpostcode");
            _this28.Lookaddress = params.get("LookingAddress");
            _this28.LookTown = params.get("LookingTown");
            _this28.Lookstate = params.get("Lookingstate");
            _this28.Country = params.get("Country");
            _this28.Property = params.get("PropertyType");
            _this28.Rooms = params.get("Maxrooms");
            _this28.Amount = params.get("MaxAmount");
            _this28.Ownership = params.get("ownership");
            _this28.Bathrooms = params.get("Maxbathrooms");
            _this28.Reception = params.get("Maxreception");
            _this28.Condition = params.get("PropertyCondition");
            _this28.Features = params.get("features");
            _this28.country = params.get("Country");
          });

          if (this.Lookpostcode != ":Lookingpostcode") {
            this.listingSeller.Lookingpostcode = this.Lookpostcode;
          }

          if (this.Lookaddress != ":LookingAddress") {
            this.listingSeller.LookingAddress = this.Lookaddress;
          }

          if (this.LookTown != ":LookingTown") {
            this.listingSeller.LookingTown = this.LookTown;
          }

          if (this.Lookstate != ":Lookingstate") {
            this.listingSeller.Lookingstate = this.Lookstate;
          }

          if (this.Country != ":Country") {
            this.listingSeller.Country = this.Country;
          }

          if (this.Property != ":PropertyType") {
            this.listingSeller.PropertyType = this.Property;
          }

          if (this.Rooms != ":Maxrooms") {
            this.listingSeller.Maxrooms = this.Rooms;
          }

          if (this.Amount != ":MaxAmount") {
            this.listingSeller.MaxAmount = this.Amount;
          }

          if (this.Ownership != ":ownership") {
            this.listingSeller.ownership = this.Ownership;
          }

          if (this.Bathrooms != ":Maxbathrooms") {
            this.listingSeller.Maxbathrooms = this.Bathrooms;
          }

          if (this.Reception != ":Maxreception") {
            this.listingSeller.Maxreception = this.Reception;
          }

          if (this.Condition != ":PropertyCondition") {
            this.listingSeller.PropertyCondition = this.Condition;
          } // if(this.Features != ":features")
          // {
          //   this.listingSeller.features = this.Features
          // }


          if (this.country != ":Country") {
            this.listingSeller.Country = this.country;
          }
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          var _this29 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.SellerformService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this29.uid) {
                _this29.user.Name = element.data().Name;
                _this29.user.Email = element.data().email;
                _this29.user.DOB = element.data().DOB.toDate();
                _this29.user.Phone = element.data().Phone;
                _this29.user.title = element.data().title;
                _this29.user.Currentpostcode = element.data().Currentpostcode;
                _this29.user.CurrentAddress = element.data().Currentaddress;
                _this29.user.CurrentTown = element.data().CurrentTowncity;
                _this29.user.Currentstate = element.data().Currentstate;
                console.log(element.data().Name);
              }
            });
          });
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
          this.listingSeller = new _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__["listingSeller"]();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // Get Seller variable into local scope for html
          this.stateService.listingSeller = this.listingSeller;
          this.router.navigate(["confirmSellerdetail"]);
        }
      }, {
        key: "lookup",
        value: function lookup(value) {
          return this.sellerService.search(value);
        }
      }, {
        key: "selectTab",
        value: function selectTab(nextIndex, presentIndex) {
          if (presentIndex == 0) {
            if (this.user.Name == null) {
              var dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                data: {
                  message: "Please Enter Full Name"
                }
              });
            } else if (this.user.Email == null) {
              var _dialogRef18 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                data: {
                  message: "Please Enter Email"
                }
              });
            } else if (Math.floor(Math.abs(Date.now() - new Date(this.user.DOB).getTime()) / (1000 * 3600 * 24) / 365.25) < 18) {
              var _dialogRef19 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                data: {
                  message: "You need to be over 18 to register on this website"
                }
              });
            } else if (this.user.Phone == null) {
              var _dialogRef20 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                data: {
                  message: "Please enter Phone number"
                }
              });
            } else {
              this.userDetail();
              this.selectedIndex = nextIndex;
            }
          } else if (presentIndex == 1) {
            if (nextIndex > presentIndex) {
              if (this.user.Currentpostcode == null) {
                var _dialogRef21 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Current Postcode"
                  }
                });
              } else if (this.user.CurrentAddress == null) {
                var _dialogRef22 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Current Address"
                  }
                });
              } else if (this.user.CurrentTown == null) {
                var _dialogRef23 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Current Town"
                  }
                });
              } else if (this.user.Currentstate == null) {
                var _dialogRef24 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Current State"
                  }
                });
              } else if (this.listingSeller.Lookingpostcode == null) {
                var _dialogRef25 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Looking Postcodes"
                  }
                });
              } else if (this.listingSeller.LookingAddress == null) {
                var _dialogRef26 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Looking Address"
                  }
                });
              } else if (this.listingSeller.LookingTown == null) {
                var _dialogRef27 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Looking Town"
                  }
                });
              } else if (this.listingSeller.Lookingstate == null) {
                var _dialogRef28 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Looking State"
                  }
                });
              } else if (this.listingSeller.PropertyType == null) {
                var _dialogRef29 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Enter Your Property Type"
                  }
                });
              } else if (this.listingSeller.Maxrooms == null) {
                var _dialogRef30 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select Maximum of Rooms"
                  }
                });
              } else if (this.listingSeller.MaxAmount == null) {
                var _dialogRef31 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                  data: {
                    message: "Please Select Maximum Amount"
                  }
                });
              } // else if (this.listingSeller.PropertyCondition == null) {
              //   const dialogRef = this.dialog.open(AltertFormDialogComponent, {
              //     data: { message: "Please Select Property Condition" },
              //   });
              // }
              else if (this.listingSeller.ownership == null) {
                  var _dialogRef32 = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
                    data: {
                      message: "Please Select Ownership"
                    }
                  });
                } // else if (this.listingSeller.features == null) {
                //   const dialogRef = this.dialog.open(AltertFormDialogComponent, {
                //     data: { message: "Please Select Features" },
                //   });
                // }
                else {
                    this.selectedIndex = nextIndex;
                  }
            } else {
              this.selectedIndex = nextIndex;
            }
          } else if (presentIndex == 2) {
            if (nextIndex > presentIndex) {
              if (this.listingSeller.otherInfo == null) {
                this.openAlertDialog();
              } else {
                this.selectedIndex = nextIndex;
              }
            } else {
              this.selectedIndex = nextIndex;
            }
          }
        } // getPosts(value) {
        //   this.listingSeller.CurrentAddress = value.address;
        //   this.listingSeller.CurrentTown = value.citytown;
        //   this.listingSeller.Currentstate = value.county;
        //   this.listingSeller.Currentpostcode = value.postcode;
        //   console.log(value);
        // }

      }, {
        key: "getPost",
        value: function getPost(value) {
          this.listingSeller.LookingTown = value.citytown;
          this.listingSeller.Lookingstate = value.county;
          this.listingSeller.Lookingpostcode = value.postcode;
          this.listingSeller.LookingAddress = value.address;
          console.log(value);
        }
      }, {
        key: "getSame",
        value: function getSame(listingSeller) {
          this.listingSeller.LookingTown = this.user.CurrentTown;
          this.listingSeller.Lookingstate = this.user.Currentstate;
          this.listingSeller.Lookingpostcode = this.user.Currentpostcode;
          this.listingSeller.LookingStreetname = this.user.CurrentTown;
          this.listingSeller.LookingAddress = this.user.CurrentAddress;
          console.log(listingSeller);
        }
      }, {
        key: "openAlertDialog",
        value: function openAlertDialog() {
          var dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
            data: {
              message: "HelloWorld",
              buttonText: {
                cancel: "Done"
              }
            }
          });
        }
      }, {
        key: "userDetail",
        value: function userDetail() {
          console.log(this.user);
          this.return = this.SellerformService.createUserCustomer(this.user).then(function (data) {
            console.log(data);
          });
        } //Login Form

      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this30 = this;

          this.isLoading = true;
          this.authService.FacebookAuth().then(function (data) {
            _this30.isLoading = false;
          });
        } //SignIn Google

      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this31 = this;

          this.isLoading = true;
          this.authService.GoogleAuth().then(function (data) {
            _this31.isLoading = false;
          });
        } //Signup Google

      }, {
        key: "googleSignup",
        value: function googleSignup() {
          var _this32 = this;

          this.isLoading = true;
          this.authService.GoogleAuthSignup().then(function (data) {
            _this32.isLoading = false;
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, pass) {
          var _this33 = this;

          console.log(email + pass);
          this.isLoading = true;
          this.authService.SignIn(email, pass).then(function (data) {
            _this33.isLoading = false;
          });
        }
      }, {
        key: "NewUser",
        value: function NewUser() {
          this.newUser = true;
        }
      }, {
        key: "OldUser",
        value: function OldUser() {
          this.newUser = false;
        }
      }, {
        key: "close",
        value: function close() {
          this.newUser = false;
          this.newUser = false;
        }
      }, {
        key: "signUp",
        value: function signUp(displayName, email, pass) {
          var _this34 = this;

          console.log(displayName);
          this.overlay = true;
          this.authService.SignUp(email, pass).then(function (data) {
            _this34.isLoading = false;
            _this34.user.Name = displayName;
            _this34.user.DOB = null;
            _this34.user.Phone = null;
            _this34.return = _this34.fillFormsService.createUserCustomer(_this34.user).then(function (data) {
              console.log(data);
            });
          });
        }
      }, {
        key: "userNew",
        value: function userNew() {
          this.user.DOB = null;
          this.user.Phone = null;
          this.user.name;
          this.return = this.fillFormsService.createUserCustomer(this.user).then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "continueClose",
        value: function continueClose() {
          this.overlay = false;
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {
          if (event.keyCode == 13) {
            this.signUp(this.name, this.email, this.password);
          }
        }
      }, {
        key: "saves",
        value: function saves() {
          this.signIn(this.emails, this.passs);
        }
      }]);

      return FillFormSellerComponent;
    }();

    FillFormSellerComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_9__["StateServiceService"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_16__["SellerformService"]
      }, {
        type: _fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_17__["FormsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    FillFormSellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-fillFormSeller",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fillFormSeller.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html")).default,
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useClass: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__["AppDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
        useValue: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__["APP_DATE_FORMATS"]
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fillFormSeller.component.css */
      "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css")).default]
    })], FillFormSellerComponent);
    /***/
  },

  /***/
  "./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts ***!
    \************************************************************************/

  /*! exports provided: SellerformService */

  /***/
  function srcAppHomePropertyFillFormSellerFillFormSellerServiceTs(module, __webpack_exports__, __webpack_require__) {
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
        this.dbPath = "listingSeller";
        this.selleruserdbPath = "user";
        this.customersRef = null;
        this.dbnotification = "notification";
        this.notificationref = null;
        this.customersRef = db.collection(this.dbPath);
        this.userCollection = db.collection("users");
        this.userDetail = db.collectionGroup("${user.uid}"); //Notification DB

        this.notificationref = db.collection(this.dbnotification);
      } //Create Customer Notification


      _createClass(SellerformService, [{
        key: "notificationCustomer",
        value: function notificationCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.notificationref.doc(key).collection("seller").add(Object.assign({}, customer)).then(function (data) {
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
        key: "createUserCustomer",
        value: function createUserCustomer(user) {
          var userRef = this.db.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            Name: user.Name,
            DOB: user.DOB,
            Phone: user.Phone,
            title: user.title = "Mr",
            Currentpostcode: user.Currentpostcode,
            Currentaddress: user.CurrentAddress,
            CurrentTowncity: user.CurrentTown,
            Currentstate: user.Currentstate
          };
          return userRef.set(userData, {
            merge: true
          });
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.userCollection.get();
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
  "./src/app/Home/agent-signup/agent-signup.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/Home/agent-signup/agent-signup.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAgentSignupAgentSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".agent-signup-background\r\n{\r\n    background-image: url('rightbuilding.jpg');\r\n    height: 50vh;\r\n    width: 100%;\r\n    background-position: center;\r\n\r\n}\r\n\r\n.dark-button\r\n{\r\n    background-color: var( --DARK-BLUE-COLOR);\r\n    padding: 0.7em;\r\n    color: white;\r\n    width: 35%;\r\n    text-align: center;\r\n    margin: 1em;\r\n    margin-bottom: 0.5em;\r\n\r\n}\r\n\r\n.Light-button\r\n{\r\n    background-color: var( --light-blue-color);\r\n    padding: 0.7em;\r\n    color: white;\r\n    width: 35%;\r\n    text-align: center;\r\n    margin: 1em;\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.extra-buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 50vh;\r\n    justify-content: flex-end;\r\n    margin: 0em;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9hZ2VudC1zaWdudXAvYWdlbnQtc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMENBQWlFO0lBQ2pFLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCOztBQUUvQjs7QUFFQTs7SUFFSSx5Q0FBeUM7SUFDekMsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7O0FBRXhCOztBQUVBOztJQUVJLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9hZ2VudC1zaWdudXAvYWdlbnQtc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnQtc2lnbnVwLWJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSW1hZ2VzL3JpZ2h0YnVpbGRpbmcuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5kYXJrLWJ1dHRvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tREFSSy1CTFVFLUNPTE9SKTtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcblxyXG59XHJcblxyXG4uTGlnaHQtYnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1saWdodC1ibHVlLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDAuN2VtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuLmV4dHJhLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Home/agent-signup/agent-signup.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Home/agent-signup/agent-signup.component.ts ***!
    \*************************************************************/

  /*! exports provided: AgentSignupComponent */

  /***/
  function srcAppHomeAgentSignupAgentSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentSignupComponent", function () {
      return AgentSignupComponent;
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


    var _agentSignup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./agentSignup.service */
    "./src/app/Home/agent-signup/agentSignup.service.ts");
    /* harmony import */


    var _Model_agentSignup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Model/agentSignup */
    "./src/app/Model/agentSignup.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../Property/fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");

    var AgentSignupComponent =
    /*#__PURE__*/
    function () {
      function AgentSignupComponent(AgentSignupServicee, authService, afAuth, stateService, formsService) {
        _classCallCheck(this, AgentSignupComponent);

        this.AgentSignupServicee = AgentSignupServicee;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.formsService = formsService;
        this.Postcodes = [{
          Postcode: ''
        }];
        this.isAgentSelected = false;
        this.agentSignup = new _Model_agentSignup__WEBPACK_IMPORTED_MODULE_3__["agentSignup"]();
        this.isLoggedIn = true;
      }

      _createClass(AgentSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this35.userData = user;
              localStorage.setItem("user", JSON.stringify(_this35.userData));

              _this35.LoggedIn();
            } else {
              localStorage.setItem("user", null);

              _this35.LoggedOut();
            }
          });
        }
      }, {
        key: "addPostcodes",
        value: function addPostcodes() {
          this.Postcodes.push({
            Postcode: ""
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this36 = this;

          this.stateService.agentSignup = this.agentSignup;
          this.isAgentSelected = true;
          this.return = this.AgentSignupServicee.createAgentCustomer(this.userData.uid, this.agentSignup).then(function (data) {
            if (data == true) {
              _this36.isAgentSelected = false;
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
        key: "logValue",
        value: function logValue() {
          console.log(this.Postcodes);
        }
      }]);

      return AgentSignupComponent;
    }();

    AgentSignupComponent.ctorParameters = function () {
      return [{
        type: _agentSignup_service__WEBPACK_IMPORTED_MODULE_2__["AgentSignupService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"]
      }, {
        type: _Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_7__["FormsService"]
      }];
    };

    AgentSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agent-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agent-signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agent-signup.component.css */
      "./src/app/Home/agent-signup/agent-signup.component.css")).default]
    })], AgentSignupComponent);
    /***/
  },

  /***/
  "./src/app/Home/agent-signup/agentSignup.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Home/agent-signup/agentSignup.service.ts ***!
    \**********************************************************/

  /*! exports provided: AgentSignupService */

  /***/
  function srcAppHomeAgentSignupAgentSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentSignupService", function () {
      return AgentSignupService;
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

    var AgentSignupService =
    /*#__PURE__*/
    function () {
      function AgentSignupService(db) {
        _classCallCheck(this, AgentSignupService);

        this.db = db;
        this.dbPath = "agentSignup";
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customersRef = null; // Collection Group

        this.customersRef = db.collection(this.dbPath);
      }

      _createClass(AgentSignupService, [{
        key: "createAgentCustomer",
        value: function createAgentCustomer(key, customer) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.customersRef.doc(key).collection("agents").add(Object.assign({}, customer)).then(function (data) {
                      console.log("Agents Written Successfully");
                    });

                  case 2:
                    this.return = _context9.sent;
                    return _context9.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return AgentSignupService;
    }();

    AgentSignupService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    AgentSignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AgentSignupService);
    /***/
  },

  /***/
  "./src/app/Home/agentsignupform/agentsignupform.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/Home/agentsignupform/agentsignupform.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAgentsignupformAgentsignupformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width\r\n{\r\n    width: 100%;\r\n}\r\ninput#fileToUpload {\r\n    width: 34%;\r\n}\r\n.file-upload {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.mat-card-item {\r\n\r\n    background-color:var(--DARK-BLUE-COLOR) ; \r\n    margin: 1em;\r\n}\r\n.heading-signup\r\n{\r\n    color: white;\r\n\r\n}\r\n.submit-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 1em 0em;\r\n}\r\n.agent-form-heading.heading-nestimate {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 1em;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9hZ2VudHNpZ251cGZvcm0vYWdlbnRzaWdudXBmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSx3Q0FBd0M7SUFDeEMsV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL2FnZW50c2lnbnVwZm9ybS9hZ2VudHNpZ251cGZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0I2ZpbGVUb1VwbG9hZCB7XHJcbiAgICB3aWR0aDogMzQlO1xyXG59XHJcbi5maWxlLXVwbG9hZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tYXQtY2FyZC1pdGVtIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLURBUkstQkxVRS1DT0xPUikgOyBcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi5oZWFkaW5nLXNpZ251cFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDBlbTtcclxufVxyXG4uYWdlbnQtZm9ybS1oZWFkaW5nLmhlYWRpbmctbmVzdGltYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/Home/agentsignupform/agentsignupform.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Home/agentsignupform/agentsignupform.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AgentsignupformComponent */

  /***/
  function srcAppHomeAgentsignupformAgentsignupformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentsignupformComponent", function () {
      return AgentsignupformComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");

    var AgentsignupformComponent =
    /*#__PURE__*/
    function () {
      function AgentsignupformComponent(authService, afAuth) {
        _classCallCheck(this, AgentsignupformComponent);

        this.authService = authService;
        this.afAuth = afAuth;
        this.loggedIn = false;
      }

      _createClass(AgentsignupformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this37.userData = user;
              localStorage.setItem("user", JSON.stringify(_this37.userData));

              _this37.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this37.LoggedOut();
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.loggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.loggedIn = false;
        }
      }]);

      return AgentsignupformComponent;
    }();

    AgentsignupformComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    AgentsignupformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agentsignupform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agentsignupform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agentsignupform/agentsignupform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agentsignupform.component.css */
      "./src/app/Home/agentsignupform/agentsignupform.component.css")).default]
    })], AgentsignupformComponent);
    /***/
  },

  /***/
  "./src/app/Menu/Chats/chats.component.css":
  /*!************************************************!*\
    !*** ./src/app/Menu/Chats/chats.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuChatsChatsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chats-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.chat-container\r\n{\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n\r\n}\r\n.chat-p {\r\n    margin-right: 50px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.user-class {\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9DaGF0cy9jaGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCO0FBQ0E7O0lBRUksb0NBQW9DOztJQUVwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvTWVudS9DaGF0cy9jaGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRzLW1haW4tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4uY2hhdC1jb250YWluZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG59XHJcbi5jaGF0LXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udXNlci1jbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Menu/Chats/chats.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/Menu/Chats/chats.component.ts ***!
    \***********************************************/

  /*! exports provided: ChatsComponent */

  /***/
  function srcAppMenuChatsChatsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chats.component.css */
      "./src/app/Menu/Chats/chats.component.css")).default]
    })], ChatsComponent);
    /***/
  },

  /***/
  "./src/app/Menu/Prefrences/Prefrences.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/Menu/Prefrences/Prefrences.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPrefrencesPrefrencesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".prefrences-main-div\r\n{\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.prefrence-notification\r\n{\r\n    background-color: white;\r\n    padding: 5px;\r\n}\r\n.prefrence-radio {\r\n    margin: 20px;\r\n}\r\n.notification-heading {\r\n    padding-top: 10px;\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n}\r\n.radio-text\r\n{\r\n    font-family: 'Roboto', sans-serif !important;\r\n    font-weight: 400;\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9QcmVmcmVuY2VzL1ByZWZyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksb0NBQW9DOztJQUVwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvTWVudS9QcmVmcmVuY2VzL1ByZWZyZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVmcmVuY2VzLW1haW4tZGl2XHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcbi5wcmVmcmVuY2Utbm90aWZpY2F0aW9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5wcmVmcmVuY2UtcmFkaW8ge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24taGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnJhZGlvLXRleHRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Menu/Prefrences/Prefrences.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Menu/Prefrences/Prefrences.component.ts ***!
    \*********************************************************/

  /*! exports provided: PrefrencesComponent */

  /***/
  function srcAppMenuPrefrencesPrefrencesComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      selector: 'app-Prefrences',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Prefrences.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Prefrences.component.css */
      "./src/app/Menu/Prefrences/Prefrences.component.css")).default]
    })], PrefrencesComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myListings/myListing.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/Menu/myListings/myListing.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyListingsMyListingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-requirement-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.my-requirement-one\r\n{\r\n    background-color: white;\r\n \r\n}\r\n.my-requirement-heading\r\n{\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n.area-p\r\n{\r\n    font-size:20px;\r\n    text-align: center;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 12px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.my-requirement-one {\r\n    text-align: center;\r\n}\r\n.mat-tab-label\r\n{\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    opacity: .6;\r\n    min-width: 160px;\r\n    text-align: center;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    width: 100% !important;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 10px;\r\n    text-align: justify;\r\n}\r\n.match-images\r\n{\r\n    height: 19vh;\r\n}\r\n.mat-card-content-new-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nspan.outputText.price-font {\r\n    font-size: 1.8em;\r\n}\r\n.other-text {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nspan.heading-nestimate.card-heading-font {\r\n    text-align: left;\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n.mat-card-content-new {\r\n    margin-top: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teUxpc3RpbmdzL215TGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSx1QkFBdUI7O0FBRTNCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9NZW51L215TGlzdGluZ3MvbXlMaXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcmVxdWlyZW1lbnQtY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi5teS1yZXF1aXJlbWVudC1vbmVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBcclxufVxyXG4ubXktcmVxdWlyZW1lbnQtaGVhZGluZ1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGlzY3JpcHRpb24tcFxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LXJlcXVpcmVtZW50LW9uZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsXHJcbntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmRpdiNkZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ubWF0Y2gtaW1hZ2VzXHJcbntcclxuICAgIGhlaWdodDogMTl2aDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQtbmV3LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5vdXRwdXRUZXh0LnByaWNlLWZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG4ub3RoZXItdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5oZWFkaW5nLW5lc3RpbWF0ZS5jYXJkLWhlYWRpbmctZm9udCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLWNvbnRlbnQtbmV3IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Menu/myListings/myListing.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Menu/myListings/myListing.component.ts ***!
    \********************************************************/

  /*! exports provided: MyListingComponent */

  /***/
  function srcAppMenuMyListingsMyListingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyListingComponent", function () {
      return MyListingComponent;
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


    var _myListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myListing.service */
    "./src/app/Menu/myListings/myListing.service.ts");

    var MyListingComponent =
    /*#__PURE__*/
    function () {
      function MyListingComponent(myrequirement_service) {
        _classCallCheck(this, MyListingComponent);

        this.myrequirement_service = myrequirement_service;
        this.propertyDetails = [];
        this.propertyRequirementDetails = [];
      }

      _createClass(MyListingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          // User ID
          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details

          this.myrequirement_service.getBuyerRequirement(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this38.propertyRequirementDetails.push(element.data());
            });
          });
          this.myrequirement_service.getSellerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this38.propertyDetails.push(element.data());

              console.log(_this38.propertyDetails);
            });
          });
        }
      }]);

      return MyListingComponent;
    }();

    MyListingComponent.ctorParameters = function () {
      return [{
        type: _myListing_service__WEBPACK_IMPORTED_MODULE_2__["MyListingService"]
      }];
    };

    MyListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-myListing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myListing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myListing.component.css */
      "./src/app/Menu/myListings/myListing.component.css")).default]
    })], MyListingComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myListings/myListing.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/Menu/myListings/myListing.service.ts ***!
    \******************************************************/

  /*! exports provided: MyListingService */

  /***/
  function srcAppMenuMyListingsMyListingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyListingService", function () {
      return MyListingService;
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

    var MyListingService =
    /*#__PURE__*/
    function () {
      function MyListingService(db) {
        _classCallCheck(this, MyListingService);

        this.db = db;
        this.customersRef = db.collection("listingBuyer");
        this.SellerRef = db.collection("listingSeller");
      }

      _createClass(MyListingService, [{
        key: "getBuyerRequirement",
        value: function getBuyerRequirement(uid) {
          return this.customersRef.doc(uid).collection("requirements").ref.get();
        }
      }, {
        key: "getSellerProperties",
        value: function getSellerProperties(uid) {
          return this.SellerRef.doc(uid).collection("properties").ref.get();
        }
      }]);

      return MyListingService;
    }();

    MyListingService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MyListingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MyListingService);
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyMatchesMyMatchesSelectedDetailsMyMatchesSelectedDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.property-selected-detail-background\r\n{\r\n    background-image: url('/assets/Images/selectedPropertybackgroung.jpg');\r\n    background-position: center;\r\n    background-size: contain;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding: 1em;\r\n}\r\n.streetname {\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{   \r\n    font-size: 17px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.details-output-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\n.continue-form {\r\n    background-color: var(--light-blue-color);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0vh;\r\n    position: fixed;\r\n    bottom: 0px;\r\n  }\r\n.nestimate-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\nimg.nestimate-logo {\r\n    height: 22vh;\r\n    }\r\n.overlay-text{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.overlay-text-third{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.continue-text {\r\n    margin: 2em;\r\n    font-size: 17px;\r\n    text-align: left;\r\n  }\r\n.continue-button-container\r\n  {\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n    font-size: 18px;\r\n  }\r\n.continue-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    border: 3px solid white;\r\n    margin: 0vh 15vw;\r\n    padding: 0.6em\r\n  }\r\n.continue-form-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy1zZWxlY3RlZC1kZXRhaWxzL215LW1hdGNoZXMtc2VsZWN0ZWQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksc0VBQXNFO0lBQ3RFLDJCQUEyQjtJQUMzQix3QkFBd0I7QUFDNUI7QUFFQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOzs7SUFHN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFFVCxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFlBQVk7SUFDWjtBQUNGO0lBQ0UsWUFBWTtJQUNaLDRCQUE0QjtFQUM5QjtBQUVBO0lBQ0UsWUFBWTtJQUNaLDRCQUE0QjtFQUM5QjtBQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDQTs7SUFFRSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQjtFQUNGO0FBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy1zZWxlY3RlZC1kZXRhaWxzL215LW1hdGNoZXMtc2VsZWN0ZWQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi5wcm9wZXJ0eS1zZWxlY3RlZC1kZXRhaWwtYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSW1hZ2VzL3NlbGVjdGVkUHJvcGVydHliYWNrZ3JvdW5nLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ud3JhcHBlci1kZXRhaWwtY29udGFpbmVyXHJcbntcclxuICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uc3RyZWV0bmFtZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uZGV0YWlscy1wLWhlYWRpbmdzXHJcbnsgICBcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kZXRhaWxzLW91dHB1dC1wXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uYnV0dG9uLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIFxyXG4gIFxyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idXR0b24tYXNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuLnNlbGVjdGVkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYjZGVtbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1nLm1hdGNoLWltYWdlcyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uTWF0LWNhcmQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHhcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5jb250aW51ZS1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtY29sb3IpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRvcDogMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5uZXN0aW1hdGUtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZy5uZXN0aW1hdGUtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIydmg7XHJcbiAgICB9XHJcbiAgLm92ZXJsYXktdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5LXRleHQtdGhpcmR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG4gIH1cclxuICAuY29udGludWUtdGV4dCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5jb250aW51ZS1idXR0b24tY29udGFpbmVyXHJcbiAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDB2aCAxNXZ3O1xyXG4gICAgcGFkZGluZzogMC42ZW1cclxuICB9XHJcbiAgLmNvbnRpbnVlLWZvcm0tZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: MyMatchesSelectedDetailsComponent */

  /***/
  function srcAppMenuMyMatchesMyMatchesSelectedDetailsMyMatchesSelectedDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMatchesSelectedDetailsComponent", function () {
      return MyMatchesSelectedDetailsComponent;
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

    var MyMatchesSelectedDetailsComponent =
    /*#__PURE__*/
    function () {
      function MyMatchesSelectedDetailsComponent(_Activatedroute, _router) {
        _classCallCheck(this, MyMatchesSelectedDetailsComponent);

        this._Activatedroute = _Activatedroute;
        this._router = _router;
      }

      _createClass(MyMatchesSelectedDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this39.Lookingpostcode = params.get("Lookingpostcode");
            _this39.Lookingstate = params.get("Lookingstate");
            _this39.LookingAddress = params.get("LookingAddress");
            _this39.norooms = params.get("Roomsmax");
            _this39.PropertyCondition = params.get("PropertyCondition");
            _this39.MaxAmount = params.get("MaxAmount");
            _this39.PropertyType = params.get("PropertyType");
            _this39.ownership = params.get("ownership");
            _this39.features = params.get("features");
            _this39.matchStatus = params.get("matchStatus");
          });
        }
      }]);

      return MyMatchesSelectedDetailsComponent;
    }();

    MyMatchesSelectedDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyMatchesSelectedDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-matches-selected-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-matches-selected-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-matches-selected-details.component.css */
      "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css")).default]
    })], MyMatchesSelectedDetailsComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyMatchesMyMatchesToSellSelectedDetailMyMatchesToSellSelectedDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.property-selected-detail-background\r\n{\r\n    background-image: url('/assets/Images/selectedPropertybackgroung.jpg');\r\n    background-position: center;\r\n    background-size: contain;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding: 1em;\r\n}\r\n.streetname {\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{   \r\n    font-size: 17px;\r\n    margin-bottom: 0px !important;\r\n}\r\n.details-output-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\n.continue-form {\r\n    background-color: var(--light-blue-color);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0vh;\r\n    position: fixed;\r\n    bottom: 0px;\r\n  }\r\n.nestimate-logo {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\nimg.nestimate-logo {\r\n    height: 22vh;\r\n    }\r\n.overlay-text{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.overlay-text-third{\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n  }\r\n.continue-text {\r\n    margin: 2em;\r\n    font-size: 17px;\r\n    text-align: left;\r\n  }\r\n.continue-button-container\r\n  {\r\n    color: white;\r\n    font-family: 'Roboto-Medium';\r\n    font-size: 18px;\r\n  }\r\n.continue-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    border: 3px solid white;\r\n    margin: 0vh 15vw;\r\n    padding: 0.6em\r\n  }\r\n.continue-form-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy10by1zZWxsLXNlbGVjdGVkLWRldGFpbC9teS1tYXRjaGVzLXRvLXNlbGwtc2VsZWN0ZWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxzRUFBc0U7SUFDdEUsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUVBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7OztJQUc3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUVULGFBQWE7SUFFYix1QkFBdUI7SUFFdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBQ0E7SUFDRSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNBO0lBQ0UsWUFBWTtJQUNaO0FBQ0Y7SUFDRSxZQUFZO0lBQ1osNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSxZQUFZO0lBQ1osNEJBQTRCO0VBQzlCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBOztJQUVFLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCO0VBQ0Y7QUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9NZW51L215TWF0Y2hlcy9teS1tYXRjaGVzLXRvLXNlbGwtc2VsZWN0ZWQtZGV0YWlsL215LW1hdGNoZXMtdG8tc2VsbC1zZWxlY3RlZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1kZXRhaWwtY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcclxufVxyXG4ucHJvcGVydHktc2VsZWN0ZWQtZGV0YWlsLWJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL0ltYWdlcy9zZWxlY3RlZFByb3BlcnR5YmFja2dyb3VuZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLndyYXBwZXItZGV0YWlsLWNvbnRhaW5lclxyXG57XHJcbiAgIFxyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLnByb3BlcnR5LWRldGFpbC1oM1xyXG57XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuLnN0cmVldG5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmRldGFpbHMtcC1oZWFkaW5nc1xyXG57ICAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZGV0YWlscy1vdXRwdXQtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBcclxuICBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG4tY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnV0dG9uLWFza1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5zZWxlY3RlZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2I2RlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmltZy5tYXRjaC1pbWFnZXMge1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLk1hdC1jYXJkLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAxMHB4XHJcbn1cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuY29udGludWUtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0b3A6IDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAubmVzdGltYXRlLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBpbWcubmVzdGltYXRlLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiAyMnZoO1xyXG4gICAgfVxyXG4gIC5vdmVybGF5LXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheS10ZXh0LXRoaXJke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxuICB9XHJcbiAgLmNvbnRpbnVlLXRleHQge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuY29udGludWUtYnV0dG9uLWNvbnRhaW5lclxyXG4gIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLU1lZGl1bSc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5jb250aW51ZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwdmggMTV2dztcclxuICAgIHBhZGRpbmc6IDAuNmVtXHJcbiAgfVxyXG4gIC5jb250aW51ZS1mb3JtLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: MyMatchesToSellSelectedDetailComponent */

  /***/
  function srcAppMenuMyMatchesMyMatchesToSellSelectedDetailMyMatchesToSellSelectedDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMatchesToSellSelectedDetailComponent", function () {
      return MyMatchesToSellSelectedDetailComponent;
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

    var MyMatchesToSellSelectedDetailComponent =
    /*#__PURE__*/
    function () {
      function MyMatchesToSellSelectedDetailComponent(_Activatedroute, _router) {
        _classCallCheck(this, MyMatchesToSellSelectedDetailComponent);

        this._Activatedroute = _Activatedroute;
        this._router = _router;
      }

      _createClass(MyMatchesToSellSelectedDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this40.Lookingpostcode = params.get("Lookingpostcode");
            _this40.ChainStatus = params.get("ChainStatus");
            _this40.FinancialPosition = params.get("FinancialPosition");
            _this40.Type = params.get("Type");
            _this40.Position = params.get("Position");
            _this40.SearchRadius = params.get("SearchRadius");
            _this40.PriceRange = params.get("PriceRange");
            _this40.matchStatus = params.get("matchStatus");
          });
        }
      }]);

      return MyMatchesToSellSelectedDetailComponent;
    }();

    MyMatchesToSellSelectedDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyMatchesToSellSelectedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-my-matches-to-sell-selected-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-matches-to-sell-selected-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-matches-to-sell-selected-detail.component.css */
      "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css")).default]
    })], MyMatchesToSellSelectedDetailComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/myMatches.component.css":
  /*!********************************************************!*\
    !*** ./src/app/Menu/myMatches/myMatches.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyMatchesMyMatchesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n}\r\n.font-headings\r\n{\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-size: 24px;\r\n}\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 0rem;\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n    align-items: center !important;\r\n}\r\n.mat-card-title {\r\n    font-size: 20px;\r\n    margin: 20px;\r\n}\r\n.mat-card-matches{\r\n    width: 100%;\r\n}\r\n.mat-card-title:not(:first-child)\r\n{\r\n    margin-top: 20px !important;\r\n}\r\n.mat-tab-label\r\n{\r\n    background-color: white !important;\r\n}\r\n.match-images\r\n{\r\n    height: 16vh;\r\n}\r\n.nestimate-heading {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 11px;\r\n}\r\n.mat-card-content-new-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nspan.heading-nestimate.card-heading-font {\r\n    text-align: left;\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n.mat-card-content-new-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.match-images { \r\n    height: 19vh;\r\n}\r\n.other-text {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nspan.outputText.price-font {\r\n    font-size: 1.8em;\r\n}\r\n.actvity-headings {\r\n    padding: 1em;\r\n    font-size: 19px;\r\n    padding-bottom: 0px\r\n}\r\n.mat-card-content-new {\r\n    margin-top: 1em;\r\n}\r\n.example-stretched-tabs\r\n{\r\n    background-color:  var(--BAckground-dark-color);\r\n}\r\nbody\r\n{\r\n    background-color:  var(--BAckground-dark-color) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXlNYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFHQTs7OEdBRThHO0FBQzlHOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQVdBOztJQUVJLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDO0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksa0NBQWtDO0FBQ3RDO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksK0NBQStDO0FBQ25EO0FBQ0E7O0lBRUksMERBQTBEO0FBQzlEIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXlNYXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5mb250LWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYWluLWhlYWRpbmdcclxue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5tYXQtY2FyZC1tYXRjaGVzXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLW1hdGNoZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWNhcmQtdGl0bGU6bm90KDpmaXJzdC1jaGlsZClcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtdGFiLWxhYmVsXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdGNoLWltYWdlc1xyXG57XHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbn1cclxuLm5lc3RpbWF0ZS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTFweDtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudC1uZXctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zcGFuLmhlYWRpbmctbmVzdGltYXRlLmNhcmQtaGVhZGluZy1mb250IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudC1uZXctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0Y2gtaW1hZ2VzIHsgXHJcbiAgICBoZWlnaHQ6IDE5dmg7XHJcbn1cclxuLm90aGVyLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5vdXRwdXRUZXh0LnByaWNlLWZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG4uYWN0dml0eS1oZWFkaW5ncyB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4XHJcbn1cclxuLm1hdC1jYXJkLWNvbnRlbnQtbmV3IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4uZXhhbXBsZS1zdHJldGNoZWQtdGFic1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdmFyKC0tQkFja2dyb3VuZC1kYXJrLWNvbG9yKTtcclxufVxyXG5ib2R5XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1CQWNrZ3JvdW5kLWRhcmstY29sb3IpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/myMatches.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Menu/myMatches/myMatches.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyMatchesComponent */

  /***/
  function srcAppMenuMyMatchesMyMatchesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMatchesComponent", function () {
      return MyMatchesComponent;
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


    var _myMatches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myMatches.service */
    "./src/app/Menu/myMatches/myMatches.service.ts");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MyMatchesComponent =
    /*#__PURE__*/
    function () {
      function MyMatchesComponent(MatchesService, stateService, _Activatedroute, _router) {
        _classCallCheck(this, MyMatchesComponent);

        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.propertyDetails = [];
        this.propertyBuyer = [];
        this.buyerProperty = [];
        this.sellerProperty = [];
      }

      _createClass(MyMatchesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid; // Fetch details Seller

          this.MatchesService.getMatchesSellerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this41.sellerProperty.push(element.data());
            });
          }); // Fetch details Seller

          this.MatchesService.getMatchesBuyerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              _this41.buyerProperty.push(element.data());
            });
          });
        }
      }]);

      return MyMatchesComponent;
    }();

    MyMatchesComponent.ctorParameters = function () {
      return [{
        type: _myMatches_service__WEBPACK_IMPORTED_MODULE_2__["MyMatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    MyMatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-myMatches",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myMatches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myMatches.component.css */
      "./src/app/Menu/myMatches/myMatches.component.css")).default]
    })], MyMatchesComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/myMatches.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Menu/myMatches/myMatches.service.ts ***!
    \*****************************************************/

  /*! exports provided: MyMatchesService */

  /***/
  function srcAppMenuMyMatchesMyMatchesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMatchesService", function () {
      return MyMatchesService;
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

    var MyMatchesService =
    /*#__PURE__*/
    function () {
      function MyMatchesService(db) {
        _classCallCheck(this, MyMatchesService);

        this.db = db;
      }

      _createClass(MyMatchesService, [{
        key: "getMatchesSellerProperties",
        value: function getMatchesSellerProperties(uid) {
          return this.db.collection("matchesBuyer").doc(uid).collection("matches").ref.get();
        }
      }, {
        key: "getMatchesBuyerProperties",
        value: function getMatchesBuyerProperties(uid) {
          return this.db.collection("matchesSeller").doc(uid).collection("matches").ref.get();
        }
      }]);

      return MyMatchesService;
    }();

    MyMatchesService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    MyMatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MyMatchesService);
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/select-agent/select-agent.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/Menu/myMatches/select-agent/select-agent.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyMatchesSelectAgentSelectAgentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-agent-selection {\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n.note-agent-selection {\r\n    font-size: 17px;\r\n    text-align: justify;\r\n    margin-bottom: 2em;\r\n}\r\n/* .agent-selection-radiobutton-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n} */\r\n.agent-selection-name {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.agent-selection-commision {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    padding: 1em;\r\n}\r\n.agent-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.button-card{\r\n    display: flex;\r\n    justify-content: ali;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mandatory {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    text-align: justify;\r\n    font-size: 12px;\r\n}\r\n.mandatory-slide {\r\n    margin-left: 5px;\r\n}\r\nimg.agent-image {\r\n    width: 95%;\r\n}\r\n.agent-selction.buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    padding-bottom: 1em;\r\n}\r\n.agent-address-section {\r\n    margin: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvc2VsZWN0LWFnZW50L3NlbGVjdC1hZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7OztHQUdHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teU1hdGNoZXMvc2VsZWN0LWFnZW50L3NlbGVjdC1hZ2VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWFnZW50LXNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm5vdGUtYWdlbnQtc2VsZWN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuLyogLmFnZW50LXNlbGVjdGlvbi1yYWRpb2J1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufSAqL1xyXG4uYWdlbnQtc2VsZWN0aW9uLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmFnZW50LXNlbGVjdGlvbi1jb21taXNpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5hZ2VudC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uLWNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBhbGk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1hbmRhdG9yeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tYW5kYXRvcnktc2xpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5pbWcuYWdlbnQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4uYWdlbnQtc2VsY3Rpb24uYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG4uYWdlbnQtYWRkcmVzcy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Menu/myMatches/select-agent/select-agent.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Menu/myMatches/select-agent/select-agent.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectAgentComponent */

  /***/
  function srcAppMenuMyMatchesSelectAgentSelectAgentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectAgentComponent", function () {
      return SelectAgentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectAgentComponent =
    /*#__PURE__*/
    function () {
      function SelectAgentComponent() {
        _classCallCheck(this, SelectAgentComponent);
      }

      _createClass(SelectAgentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectAgentComponent;
    }();

    SelectAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-agent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-agent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/select-agent/select-agent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-agent.component.css */
      "./src/app/Menu/myMatches/select-agent/select-agent.component.css")).default]
    })], SelectAgentComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myProfile/Profile.component.css":
  /*!******************************************************!*\
    !*** ./src/app/Menu/myProfile/Profile.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-main-container {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n  background-color: #EBEBEB;\r\n  padding-bottom: 60px;\r\n  margin: 0;\r\n}\r\n\r\n.Profile-pic {\r\n  width: 25%;\r\n\r\n}\r\n\r\np.profile-heading {\r\n  /* text-align: center; */\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  align-items: center;\r\n  font-size: 27px;\r\n  padding-top: 7px;\r\n}\r\n\r\n.profile-name-image {\r\n  display: flex;\r\n  /* justify-content: space-evenly; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.profile-name {\r\n  font-size: 25px;\r\n   \r\n\r\n}\r\n\r\n.profile-name-field-option {\r\n  background-color: white;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.grid-container {\r\n  display: flex;\r\n  margin: 1em 0px;\r\n  flex-direction: column;\r\n  margin: 1em 0px;\r\n\r\n}\r\n\r\n.fname-text1 {\r\n  font-size: 20px;\r\n   \r\n\r\n}\r\n\r\n.fname-text2 {\r\n  font-size: 17px;\r\n   \r\n\r\n}\r\n\r\n.fname-text3 {\r\n  font-size: 15px;\r\n   \r\n\r\n}\r\n\r\n.prefrences-main-div\r\n{\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n\r\n.prefrence-notification\r\n{\r\n    background-color: white;\r\n    padding: 5px;\r\n}\r\n\r\n.prefrence-radio {\r\n    margin: 20px;\r\n}\r\n\r\n.notification-heading {\r\n    padding-top: 10px;\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n}\r\n\r\n.radio-text\r\n{\r\n    font-family: 'Roboto', sans-serif !important;\r\n    font-weight: 400;\r\n    color:black;\r\n}\r\n\r\np{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.profile-output {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teVByb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTs7O0FBR2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxlQUFlOzs7QUFHakI7O0FBRUE7RUFDRSxlQUFlOzs7QUFHakI7O0FBRUE7RUFDRSxlQUFlOzs7QUFHakI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBOztJQUVJLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teVByb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLlByb2ZpbGUtcGljIHtcclxuICB3aWR0aDogMjUlO1xyXG5cclxufVxyXG5cclxucC5wcm9maWxlLWhlYWRpbmcge1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lLWltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZS1maWVsZC1vcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxZW0gMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxZW0gMHB4O1xyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQxIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQyIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLmZuYW1lLXRleHQzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgIFxyXG5cclxufVxyXG4ucHJlZnJlbmNlcy1tYWluLWRpdlxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4ucHJlZnJlbmNlLW5vdGlmaWNhdGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ucHJlZnJlbmNlLXJhZGlvIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ubm90aWZpY2F0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5yYWRpby10ZXh0XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbnB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5wcm9maWxlLW91dHB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Menu/myProfile/Profile.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Menu/myProfile/Profile.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppMenuMyProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
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


    var _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Home/Property/fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../http.service */
    "./src/app/http.service.ts");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent(fillFormsService, HttpService) {
        _classCallCheck(this, MyProfileComponent);

        this.fillFormsService = fillFormsService;
        this.HttpService = HttpService;
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.fillFormsService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this42.uid) {
                _this42.user.Name = element.data().Name;
                _this42.user.Email = element.data().email;
                _this42.user.Phone = element.data().Phone;
                _this42.user.DOB = element.data().DOB.toDate();
                _this42.user.Phone = element.data().Phone;
                _this42.user.Address = element.data().Currentaddress;
                console.log(element.data().Name);
              }
            });
          });
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ctorParameters = function () {
      return [{
        type: _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]
      }, {
        type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MyProfileComponent.prototype, "listingBuyer", void 0);
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Profile.component.css */
      "./src/app/Menu/myProfile/Profile.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./../../common.css */
      "./src/app/common.css")).default]
    })], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/Menu/myProfile/editProfile/editProfile.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/Menu/myProfile/editProfile/editProfile.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMyProfileEditProfileEditProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    background-color: #EBEBEB;\r\npadding-bottom: 60px;\r\n    margin: 0;\r\n}\r\n.Profile-pic {\r\n    width: 25%;\r\n \r\n}\r\np.profile-heading {\r\n    /* text-align: center; */\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    font-size: 27px;\r\n    padding-top: 7px;\r\n}\r\n.profile-name-image {\r\n    display: flex;\r\n    /* justify-content: space-evenly; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.profile-name {\r\n    font-size: 25px;\r\n   \r\n\r\n}\r\n.profile-name-field-option\r\n{\r\n    background-color: white;\r\n    padding-top: 20px;\r\n\r\n    margin-top: 30px;\r\n}\r\n.grid-container {\r\n    margin: 10px;\r\n    flex-direction: column;\r\n    align-items: end;\r\n  }\r\n.grid-container > div {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n\r\n    padding: 0px 5px;\r\n   \r\n  }\r\n.fname-text1 {\r\n    font-size: 20px;\r\n  \r\n\r\n}\r\n.fname-text2 {\r\n    font-size: 20px;\r\n   \r\n\r\n}\r\n.fname-text3 {\r\n    font-size: 15px;\r\n\r\n\r\n}\r\n.edit-profile-submitbutton {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    align-items: center;\r\n    margin-top: 25px;\r\n}\r\n.btn-back {\r\n    background-color: var(--DARK-BLUE-COLOR);\r\n    width: 31%;\r\n    color: white;\r\n    font-size: 13px;\r\n   \r\n}\r\np{\r\n    margin-bottom: 0px;\r\n}\r\n.example-full-width {\r\n    width: 100% !important;\r\n  }\r\n.prefrence-notification\r\n{\r\n    background-color: white;\r\n  \r\n}\r\n.prefrence-radio {\r\n    margin: 20px;\r\n}\r\n.notification-heading {\r\n    padding-top: 10px;\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n}\r\n.radio-text\r\n{\r\n    font-family: 'Roboto', sans-serif !important;\r\n    font-weight: 400;\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teVByb2ZpbGUvZWRpdFByb2ZpbGUvZWRpdFByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QixvQkFBb0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7OztBQUduQjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLDBDQUEwQzs7SUFFMUMsZ0JBQWdCOztFQUVsQjtBQUNBO0lBQ0UsZUFBZTs7O0FBR25CO0FBQ0E7SUFDSSxlQUFlOzs7QUFHbkI7QUFDQTtJQUNJLGVBQWU7OztBQUduQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBQ0E7O0lBRUUsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL01lbnUvbXlQcm9maWxlL2VkaXRQcm9maWxlL2VkaXRQcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbnBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5Qcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gXHJcbn1cclxucC5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgIFxyXG5cclxufVxyXG4ucHJvZmlsZS1uYW1lLWZpZWxkLW9wdGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5cclxuICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgIFxyXG4gIH1cclxuICAuZm5hbWUtdGV4dDEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIFxyXG5cclxufVxyXG4uZm5hbWUtdGV4dDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBcclxuXHJcbn1cclxuLmZuYW1lLXRleHQzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcblxyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlLXN1Ym1pdGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uYnRuLWJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tREFSSy1CTFVFLUNPTE9SKTtcclxuICAgIHdpZHRoOiAzMSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIFxyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJlZnJlbmNlLW5vdGlmaWNhdGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG4ucHJlZnJlbmNlLXJhZGlvIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ubm90aWZpY2F0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5yYWRpby10ZXh0XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Menu/myProfile/editProfile/editProfile.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Menu/myProfile/editProfile/editProfile.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppMenuMyProfileEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
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


    var _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Home/Property/fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent(fillFormsService, router) {
        _classCallCheck(this, EditProfileComponent);

        this.fillFormsService = fillFormsService;
        this.router = router;
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.fillFormsService.getUser(this.uid).subscribe(function (ref) {
            ref.forEach(function (element) {
              if (element.data().uid == _this43.uid) {
                _this43.user.Name = element.data().Name;
                _this43.user.Email = element.data().email;
                _this43.user.Phone = element.data().Phone;
                _this43.user.DOB = element.data().DOB.toDate();
                _this43.user.Address = element.data().Currentaddress;
                console.log(_this43.user.Phone);
              }
            });
          });
        }
      }, {
        key: "userDetail",
        value: function userDetail() {
          var _this44 = this;

          console.log(this.user);
          this.return = this.fillFormsService.createUserCustomer(this.user).then(function (data) {
            console.log(_this44.user);

            _this44.router.navigate(["/profile"]);
          });
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ctorParameters = function () {
      return [{
        type: _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editProfile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editProfile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editProfile.component.css */
      "./src/app/Menu/myProfile/editProfile/editProfile.component.css")).default]
    })], EditProfileComponent);
    /***/
  },

  /***/
  "./src/app/Menu/navigationBar/navigationBar.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/Menu/navigationBar/navigationBar.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuNavigationBarNavigationBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\r\n\r\n@font-face {\r\n  font-family: HelveticaNeueLight;\r\n  src: url('/assets/font/HelveticaNeueLight.ttf');\r\n}\r\n\r\n.main-navigation-bar {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 3fr 1fr 1fr\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-div {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 4em;\r\n  left: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.content {\r\n  padding: 10px;\r\n  background-color: rgb(223,223,223);\r\n}\r\n\r\nlabel {\r\n  background: none transparent;\r\n  border: 2px solid black;\r\n  border-left: 0 solid transparent;\r\n  border-right: 0 solid transparent;\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 19px;\r\n  position: absolute;\r\n  top: 19px;\r\n  left: 20px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n}\r\n\r\nlabel::before {\r\n  background: black;\r\n  content: '';\r\n  height: 2px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  /* top: 18px; */\r\n  margin-top: 6.2px;\r\n\r\n}\r\n\r\nlabel::after {\r\n  background: black;\r\n  content: '';\r\n  height: 4px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 6px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 100%;\r\n  transform: rotate(90deg);\r\n  transition: all .2s;\r\n}\r\n\r\n.menu-text {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 13px;\r\n  text-transform: uppercase;\r\n  margin-top: 2px;\r\n}\r\n\r\n.menu-text::after {\r\n  display: none;\r\n}\r\n\r\n.logo-nav {\r\n  width: 80%;\r\n}\r\n\r\n.notification {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.user-img {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-size: 38px;\r\n\r\n}\r\n\r\n.logout-icon {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.icon-size {\r\n  width: 70%;\r\n}\r\n\r\nimg.close-img {\r\n  width: 6%;\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 25px;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n  height: 2.375rem;\r\n  line-height: 2.375rem;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  color: #aaa;\r\n}\r\n\r\n.nav-links {\r\n  margin: 0;\r\n  padding: 0px;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  margin: 50px auto;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  /* padding: 10px; */\r\n  margin-left: calc(-50vw + 50%);\r\n  margin-right: calc(-50vw + 50%);\r\n  margin-top: calc(-50vw + 50%);\r\n  align-items: center;\r\n}\r\n\r\n.grid-container>div {\r\n\r\n\r\n  text-align: Left;\r\n  font-size: 18.5px;\r\n  padding: 17px;\r\n\r\n\r\n}\r\n\r\n.grid-container:hover {\r\n  background-color: #EBEBEB;\r\n  text-decoration: none;\r\n}\r\n\r\nimg.nav-link-icon {\r\n  float: right;\r\n}\r\n\r\n.nav-links-text {\r\n  color: var(--DARK-BLUE-COLOR);\r\n  font-family: 'Roboto-Bold';\r\n}\r\n\r\n.search-grid-conatiner {\r\n  display: grid;\r\n  grid-template-columns: 11fr;\r\n}\r\n\r\n.search-grid-conatiner>div {\r\n  font-size: 18.5px;\r\n  padding: 14px;\r\n  padding-top: 5px;\r\n  padding-bottom: 11px;\r\n  background-color: #FBF4EF;\r\n}\r\n\r\n.nav-link-icon-search {\r\n  width: 38px;\r\n  padding: 4px;\r\n  margin-top: -4px;\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n  height: 56.5px;\r\n}\r\n\r\ni.fa.fa-user {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\nspan.log-out-text {\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\nimg.home-menu-image {\r\n  height: 4vh;\r\n  margin: 6px;\r\n}\r\n\r\np.nitification-red {\r\n  position: absolute;\r\n  background: red;\r\n  border-radius: 50%;\r\n  top: 4vh;\r\n  right: 21vw;\r\n  height: 3vh;\r\n  width: 4vw;\r\n  text-align: center;\r\n  z-index: 1;\r\n  color: white\r\n}\r\n\r\nimg.plus-img {\r\n  width: 50%;\r\n  margin-left: 3vw;\r\n}\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n\r\nspan.red-text {\r\n  background-color: red;\r\n  width: 50%;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  color: white;\r\n}\r\n\r\n.menu-toogle,\r\n.plus-icon,\r\n.icon-size,\r\n.imge-logo-header,\r\n.notification,\r\n.logout {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal-backdrop.show {\r\n  display: none;\r\n  z-index: -1;\r\n}\r\n\r\n.nav-login {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  background: #00000061;\r\n  top: 0px;\r\n  position: fixed;\r\n}\r\n\r\n@media only screen and (min-width:768px) {\r\n  .icon-size {\r\n    width: 50% !important;\r\n  }\r\n\r\n  .logo-nav {\r\n    width: 60%;\r\n  }\r\n\r\n  .content {\r\n    padding: 0px;\r\n  }\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 36%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 36%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  border-radius: 19px;\r\n  padding: 0.5em;\r\n\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.sign-in-main {\r\n  display: block;\r\n}\r\n\r\n.user-cross {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nimg.button-cross {\r\n  position: absolute;\r\n  right: 10px;\r\n  margin: 0px 10px;\r\n  width: 16px;\r\n}\r\n\r\n.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  text-align: left;\r\n \r\n}\r\n\r\n.login-desktop-button\r\n{\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width:701px)\r\n{\r\n  .mobile-wrapper {\r\n    display: none;\r\n}\r\n.login-desktop-button\r\n{\r\n  display: block;\r\n}\r\n.login-button-main {\r\n  position: absolute;\r\n  top: 12vh;\r\n  z-index: 1000;\r\n  right: 3vw;\r\n  background-color: #00737D;\r\n    color: white;\r\n    padding: 10px 20px;\r\n}\r\n.Login-buton-text\r\n{\r\n  margin-bottom: 0px;\r\n  border: 1px solid white;\r\n  padding: 7px 15px;\r\n    text-transform: uppercase;\r\n}\r\n}\r\n\r\n.notification-overlay\r\n{\r\n  background-color: white;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n\r\n.mobile-wrapper {\r\n  background-color: rgb(223,223,223);\r\n}\r\n\r\n.input-container { /* IE10 */\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.icon {\r\n  padding: 10px;\r\n  background: var( --DARK-BLUE-COLOR);\r\n  color: white;\r\n  min-width: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  padding: 10px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.input-group {\r\n \r\n\r\n  display: block;\r\n \r\n}\r\n\r\n.input-field:hover {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.hyper:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n.policy\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n\r\n  line-height: 3rem;\r\n\r\n\r\n  pointer-events: none;\r\n  display: flex;\r\n  color: #aaa;\r\n  font-size: 22px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.form-control\r\n{\r\n  height: 7vh;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1.5em;\r\n  \r\n    margin-bottom: 1rem;\r\n\r\n    margin-top: 1.5em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9uYXZpZ2F0aW9uQmFyL25hdmlnYXRpb25CYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBcUU7O0FBRXJFO0VBQ0UsK0JBQStCO0VBQy9CLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBRVgsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUVYLHdCQUF3QjtFQUV4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7OztBQUdmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5Qjs7QUFFM0I7O0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DOztBQUNwQztFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztFQU1FLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUViLGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYzs7O0FBR2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFFVCxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFDQTs7RUFFRTtJQUNFLGFBQWE7QUFDakI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixVQUFVO0VBQ1YseUJBQXlCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBOztBQUNBOztFQUVFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBLG1CQUN3QixTQUFTO0VBQy9CLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUNBOzs7RUFHRSxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7O0VBRWYsaUJBQWlCOzs7RUFHakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6Qjs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCOztJQUVmLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQjs7QUFFL0IiLCJmaWxlIjoic3JjL2FwcC9NZW51L25hdmlnYXRpb25CYXIvbmF2aWdhdGlvbkJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUxpZ2h0O1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnQvSGVsdmV0aWNhTmV1ZUxpZ2h0LnR0ZicpO1xyXG59XHJcblxyXG4ubWFpbi1uYXZpZ2F0aW9uLWJhciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgM2ZyIDFmciAxZnJcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1kaXYge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNGVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLDIyMywyMjMpO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTlweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxOXB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbmxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiB0b3A6IDE4cHg7ICovXHJcbiAgbWFyZ2luLXRvcDogNi4ycHg7XHJcblxyXG59XHJcblxyXG5sYWJlbDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxuLm1lbnUtdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ubWVudS10ZXh0OjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvZ28tbmF2IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuXHJcbn1cclxuXHJcbi5sb2dvdXQtaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLXNpemUge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbmltZy5jbG9zZS1pbWcge1xyXG4gIHdpZHRoOiA2JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNnB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyLjM3NXJlbTtcclxuICBoZWlnaHQ6IDIuMzc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC01MHZ3ICsgNTAlKTtcclxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lcj5kaXYge1xyXG5cclxuXHJcbiAgdGV4dC1hbGlnbjogTGVmdDtcclxuICBmb250LXNpemU6IDE4LjVweDtcclxuICBwYWRkaW5nOiAxN3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmltZy5uYXYtbGluay1pY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uYXYtbGlua3MtdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLURBUkstQkxVRS1DT0xPUik7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWdyaWQtY29uYXRpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTFmcjtcclxufVxyXG5cclxuLnNlYXJjaC1ncmlkLWNvbmF0aW5lcj5kaXYge1xyXG4gIGZvbnQtc2l6ZTogMTguNXB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGNEVGO1xyXG59XHJcblxyXG4ubmF2LWxpbmstaWNvbi1zZWFyY2gge1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDU2LjVweDtcclxufVxyXG5cclxuaS5mYS5mYS11c2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG5zcGFuLmxvZy1vdXQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pLmZhLmZhLXVzZXIuaW5wdXQtZ3JvdXAtdGV4dC5uYXYtbG9naW4tZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtYXJnaW4tdG9wOiAtNCU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogbm9uZTtcclxuICBsZWZ0OiBub25lO1xyXG4gIHJpZ2h0OiA5cHg7XHJcbiAgd2lkdGg6IG5vbmU7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW1nLmhvbWUtbWVudS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbn1cclxuXHJcbnAubml0aWZpY2F0aW9uLXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA0dmg7XHJcbiAgcmlnaHQ6IDIxdnc7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgd2lkdGg6IDR2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuaW1nLnBsdXMtaW1nIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cclxuc3Bhbi5yZWQtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZW51LXRvb2dsZSxcclxuLnBsdXMtaWNvbixcclxuLmljb24tc2l6ZSxcclxuLmltZ2UtbG9nby1oZWFkZXIsXHJcbi5ub3RpZmljYXRpb24sXHJcbi5sb2dvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5uYXYtbG9naW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA2MTtcclxuICB0b3A6IDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gIC5pY29uLXNpemUge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tbmF2IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDM2JTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuXHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzNiU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcblxyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbG9yLXNpZ251cCB7XHJcbiAgY29sb3I6ICMyNDREOTM7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG5cclxuXHJcbn1cclxuXHJcbmkuZmEuZmEtdXNlci5pbnB1dC1ncm91cC10ZXh0Lm5hdi1sb2dpbi1mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1hcmdpbi10b3A6IC00JTtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbi50ZXh0LWNlbnRlciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBub25lO1xyXG4gIGxlZnQ6IG5vbmU7XHJcbiAgcmlnaHQ6IDlweDtcclxuICB3aWR0aDogbm9uZTtcclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgLjJzOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnNpZ24taW4tbWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi51c2VyLWNyb3NzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nLmJ1dHRvbi1jcm9zcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbn1cclxuLnByb3BlcnR5LWNvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBcclxufVxyXG4ubG9naW4tZGVza3RvcC1idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDFweClcclxue1xyXG4gIC5tb2JpbGUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbi1kZXNrdG9wLWJ1dHRvblxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ2luLWJ1dHRvbi1tYWluIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMnZoO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcmlnaHQ6IDN2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MzdEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5Mb2dpbi1idXRvbi10ZXh0XHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1vdmVybGF5XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb2JpbGUtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywyMjMsMjIzKTtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogSUUxMCAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoIC0tREFSSy1CTFVFLUNPTE9SKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKCAtLURBUkstQkxVRS1DT0xPUik7XHJcbn1cclxuLmlucHV0LWdyb3VwIHtcclxuIFxyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuIFxyXG59XHJcblxyXG4uaW5wdXQtZmllbGQ6aG92ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhciggLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcbi5oeXBlcjpob3ZlclxyXG57XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wb2xpY3lcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xyXG59XHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMi4zNzVyZW07XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG5cclxuXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG4uZm9ybS1jb250cm9sXHJcbntcclxuICBoZWlnaHQ6IDd2aDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Menu/navigationBar/navigationBar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Menu/navigationBar/navigationBar.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function srcAppMenuNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
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
    /*! ../.././auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _state_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../state-service.service */
    "./src/app/state-service.service.ts");
    /* harmony import */


    var _myMatches_myMatches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../myMatches/myMatches.service */
    "./src/app/Menu/myMatches/myMatches.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Home/Property/fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NavigationBarComponent =
    /*#__PURE__*/
    function () {
      function NavigationBarComponent(authService, afs, // Inject Firestore service
      afAuth, MatchesService, stateService, _Activatedroute, _router, FormsService, fb) {
        _classCallCheck(this, NavigationBarComponent);

        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.FormsService = FormsService;
        this.fb = fb;
        this.notificationoverlay = false;
        this.isLoggedIn = true;
        this.propertyDetails = [];
        this.propertyBuyer = [];
        this.buyerProperty = [];
        this.sellerProperty = [];
        this.open = true;
        this.close = false;
        this.menuItem = false;
        this.navLink = true;
        this.plusMenu = false;
        this.plusOpenMenu = true;
        this.plusclose = false;
        this.navLogin = false;
        this.newUser = false;
        this.isLoading = false;
        this.formVar = this.fb.group({
          Name: '',
          email: '',
          password: ''
        });
      }

      _createClass(NavigationBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this45.userData = user;
              localStorage.setItem("user", JSON.stringify(_this45.userData));

              _this45.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this45.LoggedOut();
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.isLoggedIn = true;
          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.getMatchCases();
          this.navLogin = false;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
          this.navLogin = false;
        }
      }, {
        key: "getMatchCases",
        value: function getMatchCases() {
          var _this46 = this;

          // Fetch details Seller
          this.MatchesService.getMatchesSellerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              if (element.data().matchStatus == 'confirm_interest') {
                _this46.sellerProperty.push(element.data());
              }
            });
            _this46.noSellerOfMatche = _this46.sellerProperty.length;
            _this46.matches = _this46.buyerProperty.length + _this46.sellerProperty.length;
          }); // Fetch details Seller

          this.MatchesService.getMatchesBuyerProperties(this.uid).then(function (res) {
            res.forEach(function (element) {
              if (element.data().matchStatus == 'confirm_interest') {
                _this46.buyerProperty.push(element.data());
              }
            });
            _this46.noBuyerMatches = _this46.buyerProperty.length;
            _this46.matches = _this46.buyerProperty.length + _this46.sellerProperty.length;
          });
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.open = false;
          this.close = true;
          this.menuItem = true;
          this.plusCloseMenu();
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.open = true;
          this.close = false;
          this.menuItem = false;
          this.navLogin = false;
        }
      }, {
        key: "Itemmenu",
        value: function Itemmenu() {
          this.navLink = false;
          this.close = false;
          this.open = true;
          this.menuItem = false;
        }
      }, {
        key: "plusmenu",
        value: function plusmenu() {
          this.plusMenu = true;
          this.plusclose = true;
          this.plusOpenMenu = false;
          this.closeMenu();
        }
      }, {
        key: "plusCloseMenu",
        value: function plusCloseMenu() {
          this.plusMenu = false;
          this.plusclose = false;
          this.plusOpenMenu = true;
        }
      }, {
        key: "plusMenuContainer",
        value: function plusMenuContainer() {
          this.plusMenu = false;
          this.plusclose = false;
          this.plusOpenMenu = true;
        }
      }, {
        key: "openLogIn",
        value: function openLogIn() {
          this.navLogin = true;
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this47 = this;

          this.isLoading = true;
          this.authService.FacebookAuth().then(function (data) {
            _this47.isLoading = false;
          });
        } //SignIn Google

      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this48 = this;

          this.isLoading = true;
          this.authService.GoogleAuth().then(function (data) {
            _this48.isLoading = false;
          });
        } //Signup Google

      }, {
        key: "googleSignup",
        value: function googleSignup() {
          var _this49 = this;

          this.isLoading = true;
          this.authService.GoogleAuthSignup().then(function (data) {
            _this49.isLoading = false;
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, pass) {
          var _this50 = this;

          console.log(email + pass);
          this.isLoading = true;
          this.authService.SignIn(email, pass).then(function (data) {
            _this50.isLoading = false;
          });
        }
      }, {
        key: "NewUser",
        value: function NewUser() {
          this.newUser = true;
        }
      }, {
        key: "OldUser",
        value: function OldUser() {
          this.newUser = false;
        }
      }, {
        key: "newclose",
        value: function newclose() {
          this.newUser = false;
          this.newUser = false;
          this.navLogin = false;
        }
      }, {
        key: "signUp",
        value: function signUp(displayName, email, pass) {
          var _this51 = this;

          this.isLoading = true;
          this.authService.SignUp(email, pass).then(function (data) {
            _this51.user.Name = displayName;
            _this51.user.DOB = null;
            _this51.user.Phone = null;
            _this51.return = _this51.FormsService.createUserCustomer(_this51.user).then(function (data) {
              console.log(data);
            });
          });
        }
      }, {
        key: "userNew",
        value: function userNew() {
          this.user.DOB = null;
          this.user.Phone = null;
          this.user.displayName;
          this.return = this.FormsService.createUserCustomer(this.user).then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {
          if (event.keyCode == 13) {
            this.signUp(this.name, this.email, this.password);
          }
        }
      }, {
        key: "keyDownSign",
        value: function keyDownSign(events) {
          if (events.keyCode == 13) {
            this.signIn(this.email, this.password);
          }
        }
      }, {
        key: "save",
        value: function save() {
          this.signIn(this.email, this.password);
        }
      }, {
        key: "notificationoverlayopen",
        value: function notificationoverlayopen() {
          if (this.notificationoverlay == false) {
            this.notificationoverlay = true;
          } else if (this.notificationoverlay == true) {
            this.notificationoverlay = false;
          }
        }
      }]);

      return NavigationBarComponent;
    }();

    NavigationBarComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _myMatches_myMatches_service__WEBPACK_IMPORTED_MODULE_6__["MyMatchesService"]
      }, {
        type: _state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_8__["FormsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigationBar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigationBar.component.css */
      "./src/app/Menu/navigationBar/navigationBar.component.css")).default]
    })], NavigationBarComponent);
    /***/
  },

  /***/
  "./src/app/Menu/notification/notification.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/Menu/notification/notification.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuNotificationNotificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-item {\r\n    height: 100vh;\r\n    z-index: 1;\r\n    background-color: white;\r\n}\r\n.notification {\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    align-items: center;\r\n    padding: 1em 0em;\r\n}\r\nimg.icon {\r\n    width: 40%;\r\n    text-align: center;\r\n}\r\n.notification-icon {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvTWVudS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1pdGVtIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbSAwZW07XHJcbn1cclxuXHJcbmltZy5pY29uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Menu/notification/notification.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Menu/notification/notification.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppMenuNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationComponent =
    /*#__PURE__*/
    function () {
      function NotificationComponent() {
        _classCallCheck(this, NotificationComponent);
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationComponent;
    }();

    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.component.css */
      "./src/app/Menu/notification/notification.component.css")).default]
    })], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/Menu/plus/plus.component.css":
  /*!**********************************************!*\
    !*** ./src/app/Menu/plus/plus.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPlusPlusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background-plus\r\n{\r\n   background-color: white;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    position: absolute;\r\n    z-index: 999;\r\n    width: 100vw;\r\n}\r\n\r\n.cards{\r\n    margin: 0px  30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: transparent;\r\n    padding: 2em;\r\n    border: none;\r\n    box-shadow: none;\r\n}\r\n\r\nbutton.btn.btn-primary.button-plus {\r\n    padding: 0.5em  1em;\r\n}\r\n\r\nbutton.btn.btn-primary.button-plus-new {\r\n    padding: 0.5em 0.8em;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9wbHVzL3BsdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyx1QkFBdUI7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvTWVudS9wbHVzL3BsdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLXBsdXNcclxue1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5jYXJkc3tcclxuICAgIG1hcmdpbjogMHB4ICAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmJ1dHRvbi1wbHVzIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtICAxZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkuYnV0dG9uLXBsdXMtbmV3IHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/Menu/plus/plus.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/Menu/plus/plus.component.ts ***!
    \*********************************************/

  /*! exports provided: PlusComponent */

  /***/
  function srcAppMenuPlusPlusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlusComponent", function () {
      return PlusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlusComponent =
    /*#__PURE__*/
    function () {
      function PlusComponent() {
        _classCallCheck(this, PlusComponent);
      }

      _createClass(PlusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlusComponent;
    }();

    PlusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-plus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./plus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/plus/plus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./plus.component.css */
      "./src/app/Menu/plus/plus.component.css")).default]
    })], PlusComponent);
    /***/
  },

  /***/
  "./src/app/Misc/Footer/Footer.component.css":
  /*!**************************************************!*\
    !*** ./src/app/Misc/Footer/Footer.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*\r\n{\r\n    overflow-x: hidden;\r\n}\r\n.footer\r\n{\r\n    width: 100%;\r\n    background: rgb(223,223,223);\r\n\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n  \r\n  \r\n}\r\n.image-social {\r\n    display: flex;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-content: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    align-items: center;\r\n}\r\nimg.facebook-icon {\r\n    width: 11%;\r\n    padding: 0.8%;\r\n}\r\n.twitter-icon\r\n{\r\n    width: 11%;\r\n    padding: 0.8%;\r\n}\r\n.instagram-icon\r\n{\r\n    padding: 0.8%;\r\n}\r\n.privacy-policy {\r\n    text-align: center;\r\n    margin: 10px;\r\n    margin-bottom: 0px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9Gb290ZXIvRm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLDRCQUE0Qjs7SUFFNUIsYUFBYTtJQUNiLG1CQUFtQjs7O0FBR3ZCO0FBQ0E7SUFDSSxhQUFhO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5Qix1QkFBdUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL01pc2MvRm9vdGVyL0Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxyXG57XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmZvb3RlclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjMsMjIzLDIyMyk7XHJcblxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgXHJcbiAgXHJcbn1cclxuLmltYWdlLXNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1nLmZhY2Vib29rLWljb24ge1xyXG4gICAgd2lkdGg6IDExJTtcclxuICAgIHBhZGRpbmc6IDAuOCU7XHJcbn1cclxuLnR3aXR0ZXItaWNvblxyXG57XHJcbiAgICB3aWR0aDogMTElO1xyXG4gICAgcGFkZGluZzogMC44JTtcclxufVxyXG4uaW5zdGFncmFtLWljb25cclxue1xyXG4gICAgcGFkZGluZzogMC44JTtcclxufVxyXG4ucHJpdmFjeS1wb2xpY3kge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/Misc/Footer/Footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/Misc/Footer/Footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppMiscFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      selector: 'app-Footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./Footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Footer.component.css */
      "./src/app/Misc/Footer/Footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/Misc/alertFormdialog/alertFormdialog.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/Misc/alertFormdialog/alertFormdialog.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscAlertFormdialogAlertFormdialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n  .fa-events-icons-ready .cdk-global-scrollblock {\r\n   \r\n    width: 100%;\r\n    overflow-y: scroll;\r\n    position: inherit !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9hbGVydEZvcm1kaWFsb2cvYWxlcnRGb3JtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBR0U7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9NaXNjL2FsZXJ0Rm9ybWRpYWxvZy9hbGVydEZvcm1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAgLmZhLWV2ZW50cy1pY29ucy1yZWFkeSAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Misc/alertFormdialog/alertFormdialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AltertFormDialogComponent */

  /***/
  function srcAppMiscAlertFormdialogAlertFormdialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltertFormDialogComponent", function () {
      return AltertFormDialogComponent;
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

    var AltertFormDialogComponent =
    /*#__PURE__*/
    function () {
      function AltertFormDialogComponent(data, dialogRef) {
        _classCallCheck(this, AltertFormDialogComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.dialogRef.updateSize('300vw', '300vw');
      }

      _createClass(AltertFormDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return AltertFormDialogComponent;
    }();

    AltertFormDialogComponent.ctorParameters = function () {
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

    AltertFormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formdialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alertFormdialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alertFormdialog.component.css */
      "./src/app/Misc/alertFormdialog/alertFormdialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AltertFormDialogComponent);
    /***/
  },

  /***/
  "./src/app/Misc/components/dashboard/dashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/Misc/components/dashboard/dashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01pc2MvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Misc/components/dashboard/dashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Misc/components/dashboard/dashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppMiscComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../auth.service */
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/Misc/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/Misc/components/forgot-password/forgot-password.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/Misc/components/forgot-password/forgot-password.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscComponentsForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n  \r\n    font-family: 'Open Sans', sans-serif;\r\n   width: 80%;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosb0NBQW9DO0dBQ3JDLFVBQVU7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9NaXNjL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zb2NpYWwtbG9naW5cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Misc/components/forgot-password/forgot-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/Misc/components/forgot-password/forgot-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppMiscComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../auth.service */
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/Misc/components/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/Misc/components/sign-in/sign-in.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/Misc/components/sign-in/sign-in.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscComponentsSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-facebook\r\n\r\n\r\n{\r\n background-color: #244D93;\r\n color: white;\r\n width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.btn-google\r\n{\r\n    background-color: #DD4B33;\r\n    color: white;\r\n    width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.social-login h4\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 700;\r\n}\r\n.social-button {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n\r\n}\r\n.color-signup\r\n{\r\n    color: #244D93;\r\n}\r\n.btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n    margin-top: 3%;\r\n    font-family: 'Open Sans', sans-serif;\r\n  \r\n}\r\ni.fa.fa-user.input-group-text.nav-login-form{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n.checkbox\r\n{\r\n  background: none transparent;\r\n     border: none; \r\n     border-left: none; \r\n     border-right: none; \r\n    cursor: pointer;\r\n    /* display: block; */\r\n    height: auto;\r\n    position: absolute;\r\n    top: none; \r\n     left: none; \r\n    right: 9px;\r\n     width: none; \r\n    /* transition: all .2s; */\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUMseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCO0FBQ0E7O0lBRUksY0FBYztBQUNsQjtBQUNBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7O0FBRXhDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLDRCQUE0QjtLQUN6QixZQUFZO0tBQ1osaUJBQWlCO0tBQ2pCLGtCQUFrQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztLQUNSLFVBQVU7SUFDWCxVQUFVO0tBQ1QsV0FBVztJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvTWlzYy9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1mYWNlYm9va1xyXG5cclxuXHJcbntcclxuIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJ0bi1nb29nbGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uc29jaWFsLWxvZ2luIGg0XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4uY29sb3Itc2lnbnVwXHJcbntcclxuICAgIGNvbG9yOiAjMjQ0RDkzO1xyXG59XHJcbi5idG4tc29jaWFsLWxvZ2luXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG59XHJcbmkuZmEuZmEtdXNlci5pbnB1dC1ncm91cC10ZXh0Lm5hdi1sb2dpbi1mb3Jte1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNoZWNrYm94XHJcbntcclxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgIGJvcmRlcjogbm9uZTsgXHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7IFxyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZTsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogbm9uZTsgXHJcbiAgICAgbGVmdDogbm9uZTsgXHJcbiAgICByaWdodDogOXB4O1xyXG4gICAgIHdpZHRoOiBub25lOyBcclxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Misc/components/sign-in/sign-in.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Misc/components/sign-in/sign-in.component.ts ***!
    \**************************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppMiscComponentsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../auth.service */
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/Misc/components/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/Misc/components/verify-email/verify-email.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/Misc/components/verify-email/verify-email.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscComponentsVerifyEmailVerifyEmailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01pc2MvY29tcG9uZW50cy92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Misc/components/verify-email/verify-email.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Misc/components/verify-email/verify-email.component.ts ***!
    \************************************************************************/

  /*! exports provided: VerifyEmailComponent */

  /***/
  function srcAppMiscComponentsVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../../auth.service */
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-email.component.css */
      "./src/app/Misc/components/verify-email/verify-email.component.css")).default]
    })], VerifyEmailComponent);
    /***/
  },

  /***/
  "./src/app/Misc/material.ts":
  /*!**********************************!*\
    !*** ./src/app/Misc/material.ts ***!
    \**********************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMiscMaterialTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/Misc/privacy-policy/privacy-policy.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/Misc/privacy-policy/privacy-policy.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscPrivacyPolicyPrivacyPolicyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nh5.main-privacy-heading {\r\n    text-align: center;\r\n    font-size: 2.5em;\r\n    margin: 0.7em;\r\n}\r\n.heading-privacy-policy-container {\r\n    border-bottom: 1px solid black;\r\n    margin: 0px 2em;\r\n}\r\n.privacy-policy-paragraph {\r\n    margin: 2em;\r\n    text-align: justify;\r\n}\r\nh5.paragraph-privacy-heading {\r\n    margin-bottom: 1em;\r\n}\r\n.privacy-policy-page {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvTWlzYy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmg1Lm1haW4tcHJpdmFjeS1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW46IDAuN2VtO1xyXG59XHJcbi5oZWFkaW5nLXByaXZhY3ktcG9saWN5LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDBweCAyZW07XHJcbn1cclxuLnByaXZhY3ktcG9saWN5LXBhcmFncmFwaCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuaDUucGFyYWdyYXBoLXByaXZhY3ktaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLnByaXZhY3ktcG9saWN5LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Misc/privacy-policy/privacy-policy.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Misc/privacy-policy/privacy-policy.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PrivacyPolicyComponent */

  /***/
  function srcAppMiscPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
      return PrivacyPolicyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyPolicyComponent() {
        _classCallCheck(this, PrivacyPolicyComponent);
      }

      _createClass(PrivacyPolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyComponent;
    }();

    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.component.css */
      "./src/app/Misc/privacy-policy/privacy-policy.component.css")).default]
    })], PrivacyPolicyComponent);
    /***/
  },

  /***/
  "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SelectedPropertyDialogComponent */

  /***/
  function srcAppMiscSelectedPropertyDialogSelectedPropertyDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedPropertyDialogComponent", function () {
      return SelectedPropertyDialogComponent;
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SelectedPropertyDialogComponent =
    /*#__PURE__*/
    function () {
      function SelectedPropertyDialogComponent( //  @Inject(MAT_DIALOG_DATA) private data: any,
      dialogRef, _location) {
        _classCallCheck(this, SelectedPropertyDialogComponent);

        this.dialogRef = dialogRef;
        this._location = _location;
        this.message = "";
        this.cancelButtonText = "Cancel";
        this.dialogRef.updateSize("300vw", "300vw");
      }

      _createClass(SelectedPropertyDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true); // Add match DB details
          // Get seller ID for property
          // Get seller ID by using snapshot.getRef().getParent()
          // Create new DB entry in collection sellerMatches with seller ID as doc ID and then child collection as initiated / offered
          // Create a record in buyerMatches with buyer ID as doc ID and child ID as initiated / offered
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return SelectedPropertyDialogComponent;
    }();

    SelectedPropertyDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    SelectedPropertyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-selectePpropertyDialog",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selectedPropertyDialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html")).default
    })], SelectedPropertyDialogComponent);
    /***/
  },

  /***/
  "./src/app/Model/agentSignup.ts":
  /*!**************************************!*\
    !*** ./src/app/Model/agentSignup.ts ***!
    \**************************************/

  /*! exports provided: agentSignup */

  /***/
  function srcAppModelAgentSignupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "agentSignup", function () {
      return agentSignup;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var agentSignup = function agentSignup() {
      _classCallCheck(this, agentSignup);

      this.SearchPostcode = [''];
      this.active = true;
    };
    /***/

  },

  /***/
  "./src/app/Model/listingBuyer.ts":
  /*!***************************************!*\
    !*** ./src/app/Model/listingBuyer.ts ***!
    \***************************************/

  /*! exports provided: listingBuyer */

  /***/
  function srcAppModelListingBuyerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listingBuyer", function () {
      return listingBuyer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var listingBuyer = function listingBuyer() {
      _classCallCheck(this, listingBuyer);

      this.ChainStatus = "First Time Buyer";
      this.FinancialPosition = "Mortgage Free";
      this.Type = "Buying to Live";
      this.Position = "Cash Buyer";
      this.PropertyType = "Flat";
      this.SearchRadius = "This postcode only";
      this.PriceRange = 0;
      this.active = true;
    };
    /***/

  },

  /***/
  "./src/app/Model/listingSeller.ts":
  /*!****************************************!*\
    !*** ./src/app/Model/listingSeller.ts ***!
    \****************************************/

  /*! exports provided: listingSeller */

  /***/
  function srcAppModelListingSellerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listingSeller", function () {
      return listingSeller;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var listingSeller = function listingSeller() {
      _classCallCheck(this, listingSeller);

      this.Title = "Mr";
      this.ownership = "Freehold";
      this.active = true;
    };
    /***/

  },

  /***/
  "./src/app/Model/notification.ts":
  /*!***************************************!*\
    !*** ./src/app/Model/notification.ts ***!
    \***************************************/

  /*! exports provided: notification */

  /***/
  function srcAppModelNotificationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notification", function () {
      return notification;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var notification = function notification() {
      _classCallCheck(this, notification);
    };
    /***/

  },

  /***/
  "./src/app/Model/sellerUser.ts":
  /*!*************************************!*\
    !*** ./src/app/Model/sellerUser.ts ***!
    \*************************************/

  /*! exports provided: sellerUser */

  /***/
  function srcAppModelSellerUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sellerUser", function () {
      return sellerUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var sellerUser = function sellerUser() {
      _classCallCheck(this, sellerUser);

      this.active = true;
    };
    /***/

  },

  /***/
  "./src/app/Model/user.ts":
  /*!*******************************!*\
    !*** ./src/app/Model/user.ts ***!
    \*******************************/

  /*! exports provided: user */

  /***/
  function srcAppModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user", function () {
      return user;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var user = function user() {
      _classCallCheck(this, user);

      this.active = true;
    };
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


    var _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Home/Property/Property.component */
    "./src/app/Home/Property/Property.component.ts");
    /* harmony import */


    var _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ././Home/Home.component */
    "./src/app/Home/Home.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/fillFormBuyer.component */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/fillFormSeller.component */
    "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts");
    /* harmony import */


    var _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ././Menu/myProfile/Profile.component */
    "./src/app/Menu/myProfile/Profile.component.ts");
    /* harmony import */


    var _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Menu/myProfile/editProfile/editProfile.component */
    "./src/app/Menu/myProfile/editProfile/editProfile.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts");
    /* harmony import */


    var _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Menu/myListings/myListing.component */
    "./src/app/Menu/myListings/myListing.component.ts");
    /* harmony import */


    var _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Menu/Prefrences/Prefrences.component */
    "./src/app/Menu/Prefrences/Prefrences.component.ts");
    /* harmony import */


    var _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Menu/Chats/chats.component */
    "./src/app/Menu/Chats/chats.component.ts");
    /* harmony import */


    var _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Misc/components/dashboard/dashboard.component */
    "./src/app/Misc/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Misc/components/forgot-password/forgot-password.component */
    "./src/app/Misc/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Misc/components/verify-email/verify-email.component */
    "./src/app/Misc/components/verify-email/verify-email.component.ts");
    /* harmony import */


    var _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Misc/components/sign-in/sign-in.component */
    "./src/app/Misc/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./Menu/myMatches/myMatches.component */
    "./src/app/Menu/myMatches/myMatches.component.ts");
    /* harmony import */


    var _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component */
    "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts");
    /* harmony import */


    var _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./Home/agent-signup/agent-signup.component */
    "./src/app/Home/agent-signup/agent-signup.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts");
    /* harmony import */


    var _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./Misc/privacy-policy/privacy-policy.component */
    "./src/app/Misc/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component */
    "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts");
    /* harmony import */


    var _template_template_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./template/template.component */
    "./src/app/template/template.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_matched_nestimates_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.ts");
    /* harmony import */


    var _Menu_plus_plus_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./Menu/plus/plus.component */
    "./src/app/Menu/plus/plus.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_matches_nestimate_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_un_matches_nestimate_un_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.ts");
    /* harmony import */


    var _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./terms-condition/terms-condition.component */
    "./src/app/terms-condition/terms-condition.component.ts");
    /* harmony import */


    var _Menu_myMatches_select_agent_select_agent_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./Menu/myMatches/select-agent/select-agent.component */
    "./src/app/Menu/myMatches/select-agent/select-agent.component.ts");
    /* harmony import */


    var _Home_agentsignupform_agentsignupform_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./Home/agentsignupform/agentsignupform.component */
    "./src/app/Home/agentsignupform/agentsignupform.component.ts");

    var routes = [{
      path: "Property/:use",
      component: _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_3__["PropertyComponent"]
    }, {
      path: "",
      component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: "fillFormBuyer/:Currentpostcode/:CurrentTown/:Currentstate/:Currentcountry/:Lookingpostcode/:LookingStreetname/:Lookingstate/:Country/:FinancialPosition/:SearchRadius/:PropertyType/:Roommin/:Roomsmax/:MinAmount/:MaxAmount/:Validity/:Minbathroom/:Maxbathroom/:Minreception/:Maxreception/:Conditions/:Ownership/:CurrentAddress",
      component: _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_5__["FillFormBuyerComponent"]
    }, {
      path: "confirmSellerdetail",
      component: _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmSellerDetailComponent"]
    }, {
      path: "buyerMatchlisting",
      component: _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_7__["BuyerMatcheListingComponent"]
    }, {
      path: "SellerSelectedProperty/:MaxAmount/:Lookingpostcode/:LookingStreetname/:Position/:PropertyType/:Roomsmax/:Ownership/:Conditions/:Maxbathroom/:Maxreception/:features/:UserId/:FinancialPosition",
      component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_8__["SellerSelectedPropertyComponent"]
    }, {
      path: "fillformseller/:Lookingpostcode/:LookingAddress/:LookingTown/:Lookingstate/:PropertyType/:Maxrooms/:MaxAmount/:ownership/:Maxbathrooms/:Maxreception/:PropertyCondition/:features/:Country",
      component: _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_9__["FillFormSellerComponent"]
    }, {
      path: "sellerMatchlisting",
      component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__["SellerMatchListingComponent"]
    }, {
      path: "confirmbuyerdetail",
      component: _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmBuyerDetailComponent"]
    }, {
      path: "mymatches",
      component: _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_23__["MyMatchesComponent"]
    }, {
      path: "profile",
      component: _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_12__["MyProfileComponent"]
    }, {
      path: "editprofile",
      component: _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"]
    }, {
      path: "buyerSelectedPropertyDetail/:Lookingpostcode/:Lookingstate/:LookingTown/:norooms/:PropertyCondition/:MaxAmount/:LookingAddress/:ownership/:PropertyType/:features/:UserId/:MinAmount/:Maxbathrooms/:Maxrooms/:Maxreception",
      component: _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_14__["BuyerSelectedPropertyDetailComponent"]
    }, {
      path: "myListing",
      component: _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_15__["MyListingComponent"]
    }, {
      path: "prefrences",
      component: _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_16__["PrefrencesComponent"]
    }, {
      path: "chats",
      component: _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_17__["ChatsComponent"]
    }, {
      path: "sign-in",
      component: _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"]
    }, {
      path: "dashboard",
      component: _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"]
    }, {
      path: "forgot-password",
      component: _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"]
    }, {
      path: "verify-email-address",
      component: _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_20__["VerifyEmailComponent"]
    }, {
      path: "mymatchesselecteddetail/:Lookingpostcode/:LookingAddress/:norooms/:PropertyCondition/:MaxAmount/:Lookingstate/:PropertyType/:ownership/:features/:matchStatus",
      component: _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_24__["MyMatchesSelectedDetailsComponent"]
    }, {
      path: "agentSignup",
      component: _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_25__["AgentSignupComponent"]
    }, {
      path: "agentSelection",
      component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_26__["AgentSelectionComponent"]
    }, {
      path: "PrivacyPolicy",
      component: _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyPolicyComponent"]
    }, {
      path: "MyMatchesseller/:Lookingpostcode/:ChainStatus/:FinancialPosition/:Type/:Position/:SearchRadius/:PriceRange:/:matchStatus",
      component: _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_28__["MyMatchesToSellSelectedDetailComponent"]
    }, {
      path: "checkLogin",
      component: _template_template_component__WEBPACK_IMPORTED_MODULE_29__["TemplateComponent"]
    }, {
      path: "Plus",
      component: _Menu_plus_plus_component__WEBPACK_IMPORTED_MODULE_31__["PlusComponent"]
    }, {
      path: "matchNestimat",
      component: _Home_Property_fillFormBuyer_matched_nestimates_matched_nestimates_component__WEBPACK_IMPORTED_MODULE_30__["MatchedNestimatesComponent"]
    }, {
      path: "MatchesNestimate",
      component: _Home_Property_fillFormBuyer_matched_nestimates_matches_nestimate_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_32__["MatchesNestimateComponent"]
    }, {
      path: "Unmatched",
      component: _Home_Property_fillFormBuyer_matched_nestimates_un_matches_nestimate_un_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_33__["UnMatchesNestimateComponent"]
    }, {
      path: "terms",
      component: _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_34__["TermsConditionComponent"]
    }, {
      path: "selectAgent",
      component: _Menu_myMatches_select_agent_select_agent_component__WEBPACK_IMPORTED_MODULE_35__["SelectAgentComponent"]
    }, {
      path: "Agentsignupform",
      component: _Home_agentsignupform_agentsignupform_component__WEBPACK_IMPORTED_MODULE_36__["AgentsignupformComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
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


    var _Menu_navigationBar_navigationBar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Menu/navigationBar/navigationBar.component */
    "./src/app/Menu/navigationBar/navigationBar.component.ts");
    /* harmony import */


    var _Misc_Footer_Footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Misc/Footer/Footer.component */
    "./src/app/Misc/Footer/Footer.component.ts");
    /* harmony import */


    var _Home_Home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Home/Home.component */
    "./src/app/Home/Home.component.ts");
    /* harmony import */


    var _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Home/Property/Property.component */
    "./src/app/Home/Property/Property.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/fillFormBuyer.component */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/fillFormSeller.component */
    "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts");
    /* harmony import */


    var _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Menu/myProfile/Profile.component */
    "./src/app/Menu/myProfile/Profile.component.ts");
    /* harmony import */


    var _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Menu/myProfile/editProfile/editProfile.component */
    "./src/app/Menu/myProfile/editProfile/editProfile.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts");
    /* harmony import */


    var _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Menu/myListings/myListing.component */
    "./src/app/Menu/myListings/myListing.component.ts");
    /* harmony import */


    var _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Menu/Prefrences/Prefrences.component */
    "./src/app/Menu/Prefrences/Prefrences.component.ts");
    /* harmony import */


    var _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Menu/Chats/chats.component */
    "./src/app/Menu/Chats/chats.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./Misc/components/dashboard/dashboard.component */
    "./src/app/Misc/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./Misc/components/sign-in/sign-in.component */
    "./src/app/Misc/components/sign-in/sign-in.component.ts");
    /* harmony import */


    var _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./Misc/components/forgot-password/forgot-password.component */
    "./src/app/Misc/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./Misc/components/verify-email/verify-email.component */
    "./src/app/Misc/components/verify-email/verify-email.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts");
    /* harmony import */


    var _Misc_material__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ././Misc/material */
    "./src/app/Misc/material.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component */
    "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! ./Misc/selectedPropertyDialog/selectedPropertyDialog.component */
    "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts");
    /* harmony import */


    var _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! ./Menu/myMatches/myMatches.component */
    "./src/app/Menu/myMatches/myMatches.component.ts");
    /* harmony import */


    var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! ./Misc/alertFormdialog/alertFormdialog.component */
    "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");
    /* harmony import */


    var _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
    /*! ./Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component */
    "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts");
    /* harmony import */


    var _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
    /*! ./Home/agent-signup/agent-signup.component */
    "./src/app/Home/agent-signup/agent-signup.component.ts");
    /* harmony import */


    var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
    /*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component */
    "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts");
    /* harmony import */


    var _template_template_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
    /*! ./template/template.component */
    "./src/app/template/template.component.ts");
    /* harmony import */


    var _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
    /*! ./Misc/privacy-policy/privacy-policy.component */
    "./src/app/Misc/privacy-policy/privacy-policy.component.ts");
    /* harmony import */


    var _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
    /*! ./Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component */
    "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts");
    /* harmony import */


    var _Menu_notification_notification_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
    /*! ./Menu/notification/notification.component */
    "./src/app/Menu/notification/notification.component.ts");
    /* harmony import */


    var _Menu_plus_plus_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
    /*! ./Menu/plus/plus.component */
    "./src/app/Menu/plus/plus.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_matched_nestimates_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matched-nestimates.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_matches_nestimate_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/matches-nestimate/matches-nestimate.component.ts");
    /* harmony import */


    var _Home_Property_fillFormBuyer_matched_nestimates_un_matches_nestimate_un_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
    /*! ./Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component */
    "./src/app/Home/Property/fillFormBuyer/matched-nestimates/un-matches-nestimate/un-matches-nestimate.component.ts");
    /* harmony import */


    var _short_name_pipe__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
    /*! ./short-name.pipe */
    "./src/app/short-name.pipe.ts");
    /* harmony import */


    var _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
    /*! ./terms-condition/terms-condition.component */
    "./src/app/terms-condition/terms-condition.component.ts");
    /* harmony import */


    var _Menu_myMatches_select_agent_select_agent_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
    /*! ./Menu/myMatches/select-agent/select-agent.component */
    "./src/app/Menu/myMatches/select-agent/select-agent.component.ts");
    /* harmony import */


    var _Home_agentsignupform_agentsignupform_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
    /*! ./Home/agentsignupform/agentsignupform.component */
    "./src/app/Home/agentsignupform/agentsignupform.component.ts"); // Firebase modules


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Menu_navigationBar_navigationBar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"], _Misc_Footer_Footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _Home_Home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_8__["PropertyComponent"], _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_9__["FillFormBuyerComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__["BuyerMatcheListingComponent"], _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_11__["SellerSelectedPropertyComponent"], _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmSellerDetailComponent"], _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_13__["FillFormSellerComponent"], _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_14__["SellerMatchListingComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmBuyerDetailComponent"], _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"], _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_16__["MyProfileComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_18__["BuyerSelectedPropertyDetailComponent"], _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_19__["MyListingComponent"], _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_20__["PrefrencesComponent"], _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_21__["ChatsComponent"], _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"], _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_30__["SignInComponent"], _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"], _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_32__["VerifyEmailComponent"], _Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__["AlertDialogComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__["AlertDialogBuyerDataSubmissionComponent"], _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__["SelectedPropertyDialogComponent"], _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_81__["MyMatchesComponent"], _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__["AltertFormDialogComponent"], _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_83__["MyMatchesSelectedDetailsComponent"], _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_84__["AgentSignupComponent"], _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_85__["AgentSelectionComponent"], _template_template_component__WEBPACK_IMPORTED_MODULE_86__["TemplateComponent"], _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_87__["PrivacyPolicyComponent"], _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_88__["MyMatchesToSellSelectedDetailComponent"], _Menu_notification_notification_component__WEBPACK_IMPORTED_MODULE_89__["NotificationComponent"], _Menu_plus_plus_component__WEBPACK_IMPORTED_MODULE_90__["PlusComponent"], _Home_Property_fillFormBuyer_matched_nestimates_matched_nestimates_component__WEBPACK_IMPORTED_MODULE_91__["MatchedNestimatesComponent"], _Home_Property_fillFormBuyer_matched_nestimates_matches_nestimate_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_92__["MatchesNestimateComponent"], _Home_Property_fillFormBuyer_matched_nestimates_un_matches_nestimate_un_matches_nestimate_component__WEBPACK_IMPORTED_MODULE_93__["UnMatchesNestimateComponent"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_94__["ShortNamePipe"], _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_95__["TermsConditionComponent"], _Menu_myMatches_select_agent_select_agent_component__WEBPACK_IMPORTED_MODULE_96__["SelectAgentComponent"], _Home_agentsignupform_agentsignupform_component__WEBPACK_IMPORTED_MODULE_97__["AgentsignupformComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebaseConfig, "street"), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"], _Misc_material__WEBPACK_IMPORTED_MODULE_77__["MaterialModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__["MatTabsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_41__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_51__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_54__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_55__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_58__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_59__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_62__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_65__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_66__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_67__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_68__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_69__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_70__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_71__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_73__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_74__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_75__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__["ScrollingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_79__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"]],
      entryComponents: [_Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__["AlertDialogComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__["AlertDialogBuyerDataSubmissionComponent"], _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__["SelectedPropertyDialogComponent"], _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__["AltertFormDialogComponent"]],
      providers: [_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], {
        provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__["FirestoreSettingsToken"],
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone, // NgZone service to remove outside scope warning
      _location) {
        var _this52 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this._location = _location;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this52.userData = user;
            localStorage.setItem("user", JSON.stringify(_this52.userData));
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
          regeneratorRuntime.mark(function _callee10() {
            var result;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

                  case 3:
                    result = _context10.sent;
                    this.ngZone.run(function () {}); // this.SetUserData(result.user);

                    _context10.next = 10;
                    break;

                  case 7:
                    _context10.prev = 7;
                    _context10.t0 = _context10["catch"](0);
                    window.alert(_context10.t0.message);

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[0, 7]]);
          }));
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var result;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

                  case 3:
                    result = _context11.sent;
                    this.SetUserData(result.user);
                    _context11.next = 10;
                    break;

                  case 7:
                    _context11.prev = 7;
                    _context11.t0 = _context11["catch"](0);
                    window.alert(_context11.t0.message);

                  case 10:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[0, 7]]);
          }));
        } // Send email verfificaiton when new user sign up
        // async SendVerificationMail() {
        //   await this.afAuth.auth.currentUser.sendEmailVerification();
        //   this.router.navigate(["verify-email-address"]);
        // }
        // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.prev = 0;
                    _context12.next = 3;
                    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);

                  case 3:
                    window.alert("Password reset email sent, check your inbox.");
                    _context12.next = 9;
                    break;

                  case 6:
                    _context12.prev = 6;
                    _context12.t0 = _context12["catch"](0);
                    window.alert(_context12.t0);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[0, 6]]);
          }));
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        } // Sign in with Google

      }, {
        key: "GoogleAuthSignup",
        value: function GoogleAuthSignup() {
          return this.AuthSignup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
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
          regeneratorRuntime.mark(function _callee13() {
            var result;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return this.afAuth.auth.signInWithPopup(provider);

                  case 3:
                    result = _context13.sent;
                    this.ngZone.run(function () {});
                    _context13.next = 10;
                    break;

                  case 7:
                    _context13.prev = 7;
                    _context13.t0 = _context13["catch"](0);
                    window.alert(_context13.t0);

                  case 10:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[0, 7]]);
          }));
        }
      }, {
        key: "AuthSignup",
        value: function AuthSignup(provider) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this53 = this;

            var result;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.prev = 0;
                    _context14.next = 3;
                    return this.afAuth.auth.signInWithPopup(provider);

                  case 3:
                    result = _context14.sent;
                    this.ngZone.run(function () {
                      _this53.SetUserData(result.user);
                    });
                    _context14.next = 10;
                    break;

                  case 7:
                    _context14.prev = 7;
                    _context14.t0 = _context14["catch"](0);
                    window.alert(_context14.t0);

                  case 10:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[0, 7]]);
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
            Name: user.displayName
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
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.afAuth.auth.signOut();

                  case 2:
                    localStorage.removeItem("user");
                    this.router.navigate(["/"]);

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
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


    __webpack_exports__["default"] = "mat-card {\r\n  margin: 1em;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.fa-events-icons-ready .cdk-global-scrollblock {\r\n   \r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  position: inherit !important;\r\n}\r\n\r\n.mat-tab-labels {\r\n\r\n  justify-content: center !important; \r\n  align-items: center !important;\r\n}\r\n\r\ncard>:last-child:not(.mat-card-footer) {\r\n  margin-bottom: -17px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFJQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZmEtZXZlbnRzLWljb25zLXJlYWR5IC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcclxuICAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC10YWItbGFiZWxzIHtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbmNhcmQ+Omxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTdweDtcclxufVxyXG4iXX0= */";
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
    /* harmony import */


    var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Model/listingBuyer */
    "./src/app/Model/listingBuyer.ts");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.latUrl = "https://api.postcodes.io/postcodes/";
        this.configUrl = "https://api-full.addressian.co.uk/postcode/";
        console.log(_Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"].Lookingpostcode);
      }

      _createClass(HttpService, [{
        key: "search",
        value: function search(query) {
          var headerDict = {
            "x-api-key": "BcLIABSb6J3HsvGTpI5jA8FrtOaQqR67736r1Hip"
          };
          var url = "https://api-full.addressian.co.uk/postcode/";
          return this.http.get(url + query, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict)
          });
        }
      }, {
        key: "getLat",
        value: function getLat(Lookingpostcode) {
          console.log(Lookingpostcode);
          return this.http.get(this.latUrl + Lookingpostcode);
        }
      }, {
        key: "sentEmail",
        value: function sentEmail(url, data) {
          return this.http.post(url, data);
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
  "./src/app/short-name.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/short-name.pipe.ts ***!
    \************************************/

  /*! exports provided: ShortNamePipe */

  /***/
  function srcAppShortNamePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortNamePipe", function () {
      return ShortNamePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShortNamePipe =
    /*#__PURE__*/
    function () {
      function ShortNamePipe() {
        _classCallCheck(this, ShortNamePipe);
      }

      _createClass(ShortNamePipe, [{
        key: "transform",
        value: function transform(fullName) {
          return fullName.split(" ").map(function (n) {
            return n[0];
          }).join(".");
        }
      }]);

      return ShortNamePipe;
    }();

    ShortNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "shortName"
    })], ShortNamePipe);
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
  "./src/app/template/template.component.css":
  /*!*************************************************!*\
    !*** ./src/app/template/template.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTemplateTemplateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".back {\r\n  background-image: url(/assets/Images/handshake.jpg);\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.upper-back {\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 250px;\r\n  opacity: 0.5;\r\n  \r\n}\r\n\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n\r\n.home-button {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 35%;\r\n}\r\n\r\n.home-text-font {\r\n\r\n  color: #707070;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  border-radius: 19px;\r\n  padding: 0.5em;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.sign-in-main\r\n{\r\n  display: block;\r\n}\r\n\r\n.user-cross {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nimg.button-cross {\r\n  position: absolute;\r\n  right: 0px;\r\n  margin: 0px 10px;\r\n  width: 16px;\r\n}\r\n\r\n.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  text-align: left;\r\n \r\n}\r\n\r\n.continue-form {\r\n  background-color: var(--light-blue-color);\r\n  /* position: absolute; */\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n}\r\n\r\n.nestimate-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg.nestimate-logo {\r\n  height: 22vh;\r\n  margin-top: 3vh;\r\n}\r\n\r\n.overlay-text{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.overlay-text-third{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n}\r\n\r\n.continue-text {\r\n  margin: 2em;\r\n  font-size: 17px;\r\n  text-align: left;\r\n}\r\n\r\n.continue-button-container\r\n{\r\n  color: white;\r\n  font-family: 'Roboto-Medium';\r\n  font-size: 18px;\r\n}\r\n\r\n.continue-button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 3px solid white;\r\n  margin: 0vh 15vw;\r\n  padding: 0.6em\r\n}\r\n\r\n.input-container { /* IE10 */\r\n  display: flex;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.icon {\r\n  padding: 10px;\r\n  background: var( --DARK-BLUE-COLOR);\r\n  color: white;\r\n  min-width: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  padding: 10px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:focus {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.input-group {\r\n \r\n\r\n  display: block;\r\n \r\n}\r\n\r\n.input-field:hover {\r\n  border: 2px solid var( --DARK-BLUE-COLOR);\r\n}\r\n\r\n.hyper:hover\r\n{\r\n  cursor: pointer;\r\n}\r\n\r\n.policy\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n\r\n  line-height: 3rem;\r\n\r\n\r\n  pointer-events: none;\r\n  display: flex;\r\n  color: #aaa;\r\n  font-size: 22px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.form-control\r\n{\r\n  height: 7vh;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n  margin-top: 1.5em;\r\n  \r\n    margin-bottom: 1rem;\r\n\r\n    margin-top: 1.5em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFtRDtFQUNuRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZOztBQUVkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFJQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUVULGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBQ0EsbUJBQ3dCLFNBQVM7RUFDL0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBQ0E7OztFQUdFLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTs7RUFFZixpQkFBaUI7OztFQUdqQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7O0FBRXpCOztBQUNBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7O0lBRWYsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCOztBQUUvQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3RlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSW1hZ2VzL2hhbmRzaGFrZS5qcGcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi51cHBlci1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBcclxufVxyXG5cclxuLnVwcGVyLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xNDVweDtcclxufVxyXG5cclxuLmhvbWUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5cclxuXHJcbi5ob21lLXRleHQtZm9udCB7XHJcblxyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuXHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbG9yLXNpZ251cCB7XHJcbiAgY29sb3I6ICMyNDREOTM7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsLWxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG5cclxufVxyXG5cclxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLnRleHQtY2VudGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IG5vbmU7XHJcbiAgbGVmdDogbm9uZTtcclxuICByaWdodDogOXB4O1xyXG4gIHdpZHRoOiBub25lO1xyXG4gIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc2lnbi1pbi1tYWluXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udXNlci1jcm9zcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1nLmJ1dHRvbi1jcm9zcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxuICB3aWR0aDogMTZweDtcclxufVxyXG4ucHJvcGVydHktY29uLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuIFxyXG59XHJcbi5jb250aW51ZS1mb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlLWNvbG9yKTtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG59XHJcbi5uZXN0aW1hdGUtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pbWcubmVzdGltYXRlLWxvZ28ge1xyXG4gIGhlaWdodDogMjJ2aDtcclxuICBtYXJnaW4tdG9wOiAzdmg7XHJcbn1cclxuLm92ZXJsYXktdGV4dHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxufVxyXG5cclxuLm92ZXJsYXktdGV4dC10aGlyZHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tTWVkaXVtJztcclxufVxyXG4uY29udGludWUtdGV4dCB7XHJcbiAgbWFyZ2luOiAyZW07XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbi1jb250YWluZXJcclxue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ1JvYm90by1NZWRpdW0nO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY29udGludWUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBtYXJnaW46IDB2aCAxNXZ3O1xyXG4gIHBhZGRpbmc6IDAuNmVtXHJcbn1cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7IC8qIElFMTAgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKCAtLURBUkstQkxVRS1DT0xPUik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhciggLS1EQVJLLUJMVUUtQ09MT1IpO1xyXG59XHJcbi5pbnB1dC1ncm91cCB7XHJcbiBcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiBcclxufVxyXG5cclxuLmlucHV0LWZpZWxkOmhvdmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoIC0tREFSSy1CTFVFLUNPTE9SKTtcclxufVxyXG4uaHlwZXI6aG92ZXJcclxue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucG9saWN5XHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcclxufVxyXG5cclxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIuMzc1cmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuXHJcblxyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/template/template.component.ts":
  /*!************************************************!*\
    !*** ./src/app/template/template.component.ts ***!
    \************************************************/

  /*! exports provided: TemplateComponent */

  /***/
  function srcAppTemplateTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
      return TemplateComponent;
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
    /*! .././auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Home/Property/fillFormBuyer/fillFormBuyer.service */
    "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");

    var TemplateComponent =
    /*#__PURE__*/
    function () {
      function TemplateComponent(authService, afAuth, route, router, FormService) {
        _classCallCheck(this, TemplateComponent);

        this.authService = authService;
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.FormService = FormService;
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoggedIn = true;
        this.isLoading = false;
        this.newUser = false;
        this.model = {};
        this.loading = false;
        this.overlay = false;
      }

      _createClass(TemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this54.userData = user;
              localStorage.setItem("user", JSON.stringify(_this54.userData));

              _this54.LoggedIn();
            } else {
              localStorage.setItem("user", null);
              JSON.parse(localStorage.getItem("user"));

              _this54.LoggedOut();
            }
          });
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          this.user = JSON.parse(localStorage.getItem("user"));
          this.uid = this.user.uid;
          this.isLoggedIn = true;
        }
      }, {
        key: "LoggedOut",
        value: function LoggedOut() {
          this.isLoggedIn = false;
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this55 = this;

          this.isLoading = true;
          this.authService.FacebookAuth().then(function (data) {
            _this55.isLoading = false;
          });
        } //SignIn Google

      }, {
        key: "googleLogin",
        value: function googleLogin() {
          var _this56 = this;

          this.isLoading = true;
          this.authService.GoogleAuth().then(function (data) {
            _this56.isLoading = false;
          });
        } //Signup Google

      }, {
        key: "googleSignup",
        value: function googleSignup() {
          var _this57 = this;

          this.isLoading = true;
          this.authService.GoogleAuthSignup().then(function (data) {
            _this57.isLoading = false;
          });
        }
      }, {
        key: "signIn",
        value: function signIn(email, pass) {
          var _this58 = this;

          console.log(email + pass);
          this.isLoading = true;
          this.authService.SignIn(email, pass).then(function (data) {
            _this58.isLoading = false;
          });
        }
      }, {
        key: "NewUser",
        value: function NewUser() {
          this.newUser = true;
        }
      }, {
        key: "OldUser",
        value: function OldUser() {
          this.newUser = false;
        }
      }, {
        key: "close",
        value: function close() {
          this.newUser = false;
          this.newUser = false;
        }
      }, {
        key: "signUp",
        value: function signUp(displayName, email, pass) {
          var _this59 = this;

          console.log(displayName);
          this.overlay = true;
          this.authService.SignUp(email, pass).then(function (data) {
            _this59.isLoading = false;
            _this59.user.Name = displayName;
            _this59.user.DOB = null;
            _this59.user.Phone = null;
            _this59.return = _this59.FormService.createUserCustomer(_this59.user).then(function (data) {
              console.log(data);
            });
          });
        }
      }, {
        key: "userNew",
        value: function userNew() {
          this.user.DOB = null;
          this.user.Phone = null;
          this.user.name;
          this.return = this.FormService.createUserCustomer(this.user).then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "continueClose",
        value: function continueClose() {
          this.overlay = false;
        }
      }, {
        key: "keyDownFunction",
        value: function keyDownFunction(event) {
          if (event.keyCode == 13) {
            this.signUp(this.name, this.email, this.password);
          }
        }
      }, {
        key: "saves",
        value: function saves() {
          this.signIn(this.emails, this.passs);
        }
      }]);

      return TemplateComponent;
    }();

    TemplateComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]
      }];
    };

    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-template",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./template.component.css */
      "./src/app/template/template.component.css")).default]
    })], TemplateComponent);
    /***/
  },

  /***/
  "./src/app/terms-condition/terms-condition.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/terms-condition/terms-condition.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsConditionTermsConditionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWNvbmRpdGlvbi90ZXJtcy1jb25kaXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/terms-condition/terms-condition.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/terms-condition/terms-condition.component.ts ***!
    \**************************************************************/

  /*! exports provided: TermsConditionComponent */

  /***/
  function srcAppTermsConditionTermsConditionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsConditionComponent", function () {
      return TermsConditionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsConditionComponent =
    /*#__PURE__*/
    function () {
      function TermsConditionComponent() {
        _classCallCheck(this, TermsConditionComponent);
      }

      _createClass(TermsConditionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsConditionComponent;
    }();

    TermsConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms-condition',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-condition.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-condition/terms-condition.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-condition.component.css */
      "./src/app/terms-condition/terms-condition.component.css")).default]
    })], TermsConditionComponent);
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
    /*! K:\Angular Project\streethok\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map