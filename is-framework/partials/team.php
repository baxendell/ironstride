<?php $args = array(
	'post_type' => 'staff',
	'post_per_page' => -1,
	'orderby'=> 'menu_order',
	);

$staff_query = new WP_Query($args);

if($staff_query->have_posts()): 
?>

<section class="team">

	<div class="container">

		<div class="row">

			<h2 class="section-title text-center">Meet The Team</h2>

			<?php while($staff_query->have_posts()): $staff_query->the_post() ?>

			<div class="col-lg-3">

				<div class="team-member">

					<h3><?php the_title() ?></h3>

					<?php the_excerpt() ?>

				</div>

			</div>

			<?php endwhile; ?>

		</div>

	</div>

</section>

<?php wp_reset_postdata(); endif; ?>