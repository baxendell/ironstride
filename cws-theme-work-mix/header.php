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

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,600i,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,600,700,700i,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Libre+Franklin" rel="stylesheet">

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

<div class="header">

    <div class="top-header-mobile d-block d-md-none">

        <div class="container">

            <nav id="nav-mobile" class="navbar">

                <a class="navbar-brand site-logo" href="/" itemprop="url">
                    <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/logo.svg" alt="logo">
                </a>

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

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
            </nav>
        </div>

    </div>

    <div class="top-header-desktop">

        <div class="container d-none d-md-block">

            <div class="row">

                <div class="site-logo-wrap col-md-8" itemscope itemtype="http://schema.org/Organization">
                    <a class="site-logo" href="/" itemprop="url">
                        <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/logo.svg" alt="logo">
                    </a>
                </div>

                <div class="col-md-4">
                    <a href="tel:<?php only_numbers( get_field( 'site_phone_number', 'option' ) ); ?>" class="contact-phone">
                        <span class="text-uppercase">Call for immediate help</span>
                    </a>
                </div>

            </div>

        </div>


    </div>

</div>

<nav id="nav-desktop" class="navbar navbar-expand-md d-none d-md-block">

	<?php wp_nav_menu(
		array(
			'container'       => 'div',
			'container_class' => 'menu-container',
			'theme_location'  => 'header-menu',
			'menu_class'      => 'navbar-nav header-menu',
			'walker'          => new Walker_Nav_Primary(),
		)
	) ?>

</nav>

<?php
if ( is_singular( 'attorney' ) ) {
	get_template_part( 'partials/hero-bio' );
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