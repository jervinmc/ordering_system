(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{283:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("dc093880",content,!0,{sourceMap:!1})},305:function(t,e,o){"use strict";var n=o(29),r=(o(98),o(9),o(4),o(232)),c=o.n(r),l={name:"DefaultLayout",created:function(){this.account_type=localStorage.getItem("account_type"),this.pusherConnect(),this.eventsGetall()},data:function(){return{total_unseen:0,account_type:null,items_all:[],clipped:!1,drawer:!1,isOpenLogout:!1,fixed:!1,items:[{icon:"mdi-home-analytics",title:"Dashboard",to:"/merchant/dashboard"},{icon:"mdi-chart-ppf",title:"Products",to:"/merchant/products"},{icon:"mdi-account-multiple",title:"Usermanagement",to:"/merchant/usermanagement"},{icon:"mdi-clipboard-list-outline",title:"Orders",to:"/merchant/orders"},{icon:"mdi-shopping",title:"Transaction",to:"/merchant/transactions"},{icon:"mdi-chart-areaspline",title:"Inventory Report",to:"/merchant/inventory_report"},{icon:"mdi-chart-bar",title:"Sales Report",to:"/merchant/sales_report"},{icon:"mdi-android-messages",title:"Messages",to:"/merchant/message"},{icon:"mdi-comment-account",title:"T-Account",to:"/merchant/taccount"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{route:function(link){window.location.href="login"==link?"/".concat(link):"/merchant/".concat(link)},eventsGetall:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.items_all=[],e.next=3,t.$axios.get("/notification_user/1/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.items_all=e.data,console.log(t.items_all),t.total_unseen=t.items_all.filter((function(data){return"no"==data.viewed})),t.total_unseen=t.total_unseen.length}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},hitNotif:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.total_unseen=0,e.next=3,t.$axios.get("/notification_seen/1/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:case"end":return e.stop()}}),e)})))()},pusherConnect:function(){new c.a("33efacb6a0d9c7baad00",{cluster:"ap1"}).subscribe("notification_admin").bind("my-test",(function(data){this.eventsGetall()}),this)},logout:function(){this.isOpenLogout=!0},confirm:function(){localStorage.clear(),window.location.href="/",this.isOpenLogout=!1},routeClient:function(t){window.location.href="/customers/"+t}}},v=o(97),d=o(141),m=o.n(d),_=o(446),h=o(455),f=o(447),x=o(249),w=o(215),C=o(181),k=o(448),y=o(456),V=o(449),S=o(450),L=o(214),O=o(178),z=o(218),I=o(136),$=o(219),A=o(220),N=o(96),D=o(451),M=o(439),R=o(452),j=o(453),E=o(454),F=o(228),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.isOpenLogout,callback:function(e){t.isOpenLogout=e},expression:"isOpenLogout"}},[o("v-card",{staticClass:"pa-10"},[o("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Logout User")]),t._v(" "),o("div",{staticClass:"pa-10",attrs:{align:"center"}},[t._v("\n      Would you like to logout?\n  ")]),t._v(" "),o("v-card-actions",[o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{align:"end"}},[o("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.isOpenLogout=!1}}},[t._v(" Cancel ")])],1),t._v(" "),o("v-col",[o("v-btn",{attrs:{color:"success",text:""},on:{click:t.confirm}},[t._v(" Logout ")])],1)],1)],1)],1)],1),t._v(" "),"Client"==t.account_type?o("v-app-bar",{attrs:{color:"white","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-img",{staticStyle:{cursor:"pointer"},attrs:{src:"/logo.png",height:"60",width:"60",contain:""},on:{click:function(e){return t.route("index")}}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.routeClient("index")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-home")]),t._v("Home")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.routeClient("market")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-shopping")]),t._v("Products")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.routeClient("profile")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-account")]),t._v("Profile")],1),t._v(" "),o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.routeClient("carts")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-cart")]),t._v("Cart")],1),t._v(" "),o("div",{staticClass:"pl-16"}),t._v(" "),null==t.token?o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("login")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-bell")])],1):o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){"Seller"==t.account_type?t.route("seller/dashboard"):"Customer"==t.account_type?t.route("customer/transaction"):t.route("admin/dashboard")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-login")]),t._v(t._s(t.name))],1)],1):t._e(),t._v(" "),null==t.account_type||"index"==t.$route.name||"contacts"==t.$route.name||"about"==t.$route.name||"market"==t.$route.name||"login"==t.$route.name||"seller"==t.$route.name?o("v-app-bar",{attrs:{color:"white","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-img",{staticStyle:{cursor:"pointer"},attrs:{src:"/logo.png",height:"60",width:"60",contain:""},on:{click:function(e){return t.route("index")}}}),t._v(" "),o("v-spacer"),t._v(" "),o("div",{staticClass:"pl-16"}),t._v(" "),null==t.token?o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){return t.route("login")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-login")]),t._v("Login")],1):o("v-toolbar-title",{staticClass:"px-4 black--text",staticStyle:{cursor:"pointer","font-size":"16px"},on:{click:function(e){"Seller"==t.account_type?t.route("seller/dashboard"):"Customer"==t.account_type?t.route("customer/transaction"):t.route("admin/dashboard")}}},[o("v-icon",{staticClass:"pb-1"},[t._v("mdi-login")]),t._v(t._s(t.name))],1)],1):"Merchant"==t.account_type?o("v-app-bar",{attrs:{color:"#222f3e","clipped-left":t.clipped,fixed:"",app:"",elevation:"1"}},[o("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),t._v(" "),o("v-row",[o("v-col",{attrs:{"align-self":"center",cols:"auto"}},[o("div",{staticClass:"white--text"},[t._v("\n       Merchant\n    ")])]),t._v(" "),o("v-col",[o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-toolbar-title",t._g(t._b({staticClass:"px-4 white--text",staticStyle:{cursor:"pointer"}},"v-toolbar-title",r,!1),n),[o("v-row",[o("v-col",{attrs:{cols:"auto"}},[o("v-icon",{attrs:{color:"white"},on:{click:t.hitNotif}},[t._v("mdi-bell")])],1),t._v(" "),0!=t.total_unseen?o("v-col",{staticClass:"px-0 red--text"},[t._v("\n                "+t._s(t.total_unseen)+"\n            ")]):t._e()],1)],1)]}}])},[t._v(" "),o("v-card",{attrs:{height:"400"}},[o("v-list",{staticStyle:{cursor:"pointer"}},t._l(t.items_all,(function(e){return o("v-list-item",{key:e},[o("v-list-item-title",[o("v-row",[o("v-row",[o("v-col",[o("v-img",{attrs:{height:"50",width:"50",src:e.users_profile}})],1),t._v(" "),o("v-col",{attrs:{"align-self":"center"}},[o("v-col",{on:{click:function(e){return t.route("products")}}},[t._v("\n                "+t._s(e.descriptions)+"\n              ")]),t._v(" "),o("v-col",[t._v("\n                "+t._s(e.date)+"\n              ")])],1)],1)],1)],1)],1)})),1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"white--text"},[t._v("\n    "+t._s("admin-configuration"==t.$route.name?"System Configuration":"")+"\n  ")])],1):t._e(),t._v(" "),o("v-main",[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("Nuxt")],1)],1),t._v(" "),o("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[o("v-list",[o("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[o("v-list-item-action",[o("v-icon",{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),o("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:""}},[o("span",[t._v("© "+t._s((new Date).getFullYear()))])]),t._v(" "),o("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:"",color:"#222f3e"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},["Merchant"==t.account_type?o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"primary",color:"white"}},[t._l(t.items,(function(e,n){return o("v-list-item",{key:n,attrs:{color:"white",to:t.items[n].to}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v(t._s(t.items[n].icon))]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(t.items[n].title))])],1)})),t._v(" "),o("v-list-item",{attrs:{color:"white"},on:{click:t.logout}},[o("v-icon",{staticClass:"pr-2",attrs:{color:"white"}},[t._v("mdi-logout")]),t._v(" "),o("v-list-item-title",{staticStyle:{color:"white"}},[t._v("Logout")])],1)],2)],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:_.a,VAppBar:h.a,VAppBarNavIcon:f.a,VBtn:x.a,VCard:w.a,VCardActions:C.a,VCol:k.a,VContainer:y.a,VDialog:V.a,VFooter:S.a,VIcon:L.a,VImg:O.a,VList:z.a,VListItem:I.a,VListItemAction:$.a,VListItemGroup:A.a,VListItemTitle:N.c,VMain:D.a,VMenu:M.a,VNavigationDrawer:R.a,VRow:j.a,VSpacer:E.a,VToolbarTitle:F.a})},317:function(t,e,o){o(318),t.exports=o(319)},343:function(t,e,o){"use strict";o(283)},344:function(t,e,o){var n=o(19)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},89:function(t,e,o){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(343),o(97)),c=o(141),l=o.n(c),v=o(446),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[317,50,9,51]]]);