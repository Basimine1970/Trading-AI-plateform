async function analyserMarche() {
    const resultat = document.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = "⏳ Analyse IA en cours...";

    setTimeout(() => {

        // Valeurs simulées (elles seront remplacées plus tard par de vraies données)
        const rsi = Math.floor(Math.random() * 40) + 30;
        const macd = (Math.random() * 2 - 1).toFixed(2);

        let signal = "🟡 ATTENDRE";
        let tendance = "➡️ Neutre";
        let confiance = 60;

        if (rsi < 30) {
            signal = "🟢 ACHETER";
            tendance = "📈 Haussière";
            confiance = 88;
        } else if (rsi > 70) {
            signal = "🔴 VENDRE";
            tendance = "📉 Baissière";
            confiance = 90;
        }

        resultat.innerHTML = `
            <h3>📊 Analyse IA</h3>

            <p><strong>Paire :</strong> ${paire}</p>

            <p><strong>Tendance :</strong> ${tendance}</p>

            <p><strong>RSI :</strong> ${rsi}</p>

            <p><strong>MACD :</strong> ${macd}</p>

            <p><strong>Signal :</strong> ${signal}</p>

            <p><strong>Confiance :</strong> ${confiance}%</p>

            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;

    }, 1500);
}
