(window.webpackJsonp=window.webpackJsonp||[]).push([[50,14,31],{466:function(e,t,n){"use strict";n.r(t);var r={methods:{route:function(link){window.location.href=link}}},o=n(97),l=n(141),c=n.n(l),d=n(447),v=n(178),m=n(452),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[n("v-row",{staticClass:"mt-16"},[n("v-col",{staticClass:"mr-16",attrs:{align:"start",cols:"12",xl:"6",md:"6",lg:"6"}},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-img",{attrs:{src:"/auto_logo.png",height:"250",width:"250",contain:""}})],1),e._v(" "),n("v-col",[n("div",{staticStyle:{color:"#222f3e"}},[n("b",[e._v("About the Shop")])]),e._v(" "),n("div",[e._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n          ")]),e._v(" "),n("a",{attrs:{href:"https://www.facebook.com/Auto-Oto-100287059229982",target:"_blank"}},[n("v-img",{attrs:{src:"/facebook.png",height:"30",width:"30"}})],1)])],1)],1),e._v(" "),n("v-col",{class:e.$vuetify.breakpoint.width>400?"pl-16":"pl-5",attrs:{align:"start",cols:"12",xl:"3",lg:"3",md:"3"}},[n("div",{staticStyle:{color:"#222f3e"}},[n("b",[e._v("Main Menu")])]),e._v(" "),n("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.route("/about")}}},[e._v("About")]),e._v(" "),n("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.route("/about")}}},[e._v("Home")]),e._v(" "),n("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.route("/market")}}},[e._v("Market")]),e._v(" "),n("div",{staticClass:"py-2",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.route("/contacts")}}},[e._v("Contact us")])]),e._v(" "),n("v-col",{attrs:{align:"start"}},[n("div",{staticStyle:{color:"#222f3e"}},[n("b",[e._v("Contacts")])]),e._v(" "),n("div",{staticClass:"py-2"},[e._v("\n      Manila, Philippines "),n("br")]),e._v(" "),n("div",{staticClass:"py-2"},[e._v("\n        lorem@gmail.com\n          "),n("br"),e._v("\n        09156830724\n      ")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:d.a,VImg:v.a,VRow:m.a})},508:function(e,t,n){"use strict";n.r(t);n(10),n(12),n(9),n(15),n(11),n(16);var r=n(29),o=n(1),l=(n(98),n(53),n(4),n(79),n(73),n(37),n(51),n(40),n(44),n(461),n(307),n(18)),c=(n(25),n(39),n(52),{standardRules:[function(e){return!!e||"This field is required"}],emptyObjectFieldRule:[function(e){return e&&Object.keys(e).length&&e.constructor===Object||"This is field is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],emailFormatRule:[function(e){return null===e||""===e||(/.+@.+\..+/.test(e)||"E-mail must be valid")}],max10Char:[function(e){return e.length<=10||"Input too long!"}],max150Char:[function(e){return e.length<150||"Input too long!"}],mobileChar:[function(e){return 10===e.length&&!e.includes("-")||12===e.length||"Invalid mobile format"}],fieldArrayRule:[function(e){return 0!==e.length||"This field is required"}],fieldArraySingleRule:[function(e){return 0!==e.length||"This field is required"},function(e){return!(e.length>1)||"You must choose only 1 role"}],notObjectFieldRule:[function(e){return"object"===Object(l.a)(e)||"This field must be a reference from the list"}]});function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return v(v({image_signed:"",img_holder_signed:"image_placeholder.png",fillupContract:!1,openTerms:!1,isWeakPassword:!1,password:"",isExist:!1,expirationTime:60,isOTPSuccessful:!1,isAgree:!1,isRegistered:!1},c),{},{price:[0,0],img_holder:"image_placeholder.png",image:"",valid:!1,url:"",otpValidate:"",users:[],buttonLoad:!1,image_payslip:"",img_holder_payslip:"image_placeholder.png",isOTP:!1,brand:[],color:[],transmission:[],otpVal:"",category_list:[]})},created:function(){this.loadData();this.generateCode()},methods:{generateCode:function(){this.otpVal=Math.random().toString(36).slice(2)},loadData:function(){this.dialogAdd=!1},eventsGetall:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.color=[],e.isLoading=!0,t.next=4,e.$axios.get("/referencegetall/",{headers:{}}).then((function(t){console.log(t.data),e.reference=t.data,e.reference.map((function(t){"Car Color"==t.reference_type?e.color.push(t.name):"Car Transmissions"==t.reference_type?e.transmission.push(t.name):"Car Brand"==t.reference_type?e.brand.push(t.name):"Category"==t.reference_type&&e.category_list.push(t.name)})),e.isLoading=!1}));case 4:t.sent;case 5:case"end":return t.stop()}}),t)})))()},countDownTimer:function(){var e=this;this.expirationTime>0?setTimeout((function(){e.expirationTime-=1,e.countDownTimer()}),1e3):this.generateCode()},goOTP:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(parseInt(e.users.age)<18)){t.next=3;break}return alert("Sorry, We found out that you are not eligible to register due to your age. Thank you!"),t.abrupt("return");case 3:if(e.buttonLoad=!0,!(e.password.length<8)){t.next=8;break}return e.isWeakPassword=!0,e.buttonLoad=!1,t.abrupt("return");case 8:return t.next=10,e.$axios.post("/checkemail/",{email:e.users.email},{headers:{}}).then((function(t){if("valid"==t.data.status){e.expirationTime=60,e.countDownTimer(),e.buttonLoad=!0;e.$axios.post("/otp/",{code:e.otpVal,email:e.users.email},{headers:{}}).then((function(t){e.isOTP=!0,e.buttonLoad=!1}))}else e.buttonLoad=!1,e.isExist=!0}));case 10:if(t.sent,e.isAgree){t.next=13;break}return t.abrupt("return");case 13:case"end":return t.stop()}}),t)})))()},goToLogin:function(){this.$router.push("/login")},submitHandler:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.buttonLoad=!0,t.prev=1,(n=new FormData).append("username",e.users.username),n.append("is_verified",!1),n.append("password",e.password),n.append("suffix",e.users.suffix),n.append("firstname",e.users.firstname),n.append("middlename",e.users.middlename),n.append("lastname",e.users.lastname),n.append("email",e.users.email),n.append("age",e.users.age),n.append("account_type","Merchant"),n.append("contact_number",e.users.contact_number),n.append("address",e.users.address),n.append("address",e.users.address),n.append("gender",e.users.gender),n.append("location",e.users.location),n.append("civil_status",e.users.status),t.next=21,e.$axios.post("/users/",n,{headers:{}}).then((function(){e.isRegistered=!0,e.isRegistered=!0,e.buttonLoad=!1}));case 21:t.sent,t.next=28;break;case 24:t.prev=24,t.t0=t.catch(1),alert(t.t0),e.buttonLoad=!1;case 28:case"end":return t.stop()}}),t,null,[[1,24]])})))()},onFileUploadSigned:function(e){if(this.image_signed=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image_signed=e,null==e||(this.url,this.img_holder_signed=URL.createObjectURL(e))}},onFileUploadPayslip:function(e){if(this.image_payslip=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image_payslip=e,null==e||(this.url,this.img_holder_payslip=URL.createObjectURL(e))}},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}}}},f=n(97),_=n(141),h=n.n(_),x=n(248),y=n(215),w=n(181),k=n(447),C=n(448),O=n(476),T=n(465),R=n(595),S=n(572),P=n(452),j=n(522),L=n(57),V=n(498),E=n(479),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isRegistered?n("div",[n("v-card",{attrs:{width:"1200"}},[n("div",{staticClass:"pa-5",staticStyle:{"background-color":"#222f3e",color:"white"},attrs:{align:"start"}},[e._v("\n      Successfully Registered\n    ")]),e._v(" "),n("v-sheet",{staticClass:"d-flex justify-center align-center",attrs:{align:"center"}},[n("div",{staticClass:"pa-10"},[e._v("\n        Your account is currently pending wait until the admin verify your\n        account."),n("br"),e._v("\n        Estimated time 30-60 minutes.\n      ")])]),e._v(" "),n("div",{staticClass:"pa-5",attrs:{align:"end"}},[n("v-btn",{attrs:{depressed:"",color:"#222f3e",type:"submit",dark:"",loading:e.buttonLoad},on:{click:e.goToLogin}},[e._v("\n        Ok\n      ")])],1)],1)],1):e.isOTP?n("div",[n("v-snackbar",{attrs:{top:"",absolute:"",bottom:"",color:"error",outlined:"",centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.isOTPSuccessful=!1}}},"v-btn",r,!1),[e._v("\n        Close\n      ")])]}}]),model:{value:e.isOTPSuccessful,callback:function(t){e.isOTPSuccessful=t},expression:"isOTPSuccessful"}},[e._v("\n    Wrong OTP Code\n    ")]),e._v(" "),n("v-card",{attrs:{width:"1200"}},[n("div",{staticClass:"pa-5",staticStyle:{"background-color":"#222f3e",color:"white"},attrs:{align:"start"}},[e._v("\n      Enter OTP Code\n    ")]),e._v(" "),n("v-sheet",{staticClass:"d-flex justify-center align-center",attrs:{align:"center"}},[n("div",{staticClass:"pa-10"},[n("v-text-field",{attrs:{outlined:"",solo:""},model:{value:e.otpValidate,callback:function(t){e.otpValidate=t},expression:"otpValidate"}}),e._v(" "),n("div",[e._v("\n          Expiration : "),n("span",{staticClass:"red--text"},[e._v(" "+e._s(e.expirationTime))])]),e._v(" "),n("div",{staticStyle:{cursor:"pointer"},on:{click:e.goOTP}},[n("b",[e._v("Resend Code")])])],1)]),e._v(" "),n("div",{staticClass:"pa-5",attrs:{align:"end"}},[n("v-btn",{attrs:{depressed:"",color:"#6609af",type:"submit",dark:"",loading:e.buttonLoad},on:{click:e.submitHandler}},[e._v("\n        Ok\n      ")])],1)],1)],1):n("div",{staticClass:"pt-10"},[n("v-dialog",{attrs:{width:"900",persistent:""},model:{value:e.fillupContract,callback:function(t){e.fillupContract=t},expression:"fillupContract"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[n("b")]),e._v(" "),n("div",{staticClass:"pa-10"},[n("div",[e._v("\n         It is the policy of the State to PROTECT THE FUNDAMENTAL HUMAN RIGHT OF PRIVACY, of communication while ensuring free flow of information to promote innovation and growth. The state recognizes the vital role of information and communications technology in nation-building and its inherent obligation to ensure that personal information in information and communications systems in the government and in the private sector are secured and protected.\n        ")])]),e._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.openTerms=!1}}},[e._v("Back ")])],1)],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"900",persistent:""},model:{value:e.openTerms,callback:function(t){e.openTerms=t},expression:"openTerms"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[n("b",[e._v("AUTO OTO TERMS AND CONDITIONS")])]),e._v(" "),n("div",{staticClass:"pa-10"},[n("div",[e._v("\n         It is the policy of the State to PROTECT THE FUNDAMENTAL HUMAN RIGHT OF PRIVACY, of communication while ensuring free flow of information to promote innovation and growth. The state recognizes the vital role of information and communications technology in nation-building and its inherent obligation to ensure that personal information in information and communications systems in the government and in the private sector are secured and protected.\n        ")])]),e._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.openTerms=!1}}},[e._v("Back ")])],1)],1)],1)],1)],1),e._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card",{attrs:{width:"1200"}},[n("div",{staticClass:"pa-5",staticStyle:{"background-color":"#222f3e",color:"white"},attrs:{align:"start"}},[e._v("\n        Registration Form\n      ")]),e._v(" "),n("div",{staticClass:"pa-5",attrs:{align:"start"}},[n("div",{staticClass:"text-h6"},[e._v("User Information")]),e._v(" "),n("v-divider",{staticClass:"my-5"}),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Username")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.username,callback:function(t){e.$set(e.users,"username",t)},expression:"users.username"}})],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Password")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"","hide-details":"",type:"password",rules:e.standardRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),n("div",{staticStyle:{"font-size":"13px"}},[e._v("\n              Password must contain at least 8 characters and above.\n              "),n("span",{style:8>e.password.length?"color:red":"color:green"},[e._v(e._s(8>e.password.length?"weak":"strong"))])])]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Suffix Name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:e.users.suffix,callback:function(t){e.$set(e.users,"suffix",t)},expression:"users.suffix"}})],1)])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("First name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.firstname,callback:function(t){e.$set(e.users,"firstname",t)},expression:"users.firstname"}})],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Middle name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:e.users.middlename,callback:function(t){e.$set(e.users,"middlename",t)},expression:"users.middlename"}})],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Last name")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.lastname,callback:function(t){e.$set(e.users,"lastname",t)},expression:"users.lastname"}})],1)])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Email Address")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.email,callback:function(t){e.$set(e.users,"email",t)},expression:"users.email"}})],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Age")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.age,callback:function(t){e.$set(e.users,"age",t)},expression:"users.age"}})],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4"}},[n("div",[e._v("Contact Number")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.contact_number,callback:function(t){e.$set(e.users,"contact_number",t)},expression:"users.contact_number"}})],1)])],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[n("div",[e._v("Address")]),e._v(" "),n("div",[n("v-text-field",{attrs:{outlined:"",rules:e.standardRules},model:{value:e.users.address,callback:function(t){e.$set(e.users,"address",t)},expression:"users.address"}})],1)]),e._v(" "),n("v-col",[n("div",[e._v("Gender")]),e._v(" "),n("div",[n("v-radio-group",{model:{value:e.users.gender,callback:function(t){e.$set(e.users,"gender",t)},expression:"users.gender"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-radio",{attrs:{label:"Male",value:"Male"}})],1),e._v(" "),n("v-col",[n("v-radio",{attrs:{label:"Female",value:"Female"}})],1)],1)],1)],1)]),e._v(" "),n("v-col",[n("div",[e._v("Status")]),e._v(" "),n("div",[n("v-select",{attrs:{outlined:""},model:{value:e.users.status,callback:function(t){e.$set(e.users,"status",t)},expression:"users.status"}})],1)])],1),e._v(" "),n("div",{attrs:{align:"center"}},[n("v-snackbar",{attrs:{top:"",absolute:"",bottom:"",color:"error",outlined:"",centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.isWeakPassword=!1}}},"v-btn",r,!1),[e._v("\n                Close\n              ")])]}}]),model:{value:e.isWeakPassword,callback:function(t){e.isWeakPassword=t},expression:"isWeakPassword"}},[e._v("\n            Password is too weak. Please input at least 8 characters and\n            above.\n            ")]),e._v(" "),n("v-snackbar",{attrs:{top:"",absolute:"",bottom:"",color:"error",outlined:"",centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"red",text:""},on:{click:function(t){e.isExist=!1}}},"v-btn",r,!1),[e._v("\n                Close\n              ")])]}}]),model:{value:e.isExist,callback:function(t){e.isExist=t},expression:"isExist"}},[e._v("\n            Email is already exists.\n            ")]),e._v(" "),n("v-divider"),e._v(" "),n("div",{staticClass:"pb-5"}),e._v(" "),n("v-btn",{attrs:{depressed:"",color:"#222f3e",dark:"",disabled:!e.valid,loading:e.buttonLoad},on:{click:e.submitHandler}},[e._v("\n            Register\n          ")])],1)],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:x.a,VCard:y.a,VCardActions:w.a,VCol:k.a,VDialog:C.a,VDivider:O.a,VForm:T.a,VRadio:R.a,VRadioGroup:S.a,VRow:P.a,VSelect:j.a,VSheet:L.a,VSnackbar:V.a,VTextField:E.a})},578:function(e,t,n){"use strict";n.r(t);var r=n(466),o={components:{RegiserForm:n(508).default,FooterAll:r.default}},l=n(97),c=n(141),d=n.n(c),v=n(57),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{attrs:{color:"transparent"}},[n("div",{attrs:{align:"center"}},[n("regiser-form")],1),e._v(" "),n("div",[n("footer-all")],1)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{VSheet:v.a})}}]);