# NVSProject

## URL zum Git-Repository:
https://github.com/SQLExceptionPhil/NVSProject

## Git-Namen zu Echtnamen:
Philipp H. - SQLExceptionPhil

## Umgesetzte Funktionalität:
Einen NodeJs Server welcher, Nachrichten verwaltet. Gesendete Nachrichten können mit dem prefix '?' ausgestattet werden um API-Zugriffe zu gewährleisten.
z.B.: ?love [name] ruft die Love-API auf die einen Prozentwert berechnet zu wie viel Prozent man zu dieser Person passt (leider hat die API manchmal ihre aussetzer)

Noch dazu habe ich einen NodeJs Client entwickelt, welcher Nachrichten senden/empfangen & Gruppen empfangen kann.

Und on-top habe ich eine Website programmiert, mit dem man sich die Nachrichten auf einer "schöneren" Oberfläche anzeigen kann. Noch dazu kann man auf der Website neue Gruppen erstellen.

## Welche packages wurden eingesetzt und wozu:

- body-parser -> um die Daten die über POST gesendet werden direkt als object zu haben
- express -> um routen zu definieren
- htmlspecialchars -> um xss zu verhindern
- mongoose -> um mich zur MongoDB zu verbinden & die Daten darauf zu verwalten
- unirest -> um Anfragen an die REST-Apis zu senden

- jQuery -> um dynamisch die Webseite zu verändern & für REST Zugriffe auf den Server
- cookie.js -> um Cookies einfacher zu verwalten: https://github.com/js-cookie/js-cookie
- howler.js -> um einen Notification Sound abzuspielen, wenn eine Nachricht kommt https://github.com/goldfire/howler.js

- request -> um im Node-Client post/get request zum Server zu senden
- yargs -> für Parameter im Node-Client

## Was muss man installiert haben, um das Projekt zu testen?
- Einen MongoDB Server
- nodeJs (npm install im backend Ordner)
- Die restlichen Funktionalitäten werden über cnds geladen

## Wie startet man den Server (was muss alles laufen & wie startet man es)?
- Der MongoDB Server muss gestartet sein
- im backend Ordner "node server.js" eingeben um den Server zu starten
- auf "localhost:3000" gehen um den Chaträumen beizutreten

PS:
Es besteht die Möglichkeit das Programm auf **http://phmann.tk:3000**  anzusehen

## Wie startet man den Client?
Mit node client.js startet man den Client (zu beachten ist, dass man davor npm install eingeben muss)

## Was sollte man im Client sehen?
Folgende Funktionalitäten sind eingebaut:
- node client.js send --content=[Nachricht] --group=[GruppenID] --author=[Name] => hiermit sendet man eine Nachricht und es wird die Nachricht und eine success message in der Console angezeigt
- node client.js listMessages --group=[GruppenID] => Hiermit lässt man sich alle Nachrichten anzeigen, die in einer Gruppe gesendet wurden
- node client.js addGroup --name=[GruppenName] => liefert die Gruppen-ID und den Gruppennamen zurück, noch dazu eine success message
- node client.js listGroups => hiermit kann man sich alle Gruppen anzeigen lassen

PS:
Wenn man die APIs benutzen möchte zuerst ?<love/urban> und dann warten und die Nachrichten anzeigen lassen. Der System Account wird eine Nachricht in die Gruppe schicken, in der die Nachricht gesendet wurde.

Verwendete Technologien:
- Express
- MongoDB
- jQuery
- cookie.js
- howler.js
- HTML
- CSS

## Worauf seid ihr besonders stolz/was war besonders schwer:
Ich bin besonders stolz auf die Einbindung von jQuery, da ich es mir für dieses Projekt selbst angeeignet habe. Wie Sie aber schon erwähnt haben, wäre es mit socket.io etwas besser gewesen. Jedoch funktioniert alles so wie es soll. Besonders schwer fand ich eigentlich nichts, da die Aufgabe ziemlich viel Spielraum gelassen hat.
