<?php
/**
 * Single blog
 */
get_header();
?>

<div class="blog-header">
    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-2 col-xl-1 pr-0 text-center">

                <?php get_template_part( 'partials/share' ) ?>

            </div>

            <div class="col-lg-9 col-xl-10">

                <?php the_post_thumbnail('full') ?>

            </div>

        </div>

    </div>

</div>

<section id="blog-post" class="main-content">

    <div class="container">

        <div class="inner-wrapper row">

            <div class="content col-12 col-lg-7 col-xl-8">
                <div class="pl-5">
				   <?php get_template_part( 'partials/excerpt-loop' ) ?>
               </div>
				
            </div>

            <div class="col-12 col-lg-5 col-xl-4 sidebar pl-5">
				<div id="primary" class="widget-area" role="complementary">

                    <ul class="sidebar-widgets related-posts">
                        <div class="sidebar-title">Related Articles</div>

                        <?php 
                        $category = get_the_category( $post->ID );
                        $category_id   = $category[0]->term_id;

                        $args = array(
                            'post_type' => 'post',
                            'cat' => $category_id,
                            'posts_per_page' => '3',
                            'post__not_in' => array($post->ID),
                            );

                        $related_Query = new WP_Query($args);
                        if($related_Query->have_posts()): while($related_Query->have_posts()): $related_Query->the_post();
                        ?>
                        <li class="sidebar-item">
                            <a href="<?php the_permalink()?>">
                                <?php the_post_thumbnail('medium') ?>
                            </a>

                            <a class="related_title" href="<?php the_permalink() ?>"><?php the_title() ?></a>
                        </li>
                        <?php endwhile; wp_reset_postdata(); endif; ?>
                    </ul>
                </div><!--.sidebar-->

        </div><!--.row-->

    </div>

</section>

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