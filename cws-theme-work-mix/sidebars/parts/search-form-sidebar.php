<div class="sidebar-holder search-holder">

    <div class="sidebar-title">Search</div>

    <div class="search-wrap">

        <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get" class="noauto">
            <div class="search-form">
                <input placeholder="Enter your search..." class="input-std" type="text" name="s" id="search" value="<?php the_search_query(); ?>"/>
                <input type="submit" id="searchsubmit" class="submit" value="<?php echo esc_attr_x( 'Go', 'submit button' ); ?>"/>
            </div>
        </form>

    </div>

</div>