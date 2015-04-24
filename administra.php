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
	$query = "SELECT * FROM posts";
	$resultado = mysqli_query($conexao, $query);
	$linhas = mysqli_num_rows($resultado);
	echo " <h3>Lista de imagens</h3> ";
	for ($i=0; $i < $linhas; $i++) { 
		$reg = mysqli_fetch_row($resultado);
		echo "$reg[0]<br /> $reg[1]<br /> $reg[2]<br /> $reg[3]<br /><br />";
	}
} elseif ($operacao == "excluir") {
	$ID = $_POST["id"];
	$query = "DELETE FROM posts WHERE id = '$ID'";
	$resultado = mysqli_query($conexao, $query)
	or die("ouve um erro na exclusão!");
	

}

mysqli_close($conexao);
?>
<p><a href="index.php">voltar</a></p>
