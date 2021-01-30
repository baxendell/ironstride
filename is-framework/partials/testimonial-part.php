<?php

$post_objects = get_field('testimonials');

if( $post_objects ): ?>

<div class="testimonials-section"> 

	<div class="testimonials-section-slider">

	<?php foreach ( $post_objects as $post ): ?>
		<?php setup_postdata( $post ); ?>

	    <div class="testimonials-section__item">

	       <?php echo get_the_content() ?>

	        <cite><?php the_title() ?></cite>

	    </div>

	<?php endforeach; ?>

	</div>

	<div class="custom-nav-test"></div>

</div>

<?php wp_reset_postdata(); endif; ?>