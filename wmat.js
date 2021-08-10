
var Matrix = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Matrix) {
  Matrix = Matrix || {};


var g;g||(g=typeof Matrix !== 'undefined' ? Matrix : {});var aa,ca;g.ready=new Promise(function(a,b){aa=a;ca=b});var p={},u;for(u in g)g.hasOwnProperty(u)&&(p[u]=g[u]);var da=!1,v=!1,ea=!1,fa=!1;da="object"===typeof window;v="function"===typeof importScripts;ea="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;fa=!da&&!ea&&!v;var x="",ha,ia,y,ja,ka;
if(ea)x=v?require("path").dirname(x)+"/":__dirname+"/",ha=function(a,b){ja||(ja=require("fs"));ka||(ka=require("path"));a=ka.normalize(a);return ja.readFileSync(a,b?null:"utf8")},y=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",z),g.inspect=function(){return"[Emscripten Module object]"};else if(fa)"undefined"!=
typeof read&&(ha=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(da||v)v?x=self.location.href:"undefined"!==typeof document&&document.currentScript&&(x=document.currentScript.src),_scriptDir&&(x=_scriptDir),
0!==x.indexOf("blob:")?x=x.substr(0,x.lastIndexOf("/")+1):x="",ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
g.print||console.log.bind(console);var A=g.printErr||console.warn.bind(console);for(u in p)p.hasOwnProperty(u)&&(g[u]=p[u]);p=null;var B;g.wasmBinary&&(B=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var la,ma=!1;function assert(a,b){a||z("Assertion failed: "+b)}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&na)return na.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var f=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var k=c[a++]&63;e=224==(e&240)?(e&15)<<12|f<<6|k:(e&7)<<18|f<<12|k<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}
function qa(a,b,c){var d=C;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var k=a.charCodeAt(++e);f=65536+((f&1023)<<10)|k&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0}}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function sa(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ta[c];)++c;c<<=1;if(32<c-a&&ra)return ra.decode(C.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=D[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function ua(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)D[b>>1]=a.charCodeAt(e),b+=2;D[b>>1]=0;return b-d}function va(a){return 2*a.length}
function wa(a,b){for(var c=0,d="";!(c>=b/4);){var e=E[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function xa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var k=a.charCodeAt(++e);f=65536+((f&1023)<<10)|k&1023}E[b>>2]=f;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}
function ya(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var za,Aa,C,D,ta,E,F,Ba,Ca,Da,Ea;function Fa(){var a=la.buffer;za=a;g.HEAP8=Aa=new Int8Array(a);g.HEAP16=D=new Int16Array(a);g.HEAP32=E=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=ta=new Uint16Array(a);g.HEAPU32=F=new Uint32Array(a);g.HEAPF32=Ba=new Float32Array(a);g.HEAPF64=Ca=new Float64Array(a);g.HEAP64=Da=new BigInt64Array(a);g.HEAPU64=Ea=new BigUint64Array(a)}
var Ga,Ha=[],Ia=[],Ja=[];function La(){var a=g.preRun.shift();Ha.unshift(a)}var G=0,Ma=null,H=null;g.preloadedImages={};g.preloadedAudios={};function z(a){if(g.onAbort)g.onAbort(a);A(a);ma=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ca(a);throw a;}function Na(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="wmat.wasm";if(!Na()){var Oa=I;I=g.locateFile?g.locateFile(Oa,x):x+Oa}
function Pa(){var a=I;try{if(a==I&&B)return new Uint8Array(B);if(y)return y(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Qa(){if(!B&&(da||v)){if("function"===typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Pa()});if(ia)return new Promise(function(a,b){ia(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Pa()})}
function Ra(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.ja;"number"===typeof c?void 0===b.U?Ga.get(c)():Ga.get(c)(b.U):c(void 0===b.U?null:b.U)}}}function J(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}var Sa=void 0;function K(a){for(var b="";C[a];)b+=Sa[C[a++]];return b}var L={},M={},Ta={};
function Ua(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Va(a,b){a=Ua(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Wa(a){var b=Error,c=Va(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var N=void 0;function O(a){throw new N(a);}var Xa=void 0;function Ya(a){throw new Xa(a);}
function P(a,b,c){function d(h){h=c(h);h.length!==a.length&&Ya("Mismatched type converter count");for(var n=0;n<a.length;++n)Q(a[n],h[n])}a.forEach(function(h){Ta[h]=b});var e=Array(b.length),f=[],k=0;b.forEach(function(h,n){M.hasOwnProperty(h)?e[n]=M[h]:(f.push(h),L.hasOwnProperty(h)||(L[h]=[]),L[h].push(function(){e[n]=M[h];++k;k===f.length&&d(e)}))});0===f.length&&d(e)}
function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||O('type "'+d+'" must have a positive integer typeid pointer');if(M.hasOwnProperty(a)){if(c.ba)return;O("Cannot register type '"+d+"' twice")}M[a]=b;delete Ta[a];L.hasOwnProperty(a)&&(b=L[a],delete L[a],b.forEach(function(e){e()}))}
function Za(a,b,c){switch(b){case 0:return c?function(d){return Aa[d]}:function(d){return C[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return ta[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return F[d>>2]};case 3:return c?function(d){return Da[d>>3]}:function(d){return Ea[d>>3]};default:throw new TypeError("Unknown integer type: "+a);}}
function $a(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function ab(a){return{count:a.count,M:a.M,O:a.O,C:a.C,D:a.D,G:a.G,H:a.H}}function bb(a){O(a.A.D.B.name+" instance already deleted")}var cb=!1;function db(){}function eb(a){--a.count.value;0===a.count.value&&(a.G?a.H.L(a.G):a.D.B.L(a.C))}
function S(a){if("undefined"===typeof FinalizationGroup)return S=function(b){return b},a;cb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.C?eb(c):console.warn("object already deleted: "+c.C)});S=function(b){cb.register(b,b.A,b.A);return b};db=function(b){cb.unregister(b.A)};return S(a)}var T=void 0,U=[];function fb(){for(;U.length;){var a=U.pop();a.A.M=!1;a["delete"]()}}function V(){}var gb={};
function hb(a,b,c){if(void 0===a[b].F){var d=a[b];a[b]=function(){a[b].F.hasOwnProperty(arguments.length)||O("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].F+")!");return a[b].F[arguments.length].apply(this,arguments)};a[b].F=[];a[b].F[d.R]=d}}
function ib(a,b,c){g.hasOwnProperty(a)?((void 0===c||void 0!==g[a].F&&void 0!==g[a].F[c])&&O("Cannot register public name '"+a+"' twice"),hb(g,a,a),g.hasOwnProperty(c)&&O("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),g[a].F[c]=b):(g[a]=b,void 0!==c&&(g[a].la=c))}function jb(a,b,c,d,e,f,k,h){this.name=a;this.constructor=b;this.N=c;this.L=d;this.I=e;this.$=f;this.P=k;this.Z=h;this.ea=[]}
function kb(a,b,c){for(;b!==c;)b.P||O("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.P(a),b=b.I;return a}function lb(a,b){if(null===b)return this.V&&O("null is not a valid "+this.name),0;b.A||O('Cannot pass "'+J(b)+'" as a '+this.name);b.A.C||O("Cannot pass deleted object as a pointer of type "+this.name);return kb(b.A.C,b.A.D.B,this.B)}
function mb(a,b){if(null===b){this.V&&O("null is not a valid "+this.name);if(this.T){var c=this.fa();null!==a&&a.push(this.L,c);return c}return 0}b.A||O('Cannot pass "'+J(b)+'" as a '+this.name);b.A.C||O("Cannot pass deleted object as a pointer of type "+this.name);!this.S&&b.A.D.S&&O("Cannot convert argument of type "+(b.A.H?b.A.H.name:b.A.D.name)+" to parameter type "+this.name);c=kb(b.A.C,b.A.D.B,this.B);if(this.T)switch(void 0===b.A.G&&O("Passing raw pointer to smart pointer is illegal"),this.ia){case 0:b.A.H===
this?c=b.A.G:O("Cannot convert argument of type "+(b.A.H?b.A.H.name:b.A.D.name)+" to parameter type "+this.name);break;case 1:c=b.A.G;break;case 2:if(b.A.H===this)c=b.A.G;else{var d=b.clone();c=this.ga(c,nb(function(){d["delete"]()}));null!==a&&a.push(this.L,c)}break;default:O("Unsupporting sharing policy")}return c}
function ob(a,b){if(null===b)return this.V&&O("null is not a valid "+this.name),0;b.A||O('Cannot pass "'+J(b)+'" as a '+this.name);b.A.C||O("Cannot pass deleted object as a pointer of type "+this.name);b.A.D.S&&O("Cannot convert argument of type "+b.A.D.name+" to parameter type "+this.name);return kb(b.A.C,b.A.D.B,this.B)}function pb(a){return this.fromWireType(F[a>>2])}function qb(a,b,c){if(b===c)return a;if(void 0===c.I)return null;a=qb(a,b,c.I);return null===a?null:c.Z(a)}var rb={};
function ub(a,b){for(void 0===b&&O("ptr should not be undefined");a.I;)b=a.P(b),a=a.I;return rb[b]}function vb(a,b){b.D&&b.C||Ya("makeClassHandle requires ptr and ptrType");!!b.H!==!!b.G&&Ya("Both smartPtrType and smartPtr must be specified");b.count={value:1};return S(Object.create(a,{A:{value:b}}))}function W(a,b,c,d){this.name=a;this.B=b;this.V=c;this.S=d;this.T=!1;this.L=this.ga=this.fa=this.X=this.ia=this.da=void 0;void 0!==b.I?this.toWireType=mb:(this.toWireType=d?lb:ob,this.J=null)}
function wb(a,b,c){g.hasOwnProperty(a)||Ya("Replacing nonexistant public symbol");void 0!==g[a].F&&void 0!==c?g[a].F[c]=b:(g[a]=b,g[a].R=c)}function X(a,b){a=K(a);var c=Ga.get(b);"function"!==typeof c&&O("unknown function pointer with signature "+a+": "+b);return c}var xb=void 0;function yb(a){a=zb(a);var b=K(a);Y(a);return b}function Ab(a,b){function c(f){e[f]||M[f]||(Ta[f]?Ta[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new xb(a+": "+d.map(yb).join([", "]));}
function Bb(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}function Cb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Db(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Va(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Eb(a,b,c,d,e){var f=b.length;2>f&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");var k=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].J){h=!0;break}var n="void"!==b[0].name,l="",m="";for(c=0;c<f-2;++c)l+=(0!==c?", ":"")+"arg"+c,m+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Ua(a)+"("+l+") {\nif (arguments.length !== "+(f-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(f-2)+" args!');\n}\n";h&&(a+="var destructors = [];\n");var q=h?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[O,d,e,Cb,b[0],b[1]];k&&(a+="var thisWired = classParam.toWireType("+q+", this);\n");for(c=0;c<f-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+q+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),d.push(b[c+2]);k&&(m="thisWired"+(0<m.length?", ":"")+m);a+=(n?"var rv = ":"")+"invoker(fn"+(0<m.length?", ":"")+m+");\n";if(h)a+=
"runDestructors(destructors);\n";else for(c=k?1:2;c<b.length;++c)f=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].J&&(a+=f+"_dtor("+f+"); // "+b[c].name+"\n",l.push(f+"_dtor"),d.push(b[c].J));n&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return Db(l).apply(null,d)}var Fb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function nb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Fb.length?Fb.pop():Z.length;Z[b]={ha:1,value:a};return b}}function Gb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}for(var Hb=Array(256),Ib=0;256>Ib;++Ib)Hb[Ib]=String.fromCharCode(Ib);Sa=Hb;N=g.BindingError=Wa("BindingError");
Xa=g.InternalError=Wa("InternalError");V.prototype.isAliasOf=function(a){if(!(this instanceof V&&a instanceof V))return!1;var b=this.A.D.B,c=this.A.C,d=a.A.D.B;for(a=a.A.C;b.I;)c=b.P(c),b=b.I;for(;d.I;)a=d.P(a),d=d.I;return b===d&&c===a};V.prototype.clone=function(){this.A.C||bb(this);if(this.A.O)return this.A.count.value+=1,this;var a=S(Object.create(Object.getPrototypeOf(this),{A:{value:ab(this.A)}}));a.A.count.value+=1;a.A.M=!1;return a};
V.prototype["delete"]=function(){this.A.C||bb(this);this.A.M&&!this.A.O&&O("Object already scheduled for deletion");db(this);eb(this.A);this.A.O||(this.A.G=void 0,this.A.C=void 0)};V.prototype.isDeleted=function(){return!this.A.C};V.prototype.deleteLater=function(){this.A.C||bb(this);this.A.M&&!this.A.O&&O("Object already scheduled for deletion");U.push(this);1===U.length&&T&&T(fb);this.A.M=!0;return this};W.prototype.aa=function(a){this.X&&(a=this.X(a));return a};
W.prototype.W=function(a){this.L&&this.L(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=pb;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.T?vb(this.B.N,{D:this.da,C:c,H:this,G:a}):vb(this.B.N,{D:this,C:a})}var c=this.aa(a);if(!c)return this.W(a),null;var d=ub(this.B,c);if(void 0!==d){if(0===d.A.count.value)return d.A.C=c,d.A.G=a,d.clone();d=d.clone();this.W(a);return d}d=this.B.$(c);d=gb[d];if(!d)return b.call(this);d=this.S?d.Y:d.pointerType;var e=qb(c,this.B,d.B);return null===e?b.call(this):this.T?vb(d.B.N,{D:d,C:e,H:this,G:a}):vb(d.B.N,{D:d,C:e})};
g.getInheritedInstanceCount=function(){return Object.keys(rb).length};g.getLiveInheritedInstances=function(){var a=[],b;for(b in rb)rb.hasOwnProperty(b)&&a.push(rb[b]);return a};g.flushPendingDeletes=fb;g.setDelayFunction=function(a){T=a;U.length&&T&&T(fb)};xb=g.UnboundTypeError=Wa("UnboundTypeError");g.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};g.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
var Kb={b:function(a,b,c,d){z("Assertion failed: "+(a?oa(a,void 0):"")+", at: "+[b?b?oa(b,void 0):"":"unknown filename",c,d?d?oa(d,void 0):"":"unknown function"])},k:function(a,b,c,d,e){b=K(b);c=$a(c);var f=-1!=b.indexOf("u");f&&(e=(BigInt(1)<<BigInt(64))-BigInt(1));Q(a,{name:b,fromWireType:function(k){return k},toWireType:function(k,h){if("bigint"!==typeof h)throw new TypeError('Cannot convert "'+J(h)+'" to '+this.name);if(h<d||h>e)throw new TypeError('Passing a number "'+J(h)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+d+", "+e+"]!");return h},argPackAdvance:8,readValueFromPointer:Za(b,c,!f),J:null})},l:function(a,b,c,d,e){var f=$a(c);b=K(b);Q(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=Aa;else if(2===c)h=D;else if(4===c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>f])},J:null})},g:function(a,b,c,d,e,f,k,h,n,l,m,q,r){m=
K(m);f=X(e,f);h&&(h=X(k,h));l&&(l=X(n,l));r=X(q,r);var w=Ua(m);ib(w,function(){Ab("Cannot construct "+m+" due to unbound types",[d])});P([a,b,c],d?[d]:[],function(t){t=t[0];if(d){var pa=t.B;var ba=pa.N}else ba=V.prototype;t=Va(w,function(){if(Object.getPrototypeOf(this)!==Ka)throw new N("Use 'new' to construct "+m);if(void 0===R.K)throw new N(m+" has no accessible constructor");var sb=R.K[arguments.length];if(void 0===sb)throw new N("Tried to invoke ctor of "+m+" with invalid number of parameters ("+
arguments.length+") - expected ("+Object.keys(R.K).toString()+") parameters instead!");return sb.apply(this,arguments)});var Ka=Object.create(ba,{constructor:{value:t}});t.prototype=Ka;var R=new jb(m,t,Ka,r,pa,f,h,l);pa=new W(m,R,!0,!1);ba=new W(m+"*",R,!1,!1);var tb=new W(m+" const*",R,!1,!0);gb[a]={pointerType:ba,Y:tb};wb(w,t);return[pa,ba,tb]})},d:function(a,b,c,d,e,f){assert(0<b);var k=Bb(b,c);e=X(d,e);var h=[f],n=[];P([],[a],function(l){l=l[0];var m="constructor "+l.name;void 0===l.B.K&&(l.B.K=
[]);if(void 0!==l.B.K[b-1])throw new N("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+l.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");l.B.K[b-1]=function(){Ab("Cannot construct "+l.name+" due to unbound types",k)};P([],k,function(q){l.B.K[b-1]=function(){arguments.length!==b-1&&O(m+" called with "+arguments.length+" arguments, expected "+(b-1));n.length=0;h.length=b;for(var r=1;r<b;++r)h[r]=
q[r].toWireType(n,arguments[r-1]);r=e.apply(null,h);Cb(n);return q[0].fromWireType(r)};return[]});return[]})},c:function(a,b,c,d,e,f,k,h){var n=Bb(c,d);b=K(b);f=X(e,f);P([],[a],function(l){function m(){Ab("Cannot call "+q+" due to unbound types",n)}l=l[0];var q=l.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);h&&l.B.ea.push(b);var r=l.B.N,w=r[b];void 0===w||void 0===w.F&&w.className!==l.name&&w.R===c-2?(m.R=c-2,m.className=l.name,r[b]=m):(hb(r,b,q),r[b].F[c-2]=m);P([],n,function(t){t=Eb(q,
t,l,f,k);void 0===r[b].F?(t.R=c-2,r[b]=t):r[b].F[c-2]=t;return[]});return[]})},r:function(a,b){b=K(b);Q(a,{name:b,fromWireType:function(c){var d=Z[c].value;4<c&&0===--Z[c].ha&&(Z[c]=void 0,Fb.push(c));return d},toWireType:function(c,d){return nb(d)},argPackAdvance:8,readValueFromPointer:pb,J:null})},j:function(a,b,c){c=$a(c);b=K(b);Q(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+J(e)+'" to '+
this.name);return e},argPackAdvance:8,readValueFromPointer:Gb(b,c),J:null})},a:function(a,b,c,d,e,f){var k=Bb(b,c);a=K(a);e=X(d,e);ib(a,function(){Ab("Cannot call "+a+" due to unbound types",k)},b-1);P([],k,function(h){h=[h[0],null].concat(h.slice(1));wb(a,Eb(a,h,null,e,f),b-1);return[]})},f:function(a,b,c,d,e){function f(l){return l}b=K(b);-1===e&&(e=4294967295);var k=$a(c);if(0===d){var h=32-8*c;f=function(l){return l<<h>>>h}}var n=b.includes("unsigned");Q(a,{name:b,fromWireType:f,toWireType:function(l,
m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+J(m)+'" to '+this.name);if(m<d||m>e)throw new TypeError('Passing a number "'+J(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return n?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Za(b,k,0!==d),J:null})},e:function(a,b,c){function d(f){f>>=2;var k=F;return new e(za,k[f+1],k[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,
Uint32Array,Float32Array,Float64Array][b];c=K(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ba:!0})},i:function(a,b){b=K(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(d){var e=F[d>>2];if(c)for(var f=d+4,k=0;k<=e;++k){var h=d+4+k;if(k==e||0==C[h]){f=f?oa(f,h-f):"";if(void 0===n)var n=f;else n+=String.fromCharCode(0),n+=f;f=h+1}}else{n=Array(e);for(k=0;k<e;++k)n[k]=String.fromCharCode(C[d+4+k]);n=n.join("")}Y(d);return n},toWireType:function(d,e){e instanceof
ArrayBuffer&&(e=new Uint8Array(e));var f="string"===typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||O("Cannot pass non-string to std::string");var k=(c&&f?function(){for(var l=0,m=0;m<e.length;++m){var q=e.charCodeAt(m);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|e.charCodeAt(++m)&1023);127>=q?++l:l=2047>=q?l+2:65535>=q?l+3:l+4}return l}:function(){return e.length})(),h=Jb(4+k+1);F[h>>2]=k;if(c&&f)qa(e,h+4,k+1);else if(f)for(f=0;f<k;++f){var n=e.charCodeAt(f);
255<n&&(Y(h),O("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+f]=n}else for(f=0;f<k;++f)C[h+4+f]=e[f];null!==d&&d.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:pb,J:function(d){Y(d)}})},h:function(a,b,c){c=K(c);if(2===b){var d=sa;var e=ua;var f=va;var k=function(){return ta};var h=1}else 4===b&&(d=wa,e=xa,f=ya,k=function(){return F},h=2);Q(a,{name:c,fromWireType:function(n){for(var l=F[n>>2],m=k(),q,r=n+4,w=0;w<=l;++w){var t=n+4+w*b;if(w==l||0==m[t>>h])r=d(r,t-r),void 0===
q?q=r:(q+=String.fromCharCode(0),q+=r),r=t+b}Y(n);return q},toWireType:function(n,l){"string"!==typeof l&&O("Cannot pass non-string to C++ string type "+c);var m=f(l),q=Jb(4+m+b);F[q>>2]=m>>h;e(l,q+4,m+b);null!==n&&n.push(Y,q);return q},argPackAdvance:8,readValueFromPointer:pb,J:function(n){Y(n)}})},m:function(a,b){b=K(b);Q(a,{ka:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},q:function(){z()},o:function(a,b,c){C.copyWithin(a,b,b+c)},p:function(a){var b=C.length;a>>>=
0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-za.byteLength+65535>>>16);Fa();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},n:function(a){var b=Date.now()/1E3|0;a&&(E[a>>2]=b);return b}};
(function(){function a(e){g.asm=e.exports;la=g.asm.s;Fa();Ga=g.asm.u;Ia.unshift(g.asm.t);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ma&&(clearInterval(Ma),Ma=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Qa().then(function(f){return WebAssembly.instantiate(f,d)}).then(e,function(f){A("failed to asynchronously prepare wasm: "+f);z(f)})}var d={a:Kb};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Na()||I.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){A("wasm streaming compile failed: "+f);A("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ca);return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.t).apply(null,arguments)};var zb=g.___getTypeName=function(){return(zb=g.___getTypeName=g.asm.v).apply(null,arguments)};g.___embind_register_native_and_builtin_types=function(){return(g.___embind_register_native_and_builtin_types=g.asm.w).apply(null,arguments)};var Jb=g._malloc=function(){return(Jb=g._malloc=g.asm.x).apply(null,arguments)},Y=g._free=function(){return(Y=g._free=g.asm.y).apply(null,arguments)},Lb;
H=function Mb(){Lb||Nb();Lb||(H=Mb)};
function Nb(){function a(){if(!Lb&&(Lb=!0,g.calledRun=!0,!ma)){Ra(Ia);aa(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();Ja.unshift(b)}Ra(Ja)}}if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)La();Ra(Ha);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}g.run=Nb;
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();Nb();


  return Matrix.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Matrix;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Matrix; });
else if (typeof exports === 'object')
  exports["Matrix"] = Matrix;
