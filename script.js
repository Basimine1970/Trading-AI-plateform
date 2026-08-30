// ==========================================
// TRADING AI OTC - MOTEUR S3 / S5 / S15
// Version 1 - Fractal 2 + moteur de score
// ==========================================

// Paramètres modifiables
const CONFIG = {
    timeframeRapide: "S3",
    timeframeConfirmation: "S5",
    timeframeTendance: "S15",

    fractalPeriod: 2,

    scoreMinimum: 70,

    poids: {
        tendanceS15: 30,
        confirmationS5: 25,
        signalS3: 25,
        fractal: 20
    }
};


// ==========================================
// MOTEUR DE SCORE REMPLAÇABLE
// ==========================================

function calculerScore(signaux) {

    let scoreAchat = 0;
    let scoreVente = 0;

    // S15
    if (signaux.S15 === "ACHAT") {
        scoreAchat += CONFIG.poids.tendanceS15;
    }

    if (signaux.S15 === "VENTE") {
        scoreVente += CONFIG.poids.tendanceS15;
    }

    // S5
    if (signaux.S5 === "ACHAT") {
        scoreAchat += CONFIG.poids.confirmationS5;
    }

    if (signaux.S5 === "VENTE") {
        scoreVente += CONFIG.poids.confirmationS5;
    }

    // S3
    if (signaux.S3 === "ACHAT") {
        scoreAchat += CONFIG.poids.signalS3;
    }

    if (signaux.S3 === "VENTE") {
        scoreVente += CONFIG.poids.signalS3;
    }

    // Fractal 2
    if (signaux.fractal === "ACHAT") {
        scoreAchat += CONFIG.poids.fractal;
    }

    if (signaux.fractal === "VENTE") {
        scoreVente += CONFIG.poids.fractal;
    }

    // Décision finale
    if (
        scoreAchat >= CONFIG.scoreMinimum &&
        scoreAchat > scoreVente
    ) {
        return {
            signal: "ACHAT",
            score: scoreAchat,
            scoreOppose: scoreVente
        };
    }

    if (
        scoreVente >= CONFIG.scoreMinimum &&
        scoreVente > scoreAchat
    ) {
        return {
            signal: "VENTE",
            score: scoreVente,
            scoreOppose: scoreAchat
        };
    }

    return {
        signal: "ATTENDRE",
        score: Math.max(scoreAchat, scoreVente),
        scoreOppose: Math.min(scoreAchat, scoreVente)
    };
}


// ==========================================
// ANALYSE S3 / S5 / S15
// ==========================================

function analyserMultiTimeframe(signaux) {

    const resultat = calculerScore(signaux);

    return {
        timeframe: {
            rapide: CONFIG.timeframeRapide,
            confirmation: CONFIG.timeframeConfirmation,
            tendance: CONFIG.timeframeTendance
        },

        fractal: `Fractal ${CONFIG.fractalPeriod}`,

        signal: resultat.signal,

        score: resultat.score,

        scoreOppose: resultat.scoreOppose,

        message:
            resultat.signal === "ACHAT"
                ? "🟢 ACHAT"
                : resultat.signal === "VENTE"
                ? "🔴 VENTE"
                : "⚪ ATTENDRE"
    };
}


// ==========================================
// TEST DU MOTEUR
// ==========================================

const testSignaux = {
    S3: "ACHAT",
    S5: "ACHAT",
    S15: "ACHAT",
    fractal: "ACHAT"
};

console.log(
    "Résultat Trading AI OTC :",
    analyserMultiTimeframe(testSignaux)
);
