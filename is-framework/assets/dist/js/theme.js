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
      var testimonials = $('.testimonials-section-slider');
      testimonials.slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: false,
        appendArrows: '.custom-nav-test'
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
        postFilter();
      }
    };
  }();

  IS_theme_framework.init();
  AOS.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzE4ZWUiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJJU190aGVtZV9mcmFtZXdvcmsiLCJvcmlnaW5hbEpzIiwiZmluZCIsInJlbW92ZSIsIm9uIiwiYXR0ciIsImRhdGEiLCJyZW1vdmVBdHRyIiwicmVtb3ZlRGF0YSIsInNraXBMaW5rIiwiZm9jdXNpbiIsImNzcyIsImZvY3Vzb3V0IiwiYWRkQ2xhc3MiLCJkZWxheSIsInF1ZXVlIiwiZGVxdWV1ZSIsInJlbW92ZUNsYXNzIiwidGFibGVPZkNvbnRlbnRzIiwiVG9DIiwibmV3TGluZSIsImVsIiwidGl0bGUiLCJsaW5rIiwiZWFjaCIsInRleHQiLCJwcmVwZW5kIiwicGFyZW50IiwiZGlzcGxheSIsInNhbWVIZWlnaHQiLCJtYXRjaEhlaWdodCIsImVucXVpcmUiLCJyZWdpc3RlciIsInNldHVwIiwibWF0Y2giLCJ1bm1hdGNoIiwic2Nyb2xsVG9TZWN0aW9uIiwic2Nyb2xsIiwiU21vb3RoU2Nyb2xsIiwiaWdub3JlIiwiaGVhZGVyIiwidG9wT25FbXB0eUhhc2giLCJzcGVlZCIsInNwZWVkQXNEdXJhdGlvbiIsImR1cmF0aW9uTWF4IiwiZHVyYXRpb25NaW4iLCJjbGlwIiwib2Zmc2V0IiwidXBkYXRlVVJMIiwicG9wc3RhdGUiLCJlYXNpbmciLCJjdXN0b21FYXNpbmciLCJ0aW1lIiwicmVxdWlyZWRJbnB1dCIsInZhbCIsImhvdmVyTWVudSIsImZuSXNBcHBsZU1vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN0clVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYXJyTWF0Y2hlcyIsImJJc0FwcGxlTW9iaWxlIiwidG9nZ2xlRHJvcGRvd24iLCJlIiwiX2QiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiX20iLCJzZXRUaW1lb3V0Iiwic2hvdWxkT3BlbiIsInR5cGUiLCJpcyIsInRvZ2dsZUNsYXNzIiwibmV4dCIsInNsaWRlVG9nZ2xlIiwicG9zdEZpbHRlciIsImxlbmd0aCIsImN1cnJlbnRfcGFnZSIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImFjdGlvbiIsImNhdGVnb3J5IiwicGFnZSIsImJlZm9yZVNlbmQiLCJ4aHIiLCJjYW5CZUxvYWRlZCIsImFmdGVyIiwic3VjY2VzcyIsInJlcyIsImZhZGVUbyIsInNpYmxpbmdzIiwicHJvcCIsImh0bWwiLCJ2aWRlb0ZpeGVzIiwicmVwbGFjZSIsImNhcm91c2VscyIsInRlc3RpbW9uaWFscyIsInNsaWNrIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5IiwiaW5maW5pdGUiLCJhcHBlbmRBcnJvd3MiLCJpbml0IiwiQU9TIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7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QyxLQUFHLENBQUNELElBQUo7QUFDSCxDQS9VRCxFOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9hc3NldHMvZGlzdC9qcy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgSVNfdGhlbWVfZnJhbWV3b3JrID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgb3JpZ2luYWxKcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gTG9jYXRpb24gLnNxdWFyZXMtZ3JpZCBmaXggcmVtb3ZpbmcgPGJyPiB0YWdzXG4gICAgICAgICAgICAkKCcuc3F1YXJlcy1ncmlkJykuZmluZCgnPiBicicpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkKCdpbnB1dCwgdGV4dGFyZWEnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkgJCh0aGlzKS5kYXRhKCdwbGFjZWhvbGRlcicsICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSkucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH0pLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCAkKHRoaXMpLmRhdGEoJ3BsYWNlaG9sZGVyJykpLnJlbW92ZURhdGEoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9Ta2lwIExpbmtcbiAgICAgICAgICAgIHZhciBza2lwTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNraXBsaW5rXCIpLmZvY3VzaW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIsIFwic3RhdGljXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChcIi5za2lwbGlua1wiKS5mb2N1c291dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdmJhci10b2dnbGVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5hZGRDbGFzcyhcIm5hdi1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2UnKS5kZWxheSg0MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2LWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9ObyBjb21tZW50c1xuICAgICAgICAgICAgJChcIiNjb21tZW50Zm9ybVwiKS5hZGRDbGFzcyhcIm5vYXV0b1wiKTtcblxuICAgICAgICAgICAgLy9Ib3ZlciBmb3IgRGVza3RvcCwgY2xpY2sgZm9yIG1vYmlsZSBuYXZcbiAgICAgICAgICAgIC8qaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSBjbGljayB0YXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9Ki9cblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0YWJsZU9mQ29udGVudHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBUb0MgPSAnJztcblxuICAgICAgICAgICAgdmFyIG5ld0xpbmUsIGVsLCB0aXRsZSwgbGluaztcblxuICAgICAgICAgICAgJChcIi50b2MtaGVhZGluZ1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGVsLnRleHQoKTtcbiAgICAgICAgICAgICAgICBsaW5rID0gXCIjXCIgKyBlbC5hdHRyKFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICBuZXdMaW5lID1cbiAgICAgICAgICAgICAgICAgICAgXCI8bGk+XCIgK1xuICAgICAgICAgICAgICAgICAgICBcIjxhIGNsYXNzPSd0b2MtbGluaycgaHJlZj0nXCIgKyBsaW5rICsgXCInPlwiICtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICBcIjwvYT5cIiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9saT5cIjtcblxuICAgICAgICAgICAgICAgIFRvQyArPSBuZXdMaW5lO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhUb0MpO1xuXG4gICAgICAgICAgICAvL1RvQyArPSBcIjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+XCI7XG5cbiAgICAgICAgICAgICQoXCIudG9jLXRhYmxlIHVsXCIpLnByZXBlbmQoVG9DKTtcblxuICAgICAgICAgICAgLy8kKCcudG9jLXRhYmxlIHVsJykuc21vb3RoU2Nyb2xsKCk7XG5cbiAgICAgICAgICAgICQoXCIudG9jLWxpbms6ZW1wdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNhbWVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuZ3JpZC1hdHRvcm5leSAuYXR0b3JuZXktaXRlbScpLm1hdGNoSGVpZ2h0KCk7XG4gICAgICAgICAgICAkKCcuZ3JpZC12aWRlb3MgLnZpZGVvLWRlc2NyaXB0aW9uJykubWF0Y2hIZWlnaHQoKTtcbiAgICAgICAgICAgICQoJy5ncmlkLXJlc3VsdHMgLml0ZW0nKS5tYXRjaEhlaWdodCgpO1xuXG5cbiAgICAgICAgICAgICQoJy5jb250YWN0LXNpZGViYXIgLmNvbC1pdGVtJykubWF0Y2hIZWlnaHQoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzY3JvbGxUb1NlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXTpub3QoLm5hdi1saW5rKScsIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RvcnNcbiAgICAgICAgICAgICAgICBpZ25vcmU6ICdbZGF0YS1zY3JvbGwtaWdub3JlXScsIC8vIFNlbGVjdG9yIGZvciBsaW5rcyB0byBpZ25vcmUgKG11c3QgYmUgYSB2YWxpZCBDU1Mgc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBudWxsLCAvLyBTZWxlY3RvciBmb3IgZml4ZWQgaGVhZGVycyAobXVzdCBiZSBhIHZhbGlkIENTUyBzZWxlY3RvcilcbiAgICAgICAgICAgICAgICB0b3BPbkVtcHR5SGFzaDogdHJ1ZSwgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UgZm9yIGxpbmtzIHdpdGggaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsIC8vIEludGVnZXIuIEFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyBpdCBzaG91bGQgdGFrZSB0byBzY3JvbGwgMTAwMHB4XG4gICAgICAgICAgICAgICAgc3BlZWRBc0R1cmF0aW9uOiBmYWxzZSwgLy8gSWYgdHJ1ZSwgdXNlIHNwZWVkIGFzIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWF4OiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uTWluOiBudWxsLCAvLyBJbnRlZ2VyLiBUaGUgbWluaW11bSBhbW91bnQgb2YgdGltZSB0aGUgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgdGFrZVxuICAgICAgICAgICAgICAgIGNsaXA6IHRydWUsIC8vIElmIHRydWUsIGFkanVzdCBzY3JvbGwgZGlzdGFuY2UgdG8gcHJldmVudCBhYnJ1cHQgc3RvcHMgbmVhciB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcG9wc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIEVhc2luZ1xuICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJywgLy8gRWFzaW5nIHBhdHRlcm4gdG8gdXNlXG4gICAgICAgICAgICAgICAgY3VzdG9tRWFzaW5nOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbi4gQ3VzdG9tIGVhc2luZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gbnVsbCwgd2lsbCBvdmVycmlkZSB0aGUgZWFzaW5nIG9wdGlvbiBhYm92ZVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiA8eW91ciBmb3JtdWxhdGUgd2l0aCB0aW1lIGFzIGEgbXVsdGlwbGllcj5cblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBlYXNlSW5PdXQgUXVhZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZSA8IDAuNSA/IDIgKiB0aW1lICogdGltZSA6IC0xICsgKDQgLSAyICogdGltZSkgKiB0aW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICQoJy5pbnB1dC1yZXF1aXJlZCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5kYXRhKCdyZXF1aXJlZCcpID09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmlucHV0LXJlcXVpcmVkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBob3Zlck1lbnUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJNYXRjaGVzID0gc3RyVXNlckFnZW50Lm1hdGNoKC8oaXBob25lfGlwb2R8aXBhZCkvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gLy8gRW5kIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudClcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gRW5kIEZ1bmN0aW9uIGZuSXNBcHBsZU1vYmlsZVxuXG4gICAgICAgICAgICB2YXIgYklzQXBwbGVNb2JpbGUgPSBmbklzQXBwbGVNb2JpbGUoKTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYklzQXBwbGVNb2JpbGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9kID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tID0gJCgnLmRyb3Bkb3duLW1lbnUnLCBfZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZE9wZW4gPSBlLnR5cGUgIT09ICdjbGljaycgJiYgX2QuaXMoJzpob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbS50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC50b2dnbGVDbGFzcygnc2hvdycsIHNob3VsZE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIF9kKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgc2hvdWxkT3Blbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS50eXBlID09PSAnbW91c2VsZWF2ZScgPyAxNTAgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCAnLmRyb3Bkb3duJywgdG9nZ2xlRHJvcGRvd24pLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudSBhJywgdG9nZ2xlRHJvcGRvd24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXCIsIHtcbiAgICAgICAgICAgICAgICBzZXR1cDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGluIGNvbnRlbnQgdmlhIEFKQVggKGp1c3QgdGhlIG9uY2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQoJyNuYXYtbW9iaWxlIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwb3N0RmlsdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBJbmZpbml0ZSBTY3JvbGxpbmdcbiAgICAgICAgICAgIGlmICggJCggXCIjYmxvZ1wiICkubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50X3BhZ2UgPSAxO1xuXG4gICAgICAgICAgICAgICAgJCgnLmxvYWQtbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvd3AtYWRtaW4vYWRtaW4tYWpheC5waHAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZmlsdGVyX3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJChcIiNjYXRlZ29yeS1pbmZvXCIpLmF0dHIoXCJkYXRhLWNhdGVnb3J5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBjdXJyZW50X3BhZ2UgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oIHhociApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJlTG9hZGVkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5pbm5lci1jb250ZW50JykuZmluZCgnYXJ0aWNsZTpsYXN0LW9mLXR5cGUnKS5hZnRlciggXCI8ZGl2IGNsYXNzPSdsb2FkZXInPjwvZGl2PlwiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHJlcyA9PSBcIlRoZXJlIGFyZSBubyBtb3JlIHBvc3RzIHRvIHNob3cuXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIubG9hZC1tb3JlXCIpLmZhZGVUbyggMTAwLCAwICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IFwiPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXIgbm8tcG9zdHMnPlwiKyByZXMgK1wiPC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5pbm5lci1jb250ZW50JykuZmluZCgnLmxvYWRlcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmZpbmQoJ2FydGljbGU6bGFzdC1vZi10eXBlJykuYWZ0ZXIoIHJlcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChcIi5jYXQtbGlzdF9faXRlbSBpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnaW5wdXQ6Y2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfcGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgJChcIi5sb2FkLW1vcmVcIikuZmFkZVRvKCA0MDAsIDEgKTtcblxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykucHJvcChcImNoZWNrZWRcIikgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQodGhpcykucHJvcChcImNoZWNrZWRcIikgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IFwiYWxsXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJChcIiNjYXRlZ29yeS1pbmZvXCIpLmF0dHIoXCJkYXRhLWNhdGVnb3J5XCIsIGNhdGVnb3J5KTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3dwLWFkbWluL2FkbWluLWFqYXgucGhwJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2ZpbHRlcl9wb3N0JyxcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZTogMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmlubmVyLWNvbnRlbnRcIikuaHRtbChcIjxkaXYgY2xhc3M9J2xvYWRlcic+PC9kaXY+XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKCcuaW5uZXItY29udGVudCcpLmh0bWwocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdmlkZW9GaXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJChcIi5jd192aWRlb19zaW5nbGVcIikuYXR0cihcInNyY1wiLCAkKFwiLmN3X3ZpZGVvX3NpbmdsZVwiKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJyZWw9XCIsIFwicmVsPTBcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYXJvdXNlbHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZXN0aW1vbmlhbHMgPSAkKCcudGVzdGltb25pYWxzLXNlY3Rpb24tc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIHRlc3RpbW9uaWFscy5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICcuY3VzdG9tLW5hdi10ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsSnMoKTtcbiAgICAgICAgICAgICAgICB0YWJsZU9mQ29udGVudHMoKTtcbiAgICAgICAgICAgICAgICBzYW1lSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGhvdmVyTWVudSgpO1xuICAgICAgICAgICAgICAgIHZpZGVvRml4ZXMoKTtcbiAgICAgICAgICAgICAgICBjYXJvdXNlbHMoKTtcbiAgICAgICAgICAgICAgICBwb3N0RmlsdGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIElTX3RoZW1lX2ZyYW1ld29yay5pbml0KCk7XG4gICAgQU9TLmluaXQoKTtcbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==