(function(e){function t(t){for(var s,i,n=t[0],l=t[1],d=t[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e0c":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("router-view")],1)],1)},o=[],i=a("2877"),n=a("6544"),l=a.n(n),d=a("7496"),c=a("a75b"),u={},m=Object(i["a"])(u,r,o,!1,null,null,null),v=m.exports;l()(m,{VApp:d["a"],VContent:c["a"]});var f=a("8c4f"),h=a("2f62"),b=a("bc3a"),p=a.n(b);a("3e8f");s["a"].use(h["a"]);var g=new h["a"].Store({state:{status:"",error:!1,token:localStorage.getItem("token")||"",username:{},no_do:""},mutations:{auth_request(e){e.status="loading",e.error=""},auth_success(e){e.status="success",e.token=localStorage.getItem("token"),e.username=localStorage.getItem("username")},auth_error(e){e.status="error",e.error=!0},logout(e){e.status="",e.token="",e.error=""},get_data(e,t){e.no_do=t}},actions:{login({commit:e},t){return new Promise((a,s)=>{e("auth_request"),p()({url:"http://103.233.109.131:5500/findCourier",data:t,method:"POST"}).then(t=>{const s=t.data.token,r=t.data.user[0].USERNAME,o=t.data.user[0].PARENT_COURIER;localStorage.setItem("token",s),localStorage.setItem("username",r),localStorage.setItem("parent_courier",o),p.a.defaults.headers["Authorization"]=`Bearer ${s}`,e("auth_success",s,r),a(t)}).catch(t=>{e("auth_error"),localStorage.removeItem("token"),s(t)})})},logout({commit:e}){return new Promise((t,a)=>{e("logout"),localStorage.removeItem("token"),delete p.a.defaults.headers["Authorization"],t()})}},getters:{isLoggedIn:e=>!!e.token,authStatus:e=>e.status,authErr:e=>e.error,getDO:e=>e.no_do}}),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",to:"/home/#"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Hi, "+e._s(e.user)+"!")])],1)],1),a("v-list-item",{attrs:{to:"/home/search"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-magnify")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Search")])],1)],1),a("v-list-item",{attrs:{to:"/home/setting"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-settings")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Setting")])],1)],1),a("v-list-item",{on:{click:e.logout}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"green",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-container",[a("router-view")],1),a("v-footer",{attrs:{color:"green",app:""}},[a("span",{staticClass:"white--text"},[e._v("K-Link Indonesia © 2019")])])],1)},_=[],w={name:"Layout",props:{source:String},data:()=>({drawer:null,user:localStorage.getItem("username")}),computed:{isLoggedIn(){return this.$store.getters.isLoggedIn}},methods:{logout(){this.$store.dispatch("logout").then(()=>{this.$router.push("/login")})}},created(){this.$http.interceptors.response.use(void 0,e=>{return new Promise((t,a)=>{throw 401===e.status&&e.config&&!e.config.__isRetryRequest&&this.$store.dispatch(logout),e})})}},j=w,x=a("40dc"),y=a("5bc1"),S=a("a523"),I=a("553a"),O=a("132d"),A=a("a722"),T=a("8860"),C=a("da13"),V=a("1800"),D=a("5d23"),E=a("f774"),N=a("2a7f"),R=Object(i["a"])(j,k,_,!1,null,null,null),L=R.exports;l()(R,{VAppBar:x["a"],VAppBarNavIcon:y["a"],VContainer:S["a"],VFooter:I["a"],VIcon:O["a"],VLayout:A["a"],VList:T["a"],VListItem:C["a"],VListItemAction:V["a"],VListItemContent:D["a"],VListItemTitle:D["b"],VNavigationDrawer:E["a"],VToolbarTitle:N["a"]});var P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e._v("Status\n      "),a("div",{staticClass:"flex-grow-1"}),a("v-text-field",{attrs:{"append-icon":"search",label:"Cari","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5,search:e.search,loading:e.isLoading,"loading-text":"Memuat... Mohon tunggu"},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.NO_DO))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.STATUS))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.TANGGAL))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.CREATED_BY))])]}},{key:"no-results",fn:function(){return[a("v-container",[a("v-alert",{attrs:{value:!0,type:"error",text:"",dense:"",outlined:""}},[e._v("\n            Pencarian untuk "+e._s(e.search)+" tidak ditemukan.\n          ")])],1)]},proxy:!0}])})],1)],1)},$=[],z={data:()=>({search:"",isLoading:!0,items:[],headers:[{text:"No. DO",value:"NO_DO"},{text:"Status",value:"STATUS"},{text:"Tanggal",value:"TANGGAL"},{text:"Dibuat",value:"CREATED_BY"}]}),mounted(){p.a.get("http://103.233.109.131:5500/tracking").then(e=>this.items=e.data).then(()=>this.isLoading=!this.isLoading).catch(e=>console.log(e))}},M=z,G=(a("d46b"),a("0798")),B=a("b0af"),K=a("99d9"),U=a("8fea"),F=a("8654"),Y=Object(i["a"])(M,P,$,!1,null,"5778f610",null),q=Y.exports;l()(Y,{VAlert:G["a"],VCard:B["a"],VCardTitle:K["c"],VContainer:S["a"],VDataTable:U["a"],VTextField:F["a"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{transition:"fade-transition",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.authErr,expression:"authErr"}],staticClass:"elevation-21",attrs:{type:"error",dark:"",transition:"scale-transition"}},[e._v("\n            Username atau password salah\n          ")]),a("v-card",{staticClass:"elevation-21"},[a("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login")]),a("div",{staticClass:"flex-grow-1"})],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Login",name:"username",type:"text","prepend-icon":"person",rules:e.usernameRules},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validate(t)}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password","prepend-icon":"lock",rules:e.passwordRules},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validate(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"success",disabled:!e.valid},on:{click:e.validate}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},W=[],J={props:{source:String},computed:{authErr(){return this.$store.getters.authErr}},data:()=>({valid:!0,username:"",usernameRules:[e=>!!e||"Username tidak boleh kosong",e=>/\w/.test(e)||"Username harus menggunakan huruf dan angka"],password:"",passwordRules:[e=>!!e||"Password tidak boleh kosong"]}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.login())},login(){let e=this.username,t=this.password,a="k-tracking";this.$store.dispatch("login",{username:e,password:t,appkey:a}).then(()=>{this.$router.push("home")}).catch(e=>console.log(e))}}},Q=J,X=a("8336"),Z=a("62ad"),ee=a("4bd4"),te=a("0fd9"),ae=a("71d9"),se=Object(i["a"])(Q,H,W,!1,null,null,null),re=se.exports;l()(se,{VAlert:G["a"],VApp:d["a"],VBtn:X["a"],VCard:B["a"],VCardActions:K["a"],VCardText:K["b"],VCol:Z["a"],VContainer:S["a"],VContent:c["a"],VForm:ee["a"],VRow:te["a"],VTextField:F["a"],VToolbar:ae["a"],VToolbarTitle:N["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-container",[a("v-card-title",[e._v("Tracking Status")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.deliveryRules,label:"No. DO.",readonly:""},model:{value:e.delivery,callback:function(t){e.delivery=t},expression:"delivery"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id_do,expression:"id_do"}],attrs:{type:"hidden"},domProps:{value:e.id_do},on:{input:function(t){t.target.composing||(e.id_do=t.target.value)}}}),a("v-text-field",{attrs:{rules:e.courierRules,label:"Nama Kurir",readonly:""},model:{value:e.courier,callback:function(t){e.courier=t},expression:"courier"}}),a("v-text-field",{attrs:{rules:e.stockistRules,label:"Kode Stockist",readonly:""},model:{value:e.stockist,callback:function(t){e.stockist=t},expression:"stockist"}}),a("v-text-field",{attrs:{rules:e.nameRules,label:"Nama",readonly:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.addressRules,label:"Alamat",readonly:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("v-text-field",{attrs:{rules:e.warehouseRules,label:"Gudang",readonly:""},model:{value:e.warehouse,callback:function(t){e.warehouse=t},expression:"warehouse"}}),a("v-text-field",{attrs:{rules:e.statusRules,label:"Status",readonly:""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.id_warehouse,expression:"id_warehouse"}],attrs:{type:"hidden"},domProps:{value:e.id_warehouse},on:{input:function(t){t.target.composing||(e.id_warehouse=t.target.value)}}}),a("v-item-group",[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",elevation:"5"},on:{click:e.validate}},[e._v("Submit")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"warning",elevation:"5"},on:{click:e.reset}},[e._v("Reset")])],1)],1)],1)],1),a("div",{staticClass:"my-5"}),a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],staticClass:"mx-auto divider"},[a("v-card-title",[e._v("Tracking Status")]),a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Status")]),a("th",{staticClass:"text-left"},[e._v("Created By")]),a("th",{staticClass:"text-left"},[e._v("Created Date")])])]),a("tbody",e._l(e.details,(function(t){return a("tr",{key:t.ID_DO},[a("td",[e._v(e._s(t.STATUS))]),a("td",[e._v(e._s(t.CREATED_BY))]),a("td",[e._v(e._s(t.CREATED_DATE))])])})),0)])],1)],1),a("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text)+"\n    "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},ie=[],ne=a("c64e"),le=a.n(ne),de=a("c1df"),ce=a.n(de),ue={data:()=>({snackbar:!1,timeout:3e3,text:"",expand:!1,valid:!0,id_do:"",id_warehouse:"",details:"",name:"",nameRules:[e=>!!e||"Name tidak boleh kosong",e=>e&&e.length<=20||"Name must be less than 10 characters"],delivery:"",deliveryRules:[e=>!!e||"DO tidak boleh kosong"],courier:"",courierRules:[e=>!!e||"Kurir tidak boleh kosong"],address:"",addressRules:[e=>!!e||"Alamat tidak boleh kosong"],warehouse:"",warehouseRules:[e=>!!e||"Gudang tidak boleh kosong"],status:"",statusRules:[e=>!!e||"Status tidak boleh kosong"],stockist:"",stockistRules:[e=>!!e||"Stokis tidak boleh kosong"]}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.expand=!1,this.submit(),this.reset())},reset(){this.$refs.form.reset(),this.expand=!1},submit(){let e=ce()(),t=e.format("YYYY-MM-DD HH:mm:ss"),a={id_do:this.id_do,no_do:this.delivery,created_date:t,created_by:localStorage.getItem("username"),tanggal:t,status:this.status,id_warehouse:this.id_warehouse,id_tracking:le()()};p.a.post("http://103.233.109.131:5500/inputTracking",a).then(e=>{this.text="Data berhasil diperbarui...",this.snackbar=!0}).catch(e=>{this.text="Terjadi kesalahan...",this.snackbar=!0})}},created(){p.a.all([p.a.get(`http://103.233.109.131:5500/tracking/${this.$store.getters.getDO}`)]).then(p.a.spread(e=>{this.id_do=e.data[0][0].ID_DO,this.courier=e.data[0][0].NAMA[1],this.stockist=e.data[0][0].CODE_STOCKIES,this.name=e.data[0][0].NAMA[0],this.address=e.data[0][0].ALAMAT1,this.warehouse=e.data[0][0].WAREHOUSE_NAME,this.id_warehouse=e.data[0][0].ID_WAREHOUSE,this.delivery=this.$store.getters.getDO,this.details=e.data[1],this.expand=!0})).catch(e=>{this.text="Uh-oh...! Something goes wrong",this.snackbar=!0})}},me=ue,ve=(a("e489"),a("0789")),fe=a("604c"),he=a("1f4f"),be=a("2db4"),pe=Object(i["a"])(me,oe,ie,!1,null,"5afc3691",null),ge=pe.exports;l()(pe,{VBtn:X["a"],VCard:B["a"],VCardTitle:K["c"],VContainer:S["a"],VExpandTransition:ve["a"],VForm:ee["a"],VItemGroup:fe["b"],VSimpleTable:he["a"],VSnackbar:be["a"],VTextField:F["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-container",[a("v-card-title",[e._v(e._s(e.user))]),a("v-card-text",[e._v("Ubah Password")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.oldPasswordRules,type:"password",label:"Password Lama",required:""},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}}),a("v-text-field",{attrs:{rules:e.newPasswordRules,type:"password",label:"Password Baru",required:""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),a("v-text-field",{attrs:{type:"password",rules:e.rules,label:"Konfirmasi Password",required:""},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),a("v-item-group",[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",elevation:"5"},on:{click:e.validate}},[e._v("Submit")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"warning",elevation:"5"},on:{click:e.reset}},[e._v("Reset")])],1),a("v-snackbar",{attrs:{timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text)+"\n          "),a("v-btn",{attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)],1)],1)],1)},_e=[],we={data:()=>({user:localStorage.getItem("username"),snackbar:!1,timeout:3e3,text:"",valid:!0,confirmPassword:"",oldPassword:"",oldPasswordRules:[e=>!!e||"Password lama tidak boleh kosong"],newPassword:"",newPasswordRules:[e=>!!e||"Password baru tidak boleh kosong"]}),computed:{rules(){const e=[];if(this.newPassword){const t=e=>(!!e&&e)===this.newPassword||"Password doesn't match";e.push(t)}return e}},watch:{confirmPassword:"validateField",newPassword:"validateField"},methods:{validateField(){this.$refs.form.validate()},validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.formHasErrors=!1,this.submit(),this.reset())},reset(){this.$refs.form.reset()},submit(){let e={username:this.user,oldpassword:this.oldPassword,newpassword:this.newPassword};p.a.put("http://103.233.109.131:5500/updatePassCourier",e).then(()=>{this.text="Password berhasil diubah...",this.snackbar=!0}).catch(()=>{this.text="Terjadi kesalahan...",this.snackbar=!0})}}},je=we,xe=(a("d0af"),Object(i["a"])(je,ke,_e,!1,null,"11e25da0",null)),ye=xe.exports;l()(xe,{VBtn:X["a"],VCard:B["a"],VCardText:K["b"],VCardTitle:K["c"],VContainer:S["a"],VForm:ee["a"],VItemGroup:fe["b"],VSnackbar:be["a"],VTextField:F["a"]});var Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-container",[a("v-card-title",[e._v("Search Deliver Order")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-overflow-btn",{attrs:{rules:[function(e){return!!e||"Stokist tidak boleh kosong"}],items:e.items,"item-text":"ID_STOCKIES","item-value":"ID_STOCKIES",label:"Stockist",required:"",editable:"",loading:e.isLoading,"cache-items":""},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v(e._s(t.item.ID_STOCKIES)+" - "+e._s(t.item.NAMA_STOCKIES))]}},{key:"item",fn:function(t){return[e._v(e._s(t.item.ID_STOCKIES)+" - "+e._s(t.item.NAMA_STOCKIES))]}}]),model:{value:e.stockist,callback:function(t){e.stockist=t},expression:"stockist"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6",md:"6"}},[a("v-menu",{ref:"from",attrs:{"close-on-content-click":!1,"return-value":e.date_from,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date_from=t},"update:return-value":function(t){e.date_from=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-text-field",e._g({attrs:{label:"Tanggal dari","prepend-icon":"event",readonly:""},model:{value:e.date_from,callback:function(t){e.date_from=t},expression:"date_from"}},s))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date_from,callback:function(t){e.date_from=t},expression:"date_from"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Batal")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.from.save(e.date_from)}}},[e._v("OK")])],1)],1)],1),a("v-col",{attrs:{sm:"6",md:"6"}},[a("v-menu",{ref:"to",attrs:{"close-on-content-click":!1,"return-value":e.date_to,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date_to=t},"update:return-value":function(t){e.date_to=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-text-field",e._g({attrs:{label:"Tanggal sampai","prepend-icon":"event",readonly:""},model:{value:e.date_to,callback:function(t){e.date_to=t},expression:"date_to"}},s))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date_to,callback:function(t){e.date_to=t},expression:"date_to"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu2=!1}}},[e._v("Batal")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.to.save(e.date_to)}}},[e._v("OK")])],1)],1)],1)],1),a("v-item-group",[a("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success",elevation:"5"},on:{click:e.validate}},[e._v("Submit")])],1)],1)],1)],1),a("div",{staticClass:"my-5"}),a("v-expand-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"mx-auto"},[a("v-data-table",{attrs:{headers:e.headers,items:e.items,"items-per-page":5},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Edit DO")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"No. Delivery Order",readonly:"",disabled:""},model:{value:e.editedItem.NO_DO,callback:function(t){e.$set(e.editedItem,"NO_DO",t)},expression:"editedItem.NO_DO"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"No. Resi",readonly:"",disabled:""},model:{value:e.editedItem.NO_RESI,callback:function(t){e.$set(e.editedItem,"NO_RESI",t)},expression:"editedItem.NO_RESI"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Tanggal DO",readonly:"",disabled:""},model:{value:e.editedItem.TANGGAL_DO,callback:function(t){e.$set(e.editedItem,"TANGGAL_DO",t)},expression:"editedItem.TANGGAL_DO"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Alamat",readonly:"",disabled:""},model:{value:e.editedItem.ALAMAT1,callback:function(t){e.$set(e.editedItem,"ALAMAT1",t)},expression:"editedItem.ALAMAT1"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Berat"},on:{keypress:e.numFilter},model:{value:e.editedItem.BERAT,callback:function(t){e.$set(e.editedItem,"BERAT",t)},expression:"editedItem.BERAT"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Koli"},on:{keypress:e.numFilter},model:{value:e.editedItem.KOLI,callback:function(t){e.$set(e.editedItem,"KOLI",t)},expression:"editedItem.KOLI"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Status"},model:{value:e.editedItem.STATUS,callback:function(t){e.$set(e.editedItem,"STATUS",t)},expression:"editedItem.STATUS"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"ml-3",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v("edit")])]}}])})],1)],1)],1)},Ie=[],Oe={data:()=>({stockist:"",valid:!0,items:[],dialog:!1,showList:!1,isLoading:!0,editedIndex:-1,date_from:(new Date).toISOString().substr(0,10),date_to:(new Date).toISOString().substr(0,10),menu:!1,menu2:!1,headers:[{text:"No. Delivery Order",value:"NO_DO"},{text:"No. Resi",value:"NO_RESI"},{text:"Tanggal DO",value:"TANGGAL_DO"},{text:"Actions",value:"action",sortable:!1}],editedItem:{NO_DO:"",NO_RESI:"",TANGGAL_DO:"",ALAMAT:"",STATUS:"",KOLI:"",BERAT:""},defaultItem:{NO_DO:"",NO_RESI:"",TANGGAL_DO:""}}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0,this.submit())},submit(){let e={id_stockies:this.stockist,tgl_awal:this.date_from,tgl_akhir:this.date_to,ekspedisi:localStorage.getItem("parent_courier")};p.a.post("http://103.233.109.131:5500/listDO",e).then(e=>{this.showList=!0,this.items=e.data}).catch(e=>{if(e)throw e})},getDetail(e){this.$store.commit("get_data",e),this.$router.push("/home/tracking")},editItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close(){this.dialog=!1,setTimeout(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},300)},save(){if(this.editedIndex>-1){console.log(this.editedItem);let e=ce()(),t=e.format("YYYY-MM-DD HH:mm:ss"),a={id_do:this.editedItem.ID_DO,no_do:this.editedItem.NO_DO,created_date:t,created_by:localStorage.getItem("username"),tanggal:this.editedItem.TANGGAL_DO,status:this.editedItem.STATUS,id_warehouse:this.editedItem.ID_WAREHOUSE,koli:this.editedItem.KOLI,berat:this.editedItem.BERAT,id_tracking:le()()};console.dir(a)}else this.items.push(this.editedItem);this.close()},numFilter(e){e=e||window.event;let t=e.which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()}},mounted(){p.a.get("http://103.233.109.131:5500/getListStk").then(e=>{for(let t=0;t<e.data.length;t++)this.items.push(e.data[t])}).then(()=>this.isLoading=!this.isLoading).catch(e=>{if(e)throw e})}},Ae=Oe,Te=a("2e4b"),Ce=a("169a"),Ve=a("e449"),De=a("de8e"),Ee=a("2fa4"),Ne=Object(i["a"])(Ae,Se,Ie,!1,null,null,null),Re=Ne.exports;l()(Ne,{VBtn:X["a"],VCard:B["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:Z["a"],VContainer:S["a"],VDataTable:U["a"],VDatePicker:Te["a"],VDialog:Ce["a"],VExpandTransition:ve["a"],VForm:ee["a"],VIcon:O["a"],VItemGroup:fe["b"],VMenu:Ve["a"],VOverflowBtn:De["a"],VRow:te["a"],VSpacer:Ee["a"],VTextField:F["a"]}),s["a"].use(f["a"]);const Le=new f["a"]({mode:"history",base:"/",routes:[{path:"/home",title:"Home",meta:{requiresAuth:!0},component:L,children:[{path:"/",component:q},{path:"tracking",name:"tracking",component:ge},{path:"setting",name:"setting",component:ye},{path:"search",name:"search",component:Re}]},{path:"/login",name:"login",component:re}]});Le.beforeEach((e,t,a)=>{if(e.matched.some(e=>e.meta.requiresAuth)){if(g.getters.isLoggedIn)return void a();a("/login")}else a()}),Le.replace({path:"/home"});var Pe=Le,$e=a("f309");s["a"].use($e["a"]);var ze=new $e["a"]({icons:{iconfont:"mdi"}}),Me=a("9483");a("ed18").config(),Object(Me["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a("73ec");s["a"].config.productionTip=!1,s["a"].filter("formatDate",e=>{return ce()(String(e)).format("MMMM Do YYYY")}),s["a"].prototype.$http=p.a;const Ge=localStorage.getItem("token");Ge&&(s["a"].prototype.$http.defaults.headers["Authorization"]=`Bearer ${Ge}`),new s["a"]({router:Pe,store:g,vuetify:ze,render:e=>e(v)}).$mount("#app")},"73ec":function(e,t,a){},"78de":function(e,t,a){},b861:function(e,t,a){},d0af:function(e,t,a){"use strict";var s=a("b861"),r=a.n(s);r.a},d46b:function(e,t,a){"use strict";var s=a("0e0c"),r=a.n(s);r.a},e489:function(e,t,a){"use strict";var s=a("78de"),r=a.n(s);r.a}});