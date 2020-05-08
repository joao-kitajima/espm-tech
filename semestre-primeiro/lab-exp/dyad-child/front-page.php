<?php get_header(); ?>

	<main id="primary" class="content-area" role="main">
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'page' ); ?>

		<?php endwhile; ?>

		<?php if ( have_posts() ) : ?>

			<div id="posts" class="posts">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php
						get_template_part( 'template-parts/content', 'blocks' );
					?>

				<?php endwhile; ?>

			</div>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<div id="posts" class="posts">
				<?php get_template_part( 'template-parts/content', 'none' ); ?>
			</div>

		<?php endif; ?>

		<?php
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
		?>

	</main>

<?php get_footer(); ?>
