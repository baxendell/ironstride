<?php
/**
 * Author template
 */
get_header();
?>

    <section class="main-content category-archive-view">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">

                    <h1 class="page-title"><?php the_archive_title() ?></h1>

                    <div class="inner-content">
						<?php get_template_part( 'partials/excerpt-loop' ) ?>
                    </div>

                    <div class="blog-pagination">
						<?php do_action( 'cws_pagination' ) ?>
                    </div>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/blog-sidebar' ) ?>
                </div>

            </div>

        </div>

    </section>

<?php get_footer() ?>