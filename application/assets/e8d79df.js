(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{705:function(t,e,n){"use strict";n(282);var o=n(283);e.a=Object(o.a)("flex")},864:function(t,e,n){"use strict";n.r(e);var o=n(645),r=n(636),c=n(705),l=n(644),d={meta:{auth:{requiresAuth:!1}},layout:"home",data:function(){return{valid:!1,show1:!1,show2:!0,show3:!1,show4:!1,payload:{password:"password",username:"demo"},image:"https://images.squarespace-cdn.com/content/v1/5608c2dae4b0ffbc0ff092a2/1462484735802-94M1A977HJJEL2THCD2Q/ke17ZwdGBToddI8pDm48kLl6r9ydDU0pEbLAVM93WoUUqsxRUqqbr1mOJYKfIPR7IxQp-SzSi0mUVxNxPLQ2a8ST-OHudl8xFkQoit3yJpm7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dtBAdYz4rrMKLrjAsWFNRtjSprFKWBuEhUbdsZxltHXcCjLISwBs8eEdxAxTptZAUg/Medical-physician-doctor-hands.png?format=2500w",rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}}}},computed:{},methods:{login:function(){this.$store.dispatch("_authenticate_then_login",this.payload)},nativateToHere:function(t){this.$router.push("/"+t)}},beforeMount:function(){console.log(this.$store.getters.isLoggedIn),this.$store.getters.isLoggedIn&&this.$router.push("/")}},h=n(43),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"fill-height",attrs:{fluid:""}},[e(l.a,{staticClass:"justify-center",attrs:{align:"center",justify:"center","no-gutters":""}},[e(o.a,{staticClass:"d-flex justify-space-around",attrs:{cols:"12"}},[e(c.a,{staticClass:"d-flex align-center justify-end flex-column",attrs:{xs6:""}},[e("div",{staticClass:"font-weight-black"},[t._v("\n          Made by\n          "),e("a",{attrs:{href:"https://github.com/ospic",target:"_blank"}},[t._v("Ospic ")]),t._v("\n          as an open source Hospital management system\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://app.ospicx.com/",target:"_blank"}},[t._v("Ospic HMS")]),t._v("\n          Copyright © "+t._s((new Date).getFullYear())+" The Apache Software\n          Foundation, Licensed under the\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[t._v("\n            Apache License, Version 2.0.")]),t._v(". Documentation can be found\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://docs.ospicx.com/welcome",target:"_blank"}},[t._v("here")]),t._v("\n          and you can get to this app repository\n\n          "),e("a",{staticStyle:{color:"blue","text-decoration":"underline"},attrs:{href:"https://github.com/ospic/webapp",target:"_blank"}},[t._v("here")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);