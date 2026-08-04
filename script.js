async function analyserMarche() {
    const resultat = document.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = "⏳ Analyse en cours...";

    setTimeout(() => {

        let signal = "";
        let confiance = "";

        switch (paire) {
            case "EURUSD":
                signal = "🟢 ACHETER";
                confiance = "87%";
                break;

            case "GBPUSD":
                signal = "🔴 VENDRE";
                confiance = "82%";
                break;

            case "USDJPY":
                signal = "🟡 ATTENDRE";
                confiance = "75%";
                break;

            case "XAUUSD":
                signal = "🟢 ACHETER";
                confiance = "90%";
                break;
        }

        resultat.innerHTML = `
            <h3>📊 Analyse IA</h3>
            <p><strong>Paire :</strong> ${paire}</p>
            <p><strong>Signal :</strong> ${signal}</p>
            <p><strong>Confiance :</strong> ${confiance}</p>
            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;

    }, 1500);
}
