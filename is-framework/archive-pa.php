<?php
/**
 * Template Name: PA archive
 */
get_header();
?>

    <section class="main-content">

        <div class="container">

            <div class="row justify-content-center">

                <div class="col-12 col-lg-7 col-xl-6 px-xl-4 text-center entry-content">

					<?php if ( have_posts() ) : ?>

						<?php while ( have_posts() ) : the_post() ?>

                            <h1 class="page-title"><?php h1_title(); ?></h1>

							<?php if ( has_post_thumbnail() ) : ?>

                                <div class="image-holder">
									<?php the_post_thumbnail( 'medium' ); ?>
                                </div>

							<?php endif; ?>

							<?php the_content(); ?>

						<?php endwhile; ?>

					<?php endif; ?>

                </div>

            </div>

            <div class="row">

                <?php get_template_part('partials/legal-services') ?>

            </div>

        </div>

    </section>

<?php get_template_part( 'partials/testimonial-part' ); ?>

<?php get_footer(); ?>