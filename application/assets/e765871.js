(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{846:function(e,t,r){"use strict";r.r(t);r(12),r(10),r(7),r(5),r(13),r(9),r(14);var c=r(0),n=r(83);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={components:{"tab-medicine":r(732).default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name",class:"primary"},{text:"Company",value:"company",class:"primary",sortable:!1},{text:"Composition",value:"compositions",class:"primary"},{text:"Units",value:"units",class:"primary",sortable:!0},{text:"Group",value:"group",class:"primary",sortable:!0},{text:"Category",value:"category",class:"primary",sortable:!0},{text:"Actions",value:"actions",class:"primary",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)({medicines:"medicines"}))},l=d,m=r(42),h=r(50),f=r.n(h),y=r(259),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"breadcrumb"},[r("router-link",{attrs:{to:"/"}},[e._v(e._s(e.$t("label.breadcrumb.dashboard")))]),e._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v(e._s(e.$t("label.breadcrumb.phamarcy")))])],1),e._v(" "),r("v-card",[r("tab-medicine",{attrs:{medicines:e.medicines,showaction:!1}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCard:y.a})}}]);