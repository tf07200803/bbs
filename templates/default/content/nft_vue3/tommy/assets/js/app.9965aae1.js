(function(t){function e(e){for(var c,o,u=e[0],r=e[1],l=e[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);s&&s(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,u=1;u<n.length;u++){var r=n[u];0!==i[r]&&(c=!1)}c&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},i={app:0},a=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="phpcms/templates/default/content/nft_vue3/tommy/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1b06":function(t,e,n){"use strict";n("6e15")},"249b":function(t,e,n){},"6e15":function(t,e,n){},"70a1":function(t,e,n){},"72cc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERFN0IzRDkwMUE4MTFFRDhCQ0ZBNUNBNEZFNTg4OUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERFN0IzRDgwMUE4MTFFRDhCQ0ZBNUNBNEZFNTg4OUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRkY1NDZCNTFDMTgxMUVDQTUxRDlCRUY3NzcwNTBDOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRkY1NDZCNjFDMTgxMUVDQTUxRDlCRUY3NzcwNTBDOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk1VvYgAAAYNSURBVHja7Fx5aB1F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"},"76d5":function(t,e,n){},9536:function(t,e,n){},"968f":function(t,e,n){"use strict";n("70a1")},"9d64":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ZGNTQ2QjYxQzE4MTFFQ0E1MUQ5QkVGNzc3MDUwQzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0ZGNTQ2QjUxQzE4MTFFQ0E1MUQ5QkVGNzc3MDUwQzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDA0Mzk5NUI0QjQxMUU3ODM1Q0Q3OTdEMDRENEIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDA0Mzk5NkI0QjQxMUU3ODM1Q0Q3OTdEMDRENEIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvtHqEQAAAZsSURBVHja7FxrbBRV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"},cd49:function(t,e,n){"use strict";n.r(e);var c=n("7a23");function i(t,e,n,i,a,o){var u=Object(c["E"])("HeaderComponent"),r=Object(c["E"])("router-view");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(u),Object(c["h"])(r,{value:t.str,onChangeMoney:t.updatamoney},null,8,["value","onChangeMoney"])],64)}var a=n("72cc"),o=n.n(a),u=n("9d64"),r=n.n(u),l=function(t){return Object(c["z"])("data-v-422f4413"),t=t(),Object(c["x"])(),t},s={class:"headerClass"},d={class:"row mx-0 my-0 px-0 py-0 h-100 align-items-center justify-content-between"},b={key:0,class:"col-auto h-75"},p=l((function(){return Object(c["f"])("img",{src:o.a,class:"logostyle"},null,-1)})),h=[p],g={class:"col-auto titletext"},j=l((function(){return Object(c["f"])("div",{class:"col-auto h-75"},[Object(c["f"])("img",{src:r.a,class:"logostyle"})],-1)}));function f(t,e,n,i,a,o){return Object(c["w"])(),Object(c["e"])("div",null,[Object(c["f"])("div",s,[Object(c["f"])("div",d,["/content"!=t.newpath?(Object(c["w"])(),Object(c["e"])("div",b,h)):Object(c["d"])("",!0),"/content"==t.newpath?(Object(c["w"])(),Object(c["e"])("div",{key:1,class:"col-auto leftarrow",onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)})},"＜")):Object(c["d"])("",!0),Object(c["f"])("div",g,"熱門文章"+Object(c["G"])(t.newpath),1),j])])])}var v=n("6c02"),A=Object(c["i"])({name:"Home",data:function(){return{path:""}},components:{},mounted:function(){},setup:function(){var t=Object(v["c"])(),e=Object(c["B"])(""),n=Object(c["B"])("");return Object(c["J"])((function(){return t.path}),(function(t,e){n.value=t}),{immediate:!0}),Object(c["J"])((function(){return t.query}),(function(t,n){e.value=t.id}),{immediate:!0}),Object(c["q"])((function(){})),Object(c["t"])((function(){})),Object(c["r"])((function(){})),Object(c["v"])((function(){})),{newpath:n,routeid:e}}}),m=(n("ea61"),n("d959")),O=n.n(m);const w=O()(A,[["render",f],["__scopeId","data-v-422f4413"]]);var G=w,y=Object(c["i"])({name:"App",data:function(){return{value:"test123"}},components:{HeaderComponent:G},methods:{clickCallback:function(t){var e=this;e.value=t}},watch:{},setup:function(){var t=Object(c["B"])(""),e=function(e){t.value=e};return{updatamoney:e,str:t}}});n("e345");const I=O()(y,[["render",i]]);var Z=I,Q=(n("9536"),n("24df"),n("5c7f")),N={class:"width1200"},C=["id"],M={class:"listtitle"},k={class:"listdetail"},B={class:"pagestyle"};function E(t,e,n,i,a,o){var u=Object(c["E"])("router-link"),r=Object(c["E"])("paginate");return Object(c["w"])(),Object(c["e"])("div",null,[Object(c["f"])("div",N,[Object(c["f"])("div",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(t.list,(function(t,e){return Object(c["w"])(),Object(c["e"])("div",{class:"list d-inline-block w-100",key:e,id:"v-"+t.id},[Object(c["h"])(u,{to:{path:"/content",query:{id:t.id}}},{default:Object(c["L"])((function(){return[Object(c["f"])("div",{class:"float-start listimg",style:Object(c["o"])({backgroundImage:"url(./uploadfile/images/"+t.imgsrc+")"})},null,4),Object(c["f"])("div",M,Object(c["G"])(t.title),1),Object(c["f"])("div",k,Object(c["G"])(t.intro),1)]})),_:2},1032,["to"])],8,C)})),128))]),Object(c["f"])("div",B,[Object(c["h"])(r,{modelValue:t.nowpage,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.nowpage=e}),"page-count":t.totalpage,"page-range":3,"margin-pages":1,"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination justify-content-center","page-class":"page-item"},null,8,["modelValue","page-count","click-handler"])])])])}var R=n("bc3a"),D=n.n(R),F=n("8857"),Y=n("1157"),V=n.n(Y),U=Object(c["i"])({name:"Home",data:function(){return{count:0,list:"",pagelist:"",totaldata:"",nowpage:this.$route.query.page?this.$route.query.page:1,totalpage:0}},props:{value:String},methods:{getapi:function(t){var e=this;D.a.get("http://ec2-3-21-169-225.us-east-2.compute.amazonaws.com/bbs/index.php?m=content&c=index&a=getorder&page="+t,{}).then((function(t){var n=t.data.data.data;e.list=n,e.pagelist=t.data.data.pages;var c=V()(e.pagelist);e.totaldata=c.find(".totalnum").html(),e.totalpage=Math.ceil(parseInt(e.totaldata)/30)})).catch((function(t){console.log(t)}))},clickCallback:function(t){this.$emit("change-money","");var e=this;e.getapi(t),e.$router.push("/home?page="+t)}},mounted:function(){var t=this,e=this,n=e.nowpage;"string"===typeof n&&(e.nowpage=parseInt(n)),setTimeout((function(){t.getapi(e.nowpage)}),100)},components:{paginate:F["a"]},setup:function(t,e){var n=e.emit,i=Object(c["b"])((function(){return"computed Fn"})),a=function(t){n("change-money",t)},o=Object(c["B"])(0);return Object(c["q"])((function(){})),Object(c["t"])((function(){})),Object(c["r"])((function(){})),Object(c["v"])((function(){if(V()("#v-"+t.value).attr("id")){var e=V()("#v-"+t.value).offset();if(e.top){var n=e.top;window.scrollTo(0,n)}}})),{idx:o,computedFun:i,changeMoney:a}}});n("968f");const H=O()(U,[["render",E]]);var x=H,T={class:"width1200"},S=["innerHTML"];function L(t,e,n,i,a,o){return Object(c["w"])(),Object(c["e"])("div",null,[Object(c["f"])("div",T,[Object(c["f"])("div",{innerHTML:t.detail,id:"tread_content"},null,8,S)])])}var z=Object(c["i"])({name:"Content",data:function(){return{count:0,id:this.$route.query.id,detail:""}},methods:{getapi:function(){var t=this;D.a.get("index.php?m=content&c=index&a=getlist&id="+t.id,{}).then((function(e){var n=e.data.data,c=V()(n["detail"]);c.find(".ptt-push-group  a").attr("href","javascript:void(0)").attr("target","_self"),c.find(".text-author  a").attr("href","javascript:void(0)").attr("target","_self"),c.find(".re-row  a").attr("href","javascript:void(0)").attr("target","_self"),c.find("div").attr("style",""),c.find("img").attr("style","");var i=c.find("img");i.each((function(){V()(this).attr("src",V()(this).attr("data-src"))})),n["detail"]=c.html(),t.detail=n["detail"]})).catch((function(t){console.log(t)}))},increment:function(){this.count++}},mounted:function(){var t=this;setTimeout((function(){t.getapi()}),100)},components:{},setup:function(t,e){var n=e.emit,i=Object(v["c"])(),a=Object(c["b"])((function(){return"computed Fn"})),o=function(t){n("change-money",t)},u=Object(c["B"])(0);return setTimeout((function(){u.value=1,o(i.query.id)}),100),Object(c["q"])((function(){})),Object(c["t"])((function(){})),Object(c["r"])((function(){})),Object(c["v"])((function(){})),{idx:u,computedFun:a}}});n("1b06");const P=O()(z,[["render",L]]);var W=P,J=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:x},{path:"/content",name:"Content",component:W}],X=Object(v["a"])({scrollBehavior:function(){var t=document.getElementById("app");t&&t.scrollIntoView()},history:Object(v["b"])(),routes:J}),K=X,q=n("5502"),_=Object(q["a"])({state:{},mutations:{},actions:{},modules:{}}),$=n("f7e2"),tt=Object(c["c"])(Z);tt.component("v-chart",Q["a"]),tt.use(_).use(K).use($["a"],{property:{id:"G-36F812TZ1N"}}).mount("#app")},e345:function(t,e,n){"use strict";n("76d5")},ea61:function(t,e,n){"use strict";n("249b")}});