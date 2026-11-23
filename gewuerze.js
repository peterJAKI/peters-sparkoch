/* Peters Sparkoch – genaue Gewürzangaben (Teelöffel, Esslöffel, Prise).
   Wird nach allen Rezeptdateien geladen.

   LOEFFEL: Wie viel g (oder ml) ist ein gestrichener Teelöffel (tl)?
            prise = Gewicht einer Prise.
   Ein Esslöffel ist 3 Teelöffel.
   Die Rezepte rechnen intern weiter in Gramm und Millilitern (für Preise und Einkaufszettel),
   angezeigt werden diese Zutaten in Löffeln. */
var LOEFFEL = {
  salz:{tl:6, prise:0.5}, pfeffer:{tl:2.5, prise:0.5}, paprikapulver:{tl:2.5, prise:0.5}, curry:{tl:2.5, prise:0.5},
  kraeuter:{tl:1.5, prise:0.5}, majoran:{tl:1, prise:0.5}, muskat:{tl:2.5, prise:0.5}, zucker:{tl:5, prise:0.5},
  oel:{tl:5, prise:0.5}, essig:{tl:5, prise:0.5}, sojasauce:{tl:5, prise:0.5}, senf:{tl:5, prise:0.5},
  tomatenmark:{tl:5, prise:0.5}
};

/* Salz und Pfeffer in alle Rezepte eintragen, wenn dort noch keine Menge steht:
   Salz 1,5 g pro Person (¼ Teelöffel), bei Salzwasser (Nudeln, Kartoffeln, Reis) 3 g (½ Teelöffel).
   Pfeffer 0,4 g pro Person (eine Prise). Süßspeisen bekommen nichts. Frühstück: nur bei Eiern eine Prise. */
(function(){
  function hat(r, id){ return r.zutaten.some(function(x){ return x[0] === id; }); }
  REZEPTE.forEach(function(r){
    if(/Kaiserschmarrn/.test(r.name)) return;
    var salzwasser = r.schritte.some(function(s){
      return /Salzwasser|Kartoffeln[^.]*kochen|Nudeln[^.]*kochen|Reis[^.]*kochen/.test(s);
    });
    if(!hat(r, 'salz')) r.zutaten.push(['salz', salzwasser ? 3 : 1.5]);
    if(!hat(r, 'pfeffer')) r.zutaten.push(['pfeffer', 0.4]);
  });
  FRUEHSTUECK.forEach(function(f){
    if(!hat(f, 'eier')) return;
    if(!hat(f, 'salz')) f.zutaten.push(['salz', 0.5]);
    if(!hat(f, 'pfeffer')) f.zutaten.push(['pfeffer', 0.3]);
  });
})();
