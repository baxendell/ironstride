<?php get_template_part( 'partials/awards' ); ?>

<div class="footer">

    <div class="footer-top">

        <div class="container">

            <div class="row">

                <div class="col-md-7 col-lg-8" itemscope itemtype="http://schema.org/Organization">

                    <div class="footer-logo-wrap">
                        <a href="/" itemprop="url">
                            <img itemprop="logo" class="logo img-fluid" src="<?php bloginfo( 'template_url' ) ?>/assets/images/logo.svg" alt="Client Name">
                        </a>
                    </div>

                </div>

                <div class="col-md-5 col-lg-4">

                    <ul class="social-icon-list">

						<?php if ( get_field( 'linkedin_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'linkedin_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-linkedin.svg' ); ?>
                                </a>
                            </li>
						<?php endif; ?>

						<?php if ( get_field( 'youtube_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'youtube_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-youtube.svg' ); ?>
                                </a>
                            </li>
						<?php endif; ?>

						<?php if ( get_field( 'facebook_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'facebook_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-facebook.svg' ); ?>
                                </a>
                            </li>
						<?php endif; ?>

						<?php if ( get_field( 'twitter_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'twitter_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-twitter.svg' ); ?>
                                </a>
                            </li>
						<?php endif ?>

						<?php if ( get_field( 'yelp_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'yelp_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-yelp.svg' ); ?>
                                </a>
                            </li>
						<?php endif ?>

						<?php if ( get_field( 'instagram_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'instagram_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-instagram.svg' ); ?>
                                </a>
                            </li>
						<?php endif ?>

                    </ul>

                </div>

            </div>


        </div>

    </div>

    <div class="footer-bottom">

        <div class="container">

            <div class="row">

                <div class="col-12">

                    <div class="footer-nav-wrap">
                        <nav class="col-12 text-center">
							<?php wp_nav_menu( array(
								'theme_location' => 'footer-menu',
								'menu_class'     => 'footer-menu',
								'walker'         => new Walker_Nav_Primary(),
							) ) ?>
                        </nav>
                    </div>

                </div>

                <div class="col-12">
                    <p class="copyright">&copy; <?php echo date( 'Y' ); ?> Client Name - Law Offices. All Rights Reserved | <a class="built-by" href="https://www.consultwebs.com/" target="_blank" rel="nofollow">Site by Consultwebs</a></p>
                </div>

            </div>

        </div>

        <a href="#top-page" class="btn-back"><span>Back To Top</span></a>


    </div>

</div>

<?php wp_footer(); ?>

<?php
$subdomain = "staging.testdev.cwdevelop.com";
if ( $subdomain == $_SERVER['HTTP_HOST'] ) { ?>
    <script src="http://localhost:35729/livereload.js"></script>
<?php } ?>

<!-- Hours Modal -->
<div class="modal fade" id="hoursModal" tabindex="-1" role="dialog" aria-labelledby="hoursModal" aria-hidden="true">

    <div class="modal-dialog" role="document">

        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Office Hours</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

                <div class="opening-hours" itemscope="" itemtype="http://schema.org/LegalService">

                    <table>
                        <tbody>
						<?php if ( get_field( 'monday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Monday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'monday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'tuesday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Tuesday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'tuesday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'wednesday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Wednesday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'wednesday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'thursday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Thursday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'thursday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'friday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Friday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'friday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'saturday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Saturday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'saturday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

						<?php if ( get_field( 'sunday_hours' ) ): ?>
                            <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                                <td class="day">Sunday</td>
                                <td class="time"><span itemprop="openingHours"><?php the_field( 'sunday_hours' ); ?></span></td>
                            </tr>
						<?php endif; ?>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </div>

</div>

</div><!--end of .main-wrapper-->

</body>

</html>