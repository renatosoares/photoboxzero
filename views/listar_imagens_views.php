	<section>
		<article>
			<a href="adicionar_imagem.php">Adicionar</a>
      <a href="administra_imagem.php">Remover</a>
			<hr />
			<?php 
				require_once('config.php');
        require_once('models/comandosDB_model.php');
        $conexaoDB = new ComandosDb();
			

				$conexaoDB->setListarDadosSQL("");

				$data = mysqli_query($conexaoDB->getConexaoDB, $conexaoDB->getListarDadosSQL());

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
  				    echo '<td><img src="' . 'views/image_upload/' . $row['imagem'] . '" alt="Score image" /></td></tr>';
  				  }
  				  else {
  				    echo '<td>nao existe imagem</td></tr>';
  				  }
  				  $i++;
  				}
  				echo '</table>';
				
  				mysqli_close($conexaoDB);		
			?>
		</article>
	</section>