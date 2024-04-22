# API Procesverslag

## Mijn idee
Ik wil een soorgelijke applicatie maken als netflix. Hierbij ga ik werken met de API van [TheMovieDB](https://developer.themoviedb.org/). Ik wil meer leren over het binnenhalen en verder werken met data. Ik het graag voor de gebruiker mogelijk maken om films te zien, details van een specifieke film te bekijken en kunnen zoeken naar films.

## Deze applicatie bevat de volgende technieken:
- EJS
- Vite
- Render (Deployment)
- NodeJS
- Git
- Express
- Node fetch
- Dotenv

## Mijn applicatie installeren
1. **Clone de repository:**</br>
git clone https://github.com/Martino538/API-2024

2. **Installeer NPM**</br>
npm install

3. **Start de applicatie d.m.v. NodeJS**</br>
npm run start

## Het proces

### Week 1

#### Dag 1 (02-04-2024)
Deze dag was de intro dit vak: API's. Super leuk want dit onderwerp boeit mij erg. Ik vind het interresant om met data te werken. Het binnenhalen via een API en hiermee werken vind ik dan ook super leerzaam. Ik het dit voor het eerst gedaan bij WAFS.

#### Pagina's
De volgende functionaliteiten en pagina's zullen worden uitgewerkt:a
- Homepagina
- Detailpagina
- Zoekresultaten pagina
- GSAP integratie

Ik ben begonnen met het analyseren van de bestanden uit de bestaande template (Liquid). Ik ben een beetje bekend met de mappenstructuur, omdat ik op mijn werk een soortgelijke structuur hanteer bij het maken van wordpress websites. Echter had ik nog wel een boel vragen, want veel van deze bestanden bevatten code die ik niet snapte. Als voorbeeld is hier de server.js. Ik heb nog nooit met routing gewerkt en wist dus niet wat het deed. Na vragen gesteld te hebben ben ik begonnen met het koppelen van de API en de data te fetchen in server.js. Dit ging achteraf vrij gemakkelijk en het is mij gelukt de data uit te lezen op mijn index. Momenteel bevinden zich de titel, beschrijving en afbeelding van alle films op mijn index.

Volgende week wil ik een 2e url fetchen, waardoor ik alle details van een film kan tonen zodra er op een film gedrukt wordt.

#### Dag 2 (08-04-2024)
Na het verder analyseren van de code merk ik dat ik toch veel moeite heb om uit mezelf verder te komen met de applicatie. Daarnaast is vragen stellen lastiger, omdat al mijn klasgenoten EJS gebruiken. Om deze rede heb ik besloten om te schakelen naar EJS, zodat ik makkelijker vragen kan stellen. Daarnaast vind ik de logica van EJS iets makkelijker tot me te nemen. 

Hiernaast heb ik vandaag voor het eerst een package geinstalleerd met npm, genaamd Swiper. Ik was op zoek naar een manier om snel en een op professionele manier een carousel te implementeren in mijn website. Swiper is hier zeer geschikt voor. Alle films worden nu netjes in een carousel getoond waar men doorheen kan navigeren. 

<img width="894" alt="Scherm­afbeelding 2024-04-07 om 13 59 30" src="https://github.com/Martino538/API-2024/assets/32341318/731121bc-f961-4bf5-9f1a-09ee1c709bd9"> </br>


Ook heb ik de styling een beetje aangepakt en staat er nu een film uitgelicht in de pageheader. Deze pageheader wil ik later laten rouleren tussen de 5 best scorende films. Hiervoor moet ik de de data die server-side gefetcht wordt ook client-side beschikbaar maken voor JavaScript. Dit ga ik morgen vragen aan de docent.

#### Dag 3 (09-04-2024)
Vandaag heb ik mij bezig gehouden met het koppelen van een tweede API call. Ik wil namelijk niet alleen de films tonen, maar ook de bijbehorende data van die film waar je op klikt. Hierbij heb ik geleerd over het gebruik van 'Promise'. Ook ben ik mij meer bewust geworden bij het gebruik van Async/Await. Soms wilde de data al laden voordat de pagina geladen was, wat fouten veroorzaakte.

<img width="1039" alt="Scherm­afbeelding 2024-04-07 om 13 58 29" src="https://github.com/Martino538/API-2024/assets/32341318/3abfccdb-2c11-4a79-ad7e-9cd58ad08b7a"> </br>

Momenteel is het mogelijk om op een film te drukken en wordt de detailpagina geladen met de bijbehorende data getoond. Het resultaat van de applicatie ziet er als volgt uit:

![localhost_3000_](https://github.com/Martino538/API-2024/assets/32341318/1b44d23b-ab7d-475f-abf7-7881224d8602) </br>

![Detailpagina](https://github.com/Martino538/API-2024/assets/32341318/f2a84b24-bd3f-4ef0-8575-73dab2383b0f)


#### Dag 4 (15-04-2024)
Nu een groot deel van de functionaliteiten werkend zijn wil ik wat meer naar de styling van de detailpagina kijken. Het resultaat is hieronder zichtbaar:


Ik vond het zelf nog een beetje leeg en wilde het nog aanvullen met meer informatie. Ik ben gaan zoeken en zag dat er ook reviews van alle films beschikbaar waren. Nadat ik deze op het scherm heb getoond zag ik dat niet alle reviews een afbeelding hadden. Ik heb er daarom voor gezorgd dat er een standaard afbeeldinge getoond wordt als een gebruiker geen afbeelding heeft. De code hiervan is hieronder te zien, samen met het resultaat:

<img width="1175" alt="Scherm­afbeelding 2024-04-22 om 23 02 09" src="https://github.com/Martino538/API-2024/assets/32341318/3743b753-838c-4b9f-911a-01701099a7aa">

#### Dag 5 (16-04-2024)
Vandaag werd ik erop gewezen dat een zoekfunctie een goede toevoeging kan zijn voor mijn applicatie. Vooraf dacht ik dat dit best ingewikkeld zou zijn, maar dit bleek anders te liggen. Eerst haal je de zoekterm op uit de URL en die stop je in de url, die daarna gefetcht wordt. Hierdoor krijg je de resultaten die overeenkomen met jouw zoekterm. Vervolgens kwam ik erachter dat er ook films tussen zaten die geen afbeeldingen bevatten. Door deze functionaliteit heb ik geleerd wat .filter doet op een dataset. Nu worden alleen de films getoond die een afbeelding hebben. De code hiervan is hieronder te zien:

<img width="840" alt="Scherm­afbeelding 2024-04-22 om 23 19 58" src="https://github.com/Martino538/API-2024/assets/32341318/88b6ecc5-9be8-4653-9e02-d6c19cbc8425">

<img width="888" alt="Scherm­afbeelding 2024-04-22 om 23 15 35" src="https://github.com/Martino538/API-2024/assets/32341318/8f6d2288-1063-407d-9e92-a93789a2ceb3">

Nu ziet het er als volgt uit:
<img width="1759" alt="Scherm­afbeelding 2024-04-23 om 00 01 57" src="https://github.com/Martino538/API-2024/assets/32341318/06298842-7edd-4011-8e48-a53c2d6b988e">

#### Dag 6 (22-04-2024)
Vandaag is de laatste dag dat ik aan mijn applicatie gewerkt heb. Ik heb de puntjes op de i gezet door op de index pagina de bijbehorende afbeelding voor de top 5 films te tonen. Voorheen had ik het idee dat hier geen afbeeldingen beschikbaar voor waren, maar de backdrop afbeelding bied wel mogelijkheden om het resultaat te behalen wat ik wilde. Ik heb dit doorgevoerd en het ziet er als volgt uit:
<img width="1780" alt="Scherm­afbeelding 2024-04-23 om 00 08 06" src="https://github.com/Martino538/API-2024/assets/32341318/acd63581-6b47-4962-8238-84aa8a2d9bb6">

Hiernaast wil ik ook iets doen met GSAP. Ookal is het iets kleins en is er nog een hele wereld om te ontdekken, heb mijn eerste kleine GSAP animatie toegevoegd:</br>
![chrome-capture-2024-4-23](https://github.com/Martino538/API-2024/assets/32341318/47fdd55e-1dfc-4dbf-9886-dea013b36055)



