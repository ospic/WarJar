(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{558:function(t,e,n){var content=n(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("62ba24b1",content,!0,{sourceMap:!1})},564:function(t,e,n){"use strict";n(558)},565:function(t,e,n){var r=n(14)(!1);r.push([t.i,"@media screen and (min-width:265px){.articles[data-v-44102542]{position:fixed;padding:.2% 4% .3% 2%;background-color:#424242}}ul li a[data-v-44102542]{display:inline-block}",""]),t.exports=r},594:function(t,e,n){"use strict";n.r(e);var r=n(20),c=(n(68),n(26),n(225),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return n.next=5,e.$content("".concat(e.$i18n.locale)).limit(6).search(t).fetch();case 5:e.articles=n.sent;case 6:case"end":return n.stop()}}),n)})))()}}}),l=(n(564),n(21)),o=n(35),d=n.n(o),m=n(211),f=n(213),h=n(126),v=n(75),w=n(112),x=n(588),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("v-text-field",{staticClass:"shrink mr-4",attrs:{"hide-details":"",label:"Search",placeholder:"Search",filled:"",dense:"",flat:"",solo:"",rounded:"",light:"",clearable:"","single-line":"","background-color":"#EEEEEE","append-icon":"mdi-magnify"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),t._v(" "),n("div",{staticClass:"mt-0"},[t.articles.length?n("v-list",{staticClass:"articles mt-1 pr-14",attrs:{dense:"",color:"primary"}},t._l(t.articles,(function(article){return n("v-list-item",{key:article.slug,staticClass:"ma-0 pa-0",attrs:{dense:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("NuxtLink",{staticStyle:{color:"white"},attrs:{to:article.slug}},[t._v("\n          "+t._s(article.title)+"\n        ")])],1)],1)],1)})),1):t._e()],1)])}),[],!1,null,"44102542",null);e.default=component.exports;d()(component,{VIcon:m.a,VList:f.a,VListItem:h.a,VListItemContent:v.a,VListItemIcon:w.a,VListItemTitle:v.c,VTextField:x.a})}}]);