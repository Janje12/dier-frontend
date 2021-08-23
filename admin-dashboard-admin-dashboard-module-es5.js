(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-dashboard-admin-dashboard-module"], {
    /***/
    "Dap0":
    /*!*******************************************************************************!*\
      !*** ./src/app/admin-pages/admin-dashboard/admin-dashboard-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AdminDashboardRoutingModule */

    /***/
    function Dap0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function () {
        return AdminDashboardRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      "UvTl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"]
      }];

      var AdminDashboardRoutingModule = function AdminDashboardRoutingModule() {
        _classCallCheck(this, AdminDashboardRoutingModule);
      };

      AdminDashboardRoutingModule.ɵfac = function AdminDashboardRoutingModule_Factory(t) {
        return new (t || AdminDashboardRoutingModule)();
      };

      AdminDashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AdminDashboardRoutingModule
      });
      AdminDashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminDashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "LaSW":
    /*!***********************************************************************!*\
      !*** ./src/app/admin-pages/admin-dashboard/admin-dashboard.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminDashboardModule */

    /***/
    function LaSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function () {
        return AdminDashboardModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-dashboard-routing.module */
      "Dap0");
      /* harmony import */


      var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-dashboard/admin-dashboard.component */
      "UvTl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminDashboardModule = function AdminDashboardModule() {
        _classCallCheck(this, AdminDashboardModule);
      };

      AdminDashboardModule.ɵfac = function AdminDashboardModule_Factory(t) {
        return new (t || AdminDashboardModule)();
      };

      AdminDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AdminDashboardModule
      });
      AdminDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminDashboardModule, {
          declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "UvTl":
    /*!******************************************************************************************!*\
      !*** ./src/app/admin-pages/admin-dashboard/admin-dashboard/admin-dashboard.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function UvTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent() {
          _classCallCheck(this, AdminDashboardComponent);
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)();
      };

      AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["ngx-admin-dashboard"]],
        decls: 2,
        vars: 0,
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-dashboard works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-dashboard-admin-dashboard-module-es5.js.map