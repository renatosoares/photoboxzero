<?php
$operacao = $_POST["operacao"];
include ("conecta_db.php");
if ($operacao == "incluir") {


	$titulo = $_POST["titulo"];
	$categoria = $_POST["categoria"];
	$descricao = $_POST["descricao"];
	$query = "INSERT INTO posts (titulo, categoria, descricao) VALUES ('$titulo', '$categoria', '$descricao')";
	$resultado = mysqli_query($conexao, $query) or die("Houve um erro na gravação do registro");
	echo "Imagem inserida com sucesso";
} elseif ($operacao == "mostrar") {
	$query
}


mysqli_close($conexao);
?>
<p><a href="index.php">voltar</a></p>
