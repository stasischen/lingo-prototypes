# A1 French Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:fr:convenience_payment_card_cash - Payer à la caisse

- Level: A1
- Language: French (fr)
- Scenario ID: convenience_payment_card_cash
- Setting: Caisse d'une petite boutique
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在法語便利店或小商店櫃台。聽店員問付款方式，選一句簡短、自然的法語回答。

### Clean Dialogue Path

- 店員: Ça fait quatre euros. Par carte ou en espèces ? (四歐元。刷卡還是付現？)
- 你: Par carte, s'il vous plaît. (刷卡，謝謝。)
- 店員: Très bien. Approchez la carte, s'il vous plaît. (好的。請把卡靠近感應。)
- 你: D'accord, merci. (好的，謝謝。)
- 店員: Vous voulez le ticket ? (您要收據嗎？)
- 你: Non, merci. (不用，謝謝。)
- 店員: Voilà, c'est bon. Merci. (好了，沒問題。謝謝。)
- 你: Merci. (謝謝。)
- 店員: Voici votre sac. (這是您的袋子。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Ça fait quatre euros. Par carte ou en espèces ? (四歐元。刷卡還是付現？) | Par carte, s'il vous plaît. (刷卡，謝謝。) | 1. Je voudrais un café. (我想要一杯咖啡。) [wrong_scenario_request] - feedback: 這是在點咖啡。現在店員問的是付款方式。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問洗手間。現在是在結帳。 | 店員在問付款方式。par carte 是刷卡，en espèces 是付現。 | Par carte / en espèces<br>在法語結帳時，par carte 表示刷卡，en espèces 表示現金。<br>Par carte, s'il vous plaît. = 刷卡，謝謝。<br>En espèces, s'il vous plaît. = 付現，謝謝。 |
| t2 | Très bien. Approchez la carte, s'il vous plaît. (好的。請把卡靠近感應。) | D'accord, merci. (好的，謝謝。) | 1. En espèces, s'il vous plaît. (付現，謝謝。) [wrong_payment_method_switch] - feedback: 你剛剛選了刷卡。現在店員在請你用卡付款。<br>2. À emporter, s'il vous plaît. (外帶，謝謝。) [wrong_scenario_response] - feedback: 這是餐點外帶時用的句子。現在是付款流程。 | 店員請你用卡付款。簡短確認就好。 |  |
| t3 | Vous voulez le ticket ? (您要收據嗎？) | Non, merci. (不用，謝謝。) | 1. Par carte, s'il vous plaît. (刷卡，謝謝。) [repeated_prior_answer] - feedback: 付款方式已經說過了。現在店員問你要不要收據。<br>2. À trois heures. (三點。) [wrong_scenario_response] - feedback: 這是在回答時間。現在問題是要不要收據。 | 要或不要都可以。這裡先練不用的短答。 |  |
| t4 | Voilà, c'est bon. Merci. (好了，沒問題。謝謝。) | Merci. (謝謝。) | 1. J'ai une réservation. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在你已經完成付款。<br>2. Je ne veux rien. (我什麼都不要。) [wrong_act_refusal] - feedback: 這像是在拒絕購買。付款完成後，說 Merci 就好。 | 交易完成了。回一句謝謝就可以。 |  |

---

## a1:fr:core_repair_repeat_slowly - Demander de répéter lentement

- Level: A1
- Language: French (fr)
- Scenario ID: core_repair_repeat_slowly
- Setting: Comptoir d'un café
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台沒聽清楚問題。先修復對話，再回答。

### Clean Dialogue Path

- serveuse: C'est pour emporter ? (是外帶嗎？)
- client: Vous pouvez répéter, s'il vous plaît ? (可以請您再說一次嗎？)
- serveuse: Bien sûr. C'est pour emporter ? (當然。是外帶嗎？)
- client: Plus lentement, s'il vous plaît. (請慢一點。)
- serveuse: Pour emporter ou sur place ? (外帶還是在這裡用？)
- client: Sur place, s'il vous plaît. (在這裡，謝謝。)
- serveuse: Très bien. Installez-vous ici. (好的。請坐這裡。)
- client: Merci. (謝謝。)
- serveuse: Avec plaisir. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | C'est pour emporter ? (是外帶嗎？) | Vous pouvez répéter, s'il vous plaît ? (可以請您再說一次嗎？) | 1. Oui, c'est ça. (對，就是這樣。) [blind_confirmation] - feedback: 你還沒聽懂時不要盲目確認。先請對方重複。<br>2. Moi aussi. (我也是。) [wrong_scenario_self_intro] - feedback: 這是自我介紹回應，不是請對方重複。 | 你沒聽清楚。先請對方再說一次。 |  |
| t2 | Bien sûr. C'est pour emporter ? (當然。是外帶嗎？) | Plus lentement, s'il vous plaît. (請慢一點。) | 1. Merci, au revoir. (謝謝，再見。) [closing_before_understanding] - feedback: 還沒理解問題，不要直接結束對話。<br>2. Un billet pour Lyon. (一張去里昂的票。) [wrong_scenario_ticket] - feedback: 這是買票句，不是請對方說慢一點。 | 還是太快。請對方說慢一點。 | Répéter et parler lentement<br>沒聽清楚時，可以說 Vous pouvez répéter, s'il vous plaît ?，再說 Plus lentement, s'il vous plaît。<br>Vous pouvez répéter, s'il vous plaît ? = 可以請您再說一次嗎？<br>Plus lentement, s'il vous plaît. = 請慢一點。 |
| t3 | Pour emporter ou sur place ? (外帶還是在這裡用？) | Sur place, s'il vous plaît. (在這裡，謝謝。) | 1. Vous pouvez répéter ? (您可以再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經用簡單方式重述了，現在可以回答。<br>2. Je viens de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答內用或外帶。 | 現在問題清楚了。簡短回答在這裡。 |  |
| t4 | Très bien. Installez-vous ici. (好的。請坐這裡。) | Merci. (謝謝。) | 1. Deux billets, s'il vous plaît. (請給我兩張票。) [wrong_scenario_ticket_quantity] - feedback: 這是買票數量，不是櫃台修復對話結尾。<br>2. Je ne comprends rien. (我完全不懂。) [overbroad_repair_after_success] - feedback: 你已經成功理解並回答了。這裡道謝即可。 | 對方已經幫你處理。簡短道謝。 |  |

---

## a1:fr:daily_meet_friend - Retrouver un ami

- Level: A1
- Language: French (fr)
- Scenario ID: daily_meet_friend
- Setting: Entrée d'un café
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友碰面。選一句簡短自然的法語。

### Clean Dialogue Path

- amie: Salut ! Tu es Alex ? (嗨！你是 Alex 嗎？)
- ami: Oui, c'est moi. (對，是我。)
- amie: Super. Tu es prêt ? (太好了。你準備好了嗎？)
- ami: Oui, je suis prêt. (對，我準備好了。)
- amie: Parfait. On va au café. (很好。我們去咖啡店。)
- ami: Oui, on y va. (好，走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Salut ! Tu es Alex ? (嗨！你是 Alex 嗎？) | Oui, c'est moi. (對，是我。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_payment] - feedback: 這是在餐廳結帳，不是和朋友確認身份。<br>2. C'est combien ? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在問價格，不是回朋友的招呼。 | 朋友在確認是不是你。用簡短自然的回答。 |  |
| t2 | Super. Tu es prêt ? (太好了。你準備好了嗎？) | Oui, je suis prêt. (對，我準備好了。) | 1. Je prends un café. (我要一杯咖啡。) [wrong_scenario_ordering] - feedback: 這是在點飲料。朋友問你是否準備好。<br>2. Où est la gare ? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路。現在只要回答準備好了。 | 朋友在問你可不可以出發。 | Je suis prêt<br>和朋友碰面時，可以說 Je suis prêt/prête 表示準備好了。A1 先用 prêt。<br>Oui, je suis prêt. = 對，我準備好了。<br>On y va. = 走吧。 |
| t3 | Parfait. On va au café. (很好。我們去咖啡店。) | Oui, on y va. (好，走吧。) | 1. Je paie par carte. (我用卡付款。) [wrong_scenario_payment] - feedback: 這是付款句。朋友只是說一起走。<br>2. Non, je ne suis pas Alex. (不，我不是 Alex。) [wrong_identity_after_confirm] - feedback: 前面已經確認是 Alex，這會讓情境不成立。 | 朋友說下一步。用短句同意。 |  |

---

## a1:fr:daily_schedule_time - Fixer une heure

- Level: A1
- Language: French (fr)
- Scenario ID: daily_schedule_time
- Setting: Plan avec une amie
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在用法語和朋友約時間。聽對方問什麼，選一個簡短、自然的法語回答。

### Clean Dialogue Path

- 朋友: On se retrouve à quelle heure ? (我們幾點見？)
- 你: À trois heures. (三點。)
- 朋友: D'accord. À l'entrée ? (好。在入口嗎？)
- 你: Oui, à l'entrée. (對，在入口。)
- 朋友: Parfait, à trois heures à l'entrée. (很好，三點在入口。)
- 你: Super, à tout à l'heure. (太好了，待會見。)
- 朋友: Génial. À tout à l'heure. (太好了，待會見。)
- 你: À tout à l'heure. (待會見。)
- 朋友: On se voit à trois heures. (我們三點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | On se retrouve à quelle heure ? (我們幾點見？) | À trois heures. (三點。) | 1. À l'entrée. (在入口。) [wrong_slot_location] - feedback: 這是在回答地點。對方問的是幾點。<br>2. Par carte, s'il vous plaît. (刷卡，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在是在約時間。 | 對方在問時間。用 à 加時間回答。 | À ... heures<br>說幾點見面時，可以用 à 加時間。<br>À trois heures. = 三點。<br>À cinq heures. = 五點。 |
| t2 | D'accord. À l'entrée ? (好。在入口嗎？) | Oui, à l'entrée. (對，在入口。) | 1. À trois heures. (三點。) [repeated_prior_answer] - feedback: 時間剛剛已經說過了。現在是在確認地點。<br>2. Je ne veux rien. (我什麼都不要。) [wrong_act_refusal] - feedback: 這像是在拒絕。對方只是確認見面地點。 | 對方在確認地點。沒問題時，用短句確認。 |  |
| t3 | Parfait, à trois heures à l'entrée. (很好，三點在入口。) | Super, à tout à l'heure. (太好了，待會見。) | 1. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問路。現在是確認見面計畫。<br>2. Demain matin, j'ai beaucoup de choses et peut-être après je peux. (明天早上我有很多事，也許之後可以。) [over_complex_schedule] - feedback: 這太長也太複雜。A1 先用「Super, à tout à l'heure」收尾。 | 對方整理了時間和地點。用自然短句收尾。 |  |
| t4 | Génial. À tout à l'heure. (太好了，待會見。) | À tout à l'heure. (待會見。) | 1. J'ai une réservation. (我有訂房。) [wrong_scenario_response] - feedback: 這是飯店入住用的句子。現在只是朋友約時間。<br>2. En espèces, s'il vous plaît. (付現，謝謝。) [wrong_scenario_response] - feedback: 這是付款時用的句子。現在計畫已經確認。 | 計畫完成了。回一句再見就可以。 |  |

---

## a1:fr:daily_self_intro - Se présenter

- Level: A1
- Language: French (fr)
- Scenario ID: daily_self_intro
- Setting: Table d'échange linguistique
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換活動第一次見到同桌的人。選一句自然、簡短的法語。

### Clean Dialogue Path

- participante: Salut, moi c'est Camille. Et toi ? (嗨，我是 Camille。你呢？)
- nouveau participant: Salut, moi c'est Alex. (嗨，我是 Alex。)
- participante: Enchantée, Alex. Tu viens d'où ? (很高興認識你，Alex。你來自哪裡？)
- nouveau participant: Je viens de Taipei. (我來自台北。)
- participante: Super. Tu apprends le français ? (太好了。你在學法語嗎？)
- nouveau participant: Oui, j'apprends le français. (對，我在學法語。)
- participante: Très bien. Ravie de te rencontrer. (很好。很高興認識你。)
- nouveau participant: Moi aussi. (我也是。)
- participante: Bienvenue dans le groupe. (歡迎加入這個小組。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Salut, moi c'est Camille. Et toi ? (嗨，我是 Camille。你呢？) | Salut, moi c'est Alex. (嗨，我是 Alex。) | 1. Je voudrais un billet. (我想要一張票。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在第一次見面介紹自己。<br>2. Tu me donnes ton numéro ? (你可以給我你的電話嗎？) [private_contact_request] - feedback: 這會要求私人聯絡方式，不適合這個 A1 自我介紹情境。 | 對方先自我介紹。用一句話說你的名字。 |  |
| t2 | Enchantée, Alex. Tu viens d'où ? (很高興認識你，Alex。你來自哪裡？) | Je viens de Taipei. (我來自台北。) | 1. Oui, moi c'est Alex. (對，我是 Alex。) [repeat_prior_answer] - feedback: 名字已經說過了。現在要回答來自哪裡。<br>2. Par carte, s'il vous plaît. (請用卡付款。) [wrong_scenario_payment] - feedback: 這是付款方式，不是自我介紹。 | 對方問你來自哪裡。用短句回答。 | Moi c'est + Je viens de<br>口語法語第一次見面可以說 Moi c'est Alex，說來源可以用 Je viens de Taipei。<br>Moi c'est Alex. = 我是 Alex。<br>Je viens de Taipei. = 我來自台北。 |
| t3 | Super. Tu apprends le français ? (太好了。你在學法語嗎？) | Oui, j'apprends le français. (對，我在學法語。) | 1. Vous pouvez répéter ? (您可以再說一次嗎？) [repair_when_understood] - feedback: 這是修復句。現在問題很清楚，可以直接回答。<br>2. Un café, s'il vous plaît. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在回答學語言的問題。 | 用簡短句子說你正在學法語。 |  |
| t4 | Très bien. Ravie de te rencontrer. (很好。很高興認識你。) | Moi aussi. (我也是。) | 1. J'ai besoin d'un billet. (我需要一張票。) [wrong_scenario_ticket] - feedback: 這是買票需求，不是回應第一次見面。<br>2. Parlez lentement, s'il vous plaît. (請說慢一點。) [repair_when_closing] - feedback: 這是請對方放慢，現在是友善結尾。 | 用常見短句回應很高興認識你。 |  |

---

## a1:fr:digital_battery_charging - Demander à charger son téléphone

- Level: A1
- Language: French (fr)
- Scenario ID: digital_battery_charging
- Setting: Café
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店。先問可不可以充手機，再問插座在哪裡，確認位置並道謝。

### Clean Dialogue Path

- employé: Bonjour, je peux vous aider ? (您好，我可以幫您嗎？)
- client: Je peux charger mon téléphone ici ? (我可以在這裡充手機嗎？)
- employé: Oui, bien sûr. (可以，當然。)
- client: Où est la prise ? (插座在哪裡？)
- employé: La prise est près de la table. (插座在桌子旁邊。)
- client: Près de la table ? (在桌子旁邊嗎？)
- employé: Oui, juste là. (對，就在那裡。)
- client: Merci. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, je peux vous aider ? (您好，我可以幫您嗎？) | Je peux charger mon téléphone ici ? (我可以在這裡充手機嗎？) | 1. Quel est le mot de passe wifi ? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是在問 wifi 密碼。現在要問能不能充手機。<br>2. Un café, s'il vous plaît. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡，不是詢問充電許可。 | 先問可不可以充手機。法語用 Je peux...? 很簡潔。 |  |
| t2 | Oui, bien sûr. (可以，當然。) | Où est la prise ? (插座在哪裡？) | 1. Je peux charger mon téléphone ici ? (我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意。現在要問插座在哪裡。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間，不是問插座位置。 | 對方同意了。接著問插座在哪裡。 | Je peux...? / Où est...?<br>問許可可用 Je peux...?；問位置可用 Où est...?。<br>Je peux charger mon téléphone ici ? = 我可以在這裡充手機嗎？<br>Où est la prise ? = 插座在哪裡？ |
| t3 | La prise est près de la table. (插座在桌子旁邊。) | Près de la table ? (在桌子旁邊嗎？) | 1. La sortie trois ? (三號出口嗎？) [wrong_scenario_station] - feedback: 這像是在車站問出口。現在要確認插座位置。<br>2. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是在結帳，沒有確認插座位置。 | 確認位置就好。重複關鍵位置。 |  |
| t4 | Oui, juste là. (對，就在那裡。) | Merci. (謝謝。) | 1. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方已經幫你確認位置。現在直接道謝。<br>2. Je voudrais une table. (我想要一張桌子。) [wrong_scenario_restaurant] - feedback: 這是在問座位，不是完成充電位置確認。 | 已經知道位置了。簡短道謝。 |  |

---

## a1:fr:digital_wifi_connect - Demander le mot de passe wifi

- Level: A1
- Language: French (fr)
- Scenario ID: digital_wifi_connect
- Setting: Comptoir
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台。問 wifi 密碼，嘗試後說手機連不上，並謝謝對方。

### Clean Dialogue Path

- employé: Bonjour, je peux vous aider ? (您好，我可以幫您嗎？)
- client: Quel est le mot de passe wifi ? (wifi 密碼是什麼？)
- employé: Le mot de passe, c'est cafe2026. (密碼是 cafe2026。)
- client: Merci, j'essaie. (謝謝，我試一下。)
- employé: Ça marche ? (可以用嗎？)
- client: Non, ça ne se connecte pas. (不，連不上。)
- employé: Réessayez une fois, s'il vous plaît. (請再試一次。)
- client: D'accord, merci. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, je peux vous aider ? (您好，我可以幫您嗎？) | Quel est le mot de passe wifi ? (wifi 密碼是什麼？) | 1. Un café, s'il vous plaît. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點咖啡。現在要問 wifi 密碼。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向，不是問 wifi。 | 你要問 wifi 密碼。法語常說 mot de passe wifi。 |  |
| t2 | Le mot de passe, c'est cafe2026. (密碼是 cafe2026。) | Merci, j'essaie. (謝謝，我試一下。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。對方剛剛給了 wifi 密碼。<br>2. Quel est le mot de passe wifi ? (wifi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經說了密碼。現在要表示你試一下。 | 對方給了密碼。先說謝謝，表示你試一下。 | mot de passe / ça ne se connecte pas<br>問密碼用 Quel est le mot de passe...?；連不上可以說 Ça ne se connecte pas。<br>Quel est le mot de passe wifi ? = wifi 密碼是什麼？<br>Ça ne se connecte pas. = 連不上。 |
| t3 | Ça marche ? (可以用嗎？) | Non, ça ne se connecte pas. (不，連不上。) | 1. Oui, merci. (可以，謝謝。) [wrong_connection_status] - feedback: 情境是連不上。要說 Ça ne se connecte pas。<br>2. Je voudrais une table. (我想要一張桌子。) [wrong_scenario_restaurant] - feedback: 這是餐廳需求。現在要回報 wifi 連不上。 | 手機還是連不上。用 Ça ne se connecte pas。 |  |
| t4 | Réessayez une fois, s'il vous plaît. (請再試一次。) | D'accord, merci. (好的，謝謝。) | 1. À l'hôtel Central, s'il vous plaît. (到中央飯店，謝謝。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。現在是在處理 wifi。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 對方正在幫你。接受簡單指示並道謝比較合適。 | 對方給了簡單指示。用 D'accord, merci 結束。 |  |

---

## a1:fr:food_bill_payment - Payer l'addition

- Level: A1
- Language: French (fr)
- Scenario ID: food_bill_payment
- Setting: Café simple
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在法語咖啡店用餐後要結帳。選一句簡短自然的法語。

### Clean Dialogue Path

- serveur: Tout va bien ? Vous désirez autre chose ? (都還好嗎？您還需要別的嗎？)
- client: L'addition, s'il vous plaît. (請結帳。)
- serveur: Bien sûr. Vous payez par carte ou en espèces ? (當然。您用卡還是現金付款？)
- client: Par carte, s'il vous plaît. (請用卡。)
- serveur: Très bien. Vous voulez un reçu ? (好的。您要收據嗎？)
- client: Non, merci. (不用，謝謝。)
- serveur: C'est bon, merci beaucoup. (好了，非常謝謝。)
- client: Merci. Au revoir. (謝謝。再見。)
- serveur: Au revoir. (再見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tout va bien ? Vous désirez autre chose ? (都還好嗎？您還需要別的嗎？) | L'addition, s'il vous plaît. (請結帳。) | 1. Je prends une autre soupe. (我再要一份湯。) [wrong_sequence_more_food] - feedback: 這是在加點食物。現在的目標是結帳。<br>2. Où est la gare ? (車站在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在餐廳結帳。 | 你已經吃完了。現在可以請服務生拿帳單。 |  |
| t2 | Bien sûr. Vous payez par carte ou en espèces ? (當然。您用卡還是現金付款？) | Par carte, s'il vous plaît. (請用卡。) | 1. Sans reçu, merci. (不用收據，謝謝。) [wrong_prompt_receipt] - feedback: 這是在回答收據問題。現在問的是付款方式。<br>2. C'est combien ? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是在商店問商品價格，不是餐廳付帳。 | 服務生在問付款方式。選一個短回答。 | L'addition + paiement<br>在法語餐廳要結帳，可以說 L'addition, s'il vous plaît。付款時說 Par carte 或 En espèces。<br>L'addition, s'il vous plaît. = 請結帳。<br>Par carte, s'il vous plaît. = 請用卡。 |
| t3 | Très bien. Vous voulez un reçu ? (好的。您要收據嗎？) | Non, merci. (不用，謝謝。) | 1. Nous sommes deux. (我們是兩位。) [wrong_prior_context] - feedback: 人數不是現在的問題。服務生問你要不要收據。<br>2. On se retrouve ici. (我們在這裡見。) [wrong_scenario_meeting] - feedback: 這是朋友碰面情境，不是付款收據。 | 如果不需要收據，簡短說不用。 |  |
| t4 | C'est bon, merci beaucoup. (好了，非常謝謝。) | Merci. Au revoir. (謝謝。再見。) | 1. Je prends un café. (我要一杯咖啡。) [wrong_sequence_ordering] - feedback: 付款已完成，現在不是再點餐。<br>2. C'est combien ? (這個多少錢？) [wrong_scenario_shopping] - feedback: 這是購物問價，不是結帳結尾。 | 交易完成了，禮貌回謝即可。 |  |

---

## a1:fr:food_coffee_ordering - Commander un café

- Level: A1
- Language: French (fr)
- Scenario ID: food_coffee_ordering
- Setting: Comptoir de café
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台。聽店員的問題，選一個簡短、自然的法語回答。

### Clean Dialogue Path

- 店員: Bonjour. Vous désirez ? (店員在問你想點什麼。)
- 你: Je voudrais un café au lait, s'il vous plaît. (我想要一杯牛奶咖啡，謝謝。)
- 店員: Sur place ou à emporter ? (店員在問你要內用還是外帶。)
- 你: À emporter, s'il vous plaît. (外帶，謝謝。)
- 店員: Un café au lait à emporter, c'est ça ? (店員在確認你的訂單。)
- 你: Oui, c'est ça. (對，就是這樣。)
- 店員: Ça fera trois euros. Vous pouvez payer ici. (店員告訴你金額，並請你在這裡付款。)
- 你: D'accord, merci. (好的，謝謝。)
- 店員: Votre café sera prêt au bout du comptoir. (你的咖啡會在櫃台尾端準備好。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Vous désirez ? (店員在問你想點什麼。) | Je voudrais un café au lait, s'il vous plaît. (我想要一杯牛奶咖啡，謝謝。) | 1. Où sont les toilettes ? (我在問洗手間在哪裡。) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員等你點飲料。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這聽起來像是不點了。此處要說出想要的飲品。 | 直接用 Je voudrais 加飲品，最後加 s'il vous plaît。 |  |
| t2 | Sur place ou à emporter ? (店員在問你要內用還是外帶。) | À emporter, s'il vous plaît. (外帶，謝謝。) | 1. Je voudrais un café au lait. (我想要一杯牛奶咖啡。) [repeated_prior_answer] - feedback: 你已經點飲料了。現在要回答內用或外帶。<br>2. Oui, c'est ça. (對，就是這樣。) [wrong_act_confirmation] - feedback: 這是在確認，不是在二選一。請選 sur place 或 à emporter。 | 選一個服務選項。à emporter 是外帶。 | Sur place / à emporter<br>在法語咖啡店，sur place 表示內用，à emporter 表示外帶。<br>Sur place, s'il vous plaît. = 內用，謝謝。<br>À emporter, s'il vous plaît. = 外帶，謝謝。 |
| t3 | Un café au lait à emporter, c'est ça ? (店員在確認你的訂單。) | Oui, c'est ça. (對，就是這樣。) | 1. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在取消或拒絕。訂單正確時，用 Oui 確認。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個情境。先確認咖啡訂單。 | 如果訂單正確，用 Oui, c'est ça 確認。 |  |
| t4 | Ça fera trois euros. Vous pouvez payer ici. (店員告訴你金額，並請你在這裡付款。) | D'accord, merci. (好的，謝謝。) | 1. À emporter, s'il vous plaît. (外帶，謝謝。) [repeated_prior_answer] - feedback: 你已經回答外帶了。現在是付款步驟。<br>2. Je voudrais un café au lait. (我想要一杯牛奶咖啡。) [repeated_prior_answer] - feedback: 飲料已經點好了。現在要回應付款。 | 付款步驟只需要簡短回應。 |  |

---

## a1:fr:food_restaurant_ordering - Commander au restaurant

- Level: A1
- Language: French (fr)
- Scenario ID: food_restaurant_ordering
- Setting: Table de restaurant simple
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在法語餐廳。聽服務生問什麼，選一句簡短自然的法語回答。

### Clean Dialogue Path

- serveur: Bonjour. Vous avez choisi ? (您好。您選好了嗎？)
- client: Oui, j'ai choisi. (是的，我選好了。)
- serveur: Très bien. Qu'est-ce que vous prenez ? (很好。您要點什麼？)
- client: Je prends une soupe, s'il vous plaît. (我點一份湯，謝謝。)
- serveur: Une soupe, très bien. Autre chose ? (一份湯，很好。還要別的嗎？)
- client: Non, merci. C'est tout. (不用了，謝謝。就這樣。)
- serveur: Parfait. Votre soupe arrive dans quelques minutes. (太好了。您的湯幾分鐘後會送來。)
- client: Merci. (謝謝。)
- serveur: Avec plaisir. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Vous avez choisi ? (您好。您選好了嗎？) | Oui, j'ai choisi. (是的，我選好了。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_sequence_bill] - feedback: 這是在用餐後結帳。現在才要開始點餐。<br>2. Un café à emporter. (一杯咖啡外帶。) [wrong_setting_cafe] - feedback: 這像咖啡店外帶。餐廳點餐先回答你準備好了。 | 服務生在問你是否準備好點餐。簡短回答 Oui。 |  |
| t2 | Très bien. Qu'est-ce que vous prenez ? (很好。您要點什麼？) | Je prends une soupe, s'il vous plaît. (我點一份湯，謝謝。) | 1. Nous sommes deux. (我們是兩位。) [wrong_prior_context] - feedback: 現在不是在問人數。服務生正在問你要點哪一道菜。<br>2. Je paie par carte. (我用卡付款。) [wrong_sequence_payment] - feedback: 付款還太早。現在要先點餐。 | 用 Je prends 加一道菜，最後加 s'il vous plaît。 | Je prends + un plat<br>在餐廳點餐，Je prends... 是自然又簡短的說法。<br>Je prends une soupe, s'il vous plaît. = 我點一份湯，謝謝。<br>Une salade, s'il vous plaît. = 一份沙拉，謝謝。 |
| t3 | Une soupe, très bien. Autre chose ? (一份湯，很好。還要別的嗎？) | Non, merci. C'est tout. (不用了，謝謝。就這樣。) | 1. Je prends trois soupes. (我要三份湯。) [wrong_quantity] - feedback: 服務生確認的是一份湯。沒有改數量時，不要說三份。<br>2. Où est la station ? (車站在哪裡？) [wrong_scenario_request] - feedback: 這是問路。現在是在確認餐廳訂單。 | 餐點正確且不加點時，說 Non, merci。 |  |
| t4 | Parfait. Votre soupe arrive dans quelques minutes. (太好了。您的湯幾分鐘後會送來。) | Merci. (謝謝。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_sequence_bill] - feedback: 你還沒吃完。服務生只是說餐點會送來。<br>2. J'ai besoin du mot de passe wifi. (我需要 wifi 密碼。) [wrong_scenario_hotel] - feedback: 這是飯店或 wifi 問題，不是餐廳點餐結尾。 | 服務生說餐點會來。簡短道謝就好。 |  |

---

## a1:fr:hotel_checkout - Rendre la chambre

- Level: A1
- Language: French (fr)
- Scenario ID: hotel_checkout
- Setting: Réception de l'hôtel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。用簡短法語說要退房、房號、交回房卡，並道謝。

### Clean Dialogue Path

- réceptionniste: Bonjour, je peux vous aider ? (您好，我可以幫您嗎？)
- client: Je voudrais rendre la chambre. (我想退房／交回房間。)
- réceptionniste: Bien sûr. Votre numéro de chambre ? (好的。您的房號是？)
- client: Chambre 304. (304 號房。)
- réceptionniste: Vous avez la carte, s'il vous plaît ? (請問您有房卡嗎？)
- client: Oui, la voici. (有，房卡在這裡。)
- réceptionniste: C'est fait, merci. (好了，謝謝。)
- client: Merci beaucoup. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, je peux vous aider ? (您好，我可以幫您嗎？) | Je voudrais rendre la chambre. (我想退房／交回房間。) | 1. Quel est le mot de passe wifi ? (wifi 密碼是什麼？) [wrong_hotel_request] - feedback: 這是在問 wifi。現在目標是退房。<br>2. J'ai une réservation. (我有訂房。) [wrong_act_checkin] - feedback: 這是入住句。你現在要辦退房。 | 你要退房。法語可以簡短說 Je voudrais rendre la chambre。 |  |
| t2 | Bien sûr. Votre numéro de chambre ? (好的。您的房號是？) | Chambre 304. (304 號房。) | 1. Sortie deux. (二號出口。) [wrong_number_type] - feedback: 這是出口號碼。櫃台問的是房號。<br>2. Une table pour deux. (兩位用餐。) [wrong_scenario_restaurant] - feedback: 這是餐廳入座句，不是飯店退房。 | 櫃台問房號。用 Chambre 加數字。 | Chambre... / La voici<br>退房時可以用 Chambre 加房號；交房卡時可說 La voici。<br>Chambre 304. = 304 號房。<br>Oui, la voici. = 好的，房卡在這裡。 |
| t3 | Vous avez la carte, s'il vous plaît ? (請問您有房卡嗎？) | Oui, la voici. (有，房卡在這裡。) | 1. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。退房時要交回房卡。<br>2. À l'hôtel Central. (到中央飯店。) [wrong_scenario_taxi] - feedback: 這是計程車目的地。櫃台現在要房卡。 | 櫃台要房卡。交給對方時說 Oui, la voici。 |  |
| t4 | C'est fait, merci. (好了，謝謝。) | Merci beaucoup. (非常謝謝。) | 1. Je voudrais rendre la chambre. (我想退房。) [repeated_prior_request] - feedback: 退房已經完成了。現在道謝即可。<br>2. À quelle heure est le petit déjeuner ? (早餐是幾點？) [wrong_hotel_request] - feedback: 這是早餐問題。退房已完成，先結束對話。 | 流程完成。用 Merci beaucoup 結束。 |  |

---

## a1:fr:hotel_wifi_breakfast - Demander le wifi et le petit déjeuner

- Level: A1
- Language: French (fr)
- Scenario ID: hotel_wifi_breakfast
- Setting: Réception de l'hôtel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。用簡短法語問 wifi 密碼和早餐時間。

### Clean Dialogue Path

- réceptionniste: Bonjour, je peux vous aider ? (您好，我可以幫您嗎？)
- client: Quel est le mot de passe wifi ? (wifi 密碼是什麼？)
- réceptionniste: Il est sur la carte de la chambre. (在房卡套上。)
- client: Merci. À quelle heure est le petit déjeuner ? (謝謝。早餐是幾點？)
- réceptionniste: Le petit déjeuner est de sept heures à dix heures, au premier étage. (早餐是七點到十點，在一樓。)
- client: De sept heures à dix heures, merci. (七點到十點，謝謝。)
- réceptionniste: Vous avez besoin d'autre chose ? (您還需要別的嗎？)
- client: Non, merci. (不用了，謝謝。)
- réceptionniste: Je vous en prie. Bon séjour. (不客氣。祝您住宿愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, je peux vous aider ? (您好，我可以幫您嗎？) | Quel est le mot de passe wifi ? (wifi 密碼是什麼？) | 1. Je prends une soupe, s'il vous plaît. (我點一份湯，謝謝。) [wrong_scenario_order] - feedback: 這是餐廳點餐。你現在在飯店櫃台問 wifi。<br>2. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是飯店櫃台問題。 | 你要問 wifi 密碼。法語常說 mot de passe wifi。 |  |
| t2 | Il est sur la carte de la chambre. (在房卡套上。) | Merci. À quelle heure est le petit déjeuner ? (謝謝。早餐是幾點？) | 1. J'ai besoin d'une autre clé. (我需要另一把鑰匙。) [wrong_hotel_request] - feedback: 這是在要另一把鑰匙。現在要問早餐資訊。<br>2. Je paie par carte. (我用卡付款。) [wrong_sequence_payment] - feedback: 這是付款回答。櫃台剛剛回答的是 wifi 密碼在哪裡。 | 對方說密碼在房間卡片上。接著問早餐時間。 | Quel est...? / À quelle heure...?<br>問密碼用 Quel est le mot de passe...?；問時間用 À quelle heure...?<br>Quel est le mot de passe wifi ? = wifi 密碼是什麼？<br>À quelle heure est le petit déjeuner ? = 早餐是幾點？ |
| t3 | Le petit déjeuner est de sept heures à dix heures, au premier étage. (早餐是七點到十點，在一樓。) | De sept heures à dix heures, merci. (七點到十點，謝謝。) | 1. À midi, merci. (中午十二點，謝謝。) [wrong_time] - feedback: 對方說七點到十點，不是中午。<br>2. Une table pour deux. (兩位用餐。) [wrong_restaurant_context] - feedback: 這是餐廳入座句。你現在只是確認飯店早餐時間。 | 重點是七點到十點。用短句確認。 |  |
| t4 | Vous avez besoin d'autre chose ? (您還需要別的嗎？) | Non, merci. (不用了，謝謝。) | 1. Où est la sortie deux ? (二號出口在哪裡？) [wrong_scenario_station] - feedback: 這是車站問路。飯店櫃台問題已經問完了。<br>2. Je prends une soupe. (我點一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是飯店櫃台結尾。 | 沒有其他問題時，用 Non, merci。 |  |

---

## a1:fr:problem_lost_item - Dire qu'on a perdu quelque chose

- Level: A1
- Language: French (fr)
- Scenario ID: problem_lost_item
- Setting: Point information
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。說一個小物品不見了，回答可能在哪裡不見，確認下一步去哪裡問，最後道謝。

### Clean Dialogue Path

- employé: Bonjour, je peux vous aider ? (您好，我可以幫您嗎？)
- client: J'ai perdu mon sac. (我的包不見了。)
- employé: Vous l'avez perdu où ? (您在哪裡弄丟的？)
- client: Je crois, au café. (我想是在咖啡店。)
- employé: Les objets trouvés sont à côté. (失物招領在旁邊。)
- client: Aux objets trouvés ? (到失物招領嗎？)
- employé: Oui, demandez là-bas. (對，請到那裡問。)
- client: Merci. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, je peux vous aider ? (您好，我可以幫您嗎？) | J'ai perdu mon sac. (我的包不見了。) | 1. C'est combien ? (多少錢？) [wrong_scenario_price] - feedback: 這是在問價格。現在要說東西不見了。<br>2. Je voudrais un café. (我想要一杯咖啡。) [wrong_scenario_order] - feedback: 這是在點餐，不是尋求失物協助。 | 先說你的小包不見了。用 J'ai perdu... 很簡單。 |  |
| t2 | Vous l'avez perdu où ? (您在哪裡弄丟的？) | Je crois, au café. (我想是在咖啡店。) | 1. À trois heures. (三點。) [wrong_answer_time] - feedback: 對方問在哪裡，不是問時間。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 你正在尋求協助。需要回答可能的地點。 | 給一個簡單地點，不需要細節。 | J'ai perdu... / au café<br>說遺失可用 J'ai perdu...；地點可用 au/à la + lieu。<br>J'ai perdu mon sac. = 我的包不見了。<br>Je crois, au café. = 我想是在咖啡店。 |
| t3 | Les objets trouvés sont à côté. (失物招領在旁邊。) | Aux objets trouvés ? (到失物招領嗎？) | 1. Je veux payer maintenant. (我現在想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是確認去哪裡問失物。<br>2. J'ai perdu mon sac. (我的包不見了。) [repeated_prior_statement] - feedback: 你已經說過遺失物。現在要確認下一步。 | 確認下一步去哪裡問。 |  |
| t4 | Oui, demandez là-bas. (對，請到那裡問。) | Merci. (謝謝。) | 1. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間。現在應該感謝對方。<br>2. C'est trop cher. (太貴了。) [wrong_scenario_price] - feedback: 這是在談價格，不是完成失物詢問。 | 已知道下一步。道謝結束。 |  |

---

## a1:fr:shopping_ask_price - Demander le prix

- Level: A1
- Language: French (fr)
- Scenario ID: shopping_ask_price
- Setting: Petit stand de marché
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在法語小店。聽店員說什麼，選一句簡短自然的法語回答。

### Clean Dialogue Path

- vendeur: Bonjour. Je peux vous aider ? (您好。需要幫忙嗎？)
- client: Oui. C'est combien ? (是的。這個多少錢？)
- vendeur: C'est cinq euros. (五歐元。)
- client: D'accord, je le prends. (好，我買這個。)
- vendeur: Parfait. Ça fait cinq euros. (很好。總共五歐元。)
- client: Merci. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Je peux vous aider ? (您好。需要幫忙嗎？) | Oui. C'est combien ? (是的。這個多少錢？) | 1. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_direction] - feedback: 這是在問路。這裡要問商品價格。<br>2. Un café, s'il vous plaît. (請給我一杯咖啡。) [wrong_scenario_food] - feedback: 這像在點飲料，不是在問商品價格。 | 店員在招呼你。禮貌地問這個多少錢。 |  |
| t2 | C'est cinq euros. (五歐元。) | D'accord, je le prends. (好，我買這個。) | 1. Je paie par carte. (我用卡付款。) [early_payment_method] - feedback: 這是付款方式。先說你要不要買比較自然。<br>2. Je prends deux cafés. (我要兩杯咖啡。) [wrong_item_quantity] - feedback: 這換成點咖啡和數量了，不是回應商品價格。 | 聽到價格後，可以說你要買。 | C'est combien ?<br>在口語購物情境，問價格可以簡短說 C'est combien ?。更完整可說 Ça coûte combien ?。<br>C'est combien ? = 這個多少錢？<br>C'est cinq euros. = 五歐元。 |
| t3 | Parfait. Ça fait cinq euros. (很好。總共五歐元。) | Merci. (謝謝。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_restaurant] - feedback: 這通常在餐廳用。小店買商品不這樣說。<br>2. On va au café. (我們去咖啡店。) [wrong_scenario_meeting] - feedback: 這是朋友碰面的情境，不是購物。 | 交易要結束了，簡短道謝即可。 |  |

---

## a1:fr:social_running_late - Dire qu'on est en retard

- Level: A1
- Language: French (fr)
- Scenario ID: social_running_late
- Setting: Message à un ami
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要和朋友見面，但會晚到。簡短說抱歉、幾分鐘後到、謝謝對方等待，最後說等一下見。

### Clean Dialogue Path

- ami: Tu arrives bientôt ? (你快到了嗎？)
- ami en retard: Désolé, je suis en retard. (抱歉，我遲到了。)
- ami: Dans combien de temps ? (多久後到？)
- ami en retard: Dans dix minutes. (十分鐘後。)
- ami: D'accord, je t'attends. (好，我等你。)
- ami en retard: Merci de m'attendre. (謝謝你等我。)
- ami: À tout de suite. (等一下見。)
- ami en retard: À tout de suite. (等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tu arrives bientôt ? (你快到了嗎？) | Désolé, je suis en retard. (抱歉，我遲到了。) | 1. Un café, s'il vous plaît. (一杯咖啡，謝謝。) [wrong_scenario_order] - feedback: 這是在點餐。現在要告訴朋友你會晚到。<br>2. Je suis rue Centrale. (我在中央街。) [sensitive_location_detail] - feedback: 這給了精準位置。這個情境只需要說會晚到。 | 朋友在等你。先簡短道歉並說你晚到了。 |  |
| t2 | Dans combien de temps ? (多久後到？) | Dans dix minutes. (十分鐘後。) | 1. La sortie trois. (三號出口。) [wrong_number_context] - feedback: 這是在說出口，不是回答多久後到。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 朋友問時間。需要給時間估計。 | 給一個短估計，不要解釋太多。 | je suis en retard / dans dix minutes<br>說晚到可用 Je suis en retard；估時間可用 Dans dix minutes。<br>Désolé, je suis en retard. = 抱歉，我遲到了。<br>Dans dix minutes. = 十分鐘後。 |
| t3 | D'accord, je t'attends. (好，我等你。) | Merci de m'attendre. (謝謝你等我。) | 1. Où est la prise ? (插座在哪裡？) [wrong_scenario_charging] - feedback: 這是在問充電。現在要謝謝朋友等待。<br>2. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳，不是朋友聊天。 | 朋友願意等。謝謝對方等待。 |  |
| t4 | À tout de suite. (等一下見。) | À tout de suite. (等一下見。) | 1. Merci beaucoup, monsieur. (非常謝謝您，先生。) [wrong_register_formal] - feedback: 這太像正式服務場合。朋友之間用 À tout de suite。<br>2. Je veux payer. (我想付款。) [wrong_scenario_payment] - feedback: 這是在付款，不是結束遲到訊息。 | 用自然的朋友收尾。 |  |

---

## a1:fr:travel_hotel_checkin - Arrivée à l'hôtel

- Level: A1
- Language: French (fr)
- Scenario ID: travel_hotel_checkin
- Setting: Réception d'hôtel
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。說你有訂房，提供姓名，聽懂下一步。

### Clean Dialogue Path

- 櫃台人員: Bonsoir. Comment puis-je vous aider ? (櫃台人員在問你需要什麼協助。)
- 你: Bonsoir, j'ai une réservation. (你好，我有訂房。)
- 櫃台人員: Très bien. À quel nom ? (櫃台人員在問訂房姓名。)
- 你: Au nom de Lee. (訂房姓名是 Lee。)
- 櫃台人員: J'ai trouvé votre réservation. Une nuit, c'est bien ça ? (櫃台找到訂房，並確認住一晚。)
- 你: Oui, c'est bien ça. (對，沒錯。)
- 櫃台人員: Voici votre clé. Votre chambre est au troisième étage. (櫃台給你鑰匙，並告訴你房間在三樓。)
- 你: Merci. (謝謝。)
- 櫃台人員: Le petit déjeuner est dans le hall, de sept heures à dix heures. (早餐在大廳，時間是七點到十點。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonsoir. Comment puis-je vous aider ? (櫃台人員在問你需要什麼協助。) | Bonsoir, j'ai une réservation. (你好，我有訂房。) | 1. Je voudrais un café. (我想要一杯咖啡。) [wrong_scenario_request] - feedback: 這是在咖啡店點餐。飯店櫃台要先說你有訂房。<br>2. Où est la gare ? (車站在哪裡？) [wrong_scenario_request] - feedback: 這是在問外面的路。現在是入住櫃台流程。 | 先說你有訂房。 |  |
| t2 | Très bien. À quel nom ? (櫃台人員在問訂房姓名。) | Au nom de Lee. (訂房姓名是 Lee。) | 1. Je voudrais partir. (我想離開。) [wrong_act_checkout] - feedback: 這像是在退房或離開。現在要提供訂房姓名。<br>2. C'est à droite. (在右邊。) [wrong_scenario_response] - feedback: 這是在回答方向。櫃台問的是訂房姓名。 | 用 Au nom de 加姓氏就可以。 | Au nom de...<br>飯店詢問訂房姓名時，可以用 Au nom de 加姓名回答。<br>Au nom de Lee. = 訂房姓名是 Lee。<br>C'est au nom de Lee. = 是用 Lee 的名字訂的。 |
| t3 | J'ai trouvé votre réservation. Une nuit, c'est bien ça ? (櫃台找到訂房，並確認住一晚。) | Oui, c'est bien ça. (對，沒錯。) | 1. Je voudrais un café. (我想要一杯咖啡。) [wrong_scenario_request] - feedback: 這不是咖啡店。櫃台正在確認你的訂房。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕協助。資料正確時要確認。 | 資料正確時，用 Oui 簡短確認。 |  |
| t4 | Voici votre clé. Votre chambre est au troisième étage. (櫃台給你鑰匙，並告訴你房間在三樓。) | Merci. (謝謝。) | 1. Au nom de Lee. (訂房姓名是 Lee。) [repeated_prior_answer] - feedback: 你已經提供姓名了。現在櫃台正在給你鑰匙。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個請求。先把入住流程收尾。 | 拿到鑰匙後，用簡短謝謝收尾。 |  |

---

## a1:fr:travel_restroom_directions - Demander les toilettes

- Level: A1
- Language: French (fr)
- Scenario ID: travel_restroom_directions
- Setting: Lieu public
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在公共場所，需要找到洗手間。先禮貌開口，再聽懂簡單方向。

### Clean Dialogue Path

- 你: Excusez-moi. (不好意思。)
- 工作人員: Oui, je vous écoute. (工作人員在表示可以聽你說。)
- 你: Où sont les toilettes, s'il vous plaît ? (請問洗手間在哪裡？)
- 工作人員: Tout droit, puis à droite. (直走，然後在右邊。)
- 你: À droite ? (在右邊嗎？)
- 工作人員: Oui, à droite. (工作人員確認是在右邊。)
- 你: Merci. (謝謝。)
- 工作人員: Avec plaisir. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oui, je vous écoute. (工作人員在表示可以聽你說。) | Où sont les toilettes, s'il vous plaît ? (請問洗手間在哪裡？) | 1. Je voudrais un café. (我想要一杯咖啡。) [wrong_scenario_request] - feedback: 這是在點咖啡。現在你需要問位置。<br>2. C'est combien ? (多少錢？) [wrong_scenario_request] - feedback: 這是在問價格。此處要問洗手間在哪裡。 | 問洗手間在哪裡。法語常用 les toilettes。 |  |
| t2 | Tout droit, puis à droite. (直走，然後在右邊。) | À droite ? (在右邊嗎？) | 1. Au nom de Lee. (訂房姓名是 Lee。) [wrong_scenario_response] - feedback: 這是在飯店櫃台提供姓名。現在你是在確認方向。<br>2. Ça va. (我還好。) [wrong_act_personal_status] - feedback: 這是在說自己的狀態，不是在確認方向。 | 聽兩個方向詞：tout droit 是直走，à droite 是在右邊。 | Tout droit / à droite<br>tout droit 表示直走，à droite 表示在右邊。<br>Tout droit. = 直走。<br>À droite. = 在右邊。 |
| t3 | Oui, à droite. (工作人員確認是在右邊。) | Merci. (謝謝。) | 1. À droite ? (在右邊嗎？) [repeated_prior_answer] - feedback: 對方已經確認方向了。現在可以道謝。<br>2. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕協助。你已經得到方向，應該禮貌收尾。 | 方向已經確認，接著說謝謝。 |  |

---

## a1:fr:travel_station_directions - Demander la sortie

- Level: A1
- Language: French (fr)
- Scenario ID: travel_station_directions
- Setting: Station de métro
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在法語地鐵站。用短句問出口，聽懂直走和右轉。

### Clean Dialogue Path

- agent: Oui, je vous écoute. (好的，我在聽。)
- voyageur: Excusez-moi, où est la sortie deux ? (不好意思，二號出口在哪裡？)
- agent: Allez tout droit, puis tournez à droite. (直走，然後右轉。)
- voyageur: Tout droit, puis à droite. (直走，然後右邊。)
- agent: Oui. Vous verrez le panneau sortie deux. (對。您會看到二號出口的標示。)
- voyageur: Sortie deux, merci. (二號出口，謝謝。)
- agent: C'est tout près. (很近。)
- voyageur: Merci beaucoup. (非常謝謝。)
- agent: Je vous en prie. (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Oui, je vous écoute. (好的，我在聽。) | Excusez-moi, où est la sortie deux ? (不好意思，二號出口在哪裡？) | 1. Un taxi pour l'hôtel, s'il vous plaît. (請給我一台去飯店的計程車。) [wrong_transport_goal] - feedback: 這是在叫計程車。現在目標是問車站出口。<br>2. Je paie par carte. (我用卡付款。) [wrong_scenario_payment] - feedback: 這是付款回答，不是問路。 | 對方願意幫忙。直接問二號出口在哪裡。 |  |
| t2 | Allez tout droit, puis tournez à droite. (直走，然後右轉。) | Tout droit, puis à droite. (直走，然後右邊。) | 1. À gauche. (左邊。) [wrong_direction] - feedback: 對方說的是 à droite，右邊，不是 à gauche。<br>2. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這是在問洗手間。現在要確認出口方向。 | tout droit 是直走，à droite 是右邊。 | tout droit / à droite<br>tout droit 表示直走；à droite 表示右邊。<br>Allez tout droit. = 直走。<br>Tournez à droite. = 右轉。 |
| t3 | Oui. Vous verrez le panneau sortie deux. (對。您會看到二號出口的標示。) | Sortie deux, merci. (二號出口，謝謝。) | 1. Sortie cinq, merci. (五號出口，謝謝。) [wrong_exit_number] - feedback: 對方說的是 sortie deux，不是 sortie cinq。<br>2. Je prends une soupe. (我點一份湯。) [wrong_scenario_order] - feedback: 這是餐廳點餐，不是車站問路。 | 出口號碼是 deux。用短句確認。 |  |
| t4 | C'est tout près. (很近。) | Merci beaucoup. (非常謝謝。) | 1. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳。問路結束時道謝就好。<br>2. J'ai une réservation. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店入住句。現在是在車站問路。 | 方向已經清楚。用 Merci beaucoup 結束。 |  |

---

## a1:fr:travel_taxi_destination - Donner une destination en taxi

- Level: A1
- Language: French (fr)
- Scenario ID: travel_taxi_destination
- Setting: Taxi
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在計程車上。用簡短法語說目的地、確認地點，並聽懂大約時間。

### Clean Dialogue Path

- chauffeur: Bonjour, on va où ? (您好，我們要去哪裡？)
- passager: À l'hôtel Central, s'il vous plaît. (到中央飯店，謝謝。)
- chauffeur: À l'hôtel Central, c'est bien ça ? (到中央飯店，對嗎？)
- passager: Oui, à l'hôtel Central. (對，到中央飯店。)
- chauffeur: Il y en a pour dix minutes. (大約十分鐘。)
- passager: Très bien, merci. (好的，謝謝。)
- chauffeur: On est arrivés. (我們到了。)
- passager: Merci beaucoup. (非常謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour, on va où ? (您好，我們要去哪裡？) | À l'hôtel Central, s'il vous plaît. (到中央飯店，謝謝。) | 1. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問洗手間方向。司機現在需要目的地。<br>2. Un billet, s'il vous plaît. (一張票，謝謝。) [wrong_scenario_ticket] - feedback: 這是在買票，不是在計程車上說目的地。 | 司機在問目的地。直接說 À l'hôtel...。 |  |
| t2 | À l'hôtel Central, c'est bien ça ? (到中央飯店，對嗎？) | Oui, à l'hôtel Central. (對，到中央飯店。) | 1. Non, merci. (不用了，謝謝。) [wrong_act_refusal] - feedback: 這像是在拒絕。地點正確時要確認目的地。<br>2. Je prends un café. (我要一杯咖啡。) [wrong_scenario_order] - feedback: 這是點咖啡。現在是在確認計程車目的地。 | 司機在確認目的地。正確時，用 Oui 確認。 | À l'hôtel... / Oui, à...<br>搭計程車說目的地時，可用 à 加地點；確認時用 Oui, à...<br>À l'hôtel Central, s'il vous plaît. = 到中央飯店，謝謝。<br>Oui, à l'hôtel Central. = 對，到中央飯店。 |
| t3 | Il y en a pour dix minutes. (大約十分鐘。) | Très bien, merci. (好的，謝謝。) | 1. À la gare, s'il vous plaît. (到車站，謝謝。) [changed_destination] - feedback: 你已經確認飯店了。現在只要回應時間資訊。<br>2. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_bill] - feedback: 這是餐廳結帳句。司機剛剛說的是車程時間。 | 司機說大約十分鐘。簡短回應就好。 |  |
| t4 | On est arrivés. (我們到了。) | Merci beaucoup. (非常謝謝。) | 1. Quel est le mot de passe wifi ? (wifi 密碼是什麼？) [wrong_scenario_wifi] - feedback: 這是問 wifi。計程車已經到目的地，現在道謝即可。<br>2. J'ai une réservation. (我有訂房。) [wrong_scenario_hotel] - feedback: 這是飯店櫃台句。現在是在計程車上結束行程。 | 已經到目的地。用 Merci beaucoup 結束。 |  |

---

## a1:fr:travel_ticket_buying - Acheter un billet

- Level: A1
- Language: French (fr)
- Scenario ID: travel_ticket_buying
- Setting: Guichet de gare
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在火車站售票窗口買一張簡單車票。選一句自然、簡短的法語。

### Clean Dialogue Path

- agent: Bonjour. Vous allez où ? (您好。您要去哪裡？)
- voyageur: Un billet pour Lyon, s'il vous plaît. (請給我一張去里昂的票。)
- agent: Un billet pour Lyon ? (一張去里昂的票嗎？)
- voyageur: Oui, c'est ça. (對，就是這樣。)
- agent: Ça fait dix euros. Vous payez par carte ? (十歐元。您用卡付款嗎？)
- voyageur: Oui, par carte. (對，用卡。)
- agent: Voilà. Quai deux. (給您。二號月台。)
- voyageur: Merci. (謝謝。)
- agent: Bon voyage. (旅途愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Vous allez où ? (您好。您要去哪裡？) | Un billet pour Lyon, s'il vous plaît. (請給我一張去里昂的票。) | 1. Où sont les toilettes ? (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這是在問路，不是在買車票。<br>2. Un café, s'il vous plaît. (請給我一杯咖啡。) [wrong_scenario_food_order] - feedback: 這是在點咖啡，不是在售票窗口買票。 | 售票員問目的地。說你要一張去 Lyon 的票。 |  |
| t2 | Un billet pour Lyon ? (一張去里昂的票嗎？) | Oui, c'est ça. (對，就是這樣。) | 1. Non, merci. (不用，謝謝。) [cancel_when_confirming] - feedback: 你正在確認買票。這樣會像取消交易。<br>2. Deux billets pour Lyon. (兩張去里昂的票。) [wrong_quantity] - feedback: 你只需要一張票，不要改成兩張。 | 售票員確認目的地和數量。用簡短句確認。 | Un billet pour...<br>在法語售票窗口可用 Un billet pour Lyon, s'il vous plaît 表示一張去某地的票。<br>Un billet pour Lyon, s'il vous plaît. = 請給我一張去里昂的票。<br>Oui, c'est ça. = 對，就是這樣。 |
| t3 | Ça fait dix euros. Vous payez par carte ? (十歐元。您用卡付款嗎？) | Oui, par carte. (對，用卡。) | 1. Je viens de Taipei. (我來自台北。) [wrong_scenario_self_intro] - feedback: 這是自我介紹，不是回答付款方式。<br>2. L'addition, s'il vous plaît. (請結帳。) [wrong_scenario_restaurant_bill] - feedback: 這像餐廳結帳，不是售票窗口付款。 | 售票員問付款方式。回答用卡。 |  |
| t4 | Voilà. Quai deux. (給您。二號月台。) | Merci. (謝謝。) | 1. Vous pouvez répéter ? (您可以再說一次嗎？) [repair_after_clear_handover] - feedback: 如果已理解票和月台，這裡直接道謝即可。<br>2. Moi aussi. (我也是。) [wrong_scenario_self_intro] - feedback: 這是第一次見面的回應，不是買票結尾。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
