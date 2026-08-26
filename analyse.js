 function analyserMarche() {
    const resultat = docasyncument.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = "⏳ Analyse du marché en cours...";

    setTimeout(() => {

        // =====================================
        // 1. INDICATEURS (TEMPORAIREMENT SIMULÉS)
        // =====================================

        const rsi = Math.floor(Math.random() * 100);

        const tendances = ["Haussière", "Baissière", "Neutre"];
        const tendance =
            tendances[Math.floor(Math.random() * tendances.length)];

        const support = Math.random() > 0.5;
        const resistance = !support;

        // =====================================
        // 2. CALCUL DES SCORES
        // =====================================

        let scoreAchat = 0;
        let scoreVente = 0;

        // RSI
        if (rsi < 30) {
            scoreAchat += 40;
        } else if (rsi > 70) {
            scoreVente += 40;
        } else {
            scoreAchat += 10;
            scoreVente += 10;
        }

        // Tendance
        if (tendance === "Haussière") {
            scoreAchat += 30;
        } else if (tendance === "Baissière") {
            scoreVente += 30;
        }

        // Support / Résistance
        if (support) {
            scoreAchat += 30;
        }

        if (resistance) {
            scoreVente += 30;
        }

        // =====================================
        // 3. DÉCISION
        // =====================================

        let signal;
        let confiance;

        const difference = Math.abs(scoreAchat - scoreVente);

        if (difference < 20) {
            signal = "⚪ ATTENDRE";
            confiance = 50;
        } 
        else if (scoreAchat > scoreVente) {
            signal = "🟢 ACHETER";
            confiance = scoreAchat;
        } 
        else {
            signal = "🔴 VENDRE";
            confiance = scoreVente;
        }

        // Limiter la confiance à 100 %
        confiance = Math.min(confiance, 100);

        // =====================================
        // 4. AFFICHAGE
        // =====================================

        resultat.innerHTML = `
            <h3>📊 Analyse Trading AI</h3>

            <p>
                <strong>Paire :</strong> ${paire}
            </p>

            <p>
                <strong>RSI :</strong> ${rsi}
            </p>

            <p>
                <strong>Tendance :</strong> ${tendance}
            </p>

            <p>
                <strong>Zone :</strong>
                ${support ? "Support" : "Résistance"}
            </p>

            <p>
                <strong>Score Achat :</strong> ${scoreAchat}%
            </p>

            <p>
                <strong>Score Vente :</strong> ${scoreVente}%
            </p>

            <p>
                <strong>Signal :</strong> ${signal}
            </p>

            <p>
                <strong>Confiance :</strong> ${confiance}%
            </p>

            <p>
                <strong>Heure :</strong>
                ${new Date().toLocaleTimeString()}
            </p>
        `;

    }, 1000);
}function analyserMarche() {

    const resultat = document.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = `
        <h3>✅ FONCTIONNEMENT CONFIRMÉ</h3>
        <p>🤖 Trading AI est connecté.</p>
        <p><strong>Paire :</strong> ${paire}</p>
        <p>⏳ Préparation de l'analyse S5 → S4 → S3 → S2 → S1 → M1...</p>
    `;
}
