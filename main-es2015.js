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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<div class=\"home_content_container\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"p-0\">\r\n    <div class=\"back\">\r\n      <div class=\"upper-back\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"upper-button\">\r\n    <button mat-raised-button class=\"home-button\" routerLink=\"/Property/buy\">Buy/Rent</button>\r\n    <button mat-raised-button class=\"home-button\" routerLink=\"/Property/sell\">Sell/Let</button>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <mat-card-title>Welcome to Nestimate!</mat-card-title>\r\n    <mat-card-content>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font\">\r\n        A platform that matches people and homes - both owners and buyers/tenants - based on a mutually agreed price.\r\n      </p>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font\">Free of any commitment or investment. </p>\r\n      <p class=\"text-center pt-2 pr-3 pl-3 home-text-font\">To answer an immediate need, or gently explore the\r\n        possibilities of dreams.</p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n\r\n  <mat-card>\r\n\r\n    <mat-card-title>How does it work ?</mat-card-title>\r\n  </mat-card>\r\n\r\n  <mat-card>\r\n    <div class=\"how_does_it_work_steps\">\r\n      <img src=\"/assets/Images/step.png\" class=\"step-mage\">\r\n      <p class=\"step-text\"><b>STEP 1</b><br> Property owners and seekers register their interest on our simple online\r\n        form.</p>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card>\r\n    <div class=\"how_does_it_work_steps\">\r\n      <img src=\"/assets/Images/step2.png\" class=\"step-mage\">\r\n      <p class=\"step-text\"><b>STEP 2</b><br>Listed properties are matched with offers created by home seekers.\r\n        form.</p>\r\n    </div> \r\n  </mat-card>\r\n  <mat-card>\r\n    <div class=\"how_does_it_work_steps\">\r\n      <img src=\"/assets/Images/step3.png\" class=\"step-mage\">\r\n      <p class=\"step-text\"><b>STEP 3</b><br>Once a mutual match has been made, a local estate agent will sort all the formalities.</p>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n<app-template></app-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group [(selectedIndex)]=\"activeTab\">\r\n  <mat-tab label=\"HOME SEEKERS\">\r\n    <mat-card>\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text\">\r\n          Search our database of registered sellers or landlords <b>who are not actively on the market</b>,\r\n           but might consider selling or renting their property if the right offer came along. </p>\r\n      </div>\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Enter the estimated ‘best price’ for you and see what’s possible. </li>\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Start by registering your details here.</li>\r\n\r\n        </ul>\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"own-property-image\">\r\n        <p class=\"own-property-image-text pr-3 pl-3 pb-2\">Register a 'feeler'\r\n          for a property\r\n          in your desired area</p>\r\n      </div>\r\n      <div class=\"button-own-a-property\">\r\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-2\" routerLink=\"/fillFormBuyer\">MAKE AN\r\n          offer</button>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <img mat-card-image src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\r\n      <p class=\"own-property-text-home-worth pt-2\">How much is your\r\n        home worth?</p>\r\n      <p class=\"own-property-text-home-worth-ans\">Get a free,\r\n        no-obligation valuation of your home from\r\n        one of our specially-selected local experts.</p>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2\">\r\n          Blog\r\n        </p>\r\n        <div class=\"own-property-blogs-content\">\r\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n            Price\r\n            Index</p>\r\n          <p class=\"own-property-blogs-content-c2\">Annual house price\r\n            growth in the UK’s most buoyant city has fallen below 5% for\r\n            the first time since 2012.</p>\r\n        </div>\r\n\r\n        <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n          <img src=\"assets/Images/asset-2.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1-2\">Housebuilding\r\n            levels fall to\r\n            three</p>\r\n          <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n            properties were\r\n            started in the year to the end of June, significantly below\r\n            the Government’s target of 300,000.</p>\r\n\r\n\r\n        </div>\r\n        <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n          <img src=\"assets/Images/asset-3.png\" class=\"float-left\r\n                  own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1-2\">Many first-time\r\n            buyers </p>\r\n          <p class=\"own-property-blogs-content-c2-2\">More than half of\r\n            people taking their\r\n            first step on the property ladder think\r\n            they can borrow up to 10 times their income.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-blogs-content-2\">\r\n        <img mat-card-image src=\"assets/Images/buying.png\">\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n  </mat-tab>\r\n\r\n\r\n\r\n  <mat-tab label=\"HOME OWNERS\">\r\n    <mat-card>\r\n      <div class=\"own-porpety-text\">\r\n        <p class=\"text-justify owna-property-text\">Might you sell or let your property if offered the right price or rent?\r\n          .\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"own-property-list\">\r\n        <ul class=\"own-property-list-style\">\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Register your home here and see what’s possible</li>\r\n          <!-- <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\">Free service for\r\n            sellers</li>\r\n\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> You get offers\r\n            from buyers who are interested in\r\n            your locality. For your type of property</li>\r\n\r\n          <li><img src=\"assets/Images/dbbf56f08eab6855eff29ba53302404e-removebg-preview.png\"> Only reveal your\r\n            details to buyers you authorise</li> -->\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"Looking-property-image\">\r\n        <p class=\"looking-property-image-text pr-3 pl-3\">Register your property with\r\n          Streethook</p>\r\n      </div>\r\n      <div class=\"button-own-a-property\">\r\n        <button type=\"button\" class=\"btn btn-own-property-offer mt-4 mb-4\" routerLink=\"/fillformseller\">LIST PROPERTY\r\n          NOW</button>\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n    <mat-card>\r\n      <div class=\"own-property-home-worth mt-4 pb-2 mb-2\">\r\n        <img src=\"assets/Images/homepage-valuation-1.png\" alt=\"\" class=\"home-page-valuation\">\r\n        <p class=\"own-property-text-home-worth pt-2\">How much is your\r\n          home worth?</p>\r\n        <p class=\"own-property-text-home-worth-ans\">Get a free,\r\n          no-obligation valuation of your home from\r\n          one of our specially-selected local experts.</p>\r\n\r\n      </div>\r\n    </mat-card>\r\n    <mat-card>\r\n      <div class=\"own-property-blog mt-3\">\r\n        <p class=\"own-property-blog-heading pt-2\">\r\n          Blog\r\n        </p>\r\n        <div class=\"own-property-blogs-content\">\r\n          <img src=\"assets/Images/asset-1.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n          <p class=\"own-property-blogs-content-c1\"> Zoopla Cities House\r\n            Price\r\n            Index</p>\r\n          <p class=\"own-property-blogs-content-c2\">Annual house price\r\n            growth in the UK’s most buoyant city has fallen below 5% for\r\n            the first time since 2012.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"own-property-blogs-content-2 pt-3\">\r\n        <img src=\"assets/Images/asset-2.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n        <p class=\"own-property-blogs-content-c1-2\">Housebuilding\r\n          levels fall to\r\n          three</p>\r\n        <p class=\"own-property-blogs-content-c2-2\">Less than 161,000\r\n          properties were\r\n          started in the year to the end of June, significantly below\r\n          the Government’s target of 300,000.</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"own-property-blogs-content-2 pt-3\">\r\n\r\n        <img src=\"assets/Images/asset-3.png\" class=\"float-left\r\n                    own-property-blog-image\">\r\n        <p class=\"own-property-blogs-content-c1-2\">Many first-time\r\n          buyers </p>\r\n        <p class=\"own-property-blogs-content-c2-2\">More than half of\r\n          people taking their\r\n          first step on the property ladder think\r\n          they can borrow up to 10 times their income.</p>\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n    <mat-card>\r\n      <!-- <hr class=\"horizontal-line pt-3\"> -->\r\n      <div class=\"own-property-blogs-content-2\">\r\n\r\n        <img src=\"assets/Images/buying.png\" class=\"own-property-last-image\">\r\n        <p class=\"own-property-last-image-text\">\r\n          Buying property guides<br>\r\n\r\n          <span class=\"own-property-last-line\"> Get the latest advice\r\n            and tips on buying</span>\r\n        </p>\r\n\r\n      </div>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\r\n  Thank You,Your Details Have Been Stored\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\"\r\n    routerLink=\"/buyerMatchlisting\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\r\n  \r\n\r\n  <div class=\"thanku-section\">\r\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\r\n      and we will share your property details with all the\r\n      interested buyers in you area</p>\r\n  </div>\r\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">{{matchedProperties.length}}</span> Matches</p>\r\n  <div *ngIf=\"matchedProperties.length\">\r\n  \r\n    <section id=\"matchproperties\">\r\n      <div class=\"match-section\" routerLink='/buyerSelectedPropertyDetail/\r\n    {{property.Lookingpostcode}}/\r\n    {{property.Lookingstate}}/\r\n    {{property.LookingTown}}/\r\n    {{property.norooms}}/\r\n    {{property.PropertyCondition}}/\r\n    {{property.MaxAmount}}/\r\n    {{property.LookingAddress}}/\r\n    {{property.ownership}}/\r\n    {{property.PropertyType}}/\r\n    {{property.features}}/\r\n    {{property.Firstname}}/\r\n    {{property.Lastname}}/\r\n    {{property.Email}}/\r\n    {{property.DOB}}/\r\n    {{property.UserId}}/\r\n    {{property.MinAmount}}\r\n    ' *ngFor=\"let property of matchedProperties\">\r\n        <mat-card class=\"mat-card-matches\">\r\n          <img *ngIf=\"property.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Terrace House'\" src=\"assets/Images/Terraced.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images float-left\">\r\n          <div class=\"match-content\">\r\n            <p><span class=\"discription-p\">Streetname:{{property.LookingAddress}}</span><br>\r\n              <span class=\"discription-p\"> No. of Rooms:{{property.norooms}}</span><br>\r\n              <span class=\"discription-p property-type-color\">Type of Property:\r\n                {{property.PropertyType}}</span><br>\r\n              <span class=\"discription-p\">Post Code: {{property.Lookingpostcode }}</span></p>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div *ngIf=\"unmatchedProperties.length\">\r\n    <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">{{unmatchedProperties.length}}</span> Other Properties you may be interested in</p>\r\n \r\n    <section id=\"propertyinlondon\">\r\n      <div class=\"match-section\" routerLink='/buyerSelectedPropertyDetail/{{property.detail.Lookingpostcode}}/\r\n    {{property.detail.Lookingstate}}/\r\n    {{property.detail.LookingTown}}/\r\n    {{property.detail.norooms}}/\r\n    {{property.detail.PropertyCondition}}/\r\n    {{property.detail.MaxAmount}}/\r\n    {{property.detail.LookingAddress}}/\r\n    {{property.detail.ownership}}/\r\n    {{property.detail.PropertyType}}/\r\n    {{property.detail.features}}/\r\n    {{property.detail.Firstname}}/\r\n{{property.detail.Lastname}}/\r\n{{property.detail.Email}}/\r\n{{property.detail.DOB}}/\r\n{{property.detail.UserId}}/\r\n{{property.detail.MinAmount}}\r\n    ' *ngFor=\"let property of unmatchedProperties\">\r\n        <mat-card class=\"mat-card-matches\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Terrace House'\" src=\"assets/Images/Terraced.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Land'\" src=\"assets/Images/Land.svg\"\r\n            class=\"match-images float-left\">\r\n          <div class=\"match-content\">\r\n            <p><span class=\"discription-p\">Streetname:{{property.detail.LookingAddress}}</span><br>\r\n              <span class=\"discription-p\"> No. of Rooms:{{property.detail.norooms}}</span><br>\r\n              <span class=\"discription-p property-type-color\">Type of Property:\r\n                {{property.detail.PropertyType}}</span><br>\r\n              <span class=\"discription-p\">Post Code: {{property.detail.Lookingpostcode }}</span><br>\r\n              <span *ngIf=\"property.distance\" class=\"discription-p\">Distance: {{property.distance | number:'1.1-1'}}\r\n                (kms)</span></p>\r\n          </div>\r\n\r\n\r\n\r\n        </mat-card>\r\n\r\n\r\n\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3\"></h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\">\r\n      <img *ngIf=\"PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images\">\r\n      <img *ngIf=\"PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images  \">\r\n    </div>\r\n\r\n\r\n    <div class=\"streetname\">\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Pincode</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{Lookingpostcode}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Country</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{Lookingstate}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Address</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{LookingTown}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">No of Rooms</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{norooms}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Property Condition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{PropertyCondition}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Price Range(offer)</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{MaxAmount}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Streetname</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{LookingAddress}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Ownership</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{ownership}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Town Name</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{LookingTown}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Property Type</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{PropertyType}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Applicable Feature</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{features}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n\r\n\r\n    <div class=\"selected-button m-3\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"submitForm()\">Express Interest</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isBuyer\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Name:\r\n            <span class=\"output\">&nbsp;{{ listingBuyer.Firstname }} {{ listingBuyer.Lastname }}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{listingBuyer.Email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Date of Birth:<span\r\n              class=\"output\">&nbsp;{{listingBuyer.DOB | date :'longDate'}} </span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Chain status:<span class=\"output\">&nbsp;{{listingBuyer.ChainStatus}}</span>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Financial Position:<span\r\n              class=\"output\">&nbsp;{{listingBuyer.FinancialPosition}}</span></td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Property Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Type:\r\n            <span class=\"output\">&nbsp;{{listingBuyer.Propertytype}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Search Radius:<span class=\"output\">&nbsp;{{listingBuyer.SearchRadius}}</span>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Price Range:<span class=\"output\">&nbsp;{{listingBuyer.PriceRange}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Offer validity:<span class=\"output\">&nbsp;{{listingBuyer.Validity}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Condition:<span class=\"output\">&nbsp;{{listingBuyer.Condition}}</span>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Operational Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Type:\r\n            <span class=\"output\">&nbsp;{{listingBuyer.Type}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Position:<span class=\"output\">&nbsp; {{listingBuyer.Position}}</span></td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <mat-card class=\"mt-3\">\r\n\r\n    <section class=\"example-section property-con-form\">\r\n\r\n      <mat-checkbox class=\"example-margin\" value=\"Email\">Email</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" value=\"SMS\">SMS</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" value=\"Post\">Post</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" value=\"All\">Email,SMS and Post from acrefully selected third port\r\n      </mat-checkbox>\r\n      <label for=\"text\" class=\" \">By clicking the sms box,you agreeing to recieve\"</label>\r\n      <label for=\"text\" class=\" \">By creating your account you agree to our Terms & Find out more,Please read our\r\n        Privacy Notice </label>\r\n    </section>\r\n  </mat-card>\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" class=\"btn btn-back\" (click)=\"backClicked()\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n  <mat-tab-group #matgroup class=\"form-tab-conatiner\" [selectedIndex]=\"selectedIndex\">\r\n    <mat-tab label=\"Personal Details \" class=\"tabs-align-padding\">\r\n      <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n        <mat-card class=\"card-margin\">\r\n          <mat-card-title class=\"mat_card_title\">\r\n            <p class=\"forms-heading\">Personal Details</p>\r\n          </mat-card-title>\r\n          <p class=\"forms-star\">*required</p>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"card-margin\">\r\n          <mat-form-field>\r\n            <mat-label>Title*</mat-label>\r\n            <mat-select name=\"title\" [(ngModel)]=\"listingBuyer.title\" class=\"drop-down-list\">\r\n              <mat-option value=\"Mr\">Mr</mat-option>\r\n              <mat-option value=\"Ms\">Ms</mat-option>\r\n              <mat-option value=\"Mrs\">Mrs</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"First Name\" [formControl]=\"firstnameFormControl\" required\r\n              [(ngModel)]=\"listingBuyer.Firstname\" name=\"First\" class=\"mat-mail-input\">\r\n            <mat-error\r\n              *ngIf=\"firstnameFormControl.hasError('First Name') && !firstnameFormControl.hasError('required')\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"firstnameFormControl.hasError('required')\">\r\n              FirstName is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"LastName\" [formControl]=\"lastnameFormControl\" required\r\n              [(ngModel)]=\"listingBuyer.Lastname\" name=\"Last\" class=\"mat-mail-input\">\r\n\r\n            <mat-dialog-content\r\n              *ngIf=\"lastnameFormControl.hasError('LastName') && !lastnameFormControl.hasError('required')\">\r\n              <p>\r\n                Please enter a valid email address\r\n              </p>\r\n            </mat-dialog-content>\r\n\r\n            <!-- <mat-error>\r\n\r\n              </mat-error>\r\n              <mat-error *ngIf=\"lastnameFormControl.hasError('required')\">\r\n                LastName is <strong>required</strong>\r\n              </mat-error> -->\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n\r\n            <input matInput *ngIf=\"user\" placeholder=\"Email\" [formControl]=\"emailFormControl\"\r\n              [(ngModel)]=\"listingBuyer.Email\" name=\"Email\" class=\"mat-mail-input\">\r\n            <!-- <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n              Email is <strong>required</strong> \r\n            </mat-error>-->\r\n          </mat-form-field>\r\n\r\n\r\n\r\n\r\n          <!--Date Of Birth Field-->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"DD/MM/YY*\" [(ngModel)]=\"listingBuyer.DOB\" name=\"DOB\"\r\n              class=\"mat-mail-input\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n          <!--Date Of Birth Field End-->\r\n\r\n\r\n          <!--Phone Number field-->\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"listingBuyer.phonenumber\" name=\"phonenumber\"\r\n              class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n          <p class=\"Label-notes\">*Note:Your details will not be shared with any third party</p>\r\n          <!--Phone Number field-->\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Chain Status*</mat-label>\r\n            <mat-select name=\"ChainStatus\" [(ngModel)]=\"listingBuyer.ChainStatus\" value=\"ChainStatus\"\r\n              class=\"example-full-width\">\r\n              <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\r\n              <mat-option value=\"In Chain(Sellinng to buy)\">In Chain(Sellinng to buy)</mat-option>\r\n              <mat-option value=\"Chain-Free\">Chain-Free</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </mat-card>\r\n\r\n        <div class=\"button-next\">\r\n          <a (click)=\"selectTab(1, 0)\" class=\" btn btn-primary btnNext btn-next\">Next</a>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Property Details\" class=\"tabs-align-padding\">\r\n      <div class=\"tabs-align-padding\">\r\n\r\n        <mat-card class=\"card-margin\">\r\n          <mat-card-title class=\"mat_card_title\">Where you currently live:</mat-card-title>\r\n\r\n          <p>Search by Postcode</p>\r\n\r\n          <mat-option class=\"postcode-background\" style=\"background-color: #F5F5F5;\">\r\n            <input [formControl]=\"autoCompleteControlCurrent\" type=\"text\" placeholder=\"Enter Postcode\"\r\n              aria-label=\"Post-Code\" matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"listingBuyer.Currentpostcode\">\r\n            <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\"\r\n              (optionSelected)='getPost($event.option.value)'>\r\n              <mat-option *ngFor=\"let item of addressianAutoCompleteCurrent$ | async; let index=index\" [value]=\"item\">\r\n                <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                </span> | <span>{{ item.citytown | titlecase}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-option>\r\n\r\n          <p>Search by Address</p>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" name=\"CurrentAddress\"\r\n              class=\"mat-mail-input\" [(ngModel)]=\"listingBuyer.CurrentAddress\">\r\n            <mat-error *ngIf=\"AddressFormControl.hasError('Address') && !AddressFormControl.hasError('required')\">\r\n              Please enter a valid address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"AddressFormControl.hasError('required')\">\r\n              Address is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Town/City\" [(ngModel)]=\"listingBuyer.CurrentTown\" name=\"CurrentTowncity\"\r\n              class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"County\" required [(ngModel)]=\"listingBuyer.Currentstate\" name=\"state\"\r\n              class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n\r\n        </mat-card>\r\n\r\n        <mat-card class=\"card-margin\">\r\n\r\n          <mat-card-title class=\"mat_card_title\">Where are looking for Property:</mat-card-title>\r\n          <p class=\"mt-4\">Search by Postcode</p>\r\n          <mat-option style=\"background-color: #F5F5F5;\">\r\n            <input [formControl]=\"autoCompleteControlLooking\" type=\"text\" placeholder=\"Enter Postcode\"\r\n              aria-label=\"Post Code\" matInput [matAutocomplete]=\"autolooking\"\r\n              [(ngModel)]=\"listingBuyer.Lookingpostcode\">\r\n            <mat-autocomplete autoActivesecondOption #autolooking=\"matAutocomplete\"\r\n              (optionSelected)='getPosts($event.option.value)'>\r\n              <mat-option *ngFor=\"let item of addressianAutoCompleteLooking$ | async; let index=index\" [value]=\"item\">\r\n                <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                </span> | <span>{{ item.citytown | titlecase}}</span>\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-option>\r\n\r\n\r\n\r\n          <p class=\"mt-4\">Search by Address</p>\r\n          <mat-form-field class=\"example-full-width mb-3\">\r\n            <input matInput placeholder=\"Street Name\" [(ngModel)]=\"listingBuyer.LookingStreetname\"\r\n              name=\"LookingTowncity\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width mb-3\">\r\n            <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\"\r\n              [(ngModel)]=\"listingBuyer.LookingTown\" name=\"LookingTowncity\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"County\" [formControl]=\"stateFormControl\" required\r\n              [(ngModel)]=\"listingBuyer.Lookingstate\" name=\"Lookingstate\" class=\"mat-mail-input\">\r\n          </mat-form-field>\r\n        </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-card class=\"card-margin\">\r\n          <div id=\"finanacial\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Financial Position*</mat-label>\r\n              <mat-select name=\"FinancialPosition\" [(ngModel)]=\"listingBuyer.FinancialPosition\"\r\n                value=\"FinancialPosition\" class=\"example-full-width\">\r\n                <mat-option value=\"Mortgage Free\" name=\"Mortgage Free\">Mortgage Free</mat-option>\r\n                <mat-option value=\"Mortgage to be Arranged\" name=\"Mortgage to be Arranged\">Mortgage to be Arranged</mat-option>\r\n                <mat-option value=\"Mortgage Arrange\" name=\"Mortgage Arrange\">Mortgage Arrange</mat-option>\r\n                <mat-option value=\"Cash Buyer\" name=\"Cash Buyer\">Cash Buyer</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label class=\"mb-2\">Search Radius (Miles)</mat-label>\r\n            <mat-select [(ngModel)]=\"listingBuyer.SearchRadius\" name=\"SearchRadius\" value=\"SearchRadius\"\r\n              class=\"example-full-width\">\r\n              <mat-option value=\"This postcode only\">This postcode only</mat-option>\r\n              <mat-option value=\"0.25\">Within ¼ mile</mat-option>\r\n              <mat-option value=\"0.5\">Within ½ mile</mat-option>\r\n              <mat-option value=\"1.0\">Within 1 mile</mat-option>\r\n              <mat-option value=\"3.0\">Within 3 miles</mat-option>\r\n              <mat-option value=\"5.0\">Within 5 miles</mat-option>\r\n              <mat-option value=\"10.0\">Within 10 miles</mat-option>\r\n              <mat-option value=\"15.0\">Within 15 miles</mat-option>\r\n              <mat-option value=\"20.0\">Within 20 miles</mat-option>\r\n              <mat-option value=\"30.0\">Within 30 miles</mat-option>\r\n              <mat-option value=\"40.0\">Within 40 miles</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <div id=\"Property-type\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <mat-label>Property type*</mat-label>\r\n              <mat-select name=\"Propertytype\" [(ngModel)]=\"listingBuyer.PropertyType\" value=\"Propertytype\"\r\n                class=\"example-full-width\">\r\n                <mat-option value=\"Flat\">Flat</mat-option>\r\n                <mat-option value=\"Terrace House\">Terrace House</mat-option>\r\n                <mat-option value=\"Semi-detached\">Semi-detached</mat-option>\r\n                <mat-option value=\"Park Home\">Park Home</mat-option>\r\n                <mat-option value=\"Land\">Land</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <!--Min Max Amount-->\r\n          <label>Price Range (Offer) *</label>\r\n          <div class=\"price-selection\">\r\n            <mat-form-field class=\"filed-width\">\r\n              <mat-label>MinAmount</mat-label>\r\n              <mat-select [(value)]=\"min\" name=\"MinAmount\" [(ngModel)]=\"listingBuyer.MinAmount\">\r\n                <mat-option value=\"50000\">50,000</mat-option>\r\n                <mat-option value=\"60000\">60,000</mat-option>\r\n                <mat-option value=\"70000\">70,000</mat-option>\r\n                <mat-option value=\"80000\">80,000</mat-option>\r\n                <mat-option value=\"90000\">90,000</mat-option>\r\n                <mat-option value=\"100000\">100,000</mat-option>\r\n                <mat-option value=\"110000\">110,000</mat-option>\r\n                <mat-option value=\"120000\">120,000</mat-option>\r\n                <mat-option value=\"125000\">125,000</mat-option>\r\n                <mat-option value=\"130000\">130,000</mat-option>\r\n                <mat-option value=\"140000\">140,000</mat-option>\r\n                <mat-option value=\"150000\">150,000</mat-option>\r\n                <mat-option value=\"160000\">160,000</mat-option>\r\n                <mat-option value=\"170000\">170,000</mat-option>\r\n                <mat-option value=\"175000\">175,000</mat-option>\r\n                <mat-option value=\"180000\">180,000</mat-option>\r\n                <mat-option value=\"190000\">190,000</mat-option>\r\n                <mat-option value=\"200000\">200,000</mat-option>\r\n                <mat-option value=\"210000\">210,000</mat-option>\r\n                <mat-option value=\"220000\">220,000</mat-option>\r\n                <mat-option value=\"230000\">230,000</mat-option>\r\n                <mat-option value=\"240000\">240,000</mat-option>\r\n                <mat-option value=\"250000\">250,000</mat-option>\r\n                <mat-option value=\"260000\">260,000</mat-option>\r\n                <mat-option value=\"270000\">270,000</mat-option>\r\n                <mat-option value=\"280000\">280,000</mat-option>\r\n                <mat-option value=\"290000\">290,000</mat-option>\r\n                <mat-option value=\"300000\">300,000</mat-option>\r\n                <mat-option value=\"325000\">325,000</mat-option>\r\n                <mat-option value=\"350000\">350,000</mat-option>\r\n                <mat-option value=\"375000\">375,000</mat-option>\r\n                <mat-option value=\"400000\">400,000</mat-option>\r\n                <mat-option value=\"425000\">425,000</mat-option>\r\n                <mat-option value=\"450000\">450,000</mat-option>\r\n                <mat-option value=\"475000\">475,000</mat-option>\r\n                <mat-option value=\"500000\">500,000</mat-option>\r\n                <mat-option value=\"525000\">525,000</mat-option>\r\n                <mat-option value=\"550000\">550,000</mat-option>\r\n                <mat-option value=\"575000\">575,000</mat-option>\r\n                <mat-option value=\"600000\">600,000</mat-option>\r\n                <mat-option value=\"625000\">625,000</mat-option>\r\n                <mat-option value=\"650000\">650,000</mat-option>\r\n                <mat-option value=\"675000\">675,000</mat-option>\r\n                <mat-option value=\"700000\">700,000</mat-option>\r\n                <mat-option value=\"725000\">725,000</mat-option>\r\n                <mat-option value=\"750000\">750,000</mat-option>\r\n                <mat-option value=\"775000\">775,000</mat-option>\r\n                <mat-option value=\"800000\">800,000</mat-option>\r\n                <mat-option value=\"825000\">825,000</mat-option>\r\n                <mat-option value=\"850000\">850,000</mat-option>\r\n                <mat-option value=\"875000\">875,000</mat-option>\r\n                <mat-option value=\"900000\">900,000</mat-option>\r\n                <mat-option value=\"925000\">925,000</mat-option>\r\n                <mat-option value=\"950000\">950,000</mat-option>\r\n                <mat-option value=\"975000\">975,000</mat-option>\r\n                <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                <mat-option value=\"\">No min</mat-option>\r\n\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"filed-width\">\r\n              <mat-label>MaxAmount</mat-label>\r\n              <mat-select [(value)]=\"max\" name=\"MaxAmount\" [(ngModel)]=\"listingBuyer.MaxAmount\">\r\n                <mat-option value=\"50000\">50,000</mat-option>\r\n                <mat-option value=\"60000\">60,000</mat-option>\r\n                <mat-option value=\"70000\">70,000</mat-option>\r\n                <mat-option value=\"80000\">80,000</mat-option>\r\n                <mat-option value=\"90000\">90,000</mat-option>\r\n                <mat-option value=\"100000\">100,000</mat-option>\r\n                <mat-option value=\"110000\">110,000</mat-option>\r\n                <mat-option value=\"120000\">120,000</mat-option>\r\n                <mat-option value=\"125000\">125,000</mat-option>\r\n                <mat-option value=\"130000\">130,000</mat-option>\r\n                <mat-option value=\"140000\">140,000</mat-option>\r\n                <mat-option value=\"150000\">150,000</mat-option>\r\n                <mat-option value=\"160000\">160,000</mat-option>\r\n                <mat-option value=\"170000\">170,000</mat-option>\r\n                <mat-option value=\"175000\">175,000</mat-option>\r\n                <mat-option value=\"180000\">180,000</mat-option>\r\n                <mat-option value=\"190000\">190,000</mat-option>\r\n                <mat-option value=\"200000\">200,000</mat-option>\r\n                <mat-option value=\"210000\">210,000</mat-option>\r\n                <mat-option value=\"220000\">220,000</mat-option>\r\n                <mat-option value=\"230000\">230,000</mat-option>\r\n                <mat-option value=\"240000\">240,000</mat-option>\r\n                <mat-option value=\"250000\">250,000</mat-option>\r\n                <mat-option value=\"260000\">260,000</mat-option>\r\n                <mat-option value=\"270000\">270,000</mat-option>\r\n                <mat-option value=\"280000\">280,000</mat-option>\r\n                <mat-option value=\"290000\">290,000</mat-option>\r\n                <mat-option value=\"300000\">300,000</mat-option>\r\n                <mat-option value=\"325000\">325,000</mat-option>\r\n                <mat-option value=\"350000\">350,000</mat-option>\r\n                <mat-option value=\"375000\">375,000</mat-option>\r\n                <mat-option value=\"400000\">400,000</mat-option>\r\n                <mat-option value=\"425000\">425,000</mat-option>\r\n                <mat-option value=\"450000\">450,000</mat-option>\r\n                <mat-option value=\"475000\">475,000</mat-option>\r\n                <mat-option value=\"500000\">500,000</mat-option>\r\n                <mat-option value=\"525000\">525,000</mat-option>\r\n                <mat-option value=\"550000\">550,000</mat-option>\r\n                <mat-option value=\"575000\">575,000</mat-option>\r\n                <mat-option value=\"600000\">600,000</mat-option>\r\n                <mat-option value=\"625000\">625,000</mat-option>\r\n                <mat-option value=\"650000\">650,000</mat-option>\r\n                <mat-option value=\"675000\">675,000</mat-option>\r\n                <mat-option value=\"700000\">700,000</mat-option>\r\n                <mat-option value=\"725000\">725,000</mat-option>\r\n                <mat-option value=\"750000\">750,000</mat-option>\r\n                <mat-option value=\"775000\">775,000</mat-option>\r\n                <mat-option value=\"800000\">800,000</mat-option>\r\n                <mat-option value=\"825000\">825,000</mat-option>\r\n                <mat-option value=\"850000\">850,000</mat-option>\r\n                <mat-option value=\"875000\">875,000</mat-option>\r\n                <mat-option value=\"900000\">900,000</mat-option>\r\n                <mat-option value=\"925000\">925,000</mat-option>\r\n                <mat-option value=\"950000\">950,000</mat-option>\r\n                <mat-option value=\"975000\">975,000</mat-option>\r\n                <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                <mat-option value=\"\">No max</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!--Min Max Amount End-->\r\n\r\n\r\n          <!--Offer validity Group-->\r\n\r\n          <mat-radio-group aria-label=\"Select an option\" id=\"name \" name=\"Validity\" [(ngModel)]=\"listingBuyer.Validity\"\r\n            value=\"Validity\">\r\n            <label>Offer Validity:</label><br>\r\n            <div class=\"radio-button-align\">\r\n              <mat-radio-button value=\"1\" class=\"mr-2\">1 Month</mat-radio-button>\r\n              <mat-radio-button value=\"3\">3 Months</mat-radio-button>\r\n              <mat-radio-button value=\"6\">6 Months</mat-radio-button>\r\n              <mat-radio-button value=\"Indefinite\">Indefinite\r\n              </mat-radio-button>\r\n            </div>\r\n          </mat-radio-group>\r\n          <p class=\"Label-notes\">*Note: Your offer will automatically expire after the given time period</p>\r\n          <!--Offer validity Group End-->\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Select Condition</mat-label>\r\n            <mat-select placeholder=\"Select Condition\" [formControl]=\"Condition\" multiple\r\n              [(ngModel)]=\"listingBuyer.Conditions\" #sl class=\"mat-select-edit\">\r\n\r\n              <div class=\"select-constion\">\r\n                <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"sl.close()\">\r\n              </div>\r\n              <mat-option *ngFor=\"let Conditions of ConditionsList\" [value]=\"Conditions\">{{Conditions}}</mat-option>\r\n\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n        </mat-card>\r\n        <div class=\"button-next-tab2\">\r\n          <a (click)=\"selectTab(0, 1)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n          <a (click)=\"selectTab(2, 1)\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n\r\n\r\n\r\n    <mat-tab label=\"Optional Details\">\r\n      <div class=\"tabs-align-padding\">\r\n        <mat-card class=\"card-margin\">\r\n          <mat-card-title class=\"mat_card_title\">\r\n            <p class=\"forms-heading\">Optional Details</p>\r\n          </mat-card-title>\r\n        </mat-card>\r\n        <mat-card class=\"card-margin\">\r\n          <mat-form-field class=\"example-full-width mt-4\">\r\n            <mat-label>Type*</mat-label>\r\n            <mat-select  name=\"Type\" [(ngModel)]=\"listingBuyer.Type\" value=\"Type\" class=\"example-full-width\">\r\n              <mat-option value=\"Buying to Live\">Buying to Live</mat-option>\r\n              <mat-option value=\"Buying as Investment\">Buying as Investment</mat-option>\r\n              <mat-option value=\"Buying to Let\" >Buying to Let</mat-option>\r\n            </mat-select>\r\n   \r\n            <mat-label>Position*</mat-label>\r\n            <mat-select  name=\"Position\" [(ngModel)]=\"listingBuyer.Position\" value=\"Position\" class=\"example-full-width\">\r\n              <mat-option value=\"Cash Buyer\" >Cash Buyer</mat-option>\r\n              <mat-option value=\"First Time Buyer\">First Time Buyer</mat-option>\r\n              <mat-option value=\"Selling To Move\" >Selling To Move</mat-option>\r\n              <mat-option value=\"Mortgage To be Arranged\" >Mortgage To be Arranged</mat-option>\r\n              <mat-option value=\"Mortgage Arranged\">Mortgage Arranged</mat-option>\r\n              <mat-option value=\"Mortgage Free\" >Mortgage Free</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </mat-card>\r\n        <mat-card class=\"card-margin\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Tell us bit about yourself</mat-label>\r\n            <textarea matInput class=\"text-field-height\" [(ngModel)]=\"listingBuyer.otherInfo\" name=\"other-info\"></textarea>\r\n          </mat-form-field>\r\n        </mat-card>\r\n        <div class=\"button-next-tab2\">\r\n          <a (click)=\"selectTab(1, 2)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n          <button class=\"btn btn-primary btnNext btn-next\" type=\"submit\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\r\n  Thank You,Your Details Have Been Stored\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"center\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\" routerLink=\"/sellerMatchlisting\">{{cancelButtonText}}</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\r\n\r\n<div *ngIf=\"isBuyer\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container confirm-main-container\">\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Personal Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Name:\r\n            <span class=\"output\">&nbsp;{{listingSeller.Firstname}} {{listingSeller.Lastname}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Email Address:<span class=\"output\">&nbsp;{{listingSeller.Email}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Date of Birth:<span class=\"output\">&nbsp;{{listingSeller.DOB | date :'longDate'}}</span></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n  <div class=\"confirm-first-container mt-3\">\r\n    <p class=\"confirm-page-heading\">Property Details</p>\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Type:\r\n            <span class=\"output\">&nbsp;{{listingSeller.PropertyType}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">No of Rooms:<span class=\"output\">&nbsp; {{listingSeller.norooms}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Expected Amount (Offer):<span\r\n              class=\"output\">&nbsp;{{listingSeller.ExpectedAmount}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Ownership:<span class=\"output\">&nbsp;{{listingSeller.ownership}}</span></td>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td class=\"details-p-headings\">Property Condition:<span\r\n              class=\"output\">&nbsp;{{listingSeller.PropertyCondition}}</span></td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"details-p-headings\"> Applicable Features:<span\r\n              class=\"output\">&nbsp;{{listingSeller.ApplicableFeatures}}</span></td>\r\n\r\n        </tr>\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  \r\n  <mat-card class=\"mt-3\">\r\n  <section class=\"example-section property-con-form\">\r\n\r\n    <mat-checkbox class=\"example-margin\" value=\"Email\">Email</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" value=\"SMS\">SMS</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" value=\"Post\">Post</mat-checkbox>\r\n    <mat-checkbox class=\"example-margin\" value=\"All\">Email,SMS and Post from acrefully selected third port</mat-checkbox>\r\n    <label for=\"text\" class=\" \">By clicking the sms box,you agreeing to recieve\"</label>\r\n    <label for=\"text\" class=\" \">By creating your account you agree to our Terms  & Find out more,Please read our Privacy Notice </label>\r\n  </section>\r\n</mat-card>\r\n\r\n  <div class=\"endind-button mt-5\">\r\n    <button type=\"button\" class=\"btn btn-back\" (click)=\"backClicked()\">Back</button>\r\n    <button type=\"button\" class=\"btn btn-next\" (click)=\"submitForm()\">Submit</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\r\n \r\n\r\n  <div class=\"thanku-section\">\r\n    <p class=\"thanku-p-section\">Thank you for registering. You are now in our database\r\n      and we will share your property details with all the\r\n      interested buyers in you area</p>\r\n  </div>\r\n  <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">{{noOfMatches}}</span> Matches</p>\r\n  <div >\r\n    <section class=\"\" id=\"matchproperties\" *ngIf=\"matchedProperties.length\">\r\n            <div class=\"match-section\" routerLink='/SellerSelectedProperty/{{property.LookingStreetname}}/{{property.Lookingpostcode}}/{{property.PropertyType}}/{{property.Conditions}}/{{property.ChainStatus}}/\r\n    {{property.Firstname}}/ {{property.Lastname}}/\r\n{{property.Email}}/\r\n{{property.DOB}}/\r\n{{property.FinancialPosition}}/\r\n{{property.SearchRadius}}/\r\n{{property.PriceRange}}/\r\n{{property.Validity}}/\r\n{{property.Type}}/\r\n {{property.Position}}/\r\n {{property.UserId}}/\r\n {{property.norooms}}' *ngFor=\"let property of matchedProperties\">\r\n        <mat-card class=\"mat-card-matches\">\r\n          <img *ngIf=\"property.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Terrace House'\" src=\"assets/Images/Terraced.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images float-left\">\r\n          <div class=\"match-content\">\r\n            <p>\r\n              <span class=\"discription-p\">Street Name:{{property.LookingStreetname}}</span><br>\r\n              <span class=\"discription-p\">Position:{{property.Position}}</span><br>\r\n              <span class=\"discription-p\"> No of bedrooms:{{property.norooms}}</span><br>\r\n              <span class=\"discription-p\">Post Code: {{property.Lookingpostcode}}</span>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n    </section>\r\n\r\n\r\n    <section id=\"youmaylike\">\r\n      <p class=\"mt-3 main-heading\">You Have <span style=\"color:red\">{{noOfUnmatched}}</span> Buyers with similar requirement</p>\r\n      <!--First-section-->\r\n      <div class=\"match-section\" routerLink='/SellerSelectedProperty/\r\n    {{property.detail.Address}}/\r\n    {{property.detail.Lookingpostcode}}/\r\n    {{property.detail.PropertyType}}/\r\n    {{property.detail.Conditions}}/\r\n    {{property.detail.ChainStatus}}/\r\n    {{property.detail.Firstname}}/\r\n     {{property.detail.Lastname}}/\r\n{{property.detail.Email}}/\r\n{{property.detail.DOB}}/\r\n{{property.detail.FinancialPosition}}/\r\n{{property.detail.SearchRadius}}/\r\n{{property.detail.PriceRange}}/\r\n{{property.detail.Validity}}/\r\n{{property.detail.Type}}/\r\n {{property.detail.Position}}/\r\n {{property.detail.UserId}}/\r\n {{property.detail.norooms}}' *ngFor=\"let property of unmatchedProperties\">\r\n        <mat-card class=\"mat-card-matches\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Terrace House'\" src=\"assets/Images/Terraced.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\"\r\n            class=\"match-images float-left\">\r\n          <img *ngIf=\"property.detail.PropertyType=='Land'\" src=\"assets/Images/Land.svg\"\r\n            class=\"match-images float-left\">\r\n          <div class=\"match-content\">\r\n            <p><span class=\"discription-p\">Street Name:{{property.detail.LookingStreetname}}</span><br>\r\n              <span class=\"discription-p\">Position:{{property.detail.Position}}</span><br>\r\n\r\n              <span class=\"discription-p property-type-color\">Type of Property:\r\n                {{property.detail.PropertyType}}</span><br>\r\n              <span class=\"discription-p\">Post Code:{{property.detail.Lookingpostcode}}</span><br>\r\n              <span class=\"discription-p\"> Distance: {{property.distance | number:'1.1-1'}} (kms)</span></p>\r\n\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <mat-card-title class=\"title-agent-selection\">Agent Selection</mat-card-title>\n\n\n    <mat-card class=\"mt-2\">\n        <mat-card-title class=\"note-agent-selection \">\n            Based on the postcode property we recommend you with the following agent\n        </mat-card-title>\n\n    </mat-card>\n\n\n\n    <mat-card class=\"mt-2\">\n       <div class=\"agent-selection-radiobutton-container\">\n       \n     <div class=\"agent-selection-name\">\n    <mat-card-title class=\"agent-selection-name\">Name</mat-card-title>\n    <mat-radio-group class=\"example-section\"  value=\"Name\" name=\"Name\">\n        <div class=\"radio-button-align\">\n        <mat-radio-button class=\"example-margin\" value=\"Rohit Verma\">Rohit Verma</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"Rohit Bhandari\">Rohit Bhandari</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"Anumpam\">Anumpam</mat-radio-button>\n     \n        </div>\n      </mat-radio-group>\n    \n    \n    </div>\n     <div class=\"agent-selection-commision\">\n        <mat-card-title class=\"agent-selection-name\">Commission</mat-card-title>\n        <p class=\"Commission-text\">5%</p>\n        <p class=\"Commission-text\">10%</p>\n        <p class=\"Commission-text\">20%</p>\n     </div>\n       </div>\n\n    </mat-card>\n\n    <mat-card class=\"mt-2  agent-button\">\n        <button mat-raised-button color=\"primary\">Select Agent</button>\n\n    </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isSellerSelected\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container property-detail-container\">\r\n  <h3 class=\"property-detail-h3\">{{LookingStreetname}}</h3>\r\n  <div class=\"wrapper-detail-container\">\r\n    <div id=\"demo\">\r\n      <img *ngIf=\"PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images\">\r\n      <img *ngIf=\"PropertyType=='Terrace House'\" src=\"assets/Images/Terraced.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Park Home'\" src=\"assets/Images/Park Home.svg\" class=\"match-images  \">\r\n      <img *ngIf=\"PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images  \">\r\n\r\n    \r\n     \r\n\r\n      <!-- Left and right controls -->\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"streetname\">\r\n\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Street Name</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{LookingStreetname}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Post Code</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{Lookingpostcode}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Property type</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{PropertyType}}</mat-card-subtitle>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">Condition</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{Conditions}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <mat-card class=\"Mat-card-div\">\r\n        <mat-card-title class=\"details-p-headings\">ChainStatus</mat-card-title>\r\n        <mat-card-subtitle class=\"details-output-p\">{{ChainStatus}}</mat-card-subtitle>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"selected-button m-3\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"submitForm()\">Express Interest</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loading spinner -->\r\n<div *ngIf=\"isLoading\" class=\"loading-container\">\r\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container forms-container\">\r\n  <div class=\"row\">\r\n    <section class=\"col\">\r\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\" *ngIf=\"isLoggedIn\">\r\n        <mat-tab-group #matgroup class=\"form-tab-conatiner\" mat-align-tabs=\"center\" [selectedIndex]=\"selectedIndex\">\r\n          <mat-tab label=\"Personal Details\">\r\n            <div class=\"tab-pane active tabs-align-padding\" role=\"tabpanel\" id=\"step1\">\r\n              <mat-card class=\"card-margin\">\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading\">Personal Details</p>\r\n                </mat-card-title>\r\n                <p class=\"forms-star\">*required</p>\r\n              </mat-card>\r\n              <mat-card class=\"card-margin\">\r\n                <mat-form-field>\r\n                  <mat-label>Title*</mat-label>\r\n                  <mat-select name=\"title\" [(ngModel)]=\"listingSeller.Title\" Value=\"Title\" class=\"drop-down-list\">\r\n                    <mat-option value=\"Mr\">Mr</mat-option>\r\n                    <mat-option value=\"Ms\">Ms</mat-option>\r\n                    <mat-option value=\"Mrs\">Mrs</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n\r\n                <!--First Name-->\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"First Name\" [formControl]=\"FirstnameFormControl\"\r\n                      [(ngModel)]=\"listingSeller.Firstname\" name=\"First\" class=\"mat-mail-input\">\r\n                    <mat-error\r\n                      *ngIf=\"FirstnameFormControl.hasError('First Name') && !FirstnameFormControl.hasError('required')\">\r\n                      Please enter a valid name\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"FirstnameFormControl.hasError('required')\">\r\n                      FirstName is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--First Name End-->\r\n\r\n\r\n                <!--Last Name-->\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"LastName\" [formControl]=\"LastnameFormControl\"\r\n                      [(ngModel)]=\"listingSeller.Lastname\" name=\"Last\" class=\"mat-mail-input\">\r\n                    <mat-error\r\n                      *ngIf=\"LastnameFormControl.hasError('LastName') && !LastnameFormControl.hasError('required')\">\r\n                      Please enter a valid LastName\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"LastnameFormControl.hasError('required')\">\r\n                      LastName is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--Last Name End-->\r\n\r\n\r\n                <!--Email Field End-->\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Email Address*\" [formControl]=\"EmailFormControl\"\r\n                      [(ngModel)]=\"listingSeller.Email\" name=\"Email\" class=\"mat-mail-input\">\r\n                    <!-- <mat-error\r\n                      *ngIf=\"EmailFormControl.hasError('Email Address*') && !EmailFormControl.hasError('required')\">\r\n                      Please enter a valid email address\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"EmailFormControl.hasError('required')\">\r\n                      Email is <strong>required</strong>\r\n                    </mat-error> -->\r\n                  </mat-form-field>\r\n                </form>\r\n                <!--Email Field End-->\r\n\r\n\r\n                <!--Date Of Birth Field-->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"DD/MM/YY*\" [(ngModel)]=\"listingSeller.DOB\"\r\n                    name=\"DOB\" class=\"mat-mail-input\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n                <!--Date Of Birth Field End-->\r\n\r\n\r\n                <!--Phone Number field-->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"listingSeller.phonenumber\" name=\"phonenumber\"\r\n                    class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n                <p class=\"Label-notes\">*Note:Your details will not be shared with any third party</p>\r\n                <!--Phone Number field-->\r\n\r\n\r\n              </mat-card>\r\n              <ul class=\"submit-button\">\r\n                <div class=\"button-next\">\r\n                  <a (click)=\"selectTab(1, 0)\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n                </div>\r\n              </ul>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Property Details\">\r\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step2\">\r\n              <mat-card class=\"card-margin\">\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading\">Property Enquiry</p>\r\n                </mat-card-title>\r\n                <p class=\"forms-star\">Please fill the form below to list your property</p>\r\n              </mat-card>\r\n\r\n\r\n\r\n              <!--Current Living-->\r\n              <mat-card class=\"card-margin\">\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading\">Where you currently live:</p>\r\n                </mat-card-title>\r\n                <p>Search by Postcode</p>\r\n                <mat-option style=\"background-color: #F5F5F5;\">\r\n                  <input [formControl]=\"autoCompleteControlCurrent\" type=\"text\" placeholder=\"Enter Postcode\"\r\n                    aria-label=\"Post Code\" matInput [matAutocomplete]=\"autoCurrent\"\r\n                    [(ngModel)]=\"listingSeller.Currentpostcode\">\r\n                  <mat-autocomplete autoActiveFirstOption #autoCurrent=\"matAutocomplete\"\r\n                    (optionSelected)='getPosts($event.option.value)'>\r\n                    <mat-option *ngFor=\"let item of addressianAutoCompleteCurrent$ | async; let index=index\"\r\n                      [value]=\"item\">\r\n                      <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                      </span> | <span>{{ item.citytown | titlecase}}</span>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-option>\r\n                <p>Search by Address</p>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Address\" [formControl]=\"AddressFormControl\" name=\"CurrentAddress\"\r\n                    class=\"mat-mail-input\" [(ngModel)]=\"listingSeller.CurrentAddress\">\r\n\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Town/City\" [formControl]=\"TownFormControl\"\r\n                    [(ngModel)]=\"listingSeller.CurrentTown\" name=\"CurrentTowncity\" class=\"mat-mail-input\">\r\n\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"County\" [formControl]=\"stateFormControl\" required\r\n                    [(ngModel)]=\"listingSeller.Currentstate\" name=\"Currentstate\" class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n              </mat-card>\r\n              <!--Current Living  End-->\r\n\r\n\r\n\r\n              <!--Where Are Looking for property-->\r\n              <mat-card class=\"card-margin\">\r\n                <mat-checkbox (change)='getSame(Seller)'>Same as above</mat-checkbox>\r\n                <mat-card-title class=\"mat_card_title\">\r\n                  <p class=\"forms-heading\">Where are looking for Property:</p>\r\n                </mat-card-title>\r\n\r\n                <p class=\"mt-4\">Search by Postcode</p>\r\n\r\n                <mat-option style=\"background-color: #F5F5F5;\">\r\n                  <input [formControl]=\"autoCompleteControlLooking\" type=\"text\" placeholder=\"Enter Postcode\"\r\n                    aria-label=\"Post-Code\" matInput [matAutocomplete]=\"autoLooking\"\r\n                    [(ngModel)]=\"listingSeller.Lookingpostcode\">\r\n                  <mat-autocomplete autoActiveSecondOption #autoLooking=\"matAutocomplete\"\r\n                    (optionSelected)='getPost($event.option.value)'>\r\n                    <mat-option *ngFor=\"let item of addressianAutoCompleteLooking$ | async; let index=index\"\r\n                      [value]=\"item\">\r\n                      <span *ngFor=\"let i of item.address\">{{i}} </span> | <span>{{ item.postcode | titlecase}}\r\n                      </span> | <span>{{ item.citytown | titlecase}}</span>\r\n                    </mat-option>\r\n                  </mat-autocomplete>\r\n                </mat-option>\r\n\r\n\r\n\r\n                <p class=\"mt-4\">Search by Address</p>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Address\" name=\"LookingAddress\" class=\"mat-mail-input\"\r\n                    [(ngModel)]=\"listingSeller.LookingAddress\">\r\n\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width mb-3\">\r\n                  <input matInput placeholder=\"Town/City\" [(ngModel)]=\"listingSeller.LookingTown\" name=\"LookingTowncity\"\r\n                    class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"County\" required [(ngModel)]=\"listingSeller.Lookingstate\"\r\n                    name=\"Lookingstate\" class=\"mat-mail-input\">\r\n                </mat-form-field>\r\n\r\n              </mat-card>\r\n              <!--Where Are Looking for property End-->\r\n\r\n\r\n\r\n              <mat-card class=\"card-margin\">\r\n\r\n                <label for=\"text\" class=\" \">Property Type*:</label>\r\n\r\n                <mat-radio-group class=\"example-section\" [(ngModel)]=\"listingSeller.PropertyType\" value=\"PropertyType\"\r\n                  name=\"PropertyType\">\r\n                  <div class=\"radio-button-align\">\r\n                    <mat-radio-button class=\"example-margin\" value=\"Flat\">Flat</mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"Terrace House\">Terrace House</mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"Semi-detached\">Semi-detached</mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"Park Home\">Park Home</mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"Land\">Land</mat-radio-button>\r\n                  </div>\r\n                </mat-radio-group>\r\n\r\n\r\n\r\n\r\n                <!--Room Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label>Number of Room(s)</mat-label>\r\n                  <mat-select placeholder=\"Number of Rooms\" [(ngModel)]=\"listingSeller.norooms\" name=\"norooms\">\r\n                    <mat-option value=\"studio\">Studio</mat-option>\r\n                    <mat-option value=\"1\">1</mat-option>\r\n                    <mat-option value=\"2\">2</mat-option>\r\n                    <mat-option value=\"3\">3</mat-option>\r\n                    <mat-option value=\"4\">4</mat-option>\r\n                    <mat-option value=\"5\">5</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Room Field End-->\r\n\r\n\r\n\r\n                <!--Min Max Amount-->\r\n                <label>Price Range (Offer) *</label>\r\n                <div class=\"price-selection\">\r\n                  <mat-form-field class=\"filed-width\">\r\n                    <mat-label>MinAmount</mat-label>\r\n                    <mat-select [(value)]=\"min\" name=\"MinAmount\" [(ngModel)]=\"listingSeller.MinAmount\">\r\n                      <mat-option value=\"50000\">50,000</mat-option>\r\n                      <mat-option value=\"60000\">60,000</mat-option>\r\n                      <mat-option value=\"70000\">70,000</mat-option>\r\n                      <mat-option value=\"80000\">80,000</mat-option>\r\n                      <mat-option value=\"90000\">90,000</mat-option>\r\n                      <mat-option value=\"100000\">100,000</mat-option>\r\n                      <mat-option value=\"110000\">110,000</mat-option>\r\n                      <mat-option value=\"120000\">120,000</mat-option>\r\n                      <mat-option value=\"125000\">125,000</mat-option>\r\n                      <mat-option value=\"130000\">130,000</mat-option>\r\n                      <mat-option value=\"140000\">140,000</mat-option>\r\n                      <mat-option value=\"150000\">150,000</mat-option>\r\n                      <mat-option value=\"160000\">160,000</mat-option>\r\n                      <mat-option value=\"170000\">170,000</mat-option>\r\n                      <mat-option value=\"175000\">175,000</mat-option>\r\n                      <mat-option value=\"180000\">180,000</mat-option>\r\n                      <mat-option value=\"190000\">190,000</mat-option>\r\n                      <mat-option value=\"200000\">200,000</mat-option>\r\n                      <mat-option value=\"210000\">210,000</mat-option>\r\n                      <mat-option value=\"220000\">220,000</mat-option>\r\n                      <mat-option value=\"230000\">230,000</mat-option>\r\n                      <mat-option value=\"240000\">240,000</mat-option>\r\n                      <mat-option value=\"250000\">250,000</mat-option>\r\n                      <mat-option value=\"260000\">260,000</mat-option>\r\n                      <mat-option value=\"270000\">270,000</mat-option>\r\n                      <mat-option value=\"280000\">280,000</mat-option>\r\n                      <mat-option value=\"290000\">290,000</mat-option>\r\n                      <mat-option value=\"300000\">300,000</mat-option>\r\n                      <mat-option value=\"325000\">325,000</mat-option>\r\n                      <mat-option value=\"350000\">350,000</mat-option>\r\n                      <mat-option value=\"375000\">375,000</mat-option>\r\n                      <mat-option value=\"400000\">400,000</mat-option>\r\n                      <mat-option value=\"425000\">425,000</mat-option>\r\n                      <mat-option value=\"450000\">450,000</mat-option>\r\n                      <mat-option value=\"475000\">475,000</mat-option>\r\n                      <mat-option value=\"500000\">500,000</mat-option>\r\n                      <mat-option value=\"525000\">525,000</mat-option>\r\n                      <mat-option value=\"550000\">550,000</mat-option>\r\n                      <mat-option value=\"575000\">575,000</mat-option>\r\n                      <mat-option value=\"600000\">600,000</mat-option>\r\n                      <mat-option value=\"625000\">625,000</mat-option>\r\n                      <mat-option value=\"650000\">650,000</mat-option>\r\n                      <mat-option value=\"675000\">675,000</mat-option>\r\n                      <mat-option value=\"700000\">700,000</mat-option>\r\n                      <mat-option value=\"725000\">725,000</mat-option>\r\n                      <mat-option value=\"750000\">750,000</mat-option>\r\n                      <mat-option value=\"775000\">775,000</mat-option>\r\n                      <mat-option value=\"800000\">800,000</mat-option>\r\n                      <mat-option value=\"825000\">825,000</mat-option>\r\n                      <mat-option value=\"850000\">850,000</mat-option>\r\n                      <mat-option value=\"875000\">875,000</mat-option>\r\n                      <mat-option value=\"900000\">900,000</mat-option>\r\n                      <mat-option value=\"925000\">925,000</mat-option>\r\n                      <mat-option value=\"950000\">950,000</mat-option>\r\n                      <mat-option value=\"975000\">975,000</mat-option>\r\n                      <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                      <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                      <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                      <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                      <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                      <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                      <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                      <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                      <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                      <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                      <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                      <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                      <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                      <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                      <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                      <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                      <mat-option value=\"\">No min</mat-option>\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"filed-width\">\r\n                    <mat-label>MaxAmount</mat-label>\r\n                    <mat-select [(value)]=\"max\" name=\"MaxAmount\" [(ngModel)]=\"listingSeller.MaxAmount\">\r\n                      <mat-option value=\"50000\">50,000</mat-option>\r\n                      <mat-option value=\"60000\">60,000</mat-option>\r\n                      <mat-option value=\"70000\">70,000</mat-option>\r\n                      <mat-option value=\"80000\">80,000</mat-option>\r\n                      <mat-option value=\"90000\">90,000</mat-option>\r\n                      <mat-option value=\"100000\">100,000</mat-option>\r\n                      <mat-option value=\"110000\">110,000</mat-option>\r\n                      <mat-option value=\"120000\">120,000</mat-option>\r\n                      <mat-option value=\"125000\">125,000</mat-option>\r\n                      <mat-option value=\"130000\">130,000</mat-option>\r\n                      <mat-option value=\"140000\">140,000</mat-option>\r\n                      <mat-option value=\"150000\">150,000</mat-option>\r\n                      <mat-option value=\"160000\">160,000</mat-option>\r\n                      <mat-option value=\"170000\">170,000</mat-option>\r\n                      <mat-option value=\"175000\">175,000</mat-option>\r\n                      <mat-option value=\"180000\">180,000</mat-option>\r\n                      <mat-option value=\"190000\">190,000</mat-option>\r\n                      <mat-option value=\"200000\">200,000</mat-option>\r\n                      <mat-option value=\"210000\">210,000</mat-option>\r\n                      <mat-option value=\"220000\">220,000</mat-option>\r\n                      <mat-option value=\"230000\">230,000</mat-option>\r\n                      <mat-option value=\"240000\">240,000</mat-option>\r\n                      <mat-option value=\"250000\">250,000</mat-option>\r\n                      <mat-option value=\"260000\">260,000</mat-option>\r\n                      <mat-option value=\"270000\">270,000</mat-option>\r\n                      <mat-option value=\"280000\">280,000</mat-option>\r\n                      <mat-option value=\"290000\">290,000</mat-option>\r\n                      <mat-option value=\"300000\">300,000</mat-option>\r\n                      <mat-option value=\"325000\">325,000</mat-option>\r\n                      <mat-option value=\"350000\">350,000</mat-option>\r\n                      <mat-option value=\"375000\">375,000</mat-option>\r\n                      <mat-option value=\"400000\">400,000</mat-option>\r\n                      <mat-option value=\"425000\">425,000</mat-option>\r\n                      <mat-option value=\"450000\">450,000</mat-option>\r\n                      <mat-option value=\"475000\">475,000</mat-option>\r\n                      <mat-option value=\"500000\">500,000</mat-option>\r\n                      <mat-option value=\"525000\">525,000</mat-option>\r\n                      <mat-option value=\"550000\">550,000</mat-option>\r\n                      <mat-option value=\"575000\">575,000</mat-option>\r\n                      <mat-option value=\"600000\">600,000</mat-option>\r\n                      <mat-option value=\"625000\">625,000</mat-option>\r\n                      <mat-option value=\"650000\">650,000</mat-option>\r\n                      <mat-option value=\"675000\">675,000</mat-option>\r\n                      <mat-option value=\"700000\">700,000</mat-option>\r\n                      <mat-option value=\"725000\">725,000</mat-option>\r\n                      <mat-option value=\"750000\">750,000</mat-option>\r\n                      <mat-option value=\"775000\">775,000</mat-option>\r\n                      <mat-option value=\"800000\">800,000</mat-option>\r\n                      <mat-option value=\"825000\">825,000</mat-option>\r\n                      <mat-option value=\"850000\">850,000</mat-option>\r\n                      <mat-option value=\"875000\">875,000</mat-option>\r\n                      <mat-option value=\"900000\">900,000</mat-option>\r\n                      <mat-option value=\"925000\">925,000</mat-option>\r\n                      <mat-option value=\"950000\">950,000</mat-option>\r\n                      <mat-option value=\"975000\">975,000</mat-option>\r\n                      <mat-option value=\"1000000\">1,000,000</mat-option>\r\n                      <mat-option value=\"1250000\">1,250,000</mat-option>\r\n                      <mat-option value=\"1500000\">1,500,000</mat-option>\r\n                      <mat-option value=\"1750000\">1,750,000</mat-option>\r\n                      <mat-option value=\"2000000\">2,000,000</mat-option>\r\n                      <mat-option value=\"2250000\">2,250,000</mat-option>\r\n                      <mat-option value=\"2500000\">2,500,000</mat-option>\r\n                      <mat-option value=\"3000000\">3,000,000</mat-option>\r\n                      <mat-option value=\"4000000\">4,000,000</mat-option>\r\n                      <mat-option value=\"5000000\">5,000,000</mat-option>\r\n                      <mat-option value=\"6000000\">6,000,000</mat-option>\r\n                      <mat-option value=\"7000000\">7,000,000</mat-option>\r\n                      <mat-option value=\"8000000\">8,000,000</mat-option>\r\n                      <mat-option value=\"10000000\">10,000,000</mat-option>\r\n                      <mat-option value=\"15000000\">15,000,000</mat-option>\r\n                      <mat-option value=\"20000000\">20,000,000</mat-option>\r\n                      <mat-option value=\"\">No max</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!--Min Max Amount End-->\r\n\r\n\r\n\r\n\r\n                <!--Bathroom Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label>Number of Bathroom(s)</mat-label>\r\n                  <mat-select value=\"nobathrooms\"[(ngModel)]=\"listingSeller.nobathrooms\"\r\n                    name=\"nobathrooms\">\r\n                    <mat-option value=\"1\">1</mat-option>\r\n                    <mat-option value=\"2\">2</mat-option>\r\n                    <mat-option value=\"3\">3</mat-option>\r\n                    <mat-option value=\"4\">4</mat-option>\r\n                    <mat-option value=\"5\">5</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Bathroom Field End-->\r\n\r\n\r\n\r\n\r\n\r\n                <!--Reception Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label>Number of Reception(s)</mat-label>\r\n                  <mat-select [(ngModel)]=\"listingSeller.noreception\"  value=\"noReception\" name=\"noReception\">\r\n                    <mat-option value=\"1\">1</mat-option>\r\n                    <mat-option value=\"2\">2</mat-option>\r\n                    <mat-option value=\"3\">3</mat-option>\r\n                    <mat-option value=\"4\">4</mat-option>\r\n                    <mat-option value=\"5\">5</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Reception Field End-->\r\n\r\n\r\n\r\n                <!--PropertyCondition Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label>Property Condition</mat-label>\r\n                  <mat-select  [(ngModel)]=\"listingSeller.PropertyCondition\"\r\n                     value=\"PropertyCondition\" name=\"PropertyCondition\">\r\n                    <mat-option value=\"Refurbished\">Refurbished</mat-option>\r\n                    <mat-option value=\"NewBuild\">New Build</mat-option>\r\n                    <mat-option value=\"Needsmodernisation\">Needs modernisation</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--PropertyCondition Field End-->\r\n\r\n\r\n\r\n                <!--Ownership Field-->\r\n                <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n                  <mat-label>Ownership</mat-label>\r\n                  <mat-select placeholder=\"Ownership\" [(ngModel)]=\"listingSeller.ownership\" value=\"ownership\" name=\"ownership\">\r\n                    <mat-option value=\"Freehold\">Freehold</mat-option>\r\n                    <mat-option value=\"Leasehold\">Leasehold</mat-option>\r\n                    <mat-option value=\"ShareofFreehold\">Share of Freehold</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Ownership Field End-->\r\n\r\n\r\n\r\n\r\n                <!--Aplicable Features-->\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Aplicable Features</mat-label>\r\n                  <mat-select [formControl]=\"features\" multiple [(ngModel)]=\"listingSeller.features\" #sl>\r\n                    <div class=\"select-constion\">\r\n                      <img src=\"../../../../assets/Images/cross.png\" class=\"button-cross\" (click)=\"sl.close()\">\r\n                    </div>\r\n                    <mat-option *ngFor=\"let features of applicable\" [value]=\"features\">{{features}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!--Aplicable Feature End-->\r\n\r\n\r\n              </mat-card>\r\n\r\n\r\n\r\n\r\n              <div class=\"button-next-tab2\">\r\n                <a (click)=\"selectTab(0, 1)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n                <a (click)=\"selectTab(2, 1)\" class=\"btn btn-primary btnNext btn-next\">Next</a>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Optional Details\">\r\n            <div class=\"tab-pane tabs-align-padding\" role=\"tabpanel\" id=\"step3\">\r\n\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-title class=\"mat_card_title card-margin\">\r\n                  <p class=\"forms-heading\">Optional details</p>\r\n                </mat-card-title>\r\n\r\n              </mat-card>\r\n\r\n              <mat-card class=\"card-margin\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <mat-label>Tell us bit about yourself</mat-label>\r\n                  <textarea matInput class=\"text-field-height\" name=\"Message\"\r\n                    [(ngModel)]=\"listingSeller.otherInfo\"></textarea>\r\n                </mat-form-field>\r\n\r\n              </mat-card>\r\n\r\n              <div class=\"button-next-tab2\">\r\n                <a (click)=\"selectTab(1, 2)\" class=\"btn  btnPrevious btn-next\">Previous</a>\r\n                <button class=\"btn btn-primary btnNext btn-next\" (click)=\"onSubmit\">\r\n                  Next\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </form>\r\n    </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isAgentSelected\" class=\"loading-container\">\r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<div class=\"container property-detail-container\">\r\n    <h3 class=\"property-detail-h3\">Agent Signup</h3>\r\n    <div class=\"wrapper-detail-container\">\r\n      <form #addressForm=\"ngForm\"  (ngSubmit)=\"logValue()\" >\r\n     <mat-card >\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Name of Agent\" required\r\n                   name=\"name\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Name\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Contact Person\" \r\n                   name=\"ContactPerson\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.ContactPerson\" >\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Phone Number\" \r\n                   name=\"Phone Number\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.PhoneNumber\" >\r\n              </mat-form-field>\r\n         \r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\" required\r\n                   name=\"Email\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Email\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Address\" required\r\n                   name=\"Address\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.Address\">\r\n              </mat-form-field>\r\n            \r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Commission\" required\r\n                 name=\"Commission\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.commission\">\r\n            </mat-form-field>\r\n          </mat-card>\r\n\r\n\r\n        <mat-card class=\"mt-2\">     <mat-card-title class=\"signup-caution\">In which areas do you deal?</mat-card-title> </mat-card>\r\n        <mat-card class=\"mt-2\" >\r\n         <div class=\"search-postcode-field\" *ngFor=\"let Postcode of Postcodes; let i = index;\">\r\n            <mat-form-field class=\"\">\r\n                <input matInput placeholder=\"Search Postcode\" required\r\n                   name=\"SearchPostcode_{{i}}\" class=\"mat-mail-input\" [(ngModel)]=\"agentSignup.SearchPostcode\" >\r\n              </mat-form-field>\r\n              <button mat-raised-button color=\"primary\" class=\"button-agent-signup\" (click)=\"addPostcodes()\">Add Postcode</button>\r\n         </div>\r\n        </mat-card>\r\n    <mat-card class=\"mt-2\">   <mat-card-title class=\"signup-caution-last\">*If your are national agent mail us at contactus@snapstreet.com</mat-card-title> </mat-card>\r\n    \r\n  <mat-card class=\" mt-2 button-card\">\r\n\r\n    <button mat-raised-button color=\"primary\" class=\"submit-agent-signup\" (click)=\"submitForm()\">Submit</button>\r\n\r\n  </mat-card>\r\n</form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container chats-main-container\">\r\n   <div class=\"wrapper-chat-container\">\r\n    <h3 class=\"property-detail-h3\">My Chats</h3>\r\n      <div class=\"chat-container\">\r\n          <img src=\"/assets/Images/Henrik_Urdal-removebg-preview.png\">\r\n          <p class=\"chat-p\">Jhon doe<br>\r\n         <span class=\"user-class\">Seller</span></p>\r\n      </div>\r\n\r\n\r\n   </div>\r\n\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"prefrences-main-div container\">\r\n    <h3 class=\"property-detail-h3\">My Requirements</h3>\r\n    <div class=\"prefrence-notification\">\r\n                <h5 class=\"text-center notification-heading\">Notification Prefrences</h5>\r\n                <div class=\"prefrence-radio\">\r\n          <form>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email for every match\r\n                </p></label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"radio\" class=\"form-check-input\" name=\"optradio\"><p class=\"radio-text\">Email me once a week with all the matches \r\n                  that I have\r\n                </p> </label>\r\n              </div>\r\n          </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-requirement-container container\">\r\n  <p class=\"my-requirement-heading\">\r\n    My Listing\r\n  </p>\r\n\r\n  <mat-tab-group>\r\n    <mat-tab label=\"My Requirements\" class=\"mat-label-align\">\r\n      <mat-card *ngFor=\"let requirement of propertyDetails\" class=\"my-requirement-one mt-3\"\r\n      routerLink='/requirementdetails'>\r\n      <p> <span class=\"area-p\">{{requirement.Address}}</span><br>\r\n        <span class=\"discription-p\"> Radius: {{requirement.SearchRadius}}</span>&nbsp;|&nbsp;<span\r\n          class=\"discription-p\">{{requirement.postcode}}</span><br>\r\n        <span class=\"discription-p property-type-color\">Street Name:\r\n          {{requirement.addressname}}</span>&nbsp;|&nbsp;<span class=\"discription-p\">Price Range:\r\n          {{requirement.MinAmount}}</span><br>\r\n      </p>\r\n    </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"My Properties\" class=\"mat-label-align\">\r\n      \r\n      <section class=\"mt-4\" id=\"matchproperties\">\r\n        <mat-card style=\"margin-top: 10px;\" *ngFor=\"let property of propertyDetails\" class=\"match-section\"\r\n          routerLink='/selectedpropertydetail'>\r\n          <img src=\"assets/Images/My-Home-Insurance.png\" class=\"match-images float-left\">\r\n          <mat-card-content class=\"match-content\">\r\n            <p> <span class=\"area-p\">{{property.Address}}</span><br>\r\n              <span class=\"discription-p\">Expected Amount: {{property.ExpectedAmount}}</span><br>\r\n              <span class=\"discription-p property-type-color\">Type of Property: {{property.Propertytype}}\r\n                </span><br>\r\n              <span class=\"discription-p\">Post Code: {{property.Currentpostcode}}</span></p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </section>\r\n    \r\n    \r\n    \r\n    </mat-tab>\r\n  \r\n  </mat-tab-group>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n  \n  <div class=\"container property-detail-container\">\n    <h3 class=\"property-detail-h3\">{{LookingAddress}}</h3>\n    <div class=\"wrapper-detail-container\">\n      <div id=\"demo\" >\n        <img *ngIf=\"PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images\">\n        <img *ngIf=\"PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\" class=\"match-images  \">\n        <img *ngIf=\"PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\" class=\"match-images  \">\n        <img *ngIf=\"PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\" class=\"match-images  \">\n        <img *ngIf=\"PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images  \">\n        <!-- Left and right controls -->\n      </div>\n      <div class=\"streetname\">\n        <mat-card class=\"Mat-card-div\">\n            <mat-card-title class=\"details-p-headings\">Pincode</mat-card-title>\n            <mat-card-subtitle class=\"details-output-p\">{{Lookingpostcode}}</mat-card-subtitle>\n        </mat-card>\n        <mat-card class=\"Mat-card-div\">\n          <mat-card-title class=\"details-p-headings\">County</mat-card-title>\n          <mat-card-subtitle class=\"details-output-p\">{{Lookingstate}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">Address</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{LookingAddress}}</mat-card-subtitle>\n    </mat-card>\n    <mat-card class=\"Mat-card-div\">\n      <mat-card-title class=\"details-p-headings\">No of Rooms</mat-card-title>\n      <mat-card-subtitle class=\"details-output-p\">{{norooms}}</mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"Mat-card-div\">\n    <mat-card-title class=\"details-p-headings\">Property Condition</mat-card-title>\n    <mat-card-subtitle class=\"details-output-p\">{{PropertyCondition}}</mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"Mat-card-div\">\n    <mat-card-title class=\"details-p-headings\">Price Range(offer)</mat-card-title>\n    <mat-card-subtitle class=\"details-output-p\">{{MinAmount}}</mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"Mat-card-div\">\n    <mat-card-title class=\"details-p-headings\">Ownership</mat-card-title>\n    <mat-card-subtitle class=\"details-output-p\">{{ownership}}</mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"Mat-card-div\">\n    <mat-card-title class=\"details-p-headings\">Property Type</mat-card-title>\n    <mat-card-subtitle class=\"details-output-p\">{{PropertyType}}</mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"Mat-card-div\">\n    <mat-card-title class=\"details-p-headings\">Applicable Feature</mat-card-title>\n    <mat-card-subtitle class=\"details-output-p\">{{features}}</mat-card-subtitle>\n  </mat-card>\n\n  <div class=\"selected-button\">\n    <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='pending'\" disabled>Pending</button>\n    <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='confirm_interest'\" routerLink=\"/agentSelection\">Confirm  Interest</button>\n  </div>\n\n      </div>\n   \n    </div>\n  </div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isBuyerSelected\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n\n<div class=\"container property-detail-container\">\n  <h3 class=\"property-detail-h3\">{{LookingAddress}}</h3>\n  <div class=\"wrapper-detail-container\">\n    <div id=\"demo\">\n      <img *ngIf=\"Type=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images\">\n      <img *ngIf=\"Type=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\" class=\"match-images  \">\n      <img *ngIf=\"Type=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\" class=\"match-images  \">\n      <img *ngIf=\"Type=='ParkHome'\" src=\"assets/Images/Park Home.svg\" class=\"match-images  \">\n      <img *ngIf=\"Type=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images\">\n\n    </div>\n    <div class=\"streetname\">\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">Pincode</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{Lookingpostcode}}</mat-card-subtitle>\n      </mat-card>\n      <!-- <mat-card class=\"Mat-card-div\">\n          <mat-card-title class=\"details-p-headings\">County</mat-card-title>\n          <mat-card-subtitle class=\"details-output-p\">{{Lookingstate}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">Address</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{LookingAddress}}</mat-card-subtitle>\n    </mat-card> -->\n      <!-- <mat-card class=\"Mat-card-div\">\n      <mat-card-title class=\"details-p-headings\">No of Rooms</mat-card-title>\n      <mat-card-subtitle class=\"details-output-p\">{{norooms}}</mat-card-subtitle>\n  </mat-card> -->\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">ChainStatus</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{ChainStatus}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">FinancialPosition</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{FinancialPosition}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">Type</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{Type}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">Position</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{Position}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">SearchRadius</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{SearchRadius}}</mat-card-subtitle>\n      </mat-card>\n      <mat-card class=\"Mat-card-div\">\n        <mat-card-title class=\"details-p-headings\">PriceRange</mat-card-title>\n        <mat-card-subtitle class=\"details-output-p\">{{PriceRange}}</mat-card-subtitle>\n      </mat-card>\n      <div class=\"selected-button\">\n        <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='pending'\" disabled>Pending</button>\n        <button mat-raised-button color=\"primary\" *ngIf=\"matchStatus=='confirm_interest'\" routerLink=\"/agentSelection\">Confirm Interest</button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container matches-main-container\">\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n    <mat-tab label=\"Buying\" class=\"mat-tab-label\" *ngIf=\"sellerProperty.length\">\r\n      <mat-card-title class=\"pending-matches-title\">Waiting For Other Party</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/mymatchesselecteddetail/{{property.Lookingpostcode}}/{{property.LookingAddress}}/{{property.norooms}}/{{property.PropertyCondition}}/{{property.MinAmount}}/{{property.Lookingstate}}/{{property.PropertyType}}/{{property.ownership}}/{{property.features}}/{{property.matchStatus}}'\r\n          *ngFor=\"let property of sellerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"property.matchStatus=='pending'\">\r\n            <img *ngIf=\"property.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{property.LookingTown}}</span><br>\r\n                <!-- <span class=\"discription-p\">No of bedrooms:{{property.norooms}}</span><br> -->\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{property.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{property.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n\r\n      <mat-card-title class=\"pending-matches-title\">Confirm Interest</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/mymatchesselecteddetail/{{property.Lookingpostcode}}/{{property.LookingAddress}}/{{property.norooms}}/{{property.PropertyCondition}}/{{property.MinAmount}}/{{property.Lookingstate}}/{{property.PropertyType}}/{{property.ownership}}/{{property.features}}/{{property.matchStatus}}'\r\n          *ngFor=\"let property of sellerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"property.matchStatus=='confirm_interest'\">\r\n            <img *ngIf=\"property.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{property.LookingTown}}</span><br>\r\n                <!-- <span class=\"discription-p\">No of bedrooms:{{property.norooms}}</span><br> -->\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{property.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{property.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n\r\n      <mat-card-title class=\"pending-matches-title\">Matched</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/mymatchesselecteddetail/{{property.Lookingpostcode}}/{{property.LookingAddress}}/{{property.norooms}}/{{property.PropertyCondition}}/{{property.MinAmount}}/{{property.Lookingstate}}/{{property.PropertyType}}/{{property.ownership}}/{{property.features}}/{{property.matchStatus}}'\r\n          *ngFor=\"let property of sellerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"property.matchStatus=='matched'\">\r\n            <img *ngIf=\"property.PropertyType=='Flat'\" src=\"assets/Images/Flat.svg\" class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"property.PropertyType=='Land'\" src=\"assets/Images/Land.svg\" class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{property.LookingTown}}</span><br>\r\n                <!-- <span class=\"discription-p\">No of bedrooms:{{property.norooms}}</span><br> -->\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{property.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{property.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Selling\" class=\"mat-tab-label\" *ngIf=\"buyerProperty.length\">\r\n      <mat-card-title class=\"pending-matches-title\">Waiting For Other Party</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/MyMatchesseller/{{buyerProperty.Lookingpostcode}}/{{buyerProperty.ChainStatus}}/{{buyerProperty.FinancialPosition}}/{{buyerProperty.Type}}/{{buyerProperty.Position}}/{{buyerProperty.SearchRadius}}/{{buyerProperty.PriceRange}}/{{buyerProperty.matchStatus}}'\r\n          *ngFor=\"let buyerProperty of buyerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"buyerProperty.matchStatus=='pending'\">\r\n            <img *ngIf=\"buyerProperty.PropertyType =='Flat'\" src=\"assets/Images/Flat.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Land'\" src=\"assets/Images/Land.svg\"\r\n              class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{buyerProperty.LookingAddress}}</span><br>\r\n                <span class=\"discription-p\">No of bedrooms:{{buyerProperty.norooms}}</span><br>\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{buyerProperty.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{buyerProperty.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n\r\n      <mat-card-title class=\"pending-matches-title\">Confirm Interest</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/MyMatchesseller/{{buyerProperty.Lookingpostcode}}/{{buyerProperty.ChainStatus}}/{{buyerProperty.FinancialPosition}}/{{buyerProperty.Type}}/{{buyerProperty.Position}}/{{buyerProperty.SearchRadius}}/{{buyerProperty.PriceRange}}/{{buyerProperty.matchStatus}}'\r\n          *ngFor=\"let buyerProperty of buyerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"buyerProperty.matchStatus=='confirm_interest'\">\r\n            <img *ngIf=\"buyerProperty.PropertyType =='Flat'\" src=\"assets/Images/Flat.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Land'\" src=\"assets/Images/Land.svg\"\r\n              class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{buyerProperty.LookingAddress}}</span><br>\r\n                <span class=\"discription-p\">No of bedrooms:{{buyerProperty.norooms}}</span><br>\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{buyerProperty.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{buyerProperty.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n\r\n      <mat-card-title class=\"pending-matches-title\">Matched</mat-card-title>\r\n      <section id=\"matchproperties\">\r\n        <div class=\"match-section\"\r\n          routerLink='/MyMatchesseller/{{buyerProperty.Lookingpostcode}}/{{buyerProperty.ChainStatus}}/{{buyerProperty.FinancialPosition}}/{{buyerProperty.Type}}/{{buyerProperty.Position}}/{{buyerProperty.SearchRadius}}/{{buyerProperty.PriceRange}}/{{buyerProperty.matchStatus}}'\r\n          *ngFor=\"let buyerProperty of buyerProperty\">\r\n          <mat-card class=\"mat-card-matches\" *ngIf=\"buyerProperty.matchStatus=='matched'\">\r\n            <img *ngIf=\"buyerProperty.PropertyType =='Flat'\" src=\"assets/Images/Flat.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='TerraceHouse'\" src=\"assets/Images/Terraced.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Semi-detached'\" src=\"assets/Images/Semi-detached.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='ParkHome'\" src=\"assets/Images/Park Home.svg\"\r\n              class=\"match-images float-left\">\r\n            <img *ngIf=\"buyerProperty.PropertyType=='Land'\" src=\"assets/Images/Land.svg\"\r\n              class=\"match-images float-left\">\r\n            <div class=\"match-content\">\r\n              <p>\r\n                <span class=\"discription-p\">Street Name:{{buyerProperty.LookingAddress}}</span><br>\r\n                <span class=\"discription-p\">No of bedrooms:{{buyerProperty.norooms}}</span><br>\r\n                <span class=\"discription-p property-type-color\">Type of Property:{{buyerProperty.PropertyType}}\r\n                </span><br>\r\n                <span class=\"discription-p\">Post Code:{{buyerProperty.Lookingpostcode}}</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </section>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <div *ngIf=\"user\">\r\n    <div class=\"profile-wrapper-content\">\r\n      <p class=\"profile-heading\">My Profile</p>\r\n      <div class=\"profile-name-image mt-4\">\r\n        <img src=\"{{user.photoURL}}\" class=\"rounded-circle Profile-pic\" />\r\n        <p class=\"profile-name\">{{ user.displayName }}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"profile-name-field-option\">\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Name</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\" *ngIf=\"user\">{{ user.displayName }}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Phone No</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\"></p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Email Id</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\">\r\n\r\n            {{ user.email }} </p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Date of Birth</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2 \" *ngIf=\"Buyer\">{{ Buyer.DOB }}</p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div>\r\n          <p class=\"fname-text1\">Password</p>\r\n        </div>\r\n        <div>\r\n          <p class=\"fname-text2\">*******</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container profile-main-container\">\r\n    <div class=\"profile-wrapper-content\">\r\n        <p class=\"profile-heading\">My Profile</p>\r\n        <div class=\"profile-name-image mt-4\">\r\n            <img src=\"/assets/Images/profilepic.jpeg\" class=\"rounded-circle Profile-pic\" alt=\"Cinque Terre\">\r\n            <p class=\"profile-name\">Mr.John Doe</p>\r\n        </div>\r\n    </div>\r\n<div class=\"profile-name-field-option\">\r\n    <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">First Name</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"fname\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Last Name</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"text\" class=\"form-control\" id=\"lname\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Phone No</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"number\" class=\"form-control\" id=\"number\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Email Id</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"email\" class=\"form-control\" id=\"date\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Date of Birth</p></div>\r\n        <div ><p class=\"fname-text2\"><input type=\"date\" class=\"form-control\" id=\"date\"></p></div>\r\n        <div ><a href=\"\" ><p class=\"fname-text3\">edit</p></a></div>  \r\n      </div>\r\n      <div class=\"grid-container\">\r\n        <div><p class=\"fname-text1\">Password</p></div>\r\n        <div ><p class=\"fname-text2\">*******</p></div>\r\n  \r\n      </div>\r\n</div>\r\n\r\n<div class=\"edit-profile-submitbutton\">\r\n<button type=\"button\" class=\"btn btn-back\">BACK</button>\r\n<button type=\"button\" class=\"btn btn-back\">SUBMIT</button>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mobile-wrapper\">\r\n  <div class=\"mobile-container\">\r\n    <div class=\"content\">\r\n\r\n      <nav>\r\n        <div class=\"main-navigation-bar\">\r\n          <div class=\"menu-toogle\">\r\n            <img src=\"/assets/Images/menu.png\" class=\"open\" />\r\n            <img src=\"/assets/Images/menu-close.png\" class=\"close-img\" />\r\n          </div>\r\n          <div class=\"imge-logo-header\">\r\n            <img src=\"assets/Images/logo1.png\" class=\"logo-nav\" routerLink=\"\" />\r\n          </div>\r\n\r\n\r\n          <div class=\"logout\">\r\n            <i class=\"fa fa-user\" aria-hidden=\"true\" (click)=\"authService.SignOut()\" *ngIf=\"isLoggedIn\"\r\n              routerLink=\"\"><span class=\"log-out-text\">Logout</span></i>\r\n\r\n             \r\n              \r\n          </div>\r\n          <div class=\"notification\" *ngIf=\"matches>0\">\r\n            <p class=\"nitification-red\" >{{matches}}</p>\r\n            <img src=\"assets/Images/alarm.png\" class=\"notification-image\">\r\n          </div>\r\n        </div>\r\n        <div class=\"nav-div\">\r\n          <app-template></app-template>\r\n          <div class=\"search-grid-conatiner\" *ngIf=\"isLoggedIn\">\r\n            <div></div>\r\n            <div>\r\n              <input type=\"text\" placeholder=\"Search..\" /><img src=\"assets/Images/asset1.png\"\r\n                class=\"nav-link-icon-search\" />\r\n            </div>\r\n            <div></div>\r\n          </div>\r\n          <ul class=\"nav-links\" *ngIf=\"isLoggedIn\">\r\n            <div class=\"grid-container\" routerLink=\"/\">\r\n              <div><img src=\"assets/Images/homemenu.png\" class=\"home-menu-image\"></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/\" class=\"nav-links-text\">Home</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/profile\">\r\n              <div><img src=\"assets/Images/my-profile-icon-png-1.png\" /></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/profile\" class=\"nav-links-text\">My Profile</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/mymatches\">\r\n              <div>\r\n                <img src=\"assets/Images/download-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/mymatches\" class=\"nav-links-text\">My Matches</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/myrequirement\">\r\n              <div>\r\n                <img src=\"assets/Images/135-512-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/myListing\" class=\"nav-links-text\">My Listing</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/prefrences\">\r\n              <div>\r\n                <img src=\"assets/Images/user_2-09-512-removebg-preview.png\" />\r\n              </div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/prefrences\" class=\"nav-links-text\">Prefrences</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-container\" routerLink=\"/chats\">\r\n              <div><img src=\"assets/Images/31-512-removebg-preview.png\" /></div>\r\n              <div>\r\n                <li>\r\n                  <a routerLink=\"/chats\" class=\"nav-links-text\">My chat</a>\r\n                </li>\r\n              </div>\r\n              <div>\r\n                <img src=\"assets/Images/asset1.png\" class=\"nav-link-icon\" />\r\n              </div>\r\n            </div>\r\n          </ul>\r\n\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notification works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\r\n    <div class=\"footer\">\r\n<div class=\"image-social\">\r\n<img src=\"/assets/Images/facebook.png\"  class=\"facebook-icon\">\r\n<img src=\"/assets/Images/twitter.png\" class=\"twitter-icon\" >\r\n<img src=\"/assets/Images/instagram.png\" class=\"instagram-icon\">\r\n</div>\r\n    <div class=\"privacy-policy\">\r\n   <p class=\"peivacy-policy-heading\" routerLink=\"/PrivacyPolicy\">Privacy Policy</p>\r\n\r\n    </div>\r\n    </div>\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content class=\"fixed\">\r\n   Please fill all fields before  proceeding\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\" class=\"fixed\">\r\n<button mat-raised-button color=\"primary\" mat-dialog-close tabindex=\"-1\">Ok</button>\r\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Top navigation -->\r\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/register-student\">\r\n    <img\r\n      class=\"brand-logo\"\r\n      src=\"assets/Images/logo.png\"\r\n      alt=\"positronX.io Logo\"\r\n    />\r\n    <span class=\"dasboard-text\">Dashboard</span>\r\n  </a>\r\n</nav>\r\n<!-- Sidebar navigation -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\r\n      <div class=\"sidebar-sticky\">\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\">\r\n              <i class=\"fas fa-user\"></i>User Profile\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.GoogleAuth()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log in\r\n            </a>\r\n          </li>\r\n          <!-- Calling SignOut() Api from AuthService -->\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\r\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <!-- Main content -->\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\r\n      <div class=\"inner-adjust\">\r\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\r\n          <h1 class=\"h2\">User Profile</h1>\r\n        </div>\r\n        <!-- Show user data when logged in -->\r\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"media\">\r\n              <img\r\n                class=\"align-self-start mr-5 img-thumbnail rounded-circle\"\r\n                src=\"{{\r\n                  user.photoURL ? user.photoURL : '/assets/dummy-user.png'\r\n                }}\"\r\n                alt=\"{{ user.displayName }}\"\r\n              />\r\n              <div class=\"media-body\">\r\n                <h1>\r\n                  Hello:\r\n                  <strong>{{\r\n                    user.displayName ? user.displayName : \"User\"\r\n                  }}</strong>\r\n                </h1>\r\n                <p>\r\n                  User ID: <strong>{{ user.uid }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email: <strong>{{ user.email }}</strong>\r\n                </p>\r\n                <p>\r\n                  Email Verified: <strong>{{ user.emailVerified }}</strong>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n      <div class=\"authBlock text-center mt-3\">\r\n        <h4 >Reset Password</h4>\r\n  \r\n        <p class=\"text-center p-3\">Please enter your email address to request a password reset.</p>\r\n        <div class=\"input-group p-4\">\r\n         \r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\"   #passwordResetEmail required>\r\n      </div>\r\n      \r\n  \r\n        <!-- Calling ForgotPassword from AuthService Api -->\r\n        <div class=\"formGroup\">\r\n          <button type=\"button\" class=\"btn btn-social-login\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\r\n      \r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"redirectToLogin text-center\">\r\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"social-login text-center\" >\r\n    <h4>Login or <span class=\"color-signup\">Sign up</span></h4>\r\n    <div class=\"social-button mt-4\">\r\n    <button type=\"button\" class=\"btn btn-facebook \"  (click)=\"authService.FacebookAuth()\">Facebook</button>\r\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"authService.GoogleAuth()\">Google+</button>\r\n    </div>\r\n    <form action=\"\">\r\n    <div class=\"input-group mb-3 mt-3\">\r\n        <div class=\"input-group-prepend\">\r\n            <!-- <i class=\"fa fa-user input-group-text nav-login-form\" aria-hidden=\"true\"></i> -->\r\n        </div>\r\n        <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\"  #userEmail required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend\">\r\n        <!-- <i class=\"fa fa-lock input-group-text nav-login-form-password\" aria-hidden=\"true\"></i> -->\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  name=\"password\"\r\n             #userPassword required>\r\n    </div>\r\n\r\n    <div class=\"input-group-prepend other-option\">\r\n        <!-- <label class=\"checkbox\">\r\n            <input type=\"checkbox\" value=\"remember-me\">Remember Me\r\n        </label> -->\r\n        <a href=\"#\" class=\"forgot-password\" routerLink=\"/forgot-password\">Forgot password?</a>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignIn(userEmail.value,userPassword.value)\">Login</button>\r\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"authService.SignUp(userEmail.value,userPassword.value)\">Sign Up</button>\r\n  </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"displayTable\">\r\n    <div class=\"displayTableCell\">\r\n  \r\n      <div class=\"authBlock\">\r\n        <h4 class=\"text-center mt-3\">Thank You for Registering</h4>\r\n  \r\n        <div class=\"formGroup p-3\" *ngIf=\"authService.userData as user\">\r\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\r\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\r\n        </div>\r\n        \r\n        <!-- Calling SendVerificationMail() method using authService Api -->\r\n        <div class=\"formGroup\">\r\n        \r\n          <p class=\"text-center\" (click)=\"authService.SendVerificationMail()\">Resend Verification Email</p>  \r\n         \r\n        </div>\r\n  \r\n      </div>\r\n  \r\n      <!-- <div class=\"redirectToLogin text-center\">\r\n        <span class=\"text-center\">Go back to?<span class=\"redirect text-center\" routerLink=\"/sign-in\"> Sign in</span></span>\r\n      </div> -->\r\n  \r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"privacy-policy-page\">\n  \n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading pt-5\">Privacy Policy</h5>\n        <p class=\" paragraph=privacy\">Last updated:07/April/2020</p>\n        <p class=\" paragraph=privacy\">Nestimate (\"us\", \"we\", or \"our\") operates http:// nestimate.co.uk. This page informs you of our policies regarding the collection, use and disclosure of\n            Personal Information we receive from users of the Site.\n        </p>\n        <p class=\" paragraph=privacy\">We use your Personal Information only for providing and improving the Site. By\n            using the Site, you\n            agree to the collection and use of information in accordance with this policy.\n        </p>\n    </div>\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Information Collection And Use</h5>\n        <p class=\" paragraph=privacy\">While using our Site, we may ask you to provide us with certain personally identifiable information\n            that can be used to contact or identify you. Personally identifiable information may include, but is not\n            limited to your name (\"Personal Information\").\n            </p>\n    </div>\n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Log Data</h5>\n        <p class=\" paragraph=privacy\"> Like many site operators, we collect information that your browser sends whenever you visit our Site\n            (\"Log Data\").\n            </p>\n\n            <p class=\" paragraph=privacy\"> This Log Data may include information such as your computer's Internet Protocol (\"IP\") address,\n                browser type, browser version, the pages of our Site that you visit, the time and date of your visit,\n                the time spent on those pages and other statistics.\n                </p>\n\n                <p class=\" paragraph=privacy\">In addition, we may use third party services such as Google Analytics that collect, monitor and\n                    analyze this…\n                    </p>\n\n    </div>\n\n\n\n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Communications</h5>\n        <p class=\" paragraph=privacy\">We may use your Personal Information to contact you with newsletters, marketing or promotional\n            materials and other information that ...</p>\n    </div>\n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Cookies</h5>\n        <p class=\" paragraph=privacy\">Cookies are files with small amount of data, which may include an anonymous unique identifier.\n            Cookies are sent to your browser from a web site and stored on your computer's hard drive.\n            </p>\n            <p class=\" paragraph=privacy\">Like many sites, we use \"cookies\" to collect information. You can instruct your browser to refuse all\n                cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may\n                not be able to use some portions of our Site.\n                </p>\n    </div>\n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Security</h5>\n        <p class=\" paragraph=privacy\">The security of your Personal Information is important to us, but remember that no method of\n            transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to\n            use commercially acceptable means to protect your Personal Information, we cannot guarantee its\n            absolute security.\n            \n            </p>\n        \n    </div>\n\n\n    <div class=\"privacy-policy-paragraph\">\n        <h5 class=\"paragraph-privacy-heading\">Changes To This Privacy Policy</h5>\n        <p class=\" paragraph=privacy\">This Privacy Policy is effective as of 07/Apri/2020 and will remain in effect except with respect to any\n            changes in its provisions in the future, which will be in effect immediately after being posted on this\n            page.</p>\n            <p class=\" paragraph=privacy\">We reserve the right to update or change our Privacy Policy at any time and you should check this\n                Privacy Policy periodically. Your continued use of the Service after we post any modifications to the\n                Privacy Policy on this page will constitute your acknowledgment of the modifications and your\n                consent to abide and be bound by the modified Privacy Policy.</p>\n                <p class=\" paragraph=privacy\">If we make any material changes to this Privacy Policy, we will notify you either through the email\n                    address you have provided us, or by placing a prominent notice on our website.</p>\n        \n    </div>\n\n    <div class=\"privacy-policy-paragraph pb-3\">\n        <h5 class=\"paragraph-privacy-heading\">Contact Us</h5>\n        <p class=\" paragraph=privacy\">If you have any questions about this Privacy Policy, please contact us.</p>\n    </div>\n\n \n    \n    \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\r\nWe will notify the seller of your interest in this property \r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n<button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\">OK</button>\r\n<button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" >Cancel</button>\r\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n\r\n<router-outlet></router-outlet>\r\n<app-Footer></app-Footer>\r\n\r\n<!-- <app-dashboard></app-dashboard> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-container\">\n  <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n</div>\n<div class=\"social-login text-center\" *ngIf=\"!isLoggedIn\">\n  <mat-card class=\"sign-in-main\" *ngIf=\"!newUser\">\n    <h4>Login</h4>\n    <div class=\"social-button mt-4\">\n      <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\n        Facebook\n      </button>\n      <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleLogin()\">\n        Google+\n      </button>\n    </div>\n    <div class=\"input-group mb-3 mt-3\">\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Enter email\" #userEmailLogin type=\"email\">\n      </mat-form-field>\n\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Password\" #userPasswordLogin type=\"password\">\n    </mat-form-field>\n\n    <div class=\"input-group-prepend other-option\">\n      <a href=\"#\" class=\"forgot-password\">Forgot password?</a>\n    </div>\n    <button type=\"button\" class=\"btn btn-social-login\" (click)=\"signIn(userEmailLogin.value, userPasswordLogin.value)\">\n      Login\n    </button>\n    <p class=\"dont-have-account pt-2\" id=\"#dont-have-account\"  (click)=\"NewUser()\">Dont have an account?Click here to register</p>\n  </mat-card>\n  <mat-card class=\"mt-4 sign-up-main\" *ngIf=\"newUser\">\n\n    <div class=\"sign-up\">\n      <div class=\"signup-heading\">\n        <h4>or <span class=\"color-signup\">Sign up</span></h4><br>\n      </div>\n      <div class=\"social-button mt-2\">\n        <button type=\"button\" class=\"btn btn-facebook \" (click)=\"facebookLogin()\">\n          Facebook\n        </button>\n        <button type=\"button\" class=\"btn btn-google ml-4\" (click)=\"googleLogin()\">\n          Google+\n        </button>\n      </div>\n      <div class=\"input-group mb-3 mt-3\">\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Name\" #Name>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Enter email\" #userEmailRegister type=\"email\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Password\" #userPasswordRegister type=\"password\">\n        </mat-form-field>\n\n      </div>\n      <button type=\"button\" class=\"btn btn-social-login\"\n      (click)=\"signUp(userEmailRegister.value, userPasswordRegister.value)\">\n      Sign Up\n    </button>\n    <p class=\"dont-have-account pt-2\" (click)=\"OldUser()\">Already have an account? Click here to sign in</p>\n    </div>\n \n  </mat-card>\n</div>\n");

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

/***/ "./src/app/Helper/date.adapter.ts":
/*!****************************************!*\
  !*** ./src/app/Helper/date.adapter.ts ***!
  \****************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");


class AppDateAdapter extends _angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"] {
    parse(value) {
        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);
            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);
        return isNaN(timestamp) ? null : new Date(timestamp);
    }
    format(date, displayFormat) {
        if (displayFormat == "input") {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
        }
        else if (displayFormat == "inputMonth") {
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return this._to2digit(month) + '/' + year;
        }
        else {
            return date.toDateString();
        }
    }
    _to2digit(n) {
        return ('00' + n).slice(-2);
    }
}
const APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
        dateInput: 'input',
        // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
        monthYearLabel: 'inputMonth',
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/Home/Home.component.css":
/*!*****************************************!*\
  !*** ./src/app/Home/Home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\r\n  background-image: url(/assets/Images/handshake.jpg);\r\n  width: 100%;\r\n  height: auto;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.upper-back {\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 250px;\r\n  opacity: 0.5;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.upper-button {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  z-index: 100;\r\n\r\n  font-family: 'Open Sans', sans-serif;\r\n  position: relative;\r\n  top: -145px;\r\n}\r\n\r\n.home-button {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 35%;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Segoe UI Regular';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  src: local('Segoe UI Regular'), url('/assets/font/Segoe UI.woff') format('woff');\r\n}\r\n\r\n.home-text-font {\r\n  font-family: 'Segoe UI Regular';\r\n  color: #707070;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.how_does_it_work_steps {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nimg.step-mage {\r\n  width: 33%;\r\n  margin: 14px;\r\n}\r\n\r\np.step-text {\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Ib21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBbUQ7RUFDbkQsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdGQUFnRjtBQUNsRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBRVQsYUFBYTtFQUViLHVCQUF1QjtFQUV2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Ib21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSW1hZ2VzL2hhbmRzaGFrZS5qcGcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi51cHBlci1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi51cHBlci1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xNDVweDtcclxufVxyXG5cclxuLmhvbWUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHNyYzogbG9jYWwoJ1NlZ29lIFVJIFJlZ3VsYXInKSwgdXJsKCcvYXNzZXRzL2ZvbnQvU2Vnb2UgVUkud29mZicpIGZvcm1hdCgnd29mZicpO1xyXG59XHJcblxyXG4uaG9tZS10ZXh0LWZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUkgUmVndWxhcic7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGg0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jb2xvci1zaWdudXAge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1sb2dpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLnRleHQtY2VudGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IG5vbmU7XHJcbiAgbGVmdDogbm9uZTtcclxuICByaWdodDogOXB4O1xyXG4gIHdpZHRoOiBub25lO1xyXG4gIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5ob3dfZG9lc19pdF93b3JrX3N0ZXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuaW1nLnN0ZXAtbWFnZSB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBtYXJnaW46IDE0cHg7XHJcbn1cclxucC5zdGVwLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Home.component.ts":
/*!****************************************!*\
  !*** ./src/app/Home/Home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let HomeComponent = class HomeComponent {
    constructor(authService, afAuth) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoggedIn = true;
        this.isLoading = false;
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
    facebookLogin() {
        this.isLoading = true;
        this.authService.FacebookAuth().then(data => {
            this.isLoading = false;
        });
    }
    googleLogin() {
        this.isLoading = true;
        this.authService.GoogleAuth().then(data => {
            this.isLoading = false;
        });
    }
    signIn(email, pass) {
        this.isLoading = true;
        this.authService.SignIn(email, pass).then(data => {
            this.isLoading = false;
        });
    }
    signUp(email, pass) {
        this.isLoading = true;
        this.authService.SignUp(email, pass).then(data => {
            this.isLoading = false;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-Home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Home.component.css */ "./src/app/Home/Home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../common.css */ "./src/app/common.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/Home/Property/Property.component.css":
/*!******************************************************!*\
  !*** ./src/app/Home/Property/Property.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.own-porpety-text {\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n.owna-property-text {\r\n  font-size: 16px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.own-property-list {\r\n  padding-right: 15px;\r\n  padding-left: 0px;\r\n  text-align: justify;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: medium;\r\n}\r\nul.own-property-list-style {\r\n  font-size: 15px;\r\n  text-align: justify;\r\n  list-style: none;\r\n}\r\n.own-property-image {\r\n  background-image: url(\"/assets/Images/image-new.png\");\r\n  height: 164px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.own-property-image-text {\r\n  position: absolute;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 21px;\r\n  text-transform: capitalize;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: medium;\r\n}\r\n.btn-own-property-offer {\r\n  width: 90%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n.own-property-home-worth {\r\n  background-color: white;\r\n}\r\n.own-property-text-home-worth {\r\n  text-align: left;\r\n  margin-bottom: .5em;\r\n  padding-left: 31px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-text-home-worth-ans {\r\n  text-align: left;\r\n  padding-left: 31px;\r\n  padding-right: 31px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-blog {\r\n  background-color: white;\r\n  padding-bottom: 5px;\r\n}\r\n.own-property-blog-heading {\r\n  font-size: 25px;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.own-property-blog-image {\r\n  width: 23%;\r\n  margin-right: 9px;\r\n  margin-left: 5px;\r\n}\r\n.own-property-blogs-content-c1 {\r\n  /* margin-right: 88px; */\r\n  text-align: left;\r\n  margin-bottom: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2 {\r\n  text-align: left;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n\r\n}\r\n.own-property-blogs-content-c1-2 {\r\n  text-align: left;\r\n  margin: 0;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n.own-property-blogs-content-c2-2 {\r\n  text-align: left;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n}\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 2px solid grey;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\n.own-property-last-image {\r\n  width: -webkit-fill-available;\r\n}\r\n.own-property-last-image-text {\r\n  text-align: left;\r\n  margin-left: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 400;\r\n  margin-top: 10px;\r\n}\r\n.own-property-last-line {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n}\r\nli {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-end;\r\n  align-items: center;\r\n}\r\n.Looking-property-image {\r\n  background-image: url(\"/assets/Images/image-new2.png\");\r\n  height: 305px;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.looking-property-image-text {\r\n  position: relative;\r\n  /* top: 227px; */\r\n  position: relative;\r\n  top: 76%;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 23px;\r\n  text-transform: capitalize;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.button-own-a-property {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9Qcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1COztBQUVyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9Qcm9wZXJ0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vd24tcG9ycGV0eS10ZXh0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ub3duYS1wcm9wZXJ0eS10ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1saXN0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XHJcbn1cclxuXHJcbnVsLm93bi1wcm9wZXJ0eS1saXN0LXN0eWxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0ltYWdlcy9pbWFnZS1uZXcucG5nXCIpO1xyXG4gIGhlaWdodDogMTY0cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1pbWFnZS10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBtZWRpdW07XHJcbn1cclxuXHJcbi5idG4tb3duLXByb3BlcnR5LW9mZmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWhvbWUtd29ydGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LXRleHQtaG9tZS13b3J0aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMzFweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS10ZXh0LWhvbWUtd29ydGgtYW5zIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMzFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ub3duLXByb3BlcnR5LWJsb2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZy1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1ibG9nLWltYWdlIHtcclxuICB3aWR0aDogMjMlO1xyXG4gIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMSB7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiA4OHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59XHJcbi5vd24tcHJvcGVydHktYmxvZ3MtY29udGVudC1jMS0yIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm93bi1wcm9wZXJ0eS1ibG9ncy1jb250ZW50LWMyLTIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1sYXN0LWltYWdlIHtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1sYXN0LWltYWdlLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm93bi1wcm9wZXJ0eS1sYXN0LWxpbmUge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLkxvb2tpbmctcHJvcGVydHktaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvSW1hZ2VzL2ltYWdlLW5ldzIucG5nXCIpO1xyXG4gIGhlaWdodDogMzA1cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG4ubG9va2luZy1wcm9wZXJ0eS1pbWFnZS10ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogdG9wOiAyMjdweDsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA3NiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5idXR0b24tb3duLWEtcHJvcGVydHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/Property.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Home/Property/Property.component.ts ***!
  \*****************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PropertyComponent = class PropertyComponent {
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
PropertyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-Property",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Property.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/Property.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Property.component.css */ "./src/app/Home/Property/Property.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../common.css */ "./src/app/common.css")).default]
    })
], PropertyComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AlertDialogBuyerDataSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogBuyerDataSubmissionComponent", function() { return AlertDialogBuyerDataSubmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AlertDialogBuyerDataSubmissionComponent = class AlertDialogBuyerDataSubmissionComponent {
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
AlertDialogBuyerDataSubmissionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AlertDialogBuyerDataSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alertDialogBuyerDataSubmission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alertDialogBuyerDataSubmission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AlertDialogBuyerDataSubmissionComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.match-images {\r\n   \r\n    margin-right:1em;\r\n    width: 30%;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: medium;\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        margin-top: 14px;\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllck1hdGNoTGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1Qjs7QUFFM0I7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTs7O0lBR0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBOzs4R0FFOEc7QUFDOUc7O0lBRUksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBOztJQUVJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQVVBOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7QUFDSjtBQUVBOztJQUVJLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllck1hdGNoTGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGNoZXMtbWFpbi1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuLnRoYW5rdS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMThweDtcclxufVxyXG4ubWF0Y2gtc2VjdGlvblxyXG57XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuLm1hdGNoLWltYWdlcyB7XHJcbiAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OjFlbTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGlzY3JpcHRpb24tcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLnRoYW5rdS1wLXNlY3Rpb25cclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubWFpbi1oZWFkaW5nXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNzVweClcclxue1xyXG4gICAgLm1hdGNoLWltYWdlcyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgICAgICB3aWR0aDogMzQlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtbWF0Y2hlc1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BuyerMatcheListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerMatcheListingComponent", function() { return BuyerMatcheListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyerMatchListing.service */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../.././../.././state-service.service */ "./src/app/state-service.service.ts");




let BuyerMatcheListingComponent = class BuyerMatcheListingComponent {
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
        this.MatchesService.getSellerProperties(this.uid).subscribe((ref) => {
            ref.forEach((item) => {
                console.log("from the db " + item.data().Lookingpostcode);
                console.log("from the localStorage " +
                    JSON.stringify(this.stateService.listingBuyer.Lookingpostcode));
                if (item.data().Lookingpostcode ==
                    this.stateService.listingBuyer.Lookingpostcode) {
                    this.matchedProperties.push(item.data()); //Use this object to populate html
                }
                else if (item.data().latitude && item.data().longitude) {
                    this.distanceInKm = this.getDistanceFromLatLonInKm(this.stateService.listingBuyer.latitude, this.stateService.listingBuyer.longitude, item.data().latitude, item.data().longitude);
                    this.unmatchedProperties.push({
                        detail: item.data(),
                        distance: this.distanceInKm,
                    });
                }
                else {
                    this.unmatchedProperties.push({ detail: item.data() });
                }
            });
            this.unmatchedProperties.sort(this.compare);
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
    compare(a, b) {
        const distA = a.distance;
        const distB = b.distance;
        let comparison = 0;
        if (distA > distB) {
            comparison = 1;
        }
        else if (distA < distB) {
            comparison = -1;
        }
        return comparison;
    }
};
BuyerMatcheListingComponent.ctorParameters = () => [
    { type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["MatchesService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] }
];
BuyerMatcheListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-buyerMatchListing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyerMatchListing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyerMatchListing.component.css */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.css")).default]
    })
], BuyerMatcheListingComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts ***!
  \***************************************************************************************************************/
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
        this.customersRef = db.collection("listingSeller");
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

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.streetname {\r\n\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n   \r\n    font-size: 17px;\r\n    color: #00A8FF;\r\n}\r\n.details-output-p\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    /* display: flex; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9idXllck1hdGNoTGlzdGluZy9idXllclNlbGVjdGVkUHJvcGVydHlEZXRhaWwvYnV5ZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxvQ0FBb0M7O0lBRXBDLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOzs7SUFHN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFFVCxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1CdXllci9jb25maXJtQnV5ZXJEZXRhaWwvYnV5ZXJNYXRjaExpc3RpbmcvYnV5ZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2J1eWVyU2VsZWN0ZWRQcm9wZXJ0eURldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi53cmFwcGVyLWRldGFpbC1jb250YWluZXJcclxue1xyXG4gICBcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcbi5zdHJlZXRuYW1lIHtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uZGV0YWlscy1wLWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzAwQThGRjtcclxufVxyXG4uZGV0YWlscy1vdXRwdXQtcFxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbi1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBcclxuICBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG4tY2hhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJ1dHRvbi1hc2tcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiNkZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pbWcubWF0Y2gtaW1hZ2VzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5NYXQtY2FyZC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTBweFxyXG59XHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: BuyerSelectedPropertyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerSelectedPropertyDetailComponent", function() { return BuyerSelectedPropertyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _buyerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyerSelectedPropertyDetail.service */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../.././state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buyerMatchListing.service */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.service.ts");
/* harmony import */ var _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../.././Misc/selectedPropertyDialog/selectedPropertyDialog.component */ "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let BuyerSelectedPropertyDetailComponent = class BuyerSelectedPropertyDetailComponent {
    constructor(Selected_propertydetail_Service, stateService, dialog, snackBar, MatchesService, _Activatedroute, _router) {
        this.Selected_propertydetail_Service = Selected_propertydetail_Service;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.MatchesService = MatchesService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_6__["VERSION"];
        this.isBuyerSelected = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.Lookingpostcode = params.get("Lookingpostcode");
            this.Lookingstate = params.get("Lookingstate");
            this.LookingTown = params.get("LookingTown");
            this.norooms = params.get("norooms");
            this.PropertyCondition = params.get("PropertyCondition");
            this.MaxAmount = params.get("MaxAmount");
            this.LookingAddress = params.get("LookingAddress");
            this.ownership = params.get("ownership");
            this.PropertyType = params.get("PropertyType").replace(/\s/g, "");
            this.features = params.get("features");
            this.Firstname = params.get("Firstname");
            this.Lastname = params.get("Lastname");
            this.Email = params.get("Email");
            this.DOB = params.get("DOB");
            this.UserId = params.get("UserId").replace(/\s/g, "");
            this.MinAmount = params.get("MinAmount");
        });
        console.log("user id" + this.userId);
        console.log(this.PropertyType);
    }
    //Create Database BuyerMatches
    submitForm() {
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
            Firstname: this.Firstname,
            Lastname: this.Lastname,
            Email: this.Email,
            DOB: this.DOB,
            UserId: this.UserId,
            MinAmount: this.MinAmount,
            matchStatus: "pending",
        };
        this.isBuyerSelected = true;
        this.return = this.Selected_propertydetail_Service.matchesBuyerCreate(this.uid, this.matchesBuyer).then((data) => {
            if (data == true) {
                this.isBuyerSelected = false;
                const dialogRef = this.dialog.open(_Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_5__["SelectedPropertyDialogComponent"], {
                    data: {
                        buttonText: {
                            cancel: "Done",
                        },
                    },
                });
            }
        });
        this.matchesSeller = {
            LookingStreetname: this.stateService.listingBuyer.LookingStreetname,
            Lookingpostcode: this.stateService.listingBuyer.Lookingpostcode,
            PropertyType: this.stateService.listingBuyer.PropertyType,
            Conditions: this.stateService.listingBuyer.Conditions,
            ChainStatus: this.stateService.listingBuyer.ChainStatus,
            Firstname: this.stateService.listingBuyer.Firstname,
            Lastname: this.stateService.listingBuyer.Lastname,
            Email: this.stateService.listingBuyer.Email,
            DOB: this.stateService.listingBuyer.DOB,
            FinancialPosition: this.stateService.listingBuyer.FinancialPosition,
            SearchRadius: this.stateService.listingBuyer.SearchRadius,
            PriceRange: this.stateService.listingBuyer.PriceRange,
            Validity: this.stateService.listingBuyer.Validity,
            Type: this.stateService.listingBuyer.Type,
            Position: this.stateService.listingBuyer.Position,
            UserId: this.stateService.listingBuyer.UserId,
            matchStatus: "confirm_interest",
        };
        this.isBuyerSelected = true;
        this.return = this.Selected_propertydetail_Service.matchesSellerCreate(this.UserId, this.matchesSeller).then((data) => {
            if (data == true) {
                this.isBuyerSelected = false;
                console.log("Done");
            }
        });
    }
};
BuyerSelectedPropertyDetailComponent.ctorParameters = () => [
    { type: _buyerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__["SelectedpropertydetailService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _buyerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__["MatchesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
BuyerSelectedPropertyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-buyerSelectedPropertyDetail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buyerSelectedPropertyDetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buyerSelectedPropertyDetail.component.css */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.css")).default]
    })
], BuyerSelectedPropertyDetailComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.service.ts ***!
  \*****************************************************************************************************************************************************/
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
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matcheBuyerRef = null;
        this.matcheSellerRef = null;
        this.customersRef = db.collection("listingSeller");
    }
    //create Database Buyer Matches
    matchesBuyerCreate(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.db
                .collection("matchesBuyer")
                .doc(key)
                .collection("matches")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Document successfully written!");
            });
            return true;
        });
    }
    matchesSellerCreate(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.db
                .collection("matchesSeller")
                .doc(key)
                .collection("matches")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Document seller successfully written!");
            });
            return true;
        });
    }
};
SelectedpropertydetailService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SelectedpropertydetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SelectedpropertydetailService);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  /* margin-top: 9px; */\r\n  padding-top: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: bold;\r\n  color: #5E5959;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.output {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\nsection.example-section.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  /* margin-top: -5px; */\r\n  font-weight: 500;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2NvbmZpcm1CdXllckRldGFpbC9jb25maXJtQnV5ZXJEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFFVCxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL1Byb3BlcnR5L2ZpbGxGb3JtQnV5ZXIvY29uZmlybUJ1eWVyRGV0YWlsL2NvbmZpcm1CdXllckRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNvbmZpcm0tZmlyc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4udGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLmNvbmZpcm0tcGFnZS1oZWFkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAvKiBtYXJnaW4tdG9wOiA5cHg7ICovXHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVFNTk1OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5lbmRpbmQtYnV0dG9uIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm9yLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5zZWN0aW9uLmV4YW1wbGUtc2VjdGlvbi5wcm9wZXJ0eS1jb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvKiBtYXJnaW4tdG9wOiAtNXB4OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmBuyerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmBuyerDetailComponent", function() { return ConfirmBuyerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fillFormBuyer.service */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alertDialogBuyerDataSubmission.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../http.service */ "./src/app/http.service.ts");











let ConfirmBuyerDetailComponent = class ConfirmBuyerDetailComponent {
    constructor(activatedRoute, formsService, authService, afAuth, stateService, dialog, snackBar, route, _location, postcodeService) {
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
        this.isLoading = false;
        this.selectedIndex = 0;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.maxNumberOfTabs = 2;
        this.Needsmodernisation = String;
        this.isBuyer = false;
    }
    equals(objOne, objTwo) {
        if (typeof objOne !== "undefined" && typeof objTwo !== "undefined") {
            return objOne.id === objTwo.id;
        }
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
        this.listingBuyer = this.stateService.listingBuyer;
        //Lookup Declared Function
        this.postcodeService
            .getLat(this.listingBuyer.Lookingpostcode)
            .subscribe(data => {
            this.postcodeCoordinates = data;
            (this.listingBuyer.longitude = this.postcodeCoordinates.result.longitude),
                (this.listingBuyer.latitude = this.postcodeCoordinates.result.latitude),
                (this.listingBuyer.UserId = this.userData.uid),
                (this.isBuyer = true);
            this.return = this.formsService
                .createCustomer(this.userData.uid, this.listingBuyer)
                .then(data => {
                if (data == true) {
                    this.isBuyer = false;
                }
            });
        });
    }
    submitForm() {
        this.listingBuyer.UserId = this.userData.uid;
        this.isLoading = true;
        this.return = this.formsService
            .createCustomer(this.userData.uid, this.listingBuyer)
            .then(data => {
            if (data == true) {
                this.isLoading = false;
                const dialogRef = this.dialog.open(_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogBuyerDataSubmissionComponent"], {
                    data: {
                        message: "HelloWorld",
                        buttonText: {
                            cancel: "Done"
                        }
                    }
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
    backClicked() {
        this._location.back();
    }
    Lat() {
        this.listingBuyer.latitude = this.data;
    }
};
ConfirmBuyerDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] }
];
ConfirmBuyerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirmBuyerDetail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmBuyerDetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmBuyerDetail.component.css */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.css")).default]
    })
], ConfirmBuyerDetailComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-containers {\r\n  width: auto;\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n\r\n.forms-container {\r\n  padding-bottom: 4%;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden; \r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244d93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #dd4b33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.color-signup {\r\n  color: #244d93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244d93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  margin-left: 0.255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: 0.4em solid;\r\n  border-right: 0.4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: 0.4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244d93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244d93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n/* .second-container {\r\n  background-color: white;\r\n} */\r\n\r\ninput#Tittle {\r\n  width: 20%;\r\n}\r\n\r\n.example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 17px;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.form-check-input {\r\n  width: auto;\r\n}\r\n\r\n.last-radio-button {\r\n  margin-right: 0px;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.input {\r\n  border: none;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.tabs-align-padding {\r\n\r\n\r\n\r\n  margin: 10px;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.social-login {\r\n  padding: 15px;\r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.Line-form {\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n\r\n.mat-card-buyer\r\n{\r\n  border: 1px solid black;\r\n}\r\n\r\n.property-con-form\r\n{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfieldset {\r\n \r\n  border: 2px solid black;\r\n  display: block;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  padding-top: 0.35em;\r\n  padding-bottom: 0.625em;\r\n  padding-left: 0.75em;\r\n  padding-right: 0.75em;\r\n width: auto;\r\n}\r\n\r\nlegend\r\n{\r\n  width: auto;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.text-field-height\r\n{\r\n  height: 200px;\r\n}\r\n\r\ntextarea#mat-input-15 {\r\n  height: 200px;\r\n}\r\n\r\nsection.checkbox-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mat_card_title\r\n{\r\n  font-size: 17px;\r\n}\r\n\r\n.forms-heading {\r\n  margin: 0px;\r\n}\r\n\r\n.forms-star\r\n{\r\n  font-size: 14px;\r\n}\r\n\r\n.price-selection {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  flex-direction: initial;\r\n  width: 100%;\r\n  justify-content: space-evenly\r\n}\r\n\r\n.Label-notes {\r\n  font-size: 12px;\r\n}\r\n\r\n.radio-button-align {\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.card-margin\r\n{\r\n  margin: 10px;\r\n}\r\n\r\n.filed-width\r\n{\r\n  width: 49% !important;\r\n}\r\n\r\n.select-constion {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 18px;\r\n}\r\n\r\nimg.button-cross {\r\n  height: 2vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybUJ1eWVyL2ZpbGxGb3JtQnV5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1COztBQUVyQjs7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBQ0E7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCLFdBQVc7QUFDWjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWDtBQUNGOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1CdXllci9maWxsRm9ybUJ1eWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJzIHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gaDQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2xvci1zaWdudXAge1xyXG4gIGNvbG9yOiAjMjQ0ZDkzO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1sb2dpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NGQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBtYXJnaW4tbGVmdDogMC4yNTVlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogMi4yNTVlbTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci10b3A6IDAuNGVtIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogMC40ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3JkZXItbGVmdDogMC40ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0ZDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tbmV4dCB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0ZDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5vci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLnNlY29uZC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59ICovXHJcblxyXG5pbnB1dCNUaXR0bGUge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLW5leHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTdweDtcclxufVxyXG5cclxuLmJ1dHRvbi1uZXh0LXRhYjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmxhc3QtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnJhZGlvLWFsaWduIHtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWF0LW1haWwtaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRhYnMtYWxpZ24tcGFkZGluZyB7XHJcblxyXG5cclxuXHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbCB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvcGFjaXR5OiAuNjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5MaW5lLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIHtcclxuICBtYXJnaW46IDFyZW0gMDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ubWF0LW9wdGlvbiBpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHJcbn1cclxuLm1hdC1jYXJkLWJ1eWVyXHJcbntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4ucHJvcGVydHktY29uLWZvcm1cclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5maWVsZHNldCB7XHJcbiBcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xyXG4gd2lkdGg6IGF1dG87XHJcbn1cclxubGVnZW5kXHJcbntcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRleHQtZmllbGQtaGVpZ2h0XHJcbntcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhI21hdC1pbnB1dC0xNSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5zZWN0aW9uLmNoZWNrYm94LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubWF0X2NhcmRfdGl0bGVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZm9ybXMtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZvcm1zLXN0YXJcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2Utc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbml0aWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XHJcbn1cclxuLkxhYmVsLW5vdGVzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJhZGlvLWJ1dHRvbi1hbGlnbiB7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbi5jYXJkLW1hcmdpblxyXG57XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlZC13aWR0aFxyXG57XHJcbiAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3QtY29uc3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbmltZy5idXR0b24tY3Jvc3Mge1xyXG4gIGhlaWdodDogMnZoO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts ***!
  \************************************************************************/
/*! exports provided: FillFormBuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormBuyerComponent", function() { return FillFormBuyerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Model/listingBuyer */ "./src/app/Model/listingBuyer.ts");
/* harmony import */ var _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fillFormBuyer.service */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../Helper/date.adapter */ "./src/app/Helper/date.adapter.ts");
/* harmony import */ var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Misc/alertFormdialog/alertFormdialog.component */ "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");




















let FillFormBuyerComponent = class FillFormBuyerComponent {
    constructor(authService, afs, // Inject Firestore service
    formsService, firestore, afAuth, db, dialog, snackBar, route, router, stateService, postcodeService, formBuilder, fb) {
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
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.addressianAutoCompleteCurrent$ = null;
        this.autoCompleteControlCurrent = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.addressianAutoCompleteLooking$ = null;
        this.autoCompleteControlLooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.isLoggedIn = true;
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"]();
        this.submitted = false;
        this.links = ["First", "Second", "Third"];
        this.activeLink = this.links[0];
        this.background = "";
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.Condition = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.ConditionsList = [
            "Refurbished",
            "New build",
            "Needs modernisation",
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email,
        ]);
        this.lastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.firstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6),
        ]);
    }
    toggleBackground() {
        this.background = this.background ? "" : "primary";
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    ngOnInit() {
        //Pre - populate the email field
        this.user = JSON.parse(localStorage.getItem("user"));
        this.listingBuyer.Email = this.user.email;
        if (this.user) {
            //
        }
        this.afAuth.authState.subscribe((user) => {
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
        this.addressianAutoCompleteLooking$ = this.autoCompleteControlLooking.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), 
        // delay emits
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), 
        // use switch map so as to cancel previous subscribed events, before creating new once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((value) => {
            if (value !== "") {
                this.lookup(this.listingBuyer.Lookingpostcode).subscribe((data) => {
                    this.data = data;
                });
                return this.lookup(this.listingBuyer.Lookingpostcode);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
        }));
        // The auto population of github method
        this.addressianAutoCompleteCurrent$ = this.autoCompleteControlCurrent.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), 
        // delay emits
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), 
        // use switch map so as to cancel previous subscribed events, before creating new once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((value) => {
            if (value !== "") {
                this.lookup(this.listingBuyer.Currentpostcode).subscribe((data) => {
                    this.data = data;
                });
                return this.lookup(this.listingBuyer.Currentpostcode);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])(null);
            }
        }));
        // End method
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    newCustomer() {
        this.submitted = false;
        this.listingBuyer = new _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"]();
    }
    lookup(value) {
        return this.postcodeService.search(value);
    }
    getPost(value) {
        this.listingBuyer.CurrentAddress = value.address;
        this.listingBuyer.CurrentTown = value.citytown;
        this.listingBuyer.Currentstate = value.county;
        this.listingBuyer.Currentpostcode = value.postcode;
        console.log(value);
    }
    getPosts(value) {
        this.listingBuyer.LookingTown = value.citytown;
        this.listingBuyer.Lookingstate = value.county;
        this.listingBuyer.Lookingpostcode = value.postcode;
        this.listingBuyer.LookingStreetname = value.address[2];
        console.log(value);
    }
    selectTab(nextIndex, presentIndex) {
        if (presentIndex == 0) {
            if (this.listingBuyer.title == null ||
                this.listingBuyer.Firstname == null ||
                this.listingBuyer.Lastname == null ||
                this.listingBuyer.DOB == null ||
                this.listingBuyer.phonenumber == null ||
                this.listingBuyer.ChainStatus == null) {
                console.log("New Error");
                this.openAlertDialog();
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 1) {
            if (nextIndex > presentIndex) {
                if (this.listingBuyer.Currentpostcode == null ||
                    this.listingBuyer.CurrentAddress == null ||
                    this.listingBuyer.Currentstate == null ||
                    this.listingBuyer.CurrentTown == null ||
                    this.listingBuyer.Lookingpostcode == null ||
                    this.listingBuyer.LookingTown == null ||
                    this.listingBuyer.Lookingstate == null ||
                    this.listingBuyer.FinancialPosition == null ||
                    this.listingBuyer.SearchRadius == null ||
                    this.listingBuyer.PropertyType == null ||
                    this.listingBuyer.MinAmount == null ||
                    this.listingBuyer.MaxAmount == null ||
                    this.listingBuyer.Validity == null ||
                    this.listingBuyer.Conditions == null) {
                    this.openAlertDialog();
                }
                else {
                    this.selectedIndex = nextIndex;
                }
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 2) {
            if (nextIndex > presentIndex) {
                if (this.listingBuyer.Type == null ||
                    this.listingBuyer.Position == null ||
                    this.listingBuyer.otherInfo == null) {
                    this.openAlertDialog();
                }
                else {
                    this.onSubmit();
                }
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
    }
    openAlertDialog() {
        const dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_15__["AltertFormDialogComponent"], {
            data: {
                message: "HelloWorld",
                buttonText: {
                    cancel: "Done",
                },
            },
        });
    }
    onSubmit() {
        this.stateService.listingBuyer = this.listingBuyer;
        this.router.navigate(["confirmbuyerdetail"]);
    }
};
FillFormBuyerComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_9__["StateServiceService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FillFormBuyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-fillFormBuyer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fillFormBuyer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.html")).default,
        providers: [
            {
                provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                useClass: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__["AppDateAdapter"],
            },
            {
                provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"],
                useValue: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_14__["APP_DATE_FORMATS"],
            },
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fillFormBuyer.component.css */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.css")).default]
    })
], FillFormBuyerComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts ***!
  \**********************************************************************/
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
        this.dbPath = "listingBuyer";
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

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts ***!
  \***************************************************************************************************************/
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
        selector: 'app-alertDialogSellerDataSubmission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alertDialogSellerDataSubmission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AlertDialogComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-main-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.confirm-first-container {\r\n  background-color: white;\r\n  padding-bottom: 1px;\r\n}\r\n\r\n.table td,\r\n.table th {\r\n  padding: .75rem;\r\n  vertical-align: top;\r\n  border-top: none;\r\n}\r\n\r\n.confirm-page-heading {\r\n  margin-left: 16px;\r\n  /* margin-top: 9px; */\r\n  padding-top: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\ntable {\r\n  margin-left: 11px;\r\n  margin-top: -15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.table td {\r\n  padding: 5px;\r\n}\r\n\r\n.details-p-headings {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: bold;\r\n  color: #5E5959;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.output {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\nsection.example-section.property-con-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 14px;\r\n  /* margin-top: -5px; */\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL2NvbmZpcm1TZWxsZXJEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFFVCxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9Ib21lL1Byb3BlcnR5L2ZpbGxGb3JtU2VsbGVyL2NvbmZpcm1TZWxsZXJEZXRhaWwvY29uZmlybVNlbGxlckRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tbWFpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNvbmZpcm0tZmlyc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4udGFibGUgdGQsXHJcbi50YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLmNvbmZpcm0tcGFnZS1oZWFkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAvKiBtYXJnaW4tdG9wOiA5cHg7ICovXHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZXRhaWxzLXAtaGVhZGluZ3Mge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzVFNTk1OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5lbmRpbmQtYnV0dG9uIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFjayB7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIC8qIGhlaWdodDogMzVweDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLW5leHQge1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAvKiBoZWlnaHQ6IDM1cHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm9yLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5zZWN0aW9uLmV4YW1wbGUtc2VjdGlvbi5wcm9wZXJ0eS1jb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvKiBtYXJnaW4tdG9wOiAtNXB4OyAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConfirmSellerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmSellerDetailComponent", function() { return ConfirmSellerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fillFormSeller.service */ "./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alertDialogSellerDataSubmission.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../http.service */ "./src/app/http.service.ts");











let ConfirmSellerDetailComponent = class ConfirmSellerDetailComponent {
    constructor(activatedRoute, SellerformService, authService, afAuth, stateService, dialog, snackBar, route, _location, postcodeService) {
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
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.isBuyer = false;
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
        this.listingSeller = this.stateService.listingSeller;
        //For Seller
        this.postcodeService.getLat(this.listingSeller.Lookingpostcode).subscribe(data => {
            this.postcodeCoordinates = data;
            (this.listingSeller.longitude = this.postcodeCoordinates.result.longitude),
                (this.listingSeller.latitude = this.postcodeCoordinates.result.latitude),
                (this.listingSeller.UserId = this.userData.uid),
                (this.isBuyer = true);
            this.return = this.SellerformService.createCustomer(this.userData.uid, this.listingSeller)
                .then(data => {
                if (data == true) {
                    this.isBuyer = false;
                    console.log(this.listingSeller.latitude);
                }
            });
        });
    }
    submitForm() {
        this.listingSeller.UserId = this.userData.uid;
        this.isLoading = true;
        this.return = this.SellerformService.createCustomer(this.userData.uid, this.listingSeller).then(data => {
            if (data == true) {
                this.isLoading = false;
                const dialogRef = this.dialog.open(_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_8__["AlertDialogComponent"], {
                    data: {
                        message: "HelloWorld",
                        buttonText: {
                            cancel: "Done"
                        }
                    }
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
    backClicked() {
        this._location.back();
    }
};
ConfirmSellerDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _fillFormSeller_service__WEBPACK_IMPORTED_MODULE_3__["SellerformService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"] }
];
ConfirmSellerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirmSellerDetail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmSellerDetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmSellerDetail.component.css */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.css")).default]
    })
], ConfirmSellerDetailComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.match-images {\r\n    width: 30%;\r\n    margin-right: 1em;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    text-transform: capitalize;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: medium;\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        /* margin-top: 14px; */\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n    width: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJNYXRjaExpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7O0FBRTNCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFFQTs7OEdBRThHO0FBQzlHOztJQUVJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBOztJQUVJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFTQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0FBQ0o7QUFDQTs7SUFFSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1TZWxsZXIvY29uZmlybVNlbGxlckRldGFpbC9zZWxsZXJNYXRjaExpc3Rpbmcvc2VsbGVyTWF0Y2hMaXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2hlcy1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4udGhhbmt1LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG59XHJcbi5tYXRjaC1zZWN0aW9uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1hdGNoLWltYWdlcyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuRm9udC1zaXplc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLmFyZWEtcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGlzY3JpcHRpb24tcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLmZvbnQtaGVhZGluZ3Ncclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4udGhhbmt1LXAtc2VjdGlvblxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYWluLWhlYWRpbmdcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Mzc1cHgpXHJcbntcclxuICAgIC5tYXRjaC1pbWFnZXMge1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDE0cHg7ICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgIH1cclxufVxyXG4ubWF0LWNhcmQtbWF0Y2hlc1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SellerMatchListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerMatchListingComponent", function() { return SellerMatchListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sellerMatchListing.service */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../state-service.service */ "./src/app/state-service.service.ts");




let SellerMatchListingComponent = class SellerMatchListingComponent {
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
                if (item.data().Lookingpostcode ==
                    this.stateService.listingSeller.Lookingpostcode) {
                    this.matchedProperties.push(item.data()); //Use this object to populate html
                }
                else if (item.data().latitude && item.data().longitude) {
                    // console.log(item.data().postcode.latitude);
                    this.distanceInKm = this.getDistanceFromLatLonInKm(this.stateService.listingSeller.latitude, this.stateService.listingSeller.longitude, item.data().latitude, item.data().longitude);
                    this.unmatchedProperties.push({
                        detail: item.data(),
                        distance: this.distanceInKm
                    });
                    console.log({ detail: item.data(), distance: this.distanceInKm });
                }
                else {
                    this.unmatchedProperties.push({ detail: item.data() });
                    //console.log({ detail: item.data() });
                }
            });
            this.unmatchedProperties.sort(this.compare);
            this.noOfMatches = this.matchedProperties.length;
            this.noOfUnmatched = this.unmatchedProperties.length;
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
    compare(a, b) {
        const distA = a.distance;
        const distB = b.distance;
        let comparison = 0;
        if (distA > distB) {
            comparison = 1;
        }
        else if (distA < distB) {
            comparison = -1;
        }
        return comparison;
    }
};
SellerMatchListingComponent.ctorParameters = () => [
    { type: _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_2__["SellerMatchListingService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] }
];
SellerMatchListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sellerMatchListing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sellerMatchListing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sellerMatchListing.component.css */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.css")).default]
    })
], SellerMatchListingComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SellerMatchListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerMatchListingService", function() { return SellerMatchListingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let SellerMatchListingService = class SellerMatchListingService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("listingSeller");
        // Collection Group
        this.propertiesRef = db.collectionGroup("requirements");
    }
    getSellerProperties(uid) {
        return this.propertiesRef.get();
    }
};
SellerMatchListingService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SellerMatchListingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SellerMatchListingService);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-agent-selection {\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n.note-agent-selection {\r\n    font-size: 20px;\r\n}\r\n.agent-selection-radiobutton-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.agent-selection-name {\r\n    font-size: 20px;\r\n}\r\n.agent-selection-commision {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.agent-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.button-card{\r\n    display: flex;\r\n    justify-content: ali;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2FnZW50U2VsZWN0aW9uL2FnZW50U2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL2FnZW50U2VsZWN0aW9uL2FnZW50U2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYWdlbnQtc2VsZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ubm90ZS1hZ2VudC1zZWxlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hZ2VudC1zZWxlY3Rpb24tcmFkaW9idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuLmFnZW50LXNlbGVjdGlvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYWdlbnQtc2VsZWN0aW9uLWNvbW1pc2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFnZW50LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idXR0b24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGFsaTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: AgentSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSelectionComponent", function() { return AgentSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentSelection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agentSelection.service */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts");



let AgentSelectionComponent = class AgentSelectionComponent {
    constructor(AgentSelectionService) {
        this.AgentSelectionService = AgentSelectionService;
    }
    ngOnInit() {
    }
};
AgentSelectionComponent.ctorParameters = () => [
    { type: _agentSelection_service__WEBPACK_IMPORTED_MODULE_2__["AgentSelectionService"] }
];
AgentSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agentSelection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agentSelection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agentSelection.component.css */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.css")).default]
    })
], AgentSelectionComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.service.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: AgentSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSelectionService", function() { return AgentSelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let AgentSelectionService = class AgentSelectionService {
    constructor(db) {
        this.db = db;
        //private dbPathBuyer = "matchesBuyer"; 
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //Buyer Database
        this.customersRef = db.collection("agentSignup");
    }
    //Fetching Buyer Detail
    getBuyerProperties(uid) {
        return this.customersRef
            .doc(uid)
            .collection("agents")
            .ref.get();
    }
};
AgentSelectionService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AgentSelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentSelectionService);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property-detail-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    padding-bottom: 9px;\r\n}\r\n.wrapper-detail-container\r\n{\r\n   \r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.streetname {\r\n\r\n    padding-top: 20px;\r\n}\r\n.details-p-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n   \r\n    font-size: 17px;\r\n    color: #00A8FF;\r\n}\r\n.details-output-p\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.table td, .table th {\r\n    padding: .75rem;\r\n    vertical-align: top;\r\n border-top: none;\r\n}\r\n.button-details {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n  \r\n  \r\n    align-content: center;\r\n    margin-top: 70px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.btn-chat {\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 44%;\r\n    height: 35px;\r\n    /* display: flex; */\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n}\r\n.button-ask\r\n{\r\n    background-color: #244D93;\r\n    color: white;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n.carousel-item {\r\n    height: 170px;\r\n    background-size: cover;\r\n}\r\n.carousel-indicators li {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 100%;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nimg.match-images {\r\n    width: 30%;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n   \r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 10px\r\n}\r\n.loading-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9;\r\n    background: black;\r\n    opacity: 0.5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL3NlbGxlclNlbGVjdGVkUHJvcGVydHlEZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksb0NBQW9DOztJQUVwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLG9DQUFvQzs7SUFFcEMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7OztJQUc3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25CO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUVULGFBQWE7SUFFYix1QkFBdUI7SUFFdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9jb25maXJtU2VsbGVyRGV0YWlsL3NlbGxlck1hdGNoTGlzdGluZy9zZWxsZXJTZWxlY3RlZFByb3BlcnR5RGV0YWlsL3NlbGxlclNlbGVjdGVkUHJvcGVydHlEZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1kZXRhaWwtY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcclxufVxyXG4ud3JhcHBlci1kZXRhaWwtY29udGFpbmVyXHJcbntcclxuICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4uc3RyZWV0bmFtZSB7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmRldGFpbHMtcC1oZWFkaW5nc1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICMwMEE4RkY7XHJcbn1cclxuLmRldGFpbHMtb3V0cHV0LXBcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5idXR0b24tZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgXHJcbiAgXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnRuLWNoYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idXR0b24tYXNrXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuLnNlbGVjdGVkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYjZGVtbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1nLm1hdGNoLWltYWdlcyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uTWF0LWNhcmQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDEwcHhcclxufVxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: SellerSelectedPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSelectedPropertyComponent", function() { return SellerSelectedPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sellerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sellerSelectedPropertyDetail.service */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../.././state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sellerMatchListing.service */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.service.ts");
/* harmony import */ var _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../.././Misc/selectedPropertyDialog/selectedPropertyDialog.component */ "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SellerSelectedPropertyComponent = class SellerSelectedPropertyComponent {
    constructor(seller_Selected_propertydetail_Service, stateService, dialog, snackBar, SellerMatchListingService, _Activatedroute, _router) {
        this.seller_Selected_propertydetail_Service = seller_Selected_propertydetail_Service;
        this.stateService = stateService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.SellerMatchListingService = SellerMatchListingService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_6__["VERSION"];
        this.isSellerSelected = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.LookingStreetname = params.get("LookingStreetname");
            this.Lookingpostcode = params.get("Lookingpostcode");
            this.PropertyType = params.get("PropertyType");
            this.Conditions = params.get("Conditions");
            this.ChainStatus = params.get("ChainStatus");
            this.Firstname = params.get("Firstname");
            this.Lastname = params.get("Lastname");
            this.Email = params.get("Email");
            this.DOB = params.get("DOB");
            this.FinancialPosition = params.get("FinancialPosition");
            this.SearchRadius = params.get("SearchRadius");
            this.PriceRange = params.get("PriceRange");
            this.Validity = params.get("Validity");
            this.Type = params.get("Type");
            this.Position = params.get("Position");
            this.UserId = params.get("UserId").replace(/\s/g, "");
            this.norooms = params.get("norooms");
        });
        console.log("user id" + this.UserId);
    }
    //Create Database match Seller
    submitForm() {
        this.matchesSeller = {
            LookingStreetname: this.LookingStreetname,
            Lookingpostcode: this.Lookingpostcode,
            PropertyType: this.PropertyType,
            Conditions: this.Conditions,
            ChainStatus: this.ChainStatus,
            Firstname: this.Firstname,
            Lastname: this.Lastname,
            Email: this.Email,
            DOB: this.DOB,
            FinancialPosition: this.FinancialPosition,
            SearchRadius: this.SearchRadius,
            PriceRange: this.PriceRange,
            Validity: this.Validity,
            Type: this.Type,
            Position: this.Position,
            UserId: this.UserId,
            matchStatus: "pending",
        };
        console.log(this.UserId);
        this.isSellerSelected = true;
        this.return = this.seller_Selected_propertydetail_Service
            .matchesSellerCreate(this.uid, this.matchesSeller)
            .then((data) => {
            if (data == true) {
                this.isSellerSelected = false;
                const dialogRef = this.dialog.open(_Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_5__["SelectedPropertyDialogComponent"], {
                    data: {
                        buttonText: {
                            cancel: "Done",
                        },
                    },
                });
            }
        });
        this.matchesBuyer = {
            Lookingpostcode: this.stateService.listingSeller.Lookingpostcode,
            Lookingstate: this.stateService.listingSeller.Lookingstate,
            LookingTown: this.stateService.listingSeller.LookingTown,
            norooms: this.stateService.listingSeller.norooms,
            PropertyCondition: this.stateService.listingSeller.PropertyCondition,
            MaxAmount: this.stateService.listingSeller.MaxAmount,
            LookingAddress: this.stateService.listingSeller.LookingAddress,
            ownership: this.stateService.listingSeller.ownership,
            PropertyType: this.stateService.listingSeller.PropertyType,
            features: this.stateService.listingSeller.features,
            Firstname: this.stateService.listingSeller.Firstname,
            Lastname: this.stateService.listingSeller.Lastname,
            Email: this.stateService.listingSeller.Email,
            DOB: this.stateService.listingSeller.DOB,
            UserId: this.stateService.listingSeller.UserId,
            MinAmount: this.stateService.listingSeller.MinAmount,
            matchStatus: "confirm_interest",
        };
        console.log(this.UserId);
        this.isSellerSelected = true;
        this.return = this.seller_Selected_propertydetail_Service
            .matchesBuyerCreate(this.UserId, this.matchesBuyer)
            .then((data) => {
            if (data == true) {
                this.isSellerSelected = false;
                console.log("Buyer Done");
            }
        });
    }
};
SellerSelectedPropertyComponent.ctorParameters = () => [
    { type: _sellerSelectedPropertyDetail_service__WEBPACK_IMPORTED_MODULE_2__["SellerSelectedPropertyDetailService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _sellerMatchListing_service__WEBPACK_IMPORTED_MODULE_4__["SellerMatchListingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
SellerSelectedPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-Propertydetails",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sellerSelectedPropertyDetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sellerSelectedPropertyDetail.component.css */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.css")).default]
    })
], SellerSelectedPropertyComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.service.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: SellerSelectedPropertyDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSelectedPropertyDetailService", function() { return SellerSelectedPropertyDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let SellerSelectedPropertyDetailService = class SellerSelectedPropertyDetailService {
    constructor(db) {
        this.db = db;
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matcheBuyerRef = null;
        this.matcheSellerRef = null;
        this.customersRef = db.collection("listingBuyer");
    }
    //create Database Seller Matches
    matchesSellerCreate(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.db
                .collection("matchesSeller")
                .doc(key)
                .collection("matches")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Document successfully written!");
            });
            return true;
        });
    }
    matchesBuyerCreate(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.db
                .collection("matchesBuyer")
                .doc(key)
                .collection("matches")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Document successfully written!");
            });
            return true;
        });
    }
};
SellerSelectedPropertyDetailService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SellerSelectedPropertyDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SellerSelectedPropertyDetailService);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-containers {\r\n\r\n  width: auto;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.forms-container {\r\n\r\n  padding-bottom: 4%;\r\n  padding-top: 1%;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.tab-content {\r\n  padding: 20px;\r\n}\r\n\r\n.row {\r\n  overflow-x: hidden;\r\n}\r\n\r\nnav {\r\n  background-color: #244D93;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  border-radius: 11px;\r\n  margin-top: 62px;\r\n\r\n}\r\n\r\n.nav-link {\r\n  color: white;\r\n}\r\n\r\n.nav-tabs .nav-item.show .nav-link,\r\n.nav-tabs .nav-link.active {\r\n  color: #244D93;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700 !important;\r\n}\r\n\r\n.other-option {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0rem 1rem;\r\n\r\n}\r\n\r\ndiv#nav-tabContent {\r\n  width: auto;\r\n}\r\n\r\n.seller-form-upper {\r\n  padding-top: 6px;\r\n}\r\n\r\n.seller-form-upper p {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.seller-form-upper span {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.top-hr {\r\n  margin-top: -1rem;\r\n  margin-bottom: 0rem;\r\n  border: 0;\r\n  border-top: 2px solid grey\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n\r\n  margin-left: .255em;\r\n  vertical-align: 2.255em;\r\n  content: \"\";\r\n  border-top: .4em solid;\r\n  border-right: .4em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: .4em solid transparent;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: 3%;\r\n}\r\n\r\n/* span.text-dropdown {\r\n    float: left;\r\n} */\r\n\r\n.dropdown-item {\r\n  text-align: center;\r\n}\r\n\r\nbutton.btn.dropdown-toggle {\r\n  width: 100%;\r\n  /* border: 1px solid grey; */\r\n  border: 1px solid #CED4DA;\r\n}\r\n\r\n.endind-button {\r\n  /* background-color: unset; */\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.btn.btn-back {\r\n  width: 33%;\r\n  background-color: #244D93;\r\n  /* height: 35px; */\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-next {\r\n  background-color: #244D93;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.or-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.second-container {\r\n  background-color: white;\r\n\r\n}\r\n\r\ninput#Tittle {\r\n  width: 100%;\r\n}\r\n\r\n.forms-heading {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n}\r\n\r\n.forms-star {\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nlabel {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #707070;\r\n}\r\n\r\n.dropdown-item {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #707070;\r\n}\r\n\r\n.form-or-p {\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 26px;\r\n  /* padding: 8px; */\r\n  background: #fff;\r\n  border: 1px solid black;\r\n  color: #666;\r\n  text-align: center;\r\n  font: 19px 'Open Sans', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.forms-or {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.form-or-p:before,\r\n.form-or-p:after {\r\n  background-color: #333;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 1px;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n}\r\n\r\n.form-or-p:before {\r\n  right: .5em;\r\n  margin-left: -100%;\r\n}\r\n\r\n.form-or-p:after {\r\n  left: .5em;\r\n  margin-right: -100%;\r\n}\r\n\r\nbtnDefault,\r\n.btnUpload {\r\n  background-color: lightgrey;\r\n  border: 1px solid #CCCCCC;\r\n  color: #333333;\r\n  cursor: pointer;\r\n  font-weight: 400;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btnDefault:focus,\r\n.btnDefault:hover,\r\n.btnUpload:focus,\r\n.btnUpload:hover {\r\n  background-color: grey;\r\n}\r\n\r\n.btnM {\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  padding: 6px 12px;\r\n}\r\n\r\n.customUpload {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.customUpload input.upload {\r\n  cursor: pointer;\r\n  margin: 0;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n  padding: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.forms-heading-optional {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n\r\n  padding-left: 16px;\r\n}\r\n\r\n.optional-button-group {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-top: 40px;\r\n}\r\n\r\n.row-check {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checkbox-check {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.radio-align {\r\n\r\n  flex-direction: column;\r\n  margin: 0;\r\n  display: flex;\r\n\r\n}\r\n\r\n.radio-main-container {\r\n  justify-content: space-between;\r\n  /* margin: 0; */\r\n  /* padding: 0; */\r\n\r\n  align-content: center;\r\n}\r\n\r\n.submit-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-top: 16px;\r\n}\r\n\r\n.step.finish {\r\n  background-color: #244D93\r\n}\r\n\r\na.nav-link.disabled {\r\n\r\n  color: white;\r\n}\r\n\r\n.button-next {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.button-next-tab2 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\r\n\r\n.loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 9;\r\n  background: black;\r\n  opacity: 0.5;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.mat-mail-input {\r\n  border: none;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 14px;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.example-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.mat-tab-group.mat-tab-header-pagination.mat-tab-header-pagination-before.mat-elevation-z4.mat-ripple.mat-tab-header-pagination-disabled {\r\n  display: none;\r\n}\r\n\r\n.social-login {\r\n  background-color: white;\r\n}\r\n\r\n.mat-tab-label {\r\n  height: 48px;\r\n  padding: 0 20px !important;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  opacity: .6;\r\n  min-width: 160px;\r\n  text-align: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n  position: relative;\r\n}\r\n\r\n.Line-form\r\n{\r\n  margin-top: 2.5rem;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.mat-option {\r\n  margin: 1rem 0;\r\n  overflow: visible;\r\n  line-height: initial;\r\n  word-wrap: break-word;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.mat-option i {\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n  margin-left: 0.5rem;\r\n\r\n}\r\n\r\nfieldset {\r\n \r\n  border: 2px solid black;\r\n  display: block;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n  padding-top: 0.35em;\r\n  padding-bottom: 0.625em;\r\n  padding-left: 0.75em;\r\n  padding-right: 0.75em;\r\n width: auto;\r\n}\r\n\r\nlegend\r\n{\r\n  width: auto;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n}\r\n\r\n.text-field-height\r\n{\r\n  height: 200px;\r\n}\r\n\r\ntextarea#mat-input-15 {\r\n  height: 200px;\r\n}\r\n\r\n.mat_card_title\r\n{\r\n  font-size: 17px;\r\n}\r\n\r\n.forms-heading {\r\n  margin: 0px;\r\n}\r\n\r\n.forms-star\r\n{\r\n  font-size: 14px;\r\n}\r\n\r\n.price-selection {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  flex-direction: initial;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.Label-notes {\r\n  font-size: 12px;\r\n}\r\n\r\n.radio-button-align {\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-margin\r\n{\r\n  margin: 10px;\r\n}\r\n\r\n.filed-width\r\n{\r\n  width: 49% !important;\r\n}\r\n\r\n.select-constion {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin: 18px;\r\n}\r\n\r\nimg.button-cross {\r\n  height: 2vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9Qcm9wZXJ0eS9maWxsRm9ybVNlbGxlci9maWxsRm9ybVNlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7RUFDWCx1QkFBdUI7O0FBRXpCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Q7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTs7R0FFRzs7QUFDSDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0VBSUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlOztFQUVmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCOztFQUVoQixxQkFBcUI7QUFDdkI7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFFVCxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCOztBQUNBOztFQUVFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7Q0FDdEIsV0FBVztBQUNaOztBQUNBOztFQUVFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBOztFQUVFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvUHJvcGVydHkvZmlsbEZvcm1TZWxsZXIvZmlsbEZvcm1TZWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lcnMge1xyXG5cclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogNCU7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IDYycHg7XHJcblxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICNkZWUyZTYgI2ZmZjtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3RoZXItb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG5cclxufVxyXG5cclxuZGl2I25hdi10YWJDb250ZW50IHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnNlbGxlci1mb3JtLXVwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc2VsbGVyLWZvcm0tdXBwZXIgcCB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlbGxlci1mb3JtLXVwcGVyIHNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udG9wLWhyIHtcclxuICBtYXJnaW4tdG9wOiAtMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleVxyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIGg0IHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jb2xvci1zaWdudXAge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1sb2dpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuYnV0dG9uLmJ0bi5kcm9wZG93bi10b2dnbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG5cclxuICBtYXJnaW4tbGVmdDogLjI1NWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAyLjI1NWVtO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLXRvcDogLjRlbSBzb2xpZDtcclxuICBib3JkZXItcmlnaHQ6IC40ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBib3JkZXItbGVmdDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4vKiBzcGFuLnRleHQtZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0gKi9cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi5kcm9wZG93bi10b2dnbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0NFRDREQTtcclxufVxyXG5cclxuLmVuZGluZC1idXR0b24ge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHVuc2V0OyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1iYWNrIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgLyogaGVpZ2h0OiAzNXB4OyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idG4tbmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ub3ItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmlucHV0I1RpdHRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jtcy1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mb3Jtcy1zdGFyIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi5mb3JtLW9yLXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgLyogcGFkZGluZzogOHB4OyAqL1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQ6IDE5cHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbn1cclxuXHJcbi5mb3Jtcy1vciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tb3ItcDpiZWZvcmUsXHJcbi5mb3JtLW9yLXA6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLW9yLXA6YmVmb3JlIHtcclxuICByaWdodDogLjVlbTtcclxuICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLW9yLXA6YWZ0ZXIge1xyXG4gIGxlZnQ6IC41ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcclxufVxyXG5cclxuYnRuRGVmYXVsdCxcclxuLmJ0blVwbG9hZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmJ0bkRlZmF1bHQ6Zm9jdXMsXHJcbi5idG5EZWZhdWx0OmhvdmVyLFxyXG4uYnRuVXBsb2FkOmZvY3VzLFxyXG4uYnRuVXBsb2FkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uYnRuTSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxufVxyXG5cclxuLmN1c3RvbVVwbG9hZCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jdXN0b21VcGxvYWQgaW5wdXQudXBsb2FkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmZvcm1zLWhlYWRpbmctb3B0aW9uYWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ub3B0aW9uYWwtYnV0dG9uLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5yb3ctY2hlY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNoZWNrIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yYWRpby1hbGlnbiB7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4ucmFkaW8tbWFpbi1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvKiBtYXJnaW46IDA7ICovXHJcbiAgLyogcGFkZGluZzogMDsgKi9cclxuXHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGVwLmZpbmlzaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5M1xyXG59XHJcblxyXG5hLm5hdi1saW5rLmRpc2FibGVkIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLW5leHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tbmV4dC10YWIyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLm1hdC1tYWlsLWlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IC42O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tYmVmb3JlLm1hdC1lbGV2YXRpb24tejQubWF0LXJpcHBsZS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWJlZm9yZS5tYXQtZWxldmF0aW9uLXo0Lm1hdC1yaXBwbGUubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvcGFjaXR5OiAuNjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5MaW5lLWZvcm1cclxue1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuLm1hdC1vcHRpb24ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5tYXQtb3B0aW9uIGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cclxufVxyXG5maWVsZHNldCB7XHJcbiBcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xyXG4gd2lkdGg6IGF1dG87XHJcbn1cclxubGVnZW5kXHJcbntcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRleHQtZmllbGQtaGVpZ2h0XHJcbntcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbnRleHRhcmVhI21hdC1pbnB1dC0xNSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ubWF0X2NhcmRfdGl0bGVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZm9ybXMtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZvcm1zLXN0YXJcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2Utc2VsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBpbml0aWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5MYWJlbC1ub3RlcyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yYWRpby1idXR0b24tYWxpZ24ge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYXJkLW1hcmdpblxyXG57XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlZC13aWR0aFxyXG57XHJcbiAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3QtY29uc3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbmltZy5idXR0b24tY3Jvc3Mge1xyXG4gIGhlaWdodDogMnZoO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts ***!
  \**************************************************************************/
/*! exports provided: FillFormSellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillFormSellerComponent", function() { return FillFormSellerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Model/listingSeller */ "./src/app/Model/listingSeller.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../Helper/date.adapter */ "./src/app/Helper/date.adapter.ts");
/* harmony import */ var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Misc/alertFormdialog/alertFormdialog.component */ "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");


















let FillFormSellerComponent = class FillFormSellerComponent {
    constructor(authService, afs, // Inject Firestore service
    afAuth, router, stateService, sellerService, dialog) {
        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.stateService = stateService;
        this.sellerService = sellerService;
        this.dialog = dialog;
        this.addressianAutoCompleteLooking$ = null;
        this.autoCompleteControlLooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.addressianAutoCompleteCurrent$ = null;
        this.autoCompleteControlCurrent = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.isLoggedIn = true;
        this.listingSeller = new _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__["listingSeller"]();
        this.submitted = false;
        this.isLoading = false;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_7__["VERSION"];
        this.postcodeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.features = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.applicable = [
            "Terrace House",
            "Driveway",
            "Period features",
            "Garage",
            "Wheelchair friendly",
            "Gated community",
            "External Rear Garden",
        ];
        this.FirstnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.LastnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.EmailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email,
        ]);
        this.AddressFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.TownFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.stateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
        ]);
        this.addressnameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6),
        ]);
        this.noroomsFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(2),
        ]);
        this.DOBFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
    }
    ngOnInit() {
        //Pre - populate the email field
        this.user = JSON.parse(localStorage.getItem("user"));
        this.listingSeller.Email = this.user.email;
        if (this.user) {
            //
        }
        this.afAuth.authState.subscribe((user) => {
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
        // The auto population of github method
        this.addressianAutoCompleteLooking$ = this.autoCompleteControlLooking.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), 
        // delay emits
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), 
        // use switch map so as to cancel previous subscribed events, before creating new once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((value) => {
            if (value !== "") {
                this.lookup(this.listingSeller.Lookingpostcode).subscribe((data) => {
                    this.data = data;
                });
                return this.lookup(this.listingSeller.Lookingpostcode);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            }
        }));
        // End method
        this.addressianAutoCompleteCurrent$ = this.autoCompleteControlCurrent.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(""), 
        // delay emits
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(1000), 
        // use switch map so as to cancel previous subscribed events, before creating new once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])((value) => {
            if (value !== "") {
                this.lookup(this.listingSeller.Currentpostcode).subscribe((data) => {
                    this.data = data;
                });
                return this.lookup(this.listingSeller.Currentpostcode);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
            }
        }));
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    newCustomer() {
        this.submitted = false;
        this.listingSeller = new _Model_listingSeller__WEBPACK_IMPORTED_MODULE_4__["listingSeller"]();
    }
    onSubmit() {
        // Get Seller variable into local scope for html
        this.stateService.listingSeller = this.listingSeller;
        this.router.navigate(["confirmSellerdetail"]);
    }
    lookup(value) {
        return this.sellerService.search(value);
    }
    getPosts(value) {
        this.listingSeller.CurrentAddress = value.address;
        this.listingSeller.CurrentTown = value.citytown;
        this.listingSeller.Currentstate = value.county;
        this.listingSeller.Currentpostcode = value.postcode;
        console.log(value);
    }
    getPost(value) {
        this.listingSeller.LookingTown = value.citytown;
        this.listingSeller.Lookingstate = value.county;
        this.listingSeller.Lookingpostcode = value.postcode;
        this.listingSeller.LookingAddress = value.address;
        console.log(value);
    }
    getSame(listingSeller) {
        this.listingSeller.LookingTown = this.listingSeller.CurrentTown;
        this.listingSeller.Lookingstate = this.listingSeller.Currentstate;
        this.listingSeller.Lookingpostcode = this.listingSeller.Currentpostcode;
        this.listingSeller.LookingStreetname = this.listingSeller.CurrentTown;
        this.listingSeller.LookingAddress = this.listingSeller.CurrentAddress;
        console.log(listingSeller);
    }
    selectTab(nextIndex, presentIndex) {
        if (presentIndex == 0) {
            if (this.listingSeller.Title == null ||
                this.listingSeller.Firstname == null ||
                this.listingSeller.Lastname == null ||
                this.listingSeller.DOB == null ||
                this.listingSeller.phonenumber == null) {
                console.log("New Error");
                this.openAlertDialog();
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 1) {
            if (nextIndex > presentIndex) {
                if (this.listingSeller.Currentpostcode == null ||
                    this.listingSeller.CurrentAddress == null ||
                    this.listingSeller.CurrentTown == null ||
                    this.listingSeller.CurrentTown == null ||
                    this.listingSeller.Currentstate == null ||
                    this.listingSeller.Lookingpostcode == null ||
                    this.listingSeller.LookingAddress == null ||
                    this.listingSeller.LookingTown == null ||
                    this.listingSeller.Lookingstate == null ||
                    this.listingSeller.PropertyType == null ||
                    this.listingSeller.norooms == null ||
                    this.listingSeller.MaxAmount == null ||
                    this.listingSeller.MinAmount == null ||
                    this.listingSeller.nobathrooms == null ||
                    this.listingSeller.noreception == null ||
                    this.listingSeller.PropertyCondition == null ||
                    this.listingSeller.ownership == null ||
                    this.listingSeller.features == null) {
                    this.openAlertDialog();
                }
                else {
                    this.selectedIndex = nextIndex;
                }
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
        else if (presentIndex == 2) {
            if (nextIndex > presentIndex) {
                if (this.listingSeller.otherInfo == null) {
                    this.openAlertDialog();
                }
                else {
                    this.selectedIndex = nextIndex;
                }
            }
            else {
                this.selectedIndex = nextIndex;
            }
        }
    }
    openAlertDialog() {
        const dialogRef = this.dialog.open(_Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_14__["AltertFormDialogComponent"], {
            data: {
                message: "HelloWorld",
                buttonText: {
                    cancel: "Done",
                },
            },
        });
    }
};
FillFormSellerComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_8__["StateServiceService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
FillFormSellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-fillFormSeller",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fillFormSeller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/Property/fillFormSeller/fillFormSeller.component.html")).default,
        providers: [
            {
                provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                useClass: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_13__["AppDateAdapter"],
            },
            {
                provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"],
                useValue: _Helper_date_adapter__WEBPACK_IMPORTED_MODULE_13__["APP_DATE_FORMATS"],
            },
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fillFormSeller.component.css */ "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.css")).default]
    })
], FillFormSellerComponent);



/***/ }),

/***/ "./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/Home/Property/fillFormSeller/fillFormSeller.service.ts ***!
  \************************************************************************/
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
        this.dbPath = "/listingSeller";
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

/***/ "./src/app/Home/agent-signup/agent-signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Home/agent-signup/agent-signup.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3.property-detail-h3 {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 20px;\r\n}\r\n.wrapper-detail-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n   \r\n}\r\n.example-full-width\r\n{\r\n    margin-bottom: 15px;\r\n}\r\n.signup-caution {\r\n    font-size: 20px;\r\n}\r\n.search-postcode-field {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.button-agent-signup{\r\n    height: -webkit-fill-available;\r\n}\r\n.signup-caution-last {\r\n    font-size: 13px;\r\n    margin: 1em 0em;\r\n}\r\n.example-full-width\r\n{\r\n    width: 100%;\r\n}\r\n.button-card{\r\n    display: flex;\r\n    justify-content: ali;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9hZ2VudC1zaWdudXAvYWdlbnQtc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL0hvbWUvYWdlbnQtc2lnbnVwL2FnZW50LXNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMucHJvcGVydHktZGV0YWlsLWgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4ud3JhcHBlci1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGhcclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2lnbnVwLWNhdXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zZWFyY2gtcG9zdGNvZGUtZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbi1hZ2VudC1zaWdudXB7XHJcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLnNpZ251cC1jYXV0aW9uLWxhc3Qge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAxZW0gMGVtO1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGhcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ1dHRvbi1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogYWxpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Home/agent-signup/agent-signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Home/agent-signup/agent-signup.component.ts ***!
  \*************************************************************/
/*! exports provided: AgentSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSignupComponent", function() { return AgentSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentSignup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agentSignup.service */ "./src/app/Home/agent-signup/agentSignup.service.ts");
/* harmony import */ var _Model_agentSignup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Model/agentSignup */ "./src/app/Model/agentSignup.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Property/fillFormBuyer/fillFormBuyer.service */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");








let AgentSignupComponent = class AgentSignupComponent {
    constructor(AgentSignupServicee, authService, afAuth, stateService, formsService) {
        this.AgentSignupServicee = AgentSignupServicee;
        this.authService = authService;
        this.afAuth = afAuth;
        this.stateService = stateService;
        this.formsService = formsService;
        this.Postcodes = [{ Postcode: '' }];
        this.isAgentSelected = false;
        this.agentSignup = new _Model_agentSignup__WEBPACK_IMPORTED_MODULE_3__["agentSignup"]();
        this.isLoggedIn = true;
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
    addPostcodes() {
        this.Postcodes.push({ Postcode: "" });
    }
    submitForm() {
        this.stateService.agentSignup = this.agentSignup;
        this.isAgentSelected = true;
        this.return = this.AgentSignupServicee
            .createAgentCustomer(this.userData.uid, this.agentSignup)
            .then(data => {
            if (data == true) {
                this.isAgentSelected = false;
            }
        });
    }
    LoggedIn() {
        this.isLoggedIn = true;
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    logValue() {
        console.log(this.Postcodes);
    }
};
AgentSignupComponent.ctorParameters = () => [
    { type: _agentSignup_service__WEBPACK_IMPORTED_MODULE_2__["AgentSignupService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateServiceService"] },
    { type: _Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_7__["FormsService"] }
];
AgentSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agent-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/agent-signup/agent-signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-signup.component.css */ "./src/app/Home/agent-signup/agent-signup.component.css")).default]
    })
], AgentSignupComponent);



/***/ }),

/***/ "./src/app/Home/agent-signup/agentSignup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Home/agent-signup/agentSignup.service.ts ***!
  \**********************************************************/
/*! exports provided: AgentSignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSignupService", function() { return AgentSignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let AgentSignupService = class AgentSignupService {
    constructor(db) {
        this.db = db;
        this.dbPath = "agentSignup";
        this.dataSavedEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customersRef = null;
        // Collection Group
        this.customersRef = db.collection(this.dbPath);
    }
    createAgentCustomer(key, customer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.return = yield this.customersRef
                .doc(key)
                .collection("agents")
                .add(Object.assign({}, customer))
                .then(function (data) {
                console.log("Agents Written Successfully");
            });
            return true;
        });
    }
};
AgentSignupService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AgentSignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AgentSignupService);



/***/ }),

/***/ "./src/app/Menu/Chats/chats.component.css":
/*!************************************************!*\
  !*** ./src/app/Menu/Chats/chats.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chats-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.chat-container\r\n{\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n\r\n}\r\n.chat-p {\r\n    margin-right: 50px;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.user-class {\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9DaGF0cy9jaGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCO0FBQ0E7O0lBRUksb0NBQW9DOztJQUVwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvTWVudS9DaGF0cy9jaGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRzLW1haW4tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxufVxyXG4ucHJvcGVydHktZGV0YWlsLWgzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcclxufVxyXG4uY2hhdC1jb250YWluZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG59XHJcbi5jaGF0LXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4udXNlci1jbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Menu/Chats/chats.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Menu/Chats/chats.component.ts ***!
  \***********************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Chats/chats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chats.component.css */ "./src/app/Menu/Chats/chats.component.css")).default]
    })
], ChatsComponent);



/***/ }),

/***/ "./src/app/Menu/Prefrences/Prefrences.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Menu/Prefrences/Prefrences.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prefrences-main-div\r\n{\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n}\r\n.property-detail-h3\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n \r\n    font-size: 24px;\r\n    text-align: center;\r\n    margin: 15px 0px 15px 0px;\r\n}\r\n.prefrence-notification\r\n{\r\n    background-color: white;\r\n    padding: 5px;\r\n}\r\n.prefrence-radio {\r\n    margin: 20px;\r\n}\r\n.notification-heading {\r\n    padding-top: 10px;\r\n    font-size: 22px;\r\n    font-weight: normal;\r\n}\r\n.radio-text\r\n{\r\n    font-family: 'Roboto', sans-serif !important;\r\n    font-weight: 400;\r\n    color:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9QcmVmcmVuY2VzL1ByZWZyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksb0NBQW9DOztJQUVwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvTWVudS9QcmVmcmVuY2VzL1ByZWZyZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVmcmVuY2VzLW1haW4tZGl2XHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi5wcm9wZXJ0eS1kZXRhaWwtaDNcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xyXG59XHJcbi5wcmVmcmVuY2Utbm90aWZpY2F0aW9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5wcmVmcmVuY2UtcmFkaW8ge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24taGVhZGluZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnJhZGlvLXRleHRcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Menu/Prefrences/Prefrences.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Menu/Prefrences/Prefrences.component.ts ***!
  \*********************************************************/
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
        selector: 'app-Prefrences',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Prefrences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/Prefrences/Prefrences.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Prefrences.component.css */ "./src/app/Menu/Prefrences/Prefrences.component.css")).default]
    })
], PrefrencesComponent);



/***/ }),

/***/ "./src/app/Menu/myListings/myListing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Menu/myListings/myListing.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-requirement-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.my-requirement-one\r\n{\r\n    background-color: white;\r\n \r\n}\r\n.my-requirement-heading\r\n{\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n.area-p\r\n{\r\n    font-size:20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n  \r\n    text-align: center;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 12px;\r\n    font-family: 'Segoe UI Regular';\r\n    margin-bottom: 0px !important;\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.my-requirement-one {\r\n    text-align: center;\r\n}\r\n.match-images {\r\n    margin-top: 10px;\r\n    margin-right: 9px;\r\n    width: 35%;\r\n}\r\n.match-content {\r\n    padding-top: 12px;\r\n}\r\n.mat-tab-label\r\n{\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    opacity: .6;\r\n    min-width: 160px;\r\n    text-align: center;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    white-space: nowrap;\r\n    position: relative;\r\n    width: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teUxpc3RpbmdzL215TGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSx1QkFBdUI7O0FBRTNCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxjQUFjO0lBQ2Qsb0NBQW9DOztJQUVwQyxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teUxpc3RpbmdzL215TGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXJlcXVpcmVtZW50LWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4ubXktcmVxdWlyZW1lbnQtb25lXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gXHJcbn1cclxuLm15LXJlcXVpcmVtZW50LWhlYWRpbmdcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5hcmVhLXBcclxue1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBSZWd1bGFyJztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9wZXJ0eS10eXBlLWNvbG9ye1xyXG4gICAgY29sb3I6ICM4QkI0NDA7XHJcbn1cclxuLm15LXJlcXVpcmVtZW50LW9uZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdGNoLWltYWdlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbi5tYXRjaC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcbi5tYXQtdGFiLWxhYmVsXHJcbntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Menu/myListings/myListing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Menu/myListings/myListing.component.ts ***!
  \********************************************************/
/*! exports provided: MyListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListingComponent", function() { return MyListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myListing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myListing.service */ "./src/app/Menu/myListings/myListing.service.ts");



let MyListingComponent = class MyListingComponent {
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
        this.myrequirement_service.getSellerProperties(this.uid).then(res => {
            res.forEach(element => {
                this.propertyDetails.push(element.data());
            });
            console.log(this.propertyDetails);
        });
    }
};
MyListingComponent.ctorParameters = () => [
    { type: _myListing_service__WEBPACK_IMPORTED_MODULE_2__["MyListingService"] }
];
MyListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-myListing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myListing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myListings/myListing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myListing.component.css */ "./src/app/Menu/myListings/myListing.component.css")).default]
    })
], MyListingComponent);



/***/ }),

/***/ "./src/app/Menu/myListings/myListing.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Menu/myListings/myListing.service.ts ***!
  \******************************************************/
/*! exports provided: MyListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListingService", function() { return MyListingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let MyListingService = class MyListingService {
    constructor(db) {
        this.db = db;
        this.customersRef = db.collection("Buyer");
        this.customersRef = db.collection("Seller");
    }
    getBuyerRequirement(uid) {
        return this.customersRef
            .doc(uid)
            .collection("requirements")
            .ref.get();
    }
    getSellerProperties(uid) {
        return this.customersRef
            .doc(uid)
            .collection("properties")
            .ref.get();
    }
};
MyListingService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MyListingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MyListingService);



/***/ }),

/***/ "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.match-images {\r\n    height: 18vh;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin: 10px;\r\n}\r\nh3.property-detail-h3 {\r\n    text-align: center;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 2vh;\r\n}\r\n.details-p-headings{\r\n    font-size: 16px;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy1zZWxlY3RlZC1kZXRhaWxzL215LW1hdGNoZXMtc2VsZWN0ZWQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy1zZWxlY3RlZC1kZXRhaWxzL215LW1hdGNoZXMtc2VsZWN0ZWQtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLm1hdGNoLWltYWdlcyB7XHJcbiAgICBoZWlnaHQ6IDE4dmg7XHJcbn1cclxuZGl2I2RlbW8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5oMy5wcm9wZXJ0eS1kZXRhaWwtaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5NYXQtY2FyZC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbn1cclxuLmRldGFpbHMtcC1oZWFkaW5nc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MyMatchesSelectedDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMatchesSelectedDetailsComponent", function() { return MyMatchesSelectedDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MyMatchesSelectedDetailsComponent = class MyMatchesSelectedDetailsComponent {
    constructor(_Activatedroute, _router) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.Lookingpostcode = params.get("Lookingpostcode");
            this.Lookingstate = params.get("Lookingstate");
            this.LookingAddress = params.get("LookingAddress");
            this.norooms = params.get("norooms");
            this.PropertyCondition = params.get("PropertyCondition");
            this.MinAmount = params.get("MinAmount");
            this.PropertyType = params.get("PropertyType");
            this.ownership = params.get("ownership");
            this.features = params.get("features");
            this.matchStatus = params.get("matchStatus");
        });
    }
};
MyMatchesSelectedDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyMatchesSelectedDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-matches-selected-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-matches-selected-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-matches-selected-details.component.css */ "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.css")).default]
    })
], MyMatchesSelectedDetailsComponent);



/***/ }),

/***/ "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.match-images {\r\n    height: 18vh;\r\n}\r\ndiv#demo {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin: 10px;\r\n}\r\nh3.property-detail-h3 {\r\n    text-align: center;\r\n}\r\n.Mat-card-div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 2vh;\r\n}\r\n.details-p-headings{\r\n    font-size: 16px;\r\n}\r\n.selected-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXktbWF0Y2hlcy10by1zZWxsLXNlbGVjdGVkLWRldGFpbC9teS1tYXRjaGVzLXRvLXNlbGwtc2VsZWN0ZWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9NZW51L215TWF0Y2hlcy9teS1tYXRjaGVzLXRvLXNlbGwtc2VsZWN0ZWQtZGV0YWlsL215LW1hdGNoZXMtdG8tc2VsbC1zZWxlY3RlZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5tYXRjaC1pbWFnZXMge1xyXG4gICAgaGVpZ2h0OiAxOHZoO1xyXG59XHJcbmRpdiNkZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuaDMucHJvcGVydHktZGV0YWlsLWgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uTWF0LWNhcmQtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcbi5kZXRhaWxzLXAtaGVhZGluZ3N7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnNlbGVjdGVkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MyMatchesToSellSelectedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMatchesToSellSelectedDetailComponent", function() { return MyMatchesToSellSelectedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MyMatchesToSellSelectedDetailComponent = class MyMatchesToSellSelectedDetailComponent {
    constructor(_Activatedroute, _router) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
    }
    ngOnInit() {
        this.sub = this._Activatedroute.paramMap.subscribe((params) => {
            this.Lookingpostcode = params.get("Lookingpostcode");
            this.ChainStatus = params.get("ChainStatus");
            this.FinancialPosition = params.get("FinancialPosition");
            this.Type = params.get("Type");
            this.Position = params.get("Position");
            this.SearchRadius = params.get("SearchRadius");
            this.PriceRange = params.get("PriceRange");
            this.matchStatus = params.get("matchStatus");
        });
    }
};
MyMatchesToSellSelectedDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyMatchesToSellSelectedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-matches-to-sell-selected-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-matches-to-sell-selected-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-matches-to-sell-selected-detail.component.css */ "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.css")).default]
    })
], MyMatchesToSellSelectedDetailComponent);



/***/ }),

/***/ "./src/app/Menu/myMatches/myMatches.component.css":
/*!********************************************************!*\
  !*** ./src/app/Menu/myMatches/myMatches.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matches-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n}\r\n.thanku-section {\r\n    background-color: white;\r\n    \r\n}\r\n.thanku-p-section\r\n{\r\n    font-size: 13px;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n.match-section\r\n{\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n.match-images {\r\n   \r\n    margin-right:1em;\r\n    width: 30%;\r\n}\r\n/*===========================================================================================================\r\nFont-sizes\r\n=============================================================================================================*/\r\n.area-p\r\n{\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n}\r\n.discription-p\r\n{\r\n    font-size: 15px;\r\n    font-family: 'Segoe UI Regular';\r\n}\r\n.property-type-color{\r\n    color: #8BB440;\r\n}\r\n.font-headings\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n}\r\n.thanku-p-section\r\n{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: medium;\r\n    color: black;\r\n    font-size: 14px;\r\n}\r\n.main-heading\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n}\r\np {\r\n    margin-top: 0;\r\n    margin-bottom: 0rem;\r\n}\r\n@media screen and (max-width:375px)\r\n{\r\n    .match-images {\r\n        margin-top: 14px;\r\n        margin-right: 9px;\r\n        width: 34%;\r\n    }\r\n}\r\n.mat-card-matches\r\n{\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n}\r\n.mat-card {\r\n    display: flex !important;\r\n    margin: 10px !important;\r\n    align-items: center !important;\r\n}\r\n.mat-card-title {\r\n    font-size: 20px;\r\n    margin: 20px;\r\n}\r\n.mat-card-matches{\r\n    width: 100%;\r\n}\r\n.mat-card-title:not(:first-child)\r\n{\r\n    margin-top: 20px !important;\r\n}\r\n.mat-tab-label\r\n{\r\n    background-color: white !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teU1hdGNoZXMvbXlNYXRjaGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7OzhHQUU4RztBQUM5Rzs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBU0E7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKO0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7QUFHQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSwyQkFBMkI7QUFDL0I7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9NZW51L215TWF0Y2hlcy9teU1hdGNoZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaGVzLW1haW4tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcbi50aGFua3Utc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcbi50aGFua3UtcC1zZWN0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuLm1hdGNoLXNlY3Rpb25cclxue1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5tYXRjaC1pbWFnZXMge1xyXG4gICBcclxuICAgIG1hcmdpbi1yaWdodDoxZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkZvbnQtc2l6ZXNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5hcmVhLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRpc2NyaXB0aW9uLXBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSSBSZWd1bGFyJztcclxufVxyXG4ucHJvcGVydHktdHlwZS1jb2xvcntcclxuICAgIGNvbG9yOiAjOEJCNDQwO1xyXG59XHJcbi5mb250LWhlYWRpbmdzXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi50aGFua3UtcC1zZWN0aW9uXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1haW4taGVhZGluZ1xyXG57XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KVxyXG57XHJcbiAgICAubWF0Y2gtaW1hZ2VzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1tYXRjaGVzXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLW1hdGNoZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWNhcmQtdGl0bGU6bm90KDpmaXJzdC1jaGlsZClcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtdGFiLWxhYmVsXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Menu/myMatches/myMatches.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Menu/myMatches/myMatches.component.ts ***!
  \*******************************************************/
/*! exports provided: MyMatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMatchesComponent", function() { return MyMatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myMatches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myMatches.service */ "./src/app/Menu/myMatches/myMatches.service.ts");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MyMatchesComponent = class MyMatchesComponent {
    constructor(MatchesService, stateService, _Activatedroute, _router) {
        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.propertyDetails = [];
        this.propertyBuyer = [];
        this.buyerProperty = [];
        this.sellerProperty = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        console.log(this.uid);
        // Fetch details Seller
        this.MatchesService.getMatchesSellerProperties(this.uid).then((res) => {
            res.forEach((element) => {
                console.log("Seller " + element);
                this.sellerProperty.push(element.data());
                console.log("Seller matches " + JSON.stringify(this.sellerProperty));
            });
        });
        // Fetch details Seller
        this.MatchesService.getMatchesBuyerProperties(this.uid).then((res) => {
            res.forEach((element) => {
                console.log("Buyer " + element);
                this.buyerProperty.push(element.data());
                console.log("Buyer matches " + JSON.stringify(this.buyerProperty));
            });
        });
    }
};
MyMatchesComponent.ctorParameters = () => [
    { type: _myMatches_service__WEBPACK_IMPORTED_MODULE_2__["MyMatchesService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MyMatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-myMatches",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myMatches.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myMatches/myMatches.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myMatches.component.css */ "./src/app/Menu/myMatches/myMatches.component.css")).default]
    })
], MyMatchesComponent);



/***/ }),

/***/ "./src/app/Menu/myMatches/myMatches.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Menu/myMatches/myMatches.service.ts ***!
  \*****************************************************/
/*! exports provided: MyMatchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMatchesService", function() { return MyMatchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let MyMatchesService = class MyMatchesService {
    constructor(db) {
        this.db = db;
    }
    getMatchesSellerProperties(uid) {
        return this.db
            .collection("matchesBuyer")
            .doc(uid)
            .collection("matches")
            .ref.get();
    }
    getMatchesBuyerProperties(uid) {
        return this.db
            .collection("matchesSeller")
            .doc(uid)
            .collection("matches")
            .ref.get();
    }
};
MyMatchesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MyMatchesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], MyMatchesService);



/***/ }),

/***/ "./src/app/Menu/myProfile/Profile.component.css":
/*!******************************************************!*\
  !*** ./src/app/Menu/myProfile/Profile.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-main-container {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n  background-color: #EBEBEB;\r\n  padding-bottom: 60px;\r\n  margin: 0;\r\n}\r\n\r\n.Profile-pic {\r\n  width: 37%;\r\n\r\n}\r\n\r\np.profile-heading {\r\n  /* text-align: center; */\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  align-items: center;\r\n  font-size: 27px;\r\n  padding-top: 7px;\r\n}\r\n\r\n.profile-name-image {\r\n  display: flex;\r\n  /* justify-content: space-evenly; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n\r\n.profile-name {\r\n  font-size: 25px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.profile-name-field-option {\r\n  background-color: white;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 3fr 4fr;\r\n  grid-gap: 10px;\r\n  padding: 0px;\r\n}\r\n\r\n.grid-container>div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n\r\n  padding: 0px 5px;\r\n\r\n}\r\n\r\n.fname-text1 {\r\n  font-size: 20px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.fname-text2 {\r\n  font-size: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n.fname-text3 {\r\n  font-size: 15px;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teVByb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7O0VBRTFDLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7O0FBRXRDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQzs7QUFFdEMiLCJmaWxlIjoic3JjL2FwcC9NZW51L215UHJvZmlsZS9Qcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYWluLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uUHJvZmlsZS1waWMge1xyXG4gIHdpZHRoOiAzNyU7XHJcblxyXG59XHJcblxyXG5wLnByb2ZpbGUtaGVhZGluZyB7XHJcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZS1uYW1lLWZpZWxkLW9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA0ZnI7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXI+ZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcblxyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcblxyXG59XHJcblxyXG4uZm5hbWUtdGV4dDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uZm5hbWUtdGV4dDIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uZm5hbWUtdGV4dDMge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Menu/myProfile/Profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Menu/myProfile/Profile.component.ts ***!
  \*****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Home/Property/fillFormBuyer/fillFormBuyer.service */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.service.ts");



let MyProfileComponent = class MyProfileComponent {
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
MyProfileComponent.ctorParameters = () => [
    { type: _Home_Property_fillFormBuyer_fillFormBuyer_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyProfileComponent.prototype, "listingBuyer", void 0);
MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/Profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Profile.component.css */ "./src/app/Menu/myProfile/Profile.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./../../common.css */ "./src/app/common.css")).default]
    })
], MyProfileComponent);



/***/ }),

/***/ "./src/app/Menu/myProfile/editProfile/editProfile.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Menu/myProfile/editProfile/editProfile.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-main-container\r\n{\r\n    padding-right: 8px;\r\n    padding-left: 8px;\r\n    background-color: #EBEBEB;\r\npadding-bottom: 60px;\r\n    margin: 0;\r\n}\r\n.Profile-pic {\r\n    width: 37%;\r\n \r\n}\r\np.profile-heading {\r\n    /* text-align: center; */\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    align-items: center;\r\n    font-size: 27px;\r\n    padding-top: 7px;\r\n}\r\n.profile-name-image {\r\n    display: flex;\r\n    /* justify-content: space-evenly; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.profile-name {\r\n    font-size: 25px;\r\n    color: red;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.profile-name-field-option\r\n{\r\n    background-color: white;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n    margin-top: 30px;\r\n}\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: 3fr 4fr 1fr;\r\n    grid-gap: 10px;\r\n    padding: 0px;\r\n  }\r\n.grid-container > div {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n\r\n    padding: 0px 5px;\r\n   \r\n  }\r\n.fname-text1 {\r\n    font-size: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.fname-text2 {\r\n    font-size: 20px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n.fname-text3 {\r\n    font-size: 15px;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\ninput#date {\r\n    /* width: 78%; */\r\n    margin-right: -58px;\r\n    padding: 0px;\r\n    /* margin: 0px; */\r\n}\r\n.edit-profile-submitbutton {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-content: center;\r\n    align-items: center;\r\n    margin-top: 25px;\r\n}\r\n.btn-back {\r\n    background-color: white;\r\n    width: 31%;\r\n    color: black;\r\n    font-size: 18px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9teVByb2ZpbGUvZWRpdFByb2ZpbGUvZWRpdFByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QixvQkFBb0I7SUFDaEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysb0NBQW9DOztBQUV4QztBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsWUFBWTtFQUNkO0FBRUE7SUFDRSwwQ0FBMEM7O0lBRTFDLGdCQUFnQjs7RUFFbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixvQ0FBb0M7O0FBRXhDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DOztBQUV4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL01lbnUvbXlQcm9maWxlL2VkaXRQcm9maWxlL2VkaXRQcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tYWluLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbnBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5Qcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gXHJcbn1cclxucC5wcm9maWxlLWhlYWRpbmcge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLnByb2ZpbGUtbmFtZS1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4ucHJvZmlsZS1uYW1lLWZpZWxkLW9wdGlvblxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDRmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuXHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICBcclxuICB9XHJcbiAgLmZuYW1lLXRleHQxIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmZuYW1lLXRleHQyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmZuYW1lLXRleHQzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuaW5wdXQjZGF0ZSB7XHJcbiAgICAvKiB3aWR0aDogNzglOyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNThweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC8qIG1hcmdpbjogMHB4OyAqL1xyXG59XHJcbi5lZGl0LXByb2ZpbGUtc3VibWl0YnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5idG4tYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMSU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Menu/myProfile/editProfile/editProfile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Menu/myProfile/editProfile/editProfile.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditProfileComponent = class EditProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editProfile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editProfile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/myProfile/editProfile/editProfile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editProfile.component.css */ "./src/app/Menu/myProfile/editProfile/editProfile.component.css")).default]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/Menu/navigationBar/navigationBar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Menu/navigationBar/navigationBar.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\r\n\r\n@font-face {\r\n  font-family: HelveticaNeueLight;\r\n  src: url('/assets/font/HelveticaNeueLight.ttf');\r\n}\r\n\r\n.main-navigation-bar {\r\n display: grid;\r\n grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\nimg.notification-image {\r\n  width: 30%;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-div {\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.content {\r\n  padding: 19px;\r\n  background-color: #FBF4EF;\r\n}\r\n\r\nlabel {\r\n  background: none transparent;\r\n  border: 2px solid black;\r\n  border-left: 0 solid transparent;\r\n  border-right: 0 solid transparent;\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 19px;\r\n  position: absolute;\r\n  top: 19px;\r\n  left: 20px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n}\r\n\r\nlabel::before {\r\n  background: black;\r\n  content: '';\r\n  height: 2px;\r\n  width: 36px;\r\n  transition: all .2s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  /* top: 18px; */\r\n  margin-top: 6.2px;\r\n\r\n}\r\n\r\nlabel::after {\r\n  background: black;\r\n  content: '';\r\n  height: 4px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 6px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 100%;\r\n  transform: rotate(90deg);\r\n  transition: all .2s;\r\n}\r\n\r\n.menu-text {\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 13px;\r\n  text-transform: uppercase;\r\n  margin-top: 2px;\r\n}\r\n\r\n.menu-text::after {\r\n  display: none;\r\n}\r\n\r\n.logo-nav {\r\n  width: 172%;\r\n}\r\n\r\n/* .imge-logo-header {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding-top: 0px;\r\n  padding-left: 0;\r\n} */\r\n\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-size: 30px;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 0px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.user-img {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-size: 38px;\r\n\r\n}\r\n\r\nimg.open {\r\n  width: 17%;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 4px;\r\n}\r\n\r\nimg.close-img {\r\n  width: 6%;\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 25px;\r\n}\r\n\r\n.has-search .form-control {\r\n  padding-left: 2.375rem;\r\n}\r\n\r\n.has-search .form-control-feedback {\r\n  position: absolute;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 2.375rem;\r\n  height: 2.375rem;\r\n  line-height: 2.375rem;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  color: #aaa;\r\n}\r\n\r\n.nav-links {\r\n  margin: 0;\r\n  padding: 0px;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  margin: 50px auto;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr 1fr;\r\n  /* padding: 10px; */\r\n  margin-left: calc(-50vw + 50%);\r\n  margin-right: calc(-50vw + 50%);\r\n  margin-top: calc(-50vw + 50%);\r\n  align-items: center;\r\n}\r\n\r\n.grid-container>div {\r\n\r\n\r\n  text-align: Left;\r\n  font-size: 18.5px;\r\n  padding: 17px;\r\n\r\n\r\n}\r\n\r\n.grid-container:hover {\r\n  background-color: #EBEBEB;\r\n  text-decoration: none;\r\n}\r\n\r\nimg.nav-link-icon {\r\n  float: right;\r\n  /* text-align: right; */\r\n  /* display: flex; */\r\n}\r\n\r\n.nav-links-text {\r\n  color: black;\r\n  font-family: 'HelveticaNeueLight';\r\n}\r\n\r\ninput[type=text] {\r\n  /* float: right; */\r\n  padding: 15px;\r\n  border: 1px solid lightgrey;\r\n  /* margin-top: 8px; */\r\n  /* margin-right: 16px; */\r\n  font-size: 17px;\r\n  width: 87%;\r\n\r\n}\r\n\r\n.search-grid-conatiner {\r\n  display: grid;\r\n  grid-template-columns: 11fr;\r\n}\r\n\r\n.search-grid-conatiner>div {\r\n  font-size: 18.5px;\r\n  padding: 14px;\r\n  padding-top: 5px;\r\n  padding-bottom: 11px;\r\n  background-color: #FBF4EF;\r\n}\r\n\r\n.nav-link-icon-search {\r\n  width: 38px;\r\n  padding: 4px;\r\n  margin-top: -4px;\r\n  border: 1px solid lightgrey;\r\n  background-color: white;\r\n  height: 56.5px;\r\n}\r\n\r\ni.fa.fa-user {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\nspan.log-out-text {\r\n  font-size: 12px;\r\n  position: relative;\r\n  right: 12px;\r\n  margin-top: 5px;\r\n  text-transform: uppercase;\r\n  font-family: HelveticaNeueLight;\r\n}\r\n\r\n.btn-facebook {\r\n  background-color: #244D93;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.btn-google {\r\n  background-color: #DD4B33;\r\n  color: white;\r\n  width: 30%;\r\n  height: 35px;\r\n  text-align: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.social-login h4 {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.social-button {\r\n  display: flex;\r\n  /* justify-content: center; */\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.signup-heading\r\n{\r\n  color: #244D93;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.color-signup {\r\n  color: #244D93;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn-social-login {\r\n  width: 100%;\r\n  background-color: #244D93;\r\n  color: white;\r\n  margin-top: 3%;\r\n  font-family: 'Open Sans', sans-serif;\r\n\r\n}\r\n\r\ni.fa.fa-user.input-group-text.nav-login-form {\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n\r\n.checkbox {\r\n  background: none transparent;\r\n  border: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  cursor: pointer;\r\n  /* display: block; */\r\n  height: auto;\r\n  position: absolute;\r\n  top: none;\r\n  left: none;\r\n  right: 9px;\r\n  width: none;\r\n  /* transition: all .2s; */\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\nimg.home-menu-image {\r\n  height: 4vh;\r\n  margin: 6px;\r\n}\r\n\r\np.nitification-red {\r\n  position: absolute;\r\n  background: red;\r\n  border-radius: 50%;\r\n  top: 5vh;\r\n  right: 20vw;\r\n  height: 3vh;\r\n  width: 4vw;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVudS9uYXZpZ2F0aW9uQmFyL25hdmlnYXRpb25CYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBcUU7O0FBRXJFO0VBQ0UsK0JBQStCO0VBQy9CLCtDQUErQztBQUNqRDs7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQ0FBc0M7QUFDdkM7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFFWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBRVgsd0JBQXdCO0VBRXhCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7OztBQUdmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0FBRXJCOztBQUNBOztFQUVFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUNBLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL01lbnUvbmF2aWdhdGlvbkJhci9uYXZpZ2F0aW9uQmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlTGlnaHQ7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udC9IZWx2ZXRpY2FOZXVlTGlnaHQudHRmJyk7XHJcbn1cclxuLm1haW4tbmF2aWdhdGlvbi1iYXIge1xyXG4gZGlzcGxheTogZ3JpZDtcclxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG59XHJcbmltZy5ub3RpZmljYXRpb24taW1hZ2Uge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1kaXYge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRjRFRjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTlweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG5sYWJlbDo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMzZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogdG9wOiAxOHB4OyAqL1xyXG4gIG1hcmdpbi10b3A6IDYuMnB4O1xyXG5cclxufVxyXG5cclxubGFiZWw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDZweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbi5tZW51LXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgbGVmdDogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLm1lbnUtdGV4dDo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvLW5hdiB7XHJcbiAgd2lkdGg6IDE3MiU7XHJcbn1cclxuXHJcbi8qIC5pbWdlLWxvZ28taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn0gKi9cclxuXHJcbi5mYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTRweDtcclxuICByaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuXHJcbn1cclxuXHJcbmltZy5vcGVuIHtcclxuICB3aWR0aDogMTclO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA0cHg7XHJcbn1cclxuXHJcbmltZy5jbG9zZS1pbWcge1xyXG4gIHdpZHRoOiA2JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNnB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyLjM3NXJlbTtcclxuICBoZWlnaHQ6IDIuMzc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC01MHZ3ICsgNTAlKTtcclxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoLTUwdncgKyA1MCUpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lcj5kaXYge1xyXG5cclxuXHJcbiAgdGV4dC1hbGlnbjogTGVmdDtcclxuICBmb250LXNpemU6IDE4LjVweDtcclxuICBwYWRkaW5nOiAxN3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmltZy5uYXYtbGluay1pY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbiAgLyogZGlzcGxheTogZmxleDsgKi9cclxufVxyXG5cclxuLm5hdi1saW5rcy10ZXh0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlTGlnaHQnO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgLyogbWFyZ2luLXRvcDogOHB4OyAqL1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMTZweDsgKi9cclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDg3JTtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2gtZ3JpZC1jb25hdGluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMWZyO1xyXG59XHJcblxyXG4uc2VhcmNoLWdyaWQtY29uYXRpbmVyPmRpdiB7XHJcbiAgZm9udC1zaXplOiAxOC41cHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY0RUY7XHJcbn1cclxuXHJcbi5uYXYtbGluay1pY29uLXNlYXJjaCB7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNTYuNXB4O1xyXG59XHJcblxyXG5pLmZhLmZhLXVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuXHJcbnNwYW4ubG9nLW91dC10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlTGlnaHQ7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW4gaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc29jaWFsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4uc2lnbnVwLWhlYWRpbmdcclxue1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5jb2xvci1zaWdudXAge1xyXG4gIGNvbG9yOiAjMjQ0RDkzO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbC1sb2dpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luLnRleHQtY2VudGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IG5vbmU7XHJcbiAgbGVmdDogbm9uZTtcclxuICByaWdodDogOXB4O1xyXG4gIHdpZHRoOiBub25lO1xyXG4gIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuaW1nLmhvbWUtbWVudS1pbWFnZSB7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbn1cclxucC5uaXRpZmljYXRpb24tcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IDV2aDtcclxuICByaWdodDogMjB2dztcclxuICBoZWlnaHQ6IDN2aDtcclxuICB3aWR0aDogNHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Menu/navigationBar/navigationBar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Menu/navigationBar/navigationBar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.././auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _state_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../state-service.service */ "./src/app/state-service.service.ts");
/* harmony import */ var _myMatches_myMatches_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../myMatches/myMatches.service */ "./src/app/Menu/myMatches/myMatches.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NavigationBarComponent = class NavigationBarComponent {
    constructor(authService, afs, // Inject Firestore service
    afAuth, MatchesService, stateService, _Activatedroute, _router) {
        this.authService = authService;
        this.afs = afs;
        this.afAuth = afAuth;
        this.MatchesService = MatchesService;
        this.stateService = stateService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.isLoggedIn = true;
        this.propertyDetails = [];
        this.propertyBuyer = [];
        this.buyerProperty = [];
        this.sellerProperty = [];
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
        this.Logged();
    }
    LoggedIn() {
        this.isLoggedIn = true;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.uid = this.user.uid;
        // Fetch details Seller
        this.MatchesService.getMatchesSellerProperties(this.uid).then((res) => {
            res.forEach((element) => {
                if (element.data().matchStatus == 'confirm_interest') {
                    this.sellerProperty.push(element.data());
                }
            });
            this.noSellerOfMatche = this.sellerProperty.length;
            console.log(this.noSellerOfMatche);
            this.matches = this.buyerProperty.length + this.sellerProperty.length;
            console.log(this.matches);
        });
        // Fetch details Seller
        this.MatchesService.getMatchesBuyerProperties(this.uid).then((res) => {
            res.forEach((element) => {
                if (element.data().matchStatus == 'confirm_interest') {
                    this.buyerProperty.push(element.data());
                }
            });
            this.noBuyerMatches = this.buyerProperty.length;
            console.log(this.noBuyerMatches);
            this.matches = this.buyerProperty.length + this.sellerProperty.length;
            console.log(this.matches);
        });
    }
    LoggedOut() {
        this.isLoggedIn = false;
    }
    Logged() {
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _myMatches_myMatches_service__WEBPACK_IMPORTED_MODULE_6__["MyMatchesService"] },
    { type: _state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigationBar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/navigationBar/navigationBar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigationBar.component.css */ "./src/app/Menu/navigationBar/navigationBar.component.css")).default]
    })
], NavigationBarComponent);



/***/ }),

/***/ "./src/app/Menu/notification/notification.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Menu/notification/notification.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01lbnUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/Menu/notification/notification.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Menu/notification/notification.component.ts ***!
  \*************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Menu/notification/notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.css */ "./src/app/Menu/notification/notification.component.css")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/Misc/Footer/Footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/Misc/Footer/Footer.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*\r\n{\r\n    overflow-x: hidden;\r\n}\r\n.footer\r\n{\r\n    width: 100%;\r\n    background-color: #FCF4EE;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n  \r\n  \r\n}\r\n.image-social {\r\n    display: flex;\r\n  align-content: center;\r\n  justify-content: space-between;\r\n  justify-content: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    align-items: center;\r\n}\r\nimg.facebook-icon {\r\n    width: 11%;\r\n    padding: 0.8%;\r\n}\r\n.twitter-icon\r\n{\r\n    width: 11%;\r\n    padding: 0.8%;\r\n}\r\n.instagram-icon\r\n{\r\n    padding: 0.8%;\r\n}\r\n.privacy-policy {\r\n    text-align: center;\r\n    margin: 10px;\r\n    margin-bottom: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9Gb290ZXIvRm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1COzs7QUFHdkI7QUFDQTtJQUNJLGFBQWE7RUFDZixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLHVCQUF1QjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvTWlzYy9Gb290ZXIvRm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqXHJcbntcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uZm9vdGVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjRFRTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIFxyXG4gIFxyXG59XHJcbi5pbWFnZS1zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmltZy5mYWNlYm9vay1pY29uIHtcclxuICAgIHdpZHRoOiAxMSU7XHJcbiAgICBwYWRkaW5nOiAwLjglO1xyXG59XHJcbi50d2l0dGVyLWljb25cclxue1xyXG4gICAgd2lkdGg6IDExJTtcclxuICAgIHBhZGRpbmc6IDAuOCU7XHJcbn1cclxuLmluc3RhZ3JhbS1pY29uXHJcbntcclxuICAgIHBhZGRpbmc6IDAuOCU7XHJcbn1cclxuLnByaXZhY3ktcG9saWN5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Misc/Footer/Footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Misc/Footer/Footer.component.ts ***!
  \*************************************************/
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
        selector: 'app-Footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/Footer/Footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Footer.component.css */ "./src/app/Misc/Footer/Footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/Misc/alertFormdialog/alertFormdialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Misc/alertFormdialog/alertFormdialog.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n  .fa-events-icons-ready .cdk-global-scrollblock {\r\n   \r\n    width: 100%;\r\n    overflow-y: scroll;\r\n    position: inherit !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9hbGVydEZvcm1kaWFsb2cvYWxlcnRGb3JtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBR0U7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9NaXNjL2FsZXJ0Rm9ybWRpYWxvZy9hbGVydEZvcm1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAgLmZhLWV2ZW50cy1pY29ucy1yZWFkeSAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Misc/alertFormdialog/alertFormdialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: AltertFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltertFormDialogComponent", function() { return AltertFormDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AltertFormDialogComponent = class AltertFormDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialogRef.updateSize('300vw', '300vw');
    }
    ngOnInit() {
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
AltertFormDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
AltertFormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formdialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alertFormdialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/alertFormdialog/alertFormdialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alertFormdialog.component.css */ "./src/app/Misc/alertFormdialog/alertFormdialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AltertFormDialogComponent);



/***/ }),

/***/ "./src/app/Misc/components/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Misc/components/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01pc2MvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Misc/components/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Misc/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Misc/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/Misc/components/forgot-password/forgot-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Misc/components/forgot-password/forgot-password.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n  \r\n    font-family: 'Open Sans', sans-serif;\r\n   width: 80%;\r\n  margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7O0lBRVosb0NBQW9DO0dBQ3JDLFVBQVU7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9NaXNjL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zb2NpYWwtbG9naW5cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Misc/components/forgot-password/forgot-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Misc/components/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/Misc/components/forgot-password/forgot-password.component.css")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/Misc/components/sign-in/sign-in.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Misc/components/sign-in/sign-in.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-facebook\r\n\r\n\r\n{\r\n background-color: #244D93;\r\n color: white;\r\n width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.btn-google\r\n{\r\n    background-color: #DD4B33;\r\n    color: white;\r\n    width: 30%;\r\n    height: 35px;\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.social-login h4\r\n{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 700;\r\n}\r\n.social-button {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n\r\n}\r\n.color-signup\r\n{\r\n    color: #244D93;\r\n}\r\n.btn-social-login\r\n{\r\n    width: 100%;\r\n    background-color: #244D93;\r\n    color: white;\r\n    margin-top: 3%;\r\n    font-family: 'Open Sans', sans-serif;\r\n  \r\n}\r\ni.fa.fa-user.input-group-text.nav-login-form{\r\n  position: absolute;\r\n  font-size: 23px;\r\n  left: 0px;\r\n  width: 10%;\r\n  z-index: 10;\r\n  margin-top: -4%;\r\n}\r\n.social-login.text-center {\r\n  padding: 15px;\r\n}\r\n.checkbox\r\n{\r\n  background: none transparent;\r\n     border: none; \r\n     border-left: none; \r\n     border-right: none; \r\n    cursor: pointer;\r\n    /* display: block; */\r\n    height: auto;\r\n    position: absolute;\r\n    top: none; \r\n     left: none; \r\n    right: 9px;\r\n     width: none; \r\n    /* transition: all .2s; */\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUMseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixVQUFVO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4QztBQUNBOztJQUVJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixtQkFBbUI7O0FBRXZCO0FBQ0E7O0lBRUksY0FBYztBQUNsQjtBQUNBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7O0FBRXhDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLDRCQUE0QjtLQUN6QixZQUFZO0tBQ1osaUJBQWlCO0tBQ2pCLGtCQUFrQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztLQUNSLFVBQVU7SUFDWCxVQUFVO0tBQ1QsV0FBVztJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvTWlzYy9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1mYWNlYm9va1xyXG5cclxuXHJcbntcclxuIGJhY2tncm91bmQtY29sb3I6ICMyNDREOTM7XHJcbiBjb2xvcjogd2hpdGU7XHJcbiB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJ0bi1nb29nbGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEIzMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uc29jaWFsLWxvZ2luIGg0XHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnNvY2lhbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG4uY29sb3Itc2lnbnVwXHJcbntcclxuICAgIGNvbG9yOiAjMjQ0RDkzO1xyXG59XHJcbi5idG4tc29jaWFsLWxvZ2luXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG59XHJcbmkuZmEuZmEtdXNlci5pbnB1dC1ncm91cC10ZXh0Lm5hdi1sb2dpbi1mb3Jte1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcbi5zb2NpYWwtbG9naW4udGV4dC1jZW50ZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNoZWNrYm94XHJcbntcclxuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50O1xyXG4gICAgIGJvcmRlcjogbm9uZTsgXHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7IFxyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZTsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogbm9uZTsgXHJcbiAgICAgbGVmdDogbm9uZTsgXHJcbiAgICByaWdodDogOXB4O1xyXG4gICAgIHdpZHRoOiBub25lOyBcclxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAuMnM7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/Misc/components/sign-in/sign-in.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Misc/components/sign-in/sign-in.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/app/Misc/components/sign-in/sign-in.component.css")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/Misc/components/verify-email/verify-email.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Misc/components/verify-email/verify-email.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01pc2MvY29tcG9uZW50cy92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/Misc/components/verify-email/verify-email.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Misc/components/verify-email/verify-email.component.ts ***!
  \************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/components/verify-email/verify-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.component.css */ "./src/app/Misc/components/verify-email/verify-email.component.css")).default]
    })
], VerifyEmailComponent);



/***/ }),

/***/ "./src/app/Misc/material.ts":
/*!**********************************!*\
  !*** ./src/app/Misc/material.ts ***!
  \**********************************/
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

/***/ "./src/app/Misc/privacy-policy/privacy-policy.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Misc/privacy-policy/privacy-policy.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nh5.main-privacy-heading {\r\n    text-align: center;\r\n    font-size: 2.5em;\r\n    margin: 0.7em;\r\n}\r\n.heading-privacy-policy-container {\r\n    border-bottom: 1px solid black;\r\n    margin: 0px 2em;\r\n}\r\n.privacy-policy-paragraph {\r\n    margin: 2em;\r\n    text-align: justify;\r\n}\r\nh5.paragraph-privacy-heading {\r\n    margin-bottom: 1em;\r\n}\r\n.privacy-policy-page {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWlzYy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvTWlzYy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmg1Lm1haW4tcHJpdmFjeS1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW46IDAuN2VtO1xyXG59XHJcbi5oZWFkaW5nLXByaXZhY3ktcG9saWN5LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDBweCAyZW07XHJcbn1cclxuLnByaXZhY3ktcG9saWN5LXBhcmFncmFwaCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuaDUucGFyYWdyYXBoLXByaXZhY3ktaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLnByaXZhY3ktcG9saWN5LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Misc/privacy-policy/privacy-policy.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Misc/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/privacy-policy/privacy-policy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/Misc/privacy-policy/privacy-policy.component.css")).default]
    })
], PrivacyPolicyComponent);



/***/ }),

/***/ "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectedPropertyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedPropertyDialogComponent", function() { return SelectedPropertyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SelectedPropertyDialogComponent = class SelectedPropertyDialogComponent {
    constructor(
    //  @Inject(MAT_DIALOG_DATA) private data: any,
    dialogRef, _location) {
        this.dialogRef = dialogRef;
        this._location = _location;
        this.message = "";
        this.cancelButtonText = "Cancel";
        this.dialogRef.updateSize("300vw", "300vw");
    }
    ngOnInit() { }
    onConfirmClick() {
        this.dialogRef.close(true);
        // Add match DB details
        // Get seller ID for property
        // Get seller ID by using snapshot.getRef().getParent()
        // Create new DB entry in collection sellerMatches with seller ID as doc ID and then child collection as initiated / offered
        // Create a record in buyerMatches with buyer ID as doc ID and child ID as initiated / offered
    }
    backClicked() {
        this._location.back();
    }
};
SelectedPropertyDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
SelectedPropertyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-selectePpropertyDialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selectedPropertyDialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.html")).default
    })
], SelectedPropertyDialogComponent);



/***/ }),

/***/ "./src/app/Model/agentSignup.ts":
/*!**************************************!*\
  !*** ./src/app/Model/agentSignup.ts ***!
  \**************************************/
/*! exports provided: agentSignup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentSignup", function() { return agentSignup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class agentSignup {
    constructor() {
        this.SearchPostcode = [''];
        this.active = true;
    }
}


/***/ }),

/***/ "./src/app/Model/listingBuyer.ts":
/*!***************************************!*\
  !*** ./src/app/Model/listingBuyer.ts ***!
  \***************************************/
/*! exports provided: listingBuyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listingBuyer", function() { return listingBuyer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class listingBuyer {
    constructor() {
        this.title = "Mr";
        this.ChainStatus = "First Time Buyer";
        this.FinancialPosition = "Mortgage Free";
        this.Type = "Buying to Live";
        this.Position = "Cash Buyer";
        this.PropertyType = "Flat";
        this.SearchRadius = "This postcode only";
        this.PriceRange = 0;
        this.active = true;
    }
}


/***/ }),

/***/ "./src/app/Model/listingSeller.ts":
/*!****************************************!*\
  !*** ./src/app/Model/listingSeller.ts ***!
  \****************************************/
/*! exports provided: listingSeller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listingSeller", function() { return listingSeller; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class listingSeller {
    constructor() {
        this.Title = "Mr";
        this.Country = "India";
        this.ownership = "Freehold";
        this.active = true;
    }
}


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
/* harmony import */ var _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/Property/Property.component */ "./src/app/Home/Property/Property.component.ts");
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ././Home/Home.component */ "./src/app/Home/Home.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/fillFormBuyer.component */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/fillFormSeller.component */ "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts");
/* harmony import */ var _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ././Menu/myProfile/Profile.component */ "./src/app/Menu/myProfile/Profile.component.ts");
/* harmony import */ var _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Menu/myProfile/editProfile/editProfile.component */ "./src/app/Menu/myProfile/editProfile/editProfile.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts");
/* harmony import */ var _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Menu/myListings/myListing.component */ "./src/app/Menu/myListings/myListing.component.ts");
/* harmony import */ var _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Menu/Prefrences/Prefrences.component */ "./src/app/Menu/Prefrences/Prefrences.component.ts");
/* harmony import */ var _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Menu/Chats/chats.component */ "./src/app/Menu/Chats/chats.component.ts");
/* harmony import */ var _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Misc/components/dashboard/dashboard.component */ "./src/app/Misc/components/dashboard/dashboard.component.ts");
/* harmony import */ var _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Misc/components/forgot-password/forgot-password.component */ "./src/app/Misc/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Misc/components/verify-email/verify-email.component */ "./src/app/Misc/components/verify-email/verify-email.component.ts");
/* harmony import */ var _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Misc/components/sign-in/sign-in.component */ "./src/app/Misc/components/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Menu/myMatches/myMatches.component */ "./src/app/Menu/myMatches/myMatches.component.ts");
/* harmony import */ var _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component */ "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts");
/* harmony import */ var _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Home/agent-signup/agent-signup.component */ "./src/app/Home/agent-signup/agent-signup.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts");
/* harmony import */ var _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Misc/privacy-policy/privacy-policy.component */ "./src/app/Misc/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component */ "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts");





























const routes = [
    { path: "Property/:use", component: _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_3__["PropertyComponent"] },
    { path: "", component: _Home_Home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "fillFormBuyer", component: _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_5__["FillFormBuyerComponent"] },
    { path: "confirmSellerdetail", component: _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmSellerDetailComponent"] },
    { path: "buyerMatchlisting", component: _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_7__["BuyerMatcheListingComponent"] },
    {
        path: "SellerSelectedProperty/:LookingStreetname/:Lookingpostcode/:PropertyType/:Conditions/:ChainStatus/:Firstname/:Lastname/:Email/:DOB/:FinancialPosition/:SearchRadius/:PriceRange/:Validity/:Type/:Position/:UserId/:norooms",
        component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_8__["SellerSelectedPropertyComponent"],
    },
    { path: "fillformseller", component: _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_9__["FillFormSellerComponent"] },
    { path: "sellerMatchlisting", component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__["SellerMatchListingComponent"] },
    {
        path: "confirmbuyerdetail",
        component: _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmBuyerDetailComponent"],
    },
    {
        path: "mymatches",
        component: _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_23__["MyMatchesComponent"],
    },
    { path: "profile", component: _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_12__["MyProfileComponent"] },
    { path: "editprofile", component: _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_13__["EditProfileComponent"] },
    {
        path: "buyerSelectedPropertyDetail/:Lookingpostcode/:Lookingstate/:LookingTown/:norooms/:PropertyCondition/:MaxAmount/:LookingAddress/:ownership/:PropertyType/:features/:Firstname/:Lastname/:Email/:DOB/:UserId/:MinAmount",
        component: _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_14__["BuyerSelectedPropertyDetailComponent"],
    },
    { path: "myListing", component: _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_15__["MyListingComponent"] },
    { path: "prefrences", component: _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_16__["PrefrencesComponent"] },
    { path: "chats", component: _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_17__["ChatsComponent"] },
    { path: "sign-in", component: _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"] },
    { path: "dashboard", component: _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"] },
    { path: "forgot-password", component: _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"] },
    { path: "verify-email-address", component: _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_20__["VerifyEmailComponent"] },
    {
        path: "mymatchesselecteddetail/:Lookingpostcode/:LookingAddress/:norooms/:PropertyCondition/:MinAmount/:Lookingstate/:PropertyType/:ownership/:features/:matchStatus",
        component: _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_24__["MyMatchesSelectedDetailsComponent"],
    },
    { path: "agentSignup", component: _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_25__["AgentSignupComponent"] },
    { path: "agentSelection", component: _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_26__["AgentSelectionComponent"] },
    { path: "PrivacyPolicy", component: _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyPolicyComponent"] },
    {
        path: "MyMatchesseller/:Lookingpostcode/:ChainStatus/:FinancialPosition/:Type/:Position/:SearchRadius/:PriceRange:/:matchStatus",
        component: _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_28__["MyMatchesToSellSelectedDetailComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony import */ var _Menu_navigationBar_navigationBar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu/navigationBar/navigationBar.component */ "./src/app/Menu/navigationBar/navigationBar.component.ts");
/* harmony import */ var _Misc_Footer_Footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Misc/Footer/Footer.component */ "./src/app/Misc/Footer/Footer.component.ts");
/* harmony import */ var _Home_Home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Home/Home.component */ "./src/app/Home/Home.component.ts");
/* harmony import */ var _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home/Property/Property.component */ "./src/app/Home/Property/Property.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/fillFormBuyer.component */ "./src/app/Home/Property/fillFormBuyer/fillFormBuyer.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerMatchListing.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/sellerSelectedPropertyDetail.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/confirmSellerDetail.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/fillFormSeller.component */ "./src/app/Home/Property/fillFormSeller/fillFormSeller.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerMatchListing.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/confirmBuyerDetail.component.ts");
/* harmony import */ var _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Menu/myProfile/Profile.component */ "./src/app/Menu/myProfile/Profile.component.ts");
/* harmony import */ var _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Menu/myProfile/editProfile/editProfile.component */ "./src/app/Menu/myProfile/editProfile/editProfile.component.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/buyerMatchListing/buyerSelectedPropertyDetail/buyerSelectedPropertyDetail.component.ts");
/* harmony import */ var _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Menu/myListings/myListing.component */ "./src/app/Menu/myListings/myListing.component.ts");
/* harmony import */ var _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Menu/Prefrences/Prefrences.component */ "./src/app/Menu/Prefrences/Prefrences.component.ts");
/* harmony import */ var _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Menu/Chats/chats.component */ "./src/app/Menu/Chats/chats.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Misc/components/dashboard/dashboard.component */ "./src/app/Misc/components/dashboard/dashboard.component.ts");
/* harmony import */ var _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Misc/components/sign-in/sign-in.component */ "./src/app/Misc/components/sign-in/sign-in.component.ts");
/* harmony import */ var _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Misc/components/forgot-password/forgot-password.component */ "./src/app/Misc/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Misc/components/verify-email/verify-email.component */ "./src/app/Misc/components/verify-email/verify-email.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/alertDialogSellerDataSubmission.component.ts");
/* harmony import */ var _Misc_material__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ././Misc/material */ "./src/app/Misc/material.ts");
/* harmony import */ var _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component */ "./src/app/Home/Property/fillFormBuyer/confirmBuyerDetail/alertDialogBuyerDataSubmission.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./Misc/selectedPropertyDialog/selectedPropertyDialog.component */ "./src/app/Misc/selectedPropertyDialog/selectedPropertyDialog.component.ts");
/* harmony import */ var _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./Menu/myMatches/myMatches.component */ "./src/app/Menu/myMatches/myMatches.component.ts");
/* harmony import */ var _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./Misc/alertFormdialog/alertFormdialog.component */ "./src/app/Misc/alertFormdialog/alertFormdialog.component.ts");
/* harmony import */ var _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component */ "./src/app/Menu/myMatches/my-matches-selected-details/my-matches-selected-details.component.ts");
/* harmony import */ var _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./Home/agent-signup/agent-signup.component */ "./src/app/Home/agent-signup/agent-signup.component.ts");
/* harmony import */ var _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component */ "./src/app/Home/Property/fillFormSeller/confirmSellerDetail/sellerMatchListing/sellerSelectedPropertyDetail/agentSelection/agentSelection.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./Misc/privacy-policy/privacy-policy.component */ "./src/app/Misc/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component */ "./src/app/Menu/myMatches/my-matches-to-sell-selected-detail/my-matches-to-sell-selected-detail.component.ts");
/* harmony import */ var _Menu_notification_notification_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./Menu/notification/notification.component */ "./src/app/Menu/notification/notification.component.ts");
























// Firebase modules



































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Menu_navigationBar_navigationBar_component__WEBPACK_IMPORTED_MODULE_5__["NavigationBarComponent"],
            _Misc_Footer_Footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _Home_Home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _Home_Property_Property_component__WEBPACK_IMPORTED_MODULE_8__["PropertyComponent"],
            _Home_Property_fillFormBuyer_fillFormBuyer_component__WEBPACK_IMPORTED_MODULE_9__["FillFormBuyerComponent"],
            _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerMatchListing_component__WEBPACK_IMPORTED_MODULE_10__["BuyerMatcheListingComponent"],
            _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_sellerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_11__["SellerSelectedPropertyComponent"],
            _Home_Property_fillFormSeller_confirmSellerDetail_confirmSellerDetail_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmSellerDetailComponent"],
            _Home_Property_fillFormSeller_fillFormSeller_component__WEBPACK_IMPORTED_MODULE_13__["FillFormSellerComponent"],
            _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerMatchListing_component__WEBPACK_IMPORTED_MODULE_14__["SellerMatchListingComponent"],
            _Home_Property_fillFormBuyer_confirmBuyerDetail_confirmBuyerDetail_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmBuyerDetailComponent"],
            _Menu_myProfile_editProfile_editProfile_component__WEBPACK_IMPORTED_MODULE_17__["EditProfileComponent"],
            _Menu_myProfile_Profile_component__WEBPACK_IMPORTED_MODULE_16__["MyProfileComponent"],
            _Home_Property_fillFormBuyer_confirmBuyerDetail_buyerMatchListing_buyerSelectedPropertyDetail_buyerSelectedPropertyDetail_component__WEBPACK_IMPORTED_MODULE_18__["BuyerSelectedPropertyDetailComponent"],
            _Menu_myListings_myListing_component__WEBPACK_IMPORTED_MODULE_19__["MyListingComponent"],
            _Menu_Prefrences_Prefrences_component__WEBPACK_IMPORTED_MODULE_20__["PrefrencesComponent"],
            _Menu_Chats_chats_component__WEBPACK_IMPORTED_MODULE_21__["ChatsComponent"],
            _Misc_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"],
            _Misc_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_30__["SignInComponent"],
            _Misc_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"],
            _Misc_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_32__["VerifyEmailComponent"],
            _Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__["AlertDialogComponent"],
            _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__["AlertDialogBuyerDataSubmissionComponent"],
            _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__["SelectedPropertyDialogComponent"],
            _Menu_myMatches_myMatches_component__WEBPACK_IMPORTED_MODULE_81__["MyMatchesComponent"],
            _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__["AltertFormDialogComponent"],
            _Menu_myMatches_my_matches_selected_details_my_matches_selected_details_component__WEBPACK_IMPORTED_MODULE_83__["MyMatchesSelectedDetailsComponent"],
            _Home_agent_signup_agent_signup_component__WEBPACK_IMPORTED_MODULE_84__["AgentSignupComponent"],
            _Home_Property_fillFormSeller_confirmSellerDetail_sellerMatchListing_sellerSelectedPropertyDetail_agentSelection_agentSelection_component__WEBPACK_IMPORTED_MODULE_85__["AgentSelectionComponent"],
            _template_template_component__WEBPACK_IMPORTED_MODULE_86__["TemplateComponent"],
            _Misc_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_87__["PrivacyPolicyComponent"],
            _Menu_myMatches_my_matches_to_sell_selected_detail_my_matches_to_sell_selected_detail_component__WEBPACK_IMPORTED_MODULE_88__["MyMatchesToSellSelectedDetailComponent"],
            _Menu_notification_notification_component__WEBPACK_IMPORTED_MODULE_89__["NotificationComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_24__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebaseConfig, 'street'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__["BrowserAnimationsModule"],
            _Misc_material__WEBPACK_IMPORTED_MODULE_77__["MaterialModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__["MatTabsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_39__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_41__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_44__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_46__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_47__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_49__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_50__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_51__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_52__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_53__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_54__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_55__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_56__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_57__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_58__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_59__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_61__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_62__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_63__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_64__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_65__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_66__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_67__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_68__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_69__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_70__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_71__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_72__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_73__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_74__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_75__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_38__["ScrollingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_79__["HttpClientModule"],
        ],
        entryComponents: [_Home_Property_fillFormSeller_confirmSellerDetail_alertDialogSellerDataSubmission_component__WEBPACK_IMPORTED_MODULE_76__["AlertDialogComponent"], _Home_Property_fillFormBuyer_confirmBuyerDetail_alertDialogBuyerDataSubmission_component__WEBPACK_IMPORTED_MODULE_78__["AlertDialogBuyerDataSubmissionComponent"], _Misc_selectedPropertyDialog_selectedPropertyDialog_component__WEBPACK_IMPORTED_MODULE_80__["SelectedPropertyDialogComponent"], _Misc_alertFormdialog_alertFormdialog_component__WEBPACK_IMPORTED_MODULE_82__["AltertFormDialogComponent"],],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_25__["FirestoreSettingsToken"], useValue: {} }
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
                    this.router.navigate(["home"]);
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

/***/ "./src/app/common.css":
/*!****************************!*\
  !*** ./src/app/common.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  margin: 1em;\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.fa-events-icons-ready .cdk-global-scrollblock {\r\n   \r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  position: inherit !important;\r\n}\r\n\r\n.mat-tab-labels {\r\n\r\n  justify-content: center !important; \r\n  align-items: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFJQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uZmEtZXZlbnRzLWljb25zLXJlYWR5IC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcclxuICAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC10YWItbGFiZWxzIHtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model/listingBuyer */ "./src/app/Model/listingBuyer.ts");




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.latUrl = "https://api.postcodes.io/postcodes/";
        this.configUrl = "https://api-full.addressian.co.uk/postcode/";
        console.log(_Model_listingBuyer__WEBPACK_IMPORTED_MODULE_3__["listingBuyer"].Lookingpostcode);
    }
    search(query) {
        const headerDict = {
            "x-api-key": "BcLIABSb6J3HsvGTpI5jA8FrtOaQqR67736r1Hip"
        };
        const url = "https://api-full.addressian.co.uk/postcode/";
        return this.http.get(url + query, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerDict)
        });
    }
    getLat(Lookingpostcode) {
        console.log(Lookingpostcode);
        return this.http.get(this.latUrl + Lookingpostcode);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HttpService);



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

/***/ "./src/app/template/template.component.css":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  background-image: url(/assets/Images/handshake.jpg);\n  width: 100%;\n  height: auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.upper-back {\n  background-color: black;\n  width: 100%;\n  height: 250px;\n  opacity: 0.5;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.upper-button {\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  z-index: 100;\n\n  font-family: 'Open Sans', sans-serif;\n  position: relative;\n  top: -145px;\n}\n\n.home-button {\n  background-color: #244D93;\n  color: white;\n  width: 35%;\n}\n\n@font-face {\n  font-family: 'Segoe UI Regular';\n  font-style: normal;\n  font-weight: normal;\n  src: local('Segoe UI Regular'), url('/assets/font/Segoe UI.woff') format('woff');\n}\n\n.home-text-font {\n  font-family: 'Segoe UI Regular';\n  color: #707070;\n  margin-bottom: 0.5rem;\n}\n\n.btn-facebook {\n  background-color: #244D93;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.btn-google {\n  background-color: #DD4B33;\n  color: white;\n  width: 30%;\n  height: 35px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.social-login h4 {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n\n.social-button {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: space-evenly;\n  align-items: center;\n\n}\n\n.color-signup {\n  color: #244D93;\n}\n\n.btn-social-login {\n  width: 100%;\n  background-color: #244D93;\n  color: white;\n  margin-top: 3%;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\ni.fa.fa-user.input-group-text.nav-login-form {\n  position: absolute;\n  font-size: 23px;\n  left: 0px;\n  width: 10%;\n  z-index: 10;\n  margin-top: -4%;\n}\n\n.social-login.text-center {\n  padding: 15px;\n}\n\n.checkbox {\n  background: none transparent;\n  border: none;\n  border-left: none;\n  border-right: none;\n  cursor: pointer;\n  /* display: block; */\n  height: auto;\n  position: absolute;\n  top: none;\n  left: none;\n  right: 9px;\n  width: none;\n  /* transition: all .2s; */\n  display: flex;\n  flex-direction: row;\n\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n  border: none;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9;\n  background: black;\n  opacity: 0.5;\n}\n\n.sign-in-main\n{\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFtRDtFQUNuRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsWUFBWTs7RUFFWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0ZBQWdGO0FBQ2xGOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7O0FBRXRDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFFVCxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSW1hZ2VzL2hhbmRzaGFrZS5qcGcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udXBwZXItYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi51cHBlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG5cbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE0NXB4O1xufVxuXG4uaG9tZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzNSU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogbG9jYWwoJ1NlZ29lIFVJIFJlZ3VsYXInKSwgdXJsKCcvYXNzZXRzL2ZvbnQvU2Vnb2UgVUkud29mZicpIGZvcm1hdCgnd29mZicpO1xufVxuXG4uaG9tZS10ZXh0LWZvbnQge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJIFJlZ3VsYXInO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0NEQ5MztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uYnRuLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLnNvY2lhbC1sb2dpbiBoNCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNvY2lhbC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmNvbG9yLXNpZ251cCB7XG4gIGNvbG9yOiAjMjQ0RDkzO1xufVxuXG4uYnRuLXNvY2lhbC1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0RDkzO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cbn1cblxuaS5mYS5mYS11c2VyLmlucHV0LWdyb3VwLXRleHQubmF2LWxvZ2luLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAlO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuXG4uc29jaWFsLWxvZ2luLnRleHQtY2VudGVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBub25lO1xuICBsZWZ0OiBub25lO1xuICByaWdodDogOXB4O1xuICB3aWR0aDogbm9uZTtcbiAgLyogdHJhbnNpdGlvbjogYWxsIC4yczsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc2lnbi1pbi1tYWluXG57XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/template/template.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let TemplateComponent = class TemplateComponent {
    constructor(authService, afAuth) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.selectedIndex = 0;
        this.maxNumberOfTabs = 2;
        this.isLoggedIn = true;
        this.isLoading = false;
        this.newUser = false;
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
    facebookLogin() {
        this.isLoading = true;
        this.authService.FacebookAuth().then(data => {
            this.isLoading = false;
        });
    }
    googleLogin() {
        this.isLoading = true;
        this.authService.GoogleAuth().then(data => {
            this.isLoading = false;
        });
    }
    signIn(email, pass) {
        console.log(email + pass);
        this.isLoading = true;
        this.authService.SignIn(email, pass).then(data => {
            this.isLoading = false;
        });
    }
    signUp(email, pass) {
        this.isLoading = true;
        this.authService.SignUp(email, pass).then(data => {
            this.isLoading = false;
        });
    }
    NewUser() {
        this.newUser = true;
    }
    OldUser() {
        this.newUser = false;
    }
};
TemplateComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-template",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/template/template.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./template.component.css */ "./src/app/template/template.component.css")).default]
    })
], TemplateComponent);



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

module.exports = __webpack_require__(/*! K:\Angular Project\streethok\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);