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

                <?php if(get_field('section_1_title')): ?>

                <h2 class="orange"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                <?php endif ?>

                <?php if ( have_posts() ) : ?>

                    <?php while ( have_posts() ) : the_post() ?>

                        <?php the_content(); ?>

                    <?php endwhile; ?>

                <?php endif; ?>

            </article>

            <aside class="col-12 col-xl-6 pl-lg-4 sidebar text-center">

                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="image-holder">
                        <?php the_post_thumbnail( 'full' ) ?>
                    </div>
                <?php endif; ?>

            </aside>

        </div>

    </div>

</section>

<?php if(get_field('section_2_text')): ?>

<section class="did-you-know">

    <div class="container">

        <div class="row entry-content">

            <div class="col pl-0 pr-4">

                <div class="about-values-container row">

                    <div class="col-12 col-sm-10 pl-5">

                       <h2 class="green"><?php the_field('section_2_subtitle') ?> <strong><?php the_field('section_2_title') ?></strong></h2>

                       <?php the_field('section_2_text') ?>

                    </div>                     

                </div>

            </div>

        </div>

    </div>

</section>

<?php endif ?>

<?php if(get_field('section_3_left')): ?>

<section class="service-split">

    <?php if(get_field('section_3_title')): ?>
     <h2 class="green"><?php if(get_field('section_3_subtitle')) { the_field('section_3_subtitle');} ?> <strong><?php the_field('section_3_title') ?></strong></h2>

    <?php endif ?>

    <div class="container">

        <div class="row entry-content">

            <div class="col-lg-6 px-5 ">

                <?php the_field('section_3_left') ?>

            </div>

            <div class="col-lg-6 px-5">

                <?php the_field('section_3_right') ?>

            </div>

        </div>

    </div>

</section>

<?php endif ?>

<?php if(get_field('section_4_content')): ?>

<section class="service-note alt-grey">

    <div class="container">

        <div class="row">

            <div class="col-12">

                <h2 class="green"><?php the_field('section_4_subtitle') ?> <strong><?php the_field('section_4_title') ?></strong></h2>

                <?php the_field('section_4_content') ?>

                <?php if( have_rows('accordions') ): $i=0;?>

                <div class="accordion" id="accordionGray">

                    <?php while( have_rows('accordions') ) : the_row(); $i++;
                        if($i==1) {
                            $show = 'show';
                        } else {
                            $show = '';
                        }
                     ?>
                    <div class="card">
                        <div class="card-header" id="heading<?php echo $i ?>">
                          <h3 class="mb-0">
                            <a type="button" data-toggle="collapse" data-target="#collapse<?php echo $i ?>" aria-expanded="true" aria-controls="collapse<?php echo $i ?>">
                              <?php the_sub_field('accordion_title') ?>
                            </a>
                          </h3>
                        </div>

                        <div id="collapse<?php echo $i ?>" class="collapse <?php echo $show ?>" aria-labelledby="heading<?php echo $i ?>" data-parent="#accordionGray">
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

<?php endif ?>

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