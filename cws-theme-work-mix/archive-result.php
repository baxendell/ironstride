<?php
/**
 * Template Name: Results archive
 */
get_header();
?>

<?php
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args  = array(
	'post_type' => 'result',
	'order'     => 'ASC',
	'orderby'   => 'menu_order',
	'paged'     => get_query_var( 'paged' ),
);

$query = new WP_Query( $args );

$your_query = new WP_Query( 'pagename=case-results' );

?>

    <section class="main-content category-archive-view">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">

					<?php while ( $your_query->have_posts() ) : $your_query->the_post() ?>

                        <div class="entry-content">

                            <h1 class="page-title"><?php h1_title() ?></h1>

							<?php if ( has_post_thumbnail() ) : ?>

                                <div class="image-holder">
									<?php the_post_thumbnail( 'medium' ) ?>
                                </div><!--.post-thumbnail-->

							<?php endif; ?>

							<?php the_content(); ?>

                        </div>

					<?php endwhile;
					wp_reset_postdata(); ?>

					<?php if ( $query->have_posts() ) : ?>

                        <div class="results-wrap">

							<?php while ( $query->have_posts() ) : $query->the_post() ?>
                                <div class="result-item">
                                    <h3 class="result-title"><?php the_title(); ?></h3>
                                    <h4 class="result-taxonomy">
										<?php
										$terms = get_the_terms( $post->ID, 'practice_area_category' );

										if ( $terms ):
											foreach ( $terms as $term ) {
												$term_link = get_term_link( $term ); ?>

                                                <a href="<?php echo $term_link; ?>"><?php echo $term->name; ?></a>

											<?php }
										endif; ?>
                                    </h4>
                                    <div class="result-description">
										<?php the_content(); ?>
                                    </div>
                                </div>
							<?php endwhile ?>

                        </div>

					<?php endif; ?>
					<?php wp_reset_postdata(); ?>

                    <div class="blog-pagination">
						<?php do_action( 'cws_pagination' ) ?>
                    </div>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">

					<?php get_template_part( 'sidebars/generic-sidebar' ) ?>

                </div>

            </div>

        </div>

    </section>

<?php get_footer() ?>