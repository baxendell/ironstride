<ul class="list-inline text-uppercase mobile-btns text-center">
    <li><a href="tel:<?php only_numbers( get_field( 'site_phone_number', 'option' ) ); ?>" class="btn tap-btn">Tap to Call</a></li>
    <li><a href="<?php the_field( 'map_link', 'option' ) ?>" class="btn directions-btn" target="_blank">Directions</a></li>
</ul>