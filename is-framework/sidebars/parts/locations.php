<?php 
$amount = get_field('single_or_multiple_location', 'option');

 

?>

<div class="sidebar-locations sidebar-widget">

    <div class="sidebar-title"><?php the_field('location_widget_title', 'option') ?></div>


    <?php if($amount == 'single'):
            $post_object = get_field('location', 'option');
            if( $post_object ): 
            $post = $post_object;
            setup_postdata( $post );
    ?>
    <div class="contact-address" itemscope="" itemtype="http://schema.org/Attorney">

        <strong itemprop="name"><?php the_field('location_firm_name') ?></strong>

        <address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress"><?php the_field('location_address_1') ?> <?php if(get_field('location_address_2')){echo '<br/>'.the_field('location_address_2');} ?></span><br/>
            <span itemprop="addressLocality"><?php the_field('location_city') ?></span>, <span itemprop="addressRegion"><?php the_field('location_state') ?></span> <span itemprop="postalCode"><?php the_field('location_zipcode') ?></span><br/>
        </address>

        <span itemprop="telephone">Phone: <strong><?php the_field('location_phone') ?></strong></span>
        <?php if(get_field('location_fax')): ?>
        <br/><span itemprop="fax">Fax: <strong><?php the_field('location_fax') ?></strong></span><br/>
        <?php endif ?>

        <a class="directions" href="<?php the_field('location_direction')?>" target="_blank">Directions</a>
        <a class="office-hours" data-toggle="modal" data-target="#office-hours">Office Hours</a>

        <!-- Modal -->
        <div class="modal fade" id="office-hours" tabindex="-1" role="dialog" aria-labelledby="officeHours" aria-hidden="true">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <h5 class="modal-title" id="exampleModalLabel">Office Hours</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>

              </div>

              <div class="modal-body">
                <div class="opening-hours" itemscope="" itemtype="http://schema.org/LegalService">

                  <table>
                    <tbody>
                      <?php if ( get_field( 'monday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Monday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'monday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'tuesday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Tuesday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'tuesday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'wednesday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Wednesday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'wednesday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'thursday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Thursday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'thursday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'friday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Friday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'friday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'saturday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Saturday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'saturday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                      <?php if ( get_field( 'sunday_hours' ) ): ?>
                      <tr itemprop="openingHoursSpecification" itemtype="http://schema.org/OpeningHoursSpecification">
                          <td class="day">Sunday</td>
                          <td class="time"><span itemprop="openingHours"><?php the_field( 'sunday_hours' ); ?></span></td>
                      </tr>
                      <?php endif; ?>

                    </tbody>
                  </table>

                </div>  
                            
              </div>

            </div>

          </div>

        </div>

    </div>

    <div class="contact-map">

        <a href="<?php the_field('location_direction')?>" target="_blank">

            <img src="<?php the_field('location_map') ?>" alt="<?php the_field('location_firm_name') ?> location"/>

        </a>

    </div>

    <?php endif; wp_reset_postdata(); endif; ?>

</div>