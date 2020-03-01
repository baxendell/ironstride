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
        <li class="sidebar-item"><?php get_template_part( 'sidebars/parts/search-form-sidebar' ) ?></li>
        <li class="sidebar-item"><?php get_template_part( 'sidebars/parts/categories-sidebar' ) ?></li>
        <li class="sidebar-item"><?php get_template_part( 'sidebars/parts/archives-sidebar' ) ?></li>
    </ul>

</div>