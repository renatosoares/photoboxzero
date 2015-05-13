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

	// dados para o banco
	private $titulo;
	private $categoria;
	private $descricao;
	private $imagemUpload;
	private $imagemUpload_tipo;
	private $imagemUpload_tamanho;

	// apontar caminho para upload da imagem
	private $apontarCaminho;

	function __construct(){
		// Configura o controlador
		$this->cmdDB = new PhotoboxDB();		
	}

	public function getComandosSQL(){
		$this->inserirDados = "posts (titulo, categoria, descricao, imagem) VALUES ('$this->titulo', '$this->categoria', '$this->descricao', '$this->imagemUpload')";
		$this->cmdDB->setInserirDadosSQL($this->inserirDados);
		return $this->cmdDB->getInserirDadosSQL();
	}

	public function setDadosBanco($titulo, $categoria, $descricao, $imagemUpload, $imagemUpload_tipo, $imagemUpload_tamanho){
		$this->titulo = $titulo;
		$this->categoria = $categoria;
		$this->descricao = $descricao;
		$this->imagemUpload = $imagemUpload;
		$this->imagemUpload_tipo = $imagemUpload_tipo;
		$this->imagemUpload_tamanho = $imagemUpload_tamanho;
	}
	public function getDadosBanco($selecaoNum){
		switch ($selecaoNum) {
			case 1:
				$DBanco = $this->titulo;
				break;
			case 2:
				$DBanco = $this->categoria;
				break;
			case 3:
				$DBanco = $this->descricao;
				break;
			case 4:
				$DBanco = $this->imagemUpload;
				break;
			case 5:
				$DBanco = $this->imagemUpload_tipo;
				break;
			case 6:
				$DBanco = $this->imagemUpload_tamanho;
				break;

			default:
				# code...
				break;
		}
		return $DBanco;
	}
	public function getApontarCaminho(){
		$this->apontarCaminho = GW_UPLOADPATH . $this->imagemUpload;
		return $this->apontarCaminho;
	}

	public function listar_imagens(){

	}

	public function editar_imagens(){

	}
	public function inserir_imagens(){


				if (isset($_POST['submit'])) {
					// pega os dados de upload da imagem
          $this->setDadosBanco($_POST["titulo"], $_POST["categoria"], $_POST["descricao"], $_FILES['imagemUpload']['name'], $_FILES['imagemUpload']['type'], $_FILES['imagemUpload']['size']);
					echo $this->getDadosBanco(1);

    				if (!empty($this->getDadosBanco(1)) && !empty($this->getDadosBanco(2)) && !empty($this->getDadosBanco(4))) {
    					if ((($this->getDadosBanco(5) == 'image/gif') || ($this->getDadosBanco(5) == 'image/jpeg') || ($this->getDadosBanco(5) == 'image/pjpeg') || ($this->getDadosBanco(5) == 'image/png')) && ($this->getDadosBanco(6) > 0) && ($this->getDadosBanco(6) <= GW_MAXFILESIZE))  {
    						if ($_FILES['imagemUpload']['error'] == 0) {
    							// Mova o arquivo para a pasta de upload
    							//$apontarCaminho = GW_UPLOADPATH . $imagemUpload;
                              // $aptCaminho = $this->getApontarCaminho();

    							if (move_uploaded_file($_FILES['imagemUpload']['tmp_name'], $this->getApontarCaminho())) {
    								// conecte ao banco de dados
    								// $conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Não foi possível conectar');

    								// Escreva os dados no banco
    								//$query = "INSERT INTO posts (titulo, categoria, descricao, imagem) VALUES ('$titulo', '$categoria', '$descricao', '$imagemUpload')";
                                    
                                    mysqli_query($this->cmdDB->getConexaoDB(), $this->getComandosSQL()); 

                                    // Confirmar o sucesso com o usuário
                                    echo '<p>Sua imagem foi adicionada</p>';
                                    echo '<p><strong>Título:</strong>' . $this->getDadosBanco(1) . '<br />'; 
                                    echo '<strong>Categoria:</strong>' . $this->getDadosBanco(2) . '<br />';
                                    echo '<strong>Descrição:</strong>' . $this->getDadosBanco(3) . '<br />';
                                    echo '<img src = "' . GW_UPLOADPATH . $this->getDadosBanco(4) . '" alt="Imagen do Banco"/></p>';
                                    echo '<p><a href="index.php">&lt;&lt; Voltar </a></p>'; 

                                    // Apague os dados do formulári
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
                        @unlink($_FILES['imagemUpload']['tmp_name']);
    				}
                    else{
                        echo '<p>Por favor entre todas as informação para adicionar a imagem.</p>';
                    }
				}
	}
	public function apaga_imagens(){
				if (isset($_GET['id']) && isset($_GET['titulo']) && isset($_GET['categoria']) && isset($_GET['descricao']) && isset($_GET['imagem'])) {
					// pegue os dados do GET
					$id = $_GET['id'];
					$titulo = $_GET['titulo'];
					$categoria = $_GET['categoria'];
					$descricao = $_GET['descricao'];
					$imagemUpload = $_GET['imagem'];
				} else if (isset($_POST['id']) && isset($_POST['titulo'])) {
					$id = $_POST['id'];
					$titulo = $_POST['titulo'];
				} else {
					echo '<p>Desculpe, o arquivo não foi especificado para remover.</p>';
				}
				if (isset($_POST['submit'])) {
					if ($_POST['confirm'] == 'Yes'){
						// delete a imagem do servidor
						@unlink(GW_UPLOADPATH . $imagemUpload);

						$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

						// delete as informações do banco
						$query = "DELETE FROM posts WHERE id = $id LIMIT 1";
						mysqli_query($conexaoDB, $query);
						mysqli_close($conexaoDB);

						// Confirmar sucesso com o usuário
						echo '<p>A imagem com esse título ' . $titulo .', e com essa ID '. $id .', foi removido com sucesso.</p>';

					}else{
						echo '<p>A imagem não foi removida</p>';
					}
				} else if (isset($id) && isset($titulo) && isset($categoria) && isset($descricao)) {
    				echo '<p>Tem certeza de que deseja excluir a seguinte imagem?</p>';
    				echo '	<p>	
    							<strong>Título: </strong>' . 	$titulo . '<br />
    							<strong>ID: </strong>' . 		$id .'<br />
    							<strong>Score: </strong>' . 	$categoria . '
    						</p>';
    				echo '<form method="post" action="remove_imagem.php">';

    				echo '<input type="radio" name="confirm" value="Yes" /> Yes ';
    				echo '<input type="radio" name="confirm" value="No" checked="checked" /> No <br />';

    				echo '<input type="submit" value="Submit" name="submit" />';
    				echo '<input type="hidden" name="id" value="' . 		$id . '" />';
    				echo '<input type="hidden" name="titulo" value="' . 	$titulo . '" />';
    				echo '<input type="hidden" name="categoria" value="' . 	$categoria . '" />';
    				echo '</form>';
  				}
			
	}
}
?>