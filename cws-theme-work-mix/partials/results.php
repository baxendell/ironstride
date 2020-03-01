<section class="results-part">

    <div class="container">

        <div class="heading-part">

			<?php if ( ! get_field( 'results_heading' ) ): ?>
				<?php if ( is_singular( 'attorney' ) ): ?>
                    Personal Successes
				<?php else: ?>
                    Our Case Results
				<?php endif; ?>
			<?php else: ?>
				<?php the_field( 'results_heading' ); ?>
			<?php endif; ?>

        </div>

        <div class="results-slider">

            <div class="grid grid-results">

				<?php
				$post_objects = get_field( 'personal_results' );

				if ( $post_objects ): ?>

					<?php foreach ( $post_objects as $post ): // variable must be called $post (IMPORTANT) ?>
						<?php setup_postdata( $post ); ?>

                        <div class="item">
                            <div class="amount"><?php the_field( 'amount_results' ); ?></div>
                            <div class="value"><?php the_field( 'volume_results' ); ?></div>
                            <p>
								<?php
								$term = get_the_terms( $post, 'practice_area_category' );
								echo $term[0]->name;
								?>
                            </p>
                        </div>

					<?php endforeach; ?>

					<?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
				<?php endif; ?>

            </div>

            <div class="custom-nav-results"></div>

        </div>

    </div>

</section>