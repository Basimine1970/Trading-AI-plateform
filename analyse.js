/*

TREU TRADING AI
MOTEUR D'ANALYSE
S3 / S5 / S15 + FRACTAL 2

*/

/**

* Calcule une moyenne simple.
  */
  function moyenne(valeurs) {
  if (!valeurs || valeurs.length === 0) return 0;
  
  return valeurs.reduce(
  (total, valeur) => total + valeur,
  0
  ) / valeurs.length;
  }

/**

* Calcule le RSI.
  */
  function calculerRSI(closes, periode = 14) {
  
  if (!closes || closes.length <= periode) {
  return 50;
  }
  
  let gains = 0;
  let pertes = 0;
  
  for (let i = closes.length - periode; i < closes.length; i++) {
  
   const variation =
     closes[i] - closes[i - 1];

 if (variation > 0) {
     gains += variation;
 } else {
     pertes += Math.abs(variation);
 }
  
  }
  
  if (pertes === 0) {
  return 100;
  }
  
  const moyenneGain =
  gains / periode;
  
  const moyennePerte =
  pertes / periode;
  
  const rs =
  moyenneGain / moyennePerte;
  
  return 100 - (100 / (1 + rs));
  }

/**

* Détermine la tendance à partir

* des dernières clôtures.
  */
  function analyserTendance(closes) {
  
  if (!closes || closes.length < 6) {
  return "NEUTRE";
  }
  
  const recentes =
  closes.slice(-5);
  
  const anciennes =
  closes.slice(-10, -5);
  
  const moyenneRecente =
  moyenne(recentes);
  
  const moyenneAncienne =
  moyenne(anciennes);
  
  if (moyenneRecente > moyenneAncienne) {
  return "ACHAT";
  }
  
  if (moyenneRecente < moyenneAncienne) {
  return "VENTE";
  }
  
  return "NEUTRE";
  }

/**

* Détecte un Fractal 2.

* 

* Fractal haut :

* le sommet de la bougie centrale

* est supérieur aux deux bougies

* de chaque côté.

* 

* Fractal bas :

* le creux de la bougie centrale

* est inférieur aux deux bougies

* de chaque côté.
  */
  function detecterFractal2(bougies) {
  
  if (!bougies || bougies.length < 5) {
  return "NEUTRE";
  }
  
  const i =
  bougies.length - 3;
  
  const centrale =
  bougies[i];
  
  const gauche1 =
  bougies[i - 1];
  
  const gauche2 =
  bougies[i - 2];
  
  const droite1 =
  bougies[i + 1];
  
  const droite2 =
  bougies[i + 2];
  
  const fractalHaut =
  centrale.high > gauche1.high &&
  centrale.high > gauche2.high &&
  centrale.high > droite1.high &&
  centrale.high > droite2.high;
  
  const fractalBas =
  centrale.low < gauche1.low &&
  centrale.low < gauche2.low &&
  centrale.low < droite1.low &&
  centrale.low < droite2.low;
  
  if (fractalHaut) {
  return "VENTE";
  }
  
  if (fractalBas) {
  return "ACHAT";
  }
  
  return "NEUTRE";
  }

/**

* Analyse un timeframe.
  */
  function analyserTimeframe(bougies) {
  
  if (!bougies || bougies.length < 20) {
  
   return {
     signal: "NEUTRE",
     rsi: 50,
     tendance: "NEUTRE",
     fractal: "NEUTRE"
 };
  
  }
  
  const closes =
  bougies.map(
  bougie => Number(bougie.close)
  );
  
  const rsi =
  calculerRSI(closes, 14);
  
  const tendance =
  analyserTendance(closes);
  
  const fractal =
  detecterFractal2(bougies);
  
  let signal =
  "NEUTRE";
  
  /*
  Conditions simples de confirmation.
  */
  
  if (
  tendance === "ACHAT" &&
  rsi < 70
  ) {
  signal = "ACHAT";
  }
  
  if (
  tendance === "VENTE" &&
  rsi > 30
  ) {
  signal = "VENTE";
  }
  
  /*
  Le fractal peut confirmer le signal.
  */
  
  if (
  fractal === "ACHAT" &&
  rsi < 70
  ) {
  signal = "ACHAT";
  }
  
  if (
  fractal === "VENTE" &&
  rsi > 30
  ) {
  signal = "VENTE";
  }
  
  return {
  signal: signal,
  rsi: Number(rsi.toFixed(2)),
  tendance: tendance,
  fractal: fractal
  };
  }

/**

* Analyse complète S3 / S5 / S15.
  */
  function analyserMarcheMultiTimeframe(data) {
  
  const S3 =
  analyserTimeframe(data.S3);
  
  const S5 =
  analyserTimeframe(data.S5);
  
  const S15 =
  analyserTimeframe(data.S15);
  
  return {
  S3: S3,
  S5: S5,
  S15: S15
  };
  }

/*

EXPORT

*/

if (typeof module !== "undefined") {

module.exports = {
    calculerRSI,
    analyserTendance,
    detecterFractal2,
    analyserTimeframe,
    analyserMarcheMultiTimeframe
};

}
