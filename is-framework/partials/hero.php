<?php
/**
 * Hero Partial
 */
?>

<section class="header">

    <div class="container">

        <div class="row">

            <div class="col-lg-6 d-flex">

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand site-logo" href="/" itemprop="url">
                    <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/ironstride-marketing-logo.png" alt="ironstride marketing">
                </a>

            </div>

            <div class="d-none d-lg-block col-lg-3 offset-lg-3 text-md-right">

            	<a class="btn btn-1" href="/contact/">Let's Talk</a>

        	</div>

        </div>

    </div>

</section>

<?php if(is_home() || is_singular('post') || is_search()) {
    $title = 'Ironstride Blog';
    $bannerTitle = 'the latest industry news & beyond';
} else {
    $title = get_the_title();
    $bannerTitle = get_field('banner_title');
}
?>
<section class="hero hero-internal">

        <div class="container">

        	<div class="row align-items-center">

        		<div class="col text-center">

                    <?php if(is_singular('post')): ?>

                    <div class="hero-blog-title"><?php echo $title ?></div>

                    <?php elseif(is_category()): ?>

                    <h1><?php the_archive_title() ?></h1>

                    <?php else: ?>

        			<h1><?php echo $title; ?></h1>

                    <?php endif ?>

                    <span class="hero-subtitle"><?php echo $bannerTitle; ?></span>

    			</div>

			</div>

		</div>

    </div>

</section>