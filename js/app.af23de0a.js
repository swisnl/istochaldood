webpackJsonp([1],{0:function(t,e,r){t.exports=r("NHnr")},G3BA:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};r.d(i,"setQuery",function(){return Z}),r.d(i,"setDeathState",function(){return K});var c=r("/5sW"),a=r("Biqn"),s=r.n(a),n=r("NYxO"),o=r("+Uzz"),l={name:"Background",data:function(){return{introDone:!1}},computed:s()({},Object(n["b"])(["deathState"])),watch:{deathState:function(t){"dead"===t?this.playDarkIn():"alive"===t||this.playDarkOut()}},mounted:function(){var t=this;this.$options.timelines={},this.startStars(),this.$options.timelines.intro=new o["TimelineMax"]({paused:!0,onComplete:function(){t.introDone=!0}}),this.$options.timelines.intro.add([o["TweenMax"].from(this.$refs.stars,2,{opacity:0,ease:o["Circ"].easeOut}),o["TweenMax"].from(this.$refs.hillBack,1,{opacity:0,delay:.5,y:"+=25",ease:o["Circ"].easeOut}),o["TweenMax"].from(this.$refs.hillMiddle,1,{opacity:0,delay:.5,y:"+=50",ease:o["Circ"].easeOut}),o["TweenMax"].from(this.$refs.hillFront,1,{opacity:0,delay:.5,y:"+=200",ease:o["Circ"].easeOut})]),this.$options.timelines.dark=new o["TimelineMax"]({paused:!0,onComplete:function(){t.startStars()},onReverseComplete:function(){t.startStars()}}),this.$options.timelines.dark.add([o["TweenMax"].to(this.$refs.background,1,{ease:o["Sine"].easeInOut,fill:"#001d3e"}),o["TweenMax"].to(this.$refs.hillBack,1,{ease:o["Sine"].easeInOut,svgOrigin:"187.5 333.5",y:"+=100",scale:1}),o["TweenMax"].to(this.$refs.hillMiddle,1,{ease:o["Sine"].easeInOut,svgOrigin:"225 333.5",y:"-=300",scale:1.5,fill:"#03082f"}),o["TweenMax"].to(this.$refs.hillFront,1,{ease:o["Sine"].easeInOut,svgOrigin:"100 333.5",y:"-=650",scale:3,fill:"#0e0317"})]),this.playIntro()},methods:{startStars:function(){this.$options.timelines.stars&&this.$options.timelines.stars.kill(),this.$options.timelines.stars=o["TweenMax"].to(this.$refs.stars,240,{ease:o["Linear"].easeNone,svgOrigin:"187.5 323.5",rotation:"+=360",repeat:-1})},speedUpStars:function(){this.$options.timelines.stars&&this.$options.timelines.stars.kill(),this.$options.timelines.stars=o["TweenMax"].to(this.$refs.stars,1,{ease:o["Sine"].easeInOut,svgOrigin:"187.5 323.5",rotation:"+=60"})},playIntro:function(){this.$options.timelines.intro.play()},playDarkIn:function(){this.speedUpStars(),this.$options.timelines.dark.play()},playDarkOut:function(){this.speedUpStars(),this.$options.timelines.dark.reverse()}},timelines:null},u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"background",attrs:{viewBox:"0 0 375 667",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{ref:"background",attrs:{fill:"#316FB8",d:"M0 0H375V667H0z"}}),r("g",{ref:"stars",attrs:{fill:"#fff",transform:"translate(0, 70)"}},[r("circle",{attrs:{opacity:".5",cx:"231.5",cy:"35.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"29",cy:"62",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"391",cy:"62",r:"2"}}),r("circle",{attrs:{opacity:".4",cx:"79",cy:"2",r:"2"}}),r("circle",{attrs:{opacity:".4",cx:"441",cy:"2",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"139.5",cy:"82.5",r:"2.5"}}),r("circle",{attrs:{opacity:".3",cx:"289",cy:"12",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"249",cy:"212",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"29",cy:"152",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"391",cy:"152",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"290",cy:"236",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"186",cy:"131",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"60",cy:"202",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"422",cy:"202",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"-24.5",cy:"146.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"337.5",cy:"146.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"-96",cy:"177",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"-96",cy:"87",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"-42.5",cy:"92.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"275.5",cy:"303.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"73",cy:"330",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"435",cy:"330",r:"2"}}),r("circle",{attrs:{opacity:".4",cx:"123",cy:"270",r:"2"}}),r("circle",{attrs:{opacity:".4",cx:"485",cy:"270",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"183.5",cy:"350.5",r:"2.5"}}),r("circle",{attrs:{opacity:".3",cx:"333",cy:"280",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"293",cy:"480",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"73",cy:"420",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"435",cy:"420",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"334",cy:"504",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"230",cy:"399",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"104",cy:"470",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"466",cy:"470",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"19.5",cy:"414.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"381.5",cy:"414.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"-52",cy:"445",r:"2"}}),r("circle",{attrs:{opacity:".4",cx:"-102",cy:"505",r:"2"}}),r("circle",{attrs:{opacity:".3",cx:"-52",cy:"355",r:"2"}}),r("circle",{attrs:{opacity:".5",cx:"-83",cy:"305",r:"3"}}),r("circle",{attrs:{opacity:".5",cx:"1.5",cy:"360.5",r:"2.5"}}),r("circle",{attrs:{opacity:".5",cx:"363.5",cy:"360.5",r:"2.5"}})]),r("ellipse",{ref:"hillBack",attrs:{fill:"#255756",cx:"125.5",cy:"562.5",rx:"333.5",ry:"269.5"}}),r("path",{ref:"hillMiddle",attrs:{d:"M-31 691.733v-190.77c50.109-21.663 88.875-33.314 93.38-34.616l-.878-3.924 5.295-3.659-5.933-14.644c1.738-3.67 4.194-6.158 7.368-7.465 2.956-1.217 6.63-1.253 11.021-.108l1.78 17.21 6.66 1.484.119 3.523 5.753-1.144-.886-3.147 6.325-3.426-5.449-19.871c2.4-3.581 5.345-5.825 8.837-6.731 3.729-.968 8.003-.598 12.824 1.109v21.735h7.962l1.065 3.758 10.268-2.712-2.114-3.958 8.473-3.057-6.36-19.922c3.715-3.226 7.379-5.086 10.99-5.58 3.871-.53 7.69.307 11.458 2.51l1.79 18.327 8.01-.655v6.09C257.768 426.238 369.812 409.134 434 408v283.733H-31z",fill:"#293234"}}),r("path",{ref:"hillFront",attrs:{d:"M-47.907 784L458 789c-31.593-104.58-50.357-158.91-56.293-162.991-.523-.36 4.793-8.585 15.95-24.677l-11.533-13.847 22.144-81.765c-12.563-8.158-25.577-12.682-39.042-13.57-13.658-.902-27.766 1.831-42.326 8.199l-17.217 64.422-14.699-2.992-5.396 12.021c-7.203-2.417-10.698-4.154-18.483-6.364-.84-.238 1.709-4.065 7.645-11.48l-16.924-9.382 18.145-51.084c-6.789-9.328-16.455-15.067-28.998-17.218-9.103-1.56-21.084.468-35.942 6.085L229.067 538l-17.2-1.732-2.453 13.822-15.423-4.955 1.31-16.138h-14.415l6.797-46.553c-9.053-8.704-18.773-13.68-29.161-14.93-9.856-1.186-20.378 1.355-31.568 7.623l-2.805 46.307-18.562-1.187v18.593c-6.9-.114-75.587-9.853-153.494 3.803V784z",fill:"#220d31"}})])},p=[],y=r("XyMi");function f(t){r("W0m0")}var h=!1,d=f,m=null,x=null,v=Object(y["a"])(l,u,p,h,d,m,x),$=v.exports,g={name:"App",components:{Background:$}},b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Background"),r("router-view")],1)},w=[];function k(t){r("G3BA")}var O=!1,S=k,M=null,_=null,D=Object(y["a"])(g,b,w,O,S,M,_),T=D.exports,q=r("/ocq"),B=r("dHDZ"),C={name:"Home",computed:{query:{get:function(){return this.$store.state.query},set:function(t){this.$store.commit("setQuery",t)}},info:function(){return null===this.$store.state.deathState?"":"dead"===this.$store.state.deathState?"Die is hartstikke dood!":"alive"===this.$store.state.deathState?"Deze persoon leeft nog.":void 0}},methods:{submit:function(){var t=this;this.$store.commit("setDeathState",null),this.$store.state.query.length<1||B.fetch(this.query,"en",function(e,r){if(r.infobox(0)){var i=r.infobox(0).data;"death_date"in i?t.$store.commit("setDeathState","dead"):t.$store.commit("setDeathState","alive")}})}}},j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){e.preventDefault(),t.submit()}}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),r("button",{attrs:{type:"submit"}},[t._v("submit")]),r("p",[t._v(t._s(this.info))])])},U=[],I=!1,H=null,N=null,z=null,A=Object(y["a"])(C,j,U,I,H,N,z),E=A.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],G=null,L=!1,W=null,P=null,Q=null,J=Object(y["a"])(G,F,V,L,W,P,Q),R=J.exports;c["a"].use(q["a"]);var X=new q["a"]({routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:R}]}),Y={query:"",deathState:null};function Z(t,e){t.query=e}function K(t,e){t.deathState=e}var tt=r("UjVw"),et=r("mUbh");c["a"].use(n["a"]);var rt=new n["a"].Store({strict:!1,state:Y,mutations:i,getters:tt,actions:et}),it=r("ydGU");Object(it["a"])("".concat("/istochaldood/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),c["a"].config.productionTip=!1,new c["a"]({router:X,store:rt,render:function(t){return t(T)}}).$mount("#app")},UjVw:function(t,e){},W0m0:function(t,e){},mUbh:function(t,e){}},[0]);
//# sourceMappingURL=app.af23de0a.js.map