(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{797:function(e,t,r){"use strict";r.r(t);var c={components:{"servicescard-component":r(178).default},data:function(){return{}},created:function(){this.$store.dispatch("retrieve_active_opd_services")},computed:{services:function(){return this.$store.getters.opds}}},n=r(8),o=r(13),l=r.n(o),v=r(264),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return null==e.services?r("v-progress-circular"):r("servicescard-component",{attrs:{services:e.services,title:"Active OPD consultations"}})}),[],!1,null,null,null);t.default=component.exports;l()(component,{VProgressCircular:v.a})}}]);