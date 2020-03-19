<?php
/**
 * Single blog
 */
get_header();
?>

<section id="blog-post" class="main-content">

        <div class="container">

            <div class="inner-wrapper row">

                <div class="content col-12 col-lg-7 col-xl-8">
					<?php get_template_part( 'partials/excerpt-loop' ) ?>
					<?php get_template_part( 'partials/share' ) ?>
                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/blog-sidebar' ) ?>
                </div><!--.sidebar-->

            </div><!--.row-->

        </div>

    </section><!--.container-->

<?php get_footer() ?>