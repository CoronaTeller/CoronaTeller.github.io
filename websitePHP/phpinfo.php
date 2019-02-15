<head>
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="cssphp/cssphp.CSS">
</head>
<body>
	
	<?php

		$date = date('h:i a', time());


		if ($date >= "06:00" && $date <= "12:00") {
			$background = "../img/morning.png";
			$text = "Goede Morgen!";
		}

		if ($date >= "12:00" && $date <= "18:00") {
			$background = "../img/afternoon.png";
			$text = "Goede Middag!";
		}

		if ($date >= "18:00" && $date <= "00:00") {
			$background = "../img/evening.png";	
			$text = "Goede Avond!";
		}

		if ($date >= "00:00" && $date <= "06:00") {
			$background = "../img/night.png";	
			$text = "Goede Nacht!";	
		}
	?>

	<p class="text"><?php echo $text; ?> </p>

	<p class="nu">Het is nu: <?php echo $date; ?> </p>

	<img id="bg" src="<?php echo $background; ?>">

</body>
