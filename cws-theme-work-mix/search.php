<?php
/**
 * Template Name: Search Page
 */
get_header();
?>

    <section class="main-content category-archive-view">

        <div class="container">

            <div class="inner-wrapper row">

                <div id="page-content" class="content col-12 col-lg-7 col-xl-8">

                    <h1 class="page-title">Search Results</h1>

					<?php if ( have_posts() ) : ?>
						<?php get_template_part( 'partials/excerpt-loop' ) ?>
					<?php else : ?>
						<?php get_template_part( 'partials/404-partial' ) ?>
					<?php endif ?>

                    <div class="blog-pagination">
		                <?php do_action( 'cws_pagination' ) ?>
                    </div><!--.blog-pagination-->

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/blog-sidebar' ) ?>
                </div>

            </div>

        </div>

    </section>

<?php get_footer() ?>