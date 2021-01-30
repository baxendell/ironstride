<?php $args = array(
	'post_type' => 'staff',
	'posts_per_page' => -1,
	);

$staff_query = new WP_Query($args);

if($staff_query->have_posts()): 
?>

<section class="team">

	<div class="container">

		<div class="row">

			<h2 class="col-12 text-center"><strong>Meet The Team</strong></h2>


			<?php while($staff_query->have_posts()): $staff_query->the_post() ?>

			<div class="col-lg-4 text-center px-5">

				<div class="team-member">

					<a href="<?php the_permalink() ?>"><?php the_post_thumbnail('full') ?></a>

					<h3><?php the_field('position') ?><a href="<?php the_permalink() ?>"><strong><?php the_title() ?></strong></a></h3>

					<?php echo excerpt( 50 ); ?> <a href="<?php echo get_permalink(); ?>"> more</a>

				</div>

			</div>

			<?php endwhile; ?>

		</div>

	</div>

</section>

<?php wp_reset_postdata(); endif; ?>