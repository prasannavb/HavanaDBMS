function tv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),rv=Symbol.for("react.portal"),iv=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),av=Symbol.for("react.context"),uv=Symbol.for("react.forward_ref"),cv=Symbol.for("react.suspense"),dv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),ad=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var Of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Af=Object.assign,Df={};function Ar(t,e,n){this.props=t,this.context=e,this.refs=Df,this.updater=n||Of}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ar.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lf(){}Lf.prototype=Ar.prototype;function Nu(t,e,n){this.props=t,this.context=e,this.refs=Df,this.updater=n||Of}var Ru=Nu.prototype=new Lf;Ru.constructor=Nu;Af(Ru,Ar.prototype);Ru.isPureReactComponent=!0;var ud=Array.isArray,bf=Object.prototype.hasOwnProperty,xu={current:null},Mf={key:!0,ref:!0,__self:!0,__source:!0};function Uf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bf.call(e,r)&&!Mf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:xu.current}}function pv(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cd=/\/+/g;function El(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mv(""+t.key):e.toString(36)}function Us(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case rv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+El(o,0):r,ud(i)?(n="",t!=null&&(n=t.replace(cd,"$&/")+"/"),Us(i,e,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=pv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ud(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+El(s,l);o+=Us(s,e,n,a,i)}else if(a=fv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+El(s,l++),o+=Us(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gs(t,e,n){if(t==null)return t;var r=[],i=0;return Us(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Re={current:null},Fs={transition:null},_v={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:xu};b.Children={map:gs,forEach:function(t,e,n){gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gs(t,function(){e++}),e},toArray:function(t){return gs(t,function(e){return e})||[]},only:function(t){if(!Pu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=Ar;b.Fragment=iv;b.Profiler=ov;b.PureComponent=Nu;b.StrictMode=sv;b.Suspense=cv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Af({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bf.call(e,a)&&!Mf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};b.createContext=function(t){return t={$$typeof:av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lv,_context:t},t.Consumer=t};b.createElement=Uf;b.createFactory=function(t){var e=Uf.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:uv,render:t}};b.isValidElement=Pu;b.lazy=function(t){return{$$typeof:hv,_payload:{_status:-1,_result:t},_init:gv}};b.memo=function(t,e){return{$$typeof:dv,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=Fs.transition;Fs.transition={};try{t()}finally{Fs.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return Re.current.useCallback(t,e)};b.useContext=function(t){return Re.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Re.current.useDeferredValue(t)};b.useEffect=function(t,e){return Re.current.useEffect(t,e)};b.useId=function(){return Re.current.useId()};b.useImperativeHandle=function(t,e,n){return Re.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Re.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Re.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Re.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Re.current.useReducer(t,e,n)};b.useRef=function(t){return Re.current.useRef(t)};b.useState=function(t){return Re.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Re.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Re.current.useTransition()};b.version="18.2.0";(function(t){t.exports=b})(S);const h=nv(S.exports),aa=tv({__proto__:null,default:h},[S.exports]);var ua={},Ff={exports:{}},Be={},zf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,A){var D=T.length;T.push(A);e:for(;0<D;){var ne=D-1>>>1,ue=T[ne];if(0<i(ue,A))T[ne]=A,T[D]=ue,D=ne;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],D=T.pop();if(D!==A){T[0]=D;e:for(var ne=0,ue=T.length,ps=ue>>>1;ne<ps;){var mn=2*(ne+1)-1,yl=T[mn],gn=mn+1,ms=T[gn];if(0>i(yl,D))gn<ue&&0>i(ms,yl)?(T[ne]=ms,T[gn]=D,ne=gn):(T[ne]=yl,T[mn]=D,ne=mn);else if(gn<ue&&0>i(ms,D))T[ne]=ms,T[gn]=D,ne=gn;else break e}}return A}function i(T,A){var D=T.sortIndex-A.sortIndex;return D!==0?D:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,p=!1,v=!1,y=!1,O=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(u)}}function E(T){if(y=!1,_(T),!v)if(n(a)!==null)v=!0,_l(I);else{var A=n(u);A!==null&&vl(E,A.startTime-T)}}function I(T,A){v=!1,y&&(y=!1,g(x),x=-1),p=!0;var D=f;try{for(_(A),c=n(a);c!==null&&(!(c.expirationTime>A)||T&&!Je());){var ne=c.callback;if(typeof ne=="function"){c.callback=null,f=c.priorityLevel;var ue=ne(c.expirationTime<=A);A=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),_(A)}else r(a);c=n(a)}if(c!==null)var ps=!0;else{var mn=n(u);mn!==null&&vl(E,mn.startTime-A),ps=!1}return ps}finally{c=null,f=D,p=!1}}var N=!1,R=null,x=-1,$=5,L=-1;function Je(){return!(t.unstable_now()-L<$)}function $r(){if(R!==null){var T=t.unstable_now();L=T;var A=!0;try{A=R(!0,T)}finally{A?Kr():(N=!1,R=null)}}else N=!1}var Kr;if(typeof m=="function")Kr=function(){m($r)};else if(typeof MessageChannel<"u"){var ld=new MessageChannel,ev=ld.port2;ld.port1.onmessage=$r,Kr=function(){ev.postMessage(null)}}else Kr=function(){O($r,0)};function _l(T){R=T,N||(N=!0,Kr())}function vl(T,A){x=O(function(){T(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,_l(I))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var D=f;f=A;try{return T()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=f;f=T;try{return A()}finally{f=D}},t.unstable_scheduleCallback=function(T,A,D){var ne=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ne+D:ne):D=ne,T){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=D+ue,T={id:d++,callback:A,priorityLevel:T,startTime:D,expirationTime:ue,sortIndex:-1},D>ne?(T.sortIndex=D,e(u,T),n(a)===null&&T===n(u)&&(y?(g(x),x=-1):y=!0,vl(E,D-ne))):(T.sortIndex=ue,e(a,T),v||p||(v=!0,_l(I))),T},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(T){var A=f;return function(){var D=f;f=A;try{return T.apply(this,arguments)}finally{f=D}}}})(Wf);(function(t){t.exports=Wf})(zf);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=S.exports,We=zf.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,Ti={};function Bn(t,e){wr(t,e),wr(t+"Capture",e)}function wr(t,e){for(Ti[t]=e,t=0;t<e.length;t++)jf.add(e[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},hd={};function yv(t){return ca.call(hd,t)?!0:ca.call(dd,t)?!1:vv.test(t)?hd[t]=!0:(dd[t]=!0,!1)}function Ev(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wv(t,e,n,r){if(e===null||typeof e>"u"||Ev(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Au(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ou,Au);_e[e]=new xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ou,Au);_e[e]=new xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ou,Au);_e[e]=new xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new xe(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Du(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wv(e,n,i,r)&&(n=null),r||i===null?yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_s=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Lu=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),fd=Symbol.iterator;function Gr(t){return t===null||typeof t!="object"?null:(t=fd&&t[fd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,wl;function oi(t){if(wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+t}var Sl=!1;function Cl(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oi(t):""}function Sv(t){switch(t.tag){case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return t=Cl(t.type,!1),t;case 11:return t=Cl(t.type.render,!1),t;case 1:return t=Cl(t.type,!0),t;default:return""}}function pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case qn:return"Portal";case da:return"Profiler";case Lu:return"StrictMode";case ha:return"Suspense";case fa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vf:return(t.displayName||"Context")+".Consumer";case Hf:return(t._context.displayName||"Context")+".Provider";case bu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mu:return e=t.displayName||null,e!==null?e:pa(t.type)||"Memo";case Ut:e=t._payload,t=t._init;try{return pa(t(e))}catch{}}return null}function Cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(e);case 8:return e===Lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iv(t){var e=Kf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vs(t){t._valueTracker||(t._valueTracker=Iv(t))}function Gf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ma(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qf(t,e){e=e.checked,e!=null&&Du(t,"checked",e,!1)}function ga(t,e){Qf(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_a(t,e.type,n):e.hasOwnProperty("defaultValue")&&_a(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _a(t,e,n){(e!=="number"||Zs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var li=Array.isArray;function cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function va(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(li(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function qf(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ys,Xf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ys=ys||document.createElement("div"),ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kv=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(t){kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hi[e]=hi[t]})});function Jf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hi.hasOwnProperty(t)&&hi[t]?(""+e).trim():e+"px"}function Zf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Tv=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(t,e){if(e){if(Tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,dr=null,hr=null;function vd(t){if(t=es(t)){if(typeof Ca!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Go(e),Ca(t.stateNode,t.type,e))}}function ep(t){dr?hr?hr.push(t):hr=[t]:dr=t}function tp(){if(dr){var t=dr,e=hr;if(hr=dr=null,vd(t),e)for(t=0;t<e.length;t++)vd(e[t])}}function np(t,e){return t(e)}function rp(){}var Il=!1;function ip(t,e,n){if(Il)return t(e,n);Il=!0;try{return np(t,e,n)}finally{Il=!1,(dr!==null||hr!==null)&&(rp(),tp())}}function Ri(t,e){var n=t.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Ia=!1;if(Nt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Ia=!1}function Nv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var fi=!1,eo=null,to=!1,ka=null,Rv={onError:function(t){fi=!0,eo=t}};function xv(t,e,n,r,i,s,o,l,a){fi=!1,eo=null,Nv.apply(Rv,arguments)}function Pv(t,e,n,r,i,s,o,l,a){if(xv.apply(this,arguments),fi){if(fi){var u=eo;fi=!1,eo=null}else throw Error(w(198));to||(to=!0,ka=u)}}function jn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yd(t){if(jn(t)!==t)throw Error(w(188))}function Ov(t){var e=t.alternate;if(!e){if(e=jn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yd(i),t;if(s===r)return yd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function op(t){return t=Ov(t),t!==null?lp(t):null}function lp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lp(t);if(e!==null)return e;t=t.sibling}return null}var ap=We.unstable_scheduleCallback,Ed=We.unstable_cancelCallback,Av=We.unstable_shouldYield,Dv=We.unstable_requestPaint,re=We.unstable_now,Lv=We.unstable_getCurrentPriorityLevel,Fu=We.unstable_ImmediatePriority,up=We.unstable_UserBlockingPriority,no=We.unstable_NormalPriority,bv=We.unstable_LowPriority,cp=We.unstable_IdlePriority,Ho=null,pt=null;function Mv(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ho,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:zv,Uv=Math.log,Fv=Math.LN2;function zv(t){return t>>>=0,t===0?32:31-(Uv(t)/Fv|0)|0}var Es=64,ws=4194304;function ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ai(l):(s&=o,s!==0&&(r=ai(s)))}else o=n&~i,o!==0?r=ai(o):s!==0&&(r=ai(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Wv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Wv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dp(){var t=Es;return Es<<=1,(Es&4194240)===0&&(Es=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ji(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function jv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function hp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var fp,Wu,pp,mp,gp,Na=!1,Ss=[],Qt=null,qt=null,Yt=null,xi=new Map,Pi=new Map,zt=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(t,e){switch(t){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(e.pointerId)}}function qr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=es(e),e!==null&&Wu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vv(t,e,n,r,i){switch(e){case"focusin":return Qt=qr(Qt,t,e,n,r,i),!0;case"dragenter":return qt=qr(qt,t,e,n,r,i),!0;case"mouseover":return Yt=qr(Yt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xi.set(s,qr(xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pi.set(s,qr(Pi.get(s)||null,t,e,n,r,i)),!0}return!1}function _p(t){var e=wn(t.target);if(e!==null){var n=jn(e);if(n!==null){if(e=n.tag,e===13){if(e=sp(n),e!==null){t.blockedOn=e,gp(t.priority,function(){pp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ra(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=es(n),e!==null&&Wu(e),t.blockedOn=n,!1;e.shift()}return!0}function Sd(t,e,n){zs(t)&&n.delete(e)}function $v(){Na=!1,Qt!==null&&zs(Qt)&&(Qt=null),qt!==null&&zs(qt)&&(qt=null),Yt!==null&&zs(Yt)&&(Yt=null),xi.forEach(Sd),Pi.forEach(Sd)}function Yr(t,e){t.blockedOn===e&&(t.blockedOn=null,Na||(Na=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,$v)))}function Oi(t){function e(i){return Yr(i,t)}if(0<Ss.length){Yr(Ss[0],t);for(var n=1;n<Ss.length;n++){var r=Ss[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qt!==null&&Yr(Qt,t),qt!==null&&Yr(qt,t),Yt!==null&&Yr(Yt,t),xi.forEach(e),Pi.forEach(e),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)_p(n),n.blockedOn===null&&zt.shift()}var fr=Dt.ReactCurrentBatchConfig,io=!0;function Kv(t,e,n,r){var i=B,s=fr.transition;fr.transition=null;try{B=1,Bu(t,e,n,r)}finally{B=i,fr.transition=s}}function Gv(t,e,n,r){var i=B,s=fr.transition;fr.transition=null;try{B=4,Bu(t,e,n,r)}finally{B=i,fr.transition=s}}function Bu(t,e,n,r){if(io){var i=Ra(t,e,n,r);if(i===null)bl(t,e,r,so,n),wd(t,r);else if(Vv(i,t,e,n,r))r.stopPropagation();else if(wd(t,r),e&4&&-1<Hv.indexOf(t)){for(;i!==null;){var s=es(i);if(s!==null&&fp(s),s=Ra(t,e,n,r),s===null&&bl(t,e,r,so,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bl(t,e,r,null,n)}}var so=null;function Ra(t,e,n,r){if(so=null,t=Uu(r),t=wn(t),t!==null)if(e=jn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return so=t,null}function vp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lv()){case Fu:return 1;case up:return 4;case no:case bv:return 16;case cp:return 536870912;default:return 16}default:return 16}}var $t=null,ju=null,Ws=null;function yp(){if(Ws)return Ws;var t,e=ju,n=e.length,r,i="value"in $t?$t.value:$t.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ws=i.slice(t,1<r?1-r:void 0)}function Bs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cs(){return!0}function Cd(){return!1}function je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cs:Cd,this.isPropagationStopped=Cd,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),e}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=je(Dr),Zi=ee({},Dr,{view:0,detail:0}),Qv=je(Zi),Tl,Nl,Xr,Vo=ee({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(Tl=t.screenX-Xr.screenX,Nl=t.screenY-Xr.screenY):Nl=Tl=0,Xr=t),Tl)},movementY:function(t){return"movementY"in t?t.movementY:Nl}}),Id=je(Vo),qv=ee({},Vo,{dataTransfer:0}),Yv=je(qv),Xv=ee({},Zi,{relatedTarget:0}),Rl=je(Xv),Jv=ee({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=je(Jv),ey=ee({},Dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=je(ey),ny=ee({},Dr,{data:0}),kd=je(ny),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function Vu(){return oy}var ly=ee({},Zi,{key:function(t){if(t.key){var e=ry[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=je(ly),uy=ee({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=je(uy),cy=ee({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),dy=je(cy),hy=ee({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=je(hy),py=ee({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=je(py),gy=[9,13,27,32],$u=Nt&&"CompositionEvent"in window,pi=null;Nt&&"documentMode"in document&&(pi=document.documentMode);var _y=Nt&&"TextEvent"in window&&!pi,Ep=Nt&&(!$u||pi&&8<pi&&11>=pi),Nd=String.fromCharCode(32),Rd=!1;function wp(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xn=!1;function vy(t,e){switch(t){case"compositionend":return Sp(e);case"keypress":return e.which!==32?null:(Rd=!0,Nd);case"textInput":return t=e.data,t===Nd&&Rd?null:t;default:return null}}function yy(t,e){if(Xn)return t==="compositionend"||!$u&&wp(t,e)?(t=yp(),Ws=ju=$t=null,Xn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ep&&e.locale!=="ko"?null:e.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ey[t.type]:e==="textarea"}function Cp(t,e,n,r){ep(r),e=oo(e,"onChange"),0<e.length&&(n=new Hu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mi=null,Ai=null;function wy(t){Lp(t,0)}function $o(t){var e=er(t);if(Gf(e))return t}function Sy(t,e){if(t==="change")return e}var Ip=!1;if(Nt){var xl;if(Nt){var Pl="oninput"in document;if(!Pl){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Pl=typeof Pd.oninput=="function"}xl=Pl}else xl=!1;Ip=xl&&(!document.documentMode||9<document.documentMode)}function Od(){mi&&(mi.detachEvent("onpropertychange",kp),Ai=mi=null)}function kp(t){if(t.propertyName==="value"&&$o(Ai)){var e=[];Cp(e,Ai,t,Uu(t)),ip(wy,e)}}function Cy(t,e,n){t==="focusin"?(Od(),mi=e,Ai=n,mi.attachEvent("onpropertychange",kp)):t==="focusout"&&Od()}function Iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Ai)}function ky(t,e){if(t==="click")return $o(e)}function Ty(t,e){if(t==="input"||t==="change")return $o(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:Ny;function Di(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ca.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dd(t,e){var n=Ad(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Tp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Np(){for(var t=window,e=Zs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zs(t.document)}return e}function Ku(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ry(t){var e=Np(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dd(n,s);var o=Dd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=Nt&&"documentMode"in document&&11>=document.documentMode,Jn=null,xa=null,gi=null,Pa=!1;function Ld(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pa||Jn==null||Jn!==Zs(r)||(r=Jn,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gi&&Di(gi,r)||(gi=r,r=oo(xa,"onSelect"),0<r.length&&(e=new Hu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jn)))}function Is(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zn={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},Ol={},Rp={};Nt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Ko(t){if(Ol[t])return Ol[t];if(!Zn[t])return t;var e=Zn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rp)return Ol[t]=e[n];return t}var xp=Ko("animationend"),Pp=Ko("animationiteration"),Op=Ko("animationstart"),Ap=Ko("transitionend"),Dp=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(t,e){Dp.set(t,e),Bn(e,[t])}for(var Al=0;Al<bd.length;Al++){var Dl=bd[Al],Py=Dl.toLowerCase(),Oy=Dl[0].toUpperCase()+Dl.slice(1);dn(Py,"on"+Oy)}dn(xp,"onAnimationEnd");dn(Pp,"onAnimationIteration");dn(Op,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Ap,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Md(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Pv(r,e,void 0,t),t.currentTarget=null}function Lp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Md(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Md(i,l,u),s=a}}}if(to)throw t=ka,to=!1,ka=null,t}function K(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(bp(e,t,2,!1),n.add(r))}function Ll(t,e,n){var r=0;e&&(r|=4),bp(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[ks]){t[ks]=!0,jf.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||Ll(n,!1,t),Ll(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,Ll("selectionchange",!1,e))}}function bp(t,e,n,r){switch(vp(e)){case 1:var i=Kv;break;case 4:i=Gv;break;default:i=Bu}n=i.bind(null,e,n,t),i=void 0,!Ia||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bl(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ip(function(){var u=s,d=Uu(n),c=[];e:{var f=Dp.get(t);if(f!==void 0){var p=Hu,v=t;switch(t){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":p=ay;break;case"focusin":v="focus",p=Rl;break;case"focusout":v="blur",p=Rl;break;case"beforeblur":case"afterblur":p=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dy;break;case xp:case Pp:case Op:p=Zv;break;case Ap:p=fy;break;case"scroll":p=Qv;break;case"wheel":p=my;break;case"copy":case"cut":case"paste":p=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Td}var y=(e&4)!==0,O=!y&&t==="scroll",g=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,_;m!==null;){_=m;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,g!==null&&(E=Ri(m,g),E!=null&&y.push(bi(m,E,_)))),O)break;m=m.return}0<y.length&&(f=new p(f,v,null,n,d),c.push({event:f,listeners:y}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Sa&&(v=n.relatedTarget||n.fromElement)&&(wn(v)||v[Rt]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?wn(v):null,v!==null&&(O=jn(v),v!==O||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=Id,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Td,E="onPointerLeave",g="onPointerEnter",m="pointer"),O=p==null?f:er(p),_=v==null?f:er(v),f=new y(E,m+"leave",p,n,d),f.target=O,f.relatedTarget=_,E=null,wn(d)===u&&(y=new y(g,m+"enter",v,n,d),y.target=_,y.relatedTarget=O,E=y),O=E,p&&v)t:{for(y=p,g=v,m=0,_=y;_;_=Kn(_))m++;for(_=0,E=g;E;E=Kn(E))_++;for(;0<m-_;)y=Kn(y),m--;for(;0<_-m;)g=Kn(g),_--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=Kn(y),g=Kn(g)}y=null}else y=null;p!==null&&Ud(c,f,p,y,!1),v!==null&&O!==null&&Ud(c,O,v,y,!0)}}e:{if(f=u?er(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var I=Sy;else if(xd(f))if(Ip)I=Ty;else{I=Iy;var N=Cy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=ky);if(I&&(I=I(t,u))){Cp(c,I,n,d);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&_a(f,"number",f.value)}switch(N=u?er(u):window,t){case"focusin":(xd(N)||N.contentEditable==="true")&&(Jn=N,xa=u,gi=null);break;case"focusout":gi=xa=Jn=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,Ld(c,n,d);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Ld(c,n,d)}var R;if($u)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xn?wp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Ep&&n.locale!=="ko"&&(Xn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xn&&(R=yp()):($t=d,ju="value"in $t?$t.value:$t.textContent,Xn=!0)),N=oo(u,x),0<N.length&&(x=new kd(x,t,null,n,d),c.push({event:x,listeners:N}),R?x.data=R:(R=Sp(n),R!==null&&(x.data=R)))),(R=_y?vy(t,n):yy(t,n))&&(u=oo(u,"onBeforeInput"),0<u.length&&(d=new kd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}Lp(c,e)})}function bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ri(t,n),s!=null&&r.unshift(bi(t,s,i)),s=Ri(t,e),s!=null&&r.push(bi(t,s,i))),t=t.return}return r}function Kn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ri(n,s),a!=null&&o.unshift(bi(n,a,l))):i||(a=Ri(n,s),a!=null&&o.push(bi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dy=/\r\n?/g,Ly=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(Dy,`
`).replace(Ly,"")}function Ts(t,e,n){if(e=Fd(e),Fd(t)!==e&&n)throw Error(w(425))}function lo(){}var Oa=null,Aa=null;function Da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(t){return zd.resolve(null).then(t).catch(Uy)}:La;function Uy(t){setTimeout(function(){throw t})}function Ml(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(e)}function Xt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),ht="__reactFiber$"+Lr,Mi="__reactProps$"+Lr,Rt="__reactContainer$"+Lr,ba="__reactEvents$"+Lr,Fy="__reactListeners$"+Lr,zy="__reactHandles$"+Lr;function wn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rt]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wd(t);t!==null;){if(n=t[ht])return n;t=Wd(t)}return e}t=n,n=t.parentNode}return null}function es(t){return t=t[ht]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function er(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Go(t){return t[Mi]||null}var Ma=[],tr=-1;function hn(t){return{current:t}}function q(t){0>tr||(t.current=Ma[tr],Ma[tr]=null,tr--)}function V(t,e){tr++,Ma[tr]=t.current,t.current=e}var un={},Ie=hn(un),De=hn(!1),xn=un;function Sr(t,e){var n=t.type.contextTypes;if(!n)return un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function ao(){q(De),q(Ie)}function Bd(t,e,n){if(Ie.current!==un)throw Error(w(168));V(Ie,e),V(De,n)}function Mp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Cv(t)||"Unknown",i));return ee({},n,r)}function uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||un,xn=Ie.current,V(Ie,t),V(De,De.current),!0}function jd(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Mp(t,e,xn),r.__reactInternalMemoizedMergedChildContext=t,q(De),q(Ie),V(Ie,t)):q(De),V(De,n)}var yt=null,Qo=!1,Ul=!1;function Up(t){yt===null?yt=[t]:yt.push(t)}function Wy(t){Qo=!0,Up(t)}function fn(){if(!Ul&&yt!==null){Ul=!0;var t=0,e=B;try{var n=yt;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yt=null,Qo=!1}catch(i){throw yt!==null&&(yt=yt.slice(t+1)),ap(Fu,fn),i}finally{B=e,Ul=!1}}return null}var nr=[],rr=0,co=null,ho=0,He=[],Ve=0,Pn=null,Et=1,wt="";function _n(t,e){nr[rr++]=ho,nr[rr++]=co,co=t,ho=e}function Fp(t,e,n){He[Ve++]=Et,He[Ve++]=wt,He[Ve++]=Pn,Pn=t;var r=Et;t=wt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-st(e)+i|n<<i|r,wt=s+t}else Et=1<<s|n<<i|r,wt=t}function Gu(t){t.return!==null&&(_n(t,1),Fp(t,1,0))}function Qu(t){for(;t===co;)co=nr[--rr],nr[rr]=null,ho=nr[--rr],nr[rr]=null;for(;t===Pn;)Pn=He[--Ve],He[Ve]=null,wt=He[--Ve],He[Ve]=null,Et=He[--Ve],He[Ve]=null}var Fe=null,Ue=null,X=!1,nt=null;function zp(t,e){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fe=t,Ue=Xt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fe=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pn!==null?{id:Et,overflow:wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fe=t,Ue=null,!0):!1;default:return!1}}function Ua(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fa(t){if(X){var e=Ue;if(e){var n=e;if(!Hd(t,e)){if(Ua(t))throw Error(w(418));e=Xt(n.nextSibling);var r=Fe;e&&Hd(t,e)?zp(r,n):(t.flags=t.flags&-4097|2,X=!1,Fe=t)}}else{if(Ua(t))throw Error(w(418));t.flags=t.flags&-4097|2,X=!1,Fe=t}}}function Vd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function Ns(t){if(t!==Fe)return!1;if(!X)return Vd(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Da(t.type,t.memoizedProps)),e&&(e=Ue)){if(Ua(t))throw Wp(),Error(w(418));for(;e;)zp(t,e),e=Xt(e.nextSibling)}if(Vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Xt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=Fe?Xt(t.stateNode.nextSibling):null;return!0}function Wp(){for(var t=Ue;t;)t=Xt(t.nextSibling)}function Cr(){Ue=Fe=null,X=!1}function qu(t){nt===null?nt=[t]:nt.push(t)}var By=Dt.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fo=hn(null),po=null,ir=null,Yu=null;function Xu(){Yu=ir=po=null}function Ju(t){var e=fo.current;q(fo),t._currentValue=e}function za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pr(t,e){po=t,Yu=ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Oe=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(Yu!==t)if(t={context:t,memoizedValue:e,next:null},ir===null){if(po===null)throw Error(w(308));ir=t,po.dependencies={lanes:0,firstContext:t}}else ir=ir.next=t;return e}var Sn=null;function Zu(t){Sn===null?Sn=[t]:Sn.push(t)}function Bp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zu(e)):(n.next=i.next,i.next=n),e.interleaved=n,xt(t,r)}function xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ft=!1;function ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(z&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xt(t,n)}return i=r.interleaved,i===null?(e.next=e,Zu(r)):(e.next=i.next,i.next=e),r.interleaved=e,xt(t,n)}function js(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zu(t,n)}}function $d(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mo(t,e,n,r){var i=t.updateQueue;Ft=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,p=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(p,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,c,f):v,f==null)break e;c=ee({},c,f);break e;case 2:Ft=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,a=c):d=d.next=p,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);An|=o,t.lanes=o,t.memoizedState=c}}function Kd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Hp=new Bf.Component().refs;function Wa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?jn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=en(t),s=kt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jt(t,s,i),e!==null&&(ot(e,t,i,r),js(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=en(t),s=kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jt(t,s,i),e!==null&&(ot(e,t,i,r),js(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=en(t),i=kt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jt(t,i,r),e!==null&&(ot(e,t,r,n),js(e,t,r))}};function Gd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Di(n,r)||!Di(i,s):!0}function Vp(t,e,n){var r=!1,i=un,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Le(e)?xn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Sr(t,i):un),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hp,ec(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Le(e)?xn:Ie.current,i.context=Sr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qo.enqueueReplaceState(i,i.state,null),mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Hp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Rs(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qd(t){var e=t._init;return e(t._payload)}function $p(t){function e(g,m){if(t){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=tn(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,_,E){return m===null||m.tag!==6?(m=Vl(_,g.mode,E),m.return=g,m):(m=i(m,_),m.return=g,m)}function a(g,m,_,E){var I=_.type;return I===Yn?d(g,m,_.props.children,E,_.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ut&&qd(I)===m.type)?(E=i(m,_.props),E.ref=Jr(g,m,_),E.return=g,E):(E=Qs(_.type,_.key,_.props,null,g.mode,E),E.ref=Jr(g,m,_),E.return=g,E)}function u(g,m,_,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=$l(_,g.mode,E),m.return=g,m):(m=i(m,_.children||[]),m.return=g,m)}function d(g,m,_,E,I){return m===null||m.tag!==7?(m=Tn(_,g.mode,E,I),m.return=g,m):(m=i(m,_),m.return=g,m)}function c(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Vl(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _s:return _=Qs(m.type,m.key,m.props,null,g.mode,_),_.ref=Jr(g,null,m),_.return=g,_;case qn:return m=$l(m,g.mode,_),m.return=g,m;case Ut:var E=m._init;return c(g,E(m._payload),_)}if(li(m)||Gr(m))return m=Tn(m,g.mode,_,null),m.return=g,m;Rs(g,m)}return null}function f(g,m,_,E){var I=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:l(g,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _s:return _.key===I?a(g,m,_,E):null;case qn:return _.key===I?u(g,m,_,E):null;case Ut:return I=_._init,f(g,m,I(_._payload),E)}if(li(_)||Gr(_))return I!==null?null:d(g,m,_,E,null);Rs(g,_)}return null}function p(g,m,_,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(_)||null,l(m,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _s:return g=g.get(E.key===null?_:E.key)||null,a(m,g,E,I);case qn:return g=g.get(E.key===null?_:E.key)||null,u(m,g,E,I);case Ut:var N=E._init;return p(g,m,_,N(E._payload),I)}if(li(E)||Gr(E))return g=g.get(_)||null,d(m,g,E,I,null);Rs(m,E)}return null}function v(g,m,_,E){for(var I=null,N=null,R=m,x=m=0,$=null;R!==null&&x<_.length;x++){R.index>x?($=R,R=null):$=R.sibling;var L=f(g,R,_[x],E);if(L===null){R===null&&(R=$);break}t&&R&&L.alternate===null&&e(g,R),m=s(L,m,x),N===null?I=L:N.sibling=L,N=L,R=$}if(x===_.length)return n(g,R),X&&_n(g,x),I;if(R===null){for(;x<_.length;x++)R=c(g,_[x],E),R!==null&&(m=s(R,m,x),N===null?I=R:N.sibling=R,N=R);return X&&_n(g,x),I}for(R=r(g,R);x<_.length;x++)$=p(R,g,x,_[x],E),$!==null&&(t&&$.alternate!==null&&R.delete($.key===null?x:$.key),m=s($,m,x),N===null?I=$:N.sibling=$,N=$);return t&&R.forEach(function(Je){return e(g,Je)}),X&&_n(g,x),I}function y(g,m,_,E){var I=Gr(_);if(typeof I!="function")throw Error(w(150));if(_=I.call(_),_==null)throw Error(w(151));for(var N=I=null,R=m,x=m=0,$=null,L=_.next();R!==null&&!L.done;x++,L=_.next()){R.index>x?($=R,R=null):$=R.sibling;var Je=f(g,R,L.value,E);if(Je===null){R===null&&(R=$);break}t&&R&&Je.alternate===null&&e(g,R),m=s(Je,m,x),N===null?I=Je:N.sibling=Je,N=Je,R=$}if(L.done)return n(g,R),X&&_n(g,x),I;if(R===null){for(;!L.done;x++,L=_.next())L=c(g,L.value,E),L!==null&&(m=s(L,m,x),N===null?I=L:N.sibling=L,N=L);return X&&_n(g,x),I}for(R=r(g,R);!L.done;x++,L=_.next())L=p(R,g,x,L.value,E),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?x:L.key),m=s(L,m,x),N===null?I=L:N.sibling=L,N=L);return t&&R.forEach(function($r){return e(g,$r)}),X&&_n(g,x),I}function O(g,m,_,E){if(typeof _=="object"&&_!==null&&_.type===Yn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _s:e:{for(var I=_.key,N=m;N!==null;){if(N.key===I){if(I=_.type,I===Yn){if(N.tag===7){n(g,N.sibling),m=i(N,_.props.children),m.return=g,g=m;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ut&&qd(I)===N.type){n(g,N.sibling),m=i(N,_.props),m.ref=Jr(g,N,_),m.return=g,g=m;break e}n(g,N);break}else e(g,N);N=N.sibling}_.type===Yn?(m=Tn(_.props.children,g.mode,E,_.key),m.return=g,g=m):(E=Qs(_.type,_.key,_.props,null,g.mode,E),E.ref=Jr(g,m,_),E.return=g,g=E)}return o(g);case qn:e:{for(N=_.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(g,m.sibling),m=i(m,_.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=$l(_,g.mode,E),m.return=g,g=m}return o(g);case Ut:return N=_._init,O(g,m,N(_._payload),E)}if(li(_))return v(g,m,_,E);if(Gr(_))return y(g,m,_,E);Rs(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,_),m.return=g,g=m):(n(g,m),m=Vl(_,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return O}var Ir=$p(!0),Kp=$p(!1),ts={},mt=hn(ts),Ui=hn(ts),Fi=hn(ts);function Cn(t){if(t===ts)throw Error(w(174));return t}function tc(t,e){switch(V(Fi,e),V(Ui,t),V(mt,ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ya(e,t)}q(mt),V(mt,e)}function kr(){q(mt),q(Ui),q(Fi)}function Gp(t){Cn(Fi.current);var e=Cn(mt.current),n=ya(e,t.type);e!==n&&(V(Ui,t),V(mt,n))}function nc(t){Ui.current===t&&(q(mt),q(Ui))}var J=hn(0);function go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fl=[];function rc(){for(var t=0;t<Fl.length;t++)Fl[t]._workInProgressVersionPrimary=null;Fl.length=0}var Hs=Dt.ReactCurrentDispatcher,zl=Dt.ReactCurrentBatchConfig,On=0,Z=null,oe=null,de=null,_o=!1,_i=!1,zi=0,jy=0;function ve(){throw Error(w(321))}function ic(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function sc(t,e,n,r,i,s){if(On=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hs.current=t===null||t.memoizedState===null?Ky:Gy,t=n(r,i),_i){s=0;do{if(_i=!1,zi=0,25<=s)throw Error(w(301));s+=1,de=oe=null,e.updateQueue=null,Hs.current=Qy,t=n(r,i)}while(_i)}if(Hs.current=vo,e=oe!==null&&oe.next!==null,On=0,de=oe=Z=null,_o=!1,e)throw Error(w(300));return t}function oc(){var t=zi!==0;return zi=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=t:de=de.next=t,de}function qe(){if(oe===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=de===null?Z.memoizedState:de.next;if(e!==null)de=e,oe=t;else{if(t===null)throw Error(w(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?Z.memoizedState=de=t:de=de.next=t}return de}function Wi(t,e){return typeof e=="function"?e(t):e}function Wl(t){var e=qe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((On&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,An|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,at(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,An|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bl(t){var e=qe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Oe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qp(){}function qp(t,e){var n=Z,r=qe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,lc(Jp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Xp.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(w(349));(On&30)!==0||Yp(n,e,i)}return i}function Yp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xp(t,e,n,r){e.value=n,e.getSnapshot=r,Zp(e)&&em(t)}function Jp(t,e,n){return n(function(){Zp(e)&&em(t)})}function Zp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function em(t){var e=xt(t,1);e!==null&&ot(e,t,1,-1)}function Yd(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},e.queue=t,t=t.dispatch=$y.bind(null,Z,t),[e.memoizedState,t]}function Bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tm(){return qe().memoizedState}function Vs(t,e,n,r){var i=dt();Z.flags|=t,i.memoizedState=Bi(1|e,n,void 0,r===void 0?null:r)}function Yo(t,e,n,r){var i=qe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&ic(r,o.deps)){i.memoizedState=Bi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Bi(1|e,n,s,r)}function Xd(t,e){return Vs(8390656,8,t,e)}function lc(t,e){return Yo(2048,8,t,e)}function nm(t,e){return Yo(4,2,t,e)}function rm(t,e){return Yo(4,4,t,e)}function im(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sm(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4,4,im.bind(null,e,t),n)}function ac(){}function om(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lm(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function am(t,e,n){return(On&21)===0?(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n):(at(n,e)||(n=dp(),Z.lanes|=n,An|=n,t.baseState=!0),e)}function Hy(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=zl.transition;zl.transition={};try{t(!1),e()}finally{B=n,zl.transition=r}}function um(){return qe().memoizedState}function Vy(t,e,n){var r=en(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cm(t))dm(e,n);else if(n=Bp(t,e,n,r),n!==null){var i=Ne();ot(n,t,r,i),hm(n,e,r)}}function $y(t,e,n){var r=en(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cm(t))dm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,o)){var a=e.interleaved;a===null?(i.next=i,Zu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Bp(t,e,i,r),n!==null&&(i=Ne(),ot(n,t,r,i),hm(n,e,r))}}function cm(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function dm(t,e){_i=_o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hm(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zu(t,n)}}var vo={readContext:Qe,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Ky={readContext:Qe,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:Xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vs(4194308,4,im.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vs(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vy.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:Yd,useDebugValue:ac,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=Yd(!1),e=t[0];return t=Hy.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=dt();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),fe===null)throw Error(w(349));(On&30)!==0||Yp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xd(Jp.bind(null,r,s,t),[t]),r.flags|=2048,Bi(9,Xp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dt(),e=fe.identifierPrefix;if(X){var n=wt,r=Et;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gy={readContext:Qe,useCallback:om,useContext:Qe,useEffect:lc,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:lm,useReducer:Wl,useRef:tm,useState:function(){return Wl(Wi)},useDebugValue:ac,useDeferredValue:function(t){var e=qe();return am(e,oe.memoizedState,t)},useTransition:function(){var t=Wl(Wi)[0],e=qe().memoizedState;return[t,e]},useMutableSource:Qp,useSyncExternalStore:qp,useId:um,unstable_isNewReconciler:!1},Qy={readContext:Qe,useCallback:om,useContext:Qe,useEffect:lc,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:rm,useMemo:lm,useReducer:Bl,useRef:tm,useState:function(){return Bl(Wi)},useDebugValue:ac,useDeferredValue:function(t){var e=qe();return oe===null?e.memoizedState=t:am(e,oe.memoizedState,t)},useTransition:function(){var t=Bl(Wi)[0],e=qe().memoizedState;return[t,e]},useMutableSource:Qp,useSyncExternalStore:qp,useId:um,unstable_isNewReconciler:!1};function Tr(t,e){try{var n="",r=e;do n+=Sv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function jl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ja(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function fm(t,e,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eo||(Eo=!0,Ja=r),ja(t,e)},n}function pm(t,e,n){n=kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ja(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ja(t,e),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=u0.bind(null,t,e,n),e.then(t,t))}function Zd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eh(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kt(-1,1),e.tag=2,Jt(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Yy=Dt.ReactCurrentOwner,Oe=!1;function Te(t,e,n,r){e.child=t===null?Kp(e,null,n,r):Ir(e,t.child,n,r)}function th(t,e,n,r,i){n=n.render;var s=e.ref;return pr(e,i),r=sc(t,e,n,r,s,i),n=oc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(X&&n&&Gu(e),e.flags|=1,Te(t,e,r,i),e.child)}function nh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mm(t,e,s,r,i)):(t=Qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(o,r)&&t.ref===e.ref)return Pt(t,e,i)}return e.flags|=1,t=tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function mm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Di(s,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Oe=!0);else return e.lanes=t.lanes,Pt(t,e,i)}return Ha(t,e,n,r,i)}function gm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(or,Me),Me|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(or,Me),Me|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(or,Me),Me|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(or,Me),Me|=r;return Te(t,e,i,n),e.child}function _m(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ha(t,e,n,r,i){var s=Le(n)?xn:Ie.current;return s=Sr(e,s),pr(e,i),n=sc(t,e,n,r,s,i),r=oc(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(X&&r&&Gu(e),e.flags|=1,Te(t,e,n,i),e.child)}function rh(t,e,n,r,i){if(Le(n)){var s=!0;uo(e)}else s=!1;if(pr(e,i),e.stateNode===null)$s(t,e),Vp(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Le(n)?xn:Ie.current,u=Sr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Qd(e,o,r,u),Ft=!1;var f=e.memoizedState;o.state=f,mo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||De.current||Ft?(typeof d=="function"&&(Wa(e,n,d,r),a=e.memoizedState),(l=Ft||Gd(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Le(n)?xn:Ie.current,a=Sr(e,a));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Qd(e,o,r,a),Ft=!1,f=e.memoizedState,o.state=f,mo(e,r,o,i);var v=e.memoizedState;l!==c||f!==v||De.current||Ft?(typeof p=="function"&&(Wa(e,n,p,r),v=e.memoizedState),(u=Ft||Gd(e,n,u,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Va(t,e,n,r,s,i)}function Va(t,e,n,r,i,s){_m(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jd(e,n,!1),Pt(t,e,s);r=e.stateNode,Yy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ir(e,t.child,null,s),e.child=Ir(e,null,l,s)):Te(t,e,l,s),e.memoizedState=r.state,i&&jd(e,n,!0),e.child}function vm(t){var e=t.stateNode;e.pendingContext?Bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bd(t,e.context,!1),tc(t,e.containerInfo)}function ih(t,e,n,r,i){return Cr(),qu(i),e.flags|=256,Te(t,e,n,r),e.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ka(t){return{baseLanes:t,cachePool:null,transitions:null}}function ym(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(J,i&1),t===null)return Fa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zo(o,r,0,null),t=Tn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ka(n),e.memoizedState=$a,t):uc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Xy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tn(l,s):(s=Tn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$a,r}return s=t.child,t=s.sibling,r=tn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uc(t,e){return e=Zo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xs(t,e,n,r){return r!==null&&qu(r),Ir(e,t.child,null,n),t=uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=jl(Error(w(422))),xs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zo({mode:"visible",children:r.children},i,0,null),s=Tn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ir(e,t.child,null,o),e.child.memoizedState=Ka(o),e.memoizedState=$a,s);if((e.mode&1)===0)return xs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=jl(s,r,void 0),xs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Oe||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xt(t,i),ot(r,t,i,-1))}return mc(),r=jl(Error(w(421))),xs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=c0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Xt(i.nextSibling),Fe=e,X=!0,nt=null,t!==null&&(He[Ve++]=Et,He[Ve++]=wt,He[Ve++]=Pn,Et=t.id,wt=t.overflow,Pn=e),e=uc(e,r.children),e.flags|=4096,e)}function sh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),za(t.return,e,n)}function Hl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Em(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Te(t,e,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sh(t,n,e);else if(t.tag===19)sh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(J,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hl(e,!0,n,null,s);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jy(t,e,n){switch(e.tag){case 3:vm(e),Cr();break;case 5:Gp(e);break;case 1:Le(e.type)&&uo(e);break;case 4:tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(J,J.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?ym(t,e,n):(V(J,J.current&1),t=Pt(t,e,n),t!==null?t.sibling:null);V(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Em(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,gm(t,e,n)}return Pt(t,e,n)}var wm,Ga,Sm,Cm;wm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};Sm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cn(mt.current);var s=null;switch(n){case"input":i=ma(t,i),r=ma(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=va(t,i),r=va(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lo)}Ea(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ti.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Cm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zr(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zy(t,e,n){var r=e.pendingProps;switch(Qu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(e),null;case 1:return Le(e.type)&&ao(),ye(e),null;case 3:return r=e.stateNode,kr(),q(De),q(Ie),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ns(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,nt!==null&&(tu(nt),nt=null))),Ga(t,e),ye(e),null;case 5:nc(e);var i=Cn(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)Sm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ye(e),null}if(t=Cn(mt.current),Ns(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ht]=e,r[Mi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)K(ui[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":pd(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":gd(r,s),K("invalid",r)}Ea(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,l,t),i=["children",""+l]):Ti.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":vs(r),md(r,s,!0);break;case"textarea":vs(r),_d(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ht]=e,t[Mi]=r,wm(t,e,!1,!1),e.stateNode=t;e:{switch(o=wa(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)K(ui[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":pd(t,r),i=ma(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",t);break;case"textarea":gd(t,r),i=va(t,r),K("invalid",t);break;default:i=r}Ea(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Zf(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xf(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ni(t,a):typeof a=="number"&&Ni(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ti.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&Du(t,s,a,o))}switch(n){case"input":vs(t),md(t,r,!1);break;case"textarea":vs(t),_d(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ye(e),null;case 6:if(t&&e.stateNode!=null)Cm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Cn(Fi.current),Cn(mt.current),Ns(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(s=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:Ts(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ye(e),null;case 13:if(q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Ue!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Wp(),Cr(),e.flags|=98560,s=!1;else if(s=Ns(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[ht]=e}else Cr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ye(e),s=!1}else nt!==null&&(tu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(J.current&1)!==0?ae===0&&(ae=3):mc())),e.updateQueue!==null&&(e.flags|=4),ye(e),null);case 4:return kr(),Ga(t,e),t===null&&Li(e.stateNode.containerInfo),ye(e),null;case 10:return Ju(e.type._context),ye(e),null;case 17:return Le(e.type)&&ao(),ye(e),null;case 19:if(q(J),s=e.memoizedState,s===null)return ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zr(s,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=go(t),o!==null){for(e.flags|=128,Zr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>Nr&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304)}else{if(!r)if(t=go(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return ye(e),null}else 2*re()-s.renderingStartTime>Nr&&n!==1073741824&&(e.flags|=128,r=!0,Zr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=J.current,V(J,r?n&1|2:n&1),e):(ye(e),null);case 22:case 23:return pc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Me&1073741824)!==0&&(ye(e),e.subtreeFlags&6&&(e.flags|=8192)):ye(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function e0(t,e){switch(Qu(e),e.tag){case 1:return Le(e.type)&&ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return kr(),q(De),q(Ie),rc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return nc(e),null;case 13:if(q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(J),null;case 4:return kr(),null;case 10:return Ju(e.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Ps=!1,Ee=!1,t0=typeof WeakSet=="function"?WeakSet:Set,k=null;function sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Qa(t,e,n){try{n()}catch(r){te(t,e,r)}}var oh=!1;function n0(t,e){if(Oa=io,t=Np(),Ku(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:t,selectionRange:n},io=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,O=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),O);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(E){te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return v=oh,oh=!1,v}function vi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qa(e,n,s)}i=i.next}while(i!==r)}}function Xo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Im(t){var e=t.alternate;e!==null&&(t.alternate=null,Im(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[Mi],delete e[ba],delete e[Fy],delete e[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function km(t){return t.tag===5||t.tag===3||t.tag===4}function lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lo));else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}var pe=null,tt=!1;function bt(t,e,n){for(n=n.child;n!==null;)Tm(t,e,n),n=n.sibling}function Tm(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ee||sr(n,e);case 6:var r=pe,i=tt;pe=null,bt(t,e,n),pe=r,tt=i,pe!==null&&(tt?(t=pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(tt?(t=pe,n=n.stateNode,t.nodeType===8?Ml(t.parentNode,n):t.nodeType===1&&Ml(t,n),Oi(t)):Ml(pe,n.stateNode));break;case 4:r=pe,i=tt,pe=n.stateNode.containerInfo,tt=!0,bt(t,e,n),pe=r,tt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Qa(n,e,o),i=i.next}while(i!==r)}bt(t,e,n);break;case 1:if(!Ee&&(sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}bt(t,e,n);break;case 21:bt(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,bt(t,e,n),Ee=r):bt(t,e,n);break;default:bt(t,e,n)}}function ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new t0),e.forEach(function(r){var i=d0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,tt=!1;break e;case 3:pe=l.stateNode.containerInfo,tt=!0;break e;case 4:pe=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(pe===null)throw Error(w(160));Tm(s,o,i),pe=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nm(e,t),e=e.sibling}function Nm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),ct(t),r&4){try{vi(3,t,t.return),Xo(3,t)}catch(y){te(t,t.return,y)}try{vi(5,t,t.return)}catch(y){te(t,t.return,y)}}break;case 1:Ze(e,t),ct(t),r&512&&n!==null&&sr(n,n.return);break;case 5:if(Ze(e,t),ct(t),r&512&&n!==null&&sr(n,n.return),t.flags&32){var i=t.stateNode;try{Ni(i,"")}catch(y){te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qf(i,s),wa(l,o);var u=wa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Zf(i,c):d==="dangerouslySetInnerHTML"?Xf(i,c):d==="children"?Ni(i,c):Du(i,d,c,u)}switch(l){case"input":ga(i,s);break;case"textarea":qf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?cr(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?cr(i,!!s.multiple,s.defaultValue,!0):cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mi]=s}catch(y){te(t,t.return,y)}}break;case 6:if(Ze(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){te(t,t.return,y)}}break;case 3:if(Ze(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(e.containerInfo)}catch(y){te(t,t.return,y)}break;case 4:Ze(e,t),ct(t);break;case 13:Ze(e,t),ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hc=re())),r&4&&ah(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||d,Ze(e,t),Ee=u):Ze(e,t),ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(f=k,p=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:sr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:sr(f,f.return);break;case 22:if(f.memoizedState!==null){ch(c);continue}}p!==null?(p.return=f,k=p):ch(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Jf("display",o))}catch(y){te(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){te(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),ct(t),r&4&&ah(t);break;case 21:break;default:Ze(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(km(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var s=lh(t);Xa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lh(t);Ya(t,l,o);break;default:throw Error(w(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function r0(t,e,n){k=t,Rm(t)}function Rm(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Ps;var u=Ee;if(Ps=o,(Ee=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?dh(i):a!==null?(a.return=o,k=a):dh(i);for(;s!==null;)k=s,Rm(s),s=s.sibling;k=i,Ps=l,Ee=u}uh(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,k=s):uh(t)}}function uh(t){for(;k!==null;){var e=k;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ee||Xo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Oi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||e.flags&512&&qa(e)}catch(f){te(e,e.return,f)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function ch(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function dh(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xo(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{qa(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{qa(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var i0=Math.ceil,yo=Dt.ReactCurrentDispatcher,cc=Dt.ReactCurrentOwner,Ge=Dt.ReactCurrentBatchConfig,z=0,fe=null,ie=null,ge=0,Me=0,or=hn(0),ae=0,ji=null,An=0,Jo=0,dc=0,yi=null,Pe=null,hc=0,Nr=1/0,vt=null,Eo=!1,Ja=null,Zt=null,Os=!1,Kt=null,wo=0,Ei=0,Za=null,Ks=-1,Gs=0;function Ne(){return(z&6)!==0?re():Ks!==-1?Ks:Ks=re()}function en(t){return(t.mode&1)===0?1:(z&2)!==0&&ge!==0?ge&-ge:By.transition!==null?(Gs===0&&(Gs=dp()),Gs):(t=B,t!==0||(t=window.event,t=t===void 0?16:vp(t.type)),t)}function ot(t,e,n,r){if(50<Ei)throw Ei=0,Za=null,Error(w(185));Ji(t,n,r),((z&2)===0||t!==fe)&&(t===fe&&((z&2)===0&&(Jo|=n),ae===4&&Wt(t,ge)),be(t,r),n===1&&z===0&&(e.mode&1)===0&&(Nr=re()+500,Qo&&fn()))}function be(t,e){var n=t.callbackNode;Bv(t,e);var r=ro(t,t===fe?ge:0);if(r===0)n!==null&&Ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ed(n),e===1)t.tag===0?Wy(hh.bind(null,t)):Up(hh.bind(null,t)),My(function(){(z&6)===0&&fn()}),n=null;else{switch(hp(r)){case 1:n=Fu;break;case 4:n=up;break;case 16:n=no;break;case 536870912:n=cp;break;default:n=no}n=Mm(n,xm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xm(t,e){if(Ks=-1,Gs=0,(z&6)!==0)throw Error(w(327));var n=t.callbackNode;if(mr()&&t.callbackNode!==n)return null;var r=ro(t,t===fe?ge:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=So(t,r);else{e=r;var i=z;z|=2;var s=Om();(fe!==t||ge!==e)&&(vt=null,Nr=re()+500,kn(t,e));do try{l0();break}catch(l){Pm(t,l)}while(1);Xu(),yo.current=s,z=i,ie!==null?e=0:(fe=null,ge=0,e=ae)}if(e!==0){if(e===2&&(i=Ta(t),i!==0&&(r=i,e=eu(t,i))),e===1)throw n=ji,kn(t,0),Wt(t,r),be(t,re()),n;if(e===6)Wt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!s0(i)&&(e=So(t,r),e===2&&(s=Ta(t),s!==0&&(r=s,e=eu(t,s))),e===1))throw n=ji,kn(t,0),Wt(t,r),be(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:vn(t,Pe,vt);break;case 3:if(Wt(t,r),(r&130023424)===r&&(e=hc+500-re(),10<e)){if(ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=La(vn.bind(null,t,Pe,vt),e);break}vn(t,Pe,vt);break;case 4:if(Wt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i0(r/1960))-r,10<r){t.timeoutHandle=La(vn.bind(null,t,Pe,vt),r);break}vn(t,Pe,vt);break;case 5:vn(t,Pe,vt);break;default:throw Error(w(329))}}}return be(t,re()),t.callbackNode===n?xm.bind(null,t):null}function eu(t,e){var n=yi;return t.current.memoizedState.isDehydrated&&(kn(t,e).flags|=256),t=So(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&tu(e)),t}function tu(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function s0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wt(t,e){for(e&=~dc,e&=~Jo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function hh(t){if((z&6)!==0)throw Error(w(327));mr();var e=ro(t,0);if((e&1)===0)return be(t,re()),null;var n=So(t,e);if(t.tag!==0&&n===2){var r=Ta(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=ji,kn(t,0),Wt(t,e),be(t,re()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,Pe,vt),be(t,re()),null}function fc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Nr=re()+500,Qo&&fn())}}function Dn(t){Kt!==null&&Kt.tag===0&&(z&6)===0&&mr();var e=z;z|=1;var n=Ge.transition,r=B;try{if(Ge.transition=null,B=1,t)return t()}finally{B=r,Ge.transition=n,z=e,(z&6)===0&&fn()}}function pc(){Me=or.current,q(or)}function kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,by(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:kr(),q(De),q(Ie),rc();break;case 5:nc(r);break;case 4:kr();break;case 13:q(J);break;case 19:q(J);break;case 10:Ju(r.type._context);break;case 22:case 23:pc()}n=n.return}if(fe=t,ie=t=tn(t.current,null),ge=Me=e,ae=0,ji=null,dc=Jo=An=0,Pe=yi=null,Sn!==null){for(e=0;e<Sn.length;e++)if(n=Sn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return t}function Pm(t,e){do{var n=ie;try{if(Xu(),Hs.current=vo,_o){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(On=0,de=oe=Z=null,_i=!1,zi=0,cc.current=null,n===null||n.return===null){ae=1,ji=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ge,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Zd(o);if(p!==null){p.flags&=-257,eh(p,o,l,s,e),p.mode&1&&Jd(s,u,e),e=p,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if((e&1)===0){Jd(s,u,e),mc();break e}a=Error(w(426))}}else if(X&&l.mode&1){var O=Zd(o);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),eh(O,o,l,s,e),qu(Tr(a,l));break e}}s=a=Tr(a,l),ae!==4&&(ae=2),yi===null?yi=[s]:yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=fm(s,a,e);$d(s,g);break e;case 1:l=a;var m=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Zt===null||!Zt.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=pm(s,l,e);$d(s,E);break e}}s=s.return}while(s!==null)}Dm(n)}catch(I){e=I,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Om(){var t=yo.current;return yo.current=vo,t===null?vo:t}function mc(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||(An&268435455)===0&&(Jo&268435455)===0||Wt(fe,ge)}function So(t,e){var n=z;z|=2;var r=Om();(fe!==t||ge!==e)&&(vt=null,kn(t,e));do try{o0();break}catch(i){Pm(t,i)}while(1);if(Xu(),z=n,yo.current=r,ie!==null)throw Error(w(261));return fe=null,ge=0,ae}function o0(){for(;ie!==null;)Am(ie)}function l0(){for(;ie!==null&&!Av();)Am(ie)}function Am(t){var e=bm(t.alternate,t,Me);t.memoizedProps=t.pendingProps,e===null?Dm(t):ie=e,cc.current=null}function Dm(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Zy(n,e,Me),n!==null){ie=n;return}}else{if(n=e0(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ie=null;return}}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);ae===0&&(ae=5)}function vn(t,e,n){var r=B,i=Ge.transition;try{Ge.transition=null,B=1,a0(t,e,n,r)}finally{Ge.transition=i,B=r}return null}function a0(t,e,n,r){do mr();while(Kt!==null);if((z&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jv(t,s),t===fe&&(ie=fe=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Os||(Os=!0,Mm(no,function(){return mr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ge.transition,Ge.transition=null;var o=B;B=1;var l=z;z|=4,cc.current=null,n0(t,n),Nm(n,t),Ry(Aa),io=!!Oa,Aa=Oa=null,t.current=n,r0(n),Dv(),z=l,B=o,Ge.transition=s}else t.current=n;if(Os&&(Os=!1,Kt=t,wo=i),s=t.pendingLanes,s===0&&(Zt=null),Mv(n.stateNode),be(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,t=Ja,Ja=null,t;return(wo&1)!==0&&t.tag!==0&&mr(),s=t.pendingLanes,(s&1)!==0?t===Za?Ei++:(Ei=0,Za=t):Ei=0,fn(),null}function mr(){if(Kt!==null){var t=hp(wo),e=Ge.transition,n=B;try{if(Ge.transition=null,B=16>t?16:t,Kt===null)var r=!1;else{if(t=Kt,Kt=null,wo=0,(z&6)!==0)throw Error(w(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if((k.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:vi(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var f=d.sibling,p=d.return;if(Im(d),d===u){k=null;break}if(f!==null){f.return=p,k=f;break}k=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var O=y.sibling;y.sibling=null,y=O}while(y!==null)}}k=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:vi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,k=g;break e}k=s.return}}var m=t.current;for(k=m;k!==null;){o=k;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,k=_;else e:for(o=m;k!==null;){if(l=k,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch(I){te(l,l.return,I)}if(l===o){k=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,k=E;break e}k=l.return}}if(z=i,fn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ho,t)}catch{}r=!0}return r}finally{B=n,Ge.transition=e}}return!1}function fh(t,e,n){e=Tr(n,e),e=fm(t,e,1),t=Jt(t,e,1),e=Ne(),t!==null&&(Ji(t,1,e),be(t,e))}function te(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){t=Tr(n,t),t=pm(e,t,1),e=Jt(e,t,1),t=Ne(),e!==null&&(Ji(e,1,t),be(e,t));break}}e=e.return}}function u0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>re()-hc?kn(t,0):dc|=n),be(t,e)}function Lm(t,e){e===0&&((t.mode&1)===0?e=1:(e=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var n=Ne();t=xt(t,e),t!==null&&(Ji(t,e,n),be(t,n))}function c0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lm(t,n)}function d0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Lm(t,n)}var bm;bm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||De.current)Oe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Oe=!1,Jy(t,e,n);Oe=(t.flags&131072)!==0}else Oe=!1,X&&(e.flags&1048576)!==0&&Fp(e,ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=Sr(e,Ie.current);pr(e,n),i=sc(null,e,r,t,i,n);var s=oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,uo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(e),i.updater=qo,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Va(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Gu(e),Te(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=f0(r),t=et(r,t),i){case 0:e=Ha(null,e,r,t,n);break e;case 1:e=rh(null,e,r,t,n);break e;case 11:e=th(null,e,r,t,n);break e;case 14:e=nh(null,e,r,et(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ha(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),rh(t,e,r,i,n);case 3:e:{if(vm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jp(t,e),mo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Tr(Error(w(423)),e),e=ih(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(w(424)),e),e=ih(t,e,r,n,i);break e}else for(Ue=Xt(e.stateNode.containerInfo.firstChild),Fe=e,X=!0,nt=null,n=Kp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===i){e=Pt(t,e,n);break e}Te(t,e,r,n)}e=e.child}return e;case 5:return Gp(e),t===null&&Fa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Da(r,i)?o=null:s!==null&&Da(r,s)&&(e.flags|=32),_m(t,e),Te(t,e,o,n),e.child;case 6:return t===null&&Fa(e),null;case 13:return ym(t,e,n);case 4:return tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ir(e,null,r,n):Te(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),th(t,e,r,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(fo,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!De.current){e=Pt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=kt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),za(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pr(e,n),i=Qe(i),r=r(i),e.flags|=1,Te(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),nh(t,e,r,i,n);case 15:return mm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),$s(t,e),e.tag=1,Le(r)?(t=!0,uo(e)):t=!1,pr(e,n),Vp(e,r,i),Ba(e,r,i,n),Va(null,e,r,!0,t,n);case 19:return Em(t,e,n);case 22:return gm(t,e,n)}throw Error(w(156,e.tag))};function Mm(t,e){return ap(t,e)}function h0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(t,e,n,r){return new h0(t,e,n,r)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f0(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bu)return 11;if(t===Mu)return 14}return 2}function tn(t,e){var n=t.alternate;return n===null?(n=$e(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yn:return Tn(n.children,i,s,e);case Lu:o=8,i|=8;break;case da:return t=$e(12,n,e,i|2),t.elementType=da,t.lanes=s,t;case ha:return t=$e(13,n,e,i),t.elementType=ha,t.lanes=s,t;case fa:return t=$e(19,n,e,i),t.elementType=fa,t.lanes=s,t;case $f:return Zo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hf:o=10;break e;case Vf:o=9;break e;case bu:o=11;break e;case Mu:o=14;break e;case Ut:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=$e(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Tn(t,e,n,r){return t=$e(7,t,r,e),t.lanes=n,t}function Zo(t,e,n,r){return t=$e(22,t,r,e),t.elementType=$f,t.lanes=n,t.stateNode={isHidden:!1},t}function Vl(t,e,n){return t=$e(6,t,null,e),t.lanes=n,t}function $l(t,e,n){return e=$e(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function p0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(t,e,n,r,i,s,o,l,a){return t=new p0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$e(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(s),t}function m0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Um(t){if(!t)return un;t=t._reactInternals;e:{if(jn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Le(n))return Mp(t,n,e)}return e}function Fm(t,e,n,r,i,s,o,l,a){return t=_c(n,r,!0,t,i,s,o,l,a),t.context=Um(null),n=t.current,r=Ne(),i=en(n),s=kt(r,i),s.callback=e!=null?e:null,Jt(n,s,i),t.current.lanes=i,Ji(t,i,r),be(t,r),t}function el(t,e,n,r){var i=e.current,s=Ne(),o=en(i);return n=Um(n),e.context===null?e.context=n:e.pendingContext=n,e=kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jt(i,e,o),t!==null&&(ot(t,i,o,s),js(t,i,o)),o}function Co(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vc(t,e){ph(t,e),(t=t.alternate)&&ph(t,e)}function g0(){return null}var zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function yc(t){this._internalRoot=t}tl.prototype.render=yc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));el(t,e,null,null)};tl.prototype.unmount=yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dn(function(){el(null,t,null,null)}),e[Rt]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=mp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zt.length&&e!==0&&e<zt[n].priority;n++);zt.splice(n,0,t),n===0&&_p(t)}};function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mh(){}function _0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Co(o);s.call(u)}}var o=Fm(e,r,t,0,null,!1,!1,"",mh);return t._reactRootContainer=o,t[Rt]=o.current,Li(t.nodeType===8?t.parentNode:t),Dn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Co(a);l.call(u)}}var a=_c(t,0,!1,null,null,!1,!1,"",mh);return t._reactRootContainer=a,t[Rt]=a.current,Li(t.nodeType===8?t.parentNode:t),Dn(function(){el(e,a,n,r)}),a}function rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Co(o);l.call(a)}}el(e,o,t,i)}else o=_0(n,e,t,i,r);return Co(o)}fp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ai(e.pendingLanes);n!==0&&(zu(e,n|1),be(e,re()),(z&6)===0&&(Nr=re()+500,fn()))}break;case 13:Dn(function(){var r=xt(t,1);if(r!==null){var i=Ne();ot(r,t,1,i)}}),vc(t,1)}};Wu=function(t){if(t.tag===13){var e=xt(t,134217728);if(e!==null){var n=Ne();ot(e,t,134217728,n)}vc(t,134217728)}};pp=function(t){if(t.tag===13){var e=en(t),n=xt(t,e);if(n!==null){var r=Ne();ot(n,t,e,r)}vc(t,e)}};mp=function(){return B};gp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};Ca=function(t,e,n){switch(e){case"input":if(ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Go(r);if(!i)throw Error(w(90));Gf(r),ga(r,i)}}}break;case"textarea":qf(t,n);break;case"select":e=n.value,e!=null&&cr(t,!!n.multiple,e,!1)}};np=fc;rp=Dn;var v0={usingClientEntryPoint:!1,Events:[es,er,Go,ep,tp,fc]},ei={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},y0={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=op(t),t===null?null:t.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||g0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Ho=As.inject(y0),pt=As}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(e))throw Error(w(200));return m0(t,e,null,n)};Be.createRoot=function(t,e){if(!Ec(t))throw Error(w(299));var n=!1,r="",i=zm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_c(t,1,!1,null,null,n,!1,r,i),t[Rt]=e.current,Li(t.nodeType===8?t.parentNode:t),new yc(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=op(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Dn(t)};Be.hydrate=function(t,e,n){if(!nl(e))throw Error(w(200));return rl(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!Ec(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fm(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Rt]=e.current,Li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tl(e)};Be.render=function(t,e,n){if(!nl(e))throw Error(w(200));return rl(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!nl(t))throw Error(w(40));return t._reactRootContainer?(Dn(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};Be.unstable_batchedUpdates=fc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return rl(t,e,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Be})(Ff);var gh=Ff.exports;ua.createRoot=gh.createRoot,ua.hydrateRoot=gh.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw br(e)},br=function(t){return new Error("Firebase Database ("+Wm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},E0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const f=s<<2|l>>4;if(r.push(f),u!==64){const p=l<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jm=function(t){const e=Bm(t);return wc.encodeByteArray(e,!0)},Io=function(t){return jm(t).replace(/\./g,"")},ko=function(t){try{return wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){return Hm(void 0,t)}function Hm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!S0(n)||(t[n]=Hm(t[n],e[n]));return t}function S0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function C0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I0(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $m(){return Wm.NODE_ADMIN===!0}function k0(){try{return typeof indexedDB=="object"}catch{return!1}}function T0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function N0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=()=>N0().__FIREBASE_DEFAULTS__,x0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},P0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ko(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return R0()||x0()||P0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Km=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},O0=t=>{const e=Km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},A0=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},Gm=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=L0,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?b0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pn(i,l,r)}}function b0(t,e){return t.replace(M0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const M0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hi(ko(s[0])||""),n=Hi(ko(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},U0=function(t){const e=Qm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},F0=function(t){const e=Qm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_h(s)&&_h(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _h(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function W0(t,e){const n=new B0(t,e);return n.subscribe.bind(n)}class B0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kl),i.error===void 0&&(i.error=Kl),i.complete===void 0&&(i.complete=Kl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kl(){}function qm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ic;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K0(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $0(t){return t===yn?void 0:t}function K0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const Q0={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},q0=H.INFO,Y0={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},X0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Y0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=q0,this._logHandler=X0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const J0=(t,e)=>e.some(n=>t instanceof n);let vh,yh;function Z0(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eE(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,ru=new WeakMap,Xm=new WeakMap,Gl=new WeakMap,Tc=new WeakMap;function tE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),Tc.set(e,t),e}function nE(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let iu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rE(t){iu=t(iu)}function iE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return Xm.set(r,e.sort?e.sort():[e]),nn(r)}:eE().includes(t)?function(...e){return t.apply(Ql(this),e),nn(Ym.get(this))}:function(...e){return nn(t.apply(Ql(this),e))}}function sE(t){return typeof t=="function"?iE(t):(t instanceof IDBTransaction&&nE(t),J0(t,Z0())?new Proxy(t,iu):t)}function nn(t){if(t instanceof IDBRequest)return tE(t);if(Gl.has(t))return Gl.get(t);const e=sE(t);return e!==t&&(Gl.set(t,e),Tc.set(e,t)),e}const Ql=t=>Tc.get(t);function oE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(nn(o.result),a.oldVersion,a.newVersion,nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const lE=["get","getKey","getAll","getAllKeys","count"],aE=["put","add","delete","clear"],ql=new Map;function Eh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ql.set(e,s),s}rE(t=>({...t,get:(e,n,r)=>Eh(e,n)||t.get(e,n,r),has:(e,n)=>!!Eh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const su="@firebase/app",wh="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new kc("@firebase/app"),dE="@firebase/app-compat",hE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",mE="@firebase/app-check",gE="@firebase/auth",_E="@firebase/auth-compat",vE="@firebase/database",yE="@firebase/database-compat",EE="@firebase/functions",wE="@firebase/functions-compat",SE="@firebase/installations",CE="@firebase/installations-compat",IE="@firebase/messaging",kE="@firebase/messaging-compat",TE="@firebase/performance",NE="@firebase/performance-compat",RE="@firebase/remote-config",xE="@firebase/remote-config-compat",PE="@firebase/storage",OE="@firebase/storage-compat",AE="@firebase/firestore",DE="@firebase/firestore-compat",LE="firebase",bE="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="[DEFAULT]",ME={[su]:"fire-core",[dE]:"fire-core-compat",[fE]:"fire-analytics",[hE]:"fire-analytics-compat",[mE]:"fire-app-check",[pE]:"fire-app-check-compat",[gE]:"fire-auth",[_E]:"fire-auth-compat",[vE]:"fire-rtdb",[yE]:"fire-rtdb-compat",[EE]:"fire-fn",[wE]:"fire-fn-compat",[SE]:"fire-iid",[CE]:"fire-iid-compat",[IE]:"fire-fcm",[kE]:"fire-fcm-compat",[TE]:"fire-perf",[NE]:"fire-perf-compat",[RE]:"fire-rc",[xE]:"fire-rc-compat",[PE]:"fire-gcs",[OE]:"fire-gcs-compat",[AE]:"fire-fst",[DE]:"fire-fst-compat","fire-js":"fire-js",[LE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map,lu=new Map;function UE(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(lu.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of Ro.values())UE(n,t);return!0}function Nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rn=new ns("app","Firebase",FE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=bE;function Jm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=A0()),!n)throw rn.create("no-options");const s=Ro.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new G0(i);for(const a of lu.values())o.addComponent(a);const l=new zE(n,r,o);return Ro.set(i,l),l}function Zm(t=ou){const e=Ro.get(t);if(!e&&t===ou)return Jm();if(!e)throw rn.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=ME[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}xr(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="firebase-heartbeat-database",BE=1,Vi="firebase-heartbeat-store";let Yl=null;function eg(){return Yl||(Yl=oE(WE,BE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),Yl}async function jE(t){try{return(await eg()).transaction(Vi).objectStore(Vi).get(tg(t))}catch(e){if(e instanceof pn)bn.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Sh(t,e){try{const r=(await eg()).transaction(Vi,"readwrite");return await r.objectStore(Vi).put(e,tg(t)),r.done}catch(n){if(n instanceof pn)bn.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1024,VE=30*24*60*60*1e3;class $E{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ch();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=VE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ch(),{heartbeatsToSend:n,unsentEntries:r}=KE(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ch(){return new Date().toISOString().substring(0,10)}function KE(t,e=HE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ih(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ih(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k0()?T0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ih(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){xr(new Ln("platform-logger",e=>new uE(e),"PRIVATE")),xr(new Ln("heartbeat",e=>new $E(e),"PRIVATE")),sn(su,wh,t),sn(su,wh,"esm2017"),sn("fire-js","")}QE("");function Rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ng(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qE=ng,rg=new ns("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new kc("@firebase/auth");function qs(t,...e){kh.logLevel<=H.ERROR&&kh.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw xc(t,...e)}function gt(t,...e){return xc(t,...e)}function YE(t,e,n){const r=Object.assign(Object.assign({},qE()),{[e]:n});return new ns("auth","Firebase",r).create(e,{appName:t.name})}function xc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function P(t,e,...n){if(!t)throw xc(e,...n)}function St(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qs(e),new Error(e)}function Ot(t,e){t||St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function Ct(t){Ot(t instanceof Function,"Expected a class definition");let e=Th.get(t);return e?(Ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Th.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e){const n=Nc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(No(s,e!=null?e:{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function JE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZE(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZE()||C0()||"connection"in navigator)?navigator.onLine:!0}function tw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Sc()||Vm()}get(){return ew()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){Ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new is(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return sg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Mr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ig.fetch()(og(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function sg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nw),e);try{const i=new iw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ds(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ds(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ds(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YE(t,d,u);ut(t,d)}}catch(i){if(i instanceof pn)throw i;ut(t,"network-request-failed")}}async function ss(t,e,n,r,i={}){const s=await Fr(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function og(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pc(t.config,i):`${t.config.apiScheme}://${i}`}class iw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),rw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ds(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function ow(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lw(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Oc(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wi(Xl(i.auth_time)),issuedAtTime:wi(Xl(i.iat)),expirationTime:wi(Xl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xl(t){return Number(t)*1e3}function Oc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ko(n);return i?JSON.parse(i):(qs("Failed to decode base64 JWT payload"),null)}catch(i){return qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aw(t){const e=Oc(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&uw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $i(t,ow(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fw(s.providerUserInfo):[],l=hw(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function dw(t){const e=Xe(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fw(t){return t.map(e=>{var{providerId:n}=e,r=Rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(t,e){const n=await sg(t,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=og(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ig.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ki;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ki,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lw(this,e)}reload(){return dw(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $i(this,sw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:E,isAnonymous:I,providerData:N,stsTokenManager:R}=n;P(_&&R,e,"internal-error");const x=Ki.fromJSON(this.name,R);P(typeof _=="string",e,"internal-error"),Mt(c,e.name),Mt(f,e.name),P(typeof E=="boolean",e,"internal-error"),P(typeof I=="boolean",e,"internal-error"),Mt(p,e.name),Mt(v,e.name),Mt(y,e.name),Mt(O,e.name),Mt(g,e.name),Mt(m,e.name);const $=new Nn({uid:_,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:I,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:x,createdAt:g,lastLoginAt:m});return N&&Array.isArray(N)&&($.providerData=N.map(L=>Object.assign({},L))),O&&($._redirectEventId=O),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ki;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xo(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ag.type="NONE";const Rh=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e,n){return`firebase:${t}:${e}:${n}`}class gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gr(Ct(Rh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ct(Rh);const o=Ys(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Nn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new gr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new gr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fg(e))return"Blackberry";if(pg(e))return"Webos";if(Ac(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ug(t=ke()){return/firefox\//i.test(t)}function Ac(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(t=ke()){return/crios\//i.test(t)}function dg(t=ke()){return/iemobile/i.test(t)}function hg(t=ke()){return/android/i.test(t)}function fg(t=ke()){return/blackberry/i.test(t)}function pg(t=ke()){return/webos/i.test(t)}function sl(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mw(t=ke()){var e;return sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gw(){return I0()&&document.documentMode===10}function mg(t=ke()){return sl(t)||hg(t)||pg(t)||fg(t)||/windows phone/i.test(t)||dg(t)}function _w(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e=[]){let n;switch(t){case"Browser":n=xh(ke());break;case"Worker":n=`${xh(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function os(t){return Xe(t)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=W0(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ew(t,e,n){const r=os(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_g(e),{host:o,port:l}=ww(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Sw()}function _g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ww(t){const e=_g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Oh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Oh(o)}}}function Oh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,n){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}}async function Cw(t,e){return Fr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}async function kw(t,e){return Fr(t,"POST","/v1/accounts:sendOobCode",Ur(t,e))}async function Tw(t,e){return kw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function Rw(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Dc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Iw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nw(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Cw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rw(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="http://localhost";class Mn extends Dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_r(e,n)}buildRequest(){const e={requestUri:xw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ow(t){const e=ci(di(t)).link,n=e?ci(di(e)).deep_link_id:null,r=ci(di(t)).deep_link_id;return(r?ci(di(r)).link:null)||r||n||e||t}class Lc{constructor(e){var n,r,i,s,o,l;const a=ci(di(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=Pw((i=a.mode)!==null&&i!==void 0?i:null);P(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ow(e);try{return new Lc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lc.parseLink(n);return P(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends vg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ls{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ls{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends ls{constructor(){super("twitter.com")}static credential(e,n){return Mn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e){return ss(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Ah(r);return new Un({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ah(r);return new Un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Po(e,n,r,i)}}function yg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(t,s,e,r):s})}async function Dw(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $i(t,yg(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Oc(s.idToken);P(o,r,"internal-error");const{sub:l}=o;return P(t.uid===l,r,"user-mismatch"),Un._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e,n=!1){const r="signIn",i=await yg(t,r,e),s=await Un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bw(t,e){return Eg(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(t,e,n){const r=Xe(t),i={requestType:"PASSWORD_RESET",email:e};n&&Mw(r,i,n),await Tw(r,i)}async function Fw(t,e,n){const r=os(t),i=await Aw(r,{returnSecureToken:!0,email:e,password:n}),s=await Un._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function zw(t,e,n){return bw(Xe(t),zr.credential(e,n))}function Ww(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Bw(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}const Oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){const t=ke();return Ac(t)||sl(t)}const Hw=1e3,Vw=10;class Sg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jw()&&_w(),this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sg.type="LOCAL";const $w=Sg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cg.type="SESSION";const Ig=Cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Kw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=bc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function Qw(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function qw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xw(){return kg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="firebaseLocalStorageDb",Jw=1,Ao="firebaseLocalStorage",Ng="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ll(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function Zw(){const t=indexedDB.deleteDatabase(Tg);return new as(t).toPromise()}function uu(){const t=indexedDB.open(Tg,Jw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ao,{keyPath:Ng})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await Zw(),e(await uu()))})})}async function Dh(t,e,n){const r=ll(t,!0).put({[Ng]:e,value:n});return new as(r).toPromise()}async function eS(t,e){const n=ll(t,!1).get(e),r=await new as(n).toPromise();return r===void 0?null:r.value}function Lh(t,e){const n=ll(t,!0).delete(e);return new as(n).toPromise()}const tS=800,nS=3;class Rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ol._getInstance(Xw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qw(),!this.activeServiceWorker)return;this.sender=new Gw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Dh(e,Oo,"1"),await Lh(e,Oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ll(i,!1).getAll();return new as(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rg.type="LOCAL";const rS=Rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iS().appendChild(r)})}function oS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){return e?Ct(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends Dc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aS(t){return Eg(t.auth,new Mc(t),t.bypassAuthState)}function uS(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Lw(n,new Mc(t),t.bypassAuthState)}async function cS(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Dw(n,new Mc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aS;case"linkViaPopup":case"linkViaRedirect":return cS;case"reauthViaPopup":case"reauthViaRedirect":return uS;default:ut(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new is(2e3,1e4);class lr extends xg{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dS.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="pendingRedirect",Xs=new Map;class fS extends xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xs.get(this.auth._key());if(!e){try{const r=await pS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xs.set(this.auth._key(),e)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pS(t,e){const n=_S(e),r=gS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mS(t,e){Xs.set(t._key(),e)}function gS(t){return Ct(t._redirectPersistence)}function _S(t){return Ys(hS,t.config.apiKey,t.name)}async function vS(t,e,n=!1){const r=os(t),i=lS(r,e),o=await new fS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=10*60*1e3;class ES{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(bh(e))}saveEventToCache(e){this.cachedEventUids.add(bh(e)),this.lastProcessedEventTime=Date.now()}}function bh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IS=/^https?/;async function kS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SS(t);for(const n of e)try{if(TS(n))return}catch{}ut(t,"unauthorized-domain")}function TS(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IS.test(n))return!1;if(CS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new is(3e4,6e4);function Mh(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RS(t){return new Promise((e,n)=>{var r,i,s;function o(){Mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mh(),n(gt(t,"network-request-failed"))},timeout:NS.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_t().gapi)===null||s===void 0)&&s.load)o();else{const l=oS("iframefcb");return _t()[l]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},sS(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Js=null,e})}let Js=null;function xS(t){return Js=Js||RS(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new is(5e3,15e3),OS="__/auth/iframe",AS="emulator/auth/iframe",DS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bS(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pc(e,AS):`https://${t.config.authDomain}/${OS}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=LS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mr(r).slice(1)}`}async function MS(t){const e=await xS(t),n=_t().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:bS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),l=_t().setTimeout(()=>{s(o)},PS.get());function a(){_t().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FS=500,zS=600,WS="_blank",BS="http://localhost";class Uh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jS(t,e,n,r=FS,i=zS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},US),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ke().toLowerCase();n&&(l=cg(u)?WS:n),ug(u)&&(e=e||BS,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(mw(u)&&l!=="_self")return HS(e||"",l),new Uh(null);const c=window.open(e||"",l,d);P(c,t,"popup-blocked");try{c.focus()}catch{}return new Uh(c)}function HS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="__/auth/handler",$S="emulator/auth/handler";function Fh(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof vg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof ls){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${KS(t)}?${Mr(l).slice(1)}`}function KS({config:t}){return t.emulator?Pc(t,$S):`https://${t.authDomain}/${VS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class GS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ig,this._completeRedirectFn=vS,this._overrideRedirectResult=mS}async _openPopup(e,n,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Fh(e,n,r,au(),i);return jS(e,o,bc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Qw(Fh(e,n,r,au(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MS(e),r=new ES(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jl];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||Ac()||sl()}}const QS=GS;var zh="@firebase/auth",Wh="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XS(t){xr(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{P(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),P(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(t)},d=new yw(l,a,u);return JE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new Ln("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new qS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(zh,Wh,YS(t)),sn(zh,Wh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=5*60,ZS=Gm("authIdTokenMaxAge")||JS;let Bh=null;const eC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZS)return;const i=n==null?void 0:n.token;Bh!==i&&(Bh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tC(t=Zm()){const e=Nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XE(t,{popupRedirectResolver:QS,persistence:[rS,$w,Ig]}),r=Gm("authTokenSyncURL");if(r){const s=eC(r);Bw(n,s,()=>s(n.currentUser)),Ww(n,o=>s(o))}const i=Km("auth");return i&&Ew(n,`http://${i}`),n}XS("Browser");var nC="firebase",rC="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(nC,rC,"app");const jh="@firebase/database",Hh="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og="";function iC(t){Og=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sC(e)}}catch{}return new oC},In=Ag("localStorage"),cu=Ag("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new kc("@firebase/database"),lC=function(){let t=1;return function(){return t++}}(),Dg=function(t){const e=H0(t),n=new z0;n.update(e);const r=n.digest();return wc.encodeByteArray(r)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=us.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Rn=null,Vh=!0;const aC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vr.logLevel=H.VERBOSE,Rn=vr.log.bind(vr),e&&cu.set("logging_enabled",!0)):typeof t=="function"?Rn=t:(Rn=null,cu.remove("logging_enabled"))},we=function(...t){if(Vh===!0&&(Vh=!1,Rn===null&&cu.get("logging_enabled")===!0&&aC(!0)),Rn){const e=us.apply(null,t);Rn(e)}},cs=function(t){return function(...e){we(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);vr.error(e)},At=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw vr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+us(...t);vr.warn(e)},uC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pr="[MIN_NAME]",Fn="[MAX_NAME]",Wr=function(t,e){if(t===e)return 0;if(t===Pr||e===Fn)return-1;if(e===Pr||t===Fn)return 1;{const n=$h(t),r=$h(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},dC=function(t,e){return t===e?0:t<e?-1:1},ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Uc=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=Uc(t[e[r]]);return n+="}",n},bg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Mg=function(t){C(!Lg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},hC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},pC=new RegExp("^-?(0*)\\d{1,10}$"),mC=-2147483648,gC=2147483647,$h=function(t){if(pC.test(t)){const e=Number(t);if(e>=mC&&e<=gC)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},_C=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class yr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="5",Ug="v",Fg="s",zg="r",Wg="f",Bg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jg="ls",Hg="p",hu="ac",Vg="websocket",$g="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function EC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gg(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Vg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$g)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);EC(t)&&(n.ns=t.namespace);const i=[];return Ye(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return w0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={},ea={};function zc(t){const e=t.toString();return Zl[e]||(Zl[e]=new wC),Zl[e]}function SC(t,e){const n=t.toString();return ea[n]||(ea[n]=e()),ea[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ds(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="start",IC="close",kC="pLPCommand",TC="pRTLPCB",Qg="id",qg="pw",Yg="ser",NC="cb",RC="seg",xC="ts",PC="d",OC="dframe",Xg=1870,Jg=30,AC=Xg-Jg,DC=25e3,LC=3e4;class ar{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cs(e),this.stats_=zc(n),this.urlFn=a=>(this.appCheckToken&&(a[hu]=this.appCheckToken),Gg(n,$g,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LC)),cC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kh)this.id=l,this.password=a;else if(o===IC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kh]="t",r[Yg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[NC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ug]=Fc,this.transportSessionId&&(r[Fg]=this.transportSessionId),this.lastSessionId&&(r[jg]=this.lastSessionId),this.applicationId&&(r[Hg]=this.applicationId),this.appCheckToken&&(r[hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bg.test(location.hostname)&&(r[zg]=Wg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ar.forceAllow_=!0}static forceDisallow(){ar.forceDisallow_=!0}static isAvailable(){return ar.forceAllow_?!0:!ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jm(n),i=bg(r,AC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OC]="t",r[Qg]=e,r[qg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lC(),window[kC+this.uniqueCallbackIdentifier]=e,window[TC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qg]=this.myID,e[qg]=this.myPW,e[Yg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Jg+r.length<=Xg;){const o=this.pendingSegs.shift();r=r+"&"+RC+i+"="+o.seg+"&"+xC+i+"="+o.ts+"&"+PC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(DC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=16384,MC=45e3;let Do=null;typeof MozWebSocket<"u"?Do=MozWebSocket:typeof WebSocket<"u"&&(Do=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cs(this.connId),this.stats_=zc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ug]=Fc,typeof location<"u"&&location.hostname&&Bg.test(location.hostname)&&(o[zg]=Wg),n&&(o[Fg]=n),r&&(o[jg]=r),i&&(o[hu]=i),s&&(o[Hg]=s),Gg(e,Vg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;$m(),this.mySock=new Do(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Do!==null&&!rt.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bg(n,bC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ar,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of Qi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=6e4,FC=5e3,zC=10*1024,WC=100*1024,ta="t",Gh="d",BC="s",Qh="r",jC="e",qh="o",Yh="a",Xh="n",Jh="p",HC="h";class VC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cs("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ta in e){const n=e[ta];n===Yh?this.upgradeIfSecondaryHealthy_():n===Qh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ti("t",e),r=ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ti(ta,e);if(Gh in e){const r=e[Gh];if(n===HC)this.onHandshake_(r);else if(n===Xh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BC?this.onConnectionShutdown_(r):n===Qh?this.onReset_(r):n===jC?du("Server Error: "+r):n===qh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fc!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(UC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends e_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lo}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=32,ef=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new Y("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function cn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function t_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $C(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function n_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function r_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Ke(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function i_(t,e){if(cn(t)!==cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(cn(t)>cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class KC{constructor(e,n){this.errorPrefix_=n,this.parts_=n_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=il(this.parts_[r]);s_(this)}}function GC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),s_(t)}function QC(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function s_(t){if(t.byteLength_>ef)throw new Error(t.errorPrefix_+"has a key path longer than "+ef+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zh+") or object contains a cycle "+En(t))}function En(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends e_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Bc}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=1e3,qC=60*5*1e3,tf=30*1e3,YC=1.3,XC=3e4,JC="server_kill",nf=3;class Tt extends Zg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ni,this.maxReconnectDelay_=qC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$m())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ic,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Tt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const r=Rr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||F0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=U0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XC&&(this.reconnectDelay_=ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new VC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(JC)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ze(c),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nu(this.interruptReasons_)&&(this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Uc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nf&&(this.reconnectDelay_=tf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Og.replace(/\./g,"-")]=1,Sc()?e["framework.cordova"]=1:Vm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lo.getInstance().currentlyOnline();return nu(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Pr,e),i=new F(Pr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class o_ extends al{static get __EMPTY_NODE(){return Ls}static set __EMPTY_NODE(e){Ls=e}compare(e,n){return Wr(e.name,n.name)}isDefinedOn(e){throw br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Fn,Ls)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ls)}toString(){return".key"}}const Er=new o_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:he.RED,this.left=i!=null?i:Ae.EMPTY_NODE,this.right=s!=null?s:Ae.EMPTY_NODE}copy(e,n,r,i,s){return new he(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ae.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class ZC{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bs(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new ZC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e){return Wr(t.name,e.name)}function jc(t,e){return Wr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;function tI(t){fu=t}const l_=function(t){return typeof t=="number"?"number:"+Mg(t):"string:"+t},a_=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else C(t===fu||t.isEmpty(),"priority of unexpected type.");C(t===fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),a_(this.priorityNode_)}static set __childrenNodeConstructor(e){rf=e}static get __childrenNodeConstructor(){return rf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Mg(this.value_):e+=this.value_,this.lazyHash_=Dg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u_,c_;function nI(t){u_=t}function rI(t){c_=t}class iI extends al{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Fn,new ce("[PRIORITY-POST]",c_))}makePost(e,n){const r=u_(e);return new F(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new iI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=Math.log(2);class oI{constructor(e){const n=s=>parseInt(Math.log(s)/sI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new he(f,c.node,he.BLACK,null,null);{const p=parseInt(d/2,10)+a,v=i(a,p),y=i(p+1,u);return c=t[p],f=n?n(c):c,new he(f,c.node,he.BLACK,v,y)}},s=function(a){let u=null,d=null,c=t.length;const f=function(v,y){const O=c-v,g=c;c-=v;const m=i(O+1,g),_=t[O],E=n?n(_):_;p(new he(E,_.node,y,null,m))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),O=Math.pow(2,a.count-(v+1));y?f(O,he.BLACK):(f(O,he.BLACK),f(O,he.RED))}return d},o=new oI(t.length),l=s(o);return new Ae(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const Gn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Gn&&Ce,"ChildrenNode.ts has not been loaded"),na=na||new It({".priority":Gn},{".priority":Ce}),na}get(e){const n=Rr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=bo(r,e.getCompare()):l=Gn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new It(d,u)}addToIndexes(e,n){const r=To(this.indexes_,(i,s)=>{const o=Rr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Gn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),bo(l,o.getCompare())}else return Gn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new It(r,this.indexSet_)}removeFromIndexes(e,n){const r=To(this.indexes_,i=>{if(i===Gn)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new It(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&a_(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ri||(ri=new W(new Ae(jc),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ri}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ri:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ri:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,l)=>{n[o]=l.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l_(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===Er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Er?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lI extends W{constructor(){super(new Ae(jc),W.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const hs=new lI;Object.defineProperties(F,{MIN:{value:new F(Pr,W.EMPTY_NODE)},MAX:{value:new F(Fn,hs)}});o_.__EMPTY_NODE=W.EMPTY_NODE;ce.__childrenNodeConstructor=W;tI(hs);rI(hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=!0;function Se(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,Se(e))}if(!(t instanceof Array)&&aI){const n=[];let r=!1;if(Ye(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=bo(n,eI,o=>o.name,jc);if(r){const o=bo(n,Ce.getCompare());return new W(s,Se(e),new It({".priority":o},{".priority":Ce}))}else return new W(s,Se(e),It.Default)}else{let n=W.EMPTY_NODE;return Ye(t,(r,i)=>{if(Lt(t,r)&&r.substring(0,1)!=="."){const s=Se(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Se(e))}}nI(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends al{constructor(e){super(),this.indexPath_=e,C(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}makePost(e,n){const r=Se(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,hs);return new F(Fn,e)}toString(){return n_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends al{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=Se(e);return new F(n,r)}toString(){return".value"}}const dI=new cI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){return{type:"value",snapshotNode:t}}function fI(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pI(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new Hc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function of(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===dI?n="$value":t.index_===Er?n="$key":(C(t.index_ instanceof uI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Zg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mo.getListenId_(e,r),l={};this.listens_[o]=l;const a=of(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Rr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Mo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=of(e._queryParams),r=e._path.toString(),i=new Ic;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Hi(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return{value:null,children:new Map}}function d_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Uo());const i=t.children.get(r);e=Q(e),d_(i,e,n)}}function pu(t,e,n){t.value!==null?n(e,t.value):_I(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);pu(i,s,n)})}function _I(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=10*1e3,yI=30*1e3,EI=5*60*1e3;class wI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vI(e);const r=af+(yI-af)*Math.random();Si(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ye(e,(i,s)=>{s>0&&Lt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*EI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function h_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function f_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function p_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=h_()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new Fo(j(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new Fo(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return U(this.path)?new zn(this.source,j(),this.snap.getImmediateChild(e)):new zn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new zn(this.source,j(),n.value):new qi(this.source,j(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function SI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mI(o.childName,o.snapshotNode))}),ii(t,i,"child_removed",e,r,n),ii(t,i,"child_added",e,r,n),ii(t,i,"child_moved",s,r,n),ii(t,i,"child_changed",e,r,n),ii(t,i,"value",e,r,n),i}function ii(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>II(t,l,a)),o.forEach(l=>{const a=CI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function CI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function II(t,e,n){if(e.childName==null||n.childName==null)throw br("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,r){return m_(new Vc(e,n,r),t.serverCache)}function g_(t,e,n,r){return m_(t.eventCache,new Vc(e,n,r))}function mu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const kI=()=>(ra||(ra=new Ae(dC)),ra);class G{constructor(e,n=kI()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Ye(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:le(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new G(null)}}set(e,n){if(U(e))return new G(n,this.children);{const r=M(e),s=(this.children.get(r)||new G(null)).set(Q(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new G(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),le(n,i),r):new G(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new G(null))}}function Ii(t,e,n){if(U(e))return new lt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ke(i,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new lt(s)}}}function uf(t,e,n){let r=t;return Ye(n,(i,s)=>{r=Ii(r,le(e,i),s)}),r}function cf(t,e){if(U(e))return lt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new lt(n)}}function gu(t,e){return Hn(t,e)!=null}function Hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function df(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function on(t,e){if(U(e))return t;{const n=Hn(t,e);return n!=null?new lt(new G(n)):new lt(t.writeTree_.subtree(e))}}function _u(t){return t.writeTree_.isEmpty()}function Or(t,e){return __(j(),t.writeTree_,e)}function __(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=__(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t,e){return C_(e,t)}function TI(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ii(t.visibleWrites,e,n)),t.lastWriteId=r}function NI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function RI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xI(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return PI(t),!0;if(r.snap)t.visibleWrites=cf(t.visibleWrites,r.path);else{const l=r.children;Ye(l,a=>{t.visibleWrites=cf(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function xI(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(le(t.path,n),e))return!0;return!1}function PI(t){t.visibleWrites=y_(t.allWrites,OI,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function OI(t){return t.visible}function y_(t,e,n){let r=lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ke(n,o),r=Ii(r,l,s.snap)):it(o,n)&&(l=Ke(o,n),r=Ii(r,j(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ke(n,o),r=uf(r,l,s.children);else if(it(o,n))if(l=Ke(o,n),U(l))r=uf(r,j(),s.children);else{const a=Rr(s.children,M(l));if(a){const u=a.getChild(Q(l));r=Ii(r,j(),u)}}}else throw br("WriteRecord should have .snap or .children")}}return r}function E_(t,e,n,r,i){if(!r&&!i){const s=Hn(t.visibleWrites,e);if(s!=null)return s;{const o=on(t.visibleWrites,e);if(_u(o))return n;if(n==null&&!gu(o,j()))return null;{const l=n||W.EMPTY_NODE;return Or(o,l)}}}else{const s=on(t.visibleWrites,e);if(!i&&_u(s))return n;if(!i&&n==null&&!gu(s,j()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=y_(t.allWrites,o,e),a=n||W.EMPTY_NODE;return Or(l,a)}}}function AI(t,e,n){let r=W.EMPTY_NODE;const i=Hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=on(t.visibleWrites,e);return n.forEachChild(Ce,(o,l)=>{const a=Or(on(s,new Y(o)),l);r=r.updateImmediateChild(o,a)}),df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=on(t.visibleWrites,e);return df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function DI(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(gu(t.visibleWrites,s))return null;{const o=on(t.visibleWrites,s);return _u(o)?i.getChild(n):Or(o,i.getChild(n))}}function LI(t,e,n,r){const i=le(e,n),s=Hn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=on(t.visibleWrites,i);return Or(o,r.getNode().getImmediateChild(n))}else return null}function bI(t,e){return Hn(t.visibleWrites,e)}function MI(t,e,n,r,i,s,o){let l;const a=on(t.visibleWrites,e),u=Hn(a,j());if(u!=null)l=u;else if(n!=null)l=Or(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function UI(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function vu(t,e,n,r){return E_(t.writeTree,t.treePath,e,n,r)}function w_(t,e){return AI(t.writeTree,t.treePath,e)}function hf(t,e,n,r){return DI(t.writeTree,t.treePath,e,n,r)}function zo(t,e){return bI(t.writeTree,le(t.treePath,e))}function FI(t,e,n,r,i,s){return MI(t.writeTree,t.treePath,e,n,r,i,s)}function $c(t,e,n){return LI(t.writeTree,t.treePath,e,n)}function S_(t,e){return C_(le(t.treePath,e),t.writeTree)}function C_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,sf(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pI(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fI(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,sf(r,e.snapshotNode,i.oldSnap));else throw br("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const I_=new WI;class Kc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $c(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wn(this.viewCache_),s=FI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function BI(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jI(t,e,n,r,i){const s=new zI;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=yu(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Wo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=VI(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Eu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=GI(t,e,u.path,r,i,s):o=$I(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=KI(t,e,n.path,r,s);else throw br("Unknown operation type: "+n.type);const a=s.getChanges();return HI(e,o,a),{viewCache:o,changes:a}}function HI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=mu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(hI(mu(e)))}}function k_(t,e,n,r,i,s){const o=e.eventCache;if(zo(r,n)!=null)return e;{let l,a;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Wn(e),d=u instanceof W?u:W.EMPTY_NODE,c=w_(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=vu(r,Wn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){C(cn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=hf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=hf(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=$c(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ci(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Wo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),p,null)}else{const p=M(n);if(!a.isCompleteForPath(n)&&cn(n)>1)return e;const v=Q(n),O=a.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(a.getNode(),O):u=d.updateChild(a.getNode(),p,O,v,I_,null)}const c=g_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),f=new Kc(i,c,s);return k_(t,c,n,i,f,l)}function yu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Kc(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ci(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ci(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=Q(n),p=l.getNode().getImmediateChild(c);let v;if(U(f))v=r;else{const y=d.getCompleteChild(c);y!=null?t_(f)===".priority"&&y.getChild(r_(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=W.EMPTY_NODE}if(p.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),c,v,f,d,o);a=Ci(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ff(t,e){return t.eventCache.isCompleteForChild(e)}function VI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=le(n,a);ff(e,M(d))&&(l=yu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=le(n,a);ff(e,M(d))||(l=yu(t,l,d,u,i,s,o))}),l}function pf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Eu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=pf(t,p,f);a=Wo(t,a,new Y(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),y=pf(t,v,f);a=Wo(t,a,new Y(c),y,i,s,o,l)}}),a}function $I(t,e,n,r,i,s,o){if(zo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Wo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new G(null);return a.getNode().forEachChild(Er,(d,c)=>{u=u.set(new Y(d),c)}),Eu(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const f=le(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),Eu(t,e,n,u,i,s,l,o)}}function KI(t,e,n,r,i){const s=e.serverCache,o=g_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return k_(t,o,n,r,I_,i)}function GI(t,e,n,r,i,s){let o;if(zo(r,n)!=null)return e;{const l=new Kc(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=vu(r,Wn(e));else{const c=e.serverCache.getNode();C(c instanceof W,"serverChildren would be complete if leaf node"),d=w_(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=$c(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,W.EMPTY_NODE,Q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vu(r,Wn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||zo(r,j())!=null,Ci(e,u,o,t.filter.filtersNodes())}}function QI(t,e){const n=Wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function mf(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(C(Wn(t.viewCache_),"We should always have a full cache before handling merges"),C(mu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jI(t.processor_,i,e,n,r);return BI(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,qI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return SI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;function YI(t){C(!gf,"__referenceConstructor has already been defined"),gf=t}function Gc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),mf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(mf(o,e,n,r));return s}}function Qc(t,e){let n=null;for(const r of t.views.values())n=n||QI(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;function XI(t){C(!_f,"__referenceConstructor has already been defined"),_f=t}class vf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=UI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function JI(t,e,n,r,i){return TI(t.pendingWriteTree_,e,n,r,i),i?cl(t,new zn(h_(),e,n)):[]}function ur(t,e,n=!1){const r=NI(t.pendingWriteTree_,e);if(RI(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(j(),!0):Ye(r.children,o=>{s=s.set(new Y(o),!0)}),cl(t,new Fo(r.path,s,n))}else return[]}function ul(t,e,n){return cl(t,new zn(f_(),e,n))}function ZI(t,e,n){const r=G.fromObject(n);return cl(t,new qi(f_(),e,r))}function e1(t,e,n,r){const i=x_(t,r);if(i!=null){const s=P_(i),o=s.path,l=s.queryId,a=Ke(o,e),u=new zn(p_(l),a,n);return O_(t,o,u)}else return[]}function t1(t,e,n,r){const i=x_(t,r);if(i){const s=P_(i),o=s.path,l=s.queryId,a=Ke(o,e),u=G.fromObject(n),d=new qi(p_(l),a,u);return O_(t,o,d)}else return[]}function T_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ke(o,e),u=Qc(l,a);if(u)return u});return E_(i,e,s,n,!0)}function cl(t,e){return N_(e,t.syncPointTree_,null,v_(t.pendingWriteTree_,j()))}function N_(t,e,n,r){if(U(t.path))return R_(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=Qc(i,j()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=S_(r,o);s=s.concat(N_(l,a,u,d))}return i&&(s=s.concat(Gc(i,t,r,n))),s}}function R_(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=Qc(i,j()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=S_(r,o),d=t.operationForChild(o);d&&(s=s.concat(R_(d,l,a,u)))}),i&&(s=s.concat(Gc(i,t,r,n))),s}function x_(t,e){return t.tagToQueryMap.get(e)}function P_(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function O_(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=v_(t.pendingWriteTree_,e);return Gc(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qc(n)}node(){return this.node_}}class Yc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Yc(this.syncTree_,n)}node(){return T_(this.syncTree_,this.path_)}}const n1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yf=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return i1(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},i1=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},s1=function(t,e,n,r){return Xc(e,new Yc(n,t),r)},o1=function(t,e,n){return Xc(t,new qc(e),n)};function Xc(t,e,n){const r=t.getPriority().val(),i=yf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=yf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,Se(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(Ce,(l,a)=>{const u=Xc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zc(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=M(n);for(;i!==null;){const s=Rr(r.node.children,i)||{children:{},childCount:0};r=new Jc(i,r,s),n=Q(n),i=M(n)}return r}function Br(t){return t.node.value}function A_(t,e){t.node.value=e,wu(t)}function D_(t){return t.node.childCount>0}function l1(t){return Br(t)===void 0&&!D_(t)}function dl(t,e){Ye(t.node.children,(n,r)=>{e(new Jc(n,t,r))})}function L_(t,e,n,r){n&&!r&&e(t),dl(t,i=>{L_(i,e,!0,r)}),n&&r&&e(t)}function a1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fs(t){return new Y(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function wu(t){t.parent!==null&&u1(t.parent,t.name,t)}function u1(t,e,n){const r=l1(n),i=Lt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=/[\[\].#$\/\u0000-\u001F\u007F]/,d1=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,b_=function(t){return typeof t=="string"&&t.length!==0&&!c1.test(t)},M_=function(t){return typeof t=="string"&&t.length!==0&&!d1.test(t)},h1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),M_(t)},U_=function(t,e,n){const r=n instanceof Y?new KC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+En(r));if(typeof e=="function")throw new Error(t+"contains a function "+En(r)+" with contents = "+e.toString());if(Lg(e))throw new Error(t+"contains "+e.toString()+" "+En(r));if(typeof e=="string"&&e.length>ia/3&&il(e)>ia)throw new Error(t+"contains a string greater than "+ia+" utf8 bytes "+En(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ye(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!b_(o)))throw new Error(t+" contains an invalid key ("+o+") "+En(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GC(r,o),U_(t,l,r),QC(r)}),i&&s)throw new Error(t+' contains ".value" child '+En(r)+" in addition to actual children.")}},F_=function(t,e,n,r){if(!(r&&n===void 0)&&!M_(n))throw new Error(qm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},f1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),F_(t,e,n,r)},p1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!b_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!h1(n))throw new Error(qm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function g1(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!i_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vn(t,e,n){g1(t,n),_1(t,r=>it(r,e)||it(e,r))}function _1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(v1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function v1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Rn&&we("event: "+n.toString()),ds(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="repo_interrupt",E1=25;class w1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new m1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uo(),this.transactionQueueTree_=new Jc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function S1(t,e,n){if(t.stats_=zc(t.repoInfo_),t.forceRestClient_||_C())t.server_=new Mo(t.repoInfo_,(r,i,s,o)=>{Ef(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(r,i,s,o)=>{Ef(t,r,i,s,o)},r=>{wf(t,r)},r=>{I1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=SC(t.repoInfo_,()=>new wI(t.stats_,t.server_)),t.infoData_=new gI,t.infoSyncTree_=new vf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ul(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ed(t,"connected",!1),t.serverSyncTree_=new vf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Vn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function C1(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function z_(t){return n1({timestamp:C1(t)})}function Ef(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=To(n,u=>Se(u));o=t1(t.serverSyncTree_,s,a,i)}else{const a=Se(n);o=e1(t.serverSyncTree_,s,a,i)}else if(r){const a=To(n,u=>Se(u));o=ZI(t.serverSyncTree_,s,a)}else{const a=Se(n);o=ul(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=nd(t,s)),Vn(t.eventQueue_,l,o)}function wf(t,e){ed(t,"connected",e),e===!1&&T1(t)}function I1(t,e){Ye(e,(n,r)=>{ed(t,n,r)})}function ed(t,e,n){const r=new Y("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(r,i);const s=ul(t.infoSyncTree_,r,i);Vn(t.eventQueue_,r,s)}function k1(t){return t.nextWriteId_++}function T1(t){W_(t,"onDisconnectEvents");const e=z_(t),n=Uo();pu(t.onDisconnect_,j(),(i,s)=>{const o=s1(i,s,t.serverSyncTree_,e);d_(n,i,o)});let r=[];pu(n,j(),(i,s)=>{r=r.concat(ul(t.serverSyncTree_,i,s));const o=P1(t,i);nd(t,o)}),t.onDisconnect_=Uo(),Vn(t.eventQueue_,j(),r)}function N1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(y1)}function W_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function B_(t,e,n){return T_(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function td(t,e=t.transactionQueueTree_){if(e||hl(t,e),Br(e)){const n=H_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&R1(t,fs(e),n)}else D_(e)&&dl(e,n=>{td(t,n)})}function R1(t,e,n){const r=n.map(u=>u.currentWriteId),i=B_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ke(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{W_(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ur(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hl(t,Zc(t.transactionQueueTree_,e)),td(t,t.transactionQueueTree_),Vn(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)ds(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}nd(t,e)}},o)}function nd(t,e){const n=j_(t,e),r=fs(n),i=H_(t,n);return x1(t,i,r),r}function x1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ke(n,a.path);let d=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=E1)d=!0,c="maxretry",i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else{const f=B_(t,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){U_("transaction failed: Data returned ",p,a.path);let v=Se(p);typeof p=="object"&&p!=null&&Lt(p,".priority")||(v=v.updatePriority(f.getPriority()));const O=a.currentWriteId,g=z_(t),m=o1(v,f,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=m,a.currentWriteId=k1(t),o.splice(o.indexOf(O),1),i=i.concat(JI(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),i=i.concat(ur(t.serverSyncTree_,O,!0))}else d=!0,c="nodata",i=i.concat(ur(t.serverSyncTree_,a.currentWriteId,!0))}Vn(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}hl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ds(r[l]);td(t,t.transactionQueueTree_)}function j_(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Br(r)===void 0;)r=Zc(r,n),e=Q(e),n=M(e);return r}function H_(t,e){const n=[];return V_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function V_(t,e,n){const r=Br(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);dl(e,i=>{V_(t,i,n)})}function hl(t,e){const n=Br(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,A_(e,n.length>0?n:void 0)}dl(e,r=>{hl(t,r)})}function P1(t,e){const n=fs(j_(t,e)),r=Zc(t.transactionQueueTree_,e);return a1(r,i=>{sa(t,i)}),sa(t,r),L_(r,i=>{sa(t,i)}),n}function sa(t,e){const n=Br(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?A_(e,void 0):n.length=s+1,Vn(t.eventQueue_,fs(e),i);for(let o=0;o<r.length;o++)ds(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function A1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sf=function(t,e){const n=D1(t),r=n.namespace;n.domain==="firebase.com"&&At(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&At("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},D1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=O1(t.substring(d,c)));const f=A1(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:t_(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=lf(this._queryParams),n=Uc(e);return n==="{}"?"default":n}get _queryObject(){return lf(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof rd))return!1;const n=this._repo===e._repo,r=i_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$C(this._path)}}class $n extends rd{constructor(e,n){super(e,n,new Hc,!1)}get parent(){const e=r_(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function L1(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?b1(t._root,e):t._root}function b1(t,e){return t=Xe(t),M(t._path)===null?f1("child","path",e,!1):F_("child","path",e,!1),new $n(t._repo,le(t._path,e))}YI($n);XI($n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="FIREBASE_DATABASE_EMULATOR_HOST",Su={};let U1=!1;function F1(t,e,n,r){t.repoInfo_=new Kg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function z1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||At("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[M1]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Sf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new yr(yr.OWNER):new yC(t.name,t.options,e);p1("Invalid Firebase Database URL",o),U(o.path)||At("Database URL must point to the root of a Firebase Database (not including a child path).");const c=B1(l,t,d,new vC(t.name,n));return new j1(c,t)}function W1(t,e){const n=Su[e];(!n||n[t.key]!==t)&&At(`Database ${e}(${t.repoInfo_}) has already been deleted.`),N1(t),delete n[t.key]}function B1(t,e,n,r){let i=Su[e.name];i||(i={},Su[e.name]=i);let s=i[t.toURLString()];return s&&At("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new w1(t,U1,n,r),i[t.toURLString()]=s,s}class j1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(S1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&At("Cannot call "+e+" on a deleted database.")}}function H1(t=Zm(),e){const n=Nc(t,"database").getImmediate({identifier:e}),r=O0("database");return r&&V1(n,...r),n}function V1(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&At("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&At('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new yr(yr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:D0(r.mockUserToken,t.app.options.projectId);s=new yr(o)}F1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){iC(rs),xr(new Ln("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return z1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),sn(jh,Hh,t),sn(jh,Hh,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$1();const $_=Jm({apiKey:"AIzaSyCFreGLdnCjJff0A5PFoNaYYSyhg9UxPJc",authDomain:"hotel-management-59639.firebaseapp.com",projectId:"hotel-management-59639",storageBucket:"hotel-management-59639.appspot.com",messagingSenderId:"301301647676",appId:"1:301301647676:web:a34fe89ebe162ad7df3639",measurementId:"G-GM32XQ5303"}),K1=H1($_),si=tC($_);L1(K1,"categories");const K_=h.createContext();function G1({children:t}){const[e,n]=S.exports.useState(),[r,i]=S.exports.useState(!0);function s(d,c){return Fw(si,d,c)}function o(d,c){return zw(si,d,c)}function l(){return si.signOut()}function a(d){return Uw(si,d)}S.exports.useEffect(()=>si.onAuthStateChanged(c=>{n(c),i(!1)}),[]);const u={currentUser:e,login:o,signup:s,logout:l,resetPassword:a};return h.createElement(K_.Provider,{value:u},!r&&t)}function id(){return S.exports.useContext(K_)}/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const Cf="popstate";function Q1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Cu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yi(i)}return X1(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function q1(){return Math.random().toString(36).substr(2,8)}function If(t){return{usr:t.state,key:t.key}}function Cu(t,e,n,r){return n===void 0&&(n=null),Bo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?jr(e):e,{state:n,key:e&&e.key||r||q1()})}function Yi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Y1(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Yi(t);return se(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function X1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Gt.Pop,a=null;function u(){l=Gt.Pop,a&&a({action:l,location:f.location})}function d(p,v){l=Gt.Push;let y=Cu(f.location,p,v);n&&n(y,p);let O=If(y),g=f.createHref(y);try{o.pushState(O,"",g)}catch{i.location.assign(g)}s&&a&&a({action:l,location:f.location})}function c(p,v){l=Gt.Replace;let y=Cu(f.location,p,v);n&&n(y,p);let O=If(y),g=f.createHref(y);o.replaceState(O,"",g),s&&a&&a({action:l,location:f.location})}let f={get action(){return l},get location(){return t(i,o)},listen(p){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Cf,u),a=p,()=>{i.removeEventListener(Cf,u),a=null}},createHref(p){return e(i,p)},encodeLocation(p){let v=Y1(typeof p=="string"?p:Yi(p));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:c,go(p){return o.go(p)}};return f}var kf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(kf||(kf={}));function J1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?jr(e):e,i=q_(r.pathname||"/",n);if(i==null)return null;let s=G_(t);Z1(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=ak(s[l],dk(i));return o}function G_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(se(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=ln([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),G_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ok(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Q_(s.path))i(s,o,a)}),e}function Q_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Z1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ek=/^:\w+$/,tk=3,nk=2,rk=1,ik=10,sk=-2,Tf=t=>t==="*";function ok(t,e){let n=t.split("/"),r=n.length;return n.some(Tf)&&(r+=sk),e&&(r+=nk),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(ek.test(s)?tk:s===""?rk:ik),r)}function lk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ak(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=uk({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:ln([i,d.pathname]),pathnameBase:mk(ln([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=ln([i,d.pathnameBase]))}return s}function uk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ck(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=l[c]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=hk(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ck(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dk(t){try{return decodeURI(t)}catch(e){return sd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hk(t,e){try{return decodeURIComponent(t)}catch(n){return sd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function q_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?jr(t):t;return{pathname:n?n.startsWith("/")?n:pk(n,e):e,search:gk(r),hash:_k(i)}}function pk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=jr(t):(i=Bo({},t),se(!i.pathname||!i.pathname.includes("?"),oa("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),oa("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),oa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}l=c>=0?e[c]:"/"}let a=fk(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),mk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_k=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class vk{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function yk(t){return t instanceof vk}const Ek=["post","put","patch","delete"];[...Ek];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iu(){return Iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Iu.apply(this,arguments)}function wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Sk=typeof Object.is=="function"?Object.is:wk,{useState:Ck,useEffect:Ik,useLayoutEffect:kk,useDebugValue:Tk}=aa;function Nk(t,e,n){const r=e(),[{inst:i},s]=Ck({inst:{value:r,getSnapshot:e}});return kk(()=>{i.value=r,i.getSnapshot=e,la(i)&&s({inst:i})},[t,r,e]),Ik(()=>(la(i)&&s({inst:i}),t(()=>{la(i)&&s({inst:i})})),[t]),Tk(r),r}function la(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Sk(n,r)}catch{return!0}}function Rk(t,e,n){return e()}const xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pk=!xk,Ok=Pk?Rk:Nk;"useSyncExternalStore"in aa&&(t=>t.useSyncExternalStore)(aa);const Ak=S.exports.createContext(null),Dk=S.exports.createContext(null),od=S.exports.createContext(null),fl=S.exports.createContext(null),pl=S.exports.createContext(null),Hr=S.exports.createContext({outlet:null,matches:[]}),J_=S.exports.createContext(null);function Lk(t,e){let{relative:n}=e===void 0?{}:e;Vr()||se(!1);let{basename:r,navigator:i}=S.exports.useContext(fl),{hash:s,pathname:o,search:l}=Z_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:ln([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Vr(){return S.exports.useContext(pl)!=null}function ml(){return Vr()||se(!1),S.exports.useContext(pl).location}function gl(){Vr()||se(!1);let{basename:t,navigator:e}=S.exports.useContext(fl),{matches:n}=S.exports.useContext(Hr),{pathname:r}=ml(),i=JSON.stringify(Y_(n).map(l=>l.pathnameBase)),s=S.exports.useRef(!1);return S.exports.useEffect(()=>{s.current=!0}),S.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=X_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ln([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function Z_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.exports.useContext(Hr),{pathname:i}=ml(),s=JSON.stringify(Y_(r).map(o=>o.pathnameBase));return S.exports.useMemo(()=>X_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function bk(t,e){Vr()||se(!1);let{navigator:n}=S.exports.useContext(fl),r=S.exports.useContext(od),{matches:i}=S.exports.useContext(Hr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=ml(),u;if(e){var d;let y=typeof e=="string"?jr(e):e;l==="/"||((d=y.pathname)==null?void 0:d.startsWith(l))||se(!1),u=y}else u=a;let c=u.pathname||"/",f=l==="/"?c:c.slice(l.length)||"/",p=J1(t,{pathname:f}),v=zk(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ln([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:ln([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&v?S.exports.createElement(pl.Provider,{value:{location:Iu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gt.Pop}},v):v}function Mk(){let t=Hk(),e=yk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return S.exports.createElement(S.exports.Fragment,null,S.exports.createElement("h2",null,"Unhandled Thrown Error!"),S.exports.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.exports.createElement("pre",{style:i},n):null,S.exports.createElement("p",null,"\u{1F4BF} Hey developer \u{1F44B}"),S.exports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own\xA0",S.exports.createElement("code",{style:s},"errorElement")," props on\xA0",S.exports.createElement("code",{style:s},"<Route>")))}class Uk extends S.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.exports.createElement(Hr.Provider,{value:this.props.routeContext},S.exports.createElement(J_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Fk(t){let{routeContext:e,match:n,children:r}=t,i=S.exports.useContext(Ak);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S.exports.createElement(Hr.Provider,{value:e},r)}function zk(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||se(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.exports.createElement(Mk,null):null,d=e.concat(r.slice(0,l+1)),c=()=>S.exports.createElement(Fk,{match:o,routeContext:{outlet:s,matches:d}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?S.exports.createElement(Uk,{location:n.location,component:u,error:a,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var Nf;(function(t){t.UseRevalidator="useRevalidator"})(Nf||(Nf={}));var jo;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(jo||(jo={}));function Wk(t){let e=S.exports.useContext(od);return e||se(!1),e}function Bk(t){let e=S.exports.useContext(Hr);return e||se(!1),e}function jk(t){let e=Bk(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function Hk(){var t;let e=S.exports.useContext(J_),n=Wk(jo.UseRouteError),r=jk(jo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Vk(t){let{to:e,replace:n,state:r,relative:i}=t;Vr()||se(!1);let s=S.exports.useContext(od),o=gl();return S.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Qn(t){se(!1)}function $k(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gt.Pop,navigator:s,static:o=!1}=t;Vr()&&se(!1);let l=e.replace(/^\/*/,"/"),a=S.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=jr(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:p="default"}=r,v=S.exports.useMemo(()=>{let y=q_(u,l);return y==null?null:{pathname:y,search:d,hash:c,state:f,key:p}},[l,u,d,c,f,p]);return v==null?null:S.exports.createElement(fl.Provider,{value:a},S.exports.createElement(pl.Provider,{children:n,value:{location:v,navigationType:i}}))}function Kk(t){let{children:e,location:n}=t,r=S.exports.useContext(Dk),i=r&&!e?r.router.routes:ku(e);return bk(i,n)}var Rf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Rf||(Rf={}));new Promise(()=>{});function ku(t,e){e===void 0&&(e=[]);let n=[];return S.exports.Children.forEach(t,(r,i)=>{if(!S.exports.isValidElement(r))return;if(r.type===S.exports.Fragment){n.push.apply(n,ku(r.props.children,e));return}r.type!==Qn&&se(!1),!r.props.index||!r.props.children||se(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ku(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}function Gk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qk(t,e){return t.button===0&&(!e||e==="_self")&&!Qk(t)}const Yk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Xk(t){let{basename:e,children:n,window:r}=t,i=S.exports.useRef();i.current==null&&(i.current=Q1({window:r,v5Compat:!0}));let s=i.current,[o,l]=S.exports.useState({action:s.action,location:s.location});return S.exports.useLayoutEffect(()=>s.listen(l),[s]),S.exports.createElement($k,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const ki=S.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d}=e,c=Gk(e,Yk),f=Lk(u,{relative:i}),p=Jk(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function v(y){r&&r(y),y.defaultPrevented||p(y)}return S.exports.createElement("a",Tu({},c,{href:f,onClick:s?r:v,ref:n,target:a}))});var xf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(xf||(xf={}));var Pf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function Jk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=gl(),a=ml(),u=Z_(t,{relative:o});return S.exports.useCallback(d=>{if(qk(d,n)){d.preventDefault();let c=r!==void 0?r:Yi(a)===Yi(u);l(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}function Zk(){const t=S.exports.useRef(),e=S.exports.useRef(),{login:n}=id(),[r,i]=S.exports.useState(""),[s,o]=S.exports.useState(!1),l=gl();async function a(u){u.preventDefault(),console.log("CHECKING IF UPDATES ARE HAPPENING",n);try{i(""),o(!0),await n(t.current.value,e.current.value),l("/")}catch{i("Failed to log in"),setTimeout(()=>{i("")},5e3)}o(!1)}return h.createElement("div",{id:"page"},h.createElement("div",{id:"outer"},h.createElement("h1",{id:"team-title"},"Staff Portal"),h.createElement("div",{id:"form-outer"},h.createElement("div",{id:"form-outer-body"},h.createElement("form",{onSubmit:a,id:"form-body"},h.createElement("label",{id:"email-text"},"EMAIL:"),h.createElement("input",{id:"email-box",type:"email",ref:t,required:!0}),h.createElement("label",{id:"pw-text"},"PASSWORD:"),h.createElement("input",{id:"pw-box",type:"password",ref:e,required:!0}),h.createElement("button",{disabled:s,id:"submit-btn",type:"submit"},"LOG IN")),h.createElement("div",{id:"forgot-pw"},h.createElement(ki,{to:"/forgot-password"},"Forgot Password?"))))),r&&h.createElement("div",{id:"loginerr",className:"alert alert-danger",role:"alert"},r))}function Ms({children:t}){const{currentUser:e}=id();return e?t:h.createElement(Vk,{to:"/login"})}function eT(){const{currentUser:t,logout:e}=id(),n=t.uid,r=t.email,i=gl();async function s(){try{await e(),i("/login")}catch{}}return console.log("EMAIL ID:	",r),console.log(n),h.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark static-top"},h.createElement("div",{className:"container"},h.createElement("a",{className:"navbar-brand ",href:"#"},h.createElement("h3",null,h.createElement("i",{className:"fa-solid fa-hotel"}),"Havana")),h.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},h.createElement("span",{className:"navbar-toggler-icon"})),h.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},h.createElement("ul",{className:"navbar-nav ms-auto"},h.createElement("li",{id:"nav-margin",className:"nav-item"},h.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),h.createElement("li",{id:"nav-margin",className:"nav-item"},h.createElement("a",{className:"nav-link active",href:"#about"},"About")),h.createElement("li",{id:"nav-margin",className:"nav-item dropdown"},h.createElement(ki,{className:"nav-link active",to:"/customer-query"},"Query")),h.createElement("li",{id:"nav-margin",className:"nav-item dropdown"},h.createElement(ki,{className:"nav-link active",to:"/viewdate"},"ViewDate")),h.createElement("li",{id:"nav-margin",className:"nav-item dropdown"},h.createElement(ki,{className:"nav-link active",to:"/viewcustomer"},"ViewCustomer")),h.createElement("li",{id:"nav-margin",className:"nav-item"},h.createElement("a",{className:"nav-link active","aria-current":"page",href:"#room"},"Rooms")),h.createElement("li",{id:"nav-margin",className:"nav-item"},h.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Contact")),h.createElement("li",{id:"nav-margin",className:"nav-item"},h.createElement("a",{className:"nav-link",onClick:s},"Logout"))))))}const tT="/assets/Hotel-view1.d6e1f4c2.jpg",nT="/assets/Hotel-view2.43f4122a.jpg",rT="/assets/Hotel-view3.bc649e32.jpg",iT="/assets/hvna1.afbd4761.jpeg";function sT(){return h.createElement("div",{className:"w-100 p-5"},h.createElement("div",{className:""}," ",h.createElement("img",{className:"w-50 float-right",src:iT})),h.createElement("div",{className:"w-50"},h.createElement("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel"},h.createElement("ol",{class:"carousel-indicators"},h.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),h.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),h.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),h.createElement("div",{class:"carousel-inner"},h.createElement("div",{class:"carousel-item active"},h.createElement("img",{src:tT,className:"d-block w-100 h-50",alt:"..."})),h.createElement("div",{class:"carousel-item"},h.createElement("img",{src:nT,className:"d-block w-100 h-45",alt:"..."})),h.createElement("div",{class:"carousel-item"},h.createElement("img",{src:rT,className:"d-block w-100 h-50",alt:"..."}))),h.createElement("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},h.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),h.createElement("span",{class:"sr-only"},"Previous")),h.createElement("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},h.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),h.createElement("span",{class:"sr-only"},"Next")))))}function oT(){const[t,e]=S.exports.useState("form"),[n,r]=S.exports.useState(""),[i,s]=S.exports.useState({}),[o,l]=S.exports.useState();S.exports.useState();function a(p){p=="close"?(e("form"),r("")):(e("form_active"),r("inactive"))}function u(){console.log(i),i.name==null||/[A-Za-z]/.test(i.name)==!1?l("name"):i.aadhar==null||/[0-9]/.test(i.aadhar)==!1?l("aadhar"):i.ph_no==null||/[0-9]/.test(i.ph_no)==!1?l("phoneNumber"):i.check_in==null?l("check_in"):i.check_out==null?l("check_out"):l(null)}function d(p){if(p=="name")return h.createElement("div",{className:"alert alert-danger ip-box  alert-div",role:"alert"},"INVALID NAME");if(p=="success")return h.createElement("div",{className:"alert alert-success alert-div"},"AVAILABLE");if(p=="danger")return h.createElement("div",{className:"alert alert-danger ip-box alert-div",role:"alert"},"NOT AVAILABLE");if(p=="aadhar")return h.createElement("div",{className:"alert alert-danger ip-box alert-div",role:"alert"},"INVLAID AADHAR NUMBER");if(p=="phoneNumber")return h.createElement("div",{className:"alert alert-danger ip-box alert-div",role:"alert"},"INVALID PHONE NUMBER");if(p=="check_in")return h.createElement("div",{className:"alert alert-danger ip-box alert-div",role:"alert"},"ENTER CHECK IN DATE");if(p=="check_out")return h.createElement("div",{className:"alert alert-danger ip-box alert-div",role:"alert"},"ENTER CHECK OUT DATE");setTimeout(function(){document.querySelectorAll(".alert-div").remove()},5e3)}const c=p=>p.split(","),f=p=>{p.preventDefault();const v={name:i.name,aadhar:i.aadhar,phoneNumber:i.phoneNumber,stayDetails:[{startDate:new Date(i.check_in),endDate:new Date(i.check_out),roomType:i.type,finalBill:i.amt,roommates:i.rmmts}]};fetch(`${window.location.origin}/api/bookRoom`,{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(v)}).then(y=>y.json()).then(y=>{y.msg=="updated in db"?(a("close"),alert("Room booking successful!")):alert("Some error occured! Please check data and try again!")})};return h.createElement("div",{id:"room"},h.createElement("div",{className:n},h.createElement("h1",{className:"heading text-center bg-dark text-white border-primary"},"ROOM DETAILS"),h.createElement("div",{className:"container cards-div"},h.createElement("div",{className:"row gy-4"},h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Solo"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({...i,type:"single",amt:100})}},"BOOK NOW"),h.createElement("button",{className:"btn btn-primary",onClick:p=>{p.preventDefault(),a("open")}},"VIEW"))))),h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Twin"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({type:"double",amt:150})}},"BOOK NOW"),h.createElement("button",{className:"btn btn-primary",onClick:p=>{p.preventDefault(),a("open")}},"VIEW"))))),h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Deluxe"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({...i,type:"deluxe",amt:250})}},"BOOK NOW"),h.createElement("button",{className:"btn btn-primary",onClick:p=>{p.preventDefault(),a("open")}},"VIEW"))))),h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Super Deluxe"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({...i,type:"superDeluxe",amt:400})}},"BOOK NOW"),h.createElement(ki,{className:"btn btn-primary",to:"/query"},"VIEW"))))),h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Suite"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({...i,type:"suite",amt:700})}},"BOOK NOW"),h.createElement("button",{className:"btn btn-primary",onClick:p=>{p.preventDefault(),a("open")}},"VIEW"))))),h.createElement("div",{className:"col-12 col-md-6 col-lg-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",className:"card-img-top",alt:"..."}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title"},"Villa"),h.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),h.createElement("div",{className:"d-flex justify-content-end btn-group"},h.createElement("button",{className:"btn btn-info",onClick:p=>{p.preventDefault(),a("open"),s({...i,type:"villa",amt:1e3})}},"BOOK NOW"),h.createElement("button",{className:"btn btn-primary",onClick:p=>{p.preventDefault(),a("open")}},"VIEW")))))))),h.createElement("div",{className:t},h.createElement("form",{className:"border border-4 rounded-4 form-body "},h.createElement("h2",{className:"text-center fh"},h.createElement("span",{className:"form-heading"},"CUSTOMER DETAILS"),h.createElement("button",{className:"btn btn-close text-end close-btn",onClick:p=>{p.preventDefault(),a("close"),l(null)}})),o==!0&&d("success"),o==!1&&d("danger"),o=="name"&&d("name"),o=="aadhar"&&d("aadhar"),o=="ph_no"&&d("ph_no"),o=="check_in"&&d("check_in"),o=="check_out"&&d("check_out"),h.createElement("label",{className:"form-label ip-box-lable"},"NAME"),h.createElement("input",{className:"form-control ip-box bd ",onChange:p=>s({...i,name:p.target.value})}),h.createElement("label",{className:"form-label ip-box-lable"},"AADHAR NUMBER"),h.createElement("input",{className:"form-control ip-box bd",type:"number",onChange:p=>s({...i,aadhar:p.target.value})}),h.createElement("label",{className:"form-label ip-box-lable"},"CONTACT NUMBER"),h.createElement("input",{className:"form-control ip-box bd",type:"number",onChange:p=>s({...i,phoneNumber:p.target.value})}),h.createElement("label",{className:"form-label ip-box-lable"},"CHECK IN DATE"),h.createElement("input",{className:"form-control ip-box bd",type:"date",onChange:p=>s({...i,check_in:p.target.value})}),h.createElement("label",{className:"form-label ip-box-lable"},"CHECK OUT DATE"),h.createElement("input",{className:"form-control ip-box bd",type:"date",onChange:p=>s({...i,check_out:p.target.value})}),h.createElement("label",{className:"form-label ip-box-lable"},"ROOM TYPE:"),h.createElement("label",{className:"badge badge-light text-secondary fs-6"},i.type),h.createElement("br",null),h.createElement("label",{className:"form-label ip-box-lable"},"COST :"),h.createElement("label",{className:"badge badge-light text-secondary fs-6"},"$",i.amt,"/day"),h.createElement("br",null),h.createElement("label",{className:"form-label ip-box-lable"},"ROOMMATES"),h.createElement("input",{className:"form-control ip-box bd ",onChange:p=>s({...i,rmmts:c(p.target.value)})}),h.createElement("button",{className:"btn btn-outline-success text-white sub ",onClick:p=>{p.preventDefault(),u(),f(p)}},"BOOK"))))}function lT(){return h.createElement("footer",{className:"text-center text-lg-start bg-dark text-muted footer"},h.createElement("section",{id:"foot"},h.createElement("div",{className:"container text-center text-md-start mt-5"},h.createElement("div",{className:"row mt-3"},h.createElement("div",{id:"text-company",className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"},h.createElement("h6",{className:"text-uppercase fw-bold mb-4"},h.createElement("i",{id:"font",className:"fas fa-gem me-3 "}),"HAVANA"),h.createElement("p",null,"@copyrights PLSQUARED+M")),h.createElement("div",{id:"text-company",className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"},h.createElement("h6",{className:"text-uppercase fw-bold mb-4"},"Contact"),h.createElement("p",null,h.createElement("i",{id:"font",className:"fas fa-home me-3 "})," PLATFORM SVCE"),h.createElement("p",null,h.createElement("i",{id:"font",className:"fas fa-envelope me-3 "}),"plsquared@gmail.com"),h.createElement("p",null,h.createElement("i",{id:"font",className:"fas fa-phone me-3 "})," + 91944556688 "),h.createElement("p",null,h.createElement("i",{id:"font",className:"fas fa-print me-3 "})," + 01 234 567 89")))),h.createElement("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom"},h.createElement("div",{className:"me-5 d-none d-lg-block"},h.createElement("span",null,"Get connected with us on social networks:")),h.createElement("div",null,h.createElement("a",{href:"",className:"me-4 link-secondary"},h.createElement("i",{id:"font",className:"fab fa-facebook-f"})),h.createElement("a",{href:"",className:"me-4 link-secondary"},h.createElement("i",{id:"font",className:"fab fa-twitter"})),h.createElement("a",{href:"",className:"me-4 link-secondary"},h.createElement("i",{id:"font",className:"fab fa-google"})),h.createElement("a",{href:"",className:"me-4 link-secondary"},h.createElement("i",{id:"font",className:"fab fa-instagram"})),h.createElement("a",{href:"",className:"me-4 link-secondary"},h.createElement("i",{id:"font",className:"fab fa-linkedin"}))))))}function aT(){return h.createElement("div",{className:"about "},h.createElement("h1",{className:"heading text-center bg-dark text-white border-primary"},"ABOUT"),h.createElement("p",{className:"container text-center fs-1  "},"The perfect place to lose your mind, and maybe find it again You've not lived until you have stayed here",h.createElement("br",null),"We are a home away from home to Make a life, not just a reservation",h.createElement("br",null)))}const uT="/assets/imggrp.6eb46441.jpg",cT="/assets/mathi.b7a6afc7.jpg",dT="/assets/sus.c184628e.jpg";function hT(){return h.createElement("div",{className:"reviews"},h.createElement("h3",{className:"review-heading bg-dark text-white border-primary"},"REVIEWS"),h.createElement("div",{className:"row review-cards"},h.createElement("div",{className:"col-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:uT,alt:""}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title text-center"},"My Review"),h.createElement("p",{className:"card-text"},"very nice hotel . Lost myself while staying here."),h.createElement("i",{className:"fa-solid fa-star"})))),h.createElement("div",{className:"col-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:cT,alt:""}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title text-center"},"My Review"),h.createElement("p",{className:"card-text"},"Me and my lover stayed and multiplied ourself "),h.createElement("i",{className:"fa-solid fa-star"})))),h.createElement("div",{className:"col-4"},h.createElement("div",{className:"card"},h.createElement("img",{src:dT,alt:""}),h.createElement("div",{className:"card-body"},h.createElement("h5",{className:"card-title text-center"},"My Review"),h.createElement("p",{className:"card-text"},"Me and my student prasanna visited here during conference and had a very good stay experience."),h.createElement("i",{className:"fa-solid fa-star"}))))))}function fT(){return h.createElement(h.Fragment,null,h.createElement(eT,null),h.createElement(sT,null),h.createElement(aT,null),h.createElement(oT,null),h.createElement(hT,null),h.createElement(lT,null))}function pT(){const[t,e]=S.exports.useState([]),[n,r]=S.exports.useState("form-inactive"),[i,s]=S.exports.useState(""),o=S.exports.useRef(),l=S.exports.useRef(),[a,u]=S.exports.useState(),[d,c]=S.exports.useState("");S.exports.useEffect(async()=>{const v=await(await fetch(`${window.location.origin}/api/readt`)).json();console.log(v),e(v)},[]);async function f(){const p=new Date,v={type:o.current.value,roomID:String(a),Ticket:l.current.value,status:"In Progress",date:p,description:d};console.log(v),await fetch(`${window.location.origin}/api/raiseticket`,{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(v)}).then(y=>y.json()).then(y=>console.log(y)),r("form-inactive"),s("")}return React.createElement("div",{className:"container"},React.createElement("div",{className:i},React.createElement("h4",{className:"text-center p-3 border-5 border-bottom border-primary"},"CUSTOMER ISSUES"),t.map(p=>{if(p.status=="Solved")return React.createElement("div",{className:"complain alert alert-success d-flex flex-column justify-content-between"},React.createElement("div",{className:"d-flex flex-row justify-content-between w-100"},React.createElement("i",{className:"icon fa fa-check"}),React.createElement("div",{className:"issue-details d-flex flex-row justify-content-between"},React.createElement("h5",null,"Type:",p.type),React.createElement("h5",null,"Room No:",p.room_no),React.createElement("h5",null,"Type of Issue:",p.issue),React.createElement("h5",null,"Raise on: ",p.date))),React.createElement("h5",null,"Issue: ",p.description));if(p.status=="In Progress")return React.createElement("div",{className:"complain alert alert-warning d-flex flex-column justify-content-between"},React.createElement("div",{className:"d-flex flex-row justify-content-between w-100"},React.createElement("i",{className:"icon fas fa-spinner"}),React.createElement("div",{className:"issue-details d-flex flex-row justify-content-between"},React.createElement("h5",null,"Type:",p.type),React.createElement("h5",null,"Room No:",p.room_no),React.createElement("h5",null,"Type of Issue:",p.issue),React.createElement("h5",null,"Raise on: ",p.date))),React.createElement("h5",null,"Issue: ",p.description))}),React.createElement("button",{className:"add btn btn-primary",onClick:()=>{r("form-active"),s("issue-container-blur")}},React.createElement("i",{className:"fa-solid fa-plus"}))),React.createElement("div",{className:n},React.createElement("div",{className:"d-flex flex-row justify-content-between"},React.createElement("select",{ref:o,className:"select-form form-select w-25"},React.createElement("option",{value:"SOLO"},"SOLO"),React.createElement("option",{value:"TWIN"},"TWIN"),React.createElement("option",{value:"DELUXE"},"DELUXE"),React.createElement("option",{value:"SUPER DELUXE"},"SUPER DELUXE"),React.createElement("option",{value:"SUITE"},"SUITE"),React.createElement("option",{value:"VILLA"},"VILLA")),React.createElement("input",{className:"w-25",type:"number",placeholder:"Room No",onChange:p=>u(p.target.value)}),React.createElement("select",{ref:l,className:"form-select w-25"},React.createElement("option",{value:"ELECTRICAL"},"ELECTRICAL"),React.createElement("option",{value:"PLUMBING"},"PLUMBING"),React.createElement("option",{value:"FOOD"},"FOOD "),React.createElement("option",{value:"SANITATION"},"SANITATION"))),React.createElement("textarea",{className:"w-100",placeholder:"Issue Details",onChange:p=>c(p.target.value)}),React.createElement("button",{className:"submit w-25 btn btn-info",onClick:f},"RAISE TICKET")))}function mT(){let[t,e]=S.exports.useState(!1),[n,r]=S.exports.useState([]),[i,s]=S.exports.useState(),o=S.exports.useRef();async function l(){const a={roomType:o.current.value,reqdDate:new Date(i)};await fetch(`${window.location.origin}/api/viewdate`,{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(a)}).then(u=>u.json()).then(u=>{console.log(u),n=u}),console.log(n),r(n.map(u=>h.createElement("div",{className:"card c1 p-5"},h.createElement("div",{className:"row"},h.createElement("div",{className:"col-6"},h.createElement("h5",{className:"p-1"},"Name: ",u.name),h.createElement("h5",{className:"p-1"},"Aadhar: ",u.aadhar),h.createElement("h5",{className:"p-1"},"Phone Number: ",u.phoneNumber)),h.createElement("div",{className:"col-6"},h.createElement("h5",{className:"p-1"},"Check Out Date: ",new Date(u.startDate).toDateString()),h.createElement("h5",{className:"p-1"},"Check Out Date: ",new Date(u.endDate).toDateString()),h.createElement("h5",{className:"p-1"},"Room Mates: ",u.roommates)))))),e(!0)}return h.createElement("div",{id:"page1"},h.createElement("div",{className:"view-container"},h.createElement("div",{className:"input-controls"},h.createElement("input",{className:"view-date",type:"date",onChange:a=>{s(a.target.value)}}),h.createElement("select",{ref:o,className:"view-select-form form-select w-25"},h.createElement("option",{value:"single"},"SOLO"),h.createElement("option",{value:"double"},"TWIN"),h.createElement("option",{value:"deluxe"},"DELUXE"),h.createElement("option",{value:"superDeluxe"},"SUPER DELUXE"),h.createElement("option",{value:"suite"},"SUITE"),h.createElement("option",{value:"villa"},"VILLA")),h.createElement("button",{className:"btn btn-dark",onClick:l},"FETCH")),t==!0&&n))}function gT(){let[t,e]=S.exports.useState(!1),[n,r]=S.exports.useState([]),i=S.exports.useRef(),s=S.exports.useRef();async function o(){const l={type:s.current.value,detail:i.current.value};await fetch(`${window.location.origin}/api/viewcustomer`,{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(l)}).then(a=>a.json()).then(a=>{console.log(a),n=a}),console.log(n),r(n.map(a=>h.createElement("div",{className:"card card-1 c1 p-5 "},h.createElement("div",{className:"row"},h.createElement("div",{className:"col-6"},h.createElement("h5",{className:"p-1"},"Name: ",a.name),h.createElement("h5",{className:"p-1"},"Aadhar: ",a.aadhar),h.createElement("h5",{className:"p-1"},"Phone Number: ",a.phoneNumber)),h.createElement("div",{className:"col-6"}))))),e(!0)}return h.createElement("div",{id:"page2"},h.createElement("div",{className:"view-container"},h.createElement("div",{className:"input-controls"},h.createElement("input",{className:"view-date",type:"text",ref:i}),h.createElement("select",{ref:s,className:"view-select-form form-select w-25"},h.createElement("option",{value:"addhar"},"AADHAR"),h.createElement("option",{value:"name"},"NAME")),h.createElement("button",{className:"btn btn-dark",onClick:o},"FETCH")),t==!0&&n))}function _T(){return h.createElement("div",null,h.createElement(Xk,{basename:"/"},h.createElement(G1,null,h.createElement(Kk,null,h.createElement(Qn,{path:"/login",element:h.createElement(Zk,null)}),h.createElement(Qn,{path:"/",element:h.createElement(Ms,null," ",h.createElement(fT,null)," ")}),h.createElement(Qn,{path:"/customer-query",element:h.createElement(Ms,null," ",h.createElement(pT,null)," ")}),h.createElement(Qn,{path:"/viewdate",element:h.createElement(Ms,null," ",h.createElement(mT,null)," ")}),h.createElement(Qn,{path:"/viewcustomer",element:h.createElement(Ms,null," ",h.createElement(gT,null)," ")})))),h.createElement("footer",null))}ua.createRoot(document.getElementById("root")).render(h.createElement(h.Fragment,null,h.createElement(_T,null)));
