(function(){"use strict";var t={5434:function(t,n,e){var o=e(5130),r=e(6768);const i={id:"app"};function a(t,n,e,o,a,s){const c=(0,r.g2)("ScrollTextAnimation");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(c)])}var s=e(4232);const c=t=>((0,r.Qi)("data-v-5597cdfd"),t=t(),(0,r.jt)(),t),u={class:"text-block",ref:"textBlock"},l={ref:"lastWord",class:"last-word"},f={class:"next-section",ref:"nextSection"},d=c((()=>(0,r.Lk)("h1",null,null,-1))),p=[d];function v(t,n,e,o,i,a){return(0,r.uX)(),(0,r.CE)("div",{class:(0,s.C4)(["container",{dark:i.isDarkMode}])},[(0,r.Lk)("div",u,[(0,r.eW)(" This is a sample block of text that will be animated using different "),(0,r.Lk)("span",l,"effects.",512)],512),(0,r.Lk)("div",f,p,512),(0,r.Lk)("button",{class:"dark-mode-toggle",onClick:n[0]||(n[0]=(...t)=>a.toggleDarkMode&&a.toggleDarkMode(...t))},[(0,r.Lk)("i",{class:(0,s.C4)(i.isDarkMode?"fas fa-sun":"fas fa-moon")},null,2),(0,r.eW)(" "+(0,s.v_)(a.darkModeText),1)])],2)}var k=e(4968),h=e(940);k.os.registerPlugin(h.u);var g={name:"ScrollTextAnimation",data(){return{isDarkMode:!1}},computed:{darkModeText(){return this.isDarkMode?"Light":"Dark"}},mounted(){this.initScrollAnimation()},methods:{toggleDarkMode(){this.isDarkMode=!this.isDarkMode},initScrollAnimation(){k.os.set(this.$refs.lastWord,{opacity:0,y:-150}),h.u.create({trigger:this.$refs.textBlock,start:"top center",end:"+=300",scrub:!0,pin:!0,onUpdate:t=>{const n=t.progress;k.os.to(this.$refs.lastWord,{opacity:n>.2?n:0,y:-500*(1-n),duration:.5,ease:"none"})},onLeave:()=>this.enableNextSection(),markers:!1})},enableNextSection(){h.u.create({trigger:this.$refs.nextSection,start:"top bottom",end:"bottom top",pin:!1,pinSpacing:!1})}}},m=e(1241);const b=(0,m.A)(g,[["render",v],["__scopeId","data-v-5597cdfd"]]);var x=b,y={name:"App",components:{ScrollTextAnimation:x}};const M=(0,m.A)(y,[["render",a]]);var O=M;(0,o.Ef)(O).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var l=c(e)}for(n&&n(o);u<a.length;u++)i=a[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},o=self["webpackChunkscroll_animation_app"]=self["webpackChunkscroll_animation_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(5434)}));o=e.O(o)})();
//# sourceMappingURL=app.10696852.js.map