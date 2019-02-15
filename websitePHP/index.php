<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/indexphp.css">
		<title>King</title>
		<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
	</head>
	<body>
		
			<ul>
			  <li><a class="active" href="index.php"><span>Home</span></a></li>
			  <li><a  href="lab2.php"><span>Lab2</span></a></li>
			  <li><a href="lab3.php"><span>Lab3</span></a></li>
			  <li><a href="lab4.php"><span>Lab4</span></a></li>
			  <li><a href="eind.php"><span>B3W2101</span></a></li>
			</ul>

			<div id="center">




				<?php 
					include '../lab2.php';
					include '../lab3.php';
					include '../lab4.php';
				?>
			
			</div>
			
			<div class="footer">
  				<p>Kingston van Laak - 2019</p>
			</div>
	</body>
</html>