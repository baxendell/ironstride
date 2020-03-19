<?php
/*
 * Categories template
 */
get_header(); ?>

<div class="main-wrapper category-view">

    <section class="main-content">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">

                    <h1 class="page-title"><?php the_archive_title(); ?></h1>

                    <div class="inner-content">
						<?php get_template_part( 'partials/excerpt-video-loop' ) ?>
                    </div><!--.inner-content-->

                    <div class="blog-pagination">
						<?php do_action( 'cws_pagination' ) ?>
                    </div><!--.blog-pagination-->

                </div><!--.content-->

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php do_action( 'cws_category_sidebar' ) ?>
                </div>

            </div><!--.row-->

        </div>

    </section>

</div>

<?php get_footer() ?>
