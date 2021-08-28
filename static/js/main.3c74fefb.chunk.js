(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var s=n(1),u=n.n(s),c=n(7),i=n.n(c),r=(n(13),n(2)),m=n(3),o=n(5),a=n(4),p=(n(14),n(15),n(0)),D=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h1",{className:"white tc",children:"Dice Analyzer"}),Object(p.jsx)("p",{className:"white tc",children:"This is a dice roller / analyzer for tabletop games."}),Object(p.jsx)("p",{className:"white tc",children:" Select how many dice you want and either roll them or analyze the frequency of outcomes"})]})}}]),n}(s.Component),l=n(8),h=n.n(l),d=(n(21),function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).calculateRollResult=function(){var e=t.rollDice(t.props.numD4,4)+t.rollDice(t.props.numD6,6)+t.rollDice(t.props.numD8,8)+t.rollDice(t.props.numD10,10)+t.rollDice(t.props.numD12,12)+t.rollDice(t.props.numD20,20);if(t.setState({rollResult:e}),t.state.prevNum4!==t.props.numD4||t.state.prevNum6!==t.props.numD6||t.state.prevNum8!==t.props.numD8||t.state.prevNum10!==t.props.numD10||t.state.prevNum12!==t.props.numD12||t.state.prevNum20!==t.props.numD20){t.setState({prevNum4:t.props.numD4,prevNum6:t.props.numD6,prevNum8:t.props.numD8,prevNum10:t.props.numD10,prevNum12:t.props.numD12,prevNum20:t.props.numD20});for(var n=[],s=[],u=t.calculateRangeMinimum();u<=t.calculateRangeMaximum();u++)n.push(u),s.push(0);s[e-t.calculateRangeMinimum()]+=1,t.setState({options:{xaxis:{categories:n}},series:[{data:s}]})}else{var c=t.state.series[0].data.slice();c[e-t.calculateRangeMinimum()]+=1,console.log(c),t.setState({series:[{data:c}]})}},t.state={prevNum4:0,prevNum6:0,prevNum8:0,prevNum10:0,prevNum12:0,prevNum20:0,rollResult:0,options:{chart:{id:"basic-bar"},xaxis:{categories:[0]}},series:[{name:"series-1",data:[0]}]},t}return Object(m.a)(n,[{key:"rollDice",value:function(t,e){var n=0,s=1;t<0&&(s=-1);for(var u=0;u<Math.abs(t);u++)n+=Math.floor(Math.random()*e)+1;return n*s}},{key:"calculateRangeMinimum",value:function(){return(this.props.numD4<0?4*this.props.numD4:this.props.numD4)+(this.props.numD6<0?6*this.props.numD6:this.props.numD6)+(this.props.numD8<0?8*this.props.numD8:this.props.numD8)+(this.props.numD10<0?10*this.props.numD10:this.props.numD10)+(this.props.numD12<0?12*this.props.numD12:this.props.numD12)+(this.props.numD20<0?20*this.props.numD20:this.props.numD20)}},{key:"calculateRangeMaximum",value:function(){return(this.props.numD4>0?4*this.props.numD4:this.props.numD4)+(this.props.numD6>0?6*this.props.numD6:this.props.numD6)+(this.props.numD8>0?8*this.props.numD8:this.props.numD8)+(this.props.numD10>0?10*this.props.numD10:this.props.numD10)+(this.props.numD12>0?12*this.props.numD12:this.props.numD12)+(this.props.numD20>0?20*this.props.numD20:this.props.numD20)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"dice-roll-section",children:[Object(p.jsx)("button",{className:"dice-button",onClick:this.calculateRollResult,children:"Roll Dice!"}),Object(p.jsx)("button",{className:"dice-button",children:"Analyze Roll"}),Object(p.jsxs)("p",{children:["Rolled: ",this.state.rollResult]}),Object(p.jsx)(h.a,{options:this.state.options,series:this.state.series,type:"bar",width:"500"})]})}}]),n}(s.Component)),j=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsx)("button",{onClick:this.props.action,children:this.props.title})}}]),n}(s.Component),b=(n(22),function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"counter-component",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{class:"count",children:[Object(p.jsxs)("h3",{children:[this.props.diceText?this.props.diceText:"Count",":"]}),Object(p.jsx)("h1",{children:this.props.count})]}),Object(p.jsxs)("div",{class:"buttons",children:[Object(p.jsx)(j,{title:"-",action:this.props.decFunc}),Object(p.jsx)(j,{title:"+",action:this.props.incFunc})]})]})})}}]),n}(s.Component)),N=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).incrementNumD4=function(){t.setState({numD4:t.state.numD4+1})},t.incrementNumD6=function(){t.setState({numD6:t.state.numD6+1})},t.incrementNumD8=function(){t.setState({numD8:t.state.numD8+1})},t.incrementNumD10=function(){t.setState({numD10:t.state.numD10+1})},t.incrementNumD12=function(){t.setState({numD12:t.state.numD12+1})},t.incrementNumD20=function(){t.setState({numD20:t.state.numD20+1})},t.decrementNumD4=function(){t.setState({numD4:t.state.numD4-1})},t.decrementNumD6=function(){t.setState({numD6:t.state.numD6-1})},t.decrementNumD8=function(){t.setState({numD8:t.state.numD8-1})},t.decrementNumD10=function(){t.setState({numD10:t.state.numD10-1})},t.decrementNumD12=function(){t.setState({numD12:t.state.numD12-1})},t.decrementNumD20=function(){t.setState({numD20:t.state.numD20-1})},t.state={numD4:0,numD6:0,numD8:0,numD10:0,numD12:0,numD20:0},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(D,{}),Object(p.jsx)(d,{numD4:this.state.numD4,numD6:this.state.numD6,numD8:this.state.numD8,numD10:this.state.numD10,numD12:this.state.numD12,numD20:this.state.numD20}),Object(p.jsx)("div",{class:"site-body",children:Object(p.jsxs)("div",{className:"counter-grid",children:[Object(p.jsx)(b,{diceText:"d4",incFunc:this.incrementNumD4,decFunc:this.decrementNumD4,count:this.state.numD4}),Object(p.jsx)(b,{diceText:"d6",incFunc:this.incrementNumD6,decFunc:this.decrementNumD6,count:this.state.numD6}),Object(p.jsx)(b,{diceText:"d8",incFunc:this.incrementNumD8,decFunc:this.decrementNumD8,count:this.state.numD8}),Object(p.jsx)(b,{diceText:"d10",incFunc:this.incrementNumD10,decFunc:this.decrementNumD10,count:this.state.numD10}),Object(p.jsx)(b,{diceText:"d12",incFunc:this.incrementNumD12,decFunc:this.decrementNumD12,count:this.state.numD12}),Object(p.jsx)(b,{diceText:"d20",incFunc:this.incrementNumD20,decFunc:this.decrementNumD20,count:this.state.numD20})]})}),Object(p.jsx)("footer",{class:"footer"})]})}}]),n}(s.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,s=e.getFID,u=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),u(t),c(t),i(t)}))};i.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.3c74fefb.chunk.js.map