//Kingston van Laak
//9 december 2018
//A2

introArray = []


var levels = {

startpagina:{
	jpg: "img/startpagina.jpg"
},

level2:{
	jpg: "img/QDr9.gif"
},

lvl3Snorlax:{
	jpg: "img/giphy.gif"
},

lvl3Natuur:{
	jpg: "img/natuur.gif"
},

lvl3Vila:{
	jpg: "img/vila.gif"
},

lvl4Battle1:{
	jpg: "img/pikagun.jpg"
},

lvl4Battle2:{
	jpg: "img/pekatana.jpg"
},

lvl4Battle3:{
	jpg: "img/niet.jpg"
},

lvl4Battle4:{
	jpg: "img/ghost.gif"
},

pijn:{
	jpg: "img/pijnpi.gif"
},

dood:{
	jpg: "img/dood.gif"
},

lastWon:{
	jpg: "img/pikaaaaa-chuuuuuuuu.gif"
},

lost:{
	jpg: "img/duck.gif"
},

verloren:{
	jpg: "img/blue.gif"
},

yes:{
	jpg: "img/yes.gif"
},

af:{
	jpg: "img/fly.gif"
},

vis:{
	jpg: "img/vis.gif"
},

font:{
	jpg: "img/446274.jpg"
},

spec:{
	jpg: "img/B8E.jpg"
},

fight:{
	jpg: "img/eng2.jpg"
},

lvl4Battle5:{
	jpg: "img/eng.png"
},

hypno:{
	jpg: "img/geeleng.gif"
},

vuurFight:{
	jpg: "img/vuurwin.gif"
},

mrmeame:{
	jpg: "img/mrem.gif"
},

zimbi:{
	jpg: "img/zimbi.gif"
},

}




	var p = document.createElement("p");
	var h2 = document.createElement("h2");
	var zicht = document.createElement("img");
	var div = document.createElement("div");
	var pokebal = document.createElement("img");



		//Level 1

		//Achtergrond
		zicht.setAttribute("src", levels.startpagina.jpg);

		console.log("startpagina");

		var background = document.getElementById("game-container").appendChild(zicht);

		    



		//title
		document.getElementById("title").innerHTML = "Pokemon Changes!";
		document.getElementById("title").style.left = "460px";

		//start spel btn
		document.getElementById("button1").innerHTML = "Het spel starten!";
		document.getElementById("button1").onclick = test

		//verhaal
		document.getElementById("title").appendChild(p).innerHTML = "Welkom bij Pokemon Choices, in deze game is het de bedoeling om met 1 Pokemon alle levels te halen. verzamel items om verder te gaan naar andere levels, kies dus het juiste pad. Succes!";
		document.getElementById("title").style.zIndex = "1";

		var test = document.getElementById("title").appendChild(p)

		document.getElementById("inventoryItem").style.visibility = "hidden";


		//div center
		document.getElementById("title").appendChild(div);




//Level 1

//func bg change
function test(){
		zicht.setAttribute("src", levels.level2.jpg);
		console.log("Level 1 Choose Pokemon")

		document.getElementById("title").innerHTML = "Choose Pokemon!";
		document.getElementById("title").style.left = "580px";
		document.getElementById("title").style.top = "180px";
		setTimeout(function(){ alert("Welkom bij het eerste Level hier is het de bedoeling om een pokemon te vangen!"); }, 500);


		zicht.style.width = "100%";



	    //pokemonbal vangen verplicht!

	    //pokemonbal
		inventoryItem.src = "img/pokebal.gif";
		document.getElementById("inventoryItem").style.width = "50px";

		document.getElementById("inventoryItem").style.visibility = "visible";

	    inventoryItem.onclick = pokeVang;





	    //pokemon vangen

	    //draak pokemon
	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/duckjs.gif_c200" width="90" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";


	    button3.onclick = draak;




	    //Snorlax pokemon

	    var buttons1 = document.getElementById("button1");

	    buttons1.innerHTML = '<img src="img/pekkkka.gif" width="120" />';

	    buttons1.style.width = "0px";

	    buttons1.style.height = "0px";

	    document.getElementById("button1").style.visibility = "visible";

	    button1.onclick = snorlax;





	    //Tenor pokemon

	    var buttons2 = document.getElementById("button2");

	    buttons2.innerHTML = '<img src="img/tenor.gif" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = tenor;


}

function pokeVang(){
	introArray.push("pokebal");
	window.alert("U heeft de pokebal gevonden nu kunt u 1 pokemon vangen! er zijn maaar 3 pokemon die je kunt vangen.")
	inventoryItem.style.visibility = "hidden";
}







//////////////////////////////////////////////////////Pekachu///////////////////////////////////////////////

//pekachu!!!

function snorlax(){


		if (introArray.length >= 1) {


	     
		zicht.setAttribute("src", levels.lvl3Snorlax.jpg);
		console.log("Level 2 choose Area")

		document.getElementById("title").style.top = "200px";

		document.getElementById("title").style.left = "605px";

		zicht.style.width = "100%";

		document.getElementById("title").innerHTML = "Choose Area!";

		setTimeout(function(){ alert("U kunt hier uw Area kiezen!"); }, 500);





	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/battle.png" width="200" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = Battle1;



    //Battle 1

    function Battle1(){

    	zicht.setAttribute("src", levels.lvl4Battle1.jpg);

    	console.log("Level 3 Battle 1");


    	buttons2.innerHTML = '<img src="img/shoot.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = lost;

	    document.getElementById("title").innerHTML = "Kies een Actie!";



	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/licht.png" width="120" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = gewon;

	    document.getElementById("title").innerHTML = "Kies een Actie!";

    }


    function lost(){

	    zicht.setAttribute("src", levels.lost.jpg);

	    document.getElementById("title").innerHTML = "Gewonnen!";

	    setTimeout(function(){ alert("Gewonnen! je hebt de Golden Duck kapot geschoten!"); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("game-container").style.top = "-150px";

		console.log("Level 4 Battle 1 GEWONNEN!");

    }



    function gewon(){

    	zicht.setAttribute("src", levels.lastWon.jpg);
    	

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Verloren! je had niet genoeg Power om de vijand te verslaan.";
		document.getElementById("title").style.left = "450px";

	

		document.getElementById("game-container").style.width = "100%";
		document.getElementById("game-container").style.top = "-150px";

		console.log("Level 4 Battle 1 Verloren!");
    }


	    //button 1 hidden
	    button1.style.visibility = "hidden";


	    var buttons2 = document.getElementById("button2");

	    buttons2.innerHTML = '<img src="img/poke.png" width="180" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";


	    button2.onclick = Battle2;



    //Battle 2 nog maken

    function Battle2(){

    	console.log("Level 3 Battle 2");

    	document.getElementById("title").innerHTML = "Kies een Actie!";

    	zicht.setAttribute("src", levels.lvl4Battle2.jpg);

    	buttons2.innerHTML = '<img src="img/vuist.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = win;


	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/fairy.png" width="120" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = pijn;

    }


    function pijn(){

	    console.log("Level 4 Battle 2 Verloren!");

		zicht.setAttribute("src", levels.pijn.jpg);

		setTimeout(function(){ alert("Game over! dit was niet de juiste aanval."); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Game Over!";
		document.getElementById("title").style.left = "630px";

		document.getElementById("game-container").style.top = "-140px";


		console.log("Game over")

	    }

	    function win(){

	    console.log("Level 4 Battle 2 Gewonnen!");

		zicht.setAttribute("src", levels.dood.jpg);

		setTimeout(function(){ alert("Gewonnen! de draak staat onder stroom!"); }, 500);


		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Gewonnen!";

		document.getElementById("title").style.left = "630px";

	    }

		}

		else{
		window.alert("U heeft nog geen pokemonbal in uw inventory! ga op zoek naar de pokemonbal.")		
		}

}









/////////////////////////////////////////////////Tenor////////////////////////////////////////////////

//Tenor!!!

function tenor(){


	if (introArray.length >= 1) {

	    inventoryItem.src = "img/raspberry.png";

	    document.getElementById("inventoryItem").style.visibility = "visible";
	    document.getElementById("inventoryItem").style.opacity = "0.7";
	    document.getElementById("inventoryItem").style.left = "700px";
	    document.getElementById("inventoryItem").style.top = "750px";

	    inventoryItem.onclick = rasp;

    	document.getElementById("title").innerHTML = "Choose Area!";



	function rasp(){
		alert("Je hebt nu de raspberry toegevoegd aan uw inventory u kunt nu het ander level betreden.")
		introArray.push("raspberry")
		document.getElementById("inventoryItem").style.visibility = "hidden";
	}

		document.getElementById("title").style.top = "400px";
     
		zicht.setAttribute("src", levels.lvl3Natuur.jpg);

		console.log("Level 2 choose Area")

		document.getElementById("title").style.top = "180px";

		zicht.style.width = "100%";



	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/moon.png" width="200" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = Battle1;





    function Battle1(){

	if (introArray.length >= 2) {

		console.log("Level 3 Battle 1");

    	zicht.setAttribute("src", levels.lvl4Battle3.jpg)

    	document.getElementById("title").innerHTML = "Kies een actie!";


    	buttons2.innerHTML = '<img src="img/water.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = lost;



	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/oog.png" width="150" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = winning;

    }



    function lost(){

    	console.log("Level 3 Battle 1 Verloren!");

	    zicht.setAttribute("src", levels.af.jpg);

	    setTimeout(function(){ alert("Game Over! de vijand deed een onverwachtse lucht aanval."); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

    }



    function winning(){

    	console.log("Level 3 Battle 1 Gewonnen!");

    	zicht.setAttribute("src", levels.vis.jpg);

		document.getElementById("title").style.left = "630px";

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		setTimeout(function(){ alert("Gewonnen! je deed de juiste bubbelslag."); }, 500);

		document.getElementById("title").innerHTML = "Gewonnen!"
    }


	if (introArray.length == 1){
		alert("U heeft geen Raspberry, ga opzoek naar raspberry.")
	}

}



    	//button 1 hidden
	    button1.style.visibility = "hidden";



	    var buttons2 = document.getElementById("button2");

	    buttons2.innerHTML = '<img src="img/pokelink.png" width="180" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";


	    button2.onclick = Battle2;



    //Battle 2 nog maken

    function Battle2(){

    	console.log("Level 3 Battle 2");

    	document.getElementById("title").innerHTML = "Kies een actie!";

    	document.getElementById("inventoryItem").style.visibility = "hidden";

    	zicht.setAttribute("src", levels.lvl4Battle4.jpg);

    	buttons2.innerHTML = '<img src="img/ener.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = yes;

	    document.getElementById("game-container").style.top = "-150px";


	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/gras.png" width="120" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = verloren;

    }


    function verloren(){

	    console.log("Level 3 Battle 2 Verloren!");

		zicht.setAttribute("src", levels.verloren.jpg);

		setTimeout(function(){ alert("Game over! Hij heeft je in 1 klap vermoord."); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Game Over!";

		document.getElementById("title").style.left = "630px";

    }

    function yes(){

	    console.log("Level 3 Battle 2 Gewonnen!");

		zicht.setAttribute("src", levels.yes.jpg);

		setTimeout(function(){ alert("Gewonnen! Je hebt de slechte Pokemon verslagen."); }, 500);


		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Gewonnen!";
		document.getElementById("title").style.left = "630px";


	}

   }


	else{
	window.alert("U heeft nog geen pokemonbal in uw inventory! ga op zoek naar de pokemonbal.")		
	}

}







///////////////////////////////////////////////////////////Golden Duck////////////////////////////
	
//Duck!!!

function draak(){


	if (introArray.length >= 1) {

	    inventoryItem.src = "img/200px-GO_Potion.png";

	    document.getElementById("inventoryItem").style.visibility = "visible";
	    document.getElementById("inventoryItem").style.opacity = "0.7";
	    document.getElementById("inventoryItem").style.left = "750px";
	    document.getElementById("inventoryItem").style.top = "800px";

	    inventoryItem.onclick = rasp;

	    document.getElementById("title").innerHTML = "Choose Area!";

    


function rasp(){
		alert("Je hebt nu de Potion toegevoegd aan uw inventory u kunt nu het ander level betreden.")
		introArray.push("Potion")
		document.getElementById("inventoryItem").style.visibility = "hidden";
}

		console.log("Level 2 choose area!");

	    setTimeout(function(){ alert("In dit level je kan naar 2 levels toe! 1 level is alleen te betreden met een potion ga daar dus naar op zoek!"); }, 500);

		zicht.setAttribute("src", levels.font.jpg);

		document.getElementById("game-container").style.top = "-150px";

		document.getElementById("title").style.top = "150px";

		test.innerHTML = "U bent aangekomen dat u kunt gaan vechten! u hoeft alleen uw area te kiezen in het gevecht moet je op juiste knoppen drukken en de juiste acties uitvoeren, Succes!";

		document.getElementById("title").style.top = "150px";

		zicht.style.width = "100%";



	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/Pokémon_Rumble.png" width="200" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = Battle1;




    function Battle1(){

if (introArray.length >= 2) {

		console.log("Level 3 Battle 1");

    	zicht.setAttribute("src", levels.fight.jpg)

    	buttons2.innerHTML = '<img src="img/draakslag.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    button2.onclick = lost;



	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/dka.png" width="110" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = gewon;

    }



    function lost(){

	    zicht.setAttribute("src", levels.hypno.jpg);

	    console.log("Level 4 Battle 1 Verloren!");

	    document.getElementById("game-container").style.top = "-210px";

	    document.getElementById("title").style.top = "210px";

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "visible";

		document.getElementById("button3").style.left = "600px";

		buttons3.innerHTML = '<img src="img/aggje.png" width="120" />';

		document.getElementById("title").innerHTML = "Game Over!";

		button3.onclick = again;

	function again() { 
        location.reload();
	}

		buttons2.innerHTML = '<img src="img/tumblr_n5huqyF6ZW1s3bc1no2_r1_400.gif" width="180" />';

		setTimeout(function(){ alert("ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•GAME OVER!ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ"); }, 500);
    }



    function gewon(){

	    	console.log("Level 4 Battle 1 Gewonnen!");

	    	zicht.setAttribute("src", levels.vuurFight.jpg);

			document.getElementById("button1").style.visibility = "hidden";

			document.getElementById("button2").style.visibility = "hidden";

			document.getElementById("button3").style.visibility = "hidden";

			document.getElementById("title").innerHTML = "Gewonnen!";

			document.getElementById("title").style.left = "630px";
	}


		if (introArray.length == 1){
			alert("U heeft geen Potion, ga opzoek naar Potion.")
		}

	}



	    //button 1 hidden
	    button1.style.visibility = "hidden";

		

	    var buttons2 = document.getElementById("button2");

	    buttons2.innerHTML = '<img src="img/Logo_Pokémon_Y.png" width="180" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";


	    button2.onclick = Battle2;





    //Battle

    function Battle2(){

		console.log("Level 3 Battle 2");

    	document.getElementById("inventoryItem").style.visibility = "hidden";

    	zicht.setAttribute("src", levels.lvl4Battle5.jpg);

    	buttons2.innerHTML = '<img src="img/katje.png" width="100" />';

	    buttons2.style.width = "0px";

	    buttons2.style.height = "0px";

	    document.getElementById("button2").style.visibility = "visible";

	    document.getElementById("game-container").style.top = "-170px";

	    button2.onclick = yes;


	    var buttons3 = document.getElementById("button3");

	    buttons3.innerHTML = '<img src="img/paars.png" width="140" />';

	    buttons3.style.width = "0px";

	    buttons3.style.height = "0px";

	    document.getElementById("button3").style.visibility = "visible";

	    button3.onclick = verloren;

    }


    function verloren(){

	    console.log("Level 4 Battle 2 Verloren!");

		zicht.setAttribute("src", levels.zimbi.jpg);

		setTimeout(function(){ alert("▂▃▅▇█▓▒░۩۞۩ 😂Je trapte erin😂 ۩۞۩░▒▓█▇▅▃▂"); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Gewonnen! Hij slaat op Hol SNEL SLUIT DE PAGINA AF! (wacht niet 10 seconden) ";

		setTimeout(function(){ alert("▂▃▅▇█▓▒░۩۞۩ DOEI! ۩۞۩░▒▓█▇▅▃▂"); }, 12000);

		setTimeout(function(){ (window.close()); }, 14000);

		document.getElementById("title").style.left = "630px";

		document.getElementById("title").style.top = "50%";

	    }

	    function yes(){

	    console.log("Level 4 Battle 2 Verloren!😂");

		zicht.setAttribute("src", levels.mrmeame.jpg);

		setTimeout(function(){ alert("▂▃▅▇█▓▒░۩۞۩ 😂Je trapte erin😂 ۩۞۩░▒▓█▇▅▃▂"); }, 500);

		document.getElementById("button1").style.visibility = "hidden";

		document.getElementById("button2").style.visibility = "hidden";

		document.getElementById("button3").style.visibility = "hidden";

		document.getElementById("title").innerHTML = "Game Over!";

		document.getElementById("title").style.left = "630px";

		}

	    }


		else{
		window.alert("U heeft nog geen pokemonbal in uw inventory! ga op zoek naar de pokemonbal.")		
		}

	}





























































































































































































