(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{903:function(e,t,r){"use strict";r.r(t);r(12),r(9),r(7),r(5),r(14),r(8),r(15);var l=r(0),n=(r(28),r(70));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{dialog:!1,dialogDelete:!1,role:0,editedIndex:-1,departmentId:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id",class:"primary"},{text:"Username",align:"start",sortable:!1,value:"username",class:"primary"},{text:"Email",value:"email",class:"primary"},{text:"Is Staff ?",value:"isStaff",class:"primary"},{text:"Roles",value:"roles",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},defaultItem:{id:"",username:"",isStaff:!1,email:"",staff:null,password:"",roles:[],departmentId:0},colors:["red","blue","green","yellow","purple","teal","orange","brown","deep-orange","blue-grey","cyan"],currentColor:"",valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length>5||"Name must be less than 5 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},created:function(){this.$store.dispatch("get_self_service_users")},methods:{getColor:function(e){return"user"===e?"yellow":"admin"===e?"red darken-3 white--text":"moderator"===e?"green":"cyan"},deleteItem:function(e){this.editedIndex=this.userslist.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;this.$store.dispatch("delete_user",this.editedItem.id).then((function(){e.closeDelete()}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),this.$store.dispatch("get_self_service_users")}},computed:c(c({},Object(n.b)({userslist:"selfserviceusers"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newuser":"label.titles.edituser"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}}},m=r(43),f=r(50),v=r.n(f),h=r(165),y=r(265),_=r(64),w=r(276),O=r(648),x=r(633),k=r(269),D=r(140),I=r(248),C=r(637),j=r(81),V=r(91),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[null==e.userslist?r("v-progress-circular",{attrs:{size:"52",color:"indigo",indeterminate:""}}):r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.userslist,"sort-by":"id"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-toolbar-title",[e._v(e._s(e.$t("label.titles.selfusersmanagement")))]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",{attrs:{dark:""}},[r("v-card-title",{staticClass:"subhead-1 pa-4"},[e._v("\n              "+e._s(e.$t("label.dialogs.deleteuserconfirmdialog")))]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:e.closeDelete}},[e._v(e._s(e.$t("label.button.decline")))]),e._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:e.deleteItemConfirm}},[e._v(e._s(e.$t("label.button.btnyesdelete")))])],1)],1)],1)],1)]},proxy:!0},{key:"item.isStaff",fn:function(t){return[t.item.isStaff?r("v-icon",{staticClass:"font-weight-black",attrs:{color:"primary"}},[e._v("\n        mdi-check\n      ")]):r("v-icon",{staticClass:"font-weight-black",attrs:{small:"",color:"primary"}},[e._v("\n        mdi-close\n      ")])]}},{key:"item.roles",fn:function(t){var l=t.item;return e._l(l.roles,(function(t,i){return r("v-chip",{key:i,staticClass:"pa-1 mr-1",attrs:{color:e.getColor(t.name.toLowerCase()),"x-small":""}},[e._v(e._s(t.name.toLowerCase()))])}))}},{key:"item.actions",fn:function(t){var l=t.item;return[e._e(),e._v(" "),r("v-icon",{attrs:{small:"",color:"warning"},on:{click:function(t){return e.deleteItem(l)}}},[e._v("\n        mdi-trash-can\n      ")])]}},{key:"no-data",fn:function(){return[r("p",[e._v("No Data available")])]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardTitle:_.d,VChip:w.a,VDataTable:O.a,VDialog:x.a,VDivider:k.a,VIcon:D.a,VProgressCircular:I.a,VSpacer:C.a,VToolbar:j.a,VToolbarTitle:V.b})}}]);