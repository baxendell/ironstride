<?php

$post_objects = get_field('testimonials');

if( $post_objects ): ?>

<section class="testimonials-section">

	<?php foreach ( $post_objects as $post ): ?>
		<?php setup_postdata( $post ); ?>

	    <div class="testimonials-section-item">

	       <?php the_content() ?>

	        <cite><?php the_title() ?></cite>

	    </div>

	<?php endforeach; ?>

</section>

<?php wp_reset_postdata(); endif; ?>