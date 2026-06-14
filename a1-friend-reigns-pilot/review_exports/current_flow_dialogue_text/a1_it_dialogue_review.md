# A1 Italian Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:it:convenience_payment_card_cash - Pagare alla cassa

- Level: A1
- Language: Italian (it)
- Scenario ID: convenience_payment_card_cash
- Setting: Cassa di un piccolo negozio
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利小店結帳。聽收銀員的問題，用短句回答要刷卡或付現。

### Clean Dialogue Path

- 收銀員: Paga con carta o in contanti? (收銀員在問你要刷卡還是付現。)
- 你: Con carta, per favore. (刷卡，謝謝。)
- 收銀員: Inserisca la carta, per favore. (收銀員請你插卡。)
- 你: Va bene. (好的。)
- 收銀員: Vuole lo scontrino? (收銀員問你要不要收據。)
- 你: No, grazie. (不用，謝謝。)
- 收銀員: Perfetto, grazie. Buona giornata. (收銀員結束交易並祝你有美好的一天。)
- 你: Grazie, arrivederci. (謝謝，再見。)
- 收銀員: La transazione è finita. (交易完成。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Paga con carta o in contanti? (收銀員在問你要刷卡還是付現。) | Con carta, per favore. (刷卡，謝謝。) | 1. Un caffè, per favore. (一杯咖啡，謝謝。) [wrong_scenario_ordering] - feedback: 這是在點飲料。現在收銀員問的是付款方式。<br>2. Dov'è la stazione? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路。結帳時先回答 carta 或 contanti。 | 回答付款方式就好。con carta 是刷卡。 |  |
| t2 | Inserisca la carta, per favore. (收銀員請你插卡。) | Va bene. (好的。) | 1. Con carta, per favore. (刷卡，謝謝。) [repeated_prior_answer] - feedback: 你已經選好刷卡了。現在只要確認聽懂指示。<br>2. Ho una prenotazione. (我有預訂。) [wrong_scenario_hotel] - feedback: 這是飯店入住句，不是結帳付款。 | 聽到付款指示時，用 va bene 這種短確認很自然。 | Con carta / in contanti<br>con carta 表示用卡付款，in contanti 表示用現金付款。<br>Con carta, per favore. = 刷卡，謝謝。<br>In contanti, per favore. = 付現，謝謝。 |
| t3 | Vuole lo scontrino? (收銀員問你要不要收據。) | No, grazie. (不用，謝謝。) | 1. Alle tre va bene. (三點可以。) [wrong_scenario_schedule] - feedback: 這是在約時間，不是在回答收據問題。<br>2. In contanti, per favore. (付現，謝謝。) [wrong_payment_method_switch] - feedback: 你剛才已經選刷卡。現在問題是要不要收據。 | 如果不要收據，No, grazie 就夠了。 |  |
| t4 | Perfetto, grazie. Buona giornata. (收銀員結束交易並祝你有美好的一天。) | Grazie, arrivederci. (謝謝，再見。) | 1. Dov'è il bagno? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這會切換到問路情境。現在只要道謝離開。<br>2. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [wrong_scenario_ordering] - feedback: 這是在點飲料。結帳已完成，請用道謝結尾。 | 用 Grazie, arrivederci 收尾很自然。 |  |

---

## a1:it:core_repair_repeat_slowly - Chiedere di ripetere

- Level: A1
- Language: Italian (it)
- Scenario ID: core_repair_repeat_slowly
- Setting: Banco informazioni
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台沒聽懂一句簡短問題。先請對方重複，再請對方說慢一點，最後簡短回答。

### Clean Dialogue Path

- Addetto: Vuole un sacchetto? (您要袋子嗎？)
- Cliente: Può ripetere, per favore? (可以請您再說一次嗎？)
- Addetto: Vuole un sacchetto? (您要袋子嗎？)
- Cliente: Può parlare più lentamente? (您可以說慢一點嗎？)
- Addetto: Certo. Vuole un sacchetto? (當然。您要袋子嗎？)
- Cliente: No, grazie. (不用，謝謝。)
- Addetto: Va bene, a posto. (好的，這樣就可以了。)
- Cliente: Grazie. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vuole un sacchetto? (您要袋子嗎？) | Può ripetere, per favore? (可以請您再說一次嗎？) | 1. Sì, va bene. (好，可以。) [blind_confirmation] - feedback: 你還沒聽懂時不要直接確認。先請對方重複。<br>2. Arrivederci. (再見。) [closing_before_understanding] - feedback: 這會直接結束對話，沒有修復理解問題。 | 沒聽懂時，先請對方再說一次。 |  |
| t2 | Vuole un sacchetto? (您要袋子嗎？) | Può parlare più lentamente? (您可以說慢一點嗎？) | 1. Un biglietto per Milano. (一張到米蘭的票。) [travel_ticket_answer] - feedback: 這是買票用語，不是在請對方放慢速度。<br>2. Mi chiamo Luca. (我叫 Luca。) [self_intro_answer] - feedback: 這是自我介紹，不是修復聽不懂的服務問題。 | 還是太快時，請對方說慢一點。 |  |
| t3 | Certo. Vuole un sacchetto? (當然。您要袋子嗎？) | No, grazie. (不用，謝謝。) | 1. Può ripetere? (您可以再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經慢慢重述了。現在要回答袋子問題。<br>2. Quanto costa questo? (這個多少錢？) [shopping_price_question] - feedback: 這是在問價格，不是在回答是否要袋子。 | 現在聽懂了，簡短回答要或不要。 |  |
| t4 | Va bene, a posto. (好的，這樣就可以了。) | Grazie. (謝謝。) | 1. Piacere. (很高興認識你。) [first_meeting_formula] - feedback: 這是第一次見面用語，不是櫃台服務收尾。<br>2. Con carta, per favore. (我刷卡付款。) [payment_phrase] - feedback: 這是付款方式，不是對方完成服務後的道謝。 | 最後道謝。 |  |

---

## a1:it:daily_meet_friend - Incontrare un amico

- Level: A1
- Language: Italian (it)
- Scenario ID: daily_meet_friend
- Setting: Davanti a un bar
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口遇到朋友。用朋友之間的簡短義大利語確認對方和計畫。

### Clean Dialogue Path

- Amico: Ciao! Sei qui. (嗨！你到了。)
- Amico: Ciao, Marco! (嗨，Marco！)
- Amico: Andiamo al museo, vero? (我們去博物館，對吧？)
- Amico: Sì, al museo. (對，去博物館。)
- Amico: Sei pronto? (你準備好了嗎？)
- Amico: Sì, sono pronto. (對，我準備好了。)
- Amico: Perfetto. Andiamo? (太好了。走吧？)
- Amico: Andiamo. (走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ciao! Sei qui. (嗨！你到了。) | Ciao, Marco! (嗨，Marco！) | 1. Buongiorno, vorrei pagare. (您好，我想付款。) [service_counter_payment] - feedback: 這是服務櫃台付款語氣，不像朋友見面。<br>2. Quanto costa questo? (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問價格，不是在和朋友打招呼。 | 朋友之間可用 Ciao，再確認對方。 |  |
| t2 | Andiamo al museo, vero? (我們去博物館，對吧？) | Sì, al museo. (對，去博物館。) | 1. Un tavolo per due, per favore. (請給我們兩人桌。) [restaurant_service_phrase] - feedback: 這是在餐廳對服務人員說的，不是在確認朋友計畫。<br>2. No, lei è il mio direttore. (不是，您是我的主管。) [overly_formal_wrong_relationship] - feedback: 這換成正式商務關係，和朋友見面不一致。 | 計畫正確時，用短句確認。 |  |
| t3 | Sei pronto? (你準備好了嗎？) | Sì, sono pronto. (對，我準備好了。) | 1. Dov'è il bagno? (洗手間在哪裡？) [directions_instead_of_readiness] - feedback: 這是在問地點，不是在回答準備好了沒有。<br>2. Vorrei il conto. (我想結帳。) [restaurant_bill_request] - feedback: 這是餐廳結帳，不是朋友問你是否準備好。 | 準備好了可說 Sì, sono pronto/pronta。 |  |
| t4 | Perfetto. Andiamo? (太好了。走吧？) | Andiamo. (走吧。) | 1. Mi fa uno sconto? (可以給我折扣嗎？) [shopping_bargaining] - feedback: 這是購物議價，不是朋友準備出發。<br>2. Carta o contanti? (刷卡還是現金？) [cashier_payment_prompt] - feedback: 這是收銀員付款問題，不是朋友之間的下一步。 | 朋友之間用 Andiamo 很自然。 |  |

---

## a1:it:daily_schedule_time - Fissare un orario

- Level: A1
- Language: Italian (it)
- Scenario ID: daily_schedule_time
- Setting: Chat per un incontro
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你正在和朋友約見面時間。用簡短義大利語回答幾點，並確認安排。

### Clean Dialogue Path

- 朋友: A che ora ci vediamo? (朋友問你們幾點見面。)
- 你: Alle tre va bene. (三點可以。)
- 朋友: Perfetto. Per te va bene oggi? (朋友確認今天可不可以。)
- 你: Sì, oggi va bene. (可以，今天可以。)
- 朋友: Allora ci vediamo alle tre. (朋友確認三點見。)
- 你: Perfetto. (太好了。)
- 朋友: A dopo! (朋友說待會見。)
- 你: A dopo! (待會見！)
- 朋友: L'appuntamento è confermato. (見面時間確認了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | A che ora ci vediamo? (朋友問你們幾點見面。) | Alle tre va bene. (三點可以。) | 1. Davanti alla stazione. (在車站前面。) [location_when_time_requested] - feedback: 這是在回答地點。對方問的是時間。<br>2. Pago con carta. (我刷卡付款。) [wrong_scenario_payment] - feedback: 這是結帳付款情境，不是約時間。 | 回答時間即可。alle tre 是三點。 |  |
| t2 | Perfetto. Per te va bene oggi? (朋友確認今天可不可以。) | Sì, oggi va bene. (可以，今天可以。) | 1. No, mai. (不，永遠不要。) [refusal_when_confirmation_expected] - feedback: 語氣太強，也取消了安排。這裡要確認今天可以。<br>2. Vorrei una camera. (我想要一間房。) [wrong_scenario_hotel] - feedback: 這是飯店情境，不是朋友約時間。 | 用 sì, oggi va bene 確認今天可以。 | Alle + ora<br>義大利語說幾點常用 alle 加時間，例如 alle tre。<br>Alle tre. = 三點。<br>Oggi va bene. = 今天可以。 |
| t3 | Allora ci vediamo alle tre. (朋友確認三點見。) | Perfetto. (太好了。) | 1. È troppo caro. (太貴了。) [wrong_scenario_payment] - feedback: 這是在談價格，不是在確認見面時間。<br>2. Dov'è il bagno? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這會切換到問路情境。先確認三點見。 | 安排正確時，用 perfetto 簡短確認。 |  |
| t4 | A dopo! (朋友說待會見。) | A dopo! (待會見！) | 1. Con carta, per favore. (刷卡，謝謝。) [wrong_scenario_payment] - feedback: 這是付款回答。朋友道別時，用待會見收尾。<br>2. Buongiorno, cosa prende? (您好，您要點什麼？) [wrong_role_staff_line] - feedback: 這像店員說話。你現在是朋友聊天的一方。 | 同樣用 A dopo 回應，簡短自然。 |  |

---

## a1:it:daily_self_intro - Presentarsi

- Level: A1
- Language: Italian (it)
- Scenario ID: daily_self_intro
- Setting: Incontro linguistico
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換活動第一次見到新同學。只說名字和正在學的語言，不分享私人聯絡方式。

### Clean Dialogue Path

- Partecipante: Ciao, piacere! (嗨，很高興認識你！)
- Nuovo partecipante: Ciao, sono Luca. (嗨，我是 Luca。)
- Partecipante: Che lingua studi? (你在學什麼語言？)
- Nuovo partecipante: Sto studiando italiano. (我正在學義大利語。)
- Partecipante: Anch'io! Piacere di conoscerti. (我也是！很高興認識你。)
- Nuovo partecipante: Anche per me. (我也很高興。)
- Partecipante: Benvenuto al gruppo! (歡迎加入這個小組！)
- Nuovo partecipante: Grazie! (謝謝！)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ciao, piacere! (嗨，很高興認識你！) | Ciao, sono Luca. (嗨，我是 Luca。) | 1. Vorrei un biglietto. (我想要一張票。) [travel_ticket_phrase] - feedback: 這是在買票。現在是第一次見面自我介紹。<br>2. Il mio numero è questo. (我的電話是這個。) [private_contact_detail] - feedback: 這會分享私人聯絡方式，本情境只需要名字。 | 先用 Ciao 回應，再說名字。 |  |
| t2 | Che lingua studi? (你在學什麼語言？) | Sto studiando italiano. (我正在學義大利語。) | 1. Con carta, grazie. (刷卡，謝謝。) [payment_answer] - feedback: 這是在回答付款方式，不是在回答學什麼語言。<br>2. Può ripetere? (您可以再說一次嗎？) [repair_when_answer_expected] - feedback: 如果聽懂了問題，這裡應該直接回答你正在學的語言。 | 簡短說 Sto studiando...。 |  |
| t3 | Anch'io! Piacere di conoscerti. (我也是！很高興認識你。) | Anche per me. (我也很高興。) | 1. Vorrei pagare. (我想付款。) [service_payment_phrase] - feedback: 這是服務場景付款，不是第一次見面的回應。<br>2. Da quale binario? (哪個月台？) [station_question] - feedback: 這是在車站問月台，和自我介紹無關。 | 用 Anche per me 自然回應。 |  |
| t4 | Benvenuto al gruppo! (歡迎加入這個小組！) | Grazie! (謝謝！) | 1. Una birra, per favore. (請給我一杯啤酒。) [food_drink_order] - feedback: 這是在點飲料，不是回應歡迎。<br>2. Parli più lentamente, per favore. (請說慢一點。) [repair_after_clear_close] - feedback: 這是修復用語；現在對方只是歡迎你，回答謝謝即可。 | 最後簡短道謝即可。 |  |

---

## a1:it:digital_battery_charging - Chiedere di caricare il telefono

- Level: A1
- Language: Italian (it)
- Scenario ID: digital_battery_charging
- Setting: Banco del bar
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡吧或大廳。先問可不可以充手機，再問插座在哪裡，最後確認位置並道謝。

### Clean Dialogue Path

- Staff: Buongiorno, posso aiutarla? (您好，我可以幫您嗎？)
- Cliente: Posso caricare il telefono qui? (我可以在這裡充手機嗎？)
- Staff: Sì, certo. (可以，當然。)
- Cliente: Dov'è una presa? (插座在哪裡？)
- Staff: La presa è vicino alla finestra. (插座在窗邊。)
- Cliente: Lì vicino alla finestra? (窗邊那裡嗎？)
- Staff: Sì, proprio lì. (對，就在那裡。)
- Cliente: Grazie mille. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno, posso aiutarla? (您好，我可以幫您嗎？) | Posso caricare il telefono qui? (我可以在這裡充手機嗎？) | 1. Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) [wifi_request_wrong_goal] - feedback: 這是在問 Wi-Fi；現在目標是問能不能充手機。<br>2. Un caffè, per favore. (一杯咖啡，謝謝。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在請求使用插座。 |  |  |
| t2 | Sì, certo. (可以，當然。) | Dov'è una presa? (插座在哪裡？) | 1. Posso caricare il telefono qui? (我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意了。現在要問插座的位置。<br>2. Dov'è la stazione? (車站在哪裡？) [station_directions_wrong_goal] - feedback: 這是在問車站方向，不是問插座。 |  |  |
| t3 | La presa è vicino alla finestra. (插座在窗邊。) | Lì vicino alla finestra? (窗邊那裡嗎？) | 1. Quanto costa? (多少錢？) [payment_dispute_out_of_scope] - feedback: 本場景不談收費或費用爭議，只確認插座位置。<br>2. Sì, certo. (可以，當然。) [staff_role_sentence] - feedback: 這是工作人員給同意的句子，不是學習者確認位置。 |  |  |
| t4 | Sì, proprio lì. (對，就在那裡。) | Grazie mille. (非常謝謝。) | 1. Il telefono è rotto. (手機壞了。) [damaged_device_out_of_scope] - feedback: 這進入裝置故障；本場景只練借用插座和道謝。<br>2. Avete un adattatore? (你們有轉接頭嗎？) [adapter_specs_out_of_scope] - feedback: 轉接頭和規格不在本場景範圍。 |  |  |

---

## a1:it:digital_wifi_connect - Chiedere la password del Wi-Fi

- Level: A1
- Language: Italian (it)
- Scenario ID: digital_wifi_connect
- Setting: Banco del bar
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡吧或飯店大廳。詢問 Wi-Fi 密碼，試著連線，並說手機連不上。

### Clean Dialogue Path

- Staff: Ciao, dimmi pure. (你好，請說。)
- Cliente: Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？)
- Staff: Certo. La password è casa2026. (可以。密碼是 casa2026。)
- Cliente: Grazie, provo subito. (謝謝，我馬上試試。)
- Staff: Funziona? (可以用嗎？)
- Cliente: No, non si connette. (不，連不上。)
- Staff: Capisco. Riprovi tra un minuto, per favore. (我了解。請一分鐘後再試一次。)
- Cliente: Va bene, grazie. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ciao, dimmi pure. (你好，請說。) | Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) | 1. Il conto, per favore. (請結帳。) [bill_request_wrong_goal] - feedback: 這是在結帳，不是在問 Wi-Fi。<br>2. Un caffè, per favore. (一杯咖啡，謝謝。) [food_order_wrong_goal] - feedback: 這是在點餐。現在目標是取得 Wi-Fi 密碼。 |  |  |
| t2 | Certo. La password è casa2026. (可以。密碼是 casa2026。) | Grazie, provo subito. (謝謝，我馬上試試。) | 1. Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經給密碼了。現在要表示你會試試看。<br>2. Dov'è il bagno? (洗手間在哪裡？) [directions_request_wrong_goal] - feedback: 這是在問洗手間，偏離 Wi-Fi 連線流程。 |  |  |
| t3 | Funziona? (可以用嗎？) | No, non si connette. (不，連不上。) | 1. Sì, grazie. (可以，謝謝。) [false_confirmation] - feedback: 如果實際連不上，不能回答可以。要說明連線失敗。<br>2. Posso pagare? (我可以付款嗎？) [payment_request_wrong_goal] - feedback: 這是付款問題，不是回報 Wi-Fi 連不上。 |  |  |
| t4 | Capisco. Riprovi tra un minuto, per favore. (我了解。請一分鐘後再試一次。) | Va bene, grazie. (好的，謝謝。) | 1. Il router è sicuro? (路由器安全嗎？) [technical_security_out_of_scope] - feedback: 這進入技術與安全設定；本場景只練簡單連不上和道謝。<br>2. Vorrei fare il check-out. (我想退房。) [hotel_checkout_wrong_scenario] - feedback: 這是飯店退房句，不是 Wi-Fi 協助結尾。 |  |  |

---

## a1:it:food_bill_payment - Pagare il conto

- Level: A1
- Language: Italian (it)
- Scenario ID: food_bill_payment
- Setting: Cassa del bar
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利的咖啡館或簡單餐廳。用一句話請結帳，回答現金或刷卡，最後道謝。

### Clean Dialogue Path

- Cassiere: Mi dica pure. (請說。)
- Cliente: Il conto, per favore. (請結帳。)
- Cassiere: Certo. Carta o contanti? (好的。刷卡還是現金？)
- Cliente: Con carta, grazie. (刷卡，謝謝。)
- Cassiere: Vuole lo scontrino? (您要收據嗎？)
- Cliente: Sì, grazie. (要，謝謝。)
- Cassiere: Ecco a lei. Arrivederci. (給您。再見。)
- Cliente: Grazie, arrivederci. (謝謝，再見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Mi dica pure. (請說。) | Il conto, per favore. (請結帳。) | 1. Vorrei un cappuccino. (我想要一杯卡布奇諾。) [ordering_more_food] - feedback: 這是在繼續點東西。現在目標是請結帳。<br>2. Dov'è la stazione? (車站在哪裡？) [directions_request] - feedback: 這是在問路，不是在餐飲場所結帳。 | 要結帳時，用 Il conto, per favore。 |  |
| t2 | Certo. Carta o contanti? (好的。刷卡還是現金？) | Con carta, grazie. (刷卡，謝謝。) | 1. Quanto costa questo? (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問商品價格。現在收銀員問付款方式。<br>2. Vorrei dividere il conto in quattro parti uguali. (我想把帳單平均分成四份。) [overlong_split_bill] - feedback: 這太複雜，超出這個 A1 付款回合。 | 回答付款方式即可。 |  |
| t3 | Vuole lo scontrino? (您要收據嗎？) | Sì, grazie. (要，謝謝。) | 1. Un tavolo per due. (兩人桌。) [restaurant_arrival_phrase] - feedback: 這是進餐廳時說的，不是在回答是否要收據。<br>2. A che ora è la colazione? (早餐幾點？) [hotel_breakfast_question] - feedback: 這是飯店早餐問題，和結帳收據無關。 | 可以簡短回答 sì 或 no。 |  |
| t4 | Ecco a lei. Arrivederci. (給您。再見。) | Grazie, arrivederci. (謝謝，再見。) | 1. Ci vediamo al museo. (我們博物館見。) [friend_meeting_close] - feedback: 這是朋友見面安排，不是和收銀員結帳收尾。<br>2. Lo prendo. (我買這個。) [shopping_purchase_phrase] - feedback: 這是購物時確認購買，不是餐飲結帳後道別。 | 用 Grazie, arrivederci 收尾。 |  |

---

## a1:it:food_coffee_ordering - Ordinare un caffè

- Level: A1
- Language: Italian (it)
- Scenario ID: food_coffee_ordering
- Setting: Bancone del bar
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利咖啡吧櫃台。聽店員的問題，選一個短而自然的義大利語回答。

### Clean Dialogue Path

- 店員: Buongiorno. Cosa prende? (店員在問你要點什麼。)
- 你: Un cappuccino, per favore. (一杯卡布奇諾，謝謝。)
- 店員: Qui o da portare via? (店員在問你要在這裡喝，還是外帶。)
- 你: Da portare via, per favore. (外帶，謝謝。)
- 店員: Un cappuccino da portare via, giusto? (店員在確認你的訂單。)
- 你: Sì, giusto. (對，沒錯。)
- 店員: Sono tre euro. Può pagare qui. (店員告訴你金額，並請你在這裡付款。)
- 你: Va bene, grazie. (好的，謝謝。)
- 店員: Il cappuccino sarà pronto al banco. (卡布奇諾會在櫃台準備好。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Cosa prende? (店員在問你要點什麼。) | Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) | 1. Dov'è il bagno? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員等你點飲料。<br>2. No, grazie. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這聽起來像是不點了。此處要說你想要的飲品。 | 直接說飲品，加 per favore 就很自然。 |  |
| t2 | Qui o da portare via? (店員在問你要在這裡喝，還是外帶。) | Da portare via, per favore. (外帶，謝謝。) | 1. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [repeated_prior_answer] - feedback: 你已經點飲料了。現在要回答在這裡或外帶。<br>2. Sì, giusto. (對，沒錯。) [wrong_act_confirmation] - feedback: 這是在確認，不是在選選項。請選 qui 或 da portare via。 | 選一個服務選項。da portare via 是外帶。 | Qui / da portare via<br>qui 表示在這裡用，da portare via 表示外帶。<br>Qui, per favore. = 在這裡，謝謝。<br>Da portare via, per favore. = 外帶，謝謝。 |
| t3 | Un cappuccino da portare via, giusto? (店員在確認你的訂單。) | Sì, giusto. (對，沒錯。) | 1. No, grazie. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕或取消。訂單正確時，用 Sì 確認。<br>2. Dov'è il bagno? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個情境。先確認咖啡訂單。 | 如果訂單正確，用 Sì, giusto 確認。 |  |
| t4 | Sono tre euro. Può pagare qui. (店員告訴你金額，並請你在這裡付款。) | Va bene, grazie. (好的，謝謝。) | 1. Da portare via, per favore. (外帶，謝謝。) [repeated_prior_answer] - feedback: 你已經回答外帶了。現在是付款步驟。<br>2. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [repeated_prior_answer] - feedback: 飲料已經點好了。現在要回應付款。 | 付款步驟用簡短回應就好。 |  |

---

## a1:it:food_restaurant_ordering - Ordinare al ristorante

- Level: A1
- Language: Italian (it)
- Scenario ID: food_restaurant_ordering
- Setting: Tavolo al ristorante
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利的一間簡單餐廳。用短句回答服務生，點一道餐點並確認。

### Clean Dialogue Path

- Cameriere: Buonasera. Siete pronti? (晚上好。你們準備好點餐了嗎？)
- Cliente: Sì, siamo in due. (是的，我們兩位。)
- Cameriere: Che cosa prendete? (你們要點什麼？)
- Cliente: Prendo una pasta al pomodoro, per favore. (我要一份番茄義大利麵，謝謝。)
- Cameriere: Una pasta al pomodoro, giusto? (一份番茄義大利麵，對嗎？)
- Cliente: Sì, grazie. (是的，謝謝。)
- Cameriere: Perfetto. Arriva subito. (好的。馬上為您準備。)
- Cliente: Grazie. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buonasera. Siete pronti? (晚上好。你們準備好點餐了嗎？) | Sì, siamo in due. (是的，我們兩位。) | 1. Il conto, per favore. (請結帳。) [asking_bill_before_ordering] - feedback: 這是在還沒點餐前就要結帳。現在要回答是否準備好點餐。<br>2. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [cafe_only_request] - feedback: 這像咖啡吧點飲料。餐廳服務生先在確認你們是否準備好。 | 先簡短回答準備好了，也可以補上兩位。 |  |
| t2 | Che cosa prendete? (你們要點什麼？) | Prendo una pasta al pomodoro, per favore. (我要一份番茄義大利麵，謝謝。) | 1. Da portare via, per favore. (外帶，謝謝。) [takeout_answer_in_dine_in_context] - feedback: 這是在回答外帶選項，不是在點一道餐點。<br>2. Una pizza grande, due zuppe, senza formaggio e senza sale. (一個大披薩、兩份湯、不加起司也不加鹽。) [overlong_customization] - feedback: 資訊太多，超出這個 A1 回合。先練習點一道簡單餐點。 | 義大利餐廳點一道菜，可以用 Prendo... 或 Vorrei... | Prendo...<br>Prendo una... 表示「我要一份...」，在餐廳點餐自然又簡短。<br>Prendo una pasta al pomodoro. = 我要一份番茄義大利麵。<br>Vorrei una pasta, per favore. = 我想要一份義大利麵，謝謝。 |
| t3 | Una pasta al pomodoro, giusto? (一份番茄義大利麵，對嗎？) | Sì, grazie. (是的，謝謝。) | 1. No, un caffè. (不是，一杯咖啡。) [wrong_item_confirmation] - feedback: 這把餐點換成咖啡了。若訂單正確，直接確認即可。<br>2. Pago con carta. (我用卡付款。) [payment_answer_too_early] - feedback: 這是付款資訊。現在服務生只是在確認餐點。 | 訂單正確時，用 Sì, grazie 確認。 |  |
| t4 | Perfetto. Arriva subito. (好的。馬上為您準備。) | Grazie. (謝謝。) | 1. Dov'è il binario due? (二號月台在哪裡？) [wrong_scenario_request] - feedback: 這是車站問路，不是餐廳點餐收尾。<br>2. A che ora è la colazione? (早餐幾點？) [hotel_question] - feedback: 這是飯店早餐問題。現在餐點已確認，只要道謝。 | 最後用 grazie 收尾很自然。 |  |

---

## a1:it:hotel_checkout - Fare il check-out in hotel

- Level: A1
- Language: Italian (it)
- Scenario ID: hotel_checkout
- Setting: Reception dell'hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。說明要退房、提供房號、交回房卡，最後道謝。

### Clean Dialogue Path

- Reception: Buongiorno. Come posso aiutarla? (早安。請問有什麼可以幫您？)
- Ospite: Vorrei fare il check-out. (我想退房。)
- Reception: Certo. Numero della camera? (好的。房號是多少？)
- Ospite: Camera 204. (204 號房。)
- Reception: Perfetto. Mi lascia la carta, per favore? (很好。請把房卡交給我，好嗎？)
- Ospite: Sì, ecco la carta. (好，房卡在這裡。)
- Reception: Grazie. Il check-out è fatto. (謝謝。退房完成了。)
- Ospite: Grazie mille. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Come posso aiutarla? (早安。請問有什麼可以幫您？) | Vorrei fare il check-out. (我想退房。) | 1. Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這是在問網路密碼，不是在辦理退房。<br>2. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [food_order_wrong_scenario] - feedback: 這是點飲料。飯店櫃台退房要說 check-out。 |  |  |
| t2 | Certo. Numero della camera? (好的。房號是多少？) | Camera 204. (204 號房。) | 1. Binario due. (第二月台。) [station_number_not_room] - feedback: binario 是車站月台，不是飯店房號。<br>2. Vorrei un biglietto. (我想要一張票。) [ticket_purchase_wrong_scenario] - feedback: 這是在買票。櫃台現在問的是房號。 |  |  |
| t3 | Perfetto. Mi lascia la carta, per favore? (很好。請把房卡交給我，好嗎？) | Sì, ecco la carta. (好，房卡在這裡。) | 1. No, la tengo. (不，我留著。) [refusal_instead_of_handover] - feedback: 退房流程需要交回房卡；這裡不應拒絕。<br>2. A nome di Lee. (訂房姓名是 Lee。) [checkin_name_answer] - feedback: 這是入住時回答訂房姓名，不是交房卡。 |  |  |
| t4 | Grazie. Il check-out è fatto. (謝謝。退房完成了。) | Grazie mille. (非常謝謝。) | 1. Quanto costa in più? (還要多付多少？) [extra_charge_dispute_out_of_scope] - feedback: 這會進入額外費用或爭議；本場景只練基本退房。<br>2. Qual è il gate? (登機門是哪一個？) [airport_question_wrong_scenario] - feedback: 這是機場問題，不是飯店退房結尾。 |  |  |

---

## a1:it:hotel_wifi_breakfast - Wi-Fi e colazione in hotel

- Level: A1
- Language: Italian (it)
- Scenario ID: hotel_wifi_breakfast
- Setting: Reception dell'hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。詢問 Wi-Fi 密碼和早餐時間，聽懂簡短回答後道謝。

### Clean Dialogue Path

- Receptionist: Buonasera. Posso aiutarla? (晚上好。需要幫忙嗎？)
- Ospite: Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？)
- Receptionist: È sulla carta della camera. (在房卡套上。)
- Ospite: Sulla carta, grazie. (在卡片上，謝謝。)
- Receptionist: Serve altro? (還需要其他幫忙嗎？)
- Ospite: A che ora è la colazione? (早餐幾點？)
- Receptionist: Dalle sette, al primo piano. (七點開始，在二樓。)
- Ospite: Alle sette, al primo piano. Grazie. (七點，在二樓。謝謝。)
- Receptionist: Prego. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buonasera. Posso aiutarla? (晚上好。需要幫忙嗎？) | Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) | 1. Vorrei una chiave nuova. (我想要一張新鑰匙。) [room_key_instead_of_wifi] - feedback: 這是在要房卡或鑰匙。你的目標是問 Wi-Fi 密碼。<br>2. Vorrei ordinare una pasta. (我想點一份義大利麵。) [restaurant_order_answer] - feedback: 這是餐廳點餐。現在是在飯店櫃台問 Wi-Fi。 | 在櫃台先直接問 Wi-Fi 密碼即可。 |  |
| t2 | È sulla carta della camera. (在房卡套上。) | Sulla carta, grazie. (在卡片上，謝謝。) | 1. Alla reception alle dieci. (十點在櫃台。) [wrong_place_time_confirmation] - feedback: 這混入時間和地點，沒有確認 Wi-Fi 資訊在卡片上。<br>2. Pago adesso. (我現在付款。) [checkout_payment_phrase] - feedback: 這是付款句，不是在確認 Wi-Fi 密碼位置。 | 聽到 sulla carta，就是資訊在卡片上。 | È sulla carta<br>sulla carta 表示「在卡片上」。<br>È sulla carta. = 在卡片上。<br>La password è qui. = 密碼在這裡。 |
| t3 | Serve altro? (還需要其他幫忙嗎？) | A che ora è la colazione? (早餐幾點？) | 1. Un tavolo per due, per favore. (兩位的桌子，謝謝。) [restaurant_request] - feedback: 這像是在餐廳要座位。現在要問飯店早餐時間。<br>2. Dov'è il binario due? (二號月台在哪裡？) [station_question] - feedback: 這是車站問路。飯店櫃台現在要問早餐資訊。 | 接著問早餐時間。 |  |
| t4 | Dalle sette, al primo piano. (七點開始，在二樓。) | Alle sette, al primo piano. Grazie. (七點，在二樓。謝謝。) | 1. Alle dieci, in camera. (十點，在房間。) [wrong_time_place] - feedback: 時間和地點都聽錯了。服務人員說七點，在二樓。<br>2. Vorrei il conto. (我想結帳。) [checkout_payment_phrase] - feedback: 這是結帳或付款情境，不是在確認早餐資訊。 | 確認關鍵資訊：七點，二樓。 |  |

---

## a1:it:problem_lost_item - Dire che hai perso un oggetto

- Level: A1
- Language: Italian (it)
- Scenario ID: problem_lost_item
- Setting: Banco informazioni
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。說一個小物品不見了，回答可能在哪裡不見，聽懂下一步去哪裡問，最後道謝。

### Clean Dialogue Path

- Staff: Buongiorno, mi dica. (您好，請說。)
- Cliente: Ho perso il mio cappello. (我的帽子不見了。)
- Staff: Dove l'ha perso? (您在哪裡弄丟的？)
- Cliente: Forse al bar. (可能在咖啡吧。)
- Staff: Chieda al banco informazioni, a sinistra. (請到左邊的服務台問問。)
- Cliente: Al banco informazioni, a sinistra? (左邊的服務台嗎？)
- Staff: Sì, chieda lì. (對，請在那裡問。)
- Cliente: Va bene, grazie. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno, mi dica. (您好，請說。) | Ho perso il mio cappello. (我的帽子不見了。) | 1. Quanto costa? (多少錢？) [price_question_wrong_goal] - feedback: 這是在問價格，不是在說遺失物品。<br>2. Vorrei un caffè. (我想要一杯咖啡。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在尋找遺失物。 |  |  |
| t2 | Dove l'ha perso? (您在哪裡弄丟的？) | Forse al bar. (可能在咖啡吧。) | 1. Alle tre. (三點。) [time_answer_wrong_slot] - feedback: 對方問地點，不是問時間。<br>2. No, grazie. (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕，沒有回答可能遺失的地點。 |  |  |
| t3 | Chieda al banco informazioni, a sinistra. (請到左邊的服務台問問。) | Al banco informazioni, a sinistra? (左邊的服務台嗎？) | 1. Ho perso il mio cappello. (我的帽子不見了。) [repeated_lost_statement] - feedback: 已經說過物品不見了。現在要確認去哪裡問。<br>2. Devo chiamare la polizia? (我需要報警嗎？) [police_report_out_of_scope] - feedback: 本場景不處理報案，只練低風險失物詢問。 |  |  |
| t4 | Sì, chieda lì. (對，請在那裡問。) | Va bene, grazie. (好的，謝謝。) | 1. Qualcuno l'ha rubato. (有人偷了它。) [theft_accusation_out_of_scope] - feedback: 不要把低風險失物場景變成偷竊指控。<br>2. Mi deve pagare. (您必須賠我。) [compensation_out_of_scope] - feedback: 賠償或責任爭議不在本 A1 場景範圍。 |  |  |

---

## a1:it:shopping_ask_price - Chiedere il prezzo

- Level: A1
- Language: Italian (it)
- Scenario ID: shopping_ask_price
- Setting: Piccolo negozio
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利的小店或市場攤位。用一句話問這個東西多少錢，聽懂價格後簡短回應。

### Clean Dialogue Path

- Commesso: Buongiorno. Posso aiutarla? (您好。需要幫忙嗎？)
- Cliente: Scusi, quanto costa questo? (不好意思，這個多少錢？)
- Commesso: Costa otto euro. (八歐元。)
- Cliente: Va bene, lo prendo. (好的，我買這個。)
- Commesso: Questo, giusto? (這個，對嗎？)
- Cliente: Sì, grazie. (是的，謝謝。)
- Commesso: Perfetto, grazie. (好的，謝謝。)
- Cliente: Grazie. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Posso aiutarla? (您好。需要幫忙嗎？) | Scusi, quanto costa questo? (不好意思，這個多少錢？) | 1. Dov'è la stazione? (車站在哪裡？) [directions_instead_of_price] - feedback: 這是在問路。現在目標是在商店問這個東西的價格。<br>2. Un caffè, per favore. (一杯咖啡，謝謝。) [ordering_food_instead_of_price] - feedback: 這像在咖啡吧點飲料，不是在問商品價格。 | 先用 Scusi 叫住店員，再問價格。 |  |
| t2 | Costa otto euro. (八歐元。) | Va bene, lo prendo. (好的，我買這個。) | 1. Pago con carta? (我用卡付款嗎？) [payment_method_too_early] - feedback: 這直接跳到付款方式。先回應是否要買或道謝即可。<br>2. Ne prendo tre grandi. (我要三個大的。) [wrong_quantity_answer] - feedback: 這加入數量和尺寸，超出這個 A1 場景的一件商品。 | 如果要買，可以用 Lo prendo。 |  |
| t3 | Questo, giusto? (這個，對嗎？) | Sì, grazie. (是的，謝謝。) | 1. No, dov'è il bagno? (不是，洗手間在哪裡？) [restroom_request] - feedback: 這換成問洗手間。店員是在確認你要的商品。<br>2. È troppo caro, mi fa uno sconto grande? (太貴了，可以給我很大的折扣嗎？) [overlong_bargaining] - feedback: 這是較複雜的議價，不適合這個 A1 目標。 | 確認商品正確時，用 Sì, grazie。 |  |
| t4 | Perfetto, grazie. (好的，謝謝。) | Grazie. (謝謝。) | 1. Il conto, per favore. (請結帳。) [restaurant_bill_request] - feedback: 這是餐廳結帳說法，不是商店價格場景的收尾。<br>2. A che ora ci vediamo? (我們幾點見？) [friend_meeting_request] - feedback: 這是在約朋友，不是在商店完成購買。 | 最後簡短道謝即可。 |  |

---

## a1:it:social_running_late - Dire che arrivi in ritardo

- Level: A1
- Language: Italian (it)
- Scenario ID: social_running_late
- Setting: Messaggio a un amico
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要跟朋友見面，但會晚到。簡單說抱歉、晚一點到、幾分鐘、謝謝和待會見。

### Clean Dialogue Path

- Amico: Ehi, dove sei? (嘿，你在哪？)
- Tu: Scusa, arrivo in ritardo. (抱歉，我會晚到。)
- Amico: Quanti minuti? (幾分鐘？)
- Tu: Arrivo tra dieci minuti. (我十分鐘後到。)
- Amico: Va bene, ti aspetto. (好，我等你。)
- Tu: Grazie per aspettarmi. (謝謝你等我。)
- Amico: A tra poco. (待會見。)
- Tu: A tra poco. (待會見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ehi, dove sei? (嘿，你在哪？) | Scusa, arrivo in ritardo. (抱歉，我會晚到。) | 1. Il conto, per favore. (請結帳。) [payment_wrong_goal] - feedback: 這是在餐廳付款，不是在告訴朋友會晚到。<br>2. Buongiorno, posso aiutarla? (您好，我可以幫您嗎？) [service_register_wrong_context] - feedback: 這是服務人員語氣；朋友訊息要自然簡短。 |  |  |
| t2 | Quanti minuti? (幾分鐘？) | Arrivo tra dieci minuti. (我十分鐘後到。) | 1. Al binario due. (在第二月台。) [place_number_wrong_answer] - feedback: 對方問幾分鐘，不是問地點或月台。<br>2. No, grazie. (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕幫助，沒有回答時間。 |  |  |
| t3 | Va bene, ti aspetto. (好，我等你。) | Grazie per aspettarmi. (謝謝你等我。) | 1. Scusa, arrivo in ritardo. (抱歉，我會晚到。) [repeated_late_message] - feedback: 已經說過會晚到了。現在要謝謝對方等你。<br>2. Grazie per il servizio. (謝謝您的服務。) [overformal_service_thanks] - feedback: 這像服務情境，不像朋友等你的自然說法。 |  |  |
| t4 | A tra poco. (待會見。) | A tra poco. (待會見。) | 1. Sono davanti alla porta blu. (我在藍色門前。) [exact_location_out_of_scope] - feedback: 本場景不練即時精準定位，只練晚到和時間。<br>2. Perché non sei già lì? (你為什麼還沒在那裡？) [conflict_blame_out_of_scope] - feedback: 這會變成責怪或衝突；本場景要平和收尾。 |  |  |

---

## a1:it:travel_hotel_checkin - Check-in in hotel

- Level: A1
- Language: Italian (it)
- Scenario ID: travel_hotel_checkin
- Setting: Reception dell'hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。說你有訂房，提供姓名，聽懂下一步。

### Clean Dialogue Path

- 櫃台人員: Buonasera. Come posso aiutarla? (櫃台人員在問你需要什麼協助。)
- 你: Buonasera, ho una prenotazione. (晚上好，我有訂房。)
- 櫃台人員: Certo. A che nome? (櫃台人員在問訂房姓名。)
- 你: A nome di Lee. (訂房姓名是 Lee。)
- 櫃台人員: Ho trovato la prenotazione. Una notte, giusto? (櫃台找到訂房，並確認住一晚。)
- 你: Sì, giusto. (對，沒錯。)
- 櫃台人員: Ecco la chiave. La camera è al terzo piano. (櫃台給你鑰匙，並告訴你房間在三樓。)
- 你: Grazie. (謝謝。)
- 櫃台人員: La colazione è nella hall, dalle sette alle dieci. (早餐在大廳，時間是七點到十點。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buonasera. Come posso aiutarla? (櫃台人員在問你需要什麼協助。) | Buonasera, ho una prenotazione. (晚上好，我有訂房。) | 1. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [wrong_scenario_request] - feedback: 這是在咖啡吧點飲料。飯店櫃台要先說你有訂房。<br>2. Dov'è la stazione? (車站在哪裡？) [wrong_scenario_request] - feedback: 這是在問外面的路。現在是入住櫃台流程。 | 先說你有訂房。 |  |
| t2 | Certo. A che nome? (櫃台人員在問訂房姓名。) | A nome di Lee. (訂房姓名是 Lee。) | 1. Vorrei fare il check-out. (我想退房。) [wrong_act_checkout] - feedback: check-out 是離開飯店時用的。現在是入住，要提供訂房姓名。<br>2. È a destra. (在右邊。) [wrong_scenario_response] - feedback: 這是在回答方向。櫃台問的是訂房姓名。 | 用 A nome di 加姓氏就可以。 | A nome di...<br>飯店詢問訂房姓名時，可以用 A nome di 加姓名回答。<br>A nome di Lee. = 訂房姓名是 Lee。<br>La prenotazione è a nome di Lee. = 訂房是用 Lee 的名字。 |
| t3 | Ho trovato la prenotazione. Una notte, giusto? (櫃台找到訂房，並確認住一晚。) | Sì, giusto. (對，沒錯。) | 1. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [wrong_scenario_request] - feedback: 這不是咖啡吧。櫃台正在確認你的訂房。<br>2. No, grazie. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕協助。資料正確時要確認。 | 資料正確時，用 Sì 簡短確認。 |  |
| t4 | Ecco la chiave. La camera è al terzo piano. (櫃台給你鑰匙，並告訴你房間在三樓。) | Grazie. (謝謝。) | 1. A nome di Lee. (訂房姓名是 Lee。) [repeated_prior_answer] - feedback: 你已經提供姓名了。現在櫃台正在給你鑰匙。<br>2. Dov'è il bagno? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個請求。先把入住流程收尾。 | 拿到鑰匙後，用簡短謝謝收尾。 |  |

---

## a1:it:travel_restroom_directions - Chiedere dov'è il bagno

- Level: A1
- Language: Italian (it)
- Scenario ID: travel_restroom_directions
- Setting: Luogo pubblico
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在公共場所，需要找到洗手間。先禮貌開口，再聽懂簡單方向。

### Clean Dialogue Path

- 你: Mi scusi. (不好意思。)
- 工作人員: Sì, mi dica. (工作人員在表示可以聽你說。)
- 你: Dov'è il bagno, per favore? (請問洗手間在哪裡？)
- 工作人員: Sempre dritto, poi a destra. (一直直走，然後在右邊。)
- 你: A destra? (在右邊嗎？)
- 工作人員: Sì, a destra. (工作人員確認是在右邊。)
- 你: Grazie. (謝謝。)
- 工作人員: Prego. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Sì, mi dica. (工作人員在表示可以聽你說。) | Dov'è il bagno, per favore? (請問洗手間在哪裡？) | 1. Un cappuccino, per favore. (一杯卡布奇諾，謝謝。) [wrong_scenario_request] - feedback: 這是在點飲料。現在你需要問位置。<br>2. Quanto costa? (多少錢？) [wrong_scenario_request] - feedback: 這是在問價格。此處要問洗手間在哪裡。 | 問洗手間在哪裡。義大利語常用 il bagno。 |  |
| t2 | Sempre dritto, poi a destra. (一直直走，然後在右邊。) | A destra? (在右邊嗎？) | 1. A nome di Lee. (訂房姓名是 Lee。) [wrong_scenario_response] - feedback: 這是在飯店櫃台提供姓名。現在你是在確認方向。<br>2. Sto bene. (我很好。) [wrong_act_personal_status] - feedback: 這是在說自己的狀態，不是在確認方向。 | 聽兩個方向詞：dritto 是直走，a destra 是在右邊。 | Dritto / a destra<br>dritto 表示直走，a destra 表示在右邊。<br>Sempre dritto. = 一直直走。<br>A destra. = 在右邊。 |
| t3 | Sì, a destra. (工作人員確認是在右邊。) | Grazie. (謝謝。) | 1. A destra? (在右邊嗎？) [repeated_prior_answer] - feedback: 對方已經確認方向了。現在可以道謝。<br>2. No, grazie. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕協助。你已經得到方向，應該禮貌收尾。 | 方向已經確認，接著說謝謝。 |  |

---

## a1:it:travel_station_directions - Chiedere indicazioni in stazione

- Level: A1
- Language: Italian (it)
- Scenario ID: travel_station_directions
- Setting: Stazione ferroviaria
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利車站。先禮貌引起注意，再問二號月台在哪裡，並確認方向。

### Clean Dialogue Path

- Addetto: Sì, mi dica. (好的，請說。)
- Viaggiatore: Mi scusi, dov'è il binario due? (不好意思，二號月台在哪裡？)
- Addetto: Vada dritto e poi a destra. (請直走，然後往右。)
- Viaggiatore: Dritto e poi a destra. (直走，然後往右。)
- Addetto: Poi prenda le scale. (然後走樓梯。)
- Viaggiatore: Va bene, grazie. (好的，謝謝。)
- Addetto: Prego. (不客氣。)
- Viaggiatore: Grazie. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Sì, mi dica. (好的，請說。) | Mi scusi, dov'è il binario due? (不好意思，二號月台在哪裡？) | 1. Dov'è il bagno? (洗手間在哪裡？) [restroom_question_wrong_goal] - feedback: 這是在問洗手間。你的目標是找到二號月台。<br>2. Un taxi per il centro, per favore. (請叫一台去市中心的計程車。) [taxi_destination_answer] - feedback: 這換成搭計程車的情境了。現在要問車站月台方向。 | 問路先用 Mi scusi 開頭很自然。 |  |
| t2 | Vada dritto e poi a destra. (請直走，然後往右。) | Dritto e poi a destra. (直走，然後往右。) | 1. A sinistra e poi giù. (往左，然後下樓。) [wrong_direction] - feedback: 方向聽錯了。服務人員說的是直走，然後往右。<br>2. Pago con la carta. (我用卡付款。) [payment_answer] - feedback: 這是付款句，不是在確認方向。 | 抓住 dritto 和 destra 兩個方向詞。 | Dritto / a destra<br>dritto 是直走，a destra 是往右。<br>Vada dritto. = 請直走。<br>Poi a destra. = 然後往右。 |
| t3 | Poi prenda le scale. (然後走樓梯。) | Va bene, grazie. (好的，謝謝。) | 1. Il binario cinque, giusto? (五號月台，對嗎？) [wrong_platform_number] - feedback: 月台號碼變錯了。你問的是二號月台。<br>2. Devo cambiare treno, comprare un biglietto e andare al centro. (我要換車、買票，然後去市中心。) [over_detailed_route] - feedback: 這太長，也不是本回合需要的確認。先用短句確認方向。 | 如果聽懂了，可以用 Va bene 簡短確認。 |  |
| t4 | Prego. (不客氣。) | Grazie. (謝謝。) | 1. Vorrei una pasta. (我想要一份義大利麵。) [restaurant_order] - feedback: 這是餐廳點餐，不是車站問路結尾。<br>2. Qual è la password del Wi-Fi? (Wi-Fi 密碼是什麼？) [hotel_question] - feedback: 這是飯店問題。你已經拿到車站方向，只要道謝。 | 問路結尾再道謝即可。 |  |

---

## a1:it:travel_taxi_destination - Dire la destinazione in taxi

- Level: A1
- Language: Italian (it)
- Scenario ID: travel_taxi_destination
- Setting: Taxi
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你上了計程車。用簡短義大利語說目的地、確認，並聽懂大概時間。

### Clean Dialogue Path

- Autista: Buongiorno. Dove andiamo? (早安。要去哪裡？)
- Passeggero: All'hotel Roma, per favore. (到羅馬飯店，謝謝。)
- Autista: All'hotel Roma, giusto? (到羅馬飯店，對嗎？)
- Passeggero: Sì, esatto. (對，沒錯。)
- Autista: Va bene. Ci vogliono circa dieci minuti. (好的。大約需要十分鐘。)
- Passeggero: Va bene. (好的。)
- Autista: Eccoci, siamo arrivati. (到了，我們到了。)
- Passeggero: Grazie, buona giornata. (謝謝，祝您有美好的一天。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno. Dove andiamo? (早安。要去哪裡？) | All'hotel Roma, per favore. (到羅馬飯店，謝謝。) | 1. Dov'è il bagno? (洗手間在哪裡？) [directions_request_not_destination] - feedback: 這是在問路。司機問的是要開去哪裡。<br>2. Un biglietto, per favore. (一張票，謝謝。) [ticket_purchase_wrong_scenario] - feedback: 這像是在車站買票，不是在計程車上說目的地。 |  |  |
| t2 | All'hotel Roma, giusto? (到羅馬飯店，對嗎？) | Sì, esatto. (對，沒錯。) | 1. All'hotel Roma, per favore. (到羅馬飯店，謝謝。) [repeated_prior_destination] - feedback: 目的地已經說過了。現在司機是在確認，要回答對或不對。<br>2. No, scendo qui. (不，我在這裡下車。) [cancellation_instead_of_confirmation] - feedback: 這會改變行程。目的地正確時應該確認。 |  |  |
| t3 | Va bene. Ci vogliono circa dieci minuti. (好的。大約需要十分鐘。) | Va bene. (好的。) | 1. Quanto costa? (多少錢？) [fare_detail_out_of_scope] - feedback: 這會切到費用細節；本場景只練目的地和簡短行程狀態。<br>2. Vorrei un caffè. (我想要一杯咖啡。) [wrong_scenario_request] - feedback: 這是咖啡店句子，不是回應司機說的時間。 |  |  |
| t4 | Eccoci, siamo arrivati. (到了，我們到了。) | Grazie, buona giornata. (謝謝，祝您有美好的一天。) | 1. Dove andiamo? (我們去哪裡？) [driver_role_sentence] - feedback: 這是司機會問的句子。乘客到達時應該道謝。<br>2. Un biglietto per Roma. (一張去羅馬的票。) [ticket_purchase_wrong_scenario] - feedback: 這回到買票情境，不是計程車到達結尾。 |  |  |

---

## a1:it:travel_ticket_buying - Comprare un biglietto

- Level: A1
- Language: Italian (it)
- Scenario ID: travel_ticket_buying
- Setting: Biglietteria della stazione
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在義大利車站售票窗口。買一張到米蘭的普通票，確認後付款或道謝。

### Clean Dialogue Path

- Addetto: Buongiorno, prego. (您好，請說。)
- Viaggiatore: Un biglietto per Milano, per favore. (請給我一張到米蘭的票。)
- Addetto: Un biglietto per Milano, giusto? (一張到米蘭的票，對嗎？)
- Viaggiatore: Sì, giusto. (是的，沒錯。)
- Addetto: Sono dodici euro. (十二歐元。)
- Viaggiatore: Con carta, per favore. (我刷卡付款。)
- Addetto: Ecco il biglietto. Binario tre. (這是車票。三號月台。)
- Viaggiatore: Grazie. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buongiorno, prego. (您好，請說。) | Un biglietto per Milano, per favore. (請給我一張到米蘭的票。) | 1. Dov'è il binario? (月台在哪裡？) [directions_instead_of_purchase] - feedback: 這是在問路。現在需要先買票。<br>2. Un cappuccino, per favore. (請給我一杯卡布奇諾。) [food_order] - feedback: 這是在咖啡館點飲料，不是在車站買票。 | 說一張到目的地的票。 |  |
| t2 | Un biglietto per Milano, giusto? (一張到米蘭的票，對嗎？) | Sì, giusto. (是的，沒錯。) | 1. No, basta così. (不用，就這樣。) [cancel_when_confirming] - feedback: 這聽起來像拒絕或結束。對方正在確認目的地和數量。<br>2. Due biglietti per Roma. (兩張到羅馬的票。) [wrong_quantity_destination] - feedback: 這改成兩張和另一個目的地，和原本需求不一致。 | 確認正確即可。 |  |
| t3 | Sono dodici euro. (十二歐元。) | Con carta, per favore. (我刷卡付款。) | 1. Mi chiamo Luca. (我叫 Luca。) [self_intro_answer] - feedback: 這是自我介紹，不是回應票價或付款。<br>2. Vorrei prenotare una camera. (我想訂一間房。) [hotel_booking_phrase] - feedback: 這是飯店用語，不是買車票。 | 可以說用卡付款。 |  |
| t4 | Ecco il biglietto. Binario tre. (這是車票。三號月台。) | Grazie. (謝謝。) | 1. Piacere di conoscerti. (很高興認識你。) [self_intro_close] - feedback: 這是第一次見面收尾，不是售票窗口結束。<br>2. Parli più lentamente. (請說慢一點。) [repair_after_handover] - feedback: 如果已理解月台資訊，最後只要道謝即可。 | 用謝謝收尾。 |  |

---
