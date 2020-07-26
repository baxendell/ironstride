<?php
/**
 * Template Name: Services
 */
get_header() ?>

    <section class="main-content">

        <div class="container">

            <div class="row bubble-block">

                <article class="col-12 col-xl-6 pl-lg-5 pr-lg-5 entry-content">

                    <h2 class="orange"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                    <?php if ( have_posts() ) : ?>

                        <?php while ( have_posts() ) : the_post() ?>

                            <?php the_content(); ?>

                        <?php endwhile; ?>

                    <?php endif; ?>

                    <a class="orange arrow-link" href="/our-work/"><span>Explore Our Services</span></a>

                </article>

                <aside class="col-12 col-lg-5 col-xl-6 pl-lg-4 sidebar">

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="image-holder">
                            <?php the_post_thumbnail( 'full' ) ?>
                        </div>
                    <?php endif; ?>

                </aside>

            </div>

        </div>

    </section>

    <section class="services">

        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">strategy & branding</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">creative & design</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">media planning</a>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                <div class="container">

                    <div class="row">

                        <div class="col-lg-5 text-center">

                            <?php the_field('strategy_tab_title') ?>

                        </div>

                        <div class="offset-lg-1 col-lg-6">

                            <?php if( have_rows('strategy_tab_list') ):while ( have_rows('strategy_tab_list') ) : the_row(); ?>

                            <div class="services-title__sm"><?php the_sub_field('strategy_list_title') ?></div>

                            <div class="services-list"><?php the_sub_field('strategy_list_content') ?></div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>

            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                
                <div class="container">

                    <div class="row">

                        <div class="col-lg-5 text-center">

                            <?php the_field('creative_tab_title') ?>

                        </div>

                        <div class="offset-lg-1 col-lg-6 d-flex">

                            <?php if( have_rows('creative_tab_list') ):while ( have_rows('creative_tab_list') ) : the_row(); ?>

                            <div class="services-title__sm"><?php the_sub_field('creative_list_title') ?></div>

                            <div class="services-list"><?php the_sub_field('creative_list_content') ?></div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>

            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                
                <div class="container">

                    <div class="row">

                        <div class="col-lg-5 text-center">

                            <?php the_field('media_tab_title') ?>

                        </div>

                        <div class="offset-lg-1 col-lg-6">

                            <?php if( have_rows('media_tab_list') ):while ( have_rows('media_tab_list') ) : the_row(); ?>

                            <div class="services-title__sm"><?php the_sub_field('media_list_title') ?></div>

                            <div class="services-list"><?php the_sub_field('media_list_content') ?></div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>
        </div>

    </section>

    <section class="ways-work">

        <div class="container">

            <div class="row">

                <div class="col-12">

                    <?php the_field('3_ways_content') ?>

                </div>

            </div>

            <div class="row">

                <div class="col-12 d-flex">

                    <?php if( have_rows('3_ways_blocks') ):while ( have_rows('3_ways_blocks') ) : the_row(); ?>

                    <div class="col-lg-4 ways-work-item">

                        <?php $blockImg = get_sub_field('block_image') ?>

                        <img src="<?php echo $blockImg['url'] ?>" alt="<?php echo $blockImg['url'] ?>"/>

                        <div class="ways-work-title"><?php the_sub_field('block_title') ?></div>

                        <p><?php the_sub_field('block_text') ?></p>

                        <a class="arrow-link" href="<?php the_sub_field('block_link') ?>"><?php the_sub_field('block_button_text') ?></a>

                    </div>

                    <?php endwhile; endif; ?>

                </div>

            </div>

        </div>

    </section>

    <section class="bubble-container"> 

        <div class="container">

            <div class="row">

                <div class="pl-5 col-md-11">

                    <div class="cta-bubble">

                        <div class="cta-bubble-content">

                            <div class="cta-bubble-title"><?php the_field('call_out_title') ?></div>
                            <?php the_field('call_out_text') ?>

                        </div>

                        <a class="btn btn-1 btn--alt" href="/contact-us/">Let's Talk</a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <?php $post_objects = get_field('featured_case'); if( $post_objects ): ?>

    <section class="case-studies">

        <div class="container">

            <?php $i=0; foreach( $post_objects as $post): setup_postdata($post); 


                $class_text = ($i%2==0) ? "blue" : "darker-green";

            ?>

                <div class="row bubble-block">

                    <div class="col-md-6">

                        <?php the_post_thumbnail( 'full' ) ?>

                    </div>

                    <div class="col-md-6 content">

                        <h2 class="<?php echo $class_text;?>">Case Study <strong><?php the_title() ?></strong></h2>

                        <p><?php the_excerpt() ?></p>

                        <a class="arrow-link <?php echo $class_text;?>" href="<?php echo get_the_permalink() ?>"><span>Read More</span></a>

                    </div>

                </div>

                <?php $i++; endforeach; ?>

                <div class="row">

                    <div class="col text-center">

                        <a class="btn btn-1" href="/portfolio/">See Our Work</a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <?php wp_reset_postdata(); endif; ?>


    <?php get_template_part('partials/cta-bottom') ?>


<?php get_footer() ?>