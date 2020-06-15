jQuery(document).ready(function ($) {

    var CW_theme_framework = (function () {

        var originalJs = function () {

            // Location .squares-grid fix removing <br> tags
            $('.squares-grid').find('> br').remove();

            $('input, textarea').on('focus', function () {
                if ($(this).attr('placeholder')) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
            }).on('blur', function () {
                if ($(this).data('placeholder')) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
            });

            //Skip Link
            var skipLink = function () {
                $(".skiplink").focusin(function () {
                    $(this).css("position", "static");
                });

                $(".skiplink").focusout(function () {
                    $(this).css("position", "absolute");
                });
            }

            //No comments
            $("#commentform").addClass("noauto");

            //Hover for Desktop, click for mobile nav
            /*if ($(window).width() > 767) {
                $('.dropdown').on('mouseenter mouseleave click tap', function() {
                    $(this).toggleClass("open");
                });
            }*/

        };

        var tableOfContents = function () {

            var ToC = '';

            var newLine, el, title, link;

            $(".toc-heading").each(function () {

                el = $(this);
                title = el.text();
                link = "#" + el.attr("id");

                newLine =
                    "<li>" +
                    "<a class='toc-link' href='" + link + "'>" +
                    title +
                    "</a>" +
                    "</li>";

                ToC += newLine;

            });

            //console.log(ToC);

            //ToC += "</ul></div></div></div>";

            $(".toc-table ul").prepend(ToC);

            //$('.toc-table ul').smoothScroll();

            $(".toc-link:empty").each(function () {
                $(this).parent().css({
                    display: 'none'
                });
            });

        };

        var sameHeight = function () {
            $('.grid-attorney .attorney-item').matchHeight();
            $('.grid-videos .video-description').matchHeight();
            $('.grid-results .item').matchHeight();


            $('.contact-sidebar .col-item').matchHeight();

            enquire.register("screen and (min-width: 992px) and (max-width: 1199px)", {
                setup: function () {
                    // Load in content via AJAX (just the once)
                },
                match: function () {


                },
                unmatch: function () {

                }
            });
        };

        var scrollToSection = function () {

            var scroll = new SmoothScroll('a[href*="#"]', {
                // Selectors
                ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
                header: null, // Selector for fixed headers (must be a valid CSS selector)
                topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
                speed: 500, // Integer. Amount of time in milliseconds it should take to scroll 1000px
                speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
                durationMax: null, // Integer. The maximum amount of time the scroll animation should take
                durationMin: null, // Integer. The minimum amount of time the scroll animation should take
                clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
                offset: 0,
                updateURL: false,
                popstate: false,
                // Easing
                easing: 'easeInOutCubic', // Easing pattern to use
                customEasing: function (time) {
                    // Function. Custom easing pattern
                    // If this is set to anything other than null, will override the easing option above

                    // return <your formulate with time as a multiplier>

                    // Example: easeInOut Quad
                    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
                }
            });

        };

        var requiredInput = function () {

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

        var hoverMenu = function () {

            function fnIsAppleMobile() {
                if (navigator && navigator.userAgent && navigator.userAgent != null) {
                    var strUserAgent = navigator.userAgent.toLowerCase();
                    var arrMatches = strUserAgent.match(/(iphone|ipod|ipad)/);
                    if (arrMatches != null)
                        return true;
                } // End if (navigator && navigator.userAgent)

                return false;
            } // End Function fnIsAppleMobile

            var bIsAppleMobile = fnIsAppleMobile();

            enquire.register("screen and (min-width: 768px)", {
                setup: function () {
                    // Load in content via AJAX (just the once)
                },
                match: function () {

                    if (!bIsAppleMobile) {

                        function toggleDropdown(e) {
                            const _d = $(e.target).closest('.dropdown'),
                                _m = $('.dropdown-menu', _d);
                            setTimeout(function () {
                                const shouldOpen = e.type !== 'click' && _d.is(':hover');
                                _m.toggleClass('show', shouldOpen);
                                _d.toggleClass('show', shouldOpen);
                                $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
                            }, e.type === 'mouseleave' ? 150 : 0);
                        }

                        $('body').on('mouseenter mouseleave', '.dropdown', toggleDropdown).on('click', '.dropdown-menu a', toggleDropdown);

                    }

                },
                unmatch: function () {

                }

            });

            enquire.register("screen and (max-width: 767px)", {
                setup: function () {
                    // Load in content via AJAX (just the once)
                },
                match: function () {

                    $('#nav-mobile .nav-link.dropdown-toggle').on('click', function () {
                        $(this).next().slideToggle();
                    });

                },
                unmatch: function () {

                }

            });

        };

        var videoFixes = function () {
            if ($(".cw_video_single").length > 0) {
                $(".cw_video_single").attr("src", $(".cw_video_single").attr("src").replace("rel=", "rel=0"));
            }
        };

        var carousels = function () {

            var awards = $(".awards-wrap");

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
            $('.awards-part .sameHeight').matchHeight();

            var testimonials = $('.testimonials-section-slider');

            testimonials.slick({
                dots: false,
                infinite: false,
                appendArrows: '.custom-nav-test',
            });

            var sidebar_results = $('.results-slider__sidebar .grid-results');

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

            });

        };

        return {

            init: function () {
                originalJs();
                tableOfContents();
                sameHeight();
                scrollToSection();
                requiredInput();
                hoverMenu();
                videoFixes();
                carousels();
            }

        }

    })();

    CW_theme_framework.init();

});