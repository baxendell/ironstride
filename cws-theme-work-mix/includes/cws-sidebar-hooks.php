<?php
/**
 * Sidebar hooks
 */

/**
 * Related info in sidebar
 *
 * @add_action related_info
 *
 * @return void
 */

function cws_related_info_output() {

	global $post;

	$post_id  = $post->ID;

	$ri_args  = array(
		'post_parent'    => $post_id,
		'post_type'      => array( 'page' ),
		'posts_per_page' => - 1,
		'order'          => "ASC",
	);

	$children = new WP_Query( $ri_args ); ?>

    <?php if ( $children->have_posts() ): ?>
    <li class="sidebar-item">

        <div class="sidebar-holder">
            <div class="sidebar-title">Related Information</div>
            <ul class="list">
                <?php while ( $children->have_posts() ): $children->the_post(); ?>
                    <li><a href="<?php the_permalink() ?>"><?php the_title() ?></a></li>
                <?php endwhile ?>
            </ul>
        </div>

     </li>

	 <?php endif; ?>

	<?php wp_reset_postdata();
}

add_action( 'cws_related_info', 'cws_related_info_output' );


function cws_custom_sidebar_output() {
	global $post;
	$post_id = $post->ID;

	$title        = get_field( 'useful_info_title' );
	$post_objects = get_field( 'useful_information' );

	$args = array(
		//'post_type'      => array( 'page', 'post', 'testimonial', 'results', 'testimonial-spanish', 'spanish-results' ),
		'posts_per_page' => - 1,
		'post_parent'    => $post_id,
		'order'          => 'DESC',
	);

	if ( $post_objects ) :
		?>

        <div class="sidebar-holder useful-info-holder">

			<?php if ( $title ) : ?>
                <div class="sidebar-title"><?php echo esc_html( $title ) ?></div>
			<?php else : ?>
                <div class="sidebar-title">Other Information</h3>
			<?php endif; ?>

            <ul class="list">
				<?php foreach ( $post_objects as $post_object ) : ?>
                    <li>
                        <div class="post-info">
                            <a href="<?php echo get_permalink( $post_object->ID ) ?>"><?php echo get_the_title( $post_object->ID ) ?></a>
                        </div>
                    </li>
				<?php endforeach; ?>
            </ul>

        </div>

	<?php
	endif;
}

add_action( 'cws_custom_sidebar', 'cws_custom_sidebar_output' );

/**
 * Categories sidebar
 *
 * @add_action cws_category_sidebar
 *
 * @return void
 */
function cws_category_sidebar_output() {
	?>

    <div class="category-holder">

        <div class="search-wrap">

			<?php get_search_form() ?>

        </div>

        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <div class="ac-list panel">

                <div class="ac-title-wrapper" role="tab" id="heading_cat">

                    <a id="ac_cat" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_cat" aria-expanded="true" aria-controls="collapse_cat">
                        <span class="ac-title">Categories</span>
                    </a>

                </div><!--ac-list-wrapper-->

                <div id="collapse_cat" class="panel-collapse collapse ac" role="tabpanel" aria-labelledby="heading_cat">

                    <div class="panel-body">

                        <ul>

							<?php
							$args = array(
								'show_option_all'    => '',
								'orderby'            => 'name',
								'order'              => 'ASC',
								'style'              => 'list',
								'show_count'         => 0,
								'hide_empty'         => 1,
								'use_desc_for_title' => 1,
								'child_of'           => 0,
								'feed'               => '',
								'feed_type'          => '',
								'feed_image'         => '',
								'exclude'            => '',
								'exclude_tree'       => '',
								'include'            => '',
								'hierarchical'       => 1,
								'title_li'           => __( '' ),
								'show_option_none'   => __( '' ),
								'number'             => 25,
								'echo'               => 1,
								'depth'              => 0,
								'current_category'   => 0,
								'pad_counts'         => 0,
								'taxonomy'           => 'category',
								'walker'             => null,
							);
							wp_list_categories( $args );
							?>

                        </ul>

                    </div><!--.panel-body-->

                </div><!--#collapse_cat-->


                <div class="ac-title-wrapper" role="tab" id="heading_arch">

                    <a id="ac_arch" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_arch" aria-expanded="true" aria-controls="collapse_arch">
                        <span class="ac-title">Archive</span>
                    </a>

                </div><!--ac-list-wrapper-->

                <div id="collapse_arch" class="panel-collapse collapse ac" role="tabpanel" aria-labelledby="heading_arch">

                    <div class="panel-body">

                        <ul>

							<?php
							$args = array(
								'type'            => 'yearly',
								'limit'           => 5,
								'format'          => 'html',
								'before'          => '',
								'after'           => '',
								'show_post_count' => false,
								'echo'            => 1,
								'order'           => 'DESC',
								'post_type'       => 'post',
							);
							wp_get_archives( $args );
							?>

                        </ul>

                    </div><!--.panel-body-->

                </div><!--#collapse_arch-->

            </div><!--.ac-list-->

        </div><!--.panel-group-->

    </div><!--.locations-served-holder-->

	<?php
}

add_action( 'cws_category_sidebar', 'cws_category_sidebar_output' );


/**
 * Search Sidebar
 *
 * @add_action cws_form_sidebar
 *
 * @return void
 */
function cws_search_sidebar_output() {
	?>

    <div id="sidebar-search">

        <div class="inner-holder">

			<?php get_search_form() ?>

            <div class="magnify">

                <i class="icon icon-search-icon"></i>

            </div>

        </div>

    </div>

	<?php
}

add_action( 'cws_search_sidebar', 'cws_search_sidebar_output' );

/**
 * Form Sidebar
 *
 * @add_action cws_form_sidebar
 *
 * @return void
 */
function cws_form_sidebar_output() {
	?>

    <div id="aside-form" class="form-block banner-form-container">

		<?php get_template_part( 'partials/banner-form' ) ?>

    </div>

	<?php
}

add_action( 'cws_form_sidebar', 'cws_form_sidebar_output' );

/**
 * Testimonial sidebar
 *
 * @add_action cws_testimonial
 *
 * @void
 */
function cws_testimonial_sidebar_output() {

	if ( get_field( 'testimonials' ) ): ?>

            <div class="sidebar-holder testimonial-holder">

                <div class="sidebar-title">What Our Clients Say</div>

                <?php
                $post_object = get_field( 'testimonials' );

                if ( $post_object ):
    
                    // override $post
                    $post = $post_object;
                    setup_postdata( $post );
                    ?>

                    <div class="inner-holder">
                        <div itemscope itemtype="http://schema.org/Review">
                            <blockquote class="testimonial">
                               <q itemprop="reviewBody"><?php echo $post[0]->post_content; ?></q>
                               <cite title="Source Title">– <span itemprop="author"><?php the_field( 'client_name', $post[0]->ID ) ?></span><br/><span><?php the_field( 'client_type', $post[0]->ID ) ?></cite>
                            </blockquote>
                        </div>
                    </div>

                    <?php wp_reset_postdata(); ?>

                <?php endif; ?>

            </div>

	<?php
	endif;
}

add_action( 'cws_testimonial_sidebar', 'cws_testimonial_sidebar_output' );

/**
 * Results sidebar
 *
 * @add_action cws_results
 *
 * @return void
 */
function cws_results_sidebar_output() {
	global $cws_img_path;
	$args = array(
		'post_type'      => 'results',
		'posts_per_page' => 2,
	);

	$result = new WP_Query( $args ) ?>

    <div class="results">
        <h4>Our Attorneys Get Results</h4>

		<?php $i = 0 ?>

		<?php if ( $result->have_posts() ) : while ( $result->have_posts() ) : $result->the_post() ?>
			<?php $i ++ ?>

            <div class="results-content <?php echo esc_attr( 'results-' . $i ) ?>">
                <img src="<?php echo esc_url( $cws_img_path ) ?>/images/checkmark-inline.png" alt="Armstrong Law Firm Checkmark">
                <h5><?php the_field( 'sidebar_result_title' ) ?></h5>
                <h6><?php the_field( 'settlement' ) ?></h6>
            </div>

		<?php endwhile; endif;
		wp_reset_postdata() ?>

        <a href="<?php echo home_url() ?>/results" class="btn btn-std">Discover More Results</a>
    </div>

	<?php
}

add_action( 'cws_results_sidebar', 'cws_results_sidebar_output' );

/**
 * Attorney Credential sidebar
 *
 * @add_action cws_credential_sidebar
 *
 * @return void
 */
function cws_credential_sidebar_output() {
	global $post;
	$title_raw   = get_the_title( $post->ID );
	$title_array = explode( ' ', $title_raw );

	$title = $title_array[0] . "'s";

	if ( have_rows( 'attorney_credentials' ) ) : $i = 0;
		?>
        <section class="sidebar-holder credentials-holder">

            <div class="sidebar-title"><?php echo esc_html( $title ); ?> Credentials</div>

            <div id="accordion" role="tablist" aria-multiselectable="true">

				<?php while ( have_rows( 'attorney_credentials' ) ) : the_row() ?>

					<?php $i ++;
					if ( $i == 1 ) {
						$open      = "show";
						$collapsed = " ";
					} else {
						$open      = " ";
						$collapsed = "collapsed";
					}
					?>

					<?php $cred_title = get_sub_field( 'credential_title' ); ?>

                    <div class="card">
                        <div class="card-header" id="heading<?php echo $i; ?>">
                            <h5 class="mb-0">
                                <span class="btn btn-link <?php echo $collapsed; ?>" data-toggle="collapse" data-target="#collapse<?php echo $i; ?>" aria-expanded="true" aria-controls="collapse<?php echo $i; ?>">
	                                <?php echo esc_html( $cred_title ) ?>
                                </span>
                            </h5>
                        </div>

                        <div id="collapse<?php echo $i; ?>" class="collapse <?php echo $open; ?>" aria-labelledby="heading<?php echo $i; ?>" data-parent="#accordion">
                            <div class="card-body entry-content">
								<?php the_sub_field( 'credential_list' ); ?>
                            </div>
                        </div>
                    </div>

				<?php endwhile; ?>

            </div>

        </section>

	<?php
	endif;
}

add_action( 'cws_credential_sidebar', 'cws_credential_sidebar_output' );
