webpackJsonp([1,3],{0:function(t,n,e){t.exports=e("s7k+")},ESOE:function(t,n,e){"use strict";var l=e("3j3K"),r=e("lDdF");e.n(r);e.d(n,"a",function(){return i});var i=function(){function t(){}return t.prototype.genType=function(t){if(!t||-1===t.lastIndexOf("."))return"text/plain";var n=t.substr(t.lastIndexOf(".")+1);switch(n){case"txt":return"text/plain";case"xml":case"html":return"text/"+n;case"json":return"octet/stream";default:return"application/"+n}},t.prototype.save=function(t,n,l){if(!t)throw new Error("必须指定Blod");e.i(r.saveAs)(new Blob([t],{type:l||t.type||this.genType(n)}),decodeURI(n||"download"))},t.prototype.saveText=function(t,n){var e=new Blob([t],n);this.save(e,n)},t}();i.decorators=[{type:l.z}],i.ctorParameters=function(){return[]}},KjPI:function(t,n,e){"use strict";var l=e("ESOE");e.d(n,"a",function(){return l.a});e("buKo"),e("OgvT")},"L/RD":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="L/RD"},OgvT:function(t,n,e){"use strict";var l=e("3j3K"),r=e("Fzro"),i=e("buKo"),_=e("ESOE");e.d(n,"a",function(){return u});var u=function(){function t(){}return t}();u.decorators=[{type:l.A,args:[{imports:[r.g],exports:[i.a],declarations:[i.a],providers:[_.a]}]}],u.ctorParameters=function(){return[]}},RRpH:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},Riz6:function(t,n,e){"use strict";var l=e("Fzro"),r=e("KjPI"),i=e("+pb+");e.n(i);e.d(n,"a",function(){return _});var _=function(){function t(t,n){this._http=t,this._FileSaverService=n,this.text='{ "text": "This is text file!中文" }'}return t.prototype.ngOnInit=function(){},t.prototype.onRemote=function(t,n){var e=new l.j({responseType:l.n.Blob});return this._http.get("assets/files/demo."+t,e).map(function(n){return n.headers.set("filename","demo."+t),n})},t.prototype.onDown=function(t,n){var e=this,r="save."+t;if(n){var i=new l.j({responseType:l.n.Blob});return void this._http.get("assets/files/demo."+t,i).subscribe(function(t){e._FileSaverService.save(t._body,r)})}var _=this._FileSaverService.genType(r),u=new Blob([this.text],{type:_});this._FileSaverService.save(u,r)},t.ctorParameters=function(){return[{type:l.k},{type:r.a}]},t}()},XoxQ:function(t,n,e){"use strict";function l(t){return i._16(0,[(t()(),i._17(null,["\n    "])),(t()(),i._18(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),i._17(null,["ngx-filesaver"])),(t()(),i._17(null,["\n    "])),(t()(),i._18(0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i._17(null,["Simple file save with FileSaver.js"])),(t()(),i._17(null,["\n    "])),(t()(),i._18(0,null,null,1,"demo",[],null,null,null,_.a,_.b)),i._19(57344,null,0,u.a,[o.k,s.a],null,null),(t()(),i._17(null,["\n  "]))],function(t,n){t(n,8,0)},null)}function r(t){return i._16(0,[(t()(),i._18(0,null,null,1,"app-root",[],null,null,null,l,p)),i._19(24576,null,0,a.a,[],null,null)],null,null)}var i=e("3j3K"),_=e("r6Ik"),u=e("Riz6"),o=e("Fzro"),s=e("ESOE"),a=e("nBc1");e.d(n,"a",function(){return h});var c=[],p=i._15({encapsulation:2,styles:c,data:{}}),h=i._20("app-root",a.a,r,{},{},[])},Y8Vo:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e("L+R4"),r=(e.n(l),e("wu3h")),i=(e.n(r),e("45Dp")),_=(e.n(i),e("DAFs")),u=(e.n(_),e("FD+i")),o=(e.n(u),e("qXjp")),s=(e.n(o),e("IzNg")),a=(e.n(s),e("MVjO")),c=(e.n(a),e("oFcf")),p=(e.n(c),e("nR/1")),h=(e.n(p),e("cUYv")),f=(e.n(h),e("594w")),d=(e.n(f),e("7N90")),y=(e.n(d),e("/Ife")),b=(e.n(y),e("2tFN")),g=(e.n(b),e("ChGr")),v=(e.n(g),e("ZSR1")),S=(e.n(v),e("EKrm"));e.n(S)},buKo:function(t,n,e){"use strict";var l=e("Fzro"),r=e("3j3K"),i=e("+pb+"),_=(e.n(i),e("ESOE"));e.d(n,"a",function(){return u});var u=function(){function t(t,n,e){this.el=t,this._FileSaverService=n,this._http=e}return t.prototype.onclick=function(){var t=this;if(this.http)return void this.http.subscribe(function(n){t._FileSaverService.save(n._body,t.fileName||n.headers.get("filename")||n.headers.get("x-filename"))});var n=new l.l,e=this.query||{};for(var r in e)n.set(r,e[r]);var i=new l.j({search:n,headers:new l.m(this.header||{}),responseType:l.n.Blob});this.el.nativeElement.disabled=!0,this._http.get(this.url,i).subscribe(function(n){t._FileSaverService.save(n._body,t.fileName||n.headers.get("filename")||n.headers.get("x-filename"))},function(t){},function(){t.el.nativeElement.disabled=!1})},t}();u.decorators=[{type:r.U,args:[{selector:"[fileSaver]"}]}],u.ctorParameters=function(){return[{type:r.V},{type:_.a},{type:l.k}]},u.propDecorators={http:[{type:r.X}],query:[{type:r.X}],header:[{type:r.X}],url:[{type:r.X}],fileName:[{type:r.X}],onclick:[{type:r._9,args:["click"]}]}},j55w:function(t,n,e){"use strict";var l=e("3j3K"),r=e("RRpH"),i=e("2Je8"),_=e("Qbdm"),u=e("NVOs"),o=e("Fzro"),s=e("OgvT"),a=e("ESOE"),c=e("XoxQ");e.d(n,"a",function(){return h});var p=function(t){function n(n){return t.call(this,n,[c.a],[c.a])||this}return __extends(n,t),Object.defineProperty(n.prototype,"_LOCALE_ID_13",{get:function(){return null==this.__LOCALE_ID_13&&(this.__LOCALE_ID_13=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_13},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_14",{get:function(){return null==this.__NgLocalization_14&&(this.__NgLocalization_14=new i.a(this._LOCALE_ID_13)),this.__NgLocalization_14},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Compiler_15",{get:function(){return null==this.__Compiler_15&&(this.__Compiler_15=new l.d),this.__Compiler_15},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_16",{get:function(){return null==this.__APP_ID_16&&(this.__APP_ID_16=l.e()),this.__APP_ID_16},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_17",{get:function(){return null==this.__IterableDiffers_17&&(this.__IterableDiffers_17=l.f()),this.__IterableDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_18",{get:function(){return null==this.__KeyValueDiffers_18&&(this.__KeyValueDiffers_18=l.g()),this.__KeyValueDiffers_18},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_19",{get:function(){return null==this.__DomSanitizer_19&&(this.__DomSanitizer_19=new _.b(this.parent.get(_.c))),this.__DomSanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_20",{get:function(){return null==this.__Sanitizer_20&&(this.__Sanitizer_20=this._DomSanitizer_19),this.__Sanitizer_20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_21",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_21&&(this.__HAMMER_GESTURE_CONFIG_21=new _.d),this.__HAMMER_GESTURE_CONFIG_21},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_22",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_22&&(this.__EVENT_MANAGER_PLUGINS_22=[new _.e(this.parent.get(_.c)),new _.f(this.parent.get(_.c)),new _.g(this.parent.get(_.c),this._HAMMER_GESTURE_CONFIG_21)]),this.__EVENT_MANAGER_PLUGINS_22},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_23",{get:function(){return null==this.__EventManager_23&&(this.__EventManager_23=new _.h(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(l.h))),this.__EventManager_23},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_24",{get:function(){return null==this.__ɵDomSharedStylesHost_24&&(this.__ɵDomSharedStylesHost_24=new _.i(this.parent.get(_.c))),this.__ɵDomSharedStylesHost_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_25",{get:function(){return null==this.__ɵDomRendererFactory2_25&&(this.__ɵDomRendererFactory2_25=new _.j(this._EventManager_23,this._ɵDomSharedStylesHost_24)),this.__ɵDomRendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_26",{get:function(){return null==this.__RendererFactory2_26&&(this.__RendererFactory2_26=this._ɵDomRendererFactory2_25),this.__RendererFactory2_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_27",{get:function(){return null==this.__ɵSharedStylesHost_27&&(this.__ɵSharedStylesHost_27=this._ɵDomSharedStylesHost_24),this.__ɵSharedStylesHost_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_28",{get:function(){return null==this.__Testability_28&&(this.__Testability_28=new l.i(this.parent.get(l.h))),this.__Testability_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_29",{get:function(){return null==this.__Meta_29&&(this.__Meta_29=new _.k(this.parent.get(_.c))),this.__Meta_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_30",{get:function(){return null==this.__Title_30&&(this.__Title_30=new _.l(this.parent.get(_.c))),this.__Title_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_31",{get:function(){return null==this.__ɵi_31&&(this.__ɵi_31=new u.a),this.__ɵi_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_32",{get:function(){return null==this.__BrowserXhr_32&&(this.__BrowserXhr_32=new o.a),this.__BrowserXhr_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_33",{get:function(){return null==this.__ResponseOptions_33&&(this.__ResponseOptions_33=new o.b),this.__ResponseOptions_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_34",{get:function(){return null==this.__XSRFStrategy_34&&(this.__XSRFStrategy_34=o.c()),this.__XSRFStrategy_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_35",{get:function(){return null==this.__XHRBackend_35&&(this.__XHRBackend_35=new o.d(this._BrowserXhr_32,this._ResponseOptions_33,this._XSRFStrategy_34)),this.__XHRBackend_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_36",{get:function(){return null==this.__RequestOptions_36&&(this.__RequestOptions_36=new o.e),this.__RequestOptions_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_37",{get:function(){return null==this.__Http_37&&(this.__Http_37=o.f(this._XHRBackend_35,this._RequestOptions_36)),this.__Http_37},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FileSaverService_38",{get:function(){return null==this.__FileSaverService_38&&(this.__FileSaverService_38=new a.a),this.__FileSaverService_38},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=_.m(),this._APP_INITIALIZER_2=[l.j,_.n(this.parent.get(_.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new _.p(this.parent.get(_.p,null)),this._ɵba_8=new u.b,this._FormsModule_9=new u.c,this._HttpModule_10=new o.g,this._FileSaverModule_11=new s.a,this._FileSaverDemoModule_12=new r.a,this._FileSaverDemoModule_12},n.prototype.getInternal=function(t,n){return t===i.b?this._CommonModule_0:t===l.p?this._ErrorHandler_1:t===l.q?this._APP_INITIALIZER_2:t===l.l?this._ApplicationInitStatus_3:t===l.m?this._ɵf_4:t===l.r?this._ApplicationRef_5:t===l.o?this._ApplicationModule_6:t===_.p?this._BrowserModule_7:t===u.b?this._ɵba_8:t===u.c?this._FormsModule_9:t===o.g?this._HttpModule_10:t===s.a?this._FileSaverModule_11:t===r.a?this._FileSaverDemoModule_12:t===l.c?this._LOCALE_ID_13:t===i.c?this._NgLocalization_14:t===l.d?this._Compiler_15:t===l.s?this._APP_ID_16:t===l.t?this._IterableDiffers_17:t===l.u?this._KeyValueDiffers_18:t===_.q?this._DomSanitizer_19:t===l.v?this._Sanitizer_20:t===_.r?this._HAMMER_GESTURE_CONFIG_21:t===_.s?this._EVENT_MANAGER_PLUGINS_22:t===_.h?this._EventManager_23:t===_.i?this._ɵDomSharedStylesHost_24:t===_.j?this._ɵDomRendererFactory2_25:t===l.w?this._RendererFactory2_26:t===_.t?this._ɵSharedStylesHost_27:t===l.i?this._Testability_28:t===_.k?this._Meta_29:t===_.l?this._Title_30:t===u.a?this._ɵi_31:t===o.a?this._BrowserXhr_32:t===o.h?this._ResponseOptions_33:t===o.i?this._XSRFStrategy_34:t===o.d?this._XHRBackend_35:t===o.j?this._RequestOptions_36:t===o.k?this._Http_37:t===a.a?this._FileSaverService_38:n},n.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_24&&this._ɵDomSharedStylesHost_24.ngOnDestroy()},n}(l.x),h=new l.y(p,r.a)},nBc1:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},oYMd:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l={production:!0}},onFW:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},r6Ik:function(t,n,e){"use strict";function l(t){return _._16(0,[(t()(),_._18(0,null,null,1,"p",[],null,null,null,null,null)),(t()(),_._17(null,["排版问题，以下只是示例，关于使用方法见README.md。"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),_._17(null,["文本型"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,5,"textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var l=!0,r=t.component;if("input"===n){l=!1!==_._21(t,7)._handleInput(e.target.value)&&l}if("blur"===n){l=!1!==_._21(t,7).onTouched()&&l}if("compositionstart"===n){l=!1!==_._21(t,7)._compositionStart()&&l}if("compositionend"===n){l=!1!==_._21(t,7)._compositionEnd(e.target.value)&&l}if("ngModelChange"===n){l=!1!==(r.text=e)&&l}return l},null,null)),_._19(8192,null,0,o.d,[_.W,_.V,[2,o.e]],null,null),_._22(512,null,o.f,function(t){return[t]},[o.d]),_._19(335872,null,0,o.g,[[8,null],[8,null],[8,null],[2,o.f]],{model:[0,"model"]},{update:"ngModelChange"}),_._22(1024,null,o.h,null,[o.g]),_._19(8192,null,0,o.i,[o.h],null,null),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("txt",!1)&&l}return l},null,null)),(t()(),_._17(null,["Save Text"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("json",!1)&&l}return l},null,null)),(t()(),_._17(null,["Save JSON"])),(t()(),_._17(null,["\n\n"])),(t()(),_._18(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),_._17(null,["远程文件下载"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("docx",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save Word"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("xlsx",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save Excel"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("csv",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save CSV"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("pptx",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save PPT"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("pdf",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save PDF"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("zip",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save Zip"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("7z",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save 7z"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("jpg",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save JPG"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("gif",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save Gif"])),(t()(),_._17(null,["\n"])),(t()(),_._18(0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,r=t.component;if("click"===n){l=!1!==r.onDown("png",!0)&&l}return l},null,null)),(t()(),_._17(null,["Save Png"])),(t()(),_._17(null,["\n"]))],function(t,n){t(n,9,0,n.component.text)},function(t,n){t(n,6,0,_._21(n,11).ngClassUntouched,_._21(n,11).ngClassTouched,_._21(n,11).ngClassPristine,_._21(n,11).ngClassDirty,_._21(n,11).ngClassValid,_._21(n,11).ngClassInvalid,_._21(n,11).ngClassPending)})}function r(t){return _._16(0,[(t()(),_._18(0,null,null,1,"demo",[],null,null,null,l,p)),_._19(57344,null,0,u.a,[s.k,a.a],null,null)],function(t,n){t(n,1,0)},null)}var i=e("onFW"),_=e("3j3K"),u=e("Riz6"),o=e("NVOs"),s=e("Fzro"),a=e("ESOE");e.d(n,"b",function(){return p}),n.a=l;var c=[i.a],p=_._15({encapsulation:0,styles:c,data:{}});_._20("demo",u.a,r,{},{},[])},"s7k+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=(e("Y8Vo"),e("3j3K")),r=e("oYMd"),i=e("Qbdm"),_=e("j55w");r.a.production&&e.i(l.a)(),e.i(i.a)().bootstrapModuleFactory(_.a)}},[0]);