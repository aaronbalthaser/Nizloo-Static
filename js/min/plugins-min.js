!function($,t,i,e){function o(t,i){this.element=t,this.id=this.element.id,this.options=$.extend({},n,i),this._defaults=n,this._name=s,this.init()}var s="panelAnimate",n={position:"bottom",revealtype:"mouseover",exposed:10,externalcontent:"",speed:200};o.prototype.showHide=function(t,i){var e=this,o="show"==t?0:-(this.height-this.options.exposed),s="bottom"==this.options.position?{bottom:o}:{top:o};this.$stickybar.stop().animate(s,i?this.options.speed:0,function(){e.$indicator.each(function(){var t=$(this);t.attr("src",t.attr("show"==e.currentState?"data-closeimage":"data-openimage"))})}),e.currentstate=t},o.prototype.toggle=function(){console.log("toggle")},o.prototype.init=function(){var t=this;this.$stickybar=$("#"+this.id).css("visibility","visible"),this.height=this.$stickybar.outerHeight(),this.currentState="hide",this.options.exposed=Math.min(this.height,this.options.exposed),"mouseover"==this.options.revealtype&&this.$stickybar.on("mouseenter mouseleave",function(i){t.showHide("mouseenter"==i.type?"show":"hide",!0)}),this.$indicator=this.$stickybar.find("img[data-openimage]"),setTimeout(function(){t.height=t.$stickybar.outerHeight()},1e3),this.showHide("hide")},$.fn[s]=function(t){return this.each(function(){$.data(this,"plugin_"+s)||$.data(this,"plugin_"+s,new o(this,t))})}}(jQuery,window,document);