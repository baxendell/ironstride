<?php
/**
 * CWS Custom Action Hooks
 */

/**
 * Remove Category and Tags from Title
 */
add_filter( 'gettext', 'remove_classifier_words', 20, 3 );
function remove_classifier_words( $translated_text, $untranslated_text, $domain ) {

	$custom_field_text = 'Tag: %s';
	if ( ! is_admin() && $untranslated_text === $custom_field_text ) {
		return '%s';
	}

	$custom_field_text = 'Category: %s';
	if ( ! is_admin() && $untranslated_text === $custom_field_text ) {
		return '%s';
	}

	return $translated_text;
}

/**
 * Add pagination to blog archive templates
 *
 * @add_action cws_pagination
 *
 * @return void
 */
function cws_numeric_posts_nav() {
	if ( is_singular() ) {
		return;
	}

	global $wp_query;

	/** Stop execution if there's only 1 page */
	if ( $wp_query->max_num_pages <= 1 ) {
		return;
	}

	$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
	$max   = intval( $wp_query->max_num_pages );

	/**    Add current page to the array */
	if ( $paged >= 1 ) {
		$links[] = $paged;
	}

	/**    Add the pages around the current page to the array */
	if ( $paged >= 3 ) {
		$links[] = $paged - 1;
		$links[] = $paged - 2;
	}

	if ( ( $paged + 2 ) <= $max ) {
		$links[] = $paged + 2;
		$links[] = $paged + 1;
	}

	echo '<div class="blog-navigation"><ul>' . "\n";

	/** print Page */
	printf( '<li class="page-li">Page</li>' );

	/**    Previous Post Link */
	if ( get_previous_posts_link() ) {
		$arrow_left = cws_get_svg_return( 'arrows/angle-left-regular.svg' );
		printf( '<li class="prev-link">%s</li>' . "\n", get_previous_posts_link( $arrow_left, '', 'no' ) );
	}

	/**    Link to first page, plus ellipses if necessary */
	if ( ! in_array( 1, $links ) ) {
		$class = 1 == $paged ? ' class="active"' : '';

		printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );

		if ( ! in_array( 2, $links ) ) {
			echo '<li class="dots">...</li>';
		}
	}

	/**    Link to current page, plus 2 pages in either direction if necessary */
	sort( $links );
	foreach ( (array) $links as $link ) {
		$class = $paged == $link ? ' class="active"' : '';
		printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
	}

	/**    Link to last page, plus ellipses if necessary */
	if ( ! in_array( $max, $links ) ) {
		if ( ! in_array( $max - 1, $links ) ) {
			echo '<li class="dots">...</li>' . "\n";
		}

		$class = $paged == $max ? ' class="active"' : '';
		printf( '<li%s><a href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
	}

	/**    Next Post Link */
	if ( get_next_posts_link() ) {
		$arrow_right = cws_get_svg_return( 'arrows/angle-right-regular.svg' );
		printf( '<li class="next-link">%s</li>' . "\n", get_next_posts_link( $arrow_right, '', 'no' ) );
	}

	echo '</ul></div>' . "\n";
}

add_action( 'cws_pagination', 'cws_numeric_posts_nav' );

/**
 * Show random testimonies from clients
 *
 * @add_action cws_testimony
 *
 * @return void
 */
function cws_testimony_hook_output() {
	global $wpdb;

	/* get a random testimonial */
	$testimonials = "
    SELECT *
    FROM $wpdb->posts wposts, $wpdb->postmeta metadate, $wpdb->postmeta metatime
    WHERE (wposts.ID = metadate.post_id AND wposts.ID = metatime.post_id)
    AND wposts.post_type = 'testimonial'
    AND wposts.post_status = 'publish'
    ORDER BY RAND() 
    LIMIT 1
 ";

	$testimony = $wpdb->get_results( $testimonials, OBJECT );

	?>
    <div class="sidebar-holder testimonial-holder">

        <div class="sidebar-title">What Our Clients Say</div>

		<?php if ( $testimony ) :
			global $post;
			foreach ( $testimony as $post ) :
				setup_postdata( $post ) ?>
                <div class="inner-holder">
                    <blockquote class="testimonial">
                        <q><?php the_content() ?></q>
                        <cite>&mdash; <?php the_title() ?></cite>
                    </blockquote>
                </div>
			<?php endforeach;
		endif;
		wp_reset_postdata(); ?>

        <p><a class="btn-more" href="javascript:void(0);">See More Testimonials</a></p>

    </div>
	<?php
}

add_action( 'cws_testimony_hook', 'cws_testimony_hook_output' );

/**
 * Set Breadcrumbs for a submenu
 *
 * @add_action set_header
 *
 * @return void
 */
function cws_yoast_breadcrumb_menu() {
	if ( ! is_front_page() ) : ?>
        <div class="breadcrumb-bar d-none d-md-block">
            <div class="container">
				<?php
				if ( function_exists( 'yoast_breadcrumb' ) ) {
					yoast_breadcrumb( '<div id="breadcrumbs">', '</div>' );
				}
				?>
            </div>
        </div>
	<?php endif;
}

add_action( 'cws_breadcrumb', 'cws_yoast_breadcrumb_menu' );


/**
 * H1 Title
 *
 * @add_action cws_h1_title
 *
 * @return void
 */
function cws_h1_title_output() {
	if ( ! is_front_page() ) : ?>

        <div class="h1-title">
            <div class="container">
				<?php if ( get_field( 'h1_title' ) ) : ?>

                    <h1><?php the_field( 'h1_title' ) ?></h1>

				<?php elseif ( is_home() ) : ?>

                    <h1><?php the_field( 'h1_title' ) ?></h1>

				<?php else : ?>

                    <h1><?php the_title() ?></h1>

				<?php endif ?>
            </div>
        </div>

	<?php endif;
}

add_action( 'cws_h1_title', 'cws_h1_title_output' );

/**
 * Breaking News
 *
 */
function cws_breaking_news_output() {
	global $post;
	$post_objects = get_field( 'breaking_news' );

	$bn_args = array(
		'post_type'      => 'post',
		'posts_per_page' => 5,
		'category_name'  => 'featured',
	);

	if ( $post_objects ): ?>

        <div class="breaking-news">

            <h3 class="uppercase">Breaking News</h3>

            <ul class="list">

				<?php foreach ( $post_objects as $post ): ?>
					<?php setup_postdata( $post ); ?>

                    <li>

                        <div class="post-info">

                            <a href="<?php the_permalink() ?>"><?php the_title() ?></a>

                            <span><?php echo get_the_date() ?></span>

                        </div>

                    </li>
				<?php endforeach; ?>

            </ul>

            <a class="btn btn-std" href="/blog/">View All News</a>

        </div>

		<?php wp_reset_postdata();
	else:
		$bn_query = new WP_Query( $bn_args );

		if ( $bn_query->have_posts() ): ?>

            <div class="breaking-news">

                <h3 class="uppercase">Breaking News</h3>

                <ul class="list">

					<?php while ( $bn_query->have_posts() ): $bn_query->the_post(); ?>
                        <li>
                            <div class="post-info">
                                <a href="<?php the_permalink() ?>"><?php the_title() ?></a>
                                <span><?php echo get_the_date() ?></span>
                            </div>
                        </li>
					<?php endwhile; ?>

                </ul>

				<?php wp_reset_postdata(); ?>

                <a class="btn btn-std" href="/blog/">View All News</a>

            </div>

		<?php endif; ?>

	<?php
	endif;
}

add_action( 'cws_breaking_news', 'cws_breaking_news_output' );

function cws_useful_info_columns_output() {
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

        <div class="useful-info-columns">

			<?php if ( $title ) : ?>

                <h3 class="uppercase"><?php echo esc_html( $title ) ?></h3>

			<?php else : ?>

                <h3 class="uppercase">Useful Information</h3>

			<?php endif ?>

            <ul class="list">
				<?php foreach ( $post_objects as $post_object ) : ?>
                    <li>
                        <div class="post-info">
                            <a href="<?php echo get_permalink( $post_object->ID ) ?>"><?php echo get_the_title( $post_object->ID ) ?></a>
                        </div>
                    </li>
				<?php endforeach; ?>
            </ul>

            <a class="btn btn-std" href="/blog/">View All Articles</a>

        </div>

	<?php
	endif;
}

add_action( 'cws_useful_info_columns', 'cws_useful_info_columns_output' );


/**
 * Popular Post
 *
 */
function cws_popular_post_output() {


	$post_objects = get_field( 'breaking_news' );

	$bn_args = array(
		'post_type'      => 'post',
		'orderby'        => 'rand',
		'posts_per_page' => 1,
	);

	$bn_query = new WP_Query( $bn_args );

	if ( $bn_query->have_posts() ): ?>

        <div class="sidebar-holder popular-post-holder">

            <div class="sidebar-title">Popular Post</div>

            <div class="inner-holder">

				<?php while ( $bn_query->have_posts() ): $bn_query->the_post(); ?>


					<?php
					//dump($bn_query->the_post());

					?>

                    <div class="post-wrap">

                        <h4><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></h4>

                        <div class="post-meta">
                            <span class="author-meta" itemprop="name">By <?php the_author_posts_link(); ?></span>
							<?php if ( get_the_category() ): ?>
                                <span class="separator">|</span> <?php the_category(); ?>
							<?php endif; ?>

                        </div>

						<?php if ( has_post_thumbnail() ) : ?>
                            <div class="image-holder">
								<?php the_post_thumbnail( 'medium' ) ?>
                            </div>
						<?php endif; ?>

						<?php echo excerpt( 25 ); ?>

                    </div>

                    <a class="btn btn-std-sm" href="<?php the_permalink() ?>">Continue Reading</a>

				<?php endwhile; ?>

            </div>

			<?php wp_reset_postdata(); ?>


        </div>

	<?php endif;
}

add_action( 'cws_popular_post', 'cws_popular_post_output' );