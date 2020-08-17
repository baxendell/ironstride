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

        <a href="<?php the_field('location_direction')?>" target="_blank">

            <img src="<?php bloginfo('template_url') ?>/assets/images/iron-stride-map.jpg" alt="ironstride marking"/>

        </a>

      </div>

      <strong itemprop="name">IronStride Marketing & Digital Co</strong>

      <address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
          <span itemprop="streetAddress"><?php the_field('location_address_1') ?> <?php if(get_field('location_address_2')){echo '<br/>'.the_field('location_address_2');} ?></span><br/>
          <span itemprop="addressLocality"><?php the_field('location_city') ?></span>, <span itemprop="addressRegion"><?php the_field('location_state') ?></span> <span itemprop="postalCode"><?php the_field('location_zipcode') ?></span><br/>
      </address>

      <span itemprop="telephone"><?php the_field('location_phone') ?></span>
      <br/><span itemprop="email"><a href="mailto:support@ironstridemarketing.com">support@ironstridemarketing.com</a></span>


    </div>

    <?php endif; wp_reset_postdata(); endif; ?>

</div>