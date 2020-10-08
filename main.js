(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/fyH":
/*!*****************************!*\
  !*** ./src/i18n/en-US.json ***!
  \*****************************/
/*! exports provided: transferForm.amount, transferForm.back, transferForm.confirm, transferForm.fromAccount, transferForm.genericError, transferForm.submit, transferForm.toAccount, validation.error.amountTooHigh, validation.error.amountTooLow, validation.error.iban, validation.error.invalid, validation.error.required, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"transferForm.amount\":\"Amount\",\"transferForm.back\":\"Back\",\"transferForm.confirm\":\"Confirm\",\"transferForm.fromAccount\":\"From account\",\"transferForm.genericError\":\"Something went wrong. Please try again later.\",\"transferForm.submit\":\"Submit\",\"transferForm.toAccount\":\"To account\",\"validation.error.amountTooHigh\":\"Insufficient funds\",\"validation.error.amountTooLow\":\"Amount too low\",\"validation.error.iban\":\"Enter valid IBAN\",\"validation.error.invalid\":\"Invalid value\",\"validation.error.required\":\"Field required\"}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oegnus/Projects/bb/bb/src/main.ts */"zUnb");


/***/ }),

/***/ "0RKa":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mocks_transactions_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks/transactions.json */ "VLDt");
var _mocks_transactions_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mocks/transactions.json */ "VLDt", 1);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






const DELAY_MS = 500;
class TransactionsService {
    constructor(store) {
        this.store = store;
        this.list = _mocks_transactions_json__WEBPACK_IMPORTED_MODULE_3__.data;
    }
    getList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.list).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(DELAY_MS));
    }
    addTransaction(newTransaction) {
        this.list = [newTransaction, ...this.list];
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "IqPg":
/*!*****************************************!*\
  !*** ./src/app/transactions.reducer.ts ***!
  \*****************************************/
/*! exports provided: transactionsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionsReducer", function() { return transactionsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transactions.actions */ "uAto");


const initialState = {
    isLoading: false,
    isError: false,
    list: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["loadAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true, isError: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["successAction"], (state, { transactionsList }) => (Object.assign(Object.assign({}, state), { isLoading: false, list: transactionsList }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_1__["errorAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false, isError: true }))));
function transactionsReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "JvG/":
/*!*****************************!*\
  !*** ./src/i18n/pl-PL.json ***!
  \*****************************/
/*! exports provided: transferForm.amount, transferForm.back, transferForm.confirm, transferForm.fromAccount, transferForm.genericError, transferForm.submit, transferForm.toAccount, validation.error.amountTooHigh, validation.error.amountTooLow, validation.error.iban, validation.error.invalid, validation.error.required, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"transferForm.amount\":\"Kwota\",\"transferForm.back\":\"Powrót\",\"transferForm.confirm\":\"Potwierdź\",\"transferForm.fromAccount\":\"Z konta\",\"transferForm.genericError\":\"Coś poszło nie tak. Spróbuj ponownie później.\",\"transferForm.submit\":\"Wyślij\",\"transferForm.toAccount\":\"Na konto\",\"validation.error.amountTooHigh\":\"Niewystarczające środki na koncie\",\"validation.error.amountTooLow\":\"Wartość zbyt niska\",\"validation.error.iban\":\"Wpisz poprawny IBAN\",\"validation.error.invalid\":\"Nieprawidłowa wartość\",\"validation.error.required\":\"Pole wymagane\"}");

/***/ }),

/***/ "OQZB":
/*!*************************************************!*\
  !*** ./src/app/transfer-form/iban.validator.ts ***!
  \*************************************************/
/*! exports provided: ibanValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ibanValidator", function() { return ibanValidator; });
/* harmony import */ var iban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iban */ "8QIb");
/* harmony import */ var iban__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iban__WEBPACK_IMPORTED_MODULE_0__);

function ibanValidator(control) {
    if (!iban__WEBPACK_IMPORTED_MODULE_0__["isValid"](control.value)) {
        return { iban: true };
    }
    return null;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-form/transfer-form.component */ "aZSa");
/* harmony import */ var _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transactions-list/transactions-list.component */ "WKf4");




class AppComponent {
    constructor() {
        this.title = 'bb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 0, consts: [[1, "bb-navbar"], [1, "container"], ["src", "assets/logo.jpg", 1, "bb-navbar__logo"], [1, "container", "mb-3"], [1, "row"], [1, "col-md-4"], [1, "bb-panel"], [1, "bb-panel__header"], ["src", "assets/icons/arrows.png", 1, "bb-panel__header__icon"], [1, "bb-panel__body"], [1, "col-md-8"], [1, "bb-panel", "bb-panel--large"], ["src", "assets/icons/briefcase.png", 1, "bb-panel__header__icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Make a transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-transfer-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Recent transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-transactions-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_1__["TransferFormComponent"], _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_2__["TransactionsListComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "VLDt":
/*!*************************************!*\
  !*** ./src/mocks/transactions.json ***!
  \*************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"categoryCode\":\"#12a580\",\"dates\":{\"valueDate\":1600493600000},\"transaction\":{\"amountCurrency\":{\"amount\":5000,\"currencyCode\":\"EUR\"},\"type\":\"Salaries\",\"creditDebitIndicator\":\"CRDT\"},\"merchant\":{\"name\":\"Backbase\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#12a580\",\"dates\":{\"valueDate\":1600387200000},\"transaction\":{\"amountCurrency\":{\"amount\":\"82.02\",\"currencyCode\":\"EUR\"},\"type\":\"Card Payment\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"The Tea Lounge\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#d51271\",\"dates\":{\"valueDate\":\"2020-09-19\"},\"transaction\":{\"amountCurrency\":{\"amount\":\"84.64\",\"currencyCode\":\"EUR\"},\"type\":\"Card Payment\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Texaco\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#12a580\",\"dates\":{\"valueDate\":1600300800000},\"transaction\":{\"amountCurrency\":{\"amount\":\"84.76\",\"currencyCode\":\"EUR\"},\"type\":\"Card Payment\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"The Tea Lounge\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#c12020\",\"dates\":{\"valueDate\":1600370800000},\"transaction\":{\"amountCurrency\":{\"amount\":\"22.10\",\"currencyCode\":\"EUR\"},\"type\":\"Online Transfer\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Amazon Online Store\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#c89616\",\"dates\":{\"valueDate\":1600214400000},\"transaction\":{\"amountCurrency\":{\"amount\":\"46.25\",\"currencyCode\":\"EUR\"},\"type\":\"Card Payment\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"7-Eleven\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#e25a2c\",\"dates\":{\"valueDate\":1476721442000},\"transaction\":{\"amountCurrency\":{\"amount\":\"19.72\",\"currencyCode\":\"EUR\"},\"type\":\"Online Transfer\"},\"merchant\":{\"name\":\"H&M Online Store\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#1180aa\",\"dates\":{\"valueDate\":\"2020-09-15\"},\"transaction\":{\"amountCurrency\":{\"amount\":\"68.87\",\"currencyCode\":\"EUR\"},\"type\":\"Transaction\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Jerry Hildreth\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#1180aa\",\"dates\":{\"valueDate\":1600041600000},\"transaction\":{\"amountCurrency\":{\"amount\":\"52.36\",\"currencyCode\":\"EUR\"},\"type\":\"Transaction\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Lawrence Pearson\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#12a580\",\"dates\":{\"valueDate\":1599955200000},\"transaction\":{\"amountCurrency\":{\"amount\":\"75.93\",\"currencyCode\":\"EUR\"},\"type\":\"Card Payment\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Whole Foods\",\"accountNumber\":\"SI64397745065188826\"}},{\"categoryCode\":\"#fbbb1b\",\"dates\":{\"valueDate\":1599868800000},\"transaction\":{\"amountCurrency\":{\"amount\":\"142.95\",\"currencyCode\":\"EUR\"},\"type\":\"Online Transfer\",\"creditDebitIndicator\":\"DBIT\"},\"merchant\":{\"name\":\"Southern Electric Company\",\"accountNumber\":\"SI64397745065188826\"}}]}");

/***/ }),

/***/ "WKf4":
/*!******************************************************************!*\
  !*** ./src/app/transactions-list/transactions-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListComponent", function() { return TransactionsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transactions.actions */ "uAto");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function (a0) { return { "bb-sort-icon--descending": a0 }; };
function TransactionsListComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r0.isAscending));
} }
function TransactionsListComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r1.isAscending));
} }
function TransactionsListComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx_r2.isAscending));
} }
function TransactionsListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function TransactionsListComponent_tr_18_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const transaction_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", transaction_r5.merchantIconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TransactionsListComponent_tr_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
const _c1 = function (a0) { return { background: a0 }; };
function TransactionsListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TransactionsListComponent_tr_18_img_6_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransactionsListComponent_tr_18_div_7_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, transaction_r5.categoryCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, transaction_r5.date, "LLL. d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", transaction_r5.merchantIconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !transaction_r5.merchantIconSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r5.merchantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r5.transactionType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", transaction_r5.amount.toFixed(2), " ", transaction_r5.currency, "");
} }
function normalizeTransaction(transaction) {
    let date = transaction.dates.valueDate;
    if (typeof date === 'string') {
        date = new Date(date).getTime();
    }
    let amount = transaction.transaction.amountCurrency.amount;
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    if (transaction.transaction.creditDebitIndicator === 'DBIT') {
        amount = -amount;
    }
    const merchantIconSrc = transaction.merchant.name
        ? 'assets/merchant-logos/' + transaction.merchant.name.toLowerCase().split(' ').join('-') + '.png'
        : null;
    return {
        date,
        merchantIconSrc,
        merchantName: transaction.merchant.name,
        transactionType: transaction.transaction.type,
        amount,
        currency: transaction.transaction.amountCurrency.currencyCode,
        categoryCode: transaction.categoryCode,
    };
}
class TransactionsListComponent {
    constructor(store) {
        this.store = store;
        this.isLoading = false;
        this.transactions = [];
        this.fcSearchPhrase = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            sortBy: 'date',
            isAscending: false
        });
    }
    ngOnInit() {
        const normalizedTransactionsState$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])('transactions'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(transactionsState => ({
            isLoading: transactionsState.isLoading,
            list: transactionsState.list.map(normalizeTransaction)
        })));
        const searchPhrase$ = this.fcSearchPhrase.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''));
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            normalizedTransactionsState$,
            searchPhrase$,
            this.sort$
        ])
            .subscribe(([transactionsState, searchPhrase, sort]) => {
            this.isLoading = transactionsState.isLoading;
            // Search
            const lowerCaseSearchPhrase = searchPhrase.toLowerCase();
            this.transactions = transactionsState.list.filter(transaction => {
                const phrases = [
                    transaction.transactionType,
                    transaction.merchantName,
                    transaction.currency
                ];
                for (const phrase of phrases) {
                    if (phrase.toLowerCase().indexOf(lowerCaseSearchPhrase) >= 0) {
                        return true;
                    }
                }
                return false;
            });
            // Sort
            this.sortBy = sort.sortBy;
            this.isAscending = sort.isAscending;
            const sortOrderMultiplier = sort.isAscending ? 1 : -1;
            const sortFnDict = {
                amount: (a, b) => (a.amount - b.amount) * sortOrderMultiplier,
                beneficiary: (a, b) => (a.merchantName > b.merchantName ? 1 : -1) * sortOrderMultiplier,
                date: (a, b) => (a.date - b.date) * sortOrderMultiplier
            };
            const sortFn = sortFnDict[sort.sortBy];
            if (sortFn) {
                this.transactions.sort(sortFn);
            }
        });
        this.store.dispatch(Object(_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["loadAction"])());
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    setSortBy(sortBy) {
        const currentSort = this.sort$.getValue();
        this.sort$.next({
            sortBy,
            isAscending: sortBy === currentSort.sortBy ? !currentSort.isAscending : currentSort.isAscending
        });
    }
}
TransactionsListComponent.ɵfac = function TransactionsListComponent_Factory(t) { return new (t || TransactionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
TransactionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsListComponent, selectors: [["app-transactions-list"]], decls: 19, vars: 6, consts: [[1, "row"], [1, "col-md-6"], ["type", "text", "id", "transactions_searchPhrase", "placeholder", "Search by typing...", 1, "form-control", 3, "formControl"], [1, "col-md-6", "text-right"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["class", "bb-sort-icon", 3, "ngClass", 4, "ngIf"], [1, "bb-table-spinner"], ["class", "spinner-border", "role", "status", 4, "ngIf"], [1, "bb-table"], [4, "ngFor", "ngForOf"], [1, "bb-sort-icon", 3, "ngClass"], ["role", "status", 1, "spinner-border"], [1, "bb-table__color-strip", 3, "ngStyle"], ["class", "bb-table__icon", 3, "src", 4, "ngIf"], ["class", "bb-table__icon", 4, "ngIf"], [1, "text-right"], [1, "bb-table__icon", 3, "src"], [1, "bb-table__icon"]], template: function TransactionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sort by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsListComponent_Template_button_click_6_listener() { return ctx.setSortBy("date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransactionsListComponent_span_7_Template, 1, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsListComponent_Template_button_click_9_listener() { return ctx.setSortBy("beneficiary"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionsListComponent_span_10_Template, 1, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Beneficiary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsListComponent_Template_button_click_12_listener() { return ctx.setSortBy("amount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransactionsListComponent_span_13_Template, 1, 3, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransactionsListComponent_div_16_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TransactionsListComponent_tr_18_Template, 14, 13, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.fcSearchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortBy === "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortBy === "beneficiary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sortBy === "amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transactions-list',
                templateUrl: './transactions-list.component.html'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _i18n_en_US_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n/en-US.json */ "/fyH");
var _i18n_en_US_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../i18n/en-US.json */ "/fyH", 1);
/* harmony import */ var _i18n_pl_PL_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/pl-PL.json */ "JvG/");
var _i18n_pl_PL_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../i18n/pl-PL.json */ "JvG/", 1);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _transactions_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transactions.reducer */ "IqPg");
/* harmony import */ var _transactions_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transactions.effects */ "imUl");
/* harmony import */ var _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transactions-list/transactions-list.component */ "WKf4");
/* harmony import */ var _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transfer-form/transfer-form.component */ "aZSa");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");





// In a larger applications translations would be loaded dynamically.
// This app doesn't use http.













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                defaultLanguage: 'en-US',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: () => ({
                        getTranslation: (lang) => {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
                                'en-US': _i18n_en_US_json__WEBPACK_IMPORTED_MODULE_5__,
                                'pl-PL': _i18n_pl_PL_json__WEBPACK_IMPORTED_MODULE_6__
                            }[lang]);
                        }
                    })
                }
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                transactions: _transactions_reducer__WEBPACK_IMPORTED_MODULE_9__["transactionsReducer"]
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([
                _transactions_effects__WEBPACK_IMPORTED_MODULE_10__["TransactionsEffects"]
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_11__["TransactionsListComponent"],
        _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_12__["TransferFormComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_11__["TransactionsListComponent"],
                    _transfer_form_transfer_form_component__WEBPACK_IMPORTED_MODULE_12__["TransferFormComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        defaultLanguage: 'en-US',
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                            useFactory: () => ({
                                getTranslation: (lang) => {
                                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
                                        'en-US': _i18n_en_US_json__WEBPACK_IMPORTED_MODULE_5__,
                                        'pl-PL': _i18n_pl_PL_json__WEBPACK_IMPORTED_MODULE_6__
                                    }[lang]);
                                }
                            })
                        }
                    }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({
                        transactions: _transactions_reducer__WEBPACK_IMPORTED_MODULE_9__["transactionsReducer"]
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([
                        _transactions_effects__WEBPACK_IMPORTED_MODULE_10__["TransactionsEffects"]
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aZSa":
/*!**********************************************************!*\
  !*** ./src/app/transfer-form/transfer-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TransferFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormComponent", function() { return TransferFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _amount_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amount.validator */ "cVJs");
/* harmony import */ var _iban_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iban.validator */ "OQZB");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transfer.service */ "vtes");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function TransferFormComponent_div_0_input_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 14);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function TransferFormComponent_div_0_input_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.fcFromAccount.invalid && (ctx_r3.fcFromAccount.dirty || ctx_r3.fcFromAccount.touched)));
} }
function TransferFormComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validation.error." + ctx_r4.getFirstError(ctx_r4.fcFromAccount)), " ");
} }
function TransferFormComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validation.error." + ctx_r5.getFirstError(ctx_r5.fcToAccount)), " ");
} }
function TransferFormComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "validation.error." + ctx_r6.getFirstError(ctx_r6.fcAmount)), " ");
} }
function TransferFormComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "transferForm.genericError"));
} }
function TransferFormComponent_div_0_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
} }
function TransferFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransferFormComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TransferFormComponent_div_0_input_6_Template, 1, 0, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransferFormComponent_div_0_input_7_Template, 1, 3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TransferFormComponent_div_0_div_8_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TransferFormComponent_div_0_div_14_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TransferFormComponent_div_0_div_20_Template, 3, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TransferFormComponent_div_0_div_21_Template, 3, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TransferFormComponent_div_0_span_24_Template, 1, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.transferForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, "transferForm.fromAccount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoadingAccounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fcFromAccount.errors && (ctx_r0.fcFromAccount.dirty || ctx_r0.fcFromAccount.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, "transferForm.toAccount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx_r0.fcToAccount.invalid && (ctx_r0.fcToAccount.dirty || ctx_r0.fcToAccount.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fcToAccount.errors && (ctx_r0.fcToAccount.dirty || ctx_r0.fcToAccount.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, "transferForm.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r0.fcAmount.invalid && (ctx_r0.fcAmount.dirty || ctx_r0.fcAmount.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fcAmount.errors && (ctx_r0.fcAmount.dirty || ctx_r0.fcAmount.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 20, "transferForm.submit"), " ");
} }
function TransferFormComponent_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "transferForm.genericError"));
} }
function TransferFormComponent_div_1_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
} }
function TransferFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TransferFormComponent_div_1_div_19_Template, 3, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferFormComponent_div_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TransferFormComponent_div_1_span_22_Template, 1, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferFormComponent_div_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "transferForm.fromAccount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.confirmationSummary.fromAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "transferForm.toAccount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.confirmationSummary.toAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "transferForm.amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.confirmationSummary.amount, " ", ctx_r1.confirmationSummary.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, "transferForm.confirm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 19, "transferForm.back"), " ");
} }
// Separate configurations for fields are not needed here.
const transferFormErrorsOrder = ['required', 'iban', 'invalid', 'amountTooLow'];
const transferFormInitialValues = {
    fromAccount: '',
    toAccount: '',
    amount: '',
};
class TransferFormComponent {
    constructor(transferService) {
        this.transferService = transferService;
        this.currentState = 'FORM';
        this.fromAccount = null;
        // show loading indicator for account field
        this.isLoadingAccounts = false;
        // show loading indicator after form is submitted
        this.isLoading = false;
        // show form submitting error
        this.isError = false;
        this.fcFromAccount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true });
        this.fcToAccount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _iban_validator__WEBPACK_IMPORTED_MODULE_3__["ibanValidator"]
        ]);
        this.fcAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            Object(_amount_validator__WEBPACK_IMPORTED_MODULE_2__["createAmountValidator"])(() => {
                if (!this.fromAccount) {
                    return 0;
                }
                return this.fromAccount.balance + this.fromAccount.maxOverdraft;
            })
        ]);
        this.transferForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fromAccount: this.fcFromAccount,
            toAccount: this.fcToAccount,
            amount: this.fcAmount,
        });
        this.confirmationSummary = {
            fromAccount: '',
            toAccount: '',
            amount: '',
            currency: ''
        };
    }
    ngOnInit() {
        this.showForm();
    }
    showForm() {
        this.currentState = 'FORM';
        this.transferForm.reset();
        this.transferForm.setValue(transferFormInitialValues);
        this.isLoadingAccounts = true;
        this.transferService.getFromAccounts().subscribe(fromAccounts => {
            this.fromAccount = fromAccounts[0];
            this.isLoadingAccounts = false;
            if (this.fromAccount) {
                const displayValue = this.fromAccount.name + ' - ' + this.fromAccount.balance + ' ' + this.fromAccount.currency;
                this.fcFromAccount.setValue(displayValue);
            }
            else {
                this.fcFromAccount.setValue('');
            }
        });
    }
    showConfirmation() {
        this.confirmationSummary = {
            fromAccount: this.fcFromAccount.value,
            toAccount: this.fcToAccount.value,
            amount: parseFloat(this.fcAmount.value).toFixed(2),
            currency: this.fromAccount.currency
        };
        this.currentState = 'CONFIRMATION';
    }
    onSubmit() {
        // Prevent multiple clicks
        if (this.isLoading) {
            return;
        }
        // Check if all data is loaded
        if (this.isLoadingAccounts) {
            return;
        }
        // Show all errors
        Object.keys(this.transferForm.controls).forEach(key => {
            this.transferForm.controls[key].markAsDirty();
        });
        // Prevent sending invalid form
        if (this.transferForm.invalid) {
            return;
        }
        this.showConfirmation();
    }
    onBack() {
        // Prevent going back when request is in progress
        if (this.isLoading) {
            return;
        }
        this.currentState = 'FORM';
    }
    onConfirm() {
        // Prevent multiple clicks
        if (this.isLoading) {
            return;
        }
        // Map form to transfer DTO
        const transfer = {
            amount: parseFloat(this.transferForm.value.amount),
            fromAccount: this.fromAccount
        };
        // Submit
        this.isError = false;
        this.isLoading = true;
        this.transferService
            .makeTransfer(transfer)
            .subscribe(() => {
            this.isLoading = false;
            this.showForm();
        }, () => {
            // Show generic error
            this.isError = true;
            this.isLoading = false;
        });
    }
    getFirstError(formControl) {
        const errorKey = transferFormErrorsOrder.find(key => formControl.errors[key]);
        return errorKey || Object.keys(formControl.errors)[0];
    }
}
TransferFormComponent.ɵfac = function TransferFormComponent_Factory(t) { return new (t || TransferFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_transfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"])); };
TransferFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferFormComponent, selectors: [["app-transfer-form"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "transferForm_fromAccount"], ["type", "text", "class", "form-control", "value", "Loading accounts...", "disabled", "", 4, "ngIf"], ["type", "text", "class", "form-control", "id", "transferForm_fromAccount", "formControlName", "fromAccount", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "transferForm_toAccount"], ["type", "text", "id", "transferForm_toAccount", "formControlName", "toAccount", 1, "form-control", 3, "ngClass"], ["for", "transferForm_amount"], ["type", "text", "id", "transferForm_amount", "formControlName", "amount", 1, "form-control", 3, "ngClass"], [1, "bb-form-buttons"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["type", "text", "value", "Loading accounts...", "disabled", "", 1, "form-control"], ["type", "text", "id", "transferForm_fromAccount", "formControlName", "fromAccount", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function TransferFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TransferFormComponent_div_0_Template, 27, 26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransferFormComponent_div_1_Template, 28, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentState === "FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentState === "CONFIRMATION");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transfer-form',
                templateUrl: './transfer-form.component.html'
            }]
    }], function () { return [{ type: _transfer_service__WEBPACK_IMPORTED_MODULE_4__["TransferService"] }]; }, null); })();


/***/ }),

/***/ "cVJs":
/*!***************************************************!*\
  !*** ./src/app/transfer-form/amount.validator.ts ***!
  \***************************************************/
/*! exports provided: createAmountValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAmountValidator", function() { return createAmountValidator; });
function createAmountValidator(maxAmountGetterFn) {
    return function amountValidator(control) {
        const amountString = control.value;
        const amount = parseFloat(amountString);
        if (isNaN(amount)) {
            return { invalid: true };
        }
        if (amount <= 0) {
            return { amountTooLow: true };
        }
        if (amount > maxAmountGetterFn()) {
            return { amountTooHigh: true };
        }
        return null;
    };
}


/***/ }),

/***/ "fFOy":
/*!*************************************!*\
  !*** ./src/app/transfer.actions.ts ***!
  \*************************************/
/*! exports provided: successAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successAction", function() { return successAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const successAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Transfer] Success');


/***/ }),

/***/ "imUl":
/*!*****************************************!*\
  !*** ./src/app/transactions.effects.ts ***!
  \*****************************************/
/*! exports provided: TransactionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsEffects", function() { return TransactionsEffects; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _transfer_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transfer.actions */ "fFOy");
/* harmony import */ var _transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions.actions */ "uAto");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions.service */ "0RKa");









class TransactionsEffects {
    constructor(actions$, transactionsService) {
        this.actions$ = actions$;
        this.transactionsService = transactionsService;
        this.loadTransactions$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["loadAction"].type), 
        // ignore previous pending requests to prevent wrong order
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.transactionsService.getList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(transactionsList => Object(_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["successAction"])({ transactionsList })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object(_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["errorAction"])()))))));
        /* Reload transactions list after a transfer is made */
        this.transferSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_transfer_actions__WEBPACK_IMPORTED_MODULE_4__["successAction"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => Object(_transactions_actions__WEBPACK_IMPORTED_MODULE_5__["loadAction"])())));
    }
}
TransactionsEffects.ɵfac = function TransactionsEffects_Factory(t) { return new (t || TransactionsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_transactions_service__WEBPACK_IMPORTED_MODULE_6__["TransactionsService"])); };
TransactionsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransactionsEffects, factory: TransactionsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TransactionsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _transactions_service__WEBPACK_IMPORTED_MODULE_6__["TransactionsService"] }]; }, null); })();


/***/ }),

/***/ "uAto":
/*!*****************************************!*\
  !*** ./src/app/transactions.actions.ts ***!
  \*****************************************/
/*! exports provided: loadAction, successAction, errorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAction", function() { return loadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successAction", function() { return successAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorAction", function() { return errorAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Transactions] Load');
const successAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Transactions] Load success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const errorAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Transactions] Load error');


/***/ }),

/***/ "vtes":
/*!*************************************!*\
  !*** ./src/app/transfer.service.ts ***!
  \*************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _transfer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfer.actions */ "fFOy");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transactions.service */ "0RKa");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");







const DELAY_MS = 200;
class TransferService {
    constructor(transactionsService, store) {
        this.transactionsService = transactionsService;
        this.store = store;
        this.accounts = [{
                id: '1',
                name: 'Free Checking (4692)',
                balance: 5824.76,
                currency: 'USD',
                maxOverdraft: 500
            }];
    }
    getFromAccounts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.accounts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(DELAY_MS));
    }
    makeTransfer(newTransfer) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(DELAY_MS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            const account = this.accounts.find(acc => acc.id === newTransfer.fromAccount.id);
            if (!account) {
                throw Error('account not found');
            }
            account.balance -= newTransfer.amount;
            account.balance = Math.round(account.balance * 100) / 100;
            this.transactionsService.addTransaction({
                categoryCode: '#1180aa',
                dates: {
                    valueDate: Date.now()
                },
                transaction: {
                    amountCurrency: {
                        amount: newTransfer.amount,
                        currencyCode: newTransfer.fromAccount.currency,
                    },
                    type: 'Transaction',
                    creditDebitIndicator: 'DBIT'
                },
                merchant: {
                    name: '',
                    accountNumber: ''
                }
            });
            this.store.dispatch(Object(_transfer_actions__WEBPACK_IMPORTED_MODULE_3__["successAction"])());
        }));
    }
}
TransferService.ɵfac = function TransferService_Factory(t) { return new (t || TransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
TransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransferService, factory: TransferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map