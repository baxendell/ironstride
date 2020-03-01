<?php
/**
 * Template Name: Location
 */
get_header();
?>

<section class="location-intro">

    <div class="container">

        <div class="row">

            <div class="col-12 col-lg-5 col-left">

                <div class="inner-col">

                    <?php
                    $post_object = get_field( 'location_testimonial' );
                    if ( $post_object ): ?>

                        <?php
                        // override $post
                        $post = $post_object;
                        setup_postdata( $post );
                        ?>

                        <div class="testimonial-wrap">
                            <div class="sidebar-title">What Our Clients Say</div>
                            <span class="stars"><img class="bg-stars img-fluid" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/bg-stars.png" alt="stars"></span>
                            <blockquote>
                                <q><?php the_content(); ?></q>
                                <cite> - <?php the_field( 'client_name' ); ?></cite>
                            </blockquote>
                        </div>

                        <?php wp_reset_postdata(); ?>

                    <?php endif; ?>

                    <div class="location-details" itemscope itemtype="http://schema.org/Organization">

                        <div class="sidebar-title">Visit Our <?php the_title(); ?></div>

                        <div class="inner-col-wrap" itemtype="http://schema.org/LegalService">

                            <div class="inner-col-left">
                                <div id="map_temp" style="background: url('<?php the_field( 'location_map' ); ?>') no-repeat scroll center center transparent;"></div>
                            </div>

                            <div class="inner-col-right address" itemscope="" itemtype="http://schema.org/PostalAddress">

                                <div class="client-name" itemprop="name"><?php the_field( 'location_firm_name' ); ?></div>

                                <div class="address">
                                    <p itemprop="streetAddress"><?php the_field( 'location_address_1' ); ?></p>
                                    <p itemprop="streetAddress"><?php the_field( 'location_address_2' ); ?></p>
                                    <p><span itemprop="addressLocality"><?php the_field( 'city' ); ?></span>, <span itemprop="addressRegion"><?php the_field( 'state' ); ?></span> <span itemprop="postalCode"><?php the_field( 'zipcode' ); ?></span>
                                    </p>
                                    <p class="phone" itemprop="telephone">Phone: <?php the_field( 'location_phone' ); ?></p>
                                </div>

                                <ul>
                                    <li class="location-direction"><a href="<?php the_field( 'location_direction' ); ?>" target="_blank">Directions</a></li>
                                    <li><a class="modal-hours-btn" href="javascript:void(0);" data-toggle="modal" data-target="#hoursModal">Hours</a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="col-12 col-lg-7 col-right entry-content">

                <h1><?php h1_title(); ?></h1>

                <?php if ( have_posts() ) : ?>
                    <?php while ( have_posts() ) : the_post() ?>
                        <?php the_content() ?>
                    <?php endwhile ?>
                <?php endif ?>

            </div>

        </div>

    </div>

</section>

<?php get_template_part( 'partials/awards' ); ?>

<section class="location-contact">

    <div class="container">

        <div class="location-contact-wrap">

            <div class="location-contact-top">
                <h2>Contact Us Today</h2>
                <p><?php the_field( 'location_contact_description' ); ?></p>
            </div>

            <div class="location-contact-bottom">
                <form action="#" method="post">
                    <input type="text" class="input-text form-input" id="name" placeholder="Name" name="name">
                    <input type="text" class="input-text form-input" id="phone_email" placeholder="Email | Phone" name="phone_email">
                    <button class="btn btn-submit" type="submit"><span>Send</span></button>
                </form>
            </div>

        </div>

    </div>

</section>

<section class="location-second-main-content">

    <div class="container">

        <div class="row">

            <article class="col-lg-8 pr-lg-5 coll-full entry-content">
                <?php the_field( 'second_content' ); ?>
            </article>

            <aside class="col-lg-4">

                <div id="primary" class="widget-area" role="complementary">

                    <ul class="sidebar-widgets">

                        <?php do_action( 'cws_related_info' ) ?>

                        <?php if ( get_field( 'useful_information' ) ): ?>
                            <li class="sidebar-item">
                                <?php do_action( 'cws_custom_sidebar' ) ?>
                            </li>
                        <?php endif; ?>

                    </ul>

                </div>

            </aside>

        </div>

        <div class="row">

            <div class="col-12">
                <div class="social-contact-wrap">

                    <a href="<?php echo get_field( 'second_content_link' ) ?>" class="btn btn-std">Contact Us</a>

                    <div class="social-icons-wrap">

                        <p>Connect With Us:</p>

                        <ul class="social-icon-list">

                            <?php if ( get_field( 'facebook_link', 'option' ) ): ?>
                                <li class="facebook-icon">
                                    <a href="<?php the_field( 'facebook_link', 'option' ) ?>" target="_blank">
                                        <?php cws_get_svg( 'social-icons/icon-facebook.svg' ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php if ( get_field( 'twitter_link', 'option' ) ): ?>
                                <li class="twitter-icon">
                                    <a href="<?php the_field( 'twitter_link', 'option' ) ?>" target="_blank">
                                        <?php cws_get_svg( 'social-icons/icon-twitter.svg' ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php if ( get_field( 'linkedin_link', 'option' ) ): ?>
                                <li class="linkedin-icon">
                                    <a href="<?php the_field( 'linkedin_link', 'option' ) ?>" target="_blank">
                                        <?php cws_get_svg( 'social-icons/icon-linkedin.svg' ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                        </ul>

                    </div>

                </div>
            </div>

        </div>

    </div>

</section>

<section class="location-practice-areas">

    <div class="container">

        <div class="text-center">
            <div class="heading"><?php the_field( 'practice_areas_location_title' ); ?></div>
            <p><?php the_field( 'practice_areas_location_description' ); ?></p>
        </div>

        <?php get_template_part('partials/legal-services') ?>

    </div>

</section>

<section class="location-third-main-content">

    <div class="container">

        <div class="row">

            <div class="col-lg-8 pr-lg-5 col-left entry-content">
                <?php the_field( 'third_content' ); ?>
            </div>

            <div class="col-lg-4 col-right sidebar">

                <div id="secondary" class="widget-area" role="complementary">

                    <ul class="sidebar-widgets">
                        <li class="sidebar-item">
                            <?php get_template_part( 'sidebars/parts/cta-sidebar' ) ?>
                        </li>
                        <li class="sidebar-item">
                            <?php get_template_part( 'sidebars/parts/meet-team' ) ?>
                        </li>
                        <li class="sidebar-item">
                            <?php get_template_part( 'sidebars/parts/results' ) ?>
                        </li>                        

                    </ul>

                </div>
            </div>

        </div>

    </div>

</section>

<section class="review-part">

    <div class="container">

        <h5>Check Out Our Reviews:</h5>

        <?php
        if ( have_rows( 'review_logos' ) ):
            while ( have_rows( 'review_logos' ) ) : the_row(); ?>

                <?php
                $link = get_sub_field( 'link' );
                ?>

                <div class="item">
                    <a href="<?php echo $link['url']; ?>" target="_blank">
                        <img class="img-fluid" src="<?php the_sub_field( 'image' ); ?>" alt="logo">
                    </a>
                </div>

            <?php endwhile;
        endif;
        ?>

    </div>

</section>

<?php get_footer(); ?>