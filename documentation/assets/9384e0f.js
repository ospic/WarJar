(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{570:function(t,e,n){"use strict";n.r(e);var r=n(17),o=(n(57),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,o=t.$content,c=t.app,e.prev=1,e.next=4,o("".concat(c.i18n.locale),{deep:!0}).where({tags:{$contains:n.slug}}).fetch();case 4:return l=e.sent,e.abrupt("return",{posts:l});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Cool nuxt blog tags"}],link:[{rel:"canonical",href:"https://nuxt-blog.com/tags"}]}},methods:{handletagclick:function(t){}},created:function(){console.log()},computed:{}}),c=n(22),l=n(25),v=n.n(l),d=n(546),h=n(541),m=n(545),_=n(548),f=n(63),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"2"}}),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-sheet",{staticClass:"pa-5",attrs:{"min-height":"120vh"}},[n("h1",{staticClass:"ma-2"},[t._v("Searches for Tag: "+t._s(t.$route.params.slug))]),t._v(" "),n("v-divider"),t._v(" "),t._l(t.posts,(function(e,r){return n("div",{key:e.dir},[n("h1",{staticClass:"h1 post-h1"},[n("nuxt-link",{attrs:{to:"/"+e.slug}},[t._v(" "+t._s(r)+". "+t._s(e.title))])],1),t._v(" "),e.description?n("p",{staticClass:"excerpt"},[t._v("\n            "+t._s(e.description)+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"post-details"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[t._v("Last updated: "+t._s(t.formatDate(e.updatedAt)))]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-tags",{attrs:{tags:e.tags}})],1)],1)],1),t._v(" "),n("v-divider")],1)}))],2)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"2"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VTags:n(100).default}),v()(component,{VCol:d.a,VContainer:h.a,VDivider:m.a,VRow:_.a,VSheet:f.a})}}]);