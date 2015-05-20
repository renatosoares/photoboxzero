
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center">
           <h2>Thank You</h2>
           <em>Copyright &copy; Company 2013</em>
          </div>
        </div>
      </div>
    </footer>
    <!-- /Footer -->
    <!-- Bootstrap core JavaScript -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="views/_js/jquery.js"></script>
  	<script src="views/_js/jquery-scrolltofixed-min.js"></script>
  	<script src="views/_js/jquery.vegas.js"></script>
  	<script src="views/_js/jquery.mixitup.min.js"></script>
  	<script src="views/_js/jquery.validate.min.js"></script>
  	<script src="views/_js/script.js"></script>
  	<script src="views/_js/bootstrap.js"></script>
  
<!-- Slideshow Background  -->
  <script>
$.vegas('slideshow', {
  delay:5000,
  backgrounds:[
     { src:'views/_img/nature1.jpg', fade:2000 },
   { src:'views/_img/bw1.jpg', fade:2000 },
    { src:'views/_img/portrait1.jpg', fade:2000 },
   { src:'views/_img/portrait5.jpg', fade:2000 },
    { src:'views/_img/portrait2.jpg', fade:2000 },
    { src:'views/_img/portrait3.jpg', fade:2000 },
   { src:'views/_img/portrait4.jpg', fade:2000 },
     { src:'views/_img/forest.jpg', fade:2000 }
     
  ]
})('overlay', {
src:'views/_img/overlay.png'
});

  </script>
<!-- /Slideshow Background -->

<!-- Mixitup : Grid -->
    <script>
    $(function(){
    $('#Grid').mixitup();
      });
    </script>
<!-- /Mixitup : Grid -->  

    <!-- Custom JavaScript for Smooth Scrolling - Put in a custom JavaScript file to clean this up -->
    <script>
      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
    </script>
<!-- Navbar -->
<script type="text/javascript">
$(document).ready(function() {
        $('#nav').scrollToFixed();
  });
    </script>
<!-- /Navbar-->
  
	
</body>
</html>