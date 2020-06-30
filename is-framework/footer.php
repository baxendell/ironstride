<div class="footer">

    <?php if(is_front_page()): ?>

    <div class="footer-top alt-grey">

        <div class="container">

            <div class="row justify-content-center">

                <div class="col-md-9">

                    <?php get_template_part( 'partials/testimonial-part' ); ?>  

                </div>

            </div>

        </div>

    </div>

    <?php endif ?>

    <div class="footer-blue">

        <div class="container">

            <div class="row" itemscope itemtype="http://schema.org/Organization">

                <div class="col-md-6">

                    <div class="footer-logo-wrap">
                        <a href="/" itemprop="url">
                            <img itemprop="logo" class="logo img-fluid" src="<?php bloginfo( 'template_url' ) ?>/assets/images/logo.svg" alt="Client Name">
                        </a>
                    </div>

                </div>

                <div class="offset-md-1 col-md-5">

                    <nav class="footer-nav-wrap">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'footer-menu',
                            'menu_class'     => 'footer-menu',
                            'walker'         => new Walker_Nav_Primary(),
                        ) ) ?>
                    </nav>

                    <address>

                        <!--address--><br/>
                        <!--phone--> <a class="#"><!--email--></a>

                    </address>

                </div>

            </div>

        </div>

    </div>

    <div class="footer-bottom">

        <div class="container">

            <div class="row">

                <div class="col-md-5 col-lg-3">

                    <p>&copy; <?php echo date( 'Y' ); ?> IRONSTRIDE Marketing. All Rights Reserved.</p>

                </div>

                <div class="align-content-end col-lg-3 col-md-4">

                    <ul class="social-icon-list">

                        <?php if ( get_field( 'facebook_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'facebook_link', 'option' ) ?>" target="_blank">
                                    <?php cws_get_svg( 'social-icons/icon-facebook.svg' ); ?>
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if ( get_field( 'instagram_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'instagram_link', 'option' ) ?>" target="_blank">
                                    <?php cws_get_svg( 'social-icons/icon-instagram.svg' ); ?>
                                </a>
                            </li>
                        <?php endif ?>

                        <?php if ( get_field( 'twitter_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'twitter_link', 'option' ) ?>" target="_blank">
                                    <?php cws_get_svg( 'social-icons/icon-twitter.svg' ); ?>
                                </a>
                            </li>
                        <?php endif ?>

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

						<?php if ( get_field( 'yelp_link', 'option' ) ): ?>
                            <li>
                                <a href="<?php the_field( 'yelp_link', 'option' ) ?>" target="_blank">
									<?php cws_get_svg( 'social-icons/icon-yelp.svg' ); ?>
                                </a>
                            </li>
						<?php endif ?>

                    </ul>

                </div>

            </div>


        </div>

    </div>

</div>

<?php wp_footer(); ?>

</div><!--end of .main-wrapper-->

</body>

</html>