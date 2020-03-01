<?php

$awards_args = array(
	'post_type'      => 'awards',
	'posts_per_page' => - 1,
	'orderby'        => 'menu_order',
	'order'          => 'ASC',
);

$awards_query = new WP_Query( $awards_args );

if ( $awards_query->have_posts() ) : ?>

    <section id="awards-part" class="awards-part">

        <div class="container">

            <div class="section-title">Awards & Memberships</div>

            <div class="row">

                <div class="awards-wrap col-12 sameHeight">

					<?php while ( $awards_query->have_posts() ): $awards_query->the_post(); ?>

                        <div class="slide item">
                            <div class="img-holder">
	                            <?php if ( get_field( 'script' ) ): the_field( 'script' ); else: ?>
                                    <a href="<?php the_field( 'award_link' ) ?>" target="_blank">
			                            <?php the_post_thumbnail( 'full' ); ?>
                                    </a>
	                            <?php endif; ?>
                            </div>
                        </div>

					<?php endwhile;
					wp_reset_postdata(); ?>

                </div>

                <div class="custom-nav-awards sameHeight"></div>

            </div>

        </div>

    </section>

<?php endif;
wp_reset_postdata(); ?>
