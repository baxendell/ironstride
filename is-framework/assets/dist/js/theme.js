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
        var canBeLoaded = true,
            // this param allows to initiate the AJAX call only if necessary
        current_page = 1,
            bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts

        $(window).scroll(function () {
          if ($(document).scrollTop() > $(document).height() - bottomOffset && canBeLoaded == true) {
            $.ajax({
              type: 'POST',
              url: '/wp-admin/admin-ajax.php',
              dataType: 'html',
              data: {
                action: 'filter_post',
                category: $("#category-info").attr("data-category"),
                page: current_page
              },
              beforeSend: function beforeSend(xhr) {
                canBeLoaded = false;
                $('.inner-content').find('article:last-of-type').after("<div class='loader'></div>");
              },
              success: function success(res) {
                if (res) {
                  $('.inner-content').find('.loader').remove();
                  $('.inner-content').find('article:last-of-type').after(res); // where to insert posts

                  canBeLoaded = true; // the ajax is completed, now we can run it again

                  current_page += 1;
                }
              }
            });
          }
        });
      }

      $(".cat-list__item input[type='checkbox']").on('change', function () {
        $(this).parent().siblings().find('input:checkbox').prop('checked', false);
        var category;

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
            category: category
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiSVNfdGhlbWVfZnJhbWV3b3JrIiwib3JpZ2luYWxKcyIsImZpbmQiLCJyZW1vdmUiLCJvbiIsImF0dHIiLCJkYXRhIiwicmVtb3ZlQXR0ciIsInJlbW92ZURhdGEiLCJza2lwTGluayIsImZvY3VzaW4iLCJjc3MiLCJmb2N1c291dCIsImFkZENsYXNzIiwiZGVsYXkiLCJxdWV1ZSIsImRlcXVldWUiLCJyZW1vdmVDbGFzcyIsInRhYmxlT2ZDb250ZW50cyIsIlRvQyIsIm5ld0xpbmUiLCJlbCIsInRpdGxlIiwibGluayIsImVhY2giLCJ0ZXh0IiwicHJlcGVuZCIsInBhcmVudCIsImRpc3BsYXkiLCJzYW1lSGVpZ2h0IiwibWF0Y2hIZWlnaHQiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJzZXR1cCIsIm1hdGNoIiwidW5tYXRjaCIsInNjcm9sbFRvU2VjdGlvbiIsInNjcm9sbCIsIlNtb290aFNjcm9sbCIsImlnbm9yZSIsImhlYWRlciIsInRvcE9uRW1wdHlIYXNoIiwic3BlZWQiLCJzcGVlZEFzRHVyYXRpb24iLCJkdXJhdGlvbk1heCIsImR1cmF0aW9uTWluIiwiY2xpcCIsIm9mZnNldCIsInVwZGF0ZVVSTCIsInBvcHN0YXRlIiwiZWFzaW5nIiwiY3VzdG9tRWFzaW5nIiwidGltZSIsInJlcXVpcmVkSW5wdXQiLCJ2YWwiLCJob3Zlck1lbnUiLCJmbklzQXBwbGVNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzdHJVc2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFyck1hdGNoZXMiLCJiSXNBcHBsZU1vYmlsZSIsInRvZ2dsZURyb3Bkb3duIiwiZSIsIl9kIiwidGFyZ2V0IiwiY2xvc2VzdCIsIl9tIiwic2V0VGltZW91dCIsInNob3VsZE9wZW4iLCJ0eXBlIiwiaXMiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsInBvc3RGaWx0ZXIiLCJsZW5ndGgiLCJjYW5CZUxvYWRlZCIsImN1cnJlbnRfcGFnZSIsImJvdHRvbU9mZnNldCIsIndpbmRvdyIsInNjcm9sbFRvcCIsImhlaWdodCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImFjdGlvbiIsImNhdGVnb3J5IiwicGFnZSIsImJlZm9yZVNlbmQiLCJ4aHIiLCJhZnRlciIsInN1Y2Nlc3MiLCJyZXMiLCJzaWJsaW5ncyIsInByb3AiLCJodG1sIiwidmlkZW9GaXhlcyIsInJlcGxhY2UiLCJjYXJvdXNlbHMiLCJ0ZXN0aW1vbmlhbHMiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJhdXRvcGxheSIsImluZmluaXRlIiwiYXBwZW5kQXJyb3dzIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFD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a0JBQVU7QUFDVk8sdUJBQWU7QUFDZmlCLHFCQUFhO0FBQ2JFLGlCQUFTO0FBQ1QyQyxrQkFBVTtBQUNWRSxpQkFBUztBQUNUeEIsa0JBQVU7QUFDYjtBQVpFLEtBQVA7QUFnQkgsR0E3YndCLEVBQXpCOztBQStiQTVFLG9CQUFrQixDQUFDNEcsSUFBbkI7QUFFSCxDQW5jRCxFOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9hc3NldHMvZGlzdC9qcy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIElTX3RoZW1lX2ZyYW1ld29yayA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBvcmlnaW5hbEpzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gTG9jYXRpb24gLnNxdWFyZXMtZ3JpZCBmaXggcmVtb3ZpbmcgPGJyPiB0YWdzXHJcbiAgICAgICAgICAgICQoJy5zcXVhcmVzLWdyaWQnKS5maW5kKCc+IGJyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpKSAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJywgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICB9KS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZURhdGEoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9Ta2lwIExpbmtcclxuICAgICAgICAgICAgdmFyIHNraXBMaW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c2luKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwic3RhdGljXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c291dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vRnVsbCBTY3JlZW4gTWVudVxyXG4gICAgICAgICAgICAkKFwiLm5hdmJhci10b2dnbGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICQoJy5mdWxsLXNjcmVlbi1tZW51LWNsb3NlJykuZGVsYXkoNDAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xvc2UtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vTm8gY29tbWVudHNcclxuICAgICAgICAgICAgJChcIiNjb21tZW50Zm9ybVwiKS5hZGRDbGFzcyhcIm5vYXV0b1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vSG92ZXIgZm9yIERlc2t0b3AsIGNsaWNrIGZvciBtb2JpbGUgbmF2XHJcbiAgICAgICAgICAgIC8qaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlIGNsaWNrIHRhcCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdGFibGVPZkNvbnRlbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIFRvQyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld0xpbmUsIGVsLCB0aXRsZSwgbGluaztcclxuXHJcbiAgICAgICAgICAgICQoXCIudG9jLWhlYWRpbmdcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBlbC50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBsaW5rID0gXCIjXCIgKyBlbC5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3TGluZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCI8bGk+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPGEgY2xhc3M9J3RvYy1saW5rJyBocmVmPSdcIiArIGxpbmsgKyBcIic+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvYT5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2xpPlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIFRvQyArPSBuZXdMaW5lO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFRvQyk7XHJcblxyXG4gICAgICAgICAgICAvL1RvQyArPSBcIjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XHJcblxyXG4gICAgICAgICAgICAkKFwiLnRvYy10YWJsZSB1bFwiKS5wcmVwZW5kKFRvQyk7XHJcblxyXG4gICAgICAgICAgICAvLyQoJy50b2MtdGFibGUgdWwnKS5zbW9vdGhTY3JvbGwoKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIudG9jLWxpbms6ZW1wdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBzYW1lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcuZ3JpZC1hdHRvcm5leSAuYXR0b3JuZXktaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJy5ncmlkLXZpZGVvcyAudmlkZW8tZGVzY3JpcHRpb24nKS5tYXRjaEhlaWdodCgpO1xyXG4gICAgICAgICAgICAkKCcuZ3JpZC1yZXN1bHRzIC5pdGVtJykubWF0Y2hIZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkKCcuY29udGFjdC1zaWRlYmFyIC5jb2wtaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBzY3JvbGxUb1NlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl06bm90KC5uYXYtbGluayknLCB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgIGlnbm9yZTogJ1tkYXRhLXNjcm9sbC1pZ25vcmVdJywgLy8gU2VsZWN0b3IgZm9yIGxpbmtzIHRvIGlnbm9yZSAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbnVsbCwgLy8gU2VsZWN0b3IgZm9yIGZpeGVkIGhlYWRlcnMgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICB0b3BPbkVtcHR5SGFzaDogdHJ1ZSwgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgZm9yIGxpbmtzIHdpdGggaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCwgLy8gSW50ZWdlci4gQW1vdW50IG9mIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGl0IHNob3VsZCB0YWtlIHRvIHNjcm9sbCAxMDAwcHhcclxuICAgICAgICAgICAgICAgIHNwZWVkQXNEdXJhdGlvbjogZmFsc2UsIC8vIElmIHRydWUsIHVzZSBzcGVlZCBhcyB0aGUgdG90YWwgZHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWF4OiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb25NaW46IG51bGwsIC8vIEludGVnZXIuIFRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIHRoZSBzY3JvbGwgYW5pbWF0aW9uIHNob3VsZCB0YWtlXHJcbiAgICAgICAgICAgICAgICBjbGlwOiB0cnVlLCAvLyBJZiB0cnVlLCBhZGp1c3Qgc2Nyb2xsIGRpc3RhbmNlIHRvIHByZXZlbnQgYWJydXB0IHN0b3BzIG5lYXIgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVVJMOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvcHN0YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIEVhc2luZ1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLCAvLyBFYXNpbmcgcGF0dGVybiB0byB1c2VcclxuICAgICAgICAgICAgICAgIGN1c3RvbUVhc2luZzogZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbi4gQ3VzdG9tIGVhc2luZyBwYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBzZXQgdG8gYW55dGhpbmcgb3RoZXIgdGhhbiBudWxsLCB3aWxsIG92ZXJyaWRlIHRoZSBlYXNpbmcgb3B0aW9uIGFib3ZlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiA8eW91ciBmb3JtdWxhdGUgd2l0aCB0aW1lIGFzIGEgbXVsdGlwbGllcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhhbXBsZTogZWFzZUluT3V0IFF1YWRcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZSA8IDAuNSA/IDIgKiB0aW1lICogdGltZSA6IC0xICsgKDQgLSAyICogdGltZSkgKiB0aW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcuaW5wdXQtcmVxdWlyZWQnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdyZXF1aXJlZCcpID09ICdyZXF1aXJlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGhvdmVyTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyVXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJNYXRjaGVzID0gc3RyVXNlckFnZW50Lm1hdGNoKC8oaXBob25lfGlwb2R8aXBhZCkvKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyTWF0Y2hlcyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudClcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gLy8gRW5kIEZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZVxyXG5cclxuICAgICAgICAgICAgdmFyIGJJc0FwcGxlTW9iaWxlID0gZm5Jc0FwcGxlTW9iaWxlKCk7XHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiSXNBcHBsZU1vYmlsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2QgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbSA9ICQoJy5kcm9wZG93bi1tZW51JywgX2QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkT3BlbiA9IGUudHlwZSAhPT0gJ2NsaWNrJyAmJiBfZC5pcygnOmhvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX20udG9nZ2xlQ2xhc3MoJ3Nob3cnLCBzaG91bGRPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJywgX2QpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBzaG91bGRPcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnID8gMTUwIDogMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlJywgJy5kcm9wZG93bicsIHRvZ2dsZURyb3Bkb3duKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUgYScsIHRvZ2dsZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI25hdi1tb2JpbGUgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcG9zdEZpbHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBJbmZpbml0ZSBTY3JvbGxpbmdcclxuICAgICAgICAgICAgaWYgKCAkKCBcIiNibG9nXCIgKS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FuQmVMb2FkZWQgPSB0cnVlLCAvLyB0aGlzIHBhcmFtIGFsbG93cyB0byBpbml0aWF0ZSB0aGUgQUpBWCBjYWxsIG9ubHkgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2UgPSAxLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tT2Zmc2V0ID0gMjAwMDsgLy8gdGhlIGRpc3RhbmNlIChpbiBweCkgZnJvbSB0aGUgcGFnZSBib3R0b20gd2hlbiB5b3Ugd2FudCB0byBsb2FkIG1vcmUgcG9zdHNcclxuICAgICBcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gKCAkKGRvY3VtZW50KS5oZWlnaHQoKSAtIGJvdHRvbU9mZnNldCApICYmIGNhbkJlTG9hZGVkID09IHRydWUgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdmaWx0ZXJfcG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAkKFwiI2NhdGVnb3J5LWluZm9cIikuYXR0cihcImRhdGEtY2F0ZWdvcnlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IGN1cnJlbnRfcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCB4aHIgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5CZUxvYWRlZCA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmZpbmQoJ2FydGljbGU6bGFzdC1vZi10eXBlJykuYWZ0ZXIoIFwiPGRpdiBjbGFzcz0nbG9hZGVyJz48L2Rpdj5cIiApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcmVzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmZpbmQoJy5sb2FkZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmlubmVyLWNvbnRlbnQnKS5maW5kKCdhcnRpY2xlOmxhc3Qtb2YtdHlwZScpLmFmdGVyKCByZXMgKTsgLy8gd2hlcmUgdG8gaW5zZXJ0IHBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlTG9hZGVkID0gdHJ1ZTsgLy8gdGhlIGFqYXggaXMgY29tcGxldGVkLCBub3cgd2UgY2FuIHJ1biBpdCBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2UgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKFwiLmNhdC1saXN0X19pdGVtIGlucHV0W3R5cGU9J2NoZWNrYm94J11cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ2lucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBcImFsbFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjY2F0ZWdvcnktaW5mb1wiKS5hdHRyKFwiZGF0YS1jYXRlZ29yeVwiLCBjYXRlZ29yeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3dwLWFkbWluL2FkbWluLWFqYXgucGhwJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2ZpbHRlcl9wb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmlubmVyLWNvbnRlbnRcIikuaHRtbChcIjxkaXYgY2xhc3M9J2xvYWRlcic+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmh0bWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmlkZW9GaXhlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY3dfdmlkZW9fc2luZ2xlXCIpLmF0dHIoXCJzcmNcIiwgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwicmVsPVwiLCBcInJlbD0wXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjYXJvdXNlbHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvKnZhciBhd2FyZHMgPSAkKFwiLmF3YXJkcy13cmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgYXdhcmRzLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtYXdhcmRzJyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuaXRlbScpLm1hdGNoSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICQoJy5hd2FyZHMtcGFydCAuc2FtZUhlaWdodCcpLm1hdGNoSGVpZ2h0KCk7Ki9cclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0aW1vbmlhbHMgPSAkKCcudGVzdGltb25pYWxzLXNlY3Rpb24tc2xpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXN0aW1vbmlhbHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXRlc3QnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qdmFyIHNpZGViYXJfcmVzdWx0cyA9ICQoJy5yZXN1bHRzLXNsaWRlcl9fc2lkZWJhciAuZ3JpZC1yZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICBzaWRlYmFyX3Jlc3VsdHMuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJy5jdXN0b20tbmF2LXJlc3VsdHMnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweClcIiwge1xyXG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAkKFwiLmdyaWQtcmVzdWx0c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAnLmN1c3RvbS1uYXYtcmVzdWx0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRlb3MgPSAkKFwiLmdyaWQtdmlkZW9zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvcy5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTsgKi9cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSnMoKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlT2ZDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgc2FtZUhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBob3Zlck1lbnUoKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvRml4ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VscygpO1xyXG4gICAgICAgICAgICAgICAgcG9zdEZpbHRlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIElTX3RoZW1lX2ZyYW1ld29yay5pbml0KCk7XHJcblxyXG59KTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=