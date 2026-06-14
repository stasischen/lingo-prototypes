# A1 German Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:de:convenience_payment_card_cash - An der Kasse bezahlen

- Level: A1
- Language: German (de)
- Scenario ID: convenience_payment_card_cash
- Setting: Kasse im kleinen Laden
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語小店櫃台結帳。用簡短、禮貌的德文回答付款方式，並完成交易。

### Clean Dialogue Path

- Kassierer/in: Zahlen Sie mit Karte oder bar? (您用卡付款還是付現？)
- Kunde/Kundin: Mit Karte, bitte. (刷卡，麻煩您。)
- Kassierer/in: Bitte hier einstecken. (請在這裡插卡。)
- Kunde/Kundin: Alles klar. (好的，了解。)
- Kassierer/in: Möchten Sie den Bon? (您要收據嗎？)
- Kunde/Kundin: Nein, danke. (不用，謝謝。)
- Kassierer/in: Danke schön. Einen schönen Tag noch. (謝謝您。祝您今天愉快。)
- Kunde/Kundin: Danke, ebenso. (謝謝，您也是。)
- Kassierer/in: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Zahlen Sie mit Karte oder bar? (您用卡付款還是付現？) | Mit Karte, bitte. (刷卡，麻煩您。) | 1. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [ordering_food_instead_of_paying] - feedback: 這是在點餐。現在收銀員問的是付款方式。<br>2. Wo ist die Toilette? (廁所在哪裡？) [asking_directions_instead_of_paying] - feedback: 這是在問方向，不是在結帳付款。 |  |  |
| t2 | Bitte hier einstecken. (請在這裡插卡。) | Alles klar. (好的，了解。) | 1. Mit Karte, bitte. (刷卡，麻煩您。) [repeated_prior_answer] - feedback: 你已經選了刷卡。現在只要確認聽懂指示。<br>2. Ich habe eine Reservierung. (我有預訂。) [wrong_scenario_hotel] - feedback: 這是飯店入住句，不是付款情境。 |  |  |
| t3 | Möchten Sie den Bon? (您要收據嗎？) | Nein, danke. (不用，謝謝。) | 1. Um drei Uhr passt. (三點可以。) [schedule_answer_to_receipt_prompt] - feedback: 這是在回答時間。現在問題是要不要收據。<br>2. Bar, bitte. (付現，麻煩您。) [wrong_payment_method_switch] - feedback: 你前面已選用卡付款。這裡要回答收據問題。 |  |  |
| t4 | Danke schön. Einen schönen Tag noch. (謝謝您。祝您今天愉快。) | Danke, ebenso. (謝謝，您也是。) | 1. Ich checke ein. (我要入住。) [wrong_scenario_hotel] - feedback: 這是飯店情境。結帳結尾只要道謝。<br>2. Links und dann geradeaus. (左邊，然後直走。) [wrong_scenario_directions] - feedback: 這是在指路，不是在回應收銀員的結尾。 |  |  |

---

## a1:de:core_repair_repeat_slowly - Um Wiederholung bitten

- Level: A1
- Language: German (de)
- Scenario ID: core_repair_repeat_slowly
- Setting: Serviceschalter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台沒聽懂一句簡短問題。先請對方重複，再請對方說慢一點，最後回答。

### Clean Dialogue Path

- Mitarbeiter: Möchten Sie eine Tüte? (您要袋子嗎？)
- Kunde: Können Sie das bitte wiederholen? (可以請您再說一次嗎？)
- Mitarbeiter: Möchten Sie eine Tüte? (您要袋子嗎？)
- Kunde: Sprechen Sie bitte langsamer. (請您說慢一點。)
- Mitarbeiter: Natürlich. Möchten Sie eine Tüte? (當然。您要袋子嗎？)
- Kunde: Nein, danke. (不用，謝謝。)
- Mitarbeiter: Alles klar. (好的。)
- Kunde: Danke. (謝謝。)
- Mitarbeiter: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Möchten Sie eine Tüte? (您要袋子嗎？) | Können Sie das bitte wiederholen? (可以請您再說一次嗎？) | 1. Ja, in Ordnung. (好，沒問題。) [blind_confirmation] - feedback: 你還沒聽懂時不要直接確認。先請對方重複。<br>2. Auf Wiedersehen. (再見。) [closing_before_understanding] - feedback: 這會直接結束對話，沒有修復理解問題。 | 沒聽懂時，先請對方再說一次。 |  |
| t2 | Möchten Sie eine Tüte? (您要袋子嗎？) | Sprechen Sie bitte langsamer. (請您說慢一點。) | 1. Eine Fahrkarte nach Berlin. (一張到柏林的票。) [travel_ticket_answer] - feedback: 這是買票用語，不是在請對方放慢速度。<br>2. Ich bin Lukas. (我是 Lukas。) [self_intro_answer] - feedback: 這是自我介紹，不是修復聽不懂的服務問題。 | 還是太快時，請對方說慢一點。 |  |
| t3 | Natürlich. Möchten Sie eine Tüte? (當然。您要袋子嗎？) | Nein, danke. (不用，謝謝。) | 1. Können Sie das wiederholen? (您可以再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經慢慢重述了。現在要回答袋子問題。<br>2. Was kostet das? (這個多少錢？) [shopping_price_question] - feedback: 這是在問價格，不是在回答是否要袋子。 | 現在聽懂了，簡短回答要或不要。 |  |
| t4 | Alles klar. (好的。) | Danke. (謝謝。) | 1. Freut mich. (很高興認識你。) [first_meeting_formula] - feedback: 這是第一次見面用語，不是服務櫃台收尾。<br>2. Mit Karte, bitte. (刷卡，謝謝。) [payment_phrase] - feedback: 這是付款方式，不是對方完成服務後的道謝。 | 最後道謝。 |  |

---

## a1:de:daily_meet_friend - Einen Freund treffen

- Level: A1
- Language: German (de)
- Scenario ID: daily_meet_friend
- Setting: Vor dem Café
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友見面。這個場景使用朋友之間的 du 語氣。

### Clean Dialogue Path

- Freund: Hallo! Da bist du ja. (嗨！你來了。)
- Freund: Hallo, Lukas! (嗨，Lukas！)
- Freund: Wir gehen ins Museum, oder? (我們去博物館，對吧？)
- Freund: Ja, ins Museum. (對，去博物館。)
- Freund: Bist du bereit? (你準備好了嗎？)
- Freund: Ja, ich bin bereit. (對，我準備好了。)
- Freund: Super. Gehen wir? (太好了。走吧？)
- Freund: Los geht's. (走吧。)
- Freund: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hallo! Da bist du ja. (嗨！你來了。) | Hallo, Lukas! (嗨，Lukas！) | 1. Guten Tag, ich möchte bezahlen. (您好，我想付款。) [service_counter_payment] - feedback: 這是服務櫃台付款語氣，不是朋友見面。<br>2. Was kostet das? (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問價格，不是在和朋友打招呼。 | 朋友之間用 Hallo 和名字很自然。 |  |
| t2 | Wir gehen ins Museum, oder? (我們去博物館，對吧？) | Ja, ins Museum. (對，去博物館。) | 1. Einen Tisch für zwei, bitte. (請給我們兩人桌。) [restaurant_service_phrase] - feedback: 這是在餐廳對服務人員說的，不是在確認朋友計畫。<br>2. Nein, Sie sind mein Chef. (不是，您是我的主管。) [overly_formal_wrong_relationship] - feedback: 這換成正式商務關係，和朋友見面不一致。 | 計畫正確時，用 Ja 加地點確認。 |  |
| t3 | Bist du bereit? (你準備好了嗎？) | Ja, ich bin bereit. (對，我準備好了。) | 1. Wo ist die Toilette? (洗手間在哪裡？) [directions_instead_of_readiness] - feedback: 這是在問地點，不是在回答是否準備好了。<br>2. Die Rechnung, bitte. (請結帳。) [restaurant_bill_request] - feedback: 這是餐廳結帳，不是朋友問你是否準備好。 | 用 Ja, ich bin bereit 回答。 |  |
| t4 | Super. Gehen wir? (太好了。走吧？) | Los geht's. (走吧。) | 1. Geben Sie mir Rabatt? (您可以給我折扣嗎？) [shopping_bargaining] - feedback: 這是購物議價，不是朋友準備出發。<br>2. Karte oder bar? (刷卡還是現金？) [cashier_payment_prompt] - feedback: 這是收銀員付款問題，不是朋友之間的下一步。 | 朋友間可用 Los geht's 回應。 |  |

---

## a1:de:daily_schedule_time - Eine Uhrzeit ausmachen

- Level: A1
- Language: German (de)
- Scenario ID: daily_schedule_time
- Setting: Kurze Nachricht unter Freunden
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你和朋友正在約見面時間。用簡短自然的德文回答幾點，並確認安排。

### Clean Dialogue Path

- Freund/in: Wann treffen wir uns? (我們什麼時候見面？)
- du: Um drei Uhr. (三點。)
- Freund/in: Passt dir das? (這樣你可以嗎？)
- du: Ja, das passt. (可以，這樣可以。)
- Freund/in: Super, dann um drei. (太好了，那就三點。)
- du: Super. (太好了。)
- Freund/in: Bis später! (待會見！)
- du: Bis später! (待會見！)
- Freund/in: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Wann treffen wir uns? (我們什麼時候見面？) | Um drei Uhr. (三點。) | 1. Vor dem Bahnhof. (在車站前面。) [location_answer_when_time_requested] - feedback: 這是地點，不是時間。對方問 Wann，要回答幾點。<br>2. Mit Karte, bitte. (刷卡，麻煩您。) [wrong_scenario_payment] - feedback: 這是付款句，不是約見面時間。 |  |  |
| t2 | Passt dir das? (這樣你可以嗎？) | Ja, das passt. (可以，這樣可以。) | 1. Nein, nie. (不，永遠不要。) [refusal_when_confirmation_expected] - feedback: 這會直接取消安排，而且語氣太強。此處要確認可以。<br>2. Ich möchte den Bon. (我要收據。) [wrong_scenario_payment] - feedback: 這是結帳情境，不是朋友約時間。 |  |  |
| t3 | Super, dann um drei. (太好了，那就三點。) | Super. (太好了。) | 1. Wo ist die Toilette? (廁所在哪裡？) [wrong_scenario_directions] - feedback: 這換成問路情境了。現在只要確認三點見。<br>2. Ich checke aus. (我要退房。) [wrong_scenario_hotel] - feedback: 這是飯店情境，不是朋友約時間。 |  |  |
| t4 | Bis später! (待會見！) | Bis später! (待會見！) | 1. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [wrong_scenario_ordering] - feedback: 這是在點飲料。朋友道別時，用待會見收尾。<br>2. Zahlen Sie mit Karte? (您用卡付款嗎？) [wrong_role_cashier_line] - feedback: 這像收銀員在說話，不符合朋友聊天情境。 |  |  |

---

## a1:de:daily_self_intro - Sich vorstellen

- Level: A1
- Language: German (de)
- Scenario ID: daily_self_intro
- Setting: Sprachaustausch
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換或課前休息區第一次見到同學。用友善的 du 語氣介紹名字和學習語言。

### Clean Dialogue Path

- Teilnehmer: Hallo, ich bin Mia. (你好，我是 Mia。)
- Neuer Teilnehmer: Hallo, ich bin Lukas. (你好，我是 Lukas。)
- Teilnehmer: Welche Sprache lernst du? (你在學哪種語言？)
- Neuer Teilnehmer: Ich lerne Deutsch. (我在學德語。)
- Teilnehmer: Schön, dich kennenzulernen. (很高興認識你。)
- Neuer Teilnehmer: Freut mich auch. (我也很高興。)
- Teilnehmer: Willkommen in der Gruppe! (歡迎加入這個小組！)
- Neuer Teilnehmer: Danke! (謝謝！)
- Teilnehmer: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hallo, ich bin Mia. (你好，我是 Mia。) | Hallo, ich bin Lukas. (你好，我是 Lukas。) | 1. Eine Fahrkarte nach Berlin, bitte. (請給我一張到柏林的票。) [travel_ticket_phrase] - feedback: 這是在買票。現在是第一次見面介紹自己。<br>2. Meine Telefonnummer ist hier. (我的電話號碼在這裡。) [private_contact_detail] - feedback: 這會分享私人聯絡方式，本情境只需要名字。 | 用 Hallo 回應，再說名字。 |  |
| t2 | Welche Sprache lernst du? (你在學哪種語言？) | Ich lerne Deutsch. (我在學德語。) | 1. Mit Karte, bitte. (刷卡，謝謝。) [payment_answer] - feedback: 這是在回答付款方式，不是在回答學什麼語言。<br>2. Können Sie das wiederholen? (您可以再說一次嗎？) [formal_repair_when_answer_expected] - feedback: 如果聽懂了問題，這裡應該直接回答；而且這句是服務場景的 Sie 語氣。 | 簡短說 Ich lerne...。 |  |
| t3 | Schön, dich kennenzulernen. (很高興認識你。) | Freut mich auch. (我也很高興。) | 1. Ich möchte bezahlen. (我想付款。) [service_payment_phrase] - feedback: 這是服務場景付款，不是第一次見面的回應。<br>2. Von welchem Gleis? (從哪個月台？) [station_question] - feedback: 這是在車站問月台，和自我介紹無關。 | 用 Freut mich auch 自然回應。 |  |
| t4 | Willkommen in der Gruppe! (歡迎加入這個小組！) | Danke! (謝謝！) | 1. Ein Wasser, bitte. (請給我一杯水。) [food_drink_order] - feedback: 這是在點飲料，不是回應歡迎。<br>2. Sprechen Sie bitte langsamer. (請您說慢一點。) [formal_repair_after_clear_close] - feedback: 這是服務語氣的修復用語；現在只要回應歡迎。 | 最後簡短道謝。 |  |

---

## a1:de:digital_battery_charging - Das Handy aufladen

- Level: A1
- Language: German (de)
- Scenario ID: digital_battery_charging
- Setting: Cafe-Theke
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店或大廳。用 Sie 服務語域問可不可以充手機、插座在哪裡，確認位置並道謝。

### Clean Dialogue Path

- Mitarbeiter: Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？)
- Gast: Darf ich hier mein Handy laden? (我可以在這裡充手機嗎？)
- Mitarbeiter: Ja, natürlich. (可以，當然。)
- Gast: Wo ist die Steckdose? (插座在哪裡？)
- Mitarbeiter: Die Steckdose ist am Tisch am Fenster. (插座在窗邊的桌子那裡。)
- Gast: Am Tisch am Fenster? (窗邊的桌子那裡嗎？)
- Mitarbeiter: Ja, genau dort. (對，就在那裡。)
- Gast: Danke schön. (謝謝您。)
- Mitarbeiter: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？) | Darf ich hier mein Handy laden? (我可以在這裡充手機嗎？) | 1. Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) [wifi_request_wrong_goal] - feedback: 這是在問 WLAN，不是在問能不能充手機。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在請求使用插座。 |  |  |
| t2 | Ja, natürlich. (可以，當然。) | Wo ist die Steckdose? (插座在哪裡？) | 1. Darf ich hier mein Handy laden? (我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意了。現在要問插座在哪裡。<br>2. Wo ist der Bahnhof? (車站在哪裡？) [station_directions_wrong_goal] - feedback: 這是在問車站方向，不是問插座。 |  |  |
| t3 | Die Steckdose ist am Tisch am Fenster. (插座在窗邊的桌子那裡。) | Am Tisch am Fenster? (窗邊的桌子那裡嗎？) | 1. Kostet das etwas? (這要收費嗎？) [payment_dispute_out_of_scope] - feedback: 本場景不談收費或費用爭議，只確認插座位置。<br>2. Ja, natürlich. (可以，當然。) [staff_role_sentence] - feedback: 這是工作人員給同意的句子，不是學習者確認位置。 |  |  |
| t4 | Ja, genau dort. (對，就在那裡。) | Danke schön. (謝謝您。) | 1. Mein Handy ist kaputt. (我的手機壞了。) [damaged_device_out_of_scope] - feedback: 這進入裝置故障；本場景只練借用插座和道謝。<br>2. Haben Sie einen Adapter? (您有轉接頭嗎？) [adapter_specs_out_of_scope] - feedback: 轉接頭和規格不在本場景範圍。 |  |  |

---

## a1:de:digital_wifi_connect - Nach dem WLAN-Passwort fragen

- Level: A1
- Language: German (de)
- Scenario ID: digital_wifi_connect
- Setting: Cafe-Theke
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店或飯店大廳。用 Sie 服務語域詢問 Wi-Fi 密碼，並說手機連不上。

### Clean Dialogue Path

- Mitarbeiter: Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？)
- Gast: Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？)
- Mitarbeiter: Das Passwort ist haus2026. (密碼是 haus2026。)
- Gast: Danke, ich probiere es. (謝謝，我試試看。)
- Mitarbeiter: Funktioniert es? (可以用嗎？)
- Gast: Nein, es verbindet sich nicht. (不，連不上。)
- Mitarbeiter: Bitte versuchen Sie es in einer Minute noch einmal. (請一分鐘後再試一次。)
- Gast: Okay, danke. (好的，謝謝。)
- Mitarbeiter: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？) | Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) | 1. Die Rechnung, bitte. (請結帳。) [bill_request_wrong_goal] - feedback: 這是在結帳，不是在問 Wi-Fi。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [food_order_wrong_goal] - feedback: 這是在點餐。現在目標是取得 Wi-Fi 密碼。 |  |  |
| t2 | Das Passwort ist haus2026. (密碼是 haus2026。) | Danke, ich probiere es. (謝謝，我試試看。) | 1. Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經給密碼了。現在要表示你會試試看。<br>2. Wo ist die Toilette? (洗手間在哪裡？) [directions_request_wrong_goal] - feedback: 這是在問洗手間，偏離 Wi-Fi 連線流程。 |  |  |
| t3 | Funktioniert es? (可以用嗎？) | Nein, es verbindet sich nicht. (不，連不上。) | 1. Ja, danke. (可以，謝謝。) [false_confirmation] - feedback: 如果實際連不上，不能回答可以。要說明連線失敗。<br>2. Kann ich bezahlen? (我可以付款嗎？) [payment_request_wrong_goal] - feedback: 這是付款問題，不是回報 Wi-Fi 連不上。 |  |  |
| t4 | Bitte versuchen Sie es in einer Minute noch einmal. (請一分鐘後再試一次。) | Okay, danke. (好的，謝謝。) | 1. Ist der Router sicher? (路由器安全嗎？) [technical_security_out_of_scope] - feedback: 這進入技術與安全設定；本場景只練簡單連不上和道謝。<br>2. Ich möchte auschecken. (我想退房。) [hotel_checkout_wrong_scenario] - feedback: 這是飯店退房句，不是 Wi-Fi 協助結尾。 |  |  |

---

## a1:de:food_bill_payment - Die Rechnung bezahlen

- Level: A1
- Language: German (de)
- Scenario ID: food_bill_payment
- Setting: Café-Kasse
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語區咖啡館或簡單餐廳結帳。使用 Sie 服務語氣，回答現金或刷卡。

### Clean Dialogue Path

- Kassierer: Ja, bitte? (您好，請說？)
- Gast: Die Rechnung, bitte. (請結帳。)
- Kassierer: Gern. Zahlen Sie mit Karte oder bar? (好的。您刷卡還是付現？)
- Gast: Mit Karte, bitte. (刷卡，謝謝。)
- Kassierer: Möchten Sie den Kassenbon? (您要收據嗎？)
- Gast: Ja, bitte. (要，謝謝。)
- Kassierer: Hier ist Ihr Bon. Einen schönen Tag. (這是您的收據。祝您有美好的一天。)
- Gast: Danke, gleichfalls. (謝謝，您也是。)
- Kassierer: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ja, bitte? (您好，請說？) | Die Rechnung, bitte. (請結帳。) | 1. Ich hätte gern einen Kaffee. (我想要一杯咖啡。) [ordering_more_food] - feedback: 這是在繼續點餐。現在目標是結帳。<br>2. Wo ist der Bahnhof? (火車站在哪裡？) [directions_request] - feedback: 這是在問路，不是在餐飲場所結帳。 | 請結帳時說 Die Rechnung, bitte。 |  |
| t2 | Gern. Zahlen Sie mit Karte oder bar? (好的。您刷卡還是付現？) | Mit Karte, bitte. (刷卡，謝謝。) | 1. Was kostet das? (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問商品價格。現在是回答付款方式。<br>2. Ich möchte die Rechnung in vier gleiche Teile teilen. (我想把帳單平均分成四份。) [overlong_split_bill] - feedback: 這太複雜，超出這個 A1 付款回合。 | 回答付款方式即可。 |  |
| t3 | Möchten Sie den Kassenbon? (您要收據嗎？) | Ja, bitte. (要，謝謝。) | 1. Einen Tisch für zwei. (兩人桌。) [restaurant_arrival_phrase] - feedback: 這是進餐廳時說的，不是在回答是否要收據。<br>2. Wann gibt es Frühstück? (早餐什麼時候供應？) [hotel_breakfast_question] - feedback: 這是飯店早餐問題，和結帳收據無關。 | 可以簡短回答 Ja, bitte 或 Nein, danke。 |  |
| t4 | Hier ist Ihr Bon. Einen schönen Tag. (這是您的收據。祝您有美好的一天。) | Danke, gleichfalls. (謝謝，您也是。) | 1. Wir sehen uns im Museum. (我們博物館見。) [friend_meeting_close] - feedback: 這是朋友見面安排，不是和收銀員結帳收尾。<br>2. Ich nehme das. (我買這個。) [shopping_purchase_phrase] - feedback: 這是購物確認購買，不是餐飲結帳後道別。 | 最後禮貌道謝和道別。 |  |

---

## a1:de:food_coffee_ordering - Einen Kaffee bestellen

- Level: A1
- Language: German (de)
- Scenario ID: food_coffee_ordering
- Setting: Café-Theke
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台。用簡短、禮貌的德文點一杯飲料，並回答服務人員的選項問題。

### Clean Dialogue Path

- Barista: Guten Tag. Was möchten Sie trinken? (您好。您想喝什麼？)
- Kunde/Kundin: Einen Kaffee, bitte. (一杯咖啡，謝謝。)
- Barista: Zum Mitnehmen? (要外帶嗎？)
- Kunde/Kundin: Ja, bitte. (是的，麻煩您。)
- Barista: Das macht drei Euro. (總共三歐元。)
- Kunde/Kundin: Okay. (好的。)
- Barista: Bitte warten Sie kurz dort. (請在那邊稍等。)
- Kunde/Kundin: Danke. (謝謝。)
- Barista: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Was möchten Sie trinken? (您好。您想喝什麼？) | Einen Kaffee, bitte. (一杯咖啡，謝謝。) | 1. Wo ist das Hotel? (飯店在哪裡？) [wrong_scenario] - feedback: 這是在問地點，不是在點咖啡。先用 einen Kaffee, bitte 完成點餐。<br>2. Nein, ich trinke nicht. (不，我不喝。) [refusal_when_order_expected] - feedback: 這像是在拒絕服務。此回合需要說出要點的飲料。 |  |  |
| t2 | Zum Mitnehmen? (要外帶嗎？) | Ja, bitte. (是的，麻煩您。) | 1. Ich habe eine Reservierung. (我有預訂。) [wrong_scenario] - feedback: 這是飯店入住的句子。咖啡外帶問題只需要簡短回答。<br>2. Sehr groß, mit Milch, ohne Zucker, aber kalt. (很大杯、加牛奶、不加糖、但是冰的。) [overlong_non_a1] - feedback: 資訊太多，超出這個 A1 回合。先練 Ja, bitte. 這種短回答。 |  |  |
| t3 | Das macht drei Euro. (總共三歐元。) | Okay. (好的。) | 1. Links und dann geradeaus. (左邊，然後直走。) [mismatched_service_option] - feedback: 這是在給方向，不是在回應價格。<br>2. Ich checke aus. (我要退房。) [wrong_scenario] - feedback: 這是飯店退房句子，和咖啡付款不符合。 |  |  |
| t4 | Bitte warten Sie kurz dort. (請在那邊稍等。) | Danke. (謝謝。) | 1. Ein Zimmer, bitte. (請給我一間房。) [wrong_location_request] - feedback: 這像是在飯店櫃台。咖啡店結尾只要道謝。<br>2. Ich brauche die Toilette sofort. (我現在需要廁所。) [wrong_scenario] - feedback: 這換成了找洗手間的情境，不是完成咖啡點餐。 |  |  |

---

## a1:de:food_restaurant_ordering - Im Restaurant bestellen

- Level: A1
- Language: German (de)
- Scenario ID: food_restaurant_ordering
- Setting: Restauranttisch
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語區的一間簡單餐廳。使用一致的 Sie 服務語氣，回答人數並點一道餐。

### Clean Dialogue Path

- Servicekraft: Guten Abend. Sind Sie bereit zu bestellen? (晚上好。您準備好點餐了嗎？)
- Gast: Ja, wir sind zu zweit. (是的，我們兩位。)
- Servicekraft: Was möchten Sie essen? (您想吃什麼？)
- Gast: Ich hätte gern eine Suppe, bitte. (我想要一份湯，謝謝。)
- Servicekraft: Eine Suppe, richtig? (一份湯，對嗎？)
- Gast: Ja, danke. (是的，謝謝。)
- Servicekraft: Sehr gern. Das kommt gleich. (好的。餐點馬上來。)
- Gast: Danke. (謝謝。)
- Servicekraft: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Abend. Sind Sie bereit zu bestellen? (晚上好。您準備好點餐了嗎？) | Ja, wir sind zu zweit. (是的，我們兩位。) | 1. Die Rechnung, bitte. (請結帳。) [asking_bill_before_ordering] - feedback: 這是在還沒點餐前就要結帳。現在要回答是否準備好。<br>2. Einen Kaffee zum Mitnehmen, bitte. (一杯外帶咖啡，謝謝。) [cafe_only_request] - feedback: 這像咖啡店點飲料。現在是在餐廳回答服務人員。 | 服務人員用 Sie。回答時保持簡短禮貌。 |  |
| t2 | Was möchten Sie essen? (您想吃什麼？) | Ich hätte gern eine Suppe, bitte. (我想要一份湯，謝謝。) | 1. Zum Mitnehmen, bitte. (外帶，謝謝。) [takeout_answer_in_dine_in_context] - feedback: 這是在回答外帶選項，不是在點一道餐。<br>2. Eine große Pizza, zwei Suppen, ohne Käse, ohne Salz und sehr schnell. (一個大披薩、兩份湯、不加起司、不加鹽，還要很快。) [overlong_customization] - feedback: 這太長，超出 A1 回合。先練習點一道簡單餐點。 | 德文點餐可以用 Ich hätte gern...，禮貌又自然。 | Ich hätte gern...<br>Ich hätte gern... 是德語點餐常用的禮貌句型。<br>Ich hätte gern eine Suppe. = 我想要一份湯。<br>Ich nehme die Pasta. = 我要義大利麵。 |
| t3 | Eine Suppe, richtig? (一份湯，對嗎？) | Ja, danke. (是的，謝謝。) | 1. Nein, einen Kaffee. (不是，一杯咖啡。) [wrong_item_confirmation] - feedback: 這把餐點換成咖啡了。若訂單正確，直接確認即可。<br>2. Ich zahle mit Karte. (我用卡付款。) [payment_answer_too_early] - feedback: 這是付款資訊。現在服務人員只是在確認餐點。 | 餐點正確時，用 Ja, danke 確認即可。 |  |
| t4 | Sehr gern. Das kommt gleich. (好的。餐點馬上來。) | Danke. (謝謝。) | 1. Wo ist Gleis zwei? (二號月台在哪裡？) [wrong_scenario_request] - feedback: 這是車站問路，不是餐廳點餐收尾。<br>2. Wann gibt es Frühstück? (早餐什麼時候供應？) [hotel_question] - feedback: 這是飯店早餐問題。餐點已確認，只要道謝。 | 最後簡短道謝。 |  |

---

## a1:de:hotel_checkout - Im Hotel auschecken

- Level: A1
- Language: German (de)
- Scenario ID: hotel_checkout
- Setting: Hotelrezeption
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。用 Sie 服務語域說明要退房、提供房號、交回房卡。

### Clean Dialogue Path

- Rezeption: Guten Morgen. Wie kann ich Ihnen helfen? (早安。請問有什麼可以幫您？)
- Gast: Ich möchte auschecken. (我想退房。)
- Rezeption: Gerne. Ihre Zimmernummer, bitte? (好的。請問您的房號？)
- Gast: Zimmer 204. (204 號房。)
- Rezeption: Danke. Haben Sie die Zimmerkarte? (謝謝。您有房卡嗎？)
- Gast: Ja, hier ist die Zimmerkarte. (有，房卡在這裡。)
- Rezeption: Danke. Der Check-out ist erledigt. (謝謝。退房已完成。)
- Gast: Vielen Dank. (非常謝謝。)
- Rezeption: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Morgen. Wie kann ich Ihnen helfen? (早安。請問有什麼可以幫您？) | Ich möchte auschecken. (我想退房。) | 1. Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這是在問網路密碼，不是在辦理退房。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [food_order_wrong_scenario] - feedback: 這是點飲料。飯店櫃台退房要說 auschecken。 |  |  |
| t2 | Gerne. Ihre Zimmernummer, bitte? (好的。請問您的房號？) | Zimmer 204. (204 號房。) | 1. Gleis zwei. (第二月台。) [station_number_not_room] - feedback: Gleis 是車站月台，不是飯店房號。<br>2. Eine Fahrkarte, bitte. (一張票，謝謝。) [ticket_purchase_wrong_scenario] - feedback: 這是在買票。櫃台現在問的是房號。 |  |  |
| t3 | Danke. Haben Sie die Zimmerkarte? (謝謝。您有房卡嗎？) | Ja, hier ist die Zimmerkarte. (有，房卡在這裡。) | 1. Nein, ich behalte sie. (不，我留著。) [refusal_instead_of_handover] - feedback: 退房流程需要交回房卡；這裡不應拒絕。<br>2. Auf den Namen Chen. (用 Chen 這個名字。) [checkin_name_answer] - feedback: 這是入住時回答訂房姓名，不是交房卡。 |  |  |
| t4 | Danke. Der Check-out ist erledigt. (謝謝。退房已完成。) | Vielen Dank. (非常謝謝。) | 1. Was kostet das extra? (這要額外多少錢？) [extra_charge_dispute_out_of_scope] - feedback: 這會進入額外費用或爭議；本場景只練基本退房。<br>2. Wo ist das Gleis? (月台在哪裡？) [station_question_wrong_scenario] - feedback: 這是車站問題，不是飯店退房結尾。 |  |  |

---

## a1:de:hotel_wifi_breakfast - WLAN und Frühstück im Hotel

- Level: A1
- Language: German (de)
- Scenario ID: hotel_wifi_breakfast
- Setting: Hotelrezeption
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。用簡短德文詢問 WLAN 密碼和早餐時間地點。

### Clean Dialogue Path

- Rezeption: Guten Abend. Wie kann ich Ihnen helfen? (晚上好。需要什麼協助？)
- Gast: Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？)
- Rezeption: Es steht auf der Zimmerkarte. (寫在房卡上。)
- Gast: Auf der Zimmerkarte, danke. (在房卡上，謝謝。)
- Rezeption: Brauchen Sie noch etwas? (您還需要其他東西嗎？)
- Gast: Wann gibt es Frühstück? (早餐什麼時候供應？)
- Rezeption: Ab sieben Uhr, im ersten Stock. (七點開始，在二樓。)
- Gast: Ab sieben Uhr, im ersten Stock. Danke. (七點開始，在二樓。謝謝。)
- Rezeption: Sehr gern. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Abend. Wie kann ich Ihnen helfen? (晚上好。需要什麼協助？) | Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) | 1. Ich brauche eine neue Zimmerkarte. (我需要一張新的房卡。) [room_key_instead_of_wifi] - feedback: 這是在要房卡。你的目標是問 Wi-Fi 密碼。<br>2. Ich hätte gern eine Suppe. (我想要一份湯。) [restaurant_order_answer] - feedback: 這是餐廳點餐。現在是在飯店櫃台問 Wi-Fi。 | 飯店櫃台用 Sie 語氣。直接問 WLAN 密碼即可。 |  |
| t2 | Es steht auf der Zimmerkarte. (寫在房卡上。) | Auf der Zimmerkarte, danke. (在房卡上，謝謝。) | 1. Um zehn Uhr an der Rezeption. (十點在櫃台。) [wrong_place_time_confirmation] - feedback: 這混入時間和地點，沒有確認 Wi-Fi 資訊在房卡上。<br>2. Ich bezahle jetzt. (我現在付款。) [checkout_payment_phrase] - feedback: 這是付款句，不是在確認 Wi-Fi 密碼位置。 | auf der Zimmerkarte 表示在房卡上。 | auf der Zimmerkarte<br>auf der Zimmerkarte 表示「在房卡上」。<br>Es steht auf der Zimmerkarte. = 寫在房卡上。<br>Das Passwort ist hier. = 密碼在這裡。 |
| t3 | Brauchen Sie noch etwas? (您還需要其他東西嗎？) | Wann gibt es Frühstück? (早餐什麼時候供應？) | 1. Einen Tisch für zwei, bitte. (兩位的桌子，謝謝。) [restaurant_request] - feedback: 這像是在餐廳要座位。現在要問飯店早餐時間。<br>2. Wo ist Gleis zwei? (二號月台在哪裡？) [station_question] - feedback: 這是車站問路。飯店櫃台現在要問早餐資訊。 | 接著問早餐時間。 |  |
| t4 | Ab sieben Uhr, im ersten Stock. (七點開始，在二樓。) | Ab sieben Uhr, im ersten Stock. Danke. (七點開始，在二樓。謝謝。) | 1. Um zehn Uhr, im Zimmer. (十點，在房間。) [wrong_time_place] - feedback: 時間和地點都聽錯了。服務人員說七點開始，地點是 im ersten Stock；本包用中文標成二樓。<br>2. Ich checke aus. (我要退房。) [checkout_payment_phrase] - feedback: 這是退房情境，不是在確認早餐資訊。 | 確認關鍵資訊：七點開始，地點是 im ersten Stock；本包用中文標成二樓。 |  |

---

## a1:de:problem_lost_item - Sagen, dass ein Gegenstand verloren ist

- Level: A1
- Language: German (de)
- Scenario ID: problem_lost_item
- Setting: Infoschalter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。用 Sie 服務語域說小物品不見了、回答可能在哪裡、確認下一步並道謝。

### Clean Dialogue Path

- Mitarbeiter: Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？)
- Gast: Ich habe meine Mütze verloren. (我的帽子不見了。)
- Mitarbeiter: Wo haben Sie sie verloren? (您在哪裡弄丟的？)
- Gast: Vielleicht im Cafe. (可能在咖啡店。)
- Mitarbeiter: Bitte fragen Sie im Fundbüro, dort links. (請到左邊的失物招領處問問。)
- Gast: Im Fundbüro, dort links? (左邊的失物招領處嗎？)
- Mitarbeiter: Ja, genau. Fragen Sie dort. (對，沒錯。請在那裡問。)
- Gast: Okay, danke schön. (好的，謝謝您。)
- Mitarbeiter: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？) | Ich habe meine Mütze verloren. (我的帽子不見了。) | 1. Wie viel kostet das? (這多少錢？) [price_question_wrong_goal] - feedback: 這是在問價格，不是在說遺失物品。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在尋找遺失物。 |  |  |
| t2 | Wo haben Sie sie verloren? (您在哪裡弄丟的？) | Vielleicht im Cafe. (可能在咖啡店。) | 1. Um drei Uhr. (三點。) [time_answer_wrong_slot] - feedback: 對方問地點，不是問時間。<br>2. Nein, danke. (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕，沒有回答可能遺失的地點。 |  |  |
| t3 | Bitte fragen Sie im Fundbüro, dort links. (請到左邊的失物招領處問問。) | Im Fundbüro, dort links? (左邊的失物招領處嗎？) | 1. Ich habe meine Mütze verloren. (我的帽子不見了。) [repeated_lost_statement] - feedback: 已經說過物品不見了。現在要確認去哪裡問。<br>2. Muss ich zur Polizei? (我需要去警察局嗎？) [police_report_out_of_scope] - feedback: 本場景不處理報案，只練低風險失物詢問。 |  |  |
| t4 | Ja, genau. Fragen Sie dort. (對，沒錯。請在那裡問。) | Okay, danke schön. (好的，謝謝您。) | 1. Jemand hat sie gestohlen. (有人偷了它。) [theft_accusation_out_of_scope] - feedback: 不要把低風險失物場景變成偷竊指控。<br>2. Sie müssen zahlen. (您必須賠錢。) [compensation_out_of_scope] - feedback: 賠償或責任爭議不在本 A1 場景範圍。 |  |  |

---

## a1:de:shopping_ask_price - Nach dem Preis fragen

- Level: A1
- Language: German (de)
- Scenario ID: shopping_ask_price
- Setting: Kleiner Laden
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語區的小店。用一致的 Sie 服務語氣問這個東西多少錢，並回應價格。

### Clean Dialogue Path

- Verkäuferin: Guten Tag. Kann ich Ihnen helfen? (您好。我可以幫您嗎？)
- Kunde: Entschuldigung, was kostet das? (不好意思，這個多少錢？)
- Verkäuferin: Das kostet acht Euro. (這個八歐元。)
- Kunde: Gut, ich nehme das. (好的，我買這個。)
- Verkäuferin: Das hier, richtig? (這個，對嗎？)
- Kunde: Ja, danke. (是的，謝謝。)
- Verkäuferin: Sehr gern. Danke. (好的，謝謝。)
- Kunde: Danke. (謝謝。)
- Verkäuferin: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Kann ich Ihnen helfen? (您好。我可以幫您嗎？) | Entschuldigung, was kostet das? (不好意思，這個多少錢？) | 1. Wo ist der Bahnhof? (火車站在哪裡？) [directions_instead_of_price] - feedback: 這是在問路。現在要在商店問價格。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [ordering_food_instead_of_price] - feedback: 這像在咖啡店點飲料，不是在問商品價格。 | 服務情境用 Ihnen。問價格可說 Was kostet das? |  |
| t2 | Das kostet acht Euro. (這個八歐元。) | Gut, ich nehme das. (好的，我買這個。) | 1. Ich zahle mit Karte? (我用卡付款嗎？) [payment_method_too_early] - feedback: 這直接跳到付款方式。先回應是否要買。<br>2. Ich nehme drei große. (我要三個大的。) [wrong_quantity_answer] - feedback: 這加入數量和尺寸，超出這個一件商品的 A1 場景。 | 要買就用 Ich nehme das。 |  |
| t3 | Das hier, richtig? (這個，對嗎？) | Ja, danke. (是的，謝謝。) | 1. Nein, wo ist die Toilette? (不是，洗手間在哪裡？) [restroom_request] - feedback: 這換成問洗手間。店員是在確認商品。<br>2. Das ist zu teuer, geben Sie mir bitte einen großen Rabatt. (太貴了，請給我很大的折扣。) [overlong_bargaining] - feedback: 這是複雜議價，不適合這個 A1 價格場景。 | 商品正確時簡短確認。 |  |
| t4 | Sehr gern. Danke. (好的，謝謝。) | Danke. (謝謝。) | 1. Die Rechnung, bitte. (請結帳。) [restaurant_bill_request] - feedback: 這是餐廳結帳說法，不是商店價格場景的收尾。<br>2. Wann treffen wir uns? (我們什麼時候見面？) [friend_meeting_request] - feedback: 這是在約朋友，不是在商店完成購買。 | 最後道謝即可。 |  |

---

## a1:de:social_running_late - Sagen, dass du dich verspätest

- Level: A1
- Language: German (de)
- Scenario ID: social_running_late
- Setting: Nachricht an einen Freund
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你要跟朋友見面，但會晚到。用朋友間 du 語域說抱歉、晚到、幾分鐘、謝謝和待會見。

### Clean Dialogue Path

- Freund: Hey, wo bist du? (嘿，你在哪？)
- Du: Sorry, ich komme etwas später. (抱歉，我會晚一點到。)
- Freund: Wie viele Minuten? (幾分鐘？)
- Du: Noch zehn Minuten. (還要十分鐘。)
- Freund: Okay, ich warte. (好，我等你。)
- Du: Danke fürs Warten. (謝謝你等我。)
- Freund: Bis gleich. (待會見。)
- Du: Bis gleich. (待會見。)
- Freund: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hey, wo bist du? (嘿，你在哪？) | Sorry, ich komme etwas später. (抱歉，我會晚一點到。) | 1. Die Rechnung, bitte. (請結帳。) [payment_wrong_goal] - feedback: 這是在餐廳付款，不是在告訴朋友會晚到。<br>2. Guten Tag. Wie kann ich Ihnen helfen? (您好。請問有什麼可以幫您？) [service_register_wrong_context] - feedback: 這是 Sie 服務語域；朋友訊息要用自然的 du 語氣。 |  |  |
| t2 | Wie viele Minuten? (幾分鐘？) | Noch zehn Minuten. (還要十分鐘。) | 1. Gleis zwei. (第二月台。) [place_number_wrong_answer] - feedback: 對方問幾分鐘，不是問地點或月台。<br>2. Nein, danke. (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕幫助，沒有回答時間。 |  |  |
| t3 | Okay, ich warte. (好，我等你。) | Danke fürs Warten. (謝謝你等我。) | 1. Sorry, ich komme etwas später. (抱歉，我會晚一點到。) [repeated_late_message] - feedback: 已經說過會晚到了。現在要謝謝對方等你。<br>2. Danke für Ihren Service. (謝謝您的服務。) [overformal_service_thanks] - feedback: 這是服務情境的 Sie 語氣，不像朋友間的感謝。 |  |  |
| t4 | Bis gleich. (待會見。) | Bis gleich. (待會見。) | 1. Ich stehe vor der blauen Tür. (我站在藍色門前。) [exact_location_out_of_scope] - feedback: 本場景不練即時精準定位，只練晚到和時間。<br>2. Warum wartest du nicht? (你為什麼不等？) [conflict_blame_out_of_scope] - feedback: 這會變成責怪或衝突；本場景要平和收尾。 |  |  |

---

## a1:de:travel_hotel_checkin - Im Hotel einchecken

- Level: A1
- Language: German (de)
- Scenario ID: travel_hotel_checkin
- Setting: Hotelrezeption
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你到飯店櫃台辦理入住。用簡短德文說你有預訂，並回答姓名問題。

### Clean Dialogue Path

- Rezeption: Guten Abend. Haben Sie eine Reservierung? (晚安。您有預訂嗎？)
- Gast: Ja, ich habe eine Reservierung. (是的，我有預訂。)
- Rezeption: Auf welchen Namen? (是用哪個名字預訂的？)
- Gast: Auf den Namen Chen. (用 Chen 這個名字。)
- Rezeption: Danke. Ich habe Ihre Reservierung gefunden. (謝謝。我找到您的預訂了。)
- Gast: Danke. (謝謝。)
- Rezeption: Hier ist Ihre Zimmerkarte. Zimmer 204. (這是您的房卡。204 號房。)
- Gast: Vielen Dank. (非常謝謝。)
- Rezeption: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Abend. Haben Sie eine Reservierung? (晚安。您有預訂嗎？) | Ja, ich habe eine Reservierung. (是的，我有預訂。) | 1. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [restaurant_cafe_request] - feedback: 這是咖啡店點餐，不是飯店入住。<br>2. Wo ist die Toilette? (洗手間在哪裡？) [directions_request] - feedback: 這是在問路。現在櫃台問的是你是否有預訂。 |  |  |
| t2 | Auf welchen Namen? (是用哪個名字預訂的？) | Auf den Namen Chen. (用 Chen 這個名字。) | 1. Ich checke aus. (我要退房。) [checkout_instead_of_checkin] - feedback: 這是退房，不是提供入住姓名。<br>2. Ich komme aus Taiwan und bleibe vielleicht zwei oder drei Tage. (我來自台灣，可能住兩三天。) [overly_complex_explanation] - feedback: 資訊太多。A1 回合只要說預訂姓名。 |  |  |
| t3 | Danke. Ich habe Ihre Reservierung gefunden. (謝謝。我找到您的預訂了。) | Danke. (謝謝。) | 1. Zum Mitnehmen? (要外帶嗎？) [wrong_scenario] - feedback: 這是咖啡店服務問題，和飯店確認不合。<br>2. Links und dann rechts. (先左邊再右邊。) [directions_request] - feedback: 這是在給方向，不是在回應預訂確認。 |  |  |
| t4 | Hier ist Ihre Zimmerkarte. Zimmer 204. (這是您的房卡。204 號房。) | Vielen Dank. (非常謝謝。) | 1. Ich möchte bezahlen. (我想付款。) [wrong_flow] - feedback: 櫃台已經給房卡了，不需要切到付款句。<br>2. Noch einen Kaffee, bitte. (再一杯咖啡，謝謝。) [restaurant_cafe_request] - feedback: 這又回到咖啡店點餐，不是飯店入住結尾。 |  |  |

---

## a1:de:travel_restroom_directions - Nach der Toilette fragen

- Level: A1
- Language: German (de)
- Scenario ID: travel_restroom_directions
- Setting: Öffentlicher Ort
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在公共場所，需要問洗手間在哪裡。用簡短禮貌的德文問路，並理解簡單方向。

### Clean Dialogue Path

- Mitarbeiter/in: Hallo. Kann ich Ihnen helfen? (您好。我可以幫您嗎？)
- Besucher/in: Entschuldigung, wo ist die Toilette? (不好意思，洗手間在哪裡？)
- Mitarbeiter/in: Geradeaus und dann links. (直走，然後左邊。)
- Besucher/in: Geradeaus und links? (直走然後左邊嗎？)
- Mitarbeiter/in: Ja, genau. (對，沒錯。)
- Besucher/in: Danke. (謝謝。)
- Mitarbeiter/in: Gern. (不客氣。)
- Besucher/in: Auf Wiedersehen. (再見。)
- Mitarbeiter/in: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hallo. Kann ich Ihnen helfen? (您好。我可以幫您嗎？) | Entschuldigung, wo ist die Toilette? (不好意思，洗手間在哪裡？) | 1. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [price_order_payment] - feedback: 這是在點咖啡，不是在問洗手間位置。<br>2. Ich habe eine Reservierung. (我有預訂。) [wrong_place_noun] - feedback: 這是飯店入住句。找洗手間要問 wo ist die Toilette? |  |  |
| t2 | Geradeaus und dann links. (直走，然後左邊。) | Geradeaus und links? (直走然後左邊嗎？) | 1. Mit Karte, bitte. (用卡，謝謝。) [price_order_payment] - feedback: 這是在付款，不是在確認方向。<br>2. Ich bin aus Taiwan. (我來自台灣。) [personal_status_instead_of_location] - feedback: 這是個人資訊，沒有確認你聽到的方向。 |  |  |
| t3 | Ja, genau. (對，沒錯。) | Danke. (謝謝。) | 1. Zum Mitnehmen? (要外帶嗎？) [wrong_scenario] - feedback: 這是咖啡店問題，不是問路後的回應。<br>2. Ich checke ein. (我要入住。) [wrong_scenario] - feedback: 這是飯店入住，不是完成問路。 |  |  |
| t4 | Gern. (不客氣。) | Auf Wiedersehen. (再見。) | 1. Ich möchte ein Zimmer. (我想要一間房。) [wrong_place_noun] - feedback: 這是飯店需求，不是公共場所問路的收尾。<br>2. Die Toilette kostet drei Euro. (洗手間三歐元。) [price_order_payment] - feedback: 這把情境轉成價格付款，和本回合方向理解不符。 |  |  |

---

## a1:de:travel_station_directions - Am Bahnhof nach dem Weg fragen

- Level: A1
- Language: German (de)
- Scenario ID: travel_station_directions
- Setting: Bahnhof
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語區車站。用 Entschuldigung 開頭，詢問二號月台並確認簡短方向。

### Clean Dialogue Path

- Bahnhofspersonal: Ja, bitte? (您好，請說。)
- Reisende Person: Entschuldigung, wo ist Gleis zwei? (不好意思，二號月台在哪裡？)
- Bahnhofspersonal: Gehen Sie geradeaus und dann nach rechts. (請直走，然後往右。)
- Reisende Person: Geradeaus und dann nach rechts. (直走，然後往右。)
- Bahnhofspersonal: Nehmen Sie dann die Treppe. (然後走樓梯。)
- Reisende Person: Okay, danke. (好的，謝謝。)
- Bahnhofspersonal: Gern. (不客氣。)
- Reisende Person: Danke. (謝謝。)
- Bahnhofspersonal: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ja, bitte? (您好，請說。) | Entschuldigung, wo ist Gleis zwei? (不好意思，二號月台在哪裡？) | 1. Wo ist die Toilette? (洗手間在哪裡？) [restroom_question_wrong_goal] - feedback: 這是在問洗手間。你的目標是找到二號月台。<br>2. Ein Taxi zum Zentrum, bitte. (請叫一台去市中心的計程車。) [taxi_destination_answer] - feedback: 這換成搭計程車的情境。現在要問車站月台方向。 | 問路先用 Entschuldigung，再說要找的地方。 |  |
| t2 | Gehen Sie geradeaus und dann nach rechts. (請直走，然後往右。) | Geradeaus und dann nach rechts. (直走，然後往右。) | 1. Nach links und dann nach unten. (往左，然後往下。) [wrong_direction] - feedback: 方向聽錯了。服務人員說直走，然後往右。<br>2. Ich zahle mit Karte. (我用卡付款。) [payment_answer] - feedback: 這是付款句，不是在確認方向。 | 抓住 geradeaus 和 rechts 兩個方向詞。 | Geradeaus / nach rechts<br>geradeaus 是直走，nach rechts 是往右。<br>Gehen Sie geradeaus. = 請直走。<br>Dann nach rechts. = 然後往右。 |
| t3 | Nehmen Sie dann die Treppe. (然後走樓梯。) | Okay, danke. (好的，謝謝。) | 1. Gleis fünf, richtig? (五號月台，對嗎？) [wrong_platform_number] - feedback: 月台號碼變錯了。你問的是二號月台。<br>2. Ich muss umsteigen, ein Ticket kaufen und ins Zentrum fahren. (我要轉車、買票，然後去市中心。) [over_detailed_route] - feedback: 這太長，也不是本回合需要的確認。先簡短回應。 | 聽懂方向後，用 kurz 確認或道謝。 |  |
| t4 | Gern. (不客氣。) | Danke. (謝謝。) | 1. Ich hätte gern eine Suppe. (我想要一份湯。) [restaurant_order] - feedback: 這是餐廳點餐，不是車站問路結尾。<br>2. Wie ist das WLAN-Passwort? (Wi-Fi 密碼是什麼？) [hotel_question] - feedback: 這是飯店問題。你已經拿到車站方向，只要道謝。 | 問路結尾再道謝即可。 |  |

---

## a1:de:travel_taxi_destination - Im Taxi das Ziel sagen

- Level: A1
- Language: German (de)
- Scenario ID: travel_taxi_destination
- Setting: Taxi
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你上了計程車。用 Sie 服務語域說目的地、確認，並聽懂大概時間。

### Clean Dialogue Path

- Fahrer: Guten Tag. Wohin möchten Sie? (您好。您想去哪裡？)
- Fahrgast: Zum Hotel Adler, bitte. (到阿德勒飯店，謝謝。)
- Fahrer: Zum Hotel Adler, richtig? (到阿德勒飯店，對嗎？)
- Fahrgast: Ja, genau. (對，沒錯。)
- Fahrer: Gut. Es dauert ungefähr zehn Minuten. (好的。大約需要十分鐘。)
- Fahrgast: Alles klar. (了解。)
- Fahrer: Wir sind da. (我們到了。)
- Fahrgast: Vielen Dank. Auf Wiedersehen. (非常謝謝。再見。)
- Fahrer: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag. Wohin möchten Sie? (您好。您想去哪裡？) | Zum Hotel Adler, bitte. (到阿德勒飯店，謝謝。) | 1. Wo ist die Toilette? (洗手間在哪裡？) [directions_request_not_destination] - feedback: 這是在問方向。司機問的是目的地。<br>2. Eine Fahrkarte, bitte. (一張車票，謝謝。) [ticket_purchase_wrong_scenario] - feedback: 這是在買票，不是在計程車上說目的地。 |  |  |
| t2 | Zum Hotel Adler, richtig? (到阿德勒飯店，對嗎？) | Ja, genau. (對，沒錯。) | 1. Zum Hotel Adler, bitte. (到阿德勒飯店，謝謝。) [repeated_prior_destination] - feedback: 目的地已經說過了。現在需要確認。<br>2. Nein, ich steige hier aus. (不，我在這裡下車。) [cancellation_instead_of_confirmation] - feedback: 這是在取消或改變行程；目的地正確時回答確認即可。 |  |  |
| t3 | Gut. Es dauert ungefähr zehn Minuten. (好的。大約需要十分鐘。) | Alles klar. (了解。) | 1. Wie viel kostet das? (這多少錢？) [fare_detail_out_of_scope] - feedback: 這會進入費用細節；本場景只練目的地和行程狀態。<br>2. Einen Kaffee, bitte. (一杯咖啡，謝謝。) [wrong_scenario_request] - feedback: 這是咖啡店點餐，不是回應司機說的時間。 |  |  |
| t4 | Wir sind da. (我們到了。) | Vielen Dank. Auf Wiedersehen. (非常謝謝。再見。) | 1. Wohin möchten Sie? (您想去哪裡？) [driver_role_sentence] - feedback: 這是司機問乘客的句子。乘客到達時應該道謝。<br>2. Eine Fahrkarte nach Berlin. (一張去柏林的票。) [ticket_purchase_wrong_scenario] - feedback: 這回到買票情境，不是計程車到達。 |  |  |

---

## a1:de:travel_ticket_buying - Eine Fahrkarte kaufen

- Level: A1
- Language: German (de)
- Scenario ID: travel_ticket_buying
- Setting: Bahnhofsschalter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在德語區火車站售票窗口。買一張到柏林的票，確認後付款或道謝。

### Clean Dialogue Path

- Mitarbeiter: Guten Tag, bitte? (您好，請說？)
- Reisender: Eine Fahrkarte nach Berlin, bitte. (請給我一張到柏林的票。)
- Mitarbeiter: Eine Fahrkarte nach Berlin, richtig? (一張到柏林的票，對嗎？)
- Reisender: Ja, richtig. (是的，沒錯。)
- Mitarbeiter: Das macht zwölf Euro. (一共十二歐元。)
- Reisender: Mit Karte, bitte. (刷卡，謝謝。)
- Mitarbeiter: Hier ist Ihre Fahrkarte. Gleis drei. (這是您的車票。三號月台。)
- Reisender: Danke. (謝謝。)
- Mitarbeiter: 

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Guten Tag, bitte? (您好，請說？) | Eine Fahrkarte nach Berlin, bitte. (請給我一張到柏林的票。) | 1. Wo ist das Gleis? (月台在哪裡？) [directions_instead_of_purchase] - feedback: 這是在問路。現在需要先買票。<br>2. Einen Kaffee, bitte. (請給我一杯咖啡。) [food_order] - feedback: 這是在點咖啡，不是在車站買票。 | 說一張到目的地的票。 |  |
| t2 | Eine Fahrkarte nach Berlin, richtig? (一張到柏林的票，對嗎？) | Ja, richtig. (是的，沒錯。) | 1. Nein, danke. (不用，謝謝。) [cancel_when_confirming] - feedback: 這像是在取消。對方正在確認目的地和數量。<br>2. Zwei Fahrkarten nach München. (兩張到慕尼黑的票。) [wrong_quantity_destination] - feedback: 這改成兩張和另一個目的地，和原本需求不一致。 | 確認正確即可。 |  |
| t3 | Das macht zwölf Euro. (一共十二歐元。) | Mit Karte, bitte. (刷卡，謝謝。) | 1. Ich bin Lukas. (我是 Lukas。) [self_intro_answer] - feedback: 這是自我介紹，不是回應票價或付款。<br>2. Ich möchte ein Zimmer buchen. (我想訂一間房。) [hotel_booking_phrase] - feedback: 這是飯店用語，不是買車票。 | 可以說用卡付款。 |  |
| t4 | Hier ist Ihre Fahrkarte. Gleis drei. (這是您的車票。三號月台。) | Danke. (謝謝。) | 1. Schön, dich kennenzulernen. (很高興認識你。) [self_intro_close] - feedback: 這是第一次見面收尾，不是售票窗口結束。<br>2. Sprechen Sie bitte langsamer. (請您說慢一點。) [repair_after_handover] - feedback: 如果已理解月台資訊，最後只要道謝即可。 | 用謝謝收尾。 |  |

---
