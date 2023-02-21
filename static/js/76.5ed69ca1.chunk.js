"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{25:function(t,e,n){n.d(e,{Ph:function(){return v},YJ:function(){return l},_L:function(){return s},sR:function(){return h},yo:function(){return f}});var r=n(861),a=n(757),c=n.n(a),o=n(912),u="b5c9f17b4578fb7f9b4d9d1272c464ac",i="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=",1));case 3:return e=t.sent,n=e.data.results,r=n.map((function(t){return{title:t.title,id:t.id,overview:t.overview}})),t.abrupt("return",{films:r});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),p=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:"https://cdn-icons-png.flaticon.com/512/25/25634.png"},l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s,l,f,v,h,d,m,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return n=t.sent,r=n.data,a=r.poster_path,s=r.title,l=r.release_date,f=r.overview,v=r.genres,h=r.vote_average,d=r.vote_count,m=r.popularity,_=r.original_title,t.abrupt("return",{poster_path:p(a),title:s,release_date:l,overview:f,genres:v&&v.map((function(t){return t.name})).join(" "),vote_average:h,vote_count:d,popularity:m,original_title:_});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,profile_path:p(a)}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),o=n.n(c),u=n(689),i=n(791),s=n(25),p="Cast_img__-isbW",l="Cast_list__GlWio",f=n(966),v=n(184),h=function(){var t=(0,u.UO)().movieId,e=(0,i.useState)([]),n=(0,a.Z)(e,2),c=n[0],h=n[1],d=(0,i.useState)(!1),m=(0,a.Z)(d,2),_=m[0],g=m[1];return(0,i.useEffect)((function(){g(!0);var e=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.yo)(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,v.jsx)(v.Fragment,{children:_?(0,v.jsx)(f.Z,{}):(0,v.jsx)("ul",{className:l,children:c.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{className:p,src:a,alt:n}),(0,v.jsx)("h2",{children:n}),(0,v.jsxs)("p",{children:["Character: ",r]})]},e)}))})})}}}]);
//# sourceMappingURL=76.5ed69ca1.chunk.js.map