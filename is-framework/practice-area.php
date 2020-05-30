<?php
/**
 * Template Name: Single Service
 *
 */
get_header();
?>

    <section class="main-content">

        <div class="container">

            <div class="row">

                <article class="col-12 col-xl-6 pl-lg-5 pr-lg-5 entry-content">

                    <?php if ( have_posts() ) : ?>

                        <?php while ( have_posts() ) : the_post() ?>

                            <h1 class="page-title"><?php h1_title(); ?></h1>

                            <?php the_content(); ?>

                        <?php endwhile; ?>

                    <?php endif; ?>

                </article>

                <aside class="col-12 col-lg-5 col-xl-6 pl-lg-4 sidebar">

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="image-holder">
                            <?php the_post_thumbnail( 'large' ) ?>
                        </div>
                    <?php endif; ?>

                </aside>

            </div>

        </div>

    </section>

<?php get_footer() ?>