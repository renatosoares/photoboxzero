<?php
// Evita que usuários acesse este arquivo diretamente
//if ( ! defined('ABSPATH')) exit;

// Funções globais
require_once ABSPATH . '/functions/global-functions.php';
$photoboxMVC = new PhotoboxMVC();
// Carrega a aplicação
if ($liberaPagina == "index") {
	$photoboxMVC->index();
} elseif($liberaPagina == "administra"){
	$photoboxMVC->administra();
}

