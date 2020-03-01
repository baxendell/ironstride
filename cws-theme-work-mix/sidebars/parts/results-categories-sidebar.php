<div class="sidebar-holder results-categories-holder">
	<div class="sidebar-title">Filter Results by</div>
	<?php
	$terms = get_terms( 'practice_area_category' );
	echo '<ul class="list">';
	foreach ( $terms as $term ) {

		// The $term is an object, so we don't need to specify the $taxonomy.
		$term_link = get_term_link( $term );

		// If there was an error, continue to the next term.
		if ( is_wp_error( $term_link ) ) {
			continue;
		}

		// We successfully got a link. Print it out.
		echo '<li><a href="' . esc_url( $term_link ) . '">' . $term->name . '</a></li>';
	}
	echo '</ul>';
	?>
</div>