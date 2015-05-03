<?php
/**
* 
*/
class MensagensTxt
{
	private $msgTXT;
	function __construct()
	{
		
	}

	public function dbMsg($msgNum){
		switch ($msgNum) {
			case 1:
				$msg = "";
				break;
			
			default:
				$msg = "Mensagem padrão: deu merda! Relaxe";
				break;
		}
		return $msgTXT;
	}
}
?>