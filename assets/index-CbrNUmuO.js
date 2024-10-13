(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var D1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Di={},md={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),I1=Symbol.for("react.portal"),M1=Symbol.for("react.fragment"),F1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),U1=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),V1=Symbol.for("react.suspense"),W1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),xu=Symbol.iterator;function G1(e){return e===null||typeof e!="object"?null:(e=xu&&e[xu]||e["@@iterator"],typeof e=="function"?e:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function cr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xd(){}xd.prototype=cr.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}var da=ca.prototype=new xd;da.constructor=ca;vd(da,cr.prototype);da.isPureReactComponent=!0;var wu=Array.isArray,wd=Object.prototype.hasOwnProperty,fa={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)wd.call(t,r)&&!Sd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ao,type:e,key:i,ref:l,props:o,_owner:fa.current}}function K1(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function Y1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Su=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y1(""+e.key):t.toString(36)}function Fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ao:case I1:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pl(l,0):r,wu(o)?(n="",e!=null&&(n=e.replace(Su,"$&/")+"/"),Fo(o,t,n,"",function(u){return u})):o!=null&&(pa(o)&&(o=K1(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Su,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",wu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+pl(i,s);l+=Fo(i,t,n,a,o)}else if(a=G1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+pl(i,s++),l+=Fo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return Fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function X1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},bo={transition:null},q1={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:bo,ReactCurrentOwner:fa};function kd(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=cr;B.Fragment=M1;B.Profiler=b1;B.PureComponent=ca;B.StrictMode=F1;B.Suspense=V1;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;B.act=kd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)wd.call(t,a)&&!Sd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ao,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:U1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B1,_context:e},e.Consumer=e};B.createElement=Cd;B.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:H1,render:e}};B.isValidElement=pa;B.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:X1}};B.memo=function(e,t){return{$$typeof:W1,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};B.unstable_act=kd;B.useCallback=function(e,t){return Re.current.useCallback(e,t)};B.useContext=function(e){return Re.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};B.useEffect=function(e,t){return Re.current.useEffect(e,t)};B.useId=function(){return Re.current.useId()};B.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Re.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};B.useRef=function(e){return Re.current.useRef(e)};B.useState=function(e){return Re.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Re.current.useTransition()};B.version="18.3.1";md.exports=B;var ee=md.exports;const Pe=pd(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=ee,Z1=Symbol.for("react.element"),e0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,n0=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)t0.call(t,r)&&!r0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Z1,type:e,key:i,ref:l,props:o,_owner:n0.current}}Di.Fragment=e0;Di.jsx=Ed;Di.jsxs=Ed;hd.exports=Di;var f=hd.exports,ns={},jd={exports:{}},Ke={},zd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,O){var v=j.length;j.push(O);e:for(;0<v;){var Q=v-1>>>1,P=j[Q];if(0<o(P,O))j[Q]=O,j[v]=P,v=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],v=j.pop();if(v!==O){j[0]=v;e:for(var Q=0,P=j.length,H=P>>>1;Q<H;){var Y=2*(Q+1)-1,q=j[Y],b=Y+1,le=j[b];if(0>o(q,v))b<P&&0>o(le,q)?(j[Q]=le,j[b]=v,Q=b):(j[Q]=q,j[Y]=v,Q=Y);else if(b<P&&0>o(le,v))j[Q]=le,j[b]=v,Q=b;else break e}}return O}function o(j,O){var v=j.sortIndex-O.sortIndex;return v!==0?v:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,h=null,g=3,x=!1,y=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function S(j){if(w=!1,p(j),!y)if(n(a)!==null)y=!0,A(T);else{var O=n(u);O!==null&&$(S,O.startTime-j)}}function T(j,O){y=!1,w&&(w=!1,m(N),N=-1),x=!0;var v=g;try{for(p(O),h=n(a);h!==null&&(!(h.expirationTime>O)||j&&!_e());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var P=Q(h.expirationTime<=O);O=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(a)&&r(a),p(O)}else r(a);h=n(a)}if(h!==null)var H=!0;else{var Y=n(u);Y!==null&&$(S,Y.startTime-O),H=!1}return H}finally{h=null,g=v,x=!1}}var z=!1,E=null,N=-1,U=5,I=-1;function _e(){return!(e.unstable_now()-I<U)}function W(){if(E!==null){var j=e.unstable_now();I=j;var O=!0;try{O=E(!0,j)}finally{O?yt():(z=!1,E=null)}}else z=!1}var yt;if(typeof d=="function")yt=function(){d(W)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,M=Nn.port2;Nn.port1.onmessage=W,yt=function(){M.postMessage(null)}}else yt=function(){L(W,0)};function A(j){E=j,z||(z=!0,yt())}function $(j,O){N=L(function(){j(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,A(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var v=g;g=O;try{return j()}finally{g=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var v=g;g=j;try{return O()}finally{g=v}},e.unstable_scheduleCallback=function(j,O,v){var Q=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?Q+v:Q):v=Q,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=v+P,j={id:c++,callback:O,priorityLevel:j,startTime:v,expirationTime:P,sortIndex:-1},v>Q?(j.sortIndex=v,t(u,j),n(a)===null&&j===n(u)&&(w?(m(N),N=-1):w=!0,$(S,v-Q))):(j.sortIndex=P,t(a,j),y||x||(y=!0,A(T))),j},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(j){var O=g;return function(){var v=g;g=O;try{return j.apply(this,arguments)}finally{g=v}}}})(_d);zd.exports=_d;var o0=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=ee,Ge=o0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Ur={};function Tn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)Td.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},ku={};function s0(e){return rs.call(ku,e)?!0:rs.call(Cu,e)?!1:l0.test(e)?ku[e]=!0:(Cu[e]=!0,!1)}function a0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function u0(e,t,n,r){if(t===null||typeof t>"u"||a0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ma);we[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ma);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ma);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(u0(t,n,o,r)&&(n=null),r||o===null?s0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),ya=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Rd=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,hl;function _r(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var ml=!1;function gl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function c0(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Ln:return"Portal";case os:return"Profiler";case va:return"StrictMode";case is:return"Suspense";case ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ss(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return ss(e(t))}catch{}}return null}function d0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function f0(e){var t=Od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=f0(e))}function Ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function as(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ju(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ad(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function us(e,t){Ad(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&cs(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cs(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Tr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function $d(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var So,Id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(So=So||document.createElement("div"),So.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=So.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){p0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Fd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Md(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var h0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(h0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,Gn=null,Kn=null;function Pu(e){if(e=fo(e)){if(typeof gs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Bi(t),gs(e.stateNode,e.type,t))}}function bd(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function Bd(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,Pu(e),t)for(e=0;e<t.length;e++)Pu(t[e])}}function Ud(e,t){return e(t)}function Hd(){}var vl=!1;function Vd(e,t,n){if(vl)return e(t,n);vl=!0;try{return Ud(e,t,n)}finally{vl=!1,(Gn!==null||Kn!==null)&&(Hd(),Bd())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var vs=!1;if(Lt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){vs=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{vs=!1}function m0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Lr=!1,li=null,si=!1,ys=null,g0={onError:function(e){Lr=!0,li=e}};function v0(e,t,n,r,o,i,l,s,a){Lr=!1,li=null,m0.apply(g0,arguments)}function y0(e,t,n,r,o,i,l,s,a){if(v0.apply(this,arguments),Lr){if(Lr){var u=li;Lr=!1,li=null}else throw Error(_(198));si||(si=!0,ys=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(Pn(e)!==e)throw Error(_(188))}function x0(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Nu(o),e;if(i===r)return Nu(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Qd(e){return e=x0(e),e!==null?Gd(e):null}function Gd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gd(e);if(t!==null)return t;e=e.sibling}return null}var Kd=Ge.unstable_scheduleCallback,Ru=Ge.unstable_cancelCallback,w0=Ge.unstable_shouldYield,S0=Ge.unstable_requestPaint,ae=Ge.unstable_now,C0=Ge.unstable_getCurrentPriorityLevel,Sa=Ge.unstable_ImmediatePriority,Yd=Ge.unstable_UserBlockingPriority,ai=Ge.unstable_NormalPriority,k0=Ge.unstable_LowPriority,Xd=Ge.unstable_IdlePriority,Ii=null,kt=null;function E0(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:_0,j0=Math.log,z0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(j0(e)/z0|0)|0}var Co=64,ko=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Pr(s):(i&=l,i!==0&&(r=Pr(i)))}else l=n&~o,l!==0?r=Pr(l):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function T0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=T0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function N0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ca(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zd,ka,ef,tf,nf,ws=!1,Eo=[],Kt=null,Yt=null,Xt=null,Wr=new Map,Qr=new Map,Vt=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fo(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function O0(e,t,n,r,o){switch(t){case"focusin":return Kt=yr(Kt,e,t,n,r,o),!0;case"dragenter":return Yt=yr(Yt,e,t,n,r,o),!0;case"mouseover":return Xt=yr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Wr.set(i,yr(Wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qr.set(i,yr(Qr.get(i)||null,e,t,n,r,o)),!0}return!1}function rf(e){var t=dn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wd(n),t!==null){e.blockedOn=t,nf(e.priority,function(){ef(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ss(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ms=r,n.target.dispatchEvent(r),ms=null}else return t=fo(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){Bo(e)&&n.delete(t)}function L0(){ws=!1,Kt!==null&&Bo(Kt)&&(Kt=null),Yt!==null&&Bo(Yt)&&(Yt=null),Xt!==null&&Bo(Xt)&&(Xt=null),Wr.forEach(Lu),Qr.forEach(Lu)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ws||(ws=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,L0)))}function Gr(e){function t(o){return xr(o,e)}if(0<Eo.length){xr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&xr(Kt,e),Yt!==null&&xr(Yt,e),Xt!==null&&xr(Xt,e),Wr.forEach(t),Qr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&Vt.shift()}var Yn=It.ReactCurrentBatchConfig,ci=!0;function A0(e,t,n,r){var o=K,i=Yn.transition;Yn.transition=null;try{K=1,Ea(e,t,n,r)}finally{K=o,Yn.transition=i}}function $0(e,t,n,r){var o=K,i=Yn.transition;Yn.transition=null;try{K=4,Ea(e,t,n,r)}finally{K=o,Yn.transition=i}}function Ea(e,t,n,r){if(ci){var o=Ss(e,t,n,r);if(o===null)Tl(e,t,r,di,n),Ou(e,r);else if(O0(o,e,t,n,r))r.stopPropagation();else if(Ou(e,r),t&4&&-1<R0.indexOf(e)){for(;o!==null;){var i=fo(o);if(i!==null&&Zd(i),i=Ss(e,t,n,r),i===null&&Tl(e,t,r,di,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var di=null;function Ss(e,t,n,r){if(di=null,e=wa(r),e=dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Sa:return 1;case Yd:return 4;case ai:case k0:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var Qt=null,ja=null,Uo=null;function lf(){if(Uo)return Uo;var e,t=ja,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Au(){return!1}function Ye(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Au,this.isPropagationStopped=Au,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Ye(dr),co=ie({},dr,{view:0,detail:0}),D0=Ye(co),xl,wl,wr,Mi=ie({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(xl=e.screenX-wr.screenX,wl=e.screenY-wr.screenY):wl=xl=0,wr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),$u=Ye(Mi),I0=ie({},Mi,{dataTransfer:0}),M0=Ye(I0),F0=ie({},co,{relatedTarget:0}),Sl=Ye(F0),b0=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Ye(b0),U0=ie({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=Ye(U0),V0=ie({},dr,{data:0}),Du=Ye(V0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function _a(){return K0}var Y0=ie({},co,{key:function(e){if(e.key){var t=W0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X0=Ye(Y0),q0=ie({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ye(q0),J0=ie({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),Z0=Ye(J0),eh=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Ye(eh),nh=ie({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=Ye(nh),oh=[9,13,27,32],Ta=Lt&&"CompositionEvent"in window,Ar=null;Lt&&"documentMode"in document&&(Ar=document.documentMode);var ih=Lt&&"TextEvent"in window&&!Ar,sf=Lt&&(!Ta||Ar&&8<Ar&&11>=Ar),Mu=" ",Fu=!1;function af(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function lh(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(Fu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Fu?null:e;default:return null}}function sh(e,t){if($n)return e==="compositionend"||!Ta&&af(e,t)?(e=lf(),Uo=ja=Qt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function cf(e,t,n,r){bd(r),t=fi(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Kr=null;function uh(e){Sf(e,0)}function Fi(e){var t=Mn(e);if(Ld(t))return e}function ch(e,t){if(e==="change")return t}var df=!1;if(Lt){var Cl;if(Lt){var kl="oninput"in document;if(!kl){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),kl=typeof Bu.oninput=="function"}Cl=kl}else Cl=!1;df=Cl&&(!document.documentMode||9<document.documentMode)}function Uu(){$r&&($r.detachEvent("onpropertychange",ff),Kr=$r=null)}function ff(e){if(e.propertyName==="value"&&Fi(Kr)){var t=[];cf(t,Kr,e,wa(e)),Vd(uh,t)}}function dh(e,t,n){e==="focusin"?(Uu(),$r=t,Kr=n,$r.attachEvent("onpropertychange",ff)):e==="focusout"&&Uu()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(Kr)}function ph(e,t){if(e==="click")return Fi(t)}function hh(e,t){if(e==="input"||e==="change")return Fi(t)}function mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:mh;function Yr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!rs.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gh(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pf(n.ownerDocument.documentElement,n)){if(r!==null&&Pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Vu(n,i);var l=Vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vh=Lt&&"documentMode"in document&&11>=document.documentMode,Dn=null,Cs=null,Dr=null,ks=!1;function Wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ks||Dn==null||Dn!==ii(r)||(r=Dn,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Yr(Dr,r)||(Dr=r,r=fi(Cs,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},El={},mf={};Lt&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function bi(e){if(El[e])return El[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mf)return El[e]=t[n];return e}var gf=bi("animationend"),vf=bi("animationiteration"),yf=bi("animationstart"),xf=bi("transitionend"),wf=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){wf.set(e,t),Tn(t,[e])}for(var jl=0;jl<Qu.length;jl++){var zl=Qu[jl],yh=zl.toLowerCase(),xh=zl[0].toUpperCase()+zl.slice(1);on(yh,"on"+xh)}on(gf,"onAnimationEnd");on(vf,"onAnimationIteration");on(yf,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(xf,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,y0(r,t,void 0,e),e.currentTarget=null}function Sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Gu(o,s,u),i=a}}}if(si)throw e=ys,si=!1,ys=null,e}function J(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var r=e+"__bubble";n.has(r)||(Cf(t,e,2,!1),n.add(r))}function _l(e,t,n){var r=0;t&&(r|=4),Cf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[_o]){e[_o]=!0,Td.forEach(function(n){n!=="selectionchange"&&(wh.has(n)||_l(n,!1,e),_l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,_l("selectionchange",!1,t))}}function Cf(e,t,n,r){switch(of(t)){case 1:var o=A0;break;case 4:o=$0;break;default:o=Ea}n=o.bind(null,t,n,e),o=void 0,!vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Vd(function(){var u=i,c=wa(n),h=[];e:{var g=wf.get(e);if(g!==void 0){var x=za,y=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=X0;break;case"focusin":y="focus",x=Sl;break;case"focusout":y="blur",x=Sl;break;case"beforeblur":case"afterblur":x=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Z0;break;case gf:case vf:case yf:x=B0;break;case xf:x=th;break;case"scroll":x=D0;break;case"wheel":x=rh;break;case"copy":case"cut":case"paste":x=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Iu}var w=(t&4)!==0,L=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,m!==null&&(S=Vr(d,m),S!=null&&w.push(qr(d,S,p)))),L)break;d=d.return}0<w.length&&(g=new x(g,y,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ms&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[At]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?dn(y):null,y!==null&&(L=Pn(y),y!==L||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=$u,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Iu,S="onPointerLeave",m="onPointerEnter",d="pointer"),L=x==null?g:Mn(x),p=y==null?g:Mn(y),g=new w(S,d+"leave",x,n,c),g.target=L,g.relatedTarget=p,S=null,dn(c)===u&&(w=new w(m,d+"enter",y,n,c),w.target=p,w.relatedTarget=L,S=w),L=S,x&&y)t:{for(w=x,m=y,d=0,p=w;p;p=Rn(p))d++;for(p=0,S=m;S;S=Rn(S))p++;for(;0<d-p;)w=Rn(w),d--;for(;0<p-d;)m=Rn(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Rn(w),m=Rn(m)}w=null}else w=null;x!==null&&Ku(h,g,x,w,!1),y!==null&&L!==null&&Ku(h,L,y,w,!0)}}e:{if(g=u?Mn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var T=ch;else if(bu(g))if(df)T=hh;else{T=fh;var z=dh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=ph);if(T&&(T=T(e,u))){cf(h,T,n,c);break e}z&&z(e,g,u),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&cs(g,"number",g.value)}switch(z=u?Mn(u):window,e){case"focusin":(bu(z)||z.contentEditable==="true")&&(Dn=z,Cs=u,Dr=null);break;case"focusout":Dr=Cs=Dn=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,Wu(h,n,c);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":Wu(h,n,c)}var E;if(Ta)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?af(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(sf&&n.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(E=lf()):(Qt=c,ja="value"in Qt?Qt.value:Qt.textContent,$n=!0)),z=fi(u,N),0<z.length&&(N=new Du(N,e,null,n,c),h.push({event:N,listeners:z}),E?N.data=E:(E=uf(n),E!==null&&(N.data=E)))),(E=ih?lh(e,n):sh(e,n))&&(u=fi(u,"onBeforeInput"),0<u.length&&(c=new Du("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=E))}Sf(h,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vr(e,n),i!=null&&r.unshift(qr(e,i,o)),i=Vr(e,t),i!=null&&r.push(qr(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Vr(n,i),a!=null&&l.unshift(qr(n,a,s))):o||(a=Vr(n,i),a!=null&&l.push(qr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Sh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Yu(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(Ch,"")}function To(e,t,n){if(t=Yu(t),Yu(e)!==t&&n)throw Error(_(425))}function pi(){}var Es=null,js=null;function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,kh=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(e){return Xu.resolve(null).then(e).catch(jh)}:_s;function jh(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+fr,Jr="__reactProps$"+fr,At="__reactContainer$"+fr,Ts="__reactEvents$"+fr,zh="__reactListeners$"+fr,_h="__reactHandles$"+fr;function dn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qu(e);e!==null;){if(n=e[Ct])return n;e=qu(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[Ct]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Bi(e){return e[Jr]||null}var Ps=[],Fn=-1;function ln(e){return{current:e}}function te(e){0>Fn||(e.current=Ps[Fn],Ps[Fn]=null,Fn--)}function X(e,t){Fn++,Ps[Fn]=e.current,e.current=t}var rn={},ze=ln(rn),De=ln(!1),wn=rn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function hi(){te(De),te(ze)}function Ju(e,t,n){if(ze.current!==rn)throw Error(_(168));X(ze,t),X(De,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,d0(e)||"Unknown",o));return ie({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,wn=ze.current,X(ze,e),X(De,De.current),!0}function Zu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=kf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,te(De),te(ze),X(ze,e)):te(De),X(De,n)}var Tt=null,Ui=!1,Nl=!1;function Ef(e){Tt===null?Tt=[e]:Tt.push(e)}function Th(e){Ui=!0,Ef(e)}function sn(){if(!Nl&&Tt!==null){Nl=!0;var e=0,t=K;try{var n=Tt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Ui=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),Kd(Sa,sn),o}finally{K=t,Nl=!1}}return null}var bn=[],Bn=0,gi=null,vi=0,qe=[],Je=0,Sn=null,Nt=1,Rt="";function un(e,t){bn[Bn++]=vi,bn[Bn++]=gi,gi=e,vi=t}function jf(e,t,n){qe[Je++]=Nt,qe[Je++]=Rt,qe[Je++]=Sn,Sn=e;var r=Nt;e=Rt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-ct(t)+o|n<<o|r,Rt=i+e}else Nt=1<<i|n<<o|r,Rt=e}function Na(e){e.return!==null&&(un(e,1),jf(e,1,0))}function Ra(e){for(;e===gi;)gi=bn[--Bn],bn[Bn]=null,vi=bn[--Bn],bn[Bn]=null;for(;e===Sn;)Sn=qe[--Je],qe[Je]=null,Rt=qe[--Je],qe[Je]=null,Nt=qe[--Je],qe[Je]=null}var Qe=null,Ve=null,ne=!1,at=null;function zf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Nt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function Ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(ne){var t=Ve;if(t){var n=t;if(!ec(e,t)){if(Ns(e))throw Error(_(418));t=qt(n.nextSibling);var r=Qe;t&&ec(e,t)?zf(r,n):(e.flags=e.flags&-4097|2,ne=!1,Qe=e)}}else{if(Ns(e))throw Error(_(418));e.flags=e.flags&-4097|2,ne=!1,Qe=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Po(e){if(e!==Qe)return!1;if(!ne)return tc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zs(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ns(e))throw _f(),Error(_(418));for(;t;)zf(e,t),t=qt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?qt(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=Ve;e;)e=qt(e.nextSibling)}function er(){Ve=Qe=null,ne=!1}function Oa(e){at===null?at=[e]:at.push(e)}var Ph=It.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function No(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function Tf(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=tn(m,d),m.index=0,m.sibling=null,m}function i(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,S){return d===null||d.tag!==6?(d=Il(p,m.mode,S),d.return=m,d):(d=o(d,p),d.return=m,d)}function a(m,d,p,S){var T=p.type;return T===An?c(m,d,p.props.children,S,p.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&nc(T)===d.type)?(S=o(d,p.props),S.ref=Sr(m,d,p),S.return=m,S):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,S)}function u(m,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ml(p,m.mode,S),d.return=m,d):(d=o(d,p.children||[]),d.return=m,d)}function c(m,d,p,S,T){return d===null||d.tag!==7?(d=gn(p,m.mode,S,T),d.return=m,d):(d=o(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Il(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xo:return p=Xo(d.type,d.key,d.props,null,m.mode,p),p.ref=Sr(m,null,d),p.return=m,p;case Ln:return d=Ml(d,m.mode,p),d.return=m,d;case Bt:var S=d._init;return h(m,S(d._payload),p)}if(Tr(d)||gr(d))return d=gn(d,m.mode,p,null),d.return=m,d;No(m,d)}return null}function g(m,d,p,S){var T=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:s(m,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return p.key===T?a(m,d,p,S):null;case Ln:return p.key===T?u(m,d,p,S):null;case Bt:return T=p._init,g(m,d,T(p._payload),S)}if(Tr(p)||gr(p))return T!==null?null:c(m,d,p,S,null);No(m,p)}return null}function x(m,d,p,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(p)||null,s(d,m,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xo:return m=m.get(S.key===null?p:S.key)||null,a(d,m,S,T);case Ln:return m=m.get(S.key===null?p:S.key)||null,u(d,m,S,T);case Bt:var z=S._init;return x(m,d,p,z(S._payload),T)}if(Tr(S)||gr(S))return m=m.get(p)||null,c(d,m,S,T,null);No(d,S)}return null}function y(m,d,p,S){for(var T=null,z=null,E=d,N=d=0,U=null;E!==null&&N<p.length;N++){E.index>N?(U=E,E=null):U=E.sibling;var I=g(m,E,p[N],S);if(I===null){E===null&&(E=U);break}e&&E&&I.alternate===null&&t(m,E),d=i(I,d,N),z===null?T=I:z.sibling=I,z=I,E=U}if(N===p.length)return n(m,E),ne&&un(m,N),T;if(E===null){for(;N<p.length;N++)E=h(m,p[N],S),E!==null&&(d=i(E,d,N),z===null?T=E:z.sibling=E,z=E);return ne&&un(m,N),T}for(E=r(m,E);N<p.length;N++)U=x(E,m,N,p[N],S),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?N:U.key),d=i(U,d,N),z===null?T=U:z.sibling=U,z=U);return e&&E.forEach(function(_e){return t(m,_e)}),ne&&un(m,N),T}function w(m,d,p,S){var T=gr(p);if(typeof T!="function")throw Error(_(150));if(p=T.call(p),p==null)throw Error(_(151));for(var z=T=null,E=d,N=d=0,U=null,I=p.next();E!==null&&!I.done;N++,I=p.next()){E.index>N?(U=E,E=null):U=E.sibling;var _e=g(m,E,I.value,S);if(_e===null){E===null&&(E=U);break}e&&E&&_e.alternate===null&&t(m,E),d=i(_e,d,N),z===null?T=_e:z.sibling=_e,z=_e,E=U}if(I.done)return n(m,E),ne&&un(m,N),T;if(E===null){for(;!I.done;N++,I=p.next())I=h(m,I.value,S),I!==null&&(d=i(I,d,N),z===null?T=I:z.sibling=I,z=I);return ne&&un(m,N),T}for(E=r(m,E);!I.done;N++,I=p.next())I=x(E,m,N,I.value,S),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?N:I.key),d=i(I,d,N),z===null?T=I:z.sibling=I,z=I);return e&&E.forEach(function(W){return t(m,W)}),ne&&un(m,N),T}function L(m,d,p,S){if(typeof p=="object"&&p!==null&&p.type===An&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:e:{for(var T=p.key,z=d;z!==null;){if(z.key===T){if(T=p.type,T===An){if(z.tag===7){n(m,z.sibling),d=o(z,p.props.children),d.return=m,m=d;break e}}else if(z.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&nc(T)===z.type){n(m,z.sibling),d=o(z,p.props),d.ref=Sr(m,z,p),d.return=m,m=d;break e}n(m,z);break}else t(m,z);z=z.sibling}p.type===An?(d=gn(p.props.children,m.mode,S,p.key),d.return=m,m=d):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,m=S)}return l(m);case Ln:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=o(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ml(p,m.mode,S),d.return=m,m=d}return l(m);case Bt:return z=p._init,L(m,d,z(p._payload),S)}if(Tr(p))return y(m,d,p,S);if(gr(p))return w(m,d,p,S);No(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,p),d.return=m,m=d):(n(m,d),d=Il(p,m.mode,S),d.return=m,m=d),l(m)):n(m,d)}return L}var tr=Tf(!0),Pf=Tf(!1),yi=ln(null),xi=null,Un=null,La=null;function Aa(){La=Un=xi=null}function $a(e){var t=yi.current;te(yi),e._currentValue=t}function Os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){xi=e,La=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(xi===null)throw Error(_(308));Un=e,xi.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Da(e){fn===null?fn=[e]:fn.push(e)}function Nf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Da(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,Da(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,c=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(x,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,h,g):y,g==null)break e;h=ie({},h,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=x,a=h):c=c.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(c===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=h}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var po={},Et=ln(po),Zr=ln(po),eo=ln(po);function pn(e){if(e===po)throw Error(_(174));return e}function Ma(e,t){switch(X(eo,t),X(Zr,e),X(Et,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fs(t,e)}te(Et),X(Et,t)}function nr(){te(Et),te(Zr),te(eo)}function Of(e){pn(eo.current);var t=pn(Et.current),n=fs(t,e.type);t!==n&&(X(Zr,e),X(Et,n))}function Fa(e){Zr.current===e&&(te(Et),te(Zr))}var re=ln(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function ba(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Wo=It.ReactCurrentDispatcher,Ol=It.ReactCurrentBatchConfig,Cn=0,oe=null,pe=null,me=null,Ci=!1,Ir=!1,to=0,Nh=0;function Se(){throw Error(_(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,o,i){if(Cn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?Ah:$h,e=n(r,o),Ir){i=0;do{if(Ir=!1,to=0,25<=i)throw Error(_(301));i+=1,me=pe=null,t.updateQueue=null,Wo.current=Dh,e=n(r,o)}while(Ir)}if(Wo.current=ki,t=pe!==null&&pe.next!==null,Cn=0,me=pe=oe=null,Ci=!1,t)throw Error(_(300));return e}function Ha(){var e=to!==0;return to=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function rt(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(_(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function no(e,t){return typeof t=="function"?t(e):t}function Ll(e){var t=rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var c=u.lane;if((Cn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,oe.lanes|=c,kn|=c}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,mt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=rt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lf(){}function Af(e,t){var n=oe,r=rt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Va(If.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ro(9,Df.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(_(349));Cn&30||$f(n,t,o)}return o}function $f(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Df(e,t,n,r){t.value=n,t.getSnapshot=r,Mf(t)&&Ff(e)}function If(e,t,n){return n(function(){Mf(t)&&Ff(e)})}function Mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Ff(e){var t=$t(e,1);t!==null&&dt(t,e,1,-1)}function ic(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Lh.bind(null,oe,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bf(){return rt().memoizedState}function Qo(e,t,n,r){var o=wt();oe.flags|=e,o.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Ba(r,l.deps)){o.memoizedState=ro(t,n,i,r);return}}oe.flags|=e,o.memoizedState=ro(1|t,n,i,r)}function lc(e,t){return Qo(8390656,8,e,t)}function Va(e,t){return Hi(2048,8,e,t)}function Bf(e,t){return Hi(4,2,e,t)}function Uf(e,t){return Hi(4,4,e,t)}function Hf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,Hf.bind(null,t,e),n)}function Wa(){}function Wf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gf(e,t,n){return Cn&21?(mt(n,t)||(n=qd(),oe.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Rh(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{K=n,Ol.transition=r}}function Kf(){return rt().memoizedState}function Oh(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yf(e))Xf(t,n);else if(n=Nf(e,t,n,r),n!==null){var o=Ne();dt(n,e,r,o),qf(n,t,r)}}function Lh(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yf(e))Xf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,mt(s,l)){var a=t.interleaved;a===null?(o.next=o,Da(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Nf(e,t,o,r),n!==null&&(o=Ne(),dt(n,e,r,o),qf(n,t,r))}}function Yf(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Xf(e,t){Ir=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ca(e,n)}}var ki={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Ah={readContext:nt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4194308,4,Hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Oh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Wa,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=Rh.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=wt();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ve===null)throw Error(_(349));Cn&30||$f(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,lc(If.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,Df.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ve.identifierPrefix;if(ne){var n=Rt,r=Nt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:nt,useCallback:Wf,useContext:nt,useEffect:Va,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Qf,useReducer:Ll,useRef:bf,useState:function(){return Ll(no)},useDebugValue:Wa,useDeferredValue:function(e){var t=rt();return Gf(t,pe.memoizedState,e)},useTransition:function(){var e=Ll(no)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:Af,useId:Kf,unstable_isNewReconciler:!1},Dh={readContext:nt,useCallback:Wf,useContext:nt,useEffect:Va,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Qf,useReducer:Al,useRef:bf,useState:function(){return Al(no)},useDebugValue:Wa,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:Gf(t,pe.memoizedState,e)},useTransition:function(){var e=Al(no)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Lf,useSyncExternalStore:Af,useId:Kf,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=en(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(dt(t,e,r,n),Vo(t,e,r))}};function sc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(o,i):!0}function Jf(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ie(t)?wn:ze.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ie(t)?wn:ze.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vi.enqueueReplaceState(o,o.state,null),wi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=c0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ih=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Ws=r),$s(e,t)},n}function ep(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$s(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ih;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qh.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Mh=It.ReactCurrentOwner,$e=!1;function Te(e,t,n,r){t.child=e===null?Pf(t,null,n,r):tr(t,e.child,n,r)}function fc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=Ua(e,t,n,r,i,o),n=Ha(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&n&&Na(t),t.flags|=1,Te(e,t,r,o),t.child)}function pc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Za(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tp(e,t,i,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function tp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Yr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return Ds(e,t,n,r,o)}function np(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Vn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Vn,Ue),Ue|=r;return Te(e,t,o,n),t.child}function rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ds(e,t,n,r,o){var i=Ie(n)?wn:ze.current;return i=Zn(t,i),Xn(t,o),n=Ua(e,t,n,r,i,o),r=Ha(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&r&&Na(t),t.flags|=1,Te(e,t,n,o),t.child)}function hc(e,t,n,r,o){if(Ie(n)){var i=!0;mi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Go(e,t),Jf(t,n,r),As(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ie(n)?wn:ze.current,u=Zn(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ac(t,l,r,u),Ut=!1;var g=t.memoizedState;l.state=g,wi(t,r,l,o),a=t.memoizedState,s!==r||g!==a||De.current||Ut?(typeof c=="function"&&(Ls(t,n,c,r),a=t.memoizedState),(s=Ut||sc(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Rf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:lt(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ie(n)?wn:ze.current,a=Zn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&ac(t,l,r,a),Ut=!1,g=t.memoizedState,l.state=g,wi(t,r,l,o);var y=t.memoizedState;s!==h||g!==y||De.current||Ut?(typeof x=="function"&&(Ls(t,n,x,r),y=t.memoizedState),(u=Ut||sc(t,n,u,r,g,y,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Is(e,t,n,r,i,o)}function Is(e,t,n,r,o,i){rp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Zu(t,n,!1),Dt(e,t,i);r=t.stateNode,Mh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&Zu(t,n,!0),t.child}function op(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),Ma(e,t.containerInfo)}function mc(e,t,n,r,o){return er(),Oa(o),t.flags|=256,Te(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ip(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return Rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gi(l,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fs(n),t.memoizedState=Ms,e):Qa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Fh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=tn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=tn(s,i):(i=gn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ms,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&Oa(r),tr(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(_(422))),Ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gi({mode:"visible",children:r.children},o,0,null),i=gn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=Fs(l),t.memoizedState=Ms,i);if(!(t.mode&1))return Ro(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=$l(i,r,void 0),Ro(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),dt(r,e,o,-1))}return Ja(),r=$l(Error(_(421))),Ro(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Jh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=qt(o.nextSibling),Qe=t,ne=!0,at=null,e!==null&&(qe[Je++]=Nt,qe[Je++]=Rt,qe[Je++]=Sn,Nt=e.id,Rt=e.overflow,Sn=t),t=Qa(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Os(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function lp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Si(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bh(e,t,n){switch(t.tag){case 3:op(t),er();break;case 5:Of(t);break;case 1:Ie(t.type)&&mi(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(yi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?ip(e,t,n):(X(re,re.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,np(e,t,n)}return Dt(e,t,n)}var sp,bs,ap,up;sp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};ap=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Et.current);var i=null;switch(n){case"input":o=as(e,o),r=as(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=ds(e,o),r=ds(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}ps(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};up=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bh(e,t,n){var r=t.pendingProps;switch(Ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&hi(),Ce(t),null;case 3:return r=t.stateNode,nr(),te(De),te(ze),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Ks(at),at=null))),bs(e,t),Ce(t),null;case 5:Fa(t);var o=pn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)ap(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ce(t),null}if(e=pn(Et.current),Po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Nr.length;o++)J(Nr[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":ju(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":_u(r,i),J("invalid",r)}ps(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&To(r.textContent,s,e),o=["children",""+s]):Ur.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":wo(r),zu(r,i,!0);break;case"textarea":wo(r),Tu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[Jr]=r,sp(e,t,!1,!1),t.stateNode=e;e:{switch(l=hs(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Nr.length;o++)J(Nr[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":ju(e,r),o=as(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":_u(e,r),o=ds(e,r),J("invalid",e);break;default:o=r}ps(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Fd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Id(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hr(e,a):typeof a=="number"&&Hr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ur.hasOwnProperty(i)?a!=null&&i==="onScroll"&&J("scroll",e):a!=null&&ga(e,i,a,l))}switch(n){case"input":wo(e),zu(e,r,!1);break;case"textarea":wo(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)up(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=pn(eo.current),pn(Et.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ce(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))_f(),er(),t.flags|=98560,i=!1;else if(i=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Ct]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else at!==null&&(Ks(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Ja())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return nr(),bs(e,t),e===null&&Xr(t.stateNode.containerInfo),Ce(t),null;case 10:return $a(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&hi(),Ce(t),null;case 19:if(te(re),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Cr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Si(e),l!==null){for(t.flags|=128,Cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>or&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return Ce(t),null}else 2*ae()-i.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Uh(e,t){switch(Ra(t),t.tag){case 1:return Ie(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),te(De),te(ze),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return nr(),null;case 10:return $a(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Oo=!1,Ee=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,R=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Bs(e,t,n){try{n()}catch(r){se(e,t,r)}}var vc=!1;function Vh(e,t){if(Es=ci,e=hf(),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,c=0,h=e,g=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++c===r&&(a=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(js={focusedElem:e,selectionRange:n},ci=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,L=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),L);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=vc,vc=!1,y}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bs(t,n,i)}o=o.next}while(o!==r)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cp(e){var t=e.alternate;t!==null&&(e.alternate=null,cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Jr],delete t[Ts],delete t[zh],delete t[_h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dp(e){return e.tag===5||e.tag===3||e.tag===4}function yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var ye=null,st=!1;function Mt(e,t,n){for(n=n.child;n!==null;)fp(e,t,n),n=n.sibling}function fp(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:Ee||Hn(n,t);case 6:var r=ye,o=st;ye=null,Mt(e,t,n),ye=r,st=o,ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),Gr(e)):Pl(ye,n.stateNode));break;case 4:r=ye,o=st,ye=n.stateNode.containerInfo,st=!0,Mt(e,t,n),ye=r,st=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Bs(n,t,l),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Ee&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Mt(e,t,n),Ee=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hh),t.forEach(function(r){var o=Zh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,st=!1;break e;case 3:ye=s.stateNode.containerInfo,st=!0;break e;case 4:ye=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(ye===null)throw Error(_(160));fp(i,l,o),ye=null,st=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pp(t,e),t=t.sibling}function pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),xt(e),r&4){try{Mr(3,e,e.return),Wi(3,e)}catch(w){se(e,e.return,w)}try{Mr(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ad(o,i),hs(s,l);var u=hs(s,i);for(l=0;l<a.length;l+=2){var c=a[l],h=a[l+1];c==="style"?Fd(o,h):c==="dangerouslySetInnerHTML"?Id(o,h):c==="children"?Hr(o,h):ga(o,c,h,u)}switch(s){case"input":us(o,i);break;case"textarea":$d(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(it(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(it(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:it(t,e),xt(e);break;case 13:it(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ya=ae())),r&4&&xc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,it(t,e),Ee=u):it(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(h=R=c;R!==null;){switch(g=R,x=g.child,g.tag){case 0:case 11:case 14:case 15:Mr(4,g,g.return);break;case 1:Hn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){Sc(h);continue}}x!==null?(x.return=g,R=x):Sc(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Md("display",l))}catch(w){se(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){se(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:it(t,e),xt(e),r&4&&xc(e);break;case 21:break;default:it(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=yc(e);Vs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=yc(e);Hs(e,s,l);break;default:throw Error(_(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wh(e,t,n){R=e,hp(e)}function hp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=Oo;var u=Ee;if(Oo=l,(Ee=a)&&!u)for(R=o;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?Cc(o):a!==null?(a.return=l,R=a):Cc(o);for(;i!==null;)R=i,hp(i),i=i.sibling;R=o,Oo=s,Ee=u}wc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):wc(e)}}function wc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Wi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Gr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ee||t.flags&512&&Us(t)}catch(g){se(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Sc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Cc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wi(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var i=t.return;try{Us(t)}catch(a){se(t,i,a)}break;case 5:var l=t.return;try{Us(t)}catch(a){se(t,l,a)}}}catch(a){se(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var Qh=Math.ceil,Ei=It.ReactCurrentDispatcher,Ga=It.ReactCurrentOwner,et=It.ReactCurrentBatchConfig,V=0,ve=null,de=null,xe=0,Ue=0,Vn=ln(0),he=0,oo=null,kn=0,Qi=0,Ka=0,Fr=null,Ae=null,Ya=0,or=1/0,zt=null,ji=!1,Ws=null,Zt=null,Lo=!1,Gt=null,zi=0,br=0,Qs=null,Ko=-1,Yo=0;function Ne(){return V&6?ae():Ko!==-1?Ko:Ko=ae()}function en(e){return e.mode&1?V&2&&xe!==0?xe&-xe:Ph.transition!==null?(Yo===0&&(Yo=qd()),Yo):(e=K,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function dt(e,t,n,r){if(50<br)throw br=0,Qs=null,Error(_(185));uo(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(Qi|=n),he===4&&Wt(e,xe)),Me(e,r),n===1&&V===0&&!(t.mode&1)&&(or=ae()+500,Ui&&sn()))}function Me(e,t){var n=e.callbackNode;P0(e,t);var r=ui(e,e===ve?xe:0);if(r===0)n!==null&&Ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ru(n),t===1)e.tag===0?Th(kc.bind(null,e)):Ef(kc.bind(null,e)),Eh(function(){!(V&6)&&sn()}),n=null;else{switch(Jd(r)){case 1:n=Sa;break;case 4:n=Yd;break;case 16:n=ai;break;case 536870912:n=Xd;break;default:n=ai}n=Cp(n,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mp(e,t){if(Ko=-1,Yo=0,V&6)throw Error(_(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ui(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_i(e,r);else{t=r;var o=V;V|=2;var i=vp();(ve!==e||xe!==t)&&(zt=null,or=ae()+500,mn(e,t));do try{Yh();break}catch(s){gp(e,s)}while(!0);Aa(),Ei.current=i,V=o,de!==null?t=0:(ve=null,xe=0,t=he)}if(t!==0){if(t===2&&(o=xs(e),o!==0&&(r=o,t=Gs(e,o))),t===1)throw n=oo,mn(e,0),Wt(e,r),Me(e,ae()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Gh(o)&&(t=_i(e,r),t===2&&(i=xs(e),i!==0&&(r=i,t=Gs(e,i))),t===1))throw n=oo,mn(e,0),Wt(e,r),Me(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:cn(e,Ae,zt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ya+500-ae(),10<t)){if(ui(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_s(cn.bind(null,e,Ae,zt),t);break}cn(e,Ae,zt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qh(r/1960))-r,10<r){e.timeoutHandle=_s(cn.bind(null,e,Ae,zt),r);break}cn(e,Ae,zt);break;case 5:cn(e,Ae,zt);break;default:throw Error(_(329))}}}return Me(e,ae()),e.callbackNode===n?mp.bind(null,e):null}function Gs(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=_i(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Ks(t)),e}function Ks(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Ka,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function kc(e){if(V&6)throw Error(_(327));qn();var t=ui(e,0);if(!(t&1))return Me(e,ae()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=xs(e);r!==0&&(t=r,n=Gs(e,r))}if(n===1)throw n=oo,mn(e,0),Wt(e,t),Me(e,ae()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ae,zt),Me(e,ae()),null}function Xa(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(or=ae()+500,Ui&&sn())}}function En(e){Gt!==null&&Gt.tag===0&&!(V&6)&&qn();var t=V;V|=1;var n=et.transition,r=K;try{if(et.transition=null,K=1,e)return e()}finally{K=r,et.transition=n,V=t,!(V&6)&&sn()}}function qa(){Ue=Vn.current,te(Vn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:nr(),te(De),te(ze),ba();break;case 5:Fa(r);break;case 4:nr();break;case 13:te(re);break;case 19:te(re);break;case 10:$a(r.type._context);break;case 22:case 23:qa()}n=n.return}if(ve=e,de=e=tn(e.current,null),xe=Ue=t,he=0,oo=null,Ka=Qi=kn=0,Ae=Fr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}fn=null}return e}function gp(e,t){do{var n=de;try{if(Aa(),Wo.current=ki,Ci){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ci=!1}if(Cn=0,me=pe=oe=null,Ir=!1,to=0,Ga.current=null,n===null||n.return===null){he=1,oo=t,de=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=xe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=cc(l);if(x!==null){x.flags&=-257,dc(x,l,s,i,t),x.mode&1&&uc(i,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){uc(i,u,t),Ja();break e}a=Error(_(426))}}else if(ne&&s.mode&1){var L=cc(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),dc(L,l,s,i,t),Oa(rr(a,s));break e}}i=a=rr(a,s),he!==4&&(he=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Zf(i,a,t);rc(i,m);break e;case 1:s=a;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zt===null||!Zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=ep(i,s,t);rc(i,S);break e}}i=i.return}while(i!==null)}xp(n)}catch(T){t=T,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function vp(){var e=Ei.current;return Ei.current=ki,e===null?ki:e}function Ja(){(he===0||he===3||he===2)&&(he=4),ve===null||!(kn&268435455)&&!(Qi&268435455)||Wt(ve,xe)}function _i(e,t){var n=V;V|=2;var r=vp();(ve!==e||xe!==t)&&(zt=null,mn(e,t));do try{Kh();break}catch(o){gp(e,o)}while(!0);if(Aa(),V=n,Ei.current=r,de!==null)throw Error(_(261));return ve=null,xe=0,he}function Kh(){for(;de!==null;)yp(de)}function Yh(){for(;de!==null&&!w0();)yp(de)}function yp(e){var t=Sp(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?xp(e):de=t,Ga.current=null}function xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Bh(n,t,Ue),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=K,o=et.transition;try{et.transition=null,K=1,Xh(e,t,n,r)}finally{et.transition=o,K=r}return null}function Xh(e,t,n,r){do qn();while(Gt!==null);if(V&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(N0(e,i),e===ve&&(de=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,Cp(ai,function(){return qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var l=K;K=1;var s=V;V|=4,Ga.current=null,Vh(e,n),pp(n,e),gh(js),ci=!!Es,js=Es=null,e.current=n,Wh(n),S0(),V=s,K=l,et.transition=i}else e.current=n;if(Lo&&(Lo=!1,Gt=e,zi=o),i=e.pendingLanes,i===0&&(Zt=null),E0(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=Ws,Ws=null,e;return zi&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Qs?br++:(br=0,Qs=e):br=0,sn(),null}function qn(){if(Gt!==null){var e=Jd(zi),t=et.transition,n=K;try{if(et.transition=null,K=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,zi=0,V&6)throw Error(_(331));var o=V;for(V|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Mr(8,c,i)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var g=c.sibling,x=c.return;if(cp(c),c===u){R=null;break}if(g!==null){g.return=x,R=g;break}R=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Mr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,R=m;break e}R=i.return}}var d=e.current;for(R=d;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wi(9,s)}}catch(T){se(s,s.return,T)}if(s===l){R=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,R=S;break e}R=s.return}}if(V=o,sn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{K=n,et.transition=t}}return!1}function Ec(e,t,n){t=rr(n,t),t=Zf(e,t,1),e=Jt(e,t,1),t=Ne(),e!==null&&(uo(e,1,t),Me(e,t))}function se(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=rr(n,e),e=ep(t,e,1),t=Jt(t,e,1),e=Ne(),t!==null&&(uo(t,1,e),Me(t,e));break}}t=t.return}}function qh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(he===4||he===3&&(xe&130023424)===xe&&500>ae()-Ya?mn(e,0):Ka|=n),Me(e,t)}function wp(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=Ne();e=$t(e,t),e!==null&&(uo(e,t,n),Me(e,n))}function Jh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wp(e,n)}function Zh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),wp(e,n)}var Sp;Sp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,bh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ne&&t.flags&1048576&&jf(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Go(e,t),e=t.pendingProps;var o=Zn(t,ze.current);Xn(t,n),o=Ua(null,t,r,e,o,n);var i=Ha();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,mi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ia(t),o.updater=Vi,t.stateNode=o,o._reactInternals=t,As(t,r,e,n),t=Is(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Na(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=tm(r),e=lt(r,e),o){case 0:t=Ds(null,t,r,e,n);break e;case 1:t=hc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=pc(null,t,r,lt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Ds(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),hc(e,t,r,o,n);case 3:e:{if(op(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Rf(e,t),wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rr(Error(_(423)),t),t=mc(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(_(424)),t),t=mc(e,t,r,n,o);break e}else for(Ve=qt(t.stateNode.containerInfo.firstChild),Qe=t,ne=!0,at=null,n=Pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=Dt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Of(t),e===null&&Rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zs(r,o)?l=null:i!==null&&zs(r,i)&&(t.flags|=32),rp(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&Rs(t),null;case 13:return ip(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),fc(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(yi,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!De.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Os(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Os(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=nt(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),pc(e,t,r,o,n);case 15:return tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Go(e,t),t.tag=1,Ie(r)?(e=!0,mi(t)):e=!1,Xn(t,n),Jf(t,r,o),As(t,r,o,n),Is(null,t,r,!0,e,n);case 19:return lp(e,t,n);case 22:return np(e,t,n)}throw Error(_(156,t.tag))};function Cp(e,t){return Kd(e,t)}function em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new em(e,t,n,r)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===xa)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Za(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return gn(n.children,o,i,t);case va:l=8,o|=8;break;case os:return e=Ze(12,n,t,o|2),e.elementType=os,e.lanes=i,e;case is:return e=Ze(13,n,t,o),e.elementType=is,e.lanes=i,e;case ls:return e=Ze(19,n,t,o),e.elementType=ls,e.lanes=i,e;case Rd:return Gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:l=10;break e;case Nd:l=9;break e;case ya:l=11;break e;case xa:l=14;break e;case Bt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Rd,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,o,i,l,s,a){return e=new nm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(i),e}function rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kp(e){if(!e)return rn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ie(n))return kf(e,n,t)}return t}function Ep(e,t,n,r,o,i,l,s,a){return e=eu(n,r,!0,e,o,i,l,s,a),e.context=kp(null),n=e.current,r=Ne(),o=en(n),i=Ot(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,uo(e,o,r),Me(e,r),e}function Ki(e,t,n,r){var o=t.current,i=Ne(),l=en(o);return n=kp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(dt(e,o,l,i),Vo(e,o,l)),l}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){jc(e,t),(e=e.alternate)&&jc(e,t)}function om(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}Yi.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ki(e,t,null,null)};Yi.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Ki(null,e,null,null)}),t[At]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&rf(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function im(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ti(l);i.call(u)}}var l=Ep(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[At]=l.current,Xr(e.nodeType===8?e.parentNode:e),En(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ti(a);s.call(u)}}var a=eu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=a,e[At]=a.current,Xr(e.nodeType===8?e.parentNode:e),En(function(){Ki(t,a,n,r)}),a}function qi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ti(l);s.call(a)}}Ki(t,l,e,o)}else l=im(n,t,e,o,r);return Ti(l)}Zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Ca(t,n|1),Me(t,ae()),!(V&6)&&(or=ae()+500,sn()))}break;case 13:En(function(){var r=$t(e,1);if(r!==null){var o=Ne();dt(r,e,1,o)}}),tu(e,1)}};ka=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ne();dt(t,e,134217728,n)}tu(e,134217728)}};ef=function(e){if(e.tag===13){var t=en(e),n=$t(e,t);if(n!==null){var r=Ne();dt(n,e,t,r)}tu(e,t)}};tf=function(){return K};nf=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};gs=function(e,t,n){switch(t){case"input":if(us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bi(r);if(!o)throw Error(_(90));Ld(r),us(r,o)}}}break;case"textarea":$d(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Ud=Xa;Hd=En;var lm={usingClientEntryPoint:!1,Events:[fo,Mn,Bi,bd,Bd,Xa]},kr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Ii=Ao.inject(sm),kt=Ao}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(_(200));return rm(e,t,null,n)};Ke.createRoot=function(e,t){if(!ru(e))throw Error(_(299));var n=!1,r="",o=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,Xr(e.nodeType===8?e.parentNode:e),new nu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return En(e)};Ke.hydrate=function(e,t,n){if(!Xi(t))throw Error(_(200));return qi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!ru(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=jp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ep(t,null,e,1,n??null,o,!1,i,l),e[At]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yi(t)};Ke.render=function(e,t,n){if(!Xi(t))throw Error(_(200));return qi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(_(40));return e._reactRootContainer?(En(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ke.unstable_batchedUpdates=Xa;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return qi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)}catch(e){console.error(e)}}zp(),jd.exports=Ke;var am=jd.exports,_c=am;ns.createRoot=_c.createRoot,ns.hydrateRoot=_c.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)};function io(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",Br="-moz-",G="-webkit-",_p="comm",Ji="rule",ou="decl",um="@import",Tp="@keyframes",cm="@layer",Pp=Math.abs,iu=String.fromCharCode,Ys=Object.assign;function dm(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Np(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function qo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function ir(e,t,n){return e.slice(t,n)}function St(e){return e.length}function Rp(e){return e.length}function Rr(e,t){return t.push(e),e}function fm(e,t){return e.map(t).join("")}function Tc(e,t){return e.filter(function(n){return!_t(n,t)})}var Zi=1,lr=1,Op=0,ot=0,ce=0,pr="";function el(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Zi,column:lr,length:l,return:"",siblings:s}}function bt(e,t){return Ys(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=bt(e.root,{children:[e]});Rr(e,e.siblings)}function pm(){return ce}function hm(){return ce=ot>0?ge(pr,--ot):0,lr--,ce===10&&(lr=1,Zi--),ce}function ft(){return ce=ot<Op?ge(pr,ot++):0,lr++,ce===10&&(lr=1,Zi++),ce}function vn(){return ge(pr,ot)}function Jo(){return ot}function tl(e,t){return ir(pr,e,t)}function Xs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mm(e){return Zi=lr=1,Op=St(pr=e),ot=0,[]}function gm(e){return pr="",e}function Fl(e){return Np(tl(ot-1,qs(e===91?e+2:e===40?e+1:e)))}function vm(e){for(;(ce=vn())&&ce<33;)ft();return Xs(e)>2||Xs(ce)>3?"":" "}function ym(e,t){for(;--t&&ft()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return tl(e,Jo()+(t<6&&vn()==32&&ft()==32))}function qs(e){for(;ft();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&qs(ce);break;case 40:e===41&&qs(e);break;case 92:ft();break}return ot}function xm(e,t){for(;ft()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+tl(t,ot-1)+"*"+iu(e===47?e:ft())}function wm(e){for(;!Xs(vn());)ft();return tl(e,ot)}function Sm(e){return gm(Zo("",null,null,null,[""],e=mm(e),0,[0],e))}function Zo(e,t,n,r,o,i,l,s,a){for(var u=0,c=0,h=l,g=0,x=0,y=0,w=1,L=1,m=1,d=0,p="",S=o,T=i,z=r,E=p;L;)switch(y=d,d=ft()){case 40:if(y!=108&&ge(E,h-1)==58){qo(E+=F(Fl(d),"&","&\f"),"&\f",Pp(u?s[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Fl(d);break;case 9:case 10:case 13:case 32:E+=vm(y);break;case 92:E+=ym(Jo()-1,7);continue;case 47:switch(vn()){case 42:case 47:Rr(Cm(xm(ft(),Jo()),t,n,a),a);break;default:E+="/"}break;case 123*w:s[u++]=St(E)*m;case 125*w:case 59:case 0:switch(d){case 0:case 125:L=0;case 59+c:m==-1&&(E=F(E,/\f/g,"")),x>0&&St(E)-h&&Rr(x>32?Nc(E+";",r,n,h-1,a):Nc(F(E," ","")+";",r,n,h-2,a),a);break;case 59:E+=";";default:if(Rr(z=Pc(E,t,n,u,c,o,s,p,S=[],T=[],h,i),i),d===123)if(c===0)Zo(E,t,z,z,S,i,h,s,T);else switch(g===99&&ge(E,3)===110?100:g){case 100:case 108:case 109:case 115:Zo(e,z,z,r&&Rr(Pc(e,z,z,0,0,o,s,p,o,S=[],h,T),T),o,T,h,s,r?S:T);break;default:Zo(E,z,z,z,[""],T,0,s,T)}}u=c=x=0,w=m=1,p=E="",h=l;break;case 58:h=1+St(E),x=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&hm()==125)continue}switch(E+=iu(d),d*w){case 38:m=c>0?1:(E+="\f",-1);break;case 44:s[u++]=(St(E)-1)*m,m=1;break;case 64:vn()===45&&(E+=Fl(ft())),g=vn(),c=h=St(p=E+=wm(Jo())),d++;break;case 45:y===45&&St(E)==2&&(w=0)}}return i}function Pc(e,t,n,r,o,i,l,s,a,u,c,h){for(var g=o-1,x=o===0?i:[""],y=Rp(x),w=0,L=0,m=0;w<r;++w)for(var d=0,p=ir(e,g+1,g=Pp(L=l[w])),S=e;d<y;++d)(S=Np(L>0?x[d]+" "+p:F(p,/&\f/g,x[d])))&&(a[m++]=S);return el(e,t,n,o===0?Ji:s,a,u,c,h)}function Cm(e,t,n,r){return el(e,t,n,_p,iu(pm()),ir(e,2,-2),0,r)}function Nc(e,t,n,r,o){return el(e,t,n,ou,ir(e,0,r),ir(e,r+1,-1),r,o)}function Lp(e,t,n){switch(dm(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return Br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+Br+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+Z+e+e;case 6165:return G+e+Z+"flex-"+e+e;case 5187:return G+e+F(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return G+e+Z+"flex-item-"+F(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":Z+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return G+e+Z+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+Z+F(e,"shrink","negative")+e;case 5292:return G+e+Z+F(e,"basis","preferred-size")+e;case 6060:return G+"box-"+F(e,"-grow","")+G+e+Z+F(e,"grow","positive")+e;case 4554:return G+F(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!_t(e,/flex-|baseline/))return Z+"grid-column-align"+ir(e,t)+e;break;case 2592:case 3360:return Z+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,_t(r.props,/grid-\w+-end/)})?~qo(e+(n=n[t].value),"span",0)?e:Z+F(e,"-start","")+e+Z+"grid-row-span:"+(~qo(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":Z+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:Z+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+Br+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qo(e,"stretch",0)?Lp(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Z+o+":"+i+u+(l?Z+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return F(e,":",":"+G)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ge(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+Z+"$2box$3")+e;case 100:return F(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Pi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function km(e,t,n,r){switch(e.type){case cm:if(e.children.length)break;case um:case ou:return e.return=e.return||e.value;case _p:return"";case Tp:return e.return=e.value+"{"+Pi(e.children,r)+"}";case Ji:if(!St(e.value=e.props.join(",")))return""}return St(n=Pi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Em(e){var t=Rp(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function jm(e){return function(t){t.root||(t=t.return)&&e(t)}}function zm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ou:e.return=Lp(e.value,e.length,n);return;case Tp:return Pi([bt(e,{value:F(e.value,"@","@"+G)})],r);case Ji:if(e.length)return fm(n=e.props,function(o){switch(_t(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(bt(e,{props:[F(o,/:(read-\w+)/,":"+Br+"$1")]})),On(bt(e,{props:[o]})),Ys(e,{props:Tc(n,r)});break;case"::placeholder":On(bt(e,{props:[F(o,/:(plac\w+)/,":"+G+"input-$1")]})),On(bt(e,{props:[F(o,/:(plac\w+)/,":"+Br+"$1")]})),On(bt(e,{props:[F(o,/:(plac\w+)/,Z+"input-$1")]})),On(bt(e,{props:[o]})),Ys(e,{props:Tc(n,r)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},sr=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",Ap="active",$p="data-styled-version",nl="6.1.11",lu=`/*!sc*/
`,su=typeof window<"u"&&"HTMLElement"in window,Tm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),rl=Object.freeze([]),ar=Object.freeze({});function Pm(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var Dp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rm=/(^-|-$)/g;function Rc(e){return e.replace(Nm,"-").replace(Rm,"")}var Om=/(a)(d)/gi,$o=52,Oc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Js(e){var t,n="";for(t=Math.abs(e);t>$o;t=t/$o|0)n=Oc(t%$o)+n;return(Oc(t%$o)+n).replace(Om,"$1-$2")}var bl,Ip=5381,Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mp=function(e){return Wn(Ip,e)};function Fp(e){return Js(Mp(e)>>>0)}function Lm(e){return e.displayName||e.name||"Component"}function Bl(e){return typeof e=="string"&&!0}var bp=typeof Symbol=="function"&&Symbol.for,Bp=bp?Symbol.for("react.memo"):60115,Am=bp?Symbol.for("react.forward_ref"):60112,$m={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Im=((bl={})[Am]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bl[Bp]=Up,bl);function Lc(e){return("type"in(t=e)&&t.type.$$typeof)===Bp?Up:"$$typeof"in e?Im[e.$$typeof]:$m;var t}var Mm=Object.defineProperty,Fm=Object.getOwnPropertyNames,Ac=Object.getOwnPropertySymbols,bm=Object.getOwnPropertyDescriptor,Bm=Object.getPrototypeOf,$c=Object.prototype;function Hp(e,t,n){if(typeof t!="string"){if($c){var r=Bm(t);r&&r!==$c&&Hp(e,r,n)}var o=Fm(t);Ac&&(o=o.concat(Ac(t)));for(var i=Lc(e),l=Lc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Dm||n&&n[a]||l&&a in l||i&&a in i)){var u=bm(t,a);try{Mm(e,a,u)}catch{}}}}return e}function jn(e){return typeof e=="function"}function au(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ea(e,t,n){if(n===void 0&&(n=!1),!n&&!lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ea(e[r],t[r]);else if(lo(t))for(var r in t)e[r]=ea(e[r],t[r]);return e}function uu(e,t){Object.defineProperty(e,"toString",{value:t})}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Um=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw zn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(lu);return n},e}(),ei=new Map,Ni=new Map,ti=1,Do=function(e){if(ei.has(e))return ei.get(e);for(;Ni.has(ti);)ti++;var t=ti++;return ei.set(e,t),Ni.set(t,e),t},Hm=function(e,t){ti=t+1,ei.set(e,t),Ni.set(t,e)},Vm="style[".concat(sr,"][").concat($p,'="').concat(nl,'"]'),Wm=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Gm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(lu),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Wm);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Hm(c,u),Qm(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Km(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(sr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(sr,Ap),r.setAttribute($p,nl);var l=Km();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Ym=function(){function e(t){this.element=Vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Xm=function(){function e(t){this.element=Vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dc=su,Jm={isServer:!su,useCSSOMInjection:!Tm},Wp=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=je(je({},Jm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&su&&Dc&&(Dc=!1,function(i){for(var l=document.querySelectorAll(Vm),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(sr)!==Ap&&(Gm(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),uu(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(h){var g=function(m){return Ni.get(m)}(h);if(g===void 0)return"continue";var x=i.names.get(g),y=l.getGroup(h);if(x===void 0||y.length===0)return"continue";var w="".concat(sr,".g").concat(h,'[id="').concat(g,'"]'),L="";x!==void 0&&x.forEach(function(m){m.length>0&&(L+="".concat(m,","))}),a+="".concat(y).concat(w,'{content:"').concat(L,'"}').concat(lu)},c=0;c<s;c++)u(c);return a}(o)})}return e.registerId=function(t){return Do(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new qm(o):r?new Ym(o):new Xm(o)}(this.options),new Um(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Do(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Do(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Do(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Zm=/&/g,e2=/^\s*\/\/.*$/gm;function Qp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qp(n.children,t)),n})}function t2(e){var t,n,r,o=ar,i=o.options,l=i===void 0?ar:i,s=o.plugins,a=s===void 0?rl:s,u=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===Ji&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Zm,n).replace(r,u))}),l.prefix&&c.push(zm),c.push(km);var h=function(g,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var L=g.replace(e2,""),m=Sm(y||x?"".concat(y," ").concat(x," { ").concat(L," }"):L);l.namespace&&(m=Qp(m,l.namespace));var d=[];return Pi(m,Em(c.concat(jm(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,x){return x.name||zn(15),Wn(g,x.name)},Ip).toString():"",h}var n2=new Wp,ta=t2(),Gp=Pe.createContext({shouldForwardProp:void 0,styleSheet:n2,stylis:ta});Gp.Consumer;Pe.createContext(void 0);function Ic(){return ee.useContext(Gp)}var Kp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ta);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,uu(this,function(){throw zn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ta),this.name+t.hash},e}(),r2=function(e){return e>="A"&&e<="Z"};function Mc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;r2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Yp=function(e){return e==null||e===!1||e===""},Xp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Yp(i)&&(Array.isArray(i)&&i.isCss||jn(i)?r.push("".concat(Mc(o),":"),i,";"):lo(i)?r.push.apply(r,io(io(["".concat(o," {")],Xp(i),!1),["}"],!1)):r.push("".concat(Mc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _m||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(Yp(e))return[];if(au(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return yn(o,t,n,r)}var i;return e instanceof Kp?n?(e.inject(n,r),[e.getName(r)]):[e]:lo(e)?Xp(e):Array.isArray(e)?Array.prototype.concat.apply(rl,e.map(function(l){return yn(l,t,n,r)})):[e.toString()]}function o2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!au(n))return!1}return!0}var i2=Mp(nl),l2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o2(t),this.componentId=n,this.baseHash=Wn(i2,n),this.baseStyle=r,Wp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=Zs(yn(this.rules,t,n,r)),l=Js(Wn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=hn(o,l),this.staticRulesId=l}else{for(var a=Wn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var g=Zs(yn(h,t,n,r));a=Wn(a,g+c),u+=g}}if(u){var x=Js(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=hn(o,x)}}return o},e}(),Ri=Pe.createContext(void 0);Ri.Consumer;function s2(e){var t=Pe.useContext(Ri),n=ee.useMemo(function(){return function(r,o){if(!r)throw zn(14);if(jn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw zn(8);return o?je(je({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Pe.createElement(Ri.Provider,{value:n},e.children):null}var Ul={};function a2(e,t,n){var r=au(e),o=e,i=!Bl(e),l=t.attrs,s=l===void 0?rl:l,a=t.componentId,u=a===void 0?function(S,T){var z=typeof S!="string"?"sc":Rc(S);Ul[z]=(Ul[z]||0)+1;var E="".concat(z,"-").concat(Fp(nl+z+Ul[z]));return T?"".concat(T,"-").concat(E):E}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(S){return Bl(S)?"styled.".concat(S):"Styled(".concat(Lm(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Rc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;y=function(S,T){return w(S,T)&&L(S,T)}}else y=w}var m=new l2(n,g,r?o.componentStyle:void 0);function d(S,T){return function(z,E,N){var U=z.attrs,I=z.componentStyle,_e=z.defaultProps,W=z.foldedComponentIds,yt=z.styledComponentId,Nn=z.target,M=Pe.useContext(Ri),A=Ic(),$=z.shouldForwardProp||A.shouldForwardProp,j=Pm(E,M,_e)||ar,O=function(q,b,le){for(var Xe,be=je(je({},b),{className:void 0,theme:le}),jt=0;jt<q.length;jt+=1){var an=jn(Xe=q[jt])?Xe(be):Xe;for(var Le in an)be[Le]=Le==="className"?hn(be[Le],an[Le]):Le==="style"?je(je({},be[Le]),an[Le]):an[Le]}return b.className&&(be.className=hn(be.className,b.className)),be}(U,E,j),v=O.as||Nn,Q={};for(var P in O)O[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&O.theme===j||(P==="forwardedAs"?Q.as=O.forwardedAs:$&&!$(P,v)||(Q[P]=O[P]));var H=function(q,b){var le=Ic(),Xe=q.generateAndInjectStyles(b,le.styleSheet,le.stylis);return Xe}(I,O),Y=hn(W,yt);return H&&(Y+=" "+H),O.className&&(Y+=" "+O.className),Q[Bl(v)&&!Dp.has(v)?"class":"className"]=Y,Q.ref=N,ee.createElement(v,Q)}(p,S,T)}d.displayName=h;var p=Pe.forwardRef(d);return p.attrs=x,p.componentStyle=m,p.displayName=h,p.shouldForwardProp=y,p.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(T){for(var z=[],E=1;E<arguments.length;E++)z[E-1]=arguments[E];for(var N=0,U=z;N<U.length;N++)ea(T,U[N],!0);return T}({},o.defaultProps,S):S}}),uu(p,function(){return".".concat(p.styledComponentId)}),i&&Hp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Fc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var bc=function(e){return Object.assign(e,{isCss:!0})};function qp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||lo(e))return bc(yn(Fc(rl,io([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):bc(yn(Fc(r,t)))}function na(e,t,n){if(n===void 0&&(n=ar),!t)throw zn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,qp.apply(void 0,io([o],i,!1)))};return r.attrs=function(o){return na(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return na(e,t,je(je({},n),o))},r}var Jp=function(e){return na(a2,e)},k=Jp;Dp.forEach(function(e){k[e]=Jp(e)});function gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zs(qp.apply(void 0,io([e],t,!1))),o=Fp(r);return new Kp(o,r)}const Zp="/assets/doragacharla_lizy-D9u5FGKy.jpg",u2="/assets/doragacharla_lizy3-CXU4pxRz.jpg",We={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},c2=k.div`
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
`,d2=k.div`
  font-size: ${e=>e.scrolled?"20px":"24px"};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${We.ghostWhite};
  background-image: url(${Zp});
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
`,f2=k.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`,Hl=k.div`
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
`,p2=k.div`
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
    width: 40%;
    background-color: ${We.spaceCadet};
    transform: ${e=>e.open?"translateX(0)":"translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`,h2=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${We.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`,m2=k.div`
  background-image: url(${u2});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`,g2=k.div`
  color: ${We.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`,Io=k.a`
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
`,v2=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState(!1);ee.useEffect(()=>{const s=()=>{const a=window.scrollY;t(a>50);const u=["home","aboutme","knowmore","skills","projects","connect"],c=a;u.forEach(h=>{const g=document.getElementById(h);g&&g.offsetTop<=c+50&&r(h)})};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const l=s=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"}),i(!1)};return f.jsxs(c2,{scrolled:e,children:[f.jsx(d2,{scrolled:e}),f.jsxs(f2,{onClick:()=>i(!o),children:[f.jsx(Hl,{open:o}),f.jsx(Hl,{open:o}),f.jsx(Hl,{open:o})]}),f.jsxs(p2,{open:o,children:[f.jsxs(h2,{children:[f.jsx(m2,{}),f.jsx(g2,{children:"Doragacharla Lizy"})]}),f.jsx(Io,{className:n==="home"?"active":"",onClick:()=>l("home"),children:"Home"}),f.jsx(Io,{className:n==="aboutme"?"active":"",onClick:()=>l("aboutme"),children:"About me"}),f.jsx(Io,{className:n==="knowmore"?"active":"",onClick:()=>l("knowmore"),children:"Know More"}),f.jsx(Io,{className:n==="connect"?"active":"",onClick:()=>l("connect"),children:"Connect"})]})]})};var e1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bc=Pe.createContext&&Pe.createContext(e1),y2=["attr","size","title"];function x2(e,t){if(e==null)return{};var n=w2(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function w2(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function Uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Li(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uc(Object(n),!0).forEach(function(r){S2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S2(e,t,n){return t=C2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C2(e){var t=k2(e,"string");return typeof t=="symbol"?t:t+""}function k2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function t1(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Li({key:n},t.attr),t1(t.child)))}function ue(e){return t=>Pe.createElement(E2,Oi({attr:Li({},e.attr)},t),t1(e.child))}function E2(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=x2(e,y2),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Pe.createElement("svg",Oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Li(Li({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return Bc!==void 0?Pe.createElement(Bc.Consumer,null,n=>t(n)):t(e1)}function j2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"},child:[]}]})(e)}function z2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function _2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function T2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function P2(e){return ue({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"},child:[]}]})(e)}function N2(e){return ue({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"},child:[]}]})(e)}var n1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:D1,()=>(()=>{var n={75:function(l){(function(){var s,a,u,c,h,g;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(s()-h)/1e6},a=process.hrtime,c=(s=function(){var x;return 1e9*(x=a())[0]+x[1]})(),g=1e9*process.uptime(),h=c-g):Date.now?(l.exports=function(){return Date.now()-u},u=Date.now()):(l.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(l,s,a)=>{for(var u=a(75),c=typeof window>"u"?a.g:window,h=["moz","webkit"],g="AnimationFrame",x=c["request"+g],y=c["cancel"+g]||c["cancelRequest"+g],w=0;!x&&w<h.length;w++)x=c[h[w]+"Request"+g],y=c[h[w]+"Cancel"+g]||c[h[w]+"CancelRequest"+g];if(!x||!y){var L=0,m=0,d=[];x=function(p){if(d.length===0){var S=u(),T=Math.max(0,16.666666666666668-(S-L));L=T+S,setTimeout(function(){var z=d.slice(0);d.length=0;for(var E=0;E<z.length;E++)if(!z[E].cancelled)try{z[E].callback(L)}catch(N){setTimeout(function(){throw N},0)}},Math.round(T))}return d.push({handle:++m,callback:p,cancelled:!1}),m},y=function(p){for(var S=0;S<d.length;S++)d[S].handle===p&&(d[S].cancelled=!0)}}l.exports=function(p){return x.call(c,p)},l.exports.cancel=function(){y.apply(c,arguments)},l.exports.polyfill=function(p){p||(p=c),p.requestAnimationFrame=x,p.cancelAnimationFrame=y}}},r={};function o(l){var s=r[l];if(s!==void 0)return s.exports;var a=r[l]={exports:{}};return n[l].call(a.exports,a,a.exports,o),a.exports}o.n=l=>{var s=l&&l.__esModule?()=>l.default:()=>l;return o.d(s,{a:s}),s},o.d=(l,s)=>{for(var a in s)o.o(s,a)&&!o.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:s[a]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s);var i={};return(()=>{o.d(i,{default:()=>Nn});var l=o(4087),s=o.n(l);const a=function(M){return new RegExp(/<[a-z][\s\S]*>/i).test(M)},u=function(M,A){return Math.floor(Math.random()*(A-M+1))+M};var c="TYPE_CHARACTER",h="REMOVE_CHARACTER",g="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",y="PAUSE_FOR",w="CALL_FUNCTION",L="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",p="CHANGE_CURSOR",S="PASTE_STRING",T="HTML_TAG";function z(M){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},z(M)}function E(M,A){var $=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);A&&(j=j.filter(function(O){return Object.getOwnPropertyDescriptor(M,O).enumerable})),$.push.apply($,j)}return $}function N(M){for(var A=1;A<arguments.length;A++){var $=arguments[A]!=null?arguments[A]:{};A%2?E(Object($),!0).forEach(function(j){W(M,j,$[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors($)):E(Object($)).forEach(function(j){Object.defineProperty(M,j,Object.getOwnPropertyDescriptor($,j))})}return M}function U(M){return function(A){if(Array.isArray(A))return I(A)}(M)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(M)||function(A,$){if(A){if(typeof A=="string")return I(A,$);var j=Object.prototype.toString.call(A).slice(8,-1);return j==="Object"&&A.constructor&&(j=A.constructor.name),j==="Map"||j==="Set"?Array.from(A):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?I(A,$):void 0}}(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(M,A){(A==null||A>M.length)&&(A=M.length);for(var $=0,j=new Array(A);$<A;$++)j[$]=M[$];return j}function _e(M,A){for(var $=0;$<A.length;$++){var j=A[$];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(M,yt(j.key),j)}}function W(M,A,$){return(A=yt(A))in M?Object.defineProperty(M,A,{value:$,enumerable:!0,configurable:!0,writable:!0}):M[A]=$,M}function yt(M){var A=function($,j){if(z($)!=="object"||$===null)return $;var O=$[Symbol.toPrimitive];if(O!==void 0){var v=O.call($,"string");if(z(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)}(M);return z(A)==="symbol"?A:String(A)}const Nn=function(){function M(j,O){var v=this;if(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")}(this,M),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){v.state.elements.container&&(v.state.elements.wrapper.className=v.options.wrapperClassName,v.state.elements.cursor.className=v.options.cursorClassName,v.state.elements.cursor.innerHTML=v.options.cursor,v.state.elements.container.innerHTML="",v.state.elements.container.appendChild(v.state.elements.wrapper),v.state.elements.container.appendChild(v.state.elements.cursor))}),W(this,"start",function(){return v.state.eventLoopPaused=!1,v.runEventLoop(),v}),W(this,"pause",function(){return v.state.eventLoopPaused=!0,v}),W(this,"stop",function(){return v.state.eventLoop&&((0,l.cancel)(v.state.eventLoop),v.state.eventLoop=null),v}),W(this,"pauseFor",function(P){return v.addEventToQueue(y,{ms:P}),v}),W(this,"typeOutAllStrings",function(){return typeof v.options.strings=="string"?(v.typeString(v.options.strings).pauseFor(v.options.pauseFor),v):(v.options.strings.forEach(function(P){v.typeString(P).pauseFor(v.options.pauseFor).deleteAll(v.options.deleteSpeed)}),v)}),W(this,"typeString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(P))return v.typeOutHTMLString(P,H);if(P){var Y=(v.options||{}).stringSplitter,q=typeof Y=="function"?Y(P):P.split("");v.typeCharacters(q,H)}return v}),W(this,"pasteString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(P)?v.typeOutHTMLString(P,H,!0):(P&&v.addEventToQueue(S,{character:P,node:H}),v)}),W(this,"typeOutHTMLString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Y=arguments.length>2?arguments[2]:void 0,q=function(be){var jt=document.createElement("div");return jt.innerHTML=be,jt.childNodes}(P);if(q.length>0)for(var b=0;b<q.length;b++){var le=q[b],Xe=le.innerHTML;le&&le.nodeType!==3?(le.innerHTML="",v.addEventToQueue(L,{node:le,parentNode:H}),Y?v.pasteString(Xe,le):v.typeString(Xe,le)):le.textContent&&(Y?v.pasteString(le.textContent,H):v.typeString(le.textContent,H))}return v}),W(this,"deleteAll",function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return v.addEventToQueue(g,{speed:P}),v}),W(this,"changeDeleteSpeed",function(P){if(!P)throw new Error("Must provide new delete speed");return v.addEventToQueue(m,{speed:P}),v}),W(this,"changeDelay",function(P){if(!P)throw new Error("Must provide new delay");return v.addEventToQueue(d,{delay:P}),v}),W(this,"changeCursor",function(P){if(!P)throw new Error("Must provide new cursor");return v.addEventToQueue(p,{cursor:P}),v}),W(this,"deleteChars",function(P){if(!P)throw new Error("Must provide amount of characters to delete");for(var H=0;H<P;H++)v.addEventToQueue(h);return v}),W(this,"callFunction",function(P,H){if(!P||typeof P!="function")throw new Error("Callback must be a function");return v.addEventToQueue(w,{cb:P,thisArg:H}),v}),W(this,"typeCharacters",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(Y){v.addEventToQueue(c,{character:Y,node:H})}),v}),W(this,"removeCharacters",function(P){if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(){v.addEventToQueue(h)}),v}),W(this,"addEventToQueue",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.addEventToStateProperty(P,H,Y,"eventQueue")}),W(this,"addReverseCalledEvent",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.options.loop?v.addEventToStateProperty(P,H,Y,"reverseCalledEvents"):v}),W(this,"addEventToStateProperty",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2],q=arguments.length>3?arguments[3]:void 0,b={eventName:P,eventArgs:H||{}};return v.state[q]=Y?[b].concat(U(v.state[q])):[].concat(U(v.state[q]),[b]),v}),W(this,"runEventLoop",function(){v.state.lastFrameTime||(v.state.lastFrameTime=Date.now());var P=Date.now(),H=P-v.state.lastFrameTime;if(!v.state.eventQueue.length){if(!v.options.loop)return;v.state.eventQueue=U(v.state.calledEvents),v.state.calledEvents=[],v.options=N({},v.state.initialOptions)}if(v.state.eventLoop=s()(v.runEventLoop),!v.state.eventLoopPaused){if(v.state.pauseUntil){if(P<v.state.pauseUntil)return;v.state.pauseUntil=null}var Y,q=U(v.state.eventQueue),b=q.shift();if(!(H<=(Y=b.eventName===x||b.eventName===h?v.options.deleteSpeed==="natural"?u(40,80):v.options.deleteSpeed:v.options.delay==="natural"?u(120,160):v.options.delay))){var le=b.eventName,Xe=b.eventArgs;switch(v.logInDevMode({currentEvent:b,state:v.state,delay:Y}),le){case S:case c:var be=Xe.character,jt=Xe.node,an=document.createTextNode(be),Le=an;v.options.onCreateTextNode&&typeof v.options.onCreateTextNode=="function"&&(Le=v.options.onCreateTextNode(be,an)),Le&&(jt?jt.appendChild(Le):v.state.elements.wrapper.appendChild(Le)),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:"TEXT_NODE",character:be,node:Le}]);break;case h:q.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case y:var T1=b.eventArgs.ms;v.state.pauseUntil=Date.now()+parseInt(T1);break;case w:var gu=b.eventArgs,P1=gu.cb,N1=gu.thisArg;P1.call(N1,{elements:v.state.elements});break;case L:var vu=b.eventArgs,ul=vu.node,cl=vu.parentNode;cl?cl.appendChild(ul):v.state.elements.wrapper.appendChild(ul),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:T,node:ul,parentNode:cl||v.state.elements.wrapper}]);break;case g:var R1=v.state.visibleNodes,dl=Xe.speed,go=[];dl&&go.push({eventName:m,eventArgs:{speed:dl,temp:!0}});for(var yu=0,O1=R1.length;yu<O1;yu++)go.push({eventName:x,eventArgs:{removingCharacterNode:!1}});dl&&go.push({eventName:m,eventArgs:{speed:v.options.deleteSpeed,temp:!0}}),q.unshift.apply(q,go);break;case x:var L1=b.eventArgs.removingCharacterNode;if(v.state.visibleNodes.length){var fl=v.state.visibleNodes.pop(),A1=fl.type,vo=fl.node,$1=fl.character;v.options.onRemoveNode&&typeof v.options.onRemoveNode=="function"&&v.options.onRemoveNode({node:vo,character:$1}),vo&&vo.parentNode.removeChild(vo),A1===T&&L1&&q.unshift({eventName:x,eventArgs:{}})}break;case m:v.options.deleteSpeed=b.eventArgs.speed;break;case d:v.options.delay=b.eventArgs.delay;break;case p:v.options.cursor=b.eventArgs.cursor,v.state.elements.cursor.innerHTML=b.eventArgs.cursor}v.options.loop&&(b.eventName===x||b.eventArgs&&b.eventArgs.temp||(v.state.calledEvents=[].concat(U(v.state.calledEvents),[b]))),v.state.eventQueue=q,v.state.lastFrameTime=P}}}),j)if(typeof j=="string"){var Q=document.querySelector(j);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=j;O&&(this.options=N(N({},this.options),O)),this.state.initialOptions=N({},this.options),this.init()}var A,$;return A=M,($=[{key:"init",value:function(){var j,O;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(O=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(O),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&_e(A.prototype,$),Object.defineProperty(A,"prototype",{writable:!1}),M}()})(),i.default})())})(n1);var R2=n1.exports;const O2=pd(R2),Hc="/assets/doragacharla_lizy_resume-CprIYGCe.pdf",L2="/assets/star-BWEquncH.png";function Vc(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Wc(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function A2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function $2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function D2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function I2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function M2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function F2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Qc(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function b2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function B2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function U2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function H2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function V2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z"},child:[]}]})(e)}function W2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65z"},child:[]}]})(e)}const Q2="/assets/about1-BUwqwXmI.jpg",G2="/assets/about2-DUDpJcN3.webp",K2="/assets/about3-mUmQ87ht.jpeg",Y2=gt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-90deg);
  }
`,X2=gt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
`,q2=gt`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,J2=gt`
  from {
    transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,Z2=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  overflow: hidden;
`,eg=k.h1`
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
`,tg=k.div`
  position: relative;
  width: 50%;
  height: 400px;
  perspective: 1000px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`,ng=k.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(${e=>e.rotation}deg);
  transition: transform 0.5s;
  animation: ${e=>e.slideIn?e.direction==="up"?q2:J2:e.direction==="up"?Y2:X2} 0.5s forwards;
`,cu=k.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid #fff;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  backface-visibility: hidden;
  padding: 20px;
 @media (max-width: 768px) {
  flex-direction:column;
  }
`,rg=k(cu)`
  transform: rotateX(0deg) translateZ(200px);
`,og=k(cu)`
  transform: rotateX(180deg) translateZ(200px);
`,Gc=k(cu)`
  transform: rotateY(${e=>e.rotate}deg) translateZ(200px);
`,ig=k.div`
  padding: 10px;
  width: 100%;
  max-width: 600px;
  display:flex;align-items:center;
  justify-content:center;
  flex-direction:column;
`,lg=k.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Kc=k.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,sg=k.div`
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
    height: 500px;
  }
`,ag=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Yc=k.button`
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
`,ug=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Vl=[f.jsx(H2,{}),f.jsx(B2,{}),f.jsx(I2,{}),f.jsx(A2,{})],cg=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(!0),[o,i]=ee.useState("up"),[l,s]=ee.useState(0),a=[{title:"Development Experience",paragraph:"Proficient in React, with expertise in building interactive user interfaces, problem-solving, working with APIs, and developing data-driven components.",image:Q2,icon:Vl[0]},{title:"Data Skills & Learning Journey",paragraph:"Actively learning Python, SQL,stats,power BI,Tabeleu, machine learning,deep learning,computer vision frameworks and nlp basics while working on personal projects in data visualization and predictive modeling.",image:G2,icon:Vl[1]},{title:"Career Goal",paragraph:"Aspiring to contribute to data-driven solutions by blending development expertise with analytical capabilities and continuously evolving as a data professional.",image:K2,icon:Vl[2]}];ee.useEffect(()=>{const h=setInterval(()=>{r(!1),i("up"),setTimeout(()=>{t(g=>(g+1)%a.length),s(g=>g-90),r(!0)},500)},1e4);return()=>clearInterval(h)},[a.length]);const u=()=>{r(!1),i("up"),setTimeout(()=>{t(h=>(h+1)%a.length),s(h=>h-90),r(!0)},500)},c=()=>{r(!1),i("down"),setTimeout(()=>{t(h=>(h-1+a.length)%a.length),s(h=>h+90),r(!0)},500)};return f.jsxs(Z2,{id:"aboutme",children:[f.jsx(eg,{children:"About Me"}),f.jsx(Kc,{style:{fontSize:"25px",fontWeight:"bold"},children:"Passionate tech professional transitioning from Frontend Development to Data Analytics and Data Science."}),f.jsx(tg,{children:f.jsxs(ng,{rotation:l,slideIn:n,direction:o,children:[f.jsxs(rg,{children:[f.jsxs(ig,{children:[f.jsxs(lg,{children:[a[e].icon," ",a[e].title]}),f.jsx(Kc,{children:a[e].paragraph})]}),f.jsx(sg,{children:f.jsx(ag,{src:a[e].image,alt:a[e].title})})]}),f.jsx(og,{}),f.jsx(Gc,{rotate:"90deg"}),f.jsx(Gc,{rotate:"-90deg"})]})}),f.jsxs(ug,{children:[f.jsx(Yc,{onClick:c,children:f.jsx(W2,{})}),f.jsx(Yc,{onClick:u,children:f.jsx(V2,{})})]})]})},ut={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},dg=gt`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,fg=gt`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
`,pg=k.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  height: 100vh;
  color: ${ut.ghostWhite};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
    text-align: center;
      height: 100vh;

  }
`,hg=k.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,mg=k.p`
  font-size: 1.2em;
  max-width: 80%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,gg=k.div`
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
`,vg=k.div`
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
`,yg=k.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${dg} 20s linear infinite;
  transform: rotate(-45deg);

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
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
    background: url(${L2}) center/50% no-repeat;
    box-shadow: 0 0 0 5px ${ut.spaceCadet};
    animation: ${fg} 2s linear infinite;
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
`,xg=k.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,wg=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Sg=k.div`
  font-size: 2.2em;
  color: ${ut.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`,Cg=k.div`
  display: flex;
  align-items: center;
`,Mo=k.a`
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
`,Wl=k.a`
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
`;k.div`
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
`;const kg=()=>{ee.useEffect(()=>{const t=new O2("#typing-effect-container",{strings:["Currently working as a Front End Developer","Passionate in Data Analysis and Data Science"],autoStart:!0,loop:!0,deleteSpeed:20,delay:80});return()=>{t.stop()}},[]);const e=()=>{const t=document.getElementById("aboutme");t&&t.scrollIntoView({behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsxs(pg,{id:"home",children:[f.jsxs(vg,{children:[f.jsx(yg,{}),f.jsx(xg,{children:f.jsx(wg,{src:Zp,alt:"Profile"})})]}),f.jsxs(gg,{children:[f.jsx(hg,{children:"Hi, I'm Lizy Doragacharla"}),f.jsx(Sg,{id:"typing-effect-container"}),f.jsx(mg,{children:"To transition from a frontend developer role into a data-focused career as a data analyst or data scientist by leveraging existing technical skills, continuously building expertise in data-related tools and methodologies, developing practical projects, and actively networking with industry professionals to secure relevant opportunities.          "}),f.jsxs(Cg,{children:[f.jsx(Mo,{href:"https://www.linkedin.com/in/lizy-d-371971233/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(_2,{})}),f.jsx(Mo,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(z2,{})}),f.jsx(Mo,{href:"mailto:lizydoragacharla@gmail.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(N2,{})}),f.jsx(Mo,{href:"https://wa.me/918106868075",target:"_blank",rel:"noopener noreferrer",children:f.jsx(P2,{})})]}),f.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[f.jsx(Wl,{onClick:e,children:"About Me"}),f.jsx(Wl,{href:Hc,download:!0,children:f.jsx(T2,{})}),f.jsx(Wl,{href:Hc,target:"_blank",rel:"noopener noreferrer",children:f.jsx(j2,{})})]})]})]}),f.jsx(cg,{})]})};function r1(e,t){return function(){return e.apply(t,arguments)}}const{toString:Eg}=Object.prototype,{getPrototypeOf:du}=Object,ol=(e=>t=>{const n=Eg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=e=>(e=e.toLowerCase(),t=>ol(t)===e),il=e=>t=>typeof t===e,{isArray:hr}=Array,so=il("undefined");function jg(e){return e!==null&&!so(e)&&e.constructor!==null&&!so(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const o1=vt("ArrayBuffer");function zg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&o1(e.buffer),t}const _g=il("string"),tt=il("function"),i1=il("number"),ll=e=>e!==null&&typeof e=="object",Tg=e=>e===!0||e===!1,ni=e=>{if(ol(e)!=="object")return!1;const t=du(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pg=vt("Date"),Ng=vt("File"),Rg=vt("Blob"),Og=vt("FileList"),Lg=e=>ll(e)&&tt(e.pipe),Ag=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=ol(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},$g=vt("URLSearchParams"),[Dg,Ig,Mg,Fg]=["ReadableStream","Request","Response","Headers"].map(vt),bg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ho(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function l1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const s1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,a1=e=>!so(e)&&e!==s1;function ra(){const{caseless:e}=a1(this)&&this||{},t={},n=(r,o)=>{const i=e&&l1(t,o)||o;ni(t[i])&&ni(r)?t[i]=ra(t[i],r):ni(r)?t[i]=ra({},r):hr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ho(arguments[r],n);return t}const Bg=(e,t,n,{allOwnKeys:r}={})=>(ho(t,(o,i)=>{n&&tt(o)?e[i]=r1(o,n):e[i]=o},{allOwnKeys:r}),e),Ug=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Vg=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&du(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Wg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qg=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!i1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Gg=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&du(Uint8Array)),Kg=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Yg=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xg=vt("HTMLFormElement"),qg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Xc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jg=vt("RegExp"),u1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ho(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},Zg=e=>{u1(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},e3=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},t3=()=>{},n3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ql="abcdefghijklmnopqrstuvwxyz",qc="0123456789",c1={DIGIT:qc,ALPHA:Ql,ALPHA_DIGIT:Ql+Ql.toUpperCase()+qc},r3=(e=16,t=c1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function o3(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const i3=e=>{const t=new Array(10),n=(r,o)=>{if(ll(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=hr(r)?[]:{};return ho(r,(l,s)=>{const a=n(l,o+1);!so(a)&&(i[s]=a)}),t[o]=void 0,i}}return r};return n(e,0)},l3=vt("AsyncFunction"),s3=e=>e&&(ll(e)||tt(e))&&tt(e.then)&&tt(e.catch),C={isArray:hr,isArrayBuffer:o1,isBuffer:jg,isFormData:Ag,isArrayBufferView:zg,isString:_g,isNumber:i1,isBoolean:Tg,isObject:ll,isPlainObject:ni,isReadableStream:Dg,isRequest:Ig,isResponse:Mg,isHeaders:Fg,isUndefined:so,isDate:Pg,isFile:Ng,isBlob:Rg,isRegExp:Jg,isFunction:tt,isStream:Lg,isURLSearchParams:$g,isTypedArray:Gg,isFileList:Og,forEach:ho,merge:ra,extend:Bg,trim:bg,stripBOM:Ug,inherits:Hg,toFlatObject:Vg,kindOf:ol,kindOfTest:vt,endsWith:Wg,toArray:Qg,forEachEntry:Kg,matchAll:Yg,isHTMLForm:Xg,hasOwnProperty:Xc,hasOwnProp:Xc,reduceDescriptors:u1,freezeMethods:Zg,toObjectSet:e3,toCamelCase:qg,noop:t3,toFiniteNumber:n3,findKey:l1,global:s1,isContextDefined:a1,ALPHABET:c1,generateString:r3,isSpecCompliantForm:o3,toJSONObject:i3,isAsyncFn:l3,isThenable:s3};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const d1=D.prototype,f1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{f1[e]={value:e}});Object.defineProperties(D,f1);Object.defineProperty(d1,"isAxiosError",{value:!0});D.from=(e,t,n,r,o,i)=>{const l=Object.create(d1);return C.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),D.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const a3=null;function oa(e){return C.isPlainObject(e)||C.isArray(e)}function p1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Jc(e,t,n){return e?e.concat(t).map(function(o,i){return o=p1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function u3(e){return C.isArray(e)&&!e.some(oa)}const c3=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function sl(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,L){return!C.isUndefined(L[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!a&&C.isBlob(y))throw new D("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,L){let m=y;if(y&&!L&&typeof y=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&u3(y)||(C.isFileList(y)||C.endsWith(w,"[]"))&&(m=C.toArray(y)))return w=p1(w),m.forEach(function(p,S){!(C.isUndefined(p)||p===null)&&t.append(l===!0?Jc([w],S,i):l===null?w:w+"[]",u(p))}),!1}return oa(y)?!0:(t.append(Jc(L,w,i),u(y)),!1)}const h=[],g=Object.assign(c3,{defaultVisitor:c,convertValue:u,isVisitable:oa});function x(y,w){if(!C.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),C.forEach(y,function(m,d){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(d)?d.trim():d,w,g))===!0&&x(m,w?w.concat(d):[d])}),h.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Zc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fu(e,t){this._pairs=[],e&&sl(e,this,t)}const h1=fu.prototype;h1.append=function(t,n){this._pairs.push([t,n])};h1.toString=function(t){const n=t?function(r){return t.call(this,r,Zc)}:Zc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function d3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m1(e,t,n){if(!t)return e;const r=n&&n.encode||d3,o=n&&n.serialize;let i;if(o?i=o(t,n):i=C.isURLSearchParams(t)?t.toString():new fu(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ed{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const g1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},f3=typeof URLSearchParams<"u"?URLSearchParams:fu,p3=typeof FormData<"u"?FormData:null,h3=typeof Blob<"u"?Blob:null,m3={isBrowser:!0,classes:{URLSearchParams:f3,FormData:p3,Blob:h3},protocols:["http","https","file","blob","url","data"]},pu=typeof window<"u"&&typeof document<"u",g3=(e=>pu&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),v3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",y3=pu&&window.location.href||"http://localhost",x3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pu,hasStandardBrowserEnv:g3,hasStandardBrowserWebWorkerEnv:v3,origin:y3},Symbol.toStringTag,{value:"Module"})),pt={...x3,...m3};function w3(e,t){return sl(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return pt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function S3(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function C3(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function v1(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&C.isArray(o)?o.length:l,a?(C.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!s):((!o[l]||!C.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&C.isArray(o[l])&&(o[l]=C3(o[l])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,o)=>{t(S3(r),o,n,0)}),n}return null}function k3(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const mo={transitional:g1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o?JSON.stringify(v1(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return w3(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return sl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),k3(t)):t}],transformResponse:[function(t){const n=this.transitional||mo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?D.from(s,D.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{mo.headers[e]={}});const E3=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),j3=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&E3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},td=Symbol("internals");function Er(e){return e&&String(e).trim().toLowerCase()}function ri(e){return e===!1||e==null?e:C.isArray(e)?e.map(ri):String(e)}function z3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gl(e,t,n,r,o){if(C.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function T3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function P3(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class Fe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const c=Er(a);if(!c)throw new Error("header name must be a non-empty string");const h=C.findKey(o,c);(!h||o[h]===void 0||u===!0||u===void 0&&o[h]!==!1)&&(o[h||a]=ri(s))}const l=(s,a)=>C.forEach(s,(u,c)=>i(u,c,a));if(C.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(C.isString(t)&&(t=t.trim())&&!_3(t))l(j3(t),n);else if(C.isHeaders(t))for(const[s,a]of t.entries())i(a,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Er(t),t){const r=C.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return z3(o);if(C.isFunction(n))return n.call(this,o,r);if(C.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Er(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Gl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Er(l),l){const s=C.findKey(r,l);s&&(!n||Gl(r,r[s],s,n))&&(delete r[s],o=!0)}}return C.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Gl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return C.forEach(this,(o,i)=>{const l=C.findKey(r,i);if(l){n[l]=ri(o),delete n[i];return}const s=t?T3(i):String(i).trim();s!==i&&delete n[i],n[s]=ri(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[td]=this[td]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=Er(l);r[s]||(P3(o,l),r[s]=!0)}return C.isArray(t)?t.forEach(i):i(t),this}}Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(Fe);function Kl(e,t){const n=this||mo,r=t||n,o=Fe.from(r.headers);let i=r.data;return C.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function y1(e){return!!(e&&e.__CANCEL__)}function mr(e,t,n){D.call(this,e??"canceled",D.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(mr,D,{__CANCEL__:!0});function x1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function N3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function R3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];l||(l=u),n[o]=a,r[o]=u;let h=i,g=0;for(;h!==o;)g+=n[h++],h=h%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=c&&u-c;return x?Math.round(g*1e3/x):void 0}}function O3(e,t){let n=0;const r=1e3/t;let o=null;return function(){const l=this===!0,s=Date.now();if(l||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Ai=(e,t,n=3)=>{let r=0;const o=R3(50,250);return O3(i=>{const l=i.loaded,s=i.lengthComputable?i.total:void 0,a=l-r,u=o(a),c=l<=s;r=l;const h={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-l)/u:void 0,event:i,lengthComputable:s!=null};h[t?"download":"upload"]=!0,e(h)},n)},L3=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const s=C.isString(l)?o(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),A3=pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const l=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),C.isString(r)&&l.push("path="+r),C.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function D3(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function w1(e,t){return e&&!$3(t)?D3(e,t):t}const nd=e=>e instanceof Fe?{...e}:e;function _n(e,t){t=t||{};const n={};function r(u,c,h){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge.call({caseless:h},u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function o(u,c,h){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function i(u,c){if(!C.isUndefined(c))return r(void 0,c)}function l(u,c){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,h){if(h in t)return r(u,c);if(h in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,c)=>o(nd(u),nd(c),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=a[c]||o,g=h(e[c],t[c],c);C.isUndefined(g)&&h!==s||(n[c]=g)}),n}const S1=e=>{const t=_n({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;t.headers=l=Fe.from(l),t.url=m1(w1(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(C.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[u,...c]=a?a.split(";").map(h=>h.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...c].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&C.isFunction(r)&&(r=r(t)),r||r!==!1&&L3(t.url))){const u=o&&i&&A3.read(i);u&&l.set(o,u)}return t},I3=typeof XMLHttpRequest<"u",M3=I3&&function(e){return new Promise(function(n,r){const o=S1(e);let i=o.data;const l=Fe.from(o.headers).normalize();let{responseType:s}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function h(){if(!c)return;const x=Fe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};x1(function(m){n(m),u()},function(m){r(m),u()},w),c=null}"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new D("Request aborted",D.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new D("Network Error",D.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||g1;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new D(y,w.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,o,c)),c=null},i===void 0&&l.setContentType(null),"setRequestHeader"in c&&C.forEach(l.toJSON(),function(y,w){c.setRequestHeader(w,y)}),C.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),s&&s!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Ai(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ai(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=x=>{c&&(r(!x||x.type?new mr(null,e,c):x),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const g=N3(o.url);if(g&&pt.protocols.indexOf(g)===-1){r(new D("Unsupported protocol "+g+":",D.ERR_BAD_REQUEST,e));return}c.send(i||null)})},F3=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,l();const u=a instanceof Error?a:this.reason;n.abort(u instanceof D?u:new mr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new D(`timeout ${t} of ms exceeded`,D.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=l,[s,()=>{i&&clearTimeout(i),i=null}]},b3=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},B3=async function*(e,t,n){for await(const r of e)yield*b3(ArrayBuffer.isView(r)?r:await n(String(r)),t)},rd=(e,t,n,r,o)=>{const i=B3(e,t,o);let l=0;return new ReadableStream({type:"bytes",async pull(s){const{done:a,value:u}=await i.next();if(a){s.close(),r();return}let c=u.byteLength;n&&n(l+=c),s.enqueue(new Uint8Array(u))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},od=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},al=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",C1=al&&typeof ReadableStream=="function",ia=al&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),U3=C1&&(()=>{let e=!1;const t=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),id=64*1024,la=C1&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),$i={stream:la&&(e=>e.body)};al&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$i[t]&&($i[t]=C.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new D(`Response type '${t}' is not supported`,D.ERR_NOT_SUPPORT,r)})})})(new Response);const H3=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(C.isArrayBufferView(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await ia(e)).byteLength},V3=async(e,t)=>{const n=C.toFiniteNumber(e.getContentLength());return n??H3(t)},W3=al&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:u,headers:c,withCredentials:h="same-origin",fetchOptions:g}=S1(e);u=u?(u+"").toLowerCase():"text";let[x,y]=o||i||l?F3([o,i],l):[],w,L;const m=()=>{!w&&setTimeout(()=>{x&&x.unsubscribe()}),w=!0};let d;try{if(a&&U3&&n!=="get"&&n!=="head"&&(d=await V3(c,r))!==0){let z=new Request(t,{method:"POST",body:r,duplex:"half"}),E;C.isFormData(r)&&(E=z.headers.get("content-type"))&&c.setContentType(E),z.body&&(r=rd(z.body,id,od(d,Ai(a)),null,ia))}C.isString(h)||(h=h?"cors":"omit"),L=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let p=await fetch(L);const S=la&&(u==="stream"||u==="response");if(la&&(s||S)){const z={};["status","statusText","headers"].forEach(N=>{z[N]=p[N]});const E=C.toFiniteNumber(p.headers.get("content-length"));p=new Response(rd(p.body,id,s&&od(E,Ai(s,!0)),S&&m,ia),z)}u=u||"text";let T=await $i[C.findKey($i,u)||"text"](p,e);return!S&&m(),y&&y(),await new Promise((z,E)=>{x1(z,E,{data:T,headers:Fe.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:L})})}catch(p){throw m(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,e,L),{cause:p.cause||p}):D.from(p,p&&p.code,e,L)}}),sa={http:a3,xhr:M3,fetch:W3};C.forEach(sa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ld=e=>`- ${e}`,Q3=e=>C.isFunction(e)||e===null||e===!1,k1={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!Q3(n)&&(r=sa[(l=String(n)).toLowerCase()],r===void 0))throw new D(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(ld).join(`
`):" "+ld(i[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:sa};function Yl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr(null,e)}function sd(e){return Yl(e),e.headers=Fe.from(e.headers),e.data=Kl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),k1.getAdapter(e.adapter||mo.adapter)(e).then(function(r){return Yl(e),r.data=Kl.call(e,e.transformResponse,r),r.headers=Fe.from(r.headers),r},function(r){return y1(r)||(Yl(e),r&&r.response&&(r.response.data=Kl.call(e,e.transformResponse,r.response),r.response.headers=Fe.from(r.response.headers))),Promise.reject(r)})}const E1="1.7.2",hu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ad={};hu.transitional=function(t,n,r){function o(i,l){return"[Axios v"+E1+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new D(o(l," has been removed"+(n?" in "+n:"")),D.ERR_DEPRECATED);return n&&!ad[l]&&(ad[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};function G3(e,t,n){if(typeof e!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new D("option "+i+" must be "+a,D.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}}const aa={assertOptions:G3,validators:hu},Ft=aa.validators;class xn{constructor(t){this.defaults=t,this.interceptors={request:new ed,response:new ed}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_n(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&aa.assertOptions(r,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),o!=null&&(C.isFunction(o)?n.paramsSerializer={serialize:o}:aa.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&C.merge(i.common,i[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Fe.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,h=0,g;if(!a){const y=[sd.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),g=y.length,c=Promise.resolve(n);h<g;)c=c.then(y[h++],y[h++]);return c}g=s.length;let x=n;for(h=0;h<g;){const y=s[h++],w=s[h++];try{x=y(x)}catch(L){w.call(this,L);break}}try{c=sd.call(this,x)}catch(y){return Promise.reject(y)}for(h=0,g=u.length;h<g;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=_n(this.defaults,t);const n=w1(t.baseURL,t.url);return m1(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(n,r){return this.request(_n(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,s){return this.request(_n(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}xn.prototype[t]=n(),xn.prototype[t+"Form"]=n(!0)});class mu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new mr(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new mu(function(o){t=o}),cancel:t}}}function K3(e){return function(n){return e.apply(null,n)}}function Y3(e){return C.isObject(e)&&e.isAxiosError===!0}const ua={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ua).forEach(([e,t])=>{ua[t]=e});function j1(e){const t=new xn(e),n=r1(xn.prototype.request,t);return C.extend(n,xn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return j1(_n(e,o))},n}const fe=j1(mo);fe.Axios=xn;fe.CanceledError=mr;fe.CancelToken=mu;fe.isCancel=y1;fe.VERSION=E1;fe.toFormData=sl;fe.AxiosError=D;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=K3;fe.isAxiosError=Y3;fe.mergeConfig=_n;fe.AxiosHeaders=Fe;fe.formToJSON=e=>v1(C.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=k1.getAdapter;fe.HttpStatusCode=ua;fe.default=fe;const ur={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},X3=gt`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`,q3=k.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${X3} 2.5s infinite;
    }
`,J3=gt`
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
`,Z3=k.section`
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
`,e4=k.section`
    color: #e0e1ddff; /* platinum */
`,t4=k.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    text-align: center;
        padding: 0 60px;

`;k.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation: ${J3} 2s linear infinite;
    z-index: 1;
`;k.div`
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
`;const n4=k.h2`
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
`,r4=k.p`
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
`,o4=k.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,i4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,l4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,s4=k.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`,Xl=k.a`
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
`,a4=k.div`
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
`,u4=k.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`,ud=k.input`
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
`,c4=k.textarea`
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
`,cd=k.button`
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
`,d4=gt`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`,f4=gt`
    from { width: 0; }
    to { width: 100%; }
`,p4=k.p`
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
            animation: ${d4} 0.3s ease forwards;
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
            animation: ${f4} 1s steps(20, end) forwards;
        }
    }
`,h4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:f.jsx("path",{fill:"#000",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),m4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 64 64",children:f.jsx("path",{fill:"#000",d:"M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"})}),g4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",children:f.jsx("path",{fill:"#000",d:"M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"})}),v4=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState({name:"",email:"",message:""}),l=u=>{const{name:c,value:h}=u.target;i(g=>({...g,[c]:h}))},s=async u=>{u.preventDefault(),t(!0);try{(await fe.post("https://api.web3forms.com/submit",{access_key:"8e4c1901-d8c1-4df8-aa46-700466520582",...o})).data.success?(r("Thank you for your message. We will get back to you soon."),i({name:"",email:"",message:""}),setTimeout(()=>r(""),5e3)):r("An error occurred. Please try again later.")}catch(c){console.error("Submission error:",c),r("An error occurred. Please try again later.")}t(!1)},a=()=>{window.location.href="mailto:lizdoragacharla@gmail.com"};return f.jsx(e4,{id:"connect",children:f.jsxs(Z3,{children:[f.jsxs(a4,{children:[f.jsxs(u4,{onSubmit:s,children:[f.jsx(ud,{type:"text",name:"name",placeholder:"Your Name",value:o.name,onChange:l,required:!0}),f.jsx(ud,{type:"email",name:"email",placeholder:"Your Email",value:o.email,onChange:l,required:!0}),f.jsx(c4,{name:"message",placeholder:"Your Message",value:o.message,onChange:l,required:!0}),f.jsx(cd,{type:"submit",disabled:e,children:e?"Sending...":"Send Message"}),f.jsx(cd,{onClick:a,children:"Connect via Email"})]}),n&&f.jsxs(p4,{className:n.includes("Thank")?"success":"",children:[n.includes("Thank")&&f.jsx(M2,{}),n]})]}),f.jsxs(t4,{children:[f.jsx(q3,{role:"img","aria-label":"Wave emoji",children:"👋"}),f.jsx(n4,{children:"LET'S CONNECT"}),f.jsx(r4,{children:"I'm Lizy Doragacharla, a dedicated and detail-oriented Front-End Developer. Feel free to reach out to me for any job opportunities or collaborations. I'm excited to connect with you!"}),f.jsxs(o4,{children:[f.jsx(i4,{children:"lizydoragacharla@gmail.com"}),f.jsx(l4,{children:"+91 8106868075"}),f.jsxs(s4,{children:[f.jsx(Xl,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:f.jsx(h4,{})}),f.jsx(Xl,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(m4,{})}),f.jsx(Xl,{href:"https://wa.me/918106868075",target:"_blank",rel:"noopener noreferrer",children:f.jsx(g4,{})})]})]})]})]})})},z1=(()=>{const e={};return{on(t,n){e[t]||(e[t]=[]),e[t].push(n)},emit(t,n){e[t]&&e[t].forEach(r=>r(n))}}})(),ht={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},y4=gt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,x4=k.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${y4} 15s ease infinite;    
    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,w4=k.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,S4=k.div`
    @media (min-width: 769px) {
        display: none;
    }
`,ql=k.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: ${ht.platinum};
    @media (max-width: 768px) {
        border-bottom: 1px solid ${ht.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,Jl=k.h3`
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
`,ke=k.a`
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
`,Zl=k.div`
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
`,es=k.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    color: ${ht.platinum};
    background: ${ht.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,C4=()=>{const[e,t]=ee.useState(null),n=o=>{t(i=>i===o?null:o)},r=o=>{z1.emit("activateTab",o),document.getElementById("knowmore").scrollIntoView({behavior:"smooth"})};return f.jsxs(x4,{children:[f.jsxs(w4,{children:[f.jsxs(ql,{children:[f.jsx(Jl,{children:"My Details"}),f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsxs(ql,{children:[f.jsx(Jl,{children:"Topics"}),f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsxs(ql,{children:[f.jsx(Jl,{children:"Connect"}),f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Wc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Vc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Qc,{})," Let's Connect"]})]})]}),f.jsxs(S4,{children:[f.jsx(Zl,{isOpen:e==="details",onClick:()=>n("details"),children:"My Details"}),f.jsxs(es,{isOpen:e==="details",children:[f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsx(Zl,{isOpen:e==="topics",onClick:()=>n("topics"),children:"Topics"}),f.jsxs(es,{isOpen:e==="topics",children:[f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsx(Zl,{isOpen:e==="connect",onClick:()=>n("connect"),children:"Connect"}),f.jsxs(es,{isOpen:e==="connect",children:[f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Wc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Vc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Qc,{})," Let's Connect"]})]})]})]})},k4="/assets/python-CqUXyj7V.webp",E4="/assets/react-COzaG4-_.webp",j4="/assets/c--B70GCF6M.webp",z4="/assets/html-CAPMYXQG.webp",_4="/assets/css-CTU4a1FO.webp",T4="/assets/js-Cc8fTqTM.webp",P4="/assets/sql-BCEP8T1F.webp",N4="/assets/php-D_xiKIUL.webp",R4="/assets/aws-CKdeKC-u.webp",jr="/assets/jira-CRmYMftG.webp",oi={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},O4=k.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1dd;
`,L4=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,A4=k.div`
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
`,$4=k.div`
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
`,D4=k.img`
    width: 100px;
    height: 100px;
    border-radius: 10%;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }
`,I4=k.p`
    font-size: 1em;
    margin-top: 10px;
    color: ${oi.ghostWhite};
margin-bottom:0;
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`,M4=[{id:1,image:k4,title:"Python"},{id:2,image:E4,title:"React"},{id:3,image:j4,title:"C"},{id:4,image:z4,title:"HTML"},{id:5,image:_4,title:"CSS"},{id:6,image:T4,title:"JS"},{id:7,image:P4,title:"SQL,postgreSQL"},{id:8,image:N4,title:"PHP"},{id:9,image:R4,title:"AWS"},{id:10,image:jr,title:"Jira"},{id:11,image:jr,title:"Django Restframework"},{id:12,image:jr,title:"Data Sceince"},{id:13,image:jr,title:"PoweR BI"},{id:14,image:jr,title:"Tabeleu"}],dd=()=>f.jsxs(O4,{children:[f.jsx(L4,{children:"Skills"}),f.jsx(A4,{children:M4.map(e=>f.jsxs($4,{children:[f.jsx(D4,{src:e.image,alt:e.title}),f.jsx(I4,{children:e.title})]},e.id))})]}),F4="/assets/aws_certificate-UfzG4gz2.pdf",b4="/assets/nptel_certificate-mQ2WdH-6.jpg",B4="/assets/coursera_certificate-C_tXgTa3.pdf",U4={colors:{gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"}},H4=k.div`
  padding: 50px 20px;
  color: ${({theme:e})=>e.colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,V4=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,W4=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Q4=k.div`
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
`,G4=k.div`
  flex-grow: 1;
`,K4=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,Y4=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,X4=k.p`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,q4=k.div`
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
`,fd=k.a`
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
`,J4=[{id:"aws-certificate",title:"AWS - Cloud Foundations",date:"OCT-DEC 2022",description:"Completed a course on AWS Cloud Foundations, gaining knowledge in cloud computing and AWS services under the guidance of AWS Architect Aditya Sundar.",downloadLink:F4},{id:"nptel-certificate",title:"NPTEL - Internet of Things",date:"JUL-OCT 2022",description:"Acquired a comprehensive understanding of IoT basics and sensor workings through the NPTEL course.",downloadLink:b4},{id:"coursera-certificate",title:"Coursera - Data Science",date:"FEB-APR 2022",description:"Focused on programming for Python within the Data Science domain, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",downloadLink:B4}],Z4=()=>f.jsx(s2,{theme:U4,children:f.jsxs(H4,{children:[f.jsx(V4,{children:"Certificates"}),f.jsx(W4,{children:J4.map(e=>f.jsxs(Q4,{children:[f.jsxs(G4,{children:[f.jsx(K4,{children:e.title}),f.jsxs(Y4,{children:["Date: ",e.date]}),f.jsx(X4,{children:e.description})]}),f.jsxs(q4,{children:[e.downloadLink&&f.jsx(fd,{as:"a",href:e.downloadLink,download:`${e.title.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),f.jsx(fd,{as:"a",href:e.downloadLink,target:e.downloadLink?"_blank":void 0,rel:e.downloadLink?"noopener noreferrer":void 0,children:"View"})]})]},e.id))})]})}),e6=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
`,t6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,n6=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,r6=k.div`
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
`,o6=k.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`,i6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,l6=k.div`
`,s6=k.div`
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
`;k.div`
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
`;const a6=()=>{const[e,t]=ee.useState(0),n=[{title:"SSC",duration:"2017-2018",institution:"Keshava Reddy High School",details:"Achieved 9.5 GPA"},{title:"Intermediate (MPC)",duration:"2018-2020",institution:"Tirumala Junior College, Katheru",details:"Achieved 9.8 CGPA"},{title:"B.Tech (CSE)",duration:"2020-2024",institution:"Adikavi Nannaya University, Rajanagaram",details:"Achieved 9.1 CGPA"}];ee.useEffect(()=>{const o=setInterval(()=>{t(i=>(i+1)%n.length)},3e3);return()=>clearInterval(o)},[n.length]);const r=o=>{t(o)};return f.jsxs(e6,{children:[f.jsx(t6,{children:"Education Journey"}),f.jsx(n6,{children:n.map((o,i)=>f.jsxs(r6,{isActive:i===e,onClick:()=>r(i),children:[f.jsx(s6,{isActive:i===e,children:i+1}),f.jsxs(o6,{children:[f.jsx(i6,{children:o.title}),f.jsxs(l6,{children:[f.jsx("div",{children:o.duration}),f.jsx("div",{children:o.institution}),f.jsx("div",{children:o.details})]})]})]},i))})]})},u6="/assets/MycompanyCertificate-nOAom7B5.pdf",c6="/assets/OfferLetter-D1_r91II.pdf",He={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},d6=k.div`
  padding: 50px 20px;
  color: ${He.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,f6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,p6=k.div`
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
`,h6=k.div`
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
`,m6=k.div`
  flex-grow: 1;
`,g6=k.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,v6=k.h3`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`,y6=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,x6=k.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;
`,w6=k.ul`
  font-size: 1em;
  margin-top: 10px;
  padding-left: 20px;
`,S6=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,C6=k.span`
  background: linear-gradient(135deg, ${He.spaceCadet} 30%, ${He.delftBlue} 100%);
  color: ${He.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${He.ghostWhite};
`,k6=k.div`
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
`,ts=k.a`
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
`,E6=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:u6,companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer",duration:"Duration: 7 months (Internship) + Full-Time Employee",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses worldwide.",responsibilities:["Started as an intern, transitioned to a full-time Frontend Developer role focused on React.","Developed responsive and dynamic interfaces using React for various applications.","Worked on backend integration using Django Rest Framework during the internship.","Built and maintained websites using WordPress for clients.","Collaborated with cross-functional teams to implement new features and improve existing ones."],skills:["React","Django Rest Framework","WordPress"],certificateUrl:c6,companyUrl:"https://arthashastra.ai/"}];return f.jsxs(d6,{children:[f.jsx(f6,{children:"Experience"}),f.jsx(p6,{children:e.map((t,n)=>f.jsxs(h6,{children:[f.jsxs(m6,{children:[f.jsx(g6,{children:t.company}),f.jsx(v6,{children:t.role}),f.jsx(y6,{children:t.duration}),f.jsx(x6,{children:t.description}),f.jsx(w6,{children:t.responsibilities.map((r,o)=>f.jsx("li",{children:r},o))}),f.jsx(S6,{children:t.skills.map((r,o)=>f.jsx(C6,{children:r},o))})]}),f.jsxs(k6,{children:[n===1?f.jsx(ts,{href:t.certificateUrl,target:"_blank",children:"View Offer Letter"}):f.jsx(ts,{href:t.certificateUrl,target:"_blank",children:"View Certificate"}),f.jsx(ts,{href:t.companyUrl,target:"_blank",children:"Visit Company"})]})]},n))})]})},j6="/assets/project1-DkKLZuDf.png",z6="/assets/project2-BrLQLyBu.png",Pt={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},_6=k.div`
  padding: 50px 20px;
  color: ${Pt.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,T6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,P6=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,_1=k.div`
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
`,N6=k.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;

  ${_1}:hover & {
    transform: scale(0.85);
  }
`,R6=k.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;k.div`
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
`;k.a`
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
`;const O6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,L6=k.p`
  font-size: 1em;
  line-height: 1.6;
`,A6=[{title:"MERA SAHAI: Mera Sahai Platform",description:"Played a pivotal role as a web developer in the development of the Mera Sahai platform, successfully developing and delivering assigned modules, and taking full responsibility for their implementation.",demoLink:"/assets/mera_sahai_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:j6},{title:"DEHAZING OF MULTISPECTRAL REMOTE SENSING IMAGES",description:"Developed deep learning algorithms to enhance satellite images affected by haze, employing noise removal techniques and comparing their effectiveness with the Dark Object Subtraction method.",demoLink:"/assets/dehazing_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:z6}],$6=()=>f.jsxs(_6,{children:[f.jsx(T6,{children:"Projects"}),f.jsx(P6,{children:A6.map((e,t)=>f.jsxs(_1,{children:[f.jsx(N6,{src:e.imageUrl,alt:e.title}),f.jsxs(R6,{children:[f.jsx(O6,{children:e.title}),f.jsx(L6,{children:e.description})]})]},t))})]}),Ht={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},D6=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,I6=k.div`
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
`,zr=k.button`
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
`,M6=ee.forwardRef((e,t)=>{const[n,r]=ee.useState("Skills");ee.useEffect(()=>{z1.on("activateTab",i=>{r(i)})},[]);const o=()=>{switch(n){case"Skills":return f.jsx(dd,{});case"Certificates":return f.jsx(Z4,{});case"Education":return f.jsx(a6,{});case"Experience":return f.jsx(E6,{});case"Projects":return f.jsx($6,{});default:return f.jsx(dd,{})}};return f.jsxs(D6,{id:"knowmore",children:[o(),f.jsxs(I6,{children:[f.jsxs(zr,{active:n==="Skills",onClick:()=>r("Skills"),children:[f.jsx(F2,{})," ",f.jsx("span",{children:"Skills"})]}),f.jsxs(zr,{active:n==="Certificates",onClick:()=>r("Certificates"),children:[f.jsx(D2,{})," ",f.jsx("span",{children:"Certificates"})]}),f.jsxs(zr,{active:n==="Education",onClick:()=>r("Education"),children:[f.jsx(b2,{})," ",f.jsx("span",{children:"Education"})]}),f.jsxs(zr,{active:n==="Experience",onClick:()=>r("Experience"),children:[f.jsx($2,{})," ",f.jsx("span",{children:"Experience"})]}),f.jsxs(zr,{active:n==="Projects",onClick:()=>r("Projects"),children:[f.jsx(U2,{})," ",f.jsx("span",{children:"Projects"})]})]})]})}),F6=k.div`
    font-family: Arial, sans-serif;
`;function b6(){return f.jsxs(F6,{children:[f.jsx(v2,{}),f.jsx(kg,{}),f.jsx(M6,{}),f.jsx(v4,{}),f.jsx(C4,{})]})}ns.createRoot(document.getElementById("root")).render(f.jsx(Pe.StrictMode,{children:f.jsx(b6,{})}));
