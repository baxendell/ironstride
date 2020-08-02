<?php
/**
 * Template Name: Portfolio
 *
 */
get_header();
?>

<section class="main-content">

    <div class="container">

        <div class="row justify-content-center">

            <article class="col-12 px-xl-0 col-xl-10 text-center entry-content">

                <h2 class="green"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                <?php if ( have_posts() ) : ?>

                    <?php while ( have_posts() ) : the_post() ?>

                        <?php the_content(); ?>

                        <a class="arrow-link green" href="/contact-us/"><span>get your free consultation</span></a>

                    <?php endwhile; ?>

                <?php endif; ?>

            </article>

        </div>

    </div>

</section>

<?php get_footer() ?>