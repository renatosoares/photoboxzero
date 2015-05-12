<?php
include '../head.php';
include '../header.php';
print(getcwd());
echo "<br >";
print(dirname(__FILE__));
?>
	<section>	
		<article>
			<?php require_once('../../controllers/create_image_controller.php');?>
		</article>	
	</section>

<?php
include '../footer.php';
?>