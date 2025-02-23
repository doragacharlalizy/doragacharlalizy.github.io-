(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var M1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},Do={},md={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),F1=Symbol.for("react.portal"),b1=Symbol.for("react.fragment"),$1=Symbol.for("react.strict_mode"),B1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),H1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),Q1=Symbol.for("react.memo"),Y1=Symbol.for("react.lazy"),yu=Symbol.iterator;function K1(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,yd={};function cr(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xd(){}xd.prototype=cr.prototype;function ua(e,t,n){this.props=e,this.context=t,this.refs=yd,this.updater=n||gd}var ca=ua.prototype=new xd;ca.constructor=ua;vd(ca,cr.prototype);ca.isPureReactComponent=!0;var xu=Array.isArray,wd=Object.prototype.hasOwnProperty,da={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)wd.call(t,r)&&!Sd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:li,type:e,key:o,ref:s,props:i,_owner:da.current}}function G1(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function X1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wu=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X1(""+e.key):t.toString(36)}function Mi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case li:case F1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+fs(s,0):r,xu(i)?(n="",e!=null&&(n=e.replace(wu,"$&/")+"/"),Mi(i,t,n,"",function(u){return u})):i!=null&&(fa(i)&&(i=G1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",xu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+fs(o,l);s+=Mi(o,t,n,a,i)}else if(a=K1(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+fs(o,l++),s+=Mi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gi(e,t,n){if(e==null)return e;var r=[],i=0;return Mi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function q1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Fi={transition:null},J1={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:da};function kd(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:gi,forEach:function(e,t,n){gi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gi(e,function(){t++}),t},toArray:function(e){return gi(e,function(t){return t})||[]},only:function(e){if(!fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=cr;B.Fragment=b1;B.Profiler=B1;B.PureComponent=ua;B.StrictMode=$1;B.Suspense=W1;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;B.act=kd;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=da.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)wd.call(t,a)&&!Sd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:H1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U1,_context:e},e.Consumer=e};B.createElement=Cd;B.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:V1,render:e}};B.isValidElement=fa;B.lazy=function(e){return{$$typeof:Y1,_payload:{_status:-1,_result:e},_init:q1}};B.memo=function(e,t){return{$$typeof:Q1,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};B.unstable_act=kd;B.useCallback=function(e,t){return Ne.current.useCallback(e,t)};B.useContext=function(e){return Ne.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ne.current.useEffect(e,t)};B.useId=function(){return Ne.current.useId()};B.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ne.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};B.useRef=function(e){return Ne.current.useRef(e)};B.useState=function(e){return Ne.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ne.current.useTransition()};B.version="18.3.1";md.exports=B;var ee=md.exports;const Ae=pd(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=ee,e0=Symbol.for("react.element"),t0=Symbol.for("react.fragment"),n0=Object.prototype.hasOwnProperty,r0=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)n0.call(t,r)&&!i0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:e0,type:e,key:o,ref:s,props:i,_owner:r0.current}}Do.Fragment=t0;Do.jsx=Ed;Do.jsxs=Ed;hd.exports=Do;var f=hd.exports,tl={},jd={exports:{}},Ge={},zd={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,_){var v=j.length;j.push(_);e:for(;0<v;){var Q=v-1>>>1,A=j[Q];if(0<i(A,_))j[Q]=_,j[v]=A,v=Q;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var _=j[0],v=j.pop();if(v!==_){j[0]=v;e:for(var Q=0,A=j.length,H=A>>>1;Q<H;){var G=2*(Q+1)-1,q=j[G],$=G+1,se=j[$];if(0>i(q,v))$<A&&0>i(se,q)?(j[Q]=se,j[$]=v,Q=$):(j[Q]=q,j[G]=v,Q=G);else if($<A&&0>i(se,v))j[Q]=se,j[$]=v,Q=$;else break e}}return _}function i(j,_){var v=j.sortIndex-_.sortIndex;return v!==0?v:j.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,h=null,g=3,x=!1,y=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=j)r(u),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(u)}}function S(j){if(w=!1,p(j),!y)if(n(a)!==null)y=!0,L(P);else{var _=n(u);_!==null&&D(S,_.startTime-j)}}function P(j,_){y=!1,w&&(w=!1,m(O),O=-1),x=!0;var v=g;try{for(p(_),h=n(a);h!==null&&(!(h.expirationTime>_)||j&&!Te());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,g=h.priorityLevel;var A=Q(h.expirationTime<=_);_=e.unstable_now(),typeof A=="function"?h.callback=A:h===n(a)&&r(a),p(_)}else r(a);h=n(a)}if(h!==null)var H=!0;else{var G=n(u);G!==null&&D(S,G.startTime-_),H=!1}return H}finally{h=null,g=v,x=!1}}var z=!1,E=null,O=-1,U=5,M=-1;function Te(){return!(e.unstable_now()-M<U)}function W(){if(E!==null){var j=e.unstable_now();M=j;var _=!0;try{_=E(!0,j)}finally{_?vt():(z=!1,E=null)}}else z=!1}var vt;if(typeof d=="function")vt=function(){d(W)};else if(typeof MessageChannel<"u"){var On=new MessageChannel,F=On.port2;On.port1.onmessage=W,vt=function(){F.postMessage(null)}}else vt=function(){R(W,0)};function L(j){E=j,z||(z=!0,vt())}function D(j,_){O=R(function(){j(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,L(P))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var v=g;g=_;try{return j()}finally{g=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,_){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var v=g;g=j;try{return _()}finally{g=v}},e.unstable_scheduleCallback=function(j,_,v){var Q=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?Q+v:Q):v=Q,j){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=v+A,j={id:c++,callback:_,priorityLevel:j,startTime:v,expirationTime:A,sortIndex:-1},v>Q?(j.sortIndex=v,t(u,j),n(a)===null&&j===n(u)&&(w?(m(O),O=-1):w=!0,D(S,v-Q))):(j.sortIndex=A,t(a,j),y||x||(y=!0,L(P))),j},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(j){var _=g;return function(){var v=g;g=_;try{return j.apply(this,arguments)}finally{g=v}}}})(Td);zd.exports=Td;var o0=zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=ee,Ke=o0;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pd=new Set,Br={};function Pn(e,t){Jn(e,t),Jn(e+"Capture",t)}function Jn(e,t){for(Br[e]=t,e=0;e<t.length;e++)Pd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Cu={};function a0(e){return nl.call(Cu,e)?!0:nl.call(Su,e)?!1:l0.test(e)?Cu[e]=!0:(Su[e]=!0,!1)}function u0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c0(e,t,n,r){if(t===null||typeof t>"u"||u0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pa,ha);we[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pa,ha);we[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pa,ha);we[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c0(t,n,i,r)&&(n=null),r||i===null?a0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Od=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Nd=Symbol.for("react.offscreen"),ku=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ps;function zr(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var hs=!1;function ms(e,t){if(!e||hs)return"";hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function d0(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Rn:return"Portal";case rl:return"Profiler";case ga:return"StrictMode";case il:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Od:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ya:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function f0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=p0(e))}function Rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ld(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function al(e,t){Ld(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Tr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function Dd(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h0=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){h0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function Fd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var m0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(m0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,Yn=null,Kn=null;function Pu(e){if(e=ci(e)){if(typeof ml!="function")throw Error(T(280));var t=e.stateNode;t&&(t=$o(t),ml(e.stateNode,e.type,t))}}function $d(e){Yn?Kn?Kn.push(e):Kn=[e]:Yn=e}function Bd(){if(Yn){var e=Yn,t=Kn;if(Kn=Yn=null,Pu(e),t)for(e=0;e<t.length;e++)Pu(t[e])}}function Ud(e,t){return e(t)}function Hd(){}var gs=!1;function Vd(e,t,n){if(gs)return e(t,n);gs=!0;try{return Ud(e,t,n)}finally{gs=!1,(Yn!==null||Kn!==null)&&(Hd(),Bd())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var gl=!1;if(_t)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){gl=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{gl=!1}function g0(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var _r=!1,io=null,oo=!1,vl=null,v0={onError:function(e){_r=!0,io=e}};function y0(e,t,n,r,i,o,s,l,a){_r=!1,io=null,g0.apply(v0,arguments)}function x0(e,t,n,r,i,o,s,l,a){if(y0.apply(this,arguments),_r){if(_r){var u=io;_r=!1,io=null}else throw Error(T(198));oo||(oo=!0,vl=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(An(e)!==e)throw Error(T(188))}function w0(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Au(i),e;if(o===r)return Au(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Qd(e){return e=w0(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var Kd=Ke.unstable_scheduleCallback,Ou=Ke.unstable_cancelCallback,S0=Ke.unstable_shouldYield,C0=Ke.unstable_requestPaint,ae=Ke.unstable_now,k0=Ke.unstable_getCurrentPriorityLevel,wa=Ke.unstable_ImmediatePriority,Gd=Ke.unstable_UserBlockingPriority,so=Ke.unstable_NormalPriority,E0=Ke.unstable_LowPriority,Xd=Ke.unstable_IdlePriority,Io=null,Ct=null;function j0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:P0,z0=Math.log,T0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(z0(e)/T0|0)|0}var wi=64,Si=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Pr(l):(o&=s,o!==0&&(r=Pr(o)))}else s=n&~i,s!==0?r=Pr(s):o!==0&&(r=Pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function A0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=A0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function N0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zd,Ca,ef,tf,nf,xl=!1,Ci=[],Kt=null,Gt=null,Xt=null,Vr=new Map,Wr=new Map,Vt=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R0(e,t,n,r,i){switch(t){case"focusin":return Kt=yr(Kt,e,t,n,r,i),!0;case"dragenter":return Gt=yr(Gt,e,t,n,r,i),!0;case"mouseover":return Xt=yr(Xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vr.set(o,yr(Vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wr.set(o,yr(Wr.get(o)||null,e,t,n,r,i)),!0}return!1}function rf(e){var t=dn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=Wd(n),t!==null){e.blockedOn=t,nf(e.priority,function(){ef(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=ci(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function _u(e,t,n){bi(e)&&n.delete(t)}function L0(){xl=!1,Kt!==null&&bi(Kt)&&(Kt=null),Gt!==null&&bi(Gt)&&(Gt=null),Xt!==null&&bi(Xt)&&(Xt=null),Vr.forEach(_u),Wr.forEach(_u)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,L0)))}function Qr(e){function t(i){return xr(i,e)}if(0<Ci.length){xr(Ci[0],e);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&xr(Kt,e),Gt!==null&&xr(Gt,e),Xt!==null&&xr(Xt,e),Vr.forEach(t),Wr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&Vt.shift()}var Gn=It.ReactCurrentBatchConfig,ao=!0;function D0(e,t,n,r){var i=K,o=Gn.transition;Gn.transition=null;try{K=1,ka(e,t,n,r)}finally{K=i,Gn.transition=o}}function I0(e,t,n,r){var i=K,o=Gn.transition;Gn.transition=null;try{K=4,ka(e,t,n,r)}finally{K=i,Gn.transition=o}}function ka(e,t,n,r){if(ao){var i=wl(e,t,n,r);if(i===null)Ts(e,t,r,uo,n),Nu(e,r);else if(R0(i,e,t,n,r))r.stopPropagation();else if(Nu(e,r),t&4&&-1<_0.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&Zd(o),o=wl(e,t,n,r),o===null&&Ts(e,t,r,uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var uo=null;function wl(e,t,n,r){if(uo=null,e=xa(r),e=dn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case wa:return 1;case Gd:return 4;case so:case E0:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var Qt=null,Ea=null,$i=null;function sf(){if($i)return $i;var e,t=Ea,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return $i=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Ru(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:Ru,this.isPropagationStopped=Ru,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=Xe(dr),ui=oe({},dr,{view:0,detail:0}),M0=Xe(ui),ys,xs,wr,Mo=oe({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(ys=e.screenX-wr.screenX,xs=e.screenY-wr.screenY):xs=ys=0,wr=e),ys)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),Lu=Xe(Mo),F0=oe({},Mo,{dataTransfer:0}),b0=Xe(F0),$0=oe({},ui,{relatedTarget:0}),ws=Xe($0),B0=oe({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=Xe(B0),H0=oe({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Xe(H0),W0=oe({},dr,{data:0}),Du=Xe(W0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function za(){return G0}var X0=oe({},ui,{key:function(e){if(e.key){var t=Q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),q0=Xe(X0),J0=oe({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Xe(J0),Z0=oe({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),eh=Xe(Z0),th=oe({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=Xe(th),rh=oe({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=Xe(rh),oh=[9,13,27,32],Ta=_t&&"CompositionEvent"in window,Rr=null;_t&&"documentMode"in document&&(Rr=document.documentMode);var sh=_t&&"TextEvent"in window&&!Rr,lf=_t&&(!Ta||Rr&&8<Rr&&11>=Rr),Mu=" ",Fu=!1;function af(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function lh(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(Fu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Fu?null:e;default:return null}}function ah(e,t){if(Dn)return e==="compositionend"||!Ta&&af(e,t)?(e=sf(),$i=Ea=Qt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function cf(e,t,n,r){$d(r),t=co(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Yr=null;function ch(e){Sf(e,0)}function Fo(e){var t=Fn(e);if(Rd(t))return e}function dh(e,t){if(e==="change")return t}var df=!1;if(_t){var Ss;if(_t){var Cs="oninput"in document;if(!Cs){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Cs=typeof $u.oninput=="function"}Ss=Cs}else Ss=!1;df=Ss&&(!document.documentMode||9<document.documentMode)}function Bu(){Lr&&(Lr.detachEvent("onpropertychange",ff),Yr=Lr=null)}function ff(e){if(e.propertyName==="value"&&Fo(Yr)){var t=[];cf(t,Yr,e,xa(e)),Vd(ch,t)}}function fh(e,t,n){e==="focusin"?(Bu(),Lr=t,Yr=n,Lr.attachEvent("onpropertychange",ff)):e==="focusout"&&Bu()}function ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Yr)}function hh(e,t){if(e==="click")return Fo(t)}function mh(e,t){if(e==="input"||e==="change")return Fo(t)}function gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:gh;function Kr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pf(n.ownerDocument.documentElement,n)){if(r!==null&&Pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Hu(n,o);var s=Hu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yh=_t&&"documentMode"in document&&11>=document.documentMode,In=null,Sl=null,Dr=null,Cl=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||In==null||In!==ro(r)||(r=In,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Kr(Dr,r)||(Dr=r,r=co(Sl,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},ks={},mf={};_t&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function bo(e){if(ks[e])return ks[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mf)return ks[e]=t[n];return e}var gf=bo("animationend"),vf=bo("animationiteration"),yf=bo("animationstart"),xf=bo("transitionend"),wf=new Map,Wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){wf.set(e,t),Pn(t,[e])}for(var Es=0;Es<Wu.length;Es++){var js=Wu[Es],xh=js.toLowerCase(),wh=js[0].toUpperCase()+js.slice(1);on(xh,"on"+wh)}on(gf,"onAnimationEnd");on(vf,"onAnimationIteration");on(yf,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(xf,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x0(r,t,void 0,e),e.currentTarget=null}function Sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Qu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Qu(i,l,u),o=a}}}if(oo)throw e=vl,oo=!1,vl=null,e}function J(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Cf(t,e,2,!1),n.add(r))}function zs(e,t,n){var r=0;t&&(r|=4),Cf(n,e,r,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[ji]){e[ji]=!0,Pd.forEach(function(n){n!=="selectionchange"&&(Sh.has(n)||zs(n,!1,e),zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,zs("selectionchange",!1,t))}}function Cf(e,t,n,r){switch(of(t)){case 1:var i=D0;break;case 4:i=I0;break;default:i=ka}n=i.bind(null,t,n,e),i=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=dn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Vd(function(){var u=o,c=xa(n),h=[];e:{var g=wf.get(e);if(g!==void 0){var x=ja,y=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":x=q0;break;case"focusin":y="focus",x=ws;break;case"focusout":y="blur",x=ws;break;case"beforeblur":case"afterblur":x=ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=eh;break;case gf:case vf:case yf:x=U0;break;case xf:x=nh;break;case"scroll":x=M0;break;case"wheel":x=ih;break;case"copy":case"cut":case"paste":x=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Iu}var w=(t&4)!==0,R=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,m!==null&&(S=Hr(d,m),S!=null&&w.push(Xr(d,S,p)))),R)break;d=d.return}0<w.length&&(g=new x(g,y,null,n,c),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==hl&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[Rt]))break e;if((x||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?dn(y):null,y!==null&&(R=An(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Lu,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Iu,S="onPointerLeave",m="onPointerEnter",d="pointer"),R=x==null?g:Fn(x),p=y==null?g:Fn(y),g=new w(S,d+"leave",x,n,c),g.target=R,g.relatedTarget=p,S=null,dn(c)===u&&(w=new w(m,d+"enter",y,n,c),w.target=p,w.relatedTarget=R,S=w),R=S,x&&y)t:{for(w=x,m=y,d=0,p=w;p;p=Nn(p))d++;for(p=0,S=m;S;S=Nn(S))p++;for(;0<d-p;)w=Nn(w),d--;for(;0<p-d;)m=Nn(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Nn(w),m=Nn(m)}w=null}else w=null;x!==null&&Yu(h,g,x,w,!1),y!==null&&R!==null&&Yu(h,R,y,w,!0)}}e:{if(g=u?Fn(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var P=dh;else if(bu(g))if(df)P=mh;else{P=ph;var z=fh}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=hh);if(P&&(P=P(e,u))){cf(h,P,n,c);break e}z&&z(e,g,u),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&ul(g,"number",g.value)}switch(z=u?Fn(u):window,e){case"focusin":(bu(z)||z.contentEditable==="true")&&(In=z,Sl=u,Dr=null);break;case"focusout":Dr=Sl=In=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Vu(h,n,c);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":Vu(h,n,c)}var E;if(Ta)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Dn?af(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(lf&&n.locale!=="ko"&&(Dn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Dn&&(E=sf()):(Qt=c,Ea="value"in Qt?Qt.value:Qt.textContent,Dn=!0)),z=co(u,O),0<z.length&&(O=new Du(O,e,null,n,c),h.push({event:O,listeners:z}),E?O.data=E:(E=uf(n),E!==null&&(O.data=E)))),(E=sh?lh(e,n):ah(e,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(c=new Du("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=E))}Sf(h,t)})}function Xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hr(e,n),o!=null&&r.unshift(Xr(e,o,i)),o=Hr(e,t),o!=null&&r.push(Xr(e,o,i))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hr(n,o),a!=null&&s.unshift(Xr(n,a,l))):i||(a=Hr(n,o),a!=null&&s.push(Xr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ch=/\r\n?/g,kh=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Ch,`
`).replace(kh,"")}function zi(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(T(425))}function fo(){}var kl=null,El=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(zh)}:zl;function zh(e){setTimeout(function(){throw e})}function Ps(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),St="__reactFiber$"+fr,qr="__reactProps$"+fr,Rt="__reactContainer$"+fr,Tl="__reactEvents$"+fr,Th="__reactListeners$"+fr,Ph="__reactHandles$"+fr;function dn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xu(e);e!==null;){if(n=e[St])return n;e=Xu(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[St]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function $o(e){return e[qr]||null}var Pl=[],bn=-1;function sn(e){return{current:e}}function te(e){0>bn||(e.current=Pl[bn],Pl[bn]=null,bn--)}function X(e,t){bn++,Pl[bn]=e.current,e.current=t}var rn={},ze=sn(rn),Ie=sn(!1),wn=rn;function Zn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function po(){te(Ie),te(ze)}function qu(e,t,n){if(ze.current!==rn)throw Error(T(168));X(ze,t),X(Ie,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,f0(e)||"Unknown",i));return oe({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,wn=ze.current,X(ze,e),X(Ie,Ie.current),!0}function Ju(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=kf(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,te(Ie),te(ze),X(ze,e)):te(Ie),X(Ie,n)}var Tt=null,Bo=!1,As=!1;function Ef(e){Tt===null?Tt=[e]:Tt.push(e)}function Ah(e){Bo=!0,Ef(e)}function ln(){if(!As&&Tt!==null){As=!0;var e=0,t=K;try{var n=Tt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Bo=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Kd(wa,ln),i}finally{K=t,As=!1}}return null}var $n=[],Bn=0,mo=null,go=0,Je=[],Ze=0,Sn=null,At=1,Ot="";function un(e,t){$n[Bn++]=go,$n[Bn++]=mo,mo=e,go=t}function jf(e,t,n){Je[Ze++]=At,Je[Ze++]=Ot,Je[Ze++]=Sn,Sn=e;var r=At;e=Ot;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,At=1<<32-ct(t)+i|n<<i|r,Ot=o+e}else At=1<<o|n<<i|r,Ot=e}function Aa(e){e.return!==null&&(un(e,1),jf(e,1,0))}function Oa(e){for(;e===mo;)mo=$n[--Bn],$n[Bn]=null,go=$n[--Bn],$n[Bn]=null;for(;e===Sn;)Sn=Je[--Ze],Je[Ze]=null,Ot=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null}var Ye=null,Ve=null,ne=!1,ut=null;function zf(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:At,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ve=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(ne){var t=Ve;if(t){var n=t;if(!Zu(e,t)){if(Al(e))throw Error(T(418));t=qt(n.nextSibling);var r=Ye;t&&Zu(e,t)?zf(r,n):(e.flags=e.flags&-4097|2,ne=!1,Ye=e)}}else{if(Al(e))throw Error(T(418));e.flags=e.flags&-4097|2,ne=!1,Ye=e}}}function ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Ti(e){if(e!==Ye)return!1;if(!ne)return ec(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=Ve)){if(Al(e))throw Tf(),Error(T(418));for(;t;)zf(e,t),t=qt(t.nextSibling)}if(ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ye?qt(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=Ve;e;)e=qt(e.nextSibling)}function er(){Ve=Ye=null,ne=!1}function Na(e){ut===null?ut=[e]:ut.push(e)}var Oh=It.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tc(e){var t=e._init;return t(e._payload)}function Pf(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=tn(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,p,S){return d===null||d.tag!==6?(d=Is(p,m.mode,S),d.return=m,d):(d=i(d,p),d.return=m,d)}function a(m,d,p,S){var P=p.type;return P===Ln?c(m,d,p.props.children,S,p.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bt&&tc(P)===d.type)?(S=i(d,p.props),S.ref=Sr(m,d,p),S.return=m,S):(S=Ki(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,S)}function u(m,d,p,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ms(p,m.mode,S),d.return=m,d):(d=i(d,p.children||[]),d.return=m,d)}function c(m,d,p,S,P){return d===null||d.tag!==7?(d=gn(p,m.mode,S,P),d.return=m,d):(d=i(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Is(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vi:return p=Ki(d.type,d.key,d.props,null,m.mode,p),p.ref=Sr(m,null,d),p.return=m,p;case Rn:return d=Ms(d,m.mode,p),d.return=m,d;case Bt:var S=d._init;return h(m,S(d._payload),p)}if(Tr(d)||gr(d))return d=gn(d,m.mode,p,null),d.return=m,d;Pi(m,d)}return null}function g(m,d,p,S){var P=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:l(m,d,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return p.key===P?a(m,d,p,S):null;case Rn:return p.key===P?u(m,d,p,S):null;case Bt:return P=p._init,g(m,d,P(p._payload),S)}if(Tr(p)||gr(p))return P!==null?null:c(m,d,p,S,null);Pi(m,p)}return null}function x(m,d,p,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(p)||null,l(d,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vi:return m=m.get(S.key===null?p:S.key)||null,a(d,m,S,P);case Rn:return m=m.get(S.key===null?p:S.key)||null,u(d,m,S,P);case Bt:var z=S._init;return x(m,d,p,z(S._payload),P)}if(Tr(S)||gr(S))return m=m.get(p)||null,c(d,m,S,P,null);Pi(d,S)}return null}function y(m,d,p,S){for(var P=null,z=null,E=d,O=d=0,U=null;E!==null&&O<p.length;O++){E.index>O?(U=E,E=null):U=E.sibling;var M=g(m,E,p[O],S);if(M===null){E===null&&(E=U);break}e&&E&&M.alternate===null&&t(m,E),d=o(M,d,O),z===null?P=M:z.sibling=M,z=M,E=U}if(O===p.length)return n(m,E),ne&&un(m,O),P;if(E===null){for(;O<p.length;O++)E=h(m,p[O],S),E!==null&&(d=o(E,d,O),z===null?P=E:z.sibling=E,z=E);return ne&&un(m,O),P}for(E=r(m,E);O<p.length;O++)U=x(E,m,O,p[O],S),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?O:U.key),d=o(U,d,O),z===null?P=U:z.sibling=U,z=U);return e&&E.forEach(function(Te){return t(m,Te)}),ne&&un(m,O),P}function w(m,d,p,S){var P=gr(p);if(typeof P!="function")throw Error(T(150));if(p=P.call(p),p==null)throw Error(T(151));for(var z=P=null,E=d,O=d=0,U=null,M=p.next();E!==null&&!M.done;O++,M=p.next()){E.index>O?(U=E,E=null):U=E.sibling;var Te=g(m,E,M.value,S);if(Te===null){E===null&&(E=U);break}e&&E&&Te.alternate===null&&t(m,E),d=o(Te,d,O),z===null?P=Te:z.sibling=Te,z=Te,E=U}if(M.done)return n(m,E),ne&&un(m,O),P;if(E===null){for(;!M.done;O++,M=p.next())M=h(m,M.value,S),M!==null&&(d=o(M,d,O),z===null?P=M:z.sibling=M,z=M);return ne&&un(m,O),P}for(E=r(m,E);!M.done;O++,M=p.next())M=x(E,m,O,M.value,S),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?O:M.key),d=o(M,d,O),z===null?P=M:z.sibling=M,z=M);return e&&E.forEach(function(W){return t(m,W)}),ne&&un(m,O),P}function R(m,d,p,S){if(typeof p=="object"&&p!==null&&p.type===Ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:e:{for(var P=p.key,z=d;z!==null;){if(z.key===P){if(P=p.type,P===Ln){if(z.tag===7){n(m,z.sibling),d=i(z,p.props.children),d.return=m,m=d;break e}}else if(z.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bt&&tc(P)===z.type){n(m,z.sibling),d=i(z,p.props),d.ref=Sr(m,z,p),d.return=m,m=d;break e}n(m,z);break}else t(m,z);z=z.sibling}p.type===Ln?(d=gn(p.props.children,m.mode,S,p.key),d.return=m,m=d):(S=Ki(p.type,p.key,p.props,null,m.mode,S),S.ref=Sr(m,d,p),S.return=m,m=S)}return s(m);case Rn:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=i(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Ms(p,m.mode,S),d.return=m,m=d}return s(m);case Bt:return z=p._init,R(m,d,z(p._payload),S)}if(Tr(p))return y(m,d,p,S);if(gr(p))return w(m,d,p,S);Pi(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,p),d.return=m,m=d):(n(m,d),d=Is(p,m.mode,S),d.return=m,m=d),s(m)):n(m,d)}return R}var tr=Pf(!0),Af=Pf(!1),vo=sn(null),yo=null,Un=null,_a=null;function Ra(){_a=Un=yo=null}function La(e){var t=vo.current;te(vo),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){yo=e,_a=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(yo===null)throw Error(T(308));Un=e,yo.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Da(e){fn===null?fn=[e]:fn.push(e)}function Of(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Da(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,Da(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function nc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xo(e,t,n,r){var i=e.updateQueue;Ut=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;s=0,c=u=a=null,l=o;do{var g=l.lane,x=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(g=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(x,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,h,g):y,g==null)break e;h=oe({},h,g);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,a=h):c=c.next=x,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=h}}function rc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var di={},kt=sn(di),Jr=sn(di),Zr=sn(di);function pn(e){if(e===di)throw Error(T(174));return e}function Ma(e,t){switch(X(Zr,t),X(Jr,e),X(kt,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}te(kt),X(kt,t)}function nr(){te(kt),te(Jr),te(Zr)}function _f(e){pn(Zr.current);var t=pn(kt.current),n=dl(t,e.type);t!==n&&(X(Jr,e),X(kt,n))}function Fa(e){Jr.current===e&&(te(kt),te(Jr))}var re=sn(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Os=[];function ba(){for(var e=0;e<Os.length;e++)Os[e]._workInProgressVersionPrimary=null;Os.length=0}var Hi=It.ReactCurrentDispatcher,Ns=It.ReactCurrentBatchConfig,Cn=0,ie=null,pe=null,me=null,So=!1,Ir=!1,ei=0,Nh=0;function Se(){throw Error(T(321))}function $a(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Ba(e,t,n,r,i,o){if(Cn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?Dh:Ih,e=n(r,i),Ir){o=0;do{if(Ir=!1,ei=0,25<=o)throw Error(T(301));o+=1,me=pe=null,t.updateQueue=null,Hi.current=Mh,e=n(r,i)}while(Ir)}if(Hi.current=Co,t=pe!==null&&pe.next!==null,Cn=0,me=pe=ie=null,So=!1,t)throw Error(T(300));return e}function Ua(){var e=ei!==0;return ei=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function it(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(T(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function ti(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=it(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((Cn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,s=r):a=a.next=h,ie.lanes|=c,kn|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,mt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rs(e){var t=it(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);mt(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rf(){}function Lf(e,t){var n=ie,r=it(),i=t(),o=!mt(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,Ha(Mf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ni(9,If.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(T(349));Cn&30||Df(n,t,i)}return i}function Df(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function If(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&bf(e)}function Mf(e,t,n){return n(function(){Ff(t)&&bf(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function bf(e){var t=Lt(e,1);t!==null&&dt(t,e,1,-1)}function ic(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Lh.bind(null,ie,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $f(){return it().memoizedState}function Vi(e,t,n,r){var i=xt();ie.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function Uo(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(pe!==null){var s=pe.memoizedState;if(o=s.destroy,r!==null&&$a(r,s.deps)){i.memoizedState=ni(t,n,o,r);return}}ie.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function oc(e,t){return Vi(8390656,8,e,t)}function Ha(e,t){return Uo(2048,8,e,t)}function Bf(e,t){return Uo(4,2,e,t)}function Uf(e,t){return Uo(4,4,e,t)}function Hf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4,4,Hf.bind(null,t,e),n)}function Va(){}function Wf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$a(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$a(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yf(e,t,n){return Cn&21?(mt(n,t)||(n=qd(),ie.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function _h(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ns.transition;Ns.transition={};try{e(!1),t()}finally{K=n,Ns.transition=r}}function Kf(){return it().memoizedState}function Rh(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gf(e))Xf(t,n);else if(n=Of(e,t,n,r),n!==null){var i=Oe();dt(n,e,r,i),qf(n,t,r)}}function Lh(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gf(e))Xf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,mt(l,s)){var a=t.interleaved;a===null?(i.next=i,Da(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Of(e,t,i,r),n!==null&&(i=Oe(),dt(n,e,r,i),qf(n,t,r))}}function Gf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Xf(e,t){Ir=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Co={readContext:rt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Dh={readContext:rt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,Hf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rh.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Va,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=_h.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=xt();if(ne){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ve===null)throw Error(T(349));Cn&30||Df(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,oc(Mf.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,If.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=ve.identifierPrefix;if(ne){var n=Ot,r=At;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ih={readContext:rt,useCallback:Wf,useContext:rt,useEffect:Ha,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Qf,useReducer:_s,useRef:$f,useState:function(){return _s(ti)},useDebugValue:Va,useDeferredValue:function(e){var t=it();return Yf(t,pe.memoizedState,e)},useTransition:function(){var e=_s(ti)[0],t=it().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Lf,useId:Kf,unstable_isNewReconciler:!1},Mh={readContext:rt,useCallback:Wf,useContext:rt,useEffect:Ha,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:Uf,useMemo:Qf,useReducer:Rs,useRef:$f,useState:function(){return Rs(ti)},useDebugValue:Va,useDeferredValue:function(e){var t=it();return pe===null?t.memoizedState=e:Yf(t,pe.memoizedState,e)},useTransition:function(){var e=Rs(ti)[0],t=it().memoizedState;return[e,t]},useMutableSource:Rf,useSyncExternalStore:Lf,useId:Kf,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=en(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(dt(t,e,i,r),Ui(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=en(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(dt(t,e,i,r),Ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=en(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(dt(t,e,r,n),Ui(t,e,r))}};function sc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function Jf(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=Me(t)?wn:ze.current,r=t.contextTypes,o=(r=r!=null)?Zn(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ia(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=Me(t)?wn:ze.current,i.context=Zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ho.enqueueReplaceState(i,i.state,null),xo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rr(e,t){try{var n="",r=t;do n+=d0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fh=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Eo||(Eo=!0,Vl=r),Ll(e,t)},n}function ep(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ll(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ll(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jh.bind(null,e,t,n),t.then(e,e))}function uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var bh=It.ReactCurrentOwner,De=!1;function Pe(e,t,n,r){t.child=e===null?Af(t,null,n,r):tr(t,e.child,n,r)}function dc(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=Ba(e,t,n,r,o,i),n=Ua(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ne&&n&&Aa(t),t.flags|=1,Pe(e,t,r,i),t.child)}function fc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ja(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tp(e,t,o,r,i)):(e=Ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(s,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function tp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Dl(e,t,n,r,i)}function np(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Vn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(Vn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(Vn,Ue),Ue|=r;return Pe(e,t,i,n),t.child}function rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,i){var o=Me(n)?wn:ze.current;return o=Zn(t,o),Xn(t,i),n=Ba(e,t,n,r,o,i),r=Ua(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ne&&r&&Aa(t),t.flags|=1,Pe(e,t,n,i),t.child)}function pc(e,t,n,r,i){if(Me(n)){var o=!0;ho(t)}else o=!1;if(Xn(t,i),t.stateNode===null)Wi(e,t),Jf(t,n,r),Rl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Me(n)?wn:ze.current,u=Zn(t,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&lc(t,s,r,u),Ut=!1;var g=t.memoizedState;s.state=g,xo(t,r,s,i),a=t.memoizedState,l!==r||g!==a||Ie.current||Ut?(typeof c=="function"&&(_l(t,n,c,r),a=t.memoizedState),(l=Ut||sc(t,n,l,r,g,a,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Nf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:lt(t.type,l),s.props=u,h=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=Me(n)?wn:ze.current,a=Zn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||g!==a)&&lc(t,s,r,a),Ut=!1,g=t.memoizedState,s.state=g,xo(t,r,s,i);var y=t.memoizedState;l!==h||g!==y||Ie.current||Ut?(typeof x=="function"&&(_l(t,n,x,r),y=t.memoizedState),(u=Ut||sc(t,n,u,r,g,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,i)}function Il(e,t,n,r,i,o){rp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ju(t,n,!1),Dt(e,t,o);r=t.stateNode,bh.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=tr(t,e.child,null,o),t.child=tr(t,null,l,o)):Pe(e,t,l,o),t.memoizedState=r.state,i&&Ju(t,n,!0),t.child}function ip(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),Ma(e,t.containerInfo)}function hc(e,t,n,r,i){return er(),Na(i),t.flags|=256,Pe(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qo(s,r,0,null),e=gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fl(n),t.memoizedState=Ml,e):Wa(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $h(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=tn(l,o):(o=gn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Fl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return o=e.child,e=o.sibling,r=tn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wa(e,t){return t=Qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&Na(r),tr(t,e.child,null,n),e=Wa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $h(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ls(Error(T(422))),Ai(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qo({mode:"visible",children:r.children},i,0,null),o=gn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&tr(t,e.child,null,s),t.child.memoizedState=Fl(s),t.memoizedState=Ml,o);if(!(t.mode&1))return Ai(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(T(419)),r=Ls(o,r,void 0),Ai(e,t,s,r)}if(l=(s&e.childLanes)!==0,De||l){if(r=ve,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Lt(e,i),dt(r,e,i,-1))}return qa(),r=Ls(Error(T(421))),Ai(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=qt(i.nextSibling),Ye=t,ne=!0,ut=null,e!==null&&(Je[Ze++]=At,Je[Ze++]=Ot,Je[Ze++]=Sn,At=e.id,Ot=e.overflow,Sn=t),t=Wa(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nl(e.return,t,n)}function Ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,o);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bh(e,t,n){switch(t.tag){case 3:ip(t),er();break;case 5:_f(t);break;case 1:Me(t.type)&&ho(t);break;case 4:Ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?op(e,t,n):(X(re,re.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,np(e,t,n)}return Dt(e,t,n)}var lp,bl,ap,up;lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};ap=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pn(kt.current);var o=null;switch(n){case"input":i=ll(e,i),r=ll(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=cl(e,i),r=cl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}fl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};up=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uh(e,t,n){var r=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Me(t.type)&&po(),Ce(t),null;case 3:return r=t.stateNode,nr(),te(Ie),te(ze),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Yl(ut),ut=null))),bl(e,t),Ce(t),null;case 5:Fa(t);var i=pn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)ap(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ce(t),null}if(e=pn(kt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[qr]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)J(Ar[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Eu(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":zu(r,o),J("invalid",r)}fl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):Br.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&J("scroll",r)}switch(n){case"input":yi(r),ju(r,o,!0);break;case"textarea":yi(r),Tu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[qr]=r,lp(e,t,!1,!1),t.stateNode=e;e:{switch(s=pl(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)J(Ar[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Eu(e,r),i=ll(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",e);break;case"textarea":zu(e,r),i=cl(e,r),J("invalid",e);break;default:i=r}fl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?bd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Md(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ur(e,a):typeof a=="number"&&Ur(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Br.hasOwnProperty(o)?a!=null&&o==="onScroll"&&J("scroll",e):a!=null&&ma(e,o,a,s))}switch(n){case"input":yi(e),ju(e,r,!1);break;case"textarea":yi(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)up(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=pn(Zr.current),pn(kt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ce(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&t.mode&1&&!(t.flags&128))Tf(),er(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[St]=t}else er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else ut!==null&&(Yl(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?he===0&&(he=3):qa())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return nr(),bl(e,t),e===null&&Gr(t.stateNode.containerInfo),Ce(t),null;case 10:return La(t.type._context),Ce(t),null;case 17:return Me(t.type)&&po(),Ce(t),null;case 19:if(te(re),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Cr(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=wo(e),s!==null){for(t.flags|=128,Cr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>ir&&(t.flags|=128,r=!0,Cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=wo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return Ce(t),null}else 2*ae()-o.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Cr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Hh(e,t){switch(Oa(t),t.tag){case 1:return Me(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nr(),te(Ie),te(ze),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return nr(),null;case 10:return La(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var Oi=!1,Ee=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){le(e,t,r)}}var gc=!1;function Wh(e,t){if(kl=ao,e=hf(),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(a=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++c===r&&(a=s),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},ao=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,R=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:lt(t.type,w),R);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(S){le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=gc,gc=!1,y}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$l(t,n,o)}i=i.next}while(i!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cp(e){var t=e.alternate;t!==null&&(e.alternate=null,cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[qr],delete t[Tl],delete t[Th],delete t[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dp(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var ye=null,at=!1;function Ft(e,t,n){for(n=n.child;n!==null;)fp(e,t,n),n=n.sibling}function fp(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:Ee||Hn(n,t);case 6:var r=ye,i=at;ye=null,Ft(e,t,n),ye=r,at=i,ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(at?(e=ye,n=n.stateNode,e.nodeType===8?Ps(e.parentNode,n):e.nodeType===1&&Ps(e,n),Qr(e)):Ps(ye,n.stateNode));break;case 4:r=ye,i=at,ye=n.stateNode.containerInfo,at=!0,Ft(e,t,n),ye=r,at=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$l(n,t,s),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!Ee&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ft(e,t,n),Ee=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vh),t.forEach(function(r){var i=em.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,at=!1;break e;case 3:ye=l.stateNode.containerInfo,at=!0;break e;case 4:ye=l.stateNode.containerInfo,at=!0;break e}l=l.return}if(ye===null)throw Error(T(160));fp(o,s,i),ye=null,at=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pp(t,e),t=t.sibling}function pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),yt(e),r&4){try{Mr(3,e,e.return),Vo(3,e)}catch(w){le(e,e.return,w)}try{Mr(5,e,e.return)}catch(w){le(e,e.return,w)}}break;case 1:st(t,e),yt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(st(t,e),yt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var i=e.stateNode;try{Ur(i,"")}catch(w){le(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ld(i,o),pl(l,s);var u=pl(l,o);for(s=0;s<a.length;s+=2){var c=a[s],h=a[s+1];c==="style"?bd(i,h):c==="dangerouslySetInnerHTML"?Md(i,h):c==="children"?Ur(i,h):ma(i,c,h,u)}switch(l){case"input":al(i,o);break;case"textarea":Dd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Qn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Qn(i,!!o.multiple,o.defaultValue,!0):Qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(w){le(e,e.return,w)}}break;case 6:if(st(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){le(e,e.return,w)}}break;case 3:if(st(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(w){le(e,e.return,w)}break;case 4:st(t,e),yt(e);break;case 13:st(t,e),yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ka=ae())),r&4&&yc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,st(t,e),Ee=u):st(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(h=N=c;N!==null;){switch(g=N,x=g.child,g.tag){case 0:case 11:case 14:case 15:Mr(4,g,g.return);break;case 1:Hn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:Hn(g,g.return);break;case 22:if(g.memoizedState!==null){wc(h);continue}}x!==null?(x.return=g,N=x):wc(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Fd("display",s))}catch(w){le(e,e.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){le(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:st(t,e),yt(e),r&4&&yc(e);break;case 21:break;default:st(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ur(i,""),r.flags&=-33);var o=vc(e);Hl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=vc(e);Ul(e,l,s);break;default:throw Error(T(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){N=e,hp(e)}function hp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Oi;var u=Ee;if(Oi=s,(Ee=a)&&!u)for(N=i;N!==null;)s=N,a=s.child,s.tag===22&&s.memoizedState!==null?Sc(i):a!==null?(a.return=s,N=a):Sc(i);for(;o!==null;)N=o,hp(o),o=o.sibling;N=i,Oi=l,Ee=u}xc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):xc(e)}}function xc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ee||t.flags&512&&Bl(t)}catch(g){le(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function wc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Sc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){le(t,i,a)}}var o=t.return;try{Bl(t)}catch(a){le(t,o,a)}break;case 5:var s=t.return;try{Bl(t)}catch(a){le(t,s,a)}}}catch(a){le(t,t.return,a)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var Yh=Math.ceil,ko=It.ReactCurrentDispatcher,Qa=It.ReactCurrentOwner,tt=It.ReactCurrentBatchConfig,V=0,ve=null,de=null,xe=0,Ue=0,Vn=sn(0),he=0,ri=null,kn=0,Wo=0,Ya=0,Fr=null,Le=null,Ka=0,ir=1/0,jt=null,Eo=!1,Vl=null,Zt=null,Ni=!1,Yt=null,jo=0,br=0,Wl=null,Qi=-1,Yi=0;function Oe(){return V&6?ae():Qi!==-1?Qi:Qi=ae()}function en(e){return e.mode&1?V&2&&xe!==0?xe&-xe:Oh.transition!==null?(Yi===0&&(Yi=qd()),Yi):(e=K,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function dt(e,t,n,r){if(50<br)throw br=0,Wl=null,Error(T(185));ai(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(Wo|=n),he===4&&Wt(e,xe)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(ir=ae()+500,Bo&&ln()))}function Fe(e,t){var n=e.callbackNode;O0(e,t);var r=lo(e,e===ve?xe:0);if(r===0)n!==null&&Ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ou(n),t===1)e.tag===0?Ah(Cc.bind(null,e)):Ef(Cc.bind(null,e)),jh(function(){!(V&6)&&ln()}),n=null;else{switch(Jd(r)){case 1:n=wa;break;case 4:n=Gd;break;case 16:n=so;break;case 536870912:n=Xd;break;default:n=so}n=Cp(n,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mp(e,t){if(Qi=-1,Yi=0,V&6)throw Error(T(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=lo(e,e===ve?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zo(e,r);else{t=r;var i=V;V|=2;var o=vp();(ve!==e||xe!==t)&&(jt=null,ir=ae()+500,mn(e,t));do try{Xh();break}catch(l){gp(e,l)}while(!0);Ra(),ko.current=o,V=i,de!==null?t=0:(ve=null,xe=0,t=he)}if(t!==0){if(t===2&&(i=yl(e),i!==0&&(r=i,t=Ql(e,i))),t===1)throw n=ri,mn(e,0),Wt(e,r),Fe(e,ae()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kh(i)&&(t=zo(e,r),t===2&&(o=yl(e),o!==0&&(r=o,t=Ql(e,o))),t===1))throw n=ri,mn(e,0),Wt(e,r),Fe(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:cn(e,Le,jt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Ka+500-ae(),10<t)){if(lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zl(cn.bind(null,e,Le,jt),t);break}cn(e,Le,jt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yh(r/1960))-r,10<r){e.timeoutHandle=zl(cn.bind(null,e,Le,jt),r);break}cn(e,Le,jt);break;case 5:cn(e,Le,jt);break;default:throw Error(T(329))}}}return Fe(e,ae()),e.callbackNode===n?mp.bind(null,e):null}function Ql(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=zo(e,t),e!==2&&(t=Le,Le=n,t!==null&&Yl(t)),e}function Yl(e){Le===null?Le=e:Le.push.apply(Le,e)}function Kh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Ya,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(V&6)throw Error(T(327));qn();var t=lo(e,0);if(!(t&1))return Fe(e,ae()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=ri,mn(e,0),Wt(e,t),Fe(e,ae()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Le,jt),Fe(e,ae()),null}function Ga(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ir=ae()+500,Bo&&ln())}}function En(e){Yt!==null&&Yt.tag===0&&!(V&6)&&qn();var t=V;V|=1;var n=tt.transition,r=K;try{if(tt.transition=null,K=1,e)return e()}finally{K=r,tt.transition=n,V=t,!(V&6)&&ln()}}function Xa(){Ue=Vn.current,te(Vn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:nr(),te(Ie),te(ze),ba();break;case 5:Fa(r);break;case 4:nr();break;case 13:te(re);break;case 19:te(re);break;case 10:La(r.type._context);break;case 22:case 23:Xa()}n=n.return}if(ve=e,de=e=tn(e.current,null),xe=Ue=t,he=0,ri=null,Ya=Wo=kn=0,Le=Fr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fn=null}return e}function gp(e,t){do{var n=de;try{if(Ra(),Hi.current=Co,So){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}So=!1}if(Cn=0,me=pe=ie=null,Ir=!1,ei=0,Qa.current=null,n===null||n.return===null){he=1,ri=t,de=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=xe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=uc(s);if(x!==null){x.flags&=-257,cc(x,s,l,o,t),x.mode&1&&ac(o,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){ac(o,u,t),qa();break e}a=Error(T(426))}}else if(ne&&l.mode&1){var R=uc(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),cc(R,s,l,o,t),Na(rr(a,l));break e}}o=a=rr(a,l),he!==4&&(he=2),Fr===null?Fr=[o]:Fr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Zf(o,a,t);nc(o,m);break e;case 1:l=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zt===null||!Zt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=ep(o,l,t);nc(o,S);break e}}o=o.return}while(o!==null)}xp(n)}catch(P){t=P,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function vp(){var e=ko.current;return ko.current=Co,e===null?Co:e}function qa(){(he===0||he===3||he===2)&&(he=4),ve===null||!(kn&268435455)&&!(Wo&268435455)||Wt(ve,xe)}function zo(e,t){var n=V;V|=2;var r=vp();(ve!==e||xe!==t)&&(jt=null,mn(e,t));do try{Gh();break}catch(i){gp(e,i)}while(!0);if(Ra(),V=n,ko.current=r,de!==null)throw Error(T(261));return ve=null,xe=0,he}function Gh(){for(;de!==null;)yp(de)}function Xh(){for(;de!==null&&!S0();)yp(de)}function yp(e){var t=Sp(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?xp(e):de=t,Qa.current=null}function xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hh(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=Uh(n,t,Ue),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=K,i=tt.transition;try{tt.transition=null,K=1,qh(e,t,n,r)}finally{tt.transition=i,K=r}return null}function qh(e,t,n,r){do qn();while(Yt!==null);if(V&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(N0(e,o),e===ve&&(de=ve=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,Cp(so,function(){return qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=K;K=1;var l=V;V|=4,Qa.current=null,Wh(e,n),pp(n,e),vh(El),ao=!!kl,El=kl=null,e.current=n,Qh(n),C0(),V=l,K=s,tt.transition=o}else e.current=n;if(Ni&&(Ni=!1,Yt=e,jo=i),o=e.pendingLanes,o===0&&(Zt=null),j0(n.stateNode),Fe(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,e=Vl,Vl=null,e;return jo&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Wl?br++:(br=0,Wl=e):br=0,ln(),null}function qn(){if(Yt!==null){var e=Jd(jo),t=tt.transition,n=K;try{if(tt.transition=null,K=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,jo=0,V&6)throw Error(T(331));var i=V;for(V|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Mr(8,c,o)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var g=c.sibling,x=c.return;if(cp(c),c===u){N=null;break}if(g!==null){g.return=x,N=g;break}N=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){s=N;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,N=p;else e:for(s=d;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vo(9,l)}}catch(P){le(l,l.return,P)}if(l===s){N=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,N=S;break e}N=l.return}}if(V=i,ln(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{K=n,tt.transition=t}}return!1}function kc(e,t,n){t=rr(n,t),t=Zf(e,t,1),e=Jt(e,t,1),t=Oe(),e!==null&&(ai(e,1,t),Fe(e,t))}function le(e,t,n){if(e.tag===3)kc(e,e,n);else for(;t!==null;){if(t.tag===3){kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=rr(n,e),e=ep(t,e,1),t=Jt(t,e,1),e=Oe(),t!==null&&(ai(t,1,e),Fe(t,e));break}}t=t.return}}function Jh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(xe&n)===n&&(he===4||he===3&&(xe&130023424)===xe&&500>ae()-Ka?mn(e,0):Ya|=n),Fe(e,t)}function wp(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=Oe();e=Lt(e,t),e!==null&&(ai(e,t,n),Fe(e,n))}function Zh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wp(e,n)}function em(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),wp(e,n)}var Sp;Sp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Bh(e,t,n);De=!!(e.flags&131072)}else De=!1,ne&&t.flags&1048576&&jf(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wi(e,t),e=t.pendingProps;var i=Zn(t,ze.current);Xn(t,n),i=Ba(null,t,r,e,i,n);var o=Ua();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,ho(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ia(t),i.updater=Ho,t.stateNode=i,i._reactInternals=t,Rl(t,r,e,n),t=Il(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&Aa(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nm(r),e=lt(r,e),i){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=pc(null,t,r,e,n);break e;case 11:t=dc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,lt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),pc(e,t,r,i,n);case 3:e:{if(ip(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Nf(e,t),xo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=rr(Error(T(423)),t),t=hc(e,t,r,n,i);break e}else if(r!==i){i=rr(Error(T(424)),t),t=hc(e,t,r,n,i);break e}else for(Ve=qt(t.stateNode.containerInfo.firstChild),Ye=t,ne=!0,ut=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===i){t=Dt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return _f(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,jl(r,i)?s=null:o!==null&&jl(r,o)&&(t.flags|=32),rp(e,t),Pe(e,t,s,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return op(e,t,n);case 4:return Ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),dc(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,X(vo,r._currentValue),r._currentValue=s,o!==null)if(mt(o.value,s)){if(o.children===i.children&&!Ie.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=rt(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),fc(e,t,r,i,n);case 15:return tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Wi(e,t),t.tag=1,Me(r)?(e=!0,ho(t)):e=!1,Xn(t,n),Jf(t,r,i),Rl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return sp(e,t,n);case 22:return np(e,t,n)}throw Error(T(156,t.tag))};function Cp(e,t){return Kd(e,t)}function tm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new tm(e,t,n,r)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nm(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===ya)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ki(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ja(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ln:return gn(n.children,i,o,t);case ga:s=8,i|=8;break;case rl:return e=et(12,n,t,i|2),e.elementType=rl,e.lanes=o,e;case il:return e=et(13,n,t,i),e.elementType=il,e.lanes=o,e;case ol:return e=et(19,n,t,i),e.elementType=ol,e.lanes=o,e;case Nd:return Qo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:s=10;break e;case Od:s=9;break e;case va:s=11;break e;case ya:s=14;break e;case Bt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Qo(e,t,n,r){return e=et(22,e,r,t),e.elementType=Nd,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vs(0),this.expirationTimes=vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Za(e,t,n,r,i,o,s,l,a){return e=new rm(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(o),e}function im(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kp(e){if(!e)return rn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Me(n))return kf(e,n,t)}return t}function Ep(e,t,n,r,i,o,s,l,a){return e=Za(n,r,!0,e,i,o,s,l,a),e.context=kp(null),n=e.current,r=Oe(),i=en(n),o=Nt(r,i),o.callback=t??null,Jt(n,o,i),e.current.lanes=i,ai(e,i,r),Fe(e,r),e}function Yo(e,t,n,r){var i=t.current,o=Oe(),s=en(i);return n=kp(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,s),e!==null&&(dt(e,i,s,o),Ui(e,i,s)),s}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){Ec(e,t),(e=e.alternate)&&Ec(e,t)}function om(){return null}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}Ko.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Yo(e,t,null,null)};Ko.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Yo(null,e,null,null)}),t[Rt]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&rf(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function sm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=To(s);o.call(u)}}var s=Ep(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=s,e[Rt]=s.current,Gr(e.nodeType===8?e.parentNode:e),En(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=To(a);l.call(u)}}var a=Za(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=a,e[Rt]=a.current,Gr(e.nodeType===8?e.parentNode:e),En(function(){Yo(t,a,n,r)}),a}function Xo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=To(s);l.call(a)}}Yo(t,s,e,i)}else s=sm(n,t,e,i,r);return To(s)}Zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(Sa(t,n|1),Fe(t,ae()),!(V&6)&&(ir=ae()+500,ln()))}break;case 13:En(function(){var r=Lt(e,1);if(r!==null){var i=Oe();dt(r,e,1,i)}}),eu(e,1)}};Ca=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Oe();dt(t,e,134217728,n)}eu(e,134217728)}};ef=function(e){if(e.tag===13){var t=en(e),n=Lt(e,t);if(n!==null){var r=Oe();dt(n,e,t,r)}eu(e,t)}};tf=function(){return K};nf=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};ml=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(T(90));Rd(r),al(r,i)}}}break;case"textarea":Dd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Ud=Ga;Hd=En;var lm={usingClientEntryPoint:!1,Events:[ci,Fn,$o,$d,Bd,Ga]},kr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},am={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Io=_i.inject(am),Ct=_i}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(T(200));return im(e,t,null,n)};Ge.createRoot=function(e,t){if(!nu(e))throw Error(T(299));var n=!1,r="",i=jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Za(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new tu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Qd(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return En(e)};Ge.hydrate=function(e,t,n){if(!Go(t))throw Error(T(200));return Xo(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ep(t,null,e,1,n??null,i,!1,o,s),e[Rt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ko(t)};Ge.render=function(e,t,n){if(!Go(t))throw Error(T(200));return Xo(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Go(e))throw Error(T(40));return e._reactRootContainer?(En(function(){Xo(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Ga;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Xo(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zp)}catch(e){console.error(e)}}zp(),jd.exports=Ge;var um=jd.exports,zc=um;tl.createRoot=zc.createRoot,tl.hydrateRoot=zc.hydrateRoot;var je=function(){return je=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},je.apply(this,arguments)};function ii(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",$r="-moz-",Y="-webkit-",Tp="comm",qo="rule",ru="decl",cm="@import",Pp="@keyframes",dm="@layer",Ap=Math.abs,iu=String.fromCharCode,Kl=Object.assign;function fm(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function Op(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function Gi(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function or(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function Np(e){return e.length}function Or(e,t){return t.push(e),e}function pm(e,t){return e.map(t).join("")}function Tc(e,t){return e.filter(function(n){return!zt(n,t)})}var Jo=1,sr=1,_p=0,ot=0,ce=0,pr="";function Zo(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Jo,column:sr,length:s,return:"",siblings:l}}function $t(e,t){return Kl(Zo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _n(e){for(;e.root;)e=$t(e.root,{children:[e]});Or(e,e.siblings)}function hm(){return ce}function mm(){return ce=ot>0?ge(pr,--ot):0,sr--,ce===10&&(sr=1,Jo--),ce}function ft(){return ce=ot<_p?ge(pr,ot++):0,sr++,ce===10&&(sr=1,Jo++),ce}function vn(){return ge(pr,ot)}function Xi(){return ot}function es(e,t){return or(pr,e,t)}function Gl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gm(e){return Jo=sr=1,_p=wt(pr=e),ot=0,[]}function vm(e){return pr="",e}function Fs(e){return Op(es(ot-1,Xl(e===91?e+2:e===40?e+1:e)))}function ym(e){for(;(ce=vn())&&ce<33;)ft();return Gl(e)>2||Gl(ce)>3?"":" "}function xm(e,t){for(;--t&&ft()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return es(e,Xi()+(t<6&&vn()==32&&ft()==32))}function Xl(e){for(;ft();)switch(ce){case e:return ot;case 34:case 39:e!==34&&e!==39&&Xl(ce);break;case 40:e===41&&Xl(e);break;case 92:ft();break}return ot}function wm(e,t){for(;ft()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+es(t,ot-1)+"*"+iu(e===47?e:ft())}function Sm(e){for(;!Gl(vn());)ft();return es(e,ot)}function Cm(e){return vm(qi("",null,null,null,[""],e=gm(e),0,[0],e))}function qi(e,t,n,r,i,o,s,l,a){for(var u=0,c=0,h=s,g=0,x=0,y=0,w=1,R=1,m=1,d=0,p="",S=i,P=o,z=r,E=p;R;)switch(y=d,d=ft()){case 40:if(y!=108&&ge(E,h-1)==58){Gi(E+=b(Fs(d),"&","&\f"),"&\f",Ap(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Fs(d);break;case 9:case 10:case 13:case 32:E+=ym(y);break;case 92:E+=xm(Xi()-1,7);continue;case 47:switch(vn()){case 42:case 47:Or(km(wm(ft(),Xi()),t,n,a),a);break;default:E+="/"}break;case 123*w:l[u++]=wt(E)*m;case 125*w:case 59:case 0:switch(d){case 0:case 125:R=0;case 59+c:m==-1&&(E=b(E,/\f/g,"")),x>0&&wt(E)-h&&Or(x>32?Ac(E+";",r,n,h-1,a):Ac(b(E," ","")+";",r,n,h-2,a),a);break;case 59:E+=";";default:if(Or(z=Pc(E,t,n,u,c,i,l,p,S=[],P=[],h,o),o),d===123)if(c===0)qi(E,t,z,z,S,o,h,l,P);else switch(g===99&&ge(E,3)===110?100:g){case 100:case 108:case 109:case 115:qi(e,z,z,r&&Or(Pc(e,z,z,0,0,i,l,p,i,S=[],h,P),P),i,P,h,l,r?S:P);break;default:qi(E,z,z,z,[""],P,0,l,P)}}u=c=x=0,w=m=1,p=E="",h=s;break;case 58:h=1+wt(E),x=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&mm()==125)continue}switch(E+=iu(d),d*w){case 38:m=c>0?1:(E+="\f",-1);break;case 44:l[u++]=(wt(E)-1)*m,m=1;break;case 64:vn()===45&&(E+=Fs(ft())),g=vn(),c=h=wt(p=E+=Sm(Xi())),d++;break;case 45:y===45&&wt(E)==2&&(w=0)}}return o}function Pc(e,t,n,r,i,o,s,l,a,u,c,h){for(var g=i-1,x=i===0?o:[""],y=Np(x),w=0,R=0,m=0;w<r;++w)for(var d=0,p=or(e,g+1,g=Ap(R=s[w])),S=e;d<y;++d)(S=Op(R>0?x[d]+" "+p:b(p,/&\f/g,x[d])))&&(a[m++]=S);return Zo(e,t,n,i===0?qo:l,a,u,c,h)}function km(e,t,n,r){return Zo(e,t,n,Tp,iu(hm()),or(e,2,-2),0,r)}function Ac(e,t,n,r,i){return Zo(e,t,n,ru,or(e,0,r),or(e,r+1,-1),r,i)}function Rp(e,t,n){switch(fm(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 4789:return $r+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+$r+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return Y+e+Z+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Z+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Z+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Y+e+Z+e+e;case 6165:return Y+e+Z+"flex-"+e+e;case 5187:return Y+e+b(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return Y+e+Z+"flex-item-"+b(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":Z+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return Y+e+Z+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return Y+e+Z+b(e,"shrink","negative")+e;case 5292:return Y+e+Z+b(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+b(e,"-grow","")+Y+e+Z+b(e,"grow","positive")+e;case 4554:return Y+b(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4200:if(!zt(e,/flex-|baseline/))return Z+"grid-column-align"+or(e,t)+e;break;case 2592:case 3360:return Z+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zt(r.props,/grid-\w+-end/)})?~Gi(e+(n=n[t].value),"span",0)?e:Z+b(e,"-start","")+e+Z+"grid-row-span:"+(~Gi(n,"span",0)?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":Z+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:Z+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+$r+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch",0)?Rp(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,u){return Z+i+":"+o+u+(s?Z+i+"-span:"+(l?a:+a-+o)+u:"")+e});case 4949:if(ge(e,t+6)===121)return b(e,":",":"+Y)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Y+(ge(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Z+"$2box$3")+e;case 100:return b(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function Po(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Em(e,t,n,r){switch(e.type){case dm:if(e.children.length)break;case cm:case ru:return e.return=e.return||e.value;case Tp:return"";case Pp:return e.return=e.value+"{"+Po(e.children,r)+"}";case qo:if(!wt(e.value=e.props.join(",")))return""}return wt(n=Po(e.children,r))?e.return=e.value+"{"+n+"}":""}function jm(e){var t=Np(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function zm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ru:e.return=Rp(e.value,e.length,n);return;case Pp:return Po([$t(e,{value:b(e.value,"@","@"+Y)})],r);case qo:if(e.length)return pm(n=e.props,function(i){switch(zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_n($t(e,{props:[b(i,/:(read-\w+)/,":"+$r+"$1")]})),_n($t(e,{props:[i]})),Kl(e,{props:Tc(n,r)});break;case"::placeholder":_n($t(e,{props:[b(i,/:(plac\w+)/,":"+Y+"input-$1")]})),_n($t(e,{props:[b(i,/:(plac\w+)/,":"+$r+"$1")]})),_n($t(e,{props:[b(i,/:(plac\w+)/,Z+"input-$1")]})),_n($t(e,{props:[i]})),Kl(e,{props:Tc(n,r)});break}return""})}}var Pm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},lr=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",Lp="active",Dp="data-styled-version",ts="6.1.11",ou=`/*!sc*/
`,su=typeof window<"u"&&"HTMLElement"in window,Am=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),ns=Object.freeze([]),ar=Object.freeze({});function Om(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var Ip=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_m=/(^-|-$)/g;function Oc(e){return e.replace(Nm,"-").replace(_m,"")}var Rm=/(a)(d)/gi,Ri=52,Nc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ql(e){var t,n="";for(t=Math.abs(e);t>Ri;t=t/Ri|0)n=Nc(t%Ri)+n;return(Nc(t%Ri)+n).replace(Rm,"$1-$2")}var bs,Mp=5381,Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fp=function(e){return Wn(Mp,e)};function bp(e){return ql(Fp(e)>>>0)}function Lm(e){return e.displayName||e.name||"Component"}function $s(e){return typeof e=="string"&&!0}var $p=typeof Symbol=="function"&&Symbol.for,Bp=$p?Symbol.for("react.memo"):60115,Dm=$p?Symbol.for("react.forward_ref"):60112,Im={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Up={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fm=((bs={})[Dm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bs[Bp]=Up,bs);function _c(e){return("type"in(t=e)&&t.type.$$typeof)===Bp?Up:"$$typeof"in e?Fm[e.$$typeof]:Im;var t}var bm=Object.defineProperty,$m=Object.getOwnPropertyNames,Rc=Object.getOwnPropertySymbols,Bm=Object.getOwnPropertyDescriptor,Um=Object.getPrototypeOf,Lc=Object.prototype;function Hp(e,t,n){if(typeof t!="string"){if(Lc){var r=Um(t);r&&r!==Lc&&Hp(e,r,n)}var i=$m(t);Rc&&(i=i.concat(Rc(t)));for(var o=_c(e),s=_c(t),l=0;l<i.length;++l){var a=i[l];if(!(a in Mm||n&&n[a]||s&&a in s||o&&a in o)){var u=Bm(t,a);try{bm(e,a,u)}catch{}}}}return e}function jn(e){return typeof e=="function"}function lu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Zl(e,t,n){if(n===void 0&&(n=!1),!n&&!oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Zl(e[r],t[r]);else if(oi(t))for(var r in t)e[r]=Zl(e[r],t[r]);return e}function au(e,t){Object.defineProperty(e,"toString",{value:t})}function zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw zn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(ou);return n},e}(),Ji=new Map,Ao=new Map,Zi=1,Li=function(e){if(Ji.has(e))return Ji.get(e);for(;Ao.has(Zi);)Zi++;var t=Zi++;return Ji.set(e,t),Ao.set(t,e),t},Vm=function(e,t){Zi=t+1,Ji.set(e,t),Ao.set(t,e)},Wm="style[".concat(lr,"][").concat(Dp,'="').concat(ts,'"]'),Qm=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ym=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Km=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ou),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(Qm);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Vm(c,u),Ym(e,c,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function Gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(lr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(lr,Lp),r.setAttribute(Dp,ts);var s=Gm();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Xm=function(){function e(t){this.element=Vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw zn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),qm=function(){function e(t){this.element=Vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dc=su,Zm={isServer:!su,useCSSOMInjection:!Am},Wp=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var i=this;this.options=je(je({},Zm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&su&&Dc&&(Dc=!1,function(o){for(var s=document.querySelectorAll(Wm),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(lr)!==Lp&&(Km(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),au(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",u=function(h){var g=function(m){return Ao.get(m)}(h);if(g===void 0)return"continue";var x=o.names.get(g),y=s.getGroup(h);if(x===void 0||y.length===0)return"continue";var w="".concat(lr,".g").concat(h,'[id="').concat(g,'"]'),R="";x!==void 0&&x.forEach(function(m){m.length>0&&(R+="".concat(m,","))}),a+="".concat(y).concat(w,'{content:"').concat(R,'"}').concat(ou)},c=0;c<l;c++)u(c);return a}(i)})}return e.registerId=function(t){return Li(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Jm(i):r?new Xm(i):new qm(i)}(this.options),new Hm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Li(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Li(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Li(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e2=/&/g,t2=/^\s*\/\/.*$/gm;function Qp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qp(n.children,t)),n})}function n2(e){var t,n,r,i=ar,o=i.options,s=o===void 0?ar:o,l=i.plugins,a=l===void 0?ns:l,u=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===qo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(e2,n).replace(r,u))}),s.prefix&&c.push(Tm),c.push(Em);var h=function(g,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(t2,""),m=Cm(y||x?"".concat(y," ").concat(x," { ").concat(R," }"):R);s.namespace&&(m=Qp(m,s.namespace));var d=[];return Po(m,jm(c.concat(zm(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,x){return x.name||zn(15),Wn(g,x.name)},Mp).toString():"",h}var r2=new Wp,ea=n2(),Yp=Ae.createContext({shouldForwardProp:void 0,styleSheet:r2,stylis:ea});Yp.Consumer;Ae.createContext(void 0);function Ic(){return ee.useContext(Yp)}var Kp=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ea);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,au(this,function(){throw zn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ea),this.name+t.hash},e}(),i2=function(e){return e>="A"&&e<="Z"};function Mc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;i2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gp=function(e){return e==null||e===!1||e===""},Xp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Gp(o)&&(Array.isArray(o)&&o.isCss||jn(o)?r.push("".concat(Mc(i),":"),o,";"):oi(o)?r.push.apply(r,ii(ii(["".concat(i," {")],Xp(o),!1),["}"],!1)):r.push("".concat(Mc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Pm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(Gp(e))return[];if(lu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var o;return e instanceof Kp?n?(e.inject(n,r),[e.getName(r)]):[e]:oi(e)?Xp(e):Array.isArray(e)?Array.prototype.concat.apply(ns,e.map(function(s){return yn(s,t,n,r)})):[e.toString()]}function o2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!lu(n))return!1}return!0}var s2=Fp(ts),l2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o2(t),this.componentId=n,this.baseHash=Wn(s2,n),this.baseStyle=r,Wp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=hn(i,this.staticRulesId);else{var o=Jl(yn(this.rules,t,n,r)),s=ql(Wn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=hn(i,s),this.staticRulesId=s}else{for(var a=Wn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var g=Jl(yn(h,t,n,r));a=Wn(a,g+c),u+=g}}if(u){var x=ql(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=hn(i,x)}}return i},e}(),Oo=Ae.createContext(void 0);Oo.Consumer;function a2(e){var t=Ae.useContext(Oo),n=ee.useMemo(function(){return function(r,i){if(!r)throw zn(14);if(jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw zn(8);return i?je(je({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ae.createElement(Oo.Provider,{value:n},e.children):null}var Bs={};function u2(e,t,n){var r=lu(e),i=e,o=!$s(e),s=t.attrs,l=s===void 0?ns:s,a=t.componentId,u=a===void 0?function(S,P){var z=typeof S!="string"?"sc":Oc(S);Bs[z]=(Bs[z]||0)+1;var E="".concat(z,"-").concat(bp(ts+z+Bs[z]));return P?"".concat(P,"-").concat(E):E}(t.displayName,t.parentComponentId):a,c=t.displayName,h=c===void 0?function(S){return $s(S)?"styled.".concat(S):"Styled(".concat(Lm(S),")")}(e):c,g=t.displayName&&t.componentId?"".concat(Oc(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;y=function(S,P){return w(S,P)&&R(S,P)}}else y=w}var m=new l2(n,g,r?i.componentStyle:void 0);function d(S,P){return function(z,E,O){var U=z.attrs,M=z.componentStyle,Te=z.defaultProps,W=z.foldedComponentIds,vt=z.styledComponentId,On=z.target,F=Ae.useContext(Oo),L=Ic(),D=z.shouldForwardProp||L.shouldForwardProp,j=Om(E,F,Te)||ar,_=function(q,$,se){for(var qe,$e=je(je({},$),{className:void 0,theme:se}),Et=0;Et<q.length;Et+=1){var an=jn(qe=q[Et])?qe($e):qe;for(var Re in an)$e[Re]=Re==="className"?hn($e[Re],an[Re]):Re==="style"?je(je({},$e[Re]),an[Re]):an[Re]}return $.className&&($e.className=hn($e.className,$.className)),$e}(U,E,j),v=_.as||On,Q={};for(var A in _)_[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&_.theme===j||(A==="forwardedAs"?Q.as=_.forwardedAs:D&&!D(A,v)||(Q[A]=_[A]));var H=function(q,$){var se=Ic(),qe=q.generateAndInjectStyles($,se.styleSheet,se.stylis);return qe}(M,_),G=hn(W,vt);return H&&(G+=" "+H),_.className&&(G+=" "+_.className),Q[$s(v)&&!Ip.has(v)?"class":"className"]=G,Q.ref=O,ee.createElement(v,Q)}(p,S,P)}d.displayName=h;var p=Ae.forwardRef(d);return p.attrs=x,p.componentStyle=m,p.displayName=h,p.shouldForwardProp=y,p.foldedComponentIds=r?hn(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(P){for(var z=[],E=1;E<arguments.length;E++)z[E-1]=arguments[E];for(var O=0,U=z;O<U.length;O++)Zl(P,U[O],!0);return P}({},i.defaultProps,S):S}}),au(p,function(){return".".concat(p.styledComponentId)}),o&&Hp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Fc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var bc=function(e){return Object.assign(e,{isCss:!0})};function qp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||oi(e))return bc(yn(Fc(ns,ii([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):bc(yn(Fc(r,t)))}function ta(e,t,n){if(n===void 0&&(n=ar),!t)throw zn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,qp.apply(void 0,ii([i],o,!1)))};return r.attrs=function(i){return ta(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ta(e,t,je(je({},n),i))},r}var Jp=function(e){return ta(u2,e)},k=Jp;Ip.forEach(function(e){k[e]=Jp(e)});function Mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jl(qp.apply(void 0,ii([e],t,!1))),i=bp(r);return new Kp(i,r)}const Zp="/assets/93490002587-BWiVPz5Y.png",c2="/assets/doragacharla_lizy3-CXU4pxRz.jpg",We={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},d2=k.div`
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
`,f2=k.div`
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
`,p2=k.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`,Us=k.div`
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
`,h2=k.div`
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
`,m2=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 2px solid ${We.ghostWhite};

  @media (min-width: 769px) {
    display: none;
  }
`,g2=k.div`
  background-image: url(${c2});
  background-size: cover;
  background-position: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`,v2=k.div`
  color: ${We.ghostWhite};
  font-size: 20px;
  font-family: 'Orbitron', sans-serif;
`,Di=k.a`
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
`,y2=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[i,o]=ee.useState(!1);ee.useEffect(()=>{const l=()=>{const a=window.scrollY;t(a>50);const u=["home","aboutme","knowmore","skills","projects","connect"],c=a;u.forEach(h=>{const g=document.getElementById(h);g&&g.offsetTop<=c+50&&r(h)})};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const s=l=>{const a=document.getElementById(l);a&&a.scrollIntoView({behavior:"smooth"}),o(!1)};return f.jsxs(d2,{scrolled:e,children:[f.jsx(f2,{scrolled:e}),f.jsxs(p2,{onClick:()=>o(!i),children:[f.jsx(Us,{open:i}),f.jsx(Us,{open:i}),f.jsx(Us,{open:i})]}),f.jsxs(h2,{open:i,children:[f.jsxs(m2,{children:[f.jsx(g2,{}),f.jsx(v2,{children:"Doragacharla Lizy"})]}),f.jsx(Di,{className:n==="home"?"active":"",onClick:()=>s("home"),children:"Home"}),f.jsx(Di,{className:n==="aboutme"?"active":"",onClick:()=>s("aboutme"),children:"About me"}),f.jsx(Di,{className:n==="knowmore"?"active":"",onClick:()=>s("knowmore"),children:"Know More"}),f.jsx(Di,{className:n==="connect"?"active":"",onClick:()=>s("connect"),children:"Connect"})]})]})};var e1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$c=Ae.createContext&&Ae.createContext(e1),x2=["attr","size","title"];function w2(e,t){if(e==null)return{};var n=S2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function S2(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}function Bc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bc(Object(n),!0).forEach(function(r){C2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C2(e,t,n){return t=k2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k2(e){var t=E2(e,"string");return typeof t=="symbol"?t:t+""}function E2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function t1(e){return e&&e.map((t,n)=>Ae.createElement(t.tag,_o({key:n},t.attr),t1(t.child)))}function ue(e){return t=>Ae.createElement(j2,No({attr:_o({},e.attr)},t),t1(e.child))}function j2(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=w2(e,x2),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ae.createElement("svg",No({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:_o(_o({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Ae.createElement("title",null,o),e.children)};return $c!==void 0?Ae.createElement($c.Consumer,null,n=>t(n)):t(e1)}function z2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"},child:[]}]})(e)}function T2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function P2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function A2(e){return ue({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"},child:[]}]})(e)}function O2(e){return ue({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"},child:[]}]})(e)}function N2(e){return ue({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 4h8c0.143 0 0.281 0.031 0.409 0.088l-4.409 5.143-4.409-5.143c0.127-0.058 0.266-0.088 0.409-0.088zM3 11v-6c0-0.021 0.001-0.042 0.002-0.063l2.932 3.421-2.9 2.9c-0.023-0.083-0.034-0.17-0.034-0.258zM12 12h-8c-0.088 0-0.175-0.012-0.258-0.034l2.846-2.846 1.413 1.648 1.413-1.648 2.846 2.846c-0.083 0.023-0.17 0.034-0.258 0.034zM13 11c0 0.088-0.012 0.175-0.034 0.258l-2.9-2.9 2.932-3.421c0.001 0.021 0.002 0.042 0.002 0.063v6z"},child:[]}]})(e)}var n1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:M1,()=>(()=>{var n={75:function(s){(function(){var l,a,u,c,h,g;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(l()-h)/1e6},a=process.hrtime,c=(l=function(){var x;return 1e9*(x=a())[0]+x[1]})(),g=1e9*process.uptime(),h=c-g):Date.now?(s.exports=function(){return Date.now()-u},u=Date.now()):(s.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(s,l,a)=>{for(var u=a(75),c=typeof window>"u"?a.g:window,h=["moz","webkit"],g="AnimationFrame",x=c["request"+g],y=c["cancel"+g]||c["cancelRequest"+g],w=0;!x&&w<h.length;w++)x=c[h[w]+"Request"+g],y=c[h[w]+"Cancel"+g]||c[h[w]+"CancelRequest"+g];if(!x||!y){var R=0,m=0,d=[];x=function(p){if(d.length===0){var S=u(),P=Math.max(0,16.666666666666668-(S-R));R=P+S,setTimeout(function(){var z=d.slice(0);d.length=0;for(var E=0;E<z.length;E++)if(!z[E].cancelled)try{z[E].callback(R)}catch(O){setTimeout(function(){throw O},0)}},Math.round(P))}return d.push({handle:++m,callback:p,cancelled:!1}),m},y=function(p){for(var S=0;S<d.length;S++)d[S].handle===p&&(d[S].cancelled=!0)}}s.exports=function(p){return x.call(c,p)},s.exports.cancel=function(){y.apply(c,arguments)},s.exports.polyfill=function(p){p||(p=c),p.requestAnimationFrame=x,p.cancelAnimationFrame=y}}},r={};function i(s){var l=r[s];if(l!==void 0)return l.exports;var a=r[s]={exports:{}};return n[s].call(a.exports,a,a.exports,i),a.exports}i.n=s=>{var l=s&&s.__esModule?()=>s.default:()=>s;return i.d(l,{a:l}),l},i.d=(s,l)=>{for(var a in l)i.o(l,a)&&!i.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:l[a]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l);var o={};return(()=>{i.d(o,{default:()=>On});var s=i(4087),l=i.n(s);const a=function(F){return new RegExp(/<[a-z][\s\S]*>/i).test(F)},u=function(F,L){return Math.floor(Math.random()*(L-F+1))+F};var c="TYPE_CHARACTER",h="REMOVE_CHARACTER",g="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",y="PAUSE_FOR",w="CALL_FUNCTION",R="ADD_HTML_TAG_ELEMENT",m="CHANGE_DELETE_SPEED",d="CHANGE_DELAY",p="CHANGE_CURSOR",S="PASTE_STRING",P="HTML_TAG";function z(F){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},z(F)}function E(F,L){var D=Object.keys(F);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(F);L&&(j=j.filter(function(_){return Object.getOwnPropertyDescriptor(F,_).enumerable})),D.push.apply(D,j)}return D}function O(F){for(var L=1;L<arguments.length;L++){var D=arguments[L]!=null?arguments[L]:{};L%2?E(Object(D),!0).forEach(function(j){W(F,j,D[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(D)):E(Object(D)).forEach(function(j){Object.defineProperty(F,j,Object.getOwnPropertyDescriptor(D,j))})}return F}function U(F){return function(L){if(Array.isArray(L))return M(L)}(F)||function(L){if(typeof Symbol<"u"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}(F)||function(L,D){if(L){if(typeof L=="string")return M(L,D);var j=Object.prototype.toString.call(L).slice(8,-1);return j==="Object"&&L.constructor&&(j=L.constructor.name),j==="Map"||j==="Set"?Array.from(L):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?M(L,D):void 0}}(F)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M(F,L){(L==null||L>F.length)&&(L=F.length);for(var D=0,j=new Array(L);D<L;D++)j[D]=F[D];return j}function Te(F,L){for(var D=0;D<L.length;D++){var j=L[D];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(F,vt(j.key),j)}}function W(F,L,D){return(L=vt(L))in F?Object.defineProperty(F,L,{value:D,enumerable:!0,configurable:!0,writable:!0}):F[L]=D,F}function vt(F){var L=function(D,j){if(z(D)!=="object"||D===null)return D;var _=D[Symbol.toPrimitive];if(_!==void 0){var v=_.call(D,"string");if(z(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(D)}(F);return z(L)==="symbol"?L:String(L)}const On=function(){function F(j,_){var v=this;if(function(A,H){if(!(A instanceof H))throw new TypeError("Cannot call a class as a function")}(this,F),W(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),W(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),W(this,"setupWrapperElement",function(){v.state.elements.container&&(v.state.elements.wrapper.className=v.options.wrapperClassName,v.state.elements.cursor.className=v.options.cursorClassName,v.state.elements.cursor.innerHTML=v.options.cursor,v.state.elements.container.innerHTML="",v.state.elements.container.appendChild(v.state.elements.wrapper),v.state.elements.container.appendChild(v.state.elements.cursor))}),W(this,"start",function(){return v.state.eventLoopPaused=!1,v.runEventLoop(),v}),W(this,"pause",function(){return v.state.eventLoopPaused=!0,v}),W(this,"stop",function(){return v.state.eventLoop&&((0,s.cancel)(v.state.eventLoop),v.state.eventLoop=null),v}),W(this,"pauseFor",function(A){return v.addEventToQueue(y,{ms:A}),v}),W(this,"typeOutAllStrings",function(){return typeof v.options.strings=="string"?(v.typeString(v.options.strings).pauseFor(v.options.pauseFor),v):(v.options.strings.forEach(function(A){v.typeString(A).pauseFor(v.options.pauseFor).deleteAll(v.options.deleteSpeed)}),v)}),W(this,"typeString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(A))return v.typeOutHTMLString(A,H);if(A){var G=(v.options||{}).stringSplitter,q=typeof G=="function"?G(A):A.split("");v.typeCharacters(q,H)}return v}),W(this,"pasteString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(A)?v.typeOutHTMLString(A,H,!0):(A&&v.addEventToQueue(S,{character:A,node:H}),v)}),W(this,"typeOutHTMLString",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,G=arguments.length>2?arguments[2]:void 0,q=function($e){var Et=document.createElement("div");return Et.innerHTML=$e,Et.childNodes}(A);if(q.length>0)for(var $=0;$<q.length;$++){var se=q[$],qe=se.innerHTML;se&&se.nodeType!==3?(se.innerHTML="",v.addEventToQueue(R,{node:se,parentNode:H}),G?v.pasteString(qe,se):v.typeString(qe,se)):se.textContent&&(G?v.pasteString(se.textContent,H):v.typeString(se.textContent,H))}return v}),W(this,"deleteAll",function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return v.addEventToQueue(g,{speed:A}),v}),W(this,"changeDeleteSpeed",function(A){if(!A)throw new Error("Must provide new delete speed");return v.addEventToQueue(m,{speed:A}),v}),W(this,"changeDelay",function(A){if(!A)throw new Error("Must provide new delay");return v.addEventToQueue(d,{delay:A}),v}),W(this,"changeCursor",function(A){if(!A)throw new Error("Must provide new cursor");return v.addEventToQueue(p,{cursor:A}),v}),W(this,"deleteChars",function(A){if(!A)throw new Error("Must provide amount of characters to delete");for(var H=0;H<A;H++)v.addEventToQueue(h);return v}),W(this,"callFunction",function(A,H){if(!A||typeof A!="function")throw new Error("Callback must be a function");return v.addEventToQueue(w,{cb:A,thisArg:H}),v}),W(this,"typeCharacters",function(A){var H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A||!Array.isArray(A))throw new Error("Characters must be an array");return A.forEach(function(G){v.addEventToQueue(c,{character:G,node:H})}),v}),W(this,"removeCharacters",function(A){if(!A||!Array.isArray(A))throw new Error("Characters must be an array");return A.forEach(function(){v.addEventToQueue(h)}),v}),W(this,"addEventToQueue",function(A,H){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.addEventToStateProperty(A,H,G,"eventQueue")}),W(this,"addReverseCalledEvent",function(A,H){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return v.options.loop?v.addEventToStateProperty(A,H,G,"reverseCalledEvents"):v}),W(this,"addEventToStateProperty",function(A,H){var G=arguments.length>2&&arguments[2]!==void 0&&arguments[2],q=arguments.length>3?arguments[3]:void 0,$={eventName:A,eventArgs:H||{}};return v.state[q]=G?[$].concat(U(v.state[q])):[].concat(U(v.state[q]),[$]),v}),W(this,"runEventLoop",function(){v.state.lastFrameTime||(v.state.lastFrameTime=Date.now());var A=Date.now(),H=A-v.state.lastFrameTime;if(!v.state.eventQueue.length){if(!v.options.loop)return;v.state.eventQueue=U(v.state.calledEvents),v.state.calledEvents=[],v.options=O({},v.state.initialOptions)}if(v.state.eventLoop=l()(v.runEventLoop),!v.state.eventLoopPaused){if(v.state.pauseUntil){if(A<v.state.pauseUntil)return;v.state.pauseUntil=null}var G,q=U(v.state.eventQueue),$=q.shift();if(!(H<=(G=$.eventName===x||$.eventName===h?v.options.deleteSpeed==="natural"?u(40,80):v.options.deleteSpeed:v.options.delay==="natural"?u(120,160):v.options.delay))){var se=$.eventName,qe=$.eventArgs;switch(v.logInDevMode({currentEvent:$,state:v.state,delay:G}),se){case S:case c:var $e=qe.character,Et=qe.node,an=document.createTextNode($e),Re=an;v.options.onCreateTextNode&&typeof v.options.onCreateTextNode=="function"&&(Re=v.options.onCreateTextNode($e,an)),Re&&(Et?Et.appendChild(Re):v.state.elements.wrapper.appendChild(Re)),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:"TEXT_NODE",character:$e,node:Re}]);break;case h:q.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case y:var A1=$.eventArgs.ms;v.state.pauseUntil=Date.now()+parseInt(A1);break;case w:var mu=$.eventArgs,O1=mu.cb,N1=mu.thisArg;O1.call(N1,{elements:v.state.elements});break;case R:var gu=$.eventArgs,as=gu.node,us=gu.parentNode;us?us.appendChild(as):v.state.elements.wrapper.appendChild(as),v.state.visibleNodes=[].concat(U(v.state.visibleNodes),[{type:P,node:as,parentNode:us||v.state.elements.wrapper}]);break;case g:var _1=v.state.visibleNodes,cs=qe.speed,hi=[];cs&&hi.push({eventName:m,eventArgs:{speed:cs,temp:!0}});for(var vu=0,R1=_1.length;vu<R1;vu++)hi.push({eventName:x,eventArgs:{removingCharacterNode:!1}});cs&&hi.push({eventName:m,eventArgs:{speed:v.options.deleteSpeed,temp:!0}}),q.unshift.apply(q,hi);break;case x:var L1=$.eventArgs.removingCharacterNode;if(v.state.visibleNodes.length){var ds=v.state.visibleNodes.pop(),D1=ds.type,mi=ds.node,I1=ds.character;v.options.onRemoveNode&&typeof v.options.onRemoveNode=="function"&&v.options.onRemoveNode({node:mi,character:I1}),mi&&mi.parentNode.removeChild(mi),D1===P&&L1&&q.unshift({eventName:x,eventArgs:{}})}break;case m:v.options.deleteSpeed=$.eventArgs.speed;break;case d:v.options.delay=$.eventArgs.delay;break;case p:v.options.cursor=$.eventArgs.cursor,v.state.elements.cursor.innerHTML=$.eventArgs.cursor}v.options.loop&&($.eventName===x||$.eventArgs&&$.eventArgs.temp||(v.state.calledEvents=[].concat(U(v.state.calledEvents),[$]))),v.state.eventQueue=q,v.state.lastFrameTime=A}}}),j)if(typeof j=="string"){var Q=document.querySelector(j);if(!Q)throw new Error("Could not find container element");this.state.elements.container=Q}else this.state.elements.container=j;_&&(this.options=O(O({},this.options),_)),this.state.initialOptions=O({},this.options),this.init()}var L,D;return L=F,(D=[{key:"init",value:function(){var j,_;this.setupWrapperElement(),this.addEventToQueue(p,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(_=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(_),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&Te(L.prototype,D),Object.defineProperty(L,"prototype",{writable:!1}),F}()})(),o.default})())})(n1);var _2=n1.exports;const R2=pd(_2),Uc="/assets/lizy_d_resume-BQPP8Yip.pdf",L2="/assets/certificates-BgRUBz7B.webp",D2="/assets/data_analyst-BvKr248U.jpg",r1="/assets/data_science-Cf_DU8nI.jpg",I2="/assets/full_stack-BiLQs273.png";function Hc(e){return ue({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Vc(e){return ue({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function M2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function F2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function b2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(e)}function $2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function B2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function U2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Wc(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function H2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function V2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function W2(e){return ue({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Q2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Y2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65z"},child:[]}]})(e)}function K2(e){return ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65z"},child:[]}]})(e)}const G2="/assets/about1-BUwqwXmI.jpg",X2="/assets/about2-DUDpJcN3.webp",q2="/assets/about3-mUmQ87ht.jpeg",J2=Mt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-90deg);
  }
`,Z2=Mt`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
`,eg=Mt`
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,tg=Mt`
  from {
    transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(0deg);
  }
`,ng=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
  overflow: hidden;
`,rg=k.h1`
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
`,ig=k.div`
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
`,og=k.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateX(${e=>e.rotation}deg);
  transition: transform 0.5s;
  animation: ${e=>e.slideIn?e.direction==="up"?eg:tg:e.direction==="up"?J2:Z2} 0.5s forwards;
`,uu=k.div`
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
`,sg=k(uu)`
  transform: rotateX(0deg) translateZ(200px);
`,lg=k(uu)`
  transform: rotateX(180deg) translateZ(200px);
`,Qc=k(uu)`
  transform: rotateY(${e=>e.rotate}deg) translateZ(200px);
`,ag=k.div`
  padding: 10px;
  width: 100%;
  max-width: 600px;
  display:flex;align-items:center;
  justify-content:center;
  flex-direction:column;
`,ug=k.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Yc=k.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,cg=k.div`
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



  @media (min-width: 769px) {
    display: flex;  /* Show image on larger screens */
  }
`,dg=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Kc=k.button`
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
`,fg=k.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Hs=[f.jsx(Q2,{}),f.jsx(V2,{}),f.jsx($2,{}),f.jsx(M2,{})],pg=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(!0),[i,o]=ee.useState("up"),[s,l]=ee.useState(0),a=[{title:"Development Experience",paragraph:"Proficient in React, with expertise in building interactive user interfaces, problem-solving, working with APIs, and developing data-driven components.",image:G2,icon:Hs[0]},{title:"Data Skills & Learning Journey",paragraph:"Actively learning Python, SQL,stats,power BI,Tabeleu, machine learning,deep learning,computer vision frameworks and nlp basics while working on personal projects in data visualization and predictive modeling.",image:X2,icon:Hs[1]},{title:"Career Goal",paragraph:"Aspiring to contribute to data-driven solutions by blending development expertise with analytical capabilities and continuously evolving as a data professional.",image:q2,icon:Hs[2]}];ee.useEffect(()=>{const h=setInterval(()=>{r(!1),o("up"),setTimeout(()=>{t(g=>(g+1)%a.length),l(g=>g-90),r(!0)},500)},1e4);return()=>clearInterval(h)},[a.length]);const u=()=>{r(!1),o("up"),setTimeout(()=>{t(h=>(h+1)%a.length),l(h=>h-90),r(!0)},500)},c=()=>{r(!1),o("down"),setTimeout(()=>{t(h=>(h-1+a.length)%a.length),l(h=>h+90),r(!0)},500)};return f.jsxs(ng,{id:"aboutme",children:[f.jsx(rg,{children:"About Me"}),f.jsx(Yc,{style:{fontSize:"25px",fontWeight:"bold"},children:"Passionate tech professional transitioning from Frontend Development to Data Analytics and Data Science."}),f.jsx(ig,{children:f.jsxs(og,{rotation:s,slideIn:n,direction:i,children:[f.jsxs(sg,{children:[f.jsxs(ag,{children:[f.jsxs(ug,{children:[a[e].icon," ",a[e].title]}),f.jsx(Yc,{children:a[e].paragraph})]}),f.jsx(cg,{children:f.jsx(dg,{src:a[e].image,alt:a[e].title})})]}),f.jsx(lg,{}),f.jsx(Qc,{rotate:"90deg"}),f.jsx(Qc,{rotate:"-90deg"})]})}),f.jsxs(fg,{children:[f.jsx(Kc,{onClick:c,children:f.jsx(K2,{})}),f.jsx(Kc,{onClick:u,children:f.jsx(Y2,{})})]})]})},Qe={gunmetal:"#30343f",ghostWhite:"#fafaff",periwinkle:"#e4d9ff",delftBlue:"#273469",spaceCadet:"#1e2749"},hg=k.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  color: ${Qe.ghostWhite};
  gap: 30px;
  flex-direction: column;

  @media (max-width: 768px) {
  padding: 50px 20px;
    text-align: center;
  }
`,mg=k.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  color: ${Qe.ghostWhite};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`,gg=k.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,vg=k.p`
  font-size: 1.2em;
  max-width: 80%;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,yg=k.div`
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
`,xg=k.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,wg=k.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); /* Adjusted for a stronger 3D effect */

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Slightly smaller shadow on mobile */
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
  color: ${Qe.periwinkle};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`,kg=k.div`
  display: flex;
  align-items: center;
`,Ii=k.a`
  font-size: 2.5em;
  color: ${Qe.ghostWhite};
  cursor: pointer;
  margin-right: 20px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${Qe.periwinkle};
    transform: scale(1.2);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Vs=k.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.5vw;  /* Responsive font size */
  color: ${Qe.gunmetal};
  font-weight: 600;
  background-color: ${Qe.ghostWhite};
  text-decoration: none;
  border-radius: 10px;  
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: ${Qe.spaceCadet};
    color: ${Qe.ghostWhite};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
`,Eg=k.div`
  display: flex;
    background-color:${Qe.delftBlue};
    border:1px solid ${Qe.periwinkle};
padding:20px;
  flex-wrap: wrap; /* Allow wrapping */
  gap: 20px; /* Space between project items */
  width: 100%;
  justify-content: center;
border-radius:20px;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack on mobile */
    gap: 10px; /* Space between project items */
  }
`,jg=k.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 1 calc(25% - 20px); /* 4 columns on large screens */

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 20px); /* 2 columns on tablets */
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* 1 column on mobile */
  }
`,zg=k.img`
  width: 100px; /* Adjust based on your design */
  height: 100px; /* Maintain aspect ratio */
  object-fit: cover;
  border-radius: 20px;

`,Tg=k.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  @media (max-width: 768px) {
  align-items:start;
  }
`,Pg=k.h3`
  font-size: 1.5em;
  color: ${Qe.periwinkle};
  margin: 0; /* No margin */
`,Ag=k.h4`
  color: ${Qe.ghostWhite};
  margin: 0; /* No margin */
`,Og=()=>{ee.useEffect(()=>{const n=new R2("#typing-effect-container",{strings:["Front End Developer","Data Analyst","Data Scientist"],autoStart:!0,loop:!0,deleteSpeed:20,delay:80});return()=>{n.stop()}},[]);const e=()=>{const n=document.getElementById("aboutme");n==null||n.scrollIntoView({behavior:"smooth"})},t=[{id:1,title:"Certificates",count:3,image:L2},{id:2,title:"Data Analyst Projects",count:2,image:D2},{id:3,title:"Data Scientist Projects",count:5,image:r1},{id:4,title:"Full Stack Projects",count:1,image:I2}];return f.jsxs(f.Fragment,{children:[f.jsxs(hg,{id:"home",children:[f.jsxs(mg,{children:[f.jsx(xg,{children:f.jsx(wg,{children:f.jsx(Sg,{src:Zp,alt:"Profile"})})}),f.jsxs(yg,{children:[f.jsx(gg,{children:"Hi, I'm Lizy Doragacharla"}),f.jsx(Cg,{id:"typing-effect-container"}),f.jsx(vg,{children:"To transition from a frontend developer role into a data-focused career as a data analyst or data scientist by leveraging existing technical skills, continuously building expertise in data-related tools and methodologies, developing practical projects, and actively networking with industry professionals to secure relevant opportunities."}),f.jsxs(kg,{children:[f.jsx(Ii,{href:"https://www.linkedin.com/in/lizy-d-371971233/",target:"_blank",rel:"noopener noreferrer",children:f.jsx(P2,{})}),f.jsx(Ii,{href:"https://github.com/doragacharla-lizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(T2,{})}),f.jsx(Ii,{href:"https://wa.me/your_number",target:"_blank",rel:"noopener noreferrer",children:f.jsx(O2,{})}),f.jsx(Ii,{href:"mailto:doragacharlalizy@gmail.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(N2,{})})]}),f.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[f.jsx(Vs,{onClick:e,children:"About Me"}),f.jsx(Vs,{href:Uc,download:!0,children:f.jsx(A2,{})}),f.jsx(Vs,{href:Uc,target:"_blank",rel:"noopener noreferrer",children:f.jsx(z2,{})})]})]})]}),f.jsx(Eg,{children:t.map((n,r)=>f.jsxs(jg,{children:[f.jsx(zg,{src:n.image,alt:n.title}),f.jsxs(Tg,{children:[f.jsx(Pg,{children:n.count}),f.jsx(Ag,{children:n.title})]})]},r))})]}),f.jsx(pg,{})]})};function i1(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ng}=Object.prototype,{getPrototypeOf:cu}=Object,rs=(e=>t=>{const n=Ng.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),gt=e=>(e=e.toLowerCase(),t=>rs(t)===e),is=e=>t=>typeof t===e,{isArray:hr}=Array,si=is("undefined");function _g(e){return e!==null&&!si(e)&&e.constructor!==null&&!si(e.constructor)&&nt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const o1=gt("ArrayBuffer");function Rg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&o1(e.buffer),t}const Lg=is("string"),nt=is("function"),s1=is("number"),os=e=>e!==null&&typeof e=="object",Dg=e=>e===!0||e===!1,eo=e=>{if(rs(e)!=="object")return!1;const t=cu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ig=gt("Date"),Mg=gt("File"),Fg=gt("Blob"),bg=gt("FileList"),$g=e=>os(e)&&nt(e.pipe),Bg=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nt(e.append)&&((t=rs(e))==="formdata"||t==="object"&&nt(e.toString)&&e.toString()==="[object FormData]"))},Ug=gt("URLSearchParams"),[Hg,Vg,Wg,Qg]=["ReadableStream","Request","Response","Headers"].map(gt),Yg=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),hr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function l1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const a1=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,u1=e=>!si(e)&&e!==a1;function na(){const{caseless:e}=u1(this)&&this||{},t={},n=(r,i)=>{const o=e&&l1(t,i)||i;eo(t[o])&&eo(r)?t[o]=na(t[o],r):eo(r)?t[o]=na({},r):hr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&fi(arguments[r],n);return t}const Kg=(e,t,n,{allOwnKeys:r}={})=>(fi(t,(i,o)=>{n&&nt(i)?e[o]=i1(i,n):e[o]=i},{allOwnKeys:r}),e),Gg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xg=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qg=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&cu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jg=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zg=e=>{if(!e)return null;if(hr(e))return e;let t=e.length;if(!s1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},e3=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cu(Uint8Array)),t3=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},n3=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},r3=gt("HTMLFormElement"),i3=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),o3=gt("RegExp"),c1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},s3=e=>{c1(e,(t,n)=>{if(nt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(nt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},l3=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return hr(e)?r(e):r(String(e).split(t)),n},a3=()=>{},u3=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ws="abcdefghijklmnopqrstuvwxyz",Xc="0123456789",d1={DIGIT:Xc,ALPHA:Ws,ALPHA_DIGIT:Ws+Ws.toUpperCase()+Xc},c3=(e=16,t=d1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function d3(e){return!!(e&&nt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const f3=e=>{const t=new Array(10),n=(r,i)=>{if(os(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=hr(r)?[]:{};return fi(r,(s,l)=>{const a=n(s,i+1);!si(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},p3=gt("AsyncFunction"),h3=e=>e&&(os(e)||nt(e))&&nt(e.then)&&nt(e.catch),C={isArray:hr,isArrayBuffer:o1,isBuffer:_g,isFormData:Bg,isArrayBufferView:Rg,isString:Lg,isNumber:s1,isBoolean:Dg,isObject:os,isPlainObject:eo,isReadableStream:Hg,isRequest:Vg,isResponse:Wg,isHeaders:Qg,isUndefined:si,isDate:Ig,isFile:Mg,isBlob:Fg,isRegExp:o3,isFunction:nt,isStream:$g,isURLSearchParams:Ug,isTypedArray:e3,isFileList:bg,forEach:fi,merge:na,extend:Kg,trim:Yg,stripBOM:Gg,inherits:Xg,toFlatObject:qg,kindOf:rs,kindOfTest:gt,endsWith:Jg,toArray:Zg,forEachEntry:t3,matchAll:n3,isHTMLForm:r3,hasOwnProperty:Gc,hasOwnProp:Gc,reduceDescriptors:c1,freezeMethods:s3,toObjectSet:l3,toCamelCase:i3,noop:a3,toFiniteNumber:u3,findKey:l1,global:a1,isContextDefined:u1,ALPHABET:d1,generateString:c3,isSpecCompliantForm:d3,toJSONObject:f3,isAsyncFn:p3,isThenable:h3};function I(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}C.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const f1=I.prototype,p1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{p1[e]={value:e}});Object.defineProperties(I,p1);Object.defineProperty(f1,"isAxiosError",{value:!0});I.from=(e,t,n,r,i,o)=>{const s=Object.create(f1);return C.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),I.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const m3=null;function ra(e){return C.isPlainObject(e)||C.isArray(e)}function h1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function qc(e,t,n){return e?e.concat(t).map(function(i,o){return i=h1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function g3(e){return C.isArray(e)&&!e.some(ra)}const v3=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function ss(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,R){return!C.isUndefined(R[w])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!a&&C.isBlob(y))throw new I("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,R){let m=y;if(y&&!R&&typeof y=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&g3(y)||(C.isFileList(y)||C.endsWith(w,"[]"))&&(m=C.toArray(y)))return w=h1(w),m.forEach(function(p,S){!(C.isUndefined(p)||p===null)&&t.append(s===!0?qc([w],S,o):s===null?w:w+"[]",u(p))}),!1}return ra(y)?!0:(t.append(qc(R,w,o),u(y)),!1)}const h=[],g=Object.assign(v3,{defaultVisitor:c,convertValue:u,isVisitable:ra});function x(y,w){if(!C.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),C.forEach(y,function(m,d){(!(C.isUndefined(m)||m===null)&&i.call(t,m,C.isString(d)?d.trim():d,w,g))===!0&&x(m,w?w.concat(d):[d])}),h.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Jc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function du(e,t){this._pairs=[],e&&ss(e,this,t)}const m1=du.prototype;m1.append=function(t,n){this._pairs.push([t,n])};m1.toString=function(t){const n=t?function(r){return t.call(this,r,Jc)}:Jc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function y3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function g1(e,t,n){if(!t)return e;const r=n&&n.encode||y3,i=n&&n.serialize;let o;if(i?o=i(t,n):o=C.isURLSearchParams(t)?t.toString():new du(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Zc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const v1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x3=typeof URLSearchParams<"u"?URLSearchParams:du,w3=typeof FormData<"u"?FormData:null,S3=typeof Blob<"u"?Blob:null,C3={isBrowser:!0,classes:{URLSearchParams:x3,FormData:w3,Blob:S3},protocols:["http","https","file","blob","url","data"]},fu=typeof window<"u"&&typeof document<"u",k3=(e=>fu&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),E3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",j3=fu&&window.location.href||"http://localhost",z3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:fu,hasStandardBrowserEnv:k3,hasStandardBrowserWebWorkerEnv:E3,origin:j3},Symbol.toStringTag,{value:"Module"})),pt={...z3,...C3};function T3(e,t){return ss(e,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return pt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function P3(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function A3(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function y1(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&C.isArray(i)?i.length:s,a?(C.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!C.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&C.isArray(i[s])&&(i[s]=A3(i[s])),!l)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(P3(r),i,n,0)}),n}return null}function O3(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const pi={transitional:v1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i?JSON.stringify(y1(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return T3(t,this.formSerializer).toString();if((l=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return ss(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),O3(t)):t}],transformResponse:[function(t){const n=this.transitional||pi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?I.from(l,I.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{pi.headers[e]={}});const N3=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_3=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&N3[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ed=Symbol("internals");function Er(e){return e&&String(e).trim().toLowerCase()}function to(e){return e===!1||e==null?e:C.isArray(e)?e.map(to):String(e)}function R3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const L3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Qs(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function D3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function I3(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class be{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const c=Er(a);if(!c)throw new Error("header name must be a non-empty string");const h=C.findKey(i,c);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||a]=to(l))}const s=(l,a)=>C.forEach(l,(u,c)=>o(u,c,a));if(C.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(C.isString(t)&&(t=t.trim())&&!L3(t))s(_3(t),n);else if(C.isHeaders(t))for(const[l,a]of t.entries())o(a,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Er(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return R3(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Er(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Qs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Er(s),s){const l=C.findKey(r,s);l&&(!n||Qs(r,r[l],l,n))&&(delete r[l],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Qs(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,o)=>{const s=C.findKey(r,o);if(s){n[s]=to(i),delete n[o];return}const l=t?D3(o):String(o).trim();l!==o&&delete n[o],n[l]=to(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[ed]=this[ed]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Er(s);r[l]||(I3(i,s),r[l]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(be.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(be);function Ys(e,t){const n=this||pi,r=t||n,i=be.from(r.headers);let o=r.data;return C.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function x1(e){return!!(e&&e.__CANCEL__)}function mr(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(mr,I,{__CANCEL__:!0});function w1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function M3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function F3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[o];s||(s=u),n[i]=a,r[i]=u;let h=o,g=0;for(;h!==i;)g+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const x=c&&u-c;return x?Math.round(g*1e3/x):void 0}}function b3(e,t){let n=0;const r=1e3/t;let i=null;return function(){const s=this===!0,l=Date.now();if(s||l-n>r)return i&&(clearTimeout(i),i=null),n=l,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const Ro=(e,t,n=3)=>{let r=0;const i=F3(50,250);return b3(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,a=s-r,u=i(a),c=s<=l;r=s;const h={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-s)/u:void 0,event:o,lengthComputable:l!=null};h[t?"download":"upload"]=!0,e(h)},n)},$3=pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=C.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),B3=pt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function U3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function H3(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function S1(e,t){return e&&!U3(t)?H3(e,t):t}const td=e=>e instanceof be?{...e}:e;function Tn(e,t){t=t||{};const n={};function r(u,c,h){return C.isPlainObject(u)&&C.isPlainObject(c)?C.merge.call({caseless:h},u,c):C.isPlainObject(c)?C.merge({},c):C.isArray(c)?c.slice():c}function i(u,c,h){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u,h)}else return r(u,c,h)}function o(u,c){if(!C.isUndefined(c))return r(void 0,c)}function s(u,c){if(C.isUndefined(c)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,h){if(h in t)return r(u,c);if(h in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>i(td(u),td(c),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=a[c]||i,g=h(e[c],t[c],c);C.isUndefined(g)&&h!==l||(n[c]=g)}),n}const C1=e=>{const t=Tn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=be.from(s),t.url=g1(S1(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(C.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...c]=a?a.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&C.isFunction(r)&&(r=r(t)),r||r!==!1&&$3(t.url))){const u=i&&o&&B3.read(o);u&&s.set(i,u)}return t},V3=typeof XMLHttpRequest<"u",W3=V3&&function(e){return new Promise(function(n,r){const i=C1(e);let o=i.data;const s=be.from(i.headers).normalize();let{responseType:l}=i,a;function u(){i.cancelToken&&i.cancelToken.unsubscribe(a),i.signal&&i.signal.removeEventListener("abort",a)}let c=new XMLHttpRequest;c.open(i.method.toUpperCase(),i.url,!0),c.timeout=i.timeout;function h(){if(!c)return;const x=be.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};w1(function(m){n(m),u()},function(m){r(m),u()},w),c=null}"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new I("Request aborted",I.ECONNABORTED,i,c)),c=null)},c.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,i,c)),c=null},c.ontimeout=function(){let y=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const w=i.transitional||v1;i.timeoutErrorMessage&&(y=i.timeoutErrorMessage),r(new I(y,w.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,i,c)),c=null},o===void 0&&s.setContentType(null),"setRequestHeader"in c&&C.forEach(s.toJSON(),function(y,w){c.setRequestHeader(w,y)}),C.isUndefined(i.withCredentials)||(c.withCredentials=!!i.withCredentials),l&&l!=="json"&&(c.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&c.addEventListener("progress",Ro(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ro(i.onUploadProgress)),(i.cancelToken||i.signal)&&(a=x=>{c&&(r(!x||x.type?new mr(null,e,c):x),c.abort(),c=null)},i.cancelToken&&i.cancelToken.subscribe(a),i.signal&&(i.signal.aborted?a():i.signal.addEventListener("abort",a)));const g=M3(i.url);if(g&&pt.protocols.indexOf(g)===-1){r(new I("Unsupported protocol "+g+":",I.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Q3=(e,t)=>{let n=new AbortController,r;const i=function(a){if(!r){r=!0,s();const u=a instanceof Error?a:this.reason;n.abort(u instanceof I?u:new mr(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{i(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",i):a.unsubscribe(i))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=s,[l,()=>{o&&clearTimeout(o),o=null}]},Y3=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},K3=async function*(e,t,n){for await(const r of e)yield*Y3(ArrayBuffer.isView(r)?r:await n(String(r)),t)},nd=(e,t,n,r,i)=>{const o=K3(e,t,i);let s=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await o.next();if(a){l.close(),r();return}let c=u.byteLength;n&&n(s+=c),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),o.return()}},{highWaterMark:2})},rd=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},ls=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",k1=ls&&typeof ReadableStream=="function",ia=ls&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),G3=k1&&(()=>{let e=!1;const t=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),id=64*1024,oa=k1&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),Lo={stream:oa&&(e=>e.body)};ls&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Lo[t]&&(Lo[t]=C.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const X3=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(C.isArrayBufferView(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await ia(e)).byteLength},q3=async(e,t)=>{const n=C.toFiniteNumber(e.getContentLength());return n??X3(t)},J3=ls&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:h="same-origin",fetchOptions:g}=C1(e);u=u?(u+"").toLowerCase():"text";let[x,y]=i||o||s?Q3([i,o],s):[],w,R;const m=()=>{!w&&setTimeout(()=>{x&&x.unsubscribe()}),w=!0};let d;try{if(a&&G3&&n!=="get"&&n!=="head"&&(d=await q3(c,r))!==0){let z=new Request(t,{method:"POST",body:r,duplex:"half"}),E;C.isFormData(r)&&(E=z.headers.get("content-type"))&&c.setContentType(E),z.body&&(r=nd(z.body,id,rd(d,Ro(a)),null,ia))}C.isString(h)||(h=h?"cors":"omit"),R=new Request(t,{...g,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let p=await fetch(R);const S=oa&&(u==="stream"||u==="response");if(oa&&(l||S)){const z={};["status","statusText","headers"].forEach(O=>{z[O]=p[O]});const E=C.toFiniteNumber(p.headers.get("content-length"));p=new Response(nd(p.body,id,l&&rd(E,Ro(l,!0)),S&&m,ia),z)}u=u||"text";let P=await Lo[C.findKey(Lo,u)||"text"](p,e);return!S&&m(),y&&y(),await new Promise((z,E)=>{w1(z,E,{data:P,headers:be.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:R})})}catch(p){throw m(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,R),{cause:p.cause||p}):I.from(p,p&&p.code,e,R)}}),sa={http:m3,xhr:W3,fetch:J3};C.forEach(sa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const od=e=>`- ${e}`,Z3=e=>C.isFunction(e)||e===null||e===!1,E1={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Z3(n)&&(r=sa[(s=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(od).join(`
`):" "+od(o[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:sa};function Ks(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mr(null,e)}function sd(e){return Ks(e),e.headers=be.from(e.headers),e.data=Ys.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),E1.getAdapter(e.adapter||pi.adapter)(e).then(function(r){return Ks(e),r.data=Ys.call(e,e.transformResponse,r),r.headers=be.from(r.headers),r},function(r){return x1(r)||(Ks(e),r&&r.response&&(r.response.data=Ys.call(e,e.transformResponse,r.response),r.response.headers=be.from(r.response.headers))),Promise.reject(r)})}const j1="1.7.2",pu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ld={};pu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+j1+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new I(i(s," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!ld[s]&&(ld[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function e4(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new I("option "+o+" must be "+a,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}}const la={assertOptions:e4,validators:pu},bt=la.validators;class xn{constructor(t){this.defaults=t,this.interceptors={request:new Zc,response:new Zc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Tn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&la.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:la.assertOptions(i,{encode:bt.function,serialize:bt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&C.merge(o.common,o[n.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=be.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,h=0,g;if(!a){const y=[sd.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),g=y.length,c=Promise.resolve(n);h<g;)c=c.then(y[h++],y[h++]);return c}g=l.length;let x=n;for(h=0;h<g;){const y=l[h++],w=l[h++];try{x=y(x)}catch(R){w.call(this,R);break}}try{c=sd.call(this,x)}catch(y){return Promise.reject(y)}for(h=0,g=u.length;h<g;)c=c.then(u[h++],u[h++]);return c}getUri(t){t=Tn(this.defaults,t);const n=S1(t.baseURL,t.url);return g1(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(n,r){return this.request(Tn(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Tn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}xn.prototype[t]=n(),xn.prototype[t+"Form"]=n(!0)});class hu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new mr(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new hu(function(i){t=i}),cancel:t}}}function t4(e){return function(n){return e.apply(null,n)}}function n4(e){return C.isObject(e)&&e.isAxiosError===!0}const aa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(aa).forEach(([e,t])=>{aa[t]=e});function z1(e){const t=new xn(e),n=i1(xn.prototype.request,t);return C.extend(n,xn.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return z1(Tn(e,i))},n}const fe=z1(pi);fe.Axios=xn;fe.CanceledError=mr;fe.CancelToken=hu;fe.isCancel=x1;fe.VERSION=j1;fe.toFormData=ss;fe.AxiosError=I;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=t4;fe.isAxiosError=n4;fe.mergeConfig=Tn;fe.AxiosHeaders=be;fe.formToJSON=e=>y1(C.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=E1.getAdapter;fe.HttpStatusCode=aa;fe.default=fe;const ur={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},r4=Mt`
    0% { transform: rotate( 0.0deg); }
    10% { transform: rotate(14.0deg); }
    20% { transform: rotate(-8.0deg); }
    30% { transform: rotate(14.0deg); }
    40% { transform: rotate(-4.0deg); }
    50% { transform: rotate(10.0deg); }
    60% { transform: rotate( 0.0deg); }
    100% { transform: rotate( 0.0deg); }
`,i4=k.span`
    font-size: 3em;
    display: inline-block;
    width: 100px;
    cursor: pointer;

    &:hover {
        animation: ${r4} 2.5s infinite;
    }
`,o4=Mt`
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
`,s4=k.section`
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
`,l4=k.section`
    color: #e0e1ddff; /* platinum */
`,a4=k.div`
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
    animation: ${o4} 2s linear infinite;
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
`;const u4=k.h2`
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
`,c4=k.p`
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
`,d4=k.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`,f4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,p4=k.span`
    font-size: 1.1em;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1em;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,h4=k.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        gap: 10px;
    }
`,Gs=k.a`
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
`,m4=k.div`
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
`,g4=k.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: auto;
`,ad=k.input`
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
`,v4=k.textarea`
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
`,ud=k.button`
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
`,y4=Mt`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`,x4=Mt`
    from { width: 0; }
    to { width: 100%; }
`,w4=k.p`
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
            animation: ${y4} 0.3s ease forwards;
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
            animation: ${x4} 1s steps(20, end) forwards;
        }
    }
`,S4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:f.jsx("path",{fill:"#000",d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),C4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 64 64",children:f.jsx("path",{fill:"#000",d:"M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26z"})}),k4=()=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",children:f.jsx("path",{fill:"#000",d:"M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"})}),E4=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[i,o]=ee.useState({name:"",email:"",message:""}),s=u=>{const{name:c,value:h}=u.target;o(g=>({...g,[c]:h}))},l=async u=>{u.preventDefault(),t(!0);try{(await fe.post("https://api.web3forms.com/submit",{access_key:"8e4c1901-d8c1-4df8-aa46-700466520582",...i})).data.success?(r("Thank you for your message. We will get back to you soon."),o({name:"",email:"",message:""}),setTimeout(()=>r(""),5e3)):r("An error occurred. Please try again later.")}catch(c){console.error("Submission error:",c),r("An error occurred. Please try again later.")}t(!1)},a=()=>{window.location.href="mailto:lizdoragacharla@gmail.com"};return f.jsx(l4,{id:"connect",children:f.jsxs(s4,{children:[f.jsxs(m4,{children:[f.jsxs(g4,{onSubmit:l,children:[f.jsx(ad,{type:"text",name:"name",placeholder:"Your Name",value:i.name,onChange:s,required:!0}),f.jsx(ad,{type:"email",name:"email",placeholder:"Your Email",value:i.email,onChange:s,required:!0}),f.jsx(v4,{name:"message",placeholder:"Your Message",value:i.message,onChange:s,required:!0}),f.jsx(ud,{type:"submit",disabled:e,children:e?"Sending...":"Send Message"}),f.jsx(ud,{onClick:a,children:"Connect via Email"})]}),n&&f.jsxs(w4,{className:n.includes("Thank")?"success":"",children:[n.includes("Thank")&&f.jsx(B2,{}),n]})]}),f.jsxs(a4,{children:[f.jsx(i4,{role:"img","aria-label":"Wave emoji",children:"👋"}),f.jsx(u4,{children:"LET'S CONNECT"}),f.jsx(c4,{children:"I'm Lizy Doragacharla, a dedicated and detail-oriented Front-End Developer. Feel free to reach out to me for any job opportunities or collaborations. I'm excited to connect with you!"}),f.jsxs(d4,{children:[f.jsx(f4,{children:"lizydoragacharla@gmail.com"}),f.jsx(p4,{children:"+91 8106868075"}),f.jsxs(h4,{children:[f.jsx(Gs,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:f.jsx(S4,{})}),f.jsx(Gs,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:f.jsx(C4,{})}),f.jsx(Gs,{href:"https://wa.me/918106868075",target:"_blank",rel:"noopener noreferrer",children:f.jsx(k4,{})})]})]})]})]})})},T1=(()=>{const e={};return{on(t,n){e[t]||(e[t]=[]),e[t].push(n)},emit(t,n){e[t]&&e[t].forEach(r=>r(n))}}})(),ht={richBlack:"#0d1b2a",oxfordBlue:"#1b263b",yinmnBlue:"#415a77",silverLakeBlue:"#778da9",platinum:"#e0e1dd"},j4=Mt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,z4=k.footer`
    background: linear-gradient(270deg, #1b263b, #273469ff, #1e2749ff);
    background-size: 600% 600%;
    animation: ${j4} 15s ease infinite;    
    padding: 40px 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`,T4=k.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`,P4=k.div`
    @media (min-width: 769px) {
        display: none;
    }
`,Xs=k.div`
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: ${ht.platinum};
    @media (max-width: 768px) {
        border-bottom: 1px solid ${ht.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`,qs=k.h3`
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
`,Js=k.div`
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
`,Zs=k.div`
    max-height: ${e=>e.isOpen?"300px":"0"};
    overflow: hidden;
    color: ${ht.platinum};
    background: ${ht.oxfordBlue};
    border-radius: 5px;
    padding: ${e=>e.isOpen?"10px":"0"};
    transition: max-height 0.5s ease, padding 0.5s ease;
`,A4=()=>{const[e,t]=ee.useState(null),n=i=>{t(o=>o===i?null:i)},r=i=>{T1.emit("activateTab",i),document.getElementById("knowmore").scrollIntoView({behavior:"smooth"})};return f.jsxs(z4,{children:[f.jsxs(T4,{children:[f.jsxs(Xs,{children:[f.jsx(qs,{children:"My Details"}),f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsxs(Xs,{children:[f.jsx(qs,{children:"Topics"}),f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsxs(Xs,{children:[f.jsx(qs,{children:"Connect"}),f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Vc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Hc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Wc,{})," Let's Connect"]})]})]}),f.jsxs(P4,{children:[f.jsx(Js,{isOpen:e==="details",onClick:()=>n("details"),children:"My Details"}),f.jsxs(Zs,{isOpen:e==="details",children:[f.jsx("div",{children:"Name: Lizy Doragacharla"}),f.jsx("div",{children:"Location: Tenali, India"}),f.jsx("div",{children:"Email: lizydoragacharla@gmail.com"}),f.jsx("div",{children:"Phone: +91 8106868075"})]}),f.jsx(Js,{isOpen:e==="topics",onClick:()=>n("topics"),children:"Topics"}),f.jsxs(Zs,{isOpen:e==="topics",children:[f.jsx(ke,{onClick:()=>r("Skills"),children:"Skills"}),f.jsx(ke,{onClick:()=>r("Certificates"),children:"Certificates"}),f.jsx(ke,{onClick:()=>r("Education"),children:"Education"}),f.jsx(ke,{onClick:()=>r("Experience"),children:"Experience"}),f.jsx(ke,{onClick:()=>r("Projects"),children:"Projects"})]}),f.jsx(Js,{isOpen:e==="connect",onClick:()=>n("connect"),children:"Connect"}),f.jsxs(Zs,{isOpen:e==="connect",children:[f.jsxs(ke,{href:"https://www.linkedin.com/in/lizy-d-371971233",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Vc,{})," LinkedIn"]}),f.jsxs(ke,{href:"https://github.com/doragacharlalizy",target:"_blank",rel:"noopener noreferrer",children:[f.jsx(Hc,{})," GitHub"]}),f.jsxs(ke,{href:"mailto:lizydoragacharla@gmail.com",children:[f.jsx(Wc,{})," Let's Connect"]})]})]})]})},O4="/assets/python-CqUXyj7V.webp",N4="/assets/react-COzaG4-_.webp",_4="/assets/c--B70GCF6M.webp",R4="/assets/html-CAPMYXQG.webp",L4="/assets/css-CTU4a1FO.webp",D4="/assets/js-Cc8fTqTM.webp",I4="/assets/sql-BCEP8T1F.webp",M4="/assets/php-D_xiKIUL.webp",F4="/assets/aws-CKdeKC-u.webp",b4="/assets/jira-CRmYMftG.webp",$4="/assets/django-D_CdD4dM.webp",B4="/assets/power_bi-CeeHLKFr.webp",U4="/assets/tableau-CzV1hp2Z.png",no={gunmetal:"#30343f",ghostWhite:"#fafaff",delftBlue:"#273469",spaceCadet:"#1e2749"},H4=k.section`
    padding: 50px 20px;
    text-align: center;
    color: #e0e1dd;
`,V4=k.h1`
    font-size: 3rem;
    margin-bottom: 30px;
    color: #fafaff;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.5em;
    }
`,W4=k.div`
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
`,Q4=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, ${no.spaceCadet} 30%, ${no.delftBlue} 100%);
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    border: 2px solid ${no.ghostWhite};

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 480px) {
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
    }
`,Y4=k.img`
    width: 100px;
    height: 100px;
    border-radius: 10%;
    object-fit: cover;

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
    }
`,K4=k.p`
    font-size: 1em;
    margin: 10px 0 0 0;
    color: ${no.ghostWhite};

    @media (max-width: 480px) {
        font-size: 0.9em;
    }
`,G4=[{id:1,image:O4,title:"Python"},{id:2,image:N4,title:"React"},{id:3,image:_4,title:"C"},{id:4,image:R4,title:"HTML"},{id:5,image:L4,title:"CSS"},{id:6,image:D4,title:"JavaScript"},{id:7,image:I4,title:"SQL, PostgreSQL"},{id:8,image:M4,title:"PHP"},{id:9,image:F4,title:"AWS"},{id:10,image:b4,title:"Jira"},{id:11,image:$4,title:"Django Rest Framework"},{id:12,image:r1,title:"Data Science"},{id:13,image:B4,title:"Power BI"},{id:14,image:U4,title:"Tableau"}],cd=()=>f.jsxs(H4,{children:[f.jsx(V4,{children:"Skills"}),f.jsx(W4,{children:G4.map(e=>f.jsxs(Q4,{children:[f.jsx(Y4,{src:e.image,alt:e.title}),f.jsx(K4,{children:e.title})]},e.id))})]}),X4="/assets/aws_certificate-UfzG4gz2.pdf",q4="/assets/nptel_certificate-mQ2WdH-6.jpg",J4="/assets/coursera_certificate-C_tXgTa3.pdf",Z4={colors:{gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"}},e6=k.div`
  padding: 50px 20px;
  color: ${({theme:e})=>e.colors.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,t6=k.h1`
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
`,n6=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,r6=k.div`
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
`,i6=k.div`
  flex-grow: 1;
`,o6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,s6=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,l6=k.p`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,a6=k.div`
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
`,dd=k.a`
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
`,u6=[{id:"aws-certificate",title:"AWS - Cloud Foundations",date:"OCT-DEC 2022",description:"Completed a course on AWS Cloud Foundations, gaining knowledge in cloud computing and AWS services under the guidance of AWS Architect Aditya Sundar.",downloadLink:X4},{id:"nptel-certificate",title:"NPTEL - Internet of Things",date:"JUL-OCT 2022",description:"Acquired a comprehensive understanding of IoT basics and sensor workings through the NPTEL course.",downloadLink:q4},{id:"coursera-certificate",title:"Coursera - Data Science",date:"FEB-APR 2022",description:"Focused on programming for Python within the Data Science domain, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",downloadLink:J4}],c6=()=>f.jsx(a2,{theme:Z4,children:f.jsxs(e6,{children:[f.jsx(t6,{children:"Certificates"}),f.jsx(n6,{children:u6.map(e=>f.jsxs(r6,{children:[f.jsxs(i6,{children:[f.jsx(o6,{children:e.title}),f.jsxs(s6,{children:["Date: ",e.date]}),f.jsx(l6,{children:e.description})]}),f.jsxs(a6,{children:[e.downloadLink&&f.jsx(dd,{as:"a",href:e.downloadLink,download:`${e.title.replace(/\s+/g,"-")}_certificate.pdf`,children:"Download"}),f.jsx(dd,{as:"a",href:e.downloadLink,target:e.downloadLink?"_blank":void 0,rel:e.downloadLink?"noopener noreferrer":void 0,children:"View"})]})]},e.id))})]})}),d6=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #e0e1ddff;
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
  position: relative;
  padding: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,h6=k.div`
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
`,m6=k.div`
  flex: 1;
  padding: 0 20px;
  text-align: center;

  @media (min-width: 768px) {
      text-align: left;
    
    }
      
  @media (max-width: 480px) {
  padding:0;
  
  }
`,g6=k.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`,v6=k.div`
`,y6=k.div`
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
`;const x6=()=>{const[e,t]=ee.useState(0),n=[{title:"SSC",duration:"2017-2018",institution:"Keshava Reddy High School",details:"Achieved 9.5 GPA"},{title:"Intermediate (MPC)",duration:"2018-2020",institution:"Tirumala Junior College, Katheru",details:"Achieved 9.8 CGPA"},{title:"B.Tech (CSE)",duration:"2020-2024",institution:"Adikavi Nannaya University, Rajanagaram",details:"Achieved 9.1 CGPA"}];ee.useEffect(()=>{const i=setInterval(()=>{t(o=>(o+1)%n.length)},3e3);return()=>clearInterval(i)},[n.length]);const r=i=>{t(i)};return f.jsxs(d6,{children:[f.jsx(f6,{children:"Education Journey"}),f.jsx(p6,{children:n.map((i,o)=>f.jsxs(h6,{isActive:o===e,onClick:()=>r(o),children:[f.jsx(y6,{isActive:o===e,children:o+1}),f.jsxs(m6,{children:[f.jsx(g6,{children:i.title}),f.jsxs(v6,{children:[f.jsx("div",{children:i.duration}),f.jsx("div",{children:i.institution}),f.jsx("div",{children:i.details})]})]})]},o))})]})},w6="/assets/MycompanyCertificate-nOAom7B5.pdf",S6="/assets/OfferLetter-D1_r91II.pdf",He={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},C6=k.div`
  padding: 50px 20px;
  color: ${He.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,k6=k.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  text-align: center;
  color: #fafaff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`,E6=k.div`
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
`,j6=k.div`
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
`,z6=k.div`
  flex-grow: 1;
`,T6=k.h2`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`,P6=k.h3`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
  }
`,A6=k.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`,O6=k.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;
`,N6=k.ul`
  font-size: 1em;
  margin-top: 10px;
  padding-left: 20px;
`,_6=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,R6=k.span`
  background: linear-gradient(135deg, ${He.spaceCadet} 30%, ${He.delftBlue} 100%);
  color: ${He.ghostWhite};
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${He.ghostWhite};
`,L6=k.div`
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
`,el=k.a`
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
`,D6=()=>{const e=[{company:"MYC Mine and Yours Company, Vizag",role:"Full Stack Developer (Intern)",duration:"Duration: 3 months",description:"MYC is a leading company in Vizag specializing in innovative solutions for various industries.",responsibilities:["Gained insights into business planning and pre-production steps for live projects.","Contributed to various tasks, enhancing understanding of industry practices."],skills:["HTML","CSS","Bootstrap","JavaScript","PHP","PhpMyAdmin"],certificateUrl:w6,companyUrl:"https://www.linkedin.com/company/my-company-mine-and-yours-company/"},{company:"Arthashastra Intelligence, Hyderabad",role:"Frontend Developer",duration:"Duration: 7 months (Internship) + Full-Time Employee",description:"Arthashastra Intelligence provides cutting-edge AI solutions for businesses worldwide.",responsibilities:["Started as an intern, transitioned to a full-time Frontend Developer role focused on React.","Developed responsive and dynamic interfaces using React for various applications.","Worked on backend integration using Django Rest Framework during the internship.","Built and maintained websites using WordPress for clients.","Collaborated with cross-functional teams to implement new features and improve existing ones."],skills:["React","Django Rest Framework","WordPress"],certificateUrl:S6,companyUrl:"https://arthashastra.ai/"}];return f.jsxs(C6,{children:[f.jsx(k6,{children:"Experience"}),f.jsx(E6,{children:e.map((t,n)=>f.jsxs(j6,{children:[f.jsxs(z6,{children:[f.jsx(T6,{children:t.company}),f.jsx(P6,{children:t.role}),f.jsx(A6,{children:t.duration}),f.jsx(O6,{children:t.description}),f.jsx(N6,{children:t.responsibilities.map((r,i)=>f.jsx("li",{children:r},i))}),f.jsx(_6,{children:t.skills.map((r,i)=>f.jsx(R6,{children:r},i))})]}),f.jsxs(L6,{children:[n===1?f.jsx(el,{href:t.certificateUrl,target:"_blank",children:"View Offer Letter"}):f.jsx(el,{href:t.certificateUrl,target:"_blank",children:"View Certificate"}),f.jsx(el,{href:t.companyUrl,target:"_blank",children:"Visit Company"})]})]},n))})]})},I6="/assets/project1-DkKLZuDf.png",M6="/assets/project2-BrLQLyBu.png",F6="/assets/project3-57CnXeRN.webp",b6="/assets/project4-DA93zLP-.png",$6="/assets/project5-DyFkWcGX.webp",B6="/assets/project6-Bw7RtEy8.jpg",U6="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///8tN05ASWBCrL5JrsApM0tErb5OsMEsOFNjuMc2QFnw+PlXtMRHT2Ki0tsgLEbY6+8TIj92wM3Exsvf4OMcKUTP0dQuOVT19veHxtGYm6YOHz00PlXM5ut8gY2MkJoFGztzeIW12+Lq6+3e3+JdZHYkMU5SWm7u7/Hn8/bAwse1uL5ka3yv2OCWzdecn6kAFDenqrGusbkADjSEiZbF4+lrcYFDTWRWXnJgZnUAAC8AACgPyNdIAAAMcklEQVR4nO2aC3uaSBfHAcELiSFEASMWMXiLprEa1yTd7/+93nPmxoBAmyZNd/c9v6dPRUbM/JlzHTQMgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/wdC4E/P4ffiR133T8/hB6xPSTLTT2xnyWyvn5iVPlCga1nPv2lmH4blusuh9n7hum5fex8u3SipvfrzFF400Xjl1LXcbf52BHO2uuv8xM61ok3t1Z+m8LrVxGXTpdvIco/520EECqNBfuKhKLjEpyns2Z1Ojbw2jHxtuDRbWpZmlbCkluWO1Xtc05f6qz9L4V+tTqf95bqSK5TYdHHfspZr7Z2buJomWFN3V3/xZyls2z3bfqweu8Sx24aLYdVyq1wvLXfgWsuRPDF2rW5DxvskhY+t1v2j3bqvGvsKY1et6jHOJtKsErxyse5akRL1Am7Y8Kc/R+FFC9eoZd9UjrVv2RrXX57pnnZ03amhGSa4oavlivl2t9/quUUqHA32u8Nvq25u7BYY1V2r9eV87NZuXaCftv6qv/7Zyq3SwtRwcq0H8R4WOFK5ZAcFjOtGXSvPLlzh8LSMYKTbHRu/A8gULFZe2p2bM1rtKxyDWFv/BeiI4vYPu1Y3Q9+LRmoMTjDmLmTOKIog2HZVkcMUbpcw4rIgbGW/QeGlzfPdXbtjt9pFbNtmY3AXrmq/YJNb5QGmyeKnlAyBdsWPQsgq3eMgDHeoVEoEhSuoerqL8S7hGutz56+irPOy07Fvi/Q60jpv263a0gbj54kfztANDQg1Li9NIVkK8SOsBMQCPcDCbpTC52d3wQf28M5dfLRAFWG+tux2u5QxLlWE4RGnhhVMjB9FPHE8y0XaKgOewZFanmcVQbHGUwtqDOBtt77E+zUeRSbAgFrOCvD+uuq4DOa8OR6E4IbogEfIiGwEDniuGMJiHtQFW5UkUaGVfxNWRKt3Kipx32rxdWNm2CpkheK6deozBtYtbPp7EUS3UrIlc8XY1dPiaClTKCiM9LodbHn5scEGMgV7vWdBs5gVir7XkDHQEZmQk/C/TKwYhFbRd/QLaRHN9JUdoFmOtIFTYyfyC3xpte7YQY8HzZ59+UVyJzLFxe0X/SNVCEeE9C6MT6zdVuYKTPzjoSJTntstGCkLxu6HJsWOyBRyga5bdt5UiDHwQPYKy1xTujIbhEoljKQpHlnWMKAG5141xyjZzbE0hYWqLSz2Yu/mqwwf0smwyRBtFBy0hTLpqnZdxsAEuMFmV5qiWDzVR8HEMafrdCsVwq1w6/c83gyEEp4prtpCKWR4rFGhrb+A7CgCjRZuq0pXgxsh5MGF6vbBAUFypkpwXJrZbqyzq1SIH6zf83gzsDoXQqnScivEgm3eynYjT5l1GWNhWQvmhjIOMnfaqgCKE99WXVhWiPXR9D2aSlxzBTJosiaDGywTbQvbzcseu2ZDgyUDkKGa/QTzBjQawuKybs3Eywp3bs2teBey9OapgwcdJloliEtReKvQWwYcsTvfu7mKA0pe5bO1avpAzId6tsB2cv5eQWfIxkEoxawgKu3SSJ4+y2AK3yZu3utDxIjmUW61SU2r37UK+W/YVQXgB1K2QfDOKyFNtRQ3wo5VXC0DQWa80jYvmCO6udViZ1FVjpWqNvDnpl2dX0TGkTsZRx7b7Y4Q/ah7KHJV3OxYb5NVv7+aHSABQqP0kI9AcfKsJ2/oJ2QDooNrlp/HsrRgtO/honfJgbzHD+xOp6dOqUO7I0615Yk8Y6xn3wLPAbzAxLVwtd38PTZ7+XaNsWYZccunvx6cuPlimjlG7jOz7nAB1yy1rdb3gbmd97uY+PirOIFH4tAWgyz/ixPKE8PYM00v8P0AXlGhHiMwxxdKznkX5u9G/cViZXUj0SPhptVwCv+5q5WLFrssPPJ4HzDXK+S21blhB7A8V/wM6pKH7Vt2IM9AjpSOOP/mgL7ksNnsk0nsWqUYAY5XNMv1AjVy3CUvzaBEXw6N6VIMuNGHraBh6KmAJ7lrmQpuobBpy4L8LJiq8tt0zOAkFyl8WCxeChkveVmsSpktnEFtGkVQliYbfmG2WqzAXuenqIundx/lg4aYfVvOXgRMXnei0hs+dle+C1pC3Pqm8/Ydh2wehlmVjmEYfvgOzb1UdlsMmKhGZAUtzJ4VNSfHjP/pj29lr6DKUraLwdWwaluW3Ea7ojCdmGbw6VN+I6pXUHswuLct1MCYSoJ5c9HOU4XXrHCUDYdn1pjlp9bQB9d4XTas3MfIai7Izv+OoqI9bPdESr9r2b2ObH2rGkQLrLSugpxPJzFiJsyOtxBP8MVKv/OCZXtycNjXQ5EITJtXP41T/6HkAOx0HPfz3azDaoFh4DBJvx+MWrQAwiNKD7KCyAaX6rnhjQpJbW1bOPFMp6JIAbLX1HNMhpcyQbGTjoxZCsEX090+9bFMgI84fl/df8/xx8a6H/MrnVSrj4yhFUNZgcWFP5FPPQ6+ExvGK3w+aGhGtG0aKUIldDi8LH9I36gJU9P0qzqiAU4yiH0nSH2fpb2Bb8bGFGKvl+IaHgMvdRaz0wQ+6E3kZTA6HXmOBxfCP7g5ebkawr3xJ8nxFASmEwsT3gbwpQmc8L41tVv5Vhs3xGutPbppt9kNzk24uNn2ip7YPwungyeYnbPHeYzCGS/HfDMIYzN+GY/x/fxpzGc5n8ACyJs0MZ1k5cQztPxw4cOXyFyUpbB4vBQYx6YjlG/wS1Mnfh2Pm0K6crFH3u7rLa4INMpZ7dKG6cgCiU78UixDshh0l6wXFJorx1ETUZY5CsAOxDvwa8dJ5ZeN4ZJYtFV9xwlkrtwFpn+QCp0Xb/LDZlIlBBYmi0/Yrtowdr6Xk7OImS8FeikCK+uV3RMVOn5VgJx6pj+QOkBtbm8zcHNuwQNY/fwuThx5Gr/U+4kiqNA7lbaacNXOkqbO1kOPMQNf1cvzb2Be5T+LCoPKkhrtd6cUOtovHka4iGyBYPW18/vATIdSYVOMUWjlSq/8pBs8D3rFYuFT4mClYKumv5LPCz015aLCtDqXxaaXKIWFCUOsDrC9XKeFu4P3ZCsVej8hMN+Dgdhpl7d8e512XnrXPECcz9BWZUyEecbD8kdgVvoyMNaD/XH2uoJoOsuv1A0ZFDiv/NXXnA3vyVQf/zFa2wBNoK3DWkaRKBseAmcLCBhiopU3FhUWt3kP/RS6Sg/TpqbQ19cZpDCPA7MswVcdFHo/uTt+ozytgg4fu2t8kA8ZzjS/4dJl6flqMYWevs27CQIIjzGs/cSpVQiO6Dj43RixNeQ9QYU/ubOqys/7u3PEWO1utwCsjbnfEG78+YZTSeEOWue4v5+DnlH8Q4Xgj+akgCOt9GcV8qxQA8+Gj40/qDF4csIcAWHBmZyNFhUOMNyK8L+uV5iJ5A5rWBml3qLwLJfrYEVz32r8UZTB1479pqYyahYVQmpPZfJvUIjOi7Up5PjKCv9NCpt+LoNFed0+cA7ecBbYwFz9syecBYXDVIuBRYWFWArKmOGDkspc+iaFjZHyBoJq448T5Z9jGiAfnu9tFBSCQXsqY2YFhYV8OBHd2agyeL1VIfRFfEutAtx5a/yBKQI1Fq+4huBkcbnSKCiEnsBTG8WwUJpC3YXRs/nbV0ev2n5RIVQsdlWuQHCHtOLnYMZGc5pDrBr+E4S+8v5NQaGe/tdBIR9qn8oCdadYm3ZWRbxV4UWvicpHFY4/FQEgO8Ic0oOcNMw0nYpeIJyfKcRgJCrs4QRznabQ8U/8whBqAU/ehwQ7EOWK2faXFL6dOXhQ7C+S48zCre84X6MUFyNeTHfjmfPE5lBUOMXlSQbhZpZ6L30VdlBhAr3xbH8YY6fvOMpIVgFW9zCw3yVWGn+Swv13rLgdUXk9ab+fmE9wGR2PPdLonys0+mib+CwgsIyTahwwWxgPEJODAL/St7Tt0xm7a0GAQ85T+DkKjXliplha4oOLWdFN9hMxkpqscgz/Tp/0ujRhwz62DslT+pQrHBl7J4axIHaKDUr4kvr8b6WTI88pm7/T7x/5q41Khtvx8TjdV2wizA/T43Gsfiu7Xq8LZUAGw2OWNkcwxM/JjD/YHY+7869cs7+126iUOSp/6T+eck3z34MU/vshhf9+SOG/n8m39O//tsIR8KfnQBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEUc3/AE0QEPKt7C22AAAAAElFTkSuQmCC",H6="/assets/project8-DwpjymJs.jpg",Pt={gunmetal:"#30343f",ghostWhite:"#fafaff",spaceCadet:"#1e2749",delftBlue:"#273469"},V6=k.div`
  padding: 50px 20px;
  color: ${Pt.ghostWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`,W6=k.h1`
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
`,Q6=k.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column for mobile */
  }
`,P1=k.div`
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`,Y6=k.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;

  ${P1}:hover & {
    transform: scale(0.90);
  }
`,K6=k.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,G6=k.div`
  display: flex;
  gap: 10px;
  margin-top: auto;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 5px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 5px;
  }
`,fd=k.a`
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
`,X6=k.h3`
  font-size: 1.5em;
  margin-bottom: 0px;
`,q6=k.p`
  font-size: 1em;
  line-height: 1.6;
`,J6=[{title:"MERA SAHAI: Mera Sahai Platform",description:"Played a pivotal role as a web developer in the development of the Mera Sahai platform, successfully developing and delivering assigned modules, and taking full responsibility for their implementation.",imageUrl:I6},{title:"DEHAZING OF MULTISPECTRAL REMOTE SENSING IMAGES",description:"Developed deep learning algorithms to enhance satellite images affected by haze, employing noise removal techniques and comparing their effectiveness with the Dark Object Subtraction method.",imageUrl:M6},{title:"REAL-TIME OBJECT DETECTION USING YOLO",description:"Implemented a real-time object detection system using YOLO, optimized for high accuracy and speed, processing live video feeds for immediate recognition and classification of objects.",imageUrl:F6},{title:"HUMAN POSE ESTIMATION",description:"Designed a system to detect and analyze human body postures from images and video feeds, focusing on accurately identifying key body points and interpreting movements, with applications in fitness.",imageUrl:b6},{title:"STUDENT PERFORMANCE ANALYSIS",description:"Conducted a comprehensive analysis of student performance using factors such as attendance, study habits, and socio-economic background, developing a predictive model to identify students at risk of underperforming.",imageUrl:$6},{title:"HEART DISEASE PREDICTION",description:"Developed a machine learning model to predict the likelihood of heart disease based on patient data, utilizing classification algorithms like Logistic Regression and Random Forest to enhance predictive accuracy.",imageUrl:B6},{title:"NAUKRI WEB SCRAPER",description:"Developed a web scraper to extract job listings from Naukri.com using Python and BeautifulSoup, collecting job titles, company names, locations, and other relevant details for further analysis.",imageUrl:U6},{title:"JOB DATA ANALYSIS",description:"Conducted an in-depth analysis of job market trends based on data collected from the Naukri web scraper, utilizing pandas and matplotlib to visualize job distribution, skills in demand, and salary trends across industries.",imageUrl:H6}],Z6=()=>f.jsxs(V6,{children:[f.jsx(W6,{children:"Projects"}),f.jsx(Q6,{children:J6.map((e,t)=>f.jsx(P1,{children:f.jsxs(K6,{children:[f.jsx(Y6,{src:e.imageUrl,alt:e.title}),f.jsx(X6,{children:e.title}),f.jsx(q6,{children:e.description}),f.jsxs(G6,{children:[e.demoLink&&f.jsx(fd,{href:e.demoLink,target:"_blank",children:"Demo"}),e.codeLink&&f.jsx(fd,{href:e.codeLink,target:"_blank",children:"Code"})]})]})},t))})]}),Ht={gunmetal:"#30343fff",ghostWhite:"#fafaffff",periwinkle:"#e4d9ffff",delftBlue:"#273469ff",spaceCadet:"#1e2749ff"},e5=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,t5=k.div`
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
`,n5=ee.forwardRef((e,t)=>{const[n,r]=ee.useState("Skills");ee.useEffect(()=>{T1.on("activateTab",o=>{r(o)})},[]);const i=()=>{switch(n){case"Skills":return f.jsx(cd,{});case"Certificates":return f.jsx(c6,{});case"Education":return f.jsx(x6,{});case"Experience":return f.jsx(D6,{});case"Projects":return f.jsx(Z6,{});default:return f.jsx(cd,{})}};return f.jsxs(e5,{id:"knowmore",children:[i(),f.jsxs(t5,{children:[f.jsxs(jr,{active:n==="Skills",onClick:()=>r("Skills"),children:[f.jsx(U2,{})," ",f.jsx("span",{children:"Skills"})]}),f.jsxs(jr,{active:n==="Certificates",onClick:()=>r("Certificates"),children:[f.jsx(b2,{})," ",f.jsx("span",{children:"Certificates"})]}),f.jsxs(jr,{active:n==="Education",onClick:()=>r("Education"),children:[f.jsx(H2,{})," ",f.jsx("span",{children:"Education"})]}),f.jsxs(jr,{active:n==="Experience",onClick:()=>r("Experience"),children:[f.jsx(F2,{})," ",f.jsx("span",{children:"Experience"})]}),f.jsxs(jr,{active:n==="Projects",onClick:()=>r("Projects"),children:[f.jsx(W2,{})," ",f.jsx("span",{children:"Projects"})]})]})]})}),r5=k.div`
    font-family: Arial, sans-serif;
`;function i5(){return f.jsxs(r5,{children:[f.jsx(y2,{}),f.jsx(Og,{}),f.jsx(n5,{}),f.jsx(E4,{}),f.jsx(A4,{})]})}tl.createRoot(document.getElementById("root")).render(f.jsx(Ae.StrictMode,{children:f.jsx(i5,{})}));
