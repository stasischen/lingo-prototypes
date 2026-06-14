# A1 Portuguese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:pt:convenience_payment_card_cash - Pagar no caixa

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: convenience_payment_card_cash
- Setting: Caixa de loja pequena
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語便利店或小商店櫃台。聽店員問付款方式，選一句自然接得上的葡萄牙語。

### Clean Dialogue Path

- caixa: Deu doze reais. Vai pagar no cartão ou em dinheiro? (十二雷亞爾。刷卡還是付現？)
- cliente: No cartão, por favor. (刷卡，謝謝。)
- caixa: Pode aproximar o cartão. (可以感應卡片。)
- cliente: Tudo bem. (好的。)
- caixa: Quer a nota? (要收據嗎？)
- cliente: Não precisa. (不用了。)
- caixa: Pronto, tudo certo. (好了，沒問題。)
- cliente: Tudo certo. (好的。)
- caixa: Aqui está a sacola. (這是袋子。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Deu doze reais. Vai pagar no cartão ou em dinheiro? (十二雷亞爾。刷卡還是付現？) | No cartão, por favor. (刷卡，謝謝。) | 1. Um café com leite, por favor. (一杯牛奶咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在商店櫃台付款。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。店員現在問你怎麼付款。 | 店員在問付款方式。巴西葡語裡可以說「No cartão」或「Em dinheiro」。 | no cartão / em dinheiro<br>「no cartão」是用卡付款，「em dinheiro」是付現。<br>No cartão, por favor. = 刷卡，謝謝。<br>Em dinheiro, por favor. = 付現，謝謝。 |
| t2 | Pode aproximar o cartão. (可以感應卡片。) | Tudo bem. (好的。) | 1. Em dinheiro, por favor. (付現，謝謝。) [wrong_payment_method_switch] - feedback: 你剛剛選了刷卡。現在店員在請你用卡付款。<br>2. Para viagem, por favor. (外帶，謝謝。) [wrong_scenario_response] - feedback: 這是餐點外帶時用的句子。現在是付款流程。 | 店員請你感應卡片。簡短確認就好。 |  |
| t3 | Quer a nota? (要收據嗎？) | Não precisa. (不用了。) | 1. No cartão, por favor. (刷卡，謝謝。) [repeated_prior_answer] - feedback: 付款方式已經說過了。現在店員問你要不要收據。<br>2. Às três. (三點。) [wrong_scenario_response] - feedback: 這是在回答時間。現在問題是要不要收據。 | 要或不要都可以。這裡先練不用的短答。 |  |
| t4 | Pronto, tudo certo. (好了，沒問題。) | Tudo certo. (好的。) | 1. Tenho uma reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在你已經完成付款。<br>2. Não quero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這樣像是在拒絕購買。付款完成後，說謝謝就好。 | 交易完成了。回一句謝謝就可以。 |  |

---

## a1:pt:core_repair_repeat_slowly - Pedir para repetir devagar

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: core_repair_repeat_slowly
- Setting: Balcão de uma cafeteria
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台沒聽清楚問題。先修復對話，再回答。

### Clean Dialogue Path

- atendente: É para viagem? (是外帶嗎？)
- cliente: Pode repetir, por favor? (可以請您再說一次嗎？)
- atendente: Claro. É para viagem? (當然。是外帶嗎？)
- cliente: Mais devagar, por favor. (請慢一點。)
- atendente: Para viagem ou para comer aqui? (外帶還是在這裡吃？)
- cliente: Aqui, por favor. (在這裡，謝謝。)
- atendente: Perfeito. Pode sentar ali. (好的。你可以坐那邊。)
- cliente: Obrigado. (謝謝。)
- atendente: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | É para viagem? (是外帶嗎？) | Pode repetir, por favor? (可以請您再說一次嗎？) | 1. Isso mesmo. (沒錯。) [blind_confirmation] - feedback: 你還沒聽懂時不要盲目確認。先請對方重複。<br>2. Prazer. (很高興認識你。) [wrong_scenario_self_intro] - feedback: 這是自我介紹結尾，不是請對方重複。 | 你沒聽清楚。先請對方再說一次。 |  |
| t2 | Claro. É para viagem? (當然。是外帶嗎？) | Mais devagar, por favor. (請慢一點。) | 1. Obrigado, tchau. (謝謝，再見。) [closing_before_understanding] - feedback: 還沒理解問題，不要直接結束對話。<br>2. Uma passagem para o Centro. (一張去市中心的票。) [wrong_scenario_ticket] - feedback: 這是買票句，不是請對方說慢一點。 | 還是太快。請對方說慢一點。 | Repetir e falar devagar<br>沒聽清楚時，可以說 Pode repetir, por favor?，再說 Mais devagar, por favor。<br>Pode repetir, por favor? = 可以請您再說一次嗎？<br>Mais devagar, por favor. = 請慢一點。 |
| t3 | Para viagem ou para comer aqui? (外帶還是在這裡吃？) | Aqui, por favor. (在這裡，謝謝。) | 1. Pode repetir, por favor? (可以請您再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經用簡單方式重述了，現在可以回答。<br>2. Sou de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答內用或外帶。 | 現在問題清楚了。簡短回答在這裡。 |  |
| t4 | Perfeito. Pode sentar ali. (好的。你可以坐那邊。) | Obrigado. (謝謝。) | 1. Duas passagens, por favor. (請給我兩張票。) [wrong_scenario_ticket_quantity] - feedback: 這是買票數量，不是櫃台修復對話結尾。<br>2. Não entendi nada. (我完全沒聽懂。) [overbroad_repair_after_success] - feedback: 你已經成功理解並回答了。這裡道謝即可。 | 對方已經幫你處理。簡短道謝。 |  |

---

## a1:pt:daily_meet_friend - Encontrar um amigo

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: daily_meet_friend
- Setting: Entrada de uma cafeteria
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友碰面。選一句自然的巴西葡語短句。

### Clean Dialogue Path

- amiga: Oi! Você é o Alex? (嗨！你是 Alex 嗎？)
- amigo: Sou, sim. Sou o Alex. (對，我是 Alex。)
- amiga: Legal. Você está pronto? (太好了。你準備好了嗎？)
- amigo: Sim, estou pronto. (對，我準備好了。)
- amiga: Ótimo. Vamos para o café. (太好了。我們去咖啡店吧。)
- amigo: Vamos. (走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oi! Você é o Alex? (嗨！你是 Alex 嗎？) | Sou, sim. Sou o Alex. (對，我是 Alex。) | 1. A conta, por favor. (請結帳。) [wrong_scenario_payment] - feedback: 這是在餐廳結帳，不是和朋友確認身份。<br>2. Quanto custa isto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在問價格，不是回朋友的招呼。 | 朋友在確認是不是你。簡短回答。 |  |
| t2 | Legal. Você está pronto? (太好了。你準備好了嗎？) | Sim, estou pronto. (對，我準備好了。) | 1. Quero um café. (我想要一杯咖啡。) [wrong_scenario_ordering] - feedback: 這是在點飲料。朋友問你是否準備好。<br>2. Onde fica a estação? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路。現在只要回答準備好了。 | 朋友在問你可不可以出發。 | Estou pronto<br>和朋友碰面時，可以用 Estou pronto/pronta 表示準備好了。A1 先用 pronto。<br>Sim, estou pronto. = 對，我準備好了。<br>Vamos. = 走吧。 |
| t3 | Ótimo. Vamos para o café. (太好了。我們去咖啡店吧。) | Vamos. (走吧。) | 1. Vou pagar com cartão. (我要用卡付款。) [wrong_scenario_payment] - feedback: 這是付款句。朋友只是說一起走。<br>2. Não sou o Alex. (我不是 Alex。) [wrong_identity_after_confirm] - feedback: 前面已經確認是 Alex，這會讓情境不成立。 | 朋友說下一步。用短句同意。 |  |

---

## a1:pt:daily_schedule_time - Combinar um horário

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: daily_schedule_time
- Setting: Plano com uma amiga
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在用巴西葡語和朋友約時間。聽對方問什麼，選一個簡短自然的回答。

### Clean Dialogue Path

- amiga: Que horas a gente se encontra? (我們幾點見？)
- você: Às três. (三點。)
- amiga: Tá. Na entrada? (好。在入口嗎？)
- você: Sim, na entrada. (對，在入口。)
- amiga: Então, às três na entrada. Combinado? (那就三點在入口。說定了嗎？)
- você: Combinado. Até lá. (說定了，到時見。)
- amiga: Ótimo. Até mais. (太好了，待會見。)
- você: Até mais. (待會見。)
- amiga: A gente se vê às três. (我們三點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Que horas a gente se encontra? (我們幾點見？) | Às três. (三點。) | 1. Na entrada. (在入口。) [wrong_slot_location] - feedback: 這是在回答地點。對方問的是幾點。<br>2. No cartão, por favor. (刷卡，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在是在約時間。 | 對方在問時間。用「Às...」加時間回答。 | Às...<br>說幾點見面時，常用「Às」加時間。<br>Às três. = 三點。<br>Às cinco. = 五點。 |
| t2 | Tá. Na entrada? (好。在入口嗎？) | Sim, na entrada. (對，在入口。) | 1. Às três. (三點。) [repeated_prior_answer] - feedback: 時間剛剛已經說過了。現在是在確認地點。<br>2. Não quero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這像是在拒絕。對方只是確認見面地點。 | 對方在確認地點。沒問題時，用短句確認。 |  |
| t3 | Então, às três na entrada. Combinado? (那就三點在入口。說定了嗎？) | Combinado. Até lá. (說定了，到時見。) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問路。現在是確認見面計畫。<br>2. Amanhã de manhã eu tenho muitas coisas e talvez depois eu possa. (明天早上我有很多事，也許之後可以。) [over_complex_schedule] - feedback: 這太長也太複雜。A1 先用「Combinado. Até lá」收尾。 | 對方整理了時間和地點。用自然短句確認。 |  |
| t4 | Ótimo. Até mais. (太好了，待會見。) | Até mais. (待會見。) | 1. Tenho uma reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在只是朋友約時間。<br>2. Em dinheiro, por favor. (付現，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在計畫已經確認。 | 計畫完成了。回一句再見就可以。 |  |

---

## a1:pt:daily_self_intro - Se apresentar

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: daily_self_intro
- Setting: Mesa de troca de idiomas
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換活動第一次見到同桌的人。選一句自然、簡短的巴西葡語。

### Clean Dialogue Path

- participante: Oi, eu sou a Ana. E você? (嗨，我是 Ana。你呢？)
- participante novo: Oi, eu sou o Alex. (嗨，我是 Alex。)
- participante: Prazer, Alex. De onde você é? (很高興認識你，Alex。你來自哪裡？)
- participante novo: Sou de Taipei. (我來自台北。)
- participante: Legal. Você estuda português? (很好。你在學葡萄牙語嗎？)
- participante novo: Sim, estudo português. (對，我在學葡萄牙語。)
- participante: Que bom. Prazer em conhecer você. (真好。很高興認識你。)
- participante novo: Prazer. (很高興認識你。)
- participante: Bem-vindo ao grupo. (歡迎加入這個小組。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oi, eu sou a Ana. E você? (嗨，我是 Ana。你呢？) | Oi, eu sou o Alex. (嗨，我是 Alex。) | 1. Quero uma passagem. (我想要一張票。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在第一次見面介紹自己。<br>2. Qual é o seu telefone? (你的電話是多少？) [private_contact_request] - feedback: 這會要求私人聯絡方式，不適合這個 A1 自我介紹情境。 | 對方先自我介紹。用一句話說你的名字。 |  |
| t2 | Prazer, Alex. De onde você é? (很高興認識你，Alex。你來自哪裡？) | Sou de Taipei. (我來自台北。) | 1. Sim, eu sou o Alex. (對，我是 Alex。) [repeat_prior_answer] - feedback: 名字已經說過了。現在要回答來自哪裡。<br>2. Com cartão, por favor. (請用卡付款。) [wrong_scenario_payment] - feedback: 這是付款方式，不是自我介紹。 | 對方問你來自哪裡。用短句回答。 | Eu sou + sou de<br>巴西葡語自我介紹可以用 Eu sou o Alex 和 Sou de Taipei 這類短句。<br>Eu sou o Alex. = 我是 Alex。<br>Sou de Taipei. = 我來自台北。 |
| t3 | Legal. Você estuda português? (很好。你在學葡萄牙語嗎？) | Sim, estudo português. (對，我在學葡萄牙語。) | 1. Pode repetir, por favor? (可以請您再說一次嗎？) [repair_when_understood] - feedback: 這是修復句。現在問題很清楚，可以直接回答。<br>2. Um café, por favor. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在回答學語言的問題。 | 用簡短句子說你正在學葡萄牙語。 |  |
| t4 | Que bom. Prazer em conhecer você. (真好。很高興認識你。) | Prazer. (很高興認識你。) | 1. Preciso de uma passagem. (我需要一張票。) [wrong_scenario_ticket] - feedback: 這是買票需求，不是回應第一次見面。<br>2. Fale devagar, por favor. (請說慢一點。) [repair_when_closing] - feedback: 這是請對方放慢，現在是友善結尾。 | 用常見短句回應很高興認識你。 |  |

---

## a1:pt:digital_battery_charging - Pedir para carregar o celular

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: digital_battery_charging
- Setting: Cafeteria
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店。先問可不可以充手機，再問插座在哪裡，確認位置並道謝。

### Clean Dialogue Path

- funcionário: Oi, posso ajudar? (嗨，需要幫忙嗎？)
- cliente: Posso carregar meu celular aqui? (我可以在這裡充手機嗎？)
- funcionário: Pode, sim. (可以。)
- cliente: Onde fica a tomada? (插座在哪裡？)
- funcionário: A tomada fica perto da mesa. (插座在桌子旁邊。)
- cliente: Perto da mesa? (在桌子旁邊嗎？)
- funcionário: Isso, ali mesmo. (對，就在那裡。)
- cliente: Obrigado. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oi, posso ajudar? (嗨，需要幫忙嗎？) | Posso carregar meu celular aqui? (我可以在這裡充手機嗎？) | 1. Qual é a senha do wifi? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是在問 wifi 密碼。現在要問能不能充手機。<br>2. Um café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡，不是詢問充電許可。 | 先問能不能充手機。巴西葡語用 Posso...? 很自然。 |  |
| t2 | Pode, sim. (可以。) | Onde fica a tomada? (插座在哪裡？) | 1. Posso carregar meu celular aqui? (我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意。現在要問插座在哪裡。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間，不是問插座位置。 | 對方同意了。接著問插座在哪裡。 | Posso...? / Onde fica...?<br>問許可可用 Posso...?；問位置可用 Onde fica...?。<br>Posso carregar meu celular aqui? = 我可以在這裡充手機嗎？<br>Onde fica a tomada? = 插座在哪裡？ |
| t3 | A tomada fica perto da mesa. (插座在桌子旁邊。) | Perto da mesa? (在桌子旁邊嗎？) | 1. Na saída três? (在三號出口嗎？) [wrong_scenario_station] - feedback: 這像是在車站問出口。現在要確認插座位置。<br>2. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是在結帳，沒有確認插座位置。 | 確認位置就好。重複關鍵位置。 |  |
| t4 | Isso, ali mesmo. (對，就在那裡。) | Obrigado. (謝謝。) | 1. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方已經幫你確認位置。現在直接道謝。<br>2. Quero uma mesa. (我想要一張桌子。) [wrong_scenario_restaurant] - feedback: 這是在問座位，不是完成充電位置確認。 | 已經知道位置了。簡短道謝。 |  |

---

## a1:pt:digital_wifi_connect - Pedir a senha do wifi

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: digital_wifi_connect
- Setting: Balcão
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台。問 wifi 密碼，嘗試後說手機連不上，並謝謝對方。

### Clean Dialogue Path

- funcionário: Olá, posso ajudar? (您好，需要幫忙嗎？)
- cliente: Qual é a senha do wifi? (wifi 密碼是什麼？)
- funcionário: A senha é cafe2026. (密碼是 cafe2026。)
- cliente: Obrigado, vou tentar. (謝謝，我試一下。)
- funcionário: Funcionou? (可以用嗎？)
- cliente: Não, não conecta. (不，連不上。)
- funcionário: Tente de novo, por favor. (請再試一次。)
- cliente: Tá bom, obrigado. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Olá, posso ajudar? (您好，需要幫忙嗎？) | Qual é a senha do wifi? (wifi 密碼是什麼？) | 1. Um café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡。現在要問 wifi 密碼。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向，不是問 wifi。 | 你要問 wifi 密碼。巴西葡語常說 senha do wifi。 |  |
| t2 | A senha é cafe2026. (密碼是 cafe2026。) | Obrigado, vou tentar. (謝謝，我試一下。) | 1. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。對方剛剛給了 wifi 密碼。<br>2. Qual é a senha do wifi? (wifi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經說了密碼。現在要表示你試一下。 | 對方給了密碼。先說謝謝，表示你試一下。 | A senha é... / Não conecta<br>問密碼用 Qual é a senha...?；連不上可以說 Não conecta。<br>Qual é a senha do wifi? = wifi 密碼是什麼？<br>Não conecta. = 連不上。 |
| t3 | Funcionou? (可以用嗎？) | Não, não conecta. (不，連不上。) | 1. Sim, obrigado. (可以，謝謝。) [wrong_connection_status] - feedback: 情境是連不上。要說 Não conecta。<br>2. Quero uma mesa. (我想要一張桌子。) [wrong_scenario_restaurant] - feedback: 這是餐廳需求。現在要回報 wifi 連不上。 | 手機還是連不上。用 Não conecta。 |  |
| t4 | Tente de novo, por favor. (請再試一次。) | Tá bom, obrigado. (好的，謝謝。) | 1. Para o Hotel Central, por favor. (到中央飯店，謝謝。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。現在是在處理 wifi。<br>2. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方正在幫你。接受簡單指示並道謝比較合適。 | 對方給了簡單指示。用 Tá bom, obrigado 結束。 |  |

---

## a1:pt:food_bill_payment - Pagar a conta

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: food_bill_payment
- Setting: Cafeteria simples
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語咖啡店用餐後要結帳。選一句自然短句。

### Clean Dialogue Path

- garçom: Tudo certo? Quer mais alguma coisa? (都還好嗎？還要什麼嗎？)
- cliente: A conta, por favor. (請結帳。)
- garçom: Claro. Vai pagar com cartão ou dinheiro? (好的。您用卡還是現金付款？)
- cliente: Com cartão, por favor. (請用卡。)
- garçom: Perfeito. Precisa da nota? (好的。需要發票嗎？)
- cliente: Não, obrigado. (不用，謝謝。)
- garçom: Pronto, muito obrigado. (好了，非常謝謝。)
- cliente: Obrigado. Tchau. (謝謝。再見。)
- garçom: Até mais. (再見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tudo certo? Quer mais alguma coisa? (都還好嗎？還要什麼嗎？) | A conta, por favor. (請結帳。) | 1. Quero outra sopa. (我想再要一份湯。) [wrong_sequence_more_food] - feedback: 這是在加點食物。現在的目標是結帳。<br>2. Onde fica a estação? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在餐廳結帳。 | 你已經吃完了。現在可以請服務生拿帳單。 |  |
| t2 | Claro. Vai pagar com cartão ou dinheiro? (好的。您用卡還是現金付款？) | Com cartão, por favor. (請用卡。) | 1. Sem nota, obrigado. (不用發票，謝謝。) [wrong_prompt_receipt] - feedback: 這是在回答收據或發票問題。現在問的是付款方式。<br>2. Quanto custa isto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在商店問商品價格，不是餐廳付帳。 | 服務生在問付款方式。選一個短回答。 | A conta + pagamento<br>在巴西葡語餐廳要結帳，可以說 A conta, por favor。付款時說 Com cartão 或 Em dinheiro。<br>A conta, por favor. = 請結帳。<br>Com cartão, por favor. = 請用卡。 |
| t3 | Perfeito. Precisa da nota? (好的。需要發票嗎？) | Não, obrigado. (不用，謝謝。) | 1. Somos duas pessoas. (我們是兩個人。) [wrong_prior_context] - feedback: 人數不是現在的問題。服務生問你需不需要發票。<br>2. A gente se encontra aqui. (我們在這裡見。) [wrong_scenario_meeting] - feedback: 這是朋友碰面情境，不是付款收據。 | 如果不需要，簡短說不用。 |  |
| t4 | Pronto, muito obrigado. (好了，非常謝謝。) | Obrigado. Tchau. (謝謝。再見。) | 1. Quero um café. (我想要一杯咖啡。) [wrong_sequence_ordering] - feedback: 付款已完成，現在不是再點餐。<br>2. Quanto custa isto? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是購物問價，不是結帳結尾。 | 交易完成了，禮貌回謝即可。 |  |

---

## a1:pt:food_coffee_ordering - Pedir café

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: food_coffee_ordering
- Setting: Balcão de cafeteria
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在葡語咖啡店櫃台。聽店員問什麼，選一句自然接得上的葡萄牙語。

### Clean Dialogue Path

- atendente: Olá, o que vai querer? (您好，您想要什麼？)
- cliente: Um café com leite, por favor. (一杯牛奶咖啡，謝謝。)
- atendente: Para tomar aqui ou para viagem? (內用還是外帶？)
- cliente: Para viagem, por favor. (外帶，謝謝。)
- atendente: Um café com leite para viagem, certo? (一杯牛奶咖啡外帶，對嗎？)
- cliente: Sim, está certo. (是的，謝謝。)
- atendente: São dez reais. Já sai. (十雷亞爾。很快就好。)
- cliente: Tudo bem. (謝謝。)
- atendente: Aqui está seu café. (這是您的咖啡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Olá, o que vai querer? (您好，您想要什麼？) | Um café com leite, por favor. (一杯牛奶咖啡，謝謝。) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員在等你點飲料。<br>2. Não, tudo bem. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這樣像是在說不點。要點飲料時，說「Um café..., por favor」。 | 店員在問你要什麼。用「Um/Uma..., por favor」就能點餐。 |  |
| t2 | Para tomar aqui ou para viagem? (內用還是外帶？) | Para viagem, por favor. (外帶，謝謝。) | 1. Um café com leite, por favor. (一杯牛奶咖啡，謝謝。) [repeated_prior_answer] - feedback: 飲料已經點了。這裡是在問內用或外帶。<br>2. Sim, por favor. (好的，謝謝。) [wrong_act_confirmation] - feedback: 店員給你兩個選項，不是問是或不是。要選「aqui」或「para viagem」。 | aqui 是這裡，para viagem 是外帶。選一個回答就好。 | aqui / para viagem<br>「aqui」是這裡，「para viagem」是外帶。<br>Aqui. = 內用。<br>Para viagem. = 外帶。 |
| t3 | Um café com leite para viagem, certo? (一杯牛奶咖啡外帶，對嗎？) | Sim, está certo. (是的，謝謝。) | 1. Não quero nada. (我什麼都不要。) [wrong_act_refusal] - feedback: 這樣像是在取消。訂單沒問題時，說「Sim, está certo」。<br>2. Tenho uma reserva. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在是在確認咖啡訂單。 | 店員在確認訂單。沒問題時，可以簡短說「Sim」。 |  |
| t4 | São dez reais. Já sai. (十雷亞爾。很快就好。) | Tudo bem. (謝謝。) | 1. Para viagem, por favor. (外帶，謝謝。) [repeated_prior_answer] - feedback: 外帶剛剛已經說過了。現在是付款和等待。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [off_topic_statement] - feedback: 先完成咖啡付款。問洗手間是另一個場景。 | 店員說價格，也說很快就好。簡短說謝謝就可以。 |  |

---

## a1:pt:food_restaurant_ordering - Pedir no restaurante

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: food_restaurant_ordering
- Setting: Mesa de restaurante simples
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語餐廳。聽服務生問什麼，選一句自然的葡萄牙語短句。

### Clean Dialogue Path

- garçom: Boa tarde. Já sabe o que vai pedir? (午安。您已經知道要點什麼了嗎？)
- cliente: Sim, já sei. (是的，我知道要點什麼了。)
- garçom: Perfeito. O que você vai querer? (很好。你想要什麼？)
- cliente: Eu quero uma sopa, por favor. (我想要一份湯，謝謝。)
- garçom: Uma sopa, certo? Mais alguma coisa? (一份湯，對嗎？還要別的嗎？)
- cliente: Não, obrigado. Está certo. (不用了，謝謝。這樣對。)
- garçom: Tudo bem. Sua sopa sai em alguns minutos. (好的。您的湯幾分鐘後會好。)
- cliente: Obrigado. (謝謝。)
- garçom: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Boa tarde. Já sabe o que vai pedir? (午安。您已經知道要點什麼了嗎？) | Sim, já sei. (是的，我知道要點什麼了。) | 1. A conta, por favor. (請結帳。) [wrong_sequence_bill] - feedback: 這是在用餐後結帳。現在是要開始點餐。<br>2. Um café para viagem. (一杯咖啡外帶。) [wrong_setting_cafe] - feedback: 這像咖啡店外帶。餐廳點餐先回答你準備好了。 | 服務生在問你準備好點餐了嗎。先說 Sim, já sei。 |  |
| t2 | Perfeito. O que você vai querer? (很好。你想要什麼？) | Eu quero uma sopa, por favor. (我想要一份湯，謝謝。) | 1. Somos duas pessoas. (我們是兩個人。) [wrong_prior_context] - feedback: 現在不是在問人數。服務生問你要點什麼。<br>2. Vou pagar com cartão. (我要用卡付款。) [wrong_sequence_payment] - feedback: 付款還太早。現在先點餐。 | 用 Eu quero 加一道菜，再加 por favor。 | Eu quero + um prato<br>巴西葡語點餐可以用 Eu quero... por favor，簡單自然。<br>Eu quero uma sopa, por favor. = 我想要一份湯，謝謝。<br>Uma salada, por favor. = 一份沙拉，謝謝。 |
| t3 | Uma sopa, certo? Mais alguma coisa? (一份湯，對嗎？還要別的嗎？) | Não, obrigado. Está certo. (不用了，謝謝。這樣對。) | 1. Quero três sopas. (我要三份湯。) [wrong_quantity] - feedback: 服務生確認的是一份湯。沒有改數量時，不要說三份。<br>2. Onde fica a estação? (車站在哪裡？) [wrong_scenario_request] - feedback: 這是問路。現在是在確認餐廳訂單。 | 訂單對了，不加點時說 Não, obrigado。 |  |
| t4 | Tudo bem. Sua sopa sai em alguns minutos. (好的。您的湯幾分鐘後會好。) | Obrigado. (謝謝。) | 1. A conta, por favor. (請結帳。) [wrong_sequence_bill] - feedback: 你還沒吃完。現在只是等餐點。<br>2. Preciso da senha do wifi. (我需要 wifi 密碼。) [wrong_scenario_hotel] - feedback: 這是飯店或店內 wifi 問題，不是餐廳點餐結尾。 | 服務生說餐點會準備。簡短道謝就好。 |  |

---

## a1:pt:hotel_checkout - Fazer check-out no hotel

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: hotel_checkout
- Setting: Recepção do hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。說要退房、房號、交回房卡，並道謝。

### Clean Dialogue Path

- recepcionista: Bom dia, posso ajudar? (早安，需要幫忙嗎？)
- hóspede: Quero fazer o check-out. (我想退房。)
- recepcionista: Claro. Qual é o número do quarto? (好的。房號是多少？)
- hóspede: Quarto 304. (304 號房。)
- recepcionista: Pode me dar o cartão, por favor? (可以請您把房卡給我嗎？)
- hóspede: Aqui está o cartão. (房卡給您。)
- recepcionista: Pronto, o check-out está feito. (好了，退房完成了。)
- hóspede: Muito obrigado. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bom dia, posso ajudar? (早安，需要幫忙嗎？) | Quero fazer o check-out. (我想退房。) | 1. Qual é a senha do wifi? (wifi 密碼是什麼？) [wrong_hotel_request] - feedback: 這是在問 wifi。現在目標是退房。<br>2. Tenho uma reserva. (我有訂房。) [wrong_act_checkin] - feedback: 這是入住句。你現在要辦退房。 | 你要退房。巴西葡語飯店常用 fazer check-out。 |  |
| t2 | Claro. Qual é o número do quarto? (好的。房號是多少？) | Quarto 304. (304 號房。) | 1. Saída dois. (二號出口。) [wrong_number_type] - feedback: 這是出口號碼。櫃台問的是房號。<br>2. Uma mesa para dois. (兩位用餐。) [wrong_scenario_restaurant] - feedback: 這是餐廳入座句，不是飯店退房。 | 櫃台問房號。用 Quarto 加數字。 | Quarto... / Aqui está...<br>退房時可以用 Quarto 加房號；交東西時用 Aqui está...<br>Quarto 304. = 304 號房。<br>Aqui está o cartão. = 房卡給您。 |
| t3 | Pode me dar o cartão, por favor? (可以請您把房卡給我嗎？) | Aqui está o cartão. (房卡給您。) | 1. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。退房時要交回房卡。<br>2. Para o Hotel Central. (到中央飯店。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。櫃台現在要房卡。 | 櫃台要房卡。交給對方時說 Aqui está o cartão。 |  |
| t4 | Pronto, o check-out está feito. (好了，退房完成了。) | Muito obrigado. (非常謝謝。) | 1. Quero fazer o check-out. (我想退房。) [repeated_prior_request] - feedback: 退房已經完成了。現在道謝即可。<br>2. Que horas é o café da manhã? (早餐是幾點？) [wrong_hotel_request] - feedback: 這是早餐問題。退房已完成，先結束對話。 | 流程完成。用 Muito obrigado 結束。 |  |

---

## a1:pt:hotel_wifi_breakfast - Perguntar sobre wifi e café da manhã

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: hotel_wifi_breakfast
- Setting: Recepção do hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。用巴西葡語短句問 wifi 密碼和早餐時間。

### Clean Dialogue Path

- recepcionista: Olá, posso ajudar? (您好，需要幫忙嗎？)
- hóspede: Qual é a senha do wifi? (wifi 密碼是什麼？)
- recepcionista: Está no cartão do quarto. (在房卡套上。)
- hóspede: Obrigado. Que horas é o café da manhã? (謝謝。早餐是幾點？)
- recepcionista: O café da manhã é das sete às dez, no primeiro andar. (早餐是七點到十點，在一樓。)
- hóspede: Das sete às dez, obrigado. (七點到十點，謝謝。)
- recepcionista: Precisa de mais alguma coisa? (還需要別的嗎？)
- hóspede: Não, obrigado. (不用了，謝謝。)
- recepcionista: De nada. Boa estadia. (不客氣。祝您住宿愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Olá, posso ajudar? (您好，需要幫忙嗎？) | Qual é a senha do wifi? (wifi 密碼是什麼？) | 1. Eu quero uma sopa, por favor. (我想要一份湯，謝謝。) [wrong_scenario_order] - feedback: 這是餐廳點餐。你現在在飯店櫃台問 wifi。<br>2. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是飯店櫃台問題。 | 你要問 wifi 密碼。巴西葡語常說 senha do wifi。 |  |
| t2 | Está no cartão do quarto. (在房卡套上。) | Obrigado. Que horas é o café da manhã? (謝謝。早餐是幾點？) | 1. Preciso de outra chave. (我需要另一把鑰匙。) [wrong_hotel_request] - feedback: 這是在要另一把鑰匙。現在要問早餐資訊。<br>2. Vou pagar com cartão. (我要用卡付款。) [wrong_sequence_payment] - feedback: 這是付款回答。櫃台剛剛回答的是 wifi 密碼在哪裡。 | 對方說密碼在房卡上。接著問早餐時間。 | Qual é...? / Que horas...?<br>問密碼用 Qual é a senha...?；問時間用 Que horas é...?<br>Qual é a senha do wifi? = wifi 密碼是什麼？<br>Que horas é o café da manhã? = 早餐是幾點？ |
| t3 | O café da manhã é das sete às dez, no primeiro andar. (早餐是七點到十點，在一樓。) | Das sete às dez, obrigado. (七點到十點，謝謝。) | 1. Ao meio-dia, obrigado. (中午十二點，謝謝。) [wrong_time] - feedback: 對方說七點到十點，不是中午。<br>2. Uma mesa para dois. (兩位用餐。) [wrong_restaurant_context] - feedback: 這是餐廳入座句。你現在只是確認飯店早餐時間。 | 重點是七點到十點。用短句確認。 |  |
| t4 | Precisa de mais alguma coisa? (還需要別的嗎？) | Não, obrigado. (不用了，謝謝。) | 1. Onde fica a saída dois? (二號出口在哪裡？) [wrong_scenario_station] - feedback: 這是車站問路。飯店櫃台問題已經問完了。<br>2. Eu quero uma sopa. (我想要一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是飯店櫃台結尾。 | 沒有其他問題時，用 Não, obrigado。 |  |

---

## a1:pt:problem_lost_item - Dizer que perdeu algo

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: problem_lost_item
- Setting: Balcão de informações
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。說一個小物品不見了，回答可能在哪裡不見，確認下一步去哪裡問，最後道謝。

### Clean Dialogue Path

- funcionário: Oi, em que posso ajudar? (嗨，我能怎麼幫忙？)
- cliente: Perdi minha bolsa. (我的包包不見了。)
- funcionário: Onde você perdeu? (你在哪裡弄丟的？)
- cliente: Acho que na cafeteria. (我想是在咖啡店。)
- funcionário: O achados e perdidos fica ao lado. (失物招領在旁邊。)
- cliente: No achados e perdidos? (在失物招領嗎？)
- funcionário: Isso, pergunte lá. (對，請在那裡問。)
- cliente: Obrigado. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oi, em que posso ajudar? (嗨，我能怎麼幫忙？) | Perdi minha bolsa. (我的包包不見了。) | 1. Quanto custa? (多少錢？) [wrong_scenario_price] - feedback: 這是在問價格。現在要說東西不見了。<br>2. Quero um café. (我想要一杯咖啡。) [wrong_scenario_order] - feedback: 這是在點餐，不是尋求失物協助。 | 先說你的小包不見了。用 Perdi... 很簡單。 |  |
| t2 | Onde você perdeu? (你在哪裡弄丟的？) | Acho que na cafeteria. (我想是在咖啡店。) | 1. Às três. (三點。) [wrong_answer_time] - feedback: 對方問在哪裡，不是問時間。<br>2. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 你正在尋求協助。需要回答可能的地點。 | 給一個簡單地點，不需要細節。 | Perdi... / na cafeteria<br>說遺失可用 Perdi...；地點可用 na + lugar。<br>Perdi minha bolsa. = 我的包包不見了。<br>Acho que na cafeteria. = 我想是在咖啡店。 |
| t3 | O achados e perdidos fica ao lado. (失物招領在旁邊。) | No achados e perdidos? (在失物招領嗎？) | 1. Quero pagar agora. (我現在想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是確認去哪裡問失物。<br>2. Perdi minha bolsa. (我的包包不見了。) [repeated_prior_statement] - feedback: 你已經說過遺失物。現在要確認下一步。 | 確認下一步去哪裡問。 |  |
| t4 | Isso, pergunte lá. (對，請在那裡問。) | Obrigado. (謝謝。) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間。現在應該感謝對方。<br>2. É muito caro. (太貴了。) [wrong_scenario_price] - feedback: 這是在談價格，不是完成失物詢問。 | 已知道下一步。道謝結束。 |  |

---

## a1:pt:shopping_ask_price - Perguntar o preço

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: shopping_ask_price
- Setting: Loja simples
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語小店。聽店員說什麼，選一句自然的葡萄牙語短句。

### Clean Dialogue Path

- vendedor: Oi, tudo bem? Posso ajudar? (嗨，您好嗎？需要幫忙嗎？)
- cliente: Sim. Quanto custa isso? (是的。這個多少錢？)
- vendedor: Custa dez reais. (十雷亞爾。)
- cliente: Tá bom. Vou levar. (好。我要買。)
- vendedor: Certo. São dez reais. (好的。總共十雷亞爾。)
- cliente: Obrigado. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oi, tudo bem? Posso ajudar? (嗨，您好嗎？需要幫忙嗎？) | Sim. Quanto custa isso? (是的。這個多少錢？) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_direction] - feedback: 這是在問路。你現在要問商品價格。<br>2. Um café, por favor. (請給我一杯咖啡。) [wrong_scenario_food] - feedback: 這像在點飲料，不是在問價格。 | 店員在招呼你。直接問這個多少錢。 |  |
| t2 | Custa dez reais. (十雷亞爾。) | Tá bom. Vou levar. (好。我要買。) | 1. Vou pagar com cartão. (我要用卡付款。) [early_payment_method] - feedback: 這是付款方式。先說你要買比較自然。<br>2. Quero dois cafés. (我要兩杯咖啡。) [wrong_item_quantity] - feedback: 這換成點咖啡和數量了，不是回應價格。 | 聽到價格後，可以說你要買。 | Quanto custa isso?<br>巴西葡語問單一物品價格，可以說 Quanto custa isso?。A1 簡短自然。<br>Quanto custa isso? = 這個多少錢？<br>Custa dez reais. = 十雷亞爾。 |
| t3 | Certo. São dez reais. (好的。總共十雷亞爾。) | Obrigado. (謝謝。) | 1. A conta, por favor. (請結帳。) [wrong_scenario_restaurant] - feedback: 這是在餐廳結帳，小店買商品不這樣說。<br>2. Vamos ao café. (我們去咖啡店吧。) [wrong_scenario_meeting] - feedback: 這是和朋友碰面的情境，不是購物。 | 交易要結束了，簡短道謝即可。 |  |

---

## a1:pt:social_running_late - Avisar que vai se atrasar

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: social_running_late
- Setting: Mensagem para um amigo
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要和朋友見面，但會晚到。簡短說抱歉、幾分鐘後到、謝謝對方等待，最後說等一下見。

### Clean Dialogue Path

- amigo: Você chega logo? (你快到了嗎？)
- amigo atrasado: Desculpa, vou me atrasar. (抱歉，我會晚到。)
- amigo: Quantos minutos? (幾分鐘？)
- amigo atrasado: Uns dez minutos. (大約十分鐘。)
- amigo: Tá bom, eu espero. (好，我等你。)
- amigo atrasado: Obrigado por esperar. (謝謝你等我。)
- amigo: Até já. (等一下見。)
- amigo atrasado: Até já. (等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Você chega logo? (你快到了嗎？) | Desculpa, vou me atrasar. (抱歉，我會晚到。) | 1. Um café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點餐。現在要告訴朋友你會晚到。<br>2. Estou na Rua Central. (我在中央街。) [sensitive_location_detail] - feedback: 這給了精準位置。這個情境只需要說會晚到。 | 朋友在等你。先簡短道歉並說會晚到。 |  |
| t2 | Quantos minutos? (幾分鐘？) | Uns dez minutos. (大約十分鐘。) | 1. Na saída três. (在三號出口。) [wrong_number_context] - feedback: 這是在說出口，不是回答幾分鐘。<br>2. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 朋友問時間。需要給分鐘估計。 | 給一個短估計，不要解釋太多。 | vou me atrasar / uns dez minutos<br>說會晚到可用 Vou me atrasar；估時間可用 uns + 分鐘。<br>Desculpa, vou me atrasar. = 抱歉，我會晚到。<br>Uns dez minutos. = 大約十分鐘。 |
| t3 | Tá bom, eu espero. (好，我等你。) | Obrigado por esperar. (謝謝你等我。) | 1. Onde fica a tomada? (插座在哪裡？) [wrong_scenario_charging] - feedback: 這是在問充電。現在要謝謝朋友等待。<br>2. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是朋友聊天。 | 朋友願意等。謝謝對方等待。 |  |
| t4 | Até já. (等一下見。) | Até já. (等一下見。) | 1. Muito obrigado, senhor. (非常謝謝您，先生。) [wrong_register_formal] - feedback: 這太像正式服務場合。朋友之間用 Até já。<br>2. Quero pagar. (我想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是結束遲到訊息。 | 用自然的朋友收尾。 |  |

---

## a1:pt:travel_hotel_checkin - Fazer check-in no hotel

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: travel_hotel_checkin
- Setting: Recepção do hotel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在葡語飯店櫃台。辦理入住、說訂房姓名，並聽懂下一步。

### Clean Dialogue Path

- recepcionista: Boa tarde, posso ajudar? (午安，我可以幫忙嗎？)
- hóspede: Tenho uma reserva. (我有訂房。)
- recepcionista: Qual é o nome da reserva? (訂房姓名是什麼？)
- hóspede: Está em nome de Lin. (用 Lin 的名字。)
- recepcionista: Encontrei. Uma noite, certo? (找到了。一晚，對嗎？)
- hóspede: Sim, certo. (是的，沒錯。)
- recepcionista: Aqui está a chave. O quarto fica no terceiro andar. (這是鑰匙。房間在三樓。)
- hóspede: Tudo bem. (謝謝。)
- recepcionista: O café da manhã é no térreo, das sete às dez. (早餐在一樓，七點到十點。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Boa tarde, posso ajudar? (午安，我可以幫忙嗎？) | Tenho uma reserva. (我有訂房。) | 1. Um café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在飯店櫃台辦理入住。<br>2. Onde fica a estação? (車站在哪裡？) [wrong_scenario_request] - feedback: 這句是在問路。櫃台現在在處理入住。 | 櫃台在問你需要什麼。入住時可以說「Tenho uma reserva」。 |  |
| t2 | Qual é o nome da reserva? (訂房姓名是什麼？) | Está em nome de Lin. (用 Lin 的名字。) | 1. Quero fazer check-out. (我要退房。) [wrong_act_checkout] - feedback: check-out 是退房。你現在是入住，要說訂房姓名。<br>2. Fica à direita. (在右邊。) [wrong_scenario_response] - feedback: 這是在回答方向。櫃台問的是訂房姓名。 | 櫃台在問訂房名字。用「Está em nome de...」回答。 | Está em nome de...<br>「Está em nome de...」可用來說訂房登記的名字。<br>Está em nome de Lin. = 用 Lin 的名字。<br>A reserva está em nome de Lin. = 訂房是 Lin 的名字。 |
| t3 | Encontrei. Uma noite, certo? (找到了。一晚，對嗎？) | Sim, certo. (是的，沒錯。) | 1. Um café com leite. (一杯牛奶咖啡。) [wrong_scenario_request] - feedback: 這不是咖啡店。櫃台在確認你的訂房。<br>2. Não, tudo bem. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這樣像是在拒絕。資料正確時，說「Sim, certo」。 | 櫃台在確認資料。正確的話，簡短說是。 |  |
| t4 | Aqui está a chave. O quarto fica no terceiro andar. (這是鑰匙。房間在三樓。) | Tudo bem. (謝謝。) | 1. Está em nome de Lin. (用 Lin 的名字。) [repeated_prior_answer] - feedback: 名字剛剛已經說過了。現在櫃台給你鑰匙和房間資訊。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個需求。先把入住流程結束。 | 你拿到鑰匙了。簡短說謝謝就可以。 |  |

---

## a1:pt:travel_restroom_directions - Perguntar pelo banheiro

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: travel_restroom_directions
- Setting: Lugar público
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在葡語公共場所。禮貌開口，問洗手間在哪裡，並確認方向。

### Clean Dialogue Path

- funcionário: Pois não? (您好，請說。)
- visitante: Com licença, onde fica o banheiro? (不好意思，洗手間在哪裡？)
- funcionário: Siga em frente e vire à direita. (直走，然後右轉。)
- visitante: À direita? (往右邊嗎？)
- funcionário: Isso, à direita. (對，往右邊。)
- visitante: Tudo bem. (謝謝。)
- funcionário: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Pois não? (您好，請說。) | Com licença, onde fica o banheiro? (不好意思，洗手間在哪裡？) | 1. Um café, por favor. (一杯咖啡，謝謝。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在你要問洗手間。<br>2. Quanto custa? (多少錢？) [wrong_scenario_request] - feedback: 這句是在問價格。要找洗手間時，問「onde fica o banheiro?」。 | 對方願意幫你。直接問洗手間在哪裡。 |  |
| t2 | Siga em frente e vire à direita. (直走，然後右轉。) | À direita? (往右邊嗎？) | 1. Para viagem, por favor. (外帶，謝謝。) [wrong_scenario_response] - feedback: 這是咖啡店外帶時用的回答。現在對方在說方向。<br>2. Sim, entendi. (是的，謝謝。) [underspecified_confirmation] - feedback: 只說是有點不清楚。確認方向時，可以說「À direita?」。 | em frente 是往前，direita 是右邊。可以確認是不是右轉。 | em frente / direita<br>「em frente」是往前／直走，「à direita」是往右邊。<br>Siga em frente. = 請直走。<br>À direita. = 在右邊。 |
| t3 | Isso, à direita. (對，往右邊。) | Tudo bem. (謝謝。) | 1. Um café com leite. (一杯牛奶咖啡。) [wrong_scenario_request] - feedback: 這又回到點飲料了。你已經問完方向，可以說謝謝。<br>2. Em nome de Lin. (用 Lin 的名字。) [wrong_scenario_response] - feedback: 這是飯店入住時說名字。現在是問路情境。 | 你確認方向了。最後說謝謝就好。 |  |

---

## a1:pt:travel_station_directions - Perguntar pela saída

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: travel_station_directions
- Setting: Estação de metrô
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語地鐵站。用短句問出口，聽懂直走和右轉。

### Clean Dialogue Path

- funcionário: Pois não? (您好，需要什麼？)
- viajante: Com licença, onde fica a saída dois? (不好意思，二號出口在哪裡？)
- funcionário: Siga em frente e vire à direita. (直走，然後右轉。)
- viajante: Em frente e à direita. (直走，然後右邊。)
- funcionário: Isso. Depois você vê a placa da saída dois. (對。然後你會看到二號出口的標示。)
- viajante: Saída dois, obrigado. (二號出口，謝謝。)
- funcionário: É perto. (很近。)
- viajante: Muito obrigado. (非常謝謝。)
- funcionário: De nada. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Pois não? (您好，需要什麼？) | Com licença, onde fica a saída dois? (不好意思，二號出口在哪裡？) | 1. Um táxi para o hotel, por favor. (請給我一台去飯店的計程車。) [wrong_transport_goal] - feedback: 這是在叫計程車。現在要問車站出口。<br>2. Vou pagar com cartão. (我要用卡付款。) [wrong_scenario_payment] - feedback: 這是付款回答，不是問路。 | 對方可以幫忙。直接問二號出口在哪裡。 |  |
| t2 | Siga em frente e vire à direita. (直走，然後右轉。) | Em frente e à direita. (直走，然後右邊。) | 1. À esquerda. (左邊。) [wrong_direction] - feedback: 對方說的是 direita，右邊，不是 esquerda。<br>2. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問洗手間。現在要確認出口方向。 | em frente 是往前，à direita 是右邊。 | em frente / à direita<br>Siga em frente 是直走；vire à direita 是右轉。<br>Siga em frente. = 直走。<br>Vire à direita. = 右轉。 |
| t3 | Isso. Depois você vê a placa da saída dois. (對。然後你會看到二號出口的標示。) | Saída dois, obrigado. (二號出口，謝謝。) | 1. Saída cinco, obrigado. (五號出口，謝謝。) [wrong_exit_number] - feedback: 對方說的是 saída dois，不是 cinco。<br>2. Eu quero uma sopa. (我想要一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是車站問路。 | 出口號碼是 dois。確認後道謝。 |  |
| t4 | É perto. (很近。) | Muito obrigado. (非常謝謝。) | 1. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。問路結束時道謝就好。<br>2. Tenho uma reserva. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店入住句。現在是在車站問路。 | 方向已經清楚。用 Muito obrigado 結束。 |  |

---

## a1:pt:travel_taxi_destination - Dizer o destino no táxi

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: travel_taxi_destination
- Setting: Táxi
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在計程車上。用巴西葡語說目的地、確認地點，並聽懂大約時間。

### Clean Dialogue Path

- motorista: Boa tarde, para onde vamos? (午安，我們要去哪裡？)
- passageiro: Para o Hotel Central, por favor. (到中央飯店，謝謝。)
- motorista: Para o Hotel Central, certo? (到中央飯店，對嗎？)
- passageiro: Sim, para o Hotel Central. (對，到中央飯店。)
- motorista: Dá uns dez minutos. (大約十分鐘。)
- passageiro: Certo, obrigado. (好的，謝謝。)
- motorista: Chegamos. (我們到了。)
- passageiro: Muito obrigado. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Boa tarde, para onde vamos? (午安，我們要去哪裡？) | Para o Hotel Central, por favor. (到中央飯店，謝謝。) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向。司機現在需要目的地。<br>2. Uma passagem, por favor. (一張票，謝謝。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在計程車上說目的地。 | 司機在問目的地。用 Para o... 加地點。 |  |
| t2 | Para o Hotel Central, certo? (到中央飯店，對嗎？) | Sim, para o Hotel Central. (對，到中央飯店。) | 1. Não, obrigado. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。地點正確時要確認目的地。<br>2. Quero um café. (我想要一杯咖啡。) [wrong_scenario_order] - feedback: 這是點咖啡。現在是在確認計程車目的地。 | 司機在確認目的地。正確時，用 Sim 確認。 | Para o... / Sim, para o...<br>搭計程車說目的地時，常用 Para o / Para a 加地點；確認時用 Sim, para o...<br>Para o Hotel Central, por favor. = 到中央飯店，謝謝。<br>Sim, para o Hotel Central. = 對，到中央飯店。 |
| t3 | Dá uns dez minutos. (大約十分鐘。) | Certo, obrigado. (好的，謝謝。) | 1. Para a estação, por favor. (到車站，謝謝。) [changed_destination] - feedback: 你已經確認飯店了。現在只要回應時間資訊。<br>2. A conta, por favor. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳句。司機剛剛說的是車程時間。 | 司機說大約十分鐘。簡短回應就好。 |  |
| t4 | Chegamos. (我們到了。) | Muito obrigado. (非常謝謝。) | 1. Qual é a senha do wifi? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是問 wifi。計程車已經到目的地，現在道謝即可。<br>2. Tenho uma reserva. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店櫃台句。現在是在計程車上結束行程。 | 已經到目的地。用 Muito obrigado 結束。 |  |

---

## a1:pt:travel_ticket_buying - Comprar uma passagem

- Level: A1
- Language: Portuguese (pt)
- Scenario ID: travel_ticket_buying
- Setting: Guichê de metrô
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在巴西葡語地鐵售票窗口買一張簡單車票。選一句自然短句。

### Clean Dialogue Path

- atendente: Bom dia. Para onde você vai? (早安。你要去哪裡？)
- passageiro: Uma passagem para o Centro, por favor. (請給我一張去市中心的票。)
- atendente: Uma passagem para o Centro? (一張去市中心的票嗎？)
- passageiro: Isso mesmo. (沒錯。)
- atendente: São cinco reais. Vai pagar com cartão? (五雷亞爾。你要用卡付款嗎？)
- passageiro: Sim, com cartão. (對，用卡。)
- atendente: Aqui está. Plataforma dois. (給你。二號月台。)
- passageiro: Obrigado. (謝謝。)
- atendente: Boa viagem. (旅途愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bom dia. Para onde você vai? (早安。你要去哪裡？) | Uma passagem para o Centro, por favor. (請給我一張去市中心的票。) | 1. Onde fica o banheiro? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在買車票。<br>2. Um café, por favor. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在售票窗口買票。 | 售票員問目的地。說你要一張去 Centro 的票。 |  |
| t2 | Uma passagem para o Centro? (一張去市中心的票嗎？) | Isso mesmo. (沒錯。) | 1. Não, obrigado. (不用，謝謝。) [cancel_when_confirming] - feedback: 你正在確認買票。這樣會像取消交易。<br>2. Duas passagens para o Centro. (兩張去市中心的票。) [wrong_quantity] - feedback: 你只需要一張票，不要改成兩張。 | 售票員確認目的地和數量。用簡短句確認。 | Uma passagem para...<br>巴西葡語買交通票可用 Uma passagem para o Centro, por favor 表示一張去某地的票。<br>Uma passagem para o Centro, por favor. = 請給我一張去市中心的票。<br>Isso mesmo. = 沒錯。 |
| t3 | São cinco reais. Vai pagar com cartão? (五雷亞爾。你要用卡付款嗎？) | Sim, com cartão. (對，用卡。) | 1. Sou de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答付款方式。<br>2. A conta, por favor. (請結帳。) [wrong_scenario_restaurant_bill] - feedback: 這像餐廳結帳，不是售票窗口付款。 | 售票員問付款方式。回答用卡。 |  |
| t4 | Aqui está. Plataforma dois. (給你。二號月台。) | Obrigado. (謝謝。) | 1. Pode repetir, por favor? (可以請您再說一次嗎？) [repair_after_clear_handover] - feedback: 如果已理解票和月台，這裡直接道謝即可。<br>2. Prazer. (很高興認識你。) [wrong_scenario_self_intro] - feedback: 這是第一次見面的結尾，不是買票結尾。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
