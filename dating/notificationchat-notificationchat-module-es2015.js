(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationchat-notificationchat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>notificationchat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n  \n  <ion-content>\n    <div class=\"header-persona-chat\" routerLink=\"/chat/tabs/tabs2\">\n      <div class=\"arrow\">\n  \n        <img src=\"../../assets/Images/asset-1.png\" class=\"arrow-image\">\n      </div>\n      <div class=\"image\">\n        <img src=\"../../assets/Images/logo.png\" class=\"image-chat\">\n      </div>\n      <div class=\"name\">\n     \n      </div>\n    </div>\n<div class=\"chat-time\"></div>\n    <div class=\"left-chat\">\n      <p class=\"chat-content\">How may I help you today?</p>\n    </div>\n    <div class=\"right-chat\">\n      <p class=\"chat-content\">Hi, I am having trouble with my \n        account....</p>\n    </div>\n  </ion-content>\n  \n \n  \n  <ion-content>\n    <div class=\"text-message-writer\">\n\n      <input type=\"text\" id=\"chat\" name=\"chat\" class=\"chat-field\" placeholder=\"Type your message here\">\n      <img src=\"../../assets/Images/send.png\" class=\"img-send\">\n    </div>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/notificationchat/notificationchat-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationchatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPageRoutingModule", function() { return NotificationchatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/notificationchat/notificationchat.page.ts");




const routes = [
    {
        path: '',
        component: _notificationchat_page__WEBPACK_IMPORTED_MODULE_3__["NotificationchatPage"]
    }
];
let NotificationchatPageRoutingModule = class NotificationchatPageRoutingModule {
};
NotificationchatPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationchatPageRoutingModule);



/***/ }),

/***/ "./src/app/notificationchat/notificationchat.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationchatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPageModule", function() { return NotificationchatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationchat-routing.module */ "./src/app/notificationchat/notificationchat-routing.module.ts");
/* harmony import */ var _notificationchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificationchat.page */ "./src/app/notificationchat/notificationchat.page.ts");







let NotificationchatPageModule = class NotificationchatPageModule {
};
NotificationchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notificationchat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationchatPageRoutingModule"]
        ],
        declarations: [_notificationchat_page__WEBPACK_IMPORTED_MODULE_6__["NotificationchatPage"]]
    })
], NotificationchatPageModule);



/***/ }),

/***/ "./src/app/notificationchat/notificationchat.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-persona-chat {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 2fr 4fr 16fr;\n  background-color: #FAFAFA;\n  padding: 0.5em;\n}\n\nimg.image-chat {\n  height: 7vh;\n}\n\np.chat-name {\n  margin-bottom: 0px;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.text-message-writer {\n  background-color: #FAFAFA;\n  padding: 0.5em;\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\ninput#chat {\n  width: 80%;\n  border-radius: 13px;\n  border: 1px solid;\n  margin: 11px;\n  padding-left: 15px;\n  font-size: 15px;\n}\n\nimg.img-send {\n  height: 3vh;\n}\n\n.chat-time {\n  display: flex;\n  /* justify-content: center; */\n  justify-content: center;\n  margin: 2em;\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n\n.left-chat {\n  background-color: #0182FF;\n  width: 49%;\n  border-radius: 50px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  text-align: center;\n  margin-left: 6px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n}\n\n.right-chat {\n  float: right;\n  background-color: #E7E7EB;\n  width: 49%;\n  border-radius: 50px;\n  text-align: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 1em;\n  font-size: 13px;\n}\n\np.chat-content {\n  margin-bottom: 0px;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9nb2QvTWFpbiBEYXRhL0FuZ3VsYXIgUHJvamVjdC9ub3Q0RGF0aW5nL3NyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9uY2hhdC9ub3RpZmljYXRpb25jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFFSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNPSjs7QURKQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbmNoYXQvbm90aWZpY2F0aW9uY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBlcnNvbmEtY2hhdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmciAxNmZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcbmltZy5pbWFnZS1jaGF0IHtcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcbnAuY2hhdC1uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnRleHQtbWVzc2FnZS13cml0ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlucHV0I2NoYXQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMTFweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pbWcuaW1nLXNlbmQge1xyXG4gICAgaGVpZ2h0OiAzdmg7XHJcbn1cclxuLmNoYXQtdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ubGVmdC1jaGF0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTgyRkY7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnJpZ2h0LWNoYXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFQjtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5wLmNoYXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxufSIsIi5oZWFkZXItcGVyc29uYS1jaGF0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyIDE2ZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5pbWcuaW1hZ2UtY2hhdCB7XG4gIGhlaWdodDogN3ZoO1xufVxuXG5wLmNoYXQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRleHQtbWVzc2FnZS13cml0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0I2NoYXQge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luOiAxMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nLmltZy1zZW5kIHtcbiAgaGVpZ2h0OiAzdmg7XG59XG5cbi5jaGF0LXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGVmdC1jaGF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODJGRjtcbiAgd2lkdGg6IDQ5JTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yaWdodC1jaGF0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0VCO1xuICB3aWR0aDogNDklO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5wLmNoYXQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notificationchat/notificationchat.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/notificationchat/notificationchat.page.ts ***!
  \***********************************************************/
/*! exports provided: NotificationchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationchatPage", function() { return NotificationchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationchatPage = class NotificationchatPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificationchat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notificationchat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificationchat/notificationchat.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notificationchat.page.scss */ "./src/app/notificationchat/notificationchat.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationchatPage);



/***/ })

}]);
//# sourceMappingURL=notificationchat-notificationchat-module-es2015.js.map