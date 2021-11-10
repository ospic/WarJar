(window.webpackJsonp=window.webpackJsonp||[]).push([[107,47],{626:function(t,e,r){"use strict";r.r(e);var l={props:{staff:{type:Object,default:null}}},n=r(48),c=r(52),o=r.n(c),m=r(156),f=r(254),v=r(90),d=r(601),_=r(137),h=r(205),k=r(157),y=r(262),C=r(36),x=r(602),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-1 pa-0",attrs:{flat:"",elevation:"1",color:"grey lighten-4"}},[r("v-list-item",{attrs:{ripple:"staff.id",to:"/staffs/"+t.staff.id}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:" font-weight-black ",domProps:{innerHTML:t._s(null==t.staff.fullName?t.staff.username:t.staff.fullName)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"light-blue--text font-italic",domProps:{innerHTML:t._s(t.staff.email)}})],1),t._v(" "),r("v-list-item-avatar",{attrs:{size:"60"}},[r("v-img",{attrs:{src:null==t.staff.imageUrl?t.thumbnail:t.staff.imageUrl}})],1)],1),t._v(" "),r("v-card-text",{staticClass:"ma-0 pa-0"},[r("v-row",{staticClass:"ma-0 pa-0",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mt-0 pa-0",attrs:{cols:"12",sm:"12",md:"7",align:"center"}},[r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-facebook")])],1),t._v(" "),r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"purple darken-4",small:""}},[t._v("mdi-instagram")])],1),t._v(" "),r("v-btn",{attrs:{small:"",fab:"",text:""}},[r("v-icon",{attrs:{color:"blue",small:""}},[t._v("mdi-twitter")])],1)],1),t._v(" "),r("v-col",{staticClass:"mt-2 ",attrs:{cols:"12",sm:"12",align:"center",md:"5"}},[r("v-icon",{staticClass:"ml-4",attrs:{color:"blue","x-small":""}},[t._v("mdi-check-circle")]),t._v(" "),r("v-icon",{attrs:{color:"green","x-small":""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:m.a,VCard:f.a,VCardText:v.c,VCol:d.a,VIcon:_.a,VImg:h.a,VListItem:k.a,VListItemAvatar:y.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VRow:x.a})},854:function(t,e,r){"use strict";r.r(e);r(11),r(10),r(7),r(5),r(13),r(9),r(14);var l=r(0),n=r(2),c=(r(20),r(626)),o=r(83);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{StaffCard:c.default},data:function(){return{search:"",updating:!1,headers:[{text:"Image",value:"image"},{text:"User/name",value:"fullName",sortable:!1},{text:"Department",value:"department"},{text:"Email",value:"email"},{text:"Phone",value:"contacts"},{text:"Role",value:"role"},{text:"Active ?",value:"isActive",sortable:!0},{text:"Available ?",value:"isAvailable",sortable:!0}],items:[{title:"Edit",icon:"lead-pencil",color:"blue"},{title:"Delete",icon:"delete",color:"red"}],departmentsstaffs:[],title:null}},methods:{fetchDepartmentStaffs:function(t,title){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.title=title,e.updating=!0,r.next=4,e.$api.$get("staffs/dep/".concat(t)).then((function(t){null!=t&&(e.departmentsstaffs=t,e.updating=!1)})).catch((function(t){e.updating=!1,console.log(t)}));case 4:case"end":return r.stop()}}),r)})))()},handleClick:function(t){this.$router.push("staffs/"+t.id)}},created:function(){this.fetchDepartmentStaffs(1)},beforeCreate:function(){this.$store.dispatch("retrieve_departments")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({staffs:"staffs",departments:"departments"}))},v=f,d=r(48),_=r(52),h=r.n(_),k=r(257),y=r(254),C=r(90),x=r(265),V=r(601),w=r(603),O=r(137),j=r(255),S=r(602),A=r(594),T=r(815),D=r(884),P=r(880),I=r(114),L=r(76),$=r(599),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/staffs"}},[t._v(t._s(t.$t("label.breadcrumb.staffs")))])],1),t._v(" "),r("v-card",[r("v-toolbar",{staticClass:"primary",attrs:{flat:"",dark:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card-title",[null!=t.title?r("h5",[r("v-icon",{attrs:{color:"blue",left:""}},[t._v("mdi-circle")]),t._v(" "+t._s(t.title)+"\n              Department Staff's\n            ")],1):r("h5",[t._v(t._s(t.$t("label.titles.staffs")))])])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[r("v-text-field",{staticClass:"mt-3",attrs:{"append-icon":"search",label:"Enter search text ...",rounded:"",dense:"",outlined:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),r("v-card-text",{staticClass:" pa-0"},[r("v-tabs",{attrs:{"background-color":"primary","slider-color":"blue",dark:"","show-arrows":"true"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.departments,(function(e){return r("v-tab",{key:e.id,staticClass:"ml-0 pl-0",staticStyle:{"text-align":"left"},attrs:{left:"","reverse-trasition":"true"},on:{click:function(r){return t.fetchDepartmentStaffs(e.id,e.name)}}},[r("v-icon",{attrs:{left:"",color:"blue"}},[t._v("\n            mdi-circle-medium\n          ")]),t._v("\n          "+t._s(e.name)+"\n        ")],1)})),t._v(" "),t._l(t.departments,(function(e){return r("v-tab-item",{key:e.id},[r("div",[null==t.title||t.isMdAndUp?t._e():r("h5",{staticClass:"primary--text"},[t._v("\n              "+t._s(t.title)+" Department Staff's\n            ")]),t._v(" "),t.updating?r("v-progress-linear",{staticClass:"mb-1",attrs:{indeterminate:"",color:"cyan"}}):r("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.departmentsstaffs,search:t.search,width:"100%"},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"item.image",fn:function(e){var l=e.item;return[r("v-avatar",[r("img",{attrs:{src:null===l.imageUrl?t.thumbnail:l.imageUrl,alt:"Staff profile image"}})])]}},{key:"item.fullName",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(null==r.fullName?r.user.username:r.fullName)+"\n              ")]}},{key:"item.department",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(r.department.name)+"\n              ")]}},{key:"item.email",fn:function(e){var r=e.item;return[t._v("\n                "+t._s(null===r.email?r.user.email:r.email)+"\n              ")]}},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,n=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",n,!1),l),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.isAvailable",fn:function(e){return[e.item.isAvailable?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,n=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",n,!1),l),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Available")])]):r("div")]}},{key:"item.role",fn:function(e){var l=e.item;return t._l(l.user.roles,(function(e){return r("v-chip",{key:e.id,staticClass:"primary",attrs:{small:"",dense:""}},[t._v("\n                  "+t._s(e.name.toLowerCase())+"\n                ")])}))}}],null,!0)})],1)])}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VAvatar:k.a,VCard:y.a,VCardText:C.c,VCardTitle:C.d,VChip:x.a,VCol:V.a,VDataTable:w.a,VIcon:O.a,VProgressLinear:j.a,VRow:S.a,VSpacer:A.a,VTab:T.a,VTabItem:D.a,VTabs:P.a,VTextField:I.a,VToolbar:L.a,VTooltip:$.a})}}]);