(this.webpackJsonptoolist=this.webpackJsonptoolist||[]).push([[0],{35:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var n=t(0),c=t(1),a=t.n(c),i=t(20),r=t.n(i),l=t(4),j=t(2),o=t(16),m=t.n(o),d=t(21),b=t(5),O=t(23),v=t(12),h=function(e,s){switch(s.type){case"ADD_MOVIE_TO_NOMINEES":return Object(v.a)(Object(v.a)({},e),{},{Nominees:[s.payload].concat(Object(O.a)(e.Nominees))});case"REMOVE_MOVIE_FROM_NOMINEES":return Object(v.a)(Object(v.a)({},e),{},{Nominees:e.Nominees.filter((function(e){return e.imdbID!==s.payload}))});default:return e}},N={Nominees:localStorage.getItem("Nominees")?JSON.parse(localStorage.getItem("Nominees")):[]},u=Object(c.createContext)(N),x=function(e){var s=Object(c.useReducer)(h,N),t=Object(b.a)(s,2),a=t[0],i=t[1];Object(c.useEffect)((function(){localStorage.setItem("Nominees",JSON.stringify(a.Nominees))}),[a]);return Object(n.jsx)(u.Provider,{value:{Nominees:a.Nominees,addMovietoNominees:function(e){i({type:"ADD_MOVIE_TO_NOMINEES",payload:e})},removeMovieFromNominees:function(e){i({type:"REMOVE_MOVIE_FROM_NOMINEES",payload:e})}},children:e.children})},f=function(e){var s=e.movie,t=Object(c.useContext)(u),a=t.addMovietoNominees,i=t.Nominees,r=!!i.find((function(e){return e.imdbID===s.imdbID}))||i.length>4;return Object(n.jsxs)("div",{className:"result-card",children:[Object(n.jsx)("div",{className:"poster-wrapper",children:s.Poster?Object(n.jsx)("img",{src:s.Poster,alt:s.Title}):Object(n.jsx)("div",{className:"filler-poster"})}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h3",{className:"title",children:s.Title}),Object(n.jsx)("h4",{className:"release-date",children:s.Year})]}),Object(n.jsx)("div",{className:"controls",children:Object(n.jsx)("button",{className:"btn",disabled:r,onClick:function(){return a(s)},children:"Add to Nominated movies"})})]})]})},p=function(){var e=Object(c.useState)(!1),s=Object(b.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(null),r=Object(b.a)(i,2),j=(r[0],r[1]),o=Object(c.useState)(""),O=Object(b.a)(o,2),v=O[0],h=O[1],N=Object(c.useState)(!1),u=Object(b.a)(N,2),x=u[0],p=u[1],M=Object(c.useState)([]),S=Object(b.a)(M,2),g=S[0],y=S[1],E=function(){var e=Object(d.a)(m.a.mark((function e(s){var t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a(!0),t="http://www.omdbapi.com/?&apikey=c5b0e5f8&s=".concat(v,'&type="movie"'),e.prev=3,e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,j(null),y(c.Search),a(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),j("An unexpected error occured."),a(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(s){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"inner-content",children:[Object(n.jsx)("div",{className:"navbar-logo",children:"GLOBAL MOVIES AWARDS"}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return p(!x)},children:Object(n.jsx)("i",{className:x?"fas fa-times":"fas fa-bars"})}),Object(n.jsxs)("ul",{className:x?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Nominee",className:"nav-links",children:"Nominees"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/NominateMovies",className:"nav-links",children:"Nominate a Movie"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Terms",className:"nav-links",children:"Terms and Condition"})})]})]})}),Object(n.jsx)("div",{className:"add-page",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"add-content",children:[Object(n.jsx)("div",{className:"input-wrapper",children:Object(n.jsxs)("form",{onSubmit:E,children:[Object(n.jsx)("input",{type:"text",name:"query",placeholder:"Search movies by name...",value:v,onChange:function(e){return h(e.target.value)}}),Object(n.jsx)("button",{type:"submit",className:"btn",children:"Search"})]})}),t?Object(n.jsx)("span",{children:" loading... "}):Object(n.jsx)("ul",{className:"results",children:g.map((function(e,s){return Object(n.jsx)("li",{children:Object(n.jsx)(f,{movie:e})},s)}))})]})})})]})},M=function(){var e=Object(c.useState)(!1),s=Object(b.a)(e,2),t=s[0],a=s[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"inner-content",children:[Object(n.jsx)("div",{className:"navbar-logo",children:"GLOBAL MOVIES AWARDS"}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return a(!t)},children:Object(n.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(n.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Nominee",className:"nav-links",children:"Nominees"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/NominateMovies",className:"nav-links",children:"Nominate a Movie"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Terms",className:"nav-links",children:"Terms and Condition"})})]})]})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Terms"}),Object(n.jsx)("p",{className:"container",children:"you are only permited to nominate a maximum of five movies, after your nominees exceeds five. you are exempted from nominating further."})]})]})},S=function(e){var s=e.movie,t=Object(c.useContext)(u).removeMovieFromNominees;return Object(n.jsx)("div",{className:"inner-card-controls",children:Object(n.jsx)("button",{className:"btn",onClick:function(){return t(s.imdbID)},children:"delete"})})},g=function(e){var s=e.movie;return Object(n.jsxs)("div",{className:"movie-card",children:[Object(n.jsx)("div",{className:"overlay"}),s.Poster?Object(n.jsx)("img",{src:s.Poster,alt:s.Title}):Object(n.jsx)("div",{className:"filler-poster"}),Object(n.jsx)(S,{movie:s})]})},y=function(){var e=Object(c.useState)(!1),s=Object(b.a)(e,2),t=s[0],a=s[1],i=Object(c.useContext)(u).Nominees;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"inner-content",children:[Object(n.jsx)("div",{className:"navbar-logo",children:"GLOBAL MOVIES AWARDS"}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return a(!t)},children:Object(n.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(n.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Nominee",className:"nav-links",children:"Nominees"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/NominateMovies",className:"nav-links",children:"Nominate a Movie"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Terms",className:"nav-links",children:"Terms and Condition"})})]})]})}),Object(n.jsx)("div",{className:"movie-page",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{className:"heading",children:"Nominees"})}),i.length>0?Object(n.jsx)("div",{className:"movie-grid",children:i.map((function(e){return Object(n.jsx)(g,{movie:e})}))}):Object(n.jsx)("h2",{className:"no-movies",children:"you have not nominated any movies yet, add some!"})]})})]})},E=function(){var e=Object(c.useState)(!1),s=Object(b.a)(e,2),t=s[0],a=s[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"inner-content",children:[Object(n.jsx)("div",{className:"navbar-logo",children:"GLOBAL MOVIES AWARDS"}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return a(!t)},children:Object(n.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(n.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Nominee",className:"nav-links",children:"Nominees"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/NominateMovies",className:"nav-links",children:"Nominate a Movie"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{to:"/Terms",className:"nav-links",children:"Terms and Condition"})})]})]})}),Object(n.jsx)("div",{className:"st",children:Object(n.jsx)("p",{className:"front",children:"WELCOME TO GLOBAL MOVIES AWARD NOMINATIONS, Where you get to select a movie for the global awards.. please nominate a movie"})})]})};t(35);var k=function(e){return Object(n.jsx)(x,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(a.a.Fragment,{children:Object(n.jsx)(E,{})})}}),Object(n.jsx)(j.a,{exact:!0,path:"/Nominee",children:Object(n.jsx)(y,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/NominateMovies",children:Object(n.jsx)(p,{})}),Object(n.jsx)(j.a,{path:"/Terms",children:Object(n.jsx)(M,{})})]})})};r.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.eb16358e.chunk.js.map