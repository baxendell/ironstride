!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("ak1U"),e.exports=n("4j1S")},"4j1S":function(e,t){},ak1U:function(e,t){jQuery(document).ready(function(e){({init:function(){var t,n,o,a,i;e(".squares-grid").find("> br").remove(),e("input, textarea").on("focus",function(){e(this).attr("placeholder")&&e(this).data("placeholder",e(this).attr("placeholder")).removeAttr("placeholder")}).on("blur",function(){e(this).data("placeholder")&&e(this).attr("placeholder",e(this).data("placeholder")).removeData("placeholder")}),e(".navbar-toggler").on("click",function(){e(".full-screen-menu").addClass("nav-active"),e(".full-screen-menu-close").delay(400).queue(function(){e(this).addClass("close-active").dequeue()})}),e(".full-screen-menu-close").on("click",function(){e(this).removeClass("close-active"),e(".full-screen-menu").delay(250).queue(function(){e(this).removeClass("nav-active").dequeue()})}),e("#commentform").addClass("noauto"),a="",e(".toc-heading").each(function(){t=e(this),n=t.text(),o="#"+t.attr("id"),a+="<li><a class='toc-link' href='"+o+"'>"+n+"</a></li>"}),e(".toc-table ul").prepend(a),e(".toc-link:empty").each(function(){e(this).parent().css({display:"none"})}),e(".grid-attorney .attorney-item").matchHeight(),e(".grid-videos .video-description").matchHeight(),e(".grid-results .item").matchHeight(),e(".contact-sidebar .col-item").matchHeight(),enquire.register("screen and (min-width: 992px) and (max-width: 1199px)",{setup:function(){},match:function(){},unmatch:function(){}}),new SmoothScroll('a[href*="#"]:not(.nav-link)',{ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,updateURL:!1,popstate:!1,easing:"easeInOutCubic",customEasing:function(e){return e<.5?2*e*e:(4-2*e)*e-1}}),e(".input-required").on("focus",function(){"required"==e(this).parent().data("required")&&e(this).parent().removeClass("required")}),e(".input-required").on("blur",function(){""==e(this).val()&&e(this).parent().addClass("required")}),i=!(!navigator||!navigator.userAgent||null==navigator.userAgent||null==navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)),enquire.register("screen and (min-width: 768px)",{setup:function(){},match:function(){if(!i){var t=function(t){var n=e(t.target).closest(".dropdown"),o=e(".dropdown-menu",n);setTimeout(function(){var a="click"!==t.type&&n.is(":hover");o.toggleClass("show",a),n.toggleClass("show",a),e('[data-toggle="dropdown"]',n).attr("aria-expanded",a)},"mouseleave"===t.type?150:0)};e("body").on("mouseenter mouseleave",".dropdown",t).on("click",".dropdown-menu a",t)}},unmatch:function(){}}),enquire.register("screen and (max-width: 767px)",{setup:function(){},match:function(){e("#nav-mobile .nav-link.dropdown-toggle").on("click",function(){e(this).next().slideToggle()})},unmatch:function(){}}),e(".cw_video_single").length>0&&e(".cw_video_single").attr("src",e(".cw_video_single").attr("src").replace("rel=","rel=0")),e(".testimonials-section-slider").slick({dots:!0,arrows:!1,autoplay:!0,infinite:!1,appendArrows:".custom-nav-test"}),function(){if(e("#blog").length){var t=1;e(".load-more").on("click",function(){e.ajax({type:"POST",url:"/wp-admin/admin-ajax.php",dataType:"html",data:{action:"filter_post",category:e("#category-info").attr("data-category"),page:t+1},beforeSend:function(t){canBeLoaded=!1,e(".inner-content").find("article:last-of-type").after("<div class='loader'></div>")},success:function(n){"There are no more posts to show."==n&&(e(".load-more").fadeTo(100,0),n="<div class='text-center no-posts'>"+n+"</div>"),e(".inner-content").find(".loader").remove(),e(".inner-content").find("article:last-of-type").after(n),t+=1}})})}e(".cat-list__item input[type='checkbox']").on("change",function(){var n;e(this).parent().siblings().find("input:checkbox").prop("checked",!1),t=1,e(".load-more").fadeTo(400,1),1==e(this).prop("checked")?n=e(this).attr("id"):0==e(this).prop("checked")&&(n="all"),e("#category-info").attr("data-category",n),e.ajax({type:"POST",url:"/wp-admin/admin-ajax.php",dataType:"html",data:{action:"filter_post",category:n,page:1},beforeSend:function(){e(".inner-content").html("<div class='loader'></div>")},success:function(t){e(".inner-content").html(t)}})})}()}}).init()})}});
//# sourceMappingURL=theme.js.map