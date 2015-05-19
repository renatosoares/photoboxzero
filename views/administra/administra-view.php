        <h2>Administração</h2>
		<section>
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
                echo '<p><a href="' . HOME_URI . '/administra.php?id=' . $row['id'] . '&titulo=' . $row['titulo'] . '&categoria=' . $row['categoria'] . '&descricao=' . $row['descricao'] . '&imagem=' . $row['imagem'] . '&tipoacao=atualizar'.' ">Alteração </a></p>';
                echo '<p><a href="' . HOME_URI . '/administra.php?id=' . $row['id'] . '&titulo=' . $row['titulo'] . '&imagem=' . $row['imagem'] . '&tipoacao=deletar'.' ">Delete    </a></p>';
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