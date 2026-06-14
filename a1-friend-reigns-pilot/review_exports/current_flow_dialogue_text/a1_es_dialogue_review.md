# A1 Spanish Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:es:convenience_payment_card_cash - Pagar en una tienda

- Level: A1
- Language: Spanish (es)
- Scenario ID: convenience_payment_card_cash
- Setting: Caja de una tienda
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語便利店或小商店櫃台。聽店員問付款方式，選一句自然接得上的西班牙語。

### Clean Dialogue Path

- cajero: Son cuatro euros. ¿Con tarjeta o en efectivo? (四歐元。刷卡還是付現？)
- cliente: Con tarjeta, por favor. (刷卡，謝謝。)
- cajero: Perfecto. Acerque la tarjeta, por favor. (好的。請把卡靠近感應。)
- cliente: Sí, gracias. (好的，謝謝。)
- cajero: ¿Quiere recibo? (要收據嗎？)
- cliente: No, gracias. (不用，謝謝。)
- cajero: Listo. Gracias. (好了，謝謝。)
- cliente: Gracias. (謝謝。)
- cajero: Aquí tiene su bolsa. (這是您的袋子。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Son cuatro euros. ¿Con tarjeta o en efectivo? (四歐元。刷卡還是付現？) | Con tarjeta, por favor. (刷卡，謝謝。) | 1. Un café con leche, por favor. (一杯牛奶咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在商店櫃台付款。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。店員現在問你怎麼付款。 | 店員在問付款方式。可以簡短回答「Con tarjeta」或「En efectivo」。 | con tarjeta / en efectivo<br>「con tarjeta」是用卡付款，「en efectivo」是付現。<br>Con tarjeta, por favor. = 刷卡，謝謝。<br>En efectivo, por favor. = 付現，謝謝。 |
| t2 | Perfecto. Acerque la tarjeta, por favor. (好的。請把卡靠近感應。) | Sí, gracias. (好的，謝謝。) | 1. En efectivo, por favor. (付現，謝謝。) [wrong_payment_method_switch] - feedback: 你剛剛選了刷卡。現在店員在請你用卡付款。<br>2. Para llevar, por favor. (外帶，謝謝。) [wrong_scenario_response] - feedback: 這是咖啡店或餐點選項。現在是付款流程。 | 店員請你刷卡或感應。簡短確認就好。 |  |
| t3 | ¿Quiere recibo? (要收據嗎？) | No, gracias. (不用，謝謝。) | 1. Con tarjeta, por favor. (刷卡，謝謝。) [repeated_prior_answer] - feedback: 付款方式已經說過了。現在店員問你要不要收據。<br>2. A las tres. (三點。) [wrong_scenario_response] - feedback: 這是在回答時間。現在問題是要不要收據。 | 要或不要都可以。A1 先練一句短答。 |  |
| t4 | Listo. Gracias. (好了，謝謝。) | Gracias. (謝謝。) | 1. Tengo una reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在你已經完成付款。<br>2. No quiero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這樣像是在拒絕購買。付款完成後，說「Gracias」就好。 | 交易完成了。用一句謝謝收尾。 |  |

---

## a1:es:core_repair_repeat_slowly - Pedir que repitan despacio

- Level: A1
- Language: Spanish (es)
- Scenario ID: core_repair_repeat_slowly
- Setting: Mostrador de una cafetería
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台沒聽清楚問題。先修復對話，再回答。

### Clean Dialogue Path

- empleado: ¿Lo quiere para llevar? (您要外帶嗎？)
- cliente: ¿Puede repetir, por favor? (可以請您再說一次嗎？)
- empleado: Claro. ¿Para llevar? (當然。外帶嗎？)
- cliente: Más despacio, por favor. (請慢一點。)
- empleado: ¿Para llevar o para tomar aquí? (外帶還是在這裡喝？)
- cliente: Aquí, por favor. (在這裡，謝謝。)
- empleado: Perfecto. Tome asiento, por favor. (好的。請坐。)
- cliente: Gracias. (謝謝。)
- empleado: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Lo quiere para llevar? (您要外帶嗎？) | ¿Puede repetir, por favor? (可以請您再說一次嗎？) | 1. Sí, correcto. (對，沒錯。) [blind_confirmation] - feedback: 你還沒聽懂時不要盲目確認。先請對方重複。<br>2. Mucho gusto. (很高興認識你。) [wrong_scenario_self_intro] - feedback: 這是自我介紹結尾，不是請對方重複。 | 你沒聽清楚。先請對方再說一次。 |  |
| t2 | Claro. ¿Para llevar? (當然。外帶嗎？) | Más despacio, por favor. (請慢一點。) | 1. Gracias, adiós. (謝謝，再見。) [closing_before_understanding] - feedback: 還沒理解問題，不要直接結束對話。<br>2. Un billete a Madrid. (一張去馬德里的票。) [wrong_scenario_ticket] - feedback: 這是買票句，不是請對方說慢一點。 | 還是太快。請對方說慢一點。 | Repetir y hablar despacio<br>沒聽清楚時，可以先說 ¿Puede repetir, por favor?，再說 Más despacio, por favor。<br>¿Puede repetir, por favor? = 可以請您再說一次嗎？<br>Más despacio, por favor. = 請慢一點。 |
| t3 | ¿Para llevar o para tomar aquí? (外帶還是在這裡喝？) | Aquí, por favor. (在這裡，謝謝。) | 1. ¿Puede repetir, por favor? (可以請您再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經用簡單方式重述了，現在可以回答。<br>2. Soy de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答內用或外帶。 | 現在問題清楚了。簡短回答在這裡。 |  |
| t4 | Perfecto. Tome asiento, por favor. (好的。請坐。) | Gracias. (謝謝。) | 1. Dos billetes, por favor. (請給我兩張票。) [wrong_scenario_ticket_quantity] - feedback: 這是買票數量，不是櫃台修復對話結尾。<br>2. No entiendo nada. (我完全不懂。) [overbroad_repair_after_success] - feedback: 你已經成功理解並回答了。這裡道謝即可。 | 對方已經幫你處理。簡短道謝。 |  |

---

## a1:es:daily_meet_friend - Quedar con un amigo

- Level: A1
- Language: Spanish (es)
- Scenario ID: daily_meet_friend
- Setting: Entrada de una cafetería
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友碰面。選一句自然、簡短的西班牙語。

### Clean Dialogue Path

- amiga: ¡Hola! ¿Eres Alex? (嗨！你是 Alex 嗎？)
- amigo: Sí, soy Alex. (對，我是 Alex。)
- amiga: Qué bien. ¿Estás listo? (太好了。你準備好了嗎？)
- amigo: Sí, estoy listo. (對，我準備好了。)
- amiga: Perfecto. Vamos al café. (好。我們去咖啡店吧。)
- amigo: Sí, vamos. (好，走吧。)
- amiga: Sí, vamos. (好，走吧。)
- amigo: Sí, vamos. (好，走吧。)
- amiga: Genial. (太好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¡Hola! ¿Eres Alex? (嗨！你是 Alex 嗎？) | Sí, soy Alex. (對，我是 Alex。) | 1. La cuenta, por favor. (請結帳。) [wrong_scenario_payment] - feedback: 這是在餐廳結帳，不是和朋友確認身份。<br>2. ¿Cuánto cuesta esto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在問價格，不是回朋友的招呼。 | 朋友在確認是不是你。用簡短自然的回答。 |  |
| t2 | Qué bien. ¿Estás listo? (太好了。你準備好了嗎？) | Sí, estoy listo. (對，我準備好了。) | 1. Quiero un café. (我想要一杯咖啡。) [wrong_scenario_ordering] - feedback: 這是在點飲料。朋友問你是否準備好。<br>2. ¿Dónde está la estación? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路。現在只要回答準備好了。 | 朋友在問你可不可以出發。 | Estoy listo<br>和朋友碰面時，可以用 Estoy listo/lista 表示準備好了。A1 可先用 listo。<br>Sí, estoy listo. = 對，我準備好了。<br>Vamos. = 走吧。 |
| t3 | Perfecto. Vamos al café. (好。我們去咖啡店吧。) | Sí, vamos. (好，走吧。) | 1. Pago con tarjeta. (我用卡付款。) [wrong_scenario_payment] - feedback: 這是付款句。朋友只是說一起走。<br>2. No soy Alex. (我不是 Alex。) [wrong_identity_after_confirm] - feedback: 前面已經確認是 Alex，這會讓情境不成立。 | 朋友說下一步。用短句同意。 |  |
| t4 | Sí, vamos. (好，走吧。) | Sí, vamos. (好，走吧。) | 1. Pago con tarjeta. (我用卡付款。) [wrong_scenario_payment] - feedback: 這是付款句。朋友只是說一起走。<br>2. No soy Alex. (我不是 Alex。) [wrong_identity_after_confirm] - feedback: 前面已經確認是 Alex，這會讓情境不成立。 | 用簡短自然的句子表示同意出發。 |  |

---

## a1:es:daily_schedule_time - Quedar a una hora

- Level: A1
- Language: Spanish (es)
- Scenario ID: daily_schedule_time
- Setting: Plan con una amiga
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在用西班牙語和朋友約時間。聽對方問什麼，選一個簡短自然的回答。

### Clean Dialogue Path

- amiga: ¿A qué hora quedamos? (我們幾點見？)
- tú: A las tres. (三點。)
- amiga: Vale. ¿En la entrada? (好。在入口嗎？)
- tú: Sí, en la entrada. (對，在入口。)
- amiga: Entonces, a las tres en la entrada. (那就三點在入口。)
- tú: Perfecto, nos vemos. (很好，到時見。)
- amiga: Genial. Hasta luego. (太好了，待會見。)
- tú: Hasta luego. (待會見。)
- amiga: Nos vemos a las tres. (三點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿A qué hora quedamos? (我們幾點見？) | A las tres. (三點。) | 1. En la entrada. (在入口。) [wrong_slot_location] - feedback: 這是在回答地點。對方問的是幾點。<br>2. Con tarjeta, por favor. (刷卡，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在是在約時間。 | 對方在問時間。用「A las...」加時間回答。 | A las...<br>說幾點見面時，常用「A las」加時間。<br>A las tres. = 三點。<br>A las cinco. = 五點。 |
| t2 | Vale. ¿En la entrada? (好。在入口嗎？) | Sí, en la entrada. (對，在入口。) | 1. A las tres. (三點。) [repeated_prior_answer] - feedback: 時間剛剛已經說過了。現在是在確認地點。<br>2. No quiero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這像是在拒絕。對方只是確認見面地點。 | 對方在確認地點。沒問題時，用短句確認。 |  |
| t3 | Entonces, a las tres en la entrada. (那就三點在入口。) | Perfecto, nos vemos. (很好，到時見。) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問路。現在是確認見面計畫。<br>2. Mañana por la mañana tengo muchas cosas y quizá después puedo. (明天早上我有很多事，也許之後可以。) [over_complex_schedule] - feedback: 這太長也太複雜。A1 先用「Perfecto, nos vemos」收尾。 | 對方整理了時間和地點。用自然的短句收尾。 |  |
| t4 | Genial. Hasta luego. (太好了，待會見。) | Hasta luego. (待會見。) | 1. Tengo una reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在只是朋友約時間。<br>2. En efectivo, por favor. (付現，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在計畫已經確認。 | 計畫完成了。回一句再見就可以。 |  |

---

## a1:es:daily_self_intro - Presentarse por primera vez

- Level: A1
- Language: Spanish (es)
- Scenario ID: daily_self_intro
- Setting: Mesa de intercambio de idiomas
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換活動第一次見到同桌的人。選一句自然、簡短的西班牙語。

### Clean Dialogue Path

- participante: Hola, soy Carla. ¿Y tú? (你好，我是 Carla。你呢？)
- participante nuevo: Hola, soy Alex. (你好，我是 Alex。)
- participante: Encantada, Alex. ¿De dónde eres? (很高興認識你，Alex。你來自哪裡？)
- participante nuevo: Soy de Taipei. (我來自台北。)
- participante: Qué bien. ¿Aprendes español? (很好。你在學西班牙語嗎？)
- participante nuevo: Sí, aprendo español. (對，我在學西班牙語。)
- participante: Perfecto. Mucho gusto. (太好了。很高興認識你。)
- participante nuevo: Mucho gusto. (很高興認識你。)
- participante: Bienvenido al grupo. (歡迎加入這個小組。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, soy Carla. ¿Y tú? (你好，我是 Carla。你呢？) | Hola, soy Alex. (你好，我是 Alex。) | 1. Quiero un billete. (我想要一張票。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在第一次見面介紹自己。<br>2. ¿Me das tu teléfono? (可以給我你的電話嗎？) [private_contact_request] - feedback: 這會要求私人聯絡方式，不適合這個 A1 自我介紹情境。 | 對方先自我介紹。用一句話說你的名字。 |  |
| t2 | Encantada, Alex. ¿De dónde eres? (很高興認識你，Alex。你來自哪裡？) | Soy de Taipei. (我來自台北。) | 1. Sí, soy Alex. (對，我是 Alex。) [repeat_prior_answer] - feedback: 名字已經說過了。現在要回答來自哪裡。<br>2. Con tarjeta, por favor. (請用卡付款。) [wrong_scenario_payment] - feedback: 這是付款方式，不是自我介紹。 | 對方問你來自哪裡。用短句回答。 | Soy + de<br>西班牙語自我介紹可以用 Soy Alex 和 Soy de Taipei 這類短句。<br>Soy Alex. = 我是 Alex。<br>Soy de Taipei. = 我來自台北。 |
| t3 | Qué bien. ¿Aprendes español? (很好。你在學西班牙語嗎？) | Sí, aprendo español. (對，我在學西班牙語。) | 1. Repite, por favor. (請再說一次。) [repair_when_understood] - feedback: 這是修復句。現在問題很清楚，可以直接回答。<br>2. Un café, por favor. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在回答學語言的問題。 | 用簡短句子說你正在學西班牙語。 |  |
| t4 | Perfecto. Mucho gusto. (太好了。很高興認識你。) | Mucho gusto. (很高興認識你。) | 1. Necesito un billete. (我需要一張票。) [wrong_scenario_ticket] - feedback: 這是買票需求，不是回應第一次見面。<br>2. Hable despacio, por favor. (請說慢一點。) [repair_when_closing] - feedback: 這是請對方放慢，現在是友善結尾。 | 用常見短句回應很高興認識你。 |  |

---

## a1:es:digital_battery_charging - Pedir cargar el teléfono

- Level: A1
- Language: Spanish (es)
- Scenario ID: digital_battery_charging
- Setting: Cafetería
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店。先問可不可以充手機，再問插座在哪裡，確認位置並道謝。

### Clean Dialogue Path

- empleado: Hola, ¿le ayudo? (您好，需要幫忙嗎？)
- cliente: ¿Puedo cargar mi teléfono aquí? (我可以在這裡充手機嗎？)
- empleado: Sí, claro. (可以，當然。)
- cliente: ¿Dónde está el enchufe? (插座在哪裡？)
- empleado: Está junto a la mesa. (在桌子旁邊。)
- cliente: ¿Junto a la mesa? (在桌子旁邊嗎？)
- empleado: Sí, ahí mismo. (對，就在那裡。)
- cliente: Gracias. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, ¿le ayudo? (您好，需要幫忙嗎？) | ¿Puedo cargar mi teléfono aquí? (我可以在這裡充手機嗎？) | 1. ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是在問 wifi 密碼。現在要問能不能充手機。<br>2. Un café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡，不是詢問充電許可。 | 先問可不可以充手機。西班牙語用 ¿Puedo...? 很自然。 |  |
| t2 | Sí, claro. (可以，當然。) | ¿Dónde está el enchufe? (插座在哪裡？) | 1. ¿Puedo cargar mi teléfono aquí? (我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意。現在要問插座在哪裡。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間，不是問插座位置。 | 對方同意了。接著問插座在哪裡。 | ¿Puedo...? / ¿Dónde está...?<br>問許可可用 ¿Puedo...?；問位置可用 ¿Dónde está...?。<br>¿Puedo cargar mi teléfono aquí? = 我可以在這裡充手機嗎？<br>¿Dónde está el enchufe? = 插座在哪裡？ |
| t3 | Está junto a la mesa. (在桌子旁邊。) | ¿Junto a la mesa? (在桌子旁邊嗎？) | 1. ¿La salida tres? (三號出口嗎？) [wrong_scenario_station] - feedback: 這像是在車站問出口。現在要確認插座位置。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是在結帳，沒有確認插座位置。 | 確認位置就好。重複關鍵位置。 |  |
| t4 | Sí, ahí mismo. (對，就在那裡。) | Gracias. (謝謝。) | 1. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方已經幫你確認位置。現在直接道謝。<br>2. ¿Tiene una mesa? (有桌子嗎？) [wrong_scenario_restaurant] - feedback: 這是在問座位，不是完成充電位置確認。 | 已經知道位置了。簡短道謝。 |  |

---

## a1:es:digital_wifi_connect - Pedir la clave del wifi

- Level: A1
- Language: Spanish (es)
- Scenario ID: digital_wifi_connect
- Setting: Mostrador
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台。問 wifi 密碼，嘗試後說手機連不上，並謝謝對方。

### Clean Dialogue Path

- empleado: Hola, ¿necesita ayuda? (您好，需要幫忙嗎？)
- cliente: ¿Cuál es la clave del wifi? (wifi 密碼是什麼？)
- empleado: La clave es cafe2026. (密碼是 cafe2026。)
- cliente: Gracias, voy a probar. (謝謝，我試一下。)
- empleado: ¿Funciona? (可以用嗎？)
- cliente: No, no se conecta. (不，連不上。)
- empleado: Pruebe otra vez, por favor. (請再試一次。)
- cliente: De acuerdo, gracias. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, ¿necesita ayuda? (您好，需要幫忙嗎？) | ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) | 1. Un café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡。現在要問 wifi 密碼。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向，不是問 wifi。 | 你要問 wifi 密碼。用 clave del wifi 很自然。 |  |
| t2 | La clave es cafe2026. (密碼是 cafe2026。) | Gracias, voy a probar. (謝謝，我試一下。) | 1. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。對方剛剛給了 wifi 密碼。<br>2. ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經說了密碼。現在要表示你試一下。 | 對方給了密碼。先說謝謝，表示你試一下。 | La clave es... / No se conecta<br>問密碼用 ¿Cuál es la clave...?；連不上可以說 No se conecta。<br>¿Cuál es la clave del wifi? = wifi 密碼是什麼？<br>No se conecta. = 連不上。 |
| t3 | ¿Funciona? (可以用嗎？) | No, no se conecta. (不，連不上。) | 1. Sí, gracias. (可以，謝謝。) [wrong_connection_status] - feedback: 情境是連不上。要說 No se conecta。<br>2. Quiero una mesa. (我想要一張桌子。) [wrong_scenario_restaurant] - feedback: 這是餐廳需求。現在要回報 wifi 連不上。 | 手機還是連不上。用 No se conecta。 |  |
| t4 | Pruebe otra vez, por favor. (請再試一次。) | De acuerdo, gracias. (好的，謝謝。) | 1. Al hotel Central, por favor. (到中央飯店，謝謝。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。現在是在處理 wifi。<br>2. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方正在幫你。接受簡單指示並道謝比較合適。 | 對方給了簡單指示。用 De acuerdo, gracias 結束。 |  |

---

## a1:es:food_bill_payment - Pagar la cuenta

- Level: A1
- Language: Spanish (es)
- Scenario ID: food_bill_payment
- Setting: Cafetería sencilla
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語咖啡店用餐後要結帳。選一句簡短自然的西班牙語。

### Clean Dialogue Path

- camarero: ¿Todo bien? ¿Necesita algo más? (都還好嗎？還需要什麼嗎？)
- cliente: La cuenta, por favor. (請結帳。)
- camarero: Claro. ¿Paga con tarjeta o en efectivo? (好的。您用卡還是現金付款？)
- cliente: Con tarjeta, por favor. (請用卡。)
- camarero: Perfecto. ¿Quiere recibo? (好的。您要收據嗎？)
- cliente: No, gracias. (不用，謝謝。)
- camarero: Listo, muchas gracias. (好了，非常謝謝。)
- cliente: Gracias. Adiós. (謝謝。再見。)
- camarero: Hasta luego. (再見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Todo bien? ¿Necesita algo más? (都還好嗎？還需要什麼嗎？) | La cuenta, por favor. (請結帳。) | 1. Quiero otra sopa. (我想再要一份湯。) [wrong_sequence_more_food] - feedback: 這是在加點食物。現在的目標是結帳。<br>2. ¿Dónde está la estación? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在餐廳結帳。 | 你已經吃完了。現在可以請服務生拿帳單。 |  |
| t2 | Claro. ¿Paga con tarjeta o en efectivo? (好的。您用卡還是現金付款？) | Con tarjeta, por favor. (請用卡。) | 1. Sin recibo, gracias. (不用收據，謝謝。) [wrong_prompt_receipt] - feedback: 這是在回答收據問題。現在問的是付款方式。<br>2. ¿Cuánto cuesta esto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在商店問商品價格，不是餐廳付帳。 | 服務生在問付款方式。選一個短回答。 | La cuenta + pago<br>在餐廳要結帳，可以說 La cuenta, por favor。付款時說 Con tarjeta 或 En efectivo。<br>La cuenta, por favor. = 請結帳。<br>Con tarjeta, por favor. = 請用卡。 |
| t3 | Perfecto. ¿Quiere recibo? (好的。您要收據嗎？) | No, gracias. (不用，謝謝。) | 1. Somos dos personas. (我們是兩個人。) [wrong_prior_context] - feedback: 人數不是現在的問題。服務生問你要不要收據。<br>2. Quedamos aquí. (我們在這裡見。) [wrong_scenario_meeting] - feedback: 這是朋友碰面情境，不是付款收據。 | 如果不需要收據，簡短說不用。 |  |
| t4 | Listo, muchas gracias. (好了，非常謝謝。) | Gracias. Adiós. (謝謝。再見。) | 1. Quiero un café. (我想要一杯咖啡。) [wrong_sequence_ordering] - feedback: 付款已完成，現在不是再點餐。<br>2. ¿Cuánto cuesta esto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是購物問價，不是結帳結尾。 | 交易完成了，禮貌回謝即可。 |  |

---

## a1:es:food_coffee_ordering - Pedir un café

- Level: A1
- Language: Spanish (es)
- Scenario ID: food_coffee_ordering
- Setting: Mostrador de cafetería
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語咖啡店櫃台。聽店員問什麼，選一句自然接得上的西班牙語。

### Clean Dialogue Path

- barista: Hola, ¿qué va a tomar? (您好，要給您什麼呢？)
- cliente: Un café con leche, por favor. (一杯牛奶咖啡，謝謝。)
- barista: ¿Para tomar aquí o para llevar? (內用還是外帶？)
- cliente: Para llevar, por favor. (外帶，謝謝。)
- barista: Un café con leche para llevar, entonces. (那就是一杯牛奶咖啡外帶。)
- cliente: Sí, gracias. (是的，謝謝。)
- barista: Son tres euros. Enseguida estará listo. (三歐元。很快就好。)
- cliente: Gracias. (謝謝。)
- barista: Aquí tiene su café. (這是您的咖啡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, ¿qué va a tomar? (您好，要給您什麼呢？) | Un café con leche, por favor. (一杯牛奶咖啡，謝謝。) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員在等你點飲料。<br>2. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這樣像是在說不點。要點飲料時，說「Un café..., por favor」。 | 店員在問你要點什麼。用「Un/Una..., por favor」就能點餐。 |  |
| t2 | ¿Para tomar aquí o para llevar? (內用還是外帶？) | Para llevar, por favor. (外帶，謝謝。) | 1. Un café con leche, por favor. (一杯牛奶咖啡，謝謝。) [repeated_prior_answer] - feedback: 飲料已經點了。這裡是在問內用或外帶。<br>2. Sí, por favor. (好的，謝謝。) [wrong_act_confirmation] - feedback: 店員給你兩個選項，不是問是或不是。要選「aquí」或「para llevar」。 | aquí 是這裡，para llevar 是外帶。選一個短句回答就好。 | aquí / para llevar<br>「aquí」是這裡，「para llevar」是外帶。<br>Aquí. = 內用。<br>Para llevar. = 外帶。 |
| t3 | Un café con leche para llevar, entonces. (那就是一杯牛奶咖啡外帶。) | Sí, gracias. (是的，謝謝。) | 1. No quiero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這樣像是在取消。訂單沒問題時，說「Sí, gracias」。<br>2. Tengo una reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在是在確認咖啡訂單。 | 店員在確認訂單。沒問題時，可以簡短說「Sí」。 |  |
| t4 | Son tres euros. Enseguida estará listo. (三歐元。很快就好。) | Gracias. (謝謝。) | 1. Para llevar, por favor. (外帶，謝謝。) [repeated_prior_answer] - feedback: 外帶剛剛已經說過了。現在是付款和等待。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [off_topic_statement] - feedback: 先完成咖啡付款。問洗手間是另一個場景。 | 店員說價格，也說很快就好。簡短說謝謝就可以。 |  |

---

## a1:es:food_restaurant_ordering - Pedir en un restaurante

- Level: A1
- Language: Spanish (es)
- Scenario ID: food_restaurant_ordering
- Setting: Mesa de restaurante sencillo
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語餐廳。聽服務生問什麼，選一句短而自然的西班牙語回答。

### Clean Dialogue Path

- camarero: Buenas tardes. ¿Ya sabe qué va a pedir? (午安。您已經知道要點什麼了嗎？)
- cliente: Sí, estoy listo. (是的，我準備好了。)
- camarero: Perfecto. ¿Qué va a tomar? (好的。您要點什麼？)
- cliente: Quiero una sopa, por favor. (我想要一份湯，謝謝。)
- camarero: Una sopa, entonces. ¿Algo más? (那就是一份湯。還需要別的嗎？)
- cliente: No, gracias. Está bien. (不用了，謝謝。這樣可以。)
- camarero: Muy bien. Su sopa sale en unos minutos. (很好。您的湯幾分鐘後會好。)
- cliente: Gracias. (謝謝。)
- camarero: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buenas tardes. ¿Ya sabe qué va a pedir? (午安。您已經知道要點什麼了嗎？) | Sí, estoy listo. (是的，我準備好了。) | 1. La cuenta, por favor. (請結帳。) [wrong_sequence_bill] - feedback: 這句是在用餐後結帳。現在才要開始點餐。<br>2. Un café para llevar. (一杯咖啡外帶。) [wrong_setting_cafe] - feedback: 這像咖啡店外帶。餐廳點餐先回答你準備好了。 | 服務生在問你準備好點餐了嗎。可以先簡短說「Sí」。 |  |
| t2 | Perfecto. ¿Qué va a tomar? (好的。您要點什麼？) | Quiero una sopa, por favor. (我想要一份湯，謝謝。) | 1. Somos dos personas. (我們是兩個人。) [wrong_prior_context] - feedback: 人數不是現在的問題。服務生正在問你要點哪一道菜。<br>2. Pago con tarjeta. (我用卡付款。) [wrong_sequence_payment] - feedback: 付款還太早。現在要先點餐。 | 用「Quiero」或「Me trae」加一道菜，最後加 por favor。 | Quiero + un plato<br>在一般餐廳，可以用 Quiero 或 Me trae 來點一道菜。A1 先用 Quiero 就好。<br>Quiero una sopa, por favor. = 我想要一份湯，謝謝。<br>Me trae una ensalada, por favor. = 請給我一份沙拉。 |
| t3 | Una sopa, entonces. ¿Algo más? (那就是一份湯。還需要別的嗎？) | No, gracias. Está bien. (不用了，謝謝。這樣可以。) | 1. Un café para llevar. (一杯咖啡外帶。) [wrong_setting_cafe] - feedback: 這會換到咖啡外帶情境。這裡只要確認餐點即可。<br>2. Quiero tres sopas. (我要三份湯。) [wrong_quantity] - feedback: 服務生確認的是一份湯。若沒有要改數量，就不要說三份。 | 訂單對了，而且不加點時，用 No, gracias。 |  |
| t4 | Muy bien. Su sopa sale en unos minutos. (很好。您的湯幾分鐘後會好。) | Gracias. (謝謝。) | 1. ¿Dónde está la estación? (車站在哪裡？) [wrong_scenario_request] - feedback: 這是問路情境。餐廳點餐完成時，只要道謝。<br>2. La cuenta, por favor. (請結帳。) [wrong_sequence_bill] - feedback: 你還沒吃完。服務生只是說餐點會送來。 | 服務生說訂單會準備。簡短道謝就好。 |  |

---

## a1:es:hotel_checkout - Hacer el check-out

- Level: A1
- Language: Spanish (es)
- Scenario ID: hotel_checkout
- Setting: Recepción de hotel
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。說要退房、房號、交回房卡，並道謝。

### Clean Dialogue Path

- recepcionista: Buenos días, ¿en qué le puedo ayudar? (早安，有什麼可以幫您的？)
- huésped: Quiero hacer el check-out. (我想退房。)
- recepcionista: Claro. ¿Cuál es su número de habitación? (好的。您的房號是多少？)
- huésped: La habitación 304. (304 號房。)
- recepcionista: ¿Me da la tarjeta, por favor? (請把房卡給我，好嗎？)
- huésped: Aquí tiene la tarjeta. (房卡給您。)
- recepcionista: Listo, el check-out está hecho. (好了，退房完成了。)
- huésped: Muchas gracias. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buenos días, ¿en qué le puedo ayudar? (早安，有什麼可以幫您的？) | Quiero hacer el check-out. (我想退房。) | 1. ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) [wrong_hotel_request] - feedback: 這是在問 wifi。現在目標是退房。<br>2. Tengo una reserva. (我有訂房。) [wrong_act_checkin] - feedback: 這是入住句。你現在要辦退房。 | 你要退房。直接說 Quiero hacer el check-out。 |  |
| t2 | Claro. ¿Cuál es su número de habitación? (好的。您的房號是多少？) | La habitación 304. (304 號房。) | 1. Salida dos. (二號出口。) [wrong_number_type] - feedback: 這是出口號碼。櫃台問的是房號。<br>2. Una mesa para dos. (兩位用餐。) [wrong_scenario_restaurant] - feedback: 這是餐廳入座句，不是飯店退房。 | 櫃台問房號。用 La habitación... 回答。 | La habitación... / Aquí tiene...<br>退房時可以用 La habitación 加房號；交東西時用 Aquí tiene...<br>La habitación 304. = 304 號房。<br>Aquí tiene la tarjeta. = 房卡給您。 |
| t3 | ¿Me da la tarjeta, por favor? (請把房卡給我，好嗎？) | Aquí tiene la tarjeta. (房卡給您。) | 1. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。退房時要交回房卡。<br>2. Al hotel Central. (到中央飯店。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。櫃台現在要房卡。 | 櫃台要房卡。交給對方時說 Aquí tiene la tarjeta。 |  |
| t4 | Listo, el check-out está hecho. (好了，退房完成了。) | Muchas gracias. (非常謝謝。) | 1. Quiero hacer el check-out. (我想退房。) [repeated_prior_request] - feedback: 退房已經完成了。現在道謝即可。<br>2. ¿A qué hora es el desayuno? (早餐是幾點？) [wrong_hotel_request] - feedback: 這是早餐問題。退房已完成，先結束對話。 | 流程完成。用 Gracias 或 Muchas gracias 結束。 |  |

---

## a1:es:hotel_wifi_breakfast - Preguntar por wifi y desayuno

- Level: A1
- Language: Spanish (es)
- Scenario ID: hotel_wifi_breakfast
- Setting: Recepción del hotel
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。用短句問 wifi 密碼和早餐時間。

### Clean Dialogue Path

- recepcionista: Hola, ¿en qué puedo ayudarle? (您好，我可以怎麼幫您？)
- huésped: ¿Cuál es la clave del wifi? (wifi 密碼是什麼？)
- recepcionista: Está en la tarjeta de la habitación. (在房卡套上。)
- huésped: Gracias. ¿A qué hora es el desayuno? (謝謝。早餐是幾點？)
- recepcionista: El desayuno es de siete a diez, en el primer piso. (早餐是七點到十點，在一樓。)
- huésped: De siete a diez, gracias. (七點到十點，謝謝。)
- recepcionista: ¿Necesita algo más? (您還需要別的嗎？)
- huésped: No, gracias. (不用了，謝謝。)
- recepcionista: De nada. Que tenga buena estancia. (不客氣。祝您住宿愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, ¿en qué puedo ayudarle? (您好，我可以怎麼幫您？) | ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) | 1. Quiero una sopa, por favor. (我想要一份湯，謝謝。) [wrong_scenario_order] - feedback: 這是餐廳點餐。你現在在飯店櫃台問 wifi。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是問飯店 wifi。 | 你要問 wifi 密碼。用 clave del wifi 很自然。 |  |
| t2 | Está en la tarjeta de la habitación. (在房卡套上。) | Gracias. ¿A qué hora es el desayuno? (謝謝。早餐是幾點？) | 1. Necesito otra llave. (我需要另一把鑰匙。) [wrong_hotel_request] - feedback: 這是在要房卡或鑰匙。現在要接著問早餐資訊。<br>2. Pago con tarjeta. (我用卡付款。) [wrong_sequence_payment] - feedback: 這是付款回答。櫃台剛剛回答的是 wifi 密碼在哪裡。 | 對方說密碼在房間卡片上。接著問早餐時間。 | ¿Cuál es...? / ¿A qué hora...?<br>問資訊時可以用 ¿Cuál es...?；問時間時用 ¿A qué hora...?<br>¿Cuál es la clave del wifi? = wifi 密碼是什麼？<br>¿A qué hora es el desayuno? = 早餐是幾點？ |
| t3 | El desayuno es de siete a diez, en el primer piso. (早餐是七點到十點，在一樓。) | De siete a diez, gracias. (七點到十點，謝謝。) | 1. A las doce, gracias. (十二點，謝謝。) [wrong_time] - feedback: 對方說七點到十點，不是十二點。<br>2. Una mesa para dos. (兩位用餐。) [wrong_restaurant_context] - feedback: 這是餐廳入座句。你現在只是確認飯店早餐時間。 | 重點是時間七點到十點，地點一樓。用短句確認。 |  |
| t4 | ¿Necesita algo más? (您還需要別的嗎？) | No, gracias. (不用了，謝謝。) | 1. ¿Dónde está la salida dos? (二號出口在哪裡？) [wrong_scenario_station] - feedback: 這是車站問路。飯店櫃台問題已經問完了。<br>2. Quiero una sopa. (我想要一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是飯店櫃台結尾。 | 如果沒有其他問題，用短句說不用了並道謝。 |  |

---

## a1:es:problem_lost_item - Decir que perdiste algo

- Level: A1
- Language: Spanish (es)
- Scenario ID: problem_lost_item
- Setting: Mostrador de información
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。說一個小物品不見了，回答可能在哪裡不見，確認下一步去哪裡問，最後道謝。

### Clean Dialogue Path

- empleado: Hola, ¿en qué le ayudo? (您好，我能怎麼幫您？)
- cliente: Perdí mi bolso. (我的包包不見了。)
- empleado: ¿Dónde lo perdió? (您在哪裡弄丟的？)
- cliente: Creo que en la cafetería. (我想是在咖啡店。)
- empleado: Pregunte en objetos perdidos, al lado. (請到旁邊的失物招領問。)
- cliente: ¿En objetos perdidos? (在失物招領嗎？)
- empleado: Sí, pregunte allí. (對，請在那裡問。)
- cliente: Gracias. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, ¿en qué le ayudo? (您好，我能怎麼幫您？) | Perdí mi bolso. (我的包包不見了。) | 1. ¿Cuánto cuesta? (多少錢？) [wrong_scenario_price] - feedback: 這是在問價格。現在要說東西不見了。<br>2. Quiero un café. (我想要一杯咖啡。) [wrong_scenario_order] - feedback: 這是在點餐，不是尋求失物協助。 | 先說你的小包不見了。用 Perdí... 很簡單。 |  |
| t2 | ¿Dónde lo perdió? (您在哪裡弄丟的？) | Creo que en la cafetería. (我想是在咖啡店。) | 1. A las tres. (三點。) [wrong_answer_time] - feedback: 對方問在哪裡，不是問時間。<br>2. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 你正在尋求協助。需要回答可能的地點。 | 給一個簡單地點，不需要細節。 | Perdí... / en la cafetería<br>說遺失可用 Perdí...；地點可用 en + lugar。<br>Perdí mi bolso. = 我的包包不見了。<br>Creo que en la cafetería. = 我想是在咖啡店。 |
| t3 | Pregunte en objetos perdidos, al lado. (請到旁邊的失物招領問。) | ¿En objetos perdidos? (在失物招領嗎？) | 1. Quiero pagar ahora. (我現在想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是確認去哪裡問失物。<br>2. Perdí mi bolso. (我的包包不見了。) [repeated_prior_statement] - feedback: 你已經說過遺失物。現在要確認下一步。 | 確認下一步去哪裡問。 |  |
| t4 | Sí, pregunte allí. (對，請在那裡問。) | Gracias. (謝謝。) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間。現在應該感謝對方。<br>2. Es muy caro. (太貴了。) [wrong_scenario_price] - feedback: 這是在談價格，不是完成失物詢問。 | 已知道下一步。道謝結束。 |  |

---

## a1:es:shopping_ask_price - Preguntar el precio

- Level: A1
- Language: Spanish (es)
- Scenario ID: shopping_ask_price
- Setting: Puesto de mercado sencillo
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語小店。聽店員說什麼，選一句短而自然的西班牙語回答。

### Clean Dialogue Path

- vendedor: Hola, buenas. ¿Le ayudo? (您好。需要幫忙嗎？)
- cliente: Sí, ¿cuánto cuesta esto? (是的，這個多少錢？)
- vendedor: Cuesta cinco euros. (五歐元。)
- cliente: Vale, me lo llevo. (好，我買這個。)
- vendedor: Perfecto. Son cinco euros. (好的。總共五歐元。)
- cliente: Gracias. (謝謝。)
- vendedor: Gracias. (謝謝。)
- cliente: Gracias. (謝謝。)
- vendedor: Gracias a usted. (也謝謝您。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola, buenas. ¿Le ayudo? (您好。需要幫忙嗎？) | Sí, ¿cuánto cuesta esto? (是的，這個多少錢？) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_direction] - feedback: 這是在問路。這裡要問商品價格。<br>2. Un café, por favor. (請給我一杯咖啡。) [wrong_scenario_food] - feedback: 這像點飲料，不是在問商品價格。 | 店員在招呼你。先禮貌地問這個多少錢。 |  |
| t2 | Cuesta cinco euros. (五歐元。) | Vale, me lo llevo. (好，我買這個。) | 1. Pago con tarjeta. (我用卡付款。) [early_payment_method] - feedback: 這是付款方式。先回答你是否要買比較自然。<br>2. Quiero dos cafés. (我要兩杯咖啡。) [wrong_item_quantity] - feedback: 這換成點咖啡和數量了，不是回應商品價格。 | 聽到價格後，可以確認或說要買。 | ¿Cuánto cuesta esto?<br>買東西時，問單一物品價格可以用 ¿Cuánto cuesta esto?。簡短自然。<br>¿Cuánto cuesta esto? = 這個多少錢？<br>Cuesta cinco euros. = 五歐元。 |
| t3 | Perfecto. Son cinco euros. (好的。總共五歐元。) | Gracias. (謝謝。) | 1. ¿A qué hora quedamos? (我們幾點見？) [wrong_scenario_meeting] - feedback: 這是和朋友見面的情境，不是買東西。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_restaurant] - feedback: 這通常在餐廳用。小店買商品不這樣說。 | 交易要結束了，簡短道謝即可。 |  |
| t4 | Gracias. (謝謝。) | Gracias. (謝謝。) | 1. ¿A qué hora quedamos? (我們幾點見？) [wrong_scenario_meeting] - feedback: 這是和朋友見面的情境，不是買東西。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_restaurant] - feedback: 這通常在餐廳用。小店買商品不這樣說。 | 用簡短自然的句子結束購物互動。 |  |

---

## a1:es:social_running_late - Avisar que llegas tarde

- Level: A1
- Language: Spanish (es)
- Scenario ID: social_running_late
- Setting: Mensaje a un amigo
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你要和朋友見面，但會晚到。簡短說抱歉、幾分鐘後到、謝謝對方等待，最後說等一下見。

### Clean Dialogue Path

- amigo: ¿Llegas pronto? (你快到了嗎？)
- amigo que llega tarde: Perdón, llego tarde. (抱歉，我會晚到。)
- amigo: ¿Cuántos minutos? (幾分鐘？)
- amigo que llega tarde: Unos diez minutos. (大約十分鐘。)
- amigo: Vale, te espero. (好，我等你。)
- amigo que llega tarde: Gracias por esperar. (謝謝你等我。)
- amigo: Nos vemos ahora. (等一下見。)
- amigo que llega tarde: Hasta ahora. (等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Llegas pronto? (你快到了嗎？) | Perdón, llego tarde. (抱歉，我會晚到。) | 1. Un café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點餐。現在要告訴朋友你會晚到。<br>2. Estoy en la calle Mayor. (我在 Mayor 街。) [sensitive_location_detail] - feedback: 這給了精準位置。這個情境只需要說會晚到。 | 朋友在等你。先簡短道歉並說會晚到。 |  |
| t2 | ¿Cuántos minutos? (幾分鐘？) | Unos diez minutos. (大約十分鐘。) | 1. La salida tres. (三號出口。) [wrong_number_context] - feedback: 這是在說出口，不是回答幾分鐘。<br>2. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 朋友問時間。需要給分鐘估計。 | 給一個短估計，不要解釋太多。 | Llego tarde / unos diez minutos<br>說晚到可用 Llego tarde；估時間可用 unos + 分鐘。<br>Perdón, llego tarde. = 抱歉，我會晚到。<br>Unos diez minutos. = 大約十分鐘。 |
| t3 | Vale, te espero. (好，我等你。) | Gracias por esperar. (謝謝你等我。) | 1. ¿Dónde está el enchufe? (插座在哪裡？) [wrong_scenario_charging] - feedback: 這是在問充電。現在要謝謝朋友等待。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是朋友聊天。 | 朋友願意等。謝謝對方等待。 |  |
| t4 | Nos vemos ahora. (等一下見。) | Hasta ahora. (等一下見。) | 1. Muchas gracias, señor. (非常謝謝您，先生。) [wrong_register_formal] - feedback: 這太像正式服務場合。朋友之間用 Hasta ahora。<br>2. Quiero pagar. (我想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是結束遲到訊息。 | 用自然的朋友收尾。 |  |

---

## a1:es:travel_hotel_checkin - Hacer el check-in en el hotel

- Level: A1
- Language: Spanish (es)
- Scenario ID: travel_hotel_checkin
- Setting: Recepción de hotel
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語飯店櫃台。辦理入住、說訂房姓名，並聽懂下一步。

### Clean Dialogue Path

- recepcionista: Buenas tardes, ¿en qué le puedo ayudar? (午安，有什麼可以幫您的？)
- huésped: Tengo una reserva. (我有訂房。)
- recepcionista: ¿A nombre de quién está la reserva? (訂房是用誰的名字？)
- huésped: A nombre de Lin. (用 Lin 的名字。)
- recepcionista: La encontré. Una noche, ¿verdad? (找到了。一晚，對嗎？)
- huésped: Sí, correcto. (是的，沒錯。)
- recepcionista: Esta es su llave. La habitación está en el tercer piso. (這是您的鑰匙。房間在三樓。)
- huésped: Gracias. (謝謝。)
- recepcionista: El desayuno es en la planta baja, de siete a diez. (早餐在一樓，七點到十點。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buenas tardes, ¿en qué le puedo ayudar? (午安，有什麼可以幫您的？) | Tengo una reserva. (我有訂房。) | 1. Un café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在飯店櫃台辦理入住。<br>2. ¿Dónde está la estación? (車站在哪裡？) [wrong_scenario_request] - feedback: 這句是在問路。櫃台現在在處理入住。 | 櫃台在問你需要什麼。入住時可以說「Tengo una reserva」。 |  |
| t2 | ¿A nombre de quién está la reserva? (訂房是用誰的名字？) | A nombre de Lin. (用 Lin 的名字。) | 1. Quiero salir del hotel. (我要離開飯店／退房。) [wrong_act_checkout] - feedback: 這像是在說退房或離開。你現在是入住，要說訂房姓名。<br>2. Está a la derecha. (在右邊。) [wrong_scenario_response] - feedback: 這是在回答方向。櫃台問的是訂房姓名。 | 櫃台在問訂房姓名。用「A nombre de...」回答。 | A nombre de...<br>「A nombre de...」可用來說訂房登記的名字。<br>A nombre de Lin. = 用 Lin 的名字。<br>La reserva está a nombre de Lin. = 訂房是 Lin 的名字。 |
| t3 | La encontré. Una noche, ¿verdad? (找到了。一晚，對嗎？) | Sí, correcto. (是的，沒錯。) | 1. Un café con leche. (一杯牛奶咖啡。) [wrong_scenario_request] - feedback: 這不是咖啡店。櫃台在確認你的訂房。<br>2. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這樣像是在拒絕。資料正確時，說「Sí, correcto」。 | 櫃台在確認資料。正確的話，簡短說是。 |  |
| t4 | Esta es su llave. La habitación está en el tercer piso. (這是您的鑰匙。房間在三樓。) | Gracias. (謝謝。) | 1. A nombre de Lin. (用 Lin 的名字。) [repeated_prior_answer] - feedback: 名字剛剛已經說過了。現在櫃台給你鑰匙和房間資訊。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個需求。先把入住流程結束。 | 你拿到鑰匙了。簡短說謝謝就可以。 |  |

---

## a1:es:travel_restroom_directions - Preguntar por el baño

- Level: A1
- Language: Spanish (es)
- Scenario ID: travel_restroom_directions
- Setting: Lugar público
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語公共場所。禮貌開口，問洗手間在哪裡，並確認方向。

### Clean Dialogue Path

- empleado: Sí, dígame. (好的，請說。)
- visitante: Disculpe, ¿dónde está el baño? (不好意思，洗手間在哪裡？)
- empleado: Siga recto y gire a la derecha. (直走，然後右轉。)
- visitante: ¿A la derecha? (往右邊嗎？)
- empleado: Sí, a la derecha. (是的，往右邊。)
- visitante: Gracias. (謝謝。)
- empleado: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Sí, dígame. (好的，請說。) | Disculpe, ¿dónde está el baño? (不好意思，洗手間在哪裡？) | 1. Un café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在你要問洗手間。<br>2. ¿Cuánto cuesta? (多少錢？) [wrong_scenario_request] - feedback: 這句是在問價格。要找洗手間時，問「¿dónde está el baño?」。 | 對方願意幫你。直接問洗手間在哪裡。 |  |
| t2 | Siga recto y gire a la derecha. (直走，然後右轉。) | ¿A la derecha? (往右邊嗎？) | 1. Para llevar, por favor. (外帶，謝謝。) [wrong_scenario_response] - feedback: 這是咖啡店外帶時用的回答。現在對方在說方向。<br>2. Sí, gracias. (是的，謝謝。) [underspecified_confirmation] - feedback: 只說是有點不清楚。確認方向時，可以說「¿A la derecha?」。 | recto 是直走，derecha 是右邊。可以確認是不是右轉。 | recto / derecha<br>「recto」是直走，「a la derecha」是往右邊。<br>Siga recto. = 請直走。<br>A la derecha. = 在右邊。 |
| t3 | Sí, a la derecha. (是的，往右邊。) | Gracias. (謝謝。) | 1. Un café con leche. (一杯牛奶咖啡。) [wrong_scenario_request] - feedback: 這又回到點飲料了。你已經問完方向，可以說謝謝。<br>2. A nombre de Lin. (用 Lin 的名字。) [wrong_scenario_response] - feedback: 這是飯店入住時說名字。現在是問路情境。 | 你確認方向了。最後說謝謝就好。 |  |

---

## a1:es:travel_station_directions - Preguntar por la salida

- Level: A1
- Language: Spanish (es)
- Scenario ID: travel_station_directions
- Setting: Estación de metro
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在西語地鐵站。用簡短西班牙語問出口，聽懂左轉、直走等方向。

### Clean Dialogue Path

- empleado: Sí, dígame. (好的，請說。)
- viajero: Perdón, ¿dónde está la salida dos? (不好意思，二號出口在哪裡？)
- empleado: Siga derecho y gire a la derecha. (直走，然後右轉。)
- viajero: Derecho y a la derecha. (直走，然後右邊。)
- empleado: Sí. Luego verá el cartel de la salida dos. (對。然後您會看到二號出口的標示。)
- viajero: Salida dos, gracias. (二號出口，謝謝。)
- empleado: Exacto. Está muy cerca. (沒錯。很近。)
- viajero: Muchas gracias. (非常謝謝。)
- empleado: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Sí, dígame. (好的，請說。) | Perdón, ¿dónde está la salida dos? (不好意思，二號出口在哪裡？) | 1. Un taxi al hotel, por favor. (請給我一台去飯店的計程車。) [wrong_transport_goal] - feedback: 這是在叫計程車。現在目標是問車站出口。<br>2. Pago con tarjeta. (我用卡付款。) [wrong_scenario_payment] - feedback: 這是付款回答，不是問路。 | 對方願意幫忙。直接問出口在哪裡。 |  |
| t2 | Siga derecho y gire a la derecha. (直走，然後右轉。) | Derecho y a la derecha. (直走，然後右邊。) | 1. A la izquierda. (左邊。) [wrong_direction] - feedback: 對方說的是右邊，不是左邊。<br>2. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是問洗手間。現在你要確認出口方向。 | derecho 是直走，derecha 是右邊。用短句確認重點。 | derecho / derecha<br>derecho 表示直走；a la derecha 表示往右。<br>Siga derecho. = 直走。<br>A la derecha. = 在右邊。 |
| t3 | Sí. Luego verá el cartel de la salida dos. (對。然後您會看到二號出口的標示。) | Salida dos, gracias. (二號出口，謝謝。) | 1. Salida cinco, gracias. (五號出口，謝謝。) [wrong_exit_number] - feedback: 對方說的是 salida dos，不是 salida cinco。<br>2. Quiero una sopa. (我想要一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是車站問路。 | 出口號碼是 dos。確認你聽到的出口。 |  |
| t4 | Exacto. Está muy cerca. (沒錯。很近。) | Muchas gracias. (非常謝謝。) | 1. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。問路結束時道謝就好。<br>2. Tengo una reserva. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店入住句。現在是在車站問路。 | 你已經確認方向。用 Gracias 結束。 |  |

---

## a1:es:travel_taxi_destination - Dar un destino en taxi

- Level: A1
- Language: Spanish (es)
- Scenario ID: travel_taxi_destination
- Setting: Taxi
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在計程車上。用中性西語說目的地、確認地點，並聽懂大約時間。

### Clean Dialogue Path

- conductor: Buenas tardes, ¿a dónde vamos? (午安，我們要去哪裡？)
- pasajero: Al hotel Central, por favor. (到中央飯店，謝謝。)
- conductor: Al hotel Central, ¿verdad? (到中央飯店，對嗎？)
- pasajero: Sí, al hotel Central. (對，到中央飯店。)
- conductor: Son unos diez minutos. (大約十分鐘。)
- pasajero: Perfecto, gracias. (好的，謝謝。)
- conductor: Ya llegamos. (我們到了。)
- pasajero: Muchas gracias. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buenas tardes, ¿a dónde vamos? (午安，我們要去哪裡？) | Al hotel Central, por favor. (到中央飯店，謝謝。) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向。司機現在需要目的地。<br>2. Un billete, por favor. (一張票，謝謝。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在計程車上說目的地。 | 司機在問目的地。直接說地點加 por favor。 |  |
| t2 | Al hotel Central, ¿verdad? (到中央飯店，對嗎？) | Sí, al hotel Central. (對，到中央飯店。) | 1. No, gracias. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。地點正確時要確認目的地。<br>2. Quiero un café. (我想要一杯咖啡。) [wrong_scenario_order] - feedback: 這是點咖啡。現在是在確認計程車目的地。 | 司機在確認目的地。正確時，用短句確認。 | Al... / Sí, al...<br>搭計程車說目的地時，常用 al / a la 加地點；確認時用 Sí, al...<br>Al hotel Central, por favor. = 到中央飯店，謝謝。<br>Sí, al hotel Central. = 對，到中央飯店。 |
| t3 | Son unos diez minutos. (大約十分鐘。) | Perfecto, gracias. (好的，謝謝。) | 1. A la estación, por favor. (到車站，謝謝。) [changed_destination] - feedback: 你已經確認飯店了。現在只要回應時間資訊。<br>2. La cuenta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳句。司機剛剛說的是車程時間。 | 司機說大約十分鐘。簡短回應就好。 |  |
| t4 | Ya llegamos. (我們到了。) | Muchas gracias. (非常謝謝。) | 1. ¿Cuál es la clave del wifi? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是問 wifi。計程車已經到目的地，現在道謝即可。<br>2. Tengo una reserva. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店櫃台句。現在是在計程車上結束行程。 | 已經到目的地。用 Muchas gracias 結束。 |  |

---

## a1:es:travel_ticket_buying - Comprar un billete

- Level: A1
- Language: Spanish (es)
- Scenario ID: travel_ticket_buying
- Setting: Taquilla de tren
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在火車站售票口買一張簡單車票。選一句自然、簡短的西班牙語。

### Clean Dialogue Path

- empleado: Buenos días. ¿Adónde va? (早安。您要去哪裡？)
- viajero: Un billete a Madrid, por favor. (請給我一張去馬德里的票。)
- empleado: ¿Un billete a Madrid? (一張去馬德里的票嗎？)
- viajero: Sí, correcto. (對，沒錯。)
- empleado: Son doce euros. ¿Paga con tarjeta? (十二歐元。您用卡付款嗎？)
- viajero: Sí, con tarjeta. (對，用卡。)
- empleado: Aquí tiene. Andén dos. (給您。二號月台。)
- viajero: Gracias. (謝謝。)
- empleado: Buen viaje. (旅途愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Buenos días. ¿Adónde va? (早安。您要去哪裡？) | Un billete a Madrid, por favor. (請給我一張去馬德里的票。) | 1. ¿Dónde está el baño? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在買車票。<br>2. Un café, por favor. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在售票口買票。 | 售票員問目的地。說你要一張去 Madrid 的票。 |  |
| t2 | ¿Un billete a Madrid? (一張去馬德里的票嗎？) | Sí, correcto. (對，沒錯。) | 1. No, gracias. (不用，謝謝。) [cancel_when_confirming] - feedback: 你正在確認買票。這樣會像取消交易。<br>2. Dos billetes a Madrid. (兩張去馬德里的票。) [wrong_quantity] - feedback: 你只需要一張票，不要改成兩張。 | 售票員確認目的地和數量。用簡短句確認。 | Un billete a...<br>在西班牙語售票口可用 Un billete a Madrid, por favor 表示一張去某地的票。<br>Un billete a Madrid, por favor. = 請給我一張去馬德里的票。<br>Sí, correcto. = 對，沒錯。 |
| t3 | Son doce euros. ¿Paga con tarjeta? (十二歐元。您用卡付款嗎？) | Sí, con tarjeta. (對，用卡。) | 1. Soy de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答付款方式。<br>2. Quiero pagar la cuenta. (我想結帳。) [wrong_scenario_restaurant_bill] - feedback: 這像餐廳結帳，不是售票口付款。 | 售票員問付款方式。回答用卡。 |  |
| t4 | Aquí tiene. Andén dos. (給您。二號月台。) | Gracias. (謝謝。) | 1. Repita, por favor. (請再說一次。) [repair_after_clear_handover] - feedback: 如果已理解票和月台，這裡直接道謝即可。<br>2. Mucho gusto. (很高興認識你。) [wrong_scenario_self_intro] - feedback: 這是第一次見面的結尾，不是買票結尾。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
