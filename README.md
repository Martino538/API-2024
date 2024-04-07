# Procesverslag

## Week 1

## Dag 1 (02-04-2024)
Deze dag was de intro dit vak: API's. Super leuk want dit onderwerp boeit mij erg. Ik vind het interresant om met data te werken. Het binnenhalen via een API en hiermee werken vind ik dan ook super leerzaam. Ik het dit voor het eerst gedaan bij WAFS.

Ik ben begonnen met het analyseren van de bestanden uit de bestaande template (Liquid). Ik ben een beetje bekend met de mappenstructuur, omdat ik op mijn werk een soortgelijke structuur hanteer bij het maken van wordpress websites. Echter had ik nog wel een boel vragen, want veel van deze bestanden bevatten code die ik niet snapte. Als voorbeeld is hier de server.js. Ik heb nog nooit met routing gewerkt en wist dus niet wat het deed. Na vragen gesteld te hebben ben ik begonnen met het koppelen van de API en de data te fetchen in server.js. Dit ging achteraf vrij gemakkelijk en het is mij gelukt de data uit te lezen op mijn index. Momenteel bevinden zich de titel, beschrijving en afbeelding van alle films op mijn index.

Volgende week wil ik een 2e url fetchen, waardoor ik alle details van een film kan tonen zodra er op een film gedrukt wordt.

## Dag 2 (08-04-2024)
Na het verder analyseren van de code merk ik dat ik toch veel moeite heb om uit mezelf verder te komen met de applicatie. Daarnaast is vragen stellen lastiger, omdat al mijn klasgenoten EJS gebruiken. Om deze rede heb ik besloten om te schakelen naar EJS, zodat ik makkelijker vragen kan stellen. Daarnaast vind ik de logica van EJS iets makkelijker tot me te nemen. 

Hiernaast heb ik vandaag voor het eerst een package geinstalleerd met npm, genaamd Swiper. Ik was op zoek naar een manier om snel en een op professionele manier een carousel te implementeren in mijn website. Swiper is hier zeer geschikt voor. Alle films worden nu netjes in een carousel getoond waar men doorheen kan navigeren. 

<img width="894" alt="Scherm­afbeelding 2024-04-07 om 13 59 30" src="https://github.com/Martino538/API-2024/assets/32341318/731121bc-f961-4bf5-9f1a-09ee1c709bd9"> </br>


Ook heb ik de styling een beetje aangepakt en staat er nu een film uitgelicht in de pageheader. Deze pageheader wil ik later laten rouleren tussen de 5 best scorende films. Hiervoor moet ik de de data die server-side gefetcht wordt ook client-side beschikbaar maken voor JavaScript. Dit ga ik morgen vragen aan de docent.

## Dag 3

Vandaag heb ik mij bezig gehouden met het koppelen van een tweede API call. Ik wil namelijk niet alleen de films tonen, maar ook de bijbehorende data van die film waar je op klikt. Hierbij heb ik geleerd over het gebruik van 'Promise'. Ook ben ik mij meer bewust geworden bij het gebruik van Async/Await. Soms wilde de data al laden voordat de pagina geladen was, wat fouten veroorzaakte.

<img width="1039" alt="Scherm­afbeelding 2024-04-07 om 13 58 29" src="https://github.com/Martino538/API-2024/assets/32341318/3abfccdb-2c11-4a79-ad7e-9cd58ad08b7a"> </br>


Momenteel is het mogelijk om op een film te drukken en wordt de detailpagina geladen met de bijbehorende data getoond. Het resultaat van de applicatie ziet er als volgt uit:

![localhost_3000_](https://github.com/Martino538/API-2024/assets/32341318/1b44d23b-ab7d-475f-abf7-7881224d8602) </br>

![Detailpagina](https://github.com/Martino538/API-2024/assets/32341318/f2a84b24-bd3f-4ef0-8575-73dab2383b0f)


## Dag 4
