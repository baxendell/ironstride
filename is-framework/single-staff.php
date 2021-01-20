<?php
/**
 * Team single
 */
get_header();
?>
<!--Remember to use Person Google Schema: http://schema.org/Person -->

<section class="main-content" itemscope itemtype="http://schema.org/Person">

    <div class="container">

        <div class="row">

            <div class="entry-content col-12 col-lg-7 col-xl-8">
				<?php if ( have_posts() ) : while ( have_posts() ) :
				the_post(); ?>

                <header>
                    <h1 class="page-title"><?php h1_title() ?></h1>
                </header>

				<?php the_content(); ?>

            </div>

            <div class="col-12 col-lg-5 col-xl-4 sidebar">

				<?php the_post_thumbnail('medium', ['class' => 'img-responsive mb-4']) ?>

                <?php get_template_part( 'sidebars/generic-sidebar' ); ?>

            </div>

			<?php endwhile;
			endif; ?>

        </div>

    </div>

</section>

<?php get_footer() ?>
