(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=n(1),l=n(2),s=n(4),m=n(3),u=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()}),console.log(e.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log(e.name===this.props.name||"The clock was renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.time;return o.a.createElement("span",null,e)}}]),n}(o.a.Component),p=(n(12),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!0,name:1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isClockVisible,a=t.name;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,n&&"React clock ".concat(a)),o.a.createElement("p",null,"Current time: ",n&&o.a.createElement(u,{name:this.state.name})),o.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!0})}},"Show Clock"),o.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!1})}},"Hide Clock"),o.a.createElement("button",{type:"button",onClick:function(){e.setState({name:Math.floor(1e3*Math.random())})}},"Set random name"))}}]),n}(o.a.Component));r.a.render(o.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.55dee01d.chunk.js.map