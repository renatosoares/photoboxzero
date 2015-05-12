	<section>
		<article>
		<?php
  /*   $conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 

        // Recuperar os dados da contagem de MySQL
        $query = "SELECT * FROM posts";
        $dataImagem = mysqli_query($conexaoDB, $query);

        // Faz um loop através da matriz de dados e, formatá-lo como HTML
        echo '<table>';
          while ($row = mysqli_fetch_array($dataImagem)) { 
              // Mostra as imagens
              echo '<tr class="scorerow"><td><strong>' . $row['titulo'] . '</strong></td>'; 
              echo '<td>' . $row['categoria'] . '</td>';
              echo '<td>' . $row['descricao'] . '</td>';
              echo '<td><a href="remove_imagem.php? id=' . $row['id'] . '&amp; titulo=' . $row['titulo'] . '&amp; categoria=' . $row['categoria'] . '&amp; descricao=' . $row['descricao'] .'&amp; imagem=' . $row['imagem'] . '">Remove</a> </td></tr>'; 
            }
            echo '</table>';
        
          mysqli_close($conexaoDB); */ 
    ?>
			
			<?php echo "Lista imagens";
		
        $cmdDB = new PhotoboxDB();
			

				$cmdDB->setListarDadosSQL("");

				$data = mysqli_query($cmdDB->getConexaoDB(), $cmdDB->getListarDadosSQL());

				// Percorrer a matriz de dados , formatá-lo como HTML
  				echo '<table>';
  				$i = 0;
  				while ($row = mysqli_fetch_array($data)) { 
  				  // Mostrar dados
  			
  				  echo '<tr><td class="scoreinfo">';
  				  echo '<span class="score">' . $row['titulo'] . '</span><br />';
  				  echo '<strong>Categoria:</strong> ' . $row['categoria'] . '<br />';
  				  echo '<strong>Descrição:</strong> ' . $row['descricao'] . '</td>';
  				  if (is_file('views/image_upload/' . $row['imagem']) && filesize('views/image_upload/' . $row['imagem']) > 0) {
  				    echo '<td><img class="img-responsive" src="' . 'views/image_upload/' . $row['imagem'] . '" alt="Score image" /></td></tr>';
  				  }
  				  else {
  				    echo '<td>nao existe imagem</td></tr>';
  				  }
  				  $i++;
  				}
  				echo '</table>';
				
  				mysqli_close($cmdDB->getConexaoDB());
			?>
		</article>
	</section>