(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{824:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(37),r(28),r(152)),o={components:{"card-info":r(288).default,StaffCard:l.default},data:function(){return{department:null,staffs:null}},methods:{fetchdepartmentdata:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("departments/".concat(t.$route.params.id,"/")).then((function(e){t.department=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchdepartmentstaffs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("staffs/dep/".concat(t.$route.params.id,"/")).then((function(e){t.staffs=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},reUpdateProfile:function(){this.fetchdepartmentdata(),this.fetchdepartmentstaffs()}},created:function(){this.reUpdateProfile()},computed:{username:function(){return null==this.department?"":this.department.name}}},c=r(8),d=r(13),m=r.n(d),f=r(709),v=r(262),h=r(7),_=r(713),C=r(706),w=r(215),k=r(168),y=r(268),V=r(5),T=r(264),x=r(717),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.department?r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("router-link",{attrs:{to:"/departments"}},[t._v("Departments")]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/departments/"+this.$route.params.id}},[t._v(t._s(t.department.name))])],1):t._e(),t._v(" "),r("v-container",{attrs:{fluid:""}},[null==t.staffs||null==t.department?r("v-progress-circular",{attrs:{indeterminate:"",size:"50",color:"indigo"}}):r("v-card",{staticClass:"pa-2"},[r("v-card-title",[r("div",[null!=t.department?r("table",{staticClass:"pa-0",staticStyle:{width:"100%","text-align":"start"},attrs:{summary:"Patient infos"}},[t.department.id?r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"name"}},[t._v("\n                Department name:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.name))])])]):t._e(),t._v(" "),null!=t.department.parent?r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"parentname"}},[t._v("\n                Child of : \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.parent.name))])])]):t._e(),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"date"}},[t._v("\n                Opening date:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.openingDate)+" ")])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-black",attrs:{id:"info"}},[t._v("\n                Descriptions:  \n              ")]),t._v(" "),r("td",[r("small",[t._v(t._s(t.department.descriptions)+" ")])])])]):t._e()])]),t._v(" "),r("v-card-text",[r("h3",[r("strong",[t._v("Members:")])]),t._v(" "),t.staffs.length>0?r("v-row",{attrs:{"no-gutters":""}},t._l(t.staffs,(function(e,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"12",md:"2"}},[r("v-card",{staticClass:"ma-1",attrs:{outlined:"",flat:"",to:"/staffs/"+e.id}},[r("v-list-item",{key:e.id},[r("v-list-item-avatar",[r("v-img",{attrs:{src:null==e.imageUrl?"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light":e.imageUrl}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:" font-weight-medium light-blue--text",domProps:{innerHTML:t._s(null==e.fullName?e.username:e.fullName)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"font-italic",domProps:{innerHTML:t._s(e.user.roles[0].name.toLowerCase())}})],1)],1)],1)],1)})),1):r("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v("\n          No staff is assigned in this department\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAlert:f.a,VCard:v.a,VCardText:h.c,VCardTitle:h.d,VCol:_.a,VContainer:C.a,VImg:w.a,VListItem:k.a,VListItemAvatar:y.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VProgressCircular:T.a,VRow:x.a})}}]);