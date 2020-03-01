<?php
/**
 * Banner Form partial
 */
?>

<div class="container">

    <div class="row">

        <div id="contact-form-container" class="clearfix">

            <div class="col-md-8 col-lg-8">

                <form class="contact-form bshadow-darker" action="" method="POST">

                    <fieldset>

                        <div class="form-group">
                            <input name="name" type="text" placeholder="FULL NAME" class="form-control">
                        </div>

                        <div class="form-group required">
                            <input name="phone_or_email" type="phone_or_email" placeholder="EMAIL OR PHONE" class="form-control" required>
                            <span class="d-none d-md-block required-text uppercase">(REQUIRED)</span>
                        </div>

                        <div class="form-group d-none d-lg-block">

                            <select name="best_time" class="selectpicker form-control show-menu-arrow">
                                <option data-hidden="true">BEST TIME TO CONTACT YOU</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Night</option>
                            </select>

                        </div>

                        <div class="form-group d-block d-lg-none">

                            <select name="best_time" class="selectpicker form-control show-menu-arrow" data-mobile="true">
                                <option data-hidden="true">BEST TIME TO CONTACT YOU</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Night">Night</option>
                            </select>

                        </div>

                        <div class="form-group">
                            <textarea name="message" cols="10" placeholder="WHAT CAN WE HELP YOU WITH?" class="form-control"></textarea>
                        </div>

                        <div class="form-group required">
                            <input type="checkbox" value="agree" name="agree" required class="form-control" checked/>
                            <span class="terms">I understand and agree to the <a href="/disclaimer/">Terms and Conditions</a>.</span> <span class="required-alt">(required)</span>
                        </div>

                        <p class="text-center">
                            <button class="btn text-uppercase btn-wide op-lt-teal remove-decoration" name="submit" type="submit"><span>SEND TO OUR ATTORNEYS</span></button>
                        </p>

                    </fieldset>

                </form>

            </div>

            <!-- TEXT -->
            <div class="contact-text col-md-4 col-lg-4">
                <h2>Our Location</h2>
                <hr/>
				<?php the_field( 'contact_location' ) ?>
                <hr/>
				<?php the_field( 'contact_numbers' ) ?>
                <hr/>
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post() ?>
                        <div>
							<?php the_content() ?>
                        </div>
					<?php endwhile ?>
				<?php endif ?>
            </div>
            <!-- TEXT -->

        </div>

    </div>

</div>