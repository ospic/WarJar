(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{661:function(t,r,e){"use strict";(function(t){r.a={data:function(){return{response_url:null,response_data:null,publicPath:t.env.BASE_URL}},methods:{},computed:{reportUrl:function(){return this.$api.defaults.baseURL+"reports/view/"+this.$route.params.id}}}}).call(this,e(259))},841:function(t,r,e){"use strict";e.r(r);var l=e(661).a,o=e(44),component=Object(o.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"breadcrumb "},[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),e("router-link",{attrs:{to:"/reports"}},[t._v(t._s(t.$t("label.breadcrumb.reports")))]),t._v(" "),e("router-link",{staticClass:"active",attrs:{to:"/reports/"+t.$route.params.id}},[t._v(t._s(t.$t("label.breadcrumb.viewreports")))])],1),t._v(" "),t.reportUrl?e("div",[e("v-pdf",{attrs:{src:t.reportUrl}})],1):t._e()])}),[],!1,null,null,null);r.default=component.exports}}]);