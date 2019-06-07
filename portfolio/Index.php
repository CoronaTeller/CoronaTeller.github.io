<!DOCTYPE html>
<html>
	<head>
		<title>Ik</title>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" type="text/css" href="css/index.css">
	</head>
	<body>

       <?php include "nav.php"; ?>

		<div class="bd-example">
		  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
		    <ol class="carousel-indicators">
		      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
		      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
		      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
		    </ol>
		    <div class="carousel-inner">
		      <div class="carousel-item active">
		        <img src="img/ik.jpg" class="d-block w-100" alt="...">
		        <div class="carousel-caption d-none d-md-block">
		          <h5>Coderen HTML</h5>
		          <p>Overzichtelijke HTML,CSS,JS</p>
		        </div>
		      </div>
		      <div class="carousel-item">
		        <img src="img/ht.jpg" class="d-block w-100" alt="...">
		        <div class="carousel-caption d-none d-md-block">
		          <h5>Coderen PHP</h5>
		          <p>PHP</p>
		        </div>
		      </div>
		      <div class="carousel-item">
		        <img src="img/contact.png.png" class="d-block w-100" alt="...">
		        <div class="carousel-caption d-none d-md-block">
		          <h5>Contact</h5>
		          <p>Verstuur een E-mail</p>
		        </div>
		      </div>
		    </div>
		    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
		      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span class="sr-only">Previous</span>
		    </a>
		    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
		      <span class="carousel-control-next-icon" aria-hidden="true"></span>
		      <span class="sr-only">Next</span>
		    </a>
		  </div>
		</div>

		<div class="container">
		  <div class="row">
		    <div class="col-sm">
		    	<img src="img/ik.jpeg" class="img-fluid" id="ik" alt="Responsive image">
		    </div>
		    <div class="col-sm">
		      <h1 class="wie">Wie ben ik?</h1>
		      <p class="ben">Ik ben Kingston van Laak ik ben 16 jaar en doe de opleiding Applicatie Ontwikkelaar. Mijn werk is momenteel Facturen maken. Ik ben erg doelstellend en erg geconsenteerd, als ik voor een ding gaat dan ga ik er echt voor.</p>
		    </div>
		  </div>
		</div>

		<?php include "date.php"; ?>

		<?php include "footer.php"; ?>

	</body>
</html>