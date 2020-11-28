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

    var postFilter = function postFilter() {
      // Infinite Scrolling
      if ($("#blog").length) {
        var current_page = 1;
        $('.load-more').on('click', function () {
          $.ajax({
            type: 'POST',
            url: '/wp-admin/admin-ajax.php',
            dataType: 'html',
            data: {
              action: 'filter_post',
              category: $("#category-info").attr("data-category"),
              page: current_page + 1
            },
            beforeSend: function beforeSend(xhr) {
              canBeLoaded = false;
              $('.inner-content').find('article:last-of-type').after("<div class='loader'></div>");
            },
            success: function success(res) {
              if (res == "There are no more posts to show.") {
                $(".load-more").fadeTo(100, 0);
                res = "<div class='text-center no-posts'>" + res + "</div>";
              }

              $('.inner-content').find('.loader').remove();
              $('.inner-content').find('article:last-of-type').after(res);
              current_page += 1;
            }
          });
        });
      }

      $(".cat-list__item input[type='checkbox']").on('change', function () {
        $(this).parent().siblings().find('input:checkbox').prop('checked', false);
        var category;
        current_page = 1;
        $(".load-more").fadeTo(400, 1);

        if ($(this).prop("checked") == true) {
          category = $(this).attr('id');
        } else if ($(this).prop("checked") == false) {
          category = "all";
        }

        $("#category-info").attr("data-category", category);
        $.ajax({
          type: 'POST',
          url: '/wp-admin/admin-ajax.php',
          dataType: 'html',
          data: {
            action: 'filter_post',
            category: category,
            page: 1
          },
          beforeSend: function beforeSend() {
            $(".inner-content").html("<div class='loader'></div>");
          },
          success: function success(res) {
            $('.inner-content').html(res);
          }
        });
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
        postFilter();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiSVNfdGhlbWVfZnJhbWV3b3JrIiwib3JpZ2luYWxKcyIsImZpbmQiLCJyZW1vdmUiLCJvbiIsImF0dHIiLCJkYXRhIiwicmVtb3ZlQXR0ciIsInJlbW92ZURhdGEiLCJza2lwTGluayIsImZvY3VzaW4iLCJjc3MiLCJmb2N1c291dCIsImFkZENsYXNzIiwiZGVsYXkiLCJxdWV1ZSIsImRlcXVldWUiLCJyZW1vdmVDbGFzcyIsInRhYmxlT2ZDb250ZW50cyIsIlRvQyIsIm5ld0xpbmUiLCJlbCIsInRpdGxlIiwibGluayIsImVhY2giLCJ0ZXh0IiwicHJlcGVuZCIsInBhcmVudCIsImRpc3BsYXkiLCJzYW1lSGVpZ2h0IiwibWF0Y2hIZWlnaHQiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJzZXR1cCIsIm1hdGNoIiwidW5tYXRjaCIsInNjcm9sbFRvU2VjdGlvbiIsInNjcm9sbCIsIlNtb290aFNjcm9sbCIsImlnbm9yZSIsImhlYWRlciIsInRvcE9uRW1wdHlIYXNoIiwic3BlZWQiLCJzcGVlZEFzRHVyYXRpb24iLCJkdXJhdGlvbk1heCIsImR1cmF0aW9uTWluIiwiY2xpcCIsIm9mZnNldCIsInVwZGF0ZVVSTCIsInBvcHN0YXRlIiwiZWFzaW5nIiwiY3VzdG9tRWFzaW5nIiwidGltZSIsInJlcXVpcmVkSW5wdXQiLCJ2YWwiLCJob3Zlck1lbnUiLCJmbklzQXBwbGVNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJVc2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFyck1hdGNoZXMiLCJiSXNBcHBsZU1vYmlsZSIsInRvZ2dsZURyb3Bkb3duIiwiZSIsIl9kIiwidGFyZ2V0IiwiY2xvc2VzdCIsIl9tIiwic2V0VGltZW91dCIsInNob3VsZE9wZW4iLCJ0eXBlIiwiaXMiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsInBvc3RGaWx0ZXIiLCJsZW5ndGgiLCJjdXJyZW50X3BhZ2UiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJjYXRlZ29yeSIsInBhZ2UiLCJiZWZvcmVTZW5kIiwieGhyIiwiY2FuQmVMb2FkZWQiLCJhZnRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWRlVG8iLCJzaWJsaW5ncyIsInByb3AiLCJodG1sIiwidmlkZW9GaXhlcyIsInJlcGxhY2UiLCJjYXJvdXNlbHMiLCJ0ZXN0aW1vbmlhbHMiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJhdXRvcGxheSIsImluZmluaXRlIiwiYXBwZW5kQXJyb3dzIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFN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UztBQUNUd0Msa0JBQVU7QUFDVkUsaUJBQVM7QUFDVHJCLGtCQUFVO0FBQ2I7QUFaRSxLQUFQO0FBZ0JILEdBaGN3QixFQUF6Qjs7QUFrY0E1RSxvQkFBa0IsQ0FBQ3lHLElBQW5CO0FBRUgsQ0F0Y0QsRTs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBJU190aGVtZV9mcmFtZXdvcmsgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgb3JpZ2luYWxKcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIExvY2F0aW9uIC5zcXVhcmVzLWdyaWQgZml4IHJlbW92aW5nIDxicj4gdGFnc1xyXG4gICAgICAgICAgICAkKCcuc3F1YXJlcy1ncmlkJykuZmluZCgnPiBicicpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJCgnaW5wdXQsIHRleHRhcmVhJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICAgICAgfSkub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKSAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicpKS5yZW1vdmVEYXRhKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2tpcCBMaW5rXHJcbiAgICAgICAgICAgIHZhciBza2lwTGluayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNpbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiLCBcInN0YXRpY1wiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuc2tpcGxpbmtcIikuZm9jdXNvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0Z1bGwgU2NyZWVuIE1lbnVcclxuICAgICAgICAgICAgJChcIi5uYXZiYXItdG9nZ2xlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5hZGRDbGFzcyhcIm5hdi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIikuZGVxdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2LWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL05vIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICQoXCIjY29tbWVudGZvcm1cIikuYWRkQ2xhc3MoXCJub2F1dG9cIik7XHJcblxyXG4gICAgICAgICAgICAvL0hvdmVyIGZvciBEZXNrdG9wLCBjbGljayBmb3IgbW9iaWxlIG5hdlxyXG4gICAgICAgICAgICAvKmlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSBjbGljayB0YXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHRhYmxlT2ZDb250ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBUb0MgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdMaW5lLCBlbCwgdGl0bGUsIGxpbms7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnRvYy1oZWFkaW5nXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gZWwudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgbGluayA9IFwiI1wiICsgZWwuYXR0cihcImlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0xpbmUgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiPGxpPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxhIGNsYXNzPSd0b2MtbGluaycgaHJlZj0nXCIgKyBsaW5rICsgXCInPlwiICtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2E+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9saT5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBUb0MgKz0gbmV3TGluZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhUb0MpO1xyXG5cclxuICAgICAgICAgICAgLy9Ub0MgKz0gXCI8L3VsPjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xyXG5cclxuICAgICAgICAgICAgJChcIi50b2MtdGFibGUgdWxcIikucHJlcGVuZChUb0MpO1xyXG5cclxuICAgICAgICAgICAgLy8kKCcudG9jLXRhYmxlIHVsJykuc21vb3RoU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnRvYy1saW5rOmVtcHR5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2FtZUhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLmdyaWQtYXR0b3JuZXkgLmF0dG9ybmV5LWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xyXG4gICAgICAgICAgICAkKCcuZ3JpZC12aWRlb3MgLnZpZGVvLWRlc2NyaXB0aW9uJykubWF0Y2hIZWlnaHQoKTtcclxuICAgICAgICAgICAgJCgnLmdyaWQtcmVzdWx0cyAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJCgnLmNvbnRhY3Qtc2lkZWJhciAuY29sLWl0ZW0nKS5tYXRjaEhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2Nyb2xsVG9TZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdOm5vdCgubmF2LWxpbmspJywge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICBpZ25vcmU6ICdbZGF0YS1zY3JvbGwtaWdub3JlXScsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG51bGwsIC8vIFNlbGVjdG9yIGZvciBmaXhlZCBoZWFkZXJzIChtdXN0IGJlIGEgdmFsaWQgQ1NTIHNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgdG9wT25FbXB0eUhhc2g6IHRydWUsIC8vIFNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBwYWdlIGZvciBsaW5rcyB3aXRoIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBpdCBzaG91bGQgdGFrZSB0byBzY3JvbGwgMTAwMHB4XHJcbiAgICAgICAgICAgICAgICBzcGVlZEFzRHVyYXRpb246IGZhbHNlLCAvLyBJZiB0cnVlLCB1c2Ugc3BlZWQgYXMgdGhlIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbk1heDogbnVsbCwgLy8gSW50ZWdlci4gVGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWUgdGhlIHNjcm9sbCBhbmltYXRpb24gc2hvdWxkIHRha2VcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWluOiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxyXG4gICAgICAgICAgICAgICAgY2xpcDogdHJ1ZSwgLy8gSWYgdHJ1ZSwgYWRqdXN0IHNjcm9sbCBkaXN0YW5jZSB0byBwcmV2ZW50IGFicnVwdCBzdG9wcyBuZWFyIHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3BzdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBFYXNpbmdcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJywgLy8gRWFzaW5nIHBhdHRlcm4gdG8gdXNlXHJcbiAgICAgICAgICAgICAgICBjdXN0b21FYXNpbmc6IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuY3Rpb24uIEN1c3RvbSBlYXNpbmcgcGF0dGVyblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gbnVsbCwgd2lsbCBvdmVycmlkZSB0aGUgZWFzaW5nIG9wdGlvbiBhYm92ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gPHlvdXIgZm9ybXVsYXRlIHdpdGggdGltZSBhcyBhIG11bHRpcGxpZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IGVhc2VJbk91dCBRdWFkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWUgPCAwLjUgPyAyICogdGltZSAqIHRpbWUgOiAtMSArICg0IC0gMiAqIHRpbWUpICogdGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciByZXF1aXJlZElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuZGF0YSgncmVxdWlyZWQnKSA9PSAncmVxdWlyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaW5wdXQtcmVxdWlyZWQnKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBob3Zlck1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmbklzQXBwbGVNb2JpbGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvKGlwaG9uZXxpcG9kfGlwYWQpLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IC8vIEVuZCBGdW5jdGlvbiBmbklzQXBwbGVNb2JpbGVcclxuXHJcbiAgICAgICAgICAgIHZhciBiSXNBcHBsZU1vYmlsZSA9IGZuSXNBcHBsZU1vYmlsZSgpO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYklzQXBwbGVNb2JpbGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX20gPSAkKCcuZHJvcGRvd24tbWVudScsIF9kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZE9wZW4gPSBlLnR5cGUgIT09ICdjbGljaycgJiYgX2QuaXMoJzpob3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tLnRvZ2dsZUNsYXNzKCdzaG93Jywgc2hvdWxkT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2QudG9nZ2xlQ2xhc3MoJ3Nob3cnLCBzaG91bGRPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIF9kKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgc2hvdWxkT3Blbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlLnR5cGUgPT09ICdtb3VzZWxlYXZlJyA/IDE1MCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZScsICcuZHJvcGRvd24nLCB0b2dnbGVEcm9wZG93bikub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51IGEnLCB0b2dnbGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcclxuICAgICAgICAgICAgICAgIHNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBpbiBjb250ZW50IHZpYSBBSkFYIChqdXN0IHRoZSBvbmNlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBvc3RGaWx0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gSW5maW5pdGUgU2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGlmICggJCggXCIjYmxvZ1wiICkubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfcGFnZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmxvYWQtbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdmaWx0ZXJfcG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICQoXCIjY2F0ZWdvcnktaW5mb1wiKS5hdHRyKFwiZGF0YS1jYXRlZ29yeVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBjdXJyZW50X3BhZ2UgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCB4aHIgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlTG9hZGVkID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmlubmVyLWNvbnRlbnQnKS5maW5kKCdhcnRpY2xlOmxhc3Qtb2YtdHlwZScpLmFmdGVyKCBcIjxkaXYgY2xhc3M9J2xvYWRlcic+PC9kaXY+XCIgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHJlcyA9PSBcIlRoZXJlIGFyZSBubyBtb3JlIHBvc3RzIHRvIHNob3cuXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5sb2FkLW1vcmVcIikuZmFkZVRvKCAxMDAsIDAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBcIjxkaXYgY2xhc3M9J3RleHQtY2VudGVyIG5vLXBvc3RzJz5cIisgcmVzICtcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmZpbmQoJy5sb2FkZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmZpbmQoJ2FydGljbGU6bGFzdC1vZi10eXBlJykuYWZ0ZXIoIHJlcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wYWdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNhdC1saXN0X19pdGVtIGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2lucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgJChcIi5sb2FkLW1vcmVcIikuZmFkZVRvKCA0MDAsIDEgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZigkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIpID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IFwiYWxsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNjYXRlZ29yeS1pbmZvXCIpLmF0dHIoXCJkYXRhLWNhdGVnb3J5XCIsIGNhdGVnb3J5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvd3AtYWRtaW4vYWRtaW4tYWpheC5waHAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZmlsdGVyX3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmlubmVyLWNvbnRlbnRcIikuaHRtbChcIjxkaXYgY2xhc3M9J2xvYWRlcic+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmh0bWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmlkZW9GaXhlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIiwgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwicmVsPVwiLCBcInJlbD0wXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjYXJvdXNlbHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvKnZhciBhd2FyZHMgPSAkKFwiLmF3YXJkcy13cmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgYXdhcmRzLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtYXdhcmRzJyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuc2FtZUhlaWdodCcpLm1hdGNoSGVpZ2h0KCk7Ki9cclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0aW1vbmlhbHMgPSAkKCcudGVzdGltb25pYWxzLXNlY3Rpb24tc2xpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXRlc3QnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIHNpZGViYXJfcmVzdWx0cyA9ICQoJy5yZXN1bHRzLXNsaWRlcl9fc2lkZWJhciAuZ3JpZC1yZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICBzaWRlYmFyX3Jlc3VsdHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXJlc3VsdHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAkKFwiLmdyaWQtcmVzdWx0c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRlb3MgPSAkKFwiLmdyaWQtdmlkZW9zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSnMoKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlT2ZDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgc2FtZUhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBob3Zlck1lbnUoKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRml4ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VscygpO1xyXG4gICAgICAgICAgICAgICAgcG9zdEZpbHRlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIElTX3RoZW1lX2ZyYW1ld29yay5pbml0KCk7XHJcblxyXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=