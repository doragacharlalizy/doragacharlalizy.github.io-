(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var F1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vd={exports:{}},Di={},xd={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),M1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),U1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),Q1=Symbol.for("react.suspense"),Y1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),wu=Symbol.iterator;function K1(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,kd={};function cr(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||wd}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ed(){}Ed.prototype=cr.prototype;function da(e,t,n){this.props=e,this.context=t,this.refs=kd,this.updater=n||wd}var fa=da.prototype=new Ed;fa.constructor=da;Sd(fa,cr.prototype);fa.isPureReactComponent=!0;var Su=Array.isArray,Cd=Object.prototype.hasOwnProperty,pa={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function _d(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Cd.call(t,r)&&!jd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ao,type:e,key:i,ref:l,props:o,_owner:pa.current}}function X1(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function q1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q1(""+e.key):t.toString(36)}function bo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ao:case M1:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pl(l,0):r,Su(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),bo(o,t,n,"",function(u){return u})):o!=null&&(ha(o)&&(o=X1(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Su(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+pl(i,s);l+=bo(i,t,n,a,o)}else if(a=K1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+pl(i,s++),l+=bo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xo(e,t,n){if(e==null)return e;var r=[],o=0;return bo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function J1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Uo={transition:null},Z1={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:pa};function zd(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=cr;b.Fragment=B1;b.Profiler=U1;b.PureComponent=da;b.StrictMode=b1;b.Suspense=Q1;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;b.act=zd;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=pa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Cd.call(t,a)&&!jd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ao,type:e.type,key:o,ref:i,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:W1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:H1,_context:e},e.Consumer=e};b.createElement=_d;b.createFactory=function(e){var t=_d.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:V1,render:e}};b.isValidElement=ha;b.lazy=function(e){return{$$typeof:G1,_payload:{_status:-1,_result:e},_init:J1}};b.memo=function(e,t){return{$$typeof:Y1,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};b.unstable_act=zd;b.useCallback=function(e,t){return Re.current.useCallback(e,t)};b.useContext=function(e){return Re.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};b.useEffect=function(e,t){return Re.current.useEffect(e,t)};b.useId=function(){return Re.current.useId()};b.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Re.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};b.useRef=function(e){return Re.current.useRef(e)};b.useState=function(e){return Re.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Re.current.useTransition()};b.version="18.3.1";xd.exports=b;var re=xd.exports;const Qe=yd(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=re,t0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,o0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function Td(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)r0.call(t,r)&&!i0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:t0,type:e,key:i,ref:l,props:o,_owner:o0.current}}Di.Fragment=n0;Di.jsx=Td;Di.jsxs=Td;vd.exports=Di;var p=vd.exports,es={},Pd={exports:{}},Ke={},Nd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var y=j.length;j.push(O);e:for(;0<y;){var Q=y-1>>>1,P=j[Q];if(0<o(P,O))j[Q]=O,j[y]=P,y=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],y=j.pop();if(y!==O){j[0]=y;e:for(var Q=0,P=j.length,H=P>>>1;Q<H;){var K=2*(Q+1)-1,q=j[K],B=K+1,le=j[B];if(0>o(q,y))B<P&&0>o(le,q)?(j[Q]=le,j[B]=y,Q=B):(j[Q]=q,j[K]=y,Q=K);else if(B<P&&0>o(le,y))j[Q]=le,j[B]=y,Q=B;else break e}}return O}function o(j,O){var y=j.sortIndex-O.sortIndex;return y!==0?y:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,m=null,g=3,x=!1,v=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function S(j){if(w=!1,f(j),!v)if(n(a)!==null)v=!0,A(T);else{var O=n(u);O!==null&&$(S,O.startTime-j)}}function T(j,O){v=!1,w&&(w=!1,h(N),N=-1),x=!0;var y=g;try{for(f(O),m=n(a);m!==null&&(!(m.expirationTime>O)||j&&!ze());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,g=m.priorityLevel;var P=Q(m.expirationTime<=O);O=e.unstable_now(),typeof P=="function"?m.callback=P:m===n(a)&&r(a),f(O)}else r(a);m=n(a)}if(m!==null)var H=!0;else{var K=n(u);K!==null&&$(S,K.startTime-O),H=!1}return H}finally{m=null,g=y,x=!1}}var _=!1,C=null,N=-1,U=5,I=-1;function ze(){return!(e.unstable_now()-I<U)}function V(){if(C!==null){var j=e.unstable_now();I=j;var O=!0;try{O=C(!0,j)}finally{O?vt():(_=!1,C=null)}}else _=!1}var vt;if(typeof d=="function")vt=function(){d(V)};else if(typeof MessageChannel<"u"){var Pn=new MessageChannel,F=Pn.port2;Pn.port1.onmessage=V,vt=function(){F.postMessage(null)}}else vt=function(){L(V,0)};function A(j){C=j,_||(_=!0,vt())}function $(j,O){N=L(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,A(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var y=g;g=O;try{return j()}finally{g=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var y=g;g=j;try{return O()}finally{g=y}},e.unstable_scheduleCallback=function(j,O,y){var Q=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?Q+y:Q):y=Q,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=y+P,j={id:c++,callback:O,priorityLevel:j,startTime:y,expirationTime:P,sortIndex:-1},y>Q?(j.sortIndex=y,t(u,j),n(a)===null&&j===n(u)&&(w?(h(N),N=-1):w=!0,$(S,y-Q))):(j.sortIndex=P,t(a,j),v||x||(v=!0,A(T))),j},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(j){var O=g;return function(){var y=g;g=O;try{return j.apply(this,arguments)}finally{g=y}}}})(Rd);Nd.exports=Rd;var l0=Nd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=re,Ge=l0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Od=new Set,Ur={};function zn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)Od.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,a0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Cu={};function u0(e){return ts.call(Cu,e)?!0:ts.call(Eu,e)?!1:a0.test(e)?Cu[e]=!0:(Eu[e]=!0,!1)}function c0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d0(e,t,n,r){if(t===null||typeof t>"u"||c0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,ga);Se[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,ga);Se[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,ga);Se[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ya(e,t,n,r){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d0(t,n,o,r)&&(n=null),r||o===null?u0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),On=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),$d=Symbol.for("react.offscreen"),ju=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,hl;function _r(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var ml=!1;function gl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function f0(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case On:return"Portal";case ns:return"Profiler";case va:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ad:return(e.displayName||"Context")+".Consumer";case Ld:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wa:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function p0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h0(e){var t=Dd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=h0(e))}function Id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fd(e,t){t=t.checked,t!=null&&ya(e,"checked",t,!1)}function ss(e,t){Fd(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(zr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Md(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){m0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function Hd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var g0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(g0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,Qn=null,Yn=null;function Nu(e){if(e=fo(e)){if(typeof hs!="function")throw Error(z(280));var t=e.stateNode;t&&(t=bi(t),hs(e.stateNode,e.type,t))}}function Wd(e){Qn?Yn?Yn.push(e):Yn=[e]:Qn=e}function Vd(){if(Qn){var e=Qn,t=Yn;if(Yn=Qn=null,Nu(e),t)for(e=0;e<t.length;e++)Nu(t[e])}}function Qd(e,t){return e(t)}function Yd(){}var yl=!1;function Gd(e,t,n){if(yl)return e(t,n);yl=!0;try{return Qd(e,t,n)}finally{yl=!1,(Qn!==null||Yn!==null)&&(Yd(),Vd())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ms=!1;if(Lt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ms=!1}function y0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Or=!1,si=null,ai=!1,gs=null,v0={onError:function(e){Or=!0,si=e}};function x0(e,t,n,r,o,i,l,s,a){Or=!1,si=null,y0.apply(v0,arguments)}function w0(e,t,n,r,o,i,l,s,a){if(x0.apply(this,arguments),Or){if(Or){var u=si;Or=!1,si=null}else throw Error(z(198));ai||(ai=!0,gs=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(Tn(e)!==e)throw Error(z(188))}function S0(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ru(o),e;if(i===r)return Ru(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Xd(e){return e=S0(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qd(e);if(t!==null)return t;e=e.sibling}return null}var Jd=Ge.unstable_scheduleCallback,Ou=Ge.unstable_cancelCallback,k0=Ge.unstable_shouldYield,E0=Ge.unstable_requestPaint,ae=Ge.unstable_now,C0=Ge.unstable_getCurrentPriorityLevel,ka=Ge.unstable_ImmediatePriority,Zd=Ge.unstable_UserBlockingPriority,ui=Ge.unstable_NormalPriority,j0=Ge.unstable_LowPriority,ef=Ge.unstable_IdlePriority,Ii=null,Et=null;function _0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:P0,z0=Math.log,T0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(z0(e)/T0|0)|0}var Eo=64,Co=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Tr(s):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~o,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function N0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ft(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=N0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=Eo;return Eo<<=1,!(Eo&4194240)&&(Eo=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function O0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ea(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rf,Ca,of,lf,sf,vs=!1,jo=[],Gt=null,Kt=null,Xt=null,Vr=new Map,Qr=new Map,Wt=[],L0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fo(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function A0(e,t,n,r,o){switch(t){case"focusin":return Gt=vr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=vr(Kt,e,t,n,r,o),!0;case"mouseover":return Xt=vr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,vr(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,vr(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function af(e){var t=fn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,sf(e.priority,function(){of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=fo(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function Au(e,t,n){Ho(e)&&n.delete(t)}function $0(){vs=!1,Gt!==null&&Ho(Gt)&&(Gt=null),Kt!==null&&Ho(Kt)&&(Kt=null),Xt!==null&&Ho(Xt)&&(Xt=null),Vr.forEach(Au),Qr.forEach(Au)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,$0)))}function Yr(e){function t(o){return xr(o,e)}if(0<jo.length){xr(jo[0],e);for(var n=1;n<jo.length;n++){var r=jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&xr(Gt,e),Kt!==null&&xr(Kt,e),Xt!==null&&xr(Xt,e),Vr.forEach(t),Qr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)af(n),n.blockedOn===null&&Wt.shift()}var Gn=It.ReactCurrentBatchConfig,di=!0;function D0(e,t,n,r){var o=G,i=Gn.transition;Gn.transition=null;try{G=1,ja(e,t,n,r)}finally{G=o,Gn.transition=i}}function I0(e,t,n,r){var o=G,i=Gn.transition;Gn.transition=null;try{G=4,ja(e,t,n,r)}finally{G=o,Gn.transition=i}}function ja(e,t,n,r){if(di){var o=xs(e,t,n,r);if(o===null)Tl(e,t,r,fi,n),Lu(e,r);else if(A0(o,e,t,n,r))r.stopPropagation();else if(Lu(e,r),t&4&&-1<L0.indexOf(e)){for(;o!==null;){var i=fo(o);if(i!==null&&rf(i),i=xs(e,t,n,r),i===null&&Tl(e,t,r,fi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var fi=null;function xs(e,t,n,r){if(fi=null,e=Sa(r),e=fn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fi=e,null}function uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case ka:return 1;case Zd:return 4;case ui:case j0:return 16;case ef:return 536870912;default:return 16}default:return 16}}var Qt=null,_a=null,Wo=null;function cf(){if(Wo)return Wo;var e,t=_a,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Wo=o.slice(e,1<r?1-r:void 0)}function Vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function $u(){return!1}function Xe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_o:$u,this.isPropagationStopped=$u,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Xe(dr),co=ie({},dr,{view:0,detail:0}),F0=Xe(co),xl,wl,wr,Fi=ie({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(xl=e.screenX-wr.screenX,wl=e.screenY-wr.screenY):wl=xl=0,wr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),Du=Xe(Fi),M0=ie({},Fi,{dataTransfer:0}),B0=Xe(M0),b0=ie({},co,{relatedTarget:0}),Sl=Xe(b0),U0=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Xe(U0),W0=ie({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Xe(W0),Q0=ie({},dr,{data:0}),Iu=Xe(Q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function Ta(){return X0}var q0=ie({},co,{key:function(e){if(e.key){var t=Y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Xe(q0),Z0=ie({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Xe(Z0),eh=ie({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),th=Xe(eh),nh=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rh=Xe(nh),oh=ie({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=Xe(oh),lh=[9,13,27,32],Pa=Lt&&"CompositionEvent"in window,Lr=null;Lt&&"documentMode"in document&&(Lr=document.documentMode);var sh=Lt&&"TextEvent"in window&&!Lr,df=Lt&&(!Pa||Lr&&8<Lr&&11>=Lr),Mu=" ",Bu=!1;function ff(e,t){switch(e){case"keyup":return lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function ah(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(Bu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Bu?null:e;default:return null}}function uh(e,t){if(An)return e==="compositionend"||!Pa&&ff(e,t)?(e=cf(),Wo=_a=Qt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return df&&t.locale!=="ko"?null:t.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ch[e.type]:t==="textarea"}function hf(e,t,n,r){Wd(r),t=pi(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Gr=null;function dh(e){jf(e,0)}function Mi(e){var t=In(e);if(Id(t))return e}function fh(e,t){if(e==="change")return t}var mf=!1;if(Lt){var kl;if(Lt){var El="oninput"in document;if(!El){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),El=typeof Uu.oninput=="function"}kl=El}else kl=!1;mf=kl&&(!document.documentMode||9<document.documentMode)}function Hu(){Ar&&(Ar.detachEvent("onpropertychange",gf),Gr=Ar=null)}function gf(e){if(e.propertyName==="value"&&Mi(Gr)){var t=[];hf(t,Gr,e,Sa(e)),Gd(dh,t)}}function ph(e,t,n){e==="focusin"?(Hu(),Ar=t,Gr=n,Ar.attachEvent("onpropertychange",gf)):e==="focusout"&&Hu()}function hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(Gr)}function mh(e,t){if(e==="click")return Mi(t)}function gh(e,t){if(e==="input"||e==="change")return Mi(t)}function yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:yh;function Kr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vf(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=vf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yf(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Vu(n,i);var l=Vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xh=Lt&&"documentMode"in document&&11>=document.documentMode,$n=null,ws=null,$r=null,Ss=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ss||$n==null||$n!==li(r)||(r=$n,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Kr($r,r)||($r=r,r=pi(ws,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Cl={},xf={};Lt&&(xf=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Bi(e){if(Cl[e])return Cl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xf)return Cl[e]=t[n];return e}var wf=Bi("animationend"),Sf=Bi("animationiteration"),kf=Bi("animationstart"),Ef=Bi("transitionend"),Cf=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){Cf.set(e,t),zn(t,[e])}for(var jl=0;jl<Yu.length;jl++){var _l=Yu[jl],wh=_l.toLowerCase(),Sh=_l[0].toUpperCase()+_l.slice(1);ln(wh,"on"+Sh)}ln(wf,"onAnimationEnd");ln(Sf,"onAnimationIteration");ln(kf,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Ef,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,w0(r,t,void 0,e),e.currentTarget=null}function jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}}}if(ai)throw e=gs,ai=!1,gs=null,e}function J(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(_f(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),_f(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[To]){e[To]=!0,Od.forEach(function(n){n!=="selectionchange"&&(kh.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,zl("selectionchange",!1,t))}}function _f(e,t,n,r){switch(uf(t)){case 1:var o=D0;break;case 4:o=I0;break;default:o=ja}n=o.bind(null,t,n,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=fn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Gd(function(){var u=i,c=Sa(n),m=[];e:{var g=Cf.get(e);if(g!==void 0){var x=za,v=e;switch(e){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":x=J0;break;case"focusin":v="focus",x=Sl;break;case"focusout":v="blur",x=Sl;break;case"beforeblur":case"afterblur":x=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=th;break;case wf:case Sf:case kf:x=H0;break;case Ef:x=rh;break;case"scroll":x=F0;break;case"wheel":x=ih;break;case"copy":case"cut":case"paste":x=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Fu}var w=(t&4)!==0,L=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,f;d!==null;){f=d;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,h!==null&&(S=Wr(d,h),S!=null&&w.push(qr(d,S,f)))),L)break;d=d.return}0<w.length&&(g=new x(g,v,null,n,c),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ps&&(v=n.relatedTarget||n.fromElement)&&(fn(v)||v[At]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?fn(v):null,v!==null&&(L=Tn(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Du,S="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Fu,S="onPointerLeave",h="onPointerEnter",d="pointer"),L=x==null?g:In(x),f=v==null?g:In(v),g=new w(S,d+"leave",x,n,c),g.target=L,g.relatedTarget=f,S=null,fn(c)===u&&(w=new w(h,d+"enter",v,n,c),w.target=f,w.relatedTarget=L,S=w),L=S,x&&v)t:{for(w=x,h=v,d=0,f=w;f;f=Nn(f))d++;for(f=0,S=h;S;S=Nn(S))f++;for(;0<d-f;)w=Nn(w),d--;for(;0<f-d;)h=Nn(h),f--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=Nn(w),h=Nn(h)}w=null}else w=null;x!==null&&Ku(m,g,x,w,!1),v!==null&&L!==null&&Ku(m,L,v,w,!0)}}e:{if(g=u?In(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var T=fh;else if(bu(g))if(mf)T=gh;else{T=hh;var _=ph}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=mh);if(T&&(T=T(e,u))){hf(m,T,n,c);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&as(g,"number",g.value)}switch(_=u?In(u):window,e){case"focusin":(bu(_)||_.contentEditable==="true")&&($n=_,ws=u,$r=null);break;case"focusout":$r=ws=$n=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,Qu(m,n,c);break;case"selectionchange":if(xh)break;case"keydown":case"keyup":Qu(m,n,c)}var C;if(Pa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else An?ff(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(df&&n.locale!=="ko"&&(An||N!=="onCompositionStart"?N==="onCompositionEnd"&&An&&(C=cf()):(Qt=c,_a="value"in Qt?Qt.value:Qt.textContent,An=!0)),_=pi(u,N),0<_.length&&(N=new Iu(N,e,null,n,c),m.push({event:N,listeners:_}),C?N.data=C:(C=pf(n),C!==null&&(N.data=C)))),(C=sh?ah(e,n):uh(e,n))&&(u=pi(u,"onBeforeInput"),0<u.length&&(c=new Iu("onBeforeInput","beforeinput",null,n,c),m.push({event:c,listeners:u}),c.data=C))}jf(m,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(qr(e,i,o)),i=Wr(e,t),i!=null&&r.push(qr(e,i,o))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Wr(n,i),a!=null&&l.unshift(qr(n,a,s))):o||(a=Wr(n,i),a!=null&&l.push(qr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Eh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Ch,"")}function Po(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(z(425))}function hi(){}var ks=null,Es=null;function Cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,jh=typeof clearTimeout=="function"?clearTimeout:void 0,qu=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof qu<"u"?function(e){return qu.resolve(null).then(e).catch(zh)}:js;function zh(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Yr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),kt="__reactFiber$"+fr,Jr="__reactProps$"+fr,At="__reactContainer$"+fr,_s="__reactEvents$"+fr,Th="__reactListeners$"+fr,Ph="__reactHandles$"+fr;function fn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[kt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[kt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function bi(e){return e[Jr]||null}var zs=[],Fn=-1;function sn(e){return{current:e}}function ee(e){0>Fn||(e.current=zs[Fn],zs[Fn]=null,Fn--)}function X(e,t){Fn++,zs[Fn]=e.current,e.current=t}var rn={},_e=sn(rn),Ie=sn(!1),Sn=rn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function mi(){ee(Ie),ee(_e)}function Zu(e,t,n){if(_e.current!==rn)throw Error(z(168));X(_e,t),X(Ie,n)}function zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,p0(e)||"Unknown",o));return ie({},n,r)}function gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,Sn=_e.current,X(_e,e),X(Ie,Ie.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=zf(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ie),ee(_e),X(_e,e)):ee(Ie),X(Ie,n)}var Pt=null,Ui=!1,Nl=!1;function Tf(e){Pt===null?Pt=[e]:Pt.push(e)}function Nh(e){Ui=!0,Tf(e)}function an(){if(!Nl&&Pt!==null){Nl=!0;var e=0,t=G;try{var n=Pt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Ui=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),Jd(ka,an),o}finally{G=t,Nl=!1}}return null}var Mn=[],Bn=0,yi=null,vi=0,Je=[],Ze=0,kn=null,Nt=1,Rt="";function cn(e,t){Mn[Bn++]=vi,Mn[Bn++]=yi,yi=e,vi=t}function Pf(e,t,n){Je[Ze++]=Nt,Je[Ze++]=Rt,Je[Ze++]=kn,kn=e;var r=Nt;e=Rt;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-ft(t)+o|n<<o|r,Rt=i+e}else Nt=1<<i|n<<o|r,Rt=e}function Ra(e){e.return!==null&&(cn(e,1),Pf(e,1,0))}function Oa(e){for(;e===yi;)yi=Mn[--Bn],Mn[Bn]=null,vi=Mn[--Bn],Mn[Bn]=null;for(;e===kn;)kn=Je[--Ze],Je[Ze]=null,Rt=Je[--Ze],Je[Ze]=null,Nt=Je[--Ze],Je[Ze]=null}var Ye=null,We=null,te=!1,ct=null;function Nf(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,We=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Nt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,We=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(te){var t=We;if(t){var n=t;if(!tc(e,t)){if(Ts(e))throw Error(z(418));t=qt(n.nextSibling);var r=Ye;t&&tc(e,t)?Nf(r,n):(e.flags=e.flags&-4097|2,te=!1,Ye=e)}}else{if(Ts(e))throw Error(z(418));e.flags=e.flags&-4097|2,te=!1,Ye=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function No(e){if(e!==Ye)return!1;if(!te)return nc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cs(e.type,e.memoizedProps)),t&&(t=We)){if(Ts(e))throw Rf(),Error(z(418));for(;t;)Nf(e,t),t=qt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ye?qt(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=We;e;)e=qt(e.nextSibling)}function Zn(){We=Ye=null,te=!1}function La(e){ct===null?ct=[e]:ct.push(e)}var Rh=It.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Ro(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function Of(e){function t(h,d){if(e){var f=h.deletions;f===null?(h.deletions=[d],h.flags|=16):f.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=tn(h,d),h.index=0,h.sibling=null,h}function i(h,d,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<d?(h.flags|=2,d):f):(h.flags|=2,d)):(h.flags|=1048576,d)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,f,S){return d===null||d.tag!==6?(d=Il(f,h.mode,S),d.return=h,d):(d=o(d,f),d.return=h,d)}function a(h,d,f,S){var T=f.type;return T===Ln?c(h,d,f.props.children,S,f.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bt&&rc(T)===d.type)?(S=o(d,f.props),S.ref=Sr(h,d,f),S.return=h,S):(S=Jo(f.type,f.key,f.props,null,h.mode,S),S.ref=Sr(h,d,f),S.return=h,S)}function u(h,d,f,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Fl(f,h.mode,S),d.return=h,d):(d=o(d,f.children||[]),d.return=h,d)}function c(h,d,f,S,T){return d===null||d.tag!==7?(d=yn(f,h.mode,S,T),d.return=h,d):(d=o(d,f),d.return=h,d)}function m(h,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Il(""+d,h.mode,f),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wo:return f=Jo(d.type,d.key,d.props,null,h.mode,f),f.ref=Sr(h,null,d),f.return=h,f;case On:return d=Fl(d,h.mode,f),d.return=h,d;case bt:var S=d._init;return m(h,S(d._payload),f)}if(zr(d)||gr(d))return d=yn(d,h.mode,f,null),d.return=h,d;Ro(h,d)}return null}function g(h,d,f,S){var T=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(h,d,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wo:return f.key===T?a(h,d,f,S):null;case On:return f.key===T?u(h,d,f,S):null;case bt:return T=f._init,g(h,d,T(f._payload),S)}if(zr(f)||gr(f))return T!==null?null:c(h,d,f,S,null);Ro(h,f)}return null}function x(h,d,f,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(f)||null,s(d,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wo:return h=h.get(S.key===null?f:S.key)||null,a(d,h,S,T);case On:return h=h.get(S.key===null?f:S.key)||null,u(d,h,S,T);case bt:var _=S._init;return x(h,d,f,_(S._payload),T)}if(zr(S)||gr(S))return h=h.get(f)||null,c(d,h,S,T,null);Ro(d,S)}return null}function v(h,d,f,S){for(var T=null,_=null,C=d,N=d=0,U=null;C!==null&&N<f.length;N++){C.index>N?(U=C,C=null):U=C.sibling;var I=g(h,C,f[N],S);if(I===null){C===null&&(C=U);break}e&&C&&I.alternate===null&&t(h,C),d=i(I,d,N),_===null?T=I:_.sibling=I,_=I,C=U}if(N===f.length)return n(h,C),te&&cn(h,N),T;if(C===null){for(;N<f.length;N++)C=m(h,f[N],S),C!==null&&(d=i(C,d,N),_===null?T=C:_.sibling=C,_=C);return te&&cn(h,N),T}for(C=r(h,C);N<f.length;N++)U=x(C,h,N,f[N],S),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?N:U.key),d=i(U,d,N),_===null?T=U:_.sibling=U,_=U);return e&&C.forEach(function(ze){return t(h,ze)}),te&&cn(h,N),T}function w(h,d,f,S){var T=gr(f);if(typeof T!="function")throw Error(z(150));if(f=T.call(f),f==null)throw Error(z(151));for(var _=T=null,C=d,N=d=0,U=null,I=f.next();C!==null&&!I.done;N++,I=f.next()){C.index>N?(U=C,C=null):U=C.sibling;var ze=g(h,C,I.value,S);if(ze===null){C===null&&(C=U);break}e&&C&&ze.alternate===null&&t(h,C),d=i(ze,d,N),_===null?T=ze:_.sibling=ze,_=ze,C=U}if(I.done)return n(h,C),te&&cn(h,N),T;if(C===null){for(;!I.done;N++,I=f.next())I=m(h,I.value,S),I!==null&&(d=i(I,d,N),_===null?T=I:_.sibling=I,_=I);return te&&cn(h,N),T}for(C=r(h,C);!I.done;N++,I=f.next())I=x(C,h,N,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),d=i(I,d,N),_===null?T=I:_.sibling=I,_=I);return e&&C.forEach(function(V){return t(h,V)}),te&&cn(h,N),T}function L(h,d,f,S){if(typeof f=="object"&&f!==null&&f.type===Ln&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case wo:e:{for(var T=f.key,_=d;_!==null;){if(_.key===T){if(T=f.type,T===Ln){if(_.tag===7){n(h,_.sibling),d=o(_,f.props.children),d.return=h,h=d;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bt&&rc(T)===_.type){n(h,_.sibling),d=o(_,f.props),d.ref=Sr(h,_,f),d.return=h,h=d;break e}n(h,_);break}else t(h,_);_=_.sibling}f.type===Ln?(d=yn(f.props.children,h.mode,S,f.key),d.return=h,h=d):(S=Jo(f.type,f.key,f.props,null,h.mode,S),S.ref=Sr(h,d,f),S.return=h,h=S)}return l(h);case On:e:{for(_=f.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(h,d.sibling),d=o(d,f.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Fl(f,h.mode,S),d.return=h,h=d}return l(h);case bt:return _=f._init,L(h,d,_(f._payload),S)}if(zr(f))return v(h,d,f,S);if(gr(f))return w(h,d,f,S);Ro(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(h,d.sibling),d=o(d,f),d.return=h,h=d):(n(h,d),d=Il(f,h.mode,S),d.return=h,h=d),l(h)):n(h,d)}return L}var er=Of(!0),Lf=Of(!1),xi=sn(null),wi=null,bn=null,Aa=null;function $a(){Aa=bn=wi=null}function Da(e){var t=xi.current;ee(xi),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){wi=e,Aa=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(wi===null)throw Error(z(308));bn=e,wi.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var pn=null;function Ia(e){pn===null?pn=[e]:pn.push(e)}function Af(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,Ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,c=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(g=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(x,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(x,m,g):v,g==null)break e;m=ie({},m,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=x,a=m):c=c.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(c===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Cn|=l,e.lanes=l,e.memoizedState=m}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var po={},Ct=sn(po),Zr=sn(po),eo=sn(po);function hn(e){if(e===po)throw Error(z(174));return e}function Ma(e,t){switch(X(eo,t),X(Zr,e),X(Ct,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}ee(Ct),X(Ct,t)}function tr(){ee(Ct),ee(Zr),ee(eo)}function Df(e){hn(eo.current);var t=hn(Ct.current),n=cs(t,e.type);t!==n&&(X(Zr,e),X(Ct,n))}function Ba(e){Zr.current===e&&(ee(Ct),ee(Zr))}var ne=sn(0);function ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function ba(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Yo=It.ReactCurrentDispatcher,Ol=It.ReactCurrentBatchConfig,En=0,oe=null,pe=null,me=null,Ei=!1,Dr=!1,to=0,Oh=0;function ke(){throw Error(z(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,o,i){if(En=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?Dh:Ih,e=n(r,o),Dr){i=0;do{if(Dr=!1,to=0,25<=i)throw Error(z(301));i+=1,me=pe=null,t.updateQueue=null,Yo.current=Fh,e=n(r,o)}while(Dr)}if(Yo.current=Ci,t=pe!==null&&pe.next!==null,En=0,me=pe=oe=null,Ei=!1,t)throw Error(z(300));return e}function Wa(){var e=to!==0;return to=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function it(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(z(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function no(e,t){return typeof t=="function"?t(e):t}function Ll(e){var t=it(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var c=u.lane;if((En&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,oe.lanes|=c,Cn|=c}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,gt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,Cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=it(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);gt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function If(){}function Ff(e,t){var n=oe,r=it(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Va(bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ro(9,Bf.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(z(349));En&30||Mf(n,t,o)}return o}function Mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bf(e,t,n,r){t.value=n,t.getSnapshot=r,Uf(t)&&Hf(e)}function bf(e,t,n){return n(function(){Uf(t)&&Hf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Hf(e){var t=$t(e,1);t!==null&&pt(t,e,1,-1)}function lc(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=$h.bind(null,oe,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wf(){return it().memoizedState}function Go(e,t,n,r){var o=wt();oe.flags|=e,o.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var o=it();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Ua(r,l.deps)){o.memoizedState=ro(t,n,i,r);return}}oe.flags|=e,o.memoizedState=ro(1|t,n,i,r)}function sc(e,t){return Go(8390656,8,e,t)}function Va(e,t){return Hi(2048,8,e,t)}function Vf(e,t){return Hi(4,2,e,t)}function Qf(e,t){return Hi(4,4,e,t)}function Yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,Yf.bind(null,t,e),n)}function Qa(){}function Kf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return En&21?(gt(n,t)||(n=tf(),oe.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Lh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{G=n,Ol.transition=r}}function Jf(){return it().memoizedState}function Ah(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))ep(t,n);else if(n=Af(e,t,n,r),n!==null){var o=Ne();pt(n,e,r,o),tp(n,t,r)}}function $h(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))ep(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,gt(s,l)){var a=t.interleaved;a===null?(o.next=o,Ia(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Af(e,t,o,r),n!==null&&(o=Ne(),pt(n,e,r,o),tp(n,t,r))}}function Zf(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ep(e,t){Dr=Ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}var Ci={readContext:ot,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Dh={readContext:ot,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,Yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ah.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Qa,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=Lh.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=wt();if(te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ye===null)throw Error(z(349));En&30||Mf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,sc(bf.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,Bf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ye.identifierPrefix;if(te){var n=Rt,r=Nt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ih={readContext:ot,useCallback:Kf,useContext:ot,useEffect:Va,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Qf,useMemo:Xf,useReducer:Ll,useRef:Wf,useState:function(){return Ll(no)},useDebugValue:Qa,useDeferredValue:function(e){var t=it();return qf(t,pe.memoizedState,e)},useTransition:function(){var e=Ll(no)[0],t=it().memoizedState;return[e,t]},useMutableSource:If,useSyncExternalStore:Ff,useId:Jf,unstable_isNewReconciler:!1},Fh={readContext:ot,useCallback:Kf,useContext:ot,useEffect:Va,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Qf,useMemo:Xf,useReducer:Al,useRef:Wf,useState:function(){return Al(no)},useDebugValue:Qa,useDeferredValue:function(e){var t=it();return pe===null?t.memoizedState=e:qf(t,pe.memoizedState,e)},useTransition:function(){var e=Al(no)[0],t=it().memoizedState;return[e,t]},useMutableSource:If,useSyncExternalStore:Ff,useId:Jf,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(pt(t,e,o,r),Qo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(pt(t,e,o,r),Qo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=en(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(pt(t,e,r,n),Qo(t,e,r))}};function ac(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,i):!0}function np(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=Fe(t)?Sn:_e.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=Fe(t)?Sn:_e.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wi.enqueueReplaceState(o,o.state,null),Si(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=f0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mh=typeof WeakMap=="function"?WeakMap:Map;function rp(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Hs=r),Ls(e,t)},n}function op(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ls(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zh.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Bh=It.ReactCurrentOwner,$e=!1;function Te(e,t,n,r){t.child=e===null?Lf(t,null,n,r):er(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return Kn(t,o),r=Ha(e,t,n,r,i,o),n=Wa(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(te&&n&&Ra(t),t.flags|=1,Te(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ip(e,t,i,r,o)):(e=Jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function ip(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return As(e,t,n,r,o)}function lp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Hn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Hn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Hn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Hn,He),He|=r;return Te(e,t,o,n),t.child}function sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,o){var i=Fe(n)?Sn:_e.current;return i=Jn(t,i),Kn(t,o),n=Ha(e,t,n,r,i,o),r=Wa(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(te&&r&&Ra(t),t.flags|=1,Te(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Fe(n)){var i=!0;gi(t)}else i=!1;if(Kn(t,o),t.stateNode===null)Ko(e,t),np(t,n,r),Os(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Fe(n)?Sn:_e.current,u=Jn(t,u));var c=n.getDerivedStateFromProps,m=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&uc(t,l,r,u),Ut=!1;var g=t.memoizedState;l.state=g,Si(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Ie.current||Ut?(typeof c=="function"&&(Rs(t,n,c,r),a=t.memoizedState),(s=Ut||ac(t,n,s,r,g,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$f(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:at(t.type,s),l.props=u,m=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Fe(n)?Sn:_e.current,a=Jn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==a)&&uc(t,l,r,a),Ut=!1,g=t.memoizedState,l.state=g,Si(t,r,l,o);var v=t.memoizedState;s!==m||g!==v||Ie.current||Ut?(typeof x=="function"&&(Rs(t,n,x,r),v=t.memoizedState),(u=Ut||ac(t,n,u,r,g,v,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,i,o)}function $s(e,t,n,r,o,i){sp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),Dt(e,t,i);r=t.stateNode,Bh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=er(t,e.child,null,i),t.child=er(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function ap(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Ma(e,t.containerInfo)}function gc(e,t,n,r,o){return Zn(),La(o),t.flags|=256,Te(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function up(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ne,o&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yi(l,r,0,null),e=yn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Is(n),t.memoizedState=Ds,e):Ya(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return bh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=tn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=tn(s,i):(i=yn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Is(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=Yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oo(e,t,n,r){return r!==null&&La(r),er(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(z(422))),Oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yi({mode:"visible",children:r.children},o,0,null),i=yn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&er(t,e.child,null,l),t.child.memoizedState=Is(l),t.memoizedState=Ds,i);if(!(t.mode&1))return Oo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(z(419)),r=$l(i,r,void 0),Oo(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ye,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),pt(r,e,o,-1))}return Za(),r=$l(Error(z(421))),Oo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=em.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=qt(o.nextSibling),Ye=t,te=!0,ct=null,e!==null&&(Je[Ze++]=Nt,Je[Ze++]=Rt,Je[Ze++]=kn,Nt=e.id,Rt=e.overflow,kn=t),t=Ya(t,r.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ns(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function cp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ki(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ki(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uh(e,t,n){switch(t.tag){case 3:ap(t),Zn();break;case 5:Df(t);break;case 1:Fe(t.type)&&gi(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(xi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?up(e,t,n):(X(ne,ne.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,lp(e,t,n)}return Dt(e,t,n)}var dp,Fs,fp,pp;dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};fp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(Ct.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hi)}ds(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};pp=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&mi(),Ee(t),null;case 3:return r=t.stateNode,tr(),ee(Ie),ee(_e),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Qs(ct),ct=null))),Fs(e,t),Ee(t),null;case 5:Ba(t);var o=hn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)fp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ee(t),null}if(e=hn(Ct.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":_u(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":Tu(r,i),J("invalid",r)}ds(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,s,e),o=["children",""+s]):Ur.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":So(r),zu(r,i,!0);break;case"textarea":So(r),Pu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[Jr]=r,dp(e,t,!1,!1),t.stateNode=e;e:{switch(l=fs(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":_u(e,r),o=ls(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":Tu(e,r),o=us(e,r),J("invalid",e);break;default:o=r}ds(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Hd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ur.hasOwnProperty(i)?a!=null&&i==="onScroll"&&J("scroll",e):a!=null&&ya(e,i,a,l))}switch(n){case"input":So(e),zu(e,r,!1);break;case"textarea":So(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)pp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=hn(eo.current),hn(Ct.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ee(t),null;case 13:if(ee(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))Rf(),Zn(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[kt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ct!==null&&(Qs(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):Za())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return tr(),Fs(e,t),e===null&&Xr(t.stateNode.containerInfo),Ee(t),null;case 10:return Da(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&mi(),Ee(t),null;case 19:if(ee(ne),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ki(e),l!==null){for(t.flags|=128,kr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>rr&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ki(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return Ee(t),null}else 2*ae()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Wh(e,t){switch(Oa(t),t.tag){case 1:return Fe(t.type)&&mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),ee(Ie),ee(_e),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ba(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return tr(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Lo=!1,je=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,R=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Ms(e,t,n){try{n()}catch(r){se(e,t,r)}}var vc=!1;function Qh(e,t){if(ks=di,e=vf(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,c=0,m=e,g=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++c===r&&(a=l),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Es={focusedElem:e,selectionRange:n},di=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,L=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:at(t.type,w),L);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=vc,vc=!1,v}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ms(t,n,i)}o=o.next}while(o!==r)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hp(e){var t=e.alternate;t!==null&&(e.alternate=null,hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Jr],delete t[_s],delete t[Th],delete t[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hi));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}var ve=null,ut=!1;function Ft(e,t,n){for(n=n.child;n!==null;)gp(e,t,n),n=n.sibling}function gp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:je||Un(n,t);case 6:var r=ve,o=ut;ve=null,Ft(e,t,n),ve=r,ut=o,ve!==null&&(ut?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ut?(e=ve,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),Yr(e)):Pl(ve,n.stateNode));break;case 4:r=ve,o=ut,ve=n.stateNode.containerInfo,ut=!0,Ft(e,t,n),ve=r,ut=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ms(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!je&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Ft(e,t,n),je=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vh),t.forEach(function(r){var o=tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,ut=!1;break e;case 3:ve=s.stateNode.containerInfo,ut=!0;break e;case 4:ve=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(ve===null)throw Error(z(160));gp(i,l,o),ve=null,ut=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}function yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),xt(e),r&4){try{Ir(3,e,e.return),Vi(3,e)}catch(w){se(e,e.return,w)}try{Ir(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:st(t,e),xt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(st(t,e),xt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Fd(o,i),fs(s,l);var u=fs(s,i);for(l=0;l<a.length;l+=2){var c=a[l],m=a[l+1];c==="style"?Hd(o,m):c==="dangerouslySetInnerHTML"?bd(o,m):c==="children"?Hr(o,m):ya(o,c,m,u)}switch(s){case"input":ss(o,i);break;case"textarea":Md(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Vn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Vn(o,!!i.multiple,i.defaultValue,!0):Vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(st(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(st(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:st(t,e),xt(e);break;case 13:st(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=ae())),r&4&&wc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||c,st(t,e),je=u):st(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(m=R=c;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:Un(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:Un(g,g.return);break;case 22:if(g.memoizedState!==null){kc(m);continue}}x!==null?(x.return=g,R=x):kc(m)}c=c.sibling}e:for(c=null,m=e;;){if(m.tag===5){if(c===null){c=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ud("display",l))}catch(w){se(e,e.return,w)}}}else if(m.tag===6){if(c===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){se(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;c===m&&(c=null),m=m.return}c===m&&(c=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:st(t,e),xt(e),r&4&&wc(e);break;case 21:break;default:st(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mp(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=xc(e);Us(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=xc(e);bs(e,s,l);break;default:throw Error(z(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yh(e,t,n){R=e,vp(e)}function vp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Lo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||je;s=Lo;var u=je;if(Lo=l,(je=a)&&!u)for(R=o;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?Ec(o):a!==null?(a.return=l,R=a):Ec(o);for(;i!==null;)R=i,vp(i),i=i.sibling;R=o,Lo=s,je=u}Sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Sc(e)}}function Sc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Vi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var m=c.dehydrated;m!==null&&Yr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}je||t.flags&512&&Bs(t)}catch(g){se(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function kc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ec(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vi(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var i=t.return;try{Bs(t)}catch(a){se(t,i,a)}break;case 5:var l=t.return;try{Bs(t)}catch(a){se(t,l,a)}}}catch(a){se(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Gh=Math.ceil,ji=It.ReactCurrentDispatcher,Ga=It.ReactCurrentOwner,nt=It.ReactCurrentBatchConfig,W=0,ye=null,de=null,we=0,He=0,Hn=sn(0),he=0,oo=null,Cn=0,Qi=0,Ka=0,Fr=null,Ae=null,Xa=0,rr=1/0,zt=null,_i=!1,Hs=null,Zt=null,Ao=!1,Yt=null,zi=0,Mr=0,Ws=null,Xo=-1,qo=0;function Ne(){return W&6?ae():Xo!==-1?Xo:Xo=ae()}function en(e){return e.mode&1?W&2&&we!==0?we&-we:Rh.transition!==null?(qo===0&&(qo=tf()),qo):(e=G,e!==0||(e=window.event,e=e===void 0?16:uf(e.type)),e):1}function pt(e,t,n,r){if(50<Mr)throw Mr=0,Ws=null,Error(z(185));uo(e,n,r),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(Qi|=n),he===4&&Vt(e,we)),Me(e,r),n===1&&W===0&&!(t.mode&1)&&(rr=ae()+500,Ui&&an()))}function Me(e,t){var n=e.callbackNode;R0(e,t);var r=ci(e,e===ye?we:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?Nh(Cc.bind(null,e)):Tf(Cc.bind(null,e)),_h(function(){!(W&6)&&an()}),n=null;else{switch(nf(r)){case 1:n=ka;break;case 4:n=Zd;break;case 16:n=ui;break;case 536870912:n=ef;break;default:n=ui}n=_p(n,xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xp(e,t){if(Xo=-1,qo=0,W&6)throw Error(z(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=ci(e,e===ye?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ti(e,r);else{t=r;var o=W;W|=2;var i=Sp();(ye!==e||we!==t)&&(zt=null,rr=ae()+500,gn(e,t));do try{qh();break}catch(s){wp(e,s)}while(!0);$a(),ji.current=i,W=o,de!==null?t=0:(ye=null,we=0,t=he)}if(t!==0){if(t===2&&(o=ys(e),o!==0&&(r=o,t=Vs(e,o))),t===1)throw n=oo,gn(e,0),Vt(e,r),Me(e,ae()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Kh(o)&&(t=Ti(e,r),t===2&&(i=ys(e),i!==0&&(r=i,t=Vs(e,i))),t===1))throw n=oo,gn(e,0),Vt(e,r),Me(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:dn(e,Ae,zt);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Xa+500-ae(),10<t)){if(ci(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=js(dn.bind(null,e,Ae,zt),t);break}dn(e,Ae,zt);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ft(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gh(r/1960))-r,10<r){e.timeoutHandle=js(dn.bind(null,e,Ae,zt),r);break}dn(e,Ae,zt);break;case 5:dn(e,Ae,zt);break;default:throw Error(z(329))}}}return Me(e,ae()),e.callbackNode===n?xp.bind(null,e):null}function Vs(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Qs(t)),e}function Qs(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Ka,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(W&6)throw Error(z(327));Xn();var t=ci(e,0);if(!(t&1))return Me(e,ae()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=ys(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=oo,gn(e,0),Vt(e,t),Me(e,ae()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ae,zt),Me(e,ae()),null}function qa(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(rr=ae()+500,Ui&&an())}}function jn(e){Yt!==null&&Yt.tag===0&&!(W&6)&&Xn();var t=W;W|=1;var n=nt.transition,r=G;try{if(nt.transition=null,G=1,e)return e()}finally{G=r,nt.transition=n,W=t,!(W&6)&&an()}}function Ja(){He=Hn.current,ee(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mi();break;case 3:tr(),ee(Ie),ee(_e),ba();break;case 5:Ba(r);break;case 4:tr();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:Da(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(ye=e,de=e=tn(e.current,null),we=He=t,he=0,oo=null,Ka=Qi=Cn=0,Ae=Fr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}pn=null}return e}function wp(e,t){do{var n=de;try{if($a(),Yo.current=Ci,Ei){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ei=!1}if(En=0,me=pe=oe=null,Dr=!1,to=0,Ga.current=null,n===null||n.return===null){he=1,oo=t,de=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=we,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,m=c.tag;if(!(c.mode&1)&&(m===0||m===11||m===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=dc(l);if(x!==null){x.flags&=-257,fc(x,l,s,i,t),x.mode&1&&cc(i,u,t),t=x,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){cc(i,u,t),Za();break e}a=Error(z(426))}}else if(te&&s.mode&1){var L=dc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),fc(L,l,s,i,t),La(nr(a,s));break e}}i=a=nr(a,s),he!==4&&(he=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=rp(i,a,t);oc(i,h);break e;case 1:s=a;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Zt===null||!Zt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=op(i,s,t);oc(i,S);break e}}i=i.return}while(i!==null)}Ep(n)}catch(T){t=T,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Sp(){var e=ji.current;return ji.current=Ci,e===null?Ci:e}function Za(){(he===0||he===3||he===2)&&(he=4),ye===null||!(Cn&268435455)&&!(Qi&268435455)||Vt(ye,we)}function Ti(e,t){var n=W;W|=2;var r=Sp();(ye!==e||we!==t)&&(zt=null,gn(e,t));do try{Xh();break}catch(o){wp(e,o)}while(!0);if($a(),W=n,ji.current=r,de!==null)throw Error(z(261));return ye=null,we=0,he}function Xh(){for(;de!==null;)kp(de)}function qh(){for(;de!==null&&!k0();)kp(de)}function kp(e){var t=jp(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Ep(e):de=t,Ga.current=null}function Ep(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Hh(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function dn(e,t,n){var r=G,o=nt.transition;try{nt.transition=null,G=1,Jh(e,t,n,r)}finally{nt.transition=o,G=r}return null}function Jh(e,t,n,r){do Xn();while(Yt!==null);if(W&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(O0(e,i),e===ye&&(de=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,_p(ui,function(){return Xn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var l=G;G=1;var s=W;W|=4,Ga.current=null,Qh(e,n),yp(n,e),vh(Es),di=!!ks,Es=ks=null,e.current=n,Yh(n),E0(),W=s,G=l,nt.transition=i}else e.current=n;if(Ao&&(Ao=!1,Yt=e,zi=o),i=e.pendingLanes,i===0&&(Zt=null),_0(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=Hs,Hs=null,e;return zi&1&&e.tag!==0&&Xn(),i=e.pendingLanes,i&1?e===Ws?Mr++:(Mr=0,Ws=e):Mr=0,an(),null}function Xn(){if(Yt!==null){var e=nf(zi),t=nt.transition,n=G;try{if(nt.transition=null,G=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,zi=0,W&6)throw Error(z(331));var o=W;for(W|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ir(8,c,i)}var m=c.child;if(m!==null)m.return=c,R=m;else for(;R!==null;){c=R;var g=c.sibling,x=c.return;if(hp(c),c===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,R=h;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,R=f;else e:for(l=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vi(9,s)}}catch(T){se(s,s.return,T)}if(s===l){R=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,R=S;break e}R=s.return}}if(W=o,an(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{G=n,nt.transition=t}}return!1}function jc(e,t,n){t=nr(n,t),t=rp(e,t,1),e=Jt(e,t,1),t=Ne(),e!==null&&(uo(e,1,t),Me(e,t))}function se(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=nr(n,e),e=op(t,e,1),t=Jt(t,e,1),e=Ne(),t!==null&&(uo(t,1,e),Me(t,e));break}}t=t.return}}function Zh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(he===4||he===3&&(we&130023424)===we&&500>ae()-Xa?gn(e,0):Ka|=n),Me(e,t)}function Cp(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=Ne();e=$t(e,t),e!==null&&(uo(e,t,n),Me(e,n))}function em(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cp(e,n)}function tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Cp(e,n)}var jp;jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Uh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,te&&t.flags&1048576&&Pf(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var o=Jn(t,_e.current);Kn(t,n),o=Ha(null,t,r,e,o,n);var i=Wa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,gi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fa(t),o.updater=Wi,t.stateNode=o,o._reactInternals=t,Os(t,r,e,n),t=$s(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Ra(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rm(r),e=at(r,e),o){case 0:t=As(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,at(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),As(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),mc(e,t,r,o,n);case 3:e:{if(ap(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,$f(e,t),Si(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nr(Error(z(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(z(424)),t),t=gc(e,t,r,n,o);break e}else for(We=qt(t.stateNode.containerInfo.firstChild),Ye=t,te=!0,ct=null,n=Lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=Dt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Df(t),e===null&&Ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Cs(r,o)?l=null:i!==null&&Cs(r,i)&&(t.flags|=32),sp(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&Ps(t),null;case 13:return up(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),pc(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(xi,r._currentValue),r._currentValue=l,i!==null)if(gt(i.value,l)){if(i.children===o.children&&!Ie.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ns(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ns(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kn(t,n),o=ot(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=at(r,t.pendingProps),o=at(r.type,o),hc(e,t,r,o,n);case 15:return ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:at(r,o),Ko(e,t),t.tag=1,Fe(r)?(e=!0,gi(t)):e=!1,Kn(t,n),np(t,r,o),Os(t,r,o,n),$s(null,t,r,!0,e,n);case 19:return cp(e,t,n);case 22:return lp(e,t,n)}throw Error(z(156,t.tag))};function _p(e,t){return Jd(e,t)}function nm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new nm(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===wa)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")eu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return yn(n.children,o,i,t);case va:l=8,o|=8;break;case ns:return e=tt(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=tt(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=tt(19,n,t,o),e.elementType=os,e.lanes=i,e;case $d:return Yi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ld:l=10;break e;case Ad:l=9;break e;case xa:l=11;break e;case wa:l=14;break e;case bt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=tt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function yn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Yi(e,t,n,r){return e=tt(22,e,r,t),e.elementType=$d,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function om(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,o,i,l,s,a){return e=new om(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(i),e}function im(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zp(e){if(!e)return rn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Fe(n))return zf(e,n,t)}return t}function Tp(e,t,n,r,o,i,l,s,a){return e=tu(n,r,!0,e,o,i,l,s,a),e.context=zp(null),n=e.current,r=Ne(),o=en(n),i=Ot(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,uo(e,o,r),Me(e,r),e}function Gi(e,t,n,r){var o=t.current,i=Ne(),l=en(o);return n=zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(pt(e,o,l,i),Qo(e,o,l)),l}function Pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function lm(){return null}var Pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}Ki.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Gi(e,t,null,null)};Ki.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Gi(null,e,null,null)}),t[At]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&af(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function sm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Pi(l);i.call(u)}}var l=Tp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[At]=l.current,Xr(e.nodeType===8?e.parentNode:e),jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Pi(a);s.call(u)}}var a=tu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=a,e[At]=a.current,Xr(e.nodeType===8?e.parentNode:e),jn(function(){Gi(t,a,n,r)}),a}function qi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Pi(l);s.call(a)}}Gi(t,l,e,o)}else l=sm(n,t,e,o,r);return Pi(l)}rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Ea(t,n|1),Me(t,ae()),!(W&6)&&(rr=ae()+500,an()))}break;case 13:jn(function(){var r=$t(e,1);if(r!==null){var o=Ne();pt(r,e,1,o)}}),nu(e,1)}};Ca=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ne();pt(t,e,134217728,n)}nu(e,134217728)}};of=function(e){if(e.tag===13){var t=en(e),n=$t(e,t);if(n!==null){var r=Ne();pt(n,e,t,r)}nu(e,t)}};lf=function(){return G};sf=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};hs=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bi(r);if(!o)throw Error(z(90));Id(r),ss(r,o)}}}break;case"textarea":Md(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};Qd=qa;Yd=jn;var am={usingClientEntryPoint:!1,Events:[fo,In,bi,Wd,Vd,qa]},Er={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},um={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Ii=$o.inject(um),Et=$o}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(z(200));return im(e,t,null,n)};Ke.createRoot=function(e,t){if(!ou(e))throw Error(z(299));var n=!1,r="",o=Pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,Xr(e.nodeType===8?e.parentNode:e),new ru(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Xd(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return jn(e)};Ke.hydrate=function(e,t,n){if(!Xi(t))throw Error(z(200));return qi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Pp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Tp(t,null,e,1,n??null,o,!1,i,l),e[At]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ki(t)};Ke.render=function(e,t,n){if(!Xi(t))throw Error(z(200));return qi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(z(40));return e._reactRootContainer?(jn(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ke.unstable_batchedUpdates=qa;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return qi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np)}catch(e){console.error(e)}}Np(),Pd.exports=Ke;var cm=Pd.exports,Tc=cm;es.createRoot=Tc.createRoot,es.hydrateRoot=Tc.hydrateRoot;var De=function(){return De=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},De.apply(this,arguments)};function io(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",Br="-moz-",Y="-webkit-",Rp="comm",Ji="rule",iu="decl",dm="@import",Op="@keyframes",fm="@layer",Lp=Math.abs,lu=String.fromCharCode,Ys=Object.assign;function pm(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Ap(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Zo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function or(e,t,n){return e.slice(t,n)}function St(e){return e.length}function $p(e){return e.length}function Nr(e,t){return t.push(e),e}function hm(e,t){return e.map(t).join("")}function Pc(e,t){return e.filter(function(n){return!Tt(n,t)})}var Zi=1,ir=1,Dp=0,lt=0,ce=0,pr="";function el(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Zi,column:ir,length:l,return:"",siblings:s}}function Bt(e,t){return Ys(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rn(e){for(;e.root;)e=Bt(e.root,{children:[e]});Nr(e,e.siblings)}function mm(){return ce}function gm(){return ce=lt>0?ge(pr,--lt):0,ir--,ce===10&&(ir=1,Zi--),ce}function ht(){return ce=lt<Dp?ge(pr,lt++):0,ir++,ce===10&&(ir=1,Zi++),ce}function vn(){return ge(pr,lt)}function ei(){return lt}function tl(e,t){return or(pr,e,t)}function Gs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ym(e){return Zi=ir=1,Dp=St(pr=e),lt=0,[]}function vm(e){return pr="",e}function Ml(e){return Ap(tl(lt-1,Ks(e===91?e+2:e===40?e+1:e)))}function xm(e){for(;(ce=vn())&&ce<33;)ht();return Gs(e)>2||Gs(ce)>3?"":" "}function wm(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return tl(e,ei()+(t<6&&vn()==32&&ht()==32))}function Ks(e){for(;ht();)switch(ce){case e:return lt;case 34:case 39:e!==34&&e!==39&&Ks(ce);break;case 40:e===41&&Ks(e);break;case 92:ht();break}return lt}function Sm(e,t){for(;ht()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+tl(t,lt-1)+"*"+lu(e===47?e:ht())}function km(e){for(;!Gs(vn());)ht();return tl(e,lt)}function Em(e){return vm(ti("",null,null,null,[""],e=ym(e),0,[0],e))}function ti(e,t,n,r,o,i,l,s,a){for(var u=0,c=0,m=l,g=0,x=0,v=0,w=1,L=1,h=1,d=0,f="",S=o,T=i,_=r,C=f;L;)switch(v=d,d=ht()){case 40:if(v!=108&&ge(C,m-1)==58){Zo(C+=M(Ml(d),"&","&\f"),"&\f",Lp(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=Ml(d);break;case 9:case 10:case 13:case 32:C+=xm(v);break;case 92:C+=wm(ei()-1,7);continue;case 47:switch(vn()){case 42:case 47:Nr(Cm(Sm(ht(),ei()),t,n,a),a);break;default:C+="/"}break;case 123*w:s[u++]=St(C)*h;case 125*w:case 59:case 0:switch(d){case 0:case 125:L=0;case 59+c:h==-1&&(C=M(C,/\f/g,"")),x>0&&St(C)-m&&Nr(x>32?Rc(C+";",r,n,m-1,a):Rc(M(C," ","")+";",r,n,m-2,a),a);break;case 59:C+=";";default:if(Nr(_=Nc(C,t,n,u,c,o,s,f,S=[],T=[],m,i),i),d===123)if(c===0)ti(C,t,_,_,S,i,m,s,T);else switch(g===99&&ge(C,3)===110?100:g){case 100:case 108:case 109:case 115:ti(e,_,_,r&&Nr(Nc(e,_,_,0,0,o,s,f,o,S=[],m,T),T),o,T,m,s,r?S:T);break;default:ti(C,_,_,_,[""],T,0,s,T)}}u=c=x=0,w=h=1,f=C="",m=l;break;case 58:m=1+St(C),x=v;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&gm()==125)continue}switch(C+=lu(d),d*w){case 38:h=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(St(C)-1)*h,h=1;break;case 64:vn()===45&&(C+=Ml(ht())),g=vn(),c=m=St(f=C+=km(ei())),d++;break;case 45:v===45&&St(C)==2&&(w=0)}}return i}function Nc(e,t,n,r,o,i,l,s,a,u,c,m){for(var g=o-1,x=o===0?i:[""],v=$p(x),w=0,L=0,h=0;w<r;++w)for(var d=0,f=or(e,g+1,g=Lp(L=l[w])),S=e;d<v;++d)(S=Ap(L>0?x[d]+" "+f:M(f,/&\f/g,x[d])))&&(a[h++]=S);return el(e,t,n,o===0?Ji:s,a,u,c,m)}function Cm(e,t,n,r){return el(e,t,n,Rp,lu(mm()),or(e,2,-2),0,r)}function Rc(e,t,n,r,o){return el(e,t,n,iu,or(e,0,r),or(e,r+1,-1),r,o)}function Ip(e,t,n){switch(pm(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+Br+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+Z+e+e;case 6165:return Y+e+Z+"flex-"+e+e;case 5187:return Y+e+M(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return Y+e+Z+"flex-item-"+M(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":Z+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return Y+e+Z+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+Z+M(e,"shrink","negative")+e;case 5292:return Y+e+Z+M(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+M(e,"-grow","")+Y+e+Z+M(e,"grow","positive")+e;case 4554:return Y+M(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return Z+"grid-column-align"+or(e,t)+e;break;case 2592:case 3360:return Z+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Tt(r.props,/grid-\w+-end/)})?~Zo(e+(n=n[t].value),"span",0)?e:Z+M(e,"-start","")+e+Z+"grid-row-span:"+(~Zo(n,"span",0)?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":Z+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:Z+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Br+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zo(e,"stretch",0)?Ip(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Z+o+":"+i+u+(l?Z+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return M(e,":",":"+Y)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(ge(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Z+"$2box$3")+e;case 100:return M(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Ni(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jm(e,t,n,r){switch(e.type){case fm:if(e.children.length)break;case dm:case iu:return e.return=e.return||e.value;case Rp:return"";case Op:return e.return=e.value+"{"+Ni(e.children,r)+"}";case Ji:if(!St(e.value=e.props.join(",")))return""}return St(n=Ni(e.children,r))?e.return=e.value+"{"+n+"}":""}function _m(e){var t=$p(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function zm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case iu:e.return=Ip(e.value,e.length,n);return;case Op:return Ni([Bt(e,{value:M(e.value,"@","@"+Y)})],r);case Ji:if(e.length)return hm(n=e.props,function(o){switch(Tt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rn(Bt(e,{props:[M(o,/:(read-\w+)/,":"+Br+"$1")]})),Rn(Bt(e,{props:[o]})),Ys(e,{props:Pc(n,r)});break;case"::placeholder":Rn(Bt(e,{props:[M(o,/:(plac\w+)/,":"+Y+"input-$1")]})),Rn(Bt(e,{props:[M(o,/:(plac\w+)/,":"+Br+"$1")]})),Rn(Bt(e,{props:[M(o,/:(plac\w+)/,Z+"input-$1")]})),Rn(Bt(e,{props:[o]})),Ys(e,{props:Pc(n,r)});break}return""})}}var Pm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},lr=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",Fp="active",Mp="data-styled-version",nl="6.1.11",su=`/*!sc*/
`,au=typeof window<"u"&&"HTMLElement"in window,Nm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),rl=Object.freeze([]),sr=Object.freeze({});function Rm(e,t,n){return n===void 0&&(n=sr),e.theme!==n.theme&&e.theme||t||n.theme}var Bp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Om=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lm=/(^-|-$)/g;function Oc(e){return e.replace(Om,"-").replace(Lm,"")}var Am=/(a)(d)/gi,Do=52,Lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xs(e){var t,n="";for(t=Math.abs(e);t>Do;t=t/Do|0)n=Lc(t%Do)+n;return(Lc(t%Do)+n).replace(Am,"$1-$2")}var Bl,bp=5381,Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Up=function(e){return Wn(bp,e)};function Hp(e){return Xs(Up(e)>>>0)}function $m(e){return e.displayName||e.name||"Component"}function bl(e){return typeof e=="string"&&!0}var Wp=typeof Symbol=="function"&&Symbol.for,Vp=Wp?Symbol.for("react.memo"):60115,Dm=Wp?Symbol.for("react.forward_ref"):60112,Im={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mm=((Bl={})[Dm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bl[Vp]=Qp,Bl);function Ac(e){return("type"in(t=e)&&t.type.$$typeof)===Vp?Qp:"$$typeof"in e?Mm[e.$$typeof]:Im;var t}var Bm=Object.defineProperty,bm=Object.getOwnPropertyNames,$c=Object.getOwnPropertySymbols,Um=Object.getOwnPropertyDescriptor,Hm=Object.getPrototypeOf,Dc=Object.prototype;function Yp(e,t,n){if(typeof t!="string"){if(Dc){var r=Hm(t);r&&r!==Dc&&Yp(e,r,n)}var o=bm(t);$c&&(o=o.concat($c(t)));for(var i=Ac(e),l=Ac(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Fm||n&&n[a]||l&&a in l||i&&a in i)){var u=Um(t,a);try{Bm(e,a,u)}catch{}}}}return e}function ar(e){return typeof e=="function"}function uu(e){return typeof e=="object"&&"styledComponentId"in e}function mn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Js(e,t,n){if(n===void 0&&(n=!1),!n&&!lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Js(e[r],t[r]);else if(lo(t))for(var r in t)e[r]=Js(e[r],t[r]);return e}function cu(e,t){Object.defineProperty(e,"toString",{value:t})}function ho(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Wm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ho(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(su);return n},e}(),ni=new Map,Ri=new Map,ri=1,Io=function(e){if(ni.has(e))return ni.get(e);for(;Ri.has(ri);)ri++;var t=ri++;return ni.set(e,t),Ri.set(t,e),t},Vm=function(e,t){ri=t+1,ni.set(e,t),Ri.set(t,e)},Qm="style[".concat(lr,"][").concat(Mp,'="').concat(nl,'"]'),Ym=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Km=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(su),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Ym);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Vm(c,u),Gm(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Xm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(lr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(lr,Fp),r.setAttribute(Mp,nl);var l=Xm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},qm=function(){function e(t){this.element=Gp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw ho(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jm=function(){function e(t){this.element=Gp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Zm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ic=au,eg={isServer:!au,useCSSOMInjection:!Nm},Kp=function(){function e(t,n,r){t===void 0&&(t=sr),n===void 0&&(n={});var o=this;this.options=De(De({},eg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&au&&Ic&&(Ic=!1,function(i){for(var l=document.querySelectorAll(Qm),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(lr)!==Fp&&(Km(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cu(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(m){var g=function(h){return Ri.get(h)}(m);if(g===void 0)return"continue";var x=i.names.get(g),v=l.getGroup(m);if(x===void 0||v.length===0)return"continue";var w="".concat(lr,".g").concat(m,'[id="').concat(g,'"]'),L="";x!==void 0&&x.forEach(function(h){h.length>0&&(L+="".concat(h,","))}),a+="".concat(v).concat(w,'{content:"').concat(L,'"}').concat(su)},c=0;c<s;c++)u(c);return a}(o)})}return e.registerId=function(t){return Io(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Zm(o):r?new qm(o):new Jm(o)}(this.options),new Wm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Io(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),tg=/&/g,ng=/^\s*\/\/.*$/gm;function Xp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Xp(n.children,t)),n})}function rg(e){var t,n,r,o=sr,i=o.options,l=i===void 0?sr:i,s=o.plugins,a=s===void 0?rl:s,u=function(g,x,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===Ji&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(tg,n).replace(r,u))}),l.prefix&&c.push(Tm),c.push(jm);var m=function(g,x,v,w){x===void 0&&(x=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var L=g.replace(ng,""),h=Em(v||x?"".concat(v," ").concat(x," { ").concat(L," }"):L);l.namespace&&(h=Xp(h,l.namespace));var d=[];return Ni(h,_m(c.concat(zm(function(f){return d.push(f)})))),d};return m.hash=a.length?a.reduce(function(g,x){return x.name||ho(15),Wn(g,x.name)},bp).toString():"",m}var og=new Kp,Zs=rg(),qp=Qe.createContext({shouldForwardProp:void 0,styleSheet:og,stylis:Zs});qp.Consumer;Qe.createContext(void 0);function Fc(){return re.useContext(qp)}var Jp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Zs);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cu(this,function(){throw ho(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zs),this.name+t.hash},e}(),ig=function(e){return e>="A"&&e<="Z"};function Mc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ig(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zp=function(e){return e==null||e===!1||e===""},e1=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Zp(i)&&(Array.isArray(i)&&i.isCss||ar(i)?r.push("".concat(Mc(o),":"),i,";"):lo(i)?r.push.apply(r,io(io(["".concat(o," {")],e1(i),!1),["}"],!1)):r.push("".concat(Mc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Pm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(Zp(e))return[];if(uu(e))return[".".concat(e.styledComponentId)];if(ar(e)){if(!ar(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return xn(o,t,n,r)}var i;return e instanceof Jp?n?(e.inject(n,r),[e.getName(r)]):[e]:lo(e)?e1(e):Array.isArray(e)?Array.prototype.concat.apply(rl,e.map(function(l){return xn(l,t,n,r)})):[e.toString()]}function lg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ar(n)&&!uu(n))return!1}return!0}var sg=Up(nl),ag=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lg(t),this.componentId=n,this.baseHash=Wn(sg,n),this.baseStyle=r,Kp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=mn(o,this.staticRulesId);else{var i=qs(xn(this.rules,t,n,r)),l=Xs(Wn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=mn(o,l),this.staticRulesId=l}else{for(var a=Wn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var m=this.rules[c];if(typeof m=="string")u+=m;else if(m){var g=qs(xn(m,t,n,r));a=Wn(a,g+c),u+=g}}if(u){var x=Xs(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=mn(o,x)}}return o},e}(),t1=Qe.createContext(void 0);t1.Consumer;var Ul={};function ug(e,t,n){var r=uu(e),o=e,i=!bl(e),l=t.attrs,s=l===void 0?rl:l,a=t.componentId,u=a===void 0?function(S,T){var _=typeof S!="string"?"sc":Oc(S);Ul[_]=(Ul[_]||0)+1;var C="".concat(_,"-").concat(Hp(nl+_+Ul[_]));return T?"".concat(T,"-").concat(C):C}(t.displayName,t.parentComponentId):a,c=t.displayName,m=c===void 0?function(S){return bl(S)?"styled.".concat(S):"Styled(".concat($m(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Oc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;v=function(S,T){return w(S,T)&&L(S,T)}}else v=w}var h=new ag(n,g,r?o.componentStyle:void 0);function d(S,T){return function(_,C,N){var U=_.attrs,I=_.componentStyle,ze=_.defaultProps,V=_.foldedComponentIds,vt=_.styledComponentId,Pn=_.target,F=Qe.useContext(t1),A=Fc(),$=_.shouldForwardProp||A.shouldForwardProp,j=Rm(C,F,ze)||sr,O=function(q,B,le){for(var qe,be=De(De({},B),{className:void 0,theme:le}),_t=0;_t<q.length;_t+=1){var un=ar(qe=q[_t])?qe(be):qe;for(var Le in un)be[Le]=Le==="className"?mn(be[Le],un[Le]):Le==="style"?De(De({},be[Le]),un[Le]):un[Le]}return B.className&&(be.className=mn(be.className,B.className)),be}(U,C,j),y=O.as||Pn,Q={};for(var P in O)O[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&O.theme===j||(P==="forwardedAs"?Q.as=O.forwardedAs:$&&!$(P,y)||(Q[P]=O[P]));var H=function(q,B){var le=Fc(),qe=q.generateAndInjectStyles(B,le.styleSheet,le.stylis);return qe}(I,O),K=mn(V,vt);return H&&(K+=" "+H),O.className&&(K+=" "+O.className),Q[bl(y)&&!Bp.has(y)?"class":"className"]=K,Q.ref=N,re.createElement(y,Q)}(f,S,T)}d.displayName=m;var f=Qe.forwardRef(d);return f.attrs=x,f.componentStyle=h,f.displayName=m,f.shouldForwardProp=v,f.foldedComponentIds=r?mn(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=g,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(T){for(var _=[],C=1;C<arguments.length;C++)_[C-1]=arguments[C];for(var N=0,U=_;N<U.length;N++)Js(T,U[N],!0);return T}({},o.defaultProps,S):S}}),cu(f,function(){return".".concat(f.styledComponentId)}),i&&Yp(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Bc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var bc=function(e){return Object.assign(e,{isCss:!0})};function n1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ar(e)||lo(e))return bc(xn(Bc(rl,io([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):bc(xn(Bc(r,t)))}function ea(e,t,n){if(n===void 0&&(n=sr),!t)throw ho(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,n1.apply(void 0,io([o],i,!1)))};return r.attrs=function(o){return ea(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ea(e,t,De(De({},n),o))},r}var r1=function(e){return ea(ug,e)},E=r1;Bp.forEach(function(e){E[e]=r1(e)});function jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qs(n1.apply(void 0,io([e],t,!1))),o=Hp(r);return new Jp(o,r)}const du="/assets/doragacharla_lizy-D9u5FGKy.jpg",Ve={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},cg=E.div`
  display: flex;
  justify-content: center;
    gap:30px;

  align-items: center;
  padding: 10px 20px; /* Adjusted padding for better spacing */
  background: ${e=>e.scrolled?Ve.spaceCadet:Ve.delftBlue};
  color: ${Ve.ghostWhite};
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 50px;
  border: 2px solid ${Ve.periwinkle};
  width: ${e=>(e.scrolled,"auto")};
  height: ${e=>e.scrolled?"40px":"60px"};
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
  justify-content:space-between;
    padding: 5px 10px; /* Adjusted padding for small screens */
    width:100%;
    top:0;
    border-radius: 0;
    height: auto;
    border: 0;
  }
`,dg=E.div`
  font-size: ${e=>e.scrolled?"20px":"24px"};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${Ve.ghostWhite};
  background-image: url(${du});
  background-size: cover;
  background-position: center;
  width: ${e=>e.scrolled?"25px":"50px"};
  height: ${e=>e.scrolled?"25px":"50px"};
  border-radius: 50%;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), height 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,fg=E.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`,Hl=E.div`
  width: 25px;
  height: 3px;
  background-color: ${Ve.ghostWhite};
  margin: 4px 0;
  transition: 0.4s;

  ${({open:e})=>e&&`
    &:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`,pg=E.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    position: fixed;
    padding: 30px;
    top: 0;
    left: 0;
    height: 100vh;
    width: 30%;
    background-color: ${Ve.spaceCadet};
    transform: ${e=>e.open?"translateX(0)":"translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`,hg=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${Ve.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`,mg=E.div`
  background-image: url(${du});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`,gg=E.div`
  color: ${Ve.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`,Fo=E.a`
  color: ${Ve.ghostWhite};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${Ve.periwinkle};
  }

  &.active {
    color: ${Ve.periwinkle};
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${Ve.periwinkle};
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }
`,yg=()=>{const[e,t]=re.useState(!1),[n,r]=re.useState(""),[o,i]=re.useState(!1);re.useEffect(()=>{const s=()=>{const a=window.scrollY;t(a>50);const u=["home","aboutme","knowmore","skills","projects","connect"],c=a;u.forEach(m=>{const g=document.getElementById(m);g&&g.offsetTop<=c+50&&r(m)})};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const l=s=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"}),i(!1)};return p.jsxs(cg,{scrolled:e,children:[p.jsx(dg,{scrolled:e}),p.jsxs(fg,{onClick:()=>i(!o),children:[p.jsx(Hl,{open:o}),p.jsx(Hl,{open:o}),p.jsx(Hl,{open:o})]}),p.jsxs(pg,{open:o,children:[p.jsxs(hg,{children:[p.jsx(mg,{}),p.jsx(gg,{children:"Doragacharla Lizy"})]}),p.jsx(Fo,{className:n==="home"?"active":"",onClick:()=>l("home"),children:"Home"}),p.jsx(Fo,{className:n==="aboutme"?"active":"",onClick:()=>l("aboutme"),children:"About me"}),p.jsx(Fo,{className:n==="knowmore"?"active":"",onClick:()=>l("knowmore"),children:"Know More"}),p.jsx(Fo,{className:n==="connect"?"active":"",onClick:()=>l("connect"),children:"Connect"})]})]})};var o1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uc=Qe.createContext&&Qe.createContext(o1),vg=["attr","size","title"];function xg(e,t){if(e==null)return{};var n=wg(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function Hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Li(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hc(Object(n),!0).forEach(function(r){Sg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sg(e,t,n){return t=kg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kg(e){var t=Eg(e,"string");return typeof t=="symbol"?t:t+""}function Eg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function i1(e){return e&&e.map((t,n)=>Qe.createElement(t.tag,Li({key:n},t.attr),i1(t.child)))}function ue(e){return t=>Qe.createElement(Cg,Oi({attr:Li({},e.attr)},t),i1(e.child))}function Cg(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=xg(e,vg),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Qe.createElement("svg",Oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Li(Li({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Qe.createElement("title",null,i),e.children)};return Uc!==void 0?Qe.createElement(Uc.Consumer,null,n=>t(n)):t(o1)}function jg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"},child:[]}]})(e)}function _g(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function zg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(e)}function Tg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function Pg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(e)}function Ng(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}var l1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:F1,()=>(()=>{var n={75:function(l){(function(){var s,a,u,c,m,g;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(s()-m)/1e6},a=process.hrtime,c=(s=function(){var x;return 1e9*(x=a())[0]+x[1]})(),g=1e9*process.uptime(),m=c-g):Date.now?(l.exports=function(){return Date.now()-u},u=Date.now()):(l.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(l,s,a)=>{for(var u=a(75),c=typeof window>"u"?a.g:window,m=["moz","webkit"],g="AnimationFrame",x=c["request"+g],v=c["cancel"+g]||c["cancelRequest"+g],w=0;!x&&w<m.length;w++)x=c[m[w]+"Request"+g],v=c[m[w]+"Cancel"+g]||c[m[w]+"CancelRequest"+g];if(!x||!v){var L=0,h=0,d=[];x=function(f){if(d.length===0){var S=u(),T=Math.max(0,16.666666666666668-(S-L));L=T+S,setTimeout(function(){var _=d.slice(0);d.length=0;for(var C=0;C<_.length;C++)if(!_[C].cancelled)try{_[C].callback(L)}catch(N){setTimeout(function(){throw N},0)}},Math.round(T))}return d.push({handle:++h,callback:f,cancelled:!1}),h},v=function(f){for(var S=0;S<d.length;S++)d[S].handle===f&&(d[S].cancelled=!0)}}l.exports=function(f){return x.call(c,f)},l.exports.cancel=function(){v.apply(c,arguments)},l.exports.polyfill=function(f){f||(f=c),f.requestAnimationFrame=x,f.cancelAnimationFrame=v}}},r={};function o(l){var s=r[l];if(s!==void 0)return s.exports;var a=r[l]={exports:{}};return n[l].call(a.exports,a,a.exports,o),a.exports}o.n=l=>{var s=l&&l.__esModule?()=>l.default:()=>l;return o.d(s,{a:s}),s},o.d=(l,s)=>{for(var a in s)o.o(s,a)&&!o.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:s[a]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s);var i={};return(()=>{o.d(i,{default:()=>Pn});var l=o(4087),s=o.n(l);const a=function(F){return new RegExp(/<[a-z][\s\S]*>/i).test(F)},u=function(F,A){return Math.floor(Math.random()*(A-F+1))+F};var c="TYPE_CHARACTER",m="REMOVE_CHARACTER",g="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",w="CALL_FUNCTION",L="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",f="CHANGE_CURSOR",S="PASTE_STRING",T="HTML_TAG";function _(F){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},_(F)}function C(F,A){var $=Object.keys(F);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(F);A&&(j=j.filter(function(O){return Object.getOwnPropertyDescriptor(F,O).enumerable})),$.push.apply($,j)}return $}function N(F){for(var A=1;A<arguments.length;A++){var $=arguments[A]!=null?arguments[A]:{};A%2?C(Object($),!0).forEach(function(j){V(F,j,$[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors($)):C(Object($)).forEach(function(j){Object.defineProperty(F,j,Object.getOwnPropertyDescriptor($,j))})}return F}function U(F){return function(A){if(Array.isArray(A))return I(A)}(F)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(F)||function(A,$){if(A){if(typeof A=="string")return I(A,$);var j=Object.prototype.toString.call(A).slice(8,-1);return j==="Object"&&A.constructor&&(j=A.constructor.name),j==="Map"||j==="Set"?Array.from(A):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?I(A,$):void 0}}(F)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(F,A){(A==null||A>F.length)&&(A=F.length);for(var $=0,j=new Array(A);$<A;$++)j[$]=F[$];return j}function ze(F,A){for(var $=0;$<A.length;$++){var j=A[$];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(F,vt(j.key),j)}}function V(F,A,$){return(A=vt(A))in F?Object.defineProperty(F,A,{value:$,enumerable:!0,configurable:!0,writable:!0}):F[A]=$,F}function vt(F){var A=function($,j){if(_($)!=="object"||$===null)return $;var O=$[Symbol.toPrimitive];if(O!==void 0){var y=O.call($,"string");if(_(y)!=="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)}(F);return _(A)==="symbol"?A:String(A)}const Pn=function(){function F(j,O){var y=this;if(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")}(this,F),V(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),V(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),V(this,"setupWrapperElement",function(){y.state.elements.container&&(y.state.elements.wrapper.className=y.options.wrapperClassName,y.state.elements.cursor.className=y.options.cursorClassName,y.state.elements.cursor.innerHTML=y.options.cursor,y.state.elements.container.innerHTML="",y.state.elements.container.appendChild(y.state.elements.wrapper),y.state.elements.container.appendChild(y.state.elements.cursor))}),V(this,"start",function(){return y.state.eventLoopPaused=!1,y.runEventLoop(),y}),V(this,"pause",function(){return y.state.eventLoopPaused=!0,y}),V(this,"stop",function(){return y.state.eventLoop&&((0,l.cancel)(y.state.eventLoop),y.state.eventLoop=null),y}),V(this,"pauseFor",function(P){return y.addEventToQueue(v,{ms:P}),y}),V(this,"typeOutAllStrings",function(){return typeof y.options.strings=="string"?(y.typeString(y.options.strings).pauseFor(y.options.pauseFor),y):(y.options.strings.forEach(function(P){y.typeString(P).pauseFor(y.options.pauseFor).deleteAll(y.options.deleteSpeed)}),y)}),V(this,"typeString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(P))return y.typeOutHTMLString(P,H);if(P){var K=(y.options||{}).stringSplitter,q=typeof K=="function"?K(P):P.split("");y.typeCharacters(q,H)}return y}),V(this,"pasteString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(P)?y.typeOutHTMLString(P,H,!0):(P&&y.addEventToQueue(S,{character:P,node:H}),y)}),V(this,"typeOutHTMLString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,K=arguments.length>2?arguments[2]:void 0,q=function(be){var _t=document.createElement("div");return _t.innerHTML=be,_t.childNodes}(P);if(q.length>0)for(var B=0;B<q.length;B++){var le=q[B],qe=le.innerHTML;le&&le.nodeType!==3?(le.innerHTML="",y.addEventToQueue(L,{node:le,parentNode:H}),K?y.pasteString(qe,le):y.typeString(qe,le)):le.textContent&&(K?y.pasteString(le.textContent,H):y.typeString(le.textContent,H))}return y}),V(this,"deleteAll",function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return y.addEventToQueue(g,{speed:P}),y}),V(this,"changeDeleteSpeed",function(P){if(!P)throw new Error("Must provide new delete speed");return y.addEventToQueue(h,{speed:P}),y}),V(this,"changeDelay",function(P){if(!P)throw new Error("Must provide new delay");return y.addEventToQueue(d,{delay:P}),y}),V(this,"changeCursor",function(P){if(!P)throw new Error("Must provide new cursor");return y.addEventToQueue(f,{cursor:P}),y}),V(this,"deleteChars",function(P){if(!P)throw new Error("Must provide amount of characters to delete");for(var H=0;H<P;H++)y.addEventToQueue(m);return y}),V(this,"callFunction",function(P,H){if(!P||typeof P!="function")throw new Error("Callback must be a function");return y.addEventToQueue(w,{cb:P,thisArg:H}),y}),V(this,"typeCharacters",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(K){y.addEventToQueue(c,{character:K,node:H})}),y}),V(this,"removeCharacters",function(P){if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(){y.addEventToQueue(m)}),y}),V(this,"addEventToQueue",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return y.addEventToStateProperty(P,H,K,"eventQueue")}),V(this,"addReverseCalledEvent",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return y.options.loop?y.addEventToStateProperty(P,H,K,"reverseCalledEvents"):y}),V(this,"addEventToStateProperty",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2],q=arguments.length>3?arguments[3]:void 0,B={eventName:P,eventArgs:H||{}};return y.state[q]=K?[B].concat(U(y.state[q])):[].concat(U(y.state[q]),[B]),y}),V(this,"runEventLoop",function(){y.state.lastFrameTime||(y.state.lastFrameTime=Date.now());var P=Date.now(),H=P-y.state.lastFrameTime;if(!y.state.eventQueue.length){if(!y.options.loop)return;y.state.eventQueue=U(y.state.calledEvents),y.state.calledEvents=[],y.options=N({},y.state.initialOptions)}if(y.state.eventLoop=s()(y.runEventLoop),!y.state.eventLoopPaused){if(y.state.pauseUntil){if(P<y.state.pauseUntil)return;y.state.pauseUntil=null}var K,q=U(y.state.eventQueue),B=q.shift();if(!(H<=(K=B.eventName===x||B.eventName===m?y.options.deleteSpeed==="natural"?u(40,80):y.options.deleteSpeed:y.options.delay==="natural"?u(120,160):y.options.delay))){var le=B.eventName,qe=B.eventArgs;switch(y.logInDevMode({currentEvent:B,state:y.state,delay:K}),le){case S:case c:var be=qe.character,_t=qe.node,un=document.createTextNode(be),Le=un;y.options.onCreateTextNode&&typeof y.options.onCreateTextNode=="function"&&(Le=y.options.onCreateTextNode(be,un)),Le&&(_t?_t.appendChild(Le):y.state.elements.wrapper.appendChild(Le)),y.state.visibleNodes=[].concat(U(y.state.visibleNodes),[{type:"TEXT_NODE",character:be,node:Le}]);break;case m:q.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case v:var N1=B.eventArgs.ms;y.state.pauseUntil=Date.now()+parseInt(N1);break;case w:var yu=B.eventArgs,R1=yu.cb,O1=yu.thisArg;R1.call(O1,{elements:y.state.elements});break;case L:var vu=B.eventArgs,ul=vu.node,cl=vu.parentNode;cl?cl.appendChild(ul):y.state.elements.wrapper.appendChild(ul),y.state.visibleNodes=[].concat(U(y.state.visibleNodes),[{type:T,node:ul,parentNode:cl||y.state.elements.wrapper}]);break;case g:var L1=y.state.visibleNodes,dl=qe.speed,yo=[];dl&&yo.push({eventName:h,eventArgs:{speed:dl,temp:!0}});for(var xu=0,A1=L1.length;xu<A1;xu++)yo.push({eventName:x,eventArgs:{removingCharacterNode:!1}});dl&&yo.push({eventName:h,eventArgs:{speed:y.options.deleteSpeed,temp:!0}}),q.unshift.apply(q,yo);break;case x:var $1=B.eventArgs.removingCharacterNode;if(y.state.visibleNodes.length){var fl=y.state.visibleNodes.pop(),D1=fl.type,vo=fl.node,I1=fl.character;y.options.onRemoveNode&&typeof y.options.onRemoveNode=="function"&&y.options.onRemoveNode({node:vo,character:I1}),vo&&vo.parentNode.removeChild(vo),D1===T&&$1&&q.unshift({eventName:x,eventArgs:{}})}break;case h:y.options.deleteSpeed=B.eventArgs.speed;break;case d:y.options.delay=B.eventArgs.delay;break;case f:y.options.cursor=B.eventArgs.cursor,y.state.elements.cursor.innerHTML=B.eventArgs.cursor}y.options.loop&&(B.eventName===x||B.eventArgs&&B.eventArgs.temp||(y.state.calledEvents=[].concat(U(y.state.calledEvents),[B]))),y.state.eventQueue=q,y.state.lastFrameTime=P}}}),j)if(typeof j=="string"){var Q=document.querySelector(j);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=j;O&&(this.options=N(N({},this.options),O)),this.state.initialOptions=N({},this.options),this.init()}var A,$;return A=F,($=[{key:"init",value:function(){var j,O;this.setupWrapperElement(),this.addEventToQueue(f,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(O=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(O),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&ze(A.prototype,$),Object.defineProperty(A,"prototype",{writable:!1}),F}()})(),i.default})())})(l1);var Rg=l1.exports;const Og=yd(Rg),Wc="/assets/doragacharla_lizy_resume-aKhpmoVi.pdf",Lg="/assets/star-BWEquncH.png";function Vc(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Qc(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Ag(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function $g(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function Dg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function Ig(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function Fg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Mg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Yc(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Bg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function bg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function Ug(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Hg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Wg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z"},child:[]}]})(e)}function Vg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65z"},child:[]}]})(e)}const Qg="/assets/skill1-DYXWgzUC.jpg",ta="/assets/skill2-B0rXQTLf.jpg",na="/assets/skill3-CtRuSmJj.jpg",ra="/assets/skill4-WGpRyILJ.jpg",Yg=jt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Gg=jt`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`,Kg=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: #fff;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
    
`,Xg=E.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
   
`,qg=E.div`
  flex: 1;
  padding: 20px;
  animation: ${e=>e.fadeIn?Yg:Gg} 1s ease-in-out;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Jg=E.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,Zg=E.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,e2=E.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  margin: 20px 0;

  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }
`,t2=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Gc=E.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,n2=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Mo=[p.jsx(Hg,{}),p.jsx(bg,{}),p.jsx(Ig,{}),p.jsx(Ag,{})],r2=()=>{const[e,t]=re.useState(0),[n,r]=re.useState(!0),o=[{title:"Aspiring Learner",paragraph:"I am an enthusiastic learner exploring various domains to broaden my skills.",image:Qg,icon:Mo[0]},{title:"Frontend Developer",paragraph:"I specialize in creating user interfaces and experiences using modern frontend technologies.",image:ta,icon:Mo[1]},{title:"Data Analyst",paragraph:"I analyze data to derive insights and make informed decisions for business growth.",image:na,icon:Mo[2]},{title:"Future Learner",paragraph:"I aspire to continually learn and adapt to new technologies and challenges.",image:ra,icon:Mo[3]}];re.useEffect(()=>{const s=setInterval(()=>{r(!1),setTimeout(()=>{t(a=>(a+1)%o.length),r(!0)},1e3)},5e3);return()=>clearInterval(s)},[o.length]);const i=()=>{r(!1),setTimeout(()=>{t(s=>(s+1)%o.length),r(!0)},500)},l=()=>{r(!1),setTimeout(()=>{t(s=>(s-1+o.length)%o.length),r(!0)},500)};return p.jsxs(Kg,{id:"aboutme",children:[p.jsxs(Xg,{children:[p.jsxs(qg,{fadeIn:n,children:[p.jsxs(Jg,{children:[o[e].icon," ",o[e].title]}),p.jsx(Zg,{children:o[e].paragraph})]}),p.jsx(e2,{children:p.jsx(t2,{src:o[e].image,alt:o[e].title})})]}),p.jsxs(n2,{children:[p.jsx(Gc,{onClick:l,children:p.jsx(Vg,{})}),p.jsx(Gc,{onClick:i,children:p.jsx(Wg,{})})]})]})},Pe={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},o2=jt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,i2=jt`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
`;jt`
  0% {
    background-color: ${Pe.delftBlue};
  }
  50% {
    background-color: ${Pe.periwinkle};
  }
  100% {
    background-color: ${Pe.delftBlue};
  }
`;const l2=E.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  height: 80vh;
  position: relative;
  color: ${Pe.ghostWhite};
  gap: 30px;
  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    text-align: center;
  }
`,s2=E.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2.2em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,a2=E.p`
  font-size: 1.2em;
  max-width: 80%;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,u2=E.div`
  flex: 1;
  z-index: 1;
  position: relative;
  max-width: 50%;
  text-align: start;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`,c2=E.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    top: 40px;
  }

  @media (max-width: 768px) {
          width: 100%;
    margin-bottom: 20px;
  }
`,d2=E.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${o2} 20s linear infinite;
  transform: rotate(-45deg);

  @media (max-width: 768px) {
    display: none; // Hide gear circle on mobile screens
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    background: ${Pe.delftBlue};
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${Pe.spaceCadet};
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${Lg}) center/50% no-repeat;
    animation: ${i2} 2s linear infinite;
  }

  &:before {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
`,f2=E.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,p2=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`,h2=E.div`
  font-size: 2.2em;
  margin-bottom: 20px;
  color: ${Pe.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`,m2=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Bo=E.a`
  font-size: 2.5em;
  color: ${Pe.ghostWhite};
  cursor: pointer;
  margin-right: 20px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${Pe.periwinkle};
    transform: scale(1.2);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Wl=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: ${Pe.gunmetal};
  font-weight: 600;
  background-color: ${Pe.ghostWhite};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${Pe.spaceCadet};
    color: ${Pe.ghostWhite};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
`;E.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 2em;
  color: ${Pe.ghostWhite};
  z-index: 10;

  &:after {
    content: 'v';
  }

  &:hover {
    color: ${Pe.delftBlue};
  }
`;const g2=()=>{const[e,t]=re.useState(!1);re.useEffect(()=>{const r=new Og("#typing-effect-container",{strings:["Front End Developer","Data Analyst"],autoStart:!0,loop:!0,deleteSpeed:20,delay:80,onComplete:()=>t(!0)});return()=>{r.stop()}},[]);const n=()=>{const r=document.getElementById("aboutme");r&&r.scrollIntoView({behavior:"smooth"})};return p.jsxs(p.Fragment,{children:[p.jsxs(l2,{id:"home",children:[p.jsxs(c2,{children:[p.jsx(d2,{}),p.jsx(f2,{children:p.jsx(p2,{src:du,alt:"Profile"})})]}),p.jsxs(u2,{children:[p.jsx(s2,{children:"Hi, I'm Lizy Doragacharla"}),p.jsx(h2,{id:"typing-effect-container"}),p.jsx(a2,{children:"I'm a passionate Front End Developer and Data Analyst with a love for creating engaging user experiences and deriving insights from data."}),p.jsxs(m2,{children:[p.jsx(Bo,{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer",children:p.jsx(Tg,{})}),p.jsx(Bo,{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer",children:p.jsx(_g,{})}),p.jsx(Bo,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:p.jsx(zg,{})}),p.jsx(Bo,{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer",children:p.jsx(Pg,{})})]}),p.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap"},children:[p.jsx(Wl,{href:"#about",onClick:n,children:"About Me"}),p.jsx(Wl,{href:Wc,download:!0,children:p.jsx(Ng,{})}),p.jsx(Wl,{href:Wc,target:"_blank",rel:"noopener noreferrer",children:p.jsx(jg,{})})]})]})]}),p.jsx(r2,{})]})};function s1(e,t){return function(){return e.apply(t,arguments)}}const{toString:y2}=Object.prototype,{getPrototypeOf:fu}=Object,ol=(e=>t=>{const n=y2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>ol(t)===e),il=e=>t=>typeof t===e,{isArray:hr}=Array,so=il("undefined");function v2(e){return e!==null&&!so(e)&&e.constructor!==null&&!so(e.constructor)&&rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const a1=yt("ArrayBuffer");function x2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&a1(e.buffer),t}const w2=il("string"),rt=il("function"),u1=il("number"),ll=e=>e!==null&&typeof e=="object",S2=e=>e===!0||e===!1,oi=e=>{if(ol(e)!=="object")return!1;const t=fu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},k2=yt("Date"),E2=yt("File"),C2=yt("Blob"),j2=yt("FileList"),_2=e=>ll(e)&&rt(e.pipe),z2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rt(e.append)&&((t=ol(e))==="formdata"||t==="object"&&rt(e.toString)&&e.toString()==="[object FormData]"))},T2=yt("URLSearchParams"),[P2,N2,R2,O2]=["ReadableStream","Request","Response","Headers"].map(yt),L2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function c1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const d1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,f1=e=>!so(e)&&e!==d1;function oa(){const{caseless:e}=f1(this)&&this||{},t={},n=(r,o)=>{const i=e&&c1(t,o)||o;oi(t[i])&&oi(r)?t[i]=oa(t[i],r):oi(r)?t[i]=oa({},r):hr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&mo(arguments[r],n);return t}const A2=(e,t,n,{allOwnKeys:r}={})=>(mo(t,(o,i)=>{n&&rt(o)?e[i]=s1(o,n):e[i]=o},{allOwnKeys:r}),e),$2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),D2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},I2=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&fu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},F2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},M2=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!u1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},B2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fu(Uint8Array)),b2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},U2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},H2=yt("HTMLFormElement"),W2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Kc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V2=yt("RegExp"),p1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};mo(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},Q2=e=>{p1(e,(t,n)=>{if(rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Y2=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},G2=()=>{},K2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Vl="abcdefghijklmnopqrstuvwxyz",Xc="0123456789",h1={DIGIT:Xc,ALPHA:Vl,ALPHA_DIGIT:Vl+Vl.toUpperCase()+Xc},X2=(e=16,t=h1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function q2(e){return!!(e&&rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const J2=e=>{const t=new Array(10),n=(r,o)=>{if(ll(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=hr(r)?[]:{};return mo(r,(l,s)=>{const a=n(l,o+1);!so(a)&&(i[s]=a)}),t[o]=void 0,i}}return r};return n(e,0)},Z2=yt("AsyncFunction"),ey=e=>e&&(ll(e)||rt(e))&&rt(e.then)&&rt(e.catch),k={isArray:hr,isArrayBuffer:a1,isBuffer:v2,isFormData:z2,isArrayBufferView:x2,isString:w2,isNumber:u1,isBoolean:S2,isObject:ll,isPlainObject:oi,isReadableStream:P2,isRequest:N2,isResponse:R2,isHeaders:O2,isUndefined:so,isDate:k2,isFile:E2,isBlob:C2,isRegExp:V2,isFunction:rt,isStream:_2,isURLSearchParams:T2,isTypedArray:B2,isFileList:j2,forEach:mo,merge:oa,extend:A2,trim:L2,stripBOM:$2,inherits:D2,toFlatObject:I2,kindOf:ol,kindOfTest:yt,endsWith:F2,toArray:M2,forEachEntry:b2,matchAll:U2,isHTMLForm:H2,hasOwnProperty:Kc,hasOwnProp:Kc,reduceDescriptors:p1,freezeMethods:Q2,toObjectSet:Y2,toCamelCase:W2,noop:G2,toFiniteNumber:K2,findKey:c1,global:d1,isContextDefined:f1,ALPHABET:h1,generateString:X2,isSpecCompliantForm:q2,toJSONObject:J2,isAsyncFn:Z2,isThenable:ey};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}k.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const m1=D.prototype,g1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{g1[e]={value:e}});Object.defineProperties(D,g1);Object.defineProperty(m1,"isAxiosError",{value:!0});D.from=(e,t,n,r,o,i)=>{const l=Object.create(m1);return k.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),D.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const ty=null;function ia(e){return k.isPlainObject(e)||k.isArray(e)}function y1(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function qc(e,t,n){return e?e.concat(t).map(function(o,i){return o=y1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function ny(e){return k.isArray(e)&&!e.some(ia)}const ry=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function sl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,L){return!k.isUndefined(L[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(!a&&k.isBlob(v))throw new D("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,w,L){let h=v;if(v&&!L&&typeof v=="object"){if(k.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&ny(v)||(k.isFileList(v)||k.endsWith(w,"[]"))&&(h=k.toArray(v)))return w=y1(w),h.forEach(function(f,S){!(k.isUndefined(f)||f===null)&&t.append(l===!0?qc([w],S,i):l===null?w:w+"[]",u(f))}),!1}return ia(v)?!0:(t.append(qc(L,w,i),u(v)),!1)}const m=[],g=Object.assign(ry,{defaultVisitor:c,convertValue:u,isVisitable:ia});function x(v,w){if(!k.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),k.forEach(v,function(h,d){(!(k.isUndefined(h)||h===null)&&o.call(t,h,k.isString(d)?d.trim():d,w,g))===!0&&x(h,w?w.concat(d):[d])}),m.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Jc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pu(e,t){this._pairs=[],e&&sl(e,this,t)}const v1=pu.prototype;v1.append=function(t,n){this._pairs.push([t,n])};v1.toString=function(t){const n=t?function(r){return t.call(this,r,Jc)}:Jc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function oy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function x1(e,t,n){if(!t)return e;const r=n&&n.encode||oy,o=n&&n.serialize;let i;if(o?i=o(t,n):i=k.isURLSearchParams(t)?t.toString():new pu(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Zc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const w1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iy=typeof URLSearchParams<"u"?URLSearchParams:pu,ly=typeof FormData<"u"?FormData:null,sy=typeof Blob<"u"?Blob:null,ay={isBrowser:!0,classes:{URLSearchParams:iy,FormData:ly,Blob:sy},protocols:["http","https","file","blob","url","data"]},hu=typeof window<"u"&&typeof document<"u",uy=(e=>hu&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),cy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dy=hu&&window.location.href||"http://localhost",fy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hu,hasStandardBrowserEnv:uy,hasStandardBrowserWebWorkerEnv:cy,origin:dy},Symbol.toStringTag,{value:"Module"})),mt={...fy,...ay};function py(e,t){return sl(e,new mt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return mt.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function hy(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function my(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function S1(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&k.isArray(o)?o.length:l,a?(k.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!s):((!o[l]||!k.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&k.isArray(o[l])&&(o[l]=my(o[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(hy(r),o,n,0)}),n}return null}function gy(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const go={transitional:w1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(S1(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return py(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return sl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),gy(t)):t}],transformResponse:[function(t){const n=this.transitional||go.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?D.from(s,D.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{go.headers[e]={}});const yy=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vy=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&yy[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ed=Symbol("internals");function Cr(e){return e&&String(e).trim().toLowerCase()}function ii(e){return e===!1||e==null?e:k.isArray(e)?e.map(ii):String(e)}function xy(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wy=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ql(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Sy(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ky(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class Be{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const c=Cr(a);if(!c)throw new Error("header name must be a non-empty string");const m=k.findKey(o,c);(!m||o[m]===void 0||u===!0||u===void 0&&o[m]!==!1)&&(o[m||a]=ii(s))}const l=(s,a)=>k.forEach(s,(u,c)=>i(u,c,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!wy(t))l(vy(t),n);else if(k.isHeaders(t))for(const[s,a]of t.entries())i(a,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return xy(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ql(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Cr(l),l){const s=k.findKey(r,l);s&&(!n||Ql(r,r[s],s,n))&&(delete r[s],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ql(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,i)=>{const l=k.findKey(r,i);if(l){n[l]=ii(o),delete n[i];return}const s=t?Sy(i):String(i).trim();s!==i&&delete n[i],n[s]=ii(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ed]=this[ed]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=Cr(l);r[s]||(ky(o,l),r[s]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}}Be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Be.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Be);function Yl(e,t){const n=this||go,r=t||n,o=Be.from(r.headers);let i=r.data;return k.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function k1(e){return!!(e&&e.__CANCEL__)}function mr(e,t,n){D.call(this,e??"canceled",D.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(mr,D,{__CANCEL__:!0});function E1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ey(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Cy(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];l||(l=u),n[o]=a,r[o]=u;let m=i,g=0;for(;m!==o;)g+=n[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=c&&u-c;return x?Math.round(g*1e3/x):void 0}}function jy(e,t){let n=0;const r=1e3/t;let o=null;return function(){const l=this===!0,s=Date.now();if(l||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Ai=(e,t,n=3)=>{let r=0;const o=Cy(50,250);return jy(i=>{const l=i.loaded,s=i.lengthComputable?i.total:void 0,a=l-r,u=o(a),c=l<=s;r=l;const m={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-l)/u:void 0,event:i,lengthComputable:s!=null};m[t?"download":"upload"]=!0,e(m)},n)},_y=mt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const s=k.isString(l)?o(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),zy=mt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ty(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Py(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function C1(e,t){return e&&!Ty(t)?Py(e,t):t}const td=e=>e instanceof Be?{...e}:e;function _n(e,t){t=t||{};const n={};function r(u,c,m){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:m},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function o(u,c,m){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u,m)}else return r(u,c,m)}function i(u,c){if(!k.isUndefined(c))return r(void 0,c)}function l(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,m){if(m in t)return r(u,c);if(m in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,c)=>o(td(u),td(c),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(c){const m=a[c]||o,g=m(e[c],t[c],c);k.isUndefined(g)&&m!==s||(n[c]=g)}),n}const j1=e=>{const t=_n({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;t.headers=l=Be.from(l),t.url=x1(C1(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(k.isFormData(n)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[u,...c]=a?a.split(";").map(m=>m.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...c].join("; "))}}if(mt.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&_y(t.url))){const u=o&&i&&zy.read(i);u&&l.set(o,u)}return t},Ny=typeof XMLHttpRequest<"u",Ry=Ny&&function(e){return new Promise(function(n,r){const o=j1(e);let i=o.data;const l=Be.from(o.headers).normalize();let{responseType:s}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function m(){if(!c)return;const x=Be.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};E1(function(h){n(h),u()},function(h){r(h),u()},w),c=null}"onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){c&&(r(new D("Request aborted",D.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new D("Network Error",D.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let v=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||w1;o.timeoutErrorMessage&&(v=o.timeoutErrorMessage),r(new D(v,w.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,o,c)),c=null},i===void 0&&l.setContentType(null),"setRequestHeader"in c&&k.forEach(l.toJSON(),function(v,w){c.setRequestHeader(w,v)}),k.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),s&&s!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Ai(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ai(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=x=>{c&&(r(!x||x.type?new mr(null,e,c):x),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const g=Ey(o.url);if(g&&mt.protocols.indexOf(g)===-1){r(new D("Unsupported protocol "+g+":",D.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Oy=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,l();const u=a instanceof Error?a:this.reason;n.abort(u instanceof D?u:new mr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new D(`timeout ${t} of ms exceeded`,D.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=l,[s,()=>{i&&clearTimeout(i),i=null}]},Ly=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Ay=async function*(e,t,n){for await(const r of e)yield*Ly(ArrayBuffer.isView(r)?r:await n(String(r)),t)},nd=(e,t,n,r,o)=>{const i=Ay(e,t,o);let l=0;return new ReadableStream({type:"bytes",async pull(s){const{done:a,value:u}=await i.next();if(a){s.close(),r();return}let c=u.byteLength;n&&n(l+=c),s.enqueue(new Uint8Array(u))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},rd=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},al=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_1=al&&typeof ReadableStream=="function",la=al&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$y=_1&&(()=>{let e=!1;const t=new Request(mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),od=64*1024,sa=_1&&!!(()=>{try{return k.isReadableStream(new Response("").body)}catch{}})(),$i={stream:sa&&(e=>e.body)};al&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$i[t]&&($i[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new D(`Response type '${t}' is not supported`,D.ERR_NOT_SUPPORT,r)})})})(new Response);const Dy=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(k.isArrayBufferView(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await la(e)).byteLength},Iy=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??Dy(t)},Fy=al&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:u,headers:c,withCredentials:m="same-origin",fetchOptions:g}=j1(e);u=u?(u+"").toLowerCase():"text";let[x,v]=o||i||l?Oy([o,i],l):[],w,L;const h=()=>{!w&&setTimeout(()=>{x&&x.unsubscribe()}),w=!0};let d;try{if(a&&$y&&n!=="get"&&n!=="head"&&(d=await Iy(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),C;k.isFormData(r)&&(C=_.headers.get("content-type"))&&c.setContentType(C),_.body&&(r=nd(_.body,od,rd(d,Ai(a)),null,la))}k.isString(m)||(m=m?"cors":"omit"),L=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:m});let f=await fetch(L);const S=sa&&(u==="stream"||u==="response");if(sa&&(s||S)){const _={};["status","statusText","headers"].forEach(N=>{_[N]=f[N]});const C=k.toFiniteNumber(f.headers.get("content-length"));f=new Response(nd(f.body,od,s&&rd(C,Ai(s,!0)),S&&h,la),_)}u=u||"text";let T=await $i[k.findKey($i,u)||"text"](f,e);return!S&&h(),v&&v(),await new Promise((_,C)=>{E1(_,C,{data:T,headers:Be.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:L})})}catch(f){throw h(),f&&f.name==="TypeError"&&/fetch/i.test(f.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,e,L),{cause:f.cause||f}):D.from(f,f&&f.code,e,L)}}),aa={http:ty,xhr:Ry,fetch:Fy};k.forEach(aa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const id=e=>`- ${e}`,My=e=>k.isFunction(e)||e===null||e===!1,z1={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!My(n)&&(r=aa[(l=String(n)).toLowerCase()],r===void 0))throw new D(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(id).join(`
`):" "+id(i[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:aa};function Gl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr(null,e)}function ld(e){return Gl(e),e.headers=Be.from(e.headers),e.data=Yl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z1.getAdapter(e.adapter||go.adapter)(e).then(function(r){return Gl(e),r.data=Yl.call(e,e.transformResponse,r),r.headers=Be.from(r.headers),r},function(r){return k1(r)||(Gl(e),r&&r.response&&(r.response.data=Yl.call(e,e.transformResponse,r.response),r.response.headers=Be.from(r.response.headers))),Promise.reject(r)})}const T1="1.7.2",mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const sd={};mu.transitional=function(t,n,r){function o(i,l){return"[Axios v"+T1+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new D(o(l," has been removed"+(n?" in "+n:"")),D.ERR_DEPRECATED);return n&&!sd[l]&&(sd[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};function By(e,t,n){if(typeof e!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new D("option "+i+" must be "+a,D.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}}const ua={assertOptions:By,validators:mu},Mt=ua.validators;class wn{constructor(t){this.defaults=t,this.interceptors={request:new Zc,response:new Zc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_n(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ua.assertOptions(r,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:ua.assertOptions(o,{encode:Mt.function,serialize:Mt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=Be.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,m=0,g;if(!a){const v=[ld.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,u),g=v.length,c=Promise.resolve(n);m<g;)c=c.then(v[m++],v[m++]);return c}g=s.length;let x=n;for(m=0;m<g;){const v=s[m++],w=s[m++];try{x=v(x)}catch(L){w.call(this,L);break}}try{c=ld.call(this,x)}catch(v){return Promise.reject(v)}for(m=0,g=u.length;m<g;)c=c.then(u[m++],u[m++]);return c}getUri(t){t=_n(this.defaults,t);const n=C1(t.baseURL,t.url);return x1(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){wn.prototype[t]=function(n,r){return this.request(_n(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,s){return this.request(_n(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}wn.prototype[t]=n(),wn.prototype[t+"Form"]=n(!0)});class gu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new mr(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new gu(function(o){t=o}),cancel:t}}}function by(e){return function(n){return e.apply(null,n)}}function Uy(e){return k.isObject(e)&&e.isAxiosError===!0}const ca={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ca).forEach(([e,t])=>{ca[t]=e});function P1(e){const t=new wn(e),n=s1(wn.prototype.request,t);return k.extend(n,wn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return P1(_n(e,o))},n}const fe=P1(go);fe.Axios=wn;fe.CanceledError=mr;fe.CancelToken=gu;fe.isCancel=k1;fe.VERSION=T1;fe.toFormData=sl;fe.AxiosError=D;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=by;fe.isAxiosError=Uy;fe.mergeConfig=_n;fe.AxiosHeaders=Be;fe.formToJSON=e=>S1(k.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=z1.getAdapter;fe.HttpStatusCode=ca;fe.default=fe;const ur={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},Hy=jt`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`,Wy=E.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${Hy} 2.5s infinite;
    }
`,Vy=jt`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        opacity: 0;
    }
    50% {
        transform: translateX(50px) translateY(-20px) rotate(15deg);
        opacity: 0.5;
    }
    100% {
        transform: translateX(100px) translateY(-40px) rotate(30deg);
        opacity: 1;
    }
`,Qy=E.section`
    display: flex;
    align-items: center;
    padding: 50px;
    color: #e0e1ddff; /* platinum */
    position: relative;
    overflow: hidden;
    z-index: 1;
    gap: 20px;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 20px;
        gap: 10px;
    }
`,Yy=E.section`
    color: #e0e1ddff; /* platinum */
`,Gy=E.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    text-align: center;
`;E.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation: ${Vy} 2s linear infinite;
    z-index: 1;
`;E.div`
    margin-bottom: 20px;
    transform: rotate(45deg);
    transition: transform 0.5s ease;

    &:hover {
        transform: rotate(0);
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #e0e1ddff; /* platinum */
    }
`;const Ky=E.h2`
    font-size: 2em;
    margin: 20px 0;
    position: relative;
    z-index: 2;
    transition: font-size 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 480px) {
        font-size: 1.2em;
    }
`,Xy=E.p`
    font-size: 1.2em;
    text-align: center;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,qy=E.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,Jy=E.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,Zy=E.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,ev=E.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`,Kl=E.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #778da9ff; /* silver lake blue */
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #415a77ff; /* yinmn blue */
    }

    svg {
        width: 60%;
        height: 60%;
        fill: #e0e1ddff; /* platinum */
    }
`,tv=E.div`
    width: 40%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(135deg, ${ur.spaceCadet} 30%, ${ur.delftBlue} 100%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 50%;
        padding: 20px;
    }
        
    @media (max-width: 480px) {
        width: 100%;
        padding: 20px;
    }
`,nv=E.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`,ad=E.input`
    padding: 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 8px;
    background-color: ${ur.delftBlue};
    color: #e0e1ddff; /* platinum */

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #778da9ff; /* silver lake blue */
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${ur.delftBlue} inset !important;
        -webkit-text-fill-color: #e0e1ddff; /* platinum */
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`,rv=E.textarea`
    padding: 15px;
    font-size: 1.1em;
    border: none;
    border-radius: 8px;
    background-color: ${ur.delftBlue};
    color: #e0e1ddff; /* platinum */
    resize: none;
    height: 150px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #778da9ff; /* silver lake blue */
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${ur.delftBlue} inset !important;
        -webkit-text-fill-color: #e0e1ddff; /* platinum */
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`,ud=E.button`
    padding: 15px;
    font-size: 1.2em;
    color: black; /* platinum */
    background-color: #778da9ff; /* silver lake blue */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1b263bff; /* oxford blue */
            color: #e0e1ddff; /* platinum */

    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 1em;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 0.9em;
    }
`,ov=jt`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`,iv=jt`
    from { width: 0; }
    to { width: 100%; }
`,lv=E.p`
    margin-top: 20px;
    color: #e0e1ddff; /* platinum */
    font-size: 1.2em;
    position: relative;
    overflow: hidden;
    text-align: center;

    @media (max-width: 1200px) {
        font-size: 1.1em;
    }

    @media (max-width: 992px) {
        font-size: 1em;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
    }

    @media (max-width: 576px) {
        font-size: 0.8em;
    }

    &.success {
        &:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            animation: ${ov} 0.3s ease forwards;
            background: url('path-to-your-tick-icon.svg') no-repeat center;
            background-size: contain;
        }

        &:after {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 0;
            margin-left: 10px;
            border-right: 2px solid #e0e1ddff; /* platinum */
            animation: ${iv} 1s steps(20, end) forwards;
        }
    }
`,sv=()=>p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:p.jsx("path",{fill:"#000",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),av=()=>p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 64 64",children:p.jsx("path",{fill:"#000",d:"M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"})}),uv=()=>p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 30 30",children:p.jsx("path",{fill:"#000",d:"M 25.921875 7.0976563 C 24.996094 7.5429688 24 7.8125 23 7.9726563 C 24.023438 7.3710938 24.75 6.3984375 25.085938 5.2539063 C 24.082031 5.8125 23 6.234375 21.859375 6.4765625 C 20.894531 5.4726563 19.511719 4.875 18 4.875 C 15.367188 4.875 13.25 6.9921875 13.25 9.625 C 13.25 10.007813 13.285156 10.375 13.367188 10.726563 C 9.373047 10.527344 5.7851563 8.609375 3.4257813 5.6523438 C 3.015625 6.3320313 2.78125 7.1171875 2.78125 7.9492188 C 2.78125 9.5078125 3.601563 10.875 4.8242188 11.652344 C 4.0117188 11.628906 3.25 11.402344 2.5898438 11.019531 C 2.5898438 11.039063 2.5898438 11.0625 2.5898438 11.089844 C 2.5898438 13.386719 4.2382813 15.28125 6.4101563 15.730469 C 6.015625 15.839844 5.5976563 15.894531 5.1679688 15.894531 C 4.8632813 15.894531 4.5664063 15.863281 4.28125 15.804688 C 4.8710938 17.652344 6.605469 19 8.6523438 19.035156 C 7.039063 20.246094 5.007813 20.941406 2.8125 20.941406 C 2.4726563 20.941406 2.1367188 20.921875 1.8007813 20.882813 C 3.867188 22.195313 6.34375 22.875 9 22.875 C 18 22.875 23.222656 15.96875 23.222656 10.167969 C 23.222656 9.9726563 23.21875 9.78125 23.210938 9.5859375 C 24.214844 8.8632813 25.097656 7.9609375 25.921875 7.0976563 Z"})}),cv=()=>{const[e,t]=re.useState(!1),[n,r]=re.useState(""),[o,i]=re.useState({name:"",email:"",message:""}),l=u=>{const{name:c,value:m}=u.target;i(g=>({...g,[c]:m}))},s=async u=>{u.preventDefault(),t(!0);try{(await fe.post("https://api.web3forms.com/submit",{access_key:"8e4c1901-d8c1-4df8-aa46-700466520582",...o})).data.success?(r("Thank you for your message. We will get back to you soon."),i({name:"",email:"",message:""}),setTimeout(()=>r(""),5e3)):r("An error occurred. Please try again later.")}catch(c){console.error("Submission error:",c),r("An error occurred. Please try again later.")}t(!1)},a=()=>{window.location.href="mailto:lizdoragacharla@gmail.com"};return p.jsx(Yy,{id:"connect",children:p.jsxs(Qy,{children:[p.jsxs(tv,{children:[p.jsxs(nv,{onSubmit:s,children:[p.jsx(ad,{type:"text",name:"name",placeholder:"Your Name",value:o.name,onChange:l,required:!0}),p.jsx(ad,{type:"email",name:"email",placeholder:"Your Email",value:o.email,onChange:l,required:!0}),p.jsx(rv,{name:"message",placeholder:"Your Message",value:o.message,onChange:l,required:!0}),p.jsx(ud,{type:"submit",disabled:e,children:e?"Sending...":"Send Message"}),p.jsx(ud,{onClick:a,children:"Connect via Email"})]}),n&&p.jsxs(lv,{className:n.includes("Thank")?"success":"",children:[n.includes("Thank")&&p.jsx(Fg,{}),n]})]}),p.jsxs(Gy,{children:[p.jsx(Wy,{role:"img","aria-label":"Wave emoji",children:"👋"}),p.jsx(Ky,{children:"LET'S CONNECT"}),p.jsx(Xy,{children:"Reach out to us for any inquiries or collaborations. We're excited to hear from you!"}),p.jsxs(qy,{children:[p.jsx(Jy,{children:"lizdoragacharla@gmail.com"}),p.jsx(Zy,{children:"+1234567890"}),p.jsxs(ev,{children:[p.jsx(Kl,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:p.jsx(sv,{})}),p.jsx(Kl,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:p.jsx(av,{})}),p.jsx(Kl,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:p.jsx(uv,{})})]})]})]})]})})},on={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},dv=jt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,fv=E.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${dv} 15s ease infinite;    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,pv=E.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,hv=E.div`
    @media (min-width: 769px) {
        display: none;
    }
`,Xl=E.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        border-bottom: 1px solid ${on.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,ql=E.h3`
    color: ${on.yinmnBlue};
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }

    &:before {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background: ${on.yinmnBlue};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:before {
        width: 100%;
    }
`,Ce=E.a`
    color: ${on.platinum};
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${on.yinmnBlue};
        text-decoration: underline;
    }
`,Jl=E.div`
    color: ${on.platinum};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
    }
`,Zl=E.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    color: ${on.platinum};
    background: ${on.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,mv=()=>{const[e,t]=re.useState(null),n=r=>{t(e===r?null:r)};return p.jsxs(fv,{children:[p.jsxs(pv,{children:[p.jsxs(Xl,{children:[p.jsx(ql,{children:"My Details"}),p.jsx("div",{children:"Name: Your Name"}),p.jsx("div",{children:"Location: Your City, Country"}),p.jsx("div",{children:"Email: your-email@example.com"}),p.jsx("div",{children:"Phone: +123-456-7890"})]}),p.jsxs(Xl,{children:[p.jsx(ql,{children:"Topics"}),p.jsx(Ce,{href:"#home",children:"Home"}),p.jsx(Ce,{href:"#skills",children:"Skills"}),p.jsx(Ce,{href:"#projects",children:"Projects"}),p.jsx(Ce,{href:"#education",children:"Education"}),p.jsx(Ce,{href:"#experience",children:"Experience"})]}),p.jsxs(Xl,{children:[p.jsx(ql,{children:"Connect"}),p.jsxs(Ce,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[p.jsx(Qc,{})," LinkedIn"]}),p.jsxs(Ce,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:[p.jsx(Vc,{})," GitHub"]}),p.jsxs(Ce,{href:"mailto:your-email@example.com",children:[p.jsx(Yc,{})," Let's Connect"]})]})]}),p.jsxs(hv,{children:[p.jsx(Jl,{onClick:()=>n("details"),children:"My Details"}),p.jsxs(Zl,{isOpen:e==="details",children:[p.jsx("div",{children:"Name: Your Name"}),p.jsx("div",{children:"Location: Your City, Country"}),p.jsx("div",{children:"Email: your-email@example.com"}),p.jsx("div",{children:"Phone: +123-456-7890"})]}),p.jsx(Jl,{onClick:()=>n("topics"),children:"Topics"}),p.jsxs(Zl,{isOpen:e==="topics",children:[p.jsx(Ce,{href:"#home",children:"Home"}),p.jsx(Ce,{href:"#skills",children:"Skills"}),p.jsx(Ce,{href:"#projects",children:"Projects"}),p.jsx(Ce,{href:"#education",children:"Education"}),p.jsx(Ce,{href:"#experience",children:"Experience"})]}),p.jsx(Jl,{onClick:()=>n("connect"),children:"Connect"}),p.jsxs(Zl,{isOpen:e==="connect",children:[p.jsxs(Ce,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[p.jsx(Qc,{})," LinkedIn"]}),p.jsxs(Ce,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:[p.jsx(Vc,{})," GitHub"]}),p.jsxs(Ce,{href:"mailto:your-email@example.com",children:[p.jsx(Yc,{})," Let's Connect"]})]})]})]})},cd="/assets/python-nQr6i-K4.webp",dd="/assets/skill5-7UV-F5Oz.jpg",fd="/assets/skill6-Cf5dfFs0.jpg",br={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},gv=E.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1ddff;
`,yv=E.h2`
    font-size: 2em;
    margin-bottom: 30px;
    color: ${br.ghostWhite}; /* Platinum */
`,vv=E.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6 items per row */
    gap: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(5, 1fr); /* 4 items per row for smaller screens */
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); /* 3 items per row for tablets */
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); /* 2 items per row for mobile phones */
    }
`,xv=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, ${br.spaceCadet} 30%, ${br.delftBlue} 100%);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    position: relative;
    border: 2px solid ${br.ghostWhite};
    
    @media (max-width: 480px) {
        height: auto;
        padding: 10px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`,wv=E.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    
    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }
`,Sv=E.p`
    font-size: 1em;
    margin-top: 10px;
    color: ${br.ghostWhite};
    
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`,kv=[{id:1,image:cd,title:"Python"},{id:2,image:ta,title:"Skill 2"},{id:3,image:na,title:"Skill 3"},{id:4,image:ra,title:"Skill 4"},{id:5,image:dd,title:"Skill 5"},{id:6,image:fd,title:"Skill 6"},{id:7,image:cd,title:"Python"},{id:8,image:ta,title:"Skill 2"},{id:9,image:na,title:"Skill 3"},{id:10,image:ra,title:"Skill 4"},{id:11,image:dd,title:"Skill 5"},{id:12,image:fd,title:"Skill 6"}],pd=()=>p.jsxs(gv,{children:[p.jsx(yv,{children:"Skills"}),p.jsx(vv,{children:kv.map(e=>p.jsxs(xv,{children:[p.jsx(wv,{src:e.image,alt:e.title}),p.jsx(Sv,{children:e.title})]},e.id))})]}),Ev="/assets/aws_certificate-Dtc7fppI.pdf",Cv="/assets/nptel_certificate-6YXWs-pj.pdf",jv="/assets/coursera_certificate-C5bS3mlL.pdf",dt={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},_v=E.div`
  padding: 50px 20px;
  color: #e0e1dd;
  display: flex;
  flex-direction: column;
  align-items: center;
`,zv=E.h2`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: ${dt.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Tv=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Pv=E.div`
  background: linear-gradient(135deg, ${dt.spaceCadet} 30%, ${dt.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`,Nv=E.div`
  flex-grow: 1;
`,Rv=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${dt.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Ov=E.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,Lv=E.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${dt.ghostWhite};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,Av=E.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,hd=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${dt.gunmetal};
  font-weight: 600;
  background-color: ${dt.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${dt.gunmetal};
  
  &:hover {
    background-color: ${dt.spaceCadet};
    color: ${dt.ghostWhite};
    border-color: ${dt.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`,$v=[{title:"AWS - Academy Foundation",date:"OCT-DEC 2022",description:"Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.",downloadLink:Ev},{title:"NPTEL - Internet of Things",date:"JUL-OCT 2022",description:"Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.",downloadLink:Cv},{title:"Coursera - Data Science",date:"FEB-APR 2022",description:"Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",downloadLink:jv}],Dv=()=>p.jsxs(_v,{children:[p.jsx(zv,{children:"Certificates"}),p.jsx(Tv,{children:$v.map((e,t)=>p.jsxs(Pv,{children:[p.jsxs(Nv,{children:[p.jsx(Rv,{children:e.title}),p.jsxs(Ov,{children:["Date: ",e.date]}),p.jsx(Lv,{children:e.description})]}),p.jsxs(Av,{children:[e.downloadLink&&p.jsx(hd,{href:e.downloadLink,download:`${e.title.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),p.jsx(hd,{href:e.downloadLink,target:"_blank",children:"View"})]})]},t))})]}),Iv=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
`,Fv=E.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
`,Mv=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Bv=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  background-color: ${({isActive:e})=>e?"#1e2749ff":"#f0f0f0"};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  transform: ${({isActive:e})=>e?"scale(1.05)":"scale(1)"};
  color: ${({isActive:e})=>e?"#fafaffff":"#1e2749ff"};
  border: ${({isActive:e})=>e?"2px solid #fafaffff":"none"};
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
      @media (max-width: 480px) {
  transform: ${({isActive:e})=>"scale(1)"};
  width:auto;
  }
`,bv=E.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`,Uv=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,Hv=E.div`
`,Wv=E.div`
  width: 40px;
  height: 40px;
  background: ${({isActive:e})=>e?"linear-gradient(135deg, #273469ff, #e4d9ffff)":"linear-gradient(135deg, #415a77, #1b263b)"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (min-width: 768px) {
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
  }
`;E.div`
  width: 5px;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;

  @media (min-width: 768px) {
    left: 0;
    top: 50%;
    height: calc(100% - 40px);
  }
`;const Vv=()=>{const[e,t]=re.useState(0),n=[{title:"SSC",duration:"2017-2018",institution:"Keshava Reddy High School",details:"Achieved 10.00 GPA"},{title:"Intermediate (MPC)",duration:"2018-2020",institution:"Tirumala Junior College, Katheru",details:"Achieved 96% marks"},{title:"B.Tech (CSE)",duration:"2020-2024",institution:"Adikavi Nannaya University, Rajanagaram",details:"Achieved 8.8 CGPA"}];re.useEffect(()=>{const o=setInterval(()=>{t(i=>(i+1)%n.length)},3e3);return()=>clearInterval(o)},[n.length]);const r=o=>{t(o)};return p.jsxs(Iv,{children:[p.jsx(Fv,{children:"Education Journey"}),p.jsx(Mv,{children:n.map((o,i)=>p.jsxs(Bv,{isActive:i===e,onClick:()=>r(i),children:[p.jsx(Wv,{isActive:i===e,children:i+1}),p.jsxs(bv,{children:[p.jsx(Uv,{children:o.title}),p.jsxs(Hv,{children:[p.jsx("div",{children:o.duration}),p.jsx("div",{children:o.institution}),p.jsx("div",{children:o.details})]})]})]},i))})]})},xe={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},Qv=E.div`
  padding: 50px 20px;
  color: ${xe.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yv=E.h2`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: ${xe.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Gv=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 0 auto; /* Center container horizontally */

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; /* Center items horizontally in row layout */
  }
`,Kv=E.div`
  background: linear-gradient(135deg, ${xe.spaceCadet} 30%, ${xe.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push content to the top and ButtonGroup to the bottom */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`,Xv=E.div`
  flex-grow: 1;
`,qv=E.div`
  font-size: 1.8em;
  font-weight: bold;
  color: ${xe.ghostWhite};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Jv=E.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: ${xe.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`,Zv=E.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,e4=E.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${xe.ghostWhite};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,t4=E.ul`
  font-size: 1em;
  color: ${xe.ghostWhite};
  margin-top: 10px;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,n4=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`,r4=E.span`
  background-color: ${xe.spaceCadet};
  color: ${xe.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${xe.ghostWhite};
  display: inline-block;
`,o4=E.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
  margin-top: auto; /* Push ButtonGroup to the bottom of the container */

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,md=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${xe.gunmetal};
  font-weight: 600;
  background-color: ${xe.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${xe.gunmetal};
  
  &:hover {
    background-color: ${xe.spaceCadet};
    color: ${xe.ghostWhite};
    border-color: ${xe.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`,i4=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:"path/to/mycCertificate",companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer (Intern)",duration:"Duration: 5 months",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.",responsibilities:["Developed responsive interfaces using React for frontend components.","Created essential components in React using Django Rest Framework.","Built and maintained entire websites using Wordpress.","Collaborated to implement new features and enhance existing ones."],skills:["React","Django Rest Framework","Wordpress"],certificateUrl:"path/to/arthashastraCertificate",companyUrl:"https://arthashastra.ai/"}];return p.jsxs(Qv,{children:[p.jsx(Yv,{children:"Experience"}),p.jsx(Gv,{children:e.map((t,n)=>p.jsxs(Kv,{children:[p.jsxs(Xv,{children:[p.jsx(qv,{children:t.company}),p.jsx(Jv,{children:t.role}),p.jsx(Zv,{children:t.duration}),p.jsx(e4,{children:t.description}),p.jsx(t4,{children:t.responsibilities.map((r,o)=>p.jsx("li",{children:r},o))}),p.jsx(n4,{children:t.skills.map((r,o)=>p.jsx(r4,{children:r},o))})]}),p.jsxs(o4,{children:[p.jsx(md,{href:t.certificateUrl,target:"_blank",children:"View Certificate"}),p.jsx(md,{href:t.companyUrl,target:"_blank",children:"Visit Company"})]})]},n))})]})},et={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},l4=E.div`
  padding: 50px 20px;
  color: ${et.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,s4=E.h2`
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: ${et.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,a4=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 0 auto; /* Center container horizontally */

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; /* Center items horizontally in row layout */
  }
`,u4=E.div`
  background: linear-gradient(135deg, ${et.spaceCadet} 30%, ${et.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`,c4=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${et.ghostWhite};

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,d4=E.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${et.ghostWhite};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,f4=E.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,gd=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${et.gunmetal};
  font-weight: 600;
  background-color: ${et.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${et.gunmetal};
  
  &:hover {
    background-color: ${et.spaceCadet};
    color: ${et.ghostWhite};
    border-color: ${et.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`,p4=[{title:"MERA SAHAI: Mera Sahai Platform",date:"",description:"As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",demoLink:"/assets/mera_sahai_project.pdf",codeLink:"https://github.com/my-portfolio"},{title:"College Project: Water Quality Prediction and Classification",date:"",description:"For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",demoLink:"/assets/water_quality_project.pdf",codeLink:"https://github.com/my-portfolio"}],h4=()=>p.jsxs(l4,{children:[p.jsx(s4,{children:"Projects"}),p.jsx(a4,{children:p4.map((e,t)=>p.jsxs(u4,{children:[p.jsx(c4,{children:e.title}),p.jsx(d4,{children:e.description}),p.jsxs(f4,{children:[e.demoLink&&p.jsx(gd,{href:e.demoLink,target:"_blank",children:"Demo"}),e.codeLink&&p.jsx(gd,{href:e.codeLink,target:"_blank",children:"Code"})]})]},t))})]}),Ht={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},m4=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,g4=E.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    background: ${Ht.delftBlue};
    position: sticky;
    bottom: 10px;
    border-radius: 30px;
    width: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${Ht.ghostWhite};

    @media (max-width: 480px) {
        gap: 10px;
        padding: 5px;
    }
`,jr=E.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.active?Ht.delftBlue:Ht.spaceCadet};
    color: ${Ht.ghostWhite};
    border: 1px solid ${e=>(e.active,Ht.spaceCadet)};
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${Ht.delftBlue};
    }

    svg {
        margin-right: 8px;
    }

    @media (max-width: 480px) {
        padding: 10px;

        svg {
            margin-right: 0;
        }

        span {
            display: none;
        }
    }
`,y4=re.forwardRef((e,t)=>{const[n,r]=re.useState("Skills"),o=()=>{switch(n){case"Skills":return p.jsx(pd,{});case"Certificates":return p.jsx(Dv,{});case"Education":return p.jsx(Vv,{});case"Experience":return p.jsx(i4,{});case"Projects":return p.jsx(h4,{});default:return p.jsx(pd,{})}};return re.useImperativeHandle(t,()=>({setActiveTab:i=>{r(i)}})),p.jsxs(m4,{id:"knowmore",children:[o(),p.jsxs(g4,{children:[p.jsxs(jr,{active:n==="Skills",onClick:()=>r("Skills"),children:[p.jsx(Mg,{})," ",p.jsx("span",{children:"Skills"})]}),p.jsxs(jr,{active:n==="Certificates",onClick:()=>r("Certificates"),children:[p.jsx(Dg,{})," ",p.jsx("span",{children:"Certificates"})]}),p.jsxs(jr,{active:n==="Education",onClick:()=>r("Education"),children:[p.jsx(Bg,{})," ",p.jsx("span",{children:"Education"})]}),p.jsxs(jr,{active:n==="Experience",onClick:()=>r("Experience"),children:[p.jsx($g,{})," ",p.jsx("span",{children:"Experience"})]}),p.jsxs(jr,{active:n==="Projects",onClick:()=>r("Projects"),children:[p.jsx(Ug,{})," ",p.jsx("span",{children:"Projects"})]})]})]})}),v4=E.div`
    font-family: Arial, sans-serif;
`;function x4(){return p.jsxs(v4,{children:[p.jsx(yg,{}),p.jsx(g2,{}),p.jsx(y4,{}),p.jsx(cv,{}),p.jsx(mv,{})]})}es.createRoot(document.getElementById("root")).render(p.jsx(Qe.StrictMode,{children:p.jsx(x4,{})}));
