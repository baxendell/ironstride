<?php
    $args = array(
        'post_type' => 'attorney',
        //'posts_per_page' => -1,
        'posts_per_page' => 1,
         'orderby' => 'menu_order',
         'order' => 'ASC'
    );

    $query = new WP_Query($args);

    if($query->have_posts()): $i=0; 
?>

<div class="sidebar-team sidebar-widget text-center">

    <div class="sidebar-title"><?php the_field('team_widget_title', 'option') ?></div>


    <?php while($query->have_posts()): $query->the_post();

        $i ++;
    ?>
        <div class="item">

            <a href="<?php the_permalink() ?>">

                <?php the_post_thumbnail('medium') ?>

                <p><?php the_title() ?><br/><span><?php the_field('position') ?></span></p>
            </a>

            <a class="arrow-link" href="<?php the_permalink() ?>">View Full Profile</a>

        </div>

    <?php endwhile; wp_reset_postdata(); ?>

</div>
<?php endif ?>