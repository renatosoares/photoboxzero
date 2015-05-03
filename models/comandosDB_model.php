<?php
/**
* 
*/
require_once('../config.php');
require_once('mensagens_txt_model.php');
class ComandosDB extends MensagensTxt
{
	private $mensagem;
	private $conexaoDB;
	private $query;
	public function __construct(){
		$mensagem = new MensagensTxt();
		this->$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die($mensagem->dbMsg(1));
		 
	}
	public function setInserirDadosSQL($query){
		this->$query  = "INSERT INTO";
		this->$query .= $query;
	}
	public function getInserirDadosSQL(){
		return $query;
	}

	public function getConexaoDB(){
		return $conexaoDB;
	}
}
?>