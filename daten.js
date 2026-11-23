/* Peters Sparkoch – Preisliste und Rezepte
   Preise: Durchschnittspreise deutscher Discounter (Stand 2026), pro Packung.
   Rezept-Mengen gelten pro Person. */

var ZUTATEN = {};
function Z(id, name, preis, packung, einheit, bereich, art){
  ZUTATEN[id] = {id:id, name:name, preis:preis, packung:packung, einheit:einheit, bereich:bereich, art:art || ''};
}

/* Obst & Gemüse */
Z('zwiebel','Zwiebeln',1.29,1000,'g','gemuese');
Z('knoblauch','Knoblauch',0.49,10,'Zehe','gemuese');
Z('paprika','Paprika',0.69,1,'Stk','gemuese');
Z('tomate','Tomaten',1.49,500,'g','gemuese');
Z('kartoffel','Kartoffeln',2.49,2000,'g','gemuese');
Z('moehre','Möhren',1.19,1000,'g','gemuese');
Z('zucchini','Zucchini',0.89,1,'Stk','gemuese');
Z('brokkoli','Brokkoli',1.29,500,'g','gemuese');
Z('blumenkohl','Blumenkohl',1.49,1,'Stk','gemuese');
Z('lauch','Lauch',0.99,1,'Stk','gemuese');
Z('kuerbis','Hokkaido-Kürbis',1.99,1000,'g','gemuese');
Z('gurke','Gurke',0.69,1,'Stk','gemuese');
Z('aubergine','Aubergine',1.09,1,'Stk','gemuese');
Z('suesskartoffel','Süßkartoffeln',2.29,1000,'g','gemuese');
Z('champignon','Champignons (Pilze)',1.29,250,'g','gemuese');
Z('salat','Salat',0.99,1,'Stk','gemuese');
Z('zitrone','Zitrone',0.35,1,'Stk','gemuese');
Z('apfel','Äpfel',1.99,1000,'g','gemuese');
Z('banane','Bananen',1.49,1000,'g','gemuese');

/* Brot */
Z('vollkornbrot','Vollkornbrot',1.29,500,'g','brot');
Z('wraps','Wraps',1.29,8,'Stk','brot');

/* Milchprodukte & Eier */
Z('milch','Milch',1.15,1000,'ml','milch');
Z('feta','Feta',1.59,200,'g','milch');
Z('mozzarella','Mozzarella',0.79,125,'g','milch');
Z('parmesan','Parmesan',1.79,100,'g','milch');
Z('kaese','Käse (Gouda)',1.49,200,'g','milch');
Z('quark','Magerquark',0.99,500,'g','milch');
Z('joghurt','Naturjoghurt',0.89,500,'g','milch');
Z('eier','Eier',2.29,10,'Stk','milch');
Z('tofu','Tofu',1.49,200,'g','milch');
Z('butter','Butter',1.99,250,'g','milch');

/* Fleisch & Fisch */
Z('haehnchenbrust','Hähnchenbrust',4.49,500,'g','fleisch','fleisch');
Z('haehnchenkeule','Hähnchenkeulen',3.49,1000,'g','fleisch','fleisch');
Z('hackfleisch','Hackfleisch (gemischt)',3.49,500,'g','fleisch','fleisch');
Z('putenbrust','Putenbrust',4.49,500,'g','fleisch','fleisch');
Z('speck','Speckwürfel',1.29,200,'g','fleisch','fleisch');
Z('thunfisch','Thunfisch (Dose)',1.29,150,'g','fleisch','fisch');
Z('lachs','Lachsfilet (TK)',3.99,250,'g','tiefkuehl','fisch');
Z('seelachs','Seelachsfilet (TK)',3.29,450,'g','tiefkuehl','fisch');

/* Tiefkühl */
Z('spinat','Blattspinat (TK)',1.29,450,'g','tiefkuehl');
Z('erbsen','Erbsen (TK)',1.19,450,'g','tiefkuehl');
Z('gemuesemix','Gemüsemischung (TK)',1.99,750,'g','tiefkuehl');

/* Trockenware & Konserven */
Z('nudeln','Nudeln',1.19,500,'g','trocken');
Z('vollkornnudeln','Vollkornnudeln',1.29,500,'g','trocken');
Z('lasagne','Lasagneplatten',1.29,250,'g','trocken');
Z('reis','Reis',1.99,1000,'g','trocken');
Z('couscous','Couscous',1.49,500,'g','trocken');
Z('bulgur','Bulgur',1.59,500,'g','trocken');
Z('linsen','Rote Linsen',1.99,500,'g','trocken');
Z('kichererbsen','Kichererbsen (Dose)',0.89,400,'g','trocken');
Z('kidneybohnen','Kidneybohnen (Dose)',0.79,400,'g','trocken');
Z('mais','Mais (Dose)',0.79,285,'g','trocken');
Z('dosentomaten','Gehackte Tomaten (Dose)',0.79,400,'g','trocken');
Z('passata','Passierte Tomaten',0.99,500,'g','trocken');
Z('tomatenmark','Tomatenmark',0.99,200,'g','trocken');
Z('kokosmilch','Kokosmilch',1.29,400,'ml','trocken');
Z('haferflocken','Haferflocken',0.99,500,'g','trocken');
Z('mehl','Mehl',0.89,1000,'g','trocken');

/* Sonstiges (Vorrat) */
Z('oel','Speiseöl',2.99,1000,'ml','sonstiges');
Z('bruehe','Gemüsebrühwürfel',0.99,12,'Stk','sonstiges');
Z('sojasauce','Sojasoße',1.29,150,'ml','sonstiges');
Z('essig','Essig',0.69,500,'ml','sonstiges');
Z('senf','Senf',0.69,200,'g','sonstiges');
Z('salz','Salz',0.49,500,'g','sonstiges');
Z('pfeffer','Pfeffer',1.29,50,'g','sonstiges');
Z('paprikapulver','Paprikapulver',1.19,50,'g','sonstiges');
Z('curry','Currypulver',1.29,50,'g','sonstiges');
Z('kraeuter','Italienische Kräuter',0.99,20,'g','sonstiges');

/* Rezepte (Abendessen) */
var REZEPTE = [];
function R(name, zeit, geraet, badges, zutaten, schritte){
  var art = 'vegetarisch';
  zutaten.forEach(function(x){
    var a = ZUTATEN[x[0]].art;
    if(a === 'fleisch') art = 'fleisch';
    else if(a === 'fisch' && art !== 'fleisch') art = 'fisch';
  });
  REZEPTE.push({id:REZEPTE.length+1, name:name, zeit:zeit, geraet:geraet, badges:badges, zutaten:zutaten, schritte:schritte, art:art});
}

R('Vollkornspaghetti mit Gemüse-Tomatensoße',25,'herd',['Viel Gemüse','Vollkorn','Günstig'],
 [['vollkornnudeln',100],['dosentomaten',130],['zwiebel',40],['moehre',60],['zucchini',0.5],['knoblauch',1],['oel',5],['kraeuter',1]],
 ['Salzwasser zum Kochen bringen.','Zwiebel, Knoblauch, Möhre und Zucchini klein schneiden.','Öl erhitzen und das Gemüse 5 Minuten braten.','Tomaten und Kräuter dazugeben und 10 Minuten leise köcheln lassen.','Nudeln 9 Minuten kochen, abgießen und mit der Soße mischen.']);

R('Rote-Linsen-Dal mit Reis',30,'herd',['Viel Eiweiß','Sättigend','Günstig'],
 [['linsen',70],['reis',60],['kokosmilch',80],['zwiebel',40],['knoblauch',1],['curry',2],['tomatenmark',10],['oel',5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Zwiebel und Knoblauch klein schneiden und in Öl 3 Minuten anbraten.','Curry und Tomatenmark kurz mitbraten.','Linsen, Kokosmilch und etwas Wasser dazugeben und 15 Minuten köcheln.','Mit Salz abschmecken und zum Reis servieren.']);

R('Bratkartoffeln mit Gemüse und Spiegelei',30,'herd',['Viel Gemüse','Viel Eiweiß'],
 [['kartoffel',200],['paprika',0.5],['zucchini',0.5],['zwiebel',30],['eier',2],['oel',10]],
 ['Kartoffeln in Scheiben schneiden und 20 Minuten in Öl knusprig braten.','Paprika, Zucchini und Zwiebel würfeln.','Das Gemüse nach 10 Minuten zu den Kartoffeln geben.','Spiegeleier in einer zweiten Pfanne 4 Minuten braten.','Alles zusammen anrichten.']);

R('Hähnchen-Gemüse-Pfanne mit Reis',30,'herd',['Viel Eiweiß','Viel Gemüse'],
 [['haehnchenbrust',120],['reis',60],['paprika',0.5],['brokkoli',100],['zwiebel',40],['sojasauce',15],['oel',5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Hähnchen in Streifen schneiden und 6 Minuten in Öl braten.','Zwiebel, Paprika und Brokkoli klein schneiden und dazugeben.','Alles 8 Minuten braten und mit Sojasoße abschmecken.','Mit dem Reis servieren.']);

R('Ofengemüse mit Feta und Kartoffeln',40,'ofen',['Viel Gemüse','Günstig'],
 [['kartoffel',150],['paprika',0.5],['zucchini',0.5],['zwiebel',40],['feta',50],['oel',10],['kraeuter',1]],
 ['Ofen auf 200 Grad vorheizen.','Kartoffeln, Paprika, Zucchini und Zwiebel in grobe Stücke schneiden.','Mit Öl und Kräutern mischen und auf das Blech geben.','25 Minuten backen.','Feta darüber bröseln und 5 Minuten weiterbacken.']);

R('Ofen-Lachs mit Brokkoli und Kartoffeln',35,'ofen',['Viel Eiweiß','Viel Gemüse'],
 [['lachs',125],['brokkoli',150],['kartoffel',150],['oel',5],['zitrone',0.25]],
 ['Ofen auf 200 Grad vorheizen.','Kartoffeln würfeln, mit Öl mischen und 15 Minuten backen.','Brokkoli und aufgetauten Lachs dazu auf das Blech legen.','Weitere 15 Minuten backen.','Mit Zitronensaft beträufeln.']);

R('Hähnchenkeulen mit Ofenkartoffeln und Möhren',55,'ofen',['Sättigend'],
 [['haehnchenkeule',250],['kartoffel',200],['moehre',100],['oel',10],['paprikapulver',2]],
 ['Ofen auf 200 Grad vorheizen.','Keulen mit Öl, Paprikapulver und Salz einreiben.','Kartoffeln und Möhren in Stücke schneiden und mit auf das Blech legen.','45 Minuten backen, zwischendurch einmal wenden.']);

R('Knuspriges Hähnchen mit Kartoffelspalten und Salat',25,'fritteuse',['Viel Eiweiß'],
 [['haehnchenbrust',140],['kartoffel',150],['salat',0.25],['tomate',80],['gurke',0.25],['oel',8],['paprikapulver',2],['joghurt',50]],
 ['Hähnchen in Stücke schneiden und mit Öl und Paprikapulver mischen.','Kartoffeln in Spalten schneiden und ebenfalls mit Öl mischen.','Beides bei 180 Grad 20 Minuten in der Heißluftfritteuse garen, einmal schütteln.','Salat, Tomate und Gurke klein schneiden.','Mit Joghurt als Dip servieren.']);

R('Gemüse-Kichererbsen-Curry mit Reis',30,'herd',['Viel Gemüse','Viel Eiweiß'],
 [['kichererbsen',100],['kokosmilch',80],['blumenkohl',0.25],['paprika',0.5],['zwiebel',40],['reis',60],['curry',3],['knoblauch',1],['oel',5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Zwiebel und Knoblauch in Öl 3 Minuten anbraten, Curry dazugeben.','Blumenkohl und Paprika klein schneiden und 5 Minuten mitbraten.','Kichererbsen und Kokosmilch dazugeben und 12 Minuten köcheln.','Mit dem Reis servieren.']);

R('Rührei mit Spinat und Vollkornbrot',15,'herd',['Viel Eiweiß','Leicht','Günstig'],
 [['eier',3],['spinat',100],['vollkornbrot',80],['zwiebel',30],['oel',5]],
 ['Zwiebel klein schneiden und in Öl 2 Minuten braten.','Aufgetauten Spinat dazugeben und 3 Minuten braten.','Eier verquirlen, dazugeben und 4 Minuten stocken lassen.','Mit Vollkornbrot servieren.']);

R('Kürbissuppe mit Brot',35,'herd',['Viel Gemüse','Leicht'],
 [['kuerbis',250],['kartoffel',80],['zwiebel',40],['bruehe',0.5],['kokosmilch',30],['vollkornbrot',60],['oel',5]],
 ['Kürbis, Kartoffel und Zwiebel würfeln.','In Öl 5 Minuten anbraten.','Mit Wasser bedecken, Brühwürfel dazugeben und 20 Minuten kochen.','Alles pürieren und die Kokosmilch einrühren.','Mit Vollkornbrot servieren.']);

R('Kartoffel-Lauch-Suppe mit Brot',30,'herd',['Viel Gemüse','Leicht','Günstig'],
 [['kartoffel',200],['lauch',0.5],['zwiebel',30],['bruehe',0.5],['milch',50],['vollkornbrot',60],['oel',5]],
 ['Kartoffeln würfeln, Lauch in Ringe und Zwiebel klein schneiden.','In Öl 5 Minuten andünsten.','Mit Wasser bedecken, Brühwürfel dazugeben und 20 Minuten kochen.','Grob pürieren und Milch einrühren.','Mit Vollkornbrot servieren.']);

R('Schnelles Chili con Carne',30,'schnellkochtopf',['Viel Eiweiß','Sättigend'],
 [['hackfleisch',80],['kidneybohnen',100],['mais',50],['dosentomaten',130],['zwiebel',40],['paprika',0.5],['tomatenmark',10],['paprikapulver',3],['reis',50],['oel',5]],
 ['Zwiebel und Paprika klein schneiden.','Im Schnellkochtopf Öl erhitzen, Hack und Zwiebel 5 Minuten anbraten.','Alle anderen Zutaten außer Reis dazugeben, Deckel schließen.','10 Minuten auf Stufe 2 garen.','Reis separat 15 Minuten kochen und dazu servieren.']);

R('Linseneintopf mit Möhren',30,'schnellkochtopf',['Viel Eiweiß','Viel Gemüse','Günstig'],
 [['linsen',80],['moehre',100],['kartoffel',120],['zwiebel',40],['bruehe',0.5],['essig',5],['oel',5]],
 ['Zwiebel, Möhren und Kartoffeln würfeln.','Im Schnellkochtopf in Öl 3 Minuten anbraten.','Linsen, Brühwürfel und Wasser dazugeben, Deckel schließen.','10 Minuten garen.','Mit Essig abschmecken.']);

R('Kartoffelgulasch',30,'schnellkochtopf',['Viel Gemüse','Günstig'],
 [['kartoffel',250],['paprika',0.5],['moehre',60],['zwiebel',50],['tomatenmark',10],['paprikapulver',3],['bruehe',0.5],['oel',5]],
 ['Alles Gemüse würfeln.','Im Schnellkochtopf Zwiebel in Öl anbraten, Paprikapulver und Tomatenmark kurz mitbraten.','Gemüse, Brühwürfel und Wasser dazugeben, Deckel schließen.','8 Minuten garen.','Abschmecken und servieren.']);

R('Reis-Gemüse-Topf mit Hähnchen',25,'schnellkochtopf',['Viel Eiweiß','Viel Gemüse'],
 [['reis',70],['haehnchenbrust',100],['gemuesemix',150],['bruehe',0.5],['curry',1],['oel',5]],
 ['Hähnchen würfeln und im Schnellkochtopf in Öl 4 Minuten anbraten.','Reis, Gemüse, Curry, Brühwürfel und Wasser dazugeben.','Deckel schließen und 6 Minuten garen.','Kurz ruhen lassen, umrühren und servieren.']);

R('Hähnchen-Wraps mit Salat',20,'herd',['Viel Eiweiß','Leicht'],
 [['wraps',2],['haehnchenbrust',100],['salat',0.25],['tomate',60],['gurke',0.25],['joghurt',50],['oel',5]],
 ['Hähnchen in Streifen schneiden und 8 Minuten in Öl braten.','Salat, Tomate und Gurke klein schneiden.','Wraps kurz in der Pfanne erwärmen.','Mit Joghurt bestreichen, füllen und einrollen.']);

R('Bohnen-Mais-Wraps',20,'herd',['Viel Gemüse','Viel Eiweiß','Günstig'],
 [['wraps',2],['kidneybohnen',80],['mais',40],['paprika',0.5],['kaese',30],['zwiebel',30],['joghurt',40],['oel',5]],
 ['Zwiebel und Paprika klein schneiden und in Öl 5 Minuten braten.','Bohnen und Mais dazugeben und 4 Minuten erhitzen.','Wraps erwärmen und mit der Füllung, Käse und Joghurt belegen.','Einrollen und servieren.']);

R('Gefüllte Paprika mit Reis und Hack',50,'ofen',['Viel Gemüse'],
 [['paprika',1],['hackfleisch',100],['reis',40],['zwiebel',40],['dosentomaten',100],['kaese',20]],
 ['Ofen auf 190 Grad vorheizen. Reis 12 Minuten kochen.','Paprika oben abschneiden und entkernen.','Hack mit Zwiebel anbraten, mit Reis mischen und in die Paprika füllen.','Paprika in eine Form setzen, Tomaten darumgießen, Käse darüber streuen.','30 Minuten backen.']);

R('Gefüllte Zucchini mit Feta und Tomate',40,'ofen',['Viel Gemüse','Leicht'],
 [['zucchini',1],['feta',50],['tomate',100],['zwiebel',30],['couscous',30],['oel',5]],
 ['Ofen auf 200 Grad vorheizen.','Zucchini halbieren und aushöhlen.','Fruchtfleisch, Tomate, Zwiebel, Feta und Couscous mischen.','Masse in die Zucchini füllen und mit Öl beträufeln.','25 Minuten backen.']);

R('Nudelauflauf mit Brokkoli und Käse',45,'ofen',['Viel Gemüse','Sättigend'],
 [['nudeln',90],['brokkoli',150],['kaese',40],['milch',100],['eier',1]],
 ['Ofen auf 190 Grad vorheizen.','Nudeln 6 Minuten kochen, Brokkoli die letzten 3 Minuten mitkochen.','Milch und Ei verquirlen, mit Salz würzen.','Nudeln und Brokkoli in eine Form geben, Guss darüber gießen, Käse streuen.','25 Minuten backen.']);

R('Kartoffelgratin mit Zucchini',55,'ofen',['Viel Gemüse'],
 [['kartoffel',250],['milch',100],['kaese',30],['zucchini',0.5],['knoblauch',1]],
 ['Ofen auf 190 Grad vorheizen.','Kartoffeln und Zucchini in dünne Scheiben schneiden.','In eine Form schichten, Knoblauch dazugeben und Milch darübergießen.','Mit Käse bestreuen und 40 Minuten backen.']);

R('Gemüselasagne',60,'ofen',['Viel Gemüse','Sättigend'],
 [['lasagne',50],['zucchini',0.5],['moehre',60],['passata',150],['mozzarella',60],['zwiebel',30],['milch',50]],
 ['Ofen auf 190 Grad vorheizen.','Zucchini, Möhre und Zwiebel klein schneiden und 8 Minuten braten.','Passata dazugeben und 5 Minuten köcheln.','Soße, Lasagneplatten und Mozzarella abwechselnd in eine Form schichten.','Milch darübergießen und 35 Minuten backen.']);

R('Thunfisch-Nudeln mit Tomaten und Erbsen',20,'herd',['Viel Eiweiß','Günstig'],
 [['nudeln',100],['thunfisch',75],['tomate',100],['zwiebel',30],['erbsen',50],['oel',5]],
 ['Nudeln 9 Minuten in Salzwasser kochen.','Zwiebel in Öl 3 Minuten braten, Tomaten und Erbsen dazugeben.','5 Minuten köcheln, Thunfisch unterrühren.','Nudeln abgießen und mit der Soße mischen.']);

R('Seelachs mit Kartoffeln und Spinat',30,'herd',['Viel Eiweiß','Leicht'],
 [['seelachs',150],['kartoffel',200],['spinat',150],['zwiebel',20],['oel',10]],
 ['Kartoffeln 20 Minuten in Salzwasser kochen.','Seelachs mit Salz würzen und in Öl je Seite 4 Minuten braten.','Zwiebel und aufgetauten Spinat 5 Minuten in einer Pfanne dünsten.','Alles zusammen anrichten.']);

R('Fischfilet aus der Fritteuse mit Gemüsereis',25,'fritteuse',['Viel Eiweiß','Leicht'],
 [['seelachs',150],['reis',60],['gemuesemix',120],['zitrone',0.25],['oel',5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Fisch mit Öl, Salz und Zitrone würzen.','Bei 180 Grad 12 Minuten in der Heißluftfritteuse garen.','Gemüse 5 Minuten dünsten und unter den Reis mischen.','Fisch dazu servieren.']);

R('Putengeschnetzeltes mit Reis',30,'herd',['Viel Eiweiß'],
 [['putenbrust',120],['reis',60],['paprika',0.5],['zwiebel',40],['joghurt',50],['paprikapulver',2],['oel',5]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Pute in Streifen schneiden und in Öl 6 Minuten braten.','Zwiebel und Paprika dazugeben und 6 Minuten braten.','Paprikapulver und Joghurt einrühren, kurz erwärmen.','Mit dem Reis servieren.']);

R('Hack-Gemüse-Pfanne mit Kartoffeln',30,'herd',['Viel Gemüse','Sättigend'],
 [['hackfleisch',100],['kartoffel',200],['zucchini',0.5],['paprika',0.5],['champignon',60],['zwiebel',40],['tomatenmark',10],['oel',5]],
 ['Kartoffeln würfeln und 12 Minuten in Salzwasser vorkochen.','Hack in Öl 5 Minuten krümelig braten.','Gemüse und Zwiebel klein schneiden und 6 Minuten mitbraten.','Kartoffeln und Tomatenmark dazugeben und 5 Minuten braten.']);

R('Spaghetti Bolognese mit viel Gemüse',35,'herd',['Viel Eiweiß','Viel Gemüse'],
 [['nudeln',100],['hackfleisch',80],['dosentomaten',130],['moehre',60],['zwiebel',40],['tomatenmark',10],['oel',5]],
 ['Zwiebel und Möhre sehr klein schneiden.','Hack in Öl 5 Minuten anbraten, Gemüse dazugeben.','Tomaten und Tomatenmark einrühren und 20 Minuten köcheln.','Nudeln 9 Minuten kochen, abgießen und mit der Soße servieren.']);

R('Süßkartoffel-Kichererbsen-Pfanne mit Spinat',30,'herd',['Viel Gemüse','Viel Eiweiß'],
 [['suesskartoffel',200],['kichererbsen',80],['zwiebel',40],['paprikapulver',2],['spinat',80],['joghurt',50],['oel',8]],
 ['Süßkartoffel würfeln und 12 Minuten in Öl braten.','Zwiebel dazugeben und 3 Minuten braten.','Kichererbsen, Paprikapulver und aufgetauten Spinat dazugeben.','5 Minuten braten und mit einem Klecks Joghurt servieren.']);

R('Süßkartoffel-Pommes mit Quark-Dip',25,'fritteuse',['Viel Gemüse','Leicht','Günstig'],
 [['suesskartoffel',250],['quark',80],['salat',0.25],['gurke',0.25],['oel',5],['kraeuter',1]],
 ['Süßkartoffeln in Stifte schneiden und mit Öl mischen.','Bei 190 Grad 18 Minuten in der Heißluftfritteuse garen, zweimal schütteln.','Quark mit Kräutern und Salz verrühren.','Salat und Gurke klein schneiden und dazu servieren.']);

R('Blumenkohl-Bites mit Quark-Dip',30,'fritteuse',['Viel Gemüse','Leicht'],
 [['blumenkohl',0.5],['mehl',15],['eier',1],['quark',80],['kartoffel',150],['oel',5]],
 ['Blumenkohl in kleine Röschen teilen.','Ei und Mehl zu einem Teig verrühren und die Röschen darin wenden.','Bei 190 Grad 15 Minuten in der Heißluftfritteuse garen, einmal schütteln.','Kartoffeln als Spalten schneiden und mitgaren.','Mit Quark-Dip servieren.']);

R('Hähnchenkeule aus der Fritteuse mit Möhren',40,'fritteuse',['Viel Eiweiß'],
 [['haehnchenkeule',250],['moehre',120],['kartoffel',150],['oel',5],['paprikapulver',2]],
 ['Keule mit Öl, Paprikapulver und Salz einreiben.','Bei 180 Grad 25 Minuten in der Heißluftfritteuse garen.','Möhren und Kartoffeln in Stücke schneiden, dazugeben und 15 Minuten mitgaren.']);

R('Tomatensuppe mit Käse-Toast',25,'herd',['Leicht','Günstig'],
 [['passata',200],['zwiebel',30],['bruehe',0.5],['vollkornbrot',80],['kaese',30],['oel',5]],
 ['Zwiebel klein schneiden und in Öl 3 Minuten braten.','Passata, Brühwürfel und etwas Wasser dazugeben und 10 Minuten köcheln.','Brot mit Käse belegen und in der Pfanne mit Deckel 5 Minuten überbacken.','Suppe mit dem Käse-Toast servieren.']);

R('Gemüse-Omelette mit Salat',20,'herd',['Viel Eiweiß','Leicht'],
 [['eier',3],['paprika',0.5],['zwiebel',30],['kaese',20],['salat',0.25],['tomate',60],['oel',5]],
 ['Paprika und Zwiebel klein schneiden und in Öl 4 Minuten braten.','Eier verquirlen, darübergießen und 5 Minuten stocken lassen.','Käse darüberstreuen und zusammenklappen.','Salat und Tomate dazu anrichten.']);

R('Couscous-Salat mit Feta und Gemüse',20,'herd',['Viel Gemüse','Leicht'],
 [['couscous',70],['gurke',0.5],['tomate',100],['feta',50],['paprika',0.5],['zitrone',0.25],['oel',8]],
 ['Couscous mit heißem Wasser übergießen und 5 Minuten quellen lassen.','Gurke, Tomate und Paprika würfeln.','Alles mit Feta, Zitronensaft und Öl mischen.','Kurz durchziehen lassen und servieren.']);

R('Bulgur-Pfanne mit Gemüse und Ei',25,'herd',['Viel Gemüse','Viel Eiweiß'],
 [['bulgur',70],['paprika',0.5],['zucchini',0.5],['zwiebel',30],['eier',2],['oel',5]],
 ['Bulgur mit heißem Wasser übergießen und 10 Minuten quellen lassen.','Gemüse und Zwiebel würfeln und 6 Minuten in Öl braten.','Bulgur dazugeben und 3 Minuten mitbraten.','Eier dazugeben und unter Rühren 3 Minuten stocken lassen.']);

R('Tofu-Gemüse-Pfanne mit Reis',25,'herd',['Viel Eiweiß','Viel Gemüse'],
 [['tofu',100],['reis',60],['brokkoli',120],['moehre',60],['sojasauce',15],['oel',8]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Tofu würfeln und 6 Minuten in Öl knusprig braten.','Brokkoli und Möhre klein schneiden, dazugeben und 7 Minuten braten.','Mit Sojasoße abschmecken und zum Reis servieren.']);

R('Spinat-Käse-Nudeln',20,'herd',['Viel Gemüse','Günstig'],
 [['nudeln',100],['spinat',150],['parmesan',15],['knoblauch',1],['oel',5]],
 ['Nudeln 9 Minuten in Salzwasser kochen.','Knoblauch in Öl 1 Minute braten, aufgetauten Spinat dazugeben und 5 Minuten garen.','Nudeln abgießen und untermischen.','Parmesan darüberreiben.']);

R('Möhren-Kartoffel-Stampf mit Ei',30,'herd',['Viel Gemüse','Günstig'],
 [['kartoffel',250],['moehre',100],['milch',50],['eier',2],['oel',5]],
 ['Kartoffeln und Möhren würfeln und 20 Minuten in Salzwasser kochen.','Abgießen, Milch dazugeben und grob stampfen.','Eier in Öl als Spiegelei 4 Minuten braten.','Stampf mit Ei servieren.']);

R('Ratatouille mit Reis',35,'herd',['Viel Gemüse','Leicht'],
 [['aubergine',0.3],['zucchini',0.5],['paprika',0.5],['dosentomaten',100],['zwiebel',40],['reis',60],['kraeuter',1],['oel',8]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Gemüse in Würfel schneiden.','Zwiebel in Öl 3 Minuten braten, restliches Gemüse dazugeben und 8 Minuten braten.','Tomaten und Kräuter dazugeben und 12 Minuten köcheln.','Mit dem Reis servieren.']);

R('Gebratener Reis mit Ei und Erbsen',25,'herd',['Viel Eiweiß','Günstig'],
 [['reis',70],['eier',2],['erbsen',80],['moehre',60],['sojasauce',15],['oel',8]],
 ['Reis nach Packung kochen, etwa 15 Minuten.','Möhre klein würfeln und 4 Minuten in Öl braten.','Reis und Erbsen dazugeben und 5 Minuten braten.','Eier dazugeben und unter Rühren 3 Minuten stocken lassen.','Mit Sojasoße abschmecken.']);

R('Ofen-Hähnchen mit Paprika und Reis',40,'ofen',['Viel Eiweiß','Viel Gemüse'],
 [['haehnchenbrust',130],['paprika',1],['zwiebel',50],['reis',60],['oel',8],['paprikapulver',2]],
 ['Ofen auf 200 Grad vorheizen.','Hähnchen, Paprika und Zwiebel in Stücke schneiden.','Mit Öl und Paprikapulver mischen und auf das Blech geben.','25 Minuten backen.','Reis 15 Minuten kochen und dazu servieren.']);

R('Ofenkürbis mit Feta und Couscous',45,'ofen',['Viel Gemüse'],
 [['kuerbis',300],['couscous',50],['feta',40],['zwiebel',30],['oel',8]],
 ['Ofen auf 200 Grad vorheizen.','Kürbis (mit Schale) in Spalten und Zwiebel in Stücke schneiden.','Mit Öl und Salz mischen und 30 Minuten backen.','Couscous mit heißem Wasser übergießen und 5 Minuten quellen lassen.','Kürbis mit Feta und Couscous anrichten.']);

R('Bohnen-Eintopf mit Kartoffeln',30,'schnellkochtopf',['Viel Eiweiß','Viel Gemüse','Günstig'],
 [['kidneybohnen',100],['kartoffel',150],['moehre',80],['zwiebel',40],['dosentomaten',100],['bruehe',0.5],['oel',5]],
 ['Gemüse und Zwiebel würfeln.','Im Schnellkochtopf in Öl 3 Minuten anbraten.','Bohnen, Tomaten, Brühwürfel und Wasser dazugeben, Deckel schließen.','8 Minuten garen.','Abschmecken und servieren.']);

/* Frühstück (einfache, gesunde Bausteine, Mengen pro Person) */
var FRUEHSTUECK = [];
function F(name, badges, zutaten, schritte){
  FRUEHSTUECK.push({id:FRUEHSTUECK.length+1, name:name, badges:badges, zutaten:zutaten, schritte:schritte, art:'vegetarisch'});
}

F('Haferflocken mit Quark und Apfel',['Viel Eiweiß','Vollkorn'],
 [['haferflocken',50],['quark',100],['apfel',100]],
 ['Quark mit Haferflocken verrühren.','Apfel klein schneiden und darübergeben.']);
F('Vollkornbrot mit Käse und Gurke',['Vollkorn','Leicht'],
 [['vollkornbrot',80],['kaese',30],['gurke',0.25]],
 ['Brot mit Käse belegen.','Gurke in Scheiben schneiden und dazulegen.']);
F('Porridge mit Banane',['Vollkorn','Sättigend'],
 [['haferflocken',50],['milch',200],['banane',100]],
 ['Haferflocken mit Milch 5 Minuten unter Rühren köcheln.','Banane in Scheiben schneiden und darübergeben.']);
F('Joghurt mit Haferflocken und Apfel',['Leicht','Vollkorn'],
 [['joghurt',150],['haferflocken',30],['apfel',100]],
 ['Joghurt in eine Schale geben.','Haferflocken und klein geschnittenen Apfel darübergeben.']);
F('Rührei auf Vollkornbrot mit Tomate',['Viel Eiweiß'],
 [['eier',2],['vollkornbrot',60],['tomate',60]],
 ['Eier verquirlen und 4 Minuten in der Pfanne stocken lassen.','Auf Vollkornbrot geben und mit Tomate belegen.']);
F('Vollkornbrot mit Quark und Tomate',['Viel Eiweiß','Leicht'],
 [['vollkornbrot',80],['quark',60],['tomate',60]],
 ['Brot mit Quark bestreichen.','Tomate in Scheiben schneiden und darauflegen.']);
F('Gekochte Eier mit Brot und Apfel',['Viel Eiweiß'],
 [['eier',2],['vollkornbrot',60],['apfel',100]],
 ['Eier 8 Minuten in kochendem Wasser kochen.','Mit Vollkornbrot und Apfel servieren.']);
F('Quark-Bowl mit Banane und Haferflocken',['Viel Eiweiß','Sättigend'],
 [['quark',120],['banane',100],['haferflocken',30]],
 ['Quark in eine Schale geben.','Banane in Scheiben schneiden und mit den Haferflocken darübergeben.']);
