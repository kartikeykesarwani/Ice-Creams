(this.webpackJsonpmovies2watch=this.webpackJsonpmovies2watch||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return _}));var a="ADD_INGREDIENT",r="REMOVE_INGREDIENT",c="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",i="PURCHASE_ICECREAM_SUCCESS",l="PURCHASE_ICECREAM_FAIL",s="PURCHASE_ICECREAM_START",u="PURCHASE_INIT",d="FETCH_ORDERS_START",m="FETCH_ORDERS_SUCCESS",p="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){e.exports={Chocolate:"IcecreamIngredients_Chocolate__1fFRb",Mango:"IcecreamIngredients_Mango__1B49j",Mint:"IcecreamIngredients_Mint__5yFr9",Strawberry:"IcecreamIngredients_Strawberry__2yH9a",Vanilla:"IcecreamIngredients_Vanilla__2i-TA",Queue:"IcecreamIngredients_Queue__3gzeQ",Cream:"IcecreamIngredients_Cream__2AyiL",Cream1:"IcecreamIngredients_Cream1__1LDHn",Cream2:"IcecreamIngredients_Cream2__32YL5",Cream0:"IcecreamIngredients_Cream0__2JM_-",Cherry:"IcecreamIngredients_Cherry__3ramN",Glass:"IcecreamIngredients_Glass__r9fZP",Cone:"IcecreamIngredients_Cone__94cHa"}},,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return _}));var a=n(2),r=n(18),c=n.n(r),o=function(e){return{type:a.a,ingredientsName:e}},i=function(e){return{type:a.n,ingredientsName:e}},l=function(){return function(e){c.a.get("https://icecream-3aa92.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:a.p,ingredients:n}))})).catch((function(t){e({type:a.f})}))}},s=n(1),u=function(e,t){return function(n){n({type:a.k}),c.a.post("https://icecream-3aa92.firebaseio.com/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:a.l,orderId:e,orderInfo:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:a.j,error:e}}(e))}))}},d=function(){return{type:a.m}},m=function(e,t){return function(n){n({type:a.h});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';c.a.get("https://icecream-3aa92.firebaseio.com/orders.json"+r).then((function(e){var t,r=[];for(var c in e.data)r.push(Object(s.a)(Object(s.a)({},e.data[c]),{},{id:c}));n((t=r,{type:a.i,orders:t}))})).catch((function(e){n(function(e){return{type:a.g,error:e}}(e))}))}},p=function(e,t){return{type:a.e,idToken:e,userId:t}},h=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),{type:a.c}},f=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},g=function(e,t,n){return function(r){r({type:a.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_e8ZcHfwADKtocm_UDqFlJh2hdAFr2ss";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_e8ZcHfwADKtocm_UDqFlJh2hdAFr2ss"),c.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationTime",t),localStorage.setItem("userId",e.data.localId),r(p(e.data.idToken,e.data.localId)),r(f(e.data.expiresIn))})).catch((function(e){r(function(e){return{type:a.b,error:e}}(e.response.data.error))}))}},b=function(e){return{type:a.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n>new Date){var a=localStorage.getItem("userId");e(p(t,a)),e(f((n.getTime()-(new Date).getTime())/1e3))}else n<=new Date&&e(h())}else e(h())}}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Vd-O",Open:"SideDrawer_Open__2sqW8",Close:"SideDrawer_Close__2m2_P",Logo:"SideDrawer_Logo__2GAje"}},,,function(e,t,n){e.exports={Control:"control_Control__2t0UN",Label:"control_Label__nZO9Y",Less:"control_Less__jtrTb",More:"control_More__2gpz-"}},,,,function(e,t,n){e.exports={Logo:"Toolbar_Logo__3xzp6",Toolbar:"Toolbar_Toolbar__2st_x",DesktopOnly:"Toolbar_DesktopOnly__3ECXE"}},function(e,t,n){e.exports={Wrapper:"IceCream_Wrapper__QOpH0",Contain:"IceCream_Contain__YsBdh",FullSundae:"IceCream_FullSundae__3t1XG"}},function(e,t,n){e.exports={Controls:"Controls_Controls__bG3mq",Order:"Controls_Order__vH-XU"}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(35),o=n.n(c);t.a=function(e){return r.a.createElement("button",{disabled:e.disabled,onClick:e.clicked,className:[o.a.Button,o.a[e.btnType]].join(" ")},e.children)}},,function(e,t,n){e.exports={List:"NavItem_List__GFeBD",active:"NavItem_active__3eHk-"}},,function(e,t,n){e.exports={Button:"Button_Button__1y5Pf",Success:"Button_Success__3rE8h",Danger:"Button_Danger__3c3ez"}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(54),o=n.n(c);t.a=function(e){return r.a.createElement("div",{className:o.a.Loader},"Loading...")}},,,,,,,,,,function(e,t,n){"use strict";var a=n(57),r=n(0),c=n.n(r),o=n(5),i=n(6),l=n(8),s=n(7),u=n(13),d=n(11),m=n.n(d),p=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e;switch(this.props.type){case"cream":e=c.a.createElement(u.a,null,c.a.createElement("div",{className:m.a.Queue}),c.a.createElement("div",{className:m.a.Cherry}),c.a.createElement("div",{className:m.a.Cream0}),c.a.createElement("div",{className:m.a.Cream1}),c.a.createElement("div",{className:m.a.Cream2}),c.a.createElement("div",{className:m.a.Cream}));break;case"mango":e=c.a.createElement("div",{className:m.a.Mango});break;case"chocolate":e=c.a.createElement("div",{className:m.a.Chocolate});break;case"mint":e=c.a.createElement("div",{className:m.a.Mint});break;case"vanilla":e=c.a.createElement("div",{className:m.a.Vanilla});break;case"strawberry":e=c.a.createElement("div",{className:m.a.Strawberry});break;case"cone":e=c.a.createElement(u.a,null,c.a.createElement("div",{className:m.a.Cone}),c.a.createElement("div",{className:m.a.Glass}))}return e}}]),n}(r.Component),h=n(29),f=n.n(h);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t,n){return Object(a.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(p,{type:t,key:t+n})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("h3",{style:{margin:"100px 0"}},"Please add a maximum of 3 ice cream flavours!")),c.a.createElement(u.a,null,c.a.createElement("div",{className:f.a.Contain},c.a.createElement("div",{className:f.a.Wrapper},c.a.createElement("div",{className:f.a.FullSundae},c.a.createElement(p,{type:"cream"}),t,c.a.createElement(p,{type:"cone"})))))}},function(e,t,n){e.exports={NavItems:"NavItems_NavItems__E9zR6"}},,function(e,t,n){e.exports={Drawer:"DrawerToggle_Drawer__HC1nC"}},function(e,t,n){e.exports=n.p+"static/media/loggo.18b6ba74.jpg"},function(e,t,n){e.exports={Logo:"Logo_Logo__1lOrO"}},function(e,t,n){e.exports={Site:"Layout_Site__3U0TT"}},function(e,t,n){e.exports={Backdrop:"BackDrop_Backdrop__Ys1rb"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__10oRI",load2:"Spinner_load2__Fu1aB"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1kIAE"}},,,function(e,t,n){e.exports=n(86)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),o=n.n(c),i=(n(63),n(5)),l=n(6),s=n(8),u=n(7),d=n(16),m=n(47),p=n.n(m),h=n(33),f=n.n(h),g=n(19),b=function(e){return r.a.createElement("li",{className:f.a.List},r.a.createElement(g.c,{to:e.link,exact:e.exact,activeClassName:f.a.active},e.children))},_=function(e){return r.a.createElement("ul",{className:p.a.NavItems},r.a.createElement(b,{link:"/",exact:!0},"ICE-CREAMs"),e.isAuth?r.a.createElement(b,{link:"/orders"},"Orders"):null,e.isAuth?r.a.createElement(b,{link:"/logout"},"Log out"):r.a.createElement(b,{link:"/auth"},"Log in"))},E=n(49),v=n.n(E),O=function(e){return r.a.createElement("div",{className:v.a.Drawer,onClick:e.click},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=n(50),y=n.n(I),j=n(51),C=n.n(j),k=function(e){return r.a.createElement("div",{className:C.a.Logo},r.a.createElement("img",{width:"38",height:"120",src:y.a,alt:"Ice cream logo"}))},S=n(28),N=n.n(S),w=function(e){return r.a.createElement("header",{className:N.a.Toolbar},r.a.createElement("div",{className:N.a.Logo},r.a.createElement(k,null)),r.a.createElement(O,{click:e.open}),r.a.createElement("nav",{className:N.a.DesktopOnly},r.a.createElement(_,{isAuth:e.isAuth})))},A=n(13),T=n(52),D=n.n(T),H=n(53),L=n.n(H),R=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.closed}):null},x=n(21),M=n.n(x),P=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),r.a.createElement(A.a,null,r.a.createElement(R,{show:e.open,closed:e.close}),r.a.createElement("div",{className:t.join(" "),onClick:e.close},r.a.createElement("div",{className:M.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",null,r.a.createElement(_,{isAuth:e.isAuth}))))},B=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={toggleSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({toggleSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{toggleSideDrawer:!e.toggleSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(A.a,null,r.a.createElement(w,{isAuth:this.props.isAuthenticated,open:this.sideDrawerToggleHandler}),r.a.createElement(P,{isAuth:this.props.isAuthenticated,open:this.state.toggleSideDrawer,close:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:D.a.Site},this.props.children))}}]),n}(a.Component),U=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(B),F=n(1),G=n(46),z=n(30),W=n.n(z),Y=n(24),V=n.n(Y),q=function(e){return r.a.createElement("div",{className:V.a.Control},r.a.createElement("p",{className:V.a.Label},r.a.createElement("strong",null,e.label)),r.a.createElement("button",{disabled:e.disabled,className:V.a.Less,onClick:e.dec},"LESS"),r.a.createElement("button",{className:V.a.More,onClick:e.add,disabled:e.noMas},"MORE"))},J=[{labels:"Mango",type:"mango"},{labels:"Vanilla",type:"vanilla"},{labels:"Strawberry",type:"strawberry"},{labels:"Mint",type:"mint"},{labels:"Chocolate",type:"chocolate"}],Q=function(e){var t=null;return t=e.isAuth?r.a.createElement("button",{className:W.a.Order,disabled:!e.odrBtn,onClick:e.purchase},"ORDER NOW"):r.a.createElement("button",{className:W.a.Order,disabled:!e.odrBtn,onClick:e.purchase}," ","SIGN UP TO ORDER"),r.a.createElement("div",{className:W.a.Controls},r.a.createElement("h3",null,"Current Price: ",e.price.toFixed(2)),J.map((function(t){return r.a.createElement(q,{label:t.labels,key:t.labels,type:t.type,add:function(){return e.plusIngredients(t.type)},dec:function(){return e.minusIngredients(t.type)},disabled:e.disabled[t.type],noMas:e.noMas})})),t)},Z=n(36),X=n(55),K=n.n(X),$=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.show!==e.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(A.a,null,r.a.createElement(R,{show:this.props.show,closed:this.props.modalClosed}),r.a.createElement("div",{className:K.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),ee=n(31),te=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":"),e.ingredients[t])}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Your Delicious Ice cream with the following flavours"),r.a.createElement("ul",null,t),r.a.createElement("p",{style:{margin:"10px"}},r.a.createElement("strong",null,"Total price: $ ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(ee.a,{btnType:"Success",clicked:e.proceed},"CONTINUE"),r.a.createElement(ee.a,{btnType:"Danger",clicked:e.close},"CANCEL"))},ne=n(17),ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.updatePurchaseHandler=function(e){if(3===Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0))return!0},e.updateOrderBtnHandler=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.purchaseHandler=function(){e.props.isAuth?e.setState({purchasing:!0}):(e.props.onSetRedirectPath("/checkout"),e.props.history.push("/auth"))},e.cancelPurchaseHandler=function(){e.setState({purchasing:!1})},e.proceedHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=null,t=this.props.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(Z.a,null),n=Object(F.a)({},this.props.ings);for(var a in n)n[a]=n[a]<=0;return this.props.ings&&(t=r.a.createElement(A.a,null,r.a.createElement(G.a,{ingredients:this.props.ings}),r.a.createElement(Q,{isAuth:this.props.isAuth,ingredients:this.props.ings,disabled:n,price:this.props.price,plusIngredients:this.props.onAddIngredients,minusIngredients:this.props.onRemoveIngredients,purchasing:this.state.purchasing,noMas:this.updatePurchaseHandler(this.props.ings),odrBtn:this.updateOrderBtnHandler(this.props.ings),purchase:this.purchaseHandler})),e=r.a.createElement(te,{price:this.props.price,ingredients:this.props.ings,close:this.cancelPurchaseHandler,proceed:this.proceedHandler})),r.a.createElement("div",null,r.a.createElement($,{modalClosed:this.cancelPurchaseHandler,show:this.state.purchasing},e),t)}}]),n}(a.Component),re=Object(d.b)((function(e){return{ings:e.icecreamBuilder.ingredients,price:e.icecreamBuilder.totalPrice,error:e.icecreamBuilder.error,isAuth:null!==e.auth.token}}),(function(e){return{onAddIngredients:function(t){return e(ne.a(t))},onRemoveIngredients:function(t){return e(ne.i(t))},onInitIngredients:function(){return e(ne.e())},onInitPurchase:function(){return e(ne.h())},onSetRedirectPath:function(t){return e(ne.j(t))}}}))(ae),ce=function(e){return function(t){Object(s.a)(a,t);var n=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),a}(a.Component)},oe=n(4),ie=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onLoggingOut()}},{key:"render",value:function(){return r.a.createElement(oe.a,{to:"/"})}}]),n}(a.Component),le=Object(d.b)(null,(function(e){return{onLoggingOut:function(){return e(ne.f())}}}))(ie),se=ce((function(){return n.e(3).then(n.bind(null,95))})),ue=ce((function(){return n.e(5).then(n.bind(null,96))})),de=ce((function(){return n.e(4).then(n.bind(null,94))})),me=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(oe.d,null,r.a.createElement(oe.b,{path:"/auth",component:de}),r.a.createElement(oe.b,{exact:!0,path:"/",component:re}),r.a.createElement(oe.a,{to:"/"}));return this.props.isAuth&&(e=r.a.createElement(oe.d,null,r.a.createElement(oe.b,{path:"/checkout",component:se}),r.a.createElement(oe.b,{path:"/orders",component:ue}),r.a.createElement(oe.b,{path:"/logout",component:le}),r.a.createElement(oe.b,{path:"/auth",component:de}),r.a.createElement(oe.b,{exact:!0,path:"/",component:re}),r.a.createElement(oe.a,{to:"/"}))),r.a.createElement("div",{className:"App"},r.a.createElement(U,null,e))}}]),n}(a.Component),pe=Object(oe.g)(Object(d.b)((function(e){return{isAuth:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ne.c())}}}))(me));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(25),fe=n(22),ge=n(2),be={ingredients:null,totalPrice:3,error:!1,building:!1},_e={mango:2.5,vanilla:1.8,mint:2.5,strawberry:2.1,chocolate:2.25},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(fe.a)({},t.ingredientsName,e.ingredients[t.ingredientsName]+1)),totalPrice:e.totalPrice+_e[t.ingredientsName],building:!0});case ge.n:return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(fe.a)({},t.ingredientsName,e.ingredients[t.ingredientsName]-1)),totalPrice:e.totalPrice-_e[t.ingredientsName],building:!0});case ge.p:return Object(F.a)(Object(F.a)({},e),{},{ingredients:t.ingredients,error:!1,totalPrice:3,building:!1});case ge.f:return Object(F.a)(Object(F.a)({},e),{},{error:!0});default:return e}},ve={orders:[],loading:!1,bought:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.h:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case ge.i:return Object(F.a)(Object(F.a)({},e),{},{orders:t.orders,loading:!1});case ge.g:return Object(F.a)(Object(F.a)({},e),{},{loading:!1});case ge.m:return Object(F.a)(Object(F.a)({},e),{},{bought:!1});case ge.k:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case ge.l:var n=Object(F.a)(Object(F.a)({},t.orderInfo),{},{id:t.orderId});return Object(F.a)(Object(F.a)({},e),{},{loading:!1,bought:!0,orders:e.orders.concat(n)});case ge.j:return Object(F.a)(Object(F.a)({},e),{},{loading:!1});default:return e}},Ie=n(56),ye={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.d:return Object(F.a)(Object(F.a)({},e),{},{error:null,loading:!0});case ge.e:return Object(F.a)(Object(F.a)({},e),{},{token:t.idToken,userId:t.userId,error:null,loading:!1});case ge.b:return Object(F.a)(Object(F.a)({},e),{},{error:t.error,loading:!1});case ge.c:return Object(F.a)(Object(F.a)({},e),{},{token:null,userId:null});case ge.o:return Object(F.a)(Object(F.a)({},e),{},{authRedirectPath:t.path});default:return e}},Ce=he.c,ke=Object(he.b)({icecreamBuilder:Ee,order:Oe,auth:je}),Se=Object(he.d)(ke,Ce(Object(he.a)(Ie.a)));o.a.render(r.a.createElement(d.a,{store:Se},r.a.createElement(g.a,null,r.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.b9d5d2a8.chunk.js.map