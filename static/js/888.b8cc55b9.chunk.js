"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{26:function(e,t,n){n.d(t,{Ph:function(){return v},YJ:function(){return u},_L:function(){return l},sR:function(){return _},yo:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="b5c9f17b4578fb7f9b4d9d1272c464ac",o="https://api.themoviedb.org/3",l=function(){var e=(0,r.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=",1));case 3:return t=e.sent,n=t.data.results,r=n.map((function(e){return{title:e.title,id:e.id,overview:e.overview}})),e.abrupt("return",{films:r});case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a,l,u,p,v,_,h,d,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,r=n.data,a=r.poster_path,l=r.title,u=r.release_date,p=r.overview,v=r.genres,_=r.vote_average,h=r.vote_count,d=r.popularity,f=r.original_title,e.abrupt("return",{poster_path:a,title:l,release_date:u,overview:p,genres:v,vote_average:_,vote_count:h,popularity:d,original_title:f});case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.cast.map((function(e){return{id:e.id,name:e.name,character:e.character,profile_path:e.profile_path}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,title:e.title}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var r,a=n(861),s=n(439),c=n(168),i=n(757),o=n.n(i),l=n(791),u=n(26),p=n(87),v=n(689),_="MovieDetails_img__D3WH9",h="MovieDetails_title__RBndM",d="MovieDetails_container__o8VqJ",f="MovieDetails_button__PGjyO",m="MovieDetails_movieDetails__EqwEX",x="MovieDetails_infoList__HOFU-",g="MovieDetails_infoItem__Ycqi2",j="MovieDetails_infoText__NA9FO",w="MovieDetails_infoName__WuyYT",N="MovieDetails_spanSlash__qdZMn",y="MovieDetails_spanVotes__6G2iC",k="MovieDetails_navLink__rUGTm",b="MovieDetails_item__9ATw3",D=n(444),M=n(184),Z=(0,D.ZP)(p.OL)(r||(r=(0,c.Z)(["\n  &.active {\n    color: orangered;\n  }\n"]))),O=function(){var e=(0,v.UO)().movieId,t=(0,l.useState)({}),n=(0,s.Z)(t,2),r=n[0],c=n[1],i=(0,v.TH)(),p=(0,v.s0)();(0,l.useEffect)((function(){var t=function(){var t=(0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.YJ)(e);case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}));return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:d,children:[(0,M.jsx)("button",{className:f,onClick:function(){p(i+"/")},children:"Go back \u2190"}),(0,M.jsx)("img",{className:_,src:"https://image.tmdb.org/t/p/w500"+r.poster_path,alt:r.name}),(0,M.jsxs)("div",{className:m,children:[(0,M.jsx)("h1",{className:h,children:r.title}),(0,M.jsxs)("ul",{className:x,children:[(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Vote / Votes"}),(0,M.jsxs)("p",{className:j,children:[(0,M.jsx)("span",{className:y,children:r.vote_average}),(0,M.jsx)("span",{className:N,children:" / "}),(0,M.jsx)("span",{className:y,children:r.vote_count})]})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Popularity"}),(0,M.jsx)("p",{className:j,children:r.popularity})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Original Title"}),(0,M.jsx)("p",{className:j,children:r.original_title})]}),(0,M.jsxs)("li",{className:g,children:[(0,M.jsx)("p",{className:w,children:"Genre"}),(0,M.jsxs)("p",{className:j,children:["Genres",r.genres&&r.genres.map((function(e){return e.name}))]})]})]}),(0,M.jsx)("p",{className:w,children:"Overview"}),(0,M.jsx)("p",{children:r.overview})]})]}),(0,M.jsxs)("ul",{className:b,children:[(0,M.jsx)("li",{children:(0,M.jsx)(Z,{className:k,to:"cast",children:"Cast"})}),(0,M.jsx)("li",{children:(0,M.jsx)(Z,{className:k,to:"reviews",children:"Reviews"})})]}),(0,M.jsx)(v.j3,{})]})}}}]);
//# sourceMappingURL=888.b8cc55b9.chunk.js.map