# A1 Japanese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:ja:convenience_payment_card_cash - コンビニで支払う

- Level: A1
- Language: Japanese (ja)
- Scenario ID: convenience_payment_card_cash
- Setting: コンビニのレジ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本便利商店櫃台。聽店員問付款方式，選一句自然接得上的日文。

### Clean Dialogue Path

- 店員: お会計は520円です。お支払いは現金ですか、カードですか。 (總共五百二十日圓。您要付現金還是刷卡？)
- あなた: カードでお願いします。 (麻煩刷卡。)
- 店員: こちらにタッチしてください。 (請感應這裡。)
- あなた: はい。 (好。)
- 店員: 袋はご利用ですか。 (需要袋子嗎？)
- あなた: 袋はいりません。 (不需要袋子。)
- 店員: レシートです。ありがとうございました。 (這是收據。謝謝您。)
- あなた: ありがとうございます。 (謝謝。)
- 店員: またお越しください。 (歡迎再次光臨。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | お会計は520円です。お支払いは現金ですか、カードですか。 (總共五百二十日圓。您要付現金還是刷卡？) | カードでお願いします。 (麻煩刷卡。) | 1. おにぎりをください。 (請給我飯糰。) [wrong_scenario_ordering] - feedback: 這句是在點東西。現在商品已經結帳了，店員在問付款方式。<br>2. トイレはどこですか。 (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問方向。現在要回答現金或卡片。<br>3. 現金でお願いします。 (麻煩付現金。) [wrong_payment_method] - feedback: 這也是付款方式，但這一輪要練習刷卡時的回答。 | 店員在問付款方式。要刷卡時，可以說「カードでお願いします」。 | カード / 現金<br>「カード」是卡片，「現金」是現金。用「〜でお願いします」可以自然回答付款方式。<br>カードでお願いします。 = 麻煩刷卡。<br>現金でお願いします。 = 麻煩付現金。 |
| t2 | こちらにタッチしてください。 (請感應這裡。) | はい。 (好。) | 1. カードでお願いします。 (麻煩刷卡。) [repeated_prior_answer] - feedback: 付款方式已經說了。現在店員在告訴你感應卡片。<br>2. いくらですか。 (多少錢？) [wrong_act_price_question] - feedback: 價格剛剛已經說了。這裡先照店員指示付款。 | 店員要你把卡片感應在這裡。簡短回答「はい」就可以。 |  |
| t3 | 袋はご利用ですか。 (需要袋子嗎？) | 袋はいりません。 (不需要袋子。) | 1. カードでお願いします。 (麻煩刷卡。) [repeated_prior_answer] - feedback: 刷卡已經完成了。現在店員在問要不要袋子。<br>2. はい、ここです。 (是的，在這裡。) [wrong_act_location_answer] - feedback: 這不像是在回答要不要袋子。不要袋子時說「いりません」。 | 袋是袋子。不要袋子時，可以說「袋はいりません」。 |  |
| t4 | レシートです。ありがとうございました。 (這是收據。謝謝您。) | ありがとうございます。 (謝謝。) | 1. おにぎりをください。 (請給我飯糰。) [wrong_scenario_ordering] - feedback: 結帳已經結束了。這裡用謝謝收尾比較自然。<br>2. 袋はいりません。 (不需要袋子。) [repeated_prior_answer] - feedback: 袋子的問題已經回答過了。現在店員在結束交易。 | 交易結束了。用簡短的謝謝收尾就好。 |  |

---

## a1:ja:core_repair_repeat_slowly - もう一度お願いする

- Level: A1
- Language: Japanese (ja)
- Scenario ID: core_repair_repeat_slowly
- Setting: カフェのレジ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台沒聽清楚問題。選自然、簡短的日文修復句。

### Clean Dialogue Path

- 店員: 店内ですか、お持ち帰りですか。 (內用嗎？還是外帶？)
- あなた: すみません、もう一度お願いします。 (不好意思，請再說一次。)
- 店員: 店内ですか、お持ち帰りですか。 (內用嗎？還是外帶？)
- あなた: ゆっくりお願いします。 (請慢一點。)
- 店員: 店内ですか。お持ち帰りですか。 (內用嗎？外帶嗎？)
- あなた: 持ち帰りでお願いします。ありがとうございます。 (外帶，麻煩你。謝謝。)
- 店員: はい、大丈夫です。 (好的，沒問題。)
- あなた: ありがとうございます。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 店内ですか、お持ち帰りですか。 (內用嗎？還是外帶？) | すみません、もう一度お願いします。 (不好意思，請再說一次。) | 1. はい、そうです。 (是的，沒錯。) [blind_confirmation_before_understanding] - feedback: 你還沒聽懂，先不要盲目確認。<br>2. ありがとうございます。さようなら。 (謝謝。再見。) [closing_before_understanding] - feedback: 還沒完成互動，現在需要請對方重複。 | 你沒聽清楚。先請對方再說一次。 |  |
| t2 | 店内ですか、お持ち帰りですか。 (內用嗎？還是外帶？) | ゆっくりお願いします。 (請慢一點。) | 1. 中央駅まで一枚ください。 (請給我一張到中央車站的票。) [travel_answer_to_repair_moment] - feedback: 這是買票句，不是請對方說慢一點。<br>2. コーヒーを一つください。 (請給我一杯咖啡。) [guessing_order_before_understanding] - feedback: 你還沒聽懂問題，先不要猜著點餐。 | 還是太快。請對方說慢一點。 | ゆっくりお願いします<br>速くて聞き取れない時に、短く丁寧にお願いする表現です。<br>ゆっくりお願いします。 = 請慢一點。 |
| t3 | 店内ですか。お持ち帰りですか。 (內用嗎？外帶嗎？) | 持ち帰りでお願いします。ありがとうございます。 (外帶，麻煩你。謝謝。) | 1. もう一度お願いします。 (請再說一次。) [repair_repeated_after_prompt_clear] - feedback: 這次問題已經清楚，可以回答了。<br>2. はじめまして。 (初次見面。) [social_phrase_for_service_question] - feedback: 這是初次見面語，不是在回答內用或外帶。 | 現在問題清楚了。選一個簡短回答。 |  |
| t4 | はい、大丈夫です。 (好的，沒問題。) | ありがとうございます。 (謝謝。) | 1. もう一度お願いします。 (請再說一次。) [repair_after_understood] - feedback: 問題已經解決了。這裡簡短道謝即可。<br>2. 切符を一枚ください。 (請給我一張票。) [wrong_scenario_ticket] - feedback: 這是買票用語，不是櫃台收尾。 | 對方已經理解你的回答。最後道謝。 |  |

---

## a1:ja:daily_meet_friend - 友だちと会う

- Level: A1
- Language: Japanese (ja)
- Scenario ID: daily_meet_friend
- Setting: カフェの入口
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店入口和朋友碰面。選自然、簡短的日文回應。

### Clean Dialogue Path

- 友だち: あ、来たね。 (啊，你來了。)
- あなた: こんにちは。会えてうれしい。 (你好。很高興見到你。)
- 友だち: 映画に行くんだよね。 (我們是要去看電影，對吧？)
- あなた: うん、そうだよ。 (嗯，沒錯。)
- 友だち: もう行ける？ (可以走了嗎？)
- あなた: うん、行こう。 (嗯，走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | あ、来たね。 (啊，你來了。) | こんにちは。会えてうれしい。 (你好。很高興見到你。) | 1. メニューをください。 (請給我菜單。) [service_request_to_friend] - feedback: 這像是在跟店員說話，不是跟朋友打招呼。<br>2. これはいくらですか。 (這個多少錢？) [shopping_price_in_friend_meeting] - feedback: 這是購物問題。現在是在和朋友碰面。 | 朋友用輕鬆語氣打招呼。回一句嗨和很高興見到你。 |  |
| t2 | 映画に行くんだよね。 (我們是要去看電影，對吧？) | うん、そうだよ。 (嗯，沒錯。) | 1. カードで払います。 (我刷卡付款。) [payment_answer_to_plan_check] - feedback: 這是付款回答，不是在確認朋友的計畫。<br>2. 駅はどこですか。 (車站在哪裡？) [directions_instead_of_plan_confirmation] - feedback: 這是在問路。朋友問的是今天的計畫。 | 朋友在確認計畫。用そうだよ簡短回答。 | そうだよ<br>友だちとの会話で、予定を短く確認する自然な表現です。<br>うん、そうだよ。 = 嗯，沒錯。 |
| t3 | もう行ける？ (可以走了嗎？) | うん、行こう。 (嗯，走吧。) | 1. はじめまして、よろしくお願いします。 (初次見面，請多指教。) [first_meeting_greeting_for_known_friend] - feedback: 這像第一次見面。這裡是已約好的朋友。<br>2. サンドイッチをください。 (請給我三明治。) [food_order_in_friend_meeting] - feedback: 這是在點餐，不是在回答準備好了。 | 朋友問你準備好了沒。 |  |

---

## a1:ja:daily_schedule_time - 会う時間を決める

- Level: A1
- Language: Japanese (ja)
- Scenario ID: daily_schedule_time
- Setting: 友だちとの予定
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在和日本朋友約時間。聽對方問什麼，選一句自然接得上的日文。

### Clean Dialogue Path

- 友だち: 明日、何時に会う？ (明天幾點見？)
- あなた: 3時はどう？ (三點怎麼樣？)
- 友だち: 3時で大丈夫。駅でいい？ (三點可以。在車站可以嗎？)
- あなた: うん、駅で。 (嗯，在車站。)
- 友だち: じゃあ、明日3時に駅ね。 (那明天三點在車站喔。)
- あなた: うん、また明日。 (嗯，明天見。)
- 友だち: また明日。 (明天見。)
- あなた: また明日。 (明天見。)
- 友だち: 予定が決まりました。 (行程約好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 明日、何時に会う？ (明天幾點見？) | 3時はどう？ (三點怎麼樣？) | 1. 駅で会おう。 (在車站見吧。) [location_answer_when_time_requested] - feedback: 這是在說地點。對方現在問的是幾點。<br>2. 今日は行けない。 (今天不能去。) [wrong_act_refusal] - feedback: 這像是在拒絕。這裡要先回答或提議時間。<br>3. 明日です。 (是明天。) [wrong_day_time_answer] - feedback: 日期已經知道是明天。現在要說幾點。 | 對方在問時間。可以用「3時はどう？」提議三點。 | 何時 / 3時<br>「何時」是幾點。提議時間時，可以說「3時はどう？」。<br>何時に会う？ = 幾點見？<br>3時はどう？ = 三點怎麼樣？ |
| t2 | 3時で大丈夫。駅でいい？ (三點可以。在車站可以嗎？) | うん、駅で。 (嗯，在車站。) | 1. 3時はどう？ (三點怎麼樣？) [repeated_prior_answer] - feedback: 三點已經確定了。現在是在確認地點。<br>2. いいえ、現金です。 (不是，是現金。) [wrong_scenario_payment] - feedback: 這是付款場景的回答。現在是在約見面時間和地點。 | 時間確定了，對方又確認地點。可以簡短回答可以。 |  |
| t3 | じゃあ、明日3時に駅ね。 (那明天三點在車站喔。) | うん、また明日。 (嗯，明天見。) | 1. 駅で会おう。 (在車站見吧。) [repeated_prior_answer] - feedback: 地點已經確認了。現在用一句明天見收尾就好。<br>2. 行けません。 (不能去。) [wrong_act_refusal] - feedback: 這樣會突然取消。約定沒問題時，簡短確認即可。 | 對方在總結約定。用「また明日」自然收尾。 |  |
| t4 | また明日。 (明天見。) | また明日。 (明天見。) | 1. カードでお願いします。 (麻煩刷卡。) [wrong_scenario_payment] - feedback: 這是付款回答。這裡是朋友之間約好時間後的道別。<br>2. 明日です。 (是明天。) [overly_redundant_answer] - feedback: 時間和日期都確定了。直接說明天見比較自然。 | 對話結束了。你可以簡短回應。 |  |

---

## a1:ja:daily_self_intro - 自己紹介をする

- Level: A1
- Language: Japanese (ja)
- Scenario ID: daily_self_intro
- Setting: 語学交流のテーブル
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交流活動第一次見到新朋友。選自然、簡短的日文回應。

### Clean Dialogue Path

- 新しい友だち: はじめまして。まやです。お名前は？ (初次見面。我是 Maya。你叫什麼名字？)
- あなた: はじめまして。アレックスです。 (初次見面。我是 Alex。)
- 新しい友だち: 日本語を勉強していますか。 (你在學日文嗎？)
- あなた: はい、日本語を勉強しています。 (是的，我在學日文。)
- 新しい友だち: いいですね。よろしくお願いします。 (很好呢。請多指教。)
- あなた: こちらこそ、よろしくお願いします。 (我也請你多指教。)
- 新しい友だち: では、よろしくお願いします。 (那就請多指教。)
- あなた: はい、お願いします。 (好的，麻煩你。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | はじめまして。まやです。お名前は？ (初次見面。我是 Maya。你叫什麼名字？) | はじめまして。アレックスです。 (初次見面。我是 Alex。) | 1. 切符を一枚ください。 (請給我一張票。) [travel_service_phrase_in_self_intro] - feedback: 這是在買票，不是在介紹名字。<br>2. 電話番号はこれです。 (這是我的電話號碼。) [private_contact_detail] - feedback: 自我介紹不需要提供私人聯絡資料。 | 對方先說名字。用です簡短介紹自己。 |  |
| t2 | 日本語を勉強していますか。 (你在學日文嗎？) | はい、日本語を勉強しています。 (是的，我在學日文。) | 1. アレックスです。 (我是 Alex。) [repeat_name_after_new_question] - feedback: 你已經說過名字；現在要回答是不是在學日文。<br>2. もう一度お願いします。 (請再說一次。) [repair_when_understood] - feedback: 這是聽不懂時用的修復句；這裡可以直接回答。 | 對方問你是不是在學日文。用はい簡短回答。 | 日本語を勉強しています<br>初対面で、勉強している言語を短く伝える自然な表現です。<br>はい、日本語を勉強しています。 = 是的，我在學日文。 |
| t3 | いいですね。よろしくお願いします。 (很好呢。請多指教。) | こちらこそ、よろしくお願いします。 (我也請你多指教。) | 1. コーヒーを一つください。 (請給我一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應初次見面。<br>2. いつもお世話になっております。 (一直承蒙照顧。) [overformal_business_greeting] - feedback: 這太像商務信件或公司場合，不適合語言交流桌。 | 對方友善收尾。用こちらこそ簡短回應。 |  |
| t4 | では、よろしくお願いします。 (那就請多指教。) | はい、お願いします。 (好的，麻煩你。) | 1. コーヒーを一つください。 (請給我一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應初次見面。<br>2. いつもお世話になっております。 (一直承蒙照顧。) [overformal_business_greeting] - feedback: 這太像商務信件或公司場合，不適合語言交流桌。 | 對方準備開始活動。用「はい、お願いします」自然回應。 |  |

---

## a1:ja:digital_battery_charging - スマホを充電する

- Level: A1
- Language: Japanese (ja)
- Scenario ID: digital_battery_charging
- Setting: カフェのカウンター
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本咖啡店想幫手機充電。選自然、簡短的日文。

### Clean Dialogue Path

- スタッフ: 何かお困りですか。 (有什麼需要幫忙嗎？)
- あなた: すみません、スマホを充電してもいいですか。 (不好意思，可以充手機嗎？)
- スタッフ: はい、大丈夫ですよ。 (可以，沒問題。)
- あなた: コンセントはどこですか。 (插座在哪裡？)
- スタッフ: 左のテーブルの下にあります。 (在左邊桌子下面。)
- あなた: 左のテーブルの下ですね。 (左邊桌子下面對吧。)
- スタッフ: はい、そこを使ってください。 (對，請用那裡。)
- あなた: ありがとうございます。 (謝謝。)
- スタッフ: 充電の許可を聞き、場所も確認しました。 (你詢問了充電許可，也確認了位置。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何かお困りですか。 (有什麼需要幫忙嗎？) | すみません、スマホを充電してもいいですか。 (不好意思，可以充手機嗎？) | 1. Wi-Fiのパスワードを教えてください。 (請告訴我Wi-Fi密碼。) [wifi_question_instead_of_charging_permission] - feedback: 這是在問Wi-Fi。現在要先問能不能充手機。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_instead_of_charging_permission] - feedback: 這是在點咖啡，不是詢問充電。 | 先用自然的日文問能不能充手機。 | 充電してもいいですか<br>問可不可以做某事時，可以用「てもいいですか」。<br>すみません、スマホを充電してもいいですか。 = 不好意思，可以充手機嗎？ |
| t2 | はい、大丈夫ですよ。 (可以，沒問題。) | コンセントはどこですか。 (插座在哪裡？) | 1. スマホを充電してもいいですか。 (可以充手機嗎？) [repeat_permission_after_permission_granted] - feedback: 對方已經同意了。現在要問插座位置。<br>2. お会計お願いします。 (我要結帳。) [payment_phrase_instead_of_outlet_location] - feedback: 這是在付款。現在要問插座在哪裡。 | 對方同意了。問插座在哪裡。 | コンセントはどこですか<br>在日本日常說插座常用「コンセント」。<br>コンセントはどこですか。 = 插座在哪裡？ |
| t3 | 左のテーブルの下にあります。 (在左邊桌子下面。) | 左のテーブルの下ですね。 (左邊桌子下面對吧。) | 1. トイレはどこですか。 (廁所在哪裡？) [restroom_question_instead_of_location_confirmation] - feedback: 這是在問廁所。現在要確認插座位置。<br>2. 切符を一枚ください。 (請給我一張票。) [ticket_request_instead_of_location_confirmation] - feedback: 這是買票句，不符合充電情境。 | 確認你聽到的位置。 |  |
| t4 | はい、そこを使ってください。 (對，請用那裡。) | ありがとうございます。 (謝謝。) | 1. Wi-Fiのパスワードを教えてください。 (請告訴我Wi-Fi密碼。) [wifi_question_after_charging_help] - feedback: 充電位置已確認。現在簡短道謝比較自然。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_after_charging_help] - feedback: 這是在點咖啡。得到協助後先道謝。 | 對方確認了。簡短道謝即可。 |  |

---

## a1:ja:digital_wifi_connect - Wi-Fiにつなぐ

- Level: A1
- Language: Japanese (ja)
- Scenario ID: digital_wifi_connect
- Setting: カフェのカウンター
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本咖啡店或飯店櫃台，需要連Wi-Fi。選自然、簡短的日文。

### Clean Dialogue Path

- スタッフ: 何かお困りですか。 (有什麼需要幫忙嗎？)
- あなた: Wi-Fiのパスワードを教えてください。 (請告訴我Wi-Fi密碼。)
- スタッフ: パスワードは cafe123 です。 (密碼是 cafe123。)
- あなた: ありがとうございます。やってみます。 (謝謝，我試試看。)
- スタッフ: つながりましたか。 (連上了嗎？)
- あなた: すみません、つながりません。 (不好意思，連不上。)
- スタッフ: もう一度お願いします。 (請再試一次。)
- あなた: ありがとうございます。 (謝謝。)
- スタッフ: Wi-Fiのパスワードを聞き、問題も伝えました。 (你問了Wi-Fi密碼，也說明了問題。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何かお困りですか。 (有什麼需要幫忙嗎？) | Wi-Fiのパスワードを教えてください。 (請告訴我Wi-Fi密碼。) | 1. お会計お願いします。 (我要結帳。) [bill_payment_instead_of_wifi] - feedback: 這是在付款或結帳。現在要問Wi-Fi密碼。<br>2. トイレはどこですか。 (廁所在哪裡？) [restroom_question_instead_of_wifi] - feedback: 這是在問廁所。現在的目標是Wi-Fi。 | 你需要Wi-Fi密碼。自然地請對方告訴你。 | 教えてください<br>請對方告訴你資訊時，可以用「教えてください」。<br>Wi-Fiのパスワードを教えてください。 = 請告訴我Wi-Fi密碼。 |
| t2 | パスワードは cafe123 です。 (密碼是 cafe123。) | ありがとうございます。やってみます。 (謝謝，我試試看。) | 1. パスワードを教えてください。 (請告訴我密碼。) [repeat_password_question_after_answer] - feedback: 對方已經給了密碼。現在應該表示會試試看。<br>2. コーヒーをください。 (請給我咖啡。) [coffee_order_after_password] - feedback: 這是在點咖啡，不是回應Wi-Fi密碼。 | 你拿到密碼了。先說謝謝並試試看。 |  |
| t3 | つながりましたか。 (連上了嗎？) | すみません、つながりません。 (不好意思，連不上。) | 1. はい、つながりました。 (是的，連上了。) [success_answer_when_failure_expected] - feedback: 情境是連不上。需要說問題，而不是說成功。<br>2. 充電できますか。 (可以充電嗎？) [charging_question_instead_of_connection_failure] - feedback: 這是在問充電。現在要說Wi-Fi連不上。 | 你的手機連不上。用簡短句說問題。 | つながりません<br>說網路連不上時，可以說「つながりません」。<br>すみません、つながりません。 = 不好意思，連不上。 |
| t4 | もう一度お願いします。 (請再試一次。) | ありがとうございます。 (謝謝。) | 1. はい、つながりました。 (是的，連上了。) [unsupported_success_after_retry_instruction] - feedback: 對方只是叫你再試一次。先道謝比較自然。<br>2. お会計お願いします。 (我要結帳。) [payment_phrase_after_wifi_help] - feedback: 這是付款句。Wi-Fi協助後簡短道謝即可。 | 對方給簡單建議。道謝即可。 |  |

---

## a1:ja:food_bill_payment - 食事の会計

- Level: A1
- Language: Japanese (ja)
- Scenario ID: food_bill_payment
- Setting: カジュアルなカフェ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店用餐後要結帳。選自然、簡短的日文。

### Clean Dialogue Path

- あなた: お会計をお願いします。 (麻煩結帳。)
- 店員: カードですか、現金ですか。 (刷卡還是現金？)
- あなた: カードでお願いします。 (刷卡，麻煩你。)
- 店員: ありがとうございます。 (謝謝。)
- あなた: ごちそうさまでした。 (謝謝招待。)
- 店員: 会計が終わりました。 (結帳完成了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | お会計をお願いします。 (麻煩結帳。) | お会計をお願いします。 (麻煩結帳。) | 1. コーヒーをもう一つください。 (請再給我一杯咖啡。) [ordering_more_when_payment_expected] - feedback: 這是在加點。現在目標是結帳。<br>2. これはいくらですか。 (這個多少錢？) [shop_price_in_restaurant] - feedback: 這像在店裡問商品價格，不是餐廳結帳。 | 餐廳或咖啡店要結帳時常用お会計をお願いします。 | お会計をお願いします<br>食事のあとに会計をお願いする丁寧で自然な表現です。<br>お会計をお願いします。 = 麻煩結帳。 |
| t2 | カードですか、現金ですか。 (刷卡還是現金？) | カードでお願いします。 (刷卡，麻煩你。) | 1. レシートはいりません。 (不用收據。) [receipt_answer_to_payment_method] - feedback: 這是在回答收據問題。現在店員問的是刷卡或現金。<br>2. 店内でお願いします。 (內用，麻煩你。) [dine_in_answer_at_payment] - feedback: 這是點餐時的內用回答。現在是在付款。 | 店員問付款方式。選一種回答。 |  |
| t4 | ありがとうございます。 (謝謝。) | ごちそうさまでした。 (謝謝招待。) | 1. 駅はどこですか。 (車站在哪裡？) [directions_after_payment] - feedback: 這突然換成問路。付款結束時簡短道謝即可。<br>2. サンドイッチをください。 (請給我三明治。) [new_order_after_payment_close] - feedback: 這像重新點餐，不是結帳收尾。 | 付款完成。用謝謝收尾即可。 |  |

---

## a1:ja:food_coffee_ordering - カフェで注文する

- Level: A1
- Language: Japanese (ja)
- Scenario ID: food_coffee_ordering
- Setting: カフェのレジ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本咖啡店櫃台。聽店員問什麼，選一句自然接得上的日文。

### Clean Dialogue Path

- 店員: いらっしゃいませ。ご注文をどうぞ。 (歡迎光臨。請點餐。)
- あなた: アイスコーヒーをください。 (請給我冰咖啡。)
- 店員: 店内でお召し上がりですか、お持ち帰りですか。 (內用還是外帶？)
- あなた: お持ち帰りでお願いします。 (麻煩外帶。)
- 店員: アイスコーヒーをお持ち帰りで、よろしいですか。 (冰咖啡外帶，可以嗎？)
- あなた: はい、お願いします。 (好的，麻煩了。)
- 店員: お会計は300円です。こちらでお待ちください。 (總共三百日圓。請在這邊稍等。)
- あなた: はい。 (好。)
- 店員: お待たせしました。アイスコーヒーです。 (久等了。這是您的冰咖啡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いらっしゃいませ。ご注文をどうぞ。 (歡迎光臨。請點餐。) | アイスコーヒーをください。 (請給我冰咖啡。) | 1. トイレはどこですか。 (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員等你點飲料。<br>2. 大丈夫です。 (不用了／沒關係。) [wrong_act_refusal] - feedback: 這樣像是在說不用點。要點飲料時，用「〜をください」。 | 店員在請你點餐。想要某個飲料時，可以用「〜をください」。 |  |
| t2 | 店内でお召し上がりですか、お持ち帰りですか。 (內用還是外帶？) | お持ち帰りでお願いします。 (麻煩外帶。) | 1. アイスコーヒーをください。 (請給我冰咖啡。) [repeated_prior_answer] - feedback: 飲料已經點了。這裡是在問內用還是外帶。<br>2. はい、そうです。 (是的，沒錯。) [wrong_act_confirmation] - feedback: 這句是確認用的，但店員給你兩個選項，要選一個。 | 店内是內用，お持ち帰り是外帶。選一個回答就好。 | 店内 / お持ち帰り<br>「店内」是內用，「お持ち帰り」是外帶。<br>店内 = 內用<br>お持ち帰り = 外帶 |
| t3 | アイスコーヒーをお持ち帰りで、よろしいですか。 (冰咖啡外帶，可以嗎？) | はい、お願いします。 (好的，麻煩了。) | 1. いいえ、大丈夫です。 (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是在取消。訂單沒問題時，可以說「はい、お願いします」。<br>2. トイレはどこですか。 (洗手間在哪裡？) [off_topic_statement] - feedback: 先確認飲料。問洗手間是另一個場景。 | 店員在確認訂單。沒問題時，用「はい、お願いします」。 |  |
| t4 | お会計は300円です。こちらでお待ちください。 (總共三百日圓。請在這邊稍等。) | はい。 (好。) | 1. 持ち帰りでお願いします。 (麻煩外帶。) [repeated_prior_answer] - feedback: 外帶剛剛已經說過了。現在是付款和等待。<br>2. アイスコーヒーをください。 (請給我冰咖啡。) [repeated_prior_answer] - feedback: 飲料已經點好了，現在接著付款或等待。 | 店員說價格，也請你在這邊等。簡短回答「はい」就可以。 |  |

---

## a1:ja:food_restaurant_ordering - レストランで注文する

- Level: A1
- Language: Japanese (ja)
- Scenario ID: food_restaurant_ordering
- Setting: カジュアルなレストラン
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本的簡單餐廳用餐。聽店員問什麼，選一句自然接得上的日文。

### Clean Dialogue Path

- 店員: いらっしゃいませ。お一人ですか。 (歡迎光臨。是一位嗎？)
- あなた: はい、一人です。 (是的，一位。)
- 店員: ご注文はお決まりですか。 (您決定要點什麼了嗎？)
- あなた: カレーをください。 (請給我咖哩。)
- 店員: カレーですね。 (是咖哩對吧？)
- あなた: はい、お願いします。 (是的，麻煩了。)
- 店員: ありがとうございます。少々お待ちください。 (謝謝，請稍等。)
- あなた: ありがとうございます。 (謝謝。)
- 店員: 注文が伝わりました。 (你的餐點已經傳達清楚了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いらっしゃいませ。お一人ですか。 (歡迎光臨。是一位嗎？) | はい、一人です。 (是的，一位。) | 1. お会計お願いします。 (我要結帳。) [bill_request_before_ordering] - feedback: 這是吃完後結帳。現在店員在確認人數。<br>2. コーヒーをください。 (請給我咖啡。) [order_when_party_size_requested] - feedback: 這是在點飲料。先回答人數比較自然。 | 店員在確認人數。可以短短回答一位。 | 一人です<br>「一人です」可以簡短回答用餐人數。服務場合加「お願いします」也自然。<br>一人です。 = 我一個人。<br>お願いします。 = 麻煩了。 |
| t2 | ご注文はお決まりですか。 (您決定要點什麼了嗎？) | カレーをください。 (請給我咖哩。) | 1. 水だけでいいです。 (只要水就好。) [no_meal_when_meal_order_expected] - feedback: 這不像是在點一份餐。這裡要點一個主餐。<br>2. 持ち帰りです。 (我要外帶。) [takeout_answer_in_dine_in_order] - feedback: 這是在說外帶。現在店員問的是要點什麼。<br>3. 二人です。 (兩位。) [party_size_answer_when_order_requested] - feedback: 人數已經確認了。現在要說餐點。 | 店員在問餐點。用「カレーをください」就能點一份。 | 〜をください<br>點一樣東西時，可以用「料理名 + をください」。<br>カレーをください。 = 請給我咖哩。 |
| t3 | カレーですね。 (是咖哩對吧？) | はい、お願いします。 (是的，麻煩了。) | 1. お会計お願いします。 (我要結帳。) [bill_request_before_order_ready] - feedback: 現在還在確認訂單，不是結帳。<br>2. コーヒーをください。 (請給我咖啡。) [changes_to_cafe_order] - feedback: 這會改成點咖啡。要確認剛才的咖哩。 | 店員在確認你的餐點。簡短說對就可以。 |  |
| t4 | ありがとうございます。少々お待ちください。 (謝謝，請稍等。) | ありがとうございます。 (謝謝。) | 1. 一人です。 (我一個人。) [repeated_party_size] - feedback: 人數已經說過了。現在用謝謝收尾即可。<br>2. カードでお願いします。 (麻煩刷卡。) [payment_answer_in_order_close] - feedback: 這是付款回答。現在只是店員確認餐點會準備。 | 點餐完成了。用一句謝謝收尾很自然。 |  |

---

## a1:ja:hotel_checkout - ホテルでチェックアウトする

- Level: A1
- Language: Japanese (ja)
- Scenario ID: hotel_checkout
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本飯店櫃台退房。選自然、簡短的日文。

### Clean Dialogue Path

- フロント: おはようございます。ご用件をどうぞ。 (早安，請問需要什麼？)
- あなた: チェックアウトをお願いします。 (麻煩辦理退房。)
- フロント: お部屋番号をお願いします。 (請問房號。)
- あなた: 305号室です。 (是305號房。)
- フロント: カードキーをお願いします。 (請給我房卡。)
- あなた: はい、どうぞ。 (好的，給你。)
- フロント: チェックアウトは完了です。こちらが領収書です。 (退房完成了。這是收據。)
- あなた: ありがとうございます。 (謝謝。)
- フロント: チェックアウトが完了しました。 (退房完成了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | おはようございます。ご用件をどうぞ。 (早安，請問需要什麼？) | チェックアウトをお願いします。 (麻煩辦理退房。) | 1. Wi-Fiのパスワードは何ですか。 (Wi-Fi密碼是什麼？) [wifi_question_instead_of_checkout] - feedback: 這是在問Wi-Fi。現在要辦理退房。<br>2. 朝食は何時ですか。 (早餐幾點？) [breakfast_question_instead_of_checkout] - feedback: 這是在問早餐，不是退房。 | 你要退房。用フロントで自然的短句。 | チェックアウトをお願いします<br>退房時可以說「チェックアウトをお願いします」。<br>チェックアウトをお願いします。 = 麻煩辦理退房。 |
| t2 | お部屋番号をお願いします。 (請問房號。) | 305号室です。 (是305號房。) | 1. 3番線です。 (是三號月台。) [platform_number_instead_of_room_number] - feedback: 這是月台號碼。飯店櫃台需要房號。<br>2. 切符をください。 (請給我票。) [ticket_purchase_at_hotel_checkout] - feedback: 這是在買票，不是回答房號。 | 櫃台問房號。只說房號即可。 |  |
| t3 | カードキーをお願いします。 (請給我房卡。) | はい、どうぞ。 (好的，給你。) | 1. いいえ、ありません。 (沒有。) [refusal_when_key_handover_expected] - feedback: 這是在拒絕或說沒有。情境需要交出房卡。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_at_checkout] - feedback: 這是點餐，不是交房卡。 | 櫃台要房卡。把房卡交給對方。 | はい、どうぞ<br>交東西給對方時可以說「はい、どうぞ」。<br>はい、どうぞ。 = 好的，給你。 |
| t4 | チェックアウトは完了です。こちらが領収書です。 (退房完成了。這是收據。) | ありがとうございます。 (謝謝。) | 1. 305号室です。 (是305號房。) [repeat_room_number_after_completion] - feedback: 房號已經說過了。退房完成時道謝即可。<br>2. パスワードを教えてください。 (請告訴我密碼。) [wifi_question_after_checkout] - feedback: 這又回到Wi-Fi問題。現在退房完成了。 | 退房完成。道謝收尾。 |  |

---

## a1:ja:hotel_wifi_breakfast - ホテルでWi-Fiと朝食を聞く

- Level: A1
- Language: Japanese (ja)
- Scenario ID: hotel_wifi_breakfast
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本飯店櫃台。聽櫃台人員回答，選一句自然接得上的日文。

### Clean Dialogue Path

- フロント: はい、ご用件をどうぞ。 (好的，請問需要什麼？)
- あなた: Wi-Fiのパスワードはどこですか。 (Wi-Fi密碼在哪裡？)
- フロント: パスワードはこのカードにあります。 (密碼在這張卡上。)
- あなた: ありがとうございます。朝食は何時ですか。 (謝謝。早餐是幾點？)
- フロント: 朝食は7時からです。 (早餐從七點開始。)
- あなた: 7時ですね。ありがとうございます。 (七點對吧？謝謝。)
- フロント: どうぞごゆっくり。 (請好好休息。)
- あなた: ありがとうございます。 (謝謝。)
- フロント: Wi-Fiと朝食時間がわかりました。 (你知道Wi-Fi和早餐時間了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | はい、ご用件をどうぞ。 (好的，請問需要什麼？) | Wi-Fiのパスワードはどこですか。 (Wi-Fi密碼在哪裡？) | 1. ルームキーをください。 (請給我房卡。) [room_key_question_instead_of_wifi] - feedback: 這是在要房卡。你的目標是問Wi-Fi密碼。<br>2. お会計お願いします。 (我要結帳。) [checkout_payment_phrase] - feedback: 這像是退房或付款。現在要問Wi-Fi。 | 你想問Wi-Fi密碼。用簡短禮貌的問題。 | Wi-Fiのパスワード<br>在飯店可問「Wi-Fiのパスワードはどこですか」。<br>Wi-Fiのパスワードはどこですか。 = Wi-Fi密碼在哪裡？ |
| t2 | パスワードはこのカードにあります。 (密碼在這張卡上。) | ありがとうございます。朝食は何時ですか。 (謝謝。早餐是幾點？) | 1. カレーをください。 (請給我咖哩。) [restaurant_order_when_breakfast_info_expected] - feedback: 這是在餐廳點餐。現在是在飯店櫃台問早餐資訊。<br>2. カードで払います。 (我用卡付款。) [payment_answer_in_hotel_info_context] - feedback: 這是在付款。現在要問早餐時間或地點。<br>3. ルームキーはどこですか。 (房卡在哪裡？) [room_key_question_instead_of_breakfast] - feedback: 這又回到房卡。Wi-Fi已知道，接著問早餐。 | Wi-Fi資訊知道了。接著問早餐時間。 | 朝食は何時ですか<br>問早餐時間時，可以說「朝食は何時ですか」。<br>朝食は何時ですか。 = 早餐是幾點？ |
| t3 | 朝食は7時からです。 (早餐從七點開始。) | 7時ですね。ありがとうございます。 (七點對吧？謝謝。) | 1. 9時ですね。 (九點對吧？) [wrong_time_confirmation] - feedback: 櫃台說的是七點，不是九點。<br>2. お会計お願いします。 (我要結帳。) [checkout_payment_phrase] - feedback: 這像是付款或退房。現在只要確認早餐時間。 | 櫃台告訴你早餐時間。可以確認並道謝。 |  |
| t4 | どうぞごゆっくり。 (請好好休息。) | ありがとうございます。 (謝謝。) | 1. カレーをください。 (請給我咖哩。) [restaurant_order_after_hotel_info] - feedback: 這是餐廳點餐。飯店資訊已經問完了。<br>2. 9時ですね。 (九點對吧？) [repeated_wrong_time] - feedback: 早餐時間是七點。結尾時道謝比較自然。 | 櫃台在結束對話。簡短道謝即可。 |  |

---

## a1:ja:problem_lost_item - なくした物を伝える

- Level: A1
- Language: Japanese (ja)
- Scenario ID: problem_lost_item
- Setting: インフォメーションカウンター
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本服務台找遺失的小物。選自然、簡短的日文。

### Clean Dialogue Path

- スタッフ: 何かお探しですか。 (你在找什麼嗎？)
- あなた: すみません、バッグをなくしました。 (不好意思，我的包包不見了。)
- スタッフ: どこでなくしましたか。 (你在哪裡弄丟的？)
- あなた: カフェでなくしました。 (在咖啡店弄丟的。)
- スタッフ: 落とし物カウンターはあちらです。 (失物招領櫃台在那邊。)
- あなた: あちらのカウンターですね。 (那邊的櫃台對吧。)
- スタッフ: はい、そこで聞いてください。 (對，請在那裡詢問。)
- あなた: ありがとうございます。 (謝謝。)
- スタッフ: なくした物と、次に聞く場所を確認しました。 (你確認了遺失物，也知道下一步去哪裡問。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何かお探しですか。 (你在找什麼嗎？) | すみません、バッグをなくしました。 (不好意思，我的包包不見了。) | 1. これはいくらですか。 (這個多少錢？) [price_question_instead_of_lost_item] - feedback: 這是在問價格。現在要說物品不見了。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_instead_of_lost_item] - feedback: 這是在點餐，不是尋找遺失物。 | 簡短說你的包包不見了。 | なくしました<br>說東西不見了，可以用「なくしました」。<br>すみません、バッグをなくしました。 = 不好意思，我的包包不見了。 |
| t2 | どこでなくしましたか。 (你在哪裡弄丟的？) | カフェでなくしました。 (在咖啡店弄丟的。) | 1. 10分くらいです。 (大約十分鐘。) [time_estimate_instead_of_lost_location] - feedback: 這是時間估計。對方問的是遺失地點。<br>2. スマホを充電してもいいですか。 (可以充手機嗎？) [charging_question_instead_of_lost_location] - feedback: 這是在問充電。現在要回答地點。 | 回答簡單地點。 | カフェで<br>回答地點時，可以用「場所 + で」。<br>カフェでなくしました。 = 在咖啡店弄丟的。 |
| t3 | 落とし物カウンターはあちらです。 (失物招領櫃台在那邊。) | あちらのカウンターですね。 (那邊的櫃台對吧。) | 1. バッグをなくしました。 (我的包包不見了。) [repeat_lost_statement_after_next_step] - feedback: 你已經說過物品不見了。現在要確認下一個地點。<br>2. お会計お願いします。 (我要結帳。) [payment_phrase_instead_of_next_step_confirmation] - feedback: 這是在付款。現在要確認失物招領櫃台的位置。 | 確認你聽到的位置。 |  |
| t4 | はい、そこで聞いてください。 (對，請在那裡詢問。) | ありがとうございます。 (謝謝。) | 1. 何分くらいですか。 (大概幾分鐘？) [time_question_after_lost_item_help] - feedback: 這是問時間，和失物下一步不相關。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_after_lost_item_help] - feedback: 這是在點餐。得到協助後簡短道謝即可。 | 對方給了下一步。道謝即可。 |  |

---

## a1:ja:shopping_ask_price - 値段を聞く

- Level: A1
- Language: Japanese (ja)
- Scenario ID: shopping_ask_price
- Setting: 小さな店
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在小店想問一件商品的價格。選自然、簡短的日文。

### Clean Dialogue Path

- 店員: いらっしゃいませ。 (歡迎光臨。)
- あなた: すみません。 (不好意思。)
- あなた: これはいくらですか。 (這個多少錢？)
- 店員: 五百円です。 (五百日圓。)
- あなた: じゃあ、これをください。 (那我要這個。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いらっしゃいませ。 (歡迎光臨。) | すみません。 (不好意思。) | 1. 駅はどこですか。 (車站在哪裡？) [directions_instead_of_shop_attention] - feedback: 這是在問路。現在是在店裡先叫住店員。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_in_shop_price_scene] - feedback: 這像是在點飲料，不是在問商品價格。 | 店員在招呼。用すみません自然地叫住對方。 | すみません<br>店で店員に声をかけるときの短い丁寧表現です。<br>すみません。 = 不好意思。 |
| t2 | これはいくらですか。 (這個多少錢？) | これはいくらですか。 (這個多少錢？) | 1. カードで払えますか。 (可以刷卡嗎？) [payment_method_before_price] - feedback: 這是在問付款方式。先問價格更符合情境。<br>2. 二つください。 (請給我兩個。) [quantity_before_price] - feedback: 這是在說數量。現在是問一個商品的價格。 | これは指眼前的一件東西。いくらですか是價格問題。 | これはいくらですか<br>近くの商品一つの値段を聞く自然なA1表現です。<br>これはいくらですか。 = 這個多少錢？ |
| t3 | 五百円です。 (五百日圓。) | じゃあ、これをください。 (那我要這個。) | 1. トイレはどこですか。 (洗手間在哪裡？) [directions_after_price] - feedback: 這突然變成問路。聽到價格後要買或道謝離開。<br>2. お会計をお願いします。 (麻煩結帳。) [restaurant_bill_in_shop] - feedback: 這比較像餐廳結帳。店裡買商品時說これをください即可。 | 店員回答價格：五百円。 |  |

---

## a1:ja:social_running_late - 少し遅れると伝える

- Level: A1
- Language: Japanese (ja)
- Scenario ID: social_running_late
- Setting: 友だちへのメッセージ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要傳訊息給日本朋友說會晚到。選自然、簡短的日文。

### Clean Dialogue Path

- 友だち: もうすぐ着く？ (快到了嗎？)
- あなた: ごめん、少し遅れます。 (抱歉，我會晚一點。)
- 友だち: 何分くらい？ (大概幾分鐘？)
- あなた: 10分くらいです。 (大約十分鐘。)
- 友だち: わかった。待ってるね。 (知道了。我等你。)
- あなた: ありがとう。 (謝謝。)
- 友だち: じゃあ、あとでね。 (那待會見。)
- あなた: すぐ行きます。 (我很快到。)
- 友だち: 遅れることと時間を友だちに伝えました。 (你把會晚到和時間告訴了朋友。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | もうすぐ着く？ (快到了嗎？) | ごめん、少し遅れます。 (抱歉，我會晚一點。) | 1. コーヒーをください。 (請給我咖啡。) [food_order_instead_of_late_message] - feedback: 這是在點咖啡。現在要跟朋友說會晚到。<br>2. コンセントはどこですか。 (插座在哪裡？) [charging_question_instead_of_late_message] - feedback: 這是在問充電位置。現在是晚到訊息。 | 用朋友間自然但不失禮的日文說會晚到。 | 少し遅れます<br>說會晚到時，可以用「少し遅れます」。<br>ごめん、少し遅れます。 = 抱歉，我會晚一點。 |
| t2 | 何分くらい？ (大概幾分鐘？) | 10分くらいです。 (大約十分鐘。) | 1. 305号室です。 (是305號房。) [room_number_instead_of_minutes] - feedback: 這是房號，不是抵達時間。<br>2. お会計お願いします。 (我要結帳。) [payment_phrase_instead_of_minutes] - feedback: 這是在付款。朋友問的是幾分鐘。 | 給短短的時間估計。 | 10分くらいです<br>用「くらい」說大約的時間。<br>10分くらいです。 = 大約十分鐘。 |
| t3 | わかった。待ってるね。 (知道了。我等你。) | ありがとう。 (謝謝。) | 1. ごめん、少し遅れます。 (抱歉，我會晚一點。) [repeat_apology_after_acceptance] - feedback: 朋友已經接受並會等。現在道謝更自然。<br>2. トイレはどこですか。 (廁所在哪裡？) [directions_question_instead_of_thanks] - feedback: 這是在問路，沒有回應朋友願意等。 | 朋友願意等。簡短道謝。 |  |
| t4 | じゃあ、あとでね。 (那待會見。) | すぐ行きます。 (我很快到。) | 1. ありがとうございます。 (謝謝您。) [over_formal_service_thanks_in_friend_context] - feedback: 這像服務情境的正式道謝。朋友訊息用自然收尾即可。<br>2. バッグをなくしました。 (我的包包不見了。) [lost_item_statement_instead_of_close] - feedback: 這是遺失物情境。現在只要跟朋友收尾。 | 用朋友間自然的收尾。 |  |

---

## a1:ja:travel_hotel_checkin - ホテルでチェックインする

- Level: A1
- Language: Japanese (ja)
- Scenario ID: travel_hotel_checkin
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你到飯店櫃台要辦理入住。用短句說有預約，再回答姓名。

### Clean Dialogue Path

- フロント: いらっしゃいませ。チェックインでございますか。 (歡迎光臨。要辦理入住嗎？)
- あなた: はい、予約しています。 (是的，我有預約。)
- フロント: お名前をお願いします。 (請問您的姓名。)
- あなた: リンです。 (我是 Lin。)
- フロント: はい、確認できました。シングルルームでございますね。 (好的，確認到了。是單人房對吧？)
- あなた: はい。 (是的。)
- フロント: こちらがカードキーでございます。お部屋は5階でございます。 (這是房卡。您的房間在五樓。)
- あなた: ありがとうございます。 (謝謝。)
- フロント: ごゆっくりお過ごしください。 (祝您住宿愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いらっしゃいませ。チェックインでございますか。 (歡迎光臨。要辦理入住嗎？) | はい、予約しています。 (是的，我有預約。) | 1. コーヒーをください。 (請給我咖啡。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在飯店櫃台辦理入住。<br>2. チェックアウトです。 (我要退房。) [wrong_flow_checkout] - feedback: チェックアウト是退房。剛到飯店時要說チェックイン或予約しています。 | 櫃台在確認你是不是要入住。有預約時，可以說「予約しています」。 |  |
| t2 | お名前をお願いします。 (請問您的姓名。) | リンです。 (我是 Lin。) | 1. トイレはどこですか。 (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。櫃台現在需要你的姓名。<br>2. 駅に行きたいです。 (我想去車站。) [wrong_scenario_directions] - feedback: 這句是在問外面的方向。入住時先回答名字。 | 他在問名字。用「〜です」回答就可以。 |  |
| t3 | はい、確認できました。シングルルームでございますね。 (好的，確認到了。是單人房對吧？) | はい。 (是的。) | 1. いいえ、予約していません。 (不，我沒有預約。) [wrong_act_contradiction] - feedback: 你剛剛已經說有預約。房型沒問題時，回答「はい」。<br>2. コーヒーをください。 (請給我咖啡。) [off_topic_statement] - feedback: 這裡不是咖啡店。先完成入住確認。 | 櫃台確認了預約和房型。沒問題時，短短回答「はい」。 |  |
| t4 | こちらがカードキーでございます。お部屋は5階でございます。 (這是房卡。您的房間在五樓。) | ありがとうございます。 (謝謝。) | 1. リンです。 (我是 Lin。) [repeated_prior_answer] - feedback: 名字剛剛已經說過了。現在拿到房卡，可以道謝。<br>2. チェックアウトです。 (我要退房。) [wrong_flow_checkout] - feedback: 這裡是入住完成，不是退房。 | カードキー是房卡，五階是五樓。拿到資訊後可以道謝。 |  |

---

## a1:ja:travel_restroom_directions - トイレの場所を聞く

- Level: A1
- Language: Japanese (ja)
- Scenario ID: travel_restroom_directions
- Setting: 店内で場所を聞く
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在店裡想找洗手間。先禮貌開口，再聽懂簡單方向。

### Clean Dialogue Path

- あなた: すみません。 (不好意思。)
- 店員: はい、何でしょうか。 (好的，請問怎麼了？)
- あなた: トイレはどちらですか。 (洗手間在哪裡？)
- 店員: まっすぐ行って、右側にあります。 (直走，在右邊。)
- あなた: 右ですね。 (右邊對吧。)
- 店員: はい、右です。 (對，在右邊。)
- あなた: ありがとうございます。 (謝謝。)
- 店員: はい。 (好的。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | はい、何でしょうか。 (好的，請問怎麼了？) | トイレはどちらですか。 (洗手間在哪裡？) | 1. アイスコーヒーをください。 (請給我冰咖啡。) [wrong_scenario_request] - feedback: 這句是在點咖啡。你現在要問洗手間的位置。<br>2. いくらですか。 (多少錢？) [wrong_act_price_question] - feedback: 這句是在問價格。要找地方時，用「どこですか」。 | 對方在問你需要什麼。直接問洗手間在哪裡就可以。 |  |
| t2 | まっすぐ行って、右側にあります。 (直走，在右邊。) | 右ですね。 (右邊對吧。) | 1. 予約しています。 (我有預約。) [wrong_scenario_response] - feedback: 這句是飯店入住會用到的。現在是在確認方向。<br>2. カードでお願いします。 (麻煩刷卡。) [wrong_scenario_payment] - feedback: 這句是付款時用的。對方剛剛在指方向。 | まっすぐ是直走，右是右邊。先抓大方向就好。 | 左 / 右<br>「左」是左邊，「右」是右邊。<br>左 = 左邊<br>右 = 右邊 |
| t3 | はい、右です。 (對，在右邊。) | ありがとうございます。 (謝謝。) | 1. 右ですね。 (右邊對吧。) [repeated_prior_answer] - feedback: 對方已經確認了。這裡可以道謝。<br>2. 大丈夫です。 (不用了／沒關係。) [wrong_act_refusal] - feedback: 這樣像是在拒絕幫忙。已經得到方向時，用「ありがとうございます」。 | 對方確認是右邊。這時候道謝就好。 |  |

---

## a1:ja:travel_station_directions - 駅の出口を聞く

- Level: A1
- Language: Japanese (ja)
- Scenario ID: travel_station_directions
- Setting: 駅の中
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本車站裡找出口。聽對方的方向提示，選一句自然接得上的日文。

### Clean Dialogue Path

- 駅員: どうしましたか。 (請問怎麼了？)
- あなた: すみません、東口はどこですか。 (不好意思，東口在哪裡？)
- 駅員: まっすぐ行って、右です。 (直走，然後在右邊。)
- あなた: まっすぐ行って、右ですね。 (直走，然後右邊對吧？)
- 駅員: はい。東口はその先です。 (是的。東口就在前面。)
- あなた: ありがとうございます。 (謝謝。)
- 駅員: どうぞ。 (請。)
- あなた: 助かりました。 (幫大忙了。)
- 駅員: 出口の方向がわかりました。 (你知道出口方向了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どうしましたか。 (請問怎麼了？) | すみません、東口はどこですか。 (不好意思，東口在哪裡？) | 1. トイレはどこですか。 (洗手間在哪裡？) [restroom_question_when_exit_is_goal] - feedback: 這是在問洗手間。你的目標是找出口。<br>2. タクシーで行きます。 (我搭計程車去。) [taxi_destination_answer] - feedback: 這是在說交通方式，不是在問車站出口。 | 可以先問你要找的出口在哪裡。 | 〜はどこですか<br>問地點時，可以用「場所 + はどこですか」。<br>東口はどこですか。 = 東口在哪裡？ |
| t2 | まっすぐ行って、右です。 (直走，然後在右邊。) | まっすぐ行って、右ですね。 (直走，然後右邊對吧？) | 1. 左ですね。 (是左邊對吧？) [wrong_direction_confirmation] - feedback: 對方說的是右，不是左。<br>2. カードで払います。 (我用卡付款。) [payment_answer_in_direction_context] - feedback: 這是付款回答。現在是在確認方向。<br>3. タクシー乗り場です。 (是計程車乘車處。) [wrong_destination_confirmation] - feedback: 目標是東口，不是計程車乘車處。 | 對方說直走再右轉。可以確認方向。 | まっすぐ / 右<br>「まっすぐ」是直走，「右」是右邊。<br>まっすぐ = 直走<br>右 = 右邊 |
| t3 | はい。東口はその先です。 (是的。東口就在前面。) | ありがとうございます。 (謝謝。) | 1. 東口はどこですか。 (東口在哪裡？) [repeated_location_question] - feedback: 對方已經告訴你方向了。現在道謝比較自然。<br>2. 切符をください。 (請給我車票。) [ticket_purchase_in_direction_context] - feedback: 這是在買票。現在是問路後的收尾。 | 出口位置確認了。可以道謝。 |  |
| t4 | どうぞ。 (請。) | 助かりました。 (幫大忙了。) | 1. お会計お願いします。 (我要結帳。) [wrong_scenario_payment] - feedback: 這是餐廳或商店付款時的話，不是問路收尾。<br>2. トイレはどこですか。 (洗手間在哪裡？) [new_wrong_location_question] - feedback: 這會換成別的地點。你的出口方向已經確認了。 | 對話結束了。可以再簡短回應。 |  |

---

## a1:ja:travel_taxi_destination - タクシーで行き先を伝える

- Level: A1
- Language: Japanese (ja)
- Scenario ID: travel_taxi_destination
- Setting: タクシー
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在日本搭計程車。聽司機說話，選一句自然接得上的日文。

### Clean Dialogue Path

- 運転手: どちらまでですか。 (請問要到哪裡？)
- あなた: このホテルまでお願いします。 (麻煩到這間飯店。)
- 運転手: このホテルですね。 (是這間飯店，對吧？)
- あなた: はい、お願いします。 (是的，麻煩你。)
- 運転手: 10分くらいです。 (大約十分鐘。)
- あなた: わかりました。ありがとうございます。 (我知道了，謝謝。)
- 運転手: 着きました。 (到了。)
- あなた: ありがとうございます。 (謝謝。)
- 運転手: 行き先を伝えて、到着できました。 (你說出目的地並到達了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どちらまでですか。 (請問要到哪裡？) | このホテルまでお願いします。 (麻煩到這間飯店。) | 1. トイレはどこですか。 (廁所在哪裡？) [directions_question_instead_of_destination] - feedback: 這是在問路。現在要告訴司機目的地。<br>2. コーヒーをください。 (請給我咖啡。) [food_order_in_taxi] - feedback: 這是點餐，不適合計程車上車後的目的地回覆。 | 司機問目的地。用短句說到這間飯店。 | このホテルまでお願いします<br>搭計程車時，說目的地加「までお願いします」很自然。<br>このホテルまでお願いします。 = 麻煩到這間飯店。 |
| t2 | このホテルですね。 (是這間飯店，對吧？) | はい、お願いします。 (是的，麻煩你。) | 1. いいえ、やめます。 (不用，我不去了。) [cancel_when_confirmation_expected] - feedback: 司機確認的是正確目的地，這裡不需要取消。<br>2. このホテルまでお願いします。 (麻煩到這間飯店。) [repeat_destination_when_confirmation_expected] - feedback: 目的地已經說過了。現在自然回覆是確認。 | 司機確認目的地。簡短確認。 |  |
| t3 | 10分くらいです。 (大約十分鐘。) | わかりました。ありがとうございます。 (我知道了，謝謝。) | 1. 切符を一枚ください。 (請給我一張票。) [ticket_purchase_in_taxi] - feedback: 這是在買票。現在是在計程車裡聽車程時間。<br>2. どちらまでですか。 (請問要到哪裡？) [driver_role_sentence_by_learner] - feedback: 這是司機問乘客的話，不是乘客回覆車程時間。 | 聽到車程時間。表示知道了並道謝。 |  |
| t4 | 着きました。 (到了。) | ありがとうございます。 (謝謝。) | 1. このホテルですね。 (是這間飯店，對吧？) [driver_confirmation_reused_by_learner] - feedback: 這像司機確認目的地。到達後乘客說謝謝更自然。<br>2. 朝食は何時ですか。 (早餐幾點？) [hotel_question_in_taxi_closing] - feedback: 這是飯店櫃台問題，不是計程車到達後的收尾。 | 已經到目的地。簡短道謝即可。 |  |

---

## a1:ja:travel_ticket_buying - 切符を買う

- Level: A1
- Language: Japanese (ja)
- Scenario ID: travel_ticket_buying
- Setting: 駅の切符売り場
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在車站售票窗口買一張票。選自然、簡短的日文。

### Clean Dialogue Path

- 駅員: どちらまでですか。 (請問到哪裡？)
- あなた: 中央駅まで一枚ください。 (請給我一張到中央車站的票。)
- 駅員: 中央駅まで、一枚ですね。 (到中央車站，一張，對吧？)
- あなた: はい、お願いします。 (是的，麻煩你。)
- 駅員: 三百円です。二番線です。 (三百日圓。二號月台。)
- あなた: はい、ありがとうございます。 (好的，謝謝。)
- 駅員: 切符です。二番ホームです。 (這是車票。二號月台。)
- あなた: ありがとうございます。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どちらまでですか。 (請問到哪裡？) | 中央駅まで一枚ください。 (請給我一張到中央車站的票。) | 1. 中央駅はどこですか。 (中央車站在哪裡？) [directions_instead_of_ticket_purchase] - feedback: 這是在問路，不是在買票。<br>2. サンドイッチをください。 (請給我三明治。) [food_order_at_ticket_counter] - feedback: 這是在點餐，不適合售票窗口。 | 站務員問目的地。用まで一枚ください。 |  |
| t2 | 中央駅まで、一枚ですね。 (到中央車站，一張，對吧？) | はい、お願いします。 (是的，麻煩你。) | 1. いいえ、やめます。 (不用，我不買了。) [cancel_when_confirmation_expected] - feedback: 站務員確認的是正確資訊；這裡不該取消。<br>2. 空港まで二枚ください。 (請給我兩張到機場的票。) [wrong_quantity_and_destination] - feedback: 這改變了張數和目的地，和前一句不一致。 | 站務員確認資訊。用はい、お願いします。 | はい、お願いします<br>店員や駅員が確認した時に、短く丁寧に答える表現です。<br>はい、お願いします。 = 是的，麻煩你。 |
| t3 | 三百円です。二番線です。 (三百日圓。二號月台。) | はい、ありがとうございます。 (好的，謝謝。) | 1. 中央駅まで行きますか。 (你要去中央車站嗎？) [staff_role_sentence_by_customer] - feedback: 這像站務員問旅客，不是旅客付款收尾。<br>2. はじめまして。 (初次見面。) [social_greeting_at_ticket_counter] - feedback: 這是初次見面語，不是買票收尾。 | 站務員說價格和月台。付款並道謝。 |  |
| t4 | 切符です。二番ホームです。 (這是車票。二號月台。) | ありがとうございます。 (謝謝。) | 1. コーヒーを一つください。 (請給我一杯咖啡。) [food_order_at_ticket_counter] - feedback: 這是在點餐，不是售票窗口收尾。<br>2. はじめまして。 (初次見面。) [social_greeting_at_ticket_counter] - feedback: 這是初次見面問候，不是拿到票後的回應。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
