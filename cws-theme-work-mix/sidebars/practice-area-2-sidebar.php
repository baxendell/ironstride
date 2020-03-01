<?php
/**
 * Sidebar template containing the secondary widget area.
 *
 * Sidebar action methods are found in inc/sidebar-hooks.php
 *
 * @package WordPress
 * @subpackage CWS_Custom_Theme
 * @since CWS Custom Theme 1.0.0
 */
?>

<div id="secondary" class="widget-area" role="complementary">

    <ul class="sidebar-widgets">
        <li class="sidebar-item">
	        <?php get_template_part( 'sidebars/parts/cta-sidebar' ) ?>
        </li>
        <li class="sidebar-item">
	        <?php get_template_part( 'sidebars/parts/meet-team' ) ?>
        </li>

    </ul>

</div>