# A1 Thai Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:th:convenience_payment_card_cash - จ่ายเงินที่ร้านสะดวกซื้อ

- Level: A1
- Language: Thai (th)
- Scenario ID: convenience_payment_card_cash
- Setting: เคาน์เตอร์ร้านสะดวกซื้อ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國便利商店櫃台付款。聽店員問什麼，選一句自然接得上的泰文。

### Clean Dialogue Path

- พนักงาน: ทั้งหมดหนึ่งร้อยยี่สิบบาทค่ะ จ่ายเงินสดหรือบัตรคะ (總共一百二十泰銖。付現金還是刷卡？)
- คุณ: บัตรค่ะ (卡片，謝謝。)
- พนักงาน: แตะบัตรตรงนี้นะคะ (請在這裡感應卡片。)
- คุณ: ได้ค่ะ (好的。)
- พนักงาน: รับถุงไหมคะ (需要袋子嗎？)
- คุณ: ไม่รับค่ะ (不用袋子。)
- พนักงาน: เรียบร้อยค่ะ ขอบคุณค่ะ (好了，謝謝。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: รับของได้เลยค่ะ (可以拿商品了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ทั้งหมดหนึ่งร้อยยี่สิบบาทค่ะ จ่ายเงินสดหรือบัตรคะ (總共一百二十泰銖。付現金還是刷卡？) | บัตรค่ะ (卡片，謝謝。) | 1. เอากาแฟเย็นค่ะ (我要冰咖啡。) [wrong_scenario_ordering] - feedback: 這句是在點飲料。現在商品已經結帳，店員在問付款方式。<br>2. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問方向。現在要回答現金或卡片。<br>3. เงินสดค่ะ (現金，謝謝。) [wrong_payment_method] - feedback: 這也是付款方式，但這一輪要練習刷卡時的回答。 | 店員在問付款方式。要刷卡時，可以短短說「บัตรค่ะ」。 | เงินสด / บัตร<br>「เงินสด」是現金，「บัตร」是卡片。回答時加上 `ค่ะ` 保持禮貌。<br>บัตรค่ะ = 卡片，謝謝。<br>เงินสดค่ะ = 現金，謝謝。 |
| t2 | แตะบัตรตรงนี้นะคะ (請在這裡感應卡片。) | ได้ค่ะ (好的。) | 1. บัตรค่ะ (卡片，謝謝。) [repeated_prior_answer] - feedback: 付款方式已經說了。現在店員在告訴你感應卡片。<br>2. เท่าไหร่คะ (多少錢？) [wrong_act_price_question] - feedback: 價格剛剛已經說了。這裡先照店員指示付款。 | 店員要你在這裡感應卡片。簡短回答「ได้ค่ะ」就可以。 |  |
| t3 | รับถุงไหมคะ (需要袋子嗎？) | ไม่รับค่ะ (不用袋子。) | 1. บัตรค่ะ (卡片，謝謝。) [repeated_prior_answer] - feedback: 刷卡已經完成了。現在店員在問要不要袋子。<br>2. ที่สถานีค่ะ (在車站。) [wrong_scenario_schedule] - feedback: 這像是在約地點。現在是便利商店櫃台，要回答袋子的問題。 | ถุง 是袋子。不要袋子時，可以說「ไม่รับค่ะ」。 |  |
| t4 | เรียบร้อยค่ะ ขอบคุณค่ะ (好了，謝謝。) | ขอบคุณค่ะ (謝謝。) | 1. เอากาแฟเย็นค่ะ (我要冰咖啡。) [wrong_scenario_ordering] - feedback: 結帳已經結束了。這裡用謝謝收尾比較自然。<br>2. ไม่รับค่ะ (不用袋子。) [repeated_prior_answer] - feedback: 袋子的問題已經回答過了。現在店員在結束交易。 | 交易結束了。用謝謝收尾就好。 |  |

---

## a1:th:core_repair_repeat_slowly - ขอให้พูดอีกครั้ง

- Level: A1
- Language: Thai (th)
- Scenario ID: core_repair_repeat_slowly
- Setting: เคาน์เตอร์ร้านกาแฟ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台沒聽清楚問題。選自然、簡短的泰文修復句。

### Clean Dialogue Path

- พนักงาน: ทานที่นี่หรือกลับบ้านครับ (內用還是外帶？)
- คุณ: ขอโทษครับ พูดอีกครั้งได้ไหมครับ (不好意思，可以再說一次嗎？)
- พนักงาน: ทานที่นี่หรือกลับบ้านครับ (內用還是外帶？)
- คุณ: พูดช้า ๆ ได้ไหมครับ (可以說慢一點嗎？)
- พนักงาน: ทานที่นี่ไหม หรือกลับบ้าน (內用嗎？還是外帶？)
- คุณ: กลับบ้านครับ ขอบคุณครับ (外帶，謝謝。)
- พนักงาน: โอเค เรียบร้อยครับ (好的，完成了。)
- คุณ: ขอบคุณครับ (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ทานที่นี่หรือกลับบ้านครับ (內用還是外帶？) | ขอโทษครับ พูดอีกครั้งได้ไหมครับ (不好意思，可以再說一次嗎？) | 1. ใช่ครับ (是的。) [blind_confirmation_before_understanding] - feedback: 你還沒聽懂，先不要盲目確認。<br>2. ขอบคุณครับ ลาก่อนครับ (謝謝，再見。) [closing_before_understanding] - feedback: 還沒完成互動，現在需要請對方重複。 | 你沒聽清楚。先請對方再說一次。 |  |
| t2 | ทานที่นี่หรือกลับบ้านครับ (內用還是外帶？) | พูดช้า ๆ ได้ไหมครับ (可以說慢一點嗎？) | 1. ขอตั๋วหนึ่งใบครับ (請給我一張票。) [travel_answer_to_repair_moment] - feedback: 這是買票句，不是請對方說慢一點。<br>2. ขอกาแฟหนึ่งแก้วครับ (請給我一杯咖啡。) [guessing_order_before_understanding] - feedback: 你還沒聽懂問題，先不要猜著點餐。 | 還是太快。請對方說慢一點。 | พูดช้า ๆ<br>ใช้ขอให้คู่สนทนาพูดช้าลงแบบสุภาพ<br>พูดช้า ๆ ได้ไหมครับ = 可以說慢一點嗎？ |
| t3 | ทานที่นี่ไหม หรือกลับบ้าน (內用嗎？還是外帶？) | กลับบ้านครับ ขอบคุณครับ (外帶，謝謝。) | 1. พูดอีกครั้งได้ไหมครับ (可以再說一次嗎？) [repair_repeated_after_prompt_clear] - feedback: 這次問題已經清楚，可以回答了。<br>2. ยินดีที่ได้รู้จักครับ (很高興認識你。) [social_phrase_for_service_question] - feedback: 這是社交見面語，不是在回答內用或外帶。 | 現在問題清楚了。選一個簡短回答。 |  |
| t4 | โอเค เรียบร้อยครับ (好的，完成了。) | ขอบคุณครับ (謝謝。) | 1. พูดอีกครั้งได้ไหมครับ (可以再說一次嗎？) [repair_after_understood] - feedback: 問題已經解決了。這裡簡短道謝即可。<br>2. ขอตั๋วหนึ่งใบครับ (請給我一張票。) [wrong_scenario_ticket] - feedback: 這是買票用語，不是櫃台收尾。 | 問題已經解決。最後道謝。 |  |

---

## a1:th:daily_meet_friend - เจอเพื่อน

- Level: A1
- Language: Thai (th)
- Scenario ID: daily_meet_friend
- Setting: หน้าร้านกาแฟ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友碰面。選自然、簡短的泰文。

### Clean Dialogue Path

- เพื่อน: มาแล้วเหรอ (你來了啊？)
- คุณ: หวัดดี ดีใจที่เจอนะ (嗨，很高興見到你。)
- เพื่อน: เราไปดูหนังกันใช่ไหม (我們要去看電影，對嗎？)
- คุณ: ใช่ ไปกัน (對，走吧。)
- เพื่อน: พร้อมหรือยัง (準備好了嗎？)
- คุณ: พร้อมแล้ว ไปกัน (準備好了，走吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มาแล้วเหรอ (你來了啊？) | หวัดดี ดีใจที่เจอนะ (嗨，很高興見到你。) | 1. ขอเมนูค่ะ (請給我菜單。) [service_request_to_friend] - feedback: 這像是在跟店員說話，不是跟朋友打招呼。<br>2. อันนี้เท่าไหร่คะ (這個多少錢？) [shopping_price_in_friend_meeting] - feedback: 這是購物問題。現在是在和朋友碰面。 | 朋友用輕鬆語氣打招呼。 |  |
| t2 | เราไปดูหนังกันใช่ไหม (我們要去看電影，對嗎？) | ใช่ ไปกัน (對，走吧。) | 1. จ่ายบัตรค่ะ (刷卡。) [payment_answer_to_plan_check] - feedback: 這是付款回答，不是在確認朋友的計畫。<br>2. สถานีอยู่ที่ไหนคะ (車站在哪裡？) [directions_instead_of_plan_confirmation] - feedback: 這是在問路。朋友問的是計畫。 | 朋友在確認計畫。用ใช่簡短回答。 | ใช่<br>ใช้ตอบยืนยันแผนกับเพื่อนแบบสั้นและธรรมชาติ<br>ใช่ ไปกัน = 對，走吧。 |
| t3 | พร้อมหรือยัง (準備好了嗎？) | พร้อมแล้ว ไปกัน (準備好了，走吧。) | 1. ยินดีที่ได้รู้จักค่ะ (很高興認識你。) [first_meeting_greeting_for_known_friend] - feedback: 這像第一次見面。這裡是已約好的朋友。<br>2. ขอแซนด์วิชค่ะ (請給我三明治。) [food_order_in_friend_meeting] - feedback: 這是在點餐，不是在回答準備好了。 | 朋友問你準備好了沒。 |  |

---

## a1:th:daily_schedule_time - นัดเวลาเจอกัน

- Level: A1
- Language: Thai (th)
- Scenario ID: daily_schedule_time
- Setting: นัดกับเพื่อน
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在和泰國朋友約時間。聽對方問什麼，選一句自然接得上的泰文。

### Clean Dialogue Path

- เพื่อน: พรุ่งนี้เจอกันกี่โมงดี (明天幾點見好呢？)
- คุณ: บ่ายสามโมงดีไหม (下午三點好嗎？)
- เพื่อน: บ่ายสามได้ เจอที่สถานีนะ (下午三點可以，在車站見喔。)
- คุณ: ได้ เจอกันที่สถานี (可以，在車站見。)
- เพื่อน: โอเค เจอกันพรุ่งนี้บ่ายสาม (好，明天下午三點見。)
- คุณ: โอเค แล้วเจอกัน (好，到時見。)
- เพื่อน: เจอกัน (到時見。)
- คุณ: เจอกัน (到時見。)
- เพื่อน: นัดเวลาเรียบร้อยแล้ว (時間約好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | พรุ่งนี้เจอกันกี่โมงดี (明天幾點見好呢？) | บ่ายสามโมงดีไหม (下午三點好嗎？) | 1. ที่สถานีดีไหม (在車站好嗎？) [location_answer_when_time_requested] - feedback: 這是在說地點。對方現在問的是幾點。<br>2. วันนี้ไม่ได้ (今天不行。) [wrong_act_refusal] - feedback: 這像是在拒絕。這裡要先回答或提議時間。<br>3. พรุ่งนี้ได้ (明天可以。) [wrong_day_time_answer] - feedback: 日期已經知道是明天。現在要說幾點。 | 對方在問時間。可以用「บ่ายสามโมงดีไหม」提議下午三點。 | กี่โมง / บ่ายสามโมง<br>「กี่โมง」是幾點。「บ่ายสามโมง」是下午三點。<br>กี่โมง = 幾點<br>บ่ายสามโมง = 下午三點 |
| t2 | บ่ายสามได้ เจอที่สถานีนะ (下午三點可以，在車站見喔。) | ได้ เจอกันที่สถานี (可以，在車站見。) | 1. บ่ายสามโมงดีไหม (下午三點好嗎？) [repeated_prior_answer] - feedback: 下午三點已經確定了。現在是在確認地點。<br>2. บัตรค่ะ (卡片，謝謝。) [wrong_scenario_payment] - feedback: 這是付款場景的回答。現在是在約見面時間和地點。 | 時間確定了，對方又說地點。可以簡短確認。 |  |
| t3 | โอเค เจอกันพรุ่งนี้บ่ายสาม (好，明天下午三點見。) | โอเค แล้วเจอกัน (好，到時見。) | 1. ที่สถานีดีไหม (在車站好嗎？) [repeated_prior_answer] - feedback: 地點已經確認了。現在用一句到時見收尾就好。<br>2. ไปไม่ได้ (不能去。) [wrong_act_refusal] - feedback: 這樣會突然取消。約定沒問題時，簡短確認即可。 | 對方在總結約定。用一句「แล้วเจอกัน」收尾很自然。 |  |
| t4 | เจอกัน (到時見。) | เจอกัน (到時見。) | 1. ไม่รับค่ะ (不用袋子。) [wrong_scenario_payment] - feedback: 這是付款場景的回答。這裡是朋友之間約好時間後的道別。<br>2. พรุ่งนี้ได้ (明天可以。) [overly_redundant_answer] - feedback: 日期和時間都確定了。直接說到時見比較自然。 | 對話結束了。照樣回一句到時見就可以。 |  |

---

## a1:th:daily_self_intro - แนะนำตัว

- Level: A1
- Language: Thai (th)
- Scenario ID: daily_self_intro
- Setting: โต๊ะแลกเปลี่ยนภาษา
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換桌第一次見到新朋友。選自然、簡短的泰文。

### Clean Dialogue Path

- เพื่อนใหม่: สวัสดี เราชื่อมายา คุณชื่ออะไร (你好，我叫 Maya。你叫什麼名字？)
- คุณ: สวัสดี ผมชื่ออเล็กซ์ครับ (你好，我叫 Alex。)
- เพื่อนใหม่: คุณเรียนภาษาไทยอยู่ใช่ไหม (你在學泰文，對嗎？)
- คุณ: ใช่ครับ ผมเรียนภาษาไทยอยู่ (是的，我正在學泰文。)
- เพื่อนใหม่: ดีเลย ยินดีที่ได้รู้จัก (很好。很高興認識你。)
- คุณ: ยินดีที่ได้รู้จักเช่นกันครับ (我也很高興認識你。)
- เพื่อนใหม่: ดีเลย เริ่มกันเลยนะ (很好，那我們開始吧。)
- คุณ: ครับ ขอบคุณครับ (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดี เราชื่อมายา คุณชื่ออะไร (你好，我叫 Maya。你叫什麼名字？) | สวัสดี ผมชื่ออเล็กซ์ครับ (你好，我叫 Alex。) | 1. ขอตั๋วหนึ่งใบครับ (請給我一張票。) [travel_service_phrase_in_self_intro] - feedback: 這是在買票，不是在介紹名字。<br>2. นี่เบอร์โทรของผมครับ (這是我的電話號碼。) [private_contact_detail] - feedback: 自我介紹不需要提供私人聯絡資料。 | 對方先介紹自己。用ชื่อ加名字簡短回答。 |  |
| t2 | คุณเรียนภาษาไทยอยู่ใช่ไหม (你在學泰文，對嗎？) | ใช่ครับ ผมเรียนภาษาไทยอยู่ (是的，我正在學泰文。) | 1. ผมชื่ออเล็กซ์ครับ (我叫 Alex。) [repeat_name_after_new_question] - feedback: 你已經說過名字；現在要回答是不是在學泰文。<br>2. พูดอีกครั้งได้ไหมครับ (可以再說一次嗎？) [repair_when_understood] - feedback: 這是聽不懂時用的修復句；這裡可以直接回答。 | 對方問你是不是在學泰文。用ใช่回答。 | กำลังเรียน...<br>ใช้บอกภาษาที่กำลังเรียนแบบสั้นและสุภาพ<br>ใช่ครับ ผมเรียนภาษาไทยอยู่ = 是的，我正在學泰文。 |
| t3 | ดีเลย ยินดีที่ได้รู้จัก (很好。很高興認識你。) | ยินดีที่ได้รู้จักเช่นกันครับ (我也很高興認識你。) | 1. ขอกาแฟหนึ่งแก้วครับ (請給我一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應初次見面。<br>2. เรียนท่านผู้จัดการ (敬啟經理。) [overformal_business_greeting] - feedback: 這太像正式書信，不適合語言交換桌。 | 對方友善收尾。用เช่นกันครับ回應。 |  |
| t4 | ดีเลย เริ่มกันเลยนะ (很好，那我們開始吧。) | ครับ ขอบคุณครับ (好的，謝謝。) | 1. ขอกาแฟหนึ่งแก้วครับ (請給我一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應初次見面。<br>2. เรียนท่านผู้จัดการ (敬啟經理。) [overformal_business_greeting] - feedback: 這太像正式書信，不適合語言交換桌。 | 對方準備開始活動。用簡短友善句回應。 |  |

---

## a1:th:digital_battery_charging - ขอชาร์จมือถือ

- Level: A1
- Language: Thai (th)
- Scenario ID: digital_battery_charging
- Setting: เคาน์เตอร์คาเฟ่
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國咖啡店想幫手機充電。選自然、簡短的泰文。

### Clean Dialogue Path

- พนักงาน: มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？)
- คุณ: ชาร์จมือถือได้ไหมคะ (可以充手機嗎？)
- พนักงาน: ได้ครับ (可以。)
- คุณ: ปลั๊กอยู่ที่ไหนคะ (插座在哪裡？)
- พนักงาน: อยู่ใต้โต๊ะซ้ายมือครับ (在左手邊桌子下面。)
- คุณ: ใต้โต๊ะซ้ายมือใช่ไหมคะ (左手邊桌子下面對嗎？)
- พนักงาน: ใช่ครับ ใช้ตรงนั้นได้ครับ (對，可以用那裡。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: คุณขอชาร์จมือถือและถามที่อยู่ปลั๊กแล้ว (你詢問了充電許可，也問了插座位置。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？) | ชาร์จมือถือได้ไหมคะ (可以充手機嗎？) | 1. รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) [wifi_question_instead_of_charging_permission] - feedback: 這是在問Wi-Fi。現在要先問能不能充手機。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_instead_of_charging_permission] - feedback: 這是在點咖啡，不是詢問充電。 | 先禮貌地問能不能充手機。 | ชาร์จมือถือได้ไหมคะ<br>問可不可以充手機時，可以說 `ชาร์จมือถือได้ไหมคะ`。<br>ชาร์จมือถือได้ไหมคะ = 可以充手機嗎？ |
| t2 | ได้ครับ (可以。) | ปลั๊กอยู่ที่ไหนคะ (插座在哪裡？) | 1. ชาร์จมือถือได้ไหมคะ (可以充手機嗎？) [repeat_permission_after_permission_granted] - feedback: 對方已經同意了。現在要問插座位置。<br>2. จ่ายเงินตอนนี้ได้ไหมคะ (可以現在付款嗎？) [payment_question_instead_of_outlet_location] - feedback: 這是在付款。現在要問插座在哪裡。 | 對方同意了。問插座在哪裡。 | ปลั๊กอยู่ที่ไหนคะ<br>問插座在哪裡時，可以說 `ปลั๊กอยู่ที่ไหนคะ`。<br>ปลั๊กอยู่ที่ไหนคะ = 插座在哪裡？ |
| t3 | อยู่ใต้โต๊ะซ้ายมือครับ (在左手邊桌子下面。) | ใต้โต๊ะซ้ายมือใช่ไหมคะ (左手邊桌子下面對嗎？) | 1. ห้องน้ำอยู่ที่ไหนคะ (廁所在哪裡？) [restroom_question_instead_of_location_confirmation] - feedback: 這是在問廁所。現在要確認插座位置。<br>2. ขอตั๋วหนึ่งใบค่ะ (請給我一張票。) [ticket_request_instead_of_location_confirmation] - feedback: 這是買票句，不符合充電情境。 | 確認你聽到的位置。 |  |
| t4 | ใช่ครับ ใช้ตรงนั้นได้ครับ (對，可以用那裡。) | ขอบคุณค่ะ (謝謝。) | 1. รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) [wifi_question_after_charging_help] - feedback: 充電位置已確認。現在簡短道謝比較自然。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_after_charging_help] - feedback: 這是在點咖啡。得到協助後先道謝。 | 對方確認了。簡短道謝即可。 |  |

---

## a1:th:digital_wifi_connect - ถามรหัสไวไฟและบอกว่าต่อไม่ได้

- Level: A1
- Language: Thai (th)
- Scenario ID: digital_wifi_connect
- Setting: เคาน์เตอร์คาเฟ่
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國咖啡店或飯店櫃台，需要連Wi-Fi。選自然、簡短的泰文。

### Clean Dialogue Path

- พนักงาน: มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？)
- คุณ: รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？)
- พนักงาน: รหัสคือ cafe123 ครับ (密碼是 cafe123。)
- คุณ: ขอบคุณค่ะ ขอลองก่อนนะคะ (謝謝，我先試試看。)
- พนักงาน: ใช้ได้ไหมครับ (可以用了嗎？)
- คุณ: ขอโทษค่ะ ต่อไม่ได้ค่ะ (不好意思，連不上。)
- พนักงาน: ลองอีกครั้งนะครับ (請再試一次。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: คุณถามรหัสไวไฟและบอกปัญหาแล้ว (你問了Wi-Fi密碼，也說明了問題。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？) | รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) | 1. จ่ายเงินตอนนี้ได้ไหมคะ (可以現在付款嗎？) [bill_payment_instead_of_wifi] - feedback: 這是在付款。現在要問Wi-Fi密碼。<br>2. ห้องน้ำอยู่ที่ไหนคะ (廁所在哪裡？) [restroom_question_instead_of_wifi] - feedback: 這是在問廁所。現在的目標是Wi-Fi。 | 你需要Wi-Fi密碼。用泰文短句問。 | รหัสไวไฟคืออะไรคะ<br>問Wi-Fi密碼時，可以說 `รหัสไวไฟคืออะไรคะ`。<br>รหัสไวไฟคืออะไรคะ = Wi-Fi密碼是什麼？ |
| t2 | รหัสคือ cafe123 ครับ (密碼是 cafe123。) | ขอบคุณค่ะ ขอลองก่อนนะคะ (謝謝，我先試試看。) | 1. รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) [repeat_password_question_after_answer] - feedback: 對方已經給了密碼。現在應該表示會試試看。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [coffee_order_after_password] - feedback: 這是在點咖啡，不是回應Wi-Fi密碼。 | 你拿到密碼了。說謝謝並試試看。 |  |
| t3 | ใช้ได้ไหมครับ (可以用了嗎？) | ขอโทษค่ะ ต่อไม่ได้ค่ะ (不好意思，連不上。) | 1. ใช้ได้ค่ะ (可以用了。) [success_answer_when_failure_expected] - feedback: 情境是連不上。需要說問題，而不是說成功。<br>2. ชาร์จมือถือได้ไหมคะ (可以充手機嗎？) [charging_question_instead_of_connection_failure] - feedback: 這是在問充電。現在要說Wi-Fi連不上。 | 你的手機連不上。用短句說問題。 | ต่อไม่ได้ค่ะ<br>說網路連不上時，可以說 `ต่อไม่ได้ค่ะ`。<br>ขอโทษค่ะ ต่อไม่ได้ค่ะ = 不好意思，連不上。 |
| t4 | ลองอีกครั้งนะครับ (請再試一次。) | ขอบคุณค่ะ (謝謝。) | 1. ใช้ได้ค่ะ (可以用了。) [unsupported_success_after_retry_instruction] - feedback: 對方只是叫你再試一次。先道謝比較自然。<br>2. จ่ายเงินตอนนี้ได้ไหมคะ (可以現在付款嗎？) [payment_phrase_after_wifi_help] - feedback: 這是付款句。Wi-Fi協助後簡短道謝即可。 | 對方給簡單建議。道謝即可。 |  |

---

## a1:th:food_bill_payment - จ่ายบิล

- Level: A1
- Language: Thai (th)
- Scenario ID: food_bill_payment
- Setting: ร้านอาหารสบาย ๆ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在餐廳或咖啡店用餐後要結帳。選自然、簡短的泰文。

### Clean Dialogue Path

- คุณ: ขอเช็กบิลค่ะ (請結帳。)
- พนักงาน: จ่ายบัตรหรือเงินสดคะ (刷卡還是現金？)
- คุณ: จ่ายบัตรค่ะ (刷卡。)
- พนักงาน: เรียบร้อยค่ะ ขอบคุณค่ะ (好了，謝謝。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: คุณจ่ายเงินและปิดบทสนทนาได้สุภาพ (你完成付款並禮貌收尾。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ขอเช็กบิลค่ะ (請結帳。) | ขอเช็กบิลค่ะ (請結帳。) | 1. ขอกาแฟอีกแก้วค่ะ (請再給我一杯咖啡。) [ordering_more_when_payment_expected] - feedback: 這是在加點。現在目標是結帳。<br>2. อันนี้เท่าไหร่คะ (這個多少錢？) [shop_price_in_restaurant] - feedback: 這是店裡問商品價格，不是餐廳帳單。 | 在餐廳要帳單可用ขอเช็กบิลค่ะ。 | ขอเช็กบิลค่ะ<br>วลีสั้นและธรรมชาติสำหรับขอจ่ายเงินหลังอาหาร<br>ขอเช็กบิลค่ะ = 請結帳。 |
| t2 | จ่ายบัตรหรือเงินสดคะ (刷卡還是現金？) | จ่ายบัตรค่ะ (刷卡。) | 1. ไม่เอาใบเสร็จค่ะ (不用收據。) [receipt_answer_to_payment_method] - feedback: 這是在回答收據問題。現在店員問的是卡或現金。<br>2. ทานที่นี่ค่ะ (內用。) [dine_in_answer_at_payment] - feedback: 這是點餐時回答內用。現在是在付款。 | 店員問付款方式。選一種回答。 |  |
| t4 | เรียบร้อยค่ะ ขอบคุณค่ะ (好了，謝謝。) | ขอบคุณค่ะ (謝謝。) | 1. สถานีอยู่ที่ไหนคะ (車站在哪裡？) [directions_after_payment] - feedback: 這突然換成問路。付款完成時簡短道謝即可。<br>2. ขอแซนด์วิชค่ะ (請給我三明治。) [new_order_after_payment_close] - feedback: 這像重新點餐，不是結帳收尾。 | 付款完成。用謝謝收尾。 |  |

---

## a1:th:food_coffee_ordering - สั่งกาแฟ

- Level: A1
- Language: Thai (th)
- Scenario ID: food_coffee_ordering
- Setting: เคาน์เตอร์คาเฟ่
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國咖啡店櫃台。聽店員問什麼，選一句自然接得上的泰文。

### Clean Dialogue Path

- พนักงาน: สวัสดีค่ะ รับอะไรดีคะ (您好。要點什麼呢？)
- คุณ: เอาอเมริกาโน่เย็นค่ะ (我要冰美式。)
- พนักงาน: ทานที่ร้านหรือกลับบ้านคะ (內用還是外帶？)
- คุณ: กลับบ้านค่ะ (外帶。)
- พนักงาน: อเมริกาโน่เย็น กลับบ้านนะคะ (冰美式外帶，對嗎？)
- คุณ: ใช่ค่ะ (是的。)
- พนักงาน: หกสิบบาทค่ะ รอสักครู่นะคะ (六十泰銖。請稍等一下。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: ได้แล้วค่ะ อเมริกาโน่เย็นค่ะ (好了。這是冰美式。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีค่ะ รับอะไรดีคะ (您好。要點什麼呢？) | เอาอเมริกาโน่เย็นค่ะ (我要冰美式。) | 1. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員在等你點飲料。<br>2. ไม่เป็นไรค่ะ (不用了／沒關係。) [wrong_act_refusal] - feedback: 這樣像是在說不用點。要點飲料時，用「เอา...ค่ะ」。 | 店員在問你要什麼。想要某個飲料，可以說「เอา...ค่ะ」。 |  |
| t2 | ทานที่ร้านหรือกลับบ้านคะ (內用還是外帶？) | กลับบ้านค่ะ (外帶。) | 1. เอาอเมริกาโน่เย็นค่ะ (我要冰美式。) [repeated_prior_answer] - feedback: 飲料已經點了。這裡是在問內用或外帶。<br>2. ใช่ค่ะ (是的。) [wrong_act_confirmation] - feedback: 店員給你兩個選項，不是問是或不是。要選「ที่ร้าน」或「กลับบ้าน」。 | ที่ร้าน 是在店裡，กลับบ้าน 是帶回家。選一個回答就好。 | ที่ร้าน / กลับบ้าน<br>「ที่ร้าน」是在店裡，「กลับบ้าน」是帶回家。<br>ที่ร้าน = 內用<br>กลับบ้าน = 外帶 |
| t3 | อเมริกาโน่เย็น กลับบ้านนะคะ (冰美式外帶，對嗎？) | ใช่ค่ะ (是的。) | 1. ไม่เอาค่ะ (不要了。) [wrong_act_refusal] - feedback: 這樣像是在取消。訂單沒問題時，說「ใช่ค่ะ」就好。<br>2. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [off_topic_statement] - feedback: 先確認飲料。問洗手間是另一個場景。 | 店員在確認訂單。沒問題時，可以簡短說「ใช่ค่ะ」。 |  |
| t4 | หกสิบบาทค่ะ รอสักครู่นะคะ (六十泰銖。請稍等一下。) | ขอบคุณค่ะ (謝謝。) | 1. กลับบ้านค่ะ (外帶。) [repeated_prior_answer] - feedback: 外帶剛剛已經說過了。現在是付款和等待。<br>2. เอาอเมริกาโน่เย็นค่ะ (我要冰美式。) [repeated_prior_answer] - feedback: 飲料已經點好了，現在接著付款或等待。 | 店員說價格，也請你稍等。簡短回答謝謝就可以。 |  |

---

## a1:th:food_restaurant_ordering - สั่งอาหารในร้านอาหาร

- Level: A1
- Language: Thai (th)
- Scenario ID: food_restaurant_ordering
- Setting: ร้านอาหารง่าย ๆ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國的簡單餐廳用餐。聽店員問什麼，選一句自然接得上的泰文。

### Clean Dialogue Path

- พนักงาน: สวัสดีครับ มากี่ท่านครับ (您好，幾位呢？)
- คุณ: คนเดียวค่ะ (一個人。)
- พนักงาน: รับอะไรดีครับ (要點什麼呢？)
- คุณ: ขอข้าวผัดไก่ค่ะ (請給我雞肉炒飯。)
- พนักงาน: ข้าวผัดไก่นะครับ (雞肉炒飯，對嗎？)
- คุณ: ใช่ค่ะ ขอบคุณค่ะ (是的，謝謝。)
- พนักงาน: ได้ครับ รอสักครู่นะครับ (好的，請稍等。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: พนักงานเข้าใจออร์เดอร์แล้ว (店員已經理解你的餐點了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีครับ มากี่ท่านครับ (您好，幾位呢？) | คนเดียวค่ะ (一個人。) | 1. คิดเงินค่ะ (我要結帳。) [bill_request_before_ordering] - feedback: 這是吃完後結帳。現在店員在確認人數。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [order_when_party_size_requested] - feedback: 這是在點飲料。先回答人數比較自然。 | 店員在確認人數。可以短短回答一位。 | คนเดียวค่ะ<br>「คนเดียวค่ะ」可以禮貌回答一個人用餐。<br>คนเดียวค่ะ = 一個人。 |
| t2 | รับอะไรดีครับ (要點什麼呢？) | ขอข้าวผัดไก่ค่ะ (請給我雞肉炒飯。) | 1. ขอน้ำเปล่าอย่างเดียวค่ะ (只要白開水。) [no_meal_when_meal_order_expected] - feedback: 這不像是在點一份餐。這裡要點一個主餐。<br>2. กลับบ้านค่ะ (外帶。) [takeout_answer_in_dine_in_order] - feedback: 這是在說外帶。現在店員問的是要點什麼。<br>3. สองคนค่ะ (兩位。) [party_size_answer_when_order_requested] - feedback: 人數已經確認了。現在要說餐點。 | 店員在問餐點。用「ขอ...ค่ะ」點一份。 | ขอ...ค่ะ<br>點餐時可以用「ขอ + 餐點 + ค่ะ」。<br>ขอข้าวผัดไก่ค่ะ = 請給我雞肉炒飯。 |
| t3 | ข้าวผัดไก่นะครับ (雞肉炒飯，對嗎？) | ใช่ค่ะ ขอบคุณค่ะ (是的，謝謝。) | 1. คิดเงินค่ะ (我要結帳。) [bill_request_before_order_ready] - feedback: 現在還在確認訂單，不是結帳。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [changes_to_cafe_order] - feedback: 這會改成點咖啡。要確認剛才的餐點。 | 店員在確認你的餐點。簡短說對並謝謝。 |  |
| t4 | ได้ครับ รอสักครู่นะครับ (好的，請稍等。) | ขอบคุณค่ะ (謝謝。) | 1. คนเดียวค่ะ (一個人。) [repeated_party_size] - feedback: 人數已經說過了。現在用謝謝收尾即可。<br>2. จ่ายบัตรค่ะ (我用卡付款。) [payment_answer_in_order_close] - feedback: 這是付款回答。現在只是店員確認餐點會準備。 | 點餐完成了。用一句謝謝收尾。 |  |

---

## a1:th:hotel_checkout - เช็กเอาต์ที่โรงแรม

- Level: A1
- Language: Thai (th)
- Scenario ID: hotel_checkout
- Setting: แผนกต้อนรับโรงแรม
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國飯店櫃台退房。選自然、簡短的泰文。

### Clean Dialogue Path

- พนักงานต้อนรับ: สวัสดีครับ มีอะไรให้ช่วยไหมครับ (您好，有什麼需要幫忙嗎？)
- คุณ: จะเช็กเอาต์ค่ะ (我要退房。)
- พนักงานต้อนรับ: ห้องเบอร์อะไรครับ (房號是多少？)
- คุณ: ห้อง 305 ค่ะ (305號房。)
- พนักงานต้อนรับ: ขอคีย์การ์ดด้วยครับ (請給我房卡。)
- คุณ: นี่คีย์การ์ดค่ะ (這是房卡。)
- พนักงานต้อนรับ: เรียบร้อยครับ นี่ใบเสร็จครับ (辦好了。這是收據。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงานต้อนรับ: คุณเช็กเอาต์เรียบร้อยแล้ว (你完成飯店退房了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีครับ มีอะไรให้ช่วยไหมครับ (您好，有什麼需要幫忙嗎？) | จะเช็กเอาต์ค่ะ (我要退房。) | 1. รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) [wifi_question_instead_of_checkout] - feedback: 這是在問Wi-Fi。現在要辦理退房。<br>2. อาหารเช้ากี่โมงคะ (早餐幾點？) [breakfast_question_instead_of_checkout] - feedback: 這是在問早餐，不是退房。 | 你要退房。用泰文說要check out。 | จะเช็กเอาต์ค่ะ<br>在飯店退房時，可以說 `จะเช็กเอาต์ค่ะ`。<br>จะเช็กเอาต์ค่ะ = 我要退房。 |
| t2 | ห้องเบอร์อะไรครับ (房號是多少？) | ห้อง 305 ค่ะ (305號房。) | 1. ชานชาลา 3 ค่ะ (三號月台。) [platform_number_instead_of_room_number] - feedback: 這是月台號碼。飯店櫃台需要房號。<br>2. ขอตั๋วหนึ่งใบค่ะ (請給我一張票。) [ticket_purchase_at_hotel_checkout] - feedback: 這是在買票，不是回答房號。 | 櫃台問房號。直接說房號。 |  |
| t3 | ขอคีย์การ์ดด้วยครับ (請給我房卡。) | นี่คีย์การ์ดค่ะ (這是房卡。) | 1. ไม่มีค่ะ (沒有。) [refusal_when_key_handover_expected] - feedback: 這是在說沒有。情境需要交出房卡。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_at_checkout] - feedback: 這是點餐，不是交房卡。 | 櫃台要房卡。把房卡交給對方。 | นี่คีย์การ์ดค่ะ<br>交東西給對方時，可以說 `นี่...ค่ะ`。<br>นี่คีย์การ์ดค่ะ = 這是房卡。 |
| t4 | เรียบร้อยครับ นี่ใบเสร็จครับ (辦好了。這是收據。) | ขอบคุณค่ะ (謝謝。) | 1. ห้อง 305 ค่ะ (305號房。) [repeat_room_number_after_completion] - feedback: 房號已經說過了。退房完成時道謝即可。<br>2. รหัสคืออะไรคะ (密碼是什麼？) [wifi_question_after_checkout] - feedback: 這又回到Wi-Fi問題。現在退房完成了。 | 退房完成。道謝收尾。 |  |

---

## a1:th:hotel_wifi_breakfast - ถามเรื่องไวไฟและอาหารเช้า

- Level: A1
- Language: Thai (th)
- Scenario ID: hotel_wifi_breakfast
- Setting: แผนกต้อนรับโรงแรม
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國飯店櫃台。聽櫃台人員回答，選一句自然接得上的泰文。

### Clean Dialogue Path

- พนักงานต้อนรับ: สวัสดีครับ มีอะไรให้ช่วยไหมครับ (您好，有什麼需要幫忙嗎？)
- คุณ: รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？)
- พนักงานต้อนรับ: รหัสอยู่บนบัตรห้องครับ (密碼在房卡上。)
- คุณ: ขอบคุณค่ะ อาหารเช้ากี่โมงคะ (謝謝。早餐幾點？)
- พนักงานต้อนรับ: อาหารเช้าเริ่มเจ็ดโมงครับ (早餐七點開始。)
- คุณ: เจ็ดโมงนะคะ ขอบคุณค่ะ (七點對吧，謝謝。)
- พนักงานต้อนรับ: ต้องการอะไรอีกไหมครับ (還需要其他東西嗎？)
- คุณ: ไม่แล้วค่ะ ขอบคุณค่ะ (不用了，謝謝。)
- พนักงานต้อนรับ: คุณรู้ข้อมูลไวไฟและเวลาอาหารเช้าแล้ว (你知道Wi-Fi和早餐時間了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีครับ มีอะไรให้ช่วยไหมครับ (您好，有什麼需要幫忙嗎？) | รหัสไวไฟคืออะไรคะ (Wi-Fi密碼是什麼？) | 1. ขอกุญแจห้องค่ะ (請給我房卡。) [room_key_question_instead_of_wifi] - feedback: 這是在要房卡。你的目標是問Wi-Fi密碼。<br>2. จะเช็กเอาต์ค่ะ (我要退房。) [checkout_payment_phrase] - feedback: 這像是退房。現在要問Wi-Fi。 | 你想問Wi-Fi密碼。用短句禮貌地問。 | รหัสไวไฟ<br>問Wi-Fi密碼時，可以說「รหัสไวไฟคืออะไรคะ」。<br>รหัสไวไฟคืออะไรคะ = Wi-Fi密碼是什麼？ |
| t2 | รหัสอยู่บนบัตรห้องครับ (密碼在房卡上。) | ขอบคุณค่ะ อาหารเช้ากี่โมงคะ (謝謝。早餐幾點？) | 1. ขอข้าวผัดไก่ค่ะ (請給我雞肉炒飯。) [restaurant_order_when_breakfast_info_expected] - feedback: 這是在餐廳點餐。現在是在飯店櫃台問早餐資訊。<br>2. จ่ายบัตรค่ะ (我用卡付款。) [payment_answer_in_hotel_info_context] - feedback: 這是在付款。現在要問早餐時間或地點。<br>3. กุญแจห้องอยู่ที่ไหนคะ (房卡在哪裡？) [room_key_question_instead_of_breakfast] - feedback: 這又回到房卡。Wi-Fi已知道，接著問早餐。 | Wi-Fi資訊知道了。接著問早餐時間。 | อาหารเช้ากี่โมง<br>問早餐時間時，可以說「อาหารเช้ากี่โมงคะ」。<br>อาหารเช้ากี่โมงคะ = 早餐幾點？ |
| t3 | อาหารเช้าเริ่มเจ็ดโมงครับ (早餐七點開始。) | เจ็ดโมงนะคะ ขอบคุณค่ะ (七點對吧，謝謝。) | 1. เก้าโมงนะคะ (九點對吧。) [wrong_time_confirmation] - feedback: 櫃台說的是七點，不是九點。<br>2. จะเช็กเอาต์ค่ะ (我要退房。) [checkout_payment_phrase] - feedback: 這像是退房。現在只要確認早餐時間。 | 櫃台告訴你早餐時間。可以確認並道謝。 |  |
| t4 | ต้องการอะไรอีกไหมครับ (還需要其他東西嗎？) | ไม่แล้วค่ะ ขอบคุณค่ะ (不用了，謝謝。) | 1. ขอข้าวผัดไก่ค่ะ (請給我雞肉炒飯。) [restaurant_order_after_hotel_info] - feedback: 這是餐廳點餐。飯店資訊已經問完了。<br>2. เก้าโมงนะคะ (九點對吧。) [repeated_wrong_time] - feedback: 早餐時間是七點。結尾時說不用了、謝謝比較自然。 | 資訊都問完了。簡短說不用了並謝謝。 |  |

---

## a1:th:problem_lost_item - บอกว่าของหาย

- Level: A1
- Language: Thai (th)
- Scenario ID: problem_lost_item
- Setting: เคาน์เตอร์ประชาสัมพันธ์
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國服務台找遺失的小物。選自然、簡短的泰文。

### Clean Dialogue Path

- พนักงาน: มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？)
- คุณ: กระเป๋าใบเล็กหายค่ะ (小包包不見了。)
- พนักงาน: หายที่ไหนครับ (在哪裡不見的？)
- คุณ: ที่คาเฟ่ค่ะ (在咖啡店。)
- พนักงาน: เคาน์เตอร์ของหายอยู่ทางนั้นครับ (失物櫃台在那邊。)
- คุณ: ทางนั้นใช่ไหมคะ (那邊對嗎？)
- พนักงาน: ใช่ครับ ถามที่นั่นได้ครับ (對，可以在那裡問。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: คุณบอกว่าของหายและรู้ว่าจะไปถามที่ไหนแล้ว (你說明了遺失物，也知道下一步去哪裡問。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？) | กระเป๋าใบเล็กหายค่ะ (小包包不見了。) | 1. อันนี้เท่าไหร่คะ (這個多少錢？) [price_question_instead_of_lost_item] - feedback: 這是在問價格。現在要說物品不見了。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_instead_of_lost_item] - feedback: 這是在點餐，不是尋找遺失物。 | 簡短說你的小包包不見了。 | กระเป๋าใบเล็กหายค่ะ<br>說小包包不見了，可以說 `กระเป๋าใบเล็กหายค่ะ`。<br>กระเป๋าใบเล็กหายค่ะ = 小包包不見了。 |
| t2 | หายที่ไหนครับ (在哪裡不見的？) | ที่คาเฟ่ค่ะ (在咖啡店。) | 1. ประมาณสิบนาทีค่ะ (大約十分鐘。) [time_estimate_instead_of_lost_location] - feedback: 這是時間估計。對方問的是遺失地點。<br>2. ชาร์จมือถือได้ไหมคะ (可以充手機嗎？) [charging_question_instead_of_lost_location] - feedback: 這是在問充電。現在要回答地點。 | 回答簡單地點，不需要詳細說明。 | ที่คาเฟ่ค่ะ<br>回答地點時，可以用 `ที่ + 地點`。<br>ที่คาเฟ่ค่ะ = 在咖啡店。 |
| t3 | เคาน์เตอร์ของหายอยู่ทางนั้นครับ (失物櫃台在那邊。) | ทางนั้นใช่ไหมคะ (那邊對嗎？) | 1. กระเป๋าใบเล็กหายค่ะ (小包包不見了。) [repeat_lost_statement_after_next_step] - feedback: 你已經說過物品不見了。現在要確認下一個地點。<br>2. จ่ายเงินตอนนี้ได้ไหมคะ (可以現在付款嗎？) [payment_question_instead_of_next_step_confirmation] - feedback: 這是在付款。現在要確認失物櫃台的位置。 | 確認你聽到的方向。 |  |
| t4 | ใช่ครับ ถามที่นั่นได้ครับ (對，可以在那裡問。) | ขอบคุณค่ะ (謝謝。) | 1. อีกกี่นาทีคะ (還要幾分鐘？) [time_question_after_lost_item_help] - feedback: 這是問時間，和失物下一步不相關。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_after_lost_item_help] - feedback: 這是在點餐。得到協助後簡短道謝即可。 | 對方給了下一步。道謝即可。 |  |

---

## a1:th:shopping_ask_price - ถามราคา

- Level: A1
- Language: Thai (th)
- Scenario ID: shopping_ask_price
- Setting: ร้านเล็ก
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在小店想問一件商品的價格。選自然、簡短的泰文。

### Clean Dialogue Path

- พนักงานขาย: สวัสดีค่ะ ดูได้เลยค่ะ (你好，可以慢慢看。)
- คุณ: ขอโทษค่ะ (不好意思。)
- คุณ: อันนี้เท่าไหร่คะ (這個多少錢？)
- พนักงานขาย: ห้าสิบบาทค่ะ (五十泰銖。)
- คุณ: เอาอันนี้ค่ะ (我要這個。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีค่ะ ดูได้เลยค่ะ (你好，可以慢慢看。) | ขอโทษค่ะ (不好意思。) | 1. สถานีอยู่ที่ไหนคะ (車站在哪裡？) [directions_instead_of_shop_attention] - feedback: 這是在問路。現在是在店裡先叫住店員。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_in_shop_price_scene] - feedback: 這像是在點飲料，不是在問商品價格。 | 店員在招呼。先用不好意思叫住對方。 | ขอโทษค่ะ<br>ใช้เรียกพนักงานอย่างสุภาพในร้านค้า<br>ขอโทษค่ะ = 不好意思。 |
| t2 | อันนี้เท่าไหร่คะ (這個多少錢？) | อันนี้เท่าไหร่คะ (這個多少錢？) | 1. จ่ายบัตรได้ไหมคะ (可以刷卡嗎？) [payment_method_before_price] - feedback: 這是在問付款方式。先問價格比較自然。<br>2. เอาสองอันค่ะ (我要兩個。) [quantity_before_price] - feedback: 這是在說數量。現在要問一件商品的價格。 | อันนี้ 指這個；เท่าไหร่คะ 是禮貌問價格。 | อันนี้เท่าไหร่คะ<br>ประโยคสั้นและธรรมชาติสำหรับถามราคาของหนึ่งชิ้น<br>อันนี้เท่าไหร่คะ = 這個多少錢？ |
| t3 | ห้าสิบบาทค่ะ (五十泰銖。) | เอาอันนี้ค่ะ (我要這個。) | 1. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [directions_after_price] - feedback: 這突然換成問路。聽到價格後要買或道謝離開。<br>2. ขอเช็กบิลค่ะ (請結帳。) [restaurant_bill_in_shop] - feedback: 這是餐廳結帳用語，不是買店裡商品。 | 店員說價格：ห้าสิบบาท。 |  |

---

## a1:th:social_running_late - บอกว่าจะไปช้า

- Level: A1
- Language: Thai (th)
- Scenario ID: social_running_late
- Setting: ข้อความถึงเพื่อน
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你要傳訊息給泰國朋友說會晚到。選自然、簡短的泰文。

### Clean Dialogue Path

- เพื่อน: ใกล้ถึงหรือยัง (快到了嗎？)
- คุณ: ขอโทษนะคะ จะไปช้านิดหน่อยค่ะ (不好意思，我會晚一點。)
- เพื่อน: อีกกี่นาที (還要幾分鐘？)
- คุณ: ประมาณสิบนาทีค่ะ (大約十分鐘。)
- เพื่อน: โอเค เดี๋ยวรอนะ (好，我等你。)
- คุณ: ขอบคุณนะคะ (謝謝你。)
- เพื่อน: เจอกันเร็ว ๆ นี้นะ (待會見。)
- คุณ: ค่ะ เจอกันค่ะ (好，待會見。)
- เพื่อน: คุณบอกเพื่อนว่าจะไปช้าและบอกเวลาแล้ว (你告訴朋友會晚到，也給了時間。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ใกล้ถึงหรือยัง (快到了嗎？) | ขอโทษนะคะ จะไปช้านิดหน่อยค่ะ (不好意思，我會晚一點。) | 1. ขอกาแฟค่ะ (請給我咖啡。) [food_order_instead_of_late_message] - feedback: 這是在點咖啡。現在要跟朋友說會晚到。<br>2. ปลั๊กอยู่ที่ไหนคะ (插座在哪裡？) [charging_question_instead_of_late_message] - feedback: 這是在問充電位置。現在是晚到訊息。 | 用朋友間自然泰文說抱歉，會晚到。 | จะไปช้านิดหน่อยค่ะ<br>說會晚一點，可以說 `จะไปช้านิดหน่อยค่ะ`。<br>ขอโทษนะคะ จะไปช้านิดหน่อยค่ะ = 不好意思，我會晚一點。 |
| t2 | อีกกี่นาที (還要幾分鐘？) | ประมาณสิบนาทีค่ะ (大約十分鐘。) | 1. ห้อง 305 ค่ะ (是305號房。) [room_number_instead_of_minutes] - feedback: 這是房號，不是抵達時間。<br>2. จ่ายเงินตอนนี้ได้ไหมคะ (可以現在付款嗎？) [payment_question_instead_of_minutes] - feedback: 這是在付款。朋友問的是幾分鐘。 | 給簡短時間估計，不需要說精準位置。 | ประมาณสิบนาทีค่ะ<br>用 `ประมาณ` 來說大約的時間。<br>ประมาณสิบนาทีค่ะ = 大約十分鐘。 |
| t3 | โอเค เดี๋ยวรอนะ (好，我等你。) | ขอบคุณนะคะ (謝謝你。) | 1. ขอโทษนะคะ จะไปช้านิดหน่อยค่ะ (不好意思，我會晚一點。) [repeat_apology_after_acceptance] - feedback: 朋友已經接受並會等。現在道謝更自然。<br>2. ห้องน้ำอยู่ที่ไหนคะ (廁所在哪裡？) [directions_question_instead_of_thanks] - feedback: 這是在問路，沒有回應朋友願意等。 | 朋友願意等。簡短道謝。 |  |
| t4 | เจอกันเร็ว ๆ นี้นะ (待會見。) | ค่ะ เจอกันค่ะ (好，待會見。) | 1. ขอบคุณสำหรับความช่วยเหลือค่ะ (謝謝您的幫忙。) [over_formal_service_thanks_in_friend_context] - feedback: 這像服務情境的正式道謝。朋友訊息用自然收尾即可。<br>2. กระเป๋าหายค่ะ (包包不見了。) [lost_item_statement_instead_of_close] - feedback: 這是遺失物情境。現在只要跟朋友收尾。 | 用朋友間自然的收尾。 |  |

---

## a1:th:travel_hotel_checkin - เช็กอินที่โรงแรม

- Level: A1
- Language: Thai (th)
- Scenario ID: travel_hotel_checkin
- Setting: เคาน์เตอร์โรงแรม
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國飯店櫃台。辦理入住、說名字，並聽懂下一步。

### Clean Dialogue Path

- พนักงานต้อนรับ: สวัสดีค่ะ เช็กอินใช่ไหมคะ (您好。是要辦理入住嗎？)
- คุณ: มาเช็กอินค่ะ (我來辦理入住。)
- พนักงานต้อนรับ: ขอชื่อที่จองไว้ด้วยค่ะ (請給我訂房姓名。)
- คุณ: ชื่อหลินค่ะ (名字是林。)
- พนักงานต้อนรับ: พบแล้วค่ะ พักหนึ่งคืนใช่ไหมคะ (找到了。是一晚，對嗎？)
- คุณ: ใช่ค่ะ (是的。)
- พนักงานต้อนรับ: นี่คีย์การ์ดค่ะ ห้องอยู่ชั้นสามนะคะ (這是房卡。房間在三樓。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงานต้อนรับ: อาหารเช้าอยู่ที่ล็อบบี้ เจ็ดโมงถึงสิบโมงค่ะ (早餐在大廳，七點到十點。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีค่ะ เช็กอินใช่ไหมคะ (您好。是要辦理入住嗎？) | มาเช็กอินค่ะ (我來辦理入住。) | 1. เอากาแฟค่ะ (我要咖啡。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在飯店櫃台辦理入住。<br>2. สถานีอยู่ที่ไหนคะ (車站在哪裡？) [wrong_scenario_request] - feedback: 這句是在問路。櫃台現在在處理入住。 | 櫃台在確認你是不是要入住。可以直接說要入住。 |  |
| t2 | ขอชื่อที่จองไว้ด้วยค่ะ (請給我訂房姓名。) | ชื่อหลินค่ะ (名字是林。) | 1. จะเช็กเอาต์ค่ะ (我要退房。) [wrong_act_checkout] - feedback: เช็กเอาต์ 是退房。你現在是入住，要說訂房姓名。<br>2. อยู่ทางซ้ายค่ะ (在左邊。) [wrong_scenario_response] - feedback: 這是在回答方向。櫃台問的是訂房姓名。 | 櫃台在問訂房名字。用短句說「名字是...」。 | ชื่อ + name<br>「ชื่อ...」可以用來說名字。飯店櫃台常用短句就能溝通。<br>ชื่อหลินค่ะ = 名字是林。<br>จองชื่อหลินค่ะ = 用林的名字訂的。 |
| t3 | พบแล้วค่ะ พักหนึ่งคืนใช่ไหมคะ (找到了。是一晚，對嗎？) | ใช่ค่ะ (是的。) | 1. เอากาแฟค่ะ (我要咖啡。) [wrong_scenario_request] - feedback: 這不是咖啡店。櫃台在確認你的訂房。<br>2. ไม่เป็นไรค่ะ (不用了／沒關係。) [wrong_act_refusal] - feedback: 這樣像是在拒絕。資料正確時，說「ใช่ค่ะ」。 | 櫃台在確認資料。正確的話，簡短說是。 |  |
| t4 | นี่คีย์การ์ดค่ะ ห้องอยู่ชั้นสามนะคะ (這是房卡。房間在三樓。) | ขอบคุณค่ะ (謝謝。) | 1. ชื่อหลินค่ะ (名字是林。) [repeated_prior_answer] - feedback: 名字剛剛已經說過了。現在櫃台給你房卡。<br>2. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [off_topic_statement] - feedback: 這是另一個需求。先把入住流程結束。 | 你拿到房卡了。簡短說謝謝就可以。 |  |

---

## a1:th:travel_restroom_directions - ถามทางไปห้องน้ำ

- Level: A1
- Language: Thai (th)
- Scenario ID: travel_restroom_directions
- Setting: ในคาเฟ่
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國的咖啡店或公共場所。禮貌開口，問洗手間在哪裡。

### Clean Dialogue Path

- พนักงาน: มีอะไรให้ช่วยไหมคะ (需要幫忙嗎？)
- คุณ: ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？)
- พนักงาน: ตรงไป แล้วเลี้ยวขวาค่ะ (直走，然後右轉。)
- คุณ: เลี้ยวขวาใช่ไหมคะ (是右轉，對嗎？)
- พนักงาน: ใช่ค่ะ เลี้ยวขวาค่ะ (是的，右轉。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- พนักงาน: ไม่เป็นไรค่ะ (不客氣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมคะ (需要幫忙嗎？) | ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) | 1. เอากาแฟเย็นค่ะ (我要冰咖啡。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在你要問洗手間。<br>2. เท่าไหร่คะ (多少錢？) [wrong_scenario_request] - feedback: 這句是在問價格。要找洗手間時，問「ห้องน้ำอยู่ที่ไหนคะ」。 | 對方問你需要什麼。直接問洗手間在哪裡。 |  |
| t2 | ตรงไป แล้วเลี้ยวขวาค่ะ (直走，然後右轉。) | เลี้ยวขวาใช่ไหมคะ (是右轉，對嗎？) | 1. เอากลับบ้านค่ะ (外帶。) [wrong_scenario_response] - feedback: 這是咖啡店外帶時用的回答。現在對方在說方向。<br>2. ใช่ค่ะ (是的。) [underspecified_confirmation] - feedback: 只說是有點不清楚。確認方向時，可以說「เลี้ยวขวาใช่ไหมคะ」。 | ตรงไป 是直走，เลี้ยวขวา 是右轉。你可以確認右邊。 | ตรงไป / เลี้ยวขวา<br>「ตรงไป」是直走，「เลี้ยวขวา」是右轉。<br>ตรงไป = 直走<br>เลี้ยวขวา = 右轉 |
| t3 | ใช่ค่ะ เลี้ยวขวาค่ะ (是的，右轉。) | ขอบคุณค่ะ (謝謝。) | 1. เอากาแฟเย็นค่ะ (我要冰咖啡。) [wrong_scenario_request] - feedback: 這又回到點飲料了。你已經問完方向，可以說謝謝。<br>2. ชื่อหลินค่ะ (名字是林。) [wrong_scenario_response] - feedback: 這是飯店入住時說名字。現在是問路情境。 | 你確認方向了。最後說謝謝就好。 |  |

---

## a1:th:travel_station_directions - ถามทางไปทางออกสถานี

- Level: A1
- Language: Thai (th)
- Scenario ID: travel_station_directions
- Setting: สถานีรถไฟฟ้า
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國車站裡找出口。聽對方的方向提示，選一句自然接得上的泰文。

### Clean Dialogue Path

- เจ้าหน้าที่: มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？)
- คุณ: ขอโทษค่ะ ทางออกสองอยู่ที่ไหนคะ (不好意思，2號出口在哪裡？)
- เจ้าหน้าที่: ตรงไป แล้วเลี้ยวขวาครับ (直走，然後右轉。)
- คุณ: ตรงไป แล้วเลี้ยวขวาใช่ไหมคะ (直走，然後右轉對嗎？)
- เจ้าหน้าที่: ใช่ครับ ทางออกสองอยู่ทางขวา (是的。2號出口在右邊。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- เจ้าหน้าที่: ยินดีครับ (不客氣。)
- คุณ: ขอบคุณอีกครั้งค่ะ (再次謝謝。)
- เจ้าหน้าที่: คุณรู้ทางไปทางออกแล้ว (你知道出口方向了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมครับ (有什麼需要幫忙嗎？) | ขอโทษค่ะ ทางออกสองอยู่ที่ไหนคะ (不好意思，2號出口在哪裡？) | 1. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [restroom_question_when_exit_is_goal] - feedback: 這是在問洗手間。你的目標是找出口。<br>2. อยากไปแท็กซี่ค่ะ (我想去搭計程車。) [taxi_destination_answer] - feedback: 這是在說交通方式，不是在問車站出口。 | 可以問你要找的出口在哪裡。 | อยู่ที่ไหน<br>問地點時，可以用「...อยู่ที่ไหนคะ」。<br>ทางออกสองอยู่ที่ไหนคะ = 2號出口在哪裡？ |
| t2 | ตรงไป แล้วเลี้ยวขวาครับ (直走，然後右轉。) | ตรงไป แล้วเลี้ยวขวาใช่ไหมคะ (直走，然後右轉對嗎？) | 1. ตรงไป แล้วเลี้ยวซ้ายใช่ไหมคะ (直走，然後左轉對嗎？) [wrong_direction_confirmation] - feedback: 對方說的是右轉，不是左轉。<br>2. จ่ายบัตรค่ะ (我用卡付款。) [payment_answer_in_direction_context] - feedback: 這是付款回答。現在是在確認方向。<br>3. ชานชาลาห้าค่ะ (5號月台。) [wrong_platform_confirmation] - feedback: 你的目標是出口，不是月台。 | 對方說直走再右轉。可以確認方向。 | ตรงไป / เลี้ยวขวา<br>「ตรงไป」是直走。「เลี้ยวขวา」是右轉。<br>ตรงไป = 直走<br>เลี้ยวขวา = 右轉 |
| t3 | ใช่ครับ ทางออกสองอยู่ทางขวา (是的。2號出口在右邊。) | ขอบคุณค่ะ (謝謝。) | 1. ทางออกสองอยู่ที่ไหนคะ (2號出口在哪裡？) [repeated_location_question] - feedback: 對方已經告訴你方向了。現在道謝比較自然。<br>2. ขอตั๋วหนึ่งใบค่ะ (請給我一張票。) [ticket_purchase_in_direction_context] - feedback: 這是在買票。現在是問路後的收尾。 | 出口位置確認了。可以道謝。 |  |
| t4 | ยินดีครับ (不客氣。) | ขอบคุณอีกครั้งค่ะ (再次謝謝。) | 1. คิดเงินค่ะ (我要結帳。) [wrong_scenario_payment] - feedback: 這是付款時的話，不是問路收尾。<br>2. ห้องน้ำอยู่ที่ไหนคะ (洗手間在哪裡？) [new_wrong_location_question] - feedback: 這會換成別的地點。你的出口方向已經確認了。 | 對話結束了。可以再簡短回應。 |  |

---

## a1:th:travel_taxi_destination - บอกปลายทางในแท็กซี่

- Level: A1
- Language: Thai (th)
- Scenario ID: travel_taxi_destination
- Setting: ในแท็กซี่
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在泰國搭計程車。聽司機說話，選一句自然接得上的泰文。

### Clean Dialogue Path

- คนขับ: ไปที่ไหนครับ (要去哪裡？)
- คุณ: ไปโรงแรมนี้ค่ะ (去這間飯店。)
- คนขับ: โรงแรมนี้นะครับ (這間飯店對吧？)
- คุณ: ใช่ค่ะ (是的。)
- คนขับ: ประมาณสิบ นาทีครับ (大約十分鐘。)
- คุณ: โอเคค่ะ ขอบคุณค่ะ (好的，謝謝。)
- คนขับ: ถึงแล้วครับ (到了。)
- คุณ: ขอบคุณค่ะ (謝謝。)
- คนขับ: คุณบอกปลายทางและมาถึงแล้ว (你說出目的地並到達了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ไปที่ไหนครับ (要去哪裡？) | ไปโรงแรมนี้ค่ะ (去這間飯店。) | 1. ห้องน้ำอยู่ที่ไหนคะ (廁所在哪裡？) [directions_question_instead_of_destination] - feedback: 這是在問路。現在要告訴司機目的地。<br>2. ขอกาแฟค่ะ (請給我咖啡。) [food_order_in_taxi] - feedback: 這是點餐，不是計程車目的地。 | 司機問目的地。用泰文說去這間飯店。 | ไปโรงแรมนี้ค่ะ<br>搭計程車時，用 `ไป` 加目的地很自然。<br>ไปโรงแรมนี้ค่ะ = 去這間飯店。 |
| t2 | โรงแรมนี้นะครับ (這間飯店對吧？) | ใช่ค่ะ (是的。) | 1. ไม่ค่ะ ยกเลิกค่ะ (不用，取消。) [cancel_when_confirmation_expected] - feedback: 司機確認的是正確目的地，這裡不需要取消。<br>2. ไปโรงแรมนี้ค่ะ (去這間飯店。) [repeat_destination_when_confirmation_expected] - feedback: 目的地已經說過了。現在自然回覆是確認。 | 司機確認目的地。簡短回答是的。 |  |
| t3 | ประมาณสิบ นาทีครับ (大約十分鐘。) | โอเคค่ะ ขอบคุณค่ะ (好的，謝謝。) | 1. ขอตั๋วหนึ่งใบค่ะ (請給我一張票。) [ticket_purchase_in_taxi] - feedback: 這是在買票。現在是在計程車裡聽車程時間。<br>2. ไปที่ไหนครับ (要去哪裡？) [driver_role_sentence_by_learner] - feedback: 這是司機問乘客的話，不是乘客回覆。 | 聽到車程時間。表示知道並道謝。 |  |
| t4 | ถึงแล้วครับ (到了。) | ขอบคุณค่ะ (謝謝。) | 1. โรงแรมนี้นะครับ (這間飯店對吧？) [driver_confirmation_reused_by_learner] - feedback: 這像司機確認目的地。到達後乘客說謝謝更自然。<br>2. อาหารเช้ากี่โมงคะ (早餐幾點？) [hotel_question_in_taxi_closing] - feedback: 這是飯店櫃台問題，不是計程車到達後的收尾。 | 已經到目的地。簡短道謝。 |  |

---

## a1:th:travel_ticket_buying - ซื้อตั๋ว

- Level: A1
- Language: Thai (th)
- Scenario ID: travel_ticket_buying
- Setting: เคาน์เตอร์ตั๋วรถไฟ
- Source status: candidate_runtime_verified
- Prototype text review: automated_text_review_passed
- Prototype runtime walk: runtime_walk_passed
- Review state: draft
- Native review: native_pending
- Support text: 你在火車售票櫃台買一張票。選自然、簡短的泰文。

### Clean Dialogue Path

- เจ้าหน้าที่: ไปไหนครับ (要去哪裡？)
- คุณ: ขอตั๋วหนึ่งใบไปสถานีกลางครับ (請給我一張到中央車站的票。)
- เจ้าหน้าที่: หนึ่งใบไปสถานีกลางนะครับ (一張到中央車站，對嗎？)
- คุณ: ใช่ครับ (是的。)
- เจ้าหน้าที่: สามสิบบาท ชานชาลาสองครับ (三十泰銖。二號月台。)
- คุณ: นี่ครับ ขอบคุณครับ (給你，謝謝。)
- เจ้าหน้าที่: นี่ตั๋วครับ ชานชาลาสอง (這是票。二號月台。)
- คุณ: ขอบคุณครับ (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ไปไหนครับ (要去哪裡？) | ขอตั๋วหนึ่งใบไปสถานีกลางครับ (請給我一張到中央車站的票。) | 1. สถานีกลางอยู่ที่ไหนครับ (中央車站在哪裡？) [directions_instead_of_ticket_purchase] - feedback: 這是在問路，不是在買票。<br>2. ขอแซนด์วิชครับ (請給我三明治。) [food_order_at_ticket_counter] - feedback: 這是在點餐，不適合售票櫃台。 | 售票員問目的地。說ขอตั๋วหนึ่งใบไป加地名。 |  |
| t2 | หนึ่งใบไปสถานีกลางนะครับ (一張到中央車站，對嗎？) | ใช่ครับ (是的。) | 1. ไม่เอาแล้วครับ (不用了。) [cancel_when_confirmation_expected] - feedback: 售票員確認的是正確資訊；這裡不該取消。<br>2. สองใบไปสนามบินครับ (兩張到機場。) [wrong_quantity_and_destination] - feedback: 這改變了張數和目的地，和前一句不一致。 | 售票員確認資訊。用ใช่ครับ簡短回答。 | ใช่ครับ<br>ใช้ตอบยืนยันกับเจ้าหน้าที่แบบสั้นและสุภาพ<br>ใช่ครับ = 是的。 |
| t3 | สามสิบบาท ชานชาลาสองครับ (三十泰銖。二號月台。) | นี่ครับ ขอบคุณครับ (給你，謝謝。) | 1. คุณไปสถานีกลางไหมครับ (你要去中央車站嗎？) [staff_role_sentence_by_customer] - feedback: 這像售票員問旅客，不是旅客付款收尾。<br>2. ยินดีที่ได้รู้จักครับ (很高興認識你。) [social_greeting_at_ticket_counter] - feedback: 這是社交初次見面語，不是買票收尾。 | 售票員說價格和月台。付款並道謝。 |  |
| t4 | นี่ตั๋วครับ ชานชาลาสอง (這是票。二號月台。) | ขอบคุณครับ (謝謝。) | 1. ขอกาแฟหนึ่งแก้วครับ (請給我一杯咖啡。) [food_order_at_ticket_counter] - feedback: 這是在點咖啡，不是售票窗口收尾。<br>2. ยินดีที่ได้รู้จักครับ (很高興認識你。) [social_closing_at_ticket_counter] - feedback: 這是社交初次見面語，不是買票收尾。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
