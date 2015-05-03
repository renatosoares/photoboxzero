	<?php
				require_once('../../models/create_image_model.php');

                $creImg = new CreateImageModel();
                $cmdDB = new ComandosDB();

				if (isset($_POST['submit'])) {
					// pega os dados de upload da imagem
                    $creImg->setDadosBanco($_POST["titulo"], $_POST["categoria"], $_POST["descricao"], $_FILES['imagemUpload']['name'], $_FILES['imagemUpload']['type'], $_FILES['imagemUpload']['size']);
					

    				if (!empty($creImg->getDadosBanco(1)) && !empty($creImg->getDadosBanco(2)) && !empty($creImg->getDadosBanco(4))) {
    					if ((($creImg->getDadosBanco(5) == 'image/gif') || ($creImg->getDadosBanco(5) == 'image/jpeg') || ($creImg->getDadosBanco(5) == 'image/pjpeg') || ($creImg->getDadosBanco(5) == 'image/png')) && ($creImg->getDadosBanco(6) > 0) && ($creImg->getDadosBanco(6) <= GW_MAXFILESIZE))  {
    						if ($_FILES['imagemUpload']['error'] == 0) {
    							// Mova o arquivo para a pasta de upload
    							//$apontarCaminho = GW_UPLOADPATH . $imagemUpload;
                              // $aptCaminho = $creImg->getApontarCaminho();

    							if (move_uploaded_file($_FILES['imagemUpload']['tmp_name'], $creImg->getApontarCaminho())) {
    								// conecte ao banco de dados
    								// $conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Não foi possível conectar');

    								// Escreva os dados no banco
    								//$query = "INSERT INTO posts (titulo, categoria, descricao, imagem) VALUES ('$titulo', '$categoria', '$descricao', '$imagemUpload')";
                                    
                                    mysqli_query($cmdDB->getConexaoDB(), $creImg->getComandosSQL()); 

                                    // Confirmar o sucesso com o usuário
                                    echo '<p>Sua imagem foi adicionada</p>';
                                    echo '<p><strong>Título:</strong>' . $creImg->getDadosBanco(1) . '<br />'; 
                                    echo '<strong>Categoria:</strong>' . $creImg->getDadosBanco(2) . '<br />';
                                    echo '<strong>Descrição:</strong>' . $creImg->getDadosBanco(3) . '<br />';
                                    echo '<img src = "' . GW_UPLOADPATH . $creImg->getDadosBanco(4) . '" alt="Imagen do Banco"/></p>';
                                    echo '<p><a href="index.php">&lt;&lt; Voltar </a></p>'; 

                                    // Apague os dados do formulári
                                    $creImg->setDadosBanco("", "", "", "", "", "");    
                                    

                                    mysqli_close($cmdDB->getConexaoDB());
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