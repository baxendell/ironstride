<?php
/**
 * Attorney single
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
				<?php get_template_part( 'sidebars/attorney-bio-sidebar' ); ?>
            </div>

			<?php endwhile;
			endif; ?>

        </div>

    </div>

</section>

<?php get_template_part( 'partials/results' ) ?>

<section class="videos-part">

    <div class="container">

        <div class="heading-part"><?php the_title(); ?>’s Videos</div>

        <div class="grid grid-videos">


			<?php

			if ( have_rows( 'videos_attorney' ) ):

				while ( have_rows( 'videos_attorney' ) ) : the_row(); ?>

					<?php if ( get_sub_field( 'video' ) ) {

						$post_object = get_sub_field( 'video' );

						if ( $post_object ):

							// override $post
							$post = $post_object;
							setup_postdata( $post );
							$vid        = $post->ID;
							$video_id   = get_post_meta( $vid, 'cw_video_id', true );
							$video_type = get_post_meta( $vid, 'cw_video_type', true );
							$thumbnail  = get_post_meta( $vid, 'cw_video_thumbnail', true );
							?>

                            <div class="item">
                                <a class="cw_video_open_popup_customized" href="javascript:void(0);" video_id="<?php esc_attr_e( $video_id ); ?>" video_autoplay="1" video_type="<?php echo $video_type; ?>" video_showinfo="" video_rel=“false">


                                    <div class="img-wrap">
                                        <img class="img-fluid" src="<?php echo $thumbnail; ?>" alt="Play Video"/>
										<?php cws_get_svg( 'icon-play.svg' ) ?>
                                    </div>
                                    <div class="video-description">
                                        <p><?php the_sub_field( 'description' ); ?></p>
                                    </div>

                                </a>
                            </div>

							<?php wp_reset_postdata();

						endif;

					}
					?>

				<?php endwhile;

			endif;

			?>


        </div>

    </div>


</section>

<section class="secondary-section">

    <div class="container">

        <div class="row">

            <div class="entry-content col-12 col-lg-7 col-xl-8">

                <div class="credentials-wrap">

					<?php
					if ( have_rows( 'attorney_credentials' ) ):
						while ( have_rows( 'attorney_credentials' ) ) : the_row(); ?>

                            <div class="credential-item">
                                <h2 class="credential-title"><?php the_sub_field( 'credential_title' ); ?></h2>
                                <div class="credential-content">
									<?php the_sub_field( 'credential_list' ); ?>
                                </div>
                            </div>

						<?php endwhile;
					endif;
					?>

                </div>

            </div>

            <div class="col-12 col-lg-5 col-xl-4 sidebar">

				<?php get_template_part( 'sidebars/attorney-bio-2-sidebar' ) ?>

            </div>

        </div>

    </div>

</section>

<section class="team-part">

    <div class="container">

        <div class="heading">Meet The Rest Of Our Team</div>

        <div class="grid grid-team">
			<?php
			$team_args  = array(
				'post_type'      => 'attorney',
				'posts_per_page' => - 1,
				'post__not_in'   => array( $post->ID ),
			);
			$team_query = new WP_Query( $team_args );
			if ( $team_query->have_posts() ): ?>
				<?php while ( $team_query->have_posts() ): $team_query->the_post(); ?>

                    <div class="item">
                        <a href="<?php the_permalink() ?>">
                            <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="attorney image">
                            <h5><?php the_title() ?></h5>
                        </a>
                    </div>

				<?php endwhile; ?>
			<?php endif; ?>
        </div>

    </div>

</section>

<?php get_footer() ?>
