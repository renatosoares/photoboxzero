      <!-- Header Area -->
    <div id="top" class="header">
      <div class="vert-text">
    <img class="img-rounded" alt="Company Logo" src="./img/logo.jpg"/>
        <h2><em>Company Name</em></h2>
     <ul class="list-inline">
              <li><i class="fa fa-facebook fa-3x"></i></li>
              <li><i class="fa fa-twitter fa-3x"></i></li>
              <li><i class="fa fa-google-plus fa-3x"></i></li>
        <li><i class="fa fa-linkedin fa-3x"></i></li>
         <li><i class="fa fa-pinterest fa-3x"></i></li>
            </ul> 
      <br>
      <a href="#about" class="btn btn-top">Learn More</a>
      </div>
    </div>
    <!-- /Header Area -->
    <div id="nav">
    <!-- Navigation -->
    <nav class="navbar navbar-new" role="navigation">
   <div class="container">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mobilemenu">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
  <a href="#" class="navbar-brand">Slidefolio</a>
  </div>
  <div class="collapse navbar-collapse" id="mobilemenu">

    <ul class="nav navbar-nav navbar-right text-center">
      <li><a href="#top"><i class="service-icon fa fa-home"></i>&nbsp;Home</a></li>
        <li><a href="#about"><i class="service-icon fa fa-info"></i>&nbsp;About</a></li>
        <li><a href="#services"><i class="service-icon fa fa-laptop"></i>&nbsp;Services</a></li>
        <li><a href="#portfolio"><i class="service-icon fa fa-camera"></i>&nbsp;Portfolio</a></li>
        <li><a href="#contact"><i class="service-icon fa fa-envelope"></i>&nbsp;Contact</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
  </div>
</nav>
    <!-- /Navigation -->
</div>  


  <section>
    <article>
      <h2>Listagem de imagens</h2>
      <hr />  
        <div class="container-fluid">
          <div class="row">
          <?php
            // Percorrer a matriz de dados , formatá-lo como HTML
         
          // while ($row = mysqli_fetch_array($this->dados) ) { 
            // Mostrar dados
         ?>
        
          <div class="col-xs-6 col-md-4">
        <?php
        //    echo '<p><span>' .                        $row['titulo'] . '</span></p>';
        //    echo '<p><strong>Categoria:</strong> ' .  $row['categoria'] . '</p>';
        //    echo '<p><strong>Descrição:</strong> ' .  $row['descricao'] . '</p>';
        //    if (is_file('views/image_upload/' .       $row['imagem']) && filesize('views/image_upload/' . $row['imagem']) > 0) {
        //      echo '<div class="col-md-4">
        //              <img class="img-circle img-responsive" src="' . 'views/image_upload/' . $row['imagem'] . '" alt="Score image" />
        //            </div>'
        ?>
          </div>
        <?php          
        //    }
        //    else {
        //      echo '<h3>nao existe imagem</h3></div>';
        //    }
        //  
        //  }
        ?>
          </div>
        </div>
        

    </article>
  </section>


