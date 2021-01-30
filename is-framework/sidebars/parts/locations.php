<?php 
$amount = get_field('single_or_multiple_location', 'option');

 

?>

<div class="sidebar-locations">


    <?php if($amount == 'single'):
            $post_object = get_field('location', 'option');
            if( $post_object ): 
            $post = $post_object;
            setup_postdata( $post );
    ?>
    <div class="contact-address" itemscope="" itemtype="http://schema.org/Dentist">

      <div class="contact-map mb-5">

        <a href="https://goo.gl/maps/TCEKr1mkQzhDWn1w8" target="_blank">

            <img src="<?php bloginfo('template_url') ?>/assets/images/iron-stride-map.jpg" alt="ironstride marking"/>

        </a>

      </div>

      <strong itemprop="name">IronStride Marketing & Digital Co</strong>
      <a href="https://goo.gl/maps/TCEKr1mkQzhDWn1w8" target="_blank">
        <address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress"><?php the_field('location_address_1') ?> <?php if(get_field('location_address_2')){echo '<br/>'.the_field('location_address_2');} ?></span><br/>
            <span itemprop="addressLocality"><?php the_field('location_city') ?></span>, <span itemprop="addressRegion"><?php the_field('location_state') ?></span> <span itemprop="postalCode"><?php the_field('location_zipcode') ?></span><br/>
        </address>
      </a>

      <span itemprop="telephone"><a href="tel:<?php the_field('location_phone') ?>"><?php the_field('location_phone') ?></a></span>
      <span itemprop="email"><?php echo do_shortcode("[email]support@ironstridemarketing.com[/email]"); ?></span>
    </div>

    <?php endif; wp_reset_postdata(); endif; ?>

</div>