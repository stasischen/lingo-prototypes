# A2 Japanese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:ja:a2_app_booking_confirmation - アプリ予約を確認する

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 低リスクのデジタル・簡単な書類サポートを短いA2表現で扱います。
- Support text: パスワード、支払い、身分証、医療、法律情報は出さず、必要な内容だけ確認します。

### Clean Dialogue Path

- 友だち: 予約は今日の午後3時です。 (預約確認為今天下午三點。)
- 你: 場所はどこですか。 (地點在哪裡？)
- 友だち: カフェの2階です。 (在咖啡店二樓。)
- 你: カフェの2階で合っていますか。 (是在咖啡店二樓，對嗎？)
- 友だち: はい、予約名はミナさんです。 (對，預約姓名是 Mina。)
- 你: はい、私の名前です。 (對，是我的名字。)
- 友だち: では午後3時にお待ちしています。 (那下午三點見。)
- 你: はい、午後3時に行きます。 (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 予約は今日の午後3時です。 (預約確認為今天下午三點。) | 場所はどこですか。 (地點在哪裡？) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t2 | カフェの2階です。 (在咖啡店二樓。) | カフェの2階で合っていますか。 (是在咖啡店二樓，對嗎？) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t3 | はい、予約名はミナさんです。 (對，預約姓名是 Mina。) | はい、私の名前です。 (對，是我的名字。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t4 | では午後3時にお待ちしています。 (那下午三點見。) | はい、午後3時に行きます。 (好，我下午三點會去。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |

---

## a2:ja:a2_ask_ingredient_preference - 材料の好みを伝える

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_ask_ingredient_preference
- Setting: レストランのカウンター
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: よくある材料が入っているか聞き、好みに合わせて選びます。
- Support text: よくある材料が入っているか聞き、好みに合わせて選びます。

### Clean Dialogue Path

- 店員: ご注文はお決まりですか。 (您決定要點什麼了嗎？)
- 你: このサラダに玉ねぎは入っていますか。 (這個沙拉裡有洋蔥嗎？)
- 店員: はい、少し入っています。 (有，放一點。)
- 你: 玉ねぎが少し入っているんですね。 (有一點洋蔥，對嗎？)
- 店員: ご希望でしたら、玉ねぎなしにできます。 (如果您希望，可以不加洋蔥。)
- 你: はい、玉ねぎなしでお願いします。 (好的，請不要加洋蔥。)
- 店員: かしこまりました。玉ねぎなしでご用意します。 (了解，我會準備不加洋蔥的。)
- 你: ありがとうございます。それでお願いします。 (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ご注文はお決まりですか。 (您決定要點什麼了嗎？) | このサラダに玉ねぎは入っていますか。 (這個沙拉裡有洋蔥嗎？) | 1. このサラダは何階ですか。 (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: 階数は材料と関係ありません。<br>2. チケットの時間を変えてください。 (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: チケットの場面に変わっています。 | 材料が入っているか聞きましょう。 |  |
| t2 | はい、少し入っています。 (有，放一點。) | 玉ねぎが少し入っているんですね。 (有一點洋蔥，對嗎？) | 1. 肉がたくさん入っているんですね。 (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: 肉とは言っていません。<br>2. 部屋がうるさいんですね。 (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: ホテルの問題に変わっています。 | 材料情報を確認しましょう。 |  |
| t3 | ご希望でしたら、玉ねぎなしにできます。 (如果您希望，可以不加洋蔥。) | はい、玉ねぎなしでお願いします。 (好的，請不要加洋蔥。) | 1. はい、アレルギーの薬をください。 (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: 医療・アレルギー対応はこのタスク外です。<br>2. はい、返金してください。 (好的，請退款。) [forbidden_or_wrong_domain] - feedback: 返金依頼ではありません。 | 好みとして選びましょう。 |  |
| t4 | かしこまりました。玉ねぎなしでご用意します。 (了解，我會準備不加洋蔥的。) | ありがとうございます。それでお願いします。 (謝謝，請這樣做。) | 1. パスポート番号を教えてください。 (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: パスポート情報は不要です。<br>2. 荷物を預けたいです。 (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: 荷物預かりの場面ではありません。 | 注文確認で終わりましょう。 |  |

---

## a2:ja:a2_ask_late_checkout - レイトチェックアウトを尋ねる

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_ask_late_checkout
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: チェックアウトを少し遅くできるか尋ねて、可能な時間を確認しましょう。

### Clean Dialogue Path

- ホテルスタッフ: いかがなさいましたか。 (請問需要什麼協助？)
- あなた: チェックアウトを少し遅くできますか。 (可以晚一點退房嗎？)
- ホテルスタッフ: 本日は午後一時まで可能です。 (今天可以到下午一點。)
- あなた: 午後一時まで大丈夫なんですね。 (可以到下午一點，對嗎？)
- ホテルスタッフ: ルームカードを正午までに一度フロントにお持ちください。 (房卡請在中午前先拿到櫃台。)
- あなた: 正午までにカードを見せればいいですね。 (中午前拿房卡給您看就可以，對嗎？)
- ホテルスタッフ: では、一時チェックアウトで確認します。 (那我幫您確認為一點退房。)
- あなた: ありがとうございます。一時にチェックアウトします。 (謝謝。我一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いかがなさいましたか。 (請問需要什麼協助？) | チェックアウトを少し遅くできますか。 (可以晚一點退房嗎？) | 1. チェックインを少し遅くできますか。 (可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: チェックインではなくチェックアウトを尋ねる場面です。<br>2. 料金を安くしてください。 (請幫我降價。) [forbidden_or_wrong_domain] - feedback: 料金交渉はこのA2課題の範囲外です。 | レイトチェックアウトを尋ねます。 |  |
| t2 | 本日は午後一時まで可能です。 (今天可以到下午一點。) | 午後一時まで大丈夫なんですね。 (可以到下午一點，對嗎？) | 1. 午前十時まで大丈夫なんですね。 (可以到上午十點，對嗎？) [wrong_detail_or_domain] - feedback: スタッフは午後一時までと言っています。<br>2. 新しく部屋を予約します。 (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: 新しい予約ではなくチェックアウト時間の確認です。 | 可能な時間を聞き取ります。 | A2で使う表現<br>この宿泊場面で使いやすい短い表現です。<br>午後一時まで = 到下午一點 |
| t3 | ルームカードを正午までに一度フロントにお持ちください。 (房卡請在中午前先拿到櫃台。) | 正午までにカードを見せればいいですね。 (中午前拿房卡給您看就可以，對嗎？) | 1. パスポート番号を言えばいいですね。 (告訴您護照號碼就可以，對嗎？) [wrong_detail_or_domain] - feedback: パスポート番号は必要ありません。<br>2. 夜七時に荷物を受け取ればいいですね。 (晚上七點領行李就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: 荷物預かりではなくチェックアウトの話です。 | 簡単な条件を確認します。 |  |
| t4 | では、一時チェックアウトで確認します。 (那我幫您確認為一點退房。) | ありがとうございます。一時にチェックアウトします。 (謝謝。我一點退房。) | 1. 返金を申し込みます。 (我要申請退款。) [wrong_detail_or_domain] - feedback: 返金申請はこの場面の範囲外です。<br>2. 明日の朝、電車に乗ります。 (我明天早上會搭電車。) [forbidden_or_wrong_domain] - feedback: 交通計画ではなくチェックアウト確認です。 | 最後の時間を確認します。 |  |

---

## a2:ja:a2_ask_recommendation_budget - 予算内でおすすめを聞く

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_ask_recommendation_budget
- Setting: 小さな店
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 小さな予算内でおすすめを聞き、条件を短く伝えます。
- Support text: 小さな予算内でおすすめを聞き、条件を短く伝えます。

### Clean Dialogue Path

- 店員: 何をお探しですか。 (您在找什麼？)
- 你: 千円以内でプレゼントをおすすめしてもらえますか。 (可以推薦一千日圓以內的禮物嗎？)
- 店員: 軽いものと実用的なもの、どちらがいいですか。 (您想要輕巧的，還是實用的？)
- 你: 実用的なものがいいです。 (我想要實用的。)
- 店員: では、この小さいノートは千円以内です。 (那這本小筆記本在一千日圓以內。)
- 你: そのノートは千円以内なんですね。 (那本筆記本在一千日圓以內，對嗎？)
- 店員: はい、プレゼント包装もできます。 (對，也可以包裝成禮物。)
- 你: いいですね。そのノートにします。 (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何をお探しですか。 (您在找什麼？) | 千円以内でプレゼントをおすすめしてもらえますか。 (可以推薦一千日圓以內的禮物嗎？) | 1. 銀行口座を確認してください。 (請確認我的銀行帳戶。) [wrong_detail_or_domain] - feedback: 銀行の場面ではありません。<br>2. 落とし物の届けを出したいです。 (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: 落とし物の手続きは別のタスクです。 | 小さな予算内でおすすめを聞きましょう。 |  |
| t2 | 軽いものと実用的なもの、どちらがいいですか。 (您想要輕巧的，還是實用的？) | 実用的なものがいいです。 (我想要實用的。) | 1. 辛いものがいいです。 (我想要辣的。) [wrong_detail_or_domain] - feedback: 辛さは食品メニューの話です。<br>2. チェックアウトを遅くしたいです。 (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: ホテルの場面に変わっています。 | 簡単な好みを伝えましょう。 |  |
| t3 | では、この小さいノートは千円以内です。 (那這本小筆記本在一千日圓以內。) | そのノートは千円以内なんですね。 (那本筆記本在一千日圓以內，對嗎？) | 1. その部屋は千円以内なんですね。 (那個房間在一千日圓以內，對嗎？) [wrong_detail_or_domain] - feedback: 部屋はおすすめ商品ではありません。<br>2. そのチケットは昨日のものなんですね。 (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: チケットの話に変わっています。 | おすすめと予算を確認しましょう。 |  |
| t4 | はい、プレゼント包装もできます。 (對，也可以包裝成禮物。) | いいですね。そのノートにします。 (很好，我要那本筆記本。) | 1. 返金してください。 (請退款。) [wrong_detail_or_domain] - feedback: 返金依頼ではありません。<br>2. 保険を確認してください。 (請確認我的保險。) [forbidden_or_wrong_domain] - feedback: 保険はこの低リスク課題の外です。 | おすすめを受け入れて終わりましょう。 |  |

---

## a2:ja:a2_ask_transfer_platform - 乗り換えのホームを聞く

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_ask_transfer_platform
- Setting: 駅で乗り換えを確認
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler asks where to transfer and which platform to use.
- Learner goal: Ask about a transfer and confirm a short two-step direction.
- Support text: どこで乗り換えるか、どのホームへ行くかを短く確認しましょう。

### Clean Dialogue Path

- 駅員: どちらまで行きますか。 (您要到哪裡？)
- 你: 空港へ行きたいです。どこで乗り換えますか。 (我想去機場。在哪裡轉乘？)
- 駅員: 中央駅で降りて、3番ホームへ行ってください。 (請在中央站下車，去 3 號月台。)
- 你: 中央駅で降りて、3番ホームですね。 (在中央站下車，3 號月台，對吧？)
- 駅員: 3番ホームで空港行きの電車に乗ってください。 (請在 3 號月台搭往機場的電車。)
- 你: 3番ホームで空港行きに乗ればいいですね。 (在 3 號月台搭往機場的車就可以，對吧？)
- 駅員: はい。中央駅で乗り換えてください。 (對，請在中央站轉乘。)
- 你: ありがとうございます。中央駅で乗り換えます。 (謝謝。我會在中央站轉乘。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どちらまで行きますか。 (您要到哪裡？) | 空港へ行きたいです。どこで乗り換えますか。 (我想去機場。在哪裡轉乘？) | 1. 空港へ昨日行きました。 (我昨天去了機場。) [wrong_time_past] - feedback: 今は乗り換えを聞く場面です。昨日の話ではありません。<br>2. 荷物を預けたいです。 (我想寄放行李。) [wrong_scenario_luggage] - feedback: 荷物預かりではなく、乗り換えを聞きましょう。 | 空港へ行きたいので、どこで乗り換えるか聞きましょう。 |  |
| t2 | 中央駅で降りて、3番ホームへ行ってください。 (請在中央站下車，去 3 號月台。) | 中央駅で降りて、3番ホームですね。 (在中央站下車，3 號月台，對吧？) | 1. 中央駅でコーヒーを飲みますね。 (在中央站喝咖啡，對吧？) [wrong_action_cafe] - feedback: 駅員さんはコーヒーではなく、3番ホームへ行くと言いました。<br>2. 3番の部屋ですね。 (3 號房，對吧？) [wrong_location_room] - feedback: 部屋ではなく、ホームです。 | 降りて、行ってください connects two simple steps. | 〜て = 然後<br>降りて、3番ホームへ行ってください links two actions.<br>降りて = 下車後<br>3番ホームへ = 往 3 號月台 |
| t3 | 3番ホームで空港行きの電車に乗ってください。 (請在 3 號月台搭往機場的電車。) | 3番ホームで空港行きに乗ればいいですね。 (在 3 號月台搭往機場的車就可以，對吧？) | 1. 空港行きは昨日来ましたね。 (往機場的車昨天來了，對吧？) [wrong_time_past] - feedback: 今から乗る電車を確認しています。昨日の話ではありません。<br>2. 緊急のときはどこへ行きますか。 (緊急時要去哪裡？) [forbidden_emergency_reroute] - feedback: 緊急時の案内はこのA2の乗り換え練習の範囲外です。 | ホームと行き先を確認しましょう。 |  |
| t4 | はい。中央駅で乗り換えてください。 (對，請在中央站轉乘。) | ありがとうございます。中央駅で乗り換えます。 (謝謝。我會在中央站轉乘。) | 1. 切符の時間を変えます。 (我要改票的時間。) [wrong_scenario_ticket_change] - feedback: 今は乗り換えの確認です。切符の変更ではありません。<br>2. 空港で警察に行きます。 (我會在機場去警察那裡。) [forbidden_police_domain] - feedback: 警察の話はこの低リスクな乗り換え練習には入りません。 | 確認できました。短くお礼を言いましょう。 |  |

---

## a2:ja:a2_change_delivery_pickup_time - 受け取り時間を変える

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 低リスクのデジタル・簡単な書類サポートを短いA2表現で扱います。
- Support text: パスワード、支払い、身分証、医療、法律情報は出さず、必要な内容だけ確認します。

### Clean Dialogue Path

- 友だち: 今日は4時の受け取り予定です。 (今天四點取貨。)
- 你: 受け取り時間を変えられますか。 (可以改取貨時間嗎？)
- 友だち: はい、5時なら大丈夫です。 (可以，五點可以。)
- 你: では5時でお願いします。 (那請改成五點。)
- 友だち: 5時に変更でいいですか。 (改成五點嗎？)
- 你: はい、5時で大丈夫です。 (對，五點可以。)
- 友だち: はい、5時に変更します。 (好的，我會改成五點。)
- 你: ありがとうございます。5時に行きます。 (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今日は4時の受け取り予定です。 (今天四點取貨。) | 受け取り時間を変えられますか。 (可以改取貨時間嗎？) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t2 | はい、5時なら大丈夫です。 (可以，五點可以。) | では5時でお願いします。 (那請改成五點。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t3 | 5時に変更でいいですか。 (改成五點嗎？) | はい、5時で大丈夫です。 (對，五點可以。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t4 | はい、5時に変更します。 (好的，我會改成五點。) | ありがとうございます。5時に行きます。 (謝謝，我五點會去。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |

---

## a2:ja:a2_change_ticket_time - 切符の時間を変える

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_change_ticket_time
- Setting: 駅の窓口
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler asks to change a ticket time at a station counter.
- Learner goal: Make a polite time-change request and confirm the new time.
- Support text: 駅の窓口で切符の時間を変えたいです。希望と確認を短く言いましょう。

### Clean Dialogue Path

- 駅員: どうしましたか。 (請問怎麼了？)
- 你: 切符の時間を変えたいです。 (我想改票的時間。)
- 駅員: 今日の3時の切符に変えられます。 (可以改成今天 3 點的票。)
- 你: はい、3時の切符にしてください。 (好，請改成 3 點的票。)
- 駅員: 3時出発でよろしいですか。 (3 點出發可以嗎？)
- 你: はい、3時出発で大丈夫です。 (好，3 點出發沒問題。)
- 駅員: 変更できました。3時の電車にお乗りください。 (已經更改好了。請搭 3 點的電車。)
- 你: ありがとうございます。3時に乗ります。 (謝謝。我 3 點搭。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どうしましたか。 (請問怎麼了？) | 切符の時間を変えたいです。 (我想改票的時間。) | 1. 切符は昨日でした。 (票是昨天的。) [wrong_time_past] - feedback: 今は時間を変えたいと頼む場面です。昨日の話ではありません。<br>2. コーヒーを一つください。 (請給我一杯咖啡。) [wrong_scenario_cafe] - feedback: これはカフェの文です。ここは駅の窓口です。 | まず切符の時間を変えたいと言いましょう。 |  |
| t2 | 今日の3時の切符に変えられます。 (可以改成今天 3 點的票。) | はい、3時の切符にしてください。 (好，請改成 3 點的票。) | 1. 3時に部屋はありますか。 (3 點有房間嗎？) [wrong_scenario_hotel] - feedback: 部屋ではなく、切符の時間を変える場面です。<br>2. 昨日3時に乗りました。 (我昨天 3 點搭了。) [wrong_time_past] - feedback: 今は今日の3時に変えるかどうかを答えます。 | 可能な時間を言われました。受け入れるなら、3時でお願いします。 | 〜に変える = 改成<br>3時の切符に変える means change it to a 3 o'clock ticket.<br>3時の切符に = 改成 3 點的票<br>変えられます = 可以更改 |
| t3 | 3時出発でよろしいですか。 (3 點出發可以嗎？) | はい、3時出発で大丈夫です。 (好，3 點出發沒問題。) | 1. いいえ、3時は昨日でした。 (不是，3 點是昨天。) [wrong_time_past] - feedback: 確認しているのは新しい出発時間です。<br>2. 返金のルールを教えてください。 (請告訴我退款規則。) [forbidden_refund_rules] - feedback: 返金ルールはこのA2タスクの範囲外です。時間を確認しましょう。 | 新しい時間を確認します。 |  |
| t4 | 変更できました。3時の電車にお乗りください。 (已經更改好了。請搭 3 點的電車。) | ありがとうございます。3時に乗ります。 (謝謝。我 3 點搭。) | 1. 明日コーヒーを飲みます。 (我明天喝咖啡。) [wrong_topic_plan] - feedback: 今は切符の時間変更が終わった場面です。<br>2. パスポート番号は何ですか。 (護照號碼是什麼？) [forbidden_identity_detail] - feedback: パスポート番号はこの低リスクな時間変更には必要ありません。 | 手続きが終わりました。短くお礼を言いましょう。 |  |

---

## a2:ja:a2_compare_two_menu_options - メニューを二つ比べる

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_compare_two_menu_options
- Setting: レストランのカウンター
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 二つのメニューの違いを聞いて、好みに合う方を選びます。
- Support text: 二つのメニューの違いを聞いて、好みに合う方を選びます。

### Clean Dialogue Path

- 店員: 今日はビビンバと冷たい麺から選べます。 (今天可以選拌飯或冷麵。)
- 你: 二つはどう違いますか。 (兩個有什麼不同？)
- 店員: ビビンバは少し辛くて、麺のほうが軽いです。 (拌飯有點辣，麵比較清爽。)
- 你: 麺のほうが軽いんですね。 (麵比較清爽，對嗎？)
- 店員: はい、麺のほうが辛くないです。 (對，麵比較不辣。)
- 你: では、麺にします。 (那我要麵。)
- 店員: かしこまりました。麺を一つご用意します。 (好的，我幫您準備一份麵。)
- 你: ありがとうございます。麺を一つお願いします。 (謝謝，請給我一份麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今日はビビンバと冷たい麺から選べます。 (今天可以選拌飯或冷麵。) | 二つはどう違いますか。 (兩個有什麼不同？) | 1. 席はどこですか。 (座位在哪裡？) [wrong_detail_or_domain] - feedback: 席の質問で、メニュー比較ではありません。<br>2. 返金してください。 (請退款。) [forbidden_or_wrong_domain] - feedback: 返金はこのA2タスクの外です。 | 二つの違いを聞きましょう。 |  |
| t2 | ビビンバは少し辛くて、麺のほうが軽いです。 (拌飯有點辣，麵比較清爽。) | 麺のほうが軽いんですね。 (麵比較清爽，對嗎？) | 1. ビビンバのほうが安いんですね。 (拌飯比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: 値段は言っていません。<br>2. 電車のほうが速いんですね。 (電車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: 交通の話に変わっています。 | 聞いた比較を確認しましょう。 |  |
| t3 | はい、麺のほうが辛くないです。 (對，麵比較不辣。) | では、麺にします。 (那我要麵。) | 1. では、部屋を変えます。 (那我要換房間。) [wrong_detail_or_domain] - feedback: ホテルの場面に変わっています。<br>2. では、パスポートを見せます。 (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: パスポートは必要ありません。 | 好みに合うものを選びましょう。 |  |
| t4 | かしこまりました。麺を一つご用意します。 (好的，我幫您準備一份麵。) | ありがとうございます。麺を一つお願いします。 (謝謝，請給我一份麵。) | 1. 警察に言います。 (我要報警。) [wrong_detail_or_domain] - feedback: この場面では強すぎます。<br>2. 明日、病院に行きます。 (我明天要去醫院。) [forbidden_or_wrong_domain] - feedback: 医療の場面ではありません。 | 選んだメニューを丁寧に確認しましょう。 |  |

---

## a2:ja:a2_confirm_date_time_place - 日にち・時間・場所を確認する

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_confirm_date_time_place
- Setting: 短いメッセージの確認
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You confirm date, time, and place from a short message.
- Learner goal: Understand a short message and confirm the key details.
- Support text: 友だちからの短いメッセージを見て、日にち、時間、場所を確認します。

### Clean Dialogue Path

- 友だち: メッセージを確認しましたか。 (你確認訊息了嗎？)
- 你: はい、明日の午前10時ですね。 (有，明天上午 10 點對吧。)
- 友だち: 場所はどこでしたか。 (地點是哪裡來著？)
- 你: 駅前のカフェで会います。 (在車站前的咖啡店見。)
- 友だち: もし遅れたら、メッセージします。 (如果我晚到，我會傳訊息。)
- 你: はい、わかりました。 (好，我知道了。)
- 友だち: では、明日会いましょう。 (那明天見。)
- 你: はい、明日会いましょう。 (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | メッセージを確認しましたか。 (你確認訊息了嗎？) | はい、明日の午前10時ですね。 (有，明天上午 10 點對吧。) | 1. はい、今日の夜10時ですね。 (有，今天晚上 10 點對吧。) [wrong_date_time] - feedback: メッセージは明日の午前10時です。今日の夜ではありません。<br>2. はい、メニューを確認しました。 (有，我確認菜單了。) [wrong_scenario_menu] - feedback: 確認するのはメニューではなく、待ち合わせの日時です。 | メッセージは「明日午前10時、駅前のカフェで会いましょう。」です。まず日にちと時間を確認しましょう。 |  |
| t2 | 場所はどこでしたか。 (地點是哪裡來著？) | 駅前のカフェで会います。 (在車站前的咖啡店見。) | 1. 駅の中のカフェで会います。 (在車站裡面的咖啡店見。) [wrong_place_relation] - feedback: メッセージは駅前のカフェです。駅の中ではありません。<br>2. 家で休む予定です。 (我打算在家休息。) [wrong_function_plan] - feedback: これは自分の予定です。今は待ち合わせ場所を確認しています。 | メッセージの場所は駅前のカフェです。場所だけをはっきり言いましょう。 | 場所 + で会う<br>Use place + で会います to say where people will meet.<br>カフェで会います = 在咖啡店見<br>駅前で会います = 在車站前見 |
| t3 | もし遅れたら、メッセージします。 (如果我晚到，我會傳訊息。) | はい、わかりました。 (好，我知道了。) | 1. はい、遅れました。 (好，我遲到了。) [wrong_subject_status] - feedback: 相手は自分が遅れたら連絡すると言っています。あなたが遅れたとは言っていません。<br>2. バスが遅れたら連絡します。 (如果公車晚了，我會聯絡。) [wrong_focus_self_delay] - feedback: これはあなた側の遅れの話に聞こえます。ここでは相手の連絡を受け止めます。 | 相手は、遅れたら連絡すると言っています。短く受け止めましょう。 |  |
| t4 | では、明日会いましょう。 (那明天見。) | はい、明日会いましょう。 (好，明天見。) | 1. はい、昨日会いましょう。 (好，昨天見。) [wrong_time_expression] - feedback: 昨日会いましょう is not natural. The meeting is tomorrow.<br>2. お会計をお願いします。 (請結帳。) [wrong_scenario_payment] - feedback: これは会計の場面です。今は明日の待ち合わせを確認しています。 | 細かいことは確認できました。自然に終わりましょう。 |  |

---

## a2:ja:a2_decline_with_reason - 理由を添えてやさしく断る

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_decline_with_reason
- Setting: 友だちからの誘い
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"polite_friend_decline","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"not_used_as_translation_source"}
- Learner goal: 友だちの誘いをやわらかく断り、普通の理由を一つ伝えます。
- Support text: 友だちの誘いを今回は断ります。短い理由を言って、また今度につなげましょう。

### Clean Dialogue Path

- 友だち: 今日、映画を見に行かない？ (今天要不要去看電影？)
- 你: ごめん、今日はちょっと行けない。 (抱歉，今天有點不能去。)
- 友だち: そっか。何かあるの？ (這樣啊。你有事嗎？)
- 你: 宿題がまだあるんだ。 (我還有作業。)
- 友だち: わかった。じゃあ、また今度にしよう。 (了解。那下次再說吧。)
- 你: うん、週末なら行けるかも。 (嗯，週末的話也許可以去。)
- 友だち: いいよ。じゃあ、また連絡するね。 (好啊。那我再聯絡你。)
- 你: ありがとう。また誘ってね。 (謝謝。下次再約我喔。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今日、映画を見に行かない？ (今天要不要去看電影？) | ごめん、今日はちょっと行けない。 (抱歉，今天有點不能去。) | 1. はい、かしこまりました。 (好的，我明白了。) [wrong_register_service] - feedback: これは店や仕事のように硬い返事です。友だちには自然に言いましょう。<br>2. もちろん、毎週行こう。 (當然，我們每週去吧。) [wrong_function_accepts] - feedback: 今回は断る場面です。約束を増やさないようにしましょう。 | 友だちの誘いです。断るときは軽く謝ってから言いましょう。 |  |
| t2 | そっか。何かあるの？ (這樣啊。你有事嗎？) | 宿題がまだあるんだ。 (我還有作業。) | 1. 病院で大きな検査があるんだ。 (我要去醫院做大型檢查。) [forbidden_heavy_reason] - feedback: このタスクでは重い理由は使いません。普通の短い理由にしましょう。<br>2. 映画館はどこにあるの？ (電影院在哪裡？) [wrong_function_location_question] - feedback: 場所を聞く場面ではありません。断る理由を短く言います。 | 理由は一つだけ、普通で軽いものにします。 | 理由 + んだ<br>In casual speech, use a short reason with んだ to explain softly.<br>宿題があるんだ = 我有作業<br>家で手伝うんだ = 我要在家幫忙 |
| t3 | わかった。じゃあ、また今度にしよう。 (了解。那下次再說吧。) | うん、週末なら行けるかも。 (嗯，週末的話也許可以去。) | 1. うん、今すぐ行こう。 (嗯，現在馬上去吧。) [contradicts_decline] - feedback: さっき断ったので、今すぐ行く返事は流れに合いません。<br>2. うん、返金してもらえる？ (嗯，可以退款嗎？) [wrong_domain_refund] - feedback: 返金の話ではありません。友だちとの予定を別の日につなげます。 | 友だちが理由を受け入れました。別の時を提案しても自然です。 |  |
| t4 | いいよ。じゃあ、また連絡するね。 (好啊。那我再聯絡你。) | ありがとう。また誘ってね。 (謝謝。下次再約我喔。) | 1. もう誘わないで。 (不要再約我了。) [too_harsh] - feedback: 強すぎて関係を保ちにくい言い方です。<br>2. 領収書をください。 (請給我收據。) [wrong_domain_service] - feedback: 買い物の場面ではありません。友だちに自然に返しましょう。 | 短くお礼を言って、温かく終わりましょう。 |  |

---

## a2:ja:a2_describe_weekend_activity - 週末にしたことを話す

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_describe_weekend_activity
- Setting: 友だちとの週明けの会話
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"weekend_activity_chat","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"not_used_as_translation_source"}
- Learner goal: 週末にした普通の活動を一つ言い、簡単な質問に短く答えます。
- Support text: 友だちが週末のことを聞いています。したことを一つ言って、短い詳しい情報を足しましょう。

### Clean Dialogue Path

- 友だち: 週末、何したの？ (週末你做了什麼？)
- 你: 公園を散歩したよ。 (我去公園散步了。)
- 友だち: 誰と行ったの？ (你跟誰去的？)
- 你: 友だちと行ったよ。 (我跟朋友去的。)
- 友だち: へえ、どうだった？ (喔，怎麼樣？)
- 你: 天気がよくて、気持ちよかったよ。 (天氣很好，感覺很舒服。)
- 友だち: いいね。私も今度行きたいな。 (不錯耶。我下次也想去。)
- 你: うん、今度一緒に行こう。 (嗯，下次一起去吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 週末、何したの？ (週末你做了什麼？) | 公園を散歩したよ。 (我去公園散步了。) | 1. 明日、公園を散歩するよ。 (明天我要去公園散步。) [wrong_time_future] - feedback: 聞かれているのは週末にしたことです。未来の予定ではありません。<br>2. 公園は何時に閉まりますか。 (公園幾點關門？) [wrong_function_facility_question] - feedback: 施設情報ではなく、自分がしたことを答えます。 | 週末にしたことを一つ、短く言いましょう。 |  |
| t2 | 誰と行ったの？ (你跟誰去的？) | 友だちと行ったよ。 (我跟朋友去的。) | 1. 友だちを待っているよ。 (我正在等朋友。) [wrong_time_current_action] - feedback: 今していることではなく、週末に誰と行ったかを答えます。<br>2. 店員さんと注文したよ。 (我跟店員點餐了。) [wrong_domain_service] - feedback: 散歩の話です。注文の場面に変えないようにしましょう。 | 誰と means with whom. One short answer is enough. | 誰と + 行った<br>Use person + と to say who you did something with.<br>友だちと行った = 和朋友去了<br>一人で行った = 一個人去了 |
| t3 | へえ、どうだった？ (喔，怎麼樣？) | 天気がよくて、気持ちよかったよ。 (天氣很好，感覺很舒服。) | 1. 天気がいいから、明日行こう。 (因為天氣好，明天去吧。) [wrong_function_invitation] - feedback: 今は週末の感想を聞かれています。新しい誘いではありません。<br>2. 天気について詳しく説明します。 (我來詳細說明天氣。) [too_formal_b1] - feedback: A2では短い感想で十分です。説明文にしないようにしましょう。 | 感想は短く一つだけで大丈夫です。 |  |
| t4 | いいね。私も今度行きたいな。 (不錯耶。我下次也想去。) | うん、今度一緒に行こう。 (嗯，下次一起去吧。) | 1. うん、昨日は忙しいです。 (嗯，昨天很忙。) [wrong_time_register_mismatch] - feedback: 流れに合わない過去の状態です。自然に返しましょう。<br>2. うん、部屋を変えてください。 (嗯，請幫我換房間。) [wrong_domain_hotel] - feedback: ホテルの場面ではありません。友だちとの会話です。 | 自然に反応して、会話を軽く終えましょう。 |  |

---

## a2:ja:a2_exchange_wrong_item - 違う商品を交換してもらう

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_exchange_wrong_item
- Setting: 店のカウンター
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 注文と違う商品を受け取ったとき、丁寧に交換をお願いします。
- Support text: 注文と違う商品を受け取ったとき、丁寧に交換をお願いします。

### Clean Dialogue Path

- 店員: いかがなさいましたか。 (請問怎麼了？)
- 你: 小さいカップを頼んだのですが、大きいカップが来ました。 (我點的是小杯，但送來的是大杯。)
- 店員: 確認します。レシートを見せていただけますか。 (我確認一下。可以給我看收據嗎？)
- 你: はい、レシートはこちらです。 (好的，這是收據。)
- 店員: 失礼しました。小さいカップにすぐ交換します。 (不好意思。我馬上換成小杯。)
- 你: 小さいカップに交換してくださるんですね。 (您會幫我換成小杯，對嗎？)
- 店員: はい、少々お待ちください。 (好的，請稍等。)
- 你: ありがとうございます。ここで待ちます。 (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | いかがなさいましたか。 (請問怎麼了？) | 小さいカップを頼んだのですが、大きいカップが来ました。 (我點的是小杯，但送來的是大杯。) | 1. 小さいカップはどこで作りますか。 (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: 製造場所を聞く場面ではありません。<br>2. 値段を下げてください。 (請降價。) [forbidden_or_wrong_domain] - feedback: 値段交渉はこのタスク外です。 | 注文と違うことを伝えましょう。 |  |
| t2 | 確認します。レシートを見せていただけますか。 (我確認一下。可以給我看收據嗎？) | はい、レシートはこちらです。 (好的，這是收據。) | 1. はい、パスポートはこちらです。 (好的，這是護照。) [wrong_detail_or_domain] - feedback: パスポートは不要です。<br>2. はい、明日電車に乗ります。 (好的，我明天搭電車。) [forbidden_or_wrong_domain] - feedback: 交通の場面に変わっています。 | 簡単なレシート確認に答えましょう。 |  |
| t3 | 失礼しました。小さいカップにすぐ交換します。 (不好意思。我馬上換成小杯。) | 小さいカップに交換してくださるんですね。 (您會幫我換成小杯，對嗎？) | 1. 返金ルールを説明してください。 (請說明退款規則。) [wrong_detail_or_domain] - feedback: 返金ルールは広すぎます。<br>2. 警察に通報します。 (我要報警。) [forbidden_or_wrong_domain] - feedback: この場面では強すぎます。 | 交換内容を確認しましょう。 |  |
| t4 | はい、少々お待ちください。 (好的，請稍等。) | ありがとうございます。ここで待ちます。 (謝謝，我在這裡等。) | 1. 病院に行かなければなりません。 (我必須去醫院。) [wrong_detail_or_domain] - feedback: 医療の場面ではありません。<br>2. 部屋を変えたいです。 (我想換房。) [forbidden_or_wrong_domain] - feedback: ホテルの場面に変わっています。 | 待つことを短く伝えましょう。 |  |

---

## a2:ja:a2_explain_simple_delay_reason - 少し遅れる理由を話す

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: 待ち合わせ場所へ向かう途中
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You are running a little late and need to explain the reason.
- Learner goal: Apologize, give one simple reason, and estimate the delay.
- Support text: 友だちが今どこにいるか聞いています。少し遅れることと理由を短く言いましょう。

### Clean Dialogue Path

- 友だち: 今どのあたりですか。もうすぐ着きますか。 (你現在大概在哪裡？快到了嗎？)
- 你: すみません、少し遅れそうです。 (不好意思，我可能會晚一點。)
- 友だち: どうしてですか。 (為什麼呢？)
- 你: バスが遅れているので。 (因為公車晚了。)
- 友だち: どのくらい遅れそうですか。 (你大概會晚多久？)
- 你: 10分くらい遅れそうです。 (我可能會晚 10 分鐘左右。)
- 友だち: わかりました。気をつけて来てください。 (知道了。路上小心過來。)
- 你: ありがとうございます。すぐ行きます。 (謝謝。我很快過去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今どのあたりですか。もうすぐ着きますか。 (你現在大概在哪裡？快到了嗎？) | すみません、少し遅れそうです。 (不好意思，我可能會晚一點。) | 1. はい、昨日着きました。 (對，我昨天到了。) [wrong_time_past] - feedback: 相手は今の状況を聞いています。昨日の到着では答えになりません。<br>2. おすすめのメニューはありますか。 (有推薦的菜單嗎？) [wrong_scenario_restaurant] - feedback: これはレストランの質問です。今は遅れることを伝える場面です。 | 相手は今どこかを確認しています。まず謝って、少し遅れると言いましょう。 |  |
| t2 | どうしてですか。 (為什麼呢？) | バスが遅れているので。 (因為公車晚了。) | 1. バスが好きなので。 (因為我喜歡公車。) [wrong_reason_semantics] - feedback: 文法は使えますが、遅れる理由としては不自然です。<br>2. バス停はどこですか。 (公車站在哪裡？) [wrong_function_location_question] - feedback: 相手は理由を聞いています。場所を聞く場面ではありません。 | 日常的で短い理由を言いましょう。バスが遅れています works for this context. | ので = 因為<br>Use a short reason + ので to explain why something happens.<br>バスが遅れているので = 因為公車晚了<br>道が混んでいるので = 因為路上很塞 |
| t3 | どのくらい遅れそうですか。 (你大概會晚多久？) | 10分くらい遅れそうです。 (我可能會晚 10 分鐘左右。) | 1. 10番のバスが好きです。 (我喜歡 10 號公車。) [wrong_entity_bus_number] - feedback: 10番 is bus number ten. Here you need 10分, ten minutes.<br>2. 遅れていません。 (我沒有遲到。) [contradicts_context] - feedback: 前に少し遅れそうだと言いました。ここでは時間の目安を答えます。 | Use 10分くらい for about ten minutes. |  |
| t4 | わかりました。気をつけて来てください。 (知道了。路上小心過來。) | ありがとうございます。すぐ行きます。 (謝謝。我很快過去。) | 1. 予約しました。 (我預約了。) [wrong_scenario_reservation] - feedback: これは予約の話です。今は遅れる連絡への返事です。<br>2. お会計をお願いします。 (請結帳。) [wrong_scenario_payment] - feedback: これは会計の場面です。ここではお礼を言って向かうことを伝えます。 | 相手が受け入れてくれました。短くお礼を言いましょう。 |  |

---

## a2:ja:a2_fill_simple_form_help - 簡単なフォームを手伝ってもらう

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 低リスクのデジタル・簡単な書類サポートを短いA2表現で扱います。
- Support text: パスワード、支払い、身分証、医療、法律情報は出さず、必要な内容だけ確認します。

### Clean Dialogue Path

- 友だち: まずこのフォームを書いてください。 (請先填這張表。)
- 你: この欄には何を書けばいいですか。 (這一欄要填什麼？)
- 友だち: ここには名前を書いてください。 (這裡請填姓名。)
- 你: 名前だけでいいですか。 (只填姓名就可以嗎？)
- 友だち: はい、電話番号は下の欄です。 (對，電話在下面那一欄。)
- 你: わかりました。下に書きます。 (知道了，我會寫在下面。)
- 友だち: はい、それで十分です。 (對，這樣就夠了。)
- 你: ありがとうございます。書きました。 (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | まずこのフォームを書いてください。 (請先填這張表。) | この欄には何を書けばいいですか。 (這一欄要填什麼？) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t2 | ここには名前を書いてください。 (這裡請填姓名。) | 名前だけでいいですか。 (只填姓名就可以嗎？) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t3 | はい、電話番号は下の欄です。 (對，電話在下面那一欄。) | わかりました。下に書きます。 (知道了，我會寫在下面。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t4 | はい、それで十分です。 (對，這樣就夠了。) | ありがとうございます。書きました。 (謝謝，我填好了。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |

---

## a2:ja:a2_invite_friend_activity - 友だちを気軽に誘う

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_invite_friend_activity
- Setting: 友だちとのチャット
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_activity_invitation","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"not_used_as_translation_source"}
- Learner goal: 友だちを普通の活動に誘い、簡単な時間を決めます。
- Support text: 友だちを気軽な活動に誘い、いつ行くかを短く決めます。

### Clean Dialogue Path

- 友だち: 今日、カフェに行かない？ (今天要不要去咖啡店？)
- 你: 今日、カフェに行かない？ (今天要不要去咖啡店？)
- 友だち: いいね。何時ごろ行く？ (好啊。大概幾點去？)
- 你: 3時ごろはどう？ (3 點左右怎麼樣？)
- 友だち: うん、3時なら大丈夫。 (嗯，3 點可以。)
- 你: じゃあ、駅の前で会おう。 (那在車站前見吧。)
- 友だち: いいよ。じゃあ、あとでね。 (好啊。那等一下見。)
- 你: うん、あとでね。 (嗯，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今日、カフェに行かない？ (今天要不要去咖啡店？) | 今日、カフェに行かない？ (今天要不要去咖啡店？) | 1. お客様、カフェにご案内します。 (客人，我帶您去咖啡店。) [wrong_register_service] - feedback: これは店員のような言い方です。友だちには自然な誘いにしましょう。<br>2. 昨日、カフェに行った？ (你昨天去了咖啡店嗎？) [wrong_time_past_question] - feedback: 過去の質問ではなく、今から一緒に行く誘いです。 | 友だちを自然に誘います。行かない？ is a casual invitation. |  |
| t2 | いいね。何時ごろ行く？ (好啊。大概幾點去？) | 3時ごろはどう？ (3 點左右怎麼樣？) | 1. 3番の席でお願いします。 (請安排 3 號座位。) [wrong_domain_service_seat] - feedback: 席の指定ではありません。友だちと時間を決めています。<br>2. 3時に終わった。 (3 點結束了。) [wrong_function_past_statement] - feedback: ここでは行く時間を提案します。 | 友だちは時間を聞いています。一つ簡単な時間を言いましょう。 | 何時ごろ = 大概幾點<br>Use time + ごろ for an approximate meeting time.<br>3時ごろ = 3 點左右<br>夕方ごろ = 傍晚左右 |
| t3 | うん、3時なら大丈夫。 (嗯，3 點可以。) | じゃあ、駅の前で会おう。 (那在車站前見吧。) | 1. じゃあ、レジで払おう。 (那在收銀台付款吧。) [wrong_domain_payment] - feedback: 支払いではなく、待ち合わせを確認する流れです。<br>2. じゃあ、毎日3時に会おう。 (那每天 3 點見吧。) [too_much_commitment] - feedback: 毎日の約束は重すぎます。今回の予定だけを確認しましょう。 | 時間が決まりました。待ち合わせを短く確認しましょう。 |  |
| t4 | いいよ。じゃあ、あとでね。 (好啊。那等一下見。) | うん、あとでね。 (嗯，等一下見。) | 1. 申し訳ございません。 (非常抱歉。) [wrong_register_formal_apology] - feedback: 友だちとの予定確認には少し硬すぎます。<br>2. 予約をキャンセルします。 (我要取消預約。) [wrong_domain_reservation] - feedback: 予約の話ではありません。友だちとの予定が決まっています。 | 予定が決まりました。自然に返して終わりましょう。 |  |

---

## a2:ja:a2_lost_item_followup_message - 忘れ物について連絡する

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 低リスクのデジタル・簡単な書類サポートを短いA2表現で扱います。
- Support text: パスワード、支払い、身分証、医療、法律情報は出さず、必要な内容だけ確認します。

### Clean Dialogue Path

- 友だち: 何を探していますか。 (您在找什麼？)
- 你: 黒い傘を置いてきたと思います。 (我好像把黑色雨傘忘在那裡。)
- 友だち: どこに置きましたか。 (放在哪裡？)
- 你: カフェの椅子の横だと思います。 (好像放在咖啡店椅子旁邊。)
- 友だち: 名前と連絡先を残してください。 (請留下姓名和聯絡方式。)
- 你: はい、名前と電話番号を残します。 (好，我會留下姓名和電話。)
- 友だち: 確認して連絡します。 (我確認後會聯絡您。)
- 你: ありがとうございます。連絡を待っています。 (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何を探していますか。 (您在找什麼？) | 黒い傘を置いてきたと思います。 (我好像把黑色雨傘忘在那裡。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t2 | どこに置きましたか。 (放在哪裡？) | カフェの椅子の横だと思います。 (好像放在咖啡店椅子旁邊。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t3 | 名前と連絡先を残してください。 (請留下姓名和聯絡方式。) | はい、名前と電話番号を残します。 (好，我會留下姓名和電話。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |
| t4 | 確認して連絡します。 (我確認後會聯絡您。) | ありがとうございます。連絡を待っています。 (謝謝，我等您聯絡。) | 1. パスワードを教えます。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: パスワードはこのA2課題では扱いません。<br>2. 返金してください。 (請退款。) [wrong_dispute_domain] - feedback: 返金やトラブル対応はこの課題の範囲外です。 | 必要な低リスク情報だけを短く確認しましょう。 |  |

---

## a2:ja:a2_luggage_storage_pickup - 荷物を預けて受け取り時間を確認する

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_luggage_storage_pickup
- Setting: 駅の荷物預かり所
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler stores luggage and confirms pickup time with a receipt.
- Learner goal: Ask to store luggage and confirm pickup time/receipt.
- Support text: 駅で荷物を預けます。いつ受け取れるか、何を見せるかを確認しましょう。

### Clean Dialogue Path

- スタッフ: 荷物をお預かりしましょうか。 (需要幫您寄放行李嗎？)
- 你: はい、このバッグを預けたいです。 (是的，我想寄放這個包包。)
- スタッフ: 今日の夜7時までに受け取りに来てください。 (請今天晚上 7 點以前來取。)
- 你: 夜7時までに受け取ればいいですね。 (晚上 7 點前來取就可以，對吧？)
- スタッフ: 受け取るときは、この控えを見せてください。 (取件時請出示這張取件單。)
- 你: はい、受け取るときに控えを見せます。 (好，取件時我會出示取件單。)
- スタッフ: はい。7時までにお越しください。 (好的。請 7 點前過來。)
- 你: ありがとうございます。7時までに来ます。 (謝謝。我會 7 點前來。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 荷物をお預かりしましょうか。 (需要幫您寄放行李嗎？) | はい、このバッグを預けたいです。 (是的，我想寄放這個包包。) | 1. 昨日このバッグを受け取りました。 (我昨天領了這個包包。) [wrong_time_past] - feedback: 今は荷物を預ける場面です。昨日の話ではありません。<br>2. ホームはどこですか。 (月台在哪裡？) [wrong_scenario_platform] - feedback: ここは荷物預かり所です。ホームを聞く場面ではありません。 | このバッグを預けたいと言いましょう。 |  |
| t2 | 今日の夜7時までに受け取りに来てください。 (請今天晚上 7 點以前來取。) | 夜7時までに受け取ればいいですね。 (晚上 7 點前來取就可以，對吧？) | 1. 朝7時に預ければいいですね。 (早上 7 點寄放就可以，對吧？) [wrong_time_pickup] - feedback: スタッフは夜7時までに受け取りに来てくださいと言いました。<br>2. 返金はどこでもらえますか。 (退款在哪裡拿？) [forbidden_refund_domain] - feedback: 返金はこの荷物預かり練習の内容ではありません。 | 受け取りの締め切りは夜7時までです。 | 〜までに = 在...之前<br>7時までに means by/before 7 o'clock.<br>7時までに = 7 點前<br>受け取りに来ます = 來領取 |
| t3 | 受け取るときは、この控えを見せてください。 (取件時請出示這張取件單。) | はい、受け取るときに控えを見せます。 (好，取件時我會出示取件單。) | 1. 控えは捨ててもいいですか。 (取件單可以丟掉嗎？) [wrong_instruction] - feedback: スタッフは控えを見せてくださいと言いました。捨てないほうがいいです。<br>2. パスポートを見せます。 (我會出示護照。) [forbidden_identity_detail] - feedback: この場面ではパスポートではなく控えを見せます。 | 受け取るときに何を見せますか。 |  |
| t4 | はい。7時までにお越しください。 (好的。請 7 點前過來。) | ありがとうございます。7時までに来ます。 (謝謝。我會 7 點前來。) | 1. 電車が10分遅れます。 (電車會晚 10 分鐘。) [wrong_scenario_delay] - feedback: これは遅延案内の場面です。今は荷物の受け取り時間を確認しています。<br>2. なくした荷物を届けたいです。 (我想申報遺失行李。) [forbidden_lost_property_claim] - feedback: 遺失物の届け出はこの低リスクな預かり・受け取り練習の範囲外です。 | 時間と控えを確認しました。短くお礼を言いましょう。 |  |

---

## a2:ja:a2_make_simple_plan_sequence - 二つの流れで予定を決める

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: 友だちとの予定作り
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"two_step_friend_plan","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"not_used_as_translation_source"}
- Learner goal: 友だちと二つだけの予定を作り、先に/そのあとで順番を確認します。
- Support text: 友だちと二つだけの予定を決めます。先に何をして、そのあと何をするかを短く言いましょう。

### Clean Dialogue Path

- 友だち: 先に駅で会おう。 (先在車站見吧。)
- 你: 先に駅で会おう。 (先在車站見吧。)
- 友だち: いいね。そのあと、少し歩く？ (好啊。之後要走走嗎？)
- 你: うん、先に会って、そのあと歩こう。 (嗯，先見面，之後散步吧。)
- 友だち: 何時に駅で会う？ (幾點在車站見？)
- 你: 2時に駅で会おう。 (2 點在車站見吧。)
- 友だち: わかった。2時に会って、そのあと歩こう。 (了解。2 點見，之後散步吧。)
- 你: うん、それでいいよ。 (嗯，這樣可以。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 先に駅で会おう。 (先在車站見吧。) | 先に駅で会おう。 (先在車站見吧。) | 1. 駅で払いましょう。 (在車站付款吧。) [wrong_domain_payment] - feedback: 支払いの話ではありません。最初の待ち合わせを提案します。<br>2. 昨日、駅で会った。 (昨天在車站見了。) [wrong_time_past] - feedback: 過去の話ではなく、これからの予定を作っています。 | まず一つ目の行動を提案します。先に marks the first step. |  |
| t2 | いいね。そのあと、少し歩く？ (好啊。之後要走走嗎？) | うん、先に会って、そのあと歩こう。 (嗯，先見面，之後散步吧。) | 1. うん、歩いたあとで昨日会った。 (嗯，散步之後昨天見面了。) [wrong_time_sequence] - feedback: これからの二つの予定を順番に言います。昨日の話ではありません。<br>2. うん、予約してから返金しよう。 (嗯，預約之後退款吧。) [wrong_domain_complex] - feedback: 予約や返金はこの友だち予定の外です。二つの簡単な行動だけにします。 | 友だちが二つ目の行動を提案しています。順番をまとめましょう。 | 先に / そのあと<br>Use 先に for the first step and そのあと for the next step.<br>先に会う = 先見面<br>そのあと歩く = 之後散步 |
| t3 | 何時に駅で会う？ (幾點在車站見？) | 2時に駅で会おう。 (2 點在車站見吧。) | 1. 2番線で電車が遅れている。 (2 號月台電車誤點了。) [wrong_domain_transport_delay] - feedback: 交通延誤の話ではありません。待ち合わせ時間を答えます。<br>2. 2時間ぐらい説明するね。 (我說明大約兩小時。) [too_long_b1] - feedback: 長い説明は不要です。時間を短く決めましょう。 | 待ち合わせ時間を一つだけ言いましょう。 |  |
| t4 | わかった。2時に会って、そのあと歩こう。 (了解。2 點見，之後散步吧。) | うん、それでいいよ。 (嗯，這樣可以。) | 1. うん、先に帰ろう。 (嗯，先回家吧。) [contradicts_plan] - feedback: 決まった予定を変えてしまっています。確認して終わりましょう。<br>2. うん、チェックインしてください。 (嗯，請辦理入住。) [wrong_domain_hotel] - feedback: ホテルの場面ではありません。友だちとの予定確認です。 | 予定の順番が確認できました。自然に返しましょう。 |  |

---

## a2:ja:a2_plan_tomorrow_morning - 明日の朝の予定を話す

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: 友だちと予定を確認
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A friend asks what you plan to do tomorrow morning.
- Learner goal: Say a near-future plan with one simple sequence and availability.
- Support text: 友だちが明日の朝の予定を聞いています。最初にすることと、その次のことを短く言いましょう。

### Clean Dialogue Path

- 友だち: 明日の朝は何をする予定ですか。 (明天早上你打算做什麼？)
- 你: 朝、図書館に行く予定です。 (早上我打算去圖書館。)
- 友だち: そのあとは何をしますか。 (那之後你要做什麼？)
- 你: そのあと、カフェで勉強する予定です。 (那之後，我打算在咖啡店讀書。)
- 友だち: じゃあ、昼前は少し時間がありますか。 (那午餐前你有一點時間嗎？)
- 你: はい、11時ごろなら大丈夫です。 (可以，11 點左右的話沒問題。)
- 友だち: わかりました。じゃあ、11時に連絡しますね。 (知道了。那我 11 點聯絡你。)
- 你: はい、明日会いましょう。 (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 明日の朝は何をする予定ですか。 (明天早上你打算做什麼？) | 朝、図書館に行く予定です。 (早上我打算去圖書館。) | 1. 昨日、図書館に行きました。 (我昨天去了圖書館。) [wrong_time_past] - feedback: 聞かれているのは明日の朝の予定です。昨日の話ではありません。<br>2. 図書館はどこですか。 (圖書館在哪裡？) [wrong_function_location_question] - feedback: これは場所を聞く文です。ここでは自分の予定を言います。 | 相手は明日の朝の予定を聞いています。予定です、または行くつもりですで答えられます。 |  |
| t2 | そのあとは何をしますか。 (那之後你要做什麼？) | そのあと、カフェで勉強する予定です。 (那之後，我打算在咖啡店讀書。) | 1. カフェで会いましょう。 (我們在咖啡店見吧。) [wrong_function_meeting_place] - feedback: これは待ち合わせの提案です。今は次にすることを聞かれています。<br>2. 今、勉強しました。 (我現在讀過書了。) [wrong_time_aspect] - feedback: 明日の次の予定を言う場面です。過去形は合いません。 | そのあと means after that. Add one simple next step. | 予定です = 打算<br>Use verb dictionary form + 予定です to say what you plan to do.<br>行く予定です = 打算去<br>勉強する予定です = 打算讀書 |
| t3 | じゃあ、昼前は少し時間がありますか。 (那午餐前你有一點時間嗎？) | はい、11時ごろなら大丈夫です。 (可以，11 點左右的話沒問題。) | 1. いいえ、昨日は大丈夫でした。 (不，昨天可以。) [wrong_time_past] - feedback: 相手は明日の昼前のことを聞いています。昨日の話ではありません。<br>2. 図書館は11時に閉まりますか。 (圖書館 11 點關門嗎？) [wrong_focus_facility_hours] - feedback: 今は施設の時間ではなく、あなたに時間があるかを聞かれています。 | 昼前 means before noon or before lunch. Say an approximate time when you are free. |  |
| t4 | わかりました。じゃあ、11時に連絡しますね。 (知道了。那我 11 點聯絡你。) | はい、明日会いましょう。 (好，明天見。) | 1. もう一度注文します。 (我再點一次。) [wrong_scenario_ordering] - feedback: これは注文の場面です。今は明日の予定を確認しています。<br>2. 部屋を変えたいです。 (我想換房間。) [wrong_scenario_hotel] - feedback: これはホテルの場面です。ここでは明日会うことを確認します。 | 予定が確認できました。短く自然に返しましょう。 |  |

---

## a2:ja:a2_report_room_problem - 部屋の問題を伝える

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_report_room_problem
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: 部屋で小さな問題があるとき、短く伝えて、スタッフの対応を確認しましょう。

### Clean Dialogue Path

- ホテルスタッフ: 何かお困りですか。 (有什麼需要幫忙嗎？)
- あなた: 部屋にタオルがありません。お願いできますか。 (房間裡沒有毛巾。可以麻煩您嗎？)
- ホテルスタッフ: はい、すぐにタオルをお持ちします。 (好的，我們馬上把毛巾拿過去。)
- あなた: タオルを持ってきてくれるんですね。 (會拿毛巾過來，對嗎？)
- ホテルスタッフ: 十分ほどかかります。 (大約需要十分鐘。)
- あなた: 十分ほどですね。 (大約十分鐘，對嗎？)
- ホテルスタッフ: お部屋にお届けします。 (我們會送到房間。)
- あなた: ありがとうございます。部屋で待ちます。 (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 何かお困りですか。 (有什麼需要幫忙嗎？) | 部屋にタオルがありません。お願いできますか。 (房間裡沒有毛巾。可以麻煩您嗎？) | 1. 部屋を予約したいです。 (我想訂房。) [wrong_detail_or_domain] - feedback: 今は予約ではなく、部屋の問題を伝える場面です。<br>2. 補償してください。 (請賠償我。) [forbidden_or_wrong_domain] - feedback: 補償の話はこのA2場面の範囲外です。 | 部屋の問題を短く伝えます。 |  |
| t2 | はい、すぐにタオルをお持ちします。 (好的，我們馬上把毛巾拿過去。) | タオルを持ってきてくれるんですね。 (會拿毛巾過來，對嗎？) | 1. 部屋を変えてくれるんですね。 (會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: スタッフは部屋ではなくタオルを持ってくると言っています。<br>2. 電車が遅れるんですね。 (是電車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: これは交通案内ではなくホテルのサービス場面です。 | スタッフが何をするか確認します。 | A2で使う表現<br>この宿泊場面で使いやすい短い表現です。<br>すぐにお持ちします = 馬上拿過去 |
| t3 | 十分ほどかかります。 (大約需要十分鐘。) | 十分ほどですね。 (大約十分鐘，對嗎？) | 1. 一時間後にチェックアウトします。 (一小時後退房。) [wrong_detail_or_domain] - feedback: チェックアウトではなく、タオルが届く時間です。<br>2. 病院に行かなければなりません。 (我必須去醫院。) [forbidden_or_wrong_domain] - feedback: 医療内容はこの課題の範囲外です。 | かかる時間を確認します。 |  |
| t4 | お部屋にお届けします。 (我們會送到房間。) | ありがとうございます。部屋で待ちます。 (謝謝。我在房間等。) | 1. 返金のルールを教えてください。 (請告訴我退款規則。) [wrong_detail_or_domain] - feedback: 返金の話はこの簡単な部屋の問題の範囲外です。<br>2. コーヒーを二つください。 (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: レストラン注文ではなくホテルの部屋サービスです。 | お礼を言って終えます。 |  |

---

## a2:ja:a2_request_room_change - 部屋の変更をお願いする

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_request_room_change
- Setting: ホテルのフロント
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: 簡単な理由を言って、部屋を変えられるか確認しましょう。

### Clean Dialogue Path

- ホテルスタッフ: どうされましたか。 (請問怎麼了？)
- あなた: 部屋が少しうるさいので、変えられますか。 (房間有點吵，可以換房嗎？)
- ホテルスタッフ: 確認しました。別のお部屋が一つあります。 (我確認了，有另一間房。)
- あなた: 別の部屋が一つあるんですね。 (有另一間房，對嗎？)
- ホテルスタッフ: 三十分後に新しいお部屋へ移れます。 (三十分鐘後可以搬到新房間。)
- あなた: 三十分後に移れるんですね。 (三十分鐘後可以搬，對嗎？)
- ホテルスタッフ: 準備できたら新しいカードキーをお渡しします。 (準備好後，我們會給您新房卡。)
- あなた: はい、準備できたらカードキーを受け取ります。 (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | どうされましたか。 (請問怎麼了？) | 部屋が少しうるさいので、変えられますか。 (房間有點吵，可以換房嗎？) | 1. レストランの席を変えられますか。 (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: レストランの席ではなくホテルの部屋です。<br>2. 正式に通報します。 (我要正式通報。) [forbidden_or_wrong_domain] - feedback: 正式な通報や法的手続きはA2範囲外です。 | 部屋変更と理由を短く言います。 |  |
| t2 | 確認しました。別のお部屋が一つあります。 (我確認了，有另一間房。) | 別の部屋が一つあるんですね。 (有另一間房，對嗎？) | 1. 別のチケットが一つあるんですね。 (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: チケットではなく部屋の話です。<br>2. 補償も受けられますか。 (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: 補償の依頼はこの課題の範囲外です。 | 可能な代案を聞きます。 | A2で使う表現<br>この宿泊場面で使いやすい短い表現です。<br>別のお部屋 = 另一間房 |
| t3 | 三十分後に新しいお部屋へ移れます。 (三十分鐘後可以搬到新房間。) | 三十分後に移れるんですね。 (三十分鐘後可以搬，對嗎？) | 1. 三時間後にチェックアウトですね。 (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: スタッフは三十分後に移れると言っています。<br>2. 病院に行くので移ります。 (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: 医療理由はこの課題に入れません。 | 移動できる時間を確認します。 |  |
| t4 | 準備できたら新しいカードキーをお渡しします。 (準備好後，我們會給您新房卡。) | はい、準備できたらカードキーを受け取ります。 (好，準備好後我拿新房卡。) | 1. いいえ、電車の時間を変えます。 (不，我要改電車時間。) [wrong_detail_or_domain] - feedback: 交通チケットではなく部屋変更です。<br>2. すぐ警察に話します。 (我會馬上告訴警察。) [forbidden_or_wrong_domain] - feedback: 警察手続きはこのA2課題の範囲外です。 | 受け入れて終えます。 |  |

---

## a2:ja:a2_reschedule_meeting_time - 待ち合わせの時間を変える

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_reschedule_meeting_time
- Setting: 友だちと時間を調整
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You need to ask a friend to move a meeting time.
- Learner goal: Ask to change a time and confirm the new time.
- Support text: 今日の待ち合わせ時間を少し変えたいです。別の時間にできるか聞いてみましょう。

### Clean Dialogue Path

- 友だち: 今日、3時に会う予定ですよね。 (今天 3 點見，對吧？)
- 你: すみません、時間を変えてもいいですか。 (不好意思，可以改時間嗎？)
- 友だち: 大丈夫です。何時がいいですか。 (可以。幾點比較好？)
- 你: 4時に変えられますか。 (可以改到 4 點嗎？)
- 友だち: はい、4時で大丈夫です。 (好，4 點可以。)
- 你: では、4時に会いましょう。 (那 4 點見。)
- 友だち: わかりました。あとで会いましょう。 (知道了。等一下見。)
- 你: はい、あとで会いましょう。 (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今日、3時に会う予定ですよね。 (今天 3 點見，對吧？) | すみません、時間を変えてもいいですか。 (不好意思，可以改時間嗎？) | 1. はい、昨日会いました。 (對，昨天見過了。) [wrong_time_past] - feedback: 相手は今日3時の予定を確認しています。昨日の話ではありません。<br>2. カードで払います。 (我用卡付款。) [wrong_scenario_payment] - feedback: これは支払いの場面です。今は待ち合わせ時間の変更です。 | 相手は元の時間を確認しています。時間を変えたいと丁寧に言いましょう。 |  |
| t2 | 大丈夫です。何時がいいですか。 (可以。幾點比較好？) | 4時に変えられますか。 (可以改到 4 點嗎？) | 1. 4番出口に行きますか。 (要去 4 號出口嗎？) [wrong_entity_exit_number] - feedback: 4番出口 is exit 4. Here you need a meeting time, 4時.<br>2. 4時に行きました。 (我 4 點去了。) [wrong_time_past] - feedback: これは過去の話です。今は新しい時間を提案します。 | 新しい時間を一つ言いましょう。4時に変える is clear and natural. | 時間 + に変える<br>Use time + に変える to say change to a different time.<br>4時に変える = 改到 4 點<br>明日に変える = 改到明天 |
| t3 | はい、4時で大丈夫です。 (好，4 點可以。) | では、4時に会いましょう。 (那 4 點見。) | 1. では、3時に会いましょう。 (那 3 點見。) [repeats_old_time] - feedback: 新しい時間は4時です。3時は元の時間です。<br>2. 部屋のカードをください。 (請給我房卡。) [wrong_scenario_hotel] - feedback: これはホテルの場面です。今は新しい時間を確認します。 | 新しい時間が決まりました。もう一度短く確認しましょう。 |  |
| t4 | わかりました。あとで会いましょう。 (知道了。等一下見。) | はい、あとで会いましょう。 (好，等一下見。) | 1. 遅れたので。 (因為遲到了。) [fragment_without_need] - feedback: 時間はもう変わりました。ここで理由の断片を足す必要はありません。<br>2. もう一度予約しました。 (我重新預約了。) [wrong_scenario_reservation] - feedback: これは予約の話です。友だちとの待ち合わせ時間を確認する場面です。 | 約束が決まりました。自然に終わりましょう。 |  |

---

## a2:ja:a2_transport_delay_announcement - 交通機関の遅延案内を聞く

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_transport_delay_announcement
- Setting: 駅の案内放送
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler hears a short train delay announcement and chooses what to do.
- Learner goal: Understand the delay time and make one simple travel choice.
- Support text: 駅の案内を聞いて、どのくらい遅れるか確認し、待つか別の方法にするか言いましょう。

### Clean Dialogue Path

- 駅員: お知らせします。電車は10分ほど遅れて到着します。 (通知：電車會晚約 10 分鐘到。)
- 你: 10分ほど遅れるそうです。 (好像會晚約 10 分鐘。)
- 駅員: 10分くらいなら待ちますか。それともバスにしますか。 (如果大約 10 分鐘，您要等嗎？還是改搭公車？)
- 你: 10分くらいなら待ちます。 (如果大約 10 分鐘，我會等。)
- 駅員: 次の電車は10時20分ごろ到着します。 (下一班電車大約 10 點 20 分到。)
- 你: では、10時20分の電車に乗ります。 (那我搭 10 點 20 分的電車。)
- 駅員: はい。このホームでお待ちください。 (好的。請在這個月台等候。)
- 你: わかりました。ここで待ちます。 (了解。我會在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | お知らせします。電車は10分ほど遅れて到着します。 (通知：電車會晚約 10 分鐘到。) | 10分ほど遅れるそうです。 (好像會晚約 10 分鐘。) | 1. すぐに出発するそうです。 (好像馬上出發。) [wrong_delay_meaning] - feedback: 案内はすぐ出発ではなく、10分ほど遅れると言っています。<br>2. 切符を変えるそうです。 (好像要改票。) [wrong_scenario_ticket_change] - feedback: 切符の変更ではなく、電車の遅れの案内です。 | ポイントは10分ほど遅れて到着します。どのくらい遅れますか。 |  |
| t2 | 10分くらいなら待ちますか。それともバスにしますか。 (如果大約 10 分鐘，您要等嗎？還是改搭公車？) | 10分くらいなら待ちます。 (如果大約 10 分鐘，我會等。) | 1. 昨日待ちました。 (我昨天等了。) [wrong_time_past] - feedback: 今どうするかを言う場面です。昨日の話ではありません。<br>2. 領収書をください。 (請給我收據。) [wrong_service_receipt] - feedback: ここでは領収書ではなく、待つか別の方法にするかを答えます。 | 10分くらいなら means if it is about ten minutes. | なら = 如果是／的話<br>10分くらいなら can introduce a simple condition before your choice.<br>10分くらいなら = 如果大約 10 分鐘<br>待ちます = 我會等 |
| t3 | 次の電車は10時20分ごろ到着します。 (下一班電車大約 10 點 20 分到。) | では、10時20分の電車に乗ります。 (那我搭 10 點 20 分的電車。) | 1. 10時20分に店は閉まりますか。 (店 10 點 20 分關門嗎？) [wrong_function_business_hours] - feedback: その時間は店の時間ではなく、次の電車の到着時間です。<br>2. バスの切符を返金したいです。 (我想退公車票。) [forbidden_refund_escalation] - feedback: 返金の話はこのA2練習の範囲を超えます。電車の時間を確認しましょう。 | 次の電車の時間を確認しましょう。 |  |
| t4 | はい。このホームでお待ちください。 (好的。請在這個月台等候。) | わかりました。ここで待ちます。 (了解。我會在這裡等。) | 1. 部屋を変えてください。 (請幫我換房間。) [wrong_scenario_hotel] - feedback: これはホテルの場面です。今は駅のホームで待つ場面です。<br>2. 病院を予約したいです。 (我想預約醫院。) [forbidden_medical_domain] - feedback: 医療予約はこの交通場面とは関係ありません。 | 場所が確認できました。短く返しましょう。 |  |

---

## a2:ja:a2_understand_hotel_notice - ホテルの案内を理解する

- Level: A2
- Language: Japanese (ja)
- Scenario ID: a2_understand_hotel_notice
- Setting: ホテルのロビー
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: ホテルの短い案内から、時間・場所・ルールを確認しましょう。

### Clean Dialogue Path

- ホテルスタッフ: 案内をご覧ください。朝食は朝七時から九時までです。 (請看公告。早餐是早上七點到九點。)
- あなた: 朝食は朝七時から九時までですね。 (早餐是早上七點到九點，對嗎？)
- ホテルスタッフ: 場所は二階のレストランです。 (地點是二樓餐廳。)
- あなた: 二階のレストランに行けばいいですね。 (去二樓餐廳就可以，對嗎？)
- ホテルスタッフ: 入口で部屋番号だけお伝えください。 (入口只要告知房號即可。)
- あなた: 入口で部屋番号だけ言えばいいですね。 (入口只要說房號就可以，對嗎？)
- ホテルスタッフ: はい、明日の朝お越しください。 (對，明天早上來就可以。)
- あなた: はい、明日の朝、二階のレストランに行きます。 (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 案内をご覧ください。朝食は朝七時から九時までです。 (請看公告。早餐是早上七點到九點。) | 朝食は朝七時から九時までですね。 (早餐是早上七點到九點，對嗎？) | 1. 朝食は夜七時から九時までですね。 (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: 案内は朝七時から九時までと言っています。<br>2. チェックアウトは朝九時ですね。 (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: これはチェックアウトではなく朝食時間の案内です。 | 案内から時間を探します。 |  |
| t2 | 場所は二階のレストランです。 (地點是二樓餐廳。) | 二階のレストランに行けばいいですね。 (去二樓餐廳就可以，對嗎？) | 1. 三階の部屋に行けばいいですね。 (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: 場所は三階の部屋ではなく二階のレストランです。<br>2. パスポートを見せればいいですね。 (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: パスポートはこの案内確認に必要ありません。 | 場所を確認します。 | A2で使う表現<br>この宿泊場面で使いやすい短い表現です。<br>二階のレストラン = 二樓餐廳 |
| t3 | 入口で部屋番号だけお伝えください。 (入口只要告知房號即可。) | 入口で部屋番号だけ言えばいいですね。 (入口只要說房號就可以，對嗎？) | 1. 入口で警察に話せばいいですね。 (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: 警察手続きではなくホテルの朝食案内です。<br>2. 入口で返金を受ければいいですね。 (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: 返金はこの案内理解の課題と合いません。 | 簡単な条件を確認します。 |  |
| t4 | はい、明日の朝お越しください。 (對，明天早上來就可以。) | はい、明日の朝、二階のレストランに行きます。 (好，我明天早上去二樓餐廳。) | 1. はい、今夜クリーニングを受け取ります。 (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: クリーニングではなく朝食案内です。<br>2. はい、事故の報告書を書きます。 (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: 事故報告や法的文書は範囲外です。 | 何をするか確認して終えます。 |  |

---
