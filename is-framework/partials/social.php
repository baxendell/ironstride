<ul class="social-icon-list">

    <?php if ( get_field( 'facebook_link', 'option' ) ): ?>
        <li>
            <a href="<?php the_field( 'facebook_link', 'option' ) ?>" target="_blank">
                <?php cws_get_svg( 'social-icons/icon-facebook.svg' ); ?>
            </a>
        </li>
    <?php endif; ?>

    <?php if ( get_field( 'instagram_link', 'option' ) ): ?>
        <li>
            <a href="<?php the_field( 'instagram_link', 'option' ) ?>" target="_blank">
                <?php cws_get_svg( 'social-icons/icon-instagram.svg' ); ?>
            </a>
        </li>
    <?php endif ?>

    <?php if ( get_field( 'twitter_link', 'option' ) ): ?>
        <li>
            <a href="<?php the_field( 'twitter_link', 'option' ) ?>" target="_blank">
                <?php cws_get_svg( 'social-icons/icon-twitter.svg' ); ?>
            </a>
        </li>
    <?php endif ?>

    <?php if ( get_field( 'linkedin_link', 'option' ) ): ?>
        <li>
            <a href="<?php the_field( 'linkedin_link', 'option' ) ?>" target="_blank">
				<?php cws_get_svg( 'social-icons/icon-linkedin.svg' ); ?>
            </a>
        </li>
	<?php endif; ?>						

</ul>