(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{348:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n}},7730:function(e,t,r){Promise.resolve().then(r.bind(r,2925))},2925:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7437),s=r(5436),a=r.n(s),o=r(348),l=r(1872);function d(){async function e(){let e=document.getElementById("name").value,t=document.getElementById("email").value,r=document.getElementById("password").value,n=document.getElementById("cpassword").value;if(!1===/\S+@\S+\.\S+/.test(t)){alert("Invalid email");return}if(""===r||""===n||r.length<8){alert("Password should be atleast 8 characters long");return}if(r!==n){alert("Passwords don't match");return}{console.log(e,t,r);let n=JSON.parse(localStorage.getItem("db_data")||"[]"),s=n.filter(e=>e.email===t);if(s.length>0){alert("Email already exists");return}try{let s={_id:(0,l.Z)(),username:e,email:t,password:r,notes:[],firstname:"",lastname:"",age:"",ph_no:"",gender:""};n.push(s),localStorage.setItem("db_data",JSON.stringify(n))}catch(e){console.error(e)}window.location.href="/login"}}return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:" relative container mx-auto min-h-body flex flex-col items-center justify-center ",children:[(0,n.jsx)("div",{className:" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4",children:(0,n.jsxs)("p",{className:"text-btn_add-600",children:["Homepage\xa0/\xa0",(0,n.jsx)("span",{className:" text-btn_add-700 font-semibold ",children:"Signup Page"})," "]})}),(0,n.jsxs)("div",{className:"w-96 mobile:scale-90 laptop:scale-100 h-auto rounded-lg border-2 border-btn_add-700 overflow-hidden ",children:[(0,n.jsxs)("div",{className:" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2",children:[(0,n.jsx)("span",{className:"absolute left-4 top-2 text-btn_add-800 font-semibold text-sm",children:"Signup"}),(0,n.jsx)("span",{className:"pr-1 text-green-400",children:"●"}),(0,n.jsx)("span",{className:"pr-1 text-blue-400 ",children:"●"}),(0,n.jsx)("span",{className:"pr-1 text-red-400 ",children:"●"})]}),(0,n.jsxs)("div",{className:"form flex items-center justify-center text-btn_add-800 text-lg font-mono font-semibold flex-col ",children:[(0,n.jsx)("div",{className:"text-4xl p-4 pt-6",children:(0,n.jsx)("span",{className:(0,o.Z)("text-btn_add-800",a().className),children:"Sign up"})}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{className:"m-1 ml-2 pointer",htmlFor:"name",children:"Username"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",className:"m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor"})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{className:"m-1 ml-2 pointer",htmlFor:"email",children:"Email"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",className:"m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor"})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{className:"m-1 ml-2 pointer",htmlFor:"password",children:"Password"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"password",id:"password",name:"password",className:"m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor"})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{className:"m-1 ml-2 pointer",htmlFor:"cpassword",children:"Confirm Password"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"password",id:"cpassword",name:"cpassword",className:"m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center w-80 mt-5 mb-6",children:[(0,n.jsx)("button",{className:"m-2 bg-green-400 w-32 h-10 rounded-xl pointer hover:bg-green-300",onClick:e,children:"Register"}),(0,n.jsx)("button",{className:"m-2 bg-btn_add-500 w-32 h-10 rounded-xl pointer hover:bg-btn_add-400",onClick:()=>{window.location.href="/login"},children:"Login"})]})]})]})]})})}},5436:function(e){e.exports={style:{fontFamily:"'__Ubuntu_0c1ffc', '__Ubuntu_Fallback_0c1ffc'",fontWeight:700,fontStyle:"normal"},className:"__className_0c1ffc"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,d={},i=null,c=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:c,props:d,_owner:o.current}}t.jsx=d,t.jsxs=d},7437:function(e,t,r){"use strict";e.exports=r(622)},1872:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return i}});let s="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var a={randomUUID:s};let o=new Uint8Array(16);function l(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}let d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));var i=function(e,t,r){if(a.randomUUID&&!t&&!e)return a.randomUUID();e=e||{};let n=e.random||(e.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}(n)}}},function(e){e.O(0,[971,596,744],function(){return e(e.s=7730)}),_N_E=e.O()}]);