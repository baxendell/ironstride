<?php
/**
 * Template Name: Testimonial archive
 */
get_header();
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

$current_page_slug = get_queried_object()->rewrite['slug'];
$current_page_id   = get_id_by_slug( $current_page_slug );
//$current_page_id   = get_id_by_slug( 'testimonials' );
?>

    <section class="main-content" itemscope itemtype="http://schema.org/Review">

        <div class="container">

            <meta itemprop="itemReviewed" content="Clients Name Here."/>

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">

                    <div class="inner-content">

						<?php if ( $current_page_id ): ?>

                            <div class="entry-content page-content">

                                <h1 class="page-title"><?php h1_title( $current_page_id ) ?></h1>

								<?php
								$current_object = get_post( $current_page_id );
								$content        = $current_object->post_content;
								?>

                                <div><?php echo $content; ?></div>
                            </div>

						<?php endif; ?>

						<?php if ( have_posts() ) : ?>

                            <div class="testimonials">

								<?php while ( have_posts() ) : the_post() ?>

                                    <div class="testimonial entry-content" itemscope itemtype="http://schema.org/Review">

                                        <h3 class="testimonial-title"><?php the_title() ?></h3>
                                        <blockquote>
                                            <q itemprop="reviewBody">
												<?php the_content(); ?>
                                            </q>
                                            <cite>
                                                - <?php the_field( 'client_name' ) ?>
												<?php
												if ( get_field( 'client_type' ) ):
													the_field( 'client_type' );
												endif;
												?>
                                            </cite>
                                        </blockquote>

                                    </div>

								<?php endwhile ?>

                            </div>

						<?php endif;
						wp_reset_postdata(); ?>
                    </div>

                    <div class="blog-pagination">
						<?php do_action( 'cws_pagination' ) ?>
                    </div><!--.blog-pagination-->

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/generic-sidebar' ); ?>
                </div>

            </div>

        </div>

    </section>

<?php get_footer(); ?>