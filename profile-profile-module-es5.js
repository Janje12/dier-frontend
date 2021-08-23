(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "723k":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pages.module */
      "dgmN");
      /* harmony import */


      var _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popup-windows/popup-windows.module */
      "bJfm");
      /* harmony import */


      var _storage_containers_storage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage-containers/storage.module */
      "RPbl");
      /* harmony import */


      var _profile_permits_profile_permits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile-permits/profile-permits.component */
      "gvza");
      /* harmony import */


      var _profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile-company/profile-company.component */
      "ORcO");
      /* harmony import */


      var _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./profile-user/profile-user.component */
      "cNON");
      /* harmony import */


      var _profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./profile-vehicles/profile-vehicles.component */
      "dHrd");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profile-routing.module */
      "x0XS");
      /* harmony import */


      var _profile_storages_profile_storages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./profile-storages/profile-storages.component */
      "SUjN");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./profile.component */
      "Y5Lh");
      /* harmony import */


      var _permit_renewal_permit_renewal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./permit-renewal/permit-renewal.component */
      "l9zX");
      /* harmony import */


      var _profile_operations_profile_operations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./profile-operations/profile-operations.component */
      "d23s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵfac = function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_profile_routing_module__WEBPACK_IMPORTED_MODULE_11__["ProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbProgressBarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"], _pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_5__["PopupWindowsModule"], _storage_containers_storage_module__WEBPACK_IMPORTED_MODULE_6__["StorageModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_8__["ProfileCompanyComponent"], _profile_permits_profile_permits_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePermitsComponent"], _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_9__["ProfileUserComponent"], _profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_10__["ProfileVehiclesComponent"], _profile_storages_profile_storages_component__WEBPACK_IMPORTED_MODULE_12__["ProfileStoragesComponent"], _permit_renewal_permit_renewal_component__WEBPACK_IMPORTED_MODULE_14__["PermitRenewalComponent"], _profile_operations_profile_operations_component__WEBPACK_IMPORTED_MODULE_15__["ProfileOperationsComponent"]],
          imports: [_profile_routing_module__WEBPACK_IMPORTED_MODULE_11__["ProfileRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbProgressBarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"], _pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_5__["PopupWindowsModule"], _storage_containers_storage_module__WEBPACK_IMPORTED_MODULE_6__["StorageModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"]]
        });
      })();
      /***/

    },

    /***/
    "ORcO":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/profile/profile-company/profile-company.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ProfileCompanyComponent */

    /***/
    function ORcO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileCompanyComponent", function () {
        return ProfileCompanyComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../@core/service/company.service */
      "wH5/");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileCompanyComponent_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_32_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_ng_container_32_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_ng_container_32_p_2_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.pattern);
        }
      }

      function ProfileCompanyComponent_ng_container_40_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_40_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_ng_container_40_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_ng_container_40_p_2_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.pattern);
        }
      }

      function ProfileCompanyComponent_ng_container_48_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Telefon je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_48_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Telefon mora da bude du\u017Ei od ", ctx_r21.getConfigValue("forms.validation.phone.minLength"), " a kra\u0107i od ", ctx_r21.getConfigValue("forms.validation.phone.maxLength"), " ");
        }
      }

      function ProfileCompanyComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_ng_container_48_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_ng_container_48_p_2_Template, 2, 2, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r8.errors == null ? null : _r8.errors.minlength) || (_r8.errors == null ? null : _r8.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_div_49_ng_container_7_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Faks mora da bude du\u017Ei od ", ctx_r24.getConfigValue("forms.validation.phone.minLength"), " a kra\u0107i od ", ctx_r24.getConfigValue("forms.validation.phone.maxLength"), " ");
        }
      }

      function ProfileCompanyComponent_div_49_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_div_49_ng_container_7_p_1_Template, 2, 2, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r22.errors == null ? null : _r22.errors.minlength) || (_r22.errors == null ? null : _r22.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Faks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_div_49_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r25.company.fax = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileCompanyComponent_div_49_ng_container_7_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.company.fax)("maxlength", ctx_r10.getConfigValue("forms.validation.phone.maxLength"))("minlength", ctx_r10.getConfigValue("forms.validation.phone.minLength"))("status", _r22.dirty ? _r22.invalid ? "danger" : "success" : "basic")("disabled", ctx_r10.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r22.invalid && _r22.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r22.invalid && _r22.touched);
        }
      }

      function ProfileCompanyComponent_ng_container_58_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Zakosni zastupnik firme je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_58_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Zakosni zastupnik mora da bude du\u017Ei od ", ctx_r28.getConfigValue("forms.validation.firstName.minLength"), " a kra\u0107i od ", ctx_r28.getConfigValue("forms.validation.firstName.maxLength"), " ");
        }
      }

      function ProfileCompanyComponent_ng_container_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_ng_container_58_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_ng_container_58_p_2_Template, 2, 2, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.minlength) || (_r11.errors == null ? null : _r11.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_ng_container_65_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Zakosni zastupnik firme je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_ng_container_65_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Zakosni zastupnik mora da bude du\u017Ei od ", ctx_r30.getConfigValue("forms.validation.lastName.minLength"), " a kra\u0107i od ", ctx_r30.getConfigValue("forms.validation.lastName.maxLength"), " ");
        }
      }

      function ProfileCompanyComponent_ng_container_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_ng_container_65_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_ng_container_65_p_2_Template, 2, 2, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.minlength) || (_r13.errors == null ? null : _r13.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_7_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ime odgovornog lica za upravljanje otpadom je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_7_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ime odgovornog lica za upravljanje otpadom mora biti du\u017Ee ", ctx_r36.getConfigValue("forms.validation.firstName.minLength"), " ");
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_div_66_ng_container_7_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_div_66_ng_container_7_p_2_Template, 2, 1, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r31.errors == null ? null : _r31.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r31.errors == null ? null : _r31.errors.minlength) || (_r31.errors == null ? null : _r31.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_14_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prezime odgovornog lica za upravljanje otpadom je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_14_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Prezime odgovornog lica za upravljanje otpadom mora da bude du\u017Ee od ", ctx_r38.getConfigValue("forms.validation.lastName.minLength"), " ");
        }
      }

      function ProfileCompanyComponent_div_66_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileCompanyComponent_div_66_ng_container_14_p_1_Template, 2, 0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileCompanyComponent_div_66_ng_container_14_p_2_Template, 2, 1, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.errors == null ? null : _r33.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r33.errors == null ? null : _r33.errors.minlength) || (_r33.errors == null ? null : _r33.errors.maxlength));
        }
      }

      function ProfileCompanyComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ime odgovornog lica za upravljanje otpadom:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_div_66_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r39.company.wasteManager.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileCompanyComponent_div_66_ng_container_7_Template, 3, 2, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Prezime odgovornog lica za upravljanje otpadom:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_div_66_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r41.company.wasteManager.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ProfileCompanyComponent_div_66_ng_container_14_Template, 3, 2, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r15.company.wasteManager.firstName)("maxlength", ctx_r15.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx_r15.getConfigValue("forms.validation.firstName.minLength"))("required", ctx_r15.getConfigValue("forms.validation.firstName.required"))("status", _r31.dirty ? _r31.invalid ? "danger" : "success" : "basic")("disabled", ctx_r15.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r31.invalid && _r31.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r31.invalid && _r31.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r15.company.wasteManager.lastName)("maxlength", ctx_r15.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx_r15.getConfigValue("forms.validation.lastName.minLength"))("required", ctx_r15.getConfigValue("forms.validation.lastName.required"))("status", _r33.dirty ? _r33.invalid ? "danger" : "success" : "basic")("disabled", ctx_r15.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r33.invalid && _r33.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && _r33.touched);
        }
      }

      var ProfileCompanyComponent = /*#__PURE__*/function () {
        function ProfileCompanyComponent(companyService) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var toastrService = arguments.length > 2 ? arguments[2] : undefined;
          var roleService = arguments.length > 3 ? arguments[3] : undefined;
          var authService = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, ProfileCompanyComponent);

          this.companyService = companyService;
          this.options = options;
          this.toastrService = toastrService;
          this.roleService = roleService;
          this.authService = authService;
          this.company = {
            address: {
              location: {
                placeName: '',
                placeCode: 0,
                zipCode: '',
                townshipCode: 0,
                townshipName: ''
              },
              street: ''
            },
            email: '',
            emailReception: '',
            legalRep: {
              firstName: '',
              lastName: ''
            },
            nriz: {
              username: '',
              password: ''
            },
            manager: '',
            mat: '',
            name: '',
            occupation: {
              name: '',
              code: ''
            },
            operations: [],
            pib: '',
            telephone: '',
            fax: ''
          };
          this.inputsDisabled = true;
        }

        _createClass(ProfileCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.companyService.getCompany(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (f) {
              _this.company = f;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "enableInputs",
          value: function enableInputs() {
            this.inputsDisabled = false;
          }
        }, {
          key: "updateFirma",
          value: function updateFirma(form) {
            if (!form.valid) this.toastrService.showToast('Greška', 'Informacije koje ste uneli nisu tačne!', 'danger');else {
              this.companyService.updateCompany(this.company, this.company._id).subscribe(function (f) {});
              this.toastrService.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
              this.inputsDisabled = true; // When korisnik data is changed it has to generate a new token!

              var token = null;
              this.authService.getToken().subscribe(function (t) {
                token = t;
              });
              this.authService.refreshToken('email', token).subscribe(function (x) {});
            }
          }
        }]);

        return ProfileCompanyComponent;
      }();

      ProfileCompanyComponent.ɵfac = function ProfileCompanyComponent_Factory(t) {
        return new (t || ProfileCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbAuthService"]));
      };

      ProfileCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ProfileCompanyComponent,
        selectors: [["profile-company"]],
        decls: 81,
        vars: 46,
        consts: [[1, "col-12", 3, "ngSubmit"], ["formKorisnik", "ngForm"], [1, "row"], [1, "col-6"], [1, "row", "mb-2"], [1, "col-12"], ["for", "input-companyName", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-companyName", "name", "companyName", "nbInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["companyName", "ngModel"], ["for", "input-pib", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-pib", "name", "pib", "nbInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["pib", "ngModel"], ["for", "input-mat", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-mat", "name", "mat", "nbInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat", "ngModel"], ["for", "input-email", 1, "label"], ["fullWidth", "", "id", "input-email", "name", "email", "nbInput", "", "type", "text", 3, "ngModel", "pattern", "required", "status", "disabled", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "input-emailReception", 1, "label"], ["fullWidth", "", "id", "input-emailReception", "name", "emailReception", "nbInput", "", "type", "text", 3, "ngModel", "pattern", "required", "status", "disabled", "ngModelChange"], ["emailReception", "ngModel"], ["for", "input-telephone", 1, "label"], ["fullWidth", "", "id", "input-telephone", "name", "telephone", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["telephone", "ngModel"], ["class", "row mb-2", 4, "ngIf"], ["for", "input-legalRepFname", 1, "label"], ["fullWidth", "", "id", "input-legalRepFname", "name", "legalRepFname", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["legalRepFname", "ngModel"], ["for", "input-legalRepLName", 1, "label"], ["fullWidth", "", "id", "input-legalRepLName", "name", "legalRepLName", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["legalRepLName", "ngModel"], ["for", "input-address", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-address", "name", "address", "nbInput", "", "type", "text", 3, "placeholder"], [1, "row", "mt-3"], [1, "col-8"], [1, "col-2"], ["nbButton", "", "fullWidth", "", "type", "button", "status", "primary", 3, "disabled", "click"], ["fullWidth", "", "nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], ["for", "input-fax", 1, "label"], ["fullWidth", "", "id", "input-fax", "name", "fax", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "status", "disabled", "ngModelChange"], ["fax", "ngModel"], ["for", "input-wasteManagerFName", 1, "label"], ["fullWidth", "", "id", "input-wasteManagerFName", "name", "wasteManagerFName", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["wasteManagerFName", "ngModel"], ["for", "input-wasteManagerLName", 1, "label"], ["fullWidth", "", "id", "input-wasteManagerLName", "name", "wasteManagerLName", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["wasteManagerLName", "ngModel"]],
        template: function ProfileCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileCompanyComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);

              return ctx.updateFirma(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Naziv Firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.company.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "PIB:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.company.pib = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Mati\u010Dni broj:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.company.mat = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.company.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ProfileCompanyComponent_ng_container_32_Template, 3, 2, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Email za prijem dokumenata:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "input", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_38_listener($event) {
              return ctx.company.emailReception = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ProfileCompanyComponent_ng_container_40_Template, 3, 2, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Telefon:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.company.telephone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ProfileCompanyComponent_ng_container_48_Template, 3, 2, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ProfileCompanyComponent_div_49_Template, 8, 7, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Ime zakonskog zastupnika:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "input", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_56_listener($event) {
              return ctx.company.legalRep.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, ProfileCompanyComponent_ng_container_58_Template, 3, 2, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Prezime zakonskog zastupnika:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileCompanyComponent_Template_input_ngModelChange_63_listener($event) {
              return ctx.company.legalRep.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, ProfileCompanyComponent_ng_container_65_Template, 3, 2, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, ProfileCompanyComponent_div_66_Template, 15, 16, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Adresa Firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileCompanyComponent_Template_button_click_76_listener() {
              return ctx.enableInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " IZMENI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "SA\u010CUVAJ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](39);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](57);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.pib);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.mat);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.email)("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r4.dirty ? _r4.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r4.invalid && _r4.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.emailReception)("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r6.dirty ? _r6.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r6.invalid && _r6.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.telephone)("maxlength", ctx.getConfigValue("forms.validation.phone.maxLength"))("minlength", ctx.getConfigValue("forms.validation.phone.minLength"))("required", ctx.getConfigValue("forms.validation.phone.required"))("status", _r8.dirty ? _r8.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r8.invalid && _r8.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.company.fax === "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.legalRep.firstName)("maxlength", ctx.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.firstName.minLength"))("required", ctx.getConfigValue("forms.validation.firstName.required"))("status", _r11.dirty ? _r11.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.company.legalRep.lastName)("maxlength", ctx.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.lastName.minLength"))("required", ctx.getConfigValue("forms.validation.lastName.required"))("status", _r13.dirty ? _r13.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.company.wasteManager !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.company.address.location.townshipName + ", " + ctx.company.address.location.placeName + ", " + ctx.company.address.street);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.inputsDisabled);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"]],
        styles: [".divider-left[_ngcontent-%COMP%] {\n  border-left: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS1jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRiIsImZpbGUiOiJwcm9maWxlLWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlci1sZWZ0IHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "SUjN":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/profile/profile-storages/profile-storages.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProfileStoragesComponent */

    /***/
    function SUjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileStoragesComponent", function () {
        return ProfileStoragesComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/storage.service */
      "7Oz7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _storage_containers_storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../storage-containers/storage-meter/storage-meter.component */
      "navU");

      function ProfileStoragesComponent_div_2_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Naziv Deponije:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Naziv Skladi\u0161ta za tretman:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Naziv Skladi\u0161ta za skladi\u0161tenje:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_label_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Naziv Skladi\u0161ta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_ng_container_12_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Naziv skladi\u0161ta je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileStoragesComponent_div_2_ng_container_12_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
        }
      }

      function ProfileStoragesComponent_div_2_ng_container_20_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Veli\u010Dina skladi\u0161ta je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileStoragesComponent_div_2_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileStoragesComponent_div_2_ng_container_20_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function ProfileStoragesComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileStoragesComponent_div_2_label_5_Template, 2, 0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileStoragesComponent_div_2_label_6_Template, 2, 0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileStoragesComponent_div_2_label_7_Template, 2, 0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProfileStoragesComponent_div_2_label_8_Template, 2, 0, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileStoragesComponent_div_2_Template_input_ngModelChange_10_listener($event) {
            var s_r2 = ctx.$implicit;
            return s_r2.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProfileStoragesComponent_div_2_ng_container_12_Template, 2, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Veli\u010Dina skladi\u0161ta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileStoragesComponent_div_2_Template_input_ngModelChange_18_listener($event) {
            var s_r2 = ctx.$implicit;
            return s_r2.maxAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProfileStoragesComponent_div_2_ng_container_20_Template, 2, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Adresa Skladi\u0161ta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "storage-meter", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var s_r2 = ctx.$implicit;

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", s_r2.__t);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "StorageDump");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "StorageTreatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "StorageCache");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", s_r2.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0))("maxlength", ctx_r1.getConfigValue("forms.validation.storageName.maxLength"))("minlength", ctx_r1.getConfigValue("forms.validation.storageName.minLength"))("required", ctx_r1.getConfigValue("forms.validation.storageName.required"))("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic")("disabled", ctx_r1.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", s_r2.maxAmount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0))("pattern", ctx_r1.getConfigValue("forms.validation.storageSize.pattern"))("required", ctx_r1.getConfigValue("forms.validation.storageSize.required"))("status", _r9.dirty ? _r9.invalid ? "danger" : "success" : "basic")("disabled", ctx_r1.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", s_r2.address.location.townshipName + ", " + s_r2.address.location.placeName + ", " + s_r2.address.street);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("storage", s_r2);
        }
      }

      var ProfileStoragesComponent = /*#__PURE__*/function () {
        function ProfileStoragesComponent(storageService, roleService) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, ProfileStoragesComponent);

          this.storageService = storageService;
          this.roleService = roleService;
          this.options = options;
          this.toastrService = toastrService;
          this.storages = [];
          this.inputsDisabled = true;
        }

        _createClass(ProfileStoragesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storageService.getCompaniesStorage(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (s) {
              _this2.storages = s;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "enableInputs",
          value: function enableInputs() {
            this.inputsDisabled = false;
          }
        }, {
          key: "updateStorage",
          value: function updateStorage(form) {
            var _this3 = this;

            if (!form.valid) this.showToast('Greška', 'Informacije koje ste uneli nisu tačne!', 'danger');else {
              this.storages.forEach(function (s) {
                return _this3.storageService.updateStorage(s, s._id).subscribe(function (x) {});
              });
              this.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
              this.inputsDisabled = true;
            }
          }
        }, {
          key: "showToast",
          value: function showToast(title, message, status) {
            this.toastrService.show(message, title, {
              status: status
            });
          }
        }]);

        return ProfileStoragesComponent;
      }();

      ProfileStoragesComponent.ɵfac = function ProfileStoragesComponent_Factory(t) {
        return new (t || ProfileStoragesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]));
      };

      ProfileStoragesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ProfileStoragesComponent,
        selectors: [["profile-storages"]],
        decls: 11,
        vars: 3,
        consts: [[3, "ngSubmit"], ["formStorage", "ngForm"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-8"], [1, "col-2"], ["nbButton", "", "status", "primary", "fullWidth", "", "type", "button", 3, "disabled", "click"], ["fullWidth", "", "nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], [1, "col-6"], [1, "row", "mb-2"], [1, "col-12", 3, "ngSwitch"], ["class", "label", "for", "input-storageName", 4, "ngSwitchCase"], ["class", "label", "for", "input-storageName", 4, "ngSwitchDefault"], ["fullWidth", "", "id", "input-storageName", "name", "storageName", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["storageName", "ngModel"], [4, "ngIf"], [1, "col-12"], ["for", "input-storageSize", 1, "label"], ["fullWidth", "", "id", "input-storageSize", "name", "storageSize", "nbInput", "", "type", "number", 3, "ngModel", "ngModelOptions", "pattern", "required", "status", "disabled", "ngModelChange"], ["storageSize", "ngModel"], ["for", "input-address", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-address", "name", "address", "nbInput", "", "type", "text", 3, "placeholder"], [3, "storage"], ["for", "input-storageName", 1, "label"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function ProfileStoragesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileStoragesComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);

              return ctx.updateStorage(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileStoragesComponent_div_2_Template, 31, 25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileStoragesComponent_Template_button_click_6_listener() {
              return ctx.enableInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " IZMENI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "SA\u010CUVAJ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.storages);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.inputsDisabled);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _storage_containers_storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_8__["StorageMeterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXN0b3JhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-user/profile-user.component */
      "cNON");
      /* harmony import */


      var _profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-company/profile-company.component */
      "ORcO");
      /* harmony import */


      var _profile_operations_profile_operations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-operations/profile-operations.component */
      "d23s");
      /* harmony import */


      var _profile_storages_profile_storages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile-storages/profile-storages.component */
      "SUjN");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(roleService, activatedRoute) {
          var _this4 = this;

          _classCallCheck(this, ProfileComponent);

          this.roleService = roleService;
          this.activatedRoute = activatedRoute;
          this.activatedRoute.params.subscribe(function (params) {
            _this4.activeTab = params.activeTab;
          });
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.roleService.getOperations().subscribe(function (x) {
              _this5.operations = x;
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["profile"]],
        decls: 10,
        vars: 5,
        consts: [["tabIcon", "person", "tabTitle", "Korisnik", 3, "active"], ["tabIcon", "briefcase", "tabTitle", "Firma", 3, "active"], ["tabIcon", "options", "tabTitle", "Operacije", 3, "active"], ["tabIcon", "cube", "tabTitle", "Skladi\u0161ta", 3, "active", "disabled"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "profile-user");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "profile-company");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "profile-operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "profile-storages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", ctx.activeTab === "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", ctx.activeTab === "company");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", ctx.activeTab === "operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("active", ctx.activeTab === "storages")("disabled", !((ctx.operations == null ? null : ctx.operations.production) || (ctx.operations == null ? null : ctx.operations.treatment) || (ctx.operations == null ? null : ctx.operations.disposal) || (ctx.operations == null ? null : ctx.operations.cache)));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], _profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_4__["ProfileUserComponent"], _profile_company_profile_company_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCompanyComponent"], _profile_operations_profile_operations_component__WEBPACK_IMPORTED_MODULE_6__["ProfileOperationsComponent"], _profile_storages_profile_storages_component__WEBPACK_IMPORTED_MODULE_7__["ProfileStoragesComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "cNON":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/profile/profile-user/profile-user.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProfileUserComponent */

    /***/
    function cNON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function () {
        return ProfileUserComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/user.service */
      "fo3O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileUserComponent_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_11_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Ime mora da bude du\u017Ee od ", ctx_r19.getConfigValue("forms.validation.firstName.minLength"), " a kra\u0107e od ", ctx_r19.getConfigValue("forms.validation.firstName.maxLength"), " ");
        }
      }

      function ProfileUserComponent_ng_container_11_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ime mora biti validno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_11_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_11_p_2_Template, 2, 2, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileUserComponent_ng_container_11_p_3_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.minlength) || (_r1.errors == null ? null : _r1.errors.maxlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.pattern);
        }
      }

      function ProfileUserComponent_ng_container_19_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prezime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_19_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Prezime mora da bude du\u017Ee od ", ctx_r22.getConfigValue("forms.validation.lastName.minLength"), " a kra\u0107e od ", ctx_r22.getConfigValue("forms.validation.lastName.maxLength"), " ");
        }
      }

      function ProfileUserComponent_ng_container_19_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Prezime mora biti validno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_19_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_19_p_2_Template, 2, 2, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileUserComponent_ng_container_19_p_3_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
        }
      }

      function ProfileUserComponent_ng_container_27_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_27_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_27_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_27_p_2_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
        }
      }

      function ProfileUserComponent_ng_container_35_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Korisni\u010Dko ime je obavezno! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_35_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Korisni\u010Dko ime mora da bude du\u017Ee od ", ctx_r27.getConfigValue("forms.validation.username.minLength"), " a kra\u0107e od ", ctx_r27.getConfigValue("forms.validation.username.maxLength"), " ");
        }
      }

      function ProfileUserComponent_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_35_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_35_p_2_Template, 2, 2, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r7.errors == null ? null : _r7.errors.minlength) || (_r7.errors == null ? null : _r7.errors.maxlength));
        }
      }

      function ProfileUserComponent_ng_container_43_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Telefon je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_43_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Telefon mora da bude du\u017Ei od ", ctx_r29.getConfigValue("forms.validation.phone.minLength"), " a kra\u0107i od ", ctx_r29.getConfigValue("forms.validation.phone.maxLength"), " ");
        }
      }

      function ProfileUserComponent_ng_container_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_43_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_43_p_2_Template, 2, 2, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r9.errors == null ? null : _r9.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r9.errors == null ? null : _r9.errors.minlength) || (_r9.errors == null ? null : _r9.errors.maxlength));
        }
      }

      function ProfileUserComponent_ng_container_55_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0160ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_55_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u0160ifra ne sme biti kra\u0107a od ", ctx_r31.getConfigValue("forms.validation.password.minLength"), "! ");
        }
      }

      function ProfileUserComponent_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_55_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_55_p_2_Template, 2, 1, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.minlength) || (_r11.errors == null ? null : _r11.errors.maxlength));
        }
      }

      function ProfileUserComponent_ng_container_63_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nova \u0161ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_63_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nova \u0161ifra ne mo\u017Ee da se podudara sa starom \u0161ifrom! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_63_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u0160ifra ne sme biti kra\u0107a od ", ctx_r34.getConfigValue("forms.validation.password.minLength"), "! ");
        }
      }

      function ProfileUserComponent_ng_container_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_63_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_63_p_2_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileUserComponent_ng_container_63_p_3_Template, 2, 1, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.value === _r11.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (_r13.errors == null ? null : _r13.errors.minlength) || (_r13.errors == null ? null : _r13.errors.maxlength));
        }
      }

      function ProfileUserComponent_ng_container_71_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ponovna \u0161ifra je obavezna! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_71_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0160ifra se ne poklapa sa ve\u0107 upisanom \u0161ifrom! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileUserComponent_ng_container_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileUserComponent_ng_container_71_p_1_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileUserComponent_ng_container_71_p_2_Template, 2, 0, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r15.errors == null ? null : _r15.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.value !== _r15.value);
        }
      }

      var ProfileUserComponent = /*#__PURE__*/function () {
        function ProfileUserComponent(userService) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var toastrService = arguments.length > 2 ? arguments[2] : undefined;
          var roleService = arguments.length > 3 ? arguments[3] : undefined;
          var authService = arguments.length > 4 ? arguments[4] : undefined;

          _classCallCheck(this, ProfileUserComponent);

          this.userService = userService;
          this.options = options;
          this.toastrService = toastrService;
          this.roleService = roleService;
          this.authService = authService;
          this.showPassword = 'eye';
          this.oldPassword = '';
          this.newPassword = '';
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
          this.inputsDisabled = true;
        }

        _createClass(ProfileUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.userService.getUserProfile(this.roleService.getUsername()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (k) {
              _this6.user = k;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "enableInputs",
          value: function enableInputs() {
            this.inputsDisabled = false;
          }
        }, {
          key: "setNewPassword",
          value: function setNewPassword(button) {
            var _this7 = this;

            if (this.oldPassword === this.newPassword) {
              this.showToast('Greška', 'Stara šifra ne sme da se podudara sa novom šifrom!', 'danger');
              return;
            }

            button.disabled = true;
            this.userService.changePassword(this.user._id, this.oldPassword, this.newPassword).subscribe(function (x) {
              if (x) _this7.showToast('Uspeh', 'Uspešno ste promenili šifru!', 'success');else _this7.showToast('Greška', 'Proverite šifru!', 'danger');
            }, function (err) {
              _this7.showToast('Greška', 'Proverite šifru!', 'danger');
            });
            button.disabled = false;
          }
        }, {
          key: "updateUser",
          value: function updateUser(form) {
            if (!form.valid) this.showToast('Greška', 'Informacije koje ste uneli nisu tačne!', 'danger');else {
              this.userService.updateUser(this.user, this.user.username, 'username').subscribe(function (k) {});
              this.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
              this.inputsDisabled = true; // When user data is changed it has to generate a new token!

              var token = null;
              this.authService.getToken().subscribe(function (t) {
                token = t;
              });
              this.authService.refreshToken('email', token).subscribe(function (x) {});
            }
          }
        }, {
          key: "showToast",
          value: function showToast(title, message, status) {
            this.toastrService.show(message, title, {
              status: status
            });
          }
        }]);

        return ProfileUserComponent;
      }();

      ProfileUserComponent.ɵfac = function ProfileUserComponent_Factory(t) {
        return new (t || ProfileUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NbAuthService"]));
      };

      ProfileUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ProfileUserComponent,
        selectors: [["profile-user"]],
        decls: 85,
        vars: 66,
        consts: [[3, "ngSubmit"], ["formUser", "ngForm"], [1, "row"], [1, "col-6"], [1, "row", "mb-2"], [1, "col-12"], ["for", "input-firstName", 1, "label"], [1, "col-8"], ["fullWidth", "", "id", "input-firstName", "name", "firstName", "nbInput", "", "onkeypress", "return /[a-zA-Z\u010D\u0107\u017E\u0111\u0161\u0160\u0110\u017D\u0106\u010C]/i.test(event.key)", "type", "text", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "disabled", "ngModelChange"], ["firstName", "ngModel"], [4, "ngIf"], ["for", "input-lastName", 1, "label"], ["fullWidth", "", "id", "input-lastName", "name", "lastName", "nbInput", "", "onkeypress", "return /[a-zA-Z\u010D\u0107\u017E\u0111\u0161\u0160\u0110\u017D\u0106\u010C]/i.test(event.key)", "type", "text", 3, "ngModel", "maxlength", "minlength", "pattern", "required", "status", "disabled", "ngModelChange"], ["lastName", "ngModel"], ["for", "input-email", 1, "label"], ["fullWidth", "", "id", "input-email", "name", "email", "nbInput", "", "type", "text", 3, "ngModel", "pattern", "required", "status", "disabled", "ngModelChange"], ["email", "ngModel"], ["for", "input-username", 1, "label"], ["fullWidth", "", "id", "input-username", "name", "username", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["username", "ngModel"], ["for", "input-phone", 1, "label"], ["fullWidth", "", "id", "input-phone", "name", "phone", "nbInput", "", "type", "text", 3, "ngModel", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["phone", "ngModel"], ["for", "input-oldPassword", 1, "label", "col-12"], [1, "col-6", "pr-0"], ["fullWidth", "", "id", "input-oldPassword", "name", "oldPassword", "nbInput", "", "placeholder", "\u0160ifra", 3, "ngModel", "maxlength", "minlength", "required", "status", "type", "ngModelChange"], ["oldPasswordModel", "ngModel"], [1, "col-2", "pl-0"], ["fullWidth", "", "tabindex", "-1", "nbButton", "", "type", "button", 3, "click"], [3, "icon"], ["for", "input-password", 1, "label", "col-12"], ["fullWidth", "", "id", "input-password", "name", "newPassword", "nbInput", "", "placeholder", "\u0160ifra", 3, "ngModel", "maxlength", "minlength", "required", "status", "type", "ngModelChange"], ["passwordModel", "ngModel"], ["for", "input-rePassword", 1, "label", "col-12"], ["fullWidth", "", "id", "input-rePassword", "name", "rePass", "nbInput", "", "placeholder", "Potvrdi \u0161ifru", 3, "ngModel", "required", "status", "type", "ngModelChange"], ["retypePasswordModel", "ngModel"], [1, "row", "mt-2"], ["nbButton", "", "type", "button", "status", "success", 3, "click"], ["ResetPassword", ""], [1, "col-2"], ["nbButton", "", "fullWidth", "", "type", "button", "status", "primary", 3, "disabled", "click"], ["fullWidth", "", "nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function ProfileUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileUserComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);

              return ctx.updateUser(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.user.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProfileUserComponent_ng_container_11_Template, 4, 3, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Prezime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.user.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProfileUserComponent_ng_container_19_Template, 4, 3, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProfileUserComponent_ng_container_27_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Korisni\u010Dko ime:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.user.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ProfileUserComponent_ng_container_35_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Telefon:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.user.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ProfileUserComponent_ng_container_43_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Trenutna \u0161ifra:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_49_listener($event) {
              return ctx.oldPassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileUserComponent_Template_button_click_52_listener() {
              return ctx.showPassword = ctx.showPassword === "eye" ? "eye-off" : "eye";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "nb-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, ProfileUserComponent_ng_container_55_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Nova \u0161ifra:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_60_listener($event) {
              return ctx.newPassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, ProfileUserComponent_ng_container_63_Template, 4, 3, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Ponovi \u0161ifru:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileUserComponent_Template_input_ngModelChange_68_listener($event) {
              return ctx.retypePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, ProfileUserComponent_ng_container_71_Template, 3, 2, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileUserComponent_Template_button_click_74_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);

              var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](75);

              return ctx.setNewPassword(_r17);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Promeni \u0161ifru ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileUserComponent_Template_button_click_80_listener() {
              return ctx.enableInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " IZMENI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "SA\u010CUVAJ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](26);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](34);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user.firstName)("maxlength", ctx.getConfigValue("forms.validation.firstName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.firstName.minLength"))("pattern", ctx.getConfigValue("forms.validation.firstName.pattern"))("required", ctx.getConfigValue("forms.validation.firstName.required"))("status", _r1.dirty ? _r1.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r1.invalid && _r1.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user.lastName)("maxlength", ctx.getConfigValue("forms.validation.lastName.maxLength"))("minlength", ctx.getConfigValue("forms.validation.lastName.minLength"))("pattern", ctx.getConfigValue("forms.validation.lastName.pattern"))("required", ctx.getConfigValue("forms.validation.lastName.required"))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user.email)("pattern", ctx.getConfigValue("forms.validation.email.pattern"))("required", ctx.getConfigValue("forms.validation.email.required"))("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user.username)("maxlength", ctx.getConfigValue("forms.validation.username.maxLength"))("minlength", ctx.getConfigValue("forms.validation.username.minLength"))("required", ctx.getConfigValue("forms.validation.username.required"))("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user.phone)("maxlength", ctx.getConfigValue("forms.validation.phone.maxLength"))("minlength", ctx.getConfigValue("forms.validation.telefon.minLength"))("required", ctx.getConfigValue("forms.validation.telefon.required"))("status", _r9.dirty ? _r9.invalid ? "danger" : "success" : "basic")("disabled", ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.oldPassword)("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r11.dirty ? _r11.invalid ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r11.invalid && _r11.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newPassword)("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r13.dirty ? _r13.invalid || ctx.newPassword === ctx.oldPassword ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r13.invalid && _r13.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched || _r13.value === _r11.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.retypePassword)("required", ctx.getConfigValue("forms.validation.password.required"))("status", _r15.dirty ? _r15.invalid || _r13.value !== _r15.value ? "danger" : "success" : "basic")("type", ctx.showPassword === "eye" ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r15.invalid && _r15.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r15.invalid && _r13.touched || _r13.value !== _r15.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.inputsDisabled);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"]],
        styles: [".error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "d23s":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/profile/profile-operations/profile-operations.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ProfileOperationsComponent */

    /***/
    function d23s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileOperationsComponent", function () {
        return ProfileOperationsComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/company.service */
      "wH5/");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function ProfileOperationsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileOperationsComponent_div_4_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.company.operations[i_r4] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.company.operations[i_r4])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function ProfileOperationsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileOperationsComponent_div_5_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r8.disableButton(_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Dodaj ostale operacije za Posebne tokove otpada");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileOperationsComponent_div_6_nb_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Proizvodnja Posebnih Tokova Otpada");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "Proizvodnja Posebnih Tokova Otpada");
        }
      }

      function ProfileOperationsComponent_div_6_nb_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Izvoz Posebnih Tokova Otpada");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "Izvoz Posebnih Tokova Otpada");
        }
      }

      function ProfileOperationsComponent_div_6_nb_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Uvoz Posebnih Tokova Otpada");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "Uvoz Posebnih Tokova Otpada");
        }
      }

      function ProfileOperationsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Odaberi operacije koje nedostaju: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function ProfileOperationsComponent_div_6_Template_nb_select_selectedChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r13.addSpecialWasteOperation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileOperationsComponent_div_6_nb_option_6_Template, 2, 1, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProfileOperationsComponent_div_6_nb_option_7_Template, 2, 1, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProfileOperationsComponent_div_6_nb_option_8_Template, 2, 1, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.operations.specialWasteOperations.production);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.operations.specialWasteOperations["export"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.operations.specialWasteOperations["import"]);
        }
      }

      var ProfileOperationsComponent = /*#__PURE__*/function () {
        function ProfileOperationsComponent(companyService) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var toastrService = arguments.length > 2 ? arguments[2] : undefined;
          var roleService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, ProfileOperationsComponent);

          this.companyService = companyService;
          this.options = options;
          this.toastrService = toastrService;
          this.roleService = roleService;
          this.company = {
            address: {
              location: undefined,
              street: ''
            },
            email: '',
            emailReception: '',
            legalRep: {
              firstName: '',
              lastName: ''
            },
            manager: '',
            mat: '',
            name: '',
            nriz: {
              password: '',
              username: ''
            },
            occupation: undefined,
            operations: [],
            pib: '',
            telephone: ''
          };
          this.showAddOperations = false;
        }

        _createClass(ProfileOperationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.companyService.getCompany(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (f) {
              _this8.company = f;
            });
            this.roleService.getOperations(undefined, undefined, true).subscribe(function (o) {
              _this8.operations = o;
              console.log(o);
            });
          }
        }, {
          key: "disableButton",
          value: function disableButton(button) {
            button.disabled = true;
            this.showAddOperations = true;
          }
        }, {
          key: "addSpecialWasteOperation",
          value: function addSpecialWasteOperation(operation) {
            var _this9 = this;

            this.company.operations.push(operation);
            this.companyService.updateCompany(this.company, this.company._id).subscribe(function (x) {});
            this.roleService.getOperations(this.company.operations, undefined, true).subscribe(function (o) {
              _this9.operations = o;
            });
            this.roleService.loginUser();
            if (this.operations.specialWasteOperations.production && this.operations.specialWasteOperations["export"] && this.operations.specialWasteOperations["import"]) this.showAddOperations = false;
          }
        }]);

        return ProfileOperationsComponent;
      }();

      ProfileOperationsComponent.ɵfac = function ProfileOperationsComponent_Factory(t) {
        return new (t || ProfileOperationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]));
      };

      ProfileOperationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ProfileOperationsComponent,
        selectors: [["profile-operations"]],
        decls: 7,
        vars: 3,
        consts: [[1, "row"], [1, "col-12"], [1, "label"], ["class", "col-6 my-1", 4, "ngFor", "ngForOf"], ["class", "row mt-3", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-6", "my-1"], ["nbInput", "", "type", "text", "disabled", "", "fullWidth", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "row", "mt-3"], ["nbButton", "", "status", "success", 3, "click"], ["addSpecialWasteOperationButton", ""], ["fullWidth", "", 3, "selectedChange"], [3, "value", 4, "ngIf"], [3, "value"]],
        template: function ProfileOperationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Rad firme:");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileOperationsComponent_div_4_Template, 2, 3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileOperationsComponent_div_5_Template, 5, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileOperationsComponent_div_6_Template, 9, 3, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.company.operations);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.operations.operations.specialWaste && (!ctx.operations.specialWasteOperations.production || !ctx.operations.specialWasteOperations["export"] || !ctx.operations.specialWasteOperations["import"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAddOperations);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbOptionComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLW9wZXJhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "dHrd":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/profile/profile-vehicles/profile-vehicles.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProfileVehiclesComponent */

    /***/
    function dHrd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileVehiclesComponent", function () {
        return ProfileVehiclesComponent;
      });
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/vehicle.service */
      "H5EB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileVehiclesComponent_div_6_ng_container_10_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Registarski broj tablice je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileVehiclesComponent_div_6_ng_container_10_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Registarski broj tablice mora biti validan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function ProfileVehiclesComponent_div_6_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileVehiclesComponent_div_6_ng_container_10_p_1_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileVehiclesComponent_div_6_ng_container_10_p_2_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function ProfileVehiclesComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Registarski broj tablice:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProfileVehiclesComponent_div_6_Template_input_ngModelChange_8_listener($event) {
            var p_r2 = ctx.$implicit;
            return p_r2.licensePlate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfileVehiclesComponent_div_6_ng_container_10_Template, 3, 2, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Vrsta vozila:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r2 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", p_r2.licensePlate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0))("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("disabled", ctx_r1.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", p_r2.type);
        }
      }

      var ProfileVehiclesComponent = /*#__PURE__*/function () {
        function ProfileVehiclesComponent(vehicleService, roleService) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, ProfileVehiclesComponent);

          this.vehicleService = vehicleService;
          this.roleService = roleService;
          this.options = options;
          this.toastrService = toastrService;
          this.vehicles = [];
          this.inputsDisabled = true;
        }

        _createClass(ProfileVehiclesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.vehicleService.getCompaniesVehicles(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (s) {
              _this10.vehicles = s;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "enableInputs",
          value: function enableInputs() {
            this.inputsDisabled = false;
          }
        }, {
          key: "updatePrevoznoSredstvo",
          value: function updatePrevoznoSredstvo(form) {
            var _this11 = this;

            if (!form.valid) this.showToast('Greška', 'Informacije koje ste uneli nisu tačne!', 'danger');else {
              this.vehicles.forEach(function (p) {
                return _this11.vehicleService.updateVehicle(p, p._id).subscribe(function (x) {});
              });
              this.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
              this.inputsDisabled = true; // When korisnik data is changed it has to generate a new token!
            }
          }
        }, {
          key: "showToast",
          value: function showToast(title, message, status) {
            this.toastrService.show(message, title, {
              status: status
            });
          }
        }]);

        return ProfileVehiclesComponent;
      }();

      ProfileVehiclesComponent.ɵfac = function ProfileVehiclesComponent_Factory(t) {
        return new (t || ProfileVehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_0__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]));
      };

      ProfileVehiclesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ProfileVehiclesComponent,
        selectors: [["profile-vehicle"]],
        decls: 15,
        vars: 3,
        consts: [[3, "ngSubmit"], ["formVehicle", "ngForm"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-8"], [1, "col-2"], ["nbButton", "", "fullWidth", "", "type", "button", "status", "primary", 3, "disabled", "click"], ["fullWidth", "", "nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], [1, "row", "mt-3"], [1, "col-6"], [1, "row", "mb-2"], [1, "col-12"], ["for", "input-licensePlate", 1, "label"], ["required", "", "pattern", "([A-\u017D]{2})-(\\d{3,4})-([A-\u017D]{2})", "fullWidth", "", "id", "input-licensePlate", "name", "licensePlate", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "status", "disabled", "ngModelChange"], ["licensePlate", "ngModel"], [4, "ngIf"], ["for", "input-type", 1, "label"], ["fullWidth", "", "disabled", "", "id", "input-type", "name", "type", "nbInput", "", "type", "text", 3, "placeholder"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"]],
        template: function ProfileVehiclesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vozila");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileVehiclesComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

              return ctx.updatePrevoznoSredstvo(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileVehiclesComponent_div_6_Template, 17, 8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileVehiclesComponent_Template_button_click_10_listener() {
              return ctx.enableInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " IZMENI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "SA\u010CUVAJ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.vehicles);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.inputsDisabled);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXZlaGljbGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "gvza":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/profile/profile-permits/profile-permits.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ProfilePermitsComponent */

    /***/
    function gvza(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePermitsComponent", function () {
        return ProfilePermitsComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_permit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/permit.service */
      "bS1W");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _popup_windows_view_permits_trash_popup_view_permits_trash_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../popup-windows/view-permits-trash-popup/view-permits-trash-popup.component */
      "kBrA");

      var _c0 = ["viewTrash"];

      function ProfilePermitsComponent_div_6_ng_container_10_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Naziv dozvole je obavezan! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProfilePermitsComponent_div_6_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfilePermitsComponent_div_6_ng_container_10_p_1_Template, 2, 0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.required);
        }
      }

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function ProfilePermitsComponent_div_6_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skladi\u0161te:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfilePermitsComponent_div_6_div_34_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return d_r4.storage.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", d_r4.storage.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));
        }
      }

      function ProfilePermitsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Naziv dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfilePermitsComponent_div_6_Template_input_ngModelChange_8_listener($event) {
            var d_r4 = ctx.$implicit;
            return d_r4.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProfilePermitsComponent_div_6_ng_container_10_Template, 2, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0160ifra dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfilePermitsComponent_div_6_Template_input_ngModelChange_16_listener($event) {
            var d_r4 = ctx.$implicit;
            return d_r4.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Datum trajanja dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Vrsta dozvole:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfilePermitsComponent_div_6_Template_input_ngModelChange_33_listener($event) {
            var d_r4 = ctx.$implicit;
            return d_r4.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProfilePermitsComponent_div_6_div_34_Template, 6, 3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePermitsComponent_div_6_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var d_r4 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.openPermitsTrashWindow(d_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Pogledaj listu otpada ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r4 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", d_r4.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1))("maxlength", ctx_r1.getConfigValue("forms.validation.permitName.maxLength"))("minlength", ctx_r1.getConfigValue("forms.validation.permitName.minLength"))("required", ctx_r1.getConfigValue("forms.validation.permitName.required"))("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("disabled", ctx_r1.inputsDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", d_r4.code)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r1.getDate(d_r4.dateCreation));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r1.getDate(d_r4.dateExpiration));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", d_r4.type)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r4.storage !== undefined);
        }
      }

      function ProfilePermitsComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "view-permits-trash-popup", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("callUpdatePermitsTrash", function ProfilePermitsComponent_ng_template_15_Template_view_permits_trash_popup_callUpdatePermitsTrash_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.updatePermitsTrashMethod($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedPermit", ctx_r3.selectedPermit);
        }
      }

      var ProfilePermitsComponent = /*#__PURE__*/function () {
        function ProfilePermitsComponent(permitService, roleService) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;
          var datePipe = arguments.length > 4 ? arguments[4] : undefined;
          var windowService = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, ProfilePermitsComponent);

          this.permitService = permitService;
          this.roleService = roleService;
          this.options = options;
          this.toastrService = toastrService;
          this.datePipe = datePipe;
          this.windowService = windowService;
          this.permits = [];
          this.inputsDisabled = true;
        }

        _createClass(ProfilePermitsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.permitService.getCompaniesPermits(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (d) {
              _this12.permits = d;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "enableInputs",
          value: function enableInputs() {
            this.inputsDisabled = false;
          }
        }, {
          key: "updatePermits",
          value: function updatePermits(form) {
            var _this13 = this;

            if (!form.valid) this.showToast('Greška', 'Informacije koje ste uneli nisu tačne!', 'danger');else {
              this.permits.forEach(function (d) {
                return _this13.permitService.updatePermit(d, d._id).subscribe(function (x) {});
              });
              this.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
              this.inputsDisabled = true;
            }
          }
        }, {
          key: "openPermitsTrashWindow",
          value: function openPermitsTrashWindow(permit) {
            this.selectedPermit = permit;
            this.windowRef = this.windowService.open(this.viewTrash, {
              title: 'Lista otpada'
            });
          }
        }, {
          key: "updatePermitsTrashMethod",
          value: function updatePermitsTrashMethod(trashList) {
            this.selectedPermit.trashList = trashList;
            this.permitService.updatePermit(this.selectedPermit, this.selectedPermit._id).subscribe(function (x) {});
            this.showToast('Uspeh', 'Uspešno ste izmenili informacije!', 'success');
            this.windowRef.close();
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return this.datePipe.transform(date, 'dd-MM-yyyy');
          }
        }, {
          key: "showToast",
          value: function showToast(title, message, status) {
            this.toastrService.show(message, title, {
              status: status
            });
          }
        }]);

        return ProfilePermitsComponent;
      }();

      ProfilePermitsComponent.ɵfac = function ProfilePermitsComponent_Factory(t) {
        return new (t || ProfilePermitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_service_permit_service__WEBPACK_IMPORTED_MODULE_5__["PermitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"]));
      };

      ProfilePermitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfilePermitsComponent,
        selectors: [["profile-permit"]],
        viewQuery: function ProfilePermitsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.viewTrash = _t.first);
          }
        },
        decls: 17,
        vars: 3,
        consts: [[3, "ngSubmit"], ["formPermit", "ngForm"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-8"], [1, "col-2"], ["nbButton", "", "fullWidth", "", "type", "button", "status", "primary", 3, "disabled", "click"], ["fullWidth", "", "nbButton", "", "status", "primary", "type", "submit", 3, "disabled"], ["viewTrash", ""], [1, "col-6"], [1, "row", "mb-2"], [1, "col-12"], ["for", "input-permitName", 1, "label"], ["fullWidth", "", "id", "input-permitName", "name", "permitName", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "maxlength", "minlength", "required", "status", "disabled", "ngModelChange"], ["permitName", "ngModel"], [4, "ngIf"], ["for", "input-permitCode", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-permitCode", "name", "permitCode", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "input-dateCreation", 1, "label"], [1, "col-5", "mr-0", "pr-0"], ["disabled", "", "fullWidth", "", "id", "input-dateCreation", "name", "dateCreation", "nbInput", "", "type", "text", 3, "placeholder"], ["disabled", "", "nbButton", "", 1, "mx-0", "px-0", "col-1"], [1, "col-5", "ml-0", "pl-0"], ["disabled", "", "fullWidth", "", "id", "input-dateExpiration", "name", "dateExpiration", "nbInput", "", "type", "text", 3, "placeholder"], ["for", "input-permiType", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-permiType", "name", "permiType", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "row mb-2", 4, "ngIf"], [1, "label"], ["nbButton", "", "fullWidth", "", "status", "success", "type", "button", 3, "click"], ["class", "error-message mt-1 mb-0", 4, "ngIf"], [1, "error-message", "mt-1", "mb-0"], ["for", "input-permitStorage", 1, "label"], ["disabled", "", "fullWidth", "", "id", "input-permitStorage", "name", "permitStorage", "nbInput", "", "type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "selectedPermit", "callUpdatePermitsTrash"]],
        template: function ProfilePermitsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dozvole");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfilePermitsComponent_Template_form_ngSubmit_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return ctx.updatePermits(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfilePermitsComponent_div_6_Template, 41, 19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfilePermitsComponent_Template_button_click_10_listener() {
              return ctx.enableInputs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " IZMENI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "SA\u010CUVAJ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProfilePermitsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.permits);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.inputsDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.inputsDisabled);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _popup_windows_view_permits_trash_popup_view_permits_trash_popup_component__WEBPACK_IMPORTED_MODULE_8__["ViewPermitsTrashPopupComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXBlcm1pdHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "l9zX":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/profile/permit-renewal/permit-renewal.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PermitRenewalComponent */

    /***/
    function l9zX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermitRenewalComponent", function () {
        return PermitRenewalComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_service_permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../@core/service/permit.service */
      "bS1W");
      /* harmony import */


      var _core_service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../@core/service/role.service */
      "ud2R");
      /* harmony import */


      var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../@core/service/toastr.service */
      "7wOV");
      /* harmony import */


      var _core_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../@core/service/user.service */
      "fo3O");
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

      function PermitRenewalComponent_div_18_nb_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", p_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r4.code + "|" + p_r4.name);
        }
      }

      function PermitRenewalComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Odaberite dozvolu koju \u017Eelite da obnovite: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_div_18_Template_nb_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r5.selectedPermit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, PermitRenewalComponent_div_18_nb_option_9_Template, 2, 2, "nb-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.selectedPermit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 2, ctx_r0.permits$));
        }
      }

      function PermitRenewalComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Odaberite vrstu otpada: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-radio-group", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_div_19_Template_nb_radio_group_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r7.trashType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nb-radio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Neopasni otpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-radio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Opasni otpad");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Odaberite vrstu dozvole koju \u017Eelite da izradite: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_div_19_Template_nb_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.permitType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Transport");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Sakupljac");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Tretman");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Odlaganje");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nb-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Skladi\u0161tenje");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.trashType);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "unsafe");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.permitType);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "transport");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "collector");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "treatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "disposal");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "cache");
        }
      }

      function PermitRenewalComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Email za kontakt: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_div_20_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Napomena:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_div_20_Template_textarea_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.message);
        }
      }

      var PermitRenewalComponent = /*#__PURE__*/function () {
        function PermitRenewalComponent(permitService, roleService, userService, router, toastrService) {
          _classCallCheck(this, PermitRenewalComponent);

          this.permitService = permitService;
          this.roleService = roleService;
          this.userService = userService;
          this.router = router;
          this.toastrService = toastrService;
        }

        _createClass(PermitRenewalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.permitService.getCompaniesPermits(this.roleService.getCompanyID()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (p) {
              _this14.permits = p;
              _this14.permits$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this14.permits);
            });
            var username = this.roleService.getUsername();
            this.userService.getUser(username, 'username').subscribe(function (u) {
              _this14.email = u.email;
            });
          }
        }, {
          key: "sendRequest",
          value: function sendRequest() {
            var _this15 = this;

            if (this.requestType === 'renewal') this.permitService.sendPermitRequest(this.email, this.message, this.requestType, this.selectedPermit._id).subscribe(function (b) {
              if (b) {
                _this15.toastrService.showToast('Uspeh', 'Uspešno ste poslali zahtev!', 'success');

                setTimeout(function () {
                  _this15.router.navigate(['pages']);
                }, 1500);
              } else {
                _this15.toastrService.showToast('Greška', 'Pogledajte opet sve informacije!', 'warning');
              }
            }, function (err) {
              _this15.toastrService.showToast('Greška', 'Pogledajte opet sve informacije!', 'warning');
            });else this.permitService.sendPermitRequest(this.email, this.message, this.requestType, undefined, this.trashType, this.permitType).subscribe(function (b) {
              if (b) {
                _this15.toastrService.showToast('Uspeh', 'Uspešno ste poslali zahtev!', 'success');

                setTimeout(function () {
                  _this15.router.navigate(['pages']);
                }, 1500);
              } else {
                _this15.toastrService.showToast('Greška', 'Pogledajte opet sve informacije!', 'warning');
              }
            }, function (err) {
              _this15.toastrService.showToast('Greška', 'Pogledajte opet sve informacije!', 'warning');
            });
          }
        }]);

        return PermitRenewalComponent;
      }();

      PermitRenewalComponent.ɵfac = function PermitRenewalComponent_Factory(t) {
        return new (t || PermitRenewalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_permit_service__WEBPACK_IMPORTED_MODULE_3__["PermitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
      };

      PermitRenewalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: PermitRenewalComponent,
        selectors: [["permit-renewal"]],
        decls: 25,
        vars: 6,
        consts: [[1, "container-fluid"], [3, "ngSubmit"], [1, "row", "my-1"], [1, "col-6"], [1, "row"], [1, "col-12"], ["for", "input-requestType", 1, "label"], ["id", "input-requestType", "name", "requestType", 3, "ngModel", "ngModelChange"], [3, "value"], [4, "ngIf"], [1, "row", "mt-3", "justify-content-end", "d-flex"], [1, "col-3"], ["nbButton", "", "fullWidth", "", "status", "primary", "type", "submit"], ["for", "input-permitSelect", 1, "label"], ["placeholder", "Dozvola #1", "name", "permitSelect", "fullWidth", "", "required", "", "id", "input-permitSelect", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-trashType", 1, "label"], ["id", "input-trashType", "name", "trashType", 3, "ngModel", "ngModelChange"], ["for", "input-permitCreate", 1, "label"], ["placeholder", "Vrsta dozvole", "name", "permitType", "fullWidth", "", "required", "", "id", "input-permitCreate", 3, "ngModel", "ngModelChange"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "input-email", "required", "", "type", "email", "disabled", "", "name", "email", 3, "ngModel", "ngModelChange"], ["for", "input-message", 1, "label"], ["id", "input-message", "name", "message", "placeholder", "Napomena u vezi dozvole...", "nbInput", "", "fullWidth", "", "type", "text", 3, "ngModel", "ngModelChange"]],
        template: function PermitRenewalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Zahtev za obnovu/izradu dozvole");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function PermitRenewalComponent_Template_form_ngSubmit_5_listener() {
              return ctx.sendRequest();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Odaberite vrstu zahteva: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "nb-radio-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PermitRenewalComponent_Template_nb_radio_group_ngModelChange_13_listener($event) {
              return ctx.requestType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nb-radio", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Obnova");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nb-radio", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Izrada");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PermitRenewalComponent_div_18_Template, 11, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, PermitRenewalComponent_div_19_Template, 31, 9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PermitRenewalComponent_div_20_Template, 17, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Po\u0161alji zahtev");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.requestType);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "renewal");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "creation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.requestType === "renewal");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.requestType === "creation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.requestType !== "");
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXQtcmVuZXdhbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "x0XS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function x0XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _permit_renewal_permit_renewal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./permit-renewal/permit-renewal.component */
      "l9zX");
      /* harmony import */


      var _profile_permits_profile_permits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-permits/profile-permits.component */
      "gvza");
      /* harmony import */


      var _profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-vehicles/profile-vehicles.component */
      "dHrd");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.component */
      "Y5Lh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'vehicles',
        component: _profile_vehicles_profile_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["ProfileVehiclesComponent"],
        pathMatch: 'full'
      }, {
        path: 'permits',
        component: _profile_permits_profile_permits_component__WEBPACK_IMPORTED_MODULE_2__["ProfilePermitsComponent"],
        pathMatch: 'full'
      }, {
        path: 'permit-renewal',
        component: _permit_renewal_permit_renewal_component__WEBPACK_IMPORTED_MODULE_1__["PermitRenewalComponent"]
      }, {
        path: ':activeTab',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map