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
        autoplay: true,
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

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n    @media screen and (min-width; 768px) {\n                               ^\n      Expected \")\".\n   ╷\n43 │     @media screen and (min-width; 768px) {\n   │                                 ^\n   ╵\n  assets/scss/area/_hero.scss 43:33  root stylesheet\n  stdin 52:9                         root stylesheet\n      in /Volumes/Passport/Ironstride/Site/site/is-framework/assets/scss/area/_hero.scss (line 43, column 33)\n    at runLoaders (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/webpack/lib/NormalModule.js:301:20)\n    at /Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass-loader/lib/loader.js:52:13)\n    at Function.$2 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:24354:48)\n    at wO.$2 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:15295:15)\n    at uP.vq (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8364:6)\n    at pu.cv (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8154:35)\n    at Object.m (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:1383:19)\n    at /Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:5066:51\n    at xe.a (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:1394:71)\n    at xe.$2 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8169:23)\n    at vR.$2 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8164:25)\n    at uP.vq (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8364:6)\n    at Object.eval (eval at CJ (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:648:15), <anonymous>:3:37)\n    at uP.vq (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Volumes/Passport/Ironstride/Site/site/is-framework/node_modules/sass/sass.dart.js:8447:3)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsIklTX3RoZW1lX2ZyYW1ld29yayIsIm9yaWdpbmFsSnMiLCJmaW5kIiwicmVtb3ZlIiwib24iLCJhdHRyIiwiZGF0YSIsInJlbW92ZUF0dHIiLCJyZW1vdmVEYXRhIiwic2tpcExpbmsiLCJmb2N1c2luIiwiY3NzIiwiZm9jdXNvdXQiLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJ0YWJsZU9mQ29udGVudHMiLCJUb0MiLCJuZXdMaW5lIiwiZWwiLCJ0aXRsZSIsImxpbmsiLCJlYWNoIiwidGV4dCIsInByZXBlbmQiLCJwYXJlbnQiLCJkaXNwbGF5Iiwic2FtZUhlaWdodCIsIm1hdGNoSGVpZ2h0IiwiZW5xdWlyZSIsInJlZ2lzdGVyIiwic2V0dXAiLCJtYXRjaCIsInVubWF0Y2giLCJzY3JvbGxUb1NlY3Rpb24iLCJzY3JvbGwiLCJTbW9vdGhTY3JvbGwiLCJpZ25vcmUiLCJoZWFkZXIiLCJ0b3BPbkVtcHR5SGFzaCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiZHVyYXRpb25NYXgiLCJkdXJhdGlvbk1pbiIsImNsaXAiLCJvZmZzZXQiLCJ1cGRhdGVVUkwiLCJwb3BzdGF0ZSIsImVhc2luZyIsImN1c3RvbUVhc2luZyIsInRpbWUiLCJyZXF1aXJlZElucHV0IiwidmFsIiwiaG92ZXJNZW51IiwiZm5Jc0FwcGxlTW9iaWxlIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic3RyVXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJhcnJNYXRjaGVzIiwiYklzQXBwbGVNb2JpbGUiLCJ0b2dnbGVEcm9wZG93biIsImUiLCJfZCIsInRhcmdldCIsImNsb3Nlc3QiLCJfbSIsInNldFRpbWVvdXQiLCJzaG91bGRPcGVuIiwidHlwZSIsImlzIiwidG9nZ2xlQ2xhc3MiLCJuZXh0Iiwic2xpZGVUb2dnbGUiLCJ2aWRlb0ZpeGVzIiwibGVuZ3RoIiwicmVwbGFjZSIsImNhcm91c2VscyIsInRlc3RpbW9uaWFscyIsInNsaWNrIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5IiwiaW5maW5pdGUiLCJhcHBlbmRBcnJvd3MiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7QUFFaEMsTUFBSUMsa0JBQWtCLEdBQUksWUFBWTtBQUVsQyxRQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBRXpCO0FBQ0FGLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJHLElBQW5CLENBQXdCLE1BQXhCLEVBQWdDQyxNQUFoQztBQUVBSixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6QyxZQUFJTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxhQUFiLENBQUosRUFBaUNOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLGFBQWIsRUFBNEJQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLGFBQWIsQ0FBNUIsRUFBeURFLFVBQXpELENBQW9FLGFBQXBFO0FBQ3BDLE9BRkQsRUFFR0gsRUFGSCxDQUVNLE1BRk4sRUFFYyxZQUFZO0FBQ3RCLFlBQUlMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLGFBQWIsQ0FBSixFQUFpQ1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsYUFBYixFQUE0Qk4sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsYUFBYixDQUE1QixFQUF5REUsVUFBekQsQ0FBb0UsYUFBcEU7QUFDcEMsT0FKRCxFQUx5QixDQVd6Qjs7QUFDQSxVQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCVixTQUFDLENBQUMsV0FBRCxDQUFELENBQWVXLE9BQWYsQ0FBdUIsWUFBWTtBQUMvQlgsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxHQUFSLENBQVksVUFBWixFQUF3QixRQUF4QjtBQUNILFNBRkQ7QUFJQVosU0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlYSxRQUFmLENBQXdCLFlBQVk7QUFDaENiLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksR0FBUixDQUFZLFVBQVosRUFBd0IsVUFBeEI7QUFDSCxTQUZEO0FBR0gsT0FSRCxDQVp5QixDQXNCekI7OztBQUNBWixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6Q0wsU0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJjLFFBQXZCLENBQWdDLFlBQWhDO0FBQ0FkLFNBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZSxLQUE3QixDQUFtQyxHQUFuQyxFQUF3Q0MsS0FBeEMsQ0FBOEMsWUFBWTtBQUN0RGhCLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsUUFBUixDQUFpQixjQUFqQixFQUFpQ0csT0FBakM7QUFDSCxTQUZEO0FBR0gsT0FMRDtBQU9BakIsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJLLEVBQTdCLENBQWdDLE9BQWhDLEVBQXlDLFlBQVk7QUFDakRMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLFdBQVIsQ0FBb0IsY0FBcEI7QUFDQWxCLFNBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCZSxLQUF2QixDQUE2QixHQUE3QixFQUFrQ0MsS0FBbEMsQ0FBd0MsWUFBWTtBQUNoRGhCLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLFdBQVIsQ0FBb0IsWUFBcEIsRUFBa0NELE9BQWxDO0FBQ0gsU0FGRDtBQUdILE9BTEQsRUE5QnlCLENBcUN6Qjs7QUFDQWpCLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JjLFFBQWxCLENBQTJCLFFBQTNCLEVBdEN5QixDQXdDekI7O0FBQ0E7Ozs7O0FBTUgsS0EvQ0Q7O0FBaURBLFFBQUlLLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUU5QixVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUVBLFVBQUlDLE9BQUosRUFBYUMsRUFBYixFQUFpQkMsS0FBakIsRUFBd0JDLElBQXhCO0FBRUF4QixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCeUIsSUFBbEIsQ0FBdUIsWUFBWTtBQUUvQkgsVUFBRSxHQUFHdEIsQ0FBQyxDQUFDLElBQUQsQ0FBTjtBQUNBdUIsYUFBSyxHQUFHRCxFQUFFLENBQUNJLElBQUgsRUFBUjtBQUNBRixZQUFJLEdBQUcsTUFBTUYsRUFBRSxDQUFDaEIsSUFBSCxDQUFRLElBQVIsQ0FBYjtBQUVBZSxlQUFPLEdBQ0gsU0FDQSw0QkFEQSxHQUMrQkcsSUFEL0IsR0FDc0MsSUFEdEMsR0FFQUQsS0FGQSxHQUdBLE1BSEEsR0FJQSxPQUxKO0FBT0FILFdBQUcsSUFBSUMsT0FBUDtBQUVILE9BZkQsRUFOOEIsQ0F1QjlCO0FBRUE7O0FBRUFyQixPQUFDLENBQUMsZUFBRCxDQUFELENBQW1CMkIsT0FBbkIsQ0FBMkJQLEdBQTNCLEVBM0I4QixDQTZCOUI7O0FBRUFwQixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQnlCLElBQXJCLENBQTBCLFlBQVk7QUFDbEN6QixTQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixNQUFSLEdBQWlCaEIsR0FBakIsQ0FBcUI7QUFDakJpQixpQkFBTyxFQUFFO0FBRFEsU0FBckI7QUFHSCxPQUpEO0FBTUgsS0FyQ0Q7O0FBdUNBLFFBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekI5QixPQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQytCLFdBQW5DO0FBQ0EvQixPQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQytCLFdBQXJDO0FBQ0EvQixPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QitCLFdBQXpCO0FBR0EvQixPQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQytCLFdBQWhDO0FBRUFDLGFBQU8sQ0FBQ0MsUUFBUixDQUFpQix1REFBakIsRUFBMEU7QUFDdEVDLGFBQUssRUFBRSxpQkFBWSxDQUNmO0FBQ0gsU0FIcUU7QUFJdEVDLGFBQUssRUFBRSxpQkFBWSxDQUdsQixDQVBxRTtBQVF0RUMsZUFBTyxFQUFFLG1CQUFZLENBRXBCO0FBVnFFLE9BQTFFO0FBWUgsS0FwQkQ7O0FBc0JBLFFBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUU5QixVQUFJQyxNQUFNLEdBQUcsSUFBSUMsWUFBSixDQUFpQiw2QkFBakIsRUFBZ0Q7QUFDekQ7QUFDQUMsY0FBTSxFQUFFLHNCQUZpRDtBQUV6QjtBQUNoQ0MsY0FBTSxFQUFFLElBSGlEO0FBRzNDO0FBQ2RDLHNCQUFjLEVBQUUsSUFKeUM7QUFJbkM7QUFDdEJDLGFBQUssRUFBRSxHQUxrRDtBQUs3QztBQUNaQyx1QkFBZSxFQUFFLEtBTndDO0FBTWpDO0FBQ3hCQyxtQkFBVyxFQUFFLElBUDRDO0FBT3RDO0FBQ25CQyxtQkFBVyxFQUFFLElBUjRDO0FBUXRDO0FBQ25CQyxZQUFJLEVBQUUsSUFUbUQ7QUFTN0M7QUFDWkMsY0FBTSxFQUFFLENBVmlEO0FBV3pEQyxpQkFBUyxFQUFFLEtBWDhDO0FBWXpEQyxnQkFBUSxFQUFFLEtBWitDO0FBYXpEO0FBQ0FDLGNBQU0sRUFBRSxnQkFkaUQ7QUFjL0I7QUFDMUJDLG9CQUFZLEVBQUUsc0JBQVVDLElBQVYsRUFBZ0I7QUFDMUI7QUFDQTtBQUVBO0FBRUE7QUFDQSxpQkFBT0EsSUFBSSxHQUFHLEdBQVAsR0FBYSxJQUFJQSxJQUFKLEdBQVdBLElBQXhCLEdBQStCLENBQUMsQ0FBRCxHQUFLLENBQUMsSUFBSSxJQUFJQSxJQUFULElBQWlCQSxJQUE1RDtBQUNIO0FBdkJ3RCxPQUFoRCxDQUFiO0FBMEJILEtBNUJEOztBQThCQSxRQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFFNUJ0RCxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUN6QyxZQUFJTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixNQUFSLEdBQWlCckIsSUFBakIsQ0FBc0IsVUFBdEIsS0FBcUMsVUFBekMsRUFBcUQ7QUFDakRQLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLE1BQVIsR0FBaUJWLFdBQWpCLENBQTZCLFVBQTdCO0FBQ0g7QUFDSixPQUpEO0FBTUFsQixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssRUFBckIsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtBQUN4QyxZQUFJTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1RCxHQUFSLE1BQWlCLEVBQXJCLEVBQXlCO0FBQ3JCdkQsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsTUFBUixHQUFpQmQsUUFBakIsQ0FBMEIsVUFBMUI7QUFDSDtBQUNKLE9BSkQ7QUFNSCxLQWREOztBQWdCQSxRQUFJMEMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUV4QixlQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFlBQUlDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxTQUF2QixJQUFvQ0QsU0FBUyxDQUFDQyxTQUFWLElBQXVCLElBQS9ELEVBQXFFO0FBQ2pFLGNBQUlDLFlBQVksR0FBR0YsU0FBUyxDQUFDQyxTQUFWLENBQW9CRSxXQUFwQixFQUFuQjtBQUNBLGNBQUlDLFVBQVUsR0FBR0YsWUFBWSxDQUFDekIsS0FBYixDQUFtQixvQkFBbkIsQ0FBakI7QUFDQSxjQUFJMkIsVUFBVSxJQUFJLElBQWxCLEVBQ0ksT0FBTyxJQUFQO0FBQ1AsU0FOc0IsQ0FNckI7OztBQUVGLGVBQU8sS0FBUDtBQUNILE9BWHVCLENBV3RCOzs7QUFFRixVQUFJQyxjQUFjLEdBQUdOLGVBQWUsRUFBcEM7QUFFQXpCLGFBQU8sQ0FBQ0MsUUFBUixDQUFpQiwrQkFBakIsRUFBa0Q7QUFDOUNDLGFBQUssRUFBRSxpQkFBWSxDQUNmO0FBQ0gsU0FINkM7QUFJOUNDLGFBQUssRUFBRSxpQkFBWTtBQUVmLGNBQUksQ0FBQzRCLGNBQUwsRUFBcUI7QUFBQSxnQkFFUkMsY0FGUSxHQUVqQixTQUFTQSxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2QixrQkFBTUMsRUFBRSxHQUFHbEUsQ0FBQyxDQUFDaUUsQ0FBQyxDQUFDRSxNQUFILENBQUQsQ0FBWUMsT0FBWixDQUFvQixXQUFwQixDQUFYO0FBQUEsa0JBQ0lDLEVBQUUsR0FBR3JFLENBQUMsQ0FBQyxnQkFBRCxFQUFtQmtFLEVBQW5CLENBRFY7O0FBRUFJLHdCQUFVLENBQUMsWUFBWTtBQUNuQixvQkFBTUMsVUFBVSxHQUFHTixDQUFDLENBQUNPLElBQUYsS0FBVyxPQUFYLElBQXNCTixFQUFFLENBQUNPLEVBQUgsQ0FBTSxRQUFOLENBQXpDOztBQUNBSixrQkFBRSxDQUFDSyxXQUFILENBQWUsTUFBZixFQUF1QkgsVUFBdkI7O0FBQ0FMLGtCQUFFLENBQUNRLFdBQUgsQ0FBZSxNQUFmLEVBQXVCSCxVQUF2Qjs7QUFDQXZFLGlCQUFDLENBQUMsMEJBQUQsRUFBNkJrRSxFQUE3QixDQUFELENBQWtDNUQsSUFBbEMsQ0FBdUMsZUFBdkMsRUFBd0RpRSxVQUF4RDtBQUNILGVBTFMsRUFLUE4sQ0FBQyxDQUFDTyxJQUFGLEtBQVcsWUFBWCxHQUEwQixHQUExQixHQUFnQyxDQUx6QixDQUFWO0FBTUgsYUFYZ0I7O0FBYWpCeEUsYUFBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSyxFQUFWLENBQWEsdUJBQWIsRUFBc0MsV0FBdEMsRUFBbUQyRCxjQUFuRCxFQUFtRTNELEVBQW5FLENBQXNFLE9BQXRFLEVBQStFLGtCQUEvRSxFQUFtRzJELGNBQW5HO0FBRUg7QUFFSixTQXZCNkM7QUF3QjlDNUIsZUFBTyxFQUFFLG1CQUFZLENBRXBCO0FBMUI2QyxPQUFsRDtBQThCQUosYUFBTyxDQUFDQyxRQUFSLENBQWlCLCtCQUFqQixFQUFrRDtBQUM5Q0MsYUFBSyxFQUFFLGlCQUFZLENBQ2Y7QUFDSCxTQUg2QztBQUk5Q0MsYUFBSyxFQUFFLGlCQUFZO0FBRWZuQyxXQUFDLENBQUMsdUNBQUQsQ0FBRCxDQUEyQ0ssRUFBM0MsQ0FBOEMsT0FBOUMsRUFBdUQsWUFBWTtBQUMvREwsYUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkUsSUFBUixHQUFlQyxXQUFmO0FBQ0gsV0FGRDtBQUlILFNBVjZDO0FBVzlDeEMsZUFBTyxFQUFFLG1CQUFZLENBRXBCO0FBYjZDLE9BQWxEO0FBaUJILEtBOUREOztBQWdFQSxRQUFJeUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QixVQUFJN0UsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0I4RSxNQUF0QixHQUErQixDQUFuQyxFQUFzQztBQUNsQzlFLFNBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTSxJQUF0QixDQUEyQixLQUEzQixFQUFrQ04sQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JNLElBQXRCLENBQTJCLEtBQTNCLEVBQWtDeUUsT0FBbEMsQ0FBMEMsTUFBMUMsRUFBa0QsT0FBbEQsQ0FBbEM7QUFDSDtBQUNKLEtBSkQ7O0FBTUEsUUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsVUFBSUMsWUFBWSxHQUFHakYsQ0FBQyxDQUFDLDhCQUFELENBQXBCO0FBRUFpRixrQkFBWSxDQUFDQyxLQUFiLENBQW1CO0FBQ2ZDLFlBQUksRUFBRSxJQURTO0FBRWZDLGNBQU0sRUFBRSxLQUZPO0FBR2ZDLGdCQUFRLEVBQUUsSUFISztBQUlmQyxnQkFBUSxFQUFFLEtBSks7QUFLZkMsb0JBQVksRUFBRTtBQUxDLE9BQW5CO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVILEtBbklEOztBQXFJQSxXQUFPO0FBRUhDLFVBQUksRUFBRSxnQkFBWTtBQUNkdEYsa0JBQVU7QUFDVmlCLHVCQUFlO0FBQ2ZXLGtCQUFVO0FBQ1ZPLHVCQUFlO0FBQ2ZpQixxQkFBYTtBQUNiRSxpQkFBUztBQUNUcUIsa0JBQVU7QUFDVkcsaUJBQVM7QUFDWjtBQVhFLEtBQVA7QUFlSCxHQXhYd0IsRUFBekI7O0FBMFhBL0Usb0JBQWtCLENBQUN1RixJQUFuQjtBQUVILENBOVhELEUiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBJU190aGVtZV9mcmFtZXdvcmsgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBvcmlnaW5hbEpzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBMb2NhdGlvbiAuc3F1YXJlcy1ncmlkIGZpeCByZW1vdmluZyA8YnI+IHRhZ3NcbiAgICAgICAgICAgICQoJy5zcXVhcmVzLWdyaWQnKS5maW5kKCc+IGJyJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpKSAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJywgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfSkub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsICQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInKSkucmVtb3ZlRGF0YSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL1NraXAgTGlua1xuICAgICAgICAgICAgdmFyIHNraXBMaW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNpbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJzdGF0aWNcIik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3Vzb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0Z1bGwgU2NyZWVuIE1lbnVcbiAgICAgICAgICAgICQoXCIubmF2YmFyLXRvZ2dsZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL05vIGNvbW1lbnRzXG4gICAgICAgICAgICAkKFwiI2NvbW1lbnRmb3JtXCIpLmFkZENsYXNzKFwibm9hdXRvXCIpO1xuXG4gICAgICAgICAgICAvL0hvdmVyIGZvciBEZXNrdG9wLCBjbGljayBmb3IgbW9iaWxlIG5hdlxuICAgICAgICAgICAgLyppZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlIGNsaWNrIHRhcCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRhYmxlT2ZDb250ZW50cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIFRvQyA9ICcnO1xuXG4gICAgICAgICAgICB2YXIgbmV3TGluZSwgZWwsIHRpdGxlLCBsaW5rO1xuXG4gICAgICAgICAgICAkKFwiLnRvYy1oZWFkaW5nXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRpdGxlID0gZWwudGV4dCgpO1xuICAgICAgICAgICAgICAgIGxpbmsgPSBcIiNcIiArIGVsLmF0dHIoXCJpZFwiKTtcblxuICAgICAgICAgICAgICAgIG5ld0xpbmUgPVxuICAgICAgICAgICAgICAgICAgICBcIjxsaT5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPGEgY2xhc3M9J3RvYy1saW5rJyBocmVmPSdcIiArIGxpbmsgKyBcIic+XCIgK1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9hPlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L2xpPlwiO1xuXG4gICAgICAgICAgICAgICAgVG9DICs9IG5ld0xpbmU7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFRvQyk7XG5cbiAgICAgICAgICAgIC8vVG9DICs9IFwiPC91bD48L2Rpdj48L2Rpdj48L2Rpdj5cIjtcblxuICAgICAgICAgICAgJChcIi50b2MtdGFibGUgdWxcIikucHJlcGVuZChUb0MpO1xuXG4gICAgICAgICAgICAvLyQoJy50b2MtdGFibGUgdWwnKS5zbW9vdGhTY3JvbGwoKTtcblxuICAgICAgICAgICAgJChcIi50b2MtbGluazplbXB0eVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2FtZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5ncmlkLWF0dG9ybmV5IC5hdHRvcm5leS1pdGVtJykubWF0Y2hIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5ncmlkLXZpZGVvcyAudmlkZW8tZGVzY3JpcHRpb24nKS5tYXRjaEhlaWdodCgpO1xuICAgICAgICAgICAgJCgnLmdyaWQtcmVzdWx0cyAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG5cblxuICAgICAgICAgICAgJCgnLmNvbnRhY3Qtc2lkZWJhciAuY29sLWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xuXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcIiwge1xuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNjcm9sbFRvU2VjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdOm5vdCgubmF2LWxpbmspJywge1xuICAgICAgICAgICAgICAgIC8vIFNlbGVjdG9yc1xuICAgICAgICAgICAgICAgIGlnbm9yZTogJ1tkYXRhLXNjcm9sbC1pZ25vcmVdJywgLy8gU2VsZWN0b3IgZm9yIGxpbmtzIHRvIGlnbm9yZSAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG51bGwsIC8vIFNlbGVjdG9yIGZvciBmaXhlZCBoZWFkZXJzIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgIHRvcE9uRW1wdHlIYXNoOiB0cnVlLCAvLyBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSBmb3IgbGlua3Mgd2l0aCBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCwgLy8gSW50ZWdlci4gQW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGl0IHNob3VsZCB0YWtlIHRvIHNjcm9sbCAxMDAwcHhcbiAgICAgICAgICAgICAgICBzcGVlZEFzRHVyYXRpb246IGZhbHNlLCAvLyBJZiB0cnVlLCB1c2Ugc3BlZWQgYXMgdGhlIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgZHVyYXRpb25NYXg6IG51bGwsIC8vIEludGVnZXIuIFRoZSBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCB0YWtlXG4gICAgICAgICAgICAgICAgZHVyYXRpb25NaW46IG51bGwsIC8vIEludGVnZXIuIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCB0YWtlXG4gICAgICAgICAgICAgICAgY2xpcDogdHJ1ZSwgLy8gSWYgdHJ1ZSwgYWRqdXN0IHNjcm9sbCBkaXN0YW5jZSB0byBwcmV2ZW50IGFicnVwdCBzdG9wcyBuZWFyIHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgdXBkYXRlVVJMOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwb3BzdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gRWFzaW5nXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLCAvLyBFYXNpbmcgcGF0dGVybiB0byB1c2VcbiAgICAgICAgICAgICAgICBjdXN0b21FYXNpbmc6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1bmN0aW9uLiBDdXN0b20gZWFzaW5nIHBhdHRlcm5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBzZXQgdG8gYW55dGhpbmcgb3RoZXIgdGhhbiBudWxsLCB3aWxsIG92ZXJyaWRlIHRoZSBlYXNpbmcgb3B0aW9uIGFib3ZlXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIDx5b3VyIGZvcm11bGF0ZSB3aXRoIHRpbWUgYXMgYSBtdWx0aXBsaWVyPlxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IGVhc2VJbk91dCBRdWFkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lIDwgMC41ID8gMiAqIHRpbWUgKiB0aW1lIDogLTEgKyAoNCAtIDIgKiB0aW1lKSAqIHRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVxdWlyZWRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmRhdGEoJ3JlcXVpcmVkJykgPT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuaW5wdXQtcmVxdWlyZWQnKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGhvdmVyTWVudSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZm5Jc0FwcGxlTW9iaWxlKCkge1xuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goLyhpcGhvbmV8aXBvZHxpcGFkKS8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTWF0Y2hlcyAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBFbmQgRnVuY3Rpb24gZm5Jc0FwcGxlTW9iaWxlXG5cbiAgICAgICAgICAgIHZhciBiSXNBcHBsZU1vYmlsZSA9IGZuSXNBcHBsZU1vYmlsZSgpO1xuXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweClcIiwge1xuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiSXNBcHBsZU1vYmlsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2QgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX20gPSAkKCcuZHJvcGRvd24tbWVudScsIF9kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkT3BlbiA9IGUudHlwZSAhPT0gJ2NsaWNrJyAmJiBfZC5pcygnOmhvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tLnRvZ2dsZUNsYXNzKCdzaG93Jywgc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kLnRvZ2dsZUNsYXNzKCdzaG93Jywgc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJywgX2QpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBzaG91bGRPcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyA/IDE1MCA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScsICcuZHJvcGRvd24nLCB0b2dnbGVEcm9wZG93bikub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51IGEnLCB0b2dnbGVEcm9wZG93bik7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI25hdi1tb2JpbGUgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHZpZGVvRml4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIi5jd192aWRlb19zaW5nbGVcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIiwgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwicmVsPVwiLCBcInJlbD0wXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2Fyb3VzZWxzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKnZhciBhd2FyZHMgPSAkKFwiLmF3YXJkcy13cmFwXCIpO1xuXG4gICAgICAgICAgICBhd2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1hd2FyZHMnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5pdGVtJykubWF0Y2hIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuc2FtZUhlaWdodCcpLm1hdGNoSGVpZ2h0KCk7Ki9cblxuICAgICAgICAgICAgdmFyIHRlc3RpbW9uaWFscyA9ICQoJy50ZXN0aW1vbmlhbHMtc2VjdGlvbi1zbGlkZXInKTtcblxuICAgICAgICAgICAgdGVzdGltb25pYWxzLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXRlc3QnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qdmFyIHNpZGViYXJfcmVzdWx0cyA9ICQoJy5yZXN1bHRzLXNsaWRlcl9fc2lkZWJhciAuZ3JpZC1yZXN1bHRzJyk7XG5cbiAgICAgICAgICAgIHNpZGViYXJfcmVzdWx0cy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1yZXN1bHRzJyxcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLCB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9ICQoXCIuZ3JpZC1yZXN1bHRzXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvcyA9ICQoXCIuZ3JpZC12aWRlb3NcIik7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7ICovXG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxKcygpO1xuICAgICAgICAgICAgICAgIHRhYmxlT2ZDb250ZW50cygpO1xuICAgICAgICAgICAgICAgIHNhbWVIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0KCk7XG4gICAgICAgICAgICAgICAgaG92ZXJNZW51KCk7XG4gICAgICAgICAgICAgICAgdmlkZW9GaXhlcygpO1xuICAgICAgICAgICAgICAgIGNhcm91c2VscygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbiAgICBJU190aGVtZV9mcmFtZXdvcmsuaW5pdCgpO1xuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9