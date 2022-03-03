(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{631:function(t,e,r){"use strict";var n=r(0),o=(r(37),r(58),r(210),r(7),r(5),r(8),r(51),r(54),r(10),r(9),r(13),r(14),r(6)),l=r(101),c=r(120);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},726:function(t,e,r){var content=r(815);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3a9a4062",content,!0,{sourceMap:!1})},814:function(t,e,r){"use strict";r(726)},815:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h2[data-v-4dc3517d]{text-align:center;margin-top:100px;font-family:sans-serif}",""]),t.exports=n},877:function(t,e,r){"use strict";r.r(e);r(10),r(9),r(7),r(5),r(13),r(8),r(14);var n=r(0),o=r(2),l=(r(21),r(84));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{editedIndex:-1,headers:[{text:"ID",align:"start",sortable:!1,value:"id",class:"primary"},{text:"Name",align:"start",sortable:!1,value:"name",class:"primary"},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedItem:{id:"",name:"",privileges:[]},dialog:!1,valid:!0}},methods:{handleClick:function(t){this.$router.push("roles/"+t.id)},editItem:function(t){this.editedIndex=this.roles.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1})),this.$store.dispatch("fetchuserroles")},request_data:function(){this.$store.dispatch("request_role_privileges"),this.$store.dispatch("fetchuserroles")},save:function(){this.editedIndex>-1?(this.update_role_privileges(this.editedItem.id,this.editedItem),this.close()):(this.$store.dispatch("create_role",this.editedItem),this.close())},update_role_privileges:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$api.$put("auth/roles/".concat(t,"/"),e).then((function(t){r.$router.push("roles/".concat(t.id)),r.request_data()})).catch((function(t){console.log(t)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},beforeMount:function(){this.$store.dispatch("request_role_privileges"),this.$store.dispatch("fetchuserroles")},computed:d(d({},Object(l.b)({authorities:"privileges",roles:"userroles"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newrole":"label.titles.editrole"}})},v=(r(814),r(42)),h=r(50),m=r.n(h),_=r(158),O=r(261),y=r(60),w=r(620),j=r(610),x=r(623),V=r(608),$=r(265),k=r(631),I=r(137),P=r(621),C=r(172),B=r(612),D=r(113),E=r(79),T=r(91),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.roles,"sort-by":"id"},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.$t("label.titles.rolesmanagement")))]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.isMdAndUp?r("v-btn",t._g(t._b({staticClass:"button",attrs:{"x-large":"",dark:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("\n              "+t._s(t.$t("label.button.btnaddnewrole")))],1):r("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{fab:"",small:"",dark:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Role name",hint:"E.g Administrator",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[r("v-select",{attrs:{items:t.authorities,"item-text":"name","item-value":"id",chips:"","disable-lookup":"","deletable-chips":"",clearable:"","small-chips":"",multiple:"",rules:[function(t){return!!t||"You must select one to continue!"}],label:"Select role permissions",required:""},model:{value:t.editedItem.privileges,callback:function(e){t.$set(t.editedItem,"privileges",e)},expression:"editedItem.privileges"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                "+t._s(t.$t("label.button.btncancel"))+"\n              ")]),t._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                "+t._s(t.$t("label.button.btnsave"))+"\n              ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[r("td",{on:{click:function(t){t.stopPropagation()}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("\n          mdi-pencil\n        ")])],1)]}}],null,!0)})],1)}),[],!1,null,"4dc3517d",null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:O.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:w.a,VContainer:j.a,VDataTable:x.a,VDialog:V.a,VDivider:$.a,VForm:k.a,VIcon:I.a,VRow:P.a,VSelect:C.a,VSpacer:B.a,VTextField:D.a,VToolbar:E.a,VToolbarTitle:T.b})}}]);