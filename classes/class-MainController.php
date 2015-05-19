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
		$this->cmdDB = new PhotoboxDB();
	}

	public function getBanco(){
		
		
		return $this->cmdDB;
	

		
	}
	public function getDados($cmdDBparametro){
		$this->cmdDB->setListarDadosSQL("");
		$this->dados = mysqli_query($cmdDBparametro->getConexaoDB(), $cmdDBparametro->getListarDadosSQL());
		return $this->dados;
	}
	public function getDadosDelete($cmdDBparametro, $id){
		$cmdDBparametro->setDeleteDadosSQL("", $id);
		$this->dados = mysqli_query($cmdDBparametro->getConexaoDB(), $cmdDBparametro->getDeleteDadosSQL());
		return $this->dados;
	}
}
?>