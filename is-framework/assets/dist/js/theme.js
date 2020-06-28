/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/custom/theme.js":
/*!***********************************!*\
  !*** ./assets/js/custom/theme.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  var CW_theme_framework = function () {
    var originalJs = function originalJs() {
      // Location .squares-grid fix removing <br> tags
      $('.squares-grid').find('> br').remove();
      $('input, textarea').on('focus', function () {
        if ($(this).attr('placeholder')) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
      }).on('blur', function () {
        if ($(this).data('placeholder')) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
      }); //Skip Link

      var skipLink = function skipLink() {
        $(".skiplink").focusin(function () {
          $(this).css("position", "static");
        });
        $(".skiplink").focusout(function () {
          $(this).css("position", "absolute");
        });
      }; //No comments


      $("#commentform").addClass("noauto"); //Hover for Desktop, click for mobile nav

      /*if ($(window).width() > 767) {
          $('.dropdown').on('mouseenter mouseleave click tap', function() {
              $(this).toggleClass("open");
          });
      }*/
    };

    var tableOfContents = function tableOfContents() {
      var ToC = '';
      var newLine, el, title, link;
      $(".toc-heading").each(function () {
        el = $(this);
        title = el.text();
        link = "#" + el.attr("id");
        newLine = "<li>" + "<a class='toc-link' href='" + link + "'>" + title + "</a>" + "</li>";
        ToC += newLine;
      }); //console.log(ToC);
      //ToC += "</ul></div></div></div>";

      $(".toc-table ul").prepend(ToC); //$('.toc-table ul').smoothScroll();

      $(".toc-link:empty").each(function () {
        $(this).parent().css({
          display: 'none'
        });
      });
    };

    var sameHeight = function sameHeight() {
      $('.grid-attorney .attorney-item').matchHeight();
      $('.grid-videos .video-description').matchHeight();
      $('.grid-results .item').matchHeight();
      $('.contact-sidebar .col-item').matchHeight();
      enquire.register("screen and (min-width: 992px) and (max-width: 1199px)", {
        setup: function setup() {// Load in content via AJAX (just the once)
        },
        match: function match() {},
        unmatch: function unmatch() {}
      });
    };

    var scrollToSection = function scrollToSection() {
      var scroll = new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: '[data-scroll-ignore]',
        // Selector for links to ignore (must be a valid CSS selector)
        header: null,
        // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true,
        // Scroll to the top of the page for links with href="#"
        speed: 500,
        // Integer. Amount of time in milliseconds it should take to scroll 1000px
        speedAsDuration: false,
        // If true, use speed as the total duration of the scroll animation
        durationMax: null,
        // Integer. The maximum amount of time the scroll animation should take
        durationMin: null,
        // Integer. The minimum amount of time the scroll animation should take
        clip: true,
        // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: 0,
        updateURL: false,
        popstate: false,
        // Easing
        easing: 'easeInOutCubic',
        // Easing pattern to use
        customEasing: function customEasing(time) {
          // Function. Custom easing pattern
          // If this is set to anything other than null, will override the easing option above
          // return <your formulate with time as a multiplier>
          // Example: easeInOut Quad
          return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        }
      });
    };

    var requiredInput = function requiredInput() {
      $('.input-required').on('focus', function () {
        if ($(this).parent().data('required') == 'required') {
          $(this).parent().removeClass('required');
        }
      });
      $('.input-required').on('blur', function () {
        if ($(this).val() == '') {
          $(this).parent().addClass('required');
        }
      });
    };

    var hoverMenu = function hoverMenu() {
      function fnIsAppleMobile() {
        if (navigator && navigator.userAgent && navigator.userAgent != null) {
          var strUserAgent = navigator.userAgent.toLowerCase();
          var arrMatches = strUserAgent.match(/(iphone|ipod|ipad)/);
          if (arrMatches != null) return true;
        } // End if (navigator && navigator.userAgent)


        return false;
      } // End Function fnIsAppleMobile


      var bIsAppleMobile = fnIsAppleMobile();
      enquire.register("screen and (min-width: 768px)", {
        setup: function setup() {// Load in content via AJAX (just the once)
        },
        match: function match() {
          if (!bIsAppleMobile) {
            var toggleDropdown = function toggleDropdown(e) {
              var _d = $(e.target).closest('.dropdown'),
                  _m = $('.dropdown-menu', _d);

              setTimeout(function () {
                var shouldOpen = e.type !== 'click' && _d.is(':hover');

                _m.toggleClass('show', shouldOpen);

                _d.toggleClass('show', shouldOpen);

                $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
              }, e.type === 'mouseleave' ? 150 : 0);
            };

            $('body').on('mouseenter mouseleave', '.dropdown', toggleDropdown).on('click', '.dropdown-menu a', toggleDropdown);
          }
        },
        unmatch: function unmatch() {}
      });
      enquire.register("screen and (max-width: 767px)", {
        setup: function setup() {// Load in content via AJAX (just the once)
        },
        match: function match() {
          $('#nav-mobile .nav-link.dropdown-toggle').on('click', function () {
            $(this).next().slideToggle();
          });
        },
        unmatch: function unmatch() {}
      });
    };

    var videoFixes = function videoFixes() {
      if ($(".cw_video_single").length > 0) {
        $(".cw_video_single").attr("src", $(".cw_video_single").attr("src").replace("rel=", "rel=0"));
      }
    };

    var carousels = function carousels() {
      var awards = $(".awards-wrap");
      awards.slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: '.custom-nav-awards',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          } // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object

        }]
      });
      $('.awards-part .item').matchHeight();
      $('.awards-part .sameHeight').matchHeight();
      var testimonials = $('.testimonials-section-slider');
      testimonials.slick({
        dots: false,
        infinite: false,
        appendArrows: '.custom-nav-test'
      });
      var sidebar_results = $('.results-slider__sidebar .grid-results');
      sidebar_results.slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.custom-nav-results'
      });
      enquire.register("screen and (max-width: 767px)", {
        setup: function setup() {// Load in content via AJAX (just the once)
        },
        match: function match() {
          var results = $(".grid-results");
          results.slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: '.custom-nav-results',
            responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              } // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object

            }]
          });
          var videos = $(".grid-videos");
          videos.slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            }, {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              } // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object

            }]
          });
        },
        unmatch: function unmatch() {}
      });
    };

    return {
      init: function init() {
        originalJs();
        tableOfContents();
        sameHeight();
        scrollToSection();
        requiredInput();
        hoverMenu();
        videoFixes();
        carousels();
      }
    };
  }();

  CW_theme_framework.init();
});

/***/ }),

/***/ "./assets/scss/theme.scss":
/*!********************************!*\
  !*** ./assets/scss/theme.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./assets/js/custom/theme.js ./assets/scss/theme.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\ironstride\wp-content\themes\is-framework\assets\js\custom\theme.js */"./assets/js/custom/theme.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\ironstride\wp-content\themes\is-framework\assets\scss\theme.scss */"./assets/scss/theme.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiQ1dfdGhlbWVfZnJhbWV3b3JrIiwib3JpZ2luYWxKcyIsImZpbmQiLCJyZW1vdmUiLCJvbiIsImF0dHIiLCJkYXRhIiwicmVtb3ZlQXR0ciIsInJlbW92ZURhdGEiLCJza2lwTGluayIsImZvY3VzaW4iLCJjc3MiLCJmb2N1c291dCIsImFkZENsYXNzIiwidGFibGVPZkNvbnRlbnRzIiwiVG9DIiwibmV3TGluZSIsImVsIiwidGl0bGUiLCJsaW5rIiwiZWFjaCIsInRleHQiLCJwcmVwZW5kIiwicGFyZW50IiwiZGlzcGxheSIsInNhbWVIZWlnaHQiLCJtYXRjaEhlaWdodCIsImVucXVpcmUiLCJyZWdpc3RlciIsInNldHVwIiwibWF0Y2giLCJ1bm1hdGNoIiwic2Nyb2xsVG9TZWN0aW9uIiwic2Nyb2xsIiwiU21vb3RoU2Nyb2xsIiwiaWdub3JlIiwiaGVhZGVyIiwidG9wT25FbXB0eUhhc2giLCJzcGVlZCIsInNwZWVkQXNEdXJhdGlvbiIsImR1cmF0aW9uTWF4IiwiZHVyYXRpb25NaW4iLCJjbGlwIiwib2Zmc2V0IiwidXBkYXRlVVJMIiwicG9wc3RhdGUiLCJlYXNpbmciLCJjdXN0b21FYXNpbmciLCJ0aW1lIiwicmVxdWlyZWRJbnB1dCIsInJlbW92ZUNsYXNzIiwidmFsIiwiaG92ZXJNZW51IiwiZm5Jc0FwcGxlTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3RyVXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJhcnJNYXRjaGVzIiwiYklzQXBwbGVNb2JpbGUiLCJ0b2dnbGVEcm9wZG93biIsImUiLCJfZCIsInRhcmdldCIsImNsb3Nlc3QiLCJfbSIsInNldFRpbWVvdXQiLCJzaG91bGRPcGVuIiwidHlwZSIsImlzIiwidG9nZ2xlQ2xhc3MiLCJuZXh0Iiwic2xpZGVUb2dnbGUiLCJ2aWRlb0ZpeGVzIiwibGVuZ3RoIiwicmVwbGFjZSIsImNhcm91c2VscyIsImF3YXJkcyIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcHBlbmRBcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidGVzdGltb25pYWxzIiwic2lkZWJhcl9yZXN1bHRzIiwicmVzdWx0cyIsImFycm93cyIsInZpZGVvcyIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTtBQUVoQyxNQUFJQyxrQkFBa0IsR0FBSSxZQUFZO0FBRWxDLFFBQUlD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QUNaO0FBWEUsS0FBUDtBQWVILEdBdld3QixFQUF6Qjs7QUF5V0E1RSxvQkFBa0IsQ0FBQzRGLElBQW5CO0FBRUgsQ0E3V0QsRTs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBDV190aGVtZV9mcmFtZXdvcmsgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgb3JpZ2luYWxKcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIExvY2F0aW9uIC5zcXVhcmVzLWdyaWQgZml4IHJlbW92aW5nIDxicj4gdGFnc1xyXG4gICAgICAgICAgICAkKCcuc3F1YXJlcy1ncmlkJykuZmluZCgnPiBicicpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJCgnaW5wdXQsIHRleHRhcmVhJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgfSkub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKSAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKS5yZW1vdmVEYXRhKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2tpcCBMaW5rXHJcbiAgICAgICAgICAgIHZhciBza2lwTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNpbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiLCBcInN0YXRpY1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL05vIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICQoXCIjY29tbWVudGZvcm1cIikuYWRkQ2xhc3MoXCJub2F1dG9cIik7XHJcblxyXG4gICAgICAgICAgICAvL0hvdmVyIGZvciBEZXNrdG9wLCBjbGljayBmb3IgbW9iaWxlIG5hdlxyXG4gICAgICAgICAgICAvKmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSBjbGljayB0YXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRhYmxlT2ZDb250ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBUb0MgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdMaW5lLCBlbCwgdGl0bGUsIGxpbms7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnRvYy1oZWFkaW5nXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gZWwudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgbGluayA9IFwiI1wiICsgZWwuYXR0cihcImlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiPGxpPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxhIGNsYXNzPSd0b2MtbGluaycgaHJlZj0nXCIgKyBsaW5rICsgXCInPlwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2E+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9saT5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBUb0MgKz0gbmV3TGluZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhUb0MpO1xyXG5cclxuICAgICAgICAgICAgLy9Ub0MgKz0gXCI8L3VsPjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xyXG5cclxuICAgICAgICAgICAgJChcIi50b2MtdGFibGUgdWxcIikucHJlcGVuZChUb0MpO1xyXG5cclxuICAgICAgICAgICAgLy8kKCcudG9jLXRhYmxlIHVsJykuc21vb3RoU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnRvYy1saW5rOmVtcHR5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2FtZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmdyaWQtYXR0b3JuZXkgLmF0dG9ybmV5LWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xyXG4gICAgICAgICAgICAkKCcuZ3JpZC12aWRlb3MgLnZpZGVvLWRlc2NyaXB0aW9uJykubWF0Y2hIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnLmdyaWQtcmVzdWx0cyAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRhY3Qtc2lkZWJhciAuY29sLWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2Nyb2xsVG9TZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICBpZ25vcmU6ICdbZGF0YS1zY3JvbGwtaWdub3JlXScsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG51bGwsIC8vIFNlbGVjdG9yIGZvciBmaXhlZCBoZWFkZXJzIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgdG9wT25FbXB0eUhhc2g6IHRydWUsIC8vIFNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBwYWdlIGZvciBsaW5rcyB3aXRoIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBpdCBzaG91bGQgdGFrZSB0byBzY3JvbGwgMTAwMHB4XHJcbiAgICAgICAgICAgICAgICBzcGVlZEFzRHVyYXRpb246IGZhbHNlLCAvLyBJZiB0cnVlLCB1c2Ugc3BlZWQgYXMgdGhlIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbk1heDogbnVsbCwgLy8gSW50ZWdlci4gVGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWUgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHRha2VcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWluOiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxyXG4gICAgICAgICAgICAgICAgY2xpcDogdHJ1ZSwgLy8gSWYgdHJ1ZSwgYWRqdXN0IHNjcm9sbCBkaXN0YW5jZSB0byBwcmV2ZW50IGFicnVwdCBzdG9wcyBuZWFyIHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3BzdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBFYXNpbmdcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJywgLy8gRWFzaW5nIHBhdHRlcm4gdG8gdXNlXHJcbiAgICAgICAgICAgICAgICBjdXN0b21FYXNpbmc6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuY3Rpb24uIEN1c3RvbSBlYXNpbmcgcGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gbnVsbCwgd2lsbCBvdmVycmlkZSB0aGUgZWFzaW5nIG9wdGlvbiBhYm92ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gPHlvdXIgZm9ybXVsYXRlIHdpdGggdGltZSBhcyBhIG11bHRpcGxpZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IGVhc2VJbk91dCBRdWFkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWUgPCAwLjUgPyAyICogdGltZSAqIHRpbWUgOiAtMSArICg0IC0gMiAqIHRpbWUpICogdGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciByZXF1aXJlZElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuZGF0YSgncmVxdWlyZWQnKSA9PSAncmVxdWlyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaW5wdXQtcmVxdWlyZWQnKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBob3Zlck1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmbklzQXBwbGVNb2JpbGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvKGlwaG9uZXxpcG9kfGlwYWQpLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IC8vIEVuZCBGdW5jdGlvbiBmbklzQXBwbGVNb2JpbGVcclxuXHJcbiAgICAgICAgICAgIHZhciBiSXNBcHBsZU1vYmlsZSA9IGZuSXNBcHBsZU1vYmlsZSgpO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYklzQXBwbGVNb2JpbGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX20gPSAkKCcuZHJvcGRvd24tbWVudScsIF9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZE9wZW4gPSBlLnR5cGUgIT09ICdjbGljaycgJiYgX2QuaXMoJzpob3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tLnRvZ2dsZUNsYXNzKCdzaG93Jywgc2hvdWxkT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2QudG9nZ2xlQ2xhc3MoJ3Nob3cnLCBzaG91bGRPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIF9kKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgc2hvdWxkT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyA/IDE1MCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScsICcuZHJvcGRvd24nLCB0b2dnbGVEcm9wZG93bikub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51IGEnLCB0b2dnbGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZpZGVvRml4ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIsICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcInJlbD1cIiwgXCJyZWw9MFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2Fyb3VzZWxzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGF3YXJkcyA9ICQoXCIuYXdhcmRzLXdyYXBcIik7XHJcblxyXG4gICAgICAgICAgICBhd2FyZHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1hd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5pdGVtJykubWF0Y2hIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5zYW1lSGVpZ2h0JykubWF0Y2hIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0aW1vbmlhbHMgPSAkKCcudGVzdGltb25pYWxzLXNlY3Rpb24tc2xpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi10ZXN0JyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2lkZWJhcl9yZXN1bHRzID0gJCgnLnJlc3VsdHMtc2xpZGVyX19zaWRlYmFyIC5ncmlkLXJlc3VsdHMnKTtcclxuXHJcbiAgICAgICAgICAgIHNpZGViYXJfcmVzdWx0cy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9ICQoXCIuZ3JpZC1yZXN1bHRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1yZXN1bHRzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvcyA9ICQoXCIuZ3JpZC12aWRlb3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9zLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxKcygpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVPZkNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBzYW1lSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIGhvdmVyTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9GaXhlcygpO1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgQ1dfdGhlbWVfZnJhbWV3b3JrLmluaXQoKTtcclxuXHJcbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==