"use strict";(self.webpackChunkstring_eusa_ed_ac_uk=self.webpackChunkstring_eusa_ed_ac_uk||[]).push([[102],{7789:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1721),a=n(7294),i=n(5444),s=n(1153),l=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.getPostList=function(){return this.props.postEdges.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},n.render=function(){var e=this.props.simple,t=this.getPostList();return a.createElement("section",{className:"posts "+(e?"simple":"")},t.map((function(t){var n=(0,s.p)(t.date);return a.createElement(i.Link,{to:t.path,key:t.title},a.createElement("div",{className:"each"},a.createElement("div",null),a.createElement("div",{className:"each-list-item"},e?a.createElement("h3",null,t.title):a.createElement("h2",null,t.title),a.createElement("div",{className:"datetime"},n),e?a.createElement("p",null,t.excerpt):a.createElement("div",null))))})))},t}(a.Component)},4098:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(1721),a=n(7294),i=n(5414),s=n(7065),l=n(7789),o=n(2797),c=n.n(o),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return a.createElement(s.Z,null,a.createElement(i.Z,{title:'Posts in category "'+e+'" – '+c().siteTitle}),a.createElement("div",{className:"container"},a.createElement("h1",null,e),a.createElement(l.Z,{postEdges:t})))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-category-js-f380e2a170a89f6ab7a6.js.map