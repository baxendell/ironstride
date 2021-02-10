<section class="about-cta">

    <div class="container">

        <div class="row justify-content-center">

            <div data-aos="fade-up" class="col-lg-10 col-xl-8">

                <?php if(get_field('cta_text')) {
                    the_field('cta_text');
                ?>
                <a class="btn btn-1" href="/contact/">Let's Talk</a>
                
                <?php
                } elseif(is_page_template('contact.php')) {
                ?>

                <p>We’re always seeking motivated and talented folks. If you have something we need to hear about, send us a message and get our attention.</p>
                <a class="arrow-link blue"><span>Email Us</span></a>

                <?php
                }

                else {
                ?>

                <strong>ready for a change?</strong> lets talk results.
                <a class="btn btn-1" href="/contact/">Let's Talk</a>
                <?php
                }
                ?>

            </div>

        </div>

    </div>

</section>