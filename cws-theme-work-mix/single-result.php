<?php
/**
 * Result single
 */
get_header() ?>

    <section class="main-content">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="entry-content col-12 col-lg-7 col-xl-8">

                    <h1 class="page-title"><?php h1_title(); ?></h1>

					<?php
					$terms = get_the_terms( $post->ID, 'practice_area_category' );

					if ( $terms ):
						foreach ( $terms as $term ) {
							$term_link = get_term_link( $term ); ?>

                            <h3><a href="<?php echo $term_link; ?>"><?php echo $term->name; ?></a></h3>

						<?php }
					endif; ?>

					<?php if ( have_posts() ) : ?>
						<?php while ( have_posts() ) : the_post() ?>
							<?php the_content(); ?>
						<?php endwhile ?>
					<?php endif; ?>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">

					<?php get_template_part( 'sidebars/generic-sidebar' ) ?>

                </div>

            </div>

        </div>

    </section>

<?php get_footer() ?>