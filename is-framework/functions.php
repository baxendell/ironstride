<?php
/**
 * herrmanandherrman functions and definitions
 *
 * @package herrmanandherrman
 * @since herrmanandherrman 2.0
 * @license GPL 2.0
 */

define( 'JS_VERS', '1.0.2' );
define( 'CSS_VERS', '1.0.2' );

require_once STYLESHEETPATH . '/includes/cws-theme-class.php';
require_once STYLESHEETPATH . '/includes/cws-hooks.php';
require_once STYLESHEETPATH . '/includes/cws-filters.php';
require_once STYLESHEETPATH . '/includes/cws-custom-functions.php';
require_once STYLESHEETPATH . '/includes/cws-shortcodes.php';
require_once STYLESHEETPATH . '/includes/walker.php';
require_once STYLESHEETPATH . '/includes/post-types.php';
require_once STYLESHEETPATH . '/includes/cws-sidebar-hooks.php';
require_once STYLESHEETPATH . '/includes/front-page-hooks.php';
require_once STYLESHEETPATH . '/includes/acf.php';

/**Remove unnecessary WP items**/

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/**
 * Load scripts and styles for the theme
 *
 * @action wp_enqueue_scripts
 *
 * @return void
 */

function mix_scripts() {

	if ( file_exists( get_template_directory() . '/assets/dist/css/theme.css' ) ) {
		wp_enqueue_style( 'mix-theme-css', get_template_directory_uri() . '/assets/dist/css/theme.css', null, filemtime( get_template_directory() . '/assets/dist/css/theme.css' ) );
	}

	if ( file_exists( get_template_directory() . '/assets/dist/js/manifest.js' ) ) {
		wp_enqueue_script( 'mix-manifest-js', get_template_directory_uri() . '/assets/dist/js/manifest.js', null, filemtime( get_template_directory() . '/assets/dist/js/manifest.js' ), true );
	}

	if ( file_exists( get_template_directory() . '/assets/dist/js/vendor.js' ) ) {
		wp_enqueue_script( 'mix-vendor-js', get_template_directory_uri() . '/assets/dist/js/vendor.js', null, filemtime( get_template_directory() . '/assets/dist/js/vendor.js' ), true );
	}

	if ( file_exists( get_template_directory() . '/assets/dist/js/theme.js' ) ) {
		wp_enqueue_script( 'mix-theme-js', get_template_directory_uri() . '/assets/dist/js/theme.js', array( 'jquery' ), filemtime( get_template_directory() . '/assets/dist/js/theme.js' ), true );
	}

	wp_localize_script( 'mix-theme-js',
		'WPsettings',
		array(
			'root'           => esc_url_raw( rest_url() ),
			'nonce'          => wp_create_nonce( 'wp_rest' ),
			'home'           => home_url(),
			'site'           => get_site_url(),
			'current_ID'     => get_the_ID(),
			'theme_path'     => get_template_directory_uri(),
			'ajaxurl'        => admin_url( 'admin-ajax.php' ),
			'posts_per_page' => get_option( 'posts_per_page' ),
		) );

}

add_action( 'wp_enqueue_scripts', 'mix_scripts' );


/**
 * Add theme support for sidebar widgets
 */
function cws_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'CWS Primary Sidebar', 'set-slug' ),
		'id'            => 'set-sidebar',
		'description'   => __( 'Widgets in this area will be shown on all posts and pages, except frontpage.', 'theme-slug' ),
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => __( 'CWS Secondary Sidebar', 'set-slug' ),
		'id'            => 'set-sidebar-two',
		'description'   => __( 'This is a secondary sidebar to house widgets after a page break.', 'theme-slug' ),
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li>',
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => '</h2>',
	) );
}

add_action( 'widgets_init', 'cws_widgets_init' );

/**
 * Add header and footer menus
 *
 * @add_action init
 */
function cws_register_menus() {
	register_nav_menus(
		array(
			'header-menu' => __( 'Header Menu' ),
			'footer-menu' => __( 'Footer Menu' ),
			//'sub-footer-menu' => __( 'Sub Footer Menu' ),
			'mobile-menu' => __( 'Mobile Menu' ),
		)
	);
}

add_action( 'init', 'cws_register_menus' );

/**
 * Add an acf options page
 */
if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page();
}

/**
 * Add excerpt support to pages
 */

add_post_type_support( 'page', 'excerpt' );

/**
 * Add featured images
 */

function wpse_setup_theme() {
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'blog-sm', 91, 58, true );
	add_image_size( 'attorney-sb', 360, 458, true );
	add_image_size( 'attorney-feature', 264, 343, true );
	add_image_size( 'attorney-md', 390, 431, true );
}

add_action( 'after_setup_theme', 'wpse_setup_theme' );

/**
 * Custom svg
 *
 * @param $icon string
 *
 * @return string
 */
function cws_get_svg( $icon = "string" ) {
	$icon_path = get_template_directory_uri() . "/assets/images/" . $icon;
	echo file_get_contents( $icon_path );
}

function cws_get_svg_return( $icon = "string" ) {
	$icon_path = get_template_directory_uri() . "/assets/images/" . $icon;

	return file_get_contents( $icon_path );
}

function dump( $value ) {
	echo '<pre>';
	var_dump( $value );
	echo '</pre>';
}

//Get page ID from slug
// Usage:
// get_id_by_slug('any-page-slug');

function get_id_by_slug( $page_slug ) {
	$page = get_page_by_path( $page_slug );
	if ( $page ) {
		return $page->ID;
	} else {
		return null;
	}
}

function only_numbers( $tel ) {
	$res = preg_replace( "/[^0-9]/", "", $tel );
	echo $res;
}

add_filter( 'upload_mimes', 'custom_upload_mimes' );
function custom_upload_mimes( $existing_mimes = array() ) {
	// add your extension to the array
	$existing_mimes['vcf'] = 'text/x-vcard';

	return $existing_mimes;
}

/*
|--------------------------------------------------------------------------
| Prepare REST
|--------------------------------------------------------------------------
*/

function prepare_rest( $data, $post, $request ) {

	$_data = $data->data;

	// Thumbnails
	$thumbnail_id       = get_post_thumbnail_id( $post->ID );
	$thumbnail_src_full = wp_get_attachment_image_src( $thumbnail_id, 'full' );

	// Author
	$author     = get_the_author();
	$author_url = get_author_posts_url( get_the_author_meta( 'ID' ), get_the_author_meta( 'user_nicename' ) );

	//Categories
	$categories = get_the_category( $post->ID );

	//Date

	$format_date = date( 'F j, Y', strtotime( $post->modified ) );

	$_data['featured_media_src_full'] = $thumbnail_src_full[0];
	$_data['author_name']             = $author;
	$_data['author_posts_url']        = $author_url;
	$_data['cats']                    = $categories;
	$_data['format_date']             = $format_date;

	//Back to data
	$data->data = $_data;

	return $data;

}

add_filter( 'rest_prepare_post', 'prepare_rest', 10, 3 );

function filter_post() {
  $catSlug = $_POST['category'];

  if($catSlug == "all") {
  	$ajaxposts = new WP_Query([
	    'post_type' => 'post',
	    'post_status' => 'publish',
	    'posts_per_page' => 1, 
	    'orderby' => 'post_date', 
	    'order' => 'desc',
	    'paged' => $_POST['page']
	]);
  } else {
	$ajaxposts = new WP_Query([
	    'post_type' => 'post',
	    'post_status' => 'publish',
	    'posts_per_page' => 1, 
	    'category_name' => $catSlug,
	    'orderby' => 'post_date', 
	    'order' => 'desc',
	    'paged' => $_POST['page']
	]);
  }

  $response = '';

  if($ajaxposts->have_posts()) {
    while($ajaxposts->have_posts()) : $ajaxposts->the_post();
    	$response .= "<article class='post-excerpt'>
            <div class='blog-post clearfix' itemprop='blogPost' itemscope itemtype='https://schema.org/BlogPosting'>";

				$category      = get_the_category_list( ', ', $post->ID );
				$category      = get_the_category( $post->ID );
				$category_name = $category[0]->name;
				$category_id   = $category[0]->term_id;
				$link          = get_category_link( $category_id );			

				$response .= "<div class='post-wrap'>
                        <div class='blog-excerpt' itemprop='articleBody'>";

				if ( has_post_thumbnail( $post->ID ) ) {
                    $response .="<div class='image-holder'>
                        <div itemprop='image' itemscope itemtype='https://schema.org/ImageObject'>
                                <meta itemprop='url' content='".get_the_post_thumbnail_url()."'>
                                <meta itemprop='width' content='335'>
                                <meta itemprop='height' content='246'>
								<a href='".get_the_permalink()."'><img src='".get_the_post_thumbnail_url($post->ID,'medium')."'/></a>
                            </div>
                        </div>";				
                }

                if($category_name) {
                    $response .="<div class='post-meta' itemprop='author'><a href='".$link."'>".$category_name."</a></div>";
                }

                $response .="<div class='title-wrap'>
                        <h2 itemprop='name headline' class='page-title'><a href='".get_the_permalink()."'>".get_the_title()."</a></h2>
                    </div><div class='excerpt-content' itemprop='mainEntityOfPage'>".get_the_excerpt()."</div></div></div></div></article>";
    endwhile;
  } else {
    $response = 'empty';
  }

  echo $response;
  exit;
}
add_action('wp_ajax_filter_post', 'filter_post');
add_action('wp_ajax_nopriv_filter_post', 'filter_post');