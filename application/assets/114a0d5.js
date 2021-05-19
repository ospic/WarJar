(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{691:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(11),n(9),n(12);var r=n(0),c=(n(44),n(6),n(77));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{charges:n(257).default},props:{consultationsservices:{type:Array,default:null},transaction:{type:Object,default:null},isActive:{type:Boolean,default:!0}},data:function(){return{select:null,dialog:!1,service_transactions:null,type:"service",service:null,payload:{},data:{id:null,quantity:0,type:"service"},headers:[{text:"ID",value:"id"},{text:"Service",value:"medicalServiceName",sortable:!0},{text:"Department",value:"departmentName"},{text:"Amount",value:"amount",sortable:!1},{text:"Currency",value:"currencyCode"},{text:"Reversed",value:"isReversed",sortable:!0},{text:"Transaction Date",value:"transactionDate"}]}},methods:{fetch_medical_services:function(){this.$store.dispatch("get_medical_services")},fetch_medical_types:function(e){this.$store.dispatch("get_medical_services_by_type",e)},update_service:function(e){this.data.id=parseInt(e)},save:function(){var e=this;this.payload.route=this.$route.params.id,this.data.quantity=parseInt(1),this.payload.data=this.data,this.$store.dispatch("initiate_medical_transaction",this.payload).then((function(t){setTimeout((function(){return e.$emit("update")}),e.delay_seconds)})),this.dialog=!1}},computed:o(o({},Object(c.b)({medicalservices:"medicalservices",servicetypes:"servicetypes"})),{},{transactions:function(){return this.transaction.transactions.filter((function(e){return null!==e.medicalServiceName}))}})},v=n(35),m=n(47),f=n.n(m),h=n(145),y=n(232),_=n(87),O=n(563),j=n(574),x=n(561),w=n(125),k=n(233),C=n(156),V=n(72),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[e.isActive?n("v-btn",e._g(e._b({staticClass:"button",attrs:{dark:""}},"v-btn",c,!1),r),[n("v-icon",{attrs:{small:"",left:""}},[e._v("mdi-plus")]),e._v("Add patient service")],1):e._e()]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Add new service's received by this patient")]),e._v(" "),n("v-card-text",[n("v-select",{attrs:{items:e.servicetypes,"item-text":"name","item-value":"id",chips:"","small-chips":"",rules:[function(e){return!!e||"You must select one to continue!"}],label:"Medical services",required:"","persistent-hint":"","single-line":""},on:{click:e.fetch_medical_service_types,change:e.fetch_medical_types},model:{value:e.service,callback:function(t){e.service=t},expression:"service"}}),e._v(" "),n("v-select",{attrs:{items:e.medicalservices,"item-text":"name","item-value":"id",chips:"","small-chips":"",disabled:e.medicalservices.length<=0,rules:[function(e){return!!e||"You must select one to continue!"}],label:e.medicalservices.length>0?"Medical services":"Selected category have no medical services",required:"","persistent-hint":"","single-line":""},on:{change:e.update_service},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),n("v-btn",{staticClass:"warning",on:{click:e.save}},[e._v("Save")])],1)],1)],1),e._v(" "),n("div",[null==e.transaction?n("v-progress-linear",{attrs:{indeterminate:""}}):n("v-container",{staticClass:"ma-2",attrs:{fluid:""}},[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:e.headers,items:e.transactions,"mobile-breakpoint":"100"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardText:_.c,VContainer:O.a,VDataTable:j.a,VDialog:x.a,VIcon:w.a,VProgressLinear:k.a,VSelect:C.a,VToolbar:V.a})}}]);