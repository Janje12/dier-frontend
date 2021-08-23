(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "1XyK":
    /*!***************************************************!*\
      !*** ./src/app/@core/service/location.service.ts ***!
      \***************************************************/

    /*! exports provided: LocationService */

    /***/
    function XyK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _data_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/location */
      "5mhh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocationService = /*#__PURE__*/function (_data_location__WEBPA) {
        _inherits(LocationService, _data_location__WEBPA);

        var _super = _createSuper(LocationService);

        function LocationService(http) {
          var _this;

          _classCallCheck(this, LocationService);

          _this = _super.call(this);
          _this.http = http;
          _this.townshipsIsLoaded = false;
          _this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          return _this;
        }

        _createClass(LocationService, [{
          key: "createLocation",
          value: function createLocation(location) {
            return undefined;
          }
        }, {
          key: "deleteLocation",
          value: function deleteLocation(value, type) {
            return undefined;
          }
        }, {
          key: "getLocation",
          value: function getLocation(value) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http.get(this.apiUrl + '/api/location/one/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "getLocations",
          value: function getLocations() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http.get(this.apiUrl + '/api/location/many/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "updateLocation",
          value: function updateLocation(location, value, type) {
            return this.http.patch(this.apiUrl + '/api/location/one/' + "".concat(type, "/").concat(value), location);
          } // Get all the distinct names of townships as an array of string

        }, {
          key: "getDistinctTownships",
          value: function getDistinctTownships() {
            if (!this.townshipsIsLoaded) {
              this.townshipNames = this.http.get(this.apiUrl + '/api/location/townships');
              this.townshipsIsLoaded = true;
            }

            return this.townshipNames;
          } // Get all the places that are located in that township

        }, {
          key: "getPlacesFromTownship",
          value: function getPlacesFromTownship(townshipName) {
            return this.http.get(this.apiUrl + '/api/location/place/' + townshipName);
          }
        }, {
          key: "filter",
          value: function filter(value, arr) {
            var filterValue = value.toLowerCase();
            if (arr === undefined) return;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(arr.filter(function (x) {
              return x.toLowerCase().includes(filterValue);
            }));
          }
        }]);

        return LocationService;
      }(_data_location__WEBPACK_IMPORTED_MODULE_2__["LocationData"]);

      LocationService.ɵfac = function LocationService_Factory(t) {
        return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: LocationService,
        factory: LocationService.ɵfac
      });
      /***/
    },

    /***/
    "1yjk":
    /*!****************************************************************************************!*\
      !*** ./src/app/auth/register/register-confirmation/register-confirmation.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: RegisterConfirmationComponent */

    /***/
    function yjk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterConfirmationComponent", function () {
        return RegisterConfirmationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../terms-of-service/terms-of-service.component */
      "9zd/");

      var _c0 = ["reCaptcha"];
      var _c1 = ["termsOfServiceTemplate"];

      function RegisterConfirmationComponent_button_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r6);
        }
      }

      function RegisterConfirmationComponent_ng_template_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "terms-of-service");
        }
      }

      var RegisterConfirmationComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC) {
        _inherits(RegisterConfirmationComponent, _nebular_auth__WEBPAC);

        var _super2 = _createSuper(RegisterConfirmationComponent);

        function RegisterConfirmationComponent(service) {
          var _this2;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var windowService = arguments.length > 2 ? arguments[2] : undefined;
          var cd = arguments.length > 3 ? arguments[3] : undefined;
          var router = arguments.length > 4 ? arguments[4] : undefined;
          var registerService = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, RegisterConfirmationComponent);

          _this2 = _super2.call(this, service, options, cd, router);
          _this2.service = service;
          _this2.options = options;
          _this2.windowService = windowService;
          _this2.cd = cd;
          _this2.router = router;
          _this2.registerService = registerService;
          _this2.redirectDelay = 0;
          _this2.showMessages = [];
          _this2.strategy = '';
          _this2.submitted = false;
          _this2.errors = [];
          _this2.messages = [];
          _this2.redirectDelay = _this2.getConfigValue('forms.register.redirectDelay');
          _this2.showMessages = _this2.getConfigValue('forms.register.showMessages');
          _this2.strategy = _this2.getConfigValue('forms.register.strategy');
          return _this2;
        }

        _createClass(RegisterConfirmationComponent, [{
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.operations$ = this.registerService.getOperations();
            this.company$ = this.registerService.getCompany();
            this.user$ = this.registerService.getUser();
          }
        }, {
          key: "resolved",
          value: function resolved(token) {}
        }, {
          key: "register",
          value: function register() {
            var _this3 = this;

            this.errors = this.messages = [];
            this.submitted = true;
            this.reCaptcha.execute();
            var user;
            this.user$.subscribe(function (k) {
              user = k;
            });
            this.service.register(this.strategy, user).subscribe(function (result) {
              _this3.submitted = false;

              if (result.isSuccess()) {
                _this3.messages = result.getMessages();
              } else {
                _this3.errors = result.getErrors();
              }

              var redirect = result.getRedirect();

              if (redirect) {
                setTimeout(function () {
                  _this3.registerService.clearData();

                  return _this3.router.navigateByUrl(redirect);
                }, _this3.redirectDelay);
              }

              _this3.cd.detectChanges();
            });
          }
        }, {
          key: "openTermsOfService",
          value: function openTermsOfService() {
            this.windowRef = this.windowService.open(this.termsOfServiceTemplate, {
              title: 'Uslovi korišćenja'
            });
          }
        }]);

        return RegisterConfirmationComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"]);

      RegisterConfirmationComponent.ɵfac = function RegisterConfirmationComponent_Factory(t) {
        return new (t || RegisterConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]));
      };

      RegisterConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterConfirmationComponent,
        selectors: [["register-confirmation"]],
        viewQuery: function RegisterConfirmationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reCaptcha = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.termsOfServiceTemplate = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 172,
        vars: 64,
        consts: [[1, "text-center"], ["disableStepNavigation", "", "selectedIndex", "4"], ["label", "User", "completed", "true"], ["label", "Firma", "completed", "true"], ["label", "Operacije", "completed", "true"], ["label", "Informacije", "completed", "true"], ["label", "Potvrda"], [1, "row"], [1, "col-4"], [1, "row", "mb-2"], [1, "col-12"], [1, "text-muted"], ["size", "small", "nbButton", "", "fullWidth", "", "outline", "", "status", "info", 1, "no-select"], ["size", "small", "nbButton", "", "class", "no-select rad-text mb-2", "fullWidth", "", "outline", "", "status", "warning", 4, "ngFor", "ngForOf"], [1, "col-8"], ["size", "small", "nbButton", "", "fullWidth", "", "outline", "", "status", "success", 1, "no-select"], [1, "col-6"], [1, "col-6", "mb-1"], [1, "email-text", "p-0", "m-0"], [3, "ngSubmit"], ["nbButton", "", "fullWidth", "", "status", "danger", "routerLink", "../register-informations", 1, "mt-2", "col-6"], ["nbButton", "", "fullWidth", "", "status", "success", "type", "submit", 1, "col-6", "mt-2", 3, "disabled"], ["size", "invisible", 3, "siteKey", "resolved"], ["reCaptcha", "reCaptcha"], [1, "row", "justify-content-center", "mt-2", "mb-2"], [1, "col-5", "flex-fill"], ["name", "terms", "required", ""], ["uslovi", ""], ["href", "javascript:;", 3, "click"], ["name", "tacnost", "required", ""], ["tacnost", ""], ["termsOfServiceTemplate", ""], ["size", "small", "nbButton", "", "fullWidth", "", "outline", "", "status", "warning", 1, "no-select", "rad-text", "mb-2"]],
        template: function RegisterConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-stepper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Prezime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Telefon:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Korisni\u010Dko ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rad firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RegisterConfirmationComponent_button_59_Template, 2, 1, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Firma:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Naziv:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PIB:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Mati\u010Dni broj:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Adresa:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Delatnost:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Telefon:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Email za prijem dokumenata:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Faks:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](138, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Zakonski zastupnik firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](146, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](150, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterConfirmationComponent_Template_form_ngSubmit_151_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Nazad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Zavr\u0161i ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "re-captcha", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function RegisterConfirmationComponent_Template_re_captcha_resolved_156_listener($event) {
              return ctx.resolved($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nb-checkbox", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Sla\u017Eem se sa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterConfirmationComponent_Template_a_click_163_listener() {
              return ctx.openTermsOfService();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Uslovima Kori\u0161\u0107enjima");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nb-checkbox", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Potvr\u0111ujem da su sve unete informacije ta\u010Dne ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, RegisterConfirmationComponent_ng_template_170_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](161);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](168);

            var tmp_0_0 = null;
            var tmp_1_0 = null;
            var tmp_2_0 = null;
            var tmp_3_0 = null;
            var tmp_4_0 = null;
            var tmp_6_0 = null;
            var tmp_7_0 = null;
            var tmp_8_0 = null;
            var tmp_9_0 = null;
            var tmp_10_0 = null;
            var tmp_11_0 = null;
            var tmp_12_0 = null;
            var tmp_13_0 = null;
            var tmp_14_0 = null;
            var tmp_15_0 = null;
            var tmp_16_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 22, ctx.user$)) == null ? null : tmp_0_0.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 24, ctx.user$)) == null ? null : tmp_1_0.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 26, ctx.user$)) == null ? null : tmp_2_0.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 28, ctx.user$)) == null ? null : tmp_3_0.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 30, ctx.user$)) == null ? null : tmp_4_0.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 32, ctx.operations$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 34, ctx.company$)) == null ? null : tmp_6_0.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 36, ctx.company$)) == null ? null : tmp_7_0.pib);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 38, ctx.company$)) == null ? null : tmp_8_0.mat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 40, ctx.company$)) == null ? null : tmp_9_0.address.location.townshipName, " , ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 42, ctx.company$)) == null ? null : tmp_9_0.address.location.placeName, ", ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 44, ctx.company$)) == null ? null : tmp_9_0.address.street, " ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 46, ctx.company$)) == null ? null : tmp_9_0.address.location.zipCode, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 48, ctx.company$)) == null ? null : tmp_10_0.occupation.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](118, 50, ctx.company$)) == null ? null : tmp_11_0.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 52, ctx.company$)) == null ? null : tmp_12_0.telephone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 54, ctx.company$)) == null ? null : tmp_13_0.emailReception);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](137, 56, ctx.company$)) == null ? null : tmp_14_0.fax) === "" ? "/" : (tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](138, 58, ctx.company$)) == null ? null : tmp_14_0.fax);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](146, 60, ctx.company$)) == null ? null : tmp_15_0.legalRep.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](150, 62, ctx.company$)) == null ? null : tmp_16_0.legalRep.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(_r2.checked && _r3.checked));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("siteKey", "6LfLNHsaAAAAAIhkWmF3F-DXvLPWdGQU2EpE-KvW");
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RecaptchaComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_8__["TermsOfServiceComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".no-select[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.email-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.75rem;\n  color: #00d68f;\n  font-weight: 700;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.rad-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0.75rem;\n  font-weight: 700;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR0YiLCJmaWxlIjoicmVnaXN0ZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNlbGVjdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmVtYWlsLXRleHQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjMDBkNjhmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4ucmFkLXRleHQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "2Z1u":
    /*!************************************************************************!*\
      !*** ./src/app/auth/register/register-user/register-user.component.ts ***!
      \************************************************************************/

    /*! exports provided: RegisterUserComponent */

    /***/
    function Z1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
        return RegisterUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterUserComponent_ng_container_20_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_20_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Ime mora da bude du\u017Ee od ", ctx_r16.getConfigValue("forms.validation.firstName.minLength"), " ");
        }
      }

      function RegisterUserComponent_ng_container_20_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ime mora biti validno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_20_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_20_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RegisterUserComponent_ng_container_20_p_3_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.minlength) || (_r1.errors == null ? null : _r1.errors.maxlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        }
      }

      function RegisterUserComponent_ng_container_30_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Prezime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_30_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Prezime mora da bude du\u017Ee od ", ctx_r19.getConfigValue("forms.validation.lastName.minLength"), " ");
        }
      }

      function RegisterUserComponent_ng_container_30_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Prezime mora biti validno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_30_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_30_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RegisterUserComponent_ng_container_30_p_3_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
        }
      }

      function RegisterUserComponent_ng_container_41_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Korisni\u010Dko ime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_41_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Korisni\u010Dko ime mora biti du\u017Ee od ", ctx_r22.getConfigValue("forms.validation.username.minLength"), "! ");
        }
      }

      function RegisterUserComponent_ng_container_41_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Korisni\u010Dko ime mora biti validno! Ne sme imati razmaka ili karaktere '@!?'. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_41_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_41_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RegisterUserComponent_ng_container_41_p_3_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
        }
      }

      function RegisterUserComponent_ng_container_51_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Telefon je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_51_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Telefon mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_51_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_51_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.minlength) || (_r7.errors == null ? null : _r7.errors.maxlength));
        }
      }

      function RegisterUserComponent_ng_container_63_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_63_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_63_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_63_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.pattern);
        }
      }

      function RegisterUserComponent_ng_container_78_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0160ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_78_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u0160ifra ne sme biti kra\u0107a od ", ctx_r29.getConfigValue("forms.validation.password.minLength"), "! ");
        }
      }

      function RegisterUserComponent_ng_container_78_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0160ifra mora biti validna! Ne sme imati razmake! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_78_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_78_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RegisterUserComponent_ng_container_78_p_3_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.minlength) || (_r11.errors == null ? null : _r11.errors.maxlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.pattern);
        }
      }

      function RegisterUserComponent_ng_container_88_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ponovna \u0161ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_88_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0160ifra se ne poklapa sa ve\u0107 upisanom \u0161ifrom! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_ng_container_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterUserComponent_ng_container_88_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterUserComponent_ng_container_88_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](86);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.value !== _r13.value);
        }
      }

      var RegisterUserComponent = /*#__PURE__*/function () {
        function RegisterUserComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var registerService = arguments.length > 1 ? arguments[1] : undefined;
          var router = arguments.length > 2 ? arguments[2] : undefined;
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, RegisterUserComponent);

          this.options = options;
          this.registerService = registerService;
          this.router = router;
          this.toastrService = toastrService;
          this.checkIssues = false;
          this.showPassword = 'eye';
          this.retypePassword = '';
          this.user = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            role: '',
            username: ''
          };
        }

        _createClass(RegisterUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.registerService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (k) {
              _this4.user = k;
            });
            this.registerService.sendUser(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.user));
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "validateUser",
          value: function validateUser(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var text, userExists;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!form.invalid) {
                        _context.next = 4;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška!', 'Ispravite greške da bi ste nastavili.', 'warning');
                      return _context.abrupt("return", false);

                    case 4:
                      text = '';
                      _context.next = 7;
                      return Promise.all(this.registerService.checkUser(this.user)).then(function (b) {
                        text = !b[0] ? 'to korisničko ime' : text;
                        text = !b[1] ? 'taj telefon' : text;
                        text = !b[2] ? 'taj email' : text;
                        return b[0] && b[1] && b[2];
                      });

                    case 7:
                      userExists = _context.sent;

                      if (userExists) {
                        _context.next = 12;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast("Ve\u0107 postoji ".concat(text, "!"), "Promenite ".concat(text, " da biste nastavili."), 'danger');
                      return _context.abrupt("return");

                    case 12:
                      if (!(form.valid && this.retypePassword === this.user.password)) {
                        _context.next = 17;
                        break;
                      }

                      _context.next = 15;
                      return this.router.navigate(['auth/register-company']);

                    case 15:
                      _context.next = 19;
                      break;

                    case 17:
                      this.checkIssues = true;
                      this.toastrService.showToast('Greška!', 'Ispravite greške da bi ste nastavili.', 'warning');

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return RegisterUserComponent;
      }();

      RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) {
        return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: RegisterUserComponent,
        selectors: [["register-user"]],
        decls: 102,
        vars: 58,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "text-center"], ["disableStepNavigation", ""], ["label", "Korisnik"], ["tabindex", "-1"], ["userForm", "ngForm"], [1, "row", "my-1"], [1, "col-6"], ["for", "input-firstName", 1, "label"], ["autofocus", "", "fullWidth", "", "id", "input-firstName", "name", "firstName", "nbInput", "", "onkeypress", "return /[a-zA-Z\u010D\u0107\u017E\u0111\u0161\u0160\u0110\u017D\u0106\u010C]/i.test(event.key)", "placeholder", "Ime", "tabindex", "1", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "ngModelChange"], ["firstName", "ngModel"], [4, "ngIf"], ["for", "input-lastName", 1, "label"], ["fullWidth", "", "id", "input-lastName", "name", "lastName", "nbInput", "", "onkeypress", "return /[a-zA-Z\u0161\u0111\u017E\u0107\u010D\u0160\u0110\u017D\u0106\u010C\\-]/i.test(event.key)", "placeholder", "Prezime", "tabindex", "2", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "ngModelChange"], ["lastName", "ngModel"], ["for", "input-username", 1, "label"], ["fullWidth", "", "id", "input-username", "name", "username", "nbInput", "", "placeholder", "Korisni\u010Dko ime", "tabindex", "3", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "ngModelChange"], ["username", "ngModel"], ["for", "input-telephone", 1, "label"], ["fullWidth", "", "id", "input-telephone", "name", "phone", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Telefon", "tabindex", "4", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["telephone", "ngModel"], ["for", "input-email", 1, "label"], [1, "fa", "fa-info-circle", 3, "nbTooltip"], ["tabindex", "5", "fullWidth", "", "id", "input-email", "name", "email", "nbInput", "", "placeholder", "Email", 3, "ngModel", "pattern", "required", "status", "ngModelChange"], ["email", "ngModel"], ["for", "input-password", 1, "label"], [1, "col-10", "pr-0"], ["fullWidth", "", "id", "input-password", "name", "password", "nbInput", "", "placeholder", "\u0160ifra", "tabindex", "6", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "type", "ngModelChange"], ["password", "ngModel"], [1, "col-2", "pl-0"], ["fullWidth", "", "tabindex", "-1", "nbButton", "", "type", "button", 3, "click"], [3, "icon"], ["for", "input-rePassword", 1, "label"], ["fullWidth", "", "id", "input-rePassword", "name", "rePass", "nbInput", "", "placeholder", "Potvrdi \u0161ifru", "tabindex", "7", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "type", "ngModelChange"], ["retypePasswordModel", "ngModel"], [1, "row", "mt-3"], ["nbButton", "", "fullWidth", "", "status", "success", "tabindex", "8", "type", "submit", 3, "click"], ["label", "Firma"], ["label", "Operacije"], ["label", "Informacije"], ["label", "Potvrda"], ["aria-label", "Uloguj se", 1, "text-center"], ["routerLink", "../login", 1, "text-link"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function RegisterUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-stepper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nb-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.user.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RegisterUserComponent_ng_container_20_Template, 4, 3, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Prezime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.user.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RegisterUserComponent_ng_container_30_Template, 4, 3, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Korisni\u010Dko ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_38_listener($event) {
              return ctx.user.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, RegisterUserComponent_ng_container_41_Template, 4, 3, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Telefon:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.user.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, RegisterUserComponent_ng_container_51_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, RegisterUserComponent_ng_container_63_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "\u0160ifra: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "input", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_72_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_75_listener() {
              return ctx.showPassword = ctx.showPassword === "eye" ? "eye-off" : "eye";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "nb-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, RegisterUserComponent_ng_container_78_Template, 4, 3, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Ponovi \u0161ifru:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "input", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_85_listener($event) {
              return ctx.retypePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, RegisterUserComponent_ng_container_88_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_91_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);

              return ctx.validateUser(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, " Dalje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "nb-step", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "nb-step", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "nb-step", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "nb-step", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "section", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Ve\u0107 imate nalog? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Uloguj se");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](61);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](73);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.firstName)("maxlength", ctx.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.firstName.minLength"))("pattern", ctx.getConfigValue("forms.validation.firstName.pattern"))("required", ctx.getConfigValue("forms.validation.firstName.required"))("status", _r1.dirty ? _r1.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r1.invalid && _r1.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.lastName)("maxlength", ctx.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.lastName.minLength"))("pattern", ctx.getConfigValue("forms.validation.lastName.pattern"))("required", ctx.getConfigValue("forms.validation.lastName.required"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.username)("maxlength", ctx.getConfigValue("forms.validation.username.maxLength"))("minlength", ctx.getConfigValue("forms.validation.username.minLength"))("pattern", ctx.getConfigValue("forms.validation.username.pattern"))("required", ctx.getConfigValue("forms.validation.username.required"))("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.phone)("maxlength", ctx.getConfigValue("forms.validation.telephone.maxLength"))("minlength", ctx.getConfigValue("forms.validation.telephone.minLength"))("required", ctx.getConfigValue("forms.validation.telephone.required"))("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTooltip", "Email ne delimo, on slu\u017Ei za lak\u0161u komunikaciju sa nama.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.email)("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r9.dirty ? _r9.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTooltip", "Unesite minimum 6 karaktera za kreiranje lozinke. Preporuka je da Va\u0161a lozinka ima vi\u0161e od 8 karaktera da bi bila \u0161to bezbednija, koristite znakove kao \u0161to su !,@,$...");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.user.password)("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("pattern", ctx.getConfigValue("forms.validation.password.pattern"))("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r11.dirty ? _r11.invalid ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.retypePassword)("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("pattern", ctx.getConfigValue("forms.validation.password.pattern"))("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r13.dirty ? _r13.invalid || _r11.value !== _r13.value ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.invalid && _r11.touched || _r13.touched || ctx.checkIssues);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}\n\n.fa[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InJlZ2lzdGVyLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNmZjNkNzE7XHJcbn1cclxuLmZhIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "5mhh":
    /*!****************************************!*\
      !*** ./src/app/@core/data/location.ts ***!
      \****************************************/

    /*! exports provided: LocationData */

    /***/
    function mhh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationData", function () {
        return LocationData;
      });

      var LocationData = function LocationData() {
        _classCallCheck(this, LocationData);
      };
      /***/

    },

    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: routes, NgxAuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxAuthRoutingModule", function () {
        return NgxAuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-confirmation/email-confirmation.component */
      "f7Do");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "NEkq");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "bsvf");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logout/logout.component */
      "iKpk");
      /* harmony import */


      var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redirect/redirect.component */
      "afmh");
      /* harmony import */


      var _register_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register-guard.service */
      "puVZ");
      /* harmony import */


      var _register_register_permit_register_permit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register-permit/register-permit.component */
      "Yt1k");
      /* harmony import */


      var _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./register/register-company/register-company.component */
      "WMHj");
      /* harmony import */


      var _register_register_informations_register_informations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register/register-informations/register-informations.component */
      "jeFR");
      /* harmony import */


      var _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./register/register-user/register-user.component */
      "2Z1u");
      /* harmony import */


      var _register_register_operations_register_operations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./register/register-operations/register-operations.component */
      "u8GX");
      /* harmony import */


      var _register_register_confirmation_register_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./register/register-confirmation/register-confirmation.component */
      "1yjk");
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      "xT/v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthComponent"],
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        }, {
          path: 'register-user',
          component: _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_11__["RegisterUserComponent"],
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'register-company',
          component: _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_9__["RegisterCompanyComponent"],
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'register-operations',
          component: _register_register_operations_register_operations_component__WEBPACK_IMPORTED_MODULE_12__["RegisterOperationsComponent"],
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'register-informations/:tab',
          component: _register_register_informations_register_informations_component__WEBPACK_IMPORTED_MODULE_10__["RegisterInformationsComponent"],
          pathMatch: 'full',
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'register-informations',
          component: _register_register_informations_register_informations_component__WEBPACK_IMPORTED_MODULE_10__["RegisterInformationsComponent"],
          pathMatch: 'full',
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'register-permit',
          component: _register_register_permit_register_permit_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPermitComponent"]
        }, {
          path: 'register-confirmation',
          component: _register_register_confirmation_register_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["RegisterConfirmationComponent"],
          canActivate: [_register_guard_service__WEBPACK_IMPORTED_MODULE_7__["RegisterGuard"]]
        }, {
          path: 'logout',
          component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
        }, {
          path: 'email-confirm',
          component: _email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["EmailConfirmationComponent"]
        }, {
          path: 'forgot-password',
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
        }, {
          path: 'reset-password',
          component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"]
        }, {
          path: 'redirect',
          component: _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__["RedirectComponent"]
        }]
      }, {
        path: '',
        redirectTo: 'auth/login'
      }, {
        path: '**',
        redirectTo: 'auth/login'
      }];

      var NgxAuthRoutingModule = function NgxAuthRoutingModule() {
        _classCallCheck(this, NgxAuthRoutingModule);
      };

      NgxAuthRoutingModule.ɵfac = function NgxAuthRoutingModule_Factory(t) {
        return new (t || NgxAuthRoutingModule)();
      };

      NgxAuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: NgxAuthRoutingModule
      });
      NgxAuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](NgxAuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "76Ee":
    /*!****************************************************************************************************!*\
      !*** ./src/app/auth/register/register-informations/trash/trash-storage/trash-storage.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TrashStorageComponent */

    /***/
    function Ee(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrashStorageComponent", function () {
        return TrashStorageComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../@core/service/location.service */
      "1XyK");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../trash-permit/trash-permit.component */
      "Kv9/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["permitRef"];

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function TrashStorageComponent_input_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_input_22_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.tmpNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.tmpNo)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));
        }
      }

      function TrashStorageComponent_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TrashStorageComponent_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.updateStorages(ctx_r7.tmpNo, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_15_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Naziv skladi\u0161ta je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_15_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Naziv skladi\u0161ta mora biti du\u017Ei od ", ctx_r33.getConfigValue("forms.validation.storageName.minLength"), " slova! ");
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_15_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TrashStorageComponent_div_24_div_1_ng_container_15_p_2_Template, 2, 1, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.minlength) || (_r13.errors == null ? null : _r13.errors.maxlength));
        }
      }

      function TrashStorageComponent_div_24_div_1_div_16_ng_container_16_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vrsta skladi\u0161ta je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_div_16_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_div_16_ng_container_16_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r34.errors == null ? null : _r34.errors.required);
        }
      }

      function TrashStorageComponent_div_24_div_1_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Vrsta Deponije:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nb-select", 58, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_div_16_Template_nb_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);

            var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            return storage_r10.dumpType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Neopasan otpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Opasan otpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Inertan otpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TrashStorageComponent_div_24_div_1_div_16_ng_container_16_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

          var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.dumpType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c1))("required", ctx_r15.getConfigValue("forms.validation.dumpType.required"))("status", _r34.dirty ? _r34.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r34.invalid && _r34.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Neopasan");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Opasan");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "Inertan");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r34.invalid && _r34.touched || ctx_r15.checkIssues);
        }
      }

      function TrashStorageComponent_div_24_div_1_nb_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", o_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](o_r41);
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_35_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Op\u0161tina je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_35_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r16.errors == null ? null : _r16.errors.required);
        }
      }

      function TrashStorageComponent_div_24_div_1_nb_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", m_r43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](m_r43);
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_49_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Mesto je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_49_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r20.errors == null ? null : _r20.errors.required);
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_60_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Po\u0161tanski broj je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_60_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Po\u0161tanski broj mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_60_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TrashStorageComponent_div_24_div_1_ng_container_60_p_2_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r24.errors == null ? null : _r24.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (_r24.errors == null ? null : _r24.errors.minlength) || (_r24.errors == null ? null : _r24.errors.maxlength));
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_70_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ulica je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_70_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r26.errors == null ? null : _r26.errors.required);
        }
      }

      function TrashStorageComponent_div_24_div_1_span_78_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\xB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_78_button_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "'");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_78_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_span_78_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);

            var i_r48 = ctx.$implicit;

            var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            return storage_r10.geolocationNorth[i_r48] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TrashStorageComponent_div_24_div_1_span_78_button_2_Template, 2, 0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TrashStorageComponent_div_24_div_1_span_78_button_3_Template, 2, 0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TrashStorageComponent_div_24_div_1_span_78_button_4_Template, 2, 0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r48 = ctx.$implicit;

          var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.geolocationNorth[i_r48])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r48 === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r48 === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r48 === 6);
        }
      }

      function TrashStorageComponent_div_24_div_1_span_87_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\xB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_87_button_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "'");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_87_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_span_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_span_87_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);

            var i_r56 = ctx.$implicit;

            var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            return storage_r10.geolocationEast[i_r56] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TrashStorageComponent_div_24_div_1_span_87_button_2_Template, 2, 0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TrashStorageComponent_div_24_div_1_span_87_button_3_Template, 2, 0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TrashStorageComponent_div_24_div_1_span_87_button_4_Template, 2, 0, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r56 = ctx.$implicit;

          var storage_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.geolocationEast[i_r56])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r56 === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r56 === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r56 === 6);
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_107_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Veli\u010Dina skladi\u0161ta je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_107_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Veli\u010Dina skladi\u0161ta ne mo\u017Ee biti 0! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TrashStorageComponent_div_24_div_1_ng_container_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_ng_container_107_p_1_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TrashStorageComponent_div_24_div_1_ng_container_107_p_2_Template, 2, 0, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](99);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (_r30.errors == null ? null : _r30.errors.required) || ctx_r31.isNaN(_r30.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r30 < 1);
        }
      }

      function TrashStorageComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Naziv Skladi\u0161ta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_12_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, TrashStorageComponent_div_24_div_1_ng_container_15_Template, 3, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TrashStorageComponent_div_24_div_1_div_16_Template, 17, 10, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Adresa:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Op\u0161tina:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r67.chooseTownship(_r16.value);
          })("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_28_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.address.location.townshipName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "nb-autocomplete", null, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, TrashStorageComponent_div_24_div_1_nb_option_32_Template, 2, 2, "nb-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, TrashStorageComponent_div_24_div_1_ng_container_35_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Mesto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r70.findPlaces($event);
          })("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_42_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.address.location.placeName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "nb-autocomplete", null, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, TrashStorageComponent_div_24_div_1_nb_option_46_Template, 2, 2, "nb-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, TrashStorageComponent_div_24_div_1_ng_container_49_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Po\u0161tanski broj:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_57_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.address.location.zipCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, TrashStorageComponent_div_24_div_1_ng_container_60_Template, 3, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Ulica i broj:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_67_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.address.street = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, TrashStorageComponent_div_24_div_1_ng_container_70_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Geolokacija Sever (N):");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, TrashStorageComponent_div_24_div_1_span_78_Template, 5, 6, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Geolokacija Istok (E0):");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, TrashStorageComponent_div_24_div_1_span_87_Template, 5, 6, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Veli\u010Dina skladi\u0161ta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_input_ngModelChange_98_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.maxAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "nb-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TrashStorageComponent_div_24_div_1_Template_nb_select_ngModelChange_101_listener($event) {
            var storage_r10 = ctx.$implicit;
            return storage_r10.storageUnit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, TrashStorageComponent_div_24_div_1_ng_container_107_Template, 3, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var storage_r10 = ctx.$implicit;
          var i_r11 = ctx.index;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](45);

          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](58);

          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](68);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](99);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.name)("maxlength", ctx_r9.getConfigValue("forms.validation.storageName.maxLength"))("minlength", ctx_r9.getConfigValue("forms.validation.storageName.minLength"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](57, _c1))("placeholder", "Skladi\u0161te #" + (i_r11 + 1))("required", ctx_r9.getConfigValue("forms.validation.storageName.required"))("status", _r13.dirty ? _r13.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.storageType === "dump");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.address.location.townshipName)("nbAutocomplete", _r17)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](58, _c1))("required", ctx_r9.getConfigValue("forms.validation.address.required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r16.invalid && _r16.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 53, ctx_r9.townships$));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r16.invalid && _r16.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.address.location.placeName)("nbAutocomplete", _r21)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](59, _c1))("required", ctx_r9.getConfigValue("forms.validation.address.required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r20.invalid && _r20.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 55, ctx_r9.places$));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r20.invalid && _r20.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.address.location.zipCode)("maxlength", ctx_r9.getConfigValue("forms.validation.zipCode.maxLength"))("minlength", ctx_r9.getConfigValue("forms.validation.zipCode.minLength"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](60, _c1))("required", ctx_r9.getConfigValue("forms.validation.zipCode.required"))("status", _r24.dirty ? _r24.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r24.invalid && _r24.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r24.invalid && _r24.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.address.street)("maxlength", ctx_r9.getConfigValue("forms.validation.street.maxLength"))("minlength", ctx_r9.getConfigValue("forms.validation.street.minLength"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](61, _c1))("required", ctx_r9.getConfigValue("forms.validation.street.required"))("status", _r26.dirty ? _r26.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", _r26.invalid && _r26.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r26.invalid && _r26.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.numbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.numbers);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nbTooltip", "Unesite veli\u010Dinu privremenog skladi\u0161ta koju posedujete u okviru pravnog subjekta u jedinicama mere. Na\u010Din odre\u0111ivanja veli\u010Dine privremenog skladi\u0161ta merenje/prora\u010Dun/procena.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", storage_r10.maxAmount)("min", ctx_r9.getConfigValue("forms.validation.storageSize.min"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](62, _c1))("required", ctx_r9.getConfigValue("forms.validation.storageSize.required"))("status", _r30.dirty ? _r30.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](63, _c1))("ngModel", storage_r10.storageUnit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r30.invalid && _r30.touched || ctx_r9.checkIssues);
        }
      }

      function TrashStorageComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrashStorageComponent_div_24_div_1_Template, 108, 64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.storages$));
        }
      }

      function TrashStorageComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "register-trash-permit", 67, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storageNo", ctx_r4.storageNo)("storages", ctx_r4.storages)("permitType", ctx_r4.storageType);
        }
      }

      var TrashStorageComponent = /*#__PURE__*/function () {
        function TrashStorageComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var registerService = arguments.length > 1 ? arguments[1] : undefined;
          var locationService = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, TrashStorageComponent);

          this.options = options;
          this.registerService = registerService;
          this.locationService = locationService;
          this.storageNo = 0;
          this.tmpNo = 0;
          this.townships = [];
          this.places = [];
          this.showStorageInput = false;
          this.checkIssues = false;
          this.valid = false;
          this.numbers = _toConsumableArray(Array(7).keys());
        }

        _createClass(TrashStorageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (f) {
              if (f !== undefined) {
                _this5.company = f;

                if (f.storages !== undefined) {
                  var tmp = [];

                  if (_this5.storageType === 'treatment') {
                    tmp = _this5.company.storages;
                    _this5.storages = tmp.filter(function (x) {
                      return x.treatment !== undefined;
                    });
                  } else if (_this5.storageType === 'dump') {
                    tmp = _this5.company.storages;
                    _this5.storages = tmp.filter(function (x) {
                      return x.dumpType !== undefined;
                    });
                  } else if (_this5.storageType === 'cache') {
                    tmp = _this5.company.storages;
                    _this5.storages = tmp.filter(function (x) {
                      return x.cache !== undefined;
                    });
                  } else {
                    tmp = _this5.company.storages;
                    _this5.storages = tmp.filter(function (x) {
                      return x.cache === undefined && x.dumpType === undefined && x.treatment === undefined;
                    });
                  }

                  _this5.storageNo = _this5.storages.length;
                  _this5.storages$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this5.storages);
                }
              }
            });
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.company));
            this.locationService.getDistinctTownships().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (o) {
              _this5.townships = o;
              _this5.townships$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(o);
            });
            this.validateStorage();
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "checkValid",
          value: function checkValid() {
            this.validateStorage();
            if (this.permitRef !== undefined && !this.permitRef.checkValid()) return false;
            if (this.valid) return true;else {
              this.checkIssues = true;
              return false;
            }
          }
        }, {
          key: "validateStorage",
          value: function validateStorage() {
            if (this.storages === undefined) return;
            this.valid = this.storages.length > 0;

            var _iterator = _createForOfIteratorHelper(this.storages),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var s = _step.value;

                if (s.name === '' || s.name.length < 3) {
                  this.valid = false;
                  break;
                }

                if (s.maxAmount < 1 || isNaN(s.maxAmount)) {
                  this.valid = false;
                  break;
                }

                if (s.address.location.placeName === '' || s.address.location.townshipName === '') {
                  this.valid = false;
                  break;
                }

                if (s.address.street === '') {
                  this.valid = false;
                  break;
                }

                if (this.storageType === 'dump' && s['dumpType'] === '') {
                  this.valid = false;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "updateStorages",
          value: function updateStorages(storageNo, pressed) {
            var _this6 = this;

            if (!pressed) return;
            this.storageNo = storageNo;
            var tmp = new Array();

            if (this.storageType === 'treatment') {
              tmp = this.company.storages;
              this.company.storages = tmp.filter(function (x) {
                return x.treatment === undefined;
              });
            } else if (this.storageType === 'dump') {
              tmp = this.company.storages;
              this.company.storages = tmp.filter(function (x) {
                return x.dumpType === undefined;
              });
            } else if (this.storageType === 'cache') {
              tmp = this.company.storages;
              this.company.storages = tmp.filter(function (x) {
                return x.cache === undefined;
              });
            } else {
              tmp = this.company.storages;
              this.company.storages = tmp.filter(function (x) {
                return x.treatment || x.dumpType || x.cache;
              });
            }

            this.storages = new Array(this.storageNo);

            for (var i = 0; i < this.storageNo; i++) {
              this.storages[i] = {
                address: {
                  location: {
                    placeName: '',
                    placeCode: 0,
                    townshipName: '',
                    townshipCode: 0,
                    zipCode: ''
                  },
                  street: ''
                },
                amount: 0,
                storageUnit: 'KG',
                geolocationEast: ['0', '0', '0', '0', '0', '0', '0'],
                geolocationNorth: ['0', '0', '0', '0', '0', '0', '0'],
                maxAmount: NaN,
                name: '',
                packages: [],
                trashes: []
              };

              if (this.storageType === 'cache') {
                this.storages[i]['cache'] = 'cache';
              }

              if (this.storageType === 'treatment') {
                this.storages[i]['treatment'] = 'treatment';
              }

              if (this.storageType === 'dump') {
                this.storages[i]['dumpType'] = '';
              }
            }

            this.storages$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.storages);
            this.storages.forEach(function (x) {
              return _this6.company.storages.push(x);
            });
            this.validateStorage();
            if (this.permitRef !== undefined) this.permitRef.updatePermits(this.storageNo, this.storages$);
          }
        }, {
          key: "getPlaces",
          value: function getPlaces(townshipName) {
            var _this7 = this;

            if (townshipName === undefined) return;
            this.locationService.getPlacesFromTownship(townshipName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (m) {
              _this7.places = m;
              _this7.places$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(m);
            });
          }
        }, {
          key: "chooseTownship",
          value: function chooseTownship(value) {
            var _this8 = this;

            if (value === '') {
              this.townships$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.townships);
              return;
            }

            this.townships$ = this.locationService.filter(value, this.townships);
            if (this.townships$ !== undefined) this.townships$.subscribe(function (x) {
              return _this8.getPlaces(x[0]);
            });
          }
        }, {
          key: "findPlaces",
          value: function findPlaces(value) {
            this.places$ = this.locationService.filter(value, this.places);
          }
        }, {
          key: "isNaN",
          value: function (_isNaN) {
            function isNaN(_x) {
              return _isNaN.apply(this, arguments);
            }

            isNaN.toString = function () {
              return _isNaN.toString();
            };

            return isNaN;
          }(function (value) {
            return isNaN(value) || value === undefined;
          })
        }]);

        return TrashStorageComponent;
      }();

      TrashStorageComponent.ɵfac = function TrashStorageComponent_Factory(t) {
        return new (t || TrashStorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_service_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]));
      };

      TrashStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: TrashStorageComponent,
        selectors: [["register-trash-storage"]],
        viewQuery: function TrashStorageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.permitRef = _t.first);
          }
        },
        inputs: {
          storageType: "storageType",
          trashType: "trashType"
        },
        decls: 26,
        vars: 4,
        consts: [[1, "row", "my-1"], [1, "col-12"], ["updateStorageForm", ""], [1, "row"], ["for", "input-storageNo", 1, "label"], ["nbButtonToggle", "", 3, "pressedChange"], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["nbButton", "", 3, "click", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [4, "ngIf"], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nbButton", "", 3, "click"], [1, "fa", "fa-plus"], [1, "row", "mt-3"], ["class", "col-12", 4, "ngFor", "ngForOf"], ["storageForm", "ngForm"], ["accent", "primary", 1, "p-2"], ["for", "input-storageName", 1, "label"], ["autofocus", "", "fullWidth", "", "id", "input-storageName", "name", "storageName", "nbInput", "", 3, "ngModel", "maxlength", "minlength", "ngModelOptions", "placeholder", "required", "status", "ngModelChange"], ["storageName", "ngModel"], ["class", "row my-1", 4, "ngIf"], ["for", "input-address", 1, "label"], ["id", "input-address", 1, "row", "ml-2"], [1, "col-6"], ["for", "input-storageTownship", 1, "label"], ["autocomplete", "off", "fullWidth", "", "id", "input-storageTownship", "name", "storageTownship", "nbInput", "", "placeholder", "Op\u0161tina", 3, "ngModel", "nbAutocomplete", "ngModelOptions", "required", "ngModelChange"], ["storageTownship", "ngModel"], ["autoCompleteTownship", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-storagePlace", 1, "label"], ["autocomplete", "off", "fullWidth", "", "id", "input-storagePlace", "name", "storagePlace", "nbInput", "", "placeholder", "Mesto", 3, "ngModel", "nbAutocomplete", "ngModelOptions", "required", "ngModelChange"], ["storagePlace", "ngModel"], ["autoCompletePlace", ""], [1, "col-3"], ["for", "input-storageZipCode", 1, "label"], ["fullWidth", "", "id", "input-storageZipCode", "name", "storageZipCode", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Po\u0161tanski broj", 3, "ngModel", "maxlength", "minlength", "ngModelOptions", "required", "status", "ngModelChange"], ["storageZipCode", "ngModel"], [1, "col-9"], ["for", "input-storageStreet", 1, "label"], ["fullWidth", "", "id", "input-storageStreet", "name", "storageStreet", "nbInput", "", "placeholder", "Ulica i broj", 3, "ngModel", "maxlength", "minlength", "ngModelOptions", "required", "status", "ngModelChange"], ["storageStreet", "ngModel"], ["for", "input-geolocationN", 1, "label"], ["id", "input-geolocationN", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-1"], ["for", "input-geolocationE", 1, "label"], ["id", "input-geolocationE", 4, "ngFor", "ngForOf"], [1, "row", "mb-2"], ["for", "input-storageSize", 1, "label"], [1, "fa", "fa-info-circle", 3, "nbTooltip"], [1, "col-10", "pr-0"], ["fullWidth", "", "id", "input-storageSize", "name", "storageSize", "nbInput", "", "placeholder", "0", "onkeypress", "return /[0-9.]/i.test(event.key)", "step", "1", "type", "number", 3, "ngModel", "min", "ngModelOptions", "required", "status", "ngModelChange"], ["storageSize", "ngModel"], [1, "col-2", "pl-0"], [3, "ngModelOptions", "ngModel", "ngModelChange"], [3, "value"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], ["for", "input-dumpType", 1, "label"], ["fullWidth", "", "id", "input-dumpType", "name", "dumpType", "placeholder", "Vrsta deponije", 3, "ngModel", "ngModelOptions", "required", "status", "ngModelChange"], ["dumpType", "ngModel"], ["id", "input-geolocationN"], ["fullWidth", "", "maxlength", "1", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "type", "text", 1, "col-1", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nbButton", "", "class", "col-1 mb-1 geolocation-sign", "disabled", "", 4, "ngIf"], ["nbButton", "", "disabled", "", "style", "max-width: 2vw; font-size: 1.5rem", "class", "col-1 mb-1", 4, "ngIf"], ["nbButton", "", "disabled", "", 1, "col-1", "mb-1", "geolocation-sign"], ["nbButton", "", "disabled", "", 1, "col-1", "mb-1", 2, "max-width", "2vw", "font-size", "1.5rem"], ["id", "input-geolocationE"], [3, "storageNo", "storages", "permitType"], ["permitRef", ""]],
        template: function TrashStorageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Broj skladi\u0161ta:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-button-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_10_listener($event) {
              return ctx.updateStorages(1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_12_listener($event) {
              return ctx.updateStorages(2, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_14_listener($event) {
              return ctx.updateStorages(3, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_16_listener($event) {
              return ctx.updateStorages(4, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_18_listener($event) {
              return ctx.updateStorages(5, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pressedChange", function TrashStorageComponent_Template_button_pressedChange_20_listener() {
              return ctx.showStorageInput = !ctx.showStorageInput;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Vi\u0161e...");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TrashStorageComponent_input_22_Template, 1, 3, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TrashStorageComponent_button_23_Template, 2, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TrashStorageComponent_div_24_Template, 3, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TrashStorageComponent_div_25_Template, 3, 3, "div", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showStorageInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showStorageInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.storageNo > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.storageType !== "production");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonGroupComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_5__["TrashPermitComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.geolocation-sign[_ngcontent-%COMP%] {\r\n  max-width: 2vw;\r\n  font-size: 1.5rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: unset;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXNoLXN0b3JhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2YiLCJmaWxlIjoidHJhc2gtc3RvcmFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5nZW9sb2NhdGlvbi1zaWduIHtcclxuICBtYXgtd2lkdGg6IDJ2dztcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHVuc2V0O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "7wOV":
    /*!*************************************************!*\
      !*** ./src/app/@core/service/toastr.service.ts ***!
      \*************************************************/

    /*! exports provided: ToastrService */

    /***/
    function wOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrService", function () {
        return ToastrService;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToastrService = /*#__PURE__*/function () {
        function ToastrService(toastrService) {
          _classCallCheck(this, ToastrService);

          this.toastrService = toastrService;
        }

        _createClass(ToastrService, [{
          key: "showToast",
          value: function showToast(title, message, status) {
            var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
            this.toastrService.show(message, title, {
              status: status,
              duration: duration
            });
          }
        }]);

        return ToastrService;
      }();

      ToastrService.ɵfac = function ToastrService_Factory(t) {
        return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]));
      };

      ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ToastrService,
        factory: ToastrService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "9zd/":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/terms-of-service/terms-of-service.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TermsOfServiceComponent */

    /***/
    function zd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsOfServiceComponent", function () {
        return TermsOfServiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TermsOfServiceComponent = /*#__PURE__*/function () {
        function TermsOfServiceComponent() {
          _classCallCheck(this, TermsOfServiceComponent);
        }

        _createClass(TermsOfServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsOfServiceComponent;
      }();

      TermsOfServiceComponent.ɵfac = function TermsOfServiceComponent_Factory(t) {
        return new (t || TermsOfServiceComponent)();
      };

      TermsOfServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TermsOfServiceComponent,
        selectors: [["terms-of-service"]],
        decls: 193,
        vars: 0,
        consts: [[1, "text-center"], [2, "max-height", "50vh", "text-align", "justify"], ["href", "https://www.app.dier.rs"], ["href", "mailto:support@dier.rs"], ["href", "www.google.com/analytics/learn/privacy.html"], ["href", "tel:0003812644470577"]],
        template: function TermsOfServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DIER USLOVI KORI\u0160\u0106ENJA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ovi uslovi kori\u0161\u0107enja se odnose na svakoga ko \u017Eeli da koristi aplikaciju (u daljem tekstu \"DIERS Aplikacija\"), \u010Dija je svrha da olak\u0161a zakonsku obavezu vo\u0111enja dnevnih evidencija o otpadu, posebnim tokovima otapda i dostavljanje godi\u0161njih izve\u0161taja Agenciji za za\u0161titu \u017Eivotne sredine Republike Srbije (u daljem tekstu \"Agencija\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Kori\u0161\u0107enjem aplikacije ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " smatra se da ste u potpunosti upoznati i saglasni sa ovde navedenim Uslovima kori\u0161\u0107enja. Ukoliko se sa istima ne sla\u017Eete i ne prihvatate ih, molimo Vas da ne koristite ovu internet stranicu.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Uslovi kori\u0161\u0107enja odnose se na kori\u0161\u0107enje internet stranica ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " od strane korisnika. Svakim daljim kori\u0161\u0107enjem ovih Internet stranica nakon upoznavanja sa Uslovima kori\u0161\u0107enja, smatra se da su korisnici saglasni sa ovde navedenim uslovima i pravilima i da pristaju na kori\u0161\u0107enje Internet stranica u skladu sa tim uslovima.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Predmetne izmene mogu izme\u0111u ostalog uklju\u010Divati i uvo\u0111enje odre\u0111enih naknada ili naplata, stoga savetujemo korisnike da periodi\u010Dno ponovo detaljno pro\u010Ditaju informacije sadr\u017Eane u Uslovima kori\u0161\u0107enja kako bi bili informisani o eventualnim promenama.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " U slu\u010Daju da do\u0111e do promene Uslova kori\u0161\u0107enja, a korisnik nastavi da koristi na\u0161u internet stranicu, smatra se da prihvata Uslove kori\u0161\u0107enja u izmenjenom obliku. Svaka eventualna izmena ili brisanje uslova kori\u0161\u0107enja va\u017Ee\u0107a je za tre\u0107a lica odmah po objavi na internet stranici ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". Svako kori\u0161\u0107enje, osim upoznavanja sa izmenama uslova, predmetnih internet stranica od strane krajnjeg korisnika nakon takve promene podrazumeva\u0107e se kao prihvatanje tih promena.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Korisnik je isklju\u010Divo odgovoran za nabavku i odr\u017Eavanje svoje ra\u010Dunarske opreme, uklju\u010Duju\u0107i celokupan hardver i softver koji poseduje i koji koristi, kao i drugu opremu potrebnu za pristup i kori\u0161\u0107enje internet stranice https://www.app.dier.rs, isto tako samostalno snosi i sve tro\u0161kove vezane za to. DIER isklju\u010Duje svaku odgovornost za bilo kakva o\u0161te\u0107enja opreme i drugih stvari krajnjeg korisnika koja eventualno mogu nastati kao posledica kori\u0161\u0107enja internet stranice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Kori\u0161\u0107enjem internet stranice https://www.app.dier.rs od strane korisnika, smatra se da je korisnik saglasan da sva komunikacija i interakcija koja se odvija putem internet stranice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " mora biti u skladu sa ovim Uslovima kori\u0161\u0107enja. Korisnici ne smeju putem ovih internet stranica objavljivati, prenositi ili \u010Diniti dostupnim na bilo koji na\u010Din nikakve materijale \u010Dijim sadr\u017Eajem se kr\u0161e prava drugih, na primer, sadr\u017Eaj koji je uvredljiv, klevetni\u010Dki, koji naru\u0161ava ili ugro\u017Eava privatnost itd..., kao ni materijale nezakonitog sadr\u017Eaja i forme. DIER zadr\u017Eava diskreciono pravo da samo oceni da li je do\u0161lo do povrede obaveza od strane korisnika. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Korisnik ne sme bez prethodnog pismenog odobrenja DIERS objavljivati, prenositi ili \u010Diniti dostupnim na bilo koji na\u010Din sadr\u017Eaj oglasa, reklame ili ponude bilo \u010Dijih proizvoda i usluga, kao ni versku, politi\u010Dku i nekomercijalnu promociju, a posebno ne sme vrbovati druge korisnike internet stranica ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " da postanu korisnici druge usluge koja je direktna ili indirektna konkurencija DIER.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " DIER zadr\u017Eava diskreciono pravo da samostalno oceni da li je do\u0161lo do povrede obaveza od strane korisnika.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Zabranjena je bilo kakva distribucija, kopiranje, prenos, povezivanje, objavljivanje ili na bilo koji na\u010Din menjanje ovih internet stranica bez pismenog odobrenja DIER. Svako kr\u0161enje spomenute zabrane mo\u017Ee imati za posledicu povredu autorskih prava, prava pe\u010Data, ili nekog drugog prava pa stoga mo\u017Ee da proizvede ne\u017Eeljene efekte kao \u0161to su pokretanja vi\u0161e vrsta sudskih postupaka, a posebno mo\u017Ee dovesti do krivi\u010Dnog gonjenja.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Korisnik ne sme menjati, objavljivati, prenositi, u\u010Destvovati u prenosu ili prodaji ili na bilo koji drugi na\u010Din iskori\u0161\u0107avati bilo koji sadr\u017Eaj sa internet stranice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ", u celosti ili delimi\u010Dno. Tako\u0111e nije dozvoljeno kopiranje, redistribucija, ponovni prenos, izdavanje ili komercijalno iskori\u0161\u0107avanje preuzetog materijala. Korisnik se izri\u010Dito obavezuje da ne\u0107e na internet stranicama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " postavljati, objavljivati, ili na bilo koji drugi na\u010Din \u010Diniti dostupnim bilo kakav materijal koji podle\u017Ee autorskom pravu, pe\u010Datu, ili drugim pravima, bez izri\u010Ditog odobrenja nosioca tih prava, pa je kao takav isklju\u010Divo odgovoran za eventualnu \u0161tetu nastalu kr\u0161enjem ove svoje obaveze. Do saznanja da li je neki od materijala na internet stranici za\u0161ti\u0107en nekim od prava, korisnik mora do\u0107i samostalno, pa stoga DIERS nije u obavezi da takve informacije iznosi ili objavljuje.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Ova izjava o odgovornosti odnosi se na sve eventualno nastale \u0161tete ili mogu\u0107e povrede uzrokovane bilo kakvom gre\u0161kom, brisanjem, prekidom, ra\u010Dunarskim virusom, kvarom, ka\u0161njenjem u radu ili prenosu, prekidom u komunikacijskoj liniji, kra\u0111om, raskidom ugovora, uni\u0161tenjem ili neovla\u0161\u0107enim pristupom, promenama ili zloupotrebom zapisa, neprikladnim pona\u0161anjem, nemarom, ili bilo kakvom drugom radnjom. Korisnik je saglasan da DIERS nije odgovorna za neprikladno ili protivzakonito pona\u0161anje drugih korisnika ili tre\u0107ih strana i da je rizik od eventualnih \u0161teta u potpunosti na korisniku.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " DIERS ni u kom slu\u010Daju nije odgovorna za bilo kakvu \u0161tetu koja mo\u017Ee nastati kao posledica kori\u0161\u0107enja, ili zbog nemogu\u0107nosti kori\u0161\u0107enja internet stranica ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " delimi\u010Dno ili u celosti.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Korisnik izri\u010Dito izjavljuje da ne\u0107e smatrati odgovornom DIER, njene ogranke, odgovorne osobe u dru\u0161tvu, zaposlene i agente za naknadu eventualne \u0161tete i tro\u0161kova, uklju\u010Duju\u0107i i tro\u0161kove pravnog zastupanja, a koji bi mogli da nastanu kori\u0161\u0107enjem internet stranice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " od strane korisnika.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " DIERS mo\u017Ee u svako doba da raskine poslovni odnos sa bilo kojim svojim korisnikom i ukinuti mu lozinke ili korisni\u010Dke naloge. U tom slu\u010Daju ne prestaju da va\u017Ee uslovi koji se odnose na odgovornost i obaveze korisnika. DIERS ne garantuje za ta\u010Dnost, potpunost ili korisnost bilo kog sadr\u017Eaja na internet stranicama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " postavljenog od strane korisnika, tre\u0107ih lica ili neovla\u0161\u0107enih korisnika.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Registracijom / otvaranjem korisni\u010Dkog naloga na internet stranici ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "https://www.app.dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " smatra se da je korisnik ove Uslove kori\u0161\u0107enja u celosti pro\u010Ditao. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "VLASNI\u0160TVO SADR\u017DAJA / INTELEKTUELNA SVOJINA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Internet sajt i svi tekstovi, logotipi, grafika, slike, audio materijal i ostali materijal na ovom internet sajtu (u daljem tekstu: Sadr\u017Eaj), jesu autorsko pravo ili vlasni\u0161tvo autora Nenada Jankovi\u0107a (Autor) i privrednmog dru\u0161tva DIER (u daljem tekstu \"DIER\")., ili su na internet sajt postavljeni uz dozvolu vlasnika ili ovla\u0161\u0107enog nosioca prava. Kori\u0161\u0107enje Sadr\u017Eaja, osim na na\u010Din opisan u ovim uslovima kori\u0161\u0107enja, bez pisane dozvole vlasnika. Autor \u0107e za\u0161titi svoja autorska prava, svoja prava intelektualne svojine i ostala srodna prava, kao i druga prava, u najve\u0107oj meri dozvoljenoj zakonom, uklju\u010Duju\u0107i i krivi\u010Dno gonjenje.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Korisnici aplikacije mogu biti sva lica koja \u017Eele da koriste DIERS Aplikaciju, direktno ili preko svojih zaposlenih lica (u daljem tekstu \"Korisnik\") i koja su zaklju\u010Dila Ugovor o kori\u0161\u0107enju DIERS Aplikacije (u daljem tekstu \"Ugovor\").");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Svako neovla\u0161\u0107eno kori\u0161\u0107enje, umno\u017Eavanje i distribucija DIERS aplikacije ili bilo kojeg njenog dela, krivi\u010Dno je delo i podle\u017Ee krivi\u010Dnoj odgovornosti. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "REGISTRACIJA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Da bi se registrovao, Korisnik je du\u017Ean da ta\u010Dno i istinito unese sve tra\u017Eene podatake o privrednom dru\u0161tvu ili drugom privrednom subjektu kao i da kreira korisni\u010Dki nalog (korisni\u010Dko ime i lozinku).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Za prijavljivanje, odnosno kori\u0161\u0107enje DIERS Aplikacije, Korisnik mora da unese korisni\u010Dko ime i lozinku koje je kreirao prilikom registracije.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Kada se Korisnik registruje za kori\u0161\u0107enje DIERS Aplikacije, on postaje vlasnik svog naloga na portalu DIERS Aplikacije i njegov administrator.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Za pomo\u0107 pri radu u DIERS Aplikaciji kontaktirajte nas putem email-a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "support@dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " DIER zadr\u017Eava pravo izmena i dopuna DIERS Aplikacije. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "ODGOVORNOST KORISNIKA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Korisnik koristi DIERS Aplikaciju isklju\u010Divo na svoju odgovornost. DIERS ne daje bilo kakve garancije i ne preuzima bilo kakvu odgovornost za \u0161tete koje Korisnik pretrpi ili koje bude prouzrokovao tre\u0107im licima prilikom neodgovornog kori\u0161\u0107enja DIERS Aplikacije.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Samo Korisnik zna lozinku koju je definisao u svojstvu administratora i za sve aktivnosti autorizovane i izvr\u0161ene pod nekim od korisni\u010Dkih imena odgovoran je isklju\u010Divo Korisnik.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Korisnik je odgovoran za otvaranje korisni\u010Dkih naloga za ostale zaposlene u svojoj organizaciji i za definisanje uloga na portalu kojima svaki zaposleni pojedina\u010Dno mo\u017Ee da pristupi, kao i za ukidanje pristupa DIERS Aplikaciji.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Korisnik je du\u017Ean da se u svemu pridr\u017Eava pozitivnih zakonskih propisa Republike Srbije, a posebno propisa koji reguli\u0161u upravljanje otpadom i za\u0161titu podataka o li\u010Dnosti.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Korisnik je isklju\u010Divo odgovoran za ta\u010Dnost podataka i informacija koje unosi u DIERS Aplikaciju. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "ODRICANJE OD ODGOVORNOSTI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " DIERS nema uvid u kreiranu lozinku Korisnika od strane administratora, te nema mogu\u0107nost da pristupi podacima Korisnika.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " DIERS nije odgovoran za gre\u0161ke koje nastaju usled neispravnog popunjavanja i neta\u010Dnih podataka koje ovla\u0161\u0107ena lica Korisnika unesu u DIERS Aplikaciju, iz koje se generi\u0161u dokumenta o kretanju otpada, dokumenta o kretanju opasnog otpada, dokumenta o prekograni\u010Dnom otpadu i dokumenta koja prate prekograni\u010Dno kretanje otpada, kao i dnevne evidencije o otpadu, dnevne evidencije o posebnim tokovima otapda ili podaci koji se podnose Agenciji za godi\u0161nje izve\u0161taje o otpadu i posebnim tokovima otpada.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " DIERS se ne\u0107e smatrati odgovornim za privremeni prekid u pru\u017Eanju usluge ili gubitak sa\u010Duvanih podataka usled radova na odr\u017Eavanju ili iznenadnih i nepredvi\u0111enih tehni\u010Dkih kvarova ili drugih tehni\u010Dkih neprilika, kao ni za prekid usluge, ukoliko su ove okolnosti prouzrokovane razlozima koji su izvan doma\u0161aja DIERS. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "DOSTUPNOST DIERS APLIKACIJE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Korisnik razume i saglasan je sa \u010Dinjenicom da je internet internacionalna ra\u010Dunarska mre\u017Ea koju ne kontroli\u0161e neposredno DIERS, ve\u0107 je na nju samo vezan, te zbog toga ne mo\u017Ee da garantuje dostupnost servisa koje direktno NE kontroli\u0161e.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Korisnik razume i saglasan je sa \u010Dinjenicom da su DIERS serveri povezani na internet putem kompleksne mre\u017Ene strukure i da se podaci putem interneta prenose kroz razli\u010Dite aktivne i pasivne mre\u017Ene komponente (ruteri, mre\u017Eni prekida\u010Di, i sli\u010Dno), koji imaju svoje maksimalne kapacitete prenosa, te DIERS ne mo\u017Ee biti odgovoran za nemogu\u0107nosti prustupa podacima u DIERS Aplikaciji iz ovih razloga. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "INFORMACIJE KORISNIKA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Sve informacije koje se zahtevaju od Korisnika neophodne su za ispunjavanje obaveza po merodavnim propisima o upravljanju otpadom i koriste se isklju\u010Divo i samo za popunjavanje dnevnih evidencija o otpadu, dokumenta o kretanju otpada, dokumenta o kretanju opasnog otpada, popunjavanje godi\u0161njih evidencija o otpadu, popunjavanju dnevnih evidencija Posebnih tokova otpada kao i popunjavanje godi\u0161njih evidencija Posebnh tokova otpada u zavisnosti od operacije odnosno (licence) Korisnika.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Informacije koje Korisnik unosi \u010Duvaju se na DIERS serveru, i mogu im pristupiti tre\u0107a lica isklju\u010Divo u skladu sa odgovaraju\u0107im propisima, na osnovu zahteva nadle\u017Enog organa. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "UPOTREBA KOLA\u010CI\u0106A (ENGL. \u201ECOOKIES\u201C)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Kao i ve\u0107ina sajtova na internetu, DIERS sajtovi koriste tzv. \u201Ckola\u010Di\u0107e\u201D (u daljem tekstu \"Cookie\"). Cookie-ji su mali tekstualni fajlovi koje internet pregleda\u010D (u daljem tekstu \"Browser\") \u010Duva na ra\u010Dunaru Korisnika i koji poma\u017Eu da se identifikujete na veb sajtovima prilikom kasnijih poseta. Cookie-ji su jedinstveno dodeljeni Korisniku i mo\u017Ee ih \u010Ditati samo web server u domenu koji je izdao taj Cookie. Kori\u0161\u0107enje Cookie-ja je standardna praksa na internetu i ve\u0107ina Browser-a je pode\u0161ena tako da automatski prihvata sve Cookie-je. Me\u0111utim, Korisnik uvek mo\u017Ee odlu\u010Diti da \u017Eeli da prestane da ih koristi, odnosno, mo\u017Ee ih jednostavno ru\u010Dno obrisati ili svoj Browser posebno podesiti za rad sa Cookie-jima. Za ove procedure Korisnik mo\u017Ee da pogleda dokumentaciju ili Help/Pomo\u0107 sekciju svog Browser-a. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Na DIERS sajtovima koristimo Cookie-je isklju\u010Divo kako bismo Korisnicima omogu\u0107ili bolji kvalitet interakcije sa veb sajtom i DIERS Aplikacijom.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Za potrebe statisti\u010Dke analize pose\u0107enosti i optimizaciju DIERS Aplikacije koristi se servis Google Analytics. Datalji o ovim servisima kao i o mogu\u0107nostima pode\u0161avanja od strane Korisnika se mogu pogledati na slede\u0107im linkovima: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "www.google.com/analytics/learn/privacy.html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "DRUGI INTERNET SAJTOVI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " DIERS internet sajt mo\u017Ee sadr\u017Eati linkove za druge internet sajtove koji nisu pod DIERS kontrolom i koji ne podle\u017Eu Ugovoru i ovim Uslovima kori\u0161\u0107enja. Ukoliko Korisnik pristupi drugim internet sajtovima koriste\u0107i date linkove, operateri ovih internet sajtova mogu tra\u017Eiti informacije koje \u0107e koristiti u skladu sa svojim politikama za\u0161tite privatnosti, koje se mogu razlikovati od one koja postoji kod DIERS.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Takvi linkovi su obezbe\u0111eni isklju\u010Divo da bi Vama pru\u017Eili \u0161to vi\u0161e informacija. DIER ne kontroli\u0161e i nije odgovoran za rad, sadr\u017Eaj, politiku privatnosti ili bezbednost ovih sajtova. Autor ne kontroli\u0161e sadr\u017Eaj ili proizvode ili usluge dostupne na ovim internet sajtovima. Ako uspostavite vezu sa takvim internet sajtovima preko linka na na\u0161em internet sajtu, to \u010Dinite na sopstveni rizik i bez saglasnosti DIER. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "ZA\u0160TITA PODATAKA O LI\u010CNOSTI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " DIERS ne predstavlja rukovaoca, obra\u0111iva\u010Da niti korisnika podataka o li\u010Dnosti u skladu sa merodavnim propisima.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Korisnik preuzima obavezu da u slu\u010Daju obrade podataka o li\u010Dnosti u vezi sa izvr\u0161enjem ovog Ugovora preduzme sve radnje kako bi svoje poslovanje uskladio sa zakonom i drugom pozitivno-pravnim propisima iz oblasti za\u0161tite podataka o li\u010Dnosti. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "BEZBEDNOST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Odr\u017Eavanje integriteta i bezbednosti na\u0161ih veb lokacija, proizvoda, funkcija i usluga i spre\u010Davanje i otkrivanje bezbednosnih pretnji, prevara ili drugih kriminalnih ili zlonamernih aktivnosti koje mogu da ugroze va\u0161e informacije. Kada ste u interakciji sa nama, pre odobravanja pristupa va\u0161im podacima, preduze\u0107emo osnovane korake da potvrdimo va\u0161 identitet kao \u0161to je zahtevanje lozinke i ID-a korisnika. Mo\u017Eemo preduzeti i dodatne bezbednosne mere, kao \u0161to je CCTV, da bismo obezbedili na\u0161e fizi\u010Dke lokacije. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "USAGLA\u0160ENOST SA ZAKONOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Usagla\u0161enost sa va\u017Ee\u0107im zakonima, propisima, sudskim nalozima, dr\u017Eavnim zahtevima i zahtevima organa reda u cilju adekvatnog rada na\u0161ih usluga i proizvoda i za\u0161tite na\u0161e kompanije, na\u0161ih korisnika i klijenata i re\u0161avanja svih korisni\u010Dkih sporova. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "IZMENE IZJAVE O PRIVATNOSTI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Ako izmenimo izjavu o privatnosti, objavi\u0107emo izmenjenu izjavu ovde, sa datumom a\u017Eurirane revizije. Ukoliko izvr\u0161imo znatne promene u izjavi o privatnosti koje dovode do materijalnih promena na\u0161ih praksi privatnosti, mo\u017Eemo vas obavestiti i drugim sredstvima, na primer slanjem e-poruke ili objavljivanjem obave\u0161tenje na korporativnoj veb lokaciji i/ili stranicama dru\u0161tvenih medija pre nego \u0161to promene stupe na snagu. Datum objavljivanja: 2021. april. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "KOMUNIKACIJA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Komunikacija izme\u0111u DIERS i Korisnika odvija se putem imejla ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "support@dier.rs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " ili na telefon: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "+381 64 447 05 77");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h4[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoidGVybXMtb2Ytc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Kv9/":
    /*!**************************************************************************************************!*\
      !*** ./src/app/auth/register/register-informations/trash/trash-permit/trash-permit.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: TrashPermitComponent */

    /***/
    function Kv9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrashPermitComponent", function () {
        return TrashPermitComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function TrashPermitComponent_div_0_input_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_0_input_22_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r5.tmpNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.tmpNo)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function TrashPermitComponent_div_0_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrashPermitComponent_div_0_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r7.updatePermits(ctx_r7.tmpNo, undefined, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Broj dozvola:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nb-button-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.updatePermits(1, undefined, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.updatePermits(2, undefined, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.updatePermits(3, undefined, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r13.updatePermits(4, undefined, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r14.updatePermits(5, undefined, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashPermitComponent_div_0_Template_button_pressedChange_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.showPermitsInput = !ctx_r15.showPermitsInput;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Vi\u0161e...");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, TrashPermitComponent_div_0_input_22_Template, 1, 3, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, TrashPermitComponent_div_0_button_23_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showPermitsInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showPermitsInput);
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_15_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Naziv dozvole je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_15_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Naziv dozvole mora biti du\u017Ei od ", ctx_r33.getConfigValue("forms.validation.permitName.minLength"), " slova! ");
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_ng_container_15_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrashPermitComponent_div_1_div_1_ng_container_15_p_2_Template, 2, 1, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r20.errors == null ? null : _r20.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r20.errors == null ? null : _r20.errors.maxLength) || (_r20.errors == null ? null : _r20.errors.minLength));
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_26_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0160ifra dozvole je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_26_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Naziv dozvole mora biti du\u017Ei od ", ctx_r35.getConfigValue("forms.validation.permitCode.minLength"), " slova! ");
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_ng_container_26_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrashPermitComponent_div_1_div_1_ng_container_26_p_2_Template, 2, 1, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r22.errors == null ? null : _r22.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r22.errors == null ? null : _r22.errors.maxLength) || (_r22.errors == null ? null : _r22.errors.minLength));
        }
      }

      function TrashPermitComponent_div_1_div_1_div_27_nb_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var s_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", s_r39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](s_r39.name);
        }
      }

      function TrashPermitComponent_div_1_div_1_div_27_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Postrojenje za koje je vezana dozvola je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_div_27_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_div_27_ng_container_11_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r36.errors == null ? null : _r36.errors.required);
        }
      }

      function TrashPermitComponent_div_1_div_1_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Odaberi postrojenje:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-select", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_1_div_1_div_27_Template_nb_select_ngModelChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);

            var permit_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r41.setAddress(permit_r17, permit_r17.storage);
          })("ngModelChange", function TrashPermitComponent_div_1_div_1_div_27_Template_nb_select_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);

            var permit_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            return permit_r17.storage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, TrashPermitComponent_div_1_div_1_div_27_nb_option_8_Template, 2, 2, "nb-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TrashPermitComponent_div_1_div_1_div_27_ng_container_11_Template, 2, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);

          var permit_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", permit_r17.storage)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0))("status", _r36.dirty ? _r36.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 5, ctx_r24.storages$));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r36.invalid && _r36.touched || ctx_r24.checkIssues);
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_40_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Datum nastanka dozvole je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_40_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Datum nastanka dozvole ne mo\u017Ee biti posle datum izdavanja! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_ng_container_40_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrashPermitComponent_div_1_div_1_ng_container_40_p_2_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var permit_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r25.errors == null ? null : _r25.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r27.dateValid(permit_r17));
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_52_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Datum isteka dozvole je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_ng_container_52_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.required);
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_60_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Morate dodati bar jedan otpad na listu otpada dozvole! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashPermitComponent_div_1_div_1_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_ng_container_60_p_1_Template, 2, 0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var permit_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", permit_r17.trashList.length < 1);
        }
      }

      function TrashPermitComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Naziv Dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_1_div_1_Template_input_ngModelChange_12_listener($event) {
            var permit_r17 = ctx.$implicit;
            return permit_r17.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TrashPermitComponent_div_1_div_1_ng_container_15_Template, 3, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u0160ifra Dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_1_div_1_Template_input_ngModelChange_23_listener($event) {
            var permit_r17 = ctx.$implicit;
            return permit_r17.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, TrashPermitComponent_div_1_div_1_ng_container_26_Template, 3, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, TrashPermitComponent_div_1_div_1_div_27_Template, 12, 8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Datum izdavanja dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_1_div_1_Template_input_ngModelChange_35_listener($event) {
            var permit_r17 = ctx.$implicit;
            return permit_r17.dateCreation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "nb-datepicker", null, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, TrashPermitComponent_div_1_div_1_ng_container_40_Template, 3, 2, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Datum isteka dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashPermitComponent_div_1_div_1_Template_input_ngModelChange_47_listener($event) {
            var permit_r17 = ctx.$implicit;
            return permit_r17.dateExpiration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "nb-datepicker", null, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, TrashPermitComponent_div_1_div_1_ng_container_52_Template, 2, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrashPermitComponent_div_1_div_1_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);

            var permit_r17 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r57.choosePermit(permit_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Odaberi otpade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, TrashPermitComponent_div_1_div_1_ng_container_60_Template, 2, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permit_r17 = ctx.$implicit;
          var i_r18 = ctx.index;

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);

          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](38);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](48);

          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Dozvola #", i_r18 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", permit_r17.name)("maxlength", ctx_r16.getConfigValue("forms.validation.permitName.maxLength"))("minLength", ctx_r16.getConfigValue("forms.validation.permitName.minLength"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](32, _c0))("required", ctx_r16.getConfigValue("forms.validation.permitName.required"))("status", _r20.dirty ? _r20.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r20.invalid && _r20.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r20.invalid && _r20.touched || ctx_r16.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", permit_r17.code)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c0))("required", ctx_r16.getConfigValue("forms.validation.permitCode.required"))("status", _r22.dirty ? _r22.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r22.invalid && _r22.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r22.invalid && _r22.touched || ctx_r16.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.permitType !== "transport" && ctx_r16.permitType !== "collector");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", permit_r17.dateCreation)("nbDatepicker", _r26)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](34, _c0))("required", ctx_r16.getConfigValue("forms.validation.date.required"))("status", !ctx_r16.dateValid(permit_r17) ? "danger" : "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r25.invalid && _r25.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r16.dateValid(permit_r17) || ctx_r16.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", permit_r17.dateExpiration)("nbDatepicker", _r29)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c0))("required", ctx_r16.getConfigValue("forms.validation.date.required"))("status", !ctx_r16.dateValid(permit_r17) ? "danger" : "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r28.invalid && _r28.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r28.invalid && _r28.touched || ctx_r16.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", permit_r17.code === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.checkIssues);
        }
      }

      function TrashPermitComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_div_1_Template, 61, 36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.permits$));
        }
      }

      var TrashPermitComponent = /*#__PURE__*/function () {
        function TrashPermitComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var router = arguments.length > 1 ? arguments[1] : undefined;
          var registerService = arguments.length > 2 ? arguments[2] : undefined;
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, TrashPermitComponent);

          this.options = options;
          this.router = router;
          this.registerService = registerService;
          this.toastrService = toastrService;
          this.storages = [];
          this.permitsNo = 0;
          this.tmpNo = 0;
          this.checkIssues = false;
          this.valid = false;
          this.showPermitsInput = false;
        }

        _createClass(TrashPermitComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (f) {
              if (f !== undefined) {
                _this9.company = f;

                if (f.permits !== undefined) {
                  _this9.permits = _this9.company.permits.filter(function (x) {
                    return x.type === _this9.permitType;
                  });
                  _this9.permitsNo = _this9.permits.length;
                  _this9.permits$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this9.permits);
                }
              }
            });

            if (this.permitType !== 'transport' && this.permitType !== 'collector') {
              this.permitsNo = this.storageNo;
              this.storages$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.storages);
            }

            this.validatePermits();
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.company));
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "checkValid",
          value: function checkValid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var text, permitExists;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.validatePermits();

                      if (this.valid) {
                        _context2.next = 4;
                        break;
                      }

                      this.checkIssues = true;
                      return _context2.abrupt("return", false);

                    case 4:
                      text = '';
                      _context2.next = 7;
                      return Promise.all(this.registerService.checkPermits(this.permits)).then(function (promises) {
                        var _iterator2 = _createForOfIteratorHelper(promises),
                            _step2;

                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            var t = _step2.value;
                            text = !t ? 'ta šifra' : text;
                            if (t) return t;
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }

                        return false;
                      });

                    case 7:
                      permitExists = _context2.sent;

                      if (permitExists) {
                        _context2.next = 12;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška', "Ve\u0107 postoji ".concat(text, " dozvole!"), 'danger');
                      return _context2.abrupt("return", false);

                    case 12:
                      if (!this.valid) {
                        _context2.next = 16;
                        break;
                      }

                      return _context2.abrupt("return", true);

                    case 16:
                      this.checkIssues = true;
                      return _context2.abrupt("return", false);

                    case 18:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "validatePermits",
          value: function validatePermits() {
            if (!this.permits) return;
            this.valid = this.permits.length > 0;

            var _iterator3 = _createForOfIteratorHelper(this.permits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var d = _step3.value;

                if (d.name === '' || d.name.length < 3) {
                  this.valid = false;
                  break;
                }

                if (d.code === '') {
                  this.valid = false;
                  break;
                }

                if (d.dateCreation === undefined || d.dateExpiration === undefined) {
                  this.valid = false;
                  break;
                }

                if (d.storage === undefined && this.permitType !== 'transport' && this.permitType !== 'collector') {
                  this.valid = false;
                  break;
                }

                if (d.trashList.length < 1) {
                  this.valid = false;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "updatePermits",
          value: function updatePermits(storageNo, storages$, pressed) {
            var _this10 = this;

            if (pressed !== undefined && pressed === false) return;

            if (storageNo !== undefined) {
              this.permitsNo = storageNo;
            }

            if (storages$ !== undefined) this.storages$ = storages$;

            if (this.company.permits) {
              if (this.permitType === 'transport') {
                this.company.permits = this.company.permits.filter(function (x) {
                  return x.type !== 'transport';
                });
              } else if (this.permitType === 'collector') {
                this.company.permits = this.company.permits.filter(function (x) {
                  return x.type !== 'collector';
                });
              }
            } else {
              this.company.permits = [];
            }

            this.permits = new Array(this.permitsNo);

            for (var i = 0; i < this.permitsNo; i++) {
              this.permits[i] = {
                address: {
                  location: undefined,
                  street: ''
                },
                code: '',
                dateCreation: new Date(),
                dateExpiration: new Date(),
                name: '',
                storage: {
                  name: '',
                  maxAmount: 0,
                  address: {
                    location: {
                      placeCode: 0,
                      placeName: '',
                      townshipCode: 0,
                      townshipName: '',
                      zipCode: ''
                    },
                    street: ''
                  },
                  amount: 0
                },
                trashList: [],
                type: this.permitType
              };

              if (this.permitType === 'transport' || this.permitType === 'collector') {
                delete this.permits[i].storage;
                delete this.permits[i].address;
              }
            }

            this.permits$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.permits);
            this.permits.forEach(function (t) {
              return _this10.company.permits.push(t);
            });
            this.validatePermits();
          }
        }, {
          key: "choosePermit",
          value: function choosePermit(permit) {
            this.registerService.sendPermit(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(permit.code));
            this.router.navigate(['/auth/register-permit']);
          }
        }, {
          key: "dateValid",
          value: function dateValid(permit) {
            return permit.dateCreation <= permit.dateExpiration;
          }
        }, {
          key: "setAddress",
          value: function setAddress(permit, storage) {
            permit.address = storage.address;
          }
        }]);

        return TrashPermitComponent;
      }();

      TrashPermitComponent.ɵfac = function TrashPermitComponent_Factory(t) {
        return new (t || TrashPermitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      TrashPermitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: TrashPermitComponent,
        selectors: [["register-trash-permit"]],
        inputs: {
          permitType: "permitType",
          storageNo: "storageNo",
          storages: "storages"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "row my-1", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "my-1"], [1, "col-12"], ["updatePermitForm", ""], [1, "row"], ["for", "input-storageNo", 1, "label"], ["nbButtonToggle", "", 3, "pressedChange"], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["nbButton", "", 3, "click", 4, "ngIf"], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nbButton", "", 3, "click"], [1, "fa", "fa-plus"], [1, "row", "mt-3"], ["class", "col-12", 4, "ngFor", "ngForOf"], ["permitForm", "ngForm"], ["accent", "success"], ["for", "input-permitName", 1, "label"], ["autofocus", "", "fullWidth", "", "id", "input-permitName", "name", "permitName", "nbInput", "", 3, "ngModel", "maxlength", "minLength", "ngModelOptions", "required", "status", "placeholder", "ngModelChange"], ["permitName", "ngModel"], [4, "ngIf"], [1, "col-6"], ["for", "input-permitCode", 1, "label"], ["fullWidth", "", "id", "input-permitCode", "name", "permitCode", "nbInput", "", "placeholder", "\u0160ifra", 3, "ngModel", "ngModelOptions", "required", "status", "ngModelChange"], ["permitCode", "ngModel"], ["class", "col-6 my-1", 4, "ngIf"], ["for", "input-dateCreation", 1, "label"], ["fullWidth", "", "id", "input-dateCreation", "name", "dateCreation", "nbInput", "", 3, "ngModel", "nbDatepicker", "ngModelOptions", "required", "status", "ngModelChange"], ["dateCreation", "ngModel"], ["dateCreationPicker", ""], ["for", "input-dateExpiration", 1, "label"], ["fullWidth", "", "id", "input-dateExpiration", "name", "dateExpiration", "nbInput", "", 3, "ngModel", "nbDatepicker", "ngModelOptions", "required", "status", "ngModelChange"], ["dateExpiration", "ngModel"], ["dateExpirationPicker", ""], [1, "row", "my-2"], ["nbButton", "", "status", "success", "type", "button", 3, "disabled", "click"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], [1, "col-6", "my-1"], ["for", "input-permitsStorage", 1, "label"], ["fullWidth", "", "id", "input-permitsStorage", "name", "permitsStorage", "required", "", 3, "ngModel", "ngModelOptions", "status", "ngModelChange"], ["permitsStorage", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function TrashPermitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TrashPermitComponent_div_0_Template, 24, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashPermitComponent_div_1_Template, 3, 3, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permitType === "transport" || ctx.permitType === "collector");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.permitsNo > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonGroupComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonToggleDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXNoLXBlcm1pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InRyYXNoLXBlcm1pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Mue2":
    /*!******************************************!*\
      !*** ./src/app/@core/data/occupation.ts ***!
      \******************************************/

    /*! exports provided: OccupationData */

    /***/
    function Mue2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OccupationData", function () {
        return OccupationData;
      });

      var OccupationData = function OccupationData() {
        _classCallCheck(this, OccupationData);
      };
      /***/

    },

    /***/
    "NEkq":
    /*!*******************************************************************!*\
      !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function NEkq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotPasswordComponent_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Morate upisati email! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_11_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_ng_container_11_p_1_Template, 2, 0, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_ng_container_11_p_2_Template, 2, 0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        }
      }

      var ForgotPasswordComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC2) {
        _inherits(ForgotPasswordComponent, _nebular_auth__WEBPAC2);

        var _super3 = _createSuper(ForgotPasswordComponent);

        function ForgotPasswordComponent(service) {
          var _this11;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var cd = arguments.length > 2 ? arguments[2] : undefined;
          var router = arguments.length > 3 ? arguments[3] : undefined;
          var toastrService = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, ForgotPasswordComponent);

          _this11 = _super3.call(this, service, options, cd, router);
          _this11.service = service;
          _this11.options = options;
          _this11.cd = cd;
          _this11.router = router;
          _this11.toastrService = toastrService;
          _this11.email = '';
          _this11.strategy = _this11.getConfigValue('forms.login.strategy');
          return _this11;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "sendEmail",
          value: function sendEmail(form) {
            var _this12 = this;

            if (form.invalid) {
              this.toastrService.showToast('Greška', 'Popravite greške.', 'warning');
              return;
            }

            this.service.requestPassword(this.strategy, {
              'email': this.email
            }).subscribe(function (result) {
              if (!result.isSuccess()) _this12.toastrService.showToast('Greška', 'Došlo je do greške, pokušajte kasnije.', 'warning');else {
                _this12.router.navigate(['login']);
              }
            }, function (error) {
              _this12.toastrService.showToast('Greška', 'Pokušajte kasnije.', 'warning');
            });
          }
        }]);

        return ForgotPasswordComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRequestPasswordComponent"]);

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["forgot-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 16,
        vars: 6,
        consts: [[1, "align-self-center", "text-center"], [1, "mb-1"], ["for", "input-email", 1, "text-muted"], [1, "mt-4", 3, "ngSubmit"], ["form", "ngForm"], [1, "row", "d-flex", "justify-content-center"], [1, "col-8"], ["fullWidth", "", "id", "input-email", "name", "email", "nbInput", "", "placeholder", "Email", 3, "ngModel", "pattern", "required", "status", "ngModelChange"], ["emailInput", "ngModel"], [4, "ngIf"], [1, "row", "mt-3", "d-flex", "justify-content-center"], ["status", "primary", "size", "large", "type", "submit", "nbButton", "", "fullWidth", ""], ["class", "error-message text-left mt-1 mb-0", 4, "ngIf"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "text-left", "mt-1", "mb-0"], [1, "error-message", "mt-1", "mb-0"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaboravljena lozinka:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upi\u0161ite va\u0161u email adresu i posla\u0107emo Vam link za resetovanje lozinke");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              return ctx.sendEmail(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotPasswordComponent_ng_container_11_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Po\u0161alji mejl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r1.dirty ? _r1.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r1.invalid && _r1.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "NjHZ":
    /*!*****************************************************!*\
      !*** ./src/app/@core/service/occupation.service.ts ***!
      \*****************************************************/

    /*! exports provided: OccupationService */

    /***/
    function NjHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OccupationService", function () {
        return OccupationService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _data_occupation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../data/occupation */
      "Mue2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OccupationService = /*#__PURE__*/function (_data_occupation__WEB) {
        _inherits(OccupationService, _data_occupation__WEB);

        var _super4 = _createSuper(OccupationService);

        function OccupationService(http) {
          var _this13;

          _classCallCheck(this, OccupationService);

          _this13 = _super4.call(this);
          _this13.http = http;
          _this13.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
          return _this13;
        }

        _createClass(OccupationService, [{
          key: "createOccupation",
          value: function createOccupation(occupation) {
            return undefined;
          }
        }, {
          key: "deleteOccupation",
          value: function deleteOccupation(value, type) {
            return undefined;
          }
        }, {
          key: "getOccupation",
          value: function getOccupation() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http.get(this.apiUrl + '/api/occupation/one/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "getOccupations",
          value: function getOccupations() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http.get(this.apiUrl + '/api/occupation/many/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "updateOccupation",
          value: function updateOccupation(occupation, value) {
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_id';
            return this.http.patch(this.apiUrl + '/api/occupation/one/' + "".concat(type, "/").concat(value), occupation);
          }
        }, {
          key: "filter",
          value: function filter(value, arr) {
            var filterValue = value.toLowerCase();
            if (arr === undefined) return;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(arr.filter(function (x) {
              return x.name.toLowerCase().includes(filterValue) || x.code.includes(filterValue);
            }));
          }
        }]);

        return OccupationService;
      }(_data_occupation__WEBPACK_IMPORTED_MODULE_3__["OccupationData"]);

      OccupationService.ɵfac = function OccupationService_Factory(t) {
        return new (t || OccupationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      OccupationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: OccupationService,
        factory: OccupationService.ɵfac
      });
      /***/
    },

    /***/
    "OXk3":
    /*!***************************************!*\
      !*** ./src/app/@core/data/company.ts ***!
      \***************************************/

    /*! exports provided: CompanyData */

    /***/
    function OXk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyData", function () {
        return CompanyData;
      });

      var CompanyData = function CompanyData() {
        _classCallCheck(this, CompanyData);
      };
      /***/

    },

    /***/
    "W/LM":
    /*!***************************************************!*\
      !*** ./src/app/@core/service/register.service.ts ***!
      \***************************************************/

    /*! exports provided: RegisterService */

    /***/
    function WLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return RegisterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company.service */
      "wH5/");
      /* harmony import */


      var _permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permit.service */
      "bS1W");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user.service */
      "fo3O");
      /* harmony import */


      var _vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vehicle.service */
      "H5EB");

      var RegisterService = /*#__PURE__*/function () {
        function RegisterService(userService, companyService, permitService, vehicleService) {
          _classCallCheck(this, RegisterService);

          this.userService = userService;
          this.companyService = companyService;
          this.permitService = permitService;
          this.vehicleService = vehicleService;
          this.clearData();

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            this.user = {
              email: 'serbiansolutions' + (Math.random() * 1000).toFixed(0) + '@gmail.com',
              firstName: 'Filip',
              username: 'random' + (Math.random() * 1000).toFixed(0),
              lastName: 'Balandzic',
              password: 'nikjan00',
              phone: (Math.random() * 10000000000).toFixed(0),
              role: 'manager'
            };
            this.company = {
              storages: [],
              address: {
                location: {
                  placeCode: 0,
                  placeName: 'Arnajevo',
                  townshipCode: 0,
                  townshipName: 'Beograd',
                  zipCode: '31210'
                },
                street: 'Nikola tesla 2'
              },
              occupation: {
                code: '',
                name: 'Proizvodnja mesnih prerađevina'
              },
              email: 'random1' + (Math.random() * 1000).toFixed(0) + '@gmail.com',
              emailReception: 'random' + (Math.random() * 1000).toFixed(0) + '@gmail.com',
              mat: (Math.random() * 100000000).toFixed(0),
              manager: 'random',
              name: 'Test',
              pib: (Math.random() * 1000000000).toFixed(0),
              operations: [],
              telephone: (Math.random() * 10000000000).toFixed(0),
              legalRep: {
                firstName: 'Nikola',
                lastName: 'Jankovic'
              },
              nriz: {
                username: '',
                password: ''
              },
              wasteManager: {
                firstName: '',
                lastName: ''
              }
            };
            this.operations = ['Transport Neopasnog Otpada'];
          }
        }

        _createClass(RegisterService, [{
          key: "clearData",
          value: function clearData() {
            this.user = {
              email: '',
              firstName: '',
              username: '',
              lastName: '',
              password: '',
              phone: '',
              role: 'manager'
            };
            this.company = {
              occupation: {
                code: '',
                name: ''
              },
              address: {
                location: {
                  townshipCode: 0,
                  townshipName: '',
                  placeCode: 0,
                  placeName: '',
                  zipCode: ''
                },
                street: ''
              },
              email: '',
              emailReception: '',
              mat: '',
              manager: '',
              name: '',
              pib: '',
              operations: [],
              storages: [],
              permits: [],
              telephone: '',
              legalRep: {
                firstName: '',
                lastName: ''
              },
              wasteManager: {
                firstName: '',
                lastName: ''
              },
              nriz: {
                username: '',
                password: ''
              }
            };
            this.operations = [];
            this.permitCode = '';
          }
        }, {
          key: "sendPermit",
          value: function sendPermit(permitCode) {
            var _this14 = this;

            this.permitCode$ = permitCode;
            permitCode.subscribe(function (d) {
              _this14.permitCode = d;
            });
          }
        }, {
          key: "getPermit",
          value: function getPermit() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.permitCode);
          }
        }, {
          key: "sendOperations",
          value: function sendOperations(operations) {
            var _this15 = this;

            this.operations$ = operations;
            operations.subscribe(function (o) {
              _this15.operations = o;
            });
          }
        }, {
          key: "getOperations",
          value: function getOperations() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.operations);
          }
        }, {
          key: "sendUser",
          value: function sendUser(user) {
            var _this16 = this;

            this.user$ = user;
            user.subscribe(function (k) {
              _this16.user = k;
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            if (this.company !== undefined && this.user !== undefined) {
              this.user.company = this.company;
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.user);
          }
        }, {
          key: "sendCompany",
          value: function sendCompany(company) {
            var _this17 = this;

            this.company$ = company;
            company.subscribe(function (f) {
              _this17.company = f;
            });
          }
        }, {
          key: "getCompany",
          value: function getCompany() {
            if (this.company !== undefined) {
              if (this.operations !== undefined) {
                this.company.operations = this.operations;
              }

              if (this.user !== undefined) {
                this.company.manager = this.user.username;
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.company);
            }
          }
        }, {
          key: "checkUser",
          value: function checkUser(user) {
            var promises = [];
            promises.push(this.userService.getUser(user.username, 'username').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.userService.getUser(user.phone, 'phone').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.userService.getUser(user.email, 'email').toPromise().then(function (res) {
              return res === null;
            }));
            return promises;
          }
        }, {
          key: "checkCompany",
          value: function checkCompany(company) {
            var promises = [];
            promises.push(this.companyService.getCompany(company.pib, 'pib').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.companyService.getCompany(company.mat, 'mat').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.companyService.getCompany(company.email, 'email').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.companyService.getCompany(company.emailReception, 'emailReception').toPromise().then(function (res) {
              return res === null;
            }));
            promises.push(this.companyService.getCompany(company.telephone, 'telephone').toPromise().then(function (res) {
              return res === null;
            }));

            if (company.nriz.username !== '') {
              promises.push(this.companyService.getCompany(company.nriz.username, 'nriz.username').toPromise().then(function (res) {
                return res === null;
              }));
            } else {
              promises.push(true);
            }

            return promises;
          }
        }, {
          key: "checkPermits",
          value: function checkPermits(permits) {
            var promises = [];

            var _iterator4 = _createForOfIteratorHelper(permits),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var p = _step4.value;
                promises.push(this.permitService.getPermit(p.code, 'code').toPromise().then(function (res) {
                  return res === null;
                })["catch"](function (err) {
                  return true;
                }));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return promises;
          }
        }, {
          key: "checkVehicles",
          value: function checkVehicles(vehicles) {
            var promises = [];

            var _iterator5 = _createForOfIteratorHelper(vehicles),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var v = _step5.value;
                promises.push(this.vehicleService.getVehicle(v.licensePlate, 'licensePlate').toPromise().then(function (res) {
                  return res === null;
                }));
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return promises;
          }
        }]);

        return RegisterService;
      }();

      RegisterService.ɵfac = function RegisterService_Factory(t) {
        return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_permit_service__WEBPACK_IMPORTED_MODULE_3__["PermitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"]));
      };

      RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RegisterService,
        factory: RegisterService.ɵfac
      });
      /***/
    },

    /***/
    "WMHj":
    /*!******************************************************************************!*\
      !*** ./src/app/auth/register/register-company/register-company.component.ts ***!
      \******************************************************************************/

    /*! exports provided: RegisterCompanyComponent */

    /***/
    function WMHj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterCompanyComponent", function () {
        return RegisterCompanyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_occupation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/occupation.service */
      "NjHZ");
      /* harmony import */


      var _core_service_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@core/service/location.service */
      "1XyK");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterCompanyComponent_ng_container_21_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Naziv firme je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_21_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Naziv firme mora biti du\u017Ei od ", ctx_r39.getConfigValue("forms.validation.companyName.minLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_ng_container_21_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Naziv firme mora biti kra\u0107i od ", ctx_r40.getConfigValue("forms.validation.companyName.maxLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_21_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_21_p_2_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RegisterCompanyComponent_ng_container_21_p_3_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.maxlength);
        }
      }

      function RegisterCompanyComponent_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " PIB je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_32_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " PIB mora da bude validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_32_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_32_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.minlength);
        }
      }

      function RegisterCompanyComponent_ng_container_42_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mati\u010Dni broj je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_42_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mati\u010Dni broj mora da bude validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_42_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_42_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](40);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.minlength);
        }
      }

      function RegisterCompanyComponent_nb_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", o_r45);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](o_r45);
        }
      }

      function RegisterCompanyComponent_ng_container_63_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Op\u0161tina je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_63_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
        }
      }

      function RegisterCompanyComponent_nb_option_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", m_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](m_r47);
        }
      }

      function RegisterCompanyComponent_ng_container_77_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Mesto je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_77_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);
        }
      }

      function RegisterCompanyComponent_ng_container_88_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Po\u0161tanski broj je obavezan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_88_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Po\u0161tanski broj mora biti validan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_88_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_88_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r15.errors == null ? null : _r15.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r15.errors == null ? null : _r15.errors.minlength) || (_r15.errors == null ? null : _r15.errors.maxlength));
        }
      }

      function RegisterCompanyComponent_ng_container_98_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ulica je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_98_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ulica mora biti validna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_98_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_98_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.minlength);
        }
      }

      function RegisterCompanyComponent_nb_option_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", d_r53.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("[", d_r53.code, " ] ", d_r53.name, "");
        }
      }

      function RegisterCompanyComponent_ng_container_113_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0160ifra delatnosti je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_113_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r19.errors == null ? null : _r19.errors.required);
        }
      }

      function RegisterCompanyComponent_ng_container_124_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_124_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_124_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_124_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r23.errors == null ? null : _r23.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r23.errors == null ? null : _r23.errors.pattern);
        }
      }

      function RegisterCompanyComponent_ng_container_134_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Telefon firme je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_134_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Telefon firme mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_134_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_134_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_134_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r25.errors == null ? null : _r25.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r25.errors == null ? null : _r25.errors.minlength) || (_r25.errors == null ? null : _r25.errors.maxlength));
        }
      }

      function RegisterCompanyComponent_ng_container_160_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_160_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_160_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_160_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_160_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](151);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r28.errors == null ? null : _r28.errors.pattern);
        }
      }

      function RegisterCompanyComponent_div_161_ng_container_9_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_div_161_ng_container_9_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_div_161_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_div_161_ng_container_9_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_div_161_ng_container_9_p_2_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r61.errors == null ? null : _r61.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r61.errors == null ? null : _r61.errors.pattern);
        }
      }

      function RegisterCompanyComponent_div_161_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Unesite va\u0161 email za prijem dokumenata:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "input", 87, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_div_161_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r65.tmpEmail = $event;
          })("ngModelChange", function RegisterCompanyComponent_div_161_Template_input_ngModelChange_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r67.setCompanyEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RegisterCompanyComponent_div_161_ng_container_9_Template, 3, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r31.tmpEmail)("pattern", ctx_r31.getConfigValue("forms.validation.email.pattern"))("required", ctx_r31.getConfigValue("forms.validation.email.required"))("status", _r61.dirty ? _r61.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r61.invalid && _r61.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r61.invalid && _r61.touched || ctx_r31.checkIssues);
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_10_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ime zakonskog zastupnika je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_10_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Korisni\u010Dko ime mora biti du\u017Ee od ", ctx_r73.getConfigValue("forms.validation.username.minLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_div_172_ng_container_10_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_div_172_ng_container_10_p_2_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r68.errors == null ? null : _r68.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r68.errors == null ? null : _r68.errors.minlength) || (_r68.errors == null ? null : _r68.errors.maxlength));
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_23_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0160ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_23_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" \u0160ifra mora biti du\u017Ee od ", ctx_r75.getConfigValue("forms.validation.password.minLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_div_172_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_div_172_ng_container_23_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_div_172_ng_container_23_p_2_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r70.errors == null ? null : _r70.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r70.errors == null ? null : _r70.errors.minlength) || (_r70.errors == null ? null : _r70.errors.maxlength));
        }
      }

      function RegisterCompanyComponent_div_172_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Korisni\u010Dko ime:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 90, 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_div_172_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r76.company.nriz.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RegisterCompanyComponent_div_172_ng_container_10_Template, 3, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\u0160ifra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 94, 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_div_172_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r78.company.nriz.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterCompanyComponent_div_172_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r77);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r79.showPassword = ctx_r79.showPassword === "eye" ? "eye-off" : "eye";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "nb-icon", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, RegisterCompanyComponent_div_172_ng_container_23_Template, 3, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](8);

          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r33.company.nriz.username)("maxlength", ctx_r33.getConfigValue("forms.validation.username.maxLength"))("minlength", ctx_r33.getConfigValue("forms.validation.username.minLength"))("required", ctx_r33.getConfigValue("forms.validation.username.required") && _r32.checked)("status", _r68.dirty ? _r68.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r68.invalid && _r68.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r68.invalid && _r68.touched || ctx_r33.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r33.company.nriz.password)("maxlength", ctx_r33.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx_r33.getConfigValue("forms.validation.password.minLength"))("required", ctx_r33.getConfigValue("forms.validation.password.required") && _r32.checked)("status", _r70.dirty ? _r70.invalid ? "danger" : "success" : "basic")("type", ctx_r33.showPassword === "eye" ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r70.invalid && _r70.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("icon", ctx_r33.showPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r70.invalid && _r70.touched || ctx_r33.checkIssues);
        }
      }

      function RegisterCompanyComponent_ng_container_189_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ime zakonskog zastupnika je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_189_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Ime zakonskog zastupnika mora biti du\u017Ee od ", ctx_r81.getConfigValue("forms.validation.firstName.minLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_ng_container_189_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_189_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_189_p_2_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](187);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r34.errors == null ? null : _r34.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r34.errors == null ? null : _r34.errors.minlength) || (_r34.errors == null ? null : _r34.errors.maxlength));
        }
      }

      function RegisterCompanyComponent_ng_container_199_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Prezime zakonskog zastupnika je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterCompanyComponent_ng_container_199_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Prezime zakonskog zastupnika mora biti du\u017Ee od ", ctx_r83.getConfigValue("forms.validation.lastName.minLength"), " slova! ");
        }
      }

      function RegisterCompanyComponent_ng_container_199_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterCompanyComponent_ng_container_199_p_1_Template, 2, 0, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RegisterCompanyComponent_ng_container_199_p_2_Template, 2, 1, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](197);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r36.errors == null ? null : _r36.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (_r36.errors == null ? null : _r36.errors.minlength) || (_r36.errors == null ? null : _r36.errors.maxlength));
        }
      }

      var RegisterCompanyComponent = /*#__PURE__*/function () {
        function RegisterCompanyComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var locationService = arguments.length > 1 ? arguments[1] : undefined;
          var occupationService = arguments.length > 2 ? arguments[2] : undefined;
          var registerService = arguments.length > 3 ? arguments[3] : undefined;
          var router = arguments.length > 4 ? arguments[4] : undefined;
          var toastrService = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, RegisterCompanyComponent);

          this.options = options;
          this.locationService = locationService;
          this.occupationService = occupationService;
          this.registerService = registerService;
          this.router = router;
          this.toastrService = toastrService;
          this.showPassword = 'eye';
          this.checkIssues = false;
          this.tmpEmail = '';
        }

        _createClass(RegisterCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (f) {
              _this18.company = f;
            });
            this.registerService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (k) {
              if (k !== undefined) {
                _this18.user = k;
              }
            });
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.company));
            this.locationService.getDistinctTownships().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (o) {
              _this18.townships = o;
              _this18.townships$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(o);
            });
            this.occupationService.getOccupations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (d) {
              _this18.occupations = d;
              _this18.occupations$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(d);
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "checkAddress",
          value: function checkAddress() {
            return this.townships.includes(this.company.address.location.townshipName) && this.places.includes(this.company.address.location.placeName);
          }
        }, {
          key: "checkOccupation",
          value: function checkOccupation() {
            return this.occupations.map(function (x) {
              return x.name;
            }).includes(this.company.occupation.name);
          }
        }, {
          key: "validateCompany",
          value: function validateCompany(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var text, companyExists;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!form.invalid) {
                        _context3.next = 4;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška', 'Ispravite greške da bi ste nastavili.', 'warning');
                      return _context3.abrupt("return", false);

                    case 4:
                      if (this.checkAddress()) {
                        _context3.next = 8;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška', 'Proverite adresu (odaberite sa liste opštinu odnosno mesto) da bi ste nastavili.', 'warning', 5000);
                      return _context3.abrupt("return", false);

                    case 8:
                      if (this.checkOccupation()) {
                        _context3.next = 12;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška', 'Proverite zanimanje (odaberite sa liste zanimanja) da bi ste nastavili.', 'warning', 5000);
                      return _context3.abrupt("return", false);

                    case 12:
                      text = '';
                      _context3.next = 15;
                      return Promise.all(this.registerService.checkCompany(this.company)).then(function (b) {
                        text = !b[0] ? 'taj pib' : text;
                        text = !b[1] ? 'taj matični broj' : text;
                        text = !b[2] ? 'taj email' : text;
                        text = !b[3] ? 'taj email za prijem' : text;
                        text = !b[4] ? 'taj telefon' : text;
                        text = !b[5] ? 'to korisničko ime za NRIZ' : text;
                        return b[0] && b[1] && b[2] && b[3] && b[4] && b[5];
                      });

                    case 15:
                      companyExists = _context3.sent;

                      if (companyExists) {
                        _context3.next = 20;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast("Ve\u0107 postoji ".concat(text, "!"), "Promenite ".concat(text, " da biste nastavili."), 'danger');
                      return _context3.abrupt("return");

                    case 20:
                      if (form.valid && this.tmpEmail === '' && this.company.emailReception !== '') {
                        this.router.navigate(['auth/register-operations']);
                      } else {
                        this.checkIssues = true;
                        this.toastrService.showToast('Greška', 'Ispravite greške da bi ste nastavili.', 'warning');
                      }

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getPlaces",
          value: function getPlaces(townshipName) {
            var _this19 = this;

            if (townshipName === undefined) return;
            this.locationService.getPlacesFromTownship(townshipName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (m) {
              _this19.places = m;
              _this19.places$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(m);
            });
          }
        }, {
          key: "chooseTownship",
          value: function chooseTownship(value) {
            var _this20 = this;

            if (value === '') {
              this.townships$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.townships);
              return;
            }

            this.townships$ = this.locationService.filter(value, this.townships);
            if (this.townships$ !== undefined) this.townships$.subscribe(function (x) {
              _this20.getPlaces(x[0]);
            });
          }
        }, {
          key: "findPlaces",
          value: function findPlaces(value) {
            this.places$ = this.locationService.filter(value, this.places);
          }
        }, {
          key: "findOccupations",
          value: function findOccupations(occupation) {
            this.occupations$ = this.occupationService.filter(occupation, this.occupations);
          } // Clear the temporary email so the validation works

        }, {
          key: "clearTmpEmail",
          value: function clearTmpEmail() {
            this.tmpEmail = '';
          }
        }, {
          key: "setCompanyEmail",
          value: function setCompanyEmail() {
            this.company.emailReception = this.tmpEmail;
          }
        }]);

        return RegisterCompanyComponent;
      }();

      RegisterCompanyComponent.ɵfac = function RegisterCompanyComponent_Factory(t) {
        return new (t || RegisterCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_occupation_service__WEBPACK_IMPORTED_MODULE_5__["OccupationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]));
      };

      RegisterCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: RegisterCompanyComponent,
        selectors: [["register-company"]],
        decls: 215,
        vars: 105,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "text-center"], ["disableStepNavigation", "", "selectedIndex", "1"], ["label", "Korisnik", "completed", "true"], ["label", "Firma"], ["companyForm", "ngForm"], [1, "row", "my-1"], ["for", "input-companyName", 1, "label"], ["autofocus", "", "fullWidth", "", "id", "input-companyName", "name", "companyName", "nbInput", "", "placeholder", "Naziv firme", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["companyName", "ngModel"], [4, "ngIf"], [1, "col-6"], ["for", "input-pib", 1, "label"], ["fullWidth", "", "id", "input-pib", "name", "pib", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "PIB", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "ngModelChange"], ["pib", "ngModel"], ["for", "input-mat", 1, "label"], ["fullWidth", "", "id", "input-mat", "name", "mat", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Mati\u010Dni broj", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "ngModelChange"], ["mat", "ngModel"], ["for", "input-adresa", 1, "label"], ["id", "input-adresa", 1, "row", "ml-2"], ["for", "input-townshipName", 1, "label"], ["autocomplete", "off", "fullWidth", "", "id", "input-townshipName", "name", "townshipName", "nbInput", "", "placeholder", "Naziv op\u0161tine", 3, "ngModel", "nbAutocomplete", "required", "ngModelChange"], ["townshipName", "ngModel"], ["AutoCompleteTownships", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-placeName", 1, "label"], ["autocomplete", "off", "fullWidth", "", "id", "input-placeName", "name", "placeName", "nbInput", "", "placeholder", "Naziv mesta", 3, "ngModel", "nbAutocomplete", "required", "ngModelChange"], ["placeName", "ngModel"], ["autoCompletePlaces", ""], [1, "row", "ml-2", "mt-2"], [1, "col-3"], ["for", "input-zipCode", 1, "label"], ["fullWidth", "", "id", "input-zipCode", "name", "zipCode", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Po\u0161tanski broj", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["zipCode", "ngModel"], [1, "col-9"], ["for", "input-street", 1, "label"], ["fullWidth", "", "id", "input-street", "name", "street", "nbInput", "", "placeholder", "Ulica i broj", 3, "ngModel", "minlength", "required", "status", "ngModelChange"], ["street", "ngModel"], ["for", "input-occupation", 1, "label"], ["autocomplete", "off", "fullWidth", "", "id", "input-occupation", "name", "occupation", "nbInput", "", "placeholder", "Delatnost", 3, "ngModel", "nbAutocomplete", "required", "ngModelChange"], ["occupation", "ngModel"], ["autoDelatnostSelect", ""], [1, "col-4"], ["for", "input-companyEmail", 1, "label"], ["fullWidth", "", "id", "input-companyEmail", "name", "companyEmail", "nbInput", "", "placeholder", "Email firme", 3, "ngModel", "required", "pattern", "status", "ngModelChange"], ["companyEmail", "ngModel"], ["for", "input-companyTelephone", 1, "label"], ["fullWidth", "", "id", "input-companyTelephone", "name", "companyTelephone", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Telefon firme", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["companyTelephone", "ngModel"], ["for", "input-companyFax", 1, "label"], ["fullWidth", "", "id", "input-companyFax", "name", "companyFax", "nbInput", "", "onkeypress", "return /[0-9]/i.test(event.key)", "placeholder", "Faks firme", 3, "ngModel", "maxlength", "minlength", "ngModelChange"], ["companyFax", "ngModel"], ["for", "input-companyEmailReception", 1, "label"], ["fullWidth", "", "id", "input-companyEmailReception", "name", "companyEmailReception", "placeholder", "Email za prijem dokumenata", 3, "ngModel", "required", "selected", "status", "ngModelChange"], ["companyEmailReception", "ngModel"], [3, "value", "selectionChange"], [3, "value"], ["otherEmail", ""], ["class", "col-6", 4, "ngIf"], ["for", "toggle-nriz", 1, "label"], [1, "fa", "fa-info-circle", 3, "nbTooltip"], ["id", "toggle-nriz"], ["nrizToggle", ""], ["class", "row my-1", 4, "ngIf"], [1, "label"], [1, "row", "ml-2"], ["for", "input-fNameLegalRep", 1, "label"], ["fullWidth", "", "id", "input-fNameLegalRep", "name", "fNameLegalRep", "nbInput", "", "placeholder", "Ime", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["fNameLegalRepo", "ngModel"], ["for", "input-lNameLegalRep", 1, "label"], ["fullWidth", "", "id", "input-lNameLegalRep", "name", "lNameLegalRep", "nbInput", "", "placeholder", "Prezime", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["lNameLegalRepo", "ngModel"], [1, "row", "mt-3"], [1, "col-6", "mr-0", "pr-0"], ["nbButton", "", "fullWidth", "", "status", "danger", "type", "button", "routerLink", "../register-user"], [1, "col-6", "ml-0", "pl-0"], ["nbButton", "", "fullWidth", "", "status", "success", "type", "submit", 3, "click"], ["label", "Operacije"], ["label", "Informacije"], ["label", "Potvrda"], ["aria-label", "Uloguj se", 1, "text-center"], ["routerLink", "../login", 1, "text-link"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], ["for", "input-companyEmailReception2", 1, "label"], ["fullWidth", "", "id", "input-companyEmailReception2", "name", "companyEmailReception2", "nbInput", "", "placeholder", "Email", 3, "ngModel", "pattern", "required", "status", "ngModelChange"], ["companyEmailReception2", "ngModel"], ["for", "input-usernameNRIZ", 1, "label"], ["fullWidth", "", "id", "input-usernameNRIZ", "name", "usernameNRIZ", "nbInput", "", "placeholder", "Korisni\u010Dko ime", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["usernameNRIZ", "ngModel"], ["for", "input-passwordNRIZ", 1, "label"], [1, "col-10", "pr-0"], ["fullWidth", "", "id", "input-passwordNRIZ", "name", "passwordNRIZ", "nbInput", "", "placeholder", "\u0160ifra", 3, "ngModel", "maxlength", "minlength", "required", "status", "type", "ngModelChange"], ["passwordNRIZ", "ngModel"], [1, "col-2", "pl-0"], ["fullWidth", "", "tabindex", "-1", "nbButton", "", "type", "button", 3, "click"], [3, "icon"]],
        template: function RegisterCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "nb-stepper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "nb-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nb-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "form", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Naziv Firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.company.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, RegisterCompanyComponent_ng_container_21_Template, 4, 3, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Poreski identifikacioni broj (PIB):");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.company.pib = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, RegisterCompanyComponent_ng_container_32_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Mati\u010Dni broj:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.company.mat = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, RegisterCompanyComponent_ng_container_42_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Adresa:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Op\u0161tina:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_56_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);

              return ctx.chooseTownship(_r7.value);
            })("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.company.address.location.townshipName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "nb-autocomplete", null, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, RegisterCompanyComponent_nb_option_60_Template, 2, 2, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](61, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, RegisterCompanyComponent_ng_container_63_Template, 2, 1, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Mesto:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_70_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](71);

              return ctx.findPlaces(_r11.value);
            })("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.company.address.location.placeName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "nb-autocomplete", null, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, RegisterCompanyComponent_nb_option_74_Template, 2, 2, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](75, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](77, RegisterCompanyComponent_ng_container_77_Template, 2, 1, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Po\u0161tanski broj:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_85_listener($event) {
              return ctx.company.address.location.zipCode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, RegisterCompanyComponent_ng_container_88_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "Ulica i broj:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_95_listener($event) {
              return ctx.company.address.street = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, RegisterCompanyComponent_ng_container_98_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "\u0160ifra delatnosti:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "input", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_106_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);

              var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](107);

              return ctx.findOccupations(_r19.value);
            })("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_106_listener($event) {
              return ctx.company.occupation.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "nb-autocomplete", null, 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, RegisterCompanyComponent_nb_option_110_Template, 2, 3, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](111, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, RegisterCompanyComponent_ng_container_113_Template, 2, 1, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "label", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Email firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "input", 46, 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_121_listener($event) {
              return ctx.company.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, RegisterCompanyComponent_ng_container_124_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "Telefon firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "input", 49, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_131_listener($event) {
              return ctx.company.telephone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, RegisterCompanyComponent_ng_container_134_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](139, "Faks firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "input", 52, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_141_listener($event) {
              return ctx.company.fax = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Birajte email za prijem dokumenata:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "nb-select", 55, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_nb_select_ngModelChange_150_listener($event) {
              return ctx.company.emailReception = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "nb-option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function RegisterCompanyComponent_Template_nb_option_selectionChange_152_listener() {
              return ctx.clearTmpEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "nb-option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectionChange", function RegisterCompanyComponent_Template_nb_option_selectionChange_154_listener() {
              return ctx.clearTmpEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "nb-option", 58, 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](158, "Drugi email");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](160, RegisterCompanyComponent_ng_container_160_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](161, RegisterCompanyComponent_div_161_Template, 10, 6, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](165, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167, "Da li imate nalog na NRIZ (Nacionalni registar izvora zaga\u0111ivanja)? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](168, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](170, "nb-toggle", 63, 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](172, RegisterCompanyComponent_div_172_Template, 24, 16, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](177, "label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "Puno ime zakonskog zastupnika firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "label", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184, "Ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "input", 69, 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_186_listener($event) {
              return ctx.company.legalRep.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](189, RegisterCompanyComponent_ng_container_189_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](194, "Prezime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "input", 72, 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RegisterCompanyComponent_Template_input_ngModelChange_196_listener($event) {
              return ctx.company.legalRep.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](199, RegisterCompanyComponent_ng_container_199_Template, 3, 2, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "button", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203, " Nazad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterCompanyComponent_Template_button_click_205_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r84);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);

              return ctx.validateCompany(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, " Dalje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](207, "nb-step", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](208, "nb-step", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](209, "nb-step", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "section", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212, " Ve\u0107 imate nalog? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "a", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "Uloguj se");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](30);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](40);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](57);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](59);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](71);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](73);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](86);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](96);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](107);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](109);

            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](122);

            var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](132);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](142);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](151);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](157);

            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](171);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](187);

            var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](197);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.name)("maxlength", ctx.getConfigValue("forms.validation.companyName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.companyName.minLength"))("required", ctx.getConfigValue("forms.validation.companyName.required"))("status", _r1.dirty ? _r1.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r1.invalid && _r1.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.pib)("maxlength", ctx.getConfigValue("forms.validation.pib.maxLength"))("minlength", ctx.getConfigValue("forms.validation.pib.minLength"))("pattern", ctx.getConfigValue("forms.validation.pib.pattern"))("required", ctx.getConfigValue("forms.validation.pib.required"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.mat)("maxlength", ctx.getConfigValue("forms.validation.mat.maxLength"))("minlength", ctx.getConfigValue("forms.validation.mat.minLength"))("pattern", ctx.getConfigValue("forms.validation.mat.pattern"))("required", ctx.getConfigValue("forms.validation.mat.required"))("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.address.location.townshipName)("nbAutocomplete", _r8)("required", ctx.getConfigValue("forms.validation.address.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](61, 99, ctx.townships$));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.address.location.placeName)("nbAutocomplete", _r12)("required", ctx.getConfigValue("forms.validation.address.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](75, 101, ctx.places$));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.address.location.zipCode)("maxlength", ctx.getConfigValue("forms.validation.zipCode.maxLength"))("minlength", ctx.getConfigValue("forms.validation.zipCode.minLength"))("required", ctx.getConfigValue("forms.validation.zipCode.required"))("status", _r15.dirty ? _r15.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r15.invalid && _r15.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r15.invalid && _r15.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.address.street)("minlength", ctx.getConfigValue("forms.validation.street.minLength"))("required", ctx.getConfigValue("forms.validation.street.required"))("status", _r17.dirty ? _r17.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r17.invalid && _r17.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r17.invalid && _r17.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.occupation.name)("nbAutocomplete", _r20)("required", ctx.getConfigValue("forms.validation.occupation.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r19.invalid && _r19.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](111, 103, ctx.occupations$));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r19.invalid && _r19.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.email)("required", ctx.getConfigValue("forms.validation.email.required"))("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("status", _r23.dirty ? _r23.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r23.invalid && _r23.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r23.invalid && _r23.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.telephone)("maxlength", ctx.getConfigValue("forms.validation.telephone.maxLength"))("minlength", ctx.getConfigValue("forms.validation.telephone.minLength"))("required", ctx.getConfigValue("forms.validation.telephone.required"))("status", _r25.dirty ? _r25.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r25.invalid && _r25.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r25.invalid && _r25.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.fax)("maxlength", ctx.getConfigValue("forms.validation.telephone.maxLength"))("minlength", ctx.getConfigValue("forms.validation.telephone.minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r27.invalid && _r27.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.emailReception)("required", ctx.getConfigValue("forms.validation.email.required"))("selected", ctx.company.email)("status", _r28.dirty ? _r28.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r28.invalid && _r28.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.company.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.company.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.user == null ? null : ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.company.emailReception);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r28.invalid && _r28.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r29.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nbTooltip", "Ukoliko posedujete nalog na NRIZ unesite korisno\u010Dko ime i \u0161ifru za pristup na NRIZ ukoliko \u017Eelite da nam poverite odgovornost i obavljanje poslova izve\u0161tavanja umesto vas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r32.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.legalRep.firstName)("maxlength", ctx.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.firstName.minLength"))("required", ctx.getConfigValue("forms.validation.firstName.required"))("status", _r34.dirty ? _r34.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r34.invalid && _r34.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r34.invalid && _r34.touched || ctx.checkIssues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.company.legalRep.lastName)("maxlength", ctx.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.lastName.minLength"))("required", ctx.getConfigValue("forms.validation.lastName.required"))("status", _r36.dirty ? _r36.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", _r36.invalid && _r36.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r36.invalid && _r36.touched || ctx.checkIssues);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbToggleComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}\n\n.example-viewport[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.fa[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUlGIiwiZmlsZSI6InJlZ2lzdGVyLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNmZjNkNzE7XHJcbn1cclxuLmV4YW1wbGUtdmlld3BvcnQge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmV4YW1wbGUtaXRlbSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5mYSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: NgxAuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function () {
        return NgxAuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-recaptcha */
      "jCJ1");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _core_service_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../@core/service/company.service */
      "wH5/");
      /* harmony import */


      var _core_service_occupation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../@core/service/occupation.service */
      "NjHZ");
      /* harmony import */


      var _core_service_catalog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../@core/service/catalog.service */
      "ibGe");
      /* harmony import */


      var _core_service_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../@core/service/location.service */
      "1XyK");
      /* harmony import */


      var _core_service_permit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../@core/service/permit.service */
      "bS1W");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../@core/service/vehicle.service */
      "H5EB");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./login/login.component */
      "bsvf");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./logout/logout.component */
      "iKpk");
      /* harmony import */


      var _register_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./register-guard.service */
      "puVZ");
      /* harmony import */


      var _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./register/register-company/register-company.component */
      "WMHj");
      /* harmony import */


      var _register_register_informations_register_informations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./register/register-informations/register-informations.component */
      "jeFR");
      /* harmony import */


      var _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./register/register-user/register-user.component */
      "2Z1u");
      /* harmony import */


      var _register_register_operations_register_operations_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./register/register-operations/register-operations.component */
      "u8GX");
      /* harmony import */


      var _register_register_confirmation_register_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./register/register-confirmation/register-confirmation.component */
      "1yjk");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./register/register.component */
      "ZGml");
      /* harmony import */


      var _register_register_informations_trash_trash_transport_trash_transport_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./register/register-informations/trash/trash-transport/trash-transport.component */
      "ahU4");
      /* harmony import */


      var _register_register_permit_register_permit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./register/register-permit/register-permit.component */
      "Yt1k");
      /* harmony import */


      var _register_register_informations_trash_trash_storage_trash_storage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./register/register-informations/trash/trash-storage/trash-storage.component */
      "76Ee");
      /* harmony import */


      var _register_register_informations_trash_trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./register/register-informations/trash/trash-permit/trash-permit.component */
      "Kv9/");
      /* harmony import */


      var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./redirect/redirect.component */
      "afmh");
      /* harmony import */


      var _email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./email-confirmation/email-confirmation.component */
      "f7Do");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "NEkq");
      /* harmony import */


      var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./reset-password/reset-password.component */
      "xT/v");
      /* harmony import */


      var _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./terms-of-service/terms-of-service.component */
      "9zd/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgxAuthModule = function NgxAuthModule() {
        _classCallCheck(this, NgxAuthModule);
      };

      NgxAuthModule.ɵfac = function NgxAuthModule_Factory(t) {
        return new (t || NgxAuthModule)();
      };

      NgxAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
        type: NgxAuthModule
      });
      NgxAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
        providers: [_register_guard_service__WEBPACK_IMPORTED_MODULE_17__["RegisterGuard"], _core_service_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _core_service_occupation_service__WEBPACK_IMPORTED_MODULE_6__["OccupationService"], _core_service_register_service__WEBPACK_IMPORTED_MODULE_10__["RegisterService"], _core_service_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"], _core_service_permit_service__WEBPACK_IMPORTED_MODULE_9__["PermitService"], _core_service_vehicle_service__WEBPACK_IMPORTED_MODULE_11__["VehicleService"], _core_service_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"]],
        imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCheckboxModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_13__["NgxAuthRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAutocompleteModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCardModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonGroupModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](NgxAuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"], _register_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_20__["RegisterUserComponent"], _register_register_company_register_company_component__WEBPACK_IMPORTED_MODULE_18__["RegisterCompanyComponent"], _register_register_operations_register_operations_component__WEBPACK_IMPORTED_MODULE_21__["RegisterOperationsComponent"], _register_register_informations_register_informations_component__WEBPACK_IMPORTED_MODULE_19__["RegisterInformationsComponent"], _register_register_permit_register_permit_component__WEBPACK_IMPORTED_MODULE_25__["RegisterPermitComponent"], _register_register_confirmation_register_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["RegisterConfirmationComponent"], _register_register_informations_trash_trash_transport_trash_transport_component__WEBPACK_IMPORTED_MODULE_24__["TrashTransportComponent"], _register_register_informations_trash_trash_storage_trash_storage_component__WEBPACK_IMPORTED_MODULE_26__["TrashStorageComponent"], _register_register_informations_trash_trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_27__["TrashPermitComponent"], _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_28__["RedirectComponent"], _email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_29__["EmailConfirmationComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_30__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_31__["ResetPasswordComponent"], _terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_32__["TermsOfServiceComponent"]],
          imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCheckboxModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_13__["NgxAuthRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbAutocompleteModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbCardModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_3__["RecaptchaModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonGroupModule"]]
        });
      })();
      /***/

    },

    /***/
    "Yt1k":
    /*!****************************************************************************!*\
      !*** ./src/app/auth/register/register-permit/register-permit.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RegisterPermitComponent */

    /***/
    function Yt1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPermitComponent", function () {
        return RegisterPermitComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/catalog.service */
      "ibGe");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _catalog_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalog.settings */
      "pFrh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function RegisterPermitComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterPermitComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);

            var o_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r3.addTrash(o_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var o_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbPopover", o_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", o_r2.indexNumber, " ");
        }
      }

      var _c0 = function _c0(a2) {
        return ["..", "register-informations", a2];
      };

      var RegisterPermitComponent = /*#__PURE__*/function () {
        function RegisterPermitComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var registerService = arguments.length > 1 ? arguments[1] : undefined;
          var catalogService = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, RegisterPermitComponent);

          this.options = options;
          this.registerService = registerService;
          this.catalogService = catalogService;
          this.catalog = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
          this.settings = _catalog_settings__WEBPACK_IMPORTED_MODULE_6__["CATALOG_SETTINGS"];
          this.permitType = '';
        }

        _createClass(RegisterPermitComponent, [{
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.registerService.getPermit().subscribe(function (d) {
              _this21.permitCode = d;
            });
            this.registerService.getCompany().subscribe(function (f) {
              if (f !== undefined) {
                _this21.company = f;
                _this21.permit = _this21.company.permits.filter(function (x) {
                  return x.code === _this21.permitCode;
                })[0];
                _this21.permitType = _this21.permit.type;
                _this21.trashList = _this21.permit.trashList;
              }
            });
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.company));
            var safe = false,
                unsafe = false;
            this.registerService.getOperations().subscribe(function (o) {
              o.forEach(function (x) {
                if (x.includes('Neopasnog')) safe = true;
                if (x.includes('Opasnog')) unsafe = true;
              });
              if (safe && !unsafe) _this21.catalogService.getSafeTrash().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (k) {
                k.sort(function (a, b) {
                  return a.indexNumber.localeCompare(b.indexNumber);
                });

                _this21.catalog.load(k);
              });else if (unsafe && !safe) _this21.catalogService.getUnsafeTrash().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (k) {
                k.sort(function (a, b) {
                  return a.indexNumber.localeCompare(b.indexNumber);
                });

                _this21.catalog.load(k);
              });else if (unsafe && safe) _this21.catalogService.getCatalogs().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (k) {
                k.sort(function (a, b) {
                  return a.indexNumber.localeCompare(b.indexNumber);
                });

                _this21.catalog.load(k);
              });
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(query) {
            if (query === '') this.catalog.setFilter([]);
            this.catalog.setFilter([{
              field: 'indexNumber',
              search: query,
              filter: function filterFunction(cell, search) {
                cell = cell.replace(/\s+/g, '').includes(search.replace(/\s+/g, ''));
                return cell;
              }
            }, {
              field: 'name',
              search: query
            }], false);
          }
        }, {
          key: "addTrash",
          value: function addTrash(trash) {
            var _this22 = this;

            if (this.trashList.some(function (x) {
              return x._id === trash._id;
            })) {
              this.removeTrash(trash);
            } else {
              this.permit.trashList.push(trash);
            }

            this.company.permits.filter(function (x) {
              return x.code === _this22.permitCode;
            })[0] = this.permit;
          }
        }, {
          key: "removeTrash",
          value: function removeTrash(trash) {
            var found = this.trashList.filter(function (x) {
              return x._id === trash._id;
            })[0];

            if (found) {
              var index = this.trashList.indexOf(found, 0);
              if (index > -1) this.trashList.splice(index, 1);
            }
          }
        }]);

        return RegisterPermitComponent;
      }();

      RegisterPermitComponent.ɵfac = function RegisterPermitComponent_Factory(t) {
        return new (t || RegisterPermitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"]));
      };

      RegisterPermitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: RegisterPermitComponent,
        selectors: [["register-permit"]],
        decls: 22,
        vars: 7,
        consts: [[1, "text-center"], ["disableStepNavigation", "", "selectedIndex", "3"], ["label", "User", "completed", "true"], ["label", "Firma", "completed", "true"], ["label", "Operacije", "completed", "true"], ["label", "Informacije"], [1, "row"], [1, "col-4"], ["nbButton", "", "status", "warning", "class", "p-2 m-1", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "bottom", 3, "nbPopover", "click", 4, "ngFor", "ngForOf"], [1, "col-8"], [1, "ml-0"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Pretrazi", 3, "input"], ["search", ""], [3, "source", "settings", "custom"], ["nbButton", "", "fullWidth", "", "status", "success", 1, "mt-2", 3, "routerLink", "disabled"], ["label", "Potvrda"], ["nbButton", "", "status", "warning", "nbPopoverTrigger", "hint", "nbPopoverPlacement", "bottom", 1, "p-2", "m-1", 3, "nbPopover", "click"]],
        template: function RegisterPermitComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-stepper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "nb-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nb-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Lista otpada dozvole:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RegisterPermitComponent_button_12_Template, 2, 2, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Pretrazi po indeksnom broju ili nazivu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function RegisterPermitComponent_Template_input_input_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              return _r1.value.length >= 1 && ctx.onSearch(_r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ng2-smart-table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("custom", function RegisterPermitComponent_Template_ng2_smart_table_custom_18_listener($event) {
              return ctx.addTrash($event.data);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Zavr\u0161i ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "nb-step", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.trashList);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("source", ctx.catalog)("settings", ctx.settings);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c0, ctx.permitType))("disabled", (ctx.trashList == null ? null : ctx.trashList.length) === 0);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbPopoverDirective"]],
        styles: ["[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItcGVybWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXItcGVybWl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20gYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbTpob3ZlciB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZGml":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function ZGml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      function RegisterComponent_nb_alert_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r3);
        }
      }

      function RegisterComponent_nb_alert_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gre\u0161ka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterComponent_nb_alert_2_li_5_Template, 2, 1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
        }
      }

      function RegisterComponent_nb_alert_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r5);
        }
      }

      function RegisterComponent_nb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Uspeh!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterComponent_nb_alert_3_li_5_Template, 2, 1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
        }
      }

      var RegisterComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC3) {
        _inherits(RegisterComponent, _nebular_auth__WEBPAC3);

        var _super5 = _createSuper(RegisterComponent);

        function RegisterComponent(service) {
          var _this23;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var cd = arguments.length > 2 ? arguments[2] : undefined;
          var router = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, RegisterComponent);

          _this23 = _super5.call(this, service, options, cd, router);
          _this23.service = service;
          _this23.options = options;
          _this23.cd = cd;
          _this23.router = router;
          _this23.showMessages = [];
          _this23.strategy = '';
          _this23.submitted = false;
          _this23.errors = [];
          _this23.messages = [];
          _this23.showMessages = _this23.getConfigValue('forms.register.showMessages');
          _this23.strategy = _this23.getConfigValue('forms.register.strategy');
          return _this23;
        }

        _createClass(RegisterComponent, [{
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "register",
          value: function register() {
            var _this24 = this;

            this.errors = this.messages = [];
            this.submitted = true;
            var korisnik = '';
            this.service.register(this.strategy, korisnik).subscribe(function (result) {
              _this24.submitted = false;

              if (result.isSuccess()) {
                _this24.messages = result.getMessages();
              } else {
                _this24.errors = result.getErrors();
              }

              var redirect = result.getRedirect();

              if (redirect) {
                setTimeout(function () {
                  return _this24.router.navigateByUrl(redirect);
                }, _this24.redirectDelay);
              }

              _this24.cd.detectChanges();
            });
          }
        }]);

        return RegisterComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbRegisterComponent"]);

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["auth-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 2,
        consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "container"], ["aria-label", "Uloguj se", 1, "text-center"], ["routerLink", "../login", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registruj se");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ve\u0107 imate nalog? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Uloguj se");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI0ZGMDAwMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "afmh":
    /*!*****************************************************!*\
      !*** ./src/app/auth/redirect/redirect.component.ts ***!
      \*****************************************************/

    /*! exports provided: RedirectComponent */

    /***/
    function afmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedirectComponent", function () {
        return RedirectComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RedirectComponent = /*#__PURE__*/function () {
        function RedirectComponent(authService, router) {
          _classCallCheck(this, RedirectComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(RedirectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.authService.isAuthenticated().subscribe(function (b) {
              if (!b) _this25.router.navigate(['auth', 'login']);
            });
            this.authService.getToken().subscribe(function (t) {
              var user = t.getPayload().data.user;

              if (user.role === 'admin') {
                _this25.router.navigate(['admin']);
              } else {
                _this25.router.navigate(['pages', 'dashboard']);
              }
            });
          }
        }]);

        return RedirectComponent;
      }();

      RedirectComponent.ɵfac = function RedirectComponent_Factory(t) {
        return new (t || RedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      RedirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: RedirectComponent,
        selectors: [["auth-redirect"]],
        decls: 2,
        vars: 0,
        template: function RedirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "redirect works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ahU4":
    /*!********************************************************************************************************!*\
      !*** ./src/app/auth/register/register-informations/trash/trash-transport/trash-transport.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: TrashTransportComponent */

    /***/
    function ahU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrashTransportComponent", function () {
        return TrashTransportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../trash-permit/trash-permit.component */
      "Kv9/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["permitRef"];

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function TrashTransportComponent_input_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashTransportComponent_input_22_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r5.tmpNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.tmpNo)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c1));
        }
      }

      function TrashTransportComponent_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TrashTransportComponent_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r7.updateVehicles(ctx_r7.tmpNo, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashTransportComponent_div_24_div_1_ng_container_15_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Registarski broj tablica je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashTransportComponent_div_24_div_1_ng_container_15_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Registarski broj tablica mora biti validan (npr. BG-234-AA)! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashTransportComponent_div_24_div_1_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashTransportComponent_div_24_div_1_ng_container_15_p_1_Template, 2, 0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TrashTransportComponent_div_24_div_1_ng_container_15_p_2_Template, 2, 0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.pattern) || (_r13.errors == null ? null : _r13.errors.minLength));
        }
      }

      function TrashTransportComponent_div_24_div_1_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vrsta vozila je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function TrashTransportComponent_div_24_div_1_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashTransportComponent_div_24_div_1_ng_container_32_p_1_Template, 2, 0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_r15.value);
        }
      }

      function TrashTransportComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Registarski broj tablice:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashTransportComponent_div_24_div_1_Template_input_ngModelChange_12_listener($event) {
            var vehicle_r10 = ctx.$implicit;
            return vehicle_r10.licensePlate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TrashTransportComponent_div_24_div_1_ng_container_15_Template, 3, 2, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Vrsta vozila:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nb-select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TrashTransportComponent_div_24_div_1_Template_nb_select_ngModelChange_23_listener($event) {
            var vehicle_r10 = ctx.$implicit;
            return vehicle_r10.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "nb-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Kamion");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nb-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Kombi");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nb-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Automobil");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, TrashTransportComponent_div_24_div_1_ng_container_32_Template, 2, 1, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r10 = ctx.$implicit;

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", vehicle_r10.licensePlate)("maxlength", ctx_r9.getConfigValue("forms.validation.licensePlate.maxLength"))("minLength", ctx_r9.getConfigValue("forms.validation.licensePlate.minLength"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c1))("pattern", ctx_r9.getConfigValue("forms.validation.licensePlate.pattern"))("required", ctx_r9.getConfigValue("forms.validation.licensePlate.required"))("status", _r13.dirty ? _r13.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched || ctx_r9.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", vehicle_r10.type)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c1))("required", ctx_r9.getConfigValue("forms.validation.vehicleType.required"))("status", _r15.dirty ? _r15.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r15.invalid && _r15.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "kamion");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "kombi");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "automobil");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r15.invalid && _r15.touched || ctx_r9.checkIssues);
        }
      }

      function TrashTransportComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TrashTransportComponent_div_24_div_1_Template, 33, 20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r3.vehicles$));
        }
      }

      var TrashTransportComponent = /*#__PURE__*/function () {
        function TrashTransportComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var registerService = arguments.length > 1 ? arguments[1] : undefined;
          var toastrService = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, TrashTransportComponent);

          this.options = options;
          this.registerService = registerService;
          this.toastrService = toastrService;
          this.vehiclesNo = 0;
          this.tmpNo = 0;
          this.valid = false;
          this.checkIssues = false;
          this.showVehicleInput = false;
        }

        _createClass(TrashTransportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (f) {
              if (f !== undefined) {
                _this26.company = f;

                if (f.vehicles !== undefined) {
                  _this26.vehiclesNo = _this26.company.vehicles.length;
                  _this26.vehicles = _this26.company.vehicles;
                  _this26.vehicles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this26.vehicles);
                }
              }
            });
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.company));
            this.validateVehicles();
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "checkValid",
          value: function checkValid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var text, vehicleExists;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.validateVehicles();

                      if (this.valid) {
                        _context4.next = 4;
                        break;
                      }

                      this.checkIssues = true;
                      return _context4.abrupt("return", false);

                    case 4:
                      text = '';
                      _context4.next = 7;
                      return Promise.all(this.registerService.checkVehicles(this.vehicles)).then(function (promises) {
                        var _iterator6 = _createForOfIteratorHelper(promises),
                            _step6;

                        try {
                          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                            var t = _step6.value;
                            text = !t ? 'ta registarska tablica' : text;
                            if (t) return t;
                          }
                        } catch (err) {
                          _iterator6.e(err);
                        } finally {
                          _iterator6.f();
                        }

                        return false;
                      });

                    case 7:
                      vehicleExists = _context4.sent;

                      if (vehicleExists) {
                        _context4.next = 12;
                        break;
                      }

                      this.checkIssues = true;
                      this.toastrService.showToast('Greška', "Ve\u0107 postoji ".concat(text, "!"), 'danger');
                      return _context4.abrupt("return", false);

                    case 12:
                      _context4.t0 = this.permitRef !== undefined;

                      if (!_context4.t0) {
                        _context4.next = 17;
                        break;
                      }

                      _context4.next = 16;
                      return this.permitRef.checkValid();

                    case 16:
                      _context4.t0 = !_context4.sent;

                    case 17:
                      if (!_context4.t0) {
                        _context4.next = 19;
                        break;
                      }

                      return _context4.abrupt("return", false);

                    case 19:
                      if (!this.valid) {
                        _context4.next = 23;
                        break;
                      }

                      return _context4.abrupt("return", true);

                    case 23:
                      this.checkIssues = true;
                      return _context4.abrupt("return", false);

                    case 25:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "validateVehicles",
          value: function validateVehicles() {
            if (this.vehicles === undefined) return;
            this.valid = this.vehicles.length > 0;

            var _iterator7 = _createForOfIteratorHelper(this.vehicles),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var p = _step7.value;

                if (p.licensePlate === '' || p.licensePlate.length < 9) {
                  this.valid = false;
                  break;
                }

                if (p.type === '') {
                  this.valid = false;
                  break;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "updateVehicles",
          value: function updateVehicles(vehicleNo, pressed) {
            if (!pressed) return;
            console.log(vehicleNo);
            this.vehiclesNo = vehicleNo;
            this.vehicles = new Array(this.vehiclesNo);

            for (var i = 0; i < this.vehiclesNo; i++) {
              this.vehicles[i] = {
                licensePlate: '',
                type: ''
              };
            }

            this.company.vehicles = this.vehicles;
            this.vehicles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.vehicles);
            this.validateVehicles();
          }
        }]);

        return TrashTransportComponent;
      }();

      TrashTransportComponent.ɵfac = function TrashTransportComponent_Factory(t) {
        return new (t || TrashTransportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
      };

      TrashTransportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: TrashTransportComponent,
        selectors: [["register-trash-transport"]],
        viewQuery: function TrashTransportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.permitRef = _t.first);
          }
        },
        decls: 27,
        vars: 4,
        consts: [[1, "row", "my-1"], [1, "col-12"], ["updateVehicleForm", ""], [1, "row"], ["for", "input-storageNo", 1, "label"], ["nbButtonToggle", "", 3, "pressedChange"], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["nbButton", "", 3, "click", 4, "ngIf"], ["class", "row pt-4", 4, "ngIf"], [3, "permitType"], ["permitRef", ""], ["fullWidth", "", "nbInput", "", "id", "input-storageNo", "placeholder", "0", "step", "1", "type", "number", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nbButton", "", 3, "click"], [1, "fa", "fa-plus"], [1, "row", "pt-4"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], ["transportForm", "ngForm"], ["accent", "danger"], ["for", "input-licensePlate", 1, "label"], ["fullWidth", "", "id", "input-licensePlate", "name", "licensePlate", "nbInput", "", "oninput", "this.value = this.value.toUpperCase()", "placeholder", "NS-234-DS", 3, "ngModel", "maxlength", "minLength", "ngModelOptions", "pattern", "required", "status", "ngModelChange"], ["licensePlate", "ngModel"], [4, "ngIf"], ["for", "input-vehicleType", 1, "label"], ["fullWidth", "", "id", "input-vehicleType", "name", "vehicleType", "placeholder", "Odaberi", 3, "ngModel", "ngModelOptions", "required", "status", "ngModelChange"], ["vehicleType", "ngModel"], [3, "value"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function TrashTransportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Broj vozila:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nb-button-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_10_listener($event) {
              return ctx.updateVehicles(1, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_12_listener($event) {
              return ctx.updateVehicles(2, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_14_listener($event) {
              return ctx.updateVehicles(3, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_16_listener($event) {
              return ctx.updateVehicles(4, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_18_listener($event) {
              return ctx.updateVehicles(5, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pressedChange", function TrashTransportComponent_Template_button_pressedChange_20_listener() {
              return ctx.showVehicleInput = !ctx.showVehicleInput;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Vi\u0161e...");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, TrashTransportComponent_input_22_Template, 1, 3, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, TrashTransportComponent_button_23_Template, 2, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, TrashTransportComponent_div_24_Template, 3, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "register-trash-permit", 9, 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showVehicleInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showVehicleInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.vehiclesNo > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("permitType", "transport");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonGroupComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_6__["TrashPermitComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbOptionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: #FF0000;\n}\n\n.equal[_ngcontent-%COMP%] {\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0cmFzaC10cmFuc3BvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoidHJhc2gtdHJhbnNwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbi5lcXVhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      function LoginComponent_nb_alert_7_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r9);
        }
      }

      function LoginComponent_nb_alert_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do\u0161lo je do gre\u0161ke, proverite podatke!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_nb_alert_7_li_5_Template, 2, 1, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
        }
      }

      function LoginComponent_nb_alert_8_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r11);
        }
      }

      function LoginComponent_nb_alert_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Uspesno ste se ulogovali!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_nb_alert_8_li_5_Template, 2, 1, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.messages);
        }
      }

      function LoginComponent_ng_container_19_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_19_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        }
      }

      function LoginComponent_ng_container_31_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0160ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_container_31_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
        }
      }

      function LoginComponent_nb_checkbox_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-checkbox", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_nb_checkbox_34_Template_nb_checkbox_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.user.rememberMe = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zapamti me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.user.rememberMe);
        }
      }

      var LoginComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC4) {
        _inherits(LoginComponent, _nebular_auth__WEBPAC4);

        var _super6 = _createSuper(LoginComponent);

        function LoginComponent(service) {
          var _this27;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var cd = arguments.length > 2 ? arguments[2] : undefined;
          var roleService = arguments.length > 3 ? arguments[3] : undefined;
          var router = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, LoginComponent);

          _this27 = _super6.call(this, service, options, cd, router);
          _this27.service = service;
          _this27.options = options;
          _this27.cd = cd;
          _this27.roleService = roleService;
          _this27.router = router;
          _this27.APP_VERSION = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion;
          _this27.showPassword = 'eye';
          _this27.redirectDelay = 0;
          _this27.showMessages = {};
          _this27.strategy = '';
          _this27.errors = [];
          _this27.messages = [];
          _this27.user = {
            email: '',
            password: '',
            rememberMe: false
          };
          _this27.submitted = false;
          _this27.rememberMe = false;
          _this27.redirectDelay = _this27.getConfigValue('forms.login.redirectDelay');
          _this27.showMessages = _this27.getConfigValue('forms.login.showMessages');
          _this27.strategy = _this27.getConfigValue('forms.login.strategy');
          _this27.rememberMe = _this27.getConfigValue('forms.login.rememberMe');
          return _this27;
        }

        _createClass(LoginComponent, [{
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "login",
          value: function login() {
            var _this28 = this;

            this.errors = [];
            this.messages = [];
            this.submitted = true;
            this.service.authenticate(this.strategy, this.user).subscribe(function (result) {
              _this28.submitted = false;

              if (result.isSuccess()) {
                _this28.messages = result.getMessages();
              } else {
                _this28.errors = result.getErrors();
              }

              var redirect = result.getRedirect();

              if (redirect) {
                _this28.roleService.loginUser();

                setTimeout(function () {
                  return _this28.router.navigateByUrl(redirect);
                }, _this28.redirectDelay);
              }

              _this28.cd.detectChanges();
            });
          }
        }]);

        return LoginComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"]);

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["auth-login"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 50,
        vars: 19,
        consts: [[1, "align-self-center", "flex-fill"], [1, "row", "d-flex", "mb-5", "justify-content-center"], ["src", "assets/images/logo.png", "alt", "DIERS", 1, "", 2, "height", "40%", "width", "40%"], ["id", "title", 1, "title"], [1, "row", "d-flex", "justify-content-center"], [1, "col-8"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "uloguj se", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "row", "d-flex", "justify-content-center", "mb-3"], ["for", "input-email", 1, "label"], ["autofocus", "", "fullWidth", "", "id", "input-email", "name", "email", "nbInput", "", "placeholder", "Email adresa/Korisni\u010Dko ime", 3, "ngModel", "required", "status", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "mb-2"], ["for", "input-password", 1, "label"], [1, "col-7", "pr-0"], ["fullWidth", "", "id", "input-password", "name", "password", "nbInput", "", "placeholder", "\u0160ifra", 3, "ngModel", "required", "status", "type", "ngModelChange"], ["password", "ngModel"], [1, "col-1", "pl-0"], ["fullWidth", "", "type", "button", "nbButton", "", 3, "click"], [3, "icon"], [1, "col-4"], ["name", "rememberMe", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "col-4", "justify-content-end", "d-flex"], ["routerLink", "../forgot-password", 1, "forgot-password"], ["fullWidth", "", "nbButton", "", "status", "success", 3, "disabled"], [1, "row", "d-flex", "justify-content-center", "pb-2"], ["aria-label", "Registruj se", 1, "col-8", "text-center"], ["routerLink", "../register-user", 1, "text-link"], [1, "row", "justify-content-end"], [1, "badge", "badge-warning"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Uloguj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_nb_alert_7_Template, 6, 1, "nb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_nb_alert_8_Template, 6, 1, "nb-alert", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email/Korisni\u010Dko ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_ng_container_19_Template, 2, 1, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0160ifra:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
              return ctx.showPassword = ctx.showPassword === "eye" ? "eye-off" : "eye";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nb-icon", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_ng_container_31_Template, 2, 1, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LoginComponent_nb_checkbox_34_Template, 2, 1, "nb-checkbox", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Zaboravili ste \u0161ifru?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Uloguj se ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Nemate nalog? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Registruj se");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email)("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rememberMe);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-pulse", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.APP_VERSION);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxComponent"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: #FF0000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "f7Do":
    /*!*************************************************************************!*\
      !*** ./src/app/auth/email-confirmation/email-confirmation.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EmailConfirmationComponent */

    /***/
    function f7Do(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailConfirmationComponent", function () {
        return EmailConfirmationComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmailConfirmationComponent = /*#__PURE__*/function () {
        function EmailConfirmationComponent(router) {
          _classCallCheck(this, EmailConfirmationComponent);

          this.router = router;
        }

        _createClass(EmailConfirmationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            setTimeout(function () {
              _this29.router.navigate(['login']);
            }, 3000);
          }
        }]);

        return EmailConfirmationComponent;
      }();

      EmailConfirmationComponent.ɵfac = function EmailConfirmationComponent_Factory(t) {
        return new (t || EmailConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      EmailConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EmailConfirmationComponent,
        selectors: [["auth-email-confirmation"]],
        decls: 7,
        vars: 0,
        consts: [[1, "text-center"], [1, "row", "d-flex", "mb-5", "justify-content-center"], ["src", "assets/images/logo.png", "alt", "DIERS", 1, "", 2, "height", "40%", "width", "40%"], [1, "text-muted"]],
        template: function EmailConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Uspe\u0161no ste aktivirali Va\u0161 nalog!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Automatski \u0107emo vas prebaciti na login stranicu...");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "iKpk":
    /*!*************************************************!*\
      !*** ./src/app/auth/logout/logout.component.ts ***!
      \*************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function iKpk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@core/service/widget.service */
      "BHmg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogoutComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC5) {
        _inherits(LogoutComponent, _nebular_auth__WEBPAC5);

        var _super7 = _createSuper(LogoutComponent);

        function LogoutComponent(service, widgetService) {
          var _this30;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var router = arguments.length > 3 ? arguments[3] : undefined;
          var roleService = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, LogoutComponent);

          _this30 = _super7.call(this, service, options, router);
          _this30.service = service;
          _this30.widgetService = widgetService;
          _this30.options = options;
          _this30.router = router;
          _this30.roleService = roleService;
          _this30.redirectDelay = 0;
          _this30.strategy = '';
          _this30.redirectDelay = _this30.getConfigValue('forms.logout.redirectDelay');
          _this30.strategy = _this30.getConfigValue('forms.logout.strategy');
          return _this30;
        }

        _createClass(LogoutComponent, [{
          key: "logout",
          value: function logout(strategy) {
            var _this31 = this;

            this.service.logout(strategy).subscribe(function (result) {
              var redirect = result.getRedirect();

              _this31.roleService.ngOnDestroy();

              _this31.widgetService.ngOnDestroy();

              if (redirect) {
                setTimeout(function () {
                  return _this31.router.navigateByUrl(redirect);
                }, _this31.redirectDelay);
              }
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["getDeepFromObject"])(this.options, key, null);
          }
        }]);

        return LogoutComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbLogoutComponent"]);

      LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_service_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]));
      };

      LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: LogoutComponent,
        selectors: [["ngx-logout"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Odjavljivanje u toku...");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "jeFR":
    /*!****************************************************************************************!*\
      !*** ./src/app/auth/register/register-informations/register-informations.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: RegisterInformationsComponent */

    /***/
    function jeFR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterInformationsComponent", function () {
        return RegisterInformationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _trash_trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./trash/trash-permit/trash-permit.component */
      "Kv9/");
      /* harmony import */


      var _trash_trash_storage_trash_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./trash/trash-storage/trash-storage.component */
      "76Ee");
      /* harmony import */


      var _trash_trash_transport_trash_transport_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./trash/trash-transport/trash-transport.component */
      "ahU4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["productionRef"];
      var _c1 = ["transportRef"];
      var _c2 = ["collectorRef"];
      var _c3 = ["treatmentRef"];
      var _c4 = ["dumpRef"];
      var _c5 = ["cacheRef"];

      function RegisterInformationsComponent_nb_card_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Nije potrebno uno\u0161enje dodatnih informacija za Posebne tokove otpada. Sam unos \u0107e se obavljati u samoj aplikaciji.");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_10_register_trash_storage_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-storage", 22, 23);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("storageType", "production");
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Proizvodnja \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_10_register_trash_storage_6_Template, 2, 1, "register-trash-storage", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r2.activeTab !== "production");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r2.checkCompletion("production").status)("icon", ctx_r2.checkCompletion("production").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r8.collapsed);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_11_register_trash_transport_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-transport", null, 26);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Transport \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_11_register_trash_transport_6_Template, 2, 0, "register-trash-transport", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r3.activeTab !== "transport");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r3.checkCompletion("transport").status)("icon", ctx_r3.checkCompletion("transport").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r11.collapsed);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_12_register_trash_permit_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-permit", 29, 30);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("permitType", "collector");
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Sakuplja\u010D \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_12_register_trash_permit_6_Template, 2, 1, "register-trash-permit", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r4.activeTab !== "collector");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r4.checkCompletion("collector").status)("icon", ctx_r4.checkCompletion("collector").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r14.collapsed);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_13_register_trash_storage_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-storage", 22, 32);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("storageType", "treatment");
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Tretman \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_13_register_trash_storage_6_Template, 2, 1, "register-trash-storage", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r5.activeTab !== "treatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r5.checkCompletion("treatment").status)("icon", ctx_r5.checkCompletion("treatment").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r17.collapsed);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_14_register_trash_storage_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-storage", 22, 34);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("storageType", "dump");
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Odlaganje \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_14_register_trash_storage_6_Template, 2, 1, "register-trash-storage", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r6.activeTab !== "disposal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r6.checkCompletion("dump").status)("icon", ctx_r6.checkCompletion("dump").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r20.collapsed);
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_15_register_trash_storage_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "register-trash-storage", 22, 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("storageType", "cache");
        }
      }

      function RegisterInformationsComponent_nb_accordion_item_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item", 18, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-accordion-item-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Skladi\u0161tenje \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RegisterInformationsComponent_nb_accordion_item_15_register_trash_storage_6_Template, 2, 1, "register-trash-storage", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collapsed", ctx_r7.activeTab !== "cache");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("status", ctx_r7.checkCompletion("cache").status)("icon", ctx_r7.checkCompletion("cache").icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !_r23.collapsed);
        }
      }

      var RegisterInformationsComponent = /*#__PURE__*/function () {
        function RegisterInformationsComponent(registerService, router, toastrService, roleService, route) {
          _classCallCheck(this, RegisterInformationsComponent);

          this.registerService = registerService;
          this.router = router;
          this.toastrService = toastrService;
          this.roleService = roleService;
          this.route = route;
          this.valid = false;
          this.loading = false;
          this.activeTab = '';
          this.activeTab = this.route.snapshot.paramMap.get('tab');
        }

        _createClass(RegisterInformationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.registerService.getOperations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (o) {
              _this32.roleService.getOperations(o, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (f) {
                _this32.operations = f;
              });
            });
          }
        }, {
          key: "checkCompletion",
          value: function checkCompletion(type) {
            var result = {
              icon: 'checkmark-circle-outline',
              status: 'success'
            };

            if (type === 'production') {
              if (this.productionRef !== undefined && this.operations.production) if (this.productionRef.valid) return result;
            }

            if (type === 'transport') {
              if (this.transportRef !== undefined && this.operations.transport) if (this.transportRef.valid) return result;
            }

            if (type === 'collector') {
              if (this.collectorRef !== undefined && this.operations.collector) if (this.collectorRef.valid) return result;
            }

            if (type === 'treatment') {
              if (this.treatmentRef !== undefined && this.operations.treatment) if (this.treatmentRef.valid) return result;
            }

            if (type === 'dump') {
              if (this.dumpRef !== undefined && this.operations.disposal) if (this.dumpRef.valid) return result;
            }

            if (type === 'cache') {
              if (this.cacheRef !== undefined && this.operations.cache) if (this.cacheRef.valid) return result;
            }

            return {
              icon: 'alert-triangle-outline',
              status: 'danger'
            };
          }
        }, {
          key: "validateInformation",
          value: function validateInformation(accordion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this33 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.loading = true;
                      accordion.multi = true;
                      accordion.closeAll();
                      accordion.openAll();
                      setTimeout(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  this.valid = true;
                                  if (this.productionRef !== undefined && this.operations.production) if (!this.productionRef.checkValid()) this.valid = false;

                                  if (!(this.transportRef !== undefined && this.operations.transport)) {
                                    _context5.next = 6;
                                    break;
                                  }

                                  _context5.next = 5;
                                  return this.transportRef.checkValid();

                                case 5:
                                  this.valid = _context5.sent;

                                case 6:
                                  if (!(this.collectorRef !== undefined && this.operations.collector)) {
                                    _context5.next = 10;
                                    break;
                                  }

                                  _context5.next = 9;
                                  return this.collectorRef.checkValid();

                                case 9:
                                  this.valid = _context5.sent;

                                case 10:
                                  if (this.treatmentRef !== undefined && this.operations.treatment) if (!this.treatmentRef.checkValid()) this.valid = false;
                                  if (this.dumpRef !== undefined && this.operations.disposal) if (!this.dumpRef.checkValid()) this.valid = false;
                                  if (this.cacheRef !== undefined && this.operations.cache) if (!this.cacheRef.checkValid()) this.valid = false;

                                  if (!this.valid) {
                                    accordion.closeAll();
                                    accordion.multi = false;
                                    this.loading = false;
                                    this.toastrService.showToast('Greška', 'Ponovo pogledajte unete informacije!', 'warning');
                                  } else {
                                    this.router.navigate(['auth/register-confirmation']);
                                  }

                                case 14:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, 1000);

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return RegisterInformationsComponent;
      }();

      RegisterInformationsComponent.ɵfac = function RegisterInformationsComponent_Factory(t) {
        return new (t || RegisterInformationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      RegisterInformationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: RegisterInformationsComponent,
        selectors: [["register-informations"]],
        viewQuery: function RegisterInformationsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c5, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.productionRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.transportRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.collectorRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.treatmentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.dumpRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.cacheRef = _t.first);
          }
        },
        decls: 24,
        vars: 8,
        consts: [[1, "text-center"], ["disableStepNavigation", "", "selectedIndex", "3"], ["label", "User", "completed", "true"], ["label", "Firma", "completed", "true"], ["label", "Operacije", "completed", "true"], ["label", "Informacije"], ["class", "bg-light", 4, "ngIf"], ["size", "tiny", "nbSpinnerStatus", "danger", "nbSpinnerSize", "giant", "nbSpinnerMessage", "Proveravamo unete informacije!", 3, "nbSpinner"], ["accordionTrash", ""], [3, "collapsed", 4, "ngIf"], [1, "row", "mt-3"], [1, "col-6", "mr-0", "pr-0"], ["nbButton", "", "fullWidth", "", "status", "danger", "routerLink", "/auth/register-operations"], [1, "col-6", "ml-0", "pl-0"], ["nbButton", "", "fullWidth", "", "status", "success", "type", "submit", 3, "click"], ["label", "Potvrda"], [1, "bg-light"], [1, "justify-content-center", "d-flex"], [3, "collapsed"], ["accordionProduction", ""], [3, "status", "icon"], [3, "storageType", 4, "ngIf"], [3, "storageType"], ["productionRef", ""], ["accordionTransport", ""], [4, "ngIf"], ["transportRef", ""], ["accordionCollector", ""], [3, "permitType", 4, "ngIf"], [3, "permitType"], ["collectorRef", ""], ["accordionTreatment", ""], ["treatmentRef", ""], ["accordionDump", ""], ["dumpRef", ""], ["accordionCache", ""], ["cacheRef", ""]],
        template: function RegisterInformationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-stepper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "nb-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "nb-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "nb-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RegisterInformationsComponent_nb_card_7_Template, 4, 0, "nb-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nb-accordion", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RegisterInformationsComponent_nb_accordion_item_10_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, RegisterInformationsComponent_nb_accordion_item_11_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RegisterInformationsComponent_nb_accordion_item_12_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, RegisterInformationsComponent_nb_accordion_item_13_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, RegisterInformationsComponent_nb_accordion_item_14_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, RegisterInformationsComponent_nb_accordion_item_15_Template, 7, 4, "nb-accordion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Nazad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterInformationsComponent_Template_button_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);

              return ctx.validateInformation(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Dalje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "nb-step", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.specialWaste);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nbSpinner", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.production);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.transport);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.collector);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.treatment);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.disposal);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.operations.cache);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionItemBodyComponent"], _trash_trash_storage_trash_storage_component__WEBPACK_IMPORTED_MODULE_7__["TrashStorageComponent"], _trash_trash_transport_trash_transport_component__WEBPACK_IMPORTED_MODULE_8__["TrashTransportComponent"], _trash_trash_permit_trash_permit_component__WEBPACK_IMPORTED_MODULE_6__["TrashPermitComponent"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: #ff3d71;\r\n}\r\n\r\nnb-accordion-item[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n\r\nnb-accordion-item-header[_ngcontent-%COMP%] {\r\n  background-color: rgba(120, 120, 120, 0.05);\r\n  border-radius: 10px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nnb-accordion[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\nnb-accordion-item-body[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWluZm9ybWF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJyZWdpc3Rlci1pbmZvcm1hdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI2ZmM2Q3MTtcclxufVxyXG5cclxubmItYWNjb3JkaW9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYi1hY2NvcmRpb24taXRlbS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIwLCAxMjAsIDEyMCwgMC4wNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbm5iLWFjY29yZGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxubmItYWNjb3JkaW9uLWl0ZW0tYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "pFrh":
    /*!*******************************************************************!*\
      !*** ./src/app/auth/register/register-permit/catalog.settings.ts ***!
      \*******************************************************************/

    /*! exports provided: CATALOG_SETTINGS */

    /***/
    function pFrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CATALOG_SETTINGS", function () {
        return CATALOG_SETTINGS;
      });

      var CATALOG_SETTINGS = {
        pager: {
          perPage: 5
        },
        hideSubHeader: true,
        actions: {
          columnTitle: 'Odaberi',
          position: 'right',
          add: false,
          "delete": false,
          edit: false,
          custom: [{
            name: 'izaberi',
            title: '<i class="fa fa-plus"></i>'
          }]
        },
        columns: {
          indexNumber: {
            title: 'Indeksni Broj',
            filter: false,
            sort: true,
            sortDirection: 'asc'
          },
          name: {
            title: 'Naziv',
            filter: false
          }
        }
      };
      /***/
    },

    /***/
    "puVZ":
    /*!************************************************!*\
      !*** ./src/app/auth/register-guard.service.ts ***!
      \************************************************/

    /*! exports provided: RegisterGuard */

    /***/
    function puVZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterGuard", function () {
        return RegisterGuard;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegisterGuard = /*#__PURE__*/function () {
        function RegisterGuard(authService, router, registerService) {
          _classCallCheck(this, RegisterGuard);

          this.authService = authService;
          this.router = router;
          this.registerService = registerService;
        }

        _createClass(RegisterGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this34 = this;

            this.authService.isAuthenticated().pipe().subscribe(function (authenticated) {
              if (authenticated) {
                _this34.router.navigate(['pages']);
              }
            });
            var pass = true;
            var registerPath = next.routeConfig.path;

            if (registerPath === 'register-company') {
              this.registerService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (u) {
                if (u.username === '' || u.email === '') {
                  _this34.router.navigate(['auth', 'register-user']);

                  pass = false;
                }
              });
            } else if (registerPath === 'register-operations') {
              this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (c) {
                if (c.pib === '' || c.mat === '') {
                  _this34.router.navigate(['auth', 'register-company']);

                  pass = false;
                }
              });
            } else if (registerPath === 'register-informations') {
              this.registerService.getOperations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (o) {
                if (o.length === 0) {
                  _this34.router.navigate(['auth', 'register-operations']);

                  pass = false;
                }
              });
            } else if (registerPath === 'register-confirmation') {
              this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (c) {
                if (c.pib === '' || c.mat === '' || c.operations.length === 0 || c.manager === '') {
                  _this34.router.navigate(['auth', 'register-informations']);

                  pass = false;
                }
              });
            }

            return pass;
          }
        }]);

        return RegisterGuard;
      }();

      RegisterGuard.ɵfac = function RegisterGuard_Factory(t) {
        return new (t || RegisterGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]));
      };

      RegisterGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: RegisterGuard,
        factory: RegisterGuard.ɵfac
      });
      /***/
    },

    /***/
    "u8GX":
    /*!************************************************************************************!*\
      !*** ./src/app/auth/register/register-operations/register-operations.component.ts ***!
      \************************************************************************************/

    /*! exports provided: RegisterOperationsComponent */

    /***/
    function u8GX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterOperationsComponent", function () {
        return RegisterOperationsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/register.service */
      "W/LM");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["wasteManagerForm"];

      function RegisterOperationsComponent_nb_card_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-body", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Ako se bavite ", _r2.checked || _r6.checked ? "tretmanom" : "odlaganjem", " otpada, automatski postajete i proizvo\u0111a\u010D otpada. :) ");
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_19_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ime zakonskog zastupnika je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_19_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Ime zakonskog zastupnika mora biti du\u017Ee od ", ctx_r16.getConfigValue("forms.validation.firstName.minLength"), " slova! ");
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterOperationsComponent_div_96_ng_container_19_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterOperationsComponent_div_96_ng_container_19_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.minlength) || (_r11.errors == null ? null : _r11.errors.maxlength));
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_29_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Prezime zakonskog zastupnika je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_29_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Prezime zakonskog zastupnika mora biti du\u017Ee od ", ctx_r18.getConfigValue("forms.validation.lastName.minLength"), " slova! ");
        }
      }

      function RegisterOperationsComponent_div_96_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterOperationsComponent_div_96_ng_container_29_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterOperationsComponent_div_96_ng_container_29_p_2_Template, 2, 1, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.minlength) || (_r13.errors == null ? null : _r13.errors.maxlength));
        }
      }

      function RegisterOperationsComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Lice odgovorno za upravljanje otpadom: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Ako se bavite otpadom/posebnim tokovima otpada morate imati odre\u0111eno lice za upravaljanje otpadom, ako \u017Eelite da odaberete da mi to radimo ostavite sebe pa kasnije u aplikaciji mo\u0107i \u0107ete da promenite. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Ime:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterOperationsComponent_div_96_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r19.company.wasteManager.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RegisterOperationsComponent_div_96_ng_container_19_Template, 3, 2, "ng-container", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Prezime:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RegisterOperationsComponent_div_96_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r21.company.wasteManager.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, RegisterOperationsComponent_div_96_ng_container_29_Template, 3, 2, "ng-container", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTooltip", "Na osnovu Zakona o upravljanju otadom obaveza pravnog subjekta je da imenuje lice odgovorno za upravljanje otpadom, s tim u vezi proverite unete podatke ili ih promenite ako je potrebno.");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r10.company.wasteManager.firstName)("maxlength", ctx_r10.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx_r10.getConfigValue("forms.validation.firstName.minLength"))("required", ctx_r10.getConfigValue("forms.validation.firstName.required"))("status", _r11.dirty ? _r11.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched || ctx_r10.checkIssues);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r10.company.wasteManager.lastName)("maxlength", ctx_r10.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx_r10.getConfigValue("forms.validation.lastName.minLength"))("required", ctx_r10.getConfigValue("forms.validation.lastName.required"))("status", _r13.dirty ? _r13.invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched || ctx_r10.checkIssues);
        }
      }

      var RegisterOperationsComponent = /*#__PURE__*/function () {
        function RegisterOperationsComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var router = arguments.length > 1 ? arguments[1] : undefined;
          var registerService = arguments.length > 2 ? arguments[2] : undefined;
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, RegisterOperationsComponent);

          this.options = options;
          this.router = router;
          this.registerService = registerService;
          this.toastrService = toastrService;
          this.trashIco = {
            icon: 'trash',
            pack: 'solid'
          };
          this.carBatteryIco = {
            icon: 'car-battery',
            pack: 'solid'
          };
          this.recyleIco = {
            icon: 'recycle',
            pack: 'solid'
          };
          this.waterIco = {
            icon: 'water',
            pack: 'solid'
          };
          this.airIco = {
            icon: 'wind',
            pack: 'solid'
          };
          this.trashOperationsNo = 0;
          this.specialWasteNo = 0;
          this.packageOperationsNo = 0;
          this.waterOperationsNo = 0;
          this.airOperationsNo = 0;
          this.operations = [];
          this.checkIssues = false;
        }

        _createClass(RegisterOperationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.registerService.getOperations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (o) {
              if (o !== undefined) {
                _this35.operations = o;

                _this35.updateOperations();
              }
            });
            this.registerService.getCompany().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (c) {
              _this35.company = c;
            });
            this.registerService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (u) {
              _this35.company.wasteManager.firstName = u.firstName;
              _this35.company.wasteManager.lastName = u.lastName;
            });
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.company));
            this.registerService.sendOperations(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.operations));
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "validateOperations",
          value: function validateOperations() {
            if (this.form.invalid) {
              this.checkIssues = true;
              this.toastrService.showToast('Greška', 'Ispravite greške da bi ste nastavili.', 'warning');
              return;
            }

            if (this.trashOperationNumber(true) + this.specialWasteOperationNumber(true) === 0) {
              this.company.wasteManager.firstName = '';
              this.company.wasteManager.lastName = '';
            }

            if (this.operations.length > 0) {
              this.clearRemovedOperationsData();
              this.router.navigate(['auth/register-informations']);
            } else {
              this.toastrService.showToast('Greška', 'Odaberite bar jednu operaciju da biste nastavili.', 'warning');
            }
          }
        }, {
          key: "clearRemovedOperationsData",
          value: function clearRemovedOperationsData() {
            this.company.vehicles = [];
            this.company.storages = [];
            this.company.permits = [];
            this.company.specialWastes = [];
            this.registerService.sendCompany(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.company));
            this.registerService.sendOperations(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.operations));
          }
        }, {
          key: "trashOperationNumber",
          value: function trashOperationNumber() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return number ? this.operations.filter(function (x) {
              return x.toLowerCase().includes('neopasnog') || x.toLowerCase().includes('opasnog');
            }).length : this.operations.filter(function (x) {
              return x.toLowerCase().includes('neopasnog') || x.toLowerCase().includes('opasnog');
            }).length + '';
          }
        }, {
          key: "specialWasteOperationNumber",
          value: function specialWasteOperationNumber() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return number ? this.operations.filter(function (x) {
              return x.toLowerCase().includes('tokova');
            }).length : this.operations.filter(function (x) {
              return x.toLowerCase().includes('tokova');
            }).length + '';
          }
        }, {
          key: "updateOperations",
          value: function updateOperations() {
            // NEEDS FIXING
            this.trashOperationsNo = this.operations.filter(function (x) {
              return x.toLowerCase().includes('neopasnog') || x.toLowerCase().includes('opasnog');
            }).length;
            this.specialWasteNo = this.operations.filter(function (x) {
              return x.toLowerCase().includes('tokova');
            }).length;
          }
        }, {
          key: "addProcessOperation",
          value: function addProcessOperation(op, e, productionToggle) {
            this.addOperation(op, e);

            if (!productionToggle.checked) {
              productionToggle.checked = true;
            }

            if (!productionToggle.disabled) {
              productionToggle.setDisabledState(true);
            }

            if (op.includes('Neopasnog')) this.addOperation('Proizvodnja Neopasnog Otpada', e, false);else this.addOperation('Proizvodnja Opasnog Otpada', e, false);
          }
        }, {
          key: "addOperation",
          value: function addOperation(op, e) {
            var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (e) {
              if (!this.operations.includes(op)) this.operations.push(op);
            } else if (remove) {
              this.operations.splice(this.operations.findIndex(function (x) {
                return x === op;
              }), 1);
            }
          }
        }]);

        return RegisterOperationsComponent;
      }();

      RegisterOperationsComponent.ɵfac = function RegisterOperationsComponent_Factory(t) {
        return new (t || RegisterOperationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
      };

      RegisterOperationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: RegisterOperationsComponent,
        selectors: [["register-operations"]],
        viewQuery: function RegisterOperationsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 103,
        vars: 26,
        consts: [[1, "text-center"], ["disableStepNavigation", "", "selectedIndex", "2"], ["label", "Korisnik", "completed", "true"], ["label", "Firma", "completed", "true"], ["label", "Operacije"], [1, "row"], ["badgeStatus", "primary", "responsive", "true", "tabTitle", "Otpad", 3, "badgeText", "tabIcon"], [1, "row", "pb-0", "mb-0"], [1, "col-6"], [1, "col-12"], [1, "mx-1", 3, "checked", "disabled", "checkedChange"], ["ProizvodnjaNeopasnogOtpada", ""], [1, "mx-1", 3, "checked", "checkedChange"], ["SakupljacNeopasnogOtpada", ""], ["TretmanNeopasnogOtpada", ""], ["OdlaganjeNeopasnogOtpada", ""], ["ProizvodnjaOpasnogOtpada", ""], ["SakupljacOpasnogOtpada", ""], ["TretmanOpasnogOtpada", ""], ["OdlaganjeOpasnogOtpada", ""], ["class", "row mt-0 pt-0 bg-warning", 4, "ngIf"], ["badgeStatus", "primary", "responsive", "true", "tabTitle", "Posebni tokovi otpada", 3, "badgeText", "tabIcon"], ["responsive", "true", "tabTitle", "Ambalaze", 3, "tabIcon"], [1, "bg-light"], [1, "justify-content-center", "text-muted", "d-flex"], ["responsive", "true", "tabTitle", "Emisije u vode", 3, "tabIcon"], ["responsive", "true", "tabTitle", "Emisije u vazduh", 3, "tabIcon"], ["wasteManagerForm", "ngForm"], ["class", "row flex-fill ml-3", "style", "max-width: 54.5vw;", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "danger", "routerLink", "../register-company", 1, "mt-2", "col-6"], ["nbButton", "", "fullWidth", "", "status", "success", "type", "submit", 1, "col-6", "mt-2", 3, "click"], ["label", "Informacije"], ["lable", "Potvrda"], [1, "row", "mt-0", "pt-0", "bg-warning"], [1, "mt-0"], [1, "row", "flex-fill", "ml-3", 2, "max-width", "54.5vw"], [1, "pl-1", "my-auto", "fa", "fa-info-circle", 3, "nbTooltip"], [1, "card-subtitle", "text-secondary", "mt-1"], ["for", "input-fNameManager", 1, "label"], ["fullWidth", "", "id", "input-fNameManager", "name", "fNameManager", "nbInput", "", "placeholder", "Ime", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["fNameManager", "ngModel"], [4, "ngIf"], ["for", "input-lNameManager", 1, "label"], ["fullWidth", "", "id", "input-lNameManager", "name", "lNameManager", "nbInput", "", "placeholder", "Prezime", 3, "ngModel", "maxlength", "minlength", "required", "status", "ngModelChange"], ["lNameManager", "ngModel"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function RegisterOperationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Registruj se!");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-stepper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Neopasan otpad");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nb-toggle", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_16_listener($event) {
              return ctx.addOperation("Proizvodnja Neopasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Proizvodnja ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_20_listener($event) {
              return ctx.addOperation("Transport Neopasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Transport ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nb-toggle", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_23_listener($event) {
              return ctx.addOperation("Sakupljac Neopasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Sakuplja\u010D ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nb-toggle", 12, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_27_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              return ctx.addProcessOperation("Tretman Neopasnog Otpada", $event, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Tretman ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "nb-toggle", 12, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              return ctx.addProcessOperation("Odlaganje Neopasnog Otpada", $event, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Odlaganje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_35_listener($event) {
              return ctx.addOperation("Skladi\u0161tenje Neopasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Skladi\u0161tenje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "nb-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Opasan otpad");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "nb-toggle", 10, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_42_listener($event) {
              return ctx.addOperation("Proizvodnja Opasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " Proizvodnja ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_46_listener($event) {
              return ctx.addOperation("Transport Opasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Transport ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "nb-toggle", 12, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_49_listener($event) {
              return ctx.addOperation("Sakupljac Opasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Sakuplja\u010D ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "nb-toggle", 12, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_53_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);

              return ctx.addProcessOperation("Tretman Opasnog Otpada", $event, _r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Tretman ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "nb-toggle", 12, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);

              return ctx.addProcessOperation("Odlaganje Opasnog Otpada", $event, _r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Odlaganje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_61_listener($event) {
              return ctx.addOperation("Skladi\u0161tenje Opasnog Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " Skladi\u0161tenje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, RegisterOperationsComponent_nb_card_63_Template, 3, 1, "nb-card", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "nb-tab", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "nb-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Posebni tokovi otpada");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_71_listener($event) {
              return ctx.addOperation("Proizvodnja Posebnih Tokova Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Proizvodnja ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_74_listener($event) {
              return ctx.addOperation("Uvoz Posebnih Tokova Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Uvoz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "nb-toggle", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function RegisterOperationsComponent_Template_nb_toggle_checkedChange_77_listener($event) {
              return ctx.addOperation("Izvoz Posebnih Tokova Otpada", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Izvoz ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "nb-tab", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "nb-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Operacija trenutno u izradi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "nb-tab", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "nb-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Operacija trenutno u izradi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "nb-tab", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "nb-card", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Operacija trenutno u izradi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "form", null, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, RegisterOperationsComponent_div_96_Template, 30, 15, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, " Nazad ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegisterOperationsComponent_Template_button_click_99_listener() {
              return ctx.validateOperations();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, " Dalje ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "nb-step", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](102, "nb-step", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](54);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("badgeText", ctx.trashOperationNumber())("tabIcon", ctx.trashIco);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Proizvodnja Neopasnog Otpada"))("disabled", _r2.checked || _r3.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Transport Neopasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Sakupljac Neopasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Tretman Neopasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Odlaganje Neopasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Skladi\u0161tenje Neopasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Proizvodnja Opasnog Otpada"))("disabled", _r6.checked || _r7.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Transport Opasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Sakupljac Opasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Tretman Opasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Odlaganje Opasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Skladi\u0161tenje Opasnog Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r4.disabled || _r0.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("badgeText", ctx.specialWasteOperationNumber())("tabIcon", ctx.carBatteryIco);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Proizvodnja Posebnih Tokova Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Uvoz Posebnih Tokova Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.operations.includes("Izvoz Posebnih Tokova Otpada"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tabIcon", ctx.recyleIco);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tabIcon", ctx.waterIco);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tabIcon", ctx.airIco);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.trashOperationNumber(true) + 0 + (ctx.specialWasteOperationNumber(true) + 0) > 0);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTabComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXItb3BlcmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci1vcGVyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "wH5/":
    /*!**************************************************!*\
      !*** ./src/app/@core/service/company.service.ts ***!
      \**************************************************/

    /*! exports provided: CompanyService */

    /***/
    function wH5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _data_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/company */
      "OXk3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CompanyService = /*#__PURE__*/function (_data_company__WEBPAC) {
        _inherits(CompanyService, _data_company__WEBPAC);

        var _super8 = _createSuper(CompanyService);

        function CompanyService(http) {
          var _this36;

          _classCallCheck(this, CompanyService);

          _this36 = _super8.call(this);
          _this36.http = http;
          _this36.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          return _this36;
        }

        _createClass(CompanyService, [{
          key: "createCompany",
          value: function createCompany(company) {
            return this.http.post(this.apiUrl + '/api/company', company);
          }
        }, {
          key: "deleteCompany",
          value: function deleteCompany(value) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http["delete"](this.apiUrl + '/api/company/one/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "getCompany",
          value: function getCompany(value) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_id';
            return this.http.get(this.apiUrl + '/api/company/one/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "getCompanys",
          value: function getCompanys() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var type = arguments.length > 1 ? arguments[1] : undefined;
            return this.http.get(this.apiUrl + '/api/company/many/' + "".concat(type, "/").concat(value));
          }
        }, {
          key: "updateCompany",
          value: function updateCompany(company, value) {
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '_id';
            return this.http.patch(this.apiUrl + '/api/company/one/' + "".concat(type, "/").concat(value), company);
          }
        }]);

        return CompanyService;
      }(_data_company__WEBPACK_IMPORTED_MODULE_2__["CompanyData"]);

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac
      });
      /***/
    },

    /***/
    "xT/v":
    /*!*****************************************************************!*\
      !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function xTV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ResetPasswordComponent_ng_container_17_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0160ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_17_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0160ifra ne sme biti kra\u0107a od ", ctx_r6.getConfigValue("forms.validation.password.minLength"), "! ");
        }
      }

      function ResetPasswordComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_17_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_17_p_2_Template, 2, 1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.minlength) || (_r1.errors == null ? null : _r1.errors.maxlength));
        }
      }

      function ResetPasswordComponent_ng_container_25_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ponovna \u0161ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_25_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0160ifra se ne poklapa sa ve\u0107 upisanom \u0161ifrom! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_25_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_25_p_2_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value !== _r3.value);
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC6) {
        _inherits(ResetPasswordComponent, _nebular_auth__WEBPAC6);

        var _super9 = _createSuper(ResetPasswordComponent);

        function ResetPasswordComponent(service) {
          var _this37;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var cd = arguments.length > 2 ? arguments[2] : undefined;
          var router = arguments.length > 3 ? arguments[3] : undefined;
          var activatedRoute = arguments.length > 4 ? arguments[4] : undefined;
          var toastrService = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, ResetPasswordComponent);

          _this37 = _super9.call(this, service, options, cd, router);
          _this37.service = service;
          _this37.options = options;
          _this37.cd = cd;
          _this37.router = router;
          _this37.activatedRoute = activatedRoute;
          _this37.toastrService = toastrService;
          _this37.showPassword = 'eye';
          _this37.password = '';
          _this37.retypePassword = '';
          _this37.token = '';
          _this37.strategy = _this37.getConfigValue('forms.login.strategy');
          _this37.token = _this37.activatedRoute.snapshot.params['token'];
          return _this37;
        }

        _createClass(ResetPasswordComponent, [{
          key: "resetPassword",
          value: function resetPassword(form) {
            var _this38 = this;

            if (form.invalid) {
              this.toastrService.showToast('Greška', 'Proverite sve informacije!', 'warning');
              return;
            }

            this.service.resetPassword(this.strategy, {
              password: this.password,
              token: this.token
            }).subscribe(function (result) {
              if (!result.isSuccess()) {
                _this38.toastrService.showToast('Greška', 'Pokušajte ponovo kasnije', 'warning');

                return;
              } else {
                _this38.router.navigate(['login']);
              }
            }, function (error) {
              _this38.toastrService.showToast('Greška', 'Pokušajte ponovo kasnije', 'warning');
            });
          }
        }]);

        return ResetPasswordComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbResetPasswordComponent"]);

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["reset-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 30,
        vars: 15,
        consts: [[1, "align-self-center"], [1, "mb-1", "text-center"], [1, "mt-4", 3, "ngSubmit"], ["form", "ngForm"], [1, "row", "d-flex", "justify-content-center"], [1, "col-8"], [1, "row", "mb-2"], ["for", "input-password", 1, "label", "col-12"], [1, "col-10", "pr-0"], ["fullWidth", "", "id", "input-password", "name", "password", "nbInput", "", "placeholder", "\u0160ifra", "tabindex", "1", 3, "ngModel", "maxlength", "minlength", "required", "status", "type", "ngModelChange"], ["passwordModel", "ngModel"], [1, "col-2", "pl-0"], ["fullWidth", "", "tabindex", "-1", "nbButton", "", "type", "button", 3, "click"], [3, "icon"], [1, "col-12"], [4, "ngIf"], [1, "row"], ["for", "input-rePassword", 1, "label", "col-12"], ["fullWidth", "", "id", "input-rePassword", "name", "rePass", "nbInput", "", "placeholder", "Potvrdi \u0161ifru", "tabindex", "2", 3, "ngModel", "required", "status", "type", "ngModelChange"], ["retypePasswordModel", "ngModel"], [1, "row", "mt-3", "d-flex", "justify-content-center"], ["status", "success", "size", "large", "type", "submit", "nbButton", "", "fullWidth", ""], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zaboravljena lozinka:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.resetPassword(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0160ifra:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_14_listener() {
              return ctx.showPassword = ctx.showPassword === "eye" ? "eye-off" : "eye";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nb-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResetPasswordComponent_ng_container_17_Template, 3, 2, "ng-container", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ponovi \u0161ifru:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.retypePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResetPasswordComponent_ng_container_25_Template, 3, 2, "ng-container", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Promeni lozinku");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r1.dirty ? _r1.invalid ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r1.invalid && _r1.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.retypePassword)("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r3.dirty ? _r3.invalid || _r1.value !== _r3.value ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r1.touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".error-message[_ngcontent-%COMP%] {\r\n  color: #FF0000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map