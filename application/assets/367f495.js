(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{793:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(27),{components:{"beds-list":r(287).default},data:function(){return{ward:null,total:0}},created:function(){this._retrieve_ward()},methods:{_retrieve_ward:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("wards/".concat(t.$route.params.id,"/")).then((function(e){t.ward=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},_addmorebeds:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("beds/list/",{wardId:t.$route.params.id,numberOfBeds:t.total}).then((function(e){null!==e&&t._retrieve_ward()})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},computed:{}}),c=r(8),d=r(13),l=r.n(d),v=r(168),m=r(262),w=r(710),f=r(703),_=r(263),h=r(714),k=r(705),x=r(62),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.ward?r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.$vuetify.breakpoint.mobile,expression:"!this.$vuetify.breakpoint.mobile"}],attrs:{to:"/inventory"}},[t._v("Inventory")]),t._v(" "),r("router-link",{attrs:{to:"/inventory/ward"}},[t._v("Wards")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/inventory/ward"}},[t._v(t._s(t.ward.name))])],1):t._e(),t._v(" "),r("v-card",{staticClass:"mx-auto"},[r("v-container",{attrs:{fluid:""}},[r("div",[r("v-row",{attrs:{"no-gutters":""}},[r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-text-field",{attrs:{type:"number",outlined:"",dense:"","hide-details":"",placeholder:"No. of beds to add"},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-btn",{staticClass:"primary mt-1 ml-2",attrs:{small:"",shaped:""},on:{click:function(e){return e.stopPropagation(),t._addmorebeds()}}},[t._v("Add more beds")])],1)],1)],1),t._v(" "),null==t.ward?r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):r("beds-list",{attrs:{ward:t.ward}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:m.a,VCol:w.a,VContainer:f.a,VProgressLinear:_.a,VRow:h.a,VSpacer:k.a,VTextField:x.a})}}]);