(window.webpackJsonp=window.webpackJsonp||[]).push([[20,35],{746:function(e,t,n){"use strict";n.r(t);n(12),n(10),n(9),n(14),n(11),n(15);var r=n(0),o=n(57),c=n(283),d=n(290),m=n(289),l=n(291);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{"tab-medicine":c.default,"tab-med-groups":d.default,"tab-med-categories":m.default,"tab-med-measurement":l.default},data:function(){return{dialog:!1,search:"",medicinos:null,tab:null,headers:[{text:"Name",value:"name"},{text:"Company",value:"company",sortable:!1},{text:"Composition",value:"compositions"},{text:"Units",value:"units",sortable:!0},{text:"Group",value:"group",sortable:!0},{text:"Category",value:"category",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItemId:"",editedItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},defaultItem:{id:0,name:"",company:"",compositions:"",category:"",group:"",units:0},items:[{id:3,tab:"Medicine Groups",content:"Tab 2 Content"},{id:2,tab:"Medicine Categories",content:"Tab 2 Content"},{id:1,tab:"Medicines",content:"Tab 1"},{id:4,tab:"Measurement units",content:"Tab measures "}]}},created:function(){},beforeMount:function(){this.$store.dispatch("getmedicines")},methods:{editItem:function(e){this.editedIndex=this.medicines.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItemId=e.id},fetchMedicines:function(){this.$store.dispatch("getmedicines")},fetchCategories:function(){this.$store.dispatch("getmedicinescategories")},fetchGroups:function(){this.$store.dispatch("getmedicinesgroups")},fetchMedicineMeasureUnits:function(){this.$store.dispatch("fetch_medicine_measurements")},handleTabNavigation:function(e){switch(e.id){case 1:this.fetchMedicines();break;case 2:this.fetchCategories();break;case 3:this.fetchGroups();break;case 4:this.fetchMedicineMeasureUnits()}},handleClick:function(e){console.log(e),this.$router.push("/patients/"+e.id)}},watch:{dialog:function(e){e||this.close(),this.$store.dispatch("retrieve_medicine_template")}},computed:h(h({},Object(o.b)({medicines:"medicines",categories:"medicinecategories",groups:"medicinegroups",template:"medicine_templates",medicinemeasurements:"medicinemeasurements"})),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}})},y=n(8),O=n(13),_=n.n(O),w=n(719),j=n(732),k=n(730),x=n(396),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"breadcrumb"},[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")]),e._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/pharmacy"}},[e._v("Pharmacy")])],1),e._v(" "),n("v-tabs",{attrs:{"show-arrows":"","background-color":"primary",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return n("v-tab",{key:t.tab,on:{click:function(n){return n.stopPropagation(),e.handleTabNavigation(t)}}},[e._v("\n      "+e._s(t.tab)+"\n    ")])})),1),e._v(" "),n("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("v-tab-item",[n("tab-med-groups",{attrs:{groups:e.groups},on:{update:function(t){return e.fetchGroups()}}})],1),e._v(" "),n("v-tab-item",[n("tab-med-categories",{attrs:{categories:e.categories},on:{update:function(t){return e.fetchCategories()}}})],1),e._v(" "),n("v-tab-item",[n("tab-medicine",{attrs:{medicines:e.medicines}})],1),e._v(" "),n("v-tab-item",[n("tab-med-measurement",{attrs:{measures:e.medicinemeasurements},on:{update:function(t){return e.fetchMedicineMeasureUnits()}}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{VTab:w.a,VTabItem:j.a,VTabs:k.a,VTabsItems:x.a})},788:function(e,t,n){"use strict";n.r(t);var r={components:{pharmacy:n(746).default}},o=n(8),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("pharmacy")}),[],!1,null,null,null);t.default=component.exports}}]);