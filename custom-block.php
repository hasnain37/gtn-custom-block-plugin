<?php
   /*
   Plugin Name: Gutenberg Custom Block
   Plugin URI: http://glowlogix.com
   description: Add custom block in Gutenberg
   Version: 1.0
   Author: Hasnain and Faizan
   Author URI: http://glowlogix.com
   License: GPL2
   */

function myblock() {
  wp_enqueue_script(
    'my-new-block',
    plugin_dir_url(__FILE__) . 'custom-block.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'myblock');



?>