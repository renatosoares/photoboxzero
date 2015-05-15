	<section>
		<article>
      <h2>Listagem de imagens</h2>
      <hr />	
        <div class="container-fluid">
  			  <div class="row">
          <?php
            // Percorrer a matriz de dados , formatá-lo como HTML
  			 	 $i = 0;
  			 	 while ($row = mysqli_fetch_array($this->dados) ) { 
  			 	  // Mostrar dados
  			 ?>
        
  				<div class="col-xs-6 col-md-4">
        <?php
  				  echo '<p><span>' .                        $row['titulo'] . '</span></p>';
  				  echo '<p><strong>Categoria:</strong> ' .  $row['categoria'] . '</p>';
  				  echo '<p><strong>Descrição:</strong> ' .  $row['descricao'] . '</p>';
  				  if (is_file('views/image_upload/' .       $row['imagem']) && filesize('views/image_upload/' . $row['imagem']) > 0) {
  				    echo '<div class="col-md-4">
                      <img class="img-circle img-responsive" src="' . 'views/image_upload/' . $row['imagem'] . '" alt="Score image" />
                    </div>'
        ?>
          </div>
        <?php          
  				  }
  				  else {
  				    echo '<h3>nao existe imagem</h3></div>';
  				  }
  				  $i++;
  				}
        ?>
  				</div>
        </div>
				

		</article>
	</section>