(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{791:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(9),n(14),n(11),n(15);var o=n(0),c=n(57);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={components:{"tab-medicine":n(283).default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0}}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)({medicines:"medicines"}))},l=n(8),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v("Pharmacy")])],1),e._v(" "),n("tab-medicine",{attrs:{medicines:e.medicines,showaction:!1}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);