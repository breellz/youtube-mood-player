(this["webpackJsonpYoutube-Mood-player"]=this["webpackJsonpYoutube-Mood-player"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),u=n(1),i=o.a.createContext(),l=function(e,t){switch(t.type){case"SELECT_MOOD":return t.id;default:return e}},s="Youtube Mood-Player",d="fetch videos based on your mood",m=function(){return o.a.createElement("div",{className:"center header"},o.a.createElement("h1",null,s),o.a.createElement("h3",null,d))},h=function(e){var t="https://www.youtube.com/embed/".concat(e.videoId);return o.a.createElement("div",{className:"center framelist"},o.a.createElement("iframe",{src:t,title:e.title}),o.a.createElement("h3",null,"Title: ",e.title))},p=function(){var e=Object(a.useContext)(i).state;return e?o.a.createElement("div",{className:"frame"},e.map((function(e){return o.a.createElement(h,{key:e.id.videoId,videoId:e.id.videoId,title:e.snippet.title,thumbnail:e.snippet.thumbnails.high.url})}))):o.a.createElement("p",null,"Loading")},f=function(){var e=Object(a.useContext)(i).dispatch,t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),d=s[0],m=s[1];return o.a.createElement("div",{className:"wrapper"},o.a.createElement("button",{onClick:function(){var t=[];m("happy"),fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=happy%20songs&key=AIzaSyB6cG0ooaQQN5Gwx2U38mOFddas8eZf4nc").then((function(e){return e.json()})).then((function(e){return e.items.forEach((function(e){t.push(e)}))})).catch((function(e){return console.log(e)})),r(t),e({type:"SELECT_MOOD",mood:d,id:c})}},"Happy"),o.a.createElement("button",{onClick:function(){var t=[];m("sad"),fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=sad%20songs&key=AIzaSyB6cG0ooaQQN5Gwx2U38mOFddas8eZf4nc").then((function(e){return e.json()})).then((function(e){return e.items.forEach((function(e){t.push(e)}))})).catch((function(e){return console.log(e)})),r(t),e({type:"SELECT_MOOD",mood:d,id:c})}},"Sad"))},E=(n(9),function(){var e=Object(a.useReducer)(l,[]),t=Object(u.a)(e,2),n=t[0],c=t[1];return o.a.createElement(i.Provider,{value:{state:n,dispatch:c}},o.a.createElement(m,null),o.a.createElement(f,null),o.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.a01c531d.chunk.js.map