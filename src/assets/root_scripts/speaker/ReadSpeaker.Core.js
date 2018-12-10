ReadSpeaker.Common=function(){var i={revision:"4371"},l={onAdapterReady:[],onInit:[],onCoreLoaded:[],onModsLoaded:[],onAfterModsLoaded:[],onAfterExtraModsLoaded:[],onConfigLoaded:[],onConfigSetup:[],onDOMReady:[],onReady:[],onSelectedText:[],onDeselectedText:[],onSettingsInitialized:[],onSettingsChanged:[],onSettingsLoaded:[],onSettingsClosed:[],onDownloadLoaded:[],onFocusIn:[],onFocusOut:[],onUIInitialized:[],onUIBeforePlay:[],onUIAfterPlay:[],onUIPause:[],onUISliderMove:[],onUIStop:[],onUIShowPlayer:[],
onUIClosePlayer:[],onAPIPlay:[],onAPIPause:[],onAPIStop:[],onAPIVolumeUp:[],onAPIVolumeDown:[],onAPIMute:[],onAPIFastForward:[],onAPIRewind:[],onAPISetVolume:[],onAPISetProgress:[],onAPIGetProgress:[],onAPIInitAdapter:[],onAPIReleaseAdapter:[],onAPIReloadAdapter:[],onBeforeSyncInit:[],onAfterSyncInit:[],onBeforeSync:[],onAfterSync:[],onAfterSyncExit:[],onBeforeContentChange:[],onAfterContentChange:[],onBeforeGetAudioLink:[],onBeforeParamsSet:[],onAfterParamsSet:[],onAudioLoadError:[],onVolumeAdjusted:[],
onChunkResume:[]},m={speed:function(a,b){var c=parseInt(b||rspkr.pub.Config.item("general.defaultSpeedValue")||100),d=parseInt(rspkr.pub.Config.item("general.defaultSlowSpeedValue")||c-25),e=parseInt(rspkr.pub.Config.item("general.defaultFastSpeedValue")||c+25);switch(a){case "slow":return d;case "medium":return c;case "fast":return e;default:return c}}},f={audioLink:null,params:{},postContent:"",postLink:null,saveLink:null,selectedHTML:"",selectedText:"",selectedRange:null,sync:"wordsent",syncLink:null,
browser:{name:"",flashVersion:"",version:"",OS:"",html5AudioFormat:"",html5Support:!1,html5Priority:!1,syncContainer:""},setParams:function(a){rspkr.log("[rspkr.c.data.setParams] "+a);if("string"==typeof a){this.params={};var b="",c="",b="",c=a.split("?");rspkr.cfg.item("general.servercall",c[0]);for(var a=c[1].split(/[;&]/),d=0;d<a.length;d++)if((b=a[d].split("="))&&2==b.length){var c=decodeURIComponent(b[0]),e=b[1],b=decodeURIComponent(b[1]);if("url"==c&&!b.length)e=encodeURIComponent(document.location.href);
else if("lang"==c&&2==b.length)for(var g in rspkr.cfg.item("phrases")){if(rspkr.cfg.item("phrases").hasOwnProperty(g)&&b==g.substring(0,2)){e=g;break}}else if("readid"==c||"readclass"==c){for(var b=e.split(","),e=[],p=function(a,c){for(var b=0,d=a.length;b<d;b++)if(this[b]===c)return b;return-1},j=0;j<b.length;j++)-1==p(e,b[j])&&e.push(b[j]);e=e.join(",")}this.params[c]=e}this.params.rsjs_ver=rspkr.getVersion();this.params.synccontainer=this.browser.syncContainer;this.params.url||(this.params.url=
document.location.href);this.params.readid=this.params.readid||"";if(rspkr.c.data.selectedText||rspkr.c.data.selectedHTML)delete this.params.readid,delete this.params.readclass;rspkr.Common.dispatchEvent("onAfterParamsSet")}},setDefaultValues:function(){rspkr.log("[rspkr.c.data.setDefaultValues] Called!");rspkr.Common.data.selectedHTML="";rspkr.Common.data.saveLink=null},setPostContent:function(a){if("string"==typeof a){if("textsel"===a)a=this.selectedHTML;else{var b=[],a="";rspkr.hl&&rspkr.hl.Restore.hasMarkup()&&
rspkr.hl.sync.fullCleanUp();var c=[];rspkr.c.data.params.hasOwnProperty("readid")&&rspkr.c.data.params.readid.length&&(c=c.concat(("#"+rspkr.c.data.params.readid.split(",").join(",#")).split(",")));rspkr.c.data.params.hasOwnProperty("readclass")&&rspkr.c.data.params.readclass.length&&(c=c.concat(("."+rspkr.c.data.params.readclass.split(",").join(",.")).split(",")));if(rspkr.cfg.item("general.readidOrder")&&rspkr.cfg.item("general.usePost"))for(var d=0;d<c.length;d++){var e=$rs.get(c[d]);$rs.isArray(e)&&
0<e.length?b.concat(e):$rs.isArray(e)||b.push(e)}else b=$rs.get(c.join(","));$rs.isArray(b)||(b=[b]);for(d=0;c=b[d];d++){var e=c.id?' id="'+c.id+'"':"",g=c.className?' class="'+c.className+'"':"",p;p=c.nodeName&&"TABLE"==c.nodeName?"TABLE":"DIV";a+="<"+p+e+g+">"+c.innerHTML+"</"+p+">"}b=document.createElement("div");b.innerHTML=a;a=$rs.findIn(b,".rs_skip.rs_preserve");$rs.isArray(a)||(a=[a]);for(d=0;c=a[d];d++)c.innerHTML="";a=b.innerHTML}!0===rspkr.cfg.item("general.parseMathJax")&&(a=this.parseMathJax(a));
this.postContent=r.encode(a)}},parseMathJax:function(a){var b=document.createElement("div"),c,d,e;d=window.MathJax;b.innerHTML=a;if(c=$rs.findIn(b,".MathJax")){a=$rs.findIn(c,".math");$rs.isArray(a)&&0===a.length&&(a=c);for(var a=$rs.isArray(a)?a:[a],g=a.length-1;0<=g;g--)"object"===typeof a[g]&&(e=document.createElement("div"),mjaxObj=d.Hub.getJaxFor(a[g].id),e.innerHTML=mjaxObj.originalText,c=$rs.closest(a[g],"div.MathJax_Display"),$rs.hasClass(a[g],"math")?(a[g].parentNode.parentNode.replaceChild(e,
a[g].parentNode),c&&c.tagName&&c.parentNode.replaceChild(e,c)):c?c.parentNode.replaceChild(e,c):a[g].parentNode.replaceChild(e,a[g]));d=b.getElementsByTagName("script");for(a=d.length-1;0<=a;a--)d[a].type&&"math/mml"===d[a].type&&d[a].parentNode.removeChild(d[a]);return b.innerHTML}return a},setSelectedText:function(a){this.selectedText="";var b=void 0,c=void 0;if(window.getSelection){c=window.getSelection();if(!c.isCollapsed){if(c.getRangeAt){var d=c.getRangeAt(0),e=c.getRangeAt(c.rangeCount-1),
b=document.createRange();b.setStart(d.startContainer,d.startOffset);b.setEnd(e.endContainer,e.endOffset)}else b=document.createRange(),b.setStart(c.anchorNode,c.anchorOffset),b.setEnd(c.focusNode,c.focusOffset);b?(DOM=b.cloneContents(),object=document.createElement("div"),object.appendChild(DOM.cloneNode(!0)),this.selectedText=object.innerHTML):this.selectedText=c}this.selectedRange=b}else document.selection?(c=document.selection,this.selectedText=(b=c.createRange())&&b.htmlText&&b.text&&0<b.text.length?
b.htmlText:b&&b.text?b.text:"",this.selectedRange=b.duplicate()):document.getSelection&&(this.selectedText=document.getSelection());window.getSelection?0<this.selectedText.length&&window.getSelection().getRangeAt&&window.getSelection().getRangeAt(0)&&0<window.getSelection().getRangeAt(0).toString().length&&a?k("onSelectedText",window,[a]):(this.selectedText="",k("onDeselectedText",window,["empty"])):0<this.selectedText.length&&a?k("onSelectedText",window,[a]):k("onDeselectedText",window,["empty"]);
rspkr.log("[rspkr.c.setSelectedText] Selected text length is "+this.selectedText.length)},createReadRange:function(a){if(a=document.getElementById(a))if(document.selection&&(9>this.browser.version||9>document.documentMode)){var b=document.body.createTextRange();b.moveToElementText(a);this.selectedRange=b;this.selectedText=b.htmlText}else b=document.createRange(),b.selectNodeContents(a),this.selectedRange=b,this.selectedText=b.toString()},getParam:function(a){return this.params&&this.params[a]&&void 0!==
this.params[a]?this.params[a]:null},getParams:function(){return this.params},getPostContent:function(){return this.postContent},getRestoreContent:function(){return this.restoreContent},getSelectedText:function(){return this.selectedText},getAudioLink:function(a,b){rspkr.devt("onBeforeGetAudioLink",window);b="undefined"!==typeof b?b:rspkr.HL;this.audioLink=null;var c={},d;for(d in this.params)this.params.hasOwnProperty(d)&&(c[d]=this.params[d]);for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);d=m.speed(rspkr.Common.Settings.get("hlspeed"),
c.speed?c.speed:void 0);100!=d&&(c.speed=d);(d=rspkr.cfg.item("general.selectionEngine"))&&"newcontent"===d&&c.hasOwnProperty("readid")&&1>this.selectedText.length&&(!document.selection||document.selection&&8<rspkr.Common.data.browser.version&&8<document.documentMode)&&this.createReadRange(c.readid);if(c.readid&&/rslightbox_content/gi.test(c.readid)){!1==rs.cfg.item("general.usePost")?(rs.cfg.item("general.usePost",!0),rspkr.c.addEvent("onSettingsClosed",function(){rs.cfg.item("general.usePost",!1);
rs.PlayerAPI.stop()})):rspkr.c.addEvent("onSettingsClosed",function(){rs.PlayerAPI.stop()});var e=function(a){for(var b=function(a,b){return document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null)[b]:a.currentStyle?a.currentStyle[b]:a.style[b]},c=0;c<a.childNodes.length;c++){var d=a.childNodes[c],f=d.className&&-1!==d.className.indexOf("rs_skip_always");1===d.nodeType&&("none"==b(d,"display")||"hidden"==b(d,"visibility"))&&!f?$rs.addClass(d,"rs_skip_always"):
d.title?$rs.addClass(d,"rs_skip_always"):1===d.nodeType&&e(d)}};e($rs.get("rslightbox_content"))}0<this.selectedText.length||0<this.selectedHTML.length?(0<this.selectedText.length&&b.clientMarkup.preProcess.init(),c.sync="user",c.syncalignuser=rspkr.st.get("hl"),this.setPostContent("textsel"),this.audioLink=h.issuePost(c)):!0===rspkr.cfg.item("general.premarkup")?(c.sync="user",this.setPostContent("nosel"),this.audioLink=!0===rspkr.pub.Config.item("general.usePost")?h.issuePost(c):n(c)):!0===rspkr.pub.Config.item("general.usePost")?
(c.sync="wordsent",this.setPostContent("nosel"),this.audioLink=h.issuePost(c)):(c.sync="wordsent",this.audioLink=n(c));rspkr.log("[rspkr.c.data.getAudioLink] Audio link: "+this.audioLink);return this.audioLink},setSettingsChanged:function(a){"hlspeed"===a&&(rspkr.c.data.settingsChanged=!0)},settingsChanged:!1,getSaveData:function(a,b){rspkr.log("[rspkr.c.data.getSaveData]");var a=a||"link",b=b||!1,c=this.saveLink;if(!this.saveLink||this.settingsChanged||b){b&&rspkr.c.data.setParams(b);rspkr.c.data.params.customerid||
(c=$rs.get("."+rspkr.cfg.item("ui.rsbtnClass")),(c=$rs.isArray(c)&&0<c.length?c[0]:c)&&rspkr.c.data.setParams($rs.getAttr($rs.findIn(c,".rsbtn_play"),"href")));var c={},d={audioformat:"mp3"};this.settingsChanged=!1;"iOS"!==this.browser.OS&&"dialog"===a&&(d.save="1");for(var e in this.params)this.params.hasOwnProperty(e)&&(c[e]=this.params[e]);for(e in d)d.hasOwnProperty(e)&&(c[e]=d[e]);c.speed=m.speed(rspkr.st.get("hlspeed"),c.speed);0<this.selectedHTML.length?(this.setPostContent("textsel"),c=h.issuePost(c)):
!0===rspkr.cfg.item("general.usePost")?(this.setPostContent("nosel"),c=h.issuePost(c)):c=n(c);b||(this.saveLink=c)}return c}},n=function(a){var b="";"undefined"!=typeof rspkr.cfg.item("general.servercall")?b=rspkr.cfg.item("general.servercall")+"?":(b=$rs.get("."+rspkr.cfg.item("ui.rsbtnClass")),b=$rs.isArray(b)?b[0]:b,b=$rs.getAttr($rs.findIn(b,".rsbtn_play"),"href").split("?")[0]+"?");for(var c in a)a.hasOwnProperty(c)&&a[c]&&(b+=c+"="+a[c]+"&");b=b.substr(0,b.length-1);return rs.cfg.item("general.customProxy")?
rs.cfg.item("general.customProxy")+encodeURIComponent(b):b},q=function(){var a=rspkr.cfg.item("extraMods")||[],b=[i.major,i.minor,i.update,i.revision].join("."),c=0,d="Explorer"==rs.c.data.browser.name&&8>=rs.c.data.browser.version;rspkr.log("[rspkr.c.loadExtraMods] Number of mod files to load: "+a.length);for(var e=0;e<a.length;e++){var g=a[e][0],f=g.substring(g.lastIndexOf(".")),j=void 0;".js"===f?(j=document.createElement("script"),j.type="text/javascript",j.src=rs.params.path+"mods/"+g+"?v="+
b,j.async=!0):".css"===f&&(g=rs.params.path+"mods/"+g+"?v="+b,d?j=document.createStyleSheet(g):(j=document.createElement("link"),j.type="text/css",j.rel="stylesheet",$rs.setAttr(j,"href",g)));if(!d&&void 0!==j.onreadystatechange){var g=j,h=a[e][1];if("complete"==j.readyState||"loaded"==j.readyState)h&&"function"==typeof h&&h.apply(window),c++,c==a.length&&rs.devt("onAfterExtraModsLoaded",window);g.onreadystatechange=void 0}else g=j,(h=a[e][1])&&"function"==typeof h&&h.apply(window),c++,c==a.length&&
rs.devt("onAfterExtraModsLoaded",window),g.onload=void 0;d&&".css"===f||document.getElementsByTagName("head")[0].appendChild(j)}},k=function(a,b,c){if(l[a]){c=c||[];rspkr.displog[a]=rspkr.displog[a]?++rspkr.displog[a]:1;if(!l[a].length)return rspkr.log("[rspkr.c] Dispatched event: "+a+" - no handlers to call.",2),!0;rspkr.log("[rspkr.c] Dispatching event: "+a,1);for(var d in l[a])if(l[a].hasOwnProperty(d)&&"function"==typeof l[a][d])try{"__self__"===b&&(b=l[a][d]),l[a][d].apply(b,c)}catch(e){rspkr.log("[rspkr.c._dispatchEvent] Error: "+
e.message,3),this.isok=!1}else if("object"==typeof l[a][d])try{var g=l[a][d];g.func.apply(g.context||window,g.params||c)}catch(h){this.isok=!1}}else rspkr.log("[rspkr.c] Undefined event: "+a,3)},h={issuePost:function(a){rspkr.log("[rspkr.c] Using POST");document.getElementById("ReadSpeakerPostIframe")||this.createIframe();var b=Math.random(),c=this.createForm(a),d;"undefined"!==typeof rspkr.cfg.item("general.servercall")?a=rspkr.cfg.item("general.servercall")+"?":(a=$rs.get("."+rspkr.cfg.item("ui.rsbtnClass")),
a=$rs.isArray(a)?a[0]:a,a=$rs.getAttr($rs.findIn(a,".rsbtn_play"),"href").split("?")[0]+"?");d=("string"===typeof a&&a.length?a.split("/").pop():rspkr.pub.Config.item("general.rsent")).replace("?","");var a=a&&a.match(/[^\/]*\/\/[^\/]*/),e=rspkr.cfg.item("general.iframeproxy")?rspkr.cfg.item("general.iframeproxy"):"/enterprise/iframeproxy.php",a=a?a.pop()+e+"?rsent="+d+"&version="+rspkr.pub.Config.item("general.proxyVersion"):rspkr.pub.Config.item("general.protocol")+"//"+rspkr.pub.Config.item("general.subdomain")+
"."+rspkr.pub.Config.item("general.domain")+e+"?rsent="+rspkr.pub.Config.item("general.rsent")+"&version="+rspkr.pub.Config.item("general.proxyVersion"),a=a+("&randid="+b);rspkr.c.data.params.customerid&&(a+="&customerid="+rspkr.c.data.params.customerid);a=rs.cfg.item("general.customProxy")?rs.cfg.item("general.customProxy")+encodeURIComponent(a):a;c.action=a;d=document.createElement("textarea");1<f.getSelectedText().length?d.setAttribute("name","selectedhtml_base64"):d.setAttribute("name","html_base64");
d.innerHTML=f.getPostContent();c.appendChild(d);setTimeout(function(){document.body.appendChild(c);c.submit();document.body.removeChild(c)},0);return a+"&listen=1&randid="+b},createForm:function(a){var b,c=document.createElement("form");c.target="ReadSpeakerPostIframe"+rspkr.cfg.item("general.random");c.method="post";for(var d in a)b=document.createElement("input"),b.setAttribute("name",d),"url"===d?b.setAttribute("value",decodeURIComponent(a[d])):b.setAttribute("value",a[d]),c.appendChild(b);b=document.createElement("input");
b.setAttribute("name","output");b.setAttribute("value","audiolink");c.appendChild(b);return c},createIframe:function(){if(!rspkr.cfg.item("general.random")){for(var a="",b=0;20>b;b++)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));rspkr.cfg.item("general.random",a)}a=null;if(document.selection)try{a=document.createElement('<iframe name="ReadSpeakerPostIframe'+rspkr.cfg.item("general.random")+'">')}catch(c){a=document.createElement("iframe")}else a=
document.createElement("iframe");a.setAttribute("name","ReadSpeakerPostIframe"+rspkr.cfg.item("general.random"));a.setAttribute("id","ReadSpeakerPostIframe");a.setAttribute("style","display: none; position: absolute;");a.style.display="none";var b=document.getElementsByTagName("body"),d=null;0<b.length&&(d=b.item(0));d&&d.appendChild(a)},removeIframe:function(){document.getElementById("ReadSpeakerPostIframe")}},r={encode:function(a){newdata=encodeURIComponent(a);for(var b=0,c=0,a=[];b<newdata.length;b++)37!=
newdata.charCodeAt(b)?a[c]=newdata.charCodeAt(b):(a[c]=parseInt("0x"+newdata.charAt(b+1)+""+newdata.charAt(b+2)),b+=2),c++;b=a.length;parseInt((b+2)/3);for(var c=new String,d=parseInt(b/3),e,g=b-3*d,b=0;b<3*d;b+=3)e=this.chars(a[b]>>2),c+=e,e=this.chars((a[b]&3)<<4|a[b+1]>>4),c+=e,e=this.chars((a[b+1]&15)<<2|a[b+2]>>6),c+=e,e=this.chars(a[b+2]&63),c+=e;1==g&&(c+=this.chars(a[b]>>2),c+=this.chars((a[b]&3)<<4),c+="==");2==g&&(c+=this.chars(a[b]>>2),c+=this.chars((a[b]&3)<<4|a[b+1]>>4),c+=this.chars((a[b+
1]&15)<<2),c+="=");return c},decode:function(a){for(var b="",c="",d=0,e=0,g="",h=a.length;d<h;)if(-1!=this.value(a[d])){for(var g=a.substring(d,d+4),j=e=0;4>j;j++)"="==g[j]&&e++;for(j=0;j<3-e;j++){0==j?c=this.value(g[0])<<2|(this.value(g[1])&48)>>4:1==j?c=(this.value(g[1])&15)<<4|(this.value(g[2])&60)>>2:2==j&&(c=(this.value(g[2])&3)<<6|this.value(g[3]));var f=c.toString(16);1==f.length&&(f="0"+f);b+="%"+f}d+=4}else d++;return decodeURIComponent(b)},value:function(a){a=a.charCodeAt(0);return 65<=
a&&90>=a?a-65:97<=a&&122>=a?a-97+26:48<=a&&57>=a?a-48+52:43==a?62:47==a?63:-1},chars:function(a){return 26>a?String.fromCharCode(a+65):52>a?String.fromCharCode(a+97-26):62>a?String.fromCharCode(a+48-52):62==a?"+":63==a?"/":String.fromCharCode(0)}};return{meta:i,init:function(){k("onInit",window);l.onInit=[];l.onUIShowPlayer.push(rspkr.Common.data.setDefaultValues);l.onSettingsChanged.push(rspkr.Common.data.setSettingsChanged);l.onAfterModsLoaded.push(q)},addEvent:function(a,b){l[a].push(b)},base64:r,
buildReadSpeakerCall:function(a){return n(a)},data:f,Detect:{init:function(){rspkr.log("[rspkr.c.Detect] Initialized!");var a=navigator.userAgent;f.browser.name=this.searchString(this.dataBrowser)||"Unknown";f.browser.version=this.searchVersion(a)||this.searchVersion(navigator.appVersion)||"Unknown";f.browser.OS=this.searchString(this.dataOS)||"Unknown";f.browser.flashVersion=this.getFlashVersion();rspkr.log("[rspkr.c.Detect.init] Flash version: "+f.browser.flashVersion,1);f.browser.syncContainer=
"default"!==rspkr.pub.Config.item("general.syncContainer")?rspkr.pub.Config.item("general.syncContainer"):"rs:span";a=f.browser.name;this.browserSettings.hasOwnProperty(f.browser.name)||(this.browserSettings[a]={});"default"===rspkr.pub.Config.item("general.syncContainer")&&this.browserSettings[a].hasOwnProperty("syncContainer")&&(f.browser.syncContainer=this.browserSettings[a].syncContainer);this.browserSettings[a].hasOwnProperty("html5Support")?f.browser.html5Support=this.browserSettings[a].html5Support:
document.createElement("audio").canPlayType&&(f.browser.html5Support=!0);if(!0===f.browser.html5Support){var b=document.createElement("audio"),c=!1,d=!1;b.canPlayType&&(c=!!b.canPlayType&&""!=b.canPlayType("audio/mpeg"),d=!!b.canPlayType&&""!=b.canPlayType('audio/ogg; codecs="vorbis"'));rspkr.log("Browser can play mp3? "+b.canPlayType("audio/mpeg"),1);rspkr.log("Browser can play ogg? "+b.canPlayType('audio/ogg; codecs="vorbis"'),1);/android/i.test(rspkr.Common.data.browser.OS)&&/chrome/i.test(rspkr.Common.data.browser.name)?
f.browser.html5AudioFormat="ogg":!0===c?f.browser.html5AudioFormat="mp3":!0===d?f.browser.html5AudioFormat="ogg":f.browser.html5Support=!1;f.browser.html5Priority=this.browserSettings[a].hasOwnProperty("html5Priority")?this.browserSettings[a].priority:!0;this.browserSettings[a].hasOwnProperty("audioFormat")&&(f.browser.html5AudioFormat=this.browserSettings[a].audioFormat)}this.browserSettings[a].hasOwnProperty("minver")&&parseFloat(f.browser.version)<=parseFloat(this.browserSettings[a].minver)&&(f.browser.html5Priority=
!1)},browserSettings:{Android:{minver:4},Explorer:{syncContainer:"font"},Firefox:{minver:6},Opera:{html5Support:!1,priority:!1},Edge:{audioFormat:"mp3"}},getFlashVersion:function(){try{if(document.selection){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{a.AllowScriptAccess="always"}catch(b){return"6,0,0"}}catch(c){}return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return(navigator.plugins["Shockwave Flash 2.0"]||
navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(d){}}catch(e){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(g){}}return"0,0,0"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=
c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Chromium",identity:"Chromium"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",
identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,
subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"ARM",identity:"Windows Phone"},{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},
{string:navigator.userAgent,subString:"iPhone",identity:"iOS"},{string:navigator.userAgent,subString:"iPad",identity:"iOS"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]},dispatchEvent:function(a,b,c){k(a,b,c)},post:h,cookie:{create:function(a,b,c,d,e){c=c||rspkr.pub.Config.item("general.cookieLifetime");d=d||rspkr.pub.Config.item("general.cookiePath");e=e||rspkr.pub.Config.item("general.cookieDomain");if(c){var g=
new Date;g.setTime(g.getTime()+c);c="; expires="+g.toGMTString()}else c="";return document.cookie=a+"="+b+c+(d?"; path="+d:"")+(e?"; domain="+e:"")},read:function(a){for(var a=a+"=",b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}},readKey:function(a,b){var c=this.read(a),d;if(c)for(var c=c.split("&"),e=0,g=c.length;e<g;e++)if(d=c[e].split("="),d[0]==b)return d[1]},readKeyAll:function(a){var a=
this.read(a),b={},c;if(a){for(var a=a.split("&"),d=0,e=a.length;d<e;d++)c=a[d].split("="),b[c[0]]=c[1];return b}},createSub:function(a,b,c,d,e){if("object"!==typeof b)this.create(a,b.toString(),c,d,e);else{var g=[],f;for(f in b)g.push(f+"="+b[f]);return this.create(a,g.join("&"),c,d,e)}},updateKey:function(a,b,c,d,e,g){for(var c=c.toString(),f=decodeURIComponent(this.read(a)),h,q={},k=!1,f=!f||"null"==f||"undefined"==f?[]:-1<f.indexOf("=")&&-1==f.indexOf("&")?[f]:f.split("&"),i=0,l=f.length;i<l;i++)h=
f[i].split("="),h[0]==b&&(h[1]=c,k=!0),h.length&&h[1].length&&(q[h[0]]=h[1]);!k&&c.length&&(q[b]=c);return this.createSub(a,q,d,e,g)},erase:function(a,b,c){this.create(a,"",-1,b,c)}},css:{getStylesheet:function(a){var b;if(!(b=document.styleSheets[a]||document.getElementById(a)))b=document.createElement("style"),b.type="text/css",b.id=b.name=a,(document.getElementsByTagName("head")[0]||document.body).appendChild(b),!b.addRule&&!b.sheet&&(b=document.styleSheets[a]);return b.sheet||b},rsSheet:function(a){try{this.rules=
a.rules||a.cssRules}catch(b){this.rules=a.cssRules}this.del=function(a,b){a.deleteRule?a.deleteRule(b):a.removeRule&&a.removeRule(b)};this.ins=function(a,b,e){$rs.isArray(e)||(e=[e]);if(a.insertRule&&a.cssRules)a.insertRule(b+" {"+e.join(";")+";}",a.cssRules.length);else if(a.addRule)for(var g=0,f=e.length;g<f;g++)a.addRule(b,e[g])}},setRule:function(a,b,c){var a=this.getStylesheet(a),d=new this.rsSheet(a);d.ins(a,b,"string"==typeof c?c.split(";"):c);return d.length},removeRule:function(a,b){var c=
this.getStylesheet(a),d=new this.rsSheet(c),e=[];if(d.rules){for(var g=0,f=d.rules.length;g<f;g++)d.rules[g].selectorText==b&&e.push(g);for(;e.length;)d.del(c,e.pop());return e}return d},replaceRule:function(a,b,c){this.removeRule(a,b);this.setRule(a,b,c)}},converter:m,findFirstRSButton:function(){for(var a=$rs.get("a, .rsbtn_play"),a=$rs.isArray(a)?a:[a],b=0,c=a.length;b<c;b++)if($rs.hasClass(a[b],"rsbtn_play")||$rs.getAttr(a[b],"href")&&-1!==$rs.getAttr(a[b],"href").indexOf(rspkr.pub.Config.item("general.domain")+
"/cgi-bin/"+rspkr.pub.Config.item("general.rsent"))||$rs.getAttr(a[b],"href")&&/customerid=/i.test($rs.getAttr(a[b],"href"))&&/lang=/i.test($rs.getAttr(a[b],"href"))&&/(readid|readclass)/i.test($rs.getAttr(a[b],"href")))return a[b];return!1},decodeEntities:function(a){var b=document.createElement("p");b.innerHTML=a;return b.textContent||b.innerText},e:l,createShortcuts:function(){var a=window.ReadSpeaker;a.Common&&(a.c=a.Common);a.c&&(a.evt=a.c.addEvent,a.devt=a.c.dispatchEvent);a.c&&a.c.Settings&&
(a.c.s=a.c.Settings);a.c.s&&(a.st=a.c.s);a.lib&&(a.l=a.lib);a.l&&a.lib.Facade&&(a.l.f=a.lib.Facade);a.l&&(a.l.f&&a.l.f.adapter)&&(a.l.f.a=a.l.f.adapter);a.modmap&&(a.m=a.modmap);a.pub&&a.pub.Config&&(a.pub.c=a.pub.Config);a.pub.c&&(a.cfg=a.pub.c);a.PlayerAPI&&(a.pl=a.PlayerAPI);a.HL&&(a.hl=a.HL);a.ui&&(a.u=a.ui)}}}();rspkr.lib||(rspkr.lib={});
rspkr.lib.Facade=function(i){var l=function(f,k,h){for(var f=String(f),h=String(h),k="="==k?"==":k,f=f.split("."),h=h.split("."),i=Math.max(f.length,h.length),a,b,c=0,d=0;d<i&&!c;d++)a=parseInt(f[d],10)||0,b=parseInt(h[d],10)||0,a<b&&(c=1),a>b&&(c=-1);switch(k){case "==":return 0==c;case "===":return 0===c;case "!=":return 0!=c;case "!==":return 0!==c;case "<":return 0<c;case "<=":return 0<=c;case ">":return 0>c;case ">=":return 0>=c;default:return!1}},m=[{name:"jquery",minver:"1.4.1",check:function(){if("function"==
typeof jQuery){if("explorer"===rspkr.Common.data.browser.name.toLowerCase()&&9>rspkr.Common.data.browser.version&&l(jQuery.fn.jquery,"<",2))return!1;if(l(jQuery.fn.jquery,">=",this.minver))return!0}return!1}}],f="",n={store:[],push:function(f,k,h){this.store[f]||(this.store[f]=[]);this.store[f][k]||(this.store[f][k]=[]);this.store[f][k].push(h);return this.store.length},pop:function(f,k,h){var i;if(this.store[f]&&this.store[f][k]){i=this.store[f][k];if(!h)return this.store[f][k].splice(0,this.store[f][k].length),
0;for(var a=i.length-1;-1<a;a--)i[a].toString()==h.toString()&&this.store[f][k].splice(a,1);return this.store[f][k].length}return 0},dispatch:function(f,i){var h=$rs.convertEvent(f,i);if(rsid=$rs.getAttr(h.target,"data-rsevent-id")){for(var l=!0,a=n.store[rsid][h.type],b=0,c=a.length;b<c;b++)"function"==typeof a[b]&&(a[b].apply(h.target,[h])||(l=!1));return l}}};return{init:function(){if(rspkr&&rspkr.params&&rspkr.params.forceRSLib&&"1"===rspkr.params.forceRSLib)f="RSLib";else{for(idx in m)if(m[idx]&&
m[idx].check&&m[idx].check()){f=m[idx].name;break}f.length||(f="RSLib")}},currentLib:function(){return f},setLib:function(i){f=i},eq:n,adapterInit:function(f){i.$rs=f;i.$rs.flatten=function(f,h){for(var h=h||[],i=0,a;a=f[i];i++)$rs.isArray(a)?$rs.flatten(a,h):h.push(a);return h}}}}(window);ReadSpeaker.lib.Facade.RSEvent=function(){};
ReadSpeaker.modmap={products:{all:[],custom:function(){var i=[];i.push(["Custom","text/javascript"]);return i},dr:function(){var i=[];i.push(["DocReader.AutoAdd","text/javascript"]);return i},expl:function(){var i=this.all;i.push(["PlayerAPI","text/javascript"],["XP","text/javascript"],["ui","text/javascript",["ui","ui.Lightbox","ui.Slider"]]);return i},embhl:function(){var i=this.all;i.push(["Base","text/javascript","PlayerAPI HL ui ui.Lightbox ui.Slider Common.Settings".split(" ")]);return i}}};
