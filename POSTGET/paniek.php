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
					<form action="<?php echo htmlspecialchars("result.php");?>" method="post">
						    <div>
						        <label for="name"></label>
						        <input type="name" id="dier" name="dier" size="50" maxlength="30" required />
						        <p class="dierText">Welk dier zou je nooit als huis dier willen hebben?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="name" id="persoon" name="persoon" size="50" maxlength="30" required/>
						        <p class="persoonText">Wat is de belangerijkste persoon in je leven?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="emtextail" id="wonen" name="wonen" size="50" maxlength="30" required/>
						        <p class="wonenText">In welk land zou jij willen wonen?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="verveelt" name="verveelt" size="50" maxlength="30" required/>
						        <p class="verveeltText">Wat doe je als je je verveelt?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="speelgoed" name="speelgoed" size="50" maxlength="30" required/>
						        <p class="speelgoedText">Met welk speelgoed speelde je als kind het meest?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="docent" name="docent" size="50" maxlength="30" required/>
						        <p class="docentText">Bij welkedocent spijbel je het liefst</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="kopen" name="kopen" size="50" maxlength="30" required/>
						        <p class="kopenText">Als je € 100.000,- had , wat zou jij kopen?</p>
						    </div>
						    <div>
						        <label for="name"></label>
						        <input type="text" id="bezigheid" name="bezigheid" size="50" maxlength="30" required/>
						        <p class="bezigheidText">Wat is je favoriete bezigheid?</p>
						    </div>

							<input class="versturen" type="submit" value="Versturen">
						
					</form>


				<div class="footer">
  					<p>Kingston van Laak - 2019 ©</p>
				</div>

		</div>
	</body>
</html>
