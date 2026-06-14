# A2 German Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:de:a2_app_booking_confirmation - Eine App-Buchung Bestätigen

- Level: A2
- Language: German (de)
- Scenario ID: a2_app_booking_confirmation
- Setting: Hilfenachricht
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine digitale oder einfache Formular-Aufgabe mit geringem Risiko in kurzen A2-Sätzen bewältigen.
- Support text: Halte die Aufgabe risikoarm. Keine Passwörter, Zahlungsdaten, sensiblen IDs oder rechtlichen/medizinischen Informationen.

### Clean Dialogue Path

- Mitarbeiter: Ihre Buchung ist heute um 15 Uhr bestätigt. (預約確認為今天下午三點。)
- 你: Wo ist der Ort? (地點在哪裡？)
- Mitarbeiter: Im zweiten Stock des Cafes. (在咖啡店二樓。)
- 你: Also im zweiten Stock des Cafes? (是在咖啡店二樓，對嗎？)
- Mitarbeiter: Ja, die Buchung ist auf Mina. (對，預約姓名是 Mina。)
- 你: Ja, das ist mein Name. (對，是我的名字。)
- Mitarbeiter: Dann sehen wir uns um 15 Uhr. (那下午三點見。)
- 你: Gut, ich komme um 15 Uhr. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ihre Buchung ist heute um 15 Uhr bestätigt. (預約確認為今天下午三點。) | Wo ist der Ort? (地點在哪裡？) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t2 | Im zweiten Stock des Cafes. (在咖啡店二樓。) | Also im zweiten Stock des Cafes? (是在咖啡店二樓，對嗎？) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t3 | Ja, die Buchung ist auf Mina. (對，預約姓名是 Mina。) | Ja, das ist mein Name. (對，是我的名字。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t4 | Dann sehen wir uns um 15 Uhr. (那下午三點見。) | Gut, ich komme um 15 Uhr. (好，我下午三點會去。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |

---

## a2:de:a2_ask_ingredient_preference - Nach Einer Zutat Fragen

- Level: A2
- Language: German (de)
- Scenario ID: a2_ask_ingredient_preference
- Setting: Restauranttheke
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Fragen Sie, ob eine häufige Zutat enthalten ist, und wählen Sie nach Vorliebe.
- Support text: Fragen Sie, ob eine häufige Zutat enthalten ist, und wählen Sie nach Vorliebe.

### Clean Dialogue Path

- Mitarbeiter: Was möchten Sie bestellen? (您想點什麼？)
- 你: Ist in diesem Salat Zwiebel drin? (這個沙拉裡有洋蔥嗎？)
- Mitarbeiter: Ja, es ist ein wenig Zwiebel drin. (有，放一點洋蔥。)
- 你: Es ist ein wenig Zwiebel drin, richtig? (有一點洋蔥，對嗎？)
- Mitarbeiter: Wenn Sie möchten, können wir ihn ohne Zwiebel machen. (如果您想要，可以不加洋蔥。)
- 你: Ja, bitte ohne Zwiebel. (好的，請不要加洋蔥。)
- Mitarbeiter: Gerne. Ich bereite ihn ohne Zwiebel vor. (可以，我會準備不加洋蔥的。)
- 你: Danke. Bitte so vorbereiten. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Was möchten Sie bestellen? (您想點什麼？) | Ist in diesem Salat Zwiebel drin? (這個沙拉裡有洋蔥嗎？) | 1. In welchem Stock ist dieser Salat? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: Eine Etage passt nicht zu Zutaten.<br>2. Bitte ändern Sie meine Ticketzeit. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: Das wechselt zu einem Ticketthema. | Fragen Sie nach einer häufigen Zutat. |  |
| t2 | Ja, es ist ein wenig Zwiebel drin. (有，放一點洋蔥。) | Es ist ein wenig Zwiebel drin, richtig? (有一點洋蔥，對嗎？) | 1. Es ist viel Fleisch drin, richtig? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: Fleisch wurde nicht erwähnt.<br>2. Das Zimmer ist laut, richtig? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: Das wechselt zu einem Hotelproblem. | Bestätigen Sie die Zutateninformation. |  |
| t3 | Wenn Sie möchten, können wir ihn ohne Zwiebel machen. (如果您想要，可以不加洋蔥。) | Ja, bitte ohne Zwiebel. (好的，請不要加洋蔥。) | 1. Ja, geben Sie mir bitte Allergiemedizin. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: Medizin/Allergie liegt außerhalb dieser Aufgabe.<br>2. Ja, erstatten Sie es bitte. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: Das ist keine Erstattungsanfrage. | Wählen Sie nur nach Vorliebe. |  |
| t4 | Gerne. Ich bereite ihn ohne Zwiebel vor. (可以，我會準備不加洋蔥的。) | Danke. Bitte so vorbereiten. (謝謝，請這樣做。) | 1. Sagen Sie mir bitte meine Passnummer. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: Passdaten sind nicht nötig.<br>2. Ich möchte mein Gepäck aufbewahren. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: Das wechselt zur Gepäckaufbewahrung. | Schließen Sie mit der Bestätigung der Bestellung. |  |

---

## a2:de:a2_ask_late_checkout - Nach Späterem Check-out Fragen

- Level: A2
- Language: German (de)
- Scenario ID: a2_ask_late_checkout
- Setting: An der Hotelrezeption
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Fragen Sie, ob ein späterer Check-out möglich ist, und bestätigen Sie die Zeit.

### Clean Dialogue Path

- Hotelmitarbeiter: Wie kann ich Ihnen helfen? (我可以怎麼幫您？)
- Sie: Kann ich etwas später auschecken? (我可以晚一點退房嗎？)
- Hotelmitarbeiter: Heute können Sie bis ein Uhr auschecken. (今天可以到一點退房。)
- Sie: Bis ein Uhr ist möglich, richtig? (到一點可以，對嗎？)
- Hotelmitarbeiter: Bitte zeigen Sie Ihre Zimmerkarte vor Mittag an der Rezeption. (請在中午前把房卡拿到櫃台。)
- Sie: Ich zeige die Karte vor Mittag, richtig? (中午前拿房卡給您看，對嗎？)
- Hotelmitarbeiter: Gut, ich notiere Check-out um ein Uhr. (好的，我幫您確認一點退房。)
- Sie: Danke. Ich checke um ein Uhr aus. (謝謝。我一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wie kann ich Ihnen helfen? (我可以怎麼幫您？) | Kann ich etwas später auschecken? (我可以晚一點退房嗎？) | 1. Kann ich etwas später einchecken? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: Es geht um Check-out, nicht um Check-in.<br>2. Können Sie den Preis senken? (可以幫我降價嗎？) [forbidden_or_wrong_domain] - feedback: Preisverhandlung liegt außerhalb dieser A2-Aufgabe. | Pregunte por salir más tarde. |  |
| t2 | Heute können Sie bis ein Uhr auschecken. (今天可以到一點退房。) | Bis ein Uhr ist möglich, richtig? (到一點可以，對嗎？) | 1. Bis zehn Uhr ist möglich, richtig? (到十點可以，對嗎？) [wrong_detail_or_domain] - feedback: Das Personal sagte bis ein Uhr.<br>2. Ich buche ein neues Zimmer. (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: Es geht um Check-out-Zeit, nicht um eine neue Buchung. | Escuche la hora permitida. | A2-Muster<br>Kurzer Ausdruck für diese Hotelsituation.<br>hasta la una = 到一點 |
| t3 | Bitte zeigen Sie Ihre Zimmerkarte vor Mittag an der Rezeption. (請在中午前把房卡拿到櫃台。) | Ich zeige die Karte vor Mittag, richtig? (中午前拿房卡給您看，對嗎？) | 1. Ich sage Ihnen meine Passnummer, richtig? (告訴您護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: Passdaten sind hier nicht nötig.<br>2. Ich hole mein Gepäck um sieben Uhr ab, richtig? (七點領行李，對嗎？) [forbidden_or_wrong_domain] - feedback: Das ist Check-out, nicht Gepäckabholung. | Confirme la condición sencilla. |  |
| t4 | Gut, ich notiere Check-out um ein Uhr. (好的，我幫您確認一點退房。) | Danke. Ich checke um ein Uhr aus. (謝謝。我一點退房。) | 1. Ich beantrage eine Erstattung. (我要申請退款。) [wrong_detail_or_domain] - feedback: Erstattungen liegen außerhalb dieser Situation.<br>2. Morgen früh nehme ich den Zug. (我明天早上搭火車。) [forbidden_or_wrong_domain] - feedback: Das ist Check-out-Bestätigung, nicht Verkehr. | Confirme la hora final. |  |

---

## a2:de:a2_ask_recommendation_budget - Eine Empfehlung Im Budget Erfragen

- Level: A2
- Language: German (de)
- Scenario ID: a2_ask_recommendation_budget
- Setting: kleiner Laden
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Bitten Sie um eine einfache Empfehlung innerhalb eines kleinen Budgets.
- Support text: Bitten Sie um eine einfache Empfehlung innerhalb eines kleinen Budgets.

### Clean Dialogue Path

- Mitarbeiter: Was suchen Sie? (您在找什麼？)
- 你: Können Sie mir ein Geschenk unter zehn Euro empfehlen? (可以推薦十歐元以內的禮物嗎？)
- Mitarbeiter: Möchten Sie etwas Leichtes oder etwas Praktisches? (您想要輕巧的，還是實用的？)
- 你: Etwas Praktisches, bitte. (請推薦實用的。)
- Mitarbeiter: Dann ist dieses kleine Notizbuch unter zehn Euro. (那這本小筆記本在十歐元以內。)
- 你: Das Notizbuch ist unter zehn Euro, richtig? (那本筆記本在十歐元以內，對嗎？)
- Mitarbeiter: Ja, und Geschenkverpackung ist möglich. (對，也可以包裝成禮物。)
- 你: Gut. Ich nehme dieses Notizbuch. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Was suchen Sie? (您在找什麼？) | Können Sie mir ein Geschenk unter zehn Euro empfehlen? (可以推薦十歐元以內的禮物嗎？) | 1. Prüfen Sie bitte mein Bankkonto. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: Das ist keine Bankaufgabe.<br>2. Ich möchte einen verlorenen Gegenstand melden. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: Fund-/Verlustmeldung ist eine andere Aufgabe. | Bitten Sie um eine Empfehlung innerhalb eines kleinen Budgets. |  |
| t2 | Möchten Sie etwas Leichtes oder etwas Praktisches? (您想要輕巧的，還是實用的？) | Etwas Praktisches, bitte. (請推薦實用的。) | 1. Etwas Scharfes, bitte. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Scharf passt eher zu einem Menü.<br>2. Ich möchte später auschecken. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: Das wechselt zum Hotel. | Nennen Sie eine einfache Vorliebe. |  |
| t3 | Dann ist dieses kleine Notizbuch unter zehn Euro. (那這本小筆記本在十歐元以內。) | Das Notizbuch ist unter zehn Euro, richtig? (那本筆記本在十歐元以內，對嗎？) | 1. Das Zimmer ist unter zehn Euro, richtig? (那個房間在十歐元以內，對嗎？) [wrong_detail_or_domain] - feedback: Ein Zimmer ist nicht der empfohlene Artikel.<br>2. Das Ticket war für gestern, richtig? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: Das wechselt zu Tickets. | Bestätigen Sie Empfehlung und Budget. |  |
| t4 | Ja, und Geschenkverpackung ist möglich. (對，也可以包裝成禮物。) | Gut. Ich nehme dieses Notizbuch. (很好，我要那本筆記本。) | 1. Ich möchte eine Erstattung. (請退款。) [wrong_detail_or_domain] - feedback: Das ist keine Erstattungsanfrage.<br>2. Prüfen Sie bitte meine Versicherung. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: Versicherung liegt außerhalb dieser risikoarmen Aufgabe. | Nehmen Sie die Empfehlung höflich an. |  |

---

## a2:de:a2_ask_transfer_platform - Nach dem Umstiegsbahnsteig Fragen

- Level: A2
- Language: German (de)
- Scenario ID: a2_ask_transfer_platform
- Setting: An der Information
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: Fragen Sie nach dem Umstieg, hören Sie Station und Bahnsteig und bestätigen Sie die kurze Route.

### Clean Dialogue Path

- Mitarbeiter: Wohin möchten Sie fahren? (您要去哪裡？)
- Sie: Ich fahre zum Flughafen. Wo muss ich umsteigen? (詢問轉乘)
- Mitarbeiter: Steigen Sie in Central aus und gehen Sie zu Bahnsteig drei. (請在 Central 下車，然後到 3 號月台。)
- Sie: In Central aussteigen und zu Bahnsteig drei gehen, richtig? (確認路線)
- Mitarbeiter: Auf Bahnsteig drei nehmen Sie den Zug zum Flughafen. (在 3 號月台搭往機場的車。)
- Sie: Auf Bahnsteig drei nehme ich den Zug zum Flughafen, richtig? (確認月台與方向)
- Mitarbeiter: Ja, steigen Sie in Central um. (對，請在 Central 轉乘。)
- Sie: Danke. Ich steige in Central um. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wohin möchten Sie fahren? (您要去哪裡？) | Ich fahre zum Flughafen. Wo muss ich umsteigen? (詢問轉乘) | 1. Gestern war ich am Flughafen. (我昨天去了機場。) - feedback: Fragen Sie nach dem Umstieg jetzt, nicht nach gestern.<br>2. Ich möchte Gepäck aufbewahren. (我想寄放行李。) - feedback: Das ist Gepäckaufbewahrung, kein Umstieg. | 詢問轉乘 |  |
| t2 | Steigen Sie in Central aus und gehen Sie zu Bahnsteig drei. (請在 Central 下車，然後到 3 號月台。) | In Central aussteigen und zu Bahnsteig drei gehen, richtig? (確認路線) | 1. Ich trinke in Central Kaffee, richtig? (我在 Central 喝咖啡，對嗎？) - feedback: Die Anweisung ist, zu Bahnsteig drei zu gehen.<br>2. Zimmer drei, richtig? (3 號房，對嗎？) - feedback: Es ist ein Bahnsteig, kein Zimmer. | 確認兩步指示 |  |
| t3 | Auf Bahnsteig drei nehmen Sie den Zug zum Flughafen. (在 3 號月台搭往機場的車。) | Auf Bahnsteig drei nehme ich den Zug zum Flughafen, richtig? (確認月台與方向) | 1. Der Zug zum Flughafen kam gestern. (往機場的車昨天到了。) - feedback: Bestätigen Sie den Zug, den Sie jetzt brauchen.<br>2. Wohin gehe ich im Notfall? (緊急時我要去哪裡？) - feedback: Notfallwege liegen außerhalb dieser Aufgabe. | 確認方向 |  |
| t4 | Ja, steigen Sie in Central um. (對，請在 Central 轉乘。) | Danke. Ich steige in Central um. (禮貌收尾) | 1. Ich möchte meine Ticketzeit ändern. (我想更改票的時間。) - feedback: Das ist kein Ticketwechsel.<br>2. Ich gehe am Flughafen zur Polizei. (我要去機場找警察。) - feedback: Polizeiliche Vorgänge liegen außerhalb dieser Aufgabe. | 收尾 |  |

---

## a2:de:a2_change_delivery_pickup_time - Eine Abholzeit Ändern

- Level: A2
- Language: German (de)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: Hilfenachricht
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine digitale oder einfache Formular-Aufgabe mit geringem Risiko in kurzen A2-Sätzen bewältigen.
- Support text: Halte die Aufgabe risikoarm. Keine Passwörter, Zahlungsdaten, sensiblen IDs oder rechtlichen/medizinischen Informationen.

### Clean Dialogue Path

- Mitarbeiter: Die Abholung ist heute um 16 Uhr. (今天四點取貨。)
- 你: Kann ich die Abholzeit ändern? (可以改取貨時間嗎？)
- Mitarbeiter: Ja, 17 Uhr ist möglich. (可以，五點可以。)
- 你: Dann bitte um 17 Uhr. (那請改成五點。)
- Mitarbeiter: Also ändern wir auf 17 Uhr? (改成五點嗎？)
- 你: Ja, 17 Uhr passt. (對，五點可以。)
- Mitarbeiter: Okay, ich ändere es auf 17 Uhr. (好的，我會改成五點。)
- 你: Danke. Ich komme um 17 Uhr. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Die Abholung ist heute um 16 Uhr. (今天四點取貨。) | Kann ich die Abholzeit ändern? (可以改取貨時間嗎？) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t2 | Ja, 17 Uhr ist möglich. (可以，五點可以。) | Dann bitte um 17 Uhr. (那請改成五點。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t3 | Also ändern wir auf 17 Uhr? (改成五點嗎？) | Ja, 17 Uhr passt. (對，五點可以。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t4 | Okay, ich ändere es auf 17 Uhr. (好的，我會改成五點。) | Danke. Ich komme um 17 Uhr. (謝謝，我五點會去。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |

---

## a2:de:a2_change_ticket_time - Eine Ticketzeit Ändern

- Level: A2
- Language: German (de)
- Scenario ID: a2_change_ticket_time
- Setting: Am Fahrkartenschalter
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: Bitten Sie darum, die Ticketzeit zu ändern, hören Sie die verfügbare Zeit und bestätigen Sie.

### Clean Dialogue Path

- Mitarbeiter: Guten Tag. Wie kann ich Ihnen helfen? (您好，我可以怎麼幫您？)
- Sie: Ich möchte die Uhrzeit meines Tickets ändern. (提出請求)
- Mitarbeiter: Sie können es auf den Zug um fünfzehn Uhr ändern. (可以改成下午 3 點的車。)
- Sie: Ja, bitte auf den Zug um fünfzehn Uhr. (接受新時間)
- Mitarbeiter: Also, fünfzehn Uhr ist richtig? (那就改成 15 點，對嗎？)
- Sie: Ja, fünfzehn Uhr ist richtig. (確認時間)
- Mitarbeiter: Es ist geändert. Bitte nehmen Sie den Zug um fünfzehn Uhr. (已經改好了，請搭 15 點那班車。)
- Sie: Danke. Ich nehme den Zug um fünfzehn Uhr. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wie kann ich Ihnen helfen? (您好，我可以怎麼幫您？) | Ich möchte die Uhrzeit meines Tickets ändern. (提出請求) | 1. Das Ticket war für gestern. (票是昨天的。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2.<br>2. Einen Kaffee, bitte. (請給我一杯咖啡。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2. | 提出改時間 |  |
| t2 | Sie können es auf den Zug um fünfzehn Uhr ändern. (可以改成下午 3 點的車。) | Ja, bitte auf den Zug um fünfzehn Uhr. (接受新時間) | 1. Gibt es um fünfzehn Uhr ein Zimmer? (15 點有房間嗎？) - feedback: Es geht um ein Ticket, nicht um ein Zimmer.<br>2. Gestern bin ich um fünfzehn Uhr gefahren. (我昨天 15 點搭了。) - feedback: Die verfügbare Zeit gilt für die Änderung heute. | 接受可用時間 |  |
| t3 | Also, fünfzehn Uhr ist richtig? (那就改成 15 點，對嗎？) | Ja, fünfzehn Uhr ist richtig. (確認時間) | 1. Nein, fünfzehn Uhr war gestern. (不，15 點是昨天。) - feedback: Hier sollen Sie die neue Uhrzeit bestätigen.<br>2. Bitte erklären Sie die Erstattungsregeln. (請說明退款規則。) - feedback: Erstattungsregeln liegen außerhalb dieser A2-Aufgabe. | 確認時間 |  |
| t4 | Es ist geändert. Bitte nehmen Sie den Zug um fünfzehn Uhr. (已經改好了，請搭 15 點那班車。) | Danke. Ich nehme den Zug um fünfzehn Uhr. (禮貌收尾) | 1. Morgen trinke ich Kaffee. (我明天要喝咖啡。) - feedback: Das schließt den Ticketwechsel nicht ab.<br>2. Wie lautet meine Passnummer? (我的護照號碼是什麼？) - feedback: Identitätsdaten sind hier nicht nötig. | 收尾 |  |

---

## a2:de:a2_compare_two_menu_options - Zwei Menüoptionen Vergleichen

- Level: A2
- Language: German (de)
- Scenario ID: a2_compare_two_menu_options
- Setting: Restauranttheke
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Vergleichen Sie zwei einfache Menüoptionen und wählen Sie die bevorzugte Option.
- Support text: Vergleichen Sie zwei einfache Menüoptionen und wählen Sie die bevorzugte Option.

### Clean Dialogue Path

- Mitarbeiter: Heute können Sie die Reisschale oder die Nudelsuppe wählen. (今天可以選飯碗或湯麵。)
- 你: Was ist der Unterschied zwischen den beiden Optionen? (兩個選項有什麼不同？)
- Mitarbeiter: Die Reisschale ist etwas scharf, und die Nudelsuppe ist leichter. (飯碗有點辣，湯麵比較清爽。)
- 你: Die Nudelsuppe ist leichter, richtig? (湯麵比較清爽，對嗎？)
- Mitarbeiter: Ja, die Nudelsuppe ist weniger scharf. (對，湯麵比較不辣。)
- 你: Dann nehme ich die Nudelsuppe. (那我要湯麵。)
- Mitarbeiter: Gut. Ich nehme eine Nudelsuppe für Sie auf. (好的，我幫您點一份湯麵。)
- 你: Danke. Eine Nudelsuppe, bitte. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Heute können Sie die Reisschale oder die Nudelsuppe wählen. (今天可以選飯碗或湯麵。) | Was ist der Unterschied zwischen den beiden Optionen? (兩個選項有什麼不同？) | 1. Wo ist mein Tisch? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: Das fragt nach dem Tisch, nicht nach dem Menüvergleich.<br>2. Ich möchte eine Erstattung. (我想退款。) [forbidden_or_wrong_domain] - feedback: Eine Erstattung liegt außerhalb dieser A2-Aufgabe. | Fragen Sie nach dem Unterschied zwischen den Optionen. |  |
| t2 | Die Reisschale ist etwas scharf, und die Nudelsuppe ist leichter. (飯碗有點辣，湯麵比較清爽。) | Die Nudelsuppe ist leichter, richtig? (湯麵比較清爽，對嗎？) | 1. Die Reisschale ist billiger, richtig? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: Der Preis wurde nicht erwähnt.<br>2. Der Zug ist schneller, richtig? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: Das wechselt zum Verkehr. | Bestätigen Sie den gehörten Vergleich. |  |
| t3 | Ja, die Nudelsuppe ist weniger scharf. (對，湯麵比較不辣。) | Dann nehme ich die Nudelsuppe. (那我要湯麵。) | 1. Dann wechsle ich das Zimmer. (那我要換房間。) [wrong_detail_or_domain] - feedback: Das wechselt in eine Hotelsituation.<br>2. Dann zeige ich meinen Pass. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: Ein Pass ist hier nicht nötig. | Wählen Sie die Option nach Ihrer Vorliebe. |  |
| t4 | Gut. Ich nehme eine Nudelsuppe für Sie auf. (好的，我幫您點一份湯麵。) | Danke. Eine Nudelsuppe, bitte. (謝謝，請給我一份湯麵。) | 1. Ich rufe die Polizei. (我要報警。) [wrong_detail_or_domain] - feedback: Das ist für diese Situation zu schwer.<br>2. Ich muss morgen ins Krankenhaus. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: Das ist keine medizinische Situation. | Bestätigen Sie das gewählte Gericht höflich. |  |

---

## a2:de:a2_confirm_date_time_place - Datum, Uhrzeit und Ort bestätigen

- Level: A2
- Language: German (de)
- Scenario ID: a2_confirm_date_time_place
- Setting: Eine kurze Nachricht prüfen
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Du bestätigst Datum, Uhrzeit und Ort aus einer kurzen Nachricht.
- Learner goal: Verstehe eine kurze Nachricht und bestätige die wichtigen Details.
- Support text: Lies die kurze Nachricht deines Freundes. Bestätige Datum, Uhrzeit und Ort.

### Clean Dialogue Path

- Freund: Hast du meine Nachricht gelesen? (你看過我的訊息了嗎？)
- Du: Ja, morgen um 10 Uhr, richtig? (有，明天十點，對吧？)
- Freund: Genau. Wo treffen wir uns? (對。我們在哪裡見？)
- Du: Vor dem Rathaus. (在市政廳前面。)
- Freund: Falls ich später komme, schreibe ich dir. (如果我晚到，我會傳訊息給你。)
- Du: Okay, ich verstehe. (好，我知道了。)
- Freund: Super. Bis morgen. (太好了。明天見。)
- Du: Ja, bis morgen. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hast du meine Nachricht gelesen? (你看過我的訊息了嗎？) | Ja, morgen um 10 Uhr, richtig? (有，明天十點，對吧？) | 1. Ja, heute Abend um 10 Uhr, richtig? (有，今晚十點，對吧？) [wrong_date_time] - feedback: In der Nachricht steht morgen um 10 Uhr, nicht heute Abend um 10 Uhr.<br>2. Ja, ich habe die Speisekarte gelesen. (有，我看過菜單了。) [wrong_scenario_menu] - feedback: Diese Nachricht ist über Zeit und Ort eines Treffens, nicht über eine Speisekarte. | Die Nachricht sagt: Morgen um 10 Uhr treffen wir uns vor dem Rathaus. Bestätige zuerst Tag und Uhrzeit. |  |
| t2 | Genau. Wo treffen wir uns? (對。我們在哪裡見？) | Vor dem Rathaus. (在市政廳前面。) | 1. Im Rathaus. (在市政廳裡面。) [wrong_place_relation] - feedback: In der Nachricht steht vor dem Rathaus, nicht im Rathaus.<br>2. Ich ruhe mich zu Hause aus. (我在家休息。) [wrong_function_plan] - feedback: Das sagt deinen eigenen Plan. Es bestätigt nicht den Treffpunkt. | Der Ort in der Nachricht ist vor dem Rathaus. | vor dem + Ort<br>Mit vor dem sagst du, dass der Treffpunkt draußen vor einem Ort ist.<br>vor dem Rathaus = 在市政廳前面<br>vor dem Café = 在咖啡店前面 |
| t3 | Falls ich später komme, schreibe ich dir. (如果我晚到，我會傳訊息給你。) | Okay, ich verstehe. (好，我知道了。) | 1. Okay, ich komme später. (好，我會晚到。) [wrong_subject_status] - feedback: Dein Freund spricht über sich selbst, nicht über dich.<br>2. Falls der Bus spät ist, rufe ich an. (如果公車晚了，我會打電話。) [wrong_focus_self_delay] - feedback: Das ändert den Fokus auf deine mögliche Verspätung. Bestätige einfach. | Dein Freund sagt nur, was er macht, falls er später kommt. Eine kurze Antwort reicht. |  |
| t4 | Super. Bis morgen. (太好了。明天見。) | Ja, bis morgen. (好，明天見。) | 1. Ja, bis gestern. (好，昨天見。) [wrong_time_expression] - feedback: Bis gestern ist hier nicht natürlich. Sag bis morgen.<br>2. Kann ich die Rechnung haben? (可以給我帳單嗎？) [wrong_scenario_payment] - feedback: Das ist ein Bezahlsatz. Hier schliesst du nur den Plan ab. | Die Details sind klar. Schließ natürlich ab. |  |

---

## a2:de:a2_decline_with_reason - Mit einem Einfachen Grund Absagen

- Level: A2
- Language: German (de)
- Scenario ID: a2_decline_with_reason
- Setting: Chat mit einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine einfache soziale Situation mit einem Freund in kurzen A2-Sätzen bewältigen.
- Support text: Benutze natürliche Sprache mit einem Freund. Aktivität und Grund bleiben einfach.

### Clean Dialogue Path

- Freund: Möchtest du heute Abend einen Film sehen? (今晚要看電影嗎？)
- 你: Tut mir leid, heute Abend kann ich nicht. (不好意思，我今晚不行。)
- Freund: Kein Problem. Bist du beschäftigt? (沒關係。你很忙嗎？)
- 你: Ich habe noch ein bisschen zu tun. (我還有一點事要做。)
- Freund: Vielleicht an einem anderen Tag? (也許改天？)
- 你: Ja, vielleicht am Wochenende. (好，也許這個週末。)
- Freund: Okay. Wir sprechen am Wochenende. (好，那週末再說。)
- 你: Danke. Wir sehen uns am Wochenende. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Möchtest du heute Abend einen Film sehen? (今晚要看電影嗎？) | Tut mir leid, heute Abend kann ich nicht. (不好意思，我今晚不行。) | 1. Nein, ich will nicht. (不要，我不想。) [too_blunt] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Ich brauche bitte noch einmal die Quittung. (請再給我收據。) [wrong_scenario_shop] - feedback: Das klingt für einen Freund zu hart. | Keep the refusal brief and warm. |  |
| t2 | Kein Problem. Bist du beschäftigt? (沒關係。你很忙嗎？) | Ich habe noch ein bisschen zu tun. (我還有一點事要做。) | 1. Nein, ich will nicht. (不要，我不想。) [too_blunt] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Ich brauche bitte noch einmal die Quittung. (請再給我收據。) [wrong_scenario_shop] - feedback: Das klingt für einen Freund zu hart. | Keep the refusal brief and warm. |  |
| t3 | Vielleicht an einem anderen Tag? (也許改天？) | Ja, vielleicht am Wochenende. (好，也許這個週末。) | 1. Nein, ich will nicht. (不要，我不想。) [too_blunt] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Ich brauche bitte noch einmal die Quittung. (請再給我收據。) [wrong_scenario_shop] - feedback: Das klingt für einen Freund zu hart. | Keep the refusal brief and warm. |  |
| t4 | Okay. Wir sprechen am Wochenende. (好，那週末再說。) | Danke. Wir sehen uns am Wochenende. (謝謝，週末見。) | 1. Nein, ich will nicht. (不要，我不想。) [too_blunt] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Ich brauche bitte noch einmal die Quittung. (請再給我收據。) [wrong_scenario_shop] - feedback: Das klingt für einen Freund zu hart. | Keep the refusal brief and warm. |  |

---

## a2:de:a2_describe_weekend_activity - Eine Wochenendaktivität Beschreiben

- Level: A2
- Language: German (de)
- Scenario ID: a2_describe_weekend_activity
- Setting: Chat mit einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine einfache soziale Situation mit einem Freund in kurzen A2-Sätzen bewältigen.
- Support text: Benutze natürliche Sprache mit einem Freund. Aktivität und Grund bleiben einfach.

### Clean Dialogue Path

- Freund: Was hast du am Wochenende gemacht? (你週末做了什麼？)
- 你: Ich habe einen Freund getroffen und zu Mittag gegessen. (我見了朋友，也吃了午餐。)
- Freund: Wo habt ihr euch getroffen? (你們在哪裡見面？)
- 你: Wir haben uns in einem Cafe in meiner Nähe getroffen. (我們在我家附近的咖啡店見。)
- Freund: War es schön? (還不錯嗎？)
- 你: Ja, es war ruhig und schön. (嗯，很安靜，也很好。)
- Freund: Klingt gut. Nächstes Mal komme ich mit. (聽起來不錯。下次我也一起去。)
- 你: Klar, gehen wir nächstes Mal zusammen. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Was hast du am Wochenende gemacht? (你週末做了什麼？) | Ich habe einen Freund getroffen und zu Mittag gegessen. (我見了朋友，也吃了午餐。) | 1. Morgen treffe ich einen Freund. (我明天會見朋友。) [wrong_time_future] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Zu welchem Gleis soll ich gehen? (要去哪個月台？) [wrong_scenario_transport] - feedback: Das klingt für einen Freund zu hart. | Use a short A2 past-time answer. |  |
| t2 | Wo habt ihr euch getroffen? (你們在哪裡見面？) | Wir haben uns in einem Cafe in meiner Nähe getroffen. (我們在我家附近的咖啡店見。) | 1. Morgen treffe ich einen Freund. (我明天會見朋友。) [wrong_time_future] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Zu welchem Gleis soll ich gehen? (要去哪個月台？) [wrong_scenario_transport] - feedback: Das klingt für einen Freund zu hart. | Use a short A2 past-time answer. |  |
| t3 | War es schön? (還不錯嗎？) | Ja, es war ruhig und schön. (嗯，很安靜，也很好。) | 1. Morgen treffe ich einen Freund. (我明天會見朋友。) [wrong_time_future] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Zu welchem Gleis soll ich gehen? (要去哪個月台？) [wrong_scenario_transport] - feedback: Das klingt für einen Freund zu hart. | Use a short A2 past-time answer. |  |
| t4 | Klingt gut. Nächstes Mal komme ich mit. (聽起來不錯。下次我也一起去。) | Klar, gehen wir nächstes Mal zusammen. (好，下次一起去。) | 1. Morgen treffe ich einen Freund. (我明天會見朋友。) [wrong_time_future] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Zu welchem Gleis soll ich gehen? (要去哪個月台？) [wrong_scenario_transport] - feedback: Das klingt für einen Freund zu hart. | Use a short A2 past-time answer. |  |

---

## a2:de:a2_exchange_wrong_item - Einen Falschen Artikel Umtauschen

- Level: A2
- Language: German (de)
- Scenario ID: a2_exchange_wrong_item
- Setting: Ladentheke
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Erklären Sie höflich, dass Sie den falschen Artikel erhalten haben, und bitten Sie um den richtigen.
- Support text: Erklären Sie höflich, dass Sie den falschen Artikel erhalten haben, und bitten Sie um den richtigen.

### Clean Dialogue Path

- Mitarbeiter: Kann ich Ihnen helfen? (需要幫忙嗎？)
- 你: Ich habe einen kleinen Becher bestellt, aber einen großen bekommen. (我訂的是小杯，但拿到大杯。)
- Mitarbeiter: Ich prüfe das. Kann ich den Beleg sehen? (我確認一下。可以看收據嗎？)
- 你: Ja, hier ist der Beleg. (可以，這是收據。)
- Mitarbeiter: Sie haben recht. Ich kann ihn jetzt gegen einen kleinen Becher umtauschen. (您說得對。我現在可以換成小杯。)
- 你: Sie tauschen ihn gegen einen kleinen Becher um, richtig? (您會幫我換成小杯，對嗎？)
- Mitarbeiter: Ja, bitte warten Sie einen Moment. (好的，請稍等。)
- 你: Danke. Ich warte hier. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Kann ich Ihnen helfen? (需要幫忙嗎？) | Ich habe einen kleinen Becher bestellt, aber einen großen bekommen. (我訂的是小杯，但拿到大杯。) | 1. Wo wird der kleine Becher hergestellt? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: Der Herstellungsort ist nicht das Problem.<br>2. Bitte senken Sie den Preis. (請降價。) [forbidden_or_wrong_domain] - feedback: Preisverhandlung liegt außerhalb dieser Aufgabe. | Erklären Sie, dass der Artikel nicht der bestellte ist. |  |
| t2 | Ich prüfe das. Kann ich den Beleg sehen? (我確認一下。可以看收據嗎？) | Ja, hier ist der Beleg. (可以，這是收據。) | 1. Ja, hier ist mein Pass. (可以，這是護照。) [wrong_detail_or_domain] - feedback: Ein Pass ist nicht nötig.<br>2. Ja, ich nehme morgen den Zug. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: Das wechselt zum Verkehr. | Antworten Sie auf die einfache Belegprüfung. |  |
| t3 | Sie haben recht. Ich kann ihn jetzt gegen einen kleinen Becher umtauschen. (您說得對。我現在可以換成小杯。) | Sie tauschen ihn gegen einen kleinen Becher um, richtig? (您會幫我換成小杯，對嗎？) | 1. Erklären Sie mir bitte die Erstattungsregeln. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Erstattungsregeln sind hier zu breit.<br>2. Ich melde das der Polizei. (我要報警。) [forbidden_or_wrong_domain] - feedback: Das ist zu schwer für diese Aufgabe. | Bestätigen Sie den Umtausch. |  |
| t4 | Ja, bitte warten Sie einen Moment. (好的，請稍等。) | Danke. Ich warte hier. (謝謝，我在這裡等。) | 1. Ich muss ins Krankenhaus. (我需要去醫院。) [wrong_detail_or_domain] - feedback: Das ist keine medizinische Situation.<br>2. Ich möchte das Zimmer wechseln. (我想換房。) [forbidden_or_wrong_domain] - feedback: Das wechselt in eine Hotelsituation. | Schließen Sie, indem Sie das Warten bestätigen. |  |

---

## a2:de:a2_explain_simple_delay_reason - Eine kleine Verspätung erklären

- Level: A2
- Language: German (de)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: Auf dem Weg zu einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Du kommst ein bisschen später und musst den Grund erklären.
- Learner goal: Entschuldige dich, nenne einen einfachen Grund und schaetze die Verspätung.
- Support text: Dein Freund fragt, wo du bist. Entschuldige dich, erkläre den einfachen Grund und gib eine kurze Schaetzung.

### Clean Dialogue Path

- Freund: Wo bist du? Bist du gleich da? (你在哪裡？快到了嗎？)
- Du: Entschuldige, ich komme etwas später. (不好意思，我會晚一點到。)
- Freund: Warum? Was ist los? (為什麼？怎麼了？)
- Du: Der Bus ist spät. (公車晚了。)
- Freund: Wie viel später kommst du? (你會晚多久？)
- Du: Ich komme ungefähr zehn Minuten später. (我會晚大約十分鐘。)
- Freund: Okay, kein Stress. (好，不用急。)
- Du: Danke, ich bin gleich da. (謝謝。我很快就到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wo bist du? Bist du gleich da? (你在哪裡？快到了嗎？) | Entschuldige, ich komme etwas später. (不好意思，我會晚一點到。) | 1. Ja, ich bin gestern angekommen. (對，我昨天到了。) [wrong_time_past] - feedback: Dein Freund fragt nach jetzt, nicht nach gestern.<br>2. Kannst du mir ein Gericht empfehlen? (你可以推薦一道菜嗎？) [wrong_scenario_restaurant] - feedback: Das ist Restaurant-Sprache. Hier musst du sagen, dass du später kommst. | Dein Freund fragt, wo du bist. Beginne mit Entschuldigung und sag, dass du etwas später kommst. |  |
| t2 | Warum? Was ist los? (為什麼？怎麼了？) | Der Bus ist spät. (公車晚了。) | 1. Ich mag den Bus. (我喜歡公車。) [wrong_reason_semantics] - feedback: Das erklärt nicht, warum du später kommst.<br>2. Wo ist die Bushaltestelle? (公車站在哪裡？) [wrong_function_location_question] - feedback: Dein Freund fragt nach dem Grund, nicht nach einem Ort. | Gib einen einfachen Grund aus dem Alltag. Halte es kurz. | weil + Grund<br>Mit weil gibst du einen einfachen Grund.<br>weil der Bus spät ist = 因為公車晚了<br>weil viel Verkehr ist = 因為車很多 |
| t3 | Wie viel später kommst du? (你會晚多久？) | Ich komme ungefähr zehn Minuten später. (我會晚大約十分鐘。) | 1. Bus Nummer zehn ist gut. (十號公車很好。) [wrong_entity_bus_number] - feedback: Zehn soll hier Minuten bedeuten, nicht eine Busnummer.<br>2. Ich komme nicht später. (我不會晚到。) [contradicts_context] - feedback: Du hast schon gesagt, dass du später kommst. Jetzt schaetzt du die Zeit. | Benutze ungefähr plus Minuten für eine einfache Schaetzung. |  |
| t4 | Okay, kein Stress. (好，不用急。) | Danke, ich bin gleich da. (謝謝。我很快就到。) | 1. Ich habe reserviert. (我有預約。) [wrong_scenario_reservation] - feedback: Das klingt nach Hotel oder Restaurant, nicht nach einer kurzen Verspätung.<br>2. Kann ich jetzt bezahlen? (我現在可以付款嗎？) [wrong_scenario_payment] - feedback: Das ist ein Bezahlsatz. Hier passt ein einfaches Danke besser. | Dein Freund akzeptiert die Verspätung. Danke kurz und schließe natürlich. |  |

---

## a2:de:a2_fill_simple_form_help - Hilfe bei Einem Einfachen Formular Bekommen

- Level: A2
- Language: German (de)
- Scenario ID: a2_fill_simple_form_help
- Setting: Hilfenachricht
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine digitale oder einfache Formular-Aufgabe mit geringem Risiko in kurzen A2-Sätzen bewältigen.
- Support text: Halte die Aufgabe risikoarm. Keine Passwörter, Zahlungsdaten, sensiblen IDs oder rechtlichen/medizinischen Informationen.

### Clean Dialogue Path

- Mitarbeiter: Füllen Sie bitte zuerst dieses Formular aus. (請先填這張表。)
- 你: Was soll ich in dieses Feld schreiben? (這一欄要填什麼？)
- Mitarbeiter: Hier schreiben Sie Ihren Namen. (這裡請填姓名。)
- 你: Nur meinen Namen? (只填姓名就可以嗎？)
- Mitarbeiter: Ja, die Telefonnummer kommt darunter. (對，電話在下面那一欄。)
- 你: Verstanden. Ich schreibe sie darunter. (知道了，我會寫在下面。)
- Mitarbeiter: Ja, das reicht. (對，這樣就夠了。)
- 你: Danke. Ich bin fertig. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Füllen Sie bitte zuerst dieses Formular aus. (請先填這張表。) | Was soll ich in dieses Feld schreiben? (這一欄要填什麼？) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t2 | Hier schreiben Sie Ihren Namen. (這裡請填姓名。) | Nur meinen Namen? (只填姓名就可以嗎？) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t3 | Ja, die Telefonnummer kommt darunter. (對，電話在下面那一欄。) | Verstanden. Ich schreibe sie darunter. (知道了，我會寫在下面。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t4 | Ja, das reicht. (對，這樣就夠了。) | Danke. Ich bin fertig. (謝謝，我填好了。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |

---

## a2:de:a2_invite_friend_activity - Einen Freund zu einer Aktivität Einladen

- Level: A2
- Language: German (de)
- Scenario ID: a2_invite_friend_activity
- Setting: Chat mit einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine einfache soziale Situation mit einem Freund in kurzen A2-Sätzen bewältigen.
- Support text: Benutze natürliche Sprache mit einem Freund. Aktivität und Grund bleiben einfach.

### Clean Dialogue Path

- Freund: Möchtest du später einen Kaffee trinken? (等一下要一起喝咖啡嗎？)
- 你: Ja, gern. Kaffee klingt gut. (Ja, gern. Kaffee klingt gut.)
- Freund: Klar. Um wie viel Uhr? (好啊。幾點？)
- 你: Wie wäre es um drei? (三點怎麼樣？)
- Freund: Treffen wir uns vor dem Bahnhof? (要在車站前面見嗎？)
- 你: Ja, treffen wir uns vor dem Bahnhof. (好，我們在車站前面見。)
- Freund: Super. Bis später. (好，等一下見。)
- 你: Bis später, ich freue mich. (Bis später, ich freue mich.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Möchtest du später einen Kaffee trinken? (等一下要一起喝咖啡嗎？) | Ja, gern. Kaffee klingt gut. (Ja, gern. Kaffee klingt gut.) | 1. Ich möchte später mein Zimmer wechseln. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Du musst heute mitkommen. (你今天一定要跟我來。) [too_pressuring] - feedback: Das klingt für einen Freund zu hart. | Antworte locker auf die Einladung. |  |
| t2 | Klar. Um wie viel Uhr? (好啊。幾點？) | Wie wäre es um drei? (三點怎麼樣？) | 1. Ich möchte später mein Zimmer wechseln. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Du musst heute mitkommen. (你今天一定要跟我來。) [too_pressuring] - feedback: Das klingt für einen Freund zu hart. | Schlag eine einfache Uhrzeit vor. |  |
| t3 | Treffen wir uns vor dem Bahnhof? (要在車站前面見嗎？) | Ja, treffen wir uns vor dem Bahnhof. (好，我們在車站前面見。) | 1. Ich möchte später mein Zimmer wechseln. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Du musst heute mitkommen. (你今天一定要跟我來。) [too_pressuring] - feedback: Das klingt für einen Freund zu hart. | Bestätige den Treffpunkt. |  |
| t4 | Super. Bis später. (好，等一下見。) | Bis später, ich freue mich. (Bis später, ich freue mich.) | 1. Ich möchte später mein Zimmer wechseln. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Du musst heute mitkommen. (你今天一定要跟我來。) [too_pressuring] - feedback: Das klingt für einen Freund zu hart. | Schließ den Plan freundlich ab. |  |

---

## a2:de:a2_lost_item_followup_message - Nach Einem Verlorenen Gegenstand Fragen

- Level: A2
- Language: German (de)
- Scenario ID: a2_lost_item_followup_message
- Setting: Hilfenachricht
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine digitale oder einfache Formular-Aufgabe mit geringem Risiko in kurzen A2-Sätzen bewältigen.
- Support text: Halte die Aufgabe risikoarm. Keine Passwörter, Zahlungsdaten, sensiblen IDs oder rechtlichen/medizinischen Informationen.

### Clean Dialogue Path

- Mitarbeiter: Welchen Gegenstand suchen Sie? (您在找什麼？)
- 你: Ich glaube, ich habe einen schwarzen Regenschirm vergessen. (我好像把黑色雨傘忘在那裡。)
- Mitarbeiter: Wo haben Sie ihn gelassen? (放在哪裡？)
- 你: Ich glaube, neben einem Stuhl im Cafe. (好像放在咖啡店椅子旁邊。)
- Mitarbeiter: Bitte hinterlassen Sie Ihren Namen und Kontakt. (請留下姓名和聯絡方式。)
- 你: Ja, ich lasse Name und Telefonnummer da. (好，我會留下姓名和電話。)
- Mitarbeiter: Wir prüfen es und kontaktieren Sie. (我確認後會聯絡您。)
- 你: Danke. Ich warte auf Ihre Nachricht. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Welchen Gegenstand suchen Sie? (您在找什麼？) | Ich glaube, ich habe einen schwarzen Regenschirm vergessen. (我好像把黑色雨傘忘在那裡。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t2 | Wo haben Sie ihn gelassen? (放在哪裡？) | Ich glaube, neben einem Stuhl im Cafe. (好像放在咖啡店椅子旁邊。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t3 | Bitte hinterlassen Sie Ihren Namen und Kontakt. (請留下姓名和聯絡方式。) | Ja, ich lasse Name und Telefonnummer da. (好，我會留下姓名和電話。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |
| t4 | Wir prüfen es und kontaktieren Sie. (我確認後會聯絡您。) | Danke. Ich warte auf Ihre Nachricht. (謝謝，我等您聯絡。) | 1. Ich nenne mein Passwort. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Passwörter gehören nicht zu dieser A2-Aufgabe.<br>2. Ich möchte eine Erstattung. (請退款。) [wrong_dispute_domain] - feedback: Erstattungen oder Streitfälle gehören nicht zu dieser Aufgabe. | Prüfe nur das nötige risikoarme Detail. |  |

---

## a2:de:a2_luggage_storage_pickup - Gepäck Abgeben und Abholen

- Level: A2
- Language: German (de)
- Scenario ID: a2_luggage_storage_pickup
- Setting: An der Gepäckaufbewahrung
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: Geben Sie Gepäck ab, hören Sie die Abholfrist und bestätigen Sie, welchen Beleg Sie brauchen.

### Clean Dialogue Path

- Mitarbeiter: Möchten Sie Gepäck aufbewahren? (您要寄放行李嗎？)
- Sie: Ich möchte diesen Koffer abgeben. (寄放行李)
- Mitarbeiter: Sie können ihn heute vor neunzehn Uhr abholen. (今天晚上領取期限前可以來領。)
- Sie: Ich hole ihn vor neunzehn Uhr ab, richtig? (確認取件時間)
- Mitarbeiter: Zeigen Sie bei der Abholung bitte diesen Beleg. (領取時請出示這張收據。)
- Sie: Ja, ich zeige bei der Abholung den Beleg. (確認文件)
- Mitarbeiter: Gut. Bitte kommen Sie vor neunzehn Uhr zurück. (好的，請 19 點前回來。)
- Sie: Danke. Ich komme vor neunzehn Uhr. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Möchten Sie Gepäck aufbewahren? (您要寄放行李嗎？) | Ich möchte diesen Koffer abgeben. (寄放行李) | 1. Gestern habe ich diesen Koffer abgeholt. (我昨天領了這個行李箱。) - feedback: Sie geben ihn jetzt ab, Sie holen ihn nicht ab.<br>2. Wo ist der Bahnsteig? (月台在哪裡？) - feedback: Diese Situation betrifft die Gepäckaufbewahrung. | 寄放行李 |  |
| t2 | Sie können ihn heute vor neunzehn Uhr abholen. (今天晚上領取期限前可以來領。) | Ich hole ihn vor neunzehn Uhr ab, richtig? (確認取件時間) | 1. Ich kann ihn um sieben Uhr morgens abgeben, richtig? (我早上 7 點寄放，對嗎？) - feedback: Die Abholfrist ist vor neunzehn Uhr.<br>2. Wo bekomme ich eine Erstattung? (退款在哪裡拿？) - feedback: Erstattungen liegen außerhalb dieser Aufgabe. | 確認取件時間 |  |
| t3 | Zeigen Sie bei der Abholung bitte diesen Beleg. (領取時請出示這張收據。) | Ja, ich zeige bei der Abholung den Beleg. (確認文件) | 1. Kann ich den Beleg wegwerfen? (我可以把收據丟掉嗎？) - feedback: Sie brauchen den Beleg zum Abholen.<br>2. Ich zeige meinen Pass. (我出示護照。) - feedback: Ein Pass ist hier nicht nötig. | 確認寄物單 |  |
| t4 | Gut. Bitte kommen Sie vor neunzehn Uhr zurück. (好的，請 19 點前回來。) | Danke. Ich komme vor neunzehn Uhr. (禮貌收尾) | 1. Der Zug hat fünfzehn Minuten Verspätung. (火車晚 15 分鐘。) - feedback: Das ist keine Verspätungsansage.<br>2. Ich möchte verlorenes Gepäck melden. (我想申報行李遺失。) - feedback: Fundsachenmeldungen liegen außerhalb dieser Aufgabe. | 收尾 |  |

---

## a2:de:a2_make_simple_plan_sequence - Einen Einfachen Zwei-Schritt-Plan Machen

- Level: A2
- Language: German (de)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: Chat mit einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Eine einfache soziale Situation mit einem Freund in kurzen A2-Sätzen bewältigen.
- Support text: Benutze natürliche Sprache mit einem Freund. Aktivität und Grund bleiben einfach.

### Clean Dialogue Path

- Freund: Treffen wir uns zuerst am Bahnhof? (我們先在車站見，好嗎？)
- 你: Ja, zuerst treffen wir uns am Bahnhof. (好，我們先在車站見。)
- Freund: Dann gehen wir zum Park? (接著去公園嗎？)
- 你: Gut. Dann gehen wir zum Park. (好，接著去公園。)
- Freund: Also zuerst der Bahnhof, dann der Park? (所以先車站，接著公園，對嗎？)
- 你: Ja, zuerst der Bahnhof, dann der Park. (對，先車站，接著公園。)
- Freund: Super. Bis Samstag um zwei. (好，星期六兩點見。)
- 你: Okay, bis Samstag um zwei. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Treffen wir uns zuerst am Bahnhof? (我們先在車站見，好嗎？) | Ja, zuerst treffen wir uns am Bahnhof. (好，我們先在車站見。) | 1. Ja, erstatte mir zuerst das Geld. (好，先退款給我。) [wrong_scenario_refund] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Nein, auf keinen Fall. (不，絕對不要。) [too_blunt] - feedback: Das klingt für einen Freund zu hart. | Halte den Plan bei zwei einfachen Schritten. |  |
| t2 | Dann gehen wir zum Park? (接著去公園嗎？) | Gut. Dann gehen wir zum Park. (好，接著去公園。) | 1. Ja, erstatte mir zuerst das Geld. (好，先退款給我。) [wrong_scenario_refund] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Nein, auf keinen Fall. (不，絕對不要。) [too_blunt] - feedback: Das klingt für einen Freund zu hart. | Halte den Plan bei zwei einfachen Schritten. |  |
| t3 | Also zuerst der Bahnhof, dann der Park? (所以先車站，接著公園，對嗎？) | Ja, zuerst der Bahnhof, dann der Park. (對，先車站，接著公園。) | 1. Ja, erstatte mir zuerst das Geld. (好，先退款給我。) [wrong_scenario_refund] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Nein, auf keinen Fall. (不，絕對不要。) [too_blunt] - feedback: Das klingt für einen Freund zu hart. | Halte den Plan bei zwei einfachen Schritten. |  |
| t4 | Super. Bis Samstag um zwei. (好，星期六兩點見。) | Okay, bis Samstag um zwei. (好，星期六兩點見。) | 1. Ja, erstatte mir zuerst das Geld. (好，先退款給我。) [wrong_scenario_refund] - feedback: Das passt nicht zu dieser Situation mit einem Freund.<br>2. Nein, auf keinen Fall. (不，絕對不要。) [too_blunt] - feedback: Das klingt für einen Freund zu hart. | Halte den Plan bei zwei einfachen Schritten. |  |

---

## a2:de:a2_plan_tomorrow_morning - Morgen früh etwas planen

- Level: A2
- Language: German (de)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Chat mit einem Freund
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Ein Freund fragt, was du morgen früh vorhast.
- Learner goal: Sage einen Plan für morgen früh und nenne einen einfachen nächsten Schritt.
- Support text: Dein Freund fragt nach morgen früh. Sag zuerst, was du vorhast, und füge dann einen nächsten Schritt hinzu.

### Clean Dialogue Path

- Freund: Was machst du morgen früh? (你明天早上要做什麼？)
- Du: Ich gehe morgen früh zum Bäcker. (我明天早上要去麵包店。)
- Freund: Und was machst du danach? (那之後你要做什麼？)
- Du: Danach lerne ich kurz im Café. (接著我在咖啡店學習一下。)
- Freund: Bist du vor dem Mittag frei? (你午餐前有空嗎？)
- Du: Ja, ich bin gegen elf frei. (可以，我十一點左右有空。)
- Freund: Super. Ich schreibe dir um elf. (太好了。我十一點傳訊息給你。)
- Du: Okay, bis morgen. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Was machst du morgen früh? (你明天早上要做什麼？) | Ich gehe morgen früh zum Bäcker. (我明天早上要去麵包店。) | 1. Ich war gestern beim Bäcker. (我昨天去了麵包店。) [wrong_time_past] - feedback: Dein Freund fragt nach morgen früh, nicht nach gestern.<br>2. Wo ist der Bäcker? (麵包店在哪裡？) [wrong_function_location_question] - feedback: Das fragt nach einem Ort. Es sagt nicht, was du vorhast. | Die Frage ist über morgen früh. Antworte mit einem einfachen Plan. |  |
| t2 | Und was machst du danach? (那之後你要做什麼？) | Danach lerne ich kurz im Café. (接著我在咖啡店學習一下。) | 1. Treffen wir uns im Café? (我們在咖啡店見面嗎？) [wrong_function_meeting_place] - feedback: Das schlägt ein Treffen vor. Dein Freund fragt nach deiner nächsten Aktivität.<br>2. Ich lerne gerade zu Hause. (我現在正在家裡學習。) [wrong_time_aspect] - feedback: Das ist jetzt. Die Frage ist nach dem nächsten Schritt morgen. | Danach fragt nach dem nächsten Schritt. Antworte kurz. | danach + Verb<br>Mit danach verbindest du zwei kurze Schritte in einer Reihenfolge.<br>Danach trinke ich Kaffee. = 接著我喝咖啡。<br>Dann lerne ich. = 然後我學習。 |
| t3 | Bist du vor dem Mittag frei? (你午餐前有空嗎？) | Ja, ich bin gegen elf frei. (可以，我十一點左右有空。) | 1. Nein, ich war gestern frei. (不，我昨天有空。) [wrong_time_past] - feedback: Die Frage ist nach morgen vor dem Mittag, nicht nach gestern.<br>2. Hat der Bäcker um elf zu? (麵包店十一點關門嗎？) [wrong_focus_store_hours] - feedback: Dein Freund fragt, wann du frei bist. | Vor dem Mittag meint späten Vormittag. Du kannst gegen plus Uhrzeit verwenden. |  |
| t4 | Super. Ich schreibe dir um elf. (太好了。我十一點傳訊息給你。) | Okay, bis morgen. (好，明天見。) | 1. Ich bestelle es noch einmal. (我會再點一次。) [wrong_scenario_ordering] - feedback: Das klingt nach einer Bestellung. Hier bestätigst du den Plan für morgen.<br>2. Ich möchte das Zimmer wechseln. (我想換房間。) [wrong_scenario_hotel] - feedback: Das ist eine Hotelsituation. Hier reicht ein kurzer Abschied. | Der Plan ist klar. Schließ freundlich und kurz ab. |  |

---

## a2:de:a2_report_room_problem - Ein Zimmerproblem Melden

- Level: A2
- Language: German (de)
- Scenario ID: a2_report_room_problem
- Setting: An der Hotelrezeption
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Melden Sie ein kleines Zimmerproblem und bestätigen Sie, was das Hotelpersonal macht.

### Clean Dialogue Path

- Hotelmitarbeiter: Guten Tag. Wie kann ich Ihnen helfen? (您好，我可以怎麼幫您？)
- Sie: In meinem Zimmer gibt es keine Handtücher. Können Sie helfen? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Hotelmitarbeiter: Ja, ich bringe Ihnen sofort Handtücher. (好的，我馬上拿毛巾過去。)
- Sie: Sie bringen mir Handtücher, richtig? (您會拿毛巾過來，對嗎？)
- Hotelmitarbeiter: Das dauert ungefähr zehn Minuten. (大約需要十分鐘。)
- Sie: Ungefähr zehn Minuten, in Ordnung. (大約十分鐘，好的。)
- Hotelmitarbeiter: Wir schicken sie auf Ihr Zimmer. (我們會送到房間。)
- Sie: Danke. Ich warte im Zimmer. (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wie kann ich Ihnen helfen? (您好，我可以怎麼幫您？) | In meinem Zimmer gibt es keine Handtücher. Können Sie helfen? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. Ich möchte ein Zimmer buchen. (我想訂房。) [wrong_detail_or_domain] - feedback: Jetzt geht es nicht um eine Buchung, sondern um ein Zimmerproblem.<br>2. Ich möchte eine Entschädigung. (我想要賠償。) [forbidden_or_wrong_domain] - feedback: Entschädigung liegt außerhalb dieser A2-Aufgabe. | Diga el problema de la habitación en una frase corta. |  |
| t2 | Ja, ich bringe Ihnen sofort Handtücher. (好的，我馬上拿毛巾過去。) | Sie bringen mir Handtücher, richtig? (您會拿毛巾過來，對嗎？) | 1. Sie wechseln mein Zimmer, richtig? (您會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: Es ging um Handtücher, nicht um einen Zimmerwechsel.<br>2. Der Zug hat Verspätung, richtig? (火車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: Das ist Hotelservice, kein Verkehr. | Confirme lo que hará el personal. | A2-Muster<br>Kurzer Ausdruck für diese Hotelsituation.<br>llevar toallas = 拿毛巾 |
| t3 | Das dauert ungefähr zehn Minuten. (大約需要十分鐘。) | Ungefähr zehn Minuten, in Ordnung. (大約十分鐘，好的。) | 1. Ich checke in einer Stunde aus. (我一小時後退房。) [wrong_detail_or_domain] - feedback: Es geht um die Lieferzeit der Handtücher, nicht um Check-out.<br>2. Ich muss ins Krankenhaus. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: Medizinische Inhalte liegen außerhalb dieser Aufgabe. | Confirme el tiempo. |  |
| t4 | Wir schicken sie auf Ihr Zimmer. (我們會送到房間。) | Danke. Ich warte im Zimmer. (謝謝。我在房間等。) | 1. Bitte erklären Sie die Erstattungsregeln. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Erstattungsregeln liegen außerhalb dieses einfachen Problems.<br>2. Zwei Kaffee, bitte. (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: Das ist eine Restaurantbestellung, kein Zimmerservice. | Agradezca y cierre. |  |

---

## a2:de:a2_request_room_change - Um Zimmerwechsel Bitten

- Level: A2
- Language: German (de)
- Scenario ID: a2_request_room_change
- Setting: An der Hotelrezeption
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Nennen Sie einen einfachen Grund und fragen Sie, ob Sie das Zimmer wechseln können.

### Clean Dialogue Path

- Hotelmitarbeiter: Wie kann ich helfen? (我可以怎麼幫忙？)
- Sie: Mein Zimmer ist etwas laut. Kann ich das Zimmer wechseln? (我的房間有點吵。可以換房嗎？)
- Hotelmitarbeiter: Ich habe nachgesehen. Wir haben ein anderes Zimmer frei. (我確認了，有另一間房。)
- Sie: Es gibt ein anderes Zimmer, richtig? (有另一間房，對嗎？)
- Hotelmitarbeiter: Sie können in dreißig Minuten in das neue Zimmer umziehen. (三十分鐘後可以搬到新房間。)
- Sie: Ich kann in dreißig Minuten umziehen, richtig? (三十分鐘後可以搬，對嗎？)
- Hotelmitarbeiter: Wenn es fertig ist, gebe ich Ihnen die neue Schlüsselkarte. (準備好後，我會給您新房卡。)
- Sie: In Ordnung. Ich nehme die neue Karte, wenn sie fertig ist. (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wie kann ich helfen? (我可以怎麼幫忙？) | Mein Zimmer ist etwas laut. Kann ich das Zimmer wechseln? (我的房間有點吵。可以換房嗎？) | 1. Kann ich den Tisch im Restaurant wechseln? (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: Es geht um ein Hotelzimmer, nicht um einen Restauranttisch.<br>2. Ich werde eine offizielle Beschwerde einreichen. (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: Eine offizielle Beschwerde liegt außerhalb dieser A2-Aufgabe. | Pida cambiar de habitación con una razón. |  |
| t2 | Ich habe nachgesehen. Wir haben ein anderes Zimmer frei. (我確認了，有另一間房。) | Es gibt ein anderes Zimmer, richtig? (有另一間房，對嗎？) | 1. Es gibt ein anderes Ticket, richtig? (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: Es ist ein Zimmer, kein Ticket.<br>2. Kann ich auch eine Entschädigung bekommen? (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: Entschädigung liegt außerhalb dieser einfachen Aufgabe. | Escuche la alternativa. | A2-Muster<br>Kurzer Ausdruck für diese Hotelsituation.<br>otra habitación = 另一間房 |
| t3 | Sie können in dreißig Minuten in das neue Zimmer umziehen. (三十分鐘後可以搬到新房間。) | Ich kann in dreißig Minuten umziehen, richtig? (三十分鐘後可以搬，對嗎？) | 1. Ich checke in drei Stunden aus, richtig? (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: Das Personal sagte, Sie können in dreißig Minuten umziehen.<br>2. Ich ziehe um, weil ich ins Krankenhaus muss. (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: Medizinische Gründe liegen außerhalb dieser Aufgabe. | Confirme cuándo puede cambiarse. |  |
| t4 | Wenn es fertig ist, gebe ich Ihnen die neue Schlüsselkarte. (準備好後，我會給您新房卡。) | In Ordnung. Ich nehme die neue Karte, wenn sie fertig ist. (好，準備好後我拿新房卡。) | 1. Nein, ich ändere meine Zugzeit. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: Das ist Zimmerwechsel, nicht Verkehr.<br>2. Ich spreche jetzt mit der Polizei. (我現在會告訴警察。) [forbidden_or_wrong_domain] - feedback: Polizeiliche Vorgänge liegen außerhalb dieser Aufgabe. | Acepte y cierre. |  |

---

## a2:de:a2_reschedule_meeting_time - Eine Uhrzeit ändern

- Level: A2
- Language: German (de)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Plaene mit einem Freund ändern
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Du musst einen Freund bitten, die Uhrzeit für ein Treffen zu ändern.
- Learner goal: Bitte um eine andere Uhrzeit und bestätige die neue Uhrzeit.
- Support text: Die alte Uhrzeit passt dir nicht gut. Bitte um eine Änderung, nenne eine neue Uhrzeit und bestätige sie.

### Clean Dialogue Path

- Freund: Wir treffen uns heute um drei, oder? (我們今天三點見，對吧？)
- Du: Entschuldige, können wir die Zeit ändern? (不好意思，我們可以改時間嗎？)
- Freund: Klar. Wann passt es dir? (可以。你幾點方便？)
- Du: Können wir uns um vier treffen? (我們可以四點見面嗎？)
- Freund: Ja, vier passt. (可以，四點沒問題。)
- Du: Super, dann bis vier. (太好了，那四點見。)
- Freund: Okay, bis später. (好，晚點見。)
- Du: Alles klar, bis später. (Alles klar, bis später.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wir treffen uns heute um drei, oder? (我們今天三點見，對吧？) | Entschuldige, können wir die Zeit ändern? (不好意思，我們可以改時間嗎？) | 1. Ja, wir haben uns gestern getroffen. (對，我們昨天見過了。) [wrong_time_past] - feedback: Dein Freund bestätigt den Plan für heute, nicht für gestern.<br>2. Ich bezahle mit Karte. (我會用卡付款。) [wrong_scenario_payment] - feedback: Das ist Bezahlsprache. Hier geht es um die Uhrzeit des Treffens. | Dein Freund bestätigt die alte Uhrzeit. Bitte darum, die Zeit zu ändern. |  |
| t2 | Klar. Wann passt es dir? (可以。你幾點方便？) | Können wir uns um vier treffen? (我們可以四點見面嗎？) | 1. Nehmen wir Ausgang vier? (我們要走四號出口嗎？) [wrong_entity_exit_number] - feedback: Ausgang vier ist ein Ort. Dein Freund fragt nach einer neuen Uhrzeit.<br>2. Ich war um vier dort. (我四點在那裡了。) [wrong_time_past] - feedback: Das spricht über die Vergangenheit. Bitte um die neue Uhrzeit vier. | Nenne eine neue Uhrzeit. Bleib einfach. | Können wir ... um + Uhrzeit?<br>Mit können wir und um plus Uhrzeit fragst du hoeflich nach einer neuen Zeit.<br>Können wir uns um vier treffen? = 我們可以四點見面嗎？<br>Passt dir vier Uhr? = 四點你方便嗎？ |
| t3 | Ja, vier passt. (可以，四點沒問題。) | Super, dann bis vier. (太好了，那四點見。) | 1. Super, dann bis drei. (太好了，那三點見。) [repeats_old_time] - feedback: Drei war die alte Uhrzeit. Ihr habt auf vier geändert.<br>2. Gib mir bitte die Zimmerkarte. (請給我房卡。) [wrong_scenario_hotel] - feedback: Das ist Hotelsprache. Hier bestätigst du die neue Uhrzeit. | Die neue Uhrzeit ist akzeptiert. Bestätige sie einmal. |  |
| t4 | Okay, bis später. (好，晚點見。) | Alles klar, bis später. (Alles klar, bis später.) | 1. Weil ich spät bin. (因為我遲到了。) [fragment_without_need] - feedback: Die Zeit ist schon geändert. Ein Grundfragment ist jetzt nicht nötig.<br>2. Ich habe es noch einmal gebucht. (我重新預約了。) [wrong_scenario_reservation] - feedback: Das klingt nach einer Buchung, nicht nach einem einfachen Treffen mit einem Freund. | Der Plan ist fertig. Schließ natürlich ab. |  |

---

## a2:de:a2_transport_delay_announcement - Eine Verspätungsansage Verstehen

- Level: A2
- Language: German (de)
- Scenario ID: a2_transport_delay_announcement
- Setting: Am Bahnsteig
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: Hören Sie die Ansage am Bahnhof, bestätigen Sie die Verspätung und wählen Sie eine einfache Reaktion.

### Clean Dialogue Path

- Mitarbeiter: Achtung bitte. Der Zug nach Central hat fünfzehn Minuten Verspätung. (請注意，開往 Central 的列車晚 15 分鐘。)
- Sie: Der Zug hat fünfzehn Minuten Verspätung, richtig? (確認延誤時間)
- Mitarbeiter: Wenn es fünfzehn Minuten sind, möchten Sie warten oder den Bus nehmen? (如果是 15 分鐘，您要等，還是搭公車？)
- Sie: Wenn es fünfzehn Minuten sind, warte ich. (選擇等待)
- Mitarbeiter: Der nächste Zug kommt gegen zehn Uhr zwanzig. (下一班車大約 10 點 20 分到。)
- Sie: Dann nehme ich den Zug um zehn Uhr zwanzig. (確認搭下一班)
- Mitarbeiter: Gut. Bitte warten Sie auf diesem Bahnsteig. (好的，請在這個月台等。)
- Sie: Alles klar, ich warte hier. (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Achtung bitte. Der Zug nach Central hat fünfzehn Minuten Verspätung. (請注意，開往 Central 的列車晚 15 分鐘。) | Der Zug hat fünfzehn Minuten Verspätung, richtig? (確認延誤時間) | 1. Der Zug fährt in fünf Minuten ab, richtig? (錯誤時間) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2.<br>2. Kann ich meinen Sitzplatz wechseln? (我可以換座位嗎？) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2. | 聽懂延誤時間 |  |
| t2 | Wenn es fünfzehn Minuten sind, möchten Sie warten oder den Bus nehmen? (如果是 15 分鐘，您要等，還是搭公車？) | Wenn es fünfzehn Minuten sind, warte ich. (選擇等待) | 1. Gestern habe ich gewartet. (我昨天等了。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2.<br>2. Eine Quittung, bitte. (請給我收據。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2. | 做出簡單選擇 |  |
| t3 | Der nächste Zug kommt gegen zehn Uhr zwanzig. (下一班車大約 10 點 20 分到。) | Dann nehme ich den Zug um zehn Uhr zwanzig. (確認搭下一班) | 1. Schließt der Laden um zehn Uhr zwanzig? (店 10 點 20 分關門嗎？) - feedback: Diese Uhrzeit betrifft den Zug, nicht einen Laden.<br>2. Ich möchte mein Busticket erstatten lassen. (我想退公車票。) - feedback: Erstattungen liegen außerhalb dieser A2-Aufgabe. | 確認下一班時間 |  |
| t4 | Gut. Bitte warten Sie auf diesem Bahnsteig. (好的，請在這個月台等。) | Alles klar, ich warte hier. (確認等待) | 1. Bitte wechseln Sie mein Zimmer. (請幫我換房間。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2.<br>2. Ich möchte einen Termin im Krankenhaus machen. (我想預約醫院。) - feedback: Die Ablenker prüfen falsche Zeit, falschen Kontext oder eine Eskalation außerhalb von A2. | 禮貌收尾 |  |

---

## a2:de:a2_understand_hotel_notice - Einen Hotelhinweis Verstehen

- Level: A2
- Language: German (de)
- Scenario ID: a2_understand_hotel_notice
- Setting: In der Hotellobby
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Verstehen Sie einen kurzen Hotelhinweis und bestätigen Sie Zeit, Ort und Regel.

### Clean Dialogue Path

- Hotelmitarbeiter: Bitte sehen Sie sich den Hinweis an. Das Frühstück ist morgens von sieben bis neun Uhr. (請看公告。早餐是早上七點到九點。)
- Sie: Das Frühstück ist morgens von sieben bis neun Uhr, richtig? (早餐是早上七點到九點，對嗎？)
- Hotelmitarbeiter: Es ist im Restaurant im zweiten Stock. (地點是二樓餐廳。)
- Sie: Ich gehe ins Restaurant im zweiten Stock, richtig? (去二樓餐廳就可以，對嗎？)
- Hotelmitarbeiter: Am Eingang sagen Sie bitte nur Ihre Zimmernummer. (入口只要告知房號即可。)
- Sie: Ich sage am Eingang nur meine Zimmernummer, richtig? (入口只要說房號就可以，對嗎？)
- Hotelmitarbeiter: Ja, kommen Sie morgen früh. (對，明天早上來就可以。)
- Sie: In Ordnung. Morgen früh gehe ich ins Restaurant im zweiten Stock. (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bitte sehen Sie sich den Hinweis an. Das Frühstück ist morgens von sieben bis neun Uhr. (請看公告。早餐是早上七點到九點。) | Das Frühstück ist morgens von sieben bis neun Uhr, richtig? (早餐是早上七點到九點，對嗎？) | 1. Das Frühstück ist abends von sieben bis neun Uhr, richtig? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: Der Hinweis sagt morgens.<br>2. Check-out ist morgens um neun Uhr, richtig? (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: Dieser Hinweis ist über Frühstück, nicht Check-out. | Busque la hora en el aviso. |  |
| t2 | Es ist im Restaurant im zweiten Stock. (地點是二樓餐廳。) | Ich gehe ins Restaurant im zweiten Stock, richtig? (去二樓餐廳就可以，對嗎？) | 1. Ich gehe in ein Zimmer im dritten Stock, richtig? (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: Der Ort ist das Restaurant im zweiten Stock.<br>2. Ich zeige meinen Pass, richtig? (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: Ein Pass ist für diesen Hinweis nicht nötig. | Confirme el lugar. | A2-Muster<br>Kurzer Ausdruck für diese Hotelsituation.<br>restaurante del segundo piso = 二樓餐廳 |
| t3 | Am Eingang sagen Sie bitte nur Ihre Zimmernummer. (入口只要告知房號即可。) | Ich sage am Eingang nur meine Zimmernummer, richtig? (入口只要說房號就可以，對嗎？) | 1. Ich spreche am Eingang mit der Polizei, richtig? (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: Das ist ein Frühstückshinweis, kein Polizeivorgang.<br>2. Ich bekomme am Eingang eine Erstattung, richtig? (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Erstattungen passen nicht zu diesem Hinweis. | Confirme la condición sencilla. |  |
| t4 | Ja, kommen Sie morgen früh. (對，明天早上來就可以。) | In Ordnung. Morgen früh gehe ich ins Restaurant im zweiten Stock. (好，我明天早上去二樓餐廳。) | 1. In Ordnung. Heute Abend hole ich die Wäsche ab. (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: Es geht um Frühstück, nicht um Wäsche.<br>2. In Ordnung. Ich schreibe einen Unfallbericht. (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: Unfallberichte liegen außerhalb dieser Aufgabe. | Confirme lo que hará. |  |

---
