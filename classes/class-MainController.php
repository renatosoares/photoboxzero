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
		return $this->cmdDB;
	

		
	}
	public function getDados($cmdDBparametro){
		$this->dados = mysqli_query($cmdDBparametro->getConexaoDB(), $cmdDBparametro->getListarDadosSQL());
		return $this->dados;
	}
	public function getDadosDelete($cmdDBparametro){
		$this->cmdDB->setDeleteDadosSQL("");
		$this->dados = mysqli_query($cmdDBparametro->getConexaoDB(), $cmdDBparametro->getDeleteDadosSQL());
		return $this->dados;
	}
}
?>