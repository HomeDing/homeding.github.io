"use strict";var MicroState,__extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__decorate=this&&this.__decorate||function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;0<=a;a--)(s=t[a])&&(r=(o<3?s(r):3<o?s(e,i,r):s(e,i))||r);return 3<o&&r&&Object.defineProperty(e,i,r),r},__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};!function(t){t[t.PREP=1]="PREP",t[t.INIT=2]="INIT",t[t.LOADED=3]="LOADED"}(MicroState=MicroState||{});var MicroRegistry=function(){function t(){this._tco=null,this._registry={},this._state=MicroState.PREP,this._unloadedList=[],this.List=[],window.addEventListener("load",this.init.bind(this)),window.addEventListener("unload",this.onunload.bind(this))}return t.prototype.loadFile=function(t){var e=this;return fetch(t).then(function(t){return t.text()}).then(function(t){t=document.createRange().createContextualFragment(t);e._tco&&e._tco.appendChild(t)})},t.prototype.attach=function(t){var e;this._state===MicroState.LOADED?!(e=t.getAttribute("u-is"))||(e=this._registry[e])&&this.loadBehavior(t,e):this._unloadedList.push(t)},t.prototype._setPlaceholders=function(t,i){var e=this;function n(e){return Object.getOwnPropertyNames(i).forEach(function(t){return e=e.replace(new RegExp("\\$\\{"+t+"\\}","g"),i[t])}),e}if(i)if(t.nodeType===Node.TEXT_NODE)t.textContent&&(t.textContent=n(t.textContent));else if(t.nodeType===Node.ELEMENT_NODE){for(var s=t.attributes,o=0;o<s.length;o++){var r=s[o].value;0<=r.indexOf("${")&&(t[s[o].name]=s[o].value=n(r))}t.childNodes.forEach(function(t){e._setPlaceholders(t,i)})}},t.prototype.isVisible=function(t){var e=!1;return 0<t.offsetWidth&&0<t.offsetHeight&&(e=(t=t.getBoundingClientRect()).top<=window.innerHeight&&0<=t.bottom),e},t.prototype.loadDataImage=function(t){t.dataset.src&&this.isVisible(t)&&(t.src=t.dataset.src)},t.prototype.insertTemplate=function(t,e,i){var n=this,s=null;return t&&e&&this._tco&&((e=this._tco.querySelector('[u-control="'+e.toLowerCase()+'"]'))&&(s=e.cloneNode(!0)),s&&(s.params=i,this._setPlaceholders(s,i),t.appendChild(s),t.querySelectorAll("[data-src]:not([src])").forEach(function(t){return n.loadDataImage(t)}))),s},t.prototype.loadBehavior=function(t,e){var i=e,n=t;if(t)if(e){if(n._attachedBehavior!==e){if(t.attributes)for(var s=0;s<t.attributes.length;s++){var o=t.attributes[s];t[o.name]||(t[o.name]=o.value)}for(var r in i)"on_touchstart"===r?t.addEventListener(r.substr(3),i[r].bind(t),{passive:!0}):"on_"===r.substr(0,3)?t.addEventListener(r.substr(3),i[r].bind(t),!1):"on"===r.substr(0,2)?t.addEventListener(r.substr(2),i[r].bind(t),!1):(null==i[r]||i[r].constructor!==Function)&&t[r]||(t[r]=i[r]);n._attachedBehavior=e,t.parentElement!==this._tco&&(n.connectedCallback(),this.List.push(t))}}else;else;},t.prototype.define=function(t,e){this._registry[t]=e},t.prototype.onunload=function(t){this.List.forEach(function(t){t&&t.term&&t.term();for(var e=0;e<t.attributes.length;e++)t[t.attributes[e].name]=null});for(var e=0;e<this.List.length;e++)delete this.List[e];this.List=[]},t.prototype.init=function(){this._state=MicroState.INIT,this._tco=document.getElementById("u-templates"),this._tco||(this._tco=createHTMLElement(document.body,"div",{id:"u-templates"})),"complete"===document.readyState?this.init2():document.addEventListener("readystatechange",this.init2)},t.prototype.init2=function(){var i=this;"complete"===document.readyState&&(this._state=MicroState.LOADED,this._unloadedList.forEach(function(t){var e=t.getAttribute("u-is");e&&((e=i._registry[e])&&i.loadBehavior(t,e),i.List.push(t))}),this._unloadedList=[])},t}(),micro=new MicroRegistry,obs=new MutationObserver(function(t,e){for(var i=0,n=t;i<n.length;i++)n[i].addedNodes.forEach(function(t){t.getAttribute&&t.getAttribute("u-is")&&micro.attach(t)})});obs.observe(document,{childList:!0,subtree:!0}),document.addEventListener("DOMContentLoaded",function(){function t(){document.querySelectorAll("[data-src]:not([src])").forEach(function(t){return micro.loadDataImage(t)})}window.addEventListener("scroll",t),window.setTimeout(t,40)});var MicroControlClass=function(){function t(){}return t.prototype.connectedCallback=function(){},t}();function MicroControl(e){return function(t){return micro.define(e,new t),t}}var GenericWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.microid="",t.data={},t.subId=0,t.actions=[],t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this.data={id:this.microid},this.subId=hub.subscribe(this.microid+"?*",this.newData.bind(this)),hub.replay(this.subId)},t.prototype.newData=function(t,e,i){var n;e&&i&&(this.data[e]=i,(n=this.querySelector("img,h3"))&&setAttr(n,"title",JSON.stringify(this.data,null,1).replace("{\n","").replace("\n}",""))),["span","div"].forEach(function(t){this.querySelectorAll(t+"[u-active='"+e+"']").forEach(function(t){var e=toBool(i);setAttr(t,"value",e?"1":"0"),setAttr(t,"title",e?"active":"not active"),t.classList.toggle("active",e)})},this),["h2","h3","h4","span","button"].forEach(function(t){this.querySelectorAll(t+"[u-text='"+e+"']").forEach(function(t){t.textContent!==i&&(t.textContent=i)})},this),["input","select"].forEach(function(t){this.querySelectorAll(t+"[u-value='"+e+"']").forEach(function(t){t.value!==i&&(t.value=i||"")})},this),["button"].forEach(function(t){this.querySelectorAll(t+"[u-action='${"+e+"}']").forEach(function(t){setAttr(t,"u-action",i||"")})},this)},t.prototype.dispatchNext=function(){var t,e=this;!this.actions||(t=this.actions.shift())&&fetch(t).then(function(){0<e.actions.length?debounce(e.dispatchNext.bind(e))():updateAsap&&updateAsap()})},t.prototype.dispatchAction=function(t,e){var i=this;null!==t&&null!==e&&(t.includes("/")?(t.replace("${v}",encodeURI(e)),t.split(",").forEach(function(t){return i.actions.push("/$board/"+t)})):this.actions.push("/$board"+this.microid+"?"+t+"="+encodeURI(e)),debounce(this.dispatchNext.bind(this))())},t.prototype.showSys=function(){return toBool(getHashParams({sys:!1}).sys)},t.prototype.on_change=function(t){t=t.target;this.dispatchAction(t.getAttribute("u-value"),t.value)},t.prototype.on_click=function(t){var e=t.target,t=e.getAttribute("u-action");e&&t&&this.dispatchAction(t,e.value),e.classList.contains("setconfig")?modal.open("configelementdlg",this.data):e.classList.contains("setactive")?this.dispatchAction(toBool(this.data.active)?"stop":"start","1"):"H3"===e.tagName&&modal.openFocus(this)},__decorate([MicroControl("generic")],t)}(MicroControlClass),BL0937WidgetClass=function(i){function t(){var t=null!==i&&i.apply(this,arguments)||this;return t.mode="",t}return __extends(t,i),t.prototype.connectedCallback=function(){i.prototype.connectedCallback.call(this),this.data={id:this.microid},this.subId=hub.subscribe(this.microid+"?mode",this.switchMode.bind(this)),hub.replay(this.subId)},t.prototype.setMode=function(t){var e;t&&t!==this.mode&&(e=void 0,null!=(e=this.querySelector('[u-text="'+this.mode+'"]'))&&e.parentElement&&(e.parentElement.style.display="none"),null!=(e=this.querySelector('span[u-text="'+t+'"]'))&&e.parentElement&&(e.parentElement.style.display=""),this.mode=t)},t.prototype.switchMode=function(t,e,i){this.setMode(i)},t.prototype.on_click=function(t){var e=t.target;"mode"===e.getAttribute("u-action")&&this.setMode(e.value),i.prototype.on_click.call(this,t)},__decorate([MicroControl("bl0937")],t)}(GenericWidgetClass),ButtonWidgetClass=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t._onclick="",t._ondoubleclick="",t._onpress="",t._timer=0,t._start=0,t._duration=0,t}return __extends(t,n),t.prototype.newData=function(t,e,i){n.prototype.newData.call(this,t,e,i),"onclick"===e?this._onclick=i:"ondoubleclick"===e?this._ondoubleclick=i:"onpress"===e&&(this._onpress=i)},t.prototype.on_click=function(){var t;800<this._duration?this._onpress&&this.dispatchAction(this._onpress,"1"):((t=this)._timer&&window.clearTimeout(this._timer),this._timer=window.setTimeout(function(){t.dispatchAction(t._onclick,"1")},250))},t.prototype.on_dblclick=function(){this._timer&&window.clearTimeout(this._timer),this.dispatchAction(this._ondoubleclick,"1")},t.prototype.on_pointerdown=function(){this._start=(new Date).valueOf()},t.prototype.on_pointerup=function(){this._duration=(new Date).valueOf()-this._start},__decorate([MicroControl("button")],t)}(GenericWidgetClass),DSTimeWidgetClass=function(i){function t(){return null!==i&&i.apply(this,arguments)||this}return __extends(t,i),t.prototype.isoDate=function(){function t(t){return(t<10?"0":"")+t}var e=new Date;return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())},t.prototype.connectedCallback=function(){i.prototype.connectedCallback.call(this),this._nowObj=this.querySelector(".setnow"),window.setInterval(function(){this._nowObj&&setTextContent(this._nowObj,this.isoDate())}.bind(this),200)},t.prototype.on_click=function(t){var e=t.target;e&&e.classList.contains("setnow")?this.dispatchAction("time",this.isoDate()):i.prototype.on_click.call(this,t)},__decorate([MicroControl("dstime")],t)}(GenericWidgetClass),DisplayDotWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lastValue=null,t._dispElem=null,t._elem=null,t._x=0,t._y=0,t._value=!1,t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this._dispElem=document.querySelector("#panel .display"),hub.subscribe(this.microid+"?*",this.newValue.bind(this),!0),this._dispElem&&(this._elem=createHTMLElement(this._dispElem,"span",{class:"dot"}),this.updateElem()),this.showSys()||(this.style.display="none")},t.prototype.newValue=function(t,e,i){e&&i&&("value"===e?this._value=toBool(i):"x"===e?this._x=Number(i):"y"===e&&(this._y=Number(i)),this.updateElem())},t.prototype.updateElem=function(){this._elem&&(this._elem.style.top=this._y+"px",this._elem.style.left=this._x+"px",this._elem.classList.toggle("active",this._value))},__decorate([MicroControl("displaydot")],t)}(GenericWidgetClass),DisplayLineWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._dispElem=null,t._elem=null,t._x0=0,t._x1=0,t._y0=0,t._y1=0,t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this._dispElem=document.querySelector("#panel .display"),hub.subscribe(this.microid+"?*",this.newValue.bind(this),!0),this._dispElem&&(this._elem=createHTMLElement(this._dispElem,"span",{class:"line"}),this.updateElem()),this.showSys()||(this.style.display="none")},t.prototype.newValue=function(t,e,i){e&&i&&(null!=this["_"+e]&&(this["_"+e]=i),this.updateElem())},t.prototype.updateElem=function(){this._elem&&(this._elem.style.top=this._y0+"px",this._elem.style.left=this._x0+"px",this._elem.style.width=this._x1-this._x0+"px",this._elem.style.height=this._y1-this._y0+"px")},__decorate([MicroControl("displayline")],t)}(GenericWidgetClass),DisplayTextWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lastValue=null,t._dispElem=null,t._grid=1,t._elem=null,t._prefix="",t._postfix="",t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this._dispElem=document.querySelector("#panel .display"),this._dispElem&&(this._dispElem.getAttribute("grid")&&(this._grid=Number(this._dispElem.getAttribute("grid"))),this._elem=createHTMLElement(this._dispElem,"span",{class:"text",style:"top:0;left:0"})),hub.subscribe(this.microid+"?*",this.newValue.bind(this),!0),this.showSys()||(this.style.display="none")},t.prototype.newValue=function(t,e,i){var n;e&&i&&this._elem&&("value"===e?(n=""+this._prefix+i+this._postfix,this._elem.innerHTML=n.replace(/ /g,"&nbsp;")):"x"===e?(n=Number(i)*this._grid,this._elem.style.left=(1<this._grid?7*n/10:n)+"px"):"y"===e?this._elem.style.top=Number(i)*this._grid+"px":"fontsize"===e?(this._elem.style.fontSize=i+"px",this._elem.style.lineHeight=i+"px",this._elem.style.height=i+"px"):"prefix"===e?this._prefix=i:"postfix"===e&&(this._postfix=i))},__decorate([MicroControl("displaytext")],t)}(GenericWidgetClass);function jsonParse(t,r){!function e(t,i,n){var s=(s=i?t+"/"+i:t).replace("/[","[");if(Array.isArray(n))for(var o=0;o<n.length;o++)e(s,"["+o+"]",n[o]);else"object"==typeof n?(r(s,null,null),Object.getOwnPropertyNames(n).forEach(function(t){return e(s,t,n[t])})):r(t,i,String(n))}("","",t)}function jsonFind(t,e){"/"===e[0]&&(e=e.substr(1));for(var i=e.split("/");t&&0<i.length;){var n=i[0];t[n]||(t[n]={}),t=t[n],i.shift()}return t}var LogWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filename=null,t.lineSVGObj=null,t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),this.lineSVGObj=this.querySelector("object"),hub.subscribe(this.microid+"?*",this.newValue.bind(this),!0)},t.prototype.loadData=function(){var t=this.filename,i="",e=fetch(t,{cache:"no-store"}).then(function(t){return t.text()}).then(function(t){i=i+"\n"+t}),t=fetch(t.replace(".txt","_old.txt"),{cache:"no-store"}).then(function(t){return t.text()}).then(function(t){i=t+"\n"+i}).catch(function(){});Promise.allSettled([e,t]).then(function(){var e=/^\d{4,},\d+/,t=i.split("\n").filter(function(t){return t.match(e)});this.api.draw(this.lChart,t.map(function(t){t=t.split(",");return{x:t[0],y:t[1]}}))}.bind(this))},t.prototype.loadSVG=function(){var t=!1;if(this.lineSVGObj){var e=null;try{e=this.lineSVGObj.getSVGDocument()}catch(t){}e&&e.api&&(this.api=this.lineSVGObj.getSVGDocument().api,this.lChart=this.api.addChart("line",{linetype:"line"}),this.api.addVAxis(),this.api.addHAxis(),this.loadData(),t=!0)}t||window.setTimeout(this.loadSVG.bind(this),1e3)},t.prototype.newValue=function(t,e,i){"filename"===e&&(this.filename=i,this.loadSVG())},__decorate([MicroControl("log")],t)}(GenericWidgetClass),ModalDialogClass=function(){function t(){this._isOpen=!1,this._focusStyle=null,this._mObj=null,this._cObj=null;var t=this;window.addEventListener("load",function(){t._mObj=document.getElementById("modal"),t._cObj=document.getElementById("container")})}return t.prototype.isOpen=function(){return this._isOpen},t.prototype.open=function(t,e){this._mObj&&this._cObj&&(this._cObj.innerHTML="",this._cObj.style.width="",this._cObj.style.height="",micro.insertTemplate(this._cObj,t,e),this._mObj.classList.remove("hidden"),this._isOpen=!0)},t.prototype.openFocus=function(t){var e,i,n,s;!this._isOpen&&t&&t.parentElement&&this._mObj&&this._cObj&&(this._focusObj=t,this._focusStyle=t.getAttribute("style"),e=t.getBoundingClientRect(),(s=t.cloneNode(!1)).style.width=e.width+"px",s.style.height=e.height+"px",t.parentElement.insertBefore(s,t),this._placeholderObj=s,t.classList.add("modal-object"),t.style.top=e.top+"px",t.style.left=e.left+"px",t.style.width=e.width+"px",t.style.height=e.height+"px",this._cObj.innerHTML="",this._cObj.style.width="",this._cObj.style.height="",n=2,n=Math.min(2,(window.innerWidth-64)/e.width),n=Math.min(n,(window.innerWidth-64)/e.height),i=Math.floor(e.width*n)+"px",n=Math.floor(e.height*n)+"px",(s=document.createElement("div")).style.width=i,s.style.height=n,this._cObj.appendChild(s),s=s.getBoundingClientRect(),this._mObj.classList.remove("hidden"),t.style.margin="0",t.style.top=s.top+"px",t.style.left=s.left+"px",t.style.width=i,t.style.height=n,this._isOpen=!0)},t.prototype.close=function(){this._mObj&&this._cObj&&(this._mObj.classList.add("hidden"),this._focusObj&&this._placeholderObj&&this._placeholderObj.parentElement&&(this._focusObj.setAttribute("style",this._focusStyle||""),this._focusObj.classList.remove("modal-object"),this._placeholderObj.parentElement.removeChild(this._placeholderObj)),this._cObj.innerHTML="",this._isOpen=!1)},t}(),modal=new ModalDialogClass,NeoWidgetClass=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.colObj=null,t.hueObj=null,t.brightObj=null,t.whiteObj=null,t._value="00000000",t}return __extends(t,o),t.prototype.connectedCallback=function(){o.prototype.connectedCallback.call(this),this.colObj=this.querySelector(".color"),this.hueObj=this.querySelector(".hue"),this.brightObj=this.querySelector(".bright"),this.whiteObj=this.querySelector(".white")},t.prototype.newData=function(t,e,i){var n,s;i&&("value"===e?(6===(i=i.replace("x","")).length?this._value="00"+i:8===i.length&&(this._value=i),n=this._value.substr(2),this.hueObj&&(this.hueObj.value=String(this.rgbToHue(n))),this.whiteObj&&(this.whiteObj.value=String(parseInt(this._value.substr(0,2),16))),this.brightObj&&(s="linear-gradient(to right, black 0%, #"+n+" 100%)",this.brightObj.style.background=s),this.colObj&&(this.colObj.style.backgroundColor="#"+n)):"brightness"===e&&this.brightObj&&(this.brightObj.value=i)),o.prototype.newData.call(this,t,e,i)},t.prototype.on_input=function(t){var e=t.target,i="";e===this.hueObj?(t="hsl("+e.value+", 100%, 50%)",e.style.backgroundColor=t,t=getComputedStyle(e,null).backgroundColor,t=String(t).replace(/[^0-9,]/g,"").split(","),i="x"+this.x16(t[0])+this.x16(t[1])+this.x16(t[2]),this.whiteObj&&(i="x"+this._value.substr(0,2)+i.substr(1))):e===this.whiteObj?i="x"+this.x16(e.value)+this._value.substr(2):e===this.brightObj&&this.dispatchAction("brightness",e.value),0<i.length&&this.dispatchAction("value",i)},t.prototype.rgbToHue=function(t){var e,i,n,s,o=0;return t&&6<=t.length&&(s=t.substr(t.length-6),e=parseInt(s.substr(0,2),16)/255,i=parseInt(s.substr(2,2),16)/255,n=parseInt(s.substr(4,2),16)/255,0<(s=(t=Math.max(e,i,n))-Math.min(e,i,n))&&(t===e?o=(i-n)/s+(i<n?6:0):t===i?o=(n-e)/s+2:t===n&&(o=(e-i)/s+4))),Math.round(60*o)%360},t.prototype.x16=function(t){t=Number(t).toString(16);return 1===t.length&&(t="0"+t),t},__decorate([MicroControl("neo")],t)}(GenericWidgetClass),PWMOutWidgetClass=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._range=255,t.lastValue=null,t}return __extends(t,e),t.prototype.connectedCallback=function(){e.prototype.connectedCallback.call(this),hub.subscribe(this.microid+"?*",this.newValue.bind(this))},t.prototype.newValue=function(t,e,i){var n,s;"range"===e?this._range=Number(i):"value"===e&&this.lastValue!==i&&((s=(n=this.querySelector(".ux-levelbar")).offsetHeight)-1<(e=s*Number(i)/this._range)&&(e=s-1),e<1&&(e=1),n.style.borderBottomWidth=e+"px",this.lastValue=i)},__decorate([MicroControl("pwmout")],t)}(GenericWidgetClass),SliderWidgetClass=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t._slider=null,t._handle=null,t._lastValue=-1,t._maxright=100,t._x=0,t._xOffset=0,t.unit=1,t._type="int",t.minvalue=0,t.maxvalue=255,t}return __extends(t,n),t.prototype.connectedCallback=function(){var t,e;this._slider=this.querySelector(".u-slider"),this._handle=this.querySelector(".handle"),n.prototype.connectedCallback.call(this),this._handle&&(t=this._handle.parentElement,e=getComputedStyle(t),this._maxright=t.clientWidth-this._handle.offsetWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight))},t.prototype._adjustHandle=function(t){this._handle&&(t=t-this.minvalue,t=Math.round(t*this._maxright/(this.maxvalue-this.minvalue)),t=Math.min(this._maxright,Math.max(0,t)),this._handle.style.left=t+"px")},t.prototype.newData=function(t,e,i){n.prototype.newData.call(this,t,e,i),"value"===e?(t=Number(i))!==this._lastValue&&(this._adjustHandle(t),this._lastValue=t):"min"===e?this.minvalue=Number(i):"max"===e?this.maxvalue=Number(i):"step"===e?this.unit=Number(i):"type"===e&&(this._type=i,this._slider&&"string"===i&&(this._slider.style.display="none"))},t.prototype.on_click=function(t){for(var e=t.target;e&&e!==this;){if("LABEL"===e.tagName&&e.classList.contains("up")){this.dispatchAction("up","1");break}if("LABEL"===e.tagName&&e.classList.contains("down")){this.dispatchAction("down","1");break}e=e.parentElement}n.prototype.on_click.call(this,t)},t.prototype.on_mousedown=function(t){t.target===this._handle&&this.MoveStart(t)},t.prototype.MoveStart=function(t){this._xOffset=0;for(var e=this._handle.offsetParent;null!=e;)this._xOffset+=e.offsetLeft,e=e.offsetParent;this._x=t.clientX-(this._handle.offsetLeft+this._xOffset),this._moveFunc=this._onmousemove.bind(this),document.addEventListener("mousemove",this._moveFunc,!1),this._upFunc=this._onmouseup.bind(this),document.addEventListener("mouseup",this._upFunc,!1),t.cancelBubble=!0,t.returnValue=!1},t.prototype._onmousemove=function(t){t=t.clientX-this._x-this._xOffset,t=Math.min(this._maxright,Math.max(0,t)),t=Math.round(t*(this.maxvalue-this.minvalue)/this._maxright+this.minvalue),t=Math.round(t/this.unit)*this.unit;this._adjustHandle(t),t!==this._lastValue&&(this._lastValue=t,this.dispatchAction("value",String(t)))},t.prototype._onmouseup=function(t){t=t||window.event,document.removeEventListener("mousemove",this._moveFunc),document.removeEventListener("mouseup",this._upFunc)},t.prototype.on_touchstart=function(t){t.targetTouches[0].target;this._handle},__decorate([MicroControl("slider")],t)}(GenericWidgetClass),SwitchWidgetClass=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.on_click=function(t){for(var e=this.querySelector(".u-switch"),i=t.srcElement;null!==i&&i!==this&&i!==e;)i=i.parentElement;i===e?this.dispatchAction("toggle","1"):n.prototype.on_click.call(this,t)},__decorate([MicroControl("switch")],t)}(GenericWidgetClass);function toBool(t){if(!t)return!1;switch(t.toLowerCase().trim()){case"true":case"yes":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(t)}}function toSeconds(t){return(t=t.toLowerCase()).endsWith("h")?60*parseInt(t,10)*60:t.endsWith("m")?60*parseInt(t,10):t.endsWith("s")?parseInt(t,10):t.includes(":")?(Date.parse("1.1.1970 "+t)-Date.parse("1.1.1970"))/1e3:Number(t)}function setTextContent(t,e){t.textContent!==e&&(t.textContent=e)}function setAttr(t,e,i){t.getAttribute(e)!==i&&t.setAttribute(e,i)}function changeConfig(t,e){var i,n="/env.json",s=JSON.parse(hub.read("env")),o=jsonFind(s,t);for(i in 0===Object.keys(o).length&&(n="/config.json",o=jsonFind(s=JSON.parse(hub.read("config")),t)),e)e[i]?o[i]=e[i]:delete o[i];t=new FormData;t.append(n,new Blob([JSON.stringify(s)],{type:"text/html"}),n),fetch("/",{method:"POST",body:t}).then(function(){window.alert("saved.")})}function debounce(i,n){var s;return void 0===n&&(n=20),function(){var t=this,e=arguments;s&&clearTimeout(s),s=window.setTimeout(function(){s=0,i.apply(t,e)},n)}}function getHashParams(t){var e=__assign({},t);return window.location.hash.substr(1).split("&").forEach(function(t){t=t.split("=");e[t[0]]=t[1]}),e}function createHTMLElement(t,e,i){var n=document.createElement(e);if(i)for(var s in i)i.hasOwnProperty(s)&&n.setAttribute(s,i[s]);return t.appendChild(n),n}var TimerWidgetClass=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.wt=0,t.pt=0,t.ct=0,t.time=0,t}return __extends(t,n),t.prototype.newData=function(t,e,i){n.prototype.newData.call(this,t,e,i),"waittime"===e?this.wt=toSeconds(i):"pulsetime"===e?this.pt=toSeconds(i):"cycletime"===e?this.ct=toSeconds(i):"time"===e&&(this.time=toSeconds(i)),this.ct<this.wt+this.pt&&(this.ct=this.wt+this.pt),0<this.ct&&(e=(t=this.querySelector(".u-bar")).clientWidth/this.ct,(i=t.querySelector(".pulse")).style.left=Math.floor(this.wt*e)+"px",i.style.width=Math.floor(this.pt*e)+"px",t.querySelector(".current").style.width=Math.floor(this.time*e)+"px")},t.prototype.on_click=function(t){var i;t.target.classList.contains("save")&&(i={},this.querySelectorAll("[u-value]").forEach(function(t){var e=t.getAttribute("u-value");e&&(i[e]=t.value)}),changeConfig(this.microid,i)),n.prototype.on_click.call(this,t)},__decorate([MicroControl("timer")],t)}(GenericWidgetClass),MicroHub=function(){function t(){this._registrations={},this._registrationsId=0,this._store={}}return t.prototype.read=function(t){return this._findStoreObject(this.pPath(t))[this.pKey(t)]},t.prototype.write=function(t,e){this._findStoreObject(this.pPath(t))[this.pKey(t)]=e},t.prototype.subscribe=function(t,e,i){void 0===i&&(i=!1);var n=this._registrationsId,t="^"+t.toLocaleLowerCase().replace(/(\[|\]|\/|\?)/g,"\\$1").replace(/\*\*/g,"\\S{0,}").replace(/\*/g,"[^/?]*")+"$",s={id:n,match:RegExp(t),callback:e};return this._registrations[n]=s,this._registrationsId++,i&&jsonParse(this._store,function(t,e,i){var n=t+(e?"?"+e:"");n&&(n=n.toLocaleLowerCase()).match(s.match)&&s.callback(t,e?e.toLowerCase():null,i)}.bind(this)),n},t.prototype.unsubscribe=function(t){delete this._registrations[t]},t.prototype.replay=function(t){var s=this._registrations[t];s&&jsonParse(this._store,function(t,e,i){var n=t+(e?"?"+e:"");n&&(n=n.toLocaleLowerCase()).match(s.match)&&s.callback(t,e?e.toLowerCase():null,i)}.bind(this))},t.prototype.publishObj=function(t){jsonParse(t,function(t,e,i){this.publishValue(t,e?e.toLowerCase():"",i||"")}.bind(this))},t.prototype.publishValue=function(e,i,n){var s=e+(i?"?"+i:"");s&&(i&&(this._findStoreObject(e)[i]=n),s=s.toLocaleLowerCase(),Object.values(this._registrations).forEach(function(t){s.match(t.match)&&t.callback(e,i,n)}))},t.prototype.onunload=function(){var e=this;Object.getOwnPropertyNames(this._registrations).forEach(function(t){return delete e._registrations[t]})},t.prototype._findStoreObject=function(t){var e=this._store;"/"===t[0]&&(t=t.substr(1));for(var i=t.split("/");0<i.length&&e[i[0]];)e=e[i[0]],i.shift();for(;0<i.length&&i[0];)e=e[i[0]]={},i.shift();return e},t.prototype.pPath=function(t){"/"===t[0]&&(t=t.substr(1));t=t.split("/");return t.slice(0,t.length-1).join("/")},t.prototype.pKey=function(t){t=t.split("/");return t[t.length-1]},t}(),hub=new MicroHub;window.addEventListener("unload",hub.onunload.bind(hub),!1);