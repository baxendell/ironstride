<?php 
	// Lates News Query
	$post_objects = get_field('latest_news');

	if( $post_objects ): 

		foreach( $post_objects as $post_object):

	        $post_id = $post_object->ID;

	        $post_ids[] = $post_id;

	    endforeach; 

    wp_reset_postdata();

    endif;    

    // Query Args
	$args = array (
	'post_type' => 'post',
	'posts_per_page' => 3,
	'post__in' => ((empty($post_ids)) ? array() : $post_ids),
	'orderby' => ((empty($post_ids)) ? 'ID' : 'post__in'),
	'order' => 'DESC'
	);
	
	$post_query = new WP_Query($args);

?>

<?php if($post_query->have_posts()): ?>

<section class="news">

	<div class="container">		

		<div class="row">

			<h2 class="col text-center"><strong>The Latest Industry News</strong></h2>

		</div>

		<div class="row">

			<div class="col-lg-11">

				<div class="row">

			<?php while($post_query->have_posts()): $post_query->the_post(); 
					$category      = get_the_category( $post->ID );
					$category_name = $category[0]->name;
					$category_id   = $category[0]->term_id;
					$link          = get_category_link( $category_id );
			?>

			<div data-aos="flip-up" class="offset-md-1 col-md-3">

				<div class="news-block text-center">

					<a class="news-category" href="<?php echo $link ?>"><?php echo $category_name ?>

					<a href="<?php the_permalink() ?>"><?php the_post_thumbnail('thumb', array('class'=>'mt-2')) ?></a>

					<a class="news-title" href="<?php the_permalink() ?>"><?php the_title() ?></a>

				</div>

			</div>

			<?php endwhile; ?>

				</div> <!-- /.col -->

			</div> <!-- /.row -->

		</div>

		<div class="row">

			<div class="col text-center">

				<a class="btn btn-1" href="/blogs/">See All News</a>

			</div>

		</div>

	</div>

</section>

<?php wp_reset_postdata(); endif; ?>