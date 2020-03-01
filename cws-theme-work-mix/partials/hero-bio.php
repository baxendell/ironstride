<?php
/**
 * Hero Bio Partial
 */

$banner_image = get_field( 'banner_image' );
?>

<section class="hero hero-bio" style="background: url('<?php echo $banner_image; ?>') no-repeat scroll center center #1c4a72;">

    <div class="container">

        <div class="row">

            <div class="col-md-6 col-left">

                <div class="text-wrap">
                    <div class="banner-title"><?php h1_title(); ?></div>
                    <div class="position"><?php the_field( 'position' ) ?></div>
                    <ul>
                        <li class="phone"><a href="tel:<?php echo only_numbers( get_field( 'phone_bio' ) ); ?>"><?php the_field( 'phone_bio' ); ?></a></li>
						<?php if ( get_field('bio_fax') ): ?>
                            <li class="fax"><?php the_field('bio_fax'); ?></></li>
						<?php endif; ?>
                        <li class="email"><a href="mailto:<?php echo antispambot( get_field('email_bio') ); ?>"><?php echo antispambot( get_field('email_bio') ); ?></a></li>
                    </ul>
                    <a href="/contact-us/" class="btn btn-std">Contact Us Now</a>
                </div>

            </div>

            <div class="col-md-5 offset-md-1 col-right">

                <img class="attorney-thumbnail img-fluid" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="attorney image">

            </div>

        </div>

    </div>

</section>







