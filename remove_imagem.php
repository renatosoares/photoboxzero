<?php
include 'head.php';
include 'header.php';
?>
	<section>
		<article>
			<?php
				require_once('appvariaveis.php');
				require_once('conecta_db.php');

				if (isset($_GET['id']) && isset($_GET['titulo']) && isset($_GET['categoria']) && isset($_GET['descricao']) && isset($_GET['imagem'])) {
					// pegue os dados do GET
					$id = $_GET['id'];
					$titulo = $_GET['titulo'];
					$categoria = $_GET['categoria'];
					$descricao = $_GET['descricao'];
					$imagemUpload = $_GET['imagem'];
				} else if (isset($_POST['id']) && isset($_POST['titulo'])) {
					$id = $_POST['id'];
					$titulo = $_POST['titulo'];
				} else {
					echo '<p>Desculpe, o arquivo não foi especificado para remover.</p>';
				}
				if (isset($_POST['submit'])) {
					if ($_POST['confirm'] == 'Yes'){
						// delete a imagem do servidor
						@unlink(GW_UPLOADPATH . $imagemUpload);

						$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

						// delete as informações do banco
						$query = "DELETE FROM posts WHERE id = $id LIMIT 1";
						mysqli_query($conexaoDB, $query);
						mysqli_close($conexaoDB);

						// Confirmar sucesso com o usuário
						echo '<p>A imagem com esse título ' . $titulo .', e com essa ID '. $id .', foi removido com sucesso.</p>';

					}else{
						echo '<p>A imagem não foi removida</p>';
					}
				} else if (isset($id) && isset($titulo) && isset($categoria) && isset($descricao)) {
    				echo '<p>Tem certeza de que deseja excluir a seguinte imagem?</p>';
    				echo '	<p>	
    							<strong>Título: </strong>' . 	$titulo . '<br />
    							<strong>ID: </strong>' . 		$id .'<br />
    							<strong>Score: </strong>' . 	$categoria . '
    						</p>';
    				echo '<form method="post" action="remove_imagem.php">';

    				echo '<input type="radio" name="confirm" value="Yes" /> Yes ';
    				echo '<input type="radio" name="confirm" value="No" checked="checked" /> No <br />';

    				echo '<input type="submit" value="Submit" name="submit" />';
    				echo '<input type="hidden" name="id" value="' . 		$id . '" />';
    				echo '<input type="hidden" name="titulo" value="' . 	$titulo . '" />';
    				echo '<input type="hidden" name="categoria" value="' . 	$categoria . '" />';
    				echo '</form>';
  				}
			?>
		</article>
	</section>


<?php
include 'footer.php';
?>