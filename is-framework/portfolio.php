<?php
/**
 * Template Name: Portfolio
 *
 */
get_header();
?>

<section class="main-content">

    <div class="container">

        <div class="row justify-content-center">

            <article class="col-12 px-xl-0 col-xl-10 text-center entry-content">

                <h2 class="green"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                <?php if ( have_posts() ) : ?>

                    <?php while ( have_posts() ) : the_post() ?>

                        <?php the_content(); ?>

                        <a class="arrow-link green" href="/contact/"><span>get your free consultation</span></a>

                    <?php endwhile; ?>

                <?php endif; ?>

            </article>

        </div>

    </div>

</section>

<?php $args = array(
    'post_type' => 'portfolio',
    'posts_per_page' => '10',
    );

$port_query = new WP_Query($args);

if($port_query->have_posts()):

?>

<section class="work">

    <div class="container-fluid">

        <?php while($port_query->have_posts()): $port_query->the_post(); ?>

        <div class="work-row row">

            <div class="col-lg-6 work-item">

                <?php $portImg = get_field('archive_image'); ?>

                <img src="<?php echo $portImg['url'] ?>" alt="<?php echo $portImg['alt'] ?>"/>

                <div class="work-details">

                    <div><?php the_title() ?></div>

                    <a class="arrow-link arrow-link__alt" href="<?php the_permalink() ?>"><span>Learn More</span></a>

                </div>

            </div>

            <div class="col-lg-6 work-testimonial">

                <?php $client_test = get_field('client_testimonial'); if( $client_test ):  ?>

                <?php the_excerpt() ?>

                <?php else: ?>

                    <?php the_excerpt() ?>
                    
                <?php endif; ?>

            </div>

        </div>

        <?php endwhile; wp_reset_postdata(); ?>

    </div>

</section>

<?php endif; ?>

<section class="alt-grey">

    <div class="container">

        <div class="row text-center">

            <div class="blog-pagination col-12">
                <?php do_action( 'cws_pagination' ) ?>
            </div><!--.blog-pagination-->

        </div>

    </div>

</section>

<?php get_footer() ?>