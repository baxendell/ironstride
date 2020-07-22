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

            <div class="col-lg-3 offset-lg-3 text-md-right">

            	<a class="btn btn-1" href="/contact/">Let's Talk</a>

        	</div>

        </div>

    </div>

</section>

<section class="hero hero-internal">

        <div class="container">

        	<div class="row align-items-center">

        		<div class="col text-center">

        			<h1><?php the_title() ?></h1>

                    <span class="hero-subtitle"><?php the_field('banner_title') ?></span>

    			</div>

			</div>

		</div>

    </div>

</section>