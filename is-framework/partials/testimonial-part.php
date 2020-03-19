<?php

$post_objects = get_field('testimonials');

if( $post_objects ): ?>

<section class="testimonials-section">

    <div class="testimonials-section-item">

       <?php the_content() ?>

        <cite><?php the_title() ?></cite>

    </div>

</section>

<?php wp_reset_postdata(); endif; ?>