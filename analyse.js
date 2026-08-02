async function analyserMarche() {
    const resultat = document.getElementById("resultat");

    resultat.innerHTML = "⏳ Analyse du marché en cours...";

    try {
        // Simulation d'analyse (à remplacer plus tard par une vraie API)
        const prix = (1.1700 + Math.random() * 0.0100).toFixed(5);

        let signal;
        let confiance;

        const aleatoire = Math.random();

        if (aleatoire > 0.66) {
            signal = "🟢 ACHETER";
            confiance = 85 + Math.floor(Math.random() * 10);
        } else if (aleatoire > 0.33) {
            signal = "🔴 VENDRE";
            confiance = 80 + Math.floor(Math.random() * 15);
        } else {
            signal = "🟡 ATTENDRE";
            confiance = 70 + Math.floor(Math.random() * 15);
        }

        const heure = new Date().toLocaleTimeString("fr-FR");

        resultat.innerHTML = `
            <h3>${signal}</h3>
            <p><strong>Prix EUR/USD :</strong> ${prix}</p>
            <p><strong>Confiance :</strong> ${confiance}%</p>
            <p><strong>Heure :</strong> ${heure}</p>
        `;

    } catch (erreur) {
        resultat.innerHTML = "❌ Erreur pendant l'analyse.";
    }
}
