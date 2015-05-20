    <!-- Portfolio -->
    <div id="portfolio" class="portfolio">
    <div class="container">
    <div class="row push50">
          <div class="col-md-4 col-md-offset-4 text-center">
            <h2>Nossos trabalhos</h2>
      <h3>
      <span class="filter label label-default" data-filter="all">Todos</span>
      <span class="filter label label-default" data-filter="bw">P&amp;B</span>
      <span class="filter label label-default" data-filter="nature">Natureza</span>
      <span class="filter label label-default" data-filter="portraits">Retratos</span>

  </h3>
            <hr>
          </div>
        </div>
    
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




<!-- ################################################################################# -->   

<!-- Contact -->
    <div id="contact">
      <div class="container">
        <div class="row">
    <div class="col-md-4 col-md-offset-4 text-center">
            <h2>Contact Us</h2>
      <hr>
          </div>
          <div class="col-md-5 col-md-offset-3">
      <!-- contact form starts -->
            <form action="contact" id="contact-form" class="form-horizontal">
      <fieldset>
                <div class="form-group">
                  <label class="col-sm-4 control-label" for="name">Your Name</label>
                  <div class="col-sm-8">
                    <input type="text"  placeholder="Your Name" class="form-control" name="name" id="name">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label" for="email">Email Address</label>
                  <div class="col-sm-8">
                    <input type="text" placeholder="Enter Your Email Address" class="form-control" name="email" id="email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label" for="subject">Subject</label>
                  <div class="col-sm-8">
                    <input type="text" placeholder="Subject" class="form-control" name="subject" id="subject">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-4 control-label" for="message">Your Message</label>
                  <div class="col-sm-8">
                    <textarea placeholder="Please Type Your Message" class="form-control" name="message" id="message" rows="3"></textarea>
                  </div>
                </div>
                <div class="col-sm-offset-4 col-sm-8">
                  <button type="submit" class="btn btn-success">Submit</button>
                  <button type="reset" class="btn btn-primary">Cancel</button>
                </div>
            </fieldset>
            </form>
        
        <!-- contact form ends -->    
          </div>
        </div>
      </div>
    </div>
    <!-- /Contact -->

    <!-- About -->
    <div id="about" class="about_us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <h2>About Us</h2>
            <p class="lead">Lorem ipsum dolor sit amet, ei essent delenit sit, adipisci salutatus has eu. Quis tamquam cu nam. Sed esse deleniti et, ex rebum quaestio his. Audiam deseruisse sed cu, vix ex possim causae omittantur.</p>
          </div>
        </div>
    </div>
    </div>
    <!-- /About -->
    <!-- Services -->
    <div id="services" class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4 text-center">
            <h2>Our Services</h2>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="service-item">
              <i class="service-icon fa fa-camera-retro fa-3x"></i>
              <h3>Portrait</h3>
              <p>Ad has dicat ridens consetetur, eos eu option persius. Mollis cotidieque conclusionemque per id, ne nam alienum liberavisse. </p>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="service-item">
      <i class="service-icon fa fa-camera fa-3x"></i>
              <h3>Black & white</h3>
              <p>In mea similique vulputate, ea cum amet malorum dissentiunt. Qui deleniti aliquando cu, ullum soluta his an, id inani salutatus sit.</p>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="service-item">
              <i class="service-icon fa fa-globe fa-3x"></i>
              <h3>Web Design</h3>
              <p>Ad has dicat ridens consetetur, eos eu option persius. Mollis cotidieque conclusionemque per id, ne nam alienum liberavisse.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Services -->


    


<!-- temporario -->
  <header>
    <nav>
      <ul>
        <li><a href="<?php echo HOME_URI;?>">Home</a></li>

        <li><a href="<?php echo HOME_URI;?>/administra.php">Administração</a></li>
      </ul>
    </nav>
  </header>
  <hr />


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