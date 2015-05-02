	<section>
		<article>
			<a href="adicionar_imagem.php">Adicionar</a>
      <a href="administra_imagem.php">Remover</a>
			<hr />
			<?php 
				require_once('appvariaveis.php');
				require_once('conecta_db.php');

				$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

				$query = "SELECT * FROM posts";
				$data = mysqli_query($conexaoDB, $query);

				// Percorrer a matriz de dados , formatá-lo como HTML
  				echo '<table>';
  				$i = 0;
  				while ($row = mysqli_fetch_array($data)) { 
  				  // Mostrar dados
  			
  				  echo '<tr><td class="scoreinfo">';
  				  echo '<span class="score">' . $row['titulo'] . '</span><br />';
  				  echo '<strong>Categoria:</strong> ' . $row['categoria'] . '<br />';
  				  echo '<strong>Descrição:</strong> ' . $row['descricao'] . '</td>';
  				  if (is_file(GW_UPLOADPATH . $row['imagem']) && filesize(GW_UPLOADPATH . $row['imagem']) > 0) {
  				    echo '<td><img src="' . GW_UPLOADPATH . $row['imagem'] . '" alt="Score image" /></td></tr>';
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