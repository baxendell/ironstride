<?php
/**
 * Template Name: Single Service
 *
 */
get_header();
?>

<section class="main-content">

    <div class="container">

        <div class="row bubble-block">

            <article class="col-12 col-xl-6 pl-lg-5 pr-lg-5 entry-content">

                <h2 class="orange"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                <?php if ( have_posts() ) : ?>

                    <?php while ( have_posts() ) : the_post() ?>

                        <?php the_content(); ?>

                    <?php endwhile; ?>

                <?php endif; ?>

            </article>

            <aside class="col-12 col-lg-5 col-xl-6 pl-lg-4 sidebar">

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="image-holder">
                        <?php the_post_thumbnail( 'full' ) ?>
                    </div>
                <?php endif; ?>

            </aside>

        </div>

    </div>

</section>

<section class="about-values">

    <div class="container">

        <div class="row">

            <div class="col pr-4">

                <div class="about-values-container">

                    <div class="col-10">

                       <h2 class="green"><?php the_field('section_2_subtitle') ?> <strong><?php the_field('section_2_title') ?></strong></h2>

                       <?php the_field('section_2_text') ?>

                    </div>                     

                </div>

            </div>

        </div>

    </div>

</section>

<section class="service-split">

    <div class="container">

        <div class="row">

            <div class="col-lg-6 px-5">

                <?php the_field('section_3_left') ?>

            </div>

            <div class="col-lg-6 px-5">

                <?php the_field('section_3_right') ?>

            </div>

        </div>

    </div>

</section>

<section class="service-note alt-grey">

    <div class="container">

        <div class="row">

            <div class="col-12">

                <h2 class="green"><?php the_field('section_4_subtitle') ?> <strong><?php the_field('section_4_title') ?></strong></h2>

                <?php the_field('section_4_content') ?>

                <?php if( have_rows('accordions') ): $i=0;?>

                <div class="accordion" id="accordionGray">

                    <?php while( have_rows('accordions') ) : the_row(); $i++; ?>
                    <div class="card">
                        <div class="card-header" id="heading<?php echo $i ?>">
                          <h3 class="mb-0">
                            <a type="button" data-toggle="collapse" data-target="#collapse<?php echo $i ?>" aria-expanded="true" aria-controls="collapse<?php echo $i ?>">
                              <?php the_sub_field('accordion_title') ?>
                            </a>
                          </h3>
                        </div>

                        <div id="collapse<?php echo $i ?>" class="collapse show" aria-labelledby="heading<?php echo $i ?>" data-parent="#accordionGray">
                          <div class="card-body">
                            <?php the_sub_field('accordion_text') ?>
                          </div>
                        </div>
                    </div>
                    <?php endwhile ?>

                </div>

                <?php endif ?>

            </div>

        </div>

    </div>

</section>

<?php get_template_part( 'partials/news' ); ?>


<div class="footer-top alt-grey">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-md-9">

                <?php get_template_part( 'partials/testimonial-part' ); ?>  

            </div>

        </div>

    </div>

</div>

<?php get_footer() ?>