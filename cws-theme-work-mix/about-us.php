<?php
/**
 * Template Name: About Us
 */
get_header() ?>

    <section class="main-content">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-7 col-xl-8 entry-content">

					<?php if ( have_posts() ) : ?>

						<?php while ( have_posts() ) : the_post() ?>

                            <h1 class="page-title"><?php h1_title(); ?></h1>

							<?php if ( has_post_thumbnail() ) : ?>
                                <div class="image-holder">
									<?php the_post_thumbnail( 'medium' ) ?>
                                </div>
							<?php endif; ?>

							<?php the_content(); ?>

						<?php endwhile; ?>

					<?php endif; ?>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php
					get_template_part( 'sidebars/about-sidebar' );
					?>
                </div>

            </div>

        </div>

    </section>

<?php get_footer() ?>