(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{19:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(12),s=a.n(n),r=(a(19),a(2)),i=a(3),j=a(6),l=a(0),d=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),d=r[0],o=r[1];Object(c.useEffect)((function(){o(!0),fetch("http://localhost:5000/").then((function(e){return e.json()})).then((function(e){n(e.data),o(!1)}))}),[]);var h=a.map((function(e){return Object(l.jsx)("div",{className:"team_card",children:Object(l.jsx)("button",{type:"submit",children:Object(l.jsxs)(j.b,{to:"/team/".concat(e.Team,"/").concat(e._id),children:[Object(l.jsx)("div",{className:"team-image-div",children:Object(l.jsx)("img",{src:e.image})}),Object(l.jsxs)("div",{className:"team-content-div",children:[Object(l.jsx)("h1",{children:e.Name}),Object(l.jsx)("p",{children:e.Team})]})]})})},e._id)}));return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("h1",{}),d&&Object(l.jsx)("p",{style:{textAlign:"center",fontSize:"40px"},children:"Loading..."}),!d&&Object(l.jsx)("div",{className:"team_cards",children:h})]})},o=(a(29),function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),a=(t[0],t[1]);return Object(l.jsx)("div",{className:"navigation",children:Object(l.jsxs)("nav",{className:"nav_bar",children:[Object(l.jsx)("div",{className:"nav_search_bar",children:Object(l.jsx)("input",{type:"search",placeholder:"Search by team name",onChange:function(e){a(e.target.value)}})}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("div",{children:"Home"})}),Object(l.jsx)(j.b,{to:"/add-player",children:Object(l.jsx)("div",{children:"Add Player"})})]})})}),h=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(i.a)(s,2),d=r[0],o=r[1],h=Object(c.useState)(),b=Object(i.a)(h,2),O=b[0],m=b[1],u=Object(c.useState)(),p=Object(i.a)(u,2),x=p[0],f=p[1],y=Object(c.useState)(),v=Object(i.a)(y,2),g=v[0],N=v[1],S=Object(c.useState)(),_=Object(i.a)(S,2),D=_[0],P=_[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form_data",action:"/add-player",method:"POST",children:[Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"code",children:Object(l.jsx)("input",{type:"text",className:"input",name:"code",required:!0,placeholder:"Enter code 345235",onChange:function(e){n(e.target.value)}})})}),Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"playerName",children:Object(l.jsx)("input",{type:"text",className:"input",name:"playerName",required:!0,placeholder:"Enter Player Name",onChange:function(e){o(e.target.value)}})})}),Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"from",children:Object(l.jsx)("input",{type:"text",className:"input",name:"from",required:!0,placeholder:"Enter Team Name",onChange:function(e){m(e.target.value)}})})}),Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"price",children:Object(l.jsx)("input",{type:"text",className:"input",name:"price",required:!0,placeholder:"Enter Price",onChange:function(e){f(e.target.value)}})})}),Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"isPlaying",children:Object(l.jsx)("input",{type:"text",className:"input",name:"isPlaying",required:!0,placeholder:"Enter Is Playing",onChange:function(e){N(e.target.value)}})})}),Object(l.jsx)("div",{className:"form_inputs",children:Object(l.jsx)("label",{htmlFor:"description",children:Object(l.jsx)("input",{type:"text",className:"input",name:"description",required:!0,placeholder:"Enter Description",onChange:function(e){P(e.target.value)}})})}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var t={code:a,name:d,from:O,price:x,isplaying:g,description:D};console.log(t),fetch("http://localhost:5000/add-player",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){e.json()}))},children:Object(l.jsx)(j.b,{className:"button_link",to:"/",children:"Add Data"})})]})})},b=function(){var e=Object(r.f)(),t=e.teamdata,a=e.teamId,n=Object(c.useState)([]),s=Object(i.a)(n,2),d=s[0],o=s[1],h=Object(c.useState)(),b=Object(i.a)(h,2),O=b[0],m=b[1],u=Object(c.useState)(!1),p=Object(i.a)(u,2),x=p[0],f=p[1],y=Object(c.useState)([]),v=Object(i.a)(y,2),g=(v[0],v[1]),N=Object(c.useState)([]),S=Object(i.a)(N,2),_=S[0],D=S[1],P=Object(c.useState)(null),F=Object(i.a)(P,2),E=F[0],T=F[1];Object(c.useEffect)((function(){fetch("http://localhost:5000/team/".concat(t,"/").concat(a)).then((function(e){return e.json()})).then((function(e){D(e.header),o(e.data),m(e.data.length),T(e.team),f(!0)})),fetch("http://localhost:5000/").then((function(e){return e.json()})).then((function(e){g(e.data)}))}),[t,O]);var C=_.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:["Top BatsMan: ",e.Batsman]}),Object(l.jsxs)("h3",{children:["Top Bowler: ",e.Bowler]})]})})),q=d.map((function(e){return Object(l.jsx)("div",{className:"team",children:Object(l.jsx)("button",{type:"submit",children:Object(l.jsxs)(j.b,{to:"/playerName/".concat(e._id),children:[Object(l.jsx)("div",{className:"team-image-div",children:Object(l.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png"})}),Object(l.jsxs)("div",{className:"team-content-div",children:[Object(l.jsxs)("h1",{children:["Player Name:"," ",Object(l.jsx)("span",{style:{color:"olive",fontSize:"40px"},children:e.playerData.playerName})]}),Object(l.jsxs)("h2",{children:["From: ",e.playerData.from]}),Object(l.jsxs)("h3",{children:["Description: ",e.playerData.description]}),Object(l.jsxs)("h4",{children:["Price: ",e.playerData.price]}),Object(l.jsxs)("h5",{children:["Is Playing: ",e.playerData.isPlaying]})]})]})})},e.playerData._id)}));return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Team Name: ",E," "]}),Object(l.jsxs)("h2",{children:["Total Players: ",O]})]}),Object(l.jsx)("div",{children:C}),!x&&Object(l.jsx)("p",{children:"No Data Found..."}),0!=d.length&&d&&Object(l.jsx)("div",{className:"team_players",children:q})]})},O=function(){var e=Object(r.f)().playerdata,t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){fetch("http://localhost:5000/playerName/".concat(e)).then((function(e){return e.json()})).then((function(e){s(e.data)}))}),[]);var j=n.map((function(e){return Object(l.jsxs)("div",{className:"player_data",children:[Object(l.jsx)("div",{className:"team-image-div",children:Object(l.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png",width:"50%",height:"50%"})}),Object(l.jsxs)("div",{className:"team-content-div",children:[Object(l.jsxs)("h1",{children:["Player Name:"," ",Object(l.jsx)("span",{style:{color:"olive",fontSize:"40px"},children:e.playerData.playerName})]}),Object(l.jsxs)("h2",{children:["From: ",e.playerData.from]}),Object(l.jsxs)("h3",{children:["Description: ",e.playerData.description]}),Object(l.jsxs)("h4",{children:["Price: ",e.playerData.price]}),Object(l.jsxs)("h5",{children:["Is Playing: ",e.playerData.isPlaying]})]})]},e._id)}));return Object(l.jsx)("div",{style:{textAlign:"center"},children:j})},m=function(){return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,children:Object(l.jsx)(d,{})}),Object(l.jsx)(r.a,{path:"/add-player",exact:!0,children:Object(l.jsx)(h,{})}),Object(l.jsx)(r.a,{path:"/team/:teamdata/:teamId",children:Object(l.jsx)(b,{})}),Object(l.jsx)(r.a,{path:"/playerName/:playerdata",children:Object(l.jsx)(O,{})})]})]})};s.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2e958584.chunk.js.map