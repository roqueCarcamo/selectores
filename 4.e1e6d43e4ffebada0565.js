(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"nC/S":function(t,e,n){"use strict";n.r(e),n.d(e,"PaisesModule",function(){return $t});var i=n("ofXK"),s=n("fXoL"),r=n("Cfvw"),o=n("HDdC"),a=n("DH7j"),l=n("lJxs"),u=n("XoHu");function h(t,e){return new o.a(n=>{const i=t.length;if(0===i)return void n.complete();const s=new Array(i);let o=0,a=0;for(let l=0;l<i;l++){const u=Object(r.a)(t[l]);let h=!1;n.add(u.subscribe({next:t=>{h||(h=!0,a++),s[l]=t},error:t=>n.error(t),complete:()=>{o++,o!==i&&h||(a===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}class c{}const d=new s.r("NgValueAccessor"),p={provide:d,useExisting:Object(s.T)(()=>_),multi:!0},g=new s.r("CompositionEventMode");let _=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.q)()?Object(i.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.E),s.Jb(s.l),s.Jb(g,8))},t.\u0275dir=s.Eb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&s.Sb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[s.yb([p])]}),t})();function f(t){return null==t||0===t.length}function m(t){return null!=t&&"number"==typeof t.length}const b=new s.r("NgValidators"),y=new s.r("NgAsyncValidators"),v=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class C{static min(t){return function(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return function(t){return f(t.value)?{required:!0}:null}(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return f(t.value)||v.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>f(e.value)||!m(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>m(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return V;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(f(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:n,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return M(t)}static composeAsync(t){return k(t)}}function V(t){return null}function O(t){return null!=t}function A(t){const e=Object(s.qb)(t)?Object(r.a)(t):t;return Object(s.pb)(e),e}function w(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function E(t,e){return e.map(e=>e(t))}function S(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function M(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return w(E(t,e))}}function P(t){return null!=t?M(S(t)):null}function k(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(a.a)(e))return h(e,null);if(Object(u.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&Object(a.a)(t[0])?t[0]:t,null).pipe(Object(l.a)(t=>e(...t)))}return h(t,null)}(E(t,e).map(A)).pipe(Object(l.a)(w))}}function D(t){return null!=t?k(S(t)):null}function j(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function F(t){return t._rawValidators}function T(t){return t._rawAsyncValidators}let x=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=P(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=D(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Eb({type:t}),t})(),L=(()=>{class t extends x{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return U(e||t)},t.\u0275dir=s.Eb({type:t,features:[s.wb]}),t})();const U=s.Nb(L);class I extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class N{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let J=(()=>{class t extends N{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(I,2))},t.\u0275dir=s.Eb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&s.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[s.wb]}),t})(),$=(()=>{class t extends N{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(L,10))},t.\u0275dir=s.Eb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&s.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[s.wb]}),t})();function z(t,e){G(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&q(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&q(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function R(t,e,n=!0){const i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),X(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function W(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function G(t,e,n){const i=F(t);null!==e.validator?t.setValidators(j(i,e.validator)):"function"==typeof i&&t.setValidators([i]);const s=T(t);if(null!==e.asyncValidator?t.setAsyncValidators(j(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]),n){const n=()=>t.updateValueAndValidity();W(e._rawValidators,n),W(e._rawAsyncValidators,n)}}function X(t,e,n){let i=!1;if(null!==t){if(null!==e.validator){const n=F(t);if(Array.isArray(n)&&n.length>0){const s=n.filter(t=>t!==e.validator);s.length!==n.length&&(i=!0,t.setValidators(s))}}if(null!==e.asyncValidator){const n=T(t);if(Array.isArray(n)&&n.length>0){const s=n.filter(t=>t!==e.asyncValidator);s.length!==n.length&&(i=!0,t.setAsyncValidators(s))}}}if(n){const t=()=>{};W(e._rawValidators,t),W(e._rawAsyncValidators,t)}return i}function q(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function B(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const H="VALID",Z="INVALID",K="PENDING",Q="DISABLED";function Y(t){return(it(t)?t.validators:t)||null}function tt(t){return Array.isArray(t)?P(t):t||null}function et(t,e){return(it(e)?e.asyncValidators:t)||null}function nt(t){return Array.isArray(t)?D(t):t||null}function it(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class st{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=tt(this._rawValidators),this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===H}get invalid(){return this.status===Z}get pending(){return this.status==K}get disabled(){return this.status===Q}get enabled(){return this.status!==Q}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=tt(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=nt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=K,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Q,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=H,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==H&&this.status!==K||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Q:H}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=K,this._hasOwnPendingAsyncValidator=!0;const e=A(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof ot?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof at&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new s.n,this.statusChanges=new s.n}_calculateStatus(){return this._allControlsDisabled()?Q:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(K)?K:this._anyControlsHaveStatus(Z)?Z:H}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){it(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class rt extends st{constructor(t=null,e,n){super(Y(e),et(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){B(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){B(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class ot extends st{constructor(t,e,n){super(Y(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof rt?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class at extends st{constructor(t,e,n){super(Y(e),et(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof rt?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Eb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({}),t})();const ht=new s.r("NgModelWithFormControlWarning"),ct={provide:L,useExisting:Object(s.T)(()=>dt)};let dt=(()=>{class t extends L{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(X(this.form,this,!1),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return z(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){R(t.control||null,t,!1),B(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(R(e||null,t),n instanceof rt&&(z(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);(function(t,e){G(t,e,!1)})(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return X(t,e,!1)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){G(this.form,this,!1),this._oldForm&&X(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(b,10),s.Jb(y,10))},t.\u0275dir=s.Eb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&s.Sb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s.yb([ct]),s.wb,s.xb]}),t})();const pt={provide:I,useExisting:Object(s.T)(()=>gt)};let gt=(()=>{class t extends I{constructor(t,e,n,i,r){super(),this._ngModelWarningConfig=r,this._added=!1,this.update=new s.n,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,i,s;return Array.isArray(e),e.forEach(t=>{t.constructor===_?n=t:Object.getPrototypeOf(t.constructor)===c?i=t:s=t}),s||i||n||null}(0,i)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(L,13),s.Jb(b,10),s.Jb(y,10),s.Jb(d,10),s.Jb(ht,8))},t.\u0275dir=s.Eb({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[s.yb([pt]),s.wb,s.xb]}),t._ngModelWarningSentOnce=!1,t})();const _t={provide:d,useExisting:Object(s.T)(()=>mt),multi:!0};function ft(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let mt=(()=>{class t extends c{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=ft(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.E),s.Jb(s.l))},t.\u0275dir=s.Eb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&s.Sb("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[s.yb([_t]),s.wb]}),t})(),bt=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ft(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.l),s.Jb(s.E),s.Jb(mt,9))},t.\u0275dir=s.Eb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();const yt={provide:d,useExisting:Object(s.T)(()=>Ct),multi:!0};function vt(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let Ct=(()=>{class t extends c{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const i=t.item(e),s=this._getOptionValue(i.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const i=t.item(e);if(i.selected){const t=this._getOptionValue(i.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.E),s.Jb(s.l))},t.\u0275dir=s.Eb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&s.Sb("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[s.yb([yt]),s.wb]}),t})(),Vt=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(vt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(vt(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.l),s.Jb(s.E),s.Jb(Ct,9))},t.\u0275dir=s.Eb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),Ot=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[ut]]}),t})(),At=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ht,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[Ot]}),t})(),wt=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let i,s=null,r=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(s=null!=e.validators?e.validators:null,r=null!=e.asyncValidators?e.asyncValidators:null,i=null!=e.updateOn?e.updateOn:void 0):(s=null!=e.validator?e.validator:null,r=null!=e.asyncValidator?e.asyncValidator:null)),new ot(n,{asyncValidators:r,updateOn:i,validators:s})}control(t,e,n){return new rt(t,e,n)}array(t,e,n){const i=t.map(t=>this._createControl(t));return new at(i,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof rt||t instanceof ot||t instanceof at?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s.Fb)({factory:function(){return new t},token:t,providedIn:At}),t})();var Et=n("tyNb"),St=n("vkgz"),Mt=n("eIep"),Pt=n("LRne"),kt=n("itXk"),Dt=n("tk/3");let jt=(()=>{class t{constructor(t){this.http=t,this.baseUrl="https://restcountries.eu/rest/v2",this._regiones=["Africa","Americas","Asia","Europe","Oceania"]}get regiones(){return[...this._regiones]}getPaisesPorRegion(t){return this.http.get(`${this.baseUrl}/region/${t}?fields=alpha3Code;name`)}getPaisPorCodigo(t){return t?this.http.get(`${this.baseUrl}/alpha/${t}`):Object(Pt.a)(null)}getPaisPorCodigoSmall(t){return this.http.get(`${this.baseUrl}/alpha/${t}?fields=alpha3Code;name`)}getPaisesPorCodigos(t){if(!t)return Object(Pt.a)([]);const e=[];return t.forEach(t=>{const n=this.getPaisPorCodigoSmall(t);e.push(n)}),Object(kt.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(Dt.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Ft(t,e){if(1&t&&(s.Mb(0,"option",12),s.Vb(1,"lowercase"),s.cc(2),s.Lb()),2&t){const t=e.$implicit;s.Xb("value",s.Wb(1,2,t)),s.zb(2),s.dc(t)}}function Tt(t,e){if(1&t&&(s.Mb(0,"option",12),s.cc(1),s.Lb()),2&t){const t=e.$implicit;s.Xb("value",t.alpha3Code),s.zb(1),s.dc(t.name)}}function xt(t,e){if(1&t&&(s.Mb(0,"div",2),s.Mb(1,"div",3),s.Mb(2,"label",4),s.cc(3,"Pa\xeds: "),s.Lb(),s.Mb(4,"select",13),s.Mb(5,"option",6),s.cc(6,"-- Seleccione pa\xeds --"),s.Lb(),s.bc(7,Tt,2,2,"option",7),s.Lb(),s.Lb(),s.Lb()),2&t){const t=s.Ub();s.zb(7),s.Xb("ngForOf",t.paises)}}function Lt(t,e){if(1&t&&(s.Mb(0,"option",12),s.cc(1),s.Lb()),2&t){const t=e.$implicit;s.Xb("value",t.alpha3Code),s.zb(1),s.dc(t.name)}}function Ut(t,e){if(1&t&&(s.Mb(0,"div",2),s.Mb(1,"div",3),s.Mb(2,"label",4),s.cc(3,"Fronteras: "),s.Lb(),s.Mb(4,"select",14),s.Mb(5,"option",6),s.cc(6,"-- Seleccione pa\xeds fronterizo --"),s.Lb(),s.bc(7,Lt,2,2,"option",7),s.Lb(),s.Lb(),s.Lb()),2&t){const t=s.Ub();s.zb(7),s.Xb("ngForOf",t.fronteras)}}function It(t,e){1&t&&(s.Mb(0,"div",10),s.Mb(1,"div",3),s.Mb(2,"div",15),s.cc(3," Cargando..! "),s.Lb(),s.Lb(),s.Lb())}const Nt=[{path:"",children:[{path:"selector",component:(()=>{class t{constructor(t,e){this.fb=t,this.paisesService=e,this.miFormulario=this.fb.group({region:["",C.required],pais:["",C.required],frontera:[{value:""},C.required]}),this.regiones=[],this.paises=[],this.fronteras=[],this.cargando=!1}ngOnInit(){var t,e;this.regiones=this.paisesService.regiones,null===(t=this.miFormulario.get("region"))||void 0===t||t.valueChanges.pipe(Object(St.a)(t=>{var e;null===(e=this.miFormulario.get("pais"))||void 0===e||e.reset(""),this.cargando=!0}),Object(Mt.a)(t=>this.paisesService.getPaisesPorRegion(t))).subscribe(t=>{this.paises=t,this.cargando=!1}),null===(e=this.miFormulario.get("pais"))||void 0===e||e.valueChanges.pipe(Object(St.a)(()=>{var t;null===(t=this.miFormulario.get("frontera"))||void 0===t||t.reset(""),this.cargando=!0}),Object(Mt.a)(t=>this.paisesService.getPaisPorCodigo(t)),Object(Mt.a)(t=>this.paisesService.getPaisesPorCodigos(null==t?void 0:t.borders))).subscribe(t=>{this.fronteras=t,this.cargando=!1})}guardar(){console.log(this.miFormulario.value)}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(wt),s.Jb(jt))},t.\u0275cmp=s.Db({type:t,selectors:[["app-selector-pages"]],decls:27,vars:11,consts:[[1,"mt-5"],[3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col"],[1,"form-label"],["formControlName","region",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","row mb-3",4,"ngIf"],["class","row",4,"ngIf"],[1,"row"],["type","submit",1,"btn","btn-primary","float-end"],[3,"value"],["formControlName","pais",1,"form-control"],["formControlName","frontera",1,"form-control"],[1,"alert","alert-primary"]],template:function(t,e){1&t&&(s.Mb(0,"h1",0),s.cc(1," Selectores anidados "),s.Lb(),s.Kb(2,"hr"),s.Mb(3,"form",1),s.Sb("ngSubmit",function(){return e.guardar()}),s.Mb(4,"div",2),s.Mb(5,"div",3),s.Mb(6,"label",4),s.cc(7,"Continente: "),s.Lb(),s.Mb(8,"select",5),s.Mb(9,"option",6),s.cc(10,"-- Seleccione continente --"),s.Lb(),s.bc(11,Ft,3,4,"option",7),s.Lb(),s.Lb(),s.Lb(),s.bc(12,xt,8,1,"div",8),s.bc(13,Ut,8,1,"div",8),s.bc(14,It,4,0,"div",9),s.Mb(15,"div",10),s.Mb(16,"div",3),s.Mb(17,"button",11),s.cc(18," Seleccionar "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(19,"h3"),s.cc(20,"Formulario"),s.Lb(),s.Mb(21,"pre"),s.cc(22),s.Vb(23,"json"),s.Lb(),s.Mb(24,"pre"),s.cc(25),s.Vb(26,"json"),s.Lb()),2&t&&(s.zb(3),s.Xb("formGroup",e.miFormulario),s.zb(8),s.Xb("ngForOf",e.regiones),s.zb(1),s.Xb("ngIf",0!==e.paises.length),s.zb(1),s.Xb("ngIf",0!==e.fronteras.length),s.zb(1),s.Xb("ngIf",e.cargando),s.zb(8),s.ec("Valid: ",s.Wb(23,7,e.miFormulario.valid),""),s.zb(3),s.ec("Value: ",s.Wb(26,9,e.miFormulario.value),""))},directives:[lt,$,dt,mt,J,gt,bt,Vt,i.j,i.k],pipes:[i.e,i.i],encapsulation:2}),t})()},{path:"**",redirectTo:"selector"}]}];let Jt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[Et.a.forChild(Nt)],Et.a]}),t})(),$t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({imports:[[i.b,At,Jt]]}),t})()}}]);