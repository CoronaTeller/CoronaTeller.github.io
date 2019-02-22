
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
			<h1 class="heerst">Onkunde</h1>
					<form action="result.php" method="post">
						    <div>
						        <label for="name"></label>
						        <p class="dierText"><?php  echo "Er zijn veel mensen die niet kunnen " . $_POST["kan"]                        
                                 . ". Neem nou " . $_POST["persoon"] . ". Zelfs met de hulp van een " . $_POST["vakantie"] . " of zelfs " . $_POST["getal"] . " kan " . $_POST["persoon"] . " niet " . $_POST["kan"] . ". Dat heeft niets te maken met een gebrek aan " . $_POST["beste"] . ", maar met een te veel aan " . $_POST["slechtste"] . ". Te veel " . $_POST["slechtste"] . " leidt tot " . $_POST["ergste"] . " en dat is niet goed als je wilt " . $_POST["kan"] . ". Helaas voor " . $_POST["persoon"] . ".";?></p>
						    </div>		
					</form>


				<div class="footer">
  					<p>Kingston van Laak - 2019 ©</p>
				</div>

		</div>
	</body>
</html>
