<?php
/**
* 
*/
class MainController
{
	Private $title;
	private $cmdDB;
	private $dados;
	function __construct()
	{
	

	}

	public function getBanco(){
		$this->cmdDB = new PhotoboxDB();
		$this->cmdDB->setListarDadosSQL("");
	

		
	}
	public function getDados(){
		$this->dados = mysqli_query($this->cmdDB->getConexaoDB(), $this->cmdDB->getListarDadosSQL());
		return $this->dados;
	}
}
?>