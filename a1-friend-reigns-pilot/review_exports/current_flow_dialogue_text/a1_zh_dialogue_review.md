# A1 Chinese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:zh:convenience_payment_card_cash - 在便利商店付款

- Level: A1
- Language: Chinese (zh)
- Scenario ID: convenience_payment_card_cash
- Setting: 便利商店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在便利商店櫃台結帳。用簡短中文回答要刷卡還是付現，並完成交易。

### Clean Dialogue Path

- 店員: 請問刷卡還是付現？ (請問刷卡還是付現？)
- 客人: 刷卡，謝謝。 (刷卡，謝謝。)
- 店員: 好，請在這裡感應。 (好，請在這裡感應。)
- 客人: 好的。 (好的。)
- 店員: 需要發票嗎？ (需要發票嗎？)
- 客人: 不用，謝謝。 (不用，謝謝。)
- 店員: 好了，謝謝。 (好了，謝謝。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 請問刷卡還是付現？ (請問刷卡還是付現？) | 刷卡，謝謝。 (刷卡，謝謝。) | 1. 我要一杯咖啡。 (我要一杯咖啡。) [ordering_food_instead_of_paying] - feedback: 這是在點飲料。現在店員問的是付款方式。<br>2. 請問洗手間在哪裡？ (請問洗手間在哪裡？) [asking_directions_instead_of_paying] - feedback: 這是在問位置，不是在結帳付款。 |  |  |
| t2 | 好，請在這裡感應。 (好，請在這裡感應。) | 好的。 (好的。) | 1. 刷卡，謝謝。 (刷卡，謝謝。) [repeated_prior_answer] - feedback: 你已經回答刷卡了。現在只要確認付款動作。<br>2. 我有預訂。 (我有預訂。) [wrong_scenario_hotel] - feedback: 這是飯店入住句，不是便利商店結帳。 |  |  |
| t3 | 需要發票嗎？ (需要發票嗎？) | 不用，謝謝。 (不用，謝謝。) | 1. 三點可以。 (三點可以。) [schedule_answer_to_receipt_prompt] - feedback: 這是在回答時間。現在店員問的是要不要發票。<br>2. 付現，謝謝。 (付現，謝謝。) [wrong_payment_method_switch] - feedback: 你前面已經選了刷卡。現在要回答發票問題。 |  |  |
| t4 | 好了，謝謝。 (好了，謝謝。) | 謝謝。 (謝謝。) | 1. 我要退房。 (我要退房。) [wrong_scenario_hotel] - feedback: 這是飯店情境，不是便利商店付款結尾。<br>2. 往前走，然後右轉。 (往前走，然後右轉。) [wrong_scenario_directions] - feedback: 這是在指路，不是在結帳收尾。 |  |  |

---

## a1:zh:core_repair_repeat_slowly - 請對方再說一次

- Level: A1
- Language: Chinese (zh)
- Scenario ID: core_repair_repeat_slowly
- Setting: 服務櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在櫃台沒聽懂一句簡短問題。先請對方再說一次，再請對方說慢一點，最後回答。

### Clean Dialogue Path

- 店員: 需要袋子嗎？ (需要袋子嗎？)
- 客人: 不好意思，可以再說一次嗎？ (不好意思，可以再說一次嗎？)
- 店員: 需要袋子嗎？ (需要袋子嗎？)
- 客人: 請說慢一點。 (請說慢一點。)
- 店員: 好。需要袋子嗎？ (好。需要袋子嗎？)
- 客人: 不用，謝謝。 (不用，謝謝。)
- 店員: 好，這樣就可以了。 (好，這樣就可以了。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 需要袋子嗎？ (需要袋子嗎？) | 不好意思，可以再說一次嗎？ (不好意思，可以再說一次嗎？) | 1. 好，可以。 (好，可以。) [blind_confirmation] - feedback: 你還沒聽懂時不要直接確認。先請對方重複。<br>2. 再見。 (再見。) [closing_before_understanding] - feedback: 這會直接結束對話，沒有修復理解問題。 | 沒聽懂時，先請對方再說一次。 |  |
| t2 | 需要袋子嗎？ (需要袋子嗎？) | 請說慢一點。 (請說慢一點。) | 1. 我要一張到台中的票。 (我要一張到台中的票。) [travel_ticket_answer] - feedback: 這是買票用語，不是在請對方放慢速度。<br>2. 我叫小林。 (我叫小林。) [self_intro_answer] - feedback: 這是自我介紹，不是修復聽不懂的服務問題。 | 還是太快時，請對方說慢一點。 |  |
| t3 | 好。需要袋子嗎？ (好。需要袋子嗎？) | 不用，謝謝。 (不用，謝謝。) | 1. 可以再說一次嗎？ (可以再說一次嗎？) [repair_repeated_after_clear_prompt] - feedback: 對方已經慢慢重述了。現在要回答袋子問題。<br>2. 這個多少錢？ (這個多少錢？) [shopping_price_question] - feedback: 這是在問價格，不是在回答是否要袋子。 | 現在聽懂了，簡短回答要或不用。 |  |
| t4 | 好，這樣就可以了。 (好，這樣就可以了。) | 謝謝。 (謝謝。) | 1. 很高興認識你。 (很高興認識你。) [first_meeting_formula] - feedback: 這是第一次見面用語，不是櫃台服務收尾。<br>2. 刷卡，謝謝。 (刷卡，謝謝。) [payment_phrase] - feedback: 這是付款方式，不是對方完成服務後的道謝。 | 最後道謝。 |  |

---

## a1:zh:daily_meet_friend - 和朋友見面

- Level: A1
- Language: Chinese (zh)
- Scenario ID: daily_meet_friend
- Setting: 咖啡店門口
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友見面。用朋友之間自然簡短的中文確認對方和計畫。

### Clean Dialogue Path

- 朋友: 嗨，你到了！ (嗨，你到了！)
- 朋友: 嗨，小安！ (嗨，小安！)
- 朋友: 我們去美術館，對嗎？ (我們去美術館，對嗎？)
- 朋友: 對，去美術館。 (對，去美術館。)
- 朋友: 你準備好了嗎？ (你準備好了嗎？)
- 朋友: 好了。 (好了。)
- 朋友: 太好了。走吧？ (太好了。走吧？)
- 朋友: 走吧。 (走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 嗨，你到了！ (嗨，你到了！) | 嗨，小安！ (嗨，小安！) | 1. 您好，我要結帳。 (您好，我要結帳。) [service_counter_payment] - feedback: 這是對店員付款的語氣，不像朋友見面。<br>2. 這個多少錢？ (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問價格，不是在和朋友打招呼。 | 朋友之間可以用嗨，再叫名字。 |  |
| t2 | 我們去美術館，對嗎？ (我們去美術館，對嗎？) | 對，去美術館。 (對，去美術館。) | 1. 兩位，謝謝。 (兩位，謝謝。) [restaurant_service_phrase] - feedback: 這像在餐廳報人數，不是在確認朋友計畫。<br>2. 不是，您是我的主管。 (不是，您是我的主管。) [overly_formal_wrong_relationship] - feedback: 這換成正式工作關係，和朋友見面不一致。 | 計畫正確時，用短句確認。 |  |
| t3 | 你準備好了嗎？ (你準備好了嗎？) | 好了。 (好了。) | 1. 洗手間在哪裡？ (洗手間在哪裡？) [directions_instead_of_readiness] - feedback: 這是在問地點，不是在回答準備好了沒有。<br>2. 我要結帳，謝謝。 (我要結帳，謝謝。) [restaurant_bill_request] - feedback: 這是餐廳結帳，不是朋友問你是否準備好。 | 準備好了可說好了。 |  |
| t4 | 太好了。走吧？ (太好了。走吧？) | 走吧。 (走吧。) | 1. 可以便宜一點嗎？ (可以便宜一點嗎？) [shopping_bargaining] - feedback: 這是購物議價，不是朋友準備出發。<br>2. 刷卡還是現金？ (刷卡還是現金？) [cashier_payment_prompt] - feedback: 這是收銀員付款問題，不是朋友之間的下一步。 | 朋友之間可以直接說走吧。 |  |

---

## a1:zh:daily_schedule_time - 約見面時間

- Level: A1
- Language: Chinese (zh)
- Scenario ID: daily_schedule_time
- Setting: 朋友約見面
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你正在和朋友約見面時間。用簡短中文回答幾點，並確認安排。

### Clean Dialogue Path

- 朋友: 我們幾點見？ (我們幾點見？)
- 你: 三點可以。 (三點可以。)
- 朋友: 今天可以嗎？ (今天可以嗎？)
- 你: 可以，今天可以。 (可以，今天可以。)
- 朋友: 好，那三點見。 (好，那三點見。)
- 你: 好，三點見。 (好，三點見。)
- 朋友: 待會見！ (待會見！)
- 你: 待會見！ (待會見！)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 我們幾點見？ (我們幾點見？) | 三點可以。 (三點可以。) | 1. 在車站前面。 (在車站前面。) [location_answer_when_time_requested] - feedback: 這是在回答地點。對方問的是幾點。<br>2. 刷卡，謝謝。 (刷卡，謝謝。) [wrong_scenario_payment] - feedback: 這是付款情境，不是約見面時間。 |  |  |
| t2 | 今天可以嗎？ (今天可以嗎？) | 可以，今天可以。 (可以，今天可以。) | 1. 不行，永遠不要。 (不行，永遠不要。) [refusal_when_confirmation_expected] - feedback: 這會取消安排，而且語氣太強。這裡要確認今天可以。<br>2. 請給我一間房。 (請給我一間房。) [wrong_scenario_hotel] - feedback: 這是飯店情境，不是朋友約時間。 |  |  |
| t3 | 好，那三點見。 (好，那三點見。) | 好，三點見。 (好，三點見。) | 1. 洗手間在哪裡？ (洗手間在哪裡？) [wrong_scenario_directions] - feedback: 這換成問路情境了。現在只要確認三點見。<br>2. 不用發票。 (不用發票。) [wrong_scenario_payment] - feedback: 這是結帳時的回答，不是確認見面時間。 |  |  |
| t4 | 待會見！ (待會見！) | 待會見！ (待會見！) | 1. 我要一杯咖啡。 (我要一杯咖啡。) [wrong_scenario_ordering] - feedback: 這是在點飲料。朋友道別時，用待會見收尾。<br>2. 請問刷卡還是付現？ (請問刷卡還是付現？) [wrong_role_cashier_line] - feedback: 這像店員在問客人，不符合朋友聊天情境。 |  |  |

---

## a1:zh:daily_self_intro - 簡短自我介紹

- Level: A1
- Language: Chinese (zh)
- Scenario ID: daily_self_intro
- Setting: 語言交換活動
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換活動第一次見到新朋友。只說名字和正在學的語言，不分享電話、地址或工作資訊。

### Clean Dialogue Path

- 新朋友: 你好，很高興認識你。 (你好，很高興認識你。)
- 新參加者: 你好，我叫小林。 (你好，我叫小林。)
- 新朋友: 你在學什麼語言？ (你在學什麼語言？)
- 新參加者: 我在學中文。 (我在學中文。)
- 新朋友: 太好了，歡迎你。 (太好了，歡迎你。)
- 新參加者: 謝謝，我也很高興。 (謝謝，我也很高興。)
- 新朋友: 等一下我們一起練習。 (等一下我們一起練習。)
- 新參加者: 好，謝謝。 (好，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你好，很高興認識你。 (你好，很高興認識你。) | 你好，我叫小林。 (你好，我叫小林。) | 1. 我要買一張票。 (我要買一張票。) [travel_ticket_phrase] - feedback: 這是在買票。現在是第一次見面自我介紹。<br>2. 這是我的電話。 (這是我的電話。) [private_contact_detail] - feedback: 這會分享私人聯絡方式，本情境只需要名字。 | 先打招呼，再說自己的名字。 |  |
| t2 | 你在學什麼語言？ (你在學什麼語言？) | 我在學中文。 (我在學中文。) | 1. 刷卡，謝謝。 (刷卡，謝謝。) [payment_answer] - feedback: 這是在回答付款方式，不是在回答學什麼語言。<br>2. 可以再說一次嗎？ (可以再說一次嗎？) [repair_when_answer_expected] - feedback: 如果聽懂了問題，這裡應該直接回答你正在學的語言。 | 簡短說我在學中文。 |  |
| t3 | 太好了，歡迎你。 (太好了，歡迎你。) | 謝謝，我也很高興。 (謝謝，我也很高興。) | 1. 我要結帳。 (我要結帳。) [service_payment_phrase] - feedback: 這是服務場景結帳，不是第一次見面的回應。<br>2. 請問月台在哪裡？ (請問月台在哪裡？) [station_question] - feedback: 這是在車站問月台，和自我介紹無關。 | 用簡短謝謝回應。 |  |
| t4 | 等一下我們一起練習。 (等一下我們一起練習。) | 好，謝謝。 (好，謝謝。) | 1. 我要一杯拿鐵。 (我要一杯拿鐵。) [food_drink_order] - feedback: 這是在點飲料，不是回應一起練習。<br>2. 請說慢一點。 (請說慢一點。) [repair_after_clear_close] - feedback: 這是修復用語；現在對方只是安排一起練習，回答好即可。 | 最後簡短回應好。 |  |

---

## a1:zh:digital_battery_charging - 詢問能不能充手機

- Level: A1
- Language: Chinese (zh)
- Scenario ID: digital_battery_charging
- Setting: 咖啡店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店或大廳。先問可不可以充手機，再問插座在哪裡，確認位置並道謝。

### Clean Dialogue Path

- 工作人員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 客人: 請問我可以在這裡充手機嗎？ (請問我可以在這裡充手機嗎？)
- 工作人員: 可以，沒問題。 (可以，沒問題。)
- 客人: 插座在哪裡？ (插座在哪裡？)
- 工作人員: 插座在窗邊的桌子旁邊。 (插座在窗邊的桌子旁邊。)
- 客人: 窗邊那裡嗎？ (窗邊那裡嗎？)
- 工作人員: 對，就在那裡。 (對，就在那裡。)
- 客人: 好的，謝謝。 (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 請問我可以在這裡充手機嗎？ (請問我可以在這裡充手機嗎？) | 1. 請問 Wi-Fi 密碼是什麼？ (請問 Wi-Fi 密碼是什麼？) [wifi_request_wrong_goal] - feedback: 這是在問 Wi-Fi，不是在問能不能充手機。<br>2. 我要一杯咖啡。 (我要一杯咖啡。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在請求使用插座。 |  |  |
| t2 | 可以，沒問題。 (可以，沒問題。) | 插座在哪裡？ (插座在哪裡？) | 1. 請問我可以在這裡充手機嗎？ (請問我可以在這裡充手機嗎？) [repeated_prior_question] - feedback: 對方已經同意了。現在要問插座的位置。<br>2. 車站在哪裡？ (車站在哪裡？) [station_directions_wrong_goal] - feedback: 這是在問車站方向，不是問插座。 |  |  |
| t3 | 插座在窗邊的桌子旁邊。 (插座在窗邊的桌子旁邊。) | 窗邊那裡嗎？ (窗邊那裡嗎？) | 1. 需要付錢嗎？ (需要付錢嗎？) [payment_dispute_out_of_scope] - feedback: 本場景不談收費或費用爭議，只確認插座位置。<br>2. 可以，沒問題。 (可以，沒問題。) [staff_role_sentence] - feedback: 這是工作人員給同意的句子，不是學習者確認位置。 |  |  |
| t4 | 對，就在那裡。 (對，就在那裡。) | 好的，謝謝。 (好的，謝謝。) | 1. 我的手機壞了。 (我的手機壞了。) [damaged_device_out_of_scope] - feedback: 這進入裝置故障；本場景只練借用插座和道謝。<br>2. 有轉接頭嗎？ (有轉接頭嗎？) [adapter_specs_out_of_scope] - feedback: 轉接頭和規格不在本場景範圍。 |  |  |

---

## a1:zh:digital_wifi_connect - 詢問 Wi-Fi 密碼

- Level: A1
- Language: Chinese (zh)
- Scenario ID: digital_wifi_connect
- Setting: 咖啡店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店或飯店大廳。詢問 Wi-Fi 密碼，試著連線，並說手機連不上。

### Clean Dialogue Path

- 工作人員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 客人: 請問 Wi-Fi 密碼是什麼？ (請問 Wi-Fi 密碼是什麼？)
- 工作人員: 密碼是 cafe2026。 (密碼是 cafe2026。)
- 客人: 謝謝，我試試看。 (謝謝，我試試看。)
- 工作人員: 可以用了嗎？ (可以用了嗎？)
- 客人: 還是不行，連不上。 (還是不行，連不上。)
- 工作人員: 請等一下，再試一次。 (請等一下，再試一次。)
- 客人: 好的，謝謝。 (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 請問 Wi-Fi 密碼是什麼？ (請問 Wi-Fi 密碼是什麼？) | 1. 我要結帳。 (我要結帳。) [bill_request_wrong_goal] - feedback: 這是在結帳，不是在問 Wi-Fi。<br>2. 我要一杯咖啡。 (我要一杯咖啡。) [food_order_wrong_goal] - feedback: 這是在點餐。現在目標是取得 Wi-Fi 密碼。 |  |  |
| t2 | 密碼是 cafe2026。 (密碼是 cafe2026。) | 謝謝，我試試看。 (謝謝，我試試看。) | 1. 請問 Wi-Fi 密碼是什麼？ (請問 Wi-Fi 密碼是什麼？) [repeated_prior_question] - feedback: 對方已經給密碼了。現在要表示你會試試看。<br>2. 洗手間在哪裡？ (洗手間在哪裡？) [directions_request_wrong_goal] - feedback: 這是在問洗手間，偏離 Wi-Fi 連線流程。 |  |  |
| t3 | 可以用了嗎？ (可以用了嗎？) | 還是不行，連不上。 (還是不行，連不上。) | 1. 可以了，謝謝。 (可以了，謝謝。) [false_confirmation] - feedback: 如果實際連不上，不能回答可以。要說明連線失敗。<br>2. 我可以付款嗎？ (我可以付款嗎？) [payment_request_wrong_goal] - feedback: 這是付款問題，不是回報 Wi-Fi 連不上。 |  |  |
| t4 | 請等一下，再試一次。 (請等一下，再試一次。) | 好的，謝謝。 (好的，謝謝。) | 1. 路由器安全嗎？ (路由器安全嗎？) [technical_security_out_of_scope] - feedback: 這進入技術與安全設定；本場景只練簡單連不上和道謝。<br>2. 我要退房。 (我要退房。) [hotel_checkout_wrong_scenario] - feedback: 這是飯店退房句，不是 Wi-Fi 協助結尾。 |  |  |

---

## a1:zh:food_bill_payment - 餐廳結帳

- Level: A1
- Language: Chinese (zh)
- Scenario ID: food_bill_payment
- Setting: 咖啡店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在台灣常見的咖啡店或簡單餐廳結帳。回答刷卡或現金，最後道謝。

### Clean Dialogue Path

- 店員: 您好，請說。 (您好，請說。)
- 客人: 我要結帳，謝謝。 (我要結帳，謝謝。)
- 店員: 好的。刷卡還是現金？ (好的。刷卡還是現金？)
- 客人: 刷卡，謝謝。 (刷卡，謝謝。)
- 店員: 需要發票嗎？ (需要發票嗎？)
- 客人: 要，謝謝。 (要，謝謝。)
- 店員: 這是您的發票，謝謝。 (這是您的發票，謝謝。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請說。 (您好，請說。) | 我要結帳，謝謝。 (我要結帳，謝謝。) | 1. 我要一杯拿鐵。 (我要一杯拿鐵。) [ordering_more_food] - feedback: 這是在繼續點東西。現在目標是結帳。<br>2. 請問車站在哪裡？ (請問車站在哪裡？) [directions_request] - feedback: 這是在問路，不是在餐飲場所結帳。 | 要結帳時，可以說我要結帳。 |  |
| t2 | 好的。刷卡還是現金？ (好的。刷卡還是現金？) | 刷卡，謝謝。 (刷卡，謝謝。) | 1. 這個多少錢？ (這個多少錢？) [shopping_price_question] - feedback: 這是在商店問商品價格。現在店員問付款方式。<br>2. 我想把帳單平均分成四份。 (我想把帳單平均分成四份。) [overlong_split_bill] - feedback: 這太複雜，超出這個 A1 付款回合。 | 回答付款方式即可。 |  |
| t3 | 需要發票嗎？ (需要發票嗎？) | 要，謝謝。 (要，謝謝。) | 1. 兩位，謝謝。 (兩位，謝謝。) [restaurant_arrival_phrase] - feedback: 這是進餐廳時報人數，不是在回答是否要發票。<br>2. 早餐幾點開始？ (早餐幾點開始？) [hotel_breakfast_question] - feedback: 這是飯店早餐問題，和結帳發票無關。 | 可以簡短回答要或不用。 |  |
| t4 | 這是您的發票，謝謝。 (這是您的發票，謝謝。) | 謝謝。 (謝謝。) | 1. 我們美術館見。 (我們美術館見。) [friend_meeting_close] - feedback: 這是朋友見面安排，不是和店員結帳收尾。<br>2. 好，我要這個。 (好，我要這個。) [shopping_purchase_phrase] - feedback: 這是購物時確認購買，不是餐飲結帳後道謝。 | 最後用謝謝收尾。 |  |

---

## a1:zh:food_coffee_ordering - 點一杯咖啡

- Level: A1
- Language: Chinese (zh)
- Scenario ID: food_coffee_ordering
- Setting: 咖啡店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台。用簡短、禮貌的中文點一杯飲料，並回答要在店裡喝還是帶走。

### Clean Dialogue Path

- 店員: 您好，請問要喝什麼？ (您好，請問要喝什麼？)
- 客人: 一杯熱拿鐵，謝謝。 (一杯熱拿鐵，謝謝。)
- 店員: 在這裡喝，還是帶走？ (在這裡喝，還是帶走？)
- 客人: 帶走，謝謝。 (帶走，謝謝。)
- 店員: 好的，一共九十元。 (好的，一共九十元。)
- 客人: 好的。 (好的。)
- 店員: 請在旁邊稍等一下。 (請在旁邊稍等一下。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請問要喝什麼？ (您好，請問要喝什麼？) | 一杯熱拿鐵，謝謝。 (一杯熱拿鐵，謝謝。) | 1. 請問飯店在哪裡？ (請問飯店在哪裡？) [wrong_scenario] - feedback: 這是在問飯店位置，不是在點咖啡。先說出要點的飲料。<br>2. 不用，我不喝。 (不用，我不喝。) [refusal_when_order_expected] - feedback: 這像是在拒絕點餐。本回合要練習點一杯飲料。 |  |  |
| t2 | 在這裡喝，還是帶走？ (在這裡喝，還是帶走？) | 帶走，謝謝。 (帶走，謝謝。) | 1. 我有預訂。 (我有預訂。) [wrong_scenario] - feedback: 這是飯店入住常用句，不是在回答咖啡要不要帶走。<br>2. 我要一杯很大杯、少冰、半糖、加很多牛奶的咖啡。 (我要一杯很大杯、少冰、半糖、加很多牛奶的咖啡。) [overlong_non_a1] - feedback: 資訊太多，超出這個 A1 回合。先練習帶走，謝謝。 |  |  |
| t3 | 好的，一共九十元。 (好的，一共九十元。) | 好的。 (好的。) | 1. 往前走，然後左轉。 (往前走，然後左轉。) [mismatched_service_option] - feedback: 這是在給方向，不是在回應付款金額。<br>2. 我要退房。 (我要退房。) [wrong_scenario] - feedback: 這是飯店退房，不是咖啡店付款。 |  |  |
| t4 | 請在旁邊稍等一下。 (請在旁邊稍等一下。) | 謝謝。 (謝謝。) | 1. 請給我一間房。 (請給我一間房。) [wrong_location_request] - feedback: 這像是在飯店櫃台，不是咖啡店點餐結尾。<br>2. 洗手間在哪裡？ (洗手間在哪裡？) [wrong_scenario] - feedback: 這換成問路情境了。現在只需要道謝完成點餐。 |  |  |

---

## a1:zh:food_restaurant_ordering - 在餐廳點餐

- Level: A1
- Language: Chinese (zh)
- Scenario ID: food_restaurant_ordering
- Setting: 餐廳座位
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在台灣常見的簡單餐廳。用短句回答店員，點一道餐並確認。

### Clean Dialogue Path

- 店員: 您好，準備好點餐了嗎？ (您好，準備好點餐了嗎？)
- 客人: 好了，我們兩位。 (好了，我們兩位。)
- 店員: 今天想吃什麼？ (今天想吃什麼？)
- 客人: 我想要一份牛肉麵，謝謝。 (我想要一份牛肉麵，謝謝。)
- 店員: 一份牛肉麵，對嗎？ (一份牛肉麵，對嗎？)
- 客人: 對，謝謝。 (對，謝謝。)
- 店員: 好的，請稍等一下。 (好的，請稍等一下。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，準備好點餐了嗎？ (您好，準備好點餐了嗎？) | 好了，我們兩位。 (好了，我們兩位。) | 1. 我要結帳，謝謝。 (我要結帳，謝謝。) [asking_bill_before_ordering] - feedback: 這是在還沒點餐前就要結帳。現在要回答是否準備好點餐。<br>2. 一杯熱拿鐵，謝謝。 (一杯熱拿鐵，謝謝。) [cafe_only_request] - feedback: 這像咖啡店點飲料。現在是在餐廳座位回答店員。 | 先說準備好了，也可以補上兩位。 |  |
| t2 | 今天想吃什麼？ (今天想吃什麼？) | 我想要一份牛肉麵，謝謝。 (我想要一份牛肉麵，謝謝。) | 1. 外帶，謝謝。 (外帶，謝謝。) [takeout_answer_in_dine_in_context] - feedback: 這是在回答內用外帶，不是在點一道餐。<br>2. 我要一份很大碗、不要蔥、不要香菜、少鹽、加辣的牛肉麵。 (我要一份很大碗、不要蔥、不要香菜、少鹽、加辣的牛肉麵。) [overlong_customization] - feedback: 資訊太多，超出這個 A1 回合。先練習點一道簡單餐點。 | 用我想要一份...就能點一道餐。 | 我想要一份...<br>我想要一份... 是點一道餐的簡短自然說法。<br>我想要一份牛肉麵。 = 我想要一份牛肉麵。<br>我要一份水餃，謝謝。 = 我要一份水餃，謝謝。 |
| t3 | 一份牛肉麵，對嗎？ (一份牛肉麵，對嗎？) | 對，謝謝。 (對，謝謝。) | 1. 不是，一杯咖啡。 (不是，一杯咖啡。) [wrong_item_confirmation] - feedback: 這把餐點換成咖啡了。若訂單正確，直接確認即可。<br>2. 我刷卡。 (我刷卡。) [payment_answer_too_early] - feedback: 這是付款資訊。現在店員只是在確認餐點。 | 訂單正確時，說對，謝謝。 |  |
| t4 | 好的，請稍等一下。 (好的，請稍等一下。) | 謝謝。 (謝謝。) | 1. 請問二號月台在哪裡？ (請問二號月台在哪裡？) [wrong_scenario_request] - feedback: 這是車站問路，不是餐廳點餐收尾。<br>2. 早餐幾點開始？ (早餐幾點開始？) [hotel_question] - feedback: 這是飯店早餐問題。餐點已確認，只要道謝。 | 點餐完成，用謝謝收尾。 |  |

---

## a1:zh:hotel_checkout - 在飯店辦理退房

- Level: A1
- Language: Chinese (zh)
- Scenario ID: hotel_checkout
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。說明要退房、提供房號、交回房卡，最後道謝。

### Clean Dialogue Path

- 櫃台人員: 您好，請問需要幫忙嗎？ (您好，請問需要幫忙嗎？)
- 住客: 您好，我要退房。 (您好，我要退房。)
- 櫃台人員: 好的，請問房號？ (好的，請問房號？)
- 住客: 房間是二零四號。 (房間是二零四號。)
- 櫃台人員: 謝謝。請把房卡給我。 (謝謝。請把房卡給我。)
- 住客: 好，房卡在這裡。 (好，房卡在這裡。)
- 櫃台人員: 好了，退房完成了。 (好了，退房完成了。)
- 住客: 謝謝您。 (謝謝您。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請問需要幫忙嗎？ (您好，請問需要幫忙嗎？) | 您好，我要退房。 (您好，我要退房。) | 1. Wi-Fi 密碼是什麼？ (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這是在問網路密碼，不是在辦理退房。<br>2. 我要一杯拿鐵。 (我要一杯拿鐵。) [food_order_wrong_scenario] - feedback: 這是點飲料。飯店櫃台退房要說我要退房。 |  |  |
| t2 | 好的，請問房號？ (好的，請問房號？) | 房間是二零四號。 (房間是二零四號。) | 1. 第二月台。 (第二月台。) [station_number_not_room] - feedback: 月台是車站用語，不是飯店房號。<br>2. 我要買票。 (我要買票。) [ticket_purchase_wrong_scenario] - feedback: 這是在買票。櫃台現在問的是房號。 |  |  |
| t3 | 謝謝。請把房卡給我。 (謝謝。請把房卡給我。) | 好，房卡在這裡。 (好，房卡在這裡。) | 1. 不用，我要留著。 (不用，我要留著。) [refusal_instead_of_handover] - feedback: 退房流程需要交回房卡；這裡不應拒絕。<br>2. 我姓陳。 (我姓陳。) [checkin_name_answer] - feedback: 這是入住時回答姓名，不是交房卡。 |  |  |
| t4 | 好了，退房完成了。 (好了，退房完成了。) | 謝謝您。 (謝謝您。) | 1. 還要多付多少？ (還要多付多少？) [extra_charge_dispute_out_of_scope] - feedback: 這會進入額外費用或爭議；本場景只練基本退房。<br>2. 登機門在哪裡？ (登機門在哪裡？) [airport_question_wrong_scenario] - feedback: 這是機場問題，不是飯店退房結尾。 |  |  |

---

## a1:zh:hotel_wifi_breakfast - 飯店 Wi-Fi 和早餐

- Level: A1
- Language: Chinese (zh)
- Scenario ID: hotel_wifi_breakfast
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。詢問 Wi-Fi 密碼和早餐時間地點，聽懂簡短回答後道謝。

### Clean Dialogue Path

- 櫃台人員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 房客: 請問 Wi-Fi 密碼在哪裡？ (請問 Wi-Fi 密碼在哪裡？)
- 櫃台人員: 密碼在房卡套上。 (密碼在房卡套上。)
- 房客: 在房卡套上，謝謝。 (在房卡套上，謝謝。)
- 櫃台人員: 還需要其他幫忙嗎？ (還需要其他幫忙嗎？)
- 房客: 早餐幾點開始？ (早餐幾點開始？)
- 櫃台人員: 早上七點開始，在二樓。 (早上七點開始，在二樓。)
- 房客: 早上七點，在二樓。謝謝。 (早上七點，在二樓。謝謝。)
- 櫃台人員: 不客氣。 (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 請問 Wi-Fi 密碼在哪裡？ (請問 Wi-Fi 密碼在哪裡？) | 1. 我需要一張新的房卡。 (我需要一張新的房卡。) [room_key_instead_of_wifi] - feedback: 這是在要房卡。你的目標是問 Wi-Fi 密碼。<br>2. 我想要一份牛肉麵。 (我想要一份牛肉麵。) [restaurant_order_answer] - feedback: 這是餐廳點餐。現在是在飯店櫃台問 Wi-Fi。 | 在飯店櫃台，直接問 Wi-Fi 密碼在哪裡。 |  |
| t2 | 密碼在房卡套上。 (密碼在房卡套上。) | 在房卡套上，謝謝。 (在房卡套上，謝謝。) | 1. 十點，在櫃台。 (十點，在櫃台。) [wrong_place_time_confirmation] - feedback: 這混入時間和地點，沒有確認 Wi-Fi 資訊在房卡套上。<br>2. 我現在付款。 (我現在付款。) [checkout_payment_phrase] - feedback: 這是付款句，不是在確認 Wi-Fi 密碼位置。 | 房卡套就是裝房卡的紙套。 | 在房卡套上<br>在...上 表示資訊印在那個物品上。<br>密碼在房卡套上。 = 密碼在房卡套上。<br>密碼在這裡。 = 密碼在這裡。 |
| t3 | 還需要其他幫忙嗎？ (還需要其他幫忙嗎？) | 早餐幾點開始？ (早餐幾點開始？) | 1. 兩位的桌子，謝謝。 (兩位的桌子，謝謝。) [restaurant_request] - feedback: 這像是在餐廳要座位。現在要問飯店早餐時間。<br>2. 請問二號月台在哪裡？ (請問二號月台在哪裡？) [station_question] - feedback: 這是車站問路。飯店櫃台現在要問早餐資訊。 | 接著問早餐時間。 |  |
| t4 | 早上七點開始，在二樓。 (早上七點開始，在二樓。) | 早上七點，在二樓。謝謝。 (早上七點，在二樓。謝謝。) | 1. 早上十點，在房間。 (早上十點，在房間。) [wrong_time_place] - feedback: 時間和地點都聽錯了。櫃台人員說早上七點，在二樓。<br>2. 我要退房。 (我要退房。) [checkout_payment_phrase] - feedback: 這是退房情境，不是在確認早餐資訊。 | 確認關鍵資訊：早上七點，二樓。 |  |

---

## a1:zh:problem_lost_item - 說小物品不見了

- Level: A1
- Language: Chinese (zh)
- Scenario ID: problem_lost_item
- Setting: 服務櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在服務櫃台。說一個小物品不見了，回答可能在哪裡不見，聽懂下一步去哪裡問，最後道謝。

### Clean Dialogue Path

- 工作人員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 客人: 我的帽子不見了。 (我的帽子不見了。)
- 工作人員: 可能在哪裡不見的？ (可能在哪裡不見的？)
- 客人: 可能在咖啡店。 (可能在咖啡店。)
- 工作人員: 請到左邊的失物招領處問問。 (請到左邊的失物招領處問問。)
- 客人: 左邊的失物招領處嗎？ (左邊的失物招領處嗎？)
- 工作人員: 對，請在那裡問。 (對，請在那裡問。)
- 客人: 好的，謝謝。 (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 我的帽子不見了。 (我的帽子不見了。) | 1. 這個多少錢？ (這個多少錢？) [price_question_wrong_goal] - feedback: 這是在問價格，不是在說遺失物品。<br>2. 我要一杯咖啡。 (我要一杯咖啡。) [food_order_wrong_goal] - feedback: 這是在點餐，不是在尋找遺失物。 |  |  |
| t2 | 可能在哪裡不見的？ (可能在哪裡不見的？) | 可能在咖啡店。 (可能在咖啡店。) | 1. 三點。 (三點。) [time_answer_wrong_slot] - feedback: 對方問地點，不是問時間。<br>2. 不用，謝謝。 (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕，沒有回答可能遺失的地點。 |  |  |
| t3 | 請到左邊的失物招領處問問。 (請到左邊的失物招領處問問。) | 左邊的失物招領處嗎？ (左邊的失物招領處嗎？) | 1. 我的帽子不見了。 (我的帽子不見了。) [repeated_lost_statement] - feedback: 已經說過物品不見了。現在要確認去哪裡問。<br>2. 需要報案嗎？ (需要報案嗎？) [police_report_out_of_scope] - feedback: 本場景不處理報案，只練低風險失物詢問。 |  |  |
| t4 | 對，請在那裡問。 (對，請在那裡問。) | 好的，謝謝。 (好的，謝謝。) | 1. 有人偷走了。 (有人偷走了。) [theft_accusation_out_of_scope] - feedback: 不要把低風險失物場景變成偷竊指控。<br>2. 你們要賠我。 (你們要賠我。) [compensation_out_of_scope] - feedback: 賠償或責任爭議不在本 A1 場景範圍。 |  |  |

---

## a1:zh:shopping_ask_price - 問商品價格

- Level: A1
- Language: Chinese (zh)
- Scenario ID: shopping_ask_price
- Setting: 小店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在台灣常見的小店或攤位。用短句問這個東西多少錢，聽懂價格後回應。

### Clean Dialogue Path

- 店員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 客人: 不好意思，這個多少錢？ (不好意思，這個多少錢？)
- 店員: 這個八十塊。 (這個八十塊。)
- 客人: 好，我要這個。 (好，我要這個。)
- 店員: 這個，對嗎？ (這個，對嗎？)
- 客人: 對，謝謝。 (對，謝謝。)
- 店員: 好的，謝謝。 (好的，謝謝。)
- 客人: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 不好意思，這個多少錢？ (不好意思，這個多少錢？) | 1. 請問車站在哪裡？ (請問車站在哪裡？) [directions_instead_of_price] - feedback: 這是在問路。現在要在商店問價格。<br>2. 我要一杯咖啡，謝謝。 (我要一杯咖啡，謝謝。) [ordering_food_instead_of_price] - feedback: 這像在咖啡店點飲料，不是在問商品價格。 | 先用不好意思叫住店員，再問價格。 |  |
| t2 | 這個八十塊。 (這個八十塊。) | 好，我要這個。 (好，我要這個。) | 1. 我刷卡嗎？ (我刷卡嗎？) [payment_method_too_early] - feedback: 這直接跳到付款方式。先回應是否要買。<br>2. 我要三個大的。 (我要三個大的。) [wrong_quantity_answer] - feedback: 這加入數量和大小，超出這個一件商品的 A1 場景。 | 要買時可以說好，我要這個。 |  |
| t3 | 這個，對嗎？ (這個，對嗎？) | 對，謝謝。 (對，謝謝。) | 1. 不是，洗手間在哪裡？ (不是，洗手間在哪裡？) [restroom_request] - feedback: 這換成問洗手間。店員是在確認商品。<br>2. 太貴了，可以便宜很多嗎？ (太貴了，可以便宜很多嗎？) [overlong_bargaining] - feedback: 這是議價，超出這個 A1 問價格場景。 | 商品正確時，直接說對，謝謝。 |  |
| t4 | 好的，謝謝。 (好的，謝謝。) | 謝謝。 (謝謝。) | 1. 我要結帳，謝謝。 (我要結帳，謝謝。) [restaurant_bill_request] - feedback: 這比較像餐廳結帳，不是商店問價後收尾。<br>2. 我們幾點見？ (我們幾點見？) [friend_meeting_request] - feedback: 這是在約朋友，不是在商店完成購買。 | 最後簡短道謝即可。 |  |

---

## a1:zh:social_running_late - 說自己會晚到

- Level: A1
- Language: Chinese (zh)
- Scenario ID: social_running_late
- Setting: 傳訊息給朋友
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要跟朋友見面，但會晚到。簡單說抱歉、晚一點到、幾分鐘、謝謝和待會見。

### Clean Dialogue Path

- 朋友: 你在哪裡？ (你在哪裡？)
- 你: 不好意思，我會晚一點到。 (不好意思，我會晚一點到。)
- 朋友: 幾分鐘？ (幾分鐘？)
- 你: 大概十分鐘。 (大概十分鐘。)
- 朋友: 好，我等你。 (好，我等你。)
- 你: 謝謝你等我。 (謝謝你等我。)
- 朋友: 待會見。 (待會見。)
- 你: 待會見。 (待會見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 你在哪裡？ (你在哪裡？) | 不好意思，我會晚一點到。 (不好意思，我會晚一點到。) | 1. 我要結帳。 (我要結帳。) [payment_wrong_goal] - feedback: 這是在餐廳付款，不是在告訴朋友會晚到。<br>2. 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) [service_register_wrong_context] - feedback: 這是服務人員語氣；朋友訊息要自然簡短。 |  |  |
| t2 | 幾分鐘？ (幾分鐘？) | 大概十分鐘。 (大概十分鐘。) | 1. 第二月台。 (第二月台。) [place_number_wrong_answer] - feedback: 對方問幾分鐘，不是問地點或月台。<br>2. 不用，謝謝。 (不用，謝謝。) [refusal_wrong_answer] - feedback: 這是在拒絕幫助，沒有回答時間。 |  |  |
| t3 | 好，我等你。 (好，我等你。) | 謝謝你等我。 (謝謝你等我。) | 1. 不好意思，我會晚一點到。 (不好意思，我會晚一點到。) [repeated_late_message] - feedback: 已經說過會晚到了。現在要謝謝對方等你。<br>2. 謝謝您的服務。 (謝謝您的服務。) [overformal_service_thanks] - feedback: 這像服務情境，不像朋友等你的自然說法。 |  |  |
| t4 | 待會見。 (待會見。) | 待會見。 (待會見。) | 1. 我在藍色門前面。 (我在藍色門前面。) [exact_location_out_of_scope] - feedback: 本場景不練即時精準定位，只練晚到和時間。<br>2. 你為什麼不等我？ (你為什麼不等我？) [conflict_blame_out_of_scope] - feedback: 這會變成責怪或衝突；本場景要平和收尾。 |  |  |

---

## a1:zh:travel_hotel_checkin - 在飯店辦理入住

- Level: A1
- Language: Chinese (zh)
- Scenario ID: travel_hotel_checkin
- Setting: 飯店櫃台
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你到飯店櫃台辦理入住。用簡短中文說你有預訂，並回答姓名問題。

### Clean Dialogue Path

- 櫃台人員: 您好，請問有預訂嗎？ (您好，請問有預訂嗎？)
- 住客: 有，我有預訂。 (有，我有預訂。)
- 櫃台人員: 請問貴姓？ (請問您姓什麼？)
- 住客: 我姓陳。 (我姓陳。)
- 櫃台人員: 謝謝，我找到您的預訂了。 (謝謝，我找到您的預訂了。)
- 住客: 謝謝。 (謝謝。)
- 櫃台人員: 這是您的房卡，房間是二零四號。 (這是您的房卡，房間是二零四號。)
- 住客: 謝謝您。 (謝謝您。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請問有預訂嗎？ (您好，請問有預訂嗎？) | 有，我有預訂。 (有，我有預訂。) | 1. 一杯熱拿鐵，謝謝。 (一杯熱拿鐵，謝謝。) [restaurant_cafe_request] - feedback: 這是咖啡店點餐，不是飯店入住。<br>2. 洗手間在哪裡？ (洗手間在哪裡？) [directions_request] - feedback: 這是在問路。櫃台現在問的是你是否有預訂。 |  |  |
| t2 | 請問貴姓？ (請問您姓什麼？) | 我姓陳。 (我姓陳。) | 1. 我要退房。 (我要退房。) [checkout_instead_of_checkin] - feedback: 這是退房，不是提供入住姓名。<br>2. 我從台灣來，可能住兩天或三天，還想問早餐時間。 (我從台灣來，可能住兩天或三天，還想問早餐時間。) [overly_complex_explanation] - feedback: 資訊太多。A1 回合只要回答姓氏。 |  |  |
| t3 | 謝謝，我找到您的預訂了。 (謝謝，我找到您的預訂了。) | 謝謝。 (謝謝。) | 1. 在這裡喝，還是帶走？ (在這裡喝，還是帶走？) [wrong_scenario] - feedback: 這是咖啡店問題，不是飯店櫃台確認。<br>2. 往前走，然後左轉。 (往前走，然後左轉。) [directions_request] - feedback: 這是在給方向，不是在回應預訂確認。 |  |  |
| t4 | 這是您的房卡，房間是二零四號。 (這是您的房卡，房間是二零四號。) | 謝謝您。 (謝謝您。) | 1. 我要付款。 (我要付款。) [wrong_flow] - feedback: 櫃台已經給房卡了，這裡不需要切到付款句。<br>2. 再一杯咖啡，謝謝。 (再一杯咖啡，謝謝。) [restaurant_cafe_request] - feedback: 這又回到咖啡店點餐，不是飯店入住結尾。 |  |  |

---

## a1:zh:travel_restroom_directions - 問洗手間在哪裡

- Level: A1
- Language: Chinese (zh)
- Scenario ID: travel_restroom_directions
- Setting: 公共場所
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在公共場所，需要問洗手間在哪裡。用簡短、禮貌的中文問路，並確認方向。

### Clean Dialogue Path

- 工作人員: 您好，需要幫忙嗎？ (您好，需要幫忙嗎？)
- 訪客: 不好意思，洗手間在哪裡？ (不好意思，洗手間在哪裡？)
- 工作人員: 往前走，然後左轉。 (往前走，然後左轉。)
- 訪客: 往前走再左轉，對嗎？ (往前走再左轉，對嗎？)
- 工作人員: 對，就在左邊。 (對，就在左邊。)
- 訪客: 謝謝。 (謝謝。)
- 工作人員: 不客氣。 (不客氣。)
- 訪客: 再見。 (再見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，需要幫忙嗎？ (您好，需要幫忙嗎？) | 不好意思，洗手間在哪裡？ (不好意思，洗手間在哪裡？) | 1. 一杯熱拿鐵，謝謝。 (一杯熱拿鐵，謝謝。) [price_order_payment] - feedback: 這是在點飲料，不是在問洗手間位置。<br>2. 我有預訂。 (我有預訂。) [wrong_place_noun] - feedback: 這是飯店入住句。問洗手間要說洗手間在哪裡。 |  |  |
| t2 | 往前走，然後左轉。 (往前走，然後左轉。) | 往前走再左轉，對嗎？ (往前走再左轉，對嗎？) | 1. 刷卡，謝謝。 (刷卡，謝謝。) [price_order_payment] - feedback: 這是在付款，不是在確認方向。<br>2. 我從台灣來。 (我從台灣來。) [personal_status_instead_of_location] - feedback: 這是個人資訊，沒有確認你聽到的方向。 |  |  |
| t3 | 對，就在左邊。 (對，就在左邊。) | 謝謝。 (謝謝。) | 1. 在這裡喝，還是帶走？ (在這裡喝，還是帶走？) [wrong_scenario] - feedback: 這是咖啡店問題，不是問路後的回應。<br>2. 我要辦理入住。 (我要辦理入住。) [wrong_scenario] - feedback: 這是飯店入住，不是完成問路。 |  |  |
| t4 | 不客氣。 (不客氣。) | 再見。 (再見。) | 1. 請給我一間房。 (請給我一間房。) [wrong_place_noun] - feedback: 這是飯店需求，不是公共場所問路的收尾。<br>2. 洗手間九十元。 (洗手間九十元。) [price_order_payment] - feedback: 這把情境轉成價格付款，和本回合方向理解不符。 |  |  |

---

## a1:zh:travel_station_directions - 在車站問路

- Level: A1
- Language: Chinese (zh)
- Scenario ID: travel_station_directions
- Setting: 捷運站大廳
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在台灣常見的捷運或車站大廳。禮貌詢問二號月台，並確認簡短方向。

### Clean Dialogue Path

- 站務人員: 您好，請說。 (您好，請說。)
- 旅客: 請問二號月台在哪裡？ (請問二號月台在哪裡？)
- 站務人員: 往前直走，然後右轉。 (往前直走，然後右轉。)
- 旅客: 直走，然後右轉。 (直走，然後右轉。)
- 站務人員: 再搭手扶梯下去。 (再搭手扶梯下去。)
- 旅客: 好，謝謝。 (好，謝謝。)
- 站務人員: 不客氣。 (不客氣。)
- 旅客: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請說。 (您好，請說。) | 請問二號月台在哪裡？ (請問二號月台在哪裡？) | 1. 請問洗手間在哪裡？ (請問洗手間在哪裡？) [restroom_question_wrong_goal] - feedback: 這是在問洗手間。你的目標是找到二號月台。<br>2. 我要搭計程車去市中心。 (我要搭計程車去市中心。) [taxi_destination_answer] - feedback: 這換成搭計程車的情境。現在要問車站月台方向。 | 問路先用請問，再說要找的地方。 |  |
| t2 | 往前直走，然後右轉。 (往前直走，然後右轉。) | 直走，然後右轉。 (直走，然後右轉。) | 1. 左轉，然後下樓。 (左轉，然後下樓。) [wrong_direction] - feedback: 方向聽錯了。站務人員說直走，然後右轉。<br>2. 我刷卡。 (我刷卡。) [payment_answer] - feedback: 這是付款句，不是在確認方向。 | 抓住直走和右轉兩個方向詞。 | 直走 / 右轉<br>直走是往前走，右轉是往右邊轉。<br>往前直走。 = 往前直走。<br>然後右轉。 = 然後右轉。 |
| t3 | 再搭手扶梯下去。 (再搭手扶梯下去。) | 好，謝謝。 (好，謝謝。) | 1. 五號月台，對嗎？ (五號月台，對嗎？) [wrong_platform_number] - feedback: 月台號碼變錯了。你問的是二號月台。<br>2. 我要轉車、買票，然後去市中心。 (我要轉車、買票，然後去市中心。) [over_detailed_route] - feedback: 這太長，也不是本回合需要的確認。先簡短回應。 | 聽懂後可以簡短確認並道謝。 |  |
| t4 | 不客氣。 (不客氣。) | 謝謝。 (謝謝。) | 1. 我想要一份牛肉麵。 (我想要一份牛肉麵。) [restaurant_order] - feedback: 這是餐廳點餐，不是車站問路結尾。<br>2. Wi-Fi 密碼在哪裡？ (Wi-Fi 密碼在哪裡？) [hotel_question] - feedback: 這是飯店問題。你已經拿到車站方向，只要道謝。 | 問路結尾再道謝即可。 |  |

---

## a1:zh:travel_taxi_destination - 在計程車說目的地

- Level: A1
- Language: Chinese (zh)
- Scenario ID: travel_taxi_destination
- Setting: 計程車
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你上了計程車。用簡短中文說目的地、確認，並聽懂大概時間。

### Clean Dialogue Path

- 司機: 您好，要去哪裡？ (您好，要去哪裡？)
- 乘客: 到星光飯店，謝謝。 (到星光飯店，謝謝。)
- 司機: 星光飯店，對嗎？ (星光飯店，對嗎？)
- 乘客: 對，沒錯。 (對，沒錯。)
- 司機: 好，大概十分鐘。 (好，大概十分鐘。)
- 乘客: 好的。 (好的。)
- 司機: 到了。 (到了。)
- 乘客: 謝謝您。 (謝謝您。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，要去哪裡？ (您好，要去哪裡？) | 到星光飯店，謝謝。 (到星光飯店，謝謝。) | 1. 洗手間在哪裡？ (洗手間在哪裡？) [directions_request_not_destination] - feedback: 這是在問路。司機問的是要開去哪裡。<br>2. 我要買一張票。 (我要買一張票。) [ticket_purchase_wrong_scenario] - feedback: 這像是在車站買票，不是在計程車上說目的地。 |  |  |
| t2 | 星光飯店，對嗎？ (星光飯店，對嗎？) | 對，沒錯。 (對，沒錯。) | 1. 到星光飯店，謝謝。 (到星光飯店，謝謝。) [repeated_prior_destination] - feedback: 目的地已經說過了。現在司機是在確認，要回答對或不對。<br>2. 不用了，我在這裡下車。 (不用了，我在這裡下車。) [cancellation_instead_of_confirmation] - feedback: 這會改變行程。目的地正確時應該確認。 |  |  |
| t3 | 好，大概十分鐘。 (好，大概十分鐘。) | 好的。 (好的。) | 1. 多少錢？ (多少錢？) [fare_detail_out_of_scope] - feedback: 這會切到費用細節；本場景只練目的地和簡短行程狀態。<br>2. 我要一杯咖啡。 (我要一杯咖啡。) [wrong_scenario_request] - feedback: 這是咖啡店句子，不是回應司機說的時間。 |  |  |
| t4 | 到了。 (到了。) | 謝謝您。 (謝謝您。) | 1. 要去哪裡？ (要去哪裡？) [driver_role_sentence] - feedback: 這是司機會問的句子。乘客到達時應該道謝。<br>2. 我要買去台中的票。 (我要買去台中的票。) [ticket_purchase_wrong_scenario] - feedback: 這回到買票情境，不是計程車到達結尾。 |  |  |

---

## a1:zh:travel_ticket_buying - 買一張車票

- Level: A1
- Language: Chinese (zh)
- Scenario ID: travel_ticket_buying
- Setting: 車站售票窗口
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在台灣車站售票窗口。買一張到台中的車票，確認後付款或道謝。

### Clean Dialogue Path

- 售票員: 您好，請問要去哪裡？ (您好，請問要去哪裡？)
- 旅客: 我要一張到台中的票。 (我要一張到台中的票。)
- 售票員: 一張到台中，對嗎？ (一張到台中，對嗎？)
- 旅客: 對，謝謝。 (對，謝謝。)
- 售票員: 一共三百元。 (一共三百元。)
- 旅客: 刷卡，謝謝。 (刷卡，謝謝。)
- 售票員: 這是您的車票。三號月台。 (這是您的車票。三號月台。)
- 旅客: 謝謝。 (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 您好，請問要去哪裡？ (您好，請問要去哪裡？) | 我要一張到台中的票。 (我要一張到台中的票。) | 1. 請問月台在哪裡？ (請問月台在哪裡？) [directions_instead_of_purchase] - feedback: 這是在問路。現在需要先買票。<br>2. 我要一杯咖啡。 (我要一杯咖啡。) [food_order] - feedback: 這是在點咖啡，不是在車站買票。 | 說一張到目的地的票。 |  |
| t2 | 一張到台中，對嗎？ (一張到台中，對嗎？) | 對，謝謝。 (對，謝謝。) | 1. 不用，謝謝。 (不用，謝謝。) [cancel_when_confirming] - feedback: 這像是在取消。對方正在確認目的地和數量。<br>2. 兩張到高雄。 (兩張到高雄。) [wrong_quantity_destination] - feedback: 這改成兩張和另一個目的地，和原本需求不一致。 | 確認正確即可。 |  |
| t3 | 一共三百元。 (一共三百元。) | 刷卡，謝謝。 (刷卡，謝謝。) | 1. 我叫小林。 (我叫小林。) [self_intro_answer] - feedback: 這是自我介紹，不是回應票價或付款。<br>2. 我要訂一間房。 (我要訂一間房。) [hotel_booking_phrase] - feedback: 這是飯店用語，不是買車票。 | 可以簡短說刷卡。 |  |
| t4 | 這是您的車票。三號月台。 (這是您的車票。三號月台。) | 謝謝。 (謝謝。) | 1. 很高興認識你。 (很高興認識你。) [self_intro_close] - feedback: 這是第一次見面收尾，不是售票窗口結束。<br>2. 請說慢一點。 (請說慢一點。) [repair_after_handover] - feedback: 如果已理解月台資訊，最後只要道謝即可。 | 用謝謝收尾。 |  |

---
