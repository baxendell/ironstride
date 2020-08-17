<section class="about-cta">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-10 col-xl-8">

                <?php the_field('cta_text') ?>

                <?php if(is_page_template('contact.php')): ?>

                <p>We’re always seeking motivated and talented folks. If you have something we need to hear about, send us a message and get our attention.</p>
                <a class="arrow-link blue"><span>Email Us</span></a>

            	<?php else: ?>

                <a class="btn btn-1" href="/contact-us/">Let's Talk</a>

            	<?php endif ?>

            </div>

        </div>

    </div>

</section>