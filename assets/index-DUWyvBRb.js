(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var $1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pd={exports:{}},Di={},hd={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),D1=Symbol.for("react.portal"),I1=Symbol.for("react.fragment"),M1=Symbol.for("react.strict_mode"),F1=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),H1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),W1=Symbol.for("react.lazy"),vu=Symbol.iterator;function Q1(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gd=Object.assign,vd={};function cr(e,t,n){this.props=e,this.context=t,this.refs=vd,this.updater=n||md}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=cr.prototype;function aa(e,t,n){this.props=e,this.context=t,this.refs=vd,this.updater=n||md}var ua=aa.prototype=new yd;ua.constructor=aa;gd(ua,cr.prototype);ua.isPureReactComponent=!0;var yu=Array.isArray,xd=Object.prototype.hasOwnProperty,ca={current:null},wd={key:!0,ref:!0,__self:!0,__source:!0};function Sd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)xd.call(t,r)&&!wd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:so,type:e,key:i,ref:l,props:o,_owner:ca.current}}function G1(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function K1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xu=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K1(""+e.key):t.toString(36)}function Fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case so:case D1:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pl(l,0):r,yu(o)?(n="",e!=null&&(n=e.replace(xu,"$&/")+"/"),Fo(o,t,n,"",function(u){return u})):o!=null&&(da(o)&&(o=G1(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",yu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+pl(i,s);l+=Fo(i,t,n,a,o)}else if(a=Q1(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+pl(i,s++),l+=Fo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function vo(e,t,n){if(e==null)return e;var r=[],o=0;return Fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Y1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},bo={transition:null},X1={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:bo,ReactCurrentOwner:ca};function Cd(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:vo,forEach:function(e,t,n){vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vo(e,function(){t++}),t},toArray:function(e){return vo(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=cr;B.Fragment=I1;B.Profiler=F1;B.PureComponent=aa;B.StrictMode=M1;B.Suspense=H1;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X1;B.act=Cd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)xd.call(t,a)&&!wd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:so,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:B1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b1,_context:e},e.Consumer=e};B.createElement=Sd;B.createFactory=function(e){var t=Sd.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:U1,render:e}};B.isValidElement=da;B.lazy=function(e){return{$$typeof:W1,_payload:{_status:-1,_result:e},_init:Y1}};B.memo=function(e,t){return{$$typeof:V1,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};B.unstable_act=Cd;B.useCallback=function(e,t){return Le.current.useCallback(e,t)};B.useContext=function(e){return Le.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};B.useEffect=function(e,t){return Le.current.useEffect(e,t)};B.useId=function(){return Le.current.useId()};B.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Le.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};B.useRef=function(e){return Le.current.useRef(e)};B.useState=function(e){return Le.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Le.current.useTransition()};B.version="18.3.1";hd.exports=B;var ee=hd.exports;const Pe=fd(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1=ee,J1=Symbol.for("react.element"),Z1=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function kd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)e0.call(t,r)&&!n0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:J1,type:e,key:i,ref:l,props:o,_owner:t0.current}}Di.Fragment=Z1;Di.jsx=kd;Di.jsxs=kd;pd.exports=Di;var f=pd.exports,es={},Ed={exports:{}},Ke={},jd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,R){var v=j.length;j.push(R);e:for(;0<v;){var Q=v-1>>>1,P=j[Q];if(0<o(P,R))j[Q]=R,j[v]=P,v=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],v=j.pop();if(v!==R){j[0]=v;e:for(var Q=0,P=j.length,H=P>>>1;Q<H;){var Y=2*(Q+1)-1,q=j[Y],b=Y+1,le=j[b];if(0>o(q,v))b<P&&0>o(le,q)?(j[Q]=le,j[b]=v,Q=b):(j[Q]=q,j[Y]=v,Q=Y);else if(b<P&&0>o(le,v))j[Q]=le,j[b]=v,Q=b;else break e}}return R}function o(j,R){var v=j.sortIndex-R.sortIndex;return v!==0?v:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,h=null,g=3,x=!1,y=!1,w=!1,O=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function S(j){if(w=!1,p(j),!y)if(n(a)!==null)y=!0,A(T);else{var R=n(u);R!==null&&$(S,R.startTime-j)}}function T(j,R){y=!1,w&&(w=!1,m(N),N=-1),x=!0;var v=g;try{for(p(R),h=n(a);h!==null&&(!(h.expirationTime>R)||j&&!ze());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var P=Q(h.expirationTime<=R);R=e.unstable_now(),typeof P=="function"?h.callback=P:h===n(a)&&r(a),p(R)}else r(a);h=n(a)}if(h!==null)var H=!0;else{var Y=n(u);Y!==null&&$(S,Y.startTime-R),H=!1}return H}finally{h=null,g=v,x=!1}}var _=!1,E=null,N=-1,U=5,I=-1;function ze(){return!(e.unstable_now()-I<U)}function W(){if(E!==null){var j=e.unstable_now();I=j;var R=!0;try{R=E(!0,j)}finally{R?yt():(_=!1,E=null)}}else _=!1}var yt;if(typeof d=="function")yt=function(){d(W)};else if(typeof MessageChannel<"u"){var Nn=new MessageChannel,M=Nn.port2;Nn.port1.onmessage=W,yt=function(){M.postMessage(null)}}else yt=function(){O(W,0)};function A(j){E=j,_||(_=!0,yt())}function $(j,R){N=O(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,A(T))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var v=g;g=R;try{return j()}finally{g=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var v=g;g=j;try{return R()}finally{g=v}},e.unstable_scheduleCallback=function(j,R,v){var Q=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?Q+v:Q):v=Q,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=v+P,j={id:c++,callback:R,priorityLevel:j,startTime:v,expirationTime:P,sortIndex:-1},v>Q?(j.sortIndex=v,t(u,j),n(a)===null&&j===n(u)&&(w?(m(N),N=-1):w=!0,$(S,v-Q))):(j.sortIndex=P,t(a,j),y||x||(y=!0,A(T))),j},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(j){var R=g;return function(){var v=g;g=R;try{return j.apply(this,arguments)}finally{g=v}}}})(_d);jd.exports=_d;var r0=jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=ee,Ge=r0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zd=new Set,Br={};function Tn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Br[e]=t,e=0;e<t.length;e++)zd.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,i0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},Su={};function l0(e){return ts.call(Su,e)?!0:ts.call(wu,e)?!1:i0.test(e)?Su[e]=!0:(wu[e]=!0,!1)}function s0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a0(e,t,n,r){if(t===null||typeof t>"u"||s0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var fa=/[\-:]([a-z])/g;function pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fa,pa);we[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fa,pa);we[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fa,pa);we[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a0(t,n,o,r)&&(n=null),r||o===null?l0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),On=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ma=Symbol.for("react.strict_mode"),ns=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),ga=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),va=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Nd=Symbol.for("react.offscreen"),Cu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,hl;function _r(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var ml=!1;function gl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function u0(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case On:return"Portal";case ns:return"Profiler";case ma:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pd:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case va:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function c0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function d0(e){var t=Ld(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=d0(e))}function Rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ld(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Od(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function ss(e,t){Od(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(zr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Ad(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $d(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$d(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,Dd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){f0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Id(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Id(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var p0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(p0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,Gn=null,Kn=null;function zu(e){if(e=co(e)){if(typeof hs!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Bi(t),hs(e.stateNode,e.type,t))}}function Fd(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function bd(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,zu(e),t)for(e=0;e<t.length;e++)zu(t[e])}}function Bd(e,t){return e(t)}function Ud(){}var vl=!1;function Hd(e,t,n){if(vl)return e(t,n);vl=!0;try{return Bd(e,t,n)}finally{vl=!1,(Gn!==null||Kn!==null)&&(Ud(),bd())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ms=!1;if(Ot)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ms=!1}function h0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Rr=!1,li=null,si=!1,gs=null,m0={onError:function(e){Rr=!0,li=e}};function g0(e,t,n,r,o,i,l,s,a){Rr=!1,li=null,h0.apply(m0,arguments)}function v0(e,t,n,r,o,i,l,s,a){if(g0.apply(this,arguments),Rr){if(Rr){var u=li;Rr=!1,li=null}else throw Error(z(198));si||(si=!0,gs=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(Pn(e)!==e)throw Error(z(188))}function y0(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Tu(o),e;if(i===r)return Tu(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Wd(e){return e=y0(e),e!==null?Qd(e):null}function Qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qd(e);if(t!==null)return t;e=e.sibling}return null}var Gd=Ge.unstable_scheduleCallback,Pu=Ge.unstable_cancelCallback,x0=Ge.unstable_shouldYield,w0=Ge.unstable_requestPaint,ae=Ge.unstable_now,S0=Ge.unstable_getCurrentPriorityLevel,xa=Ge.unstable_ImmediatePriority,Kd=Ge.unstable_UserBlockingPriority,ai=Ge.unstable_NormalPriority,C0=Ge.unstable_LowPriority,Yd=Ge.unstable_IdlePriority,Ii=null,kt=null;function k0(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:_0,E0=Math.log,j0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(E0(e)/j0|0)|0}var So=64,Co=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Tr(s):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~o,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function z0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=z0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function P0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function qd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jd,Sa,Zd,ef,tf,ys=!1,ko=[],Kt=null,Yt=null,Xt=null,Vr=new Map,Wr=new Map,Vt=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=co(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function L0(e,t,n,r,o){switch(t){case"focusin":return Kt=yr(Kt,e,t,n,r,o),!0;case"dragenter":return Yt=yr(Yt,e,t,n,r,o),!0;case"mouseover":return Xt=yr(Xt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,yr(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wr.set(i,yr(Wr.get(i)||null,e,t,n,r,o)),!0}return!1}function nf(e){var t=dn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vd(n),t!==null){e.blockedOn=t,tf(e.priority,function(){Zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=co(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){Bo(e)&&n.delete(t)}function R0(){ys=!1,Kt!==null&&Bo(Kt)&&(Kt=null),Yt!==null&&Bo(Yt)&&(Yt=null),Xt!==null&&Bo(Xt)&&(Xt=null),Vr.forEach(Lu),Wr.forEach(Lu)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,R0)))}function Qr(e){function t(o){return xr(o,e)}if(0<ko.length){xr(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&xr(Kt,e),Yt!==null&&xr(Yt,e),Xt!==null&&xr(Xt,e),Vr.forEach(t),Wr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)nf(n),n.blockedOn===null&&Vt.shift()}var Yn=It.ReactCurrentBatchConfig,ci=!0;function O0(e,t,n,r){var o=K,i=Yn.transition;Yn.transition=null;try{K=1,Ca(e,t,n,r)}finally{K=o,Yn.transition=i}}function A0(e,t,n,r){var o=K,i=Yn.transition;Yn.transition=null;try{K=4,Ca(e,t,n,r)}finally{K=o,Yn.transition=i}}function Ca(e,t,n,r){if(ci){var o=xs(e,t,n,r);if(o===null)Tl(e,t,r,di,n),Nu(e,r);else if(L0(o,e,t,n,r))r.stopPropagation();else if(Nu(e,r),t&4&&-1<N0.indexOf(e)){for(;o!==null;){var i=co(o);if(i!==null&&Jd(i),i=xs(e,t,n,r),i===null&&Tl(e,t,r,di,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Tl(e,t,r,null,n)}}var di=null;function xs(e,t,n,r){if(di=null,e=ya(r),e=dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case xa:return 1;case Kd:return 4;case ai:case C0:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var Qt=null,ka=null,Uo=null;function of(){if(Uo)return Uo;var e,t=ka,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Uo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Ru(){return!1}function Ye(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Eo:Ru,this.isPropagationStopped=Ru,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=Ye(dr),uo=ie({},dr,{view:0,detail:0}),$0=Ye(uo),xl,wl,wr,Mi=ie({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(xl=e.screenX-wr.screenX,wl=e.screenY-wr.screenY):wl=xl=0,wr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),Ou=Ye(Mi),D0=ie({},Mi,{dataTransfer:0}),I0=Ye(D0),M0=ie({},uo,{relatedTarget:0}),Sl=Ye(M0),F0=ie({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=Ye(F0),B0=ie({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U0=Ye(B0),H0=ie({},dr,{data:0}),Au=Ye(H0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q0[e])?!!t[e]:!1}function ja(){return G0}var K0=ie({},uo,{key:function(e){if(e.key){var t=V0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=Ye(K0),X0=ie({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Ye(X0),q0=ie({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),J0=Ye(q0),Z0=ie({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),eh=Ye(Z0),th=ie({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nh=Ye(th),rh=[9,13,27,32],_a=Ot&&"CompositionEvent"in window,Or=null;Ot&&"documentMode"in document&&(Or=document.documentMode);var oh=Ot&&"TextEvent"in window&&!Or,lf=Ot&&(!_a||Or&&8<Or&&11>=Or),Du=" ",Iu=!1;function sf(e,t){switch(e){case"keyup":return rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function ih(e,t){switch(e){case"compositionend":return af(t);case"keypress":return t.which!==32?null:(Iu=!0,Du);case"textInput":return e=t.data,e===Du&&Iu?null:e;default:return null}}function lh(e,t){if($n)return e==="compositionend"||!_a&&sf(e,t)?(e=of(),Uo=ka=Qt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function uf(e,t,n,r){Fd(r),t=fi(t,"onChange"),0<t.length&&(n=new Ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Gr=null;function ah(e){wf(e,0)}function Fi(e){var t=Mn(e);if(Rd(t))return e}function uh(e,t){if(e==="change")return t}var cf=!1;if(Ot){var Cl;if(Ot){var kl="oninput"in document;if(!kl){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),kl=typeof Fu.oninput=="function"}Cl=kl}else Cl=!1;cf=Cl&&(!document.documentMode||9<document.documentMode)}function bu(){Ar&&(Ar.detachEvent("onpropertychange",df),Gr=Ar=null)}function df(e){if(e.propertyName==="value"&&Fi(Gr)){var t=[];uf(t,Gr,e,ya(e)),Hd(ah,t)}}function ch(e,t,n){e==="focusin"?(bu(),Ar=t,Gr=n,Ar.attachEvent("onpropertychange",df)):e==="focusout"&&bu()}function dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(Gr)}function fh(e,t){if(e==="click")return Fi(t)}function ph(e,t){if(e==="input"||e==="change")return Fi(t)}function hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:hh;function Kr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ts.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pf(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mh(e){var t=pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Uu(n,i);var l=Uu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=Ot&&"documentMode"in document&&11>=document.documentMode,Dn=null,ws=null,$r=null,Ss=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ss||Dn==null||Dn!==ii(r)||(r=Dn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Kr($r,r)||($r=r,r=fi(ws,"onSelect"),0<r.length&&(t=new Ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},El={},hf={};Ot&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function bi(e){if(El[e])return El[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hf)return El[e]=t[n];return e}var mf=bi("animationend"),gf=bi("animationiteration"),vf=bi("animationstart"),yf=bi("transitionend"),xf=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){xf.set(e,t),Tn(t,[e])}for(var jl=0;jl<Vu.length;jl++){var _l=Vu[jl],vh=_l.toLowerCase(),yh=_l[0].toUpperCase()+_l.slice(1);on(vh,"on"+yh)}on(mf,"onAnimationEnd");on(gf,"onAnimationIteration");on(vf,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(yf,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,v0(r,t,void 0,e),e.currentTarget=null}function wf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Wu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Wu(o,s,u),i=a}}}if(si)throw e=gs,si=!1,gs=null,e}function J(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var r=e+"__bubble";n.has(r)||(Sf(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),Sf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Yr(e){if(!e[_o]){e[_o]=!0,zd.forEach(function(n){n!=="selectionchange"&&(xh.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,zl("selectionchange",!1,t))}}function Sf(e,t,n,r){switch(rf(t)){case 1:var o=O0;break;case 4:o=A0;break;default:o=Ca}n=o.bind(null,t,n,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Tl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Hd(function(){var u=i,c=ya(n),h=[];e:{var g=xf.get(e);if(g!==void 0){var x=Ea,y=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":x=Y0;break;case"focusin":y="focus",x=Sl;break;case"focusout":y="blur",x=Sl;break;case"beforeblur":case"afterblur":x=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=J0;break;case mf:case gf:case vf:x=b0;break;case yf:x=eh;break;case"scroll":x=$0;break;case"wheel":x=nh;break;case"copy":case"cut":case"paste":x=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$u}var w=(t&4)!==0,O=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,m!==null&&(S=Hr(d,m),S!=null&&w.push(Xr(d,S,p)))),O)break;d=d.return}0<w.length&&(g=new x(g,y,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ps&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[At]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?dn(y):null,y!==null&&(O=Pn(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Ou,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=$u,S="onPointerLeave",m="onPointerEnter",d="pointer"),O=x==null?g:Mn(x),p=y==null?g:Mn(y),g=new w(S,d+"leave",x,n,c),g.target=O,g.relatedTarget=p,S=null,dn(c)===u&&(w=new w(m,d+"enter",y,n,c),w.target=p,w.relatedTarget=O,S=w),O=S,x&&y)t:{for(w=x,m=y,d=0,p=w;p;p=Ln(p))d++;for(p=0,S=m;S;S=Ln(S))p++;for(;0<d-p;)w=Ln(w),d--;for(;0<p-d;)m=Ln(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ln(w),m=Ln(m)}w=null}else w=null;x!==null&&Qu(h,g,x,w,!1),y!==null&&O!==null&&Qu(h,O,y,w,!0)}}e:{if(g=u?Mn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var T=uh;else if(Mu(g))if(cf)T=ph;else{T=dh;var _=ch}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=fh);if(T&&(T=T(e,u))){uf(h,T,n,c);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&as(g,"number",g.value)}switch(_=u?Mn(u):window,e){case"focusin":(Mu(_)||_.contentEditable==="true")&&(Dn=_,ws=u,$r=null);break;case"focusout":$r=ws=Dn=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,Hu(h,n,c);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":Hu(h,n,c)}var E;if(_a)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $n?sf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(lf&&n.locale!=="ko"&&($n||N!=="onCompositionStart"?N==="onCompositionEnd"&&$n&&(E=of()):(Qt=c,ka="value"in Qt?Qt.value:Qt.textContent,$n=!0)),_=fi(u,N),0<_.length&&(N=new Au(N,e,null,n,c),h.push({event:N,listeners:_}),E?N.data=E:(E=af(n),E!==null&&(N.data=E)))),(E=oh?ih(e,n):lh(e,n))&&(u=fi(u,"onBeforeInput"),0<u.length&&(c=new Au("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=E))}wf(h,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Hr(e,n),i!=null&&r.unshift(Xr(e,i,o)),i=Hr(e,t),i!=null&&r.push(Xr(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Hr(n,i),a!=null&&l.unshift(Xr(n,a,s))):o||(a=Hr(n,i),a!=null&&l.push(Xr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var wh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(wh,`
`).replace(Sh,"")}function zo(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(z(425))}function pi(){}var Cs=null,ks=null;function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,kh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(Eh)}:js;function Eh(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+fr,qr="__reactProps$"+fr,At="__reactContainer$"+fr,_s="__reactEvents$"+fr,jh="__reactListeners$"+fr,_h="__reactHandles$"+fr;function dn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yu(e);e!==null;){if(n=e[Ct])return n;e=Yu(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[Ct]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Bi(e){return e[qr]||null}var zs=[],Fn=-1;function ln(e){return{current:e}}function te(e){0>Fn||(e.current=zs[Fn],zs[Fn]=null,Fn--)}function X(e,t){Fn++,zs[Fn]=e.current,e.current=t}var rn={},_e=ln(rn),De=ln(!1),wn=rn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function hi(){te(De),te(_e)}function Xu(e,t,n){if(_e.current!==rn)throw Error(z(168));X(_e,t),X(De,n)}function Cf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,c0(e)||"Unknown",o));return ie({},n,r)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,wn=_e.current,X(_e,e),X(De,De.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Cf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,te(De),te(_e),X(_e,e)):te(De),X(De,n)}var Tt=null,Ui=!1,Nl=!1;function kf(e){Tt===null?Tt=[e]:Tt.push(e)}function zh(e){Ui=!0,kf(e)}function sn(){if(!Nl&&Tt!==null){Nl=!0;var e=0,t=K;try{var n=Tt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Ui=!1}catch(o){throw Tt!==null&&(Tt=Tt.slice(e+1)),Gd(xa,sn),o}finally{K=t,Nl=!1}}return null}var bn=[],Bn=0,gi=null,vi=0,qe=[],Je=0,Sn=null,Nt=1,Lt="";function un(e,t){bn[Bn++]=vi,bn[Bn++]=gi,gi=e,vi=t}function Ef(e,t,n){qe[Je++]=Nt,qe[Je++]=Lt,qe[Je++]=Sn,Sn=e;var r=Nt;e=Lt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-ct(t)+o|n<<o|r,Lt=i+e}else Nt=1<<i|n<<o|r,Lt=e}function Ta(e){e.return!==null&&(un(e,1),Ef(e,1,0))}function Pa(e){for(;e===gi;)gi=bn[--Bn],bn[Bn]=null,vi=bn[--Bn],bn[Bn]=null;for(;e===Sn;)Sn=qe[--Je],qe[Je]=null,Lt=qe[--Je],qe[Je]=null,Nt=qe[--Je],qe[Je]=null}var Qe=null,Ve=null,ne=!1,at=null;function jf(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Nt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(ne){var t=Ve;if(t){var n=t;if(!Ju(e,t)){if(Ts(e))throw Error(z(418));t=qt(n.nextSibling);var r=Qe;t&&Ju(e,t)?jf(r,n):(e.flags=e.flags&-4097|2,ne=!1,Qe=e)}}else{if(Ts(e))throw Error(z(418));e.flags=e.flags&-4097|2,ne=!1,Qe=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function To(e){if(e!==Qe)return!1;if(!ne)return Zu(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Es(e.type,e.memoizedProps)),t&&(t=Ve)){if(Ts(e))throw _f(),Error(z(418));for(;t;)jf(e,t),t=qt(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?qt(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=Ve;e;)e=qt(e.nextSibling)}function er(){Ve=Qe=null,ne=!1}function Na(e){at===null?at=[e]:at.push(e)}var Th=It.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Po(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ec(e){var t=e._init;return t(e._payload)}function zf(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=tn(m,d),m.index=0,m.sibling=null,m}function i(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,S){return d===null||d.tag!==6?(d=Il(p,m.mode,S),d.return=m,d):(d=o(d,p),d.return=m,d)}function a(m,d,p,S){var T=p.type;return T===An?c(m,d,p.props.children,S,p.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&ec(T)===d.type)?(S=o(d,p.props),S.ref=Sr(m,d,p),S.return=m,S):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,S)}function u(m,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ml(p,m.mode,S),d.return=m,d):(d=o(d,p.children||[]),d.return=m,d)}function c(m,d,p,S,T){return d===null||d.tag!==7?(d=gn(p,m.mode,S,T),d.return=m,d):(d=o(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Il(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yo:return p=Xo(d.type,d.key,d.props,null,m.mode,p),p.ref=Sr(m,null,d),p.return=m,p;case On:return d=Ml(d,m.mode,p),d.return=m,d;case Bt:var S=d._init;return h(m,S(d._payload),p)}if(zr(d)||gr(d))return d=gn(d,m.mode,p,null),d.return=m,d;Po(m,d)}return null}function g(m,d,p,S){var T=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return T!==null?null:s(m,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return p.key===T?a(m,d,p,S):null;case On:return p.key===T?u(m,d,p,S):null;case Bt:return T=p._init,g(m,d,T(p._payload),S)}if(zr(p)||gr(p))return T!==null?null:c(m,d,p,S,null);Po(m,p)}return null}function x(m,d,p,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(p)||null,s(d,m,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yo:return m=m.get(S.key===null?p:S.key)||null,a(d,m,S,T);case On:return m=m.get(S.key===null?p:S.key)||null,u(d,m,S,T);case Bt:var _=S._init;return x(m,d,p,_(S._payload),T)}if(zr(S)||gr(S))return m=m.get(p)||null,c(d,m,S,T,null);Po(d,S)}return null}function y(m,d,p,S){for(var T=null,_=null,E=d,N=d=0,U=null;E!==null&&N<p.length;N++){E.index>N?(U=E,E=null):U=E.sibling;var I=g(m,E,p[N],S);if(I===null){E===null&&(E=U);break}e&&E&&I.alternate===null&&t(m,E),d=i(I,d,N),_===null?T=I:_.sibling=I,_=I,E=U}if(N===p.length)return n(m,E),ne&&un(m,N),T;if(E===null){for(;N<p.length;N++)E=h(m,p[N],S),E!==null&&(d=i(E,d,N),_===null?T=E:_.sibling=E,_=E);return ne&&un(m,N),T}for(E=r(m,E);N<p.length;N++)U=x(E,m,N,p[N],S),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?N:U.key),d=i(U,d,N),_===null?T=U:_.sibling=U,_=U);return e&&E.forEach(function(ze){return t(m,ze)}),ne&&un(m,N),T}function w(m,d,p,S){var T=gr(p);if(typeof T!="function")throw Error(z(150));if(p=T.call(p),p==null)throw Error(z(151));for(var _=T=null,E=d,N=d=0,U=null,I=p.next();E!==null&&!I.done;N++,I=p.next()){E.index>N?(U=E,E=null):U=E.sibling;var ze=g(m,E,I.value,S);if(ze===null){E===null&&(E=U);break}e&&E&&ze.alternate===null&&t(m,E),d=i(ze,d,N),_===null?T=ze:_.sibling=ze,_=ze,E=U}if(I.done)return n(m,E),ne&&un(m,N),T;if(E===null){for(;!I.done;N++,I=p.next())I=h(m,I.value,S),I!==null&&(d=i(I,d,N),_===null?T=I:_.sibling=I,_=I);return ne&&un(m,N),T}for(E=r(m,E);!I.done;N++,I=p.next())I=x(E,m,N,I.value,S),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?N:I.key),d=i(I,d,N),_===null?T=I:_.sibling=I,_=I);return e&&E.forEach(function(W){return t(m,W)}),ne&&un(m,N),T}function O(m,d,p,S){if(typeof p=="object"&&p!==null&&p.type===An&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:e:{for(var T=p.key,_=d;_!==null;){if(_.key===T){if(T=p.type,T===An){if(_.tag===7){n(m,_.sibling),d=o(_,p.props.children),d.return=m,m=d;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Bt&&ec(T)===_.type){n(m,_.sibling),d=o(_,p.props),d.ref=Sr(m,_,p),d.return=m,m=d;break e}n(m,_);break}else t(m,_);_=_.sibling}p.type===An?(d=gn(p.props.children,m.mode,S,p.key),d.return=m,m=d):(S=Xo(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,m=S)}return l(m);case On:e:{for(_=p.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=o(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ml(p,m.mode,S),d.return=m,m=d}return l(m);case Bt:return _=p._init,O(m,d,_(p._payload),S)}if(zr(p))return y(m,d,p,S);if(gr(p))return w(m,d,p,S);Po(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,p),d.return=m,m=d):(n(m,d),d=Il(p,m.mode,S),d.return=m,m=d),l(m)):n(m,d)}return O}var tr=zf(!0),Tf=zf(!1),yi=ln(null),xi=null,Un=null,La=null;function Ra(){La=Un=xi=null}function Oa(e){var t=yi.current;te(yi),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){xi=e,La=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(xi===null)throw Error(z(308));Un=e,xi.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Aa(e){fn===null?fn=[e]:fn.push(e)}function Pf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Aa(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,Aa(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function tc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,c=u=a=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(g=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(x,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,h,g):y,g==null)break e;h=ie({},h,g);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=x,a=h):c=c.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(c===null&&(a=h),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=h}}function nc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var fo={},Et=ln(fo),Jr=ln(fo),Zr=ln(fo);function pn(e){if(e===fo)throw Error(z(174));return e}function Da(e,t){switch(X(Zr,t),X(Jr,e),X(Et,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}te(Et),X(Et,t)}function nr(){te(Et),te(Jr),te(Zr)}function Lf(e){pn(Zr.current);var t=pn(Et.current),n=cs(t,e.type);t!==n&&(X(Jr,e),X(Et,n))}function Ia(e){Jr.current===e&&(te(Et),te(Jr))}var re=ln(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function Ma(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Wo=It.ReactCurrentDispatcher,Rl=It.ReactCurrentBatchConfig,Cn=0,oe=null,pe=null,me=null,Ci=!1,Dr=!1,eo=0,Ph=0;function Se(){throw Error(z(321))}function Fa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ba(e,t,n,r,o,i){if(Cn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?Oh:Ah,e=n(r,o),Dr){i=0;do{if(Dr=!1,eo=0,25<=i)throw Error(z(301));i+=1,me=pe=null,t.updateQueue=null,Wo.current=$h,e=n(r,o)}while(Dr)}if(Wo.current=ki,t=pe!==null&&pe.next!==null,Cn=0,me=pe=oe=null,Ci=!1,t)throw Error(z(300));return e}function Ba(){var e=eo!==0;return eo=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function rt(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(z(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function to(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=rt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var c=u.lane;if((Cn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,oe.lanes|=c,kn|=c}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,mt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=rt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Rf(){}function Of(e,t){var n=oe,r=rt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,Ua(Df.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,no(9,$f.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(z(349));Cn&30||Af(n,t,o)}return o}function Af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $f(e,t,n,r){t.value=n,t.getSnapshot=r,If(t)&&Mf(e)}function Df(e,t,n){return n(function(){If(t)&&Mf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Mf(e){var t=$t(e,1);t!==null&&dt(t,e,1,-1)}function rc(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=Rh.bind(null,oe,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ff(){return rt().memoizedState}function Qo(e,t,n,r){var o=wt();oe.flags|=e,o.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Fa(r,l.deps)){o.memoizedState=no(t,n,i,r);return}}oe.flags|=e,o.memoizedState=no(1|t,n,i,r)}function oc(e,t){return Qo(8390656,8,e,t)}function Ua(e,t){return Hi(2048,8,e,t)}function bf(e,t){return Hi(4,2,e,t)}function Bf(e,t){return Hi(4,4,e,t)}function Uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hf(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,Uf.bind(null,t,e),n)}function Ha(){}function Vf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wf(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qf(e,t,n){return Cn&21?(mt(n,t)||(n=Xd(),oe.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Nh(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{K=n,Rl.transition=r}}function Gf(){return rt().memoizedState}function Lh(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kf(e))Yf(t,n);else if(n=Pf(e,t,n,r),n!==null){var o=Ne();dt(n,e,r,o),Xf(n,t,r)}}function Rh(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Yf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,mt(s,l)){var a=t.interleaved;a===null?(o.next=o,Aa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Pf(e,t,o,r),n!==null&&(o=Ne(),dt(n,e,r,o),Xf(n,t,r))}}function Kf(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Yf(e,t){Dr=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var ki={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Oh={readContext:nt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4194308,4,Uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lh.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:rc,useDebugValue:Ha,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=rc(!1),t=e[0];return e=Nh.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,o=wt();if(ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ve===null)throw Error(z(349));Cn&30||Af(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,oc(Df.bind(null,r,i,e),[e]),r.flags|=2048,no(9,$f.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ve.identifierPrefix;if(ne){var n=Lt,r=Nt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ah={readContext:nt,useCallback:Vf,useContext:nt,useEffect:Ua,useImperativeHandle:Hf,useInsertionEffect:bf,useLayoutEffect:Bf,useMemo:Wf,useReducer:Ol,useRef:Ff,useState:function(){return Ol(to)},useDebugValue:Ha,useDeferredValue:function(e){var t=rt();return Qf(t,pe.memoizedState,e)},useTransition:function(){var e=Ol(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Of,useId:Gf,unstable_isNewReconciler:!1},$h={readContext:nt,useCallback:Vf,useContext:nt,useEffect:Ua,useImperativeHandle:Hf,useInsertionEffect:bf,useLayoutEffect:Bf,useMemo:Wf,useReducer:Al,useRef:Ff,useState:function(){return Al(to)},useDebugValue:Ha,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:Qf(t,pe.memoizedState,e)},useTransition:function(){var e=Al(to)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Of,useId:Gf,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Rt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=en(e),i=Rt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Jt(e,i,o),t!==null&&(dt(t,e,o,r),Vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=en(e),o=Rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(dt(t,e,r,n),Vo(t,e,r))}};function ic(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,i):!0}function qf(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ie(t)?wn:_e.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},$a(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ie(t)?wn:_e.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ls(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vi.enqueueReplaceState(o,o.state,null),wi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=u0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function Jf(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Hs=r),Os(e,t)},n}function Zf(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Os(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Os(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Xh.bind(null,e,t,n),t.then(e,e))}function ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Ih=It.ReactCurrentOwner,$e=!1;function Te(e,t,n,r){t.child=e===null?Tf(t,null,n,r):tr(t,e.child,n,r)}function cc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=ba(e,t,n,r,i,o),n=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&n&&Ta(t),t.flags|=1,Te(e,t,r,o),t.child)}function dc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ep(e,t,i,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function ep(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return As(e,t,n,r,o)}function tp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Vn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Vn,Ue),Ue|=r;return Te(e,t,o,n),t.child}function np(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,o){var i=Ie(n)?wn:_e.current;return i=Zn(t,i),Xn(t,o),n=ba(e,t,n,r,i,o),r=Ba(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(ne&&r&&Ta(t),t.flags|=1,Te(e,t,n,o),t.child)}function fc(e,t,n,r,o){if(Ie(n)){var i=!0;mi(t)}else i=!1;if(Xn(t,o),t.stateNode===null)Go(e,t),qf(t,n,r),Rs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ie(n)?wn:_e.current,u=Zn(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&lc(t,l,r,u),Ut=!1;var g=t.memoizedState;l.state=g,wi(t,r,l,o),a=t.memoizedState,s!==r||g!==a||De.current||Ut?(typeof c=="function"&&(Ls(t,n,c,r),a=t.memoizedState),(s=Ut||ic(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Nf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:lt(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ie(n)?wn:_e.current,a=Zn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&lc(t,l,r,a),Ut=!1,g=t.memoizedState,l.state=g,wi(t,r,l,o);var y=t.memoizedState;s!==h||g!==y||De.current||Ut?(typeof x=="function"&&(Ls(t,n,x,r),y=t.memoizedState),(u=Ut||ic(t,n,u,r,g,y,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,i,o)}function $s(e,t,n,r,o,i){np(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&qu(t,n,!1),Dt(e,t,i);r=t.stateNode,Ih.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=tr(t,e.child,null,i),t.child=tr(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&qu(t,n,!0),t.child}function rp(e){var t=e.stateNode;t.pendingContext?Xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xu(e,t.context,!1),Da(e,t.containerInfo)}function pc(e,t,n,r,o){return er(),Na(o),t.flags|=256,Te(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,n){var r=t.pendingProps,o=re.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(re,o&1),e===null)return Ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gi(l,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Is(n),t.memoizedState=Ds,e):Va(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Mh(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=tn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=tn(s,i):(i=gn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Is(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return i=e.child,e=i.sibling,r=tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&Na(r),tr(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(z(422))),No(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gi({mode:"visible",children:r.children},o,0,null),i=gn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tr(t,e.child,null,l),t.child.memoizedState=Is(l),t.memoizedState=Ds,i);if(!(t.mode&1))return No(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(z(419)),r=$l(i,r,void 0),No(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),dt(r,e,o,-1))}return Xa(),r=$l(Error(z(421))),No(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=qh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=qt(o.nextSibling),Qe=t,ne=!0,at=null,e!==null&&(qe[Je++]=Nt,qe[Je++]=Lt,qe[Je++]=Sn,Nt=e.id,Lt=e.overflow,Sn=t),t=Va(t,r.children),t.flags|=4096,t)}function hc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ns(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ip(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hc(e,n,t);else if(e.tag===19)hc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Si(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fh(e,t,n){switch(t.tag){case 3:rp(t),er();break;case 5:Lf(t);break;case 1:Ie(t.type)&&mi(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(yi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?op(e,t,n):(X(re,re.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ip(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,tp(e,t,n)}return Dt(e,t,n)}var lp,Ms,sp,ap;lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ms=function(){};sp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Et.current);var i=null;switch(n){case"input":o=ls(e,o),r=ls(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=us(e,o),r=us(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}ds(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bh(e,t,n){var r=t.pendingProps;switch(Pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&hi(),Ce(t),null;case 3:return r=t.stateNode,nr(),te(De),te(_e),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Qs(at),at=null))),Ms(e,t),Ce(t),null;case 5:Ia(t);var o=pn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)sp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ce(t),null}if(e=pn(Et.current),To(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[qr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":ku(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":ju(r,i),J("invalid",r)}ds(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",""+s]):Br.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":xo(r),Eu(r,i,!0);break;case"textarea":xo(r),_u(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$d(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[qr]=r,lp(e,t,!1,!1),t.stateNode=e;e:{switch(l=fs(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pr.length;o++)J(Pr[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":ku(e,r),o=ls(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":ju(e,r),o=us(e,r),J("invalid",e);break;default:o=r}ds(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Md(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ur(e,a):typeof a=="number"&&Ur(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Br.hasOwnProperty(i)?a!=null&&i==="onScroll"&&J("scroll",e):a!=null&&ha(e,i,a,l))}switch(n){case"input":xo(e),Eu(e,r,!1);break;case"textarea":xo(e),_u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=pn(Zr.current),pn(Et.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Ce(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))_f(),er(),t.flags|=98560,i=!1;else if(i=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Ct]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else at!==null&&(Qs(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):Xa())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return nr(),Ms(e,t),e===null&&Yr(t.stateNode.containerInfo),Ce(t),null;case 10:return Oa(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&hi(),Ce(t),null;case 19:if(te(re),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Cr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Si(e),l!==null){for(t.flags|=128,Cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>or&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return Ce(t),null}else 2*ae()-i.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Bh(e,t){switch(Pa(t),t.tag){case 1:return Ie(t.type)&&hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),te(De),te(_e),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return nr(),null;case 10:return Oa(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var Lo=!1,Ee=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,L=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Fs(e,t,n){try{n()}catch(r){se(e,t,r)}}var mc=!1;function Hh(e,t){if(Cs=ci,e=pf(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,c=0,h=e,g=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++c===r&&(a=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},ci=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,O=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),O);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=mc,mc=!1,y}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fs(t,n,i)}o=o.next}while(o!==r)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function up(e){var t=e.alternate;t!==null&&(e.alternate=null,up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[qr],delete t[_s],delete t[jh],delete t[_h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}var ye=null,st=!1;function Mt(e,t,n){for(n=n.child;n!==null;)dp(e,t,n),n=n.sibling}function dp(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:Ee||Hn(n,t);case 6:var r=ye,o=st;ye=null,Mt(e,t,n),ye=r,st=o,ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),Qr(e)):Pl(ye,n.stateNode));break;case 4:r=ye,o=st,ye=n.stateNode.containerInfo,st=!0,Mt(e,t,n),ye=r,st=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fs(n,t,l),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Ee&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Mt(e,t,n),Ee=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uh),t.forEach(function(r){var o=Jh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,st=!1;break e;case 3:ye=s.stateNode.containerInfo,st=!0;break e;case 4:ye=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(ye===null)throw Error(z(160));dp(i,l,o),ye=null,st=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fp(t,e),t=t.sibling}function fp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),xt(e),r&4){try{Ir(3,e,e.return),Wi(3,e)}catch(w){se(e,e.return,w)}try{Ir(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(it(t,e),xt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{Ur(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Od(o,i),fs(s,l);var u=fs(s,i);for(l=0;l<a.length;l+=2){var c=a[l],h=a[l+1];c==="style"?Md(o,h):c==="dangerouslySetInnerHTML"?Dd(o,h):c==="children"?Ur(o,h):ha(o,c,h,u)}switch(s){case"input":ss(o,i);break;case"textarea":Ad(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Qn(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[qr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(it(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(it(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:it(t,e),xt(e);break;case 13:it(t,e),xt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ga=ae())),r&4&&vc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,it(t,e),Ee=u):it(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(h=L=c;L!==null;){switch(g=L,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:Hn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){xc(h);continue}}x!==null?(x.return=g,L=x):xc(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Id("display",l))}catch(w){se(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){se(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:it(t,e),xt(e),r&4&&vc(e);break;case 21:break;default:it(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cp(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ur(o,""),r.flags&=-33);var i=gc(e);Us(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=gc(e);Bs(e,s,l);break;default:throw Error(z(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vh(e,t,n){L=e,pp(e)}function pp(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Lo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=Lo;var u=Ee;if(Lo=l,(Ee=a)&&!u)for(L=o;L!==null;)l=L,a=l.child,l.tag===22&&l.memoizedState!==null?wc(o):a!==null?(a.return=l,L=a):wc(o);for(;i!==null;)L=i,pp(i),i=i.sibling;L=o,Lo=s,Ee=u}yc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):yc(e)}}function yc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Wi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ee||t.flags&512&&bs(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function xc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function wc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wi(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var i=t.return;try{bs(t)}catch(a){se(t,i,a)}break;case 5:var l=t.return;try{bs(t)}catch(a){se(t,l,a)}}}catch(a){se(t,t.return,a)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Wh=Math.ceil,Ei=It.ReactCurrentDispatcher,Wa=It.ReactCurrentOwner,et=It.ReactCurrentBatchConfig,V=0,ve=null,de=null,xe=0,Ue=0,Vn=ln(0),he=0,ro=null,kn=0,Qi=0,Qa=0,Mr=null,Ae=null,Ga=0,or=1/0,_t=null,ji=!1,Hs=null,Zt=null,Ro=!1,Gt=null,_i=0,Fr=0,Vs=null,Ko=-1,Yo=0;function Ne(){return V&6?ae():Ko!==-1?Ko:Ko=ae()}function en(e){return e.mode&1?V&2&&xe!==0?xe&-xe:Th.transition!==null?(Yo===0&&(Yo=Xd()),Yo):(e=K,e!==0||(e=window.event,e=e===void 0?16:rf(e.type)),e):1}function dt(e,t,n,r){if(50<Fr)throw Fr=0,Vs=null,Error(z(185));ao(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(Qi|=n),he===4&&Wt(e,xe)),Me(e,r),n===1&&V===0&&!(t.mode&1)&&(or=ae()+500,Ui&&sn()))}function Me(e,t){var n=e.callbackNode;T0(e,t);var r=ui(e,e===ve?xe:0);if(r===0)n!==null&&Pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pu(n),t===1)e.tag===0?zh(Sc.bind(null,e)):kf(Sc.bind(null,e)),kh(function(){!(V&6)&&sn()}),n=null;else{switch(qd(r)){case 1:n=xa;break;case 4:n=Kd;break;case 16:n=ai;break;case 536870912:n=Yd;break;default:n=ai}n=Sp(n,hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hp(e,t){if(Ko=-1,Yo=0,V&6)throw Error(z(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=ui(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zi(e,r);else{t=r;var o=V;V|=2;var i=gp();(ve!==e||xe!==t)&&(_t=null,or=ae()+500,mn(e,t));do try{Kh();break}catch(s){mp(e,s)}while(!0);Ra(),Ei.current=i,V=o,de!==null?t=0:(ve=null,xe=0,t=he)}if(t!==0){if(t===2&&(o=vs(e),o!==0&&(r=o,t=Ws(e,o))),t===1)throw n=ro,mn(e,0),Wt(e,r),Me(e,ae()),n;if(t===6)Wt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qh(o)&&(t=zi(e,r),t===2&&(i=vs(e),i!==0&&(r=i,t=Ws(e,i))),t===1))throw n=ro,mn(e,0),Wt(e,r),Me(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:cn(e,Ae,_t);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ga+500-ae(),10<t)){if(ui(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=js(cn.bind(null,e,Ae,_t),t);break}cn(e,Ae,_t);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wh(r/1960))-r,10<r){e.timeoutHandle=js(cn.bind(null,e,Ae,_t),r);break}cn(e,Ae,_t);break;case 5:cn(e,Ae,_t);break;default:throw Error(z(329))}}}return Me(e,ae()),e.callbackNode===n?hp.bind(null,e):null}function Ws(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=zi(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Qs(t)),e}function Qs(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Qh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Qa,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if(V&6)throw Error(z(327));qn();var t=ui(e,0);if(!(t&1))return Me(e,ae()),null;var n=zi(e,t);if(e.tag!==0&&n===2){var r=vs(e);r!==0&&(t=r,n=Ws(e,r))}if(n===1)throw n=ro,mn(e,0),Wt(e,t),Me(e,ae()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ae,_t),Me(e,ae()),null}function Ka(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(or=ae()+500,Ui&&sn())}}function En(e){Gt!==null&&Gt.tag===0&&!(V&6)&&qn();var t=V;V|=1;var n=et.transition,r=K;try{if(et.transition=null,K=1,e)return e()}finally{K=r,et.transition=n,V=t,!(V&6)&&sn()}}function Ya(){Ue=Vn.current,te(Vn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ch(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:nr(),te(De),te(_e),Ma();break;case 5:Ia(r);break;case 4:nr();break;case 13:te(re);break;case 19:te(re);break;case 10:Oa(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(ve=e,de=e=tn(e.current,null),xe=Ue=t,he=0,ro=null,Qa=Qi=kn=0,Ae=Mr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}fn=null}return e}function mp(e,t){do{var n=de;try{if(Ra(),Wo.current=ki,Ci){for(var r=oe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ci=!1}if(Cn=0,me=pe=oe=null,Dr=!1,eo=0,Wa.current=null,n===null||n.return===null){he=1,ro=t,de=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=xe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=ac(l);if(x!==null){x.flags&=-257,uc(x,l,s,i,t),x.mode&1&&sc(i,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){sc(i,u,t),Xa();break e}a=Error(z(426))}}else if(ne&&s.mode&1){var O=ac(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),uc(O,l,s,i,t),Na(rr(a,s));break e}}i=a=rr(a,s),he!==4&&(he=2),Mr===null?Mr=[i]:Mr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Jf(i,a,t);tc(i,m);break e;case 1:s=a;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zt===null||!Zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Zf(i,s,t);tc(i,S);break e}}i=i.return}while(i!==null)}yp(n)}catch(T){t=T,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function gp(){var e=Ei.current;return Ei.current=ki,e===null?ki:e}function Xa(){(he===0||he===3||he===2)&&(he=4),ve===null||!(kn&268435455)&&!(Qi&268435455)||Wt(ve,xe)}function zi(e,t){var n=V;V|=2;var r=gp();(ve!==e||xe!==t)&&(_t=null,mn(e,t));do try{Gh();break}catch(o){mp(e,o)}while(!0);if(Ra(),V=n,Ei.current=r,de!==null)throw Error(z(261));return ve=null,xe=0,he}function Gh(){for(;de!==null;)vp(de)}function Kh(){for(;de!==null&&!x0();)vp(de)}function vp(e){var t=wp(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?yp(e):de=t,Wa.current=null}function yp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=bh(n,t,Ue),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=K,o=et.transition;try{et.transition=null,K=1,Yh(e,t,n,r)}finally{et.transition=o,K=r}return null}function Yh(e,t,n,r){do qn();while(Gt!==null);if(V&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(P0(e,i),e===ve&&(de=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,Sp(ai,function(){return qn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var l=K;K=1;var s=V;V|=4,Wa.current=null,Hh(e,n),fp(n,e),mh(ks),ci=!!Cs,ks=Cs=null,e.current=n,Vh(n),w0(),V=s,K=l,et.transition=i}else e.current=n;if(Ro&&(Ro=!1,Gt=e,_i=o),i=e.pendingLanes,i===0&&(Zt=null),k0(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ji)throw ji=!1,e=Hs,Hs=null,e;return _i&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Vs?Fr++:(Fr=0,Vs=e):Fr=0,sn(),null}function qn(){if(Gt!==null){var e=qd(_i),t=et.transition,n=K;try{if(et.transition=null,K=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,_i=0,V&6)throw Error(z(331));var o=V;for(V|=4,L=e.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Ir(8,c,i)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var g=c.sibling,x=c.return;if(up(c),c===u){L=null;break}if(g!==null){g.return=x,L=g;break}L=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var O=w.sibling;w.sibling=null,w=O}while(w!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){l=L;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,L=p;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wi(9,s)}}catch(T){se(s,s.return,T)}if(s===l){L=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,L=S;break e}L=s.return}}if(V=o,sn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{K=n,et.transition=t}}return!1}function Cc(e,t,n){t=rr(n,t),t=Jf(e,t,1),e=Jt(e,t,1),t=Ne(),e!==null&&(ao(e,1,t),Me(e,t))}function se(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=rr(n,e),e=Zf(t,e,1),t=Jt(t,e,1),e=Ne(),t!==null&&(ao(t,1,e),Me(t,e));break}}t=t.return}}function Xh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(he===4||he===3&&(xe&130023424)===xe&&500>ae()-Ga?mn(e,0):Qa|=n),Me(e,t)}function xp(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=Ne();e=$t(e,t),e!==null&&(ao(e,t,n),Me(e,n))}function qh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xp(e,n)}function Jh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),xp(e,n)}var wp;wp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Fh(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ne&&t.flags&1048576&&Ef(t,vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Go(e,t),e=t.pendingProps;var o=Zn(t,_e.current);Xn(t,n),o=ba(null,t,r,e,o,n);var i=Ba();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,mi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$a(t),o.updater=Vi,t.stateNode=o,o._reactInternals=t,Rs(t,r,e,n),t=$s(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Ta(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=em(r),e=lt(r,e),o){case 0:t=As(null,t,r,e,n);break e;case 1:t=fc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=dc(null,t,r,lt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),As(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),fc(e,t,r,o,n);case 3:e:{if(rp(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Nf(e,t),wi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=rr(Error(z(423)),t),t=pc(e,t,r,n,o);break e}else if(r!==o){o=rr(Error(z(424)),t),t=pc(e,t,r,n,o);break e}else for(Ve=qt(t.stateNode.containerInfo.firstChild),Qe=t,ne=!0,at=null,n=Tf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===o){t=Dt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Lf(t),e===null&&Ps(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Es(r,o)?l=null:i!==null&&Es(r,i)&&(t.flags|=32),np(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&Ps(t),null;case 13:return op(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),cc(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(yi,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!De.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ns(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ns(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xn(t,n),o=nt(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),dc(e,t,r,o,n);case 15:return ep(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Go(e,t),t.tag=1,Ie(r)?(e=!0,mi(t)):e=!1,Xn(t,n),qf(t,r,o),Rs(t,r,o,n),$s(null,t,r,!0,e,n);case 19:return ip(e,t,n);case 22:return tp(e,t,n)}throw Error(z(156,t.tag))};function Sp(e,t){return Gd(e,t)}function Zh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Zh(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function em(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ga)return 11;if(e===va)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case An:return gn(n.children,o,i,t);case ma:l=8,o|=8;break;case ns:return e=Ze(12,n,t,o|2),e.elementType=ns,e.lanes=i,e;case rs:return e=Ze(13,n,t,o),e.elementType=rs,e.lanes=i,e;case os:return e=Ze(19,n,t,o),e.elementType=os,e.lanes=i,e;case Nd:return Gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:l=10;break e;case Pd:l=9;break e;case ga:l=11;break e;case va:l=14;break e;case Bt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Nd,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ja(e,t,n,r,o,i,l,s,a){return e=new tm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(i),e}function nm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cp(e){if(!e)return rn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Cf(e,n,t)}return t}function kp(e,t,n,r,o,i,l,s,a){return e=Ja(n,r,!0,e,o,i,l,s,a),e.context=Cp(null),n=e.current,r=Ne(),o=en(n),i=Rt(r,o),i.callback=t??null,Jt(n,i,o),e.current.lanes=o,ao(e,o,r),Me(e,r),e}function Ki(e,t,n,r){var o=t.current,i=Ne(),l=en(o);return n=Cp(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,l),e!==null&&(dt(e,o,l,i),Vo(e,o,l)),l}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){kc(e,t),(e=e.alternate)&&kc(e,t)}function rm(){return null}var Ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}Yi.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ki(e,t,null,null)};Yi.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Ki(null,e,null,null)}),t[At]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&nf(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function om(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ti(l);i.call(u)}}var l=kp(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=l,e[At]=l.current,Yr(e.nodeType===8?e.parentNode:e),En(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ti(a);s.call(u)}}var a=Ja(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=a,e[At]=a.current,Yr(e.nodeType===8?e.parentNode:e),En(function(){Ki(t,a,n,r)}),a}function qi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ti(l);s.call(a)}}Ki(t,l,e,o)}else l=om(n,t,e,o,r);return Ti(l)}Jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(wa(t,n|1),Me(t,ae()),!(V&6)&&(or=ae()+500,sn()))}break;case 13:En(function(){var r=$t(e,1);if(r!==null){var o=Ne();dt(r,e,1,o)}}),Za(e,1)}};Sa=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ne();dt(t,e,134217728,n)}Za(e,134217728)}};Zd=function(e){if(e.tag===13){var t=en(e),n=$t(e,t);if(n!==null){var r=Ne();dt(n,e,t,r)}Za(e,t)}};ef=function(){return K};tf=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};hs=function(e,t,n){switch(t){case"input":if(ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Bi(r);if(!o)throw Error(z(90));Rd(r),ss(r,o)}}}break;case"textarea":Ad(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Bd=Ka;Ud=En;var im={usingClientEntryPoint:!1,Events:[co,Mn,Bi,Fd,bd,Ka]},kr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wd(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Ii=Oo.inject(lm),kt=Oo}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=im;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(z(200));return nm(e,t,null,n)};Ke.createRoot=function(e,t){if(!tu(e))throw Error(z(299));var n=!1,r="",o=Ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ja(e,1,!1,null,null,n,!1,r,o),e[At]=t.current,Yr(e.nodeType===8?e.parentNode:e),new eu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Wd(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return En(e)};Ke.hydrate=function(e,t,n){if(!Xi(t))throw Error(z(200));return qi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ep;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=kp(t,null,e,1,n??null,o,!1,i,l),e[At]=t.current,Yr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yi(t)};Ke.render=function(e,t,n){if(!Xi(t))throw Error(z(200));return qi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(z(40));return e._reactRootContainer?(En(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Ke.unstable_batchedUpdates=Ka;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return qi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),Ed.exports=Ke;var sm=Ed.exports,jc=sm;es.createRoot=jc.createRoot,es.hydrateRoot=jc.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)};function oo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",br="-moz-",G="-webkit-",_p="comm",Ji="rule",nu="decl",am="@import",zp="@keyframes",um="@layer",Tp=Math.abs,ru=String.fromCharCode,Gs=Object.assign;function cm(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Pp(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function qo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function ir(e,t,n){return e.slice(t,n)}function St(e){return e.length}function Np(e){return e.length}function Nr(e,t){return t.push(e),e}function dm(e,t){return e.map(t).join("")}function _c(e,t){return e.filter(function(n){return!zt(n,t)})}var Zi=1,lr=1,Lp=0,ot=0,ce=0,pr="";function el(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Zi,column:lr,length:l,return:"",siblings:s}}function bt(e,t){return Gs(el("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rn(e){for(;e.root;)e=bt(e.root,{children:[e]});Nr(e,e.siblings)}function fm(){return ce}function pm(){return ce=ot>0?ge(pr,--ot):0,lr--,ce===10&&(lr=1,Zi--),ce}function ft(){return ce=ot<Lp?ge(pr,ot++):0,lr++,ce===10&&(lr=1,Zi++),ce}function vn(){return ge(pr,ot)}function Jo(){return ot}function tl(e,t){return ir(pr,e,t)}function Ks(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hm(e){return Zi=lr=1,Lp=St(pr=e),ot=0,[]}function mm(e){return pr="",e}function Fl(e){return Pp(tl(ot-1,Ys(e===91?e+2:e===40?e+1:e)))}function gm(e){for(;(ce=vn())&&ce<33;)ft();return Ks(e)>2||Ks(ce)>3?"":" "}function vm(e,t){for(;--t&&ft()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return tl(e,Jo()+(t<6&&vn()==32&&ft()==32))}function Ys(e){for(;ft();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ys(ce);break;case 40:e===41&&Ys(e);break;case 92:ft();break}return ot}function ym(e,t){for(;ft()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+tl(t,ot-1)+"*"+ru(e===47?e:ft())}function xm(e){for(;!Ks(vn());)ft();return tl(e,ot)}function wm(e){return mm(Zo("",null,null,null,[""],e=hm(e),0,[0],e))}function Zo(e,t,n,r,o,i,l,s,a){for(var u=0,c=0,h=l,g=0,x=0,y=0,w=1,O=1,m=1,d=0,p="",S=o,T=i,_=r,E=p;O;)switch(y=d,d=ft()){case 40:if(y!=108&&ge(E,h-1)==58){qo(E+=F(Fl(d),"&","&\f"),"&\f",Tp(u?s[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Fl(d);break;case 9:case 10:case 13:case 32:E+=gm(y);break;case 92:E+=vm(Jo()-1,7);continue;case 47:switch(vn()){case 42:case 47:Nr(Sm(ym(ft(),Jo()),t,n,a),a);break;default:E+="/"}break;case 123*w:s[u++]=St(E)*m;case 125*w:case 59:case 0:switch(d){case 0:case 125:O=0;case 59+c:m==-1&&(E=F(E,/\f/g,"")),x>0&&St(E)-h&&Nr(x>32?Tc(E+";",r,n,h-1,a):Tc(F(E," ","")+";",r,n,h-2,a),a);break;case 59:E+=";";default:if(Nr(_=zc(E,t,n,u,c,o,s,p,S=[],T=[],h,i),i),d===123)if(c===0)Zo(E,t,_,_,S,i,h,s,T);else switch(g===99&&ge(E,3)===110?100:g){case 100:case 108:case 109:case 115:Zo(e,_,_,r&&Nr(zc(e,_,_,0,0,o,s,p,o,S=[],h,T),T),o,T,h,s,r?S:T);break;default:Zo(E,_,_,_,[""],T,0,s,T)}}u=c=x=0,w=m=1,p=E="",h=l;break;case 58:h=1+St(E),x=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&pm()==125)continue}switch(E+=ru(d),d*w){case 38:m=c>0?1:(E+="\f",-1);break;case 44:s[u++]=(St(E)-1)*m,m=1;break;case 64:vn()===45&&(E+=Fl(ft())),g=vn(),c=h=St(p=E+=xm(Jo())),d++;break;case 45:y===45&&St(E)==2&&(w=0)}}return i}function zc(e,t,n,r,o,i,l,s,a,u,c,h){for(var g=o-1,x=o===0?i:[""],y=Np(x),w=0,O=0,m=0;w<r;++w)for(var d=0,p=ir(e,g+1,g=Tp(O=l[w])),S=e;d<y;++d)(S=Pp(O>0?x[d]+" "+p:F(p,/&\f/g,x[d])))&&(a[m++]=S);return el(e,t,n,o===0?Ji:s,a,u,c,h)}function Sm(e,t,n,r){return el(e,t,n,_p,ru(fm()),ir(e,2,-2),0,r)}function Tc(e,t,n,r,o){return el(e,t,n,nu,ir(e,0,r),ir(e,r+1,-1),r,o)}function Rp(e,t,n){switch(cm(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 4789:return br+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+br+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+Z+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return G+e+Z+e+e;case 6165:return G+e+Z+"flex-"+e+e;case 5187:return G+e+F(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return G+e+Z+"flex-item-"+F(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":Z+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return G+e+Z+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return G+e+Z+F(e,"shrink","negative")+e;case 5292:return G+e+Z+F(e,"basis","preferred-size")+e;case 6060:return G+"box-"+F(e,"-grow","")+G+e+Z+F(e,"grow","positive")+e;case 4554:return G+F(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4200:if(!zt(e,/flex-|baseline/))return Z+"grid-column-align"+ir(e,t)+e;break;case 2592:case 3360:return Z+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,zt(r.props,/grid-\w+-end/)})?~qo(e+(n=n[t].value),"span",0)?e:Z+F(e,"-start","")+e+Z+"grid-row-span:"+(~qo(n,"span",0)?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":Z+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:Z+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(St(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+br+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qo(e,"stretch",0)?Rp(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Z+o+":"+i+u+(l?Z+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ge(e,t+6)===121)return F(e,":",":"+G)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ge(e,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+Z+"$2box$3")+e;case 100:return F(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Pi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Cm(e,t,n,r){switch(e.type){case um:if(e.children.length)break;case am:case nu:return e.return=e.return||e.value;case _p:return"";case zp:return e.return=e.value+"{"+Pi(e.children,r)+"}";case Ji:if(!St(e.value=e.props.join(",")))return""}return St(n=Pi(e.children,r))?e.return=e.value+"{"+n+"}":""}function km(e){var t=Np(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Em(e){return function(t){t.root||(t=t.return)&&e(t)}}function jm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nu:e.return=Rp(e.value,e.length,n);return;case zp:return Pi([bt(e,{value:F(e.value,"@","@"+G)})],r);case Ji:if(e.length)return dm(n=e.props,function(o){switch(zt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rn(bt(e,{props:[F(o,/:(read-\w+)/,":"+br+"$1")]})),Rn(bt(e,{props:[o]})),Gs(e,{props:_c(n,r)});break;case"::placeholder":Rn(bt(e,{props:[F(o,/:(plac\w+)/,":"+G+"input-$1")]})),Rn(bt(e,{props:[F(o,/:(plac\w+)/,":"+br+"$1")]})),Rn(bt(e,{props:[F(o,/:(plac\w+)/,Z+"input-$1")]})),Rn(bt(e,{props:[o]})),Gs(e,{props:_c(n,r)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},sr=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",Op="active",Ap="data-styled-version",nl="6.1.11",ou=`/*!sc*/
`,iu=typeof window<"u"&&"HTMLElement"in window,zm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),rl=Object.freeze([]),ar=Object.freeze({});function Tm(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var $p=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nm=/(^-|-$)/g;function Pc(e){return e.replace(Pm,"-").replace(Nm,"")}var Lm=/(a)(d)/gi,Ao=52,Nc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xs(e){var t,n="";for(t=Math.abs(e);t>Ao;t=t/Ao|0)n=Nc(t%Ao)+n;return(Nc(t%Ao)+n).replace(Lm,"$1-$2")}var bl,Dp=5381,Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ip=function(e){return Wn(Dp,e)};function Mp(e){return Xs(Ip(e)>>>0)}function Rm(e){return e.displayName||e.name||"Component"}function Bl(e){return typeof e=="string"&&!0}var Fp=typeof Symbol=="function"&&Symbol.for,bp=Fp?Symbol.for("react.memo"):60115,Om=Fp?Symbol.for("react.forward_ref"):60112,Am={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$m={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dm=((bl={})[Om]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bl[bp]=Bp,bl);function Lc(e){return("type"in(t=e)&&t.type.$$typeof)===bp?Bp:"$$typeof"in e?Dm[e.$$typeof]:Am;var t}var Im=Object.defineProperty,Mm=Object.getOwnPropertyNames,Rc=Object.getOwnPropertySymbols,Fm=Object.getOwnPropertyDescriptor,bm=Object.getPrototypeOf,Oc=Object.prototype;function Up(e,t,n){if(typeof t!="string"){if(Oc){var r=bm(t);r&&r!==Oc&&Up(e,r,n)}var o=Mm(t);Rc&&(o=o.concat(Rc(t)));for(var i=Lc(e),l=Lc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in $m||n&&n[a]||l&&a in l||i&&a in i)){var u=Fm(t,a);try{Im(e,a,u)}catch{}}}}return e}function jn(e){return typeof e=="function"}function lu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Js(e,t,n){if(n===void 0&&(n=!1),!n&&!io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Js(e[r],t[r]);else if(io(t))for(var r in t)e[r]=Js(e[r],t[r]);return e}function su(e,t){Object.defineProperty(e,"toString",{value:t})}function _n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _n(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(ou);return n},e}(),ei=new Map,Ni=new Map,ti=1,$o=function(e){if(ei.has(e))return ei.get(e);for(;Ni.has(ti);)ti++;var t=ti++;return ei.set(e,t),Ni.set(t,e),t},Um=function(e,t){ti=t+1,ei.set(e,t),Ni.set(t,e)},Hm="style[".concat(sr,"][").concat(Ap,'="').concat(nl,'"]'),Vm=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Wm=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Qm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ou),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Vm);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Um(c,u),Wm(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(sr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(sr,Op),r.setAttribute(Ap,nl);var l=Gm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Km=function(){function e(t){this.element=Hp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw _n(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ym=function(){function e(t){this.element=Hp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Xm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ac=iu,qm={isServer:!iu,useCSSOMInjection:!zm},Vp=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=je(je({},qm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&iu&&Ac&&(Ac=!1,function(i){for(var l=document.querySelectorAll(Hm),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(sr)!==Op&&(Qm(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),su(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(h){var g=function(m){return Ni.get(m)}(h);if(g===void 0)return"continue";var x=i.names.get(g),y=l.getGroup(h);if(x===void 0||y.length===0)return"continue";var w="".concat(sr,".g").concat(h,'[id="').concat(g,'"]'),O="";x!==void 0&&x.forEach(function(m){m.length>0&&(O+="".concat(m,","))}),a+="".concat(y).concat(w,'{content:"').concat(O,'"}').concat(ou)},c=0;c<s;c++)u(c);return a}(o)})}return e.registerId=function(t){return $o(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Xm(o):r?new Km(o):new Ym(o)}(this.options),new Bm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jm=/&/g,Zm=/^\s*\/\/.*$/gm;function Wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wp(n.children,t)),n})}function e2(e){var t,n,r,o=ar,i=o.options,l=i===void 0?ar:i,s=o.plugins,a=s===void 0?rl:s,u=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===Ji&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Jm,n).replace(r,u))}),l.prefix&&c.push(jm),c.push(Cm);var h=function(g,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var O=g.replace(Zm,""),m=wm(y||x?"".concat(y," ").concat(x," { ").concat(O," }"):O);l.namespace&&(m=Wp(m,l.namespace));var d=[];return Pi(m,km(c.concat(Em(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,x){return x.name||_n(15),Wn(g,x.name)},Dp).toString():"",h}var t2=new Vp,Zs=e2(),Qp=Pe.createContext({shouldForwardProp:void 0,styleSheet:t2,stylis:Zs});Qp.Consumer;Pe.createContext(void 0);function $c(){return ee.useContext(Qp)}var Gp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Zs);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,su(this,function(){throw _n(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zs),this.name+t.hash},e}(),n2=function(e){return e>="A"&&e<="Z"};function Dc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;n2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Kp=function(e){return e==null||e===!1||e===""},Yp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Kp(i)&&(Array.isArray(i)&&i.isCss||jn(i)?r.push("".concat(Dc(o),":"),i,";"):io(i)?r.push.apply(r,oo(oo(["".concat(o," {")],Yp(i),!1),["}"],!1)):r.push("".concat(Dc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _m||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(Kp(e))return[];if(lu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return yn(o,t,n,r)}var i;return e instanceof Gp?n?(e.inject(n,r),[e.getName(r)]):[e]:io(e)?Yp(e):Array.isArray(e)?Array.prototype.concat.apply(rl,e.map(function(l){return yn(l,t,n,r)})):[e.toString()]}function r2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!lu(n))return!1}return!0}var o2=Ip(nl),i2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&r2(t),this.componentId=n,this.baseHash=Wn(o2,n),this.baseStyle=r,Vp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=qs(yn(this.rules,t,n,r)),l=Xs(Wn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=hn(o,l),this.staticRulesId=l}else{for(var a=Wn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var g=qs(yn(h,t,n,r));a=Wn(a,g+c),u+=g}}if(u){var x=Xs(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=hn(o,x)}}return o},e}(),Li=Pe.createContext(void 0);Li.Consumer;function l2(e){var t=Pe.useContext(Li),n=ee.useMemo(function(){return function(r,o){if(!r)throw _n(14);if(jn(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw _n(8);return o?je(je({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?Pe.createElement(Li.Provider,{value:n},e.children):null}var Ul={};function s2(e,t,n){var r=lu(e),o=e,i=!Bl(e),l=t.attrs,s=l===void 0?rl:l,a=t.componentId,u=a===void 0?function(S,T){var _=typeof S!="string"?"sc":Pc(S);Ul[_]=(Ul[_]||0)+1;var E="".concat(_,"-").concat(Mp(nl+_+Ul[_]));return T?"".concat(T,"-").concat(E):E}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(S){return Bl(S)?"styled.".concat(S):"Styled(".concat(Rm(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Pc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;y=function(S,T){return w(S,T)&&O(S,T)}}else y=w}var m=new i2(n,g,r?o.componentStyle:void 0);function d(S,T){return function(_,E,N){var U=_.attrs,I=_.componentStyle,ze=_.defaultProps,W=_.foldedComponentIds,yt=_.styledComponentId,Nn=_.target,M=Pe.useContext(Li),A=$c(),$=_.shouldForwardProp||A.shouldForwardProp,j=Tm(E,M,ze)||ar,R=function(q,b,le){for(var Xe,be=je(je({},b),{className:void 0,theme:le}),jt=0;jt<q.length;jt+=1){var an=jn(Xe=q[jt])?Xe(be):Xe;for(var Oe in an)be[Oe]=Oe==="className"?hn(be[Oe],an[Oe]):Oe==="style"?je(je({},be[Oe]),an[Oe]):an[Oe]}return b.className&&(be.className=hn(be.className,b.className)),be}(U,E,j),v=R.as||Nn,Q={};for(var P in R)R[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&R.theme===j||(P==="forwardedAs"?Q.as=R.forwardedAs:$&&!$(P,v)||(Q[P]=R[P]));var H=function(q,b){var le=$c(),Xe=q.generateAndInjectStyles(b,le.styleSheet,le.stylis);return Xe}(I,R),Y=hn(W,yt);return H&&(Y+=" "+H),R.className&&(Y+=" "+R.className),Q[Bl(v)&&!$p.has(v)?"class":"className"]=Y,Q.ref=N,ee.createElement(v,Q)}(p,S,T)}d.displayName=h;var p=Pe.forwardRef(d);return p.attrs=x,p.componentStyle=m,p.displayName=h,p.shouldForwardProp=y,p.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(T){for(var _=[],E=1;E<arguments.length;E++)_[E-1]=arguments[E];for(var N=0,U=_;N<U.length;N++)Js(T,U[N],!0);return T}({},o.defaultProps,S):S}}),su(p,function(){return".".concat(p.styledComponentId)}),i&&Up(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Ic(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Mc=function(e){return Object.assign(e,{isCss:!0})};function Xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||io(e))return Mc(yn(Ic(rl,oo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):Mc(yn(Ic(r,t)))}function ea(e,t,n){if(n===void 0&&(n=ar),!t)throw _n(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Xp.apply(void 0,oo([o],i,!1)))};return r.attrs=function(o){return ea(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ea(e,t,je(je({},n),o))},r}var qp=function(e){return ea(s2,e)},k=qp;$p.forEach(function(e){k[e]=qp(e)});function gt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qs(Xp.apply(void 0,oo([e],t,!1))),o=Mp(r);return new Gp(o,r)}const Jp="/assets/doragacharla_lizy-D9u5FGKy.jpg",a2="/assets/doragacharla_lizy3-CXU4pxRz.jpg",We={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},u2=k.div`
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
`,c2=k.div`
  font-size: ${e=>e.scrolled?"20px":"24px"};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${We.ghostWhite};
  background-image: url(${Jp});
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
`,d2=k.div`
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
`,f2=k.div`
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
`,p2=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${We.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`,h2=k.div`
  background-image: url(${a2});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`,m2=k.div`
  color: ${We.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`,Do=k.a`
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
`,g2=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState(!1);ee.useEffect(()=>{const s=()=>{const a=window.scrollY;t(a>50);const u=["home","aboutme","knowmore","skills","projects","connect"],c=a;u.forEach(h=>{const g=document.getElementById(h);g&&g.offsetTop<=c+50&&r(h)})};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const l=s=>{const a=document.getElementById(s);a&&a.scrollIntoView({behavior:"smooth"}),i(!1)};return f.jsxs(u2,{scrolled:e,children:[f.jsx(c2,{scrolled:e}),f.jsxs(d2,{onClick:()=>i(!o),children:[f.jsx(Hl,{open:o}),f.jsx(Hl,{open:o}),f.jsx(Hl,{open:o})]}),f.jsxs(f2,{open:o,children:[f.jsxs(p2,{children:[f.jsx(h2,{}),f.jsx(m2,{children:"Doragacharla Lizy"})]}),f.jsx(Do,{className:n==="home"?"active":"",onClick:()=>l("home"),children:"Home"}),f.jsx(Do,{className:n==="aboutme"?"active":"",onClick:()=>l("aboutme"),children:"About me"}),f.jsx(Do,{className:n==="knowmore"?"active":"",onClick:()=>l("knowmore"),children:"Know More"}),f.jsx(Do,{className:n==="connect"?"active":"",onClick:()=>l("connect"),children:"Connect"})]})]})};var Zp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fc=Pe.createContext&&Pe.createContext(Zp),v2=["attr","size","title"];function y2(e,t){if(e==null)return{};var n=x2(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function x2(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ri.apply(this,arguments)}function bc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Oi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bc(Object(n),!0).forEach(function(r){w2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w2(e,t,n){return t=S2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S2(e){var t=C2(e,"string");return typeof t=="symbol"?t:t+""}function C2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function e1(e){return e&&e.map((t,n)=>Pe.createElement(t.tag,Oi({key:n},t.attr),e1(t.child)))}function ue(e){return t=>Pe.createElement(k2,Ri({attr:Oi({},e.attr)},t),e1(e.child))}function k2(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=y2(e,v2),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Pe.createElement("svg",Ri({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Oi(Oi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Pe.createElement("title",null,i),e.children)};return Fc!==void 0?Pe.createElement(Fc.Consumer,null,n=>t(n)):t(Zp)}function E2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"},child:[]}]})(e)}function j2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function _2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function z2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function T2(e){return ue({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"},child:[]}]})(e)}function P2(e){return ue({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"},child:[]}]})(e)}var t1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:$1,()=>(()=>{var n={75:function(l){(function(){var s,a,u,c,h,g;typeof performance<"u"&&performance!==null&&performance.now?l.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(l.exports=function(){return(s()-h)/1e6},a=process.hrtime,c=(s=function(){var x;return 1e9*(x=a())[0]+x[1]})(),g=1e9*process.uptime(),h=c-g):Date.now?(l.exports=function(){return Date.now()-u},u=Date.now()):(l.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(l,s,a)=>{for(var u=a(75),c=typeof window>"u"?a.g:window,h=["moz","webkit"],g="AnimationFrame",x=c["request"+g],y=c["cancel"+g]||c["cancelRequest"+g],w=0;!x&&w<h.length;w++)x=c[h[w]+"Request"+g],y=c[h[w]+"Cancel"+g]||c[h[w]+"CancelRequest"+g];if(!x||!y){var O=0,m=0,d=[];x=function(p){if(d.length===0){var S=u(),T=Math.max(0,16.666666666666668-(S-O));O=T+S,setTimeout(function(){var _=d.slice(0);d.length=0;for(var E=0;E<_.length;E++)if(!_[E].cancelled)try{_[E].callback(O)}catch(N){setTimeout(function(){throw N},0)}},Math.round(T))}return d.push({handle:++m,callback:p,cancelled:!1}),m},y=function(p){for(var S=0;S<d.length;S++)d[S].handle===p&&(d[S].cancelled=!0)}}l.exports=function(p){return x.call(c,p)},l.exports.cancel=function(){y.apply(c,arguments)},l.exports.polyfill=function(p){p||(p=c),p.requestAnimationFrame=x,p.cancelAnimationFrame=y}}},r={};function o(l){var s=r[l];if(s!==void 0)return s.exports;var a=r[l]={exports:{}};return n[l].call(a.exports,a,a.exports,o),a.exports}o.n=l=>{var s=l&&l.__esModule?()=>l.default:()=>l;return o.d(s,{a:s}),s},o.d=(l,s)=>{for(var a in s)o.o(s,a)&&!o.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:s[a]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s);var i={};return(()=>{o.d(i,{default:()=>Nn});var l=o(4087),s=o.n(l);const a=function(M){return new RegExp(/<[a-z][\s\S]*>/i).test(M)},u=function(M,A){return Math.floor(Math.random()*(A-M+1))+M};var c="TYPE_CHARACTER",h="REMOVE_CHARACTER",g="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",y="PAUSE_FOR",w="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",p="CHANGE_CURSOR",S="PASTE_STRING",T="HTML_TAG";function _(M){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},_(M)}function E(M,A){var $=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);A&&(j=j.filter(function(R){return Object.getOwnPropertyDescriptor(M,R).enumerable})),$.push.apply($,j)}return $}function N(M){for(var A=1;A<arguments.length;A++){var $=arguments[A]!=null?arguments[A]:{};A%2?E(Object($),!0).forEach(function(j){W(M,j,$[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors($)):E(Object($)).forEach(function(j){Object.defineProperty(M,j,Object.getOwnPropertyDescriptor($,j))})}return M}function U(M){return function(A){if(Array.isArray(A))return I(A)}(M)||function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}(M)||function(A,$){if(A){if(typeof A=="string")return I(A,$);var j=Object.prototype.toString.call(A).slice(8,-1);return j==="Object"&&A.constructor&&(j=A.constructor.name),j==="Map"||j==="Set"?Array.from(A):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?I(A,$):void 0}}(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(M,A){(A==null||A>M.length)&&(A=M.length);for(var $=0,j=new Array(A);$<A;$++)j[$]=M[$];return j}function ze(M,A){for(var $=0;$<A.length;$++){var j=A[$];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(M,yt(j.key),j)}}function W(M,A,$){return(A=yt(A))in M?Object.defineProperty(M,A,{value:$,enumerable:!0,configurable:!0,writable:!0}):M[A]=$,M}function yt(M){var A=function($,j){if(_($)!=="object"||$===null)return $;var R=$[Symbol.toPrimitive];if(R!==void 0){var v=R.call($,"string");if(_(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String($)}(M);return _(A)==="symbol"?A:String(A)}const Nn=function(){function M(j,R){var v=this;if(function(P,H){if(!(P instanceof H))throw new TypeError("Cannot call a class as a function")}(this,M),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){v.state.elements.container&&(v.state.elements.wrapper.className=v.options.wrapperClassName,v.state.elements.cursor.className=v.options.cursorClassName,v.state.elements.cursor.innerHTML=v.options.cursor,v.state.elements.container.innerHTML="",v.state.elements.container.appendChild(v.state.elements.wrapper),v.state.elements.container.appendChild(v.state.elements.cursor))}),W(this,"start",function(){return v.state.eventLoopPaused=!1,v.runEventLoop(),v}),W(this,"pause",function(){return v.state.eventLoopPaused=!0,v}),W(this,"stop",function(){return v.state.eventLoop&&((0,l.cancel)(v.state.eventLoop),v.state.eventLoop=null),v}),W(this,"pauseFor",function(P){return v.addEventToQueue(y,{ms:P}),v}),W(this,"typeOutAllStrings",function(){return typeof v.options.strings=="string"?(v.typeString(v.options.strings).pauseFor(v.options.pauseFor),v):(v.options.strings.forEach(function(P){v.typeString(P).pauseFor(v.options.pauseFor).deleteAll(v.options.deleteSpeed)}),v)}),W(this,"typeString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(P))return v.typeOutHTMLString(P,H);if(P){var Y=(v.options||{}).stringSplitter,q=typeof Y=="function"?Y(P):P.split("");v.typeCharacters(q,H)}return v}),W(this,"pasteString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(P)?v.typeOutHTMLString(P,H,!0):(P&&v.addEventToQueue(S,{character:P,node:H}),v)}),W(this,"typeOutHTMLString",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Y=arguments.length>2?arguments[2]:void 0,q=function(be){var jt=document.createElement("div");return jt.innerHTML=be,jt.childNodes}(P);if(q.length>0)for(var b=0;b<q.length;b++){var le=q[b],Xe=le.innerHTML;le&&le.nodeType!==3?(le.innerHTML="",v.addEventToQueue(O,{node:le,parentNode:H}),Y?v.pasteString(Xe,le):v.typeString(Xe,le)):le.textContent&&(Y?v.pasteString(le.textContent,H):v.typeString(le.textContent,H))}return v}),W(this,"deleteAll",function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return v.addEventToQueue(g,{speed:P}),v}),W(this,"changeDeleteSpeed",function(P){if(!P)throw new Error("Must provide new delete speed");return v.addEventToQueue(m,{speed:P}),v}),W(this,"changeDelay",function(P){if(!P)throw new Error("Must provide new delay");return v.addEventToQueue(d,{delay:P}),v}),W(this,"changeCursor",function(P){if(!P)throw new Error("Must provide new cursor");return v.addEventToQueue(p,{cursor:P}),v}),W(this,"deleteChars",function(P){if(!P)throw new Error("Must provide amount of characters to delete");for(var H=0;H<P;H++)v.addEventToQueue(h);return v}),W(this,"callFunction",function(P,H){if(!P||typeof P!="function")throw new Error("Callback must be a function");return v.addEventToQueue(w,{cb:P,thisArg:H}),v}),W(this,"typeCharacters",function(P){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(Y){v.addEventToQueue(c,{character:Y,node:H})}),v}),W(this,"removeCharacters",function(P){if(!P||!Array.isArray(P))throw new Error("Characters must be an array");return P.forEach(function(){v.addEventToQueue(h)}),v}),W(this,"addEventToQueue",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.addEventToStateProperty(P,H,Y,"eventQueue")}),W(this,"addReverseCalledEvent",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.options.loop?v.addEventToStateProperty(P,H,Y,"reverseCalledEvents"):v}),W(this,"addEventToStateProperty",function(P,H){var Y=arguments.length>2&&arguments[2]!==void 0&&arguments[2],q=arguments.length>3?arguments[3]:void 0,b={eventName:P,eventArgs:H||{}};return v.state[q]=Y?[b].concat(U(v.state[q])):[].concat(U(v.state[q]),[b]),v}),W(this,"runEventLoop",function(){v.state.lastFrameTime||(v.state.lastFrameTime=Date.now());var P=Date.now(),H=P-v.state.lastFrameTime;if(!v.state.eventQueue.length){if(!v.options.loop)return;v.state.eventQueue=U(v.state.calledEvents),v.state.calledEvents=[],v.options=N({},v.state.initialOptions)}if(v.state.eventLoop=s()(v.runEventLoop),!v.state.eventLoopPaused){if(v.state.pauseUntil){if(P<v.state.pauseUntil)return;v.state.pauseUntil=null}var Y,q=U(v.state.eventQueue),b=q.shift();if(!(H<=(Y=b.eventName===x||b.eventName===h?v.options.deleteSpeed==="natural"?u(40,80):v.options.deleteSpeed:v.options.delay==="natural"?u(120,160):v.options.delay))){var le=b.eventName,Xe=b.eventArgs;switch(v.logInDevMode({currentEvent:b,state:v.state,delay:Y}),le){case S:case c:var be=Xe.character,jt=Xe.node,an=document.createTextNode(be),Oe=an;v.options.onCreateTextNode&&typeof v.options.onCreateTextNode=="function"&&(Oe=v.options.onCreateTextNode(be,an)),Oe&&(jt?jt.appendChild(Oe):v.state.elements.wrapper.appendChild(Oe)),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:"TEXT_NODE",character:be,node:Oe}]);break;case h:q.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case y:var z1=b.eventArgs.ms;v.state.pauseUntil=Date.now()+parseInt(z1);break;case w:var hu=b.eventArgs,T1=hu.cb,P1=hu.thisArg;T1.call(P1,{elements:v.state.elements});break;case O:var mu=b.eventArgs,ul=mu.node,cl=mu.parentNode;cl?cl.appendChild(ul):v.state.elements.wrapper.appendChild(ul),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:T,node:ul,parentNode:cl||v.state.elements.wrapper}]);break;case g:var N1=v.state.visibleNodes,dl=Xe.speed,mo=[];dl&&mo.push({eventName:m,eventArgs:{speed:dl,temp:!0}});for(var gu=0,L1=N1.length;gu<L1;gu++)mo.push({eventName:x,eventArgs:{removingCharacterNode:!1}});dl&&mo.push({eventName:m,eventArgs:{speed:v.options.deleteSpeed,temp:!0}}),q.unshift.apply(q,mo);break;case x:var R1=b.eventArgs.removingCharacterNode;if(v.state.visibleNodes.length){var fl=v.state.visibleNodes.pop(),O1=fl.type,go=fl.node,A1=fl.character;v.options.onRemoveNode&&typeof v.options.onRemoveNode=="function"&&v.options.onRemoveNode({node:go,character:A1}),go&&go.parentNode.removeChild(go),O1===T&&R1&&q.unshift({eventName:x,eventArgs:{}})}break;case m:v.options.deleteSpeed=b.eventArgs.speed;break;case d:v.options.delay=b.eventArgs.delay;break;case p:v.options.cursor=b.eventArgs.cursor,v.state.elements.cursor.innerHTML=b.eventArgs.cursor}v.options.loop&&(b.eventName===x||b.eventArgs&&b.eventArgs.temp||(v.state.calledEvents=[].concat(U(v.state.calledEvents),[b]))),v.state.eventQueue=q,v.state.lastFrameTime=P}}}),j)if(typeof j=="string"){var Q=document.querySelector(j);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=j;R&&(this.options=N(N({},this.options),R)),this.state.initialOptions=N({},this.options),this.init()}var A,$;return A=M,($=[{key:"init",value:function(){var j,R;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(R=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(R),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&ze(A.prototype,$),Object.defineProperty(A,"prototype",{writable:!1}),M}()})(),i.default})())})(t1);var N2=t1.exports;const L2=fd(N2),Bc="/assets/doragacharla_lizy_resume-CprIYGCe.pdf",R2="/assets/star-BWEquncH.png";function Uc(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Hc(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function O2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function A2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function $2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function D2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function I2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function M2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Vc(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function F2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function b2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function B2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function U2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function H2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z"},child:[]}]})(e)}function V2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65z"},child:[]}]})(e)}const W2="/assets/about1-BUwqwXmI.jpg",Q2="/assets/about2-DUDpJcN3.webp",G2="/assets/about3-mUmQ87ht.jpeg",K2="/assets/skill2-B0rXQTLf.jpg",Y2=gt`
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
`,au=k.div`
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
`,rg=k(au)`
  transform: rotateX(0deg) translateZ(200px);
`,og=k(au)`
  transform: rotateX(180deg) translateZ(200px);
`,Wc=k(au)`
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
`,sg=k.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,ag=k.div`
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
`,ug=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Qc=k.button`
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
`,cg=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Io=[f.jsx(U2,{}),f.jsx(b2,{}),f.jsx(D2,{}),f.jsx(O2,{})],dg=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(!0),[o,i]=ee.useState("up"),[l,s]=ee.useState(0),a=[{title:"Aspiring Learner",paragraph:"I am an enthusiastic learner exploring various domains to broaden my skills.",image:W2,icon:Io[0]},{title:"Frontend Developer",paragraph:"I specialize in creating user interfaces and experiences using modern frontend technologies.",image:Q2,icon:Io[1]},{title:"Data Analyst",paragraph:"I analyze data to derive insights and make informed decisions for business growth.",image:G2,icon:Io[2]},{title:"Future Learner",paragraph:"I aspire to continually learn and adapt to new technologies and challenges.",image:K2,icon:Io[3]}];ee.useEffect(()=>{const h=setInterval(()=>{r(!1),i("up"),setTimeout(()=>{t(g=>(g+1)%a.length),s(g=>g-90),r(!0)},500)},1e4);return()=>clearInterval(h)},[a.length]);const u=()=>{r(!1),i("up"),setTimeout(()=>{t(h=>(h+1)%a.length),s(h=>h-90),r(!0)},500)},c=()=>{r(!1),i("down"),setTimeout(()=>{t(h=>(h-1+a.length)%a.length),s(h=>h+90),r(!0)},500)};return f.jsxs(Z2,{id:"aboutme",children:[f.jsx(eg,{children:"About Me"}),f.jsx(tg,{children:f.jsxs(ng,{rotation:l,slideIn:n,direction:o,children:[f.jsxs(rg,{children:[f.jsxs(ig,{children:[f.jsxs(lg,{children:[a[e].icon," ",a[e].title]}),f.jsx(sg,{children:a[e].paragraph})]}),f.jsx(ag,{children:f.jsx(ug,{src:a[e].image,alt:a[e].title})})]}),f.jsx(og,{}),f.jsx(Wc,{rotate:"90deg"}),f.jsx(Wc,{rotate:"-90deg"})]})}),f.jsxs(cg,{children:[f.jsx(Qc,{onClick:c,children:f.jsx(V2,{})}),f.jsx(Qc,{onClick:u,children:f.jsx(H2,{})})]})]})},ut={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},fg=gt`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,pg=gt`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
`,hg=k.section`
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
`,mg=k.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,gg=k.p`
  font-size: 1.2em;
  max-width: 80%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,vg=k.div`
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
`,yg=k.div`
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
`,xg=k.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${fg} 20s linear infinite;
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
    background: url(${R2}) center/50% no-repeat;
    box-shadow: 0 0 0 5px ${ut.spaceCadet};
    animation: ${pg} 2s linear infinite;
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
`,wg=k.div`
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
`,Sg=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Cg=k.div`
  font-size: 2.2em;
  color: ${ut.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`,kg=k.div`
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
`,Vl=k.a`
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
`;const Eg=()=>{ee.useEffect(()=>{const t=new L2("#typing-effect-container",{strings:["Front End Developer","Data Analyst"],autoStart:!0,loop:!0,deleteSpeed:20,delay:80});return()=>{t.stop()}},[]);const e=()=>{const t=document.getElementById("aboutme");t&&t.scrollIntoView({behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsxs(hg,{id:"home",children:[f.jsxs(yg,{children:[f.jsx(xg,{}),f.jsx(wg,{children:f.jsx(Sg,{src:Jp,alt:"Profile"})})]}),f.jsxs(vg,{children:[f.jsx(mg,{children:"Hi, I'm Lizy Doragacharla"}),f.jsx(Cg,{id:"typing-effect-container"}),f.jsx(gg,{children:"I'm a passionate Front End Developer and Data Analyst with a love for creating engaging user experiences and deriving insights from data."}),f.jsxs(kg,{children:[f.jsx(Mo,{href:"https://www.linkedin.com/in/lizy-d-371971233/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(_2,{})}),f.jsx(Mo,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(j2,{})}),f.jsx(Mo,{href:"mailto:lizydoragacharla@gmail.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(P2,{})}),f.jsx(Mo,{href:"https://wa.me/918106868075",target:"_blank",rel:"noopener noreferrer",children:f.jsx(T2,{})})]}),f.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[f.jsx(Vl,{onClick:e,children:"About Me"}),f.jsx(Vl,{href:Bc,download:!0,children:f.jsx(z2,{})}),f.jsx(Vl,{href:Bc,target:"_blank",rel:"noopener noreferrer",children:f.jsx(E2,{})})]})]})]}),f.jsx(dg,{})]})};function n1(e,t){return function(){return e.apply(t,arguments)}}const{toString:jg}=Object.prototype,{getPrototypeOf:uu}=Object,ol=(e=>t=>{const n=jg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=e=>(e=e.toLowerCase(),t=>ol(t)===e),il=e=>t=>typeof t===e,{isArray:hr}=Array,lo=il("undefined");function _g(e){return e!==null&&!lo(e)&&e.constructor!==null&&!lo(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const r1=vt("ArrayBuffer");function zg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&r1(e.buffer),t}const Tg=il("string"),tt=il("function"),o1=il("number"),ll=e=>e!==null&&typeof e=="object",Pg=e=>e===!0||e===!1,ni=e=>{if(ol(e)!=="object")return!1;const t=uu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ng=vt("Date"),Lg=vt("File"),Rg=vt("Blob"),Og=vt("FileList"),Ag=e=>ll(e)&&tt(e.pipe),$g=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=ol(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},Dg=vt("URLSearchParams"),[Ig,Mg,Fg,bg]=["ReadableStream","Request","Response","Headers"].map(vt),Bg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function po(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(r=0;r<l;r++)s=i[r],t.call(null,e[s],s,e)}}function i1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const l1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,s1=e=>!lo(e)&&e!==l1;function ta(){const{caseless:e}=s1(this)&&this||{},t={},n=(r,o)=>{const i=e&&i1(t,o)||o;ni(t[i])&&ni(r)?t[i]=ta(t[i],r):ni(r)?t[i]=ta({},r):hr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&po(arguments[r],n);return t}const Ug=(e,t,n,{allOwnKeys:r}={})=>(po(t,(o,i)=>{n&&tt(o)?e[i]=n1(o,n):e[i]=o},{allOwnKeys:r}),e),Hg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Vg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Wg=(e,t,n,r)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=n!==!1&&uu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gg=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!o1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Kg=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&uu(Uint8Array)),Yg=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Xg=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qg=vt("HTMLFormElement"),Jg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Gc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zg=vt("RegExp"),a1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};po(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},e3=e=>{a1(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},t3=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},n3=()=>{},r3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Wl="abcdefghijklmnopqrstuvwxyz",Kc="0123456789",u1={DIGIT:Kc,ALPHA:Wl,ALPHA_DIGIT:Wl+Wl.toUpperCase()+Kc},o3=(e=16,t=u1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function i3(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const l3=e=>{const t=new Array(10),n=(r,o)=>{if(ll(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=hr(r)?[]:{};return po(r,(l,s)=>{const a=n(l,o+1);!lo(a)&&(i[s]=a)}),t[o]=void 0,i}}return r};return n(e,0)},s3=vt("AsyncFunction"),a3=e=>e&&(ll(e)||tt(e))&&tt(e.then)&&tt(e.catch),C={isArray:hr,isArrayBuffer:r1,isBuffer:_g,isFormData:$g,isArrayBufferView:zg,isString:Tg,isNumber:o1,isBoolean:Pg,isObject:ll,isPlainObject:ni,isReadableStream:Ig,isRequest:Mg,isResponse:Fg,isHeaders:bg,isUndefined:lo,isDate:Ng,isFile:Lg,isBlob:Rg,isRegExp:Zg,isFunction:tt,isStream:Ag,isURLSearchParams:Dg,isTypedArray:Kg,isFileList:Og,forEach:po,merge:ta,extend:Ug,trim:Bg,stripBOM:Hg,inherits:Vg,toFlatObject:Wg,kindOf:ol,kindOfTest:vt,endsWith:Qg,toArray:Gg,forEachEntry:Yg,matchAll:Xg,isHTMLForm:qg,hasOwnProperty:Gc,hasOwnProp:Gc,reduceDescriptors:a1,freezeMethods:e3,toObjectSet:t3,toCamelCase:Jg,noop:n3,toFiniteNumber:r3,findKey:i1,global:l1,isContextDefined:s1,ALPHABET:u1,generateString:o3,isSpecCompliantForm:i3,toJSONObject:l3,isAsyncFn:s3,isThenable:a3};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const c1=D.prototype,d1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{d1[e]={value:e}});Object.defineProperties(D,d1);Object.defineProperty(c1,"isAxiosError",{value:!0});D.from=(e,t,n,r,o,i)=>{const l=Object.create(c1);return C.toFlatObject(e,l,function(a){return a!==Error.prototype},s=>s!=="isAxiosError"),D.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const u3=null;function na(e){return C.isPlainObject(e)||C.isArray(e)}function f1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Yc(e,t,n){return e?e.concat(t).map(function(o,i){return o=f1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function c3(e){return C.isArray(e)&&!e.some(na)}const d3=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function sl(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,O){return!C.isUndefined(O[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,l=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!a&&C.isBlob(y))throw new D("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,O){let m=y;if(y&&!O&&typeof y=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&c3(y)||(C.isFileList(y)||C.endsWith(w,"[]"))&&(m=C.toArray(y)))return w=f1(w),m.forEach(function(p,S){!(C.isUndefined(p)||p===null)&&t.append(l===!0?Yc([w],S,i):l===null?w:w+"[]",u(p))}),!1}return na(y)?!0:(t.append(Yc(O,w,i),u(y)),!1)}const h=[],g=Object.assign(d3,{defaultVisitor:c,convertValue:u,isVisitable:na});function x(y,w){if(!C.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),C.forEach(y,function(m,d){(!(C.isUndefined(m)||m===null)&&o.call(t,m,C.isString(d)?d.trim():d,w,g))===!0&&x(m,w?w.concat(d):[d])}),h.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Xc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cu(e,t){this._pairs=[],e&&sl(e,this,t)}const p1=cu.prototype;p1.append=function(t,n){this._pairs.push([t,n])};p1.toString=function(t){const n=t?function(r){return t.call(this,r,Xc)}:Xc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function f3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function h1(e,t,n){if(!t)return e;const r=n&&n.encode||f3,o=n&&n.serialize;let i;if(o?i=o(t,n):i=C.isURLSearchParams(t)?t.toString():new cu(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class qc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const m1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},p3=typeof URLSearchParams<"u"?URLSearchParams:cu,h3=typeof FormData<"u"?FormData:null,m3=typeof Blob<"u"?Blob:null,g3={isBrowser:!0,classes:{URLSearchParams:p3,FormData:h3,Blob:m3},protocols:["http","https","file","blob","url","data"]},du=typeof window<"u"&&typeof document<"u",v3=(e=>du&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),y3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",x3=du&&window.location.href||"http://localhost",w3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:du,hasStandardBrowserEnv:v3,hasStandardBrowserWebWorkerEnv:y3,origin:x3},Symbol.toStringTag,{value:"Module"})),pt={...w3,...g3};function S3(e,t){return sl(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return pt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function C3(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function k3(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function g1(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),a=i>=n.length;return l=!l&&C.isArray(o)?o.length:l,a?(C.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!s):((!o[l]||!C.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&C.isArray(o[l])&&(o[l]=k3(o[l])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,o)=>{t(C3(r),o,n,0)}),n}return null}function E3(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ho={transitional:m1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o?JSON.stringify(g1(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return S3(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return sl(s?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),E3(t)):t}],transformResponse:[function(t){const n=this.transitional||ho.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?D.from(s,D.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{ho.headers[e]={}});const j3=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_3=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&j3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jc=Symbol("internals");function Er(e){return e&&String(e).trim().toLowerCase()}function ri(e){return e===!1||e==null?e:C.isArray(e)?e.map(ri):String(e)}function z3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const T3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ql(e,t,n,r,o){if(C.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function P3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function N3(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class Fe{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,a,u){const c=Er(a);if(!c)throw new Error("header name must be a non-empty string");const h=C.findKey(o,c);(!h||o[h]===void 0||u===!0||u===void 0&&o[h]!==!1)&&(o[h||a]=ri(s))}const l=(s,a)=>C.forEach(s,(u,c)=>i(u,c,a));if(C.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(C.isString(t)&&(t=t.trim())&&!T3(t))l(_3(t),n);else if(C.isHeaders(t))for(const[s,a]of t.entries())i(a,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Er(t),t){const r=C.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return z3(o);if(C.isFunction(n))return n.call(this,o,r);if(C.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Er(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ql(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Er(l),l){const s=C.findKey(r,l);s&&(!n||Ql(r,r[s],s,n))&&(delete r[s],o=!0)}}return C.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ql(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return C.forEach(this,(o,i)=>{const l=C.findKey(r,i);if(l){n[l]=ri(o),delete n[i];return}const s=t?P3(i):String(i).trim();s!==i&&delete n[i],n[s]=ri(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Jc]=this[Jc]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=Er(l);r[s]||(N3(o,l),r[s]=!0)}return C.isArray(t)?t.forEach(i):i(t),this}}Fe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Fe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(Fe);function Gl(e,t){const n=this||ho,r=t||n,o=Fe.from(r.headers);let i=r.data;return C.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function v1(e){return!!(e&&e.__CANCEL__)}function mr(e,t,n){D.call(this,e??"canceled",D.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(mr,D,{__CANCEL__:!0});function y1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function L3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function R3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];l||(l=u),n[o]=a,r[o]=u;let h=i,g=0;for(;h!==o;)g+=n[h++],h=h%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=c&&u-c;return x?Math.round(g*1e3/x):void 0}}function O3(e,t){let n=0;const r=1e3/t;let o=null;return function(){const l=this===!0,s=Date.now();if(l||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Ai=(e,t,n=3)=>{let r=0;const o=R3(50,250);return O3(i=>{const l=i.loaded,s=i.lengthComputable?i.total:void 0,a=l-r,u=o(a),c=l<=s;r=l;const h={loaded:l,total:s,progress:s?l/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&c?(s-l)/u:void 0,event:i,lengthComputable:s!=null};h[t?"download":"upload"]=!0,e(h)},n)},A3=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const s=C.isString(l)?o(l):l;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),$3=pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const l=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),C.isString(r)&&l.push("path="+r),C.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function D3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function I3(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function x1(e,t){return e&&!D3(t)?I3(e,t):t}const Zc=e=>e instanceof Fe?{...e}:e;function zn(e,t){t=t||{};const n={};function r(u,c,h){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge.call({caseless:h},u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function o(u,c,h){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function i(u,c){if(!C.isUndefined(c))return r(void 0,c)}function l(u,c){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,h){if(h in t)return r(u,c);if(h in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,c)=>o(Zc(u),Zc(c),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=a[c]||o,g=h(e[c],t[c],c);C.isUndefined(g)&&h!==s||(n[c]=g)}),n}const w1=e=>{const t=zn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;t.headers=l=Fe.from(l),t.url=h1(x1(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let a;if(C.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((a=l.getContentType())!==!1){const[u,...c]=a?a.split(";").map(h=>h.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...c].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&C.isFunction(r)&&(r=r(t)),r||r!==!1&&A3(t.url))){const u=o&&i&&$3.read(i);u&&l.set(o,u)}return t},M3=typeof XMLHttpRequest<"u",F3=M3&&function(e){return new Promise(function(n,r){const o=w1(e);let i=o.data;const l=Fe.from(o.headers).normalize();let{responseType:s}=o,a;function u(){o.cancelToken&&o.cancelToken.unsubscribe(a),o.signal&&o.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function h(){if(!c)return;const x=Fe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};y1(function(m){n(m),u()},function(m){r(m),u()},w),c=null}"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new D("Request aborted",D.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new D("Network Error",D.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const w=o.transitional||m1;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new D(y,w.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,o,c)),c=null},i===void 0&&l.setContentType(null),"setRequestHeader"in c&&C.forEach(l.toJSON(),function(y,w){c.setRequestHeader(w,y)}),C.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),s&&s!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Ai(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ai(o.onUploadProgress)),(o.cancelToken||o.signal)&&(a=x=>{c&&(r(!x||x.type?new mr(null,e,c):x),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(a),o.signal&&(o.signal.aborted?a():o.signal.addEventListener("abort",a)));const g=L3(o.url);if(g&&pt.protocols.indexOf(g)===-1){r(new D("Unsupported protocol "+g+":",D.ERR_BAD_REQUEST,e));return}c.send(i||null)})},b3=(e,t)=>{let n=new AbortController,r;const o=function(a){if(!r){r=!0,l();const u=a instanceof Error?a:this.reason;n.abort(u instanceof D?u:new mr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new D(`timeout ${t} of ms exceeded`,D.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",o):a.unsubscribe(o))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=l,[s,()=>{i&&clearTimeout(i),i=null}]},B3=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},U3=async function*(e,t,n){for await(const r of e)yield*B3(ArrayBuffer.isView(r)?r:await n(String(r)),t)},ed=(e,t,n,r,o)=>{const i=U3(e,t,o);let l=0;return new ReadableStream({type:"bytes",async pull(s){const{done:a,value:u}=await i.next();if(a){s.close(),r();return}let c=u.byteLength;n&&n(l+=c),s.enqueue(new Uint8Array(u))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},td=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},al=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",S1=al&&typeof ReadableStream=="function",ra=al&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),H3=S1&&(()=>{let e=!1;const t=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),nd=64*1024,oa=S1&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),$i={stream:oa&&(e=>e.body)};al&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!$i[t]&&($i[t]=C.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new D(`Response type '${t}' is not supported`,D.ERR_NOT_SUPPORT,r)})})})(new Response);const V3=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(C.isArrayBufferView(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await ra(e)).byteLength},W3=async(e,t)=>{const n=C.toFiniteNumber(e.getContentLength());return n??V3(t)},Q3=al&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:l,onDownloadProgress:s,onUploadProgress:a,responseType:u,headers:c,withCredentials:h="same-origin",fetchOptions:g}=w1(e);u=u?(u+"").toLowerCase():"text";let[x,y]=o||i||l?b3([o,i],l):[],w,O;const m=()=>{!w&&setTimeout(()=>{x&&x.unsubscribe()}),w=!0};let d;try{if(a&&H3&&n!=="get"&&n!=="head"&&(d=await W3(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),E;C.isFormData(r)&&(E=_.headers.get("content-type"))&&c.setContentType(E),_.body&&(r=ed(_.body,nd,td(d,Ai(a)),null,ra))}C.isString(h)||(h=h?"cors":"omit"),O=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let p=await fetch(O);const S=oa&&(u==="stream"||u==="response");if(oa&&(s||S)){const _={};["status","statusText","headers"].forEach(N=>{_[N]=p[N]});const E=C.toFiniteNumber(p.headers.get("content-length"));p=new Response(ed(p.body,nd,s&&td(E,Ai(s,!0)),S&&m,ra),_)}u=u||"text";let T=await $i[C.findKey($i,u)||"text"](p,e);return!S&&m(),y&&y(),await new Promise((_,E)=>{y1(_,E,{data:T,headers:Fe.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:O})})}catch(p){throw m(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,e,O),{cause:p.cause||p}):D.from(p,p&&p.code,e,O)}}),ia={http:u3,xhr:F3,fetch:Q3};C.forEach(ia,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rd=e=>`- ${e}`,G3=e=>C.isFunction(e)||e===null||e===!1,C1={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let l;if(r=n,!G3(n)&&(r=ia[(l=String(n)).toLowerCase()],r===void 0))throw new D(`Unknown adapter '${l}'`);if(r)break;o[l||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,a])=>`adapter ${s} `+(a===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(rd).join(`
`):" "+rd(i[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:ia};function Kl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr(null,e)}function od(e){return Kl(e),e.headers=Fe.from(e.headers),e.data=Gl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),C1.getAdapter(e.adapter||ho.adapter)(e).then(function(r){return Kl(e),r.data=Gl.call(e,e.transformResponse,r),r.headers=Fe.from(r.headers),r},function(r){return v1(r)||(Kl(e),r&&r.response&&(r.response.data=Gl.call(e,e.transformResponse,r.response),r.response.headers=Fe.from(r.response.headers))),Promise.reject(r)})}const k1="1.7.2",fu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const id={};fu.transitional=function(t,n,r){function o(i,l){return"[Axios v"+k1+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,s)=>{if(t===!1)throw new D(o(l," has been removed"+(n?" in "+n:"")),D.ERR_DEPRECATED);return n&&!id[l]&&(id[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,s):!0}};function K3(e,t,n){if(typeof e!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const s=e[i],a=s===void 0||l(s,i,e);if(a!==!0)throw new D("option "+i+" must be "+a,D.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}}const la={assertOptions:K3,validators:fu},Ft=la.validators;class xn{constructor(t){this.defaults=t,this.interceptors={request:new qc,response:new qc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=zn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&la.assertOptions(r,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),o!=null&&(C.isFunction(o)?n.paramsSerializer={serialize:o}:la.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&C.merge(i.common,i[n.method]);i&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Fe.concat(l,i);const s=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,h=0,g;if(!a){const y=[od.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),g=y.length,c=Promise.resolve(n);h<g;)c=c.then(y[h++],y[h++]);return c}g=s.length;let x=n;for(h=0;h<g;){const y=s[h++],w=s[h++];try{x=y(x)}catch(O){w.call(this,O);break}}try{c=od.call(this,x)}catch(y){return Promise.reject(y)}for(h=0,g=u.length;h<g;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=zn(this.defaults,t);const n=x1(t.baseURL,t.url);return h1(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(n,r){return this.request(zn(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,s){return this.request(zn(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}xn.prototype[t]=n(),xn.prototype[t+"Form"]=n(!0)});class pu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{r.subscribe(s),i=s}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,s){r.reason||(r.reason=new mr(i,l,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pu(function(o){t=o}),cancel:t}}}function Y3(e){return function(n){return e.apply(null,n)}}function X3(e){return C.isObject(e)&&e.isAxiosError===!0}const sa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sa).forEach(([e,t])=>{sa[t]=e});function E1(e){const t=new xn(e),n=n1(xn.prototype.request,t);return C.extend(n,xn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return E1(zn(e,o))},n}const fe=E1(ho);fe.Axios=xn;fe.CanceledError=mr;fe.CancelToken=pu;fe.isCancel=v1;fe.VERSION=k1;fe.toFormData=sl;fe.AxiosError=D;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Y3;fe.isAxiosError=X3;fe.mergeConfig=zn;fe.AxiosHeaders=Fe;fe.formToJSON=e=>g1(C.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=C1.getAdapter;fe.HttpStatusCode=sa;fe.default=fe;const ur={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},q3=gt`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`,J3=k.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${q3} 2.5s infinite;
    }
`,Z3=gt`
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
`,e4=k.section`
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
`,t4=k.section`
    color: #e0e1ddff; /* platinum */
`,n4=k.div`
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
    animation: ${Z3} 2s linear infinite;
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
`;const r4=k.h2`
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
`,o4=k.p`
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
`,i4=k.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,l4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,s4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,a4=k.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`,Yl=k.a`
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
`,u4=k.div`
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
`,c4=k.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`,ld=k.input`
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
`,d4=k.textarea`
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
`,sd=k.button`
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
`,f4=gt`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`,p4=gt`
    from { width: 0; }
    to { width: 100%; }
`,h4=k.p`
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
            animation: ${f4} 0.3s ease forwards;
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
            animation: ${p4} 1s steps(20, end) forwards;
        }
    }
`,m4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:f.jsx("path",{fill:"#000",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),g4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 64 64",children:f.jsx("path",{fill:"#000",d:"M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"})}),v4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",children:f.jsx("path",{fill:"#000",d:"M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"})}),y4=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[o,i]=ee.useState({name:"",email:"",message:""}),l=u=>{const{name:c,value:h}=u.target;i(g=>({...g,[c]:h}))},s=async u=>{u.preventDefault(),t(!0);try{(await fe.post("https://api.web3forms.com/submit",{access_key:"8e4c1901-d8c1-4df8-aa46-700466520582",...o})).data.success?(r("Thank you for your message. We will get back to you soon."),i({name:"",email:"",message:""}),setTimeout(()=>r(""),5e3)):r("An error occurred. Please try again later.")}catch(c){console.error("Submission error:",c),r("An error occurred. Please try again later.")}t(!1)},a=()=>{window.location.href="mailto:lizdoragacharla@gmail.com"};return f.jsx(t4,{id:"connect",children:f.jsxs(e4,{children:[f.jsxs(u4,{children:[f.jsxs(c4,{onSubmit:s,children:[f.jsx(ld,{type:"text",name:"name",placeholder:"Your Name",value:o.name,onChange:l,required:!0}),f.jsx(ld,{type:"email",name:"email",placeholder:"Your Email",value:o.email,onChange:l,required:!0}),f.jsx(d4,{name:"message",placeholder:"Your Message",value:o.message,onChange:l,required:!0}),f.jsx(sd,{type:"submit",disabled:e,children:e?"Sending...":"Send Message"}),f.jsx(sd,{onClick:a,children:"Connect via Email"})]}),n&&f.jsxs(h4,{className:n.includes("Thank")?"success":"",children:[n.includes("Thank")&&f.jsx(I2,{}),n]})]}),f.jsxs(n4,{children:[f.jsx(J3,{role:"img","aria-label":"Wave emoji",children:"👋"}),f.jsx(r4,{children:"LET'S CONNECT"}),f.jsx(o4,{children:"I'm Lizy Doragacharla, a dedicated and detail-oriented Front-End Developer. Feel free to reach out to me for any job opportunities or collaborations. I'm excited to connect with you!"}),f.jsxs(i4,{children:[f.jsx(l4,{children:"lizydoragacharla@gmail.com"}),f.jsx(s4,{children:"+91 8106868075"}),f.jsxs(a4,{children:[f.jsx(Yl,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:f.jsx(m4,{})}),f.jsx(Yl,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(g4,{})}),f.jsx(Yl,{href:"https://wa.me/918106868075",target:"_blank",rel:"noopener noreferrer",children:f.jsx(v4,{})})]})]})]})]})})},j1=(()=>{const e={};return{on(t,n){e[t]||(e[t]=[]),e[t].push(n)},emit(t,n){e[t]&&e[t].forEach(r=>r(n))}}})(),ht={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},x4=gt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,w4=k.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${x4} 15s ease infinite;    
    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,S4=k.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,C4=k.div`
    @media (min-width: 769px) {
        display: none;
    }
`,Xl=k.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: ${ht.platinum};
    @media (max-width: 768px) {
        border-bottom: 1px solid ${ht.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,ql=k.h3`
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
`,Jl=k.div`
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
`,Zl=k.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    color: ${ht.platinum};
    background: ${ht.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,k4=()=>{const[e,t]=ee.useState(null),n=o=>{t(i=>i===o?null:o)},r=o=>{j1.emit("activateTab",o),document.getElementById("knowmore").scrollIntoView({behavior:"smooth"})};return f.jsxs(w4,{children:[f.jsxs(S4,{children:[f.jsxs(Xl,{children:[f.jsx(ql,{children:"My Details"}),f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsxs(Xl,{children:[f.jsx(ql,{children:"Topics"}),f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsxs(Xl,{children:[f.jsx(ql,{children:"Connect"}),f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Hc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Uc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Vc,{})," Let's Connect"]})]})]}),f.jsxs(C4,{children:[f.jsx(Jl,{isOpen:e==="details",onClick:()=>n("details"),children:"My Details"}),f.jsxs(Zl,{isOpen:e==="details",children:[f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsx(Jl,{isOpen:e==="topics",onClick:()=>n("topics"),children:"Topics"}),f.jsxs(Zl,{isOpen:e==="topics",children:[f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsx(Jl,{isOpen:e==="connect",onClick:()=>n("connect"),children:"Connect"}),f.jsxs(Zl,{isOpen:e==="connect",children:[f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Hc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Uc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Vc,{})," Let's Connect"]})]})]})]})},E4="/assets/python-CqUXyj7V.webp",j4="/assets/react-COzaG4-_.webp",_4="/assets/c--B70GCF6M.webp",z4="/assets/html-CAPMYXQG.webp",T4="/assets/css-CTU4a1FO.webp",P4="/assets/js-Cc8fTqTM.webp",N4="/assets/sql-BCEP8T1F.webp",L4="/assets/php-D_xiKIUL.webp",R4="/assets/aws-CKdeKC-u.webp",O4="/assets/jira-CRmYMftG.webp",oi={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},A4=k.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1dd;
`,$4=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,D4=k.div`
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
`,I4=k.div`
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
`,M4=k.img`
    width: 100px;
    height: 100px;
    border-radius: 10%;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-bottom: 0;
    }
`,F4=k.p`
    font-size: 1em;
    margin-top: 10px;
    color: ${oi.ghostWhite};
margin-bottom:0;
    @media (max-width: 480px) {
        margin: 10px;
        font-size: 0.9em;
    }
`,b4=[{id:1,image:E4,title:"Python"},{id:2,image:j4,title:"React"},{id:3,image:_4,title:"C"},{id:4,image:z4,title:"HTML"},{id:5,image:T4,title:"CSS"},{id:6,image:P4,title:"JS"},{id:7,image:N4,title:"SQL"},{id:8,image:L4,title:"PHP"},{id:9,image:R4,title:"AWS"},{id:10,image:O4,title:"Jira"}],ad=()=>f.jsxs(A4,{children:[f.jsx($4,{children:"Skills"}),f.jsx(D4,{children:b4.map(e=>f.jsxs(I4,{children:[f.jsx(M4,{src:e.image,alt:e.title}),f.jsx(F4,{children:e.title})]},e.id))})]}),B4="/assets/aws_certificate-Dtc7fppI.pdf",U4="/assets/python_certificate-CZ3k_n3F.pdf",H4="/assets/nptel_certificate-6YXWs-pj.pdf",V4="/assets/coursera_certificate-C5bS3mlL.pdf",W4={colors:{gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"}},Q4=k.div`
  padding: 50px 20px;
  color: ${({theme:e})=>e.colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,G4=k.h1`
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
`,K4=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,Y4=k.div`
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
`,X4=k.div`
  flex-grow: 1;
`,q4=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,J4=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,Z4=k.p`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,e6=k.div`
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
`,ud=k.a`
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
`,t6=[{id:"aws-certificate",title:"AWS - Cloud Foundations",date:"OCT-DEC 2022",description:"Completed a course on AWS Cloud Foundations, gaining knowledge in cloud computing and AWS services under the guidance of AWS Architect Aditya Sundar.",downloadLink:B4},{id:"python-certificate",title:"LinkedIn - Python for Everybody",date:"JAN-MAR 2023",description:"Gained a solid understanding of the fundamentals of Python programming through this course on LinkedIn.",downloadLink:U4},{id:"nptel-certificate",title:"NPTEL - Internet of Things",date:"JUL-OCT 2022",description:"Acquired a comprehensive understanding of IoT basics and sensor workings through the NPTEL course.",downloadLink:H4},{id:"coursera-certificate",title:"Coursera - Data Science",date:"FEB-APR 2022",description:"Focused on programming for Python within the Data Science domain, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",downloadLink:V4}],n6=()=>f.jsx(l2,{theme:W4,children:f.jsxs(Q4,{children:[f.jsx(G4,{children:"Certificates"}),f.jsx(K4,{children:t6.map(e=>f.jsxs(Y4,{children:[f.jsxs(X4,{children:[f.jsx(q4,{children:e.title}),f.jsxs(J4,{children:["Date: ",e.date]}),f.jsx(Z4,{children:e.description})]}),f.jsxs(e6,{children:[e.downloadLink&&f.jsx(ud,{as:"a",href:e.downloadLink,download:`${e.title.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),f.jsx(ud,{as:"a",href:e.downloadLink,target:e.downloadLink?"_blank":void 0,rel:e.downloadLink?"noopener noreferrer":void 0,children:"View"})]})]},e.id))})]})}),r6=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
`,o6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,i6=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,l6=k.div`
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
`,s6=k.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`,a6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,u6=k.div`
`,c6=k.div`
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
`;const d6=()=>{const[e,t]=ee.useState(0),n=[{title:"SSC",duration:"2017-2018",institution:"Keshava Reddy High School",details:"Achieved 9.5 GPA"},{title:"Intermediate (MPC)",duration:"2018-2020",institution:"Tirumala Junior College, Katheru",details:"Achieved 9.8 CGPA"},{title:"B.Tech (CSE)",duration:"2020-2024",institution:"Adikavi Nannaya University, Rajanagaram",details:"Achieved 9.1 CGPA"}];ee.useEffect(()=>{const o=setInterval(()=>{t(i=>(i+1)%n.length)},3e3);return()=>clearInterval(o)},[n.length]);const r=o=>{t(o)};return f.jsxs(r6,{children:[f.jsx(o6,{children:"Education Journey"}),f.jsx(i6,{children:n.map((o,i)=>f.jsxs(l6,{isActive:i===e,onClick:()=>r(i),children:[f.jsx(c6,{isActive:i===e,children:i+1}),f.jsxs(s6,{children:[f.jsx(a6,{children:o.title}),f.jsxs(u6,{children:[f.jsx("div",{children:o.duration}),f.jsx("div",{children:o.institution}),f.jsx("div",{children:o.details})]})]})]},i))})]})},He={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},f6=k.div`
  padding: 50px 20px;
  color: ${He.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,p6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,h6=k.div`
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
`,m6=k.div`
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
`,g6=k.div`
  flex-grow: 1;
`,v6=k.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,y6=k.h3`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`,x6=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,w6=k.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;
`,S6=k.ul`
  font-size: 1em;
  margin-top: 10px;
  padding-left: 20px;
`,C6=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,k6=k.span`
  background: linear-gradient(135deg, ${He.spaceCadet} 30%, ${He.delftBlue} 100%);
  color: ${He.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${He.ghostWhite};
`,E6=k.div`
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
`,cd=k.a`
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
`,j6=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:"path/to/mycCertificate",companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer (Intern)",duration:"Duration: 5 months",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.",responsibilities:["Developed responsive interfaces using React for frontend components.","Created essential components in React using Django Rest Framework.","Built and maintained entire websites using Wordpress.","Collaborated to implement new features and enhance existing ones."],skills:["React","Django Rest Framework","Wordpress"],certificateUrl:"path/to/arthashastraCertificate",companyUrl:"https://arthashastra.ai/"}];return f.jsxs(f6,{children:[f.jsx(p6,{children:"Experience"}),f.jsx(h6,{children:e.map((t,n)=>f.jsxs(m6,{children:[f.jsxs(g6,{children:[f.jsx(v6,{children:t.company}),f.jsx(y6,{children:t.role}),f.jsx(x6,{children:t.duration}),f.jsx(w6,{children:t.description}),f.jsx(S6,{children:t.responsibilities.map((r,o)=>f.jsx("li",{children:r},o))}),f.jsx(C6,{children:t.skills.map((r,o)=>f.jsx(k6,{children:r},o))})]}),f.jsxs(E6,{children:[f.jsx(cd,{href:t.certificateUrl,target:"_blank",children:"View Certificate"}),f.jsx(cd,{href:t.companyUrl,target:"_blank",children:"Visit Company"})]})]},n))})]})},_6="/assets/project1-DkKLZuDf.png",z6="/assets/project2-BrLQLyBu.png",Pt={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},T6=k.div`
  padding: 50px 20px;
  color: ${Pt.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,P6=k.h1`
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
`,N6=k.div`
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
`,L6=k.img`
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
`,O6=k.div`
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
`,dd=k.a`
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
`,A6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,$6=k.p`
  font-size: 1em;
  line-height: 1.6;
`,D6=[{title:"MERA SAHAI: Mera Sahai Platform",description:"Played a pivotal role as a web developer in the development of the Mera Sahai platform, successfully developing and delivering assigned modules, and taking full responsibility for their implementation.",demoLink:"/assets/mera_sahai_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:_6},{title:"DEHAZING OF MULTISPECTRAL REMOTE SENSING IMAGES",description:"Developed deep learning algorithms to enhance satellite images affected by haze, employing noise removal techniques and comparing their effectiveness with the Dark Object Subtraction method.",demoLink:"/assets/dehazing_project.pdf",codeLink:"https://github.com/my-portfolio",imageUrl:z6}],I6=()=>f.jsxs(T6,{children:[f.jsx(P6,{children:"Projects"}),f.jsx(N6,{children:D6.map((e,t)=>f.jsxs(_1,{children:[f.jsx(L6,{src:e.imageUrl,alt:e.title}),f.jsxs(R6,{children:[f.jsx(A6,{children:e.title}),f.jsx($6,{children:e.description}),f.jsxs(O6,{children:[e.demoLink&&f.jsx(dd,{href:e.demoLink,target:"_blank",children:"Demo"}),e.codeLink&&f.jsx(dd,{href:e.codeLink,target:"_blank",children:"Code"})]})]})]},t))})]}),Ht={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},M6=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,F6=k.div`
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
`,jr=k.button`
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
`,b6=ee.forwardRef((e,t)=>{const[n,r]=ee.useState("Skills");ee.useEffect(()=>{j1.on("activateTab",i=>{r(i)})},[]);const o=()=>{switch(n){case"Skills":return f.jsx(ad,{});case"Certificates":return f.jsx(n6,{});case"Education":return f.jsx(d6,{});case"Experience":return f.jsx(j6,{});case"Projects":return f.jsx(I6,{});default:return f.jsx(ad,{})}};return f.jsxs(M6,{id:"knowmore",children:[o(),f.jsxs(F6,{children:[f.jsxs(jr,{active:n==="Skills",onClick:()=>r("Skills"),children:[f.jsx(M2,{})," ",f.jsx("span",{children:"Skills"})]}),f.jsxs(jr,{active:n==="Certificates",onClick:()=>r("Certificates"),children:[f.jsx($2,{})," ",f.jsx("span",{children:"Certificates"})]}),f.jsxs(jr,{active:n==="Education",onClick:()=>r("Education"),children:[f.jsx(F2,{})," ",f.jsx("span",{children:"Education"})]}),f.jsxs(jr,{active:n==="Experience",onClick:()=>r("Experience"),children:[f.jsx(A2,{})," ",f.jsx("span",{children:"Experience"})]}),f.jsxs(jr,{active:n==="Projects",onClick:()=>r("Projects"),children:[f.jsx(B2,{})," ",f.jsx("span",{children:"Projects"})]})]})]})}),B6=k.div`
    font-family: Arial, sans-serif;
`;function U6(){return f.jsxs(B6,{children:[f.jsx(g2,{}),f.jsx(Eg,{}),f.jsx(b6,{}),f.jsx(y4,{}),f.jsx(k4,{})]})}es.createRoot(document.getElementById("root")).render(f.jsx(Pe.StrictMode,{children:f.jsx(U6,{})}));
