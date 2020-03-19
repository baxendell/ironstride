<?php
/**
 * Hero Home Partial
 */

?>

<section class="hero hero-home">

    <!--video-->

    <div class="header">

        <div class="container">

            <div class="col-12">

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="site-logo-wrap col-md-8" itemscope itemtype="http://schema.org/Organization">
                <a class="site-logo" href="/" itemprop="url">
                    <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/logo.svg" alt="logo">
                </a>
            </div>

        </div>

    </div>

    <div class="hero-title-wrap">

        <div class="container">

            <div class="row">

                <div class="pl-5 col-lg-4 pr-0">

                    <div class="hero-title-top">

                        <?php the_field('banner_title') ?>

                    </div>

                    <h1 class="hero-title"><?php h1_title() ?></h1>

                    <div class="hero-title-bottom"><?php the_field('banner_subtitle') ?></div>

                    <a class="btn btn-1" href="#">How We Do It</a>

                </div>

            </div>

        </div>

    </div>

    <?php if( have_rows('banner_services') ): ?>

    <div class="hero-services">

        <div class="container">

            <div class="row">

                <?php while ( have_rows('banner_services') ) : the_row(); ?>

                <div class="col">

                    <a class="hero-services-title" href="<?php the_sub_field('banner_service_link') ?>"><?php the_sub_field('banner_service_title'); ?></a>

                    <p><?php the_sub_field('banner_service_excerpt') ?></p>

                </div>

                <?php endwhile; ?>

            </div>

        </div>

    </div>

    <?php endif ?>

</section>







