<?php
/**
 * @package Dyad
 */
?>

		</div>

		<footer id="colophon" class="site-footer" role="contentinfo">
			<?php if ( is_active_sidebar( 'sidebar-1' ) ) { ?>

				<div class="widget-area <?php echo esc_attr( dyad_widget_column_class( 'sidebar-1' ) ); ?>" role="complementary">
					<div class="grid-container">
						<?php dynamic_sidebar( 'sidebar-1' ); ?>
					</div>
				</div>

			<?php } ?>

			<div class="footer-bottom-info <?php if ( has_nav_menu( 'social' ) ) { echo 'has-social-menu'; } ?>">
				<?php
				if ( has_nav_menu( 'social' ) ) {
					wp_nav_menu( array(
						'theme_location'  => 'social',
						'container'       => 'div',
						'container_id'    => '',
						'container_class' => 'social-links',
						'menu_id'         => '',
						'menu_class'      => 'social-links-items',
						'depth'           => 1,
						'link_before'     => '<span class="screen-reader-text">',
						'link_after'      => '</span>',
						'fallback_cb'     => '',
					) );
				}
				?>

				<div class="site-info">
					<a href="<?php echo esc_url( __( 'http://www.espmsocial.org/', 'dyad' ) ); ?>">
						<?php printf( esc_html__( '&copy; 2020 - Todos os direitos reservados para ESPM Social', 'dyad' ), 'ESPM Social' ); ?></a>
				</div>
			</div>

		</footer>

	</div>
</div>

<?php wp_footer(); ?>

</body>
</html>
