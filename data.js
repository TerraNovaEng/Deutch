// js/data.js
const dialoguesData = [
    {
        id: 1,
        title: "Modul 1: Begrüßung & Vorstellung (A1)",
        type: "choice",
        steps: [
            { prompt: "Person A: Hallo! Ich heiße Anna. Wie heißt du?", options: ["Hallo, ich heiße Paul.", "Auf Wiedersehen.", "Mir geht es gut."], correct: 0 },
            { prompt: "Person B: Ich komme aus Albanien. Woher kommst du?", options: ["Ich komme aus den USA.", "Guten Tag.", "Tschüss!"], correct: 0 },
            { prompt: "Person A: Wie geht es dir?", options: ["Mir geht es sehr gut.", "Ich heiße Anna.", "Albanien."], correct: 0 },
            { prompt: "Person B: Auf Wiedersehen!", options: ["Tschüss!", "Hallo!", "Wie bitte?"], correct: 0 }
        ]
    },
    {
        id: 2,
        title: "Modul 2: Im Café bestellen (A1)",
        type: "choice",
        steps: [
            { prompt: "Kellner: Guten Tag! Was möchten Sie?", options: ["Ich hätte gerne einen Kaffee, bitte.", "Ich heiße Paul.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Kellner: Mit Milch oder Zucker?", options: ["Mit Milch, bitte.", "Ich komme aus den USA.", "Mir geht es gut."], correct: 0 },
            { prompt: "Kellner: Das macht 2,50 Euro.", options: ["Bitte schön. Danke!", "Hallo!", "Guten Tag."], correct: 0 }
        ]
    },
    {
        id: 3,
        title: "Modul 3: Nach dem Weg fragen (A2)",
        type: "choice",
        steps: [
            { prompt: "Entschuldigung, ich suche den Bahnhof.", options: ["Gehen Sie geradeaus und dann links.", "Ich heiße Anna.", "Mir geht es gut."], correct: 0 },
            { prompt: "Ist das weit von hier?", options: ["Nein, nur fünf Minuten zu Fuß.", "Ja, ich komme aus Albanien.", "Guten Tag."], correct: 0 }
        ]
    },
    {
        id: 4,
        title: "Modul 4: Im Supermarkt (A1)",
        type: "choice",
        steps: [
            { prompt: "Kunde: Entschuldigung, wo finde ich Milch?", options: ["Im Gang 3, direkt links.", "Ich trinke gerne Wasser.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Kunde: Danke schön!", options: ["Gern geschehen!", "Guten Morgen.", "Nein, danke."], correct: 0 }
        ]
    },
    {
        id: 5,
        title: "Modul 5: Über Hobbies sprechen (A2)",
        type: "choice",
        steps: [
            { prompt: "Was machst du in deiner Freizeit?", options: ["Ich spiele oft Fußball und lese Bücher.", "Ich komme aus Berlin.", "Mir geht es gut."], correct: 0 },
            { prompt: "Spielt du auch gern Tennis?", options: ["Ja, aber am liebsten schwimme ich.", "Nein, das ist ein Bahnhof.", "Tschüss!"], correct: 0 }
        ]
    },
    {
        id: 6,
        title: "Modul 6: Beim Arzt (A2)",
        type: "choice",
        steps: [
            { prompt: "Arzt: Was fehlt Ihnen?", options: ["Ich habe Kopfschmerzen und Husten.", "Ich heiße Anna.", "Ich suche den Bahnhof."], correct: 0 },
            { prompt: "Arzt: Seit wann haben Sie das?", options: ["Seit gestern Abend.", "Zwei Kaffee, bitte.", "In Gang 3."], correct: 0 }
        ]
    },
    {
        id: 7,
        title: "Modul 7: Dialog ordnen (A1/A2)",
        type: "order",
        sentences: [
            "Hallo! Wie heißt du?",
            "Ich heiße Paul. Und du?",
            "Ich bin Anna. Freut mich!",
            "Gleichfalls! Woher kommst du?",
            "Ich komme aus den USA."
        ]
    },
    {
        id: 8,
        title: "Modul 8: Einkaufen & bezahlen (A1)",
        type: "choice",
        steps: [
            { prompt: "Kassierer: Zusammen oder getrennt?", options: ["Zusammen, bitte.", "Ich heiße Paul.", "Mir geht es gut."], correct: 0 },
            { prompt: "Kassierer: Mit Karte oder bar?", options: ["Mit Karte, bitte.", "Aus den USA.", "Guten Tag."], correct: 0 }
        ]
    },
    {
        id: 9,
        title: "Modul 9: Über das Wetter reden (A1)",
        type: "choice",
        steps: [
            { prompt: "Wie ist das Wetter heute?", options: ["Es regnet und ist ziemlich kalt.", "Ich komme aus Albanien.", "Zwei Euro fünfzig."], correct: 0 },
            { prompt: "Hoffentlich wird es morgen sonnig!", options: ["Ja, das hoffe ich auch.", "Auf Wiedersehen.", "Gern geschehen."], correct: 0 }
        ]
    },
    {
        id: 10,
        title: "Modul 10: Am Telefon (A2)",
        type: "choice",
        steps: [
            { prompt: "Guten Tag, hier spricht Müller. Kann ich Herrn Klein sprechen?", options: ["Moment, ich verbinde Sie.", "Ich heiße Anna.", "Mir geht es gut."], correct: 0 },
            { prompt: "Danke schön.", options: ["Auf Wiederhören!", "Tschüss!", "Hallo!"], correct: 0 }
        ]
    }
];