<?php
/*
 * Blog page "Home"
 */
get_header();

global $wp_query;
$post_blog = get_post(15); 
 ?>

    <section id="blog" class="main-content category-archive-view">

        <div class="container">

            <div class="row">

                <div class="content text-center col-12 col-xl-11 mx-auto">

                    <div class="entry-content"><p><?php echo $post_blog->post_excerpt; ?></p></div>

                </div>

            </div>

            <div class="row">

                <aside class="col-12 col-lg-5 offset-xl-1 col-xl-3 sidebar">

                    <!--filter-->
                    <div class="blog-filter">
                    
                        <?php $categories = get_categories(); ?>
                        <div class="filter-name">Filter:</div>
                        <span id="category-info" class="d-none" data-category="all"></span>
                        <ul class="cat-list">
                          <li class="cat-list__item"><input type="checkbox" id="all" name="all" value="all"><label for="all"> All</label></li>

                          <?php foreach($categories as $category) : ?>
                            <li class="cat-list__item">
                              <input type="checkbox" id="<?php echo $category->slug; ?>" name="<?php echo $category->slug; ?>" value="<?php echo $category->name; ?>"><label for="<?php echo $category->slug; ?>"> <?php echo $category->name; ?></label>
                            </li>
                          <?php endforeach; ?>
                        </ul>

                    </div>

                </aside>

                <div class="content col-lg-7 col-xl-6">

                    <div class="inner-content">
						<?php get_template_part( 'partials/excerpt-loop' ) ?>
                    </div><!--.inner-content-->

                </div>

                <div class="clearfix"></div>

            </div><!--.row-->

            <?php if ( $wp_query->max_num_pages > 1 ) : ?>

                <div class="row">

                    <div class="col text-center">

                        <a href="javascript:void(0);" class="btn btn-1 load-more">Load More</a>

                    </div>

                </div>

            <?php endif; ?>

        </div>

    </section><!--.container-->   

<?php get_footer() ?>