"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{26:function(t,e,r){r.d(e,{Ph:function(){return v},YJ:function(){return p},_L:function(){return s},sR:function(){return f},yo:function(){return l}});var n=r(861),a=r(757),c=r.n(a),o=r(912),u="b5c9f17b4578fb7f9b4d9d1272c464ac",i="https://api.themoviedb.org/3",s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=",1));case 3:return e=t.sent,r=e.data.results,n=r.map((function(t){return{title:t.title,id:t.id,overview:t.overview}})),t.abrupt("return",{films:n});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,s,p,l,v,f,h,d,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return r=t.sent,n=r.data,a=n.poster_path,s=n.title,p=n.release_date,l=n.overview,v=n.genres,f=n.vote_average,h=n.vote_count,d=n.popularity,_=n.original_title,t.abrupt("return",{poster_path:a,title:s,release_date:p,overview:l,genres:v,vote_average:f,vote_count:h,popularity:d,original_title:_});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast.map((function(t){return{id:t.id,name:t.name,character:t.character,profile_path:t.profile_path}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,title:t.title}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),o=r.n(c),u=r(689),i=r(791),s=r(26),p="Cast_img__-isbW",l="Cast_list__GlWio",v=r(184),f=function(){var t=(0,u.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),c=r[0],f=r[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.yo)(t);case 3:r=e.sent,console.log(r),f(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()})),(0,v.jsx)("ul",{className:l,children:c.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500"+a,alt:r}),(0,v.jsx)("h2",{children:r}),(0,v.jsxs)("p",{children:["Character: ",n]})]},e)}))})}}}]);
//# sourceMappingURL=76.d79a9eaa.chunk.js.map