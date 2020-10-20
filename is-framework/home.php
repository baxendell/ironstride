<?php
/*
 * Blog page "Home"
 */
get_header();

$post_blog = get_post(7); 
 ?>

    <section id="blog" class="main-content category-archive-view">

        <div class="container">

            <div class="row">

                <div class="content col-12">

                    <?php echo $post_blog->post_content; ?>

                </div>

                <aside class="col-12 col-lg-5 offset-xl-1 col-xl-3 sidebar">

                    <!--filter-->

                </aside>

                <div class="content col-lg-7 col-xl-6">

                    <div class="inner-content">
						<?php get_template_part( 'partials/excerpt-loop' ) ?>
                    </div><!--.inner-content-->

                </div>

                <div class="clearfix"></div>

            </div><!--.row-->

        </div>

    </section><!--.container-->

    <section id="blog-pagination-wrapper">

        <div class="container">

            <div class="row">

                <div class="col">

                    <div class="blog-pagination">
                        <?php do_action( 'cws_pagination' ) ?>
                    </div><!--.blog-pagination-->

                </div>

            </div>

        </div>

    </section>


<?php get_footer() ?>