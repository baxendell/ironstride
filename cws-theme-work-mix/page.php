<?php
/**
 * Page Template
 *
 * Page action methods found in inc/set-vars-hooks.php
 */
get_header();
?>

<?php if ( is_page( 'site-map' ) ) : ?>
	<?php get_template_part( 'partials/sitemap' ) ?>
<?php else : ?>
	<?php get_template_part( 'partials/standard-page' ) ?>
<?php endif ?>

<?php //get_template_part( 'partials/section-call-to-action' ); ?>

<?php get_footer(); ?>