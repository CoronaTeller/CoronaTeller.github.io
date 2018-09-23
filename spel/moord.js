alert('In dit spel is het belangerijk om te overleven, maak de juiste keuzes en je zult het overleven.')

alert('Je hebt een wapen en dat is een M1911 met 3 Kogel')

alert('Er loopt 1 of meerdere moordenaars in het huis! je kunt ze herkennen aan: gele schoenen, een zwarte jas en een zwart masker')



var links = prompt('Je komt het huis binnen en links is een deur, ga je naar binnen?')
if ( links == 'ja') {
	
	var fop = prompt('Je doet de deur open en ziet een man met: gele schoenen een zwarte jas en een bruin masker, ga je SCHIETEN?')
}

 else{console.log
	alert('je bent af, je hebt te lang gewacht en de moordenaar heeft je gevonden!(sluit nu de pagina af)')
}

 if (fop == 'ja'){console.log
	 alert('GAME OVER! het was de glazenwasser!(sluit nu de pagina af)')
}

 else{console.log
	alert('Goedzo het was alleen maar de glazenwasser. (druk op enter om verder te zoeken)')
}

	var zolder = prompt('Je gaat zoeken naar meer kamers en ziet een ladder naar de zolder, wil je de zolder op? ')

 if (zolder == 'ja'){console.log
    var pet = prompt('je bent nu op de zolder, je ziet een man met gele schoenen, zwarte jas en een zwart masker. Ga je SCHIETEN?')
}

else{console.log
	alert('GAME OVER! je wacht te lang de moordenaar heeft jou gevonden! (sluit nu e pagina af en probeer het opnieuw)')
}

 if (pet == 'ja'){console.log
	alert('Goed gedaan! je hebt de moordenaar vermoord. (druk op enter en zoek verder)')
}

 else{console.log
	alert('GAME OVER! je had moeten schieten, hij heeft je vermoord(sluit nu de pagina af)')
}

var woonKamer = prompt('wil je opzoek naar een andere moordenaar?')

 if (woonKamer == 'ja'){console.log
	var kelder = prompt('je bent nu in de woonkamer, je ziet een trap naar de kelder wil je naar de kelder?')
}

 else{console.log
	alert('Oke Sluit dan nu deze pagina af)')
}

 if (kelder == 'ja'){console.log
	var raak = prompt('je ziet een man met gele schoenen, gele jas en een zwart masker, ga je SCHIETEN?')
}

 else{console.log
	alert('GAME OVER! je hebt de moordenaar niet gevonden maar hij jou wel en hij heeft je vermoord! (sluit nu de pagina af)')
}

 if (raak == 'ja'){console.log
	alert('Game over! het was alleen maar iemand die de kelder schoonmaakte(sluit nu de pagina af)')
}

 else{console.log
	alert('Goed gedaan! het was een schoonmaker die de kelder schoonmaakte. Je hebt alle kamers veilig gecheckt, en je hebt het spel nu uitgespeeld. (druk op enter om de makers te helpen)')
}

var doen = prompt('u krijgt een paar vragen bent u bereid om die te beantwoorden')
 if (doen == 'nee'){console.log
	alert('Bedankt voor uw tijd')
}

 else{console.log
	alert('druk enter om de vragen te beantwoorden.')
}

var schaal = prompt('op de schaal van 1 tot 10 welk cijfer geeft u het spel?')
 if(schaal > 5){console.log

	alert('toch een voldoende')
}

 else{console.log
	alert('jammer! geen voldoende (druk enter voor de volgende vraag)')
}

var prijs = prompt('hoeveel euro zult u voor deze game betalen? (hoeft geen euro teken)')
 if(schaal < 10){console.log

	alert('onder de 10 euro is een goede prijs')
}

 else{console.log
	alert('u schat hem wel duur.')
}

alert('Bedankt! voor het spelen en het beantwoorden van de vragen, Fijne dag!')




