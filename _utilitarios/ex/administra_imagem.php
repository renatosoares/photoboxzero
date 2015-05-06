<?php
include 'head.php';
include 'header.php';
?>
	<section>
		<article>
			<?php
				require_once('appvariaveis.php');
				require_once('conecta_db.php');

				$conexaoDB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 

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
				
  				mysqli_close($conexaoDB);
			?>
		</article>
	</section>


<?php
include 'footer.php';
?>