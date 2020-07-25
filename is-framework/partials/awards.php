<?php

$awards_args = array(
	'post_type'      => 'awards',
	'posts_per_page' => - 1,
);

$awards_query = new WP_Query( $awards_args );

if ( $awards_query->have_posts() ) : ?>

    <section id="awards-part" class="awards-part">

        <div class="container">

            <div class="row align-items-center">

                <div class="col-lg-5 pl-lg-5 pr-lg-4">

                    <h2 class="section-title">Awards &amp; Recognition</h2>

                    <?php the_field('awards_text') ?>

                </div>

                <div class="col-lg-7">

                    <div class="row row-cols-3">

                        <?php while ( $awards_query->have_posts() ): $awards_query->the_post(); ?>

                        <div class="col-lg-4 pl-lg-0">

                            <?php if ( get_field( 'script' ) ): the_field( 'script' ); else: ?>
                            <a href="<?php the_field( 'award_link' ) ?>" target="_blank">
                                <?php the_post_thumbnail( 'full' ); ?>
                            </a>
                            <?php endif; ?>

                        </div>

                        <?php endwhile; wp_reset_postdata(); ?>

                    </div>

                </div>


            </div>

        </div>

    </section>

<?php endif;  ?>
