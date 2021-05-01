(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{686:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(6),r(11),r(9),r(12);var c=r(0),n=r(77);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var o={components:{charges:r(256).default},props:{consultationsservices:{type:Array,default:null},transaction:{type:Object,default:null},isActive:{type:Boolean,default:!0}},data:function(){return{select:null,dialog:!1,service_transactions:null,type:"service",service:null,headers:[{text:"ID",value:"id"},{text:"Service",value:"medicalServiceName",sortable:!0},{text:"Department",value:"departmentName"},{text:"Amount",value:"amount",sortable:!1},{text:"Currency",value:"currencyCode"},{text:"Reversed",value:"isReversed",sortable:!0},{text:"Transaction Date",value:"transactionDate"}]}},methods:{fetch_medical_services:function(){this.$store.dispatch("get_medical_services")},fetch_medical_types:function(e){console.log(e),this.$store.dispatch("get_medical_services_by_type",e)},save:function(){this.$store.dispatch("initiate_medical_transaction",{id:this.$route.params.id,services:this.select,type:this.type}),this.dialog=!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)({medicalservices:"medicalservices",servicetypes:"servicetypes"}))},v=r(34),d=r(47),m=r.n(d),f=r(143),h=r(231),_=r(87),y=r(560),O=r(571),j=r(558),x=r(124),w=r(232),k=r(174),C=r(69),component=Object(v.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var c=t.on,n=t.attrs;return[e.isActive?r("v-btn",e._g(e._b({staticClass:"button",attrs:{dark:""}},"v-btn",n,!1),c),[r("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-plus")]),e._v("Add patient service")],1):e._e()]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Add new service's received by this patient")]),e._v(" "),r("v-card-text",[r("v-select",{attrs:{items:e.servicetypes,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Medical services",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_medical_service_types,change:e.fetch_medical_types},model:{value:e.service,callback:function(t){e.service=t},expression:"service"}}),e._v(" "),r("v-select",{attrs:{items:e.medicalservices,"item-text":"name","item-value":"id",chips:"","small-chips":"",disabled:e.medicalservices.length<=0,rules:[function(e){return!!e||"You must select one to continue!"}],label:e.medicalservices.length>0?"Medical services":"Selected category have no medical services",required:"",multiple:"","persistent-hint":"","single-line":""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),r("v-btn",{staticClass:"warning",on:{click:e.save}},[e._v("Save")])],1)],1)],1),e._v(" "),r("div",[null==e.transaction?r("v-progress-linear",{attrs:{indeterminate:""}}):r("v-container",{staticClass:"ma-2",attrs:{fluid:""}},[r("v-data-table",{staticClass:"default",attrs:{dense:"",headers:e.headers,items:e.transaction.transactions.filter((function(e){return null===e.medicineName})),"mobile-breakpoint":"100"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardText:_.c,VContainer:y.a,VDataTable:O.a,VDialog:j.a,VIcon:x.a,VProgressLinear:w.a,VSelect:k.a,VToolbar:C.a})}}]);