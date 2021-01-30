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

		<?php if ( is_post_type_archive( 'result' ) || is_singular( 'result' ) || is_tax('practice_area_category') ): ?>
            <li class="sidebar-item">
				<?php get_template_part( 'sidebars/parts/results-categories-sidebar' ); ?>
            </li>
		<?php endif; ?>

        <li class="sidebar-item">
            <div class="sidebar-holder contact-form-holder">

                <div class="sidebar-title">Ready For A Change</div>

                <div class="inner-holder">

                    <div class="form-wrap">

                        <?php get_template_part( 'partials/form' ) ?>

                    </div>

                </div>

            </div>

        </li>

        <li class="sidebar-item"><?php do_action( 'cws_related_info' ) ?></li>

        <li class="sidebar-item"><?php do_action( 'cws_custom_sidebar' ) ?></li>

        <li class="sidebar-item"><?php do_action( 'cws_popular_post' ) ?></li>

    </ul>

</div>
