# A2 Italian Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:it:a2_app_booking_confirmation - Confermare una Prenotazione nell’App

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_app_booking_confirmation
- Setting: messaggio di aiuto
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire un compito digitale o un modulo semplice a basso rischio con frasi brevi di livello A2.
- Support text: Mantieni il compito a basso rischio. Non dare password, pagamenti, documenti sensibili o informazioni legali/mediche.

### Clean Dialogue Path

- staff: La prenotazione è confermata per oggi alle tre. (預約確認為今天下午三點。)
- 你: Dove si trova il posto? (地點在哪裡？)
- staff: È al secondo piano del bar. (在咖啡店二樓。)
- 你: Quindi al secondo piano del bar? (是在咖啡店二樓，對嗎？)
- staff: Sì, la prenotazione è a nome Mina. (對，預約姓名是 Mina。)
- 你: Sì, è il mio nome. (對，是我的名字。)
- staff: Allora ci vediamo alle tre. (那下午三點見。)
- 你: Va bene, vengo alle tre. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | La prenotazione è confermata per oggi alle tre. (預約確認為今天下午三點。) | Dove si trova il posto? (地點在哪裡？) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t2 | È al secondo piano del bar. (在咖啡店二樓。) | Quindi al secondo piano del bar? (是在咖啡店二樓，對嗎？) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t3 | Sì, la prenotazione è a nome Mina. (對，預約姓名是 Mina。) | Sì, è il mio nome. (對，是我的名字。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t4 | Allora ci vediamo alle tre. (那下午三點見。) | Va bene, vengo alle tre. (好，我下午三點會去。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |

---

## a2:it:a2_ask_ingredient_preference - Chiedere un Ingrediente

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_ask_ingredient_preference
- Setting: bancone del ristorante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Chiedi se c’è un ingrediente comune e scegli in base alla tua preferenza.
- Support text: Chiedi se c’è un ingrediente comune e scegli in base alla tua preferenza.

### Clean Dialogue Path

- addetto: Che cosa desidera ordinare? (您想點什麼？)
- 你: Questa insalata contiene cipolla? (這個沙拉裡有洋蔥嗎？)
- addetto: Sì, contiene un po’ di cipolla. (有，放一點洋蔥。)
- 你: Contiene un po’ di cipolla, giusto? (有一點洋蔥，對嗎？)
- addetto: Se vuole, possiamo prepararla senza cipolla. (如果您想要，可以不加洋蔥。)
- 你: Sì, senza cipolla, per favore. (好的，請不要加洋蔥。)
- addetto: Certo. La preparo senza cipolla. (可以，我會準備不加洋蔥的。)
- 你: Grazie. La prepari così, per favore. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Che cosa desidera ordinare? (您想點什麼？) | Questa insalata contiene cipolla? (這個沙拉裡有洋蔥嗎？) | 1. A che piano è questa insalata? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: Il piano non ha a che fare con gli ingredienti.<br>2. Per favore, cambi l’orario del mio biglietto. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: Questo passa a una situazione di biglietto. | Chiedi se c’è un ingrediente comune. |  |
| t2 | Sì, contiene un po’ di cipolla. (有，放一點洋蔥。) | Contiene un po’ di cipolla, giusto? (有一點洋蔥，對嗎？) | 1. Contiene molta carne, giusto? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: La carne non è stata menzionata.<br>2. La camera è rumorosa, giusto? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: Questo passa a un problema in hotel. | Conferma l’informazione sull’ingrediente. |  |
| t3 | Se vuole, possiamo prepararla senza cipolla. (如果您想要，可以不加洋蔥。) | Sì, senza cipolla, per favore. (好的，請不要加洋蔥。) | 1. Sì, mi dia una medicina per l’allergia. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: Medicina/allergia è fuori da questo compito.<br>2. Sì, mi rimborsi, per favore. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: Non è una richiesta di rimborso. | Scegli come preferenza, non come tema medico. |  |
| t4 | Certo. La preparo senza cipolla. (可以，我會準備不加洋蔥的。) | Grazie. La prepari così, per favore. (謝謝，請這樣做。) | 1. Mi dica il numero del passaporto, per favore. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: I dati del passaporto non servono.<br>2. Vorrei lasciare il bagaglio. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: Questo passa al deposito bagagli. | Chiudi confermando l’ordine. |  |

---

## a2:it:a2_ask_late_checkout - Chiedere il Check-out Posticipato

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_ask_late_checkout
- Setting: reception dell’hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Chiedi se puoi uscire un po’ più tardi e conferma l’orario finale.

### Clean Dialogue Path

- Empleado del hotel: Come posso aiutarla? (我可以怎麼幫您？)
- Tú: Posso fare il check-out un po’ più tardi? (我可以晚一點退房嗎？)
- Empleado del hotel: Oggi può fare il check-out fino all’una. (今天可以延到下午一點退房。)
- Tú: Fino all’una va bene, giusto? (可以到下午一點，對嗎？)
- Empleado del hotel: Per favore, mostri la tessera della camera alla reception prima di mezzogiorno. (請在中午前到櫃台出示房卡。)
- Tú: Mostro la tessera prima di mezzogiorno, giusto? (我中午前出示房卡，對嗎？)
- Empleado del hotel: Va bene, lo segno come check-out all’una. (好的，我幫您記成下午一點退房。)
- Tú: Grazie. Faccio il check-out all’una. (謝謝，我下午一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Come posso aiutarla? (我可以怎麼幫您？) | Posso fare il check-out un po’ più tardi? (我可以晚一點退房嗎？) | 1. Posso fare il check-in un po’ più tardi? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: Check-in è il momento sbagliato.<br>2. Può abbassare il prezzo? (可以降低價格嗎？) [forbidden_or_wrong_domain] - feedback: Prezzo non è il compito. | Chieda un check-out posticipato. |  |
| t2 | Oggi può fare il check-out fino all’una. (今天可以延到下午一點退房。) | Fino all’una va bene, giusto? (可以到下午一點，對嗎？) | 1. Fino alle dieci va bene, giusto? (可以到十點，對嗎？) [wrong_detail_or_domain] - feedback: Dieci è il tempo sbagliato.<br>2. Prenoto un’altra camera. (我想再訂一間房。) [forbidden_or_wrong_domain] - feedback: Non sta prenotando una nuova camera. | Confermi l’orario finale. |  |
| t3 | Per favore, mostri la tessera della camera alla reception prima di mezzogiorno. (請在中午前到櫃台出示房卡。) | Mostro la tessera prima di mezzogiorno, giusto? (我中午前出示房卡，對嗎？) | 1. Le dico il mio numero di passaporto, giusto? (我告訴您我的護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: Il passaporto non è richiesto.<br>2. Ritiro i bagagli alle sette, giusto? (我晚上七點拿行李，對嗎？) [forbidden_or_wrong_domain] - feedback: Bagagli è un altro servizio. | Confermi il requisito semplice. |  |
| t4 | Va bene, lo segno come check-out all’una. (好的，我幫您記成下午一點退房。) | Grazie. Faccio il check-out all’una. (謝謝，我下午一點退房。) | 1. Chiedo un rimborso. (我要申請退款。) [wrong_detail_or_domain] - feedback: Rimborso è fuori obiettivo.<br>2. Domani mattina prendo il treno. (明天早上我要搭火車。) [forbidden_or_wrong_domain] - feedback: Treno è un altro contesto. | Chiuda confermando l’orario. |  |

---

## a2:it:a2_ask_recommendation_budget - Chiedere un Consiglio entro un Budget

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_ask_recommendation_budget
- Setting: piccolo negozio
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Chiedi un consiglio semplice entro un piccolo budget.
- Support text: Chiedi un consiglio semplice entro un piccolo budget.

### Clean Dialogue Path

- addetto: Che cosa cerca? (您在找什麼？)
- 你: Mi può consigliare un regalo sotto i dieci euro? (可以推薦十歐元以內的禮物嗎？)
- addetto: Preferisce qualcosa di leggero o di pratico? (您想要輕巧的，還是實用的？)
- 你: Qualcosa di pratico, per favore. (請推薦實用的。)
- addetto: Allora questo piccolo quaderno costa meno di dieci euro. (那這本小筆記本在十歐元以內。)
- 你: Quel quaderno costa meno di dieci euro, giusto? (那本筆記本在十歐元以內，對嗎？)
- addetto: Sì, ed è possibile confezionarlo come regalo. (對，也可以包裝成禮物。)
- 你: Perfetto. Prendo quel quaderno. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Che cosa cerca? (您在找什麼？) | Mi può consigliare un regalo sotto i dieci euro? (可以推薦十歐元以內的禮物嗎？) | 1. Controlli il mio conto bancario, per favore. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: Non è un compito bancario.<br>2. Vorrei fare una denuncia per un oggetto perso. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: La denuncia di oggetto perso è un altro compito. | Chiedi un consiglio entro un piccolo budget. |  |
| t2 | Preferisce qualcosa di leggero o di pratico? (您想要輕巧的，還是實用的？) | Qualcosa di pratico, per favore. (請推薦實用的。) | 1. Qualcosa di piccante, per favore. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Piccante appartiene più a un menu.<br>2. Vorrei fare il check-out più tardi. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: Questo passa all’hotel. | Dai una preferenza semplice. |  |
| t3 | Allora questo piccolo quaderno costa meno di dieci euro. (那這本小筆記本在十歐元以內。) | Quel quaderno costa meno di dieci euro, giusto? (那本筆記本在十歐元以內，對嗎？) | 1. Quella camera costa meno di dieci euro, giusto? (那個房間在十歐元以內，對嗎？) [wrong_detail_or_domain] - feedback: Una camera non è l’articolo consigliato.<br>2. Quel biglietto era per ieri, giusto? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: Questo passa ai biglietti. | Conferma consiglio e budget. |  |
| t4 | Sì, ed è possibile confezionarlo come regalo. (對，也可以包裝成禮物。) | Perfetto. Prendo quel quaderno. (很好，我要那本筆記本。) | 1. Voglio un rimborso. (請退款。) [wrong_detail_or_domain] - feedback: Non è una richiesta di rimborso.<br>2. Controlli la mia assicurazione, per favore. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: L’assicurazione è fuori da questo compito a basso rischio. | Accetta il consiglio con cortesia. |  |

---

## a2:it:a2_ask_transfer_platform - Chiedere il Binario per il Cambio

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_ask_transfer_platform
- Setting: Al punto informazioni
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: Chiedi dove cambiare, ascolta stazione e binario, poi conferma il percorso.

### Clean Dialogue Path

- Addetto: Dove deve andare? (您要去哪裡？)
- Tu: Vado all’aeroporto. Dove devo cambiare? (詢問轉乘)
- Addetto: Scenda a Central e vada al binario tre. (請在 Central 下車，然後到 3 號月台。)
- Tu: Scendo a Central e vado al binario tre, giusto? (確認路線)
- Addetto: Al binario tre prenda il treno per l’aeroporto. (在 3 號月台搭往機場的車。)
- Tu: Al binario tre prendo il treno per l’aeroporto, giusto? (確認月台與方向)
- Addetto: Sì, cambi a Central. (對，請在 Central 轉乘。)
- Tu: Grazie. Cambio a Central. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Dove deve andare? (您要去哪裡？) | Vado all’aeroporto. Dove devo cambiare? (詢問轉乘) | 1. Ieri sono andato all’aeroporto. (我昨天去了機場。) - feedback: Chiedi il cambio per adesso, non per ieri.<br>2. Vorrei lasciare un bagaglio. (我想寄放行李。) - feedback: Questa è custodia bagagli, non cambio. | 詢問轉乘 |  |
| t2 | Scenda a Central e vada al binario tre. (請在 Central 下車，然後到 3 號月台。) | Scendo a Central e vado al binario tre, giusto? (確認路線) | 1. Prendo un caffè a Central, giusto? (我在 Central 喝咖啡，對嗎？) - feedback: L’indicazione è andare al binario tre.<br>2. La camera tre, giusto? (3 號房，對嗎？) - feedback: È un binario, non una camera. | 確認兩步指示 |  |
| t3 | Al binario tre prenda il treno per l’aeroporto. (在 3 號月台搭往機場的車。) | Al binario tre prendo il treno per l’aeroporto, giusto? (確認月台與方向) | 1. Il treno per l’aeroporto è arrivato ieri. (往機場的車昨天到了。) - feedback: Conferma il treno che ti serve adesso.<br>2. Dove vado in caso di emergenza? (緊急時我要去哪裡？) - feedback: Le procedure di emergenza sono fuori da questa attività. | 確認方向 |  |
| t4 | Sì, cambi a Central. (對，請在 Central 轉乘。) | Grazie. Cambio a Central. (禮貌收尾) | 1. Vorrei cambiare l’orario del biglietto. (我想更改票的時間。) - feedback: Questo non è un cambio di biglietto.<br>2. Vado dalla polizia all’aeroporto. (我要去機場找警察。) - feedback: Le procedure di polizia sono fuori da questa attività. | 收尾 |  |

---

## a2:it:a2_change_delivery_pickup_time - Cambiare l’Orario di Ritiro

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: messaggio di aiuto
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire un compito digitale o un modulo semplice a basso rischio con frasi brevi di livello A2.
- Support text: Mantieni il compito a basso rischio. Non dare password, pagamenti, documenti sensibili o informazioni legali/mediche.

### Clean Dialogue Path

- staff: Il ritiro è oggi alle quattro. (今天四點取貨。)
- 你: Posso cambiare l’orario di ritiro? (可以改取貨時間嗎？)
- staff: Sì, alle cinque è possibile. (可以，五點可以。)
- 你: Allora alle cinque, per favore. (那請改成五點。)
- staff: Quindi cambiamo alle cinque? (改成五點嗎？)
- 你: Sì, alle cinque va bene. (對，五點可以。)
- staff: Va bene, lo cambio alle cinque. (好的，我會改成五點。)
- 你: Grazie. Vengo alle cinque. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Il ritiro è oggi alle quattro. (今天四點取貨。) | Posso cambiare l’orario di ritiro? (可以改取貨時間嗎？) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t2 | Sì, alle cinque è possibile. (可以，五點可以。) | Allora alle cinque, per favore. (那請改成五點。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t3 | Quindi cambiamo alle cinque? (改成五點嗎？) | Sì, alle cinque va bene. (對，五點可以。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t4 | Va bene, lo cambio alle cinque. (好的，我會改成五點。) | Grazie. Vengo alle cinque. (謝謝，我五點會去。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |

---

## a2:it:a2_change_ticket_time - Cambiare l’Orario di un Biglietto

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_change_ticket_time
- Setting: Alla biglietteria
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: Chiedi di cambiare l’orario del biglietto, ascolta l’orario disponibile e conferma.

### Clean Dialogue Path

- Addetto: Buongiorno. Come posso aiutarla? (您好，我可以怎麼幫您？)
- Tu: Vorrei cambiare l’orario del biglietto. (提出請求)
- Addetto: Può cambiarlo per il treno delle tre del pomeriggio. (可以改成下午 3 點的車。)
- Tu: Sì, per le tre, per favore. (接受新時間)
- Addetto: Quindi, alle tre del pomeriggio va bene? (那就改成下午 3 點，對嗎？)
- Tu: Sì, le tre vanno bene. (確認時間)
- Addetto: È stato cambiato. Prenda il treno delle tre, per favore. (已經改好了，請搭 3 點那班車。)
- Tu: Grazie. Prendo il treno delle tre. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Come posso aiutarla? (您好，我可以怎麼幫您？) | Vorrei cambiare l’orario del biglietto. (提出請求) | 1. Il biglietto era per ieri. (票是昨天的。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2.<br>2. Un caffè, per favore. (請給我一杯咖啡。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2. | 提出改時間 |  |
| t2 | Può cambiarlo per il treno delle tre del pomeriggio. (可以改成下午 3 點的車。) | Sì, per le tre, per favore. (接受新時間) | 1. C’è una camera alle tre? (3 點有房間嗎？) - feedback: Si parla di un biglietto, non di una camera.<br>2. Ieri ho viaggiato alle tre. (我昨天 3 點搭了。) - feedback: L’orario disponibile è per il cambio di oggi. | 接受可用時間 |  |
| t3 | Quindi, alle tre del pomeriggio va bene? (那就改成下午 3 點，對嗎？) | Sì, le tre vanno bene. (確認時間) | 1. No, le tre erano ieri. (不，3 點是昨天。) - feedback: Qui devi confermare il nuovo orario.<br>2. Mi spiega le regole di rimborso? (請說明退款規則。) - feedback: Le regole di rimborso sono fuori da questa attività A2. | 確認時間 |  |
| t4 | È stato cambiato. Prenda il treno delle tre, per favore. (已經改好了，請搭 3 點那班車。) | Grazie. Prendo il treno delle tre. (禮貌收尾) | 1. Domani bevo un caffè. (我明天要喝咖啡。) - feedback: Questo non chiude il cambio del biglietto.<br>2. Qual è il mio numero di passaporto? (我的護照號碼是什麼？) - feedback: I dati d’identità non servono qui. | 收尾 |  |

---

## a2:it:a2_compare_two_menu_options - Confrontare Due Opzioni del Menu

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_compare_two_menu_options
- Setting: bancone del ristorante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Confronta due opzioni semplici del menu e scegli quella che preferisci.
- Support text: Confronta due opzioni semplici del menu e scegli quella che preferisci.

### Clean Dialogue Path

- addetto: Oggi può scegliere la ciotola di riso o la zuppa di noodles. (今天可以選飯碗或湯麵。)
- 你: Qual è la differenza tra le due opzioni? (兩個選項有什麼不同？)
- addetto: La ciotola di riso è un po’ piccante, e la zuppa di noodles è più leggera. (飯碗有點辣，湯麵比較清爽。)
- 你: La zuppa di noodles è più leggera, giusto? (湯麵比較清爽，對嗎？)
- addetto: Sì, la zuppa di noodles è meno piccante. (對，湯麵比較不辣。)
- 你: Allora prendo la zuppa di noodles. (那我要湯麵。)
- addetto: Perfetto. Segno una zuppa di noodles. (好的，我幫您點一份湯麵。)
- 你: Grazie. Una zuppa di noodles, per favore. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oggi può scegliere la ciotola di riso o la zuppa di noodles. (今天可以選飯碗或湯麵。) | Qual è la differenza tra le due opzioni? (兩個選項有什麼不同？) | 1. Dov’è il mio tavolo? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: Questa domanda riguarda il tavolo, non il menu.<br>2. Voglio un rimborso. (我想退款。) [forbidden_or_wrong_domain] - feedback: Un rimborso è fuori da questo compito A2. | Chiedi la differenza tra le due opzioni. |  |
| t2 | La ciotola di riso è un po’ piccante, e la zuppa di noodles è più leggera. (飯碗有點辣，湯麵比較清爽。) | La zuppa di noodles è più leggera, giusto? (湯麵比較清爽，對嗎？) | 1. La ciotola di riso costa meno, giusto? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: Il prezzo non è stato menzionato.<br>2. Il treno è più veloce, giusto? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: Questo passa al trasporto. | Conferma il confronto che hai sentito. |  |
| t3 | Sì, la zuppa di noodles è meno piccante. (對，湯麵比較不辣。) | Allora prendo la zuppa di noodles. (那我要湯麵。) | 1. Allora cambio camera. (那我要換房間。) [wrong_detail_or_domain] - feedback: Questo passa a una situazione in hotel.<br>2. Allora mostro il passaporto. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: Il passaporto non serve qui. | Scegli l’opzione secondo la tua preferenza. |  |
| t4 | Perfetto. Segno una zuppa di noodles. (好的，我幫您點一份湯麵。) | Grazie. Una zuppa di noodles, per favore. (謝謝，請給我一份湯麵。) | 1. Chiamo la polizia. (我要報警。) [wrong_detail_or_domain] - feedback: È troppo grave per questa situazione.<br>2. Domani devo andare in ospedale. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: Non è una situazione medica. | Conferma con cortesia il piatto scelto. |  |

---

## a2:it:a2_confirm_date_time_place - Confermare data, ora e luogo

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_confirm_date_time_place
- Setting: Controllare un breve messaggio
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Confermi data, ora e luogo da un breve messaggio.
- Learner goal: Capire un messaggio breve e confermare i dettagli principali.
- Support text: Leggi il breve messaggio del tuo amico. Conferma data, ora e luogo.

### Clean Dialogue Path

- Amico: Hai letto il mio messaggio? (你看過我的訊息了嗎？)
- Tu: Sì, domani alle dieci, giusto? (有，明天十點，對吧？)
- Amico: Sì. Dove ci vediamo? (對。我們在哪裡見？)
- Tu: Davanti al municipio. (在市政廳前面。)
- Amico: Se faccio tardi, ti scrivo. (如果我晚到，我會傳訊息給你。)
- Tu: Va bene, ho capito. (好，我知道了。)
- Amico: Perfetto. A domani. (太好了。明天見。)
- Tu: Sì, a domani. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hai letto il mio messaggio? (你看過我的訊息了嗎？) | Sì, domani alle dieci, giusto? (有，明天十點，對吧？) | 1. Sì, stasera alle dieci, giusto? (有，今晚十點，對吧？) [wrong_date_time] - feedback: Il messaggio dice domani alle dieci, non stasera alle dieci.<br>2. Sì, ho letto il menù. (有，我看過菜單了。) [wrong_scenario_menu] - feedback: Il messaggio riguarda un incontro, non un menù. | Il messaggio dice: Domani alle 10, ci vediamo davanti al municipio. Conferma prima il giorno e l'ora. |  |
| t2 | Sì. Dove ci vediamo? (對。我們在哪裡見？) | Davanti al municipio. (在市政廳前面。) | 1. Dentro il municipio. (在市政廳裡面。) [wrong_place_relation] - feedback: Il messaggio dice davanti al municipio, non dentro.<br>2. Domani riposo a casa. (我明天在家休息。) [wrong_function_plan] - feedback: Questa frase parla del tuo piano. Non conferma il luogo dell'incontro. | Il luogo nel messaggio è davanti al municipio. | davanti a + luogo<br>Usa davanti a per indicare un punto davanti a un luogo.<br>davanti al municipio = 在市政廳前面<br>davanti al bar = 在咖啡吧前面 |
| t3 | Se faccio tardi, ti scrivo. (如果我晚到，我會傳訊息給你。) | Va bene, ho capito. (好，我知道了。) | 1. Va bene, sono in ritardo. (好，我遲到了。) [wrong_subject_status] - feedback: Il tuo amico parla di sé, non dice che tu sei in ritardo.<br>2. Se il tram è in ritardo, chiamo. (如果電車誤點，我會打電話。) [wrong_focus_self_delay] - feedback: Questa frase cambia il focus sul tuo possibile ritardo. Basta confermare. | Il tuo amico dice solo cosa farà se è in ritardo. Basta una risposta breve. |  |
| t4 | Perfetto. A domani. (太好了。明天見。) | Sì, a domani. (好，明天見。) | 1. Sì, a ieri. (好，昨天見。) [wrong_time_expression] - feedback: A ieri non è una chiusura naturale. Usa a domani.<br>2. Posso avere il conto? (可以給我帳單嗎？) [wrong_scenario_payment] - feedback: Questa è una frase per pagare. Qui stai solo chiudendo il piano. | I dettagli sono chiari. Chiudi in modo naturale. |  |

---

## a2:it:a2_decline_with_reason - Rifiutare con un Motivo Semplice

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_decline_with_reason
- Setting: chat con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire una semplice situazione sociale con un amico usando frasi brevi di livello A2.
- Support text: Usa un linguaggio naturale con un amico. Mantieni attività e motivo semplici.

### Clean Dialogue Path

- amico: Ti va di vedere un film stasera? (今晚要看電影嗎？)
- 你: Mi dispiace, stasera non posso. (不好意思，我今晚不行。)
- amico: Nessun problema. Sei occupato? (沒關係。你很忙嗎？)
- 你: Ho ancora un po’ da fare. (我還有一點事要做。)
- amico: Magari un altro giorno? (也許改天？)
- 你: Sì, magari questo fine settimana. (好，也許這個週末。)
- amico: Va bene. Ne parliamo nel fine settimana. (好，那週末再說。)
- 你: Grazie. Ci vediamo nel fine settimana. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ti va di vedere un film stasera? (今晚要看電影嗎？) | Mi dispiace, stasera non posso. (不好意思，我今晚不行。) | 1. No, non voglio. (不要，我不想。) [too_blunt] - feedback: Non va bene per questa situazione con un amico.<br>2. Mi dia di nuovo lo scontrino, per favore. (請再給我收據。) [wrong_scenario_shop] - feedback: Suona troppo forte per parlare con un amico. | Keep the refusal brief and warm. |  |
| t2 | Nessun problema. Sei occupato? (沒關係。你很忙嗎？) | Ho ancora un po’ da fare. (我還有一點事要做。) | 1. No, non voglio. (不要，我不想。) [too_blunt] - feedback: Non va bene per questa situazione con un amico.<br>2. Mi dia di nuovo lo scontrino, per favore. (請再給我收據。) [wrong_scenario_shop] - feedback: Suona troppo forte per parlare con un amico. | Keep the refusal brief and warm. |  |
| t3 | Magari un altro giorno? (也許改天？) | Sì, magari questo fine settimana. (好，也許這個週末。) | 1. No, non voglio. (不要，我不想。) [too_blunt] - feedback: Non va bene per questa situazione con un amico.<br>2. Mi dia di nuovo lo scontrino, per favore. (請再給我收據。) [wrong_scenario_shop] - feedback: Suona troppo forte per parlare con un amico. | Keep the refusal brief and warm. |  |
| t4 | Va bene. Ne parliamo nel fine settimana. (好，那週末再說。) | Grazie. Ci vediamo nel fine settimana. (謝謝，週末見。) | 1. No, non voglio. (不要，我不想。) [too_blunt] - feedback: Non va bene per questa situazione con un amico.<br>2. Mi dia di nuovo lo scontrino, per favore. (請再給我收據。) [wrong_scenario_shop] - feedback: Suona troppo forte per parlare con un amico. | Keep the refusal brief and warm. |  |

---

## a2:it:a2_describe_weekend_activity - Raccontare un’Attività del Fine Settimana

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_describe_weekend_activity
- Setting: chat con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire una semplice situazione sociale con un amico usando frasi brevi di livello A2.
- Support text: Usa un linguaggio naturale con un amico. Mantieni attività e motivo semplici.

### Clean Dialogue Path

- amico: Che cosa hai fatto nel fine settimana? (你週末做了什麼？)
- 你: Ho incontrato un amico e ho pranzato. (我見了朋友，也吃了午餐。)
- amico: Dove vi siete visti? (你們在哪裡見面？)
- 你: Ci siamo visti in un bar vicino a casa mia. (我們在我家附近的咖啡店見。)
- amico: È stato bello? (還不錯嗎？)
- 你: Sì, era tranquillo e piacevole. (嗯，很安靜，也很好。)
- amico: Sembra bello. La prossima volta vengo anch’io. (聽起來不錯。下次我也一起去。)
- 你: Certo, andiamo insieme la prossima volta. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Che cosa hai fatto nel fine settimana? (你週末做了什麼？) | Ho incontrato un amico e ho pranzato. (我見了朋友，也吃了午餐。) | 1. Domani vedrò un amico. (我明天會見朋友。) [wrong_time_future] - feedback: Non va bene per questa situazione con un amico.<br>2. A quale binario devo andare? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suona troppo forte per parlare con un amico. | Use a short A2 past-time answer. |  |
| t2 | Dove vi siete visti? (你們在哪裡見面？) | Ci siamo visti in un bar vicino a casa mia. (我們在我家附近的咖啡店見。) | 1. Domani vedrò un amico. (我明天會見朋友。) [wrong_time_future] - feedback: Non va bene per questa situazione con un amico.<br>2. A quale binario devo andare? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suona troppo forte per parlare con un amico. | Use a short A2 past-time answer. |  |
| t3 | È stato bello? (還不錯嗎？) | Sì, era tranquillo e piacevole. (嗯，很安靜，也很好。) | 1. Domani vedrò un amico. (我明天會見朋友。) [wrong_time_future] - feedback: Non va bene per questa situazione con un amico.<br>2. A quale binario devo andare? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suona troppo forte per parlare con un amico. | Use a short A2 past-time answer. |  |
| t4 | Sembra bello. La prossima volta vengo anch’io. (聽起來不錯。下次我也一起去。) | Certo, andiamo insieme la prossima volta. (好，下次一起去。) | 1. Domani vedrò un amico. (我明天會見朋友。) [wrong_time_future] - feedback: Non va bene per questa situazione con un amico.<br>2. A quale binario devo andare? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suona troppo forte per parlare con un amico. | Use a short A2 past-time answer. |  |

---

## a2:it:a2_exchange_wrong_item - Cambiare un Articolo Sbagliato

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_exchange_wrong_item
- Setting: bancone del negozio
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Spiega con cortesia che hai ricevuto l’articolo sbagliato e chiedi quello corretto.
- Support text: Spiega con cortesia che hai ricevuto l’articolo sbagliato e chiedi quello corretto.

### Clean Dialogue Path

- addetto: Come posso aiutarla? (需要幫忙嗎？)
- 你: Ho ordinato una tazza piccola, ma ho ricevuto una grande. (我訂的是小杯，但拿到大杯。)
- addetto: Controllo. Posso vedere lo scontrino? (我確認一下。可以看收據嗎？)
- 你: Sì, ecco lo scontrino. (可以，這是收據。)
- addetto: Ha ragione. Posso cambiarla con una tazza piccola adesso. (您說得對。我現在可以換成小杯。)
- 你: Me la cambia con una tazza piccola, giusto? (您會幫我換成小杯，對嗎？)
- addetto: Sì, aspetti un momento, per favore. (好的，請稍等。)
- 你: Grazie. Aspetto qui. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Come posso aiutarla? (需要幫忙嗎？) | Ho ordinato una tazza piccola, ma ho ricevuto una grande. (我訂的是小杯，但拿到大杯。) | 1. Dove viene fatta la tazza piccola? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: Il luogo di produzione non è il problema.<br>2. Abbassi il prezzo, per favore. (請降價。) [forbidden_or_wrong_domain] - feedback: Trattare il prezzo è fuori da questo compito. | Spiega che l’articolo ricevuto è diverso. |  |
| t2 | Controllo. Posso vedere lo scontrino? (我確認一下。可以看收據嗎？) | Sì, ecco lo scontrino. (可以，這是收據。) | 1. Sì, ecco il mio passaporto. (可以，這是護照。) [wrong_detail_or_domain] - feedback: Il passaporto non serve.<br>2. Sì, domani prendo il treno. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: Questo passa al trasporto. | Rispondi al semplice controllo dello scontrino. |  |
| t3 | Ha ragione. Posso cambiarla con una tazza piccola adesso. (您說得對。我現在可以換成小杯。) | Me la cambia con una tazza piccola, giusto? (您會幫我換成小杯，對嗎？) | 1. Mi spieghi le regole di rimborso. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Le regole di rimborso sono troppo ampie qui.<br>2. Lo denuncio alla polizia. (我要報警。) [forbidden_or_wrong_domain] - feedback: È troppo grave per questo compito. | Conferma il cambio. |  |
| t4 | Sì, aspetti un momento, per favore. (好的，請稍等。) | Grazie. Aspetto qui. (謝謝，我在這裡等。) | 1. Devo andare in ospedale. (我需要去醫院。) [wrong_detail_or_domain] - feedback: Non è una situazione medica.<br>2. Vorrei cambiare camera. (我想換房。) [forbidden_or_wrong_domain] - feedback: Questo passa a una situazione in hotel. | Chiudi accettando di aspettare. |  |

---

## a2:it:a2_explain_simple_delay_reason - Spiegare un piccolo ritardo

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: Per strada verso un incontro
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Stai arrivando un po' in ritardo e devi spiegare il motivo.
- Learner goal: Scusarsi, dare un motivo semplice e stimare il ritardo.
- Support text: Il tuo amico chiede dove sei. Scusati, spiega un motivo semplice e dai una breve stima del ritardo.

### Clean Dialogue Path

- Amico: Dove sei? Sei vicino? (你在哪裡？快到了嗎？)
- Tu: Scusa, arrivo un po' in ritardo. (不好意思，我會晚一點到。)
- Amico: Perché? Che cosa è successo? (為什麼？怎麼了？)
- Tu: C'è traffico. (塞車了。)
- Amico: Quanto ritardo hai? (你會晚多久？)
- Tu: Arrivo tra circa dieci minuti. (我大約十分鐘後到。)
- Amico: Va bene. Ti aspetto. (好。我等你。)
- Tu: Grazie. Arrivo presto. (謝謝。我很快就到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Dove sei? Sei vicino? (你在哪裡？快到了嗎？) | Scusa, arrivo un po' in ritardo. (不好意思，我會晚一點到。) | 1. Sì, sono arrivato ieri. (對，我昨天到了。) [wrong_time_past] - feedback: Il tuo amico chiede di adesso, non di ieri.<br>2. Mi consigli un piatto? (你可以推薦一道菜嗎？) [wrong_scenario_restaurant] - feedback: Questa è lingua da ristorante. Qui devi spiegare che sei in ritardo. | Il tuo amico controlla dove sei. Inizia con scusa e di' che arrivi un po' in ritardo. |  |
| t2 | Perché? Che cosa è successo? (為什麼？怎麼了？) | C'è traffico. (塞車了。) | 1. Mi piace il traffico. (我喜歡交通堵塞。) [wrong_reason_semantics] - feedback: Questa frase non spiega perché sei in ritardo.<br>2. Dov'è la fermata del tram? (電車站在哪裡？) [wrong_function_location_question] - feedback: Il tuo amico chiede il motivo, non un luogo. | Dai un solo motivo quotidiano. Tienilo breve. | perché + motivo<br>Usa perché per dare un motivo semplice.<br>perché c'è traffico = 因為塞車<br>perché il tram è in ritardo = 因為電車誤點 |
| t3 | Quanto ritardo hai? (你會晚多久？) | Arrivo tra circa dieci minuti. (我大約十分鐘後到。) | 1. Il tram numero dieci è comodo. (十號電車很方便。) [wrong_entity_tram_number] - feedback: Qui dieci deve indicare i minuti, non il numero del tram.<br>2. Non sono in ritardo. (我沒有遲到。) [contradicts_context] - feedback: Hai già detto che arrivi in ritardo. Ora devi stimare il tempo. | Usa circa piu' i minuti per una stima semplice. |  |
| t4 | Va bene. Ti aspetto. (好。我等你。) | Grazie. Arrivo presto. (謝謝。我很快就到。) | 1. Ho una prenotazione. (我有預約。) [wrong_scenario_reservation] - feedback: Sembra una situazione in hotel o al ristorante, non un messaggio di ritardo.<br>2. Posso pagare adesso? (我現在可以付款嗎？) [wrong_scenario_payment] - feedback: Questa è una frase di pagamento. Qui è meglio ringraziare. | Il tuo amico accetta il ritardo. Ringrazia e chiudi in modo naturale. |  |

---

## a2:it:a2_fill_simple_form_help - Chiedere Aiuto per un Modulo Semplice

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_fill_simple_form_help
- Setting: messaggio di aiuto
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire un compito digitale o un modulo semplice a basso rischio con frasi brevi di livello A2.
- Support text: Mantieni il compito a basso rischio. Non dare password, pagamenti, documenti sensibili o informazioni legali/mediche.

### Clean Dialogue Path

- staff: Compili prima questo modulo, per favore. (請先填這張表。)
- 你: Che cosa scrivo in questo spazio? (這一欄要填什麼？)
- staff: Qui scriva il suo nome. (這裡請填姓名。)
- 你: Solo il mio nome? (只填姓名就可以嗎？)
- staff: Sì, il telefono va sotto. (對，電話在下面那一欄。)
- 你: Capito. Lo scrivo sotto. (知道了，我會寫在下面。)
- staff: Sì, così basta. (對，這樣就夠了。)
- 你: Grazie. Ho finito. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Compili prima questo modulo, per favore. (請先填這張表。) | Che cosa scrivo in questo spazio? (這一欄要填什麼？) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t2 | Qui scriva il suo nome. (這裡請填姓名。) | Solo il mio nome? (只填姓名就可以嗎？) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t3 | Sì, il telefono va sotto. (對，電話在下面那一欄。) | Capito. Lo scrivo sotto. (知道了，我會寫在下面。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t4 | Sì, così basta. (對，這樣就夠了。) | Grazie. Ho finito. (謝謝，我填好了。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |

---

## a2:it:a2_invite_friend_activity - Invitare un Amico a un’Attività

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_invite_friend_activity
- Setting: chat con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire una semplice situazione sociale con un amico usando frasi brevi di livello A2.
- Support text: Usa un linguaggio naturale con un amico. Mantieni attività e motivo semplici.

### Clean Dialogue Path

- amico: Ti va di prendere un caffè più tardi? (等一下要一起喝咖啡嗎？)
- 你: Sì, volentieri. Un caffè va bene. (Sì, volentieri. Un caffè va bene.)
- amico: Certo. A che ora? (好啊。幾點？)
- 你: Verso le tre va bene? (三點左右可以嗎？)
- amico: Ci vediamo davanti alla stazione? (要在車站前面見嗎？)
- 你: Sì, ci vediamo davanti alla stazione. (好，我們在車站前面見。)
- amico: Perfetto. A dopo. (好，等一下見。)
- 你: A dopo, allora. (A dopo, allora.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ti va di prendere un caffè più tardi? (等一下要一起喝咖啡嗎？) | Sì, volentieri. Un caffè va bene. (Sì, volentieri. Un caffè va bene.) | 1. Mi cambi la stanza più tardi, per favore. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Non va bene per questa situazione con un amico.<br>2. Devi venire con me oggi. (你今天一定要跟我來。) [too_pressuring] - feedback: Suona troppo forte per parlare con un amico. | Accetta l’invito in modo naturale. |  |
| t2 | Certo. A che ora? (好啊。幾點？) | Verso le tre va bene? (三點左右可以嗎？) | 1. Mi cambi la stanza più tardi, per favore. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Non va bene per questa situazione con un amico.<br>2. Devi venire con me oggi. (你今天一定要跟我來。) [too_pressuring] - feedback: Suona troppo forte per parlare con un amico. | Proponi un orario semplice. |  |
| t3 | Ci vediamo davanti alla stazione? (要在車站前面見嗎？) | Sì, ci vediamo davanti alla stazione. (好，我們在車站前面見。) | 1. Mi cambi la stanza più tardi, per favore. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Non va bene per questa situazione con un amico.<br>2. Devi venire con me oggi. (你今天一定要跟我來。) [too_pressuring] - feedback: Suona troppo forte per parlare con un amico. | Conferma il luogo dell’incontro. |  |
| t4 | Perfetto. A dopo. (好，等一下見。) | A dopo, allora. (A dopo, allora.) | 1. Mi cambi la stanza più tardi, per favore. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Non va bene per questa situazione con un amico.<br>2. Devi venire con me oggi. (你今天一定要跟我來。) [too_pressuring] - feedback: Suona troppo forte per parlare con un amico. | Chiudi il piano in modo amichevole. |  |

---

## a2:it:a2_lost_item_followup_message - Chiedere Notizie su un Oggetto Perso

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_lost_item_followup_message
- Setting: messaggio di aiuto
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire un compito digitale o un modulo semplice a basso rischio con frasi brevi di livello A2.
- Support text: Mantieni il compito a basso rischio. Non dare password, pagamenti, documenti sensibili o informazioni legali/mediche.

### Clean Dialogue Path

- staff: Che oggetto cerca? (您在找什麼？)
- 你: Credo di aver lasciato un ombrello nero. (我好像把黑色雨傘忘在那裡。)
- staff: Dove lo ha lasciato? (放在哪裡？)
- 你: Credo vicino a una sedia del bar. (好像放在咖啡店椅子旁邊。)
- staff: Lasci nome e contatto, per favore. (請留下姓名和聯絡方式。)
- 你: Sì, lascio nome e telefono. (好，我會留下姓名和電話。)
- staff: Controlliamo e la contattiamo. (我確認後會聯絡您。)
- 你: Grazie. Aspetto il messaggio. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Che oggetto cerca? (您在找什麼？) | Credo di aver lasciato un ombrello nero. (我好像把黑色雨傘忘在那裡。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t2 | Dove lo ha lasciato? (放在哪裡？) | Credo vicino a una sedia del bar. (好像放在咖啡店椅子旁邊。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t3 | Lasci nome e contatto, per favore. (請留下姓名和聯絡方式。) | Sì, lascio nome e telefono. (好，我會留下姓名和電話。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |
| t4 | Controlliamo e la contattiamo. (我確認後會聯絡您。) | Grazie. Aspetto il messaggio. (謝謝，我等您聯絡。) | 1. Le dico la password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La password è fuori da questo compito A2.<br>2. Vorrei un rimborso. (請退款。) [wrong_dispute_domain] - feedback: Rimborsi o dispute sono fuori da questo compito. | Controlla solo il dettaglio necessario e a basso rischio. |  |

---

## a2:it:a2_luggage_storage_pickup - Lasciare e Ritirare un Bagaglio

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_luggage_storage_pickup
- Setting: Al deposito bagagli
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: Lascia un bagaglio, ascolta l’orario limite per il ritiro e conferma la ricevuta necessaria.

### Clean Dialogue Path

- Addetto: Vuole lasciare un bagaglio? (您要寄放行李嗎？)
- Tu: Vorrei lasciare questa valigia. (寄放行李)
- Addetto: Può ritirarla oggi prima delle sette di sera. (今天晚上領取期限前可以來領。)
- Tu: La ritiro prima delle sette, giusto? (確認取件時間)
- Addetto: Per ritirarla, mostri questa ricevuta. (領取時請出示這張收據。)
- Tu: Sì, mostro la ricevuta quando la ritiro. (確認文件)
- Addetto: Va bene. Torni prima delle sette, per favore. (好的，請 7 點前回來。)
- Tu: Grazie. Torno prima delle sette. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vuole lasciare un bagaglio? (您要寄放行李嗎？) | Vorrei lasciare questa valigia. (寄放行李) | 1. Ieri ho ritirato questa valigia. (我昨天領了這個行李箱。) - feedback: Adesso la stai lasciando, non ritirando.<br>2. Dov’è il binario? (月台在哪裡？) - feedback: Questa situazione riguarda il deposito bagagli. | 寄放行李 |  |
| t2 | Può ritirarla oggi prima delle sette di sera. (今天晚上領取期限前可以來領。) | La ritiro prima delle sette, giusto? (確認取件時間) | 1. La lascio alle sette di mattina, giusto? (我早上 7 點寄放，對嗎？) - feedback: Il limite è prima delle sette di sera.<br>2. Dove ricevo il rimborso? (退款在哪裡拿？) - feedback: I rimborsi sono fuori da questa attività. | 確認取件時間 |  |
| t3 | Per ritirarla, mostri questa ricevuta. (領取時請出示這張收據。) | Sì, mostro la ricevuta quando la ritiro. (確認文件) | 1. Posso buttare la ricevuta? (我可以把收據丟掉嗎？) - feedback: Serve la ricevuta per il ritiro.<br>2. Mostro il passaporto. (我出示護照。) - feedback: Il passaporto non serve qui. | 確認寄物單 |  |
| t4 | Va bene. Torni prima delle sette, per favore. (好的，請 7 點前回來。) | Grazie. Torno prima delle sette. (禮貌收尾) | 1. Il treno è in ritardo di quindici minuti. (火車晚 15 分鐘。) - feedback: Questo non è un annuncio di ritardo.<br>2. Vorrei denunciare un bagaglio smarrito. (我想申報行李遺失。) - feedback: Gli oggetti smarriti sono fuori da questa attività. | 收尾 |  |

---

## a2:it:a2_make_simple_plan_sequence - Fare un Piano Semplice in Due Passi

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: chat con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gestire una semplice situazione sociale con un amico usando frasi brevi di livello A2.
- Support text: Usa un linguaggio naturale con un amico. Mantieni attività e motivo semplici.

### Clean Dialogue Path

- amico: Ci vediamo prima alla stazione? (我們先在車站見，好嗎？)
- 你: Sì, prima ci vediamo alla stazione. (好，我們先在車站見。)
- amico: Poi andiamo al parco? (接著去公園嗎？)
- 你: Va bene. Poi andiamo al parco. (好，接著去公園。)
- amico: Allora, prima la stazione e poi il parco? (所以先車站，接著公園，對嗎？)
- 你: Sì, prima la stazione, poi il parco. (對，先車站，接著公園。)
- amico: Perfetto. Ci vediamo sabato alle due. (好，星期六兩點見。)
- 你: Ok, ci vediamo sabato alle due. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ci vediamo prima alla stazione? (我們先在車站見，好嗎？) | Sì, prima ci vediamo alla stazione. (好，我們先在車站見。) | 1. Sì, prima rimborsami. (好，先退款給我。) [wrong_scenario_refund] - feedback: Non va bene per questa situazione con un amico.<br>2. No, assolutamente no. (不，絕對不要。) [too_blunt] - feedback: Suona troppo forte per parlare con un amico. | Mantieni il piano in due passaggi semplici. |  |
| t2 | Poi andiamo al parco? (接著去公園嗎？) | Va bene. Poi andiamo al parco. (好，接著去公園。) | 1. Sì, prima rimborsami. (好，先退款給我。) [wrong_scenario_refund] - feedback: Non va bene per questa situazione con un amico.<br>2. No, assolutamente no. (不，絕對不要。) [too_blunt] - feedback: Suona troppo forte per parlare con un amico. | Mantieni il piano in due passaggi semplici. |  |
| t3 | Allora, prima la stazione e poi il parco? (所以先車站，接著公園，對嗎？) | Sì, prima la stazione, poi il parco. (對，先車站，接著公園。) | 1. Sì, prima rimborsami. (好，先退款給我。) [wrong_scenario_refund] - feedback: Non va bene per questa situazione con un amico.<br>2. No, assolutamente no. (不，絕對不要。) [too_blunt] - feedback: Suona troppo forte per parlare con un amico. | Mantieni il piano in due passaggi semplici. |  |
| t4 | Perfetto. Ci vediamo sabato alle due. (好，星期六兩點見。) | Ok, ci vediamo sabato alle due. (好，星期六兩點見。) | 1. Sì, prima rimborsami. (好，先退款給我。) [wrong_scenario_refund] - feedback: Non va bene per questa situazione con un amico.<br>2. No, assolutamente no. (不，絕對不要。) [too_blunt] - feedback: Suona troppo forte per parlare con un amico. | Mantieni il piano in due passaggi semplici. |  |

---

## a2:it:a2_plan_tomorrow_morning - Programma per domani mattina

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Chat con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Un amico ti chiede cosa farai domani mattina.
- Learner goal: Dire un programma per il futuro vicino e aggiungere un passo successivo semplice.
- Support text: Il tuo amico ti chiede cosa fai domani mattina. Di' prima un programma, poi aggiungi il passo successivo.

### Clean Dialogue Path

- Amico: Che cosa fai domani mattina? (你明天早上要做什麼？)
- Tu: Domani mattina vado in biblioteca. (明天早上我去圖書館。)
- Amico: E poi che cosa fai? (那之後你要做什麼？)
- Tu: Poi prendo un caffè vicino alla piazza. (接著我在廣場附近喝杯咖啡。)
- Amico: Allora sei libero prima di pranzo? (所以你午餐前有空嗎？)
- Tu: Sì, sono libero verso le undici. (可以，我十一點左右有空。)
- Amico: Perfetto. Ti scrivo verso le undici. (太好了。我十一點左右傳訊息給你。)
- Tu: Va bene, a domani. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Che cosa fai domani mattina? (你明天早上要做什麼？) | Domani mattina vado in biblioteca. (明天早上我去圖書館。) | 1. Ieri sono andato in biblioteca. (我昨天去了圖書館。) [wrong_time_past] - feedback: Il tuo amico chiede di domani mattina, non di ieri.<br>2. Dov'è la biblioteca? (圖書館在哪裡？) [wrong_function_location_question] - feedback: Questa è una domanda sul luogo. Non dice il tuo programma. | La domanda riguarda domani mattina. Usa il presente italiano per un programma vicino. |  |
| t2 | E poi che cosa fai? (那之後你要做什麼？) | Poi prendo un caffè vicino alla piazza. (接著我在廣場附近喝杯咖啡。) | 1. Vediamoci in piazza. (我們在廣場見吧。) [wrong_function_meeting_place] - feedback: Questo propone un luogo d'incontro. Il tuo amico chiede la tua prossima attività.<br>2. Sto prendendo un caffè adesso. (我現在正在喝咖啡。) [wrong_time_now] - feedback: Questa frase parla di adesso. La domanda riguarda il prossimo passo domani. | Poi introduce il passo successivo. Rispondi con una sola azione. | presente + poi<br>In italiano il presente puo' indicare un programma vicino. Usa poi per aggiungere il passo successivo.<br>Domani vado in biblioteca. = 明天我去圖書館。<br>Poi prendo un caffè. = 接著我喝杯咖啡。 |
| t3 | Allora sei libero prima di pranzo? (所以你午餐前有空嗎？) | Sì, sono libero verso le undici. (可以，我十一點左右有空。) | 1. No, ero libero ieri. (不，我昨天有空。) [wrong_time_past] - feedback: La domanda riguarda domani prima di pranzo, non ieri.<br>2. La biblioteca chiude alle undici? (圖書館十一點關門嗎？) [wrong_focus_opening_hours] - feedback: Il tuo amico chiede quando sei libero. | Prima di pranzo indica la tarda mattina. Usa verso piu' un'ora. |  |
| t4 | Perfetto. Ti scrivo verso le undici. (太好了。我十一點左右傳訊息給你。) | Va bene, a domani. (好，明天見。) | 1. Lo ordino di nuovo. (我會再點一次。) [wrong_scenario_ordering] - feedback: Sembra una frase per ordinare qualcosa. Qui stai confermando il piano di domani.<br>2. Vorrei cambiare camera. (我想換房間。) [wrong_scenario_hotel] - feedback: Questa è una frase da hotel. Qui basta un saluto breve. | Il programma è chiaro. Chiudi con una risposta breve e amichevole. |  |

---

## a2:it:a2_report_room_problem - Segnalare un Problema in Camera

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_report_room_problem
- Setting: reception dell’hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Segnala un piccolo problema in camera e conferma che cosa farà lo staff.

### Clean Dialogue Path

- Empleado del hotel: Buongiorno. Come posso aiutarla? (您好，我可以怎麼幫您？)
- Tú: Nella mia camera mancano gli asciugamani. Può aiutarmi? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Empleado del hotel: Sì, le porto subito degli asciugamani. (好的，我現在幫您送毛巾。)
- Tú: Mi porta degli asciugamani, giusto? (您會幫我送毛巾，對嗎？)
- Empleado del hotel: Ci vorranno circa dieci minuti. (大約需要十分鐘。)
- Tú: Circa dieci minuti, va bene. (大約十分鐘，好的。)
- Empleado del hotel: Li mandiamo in camera. (我們會送到您的房間。)
- Tú: Grazie. Aspetto in camera. (謝謝，我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Come posso aiutarla? (您好，我可以怎麼幫您？) | Nella mia camera mancano gli asciugamani. Può aiutarmi? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. Vorrei prenotare una camera. (我想訂房。) [wrong_detail_or_domain] - feedback: Ora non sta prenotando; deve spiegare un problema della camera.<br>2. Voglio un rimborso. (我想要賠償。) [forbidden_or_wrong_domain] - feedback: Il rimborso non è il compito di questo scenario A2. | Dica il problema della camera in una frase breve. |  |
| t2 | Sì, le porto subito degli asciugamani. (好的，我現在幫您送毛巾。) | Mi porta degli asciugamani, giusto? (您會幫我送毛巾，對嗎？) | 1. Mi cambia camera, giusto? (您會幫我換房，對嗎？) [wrong_detail_or_domain] - feedback: Lo staff porta asciugamani, non cambia camera.<br>2. Il treno è in ritardo, giusto? (火車晚點了，對嗎？) [forbidden_or_wrong_domain] - feedback: Questo distrattore passa a un altro dominio. | Confermi l’azione dello staff. |  |
| t3 | Ci vorranno circa dieci minuti. (大約需要十分鐘。) | Circa dieci minuti, va bene. (大約十分鐘，好的。) | 1. Lascio l’hotel tra un’ora. (我一小時後退房。) [wrong_detail_or_domain] - feedback: Questo parla del check-out, non dell’attesa.<br>2. Devo andare in ospedale. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: Ospedale è fuori contesto. | Confermi il tempo di attesa. |  |
| t4 | Li mandiamo in camera. (我們會送到您的房間。) | Grazie. Aspetto in camera. (謝謝，我在房間等。) | 1. Mi spieghi le regole di rimborso. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Il rimborso è troppo ampio qui.<br>2. Due caffè, per favore. (兩杯咖啡，謝謝。) [forbidden_or_wrong_domain] - feedback: Caffè è un altro servizio. | Chiuda aspettando nel posto giusto. |  |

---

## a2:it:a2_request_room_change - Chiedere un Cambio Camera

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_request_room_change
- Setting: reception dell’hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Dai un motivo semplice e chiedi se puoi cambiare camera.

### Clean Dialogue Path

- Empleado del hotel: Come posso aiutarla? (我可以怎麼幫您？)
- Tú: La mia camera è un po’ rumorosa. Posso cambiare camera? (我的房間有點吵，可以換房嗎？)
- Empleado del hotel: Ho controllato. Abbiamo un’altra camera disponibile. (我查了一下，還有另一間房可以換。)
- Tú: C’è un’altra camera disponibile, giusto? (有另一間房可以換，對嗎？)
- Empleado del hotel: Può spostarsi nella nuova camera tra trenta minuti. (三十分鐘後可以搬到新房間。)
- Tú: Posso spostarmi tra trenta minuti, giusto? (我三十分鐘後可以搬，對嗎？)
- Empleado del hotel: Quando è pronta, le do la nuova tessera. (房間準備好後，我會給您新的房卡。)
- Tú: Va bene. Prendo la nuova tessera quando è pronta. (好的，準備好後我拿新的房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Come posso aiutarla? (我可以怎麼幫您？) | La mia camera è un po’ rumorosa. Posso cambiare camera? (我的房間有點吵，可以換房嗎？) | 1. Posso cambiare tavolo al ristorante? (我可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: Tavolo è un altro contesto.<br>2. Voglio fare un reclamo ufficiale. (我要提出正式投訴。) [forbidden_or_wrong_domain] - feedback: Reclamo ufficiale è troppo forte per questo scenario. | Dica un motivo semplice e chieda il cambio camera. |  |
| t2 | Ho controllato. Abbiamo un’altra camera disponibile. (我查了一下，還有另一間房可以換。) | C’è un’altra camera disponibile, giusto? (有另一間房可以換，對嗎？) | 1. C’è un altro biglietto disponibile, giusto? (有另一張票可以換，對嗎？) [wrong_detail_or_domain] - feedback: Biglietto è il dominio sbagliato.<br>2. Posso anche ricevere un rimborso? (我也可以拿到賠償嗎？) [forbidden_or_wrong_domain] - feedback: Rimborso non è stato offerto. | Confermi la disponibilità della camera. |  |
| t3 | Può spostarsi nella nuova camera tra trenta minuti. (三十分鐘後可以搬到新房間。) | Posso spostarmi tra trenta minuti, giusto? (我三十分鐘後可以搬，對嗎？) | 1. Faccio il check-out tra tre ore, giusto? (我三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: Questo cambia scenario.<br>2. Mi sposto perché devo andare in ospedale. (我換房是因為要去醫院。) [forbidden_or_wrong_domain] - feedback: La ragione ospedale non è necessaria. | Confermi quando può spostarsi. |  |
| t4 | Quando è pronta, le do la nuova tessera. (房間準備好後，我會給您新的房卡。) | Va bene. Prendo la nuova tessera quando è pronta. (好的，準備好後我拿新的房卡。) | 1. No, cambio l’orario del treno. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: Treno è un altro dominio.<br>2. Parlo con la polizia adesso. (我現在要去找警察。) [forbidden_or_wrong_domain] - feedback: Polizia è troppo grave qui. | Chiuda con la nuova tessera. |  |

---

## a2:it:a2_reschedule_meeting_time - Cambiare l'orario di un incontro

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Cambiare un piano con un amico
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Devi chiedere a un amico di cambiare l'orario di un incontro.
- Learner goal: Chiedere di cambiare orario e confermare il nuovo orario.
- Support text: L'orario originale non va bene. Chiedi di cambiarlo, proponi un nuovo orario e conferma.

### Clean Dialogue Path

- Amico: Ci vediamo oggi alle tre, giusto? (我們今天三點見，對吧？)
- Tu: Scusa, possiamo cambiare orario? (不好意思，我們可以改時間嗎？)
- Amico: Certo. A che ora va bene per te? (可以。你幾點方便？)
- Tu: Possiamo spostare alle quattro? (我們可以改到四點嗎？)
- Amico: Sì, alle quattro va bene. (可以，四點沒問題。)
- Tu: Perfetto, ci vediamo alle quattro. (太好了，我們四點見。)
- Amico: Va bene. A dopo. (好，晚點見。)
- Tu: Va bene, a dopo. (好，晚點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ci vediamo oggi alle tre, giusto? (我們今天三點見，對吧？) | Scusa, possiamo cambiare orario? (不好意思，我們可以改時間嗎？) | 1. Sì, ci siamo visti ieri. (對，我們昨天見過了。) [wrong_time_past] - feedback: Il tuo amico conferma il piano di oggi, non parla di ieri.<br>2. Pago con carta. (我用卡付款。) [wrong_scenario_payment] - feedback: Questa è lingua per pagare. Qui devi chiedere dell'orario. | Il tuo amico controlla il vecchio orario. Chiedi di cambiarlo. |  |
| t2 | Certo. A che ora va bene per te? (可以。你幾點方便？) | Possiamo spostare alle quattro? (我們可以改到四點嗎？) | 1. Usiamo l'uscita quattro? (我們用四號出口嗎？) [wrong_entity_exit_number] - feedback: Uscita quattro è un dettaglio di luogo. Il tuo amico chiede un nuovo orario.<br>2. Sono andato alle quattro. (我四點去了。) [wrong_time_past] - feedback: Questa frase parla del passato. Devi chiedere di spostare l'incontro alle quattro. | Proponi un solo nuovo orario. Tienilo semplice. | spostare a + ora<br>Usa spostare a per cambiare l'orario di un incontro.<br>spostare alle quattro = 改到四點<br>spostare a domani = 改到明天 |
| t3 | Sì, alle quattro va bene. (可以，四點沒問題。) | Perfetto, ci vediamo alle quattro. (太好了，我們四點見。) | 1. Perfetto, ci vediamo alle tre. (太好了，我們三點見。) [repeats_old_time] - feedback: Il vecchio orario era le tre. Lo hai cambiato alle quattro.<br>2. Mi dà la chiave della camera? (可以給我房卡嗎？) [wrong_scenario_hotel] - feedback: Questa è lingua da hotel. Qui devi confermare il nuovo orario. | Il nuovo orario è accettato. Confermalo una volta. |  |
| t4 | Va bene. A dopo. (好，晚點見。) | Va bene, a dopo. (好，晚點見。) | 1. Perché sono in ritardo. (因為我遲到了。) [fragment_without_need] - feedback: L'orario è già cambiato. Ora non serve un frammento con il motivo.<br>2. Ho prenotato di nuovo. (我重新預約了。) [wrong_scenario_reservation] - feedback: Sembra una prenotazione, non un semplice piano con un amico. | Il piano è finito. Chiudi in modo naturale. |  |

---

## a2:it:a2_transport_delay_announcement - Capire un Annuncio di Ritardo

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_transport_delay_announcement
- Setting: Al binario
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: Ascolta l’annuncio in stazione, conferma il ritardo e scegli una risposta semplice.

### Clean Dialogue Path

- Addetto: Attenzione, per favore. Il treno per Central arriva con quindici minuti di ritardo. (請注意，開往 Central 的列車晚 15 分鐘。)
- Tu: Arriva con quindici minuti di ritardo, giusto? (確認延誤時間)
- Addetto: Se sono quindici minuti, vuole aspettare o prendere l’autobus? (如果是 15 分鐘，您要等，還是搭公車？)
- Tu: Se sono quindici minuti, aspetto. (選擇等待)
- Addetto: Il prossimo treno arriva verso le dieci e venti. (下一班車大約 10 點 20 分到。)
- Tu: Allora prendo il treno delle dieci e venti. (確認搭下一班)
- Addetto: Va bene. Aspetti su questo binario, per favore. (好的，請在這個月台等。)
- Tu: Va bene, aspetto qui. (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Attenzione, per favore. Il treno per Central arriva con quindici minuti di ritardo. (請注意，開往 Central 的列車晚 15 分鐘。) | Arriva con quindici minuti di ritardo, giusto? (確認延誤時間) | 1. Parte tra cinque minuti, giusto? (錯誤時間) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2.<br>2. Posso cambiare posto? (我可以換座位嗎？) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2. | 聽懂延誤時間 |  |
| t2 | Se sono quindici minuti, vuole aspettare o prendere l’autobus? (如果是 15 分鐘，您要等，還是搭公車？) | Se sono quindici minuti, aspetto. (選擇等待) | 1. Ho aspettato ieri. (我昨天等了。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2.<br>2. Mi dà una ricevuta, per favore? (請給我收據。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2. | 做出簡單選擇 |  |
| t3 | Il prossimo treno arriva verso le dieci e venti. (下一班車大約 10 點 20 分到。) | Allora prendo il treno delle dieci e venti. (確認搭下一班) | 1. Il negozio chiude alle dieci e venti? (店 10 點 20 分關門嗎？) - feedback: Quell’orario riguarda il treno, non un negozio.<br>2. Voglio il rimborso del biglietto dell’autobus. (我想退公車票。) - feedback: I rimborsi sono fuori da questa attività A2. | 確認下一班時間 |  |
| t4 | Va bene. Aspetti su questo binario, per favore. (好的，請在這個月台等。) | Va bene, aspetto qui. (確認等待) | 1. Mi cambi la camera, per favore. (請幫我換房間。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2.<br>2. Vorrei prenotare una visita in ospedale. (我想預約醫院。) - feedback: I distrattori verificano orario sbagliato, contesto sbagliato o una richiesta fuori dal perimetro A2. | 禮貌收尾 |  |

---

## a2:it:a2_understand_hotel_notice - Capire un Avviso dell’Hotel

- Level: A2
- Language: Italian (it)
- Scenario ID: a2_understand_hotel_notice
- Setting: hall dell’hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Capisci un breve avviso dell’hotel e conferma ora, luogo e regola.

### Clean Dialogue Path

- Empleado del hotel: Per favore, guardi l’avviso. La colazione è dalle sette alle nove del mattino. (請看這張通知。早餐時間是早上七點到九點。)
- Tú: La colazione è dalle sette alle nove del mattino, giusto? (早餐是早上七點到九點，對嗎？)
- Empleado del hotel: È nel ristorante al secondo piano. (地點在二樓餐廳。)
- Tú: Vado al ristorante al secondo piano, giusto? (我要去二樓餐廳，對嗎？)
- Empleado del hotel: All’ingresso dica solo il numero della camera. (入口只要說房號就可以。)
- Tú: All’ingresso dico solo il numero della camera, giusto? (我在入口只要說房號，對嗎？)
- Empleado del hotel: Sì, venga domani mattina. (對，請明天早上過來。)
- Tú: Va bene. Domani mattina vado al ristorante al secondo piano. (好的，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Per favore, guardi l’avviso. La colazione è dalle sette alle nove del mattino. (請看這張通知。早餐時間是早上七點到九點。) | La colazione è dalle sette alle nove del mattino, giusto? (早餐是早上七點到九點，對嗎？) | 1. La colazione è dalle sette alle nove di sera, giusto? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: Sera è il momento sbagliato.<br>2. Il check-out è alle nove del mattino, giusto? (退房時間是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: Check-out è un’informazione diversa. | Confermi la fascia oraria. |  |
| t2 | È nel ristorante al secondo piano. (地點在二樓餐廳。) | Vado al ristorante al secondo piano, giusto? (我要去二樓餐廳，對嗎？) | 1. Vado in una camera al terzo piano, giusto? (我要去三樓的房間，對嗎？) [wrong_detail_or_domain] - feedback: Terzo piano è sbagliato.<br>2. Mostro il passaporto, giusto? (我要出示護照，對嗎？) [forbidden_or_wrong_domain] - feedback: Il passaporto non è richiesto. | Confermi il luogo. |  |
| t3 | All’ingresso dica solo il numero della camera. (入口只要說房號就可以。) | All’ingresso dico solo il numero della camera, giusto? (我在入口只要說房號，對嗎？) | 1. All’ingresso parlo con la polizia, giusto? (我在入口找警察說話，對嗎？) [wrong_detail_or_domain] - feedback: Polizia è fuori contesto.<br>2. All’ingresso ricevo un rimborso, giusto? (我在入口拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Rimborso non è menzionato. | Confermi la regola semplice. |  |
| t4 | Sì, venga domani mattina. (對，請明天早上過來。) | Va bene. Domani mattina vado al ristorante al secondo piano. (好的，我明天早上去二樓餐廳。) | 1. Va bene. Stasera ritiro il bucato. (好的，我今天晚上拿洗好的衣服。) [wrong_detail_or_domain] - feedback: Bucato è un altro servizio.<br>2. Va bene. Scrivo un rapporto di incidente. (好的，我寫事故報告。) [forbidden_or_wrong_domain] - feedback: Rapporto di incidente è fuori dominio. | Riassuma ora e luogo. |  |

---
