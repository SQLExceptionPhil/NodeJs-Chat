# NVSProject

<br><br>

URL zum Git-Repository:
<br>
https://github.com/SQLExceptionPhil/NVSProject
<br><br>

Git-Namen zu Echtnamen:
<br>
Philipp H. - SQLExceptionPhil
<br><br>

Umgesetzte Funktionalität:
<br>
Einen NodeJs Server welcher, Nachrichten verwaltet. Gesendete Nachrichten können mit dem prefix '?' ausgestattet werden um API-Zugriffe zu gewährleisten. <br>
z.B.: ?love <name> ruft die Love-API auf die einen Prozentwert berechnet zu wie viel Prozent man zu dieser Person passt (leider hat die API manchmal ihre aussetzer) <br><br>
Noch dazu habe ich einen NodeJs Client entwickelt, welcher Nachrichten senden/empfangen & Gruppen empfangen kann. <br><br>
Und on-top habe ich eine Website programmiert, mit dem man sich die Nachrichten auf einer "schöneren" Oberfläche anzeigen kann. Noch dazu kann man auf der Website neue Gruppen erstellen.
<br><br>
Welche packages wurden eingesetzt und wozu:
<br>
body-parser -> um die Daten die über POST gesendet werden direkt als object zu haben <br>
express -> um routen zu definieren <br>
htmlspecialchars -> um xss zu verhindern <br>
mongoose -> um mich zur MongoDB zu verbinden & die Daten darauf zu verwalten<br>
unirest -> um Anfragen an die REST-Apis zu senden <br><br>

jQuery -> um dynamisch die Webseite zu verändern & für REST Zugriffe auf den Server <br>
cookie.js -> um Cookies einfacher zu verwalten: https://github.com/js-cookie/js-cookie<br><br>

request -> um im Node-Client post/get request zum Server zu senden
<br><br>
Was muss man installiert haben, um das Projekt zu testen?
<br>
.) Einen MongoDB Server <br>
.) nodeJs (npm install im backend Ordner) <br>
.) Die restlichen Funktionalitäten werden über cnds geladen
<br><br>
Wie startet man den Server (was muss alles laufen & wie startet man es)?
<br>
.) Der MongoDB Server muss gestartet sein <br>
.) im backend Ordner "node server.js" eingeben um den Server zu starten <br>
.) auf "localhost:3000" gehen um den Chaträumen beizutreten <br>
<br>
PS:<br>
Es besteht die Möglichkeit das Programm auf http://phmann.tk:3000 anzusehen
<br><br>
Wie startet man den Client? (Parameter, etc.)
<br>
Mit node client.js startet man den Client (zu beachten ist, dass man davor npm install eingeben muss)
<br><br>
Was sollte man im Client sehen? (Wie ist er zu bedienen)
<br>
Folgende Funktionalitäten sind eingebaut: <br>
.) node client.js send --content=<Nachricht> --group=<GruppenID> --author=<Name> => hiermit sendet man eine Nachricht und es wird die Nachricht und eine success message in der Console angezeigt <br>
.) node client.js listMessages --group=<GruppenID> => Hiermit lässt man sich alle Nachrichten anzeigen, die in einer Gruppe gesendet wurden <br>
.) node client.js addGroup --name=<GruppenName> => liefert die Gruppen-ID und den Gruppennamen zurück, noch dazu eine success message <br>
.) node client.js listGroups => hiermit kann man sich alle Gruppen anzeigen lassen<br><br>
PS:<br>
Wenn man die APIs benutzen möchte zuerst ?<love/urban> und dann warten und die Nachrichten anzeigen lassen. Der System Account wird eine Nachricht in die Gruppe schicken, in der die Nachricht gesendet wurde.
<br><br>
Verwendete Technologien:
<br>
.) Express <br>
.) MongoDB <br>
.) jQuery <br>
.) cookie.js <br>
.) HTML <br>
.) CSS
<br><br>
Worauf seid ihr besonders stolz/was war besonders schwer:
<br>
Ich bin besonders stolz auf die Einbindung von jQuery, da ich es mir für dieses Projekt selbst angeeignet habe. Wie Sie aber schon erwähnt haben, wäre es mit socket.io etwas besser gewesen. Jedoch funktioniert alles so wie es soll. Besonders schwer fand ich eigentlich nichts, da die Aufgabe ziemlich viel Spielraum gelassen hat.
