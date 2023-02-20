"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{25:function(e,t,n){n.d(t,{Ph:function(){return d},YJ:function(){return p},_L:function(){return u},sR:function(){return h},yo:function(){return v}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="b5c9f17b4578fb7f9b4d9d1272c464ac",o="https://api.themoviedb.org/3",l="https://cdn-icons-png.flaticon.com/512/25/25634.png",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=",1));case 3:return t=e.sent,n=t.data.results,r=n.map((function(e){return{title:e.title,id:e.id,overview:e.overview}})),e.abrupt("return",{films:r});case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,u,p,v,d,h,_,m,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,r=n.data,a=r.poster_path,u=r.title,p=r.release_date,v=r.overview,d=r.genres,h=r.vote_average,_=r.vote_count,m=r.popularity,f=r.original_title,e.abrupt("return",{poster_path:a?"https://image.tmdb.org/t/p/w500"+a:l,title:u,release_date:p,overview:v,genres:d,vote_average:h,vote_count:_,popularity:m,original_title:f});case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,profile_path:a?"https://image.tmdb.org/t/p/w500"+a:l}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,title:e.title}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r,a=n(861),s=n(439),c=n(168),i=n(757),o=n.n(i),l=n(791),u=n(25),p=n(87),v=n(689),d="MovieDetails_img__uOAom",h="MovieDetails_title__cUGs9",_="MovieDetails_container__Ys+c9",m="MovieDetails_button__uXZxd",f="MovieDetails_movieDetails__EbgQo",x="MovieDetails_infoList__KylaC",g="MovieDetails_infoItem__bqSRP",j="MovieDetails_infoText__N+-q+",w="MovieDetails_infoName__9+xy7",N="MovieDetails_spanSlash__zbQUV",b="MovieDetails_spanVotes__9AGPQ",y="MovieDetails_navLink__uPVwm",k="MovieDetails_item__mbUY+",Z=n(444),D=n(966),M=n(184),P=(0,Z.ZP)(p.OL)(r||(r=(0,c.Z)(["\n  &.active {\n    color: orangered;\n  }\n"]))),O=function(){var e,t,n=(0,v.UO)().movieId;console.log(n);var r=(0,l.useState)({}),c=(0,s.Z)(r,2),i=c[0],Z=c[1],O=(0,v.TH)(),U=(0,l.useState)(!1),V=(0,s.Z)(U,2),C=V[0],G=V[1];(0,l.useEffect)((function(){G(!0);var e=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.YJ)(n);case 3:t=e.sent,Z(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,G(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var L=null!==(e=null===(t=O.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,M.jsx)(M.Fragment,{children:C?(0,M.jsx)(D.Z,{}):(0,M.jsxs)("div",{children:[(0,M.jsx)(p.rU,{className:m,to:L,children:"\u2190 Go back"}),(0,M.jsxs)("div",{className:_,children:[(0,M.jsx)("img",{className:d,src:i.poster_path,alt:i.name}),(0,M.jsxs)("div",{className:f,children:[(0,M.jsx)("h1",{className:h,children:i.title}),(0,M.jsxs)("ul",{className:x,children:[(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Vote / Votes"}),(0,M.jsxs)("p",{className:j,children:[(0,M.jsx)("span",{className:b,children:i.vote_average}),(0,M.jsx)("span",{className:N,children:" / "}),(0,M.jsx)("span",{className:b,children:i.vote_count})]})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Popularity"}),(0,M.jsx)("p",{className:j,children:i.popularity})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Original Title"}),(0,M.jsx)("p",{className:j,children:i.original_title})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Genre"}),(0,M.jsx)("p",{className:j,children:i.genres&&i.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,M.jsx)("p",{className:w,children:"Overview"}),(0,M.jsx)("p",{children:i.overview})]})]}),(0,M.jsxs)("ul",{className:k,children:[(0,M.jsx)("li",{children:(0,M.jsx)(P,{className:y,to:"cast",state:{from:L},children:"Cast"})}),(0,M.jsx)("li",{children:(0,M.jsx)(P,{className:y,to:"reviews",state:{from:L},children:"Reviews"})})]}),(0,M.jsx)(v.j3,{})]})})}}}]);
//# sourceMappingURL=135.2e51692f.chunk.js.map