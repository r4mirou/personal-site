(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4Nhu":function(e){e.exports=JSON.parse('{"data":{"logo":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADwElEQVQ4y5VVWUiUURQ+//+PLaZlVNKi49hCRUURaUQEQRQRREWb9CBBPtliWeOY0UtQBiFR0VtED9EC1kOFhVGZRNZDLjPjODozmWVa1jQz6TTjMt6+e//FXyisC2fu/e855zvrnEuBYaKWGIkVZUTuPpLwLZO2cD4A6gaFQMV1XSrP208SZOUvTJXDN3EsehFQL5p/kdQcJUUH8vyidS1xegMKAugYqADnz9hd4G3R5aAjc11+flCvIcOSYhLIgtJNKPdhv47v2ToPclNxdxG8XuwPALTYpKeISGFNLOdPmoCL0xDmodXifrXZC1ffKO+XQOYRZH9ivwBDU8i8PDHaC4YfAu9x3mfcx8niGSC5KC0h2zN/KJfzb1seP9xiMelthU4zqBPnAuRT4tbua16dcfVSMhf8xASYTH9Zd68cUhJMzVtjiBSAHQfGd2A95oDD3jitMeVJadcq5+mnlQFGKUenDa4tsQW32a2hzSVZoTTOO7ehTvIOjxhtG6RF0O3lgF3+IZopWgReuaOmVAxQm49R7pHJ7O0pW5yVWYeYPSPsBeh0zi+awiS9wgh3EiL0csAeoGfxy1b0lrNXh9tELQP0riVBOURs/JlcX7rDFkkH4Bd7ZtjBJeyZIQsKJgA7GE0FYEAHtArAATMgPB6kBnfUgmozpWyZL9tu/bEQgN8AeEIFDBuAHxmljQHIOGC9M5K8BqFVObKDbkdGlIfsKrGpebRbw9KYgE0mDz1xuTHIaOmRFHbLkRViDlt496E5HyTNO71H/wOwX2r0M55DotJ5PT6HLdiEdhENXqgw6d8A+0ZVuaExmLpUS0FS0WTWfjiZ1eIsmnsP0vI3wJEqo23YSB9eQ6VPuMIT8zoZbX9Ws/7kjdPl7XcuFe/i/NsVDsX9hyp3+YZolhhB6ENnfBRgBQBfg2qaY8qrVkZP4Ek10pCngSjoQ9Hc3fgDqH0YoyEArTL9U2Q0+JiLG3WGkmTdOJyaC90I97BKm3mlTRFK4kx/giRYk+ENfdCoQ6MuJoaCDCdEqAtzxHchML4C67mwhIv9uOgAqBfnHaOGJ3KEvx/5+TTHGSEqpmmzETr1AixGh1ELYxLxUFPBLAczgr0a1pab0wCPzUN4PmQqtSF8FfwZBlCrOrGNqQEPFkDoniEcpek6D0M2BXdnNaNPYXSFYVR9CohethtWJX5pmso8nAbQV1AhQsrX0tKK806TnKz3YuUb/AQSokJG5firx/uRfxefF6/eQVAnqAdUhsKN06oqXr1uZsxD8er9BonTrY3eEDijAAAAAElFTkSuQmCC","width":35,"height":40,"src":"/static/a240b6f19b1af7f11e54c4f8f31c3bb5/cf383/logo.png","srcSet":"/static/a240b6f19b1af7f11e54c4f8f31c3bb5/cf383/logo.png 1x,\\n/static/a240b6f19b1af7f11e54c4f8f31c3bb5/c0215/logo.png 1.5x,\\n/static/a240b6f19b1af7f11e54c4f8f31c3bb5/d2bb3/logo.png 2x"}}}}}')},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"8+s/":function(e,t,r){"use strict";r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},"8ypT":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),c=n(r("8OQS")),s=n(r("pVnL")),l=n(r("q1tI")),u=n(r("17x9")),f=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},d=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(d);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=f(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,T=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),T.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),T.set(e,t)),function(){r.unobserve(e),T.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+c+r+n+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,c=l.default.createElement(k,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),c):c})),k=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,f=e.loading,d=e.draggable,p=e.ariaHidden,h=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:u,ref:t,loading:f,draggable:d,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,c=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,T=e.itemProp,w=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,s.default)({opacity:C?1:0,transition:P?"opacity "+b+"ms":"none"},c),I="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&R,c,d),M={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:T};if(m){var z=m,H=h(m);return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),I&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&R)}),H.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:z,generateSources:A}),H.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:z,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(z),l.default.createElement(k,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T,loading:w,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:r,title:t,loading:w},H,{imageVariants:z}))}}))}if(g){var q=g,V=h(g),B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete B.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},I&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:I,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},P&&R)}),V.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:M,imageVariants:q,generateSources:A}),V.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:M,imageVariants:q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(q),l.default.createElement(k,{alt:r,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T,loading:w,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:r,title:t,loading:w},V,{imageVariants:q}))}}))}return null},t}(l.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),I=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});P.propTypes={resolutions:j,sizes:I,fixed:u.default.oneOfType([j,u.default.arrayOf(j)]),fluid:u.default.oneOfType([I,u.default.arrayOf(I)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=P;t.default=R},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=(r("8ypT"),r("3nLz"),r("4Nhu")),o=r("ZJa9"),c=r.n(o),s=r("iuhU"),l=r("9eSz"),u=r.n(l),f=r("oEq0"),d=r("ma3e"),p=function(){var e,t=Object(n.useState)(!1),r=t[0],o=t[1],l=function(e){o(e)},p=i.data;return a.a.createElement("header",null,a.a.createElement("div",{className:c.a.logo},a.a.createElement(u.a,{fixed:p.logo.childImageSharp.fixed,draggable:!1,style:{marginTop:"10px"}})),a.a.createElement("nav",{className:Object(s.a)((e={},e[c.a.active]=r,e))},a.a.createElement("ul",null,a.a.createElement("li",{onClick:function(){return l(!1)}},a.a.createElement(f.AnchorLink,{to:"/#anchorAbout"},a.a.createElement("span",null,"Sobre"))),a.a.createElement("li",{onClick:function(){return l(!1)}},a.a.createElement(f.AnchorLink,{to:"/#anchorSkills"},a.a.createElement("span",null,"Skills"))),a.a.createElement("li",{onClick:function(){return l(!1)}},a.a.createElement(f.AnchorLink,{to:"/#anchorProjects"},a.a.createElement("span",null,"Projetos"))),a.a.createElement("li",{onClick:function(){return l(!1)}},a.a.createElement(f.AnchorLink,{to:"/#anchorExperiences"},a.a.createElement("span",null,"Experiências"))),a.a.createElement("li",{onClick:function(){return l(!1)}},a.a.createElement(f.AnchorLink,{to:"/#anchorBlog"},a.a.createElement("span",null,"Blog"))))),a.a.createElement("div",{className:c.a.menuToggle,onClick:function(){return l(!r)}},r?a.a.createElement(d.b,{className:c.a.icon}):a.a.createElement(d.a,{className:c.a.icon})))},h=r("/MKj");t.a=function(e){var t=e.children,r=Object(h.c)((function(e){return e.theme.theme}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null),a.a.createElement("main",null,t),a.a.createElement("footer",null,a.a.createElement("div",{style:{height:"50px",background:r.pallete.componentTransparency,color:r.textColor.componentText,display:"flex",justifyContent:"flex-end",padding:"20px",boxShadow:"0px -3px 14px -2px "+r.pallete.primary}},"Developed by  ",a.a.createElement("span",{style:{color:r.pallete.primary}},"Ramiro4Dev!"))))}},F0uZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=s;var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("Wbzz"),o=r("dj5g"),c=r("PDH8");function s(e){var t=e.to,r=e.title,n=e.children,c=e.className,s=e.stripHash,l=void 0!==s&&s,u={to:l?(0,o.stripHashedLocation)(t):t,onClick:function(e){return l?(0,o.handleStrippedLinkClick)(t,e):(0,o.handleLinkClick)(t,e)}};return r&&(u.title=r),c&&(u.className=c),a.default.createElement(i.Link,u,Boolean(n)?n:r)}s.propTypes=c.anchorLinkTypes},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("AqHK"),r("4DPX"),r("sc67"),r("E5k/");var n=r("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function s(e){return function(t){return n.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,s=e.title,l=c(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},PDH8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var n,a=(n=r("17x9"))&&n.__esModule?n:{default:n};var i={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,children:a.default.node};t.anchorLinkTypes=i},ZJa9:function(e,t,r){e.exports={active:"style-module--active--2B_hN",menuToggle:"style-module--menuToggle--1WPXO",icon:"style-module--icon--33IGA",logo:"style-module--logo--2_SmV"}},bmMU:function(e,t,r){r("Ll4R"),r("Ggvi"),r("q8oJ"),r("C9fy"),r("Kz6e"),r("klQ5"),r("MIFh"),r("ToIb"),r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("xJgp");var n="undefined"!=typeof Element,a="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(a&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!r.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],r.get(s.value[0])))return!1;return!0}if(i&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!r.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(t[s]!==r[s])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],r[l[s]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},iuhU:function(e,t,r){"use strict";r("MIFh");function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),i=r("rjfK").f,o=r("chL8").f,c=r("mhTz"),s=r("lb9j"),l=n.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,h=new l(d)!==d;if(r("QPJK")&&(!h||r("96qb")((function(){return p[r("sOol")("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(e,t){var r=this instanceof l,n=c(e),i=void 0===t;return!r&&n&&e.constructor===l&&i?e:a(h?new u(n&&!i?e.source:e,t):u((n=e instanceof l)?e.source:e,n&&i?s.call(e):t),r?this:f,l)};for(var m=function(e){e in l||i(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),y=0;g.length>y;)m(g[y++]);f.constructor=l,l.prototype=f,r("IYdN")(n,"RegExp",l)}r("to/b")("RegExp")},oEq0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return n.AnchorLink}});var n=r("F0uZ")},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("wZFJ"),r("HQhv"),r("n7j8"),r("1dPr"),r("JHok"),r("OeI1"),r("MIFh"),r("sC2a"),r("sc67"),r("LagC"),r("pS08"),r("E5k/"),r("R48M"),r("m210"),r("4DPX"),r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK");var n,a,i,o,c=r("17x9"),s=r.n(c),l=r("8+s/"),u=r.n(l),f=r("bmMU"),d=r.n(f),p=r("q1tI"),h=r.n(p),m=r("MgzW"),g=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",S="href",A="http-equiv",O="innerHTML",C="itemprop",x="name",L="property",k="rel",P="src",j="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",N="defer",M="encodeSpecialCharacters",z="onChangeClientState",H="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),V=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=X(e,T.TITLE),r=X(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,R);return t||n||void 0},Y=function(e){return X(e,z)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},_=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===k&&"canonical"===e[r].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==O&&c!==w&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=g()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;se(T.BODY,n),se(T.HTML,a),ce(f,d);var p={baseTag:le(T.BASE,r),linkTags:le(T.LINK,i),metaTags:le(T.META,o),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,u)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[h.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(T.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(b,a,n),link:de(T.LINK,i,n),meta:de(T.META,o,n),noscript:de(T.NOSCRIPT,c,n),script:de(T.SCRIPT,s,n),style:de(T.STYLE,l,n),title:de(T.TITLE,{title:f,titleAttributes:d},n)}},he=u()((function(e){return{baseTag:_([S,j],e),bodyAttributes:J(y,e),defer:X(e,N),encode:X(e,M),htmlAttributes:J(b,e),linkTags:Z(T.LINK,[k,S],e),metaTags:Z(T.META,[x,E,A,L,C],e),noscriptTags:Z(T.NOSCRIPT,[O],e),onChangeClientState:Y(e),scriptTags:Z(T.SCRIPT,[P,O],e),styleTags:Z(T.STYLE,[w],e),title:Q(e),titleAttributes:J(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=he,o=i=function(e){function t(){return D(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case T.TITLE:return U({},a,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case T.BODY:return U({},a,{bodyAttributes:U({},i)});case T.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(G(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=G(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),i=r("ap2Z"),o=/"/g,c=function(e,t,r,n){var a=String(i(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},vrFN:function(e,t,r){"use strict";var n=r("51K9"),a=r("q1tI"),i=r.n(a),o=r("qhky"),c=r("/MKj");function s(e){var t=e.description,r=e.lang,s=e.meta,l=e.title,u=Object(c.c)((function(e){return e.theme.theme}));Object(a.useEffect)((function(){document.body.style.setProperty("background",u.pallete.background)}));var f=n.data.site,d=t||f.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:l,titleTemplate:"%s | "+f.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(s)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},wZFJ:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(3);n(n.P+n.F*!r("h/qr")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(i)}}]);
//# sourceMappingURL=commons-c3c43815be52eb100592.js.map