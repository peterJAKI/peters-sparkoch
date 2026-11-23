/* Peters Sparkoch – ungefähre Kalorien der Zutaten.
   Für Zutaten in g oder ml: kcal pro 100 g bzw. 100 ml.
   Für Zutaten in Stück oder Zehen: kcal pro Stück bzw. pro Zehe. */
var KCAL = {
  zwiebel:40, knoblauch:4, paprika:40, tomate:18, kartoffel:77, moehre:41, zucchini:50,
  brokkoli:34, blumenkohl:100, lauch:60, kuerbis:30, gurke:40, aubergine:50, suesskartoffel:86,
  champignon:22, salat:40, zitrone:20, apfel:52, banane:90,
  vollkornbrot:220, wraps:130,
  milch:60, feta:260, mozzarella:240, parmesan:400, kaese:350, quark:70, joghurt:60, eier:80, tofu:120, butter:740,
  haehnchenbrust:110, haehnchenkeule:150, hackfleisch:250, putenbrust:105, speck:300, thunfisch:115, lachs:200, seelachs:80,
  spinat:25, erbsen:70, gemuesemix:45,
  nudeln:350, vollkornnudeln:340, lasagne:350, reis:350, couscous:355, bulgur:345, linsen:340,
  kichererbsen:110, kidneybohnen:100, mais:90, dosentomaten:20, passata:25, tomatenmark:80,
  kokosmilch:170, haferflocken:370, mehl:340,
  oel:880, bruehe:10, sojasauce:60, essig:20, senf:80, salz:0, pfeffer:250, paprikapulver:280, curry:300, kraeuter:250
};

/* Weitere Zutaten (deftige Gerichte, Festtagsessen) */
KCAL.schweinebraten = 230; KCAL.schweineschnitzel = 110; KCAL.rindergulasch = 130; KCAL.rinderrouladen = 140;
KCAL.kassler = 150; KCAL.bratwurst = 250; KCAL.wuerstchen = 85; KCAL.entenkeule = 330; KCAL.brathaehnchen = 1300;
KCAL.rotkohl = 55; KCAL.sauerkraut = 20; KCAL.weisskohl = 25; KCAL.knoedel = 150; KCAL.spaetzle = 150;
KCAL.semmelbroesel = 360; KCAL.sahne = 300; KCAL.preiselbeeren = 150; KCAL.tellerlinsen = 330; KCAL.gelbeerbsen = 340;
KCAL.weisse_bohnen = 90; KCAL.graupen = 350; KCAL.majoran = 270; KCAL.muskat = 500; KCAL.zucker = 400;

/* Kalorien einer Portion (ungefähr, auf 5 gerundet) */
function kcalVon(zutaten, portionen){
  var s = 0;
  zutaten.forEach(function(x){
    var z = ZUTATEN[x[0]], k = KCAL[x[0]] || 0;
    s += (z.einheit === 'g' || z.einheit === 'ml') ? x[1] / 100 * k : x[1] * k;
  });
  return Math.round(s * (portionen || 1) / 5) * 5;
}
