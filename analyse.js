
// analyse.js

function analyserMarche() {

    const signaux = [
        { signal: "🟢 ACHETER", confiance: 87 },
        { signal: "🔴 VENDRE", confiance: 84 },
        { signal: "🟡 ATTENDRE", confiance: 65 }
    ];

    const resultat = signaux[Math.floor(Math.random() * signaux.length)];

    document.getElementById("signal").innerText = resultat.signal;
    document.getElementById("confiance").innerText = "Confiance : " + resultat.confiance + " %";
    document.getElementById("heure").innerText = "Analyse mise à jour : " + new Date().toLocaleTimeString();
}
