<?php 
/**
* 
*/
class HomeController extends MainController
{
		/**
	 * Carrega a página "/views/home/index.php"
	 */
    public function index() {
		// Título da página
		$this->title = 'Home';
	
		// Essa página não precisa de modelo (model)
		
		/** Carrega os arquivos do view **/
		
		// /views/_includes/header.php
        require ABSPATH . '/views/_includes/head.php';
		
		// /views/_includes/menu.php
        require ABSPATH . '/views/_includes/header-menu.php';
		
		// /views/home/home-view.php
        require ABSPATH . '/views/home/home-view.php';
		
		// /views/_includes/footer.php
        require ABSPATH . '/views/_includes/footer.php';
		
    } // index
}
?>