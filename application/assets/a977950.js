(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{770:function(t,e,o){t.exports=o.p+"img/body_background.b84d4c7.jpg"},834:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(10),o(20),{data:function(){return{contact:{},edit:!1,messages:[{from:"You",message:"Sure, I'll see you later.",time:"10:42am",color:"deep-purple lighten-1"},{from:"John Doe",message:"Yeah, sure. Does 1:00pm work?",time:"10:37am",color:"green"},{from:"You",message:"Did you still want to grab lunch today?",time:"9:47am",color:"deep-purple lighten-1"}]}},methods:{viewusedata:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("contacts/".concat(t.$route.params.id,"/")).then((function(e){t.contact=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},isEmpty:function(t){return 0===Object.keys(t).length},submit:function(){var t=this,e=this.contact;delete e.patient;var o={id:e.id,contact:e};this.$store.dispatch("updatepatientcontacts",o).then((function(){t.edit=!1}))}},created:function(){this.viewusedata()},computed:{isDataLoaded:function(){return this.isEmpty(this.contact)},itemThumbnail:function(){return this.contact.patient.patientPhoto},username:function(){return this.contact.patient.first_name},patient:function(){return this.$store.getters.patient(parseInt(this.$route.params.id))}}}),c=o(35),l=o(47),v=o.n(l),d=o(576),m=o(235),_=o(144),h=o(232),f=o(87),w=o(604),y=o(573),x=o(564),C=o(236),k=o(635),V=o(124),$=o(184),R=o(657),T=o(574),D=o(566),I=o(106),P=o(628),L=o(629),j=o(88),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.patient?n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.$vuetify.breakpoint.mobile,expression:"!this.$vuetify.breakpoint.mobile"}],attrs:{to:"/patients"}},[t._v("Patients")]),t._v(" "),n("router-link",{attrs:{to:"/patients/"+this.$route.params.id}},[t._v(t._s(t.patient.name))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/patients"}},[t._v("Add contact")])],1):t._e(),t._v(" "),n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-card",{staticClass:"pa-2",attrs:{tile:""}},[n("v-card-title",[n("h3",[t._v("View contacts")])]),t._v(" "),n("v-divider",{staticClass:"mx-2"}),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"","order-md2":"","order-sm2":""}},[t.isDataLoaded?t._e():n("v-row",{attrs:{justify:"space-around","no-gutters":""}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"3"}},[n("v-card",{attrs:{ro:""}},[n("v-img",{attrs:{height:"200px",src:o(770)}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-toolbar-title",{staticClass:"title primary--text pl-0"},[t._v("\n                      "+t._s(t.patient.name)+" Contacts\n                    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{small:"",fab:""},on:{click:function(e){t.edit=!t.edit}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)],1),t._v(" "),n("v-card-title",{staticClass:"white--text mt-8"},[n("v-avatar",{attrs:{size:"56",color:"white"}},[n("v-icon",{staticClass:"primary--text"},[t._v("mdi-phone-classic")])],1),t._v(" "),n("p",{staticClass:"ml-3",domProps:{innerHTML:t._s(t.username)}})],1)],1),t._v(" "),n("v-card-text",[n("v-timeline",{attrs:{"align-top":"",dense:""}},[n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("City")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.contact.city,callback:function(e){t.$set(t.contact,"city",e)},expression:"contact.city"}}):n("div",[t._v(t._s(t.contact.city))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("State")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.contact.state,callback:function(e){t.$set(t.contact,"state",e)},expression:"contact.state"}}):n("div",[t._v(t._s(t.contact.state))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Location")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.contact.physical_address,callback:function(e){t.$set(t.contact,"physical_address",e)},expression:"contact.physical_address"}}):n("div",[t._v(t._s(t.contact.physical_address))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Email Adress")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:"",type:"email"},model:{value:t.contact.email_address,callback:function(e){t.$set(t.contact,"email_address",e)},expression:"contact.email_address"}}):n("div",[t._v(t._s(t.contact.email_address))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Home Phone")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.contact.home_phone,callback:function(e){t.$set(t.contact,"home_phone",e)},expression:"contact.home_phone"}}):n("div",[t._v(t._s(t.contact.home_phone))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Mobile Phone")])]),t._v(" "),t.edit?n("v-text-field",{attrs:{dense:""},model:{value:t.contact.work_phone,callback:function(e){t.$set(t.contact,"work_phone",e)},expression:"contact.work_phone"}}):n("div",[t._v(t._s(t.contact.work_phone))])],1)]),t._v(" "),n("v-timeline-item",{attrs:{color:"primary",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Is Reachable")]),t._v(" "),n("v-checkbox",{attrs:{required:"",readonly:!t.edit},model:{value:t.contact.isReachable,callback:function(e){t.$set(t.contact,"isReachable",e)},expression:"contact.isReachable"}})],1)])]),t._v(" "),t.edit?n("v-btn",{staticClass:"primary",attrs:{block:""},on:{click:t.submit}},[t._v("Submit")]):t._e()],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[t.edit?n("v-card",{attrs:{outlined:""}},[n("v-card-title",[n("h3",[t._v("Your edits")])]),t._v(" "),n("v-card-text",[n("v-timeline",{attrs:{"align-top":"",dense:""}},[n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("City")])]),t._v(" "),n("div",[t._v(t._s(t.contact.city))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("State")])]),t._v(" "),n("div",[t._v(t._s(t.contact.state))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Location")])]),t._v(" "),n("div",[t._v(t._s(t.contact.physical_address))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Email Adress")])]),t._v(" "),n("div",[t._v(t._s(t.contact.email_address))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Home Phone")])]),t._v(" "),n("div",[t._v(t._s(t.contact.home_phone))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Mobile Phone")])]),t._v(" "),n("div",[t._v(t._s(t.contact.work_phone))])])]),t._v(" "),n("v-timeline-item",{attrs:{color:"info",small:""}},[n("div",[n("div",{staticClass:"font-weight-normal"},[n("strong",[t._v("Is Reachable")]),t._v(" "),n("v-checkbox",{attrs:{color:"info",required:"",readonly:""},model:{value:t.contact.isReachable,callback:function(e){t.$set(t.contact,"isReachable",e)},expression:"contact.isReachable"}})],1)])])],1)],1)],1):t._e()],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAppBar:d.a,VAvatar:m.a,VBtn:_.a,VCard:h.a,VCardText:f.c,VCardTitle:f.d,VCheckbox:w.a,VCol:y.a,VContainer:x.a,VDivider:C.a,VFlex:k.a,VIcon:V.a,VImg:$.a,VLayout:R.a,VRow:T.a,VSpacer:D.a,VTextField:I.a,VTimeline:P.a,VTimelineItem:L.a,VToolbarTitle:j.b})}}]);