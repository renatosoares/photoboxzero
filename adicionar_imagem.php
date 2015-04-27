<?php
include 'head.php';
include 'header.php';
?>
	<section>
		<article>
			<?php
				require_once('appvariaveis.php');
				require_once('conecta_db.php');

				if (isset($_POST['submit'])) {
					// pega os dados de upload da imagem
					$titulo = $_POST["titulo"];
					$categoria = $_POST["categoria"];
					$descricao = $_POST["descricao"];
					$imagemUpload = $_FILES['imagemUpload']['name'];
    				$imagemUpload_tipo = $_FILES['imagemUpload']['type'];
    				$imagemUpload_tamanho = $_FILES['imagemUpload']['size']; 

    				if (!empty($titulo) && !empty($categoria) && !empty($imagemUpload)) {
    					if ((($imagemUpload_tipo == 'image/gif') || ($imagemUpload_tipo == 'image/jpeg') || ($imagemUpload_tipo == 'image/pjpeg') || ($imagemUpload_tipo == 'image/png')) && ($imagemUpload_tamanho > 0) && ($imagemUpload_tamanho <= GW_MAXFILESIZE))  {
    						if ($_FILES['imagemUpload']['error'] == 0) {
    							// Mova o arquivo para a pasta de upload
    							$apontarCaminho = GW_UPLOADPATH . $imagemUpload;
    							if (move_uploaded_file($_FILES['imagemUpload']['tmp_name'], $apontarCaminho)) {
    								// conecte ao banco de dados
    								$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Não foi possível conectar');

    								// Escreva os dados no banco
    								$query = ""; //parei aqui
    							}
    						}
    					}
    				}

				}
			?>	
		</article>
	</section>
<?php
include 'footer.php';
?>