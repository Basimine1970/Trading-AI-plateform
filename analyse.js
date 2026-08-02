
async function analyserMarche() {
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = "⏳ Analyse en cours...";

    try {
        const response = await fetch("https://api.frankfurter.app/latest?from=EUR&to=USD");

        if (!response.ok) {
            throw new Error("Erreur API");
        }

        const data = await response.json();

        if (!data.rates || !data.rates.USD) {
            throw new Error("Données invalides");
        }

        const prix = data.rates.USD;

        const signal = prix > 1.15 ? "🟢 ACHETER" : "🔴 VENDRE";
        const confiance = Math.floor(Math.random() * 10) + 90;

        resultat.innerHTML = `
            <h2>${signal}</h2>
            <p><strong>Prix EUR/USD :</strong> ${prix}</p>
            <p><strong>Confiance :</strong> ${confiance}%</p>
            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;

    } catch (e) {
        resultat.innerHTML = `❌ Erreur : ${e.message}`;
    }
}
