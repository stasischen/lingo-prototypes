# A2 Chinese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:zh:a2_app_booking_confirmation - 確認 App 預約

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的數位或簡單表格協助。
- Support text: 只確認必要資訊，不提供密碼、付款資料、敏感身分資料、法律或醫療資訊。

### Clean Dialogue Path

- 工作人員: 你的預約確認是今天下午三點。 (預約確認為今天下午三點。)
- 你: 地點在哪裡？ (地點在哪裡？)
- 工作人員: 在咖啡店二樓。 (在咖啡店二樓。)
- 你: 所以是在咖啡店二樓，對嗎？ (是在咖啡店二樓，對嗎？)
- 工作人員: 對，預約姓名是 Mina。 (對，預約姓名是 Mina。)
- 你: 對，是我的名字。 (對，是我的名字。)
- 工作人員: 那下午三點見。 (那下午三點見。)
- 你: 好，我下午三點會去。 (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你的預約確認是今天下午三點。 (預約確認為今天下午三點。) | 地點在哪裡？ (地點在哪裡？) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t2 | 在咖啡店二樓。 (在咖啡店二樓。) | 所以是在咖啡店二樓，對嗎？ (是在咖啡店二樓，對嗎？) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t3 | 對，預約姓名是 Mina。 (對，預約姓名是 Mina。) | 對，是我的名字。 (對，是我的名字。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t4 | 那下午三點見。 (那下午三點見。) | 好，我下午三點會去。 (好，我下午三點會去。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |

---

## a2:zh:a2_ask_ingredient_preference - 詢問食材偏好

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_ask_ingredient_preference
- Setting: 餐廳櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 詢問是否有常見食材，並依照偏好選擇。
- Support text: 詢問是否有常見食材，並依照偏好選擇。

### Clean Dialogue Path

- 店員: 您想點什麼？ (您想點什麼？)
- 你: 這個沙拉裡有洋蔥嗎？ (這個沙拉裡有洋蔥嗎？)
- 店員: 有，放一點洋蔥。 (有，放一點洋蔥。)
- 你: 有一點洋蔥，對嗎？ (有一點洋蔥，對嗎？)
- 店員: 如果您想要，可以不加洋蔥。 (如果您想要，可以不加洋蔥。)
- 你: 好的，請不要加洋蔥。 (好的，請不要加洋蔥。)
- 店員: 可以，我會準備不加洋蔥的。 (可以，我會準備不加洋蔥的。)
- 你: 謝謝，請這樣做。 (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您想點什麼？ (您想點什麼？) | 這個沙拉裡有洋蔥嗎？ (這個沙拉裡有洋蔥嗎？) | 1. 這個沙拉在幾樓？ (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: 樓層和食材無關。<br>2. 請幫我改票的時間。 (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: 這變成票券情境。 | 詢問是否有常見食材。 |  |
| t2 | 有，放一點洋蔥。 (有，放一點洋蔥。) | 有一點洋蔥，對嗎？ (有一點洋蔥，對嗎？) | 1. 有很多肉，對嗎？ (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: 店員沒有提到肉。<br>2. 房間很吵，對嗎？ (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: 這變成飯店問題。 | 確認食材資訊。 |  |
| t3 | 如果您想要，可以不加洋蔥。 (如果您想要，可以不加洋蔥。) | 好的，請不要加洋蔥。 (好的，請不要加洋蔥。) | 1. 好的，請給我過敏藥。 (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: 藥物/過敏處理不在這個任務內。<br>2. 好的，請退款。 (好的，請退款。) [forbidden_or_wrong_domain] - feedback: 這不是退款請求。 | 用偏好來選擇，不進入醫療。 |  |
| t4 | 可以，我會準備不加洋蔥的。 (可以，我會準備不加洋蔥的。) | 謝謝，請這樣做。 (謝謝，請這樣做。) | 1. 請告訴我護照號碼。 (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: 這裡不需要護照資料。<br>2. 我想寄放行李。 (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: 這變成寄放行李。 | 用確認訂單收尾。 |  |

---

## a2:zh:a2_ask_late_checkout - 詢問延後退房

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_ask_late_checkout
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: 詢問是否可以晚一點退房，並確認最後退房時間。

### Clean Dialogue Path

- Empleado del hotel: 我可以怎麼幫您？ (我可以怎麼幫您？)
- Tú: 我可以晚一點退房嗎？ (我可以晚一點退房嗎？)
- Empleado del hotel: 今天可以延到下午一點退房。 (今天可以延到下午一點退房。)
- Tú: 可以到下午一點，對嗎？ (可以到下午一點，對嗎？)
- Empleado del hotel: 請在中午前到櫃台出示房卡。 (請在中午前到櫃台出示房卡。)
- Tú: 我中午前出示房卡，對嗎？ (我中午前出示房卡，對嗎？)
- Empleado del hotel: 好的，我幫您記成下午一點退房。 (好的，我幫您記成下午一點退房。)
- Tú: 謝謝，我下午一點退房。 (謝謝，我下午一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我可以怎麼幫您？ (我可以怎麼幫您？) | 我可以晚一點退房嗎？ (我可以晚一點退房嗎？) | 1. 我可以晚一點入住嗎？ (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: 入住和退房相反。<br>2. 可以降低價格嗎？ (可以降低價格嗎？) [forbidden_or_wrong_domain] - feedback: 價格不是這個任務。 | 詢問延後退房。 |  |
| t2 | 今天可以延到下午一點退房。 (今天可以延到下午一點退房。) | 可以到下午一點，對嗎？ (可以到下午一點，對嗎？) | 1. 可以到十點，對嗎？ (可以到十點，對嗎？) [wrong_detail_or_domain] - feedback: 十點是錯誤時間。<br>2. 我想再訂一間房。 (我想再訂一間房。) [forbidden_or_wrong_domain] - feedback: 這裡不是重新訂房。 | 確認最後時間。 |  |
| t3 | 請在中午前到櫃台出示房卡。 (請在中午前到櫃台出示房卡。) | 我中午前出示房卡，對嗎？ (我中午前出示房卡，對嗎？) | 1. 我告訴您我的護照號碼，對嗎？ (我告訴您我的護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: 這裡不需要護照號碼。<br>2. 我晚上七點拿行李，對嗎？ (我晚上七點拿行李，對嗎？) [forbidden_or_wrong_domain] - feedback: 行李是另一個服務。 | 確認簡單要求。 |  |
| t4 | 好的，我幫您記成下午一點退房。 (好的，我幫您記成下午一點退房。) | 謝謝，我下午一點退房。 (謝謝，我下午一點退房。) | 1. 我要申請退款。 (我要申請退款。) [wrong_detail_or_domain] - feedback: 退款不是這個任務。<br>2. 明天早上我要搭火車。 (明天早上我要搭火車。) [forbidden_or_wrong_domain] - feedback: 火車是其他情境。 | 用確認的時間結束。 |  |

---

## a2:zh:a2_ask_recommendation_budget - 在預算內請人推薦

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_ask_recommendation_budget
- Setting: 小商店
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 在小額預算內請店員推薦，並簡短說出偏好。
- Support text: 在小額預算內請店員推薦，並簡短說出偏好。

### Clean Dialogue Path

- 店員: 您在找什麼？ (您在找什麼？)
- 你: 可以推薦三百元以內的禮物嗎？ (可以推薦三百元以內的禮物嗎？)
- 店員: 想要輕巧的，還是實用的？ (想要輕巧的，還是實用的？)
- 你: 請推薦實用的。 (請推薦實用的。)
- 店員: 那這本小筆記本在三百元以內。 (那這本小筆記本在三百元以內。)
- 你: 那本筆記本在三百元以內，對嗎？ (那本筆記本在三百元以內，對嗎？)
- 店員: 對，也可以包裝成禮物。 (對，也可以包裝成禮物。)
- 你: 很好，我要那本筆記本。 (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您在找什麼？ (您在找什麼？) | 可以推薦三百元以內的禮物嗎？ (可以推薦三百元以內的禮物嗎？) | 1. 請查看我的銀行帳戶。 (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: 這不是銀行任務。<br>2. 我想申報遺失物。 (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: 申報遺失物是另一個任務。 | 在小額預算內請店員推薦。 |  |
| t2 | 想要輕巧的，還是實用的？ (想要輕巧的，還是實用的？) | 請推薦實用的。 (請推薦實用的。) | 1. 請推薦辣的。 (請推薦辣的。) [wrong_detail_or_domain] - feedback: 辣比較像餐點偏好，不是這個禮物請求。<br>2. 我想晚點退房。 (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: 這變成飯店情境。 | 說出簡單偏好。 |  |
| t3 | 那這本小筆記本在三百元以內。 (那這本小筆記本在三百元以內。) | 那本筆記本在三百元以內，對嗎？ (那本筆記本在三百元以內，對嗎？) | 1. 那個房間在三百元以內，對嗎？ (那個房間在三百元以內，對嗎？) [wrong_detail_or_domain] - feedback: 房間不是推薦商品。<br>2. 那張票是昨天的，對嗎？ (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: 這變成票券情境。 | 確認推薦品和預算。 |  |
| t4 | 對，也可以包裝成禮物。 (對，也可以包裝成禮物。) | 很好，我要那本筆記本。 (很好，我要那本筆記本。) | 1. 請退款。 (請退款。) [wrong_detail_or_domain] - feedback: 這不是退款請求。<br>2. 請查看我的保險。 (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: 保險超出這個低風險任務。 | 禮貌接受推薦。 |  |

---

## a2:zh:a2_ask_transfer_platform - 詢問轉乘月台

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_ask_transfer_platform
- Setting: 車站服務台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: 詢問在哪裡轉乘，聽懂站名和月台，並確認簡短路線。

### Clean Dialogue Path

- 站務人員: 您要去哪裡？ (您要去哪裡？)
- 你: 我要去機場，請問在哪裡轉乘？ (詢問轉乘)
- 站務人員: 請在 Central 下車，然後到三號月台。 (請在 Central 下車，然後到 3 號月台。)
- 你: 在 Central 下車，然後到三號月台，對嗎？ (確認路線)
- 站務人員: 在三號月台搭往機場的車。 (在 3 號月台搭往機場的車。)
- 你: 我在三號月台搭往機場的車，對嗎？ (確認月台與方向)
- 站務人員: 對，請在 Central 轉乘。 (對，請在 Central 轉乘。)
- 你: 謝謝，我會在 Central 轉乘。 (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您要去哪裡？ (您要去哪裡？) | 我要去機場，請問在哪裡轉乘？ (詢問轉乘) | 1. 我昨天去了機場。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我想寄放行李。 (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 詢問轉乘 |  |
| t2 | 請在 Central 下車，然後到三號月台。 (請在 Central 下車，然後到 3 號月台。) | 在 Central 下車，然後到三號月台，對嗎？ (確認路線) | 1. 在 Central 喝咖啡，對嗎？ (錯誤動作) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 去三號房，對嗎？ (錯誤地點) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認兩步指示 |  |
| t3 | 在三號月台搭往機場的車。 (在 3 號月台搭往機場的車。) | 我在三號月台搭往機場的車，對嗎？ (確認月台與方向) | 1. 往機場的車昨天來了。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 緊急時要去哪裡？ (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認方向 |  |
| t4 | 對，請在 Central 轉乘。 (對，請在 Central 轉乘。) | 謝謝，我會在 Central 轉乘。 (禮貌收尾) | 1. 我要改票時間。 (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我會在機場報警。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 收尾 |  |

---

## a2:zh:a2_change_delivery_pickup_time - 更改取貨時間

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的數位或簡單表格協助。
- Support text: 只確認必要資訊，不提供密碼、付款資料、敏感身分資料、法律或醫療資訊。

### Clean Dialogue Path

- 工作人員: 你今天四點取貨。 (今天四點取貨。)
- 你: 可以改取貨時間嗎？ (可以改取貨時間嗎？)
- 工作人員: 可以，五點可以。 (可以，五點可以。)
- 你: 那請改成五點。 (那請改成五點。)
- 工作人員: 所以改成五點嗎？ (改成五點嗎？)
- 你: 對，五點可以。 (對，五點可以。)
- 工作人員: 好，我會改成五點。 (好的，我會改成五點。)
- 你: 謝謝，我五點會去。 (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你今天四點取貨。 (今天四點取貨。) | 可以改取貨時間嗎？ (可以改取貨時間嗎？) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t2 | 可以，五點可以。 (可以，五點可以。) | 那請改成五點。 (那請改成五點。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t3 | 所以改成五點嗎？ (改成五點嗎？) | 對，五點可以。 (對，五點可以。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t4 | 好，我會改成五點。 (好的，我會改成五點。) | 謝謝，我五點會去。 (謝謝，我五點會去。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |

---

## a2:zh:a2_change_ticket_time - 更改票券時間

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_change_ticket_time
- Setting: 車站售票窗口
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: 向櫃台要求更改票券時間，聽懂可用時間，並確認新的班次。

### Clean Dialogue Path

- 站務人員: 您好，需要幫忙嗎？ (您好，我可以怎麼幫您？)
- 你: 我想更改票券時間。 (提出請求)
- 站務人員: 可以改成今天下午三點的車。 (可以改成下午 3 點的車。)
- 你: 好，請幫我改成下午三點。 (接受新時間)
- 站務人員: 確認改成下午三點，對嗎？ (那就改成新的時間，對嗎？)
- 你: 對，下午三點可以。 (確認時間)
- 站務人員: 已經更改好了，請搭下午三點那班。 (已經改好了，請搭新的班次。)
- 你: 謝謝，我會搭下午三點那班。 (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，我可以怎麼幫您？) | 我想更改票券時間。 (提出請求) | 1. 票是昨天的。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 請給我一杯咖啡。 (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 提出改時間 |  |
| t2 | 可以改成今天下午三點的車。 (可以改成下午 3 點的車。) | 好，請幫我改成下午三點。 (接受新時間) | 1. 三點有房間嗎？ (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我昨天三點搭了。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 接受可用時間 |  |
| t3 | 確認改成下午三點，對嗎？ (那就改成新的時間，對嗎？) | 對，下午三點可以。 (確認時間) | 1. 不是，三點是昨天。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 請說明退款規則。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認時間 |  |
| t4 | 已經更改好了，請搭下午三點那班。 (已經改好了，請搭新的班次。) | 謝謝，我會搭下午三點那班。 (禮貌收尾) | 1. 我明天喝咖啡。 (錯誤主題) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我的護照號碼是什麼？ (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 收尾 |  |

---

## a2:zh:a2_compare_two_menu_options - 比較兩個菜單選項

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_compare_two_menu_options
- Setting: 餐廳櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 聽懂兩個菜單選項的差異，選擇自己偏好的項目。
- Support text: 聽懂兩個菜單選項的差異，選擇自己偏好的項目。

### Clean Dialogue Path

- 店員: 今天可以選飯碗或湯麵。 (今天可以選飯碗或湯麵。)
- 你: 兩個選項有什麼不同？ (兩個選項有什麼不同？)
- 店員: 飯碗有點辣，湯麵比較清爽。 (飯碗有點辣，湯麵比較清爽。)
- 你: 湯麵比較清爽，對嗎？ (湯麵比較清爽，對嗎？)
- 店員: 對，湯麵比較不辣。 (對，湯麵比較不辣。)
- 你: 那我要湯麵。 (那我要湯麵。)
- 店員: 好的，我幫您點一份湯麵。 (好的，我幫您點一份湯麵。)
- 你: 謝謝，請給我一份湯麵。 (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今天可以選飯碗或湯麵。 (今天可以選飯碗或湯麵。) | 兩個選項有什麼不同？ (兩個選項有什麼不同？) | 1. 我的桌子在哪裡？ (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: 這是在問桌子，不是比較菜單。<br>2. 我想退款。 (我想退款。) [forbidden_or_wrong_domain] - feedback: 退款超出這個 A2 任務。 | 詢問兩個選項的差異。 |  |
| t2 | 飯碗有點辣，湯麵比較清爽。 (飯碗有點辣，湯麵比較清爽。) | 湯麵比較清爽，對嗎？ (湯麵比較清爽，對嗎？) | 1. 飯碗比較便宜，對嗎？ (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: 店員沒有提到價格。<br>2. 火車比較快，對嗎？ (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: 這變成交通情境。 | 確認聽到的比較資訊。 |  |
| t3 | 對，湯麵比較不辣。 (對，湯麵比較不辣。) | 那我要湯麵。 (那我要湯麵。) | 1. 那我要換房間。 (那我要換房間。) [wrong_detail_or_domain] - feedback: 這變成飯店情境。<br>2. 那我要出示護照。 (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: 這裡不需要護照。 | 依照偏好選擇。 |  |
| t4 | 好的，我幫您點一份湯麵。 (好的，我幫您點一份湯麵。) | 謝謝，請給我一份湯麵。 (謝謝，請給我一份湯麵。) | 1. 我要報警。 (我要報警。) [wrong_detail_or_domain] - feedback: 這個反應太嚴重。<br>2. 我明天需要去醫院。 (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: 這不是醫療情境。 | 禮貌確認選好的餐點。 |  |

---

## a2:zh:a2_confirm_date_time_place - 確認日期時間地點

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_confirm_date_time_place
- Setting: 看朋友的訊息
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: 朋友提到一則短訊息，你要確認日期、時間和地點。
- Learner goal: 從短訊息中抓出日期、時間和地點，並用簡短問題確認。
- Support text: 朋友傳來短訊息。你要確認星期、時間和地點，不需要問路或看地圖。

### Clean Dialogue Path

- 朋友: 我剛剛傳訊息給你：這週六下午三點，在市立圖書館門口見。 (我剛剛傳訊息給你：這週六下午三點，在市立圖書館門口見。)
- 你: 是這週六下午三點，對嗎？ (是這週六下午三點，對嗎？)
- 朋友: 對，這週六下午三點。 (對，這週六下午三點。)
- 你: 地點是在市立圖書館門口嗎？ (地點是在市立圖書館門口嗎？)
- 朋友: 對，在市立圖書館門口。 (對，在市立圖書館門口。)
- 你: 好，這週六下午三點，在圖書館門口。 (好，這週六下午三點，在圖書館門口。)
- 朋友: 沒錯，到時候見。 (沒錯，到時候見。)
- 你: 好，到時候見。 (好，到時候見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我剛剛傳訊息給你：這週六下午三點，在市立圖書館門口見。 (我剛剛傳訊息給你：這週六下午三點，在市立圖書館門口見。) | 是這週六下午三點，對嗎？ (是這週六下午三點，對嗎？) | 1. 是這週日早上三點，對嗎？ (是這週日早上三點，對嗎？) [wrong_date_time] - feedback: 訊息說這週六下午三點，不是週日早上三點。<br>2. 我要改到四點，對嗎？ (我要改到四點，對嗎？) [wrong_scenario_reschedule] - feedback: 這是在改時間。現在只是確認訊息內容。 | 先確認日期和時間。 |  |
| t2 | 對，這週六下午三點。 (對，這週六下午三點。) | 地點是在市立圖書館門口嗎？ (地點是在市立圖書館門口嗎？) | 1. 地點是在市立圖書館裡面嗎？ (地點是在市立圖書館裡面嗎？) [wrong_place_relation] - feedback: 訊息說門口，不是裡面。<br>2. 公車站在哪裡？ (公車站在哪裡？) [navigation_out_of_scope] - feedback: 這是在問路。這個場景只確認訊息中的地點。 | 日期和時間已確認。接著問地點。 | ...對嗎？<br>用「...對嗎？」確認訊息中的重點。<br>是這週六，對嗎？ = 是這週六，對嗎？<br>在圖書館門口，對嗎？ = 在圖書館門口，對嗎？ |
| t3 | 對，在市立圖書館門口。 (對，在市立圖書館門口。) | 好，這週六下午三點，在圖書館門口。 (好，這週六下午三點，在圖書館門口。) | 1. 好，這週六上午三點，在圖書館門口。 (好，這週六上午三點，在圖書館門口。) [wrong_time] - feedback: 訊息說下午三點，不是上午三點。<br>2. 好，這週六下午三點，在車站門口。 (好，這週六下午三點，在車站門口。) [wrong_place] - feedback: 訊息說圖書館門口，不是車站門口。 | 現在三個資訊都清楚了，可以完整確認一次。 |  |
| t4 | 沒錯，到時候見。 (沒錯，到時候見。) | 好，到時候見。 (好，到時候見。) | 1. 不好意思，我會晚十分鐘。 (不好意思，我會晚十分鐘。) [wrong_scenario_delay] - feedback: 這是在說會遲到，不是確認訊息後收尾。<br>2. 可以改到四點嗎？ (可以改到四點嗎？) [wrong_scenario_reschedule] - feedback: 這是在改時間。這裡只要自然結尾。 | 資訊都確認好了，簡短收尾。 |  |

---

## a2:zh:a2_decline_with_reason - 用簡單理由婉拒

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_decline_with_reason
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的朋友日常協調。
- Support text: 使用自然的朋友語氣，活動和理由都保持普通、簡短。

### Clean Dialogue Path

- 朋友: 今晚要不要看電影？ (今晚要看電影嗎？)
- 你: 不好意思，我今晚不太行。 (不好意思，我今晚不太行。)
- 朋友: 沒關係，你很忙嗎？ (沒關係。你很忙嗎？)
- 你: 我還有一點事要做。 (我還有一點事要做。)
- 朋友: 也許改天？ (也許改天？)
- 你: 好，也許這個週末可以。 (好，也許這個週末可以。)
- 朋友: 好，那週末再說。 (好，那週末再說。)
- 你: 謝謝你。週末見。 (謝謝你。週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 今晚要不要看電影？ (今晚要看電影嗎？) | 不好意思，我今晚不太行。 (不好意思，我今晚不太行。) | 1. 不要，我不想。 (不要，我不想。) [too_blunt] - feedback: 這不符合目前的朋友情境。<br>2. 請再給我收據。 (請再給我收據。) [wrong_scenario_shop] - feedback: 這樣對朋友來說太強硬。 | Keep the refusal brief and warm. |  |
| t2 | 沒關係，你很忙嗎？ (沒關係。你很忙嗎？) | 我還有一點事要做。 (我還有一點事要做。) | 1. 不要，我不想。 (不要，我不想。) [too_blunt] - feedback: 這不符合目前的朋友情境。<br>2. 請再給我收據。 (請再給我收據。) [wrong_scenario_shop] - feedback: 這樣對朋友來說太強硬。 | Keep the refusal brief and warm. |  |
| t3 | 也許改天？ (也許改天？) | 好，也許這個週末可以。 (好，也許這個週末可以。) | 1. 不要，我不想。 (不要，我不想。) [too_blunt] - feedback: 這不符合目前的朋友情境。<br>2. 請再給我收據。 (請再給我收據。) [wrong_scenario_shop] - feedback: 這樣對朋友來說太強硬。 | Keep the refusal brief and warm. |  |
| t4 | 好，那週末再說。 (好，那週末再說。) | 謝謝你。週末見。 (謝謝你。週末見。) | 1. 不要，我不想。 (不要，我不想。) [too_blunt] - feedback: 這不符合目前的朋友情境。<br>2. 請再給我收據。 (請再給我收據。) [wrong_scenario_shop] - feedback: 這樣對朋友來說太強硬。 | Keep the refusal brief and warm. |  |

---

## a2:zh:a2_describe_weekend_activity - 說週末做了什麼

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_describe_weekend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的朋友日常協調。
- Support text: 使用自然的朋友語氣，活動和理由都保持普通、簡短。

### Clean Dialogue Path

- 朋友: 你週末做了什麼？ (你週末做了什麼？)
- 你: 我跟朋友見面，還吃了午餐。 (我跟朋友見面，還吃了午餐。)
- 朋友: 你們在哪裡見？ (你們在哪裡見面？)
- 你: 我們在我家附近的咖啡店見。 (我們在我家附近的咖啡店見。)
- 朋友: 還不錯嗎？ (還不錯嗎？)
- 你: 嗯，很安靜，也滿舒服的。 (嗯，很安靜，也滿舒服的。)
- 朋友: 聽起來不錯。下次我也一起去。 (聽起來不錯。下次我也一起去。)
- 你: 好，下次一起去。 (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你週末做了什麼？ (你週末做了什麼？) | 我跟朋友見面，還吃了午餐。 (我跟朋友見面，還吃了午餐。) | 1. 我明天會見朋友。 (我明天會見朋友。) [wrong_time_future] - feedback: 這不符合目前的朋友情境。<br>2. 我要去哪個月台？ (我要去哪個月台？) [wrong_scenario_transport] - feedback: 這樣對朋友來說太強硬。 | Use a short A2 past-time answer. |  |
| t2 | 你們在哪裡見？ (你們在哪裡見面？) | 我們在我家附近的咖啡店見。 (我們在我家附近的咖啡店見。) | 1. 我明天會見朋友。 (我明天會見朋友。) [wrong_time_future] - feedback: 這不符合目前的朋友情境。<br>2. 我要去哪個月台？ (我要去哪個月台？) [wrong_scenario_transport] - feedback: 這樣對朋友來說太強硬。 | Use a short A2 past-time answer. |  |
| t3 | 還不錯嗎？ (還不錯嗎？) | 嗯，很安靜，也滿舒服的。 (嗯，很安靜，也滿舒服的。) | 1. 我明天會見朋友。 (我明天會見朋友。) [wrong_time_future] - feedback: 這不符合目前的朋友情境。<br>2. 我要去哪個月台？ (我要去哪個月台？) [wrong_scenario_transport] - feedback: 這樣對朋友來說太強硬。 | Use a short A2 past-time answer. |  |
| t4 | 聽起來不錯。下次我也一起去。 (聽起來不錯。下次我也一起去。) | 好，下次一起去。 (好，下次一起去。) | 1. 我明天會見朋友。 (我明天會見朋友。) [wrong_time_future] - feedback: 這不符合目前的朋友情境。<br>2. 我要去哪個月台？ (我要去哪個月台？) [wrong_scenario_transport] - feedback: 這樣對朋友來說太強硬。 | Use a short A2 past-time answer. |  |

---

## a2:zh:a2_exchange_wrong_item - 更換拿錯的商品

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_exchange_wrong_item
- Setting: 商店櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 禮貌說明拿到的商品不對，請店員換成正確的。
- Support text: 禮貌說明拿到的商品不對，請店員換成正確的。

### Clean Dialogue Path

- 店員: 需要幫忙嗎？ (需要幫忙嗎？)
- 你: 我訂的是小杯，但拿到大杯。 (我訂的是小杯，但拿到大杯。)
- 店員: 我確認一下。可以看收據嗎？ (我確認一下。可以看收據嗎？)
- 你: 可以，這是收據。 (可以，這是收據。)
- 店員: 您說得對。我現在可以換成小杯。 (您說得對。我現在可以換成小杯。)
- 你: 您會幫我換成小杯，對嗎？ (您會幫我換成小杯，對嗎？)
- 店員: 好的，請稍等。 (好的，請稍等。)
- 你: 謝謝，我在這裡等。 (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 需要幫忙嗎？ (需要幫忙嗎？) | 我訂的是小杯，但拿到大杯。 (我訂的是小杯，但拿到大杯。) | 1. 小杯在哪裡製作？ (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: 製作地點不是問題。<br>2. 請降價。 (請降價。) [forbidden_or_wrong_domain] - feedback: 殺價不在這個任務內。 | 說明拿到的商品和訂的不一樣。 |  |
| t2 | 我確認一下。可以看收據嗎？ (我確認一下。可以看收據嗎？) | 可以，這是收據。 (可以，這是收據。) | 1. 可以，這是護照。 (可以，這是護照。) [wrong_detail_or_domain] - feedback: 這裡不需要護照。<br>2. 可以，我明天搭火車。 (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: 這變成交通情境。 | 回應簡單的收據確認。 |  |
| t3 | 您說得對。我現在可以換成小杯。 (您說得對。我現在可以換成小杯。) | 您會幫我換成小杯，對嗎？ (您會幫我換成小杯，對嗎？) | 1. 請說明退款規則。 (請說明退款規則。) [wrong_detail_or_domain] - feedback: 退款規則太廣。<br>2. 我要報警。 (我要報警。) [forbidden_or_wrong_domain] - feedback: 這個反應太嚴重。 | 確認更換內容。 |  |
| t4 | 好的，請稍等。 (好的，請稍等。) | 謝謝，我在這裡等。 (謝謝，我在這裡等。) | 1. 我需要去醫院。 (我需要去醫院。) [wrong_detail_or_domain] - feedback: 這不是醫療情境。<br>2. 我想換房。 (我想換房。) [forbidden_or_wrong_domain] - feedback: 這變成飯店情境。 | 接受等待並結束。 |  |

---

## a2:zh:a2_explain_simple_delay_reason - 說明簡單遲到原因

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: 傳訊息給朋友
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: 朋友問你快到了沒，你要說會晚一點到並給一個簡單原因。
- Learner goal: 道歉、說會晚一點到，並給一個安全日常原因和時間估計。
- Support text: 你要跟朋友見面，但會晚到。簡單說抱歉、原因和大概幾分鐘。

### Clean Dialogue Path

- 朋友: 你快到了嗎？ (你快到了嗎？)
- 你: 不好意思，我會晚一點到。 (不好意思，我會晚一點到。)
- 朋友: 怎麼了？ (怎麼了？)
- 你: 因為公車晚了。 (因為公車晚了。)
- 朋友: 大概會晚幾分鐘？ (大概會晚幾分鐘？)
- 你: 大概晚十分鐘。 (大概晚十分鐘。)
- 朋友: 好，我等你。 (好，我等你。)
- 你: 謝謝你，我快到了。 (謝謝你，我快到了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你快到了嗎？ (你快到了嗎？) | 不好意思，我會晚一點到。 (不好意思，我會晚一點到。) | 1. 我已經到了昨天。 (我已經到了昨天。) [wrong_time_past] - feedback: 朋友問現在快到了沒，不是昨天。<br>2. 我要兩杯咖啡。 (我要兩杯咖啡。) [wrong_scenario_ordering] - feedback: 這是在點餐，沒有說你會晚到。 | 先用自然的道歉，說會晚一點到。 |  |
| t2 | 怎麼了？ (怎麼了？) | 因為公車晚了。 (因為公車晚了。) | 1. 我大概晚十分鐘。 (我大概晚十分鐘。) [time_estimate_not_reason] - feedback: 這是時間估計，不是原因。朋友現在問怎麼了。<br>2. 公車站在哪裡？ (公車站在哪裡？) [wrong_function_location_question] - feedback: 這是在問地點，沒有說明為什麼晚到。 | 給一個安全日常原因，例如公車晚了。 | 因為 + 原因<br>用「因為」接一個簡單原因。<br>因為公車晚了。 = 因為公車晚了。<br>我大概晚十分鐘。 = 我大概晚十分鐘。 |
| t3 | 大概會晚幾分鐘？ (大概會晚幾分鐘？) | 大概晚十分鐘。 (大概晚十分鐘。) | 1. 因為公車晚了。 (因為公車晚了。) [repeated_reason_not_time] - feedback: 原因已經說了。現在要回答幾分鐘。<br>2. 我坐三號公車。 (我坐三號公車。) [bus_number_not_delay] - feedback: 公車號碼不是晚到時間。 | 回答簡短時間估計即可。 |  |
| t4 | 好，我等你。 (好，我等你。) | 謝謝你，我快到了。 (謝謝你，我快到了。) | 1. 請幫我換房間。 (請幫我換房間。) [wrong_scenario_hotel] - feedback: 這是旅館情境，不是朋友等你的訊息。<br>2. 你為什麼不等我？ (你為什麼不等我？) [conflict_blame_out_of_scope] - feedback: 這會變成責怪。這裡只要謝謝朋友。 | 朋友願意等，說謝謝並自然收尾。 |  |

---

## a2:zh:a2_fill_simple_form_help - 請人協助簡單表格

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的數位或簡單表格協助。
- Support text: 只確認必要資訊，不提供密碼、付款資料、敏感身分資料、法律或醫療資訊。

### Clean Dialogue Path

- 工作人員: 請先填這張表。 (請先填這張表。)
- 你: 這一欄要填什麼？ (這一欄要填什麼？)
- 工作人員: 這裡請填姓名。 (這裡請填姓名。)
- 你: 只填姓名就可以嗎？ (只填姓名就可以嗎？)
- 工作人員: 對，電話寫在下面那一欄。 (對，電話在下面那一欄。)
- 你: 知道了，我寫在下面。 (知道了，我會寫在下面。)
- 工作人員: 對，這樣就夠了。 (對，這樣就夠了。)
- 你: 謝謝，我填好了。 (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 請先填這張表。 (請先填這張表。) | 這一欄要填什麼？ (這一欄要填什麼？) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t2 | 這裡請填姓名。 (這裡請填姓名。) | 只填姓名就可以嗎？ (只填姓名就可以嗎？) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t3 | 對，電話寫在下面那一欄。 (對，電話在下面那一欄。) | 知道了，我寫在下面。 (知道了，我會寫在下面。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t4 | 對，這樣就夠了。 (對，這樣就夠了。) | 謝謝，我填好了。 (謝謝，我填好了。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |

---

## a2:zh:a2_invite_friend_activity - 邀朋友一起活動

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_invite_friend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的朋友日常協調。
- Support text: 使用自然的朋友語氣，活動和理由都保持普通、簡短。

### Clean Dialogue Path

- 朋友: 等一下要不要一起喝咖啡？ (等一下要一起喝咖啡嗎？)
- 你: 等一下要不要一起喝咖啡？ (等一下要不要一起喝咖啡？)
- 朋友: 好啊，幾點？ (好啊。幾點？)
- 你: 三點左右可以嗎？ (三點左右可以嗎？)
- 朋友: 要在車站前面見嗎？ (要在車站前面見嗎？)
- 你: 好，我們在車站前面見。 (好，我們在車站前面見。)
- 朋友: 好，等一下見。 (好，等一下見。)
- 你: 好，等一下見。 (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 等一下要不要一起喝咖啡？ (等一下要一起喝咖啡嗎？) | 等一下要不要一起喝咖啡？ (等一下要不要一起喝咖啡？) | 1. 等一下請幫我換房間。 (等一下請幫我換房間。) [wrong_scenario_service] - feedback: 這不符合目前的朋友情境。<br>2. 你今天一定要跟我來。 (你今天一定要跟我來。) [too_pressuring] - feedback: 這樣對朋友來說太強硬。 | Respond naturally to the friend plan. |  |
| t2 | 好啊，幾點？ (好啊。幾點？) | 三點左右可以嗎？ (三點左右可以嗎？) | 1. 等一下請幫我換房間。 (等一下請幫我換房間。) [wrong_scenario_service] - feedback: 這不符合目前的朋友情境。<br>2. 你今天一定要跟我來。 (你今天一定要跟我來。) [too_pressuring] - feedback: 這樣對朋友來說太強硬。 | Respond naturally to the friend plan. |  |
| t3 | 要在車站前面見嗎？ (要在車站前面見嗎？) | 好，我們在車站前面見。 (好，我們在車站前面見。) | 1. 等一下請幫我換房間。 (等一下請幫我換房間。) [wrong_scenario_service] - feedback: 這不符合目前的朋友情境。<br>2. 你今天一定要跟我來。 (你今天一定要跟我來。) [too_pressuring] - feedback: 這樣對朋友來說太強硬。 | Respond naturally to the friend plan. |  |
| t4 | 好，等一下見。 (好，等一下見。) | 好，等一下見。 (好，等一下見。) | 1. 等一下請幫我換房間。 (等一下請幫我換房間。) [wrong_scenario_service] - feedback: 這不符合目前的朋友情境。<br>2. 你今天一定要跟我來。 (你今天一定要跟我來。) [too_pressuring] - feedback: 這樣對朋友來說太強硬。 | Respond naturally to the friend plan. |  |

---

## a2:zh:a2_lost_item_followup_message - 追問遺失物

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的數位或簡單表格協助。
- Support text: 只確認必要資訊，不提供密碼、付款資料、敏感身分資料、法律或醫療資訊。

### Clean Dialogue Path

- 工作人員: 你在找什麼東西？ (您在找什麼？)
- 你: 我好像把黑色雨傘忘在那裡。 (我好像把黑色雨傘忘在那裡。)
- 工作人員: 你放在哪裡？ (放在哪裡？)
- 你: 好像放在咖啡店椅子旁邊。 (好像放在咖啡店椅子旁邊。)
- 工作人員: 請留下姓名和聯絡方式。 (請留下姓名和聯絡方式。)
- 你: 好，我留下姓名和電話。 (好，我會留下姓名和電話。)
- 工作人員: 我們確認後會聯絡你。 (我確認後會聯絡您。)
- 你: 謝謝，我等你的訊息。 (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你在找什麼東西？ (您在找什麼？) | 我好像把黑色雨傘忘在那裡。 (我好像把黑色雨傘忘在那裡。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t2 | 你放在哪裡？ (放在哪裡？) | 好像放在咖啡店椅子旁邊。 (好像放在咖啡店椅子旁邊。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t3 | 請留下姓名和聯絡方式。 (請留下姓名和聯絡方式。) | 好，我留下姓名和電話。 (好，我會留下姓名和電話。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |
| t4 | 我們確認後會聯絡你。 (我確認後會聯絡您。) | 謝謝，我等你的訊息。 (謝謝，我等您聯絡。) | 1. 我會告訴你密碼。 (我會告訴你密碼。) [forbidden_sensitive] - feedback: 密碼不屬於這個 A2 任務。<br>2. 請退款。 (請退款。) [wrong_dispute_domain] - feedback: 退款或爭議不屬於這個任務。 | 只確認必要且低風險的細節。 |  |

---

## a2:zh:a2_luggage_storage_pickup - 寄放並領取行李

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_luggage_storage_pickup
- Setting: 車站寄物處
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: 寄放行李，聽懂領取期限，並確認領取時需要的單據。

### Clean Dialogue Path

- 站務人員: 要寄放行李嗎？ (您要寄放行李嗎？)
- 你: 我想寄放這個行李。 (寄放行李)
- 站務人員: 今天晚上七點前可以來領。 (今天晚上領取期限前可以來領。)
- 你: 晚上七點前來領就可以，對嗎？ (確認取件時間)
- 站務人員: 領取時請出示這張寄物單。 (領取時請出示這張收據。)
- 你: 好，領取時我會出示寄物單。 (確認文件)
- 站務人員: 好的，請七點前回來。 (好的，請在期限前回來。)
- 你: 謝謝，我七點前會回來。 (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 要寄放行李嗎？ (您要寄放行李嗎？) | 我想寄放這個行李。 (寄放行李) | 1. 我昨天領了這個行李。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 月台在哪裡？ (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 寄放行李 |  |
| t2 | 今天晚上七點前可以來領。 (今天晚上領取期限前可以來領。) | 晚上七點前來領就可以，對嗎？ (確認取件時間) | 1. 早上七點寄放就可以，對嗎？ (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 退款在哪裡拿？ (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認取件時間 |  |
| t3 | 領取時請出示這張寄物單。 (領取時請出示這張收據。) | 好，領取時我會出示寄物單。 (確認文件) | 1. 寄物單可以丟掉嗎？ (錯誤指示) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我會出示護照。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認寄物單 |  |
| t4 | 好的，請七點前回來。 (好的，請在期限前回來。) | 謝謝，我七點前會回來。 (禮貌收尾) | 1. 火車晚十五分鐘。 (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我想申報行李遺失。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 收尾 |  |

---

## a2:zh:a2_make_simple_plan_sequence - 安排兩步驟計畫

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: 用 A2 短句處理低風險的朋友日常協調。
- Support text: 使用自然的朋友語氣，活動和理由都保持普通、簡短。

### Clean Dialogue Path

- 朋友: 我們先在車站見，好嗎？ (我們先在車站見，好嗎？)
- 你: 好，我們先在車站見。 (好，我們先在車站見。)
- 朋友: 接著去公園嗎？ (接著去公園嗎？)
- 你: 好，接著走去公園。 (好，接著走去公園。)
- 朋友: 所以先車站，接著公園，對嗎？ (所以先車站，接著公園，對嗎？)
- 你: 對，先車站，接著公園。 (對，先車站，接著公園。)
- 朋友: 好，星期六兩點見。 (好，星期六兩點見。)
- 你: 好，星期六兩點見。 (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我們先在車站見，好嗎？ (我們先在車站見，好嗎？) | 好，我們先在車站見。 (好，我們先在車站見。) | 1. 好，請先退款給我。 (好，請先退款給我。) [wrong_scenario_refund] - feedback: 這不符合目前的朋友情境。<br>2. 不要，絕對不要。 (不要，絕對不要。) [too_blunt] - feedback: 這樣對朋友來說太強硬。 | Keep the plan to two simple steps. |  |
| t2 | 接著去公園嗎？ (接著去公園嗎？) | 好，接著走去公園。 (好，接著走去公園。) | 1. 好，請先退款給我。 (好，請先退款給我。) [wrong_scenario_refund] - feedback: 這不符合目前的朋友情境。<br>2. 不要，絕對不要。 (不要，絕對不要。) [too_blunt] - feedback: 這樣對朋友來說太強硬。 | Keep the plan to two simple steps. |  |
| t3 | 所以先車站，接著公園，對嗎？ (所以先車站，接著公園，對嗎？) | 對，先車站，接著公園。 (對，先車站，接著公園。) | 1. 好，請先退款給我。 (好，請先退款給我。) [wrong_scenario_refund] - feedback: 這不符合目前的朋友情境。<br>2. 不要，絕對不要。 (不要，絕對不要。) [too_blunt] - feedback: 這樣對朋友來說太強硬。 | Keep the plan to two simple steps. |  |
| t4 | 好，星期六兩點見。 (好，星期六兩點見。) | 好，星期六兩點見。 (好，星期六兩點見。) | 1. 好，請先退款給我。 (好，請先退款給我。) [wrong_scenario_refund] - feedback: 這不符合目前的朋友情境。<br>2. 不要，絕對不要。 (不要，絕對不要。) [too_blunt] - feedback: 這樣對朋友來說太強硬。 | Keep the plan to two simple steps. |  |

---

## a2:zh:a2_plan_tomorrow_morning - 明天早上的計畫

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: 跟朋友聊天
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: 朋友問你明天早上打算做什麼。
- Learner goal: 說明天早上的近未來計畫，再加一個簡單的下一步。
- Support text: 朋友問你明天早上的計畫。先說你要做什麼，再說下一步，最後確認大概什麼時候有空。

### Clean Dialogue Path

- 朋友: 你明天早上打算做什麼？ (你明天早上打算做什麼？)
- 你: 我明天早上要去圖書館。 (我明天早上要去圖書館。)
- 朋友: 那之後呢？ (那之後呢？)
- 你: 然後我去買早餐。 (然後我去買早餐。)
- 朋友: 所以你午餐前有空嗎？ (所以你午餐前有空嗎？)
- 你: 有，我十一點左右有空。 (有，我十一點左右有空。)
- 朋友: 好，那我十一點傳訊息給你。 (好，那我十一點傳訊息給你。)
- 你: 好，明天見。 (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你明天早上打算做什麼？ (你明天早上打算做什麼？) | 我明天早上要去圖書館。 (我明天早上要去圖書館。) | 1. 我昨天早上去了圖書館。 (我昨天早上去了圖書館。) [wrong_time_past] - feedback: 朋友問的是明天早上，不是昨天早上。<br>2. 圖書館在哪裡？ (圖書館在哪裡？) [wrong_function_location_question] - feedback: 這是在問地點，沒有說你的計畫。 | 問題是明天早上的計畫，可以用「我要」或「我打算」。 |  |
| t2 | 那之後呢？ (那之後呢？) | 然後我去買早餐。 (然後我去買早餐。) | 1. 我們在圖書館見吧。 (我們在圖書館見吧。) [wrong_function_meeting_suggestion] - feedback: 這是在約見面地點，不是在說你的下一步。<br>2. 我現在正在買早餐。 (我現在正在買早餐。) [wrong_time_now] - feedback: 這是在說現在，不是明天早上的下一步。 | 對方問下一步。用「然後」接一個簡單活動。 | 先...然後...<br>用「先」說第一件事，用「然後」接下一件事。<br>我先去圖書館。 = 我先去圖書館。<br>然後我去買早餐。 = 然後我去買早餐。 |
| t3 | 所以你午餐前有空嗎？ (所以你午餐前有空嗎？) | 有，我十一點左右有空。 (有，我十一點左右有空。) | 1. 沒有，我昨天有空。 (沒有，我昨天有空。) [wrong_time_past] - feedback: 朋友問的是明天午餐前，不是昨天。<br>2. 圖書館十一點關門嗎？ (圖書館十一點關門嗎？) [wrong_focus_opening_hours] - feedback: 朋友問你什麼時候有空，不是在問圖書館時間。 | 回答大概時間即可，例如十一點左右。 |  |
| t4 | 好，那我十一點傳訊息給你。 (好，那我十一點傳訊息給你。) | 好，明天見。 (好，明天見。) | 1. 我想再點一份。 (我想再點一份。) [wrong_scenario_ordering] - feedback: 這像在點餐，不是在確認明天的計畫。<br>2. 我想換房間。 (我想換房間。) [wrong_scenario_hotel] - feedback: 這是旅館情境，不適合朋友聊天的結尾。 | 計畫已經清楚了，用短句自然收尾。 |  |

---

## a2:zh:a2_report_room_problem - 回報房間問題

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_report_room_problem
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: 回報一個簡單的房間問題，並確認飯店人員會怎麼處理。

### Clean Dialogue Path

- Empleado del hotel: 您好，我可以怎麼幫您？ (您好，我可以怎麼幫您？)
- Tú: 我的房間沒有毛巾，可以麻煩您幫忙嗎？ (我的房間沒有毛巾，可以麻煩您幫忙嗎？)
- Empleado del hotel: 好的，我現在幫您送毛巾。 (好的，我現在幫您送毛巾。)
- Tú: 您會幫我送毛巾，對嗎？ (您會幫我送毛巾，對嗎？)
- Empleado del hotel: 大約需要十分鐘。 (大約需要十分鐘。)
- Tú: 大約十分鐘，好的。 (大約十分鐘，好的。)
- Empleado del hotel: 我們會送到您的房間。 (我們會送到您的房間。)
- Tú: 謝謝，我在房間等。 (謝謝，我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，我可以怎麼幫您？ (您好，我可以怎麼幫您？) | 我的房間沒有毛巾，可以麻煩您幫忙嗎？ (我的房間沒有毛巾，可以麻煩您幫忙嗎？) | 1. 我想訂一間房。 (我想訂一間房。) [wrong_detail_or_domain] - feedback: 現在不是訂房，要說明房間問題。<br>2. 我想要賠償。 (我想要賠償。) [forbidden_or_wrong_domain] - feedback: 賠償超出這個 A2 任務。 | 用一句話說明房間問題。 |  |
| t2 | 好的，我現在幫您送毛巾。 (好的，我現在幫您送毛巾。) | 您會幫我送毛巾，對嗎？ (您會幫我送毛巾，對嗎？) | 1. 您會幫我換房，對嗎？ (您會幫我換房，對嗎？) [wrong_detail_or_domain] - feedback: 這裡是送毛巾，不是換房。<br>2. 火車晚點了，對嗎？ (火車晚點了，對嗎？) [forbidden_or_wrong_domain] - feedback: 這個選項換到交通情境。 | 確認人員會做什麼。 |  |
| t3 | 大約需要十分鐘。 (大約需要十分鐘。) | 大約十分鐘，好的。 (大約十分鐘，好的。) | 1. 我一小時後退房。 (我一小時後退房。) [wrong_detail_or_domain] - feedback: 這是在說退房，不是等待時間。<br>2. 我需要去醫院。 (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: 醫院不在這個情境裡。 | 確認等待時間。 |  |
| t4 | 我們會送到您的房間。 (我們會送到您的房間。) | 謝謝，我在房間等。 (謝謝，我在房間等。) | 1. 請說明退款規則。 (請說明退款規則。) [wrong_detail_or_domain] - feedback: 退款規則太超出情境。<br>2. 兩杯咖啡，謝謝。 (兩杯咖啡，謝謝。) [forbidden_or_wrong_domain] - feedback: 咖啡是其他服務。 | 在正確地點等待。 |  |

---

## a2:zh:a2_request_room_change - 要求換房

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_request_room_change
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: 說出簡單理由，詢問是否可以換房。

### Clean Dialogue Path

- Empleado del hotel: 我可以怎麼幫您？ (我可以怎麼幫您？)
- Tú: 我的房間有點吵，可以換房嗎？ (我的房間有點吵，可以換房嗎？)
- Empleado del hotel: 我查了一下，還有另一間房可以換。 (我查了一下，還有另一間房可以換。)
- Tú: 有另一間房可以換，對嗎？ (有另一間房可以換，對嗎？)
- Empleado del hotel: 三十分鐘後可以搬到新房間。 (三十分鐘後可以搬到新房間。)
- Tú: 我三十分鐘後可以搬，對嗎？ (我三十分鐘後可以搬，對嗎？)
- Empleado del hotel: 房間準備好後，我會給您新的房卡。 (房間準備好後，我會給您新的房卡。)
- Tú: 好的，準備好後我拿新的房卡。 (好的，準備好後我拿新的房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我可以怎麼幫您？ (我可以怎麼幫您？) | 我的房間有點吵，可以換房嗎？ (我的房間有點吵，可以換房嗎？) | 1. 我可以換餐廳座位嗎？ (我可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: 餐廳座位是其他情境。<br>2. 我要提出正式投訴。 (我要提出正式投訴。) [forbidden_or_wrong_domain] - feedback: 正式投訴太強，不是這個目標。 | 說出簡單理由並要求換房。 |  |
| t2 | 我查了一下，還有另一間房可以換。 (我查了一下，還有另一間房可以換。) | 有另一間房可以換，對嗎？ (有另一間房可以換，對嗎？) | 1. 有另一張票可以換，對嗎？ (有另一張票可以換，對嗎？) [wrong_detail_or_domain] - feedback: 票券是錯誤領域。<br>2. 我也可以拿到賠償嗎？ (我也可以拿到賠償嗎？) [forbidden_or_wrong_domain] - feedback: 對方沒有提到賠償。 | 確認是否有房間。 |  |
| t3 | 三十分鐘後可以搬到新房間。 (三十分鐘後可以搬到新房間。) | 我三十分鐘後可以搬，對嗎？ (我三十分鐘後可以搬，對嗎？) | 1. 我三小時後退房，對嗎？ (我三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: 這變成退房情境。<br>2. 我換房是因為要去醫院。 (我換房是因為要去醫院。) [forbidden_or_wrong_domain] - feedback: 不需要加入醫院理由。 | 確認可以搬的時間。 |  |
| t4 | 房間準備好後，我會給您新的房卡。 (房間準備好後，我會給您新的房卡。) | 好的，準備好後我拿新的房卡。 (好的，準備好後我拿新的房卡。) | 1. 不，我要改火車時間。 (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: 火車是錯誤情境。<br>2. 我現在要去找警察。 (我現在要去找警察。) [forbidden_or_wrong_domain] - feedback: 警察太嚴重，不符合這個任務。 | 用新房卡收尾。 |  |

---

## a2:zh:a2_reschedule_meeting_time - 改約見面時間

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_reschedule_meeting_time
- Setting: 跟朋友約時間
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: 朋友確認原本的見面時間，你想改成另一個時間。
- Learner goal: 禮貌地請朋友改時間，提出替代時間，並確認新的時間。
- Support text: 朋友確認原本三點見面。你想改時間，要簡短提出新時間並確認。

### Clean Dialogue Path

- 朋友: 我們今天三點見，對嗎？ (我們今天三點見，對嗎？)
- 你: 不好意思，可以改時間嗎？ (不好意思，可以改時間嗎？)
- 朋友: 可以。你想改到幾點？ (可以。你想改到幾點？)
- 你: 可以改到四點嗎？ (可以改到四點嗎？)
- 朋友: 四點可以。 (四點可以。)
- 你: 好，那改成四點。 (好，那改成四點。)
- 朋友: 好，四點見。 (好，四點見。)
- 你: 謝謝，四點見。 (謝謝，四點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我們今天三點見，對嗎？ (我們今天三點見，對嗎？) | 不好意思，可以改時間嗎？ (不好意思，可以改時間嗎？) | 1. 對，還是三點。 (對，還是三點。) [old_time_repeated] - feedback: 你想改時間，不是確認原本三點。<br>2. 我們在第三月台見。 (我們在第三月台見。) [place_number_confusion] - feedback: 這把三點聽成地點或月台，沒有提出改時間。 | 原本是三點。先禮貌地請對方改時間。 |  |
| t2 | 可以。你想改到幾點？ (可以。你想改到幾點？) | 可以改到四點嗎？ (可以改到四點嗎？) | 1. 三點可以嗎？ (三點可以嗎？) [old_time_repeated] - feedback: 三點是原本時間。這裡要提出新的時間。<br>2. 四個人可以嗎？ (四個人可以嗎？) [number_unit_confusion] - feedback: 朋友問時間，不是人數。 | 提出一個新的時間，不要再重複三點。 | 改到 + 時間<br>用「改到」提出新的時間。<br>可以改到四點嗎？ = 可以改到四點嗎？<br>所以改成四點。 = 所以改成四點。 |
| t3 | 四點可以。 (四點可以。) | 好，那改成四點。 (好，那改成四點。) | 1. 好，那還是三點。 (好，那還是三點。) [old_time_repeated] - feedback: 朋友已經同意四點。不要回到三點。<br>2. 好，那改到四樓。 (好，那改到四樓。) [place_number_confusion] - feedback: 四樓是地點樓層，不是新的時間四點。 | 朋友接受新時間。確認原本三點改成四點。 |  |
| t4 | 好，四點見。 (好，四點見。) | 謝謝，四點見。 (謝謝，四點見。) | 1. 我要買一張票。 (我要買一張票。) [wrong_scenario_ticket] - feedback: 這是買票情境，不是確認見面時間。<br>2. 不好意思，我會晚十分鐘。 (不好意思，我會晚十分鐘。) [wrong_scenario_delay] - feedback: 這是在說遲到，不是在確認已改成四點。 | 新的時間已確認，用朋友語氣收尾。 |  |

---

## a2:zh:a2_transport_delay_announcement - 聽懂交通延誤廣播

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_transport_delay_announcement
- Setting: 車站月台
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: 聽車站廣播，確認列車晚多久，並選擇一個簡單下一步。

### Clean Dialogue Path

- 站務人員: 請注意，開往 Central 的列車將延誤十五分鐘。 (請注意，開往 Central 的列車晚 15 分鐘。)
- 你: 列車會延誤十五分鐘，對嗎？ (確認延誤時間)
- 站務人員: 如果延誤十五分鐘，您要等還是改搭公車？ (如果是 15 分鐘，您要等，還是搭公車？)
- 你: 如果是十五分鐘，我會等。 (選擇等待)
- 站務人員: 下一班車大約十點二十分到。 (下一班車大約 10 點 20 分到。)
- 你: 那我搭十點二十分那班車。 (確認搭下一班)
- 站務人員: 好的，請在這個月台等。 (好的，請在這個月台等。)
- 你: 了解，我在這裡等。 (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 請注意，開往 Central 的列車將延誤十五分鐘。 (請注意，開往 Central 的列車晚 15 分鐘。) | 列車會延誤十五分鐘，對嗎？ (確認延誤時間) | 1. 列車五分鐘後出發，對嗎？ (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我可以換座位嗎？ (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 聽懂延誤時間 |  |
| t2 | 如果延誤十五分鐘，您要等還是改搭公車？ (如果是 15 分鐘，您要等，還是搭公車？) | 如果是十五分鐘，我會等。 (選擇等待) | 1. 我昨天等了。 (錯誤時間) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 請給我收據。 (錯誤服務) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 做出簡單選擇 |  |
| t3 | 下一班車大約十點二十分到。 (下一班車大約 10 點 20 分到。) | 那我搭十點二十分那班車。 (確認搭下一班) | 1. 店十點二十分關門嗎？ (錯誤功能) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我想退公車票。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 確認下一班時間 |  |
| t4 | 好的，請在這個月台等。 (好的，請在這個月台等。) | 了解，我在這裡等。 (確認等待) | 1. 請幫我換房間。 (錯誤情境) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。<br>2. 我想預約醫院。 (超出範圍) - feedback: 干擾選項測試錯誤時間、錯誤情境，或超出 A2 範圍的服務升級。 | 禮貌收尾 |  |

---

## a2:zh:a2_understand_hotel_notice - 看懂飯店通知

- Level: A2
- Language: Chinese (zh)
- Scenario ID: a2_understand_hotel_notice
- Setting: 飯店大廳
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: 看懂一則簡短飯店通知，確認時間、地點和規則。

### Clean Dialogue Path

- Empleado del hotel: 請看這張通知。早餐時間是早上七點到九點。 (請看這張通知。早餐時間是早上七點到九點。)
- Tú: 早餐是早上七點到九點，對嗎？ (早餐是早上七點到九點，對嗎？)
- Empleado del hotel: 地點在二樓餐廳。 (地點在二樓餐廳。)
- Tú: 我要去二樓餐廳，對嗎？ (我要去二樓餐廳，對嗎？)
- Empleado del hotel: 入口只要說房號就可以。 (入口只要說房號就可以。)
- Tú: 我在入口只要說房號，對嗎？ (我在入口只要說房號，對嗎？)
- Empleado del hotel: 對，請明天早上過來。 (對，請明天早上過來。)
- Tú: 好的，我明天早上去二樓餐廳。 (好的，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 請看這張通知。早餐時間是早上七點到九點。 (請看這張通知。早餐時間是早上七點到九點。) | 早餐是早上七點到九點，對嗎？ (早餐是早上七點到九點，對嗎？) | 1. 早餐是晚上七點到九點，對嗎？ (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: 晚上是錯誤時間。<br>2. 退房時間是早上九點，對嗎？ (退房時間是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: 退房是不同資訊。 | 確認時間範圍。 |  |
| t2 | 地點在二樓餐廳。 (地點在二樓餐廳。) | 我要去二樓餐廳，對嗎？ (我要去二樓餐廳，對嗎？) | 1. 我要去三樓的房間，對嗎？ (我要去三樓的房間，對嗎？) [wrong_detail_or_domain] - feedback: 三樓房間不是地點。<br>2. 我要出示護照，對嗎？ (我要出示護照，對嗎？) [forbidden_or_wrong_domain] - feedback: 這裡沒有要求護照。 | 確認地點。 |  |
| t3 | 入口只要說房號就可以。 (入口只要說房號就可以。) | 我在入口只要說房號，對嗎？ (我在入口只要說房號，對嗎？) | 1. 我在入口找警察說話，對嗎？ (我在入口找警察說話，對嗎？) [wrong_detail_or_domain] - feedback: 警察不在這個情境。<br>2. 我在入口拿退款，對嗎？ (我在入口拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: 退款沒有被提到。 | 確認規則。 |  |
| t4 | 對，請明天早上過來。 (對，請明天早上過來。) | 好的，我明天早上去二樓餐廳。 (好的，我明天早上去二樓餐廳。) | 1. 好的，我今天晚上拿洗好的衣服。 (好的，我今天晚上拿洗好的衣服。) [wrong_detail_or_domain] - feedback: 洗衣是其他服務。<br>2. 好的，我寫事故報告。 (好的，我寫事故報告。) [forbidden_or_wrong_domain] - feedback: 事故報告是錯誤領域。 | 總結時間和地點。 |  |

---
