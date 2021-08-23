(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-pages-admin-module~pages-pages-module"],{

/***/ "0Fcs":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-disposal/storage-disposal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StorageDisposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageDisposalComponent", function() { return StorageDisposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/role.service */ "ud2R");
/* harmony import */ var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/service/toastr.service */ "7wOV");
/* harmony import */ var _core_service_trash_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/service/trash.service */ "Lx1j");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _core_service_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/service/transactions.service */ "TOXQ");
/* harmony import */ var _storage_edit_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage-edit.settings */ "TC2/");
/* harmony import */ var _storage_disposal_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage-disposal.settings */ "ARfV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storage-meter/storage-meter.component */ "navU");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../popup-windows/add-trash-popup/add-trash-popup.component */ "xsDJ");
/* harmony import */ var _popup_windows_process_trash_popup_process_trash_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../popup-windows/process-trash-popup/process-trash-popup.component */ "+HCH");
/* harmony import */ var _popup_windows_leftover_trash_popup_leftover_trash_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../popup-windows/leftover-trash-popup/leftover-trash-popup.component */ "J0/g");























const _c0 = ["addTrashTemplate"];
const _c1 = ["disposeTrashTemplate"];
const _c2 = ["leftoverTrashTemplate"];
function StorageDisposalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "storage-meter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageDisposalComponent_div_1_Template_nb_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng2-smart-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("custom", function StorageDisposalComponent_div_1_Template_ng2_smart_table_custom_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.chooseAction($event, s_r7); })("editConfirm", function StorageDisposalComponent_div_1_Template_ng2_smart_table_editConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.updateTrash($event, s_r7); })("deleteConfirm", function StorageDisposalComponent_div_1_Template_ng2_smart_table_deleteConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deleteTrash($event, s_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storage", s_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r7 == null ? null : s_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.editIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.currentSettings)("source", s_r7 == null ? null : s_r7.trashes);
} }
function StorageDisposalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "add-trash-popup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callAddTrash", function StorageDisposalComponent_ng_template_3_Template_add_trash_popup_callAddTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "disposal")("selectedTrash", ctx_r2.selectedTrash);
} }
function StorageDisposalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "process-trash-popup", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callProcessTrash", function StorageDisposalComponent_ng_template_5_Template_process_trash_popup_callProcessTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.disposeTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTrash", ctx_r4.selectedTrash);
} }
function StorageDisposalComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "leftover-trash-popup", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callLeftoverTrash", function StorageDisposalComponent_ng_template_7_Template_leftover_trash_popup_callLeftoverTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.leftoverTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTrash", ctx_r6.selectedTrash)("storageProduction", ctx_r6.storage);
} }
class StorageDisposalComponent {
    constructor(storageService, windowService, trashService, roleService, toastrService, transactionsService) {
        this.storageService = storageService;
        this.windowService = windowService;
        this.trashService = trashService;
        this.roleService = roleService;
        this.toastrService = toastrService;
        this.transactionsService = transactionsService;
        this.updateStorageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = _storage_disposal_settings__WEBPACK_IMPORTED_MODULE_9__["STORAGE_DISPOSAL_SETTINGS"];
        this.currentSettings = this.settings;
        this.editSettings = _storage_edit_settings__WEBPACK_IMPORTED_MODULE_8__["STORAGE_EDIT_SETTINGS"];
        this.editIcon = 'edit';
        this.leftoverTrashCreated = [];
        this.unfinishedTransactions = [];
    }
    ngOnInit() {
        this.storageDisposal$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageDisposal);
    }
    updateStorage() {
        this.updateStorageEvent.emit();
    }
    edit() {
        if (this.currentSettings !== this.editSettings) {
            this.currentSettings = this.editSettings;
            this.editIcon = 'close';
        }
        else {
            this.currentSettings = this.settings;
            this.editIcon = 'edit';
        }
    }
    chooseAction(event, storage) {
        this.selectedStorageDisposal = storage;
        if (event.action === 'add')
            this.openAddTrashWindow(event.data);
        else if (event.action === 'dispose')
            this.openDisposeTrashWindow(event.data);
        else if (event.action === 'leftover')
            this.openLeftoverTrashWindow(event.data);
    }
    openAddTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.addTrashTemplate, { title: 'Dodaj donetu kolicinu: ' + this.selectedTrash.name });
    }
    addTrashMethod({ trashAmmount: trashAmmount, documentNo: documentNo, companyName: companyName }) {
        if (this.selectedStorageDisposal.maxAmount < this.selectedStorageDisposal.amount + trashAmmount) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate više otpada nego što vaše skladište može da prihvati: '
                + this.selectedStorageDisposal.maxAmount + ' ' + this.selectedStorageDisposal.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount += trashAmmount;
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorageDisposal._id, this.selectedTrash._id, '_id', companyName, documentNo).subscribe(x => {
            this.updateStorage();
        });
        this.toastrService.showToast('Uspeh', 'Uspešno ste dodali ' + trashAmmount + ' (kg) ' + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    openDisposeTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.disposeTrashTemplate, { title: 'Obradi određenu količinu: ' + this.selectedTrash.name });
    }
    disposeTrashMethod({ selectedTransaction: selectedTransaction, trashAmmount: trashAmmount, trashCreated: trashCreated, }) {
        if (this.selectedStorageDisposal.amount - trashAmmount < 0) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate obradite više otpada nego što vaše skladište ima: '
                + this.selectedStorageDisposal.amount + ' ' + this.selectedStorageDisposal.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount -= trashAmmount;
        const companyName = trashCreated ?
            (selectedTransaction.companyName ? selectedTransaction.companyName : selectedTransaction) : '';
        const documentNo = trashCreated ?
            (selectedTransaction.wmdNo ? selectedTransaction.wmdNo : selectedTransaction) : '';
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorageDisposal._id, this.selectedTrash._id, '_id', companyName, documentNo).subscribe(x => {
            this.updateStorage();
        });
        if (selectedTransaction !== '-') {
            selectedTransaction.finished = true;
            this.transactionsService.updateTransaction(selectedTransaction, selectedTransaction._id).subscribe(x => {
            });
        }
        this.toastrService.showToast('Uspeh', 'Uspešno ste obradili ' + trashAmmount + ' (kg) '
            + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    openLeftoverTrashWindow(trash) {
        this.selectedTrash = trash;
        this.transactionsService.getUnfinishedTransactions(this.selectedTrash._id, this.roleService.getCompanyID())
            .subscribe(x => {
            this.unfinishedTransactions = x;
        });
        this.windowRef = this.windowService.open(this.leftoverTrashTemplate, { title: 'Završi proizvodnju preostalog otpada' });
    }
    leftoverTrashMethod({ selectedTransaction: selectedTransaction, leftoverTrashCreated: leftoverTrashCreated, selectedStorage: selectedStorage, }) {
        let canPass = true;
        leftoverTrashCreated.forEach(trashCreated => {
            if (selectedStorage.maxAmount < selectedStorage.amount + trashCreated.amount || !canPass) {
                canPass = false;
                return;
            }
            this.trashService.updateTrash(trashCreated, selectedStorage._id, trashCreated.indexNumber, 'indexNumber', undefined, undefined, true).subscribe(x => {
                this.updateStorage();
            });
        });
        if (!canPass) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate više otpada nego što vaše skladište može da prihvati: '
                + selectedStorage.maxAmount + ' ' + selectedStorage.storageUnit, 'warning');
            return;
        }
        selectedTransaction.companyName = null;
        selectedTransaction.wmdNo = null;
        selectedTransaction.finished = true;
        this.transactionsService.updateTransaction(selectedTransaction, selectedTransaction._id).subscribe(x => {
        });
        this.toastrService.showToast('Uspeh', 'Uspesno ste dodali otpade!', 'success');
        this.windowRef.close();
    }
    updateTrash({ newData: trash, confirm: confirm }, storage) {
        this.selectedStorageDisposal = storage;
        try {
            this.trashService.updateTrash(trash, this.selectedStorageDisposal._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste uredili ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da promenite ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
    deleteTrash({ data: trash, confirm: confirm }, storage) {
        this.selectedStorageDisposal = storage;
        if (!window.confirm('Da li ste sigurni da želite da obrišete ' + trash.naziv + '?'))
            return;
        try {
            this.trashService.deleteTrash(this.selectedStorageDisposal._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste obrisali ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da obrišete ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
}
StorageDisposalComponent.ɵfac = function StorageDisposalComponent_Factory(t) { return new (t || StorageDisposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_trash_service__WEBPACK_IMPORTED_MODULE_5__["TrashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_transactions_service__WEBPACK_IMPORTED_MODULE_7__["TransactionsService"])); };
StorageDisposalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageDisposalComponent, selectors: [["storage-dump"]], viewQuery: function StorageDisposalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addTrashTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.disposeTrashTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftoverTrashTemplate = _t.first);
    } }, inputs: { storageDisposal: "storageDisposal", storage: "storage" }, outputs: { updateStorageEvent: "updateStorageEvent" }, decls: 9, vars: 3, consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], ["addTrashTemplate", ""], ["disposeTrashTemplate", ""], ["leftoverTrashTemplate", ""], [3, "storage"], [1, "row"], [1, "col-11"], [1, "text-left"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [1, "edit-button", 3, "icon", "click"], [1, "order-table", 3, "settings", "source", "custom", "editConfirm", "deleteConfirm"], [3, "type", "selectedTrash", "callAddTrash"], [3, "selectedTrash", "callProcessTrash"], [3, "selectedTrash", "storageProduction", "callLeftoverTrash"]], template: function StorageDisposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StorageDisposalComponent_div_1_Template, 12, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StorageDisposalComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StorageDisposalComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StorageDisposalComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.storageDisposal$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_11__["StorageMeterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__["Ng2SmartTableComponent"], _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_13__["AddTrashPopupComponent"], _popup_windows_process_trash_popup_process_trash_popup_component__WEBPACK_IMPORTED_MODULE_14__["ProcessTrashPopupComponent"], _popup_windows_leftover_trash_popup_leftover_trash_popup_component__WEBPACK_IMPORTED_MODULE_15__["LeftoverTrashPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmFnZS1kaXNwb3NhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InN0b3JhZ2UtZGlzcG9zYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b20ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVkaXQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "4ke2":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-cache/storage-cache.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StorageCacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageCacheComponent", function() { return StorageCacheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/toastr.service */ "7wOV");
/* harmony import */ var _core_service_trash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/service/trash.service */ "Lx1j");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _storage_edit_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage-edit.settings */ "TC2/");
/* harmony import */ var _storage_production_storage_production_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage-production/storage-production.settings */ "DFft");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage-meter/storage-meter.component */ "navU");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../popup-windows/add-trash-popup/add-trash-popup.component */ "xsDJ");

















const _c0 = ["addTrashTemplate"];
function StorageCacheComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "storage-meter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageCacheComponent_div_1_Template_nb_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng2-smart-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("custom", function StorageCacheComponent_div_1_Template_ng2_smart_table_custom_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.chooseAction($event, s_r3); })("editConfirm", function StorageCacheComponent_div_1_Template_ng2_smart_table_editConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateTrash($event, s_r3); })("deleteConfirm", function StorageCacheComponent_div_1_Template_ng2_smart_table_deleteConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteTrash($event, s_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storage", s_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3 == null ? null : s_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.editIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.currentSettings)("source", s_r3 == null ? null : s_r3.trashes);
} }
function StorageCacheComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "add-trash-popup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callAddTrash", function StorageCacheComponent_ng_template_3_Template_add_trash_popup_callAddTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "cache")("selectedTrash", ctx_r2.selectedTrash);
} }
class StorageCacheComponent {
    constructor(storageService, windowService, trashService, toastrService) {
        this.storageService = storageService;
        this.windowService = windowService;
        this.trashService = trashService;
        this.toastrService = toastrService;
        this.updateStorageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = _storage_production_storage_production_settings__WEBPACK_IMPORTED_MODULE_7__["STORAGE_PRODUCTION_SETTINGS"];
        this.currentSettings = this.settings;
        this.editSettings = _storage_edit_settings__WEBPACK_IMPORTED_MODULE_6__["STORAGE_EDIT_SETTINGS"];
        this.editIcon = 'edit';
    }
    ngOnInit() {
        this.storageCache$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageCache);
    }
    updateStorage() {
        this.updateStorageEvent.emit();
        this.storageCache$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageCache);
    }
    edit() {
        if (this.currentSettings !== this.editSettings) {
            this.currentSettings = this.editSettings;
            this.editIcon = 'close';
        }
        else {
            this.currentSettings = this.settings;
            this.editIcon = 'edit';
        }
    }
    chooseAction(event, storage) {
        this.selectedStorageCache = storage;
        if (event.action === 'add')
            this.openAddTrashWindow(event.data);
    }
    openAddTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.addTrashTemplate, { title: 'Dodaj proizvedenu kolicinu: ' + this.selectedTrash.name });
    }
    addTrashMethod({ trashAmmount: trashAmmount }) {
        if (this.selectedStorageCache.amount - trashAmmount < 0) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate obradite više otpada nego što vaše skladište ima: '
                + this.selectedStorageCache.amount + ' ' + this.selectedStorageCache.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount += trashAmmount;
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorageCache._id, this.selectedTrash._id).
            subscribe(x => {
            this.updateStorage();
        });
        this.toastrService.showToast('Uspeh', 'Uspešno ste dodali ' + trashAmmount + ' (kg) ' + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    updateTrash({ newData: trash, confirm: confirm }, storage) {
        this.selectedStorageCache = storage;
        try {
            this.trashService.updateTrash(trash, this.selectedStorageCache._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste uredili ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da promenite ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
    deleteTrash({ data: trash, confirm: confirm }, storage) {
        this.selectedStorageCache = storage;
        if (!window.confirm('Da li ste sigurni da želite da obrišete ' + trash.naziv + '?'))
            return;
        try {
            this.trashService.deleteTrash(this.selectedStorageCache._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste obrisali ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da obrišete ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
}
StorageCacheComponent.ɵfac = function StorageCacheComponent_Factory(t) { return new (t || StorageCacheComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_trash_service__WEBPACK_IMPORTED_MODULE_4__["TrashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
StorageCacheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageCacheComponent, selectors: [["storage-cache"]], viewQuery: function StorageCacheComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addTrashTemplate = _t.first);
    } }, inputs: { storageCache: "storageCache" }, outputs: { updateStorageEvent: "updateStorageEvent" }, decls: 5, vars: 3, consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], ["addTrashTemplate", ""], [3, "storage"], [1, "row"], [1, "col-11"], [1, "text-left"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [1, "edit-button", 3, "icon", "click"], [1, "order-table", 3, "settings", "source", "custom", "editConfirm", "deleteConfirm"], [3, "type", "selectedTrash", "callAddTrash"]], template: function StorageCacheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StorageCacheComponent_div_1_Template, 12, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StorageCacheComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.storageCache$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_9__["StorageMeterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableComponent"], _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_11__["AddTrashPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmFnZS1jYWNoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InN0b3JhZ2UtY2FjaGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b20ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVkaXQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7Oz7":
/*!**************************************************!*\
  !*** ./src/app/@core/service/storage.service.ts ***!
  \**************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/auth */ "McNs");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _data_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/storage */ "m0FF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class StorageService extends _data_storage__WEBPACK_IMPORTED_MODULE_3__["StorageData"] {
    constructor(http, authService) {
        super();
        this.http = http;
        this.authService = authService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    createStorage(storage) {
        return this.http.post(this.apiUrl + '/api/storage', storage);
    }
    deleteStorage(value, type = '_id') {
        return this.http.delete(this.apiUrl + '/api/storage/one/' + `${type}/${value}`);
    }
    getStorage(value, type = '_id') {
        return this.http.get(this.apiUrl + '/api/storage/one/' + `${type}/${value}`);
    }
    getStorages(value, type) {
        return this.http.get(this.apiUrl + '/api/storage/many/' + `${type}/${value}`);
    }
    updateStorage(storage, value, type = '_id') {
        return this.http.patch(this.apiUrl + '/api/storage/one/' + `${type}/${value}`, storage);
    }
    getCompaniesStorage(companyID, storageType = 'all') {
        return this.http.get(this.apiUrl + '/api/company/storages/' + `${companyID}/${storageType}`);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac });


/***/ }),

/***/ "7XLV":
/*!**************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-containers.component.ts ***!
  \**************************************************************************/
/*! exports provided: StorageContainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageContainersComponent", function() { return StorageContainersComponent; });
/* harmony import */ var _core_service_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/service/role.service */ "ud2R");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storage_production_storage_production_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-production/storage-production.component */ "yVna");
/* harmony import */ var _storage_treatment_storage_treatment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-treatment/storage-treatment.component */ "UGtG");
/* harmony import */ var _storage_disposal_storage_disposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-disposal/storage-disposal.component */ "0Fcs");
/* harmony import */ var _storage_cache_storage_cache_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-cache/storage-cache.component */ "4ke2");










function StorageContainersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "storage-production", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateStorageEvent", function StorageContainersComponent_div_1_Template_storage_production_updateStorageEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.updateStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("storage", ctx_r0.storageProduction);
} }
function StorageContainersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "storage-treatment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateStorageEvent", function StorageContainersComponent_div_2_Template_storage_treatment_updateStorageEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.updateStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("storageTreatment", ctx_r1.storageTreatment)("storage", ctx_r1.storageProduction);
} }
function StorageContainersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "storage-dump", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateStorageEvent", function StorageContainersComponent_div_3_Template_storage_dump_updateStorageEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.updateStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("storageDisposal", ctx_r2.storageDisposal)("storage", ctx_r2.storageProduction);
} }
function StorageContainersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "storage-cache", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateStorageEvent", function StorageContainersComponent_div_4_Template_storage_cache_updateStorageEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.updateStorage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("storageCache", ctx_r3.storageCache);
} }
class StorageContainersComponent {
    constructor(roleService, storageService) {
        this.roleService = roleService;
        this.storageService = storageService;
        this.allStorage = [];
        this.storageProduction = [];
        this.storageTreatment = [];
        this.storageDisposal = [];
        this.storageCache = [];
        this.loading = false;
    }
    ngOnInit() {
        this.roleService.getOperations().subscribe(x => {
            this.operations = x;
        });
        this.updateStorage();
    }
    updateStorage() {
        this.loading = true;
        this.allStorage = [];
        this.storageDisposal = [];
        this.storageProduction = [];
        this.storageTreatment = [];
        this.storageCache = [];
        this.storageService.getCompaniesStorage(this.roleService.getCompanyID()).subscribe(s => {
            this.allStorage = s;
            for (const x of this.allStorage) {
                if (x.__t === undefined)
                    this.storageProduction.push(x);
                else if (x.__t === 'StorageTreatment')
                    this.storageTreatment.push(x);
                else if (x.__t === 'StorageDump')
                    this.storageDisposal.push(x);
                else if (x.__t === 'StorageCache')
                    this.storageCache.push(x);
            }
            this.loading = false;
        });
    }
}
StorageContainersComponent.ɵfac = function StorageContainersComponent_Factory(t) { return new (t || StorageContainersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_0__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
StorageContainersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StorageContainersComponent, selectors: [["pages-storage-containers"]], decls: 5, vars: 4, consts: [[1, "container-fluid"], [4, "ngIf"], [3, "storage", "updateStorageEvent"], [3, "storageTreatment", "storage", "updateStorageEvent"], [3, "storageDisposal", "storage", "updateStorageEvent"], [3, "storageCache", "updateStorageEvent"]], template: function StorageContainersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StorageContainersComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StorageContainersComponent_div_2_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StorageContainersComponent_div_3_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StorageContainersComponent_div_4_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.operations.production && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.operations.treatment && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.operations.disposal && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.operations.cache && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _storage_production_storage_production_component__WEBPACK_IMPORTED_MODULE_4__["StorageProductionComponent"], _storage_treatment_storage_treatment_component__WEBPACK_IMPORTED_MODULE_5__["StorageTreatmentComponent"], _storage_disposal_storage_disposal_component__WEBPACK_IMPORTED_MODULE_6__["StorageDisposalComponent"], _storage_cache_storage_cache_component__WEBPACK_IMPORTED_MODULE_7__["StorageCacheComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yYWdlLWNvbnRhaW5lcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "7wOV":
/*!*************************************************!*\
  !*** ./src/app/@core/service/toastr.service.ts ***!
  \*************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ToastrService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    showToast(title, message, status, duration = 3000) {
        this.toastrService.show(message, title, { status, duration });
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"])); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ARfV":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-disposal/storage-disposal.settings.ts ***!
  \****************************************************************************************/
/*! exports provided: STORAGE_DISPOSAL_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_DISPOSAL_SETTINGS", function() { return STORAGE_DISPOSAL_SETTINGS; });
const STORAGE_DISPOSAL_SETTINGS = {
    hideSubHeader: true,
    actions: {
        columnTitle: 'Dodaj otpad/Odloži otpad/Završi odlaganje',
        position: 'right',
        edit: false,
        add: false,
        delete: false,
        custom: [
            {
                name: 'add',
                title: '<i class="fa fa-plus"></i>',
            },
            {
                name: 'dispose',
                title: '<i class="fa fa-trash-alt"></i>',
            },
            {
                name: 'leftover',
                title: '<i class="fa fa-exclamation-triangle"></i>',
            },
        ],
    },
    columns: {
        indexNumber: {
            title: 'Indeksni Broj',
        },
        name: {
            title: 'Naziv',
        },
        desc: {
            title: 'Opis',
        },
        amount: {
            title: 'Količina (KG)',
        },
    },
};


/***/ }),

/***/ "DFft":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-production/storage-production.settings.ts ***!
  \********************************************************************************************/
/*! exports provided: STORAGE_PRODUCTION_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_PRODUCTION_SETTINGS", function() { return STORAGE_PRODUCTION_SETTINGS; });
const STORAGE_PRODUCTION_SETTINGS = {
    hideSubHeader: true,
    actions: {
        columnTitle: 'Dodaj na skladište',
        position: 'right',
        add: false,
        edit: false,
        delete: false,
        custom: [
            {
                name: 'add',
                title: '<i class="fa fa-folder-plus"></i>',
            },
        ],
    },
    columns: {
        indexNumber: {
            title: 'Indeksni Broj',
        },
        name: {
            title: 'Naziv',
        },
        desc: {
            title: 'Opis',
        },
        amount: {
            title: 'Količina (kg)',
        },
    },
};


/***/ }),

/***/ "KYNX":
/*!*************************************!*\
  !*** ./src/app/@core/data/trash.ts ***!
  \*************************************/
/*! exports provided: TrashData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashData", function() { return TrashData; });
class TrashData {
}


/***/ }),

/***/ "Lx1j":
/*!************************************************!*\
  !*** ./src/app/@core/service/trash.service.ts ***!
  \************************************************/
/*! exports provided: TrashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashService", function() { return TrashService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _data_trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/trash */ "KYNX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TrashService extends _data_trash__WEBPACK_IMPORTED_MODULE_2__["TrashData"] {
    constructor(http) {
        super();
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    createTrash(trash, storageID) {
        return this.http.post(this.apiUrl + '/api/trash', { trash: trash, storageID: storageID });
    }
    deleteTrash(storageID, value, type = '_id') {
        return this.http.delete(this.apiUrl + '/api/trash/one/' + `${type}/${value}/${storageID}`);
    }
    getTrash(value, type = '_id') {
        return this.http.get(this.apiUrl + '/api/trash/one/' + `${type}/${value}`);
    }
    getTrashes(value, type) {
        return this.http.get(this.apiUrl + '/api/trash/many/' + `${type}/${value}`);
    }
    updateTrash(trash, storageID, value, type = '_id', companyName, documentNo, increment) {
        return this.http.patch(this.apiUrl + '/api/trash/one/' + `${type}/${value}`, { trash: trash, storageID: storageID, documentNo: documentNo, companyName: companyName, inc: increment });
    }
}
TrashService.ɵfac = function TrashService_Factory(t) { return new (t || TrashService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TrashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TrashService, factory: TrashService.ɵfac });


/***/ }),

/***/ "OXk3":
/*!***************************************!*\
  !*** ./src/app/@core/data/company.ts ***!
  \***************************************/
/*! exports provided: CompanyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyData", function() { return CompanyData; });
class CompanyData {
}


/***/ }),

/***/ "RPbl":
/*!************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage.module.ts ***!
  \************************************************************/
/*! exports provided: StorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageModule", function() { return StorageModule; });
/* harmony import */ var _core_service_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/service/catalog.service */ "ibGe");
/* harmony import */ var _core_service_transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/service/transactions.service */ "TOXQ");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup-windows/popup-windows.module */ "bJfm");
/* harmony import */ var _storage_containers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-containers.component */ "7XLV");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _storage_production_storage_production_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage-production/storage-production.component */ "yVna");
/* harmony import */ var _storage_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage-routing.module */ "zULQ");
/* harmony import */ var _storage_treatment_storage_treatment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storage-treatment/storage-treatment.component */ "UGtG");
/* harmony import */ var _storage_disposal_storage_disposal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage-disposal/storage-disposal.component */ "0Fcs");
/* harmony import */ var _storage_cache_storage_cache_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storage-cache/storage-cache.component */ "4ke2");
/* harmony import */ var _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./storage-meter/storage-meter.component */ "navU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class StorageModule {
}
StorageModule.ɵfac = function StorageModule_Factory(t) { return new (t || StorageModule)(); };
StorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: StorageModule });
StorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _core_service_catalog_service__WEBPACK_IMPORTED_MODULE_0__["CatalogService"],
        _core_service_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"],
    ], imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _storage_routing_module__WEBPACK_IMPORTED_MODULE_10__["StorageRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbPopoverModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbProgressBarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionModule"],
            _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_3__["PopupWindowsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](StorageModule, { declarations: [_storage_containers_component__WEBPACK_IMPORTED_MODULE_4__["StorageContainersComponent"],
        _storage_production_storage_production_component__WEBPACK_IMPORTED_MODULE_9__["StorageProductionComponent"],
        _storage_treatment_storage_treatment_component__WEBPACK_IMPORTED_MODULE_11__["StorageTreatmentComponent"],
        _storage_disposal_storage_disposal_component__WEBPACK_IMPORTED_MODULE_12__["StorageDisposalComponent"],
        _storage_cache_storage_cache_component__WEBPACK_IMPORTED_MODULE_13__["StorageCacheComponent"],
        _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_14__["StorageMeterComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _storage_routing_module__WEBPACK_IMPORTED_MODULE_10__["StorageRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbPopoverModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbProgressBarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionModule"],
        _popup_windows_popup_windows_module__WEBPACK_IMPORTED_MODULE_3__["PopupWindowsModule"]], exports: [_storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_14__["StorageMeterComponent"]] }); })();


/***/ }),

/***/ "TC2/":
/*!*******************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-edit.settings.ts ***!
  \*******************************************************************/
/*! exports provided: STORAGE_EDIT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_EDIT_SETTINGS", function() { return STORAGE_EDIT_SETTINGS; });
const STORAGE_EDIT_SETTINGS = {
    edit: {
        confirmSave: true,
        editButtonContent: '<i class="fa fa-edit"></i>',
        saveButtonContent: '<i class="fa fa-check"></i>',
        cancelButtonContent: '<i class="fa fa-times"></i>',
    },
    delete: {
        confirmDelete: true,
        deleteButtonContent: '<i class="fa fa-trash"></i>',
        saveButtonContent: 'save',
        cancelButtonContent: 'cancel',
    },
    actions: {
        position: 'right',
        add: false,
        edit: true,
        delete: true,
    },
    columns: {
        indexNumber: {
            title: 'Indeksni Broj',
            editable: false,
        },
        name: {
            title: 'Naziv',
        },
        desc: {
            title: 'Opis',
        },
        amount: {
            title: 'Količina (kg)',
            editable: false,
        },
    },
};


/***/ }),

/***/ "UGtG":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-treatment/storage-treatment.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StorageTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTreatmentComponent", function() { return StorageTreatmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/role.service */ "ud2R");
/* harmony import */ var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/service/toastr.service */ "7wOV");
/* harmony import */ var _core_service_trash_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/service/trash.service */ "Lx1j");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _core_service_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/service/transactions.service */ "TOXQ");
/* harmony import */ var _storage_edit_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage-edit.settings */ "TC2/");
/* harmony import */ var _storage_treatment_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage-treatment.settings */ "smAF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storage-meter/storage-meter.component */ "navU");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../popup-windows/add-trash-popup/add-trash-popup.component */ "xsDJ");
/* harmony import */ var _popup_windows_process_trash_popup_process_trash_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../popup-windows/process-trash-popup/process-trash-popup.component */ "+HCH");
/* harmony import */ var _popup_windows_leftover_trash_popup_leftover_trash_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../popup-windows/leftover-trash-popup/leftover-trash-popup.component */ "J0/g");























const _c0 = ["addTrashTemplate"];
const _c1 = ["processTrashTemplate"];
const _c2 = ["leftoverTrashTemplate"];
function StorageTreatmentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "storage-meter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageTreatmentComponent_div_1_Template_nb_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng2-smart-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("custom", function StorageTreatmentComponent_div_1_Template_ng2_smart_table_custom_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.chooseAction($event, s_r7); })("editConfirm", function StorageTreatmentComponent_div_1_Template_ng2_smart_table_editConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.updateTrash($event, s_r7); })("deleteConfirm", function StorageTreatmentComponent_div_1_Template_ng2_smart_table_deleteConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deleteTrash($event, s_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storage", s_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r7 == null ? null : s_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.editIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.currentSettings)("source", s_r7 == null ? null : s_r7.trashes);
} }
function StorageTreatmentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "add-trash-popup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callAddTrash", function StorageTreatmentComponent_ng_template_3_Template_add_trash_popup_callAddTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "treatment")("selectedTrash", ctx_r2.selectedTrash);
} }
function StorageTreatmentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "process-trash-popup", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callProcessTrash", function StorageTreatmentComponent_ng_template_5_Template_process_trash_popup_callProcessTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.processTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTrash", ctx_r4.selectedTrash);
} }
function StorageTreatmentComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "leftover-trash-popup", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callLeftoverTrash", function StorageTreatmentComponent_ng_template_7_Template_leftover_trash_popup_callLeftoverTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.leftoverTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTrash", ctx_r6.selectedTrash)("storageProduction", ctx_r6.storage);
} }
class StorageTreatmentComponent {
    constructor(storageService, windowService, trashService, transactionsService, toastrService, roleService) {
        this.storageService = storageService;
        this.windowService = windowService;
        this.trashService = trashService;
        this.transactionsService = transactionsService;
        this.toastrService = toastrService;
        this.roleService = roleService;
        this.updateStorageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = _storage_treatment_settings__WEBPACK_IMPORTED_MODULE_9__["STORAGE_TREATMENT_SETTINGS"];
        this.currentSettings = this.settings;
        this.editSettings = _storage_edit_settings__WEBPACK_IMPORTED_MODULE_8__["STORAGE_EDIT_SETTINGS"];
        this.editIcon = 'edit';
        this.leftoverTrashCreated = [];
        this.unfinishedTransactions = [];
    }
    ngOnInit() {
        this.storageTreatment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storageTreatment);
    }
    updateStorage() {
        this.updateStorageEvent.emit();
    }
    edit() {
        if (this.currentSettings !== this.editSettings) {
            this.currentSettings = this.editSettings;
            this.editIcon = 'close';
        }
        else {
            this.currentSettings = this.settings;
            this.editIcon = 'edit';
        }
    }
    chooseAction(event, storage) {
        this.selectedStorageTreatment = storage;
        if (event.action === 'add')
            this.openAddTrashWindow(event.data);
        else if (event.action === 'process')
            this.openProcessTrashWindow(event.data);
        else if (event.action === 'leftover')
            this.openLeftoverTrashWindow(event.data);
    }
    openAddTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.addTrashTemplate, { title: 'Dodaj donetu kolicinu: ' + this.selectedTrash.name });
    }
    addTrashMethod({ trashAmmount: trashAmmount, documentNo: documentNo, companyName: companyName }) {
        if (this.selectedStorageTreatment.maxAmount < this.selectedStorageTreatment.amount + trashAmmount) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate više otpada nego što vaše skladište može da prihvati: '
                + this.selectedStorageTreatment.maxAmount + ' ' + this.selectedStorageTreatment.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount += trashAmmount;
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorageTreatment._id, this.selectedTrash._id, '_id', companyName, documentNo).subscribe(x => {
            this.updateStorage();
        });
        this.toastrService.showToast('Uspeh', 'Uspešno ste dodali ' + trashAmmount + ' (kg) ' + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    openProcessTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.processTrashTemplate, { title: 'Obradi određenu količinu: ' + this.selectedTrash.name });
    }
    processTrashMethod({ selectedTransaction: selectedTransaction, trashAmmount: trashAmmount, trashCreated: trashCreated, }) {
        if (this.selectedStorageTreatment.amount - trashAmmount < 0) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate obradite više otpada nego što vaše skladište ima: '
                + this.selectedStorageTreatment.amount + ' ' + this.selectedStorageTreatment.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount -= trashAmmount;
        const companyName = trashCreated ?
            (selectedTransaction.companyName ? selectedTransaction.companyName : selectedTransaction) : '';
        const documentNo = trashCreated ?
            (selectedTransaction.wmdNo ? selectedTransaction.wmdNo : selectedTransaction) : '';
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorageTreatment._id, this.selectedTrash._id, '_id', companyName, documentNo).subscribe(x => {
            this.updateStorage();
        });
        if (selectedTransaction !== '-') {
            selectedTransaction.finished = true;
            this.transactionsService.updateTransaction(selectedTransaction, selectedTransaction._id).subscribe(x => {
            });
        }
        this.toastrService.showToast('Uspeh', 'Uspešno ste obradili ' + trashAmmount + ' (kg) '
            + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    openLeftoverTrashWindow(trash) {
        this.selectedTrash = trash;
        this.transactionsService.getUnfinishedTransactions(this.selectedTrash._id, this.roleService.getCompanyID())
            .subscribe(x => {
            this.unfinishedTransactions = x;
        });
        this.windowRef = this.windowService.open(this.leftoverTrashTemplate, { title: 'Završi proizvodnju preostalog otpada' });
    }
    leftoverTrashMethod({ selectedTransaction: selectedTransaction, leftoverTrashCreated: leftoverTrashCreated, selectedStorage: selectedStorage, }) {
        let canPass = true;
        leftoverTrashCreated.forEach(trashCreated => {
            if (selectedStorage.maxAmount < selectedStorage.amount + trashCreated.amount || !canPass) {
                canPass = false;
                return;
            }
            this.trashService.updateTrash(trashCreated, selectedStorage._id, trashCreated.indexNumber, 'indexNumber', undefined, undefined, true).subscribe(x => {
                this.updateStorage();
            });
        });
        if (!canPass) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate više otpada nego što vaše skladište može da prihvati: '
                + selectedStorage.maxAmount + ' ' + selectedStorage.storageUnit, 'warning');
            return;
        }
        selectedTransaction.companyName = null;
        selectedTransaction.wmdNo = null;
        selectedTransaction.finished = true;
        this.transactionsService.updateTransaction(selectedTransaction, selectedTransaction._id).subscribe(x => {
        });
        this.toastrService.showToast('Uspeh', 'Uspesno ste dodali otpade!', 'success');
        this.windowRef.close();
    }
    updateTrash({ newData: trash, confirm: confirm }, storage) {
        this.selectedStorageTreatment = storage;
        try {
            this.trashService.updateTrash(trash, this.selectedStorageTreatment._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste uredili ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da promenite ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
    deleteTrash({ data: trash, confirm: confirm }, storage) {
        this.selectedStorageTreatment = storage;
        if (!window.confirm('Da li ste sigurni da želite da obrišete ' + trash.naziv + '?'))
            return;
        try {
            this.trashService.deleteTrash(this.selectedStorageTreatment._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste obrisali ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da obrišete ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
}
StorageTreatmentComponent.ɵfac = function StorageTreatmentComponent_Factory(t) { return new (t || StorageTreatmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_trash_service__WEBPACK_IMPORTED_MODULE_5__["TrashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_transactions_service__WEBPACK_IMPORTED_MODULE_7__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"])); };
StorageTreatmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageTreatmentComponent, selectors: [["storage-treatment"]], viewQuery: function StorageTreatmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addTrashTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.processTrashTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftoverTrashTemplate = _t.first);
    } }, inputs: { storageTreatment: "storageTreatment", storage: "storage" }, outputs: { updateStorageEvent: "updateStorageEvent" }, decls: 9, vars: 3, consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], ["addTrashTemplate", ""], ["processTrashTemplate", ""], ["leftoverTrashTemplate", ""], [3, "storage"], [1, "row"], [1, "col-11"], [1, "text-left"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [1, "edit-button", 3, "icon", "click"], [3, "settings", "source", "custom", "editConfirm", "deleteConfirm"], [3, "type", "selectedTrash", "callAddTrash"], [3, "selectedTrash", "callProcessTrash"], [3, "selectedTrash", "storageProduction", "callLeftoverTrash"]], template: function StorageTreatmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StorageTreatmentComponent_div_1_Template, 12, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StorageTreatmentComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StorageTreatmentComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StorageTreatmentComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.storageTreatment$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_11__["StorageMeterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_12__["Ng2SmartTableComponent"], _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_13__["AddTrashPopupComponent"], _popup_windows_process_trash_popup_process_trash_popup_component__WEBPACK_IMPORTED_MODULE_14__["ProcessTrashPopupComponent"], _popup_windows_leftover_trash_popup_leftover_trash_popup_component__WEBPACK_IMPORTED_MODULE_15__["LeftoverTrashPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom {\n  display: inline-block;\n  width: 60px;\n  text-align: center;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmFnZS10cmVhdG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzdG9yYWdlLXRyZWF0bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBuZzItc3QtdGJvZHktY3VzdG9tIGEubmcyLXNtYXJ0LWFjdGlvbi5uZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b206aG92ZXIge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zdC10Ym9keS1jdXN0b20gYS5uZzItc21hcnQtYWN0aW9uLm5nMi1zbWFydC1hY3Rpb24tY3VzdG9tLWN1c3RvbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWRpdC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "m0FF":
/*!***************************************!*\
  !*** ./src/app/@core/data/storage.ts ***!
  \***************************************/
/*! exports provided: StorageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageData", function() { return StorageData; });
class StorageData {
}


/***/ }),

/***/ "navU":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-meter/storage-meter.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StorageMeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageMeterComponent", function() { return StorageMeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");


class StorageMeterComponent {
    constructor() { }
    ngOnInit() {
    }
    calculateStatus() {
        if ((this.storage.amount / this.storage.maxAmount) * 100 < 33)
            return 'success';
        else if ((this.storage.amount / this.storage.maxAmount) * 100 < 66)
            return 'warning';
        else
            return 'danger';
    }
    calculateValue() {
        return (this.storage.amount / this.storage.maxAmount) * 100;
    }
}
StorageMeterComponent.ɵfac = function StorageMeterComponent_Factory(t) { return new (t || StorageMeterComponent)(); };
StorageMeterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageMeterComponent, selectors: [["storage-meter"]], inputs: { storage: "storage" }, decls: 6, vars: 5, consts: [[1, "row"], [1, "col-12", "text-center", "progress-bar-text"], [1, "badge", "badge-light"], [1, "col-12"], ["size", "large", 3, "value", "status"]], template: function StorageMeterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.storage.amount, "/", ctx.storage.maxAmount, " (", ctx.storage.storageUnit, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.calculateValue())("status", ctx.calculateStatus());
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbProgressBarComponent"]], styles: [".progress-bar-text[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  z-index: 1;\r\n  position: relative;\r\n  transform: translateY(101%)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UtbWV0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3RvcmFnZS1tZXRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhci10ZXh0IHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAxJSlcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "smAF":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-treatment/storage-treatment.settings.ts ***!
  \******************************************************************************************/
/*! exports provided: STORAGE_TREATMENT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_TREATMENT_SETTINGS", function() { return STORAGE_TREATMENT_SETTINGS; });
const STORAGE_TREATMENT_SETTINGS = {
    hideSubHeader: true,
    actions: {
        columnTitle: 'Dodaj otpad/Obradi otpad/Završi tretman',
        position: 'right',
        add: false,
        edit: false,
        delete: false,
        custom: [
            {
                name: 'add',
                title: '<i class="fa fa-plus"></i>',
            },
            {
                name: 'process',
                title: '<i class="fa fa-trash-restore"></i>',
            },
            {
                name: 'leftover',
                title: '<i class="fa fa-exclamation-triangle"></i>',
            },
        ],
    },
    columns: {
        indexNumber: {
            title: 'Indeksni Broj',
        },
        name: {
            title: 'Naziv',
        },
        desc: {
            title: 'Opis',
        },
        amount: {
            title: 'Kolicina',
        },
    },
};


/***/ }),

/***/ "wH5/":
/*!**************************************************!*\
  !*** ./src/app/@core/service/company.service.ts ***!
  \**************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _data_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/company */ "OXk3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CompanyService extends _data_company__WEBPACK_IMPORTED_MODULE_2__["CompanyData"] {
    constructor(http) {
        super();
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    createCompany(company) {
        return this.http.post(this.apiUrl + '/api/company', company);
    }
    deleteCompany(value, type = '_id') {
        return this.http.delete(this.apiUrl + '/api/company/one/' + `${type}/${value}`);
    }
    getCompany(value, type = '_id') {
        return this.http.get(this.apiUrl + '/api/company/one/' + `${type}/${value}`);
    }
    getCompanys(value = 'all', type) {
        return this.http.get(this.apiUrl + '/api/company/many/' + `${type}/${value}`);
    }
    updateCompany(company, value, type = '_id') {
        return this.http.patch(this.apiUrl + '/api/company/one/' + `${type}/${value}`, company);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac });


/***/ }),

/***/ "yVna":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-production/storage-production.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: StorageProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageProductionComponent", function() { return StorageProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/service/toastr.service */ "7wOV");
/* harmony import */ var _core_service_trash_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/service/trash.service */ "Lx1j");
/* harmony import */ var _core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/service/storage.service */ "7Oz7");
/* harmony import */ var _storage_edit_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage-edit.settings */ "TC2/");
/* harmony import */ var _storage_production_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-production.settings */ "DFft");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage-meter/storage-meter.component */ "navU");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../popup-windows/add-trash-popup/add-trash-popup.component */ "xsDJ");

















const _c0 = ["addTrashTemplate"];
function StorageProductionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "storage-meter", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageProductionComponent_div_1_Template_nb_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng2-smart-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("custom", function StorageProductionComponent_div_1_Template_ng2_smart_table_custom_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.chooseAction($event, s_r3); })("editConfirm", function StorageProductionComponent_div_1_Template_ng2_smart_table_editConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateTrash($event, s_r3); })("deleteConfirm", function StorageProductionComponent_div_1_Template_ng2_smart_table_deleteConfirm_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const s_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteTrash($event, s_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storage", s_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3 == null ? null : s_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.editIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.currentSettings)("source", s_r3 == null ? null : s_r3.trashes);
} }
function StorageProductionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "add-trash-popup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("callAddTrash", function StorageProductionComponent_ng_template_3_Template_add_trash_popup_callAddTrash_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addTrashMethod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "production")("selectedTrash", ctx_r2.selectedTrash);
} }
class StorageProductionComponent {
    constructor(storageService, windowService, trashService, toastrService) {
        this.storageService = storageService;
        this.windowService = windowService;
        this.trashService = trashService;
        this.toastrService = toastrService;
        this.updateStorageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.settings = _storage_production_settings__WEBPACK_IMPORTED_MODULE_7__["STORAGE_PRODUCTION_SETTINGS"];
        this.currentSettings = this.settings;
        this.editSettings = _storage_edit_settings__WEBPACK_IMPORTED_MODULE_6__["STORAGE_EDIT_SETTINGS"];
        this.editIcon = 'edit';
    }
    ngOnInit() {
        this.storage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storage);
    }
    updateStorage() {
        this.updateStorageEvent.emit();
        this.storage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.storage);
    }
    edit() {
        if (this.currentSettings !== this.editSettings) {
            this.currentSettings = this.editSettings;
            this.editIcon = 'close';
        }
        else {
            this.currentSettings = this.settings;
            this.editIcon = 'edit';
        }
    }
    chooseAction(event, storage) {
        this.selectedStorage = storage;
        if (event.action === 'add')
            this.openAddTrashWindow(event.data);
    }
    openAddTrashWindow(trash) {
        this.selectedTrash = trash;
        this.windowRef = this.windowService.open(this.addTrashTemplate, { title: 'Dodaj proizvedenu kolicinu: ' + this.selectedTrash.name });
    }
    addTrashMethod({ trashAmmount: trashAmmount }) {
        if (this.selectedStorage.maxAmount < this.selectedStorage.amount + trashAmmount) {
            this.toastrService.showToast('Greška', 'Ne možete da dodate više otpada nego što vaše skladište može da prihvati: '
                + this.selectedStorage.maxAmount + ' ' + this.selectedStorage.storageUnit, 'warning');
            return;
        }
        this.selectedTrash.amount += trashAmmount;
        this.trashService.updateTrash(this.selectedTrash, this.selectedStorage._id, this.selectedTrash._id).subscribe(x => {
            this.updateStorage();
        });
        this.toastrService.showToast('Uspeh', 'Uspešno ste dodali ' + trashAmmount + ' (kg) ' + this.selectedTrash.name + ' na skladište.', 'success');
        this.windowRef.close();
        trashAmmount = NaN;
    }
    updateTrash({ newData: trash, confirm: confirm }, storage) {
        this.selectedStorage = storage;
        try {
            this.trashService.updateTrash(trash, this.selectedStorage._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste uredili ' + trash.name, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da promenite ' + trash.name +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
    deleteTrash({ data: trash, confirm: confirm }, storage) {
        this.selectedStorage = storage;
        if (!window.confirm('Da li ste sigurni da želite da obrišete ' + trash.name + '?'))
            return;
        try {
            this.trashService.deleteTrash(this.selectedStorage._id, trash._id).subscribe(x => {
                this.updateStorage();
            });
            confirm.resolve();
            this.toastrService.showToast('Uspeh!', 'Uspešno ste obrisali ' + trash.naziv, 'success');
        }
        catch (err) {
            confirm.reject();
            this.toastrService.showToast('Greška!', 'Došlo je do greške dok ste pokušali da obrišete ' + trash.naziv +
                '. Molimo vas pokušajte kasnije.', 'danger');
        }
    }
}
StorageProductionComponent.ɵfac = function StorageProductionComponent_Factory(t) { return new (t || StorageProductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_trash_service__WEBPACK_IMPORTED_MODULE_4__["TrashService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_service_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
StorageProductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorageProductionComponent, selectors: [["storage-production"]], viewQuery: function StorageProductionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addTrashTemplate = _t.first);
    } }, inputs: { storage: "storage" }, outputs: { updateStorageEvent: "updateStorageEvent" }, decls: 5, vars: 3, consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], ["addTrashTemplate", ""], [3, "storage"], [1, "row"], [1, "col-11"], [1, "text-left"], [1, "col-1", "d-flex", "justify-content-center", "align-items-center"], [1, "edit-button", 3, "icon", "click"], [1, "order-table", 3, "settings", "source", "custom", "editConfirm", "deleteConfirm"], [3, "type", "selectedTrash", "callAddTrash"]], template: function StorageProductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StorageProductionComponent_div_1_Template, 12, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StorageProductionComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.storage$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _storage_meter_storage_meter_component__WEBPACK_IMPORTED_MODULE_9__["StorageMeterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableComponent"], _popup_windows_add_trash_popup_add_trash_popup_component__WEBPACK_IMPORTED_MODULE_11__["AddTrashPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     ng2-st-tbody-custom a.ng2-smart-action.ng2-smart-action-custom-custom:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  color: dodgerblue;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmFnZS1wcm9kdWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJzdG9yYWdlLXByb2R1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmcyLXN0LXRib2R5LWN1c3RvbSBhLm5nMi1zbWFydC1hY3Rpb24ubmcyLXNtYXJ0LWFjdGlvbi1jdXN0b20tY3VzdG9tOmhvdmVyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uZWRpdC1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zULQ":
/*!********************************************************************!*\
  !*** ./src/app/pages/storage-containers/storage-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: StorageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageRoutingModule", function() { return StorageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_containers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-containers.component */ "7XLV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _storage_containers_component__WEBPACK_IMPORTED_MODULE_1__["StorageContainersComponent"],
    },
];
class StorageRoutingModule {
}
StorageRoutingModule.ɵfac = function StorageRoutingModule_Factory(t) { return new (t || StorageRoutingModule)(); };
StorageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StorageRoutingModule });
StorageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StorageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=default~admin-pages-admin-module~pages-pages-module-es2015.js.map