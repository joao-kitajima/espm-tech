<?php
/**
 * @package Dyad
 */

get_header(); ?>

<?php
function endsWith($haystack, $needle) {
    return substr_compare($haystack, $needle, -strlen($needle)) === 0;
}
$tmp_blog_check = $_SERVER['REQUEST_URI'];
if (endsWith($tmp_blog_check, '/blog/') || endsWith($tmp_blog_check, '/blog')) {
	$args = array(
		//'post_type' => 'my-post-type',
		//'post_author' => $current_user->ID,
		'post_status' => array('publish')
	);
	$wp_query = new WP_Query($args);
?>
	<main id="primary" class="content-area" role="main">
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

	</main>
<?php
} else {
?>
	<main id="primary" class="content-area" role="main">
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'page' ); ?>

		<?php endwhile; ?>

		<?php
		if ( comments_open() || get_comments_number() ) :
			comments_template();
		endif;
		?>

	</main>
<?php
}
?>

<?php get_footer(); ?>
