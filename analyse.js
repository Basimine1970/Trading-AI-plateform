async function analyserMarche() {
    const resultat = document.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = "⏳ Analyse IA en cours...";

    setTimeout(() => {

        // Simulation des indicateurs
        const rsi = Math.floor(Math.random() * 100);
        const tendance = Math.random() > 0.5 ? "Haussière" : "Baissière";
        const support = Math.random() > 0.5;
        const resistance = !support;

        let scoreAchat = 0;
        let scoreVente = 0;

        // Analyse RSI
        if (rsi < 30) {
            scoreAchat += 40;
        } else if (rsi > 70) {
            scoreVente += 40;
        } else {
            scoreAchat += 20;
            scoreVente += 20;
        }

        // Analyse de la tendance
        if (tendance === "Haussière") {
            scoreAchat += 30;
        } else {
            scoreVente += 30;
        }

        // Support / Résistance
        if (support) {
            scoreAchat += 30;
        }

        if (resistance) {
            scoreVente += 30;
        }

        // Décision finale
        let signal, confiance;

        if (scoreAchat >= scoreVente) {
            signal = "🟢 ACHETER";
            confiance = scoreAchat;
        } else {
            signal = "🔴 VENDRE";
            confiance = scoreVente;
        }

        resultat.innerHTML = `
            <h3>📊 Analyse IA</h3>
            <p><strong>Paire :</strong> ${paire}</p>
            <p><strong>RSI :</strong> ${rsi}</p>
            <p><strong>Tendance :</strong> ${tendance}</p>
            <p><strong>Signal :</strong> ${signal}</p>
            <p><strong>Confiance :</strong> ${confiance}%</p>
            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;

    }, 1500);
}
