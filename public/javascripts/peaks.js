!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.peaks||(f.peaks={})).js=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*! KineticJS v4.5.5 2013-07-28 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KineticJS/wiki/License*/
var Kinetic={};!function(){Kinetic.version="4.5.5",Kinetic.Filters={},Kinetic.Node=function(a){this._init(a)},Kinetic.Shape=function(a){this.__init(a)},Kinetic.Container=function(a){this.__init(a)},Kinetic.Stage=function(a){this.___init(a)},Kinetic.Layer=function(a){this.___init(a)},Kinetic.Group=function(a){this.___init(a)},Kinetic.Global={stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,dblClickWindow:400,isDragging:function(){var a=Kinetic.DD;return a?a.isDragging:!1},isDragReady:function(){var a=Kinetic.DD;return a?!!a.node:!1},_addId:function(a,b){void 0!==b&&(this.ids[b]=a)},_removeId:function(a){void 0!==a&&delete this.ids[a]},_addName:function(a,b){void 0!==b&&(void 0===this.names[b]&&(this.names[b]=[]),this.names[b].push(a))},_removeName:function(a,b){if(void 0!==a){var c=this.names[a];if(void 0!==c){for(var d=0;d<c.length;d++){var e=c[d];e._id===b&&c.splice(d,1)}0===c.length&&delete this.names[a]}}}}}(),function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.returnExports=b()}(this,function(){return Kinetic}),function(){Kinetic.Collection=function(){var a=[].slice.call(arguments),b=a.length,c=0;for(this.length=b;b>c;c++)this[c]=a[c];return this},Kinetic.Collection.prototype=[],Kinetic.Collection.prototype.each=function(a){for(var b=0;b<this.length;b++)a(this[b],b)},Kinetic.Collection.prototype.toArray=function(){var a,b=[],c=this.length;for(a=0;c>a;a++)b.push(this[a]);return b},Kinetic.Collection.toCollection=function(a){var b,c=new Kinetic.Collection,d=a.length;for(b=0;d>b;b++)c.push(a[b]);return c},Kinetic.Collection.mapMethods=function(a){var b,c=a.length;for(b=0;c>b;b++)!function(b){var c=a[b];Kinetic.Collection.prototype[c]=function(){var a,b=this.length;for(args=[].slice.call(arguments),a=0;b>a;a++)this[a][c].apply(this[a],args)}}(b)}}(),function(){Kinetic.Transform=function(){this.m=[1,0,0,1,0,0]},Kinetic.Transform.prototype={translate:function(a,b){this.m[4]+=this.m[0]*a+this.m[2]*b,this.m[5]+=this.m[1]*a+this.m[3]*b},scale:function(a,b){this.m[0]*=a,this.m[1]*=a,this.m[2]*=b,this.m[3]*=b},rotate:function(a){var b=Math.cos(a),c=Math.sin(a),d=this.m[0]*b+this.m[2]*c,e=this.m[1]*b+this.m[3]*c,f=this.m[0]*-c+this.m[2]*b,g=this.m[1]*-c+this.m[3]*b;this.m[0]=d,this.m[1]=e,this.m[2]=f,this.m[3]=g},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(a,b){var c=this.m[0]+this.m[2]*b,d=this.m[1]+this.m[3]*b,e=this.m[2]+this.m[0]*a,f=this.m[3]+this.m[1]*a;this.m[0]=c,this.m[1]=d,this.m[2]=e,this.m[3]=f},multiply:function(a){var b=this.m[0]*a.m[0]+this.m[2]*a.m[1],c=this.m[1]*a.m[0]+this.m[3]*a.m[1],d=this.m[0]*a.m[2]+this.m[2]*a.m[3],e=this.m[1]*a.m[2]+this.m[3]*a.m[3],f=this.m[0]*a.m[4]+this.m[2]*a.m[5]+this.m[4],g=this.m[1]*a.m[4]+this.m[3]*a.m[5]+this.m[5];this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g},invert:function(){var a=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),b=this.m[3]*a,c=-this.m[1]*a,d=-this.m[2]*a,e=this.m[0]*a,f=a*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),g=a*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=b,this.m[1]=c,this.m[2]=d,this.m[3]=e,this.m[4]=f,this.m[5]=g},getMatrix:function(){return this.m}}}(),function(){var a="canvas",b="2d",c="[object Array]",d="[object Number]",e="[object String]",f=Math.PI/180,g=180/Math.PI,h="#",i="",j="0",k="Kinetic warning: ",l="Kinetic error: ",m="rgb(",n={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},o=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Kinetic.Util={_isElement:function(a){return!(!a||1!=a.nodeType)},_isFunction:function(a){return!!(a&&a.constructor&&a.call&&a.apply)},_isObject:function(a){return!!a&&a.constructor==Object},_isArray:function(a){return Object.prototype.toString.call(a)==c},_isNumber:function(a){return Object.prototype.toString.call(a)==d},_isString:function(a){return Object.prototype.toString.call(a)==e},_hasMethods:function(a){var b,c=[];for(b in a)this._isFunction(a[b])&&c.push(b);return c.length>0},_isInDocument:function(a){for(;a=a.parentNode;)if(a==document)return!0;return!1},_getXY:function(a){if(this._isNumber(a))return{x:a,y:a};if(this._isArray(a)){if(1===a.length){var b=a[0];if(this._isNumber(b))return{x:b,y:b};if(this._isArray(b))return{x:b[0],y:b[1]};if(this._isObject(b))return b}else if(a.length>=2)return{x:a[0],y:a[1]}}else if(this._isObject(a))return a;return null},_getSize:function(a){if(this._isNumber(a))return{width:a,height:a};if(this._isArray(a))if(1===a.length){var b=a[0];if(this._isNumber(b))return{width:b,height:b};if(this._isArray(b)){if(b.length>=4)return{width:b[2],height:b[3]};if(b.length>=2)return{width:b[0],height:b[1]}}else if(this._isObject(b))return b}else{if(a.length>=4)return{width:a[2],height:a[3]};if(a.length>=2)return{width:a[0],height:a[1]}}else if(this._isObject(a))return a;return null},_getPoints:function(a){var b,c,d=[];if(void 0===a)return[];if(c=a.length,this._isArray(a[0])){for(b=0;c>b;b++)d.push({x:a[b][0],y:a[b][1]});return d}if(this._isObject(a[0]))return a;for(b=0;c>b;b+=2)d.push({x:a[b],y:a[b+1]});return d},_getImage:function(c,d){var e,f,g,h;c?this._isElement(c)?d(c):this._isString(c)?(e=new Image,e.onload=function(){d(e)},e.src=c):c.data?(f=document.createElement(a),f.width=c.width,f.height=c.height,g=f.getContext(b),g.putImageData(c,0,0),h=f.toDataURL(),e=new Image,e.onload=function(){d(e)},e.src=h):d(null):d(null)},_rgbToHex:function(a,b,c){return((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)},_hexToRgb:function(a){a=a.replace(h,i);var b=parseInt(a,16);return{r:255&b>>16,g:255&b>>8,b:255&b}},getRandomColor:function(){for(var a=(16777215*Math.random()<<0).toString(16);a.length<6;)a=j+a;return h+a},getRGB:function(a){var b;return a in n?(b=n[a],{r:b[0],g:b[1],b:b[2]}):a[0]===h?this._hexToRgb(a.substring(1)):a.substr(0,4)===m?(b=o.exec(a.replace(/ /g,"")),{r:parseInt(b[1],10),g:parseInt(b[2],10),b:parseInt(b[3],10)}):{r:0,g:0,b:0}},_merge:function(a,b){var c=this._clone(b);for(var d in a)c[d]=this._isObject(a[d])?this._merge(a[d],c[d]):a[d];return c},_clone:function(a){var b={};for(var c in a)b[c]=this._isObject(a[c])?this._clone(a[c]):a[c];return b},_degToRad:function(a){return a*f},_radToDeg:function(a){return a*g},_capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},error:function(a){throw new Error(l+a)},warn:function(a){window.console&&console.warn&&console.warn(k+a)},extend:function(a,b){for(var c in b.prototype)c in a.prototype||(a.prototype[c]=b.prototype[c])},addMethods:function(a,b){var c;for(c in b)a.prototype[c]=b[c]},_getControlPoints:function(a,b,c,d){var e=a.x,f=a.y,g=b.x,h=b.y,i=c.x,j=c.y,k=Math.sqrt(Math.pow(g-e,2)+Math.pow(h-f,2)),l=Math.sqrt(Math.pow(i-g,2)+Math.pow(j-h,2)),m=d*k/(k+l),n=d*l/(k+l),o=g-m*(i-e),p=h-m*(j-f),q=g+n*(i-e),r=h+n*(j-f);return[{x:o,y:p},{x:q,y:r}]},_expandPoints:function(a,b){var c,d,e=a.length,f=[];for(c=1;e-1>c;c++)d=Kinetic.Util._getControlPoints(a[c-1],a[c],a[c+1],b),f.push(d[0]),f.push(a[c]),f.push(d[1]);return f},_removeLastLetter:function(a){return a.substring(0,a.length-1)}}}(),function(){var a=document.createElement("canvas"),b=a.getContext("2d"),c=window.devicePixelRatio||1,d=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1,e=c/d;Kinetic.Canvas=function(a){this.init(a)},Kinetic.Canvas.prototype={init:function(a){a=a||{};var b=a.width||0,c=a.height||0,d=a.pixelRatio||e,f=a.contextType||"2d";this.pixelRatio=d,this.element=document.createElement("canvas"),this.element.style.padding=0,this.element.style.margin=0,this.element.style.border=0,this.element.style.background="transparent",this.element.style.position="absolute",this.element.style.top=0,this.element.style.left=0,this.context=this.element.getContext(f),this.setSize(b,c)},getElement:function(){return this.element},getContext:function(){return this.context},setWidth:function(a){this.width=this.element.width=a*this.pixelRatio,this.element.style.width=a+"px"},setHeight:function(a){this.height=this.element.height=a*this.pixelRatio,this.element.style.height=a+"px"},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(a,b){this.setWidth(a),this.setHeight(b)},clear:function(){var a=this.getContext();this.getElement(),a.clearRect(0,0,this.getWidth(),this.getHeight())},toDataURL:function(a,b){try{return this.element.toDataURL(a,b)}catch(c){try{return this.element.toDataURL()}catch(d){return Kinetic.Util.warn("Unable to get data URL. "+d.message),""}}},fill:function(a){a.getFillEnabled()&&this._fill(a)},stroke:function(a){a.getStrokeEnabled()&&this._stroke(a)},fillStroke:function(a){var b=a.getFillEnabled();b&&this._fill(a),a.getStrokeEnabled()&&this._stroke(a,a.hasShadow()&&a.hasFill()&&b)},applyShadow:function(a,b){var c=this.context;c.save(),this._applyShadow(a),b(),c.restore(),b()},_applyLineCap:function(a){var b=a.getLineCap();b&&(this.context.lineCap=b)},_applyOpacity:function(a){var b=a.getAbsoluteOpacity();1!==b&&(this.context.globalAlpha=b)},_applyLineJoin:function(a){var b=a.getLineJoin();b&&(this.context.lineJoin=b)},_applyAncestorTransforms:function(a){var b,c,d=this.context;a._eachAncestorReverse(function(a){b=a.getTransform(!0),c=b.getMatrix(),d.transform(c[0],c[1],c[2],c[3],c[4],c[5])},!0)},_clip:function(a){var b=this.getContext();b.save(),this._applyAncestorTransforms(a),b.beginPath(),a.getClipFunc()(this),b.clip(),b.setTransform(1,0,0,1,0,0)}},Kinetic.SceneCanvas=function(a){Kinetic.Canvas.call(this,a)},Kinetic.SceneCanvas.prototype={setWidth:function(a){var b=this.pixelRatio;Kinetic.Canvas.prototype.setWidth.call(this,a),this.context.scale(b,b)},setHeight:function(a){var b=this.pixelRatio;Kinetic.Canvas.prototype.setHeight.call(this,a),this.context.scale(b,b)},_fillColor:function(a){var b=this.context,c=a.getFill();b.fillStyle=c,a._fillFunc(b)},_fillPattern:function(a){var b=this.context,c=a.getFillPatternImage(),d=a.getFillPatternX(),e=a.getFillPatternY(),f=a.getFillPatternScale(),g=a.getFillPatternRotation(),h=a.getFillPatternOffset(),i=a.getFillPatternRepeat();(d||e)&&b.translate(d||0,e||0),g&&b.rotate(g),f&&b.scale(f.x,f.y),h&&b.translate(-1*h.x,-1*h.y),b.fillStyle=b.createPattern(c,i||"repeat"),b.fill()},_fillLinearGradient:function(a){var b=this.context,c=a.getFillLinearGradientStartPoint(),d=a.getFillLinearGradientEndPoint(),e=a.getFillLinearGradientColorStops(),f=b.createLinearGradient(c.x,c.y,d.x,d.y);if(e){for(var g=0;g<e.length;g+=2)f.addColorStop(e[g],e[g+1]);b.fillStyle=f,b.fill()}},_fillRadialGradient:function(a){for(var b=this.context,c=a.getFillRadialGradientStartPoint(),d=a.getFillRadialGradientEndPoint(),e=a.getFillRadialGradientStartRadius(),f=a.getFillRadialGradientEndRadius(),g=a.getFillRadialGradientColorStops(),h=b.createRadialGradient(c.x,c.y,e,d.x,d.y,f),i=0;i<g.length;i+=2)h.addColorStop(g[i],g[i+1]);b.fillStyle=h,b.fill()},_fill:function(a,b){var c=this.context,d=a.getFill(),e=a.getFillPatternImage(),f=a.getFillLinearGradientColorStops(),g=a.getFillRadialGradientColorStops(),h=a.getFillPriority();c.save(),!b&&a.hasShadow()&&this._applyShadow(a),d&&"color"===h?this._fillColor(a):e&&"pattern"===h?this._fillPattern(a):f&&"linear-gradient"===h?this._fillLinearGradient(a):g&&"radial-gradient"===h?this._fillRadialGradient(a):d?this._fillColor(a):e?this._fillPattern(a):f?this._fillLinearGradient(a):g&&this._fillRadialGradient(a),c.restore(),!b&&a.hasShadow()&&this._fill(a,!0)},_stroke:function(a,b){var c=this.context,d=a.getStroke(),e=a.getStrokeWidth(),f=a.getDashArray();(d||e)&&(c.save(),a.getStrokeScaleEnabled()||c.setTransform(1,0,0,1,0,0),this._applyLineCap(a),f&&a.getDashArrayEnabled()&&(c.setLineDash?c.setLineDash(f):"mozDash"in c?c.mozDash=f:"webkitLineDash"in c&&(c.webkitLineDash=f)),!b&&a.hasShadow()&&this._applyShadow(a),c.lineWidth=e||2,c.strokeStyle=d||"black",a._strokeFunc(c),c.restore(),!b&&a.hasShadow()&&this._stroke(a,!0))},_applyShadow:function(a){var b=this.context;if(a.hasShadow()&&a.getShadowEnabled()){var c=a.getAbsoluteOpacity(),d=a.getShadowColor()||"black",e=a.getShadowBlur()||5,f=a.getShadowOffset()||{x:0,y:0};a.getShadowOpacity()&&(b.globalAlpha=a.getShadowOpacity()*c),b.shadowColor=d,b.shadowBlur=e,b.shadowOffsetX=f.x,b.shadowOffsetY=f.y}}},Kinetic.Util.extend(Kinetic.SceneCanvas,Kinetic.Canvas),Kinetic.HitCanvas=function(a){Kinetic.Canvas.call(this,a)},Kinetic.HitCanvas.prototype={_fill:function(a){var b=this.context;b.save(),b.fillStyle=a.colorKey,a._fillFuncHit(b),b.restore()},_stroke:function(a){var b=this.context,c=a.getStroke(),d=a.getStrokeWidth();(c||d)&&(this._applyLineCap(a),b.save(),b.lineWidth=d||2,b.strokeStyle=a.colorKey,a._strokeFuncHit(b),b.restore())}},Kinetic.Util.extend(Kinetic.HitCanvas,Kinetic.Canvas)}(),function(){var a="add",b=" ",c="",d=".",e="get",f="set",g="Shape",h="Stage",i="X",j="Y",k="kinetic",l="before",m="Change",n="id",o="name",p="mouseenter",q="mouseleave",r="Deg",s="RGB",u="r",v="g",w="b",x="R",y="G",z="B",A="#",B="children";Kinetic.Util.addMethods(Kinetic.Node,{_init:function(a){this._id=Kinetic.Global.idCounter++,this.eventListeners={},this.attrs={},this.setAttrs(a)},on:function(a,e){var f,g,h,i,j,k=a.split(b),l=k.length;for(f=0;l>f;f++)g=k[f],h=g.split(d),i=h[0],j=h[1]||c,this.eventListeners[i]||(this.eventListeners[i]=[]),this.eventListeners[i].push({name:j,handler:e});return this},off:function(a){var c,e,f,g,h,i=a.split(b),j=i.length;for(c=0;j>c;c++)if(e=i[c],f=e.split(d),g=f[0],h=f[1],g)this.eventListeners[g]&&this._off(g,h);else for(t in this.eventListeners)this._off(t,h);return this},remove:function(){var a=this.getParent();return a&&a.children&&(a.children.splice(this.index,1),a._setChildrenIndices(),delete this.parent),this},destroy:function(){var a=Kinetic.Global;a._removeId(this.getId()),a._removeName(this.getName(),this._id),this.remove()},getAttr:function(a){var b=e+Kinetic.Util._capitalize(a);return Kinetic.Util._isFunction(this[b])?this[b]():this.attrs[a]},setAttr:function(){var a=Array.prototype.slice.call(arguments),b=a[0],c=f+Kinetic.Util._capitalize(b),d=this[c];return a.shift(),Kinetic.Util._isFunction(d)?d.apply(this,a):this.attrs[b]=a[0],this},getAttrs:function(){return this.attrs||{}},setAttrs:function(a){var b,c;if(a)for(b in a)b===B||(c=f+Kinetic.Util._capitalize(b),Kinetic.Util._isFunction(this[c])?this[c](a[b]):this._setAttr(b,a[b]));return this},getVisible:function(){var a=this.attrs.visible,b=this.getParent();return void 0===a&&(a=!0),a&&b&&!b.getVisible()?!1:a},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){function a(h){for(b=[],c=h.length,d=0;c>d;d++)e=h[d],j++,e.nodeType!==g&&(b=b.concat(e.getChildren().toArray())),e._id===i._id&&(d=c);b.length>0&&b[0].getLevel()<=f&&a(b)}var b,c,d,e,f=this.getLevel(),i=(this.getStage(),this),j=0;return i.nodeType!==h&&a(i.getStage().getChildren()),j},getLevel:function(){for(var a=0,b=this.parent;b;)a++,b=b.parent;return a},setPosition:function(){var a=Kinetic.Util._getXY([].slice.call(arguments));return this.setX(a.x),this.setY(a.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(){var a=this.getAbsoluteTransform(),b=this.getOffset();return a.translate(b.x,b.y),a.getTranslation()},setAbsolutePosition:function(){var a,b=Kinetic.Util._getXY([].slice.call(arguments)),c=this._clearTransform();return this.attrs.x=c.x,this.attrs.y=c.y,delete c.x,delete c.y,a=this.getAbsoluteTransform(),a.invert(),a.translate(b.x,b.y),b={x:this.attrs.x+a.getTranslation().x,y:this.attrs.y+a.getTranslation().y},this.setPosition(b.x,b.y),this._setTransform(c),this},move:function(){var a=Kinetic.Util._getXY([].slice.call(arguments)),b=this.getX(),c=this.getY();return void 0!==a.x&&(b+=a.x),void 0!==a.y&&(c+=a.y),this.setPosition(b,c),this},_eachAncestorReverse:function(a,b){var c,d,e=[],f=this.getParent();for(b&&e.unshift(this);f;)e.unshift(f),f=f.parent;for(c=e.length,d=0;c>d;d++)a(e[d])},rotate:function(a){return this.setRotation(this.getRotation()+a),this},rotateDeg:function(a){return this.setRotation(this.getRotation()+Kinetic.Util._degToRad(a)),this},moveToTop:function(){var a=this.index;return this.parent.children.splice(a,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){var a=this.index,b=this.parent.getChildren().length;return b-1>a?(this.parent.children.splice(a,1),this.parent.children.splice(a+1,0,this),this.parent._setChildrenIndices(),!0):!1},moveDown:function(){var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.splice(a-1,0,this),this.parent._setChildrenIndices(),!0):!1},moveToBottom:function(){var a=this.index;return a>0?(this.parent.children.splice(a,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0):!1},setZIndex:function(a){var b=this.index;return this.parent.children.splice(b,1),this.parent.children.splice(a,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){var a=this.getOpacity();return this.getParent()&&(a*=this.getParent().getAbsoluteOpacity()),a},moveTo:function(a){return Kinetic.Node.prototype.remove.call(this),a.add(this),this},toObject:function(){var a,b,c=Kinetic.Util,d={},e=this.getAttrs();d.attrs={};for(a in e)b=e[a],c._isFunction(b)||c._isElement(b)||c._isObject(b)&&c._hasMethods(b)||(d.attrs[a]=b);return d.className=this.getClassName(),d},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},getLayer:function(){return this.getParent().getLayer()},getStage:function(){return this.getParent()?this.getParent().getStage():void 0},fire:function(a,b,c){return c?this._fireAndBubble(a,b||{}):this._fire(a,b||{}),this},getAbsoluteTransform:function(){var a,b=new Kinetic.Transform;return this._eachAncestorReverse(function(c){a=c.getTransform(),b.multiply(a)},!0),b},_getAndCacheTransform:function(){var a=new Kinetic.Transform,b=this.getX(),c=this.getY(),d=this.getRotation(),e=this.getScaleX(),f=this.getScaleY(),g=this.getSkewX(),h=this.getSkewY(),i=this.getOffsetX(),j=this.getOffsetY();return(0!==b||0!==c)&&a.translate(b,c),0!==d&&a.rotate(d),(0!==g||0!==h)&&a.skew(g,h),(1!==e||1!==f)&&a.scale(e,f),(0!==i||0!==j)&&a.translate(-1*i,-1*j),this.cachedTransform=a,a},getTransform:function(a){var b=this.cachedTransform;return a&&b?b:this._getAndCacheTransform()},clone:function(a){var b,c,d,e,f,g=this.getClassName(),h=new Kinetic[g](this.attrs);for(b in this.eventListeners)for(c=this.eventListeners[b],d=c.length,e=0;d>e;e++)f=c[e],f.name.indexOf(k)<0&&(h.eventListeners[b]||(h.eventListeners[b]=[]),h.eventListeners[b].push(f));return h.setAttrs(a),h},toDataURL:function(a){a=a||{};var b=a.mimeType||null,c=a.quality||null,d=this.getStage(),e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||d.getWidth(),height:a.height||d.getHeight(),pixelRatio:1}),h=g.getContext();return h.save(),(e||f)&&h.translate(-1*e,-1*f),this.drawScene(g),h.restore(),g.toDataURL(b,c)},toImage:function(a){Kinetic.Util._getImage(this.toDataURL(a),function(b){a.callback(b)})},setSize:function(){var a=Kinetic.Util._getSize(Array.prototype.slice.call(arguments));return this.setWidth(a.width),this.setHeight(a.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},_get:function(a){return this.nodeType===a?[this]:[]},_off:function(a,b){var c,d,e=this.eventListeners[a];for(c=0;c<e.length;c++)if(d=e[c].name,!("kinetic"===d&&"kinetic"!==b||b&&d!==b)){if(e.splice(c,1),0===e.length){delete this.eventListeners[a];break}c--}},_clearTransform:function(){var a={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,a},_setTransform:function(a){var b;for(b in a)this.attrs[b]=a[b];this.cachedTransform=null},_fireBeforeChangeEvent:function(a,b,c){this._fire(l+Kinetic.Util._capitalize(a)+m,{oldVal:b,newVal:c})},_fireChangeEvent:function(a,b,c){this._fire(a+m,{oldVal:b,newVal:c})},setId:function(a){var b=this.getId(),c=(this.getStage(),Kinetic.Global);return c._removeId(b),c._addId(this,a),this._setAttr(n,a),this},setName:function(a){var b=this.getName(),c=(this.getStage(),Kinetic.Global);return c._removeName(b,this._id),c._addName(this,a),this._setAttr(o,a),this},_setAttr:function(a,b){var c;void 0!==b&&(c=this.attrs[a],this._fireBeforeChangeEvent(a,c,b),this.attrs[a]=b,this._fireChangeEvent(a,c,b))},_fireAndBubble:function(a,b,c){b&&this.nodeType===g&&(b.targetNode=this),this.getStage(),this.eventListeners;var d=!0;a===p&&c&&this._id===c._id?d=!1:a===q&&c&&this._id===c._id&&(d=!1),d&&(this._fire(a,b),b&&!b.cancelBubble&&this.parent&&(c&&c.parent?this._fireAndBubble.call(this.parent,a,b,c.parent):this._fireAndBubble.call(this.parent,a,b)))},_fire:function(a,b){var c,d,e=this.eventListeners[a];if(e)for(c=e.length,d=0;c>d;d++)e[d].handler.call(this,b)},draw:function(){return this.drawScene(),this.drawHit(),this},shouldDrawHit:function(){return this.isVisible()&&this.isListening()&&!Kinetic.Global.isDragging()},isDraggable:function(){return!1}}),Kinetic.Node.addGetterSetter=function(a,b,c,d){this.addGetter(a,b,c),this.addSetter(a,b,d)},Kinetic.Node.addPointGetterSetter=function(a,b,c,d){this.addPointGetter(a,b),this.addPointSetter(a,b),this.addGetter(a,b+i,c),this.addGetter(a,b+j,c),this.addSetter(a,b+i,d),this.addSetter(a,b+j,d)},Kinetic.Node.addPointsGetterSetter=function(a,b){this.addPointsGetter(a,b),this.addPointsSetter(a,b),this.addPointAdder(a,b)},Kinetic.Node.addRotationGetterSetter=function(a,b,c,d){this.addRotationGetter(a,b,c),this.addRotationSetter(a,b,d)},Kinetic.Node.addColorGetterSetter=function(a,b){this.addGetter(a,b),this.addSetter(a,b),this.addColorRGBGetter(a,b),this.addColorComponentGetter(a,b,u),this.addColorComponentGetter(a,b,v),this.addColorComponentGetter(a,b,w),this.addColorRGBSetter(a,b),this.addColorComponentSetter(a,b,u),this.addColorComponentSetter(a,b,v),this.addColorComponentSetter(a,b,w)},Kinetic.Node.addColorRGBGetter=function(a,b){var c=e+Kinetic.Util._capitalize(b)+s;a.prototype[c]=function(){return Kinetic.Util.getRGB(this.attrs[b])}},Kinetic.Node.addColorComponentGetter=function(a,b,c){var d=e+Kinetic.Util._capitalize(b),f=d+Kinetic.Util._capitalize(c);a.prototype[f]=function(){return this[d+s]()[c]}},Kinetic.Node.addPointsGetter=function(a,b){var c=e+Kinetic.Util._capitalize(b);a.prototype[c]=function(){var a=this.attrs[b];return void 0===a?[]:a}},Kinetic.Node.addGetter=function(a,b,c){var d=e+Kinetic.Util._capitalize(b);a.prototype[d]=function(){var a=this.attrs[b];return void 0===a?c:a}},Kinetic.Node.addPointGetter=function(a,b){var c=e+Kinetic.Util._capitalize(b);a.prototype[c]=function(){var a=this;return{x:a[c+i](),y:a[c+j]()}}},Kinetic.Node.addRotationGetter=function(a,b,c){var d=e+Kinetic.Util._capitalize(b);a.prototype[d]=function(){var a=this.attrs[b];return void 0===a&&(a=c),a},a.prototype[d+r]=function(){var a=this.attrs[b];return void 0===a&&(a=c),Kinetic.Util._radToDeg(a)}},Kinetic.Node.addColorRGBSetter=function(a,b){var c=f+Kinetic.Util._capitalize(b)+s;a.prototype[c]=function(a){var c=a&&void 0!==a.r?0|a.r:this.getAttr(b+x),d=a&&void 0!==a.g?0|a.g:this.getAttr(b+y),e=a&&void 0!==a.b?0|a.b:this.getAttr(b+z);this._setAttr(b,A+Kinetic.Util._rgbToHex(c,d,e))}},Kinetic.Node.addColorComponentSetter=function(a,b,c){var d=f+Kinetic.Util._capitalize(b),e=d+Kinetic.Util._capitalize(c);a.prototype[e]=function(a){var b={};b[c]=a,this[d+s](b)}},Kinetic.Node.addPointsSetter=function(a,b){var c=f+Kinetic.Util._capitalize(b);a.prototype[c]=function(a){var b=Kinetic.Util._getPoints(a);this._setAttr("points",b)}},Kinetic.Node.addSetter=function(a,b,c){var d=f+Kinetic.Util._capitalize(b);a.prototype[d]=function(a){this._setAttr(b,a),c&&(this.cachedTransform=null)}},Kinetic.Node.addPointSetter=function(a,b){var c=f+Kinetic.Util._capitalize(b);a.prototype[c]=function(){var a=Kinetic.Util._getXY([].slice.call(arguments)),d=this.attrs[b],e=0,f=0;a&&(e=a.x,f=a.y,this._fireBeforeChangeEvent(b,d,a),void 0!==e&&this[c+i](e),void 0!==f&&this[c+j](f),this._fireChangeEvent(b,d,a))}},Kinetic.Node.addRotationSetter=function(a,b,c){var d=f+Kinetic.Util._capitalize(b);a.prototype[d]=function(a){this._setAttr(b,a),c&&(this.cachedTransform=null)},a.prototype[d+r]=function(a){this._setAttr(b,Kinetic.Util._degToRad(a)),c&&(this.cachedTransform=null)}},Kinetic.Node.addPointAdder=function(b,c){var d=a+Kinetic.Util._removeLastLetter(Kinetic.Util._capitalize(c));b.prototype[d]=function(){var a=Kinetic.Util._getXY([].slice.call(arguments)),b=this.attrs[c];a&&(this._fireBeforeChangeEvent(c,b,a),this.attrs[c].push(a),this._fireChangeEvent(c,b,a))}},Kinetic.Node.create=function(a,b){return this._createNode(JSON.parse(a),b)},Kinetic.Node._createNode=function(a,b){var c,d,e,f=Kinetic.Node.prototype.getClassName.call(a),g=a.children;if(b&&(a.attrs.container=b),c=new Kinetic[f](a.attrs),g)for(d=g.length,e=0;d>e;e++)c.add(this._createNode(g[e]));return c},Kinetic.Node.addGetterSetter(Kinetic.Node,"x",0,!0),Kinetic.Node.addGetterSetter(Kinetic.Node,"y",0,!0),Kinetic.Node.addGetterSetter(Kinetic.Node,"opacity",1),Kinetic.Node.addGetter(Kinetic.Node,"name"),Kinetic.Node.addGetter(Kinetic.Node,"id"),Kinetic.Node.addRotationGetterSetter(Kinetic.Node,"rotation",0,!0),Kinetic.Node.addPointGetterSetter(Kinetic.Node,"scale",1,!0),Kinetic.Node.addPointGetterSetter(Kinetic.Node,"skew",0,!0),Kinetic.Node.addPointGetterSetter(Kinetic.Node,"offset",0,!0),Kinetic.Node.addSetter(Kinetic.Node,"width"),Kinetic.Node.addSetter(Kinetic.Node,"height"),Kinetic.Node.addGetterSetter(Kinetic.Node,"listening",!0),Kinetic.Node.addSetter(Kinetic.Node,"visible"),Kinetic.Node.prototype.isListening=Kinetic.Node.prototype.getListening,Kinetic.Node.prototype.isVisible=Kinetic.Node.prototype.getVisible,Kinetic.Collection.mapMethods(["on","off","remove","destroy","show","hide","move","rotate","moveToTop","moveUp","moveDown","moveToBottom","moveTo","fire","draw"])}(),function(){function a(a){window.setTimeout(a,1e3/60)}var b=500;Kinetic.Animation=function(a,b){this.func=a,this.setLayers(b),this.id=Kinetic.Animation.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:(new Date).getTime()}},Kinetic.Animation.prototype={setLayers:function(a){var b=[];b=a?a.length>0?a:[a]:[],this.layers=b},getLayers:function(){return this.layers},addLayer:function(a){var b,c,d=this.layers;if(d){for(b=d.length,c=0;b>c;c++)if(d[c]._id===a._id)return!1}else this.layers=[];return this.layers.push(a),!0},isRunning:function(){for(var a=Kinetic.Animation,b=a.animations,c=0;c<b.length;c++)if(b[c].id===this.id)return!0;return!1},start:function(){this.stop(),this.frame.timeDiff=0,this.frame.lastTime=(new Date).getTime(),Kinetic.Animation._addAnimation(this)},stop:function(){Kinetic.Animation._removeAnimation(this)},_updateFrameObject:function(a){this.frame.timeDiff=a-this.frame.lastTime,this.frame.lastTime=a,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}},Kinetic.Animation.animations=[],Kinetic.Animation.animIdCounter=0,Kinetic.Animation.animRunning=!1,Kinetic.Animation._addAnimation=function(a){this.animations.push(a),this._handleAnimation()},Kinetic.Animation._removeAnimation=function(a){for(var b=a.id,c=this.animations,d=c.length,e=0;d>e;e++)if(c[e].id===b){this.animations.splice(e,1);break}},Kinetic.Animation._runFrames=function(){var a,b,c,d,e,f,g,h,i={},j=this.animations;for(d=0;d<j.length;d++){for(a=j[d],b=a.layers,c=a.func,a._updateFrameObject((new Date).getTime()),f=b.length,e=0;f>e;e++)g=b[e],void 0!==g._id&&(i[g._id]=g);c&&c.call(a,a.frame)}for(h in i)i[h].draw()},Kinetic.Animation._animationLoop=function(){var a=this;this.animations.length>0?(this._runFrames(),Kinetic.Animation.requestAnimFrame(function(){a._animationLoop()})):this.animRunning=!1},Kinetic.Animation._handleAnimation=function(){var a=this;this.animRunning||(this.animRunning=!0,a._animationLoop())},RAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||a}(),Kinetic.Animation.requestAnimFrame=function(b){var c=Kinetic.DD&&Kinetic.DD.isDragging?a:RAF;c(b)};var c=Kinetic.Node.prototype.moveTo;Kinetic.Node.prototype.moveTo=function(a){c.call(this,a)},Kinetic.Layer.prototype.batchDraw=function(){var a=this;this.batchAnim||(this.batchAnim=new Kinetic.Animation(function(){a.lastBatchDrawTime&&(new Date).getTime()-a.lastBatchDrawTime>b&&a.batchAnim.stop()},this)),this.lastBatchDrawTime=(new Date).getTime(),this.batchAnim.isRunning()||(this.draw(),this.batchAnim.start())},Kinetic.Stage.prototype.batchDraw=function(){this.getChildren().each(function(a){a.batchDraw()})}}(),function(){var a={node:1,duration:1,easing:1,onFinish:1,yoyo:1},b=1,c=2,d=3,e=0;Kinetic.Tween=function(b){var c,d=this,g=b.node,h=g._id,i=b.duration||1,j=b.easing||Kinetic.Easings.Linear,k=!!b.yoyo;this.node=g,this._id=e++,this.anim=new Kinetic.Animation(function(){d.tween.onEnterFrame()},g.getLayer()||g.getLayers()),this.tween=new f(c,function(a){d._tweenFunc(a)},j,0,1,1e3*i,k),this._addListeners(),Kinetic.Tween.attrs[h]||(Kinetic.Tween.attrs[h]={}),Kinetic.Tween.attrs[h][this._id]||(Kinetic.Tween.attrs[h][this._id]={}),Kinetic.Tween.tweens[h]||(Kinetic.Tween.tweens[h]={});for(c in b)void 0===a[c]&&this._addAttr(c,b[c]);this.reset(),this.onFinish=b.onFinish,this.onReset=b.onReset},Kinetic.Tween.attrs={},Kinetic.Tween.tweens={},Kinetic.Tween.prototype={_addAttr:function(a,b){var c,d,e,f,g,h,i,j=this.node,k=j._id;if(e=Kinetic.Tween.tweens[k][a],e&&delete Kinetic.Tween.attrs[k][e][a],c=j.getAttr(a),Kinetic.Util._isArray(b))for(b=Kinetic.Util._getPoints(b),d=[],g=b.length,f=0;g>f;f++)h=c[f],i=b[f],d.push({x:i.x-h.x,y:i.y-h.y});else d=b-c;Kinetic.Tween.attrs[k][this._id][a]={start:c,diff:d},Kinetic.Tween.tweens[k][a]=this._id},_tweenFunc:function(a){var b,c,d,e,f,g,h,i,j,k=this.node,l=Kinetic.Tween.attrs[k._id][this._id];for(b in l){if(c=l[b],d=c.start,e=c.diff,Kinetic.Util._isArray(d))for(f=[],h=d.length,g=0;h>g;g++)i=d[g],j=e[g],f.push({x:i.x+j.x*a,y:i.y+j.y*a});else f=d+e*a;k.setAttr(b,f)}},_addListeners:function(){var a=this;this.tween.onPlay=function(){a.anim.start()},this.tween.onReverse=function(){a.anim.start()},this.tween.onPause=function(){a.anim.stop()},this.tween.onFinish=function(){a.onFinish&&a.onFinish()},this.tween.onReset=function(){a.onReset&&a.onReset()}},play:function(){return this.tween.play(),this},reverse:function(){return this.tween.reverse(),this},reset:function(){var a=this.node;return this.tween.reset(),(a.getLayer()||a.getLayers()).draw(),this},seek:function(a){var b=this.node;return this.tween.seek(1e3*a),(b.getLayer()||b.getLayers()).draw(),this},pause:function(){return this.tween.pause(),this},finish:function(){var a=this.node;return this.tween.finish(),(a.getLayer()||a.getLayers()).draw(),this},destroy:function(){var a,b=this.node._id,c=this._id,d=Kinetic.Tween.tweens[b];this.pause();for(a in d)delete Kinetic.Tween.tweens[b][a];delete Kinetic.Tween.attrs[b][c]}};var f=function(a,b,c,d,e,f,g){this.prop=a,this.propFunc=b,this.begin=d,this._pos=d,this.duration=f,this._change=0,this.prevPos=0,this.yoyo=g,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=c,this._change=e-this.begin,this.pause()
};f.prototype={fire:function(a){var b=this[a];b&&b()},setTime:function(a){a>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():0>a?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=a,this.update())},getTime:function(){return this._time},setPosition:function(a){this.prevPos=this._pos,this.propFunc(a),this._pos=a},getPosition:function(a){return void 0===a&&(a=this._time),this.func(a,this.begin,this._change,this.duration)},play:function(){this.state=c,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")},reverse:function(){this.state=d,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")},seek:function(a){this.pause(),this._time=a,this.update(),this.fire("onSeek")},reset:function(){this.pause(),this._time=0,this.update(),this.fire("onReset")},finish:function(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")},update:function(){this.setPosition(this.getPosition(this._time))},onEnterFrame:function(){var a=this.getTimer()-this._startTime;this.state===c?this.setTime(a):this.state===d&&this.setTime(this.duration-a)},pause:function(){this.state=b,this.fire("onPause")},getTimer:function(){return(new Date).getTime()}},Kinetic.Easings={BackEaseIn:function(a,b,c,d){var e=1.70158;return c*(a/=d)*a*((e+1)*a-e)+b},BackEaseOut:function(a,b,c,d){var e=1.70158;return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},BackEaseInOut:function(a,b,c,d){var e=1.70158;return(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},ElasticEaseIn:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f))+b)},ElasticEaseOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:1==(a/=d)?b+c:(f||(f=.3*d),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),e*Math.pow(2,-10*a)*Math.sin((a*d-g)*2*Math.PI/f)+c+b)},ElasticEaseInOut:function(a,b,c,d,e,f){var g=0;return 0===a?b:2==(a/=d/2)?b+c:(f||(f=d*.3*1.5),!e||e<Math.abs(c)?(e=c,g=f/4):g=f/(2*Math.PI)*Math.asin(c/e),1>a?-.5*e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+b:.5*e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+c+b)},BounceEaseOut:function(a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},BounceEaseIn:function(a,b,c,d){return c-Kinetic.Easings.BounceEaseOut(d-a,0,c,d)+b},BounceEaseInOut:function(a,b,c,d){return d/2>a?.5*Kinetic.Easings.BounceEaseIn(2*a,0,c,d)+b:.5*Kinetic.Easings.BounceEaseOut(2*a-d,0,c,d)+.5*c+b},EaseIn:function(a,b,c,d){return c*(a/=d)*a+b},EaseOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},EaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},StrongEaseIn:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},StrongEaseOut:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},StrongEaseInOut:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},Linear:function(a,b,c,d){return c*a/d+b}}}(),function(){Kinetic.DD={anim:new Kinetic.Animation,isDragging:!1,offset:{x:0,y:0},node:null,_drag:function(a){var b=Kinetic.DD,c=b.node;if(c){var d=c.getStage().getPointerPosition(),e=c.getDragBoundFunc(),f={x:d.x-b.offset.x,y:d.y-b.offset.y};void 0!==e&&(f=e.call(c,f,a)),c.setAbsolutePosition(f),b.isDragging||(b.isDragging=!0,c.fire("dragstart",a,!0)),c.fire("dragmove",a,!0)}},_endDragBefore:function(a){var b,c,d=Kinetic.DD,e=Kinetic.Global,f=d.node;f&&(b=f.nodeType,c=f.getLayer(),d.anim.stop(),d.isDragging&&(d.isDragging=!1,e.listenClickTap=!1,a&&(a.dragEndNode=f)),delete d.node,(c||f).draw())},_endDragAfter:function(a){a=a||{};var b=a.dragEndNode;a&&b&&b.fire("dragend",a,!0)}},Kinetic.Node.prototype.startDrag=function(){var a=Kinetic.DD,b=this.getStage(),c=this.getLayer(),d=b.getPointerPosition(),e=(this.getTransform().getTranslation(),this.getAbsolutePosition());d&&(a.node&&a.node.stopDrag(),a.node=this,a.offset.x=d.x-e.x,a.offset.y=d.y-e.y,a.anim.setLayers(c||this.getLayers()),a.anim.start())},Kinetic.Node.prototype.stopDrag=function(){var a=Kinetic.DD,b={};a._endDragBefore(b),a._endDragAfter(b)},Kinetic.Node.prototype.setDraggable=function(a){this._setAttr("draggable",a),this._dragChange()};var a=Kinetic.Node.prototype.destroy;Kinetic.Node.prototype.destroy=function(){var b=Kinetic.DD;b.node&&b.node._id===this._id&&this.stopDrag(),a.call(this)},Kinetic.Node.prototype.isDragging=function(){var a=Kinetic.DD;return a.node&&a.node._id===this._id&&a.isDragging},Kinetic.Node.prototype._listenDrag=function(){this._dragCleanup();var a=this;this.on("mousedown.kinetic touchstart.kinetic",function(b){Kinetic.DD.node||a.startDrag(b)})},Kinetic.Node.prototype._dragChange=function(){if(this.attrs.draggable)this._listenDrag();else{this._dragCleanup();var a=this.getStage(),b=Kinetic.DD;a&&b.node&&b.node._id===this._id&&b.node.stopDrag()}},Kinetic.Node.prototype._dragCleanup=function(){this.off("mousedown.kinetic"),this.off("touchstart.kinetic")},Kinetic.Node.addGetterSetter(Kinetic.Node,"dragBoundFunc"),Kinetic.Node.addGetter(Kinetic.Node,"draggable",!1),Kinetic.Node.prototype.isDraggable=Kinetic.Node.prototype.getDraggable;var b=document.getElementsByTagName("html")[0];b.addEventListener("mouseup",Kinetic.DD._endDragBefore,!0),b.addEventListener("touchend",Kinetic.DD._endDragBefore,!0),b.addEventListener("mouseup",Kinetic.DD._endDragAfter,!1),b.addEventListener("touchend",Kinetic.DD._endDragAfter,!1)}(),function(){Kinetic.Util.addMethods(Kinetic.Container,{__init:function(a){this.children=new Kinetic.Collection,Kinetic.Node.call(this,a)},getChildren:function(){return this.children},hasChildren:function(){return this.getChildren().length>0},removeChildren:function(){for(var a,b=this.children;b.length>0;)a=b[0],a.hasChildren()&&a.removeChildren(),a.remove();return this},destroyChildren:function(){for(var a=this.children;a.length>0;)a[0].destroy();return this},add:function(a){var b=(Kinetic.Global,this.children);return this._validateAdd(a),a.index=b.length,a.parent=this,b.push(a),this._fire("add",{child:a}),this},destroy:function(){this.hasChildren()&&this.destroyChildren(),Kinetic.Node.prototype.destroy.call(this)},get:function(a){var b,c,d,e,f,g,h,i=[],j=a.replace(/ /g,"").split(","),k=j.length;for(b=0;k>b;b++)if(d=j[b],"#"===d.charAt(0))f=this._getNodeById(d.slice(1)),f&&i.push(f);else if("."===d.charAt(0))e=this._getNodesByName(d.slice(1)),i=i.concat(e);else for(g=this.getChildren(),h=g.length,c=0;h>c;c++)i=i.concat(g[c]._get(d));return Kinetic.Collection.toCollection(i)},_getNodeById:function(a){var b=(this.getStage(),Kinetic.Global),c=b.ids[a];return void 0!==c&&this.isAncestorOf(c)?c:null},_getNodesByName:function(a){var b=Kinetic.Global,c=b.names[a]||[];return this._getDescendants(c)},_get:function(a){for(var b=Kinetic.Node.prototype._get.call(this,a),c=this.getChildren(),d=c.length,e=0;d>e;e++)b=b.concat(c[e]._get(a));return b},toObject:function(){var a=Kinetic.Node.prototype.toObject.call(this);a.children=[];for(var b=this.getChildren(),c=b.length,d=0;c>d;d++){var e=b[d];a.children.push(e.toObject())}return a},_getDescendants:function(a){for(var b=[],c=a.length,d=0;c>d;d++){var e=a[d];this.isAncestorOf(e)&&b.push(e)}return b},isAncestorOf:function(a){for(var b=a.getParent();b;){if(b._id===this._id)return!0;b=b.getParent()}return!1},clone:function(a){var b=Kinetic.Node.prototype.clone.call(this,a);return this.getChildren().each(function(a){b.add(a.clone())}),b},getAllIntersections:function(){for(var a=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),b=[],c=this.get("Shape"),d=c.length,e=0;d>e;e++){var f=c[e];f.isVisible()&&f.intersects(a)&&b.push(f)}return b},_setChildrenIndices:function(){for(var a=this.children,b=a.length,c=0;b>c;c++)a[c].index=c},drawScene:function(a){var b,c,d,e=this.getLayer(),f=!!this.getClipFunc();if(!a&&e&&(a=e.getCanvas()),this.isVisible()){for(f&&a._clip(this),b=this.children,d=b.length,c=0;d>c;c++)b[c].drawScene(a);f&&a.getContext().restore()}return this},drawHit:function(){var a,b=!!this.getClipFunc()&&"Stage"!==this.nodeType,c=0,d=0,e=[];if(this.shouldDrawHit()){for(b&&(a=this.getLayer().hitCanvas,a._clip(this)),e=this.children,d=e.length,c=0;d>c;c++)e[c].drawHit();b&&a.getContext().restore()}return this}}),Kinetic.Util.extend(Kinetic.Container,Kinetic.Node),Kinetic.Node.addGetterSetter(Kinetic.Container,"clipFunc")}(),function(){function a(a){a.fill()}function b(a){a.stroke()}function c(a){a.fill()}function d(a){a.stroke()}var e="beforeDraw",f="draw";Kinetic.Util.addMethods(Kinetic.Shape,{__init:function(e){this.nodeType="Shape",this._fillFunc=a,this._strokeFunc=b,this._fillFuncHit=c,this._strokeFuncHit=d;for(var f,g=Kinetic.Global.shapes;;)if(f=Kinetic.Util.getRandomColor(),f&&!(f in g))break;this.colorKey=f,g[f]=this,Kinetic.Node.call(this,e),this._setDrawFuncs()},hasChildren:function(){return!1},getChildren:function(){return[]},getContext:function(){return this.getLayer().getContext()},getCanvas:function(){return this.getLayer().getCanvas()},hasShadow:function(){return 0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())},hasFill:function(){return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())},_get:function(a){return this.className===a||this.nodeType===a?[this]:[]},intersects:function(){var a=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),b=this.getStage(),c=b.hitCanvas;c.clear(),this.drawScene(c);var d=c.context.getImageData(0|a.x,0|a.y,1,1).data;return d[3]>0},enableFill:function(){return this._setAttr("fillEnabled",!0),this},disableFill:function(){return this._setAttr("fillEnabled",!1),this},enableStroke:function(){return this._setAttr("strokeEnabled",!0),this},disableStroke:function(){return this._setAttr("strokeEnabled",!1),this},enableStrokeScale:function(){return this._setAttr("strokeScaleEnabled",!0),this},disableStrokeScale:function(){return this._setAttr("strokeScaleEnabled",!1),this},enableShadow:function(){return this._setAttr("shadowEnabled",!0),this},disableShadow:function(){return this._setAttr("shadowEnabled",!1),this},enableDashArray:function(){return this._setAttr("dashArrayEnabled",!0),this},disableDashArray:function(){return this._setAttr("dashArrayEnabled",!1),this},destroy:function(){return Kinetic.Node.prototype.destroy.call(this),delete Kinetic.Global.shapes[this.colorKey],this},drawScene:function(a){a=a||this.getLayer().getCanvas();var b=this.getDrawFunc(),c=a.getContext();return b&&this.isVisible()&&(c.save(),a._applyOpacity(this),a._applyLineJoin(this),a._applyAncestorTransforms(this),this._fireBeforeDrawEvents(),b.call(this,a),this._fireDrawEvents(),c.restore()),this},_fireBeforeDrawEvents:function(){this._fireAndBubble(e,{node:this})},_fireDrawEvents:function(){this._fireAndBubble(f,{node:this})},drawHit:function(){var a=this.getAttrs(),b=a.drawHitFunc||a.drawFunc,c=this.getLayer().hitCanvas,d=c.getContext();return b&&this.shouldDrawHit()&&(d.save(),c._applyLineJoin(this),c._applyAncestorTransforms(this),b.call(this,c),d.restore()),this},_setDrawFuncs:function(){!this.attrs.drawFunc&&this.drawFunc&&this.setDrawFunc(this.drawFunc),!this.attrs.drawHitFunc&&this.drawHitFunc&&this.setDrawHitFunc(this.drawHitFunc)}}),Kinetic.Util.extend(Kinetic.Shape,Kinetic.Node),Kinetic.Node.addColorGetterSetter(Kinetic.Shape,"stroke"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"lineJoin"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"lineCap"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"strokeWidth"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"drawFunc"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"drawHitFunc"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"dashArray"),Kinetic.Node.addColorGetterSetter(Kinetic.Shape,"shadowColor"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"shadowBlur"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"shadowOpacity"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillPatternImage"),Kinetic.Node.addColorGetterSetter(Kinetic.Shape,"fill"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillPatternX"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillPatternY"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillLinearGradientColorStops"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillRadialGradientStartRadius"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillRadialGradientEndRadius"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillRadialGradientColorStops"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillPatternRepeat"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillEnabled",!0),Kinetic.Node.addGetterSetter(Kinetic.Shape,"strokeEnabled",!0),Kinetic.Node.addGetterSetter(Kinetic.Shape,"shadowEnabled",!0),Kinetic.Node.addGetterSetter(Kinetic.Shape,"dashArrayEnabled",!0),Kinetic.Node.addGetterSetter(Kinetic.Shape,"fillPriority","color"),Kinetic.Node.addGetterSetter(Kinetic.Shape,"strokeScaleEnabled",!0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillPatternOffset",0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillPatternScale",1),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillLinearGradientStartPoint",0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillLinearGradientEndPoint",0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillRadialGradientStartPoint",0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"fillRadialGradientEndPoint",0),Kinetic.Node.addPointGetterSetter(Kinetic.Shape,"shadowOffset",0),Kinetic.Node.addRotationGetterSetter(Kinetic.Shape,"fillPatternRotation",0)}(),function(){function a(a,b){a.content.addEventListener(b,function(c){a[x+b](c)},!1)}var b="Stage",c="string",d="px",e="mouseout",f="mouseleave",g="mouseover",h="mouseenter",i="mousemove",j="mousedown",k="mouseup",l="click",m="dblclick",n="touchstart",o="touchend",p="tap",q="dbltap",r="touchmove",s="div",t="relative",u="inline-block",v="kineticjs-content",w=" ",x="_",y="container",z="",A=[j,i,k,e,n,r,o,g],B=A.length;Kinetic.Util.addMethods(Kinetic.Stage,{___init:function(a){Kinetic.Container.call(this,a),this.nodeType=b,this._id=Kinetic.Global.idCounter++,this._buildDOM(),this._bindContentEvents(),Kinetic.Global.stages.push(this)},_validateAdd:function(a){"Layer"!==a.getType()&&Kinetic.Util.error("You may only add layers to the stage.")},setContainer:function(a){return typeof a===c&&(a=document.getElementById(a)),this._setAttr(y,a),this},draw:function(){return Kinetic.Node.prototype.draw.call(this),this},setHeight:function(a){return Kinetic.Node.prototype.setHeight.call(this,a),this._resizeDOM(),this},setWidth:function(a){return Kinetic.Node.prototype.setWidth.call(this,a),this._resizeDOM(),this},clear:function(){var a,b=this.children,c=b.length;for(a=0;c>a;a++)b[a].clear();return this},destroy:function(){var a=this.content;Kinetic.Container.prototype.destroy.call(this),a&&Kinetic.Util._isInDocument(a)&&this.getContainer().removeChild(a)},getMousePosition:function(){return this.mousePos},getTouchPosition:function(){return this.touchPos},getPointerPosition:function(){return this.getTouchPosition()||this.getMousePosition()},getStage:function(){return this},getContent:function(){return this.content},toDataURL:function(a){function b(e){var f=i[e],j=f.toDataURL(),k=new Image;k.onload=function(){h.drawImage(k,0,0),e<i.length-1?b(e+1):a.callback(g.toDataURL(c,d))},k.src=j}a=a||{};var c=a.mimeType||null,d=a.quality||null,e=a.x||0,f=a.y||0,g=new Kinetic.SceneCanvas({width:a.width||this.getWidth(),height:a.height||this.getHeight(),pixelRatio:1}),h=g.getContext(),i=this.children;(e||f)&&h.translate(-1*e,-1*f),b(0)},toImage:function(a){var b=a.callback;a.callback=function(a){Kinetic.Util._getImage(a,function(a){b(a)})},this.toDataURL(a)},getIntersection:function(){var a,b,c=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),d=this.getChildren(),e=d.length,f=e-1;for(a=f;a>=0;a--)if(b=d[a].getIntersection(c))return b;return null},_resizeDOM:function(){if(this.content){var a,b,c=this.getWidth(),e=this.getHeight(),f=this.getChildren(),g=f.length;for(this.content.style.width=c+d,this.content.style.height=e+d,this.bufferCanvas.setSize(c,e,1),this.hitCanvas.setSize(c,e),a=0;g>a;a++)b=f[a],b.getCanvas().setSize(c,e),b.hitCanvas.setSize(c,e),b.draw()}},add:function(a){return Kinetic.Container.prototype.add.call(this,a),a.canvas.setSize(this.attrs.width,this.attrs.height),a.hitCanvas.setSize(this.attrs.width,this.attrs.height),a.draw(),this.content.appendChild(a.canvas.element),this},getParent:function(){return null},getLayer:function(){return null},getLayers:function(){return this.getChildren()},_setPointerPosition:function(a){a||(a=window.event),this._setMousePosition(a),this._setTouchPosition(a)},_bindContentEvents:function(){var b;for(b=0;B>b;b++)a(this,A[b])},_mouseover:function(a){this._fire(g,a)},_mouseout:function(a){this._setPointerPosition(a);var b=Kinetic.Global,c=this.targetShape;c&&!b.isDragging()&&(c._fireAndBubble(e,a),c._fireAndBubble(f,a),this.targetShape=null),this.mousePos=void 0,this._fire(e,a)},_mousemove:function(a){this._setPointerPosition(a);var b,c=Kinetic.Global,d=Kinetic.DD,j=this.getIntersection(this.getPointerPosition());j?(b=j.shape,b&&(c.isDragging()||255!==j.pixel[3]||this.targetShape&&this.targetShape._id===b._id?b._fireAndBubble(i,a):(b._fireAndBubble(g,a,this.targetShape),b._fireAndBubble(h,a,this.targetShape),this.targetShape&&(this.targetShape._fireAndBubble(e,a,b),this.targetShape._fireAndBubble(f,a,b)),this.targetShape=b))):(this._fire(i,a),this.targetShape&&!c.isDragging()&&(this.targetShape._fireAndBubble(e,a),this.targetShape._fireAndBubble(f,a),this.targetShape=null)),d&&d._drag(a),a.preventDefault&&a.preventDefault()},_mousedown:function(a){this._setPointerPosition(a);var b=Kinetic.Global,c=this.getIntersection(this.getPointerPosition()),d=c&&c.shape?c.shape:this;b.listenClickTap=!0,this.clickStartShape=d,d._fireAndBubble(j,a),a.preventDefault&&a.preventDefault()},_mouseup:function(a){this._setPointerPosition(a);var b=Kinetic.Global,c=this.getIntersection(this.getPointerPosition()),d=c&&c.shape?c.shape:this;d._fireAndBubble(k,a),b.listenClickTap&&d._id===this.clickStartShape._id&&(d._fireAndBubble(l,a),b.inDblClickWindow?(d._fireAndBubble(m,a),b.inDblClickWindow=!1):b.inDblClickWindow=!0,setTimeout(function(){b.inDblClickWindow=!1},b.dblClickWindow)),b.listenClickTap=!1,a.preventDefault&&a.preventDefault()},_touchstart:function(a){this._setPointerPosition(a);var b=Kinetic.Global,c=this.getIntersection(this.getPointerPosition()),d=c&&c.shape?c.shape:this;b.listenClickTap=!0,this.tapStartShape=d,d._fireAndBubble(n,a),d.isListening()&&a.preventDefault&&a.preventDefault()},_touchend:function(a){this._setPointerPosition(a);var b=Kinetic.Global,c=this.getIntersection(this.getPointerPosition()),d=c&&c.shape?c.shape:this;d._fireAndBubble(o,a),b.listenClickTap&&d._id===this.tapStartShape._id&&(d._fireAndBubble(p,a),b.inDblClickWindow?(d._fireAndBubble(q,a),b.inDblClickWindow=!1):b.inDblClickWindow=!0,setTimeout(function(){b.inDblClickWindow=!1},b.dblClickWindow)),b.listenClickTap=!1,d.isListening()&&a.preventDefault&&a.preventDefault()},_touchmove:function(a){this._setPointerPosition(a);var b=Kinetic.DD,c=this.getIntersection(this.getPointerPosition()),d=c&&c.shape?c.shape:this;d._fireAndBubble(r,a),b&&b._drag(a),d.isListening()&&a.preventDefault&&a.preventDefault()},_setMousePosition:function(a){var b=a.clientX-this._getContentPosition().left,c=a.clientY-this._getContentPosition().top;this.mousePos={x:b,y:c}},_setTouchPosition:function(a){var b,c,d;void 0!==a.touches&&1===a.touches.length&&(b=a.touches[0],c=b.clientX-this._getContentPosition().left,d=b.clientY-this._getContentPosition().top,this.touchPos={x:c,y:d})},_getContentPosition:function(){var a=this.content.getBoundingClientRect();return{top:a.top,left:a.left}},_buildDOM:function(){var a=this.getContainer();a.innerHTML=z,this.content=document.createElement(s),this.content.style.position=t,this.content.style.display=u,this.content.className=v,a.appendChild(this.content),this.bufferCanvas=new Kinetic.SceneCanvas,this.hitCanvas=new Kinetic.HitCanvas,this._resizeDOM()},_onContent:function(a,b){var c,d,e=a.split(w),f=e.length;for(c=0;f>c;c++)d=e[c],this.content.addEventListener(d,b,!1)}}),Kinetic.Util.extend(Kinetic.Stage,Kinetic.Container),Kinetic.Node.addGetter(Kinetic.Stage,"container")}(),function(){var a="#";Kinetic.Util.addMethods(Kinetic.Layer,{___init:function(a){this.nodeType="Layer",this.canvas=new Kinetic.SceneCanvas,this.hitCanvas=new Kinetic.HitCanvas,Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to a layer.")},getIntersection:function(){var b,c,d,e=Kinetic.Util._getXY(Array.prototype.slice.call(arguments));if(this.isVisible()&&this.isListening()){if(b=this.hitCanvas.context.getImageData(0|e.x,0|e.y,1,1).data,255===b[3])return c=Kinetic.Util._rgbToHex(b[0],b[1],b[2]),d=Kinetic.Global.shapes[a+c],{shape:d,pixel:b};if(b[0]>0||b[1]>0||b[2]>0||b[3]>0)return{pixel:b}}return null},drawScene:function(a){return a=a||this.getCanvas(),this.getClearBeforeDraw()&&a.clear(),Kinetic.Container.prototype.drawScene.call(this,a),this},drawHit:function(){var a=this.getLayer();return a&&a.getClearBeforeDraw()&&a.getHitCanvas().clear(),Kinetic.Container.prototype.drawHit.call(this),this},getCanvas:function(){return this.canvas},getHitCanvas:function(){return this.hitCanvas},getContext:function(){return this.getCanvas().getContext()},clear:function(){return this.getCanvas().clear(),this},setVisible:function(a){return Kinetic.Node.prototype.setVisible.call(this,a),a?(this.getCanvas().element.style.display="block",this.hitCanvas.element.style.display="block"):(this.getCanvas().element.style.display="none",this.hitCanvas.element.style.display="none"),this},setZIndex:function(a){Kinetic.Node.prototype.setZIndex.call(this,a);var b=this.getStage();return b&&(b.content.removeChild(this.getCanvas().element),a<b.getChildren().length-1?b.content.insertBefore(this.getCanvas().element,b.getChildren()[a+1].getCanvas().element):b.content.appendChild(this.getCanvas().element)),this},moveToTop:function(){Kinetic.Node.prototype.moveToTop.call(this);var a=this.getStage();a&&(a.content.removeChild(this.getCanvas().element),a.content.appendChild(this.getCanvas().element))},moveUp:function(){if(Kinetic.Node.prototype.moveUp.call(this)){var a=this.getStage();a&&(a.content.removeChild(this.getCanvas().element),this.index<a.getChildren().length-1?a.content.insertBefore(this.getCanvas().element,a.getChildren()[this.index+1].getCanvas().element):a.content.appendChild(this.getCanvas().element))}},moveDown:function(){if(Kinetic.Node.prototype.moveDown.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas().element),a.content.insertBefore(this.getCanvas().element,b[this.index+1].getCanvas().element)}}},moveToBottom:function(){if(Kinetic.Node.prototype.moveToBottom.call(this)){var a=this.getStage();if(a){var b=a.getChildren();a.content.removeChild(this.getCanvas().element),a.content.insertBefore(this.getCanvas().element,b[1].getCanvas().element)}}},getLayer:function(){return this},remove:function(){var a=this.getStage(),b=this.getCanvas(),c=b.element;return Kinetic.Node.prototype.remove.call(this),a&&b&&Kinetic.Util._isInDocument(c)&&a.content.removeChild(c),this}}),Kinetic.Util.extend(Kinetic.Layer,Kinetic.Container),Kinetic.Node.addGetterSetter(Kinetic.Layer,"clearBeforeDraw",!0)}(),function(){Kinetic.Util.addMethods(Kinetic.Group,{___init:function(a){this.nodeType="Group",Kinetic.Container.call(this,a)},_validateAdd:function(a){var b=a.getType();"Group"!==b&&"Shape"!==b&&Kinetic.Util.error("You may only add groups and shapes to groups.")}}),Kinetic.Util.extend(Kinetic.Group,Kinetic.Container)}(),function(){Kinetic.Rect=function(a){this.___init(a)},Kinetic.Rect.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Rect"},drawFunc:function(a){var b=a.getContext(),c=this.getCornerRadius(),d=this.getWidth(),e=this.getHeight();b.beginPath(),c?(b.moveTo(c,0),b.lineTo(d-c,0),b.arc(d-c,c,c,3*Math.PI/2,0,!1),b.lineTo(d,e-c),b.arc(d-c,e-c,c,0,Math.PI/2,!1),b.lineTo(c,e),b.arc(c,e-c,c,Math.PI/2,Math.PI,!1),b.lineTo(0,c),b.arc(c,c,c,Math.PI,3*Math.PI/2,!1)):b.rect(0,0,d,e),b.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Rect,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Rect,"cornerRadius",0)}(),function(){var a=2*Math.PI-1e-4,b="Circle";Kinetic.Circle=function(a){this.___init(a)},Kinetic.Circle.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b},drawFunc:function(b){var c=b.getContext();c.beginPath(),c.arc(0,0,this.getRadius(),0,a,!1),c.closePath(),b.fillStroke(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius(a/2)},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius(a/2)}},Kinetic.Util.extend(Kinetic.Circle,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Circle,"radius",0)}(),function(){var a=2*Math.PI-1e-4,b="Ellipse";Kinetic.Ellipse=function(a){this.___init(a)},Kinetic.Ellipse.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className=b},drawFunc:function(b){var c=b.getContext(),d=this.getRadius();c.beginPath(),c.save(),d.x!==d.y&&c.scale(1,d.y/d.x),c.arc(0,0,d.x,0,a,!1),c.restore(),c.closePath(),b.fillStroke(this)},getWidth:function(){return 2*this.getRadius().x},getHeight:function(){return 2*this.getRadius().y},setWidth:function(a){Kinetic.Node.prototype.setWidth.call(this,a),this.setRadius({x:a/2})},setHeight:function(a){Kinetic.Node.prototype.setHeight.call(this,a),this.setRadius({y:a/2})}},Kinetic.Util.extend(Kinetic.Ellipse,Kinetic.Shape),Kinetic.Node.addPointGetterSetter(Kinetic.Ellipse,"radius",0)}(),function(){Kinetic.Wedge=function(a){this.___init(a)},Kinetic.Wedge.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Wedge"},drawFunc:function(a){var b=a.getContext();b.beginPath(),b.arc(0,0,this.getRadius(),0,this.getAngle(),this.getClockwise()),b.lineTo(0,0),b.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Wedge,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Wedge,"radius",0),Kinetic.Node.addRotationGetterSetter(Kinetic.Wedge,"angle",0),Kinetic.Node.addGetterSetter(Kinetic.Wedge,"clockwise",!1)}(),function(){var a="Image",b="crop",c="set";Kinetic.Image=function(a){this.___init(a)},Kinetic.Image.prototype={___init:function(b){Kinetic.Shape.call(this,b),this.className=a},drawFunc:function(a){var b,c,d,e,f,g,h=this.getWidth(),i=this.getHeight(),j=this,k=a.getContext(),l=this.getCrop();this.getFilter()&&this._applyFilter&&(this.applyFilter(),this._applyFilter=!1),g=this.filterCanvas?this.filterCanvas.getElement():this.getImage(),k.beginPath(),k.rect(0,0,h,i),k.closePath(),a.fillStroke(this),g&&(l?(c=l.x||0,d=l.y||0,e=l.width||0,f=l.height||0,b=[g,c,d,e,f,0,0,h,i]):b=[g,0,0,h,i],this.hasShadow()?a.applyShadow(this,function(){j._drawImage(k,b)}):this._drawImage(k,b))},drawHitFunc:function(a){var b=this.getWidth(),c=this.getHeight(),d=this.imageHitRegion,e=a.getContext();d?(e.drawImage(d,0,0,b,c),e.beginPath(),e.rect(0,0,b,c),e.closePath(),a.stroke(this)):(e.beginPath(),e.rect(0,0,b,c),e.closePath(),a.fillStroke(this))},applyFilter:function(){var a,b,c,d=this.getImage(),e=this.getWidth(),f=this.getHeight(),g=this.getFilter();a=this.filterCanvas?this.filterCanvas:this.filterCanvas=new Kinetic.SceneCanvas({width:e,height:f}),b=a.getContext();try{this._drawImage(b,[d,0,0,e,f]),c=b.getImageData(0,0,a.getWidth(),a.getHeight()),g.call(this,c),b.putImageData(c,0,0)}catch(h){this.clearFilter(),Kinetic.Util.warn("Unable to apply filter. "+h.message)}},clearFilter:function(){this.filterCanvas=null,this._applyFilter=!1},setCrop:function(){var a=[].slice.call(arguments),c=Kinetic.Util._getXY(a),d=Kinetic.Util._getSize(a),e=Kinetic.Util._merge(c,d);this._setAttr(b,Kinetic.Util._merge(e,this.getCrop()))},createImageHitRegion:function(a){var b,c,d,e,f,g=this,h=this.getWidth(),i=this.getHeight(),j=new Kinetic.Canvas({width:h,height:i}),k=j.getContext(),l=this.getImage();k.drawImage(l,0,0);try{for(b=k.getImageData(0,0,h,i),c=b.data,d=Kinetic.Util._hexToRgb(this.colorKey),e=0,f=c.length;f>e;e+=4)c[e+3]>0&&(c[e]=d.r,c[e+1]=d.g,c[e+2]=d.b);Kinetic.Util._getImage(b,function(b){g.imageHitRegion=b,a&&a()})}catch(m){Kinetic.Util.warn("Unable to create image hit region. "+m.message)}},clearImageHitRegion:function(){delete this.imageHitRegion},getWidth:function(){var a=this.getImage();return this.attrs.width||(a?a.width:0)},getHeight:function(){var a=this.getImage();return this.attrs.height||(a?a.height:0)},_drawImage:function(a,b){5===b.length?a.drawImage(b[0],b[1],b[2],b[3],b[4]):9===b.length&&a.drawImage(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])}},Kinetic.Util.extend(Kinetic.Image,Kinetic.Shape),Kinetic.Node.addFilterGetterSetter=function(a,b,c){this.addGetter(a,b,c),this.addFilterSetter(a,b)},Kinetic.Node.addFilterSetter=function(a,b){var d=c+Kinetic.Util._capitalize(b);a.prototype[d]=function(a){this._setAttr(b,a),this._applyFilter=!0}},Kinetic.Node.addGetterSetter(Kinetic.Image,"image"),Kinetic.Node.addGetter(Kinetic.Image,"crop"),Kinetic.Node.addFilterGetterSetter(Kinetic.Image,"filter")}(),function(){Kinetic.Polygon=function(a){this.___init(a)},Kinetic.Polygon.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Polygon"},drawFunc:function(a){var b=a.getContext(),c=this.getPoints(),d=c.length;b.beginPath(),b.moveTo(c[0].x,c[0].y);for(var e=1;d>e;e++)b.lineTo(c[e].x,c[e].y);b.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Polygon,Kinetic.Shape),Kinetic.Node.addPointsGetterSetter(Kinetic.Polygon,"points")}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="auto",d="Calibri",e="canvas",f="center",g="Change.kinetic",h="2d",i="-",j="",k="left",l="text",m="Text",n="middle",o="normal",p="px ",q=" ",r="right",s="word",t="char",u="none",v=["fontFamily","fontSize","fontStyle","padding","align","lineHeight","text","width","height","wrap"],w=v.length,x=document.createElement(e).getContext(h);Kinetic.Text=function(a){this.___init(a)},Kinetic.Text.prototype={___init:function(d){var e=this;void 0===d.width&&(d.width=c),void 0===d.height&&(d.height=c),Kinetic.Shape.call(this,d),this._fillFunc=a,this._strokeFunc=b,this.className=m;for(var f=0;w>f;f++)this.on(v[f]+g,e._setTextData);this._setTextData()},drawFunc:function(a){var b=a.getContext(),c=this.getPadding(),d=(this.getFontStyle(),this.getFontSize(),this.getFontFamily(),this.getTextHeight()),e=this.getLineHeight()*d,g=this.textArr,h=g.length,i=this.getWidth();b.font=this._getContextFont(),b.textBaseline=n,b.textAlign=k,b.save(),b.translate(c,0),b.translate(0,c+d/2);for(var j=0;h>j;j++){var l=g[j],m=l.text,o=l.width;b.save(),this.getAlign()===r?b.translate(i-o-2*c,0):this.getAlign()===f&&b.translate((i-o-2*c)/2,0),this.partialText=m,a.fillStroke(this),b.restore(),b.translate(0,e)}b.restore()},drawHitFunc:function(a){var b=a.getContext(),c=this.getWidth(),d=this.getHeight();b.beginPath(),b.rect(0,0,c,d),b.closePath(),a.fillStroke(this)},setText:function(a){var b=Kinetic.Util._isString(a)?a:a.toString();this._setAttr(l,b)},getWidth:function(){return this.attrs.width===c?this.getTextWidth()+2*this.getPadding():this.attrs.width},getHeight:function(){return this.attrs.height===c?this.getTextHeight()*this.textArr.length*this.getLineHeight()+2*this.getPadding():this.attrs.height},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},_getTextSize:function(a){var b,c=x,d=this.getFontSize();return c.save(),c.font=this._getContextFont(),b=c.measureText(a),c.restore(),{width:b.width,height:parseInt(d,10)}
},_getContextFont:function(){return this.getFontStyle()+q+this.getFontSize()+p+this.getFontFamily()},_addTextLine:function(a,b){return this.textArr.push({text:a,width:b})},_getTextWidth:function(a){return x.measureText(a).width},_setTextData:function(){var a=this.getText().split("\n"),b=+this.getFontSize(),d=0,e=this.getLineHeight()*b,f=this.attrs.width,g=this.attrs.height,h=f!==c,j=g!==c,k=this.getPadding(),l=f-2*k,m=g-2*k,n=0,o=this.getWrap(),r=o!==u,s=o!==t&&r;this.textArr=[],x.save(),x.font=this.getFontStyle()+q+b+p+this.getFontFamily();for(var v=0,w=a.length;w>v;++v){var y=a[v],z=this._getTextWidth(y);if(h&&z>l)for(;y.length>0;){for(var A=0,B=y.length,C="",D=0;B>A;){var E=A+B>>>1,F=y.slice(0,E+1),G=this._getTextWidth(F);l>=G?(A=E+1,C=F,D=G):B=E}if(!C)break;if(s){var H=Math.max(C.lastIndexOf(q),C.lastIndexOf(i))+1;H>0&&(A=H,C=C.slice(0,A),D=this._getTextWidth(C))}if(this._addTextLine(C,D),n+=e,!r||j&&n+e>m)break;if(y=y.slice(A),y.length>0&&(z=this._getTextWidth(y),l>=z)){this._addTextLine(y,z),n+=e;break}}else this._addTextLine(y,z),n+=e,d=Math.max(d,z);if(j&&n+e>m)break}x.restore(),this.textHeight=b,this.textWidth=d}},Kinetic.Util.extend(Kinetic.Text,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Text,"fontFamily",d),Kinetic.Node.addGetterSetter(Kinetic.Text,"fontSize",12),Kinetic.Node.addGetterSetter(Kinetic.Text,"fontStyle",o),Kinetic.Node.addGetterSetter(Kinetic.Text,"padding",0),Kinetic.Node.addGetterSetter(Kinetic.Text,"align",k),Kinetic.Node.addGetterSetter(Kinetic.Text,"lineHeight",1),Kinetic.Node.addGetterSetter(Kinetic.Text,"wrap",s),Kinetic.Node.addGetter(Kinetic.Text,l,j),Kinetic.Node.addSetter(Kinetic.Text,"width"),Kinetic.Node.addSetter(Kinetic.Text,"height")}(),function(){Kinetic.Line=function(a){this.___init(a)},Kinetic.Line.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Line"},drawFunc:function(a){var b,c,d=this.getPoints(),e=d.length,f=a.getContext();for(f.beginPath(),f.moveTo(d[0].x,d[0].y),b=1;e>b;b++)c=d[b],f.lineTo(c.x,c.y);a.stroke(this)}},Kinetic.Util.extend(Kinetic.Line,Kinetic.Shape),Kinetic.Node.addPointsGetterSetter(Kinetic.Line,"points")}(),function(){Kinetic.Spline=function(a){this.___init(a)},Kinetic.Spline.prototype={___init:function(a){var b=this;Kinetic.Shape.call(this,a),this.className="Spline",this.on("pointsChange.kinetic tensionChange.kinetic",function(){b._setAllPoints()}),this._setAllPoints()},drawFunc:function(a){var b,c,d,e,f=this.getPoints(),g=f.length,h=a.getContext(),i=this.getTension();if(h.beginPath(),h.moveTo(f[0].x,f[0].y),0!==i&&g>2){for(b=this.allPoints,c=b.length,d=2,h.quadraticCurveTo(b[0].x,b[0].y,b[1].x,b[1].y);c-1>d;)h.bezierCurveTo(b[d].x,b[d++].y,b[d].x,b[d++].y,b[d].x,b[d++].y);h.quadraticCurveTo(b[c-1].x,b[c-1].y,f[g-1].x,f[g-1].y)}else for(d=1;g>d;d++)e=f[d],h.lineTo(e.x,e.y);a.stroke(this)},_setAllPoints:function(){this.allPoints=Kinetic.Util._expandPoints(this.getPoints(),this.getTension())}},Kinetic.Util.extend(Kinetic.Spline,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Spline,"tension",1),Kinetic.Node.addPointsGetterSetter(Kinetic.Spline,"points")}(),function(){Kinetic.Blob=function(a){this.___init(a)},Kinetic.Blob.prototype={___init:function(a){var b=this;Kinetic.Shape.call(this,a),this.className="Blob",this.on("pointsChange.kinetic tensionChange.kinetic",function(){b._setAllPoints()}),this._setAllPoints()},drawFunc:function(a){var b,c,d,e,f=this.getPoints(),g=f.length,h=a.getContext(),i=this.getTension();if(h.beginPath(),h.moveTo(f[0].x,f[0].y),0!==i&&g>2)for(b=this.allPoints,c=b.length,d=0;c-1>d;)h.bezierCurveTo(b[d].x,b[d++].y,b[d].x,b[d++].y,b[d].x,b[d++].y);else for(d=1;g>d;d++)e=f[d],h.lineTo(e.x,e.y);h.closePath(),a.fillStroke(this)},_setAllPoints:function(){var a=this.getPoints(),b=a.length,c=this.getTension(),d=Kinetic.Util,e=d._getControlPoints(a[b-1],a[0],a[1],c),f=d._getControlPoints(a[b-2],a[b-1],a[0],c);this.allPoints=Kinetic.Util._expandPoints(this.getPoints(),this.getTension()),this.allPoints.unshift(e[1]),this.allPoints.push(f[0]),this.allPoints.push(a[b-1]),this.allPoints.push(f[1]),this.allPoints.push(e[0]),this.allPoints.push(a[0])}},Kinetic.Util.extend(Kinetic.Blob,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Blob,"tension",1),Kinetic.Node.addPointsGetterSetter(Kinetic.Blob,"points")}(),function(){Kinetic.Sprite=function(a){this.___init(a)},Kinetic.Sprite.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Sprite",this.anim=new Kinetic.Animation;var b=this;this.on("animationChange.kinetic",function(){b.setIndex(0)})},drawFunc:function(a){var b=this.getAnimation(),c=this.getIndex(),d=this.getAnimations()[b][c],e=a.getContext(),f=this.getImage();f&&e.drawImage(f,d.x,d.y,d.width,d.height,0,0,d.width,d.height)},drawHitFunc:function(a){var b=this.getAnimation(),c=this.getIndex(),d=this.getAnimations()[b][c],e=a.getContext();e.beginPath(),e.rect(0,0,d.width,d.height),e.closePath(),a.fill(this)},start:function(){var a=this,b=this.getLayer();this.anim.setLayers(b),this.interval=setInterval(function(){var b=a.getIndex();a._updateIndex(),a.afterFrameFunc&&b===a.afterFrameIndex&&(a.afterFrameFunc(),delete a.afterFrameFunc,delete a.afterFrameIndex)},1e3/this.getFrameRate()),this.anim.start()},stop:function(){this.anim.stop(),clearInterval(this.interval)},afterFrame:function(a,b){this.afterFrameIndex=a,this.afterFrameFunc=b},_updateIndex:function(){var a=this.getIndex(),b=this.getAnimation(),c=this.getAnimations(),d=c[b],e=d.length;e-1>a?this.setIndex(a+1):this.setIndex(0)}},Kinetic.Util.extend(Kinetic.Sprite,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Sprite,"animation"),Kinetic.Node.addGetterSetter(Kinetic.Sprite,"animations"),Kinetic.Node.addGetterSetter(Kinetic.Sprite,"image"),Kinetic.Node.addGetterSetter(Kinetic.Sprite,"index",0),Kinetic.Node.addGetterSetter(Kinetic.Sprite,"frameRate",17)}(),function(){Kinetic.Path=function(a){this.___init(a)},Kinetic.Path.prototype={___init:function(a){this.dataArray=[];var b=this;Kinetic.Shape.call(this,a),this.className="Path",this.dataArray=Kinetic.Path.parsePathData(this.getData()),this.on("dataChange.kinetic",function(){b.dataArray=Kinetic.Path.parsePathData(this.getData())})},drawFunc:function(a){var b=this.dataArray,c=a.getContext();c.beginPath();for(var d=0;d<b.length;d++){var e=b[d].command,f=b[d].points;switch(e){case"L":c.lineTo(f[0],f[1]);break;case"M":c.moveTo(f[0],f[1]);break;case"C":c.bezierCurveTo(f[0],f[1],f[2],f[3],f[4],f[5]);break;case"Q":c.quadraticCurveTo(f[0],f[1],f[2],f[3]);break;case"A":var g=f[0],h=f[1],i=f[2],j=f[3],k=f[4],l=f[5],m=f[6],n=f[7],o=i>j?i:j,p=i>j?1:i/j,q=i>j?j/i:1;c.translate(g,h),c.rotate(m),c.scale(p,q),c.arc(0,0,o,k,k+l,1-n),c.scale(1/p,1/q),c.rotate(-m),c.translate(-g,-h);break;case"z":c.closePath()}}a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Path,Kinetic.Shape),Kinetic.Path.getLineLength=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},Kinetic.Path.getPointOnLine=function(a,b,c,d,e,f,g){void 0===f&&(f=b),void 0===g&&(g=c);var h=(e-c)/(d-b+1e-8),i=Math.sqrt(a*a/(1+h*h));b>d&&(i*=-1);var j,k=h*i;if((g-c)/(f-b+1e-8)===h)j={x:f+i,y:g+k};else{var l,m,n=this.getLineLength(b,c,d,e);if(1e-8>n)return void 0;var o=(f-b)*(d-b)+(g-c)*(e-c);o/=n*n,l=b+o*(d-b),m=c+o*(e-c);var p=this.getLineLength(f,g,l,m),q=Math.sqrt(a*a-p*p);i=Math.sqrt(q*q/(1+h*h)),b>d&&(i*=-1),k=h*i,j={x:l+i,y:m+k}}return j},Kinetic.Path.getPointOnCubicBezier=function(a,b,c,d,e,f,g,h,i){function j(a){return a*a*a}function k(a){return 3*a*a*(1-a)}function l(a){return 3*a*(1-a)*(1-a)}function m(a){return(1-a)*(1-a)*(1-a)}var n=h*j(a)+f*k(a)+d*l(a)+b*m(a),o=i*j(a)+g*k(a)+e*l(a)+c*m(a);return{x:n,y:o}},Kinetic.Path.getPointOnQuadraticBezier=function(a,b,c,d,e,f,g){function h(a){return a*a}function i(a){return 2*a*(1-a)}function j(a){return(1-a)*(1-a)}var k=f*h(a)+d*i(a)+b*j(a),l=g*h(a)+e*i(a)+c*j(a);return{x:k,y:l}},Kinetic.Path.getPointOnEllipticalArc=function(a,b,c,d,e,f){var g=Math.cos(f),h=Math.sin(f),i={x:c*Math.cos(e),y:d*Math.sin(e)};return{x:a+(i.x*g-i.y*h),y:b+(i.x*h+i.y*g)}},Kinetic.Path.parsePathData=function(a){if(!a)return[];var b=a,c=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];b=b.replace(new RegExp(" ","g"),",");for(var d=0;d<c.length;d++)b=b.replace(new RegExp(c[d],"g"),"|"+c[d]);var e=b.split("|"),f=[],g=0,h=0;for(d=1;d<e.length;d++){var i=e[d],j=i.charAt(0);i=i.slice(1),i=i.replace(new RegExp(",-","g"),"-"),i=i.replace(new RegExp("-","g"),",-"),i=i.replace(new RegExp("e,-","g"),"e-");var k=i.split(",");k.length>0&&""===k[0]&&k.shift();for(var l=0;l<k.length;l++)k[l]=parseFloat(k[l]);for(;k.length>0&&!isNaN(k[0]);){var m,n,o,p,q,r,s,t,u,v,w=null,x=[],y=g,z=h;switch(j){case"l":g+=k.shift(),h+=k.shift(),w="L",x.push(g,h);break;case"L":g=k.shift(),h=k.shift(),x.push(g,h);break;case"m":g+=k.shift(),h+=k.shift(),w="M",x.push(g,h),j="l";break;case"M":g=k.shift(),h=k.shift(),w="M",x.push(g,h),j="L";break;case"h":g+=k.shift(),w="L",x.push(g,h);break;case"H":g=k.shift(),w="L",x.push(g,h);break;case"v":h+=k.shift(),w="L",x.push(g,h);break;case"V":h=k.shift(),w="L",x.push(g,h);break;case"C":x.push(k.shift(),k.shift(),k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"c":x.push(g+k.shift(),h+k.shift(),g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"S":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,k.shift(),k.shift()),g=k.shift(),h=k.shift(),w="C",x.push(g,h);break;case"s":n=g,o=h,m=f[f.length-1],"C"===m.command&&(n=g+(g-m.points[2]),o=h+(h-m.points[3])),x.push(n,o,g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="C",x.push(g,h);break;case"Q":x.push(k.shift(),k.shift()),g=k.shift(),h=k.shift(),x.push(g,h);break;case"q":x.push(g+k.shift(),h+k.shift()),g+=k.shift(),h+=k.shift(),w="Q",x.push(g,h);break;case"T":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g=k.shift(),h=k.shift(),w="Q",x.push(n,o,g,h);break;case"t":n=g,o=h,m=f[f.length-1],"Q"===m.command&&(n=g+(g-m.points[0]),o=h+(h-m.points[1])),g+=k.shift(),h+=k.shift(),w="Q",x.push(n,o,g,h);break;case"A":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g=k.shift(),h=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r);break;case"a":p=k.shift(),q=k.shift(),r=k.shift(),s=k.shift(),t=k.shift(),u=g,v=h,g+=k.shift(),h+=k.shift(),w="A",x=this.convertEndpointToCenterParameterization(u,v,g,h,s,t,p,q,r)}f.push({command:w||j,points:x,start:{x:y,y:z},pathLength:this.calcLength(y,z,w||j,x)})}("z"===j||"Z"===j)&&f.push({command:"z",points:[],start:void 0,pathLength:0})}return f},Kinetic.Path.calcLength=function(a,b,c,d){var e,f,g,h=Kinetic.Path;switch(c){case"L":return h.getLineLength(a,b,d[0],d[1]);case"C":for(e=0,f=h.getPointOnCubicBezier(0,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),t=.01;1>=t;t+=.01)g=h.getPointOnCubicBezier(t,a,b,d[0],d[1],d[2],d[3],d[4],d[5]),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"Q":for(e=0,f=h.getPointOnQuadraticBezier(0,a,b,d[0],d[1],d[2],d[3]),t=.01;1>=t;t+=.01)g=h.getPointOnQuadraticBezier(t,a,b,d[0],d[1],d[2],d[3]),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return e;case"A":e=0;var i=d[4],j=d[5],k=d[4]+j,l=Math.PI/180;if(Math.abs(i-k)<l&&(l=Math.abs(i-k)),f=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],i,0),0>j)for(t=i-l;t>k;t-=l)g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],t,0),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;else for(t=i+l;k>t;t+=l)g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],t,0),e+=h.getLineLength(f.x,f.y,g.x,g.y),f=g;return g=h.getPointOnEllipticalArc(d[0],d[1],d[2],d[3],k,0),e+=h.getLineLength(f.x,f.y,g.x,g.y)}return 0},Kinetic.Path.convertEndpointToCenterParameterization=function(a,b,c,d,e,f,g,h,i){var j=i*(Math.PI/180),k=Math.cos(j)*(a-c)/2+Math.sin(j)*(b-d)/2,l=-1*Math.sin(j)*(a-c)/2+Math.cos(j)*(b-d)/2,m=k*k/(g*g)+l*l/(h*h);m>1&&(g*=Math.sqrt(m),h*=Math.sqrt(m));var n=Math.sqrt((g*g*h*h-g*g*l*l-h*h*k*k)/(g*g*l*l+h*h*k*k));e==f&&(n*=-1),isNaN(n)&&(n=0);var o=n*g*l/h,p=n*-h*k/g,q=(a+c)/2+Math.cos(j)*o-Math.sin(j)*p,r=(b+d)/2+Math.sin(j)*o+Math.cos(j)*p,s=function(a){return Math.sqrt(a[0]*a[0]+a[1]*a[1])},t=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(s(a)*s(b))},u=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(t(a,b))},v=u([1,0],[(k-o)/g,(l-p)/h]),w=[(k-o)/g,(l-p)/h],x=[(-1*k-o)/g,(-1*l-p)/h],y=u(w,x);return t(w,x)<=-1&&(y=Math.PI),t(w,x)>=1&&(y=0),0===f&&y>0&&(y-=2*Math.PI),1==f&&0>y&&(y+=2*Math.PI),[q,r,g,h,v,y,j,f]},Kinetic.Node.addGetterSetter(Kinetic.Path,"data")}(),function(){function a(a){a.fillText(this.partialText,0,0)}function b(a){a.strokeText(this.partialText,0,0)}var c="",d="Calibri",e="normal";Kinetic.TextPath=function(a){this.___init(a)},Kinetic.TextPath.prototype={___init:function(c){var d=this;this.dummyCanvas=document.createElement("canvas"),this.dataArray=[],Kinetic.Shape.call(this,c),this._fillFunc=a,this._strokeFunc=b,this.className="TextPath",this.dataArray=Kinetic.Path.parsePathData(this.attrs.data),this.on("dataChange.kinetic",function(){d.dataArray=Kinetic.Path.parsePathData(this.attrs.data)}),this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic",d._setTextData),d._setTextData()},drawFunc:function(a){var b=(this.charArr,a.getContext());b.font=this._getContextFont(),b.textBaseline="middle",b.textAlign="left",b.save();for(var c=this.glyphInfo,d=0;d<c.length;d++){b.save();var e=c[d].p0;c[d].p1,parseFloat(this.attrs.fontSize),b.translate(e.x,e.y),b.rotate(c[d].rotation),this.partialText=c[d].text,a.fillStroke(this),b.restore()}b.restore()},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},setText:function(a){Kinetic.Text.prototype.setText.call(this,a)},_getTextSize:function(a){var b=this.dummyCanvas,c=b.getContext("2d");c.save(),c.font=this._getContextFont();var d=c.measureText(a);return c.restore(),{width:d.width,height:parseInt(this.attrs.fontSize,10)}},_setTextData:function(){var a=this,b=this._getTextSize(this.attrs.text);this.textWidth=b.width,this.textHeight=b.height,this.glyphInfo=[];for(var c,d,e,f=this.attrs.text.split(""),g=-1,h=0,i=function(){h=0;for(var b=a.dataArray,d=g+1;d<b.length;d++){if(b[d].pathLength>0)return g=d,b[d];"M"==b[d].command&&(c={x:b[d].points[0],y:b[d].points[1]})}return{}},j=function(b){var f=a._getTextSize(b).width,g=0,j=0;for(d=void 0;Math.abs(f-g)/f>.01&&25>j;){j++;for(var k=g;void 0===e;)e=i(),e&&k+e.pathLength<f&&(k+=e.pathLength,e=void 0);if(e==={}||void 0===c)return void 0;var l=!1;switch(e.command){case"L":Kinetic.Path.getLineLength(c.x,c.y,e.points[0],e.points[1])>f?d=Kinetic.Path.getPointOnLine(f,c.x,c.y,e.points[0],e.points[1],c.x,c.y):e=void 0;break;case"A":var m=e.points[4],n=e.points[5],o=e.points[4]+n;0===h?h=m+1e-8:f>g?h+=Math.PI/180*n/Math.abs(n):h-=Math.PI/360*n/Math.abs(n),Math.abs(h)>Math.abs(o)&&(h=o,l=!0),d=Kinetic.Path.getPointOnEllipticalArc(e.points[0],e.points[1],e.points[2],e.points[3],h,e.points[6]);break;case"C":0===h?h=f>e.pathLength?1e-8:f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnCubicBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3],e.points[4],e.points[5]);break;case"Q":0===h?h=f/e.pathLength:f>g?h+=(f-g)/e.pathLength:h-=(g-f)/e.pathLength,h>1&&(h=1,l=!0),d=Kinetic.Path.getPointOnQuadraticBezier(h,e.start.x,e.start.y,e.points[0],e.points[1],e.points[2],e.points[3])}void 0!==d&&(g=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y)),l&&(l=!1,e=void 0)}},k=0;k<f.length&&(j(f[k]),void 0!==c&&void 0!==d);k++){var l=Kinetic.Path.getLineLength(c.x,c.y,d.x,d.y),m=0,n=Kinetic.Path.getPointOnLine(m+l/2,c.x,c.y,d.x,d.y),o=Math.atan2(d.y-c.y,d.x-c.x);this.glyphInfo.push({transposeX:n.x,transposeY:n.y,text:f[k],rotation:o,p0:c,p1:d}),c=d}}},Kinetic.TextPath.prototype._getContextFont=Kinetic.Text.prototype._getContextFont,Kinetic.Util.extend(Kinetic.TextPath,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.TextPath,"fontFamily",d),Kinetic.Node.addGetterSetter(Kinetic.TextPath,"fontSize",12),Kinetic.Node.addGetterSetter(Kinetic.TextPath,"fontStyle",e),Kinetic.Node.addGetter(Kinetic.TextPath,"text",c)}(),function(){Kinetic.RegularPolygon=function(a){this.___init(a)},Kinetic.RegularPolygon.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="RegularPolygon"},drawFunc:function(a){var b,c,d,e=a.getContext(),f=this.attrs.sides,g=this.attrs.radius;for(e.beginPath(),e.moveTo(0,0-g),b=1;f>b;b++)c=g*Math.sin(2*b*Math.PI/f),d=-1*g*Math.cos(2*b*Math.PI/f),e.lineTo(c,d);e.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.RegularPolygon,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.RegularPolygon,"radius",0),Kinetic.Node.addGetterSetter(Kinetic.RegularPolygon,"sides",0)}(),function(){Kinetic.Star=function(a){this.___init(a)},Kinetic.Star.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Star"},drawFunc:function(a){var b=a.getContext(),c=this.attrs.innerRadius,d=this.attrs.outerRadius,e=this.attrs.numPoints;b.beginPath(),b.moveTo(0,0-this.attrs.outerRadius);for(var f=1;2*e>f;f++){var g=0===f%2?d:c,h=g*Math.sin(f*Math.PI/e),i=-1*g*Math.cos(f*Math.PI/e);b.lineTo(h,i)}b.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Star,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Star,"numPoints",0),Kinetic.Node.addGetterSetter(Kinetic.Star,"innerRadius",0),Kinetic.Node.addGetterSetter(Kinetic.Star,"outerRadius",0)}(),function(){var a=["fontFamily","fontSize","fontStyle","padding","lineHeight","text"],b="Change.kinetic",c="none",d="up",e="right",f="down",g="left",h="Label",i=a.length;Kinetic.Label=function(a){this.____init(a)},Kinetic.Label.prototype={____init:function(a){var b=this;this.className=h,Kinetic.Group.call(this,a),this.on("add.kinetic",function(a){b._addListeners(a.child),b._sync()})},getText:function(){return this.get("Text")[0]},getTag:function(){return this.get("Tag")[0]},_addListeners:function(c){var d,e=this,f=function(){e._sync()};for(d=0;i>d;d++)c.on(a[d]+b,f)},getWidth:function(){return this.getText().getWidth()},getHeight:function(){return this.getText().getHeight()},_sync:function(){var a,b,c,h,i,j,k=this.getText(),l=this.getTag();if(k&&l){switch(a=k.getWidth(),b=k.getHeight(),c=l.getPointerDirection(),h=l.getPointerWidth(),pointerHeight=l.getPointerHeight(),i=0,j=0,c){case d:i=a/2,j=-1*pointerHeight;break;case e:i=a+h,j=b/2;break;case f:i=a/2,j=b+pointerHeight;break;case g:i=-1*h,j=b/2}l.setAttrs({x:-1*i,y:-1*j,width:a,height:b}),k.setAttrs({x:-1*i,y:-1*j})}}},Kinetic.Util.extend(Kinetic.Label,Kinetic.Group),Kinetic.Tag=function(a){this.___init(a)},Kinetic.Tag.prototype={___init:function(a){Kinetic.Shape.call(this,a),this.className="Tag"},drawFunc:function(a){var b=a.getContext(),c=this.getWidth(),h=this.getHeight(),i=this.getPointerDirection(),j=this.getPointerWidth(),k=this.getPointerHeight();this.getCornerRadius(),b.beginPath(),b.moveTo(0,0),i===d&&(b.lineTo((c-j)/2,0),b.lineTo(c/2,-1*k),b.lineTo((c+j)/2,0)),b.lineTo(c,0),i===e&&(b.lineTo(c,(h-k)/2),b.lineTo(c+j,h/2),b.lineTo(c,(h+k)/2)),b.lineTo(c,h),i===f&&(b.lineTo((c+j)/2,h),b.lineTo(c/2,h+k),b.lineTo((c-j)/2,h)),b.lineTo(0,h),i===g&&(b.lineTo(0,(h+k)/2),b.lineTo(-1*j,h/2),b.lineTo(0,(h-k)/2)),b.closePath(),a.fillStroke(this)}},Kinetic.Util.extend(Kinetic.Tag,Kinetic.Shape),Kinetic.Node.addGetterSetter(Kinetic.Tag,"pointerDirection",c),Kinetic.Node.addGetterSetter(Kinetic.Tag,"pointerWidth",0),Kinetic.Node.addGetterSetter(Kinetic.Tag,"pointerHeight",0),Kinetic.Node.addGetterSetter(Kinetic.Tag,"cornerRadius",0)}(),function(){Kinetic.Filters.Grayscale=function(a){for(var b=a.data,c=0;c<b.length;c+=4){var d=.34*b[c]+.5*b[c+1]+.16*b[c+2];b[c]=d,b[c+1]=d,b[c+2]=d}}}(),function(){Kinetic.Filters.Brighten=function(a){for(var b=this.getFilterBrightness(),c=a.data,d=0;d<c.length;d+=4)c[d]+=b,c[d+1]+=b,c[d+2]+=b},Kinetic.Node.addFilterGetterSetter(Kinetic.Image,"filterBrightness",0)}(),function(){Kinetic.Filters.Invert=function(a){for(var b=a.data,c=0;c<b.length;c+=4)b[c]=255-b[c],b[c+1]=255-b[c+1],b[c+2]=255-b[c+2]}}(),function(){function a(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function b(b,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=b.data,E=b.width,F=b.height,G=e+e+1,H=E-1,I=F-1,J=e+1,K=J*(J+1)/2,L=new a,M=null,N=L,O=null,P=null,Q=c[e],R=d[e];for(h=1;G>h;h++)N=N.next=new a,h==J&&(M=N);for(N.next=L,l=k=0,g=0;F>g;g++){for(u=v=w=x=m=n=o=p=0,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(h=1;J>h;h++)i=k+((h>H?H:h)<<2),m+=(N.r=y=D[i])*(C=J-h),n+=(N.g=z=D[i+1])*C,o+=(N.b=A=D[i+2])*C,p+=(N.a=B=D[i+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next;for(O=L,P=M,f=0;E>f;f++)D[k+3]=B=p*Q>>R,0!==B?(B=255/B,D[k]=(m*Q>>R)*B,D[k+1]=(n*Q>>R)*B,D[k+2]=(o*Q>>R)*B):D[k]=D[k+1]=D[k+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=l+((i=f+e+1)<H?i:H)<<2,u+=O.r=D[i],v+=O.g=D[i+1],w+=O.b=D[i+2],x+=O.a=D[i+3],m+=u,n+=v,o+=w,p+=x,O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=4;l+=E}for(f=0;E>f;f++){for(v=w=x=u=n=o=p=m=0,k=f<<2,q=J*(y=D[k]),r=J*(z=D[k+1]),s=J*(A=D[k+2]),t=J*(B=D[k+3]),m+=K*y,n+=K*z,o+=K*A,p+=K*B,N=L,h=0;J>h;h++)N.r=y,N.g=z,N.b=A,N.a=B,N=N.next;for(j=E,h=1;e>=h;h++)k=j+f<<2,m+=(N.r=y=D[k])*(C=J-h),n+=(N.g=z=D[k+1])*C,o+=(N.b=A=D[k+2])*C,p+=(N.a=B=D[k+3])*C,u+=y,v+=z,w+=A,x+=B,N=N.next,I>h&&(j+=E);for(k=f,O=L,P=M,g=0;F>g;g++)i=k<<2,D[i+3]=B=p*Q>>R,B>0?(B=255/B,D[i]=(m*Q>>R)*B,D[i+1]=(n*Q>>R)*B,D[i+2]=(o*Q>>R)*B):D[i]=D[i+1]=D[i+2]=0,m-=q,n-=r,o-=s,p-=t,q-=O.r,r-=O.g,s-=O.b,t-=O.a,i=f+((i=g+J)<I?i:I)*E<<2,m+=u+=O.r=D[i],n+=v+=O.g=D[i+1],o+=w+=O.b=D[i+2],p+=x+=O.a=D[i+3],O=O.next,q+=y=P.r,r+=z=P.g,s+=A=P.b,t+=B=P.a,u-=y,v-=z,w-=A,x-=B,P=P.next,k+=E}}var c=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],d=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];Kinetic.Filters.Blur=function(a){var c=0|this.getFilterRadius();c>0&&b(a,c)},Kinetic.Node.addFilterGetterSetter(Kinetic.Image,"filterRadius",0)}(),function(){function a(a,b,c){var d=4*(c*a.width+b),e=[];return e.push(a.data[d++],a.data[d++],a.data[d++],a.data[d++]),e}function b(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2))}function c(a){for(var b=[0,0,0],c=0;c<a.length;c++)b[0]+=a[c][0],b[1]+=a[c][1],b[2]+=a[c][2];return b[0]/=a.length,b[1]/=a.length,b[2]/=a.length,b}function d(d,e){var f=a(d,0,0),g=a(d,d.width-1,0),h=a(d,0,d.height-1),i=a(d,d.width-1,d.height-1),j=e||10;if(b(f,g)<j&&b(g,i)<j&&b(i,h)<j&&b(h,f)<j){for(var k=c([g,f,i,h]),l=[],m=0;m<d.width*d.height;m++){var n=b(k,[d.data[4*m],d.data[4*m+1],d.data[4*m+2]]);l[m]=j>n?0:255}return l}}function e(a,b){for(var c=0;c<a.width*a.height;c++)a.data[4*c+3]=b[c]}function f(a,b,c){for(var d=[1,1,1,1,0,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=2040===k?255:0}return g}function g(a,b,c){for(var d=[1,1,1,1,1,1,1,1,1],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k>=1020?255:0}return g}function h(a,b,c){for(var d=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],e=Math.round(Math.sqrt(d.length)),f=Math.floor(e/2),g=[],h=0;c>h;h++)for(var i=0;b>i;i++){for(var j=h*b+i,k=0,l=0;e>l;l++)for(var m=0;e>m;m++){var n=h+l-f,o=i+m-f;if(n>=0&&c>n&&o>=0&&b>o){var p=n*b+o,q=d[l*e+m];k+=a[p]*q}}g[j]=k}return g}Kinetic.Filters.Mask=function(a){var b=this.getFilterThreshold(),c=d(a,b);return c&&(c=f(c,a.width,a.height),c=g(c,a.width,a.height),c=h(c,a.width,a.height),e(a,c)),a},Kinetic.Node.addFilterGetterSetter(Kinetic.Image,"filterThreshold",0)}();
},{}],2:[function(_dereq_,module,exports){
/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	'use strict';

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (evt instanceof RegExp) {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (evt instanceof RegExp) {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

},{}],3:[function(_dereq_,module,exports){
"use strict";

/**
 * ArrayBuffer adapter consumes binary waveform data (data format version 1).
 * It is used as a data abstraction layer by `WaveformData`.
 *
 * This is supposed to be the fastest adapter ever:
 * * **Pros**: working directly in memory, everything is done by reference (including the offsetting)
 * * **Cons**: binary data are hardly readable without data format knowledge (and this is why this adapter exists).
 *
 * Also, it is recommended to use the `fromResponseData` factory.
 *
 * @see WaveformDataArrayBufferAdapter.fromResponseData
 * @param {DataView} response_data
 * @constructor
 */
var WaveformDataArrayBufferAdapter = module.exports = function WaveformDataArrayBufferAdapter(response_data){
  this.data = response_data;
};

/**
 * Detects if a set of data is suitable for the ArrayBuffer adapter.
 * It is used internally by `WaveformData.create` so you should not bother using it.
 *
 * @static
 * @param {Mixed} data
 * @returns {boolean}
 */
WaveformDataArrayBufferAdapter.isCompatible = function isCompatible(data){
  return data && typeof data === "object" && "byteLength" in data;
};

/**
 * Setup factory to create an adapter based on heterogeneous input formats.
 *
 * It is the preferred way to build an adapter instance.
 *
 * ```javascript
 * var arrayBufferAdapter = WaveformData.adapters.arraybuffer;
 * var xhr = new XMLHttpRequest();
 *
 * // .dat file generated by audiowaveform program
 * xhr.open("GET", "http://example.com/waveforms/track.dat");
 * xhr.responseType = "arraybuffer";
 * xhr.addEventListener("load", function onResponse(progressEvent){
 *  var responseData = progressEvent.target.response;
 *
 *  // doing stuff with the raw data ...
 *  // you only have access to WaveformDataArrayBufferAdapter API
 *  var adapter = arrayBufferAdapter.fromResponseData(responseData);
 *
 *  // or making things easy by using WaveformData ...
 *  // you have access WaveformData API
 *  var waveform = new WaveformData(responseData, arrayBufferAdapter);
 * });
 *
 * xhr.send();
 * ```

 * @static
 * @param {ArrayBuffer} response_data
 * @return {WaveformDataArrayBufferAdapter}
 */
WaveformDataArrayBufferAdapter.fromResponseData = function fromArrayBufferResponseData(response_data){
  return new WaveformDataArrayBufferAdapter(new DataView(response_data));
};

/**
 * @namespace WaveformDataArrayBufferAdapter
 */
WaveformDataArrayBufferAdapter.prototype = {
  /**
   * Returns the data format version number.
   *
   * @return {Integer} Version number of the consumed data format.
   */
  get version(){
    return this.data.getInt32(0, true);
  },
  /**
   * Indicates if the response body is encoded in 8bits.
   *
   * **Notice**: currently the adapter only deals with 8bits encoded data.
   * You should favor that too because of the smaller data network fingerprint.
   *
   * @return {boolean} True if data are declared to be 8bits encoded.
   */
  get is_8_bit(){
    return !!this.data.getUint32(4, true);
  },
  /**
   * Indicates if the response body is encoded in 16bits.
   *
   * @return {boolean} True if data are declared to be 16bits encoded.
   */
  get is_16_bit(){
    return !this.is_8_bit;
  },
  /**
   * Returns the number of samples per second.
   *
   * @return {Integer} Number of samples per second.
   */
  get sample_rate(){
    return this.data.getInt32(8, true);
  },
  /**
   * Returns the scale (number of samples per pixel).
   *
   * @return {Integer} Number of samples per pixel.
   */
  get scale(){
    return this.data.getInt32(12, true);
  },
  /**
   * Returns the length of the waveform data (number of data points).
   *
   * @return {Integer} Length of the waveform data.
   */
  get length(){
    return this.data.getUint32(16, true);
  },
  /**
   * Returns a value at a specific offset.
   *
   * @param {Integer} index
   * @return {number} waveform value
   */
  at: function at_sample(index){
    return Math.round(this.data.getInt8(20 + index));
  }
};

},{}],4:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  "arraybuffer": _dereq_("./arraybuffer.js"),
  "object": _dereq_("./object.js")
};
},{"./arraybuffer.js":3,"./object.js":5}],5:[function(_dereq_,module,exports){
"use strict";

/**
 * Object adapter consumes stringified JSON or JSON waveform data (data format version 1).
 * It is used as a data abstraction layer by `WaveformData`.
 *
 * This is supposed to be a fallback for browsers not supporting ArrayBuffer:
 * * **Pros**: easy to debug response_data and quite self describing.
 * * **Cons**: slower than ArrayBuffer, more memory consumption.
 *
 * Also, it is recommended to use the `fromResponseData` factory.
 *
 * @see WaveformDataObjectAdapter.fromResponseData
 * @param {String|Object} response_data JSON or stringified JSON
 * @constructor
 */
var WaveformDataObjectAdapter = module.exports = function WaveformDataObjectAdapter(response_data){
  this.data = response_data;
};

/**
 * Detects if a set of data is suitable for the Object adapter.
 * It is used internally by `WaveformData.create` so you should not bother using it.
 *
 * @static
 * @param {Mixed} data
 * @returns {boolean}
 */
WaveformDataObjectAdapter.isCompatible = function isCompatible(data){
  return data && (typeof data === "object" && "sample_rate" in data) || (typeof data === "string" && "sample_rate" in JSON.parse(data));
};

/**
 * Setup factory to create an adapter based on heterogeneous input formats.
 *
 * It is the preferred way to build an adapter instance.
 *
 * ```javascript
 * var objectAdapter = WaveformData.adapters.object;
 * var xhr = new XMLHttpRequest();
 *
 * // .dat file generated by audiowaveform program
 * xhr.open("GET", "http://example.com/waveforms/track.json");
 * xhr.responseType = "json";
 * xhr.addEventListener("load", function onResponse(progressEvent){
 *  var responseData = progressEvent.target.response;
 *
 *  // doing stuff with the raw data ...
 *  // you only have access to WaveformDataObjectAdapter API
 *  var adapter = objectAdapter.fromResponseData(responseData);
 *
 *  // or making things easy by using WaveformData ...
 *  // you have access WaveformData API
 *  var waveform = new WaveformData(responseData, objectAdapter);
 * });
 *
 * xhr.send();
 * ```

 * @static
 * @param {String|Object} response_data JSON or stringified JSON
 * @return {WaveformDataObjectAdapter}
 */
WaveformDataObjectAdapter.fromResponseData = function fromJSONResponseData(response_data){
  if (typeof response_data === "string"){
    return new WaveformDataObjectAdapter(JSON.parse(response_data));
  }
  else{
    return new WaveformDataObjectAdapter(response_data);
  }
};
/**
 * @namespace WaveformDataObjectAdapter
 */
WaveformDataObjectAdapter.prototype = {
  /**
   * Returns the data format version number.
   *
   * @return {Integer} Version number of the consumed data format.
   */
  get version(){
    return this.data.version || 1;
  },
  /**
   * Indicates if the response body is encoded in 8bits.
   *
   * **Notice**: currently the adapter only deals with 8bits encoded data.
   * You should favor that too because of the smaller data network fingerprint.
   *
   * @return {boolean} True if data are declared to be 8bits encoded.
   */
  get is_8_bit(){
    return this.data.bits === 8;
  },
  /**
   * Indicates if the response body is encoded in 16bits.
   *
   * @return {boolean} True if data are declared to be 16bits encoded.
   */
  get is_16_bit(){
    return !this.is_8_bit;
  },
  /**
   * Returns the number of samples per second.
   *
   * @return {Integer} Number of samples per second.
   */
  get sample_rate(){
    return this.data.sample_rate;
  },
  /**
   * Returns the scale (number of samples per pixel).
   *
   * @return {Integer} Number of samples per pixel.
   */
  get scale(){
    return this.data.samples_per_pixel;
  },
  /**
   * Returns the length of the waveform data (number of data points).
   *
   * @return {Integer} Length of the waveform data.
   */
  get length(){
    return this.data.length;
  },
  /**
   * Returns a value at a specific offset.
   *
   * @param {Integer} index
   * @return {number} waveform value
   */
  at: function at_sample(index){
    return Math.round(this.data.data[index]);
  }
};

},{}],6:[function(_dereq_,module,exports){
"use strict";

var WaveformData = _dereq_('../core.js');
WaveformData.adapters = _dereq_('../adapters');

/**
 * Creates a working WaveformData based on binary audio data.
 *
 * This is still quite experimental and the result will mostly depend of the
 * support state of the running browser.
 *
 * ```javascript
 * var xhr = new XMLHttpRequest();
 *
 * // URL of a CORS MP3/Ogg file
 * xhr.open("GET", "http://example.com/audio/track.ogg");
 * xhr.responseType = "arraybuffer";
 *
 * xhr.addEventListener("load", function onResponse(progressEvent){
 *   WaveformData.builders.webaudio(progressEvent.target.response, onProcessed(waveform){
 *     console.log(waveform.duration);
 *   });
 * });
 *
 * xhr.send();
 *  ```
 *
 * @todo use the errorCallback for `decodeAudioData` to handle possible failures
 * @todo use a Web Worker to offload processing of the binary data
 * @todo or use `SourceBuffer.appendBuffer` and `ProgressEvent` to stream the decoding
 * @todo abstract the number of channels, because it is assumed the audio file is stereo
 * @param {ArrayBuffer} raw_response
 * @param {callback} what to do once the decoding is done
 * @constructor
 */
function fromAudioObjectBuilder(raw_response, callback){
  var context = fromAudioObjectBuilder.getAudioContext();
  var scale = 512;
  var scale_adjuster = 127; // to produce an 8bit like value

  /*
   * The result will vary on the codec implentation of the browser.
   * We don't handle the case where the browser is unable to handle the decoding.
   *
   * @see https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#dfn-decodeAudioData
   *
   * Adapted from BlockFile::CalcSummary in Audacity, with permission.
   * @see https://code.google.com/p/audacity/source/browse/audacity-src/trunk/src/BlockFile.cpp
   */
  context.decodeAudioData(raw_response, function onAudioDecoded(audio_buffer){
    var data_length = Math.floor(audio_buffer.length / scale);
    var offset = 20;
    var data_object = new DataView(new ArrayBuffer(offset + data_length * 2));
    var left_channel, right_channel;
    var min_value = Infinity, max_value = -Infinity, scale_counter = scale;
    var buffer_length = audio_buffer.length;

    data_object.setInt32(0, 1, true);   //version
    data_object.setUint32(4, 1, true);   //is 8 bit
    data_object.setInt32(8, audio_buffer.sampleRate, true);   //sample rate
    data_object.setInt32(12, scale, true);   //scale
    data_object.setInt32(16, data_length, true);   //length

    left_channel = audio_buffer.getChannelData(0);
    right_channel = audio_buffer.getChannelData(0);

    for (var i = 0; i < buffer_length; i++){
      var sample = (left_channel[i] + right_channel[i]) / 2 * scale_adjuster;

      if (sample < min_value){
        min_value = sample;
      }

      if (sample > max_value){
        max_value = sample;
      }

      if (--scale_counter === 0){
        data_object.setInt8(offset++, Math.floor(min_value));
        data_object.setInt8(offset++, Math.floor(max_value));
        min_value = Infinity; max_value = -Infinity; scale_counter = scale;
      }
    }

    callback(new WaveformData(data_object.buffer, WaveformData.adapters.arraybuffer));
  });
}

fromAudioObjectBuilder.getAudioContext = function getAudioContext(){
  var AudioContext = window.AudioContext || window.webkitAudioContext;

  // jshint -W098: true
  return new AudioContext();
};

module.exports = fromAudioObjectBuilder;
},{"../adapters":4,"../core.js":7}],7:[function(_dereq_,module,exports){
"use strict";

var WaveformDataSegment = _dereq_("./segment.js");
var WaveformDataPoint = _dereq_("./point.js");

/**
 * Facade to iterate on audio waveform response.
 *
 * ```javascript
 *  var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
 *
 *  var json_waveform = new WaveformData(xhr.responseText, WaveformData.adapters.object);
 *
 *  var arraybuff_waveform = new WaveformData(getArrayBufferData(), WaveformData.adapters.arraybuffer);
 * ```
 *
 * ## Offsets
 *
 * An **offset** is a non-destructive way to iterate on a subset of data.
 *
 * It is the easiest way to **navigate** through data without having to deal with complex calculations.
 * Simply iterate over the data to display them.
 *
 * *Notice*: the default offset is the entire set of data.
 *
 * @param {String|ArrayBuffer|Mixed} response_data Waveform data, to be consumed by the related adapter.
 * @param {WaveformData.adapter|Function} adapter Backend adapter used to manage access to the data.
 * @constructor
 */
var WaveformData = module.exports = function WaveformData(response_data, adapter){
  /**
   * Backend adapter used to manage access to the data.
   *
   * @type {Object}
   */
  this.adapter = adapter.fromResponseData(response_data);

  /**
   * Defined segments.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   *
   * console.log(waveform.segments.speakerA);          // -> undefined
   *
   * waveform.set_segment(30, 90, "speakerA");
   *
   * console.log(waveform.segments.speakerA.start);    // -> 30
   * ```
   *
   * @type {Object} A hash of `WaveformDataSegment` objects.
   */
  this.segments = {};

  /**
   * Defined points.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   *
   * console.log(waveform.points.speakerA);          // -> undefined
   *
   * waveform.set_point(30, "speakerA");
   *
   * console.log(waveform.points.speakerA.timeStamp);    // -> 30
   * ```
   *
   * @type {Object} A hash of `WaveformDataPoint` objects.
   */
  this.points = {};

  this.offset(0, this.adapter.length);
};

/**
 * Creates an instance of WaveformData by guessing the adapter from the data type.
 * As an icing sugar, it will also do the detection job from an XMLHttpRequest response.
 *
 * ```javascript
 * var xhr = new XMLHttpRequest();
 * xhr.open("GET", "http://example.com/waveforms/track.dat");
 * xhr.responseType = "arraybuffer";
 *
 * xhr.addEventListener("load", function onResponse(progressEvent){
 *   var waveform = WaveformData.create(progressEvent.target);
 *
 *   console.log(waveform.duration);
 * });
 *
 * xhr.send();
 * ```
 *
 * @static
 * @throws TypeError
 * @param {XMLHttpRequest|Mixed} data
 * @return {WaveformData}
 */
WaveformData.create = function createFromResponseData(data){
  var adapter = null;
  var xhrData = null;

  if (data && typeof data === "object" && ("responseText" in data || "response" in data)){
    xhrData = ("responseType" in data) ? data.response : (data.responseText || data.response);
  }

  Object.keys(WaveformData.adapters).some(function(adapter_id){
    if (WaveformData.adapters[adapter_id].isCompatible(xhrData || data)){
      adapter = WaveformData.adapters[adapter_id];
      return true;
    }
  });

  if (adapter === null){
    throw new TypeError("Could not detect a WaveformData adapter from the input.");
  }

  return new WaveformData(xhrData || data, adapter);
};

/**
 * Public API for the Waveform Data manager.
 *
 * @namespace WaveformData
 */
WaveformData.prototype = {
  /**
   * Clamp an offset of data upon the whole response body.
   * Pros: it's just a reference, not a new array. So it's fast.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.offset_length);   // -> 150
   * console.log(waveform.min[0]);          // -> -12
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.min.length);      // -> 30
   * console.log(waveform.min[0]);          // -> -9
   * ```
   *
   * @param {Integer} start New beginning of the offset. (inclusive)
   * @param {Integer} end New ending of the offset (exclusive)
   */
  offset: function(start, end){
    var data_length = this.adapter.length;

    if (end < 0){
      throw new RangeError("End point must be non-negative.");
    }

    if (end <= start){
      throw new RangeError("We can't end prior to the starting point.");
    }

    if (start < 0){
      throw new RangeError("Start point must be non-negative.");
    }

    if (start >= data_length){
      throw new RangeError("Start point must be within range.");
    }

    if (end > data_length){
      end = data_length;
    }

    this.offset_start = start;
    this.offset_end = end;
    this.offset_length = end - start;
  },
  /**
   * Creates a new segment of data.
   * Pretty handy if you need to bookmark a duration and display it according to the current offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(Object.keys(waveform.segments));          // -> []
   *
   * waveform.set_segment(10, 120);
   * waveform.set_segment(30, 90, "speakerA");
   *
   * console.log(Object.keys(waveform.segments));          // -> ['default', 'speakerA']
   * console.log(waveform.segments.default.min.length);    // -> 110
   * console.log(waveform.segments.speakerA.min.length);   // -> 60
   * ```
   *
   * @param {Integer} start Beginning of the segment (inclusive)
   * @param {Integer} end Ending of the segment (exclusive)
   * @param {String*} identifier Unique identifier. If nothing is specified, *default* will be used as a value.
   * @return {WaveformDataSegment}
   */
  set_segment: function setSegment(start, end, identifier){
    identifier = identifier || "default";

    this.segments[identifier] = new WaveformDataSegment(this, start, end);

    return this.segments[identifier];
  },
  /**
   * Creates a new point of data.
   * Pretty handy if you need to bookmark a specific point and display it according to the current offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(Object.keys(waveform.points));          // -> []
   *
   * waveform.set_point(10);
   * waveform.set_point(30, "speakerA");
   *
   * console.log(Object.keys(waveform.points));          // -> ['default', 'speakerA']
   * ```
   *
   * @param {Integer} timeStamp the time to place the bookmark
   * @param {String*} identifier Unique identifier. If nothing is specified, *default* will be used as a value.
   * @return {WaveformDataPoint}
   */
  set_point: function setPoint(timeStamp, identifier){
    identifier = identifier || "default";

    this.points[identifier] = new WaveformDataPoint(this, timeStamp);

    return this.points[identifier];
  },
  /**
   * Removes a point of data.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(Object.keys(waveform.points));          // -> []
   *
   * waveform.set_point(30, "speakerA");
   * console.log(Object.keys(waveform.points));          // -> ['speakerA']
   * waveform.remove_point("speakerA");
   * console.log(Object.keys(waveform.points));          // -> []
   * ```
   *
   * @param {String*} identifier Unique identifier. If nothing is specified, *default* will be used as a value.
   * @return null
   */
  remove_point: function removePoint(identifier) {
    if(this.points[identifier]) {
      delete this.points[identifier];
    }
  },
  /**
   * Creates a new WaveformData object with resampled data.
   * Returns a rescaled waveform, to either fit the waveform to a specific width, or to a specific zoom level.
   *
   * **Note**: You may specify either the *width* or the *scale*, but not both. The `scale` will be deduced from the `width` you want to fit the data into.
   *
   * Adapted from Sequence::GetWaveDisplay in Audacity, with permission.
   *
   * ```javascript
   * // ...
   * var waveform = WaveformData.create({ ... });
   *
   * // fitting the data in a 500px wide canvas
   * var resampled_waveform = waveform.resample({ width: 500 });
   *
   * console.log(resampled_waveform.min.length);   // -> 500
   *
   * // zooming out on a 3 times less precise scale
   * var resampled_waveform = waveform.resample({ scale: waveform.adapter.scale * 3 });
   *
   * // partial resampling (to perform fast animations involving a resampling per animation frame)
   * var partially_resampled_waveform = waveform.resample({ width: 500, from: 0, to: 500 });
   *
   * // ...
   * ```
   *
   * @see https://code.google.com/p/audacity/source/browse/audacity-src/trunk/src/Sequence.cpp
   * @param {Number|{width: Number, scale: Number}} options Either a constraint width or a constraint sample rate
   * @return {WaveformData} New resampled object
   */
  resample: function(options){
    if (typeof options === 'number'){
      options = {
        width: options
      };
    }

    options.input_index = typeof options.input_index === 'number' ? options.input_index : null;
    options.output_index = typeof options.output_index === 'number' ? options.output_index : null;
    options.scale = typeof options.scale === 'number' ? options.scale : null;
    options.width = typeof options.width === 'number' ? options.width : null;

    var is_partial_resampling = Boolean(options.input_index) || Boolean(options.output_index);

    if (options.input_index !== null && (options.input_index >= 0) === false){
      throw new RangeError('options.input_index should be a positive integer value. ['+ options.input_index +']');
    }

    if (options.output_index !== null && (options.output_index >= 0) === false){
      throw new RangeError('options.output_index should be a positive integer value. ['+ options.output_index +']');
    }

    if (options.width !== null && (options.width > 0) === false){
      throw new RangeError('options.width should be a strictly positive integer value. ['+ options.width +']');
    }

    if (options.scale !== null && (options.scale > 0) === false){
      throw new RangeError('options.scale should be a strictly positive integer value. ['+ options.scale +']');
    }

    if (!options.scale && !options.width){
      throw new RangeError('You should provide either a resampling scale or a width in pixel the data should fit in.');
    }

    var definedPartialOptionsCount = ['width', 'scale', 'output_index', 'input_index'].reduce(function(count, key){
      return count + (options[key] === null ? 0 : 1);
    }, 0);

    if (is_partial_resampling && definedPartialOptionsCount !== 4) {
      throw new Error('Some partial resampling options are missing. You provided ' + definedPartialOptionsCount + ' of them over 4.');
    }

    var output_data = [];
    var samples_per_pixel = options.scale || Math.floor(this.duration * this.adapter.sample_rate / options.width);    //scale we want to reach
    var scale = this.adapter.scale;   //scale we are coming from
    var channel_count = 2;

    var input_buffer_size = this.adapter.length; //the amount of data we want to resample i.e. final zoom want to resample all data but for intermediate zoom we want to resample subset
    var input_index = options.input_index || 0; //is this start point? or is this the index at current scale
    var output_index = options.output_index || 0; //is this end point? or is this the index at scale we want to be?
    var min = input_buffer_size ? this.min_sample(input_index) : 0; //min value for peak in waveform
    var max = input_buffer_size ? this.max_sample(input_index) : 0; //max value for peak in waveform
    var min_value = -128;
    var max_value = 127;

    if (samples_per_pixel < scale){
      throw new Error("Zoom level "+samples_per_pixel+" too low, minimum: "+scale);
    }

    var where, prev_where, stop, value, last_input_index;

    var sample_at_pixel = function sample_at_pixel(x){
      return Math.floor(x * samples_per_pixel);
    };

    var add_sample = function add_sample(min, max){
      output_data.push(min, max);
    };

    while (input_index < input_buffer_size) {
      while (Math.floor(sample_at_pixel(output_index) / scale) <= input_index){
        if (output_index){
          add_sample(min, max);
        }

        last_input_index = input_index;

        output_index++;

        where      = sample_at_pixel(output_index);
        prev_where = sample_at_pixel(output_index - 1);

        if (where !== prev_where){
          min = max_value;
          max = min_value;
        }
      }

      where = sample_at_pixel(output_index);
      stop = Math.floor(where / scale);

      if (stop > input_buffer_size){
        stop = input_buffer_size;
      }

      while (input_index < stop){
        value = this.min_sample(input_index);

        if (value < min){
          min = value;
        }

        value = this.max_sample(input_index);

        if (value > max){
          max = value;
        }

        input_index++;
      }

      if (is_partial_resampling && (output_data.length / channel_count) >= options.width) {
        break;
      }
    }

    if (is_partial_resampling) {
      if ((output_data.length / channel_count) > options.width && input_index !== last_input_index){
        add_sample(min, max);
      }
    }
    else if(input_index !== last_input_index){
      add_sample(min, max);
    }

    return new WaveformData({
      version: this.adapter.version,
      samples_per_pixel: samples_per_pixel,
      length: output_data.length / channel_count,
      data: output_data,
      sample_rate: this.adapter.sample_rate
    }, WaveformData.adapters.object);
  },
  /**
   * Returns all the min peaks values.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.min.length);      // -> 150
   * console.log(waveform.min[0]);          // -> -12
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.min.length);      // -> 30
   * console.log(waveform.min[0]);          // -> -9
   * ```
   *
   * @api
   * @return {Array.<Integer>} Min values contained in the offset.
   */
  get min(){
    return this.offsetValues(this.offset_start, this.offset_length, 0);
  },
  /**
   * Returns all the max peaks values.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.max.length);      // -> 150
   * console.log(waveform.max[0]);          // -> 12
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.max.length);      // -> 30
   * console.log(waveform.max[0]);          // -> 5
   * ```
   *
   * @api
   * @return {Array.<Integer>} Max values contained in the offset.
   */
  get max(){
    return this.offsetValues(this.offset_start, this.offset_length, 1);
  },
  /**
   * Return the unpacked values for a particular offset.
   *
   * @param {Integer} start
   * @param {Integer} length
   * @param {Integer} correction The step to skip for each iteration (as the response body is [min, max, min, max...])
   * @return {Array.<Integer>}
   */
  offsetValues: function getOffsetValues(start, length, correction){
    var adapter = this.adapter;
    var values = [];

    correction += (start * 2);  //offsetting the positioning query

    for (var i = 0; i < length; i++){
      values.push(adapter.at((i * 2) + correction));
    }

    return values;
  },
  /**
   * Compute the duration in seconds of the audio file.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   * console.log(waveform.duration);    // -> 10.33333333333
   *
   * waveform.offset(20, 50);
   * console.log(waveform.duration);    // -> 10.33333333333
   * ```
   *
   * @api
   * @return {number} Duration of the audio waveform, in seconds.
   */
  get duration(){
    return (this.adapter.length * this.adapter.scale) / this.adapter.sample_rate;
  },
  /**
   * Return the duration in seconds of the current offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.offset_duration);    // -> 10.33333333333
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.offset_duration);    // -> 2.666666666667
   * ```
   *
   * @api
   * @return {number} Duration of the offset, in seconds.
   */
  get offset_duration(){
    return (this.offset_length * this.adapter.scale) / this.adapter.sample_rate;
  },
  /**
   * Return the number of pixels per second.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.pixels_per_second);       // -> 93.75
   * ```
   *
   * @api
   * @return {number} Number of pixels per second.
   */
  get pixels_per_second(){
    return this.adapter.sample_rate / this.adapter.scale;
  },
  /**
   * Return the amount of time represented by a single pixel.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.seconds_per_pixel);       // -> 0.010666666666666666
   * ```
   *
   * @return {number} Amount of time (in seconds) contained in a pixel.
   */
  get seconds_per_pixel(){
    return this.adapter.scale / this.adapter.sample_rate;
  },
  /**
   * Returns a value at a specific offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.at(20));              // -> -7
   * console.log(waveform.at(21));              // -> 12
   * ```
   *
   * @proxy
   * @param {Integer} index
   * @return {number} Offset value
   */
  at: function at_sample_proxy(index){
    return this.adapter.at(index);
  },
  /**
   * Return the pixel location for a certain time.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.at_time(0.0000000023));       // -> 10
   * ```
   * @param {number} time
   * @return {integer} Index location for a specific time.
   */
  at_time: function at_time(time){
    return Math.floor((time * this.adapter.sample_rate) / this.adapter.scale);
  },
  /**
   * Returns the time in seconds for a particular index
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.time(10));                    // -> 0.0000000023
   * ```
   *
   * @param {Integer} index
   * @return {number}
   */
  time: function time(index){
    return index * this.seconds_per_pixel;
  },
  /**
   * Return if a pixel lies within the current offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.in_offset(50));      // -> true
   * console.log(waveform.in_offset(120));     // -> true
   *
   * waveform.offset(100, 150);
   *
   * console.log(waveform.in_offset(50));      // -> false
   * console.log(waveform.in_offset(120));     // -> true
   * ```
   *
   * @param {number} pixel
   * @return {boolean} True if the pixel lies in the current offset, false otherwise.
   */
  in_offset: function isInOffset(pixel){
    return pixel >= this.offset_start && pixel < this.offset_end;
  },
  /**
   * Returns a min value for a specific offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.min_sample(10));      // -> -7
   * ```
   *
   * @param {Integer} offset
   * @return {Number} Offset min value
   */
  min_sample: function getMinValue(offset){
    return this.adapter.at(offset * 2);
  },
  /**
   * Returns a max value for a specific offset.
   *
   * ```javascript
   * var waveform = WaveformData.create({ ... });
   *
   * console.log(waveform.max_sample(10));      // -> 12
   * ```
   *
   * @param {Integer} offset
   * @return {Number} Offset max value
   */
  max_sample: function getMaxValue(offset){
    return this.adapter.at((offset * 2) + 1);
  }
};

/**
 * Available adapters to manage the data backends.
 *
 * @type {Object}
 */
WaveformData.adapters = {};


/**
 * WaveformData Adapter Structure
 *
 * @typedef {{from: Number, to: Number, platforms: {}}}
 */
WaveformData.adapter = function WaveformDataAdapter(response_data){
  this.data = response_data;
};

},{"./point.js":8,"./segment.js":9}],8:[function(_dereq_,module,exports){
"use strict";

/**
 * Points are an easy way to keep track bookmarks of the described audio file.
 *
 * They return values based on the actual offset. Which means if you change your offset and:
 *
 * * a point becomes **out of scope**, no data will be returned; 
 * * a point is **fully included in the offset**, its whole content will be returned.
 *
 * Points are created with the `WaveformData.set_point(timeStamp, name?)` method.
 *
 * @see WaveformData.prototype.set_point
 * @param {WaveformData} context WaveformData instance
 * @param {Integer} start Initial start index
 * @param {Integer} end Initial end index
 * @constructor
 */
var WaveformDataPoint = module.exports = function WaveformDataPoint(context, timeStamp){
  this.context = context;

  /**
   * Start index.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_point(10, "example");
   *
   * console.log(waveform.points.example.timeStamp);  // -> 10
   *
   * waveform.offset(20, 50);
   * console.log(waveform.points.example.timeStamp);  // -> 10
   *
   * waveform.offset(70, 100);
   * console.log(waveform.points.example.timeStamp);  // -> 10
   * ```
   * @type {Integer} Time Stamp of the point
   */
  this.timeStamp = timeStamp;
};

/**
 * @namespace WaveformDataPoint
 */
WaveformDataPoint.prototype = {
  /**
   * Indicates if the point has some visible part in the actual WaveformData offset.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_point(10, "example");
   *
   * console.log(waveform.points.example.visible);        // -> true
   *
   * waveform.offset(0, 50);
   * console.log(waveform.points.example.visible);        // -> true
   *
   * waveform.offset(70, 100);
   * console.log(waveform.points.example.visible);        // -> false
   * ```
   *
   * @return {Boolean} True if visible, false otherwise.
   */
  get visible(){
    return this.context.in_offset(this.timeStamp);
  }
};
},{}],9:[function(_dereq_,module,exports){
"use strict";

/**
 * Segments are an easy way to keep track of portions of the described audio file.
 *
 * They return values based on the actual offset. Which means if you change your offset and:
 *
 * * a segment becomes **out of scope**, no data will be returned;
 * * a segment is only **partially included in the offset**, only the visible parts will be returned;
 * * a segment is **fully included in the offset**, its whole content will be returned.
 *
 * Segments are created with the `WaveformData.set_segment(from, to, name?)` method.
 *
 * @see WaveformData.prototype.set_segment
 * @param {WaveformData} context WaveformData instance
 * @param {Integer} start Initial start index
 * @param {Integer} end Initial end index
 * @constructor
 */
var WaveformDataSegment = module.exports = function WaveformDataSegment(context, start, end){
  this.context = context;

  /**
   * Start index.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.start);  // -> 10
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.start);  // -> 10
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.start);  // -> 10
   * ```
   * @type {Integer} Initial starting point of the segment.
   */
  this.start = start;

  /**
   * End index.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.end);  // -> 50
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.end);  // -> 50
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.end);  // -> 50
   * ```
   * @type {Integer} Initial ending point of the segment.
   */
  this.end = end;
};

/**
 * @namespace WaveformDataSegment
 */
WaveformDataSegment.prototype = {
  /**
   * Dynamic starting point based on the WaveformData instance offset.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.offset_start);  // -> 10
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.offset_start);  // -> 20
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.offset_start);  // -> null
   * ```
   *
   * @return {number} Starting point of the segment within the waveform offset. (inclusive)
   */
  get offset_start(){
    if (this.start < this.context.offset_start && this.end > this.context.offset_start){
      return this.context.offset_start;
    }

    if (this.start >= this.context.offset_start && this.start < this.context.offset_end){
      return this.start;
    }

    return null;
  },
  /**
   * Dynamic ending point based on the WaveformData instance offset.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.offset_end);  // -> 50
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.offset_end);  // -> 50
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.offset_end);  // -> null
   * ```
   *
   * @return {number} Ending point of the segment within the waveform offset. (exclusive)
   */
  get offset_end(){
    if (this.end > this.context.offset_start && this.end <= this.context.offset_end){
      return this.end;
    }

    if (this.end > this.context.offset_end && this.start < this.context.offset_end){
      return this.context.offset_end;
    }

    return null;
  },
  /**
   * Dynamic segment length based on the WaveformData instance offset.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.offset_length);  // -> 40
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.offset_length);  // -> 30
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.offset_length);  // -> 0
   * ```
   *
   * @return {number} Visible length of the segment within the waveform offset.
   */
  get offset_length(){
    return this.offset_end - this.offset_start;
  },
  /**
   * Initial length of the segment.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.length);  // -> 40
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.length);  // -> 40
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.length);  // -> 40
   * ```
   *
   * @return {number} Initial length of the segment.
   */
  get length(){
    return this.end - this.start;
  },
  /**
   * Indicates if the segment has some visible part in the actual WaveformData offset.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.visible);        // -> true
   *
   * waveform.offset(20, 50);
   * console.log(waveform.segments.example.visible);        // -> true
   *
   * waveform.offset(70, 100);
   * console.log(waveform.segments.example.visible);        // -> false
   * ```
   *
   * @return {Boolean} True if at least partly visible, false otherwise.
   */
  get visible(){
    return this.context.in_offset(this.start) || this.context.in_offset(this.end) || (this.context.offset_start > this.start && this.context.offset_start < this.end);
  },
  /**
   * Return the minimum values for the segment.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.min.length);        // -> 40
   * console.log(waveform.segments.example.min.offset_length); // -> 40
   * console.log(waveform.segments.example.min[0]);            // -> -12
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.segments.example.min.length);        // -> 40
   * console.log(waveform.segments.example.min.offset_length); // -> 30
   * console.log(waveform.segments.example.min[0]);            // -> -5
   * ```
   *
   * @return {Array.<Integer>} Min values of the segment.
   */
  get min(){
    return this.visible ? this.context.offsetValues(this.offset_start, this.offset_length, 0) : [];
  },
  /**
   * Return the maximum values for the segment.
   *
   * ```javascript
   * var waveform = new WaveformData({ ... }, WaveformData.adapters.object);
   * waveform.set_segment(10, 50, "example");
   *
   * console.log(waveform.segments.example.max.length);        // -> 40
   * console.log(waveform.segments.example.max.offset_length); // -> 40
   * console.log(waveform.segments.example.max[0]);            // -> 5
   *
   * waveform.offset(20, 50);
   *
   * console.log(waveform.segments.example.max.length);        // -> 40
   * console.log(waveform.segments.example.max.offset_length); // -> 30
   * console.log(waveform.segments.example.max[0]);            // -> 11
   * ```
   *
   * @return {Array.<Integer>} Max values of the segment.
   */
  get max(){
    return this.visible ? this.context.offsetValues(this.offset_start, this.offset_length, 1) : [];
  }
};
},{}],10:[function(_dereq_,module,exports){
"use strict";

var WaveformData = _dereq_("./lib/core");
WaveformData.adapters = _dereq_("./lib/adapters");

WaveformData.builders = {
  webaudio: _dereq_("./lib/builders/webaudio.js")
};

module.exports = WaveformData;
},{"./lib/adapters":4,"./lib/builders/webaudio.js":6,"./lib/core":7}],11:[function(_dereq_,module,exports){
var EventEmitter = _dereq_('EventEmitter'), AudioPlayer = _dereq_('peaks/player/player'), Waveform = _dereq_('peaks/waveform/waveform.core'), mixins = _dereq_('peaks/waveform/waveform.mixins'), keyboard = _dereq_('peaks/player/player.keyboard');
'use strict';
var buildUi = function (container) {
    return {
        'player': container.querySelector('.waveform'),
        'zoom': container.querySelector('.zoom-container'),
        'overview': container.querySelector('.overview-container')
    };
};
var extend = function (to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to;
};
function Peaks(container) {
    this.options = {
        zoomLevels: [
            512,
            1024,
            2048,
            4096
        ],
        dataUri: null,
        dataUriDefaultFormat: 'json',
        keyboard: false,
        nudgeIncrement: 0.01,
        inMarkerColor: '#a0a0a0',
        outMarkerColor: '#a0a0a0',
        zoomWaveformColor: 'rgba(0, 225, 128, 1)',
        overviewWaveformColor: 'rgba(0,0,0,0.2)',
        randomizeSegmentColor: true,
        height: 200,
        segmentColor: 'rgba(255, 161, 39, 1)',
        playheadColor: 'rgba(0, 0, 0, 1)',
        template: [
            '<div class="waveform">',
            '<div class="zoom-container"></div>',
            '<div class="overview-container"></div>',
            '</div>'
        ].join(''),
        pointMarkerColor: '#FF0000',
        pointDblClickHandler: null,
        pointDragEndHandler: null
    };
    this.container = container;
    this.currentZoomLevel = 0;
}
Peaks.init = function init(opts) {
    opts = opts || {};
    if (opts.audioElement) {
        opts.mediaElement = opts.audioElement;
        if (console && typeof console.log === 'function') {
            console.log('`audioElement` option is deprecated. Please use `mediaElement` instead.');
        }
    }
    if (!opts.mediaElement) {
        throw new Error('Please provide an audio element.');
    }
    if (!(opts.mediaElement instanceof HTMLMediaElement)) {
        throw new TypeError('[Peaks.init] The mediaElement option should be an HTMLMediaElement.');
    }
    if (!opts.container) {
        throw new Error('Please provide a container object.');
    }
    if (opts.container.clientWidth > 0 === false) {
        throw new TypeError('Please ensure that the container has a width.');
    }
    var instance = new Peaks(opts.container);
    extend(instance.options, opts);
    extend(instance.options, {
        segmentInMarker: mixins.defaultInMarker(instance.options),
        segmentOutMarker: mixins.defaultOutMarker(instance.options),
        segmentLabelDraw: mixins.defaultSegmentLabelDraw(instance.options),
        pointMarker: mixins.defaultPointMarker(instance.options)
    });
    if (typeof instance.options.template === 'string') {
        instance.container.innerHTML = instance.options.template;
    } else if (instance.options.template instanceof HTMLElement) {
        instance.container.appendChild(instance.options.template);
    } else {
        throw new TypeError('Please ensure you provide an HTML string or a DOM template as `template` instance option. Provided: ' + instance.options.template);
    }
    if (instance.options.keyboard)
        keyboard.init(instance);
    instance.player = new AudioPlayer(instance);
    instance.player.init(instance.options.mediaElement);
    instance.waveform = new Waveform(instance);
    instance.waveform.init(buildUi(instance.container));
    instance.on('waveformOverviewReady', function () {
        instance.waveform.openZoomView();
        if (instance.options.segments) {
            instance.segments.addSegment(instance.options.segments);
        }
        if (instance.options.points) {
            instance.points.addPoint(instance.options.points);
        }
    });
    return instance;
};
Peaks.prototype = Object.create(EventEmitter.prototype, {
    segments: {
        get: function () {
            var self = this;
            function addSegment(startTime, endTime, editable, color, labelText) {
                var segments = arguments[0];
                if (typeof segments === 'number') {
                    segments = [{
                            startTime: startTime,
                            endTime: endTime,
                            editable: editable,
                            color: color,
                            labelText: labelText
                        }];
                }
                if (Array.isArray(segments)) {
                    segments.forEach(function (segment) {
                        self.waveform.segments.createSegment(segment.startTime, segment.endTime, segment.editable, segment.color, segment.labelText);
                    });
                    self.waveform.segments.render();
                } else {
                    throw new TypeError('[Peaks.segments.addSegment] Unrecognized segment parameters.');
                }
            }
            return {
                addSegment: addSegment,
                add: addSegment,
                remove: function (segment) {
                    var index = self.waveform.segments.remove(segment);
                    if (index === null) {
                        throw new RangeError('Unable to find the requested segment' + String(segment));
                    }
                    self.waveform.segments.updateSegments();
                    return self.waveform.segments.segments.splice(index, 1).pop();
                },
                removeByTime: function (startTime, endTime) {
                    endTime = typeof endTime === 'number' ? endTime : 0;
                    var fnFilter;
                    if (endTime > 0) {
                        fnFilter = function (segment) {
                            return segment.startTime === startTime && segment.endTime === endTime;
                        };
                    } else {
                        fnFilter = function (segment) {
                            return segment.startTime === startTime;
                        };
                    }
                    var indexes = self.waveform.segments.segments.filter(fnFilter).map(function (segment, i) {
                            self.waveform.segments.remove(segment);
                            return i;
                        }).sort(function (a, b) {
                            return b - a;
                        }).map(function (index) {
                            self.waveform.segments.segments.splice(index, 1);
                            return index;
                        });
                    self.waveform.segments.updateSegments();
                    return indexes.length;
                },
                removeAll: function () {
                    self.waveform.segments.segments.forEach(function (segment) {
                        self.waveform.segments.remove(segment);
                    });
                    self.waveform.segments.segments = [];
                    self.waveform.segments.updateSegments();
                },
                getSegments: function () {
                    return self.waveform.segments.segments;
                }
            };
        }
    },
    points: {
        get: function () {
            var self = this;
            return {
                add: function (timestamp, editable, color, labelText) {
                    var points = arguments[0];
                    if (typeof points === 'number') {
                        points = [{
                                timestamp: timestamp,
                                editable: editable,
                                color: color,
                                labelText: labelText
                            }];
                    }
                    if (Array.isArray(points)) {
                        points.forEach(self.waveform.points.createPoint.bind(self.waveform.points));
                        self.waveform.points.render();
                    } else {
                        throw new TypeError('[Peaks.points.addPoint] Unrecognized point parameters.');
                    }
                },
                getPoints: function () {
                    return self.waveform.points.points;
                },
                removeByTime: function (timestamp) {
                    var indexes = self.waveform.points.points.filter(function (point) {
                            return point.timestamp === timestamp;
                        }).map(function (point, i) {
                            self.waveform.points.remove(point);
                            return i;
                        }).sort(function (a, b) {
                            return b - a;
                        }).map(function (index) {
                            self.waveform.points.points.splice(index, 1);
                            return index;
                        });
                    self.waveform.points.render();
                    return indexes.length;
                }
            };
        }
    },
    time: {
        get: function () {
            var self = this;
            return {
                setCurrentTime: function setCurrentTime(time) {
                    return self.player.seekBySeconds(time);
                },
                getCurrentTime: function () {
                    return self.player.getTime();
                }
            };
        }
    },
    zoom: {
        get: function () {
            var self = this;
            return {
                zoomIn: function () {
                    self.zoom.setZoom(self.currentZoomLevel - 1);
                },
                zoomOut: function () {
                    self.zoom.setZoom(self.currentZoomLevel + 1);
                },
                setZoom: function (zoomLevelIndex) {
                    if (zoomLevelIndex >= self.options.zoomLevels.length) {
                        zoomLevelIndex = self.options.zoomLevels.length - 1;
                    }
                    if (zoomLevelIndex < 0) {
                        zoomLevelIndex = 0;
                    }
                    self.currentZoomLevel = zoomLevelIndex;
                    self.emit('waveform_zoom_level_changed', self.options.zoomLevels[zoomLevelIndex]);
                },
                getZoom: function () {
                    return self.currentZoomLevel;
                }
            };
        }
    }
});
module.exports = Peaks;
},{"EventEmitter":2,"peaks/player/player":12,"peaks/player/player.keyboard":13,"peaks/waveform/waveform.core":15,"peaks/waveform/waveform.mixins":16}],12:[function(_dereq_,module,exports){
var mixins = _dereq_('peaks/waveform/waveform.mixins');
'use strict';
var radio = function (peaks) {
    var _helpers = {
            timeFromPercentage: function (time, percentage) {
                return time * (percentage / 100);
            }
        };
    return {
        init: function (mediaElement) {
            var that = this;
            this.player = mediaElement;
            this.duration = this.player.duration;
            if (this.player.readyState === 4) {
                peaks.emit('player_load', that);
            }
            this.player.addEventListener('timeupdate', function () {
                peaks.emit('player_time_update', that.getTime());
            });
            this.player.addEventListener('play', function () {
                peaks.emit('player_play', that.getTime());
            });
            this.player.addEventListener('pause', function () {
                peaks.emit('player_pause', that.getTime());
            });
            this.player.addEventListener('seeked', function () {
                peaks.emit('waveform_seek', that.getTime());
            });
        },
        setSource: function (source) {
            this.player.setAttribute('src', source);
        },
        getSource: function () {
            return this.player.src;
        },
        play: function () {
            this.player.play();
            peaks.emit('radio_play', this.getTime());
        },
        pause: function () {
            this.player.pause();
            peaks.emit('radio_pause', this.getTime());
        },
        getTime: function () {
            return this.player.currentTime;
        },
        getTimeFromPercentage: function (p) {
            return mixins.niceTime(this.duration * p / 100, false);
        },
        getSecsFromPercentage: function (p) {
            return Math.floor(this.duration * p / 100);
        },
        getDuration: function () {
            return this.duration;
        },
        getPercentage: function () {
            return this.getPercentageFromSeconds(this.player.currentTime);
        },
        getPercentageFromSeconds: function (s) {
            var percentage = s / this.duration * 100;
            return Math.round(percentage * 100) / 100;
        },
        seek: function (percentage) {
            this.player.currentTime = _helpers.timeFromPercentage(this.duration, percentage);
        },
        seekBySeconds: function (seconds) {
            this.player.currentTime = seconds;
        }
    };
};
module.exports = radio;
},{"peaks/waveform/waveform.mixins":16}],13:[function(_dereq_,module,exports){
'use strict';
var SPACE = 32, TAB = 9, LEFT_ARROW = 37, RIGHT_ARROW = 39;
function handleKeyEventGenerator(peaksInstance) {
    return function handleKeyEvent(event) {
        var c = event.keyCode;
        var t = event.type;
        if ([
                'OBJECT',
                'TEXTAREA',
                'INPUT',
                'SELECT',
                'OPTION'
            ].indexOf(event.target.nodeName) === -1) {
            if ([
                    SPACE,
                    TAB,
                    LEFT_ARROW,
                    RIGHT_ARROW
                ].indexOf(event.type) > -1) {
                event.preventDefault();
            }
            if (t === 'keydown' || t === 'keypress') {
                switch (c) {
                case SPACE:
                    peaksInstance.emit('kybrd_space');
                    break;
                case TAB:
                    peaksInstance.emit('kybrd_tab');
                    break;
                }
            } else if (t === 'keyup') {
                switch (c) {
                case LEFT_ARROW:
                    if (event.shiftKey)
                        peaksInstance.emit('kybrd_shift_left');
                    else
                        peaksInstance.emit('kybrd_left');
                    break;
                case RIGHT_ARROW:
                    if (peaksInstance.shiftKey)
                        peaksInstance.emit('kybrd_shift_right');
                    else
                        peaksInstance.emit('kybrd_right');
                    break;
                }
            }
        }
    };
}
module.exports = {
    init: function (peaks) {
        document.addEventListener('keydown', handleKeyEventGenerator(peaks));
        document.addEventListener('keypress', handleKeyEventGenerator(peaks));
        document.addEventListener('keyup', handleKeyEventGenerator(peaks));
    }
};
},{}],14:[function(_dereq_,module,exports){
var mixins = _dereq_('peaks/waveform/waveform.mixins'), Kinetic = _dereq_('Kinetic');
'use strict';
function roundUpToNearest(value, multiple) {
    var remainder = value % multiple;
    if (remainder === 0) {
        return value;
    } else {
        return value + multiple - remainder;
    }
}
function WaveformAxis(view) {
    this.view = view;
    this.axisShape = null;
}
WaveformAxis.prototype.drawAxis = function (currentFrameStartTime) {
    var that = this;
    if (!this.axisShape) {
        this.axisShape = new Kinetic.Shape({
            drawFunc: function (canvas) {
                that.axisDrawFunction(canvas, currentFrameStartTime);
            },
            fill: 'rgba(38, 255, 161, 1)',
            strokeWidth: 0
        });
        this.view.uiLayer.add(this.axisShape);
        this.view.uiLayer.draw();
    } else {
        this.axisShape.setDrawFunc(function (canvas) {
            that.axisDrawFunction(canvas, currentFrameStartTime);
        });
        this.view.uiLayer.draw();
    }
};
WaveformAxis.prototype.getAxisLabelScale = function () {
    var baseSecs = 1;
    var steps = [
            1,
            2,
            5,
            10,
            20,
            30
        ];
    var minSpacing = 60;
    var index = 0;
    var secs;
    for (;;) {
        secs = baseSecs * steps[index];
        var pixels = this.view.data.at_time(secs);
        if (pixels < minSpacing) {
            if (++index == steps.length) {
                baseSecs *= 60;
                index = 0;
            }
        } else {
            break;
        }
    }
    return secs;
};
WaveformAxis.prototype.axisDrawFunction = function (canvas, currentFrameStartTime) {
    var markerHeight = 10;
    var axisLabelIntervalSecs = this.getAxisLabelScale();
    var firstAxisLabelSecs = roundUpToNearest(currentFrameStartTime, axisLabelIntervalSecs);
    var axisLabelOffsetSecs = firstAxisLabelSecs - currentFrameStartTime;
    var axisLabelOffsetPixels = this.view.data.at_time(axisLabelOffsetSecs);
    var ctx = canvas.getContext();
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#aaa';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    var secs = firstAxisLabelSecs;
    var x;
    for (;;) {
        x = axisLabelOffsetPixels + this.view.data.at_time(secs - firstAxisLabelSecs);
        if (x >= this.view.width) {
            break;
        }
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, 0 + markerHeight);
        ctx.moveTo(x + 0.5, this.view.height);
        ctx.lineTo(x + 0.5, this.view.height - markerHeight);
        ctx.stroke();
        var label = mixins.niceTime(secs, true);
        var labelWidth = ctx.measureText(label).width;
        var labelX = x - labelWidth / 2;
        var labelY = this.view.height - 1 - markerHeight;
        if (labelX >= 0) {
            ctx.fillText(label, labelX, labelY);
        }
        secs += axisLabelIntervalSecs;
    }
};
module.exports = WaveformAxis;
},{"Kinetic":1,"peaks/waveform/waveform.mixins":16}],15:[function(_dereq_,module,exports){
var WaveformData = _dereq_('waveform-data'), WaveformOverview = _dereq_('peaks/waveform/waveform.overview'), WaveformZoomView = _dereq_('peaks/waveform/waveform.zoomview'), WaveformSegments = _dereq_('peaks/waveform/waveform.segments'), WaveformPoints = _dereq_('peaks/waveform/waveform.points');
'use strict';
var isXhr2 = 'withCredentials' in new XMLHttpRequest();
module.exports = function (peaks) {
    return {
        init: function (ui) {
            this.ui = ui;
            var that = this;
            that.getRemoteData(peaks.options);
        },
        getRemoteData: function (options) {
            var that = this;
            var xhr = new XMLHttpRequest();
            var uri = null;
            var requestType = null;
            var builder = null;
            if (options.dataUri) {
                if (typeof options.dataUri === 'string') {
                    var dataUri = {};
                    dataUri[options.dataUriDefaultFormat || 'json'] = options.dataUri;
                    options.dataUri = dataUri;
                }
                if (typeof options.dataUri === 'object') {
                    [
                        'ArrayBuffer',
                        'JSON'
                    ].some(function (connector) {
                        if (window[connector]) {
                            requestType = connector.toLowerCase();
                            uri = options.dataUri[requestType];
                            return Boolean(uri);
                        }
                    });
                }
            }
            if (!options.dataUri && WaveformData.builders.webaudio.getAudioContext()) {
                requestType = 'arraybuffer';
                uri = options.mediaElement.currentSrc || options.mediaElement.src;
                builder = 'webaudio';
            }
            if (!uri && !requestType) {
                throw new Error('Unable to determine a compatible dataUri format for this browser.');
            }
            xhr.open('GET', uri, true);
            if (isXhr2) {
                try {
                    xhr.responseType = requestType;
                } catch (e) {
                }
            }
            xhr.onload = function (response) {
                if (this.readyState === 4 && this.status === 200) {
                    if (builder) {
                        WaveformData.builders[builder](response.target.response, that.handleRemoteData.bind(that));
                    } else {
                        that.handleRemoteData(response.target, xhr);
                    }
                }
            };
            xhr.send();
        },
        handleRemoteData: function (remoteData, xhr) {
            this.origWaveformData = remoteData instanceof WaveformData ? remoteData : WaveformData.create(remoteData);
            var overviewWaveformData = this.origWaveformData.resample(this.ui.player.clientWidth);
            this.waveformOverview = new WaveformOverview(overviewWaveformData, this.ui.overview, peaks);
            peaks.emit('waveformOverviewReady');
            this.bindResize();
        },
        openZoomView: function () {
            var that = this;
            that.waveformZoomView = new WaveformZoomView(that.origWaveformData, that.ui.zoom, peaks);
            that.segments = new WaveformSegments(peaks);
            that.segments.init();
            that.points = new WaveformPoints(peaks);
            that.points.init();
            peaks.emit('waveformZoomReady');
        },
        bindResize: function () {
            var that = this;
            window.addEventListener('resize', function () {
                that.ui.overview.hidden = true;
                that.ui.zoom.hidden = true;
                if (that.resizeTimeoutId)
                    clearTimeout(that.resizeTimeoutId);
                that.resizeTimeoutId = setTimeout(function () {
                    var w = that.ui.player.clientWidth;
                    var overviewWaveformData = that.origWaveformData.resample(w);
                    peaks.emit('resizeEndOverview', w, overviewWaveformData);
                    peaks.emit('window_resized', w, that.origWaveformData);
                }, 500);
            });
            peaks.on('overview_resized', function () {
                that.ui.overview.removeAttribute('hidden');
            });
            peaks.on('zoomview_resized', function () {
                that.ui.zoom.removeAttribute('hidden');
            });
        }
    };
};
},{"peaks/waveform/waveform.overview":17,"peaks/waveform/waveform.points":18,"peaks/waveform/waveform.segments":19,"peaks/waveform/waveform.zoomview":20,"waveform-data":10}],16:[function(_dereq_,module,exports){
var Kinetic = _dereq_('Kinetic');
'use strict';
var createHandle = function (height, color, inMarker) {
    return function (draggable, segment, parent, onDrag) {
        var markerTop = 0, markerX = 0.5, handleTop = height / 2 - 10.5, handleBottom = height / 2 + 9.5, markerBottom = height, handleX = inMarker ? -19.5 : 19.5;
        var handlePoints = [
                [
                    markerX,
                    markerTop
                ],
                [
                    markerX,
                    handleTop
                ],
                [
                    handleX,
                    handleTop
                ],
                [
                    handleX,
                    handleBottom
                ],
                [
                    markerX,
                    handleBottom
                ],
                [
                    markerX,
                    markerBottom
                ]
            ];
        var group = new Kinetic.Group({
                draggable: draggable,
                dragBoundFunc: function (pos) {
                    var limit;
                    if (inMarker) {
                        limit = segment.outMarker.getX() - segment.outMarker.getWidth();
                        if (pos.x > limit)
                            pos.x = limit;
                    } else {
                        limit = segment.inMarker.getX() + segment.inMarker.getWidth();
                        if (pos.x < limit)
                            pos.x = limit;
                    }
                    return {
                        x: pos.x,
                        y: this.getAbsolutePosition().y
                    };
                }
            }).on('dragmove', function (event) {
                onDrag(segment, parent);
            });
        var xPosition = inMarker ? -24 : 24;
        var text = new Kinetic.Text({
                x: xPosition,
                y: height / 2 - 5,
                text: '',
                fontSize: 10,
                fontFamily: 'sans-serif',
                fill: '#000',
                textAlign: 'center'
            });
        text.hide();
        group.label = text;
        group.add(text);
        var handle = new Kinetic.Polygon({
                points: handlePoints,
                fill: color,
                stroke: color,
                strokeWidth: 1
            }).on('mouseover', function (event) {
                text.show();
                if (inMarker)
                    text.setX(xPosition - text.getWidth());
                segment.view.segmentLayer.draw();
            }).on('mouseout', function (event) {
                text.hide();
                segment.view.segmentLayer.draw();
            });
        group.add(handle);
        return group;
    };
};
var createPointHandle = function (height, color) {
    return function (draggable, point, parent, onDrag, onDblClick, onDragEnd) {
        var markerTop = 0, markerX = 0.5, handleTop = height / 2 - 10.5, handleBottom = height / 2 + 9.5, markerBottom = height, handleX = 9.75;
        var handlePoints = [
                [
                    markerX,
                    markerTop
                ],
                [
                    markerX,
                    handleTop
                ],
                [
                    handleX,
                    handleTop
                ],
                [
                    handleX,
                    handleBottom
                ],
                [
                    markerX,
                    handleBottom
                ],
                [
                    markerX,
                    markerBottom
                ]
            ];
        var group = new Kinetic.Group({
                draggable: draggable,
                dragBoundFunc: function (pos) {
                    return {
                        x: pos.x,
                        y: this.getAbsolutePosition().y
                    };
                }
            }).on('dragmove', function (event) {
                onDrag(point, parent);
            });
        if (onDblClick) {
            group.on('dblclick', function (event) {
                onDblClick(parent);
            });
        }
        if (onDragEnd) {
            group.on('dragend', function (event) {
                onDragEnd(parent);
            });
        }
        var xPosition = -24;
        var text = new Kinetic.Text({
                x: xPosition,
                y: height / 2 - 5,
                text: '',
                fontSize: 10,
                fontFamily: 'sans-serif',
                fill: '#000',
                textAlign: 'center'
            });
        text.hide();
        group.label = text;
        group.add(text);
        var handle = new Kinetic.Polygon({
                points: handlePoints,
                fill: color,
                stroke: color,
                strokeWidth: 1
            }).on('mouseover', function (event) {
                text.show();
                text.setX(xPosition - text.getWidth());
                point.view.pointLayer.draw();
            }).on('mouseout', function (event) {
                text.hide();
                point.view.pointLayer.draw();
            });
        group.add(handle);
        return group;
    };
};
var drawWaveform = function (ctx, min, max, offset_start, offset_length, y) {
    ctx.beginPath();
    min.forEach(function (val, x) {
        ctx.lineTo(offset_start + x + 0.5, y(val) + 0.5);
    });
    max.reverse().forEach(function (val, x) {
        ctx.lineTo(offset_start + (offset_length - x) + 0.5, y(val) + 0.5);
    });
    ctx.closePath();
};
module.exports = {
    interpolateHeight: function interpolateHeightGenerator(total_height) {
        var amplitude = 256;
        return function interpolateHeight(size) {
            return total_height - (size + 128) * total_height / amplitude;
        };
    },
    waveformDrawFunction: function (waveform, canvas, y) {
        var offset_length = waveform.offset_length, ctx = canvas.getContext();
        drawWaveform(ctx, waveform.min, waveform.max, 0, offset_length, y);
        canvas.fillStroke(this);
    },
    waveformSegmentDrawFunction: function (waveform, id, canvas, y) {
        if (waveform.segments[id] === undefined) {
            return;
        }
        var segment = waveform.segments[id], offset_length = segment.offset_length, offset_start = segment.offset_start - waveform.offset_start, ctx = canvas.getContext();
        drawWaveform(ctx, segment.min, segment.max, offset_start, offset_length, y);
        canvas.fillStroke(this);
    },
    waveformOffsetDrawFunction: function (waveform, canvas, y) {
        if (waveform.segments.zoom === undefined) {
            return;
        }
        var offset_length = waveform.segments.zoom.offset_length, offset_start = waveform.segments.zoom.offset_start - waveform.offset_start, ctx = canvas.getContext();
        drawWaveform(ctx, waveform.segments.zoom.min, waveform.segments.zoom.max, offset_start, offset_length, y);
        canvas.fillStroke(this);
    },
    niceTime: function (time, dropHundredths) {
        var hundredths, seconds, minutes, hours, result = [];
        hundredths = Math.floor(time % 1 * 100);
        seconds = Math.floor(time);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        if (hours > 0)
            result.push(hours);
        result.push(minutes % 60);
        result.push(seconds % 60);
        for (var i = 0; i < result.length; i++) {
            var x = result[i];
            if (x < 10) {
                result[i] = '0' + x;
            } else {
                result[i] = x;
            }
        }
        result = result.join(':');
        if (!dropHundredths) {
            if (hundredths < 10) {
                hundredths = '0' + hundredths;
            }
            result += '.' + hundredths;
        }
        return result;
    },
    defaultInMarker: function (options) {
        return createHandle(options.height, options.outMarkerColor, true);
    },
    defaultOutMarker: function (options) {
        return createHandle(options.height, options.outMarkerColor, false);
    },
    defaultPointMarker: function (options) {
        return createPointHandle(options.height, options.pointMarkerColor);
    },
    defaultSegmentLabelDraw: function (options) {
        return function (segment, parent) {
            return new Kinetic.Text({
                x: 12,
                y: 12,
                text: parent.labelText,
                fontSize: 12,
                fontFamily: 'Arial, sans-serif',
                fill: '#000',
                textAlign: 'center'
            });
        };
    }
};
},{"Kinetic":1}],17:[function(_dereq_,module,exports){
var WaveformAxis = _dereq_('peaks/waveform/waveform.axis'), mixins = _dereq_('peaks/waveform/waveform.mixins'), Kinetic = _dereq_('Kinetic');
'use strict';
function WaveformOverview(waveformData, container, peaks) {
    var that = this;
    that.options = peaks.options;
    that.data = waveformData;
    that.width = container.clientWidth;
    that.height = container.clientHeight || that.options.height;
    that.frameOffset = 0;
    that.seeking = false;
    that.stage = new Kinetic.Stage({
        container: container,
        width: that.width,
        height: that.height
    });
    that.waveformLayer = new Kinetic.Layer();
    that.background = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: that.width,
        height: that.height
    });
    that.waveformLayer.add(that.background);
    that.uiLayer = new Kinetic.Layer();
    that.refLayer = new Kinetic.Layer();
    that.axis = new WaveformAxis(that);
    that.createWaveform();
    that.createRefWaveform();
    that.axis.drawAxis(0);
    that.createUi();
    var cancelSeeking = function () {
        that.stage.off('mousemove mouseup');
        that.seeking = false;
    };
    that.stage.on('mousedown', function (event) {
        if (event.targetNode && !event.targetNode.attrs.draggable && !event.targetNode.parent.attrs.draggable) {
            if (event.type == 'mousedown') {
                that.seeking = true;
                var width = that.refWaveformShape.getWidth();
                that.updateRefWaveform(that.data.time(event.layerX), that.data.time(event.layerX + width));
                peaks.emit('overview_user_seek', that.data.time(event.layerX), event.layerX);
                that.stage.on('mousemove', function (event) {
                    that.updateRefWaveform(that.data.time(event.layerX), that.data.time(event.layerX + width));
                    peaks.emit('overview_user_seek', that.data.time(event.layerX), event.layerX);
                });
                that.stage.on('mouseup', cancelSeeking);
            } else {
                cancelSeeking();
            }
        }
    });
    peaks.on('player_time_update', function (time) {
        if (!that.seeking) {
            that.playheadPixel = that.data.at_time(time);
            that.updateUi(that.playheadPixel);
        }
    });
    peaks.on('overview_user_seek', function (time, frame) {
        that.playheadPixel = frame;
        that.updateUi(that.playheadPixel);
        that.options.mediaElement.currentTime = time;
    });
    peaks.on('waveform_zoom_displaying', function (start, end) {
        that.updateRefWaveform(start, end);
    });
    peaks.on('resizeEndOverview', function (width, newWaveformData) {
        that.width = width;
        that.data = newWaveformData;
        that.stage.setWidth(that.width);
        that.updateWaveform();
        peaks.emit('overview_resized');
    });
}
WaveformOverview.prototype.createWaveform = function () {
    var that = this;
    this.waveformShape = new Kinetic.Shape({
        drawFunc: function (canvas) {
            mixins.waveformDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
        },
        fill: that.options.overviewWaveformColor,
        strokeWidth: 0
    });
    this.waveformLayer.add(this.waveformShape);
    this.stage.add(this.waveformLayer);
};
WaveformOverview.prototype.createRefWaveform = function () {
    var that = this;
    this.refWaveformShape = new Kinetic.Shape({
        drawFunc: function (canvas) {
            mixins.waveformOffsetDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
        },
        fill: that.options.zoomWaveformColor,
        strokeWidth: 0
    });
    this.refLayer.add(this.refWaveformShape);
    this.stage.add(this.refLayer);
};
WaveformOverview.prototype.createUi = function () {
    var that = this;
    this.playheadLine = new Kinetic.Line({
        points: that._getPlayheadPoints(0),
        stroke: that.options.playheadColor,
        strokeWidth: 1
    });
    this.uiLayer.add(this.playheadLine);
    this.stage.add(this.uiLayer);
};
WaveformOverview.prototype.updateWaveform = function () {
    var that = this;
    that.waveformShape.setDrawFunc(function (canvas) {
        mixins.waveformDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
    });
    that.waveformLayer.draw();
};
WaveformOverview.prototype.updateWaveform = function () {
    var that = this;
    that.waveformShape.setDrawFunc(function (canvas) {
        mixins.waveformDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
    });
    that.waveformLayer.draw();
};
WaveformOverview.prototype.updateRefWaveform = function (time_in, time_out) {
    var that = this;
    var offset_in = that.data.at_time(time_in);
    var offset_out = that.data.at_time(time_out);
    that.refWaveformShape.setDrawFunc(function (canvas) {
        that.data.set_segment(offset_in, offset_out, 'zoom');
        mixins.waveformOffsetDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
    });
    that.refWaveformShape.setWidth(that.data.at_time(time_out) - that.data.at_time(time_in));
    that.refLayer.draw();
};
WaveformOverview.prototype.updateUi = function (pixel) {
    var that = this;
    that.playheadLine.setAttr('points', that._getPlayheadPoints(pixel));
    that.uiLayer.setZIndex(100);
    that.uiLayer.draw();
};
WaveformOverview.prototype._getPlayheadPoints = function (pixelOffset) {
    var that = this;
    return [
        {
            x: pixelOffset + 0.5,
            y: 0
        },
        {
            x: pixelOffset + 0.5,
            y: that.height
        }
    ];
};
module.exports = WaveformOverview;
},{"Kinetic":1,"peaks/waveform/waveform.axis":14,"peaks/waveform/waveform.mixins":16}],18:[function(_dereq_,module,exports){
var mixins = _dereq_('peaks/waveform/waveform.mixins'), Kinetic = _dereq_('Kinetic');
module.exports = function (peaks) {
    var self = this;
    var waveformView = peaks.waveform;
    self.points = [];
    self.views = [
        waveformView.waveformZoomView,
        waveformView.waveformOverview
    ].map(function (view) {
        if (!view.pointLayer) {
            view.pointLayer = new Kinetic.Layer();
            view.stage.add(view.pointLayer);
            view.pointLayer.moveToTop();
        }
        return view;
    });
    function constructPoint(point) {
        var pointZoomGroup = new Kinetic.Group();
        var pointOverviewGroup = new Kinetic.Group();
        var pointGroups = [
                pointZoomGroup,
                pointOverviewGroup
            ];
        point.editable = Boolean(point.editable);
        pointGroups.forEach(function (pointGroup, i) {
            var view = self.views[i];
            if (point.editable) {
                pointGroup.marker = new peaks.options.pointMarker(true, pointGroup, point, pointHandleDrag, peaks.options.pointDblClickHandler, peaks.options.pointDragEndHandler);
                pointGroup.add(pointGroup.marker);
            }
            view.pointLayer.add(pointGroup);
        });
        point.zoom = pointZoomGroup;
        point.zoom.view = waveformView.waveformZoomView;
        point.overview = pointOverviewGroup;
        point.overview.view = waveformView.waveformOverview;
        return point;
    }
    function updatePoint(point) {
        waveformView.waveformOverview.data.set_point(waveformView.waveformOverview.data.at_time(point.timestamp), point.id);
        waveformView.waveformZoomView.data.set_point(waveformView.waveformZoomView.data.at_time(point.timestamp), point.id);
        var overviewtimestampOffset = waveformView.waveformOverview.data.at_time(point.timestamp);
        if (point.editable) {
            if (point.overview.marker)
                point.overview.marker.show().setX(overviewtimestampOffset - point.overview.marker.getWidth());
            point.overview.marker.label.setText(mixins.niceTime(point.timestamp, false));
        }
        var zoomtimestampOffset = waveformView.waveformZoomView.data.at_time(point.timestamp);
        var frameStartOffset = waveformView.waveformZoomView.frameOffset;
        if (zoomtimestampOffset < frameStartOffset) {
            zoomStartOffset = frameStartOffset;
        }
        if (waveformView.waveformZoomView.data.points[point.id].visible) {
            var startPixel = zoomtimestampOffset - frameStartOffset;
            point.zoom.show();
            if (point.editable) {
                if (point.zoom.marker)
                    point.zoom.marker.show().setX(startPixel - point.zoom.marker.getWidth());
                point.zoom.marker.label.setText(mixins.niceTime(point.timestamp, false));
            }
        } else {
            point.zoom.hide();
        }
    }
    function pointHandleDrag(thisPoint, point) {
        if (thisPoint.marker.getX() > 0) {
            var inOffset = thisPoint.view.frameOffset + thisPoint.marker.getX() + thisPoint.marker.getWidth();
            point.timestamp = thisPoint.view.data.time(inOffset);
        }
        updatePoint(point);
        self.render();
    }
    this.init = function () {
        peaks.on('waveform_zoom_displaying', self.updatePoints.bind(self));
        peaks.emit('points.ready');
    };
    this.updatePoints = function () {
        self.points.forEach(updatePoint);
        self.render();
    };
    this.createPoint = function (point) {
        if (point.timestamp >= 0 === false) {
            throw new RangeError('[waveform.points.createPoint] timestamp should be a >=0 value');
        }
        point.id = 'point' + self.points.length;
        point = constructPoint(point);
        updatePoint(point);
        self.points.push(point);
    };
    this.remove = function removePoint(point) {
        var index = null;
        this.points.some(function (p, i) {
            if (p === point) {
                index = i;
                return true;
            }
        });
        if (typeof index === 'number') {
            point.overview.destroy();
            point.zoom.destroy();
        }
        return index;
    };
    this.render = function renderPoints() {
        self.views.forEach(function (view) {
            view.pointLayer.draw();
        });
    };
};
},{"Kinetic":1,"peaks/waveform/waveform.mixins":16}],19:[function(_dereq_,module,exports){
var mixins = _dereq_('peaks/waveform/waveform.mixins'), Kinetic = _dereq_('Kinetic');
'use strict';
module.exports = function (peaks) {
    var self = this;
    self.segments = [];
    self.views = [
        peaks.waveform.waveformZoomView,
        peaks.waveform.waveformOverview
    ].map(function (view) {
        if (!view.segmentLayer) {
            view.segmentLayer = new Kinetic.Layer();
            view.stage.add(view.segmentLayer);
            view.segmentLayer.moveToTop();
        }
        return view;
    });
    var createSegmentWaveform = function (segmentId, startTime, endTime, editable, color, labelText) {
        var segment = {
                id: segmentId,
                startTime: startTime,
                endTime: endTime,
                labelText: labelText || ''
            };
        var segmentZoomGroup = new Kinetic.Group();
        var segmentOverviewGroup = new Kinetic.Group();
        var segmentGroups = [
                segmentZoomGroup,
                segmentOverviewGroup
            ];
        color = color || getSegmentColor();
        var menter = function (event) {
            this.parent.label.show();
            this.parent.view.segmentLayer.draw();
        };
        var mleave = function (event) {
            this.parent.label.hide();
            this.parent.view.segmentLayer.draw();
        };
        segmentGroups.forEach(function (segmentGroup, i) {
            var view = self.views[i];
            segmentGroup.waveformShape = new Kinetic.Shape({
                fill: color,
                strokeWidth: 0
            });
            segmentGroup.waveformShape.on('mouseenter', menter);
            segmentGroup.waveformShape.on('mouseleave', mleave);
            segmentGroup.add(segmentGroup.waveformShape);
            segmentGroup.label = new peaks.options.segmentLabelDraw(segmentGroup, segment);
            segmentGroup.add(segmentGroup.label.hide());
            if (editable) {
                segmentGroup.inMarker = new peaks.options.segmentInMarker(true, segmentGroup, segment, segmentHandleDrag);
                segmentGroup.add(segmentGroup.inMarker);
                segmentGroup.outMarker = new peaks.options.segmentOutMarker(true, segmentGroup, segment, segmentHandleDrag);
                segmentGroup.add(segmentGroup.outMarker);
            }
            view.segmentLayer.add(segmentGroup);
        });
        segment.zoom = segmentZoomGroup;
        segment.zoom.view = peaks.waveform.waveformZoomView;
        segment.overview = segmentOverviewGroup;
        segment.overview.view = peaks.waveform.waveformOverview;
        segment.color = color;
        segment.editable = editable;
        return segment;
    };
    var updateSegmentWaveform = function (segment) {
        peaks.waveform.waveformOverview.data.set_segment(peaks.waveform.waveformOverview.data.at_time(segment.startTime), peaks.waveform.waveformOverview.data.at_time(segment.endTime), segment.id);
        peaks.waveform.waveformZoomView.data.set_segment(peaks.waveform.waveformZoomView.data.at_time(segment.startTime), peaks.waveform.waveformZoomView.data.at_time(segment.endTime), segment.id);
        var overviewStartOffset = peaks.waveform.waveformOverview.data.at_time(segment.startTime);
        var overviewEndOffset = peaks.waveform.waveformOverview.data.at_time(segment.endTime);
        segment.overview.waveformShape.setDrawFunc(function (canvas) {
            mixins.waveformSegmentDrawFunction.call(this, peaks.waveform.waveformOverview.data, segment.id, canvas, mixins.interpolateHeight(peaks.waveform.waveformOverview.height));
        });
        segment.overview.setWidth(overviewEndOffset - overviewStartOffset);
        if (segment.editable) {
            if (segment.overview.inMarker)
                segment.overview.inMarker.show().setX(overviewStartOffset - segment.overview.inMarker.getWidth());
            if (segment.overview.outMarker)
                segment.overview.outMarker.show().setX(overviewEndOffset);
            segment.overview.inMarker.label.setText(mixins.niceTime(segment.startTime, false));
            segment.overview.outMarker.label.setText(mixins.niceTime(segment.endTime, false));
        }
        var zoomStartOffset = peaks.waveform.waveformZoomView.data.at_time(segment.startTime);
        var zoomEndOffset = peaks.waveform.waveformZoomView.data.at_time(segment.endTime);
        var frameStartOffset = peaks.waveform.waveformZoomView.frameOffset;
        var frameEndOffset = peaks.waveform.waveformZoomView.frameOffset + peaks.waveform.waveformZoomView.width;
        if (zoomStartOffset < frameStartOffset)
            zoomStartOffset = frameStartOffset;
        if (zoomEndOffset > frameEndOffset)
            zoomEndOffset = frameEndOffset;
        if (peaks.waveform.waveformZoomView.data.segments[segment.id].visible) {
            var startPixel = zoomStartOffset - frameStartOffset;
            var endPixel = zoomEndOffset - frameStartOffset;
            segment.zoom.show();
            segment.zoom.waveformShape.setDrawFunc(function (canvas) {
                mixins.waveformSegmentDrawFunction.call(this, peaks.waveform.waveformZoomView.data, segment.id, canvas, mixins.interpolateHeight(peaks.waveform.waveformZoomView.height));
            });
            if (segment.editable) {
                if (segment.zoom.inMarker)
                    segment.zoom.inMarker.show().setX(startPixel - segment.zoom.inMarker.getWidth());
                if (segment.zoom.outMarker)
                    segment.zoom.outMarker.show().setX(endPixel);
                segment.zoom.inMarker.label.setText(mixins.niceTime(segment.startTime, false));
                segment.zoom.outMarker.label.setText(mixins.niceTime(segment.endTime, false));
            }
        } else {
            segment.zoom.hide();
        }
    };
    var segmentHandleDrag = function (thisSeg, segment) {
        if (thisSeg.inMarker.getX() > 0) {
            var inOffset = thisSeg.view.frameOffset + thisSeg.inMarker.getX() + thisSeg.inMarker.getWidth();
            segment.startTime = thisSeg.view.data.time(inOffset);
        }
        if (thisSeg.outMarker.getX() < thisSeg.view.width) {
            var outOffset = thisSeg.view.frameOffset + thisSeg.outMarker.getX();
            segment.endTime = thisSeg.view.data.time(outOffset);
        }
        updateSegmentWaveform(segment);
        self.render();
    };
    var getSegmentColor = function () {
        var c;
        if (peaks.options.randomizeSegmentColor) {
            var g = function () {
                return Math.floor(Math.random() * 255);
            };
            c = 'rgba(' + g() + ', ' + g() + ', ' + g() + ', 1)';
        } else {
            c = peaks.options.segmentColor;
        }
        return c;
    };
    this.init = function () {
        peaks.on('waveform_zoom_displaying', self.updateSegments);
        peaks.emit('segments.ready');
    };
    this.updateSegments = function () {
        self.segments.forEach(updateSegmentWaveform);
        self.render();
    };
    this.createSegment = function (startTime, endTime, editable, color, labelText) {
        var segmentId = 'segment' + self.segments.length;
        if (startTime >= 0 === false) {
            throw new TypeError('[waveform.segments.createSegment] startTime should be a positive value');
        }
        if (endTime > 0 === false) {
            throw new TypeError('[waveform.segments.createSegment] endTime should be a positive value');
        }
        if (endTime > startTime === false) {
            throw new RangeError('[waveform.segments.createSegment] endTime should be higher than startTime');
        }
        var segment = createSegmentWaveform(segmentId, startTime, endTime, editable, color, labelText);
        updateSegmentWaveform(segment);
        self.segments.push(segment);
        return segment;
    };
    this.remove = function removeSegment(segment) {
        var index = null;
        this.segments.some(function (s, i) {
            if (s === segment) {
                index = i;
                return true;
            }
        });
        if (typeof index === 'number') {
            segment = this.segments[index];
            segment.overview.destroy();
            segment.zoom.destroy();
        }
        return index;
    };
    this.render = function renderSegments() {
        self.views.forEach(function (view) {
            view.segmentLayer.draw();
        });
    };
};
},{"Kinetic":1,"peaks/waveform/waveform.mixins":16}],20:[function(_dereq_,module,exports){
var WaveformAxis = _dereq_('peaks/waveform/waveform.axis'), mixins = _dereq_('peaks/waveform/waveform.mixins'), Kinetic = _dereq_('Kinetic');
'use strict';
function WaveformZoomView(waveformData, container, peaks) {
    var that = this;
    that.peaks = peaks;
    that.options = peaks.options;
    that.rootData = waveformData;
    that.playing = false;
    that.seeking = false;
    that.current_zoom_level = 0;
    that.data = that.rootData.resample({ scale: that.options.zoomLevels[that.current_zoom_level] });
    that.playheadPixel = that.data.at_time(that.options.mediaElement.currentTime);
    that.pixelLength = that.data.adapter.length;
    that.pixelsPerSecond = that.data.pixels_per_second;
    that.frameOffset = 0;
    that.width = container.clientWidth;
    that.height = container.clientHeight || that.options.height;
    that.stage = new Kinetic.Stage({
        container: container,
        width: that.width,
        height: that.height
    });
    that.zoomWaveformLayer = new Kinetic.Layer();
    that.uiLayer = new Kinetic.Layer();
    that.background = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: that.width,
        height: that.height
    });
    that.zoomWaveformLayer.add(that.background);
    that.axis = new WaveformAxis(that);
    that.createZoomWaveform();
    that.axis.drawAxis(0);
    that.createUi();
    that.stage.on('mousedown', function (event) {
        if (event.targetNode && !event.targetNode.attrs.draggable && !event.targetNode.parent.attrs.draggable) {
            if (event.type == 'mousedown') {
                that.seeking = true;
                var x = event.layerX, dX, p;
                that.stage.on('mousemove', function (event) {
                    dX = event.layerX > x ? x - event.layerX : (x - event.layerX) * 1;
                    x = event.layerX;
                    p = that.frameOffset + dX;
                    p = p < 0 ? 0 : p > that.pixelLength - that.width ? that.pixelLength - that.width : p;
                    that.seeking = false;
                    that.frameOffset = p;
                    that.updateZoomWaveform(p);
                });
                that.stage.on('mouseup', function () {
                    that.stage.off('mousemove mouseup');
                    if (that.seeking) {
                        that.peaks.emit('zoomview_user_seek', that.data.time(that.frameOffset + x), that.frameOffset + x);
                    }
                });
            }
        }
    });
    var userSeekHandler = function userSeekHandler(time) {
        var frameIndex = that.data.at_time(time);
        that.seekFrame(frameIndex);
        if (that.playing) {
            that.playFrom(time, frameIndex);
        }
    };
    that.peaks.on('player_time_update', function (time) {
        if (!that.seeking && !that.playing) {
            that.seekFrame(that.data.at_time(time));
        }
    });
    that.peaks.on('player_time_update', function (time) {
        if (!that.seeking && that.playing && !that.data.in_offset(that.data.at_time(time))) {
            that.newFrame(that.frameOffset);
        }
    });
    that.peaks.on('zoomview_user_seek', function (time, frameIndex) {
        that.options.mediaElement.currentTime = time;
        that.syncPlayhead(frameIndex);
        if (that.playing) {
            that.playFrom(time, that.data.at_time(time));
        }
    });
    that.peaks.on('waveform_seek', userSeekHandler);
    that.peaks.on('overview_user_seek', userSeekHandler);
    that.peaks.on('player_play', function (time) {
        that.playing = true;
        that.playFrom(time, that.data.at_time(time));
    });
    that.peaks.on('player_pause', function (time) {
        that.playing = false;
        if (that.playheadLineAnimation) {
            that.playheadLineAnimation.stop();
        }
        that.syncPlayhead(that.data.at_time(time));
    });
    that.peaks.on('waveform_zoom_level_changed', function (zoom_level) {
        if (that.playing) {
            return;
        }
        if (zoom_level != that.current_zoom_level) {
            that.current_zoom_level = zoom_level;
            that.data = that.rootData.resample({ scale: zoom_level });
            that.pixelsPerSecond = that.data.pixels_per_second;
            that.seekFrame(that.data.at_time(that.options.mediaElement.currentTime));
        }
    });
    that.peaks.on('window_resized', function (width, newWaveformData) {
        that.width = width;
        that.data = newWaveformData;
        that.stage.setWidth(that.width);
        that.updateZoomWaveform(that.frameOffset);
        that.peaks.emit('zoomview_resized');
    });
    var nudgeFrame = function nudgeFrame(step) {
        var time = that.options.mediaElement.currentTime;
        time += that.options.nudgeIncrement * step;
        that.seekFrame(that.data.at_time(time));
    };
    that.peaks.on('kybrd_left', nudgeFrame.bind(that, -1));
    that.peaks.on('kybrd_right', nudgeFrame.bind(that, 1));
    that.peaks.on('kybrd_shift_left', nudgeFrame.bind(that, -10));
    that.peaks.on('kybrd_shift_right', nudgeFrame.bind(that, 10));
}
WaveformZoomView.prototype.createZoomWaveform = function () {
    var that = this;
    that.zoomWaveformShape = new Kinetic.Shape({
        drawFunc: function (canvas) {
            that.data.offset(0, that.width);
            mixins.waveformDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
        },
        fill: that.options.zoomWaveformColor,
        strokeWidth: 0
    });
    that.zoomWaveformLayer.add(that.zoomWaveformShape);
    that.stage.add(that.zoomWaveformLayer);
    that.peaks.emit('waveform_zoom_displaying', 0 * that.data.seconds_per_pixel, that.width * that.data.seconds_per_pixel);
};
WaveformZoomView.prototype.createUi = function () {
    var that = this;
    that.zoomPlayheadLine = new Kinetic.Line({
        points: [
            {
                x: 0,
                y: 0
            },
            {
                x: 0,
                y: that.height
            }
        ],
        stroke: that.options.playheadColor,
        strokeWidth: 1
    });
    that.zoomPlayheadText = new Kinetic.Text({
        x: 2,
        y: 12,
        text: '00:00:00',
        fontSize: 11,
        fontFamily: 'sans-serif',
        fill: '#aaa',
        align: 'right'
    });
    that.zoomPlayheadGroup = new Kinetic.Group({
        x: 0,
        y: 0
    }).add(that.zoomPlayheadLine).add(that.zoomPlayheadText);
    that.uiLayer.add(that.zoomPlayheadGroup);
    that.stage.add(that.uiLayer);
};
WaveformZoomView.prototype.updateZoomWaveform = function (pixelOffset) {
    var that = this;
    var display = that.playheadPixel >= pixelOffset && that.playheadPixel <= pixelOffset + that.width;
    if (display) {
        var remPixels = that.playheadPixel - pixelOffset;
        that.zoomPlayheadGroup.show().setAttr('x', remPixels + 0.5);
        that.zoomPlayheadText.setText(mixins.niceTime(that.data.time(that.playheadPixel), false));
    } else {
        that.zoomPlayheadGroup.hide();
    }
    that.uiLayer.setZIndex(100);
    that.uiLayer.draw();
    that.zoomWaveformShape.setDrawFunc(function (canvas) {
        that.data.offset(pixelOffset, pixelOffset + that.width);
        mixins.waveformDrawFunction.call(this, that.data, canvas, mixins.interpolateHeight(that.height));
    });
    that.zoomWaveformLayer.draw();
    that.axis.drawAxis(that.data.time(pixelOffset));
    that.peaks.emit('waveform_zoom_displaying', pixelOffset * that.data.seconds_per_pixel, (pixelOffset + that.width) * that.data.seconds_per_pixel);
};
WaveformZoomView.prototype.playFrom = function (time, startPosition) {
    var that = this;
    if (that.playheadLineAnimation) {
        that.playheadLineAnimation.stop();
    }
    var frameSeconds = 0;
    that.playheadLineAnimation = new Kinetic.Animation(function (frame) {
        var time = frame.time;
        var seconds = time / 1000;
        var positionInFrame = Math.round(startPosition - that.frameOffset + that.pixelsPerSecond * (seconds - frameSeconds));
        that.syncPlayhead(that.frameOffset + positionInFrame);
    }, that.uiLayer);
    that.playheadLineAnimation.start();
};
WaveformZoomView.prototype.newFrame = function (frameOffset) {
    var nextOffset = frameOffset + this.width;
    if (nextOffset < this.data.adapter.length) {
        this.frameOffset = nextOffset;
        this.updateZoomWaveform(nextOffset);
        return true;
    }
    return false;
};
WaveformZoomView.prototype.syncPlayhead = function (pixelIndex) {
    var that = this;
    var display = pixelIndex >= that.frameOffset && pixelIndex <= that.frameOffset + that.width;
    that.playheadPixel = pixelIndex;
    if (display) {
        var remPixels = that.playheadPixel - that.frameOffset;
        that.zoomPlayheadGroup.show().setAttr('x', remPixels + 0.5);
        that.zoomPlayheadText.setText(mixins.niceTime(that.data.time(that.playheadPixel), false));
    } else {
        that.zoomPlayheadGroup.hide();
    }
};
WaveformZoomView.prototype.seekFrame = function (pixelIndex) {
    var that = this;
    var upperLimit = that.data.adapter.length - that.width;
    if (!that.data.in_offset(pixelIndex)) {
        if (pixelIndex > that.width && pixelIndex < upperLimit) {
            that.frameOffset = pixelIndex - Math.round(that.width / 2);
        } else if (pixelIndex >= upperLimit) {
            that.frameOffset = upperLimit;
        } else {
            that.frameOffset = 0;
        }
    }
    that.syncPlayhead(pixelIndex);
    that.updateZoomWaveform(that.frameOffset);
};
module.exports = WaveformZoomView;
},{"Kinetic":1,"peaks/waveform/waveform.axis":14,"peaks/waveform/waveform.mixins":16}]},{},[11])
(11)
});