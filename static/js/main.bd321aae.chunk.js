(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),c=a(4),o=a(7),i=a(0),l=a.n(i),u=a(5),m=a.n(u),d=(a(14),{summer:{text:"let's hit the beach",iconName:"sun"},winter:{text:"burr! it's cold!",iconName:"snowflake"}}),h=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,c=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(c," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(c," icon")}))},g=function(e){return l.a.createElement("div",{class:"ui active dimmer"},l.a.createElement("div",{class:"ui big text loader"},e.message))};g.defaultProps={message:"Loading..."};var v=g,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={lat:null,errorMessage:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return this.state.errorMessage&&!this.state.lat?l.a.createElement("div",null," Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?l.a.createElement(h,{lat:this.state.lat}):l.a.createElement(v,{message:"Please accept the location request"})}}]),t}(l.a.Component);m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd321aae.chunk.js.map