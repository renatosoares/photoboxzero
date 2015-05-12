<?php
class PhotoboxDB
{
	private $mensagem;
	private $conexaoDB;
	private $query;
	public function __construct(){
	
		$this->conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die("Conexão não efetuada!");
		 
	}
	public function setInserirDadosSQL($query){
		$this->query  = "INSERT INTO ";
		$this->query .= $query;
	}
	public function getInserirDadosSQL(){
		return $this->query;
	}

	public function getConexaoDB(){
		return $this->conexaoDB;
	}

	public function setListarDadosSQL($query)	{
			$this->query = "SELECT * FROM posts ";
			$this->query .= $query;
	}
	public function getListarDadosSQL(){
		return $this->query;
	}
	
} // Class PhotoboxDB