<?php
/**
 * Single Portfolio
 */
get_header(); ?>

<section class="main-content alt-grey">

    <div class="container">

        <div class="row">

            <div class="col-lg-10 mx-auto text-center">

                <h2 class="darker-green"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

				<?php if ( have_posts() ) : ?>

					<?php while ( have_posts() ) : the_post() ?>

						<?php the_content(); ?>

					<?php endwhile; ?>

				<?php endif; ?>

			</div>

		</div>

	</div>

</section>

<!-- Featured Image -->
<section class="portfolio-image">

	<div class="container">

		<div class="row">

			<div class="col text-center">

				<?php $blockImg = get_field('portfolio_featured_image') ?>

				<img src="<?php echo $blockImg['url'] ?>" alt="<?php echo $blockImg['url'] ?>"/>

			</div>

		</div>

	</div>

</section>

<!-- Portfolio Details -->
<section class="portfolio-details">

	<div class="container">

		<div class="row">

			<div class="col-lg-10 mx-auto">

				<?php if( have_rows('portfolio_details_repeater') ):while ( have_rows('portfolio_details_repeater') ) : the_row(); 

					$blockImg = get_sub_field('portfolio_details_icon') ?>

					<div class="portfolio-details__item">
						
						<div class="text-center">

							<img src="<?php echo $blockImg['url'] ?>" alt="<?php echo $blockImg['url'] ?>"/>

	                    	<div class="details-title"><?php the_sub_field('portfolio_details_title') ?></div>

						</div>

						<?php the_sub_field('portfolio_details_content') ?>

					</div>

				<?php endwhile; endif; ?>
				
			</div>

		</div>

	</div>

</section>

<!-- Stats -->
<?php if( have_rows('stats_repeater') ): ?>

<section id="portfolio-stats">

	<div class="container">

		<div class="row">

			<?php while ( have_rows('stats_repeater') ) : the_row(); ?>

				<div class="col-lg-3 stats-item text-center">

					<div class="stats-item__title">
						<?php the_sub_field('stats_repeater_title') ?>

						<?php if(get_sub_field('stats_repeater_icon')) : ?>

							<img src="<?php echo get_sub_field('stats_repeater_icon') ?>" alt="stats icon"/>

						<?php endif; ?>
					</div>

					<div class="stats-item__content"><?php the_sub_field('stats_repeater_content') ?></div>

				</div>

			<?php endwhile; ?>
			
		</div>

	</div>

</section>

<?php endif; ?>

<!-- Optional Additional Details -->
<?php if(get_field('additional_title')) : ?>

<section class="ways-work">

    <div class="container">

        <div class="row">

            <div class="col-12">

                <h2><strong><?php the_field('additional_title') ?></strong></h2>

                <?php the_field('additional_content') ?>

            </div>

        </div>

        <div class="row">

            <div class="col-12 d-md-flex">

                <?php if( have_rows('additional_repeater') ):while ( have_rows('additional_repeater') ) : the_row(); ?>

                <div class="col-lg-4 ways-work-item">

                    <?php $blockImg = get_sub_field('additional_repeater_image') ?>

                    <img src="<?php echo $blockImg['url'] ?>" alt="<?php echo $blockImg['url'] ?>"/>

                    <div class="ways-work-title"><?php the_sub_field('additional_repeater_title') ?></div>

                    <p><?php the_sub_field('additional_repeater_text') ?></p>

                </div>

                <?php endwhile; endif; ?>

            </div>

        </div>

    </div>

</section>
<?php endif; ?>

<!-- Testimonials -->
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