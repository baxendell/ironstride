<?php
/**
 * Roberts breadcrumb partial
 */
?>

<div class="breadcrumb-container d-none d-md-block">

    <div class="container">

		<?php if ( function_exists( 'yoast_breadcrumb' ) ) : ?>

			<?php if ( is_404() ): ?>

                <div class="breadcrumb">

				<span xmlns:v="http://rdf.data-vocabulary.org/#">

					<span typeof="v:Breadcrumb">

						<a href="/" rel="v:url" property="v:title">Home</a>  

						<span class="breadcrumb_last">Error 404: Page not found</span>

					</span>

				</span>

                </div>

			<?php else: yoast_breadcrumb( '<div class="breadcrumb">', '</div>' ) ?>

			<?php endif; ?>

		<?php endif; ?>

    </div>

</div>