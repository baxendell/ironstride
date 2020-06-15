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

__webpack_require__(/*! /Volumes/Passport/Ironstride/Site/site/is-framework/assets/js/custom/theme.js */"./assets/js/custom/theme.js");
module.exports = __webpack_require__(/*! /Volumes/Passport/Ironstride/Site/site/is-framework/assets/scss/theme.scss */"./assets/scss/theme.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzE4ZWUiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJDV190aGVtZV9mcmFtZXdvcmsiLCJvcmlnaW5hbEpzIiwiZmluZCIsInJlbW92ZSIsIm9uIiwiYXR0ciIsImRhdGEiLCJyZW1vdmVBdHRyIiwicmVtb3ZlRGF0YSIsInNraXBMaW5rIiwiZm9jdXNpbiIsImNzcyIsImZvY3Vzb3V0IiwiYWRkQ2xhc3MiLCJ0YWJsZU9mQ29udGVudHMiLCJUb0MiLCJuZXdMaW5lIiwiZWwiLCJ0aXRsZSIsImxpbmsiLCJlYWNoIiwidGV4dCIsInByZXBlbmQiLCJwYXJlbnQiLCJkaXNwbGF5Iiwic2FtZUhlaWdodCIsIm1hdGNoSGVpZ2h0IiwiZW5xdWlyZSIsInJlZ2lzdGVyIiwic2V0dXAiLCJtYXRjaCIsInVubWF0Y2giLCJzY3JvbGxUb1NlY3Rpb24iLCJzY3JvbGwiLCJTbW9vdGhTY3JvbGwiLCJpZ25vcmUiLCJoZWFkZXIiLCJ0b3BPbkVtcHR5SGFzaCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiZHVyYXRpb25NYXgiLCJkdXJhdGlvbk1pbiIsImNsaXAiLCJvZmZzZXQiLCJ1cGRhdGVVUkwiLCJwb3BzdGF0ZSIsImVhc2luZyIsImN1c3RvbUVhc2luZyIsInRpbWUiLCJyZXF1aXJlZElucHV0IiwicmVtb3ZlQ2xhc3MiLCJ2YWwiLCJob3Zlck1lbnUiLCJmbklzQXBwbGVNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJVc2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFyck1hdGNoZXMiLCJiSXNBcHBsZU1vYmlsZSIsInRvZ2dsZURyb3Bkb3duIiwiZSIsIl9kIiwidGFyZ2V0IiwiY2xvc2VzdCIsIl9tIiwic2V0VGltZW91dCIsInNob3VsZE9wZW4iLCJ0eXBlIiwiaXMiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsInZpZGVvRml4ZXMiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY2Fyb3VzZWxzIiwiYXdhcmRzIiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFwcGVuZEFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ0ZXN0aW1vbmlhbHMiLCJzaWRlYmFyX3Jlc3VsdHMiLCJyZXN1bHRzIiwiYXJyb3dzIiwidmlkZW9zIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBVUMsQ0FBVixFQUFhO0FBRWhDLE1BQUlDLGtCQUFrQixHQUFJLFlBQVk7QUFFbEMs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QUFTO0FBQ1o7QUFYRSxLQUFQO0FBZUgsR0F2V3dCLEVBQXpCOztBQXlXQTVFLG9CQUFrQixDQUFDNEYsSUFBbkI7QUFFSCxDQTdXRCxFOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9hc3NldHMvZGlzdC9qcy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgQ1dfdGhlbWVfZnJhbWV3b3JrID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgb3JpZ2luYWxKcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gTG9jYXRpb24gLnNxdWFyZXMtZ3JpZCBmaXggcmVtb3ZpbmcgPGJyPiB0YWdzXG4gICAgICAgICAgICAkKCcuc3F1YXJlcy1ncmlkJykuZmluZCgnPiBicicpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH0pLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZURhdGEoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9Ta2lwIExpbmtcbiAgICAgICAgICAgIHZhciBza2lwTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3VzaW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwic3RhdGljXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c291dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9ObyBjb21tZW50c1xuICAgICAgICAgICAgJChcIiNjb21tZW50Zm9ybVwiKS5hZGRDbGFzcyhcIm5vYXV0b1wiKTtcblxuICAgICAgICAgICAgLy9Ib3ZlciBmb3IgRGVza3RvcCwgY2xpY2sgZm9yIG1vYmlsZSBuYXZcbiAgICAgICAgICAgIC8qaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSBjbGljayB0YXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0YWJsZU9mQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBUb0MgPSAnJztcblxuICAgICAgICAgICAgdmFyIG5ld0xpbmUsIGVsLCB0aXRsZSwgbGluaztcblxuICAgICAgICAgICAgJChcIi50b2MtaGVhZGluZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGVsLnRleHQoKTtcbiAgICAgICAgICAgICAgICBsaW5rID0gXCIjXCIgKyBlbC5hdHRyKFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICBuZXdMaW5lID1cbiAgICAgICAgICAgICAgICAgICAgXCI8bGk+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxhIGNsYXNzPSd0b2MtbGluaycgaHJlZj0nXCIgKyBsaW5rICsgXCInPlwiICtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvYT5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9saT5cIjtcblxuICAgICAgICAgICAgICAgIFRvQyArPSBuZXdMaW5lO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhUb0MpO1xuXG4gICAgICAgICAgICAvL1RvQyArPSBcIjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XG5cbiAgICAgICAgICAgICQoXCIudG9jLXRhYmxlIHVsXCIpLnByZXBlbmQoVG9DKTtcblxuICAgICAgICAgICAgLy8kKCcudG9jLXRhYmxlIHVsJykuc21vb3RoU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgICQoXCIudG9jLWxpbms6ZW1wdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNhbWVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuZ3JpZC1hdHRvcm5leSAuYXR0b3JuZXktaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG4gICAgICAgICAgICAkKCcuZ3JpZC12aWRlb3MgLnZpZGVvLWRlc2NyaXB0aW9uJykubWF0Y2hIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5ncmlkLXJlc3VsdHMgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xuXG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LXNpZGViYXIgLmNvbC1pdGVtJykubWF0Y2hIZWlnaHQoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzY3JvbGxUb1NlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RvcnNcbiAgICAgICAgICAgICAgICBpZ25vcmU6ICdbZGF0YS1zY3JvbGwtaWdub3JlXScsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBudWxsLCAvLyBTZWxlY3RvciBmb3IgZml4ZWQgaGVhZGVycyAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgICAgICAgICB0b3BPbkVtcHR5SGFzaDogdHJ1ZSwgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgZm9yIGxpbmtzIHdpdGggaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBpdCBzaG91bGQgdGFrZSB0byBzY3JvbGwgMTAwMHB4XG4gICAgICAgICAgICAgICAgc3BlZWRBc0R1cmF0aW9uOiBmYWxzZSwgLy8gSWYgdHJ1ZSwgdXNlIHNwZWVkIGFzIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWF4OiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWluOiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGNsaXA6IHRydWUsIC8vIElmIHRydWUsIGFkanVzdCBzY3JvbGwgZGlzdGFuY2UgdG8gcHJldmVudCBhYnJ1cHQgc3RvcHMgbmVhciB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcG9wc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIEVhc2luZ1xuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJywgLy8gRWFzaW5nIHBhdHRlcm4gdG8gdXNlXG4gICAgICAgICAgICAgICAgY3VzdG9tRWFzaW5nOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbi4gQ3VzdG9tIGVhc2luZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gbnVsbCwgd2lsbCBvdmVycmlkZSB0aGUgZWFzaW5nIG9wdGlvbiBhYm92ZVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiA8eW91ciBmb3JtdWxhdGUgd2l0aCB0aW1lIGFzIGEgbXVsdGlwbGllcj5cblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBlYXNlSW5PdXQgUXVhZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZSA8IDAuNSA/IDIgKiB0aW1lICogdGltZSA6IC0xICsgKDQgLSAyICogdGltZSkgKiB0aW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdyZXF1aXJlZCcpID09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBob3Zlck1lbnUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJNYXRjaGVzID0gc3RyVXNlckFnZW50Lm1hdGNoKC8oaXBob25lfGlwb2R8aXBhZCkvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gLy8gRW5kIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudClcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gRW5kIEZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZVxuXG4gICAgICAgICAgICB2YXIgYklzQXBwbGVNb2JpbGUgPSBmbklzQXBwbGVNb2JpbGUoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYklzQXBwbGVNb2JpbGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tID0gJCgnLmRyb3Bkb3duLW1lbnUnLCBfZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZE9wZW4gPSBlLnR5cGUgIT09ICdjbGljaycgJiYgX2QuaXMoJzpob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbS50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIF9kKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS50eXBlID09PSAnbW91c2VsZWF2ZScgPyAxNTAgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCAnLmRyb3Bkb3duJywgdG9nZ2xlRHJvcGRvd24pLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudSBhJywgdG9nZ2xlRHJvcGRvd24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB2aWRlb0ZpeGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIsICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIikucmVwbGFjZShcInJlbD1cIiwgXCJyZWw9MFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhcm91c2VscyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIGF3YXJkcyA9ICQoXCIuYXdhcmRzLXdyYXBcIik7XG5cbiAgICAgICAgICAgIGF3YXJkcy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LWF3YXJkcycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuYXdhcmRzLXBhcnQgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5zYW1lSGVpZ2h0JykubWF0Y2hIZWlnaHQoKTtcblxuICAgICAgICAgICAgdmFyIHRlc3RpbW9uaWFscyA9ICQoJy50ZXN0aW1vbmlhbHMtc2VjdGlvbi1zbGlkZXInKTtcblxuICAgICAgICAgICAgdGVzdGltb25pYWxzLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtdGVzdCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHNpZGViYXJfcmVzdWx0cyA9ICQoJy5yZXN1bHRzLXNsaWRlcl9fc2lkZWJhciAuZ3JpZC1yZXN1bHRzJyk7XG5cbiAgICAgICAgICAgIHNpZGViYXJfcmVzdWx0cy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1yZXN1bHRzJyxcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLCB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9ICQoXCIuZ3JpZC1yZXN1bHRzXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvcyA9ICQoXCIuZ3JpZC12aWRlb3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxKcygpO1xuICAgICAgICAgICAgICAgIHRhYmxlT2ZDb250ZW50cygpO1xuICAgICAgICAgICAgICAgIHNhbWVIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0KCk7XG4gICAgICAgICAgICAgICAgaG92ZXJNZW51KCk7XG4gICAgICAgICAgICAgICAgdmlkZW9GaXhlcygpO1xuICAgICAgICAgICAgICAgIGNhcm91c2VscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbiAgICBDV190aGVtZV9mcmFtZXdvcmsuaW5pdCgpO1xuXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=