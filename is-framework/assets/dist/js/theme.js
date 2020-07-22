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
  var IS_theme_framework = function () {
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
      }; //Full Screen Menu


      $(".navbar-toggler").on("click", function () {
        $(".full-screen-menu").addClass("nav-active");
        $('.full-screen-menu-close').delay(400).queue(function () {
          $(this).addClass("close-active").dequeue();
        });
      });
      $(".full-screen-menu-close").on("click", function () {
        $(this).removeClass("close-active");
        $(".full-screen-menu").delay(250).queue(function () {
          $(this).removeClass("nav-active").dequeue();
        });
      }); //No comments

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
      /*var awards = $(".awards-wrap");
       awards.slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          appendArrows: '.custom-nav-awards',
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
          ]
      });
       $('.awards-part .item').matchHeight();
      $('.awards-part .sameHeight').matchHeight();*/
      var testimonials = $('.testimonials-section-slider');
      testimonials.slick({
        dots: true,
        arrows: false,
        infinite: false,
        appendArrows: '.custom-nav-test'
      });
      /*var sidebar_results = $('.results-slider__sidebar .grid-results');
       sidebar_results.slick({
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendArrows: '.custom-nav-results',
      });
        enquire.register("screen and (max-width: 767px)", {
          setup: function () {
              // Load in content via AJAX (just the once)
          },
          match: function () {
               var results = $(".grid-results");
               results.slick({
                  dots: false,
                  arrows: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  appendArrows: '.custom-nav-results',
                  responsive: [
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                      // You can unslick at a given breakpoint now by adding:
                      // settings: "unslick"
                      // instead of a settings object
                  ]
              });
               var videos = $(".grid-videos");
              videos.slick({
                  dots: true,
                  arrows: false,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  responsive: [
                      {
                          breakpoint: 1024,
                          settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                          }
                      },
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                      // You can unslick at a given breakpoint now by adding:
                      // settings: "unslick"
                      // instead of a settings object
                  ]
              });
           },
          unmatch: function () {
           }
       }); */
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

  IS_theme_framework.init();
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

__webpack_require__(/*! /Volumes/Passport/Ironstride/Site/site/is-framework/assets/js/custom/theme.js */"./assets/js/custom/theme.js");
module.exports = __webpack_require__(/*! /Volumes/Passport/Ironstride/Site/site/is-framework/assets/scss/theme.scss */"./assets/scss/theme.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzE4ZWUiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJJU190aGVtZV9mcmFtZXdvcmsiLCJvcmlnaW5hbEpzIiwiZmluZCIsInJlbW92ZSIsIm9uIiwiYXR0ciIsImRhdGEiLCJyZW1vdmVBdHRyIiwicmVtb3ZlRGF0YSIsInNraXBMaW5rIiwiZm9jdXNpbiIsImNzcyIsImZvY3Vzb3V0IiwiYWRkQ2xhc3MiLCJkZWxheSIsInF1ZXVlIiwiZGVxdWV1ZSIsInJlbW92ZUNsYXNzIiwidGFibGVPZkNvbnRlbnRzIiwiVG9DIiwibmV3TGluZSIsImVsIiwidGl0bGUiLCJsaW5rIiwiZWFjaCIsInRleHQiLCJwcmVwZW5kIiwicGFyZW50IiwiZGlzcGxheSIsInNhbWVIZWlnaHQiLCJtYXRjaEhlaWdodCIsImVucXVpcmUiLCJyZWdpc3RlciIsInNldHVwIiwibWF0Y2giLCJ1bm1hdGNoIiwic2Nyb2xsVG9TZWN0aW9uIiwic2Nyb2xsIiwiU21vb3RoU2Nyb2xsIiwiaWdub3JlIiwiaGVhZGVyIiwidG9wT25FbXB0eUhhc2giLCJzcGVlZCIsInNwZWVkQXNEdXJhdGlvbiIsImR1cmF0aW9uTWF4IiwiZHVyYXRpb25NaW4iLCJjbGlwIiwib2Zmc2V0IiwidXBkYXRlVVJMIiwicG9wc3RhdGUiLCJlYXNpbmciLCJjdXN0b21FYXNpbmciLCJ0aW1lIiwicmVxdWlyZWRJbnB1dCIsInZhbCIsImhvdmVyTWVudSIsImZuSXNBcHBsZU1vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN0clVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXJyTWF0Y2hlcyIsImJJc0FwcGxlTW9iaWxlIiwidG9nZ2xlRHJvcGRvd24iLCJlIiwiX2QiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiX20iLCJzZXRUaW1lb3V0Iiwic2hvdWxkT3BlbiIsInR5cGUiLCJpcyIsInRvZ2dsZUNsYXNzIiwibmV4dCIsInNsaWRlVG9nZ2xlIiwidmlkZW9GaXhlcyIsImxlbmd0aCIsInJlcGxhY2UiLCJjYXJvdXNlbHMiLCJ0ZXN0aW1vbmlhbHMiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFwcGVuZEFycm93cyIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTtBQUVoQyxNQUFJQyxrQkFBa0IsR0FBSSxZQUFZO0FBRWxDLFFBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFFekI7QUFDQUYsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsSUFBbkIsQ0FBd0IsTUFBeEIs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QUQsQ0FBc0JNLElBQXRCLENBQTJCLEtBQTNCLEVBQWtDeUUsT0FBbEMsQ0FBMEMsTUFBMUMsRUFBa0QsT0FBbEQsQ0FBbEM7QUFDSDtBQUNKLEtBSkQ7O0FBTUEsUUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsVUFBSUMsWUFBWSxHQUFHakYsQ0FBQyxDQUFDLDhCQUFELENBQXBCO0FBRUFpRixrQkFBWSxDQUFDQyxLQUFiLENBQW1CO0FBQ2ZDLFlBQUksRUFBRSxJQURTO0FBRWZDLGNBQU0sRUFBRSxLQUZPO0FBR2ZDLGdCQUFRLEVBQUUsS0FISztBQUlmQyxvQkFBWSxFQUFFO0FBSkMsT0FBbkI7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUgsS0FsSUQ7O0FBb0lBLFdBQU87QUFFSEMsVUFBSSxFQUFFLGdCQUFZO0FBQ2RyRixrQkFBVTtBQUNWaUIsdUJBQWU7QUFDZlcsa0JBQVU7QUFDVk8sdUJBQWU7QUFDZmlCLHFCQUFhO0FBQ2JFLGlCQUFTO0FBQ1RxQixrQkFBVTtBQUNWRyxpQkFBUztBQUNaO0FBWEUsS0FBUDtBQWVILEdBdlh3QixFQUF6Qjs7QUF5WEEvRSxvQkFBa0IsQ0FBQ3NGLElBQW5CO0FBRUgsQ0E3WEQsRTs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIElTX3RoZW1lX2ZyYW1ld29yayA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsSnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIExvY2F0aW9uIC5zcXVhcmVzLWdyaWQgZml4IHJlbW92aW5nIDxicj4gdGFnc1xuICAgICAgICAgICAgJCgnLnNxdWFyZXMtZ3JpZCcpLmZpbmQoJz4gYnInKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJCgnaW5wdXQsIHRleHRhcmVhJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInLCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZUF0dHIoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB9KS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKSAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKS5yZW1vdmVEYXRhKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vU2tpcCBMaW5rXG4gICAgICAgICAgICB2YXIgc2tpcExpbmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c2luKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiLCBcInN0YXRpY1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vRnVsbCBTY3JlZW4gTWVudVxuICAgICAgICAgICAgJChcIi5uYXZiYXItdG9nZ2xlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuYWRkQ2xhc3MoXCJuYXYtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoJy5mdWxsLXNjcmVlbi1tZW51LWNsb3NlJykuZGVsYXkoNDAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xvc2UtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5hdi1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vTm8gY29tbWVudHNcbiAgICAgICAgICAgICQoXCIjY29tbWVudGZvcm1cIikuYWRkQ2xhc3MoXCJub2F1dG9cIik7XG5cbiAgICAgICAgICAgIC8vSG92ZXIgZm9yIERlc2t0b3AsIGNsaWNrIGZvciBtb2JpbGUgbmF2XG4gICAgICAgICAgICAvKmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bicpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2xpY2sgdGFwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSovXG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGFibGVPZkNvbnRlbnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgVG9DID0gJyc7XG5cbiAgICAgICAgICAgIHZhciBuZXdMaW5lLCBlbCwgdGl0bGUsIGxpbms7XG5cbiAgICAgICAgICAgICQoXCIudG9jLWhlYWRpbmdcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSBlbC50ZXh0KCk7XG4gICAgICAgICAgICAgICAgbGluayA9IFwiI1wiICsgZWwuYXR0cihcImlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbmV3TGluZSA9XG4gICAgICAgICAgICAgICAgICAgIFwiPGxpPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8YSBjbGFzcz0ndG9jLWxpbmsnIGhyZWY9J1wiICsgbGluayArIFwiJz5cIiArXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L2E+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvbGk+XCI7XG5cbiAgICAgICAgICAgICAgICBUb0MgKz0gbmV3TGluZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coVG9DKTtcblxuICAgICAgICAgICAgLy9Ub0MgKz0gXCI8L3VsPjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xuXG4gICAgICAgICAgICAkKFwiLnRvYy10YWJsZSB1bFwiKS5wcmVwZW5kKFRvQyk7XG5cbiAgICAgICAgICAgIC8vJCgnLnRvYy10YWJsZSB1bCcpLnNtb290aFNjcm9sbCgpO1xuXG4gICAgICAgICAgICAkKFwiLnRvYy1saW5rOmVtcHR5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzYW1lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLmdyaWQtYXR0b3JuZXkgLmF0dG9ybmV5LWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xuICAgICAgICAgICAgJCgnLmdyaWQtdmlkZW9zIC52aWRlby1kZXNjcmlwdGlvbicpLm1hdGNoSGVpZ2h0KCk7XG4gICAgICAgICAgICAkKCcuZ3JpZC1yZXN1bHRzIC5pdGVtJykubWF0Y2hIZWlnaHQoKTtcblxuXG4gICAgICAgICAgICAkKCcuY29udGFjdC1zaWRlYmFyIC5jb2wtaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVwiLCB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2Nyb2xsVG9TZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0b3JzXG4gICAgICAgICAgICAgICAgaWdub3JlOiAnW2RhdGEtc2Nyb2xsLWlnbm9yZV0nLCAvLyBTZWxlY3RvciBmb3IgbGlua3MgdG8gaWdub3JlIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIGhlYWRlcjogbnVsbCwgLy8gU2VsZWN0b3IgZm9yIGZpeGVkIGhlYWRlcnMgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgdG9wT25FbXB0eUhhc2g6IHRydWUsIC8vIFNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBwYWdlIGZvciBsaW5rcyB3aXRoIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLCAvLyBJbnRlZ2VyLiBBbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgaXQgc2hvdWxkIHRha2UgdG8gc2Nyb2xsIDEwMDBweFxuICAgICAgICAgICAgICAgIHNwZWVkQXNEdXJhdGlvbjogZmFsc2UsIC8vIElmIHRydWUsIHVzZSBzcGVlZCBhcyB0aGUgdG90YWwgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBkdXJhdGlvbk1heDogbnVsbCwgLy8gSW50ZWdlci4gVGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWUgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHRha2VcbiAgICAgICAgICAgICAgICBkdXJhdGlvbk1pbjogbnVsbCwgLy8gSW50ZWdlci4gVGhlIG1pbmltdW0gYW1vdW50IG9mIHRpbWUgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHRha2VcbiAgICAgICAgICAgICAgICBjbGlwOiB0cnVlLCAvLyBJZiB0cnVlLCBhZGp1c3Qgc2Nyb2xsIGRpc3RhbmNlIHRvIHByZXZlbnQgYWJydXB0IHN0b3BzIG5lYXIgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICB1cGRhdGVVUkw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBvcHN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBFYXNpbmdcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsIC8vIEVhc2luZyBwYXR0ZXJuIHRvIHVzZVxuICAgICAgICAgICAgICAgIGN1c3RvbUVhc2luZzogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuY3Rpb24uIEN1c3RvbSBlYXNpbmcgcGF0dGVyblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHNldCB0byBhbnl0aGluZyBvdGhlciB0aGFuIG51bGwsIHdpbGwgb3ZlcnJpZGUgdGhlIGVhc2luZyBvcHRpb24gYWJvdmVcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gPHlvdXIgZm9ybXVsYXRlIHdpdGggdGltZSBhcyBhIG11bHRpcGxpZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhhbXBsZTogZWFzZUluT3V0IFF1YWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWUgPCAwLjUgPyAyICogdGltZSAqIHRpbWUgOiAtMSArICg0IC0gMiAqIHRpbWUpICogdGltZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXF1aXJlZElucHV0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAkKCcuaW5wdXQtcmVxdWlyZWQnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuZGF0YSgncmVxdWlyZWQnKSA9PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaG92ZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmbklzQXBwbGVNb2JpbGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyVXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvKGlwaG9uZXxpcG9kfGlwYWQpLyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJNYXRjaGVzICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIEVuZCBGdW5jdGlvbiBmbklzQXBwbGVNb2JpbGVcblxuICAgICAgICAgICAgdmFyIGJJc0FwcGxlTW9iaWxlID0gZm5Jc0FwcGxlTW9iaWxlKCk7XG5cbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVwiLCB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJJc0FwcGxlTW9iaWxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbSA9ICQoJy5kcm9wZG93bi1tZW51JywgX2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRPcGVuID0gZS50eXBlICE9PSAnY2xpY2snICYmIF9kLmlzKCc6aG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX20udG9nZ2xlQ2xhc3MoJ3Nob3cnLCBzaG91bGRPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2QudG9nZ2xlQ2xhc3MoJ3Nob3cnLCBzaG91bGRPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLCBfZCkuYXR0cignYXJpYS1leHBhbmRlZCcsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnID8gMTUwIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlJywgJy5kcm9wZG93bicsIHRvZ2dsZURyb3Bkb3duKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUgYScsIHRvZ2dsZURyb3Bkb3duKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLCB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAkKCcjbmF2LW1vYmlsZSAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdmlkZW9GaXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiLCAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJyZWw9XCIsIFwicmVsPTBcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYXJvdXNlbHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8qdmFyIGF3YXJkcyA9ICQoXCIuYXdhcmRzLXdyYXBcIik7XG5cbiAgICAgICAgICAgIGF3YXJkcy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LWF3YXJkcycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuYXdhcmRzLXBhcnQgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5zYW1lSGVpZ2h0JykubWF0Y2hIZWlnaHQoKTsqL1xuXG4gICAgICAgICAgICB2YXIgdGVzdGltb25pYWxzID0gJCgnLnRlc3RpbW9uaWFscy1zZWN0aW9uLXNsaWRlcicpO1xuXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbHMuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtdGVzdCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLyp2YXIgc2lkZWJhcl9yZXN1bHRzID0gJCgnLnJlc3VsdHMtc2xpZGVyX19zaWRlYmFyIC5ncmlkLXJlc3VsdHMnKTtcblxuICAgICAgICAgICAgc2lkZWJhcl9yZXN1bHRzLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXJlc3VsdHMnLFxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gJChcIi5ncmlkLXJlc3VsdHNcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXJlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdmlkZW9zID0gJChcIi5ncmlkLXZpZGVvc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9zLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTsgKi9cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEpzKCk7XG4gICAgICAgICAgICAgICAgdGFibGVPZkNvbnRlbnRzKCk7XG4gICAgICAgICAgICAgICAgc2FtZUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbigpO1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBob3Zlck1lbnUoKTtcbiAgICAgICAgICAgICAgICB2aWRlb0ZpeGVzKCk7XG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIElTX3RoZW1lX2ZyYW1ld29yay5pbml0KCk7XG5cbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==