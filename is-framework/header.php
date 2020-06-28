<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
    <meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ) ?>">
    <title><?php wp_title( '-', true, 'right' );
		echo esc_html( get_bloginfo( 'name' ) ) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"/>
    <meta name="format-detection" content="telephone=no">
    <link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ) ?>">
	<?php get_template_part( 'partials/favicons' ) ?>

    <link href="#" rel="publisher"/>
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@400;700&display=swap" rel="stylesheet">

    <?php wp_head(); ?>

	<?php
	$post_slug = $post->post_name;
	$page_slug = 'page-' . $post_slug;
	$post_id   = 'post-id-' . $post->ID;
	$classes   = array( $page_slug, $post_id );
	?>
    <!-- Google Tag Manager -->

</head>
<body id="top-page" <?php body_class( $classes ) ?>>
<a href="#main-wrapper" class="skiplink" tabindex="-1">Skip Navigation</a>
<!-- Google Tag Manager (noscript) -->

<nav id="nav-mobile" class="navbar d-none">

    <div class="container-fluid">

        <div class="row">

            <div class="col-12 d-flex">

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand site-logo" href="/" itemprop="url">
                    <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/ironstride-marketing-logo.png" alt="ironstride marketing">
                </a>

            </div>

            <div class="col-12">

                <?php
                wp_nav_menu(
                    array(
                        'container'       => 'div',
                        'container_class' => 'collapse navbar-collapse',
                        'container_id'    => 'navbarsExample09',
                        'theme_location'  => 'mobile-menu',
                        'menu_class'      => 'navbar-nav mobile-menu',
                        'walker'          => new Walker_Nav_Primary(),
                    )
                );
                ?>

            </div>

        </div>

    </div>
</nav>

<?php
if ( is_front_page( ) ) {
	get_template_part( 'partials/hero-home' );
} else {
	get_template_part( 'partials/hero' );
}
?>

<?php
if ( ! is_front_page() ) {
	get_template_part( 'partials/breadcrumbs' );
}
?>

<div class="main-wrapper" id="main-wrapper">