/* Peters Sparkoch – Afrikanische und türkische Küche (je 20 Rezepte).
   Wird nach daten-deftig.js geladen. Neue Rezepte immer hinten anhängen (die Nummern bleiben stabil).
   kat: 'afrika' = afrikanische Küche, 'tuerkisch' = türkische Küche */

/* ---------- Neue Gewürze (Bereich „Gewürze“) ---------- */
Z('kreuzkuemmel','Kreuzkümmel (Cumin)',1.29,40,'g','gewuerz');
Z('koriander','Koriander (gemahlen)',1.29,30,'g','gewuerz');
Z('zimt','Zimt',1.19,40,'g','gewuerz');
Z('kurkuma','Kurkuma',1.29,40,'g','gewuerz');
Z('ras_el_hanout','Ras el Hanout',1.99,40,'g','gewuerz');
Z('chiliflocken','Chiliflocken',1.29,30,'g','gewuerz');
Z('oregano','Oregano',0.99,15,'g','gewuerz');
Z('minze','Minze (getrocknet)',0.99,15,'g','gewuerz');
Z('sumach','Sumach',1.79,40,'g','gewuerz');
Z('ingwer','Ingwer (Pulver)',1.29,35,'g','gewuerz');

/* ---------- Neue Zutaten ---------- */
Z('petersilie','Bund Petersilie',0.99,1,'Stk','gemuese');
Z('okra','Okra (TK)',1.99,450,'g','tiefkuehl');
Z('rinderhack','Rinderhack',4.49,500,'g','fleisch','fleisch');
Z('fladenbrot','Fladenbrot',0.99,1,'Stk','brot');
Z('yufka','Yufka-Teig (Filoteig)',2.49,8,'Stk','brot');
Z('harissa','Harissa-Paste',1.99,90,'g','trocken');
Z('tahin','Tahini (Sesampaste)',3.49,250,'g','trocken');
Z('erdnussbutter','Erdnussbutter',2.49,350,'g','trocken');
Z('erdnuesse','Erdnüsse (ungesalzen)',1.99,200,'g','trocken');
Z('mandeln','Mandeln',2.49,200,'g','trocken');
Z('datteln','Datteln',1.99,250,'g','trocken');
Z('rosinen','Rosinen',1.29,250,'g','trocken');
Z('maisgriess','Maisgrieß (Polenta)',1.49,500,'g','trocken');

function RW(kat, name, zeit, geraet, badges, zutaten, schritte){
  R(name, zeit, geraet, badges, zutaten, schritte);
  REZEPTE[REZEPTE.length - 1].kat = kat;
}

/* ======================= AFRIKANISCHE KÜCHE (20) ======================= */

RW('afrika','Hähnchen-Tajine mit Datteln und Mandeln (Marokko)',60,'herd',['Afrikanisch','Viel Eiweiß'],
 [['haehnchenbrust',130],['zwiebel',50],['datteln',30],['mandeln',15],['kreuzkuemmel',2],['zimt',1],['kurkuma',1],['knoblauch',1],['bruehe',0.5],['couscous',60],['oel',8]],
 ['Zwiebel in Ringe schneiden, Knoblauch klein hacken, Hähnchen würfeln.','Hähnchen in Öl 6 Minuten anbraten, Zwiebel und Knoblauch dazugeben und 3 Minuten mitbraten.','Kreuzkümmel, Zimt und Kurkuma einrühren, Brühe (Wasser und Brühwürfel) und Datteln dazugeben und 30 Minuten zugedeckt köcheln.','Couscous mit heißem Wasser übergießen und 5 Minuten quellen lassen.','Mandeln darüberstreuen und alles zusammen servieren.']);

RW('afrika','Gemüse-Tajine mit Kichererbsen (Marokko)',50,'herd',['Afrikanisch','Viel Gemüse','Viel Eiweiß'],
 [['kichererbsen',100],['moehre',80],['zucchini',0.5],['kartoffel',100],['zwiebel',40],['dosentomaten',100],['ras_el_hanout',2],['kreuzkuemmel',1],['zimt',0.5],['knoblauch',1],['oel',8],['couscous',50]],
 ['Möhren, Kartoffeln und Zwiebel würfeln, Zucchini in Scheiben schneiden.','Zwiebel und Knoblauch in Öl 3 Minuten anbraten, Gewürze einrühren.','Möhren, Kartoffeln, Tomaten und etwas Wasser dazugeben und 20 Minuten zugedeckt köcheln.','Zucchini und Kichererbsen dazugeben und 10 Minuten weiterköcheln.','Couscous mit heißem Wasser 5 Minuten quellen lassen und dazu servieren.']);

RW('afrika','Couscous mit Gemüse und Kichererbsen',45,'herd',['Afrikanisch','Viel Gemüse'],
 [['couscous',70],['moehre',80],['zucchini',0.5],['kichererbsen',60],['zwiebel',40],['kuerbis',100],['kreuzkuemmel',1.5],['kurkuma',1],['bruehe',0.5],['oel',8],['rosinen',10]],
 ['Gemüse in Stücke schneiden, Zwiebel würfeln.','Zwiebel in Öl 3 Minuten anbraten, Möhren, Kürbis, Gewürze, Brühe (Wasser und Brühwürfel) dazugeben und 15 Minuten köcheln.','Zucchini, Kichererbsen und Rosinen dazugeben und 10 Minuten weiterköcheln.','Couscous mit heißem Wasser 5 Minuten quellen lassen, auflockern und mit dem Gemüse servieren.']);

RW('afrika','Harira: marokkanische Linsensuppe',35,'schnellkochtopf',['Afrikanisch','Viel Eiweiß','Günstig'],
 [['linsen',40],['kichererbsen',60],['dosentomaten',100],['zwiebel',40],['moehre',40],['tomatenmark',10],['kreuzkuemmel',1],['zimt',0.5],['kurkuma',1],['bruehe',0.5],['nudeln',20],['zitrone',0.25],['petersilie',0.25],['oel',5]],
 ['Zwiebel und Möhre klein würfeln und im Schnellkochtopf in Öl 3 Minuten anbraten.','Tomatenmark und Gewürze einrühren, Linsen, Kichererbsen, Tomaten, Brühwürfel und Wasser dazugeben.','Deckel schließen und 10 Minuten auf Stufe 2 garen, Druck ablassen.','Nudeln dazugeben und offen 8 Minuten kochen.','Mit Zitronensaft und gehackter Petersilie servieren.']);

RW('afrika','Shakshuka: Eier in Tomaten-Paprika-Soße (Tunesien)',30,'herd',['Afrikanisch','Viel Eiweiß','Günstig'],
 [['eier',2],['dosentomaten',200],['paprika',1],['zwiebel',50],['knoblauch',2],['kreuzkuemmel',2],['paprikapulver',3],['chiliflocken',1],['oel',8],['fladenbrot',0.5],['petersilie',0.25]],
 ['Zwiebel und Paprika würfeln, Knoblauch klein hacken.','In Öl 6 Minuten anbraten, Gewürze einrühren.','Tomaten dazugeben und 10 Minuten köcheln, bis die Soße dicker wird.','Mulden in die Soße drücken, Eier hineinschlagen und zugedeckt 6 Minuten stocken lassen.','Mit Petersilie und Fladenbrot servieren.']);

RW('afrika','Koshari: Reis, Linsen und Nudeln mit Tomatensoße (Ägypten)',50,'herd',['Afrikanisch','Viel Eiweiß','Sättigend'],
 [['reis',40],['tellerlinsen',40],['nudeln',40],['kichererbsen',40],['dosentomaten',150],['zwiebel',80],['knoblauch',1],['kreuzkuemmel',1.5],['essig',10],['chiliflocken',1],['oel',15]],
 ['Linsen 20 Minuten kochen, Reis nach Packung (etwa 15 Minuten) und Nudeln 9 Minuten kochen.','Zwiebeln in Ringe schneiden und in Öl 15 Minuten goldbraun rösten.','Knoblauch, Kreuzkümmel und Chili kurz anbraten, Tomaten und Essig dazugeben und 10 Minuten köcheln.','Reis, Linsen, Nudeln und Kichererbsen mischen, Soße darübergeben und mit Röstzwiebeln bestreuen.']);

RW('afrika','Falafel aus der Fritteuse mit Joghurt-Dip (Ägypten)',35,'fritteuse',['Afrikanisch','Viel Eiweiß','Günstig'],
 [['kichererbsen',150],['zwiebel',30],['knoblauch',1],['petersilie',0.5],['kreuzkuemmel',2],['koriander',1],['mehl',20],['oel',8],['joghurt',80],['gurke',0.25],['zitrone',0.25],['fladenbrot',0.5]],
 ['Kichererbsen abgießen und gut abtropfen lassen.','Mit Zwiebel, Knoblauch, Petersilie, Gewürzen und Mehl fein pürieren.','Kleine Bällchen formen, mit Öl bestreichen und bei 190 Grad 15 Minuten in der Heißluftfritteuse garen, einmal wenden.','Joghurt mit Zitronensaft, Salz und klein gewürfelter Gurke verrühren.','Falafel mit Dip und Fladenbrot servieren.']);

RW('afrika','Kefta-Tajine mit Ei (Marokko)',45,'herd',['Afrikanisch','Viel Eiweiß'],
 [['hackfleisch',120],['zwiebel',50],['dosentomaten',150],['eier',1],['kreuzkuemmel',1.5],['paprikapulver',2],['koriander',1],['petersilie',0.25],['oel',8],['knoblauch',1],['fladenbrot',0.5]],
 ['Hack mit halber Zwiebel, Gewürzen und Salz verkneten und kleine Bällchen formen.','Restliche Zwiebel und Knoblauch in Öl 3 Minuten anbraten, Tomaten dazugeben und 8 Minuten köcheln.','Hackbällchen in die Soße legen und zugedeckt 15 Minuten garen.','Ei darüberschlagen und zugedeckt 5 Minuten stocken lassen.','Mit Petersilie und Fladenbrot servieren.']);

RW('afrika','Harissa-Hähnchen mit Süßkartoffeln aus dem Ofen',50,'ofen',['Afrikanisch','Viel Eiweiß'],
 [['haehnchenbrust',140],['harissa',15],['suesskartoffel',250],['zwiebel',40],['joghurt',50],['oel',8],['zitrone',0.25]],
 ['Ofen auf 200 Grad vorheizen.','Hähnchen mit Harissa und etwas Öl einreiben.','Süßkartoffeln und Zwiebel in Stücke schneiden, mit Öl mischen und auf ein Blech legen.','Hähnchen dazulegen und 30 Minuten backen.','Joghurt mit Zitronensaft verrühren und dazu servieren.']);

RW('afrika','Jollof-Reis mit Hähnchen (Westafrika)',50,'herd',['Afrikanisch','Viel Eiweiß','Sättigend'],
 [['reis',80],['haehnchenkeule',220],['dosentomaten',150],['paprika',0.5],['zwiebel',60],['tomatenmark',15],['paprikapulver',3],['curry',2],['bruehe',0.5],['chiliflocken',1],['oel',10],['knoblauch',1]],
 ['Zwiebel, Paprika und Knoblauch klein schneiden.','Hähnchen mit Salz und Paprikapulver würzen und in Öl 10 Minuten rundherum anbraten, herausnehmen.','Zwiebel, Paprika und Knoblauch im Bratfett 5 Minuten braten, Tomatenmark, Curry und Chili einrühren.','Tomaten, Brühe (Wasser und Brühwürfel) und Reis dazugeben, Hähnchen daraufsetzen, zugedeckt 25 Minuten bei kleiner Hitze garen.','Auflockern und servieren.']);

RW('afrika','Mafé: Erdnusseintopf mit Hähnchen (Westafrika)',60,'herd',['Afrikanisch','Viel Eiweiß','Sättigend'],
 [['haehnchenbrust',130],['erdnussbutter',30],['suesskartoffel',120],['dosentomaten',100],['zwiebel',50],['knoblauch',1],['ingwer',1],['chiliflocken',0.5],['bruehe',0.5],['reis',60],['oel',8]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Hähnchen und Süßkartoffeln würfeln, Zwiebel hacken.','Zwiebel, Knoblauch und Hähnchen in Öl 8 Minuten anbraten, Ingwer und Chili einrühren.','Tomaten, Brühe (Wasser und Brühwürfel) und Süßkartoffeln dazugeben, 20 Minuten köcheln.','Erdnussbutter einrühren und weitere 10 Minuten köcheln. Mit Reis servieren.']);

RW('afrika','Erdnusseintopf mit Süßkartoffeln und Spinat',45,'herd',['Afrikanisch','Viel Gemüse','Viel Eiweiß'],
 [['suesskartoffel',200],['erdnussbutter',30],['dosentomaten',100],['spinat',80],['zwiebel',50],['ingwer',1],['knoblauch',1],['bruehe',0.5],['reis',60],['oel',8],['kichererbsen',60]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Süßkartoffeln würfeln, Zwiebel hacken.','Zwiebel, Knoblauch und Ingwer in Öl 3 Minuten anbraten.','Süßkartoffeln, Tomaten, Kichererbsen und Brühe (Wasser und Brühwürfel) dazugeben, 20 Minuten köcheln.','Erdnussbutter und aufgetauten Spinat einrühren und 5 Minuten ziehen lassen. Mit Reis servieren.']);

RW('afrika','Suya-Hähnchenspieße aus der Fritteuse (Nigeria)',30,'fritteuse',['Afrikanisch','Viel Eiweiß'],
 [['haehnchenbrust',150],['erdnuesse',20],['paprikapulver',3],['ingwer',1.5],['chiliflocken',1],['knoblauch',1],['zwiebel',40],['tomate',100],['oel',8]],
 ['Erdnüsse fein hacken und mit Paprikapulver, Ingwer, Chili und Salz mischen.','Hähnchen in Würfel schneiden, mit Öl und Knoblauch mischen und in der Gewürzmischung wälzen.','Auf Spieße stecken und bei 190 Grad 12 Minuten in der Heißluftfritteuse garen, einmal wenden.','Zwiebel und Tomate in Scheiben schneiden und als Salat dazu servieren.']);

RW('afrika','Okra-Tomaten-Eintopf mit Reis (Westafrika)',45,'herd',['Afrikanisch','Viel Gemüse','Günstig'],
 [['okra',150],['dosentomaten',150],['zwiebel',50],['knoblauch',1],['paprikapulver',2],['chiliflocken',0.5],['reis',60],['oel',8],['bruehe',0.5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Zwiebel und Knoblauch in Öl 4 Minuten anbraten, Paprikapulver und Chili einrühren.','Tomaten, Brühe (Wasser und Brühwürfel) und aufgetaute Okra dazugeben.','20 Minuten köcheln, bis die Soße dick ist.','Mit dem Reis servieren.']);

RW('afrika','Thieboudienne: Fisch mit Reis und Gemüse (Senegal)',60,'herd',['Afrikanisch','Viel Eiweiß','Viel Gemüse'],
 [['seelachs',140],['reis',70],['moehre',60],['weisskohl',60],['tomatenmark',20],['zwiebel',50],['knoblauch',1],['petersilie',0.25],['oel',10],['chiliflocken',0.5]],
 ['Zwiebel, Knoblauch und Petersilie hacken, Möhren und Kohl in Stücke schneiden.','Zwiebel in Öl 5 Minuten anbraten, Tomatenmark und Chili einrühren und Wasser angießen.','Gemüse dazugeben und 15 Minuten köcheln, den Fisch dazulegen und 10 Minuten garen.','Fisch und Gemüse herausnehmen, im Sud den Reis 20 Minuten garen.','Reis mit Fisch und Gemüse anrichten.']);

RW('afrika','Misir Wot: rote Linsen in Gewürzsoße (Äthiopien)',40,'herd',['Afrikanisch','Viel Eiweiß','Günstig'],
 [['linsen',80],['zwiebel',80],['tomatenmark',15],['knoblauch',2],['paprikapulver',4],['ingwer',1.5],['kreuzkuemmel',1],['chiliflocken',1],['oel',15],['fladenbrot',1]],
 ['Zwiebeln fein würfeln und in Öl 10 Minuten bei mittlerer Hitze weich dünsten.','Knoblauch, Tomatenmark, Paprikapulver, Ingwer, Kreuzkümmel und Chili einrühren und 2 Minuten braten.','Linsen und Wasser dazugeben und 20 Minuten köcheln, bis die Linsen weich sind.','Mit Fladenbrot (als Ersatz für Injera) servieren.']);

RW('afrika','Doro Wot: Hähnchen-Eintopf mit Ei (Äthiopien)',75,'herd',['Afrikanisch','Viel Eiweiß','Sättigend'],
 [['haehnchenkeule',250],['zwiebel',150],['tomatenmark',20],['knoblauch',2],['paprikapulver',5],['ingwer',2],['chiliflocken',1],['kreuzkuemmel',1],['eier',1],['oel',15],['fladenbrot',1]],
 ['Zwiebeln fein würfeln und in einem Topf ohne Fett 10 Minuten anschwitzen, dann Öl dazugeben und 10 Minuten weich dünsten.','Knoblauch, Tomatenmark und alle Gewürze einrühren und 3 Minuten braten.','Hähnchenkeulen und etwas Wasser dazugeben und zugedeckt 40 Minuten köcheln.','Ei 8 Minuten hart kochen, pellen und die letzten 5 Minuten in der Soße erwärmen.','Mit Fladenbrot (als Ersatz für Injera) servieren.']);

RW('afrika','Sukuma Wiki mit Ugali (Kenia)',35,'herd',['Afrikanisch','Viel Gemüse','Günstig'],
 [['spinat',250],['tomate',120],['zwiebel',50],['knoblauch',1],['maisgriess',70],['oel',10],['koriander',1]],
 ['Zwiebel und Tomate würfeln, Knoblauch hacken.','Zwiebel und Knoblauch in Öl 4 Minuten anbraten, Tomate dazugeben und 5 Minuten köcheln.','Aufgetauten Spinat und Koriander dazugeben und 8 Minuten garen.','Für den Ugali 250 ml Wasser mit Salz aufkochen, Maisgrieß einrühren und unter Rühren 10 Minuten zu einem festen Brei kochen.','Ugali zu Klößen formen und mit dem Gemüse servieren.']);

RW('afrika','Bobotie: Hackauflauf mit Ei-Guss (Südafrika)',70,'ofen',['Afrikanisch','Viel Eiweiß','Sättigend'],
 [['hackfleisch',150],['zwiebel',50],['apfel',40],['rosinen',15],['curry',3],['kurkuma',1],['essig',5],['eier',1],['milch',80],['vollkornbrot',20],['reis',60],['oel',5]],
 ['Ofen auf 180 Grad vorheizen. Brot in der Milch einweichen. Zwiebel und Apfel klein würfeln.','Zwiebel in Öl 4 Minuten anbraten, Hack dazugeben und 6 Minuten krümelig braten.','Apfel, Rosinen, Curry, Kurkuma, Essig und das ausgedrückte Brot untermischen und in eine Form drücken.','Ei mit der restlichen Milch verquirlen, darübergießen und 35 Minuten backen.','Reis 15 Minuten kochen und dazu servieren.']);

RW('afrika','Peri-Peri-Hähnchen aus dem Ofen (Südafrika)',50,'ofen',['Afrikanisch','Viel Eiweiß'],
 [['haehnchenkeule',250],['chiliflocken',2],['paprikapulver',3],['zitrone',0.5],['knoblauch',2],['oel',12],['reis',60],['salat',0.25]],
 ['Ofen auf 200 Grad vorheizen.','Knoblauch hacken und mit Chili, Paprikapulver, Zitronensaft, Öl und Salz zu einer Marinade verrühren.','Hähnchenkeulen damit einreiben und auf ein Blech legen.','35 Minuten backen, bis die Haut knusprig ist. Reis 15 Minuten kochen.','Mit Reis und Salat servieren.']);

/* ======================= TÜRKISCHE KÜCHE (20) ======================= */

RW('tuerkisch','Menemen: Rührei mit Tomaten und Paprika',25,'herd',['Türkisch','Viel Eiweiß','Günstig'],
 [['eier',3],['paprika',1],['tomate',150],['zwiebel',40],['oel',10],['chiliflocken',0.5],['fladenbrot',1],['petersilie',0.25]],
 ['Zwiebel und Paprika würfeln, Tomate klein schneiden.','Zwiebel und Paprika in Öl 5 Minuten anbraten, Tomate dazugeben und 6 Minuten köcheln.','Eier verquirlen, dazugeben und unter vorsichtigem Rühren 4 Minuten stocken lassen.','Mit Chili und Petersilie bestreuen und mit Fladenbrot servieren.']);

RW('tuerkisch','Mercimek Çorbası: rote Linsensuppe',35,'herd',['Türkisch','Viel Eiweiß','Günstig'],
 [['linsen',80],['zwiebel',50],['moehre',50],['kartoffel',50],['tomatenmark',10],['kreuzkuemmel',1],['paprikapulver',1],['bruehe',0.5],['oel',8],['zitrone',0.25],['fladenbrot',0.5]],
 ['Zwiebel, Möhre und Kartoffel würfeln.','Zwiebel in Öl 3 Minuten anbraten, Tomatenmark und Gewürze einrühren.','Linsen, Möhre, Kartoffel, Brühwürfel und Wasser dazugeben und 25 Minuten köcheln.','Alles fein pürieren und mit Zitronensaft abschmecken.','Mit Fladenbrot servieren.']);

RW('tuerkisch','Kuru Fasulye: weiße Bohnen in Tomatensoße',35,'schnellkochtopf',['Türkisch','Viel Eiweiß','Günstig'],
 [['weisse_bohnen',150],['zwiebel',50],['tomatenmark',15],['paprikapulver',1],['chiliflocken',0.5],['oel',8],['reis',60]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Zwiebel würfeln und im Schnellkochtopf in Öl 3 Minuten anbraten.','Tomatenmark, Paprikapulver und Chili einrühren, Bohnen und Wasser dazugeben.','Deckel schließen und 10 Minuten auf Stufe 2 garen, Druck ablassen.','Mit dem Reis servieren.']);

RW('tuerkisch','Nohutlu Pilav: Reis mit Kichererbsen und Joghurt',40,'herd',['Türkisch','Viel Eiweiß','Günstig'],
 [['reis',70],['kichererbsen',80],['zwiebel',30],['butter',10],['bruehe',0.5],['joghurt',80]],
 ['Reis in einem Sieb kalt abspülen.','Zwiebel würfeln und in Butter 3 Minuten anbraten, Reis dazugeben und 2 Minuten mitbraten.','Kichererbsen, Brühwürfel und Wasser (etwa die doppelte Menge des Reises) dazugeben und zugedeckt 15 Minuten garen.','Weitere 10 Minuten ohne Hitze zugedeckt ziehen lassen und mit Joghurt servieren.']);

RW('tuerkisch','Kısır: Bulgursalat mit Tomatenmark und Kräutern',25,'herd',['Türkisch','Viel Gemüse','Leicht'],
 [['bulgur',70],['tomatenmark',15],['paprikapulver',1],['gurke',0.5],['tomate',80],['petersilie',0.5],['zitrone',0.5],['oel',10],['salat',0.25],['minze',0.5]],
 ['Bulgur mit heißem Wasser übergießen und 10 Minuten quellen lassen.','Tomatenmark, Paprikapulver, Zitronensaft und Öl unterrühren.','Gurke, Tomate und Petersilie klein schneiden und untermischen.','Mit Minze würzen und auf Salatblättern servieren.']);

RW('tuerkisch','Köfte mit Reis und Tomaten',40,'herd',['Türkisch','Viel Eiweiß'],
 [['rinderhack',140],['zwiebel',40],['semmelbroesel',15],['kreuzkuemmel',1],['paprikapulver',1.5],['petersilie',0.25],['reis',60],['tomate',80],['oel',8],['eier',0.5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Hack mit geriebener Zwiebel, Ei, Semmelbröseln, Gewürzen, Petersilie und Salz verkneten und längliche Köfte formen.','In Öl von jeder Seite 6 Minuten braten.','Tomate in Scheiben schneiden und mit Köfte und Reis servieren.']);

RW('tuerkisch','Adana-Kebap aus der Fritteuse',30,'fritteuse',['Türkisch','Viel Eiweiß'],
 [['rinderhack',150],['paprikapulver',3],['chiliflocken',1],['zwiebel',40],['fladenbrot',1],['tomate',100],['sumach',1],['joghurt',50]],
 ['Hack mit geriebener Zwiebel, Paprikapulver, Chili und Salz gut verkneten.','Längliche Kebabs um Spieße formen oder als Rollen formen.','Bei 190 Grad 12 Minuten in der Heißluftfritteuse garen, einmal wenden.','Tomate in Scheiben schneiden, mit Sumach bestreuen und mit Joghurt und Fladenbrot servieren.']);

RW('tuerkisch','Şiş Tavuk: Hähnchenspieße aus der Fritteuse',35,'fritteuse',['Türkisch','Viel Eiweiß'],
 [['haehnchenbrust',150],['joghurt',60],['paprikapulver',2],['knoblauch',1],['oel',8],['paprika',0.5],['reis',60],['sumach',0.5]],
 ['Hähnchen würfeln und mit Joghurt, Paprikapulver, Knoblauch und Öl mindestens 10 Minuten marinieren.','Reis nach Packung kochen, etwa 15 Minuten.','Hähnchen und Paprikastücke abwechselnd auf Spieße stecken.','Bei 190 Grad 14 Minuten in der Heißluftfritteuse garen, einmal wenden.','Mit Sumach bestreuen und mit dem Reis servieren.']);

RW('tuerkisch','Tavuk Sote: Hähnchenpfanne mit Paprika und Tomaten',40,'herd',['Türkisch','Viel Eiweiß','Viel Gemüse'],
 [['haehnchenbrust',140],['paprika',1],['tomate',150],['zwiebel',40],['knoblauch',1],['oel',10],['oregano',1],['reis',60]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Hähnchen würfeln, Paprika, Zwiebel und Tomate schneiden.','Hähnchen in Öl 6 Minuten anbraten, Zwiebel, Paprika und Knoblauch dazugeben und 5 Minuten braten.','Tomate und Oregano dazugeben und 12 Minuten köcheln.','Mit dem Reis servieren.']);

RW('tuerkisch','Döner-Dürüm mit Hähnchen',30,'herd',['Türkisch','Viel Eiweiß'],
 [['haehnchenbrust',130],['wraps',2],['joghurt',60],['tomate',60],['zwiebel',20],['salat',0.25],['paprikapulver',2],['kreuzkuemmel',1],['oel',8],['sumach',0.5]],
 ['Hähnchen in dünne Streifen schneiden und mit Paprikapulver, Kreuzkümmel und Salz mischen.','In Öl 8 Minuten knusprig braten.','Zwiebel in dünne Ringe, Tomate und Salat in Streifen schneiden.','Wraps kurz erwärmen, mit Joghurt bestreichen, mit Fleisch und Gemüse füllen, mit Sumach würzen und einrollen.']);

RW('tuerkisch','Karnıyarık: gefüllte Auberginen mit Hackfleisch',60,'ofen',['Türkisch','Viel Gemüse','Viel Eiweiß'],
 [['aubergine',1],['rinderhack',100],['zwiebel',50],['tomate',100],['paprika',0.5],['tomatenmark',10],['knoblauch',1],['oel',12],['petersilie',0.25]],
 ['Ofen auf 200 Grad vorheizen. Aubergine längs einschneiden (nicht ganz durch), salzen und in Öl 8 Minuten braten.','Zwiebel und Knoblauch in Öl 3 Minuten anbraten, Hack dazugeben und 6 Minuten braten.','Paprika, Tomate und Tomatenmark dazugeben und 8 Minuten köcheln.','Aubergine in eine Form legen, mit der Füllung füllen und mit etwas Wasser angießen.','30 Minuten backen und mit Petersilie bestreuen.']);

RW('tuerkisch','Etli Güveç: Rindfleisch-Gemüse-Topf aus dem Ofen',90,'ofen',['Türkisch','Viel Eiweiß','Sättigend'],
 [['rindergulasch',130],['kartoffel',150],['moehre',60],['paprika',1],['zwiebel',50],['tomatenmark',15],['bruehe',1],['oel',8]],
 ['Ofen auf 180 Grad vorheizen. Alles Gemüse in Stücke schneiden.','Fleisch in Öl 8 Minuten anbraten und mit Zwiebel in eine Auflaufform geben.','Tomatenmark in der Brühe (Wasser und Brühwürfel) verrühren und dazugießen.','Möhren, Kartoffeln und Paprika darauflegen, mit Folie oder Deckel abdecken.','70 Minuten im Ofen garen.']);

RW('tuerkisch','Türlü: türkischer Gemüsetopf',45,'herd',['Türkisch','Viel Gemüse','Günstig'],
 [['aubergine',0.5],['zucchini',0.5],['paprika',1],['kartoffel',150],['tomate',150],['zwiebel',50],['knoblauch',1],['tomatenmark',10],['oel',12],['petersilie',0.25]],
 ['Alles Gemüse in Würfel schneiden.','Zwiebel und Knoblauch in Öl 3 Minuten anbraten, Tomatenmark einrühren.','Kartoffeln, Aubergine und Paprika dazugeben, mit etwas Wasser auffüllen und 15 Minuten köcheln.','Zucchini und Tomate dazugeben und weitere 15 Minuten garen.','Mit Petersilie servieren.']);

RW('tuerkisch','Lahmacun: türkische Pizza auf Wraps',25,'ofen',['Türkisch','Viel Eiweiß','Leicht'],
 [['wraps',2],['rinderhack',80],['tomate',80],['zwiebel',40],['paprika',0.5],['tomatenmark',10],['paprikapulver',2],['petersilie',0.25],['zitrone',0.25],['salat',0.25]],
 ['Ofen auf 220 Grad vorheizen.','Hack mit klein gehackter Zwiebel, Tomate, Paprika, Tomatenmark, Paprikapulver und Salz verkneten.','Wraps auf ein Blech legen und dünn mit der Masse bestreichen.','8 Minuten backen.','Mit Petersilie, Zitronensaft und Salat servieren.']);

RW('tuerkisch','Gözleme mit Spinat und Feta',30,'herd',['Türkisch','Viel Gemüse'],
 [['wraps',2],['spinat',150],['feta',60],['zwiebel',30],['oel',10],['joghurt',50]],
 ['Zwiebel klein würfeln und mit aufgetautem Spinat in Öl 6 Minuten braten.','Feta zerbröseln und untermischen.','Füllung auf eine Hälfte der Wraps geben, zusammenklappen.','In einer Pfanne mit etwas Öl von jeder Seite 4 Minuten goldbraun braten.','Mit Joghurt servieren.']);

RW('tuerkisch','Spinat-Börek mit Feta aus dem Ofen',50,'ofen',['Türkisch','Viel Gemüse'],
 [['yufka',4],['spinat',150],['feta',60],['zwiebel',30],['eier',1],['joghurt',50],['oel',15]],
 ['Ofen auf 180 Grad vorheizen. Spinat auftauen und gut ausdrücken, Zwiebel würfeln.','Spinat mit Zwiebel, zerbröseltem Feta und halbem Ei mischen.','Yufka-Blätter mit Öl bestreichen, Füllung darauf verteilen und aufrollen oder falten.','Mit dem restlichen Ei und Joghurt verrühren und darüberstreichen.','30 Minuten goldbraun backen.']);

RW('tuerkisch','Mücver: Zucchini-Puffer aus der Fritteuse',30,'fritteuse',['Türkisch','Viel Gemüse','Günstig'],
 [['zucchini',1],['eier',1],['mehl',30],['feta',40],['petersilie',0.25],['zwiebel',30],['joghurt',80],['oel',8]],
 ['Zucchini raspeln, salzen und gut ausdrücken.','Mit Ei, Mehl, zerbröseltem Feta, Petersilie und klein gewürfelter Zwiebel verrühren.','Kleine Puffer formen, mit Öl bestreichen und bei 190 Grad 12 Minuten in der Heißluftfritteuse garen, einmal wenden.','Mit Joghurt servieren.']);

RW('tuerkisch','Mezze-Teller: Hummus, Cacık und Fladenbrot',25,'herd',['Türkisch','Viel Gemüse','Viel Eiweiß'],
 [['kichererbsen',120],['tahin',20],['zitrone',0.5],['knoblauch',1],['joghurt',100],['gurke',0.5],['minze',0.5],['fladenbrot',1],['tomate',100],['oel',10],['paprikapulver',1],['kreuzkuemmel',1]],
 ['Für den Hummus Kichererbsen mit Tahini, Zitronensaft, Knoblauch, Kreuzkümmel, etwas Öl und Wasser fein pürieren.','Für den Cacık Gurke raspeln, mit Joghurt, Minze und Salz verrühren.','Hummus mit Paprikapulver und Öl beträufeln.','Tomate in Scheiben schneiden und alles mit erwärmtem Fladenbrot anrichten.']);

RW('tuerkisch','Ofenhähnchen mit Kartoffeln und Paprika',60,'ofen',['Türkisch','Viel Eiweiß','Sättigend'],
 [['haehnchenkeule',250],['kartoffel',200],['paprika',1],['zwiebel',40],['tomatenmark',10],['paprikapulver',3],['oregano',1],['oel',10]],
 ['Ofen auf 200 Grad vorheizen.','Tomatenmark, Paprikapulver, Oregano, Öl und Salz verrühren und die Hähnchenkeulen damit einreiben.','Kartoffeln, Paprika und Zwiebel in Stücke schneiden und auf ein Blech legen.','Hähnchen darauflegen und 45 Minuten backen, bis alles gar ist.']);

RW('tuerkisch','Nudeln mit Hack und Knoblauch-Joghurt (Mantı-Art)',35,'herd',['Türkisch','Viel Eiweiß','Sättigend'],
 [['nudeln',100],['rinderhack',80],['zwiebel',40],['joghurt',120],['knoblauch',1],['butter',15],['paprikapulver',2],['minze',0.5],['tomatenmark',10]],
 ['Nudeln 9 Minuten in Salzwasser kochen.','Zwiebel würfeln und mit Hack in einer Pfanne 8 Minuten krümelig braten, Tomatenmark einrühren.','Joghurt mit klein gehacktem Knoblauch und Salz verrühren.','Butter mit Paprikapulver und Minze in einer kleinen Pfanne 1 Minute erhitzen.','Nudeln mit Hack, Joghurt und der Gewürzbutter anrichten.']);
