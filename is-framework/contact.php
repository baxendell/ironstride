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

            <div class="col-lg-6">

                <div class="pl-4">
                    
                    <?php get_template_part( 'sidebars/parts/locations' ) ?>

                </div>

            </div>

            <div class="col-lg-6">

                <div class="pr-4">

                    <?php the_content() ?>

                    <?php get_template_part( 'partials/form' ) ?>

                </div>

            </div>

        </div>

    </div>

</section>

<?php get_footer() ?>