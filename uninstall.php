<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * Everything in uninstall.php will be executed when user decides to delete the plugin. 
 * @since 0.1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

// If uninstall not called from WordPress, then die.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) die;

/**
 * Delete database settings
 *
 * @since 0.1.0
 */ 
delete_option('heslo_login_client_key');
delete_option('heslo_login_secret_key');
delete_option('heslo_login_auto_installation');
delete_option('abl_heslo_login_version');
