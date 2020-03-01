<div class="sidebar-holder archives-holder">
    <div class="sidebar-title">Archives</div>
    <ul class="list">
		<?php
		$args = array(
			'type'            => 'yearly',
			'limit'           => 10,
			'format'          => 'html',
			'before'          => '',
			'after'           => '',
			'show_post_count' => false,
			'echo'            => 1,
			'order'           => 'DESC',
			'post_type'       => 'post',
		);
		wp_get_archives( $args );
		?>
    </ul>
</div>