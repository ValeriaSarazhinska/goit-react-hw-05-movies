"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[10],{25:function(t,e,r){r.d(e,{Ph:function(){return v},YJ:function(){return l},_L:function(){return p},sR:function(){return h},yo:function(){return f}});var n=r(861),a=r(757),c=r.n(a),o=r(912),u="b5c9f17b4578fb7f9b4d9d1272c464ac",i="https://api.themoviedb.org/3",s="https://cdn-icons-png.flaticon.com/512/25/25634.png",p=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=",1));case 3:return e=t.sent,r=e.data.results,n=r.map((function(t){return{title:t.title,id:t.id,overview:t.overview}})),t.abrupt("return",{films:n});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,p,l,f,v,h,m,_,d;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return r=t.sent,n=r.data,a=n.poster_path,p=n.title,l=n.release_date,f=n.overview,v=n.genres,h=n.vote_average,m=n.vote_count,_=n.popularity,d=n.original_title,t.abrupt("return",{poster_path:a?"https://image.tmdb.org/t/p/w500"+a:s,title:p,release_date:l,overview:f,genres:v,vote_average:h,vote_count:m,popularity:_,original_title:d});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return{id:e,name:r,character:n,profile_path:a?"https://image.tmdb.org/t/p/w500"+a:s}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,title:t.title}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},510:function(t,e,r){r.d(e,{e:function(){return i}});var n="MovieList_item__tDivI",a="MovieList_list__yjDCC",c="MovieList_navLink__Y0vr9",o=r(87),u=r(184),i=function(t){var e=t.movies,r=t.location;return(0,u.jsx)("ul",{className:a,children:e.map((function(t){var e=t.id,a=t.title;return(0,u.jsx)("li",{className:n,children:(0,u.jsx)(o.OL,{className:c,to:"/movies/".concat(e),state:{from:r},children:a})},e)}))})}},10:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(861),a=r(439),c=r(757),o=r.n(c),u=r(791),i=r(686),s="Searchbar_searchForm__Bt5yh",p="Searchbar_searchFormInput__k+juR",l="Searchbar_searchFormButton__Y7AQk",f=r(87),v=r(184),h=function(){var t=(0,u.useState)(""),e=(0,a.Z)(t,2),r=e[0],n=e[1],c=(0,f.lr)(),o=(0,a.Z)(c,2)[1];return(0,v.jsxs)("form",{className:s,onSubmit:function(t){t.preventDefault(),""!==r.trim()?(o({query:r}),n("")):i.Notify.failure("Enter a query name.")},children:[(0,v.jsx)("input",{className:p,type:"text",name:"name",value:r,onChange:function(t){n(t.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,v.jsx)("button",{className:l,type:"submit",children:(0,v.jsx)("span",{children:"Search"})})]})},m=r(25),_=r(689),d=r(510),g=r(966),y=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],s=(0,f.lr)(),p=(0,a.Z)(s,1)[0],l=(0,_.TH)(),y=(0,u.useState)(!1),x=(0,a.Z)(y,2),w=x[0],b=x[1],k=p.get("query");return(0,u.useEffect)((function(){if(k){b(!0);var t=function(){var t=(0,n.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,m.Ph)(k);case 3:if((e=t.sent).length){t.next=6;break}return t.abrupt("return",i.Notify.failure("Sorry, there are no films matching your search query. Please try again."));case 6:c(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),i.Notify.failure("Please try again.");case 12:return t.prev=12,b(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[k]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),w?(0,v.jsx)(g.Z,{}):(0,v.jsx)(d.e,{movies:r,location:l})]})}}}]);
//# sourceMappingURL=10.b5275ca7.chunk.js.map