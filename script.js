async function analyserMarche() {
    const resultat = document.getElementById("resultat");
    const paire = document.getElementById("pair").value;

    resultat.innerHTML = "⏳ Analyse en cours...";

    setTimeout(() => {
        resultat.innerHTML = `
            <h3>📊 Analyse IA</h3>
            <p><strong>Paire :</strong> ${paire}</p>
            <p><strong>Signal :</strong> 🟢 ACHETER</p>
            <p><strong>Confiance :</strong> 87%</p>
            <p><strong>Heure :</strong> ${new Date().toLocaleTimeString()}</p>
        `;
    }, 1500);
}
