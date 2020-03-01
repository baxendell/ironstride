<?php
/**
 * CWS Filters
 */

function add_query_vars_filter( $vars ){
  $vars[] = "testimonial_type";
  return $vars;
}
add_filter( 'query_vars', 'add_query_vars_filter' );

/**
 * add async to js
 *
 * @add_filter clean_url
 *
 * @return $url
 */

function cws_async_scripts( $url ) {
	if ( strpos( $url, '#asyncload') === false ) {
		return $url;
	} else if ( is_admin() ) {
		return str_replace( '#asyncload', '', $url );
	} else {
		return str_replace( '#asyncload', '', $url ) . "' async='async";
	}
}
add_filter( 'clean_url', 'cws_async_scripts', 11, 1 );

/**
 * Filter the body class to show front page template if on front page used
 *
 * @add_filter body_class
 * @param $classes array
 *
 * @return $classes array
 */
function cws_class_names( $classes ) {
	// add 'class-name' to the $classes array
	if( is_front_page() ) $classes[] = 'front-page';
	// return the $classes array
	return $classes;
}
add_filter( 'body_class', 'cws_class_names' );

/**
 * Filter length of excerpt
 *
 * @return 20
 *
 * @add_filter excerpt_length
 */
function cws_excerpt_length( $length ) {
	return 50;
}
add_filter( 'excerpt_length', 'cws_excerpt_length', 999 );

/* Custom excerpt lengths */

function excerpt($limit) {
	$excerpt = explode(' ', get_the_excerpt(), $limit);
	if (count($excerpt)>=$limit) {
		array_pop($excerpt);
		$excerpt = implode(" ",$excerpt).'...';
	} else {
		$excerpt = implode(" ",$excerpt);
	}
	$excerpt = preg_replace('`[[^]]*]`','',$excerpt);
	return $excerpt;
}


/**
 * @param $more
 *
 * @return string
 */
function cws_excerpt_more($more) {
	global $post;
	return '...';
}
add_filter('excerpt_more', 'cws_excerpt_more');
