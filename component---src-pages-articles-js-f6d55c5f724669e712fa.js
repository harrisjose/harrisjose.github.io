(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return x});var a=n(80),r=n.n(a),o=n(1),l=n.n(o),c=n(245),i=n.n(c),s=n(267),u=n.n(s),f=n(268),p=n.n(f),d=n(129),m=n(250),h=n(265),v=n(264),w=Object(d.css)("max-width:100%;width:768px;line-height:26px;"),g=Object(d.css)("text-decoration:none;box-shadow:none;color:inherit;line-height:34px;"),b=function(e){function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.allMarkdownRemark.edges");return l.a.createElement(m.a,null,l.a.createElement("div",{className:"bg-haze minvh-100 flex flex-column"},l.a.createElement(p.a,{title:"Articles | "+e}),l.a.createElement("div",{className:"bg-white pt-2"},l.a.createElement(v.a,null),l.a.createElement("div",{className:"my-5 mx-auto container"},l.a.createElement("h1",null,"Articles"))),l.a.createElement("div",{className:"my-5 mx-auto container grow-1"},t.map(function(e){var t=e.node,n=u()(t,"frontmatter.title")||t.fields.slug;return l.a.createElement("div",{key:t.fields.slug,className:"mb-4 "+w},l.a.createElement("h3",null,l.a.createElement(i.a,{to:t.fields.slug,className:g},n)),l.a.createElement("small",null,t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})),l.a.createElement("div",null,l.a.createElement("hr",{className:"divider"}),l.a.createElement(h.a,{className:"self-end"}))))},r()(t,e),t}(l.a.Component);t.default=b;var x="4237565081"},244:function(e,t,n){e.exports=n(257)},245:function(e,t,n){"use strict";var a=n(263);t.__esModule=!0,t.withPrefix=function(e){return function(e){return e.replace(/^\/\//g,"/")}(m+e)},t.navigateTo=t.default=void 0;var r=a(n(262)),o=a(n(244)),l=a(n(254)),c=a(n(80)),i=a(n(251)),s=a(n(0)),u=a(n(1)),f=n(8),p=n(82),d=n(20),m="/",h={activeClassName:s.default.string,activeStyle:s.default.object,exact:s.default.bool,strict:s.default.bool,isActive:s.default.func,location:s.default.object},v=function(e){function t(t,n){var a;a=e.call(this)||this;var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=n.router.history.location,l=(0,d.createLocation)(t.to,null,null,o);return a.state={path:(0,d.createPath)(l),to:l,IOSupported:r,location:o},a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}t.getDerivedStateFromProps=function(e,t){if(t.to===e.to)return null;var n=(0,d.createLocation)(e.to,null,null,t.location);return{path:(0,d.createPath)(n),to:n}};var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue(this.state.path)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e,t=this,n=this.props,a=n.onClick,c=n.onMouseEnter,i=(0,l.default)(n,["onClick","onMouseEnter"]);return e=(0,o.default)(h).some(function(e){return t.props[e]})?f.NavLink:f.Link,u.default.createElement(e,(0,r.default)({onMouseEnter:function(e){c&&c(e),___loader.hovering(t.state.path)},onClick:function(e){if(a&&a(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var r=t.state.path.split("#").slice(1).join("#"),o=document.getElementById(r);return null!==o?(o.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},i,{to:this.state.to,innerRef:this.handleRef}))},(0,c.default)(t,e),t}(u.default.Component);v.propTypes=(0,r.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.oneOfType([s.default.string,s.default.object]).isRequired}),v.contextTypes={router:s.default.object};var w=(0,p.polyfill)(v);t.default=w,t.navigateTo=function(e){window.___navigateTo(e)}},247:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){"use strict";var a=n(80),r=n.n(a),o=n(1),l=n.n(o),c=n(129);n(266),n(249),n(247),Object(c.injectGlobal)(":root{--red:#f3234a;--yellow:#ffd246;--mint:#d7f3d4;--navy:#1c3c5a;--light:#f7f8f8;--smoke:#d9dbdd;--gray:#aab0b5;--blue:#3274D6;--green:#2BB772;--haze:#F7F8F8;--charcoal:#666;}");var i=function(e){function t(){return e.apply(this,arguments)||this}return t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,e)},r()(t,e),t}(l.a.Component);t.a=i},251:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},252:function(e,t,n){n(131),e.exports=n(15).Object.getOwnPropertySymbols},253:function(e,t,n){e.exports=n(252)},254:function(e,t,n){var a=n(253),r=n(244);e.exports=function(e,t){if(null==e)return{};var n,o,l={},c=r(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(l[n]=e[n]);if(a){var i=a(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},255:function(e,t,n){var a=n(39),r=n(15),o=n(38);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",l)}},256:function(e,t,n){var a=n(130),r=n(49);n(255)("keys",function(){return function(e){return r(a(e))}})},257:function(e,t,n){n(256),e.exports=n(15).Object.keys},258:function(e,t,n){"use strict";var a=n(49),r=n(81),o=n(50),l=n(130),c=n(132),i=Object.assign;e.exports=!i||n(38)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=i({},e)[n]||Object.keys(i({},t)).join("")!=a})?function(e,t){for(var n=l(e),i=arguments.length,s=1,u=r.f,f=o.f;i>s;)for(var p,d=c(arguments[s++]),m=u?a(d).concat(u(d)):a(d),h=m.length,v=0;h>v;)f.call(d,p=m[v++])&&(n[p]=d[p]);return n}:i},259:function(e,t,n){var a=n(39);a(a.S+a.F,"Object",{assign:n(258)})},260:function(e,t,n){n(259),e.exports=n(15).Object.assign},261:function(e,t,n){e.exports=n(260)},262:function(e,t,n){var a=n(261);function r(){return e.exports=r=a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}e.exports=r},263:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},264:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(245),l=n.n(o),c=n(129),i=Object(c.css)("color:var(--gray);"),s=Object(c.css)("color:var(--navy);");t.a=function(){return r.a.createElement("nav",{className:"w-100"},r.a.createElement("div",{className:"mx-auto container"},r.a.createElement("ul",{className:"flex flex-gap-4"},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/",className:i},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/articles",className:i,activeClassName:s},"Articles")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/about",className:i,activeClassName:s},"About")))))}},265:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(129),l=Object(o.css)("width:22px;height:20px;fill:var(--navy);vertical-align:baseline;"),c=function(e){return r.a.createElement("a",{href:e.href,className:"navy flex flex-gap-1 flex-ycenter",target:"_blank",rel:"noopener noreferrer"},e.children)};t.a=function(){return r.a.createElement("div",{className:"footer container mx-auto py-5 flex flex-between flex-ycenter"},r.a.createElement("ul",{className:"flex flex-gap-3 flex-wrap"},r.a.createElement("li",null,r.a.createElement(c,{href:"https://github.com/harrisjose"},r.a.createElement("svg",{className:l,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},r.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})))),r.a.createElement("li",null,r.a.createElement(c,{href:"https://twitter.com/theharrisjose"},r.a.createElement("svg",{className:l,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M459.37 151.72c.33 4.54.33 9.1.33 13.64 0 138.72-105.59 298.56-298.56 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84a105.12 105.12 0 0 1-98.1-72.77 132.7 132.7 0 0 0 19.81 1.62c9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0 1 20.8 195.57v-1.3a105.68 105.68 0 0 0 47.43 13.32 104.86 104.86 0 0 1-46.78-87.39c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 0 0 216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03 0-57.83 46.78-104.94 104.94-104.94 30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0 0 66.6-25.34 104.65 104.65 0 0 1-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 0 1-52.63 54.26z"})))),r.a.createElement("li",null,r.a.createElement(c,{href:"https://www.linkedin.com/in/harrisjose/"},r.a.createElement("svg",{className:l,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},r.a.createElement("path",{d:"M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"}))))),r.a.createElement("p",{className:"tmd grey copytext"},"2018 © Harris Jose"))}}}]);
//# sourceMappingURL=component---src-pages-articles-js-f6d55c5f724669e712fa.js.map