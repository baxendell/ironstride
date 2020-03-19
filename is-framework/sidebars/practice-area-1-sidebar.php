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

<div id="primary" class="widget-area" role="complementary">

    <ul class="sidebar-widgets">

		<?php do_action( 'cws_related_info' ) ?>

		<?php if ( get_field( 'useful_information' ) ): ?>
            <li class="sidebar-item">
				<?php do_action( 'cws_custom_sidebar' ) ?>
            </li>
		<?php endif; ?>

        <li class="sidebar-item">
			<?php get_template_part( 'sidebars/parts/cta-sidebar' ) ?>
        </li>

    </ul>

</div>