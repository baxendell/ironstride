<?php
/**
 * Template Name: Services
 */
get_header() ;
$tempUrl = get_stylesheet_directory_uri();
?>

    <section class="main-content">

        <div class="container">

            <div class="row bubble-block">

                <article class="col-12 col-lg-7 col-xl-6 pl-lg-5 pr-lg-5 entry-content">

                    <h2 class="orange"><?php the_field('section_1_subtitle') ?> <strong><?php the_field('section_1_title') ?></strong></h2>

                    <?php if ( have_posts() ) : ?>

                        <?php while ( have_posts() ) : the_post() ?>

                            <?php the_content(); ?>

                        <?php endwhile; ?>

                    <?php endif; ?>

                </article>

                <aside class="col-12 col-lg-5 col-xl-6 pl-lg-4 sidebar d-none d-lg-block">

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
            <a class="nav-item nav-link active link--strategy" id="nav-strategy-tab" data-toggle="tab" href="#nav-strategy" role="tab" aria-controls="nav-strategy" aria-selected="true">
                <?php echo file_get_contents($tempUrl.'/assets/images/icons/strategy-icon.svg'); ?>
                strategy & branding
            </a>
            <a class="nav-item nav-link link--creative" id="nav-creative-tab" data-toggle="tab" href="#nav-creative" role="tab" aria-controls="nav-creative" aria-selected="false">
                <?php echo file_get_contents($tempUrl.'/assets/images/icons/creative-icon.svg'); ?>
                creative & design
            </a>
            <a class="nav-item nav-link link--media" id="nav-media-tab" data-toggle="tab" href="#nav-media" role="tab" aria-controls="nav-media" aria-selected="false">
                <?php echo file_get_contents($tempUrl.'/assets/images/icons/media-icon.svg'); ?>
                media planning
            </a>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-strategy" role="tabpanel" aria-labelledby="nav-strategy-tab">

                <div class="container">

                    <div class="row">

                        <div class="col-xl-5 ">

                            <h2><?php the_field('strategy_tab_title') ?></h2>

                        </div>

                        <div class="offset-lg-1 col-lg-11 col-xl-6">

                            <?php if( have_rows('strategy_tab_list') ):while ( have_rows('strategy_tab_list') ) : the_row(); ?>

                                <div class="service-container">

                                    <div class="services-title">
                                        <?php if(get_sub_field('strategy_list_link')) : ?>

                                            <a href="<?php echo  get_sub_field('strategy_list_link') ?>"><?php echo get_sub_field('strategy_list_title') ?>            
                                            </a>

                                        <?php else: 

                                         the_sub_field('strategy_list_title') ?>

                                        <?php endif; ?>

                                     </div>

                                    <div class="services-list"><?php the_sub_field('strategy_list_content') ?></div>

                                </div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>

            <div class="tab-pane fade" id="nav-creative" role="tabpanel" aria-labelledby="nav-creative-tab">
                
                <div class="container">

                    <div class="row">

                        <div class="col-xl-5">

                            <h2><?php the_field('creative_tab_title') ?></h2>

                        </div>

                        <div class="offset-lg-1 col-lg-11 col-xl-6">

                            <?php if( have_rows('creative_tab_list') ):while ( have_rows('creative_tab_list') ) : the_row(); ?>

                                <div class="service-container">

                                    <div class="services-title">

                                        <?php if(get_sub_field('creative_list_link')) : ?>

                                            <a href="<?php echo  get_sub_field('creative_list_link') ?>"><?php echo get_sub_field('creative_list_title') ?>            
                                            </a>

                                        <?php else: 

                                         the_sub_field('creative_list_title') ?>

                                        <?php endif; ?>

                                    </div>

                                    <div class="services-list"><?php the_sub_field('creative_list_content') ?></div>

                                </div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>

            <div class="tab-pane fade" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab">
                
                <div class="container">

                    <div class="row">

                        <div class="col-xl-5">

                            <h2><?php the_field('media_tab_title') ?></h2>

                        </div>

                        <div class="offset-lg-1 col-lg-11 col-xl-6">

                            <?php if( have_rows('media_tab_list') ):while ( have_rows('media_tab_list') ) : the_row(); ?>

                                <div class="service-container">

                                    <div class="services-title">

                                        <?php if(get_sub_field('media_list_link')) : ?>

                                            <a href="<?php echo  get_sub_field('media_list_link') ?>"><?php echo get_sub_field('media_list_title') ?>            
                                            </a>

                                        <?php else: 

                                         the_sub_field('media_list_title') ?>

                                        <?php endif; ?>

                                    </div>

                                    <div class="services-list"><?php the_sub_field('media_list_content') ?></div>

                                </div>

                            <?php endwhile; endif; ?>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <section class="services-2 mt-5">

        <div class="container">

            <h2 class="text-center"><strong><?php the_field('services_title') ?></strong></h2>

            <div class="row entry-content">

                <div class="col-lg-4 offset-xl-1 col-xl-3">

                    <?php the_field('services_area_1') ?>

                </div>

                <div class="col-lg-4 col-xl-5">

                    <?php the_field('services_area_2') ?>

                </div>


                <div class="col-lg-4 col-xl-3">

                    <?php the_field('services_area_3') ?>

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

                <div class="col-12 d-md-flex">

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

                <div class="pl-lg-5 col-lg-11">

                    <div class="cta-bubble">

                        <div class="cta-bubble-content">

                            <div class="cta-bubble-title"><?php the_field('call_out_title') ?></div>
                            <?php the_field('call_out_text') ?>

                        </div>

                        <a class="btn btn-1 btn--alt" href="/contact/">Let's Talk</a>

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

                        <a class="btn btn-1" href="/our-work/">See Our Work</a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <?php wp_reset_postdata(); endif; ?>

<?php get_footer() ?>