<?php
  // Define database connection constants
  define('DB_HOST', 'localhost');
  define('DB_USER', 'root');
  define('DB_PASSWORD', '');
  define('DB_NAME', 'photoboxzero');

  // Caminho para a raiz
	define( 'ABSPATH', dirname( __FILE__ ) );

  // caminho para pasta de upload
  define('GW_UPLOADPATH', ABSPATH . '/views/image_upload/');
  define('GW_MAXFILESIZE', 524288);      // 512 KB

  // Charset da conexão PDO
  define( 'DB_CHARSET', 'utf8' );

  // Se você estiver desenvolvendo, modifique o valor para true
  define( 'DEBUG', true );

  require_once ABSPATH . '/loader.php';
?>