<?php
/**
 * Template Name: Contact
 *
 */
get_header();

$number           = get_field( 'site_phone_number', 'option' );
$formatted_number = preg_replace( '/(\W*)/', '', $number );;
?>

<section class="main-content">

    <div class="container">

        <div class="row">

            <div data-aos="fade-right" class="col-lg-6">

                <div class="pl-md-4">
                    
                    <?php get_template_part( 'sidebars/parts/locations' ) ?>

                </div>

            </div>

            <div data-aos="fade-left" class="col-lg-6">

                <div class="pr-md-4">

                    <?php the_content() ?>

                    <?php get_template_part( 'partials/form' ) ?>

                </div>

            </div>

        </div>

    </div>

</section>

<?php get_footer() ?>