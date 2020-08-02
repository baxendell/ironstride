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
      var scroll = new SmoothScroll('a[href*="#"]:not(.nav-link)', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzE4ZWUiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJJU190aGVtZV9mcmFtZXdvcmsiLCJvcmlnaW5hbEpzIiwiZmluZCIsInJlbW92ZSIsIm9uIiwiYXR0ciIsImRhdGEiLCJyZW1vdmVBdHRyIiwicmVtb3ZlRGF0YSIsInNraXBMaW5rIiwiZm9jdXNpbiIsImNzcyIsImZvY3Vzb3V0IiwiYWRkQ2xhc3MiLCJkZWxheSIsInF1ZXVlIiwiZGVxdWV1ZSIsInJlbW92ZUNsYXNzIiwidGFibGVPZkNvbnRlbnRzIiwiVG9DIiwibmV3TGluZSIsImVsIiwidGl0bGUiLCJsaW5rIiwiZWFjaCIsInRleHQiLCJwcmVwZW5kIiwicGFyZW50IiwiZGlzcGxheSIsInNhbWVIZWlnaHQiLCJtYXRjaEhlaWdodCIsImVucXVpcmUiLCJyZWdpc3RlciIsInNldHVwIiwibWF0Y2giLCJ1bm1hdGNoIiwic2Nyb2xsVG9TZWN0aW9uIiwic2Nyb2xsIiwiU21vb3RoU2Nyb2xsIiwiaWdub3JlIiwiaGVhZGVyIiwidG9wT25FbXB0eUhhc2giLCJzcGVlZCIsInNwZWVkQXNEdXJhdGlvbiIsImR1cmF0aW9uTWF4IiwiZHVyYXRpb25NaW4iLCJjbGlwIiwib2Zmc2V0IiwidXBkYXRlVVJMIiwicG9wc3RhdGUiLCJlYXNpbmciLCJjdXN0b21FYXNpbmciLCJ0aW1lIiwicmVxdWlyZWRJbnB1dCIsInZhbCIsImhvdmVyTWVudSIsImZuSXNBcHBsZU1vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN0clVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXJyTWF0Y2hlcyIsImJJc0FwcGxlTW9iaWxlIiwidG9nZ2xlRHJvcGRvd24iLCJlIiwiX2QiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiX20iLCJzZXRUaW1lb3V0Iiwic2hvdWxkT3BlbiIsInR5cGUiLCJpcyIsInRvZ2dsZUNsYXNzIiwibmV4dCIsInNsaWRlVG9nZ2xlIiwidmlkZW9GaXhlcyIsImxlbmd0aCIsInJlcGxhY2UiLCJjYXJvdXNlbHMiLCJ0ZXN0aW1vbmlhbHMiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFwcGVuZEFycm93cyIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTtBQUVoQyxNQUFJQyxrQkFBa0IsR0FBSSxZQUFZO0FBRWxDLFFBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFFekI7QUFDQUYsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsSUFBbkIsQ0FBd0IsTUFBeEIs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Q0FBRCxDQUFzQk0sSUFBdEIsQ0FBMkIsS0FBM0IsRUFBa0N5RSxPQUFsQyxDQUEwQyxNQUExQyxFQUFrRCxPQUFsRCxDQUFsQztBQUNIO0FBQ0osS0FKRDs7QUFNQSxRQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFZO0FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQSxVQUFJQyxZQUFZLEdBQUdqRixDQUFDLENBQUMsOEJBQUQsQ0FBcEI7QUFFQWlGLGtCQUFZLENBQUNDLEtBQWIsQ0FBbUI7QUFDZkMsWUFBSSxFQUFFLElBRFM7QUFFZkMsY0FBTSxFQUFFLEtBRk87QUFHZkMsZ0JBQVEsRUFBRSxLQUhLO0FBSWZDLG9CQUFZLEVBQUU7QUFKQyxPQUFuQjtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThFSCxLQWxJRDs7QUFvSUEsV0FBTztBQUVIQyxVQUFJLEVBQUUsZ0JBQVk7QUFDZHJGLGtCQUFVO0FBQ1ZpQix1QkFBZTtBQUNmVyxrQkFBVTtBQUNWTyx1QkFBZTtBQUNmaUIscUJBQWE7QUFDYkUsaUJBQVM7QUFDVHFCLGtCQUFVO0FBQ1ZHLGlCQUFTO0FBQ1o7QUFYRSxLQUFQO0FBZUgsR0F2WHdCLEVBQXpCOztBQXlYQS9FLG9CQUFrQixDQUFDc0YsSUFBbkI7QUFFSCxDQTdYRCxFOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9hc3NldHMvZGlzdC9qcy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgSVNfdGhlbWVfZnJhbWV3b3JrID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgb3JpZ2luYWxKcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gTG9jYXRpb24gLnNxdWFyZXMtZ3JpZCBmaXggcmVtb3ZpbmcgPGJyPiB0YWdzXG4gICAgICAgICAgICAkKCcuc3F1YXJlcy1ncmlkJykuZmluZCgnPiBicicpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH0pLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZURhdGEoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9Ta2lwIExpbmtcbiAgICAgICAgICAgIHZhciBza2lwTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3VzaW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwic3RhdGljXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c291dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdmJhci10b2dnbGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5hZGRDbGFzcyhcIm5hdi1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2UnKS5kZWxheSg0MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2LWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ObyBjb21tZW50c1xuICAgICAgICAgICAgJChcIiNjb21tZW50Zm9ybVwiKS5hZGRDbGFzcyhcIm5vYXV0b1wiKTtcblxuICAgICAgICAgICAgLy9Ib3ZlciBmb3IgRGVza3RvcCwgY2xpY2sgZm9yIG1vYmlsZSBuYXZcbiAgICAgICAgICAgIC8qaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSBjbGljayB0YXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0YWJsZU9mQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBUb0MgPSAnJztcblxuICAgICAgICAgICAgdmFyIG5ld0xpbmUsIGVsLCB0aXRsZSwgbGluaztcblxuICAgICAgICAgICAgJChcIi50b2MtaGVhZGluZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGVsLnRleHQoKTtcbiAgICAgICAgICAgICAgICBsaW5rID0gXCIjXCIgKyBlbC5hdHRyKFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICBuZXdMaW5lID1cbiAgICAgICAgICAgICAgICAgICAgXCI8bGk+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxhIGNsYXNzPSd0b2MtbGluaycgaHJlZj0nXCIgKyBsaW5rICsgXCInPlwiICtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvYT5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9saT5cIjtcblxuICAgICAgICAgICAgICAgIFRvQyArPSBuZXdMaW5lO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhUb0MpO1xuXG4gICAgICAgICAgICAvL1RvQyArPSBcIjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XG5cbiAgICAgICAgICAgICQoXCIudG9jLXRhYmxlIHVsXCIpLnByZXBlbmQoVG9DKTtcblxuICAgICAgICAgICAgLy8kKCcudG9jLXRhYmxlIHVsJykuc21vb3RoU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgICQoXCIudG9jLWxpbms6ZW1wdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNhbWVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuZ3JpZC1hdHRvcm5leSAuYXR0b3JuZXktaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG4gICAgICAgICAgICAkKCcuZ3JpZC12aWRlb3MgLnZpZGVvLWRlc2NyaXB0aW9uJykubWF0Y2hIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5ncmlkLXJlc3VsdHMgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xuXG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LXNpZGViYXIgLmNvbC1pdGVtJykubWF0Y2hIZWlnaHQoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzY3JvbGxUb1NlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXTpub3QoLm5hdi1saW5rKScsIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RvcnNcbiAgICAgICAgICAgICAgICBpZ25vcmU6ICdbZGF0YS1zY3JvbGwtaWdub3JlXScsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBudWxsLCAvLyBTZWxlY3RvciBmb3IgZml4ZWQgaGVhZGVycyAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgICAgICAgICB0b3BPbkVtcHR5SGFzaDogdHJ1ZSwgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgZm9yIGxpbmtzIHdpdGggaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBpdCBzaG91bGQgdGFrZSB0byBzY3JvbGwgMTAwMHB4XG4gICAgICAgICAgICAgICAgc3BlZWRBc0R1cmF0aW9uOiBmYWxzZSwgLy8gSWYgdHJ1ZSwgdXNlIHNwZWVkIGFzIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWF4OiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWluOiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGNsaXA6IHRydWUsIC8vIElmIHRydWUsIGFkanVzdCBzY3JvbGwgZGlzdGFuY2UgdG8gcHJldmVudCBhYnJ1cHQgc3RvcHMgbmVhciB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcG9wc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIEVhc2luZ1xuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJywgLy8gRWFzaW5nIHBhdHRlcm4gdG8gdXNlXG4gICAgICAgICAgICAgICAgY3VzdG9tRWFzaW5nOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbi4gQ3VzdG9tIGVhc2luZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gbnVsbCwgd2lsbCBvdmVycmlkZSB0aGUgZWFzaW5nIG9wdGlvbiBhYm92ZVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiA8eW91ciBmb3JtdWxhdGUgd2l0aCB0aW1lIGFzIGEgbXVsdGlwbGllcj5cblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBlYXNlSW5PdXQgUXVhZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZSA8IDAuNSA/IDIgKiB0aW1lICogdGltZSA6IC0xICsgKDQgLSAyICogdGltZSkgKiB0aW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdyZXF1aXJlZCcpID09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBob3Zlck1lbnUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJNYXRjaGVzID0gc3RyVXNlckFnZW50Lm1hdGNoKC8oaXBob25lfGlwb2R8aXBhZCkvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gLy8gRW5kIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudClcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gRW5kIEZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZVxuXG4gICAgICAgICAgICB2YXIgYklzQXBwbGVNb2JpbGUgPSBmbklzQXBwbGVNb2JpbGUoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYklzQXBwbGVNb2JpbGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tID0gJCgnLmRyb3Bkb3duLW1lbnUnLCBfZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZE9wZW4gPSBlLnR5cGUgIT09ICdjbGljaycgJiYgX2QuaXMoJzpob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbS50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIF9kKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS50eXBlID09PSAnbW91c2VsZWF2ZScgPyAxNTAgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCAnLmRyb3Bkb3duJywgdG9nZ2xlRHJvcGRvd24pLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudSBhJywgdG9nZ2xlRHJvcGRvd24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB2aWRlb0ZpeGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIsICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcInJlbD1cIiwgXCJyZWw9MFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhcm91c2VscyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLyp2YXIgYXdhcmRzID0gJChcIi5hd2FyZHMtd3JhcFwiKTtcblxuICAgICAgICAgICAgYXdhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtYXdhcmRzJyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG4gICAgICAgICAgICAkKCcuYXdhcmRzLXBhcnQgLnNhbWVIZWlnaHQnKS5tYXRjaEhlaWdodCgpOyovXG5cbiAgICAgICAgICAgIHZhciB0ZXN0aW1vbmlhbHMgPSAkKCcudGVzdGltb25pYWxzLXNlY3Rpb24tc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIHRlc3RpbW9uaWFscy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi10ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKnZhciBzaWRlYmFyX3Jlc3VsdHMgPSAkKCcucmVzdWx0cy1zbGlkZXJfX3NpZGViYXIgLmdyaWQtcmVzdWx0cycpO1xuXG4gICAgICAgICAgICBzaWRlYmFyX3Jlc3VsdHMuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAkKFwiLmdyaWQtcmVzdWx0c1wiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRlb3MgPSAkKFwiLmdyaWQtdmlkZW9zXCIpO1xuICAgICAgICAgICAgICAgICAgICB2aWRlb3Muc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pOyAqL1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsSnMoKTtcbiAgICAgICAgICAgICAgICB0YWJsZU9mQ29udGVudHMoKTtcbiAgICAgICAgICAgICAgICBzYW1lSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGhvdmVyTWVudSgpO1xuICAgICAgICAgICAgICAgIHZpZGVvRml4ZXMoKTtcbiAgICAgICAgICAgICAgICBjYXJvdXNlbHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9KSgpO1xuXG4gICAgSVNfdGhlbWVfZnJhbWV3b3JrLmluaXQoKTtcblxufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9