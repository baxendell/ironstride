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

            <div data-aos="fade-right" class="col-md-6 text-right">

            	<?php $img1 = get_field('top_content_image_1') ?>

            	<img src="<?php echo $img1['url'] ?>" alt="<?php echo $img1['alt'] ?>"/>

        	</div>

        	<div data-aos="fade-left" class="col-md-6 mb-5">

        		<h2 class="blue"><?php the_field('top_content_subtitle_1') ?> <strong><?php the_field('top_content_title_1') ?></strong></h2>

        		<p><?php the_field('top_content_text_1') ?></p>

        		<a class="arrow-link" href="<?php the_field('top_content_link_1') ?>"><span>Learn More</span></a>

    		</div>

        </div>

        <div class="row bubble-block bubble-block_alt">

        	<div data-aos="fade-right" class="col-md-6 mb-4">

        		<h2 class="orange"><?php the_field('top_content_subtitle_2') ?> <strong><?php the_field('top_content_title_2') ?></strong></h2>

        		<p><?php the_field('top_content_text_2') ?></p>

        		<a class="orange arrow-link" href="<?php the_field('top_content_link_2') ?>"><span>Learn More</span></a>

    		</div>


            <div data-aos="fade-left" class="col-md-6">

            	<?php $img2 = get_field('top_content_image_2') ?>

            	<img src="<?php echo $img2['url'] ?>" alt="<?php echo $img2['alt'] ?>"/>

        	</div>

        </div>        

    </div>

</section>

<section class="image-grid">

	<div class="container-fluid">

		<div class="row">

			<div class="col-lg-6 p-0">

				<div class="row">

					<div data-aos="zoom-in" class="col-md-6 p-lg-0">

						<a href="<?php the_field('grid_1_link') ?>">
							<figure>
							<?php $grid_img1 = get_field('grid_1_image') ?>
							  <img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							
						  		<div class="figure-content">
								  	<div class="figure-title">case study</div>
								  	<div class="figure-case-title"><?php the_field('grid_1_text') ?></div>
								  	<div class="arrow-link arrow-link__alt"><span>learn more</span></div>
						  		</div>
							</figure>
						</a>

					</div>

					<div data-aos="zoom-in" class="col-md-6 p-lg-0">

						<a href="<?php the_field('grid_2_link') ?>">

							<figure>
							  <?php $grid_img1 = get_field('grid_2_image') ?>
							  <img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							
						  		<div class="figure-content">
								  	<div class="figure-title">case study</div>
								  	<div class="figure-case-title"><?php the_field('grid_2_text') ?></div>
								  	<div class="arrow-link arrow-link__alt"><span>learn more</span></div>
						  		</div>
							</figure>

						</a>

					</div>

				</div>

				<div class="row">

					<div data-aos="zoom-in" class="col-md-6 p-lg-0 grid-services">

						<a href="<?php the_field('grid_3_link') ?>">
							<figure>
						  		<?php $grid_img1 = get_field('grid_3_image') ?>
						  		<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
					  		
						  		<div class="figure-content">
								  	<div class="figure-title">case study</div>
								  	<div class="figure-case-title"><?php the_field('grid_3_text') ?></div>
								  	<div class="arrow-link arrow-link__alt"><span>learn more</span></div>
						  		</div>
					  		</figure>
						</a>

					</div>

					<div data-aos="zoom-in" class="col-md-6 p-lg-0">

						<a href="<?php the_field('grid_4_link') ?>">

							<figure>
							  <?php $grid_img1 = get_field('grid_4_image') ?>
						  		<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />
							
						  		<div class="figure-content">
								  	<div class="figure-title">case study</div>
								  	<div class="figure-case-title"><?php the_field('grid_4_text') ?></div>
								  	<div class="arrow-link arrow-link__alt"><span>learn more</span></div>
						  		</div>
							</figure>

						</a>

					</div>

				</div>

			</div>

			<div data-aos="zoom-in" class="col-lg-6 p-0 case-study">

				<a href="<?php the_field('case_grid_link') ?>">
					<figure>
					  	<?php $grid_img1 = get_field('case_grid_image') ?>
					  	<img src="<?php echo $grid_img1['url'] ?>" alt="<?php echo $grid_img1['alt'] ?>" />

					  	<div class="figure-content">
						  	<div class="figure-title">case study</div>
						  	<div class="figure-case-title"><?php the_field('case_grid_title') ?></div>
						  	<div class="arrow-link arrow-link__alt"><span>learn more</span></div>
				  		</div>
					</figure>
				</a>

			</div>

		</div>

	</div>

</section>

<!--website slider-->

<?php 
$posts = get_posts(array(
	'numberposts'	=> -1,
	'post_type'		=> 'portfolio',
	'meta_key'		=> 'website_image',
));
if( $posts ):
?>

<section class="webport pt-5 pb-5">

	<div class="container">

		<div class="row">

			<h2 class="col-12 text-center">Websites We've Done.</h2>

			<div class="col-12 webport-slider">

				<?php foreach( $posts as $post ): setup_postdata( $post );
					$webImg =  get_field('website_image');
				?>

				<a href="<?php the_permalink() ?>">
					<img src="<?php echo $webImg['url'] ?>" alt="<?php echo $webImg['alt'] ?>" width="<?php echo $webImg['width'] ?>" height="<?php echo $webImg['height'] ?>"/>
				</a>

        		<?php endforeach; wp_reset_postdata(); ?>

			</div>

			<div class="custom-nav-website"></div>

		</div>

	</div>

</section>

<?php endif ?>

<!--end of slider-->

<section id="principles" class="main-content main-content__alt">

    <div class="container">

       <div class="row justify-content-center">

	       	<div data-aos="fade-up-right" class="col-md-10 pl-md-5 pr-md-0 principles-top">

	       		<h2 class="green"><?php the_field('bottom_subtitle') ?><strong class="d-block"><?php the_field('bottom_title') ?></strong></h2>

	       		<?php the_field('bottom_text') ?>

	   		</div>

		</div>    

		<?php if( have_rows('unordered_list') ): ?>

		<div class="row principles-bottom">

			<div class="offset-lg-1 pl-md-5 col-lg-5 pr-md-0">

				<ol>

					<?php while ( have_rows('unordered_list') ) : the_row(); ?>

					<li><span><?php the_sub_field('list_title') ?> </span>
						<p><?php the_sub_field('list_excerpt') ?></p>
					</li>

					<?php endwhile ?>

				</ol>

			</div>

			<div class="offset-md-1 col-lg-4 principles-right d-none d-lg-block">

				<div class="principles-right-top"></div>
				<div class="principles-right-middle"></div>
				<div class="principles-right-bottom"></div>

			</div>

		</div>

		<?php endif ?>

    </div>

</section>

<section> 

	<div class="container">

		<div class="row cta-neg">

			<div class="pl-lg-5 col-lg-11">

				<div class="cta-bubble">

					<div class="cta-bubble-content">

						<div class="cta-bubble-title"><?php the_field('call_out_title') ?></div>
						<?php the_field('call_out_text') ?>

					</div>

					<a class="btn btn-1 btn--alt" href="/contact/">Let's Talk</a>

				</div>

			</div>

		</div>

	</div>

</section>

<?php get_template_part( 'partials/news' ); ?>

<?php get_footer(); ?>