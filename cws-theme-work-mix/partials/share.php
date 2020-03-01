<div class="share-wrap">
	<?php
	global $post;
	$post_url       = get_permalink();
	$post_title     = str_replace( '', '%20', get_the_title() );
	$post_thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
	//share URL's
	$twitter_url   = 'https://twitter.com/intent/tweet?text=' . $post_title . '&amp;url=' . $post_url . '&amp;via=twitter_id';
	$facebook_url  = 'https://www.facebook.com/sharer/sharer.php?u=' . $post_url;
	$buffer_url    = 'https://bufferapp.com/add?url=' . $post_url . '&amp;text=' . $post_title;
	$linkedin_url  = 'https://www.linkedin.com/shareArticle?mini=true&url=' . $post_url . '&amp;title=' . $post_title;
	$pinterest_url = 'https://pinterest.com/pin/create/button/?url=' . $post_url . '&amp;media=' . $post_thumbnail[0] . '&amp;description=' . $post_title;
	$email_url     = 'mailto:?subject=' . $post_title . '&amp;body=' . $post_url . '';
	?>

    <ul class="social-icons">

        <li>
            <span><?php echo esc_html__( 'Share:', 'text-domain' ); ?></span>
        </li>
        <li>
            <a class="e-url" href="<?php echo esc_url( $email_url ); ?>">
		        <?php cws_get_svg( 'social-icons/icon-email.svg' ); ?>Email
            </a>
        </li>
        <li>
            <a class="f-url" href="<?php echo esc_url( $facebook_url ); ?>" target="_blank">
		        <?php cws_get_svg( 'social-icons/icon-facebook.svg' ); ?>Facebook
            </a>
        </li>
        <li>
            <a class="t-url" href="<?php echo esc_url( $twitter_url ); ?>" target="_blank">
		        <?php cws_get_svg( 'social-icons/icon-twitter.svg' ); ?>Twitter
            </a>
        </li>
       <li>
           <a class="p-url" href="<?php echo esc_url( $pinterest_url ); ?>" target="_blank">
		       <?php cws_get_svg( 'social-icons/icon-pinterest.svg' ); ?>Pinterest
           </a>
       </li>

    </ul>

</div>