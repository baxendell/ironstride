<?php
/*
 * Blog page "Home"
 */
get_header() ?>

    <section id="blog" class="main-content category-archive-view">

        <div class="container">

            <div class="row">

                <div class="content col-12 col-lg-7 col-xl-8">

                    <h1 class="page-title">Blog</h1>

                    <div class="inner-content">
						<?php get_template_part( 'partials/excerpt-loop' ) ?>
                    </div><!--.inner-content-->

                    <div class="blog-pagination">
						<?php do_action( 'cws_pagination' ) ?>
                    </div><!--.blog-pagination-->

                </div><!--.content-->

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php get_template_part( 'sidebars/blog-sidebar' ) ?>
                </div><!--.sidebar-->

                <div class="clearfix"></div>

            </div><!--.row-->

        </div>

    </section><!--.container-->

<?php get_footer() ?>