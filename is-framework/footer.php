<?php 
if(!is_front_page() && !is_page_template('page-home.php')) {
    get_template_part('partials/cta-bottom');
} ?>

<div class="footer">

    <?php if(is_front_page() || is_page_template('page-home.php')): ?>

    <div class="footer-top alt-grey">

        <div class="container">

            <div class="row justify-content-center">

                <div class="col-xl-9">

                    <?php get_template_part( 'partials/testimonial-part' ); ?>  

                </div>

            </div>

        </div>

    </div>

    <?php endif ?>

    <div class="footer-blue">

        <div class="container">

            <div class="row" itemscope itemtype="http://schema.org/Organization">

                <div class="col-xl-6 text-center">

                    <div class="footer-logo-wrap">
                        <a href="/" itemprop="url">
                            <img itemprop="logo" class="logo img-fluid" src="<?php bloginfo( 'template_url' ) ?>/assets/images/footer-logo.png" alt="Ironstride Marketing">
                        </a>
                    </div>

                </div>

                <div class="col-xl-6 text-center text-xl-right">

                    <nav class="footer-nav-wrap">
                        <?php wp_nav_menu( array(
                            'theme_location' => 'footer-menu',
                            'menu_class'     => 'footer-menu',
                            'walker'         => new Walker_Nav_Primary(),
                        ) ) ?>
                    </nav>

                    <address>

                        <?php 

                        $post_objects = get_field( 'location', 'option' );

                        if ( $post_objects ): ?>

                            <div class="wpseo-address">
                                    
                                <div class="wpseo-address__top">
                                        
                                    <span class="location-street"><?php echo get_field('location_address_1', $post_objects->ID); ?></span>  |  

                                    <span class="locality"> <?php echo get_field('location_city', $post_objects->ID); ?></span>, <span class="region"><?php echo get_field('location_state', $post_objects->ID); ?></span><span class="postal-code"><?php echo get_field('location_zipcode', $post_objects->ID); ?></span>
                                
                                </div>
                                
                                <div class="wpseo-address__bottom">   

                                    <span><a href="tel:<?php echo get_field('location_phone', $post_objects->ID); ?>"><?php echo get_field('location_phone', $post_objects->ID); ?></a></span><br/>

                                    <span><?php echo do_shortcode("[email]SUPPORT@IRONSTRIDEMARKETING.COM[/email]"); ?></span>

                                </div>

                            </div>

                            <?php wp_reset_postdata(); 

                        endif;?>

                    </address>

                </div>

            </div>

        </div>

    </div>

    <div class="footer-bottom">

        <div class="container">

            <div class="row">

                <div class="col-lg-4">

                    <p>&copy; <?php echo date( 'Y' ); ?> IRONSTRIDE Marketing. All Rights Reserved.</p>

                </div>

                <div class="col-lg-4 offset-lg-4">

                    <?php get_template_part('partials/social') ?>

                </div>

            </div>


        </div>

    </div>

</div>

<?php wp_footer(); ?>

</div><!--end of .main-wrapper-->

</body>

</html>