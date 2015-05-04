<?php 
/**
* 
*/
require_once('comandosDB_model.php');
class CreateImageModel extends ComandosDB 
{
	// variavel para classe de comandos sql
	private $comandosSQL;

	//strings sql
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

	public function __construct(){
		
	}

	public function getComandosSQL(){
		$this->inserirDados = "posts (titulo, categoria, descricao, imagem) VALUES ('$this->titulo', '$this->categoria', '$this->descricao', '$this->imagemUpload')";
		parent::setInserirDadosSQL($this->inserirDados);
		return parent::getInserirDadosSQL();
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

}
?>