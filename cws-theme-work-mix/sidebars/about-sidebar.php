<?php
/**
 * Sidebar template containing the primary widget area.
 *
 * Sidebar action methods are found in inc/sidebar-hooks.php
 *
 * @package WordPress
 * @subpackage CWS_Custom_Theme
 * @since CWS Custom Theme 1.0.0
 */
?>

<div class="sidebar-widget sidebar-widget__alt sidebar-related">

	<?php do_action( 'cws_related_info' ) ?>

</div>

<div class="sidebar-widget sidebar-widget__alt sidebar-coa">

	<div class="sidebar-title">Get A Free Consultation</div>

	<strong><?php the_field('site_phone_number', 'option');?></strong>

	<a class="btn btn-std" href="/contact-us/">Contact Us Now</a>

</div>