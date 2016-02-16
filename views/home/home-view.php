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

  <!-- modal para foto $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->

  <!-- Portfolio -->
  <div id="portfolio" class="portfolio">
  <div class="container">


  <div class="row">

  <div class="gallery">

    <ul id="Grid" class="gcontainer">
      <?php
        $ir = 0;
         while ($row2 = mysqli_fetch_array($this->dados) ) {


      ?>
      <li class="col-md-4 col-sm-4 col-xs-12 mix bw portraits" data-cat="graphics">
        <a data-toggle="modal" data-target="#portrait1" class="mix-cover">
          <img class="horizontal" src="views/image_upload/<?php echo $row2['imagem']; ?>" alt="placeholder">
          <span class="overlay">
            <span class="valign">
            </span>
            <span class="title">
              <?php echo $row2['titulo']; ?>
            </span>
          </span>
        </a>
      </li>
      <?php
        $tituloArray[$ir] = $row2['titulo'];
        $imagemArray[$ir] = $row2['imagem'];
        $ir++;
        }
      ?>


    </ul>

<!-- Load Photo in Modal -->
    <div class="modal fade" id="portrait1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-center"><?php echo $tituloArray[1]; ?></h4>
          </div>
          <div class="modal-body">
           <img class="thumbnail" alt="Portrait1" src="views/image_upload/<?php echo $imagemArray[2]; ?>"/>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

<!-- /Load Photo in Modal -->
  </div>
  </div>
  </div>
  </div>
  <!-- /Portfolio -->
<!-- /modal para foto $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
