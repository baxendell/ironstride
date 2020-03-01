<?php
/**
 * The template for displaying 404 pages (Not Found)
 */
get_header(); ?>


    <div class="main-content">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-7 col-xl-8 entry-content">

                    <div class="four-o-four">

                        <header>
                            <h3>Error Code: 404</h3>
                            <h1>We can’t seem to find the page you’re looking for.</h1>
                        </header>

                        <p>The page you were looking for appears to have been moved, deleted or does not exist. Go back to the previous page, go straight to our <a href="/">homepage</a> or contact us now.</p>

                        <div class="search-wrap">

                            <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" class="noauto">
                                <div class="search-form">
                                    <input placeholder="Enter your search..." class="input-std" type="text" name="s" id="search" value="<?php the_search_query(); ?>"/>
                                    <input type="submit" id="searchsubmit" class="submit" value="<?php echo esc_attr_x( 'Go', 'submit button' ); ?>"/>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

                <div class="col-12 col-lg-5 col-xl-4 sidebar">
					<?php
					get_template_part( 'sidebars/error404-sidebar' );
					?>
                </div>

            </div>

        </div>

    </div>


<?php get_footer(); ?>