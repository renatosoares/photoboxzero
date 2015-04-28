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
    								$query = "INSERT INTO posts (titulo, categoria, descricao, imagem) VALUES ('$titulo', '$categoria', '$descricao', '$imagemUpload')";
                                    mysqli_query($conexaoDB, $query); 

                                    // Confirmar o sucesso com o usuário
                                    echo '<p>Sua imagem foi adicionada</p>';
                                    echo '<p><strong>Título:</strong>' . $titulo . '<br />'; 
                                    echo '<strong>Categoria:</strong>' . $categoria . '<br />';
                                    echo '<strong>Descrição:</strong>' . $descricao . '<br />';
                                    echo '<img src = "' . GW_UPLOADPATH . $imagemUpload . '" alt="Imagen do Banco"/></p>';
                                    echo '<p><a href="index.php">&lt;&lt; Voltar </a></p>'; 

                                    // Apague os dados do formulári

                                    $titulo = "";
                                    $categoria = "";
                                    $descricao = "";
                                    $imagemUpload = "";

                                    mysqli_close($conexaoDB);
    							}
                                else{
                                    echo '<p>Desculpe, ouve um problema ao fazer o upload da imagem.</p>';
                                }
    						}
    					}
                        else {
                            echo '<p>A imagem deve ser um GIF, JPEG, ou PNG e não deve ser maios que ' . (GW_MAXFILESIZE / 1024) .' KB em tamanho.</p>';
                        }
                        
                        // tente excluir o arquivo temporario de imagem
                        @unlink($_FILES['imagemUpload']['tmp_name']);
    				}
                    else{
                        echo '<p>Por favor entre todas as informação para adicionar a imagem.</p>';
                    }
				}
			?>	
		</article>
        <article>
            <hr />
            <form enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="hidden" name="MAX_FILE_SIZE" value="<?php echo GW_MAXFILESIZE; ?>" />
                <fieldset>
                    <label>Título</label>
                    <input type="text" name="titulo">
                </fieldset>
                <fieldset>
                    <label>Categoria</label>
                    <input type="text" name="categoria">
                </fieldset>
                <fieldset>
                    <label >Descrição</label>
                    <textarea name="descricao" id="" cols="30" rows="10"></textarea>
                </fieldset>
                <fieldset>
                    <label>Imagem upload</label>
                    <input type="file" name="imagemUpload"/>
                </fieldset>
                <fieldset>
                    <hr />
                    <input type="submit" value="Add" name="submit" />
                </fieldset>
               
            </form>
        </article>
	</section>
<?php
include 'footer.php';
?>