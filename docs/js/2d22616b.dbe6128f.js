(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22616b"],{e6bf:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-select",{staticClass:"q-ma-sm",staticStyle:{"min-width":"150px"},attrs:{options:e.iconSetOptions,label:"Icon set",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:e.iconSet,callback:function(t){e.iconSet=t},expression:"iconSet"}}),n("q-media-player",{attrs:{type:"video",sources:e.sources,tracks:e.tracks,"mobile-mode":""}})],1)},a=[],c=(n("7f7f"),{data:function(){return{sources:[{src:"http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",type:"video/mp4"}],tracks:[{src:"statics/media/TearsOfSteel/TOS-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"statics/media/TearsOfSteel/TOS-de.vtt",kind:"subtitles",srclang:"de",label:"German"},{src:"statics/media/TearsOfSteel/TOS-es.vtt",kind:"subtitles",srclang:"es",label:"Spanish"},{src:"statics/media/TearsOfSteel/TOS-fr-Goofy.vtt",kind:"subtitles",srclang:"fr",label:"French"},{src:"statics/media/TearsOfSteel/TOS-it.vtt",kind:"subtitles",srclang:"it",label:"Italian"},{src:"statics/media/TearsOfSteel/TOS-nl.vtt",kind:"subtitles",srclang:"nl",label:"Dutch"}],iconSet:this.$q.iconSet.name,iconSetOptions:[{label:"Eva Icons",value:"eva-icons"},{label:"Fontawesome",value:"fontawesome-v5"},{label:"Ion Icons",value:"ionicons-v4"},{label:"Material Icons",value:"material-icons"},{label:"MDI",value:"mdi-v3"},{label:"Themify",value:"themify"}]}},watch:{iconSet:function(e){switch(e){case"eva-icons":this.changeIconSetToEvaIcons();break;case"fontawesome-v5":this.changeIconSetToFontAwesome();break;case"ionicons-v4":this.changeIconSetToIonIcons();break;case"material-icons":this.changeIconSetToMaterialIcons();break;case"mdi-v3":this.changeIconSetToMDI();break;case"themify":this.changeIconSetToThemify();break}}},methods:{changeIconSetToEvaIcons:function(){this.$q.iconSet=n("424a").default},changeIconSetToFontAwesome:function(){this.$q.iconSet=n("b3f7").default},changeIconSetToIonIcons:function(){this.$q.iconSet=n("8686").default},changeIconSetToMaterialIcons:function(){this.$q.iconSet=n("42d2").default},changeIconSetToMDI:function(){this.$q.iconSet=n("27fd").default},changeIconSetToThemify:function(){this.$q.iconSet=n("db37").default}}}),i=c,o=n("2877"),l=Object(o["a"])(i,s,a,!1,null,null,null);t["default"]=l.exports}}]);