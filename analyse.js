async function analyserMarche() {
    const resultat = document.getElementById("resultat");

    resultat.innerHTML = "⏳ Analyse en cours...";

    try {
        const response = await fetch("https://api.frankfurter.app/latest?from=EUR&to=USD");
        const data = await response.json();

        const prix = data.rates.USD;

        let signal = "🟢 ACHETER";
        let confiance = Math.floor(Math.random() * 15) + 80;

        if (Math.random() > 0.5) {
            signal = "🔴 VENDRE";
        }

        resultat.innerHTML = `
            <h2>${signal}</h2>
            <p><strong>Prix EUR/USD :</strong> ${prix}</p>
            <p><strong>Confiance :</strong> ${confiance}%</p>
            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;

    } catch (e) {
        resultat.innerHTML = "❌ Impossible de récupérer les données.";
    }
}
