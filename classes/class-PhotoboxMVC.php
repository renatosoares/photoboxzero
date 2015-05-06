<?php

/**
*  Gerencia Models, Controllers e Views
*/
class PhotoboxMVC
{

	// Receberá o valor do controlador (Vindo da URL).
	// photobox.com/controlador/
	private $controlador;

	// Receberá o valor da ação (também vindo da URL)
	private $acao;

	// Receberá o array de parâmetros
	// exemplo.com/controlador/acao/param1/param2/param50
	private $parametros;


	//caminho da página não encontrada
	private $not_found = '/includes/404.php';

	function __construct()
	{
		require_once ABSPATH . '/controllers/home-controller.php';
		$this->controlador = new HomeController();
		$this->controlador->index();

		return;
	}
}


?>