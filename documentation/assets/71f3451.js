(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{590:function(e,t,n){"use strict";n.r(t);var r=n(11),o=n(20),c=(n(68),{layout:"blog",asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,d,f,h,m,w,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.error,o=e.$content,c=e.app,console.log(c.i18n.locale),t.prev=2,t.next=5,o("".concat(c.i18n.locale),{deep:!0}).fetch();case 5:return l=t.sent,d=Object(r.a)(l,1),f=d[0],t.next=10,o("".concat(c.i18n.locale)).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 10:return h=t.sent,t.next=13,o("".concat(c.i18n.locale)).only(["title","slug"]).sortBy("createdAt","asc").fetch();case 13:return m=t.sent,w=Object(r.a)(m,2),v=w[0],x=w[1],t.abrupt("return",{post:f,pages:h,prev:v,next:x});case 20:t.prev=20,t.t0=t.catch(2),n({statusCode:404,message:"Page could not be found"});case 23:case"end":return t.stop()}}),t,null,[[2,20]])})))()},mounted:function(){Prism.highlightAll()},computed:{screen:function(){return console.log(window.screen.height),window.screen.height-150}}}),l=n(21),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("blog-page",{attrs:{pages:e.pages,post:e.post,next:e.next}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlogPage:function(){return Promise.resolve().then(n.bind(null,283)).then((function(e){return e.default||e}))}})}}]);