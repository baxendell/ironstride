<?php

$post_objects = get_field('testimonials');

if( $post_objects ): ?>

<section class="testimonials-section">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-11 col-xl-10">

                <div class="testimonials-section-wrap text-center">

                    <div class="testimonials-section-title"><?php the_field('testimonial_section_title') ?></div>

                    <div class="testimonials-section-slider">

                        <?php foreach( $post_objects as $post): setup_postdata($post); ?>

                        <div class="testimonials-section-item">

                           <?php the_excerpt() ?>

                            <cite><?php the_title() ?></cite>

                        </div>

                        <?php endforeach; ?>

                    </div>

                    <div class="custom-nav-test sameHeight"></div>

                    <a class="arrow-link" href="/testimionials/">See More Testimonials</a>

                </div>

            </div>

        </div>

    </div>

</section>

<?php wp_reset_postdata(); endif; ?>