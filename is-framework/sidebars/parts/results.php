<?php
$post_objects = get_field( 'case_results' );

if ( $post_objects ): ?>

<div class="sidebar-results sidebar-widget text-center">

    <div class="sidebar-title">Our Case Results</div>

        <div class="results-slider__sidebar">

            <div class="grid grid-results">

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

            <?php wp_reset_postdata();?>

            </div>

            <div class="custom-nav-results"></div>

        </div>

        <a class="btn btn-std" href="/case-results/">See All Results</a>
        
    </div>

</div>
<?php endif ?>