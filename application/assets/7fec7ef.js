(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{782:function(e,t,n){"use strict";n.r(t);n(10),n(7),n(6),n(11),n(12);var o=n(0),r=(n(41),n(33),n(78),n(44),n(9),n(28),n(77));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{focus:"",dates:[],type:"month",time:null,menu:!1,menu2:!1,modal2:!1,valid:!0,dialog:!1,nowDate:(new Date).toISOString().slice(0,10),today:(new Date).toISOString(),timeNow:(new Date).toTimeString().split(" ")[0],typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],event:{name:null,startDate:null,startTime:null,endDate:null,endTime:null,timed:!0,departmentId:null},colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$refs.calendar.checkChange(),this.$store.dispatch("get_calendar_events")},methods:{save_event:function(){var e=this;this.event.startDate=this.dates[0],this.event.endDate=this.dates[1],this.$refs.form.validate()&&this.$store.dispatch("create_calendar_event",this.event).then((function(){setTimeout((function(){return e.$store.dispatch("get_calendar_events")}),e.delay_seconds),setTimeout((function(){return e.focus=e.focus+" "}),e.delay_seconds)})),this.$refs.form.reset(),this.dialog=!1},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,o=e.event,r=function(){t.selectedEvent=o,t.selectedElement=n.target,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(e){for(var t=e.start,n=e.end,o=[],r=new Date("".concat(t.date,"T00:00:00")),l=new Date("".concat(n.date,"T23:59:59")),c=(l.getTime()-r.getTime())/864e5,v=this.rnd(c,c+20),i=0;i<v;i++){var d=0===this.rnd(0,3),m=this.rnd(r.getTime(),l.getTime()),f=new Date(m-m%9e5),h=9e5*this.rnd(2,d?288:8),_=new Date(f.getTime()+h);o.push({name:this.names[this.rnd(0,this.names.length-1)],start:f,end:_,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!d})}this.events=this.fevents},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a}},computed:c(c({},Object(r.b)({eventsa:"events"})),{},{fevents:function(){var e=[];return this.eventsa.forEach((function(t){e.push({name:t.name,start:new Date(t.start),end:new Date(t.end),color:t.color,timed:t.timed})})),e}})},d=n(35),m=n(47),f=n.n(m),h=n(145),_=n(778),y=n(232),k=n(87),w=n(603),x=n(572),T=n(774),O=n(779),D=n(561),C=n(586),V=n(125),E=n(237),$=n(146),j=n(46),S=n(243),P=n(573),M=n(70),I=n(565),L=n(106),F=n(71),H=n(88),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb  "},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/calendar"}},[e._v("Working calendar")])],1),e._v(" "),n("v-card",[n("v-toolbar",{attrs:{dark:"",flat:"",color:"primary"}},[n("v-toolbar-title",[n("strong",[e._v("Events")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"button"},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v(" new events")],1)]}},{key:"default",fn:function(dialog){return[n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[e._v("Add new event")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{autofocus:"",label:"Event name",clearable:"",outlined:"",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.event.name,callback:function(t){e.$set(e.event,"name",t)},expression:"event.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.dates,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.dates=t},"update:return-value":function(t){e.dates=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-combobox",e._g(e._b({attrs:{multiple:"",chips:"","small-chips":"",label:"Selet event start date and end date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},"v-combobox",r,!1),o))]}}],null,!0),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{multiple:"","no-title":"",scrollable:"",range:"",reactive:"",min:e.nowDate},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"button cancel",attrs:{text:""},on:{click:function(t){e.menu=!1}}},[e._v("\n                          Cancel\n                        ")]),e._v(" "),n("v-btn",{staticClass:"button",attrs:{text:""},on:{click:function(t){return e.$refs.menu.save(e.dates)}}},[e._v("\n                          OK\n                        ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{sm:"12",md:"6"}},[n("v-checkbox",{attrs:{label:"Is Timed event: "+e.event.timed},model:{value:e.event.timed,callback:function(t){e.$set(e.event,"timed",t)},expression:"event.timed"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[e.event.timed?n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",label:"Start time"},model:{value:e.event.startTime,callback:function(t){e.$set(e.event,"startTime",t)},expression:"event.startTime"}}):e._e()],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{attrs:{cols:"11",sm:"12",md:"6"}},[e.event.timed?n("v-text-field",{attrs:{type:"time",id:"appt",name:"appt",label:"End time",required:"",min:"12:00",max:"18:00"},model:{value:e.event.endTime,callback:function(t){e.$set(e.event,"endTime",t)},expression:"event.endTime"}}):e._e()],1)],1)],1),e._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{staticClass:"button cancel",on:{click:function(e){dialog.value=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{staticClass:"button",on:{click:e.save_event}},[e._v("Save")])],1)],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v("\n                Today\n              ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("\n                  mdi-chevron-left\n                ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("\n                  mdi-chevron-right\n                ")])],1),e._v(" "),e.$refs.calendar?n("v-toolbar-title",[e._v("\n                "+e._s(e.$refs.calendar.title)+"\n              ")]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),o),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),e._v(" "),n("v-icon",{attrs:{right:""}},[e._v("\n                      mdi-menu-down\n                    ")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),e._v(" "),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary","event-height":"30",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),e._v(" "),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-dots-vertical")])],1)],1),e._v(" "),n("v-card-text",[n("span",{domProps:{innerHTML:e._s(e.selectedEvent.details)}})]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("\n                    Cancel\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCalendar:_.a,VCard:y.a,VCardActions:k.a,VCardText:k.c,VCheckbox:w.a,VCol:x.a,VCombobox:T.a,VDatePicker:O.a,VDialog:D.a,VForm:C.a,VIcon:V.a,VList:E.a,VListItem:$.a,VListItemTitle:j.c,VMenu:S.a,VRow:P.a,VSheet:M.a,VSpacer:I.a,VTextField:L.a,VToolbar:F.a,VToolbarTitle:H.b})}}]);