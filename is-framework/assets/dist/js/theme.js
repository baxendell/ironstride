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

__webpack_require__(/*! C:\wamp64\www\ironstride\wp-content\themes\is-framework\assets\js\custom\theme.js */"./assets/js/custom/theme.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\ironstride\wp-content\themes\is-framework\assets\scss\theme.scss */"./assets/scss/theme.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiSVNfdGhlbWVfZnJhbWV3b3JrIiwib3JpZ2luYWxKcyIsImZpbmQiLCJyZW1vdmUiLCJvbiIsImF0dHIiLCJkYXRhIiwicmVtb3ZlQXR0ciIsInJlbW92ZURhdGEiLCJza2lwTGluayIsImZvY3VzaW4iLCJjc3MiLCJmb2N1c291dCIsImFkZENsYXNzIiwiZGVsYXkiLCJxdWV1ZSIsImRlcXVldWUiLCJyZW1vdmVDbGFzcyIsInRhYmxlT2ZDb250ZW50cyIsIlRvQyIsIm5ld0xpbmUiLCJlbCIsInRpdGxlIiwibGluayIsImVhY2giLCJ0ZXh0IiwicHJlcGVuZCIsInBhcmVudCIsImRpc3BsYXkiLCJzYW1lSGVpZ2h0IiwibWF0Y2hIZWlnaHQiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJzZXR1cCIsIm1hdGNoIiwidW5tYXRjaCIsInNjcm9sbFRvU2VjdGlvbiIsInNjcm9sbCIsIlNtb290aFNjcm9sbCIsImlnbm9yZSIsImhlYWRlciIsInRvcE9uRW1wdHlIYXNoIiwic3BlZWQiLCJzcGVlZEFzRHVyYXRpb24iLCJkdXJhdGlvbk1heCIsImR1cmF0aW9uTWluIiwiY2xpcCIsIm9mZnNldCIsInVwZGF0ZVVSTCIsInBvcHN0YXRlIiwiZWFzaW5nIiwiY3VzdG9tRWFzaW5nIiwidGltZSIsInJlcXVpcmVkSW5wdXQiLCJ2YWwiLCJob3Zlck1lbnUiLCJmbklzQXBwbGVNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJVc2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFyck1hdGNoZXMiLCJiSXNBcHBsZU1vYmlsZSIsInRvZ2dsZURyb3Bkb3duIiwiZSIsIl9kIiwidGFyZ2V0IiwiY2xvc2VzdCIsIl9tIiwic2V0VGltZW91dCIsInNob3VsZE9wZW4iLCJ0eXBlIiwiaXMiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsInZpZGVvRml4ZXMiLCJsZW5ndGgiLCJyZXBsYWNlIiwiY2Fyb3VzZWxzIiwidGVzdGltb25pYWxzIiwic2xpY2siLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhcHBlbmRBcnJvd3MiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7QUFFaEMsTUFBSUMsa0JBQWtCLEdBQUksWUFBWTtBQUVsQyxRQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBRXpCO0FBQ0FGLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJHLElBQW5CLENBQXdCLE1BQXhCLEVBQWdD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QXNCTSxJQUF0QixDQUEyQixLQUEzQixFQUFrQ3lFLE9BQWxDLENBQTBDLE1BQTFDLEVBQWtELE9BQWxELENBQWxDO0FBQ0g7QUFDSixLQUpEOztBQU1BLFFBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBLFVBQUlDLFlBQVksR0FBR2pGLENBQUMsQ0FBQyw4QkFBRCxDQUFwQjtBQUVBaUYsa0JBQVksQ0FBQ0MsS0FBYixDQUFtQjtBQUNmQyxZQUFJLEVBQUUsSUFEUztBQUVmQyxjQUFNLEVBQUUsS0FGTztBQUdmQyxnQkFBUSxFQUFFLEtBSEs7QUFJZkMsb0JBQVksRUFBRTtBQUpDLE9BQW5CO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVILEtBbElEOztBQW9JQSxXQUFPO0FBRUhDLFVBQUksRUFBRSxnQkFBWTtBQUNkckYsa0JBQVU7QUFDVmlCLHVCQUFlO0FBQ2ZXLGtCQUFVO0FBQ1ZPLHVCQUFlO0FBQ2ZpQixxQkFBYTtBQUNiRSxpQkFBUztBQUNUcUIsa0JBQVU7QUFDVkcsaUJBQVM7QUFDWjtBQVhFLEtBQVA7QUFlSCxHQXZYd0IsRUFBekI7O0FBeVhBL0Usb0JBQWtCLENBQUNzRixJQUFuQjtBQUVILENBN1hELEU7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgSVNfdGhlbWVfZnJhbWV3b3JrID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIG9yaWdpbmFsSnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBMb2NhdGlvbiAuc3F1YXJlcy1ncmlkIGZpeCByZW1vdmluZyA8YnI+IHRhZ3NcclxuICAgICAgICAgICAgJCgnLnNxdWFyZXMtZ3JpZCcpLmZpbmQoJz4gYnInKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInLCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZUF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIH0pLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsICQodGhpcykuZGF0YSgncGxhY2Vob2xkZXInKSkucmVtb3ZlRGF0YSgncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1NraXAgTGlua1xyXG4gICAgICAgICAgICB2YXIgc2tpcExpbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3VzaW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJzdGF0aWNcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3Vzb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XHJcbiAgICAgICAgICAgICQoXCIubmF2YmFyLXRvZ2dsZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuYWRkQ2xhc3MoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2UnKS5kZWxheSg0MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5hdi1hY3RpdmVcIikuZGVxdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9ObyBjb21tZW50c1xyXG4gICAgICAgICAgICAkKFwiI2NvbW1lbnRmb3JtXCIpLmFkZENsYXNzKFwibm9hdXRvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9Ib3ZlciBmb3IgRGVza3RvcCwgY2xpY2sgZm9yIG1vYmlsZSBuYXZcclxuICAgICAgICAgICAgLyppZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bicpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2xpY2sgdGFwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB0YWJsZU9mQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgVG9DID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3TGluZSwgZWwsIHRpdGxlLCBsaW5rO1xyXG5cclxuICAgICAgICAgICAgJChcIi50b2MtaGVhZGluZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGVsLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBcIiNcIiArIGVsLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdMaW5lID1cclxuICAgICAgICAgICAgICAgICAgICBcIjxsaT5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8YSBjbGFzcz0ndG9jLWxpbmsnIGhyZWY9J1wiICsgbGluayArIFwiJz5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9hPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvbGk+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgVG9DICs9IG5ld0xpbmU7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coVG9DKTtcclxuXHJcbiAgICAgICAgICAgIC8vVG9DICs9IFwiPC91bD48L2Rpdj48L2Rpdj48L2Rpdj5cIjtcclxuXHJcbiAgICAgICAgICAgICQoXCIudG9jLXRhYmxlIHVsXCIpLnByZXBlbmQoVG9DKTtcclxuXHJcbiAgICAgICAgICAgIC8vJCgnLnRvYy10YWJsZSB1bCcpLnNtb290aFNjcm9sbCgpO1xyXG5cclxuICAgICAgICAgICAgJChcIi50b2MtbGluazplbXB0eVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHNhbWVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5ncmlkLWF0dG9ybmV5IC5hdHRvcm5leS1pdGVtJykubWF0Y2hIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnLmdyaWQtdmlkZW9zIC52aWRlby1kZXNjcmlwdGlvbicpLm1hdGNoSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJy5ncmlkLXJlc3VsdHMgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICQoJy5jb250YWN0LXNpZGViYXIgLmNvbC1pdGVtJykubWF0Y2hIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHNjcm9sbFRvU2VjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdG9yc1xyXG4gICAgICAgICAgICAgICAgaWdub3JlOiAnW2RhdGEtc2Nyb2xsLWlnbm9yZV0nLCAvLyBTZWxlY3RvciBmb3IgbGlua3MgdG8gaWdub3JlIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBudWxsLCAvLyBTZWxlY3RvciBmb3IgZml4ZWQgaGVhZGVycyAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIHRvcE9uRW1wdHlIYXNoOiB0cnVlLCAvLyBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSBmb3IgbGlua3Mgd2l0aCBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLCAvLyBJbnRlZ2VyLiBBbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgaXQgc2hvdWxkIHRha2UgdG8gc2Nyb2xsIDEwMDBweFxyXG4gICAgICAgICAgICAgICAgc3BlZWRBc0R1cmF0aW9uOiBmYWxzZSwgLy8gSWYgdHJ1ZSwgdXNlIHNwZWVkIGFzIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb25NYXg6IG51bGwsIC8vIEludGVnZXIuIFRoZSBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCB0YWtlXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbk1pbjogbnVsbCwgLy8gSW50ZWdlci4gVGhlIG1pbmltdW0gYW1vdW50IG9mIHRpbWUgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHRha2VcclxuICAgICAgICAgICAgICAgIGNsaXA6IHRydWUsIC8vIElmIHRydWUsIGFkanVzdCBzY3JvbGwgZGlzdGFuY2UgdG8gcHJldmVudCBhYnJ1cHQgc3RvcHMgbmVhciB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVVUkw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9wc3RhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gRWFzaW5nXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsIC8vIEVhc2luZyBwYXR0ZXJuIHRvIHVzZVxyXG4gICAgICAgICAgICAgICAgY3VzdG9tRWFzaW5nOiBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1bmN0aW9uLiBDdXN0b20gZWFzaW5nIHBhdHRlcm5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHNldCB0byBhbnl0aGluZyBvdGhlciB0aGFuIG51bGwsIHdpbGwgb3ZlcnJpZGUgdGhlIGVhc2luZyBvcHRpb24gYWJvdmVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIDx5b3VyIGZvcm11bGF0ZSB3aXRoIHRpbWUgYXMgYSBtdWx0aXBsaWVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBlYXNlSW5PdXQgUXVhZFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lIDwgMC41ID8gMiAqIHRpbWUgKiB0aW1lIDogLTEgKyAoNCAtIDIgKiB0aW1lKSAqIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcmVxdWlyZWRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmRhdGEoJ3JlcXVpcmVkJykgPT0gJ3JlcXVpcmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgaG92ZXJNZW51ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZm5Jc0FwcGxlTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goLyhpcGhvbmV8aXBvZHxpcGFkKS8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJNYXRjaGVzICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSAvLyBFbmQgRnVuY3Rpb24gZm5Jc0FwcGxlTW9iaWxlXHJcblxyXG4gICAgICAgICAgICB2YXIgYklzQXBwbGVNb2JpbGUgPSBmbklzQXBwbGVNb2JpbGUoKTtcclxuXHJcbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJJc0FwcGxlTW9iaWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tID0gJCgnLmRyb3Bkb3duLW1lbnUnLCBfZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRPcGVuID0gZS50eXBlICE9PSAnY2xpY2snICYmIF9kLmlzKCc6aG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbS50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kLnRvZ2dsZUNsYXNzKCdzaG93Jywgc2hvdWxkT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLCBfZCkuYXR0cignYXJpYS1leHBhbmRlZCcsIHNob3VsZE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS50eXBlID09PSAnbW91c2VsZWF2ZScgPyAxNTAgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCAnLmRyb3Bkb3duJywgdG9nZ2xlRHJvcGRvd24pLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudSBhJywgdG9nZ2xlRHJvcGRvd24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgaW4gY29udGVudCB2aWEgQUpBWCAoanVzdCB0aGUgb25jZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjbmF2LW1vYmlsZSAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2aWRlb0ZpeGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJChcIi5jd192aWRlb19zaW5nbGVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiLCAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJyZWw9XCIsIFwicmVsPTBcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNhcm91c2VscyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIGF3YXJkcyA9ICQoXCIuYXdhcmRzLXdyYXBcIik7XHJcblxyXG4gICAgICAgICAgICBhd2FyZHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi1hd2FyZHMnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5pdGVtJykubWF0Y2hIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnLmF3YXJkcy1wYXJ0IC5zYW1lSGVpZ2h0JykubWF0Y2hIZWlnaHQoKTsqL1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3RpbW9uaWFscyA9ICQoJy50ZXN0aW1vbmlhbHMtc2VjdGlvbi1zbGlkZXInKTtcclxuXHJcbiAgICAgICAgICAgIHRlc3RpbW9uaWFscy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXRlc3QnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIHNpZGViYXJfcmVzdWx0cyA9ICQoJy5yZXN1bHRzLXNsaWRlcl9fc2lkZWJhciAuZ3JpZC1yZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICBzaWRlYmFyX3Jlc3VsdHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXJlc3VsdHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAkKFwiLmdyaWQtcmVzdWx0c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRlb3MgPSAkKFwiLmdyaWQtdmlkZW9zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSnMoKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlT2ZDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgc2FtZUhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBob3Zlck1lbnUoKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRml4ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VscygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIElTX3RoZW1lX2ZyYW1ld29yay5pbml0KCk7XHJcblxyXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=