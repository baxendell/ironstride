<?php
/**
 * Attorney archive
 */
get_header();

$args = array(
	'post_type' => 'attorney',
    'posts_per_page' => -1
);

$attorney = new WP_Query( $args );
?>

    <section class="main-content">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">

					<?php if ( $attorney->have_posts() ) : $i = 0; ?>

                        <div class="grid grid-attorney">

							<?php while ( $attorney->have_posts() ) : $attorney->the_post();

								$first_name = get_the_title();
								$first_name = explode( ' ', $first_name );
								$i ++;
								?>

                                <div class="attorney-item attorney-<?php echo $i ?>">

                                    <a href="<?php the_permalink() ?>">

										<?php the_post_thumbnail( 'full' ) ?>

                                        <div class="attorney-block">
                                            <h3><?php the_title(); ?></h3>

											<?php if ( get_field( 'position' ) ): ?>
                                                <h4><?php the_field( 'position' ); ?></h4>
											<?php endif; ?>

                                            <p>Get to know <span><?php echo $first_name[0]; ?></></p>
                                        </div>
                                    </a>

                                </div>

							<?php endwhile ?>

                        </div>

					<?php endif;
					wp_reset_postdata() ?>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/generic-sidebar' ) ?>
                </div>

            </div>

        </div>

    </section>

<?php get_footer(); ?>