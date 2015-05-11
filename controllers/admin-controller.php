<?php 
/**
* 
*/
class AdminController extends MainController
{
	
	public function index(){
		$this->title = 'Administração';

		//$modelo = $this->load_model('noticias/noticias-adm-model');

		/** Carrega os arquivos do view **/
		
        require ABSPATH . '/views/_includes/head.php';
		
        require ABSPATH . '/views/_includes/header-menu.php';
		
        require ABSPATH . '/views/administra/administra-view.php';
		
		    require ABSPATH . '/views/_includes/footer.php';
	}
}
?>