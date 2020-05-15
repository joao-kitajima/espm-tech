<?php
/**
 * @package Dyad
 */

get_header(); ?>

	<main id="primary" class="content-area" role="main">
		<div class="is-singular">
			<div class="content-area">
		<?php 
			$args = array(
			    //'post_type' => 'my-post-type',
			    //'post_author' => $current_user->ID,
			    'pagename' => 'home'
			);
			$wp_query = new WP_Query($args);
		?>
		<?php if ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'page' ); ?>

		<?php endif; ?>
			</div>
		</div>
		<?php 
			$args = array(
			    //'post_type' => 'my-post-type',
			    //'post_author' => $current_user->ID,
			    'post_status' => array('publish')
			);
			$wp_query = new WP_Query($args);
		?>
		
		<?php if ( have_posts() ) : $cont_posts = 0; ?>

			<div id="posts" class="posts">

				<?php while ( have_posts() && $cont_posts < 6) : the_post(); $cont_posts++; ?>

					<?php
						get_template_part( 'template-parts/content', 'blocks' );
					?>

				<?php endwhile; ?>

			</div>

			<?php
				//the_posts_navigation();
			?>

		<?php else : ?>

			<div id="posts" class="posts">
				<?php get_template_part( 'template-parts/content', 'none' ); ?>
			</div>

		<?php endif; ?>

	</main>

<?php get_footer(); ?>
