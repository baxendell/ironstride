<?php
/**
 * Template Name: Practice Area
 *
 */
get_header();
?>

    <!--Incorporate Service Schema microdata: http://schema.org/Service -->

    <section class="main-content" itemscope itemtype="http://schema.org/Service">

        <div class="container">

            <div class="row">

                <div class="col-12 text-center entry-content">

                    <h1 class="page-title"><?php h1_title(); ?></h1>

                </div>

            </div>

            <div class="row">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post() ?>

                    <article class="col-12 col-lg-7 col-xl-8 entry-content">

                        <div class="float-xl-left toc sidebar-widget">

                            <div class="sidebar-title">Table Of Contents</div>

                            <div class="toc-table">

                                <ul class="toc-table-list"></ul>

                            </div>

                        </div>

						<?php the_content(); ?>

                    </article>

				<?php endwhile; endif; ?>

                <aside class="col-12 col-lg-5 col-xl-4 sidebar">

					<?php if ( has_post_thumbnail() ) : ?>
                        <div class="image-holder">
							<?php the_post_thumbnail( 'full' ) ?>
                        </div>
					<?php endif; ?>

					<?php
					get_template_part( 'sidebars/practice-area-1-sidebar' );
					?>

                </aside>

            </div>

        </div>

    </section>

<?php if ( get_field( 'section_2_content' ) ): ?>

    <section class="practice-area-part-2">

        <div class="container">

            <div class="row">

                <article class="col-lg-7 col-xl-8 pr-lg-5 entry-content">

					<?php the_field( 'section_2_content' ) ?>

                </article>

                <aside class="col-12 col-lg-5 col-xl-4 sidebar">

                    <div class="widget-area" role="complementary">

                        <ul class="sidebar-widgets">

                            <li class="sidebar-item">
								<?php do_action( 'cws_testimonial_sidebar' ) ?>
                            </li>

                        </ul>

                    </div>

                </aside>

            </div>

        </div>

    </section>

<?php endif; ?>

<?php get_template_part( 'partials/results' ); ?>

<?php if ( get_field( 'section_3_content' ) ): ?>

    <section class="practice-area-part-3">

        <div class="container">

            <div class="row">

                <article class="col-12 col-lg-12 col-xl-8 entry-content">
					<?php the_field( 'section_3_content' ) ?>
                </article>

                <aside class="col-12 col-lg-12 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/practice-area-2-sidebar' ); ?>
                </aside>

            </div>

        </div>

    </section>

<?php endif; ?>

<?php get_footer() ?>