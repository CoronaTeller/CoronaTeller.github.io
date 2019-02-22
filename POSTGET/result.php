
<!DOCTYPE html>
<html>
	<head>
		<title>Paniek</title>
		<link rel="stylesheet" type="text/css" href="css/paniephp.css">
		<link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
	</head>
	<body>

		<h1 class="mad">Mad Libs</h1>

		<div class="rand">
			<a href="paniek.php"><p class="paniek">Er heerst paniek...</p></a>
			<a href="paniek1.php"><p class="onkunde">Onkunde</p></a>
		</div>
		<div class="box">
			<h1 class="heerst">Er heerst paniek...</h1>
				<form action="result.php" method="post">
					    <div>
					        <label for="name"></label>
					        <p class="dierText"><?php echo "Er heerst paniek in het koninkrijk " . $_POST["wonen"] . ". Koning " . $_POST["docent"] . " is ten einde raad als koning " . $_POST["docent"] . " ten einde raad is, roept hij zijn ten-einde-raadsheer " . $_POST["persoon"] . "."?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="persoonText"><?php echo "&quot" . $_POST["persoon"] . " Het is een ramp! Het is een schande!&quot<br>"; echo "&quotSee, Majesteit uwe Luidruchtigheid , wat is er aan de hand?&quot<br>";?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="wonenText"><?php 	echo "&quotmijn " . $_POST["dier"] . " is verdwenen! zo maar, zonder waarschuwing En ik had " . $_POST["speelgoed"] . " voor hem gekocht!&quot<br>"; ?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="verveeltText"><?php echo "&quotMajesteit, uw " . $_POST["dier"] . " komt vast vanzelf weer terug?&quot"; ?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="speelgoedText"><?php echo "&quotja, da'sleuk en aardig, maar hoe moet ik in de tussen tijd " . $_POST["bezigheid"] . " leren?&quot<br>";?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="docentText"><?php echo "&quotMaar " . $_POST["persoon"] . ", daar kunt u toch uw " . $_POST["kopen"] . " voor gebruiken.&quot<br> "; ?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="kopenText"><?php echo " &quotje hebt helemaal gelijk! Wat zou ik doen als ik jou niet had.&quot<br>"; ?></p>
					    </div>
					    <div>
					        <label for="name"></label>
					        <p class="bezigheidText"><?php echo " &quot" . $_POST["verveelt"] . ", See&quot"; ?></p>
					    </div>
					
				</form>


				<div class="footer">
  					<p>Kingston van Laak - 2019 ©</p>
				</div>

		</div>
	</body>
</html>
