// js/data.js
const dialoguesData = [
    {
        id: 1,
        title: "Modul 1: Begrüßung & Kennenlernen (A1)",
        type: "choice",
        steps: [
            { prompt: "Person A: Guten Tag! Ich heiße Markus. Wie ist dein Name?", options: ["Hallo, ich heiße Sarah.", "Auf Wiedersehen.", "Mir geht es gut."], correct: 0 },
            { prompt: "Person B: Freut mich, Markus! Woher kommst du ursprünglich?", options: ["Ich komme aus München.", "Guten Morgen.", "Tschüss!"], correct: 0 },
            { prompt: "Person A: Und wie gefällt es dir hier in der neuen Stadt?", options: ["Es ist wunderschön und sehr lebendig.", "Ich heiße Sarah.", "Aus München."], correct: 0 },
            { prompt: "Person B: Das finde ich auch. Wir sehen uns bald wieder!", options: ["Ja, bis bald!", "Hallo!", "Wie bitte?"], correct: 0 }
        ]
    },
    {
        id: 2,
        title: "Modul 2: Im Café bestellen & bezahlen (A1)",
        type: "choice",
        steps: [
            { prompt: "Kellner: Guten Tag! Haben Sie schon gewählt?", options: ["Ja, ich hätte gerne einen großen Milchkaffee.", "Ich heiße Markus.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Kellner: Gerne. Möchten Sie auch etwas Süßes dazu?", options: ["Ein Stück Apfelkuchen bitte.", "Ich komme aus München.", "Mir geht es gut."], correct: 0 },
            { prompt: "Kellner: Kommt sofort. Zusammen oder getrennt?", options: ["Zusammen bitte, ich zahle mit Karte.", "Hallo!", "Guten Tag."], correct: 0 }
        ]
    },
    {
        id: 3,
        title: "Modul 3: Nach dem Weg fragen (A2)",
        type: "choice",
        steps: [
            { prompt: "Passant: Entschuldigung, wissen Sie, wo die nächste U-Bahn-Station ist?", options: ["Gehen Sie geradeaus und dann die zweite Straße links.", "Ich heiße Sarah.", "Mir geht es gut."], correct: 0 },
            { prompt: "Passant: Ist das weit von hier zu Fuß?", options: ["Nein, höchstens fünf Minuten.", "Ja, ich komme aus München.", "Guten Tag."], correct: 0 },
            { prompt: "Passant: Vielen Dank für Ihre nette Hilfe!", options: ["Gern geschehen, einen schönen Tag noch!", "Auf Wiederhören.", "Nein danke."], correct: 0 }
        ]
    },
    {
        id: 4,
        title: "Modul 4: Im Supermarkt nach Produkten fragen (A1)",
        type: "choice",
        steps: [
            { prompt: "Kunde: Entschuldigung, wo finde ich frisches Gemüse?", options: ["Direkt am Eingang auf der linken Seite.", "Ich trinke gerne Wasser.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Kunde: Und gibt es hier auch Bio-Tomaten?", options: ["Ja, im Gang drei neben den Gurken.", "Guten Morgen.", "Nein, danke."], correct: 0 },
            { prompt: "Kunde: Perfekt, vielen Dank für die Auskunft.", options: ["Sehr gerne, schönen Tag noch!", "Tschüss!", "Wie bitte?"], correct: 0 }
        ]
    },
    {
        id: 5,
        title: "Modul 5: Über Hobbies und Freizeit sprechen (A2)",
        type: "choice",
        steps: [
            { prompt: "Person A: Was machst du eigentlich am Wochenende am liebsten?", options: ["Ich gehe oft wandern und fotografiere die Natur.", "Ich komme aus Berlin.", "Mir geht es gut."], correct: 0 },
            { prompt: "Person B: Das klingt spannend! Machst du das ganz alleine?", options: ["Meistens gehe ich mit Freunden oder meiner Familie.", "Nein, das ist ein Bahnhof.", "Tschüss!"], correct: 0 },
            { prompt: "Person A: Da hätte ich nächstes Mal vielleicht Lust mitzukommen.", options: ["Sehr gerne, melde dich einfach bei mir!", "Guten Tag.", "Zwei Kaffee bitte."], correct: 0 }
        ]
    },
    {
        id: 6,
        title: "Modul 6: Termine beim Arzt vereinbaren (A2)",
        type: "choice",
        steps: [
            { prompt: "Empfang: Praxis Dr. Schmidt, guten Tag.", options: ["Guten Tag, ich möchte gerne einen Termin vereinbaren.", "Ich heiße Anna.", "Ich suche den Bahnhof."], correct: 0 },
            { prompt: "Empfang: Haben Sie akute Beschwerden oder ist es ein Kontrolltermin?", options: ["Ich habe seit zwei Tagen starke Kopfschmerzen.", "Zwei Kaffee, bitte.", "In Gang 3."], correct: 0 },
            { prompt: "Empfang: Kommen Sie am besten heute Nachmittag um 15 Uhr vorbei.", options: ["Gut, ich bin pünktlich da. Danke!", "Auf Wiedersehen.", "Tschüss."], correct: 0 }
        ]
    },
    {
        id: 7,
        title: "Modul 7: Dialog ordnen - Kennenlernen (A1/A2)",
        type: "order",
        sentences: [
            "Hallo! Entschuldigung, ist dieser Platz noch frei?",
            "Ja, natürlich, setzen Sie sich bitte.",
            "Vielen Dank. Ich heiße Thomas, und Sie?",
            "Ich bin Maria. Studieren Sie hier an der Universität?",
            "Nein, ich arbeite schon seit zwei Jahren als Ingenieur."
        ]
    },
    {
        id: 8,
        title: "Modul 8: Im Bekleidungsgeschäft (A1)",
        type: "choice",
        steps: [
            { prompt: "Verkäufer: Kann ich Ihnen behilflich sein?", options: ["Ja, ich suche eine warme Jacke für den Winter.", "Ich heiße Paul.", "Mir geht es gut."], correct: 0 },
            { prompt: "Verkäufer: Welche Größe tragen Sie denn normal?", options: ["Normalerweise trage ich Größe L.", "Aus den USA.", "Guten Tag."], correct: 0 },
            { prompt: "Verkäufer: Die Umkleidekabinen sind dort hinten rechts.", options: ["Vielen Dank, ich probiere sie gleich an.", "Tschüss.", "Nein danke."], correct: 0 }
        ]
    },
    {
        id: 9,
        title: "Modul 9: Pläne für den Urlaub schmieden (A2)",
        type: "choice",
        steps: [
            { prompt: "Person A: Hast du schon Pläne für die Sommerferien?", options: ["Ja, ich möchte dieses Jahr nach Österreich reisen.", "Ich komme aus Albanien.", "Zwei Euro fünfzig."], correct: 0 },
            { prompt: "Person B: Fährst du mit dem Zug oder nimmst du das Auto?", options: ["Wir nehmen den Zug, das ist umweltfreundlicher.", "Auf Wiedersehen.", "Gern geschehen."], correct: 0 },
            { prompt: "Person A: Das stimmt absolut. Viel Spaß beim Packen!", options: ["Danke dir, wir sehen uns nach dem Urlaub!", "Hallo!", "Wie bitte?"], correct: 0 }
        ]
    },
    {
        id: 10,
        title: "Modul 10: Wichtiger Telefonanruf im Büro (A2)",
        type: "choice",
        steps: [
            { prompt: "Anrufer: Guten Tag, mein Name ist Wagner. Spreche ich mit Herrn Bauer?",options: ["Guten Tag Herr Wagner, nein, er ist im Meeting.", "Ich heiße Anna.", "Mir geht es gut."], correct: 0 },
            { prompt: "Anrufer: Wann kann ich ihn denn am besten erreichen?", options: ["Versuchen Sie es am besten morgen früh ab neun Uhr.", "Auf Wiederhören!", "Tschüss!"], correct: 0 },
            { prompt: "Anrufer: Alles klar, ich rufe morgen wieder an. Auf Wiederhören.", options: ["Wiederhören, schönen Tag noch!", "Danke.", "Hallo!"], correct: 0 }
        ]
    },
    {
        id: 11,
        title: "Modul 11: Über das Wetter sprechen (A1)",
        type: "choice",
        steps: [
            { prompt: "Person A: Was für ein grauer Tag heute, oder?", options: ["Ja, es regnet schon seit heute früh ununterbrochen.", "Ich heiße Markus.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Person B: Hoffentlich wird es am Wochenende wieder sonnig.", options: ["Der Wetterbericht hat besseres Wetter versprochen.", "Aus München.", "Guten Tag."], correct: 0 }
        ]
    },
    {
        id: 12,
        title: "Modul 12: Dialog ordnen - Am Bahnhof (A2)",
        type: "order",
        sentences: [
            "Guten Tag, ich hätte gerne eine Fahrkarte nach Berlin.",
            "Einfach oder mit Rückfahrt?",
            "Bitte mit Rückfahrt für nächsten Freitag.",
            "Das macht zusammen 89 Euro.",
            "Kann ich mit Kreditkarte bezahlen?"
        ]
    },
    {
        id: 13,
        title: "Modul 13: In der Apotheke (A2)",
        type: "choice",
        steps: [
            { prompt: "Apotheker: Guten Tag, was kann ich für Sie tun?", options: ["Guten Tag, ich brauche etwas gegen Halsschmerzen.", "Ich trinke gerne Tee.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Apotheker: Haben Sie auch Husten oder Fieber?", options: ["Nein, nur leichte Schmerzen beim Schlucken.", "Ja, ich komme aus Berlin.", "Guten Morgen."], correct: 0 }
        ]
    },
    {
        id: 14,
        title: "Modul 14: Über die Familie sprechen (A1)",
        type: "choice",
        steps: [
            { prompt: "Person A: Hast du Geschwister?", options: ["Ja, ich habe einen Bruder und eine Schwester.", "Mir geht es gut.", "Guten Tag."], correct: 0 },
            { prompt: "Person B: Wohnen sie auch hier in der Nähe?", options: ["Nein, sie studieren in einer anderen Stadt.", "Ich heiße Anna.", "Tschüss."], correct: 0 }
        ]
    },
    {
        id: 15,
        title: "Modul 15: Dialog ordnen - Im Restaurant (A2)",
        type: "order",
        sentences: [
            "Haben Sie schon einen Tisch reserviert?",
            "Nein, leider nicht. Haben Sie noch Platz für zwei Personen?",
            "Einen Moment bitte, ich schaue kurz nach. Ja, folgen Sie mir.",
            "Danke schön. Könnten wir schon die Speisekarte bekommen?",
            "Natürlich, ich bringe sie Ihnen sofort."
        ]
    },
    {
        id: 16,
        title: "Modul 16: Nach der Uhrzeit fragen (A1)",
        type: "choice",
        steps: [
            { prompt: "Passant: Entschuldigung, wie spät ist es bitte?", options: ["Es ist jetzt genau halb drei.", "Ich heiße Paul.", "Auf Wiedersehen."], correct: 0 },
            { prompt: "Passant: Vielen Dank für die Auskunft!", options: ["Keine Ursache, gerne!", "Guten Tag.", "Nein danke."], correct: 0 }
        ]
    },
    {
        id: 17,
        title: "Modul 17: Über den Beruf sprechen (A2)",
        type: "choice",
        steps: [
            { prompt: "Person A: Als was arbeitest du eigentlich?", options: ["Ich bin als Informatiker in einer Softwarefirma tätig.", "Mir geht es sehr gut.", "Aus Hamburg."], correct: 0 },
            { prompt: "Person B: Gefällt dir die Arbeit dort?", options: ["Ja, das Team ist super und die Projekte sind spannend.", "Nein, danke.", "Tschüss!"], correct: 0 }
        ]
    },
    {
        id: 18,
        title: "Modul 18: Dialog ordnen - Wohnungsbesichtigung (A2)",
        type: "order",
        sentences: [
            "Guten Tag, schön dass Sie pünktlich zur Besichtigung da sind.",
            "Guten Tag, vielen Dank für die Einladung.",
            "Das ist das Wohnzimmer mit Zugang zum Balkon.",
            "Die Aussicht ins Grüne ist wirklich wunderschön.",
            "Ja, und die Nachbarschaft ist auch sehr ruhig."
        ]
    },
    {
        id: 19,
        title: "Modul 19: Auf der Post (A1)",
        type: "choice",
        steps: [
            { prompt: "Mitarbeiter: Guten Tag, wie kann ich helfen?", options: ["Ich möchte dieses Paket nach Spanien schicken.", "Ich heiße Anna.", "Mir geht es gut."], correct: 0 },
            { prompt: "Mitarbeiter: Bitte auf die Waage stellen. Das macht 14 Euro.", options: ["Kann ich bar bezahlen?", "Guten Tag.", "Tschüss."], correct: 0 }
        ]
    },
    {
        id: 20,
        title: "Modul 20: Im Hotel einchecken (A2)",
        type: "choice",
        steps: [
            { prompt: "Rezeptionist: Herzlich willkommen im Hotel Lindenhof!", options: ["Guten Tag, ich habe ein Einzelzimmer auf den Namen Weber reserviert.", "Ich suche den Bahnhof.", "Guten Morgen."], correct: 0 },
            { prompt: "Rezeptionist: Einen Moment bitte. Hier ist Ihr Zimmerschlüssel, Zimmer 204.", },
            { prompt: "Rezeptionist: Das Frühstück gibt es morgens ab 6:30 Uhr.", options: ["Vielen Dank, wo ist der Aufzug?", "Auf Wiedersehen.", "Nein danke."], correct: 0 }
        ]
    }
];