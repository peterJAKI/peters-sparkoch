/* Peters Sparkoch – deftige Gerichte, Hausmannskost und Festtagsessen (Zeit bis 90 Minuten).
   Wird nach daten-mehr.js geladen. Neue Rezepte immer hinten anhängen (die Nummern bleiben stabil).
   kat: 'deftig' = Hausmannskost, 'fest' = Festtagsessen (zum Beispiel Weihnachten) */

/* Neue Zutaten */
Z('schweinebraten','Schweinebraten (Nacken)',6.99,1000,'g','fleisch','fleisch');
Z('schweineschnitzel','Schweineschnitzel',4.49,400,'g','fleisch','fleisch');
Z('rindergulasch','Rindergulasch',6.49,500,'g','fleisch','fleisch');
Z('rinderrouladen','Rinderrouladen',8.99,600,'g','fleisch','fleisch');
Z('kassler','Kassler',4.99,500,'g','fleisch','fleisch');
Z('bratwurst','Bratwürste',3.49,6,'Stk','fleisch','fleisch');
Z('wuerstchen','Wiener Würstchen',1.99,4,'Stk','fleisch','fleisch');
Z('entenkeule','Entenkeulen',6.49,2,'Stk','fleisch','fleisch');
Z('brathaehnchen','Brathähnchen (ganz)',4.99,1,'Stk','fleisch','fleisch');
Z('rotkohl','Rotkohl (Glas)',1.79,700,'g','trocken');
Z('sauerkraut','Sauerkraut (Dose)',1.19,520,'g','trocken');
Z('weisskohl','Weißkohl',1.19,1000,'g','gemuese');
Z('knoedel','Knödel (Kartoffel oder Semmel)',1.49,6,'Stk','trocken');
Z('spaetzle','Spätzle (frisch)',1.99,500,'g','trocken');
Z('semmelbroesel','Semmelbrösel',0.79,400,'g','trocken');
Z('sahne','Sahne',0.89,200,'ml','milch');
Z('preiselbeeren','Preiselbeeren (Glas)',1.79,400,'g','trocken');
Z('tellerlinsen','Tellerlinsen',1.69,500,'g','trocken');
Z('gelbeerbsen','Gelbe Erbsen (trocken)',1.69,500,'g','trocken');
Z('weisse_bohnen','Weiße Bohnen (Dose)',0.79,400,'g','trocken');
Z('graupen','Graupen',1.29,500,'g','trocken');
Z('majoran','Majoran',0.99,15,'g','sonstiges');
Z('muskat','Muskat',1.49,20,'g','sonstiges');
Z('zucker','Zucker',1.19,1000,'g','sonstiges');

function RK(kat, name, zeit, geraet, badges, zutaten, schritte){
  R(name, zeit, geraet, badges, zutaten, schritte);
  REZEPTE[REZEPTE.length - 1].kat = kat;
}

/* ---------- Festtagsessen ---------- */
RK('fest','Schweinebraten mit Knödeln und Rotkohl',90,'ofen',['Festtagsessen','Viel Eiweiß','Sättigend'],
 [['schweinebraten',200],['knoedel',2],['rotkohl',150],['zwiebel',50],['moehre',50],['senf',10],['majoran',1],['bruehe',0.5],['mehl',5],['oel',10]],
 ['Ofen auf 180 Grad vorheizen.','Braten mit Salz, Pfeffer, Senf und Majoran einreiben.','Öl in einem Bräter erhitzen und den Braten rundherum 8 Minuten anbraten.','Zwiebel und Möhre grob schneiden, dazugeben und mit Brühe (Wasser und Brühwürfel) angießen.','Im Ofen 60 Minuten garen und zwischendurch mit dem Saft übergießen.','Rotkohl 10 Minuten erhitzen. Knödel nach Packung 20 Minuten in Salzwasser gar ziehen lassen.','Braten aufschneiden, die Soße mit Mehl andicken und alles zusammen servieren.']);

RK('fest','Entenkeule mit Rotkohl und Knödeln',90,'ofen',['Festtagsessen','Sättigend'],
 [['entenkeule',1],['rotkohl',150],['knoedel',2],['zwiebel',30],['apfel',60],['preiselbeeren',20],['majoran',1],['oel',5]],
 ['Ofen auf 180 Grad vorheizen.','Entenkeulen mit Salz, Pfeffer und Majoran würzen und auf ein Blech legen.','Apfel und Zwiebel in Stücke schneiden und dazugeben.','70 Minuten backen, bis die Haut knusprig ist.','Rotkohl 10 Minuten erhitzen. Knödel nach Packung 20 Minuten in Salzwasser gar ziehen lassen.','Mit Preiselbeeren servieren.']);

RK('fest','Rinderrouladen mit Kartoffeln und Rotkohl',90,'herd',['Festtagsessen','Viel Eiweiß','Sättigend'],
 [['rinderrouladen',200],['speck',20],['zwiebel',50],['senf',10],['moehre',50],['bruehe',1],['mehl',10],['oel',8],['kartoffel',250],['rotkohl',100]],
 ['Rouladen flach legen, salzen und mit Senf bestreichen.','Mit Speck und Zwiebelstreifen belegen, einrollen und mit Küchengarn fest binden.','In Öl rundherum 8 Minuten scharf anbraten.','Möhre würfeln, mit der Brühe dazugeben, Deckel auflegen und 60 Minuten leise schmoren.','Kartoffeln 20 Minuten kochen und Rotkohl 10 Minuten erhitzen.','Soße mit Mehl andicken und die Rouladen mit Kartoffeln und Rotkohl servieren.']);

RK('fest','Brathähnchen aus dem Ofen mit Kartoffeln und Möhren',80,'ofen',['Festtagsessen','Viel Eiweiß'],
 [['brathaehnchen',0.25],['kartoffel',250],['moehre',100],['zwiebel',40],['paprikapulver',3],['oel',10]],
 ['Ofen auf 200 Grad vorheizen.','Hähnchen mit Öl, Paprikapulver und Salz einreiben und auf ein Blech legen.','Kartoffeln, Möhren und Zwiebel grob schneiden und rundherum verteilen.','60 Minuten braten, bis die Haut knusprig ist.','Hähnchen zerteilen und mit dem Gemüse servieren.']);

RK('fest','Schweinebraten mit Kruste, Sauerkraut und Kartoffeln',90,'ofen',['Festtagsessen','Viel Eiweiß','Sättigend'],
 [['schweinebraten',200],['sauerkraut',150],['kartoffel',250],['zwiebel',40],['senf',10],['majoran',1],['bruehe',0.5],['oel',8]],
 ['Ofen auf 200 Grad vorheizen.','Braten mit Salz, Senf und Majoran einreiben.','Mit der Fettseite nach oben in eine Form legen, Zwiebelstücke und Brühe (Wasser und Brühwürfel) dazugeben.','Im Ofen 65 Minuten braten, bis die Kruste knusprig ist.','Kartoffeln 20 Minuten kochen und Sauerkraut 15 Minuten erhitzen.','Braten aufschneiden und mit Sauerkraut und Kartoffeln servieren.']);

/* ---------- Deftiges und Hausmannskost ---------- */
RK('deftig','Rindergulasch mit Spätzle',90,'herd',['Deftig','Viel Eiweiß','Sättigend'],
 [['rindergulasch',150],['spaetzle',150],['zwiebel',80],['paprika',0.5],['tomatenmark',15],['paprikapulver',4],['bruehe',1],['oel',8]],
 ['Zwiebeln und Paprika würfeln.','Fleisch in Öl 8 Minuten kräftig anbraten, Zwiebeln dazugeben und 5 Minuten mitbraten.','Tomatenmark und Paprikapulver einrühren, Brühe (Wasser und Brühwürfel) dazugießen.','Zugedeckt 60 Minuten leise köcheln, bis das Fleisch zart ist.','Spätzle 3 Minuten erhitzen und dazu servieren.']);

RK('deftig','Kassler mit Sauerkraut und Kartoffelpüree',50,'herd',['Deftig','Viel Eiweiß'],
 [['kassler',150],['sauerkraut',150],['kartoffel',250],['milch',60],['butter',10],['zwiebel',20],['muskat',1]],
 ['Kassler mit Zwiebel und Sauerkraut in einem Topf mit etwas Wasser zugedeckt 25 Minuten garen.','Kartoffeln schälen, würfeln und 20 Minuten kochen.','Abgießen, mit Milch, Butter und Muskat zu Püree stampfen.','Alles zusammen servieren.']);

RK('deftig','Schweineschnitzel mit Kartoffelsalat',45,'herd',['Deftig','Viel Eiweiß'],
 [['schweineschnitzel',150],['semmelbroesel',30],['eier',0.5],['mehl',10],['oel',20],['kartoffel',250],['zwiebel',20],['essig',10],['senf',10],['bruehe',0.5]],
 ['Kartoffeln 20 Minuten kochen, pellen und in Scheiben schneiden.','Zwiebel klein würfeln, mit heißer Brühe, Essig, Senf und etwas Öl mischen und über die Kartoffeln geben.','Schnitzel klopfen, salzen und nacheinander in Mehl, Ei und Semmelbröseln wenden.','In heißem Öl von jeder Seite 4 Minuten goldbraun braten.','Mit dem Kartoffelsalat servieren.']);

RK('deftig','Bratwurst mit Sauerkraut und Kartoffelpüree',35,'herd',['Deftig','Sättigend'],
 [['bratwurst',2],['sauerkraut',150],['kartoffel',250],['milch',60],['butter',10],['oel',5]],
 ['Kartoffeln schälen, würfeln und 20 Minuten kochen.','Bratwürste in Öl rundherum 12 Minuten braten.','Sauerkraut 10 Minuten in einem Topf erhitzen.','Kartoffeln mit Milch und Butter zu Püree stampfen und alles servieren.']);

RK('deftig','Linseneintopf mit Würstchen',45,'herd',['Deftig','Viel Eiweiß','Sättigend'],
 [['tellerlinsen',80],['wuerstchen',2],['kartoffel',100],['moehre',60],['zwiebel',30],['lauch',0.25],['essig',5],['bruehe',0.5],['oel',5]],
 ['Kartoffeln, Möhren und Lauch klein schneiden.','Zwiebel in Öl 3 Minuten anbraten.','Linsen, Gemüse, Brühwürfel und Wasser dazugeben und 30 Minuten köcheln.','Würstchen in Scheiben schneiden und 5 Minuten miterhitzen.','Mit Essig abschmecken.']);

RK('deftig','Erbseneintopf mit Würstchen',60,'herd',['Deftig','Viel Eiweiß','Sättigend'],
 [['gelbeerbsen',80],['wuerstchen',2],['kartoffel',120],['moehre',60],['zwiebel',30],['bruehe',0.5],['majoran',1],['oel',5]],
 ['Erbsen waschen. Kartoffeln und Möhren würfeln.','Zwiebel in Öl 3 Minuten anbraten.','Erbsen, Gemüse, Brühwürfel, Majoran und Wasser dazugeben und 45 Minuten köcheln.','Würstchen in Scheiben schneiden und 5 Minuten miterhitzen.']);

RK('deftig','Kartoffelsuppe mit Würstchen',40,'herd',['Deftig','Viel Gemüse','Günstig'],
 [['kartoffel',250],['moehre',60],['lauch',0.5],['zwiebel',30],['wuerstchen',1],['bruehe',0.5],['majoran',1],['oel',5]],
 ['Kartoffeln und Möhren würfeln, Lauch in Ringe schneiden.','Zwiebel in Öl 3 Minuten anbraten, Gemüse kurz mitbraten.','Mit Wasser bedecken, Brühwürfel und Majoran dazugeben und 25 Minuten kochen.','Würstchen in Scheiben schneiden und 5 Minuten miterhitzen.']);

RK('deftig','Gulaschsuppe',60,'herd',['Deftig','Viel Eiweiß','Viel Gemüse'],
 [['rindergulasch',100],['kartoffel',100],['paprika',1],['zwiebel',60],['tomatenmark',10],['paprikapulver',4],['bruehe',1],['oel',8]],
 ['Zwiebeln, Paprika und Kartoffeln würfeln.','Fleisch in Öl 8 Minuten anbraten, Zwiebeln dazugeben.','Tomatenmark und Paprikapulver einrühren, Brühe (Wasser und Brühwürfel) dazugießen.','45 Minuten köcheln, Paprika und Kartoffeln für die letzten 20 Minuten dazugeben.']);

RK('deftig','Hackbraten mit Kartoffelpüree und Möhren',80,'ofen',['Deftig','Viel Eiweiß','Sättigend'],
 [['hackfleisch',150],['eier',0.5],['semmelbroesel',20],['zwiebel',40],['senf',10],['kartoffel',250],['milch',60],['butter',10],['moehre',100]],
 ['Ofen auf 180 Grad vorheizen.','Hack mit Ei, Semmelbröseln, klein gewürfelter Zwiebel, Senf und Salz verkneten.','Einen Laib formen, in eine Form legen und 50 Minuten backen.','Kartoffeln und Möhren würfeln und 20 Minuten kochen.','Kartoffeln mit Milch und Butter zu Püree stampfen und alles servieren.']);

RK('deftig','Frikadellen mit Kartoffelsalat',40,'herd',['Deftig','Viel Eiweiß'],
 [['hackfleisch',150],['semmelbroesel',20],['zwiebel',40],['senf',10],['eier',0.5],['kartoffel',250],['essig',10],['oel',15],['bruehe',0.5]],
 ['Kartoffeln 20 Minuten kochen, pellen und in Scheiben schneiden.','Mit heißer Brühe, Essig, etwas Öl und klein gewürfelter Zwiebel zum Salat mischen.','Hack mit Ei, Semmelbröseln, Zwiebel, Senf und Salz verkneten und Frikadellen formen.','In Öl von jeder Seite 6 Minuten braten und mit dem Salat servieren.']);

RK('deftig','Königsberger Klopse mit Kartoffeln',50,'herd',['Deftig','Viel Eiweiß'],
 [['hackfleisch',150],['semmelbroesel',15],['eier',0.5],['zwiebel',30],['mehl',15],['butter',10],['sahne',50],['bruehe',1],['kartoffel',250]],
 ['Hack mit Ei, Semmelbröseln, klein gewürfelter Zwiebel und Salz verkneten und Klopse formen.','Brühe aufkochen, Klopse hineingeben und 15 Minuten gar ziehen lassen.','Kartoffeln schälen und 20 Minuten kochen.','Butter schmelzen, Mehl einrühren, mit Klopsebrühe und Sahne zu einer Soße kochen, 5 Minuten köcheln.','Klopse mit Soße und Kartoffeln servieren.']);

RK('deftig','Kohlrouladen mit Kartoffeln',90,'ofen',['Deftig','Viel Gemüse','Sättigend'],
 [['weisskohl',250],['hackfleisch',120],['zwiebel',40],['eier',0.5],['tomatenmark',10],['bruehe',1],['kartoffel',200],['oel',5]],
 ['Ofen auf 180 Grad vorheizen. Kohlblätter ablösen und 5 Minuten in Salzwasser weich kochen.','Hack mit Zwiebel, Ei und Salz verkneten.','Kohlblätter damit füllen, einrollen und mit Küchengarn binden.','In Öl 6 Minuten anbraten, mit Brühe und Tomatenmark in eine Form geben.','50 Minuten backen. Kartoffeln 20 Minuten kochen und dazu servieren.']);

RK('deftig','Hühnerfrikassee mit Reis und Erbsen',45,'herd',['Deftig','Viel Eiweiß'],
 [['haehnchenbrust',150],['reis',70],['erbsen',60],['moehre',60],['sahne',60],['mehl',15],['bruehe',1],['butter',10]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Hähnchen in Brühe 15 Minuten gar ziehen lassen, herausnehmen und würfeln.','Butter schmelzen, Mehl einrühren, mit der Brühe ablöschen und Sahne dazugeben.','Möhren, Erbsen und Hähnchen dazugeben und 10 Minuten köcheln.','Mit dem Reis servieren.']);

RK('deftig','Rahmgeschnetzeltes mit Spätzle',35,'herd',['Deftig','Viel Eiweiß'],
 [['putenbrust',130],['spaetzle',150],['champignon',80],['zwiebel',30],['sahne',80],['bruehe',0.5],['oel',5]],
 ['Pute in Streifen schneiden, Zwiebel und Champignons in Scheiben schneiden.','Fleisch in Öl 6 Minuten anbraten, Zwiebel und Champignons dazugeben und 5 Minuten braten.','Mit Brühe (Wasser und Brühwürfel) und Sahne ablöschen und 8 Minuten köcheln.','Spätzle 3 Minuten erhitzen und dazu servieren.']);

RK('deftig','Käsespätzle mit Röstzwiebeln',35,'herd',['Deftig','Sättigend'],
 [['spaetzle',200],['kaese',60],['zwiebel',60],['butter',10],['oel',5]],
 ['Zwiebeln in Ringe schneiden und in Butter und Öl 15 Minuten goldbraun braten.','Spätzle in einer Pfanne mit dem Käse 5 Minuten unter Rühren erhitzen, bis der Käse schmilzt.','Mit den Röstzwiebeln bestreuen.']);

RK('deftig','Kartoffelpuffer mit Apfelmus',45,'herd',['Deftig','Günstig'],
 [['kartoffel',300],['eier',1],['mehl',20],['zwiebel',20],['apfel',150],['zucker',10],['oel',25]],
 ['Äpfel schälen, würfeln und mit Zucker und etwas Wasser 15 Minuten zu Mus kochen.','Kartoffeln und Zwiebel raspeln und gut ausdrücken.','Mit Ei, Mehl und Salz verrühren.','In heißem Öl kleine Puffer von jeder Seite 4 Minuten goldbraun backen.','Mit Apfelmus servieren.']);

RK('deftig','Kartoffel-Speck-Auflauf',70,'ofen',['Deftig','Sättigend'],
 [['kartoffel',300],['speck',40],['sahne',80],['kaese',30],['zwiebel',30],['milch',50],['muskat',1]],
 ['Ofen auf 190 Grad vorheizen.','Kartoffeln in dünne Scheiben schneiden, Zwiebel würfeln.','Mit Speck in eine Form schichten.','Sahne, Milch, Muskat und Salz verrühren und darübergießen, Käse darüberstreuen.','50 Minuten backen.']);

RK('deftig','Bratkartoffeln mit Speck und Spiegelei',35,'herd',['Deftig','Viel Eiweiß'],
 [['kartoffel',300],['speck',40],['zwiebel',40],['eier',2],['oel',10]],
 ['Kartoffeln in Scheiben schneiden und 20 Minuten in Öl braten.','Speck und Zwiebel würfeln und für die letzten 8 Minuten dazugeben.','Spiegeleier in einer zweiten Pfanne 4 Minuten braten.','Alles zusammen anrichten.']);

RK('deftig','Pellkartoffeln mit Kräuterquark',35,'herd',['Deftig','Günstig','Leicht'],
 [['kartoffel',350],['quark',150],['zwiebel',20],['kraeuter',1],['gurke',0.25],['oel',5]],
 ['Kartoffeln mit Schale 25 Minuten kochen.','Quark mit klein gewürfelter Zwiebel, Kräutern, Öl und Salz verrühren.','Gurke in Scheiben schneiden.','Kartoffeln pellen und mit Quark und Gurke servieren.']);

RK('deftig','Weißer-Bohnen-Eintopf mit Speck',35,'schnellkochtopf',['Deftig','Viel Eiweiß','Günstig'],
 [['weisse_bohnen',120],['kartoffel',100],['moehre',60],['speck',30],['zwiebel',30],['bruehe',0.5]],
 ['Kartoffeln, Möhren, Zwiebel und Speck würfeln.','Speck im Schnellkochtopf 3 Minuten anbraten, Zwiebel und Gemüse dazugeben.','Bohnen, Brühwürfel und Wasser dazugeben, Deckel schließen.','10 Minuten auf Stufe 2 garen, Druck ablassen und abschmecken.']);

RK('deftig','Graupeneintopf mit Gemüse',60,'herd',['Deftig','Viel Gemüse','Günstig'],
 [['graupen',60],['moehre',80],['kartoffel',100],['lauch',0.5],['zwiebel',30],['bruehe',0.5],['majoran',1]],
 ['Gemüse und Zwiebel klein schneiden.','Graupen, Gemüse, Brühwürfel, Majoran und Wasser in einen Topf geben.','45 Minuten köcheln, bis die Graupen weich sind.','Mit Salz abschmecken.']);

RK('deftig','Weißkohl-Eintopf mit Hack',50,'herd',['Deftig','Viel Gemüse','Viel Eiweiß'],
 [['weisskohl',200],['hackfleisch',80],['kartoffel',150],['zwiebel',40],['tomatenmark',10],['bruehe',0.5],['paprikapulver',2],['oel',5]],
 ['Kohl in Streifen, Kartoffeln und Zwiebel würfeln.','Hack mit Zwiebel in Öl 6 Minuten anbraten.','Tomatenmark, Paprikapulver, Kohl, Kartoffeln, Brühwürfel und Wasser dazugeben.','30 Minuten köcheln und abschmecken.']);

RK('deftig','Rotkohl mit Apfel und Bratwurst',50,'herd',['Deftig','Sättigend'],
 [['rotkohl',200],['apfel',80],['bratwurst',2],['kartoffel',200],['zwiebel',20],['oel',5]],
 ['Kartoffeln 20 Minuten kochen.','Zwiebel und Apfel würfeln und in einem Topf mit Rotkohl 15 Minuten erhitzen.','Bratwürste in Öl 12 Minuten rundherum braten.','Alles zusammen servieren.']);

RK('deftig','Seelachs in Senfsoße mit Kartoffeln',35,'herd',['Deftig','Viel Eiweiß'],
 [['seelachs',150],['kartoffel',250],['senf',15],['sahne',50],['zwiebel',20],['butter',10]],
 ['Kartoffeln schälen und 20 Minuten kochen.','Zwiebel klein würfeln und in Butter 3 Minuten braten.','Sahne und Senf dazugeben, den Fisch hineinlegen und zugedeckt 8 Minuten gar ziehen lassen.','Mit den Kartoffeln servieren.']);

RK('deftig','Nudelauflauf mit Speck und Käse',55,'ofen',['Deftig','Sättigend'],
 [['nudeln',90],['speck',40],['sahne',80],['kaese',50],['eier',1],['zwiebel',30]],
 ['Ofen auf 190 Grad vorheizen. Nudeln 6 Minuten kochen.','Speck und Zwiebel würfeln und 5 Minuten anbraten.','Sahne und Ei verquirlen, mit Salz würzen.','Nudeln, Speck und Zwiebel in eine Form geben, den Guss darübergießen und mit Käse bestreuen.','25 Minuten backen.']);

RK('deftig','Kartoffelknödel mit Rahmchampignons',40,'herd',['Deftig','Sättigend'],
 [['knoedel',2],['champignon',150],['zwiebel',30],['sahne',80],['oel',5]],
 ['Knödel nach Packung 20 Minuten in Salzwasser gar ziehen lassen.','Champignons und Zwiebel schneiden und in Öl 8 Minuten braten.','Sahne dazugeben, salzen und 5 Minuten köcheln.','Knödel mit den Rahmchampignons servieren.']);

RK('deftig','Spaghetti Carbonara',25,'herd',['Deftig','Sättigend'],
 [['nudeln',100],['speck',50],['eier',1],['parmesan',25]],
 ['Nudeln 9 Minuten in Salzwasser kochen.','Speck würfeln und in einer Pfanne 5 Minuten knusprig braten.','Ei mit Parmesan und Pfeffer verrühren.','Nudeln abgießen, mit dem Speck mischen, vom Herd nehmen und das Ei unterrühren.']);

RK('deftig','Currywurst mit Pommes aus der Fritteuse',35,'fritteuse',['Deftig','Sättigend'],
 [['bratwurst',2],['kartoffel',250],['passata',80],['curry',3],['zwiebel',20],['essig',5],['zucker',5],['oel',10]],
 ['Kartoffeln in Stifte schneiden und mit Öl mischen.','Bei 190 Grad 20 Minuten in der Heißluftfritteuse garen, zweimal schütteln.','Zwiebel würfeln, mit Passata, Curry, Essig und Zucker 10 Minuten zu einer Soße köcheln.','Bratwürste dazulegen und die letzten 10 Minuten mitgaren.','Würste in Scheiben schneiden und mit Soße und Pommes servieren.']);

RK('deftig','Panierter Seelachs mit Kartoffelsalat',40,'fritteuse',['Deftig','Viel Eiweiß'],
 [['seelachs',150],['semmelbroesel',30],['eier',0.5],['mehl',15],['kartoffel',250],['zwiebel',20],['essig',10],['senf',10],['bruehe',0.5],['oel',15]],
 ['Kartoffeln 20 Minuten kochen, pellen, in Scheiben schneiden und mit heißer Brühe, Essig, Senf, Zwiebel und etwas Öl zum Salat mischen.','Fisch salzen und nacheinander in Mehl, Ei und Semmelbröseln wenden.','Mit Öl beträufeln und bei 180 Grad 12 Minuten in der Heißluftfritteuse garen.','Mit dem Kartoffelsalat servieren.']);

RK('deftig','Kaiserschmarrn mit Apfelmus',35,'herd',['Deftig','Günstig'],
 [['mehl',70],['eier',2],['milch',120],['zucker',20],['apfel',150],['butter',15]],
 ['Äpfel schälen, würfeln und mit etwas Zucker und Wasser 15 Minuten zu Mus kochen.','Mehl, Eier, Milch und Zucker zu einem glatten Teig verrühren.','Butter in der Pfanne erhitzen, Teig hineingeben und 4 Minuten backen.','Wenden, mit zwei Gabeln zerreißen und noch 4 Minuten braten.','Mit Apfelmus servieren.']);

RK('deftig','Kartoffelrösti mit Spiegelei und Salat',35,'herd',['Deftig','Viel Eiweiß','Günstig'],
 [['kartoffel',300],['eier',2],['zwiebel',30],['oel',15],['salat',0.25],['tomate',60]],
 ['Kartoffeln und Zwiebel raspeln und gut ausdrücken, mit Salz würzen.','In Öl zu zwei flachen Rösti formen und von jeder Seite 8 Minuten braten.','Spiegeleier 4 Minuten braten.','Salat und Tomate klein schneiden und dazu servieren.']);
