(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3TCc":function(e,t,n){e.exports=n.p+"static/orchestra-2-be33192a927c2f517938bb157cf2ad4d.jpg"},"3jXG":function(e,t,n){"use strict";n("t+fG")("blink",(function(e){return function(){return e(this,"blink","","")}}))},"3nLz":function(e,t,n){"use strict";n("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8Z9I":function(e,t,n){n("AqHK"),n("JHok"),n("U6Bt"),n("YbXK"),n("cFtU"),n("3jXG"),n("sc67"),n("sC2a"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("pJf4"),n("MIFh"),n("m210"),n("4DPX"),n("n7j8"),n("gu/5"),n("ZiRl"),n("6kNP"),n("8npG"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=f(o),l=f(n(2)),s=f(n(10)),u=f(n(12)),c=f(n(13)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function f(e){return e&&e.__esModule?e:{default:e}}var d=["🔙","⏰"],m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,a){var o=n.props.avgTypingDelay,i=n.props.stdTypingDelay;return n.props.delayGenerator(o,i,{line:e,lineIdx:t,character:r,charIdx:a,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return p.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,a=n.props.onLineTyped;return p.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):p.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,o){n.setState({textLines:n.state.textLines.concat([""])},(function(){p.eachPromise(r,n.typeCharacter,r,t).then((function(){return a(r,t)})).then(e).catch(o)}))}))},n.typeCharacter=function(e,t,r,a){if(!n.mounted)return Promise.resolve();var o=n.props.onCharacterTyped;return new Promise((function(i){var l=n.state.textLines.slice();p.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var s="🔙"===e;if("⏰"===e)i();else{if(s&&a>0){for(var u=a-1,c=l[u],p=u;p>=0&&(!(c.length>0)||d.includes(c[0]));p--)c=l[u=p];l[u]=c.substr(0,c.length-1)}else l[a]+=e;n.setState({textLines:l},(function(){var l=n.delayGenerator(r,a,e,t);o(e,t),setTimeout(i,l)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=p.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return p.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,a=this.state.isDone,o=p.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return i.default.createElement("div",{className:"Typist "+t},o,i.default.createElement(s.default,r({isDone:a},n)))}}]),t}(o.Component);m.propTypes={children:l.default.node,className:l.default.string,avgTypingDelay:l.default.number,stdTypingDelay:l.default.number,startDelay:l.default.number,cursor:l.default.object,onCharacterTyped:l.default.func,onLineTyped:l.default.func,onTypingDone:l.default.func,delayGenerator:l.default.func},m.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:p.gaussianRnd},t.default=m,m.Backspace=u.default,m.Delay=c.default},function(e,t){e.exports=n("q1tI")},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(6),i=n(7),l=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator;var s={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p((function(t,n,r,a,o){if("function"!=typeof e)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l))return new c("Invalid "+a+" `"+o+"` of type `"+m(l)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<l.length;s++){var u=e(l,s,r,a,o+"["+s+"]",i);if(u instanceof Error)return u}return null}))},element:p((function(t,n,r,a,o){var i=t[n];return e(i)?null:new c("Invalid "+a+" `"+o+"` of type `"+m(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||"<<anonymous>>";return new c("Invalid "+a+" `"+o+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:p((function(e,t,n,r,a){return d(e[t])?null:new c("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,a,o){if("function"!=typeof e)return new c("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],s=m(l);if("object"!==s)return new c("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(l.hasOwnProperty(u)){var p=e(l,u,r,a,o+"."+u,i);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return p((function(t,n,r,a,o){for(var i=t[n],l=0;l<e.length;l++)if(u(i,e[l]))return null;return new c("Invalid "+a+" `"+o+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",h(n),t),r.thatReturnsNull}return p((function(t,n,r,a,o){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,a,o,i))return null}return new c("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,a,o){var l=t[n],s=m(l);if("object"!==s)return new c("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var p=e[u];if(p){var f=p(l,u,r,a,o+"."+u,i);if(f)return f}}return null}))}};function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function c(e){this.message=e,this.stack=""}function p(e){function n(n,r,o,l,s,u,p){(l=l||"<<anonymous>>",u=u||o,p!==i)&&(t&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[o]?n?null===r[o]?new c("The "+s+" `"+u+"` is marked as required in `"+l+"`, but its value is `null`."):new c("The "+s+" `"+u+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(r,o,l,s,u)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function f(e){return p((function(t,n,r,a,o,i){var l=t[n];return m(l)!==e?new c("Invalid "+a+" `"+o+"` of type `"+y(l)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function d(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(d);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!d(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!d(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return c.prototype=Error.prototype,s.checkPropTypes=l,s.PropTypes=s,s}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";e.exports=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7);e.exports=function(){function e(e,t,n,r,i,l){l!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=l(a),i=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}n(11);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return o.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(a.Component);s.propTypes={blink:i.default.bool,show:i.default.bool,element:i.default.node,hideWhenDone:i.default.bool,hideWhenDoneDelay:i.default.number,isDone:i.default.bool},s.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=s},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),a=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Backspace",i.propTypes={count:a.default.number,delay:a.default.number},i.defaultProps={count:1,delay:0},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),a=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("noscript",null)};i.componentName="Delay",i.propTypes={ms:a.default.number.isRequired},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=function(e,n,a){return e.then((function(){return t.apply(void 0,[n,a].concat(r))}))};return Array.from(e).reduce(o,Promise.resolve())},t.exclude=l,t.isBackspaceElement=s,t.isDelayElement=u,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(i.default.isValidElement(r))s(r)||u(r)?n.unshift(r):i.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var a=!0,o=!1,l=void 0;try{for(var c,p=r[Symbol.iterator]();!(a=(c=p.next()).done);a=!0){var f=c.value;t.push(f)}}catch(d){o=!0,l=d}finally{try{!a&&p.return&&p.return()}finally{if(o)throw l}}}else n.unshift(r)}return n},t.cloneElement=c,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,a){if(a>=n.length)return[null,a];var o=a,l=function(t){var a=e(t,n,o),i=r(a,2),l=i[0],s=i[1];return o=s,l};if(i.default.isValidElement(t)&&!s(t)&&!u(t)){var p=i.default.Children.map(t.props.children,l)||[];return[c(t,p),o]}if(Array.isArray(t)){return[t.map(l),o]}return[n[o],o+1]}(t,n,0)[0]};var a,o=n(1),i=(a=o)&&a.__esModule?a:{default:a};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function l(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function s(e){return e&&e.type&&"Backspace"===e.type.componentName}function u(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,t){var n=e.type,r=l(e.props,["children"]),a=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+a,i.default.createElement.apply(i.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},EYWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("3nLz"),n("sC2a");var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("T/ZZ"),s=n.n(l),u=n("IpnI"),c=n.n(u);var p=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t,n,r,o=this.props,l=o.postNode,u=o.postPath,p=o.postSEO,f="";if(p){var d=l.frontmatter;e=d.title,t=d.description?d.description:l.excerpt,d.thumbnail&&(f=d.thumbnail.childImageSharp.fixed.src),n=s()(c.a.siteUrl,"/"===(r=u)?r:r.replace(/\/$/,""))}else e=c.a.siteTitle,t=c.a.siteDescription,f=c.a.siteLogo;f=s()(c.a.siteUrl,f);var m=s()(c.a.siteUrl,c.a.pathPrefix),y=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:e,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""}];return p&&y.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:f}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:e,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:f},description:t}),a.a.createElement(i.a,null,a.a.createElement("meta",{name:"description",content:t}),a.a.createElement("meta",{name:"image",content:f}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(y)),a.a.createElement("meta",{property:"og:url",content:p?n:m}),p&&a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:title",content:e}),a.a.createElement("meta",{property:"og:description",content:t}),a.a.createElement("meta",{property:"og:image",content:f}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:c.a.userTwitter}),a.a.createElement("meta",{name:"twitter:title",content:e}),a.a.createElement("meta",{name:"twitter:description",content:t}),a.a.createElement("meta",{name:"twitter:image",content:f}))},r}(r.Component)},JRJL:function(e,t,n){e.exports=n.p+"static/orchestra-1-a862ac413434aaf81c4fa12fdc4f67b4.jpg"},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T})),n.d(t,"pageQuery",(function(){return x}));var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("Wbzz"),s=n("83Zx"),u=n("lPsB"),c=n("8Z9I"),p=n.n(c);var f=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleDone=function(){n.setState({typing:!1},(function(){n.setState((function(e){return{typing:!0,counter:e.counter+1}}))}))},n.state={typing:!0,counter:0},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=a.a.createElement("span",{className:this.props.className},a.a.createElement(p.a,{className:"typist",startDelay:0===this.state.counter?1500:0,stdTypingDelay:50,avgTypingDelay:120,cursor:{show:!1},onTypingDone:this.handleDone},this.props.texts.map((function(e,t){return a.a.createElement("span",{key:e+"-"+t},e,a.a.createElement(p.a.Backspace,{count:e.length+1,delay:750}),a.a.createElement(p.a.Delay,{ms:250}))})))," ");return this.state.typing?e:null},r}(a.a.Component),d=n("EYWl"),m=n("IpnI"),y=n.n(m),h=n("JRJL"),v=n.n(h),g=n("3TCc"),b=n.n(g),E=n("oDwS"),w=n.n(E);var T=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.latest.edges;return a.a.createElement(s.a,null,a.a.createElement(i.a,{title:y.a.siteTitle+" – University of Edinburgh"}),a.a.createElement(d.a,null),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"lead"},a.a.createElement("div",{className:"elevator"},a.a.createElement("h4",null,"EST. 1991"),a.a.createElement("h1",null,"Edinburgh University String Orchestra",a.a.createElement("br",null),a.a.createElement("span",{className:"title-desc"},"Performing "),a.a.createElement("br",null),a.a.createElement(f,{className:"title-desc",texts:["Shostakovich","Dvořák","Beethoven","Britten","Bridge"]}),a.a.createElement("br",null),a.a.createElement("span",{className:"title-desc"},"at the next concert.")),a.a.createElement("div",{className:"parallel"},a.a.createElement("div",{className:"left shadow round"},a.a.createElement("img",{src:v.a,alt:"violin players"})),a.a.createElement("div",{className:"right"},a.a.createElement("p",null,'EUSO, the University of Edinburgh\'s only string ensemble,\n                     delivers twice a year a concert performance which has been described as\n                     "truly polished" and "outstanding". The orchestra continues to deliver high\n                     quality concerts in the University.'),a.a.createElement(l.Link,{to:"/concerts/"},"→ Upcoming Concerts"))),a.a.createElement("hr",null)))),a.a.createElement("div",{className:"container front-page"},a.a.createElement("section",{className:"section"},a.a.createElement("h2",null,"Latest News"),a.a.createElement(u.a,{simple:!0,postEdges:e}),a.a.createElement("div",{className:"lead"},a.a.createElement(l.Link,{to:"/news/"},"→ More News"))),a.a.createElement("hr",null)),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"lead"},a.a.createElement("div",{className:"elevator"},a.a.createElement("div",{className:"parallel"},a.a.createElement("div",{className:"left"},a.a.createElement("p",null,a.a.createElement("h2",null,"Outreach Events"),"EUSO is passionate about engaging with the community in Edinburgh and helping\n                    to spread the joy of music to everyone. We frequently work with care homes and\n                    charities and perform pop up concerts in public spaces such as Waverley Mall.\n                    ",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/outreach/"},"→ Get in Touch"))),a.a.createElement("div",{className:"right round shadow"},a.a.createElement("img",{src:w.a,alt:"Alexia explaining to young students how a violin works"}))),a.a.createElement("hr",null),a.a.createElement("div",{className:"parallel"},a.a.createElement("div",{className:"left"},a.a.createElement("p",null,a.a.createElement("h2",null,"Join us"),"We are an ensemble of around 25 string players, rehearsing every\n                    Wednesday afternoon from 2.30 - 5.30pm to work towards concerts at\n                    the end of each semester. We play a wide variety of music from Handel\n                    to Shostakovich and Strauss to Britten and we work with a range of\n                    prestigious conductors who help us maintain a very high standard.\n                    We welcome students from every faculty, as well as non-students.",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/join/"},"→ More Information"))),a.a.createElement("div",{className:"right round shadow"},a.a.createElement("img",{src:b.a,alt:"orchestra playing Beethoven"}))),a.a.createElement("hr",null),a.a.createElement("div",{className:"single"},a.a.createElement("h2",null,"Miscellaneous")),a.a.createElement(l.Link,{to:"/about/"},"→ Our Story"),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/social/"},"→ Social Life"),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/sponsors/"},"→ Sponsor us"),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/contact/#follow-us"},"→ Follow us")))))},r}(r.Component),x="1533394635"},ZiRl:function(e,t,n){var r=n("P8UN");r(r.P,"String",{repeat:n("gd4K")})},gd4K:function(e,t,n){"use strict";var r=n("1Llc"),a=n("ap2Z");e.exports=function(e){var t=String(a(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},lPsB:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("QDog");var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=r.prototype;return l.getPostList=function(){return this.props.postEdges.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},l.render=function(){var e=this.props.simple,t=this.getPostList();return a.a.createElement("section",{className:"posts "+(e?"simple":"")},t.map((function(t){var n=Object(i.a)(t.date);return a.a.createElement(o.Link,{to:t.path,key:t.title},a.a.createElement("div",{className:"each"},a.a.createElement("div",null),a.a.createElement("div",{className:"each-list-item"},e?a.a.createElement("h3",null,t.title):a.a.createElement("h2",null,t.title),a.a.createElement("div",{className:"datetime"},n),e?a.a.createElement("p",null,t.excerpt):a.a.createElement("div",null))))})))},r}(r.Component)},oDwS:function(e,t,n){e.exports=n.p+"static/outreach-1-829fbee8b769b1dd8dd583b2663ff217.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-1db9a129f992f8731c30.js.map