

alert('In dit spel is het belangerijk om te overleven, maak de juiste keuzes en je zult het overleven.')

alert('Je hebt een wapen en dat is een M1911 met 3 Kogel')

alert('Er loopt 1 of meerdere moordenaars in het huis! je kunt ze herkennen aan: gele schoenen, een zwarte jas en een zwart masker')



    var links = prompt('Je komt het huis binnen en links is een deur, ga je naar binnen?')

console.log(links);
 if ( links == 'ja') {
	
	var fop = prompt('Je doet de deur open en ziet een man met: gele schoenen een zwarte jas en een bruin masker, ga je SCHIETEN?')
}

 else{
	alert('je bent af, je hebt te lang gewacht en de moordenaar heeft je gevonden!(sluit nu de pagina af)')
}
console.log(fop);
  if (fop == 'ja'){
	 alert('GAME OVER! het was de glazenwasser!(sluit nu de pagina af)')
}

 else{
	alert('Goedzo het was alleen maar de glazenwasser. (druk op enter om verder te zoeken)')
}

	var zolder = prompt('Je gaat zoeken naar meer kamers en ziet een ladder naar de zolder, wil je de zolder op? ')
console.log(zolder);
 if (zolder == 'ja'){
    var pet = prompt('je bent nu op de zolder, je ziet een man met gele schoenen, zwarte jas en een zwart masker. Ga je SCHIETEN?')
}

else{
	alert('GAME OVER! je wacht te lang de moordenaar heeft jou gevonden! (sluit nu e pagina af en probeer het opnieuw)')
}
       console.log(fop);
 if (pet == 'ja'){
	alert('Goed gedaan! je hebt de moordenaar vermoord. (druk op enter en zoek verder)')
}

 else{
	alert('GAME OVER! je had moeten schieten, hij heeft je vermoord(sluit nu de pagina af)')
}

    var woonKamer = prompt('wil je opzoek naar een andere moordenaar?')

console.log(fop);
 if (woonKamer == 'ja'){
	var kelder = prompt('je bent nu in de woonkamer, je ziet een trap naar de kelder wil je naar de kelder?')
}

 else{
	alert('Oke Sluit dan nu deze pagina af)')
}

     
       console.log(kelder);
 if (kelder === 'ja'){
	var raak = prompt('je ziet een man met gele schoenen, gele jas en een zwart masker, ga je SCHIETEN?')
}

 else{
	alert('GAME OVER! je hebt de moordenaar niet gevonden maar hij jou wel en hij heeft je vermoord! (sluit nu de pagina af)')
}
console.log(raak);
 if (raak == 'ja'){
	alert('Game over! het was alleen maar iemand die de kelder schoonmaakte(sluit nu de pagina af)')
}

 else{
	alert('Goed gedaan! het was een schoonmaker die de kelder schoonmaakte. Je hebt alle kamers veilig gecheckt, en je hebt het spel nu uitgespeeld. (druk op enter om de makers te helpen)')
}

    var doen = prompt('u krijgt een paar vragen bent u bereid om die te beantwoorden')

console.log(doen);
 if (doen == 'nee'){
	alert('Bedankt voor uw tijd')
}

 else{
	alert('druk enter om de vragen te beantwoorden.')
}

    var schaal = prompt('op de schaal van 1 tot 10 welk cijfer geeft u het spel?')

console.log(schaal);
 if(schaal >= 5){

	alert('toch een voldoende')
}

 else{
	alert('jammer! geen voldoende (druk enter voor de volgende vraag)')
}

    var prijs = prompt('hoeveel euro zult u voor deze game betalen? (geen euro teken)')

console.log(prijs);
 if(prijs < 10){

	alert('onder de 10 euro is een goede prijs')
}

 else{
	alert('u schat hem wel duur.')
}

    var procent = prompt('Hoeveel procent kans schat u deze game dat hij een internationaal succes word?')

console.log(procent);
 if(procent < 100 && procent > 1){
    alert('Bedankt!')
}

else{
	alert('Het moest onder de 100% zijn maar toch Bedankt!')
}

    var free = prompt('Raad u het spel aan?')

console.log(free);
 if (free != 'nee'){
    alert('U raad deze game aan Bedankt!')
 }
 else{
    alert('U raad deze game niet aan.')
 }











     


 
    






