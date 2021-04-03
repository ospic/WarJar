(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{826:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(37),n(41),n(28),{components:{"service-card":n(177).default},data:function(){return{staffdata:null,staffpatients:[],services:[],allservices:null,tab:null}},methods:{getStaffById:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/")).then((function(e){t.staffdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getStaffPatinets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/".concat(t.$route.params.id,"/patients")).then((function(e){t.staffpatients=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAcitveAssignedServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?active=true")).then((function(e){null!==e&&(t.services=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getHistoricalAssignedServices:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("consultations/staff/".concat(t.$route.params.id,"/?")).then((function(e){null!==e&&(t.allservices=e)})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handleClick:function(t){this.$router.push("/consultations/"+t.id)},updatePagination:function(t){console.log(t)}},created:function(){this.getStaffById(),this.getAcitveAssignedServices()},computed:{desserts:{get:function(){return[{name:"Name",value:null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName},{name:"Role",value:"undefined"==this.staffdata.user?"No role":this.staffdata.user.roles[0].name.toLowerCase()},{name:"Depatment",value:null==this.staffdata.department?"Un-Assigned":this.staffdata.department.name},{name:"Work Shift",value:"6:00AM - 12:01PM"},{name:"Location",value:null==this.staffdata.department?"Not available":this.staffdata.department.extraId},{name:"Is Staff",value:"undefined"==this.staffdata.user.isStaff?"":this.staffdata.user.isStaff},{name:"Level",value:null==this.staffdata.level?"None":this.staffdata.level},{name:"Phone",value:null==this.staffdata.contacts?"None ":this.staffdata.contacts},{name:"Email",value:this.staffdata.email},{name:"Joining Date",value:(new Date).toISOString().slice(0,10)}]}}}}),c=n(8),o=n(13),f=n.n(o),v=n(269),d=n(262),m=n(7),h=n(713),_=n(706),w=n(204),C=n(264),x=n(717),k=n(389),y=n(722),S=n(736),$=n(734),V=n(397),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.staffdata?n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{attrs:{to:"/staffs"}},[t._v("Staffs")]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/staffs/"+this.$route.params.id}},[t._v(t._s(null==this.staffdata.fullName?this.staffdata.username:this.staffdata.fullName))])],1):t._e(),t._v(" "),n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[null==t.staffdata?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5",size:"16"}}):n("v-card",{attrs:{flat:"",tile:"",outlined:""}},[n("v-card-title",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-avatar",{attrs:{size:"82"}},[n("img",{attrs:{alt:"user",height:"100%",width:"100%",src:null==t.staffdata.imageUrl?"https://boylancode.com/wp-content/uploads/2018/09/Man-Placeholder-Headshot.png":t.staffdata.imageUrl}})])],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center mb-2"},[n("v-icon",{staticClass:"red--text lighten-4 mx-1"},[t._v("mdi-account-lock")]),t._v(" "),n("v-icon",{staticClass:"blue--text lighten-4 mx-1"},[t._v("mdi-camera")]),t._v(" "),n("v-icon",{staticClass:"orange--text mx-1"},[t._v("mdi-pencil")])],1),t._v(" "),n("v-card-text",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[t._l(t.desserts,(function(e){return n("tr",{key:e.name},[n("td",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))])])})),t._v(" "),n("tr")],2)]},proxy:!0}])})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-tabs",{staticClass:"elevation-2",attrs:{"slider-color":"secondary","background-color":"primary","show-arrows":this.$vuetify.breakpoint.mobile,color:"secondary",left:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"ffont-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-eye")]),t._v("Profile")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-account")]),t._v("Payroll")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-medical-bag")]),t._v("\n              Leaves")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-history")]),t._v(" Attandence")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Document")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal"},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v(" Timeline")],1)]),t._v(" "),n("v-tab",{staticClass:"font-weight-normal",on:{click:t.getHistoricalAssignedServices}},[n("span",[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("Consultations History")],1)])],1),t._v(" "),n("v-tabs-items",{attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Profile")])]),t._v(" "),n("v-tab-item",[n("service-card",{attrs:{services:t.services}})],1),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Leaves")])]),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"ma-8"},[t._v("Attendance")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Document")])]),t._v(" "),n("v-tab-item",[n("h1",{staticClass:"ma-8"},[t._v("Timeline")])]),t._v(" "),n("v-tab-item",[null==t.allservices?n("v-progress-circular"):n("service-card",{attrs:{services:t.allservices}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAvatar:v.a,VCard:d.a,VCardText:m.c,VCardTitle:m.d,VCol:h.a,VContainer:_.a,VIcon:w.a,VProgressCircular:C.a,VRow:x.a,VSimpleTable:k.a,VTab:y.a,VTabItem:S.a,VTabs:$.a,VTabsItems:V.a})}}]);