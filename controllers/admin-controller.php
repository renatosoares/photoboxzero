<?php 
/**
* 
*/
class AdminController extends MainController
{
	
	public function index(){
		$this->title = 'Photobox: Administração';

		//$modelo = $this->load_model('noticias/noticias-adm-model');

		/** Carrega os arquivos do view **/

		
        require ABSPATH . '/views/_includes/head.php';
		
        require ABSPATH . '/views/_includes/header-menu.php';

        require ABSPATH . '/models/administra/admin-model.php';

        	if (isset($_POST['submit'])) {
        		$enviarParaBanco = new AdminModel();
        		$enviarParaBanco->inserir_imagens();
        	}
		
        require ABSPATH . '/views/administra/administra-view.php';
		
		    require ABSPATH . '/views/_includes/footer.php';
	}

}
?>