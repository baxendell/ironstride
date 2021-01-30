<?php
/**
 * Template Name: About Us
 */
get_header();
$tempUrl = get_stylesheet_directory_uri();

 ?>

    <section class="main-content">

        <div class="container">

            <div class="row bubble-block">

                <article class="col-12 col-lg-7 col-xl-6 pl-xl-5 pr-xl-5 entry-content">

                    <h2 class="blue"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

					<?php if ( have_posts() ) : ?>

						<?php while ( have_posts() ) : the_post() ?>

							<?php the_content(); ?>

						<?php endwhile; ?>

					<?php endif; ?>

                </article>

                <aside class="col-12 col-lg-5 col-xl-6 pl-xl-4 sidebar">

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="image-holder">
                            <?php the_post_thumbnail( 'full' ) ?>
                        </div>
                    <?php endif; ?>

                </aside>

            </div>

            <div id="about-section-2" class="row">

                <aside class="col-12 col-lg-6 pl-xl-5 pr-xl-5">

                    <?php $img = get_field('section_2_image'); ?>

                    <img src=<?php echo $img['url'] ?> alt="<?php echo $img['alt'] ?>" />

                </aside>

                <article class="col-12 col-lg-6 pl-xl-4 d-md-flex">

                    <div class="col-lg-6">

                        <div class="bi-title">
                            <?php echo file_get_contents($tempUrl.'/assets/images/icons/chess-icon.svg'); ?>
                            <?php the_field('section_2_title_1') ?>
                        </div>

                        <p><?php the_field('section_2_content_1') ?></p>

                    </div>

                    <div class="col-lg-6">

                        <div class="bi-title">
                            <?php echo file_get_contents($tempUrl.'/assets/images/icons/basketball-icon.svg'); ?>
                            <?php the_field('section_2_title_2') ?>
                        </div>

                        <p><?php the_field('section_2_content_2') ?></p>

                    </div>

                </article>

            </div>

        </div>

    </section>

    <?php if(get_field('value_column_1')): ?>

    <section class="about-values">

        <div class="container">

            <div class="row">

                <div class="col pr-4">

                    <div class="about-values-container">

                        <div class="col pl-lg-4">

                           <h2 class="section-title"><span>mindset</span><br/>Our Values</h2>

                        </div>

                        <div class="col"><!--repeat-->
                           <?php the_field('value_column_1') ?>
                        </div>

                        <div class="col"><!--repeat-->
                            <?php the_field('value_column_2') ?>
                        </div>

                        <div class="col"><!--repeat-->
                            <?php the_field('value_column_3') ?>
                        </div>                        

                    </div>

                </div>

            </div>

        </div>

    </section>

    <?php endif ?>

    <?php if (get_field('section_3_content')): ?>

    <section class="about-section-2">

        <div class="container">

            <div class="row bubble-block">

                <article class="col-lg-5 col-xl-7 pr-xl-4 pl-xl-5">

                    <h2 class="orange"><?php the_field('section_3_subtitle') ?> <strong><?php the_field('section_3_title') ?></strong></h2>

                    <?php the_field('section_3_content') ?>

                    <a class="orange arrow-link" href="/services/"><span>Explore Our Services</span></a>

                </article>

                <aside class="d-none d-md-block col-lg-7 col-xl-5">

                    <div class="bubble-text row row-cols-2">
                        <div class="col-6">
                            Avg # of ads seen per day <strong>10,000</strong>
                        </div>

                        <div class="col-6">
                            Campaigns <strong>Over 10,000</strong>
                        </div>

                        <div class="col-6">
                            Years of combined experience <strong>100+</strong>
                        </div>                        

                        <div class="col-6">
                            Team Members <strong>8</strong>
                        </div>

                    </div>

                </aside>

            </div>

        </div>

    </section>

<?php endif ?>

<?php get_template_part('partials/team') ?>

<?php get_template_part('partials/awards') ?>

<div class="footer-top alt-grey">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-9">

                <?php get_template_part( 'partials/testimonial-part' ); ?>  

            </div>

        </div>

    </div>

</div>

<?php get_footer() ?>