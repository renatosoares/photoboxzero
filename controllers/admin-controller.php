<?php 
/**
* 
*/
class AdminController extends MainController
{
	private $bancoCRUD;
	
	public function index(){
		$this->title = 'Photobox: Administração';

		//$modelo = $this->load_model('noticias/noticias-adm-model');

		/** Carrega os arquivos do view **/
					$this->cmdDB = parent::getBanco();		
					$this->dados = parent::getDados($this->cmdDB);

		
        require ABSPATH . '/views/_includes/head.php';
		
        require ABSPATH . '/views/_includes/header-menu.php';

        require ABSPATH . '/models/administra/admin-model.php';
        $this->bancoCRUD = new AdminModel();

        	if (isset($_POST['submit']) && $_POST['submit'] == "Add") {
        		$this->bancoCRUD->inserir_imagens();
        	}elseif (isset($_GET['id']) && $_GET['tipoacao'] == 'deletar' || isset($_POST['submit']) && $_POST['confirm'] == 'Yes') {
        	
        			$this->bancoCRUD->apaga_imagens();
        	} elseif (isset($_GET['id']) && $_GET['tipoacao'] == 'atualizar') {
        		echo "atualizar ........................";
        	}

		
        require ABSPATH . '/views/administra/administra-view.php';
		
		    require ABSPATH . '/views/_includes/footer.php';

		    mysqli_close($this->cmdDB->getConexaoDB()); 
	}

}
?>