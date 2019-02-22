s<!DOCTYPE html>
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
					<form action="<?php echo htmlspecialchars("result1.php");?>" method="post">
						    <div>
						        <label for="name"></label>
						        <input type="text" id="dier" name="kan" size="50" maxlength="30" required/>
						        <p class="dierText">Wat zou je graag willen kunnen?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="name" id="persoon" name="persoon" size="50" maxlength="30" required/>
						        <p class="persoonText">Met welke persoon kun jij goed opschieten?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="emtextail" id="wonen" name="getal" size="50" maxlength="30" required/>
						        <p class="wonenText">Wat is je favoriete getal?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="verveelt" name="vakantie" size="50" maxlength="30" required/>
						        <p class="verveeltText">Wat heb je altijd bij je als je op vakantie gaat?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="speelgoed" name="beste" size="50" maxlength="30" required/>
						        <p class="speelgoedText">Wat is je beste persoonlijke eigenschap?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="docent" name="slechtste" size="50" maxlength="30" required/>
						        <p class="docentText">Wat is je slechtste persoonlijke eigenschap?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="kopen" name="ergste" size="50" maxlength="30" required/>
						        <p class="kopenText">Wat is het ergste dat je kan overkomen?</p>
						    </div>


							<input class="versturen" type="submit" value="Versturen">
						
					</form>

				<div class="footer">
 					 <p>Kingston van Laak - 2019 ©</p>
				</div>

		</div>
	</body>
</html>