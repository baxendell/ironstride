<?php
/**
 * Hero Home Partial
 */

?>

<section class="hero hero-home">

    <video autoplay="true" muted="muted" loop="" class="fillWidth fadeIn animated d-none d-xl-block" poster="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/banner-video.png" id="video-background">
        <source src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/video/is-header-clip.mp4" type="video/mp4">
        Your browser does not support the video tag. Please upgrade your browser.
    </video> 

    <div class="container-fluid">

        <div class="header row">

            <div class="col-12 d-flex header-container">

                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand site-logo" href="/" itemprop="url">
                    <img itemprop="logo" class="logo img-fluid" src="<?php echo esc_url( get_stylesheet_directory_uri() ) ?>/assets/images/ironstride-marketing-logo.png" alt="ironstride marketing">
                </a>

            </div>

        </div>

        <div class="hero-title-wrap row">

            <div class="offset-xl-1 col-xl-6 pr-xl-0">

                <div class="hero-title-top"><?php the_field('banner_title') ?></div>

                <h1 class="hero-title"><?php h1_title() ?></h1>

                <div class="hero-title-bottom"><?php the_field('banner_subtitle') ?></div>

                <a class="btn btn-1" href="/services/">How We Do It</a>

            </div>

        </div>

        <?php if( have_rows('banner_services') ): $i=0;  ?>

        <div class="hero-services row">

            <div class="col-xl-8 d-md-flex">

            <?php while ( have_rows('banner_services') ) : the_row(); $i++;
                $img = get_sub_field('banner_service_icon');

            ?>

                <div class="px-3">

                    <a class="hero-services-title hero-services-<?php echo $i ?>" href="<?php the_sub_field('banner_service_link') ?>"><span><?php the_sub_field('banner_service_title'); ?></span> <img src="<?php echo $img['url'] ?>" alt="<?php echo $img['alt'] ?>"/></a>

                    <p><?php the_sub_field('banner_service_excerpt') ?></p>

                </div>

            <?php endwhile; ?>

            </div>

        </div>

        <?php endif ?>        

    </div>

</section>







