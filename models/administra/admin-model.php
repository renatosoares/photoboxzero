<?php
/**
*
*/
class AdminModel extends MainModel
{
	// variavel para classe de comandos sql
	private $cmdDB;

	// strings sql
	private $inserirDados;

	// id
	// user_id
	// category_id
	// title
	// body
	// keywords
	// urlImage



	// dados para o banco
	private $userId;
	private $categoryId;
	private $title;
	private $body;
	private $keywords;
	private $urlImageUpload;
	private $urlImageUploadType;
	private $urlImageUploadSize;

	//
	// private $titulo;
	// private $categoria;
	// private $descricao;
	// private $imagemUpload;
	// private $imagemUpload_tipo;
	// private $imagemUpload_tamanho;

	// apontar caminho para upload da imagem
	private $apontarCaminho;

	function __construct(){
		// Configura o controlador
		$this->cmdDB = new PhotoboxDB();
	}

	public function getComandosSQL(){
		$this->inserirDados = "posts (user_id, category_id, title, body, keywords, urlImage) VALUES ('$this->titulo', '$this->userId', '$this->title', '$this->body', '$this->keywords', '$this->urlImage')";
		$this->cmdDB->setInserirDadosSQL($this->inserirDados);
		return $this->cmdDB->getInserirDadosSQL();
	}

	public function setDadosBanco($userId, $categoryId, $title,  $body, $urlImageUpload, $urlImageUploadType, $urlImageUploadSize){
		$this->userId = $userId;
		$this->categoryId = $categoryId;
		$this->title = $title;
		$this->body = $body;
		$this->keywords = $keywords;
		$this->urlImage = $urlImage;
		$this->urlImageUploadType = $urlImageUploadType;
		$this->urlImageUploadSize = $urlImageUploadSize;
	}
	public function getDadosBanco($selecaoNum){
		switch ($selecaoNum) {
			case 1:
			$DBanco = $this->userId;
			break;
			case 2:
			$DBanco = $this->categoryId;
			break;
			case 3:
			$DBanco = $this->title;
			break;
			case 4:
			$DBanco = $this->body;
			break;
			case 5:
			$DBanco = $this->keywords;
			break;
			case 6:
			$DBanco = $this->urlImageUpload;
			break;
			case 7:
			$DBanco = $this->urlImageUploadType;
			break;
			case 8:
			$DBanco = $this->urlImageUploadSize;
			break;

			default:
			# code...
			break;
		}
		return $DBanco;
	}
	public function getApontarCaminho(){
		$this->apontarCaminho = GW_UPLOADPATH . $this->urlImageUpload;
		return $this->apontarCaminho;
	}

	public function listar_imagens(){
		echo "listar imagens aqui";
	}

	public function editar_imagens(){

		if (isset($_GET['id']) && isset($_GET['titulo']) && isset($_GET['categoria']) && isset($_GET['descricao']) && isset($_GET['imagem'])) {
			// pegue os dados do GET

			$id = $_GET['id'];
			$titulo = $_GET['titulo'];
			$categoria = $_GET['categoria'];
			$descricao = $_GET['descricao'];
			$imagemUpload = $_GET['imagem'];

		} elseif (isset($_POST['id']) && isset($_POST['titulo'])) {

			$id = $_POST['id'];
			$titulo = $_POST['titulo'];
			$categoria = $_POST['categoria'];
			$descricao = $_POST['descricao'];

		} else {
			echo '<p>Desculpe, o arquivo não foi especificado para atualizar.</p>';
		}
		if (isset($_POST['submit'])) {
			if ($_POST['confirm'] == 'Yes'){
				// delete a imagem do servidor
				//@unlink(GW_UPLOADPATH . $imagemUpload);
				$cmdDB = new AdminController();
				$cmdDB->getDadosAtualizar($cmdDB->getBanco(), $id, $titulo, $categoria, $descricao);
				mysqli_close($cmdDB->getBanco()->getConexaoDB());

				// Confirmar sucesso com o usuário
				echo '<p>A imagem com esse título ' . $titulo .', e com essa ID '. $id .', foi atualizada com sucesso.</p>';

			}else{
				echo '<p>A imagem não foi atualizada</p>';
			}
		} else if (isset($id) && isset($titulo) /*&& isset($categoria) && isset($descricao)*/) {
			echo '<p>Tem certeza de que deseja excluir a seguinte imagem?</p>';
			echo '	<p>
			<img src="' . GW_UPLOADPATH . $imagemUpload . '" />
			</p>';
			echo '<form method="post" action="' . HOME_URI . '/administra.php">';

			echo '<input type="radio" name="confirm" value="Yes" /> Yes ';
			echo '<input type="radio" name="confirm" value="No" checked="checked" /> No <br />';

			echo '<input type="submit" value="Submit" name="submit" />';
			echo '<input type="hidden" name="id" value="' . 				$id . '" />';
			echo '<input type="hidden" name="titulo" value="' . 		$titulo . '" />';
			echo '<input type="hidden" name="categoria" value="' . 	$categoria . '" />';
			echo '<input type="hidden" name="descricao" value="' . 	$descricao . '" />';
			echo '<input type="hidden" name="imagem" value="' . 		$imagemUpload . '" />';

			echo '</form>';
		}

	}
	public function inserir_imagens(){


		if (isset($_POST['submit'])) {
			// pega os dados de upload da imagem
			/*	foreach ($_POST as $key => $value) {
			$setPost[$key] = $value;
		}*/
		$this->setDadosBanco($_POST["userId"], $_POST["categoryId"], $_POST["title"], $_POST["body"], $_POST["keywords"] , $_FILES['urlImageUpload']['name'], $_FILES['urlImageUpload']['type'], $_FILES['urlImageUpload']['size']);
		echo $this->getDadosBanco(1);

		if (!empty($this->getDadosBanco(1)) && !empty($this->getDadosBanco(2)) && !empty($this->getDadosBanco(4))) {
			if ((($this->getDadosBanco(5) == 'image/gif') || ($this->getDadosBanco(5) == 'image/jpeg') || ($this->getDadosBanco(5) == 'image/pjpeg') || ($this->getDadosBanco(5) == 'image/png')) && ($this->getDadosBanco(6) > 0) && ($this->getDadosBanco(6) <= GW_MAXFILESIZE))  {
				if ($_FILES['urlImageUpload']['error'] == 0) {
					// Mova o arquivo para a pasta de upload
					//$apontarCaminho = GW_UPLOADPATH . $imagemUpload;
					// $aptCaminho = $this->getApontarCaminho();

					if (move_uploaded_file($_FILES['urlImageUpload']['tmp_name'], $this->getApontarCaminho())) {
						// conecte ao banco de dados
						// $conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Não foi possível conectar');

						// Escreva os dados no banco
						//$query = "INSERT INTO posts (titulo, categoria, descricao, imagem) VALUES ('$titulo', '$categoria', '$descricao', '$imagemUpload')";

						mysqli_query($this->cmdDB->getConexaoDB(), $this->getComandosSQL());

						// Confirmar o sucesso com o usuário
						echo '<p>Sua imagem foi adicionada</p>';
						echo '<p><strong>Categoria:</strong>' . $this->getDadosBanco(2) .
						echo '<p><strong>Título:</strong>' . $this->getDadosBanco(3) . '<br />';
						echo '<strong>Descrição:</strong>' . $this->getDadosBanco(4) . '<br />';
						echo '<strong>Descrição:</strong>' . $this->getDadosBanco(5) . '<br />';
						echo '<img src = "' . GW_UPLOADPATH . $this->getDadosBanco(6) . '" alt="Imagen do Banco"/></p>';
						echo '<p><a href="index.php">&lt;&lt; Voltar </a></p>';

						// Apague os dados do formulário
						$this->setDadosBanco("", "", "", "", "", "");


						mysqli_close($this->cmdDB->getConexaoDB());
					}
					else{
						echo '<p>Desculpe, ouve um problema ao fazer o upload da imagem.</p>';
					}
				}
			}
			else {
				echo '<p>A imagem deve ser um GIF, JPEG, ou PNG e não deve ser maios que ' . (GW_MAXFILESIZE / 1024) .' KB em tamanho.</p>';
			}

			// tente excluir o arquivo temporario de imagem
			@unlink($_FILES['urlImageUpload']['tmp_name']);
		}
		else{
			echo '<p>Por favor entre todas as informação para adicionar a imagem.</p>';
		}
	}
}
public function apaga_imagens(){
	if (isset($_GET['id']) && isset($_GET['title']) &&/* isset($_GET['categoria']) && isset($_GET['descricao']) && */isset($_GET['imagem'])) {
		// pegue os dados do GET
		$id = $_GET['id'];
		$title = $_GET['title'];
		//	$categoria = $_GET['categoria'];
		//	$descricao = $_GET['descricao'];
		$urlImageUpload = $_GET['imagem'];
	} elseif (isset($_POST['id']) && isset($_POST['title'])) {
		$id = $_POST['id'];
		$title = $_POST['title'];
		$urlImageUpload = $_POST['imagem'];
		//$imagemUpload = $_POST['imagemUpload']; //$_FILES['imagemUpload']['name'], $_FILES['imagemUpload']['type']
	} else {
		echo '<p>Desculpe, o arquivo não foi especificado para remover.</p>';
	}
	if (isset($_POST['submit'])) {
		if ($_POST['confirm'] == 'Yes'){
			// delete a imagem do servidor
			@unlink(GW_UPLOADPATH . $urlImageUpload);

			//$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


			// delete as informações do banco
			//$query = "DELETE FROM posts WHERE id = $id LIMIT 1";
			//mysqli_query($conexaoDB, $query);
			//mysqli_close($conexaoDB);
			//	$this->cmdDB = parent::getBanco();
			//	$this->dados = parent::getDadosDelete($this->cmdDB);
			$cmdDB = new AdminController();
			//$dados =
			$cmdDB->getDadosDelete($cmdDB->getBanco(), $id);

			mysqli_close($cmdDB->getBanco()->getConexaoDB());

			// Confirmar sucesso com o usuário
			echo '<p>A imagem com esse título ' .  GW_UPLOADPATH . " " .  $urlImageUpload . "<< CAMINHO" . $title .', e com essa ID '. $id .', foi removido com sucesso.</p>';

		}else{
			echo '<p>A imagem não foi removida</p>';
		}
	} else if (isset($id) && isset($title) /*&& isset($categoria) && isset($descricao)*/) {
		echo '<p>Tem certeza de que deseja excluir a seguinte imagem?</p>';
		echo '	<p>
		<strong>Título: </strong>' . 	$title . '<br />
		<strong>ID: </strong>' . 		$id .'<br />
		</p>';
		echo '<form method="post" action="' . HOME_URI . '/administra.php">';

		echo '<input type="radio" name="confirm" value="Yes" /> Yes ';
		echo '<input type="radio" name="confirm" value="No" checked="checked" /> No <br />';

		echo '<input type="submit" value="Submit" name="submit" />';
		echo '<input type="hidden" name="id" value="' . 		$id . '" />';
		echo '<input type="hidden" name="titulo" value="' . 	$title . '" />';
		echo '<input type="hidden" name="imagem" value="' . $urlImageUpload . '" />';
		//echo '<input type="hidden" name="categoria" value="' . 	$categoria . '" />';
		echo '</form>';
	}

}
}
?>
