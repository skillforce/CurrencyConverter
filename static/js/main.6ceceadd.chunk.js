(this.webpackJsonpconvector=this.webpackJsonpconvector||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},4:function(e,t,s){e.exports={app_title:"ConvertMode_app_title__2Tofr",amount_title:"ConvertMode_amount_title__2iZjd",btnBlock:"ConvertMode_btnBlock__2DnAr",coursesBlock:"ConvertMode_coursesBlock__TELBf",backBtn:"ConvertMode_backBtn__28u_a"}},48:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),i=s(19),a=s.n(i),c=(s(26),s(3)),l=(s(27),s(4)),u=s.n(l),o=s(7),b=s.n(o),j=s(0),d=b.a.coursesBlock,m=b.a.oneCourse,f=b.a.CoursesTablet,O=function(e){var t=e.rates,s=t.buyUSD,n=t.sellUSD,r=t.buyEuro,i=t.sellEuro,a=t.buyRUB,c=t.sellRUB,l=function(e){return Number(e.toFixed(2))};return Object(j.jsxs)("div",{className:d,children:[Object(j.jsx)("h3",{children:"Exchange rates:"}),Object(j.jsxs)("div",{className:f,children:[Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("span",{children:"USD"}),Object(j.jsxs)("div",{children:["Buy 1$ = ",s&&l(s)," BYN"]}),Object(j.jsxs)("div",{children:["Sell 1$ = ",n&&l(n)," BYN"]})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("span",{children:"Euro"}),Object(j.jsxs)("div",{children:["Buy 1\u20ac = ",r&&l(r)," BYN"]}),Object(j.jsxs)("div",{children:["Sell 1\u20ac = ",i&&l(i)," BYN"]})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("span",{children:"RUB"}),Object(j.jsxs)("div",{children:["Buy 1\u20bd = ",a&&(l(a)/100).toFixed(2)," BYN"]}),Object(j.jsxs)("div",{children:["Sell 1\u20bd = ",c&&(l(c)/100).toFixed(2)," BYN"]})]})]}),Object(j.jsx)("div",{})]})},x=s(9),p=s.n(x),h=s(20),y=s(21),v=s(10),g=s.n(v),_=function e(){var t=this;Object(y.a)(this,e),this._apiBase="https://belarusbank.by/api/kursExchange?city=\u041c\u043e\u0433\u0438\u043b\u0435\u0432",this.getRates=Object(h.a)(p.a.mark((function e(){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t._apiBase);case 2:return s=e.sent,console.log(s),e.abrupt("return",t._transformRates(s.data[0]));case 5:case"end":return e.stop()}}),e)}))),this._transformRates=function(e){return{buyUSD:Number(e.USD_out),sellUSD:Number(e.USD_in),buyEuro:Number(e.EUR_out),sellEuro:Number(e.EUR_in),buyRUB:Number(e.RUB_out),sellRUB:Number(e.RUB_in)}}};g.a.get("https://belarusbank.by/api/kursExchange?city=\u041c\u043e\u0433\u0438\u043b\u0435\u0432").then(console.log);var N=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{marginTop:"50px"},width:"150px",height:"150px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},B=u.a.app_title,k=u.a.amount_title,C=u.a.btnBlock,U=u.a.backBtn,T=function(e){var t=new _,s=e.amount,r=e.setIsLoading,i=e.isLoading,a=e.setIsConvertMode,l=Object(n.useState)({buyUSD:null,sellUSD:null,buyEuro:null,sellEuro:null,buyRUB:null,sellRUB:null}),u=Object(c.a)(l,2),o=u[0],b=u[1],d=function(e,t){return(e/function(){switch(t){case"USD":return o.sellUSD?o.sellUSD:2.45;case"EUR":return o.sellEuro?o.sellEuro:2.45;case"RUB":return o.sellRUB?o.sellRUB/100:2.45;default:return 2.45}}()).toFixed(2)},m=Object(n.useState)(null),f=Object(c.a)(m,2),x=f[0],p=f[1],h=Object(n.useState)(d(s,x||"USD")),y=Object(c.a)(h,2),v=y[0],g=y[1],T=function(e){p(e)};return Object(n.useLayoutEffect)((function(){t.getRates().then((function(e){b(e),r(!1)}))}),[]),Object(n.useEffect)((function(){return g(d(s,x||"USD"))}),[x]),Object(j.jsxs)("div",{className:B,children:[Object(j.jsx)("div",{className:U,children:Object(j.jsx)("button",{onClick:function(){return a(!1)},children:"back"})}),!i&&Object(j.jsx)(O,{rates:o}),i&&Object(j.jsx)(N,{}),!i&&x&&Object(j.jsxs)("div",{className:k,children:["On ",s," BYN you can buy ",v," ",x]}),Object(j.jsxs)("div",{className:C,children:[Object(j.jsx)("button",{onClick:function(){T("USD")},children:"to dollars"}),Object(j.jsx)("button",{onClick:function(){T("EUR")},children:"to euro"}),Object(j.jsx)("button",{onClick:function(){T("RUB")},children:"to rub"})]})]})};var S=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),s=t[0],r=t[1],i=Object(n.useState)(!1),a=Object(c.a)(i,2),l=a[0],u=a[1],o=Object(n.useState)(!1),b=Object(c.a)(o,2),d=b[0],m=b[1],f=Number(s)>0&&""!=s,O=f?"":"badBtn";return Object(j.jsxs)("div",{children:[!l&&Object(j.jsxs)("div",{className:"app_title",children:[Object(j.jsx)("div",{className:"app__header",children:"Enter amount of Belorussian money"}),Object(j.jsx)("input",{value:s,onChange:function(e){return function(e){r(e.currentTarget.value)}(e)},type:"number"}),Object(j.jsx)("div",{className:O,children:Object(j.jsx)("button",{disabled:!f,onClick:function(){m(!0),u(!0)},children:O?"incorrect amount":"start convert"})})]}),l&&Object(j.jsx)(T,{setIsConvertMode:u,isLoading:d,setIsLoading:m,amount:Number(s)})]})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,s){e.exports={oneCourse:"courses_oneCourse__1FXxy",coursesBlock:"courses_coursesBlock__3Yv8_",CoursesTablet:"courses_CoursesTablet__3BcBr"}}},[[48,1,2]]]);
//# sourceMappingURL=main.6ceceadd.chunk.js.map