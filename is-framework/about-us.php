<?php
/**
 * Template Name: About Us
 */
get_header() ?>

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
                            <?php the_post_thumbnail( 'medium' ) ?>
                        </div>
                    <?php endif; ?>

                </aside>

            </div>

            <div id="about-section-2" class="row">

                <aside class="col-12 col-xl-6 pl-lg-5 pr-lg-5">

                    <?php $img = get_field('section_2_image'); ?>

                    <img src=<?php echo $img['url'] ?> alt="<?php echo $img['alt'] ?>" />

                </aside>

                <article class="col-12 col-lg-5 col-xl-6 pl-lg-4 d-md-flex">

                    <div class="col-lg-6">

                        <div class="bi-title"><?php the_field('section_2_title_1') ?></div>

                        <?php the_field('section_2_content_1') ?>

                    </div>

                    <div class="col-lg-6">

                        <div class="bi-title"><?php the_field('section_2_title_2') ?></div>

                        <?php the_field('section_2_content_2') ?>

                    </div>

                </article>

            </div>

        </div>

    </section>

    <section class="about-values">

        <div class="container">

            <div class="row">

                <div class="col pr-4">

                    <div class="about-values-container">

                        <div class="col">

                           <div class="section-title"><span>mindset</span><br/>Our Values</div>

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

    <section class="about-section-2">

        <div class="container">

            <div class="row">

                <article class="col-lg-7 pr-lg-4 pl-lg-5">

                    <?php the_field('section_3_content') ?>

                    <a class="link" href="/services/">Explore Our Services</a>

                </article>

                <aside class="col-lg-5">

                    <div class="bubble-text d-flex">
                        <div class="col-6">
                            Founded <strong>2009</strong>
                        </div>

                        <div class="col-6">
                            Founded <strong>2009</strong>
                        </div>

                        <div class="col-6">
                            Founded <strong>2009</strong>
                        </div>

                        <div class="col-6">
                            Founded <strong>2009</strong>
                        </div>

                    </div>

                </aside>

            </div>

        </div>

    </section>

<?php get_template_part('partials/team') ?>

<?php get_template_part('partials/awards') ?>

<?php get_template_part('partials/testimonial-part') ?>

<?php get_template_part('partials/cta-bottom') ?>

<?php get_footer() ?>