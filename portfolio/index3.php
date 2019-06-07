<!DOCTYPE html>
<html>
<head>
 <title>Bootstrap</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>

<?php include "nav.php"; ?>

<form id="form1" action="mail.php" method="post">
<fieldset><legend>Uw informatie</legend>
<ol>
  <li><label for="naam">Naam</label> <input id="naam" title="format: Voornaam Achternaam" name="naam" required="" type="text" autofocus="" placeholder="Voor- en Achternaam" /></li>
  <li><label for="email">Email</label> <input id="email" title="example@example.com" name="email" required="" type="email" placeholder="example@example.com" /></li>
</ol>
</fieldset>
<fieldset><legend>Bericht</legend>
<ol>
  <li><label for="bericht">Bericht</label> <textarea id="bericht" name="bericht" required="" rows="10" placeholder="Uw bericht ..."></textarea></li>
</ol>
</fieldset>
<fieldset><button name="submit" type="submit">Versturen</button></fieldset>
</form>

<?php include "date.php"; ?>

<?php include "footer.php"; ?>

</body>
</html>
