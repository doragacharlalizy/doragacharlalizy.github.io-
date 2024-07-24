(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var b1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xd={exports:{}},Fi={},wd={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),U1=Symbol.for("react.portal"),H1=Symbol.for("react.fragment"),V1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),G1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),X1=Symbol.for("react.memo"),q1=Symbol.for("react.lazy"),wu=Symbol.iterator;function J1(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kd=Object.assign,Ed={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Sd}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cd(){}Cd.prototype=cr.prototype;function da(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Sd}var fa=da.prototype=new Cd;fa.constructor=da;kd(fa,cr.prototype);fa.isPureReactComponent=!0;var Su=Array.isArray,jd=Object.prototype.hasOwnProperty,pa={current:null},_d={key:!0,ref:!0,__self:!0,__source:!0};function Td(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)jd.call(t,r)&&!_d.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:so,type:e,key:i,ref:l,props:o,_owner:pa.current}}function Z1(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function e0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e0(""+e.key):t.toString(36)}function Mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case U1:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ml(l,0):r,Su(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Mo(o,t,n,"",function(u){return u})):o!=null&&(ha(o)&&(o=Z1(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Su(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+ml(i,s);l+=Mo(i,t,n,a,o)}else if(a=J1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+ml(i,s++),l+=Mo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vo(e,t,n){if(e==null)return e;var r=[],o=0;return Mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function t0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Bo={transition:null},n0={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:pa};function zd(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:vo,forEach:function(e,t,n){vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vo(e,function(){t++}),t},toArray:function(e){return vo(e,function(t){return t})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=cr;b.Fragment=H1;b.Profiler=W1;b.PureComponent=da;b.StrictMode=V1;b.Suspense=K1;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;b.act=zd;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=kd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=pa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)jd.call(t,a)&&!_d.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:Y1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q1,_context:e},e.Consumer=e};b.createElement=Td;b.createFactory=function(e){var t=Td.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:G1,render:e}};b.isValidElement=ha;b.lazy=function(e){return{$$typeof:q1,_payload:{_status:-1,_result:e},_init:t0}};b.memo=function(e,t){return{$$typeof:X1,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Bo.transition;Bo.transition={};try{e()}finally{Bo.transition=t}};b.unstable_act=zd;b.useCallback=function(e,t){return Re.current.useCallback(e,t)};b.useContext=function(e){return Re.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};b.useEffect=function(e,t){return Re.current.useEffect(e,t)};b.useId=function(){return Re.current.useId()};b.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Re.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};b.useRef=function(e){return Re.current.useRef(e)};b.useState=function(e){return Re.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Re.current.useTransition()};b.version="18.3.1";wd.exports=b;var ee=wd.exports;const Pe=yd(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=ee,o0=Symbol.for("react.element"),i0=Symbol.for("react.fragment"),l0=Object.prototype.hasOwnProperty,s0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)l0.call(t,r)&&!a0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:o0,type:e,key:i,ref:l,props:o,_owner:s0.current}}Fi.Fragment=i0;Fi.jsx=Pd;Fi.jsxs=Pd;xd.exports=Fi;var f=xd.exports,ns={},Nd={exports:{}},Ge={},Rd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var v=j.length;j.push(O);e:for(;0<v;){var Q=v-1>>>1,P=j[Q];if(0<o(P,O))j[Q]=O,j[v]=P,v=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],v=j.pop();if(v!==O){j[0]=v;e:for(var Q=0,P=j.length,H=P>>>1;Q<H;){var K=2*(Q+1)-1,q=j[K],B=K+1,le=j[B];if(0>o(q,v))B<P&&0>o(le,q)?(j[Q]=le,j[B]=v,Q=B):(j[Q]=q,j[K]=v,Q=K);else if(B<P&&0>o(le,v))j[Q]=le,j[B]=v,Q=B;else break e}}return O}function o(j,O){var v=j.sortIndex-O.sortIndex;return v!==0?v:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,h=null,g=3,x=!1,y=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function S(j){if(w=!1,p(j),!y)if(n(a)!==null)y=!0,A(z);else{var O=n(u);O!==null&&$(S,O.startTime-j)}}function z(j,O){y=!1,w&&(w=!1,m(N),N=-1),x=!0;var v=g;try{for(p(O),h=n(a);h!==null&&(!(h.expirationTime>O)||j&&!Te());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var P=Q(h.expirationTime<=O);O=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(a)&&r(a),p(O)}else r(a);h=n(a)}if(h!==null)var H=!0;else{var K=n(u);K!==null&&$(S,K.startTime-O),H=!1}return H}finally{h=null,g=v,x=!1}}var _=!1,C=null,N=-1,U=5,I=-1;function Te(){return!(e.unstable_now()-I<U)}function W(){if(C!==null){var j=e.unstable_now();I=j;var O=!0;try{O=C(!0,j)}finally{O?yt():(_=!1,C=null)}}else _=!1}var yt;if(typeof d=="function")yt=function(){d(W)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,F=Nn.port2;Nn.port1.onmessage=W,yt=function(){F.postMessage(null)}}else yt=function(){L(W,0)};function A(j){C=j,_||(_=!0,yt())}function $(j,O){N=L(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,A(z))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var v=g;g=O;try{return j()}finally{g=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var v=g;g=j;try{return O()}finally{g=v}},e.unstable_scheduleCallback=function(j,O,v){var Q=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?Q+v:Q):v=Q,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=v+P,j={id:c++,callback:O,priorityLevel:j,startTime:v,expirationTime:P,sortIndex:-1},v>Q?(j.sortIndex=v,t(u,j),n(a)===null&&j===n(u)&&(w?(m(N),N=-1):w=!0,$(S,v-Q))):(j.sortIndex=P,t(a,j),y||x||(y=!0,A(z))),j},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(j){var O=g;return function(){var v=g;g=O;try{return j.apply(this,arguments)}finally{g=v}}}})(Od);Rd.exports=Od;var u0=Rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=ee,Ye=u0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,br={};function zn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(br[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Cu={};function f0(e){return rs.call(Cu,e)?!0:rs.call(Eu,e)?!1:d0.test(e)?Cu[e]=!0:(Eu[e]=!0,!1)}function p0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h0(e,t,n,r){if(t===null||typeof t>"u"||p0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,ga);we[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,ga);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,ga);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function va(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h0(t,n,o,r)&&(n=null),r||o===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),$d=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Dd=Symbol.for("react.offscreen"),ju=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,gl;function _r(e){if(gl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function m0(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Ln:return"Portal";case os:return"Profiler";case ya:return"StrictMode";case is:return"Suspense";case ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $d:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wa:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=v0(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function as(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Md(e,t){t=t.checked,t!=null&&va(e,"checked",t,!1)}function us(e,t){Md(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&cs(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cs(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Bd(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,Ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function Hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var x0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(x0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,Yn=null,Gn=null;function Nu(e){if(e=co(e)){if(typeof gs!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Hi(t),gs(e.stateNode,e.type,t))}}function Wd(e){Yn?Gn?Gn.push(e):Gn=[e]:Yn=e}function Qd(){if(Yn){var e=Yn,t=Gn;if(Gn=Yn=null,Nu(e),t)for(e=0;e<t.length;e++)Nu(t[e])}}function Yd(e,t){return e(t)}function Gd(){}var xl=!1;function Kd(e,t,n){if(xl)return e(t,n);xl=!0;try{return Yd(e,t,n)}finally{xl=!1,(Yn!==null||Gn!==null)&&(Gd(),Qd())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Hi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var vs=!1;if(Lt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){vs=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{vs=!1}function w0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Or=!1,li=null,si=!1,ys=null,S0={onError:function(e){Or=!0,li=e}};function k0(e,t,n,r,o,i,l,s,a){Or=!1,li=null,w0.apply(S0,arguments)}function E0(e,t,n,r,o,i,l,s,a){if(k0.apply(this,arguments),Or){if(Or){var u=li;Or=!1,li=null}else throw Error(T(198));si||(si=!0,ys=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(Pn(e)!==e)throw Error(T(188))}function C0(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ru(o),e;if(i===r)return Ru(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function qd(e){return e=C0(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jd(e);if(t!==null)return t;e=e.sibling}return null}var Zd=Ye.unstable_scheduleCallback,Ou=Ye.unstable_cancelCallback,j0=Ye.unstable_shouldYield,_0=Ye.unstable_requestPaint,ae=Ye.unstable_now,T0=Ye.unstable_getCurrentPriorityLevel,ka=Ye.unstable_ImmediatePriority,ef=Ye.unstable_UserBlockingPriority,ai=Ye.unstable_NormalPriority,z0=Ye.unstable_LowPriority,tf=Ye.unstable_IdlePriority,Mi=null,Et=null;function P0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:O0,N0=Math.log,R0=Math.LN2;function O0(e){return e>>>=0,e===0?32:31-(N0(e)/R0|0)|0}var So=64,ko=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=zr(s):(i&=l,i!==0&&(r=zr(i)))}else l=n&~o,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function L0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=L0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nf(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function $0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ea(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var of,Ca,lf,sf,af,ws=!1,Eo=[],Gt=null,Kt=null,Xt=null,Vr=new Map,Wr=new Map,Vt=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=co(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function I0(e,t,n,r,o){switch(t){case"focusin":return Gt=yr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=yr(Kt,e,t,n,r,o),!0;case"mouseover":return Xt=yr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,yr(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,yr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function uf(e){var t=dn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xd(n),t!==null){e.blockedOn=t,af(e.priority,function(){lf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ms=r,n.target.dispatchEvent(r),ms=null}else return t=co(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function Au(e,t,n){bo(e)&&n.delete(t)}function F0(){ws=!1,Gt!==null&&bo(Gt)&&(Gt=null),Kt!==null&&bo(Kt)&&(Kt=null),Xt!==null&&bo(Xt)&&(Xt=null),Vr.forEach(Au),Wr.forEach(Au)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,F0)))}function Qr(e){function t(o){return xr(o,e)}if(0<Eo.length){xr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&xr(Gt,e),Kt!==null&&xr(Kt,e),Xt!==null&&xr(Xt,e),Vr.forEach(t),Wr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)uf(n),n.blockedOn===null&&Vt.shift()}var Kn=It.ReactCurrentBatchConfig,ci=!0;function M0(e,t,n,r){var o=G,i=Kn.transition;Kn.transition=null;try{G=1,ja(e,t,n,r)}finally{G=o,Kn.transition=i}}function B0(e,t,n,r){var o=G,i=Kn.transition;Kn.transition=null;try{G=4,ja(e,t,n,r)}finally{G=o,Kn.transition=i}}function ja(e,t,n,r){if(ci){var o=Ss(e,t,n,r);if(o===null)Nl(e,t,r,di,n),Lu(e,r);else if(I0(o,e,t,n,r))r.stopPropagation();else if(Lu(e,r),t&4&&-1<D0.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&of(i),i=Ss(e,t,n,r),i===null&&Nl(e,t,r,di,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var di=null;function Ss(e,t,n,r){if(di=null,e=Sa(r),e=dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T0()){case ka:return 1;case ef:return 4;case ai:case z0:return 16;case tf:return 536870912;default:return 16}default:return 16}}var Qt=null,_a=null,Uo=null;function df(){if(Uo)return Uo;var e,t=_a,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function $u(){return!1}function Ke(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Co:$u,this.isPropagationStopped=$u,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=Ke(dr),uo=ie({},dr,{view:0,detail:0}),b0=Ke(uo),Sl,kl,wr,Bi=ie({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Sl=e.screenX-wr.screenX,kl=e.screenY-wr.screenY):kl=Sl=0,wr=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Du=Ke(Bi),U0=ie({},Bi,{dataTransfer:0}),H0=Ke(U0),V0=ie({},uo,{relatedTarget:0}),El=Ke(V0),W0=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Ke(W0),Y0=ie({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Ke(Y0),K0=ie({},dr,{data:0}),Iu=Ke(K0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J0[e])?!!t[e]:!1}function za(){return Z0}var eh=ie({},uo,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=Ke(eh),nh=ie({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Ke(nh),rh=ie({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),oh=Ke(rh),ih=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ke(ih),sh=ie({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ah=Ke(sh),uh=[9,13,27,32],Pa=Lt&&"CompositionEvent"in window,Lr=null;Lt&&"documentMode"in document&&(Lr=document.documentMode);var ch=Lt&&"TextEvent"in window&&!Lr,ff=Lt&&(!Pa||Lr&&8<Lr&&11>=Lr),Mu=" ",Bu=!1;function pf(e,t){switch(e){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function dh(e,t){switch(e){case"compositionend":return hf(t);case"keypress":return t.which!==32?null:(Bu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Bu?null:e;default:return null}}function fh(e,t){if($n)return e==="compositionend"||!Pa&&pf(e,t)?(e=df(),Uo=_a=Qt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ph[e.type]:t==="textarea"}function mf(e,t,n,r){Wd(r),t=fi(t,"onChange"),0<t.length&&(n=new Ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Yr=null;function hh(e){_f(e,0)}function bi(e){var t=Fn(e);if(Fd(t))return e}function mh(e,t){if(e==="change")return t}var gf=!1;if(Lt){var Cl;if(Lt){var jl="oninput"in document;if(!jl){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),jl=typeof Uu.oninput=="function"}Cl=jl}else Cl=!1;gf=Cl&&(!document.documentMode||9<document.documentMode)}function Hu(){Ar&&(Ar.detachEvent("onpropertychange",vf),Yr=Ar=null)}function vf(e){if(e.propertyName==="value"&&bi(Yr)){var t=[];mf(t,Yr,e,Sa(e)),Kd(hh,t)}}function gh(e,t,n){e==="focusin"?(Hu(),Ar=t,Yr=n,Ar.attachEvent("onpropertychange",vf)):e==="focusout"&&Hu()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Yr)}function yh(e,t){if(e==="click")return bi(t)}function xh(e,t){if(e==="input"||e==="change")return bi(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:wh;function Gr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!rs.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yf(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wu(n,i);var l=Wu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kh=Lt&&"documentMode"in document&&11>=document.documentMode,Dn=null,ks=null,$r=null,Es=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Es||Dn==null||Dn!==ii(r)||(r=Dn,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Gr($r,r)||($r=r,r=fi(ks,"onSelect"),0<r.length&&(t=new Ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},_l={},wf={};Lt&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Ui(e){if(_l[e])return _l[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wf)return _l[e]=t[n];return e}var Sf=Ui("animationend"),kf=Ui("animationiteration"),Ef=Ui("animationstart"),Cf=Ui("transitionend"),jf=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){jf.set(e,t),zn(t,[e])}for(var Tl=0;Tl<Yu.length;Tl++){var zl=Yu[Tl],Eh=zl.toLowerCase(),Ch=zl[0].toUpperCase()+zl.slice(1);on(Eh,"on"+Ch)}on(Sf,"onAnimationEnd");on(kf,"onAnimationIteration");on(Ef,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Cf,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,E0(r,t,void 0,e),e.currentTarget=null}function _f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}}}if(si)throw e=ys,si=!1,ys=null,e}function J(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(Tf(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),Tf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[_o]){e[_o]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(jh.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Pl("selectionchange",!1,t))}}function Tf(e,t,n,r){switch(cf(t)){case 1:var o=M0;break;case 4:o=B0;break;default:o=ja}n=o.bind(null,t,n,e),o=void 0,!vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Kd(function(){var u=i,c=Sa(n),h=[];e:{var g=jf.get(e);if(g!==void 0){var x=Ta,y=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=th;break;case"focusin":y="focus",x=El;break;case"focusout":y="blur",x=El;break;case"beforeblur":case"afterblur":x=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=oh;break;case Sf:case kf:case Ef:x=Q0;break;case Cf:x=lh;break;case"scroll":x=b0;break;case"wheel":x=ah;break;case"copy":case"cut":case"paste":x=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Fu}var w=(t&4)!==0,L=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,m!==null&&(S=Hr(d,m),S!=null&&w.push(Xr(d,S,p)))),L)break;d=d.return}0<w.length&&(g=new x(g,y,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ms&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[At]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?dn(y):null,y!==null&&(L=Pn(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Du,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Fu,S="onPointerLeave",m="onPointerEnter",d="pointer"),L=x==null?g:Fn(x),p=y==null?g:Fn(y),g=new w(S,d+"leave",x,n,c),g.target=L,g.relatedTarget=p,S=null,dn(c)===u&&(w=new w(m,d+"enter",y,n,c),w.target=p,w.relatedTarget=L,S=w),L=S,x&&y)t:{for(w=x,m=y,d=0,p=w;p;p=Rn(p))d++;for(p=0,S=m;S;S=Rn(S))p++;for(;0<d-p;)w=Rn(w),d--;for(;0<p-d;)m=Rn(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Rn(w),m=Rn(m)}w=null}else w=null;x!==null&&Ku(h,g,x,w,!1),y!==null&&L!==null&&Ku(h,L,y,w,!0)}}e:{if(g=u?Fn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var z=mh;else if(bu(g))if(gf)z=xh;else{z=vh;var _=gh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=yh);if(z&&(z=z(e,u))){mf(h,z,n,c);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&cs(g,"number",g.value)}switch(_=u?Fn(u):window,e){case"focusin":(bu(_)||_.contentEditable==="true")&&(Dn=_,ks=u,$r=null);break;case"focusout":$r=ks=Dn=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Qu(h,n,c);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":Qu(h,n,c)}var C;if(Pa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?pf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ff&&n.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(C=df()):(Qt=c,_a="value"in Qt?Qt.value:Qt.textContent,$n=!0)),_=fi(u,N),0<_.length&&(N=new Iu(N,e,null,n,c),h.push({event:N,listeners:_}),C?N.data=C:(C=hf(n),C!==null&&(N.data=C)))),(C=ch?dh(e,n):fh(e,n))&&(u=fi(u,"onBeforeInput"),0<u.length&&(c=new Iu("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}_f(h,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,n),i!=null&&r.unshift(Xr(e,i,o)),i=Hr(e,t),i!=null&&r.push(Xr(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Hr(n,i),a!=null&&l.unshift(Xr(n,a,s))):o||(a=Hr(n,i),a!=null&&l.push(Xr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var _h=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(_h,`
`).replace(Th,"")}function To(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(T(425))}function pi(){}var Cs=null,js=null;function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,zh=typeof clearTimeout=="function"?clearTimeout:void 0,qu=typeof Promise=="function"?Promise:void 0,Ph=typeof queueMicrotask=="function"?queueMicrotask:typeof qu<"u"?function(e){return qu.resolve(null).then(e).catch(Nh)}:Ts;function Nh(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),kt="__reactFiber$"+fr,qr="__reactProps$"+fr,At="__reactContainer$"+fr,zs="__reactEvents$"+fr,Rh="__reactListeners$"+fr,Oh="__reactHandles$"+fr;function dn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[kt])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[kt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Hi(e){return e[qr]||null}var Ps=[],Mn=-1;function ln(e){return{current:e}}function te(e){0>Mn||(e.current=Ps[Mn],Ps[Mn]=null,Mn--)}function X(e,t){Mn++,Ps[Mn]=e.current,e.current=t}var rn={},_e=ln(rn),De=ln(!1),wn=rn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function hi(){te(De),te(_e)}function Zu(e,t,n){if(_e.current!==rn)throw Error(T(168));X(_e,t),X(De,n)}function zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,g0(e)||"Unknown",o));return ie({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,wn=_e.current,X(_e,e),X(De,De.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=zf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,te(De),te(_e),X(_e,e)):te(De),X(De,n)}var zt=null,Vi=!1,Ol=!1;function Pf(e){zt===null?zt=[e]:zt.push(e)}function Lh(e){Vi=!0,Pf(e)}function sn(){if(!Ol&&zt!==null){Ol=!0;var e=0,t=G;try{var n=zt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Vi=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),Zd(ka,sn),o}finally{G=t,Ol=!1}}return null}var Bn=[],bn=0,gi=null,vi=0,qe=[],Je=0,Sn=null,Nt=1,Rt="";function un(e,t){Bn[bn++]=vi,Bn[bn++]=gi,gi=e,vi=t}function Nf(e,t,n){qe[Je++]=Nt,qe[Je++]=Rt,qe[Je++]=Sn,Sn=e;var r=Nt;e=Rt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-ct(t)+o|n<<o|r,Rt=i+e}else Nt=1<<i|n<<o|r,Rt=e}function Ra(e){e.return!==null&&(un(e,1),Nf(e,1,0))}function Oa(e){for(;e===gi;)gi=Bn[--bn],Bn[bn]=null,vi=Bn[--bn],Bn[bn]=null;for(;e===Sn;)Sn=qe[--Je],qe[Je]=null,Rt=qe[--Je],qe[Je]=null,Nt=qe[--Je],qe[Je]=null}var Qe=null,Ve=null,ne=!1,at=null;function Rf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Nt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(ne){var t=Ve;if(t){var n=t;if(!tc(e,t)){if(Ns(e))throw Error(T(418));t=qt(n.nextSibling);var r=Qe;t&&tc(e,t)?Rf(r,n):(e.flags=e.flags&-4097|2,ne=!1,Qe=e)}}else{if(Ns(e))throw Error(T(418));e.flags=e.flags&-4097|2,ne=!1,Qe=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function zo(e){if(e!==Qe)return!1;if(!ne)return nc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_s(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ns(e))throw Of(),Error(T(418));for(;t;)Rf(e,t),t=qt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?qt(e.stateNode.nextSibling):null;return!0}function Of(){for(var e=Ve;e;)e=qt(e.nextSibling)}function er(){Ve=Qe=null,ne=!1}function La(e){at===null?at=[e]:at.push(e)}var Ah=It.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function Lf(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=tn(m,d),m.index=0,m.sibling=null,m}function i(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,S){return d===null||d.tag!==6?(d=Ml(p,m.mode,S),d.return=m,d):(d=o(d,p),d.return=m,d)}function a(m,d,p,S){var z=p.type;return z===An?c(m,d,p.props.children,S,p.key):d!==null&&(d.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===bt&&rc(z)===d.type)?(S=o(d,p.props),S.ref=Sr(m,d,p),S.return=m,S):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,S)}function u(m,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Bl(p,m.mode,S),d.return=m,d):(d=o(d,p.children||[]),d.return=m,d)}function c(m,d,p,S,z){return d===null||d.tag!==7?(d=gn(p,m.mode,S,z),d.return=m,d):(d=o(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ml(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yo:return p=Xo(d.type,d.key,d.props,null,m.mode,p),p.ref=Sr(m,null,d),p.return=m,p;case Ln:return d=Bl(d,m.mode,p),d.return=m,d;case bt:var S=d._init;return h(m,S(d._payload),p)}if(Tr(d)||gr(d))return d=gn(d,m.mode,p,null),d.return=m,d;Po(m,d)}return null}function g(m,d,p,S){var z=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(m,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return p.key===z?a(m,d,p,S):null;case Ln:return p.key===z?u(m,d,p,S):null;case bt:return z=p._init,g(m,d,z(p._payload),S)}if(Tr(p)||gr(p))return z!==null?null:c(m,d,p,S,null);Po(m,p)}return null}function x(m,d,p,S,z){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(p)||null,s(d,m,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yo:return m=m.get(S.key===null?p:S.key)||null,a(d,m,S,z);case Ln:return m=m.get(S.key===null?p:S.key)||null,u(d,m,S,z);case bt:var _=S._init;return x(m,d,p,_(S._payload),z)}if(Tr(S)||gr(S))return m=m.get(p)||null,c(d,m,S,z,null);Po(d,S)}return null}function y(m,d,p,S){for(var z=null,_=null,C=d,N=d=0,U=null;C!==null&&N<p.length;N++){C.index>N?(U=C,C=null):U=C.sibling;var I=g(m,C,p[N],S);if(I===null){C===null&&(C=U);break}e&&C&&I.alternate===null&&t(m,C),d=i(I,d,N),_===null?z=I:_.sibling=I,_=I,C=U}if(N===p.length)return n(m,C),ne&&un(m,N),z;if(C===null){for(;N<p.length;N++)C=h(m,p[N],S),C!==null&&(d=i(C,d,N),_===null?z=C:_.sibling=C,_=C);return ne&&un(m,N),z}for(C=r(m,C);N<p.length;N++)U=x(C,m,N,p[N],S),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?N:U.key),d=i(U,d,N),_===null?z=U:_.sibling=U,_=U);return e&&C.forEach(function(Te){return t(m,Te)}),ne&&un(m,N),z}function w(m,d,p,S){var z=gr(p);if(typeof z!="function")throw Error(T(150));if(p=z.call(p),p==null)throw Error(T(151));for(var _=z=null,C=d,N=d=0,U=null,I=p.next();C!==null&&!I.done;N++,I=p.next()){C.index>N?(U=C,C=null):U=C.sibling;var Te=g(m,C,I.value,S);if(Te===null){C===null&&(C=U);break}e&&C&&Te.alternate===null&&t(m,C),d=i(Te,d,N),_===null?z=Te:_.sibling=Te,_=Te,C=U}if(I.done)return n(m,C),ne&&un(m,N),z;if(C===null){for(;!I.done;N++,I=p.next())I=h(m,I.value,S),I!==null&&(d=i(I,d,N),_===null?z=I:_.sibling=I,_=I);return ne&&un(m,N),z}for(C=r(m,C);!I.done;N++,I=p.next())I=x(C,m,N,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),d=i(I,d,N),_===null?z=I:_.sibling=I,_=I);return e&&C.forEach(function(W){return t(m,W)}),ne&&un(m,N),z}function L(m,d,p,S){if(typeof p=="object"&&p!==null&&p.type===An&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:e:{for(var z=p.key,_=d;_!==null;){if(_.key===z){if(z=p.type,z===An){if(_.tag===7){n(m,_.sibling),d=o(_,p.props.children),d.return=m,m=d;break e}}else if(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===bt&&rc(z)===_.type){n(m,_.sibling),d=o(_,p.props),d.ref=Sr(m,_,p),d.return=m,m=d;break e}n(m,_);break}else t(m,_);_=_.sibling}p.type===An?(d=gn(p.props.children,m.mode,S,p.key),d.return=m,m=d):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,m=S)}return l(m);case Ln:e:{for(_=p.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=o(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Bl(p,m.mode,S),d.return=m,m=d}return l(m);case bt:return _=p._init,L(m,d,_(p._payload),S)}if(Tr(p))return y(m,d,p,S);if(gr(p))return w(m,d,p,S);Po(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,p),d.return=m,m=d):(n(m,d),d=Ml(p,m.mode,S),d.return=m,m=d),l(m)):n(m,d)}return L}var tr=Lf(!0),Af=Lf(!1),yi=ln(null),xi=null,Un=null,Aa=null;function $a(){Aa=Un=xi=null}function Da(e){var t=yi.current;te(yi),e._currentValue=t}function Os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){xi=e,Aa=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(xi===null)throw Error(T(308));Un=e,xi.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Ia(e){fn===null?fn=[e]:fn.push(e)}function $f(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ia(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,Ia(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,c=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(x,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,h,g):y,g==null)break e;h=ie({},h,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=x,a=h):c=c.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(c===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);En|=l,e.lanes=l,e.memoizedState=h}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var fo={},Ct=ln(fo),Jr=ln(fo),Zr=ln(fo);function pn(e){if(e===fo)throw Error(T(174));return e}function Ma(e,t){switch(X(Zr,t),X(Jr,e),X(Ct,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}te(Ct),X(Ct,t)}function nr(){te(Ct),te(Jr),te(Zr)}function If(e){pn(Zr.current);var t=pn(Ct.current),n=fs(t,e.type);t!==n&&(X(Jr,e),X(Ct,n))}function Ba(e){Jr.current===e&&(te(Ct),te(Jr))}var re=ln(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function ba(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Wo=It.ReactCurrentDispatcher,Al=It.ReactCurrentBatchConfig,kn=0,oe=null,pe=null,me=null,ki=!1,Dr=!1,eo=0,$h=0;function Se(){throw Error(T(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,o,i){if(kn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?Mh:Bh,e=n(r,o),Dr){i=0;do{if(Dr=!1,eo=0,25<=i)throw Error(T(301));i+=1,me=pe=null,t.updateQueue=null,Wo.current=bh,e=n(r,o)}while(Dr)}if(Wo.current=Ei,t=pe!==null&&pe.next!==null,kn=0,me=pe=oe=null,ki=!1,t)throw Error(T(300));return e}function Va(){var e=eo!==0;return eo=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function rt(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function to(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var c=u.lane;if((kn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,oe.lanes|=c,En|=c}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,mt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,En|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ff(){}function Mf(e,t){var n=oe,r=rt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Wa(Uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,no(9,bf.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(T(349));kn&30||Bf(n,t,o)}return o}function Bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bf(e,t,n,r){t.value=n,t.getSnapshot=r,Hf(t)&&Vf(e)}function Uf(e,t,n){return n(function(){Hf(t)&&Vf(e)})}function Hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Vf(e){var t=$t(e,1);t!==null&&dt(t,e,1,-1)}function lc(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=Fh.bind(null,oe,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wf(){return rt().memoizedState}function Qo(e,t,n,r){var o=wt();oe.flags|=e,o.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Ua(r,l.deps)){o.memoizedState=no(t,n,i,r);return}}oe.flags|=e,o.memoizedState=no(1|t,n,i,r)}function sc(e,t){return Qo(8390656,8,e,t)}function Wa(e,t){return Wi(2048,8,e,t)}function Qf(e,t){return Wi(4,2,e,t)}function Yf(e,t){return Wi(4,4,e,t)}function Gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kf(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,Gf.bind(null,t,e),n)}function Qa(){}function Xf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return kn&21?(mt(n,t)||(n=nf(),oe.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Dh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{G=n,Al.transition=r}}function Zf(){return rt().memoizedState}function Ih(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ep(e))tp(t,n);else if(n=$f(e,t,n,r),n!==null){var o=Ne();dt(n,e,r,o),np(n,t,r)}}function Fh(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ep(e))tp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,mt(s,l)){var a=t.interleaved;a===null?(o.next=o,Ia(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=$f(e,t,o,r),n!==null&&(o=Ne(),dt(n,e,r,o),np(n,t,r))}}function ep(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function tp(e,t){Dr=ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ea(e,n)}}var Ei={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Mh={readContext:nt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ih.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Qa,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=Dh.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=wt();if(ne){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ve===null)throw Error(T(349));kn&30||Bf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,sc(Uf.bind(null,r,i,e),[e]),r.flags|=2048,no(9,bf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ve.identifierPrefix;if(ne){var n=Rt,r=Nt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$h++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bh={readContext:nt,useCallback:Xf,useContext:nt,useEffect:Wa,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:qf,useReducer:$l,useRef:Wf,useState:function(){return $l(to)},useDebugValue:Qa,useDeferredValue:function(e){var t=rt();return Jf(t,pe.memoizedState,e)},useTransition:function(){var e=$l(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Mf,useId:Zf,unstable_isNewReconciler:!1},bh={readContext:nt,useCallback:Xf,useContext:nt,useEffect:Wa,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:qf,useReducer:Dl,useRef:Wf,useState:function(){return Dl(to)},useDebugValue:Qa,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:Jf(t,pe.memoizedState,e)},useTransition:function(){var e=Dl(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ff,useSyncExternalStore:Mf,useId:Zf,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=en(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(dt(t,e,r,n),Vo(t,e,r))}};function ac(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(o,i):!0}function rp(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ie(t)?wn:_e.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ie(t)?wn:_e.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Qi.enqueueReplaceState(o,o.state,null),wi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=m0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function op(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Ws=r),$s(e,t)},n}function ip(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$s(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=nm.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Hh=It.ReactCurrentOwner,$e=!1;function ze(e,t,n,r){t.child=e===null?Af(t,null,n,r):tr(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=Ha(e,t,n,r,i,o),n=Va(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&n&&Ra(t),t.flags|=1,ze(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lp(e,t,i,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return Ds(e,t,n,r,o)}function sp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Vn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Vn,Ue),Ue|=r;return ze(e,t,o,n),t.child}function ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,r,o){var i=Ie(n)?wn:_e.current;return i=Zn(t,i),Xn(t,o),n=Ha(e,t,n,r,i,o),r=Va(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&r&&Ra(t),t.flags|=1,ze(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Ie(n)){var i=!0;mi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Yo(e,t),rp(t,n,r),As(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ie(n)?wn:_e.current,u=Zn(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&uc(t,l,r,u),Ut=!1;var g=t.memoizedState;l.state=g,wi(t,r,l,o),a=t.memoizedState,s!==r||g!==a||De.current||Ut?(typeof c=="function"&&(Ls(t,n,c,r),a=t.memoizedState),(s=Ut||ac(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Df(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:lt(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ie(n)?wn:_e.current,a=Zn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&uc(t,l,r,a),Ut=!1,g=t.memoizedState,l.state=g,wi(t,r,l,o);var y=t.memoizedState;s!==h||g!==y||De.current||Ut?(typeof x=="function"&&(Ls(t,n,x,r),y=t.memoizedState),(u=Ut||ac(t,n,u,r,g,y,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Is(e,t,n,r,i,o)}function Is(e,t,n,r,o,i){ap(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),Dt(e,t,i);r=t.stateNode,Hh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,s,i)):ze(e,t,s,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function up(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Ma(e,t.containerInfo)}function gc(e,t,n,r,o){return er(),La(o),t.flags|=256,ze(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function cp(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return Rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ki(l,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ms(n),t.memoizedState=Fs,e):Ya(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Vh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=tn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=tn(s,i):(i=gn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Fs,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&La(r),tr(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(T(422))),No(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ki({mode:"visible",children:r.children},o,0,null),i=gn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=Ms(l),t.memoizedState=Fs,i);if(!(t.mode&1))return No(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(T(419)),r=Il(i,r,void 0),No(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),dt(r,e,o,-1))}return Za(),r=Il(Error(T(421))),No(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=qt(o.nextSibling),Qe=t,ne=!0,at=null,e!==null&&(qe[Je++]=Nt,qe[Je++]=Rt,qe[Je++]=Sn,Nt=e.id,Rt=e.overflow,Sn=t),t=Ya(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Os(e.return,t,n)}function Fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function dp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Si(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wh(e,t,n){switch(t.tag){case 3:up(t),er();break;case 5:If(t);break;case 1:Ie(t.type)&&mi(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(yi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?cp(e,t,n):(X(re,re.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,sp(e,t,n)}return Dt(e,t,n)}var fp,Bs,pp,hp;fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bs=function(){};pp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Ct.current);var i=null;switch(n){case"input":o=as(e,o),r=as(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=ds(e,o),r=ds(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}ps(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(br.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(br.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qh(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Ie(t.type)&&hi(),ke(t),null;case 3:return r=t.stateNode,nr(),te(De),te(_e),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Gs(at),at=null))),Bs(e,t),ke(t),null;case 5:Ba(t);var o=pn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)pp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return ke(t),null}if(e=pn(Ct.current),zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":_u(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":zu(r,i),J("invalid",r)}ps(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",""+s]):br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":xo(r),Tu(r,i,!0);break;case"textarea":xo(r),Pu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[qr]=r,fp(e,t,!1,!1),t.stateNode=e;e:{switch(l=hs(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":_u(e,r),o=as(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":zu(e,r),o=ds(e,r),J("invalid",e);break;default:o=r}ps(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Vd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ud(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ur(e,a):typeof a=="number"&&Ur(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(br.hasOwnProperty(i)?a!=null&&i==="onScroll"&&J("scroll",e):a!=null&&va(e,i,a,l))}switch(n){case"input":xo(e),Tu(e,r,!1);break;case"textarea":xo(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=pn(Zr.current),pn(Ct.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return ke(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))Of(),er(),t.flags|=98560,i=!1;else if(i=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[kt]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else at!==null&&(Gs(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Za())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return nr(),Bs(e,t),e===null&&Kr(t.stateNode.containerInfo),ke(t),null;case 10:return Da(t.type._context),ke(t),null;case 17:return Ie(t.type)&&hi(),ke(t),null;case 19:if(te(re),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Si(e),l!==null){for(t.flags|=128,kr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>or&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return ke(t),null}else 2*ae()-i.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Yh(e,t){switch(Oa(t),t.tag){case 1:return Ie(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),te(De),te(_e),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ba(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return nr(),null;case 10:return Da(t.type._context),null;case 22:case 23:return Ja(),null;case 24:return null;default:return null}}var Ro=!1,Ce=!1,Gh=typeof WeakSet=="function"?WeakSet:Set,R=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function bs(e,t,n){try{n()}catch(r){se(e,t,r)}}var yc=!1;function Kh(e,t){if(Cs=ci,e=xf(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,c=0,h=e,g=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++c===r&&(a=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},ci=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,L=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),L);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=yc,yc=!1,y}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bs(t,n,i)}o=o.next}while(o!==r)}}function Yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mp(e){var t=e.alternate;t!==null&&(e.alternate=null,mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[qr],delete t[zs],delete t[Rh],delete t[Oh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gp(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var ye=null,st=!1;function Ft(e,t,n){for(n=n.child;n!==null;)vp(e,t,n),n=n.sibling}function vp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mi,n)}catch{}switch(n.tag){case 5:Ce||Hn(n,t);case 6:var r=ye,o=st;ye=null,Ft(e,t,n),ye=r,st=o,ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Qr(e)):Rl(ye,n.stateNode));break;case 4:r=ye,o=st,ye=n.stateNode.containerInfo,st=!0,Ft(e,t,n),ye=r,st=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&bs(n,t,l),o=o.next}while(o!==r)}Ft(e,t,n);break;case 1:if(!Ce&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ft(e,t,n),Ce=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gh),t.forEach(function(r){var o=om.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,st=!1;break e;case 3:ye=s.stateNode.containerInfo,st=!0;break e;case 4:ye=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(ye===null)throw Error(T(160));vp(i,l,o),ye=null,st=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}function yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),xt(e),r&4){try{Ir(3,e,e.return),Yi(3,e)}catch(w){se(e,e.return,w)}try{Ir(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Ur(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Md(o,i),hs(s,l);var u=hs(s,i);for(l=0;l<a.length;l+=2){var c=a[l],h=a[l+1];c==="style"?Vd(o,h):c==="dangerouslySetInnerHTML"?Ud(o,h):c==="children"?Ur(o,h):va(o,c,h,u)}switch(s){case"input":us(o,i);break;case"textarea":Bd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(it(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(it(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:it(t,e),xt(e);break;case 13:it(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=ae())),r&4&&wc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,it(t,e),Ce=u):it(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(h=R=c;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:Hn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){kc(h);continue}}x!==null?(x.return=g,R=x):kc(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hd("display",l))}catch(w){se(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){se(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:it(t,e),xt(e),r&4&&wc(e);break;case 21:break;default:it(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ur(o,""),r.flags&=-33);var i=xc(e);Vs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=xc(e);Hs(e,s,l);break;default:throw Error(T(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,n){R=e,xp(e)}function xp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ro;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ce;s=Ro;var u=Ce;if(Ro=l,(Ce=a)&&!u)for(R=o;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?Ec(o):a!==null?(a.return=l,R=a):Ec(o);for(;i!==null;)R=i,xp(i),i=i.sibling;R=o,Ro=s,Ce=u}Sc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Sc(e)}}function Sc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ce||t.flags&512&&Us(t)}catch(g){se(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function kc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ec(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yi(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var i=t.return;try{Us(t)}catch(a){se(t,i,a)}break;case 5:var l=t.return;try{Us(t)}catch(a){se(t,l,a)}}}catch(a){se(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var qh=Math.ceil,Ci=It.ReactCurrentDispatcher,Ga=It.ReactCurrentOwner,et=It.ReactCurrentBatchConfig,V=0,ve=null,de=null,xe=0,Ue=0,Vn=ln(0),he=0,ro=null,En=0,Gi=0,Ka=0,Fr=null,Ae=null,Xa=0,or=1/0,_t=null,ji=!1,Ws=null,Zt=null,Oo=!1,Yt=null,_i=0,Mr=0,Qs=null,Go=-1,Ko=0;function Ne(){return V&6?ae():Go!==-1?Go:Go=ae()}function en(e){return e.mode&1?V&2&&xe!==0?xe&-xe:Ah.transition!==null?(Ko===0&&(Ko=nf()),Ko):(e=G,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e):1}function dt(e,t,n,r){if(50<Mr)throw Mr=0,Qs=null,Error(T(185));ao(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(Gi|=n),he===4&&Wt(e,xe)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(or=ae()+500,Vi&&sn()))}function Fe(e,t){var n=e.callbackNode;A0(e,t);var r=ui(e,e===ve?xe:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?Lh(Cc.bind(null,e)):Pf(Cc.bind(null,e)),Ph(function(){!(V&6)&&sn()}),n=null;else{switch(rf(r)){case 1:n=ka;break;case 4:n=ef;break;case 16:n=ai;break;case 536870912:n=tf;break;default:n=ai}n=Tp(n,wp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wp(e,t){if(Go=-1,Ko=0,V&6)throw Error(T(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ui(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ti(e,r);else{t=r;var o=V;V|=2;var i=kp();(ve!==e||xe!==t)&&(_t=null,or=ae()+500,mn(e,t));do try{em();break}catch(s){Sp(e,s)}while(!0);$a(),Ci.current=i,V=o,de!==null?t=0:(ve=null,xe=0,t=he)}if(t!==0){if(t===2&&(o=xs(e),o!==0&&(r=o,t=Ys(e,o))),t===1)throw n=ro,mn(e,0),Wt(e,r),Fe(e,ae()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Jh(o)&&(t=Ti(e,r),t===2&&(i=xs(e),i!==0&&(r=i,t=Ys(e,i))),t===1))throw n=ro,mn(e,0),Wt(e,r),Fe(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:cn(e,Ae,_t);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Xa+500-ae(),10<t)){if(ui(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ts(cn.bind(null,e,Ae,_t),t);break}cn(e,Ae,_t);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qh(r/1960))-r,10<r){e.timeoutHandle=Ts(cn.bind(null,e,Ae,_t),r);break}cn(e,Ae,_t);break;case 5:cn(e,Ae,_t);break;default:throw Error(T(329))}}}return Fe(e,ae()),e.callbackNode===n?wp.bind(null,e):null}function Ys(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Gs(t)),e}function Gs(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Jh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Ka,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(V&6)throw Error(T(327));qn();var t=ui(e,0);if(!(t&1))return Fe(e,ae()),null;var n=Ti(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=Ys(e,r))}if(n===1)throw n=ro,mn(e,0),Wt(e,t),Fe(e,ae()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ae,_t),Fe(e,ae()),null}function qa(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(or=ae()+500,Vi&&sn())}}function Cn(e){Yt!==null&&Yt.tag===0&&!(V&6)&&qn();var t=V;V|=1;var n=et.transition,r=G;try{if(et.transition=null,G=1,e)return e()}finally{G=r,et.transition=n,V=t,!(V&6)&&sn()}}function Ja(){Ue=Vn.current,te(Vn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:nr(),te(De),te(_e),ba();break;case 5:Ba(r);break;case 4:nr();break;case 13:te(re);break;case 19:te(re);break;case 10:Da(r.type._context);break;case 22:case 23:Ja()}n=n.return}if(ve=e,de=e=tn(e.current,null),xe=Ue=t,he=0,ro=null,Ka=Gi=En=0,Ae=Fr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}fn=null}return e}function Sp(e,t){do{var n=de;try{if($a(),Wo.current=Ei,ki){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ki=!1}if(kn=0,me=pe=oe=null,Dr=!1,eo=0,Ga.current=null,n===null||n.return===null){he=1,ro=t,de=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=xe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=dc(l);if(x!==null){x.flags&=-257,fc(x,l,s,i,t),x.mode&1&&cc(i,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){cc(i,u,t),Za();break e}a=Error(T(426))}}else if(ne&&s.mode&1){var L=dc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),fc(L,l,s,i,t),La(rr(a,s));break e}}i=a=rr(a,s),he!==4&&(he=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=op(i,a,t);oc(i,m);break e;case 1:s=a;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zt===null||!Zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=ip(i,s,t);oc(i,S);break e}}i=i.return}while(i!==null)}Cp(n)}catch(z){t=z,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function kp(){var e=Ci.current;return Ci.current=Ei,e===null?Ei:e}function Za(){(he===0||he===3||he===2)&&(he=4),ve===null||!(En&268435455)&&!(Gi&268435455)||Wt(ve,xe)}function Ti(e,t){var n=V;V|=2;var r=kp();(ve!==e||xe!==t)&&(_t=null,mn(e,t));do try{Zh();break}catch(o){Sp(e,o)}while(!0);if($a(),V=n,Ci.current=r,de!==null)throw Error(T(261));return ve=null,xe=0,he}function Zh(){for(;de!==null;)Ep(de)}function em(){for(;de!==null&&!j0();)Ep(de)}function Ep(e){var t=_p(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Cp(e):de=t,Ga.current=null}function Cp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Qh(n,t,Ue),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=G,o=et.transition;try{et.transition=null,G=1,tm(e,t,n,r)}finally{et.transition=o,G=r}return null}function tm(e,t,n,r){do qn();while(Yt!==null);if(V&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($0(e,i),e===ve&&(de=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,Tp(ai,function(){return qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var l=G;G=1;var s=V;V|=4,Ga.current=null,Kh(e,n),yp(n,e),Sh(js),ci=!!Cs,js=Cs=null,e.current=n,Xh(n),_0(),V=s,G=l,et.transition=i}else e.current=n;if(Oo&&(Oo=!1,Yt=e,_i=o),i=e.pendingLanes,i===0&&(Zt=null),P0(n.stateNode),Fe(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=Ws,Ws=null,e;return _i&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Qs?Mr++:(Mr=0,Qs=e):Mr=0,sn(),null}function qn(){if(Yt!==null){var e=rf(_i),t=et.transition,n=G;try{if(et.transition=null,G=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,_i=0,V&6)throw Error(T(331));var o=V;for(V|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Ir(8,c,i)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var g=c.sibling,x=c.return;if(mp(c),c===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Yi(9,s)}}catch(z){se(s,s.return,z)}if(s===l){R=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,R=S;break e}R=s.return}}if(V=o,sn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{G=n,et.transition=t}}return!1}function jc(e,t,n){t=rr(n,t),t=op(e,t,1),e=Jt(e,t,1),t=Ne(),e!==null&&(ao(e,1,t),Fe(e,t))}function se(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=rr(n,e),e=ip(t,e,1),t=Jt(t,e,1),e=Ne(),t!==null&&(ao(t,1,e),Fe(t,e));break}}t=t.return}}function nm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(he===4||he===3&&(xe&130023424)===xe&&500>ae()-Xa?mn(e,0):Ka|=n),Fe(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=Ne();e=$t(e,t),e!==null&&(ao(e,t,n),Fe(e,n))}function rm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function om(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),jp(e,n)}var _p;_p=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Wh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ne&&t.flags&1048576&&Nf(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yo(e,t),e=t.pendingProps;var o=Zn(t,_e.current);Xn(t,n),o=Ha(null,t,r,e,o,n);var i=Va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,mi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fa(t),o.updater=Qi,t.stateNode=o,o._reactInternals=t,As(t,r,e,n),t=Is(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Ra(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=lm(r),e=lt(r,e),o){case 0:t=Ds(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,lt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Ds(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),mc(e,t,r,o,n);case 3:e:{if(up(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Df(e,t),wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rr(Error(T(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(T(424)),t),t=gc(e,t,r,n,o);break e}else for(Ve=qt(t.stateNode.containerInfo.firstChild),Qe=t,ne=!0,at=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=Dt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return If(t),e===null&&Rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,_s(r,o)?l=null:i!==null&&_s(r,i)&&(t.flags|=32),ap(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Rs(t),null;case 13:return cp(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),pc(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(yi,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!De.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Os(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(T(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Os(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=nt(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),hc(e,t,r,o,n);case 15:return lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Yo(e,t),t.tag=1,Ie(r)?(e=!0,mi(t)):e=!1,Xn(t,n),rp(t,r,o),As(t,r,o,n),Is(null,t,r,!0,e,n);case 19:return dp(e,t,n);case 22:return sp(e,t,n)}throw Error(T(156,t.tag))};function Tp(e,t){return Zd(e,t)}function im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new im(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xa)return 11;if(e===wa)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")eu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return gn(n.children,o,i,t);case ya:l=8,o|=8;break;case os:return e=Ze(12,n,t,o|2),e.elementType=os,e.lanes=i,e;case is:return e=Ze(13,n,t,o),e.elementType=is,e.lanes=i,e;case ls:return e=Ze(19,n,t,o),e.elementType=ls,e.lanes=i,e;case Dd:return Ki(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:l=10;break e;case $d:l=9;break e;case xa:l=11;break e;case wa:l=14;break e;case bt:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Ki(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Dd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,o,i,l,s,a){return e=new sm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(i),e}function am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zp(e){if(!e)return rn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Ie(n))return zf(e,n,t)}return t}function Pp(e,t,n,r,o,i,l,s,a){return e=tu(n,r,!0,e,o,i,l,s,a),e.context=zp(null),n=e.current,r=Ne(),o=en(n),i=Ot(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,ao(e,o,r),Fe(e,r),e}function Xi(e,t,n,r){var o=t.current,i=Ne(),l=en(o);return n=zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(dt(e,o,l,i),Vo(e,o,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function um(){return null}var Np=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}qi.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Xi(e,t,null,null)};qi.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){Xi(null,e,null,null)}),t[At]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&uf(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function cm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=zi(l);i.call(u)}}var l=Pp(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[At]=l.current,Kr(e.nodeType===8?e.parentNode:e),Cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=zi(a);s.call(u)}}var a=tu(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=a,e[At]=a.current,Kr(e.nodeType===8?e.parentNode:e),Cn(function(){Xi(t,a,n,r)}),a}function Zi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=zi(l);s.call(a)}}Xi(t,l,e,o)}else l=cm(n,t,e,o,r);return zi(l)}of=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Ea(t,n|1),Fe(t,ae()),!(V&6)&&(or=ae()+500,sn()))}break;case 13:Cn(function(){var r=$t(e,1);if(r!==null){var o=Ne();dt(r,e,1,o)}}),nu(e,1)}};Ca=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ne();dt(t,e,134217728,n)}nu(e,134217728)}};lf=function(e){if(e.tag===13){var t=en(e),n=$t(e,t);if(n!==null){var r=Ne();dt(n,e,t,r)}nu(e,t)}};sf=function(){return G};af=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};gs=function(e,t,n){switch(t){case"input":if(us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Hi(r);if(!o)throw Error(T(90));Fd(r),us(r,o)}}}break;case"textarea":Bd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Yd=qa;Gd=Cn;var dm={usingClientEntryPoint:!1,Events:[co,Fn,Hi,Wd,Qd,qa]},Er={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fm={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qd(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{Mi=Lo.inject(fm),Et=Lo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(T(200));return am(e,t,null,n)};Ge.createRoot=function(e,t){if(!ou(e))throw Error(T(299));var n=!1,r="",o=Np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,Kr(e.nodeType===8?e.parentNode:e),new ru(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=qd(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Cn(e)};Ge.hydrate=function(e,t,n){if(!Ji(t))throw Error(T(200));return Zi(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Np;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pp(t,null,e,1,n??null,o,!1,i,l),e[At]=t.current,Kr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qi(t)};Ge.render=function(e,t,n){if(!Ji(t))throw Error(T(200));return Zi(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(T(40));return e._reactRootContainer?(Cn(function(){Zi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ge.unstable_batchedUpdates=qa;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Zi(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp)}catch(e){console.error(e)}}Rp(),Nd.exports=Ge;var pm=Nd.exports,zc=pm;ns.createRoot=zc.createRoot,ns.hydrateRoot=zc.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)};function oo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",Br="-moz-",Y="-webkit-",Op="comm",el="rule",iu="decl",hm="@import",Lp="@keyframes",mm="@layer",Ap=Math.abs,lu=String.fromCharCode,Ks=Object.assign;function gm(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function $p(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function qo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function ir(e,t,n){return e.slice(t,n)}function St(e){return e.length}function Dp(e){return e.length}function Nr(e,t){return t.push(e),e}function vm(e,t){return e.map(t).join("")}function Pc(e,t){return e.filter(function(n){return!Tt(n,t)})}var tl=1,lr=1,Ip=0,ot=0,ce=0,pr="";function nl(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:tl,column:lr,length:l,return:"",siblings:s}}function Bt(e,t){return Ks(nl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Bt(e.root,{children:[e]});Nr(e,e.siblings)}function ym(){return ce}function xm(){return ce=ot>0?ge(pr,--ot):0,lr--,ce===10&&(lr=1,tl--),ce}function ft(){return ce=ot<Ip?ge(pr,ot++):0,lr++,ce===10&&(lr=1,tl++),ce}function vn(){return ge(pr,ot)}function Jo(){return ot}function rl(e,t){return ir(pr,e,t)}function Xs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wm(e){return tl=lr=1,Ip=St(pr=e),ot=0,[]}function Sm(e){return pr="",e}function bl(e){return $p(rl(ot-1,qs(e===91?e+2:e===40?e+1:e)))}function km(e){for(;(ce=vn())&&ce<33;)ft();return Xs(e)>2||Xs(ce)>3?"":" "}function Em(e,t){for(;--t&&ft()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return rl(e,Jo()+(t<6&&vn()==32&&ft()==32))}function qs(e){for(;ft();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&qs(ce);break;case 40:e===41&&qs(e);break;case 92:ft();break}return ot}function Cm(e,t){for(;ft()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+rl(t,ot-1)+"*"+lu(e===47?e:ft())}function jm(e){for(;!Xs(vn());)ft();return rl(e,ot)}function _m(e){return Sm(Zo("",null,null,null,[""],e=wm(e),0,[0],e))}function Zo(e,t,n,r,o,i,l,s,a){for(var u=0,c=0,h=l,g=0,x=0,y=0,w=1,L=1,m=1,d=0,p="",S=o,z=i,_=r,C=p;L;)switch(y=d,d=ft()){case 40:if(y!=108&&ge(C,h-1)==58){qo(C+=M(bl(d),"&","&\f"),"&\f",Ap(u?s[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=bl(d);break;case 9:case 10:case 13:case 32:C+=km(y);break;case 92:C+=Em(Jo()-1,7);continue;case 47:switch(vn()){case 42:case 47:Nr(Tm(Cm(ft(),Jo()),t,n,a),a);break;default:C+="/"}break;case 123*w:s[u++]=St(C)*m;case 125*w:case 59:case 0:switch(d){case 0:case 125:L=0;case 59+c:m==-1&&(C=M(C,/\f/g,"")),x>0&&St(C)-h&&Nr(x>32?Rc(C+";",r,n,h-1,a):Rc(M(C," ","")+";",r,n,h-2,a),a);break;case 59:C+=";";default:if(Nr(_=Nc(C,t,n,u,c,o,s,p,S=[],z=[],h,i),i),d===123)if(c===0)Zo(C,t,_,_,S,i,h,s,z);else switch(g===99&&ge(C,3)===110?100:g){case 100:case 108:case 109:case 115:Zo(e,_,_,r&&Nr(Nc(e,_,_,0,0,o,s,p,o,S=[],h,z),z),o,z,h,s,r?S:z);break;default:Zo(C,_,_,_,[""],z,0,s,z)}}u=c=x=0,w=m=1,p=C="",h=l;break;case 58:h=1+St(C),x=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&xm()==125)continue}switch(C+=lu(d),d*w){case 38:m=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(St(C)-1)*m,m=1;break;case 64:vn()===45&&(C+=bl(ft())),g=vn(),c=h=St(p=C+=jm(Jo())),d++;break;case 45:y===45&&St(C)==2&&(w=0)}}return i}function Nc(e,t,n,r,o,i,l,s,a,u,c,h){for(var g=o-1,x=o===0?i:[""],y=Dp(x),w=0,L=0,m=0;w<r;++w)for(var d=0,p=ir(e,g+1,g=Ap(L=l[w])),S=e;d<y;++d)(S=$p(L>0?x[d]+" "+p:M(p,/&\f/g,x[d])))&&(a[m++]=S);return nl(e,t,n,o===0?el:s,a,u,c,h)}function Tm(e,t,n,r){return nl(e,t,n,Op,lu(ym()),ir(e,2,-2),0,r)}function Rc(e,t,n,r,o){return nl(e,t,n,iu,ir(e,0,r),ir(e,r+1,-1),r,o)}function Fp(e,t,n){switch(gm(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+Br+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+Z+e+e;case 6165:return Y+e+Z+"flex-"+e+e;case 5187:return Y+e+M(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return Y+e+Z+"flex-item-"+M(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":Z+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return Y+e+Z+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+Z+M(e,"shrink","negative")+e;case 5292:return Y+e+Z+M(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+M(e,"-grow","")+Y+e+Z+M(e,"grow","positive")+e;case 4554:return Y+M(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return Z+"grid-column-align"+ir(e,t)+e;break;case 2592:case 3360:return Z+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Tt(r.props,/grid-\w+-end/)})?~qo(e+(n=n[t].value),"span",0)?e:Z+M(e,"-start","")+e+Z+"grid-row-span:"+(~qo(n,"span",0)?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":Z+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:Z+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+Br+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qo(e,"stretch",0)?Fp(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Z+o+":"+i+u+(l?Z+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return M(e,":",":"+Y)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(ge(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Z+"$2box$3")+e;case 100:return M(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Pi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zm(e,t,n,r){switch(e.type){case mm:if(e.children.length)break;case hm:case iu:return e.return=e.return||e.value;case Op:return"";case Lp:return e.return=e.value+"{"+Pi(e.children,r)+"}";case el:if(!St(e.value=e.props.join(",")))return""}return St(n=Pi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pm(e){var t=Dp(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Nm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Rm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case iu:e.return=Fp(e.value,e.length,n);return;case Lp:return Pi([Bt(e,{value:M(e.value,"@","@"+Y)})],r);case el:if(e.length)return vm(n=e.props,function(o){switch(Tt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Bt(e,{props:[M(o,/:(read-\w+)/,":"+Br+"$1")]})),On(Bt(e,{props:[o]})),Ks(e,{props:Pc(n,r)});break;case"::placeholder":On(Bt(e,{props:[M(o,/:(plac\w+)/,":"+Y+"input-$1")]})),On(Bt(e,{props:[M(o,/:(plac\w+)/,":"+Br+"$1")]})),On(Bt(e,{props:[M(o,/:(plac\w+)/,Z+"input-$1")]})),On(Bt(e,{props:[o]})),Ks(e,{props:Pc(n,r)});break}return""})}}var Om={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},be={},sr=typeof process<"u"&&be!==void 0&&(be.REACT_APP_SC_ATTR||be.SC_ATTR)||"data-styled",Mp="active",Bp="data-styled-version",ol="6.1.11",su=`/*!sc*/
`,au=typeof window<"u"&&"HTMLElement"in window,Lm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==""?be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.SC_DISABLE_SPEEDY!==void 0&&be.SC_DISABLE_SPEEDY!==""&&be.SC_DISABLE_SPEEDY!=="false"&&be.SC_DISABLE_SPEEDY),il=Object.freeze([]),ar=Object.freeze({});function Am(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var bp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$m=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Dm=/(^-|-$)/g;function Oc(e){return e.replace($m,"-").replace(Dm,"")}var Im=/(a)(d)/gi,Ao=52,Lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Js(e){var t,n="";for(t=Math.abs(e);t>Ao;t=t/Ao|0)n=Lc(t%Ao)+n;return(Lc(t%Ao)+n).replace(Im,"$1-$2")}var Ul,Up=5381,Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hp=function(e){return Wn(Up,e)};function Vp(e){return Js(Hp(e)>>>0)}function Fm(e){return e.displayName||e.name||"Component"}function Hl(e){return typeof e=="string"&&!0}var Wp=typeof Symbol=="function"&&Symbol.for,Qp=Wp?Symbol.for("react.memo"):60115,Mm=Wp?Symbol.for("react.forward_ref"):60112,Bm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Um=((Ul={})[Mm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ul[Qp]=Yp,Ul);function Ac(e){return("type"in(t=e)&&t.type.$$typeof)===Qp?Yp:"$$typeof"in e?Um[e.$$typeof]:Bm;var t}var Hm=Object.defineProperty,Vm=Object.getOwnPropertyNames,$c=Object.getOwnPropertySymbols,Wm=Object.getOwnPropertyDescriptor,Qm=Object.getPrototypeOf,Dc=Object.prototype;function Gp(e,t,n){if(typeof t!="string"){if(Dc){var r=Qm(t);r&&r!==Dc&&Gp(e,r,n)}var o=Vm(t);$c&&(o=o.concat($c(t)));for(var i=Ac(e),l=Ac(t),s=0;s<o.length;++s){var a=o[s];if(!(a in bm||n&&n[a]||l&&a in l||i&&a in i)){var u=Wm(t,a);try{Hm(e,a,u)}catch{}}}}return e}function jn(e){return typeof e=="function"}function uu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ea(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ea(e[r],t[r]);else if(io(t))for(var r in t)e[r]=ea(e[r],t[r]);return e}function cu(e,t){Object.defineProperty(e,"toString",{value:t})}function _n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ym=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _n(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(su);return n},e}(),ei=new Map,Ni=new Map,ti=1,$o=function(e){if(ei.has(e))return ei.get(e);for(;Ni.has(ti);)ti++;var t=ti++;return ei.set(e,t),Ni.set(t,e),t},Gm=function(e,t){ti=t+1,ei.set(e,t),Ni.set(t,e)},Km="style[".concat(sr,"][").concat(Bp,'="').concat(ol,'"]'),Xm=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Jm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(su),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Xm);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Gm(c,u),qm(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Zm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Kp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(sr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(sr,Mp),r.setAttribute(Bp,ol);var l=Zm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},eg=function(){function e(t){this.element=Kp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw _n(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),tg=function(){function e(t){this.element=Kp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ng=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ic=au,rg={isServer:!au,useCSSOMInjection:!Lm},Xp=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=je(je({},rg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&au&&Ic&&(Ic=!1,function(i){for(var l=document.querySelectorAll(Km),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(sr)!==Mp&&(Jm(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cu(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(h){var g=function(m){return Ni.get(m)}(h);if(g===void 0)return"continue";var x=i.names.get(g),y=l.getGroup(h);if(x===void 0||y.length===0)return"continue";var w="".concat(sr,".g").concat(h,'[id="').concat(g,'"]'),L="";x!==void 0&&x.forEach(function(m){m.length>0&&(L+="".concat(m,","))}),a+="".concat(y).concat(w,'{content:"').concat(L,'"}').concat(su)},c=0;c<s;c++)u(c);return a}(o)})}return e.registerId=function(t){return $o(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ng(o):r?new eg(o):new tg(o)}(this.options),new Ym(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),og=/&/g,ig=/^\s*\/\/.*$/gm;function qp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=qp(n.children,t)),n})}function lg(e){var t,n,r,o=ar,i=o.options,l=i===void 0?ar:i,s=o.plugins,a=s===void 0?il:s,u=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===el&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(og,n).replace(r,u))}),l.prefix&&c.push(Rm),c.push(zm);var h=function(g,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var L=g.replace(ig,""),m=_m(y||x?"".concat(y," ").concat(x," { ").concat(L," }"):L);l.namespace&&(m=qp(m,l.namespace));var d=[];return Pi(m,Pm(c.concat(Nm(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,x){return x.name||_n(15),Wn(g,x.name)},Up).toString():"",h}var sg=new Xp,ta=lg(),Jp=Pe.createContext({shouldForwardProp:void 0,styleSheet:sg,stylis:ta});Jp.Consumer;Pe.createContext(void 0);function Fc(){return ee.useContext(Jp)}var Zp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ta);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cu(this,function(){throw _n(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ta),this.name+t.hash},e}(),ag=function(e){return e>="A"&&e<="Z"};function Mc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;ag(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var e1=function(e){return e==null||e===!1||e===""},t1=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!e1(i)&&(Array.isArray(i)&&i.isCss||jn(i)?r.push("".concat(Mc(o),":"),i,";"):io(i)?r.push.apply(r,oo(oo(["".concat(o," {")],t1(i),!1),["}"],!1)):r.push("".concat(Mc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Om||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(e1(e))return[];if(uu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return yn(o,t,n,r)}var i;return e instanceof Zp?n?(e.inject(n,r),[e.getName(r)]):[e]:io(e)?t1(e):Array.isArray(e)?Array.prototype.concat.apply(il,e.map(function(l){return yn(l,t,n,r)})):[e.toString()]}function ug(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!uu(n))return!1}return!0}var cg=Hp(ol),dg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ug(t),this.componentId=n,this.baseHash=Wn(cg,n),this.baseStyle=r,Xp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=Zs(yn(this.rules,t,n,r)),l=Js(Wn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=hn(o,l),this.staticRulesId=l}else{for(var a=Wn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var g=Zs(yn(h,t,n,r));a=Wn(a,g+c),u+=g}}if(u){var x=Js(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=hn(o,x)}}return o},e}(),Ri=Pe.createContext(void 0);Ri.Consumer;function fg(e){var t=Pe.useContext(Ri),n=ee.useMemo(function(){return function(r,o){if(!r)throw _n(14);if(jn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw _n(8);return o?je(je({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Pe.createElement(Ri.Provider,{value:n},e.children):null}var Vl={};function pg(e,t,n){var r=uu(e),o=e,i=!Hl(e),l=t.attrs,s=l===void 0?il:l,a=t.componentId,u=a===void 0?function(S,z){var _=typeof S!="string"?"sc":Oc(S);Vl[_]=(Vl[_]||0)+1;var C="".concat(_,"-").concat(Vp(ol+_+Vl[_]));return z?"".concat(z,"-").concat(C):C}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(S){return Hl(S)?"styled.".concat(S):"Styled(".concat(Fm(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Oc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;y=function(S,z){return w(S,z)&&L(S,z)}}else y=w}var m=new dg(n,g,r?o.componentStyle:void 0);function d(S,z){return function(_,C,N){var U=_.attrs,I=_.componentStyle,Te=_.defaultProps,W=_.foldedComponentIds,yt=_.styledComponentId,Nn=_.target,F=Pe.useContext(Ri),A=Fc(),$=_.shouldForwardProp||A.shouldForwardProp,j=Am(C,F,Te)||ar,O=function(q,B,le){for(var Xe,Be=je(je({},B),{className:void 0,theme:le}),jt=0;jt<q.length;jt+=1){var an=jn(Xe=q[jt])?Xe(Be):Xe;for(var Le in an)Be[Le]=Le==="className"?hn(Be[Le],an[Le]):Le==="style"?je(je({},Be[Le]),an[Le]):an[Le]}return B.className&&(Be.className=hn(Be.className,B.className)),Be}(U,C,j),v=O.as||Nn,Q={};for(var P in O)O[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&O.theme===j||(P==="forwardedAs"?Q.as=O.forwardedAs:$&&!$(P,v)||(Q[P]=O[P]));var H=function(q,B){var le=Fc(),Xe=q.generateAndInjectStyles(B,le.styleSheet,le.stylis);return Xe}(I,O),K=hn(W,yt);return H&&(K+=" "+H),O.className&&(K+=" "+O.className),Q[Hl(v)&&!bp.has(v)?"class":"className"]=K,Q.ref=N,ee.createElement(v,Q)}(p,S,z)}d.displayName=h;var p=Pe.forwardRef(d);return p.attrs=x,p.componentStyle=m,p.displayName=h,p.shouldForwardProp=y,p.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(z){for(var _=[],C=1;C<arguments.length;C++)_[C-1]=arguments[C];for(var N=0,U=_;N<U.length;N++)ea(z,U[N],!0);return z}({},o.defaultProps,S):S}}),cu(p,function(){return".".concat(p.styledComponentId)}),i&&Gp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Bc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var bc=function(e){return Object.assign(e,{isCss:!0})};function n1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||io(e))return bc(yn(Bc(il,oo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):bc(yn(Bc(r,t)))}function na(e,t,n){if(n===void 0&&(n=ar),!t)throw _n(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,n1.apply(void 0,oo([o],i,!1)))};return r.attrs=function(o){return na(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return na(e,t,je(je({},n),o))},r}var r1=function(e){return na(pg,e)},E=r1;bp.forEach(function(e){E[e]=r1(e)});function gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zs(n1.apply(void 0,oo([e],t,!1))),o=Vp(r);return new Zp(o,r)}const o1="/assets/doragacharla_lizy-D9u5FGKy.jpg",hg="/assets/doragacharla_lizy3-CXU4pxRz.jpg",We={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},mg=E.div`
  display: flex;
  justify-content: center;
    gap:30px;

  align-items: center;
  padding: 10px 20px; /* Adjusted padding for better spacing */
  background: ${e=>e.scrolled?We.spaceCadet:We.delftBlue};
  color: ${We.ghostWhite};
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: 50px;
  border: 2px solid ${We.periwinkle};
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
`,gg=E.div`
  font-size: ${e=>e.scrolled?"20px":"24px"};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${We.ghostWhite};
  background-image: url(${o1});
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
`,vg=E.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`,Wl=E.div`
  width: 25px;
  height: 3px;
  background-color: ${We.ghostWhite};
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
`,yg=E.div`
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
    background-color: ${We.spaceCadet};
    transform: ${e=>e.open?"translateX(0)":"translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`,xg=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${We.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`,wg=E.div`
  background-image: url(${hg});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`,Sg=E.div`
  color: ${We.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`,Do=E.a`
  color: ${We.ghostWhite};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${We.periwinkle};
  }

  &.active {
    color: ${We.periwinkle};
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${We.periwinkle};
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }
`,kg=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState(!1);ee.useEffect(()=>{const s=()=>{const a=window.scrollY;t(a>50);const u=["home","aboutme","knowmore","skills","projects","connect"],c=a;u.forEach(h=>{const g=document.getElementById(h);g&&g.offsetTop<=c+50&&r(h)})};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const l=s=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"}),i(!1)};return f.jsxs(mg,{scrolled:e,children:[f.jsx(gg,{scrolled:e}),f.jsxs(vg,{onClick:()=>i(!o),children:[f.jsx(Wl,{open:o}),f.jsx(Wl,{open:o}),f.jsx(Wl,{open:o})]}),f.jsxs(yg,{open:o,children:[f.jsxs(xg,{children:[f.jsx(wg,{}),f.jsx(Sg,{children:"Doragacharla Lizy"})]}),f.jsx(Do,{className:n==="home"?"active":"",onClick:()=>l("home"),children:"Home"}),f.jsx(Do,{className:n==="aboutme"?"active":"",onClick:()=>l("aboutme"),children:"About me"}),f.jsx(Do,{className:n==="knowmore"?"active":"",onClick:()=>l("knowmore"),children:"Know More"}),f.jsx(Do,{className:n==="connect"?"active":"",onClick:()=>l("connect"),children:"Connect"})]})]})};var i1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Uc=Pe.createContext&&Pe.createContext(i1),Eg=["attr","size","title"];function Cg(e,t){if(e==null)return{};var n=jg(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function Hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Li(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hc(Object(n),!0).forEach(function(r){_g(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _g(e,t,n){return t=Tg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tg(e){var t=zg(e,"string");return typeof t=="symbol"?t:t+""}function zg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function l1(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Li({key:n},t.attr),l1(t.child)))}function ue(e){return t=>Pe.createElement(Pg,Oi({attr:Li({},e.attr)},t),l1(e.child))}function Pg(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=Cg(e,Eg),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Pe.createElement("svg",Oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Li(Li({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return Uc!==void 0?Pe.createElement(Uc.Consumer,null,n=>t(n)):t(i1)}function Ng(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"},child:[]}]})(e)}function Rg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function Og(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(e)}function Lg(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function Ag(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(e)}function $g(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}var s1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:b1,()=>(()=>{var n={75:function(l){(function(){var s,a,u,c,h,g;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(s()-h)/1e6},a=process.hrtime,c=(s=function(){var x;return 1e9*(x=a())[0]+x[1]})(),g=1e9*process.uptime(),h=c-g):Date.now?(l.exports=function(){return Date.now()-u},u=Date.now()):(l.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(l,s,a)=>{for(var u=a(75),c=typeof window>"u"?a.g:window,h=["moz","webkit"],g="AnimationFrame",x=c["request"+g],y=c["cancel"+g]||c["cancelRequest"+g],w=0;!x&&w<h.length;w++)x=c[h[w]+"Request"+g],y=c[h[w]+"Cancel"+g]||c[h[w]+"CancelRequest"+g];if(!x||!y){var L=0,m=0,d=[];x=function(p){if(d.length===0){var S=u(),z=Math.max(0,16.666666666666668-(S-L));L=z+S,setTimeout(function(){var _=d.slice(0);d.length=0;for(var C=0;C<_.length;C++)if(!_[C].cancelled)try{_[C].callback(L)}catch(N){setTimeout(function(){throw N},0)}},Math.round(z))}return d.push({handle:++m,callback:p,cancelled:!1}),m},y=function(p){for(var S=0;S<d.length;S++)d[S].handle===p&&(d[S].cancelled=!0)}}l.exports=function(p){return x.call(c,p)},l.exports.cancel=function(){y.apply(c,arguments)},l.exports.polyfill=function(p){p||(p=c),p.requestAnimationFrame=x,p.cancelAnimationFrame=y}}},r={};function o(l){var s=r[l];if(s!==void 0)return s.exports;var a=r[l]={exports:{}};return n[l].call(a.exports,a,a.exports,o),a.exports}o.n=l=>{var s=l&&l.__esModule?()=>l.default:()=>l;return o.d(s,{a:s}),s},o.d=(l,s)=>{for(var a in s)o.o(s,a)&&!o.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:s[a]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s);var i={};return(()=>{o.d(i,{default:()=>Nn});var l=o(4087),s=o.n(l);const a=function(F){return new RegExp(/<[a-z][\s\S]*>/i).test(F)},u=function(F,A){return Math.floor(Math.random()*(A-F+1))+F};var c="TYPE_CHARACTER",h="REMOVE_CHARACTER",g="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",y="PAUSE_FOR",w="CALL_FUNCTION",L="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",p="CHANGE_CURSOR",S="PASTE_STRING",z="HTML_TAG";function _(F){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},_(F)}function C(F,A){var $=Object.keys(F);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(F);A&&(j=j.filter(function(O){return Object.getOwnPropertyDescriptor(F,O).enumerable})),$.push.apply($,j)}return $}function N(F){for(var A=1;A<arguments.length;A++){var $=arguments[A]!=null?arguments[A]:{};A%2?C(Object($),!0).forEach(function(j){W(F,j,$[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors($)):C(Object($)).forEach(function(j){Object.defineProperty(F,j,Object.getOwnPropertyDescriptor($,j))})}return F}function U(F){return function(A){if(Array.isArray(A))return I(A)}(F)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(F)||function(A,$){if(A){if(typeof A=="string")return I(A,$);var j=Object.prototype.toString.call(A).slice(8,-1);return j==="Object"&&A.constructor&&(j=A.constructor.name),j==="Map"||j==="Set"?Array.from(A):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?I(A,$):void 0}}(F)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(F,A){(A==null||A>F.length)&&(A=F.length);for(var $=0,j=new Array(A);$<A;$++)j[$]=F[$];return j}function Te(F,A){for(var $=0;$<A.length;$++){var j=A[$];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(F,yt(j.key),j)}}function W(F,A,$){return(A=yt(A))in F?Object.defineProperty(F,A,{value:$,enumerable:!0,configurable:!0,writable:!0}):F[A]=$,F}function yt(F){var A=function($,j){if(_($)!=="object"||$===null)return $;var O=$[Symbol.toPrimitive];if(O!==void 0){var v=O.call($,"string");if(_(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)}(F);return _(A)==="symbol"?A:String(A)}const Nn=function(){function F(j,O){var v=this;if(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")}(this,F),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){v.state.elements.container&&(v.state.elements.wrapper.className=v.options.wrapperClassName,v.state.elements.cursor.className=v.options.cursorClassName,v.state.elements.cursor.innerHTML=v.options.cursor,v.state.elements.container.innerHTML="",v.state.elements.container.appendChild(v.state.elements.wrapper),v.state.elements.container.appendChild(v.state.elements.cursor))}),W(this,"start",function(){return v.state.eventLoopPaused=!1,v.runEventLoop(),v}),W(this,"pause",function(){return v.state.eventLoopPaused=!0,v}),W(this,"stop",function(){return v.state.eventLoop&&((0,l.cancel)(v.state.eventLoop),v.state.eventLoop=null),v}),W(this,"pauseFor",function(P){return v.addEventToQueue(y,{ms:P}),v}),W(this,"typeOutAllStrings",function(){return typeof v.options.strings=="string"?(v.typeString(v.options.strings).pauseFor(v.options.pauseFor),v):(v.options.strings.forEach(function(P){v.typeString(P).pauseFor(v.options.pauseFor).deleteAll(v.options.deleteSpeed)}),v)}),W(this,"typeString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(P))return v.typeOutHTMLString(P,H);if(P){var K=(v.options||{}).stringSplitter,q=typeof K=="function"?K(P):P.split("");v.typeCharacters(q,H)}return v}),W(this,"pasteString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(P)?v.typeOutHTMLString(P,H,!0):(P&&v.addEventToQueue(S,{character:P,node:H}),v)}),W(this,"typeOutHTMLString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,K=arguments.length>2?arguments[2]:void 0,q=function(Be){var jt=document.createElement("div");return jt.innerHTML=Be,jt.childNodes}(P);if(q.length>0)for(var B=0;B<q.length;B++){var le=q[B],Xe=le.innerHTML;le&&le.nodeType!==3?(le.innerHTML="",v.addEventToQueue(L,{node:le,parentNode:H}),K?v.pasteString(Xe,le):v.typeString(Xe,le)):le.textContent&&(K?v.pasteString(le.textContent,H):v.typeString(le.textContent,H))}return v}),W(this,"deleteAll",function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return v.addEventToQueue(g,{speed:P}),v}),W(this,"changeDeleteSpeed",function(P){if(!P)throw new Error("Must provide new delete speed");return v.addEventToQueue(m,{speed:P}),v}),W(this,"changeDelay",function(P){if(!P)throw new Error("Must provide new delay");return v.addEventToQueue(d,{delay:P}),v}),W(this,"changeCursor",function(P){if(!P)throw new Error("Must provide new cursor");return v.addEventToQueue(p,{cursor:P}),v}),W(this,"deleteChars",function(P){if(!P)throw new Error("Must provide amount of characters to delete");for(var H=0;H<P;H++)v.addEventToQueue(h);return v}),W(this,"callFunction",function(P,H){if(!P||typeof P!="function")throw new Error("Callback must be a function");return v.addEventToQueue(w,{cb:P,thisArg:H}),v}),W(this,"typeCharacters",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(K){v.addEventToQueue(c,{character:K,node:H})}),v}),W(this,"removeCharacters",function(P){if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(){v.addEventToQueue(h)}),v}),W(this,"addEventToQueue",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.addEventToStateProperty(P,H,K,"eventQueue")}),W(this,"addReverseCalledEvent",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.options.loop?v.addEventToStateProperty(P,H,K,"reverseCalledEvents"):v}),W(this,"addEventToStateProperty",function(P,H){var K=arguments.length>2&&arguments[2]!==void 0&&arguments[2],q=arguments.length>3?arguments[3]:void 0,B={eventName:P,eventArgs:H||{}};return v.state[q]=K?[B].concat(U(v.state[q])):[].concat(U(v.state[q]),[B]),v}),W(this,"runEventLoop",function(){v.state.lastFrameTime||(v.state.lastFrameTime=Date.now());var P=Date.now(),H=P-v.state.lastFrameTime;if(!v.state.eventQueue.length){if(!v.options.loop)return;v.state.eventQueue=U(v.state.calledEvents),v.state.calledEvents=[],v.options=N({},v.state.initialOptions)}if(v.state.eventLoop=s()(v.runEventLoop),!v.state.eventLoopPaused){if(v.state.pauseUntil){if(P<v.state.pauseUntil)return;v.state.pauseUntil=null}var K,q=U(v.state.eventQueue),B=q.shift();if(!(H<=(K=B.eventName===x||B.eventName===h?v.options.deleteSpeed==="natural"?u(40,80):v.options.deleteSpeed:v.options.delay==="natural"?u(120,160):v.options.delay))){var le=B.eventName,Xe=B.eventArgs;switch(v.logInDevMode({currentEvent:B,state:v.state,delay:K}),le){case S:case c:var Be=Xe.character,jt=Xe.node,an=document.createTextNode(Be),Le=an;v.options.onCreateTextNode&&typeof v.options.onCreateTextNode=="function"&&(Le=v.options.onCreateTextNode(Be,an)),Le&&(jt?jt.appendChild(Le):v.state.elements.wrapper.appendChild(Le)),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:"TEXT_NODE",character:Be,node:Le}]);break;case h:q.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case y:var L1=B.eventArgs.ms;v.state.pauseUntil=Date.now()+parseInt(L1);break;case w:var vu=B.eventArgs,A1=vu.cb,$1=vu.thisArg;A1.call($1,{elements:v.state.elements});break;case L:var yu=B.eventArgs,dl=yu.node,fl=yu.parentNode;fl?fl.appendChild(dl):v.state.elements.wrapper.appendChild(dl),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:z,node:dl,parentNode:fl||v.state.elements.wrapper}]);break;case g:var D1=v.state.visibleNodes,pl=Xe.speed,mo=[];pl&&mo.push({eventName:m,eventArgs:{speed:pl,temp:!0}});for(var xu=0,I1=D1.length;xu<I1;xu++)mo.push({eventName:x,eventArgs:{removingCharacterNode:!1}});pl&&mo.push({eventName:m,eventArgs:{speed:v.options.deleteSpeed,temp:!0}}),q.unshift.apply(q,mo);break;case x:var F1=B.eventArgs.removingCharacterNode;if(v.state.visibleNodes.length){var hl=v.state.visibleNodes.pop(),M1=hl.type,go=hl.node,B1=hl.character;v.options.onRemoveNode&&typeof v.options.onRemoveNode=="function"&&v.options.onRemoveNode({node:go,character:B1}),go&&go.parentNode.removeChild(go),M1===z&&F1&&q.unshift({eventName:x,eventArgs:{}})}break;case m:v.options.deleteSpeed=B.eventArgs.speed;break;case d:v.options.delay=B.eventArgs.delay;break;case p:v.options.cursor=B.eventArgs.cursor,v.state.elements.cursor.innerHTML=B.eventArgs.cursor}v.options.loop&&(B.eventName===x||B.eventArgs&&B.eventArgs.temp||(v.state.calledEvents=[].concat(U(v.state.calledEvents),[B]))),v.state.eventQueue=q,v.state.lastFrameTime=P}}}),j)if(typeof j=="string"){var Q=document.querySelector(j);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=j;O&&(this.options=N(N({},this.options),O)),this.state.initialOptions=N({},this.options),this.init()}var A,$;return A=F,($=[{key:"init",value:function(){var j,O;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(O=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(O),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&Te(A.prototype,$),Object.defineProperty(A,"prototype",{writable:!1}),F}()})(),i.default})())})(s1);var Dg=s1.exports;const Ig=yd(Dg),Vc="/assets/doragacharla_lizy_resume-BY_d771d.pdf",Fg="/assets/star-BWEquncH.png";function Wc(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Qc(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Mg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function Bg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function bg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function Ug(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function Hg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Vg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Yc(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Wg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function Qg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function Yg(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Gg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Kg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z"},child:[]}]})(e)}function Xg(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65z"},child:[]}]})(e)}const qg="/assets/skill1-DYXWgzUC.jpg",Ai="/assets/skill2-B0rXQTLf.jpg",$i="/assets/skill3-CtRuSmJj.jpg",ra="/assets/skill4-WGpRyILJ.jpg",Jg=gt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-90deg);
  }
`,Zg=gt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
`,e2=gt`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,t2=gt`
  from {
    transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,n2=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  overflow: hidden;
`,r2=E.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,o2=E.div`
  position: relative;
  width: 50%;
  height: 400px;
  perspective: 1000px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
  width: 80%;
  }

  @media (max-width: 480px) {
  width: 80%;
  }
`,i2=E.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(${e=>e.rotation}deg);
  transition: transform 0.5s;
  animation: ${e=>e.slideIn?e.direction==="up"?e2:t2:e.direction==="up"?Jg:Zg} 0.5s forwards;
`,du=E.div`
  position: absolute;
  width: auto;
  height: auto;
  border-radius: 15px;
border:2px solid #fff
;  overflow: hidden;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  backface-visibility: hidden;padding:20px;
  
  @media (max-width: 768px) {
  flex-direction:column;
  }
`,l2=E(du)`
  transform: rotateX(0deg) translateZ(200px);
`,s2=E(du)`
  transform: rotateX(180deg) translateZ(200px);
`,Gc=E(du)`
  transform: rotateY(${e=>e.rotate}deg) translateZ(200px);
`,a2=E.div`
  padding: 10px;
  width: 100%;
  max-width: 600px;
`,u2=E.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,c2=E.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,d2=E.div`
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
`,f2=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Kc=E.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2em;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,p2=E.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Io=[f.jsx(Gg,{}),f.jsx(Qg,{}),f.jsx(Ug,{}),f.jsx(Mg,{})],h2=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(!0),[o,i]=ee.useState("up"),[l,s]=ee.useState(0),a=[{title:"Aspiring Learner",paragraph:"I am an enthusiastic learner exploring various domains to broaden my skills.",image:qg,icon:Io[0]},{title:"Frontend Developer",paragraph:"I specialize in creating user interfaces and experiences using modern frontend technologies.",image:Ai,icon:Io[1]},{title:"Data Analyst",paragraph:"I analyze data to derive insights and make informed decisions for business growth.",image:$i,icon:Io[2]},{title:"Future Learner",paragraph:"I aspire to continually learn and adapt to new technologies and challenges.",image:ra,icon:Io[3]}];ee.useEffect(()=>{const h=setInterval(()=>{r(!1),i("up"),setTimeout(()=>{t(g=>(g+1)%a.length),s(g=>g-90),r(!0)},500)},1e4);return()=>clearInterval(h)},[a.length]);const u=()=>{r(!1),i("up"),setTimeout(()=>{t(h=>(h+1)%a.length),s(h=>h-90),r(!0)},500)},c=()=>{r(!1),i("down"),setTimeout(()=>{t(h=>(h-1+a.length)%a.length),s(h=>h+90),r(!0)},500)};return f.jsxs(n2,{id:"aboutme",children:[f.jsx(r2,{children:"About Me"}),f.jsx(o2,{children:f.jsxs(i2,{rotation:l,slideIn:n,direction:o,children:[f.jsxs(l2,{children:[f.jsxs(a2,{children:[f.jsxs(u2,{children:[a[e].icon," ",a[e].title]}),f.jsx(c2,{children:a[e].paragraph})]}),f.jsx(d2,{children:f.jsx(f2,{src:a[e].image,alt:a[e].title})})]}),f.jsx(s2,{}),f.jsx(Gc,{rotate:"90deg"}),f.jsx(Gc,{rotate:"-90deg"})]})}),f.jsxs(p2,{children:[f.jsx(Kc,{onClick:c,children:f.jsx(Xg,{})}),f.jsx(Kc,{onClick:u,children:f.jsx(Kg,{})})]})]})},ut={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},m2=gt`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,g2=gt`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
`,v2=E.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  height: 80vh;
  color: ${ut.ghostWhite};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    text-align: center;
  }
`,y2=E.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,x2=E.p`
  font-size: 1.2em;
  max-width: 80%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,w2=E.div`
  z-index: 1;
  max-width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`,S2=E.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    top:50px;
  }
`,k2=E.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${m2} 20s linear infinite;
  transform: rotate(-45deg);

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius:50px;
    background: url(${Fg}) center/50% no-repeat;
    box-shadow: 0 0 0 5px ${ut.spaceCadet};
    animation: ${g2} 2s linear infinite;
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
`,E2=E.div`
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
`,C2=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`,j2=E.div`
  font-size: 2.2em;
  color: ${ut.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`,_2=E.div`
  display: flex;
  align-items: center;
`,Fo=E.a`
  font-size: 2.5em;
  color: ${ut.ghostWhite};
  cursor: pointer;
  margin-right: 20px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${ut.periwinkle};
    transform: scale(1.2);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Ql=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  color: ${ut.gunmetal};
  font-weight: 600;
  background-color: ${ut.ghostWhite};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${ut.spaceCadet};
    color: ${ut.ghostWhite};
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
  color: ${ut.ghostWhite};
  z-index: 10;

  &:after {
    content: 'v';
  }

  &:hover {
    color: ${ut.delftBlue};
  }
`;const T2=()=>{ee.useEffect(()=>{const t=new Ig("#typing-effect-container",{strings:["Front End Developer","Data Analyst"],autoStart:!0,loop:!0,deleteSpeed:20,delay:80});return()=>{t.stop()}},[]);const e=()=>{const t=document.getElementById("aboutme");t&&t.scrollIntoView({behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsxs(v2,{id:"home",children:[f.jsxs(S2,{children:[f.jsx(k2,{}),f.jsx(E2,{children:f.jsx(C2,{src:o1,alt:"Profile"})})]}),f.jsxs(w2,{children:[f.jsx(y2,{children:"Hi, I'm Lizy Doragacharla"}),f.jsx(j2,{id:"typing-effect-container"}),f.jsx(x2,{children:"I'm a passionate Front End Developer and Data Analyst with a love for creating engaging user experiences and deriving insights from data."}),f.jsxs(_2,{children:[f.jsx(Fo,{href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Lg,{})}),f.jsx(Fo,{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Rg,{})}),f.jsx(Fo,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Og,{})}),f.jsx(Fo,{href:"https://twitter.com/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(Ag,{})})]}),f.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[f.jsx(Ql,{onClick:e,children:"About Me"}),f.jsx(Ql,{href:Vc,download:!0,children:f.jsx($g,{})}),f.jsx(Ql,{href:Vc,target:"_blank",rel:"noopener noreferrer",children:f.jsx(Ng,{})})]})]})]}),f.jsx(h2,{})]})};function a1(e,t){return function(){return e.apply(t,arguments)}}const{toString:z2}=Object.prototype,{getPrototypeOf:fu}=Object,ll=(e=>t=>{const n=z2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=e=>(e=e.toLowerCase(),t=>ll(t)===e),sl=e=>t=>typeof t===e,{isArray:hr}=Array,lo=sl("undefined");function P2(e){return e!==null&&!lo(e)&&e.constructor!==null&&!lo(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const u1=vt("ArrayBuffer");function N2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&u1(e.buffer),t}const R2=sl("string"),tt=sl("function"),c1=sl("number"),al=e=>e!==null&&typeof e=="object",O2=e=>e===!0||e===!1,ni=e=>{if(ll(e)!=="object")return!1;const t=fu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},L2=vt("Date"),A2=vt("File"),$2=vt("Blob"),D2=vt("FileList"),I2=e=>al(e)&&tt(e.pipe),F2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=ll(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},M2=vt("URLSearchParams"),[B2,b2,U2,H2]=["ReadableStream","Request","Response","Headers"].map(vt),V2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function po(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function d1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const f1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,p1=e=>!lo(e)&&e!==f1;function oa(){const{caseless:e}=p1(this)&&this||{},t={},n=(r,o)=>{const i=e&&d1(t,o)||o;ni(t[i])&&ni(r)?t[i]=oa(t[i],r):ni(r)?t[i]=oa({},r):hr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&po(arguments[r],n);return t}const W2=(e,t,n,{allOwnKeys:r}={})=>(po(t,(o,i)=>{n&&tt(o)?e[i]=a1(o,n):e[i]=o},{allOwnKeys:r}),e),Q2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Y2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},G2=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&fu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},K2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},X2=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!c1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},q2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fu(Uint8Array)),J2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Z2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ev=vt("HTMLFormElement"),tv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Xc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nv=vt("RegExp"),h1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};po(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},rv=e=>{h1(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ov=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},iv=()=>{},lv=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Yl="abcdefghijklmnopqrstuvwxyz",qc="0123456789",m1={DIGIT:qc,ALPHA:Yl,ALPHA_DIGIT:Yl+Yl.toUpperCase()+qc},sv=(e=16,t=m1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function av(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const uv=e=>{const t=new Array(10),n=(r,o)=>{if(al(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=hr(r)?[]:{};return po(r,(l,s)=>{const a=n(l,o+1);!lo(a)&&(i[s]=a)}),t[o]=void 0,i}}return r};return n(e,0)},cv=vt("AsyncFunction"),dv=e=>e&&(al(e)||tt(e))&&tt(e.then)&&tt(e.catch),k={isArray:hr,isArrayBuffer:u1,isBuffer:P2,isFormData:F2,isArrayBufferView:N2,isString:R2,isNumber:c1,isBoolean:O2,isObject:al,isPlainObject:ni,isReadableStream:B2,isRequest:b2,isResponse:U2,isHeaders:H2,isUndefined:lo,isDate:L2,isFile:A2,isBlob:$2,isRegExp:nv,isFunction:tt,isStream:I2,isURLSearchParams:M2,isTypedArray:q2,isFileList:D2,forEach:po,merge:oa,extend:W2,trim:V2,stripBOM:Q2,inherits:Y2,toFlatObject:G2,kindOf:ll,kindOfTest:vt,endsWith:K2,toArray:X2,forEachEntry:J2,matchAll:Z2,isHTMLForm:ev,hasOwnProperty:Xc,hasOwnProp:Xc,reduceDescriptors:h1,freezeMethods:rv,toObjectSet:ov,toCamelCase:tv,noop:iv,toFiniteNumber:lv,findKey:d1,global:f1,isContextDefined:p1,ALPHABET:m1,generateString:sv,isSpecCompliantForm:av,toJSONObject:uv,isAsyncFn:cv,isThenable:dv};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}k.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const g1=D.prototype,v1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{v1[e]={value:e}});Object.defineProperties(D,v1);Object.defineProperty(g1,"isAxiosError",{value:!0});D.from=(e,t,n,r,o,i)=>{const l=Object.create(g1);return k.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),D.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const fv=null;function ia(e){return k.isPlainObject(e)||k.isArray(e)}function y1(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Jc(e,t,n){return e?e.concat(t).map(function(o,i){return o=y1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function pv(e){return k.isArray(e)&&!e.some(ia)}const hv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function ul(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,L){return!k.isUndefined(L[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(!a&&k.isBlob(y))throw new D("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,L){let m=y;if(y&&!L&&typeof y=="object"){if(k.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&pv(y)||(k.isFileList(y)||k.endsWith(w,"[]"))&&(m=k.toArray(y)))return w=y1(w),m.forEach(function(p,S){!(k.isUndefined(p)||p===null)&&t.append(l===!0?Jc([w],S,i):l===null?w:w+"[]",u(p))}),!1}return ia(y)?!0:(t.append(Jc(L,w,i),u(y)),!1)}const h=[],g=Object.assign(hv,{defaultVisitor:c,convertValue:u,isVisitable:ia});function x(y,w){if(!k.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),k.forEach(y,function(m,d){(!(k.isUndefined(m)||m===null)&&o.call(t,m,k.isString(d)?d.trim():d,w,g))===!0&&x(m,w?w.concat(d):[d])}),h.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Zc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pu(e,t){this._pairs=[],e&&ul(e,this,t)}const x1=pu.prototype;x1.append=function(t,n){this._pairs.push([t,n])};x1.toString=function(t){const n=t?function(r){return t.call(this,r,Zc)}:Zc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function mv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function w1(e,t,n){if(!t)return e;const r=n&&n.encode||mv,o=n&&n.serialize;let i;if(o?i=o(t,n):i=k.isURLSearchParams(t)?t.toString():new pu(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ed{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const S1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gv=typeof URLSearchParams<"u"?URLSearchParams:pu,vv=typeof FormData<"u"?FormData:null,yv=typeof Blob<"u"?Blob:null,xv={isBrowser:!0,classes:{URLSearchParams:gv,FormData:vv,Blob:yv},protocols:["http","https","file","blob","url","data"]},hu=typeof window<"u"&&typeof document<"u",wv=(e=>hu&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Sv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kv=hu&&window.location.href||"http://localhost",Ev=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hu,hasStandardBrowserEnv:wv,hasStandardBrowserWebWorkerEnv:Sv,origin:kv},Symbol.toStringTag,{value:"Module"})),pt={...Ev,...xv};function Cv(e,t){return ul(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return pt.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function jv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _v(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function k1(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&k.isArray(o)?o.length:l,a?(k.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!s):((!o[l]||!k.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&k.isArray(o[l])&&(o[l]=_v(o[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(jv(r),o,n,0)}),n}return null}function Tv(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ho={transitional:S1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(k1(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Cv(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return ul(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Tv(t)):t}],transformResponse:[function(t){const n=this.transitional||ho.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?D.from(s,D.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ho.headers[e]={}});const zv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pv=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&zv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},td=Symbol("internals");function Cr(e){return e&&String(e).trim().toLowerCase()}function ri(e){return e===!1||e==null?e:k.isArray(e)?e.map(ri):String(e)}function Nv(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gl(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function Ov(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Lv(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class Me{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const c=Cr(a);if(!c)throw new Error("header name must be a non-empty string");const h=k.findKey(o,c);(!h||o[h]===void 0||u===!0||u===void 0&&o[h]!==!1)&&(o[h||a]=ri(s))}const l=(s,a)=>k.forEach(s,(u,c)=>i(u,c,a));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!Rv(t))l(Pv(t),n);else if(k.isHeaders(t))for(const[s,a]of t.entries())i(a,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Nv(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Cr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Gl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Cr(l),l){const s=k.findKey(r,l);s&&(!n||Gl(r,r[s],s,n))&&(delete r[s],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Gl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,i)=>{const l=k.findKey(r,i);if(l){n[l]=ri(o),delete n[i];return}const s=t?Ov(i):String(i).trim();s!==i&&delete n[i],n[s]=ri(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[td]=this[td]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=Cr(l);r[s]||(Lv(o,l),r[s]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}}Me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Me.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Me);function Kl(e,t){const n=this||ho,r=t||n,o=Me.from(r.headers);let i=r.data;return k.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function E1(e){return!!(e&&e.__CANCEL__)}function mr(e,t,n){D.call(this,e??"canceled",D.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(mr,D,{__CANCEL__:!0});function C1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Av(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $v(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];l||(l=u),n[o]=a,r[o]=u;let h=i,g=0;for(;h!==o;)g+=n[h++],h=h%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=c&&u-c;return x?Math.round(g*1e3/x):void 0}}function Dv(e,t){let n=0;const r=1e3/t;let o=null;return function(){const l=this===!0,s=Date.now();if(l||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Di=(e,t,n=3)=>{let r=0;const o=$v(50,250);return Dv(i=>{const l=i.loaded,s=i.lengthComputable?i.total:void 0,a=l-r,u=o(a),c=l<=s;r=l;const h={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-l)/u:void 0,event:i,lengthComputable:s!=null};h[t?"download":"upload"]=!0,e(h)},n)},Iv=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const s=k.isString(l)?o(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),Fv=pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const l=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),k.isString(r)&&l.push("path="+r),k.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Mv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bv(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function j1(e,t){return e&&!Mv(t)?Bv(e,t):t}const nd=e=>e instanceof Me?{...e}:e;function Tn(e,t){t=t||{};const n={};function r(u,c,h){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:h},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function o(u,c,h){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function i(u,c){if(!k.isUndefined(c))return r(void 0,c)}function l(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,h){if(h in t)return r(u,c);if(h in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,c)=>o(nd(u),nd(c),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=a[c]||o,g=h(e[c],t[c],c);k.isUndefined(g)&&h!==s||(n[c]=g)}),n}const _1=e=>{const t=Tn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;t.headers=l=Me.from(l),t.url=w1(j1(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(k.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[u,...c]=a?a.split(";").map(h=>h.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...c].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Iv(t.url))){const u=o&&i&&Fv.read(i);u&&l.set(o,u)}return t},bv=typeof XMLHttpRequest<"u",Uv=bv&&function(e){return new Promise(function(n,r){const o=_1(e);let i=o.data;const l=Me.from(o.headers).normalize();let{responseType:s}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function h(){if(!c)return;const x=Me.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};C1(function(m){n(m),u()},function(m){r(m),u()},w),c=null}"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new D("Request aborted",D.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new D("Network Error",D.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||S1;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new D(y,w.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,o,c)),c=null},i===void 0&&l.setContentType(null),"setRequestHeader"in c&&k.forEach(l.toJSON(),function(y,w){c.setRequestHeader(w,y)}),k.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),s&&s!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Di(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Di(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=x=>{c&&(r(!x||x.type?new mr(null,e,c):x),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const g=Av(o.url);if(g&&pt.protocols.indexOf(g)===-1){r(new D("Unsupported protocol "+g+":",D.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Hv=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,l();const u=a instanceof Error?a:this.reason;n.abort(u instanceof D?u:new mr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new D(`timeout ${t} of ms exceeded`,D.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=l,[s,()=>{i&&clearTimeout(i),i=null}]},Vv=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Wv=async function*(e,t,n){for await(const r of e)yield*Vv(ArrayBuffer.isView(r)?r:await n(String(r)),t)},rd=(e,t,n,r,o)=>{const i=Wv(e,t,o);let l=0;return new ReadableStream({type:"bytes",async pull(s){const{done:a,value:u}=await i.next();if(a){s.close(),r();return}let c=u.byteLength;n&&n(l+=c),s.enqueue(new Uint8Array(u))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},od=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},cl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",T1=cl&&typeof ReadableStream=="function",la=cl&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Qv=T1&&(()=>{let e=!1;const t=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),id=64*1024,sa=T1&&!!(()=>{try{return k.isReadableStream(new Response("").body)}catch{}})(),Ii={stream:sa&&(e=>e.body)};cl&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ii[t]&&(Ii[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new D(`Response type '${t}' is not supported`,D.ERR_NOT_SUPPORT,r)})})})(new Response);const Yv=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(k.isArrayBufferView(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await la(e)).byteLength},Gv=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??Yv(t)},Kv=cl&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:u,headers:c,withCredentials:h="same-origin",fetchOptions:g}=_1(e);u=u?(u+"").toLowerCase():"text";let[x,y]=o||i||l?Hv([o,i],l):[],w,L;const m=()=>{!w&&setTimeout(()=>{x&&x.unsubscribe()}),w=!0};let d;try{if(a&&Qv&&n!=="get"&&n!=="head"&&(d=await Gv(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),C;k.isFormData(r)&&(C=_.headers.get("content-type"))&&c.setContentType(C),_.body&&(r=rd(_.body,id,od(d,Di(a)),null,la))}k.isString(h)||(h=h?"cors":"omit"),L=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let p=await fetch(L);const S=sa&&(u==="stream"||u==="response");if(sa&&(s||S)){const _={};["status","statusText","headers"].forEach(N=>{_[N]=p[N]});const C=k.toFiniteNumber(p.headers.get("content-length"));p=new Response(rd(p.body,id,s&&od(C,Di(s,!0)),S&&m,la),_)}u=u||"text";let z=await Ii[k.findKey(Ii,u)||"text"](p,e);return!S&&m(),y&&y(),await new Promise((_,C)=>{C1(_,C,{data:z,headers:Me.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:L})})}catch(p){throw m(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,e,L),{cause:p.cause||p}):D.from(p,p&&p.code,e,L)}}),aa={http:fv,xhr:Uv,fetch:Kv};k.forEach(aa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ld=e=>`- ${e}`,Xv=e=>k.isFunction(e)||e===null||e===!1,z1={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!Xv(n)&&(r=aa[(l=String(n)).toLowerCase()],r===void 0))throw new D(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(ld).join(`
`):" "+ld(i[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:aa};function Xl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr(null,e)}function sd(e){return Xl(e),e.headers=Me.from(e.headers),e.data=Kl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z1.getAdapter(e.adapter||ho.adapter)(e).then(function(r){return Xl(e),r.data=Kl.call(e,e.transformResponse,r),r.headers=Me.from(r.headers),r},function(r){return E1(r)||(Xl(e),r&&r.response&&(r.response.data=Kl.call(e,e.transformResponse,r.response),r.response.headers=Me.from(r.response.headers))),Promise.reject(r)})}const P1="1.7.2",mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ad={};mu.transitional=function(t,n,r){function o(i,l){return"[Axios v"+P1+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new D(o(l," has been removed"+(n?" in "+n:"")),D.ERR_DEPRECATED);return n&&!ad[l]&&(ad[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};function qv(e,t,n){if(typeof e!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new D("option "+i+" must be "+a,D.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}}const ua={assertOptions:qv,validators:mu},Mt=ua.validators;class xn{constructor(t){this.defaults=t,this.interceptors={request:new ed,response:new ed}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Tn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ua.assertOptions(r,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:ua.assertOptions(o,{encode:Mt.function,serialize:Mt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Me.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,h=0,g;if(!a){const y=[sd.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),g=y.length,c=Promise.resolve(n);h<g;)c=c.then(y[h++],y[h++]);return c}g=s.length;let x=n;for(h=0;h<g;){const y=s[h++],w=s[h++];try{x=y(x)}catch(L){w.call(this,L);break}}try{c=sd.call(this,x)}catch(y){return Promise.reject(y)}for(h=0,g=u.length;h<g;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=Tn(this.defaults,t);const n=j1(t.baseURL,t.url);return w1(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(n,r){return this.request(Tn(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,s){return this.request(Tn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}xn.prototype[t]=n(),xn.prototype[t+"Form"]=n(!0)});class gu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new mr(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new gu(function(o){t=o}),cancel:t}}}function Jv(e){return function(n){return e.apply(null,n)}}function Zv(e){return k.isObject(e)&&e.isAxiosError===!0}const ca={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ca).forEach(([e,t])=>{ca[t]=e});function N1(e){const t=new xn(e),n=a1(xn.prototype.request,t);return k.extend(n,xn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return N1(Tn(e,o))},n}const fe=N1(ho);fe.Axios=xn;fe.CanceledError=mr;fe.CancelToken=gu;fe.isCancel=E1;fe.VERSION=P1;fe.toFormData=ul;fe.AxiosError=D;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Jv;fe.isAxiosError=Zv;fe.mergeConfig=Tn;fe.AxiosHeaders=Me;fe.formToJSON=e=>k1(k.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=z1.getAdapter;fe.HttpStatusCode=ca;fe.default=fe;const ur={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},ey=gt`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`,ty=E.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${ey} 2.5s infinite;
    }
`,ny=gt`
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
`,ry=E.section`
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
`,oy=E.section`
    color: #e0e1ddff; /* platinum */
`,iy=E.div`
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
    animation: ${ny} 2s linear infinite;
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
`;const ly=E.h2`
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
`,sy=E.p`
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
`,ay=E.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,uy=E.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,cy=E.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,dy=E.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`,ql=E.a`
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
`,fy=E.div`
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
`,py=E.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`,ud=E.input`
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
`,hy=E.textarea`
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
`,cd=E.button`
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
`,my=gt`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`,gy=gt`
    from { width: 0; }
    to { width: 100%; }
`,vy=E.p`
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
            animation: ${my} 0.3s ease forwards;
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
            animation: ${gy} 1s steps(20, end) forwards;
        }
    }
`,yy=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:f.jsx("path",{fill:"#000",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),xy=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 64 64",children:f.jsx("path",{fill:"#000",d:"M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"})}),wy=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 30 30",children:f.jsx("path",{fill:"#000",d:"M 25.921875 7.0976563 C 24.996094 7.5429688 24 7.8125 23 7.9726563 C 24.023438 7.3710938 24.75 6.3984375 25.085938 5.2539063 C 24.082031 5.8125 23 6.234375 21.859375 6.4765625 C 20.894531 5.4726563 19.511719 4.875 18 4.875 C 15.367188 4.875 13.25 6.9921875 13.25 9.625 C 13.25 10.007813 13.285156 10.375 13.367188 10.726563 C 9.373047 10.527344 5.7851563 8.609375 3.4257813 5.6523438 C 3.015625 6.3320313 2.78125 7.1171875 2.78125 7.9492188 C 2.78125 9.5078125 3.601563 10.875 4.8242188 11.652344 C 4.0117188 11.628906 3.25 11.402344 2.5898438 11.019531 C 2.5898438 11.039063 2.5898438 11.0625 2.5898438 11.089844 C 2.5898438 13.386719 4.2382813 15.28125 6.4101563 15.730469 C 6.015625 15.839844 5.5976563 15.894531 5.1679688 15.894531 C 4.8632813 15.894531 4.5664063 15.863281 4.28125 15.804688 C 4.8710938 17.652344 6.605469 19 8.6523438 19.035156 C 7.039063 20.246094 5.007813 20.941406 2.8125 20.941406 C 2.4726563 20.941406 2.1367188 20.921875 1.8007813 20.882813 C 3.867188 22.195313 6.34375 22.875 9 22.875 C 18 22.875 23.222656 15.96875 23.222656 10.167969 C 23.222656 9.9726563 23.21875 9.78125 23.210938 9.5859375 C 24.214844 8.8632813 25.097656 7.9609375 25.921875 7.0976563 Z"})}),Sy=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState({name:"",email:"",message:""}),l=u=>{const{name:c,value:h}=u.target;i(g=>({...g,[c]:h}))},s=async u=>{u.preventDefault(),t(!0);try{(await fe.post("https://api.web3forms.com/submit",{access_key:"8e4c1901-d8c1-4df8-aa46-700466520582",...o})).data.success?(r("Thank you for your message. We will get back to you soon."),i({name:"",email:"",message:""}),setTimeout(()=>r(""),5e3)):r("An error occurred. Please try again later.")}catch(c){console.error("Submission error:",c),r("An error occurred. Please try again later.")}t(!1)},a=()=>{window.location.href="mailto:lizdoragacharla@gmail.com"};return f.jsx(oy,{id:"connect",children:f.jsxs(ry,{children:[f.jsxs(fy,{children:[f.jsxs(py,{onSubmit:s,children:[f.jsx(ud,{type:"text",name:"name",placeholder:"Your Name",value:o.name,onChange:l,required:!0}),f.jsx(ud,{type:"email",name:"email",placeholder:"Your Email",value:o.email,onChange:l,required:!0}),f.jsx(hy,{name:"message",placeholder:"Your Message",value:o.message,onChange:l,required:!0}),f.jsx(cd,{type:"submit",disabled:e,children:e?"Sending...":"Send Message"}),f.jsx(cd,{onClick:a,children:"Connect via Email"})]}),n&&f.jsxs(vy,{className:n.includes("Thank")?"success":"",children:[n.includes("Thank")&&f.jsx(Hg,{}),n]})]}),f.jsxs(iy,{children:[f.jsx(ty,{role:"img","aria-label":"Wave emoji",children:"👋"}),f.jsx(ly,{children:"LET'S CONNECT"}),f.jsx(sy,{children:"Reach out to us for any inquiries or collaborations. We're excited to hear from you!"}),f.jsxs(ay,{children:[f.jsx(uy,{children:"lizdoragacharla@gmail.com"}),f.jsx(cy,{children:"+1234567890"}),f.jsxs(dy,{children:[f.jsx(ql,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(yy,{})}),f.jsx(ql,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(xy,{})}),f.jsx(ql,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(wy,{})})]})]})]})]})})},R1=(()=>{const e={};return{on(t,n){e[t]||(e[t]=[]),e[t].push(n)},emit(t,n){e[t]&&e[t].forEach(r=>r(n))}}})(),ht={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},ky=gt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ey=E.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${ky} 15s ease infinite;    
    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,Cy=E.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,jy=E.div`
    @media (min-width: 769px) {
        display: none;
    }
`,Jl=E.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: ${ht.platinum};
    @media (max-width: 768px) {
        border-bottom: 1px solid ${ht.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,Zl=E.h3`
    color: ${ht.yinmnBlue};
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
        background: ${ht.yinmnBlue};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:before {
        width: 100%;
    }
`,Ee=E.a`
    color: ${ht.platinum};
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${ht.yinmnBlue};
        text-decoration: underline;
    }
`,es=E.div`
    color: ${ht.platinum};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.3s ease;
    background: ${e=>e.isOpen?ht.yinmnBlue:"transparent"};

    &:hover {
        background: ${ht.yinmnBlue};
    }
`,ts=E.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    color: ${ht.platinum};
    background: ${ht.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,_y=()=>{const[e,t]=ee.useState(null),n=o=>{t(i=>i===o?null:o)},r=o=>{R1.emit("activateTab",o),document.getElementById("knowmore").scrollIntoView({behavior:"smooth"})};return f.jsxs(Ey,{children:[f.jsxs(Cy,{children:[f.jsxs(Jl,{children:[f.jsx(Zl,{children:"My Details"}),f.jsx("div",{children:"Name: Your Name"}),f.jsx("div",{children:"Location: Your City, Country"}),f.jsx("div",{children:"Email: your-email@example.com"}),f.jsx("div",{children:"Phone: +123-456-7890"})]}),f.jsxs(Jl,{children:[f.jsx(Zl,{children:"Topics"}),f.jsx(Ee,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(Ee,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(Ee,{onClick:()=>r("Education"),children:"Education"}),f.jsx(Ee,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(Ee,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsxs(Jl,{children:[f.jsx(Zl,{children:"Connect"}),f.jsxs(Ee,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Qc,{})," LinkedIn"]}),f.jsxs(Ee,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Wc,{})," GitHub"]}),f.jsxs(Ee,{href:"mailto:your-email@example.com",children:[f.jsx(Yc,{})," Let's Connect"]})]})]}),f.jsxs(jy,{children:[f.jsx(es,{isOpen:e==="details",onClick:()=>n("details"),children:"My Details"}),f.jsxs(ts,{isOpen:e==="details",children:[f.jsx("div",{children:"Name: Your Name"}),f.jsx("div",{children:"Location: Your City, Country"}),f.jsx("div",{children:"Email: your-email@example.com"}),f.jsx("div",{children:"Phone: +123-456-7890"})]}),f.jsx(es,{isOpen:e==="topics",onClick:()=>n("topics"),children:"Topics"}),f.jsxs(ts,{isOpen:e==="topics",children:[f.jsx(Ee,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(Ee,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(Ee,{onClick:()=>r("Education"),children:"Education"}),f.jsx(Ee,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(Ee,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsx(es,{isOpen:e==="connect",onClick:()=>n("connect"),children:"Connect"}),f.jsxs(ts,{isOpen:e==="connect",children:[f.jsxs(Ee,{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Qc,{})," LinkedIn"]}),f.jsxs(Ee,{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Wc,{})," GitHub"]}),f.jsxs(Ee,{href:"mailto:your-email@example.com",children:[f.jsx(Yc,{})," Let's Connect"]})]})]})]})},dd="/assets/python-nQr6i-K4.webp",fd="/assets/skill5-7UV-F5Oz.jpg",pd="/assets/skill6-Cf5dfFs0.jpg",oi={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},Ty=E.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1dd;
`,zy=E.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,Py=E.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,Ny=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, ${oi.spaceCadet} 30%, ${oi.delftBlue} 100%);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 2px solid ${oi.ghostWhite};

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 480px) {
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
    }
`,Ry=E.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }
`,Oy=E.p`
    font-size: 1em;
    margin-top: 10px;
    color: ${oi.ghostWhite};
margin-bottom:0;
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`,Ly=[{id:1,image:dd,title:"Python"},{id:2,image:Ai,title:"Skill 2"},{id:3,image:$i,title:"Skill 3"},{id:4,image:ra,title:"Skill 4"},{id:5,image:fd,title:"Skill 5"},{id:6,image:pd,title:"Skill 6"},{id:7,image:dd,title:"Python"},{id:8,image:Ai,title:"Skill 2"},{id:9,image:$i,title:"Skill 3"},{id:10,image:ra,title:"Skill 4"},{id:11,image:fd,title:"Skill 5"},{id:12,image:pd,title:"Skill 6"}],hd=()=>f.jsxs(Ty,{children:[f.jsx(zy,{children:"Skills"}),f.jsx(Py,{children:Ly.map(e=>f.jsxs(Ny,{children:[f.jsx(Ry,{src:e.image,alt:e.title}),f.jsx(Oy,{children:e.title})]},e.id))})]}),Ay="/assets/aws_certificate-Dtc7fppI.pdf",$y="/assets/nptel_certificate-6YXWs-pj.pdf",Dy="/assets/coursera_certificate-C5bS3mlL.pdf",Iy={colors:{gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"}},Fy=E.div`
  padding: 50px 20px;
  color: ${({theme:e})=>e.colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,My=E.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,By=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,by=E.div`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.spaceCadet} 30%, ${({theme:e})=>e.colors.delftBlue} 100%);
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
    padding: 15px;
  }
`,Uy=E.div`
  flex-grow: 1;
`,Hy=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Vy=E.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,Wy=E.p`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,Qy=E.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
    justify-content:center;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,md=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${({theme:e})=>e.colors.gunmetal};
  font-weight: 600;
  background-color: ${({theme:e})=>e.colors.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${({theme:e})=>e.colors.gunmetal};

  &:hover {
    background-color: ${({theme:e})=>e.colors.spaceCadet};
    color: ${({theme:e})=>e.colors.ghostWhite};
    border-color: ${({theme:e})=>e.colors.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`,Yy=[{id:"aws-certificate",title:"AWS - Academy Foundation",date:"OCT-DEC 2022",description:"Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.",downloadLink:Ay},{id:"nptel-certificate",title:"NPTEL - Internet of Things",date:"JUL-OCT 2022",description:"Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.",downloadLink:$y},{id:"coursera-certificate",title:"Coursera - Data Science",date:"FEB-APR 2022",description:"Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",downloadLink:Dy}],Gy=()=>f.jsx(fg,{theme:Iy,children:f.jsxs(Fy,{children:[f.jsx(My,{children:"Certificates"}),f.jsx(By,{children:Yy.map(e=>f.jsxs(by,{children:[f.jsxs(Uy,{children:[f.jsx(Hy,{children:e.title}),f.jsxs(Vy,{children:["Date: ",e.date]}),f.jsx(Wy,{children:e.description})]}),f.jsxs(Qy,{children:[e.downloadLink&&f.jsx(md,{as:"a",href:e.downloadLink,download:`${e.title.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),f.jsx(md,{as:"a",href:e.downloadLink,target:e.downloadLink?"_blank":void 0,rel:e.downloadLink?"noopener noreferrer":void 0,children:"View"})]})]},e.id))})]})}),Ky=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
`,Xy=E.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,qy=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Jy=E.div`
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
`,Zy=E.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`,e3=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,t3=E.div`
`,n3=E.div`
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
`;const r3=()=>{const[e,t]=ee.useState(0),n=[{title:"SSC",duration:"2017-2018",institution:"Keshava Reddy High School",details:"Achieved 10.00 GPA"},{title:"Intermediate (MPC)",duration:"2018-2020",institution:"Tirumala Junior College, Katheru",details:"Achieved 96% marks"},{title:"B.Tech (CSE)",duration:"2020-2024",institution:"Adikavi Nannaya University, Rajanagaram",details:"Achieved 8.8 CGPA"}];ee.useEffect(()=>{const o=setInterval(()=>{t(i=>(i+1)%n.length)},3e3);return()=>clearInterval(o)},[n.length]);const r=o=>{t(o)};return f.jsxs(Ky,{children:[f.jsx(Xy,{children:"Education Journey"}),f.jsx(qy,{children:n.map((o,i)=>f.jsxs(Jy,{isActive:i===e,onClick:()=>r(i),children:[f.jsx(n3,{isActive:i===e,children:i+1}),f.jsxs(Zy,{children:[f.jsx(e3,{children:o.title}),f.jsxs(t3,{children:[f.jsx("div",{children:o.duration}),f.jsx("div",{children:o.institution}),f.jsx("div",{children:o.details})]})]})]},i))})]})},He={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},o3=E.div`
  padding: 50px 20px;
  color: ${He.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,i3=E.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,l3=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,s3=E.div`
  background: linear-gradient(135deg, ${He.spaceCadet} 30%, ${He.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`,a3=E.div`
  flex-grow: 1;
`,u3=E.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,c3=E.h3`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`,d3=E.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,f3=E.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;
`,p3=E.ul`
  font-size: 1em;
  margin-top: 10px;
  padding-left: 20px;
`,h3=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,m3=E.span`
  background: linear-gradient(135deg, ${He.spaceCadet} 30%, ${He.delftBlue} 100%);
  color: ${He.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${He.ghostWhite};
`,g3=E.div`
  display: flex;
  width:100%;
  gap: 10px;
  margin-top: auto; /* Aligns the container to the bottom */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
      justify-content: center; /* Center buttons horizontally */
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,gd=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${He.gunmetal};
  font-weight: 600;
  background-color: ${He.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${He.gunmetal};
  
  &:hover {
    background-color: ${He.spaceCadet};
    color: ${He.ghostWhite};
    border-color: ${He.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.8em;
  }
`,v3=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:"path/to/mycCertificate",companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer (Intern)",duration:"Duration: 5 months",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.",responsibilities:["Developed responsive interfaces using React for frontend components.","Created essential components in React using Django Rest Framework.","Built and maintained entire websites using Wordpress.","Collaborated to implement new features and enhance existing ones."],skills:["React","Django Rest Framework","Wordpress"],certificateUrl:"path/to/arthashastraCertificate",companyUrl:"https://arthashastra.ai/"}];return f.jsxs(o3,{children:[f.jsx(i3,{children:"Experience"}),f.jsx(l3,{children:e.map((t,n)=>f.jsxs(s3,{children:[f.jsxs(a3,{children:[f.jsx(u3,{children:t.company}),f.jsx(c3,{children:t.role}),f.jsx(d3,{children:t.duration}),f.jsx(f3,{children:t.description}),f.jsx(p3,{children:t.responsibilities.map((r,o)=>f.jsx("li",{children:r},o))}),f.jsx(h3,{children:t.skills.map((r,o)=>f.jsx(m3,{children:r},o))})]}),f.jsxs(g3,{children:[f.jsx(gd,{href:t.certificateUrl,target:"_blank",children:"View Certificate"}),f.jsx(gd,{href:t.companyUrl,target:"_blank",children:"Visit Company"})]})]},n))})]})},Pt={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},y3=E.div`
  padding: 50px 20px;
  color: ${Pt.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,x3=E.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,w3=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,O1=E.div`
  background: linear-gradient(135deg, ${Pt.spaceCadet} 30%, ${Pt.delftBlue} 100%);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  flex: 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`,S3=E.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;

  ${O1}:hover & {
    transform: scale(0.85);
  }
`,k3=E.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,E3=E.div`
  display: flex;
  gap: 10px;
  margin-top: auto; /* Aligns the container to the bottom */
  flex-wrap: wrap;
  justify-content: start; /* Align buttons horizontally centered */

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
    justify-content:center;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,vd=E.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${Pt.gunmetal};
  font-weight: 600;
  background-color: ${Pt.ghostWhite};
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  border: 2px solid ${Pt.gunmetal};
  
  &:hover {
    background-color: ${Pt.spaceCadet};
    color: ${Pt.ghostWhite};
    border-color: ${Pt.ghostWhite};
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`,C3=E.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,j3=E.p`
  font-size: 1em;
  line-height: 1.6;
`,_3=[{title:"MERA SAHAI: Mera Sahai Platform",description:"As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",demoLink:"/assets/mera_sahai_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:$i},{title:"College Project: Water Quality Prediction and Classification",description:"For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",demoLink:"/assets/water_quality_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:Ai}],T3=()=>f.jsxs(y3,{children:[f.jsx(x3,{children:"Projects"}),f.jsx(w3,{children:_3.map((e,t)=>f.jsxs(O1,{children:[f.jsx(S3,{src:e.imageUrl,alt:e.title}),f.jsxs(k3,{children:[f.jsx(C3,{children:e.title}),f.jsx(j3,{children:e.description}),f.jsxs(E3,{children:[e.demoLink&&f.jsx(vd,{href:e.demoLink,target:"_blank",children:"Demo"}),e.codeLink&&f.jsx(vd,{href:e.codeLink,target:"_blank",children:"Code"})]})]})]},t))})]}),Ht={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},z3=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,P3=E.div`
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
`,N3=ee.forwardRef((e,t)=>{const[n,r]=ee.useState("Skills");ee.useEffect(()=>{R1.on("activateTab",i=>{r(i)})},[]);const o=()=>{switch(n){case"Skills":return f.jsx(hd,{});case"Certificates":return f.jsx(Gy,{});case"Education":return f.jsx(r3,{});case"Experience":return f.jsx(v3,{});case"Projects":return f.jsx(T3,{});default:return f.jsx(hd,{})}};return f.jsxs(z3,{id:"knowmore",children:[o(),f.jsxs(P3,{children:[f.jsxs(jr,{active:n==="Skills",onClick:()=>r("Skills"),children:[f.jsx(Vg,{})," ",f.jsx("span",{children:"Skills"})]}),f.jsxs(jr,{active:n==="Certificates",onClick:()=>r("Certificates"),children:[f.jsx(bg,{})," ",f.jsx("span",{children:"Certificates"})]}),f.jsxs(jr,{active:n==="Education",onClick:()=>r("Education"),children:[f.jsx(Wg,{})," ",f.jsx("span",{children:"Education"})]}),f.jsxs(jr,{active:n==="Experience",onClick:()=>r("Experience"),children:[f.jsx(Bg,{})," ",f.jsx("span",{children:"Experience"})]}),f.jsxs(jr,{active:n==="Projects",onClick:()=>r("Projects"),children:[f.jsx(Yg,{})," ",f.jsx("span",{children:"Projects"})]})]})]})}),R3=E.div`
    font-family: Arial, sans-serif;
`;function O3(){return f.jsxs(R3,{children:[f.jsx(kg,{}),f.jsx(T2,{}),f.jsx(N3,{}),f.jsx(Sy,{}),f.jsx(_y,{})]})}ns.createRoot(document.getElementById("root")).render(f.jsx(Pe.StrictMode,{children:f.jsx(O3,{})}));
