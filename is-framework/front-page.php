<?php
/**
 * Front-page
 *
 * Front page action hooks in inc/front-page-hooks.php
 */
get_header();
?>

<section class="main-content">

    <div class="container">

        <div class="row bubble-block">

            <div class="col-md-6 text-right">

            	<?php $img1 = get_field('top_content_image_1') ?>

            	<img src="<?php echo $img1['url'] ?>" alt="<?php echo $img1['alt'] ?>"/>

        	</div>

        	<div class="col-md-6">

        		<h2><?php the_field('top_content_subtitle_1') ?> <strong><?php the_field('top_content_title_1') ?></strong></h2>

        		<p><?php the_field('top_content_text_1') ?></p>

        		<a class="arrow-link" href="<?php the_field('top_content_link_1') ?>"><span>Learn More</span></a>

    		</div>

        </div>

        <div class="row bubble-block bubble-block_alt">

        	<div class="col-md-6">

        		<h2><?php the_field('top_content_subtitle_2') ?> <strong><?php the_field('top_content_title_2') ?></strong></h2>

        		<p><?php the_field('top_content_text_2') ?></p>

        		<a class="arrow-link" href="<?php the_field('top_content_link_2') ?>"><span>Learn More</span></a>

    		</div>


            <div class="col-md-6">

            	<?php $img2 = get_field('top_content_image_2') ?>

            	<img src="<?php echo $img2['url'] ?>" alt="<?php echo $img2['alt'] ?>"/>

        	</div>

        </div>        

    </div>

</section>

<section class="image-grid">

	<div class="container-fluid">

		<div class="row">

			<div class="col-md-6 p-0">

				<div class="row">

					<div class="col-md-6 p-0">

						<a href="<?php the_field('grid_1_link') ?>">
							<figure>
							<?php $grid_img1 = get_field('grid_1_image') ?>
							  <img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							</figure>
						</a>

					</div>

					<div class="col-md-6 p-0">

						<a href="<?php the_field('grid_2_link') ?>">

							<figure>
							  <?php $grid_img1 = get_field('grid_2_image') ?>
							  <img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							</figure>

						</a>

					</div>

				</div>

				<div class="row">

					<div class="col-md-6 p-0 grid-services">

						<a href="/services/">
							<figure>
						  		<?php $grid_img1 = get_field('grid_3_image') ?>
						  		<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
					  		</figure>
						  	<span>Our Services</span>
						</a>

					</div>

					<div class="col-md-6 p-0">

						<a href="#">

							<figure>
							  <?php $grid_img1 = get_field('grid_4_image') ?>
						  		<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							</figure>

						</a>

					</div>

				</div>

			</div>

			<div class="col-md-6 p-0 case-study">

				<a href="<?php the_field('case_grid_link') ?>">
					<figure>
					  	<?php $grid_img1 = get_field('case_grid_image') ?>
					  	<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />

					  	<div class="figure-content">
						  	<div class="figure-title">case</div>
						  	<div class="figure-case-title"><?php the_field('case_grid_title') ?></div>
						  	<span class="learn-more">learn more</span>
				  		</div>
					</figure>
				</a>

			</div>

		</div>

	</div>

</section>

<section id="principles" class="main-content main-content__alt">

    <div class="container">

       <div class="row justify-content-center">

	       	<div class="col-md-9 pl-5 pr-0">

	       		<h2><?php the_field('bottom_subtitle') ?><strong><?php the_field('bottom_title') ?></strong></h2>

	       		<?php the_field('bottom_text') ?>

	   		</div>

		</div>    

		<?php if( have_rows('unordered_list') ): ?>

		<div class="row">

			<div class="pl-5 col-lg-5 pr-0">

				<ol>

					<?php while ( have_rows('unordered_list') ) : the_row(); ?>

					<li><strong><?php the_sub_field('list_title') ?> </strong>
						<p><?php the_sub_field('list_excerpt') ?></p>
					</li>

					<?php endwhile ?>

				</ol>

			</div>

			<div class="offset-md-1 col-lg-4">

				<!--svg-->

			</div>

		</div>

		<?php endif ?>

    </div>

</section>

<?php $args = array (
	'post_type' => 'post',
	'posts_per_page' => 3,
	);

$post_query = new WP_Query($args);

?>

<section class="news">

	<div class="container">

		<div class="row cta-neg">

			<div class="pl-5 col-md-11">

				<div class="cta-bubble">

					<div class="cta-bubble-content">

						<div class="cta-bubble-title"><?php the_field('call_out_title') ?></div>
						<?php the_field('call_out_text') ?>

					</div>

					<a class="btn btn-1" href="/contact-us/">Let's Talk</a>

				</div>

			</div>

		</div>

		<?php if($post_query->have_posts()): ?>

		<div class="row">

			<h2 class="text-center">The Latest</h2>

			<?php while($post_query->have_posts()): $post_query->the_post(); 
					$category      = get_the_category( $post->ID );
					$category_name = $category[0]->name;
					$category_id   = $category[0]->term_id;
					$link          = get_category_link( $category_id );
			?>

			<div class="offset-md-1 col-md-3">

				<div class="news-block">

					<a class="news-category" href="<?php echo $link ?>"><?php echo $category_name ?></div>

					<a class="news-title" href="<?php the_permalink() ?>"><?php the_title() ?></a>

				</div>

			</div>

			<?php endwhile; ?>

			<div class="text-center">

				<a class="btn btn-1" href="/news/">See All News</a>

			</div>

		</div>

		<?php wp_reset_postdata(); endif; ?>

	</div>

</section>

<?php get_footer(); ?>