# A1 English Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:en:convenience_payment_card_cash - Paying at a Convenience Store

- Level: A1
- Language: English (en)
- Scenario ID: convenience_payment_card_cash
- Setting: Convenience store counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: You are paying for a small item at a convenience store. Listen to the cashier and choose a short reply that fits checkout.

### Clean Dialogue Path

- Cashier: That comes to $6. Card or cash? (The cashier is asking how you want to pay.)
- You: Card, please. (I want to pay by card.)
- Cashier: Please tap your card here. (The cashier is telling you where to use the card.)
- You: Okay. (I understand.)
- Cashier: Do you need a receipt? (The cashier is asking if you want a receipt.)
- You: No receipt, thanks. (I do not need a receipt.)
- Cashier: All set. Have a good day. (The cashier says the checkout is finished.)
- You: Thanks, you too. (I am thanking the cashier.)
- Cashier: The payment is complete. (Checkout is finished.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | That comes to $6. Card or cash? (The cashier is asking how you want to pay.) | Card, please. (I want to pay by card.) | 1. Can I get a coffee? (I am ordering a drink.) [wrong_scenario_ordering] - feedback: This is for ordering. You are already at checkout, so answer card or cash.<br>2. Where is the restroom? (I am asking for a restroom.) [wrong_scenario_request] - feedback: This asks for directions. The cashier is asking how you want to pay.<br>3. Cash, please. (I want to pay with cash.) [wrong_payment_method] - feedback: That is a payment method, but this practice path is for paying by card. | They are asking for a payment method. A short answer is enough. | Card / cash<br>Say "Card, please" to pay by card, or "Cash, please" to pay with cash.<br>Card, please. = I want to pay by card.<br>Cash, please. = I want to pay with cash. |
| t2 | Please tap your card here. (The cashier is telling you where to use the card.) | Okay. (I understand.) | 1. Card, please. (I want to pay by card.) [repeated_prior_answer] - feedback: You already chose card. Now follow the cashier's payment instruction.<br>2. How much is it? (I am asking the price.) [wrong_act_price_question] - feedback: The price was already given. This step is about tapping the card. | You only need to acknowledge the card prompt. |  |
| t3 | Do you need a receipt? (The cashier is asking if you want a receipt.) | No receipt, thanks. (I do not need a receipt.) | 1. Card, please. (I want to pay by card.) [repeated_prior_answer] - feedback: The card payment is already done. Now answer the receipt question.<br>2. At the station. (I am giving a place.) [wrong_scenario_schedule] - feedback: This sounds like planning a meetup. The cashier is asking about a receipt. | If you do not need it, say no receipt. |  |
| t4 | All set. Have a good day. (The cashier says the checkout is finished.) | Thanks, you too. (I am thanking the cashier.) | 1. Can I get a coffee? (I am ordering a drink.) [wrong_scenario_ordering] - feedback: This starts a new order. Checkout is finished, so close politely.<br>2. No receipt, thanks. (I do not need a receipt.) [repeated_prior_answer] - feedback: You already answered about the receipt. Now just thank the cashier. | Checkout is done. A short thanks is natural. |  |

---

## a1:en:core_repair_repeat_slowly - Ask to Repeat

- Level: A1
- Language: English (en)
- Scenario ID: core_repair_repeat_slowly
- Setting: Cafe counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店櫃台沒聽清楚問題。選自然、簡短的英文修復句。

### Clean Dialogue Path

- Staff: For here or to go? (內用還是外帶？)
- You: Sorry, could you repeat that? (不好意思，可以再說一次嗎？)
- Staff: For here or to go? (內用還是外帶？)
- You: Could you speak slowly, please? (可以請你說慢一點嗎？)
- Staff: For here? Or to go? (內用？還是外帶？)
- You: To go, please. Thank you. (外帶，麻煩你。謝謝。)
- Staff: All right. You're all set. (好的，這樣就可以了。)
- You: Thank you. (謝謝。)
- Staff: All right. You're all set. (好的，這樣就可以了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | For here or to go? (內用還是外帶？) | Sorry, could you repeat that? (不好意思，可以再說一次嗎？) | 1. Yes, that's right. (對，沒錯。) [blind_confirmation_before_understanding] - feedback: 你還沒聽懂，先不要盲目確認。<br>2. Thank you, goodbye. (謝謝，再見。) [closing_before_understanding] - feedback: 還沒完成互動，現在需要請對方重複。 | 你沒聽清楚。先請對方重複。 |  |
| t2 | For here or to go? (內用還是外帶？) | Could you speak slowly, please? (可以請你說慢一點嗎？) | 1. One ticket to Central Station, please. (請給我一張到中央車站的票。) [travel_answer_to_repair_moment] - feedback: 這是買票句，不是請對方說慢一點。<br>2. I'd like one coffee. (我想要一杯咖啡。) [guessing_order_before_understanding] - feedback: 你還沒聽懂問題，先不要猜著回答。 | 還是太快。請對方說慢一點。 | Please speak slowly<br>Use this polite repair phrase when the words are too fast.<br>Could you speak slowly, please? = 可以請你說慢一點嗎？ |
| t3 | For here? Or to go? (內用？還是外帶？) | To go, please. Thank you. (外帶，麻煩你。謝謝。) | 1. Could you repeat that? (可以再說一次嗎？) [repair_repeated_after_prompt_clear] - feedback: 這次問題已經清楚，可以回答了。<br>2. Nice to meet you. (很高興認識你。) [social_phrase_for_service_question] - feedback: 這是社交見面語，不是在回答內用或外帶。 | 現在問題清楚了。選一個簡短回答。 |  |
| t4 | All right. You're all set. (好的，這樣就可以了。) | Thank you. (謝謝。) | 1. Could you repeat that? (可以再說一次嗎？) [repair_after_understood] - feedback: 問題已經解決了。這裡簡短道謝即可。<br>2. One ticket, please. (請給我一張票。) [wrong_scenario_ticket] - feedback: 這是買票用語，不是櫃台收尾。 | 問題已經解決。最後道謝。 |  |

---

## a1:en:daily_meet_friend - Meeting a Friend

- Level: A1
- Language: English (en)
- Scenario ID: daily_meet_friend
- Setting: Cafe entrance
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店門口和朋友碰面。選自然、簡短的英文回應。

### Clean Dialogue Path

- Friend: Hey, you made it! (嘿，你到了！)
- You: Hi! Good to see you. (嗨！很高興見到你。)
- Friend: Are we going to the movie now? (我們現在要去看電影嗎？)
- You: Yes, that's right. (對，沒錯。)
- Friend: Ready to go? (準備好了嗎？)
- You: Yes, I'm ready. Let's go. (好了，我準備好了。我們走吧。)
- You: Yes, I'm ready. Let's go. (好了，我準備好了。我們走吧。)
- Friend: You found your friend and are ready to go. (你找到朋友，也準備好出發了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hey, you made it! (嘿，你到了！) | Hi! Good to see you. (嗨！很高興見到你。) | 1. Can I see the menu? (可以看菜單嗎？) [service_request_to_friend] - feedback: 這像是在跟店員說話，不是跟朋友打招呼。<br>2. How much is this? (這個多少錢？) [shopping_price_in_friend_meeting] - feedback: 這是購物問題。現在是在和朋友碰面。 | 朋友在打招呼。用自然的朋友語氣回應。 |  |
| t2 | Are we going to the movie now? (我們現在要去看電影嗎？) | Yes, that's right. (對，沒錯。) | 1. I want to pay by card. (我想刷卡付款。) [payment_answer_to_plan_check] - feedback: 這是付款回答，不是在確認見面計畫。<br>2. Where is the restroom? (洗手間在哪裡？) [directions_instead_of_plan_confirmation] - feedback: 這是在問路。朋友問的是計畫。 | 朋友在確認計畫。簡短說 yes。 | Yes, that's right<br>Use a short confirmation when a friend checks the plan.<br>Yes, that's right. = 對，沒錯。 |
| t3 | Ready to go? (準備好了嗎？) | Yes, I'm ready. Let's go. (好了，我準備好了。我們走吧。) | 1. Nice to meet you, sir. (先生，很高興認識您。) [overformal_business_greeting] - feedback: 這太正式，也像第一次見面。這裡是朋友碰面。<br>2. I'd like a sandwich. (我想要一份三明治。) [food_order_in_friend_meeting] - feedback: 這是在點餐，不是在回答準備好了。 | 朋友問你準備好了沒。用短句回答。 |  |
| t4 | Yes, I'm ready. Let's go. (好了，我準備好了。我們走吧。) | Yes, I'm ready. Let's go. (好了，我準備好了。我們走吧。) | 1. Nice to meet you, sir. (先生，很高興認識您。) [overformal_business_greeting] - feedback: 這太正式，也像第一次見面。這裡是朋友碰面。<br>2. I'd like a sandwich. (我想要一份三明治。) [food_order_in_friend_meeting] - feedback: 這是在點餐，不是在回答準備好了。 | 用 I'm ready 回答，再用 Let's go 收尾。 |  |

---

## a1:en:daily_schedule_time - Choosing a Time to Meet

- Level: A1
- Language: English (en)
- Scenario ID: daily_schedule_time
- Setting: Making a casual plan
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: You are making a simple plan with a friend. Listen for the time question and choose a short reply that fits.

### Clean Dialogue Path

- Friend: What time should we meet tomorrow? (Your friend is asking for a meeting time.)
- You: How about three? (I suggest three o'clock.)
- Friend: Three works. At the station? (Your friend accepts the time and asks about the place.)
- You: Yes, at the station. (I confirm the place.)
- Friend: Great. See you tomorrow at three. (Your friend confirms the plan.)
- You: See you then. (I confirm and close the plan.)
- Friend: See you. (Your friend is ending the chat.)
- You: See you. (I say goodbye.)
- Friend: The meetup time is set. (The plan is complete.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What time should we meet tomorrow? (Your friend is asking for a meeting time.) | How about three? (I suggest three o'clock.) | 1. At the station. (I am giving a place.) [location_answer_when_time_requested] - feedback: That gives a place. Your friend asked what time.<br>2. I can't today. (I am refusing the plan.) [wrong_act_refusal] - feedback: This sounds like you cannot meet. The question is asking for a time.<br>3. Tomorrow is fine. (I am confirming the day.) [wrong_day_time_answer] - feedback: The day is already tomorrow. Now choose a time. | They are asking for a time. You can suggest one short time. | What time? / How about three?<br>Use "What time...?" to ask for a time. Use "How about...?" to suggest one.<br>What time should we meet? = Ask for the time.<br>How about three? = Suggest three o'clock. |
| t2 | Three works. At the station? (Your friend accepts the time and asks about the place.) | Yes, at the station. (I confirm the place.) | 1. How about three? (I suggest three o'clock.) [repeated_prior_answer] - feedback: You already suggested three. Now answer the place question.<br>2. Card, please. (I want to pay by card.) [wrong_scenario_payment] - feedback: That is for paying at a counter. This is a meetup plan. | The time is accepted. Now confirm the place. |  |
| t3 | Great. See you tomorrow at three. (Your friend confirms the plan.) | See you then. (I confirm and close the plan.) | 1. At the station. (I am giving the place.) [repeated_prior_answer] - feedback: The place is already clear. Now close the plan.<br>2. I can't today. (I am refusing.) [wrong_act_refusal] - feedback: This would cancel the plan. If the plan works, use a closing phrase. | The plan is set. A short closing phrase is natural. |  |
| t4 | See you. (Your friend is ending the chat.) | See you. (I say goodbye.) | 1. No receipt, thanks. (I do not need a receipt.) [wrong_scenario_payment] - feedback: That is for checkout. This is a casual plan.<br>2. Tomorrow is fine. (I am confirming the day.) [overly_redundant_answer] - feedback: The day and time are already set. A goodbye is more natural. | The conversation is ending. Echoing the goodbye is fine. |  |

---

## a1:en:daily_self_intro - Introducing Yourself

- Level: A1
- Language: English (en)
- Scenario ID: daily_self_intro
- Setting: Language exchange table
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在語言交換桌第一次見到新朋友。選自然、簡短的英文回應。

### Clean Dialogue Path

- New friend: Hi, I'm Maya. What's your name? (嗨，我是 Maya。你叫什麼名字？)
- You: Hi, I'm Alex. (嗨，我是 Alex。)
- New friend: Nice to meet you. Are you learning English? (很高興認識你。你在學英文嗎？)
- You: Yes, I'm learning English. (對，我在學英文。)
- New friend: Great. Welcome to the group! (太好了。歡迎加入這個小組！)
- You: Thanks. Nice to meet you. (謝謝。很高興認識你。)
- New friend: Great. Let's get started. (太好了。我們開始吧。)
- You: Okay, thanks. (好的，謝謝。)
- New friend: Great. Let's get started. (太好了。我們開始吧。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi, I'm Maya. What's your name? (嗨，我是 Maya。你叫什麼名字？) | Hi, I'm Alex. (嗨，我是 Alex。) | 1. Can I have a ticket? (可以給我一張票嗎？) [travel_service_phrase_in_self_intro] - feedback: 這是在買票，不是在介紹名字。<br>2. Here is my phone number. (這是我的電話號碼。) [private_contact_detail] - feedback: 自我介紹不需要提供私人聯絡資料。 | 對方先介紹自己。用 I'm 加名字簡短回答。 |  |
| t2 | Nice to meet you. Are you learning English? (很高興認識你。你在學英文嗎？) | Yes, I'm learning English. (對，我在學英文。) | 1. Hi, I'm Alex. (嗨，我是 Alex。) [repeat_name_after_new_question] - feedback: 你已經說過名字；現在要回答正在學什麼。<br>2. Could you repeat that? (可以再說一次嗎？) [repair_when_understood] - feedback: 這是聽不懂時用的修復句；這裡可以直接回答。 | 對方問你是不是在學英文。用 yes 和 I'm learning English 回答。 | I'm learning...<br>Use this short formula to say what language you are learning.<br>Yes, I'm learning English. = 對，我在學英文。 |
| t3 | Great. Welcome to the group! (太好了。歡迎加入這個小組！) | Thanks. Nice to meet you. (謝謝。很高興認識你。) | 1. I'd like one coffee. (我想要一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應歡迎。<br>2. Dear Sir or Madam. (敬啟者。) [overformal_business_greeting] - feedback: 這太像正式信件，不適合語言交換桌。 | 對方表示歡迎。用 Thanks 和 nice to meet you 收尾。 |  |
| t4 | Great. Let's get started. (太好了。我們開始吧。) | Okay, thanks. (好的，謝謝。) | 1. I'd like one coffee. (我想要一杯咖啡。) [food_order_in_self_intro] - feedback: 這是在點餐，不是在回應歡迎。<br>2. Dear Sir or Madam. (敬啟者。) [overformal_business_greeting] - feedback: 這太像正式信件，不適合語言交換桌。 | 對方準備開始活動。用簡短友善句回應。 |  |

---

## a1:en:digital_battery_charging - Ask to Charge a Phone

- Level: A1
- Language: English (en)
- Scenario ID: digital_battery_charging
- Setting: Cafe counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店想幫手機充電。選自然、簡短的英文。

### Clean Dialogue Path

- Staff: Hi. Can I help you? (你好，需要幫忙嗎？)
- You: Can I charge my phone here? (我可以在這裡充手機嗎？)
- Staff: Yes, that's fine. (可以，沒問題。)
- You: Where is the outlet? (插座在哪裡？)
- Staff: It's under the table on the left. (在左邊桌子下面。)
- You: Under the table on the left? (左邊桌子下面嗎？)
- Staff: Yes, you can use that one. (對，你可以用那個。)
- You: Thank you. (謝謝。)
- Staff: You asked permission and found the outlet. (你詢問了許可，也找到了插座。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. Can I help you? (你好，需要幫忙嗎？) | Can I charge my phone here? (我可以在這裡充手機嗎？) | 1. What's the Wi-Fi password? (Wi-Fi密碼是什麼？) [wifi_question_instead_of_charging_permission] - feedback: 這是在問Wi-Fi。現在要先問能不能充手機。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_instead_of_charging_permission] - feedback: 這是在點餐。現在的目標是詢問充電。 | 先禮貌地問能不能在這裡充手機。 | Can I charge my phone?<br>Use `Can I... ?` to ask simple permission in a public place.<br>Can I charge my phone here? = 我可以在這裡充手機嗎？ |
| t2 | Yes, that's fine. (可以，沒問題。) | Where is the outlet? (插座在哪裡？) | 1. Can I charge my phone here? (我可以在這裡充手機嗎？) [repeat_permission_after_permission_granted] - feedback: 對方已經同意了。現在要問插座位置。<br>2. Can I pay now? (我可以現在付款嗎？) [payment_question_instead_of_outlet_location] - feedback: 這是在付款。現在要問插座在哪裡。 | 對方同意了。接著問插座在哪裡。 | Where is the outlet?<br>Use `Where is... ?` for a simple place question.<br>Where is the outlet? = 插座在哪裡？ |
| t3 | It's under the table on the left. (在左邊桌子下面。) | Under the table on the left? (左邊桌子下面嗎？) | 1. Where is the restroom? (廁所在哪裡？) [restroom_question_instead_of_location_confirmation] - feedback: 這是在問廁所。現在要確認插座位置。<br>2. I need a ticket. (我需要一張票。) [ticket_request_instead_of_location_confirmation] - feedback: 這是交通買票句，不符合充電情境。 | 確認你聽到的位置。 |  |
| t4 | Yes, you can use that one. (對，你可以用那個。) | Thank you. (謝謝。) | 1. What's the Wi-Fi password? (Wi-Fi密碼是什麼？) [wifi_question_after_charging_help] - feedback: 充電位置已確認。現在簡短道謝比較自然。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_after_charging_help] - feedback: 這是在點餐。現在是充電協助結束。 | 對方確認了。簡短道謝即可。 |  |

---

## a1:en:digital_wifi_connect - Ask for Wi-Fi and Say It Won't Connect

- Level: A1
- Language: English (en)
- Scenario ID: digital_wifi_connect
- Setting: Cafe counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店或飯店櫃台，需要連Wi-Fi。選自然、簡短的英文。

### Clean Dialogue Path

- Staff: Hi. Can I help you? (你好，需要幫忙嗎？)
- You: What's the Wi-Fi password? (Wi-Fi密碼是什麼？)
- Staff: It's cafe123. (是 cafe123。)
- You: Thanks. I'll try it. (謝謝。我試試看。)
- Staff: Does it work? (可以用了嗎？)
- You: Sorry, it won't connect. (不好意思，連不上。)
- Staff: Please try again. (請再試一次。)
- You: Thank you. (謝謝。)
- Staff: You asked for the Wi-Fi password and explained the problem. (你問了Wi-Fi密碼，也說明了問題。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. Can I help you? (你好，需要幫忙嗎？) | What's the Wi-Fi password? (Wi-Fi密碼是什麼？) | 1. Can I pay now? (我可以現在付款嗎？) [bill_payment_instead_of_wifi] - feedback: 這是在付款。現在要問Wi-Fi密碼。<br>2. Where is the restroom? (廁所在哪裡？) [restroom_question_instead_of_wifi] - feedback: 這是在問廁所。現在的目標是Wi-Fi。 | 你需要Wi-Fi密碼。用日常英文直接問。 | What's the Wi-Fi password?<br>Use this everyday question to ask for a Wi-Fi password.<br>What's the Wi-Fi password? = Wi-Fi密碼是什麼？ |
| t2 | It's cafe123. (是 cafe123。) | Thanks. I'll try it. (謝謝。我試試看。) | 1. What's the Wi-Fi password? (Wi-Fi密碼是什麼？) [repeat_password_question_after_answer] - feedback: 對方已經給了密碼。現在應該表示會試試看。<br>2. I'd like a coffee. (我想要一杯咖啡。) [coffee_order_after_password] - feedback: 這是在點咖啡，不是回應Wi-Fi密碼。 | 你拿到密碼了。說謝謝並試試看。 |  |
| t3 | Does it work? (可以用了嗎？) | Sorry, it won't connect. (不好意思，連不上。) | 1. Yes, it works. (可以，用了。) [success_answer_when_failure_expected] - feedback: 情境是連不上。需要說問題，而不是說成功。<br>2. Can I charge my phone? (我可以充手機嗎？) [charging_question_instead_of_connection_failure] - feedback: 這是在問充電。現在要說Wi-Fi連不上。 | 你的手機連不上。用短句說問題。 | It won't connect<br>Use this simple line when Wi-Fi is not connecting.<br>Sorry, it won't connect. = 不好意思，連不上。 |
| t4 | Please try again. (請再試一次。) | Thank you. (謝謝。) | 1. Yes, it works. (可以，用了。) [unsupported_success_after_retry_instruction] - feedback: 對方只是叫你再試一次。先道謝比較自然。<br>2. Can I pay now? (我可以現在付款嗎？) [payment_phrase_after_wifi_help] - feedback: 這是付款句。Wi-Fi協助後簡短道謝即可。 | 對方給簡單建議。道謝即可。 |  |

---

## a1:en:food_bill_payment - Paying the Bill

- Level: A1
- Language: English (en)
- Scenario ID: food_bill_payment
- Setting: Casual cafe
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在咖啡店吃完了。選一句自然的英文要帳單並付款。

### Clean Dialogue Path

- You: Can I get the check, please? (可以給我帳單嗎？)
- Server: Sure. Card or cash? (好的。刷卡還是現金？)
- You: Card, please. (刷卡，謝謝。)
- You: Card, please. (刷卡，謝謝。)
- Server: All set. Thank you. (好了，謝謝。)
- You: Thank you. (謝謝。)
- Server: You paid and closed politely. (你完成付款並禮貌收尾。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Can I get the check, please? (可以給我帳單嗎？) | Can I get the check, please? (可以給我帳單嗎？) | 1. I'd like another coffee. (我想再要一杯咖啡。) [ordering_more_when_payment_expected] - feedback: 這是在加點。現在目標是結帳。<br>2. How much is this shirt? (這件襯衫多少錢？) [shop_price_in_restaurant] - feedback: 這是店裡問商品價格，不是餐廳帳單。 | 美式英文常用 check。句尾加 please 很自然。 | Can I get the check?<br>In US-style English, "check" is a common restaurant bill word.<br>Can I get the check, please? = 可以給我帳單嗎？ |
| t2 | Sure. Card or cash? (好的。刷卡還是現金？) | Card, please. (刷卡，謝謝。) | 1. No receipt, please. (不用收據，謝謝。) [receipt_answer_to_payment_method] - feedback: 這是在回答收據問題。現在店員問的是卡或現金。<br>2. For here, please. (內用，謝謝。) [dine_in_answer_at_payment] - feedback: 這是點餐時的回答。現在是在付款。 | 店員問付款方式。選一個即可。 |  |
| t3 | Card, please. (刷卡，謝謝。) | Card, please. (刷卡，謝謝。) | 1. No receipt, please. (不用收據，謝謝。) [receipt_answer_to_payment_method] - feedback: 這是在回答收據問題。現在店員問的是卡或現金。<br>2. For here, please. (內用，謝謝。) [dine_in_answer_at_payment] - feedback: 這是點餐時的回答。現在是在付款。 | 用 Card, please 簡短回答付款方式。 |  |
| t4 | All set. Thank you. (好了，謝謝。) | Thank you. (謝謝。) | 1. Where is the station? (車站在哪裡？) [directions_after_payment] - feedback: 這突然換成問路。付款完成時簡短道謝即可。<br>2. One sandwich, please. (請給我一份三明治。) [new_order_after_payment_close] - feedback: 這像是重新點餐，不是結帳收尾。 | 付款完成。用一句謝謝收尾。 |  |

---

## a1:en:food_coffee_ordering - Ordering Coffee

- Level: A1
- Language: English (en)
- Scenario ID: food_coffee_ordering
- Setting: Cafe counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: You are at a cafe counter. Listen to the barista and choose a short reply that fits the order.

### Clean Dialogue Path

- Barista: Hi. What can I get for you? (The barista is asking for your order.)
- You: Can I get an iced coffee, please? (I want to order an iced coffee.)
- Barista: For here or to go? (The barista is asking where you will have it.)
- You: To go, please. (I will take it with me.)
- Barista: One iced coffee to go, right? (The barista is checking your order.)
- You: Yes, that's right. (The order is correct.)
- Barista: That'll be $4. Please tap your card here. (The barista is asking you to pay.)
- You: Okay, thanks. (I understand.)
- Barista: Your drink will be ready at the end of the counter. (Wait at the end of the counter for the drink.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. What can I get for you? (The barista is asking for your order.) | Can I get an iced coffee, please? (I want to order an iced coffee.) | 1. Where is the restroom? (I am asking for a restroom.) [wrong_scenario_request] - feedback: This asks for a restroom. At the counter, start by ordering the drink.<br>2. No, thank you. (I do not want anything.) [wrong_act_refusal] - feedback: This sounds like you are not ordering. Choose the drink you want. | They are ready for your drink order. A short request is enough. |  |
| t2 | For here or to go? (The barista is asking where you will have it.) | To go, please. (I will take it with me.) | 1. Can I get an iced coffee, please? (I want to order an iced coffee.) [repeated_prior_answer] - feedback: You already ordered the drink. Now answer for here or to go.<br>2. Yes, it is. (I am confirming something.) [wrong_act_confirmation] - feedback: This is not a choice. Choose "for here" or "to go." | Pick one option. For here means you stay. To go means take it away. | For here / to go<br>Use "for here" if you will stay, and "to go" if you will take it with you.<br>For here, please. = I will stay.<br>To go, please. = I will take it with me. |
| t3 | One iced coffee to go, right? (The barista is checking your order.) | Yes, that's right. (The order is correct.) | 1. No, thank you. (I do not want it.) [wrong_act_refusal] - feedback: This sounds like you are stopping the order. If the order is correct, confirm it.<br>2. Where is the restroom? (I am asking for a restroom.) [off_topic_statement] - feedback: This is another situation. First confirm the coffee order. | They are confirming the order. If it is correct, say yes. |  |
| t4 | That'll be $4. Please tap your card here. (The barista is asking you to pay.) | Okay, thanks. (I understand.) | 1. To go, please. (I want it to go.) [repeated_prior_answer] - feedback: You already answered that. Now the barista is asking you to pay.<br>2. Can I get an iced coffee, please? (I want to order an iced coffee.) [repeated_prior_answer] - feedback: The drink is already ordered. This step is payment. | You only need to acknowledge the payment step. |  |

---

## a1:en:food_restaurant_ordering - Ordering at a Restaurant

- Level: A1
- Language: English (en)
- Scenario ID: food_restaurant_ordering
- Setting: Casual restaurant
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在一間簡單餐廳用餐。聽服務生問什麼，選一句自然接得上的英文。

### Clean Dialogue Path

- Server: Hi. Just one today? (嗨，今天一位嗎？)
- You: Yes, just one. (是的，一位。)
- Server: What would you like? (你想點什麼？)
- You: I'd like the chicken rice. (我想要雞肉飯。)
- Server: Chicken rice, right? (雞肉飯，對嗎？)
- You: Yes, thank you. (是的，謝謝。)
- Server: Great. I'll bring it right out. (好的。我馬上送來。)
- You: Thanks. (謝謝。)
- Server: Your order is understood. (你的餐點已經傳達清楚了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. Just one today? (嗨，今天一位嗎？) | Yes, just one. (是的，一位。) | 1. Can I get the check? (可以給我帳單嗎？) [bill_request_before_ordering] - feedback: 這是吃完後要帳單。現在店員在確認人數。<br>2. Coffee, please. (請給我咖啡。) [order_when_party_size_requested] - feedback: 這是在點飲料。先回答人數比較自然。 | 店員在確認人數。可以簡短回答一位。 | Just one<br>In a casual restaurant, "Just one" is a natural short answer for one person.<br>Just one, please. = 一位，謝謝。 |
| t2 | What would you like? (你想點什麼？) | I'd like the chicken rice. (我想要雞肉飯。) | 1. Just water. (只要水。) [no_meal_when_meal_order_expected] - feedback: 這不像是在點一份餐。這裡要點一個主餐。<br>2. To go, please. (我要外帶。) [takeout_answer_in_dine_in_order] - feedback: 這是在說外帶。現在店員問的是要點什麼。<br>3. Two people. (兩位。) [party_size_answer_when_order_requested] - feedback: 人數已經確認了。現在要說餐點。 | 店員在問餐點。用 "I'd like..." 點一份。 | I'd like...<br>Use "I'd like" plus a dish to order politely.<br>I'd like the chicken rice. = 我想要雞肉飯。 |
| t3 | Chicken rice, right? (雞肉飯，對嗎？) | Yes, thank you. (是的，謝謝。) | 1. Can I get the check? (可以給我帳單嗎？) [bill_request_before_order_ready] - feedback: 現在還在確認訂單，不是結帳。<br>2. Coffee, please. (請給我咖啡。) [changes_to_cafe_order] - feedback: 這會改成點咖啡。要確認剛才的餐點。 | 店員在確認你的餐。簡短說對並道謝。 |  |
| t4 | Great. I'll bring it right out. (好的。我馬上送來。) | Thanks. (謝謝。) | 1. Just one. (一位。) [repeated_party_size] - feedback: 人數已經說過了。現在用謝謝收尾即可。<br>2. I'll pay by card. (我用卡付款。) [payment_answer_in_order_close] - feedback: 這是付款回答。現在只是店員確認餐點會準備。 | 點餐完成了。用一句謝謝收尾。 |  |

---

## a1:en:hotel_checkout - Hotel Checkout

- Level: A1
- Language: English (en)
- Scenario ID: hotel_checkout
- Setting: Hotel front desk
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台退房。選自然、簡短的英文。

### Clean Dialogue Path

- Front desk: Good morning. How can I help? (早安，需要什麼幫忙？)
- You: I'd like to check out. (我想退房。)
- Front desk: What room number, please? (請問房號？)
- You: Room 305. (305號房。)
- Front desk: May I have the key card? (可以給我房卡嗎？)
- You: Here is the key card. (這是房卡。)
- Front desk: You're all set. Here is your receipt. (都辦好了。這是您的收據。)
- You: Thank you. (謝謝。)
- Front desk: You checked out of the hotel. (你完成飯店退房了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Good morning. How can I help? (早安，需要什麼幫忙？) | I'd like to check out. (我想退房。) | 1. What's the Wi-Fi password? (Wi-Fi密碼是什麼？) [wifi_question_instead_of_checkout] - feedback: 這是在問Wi-Fi。現在要辦理退房。<br>2. What time is breakfast? (早餐幾點？) [breakfast_question_instead_of_checkout] - feedback: 這是在問早餐，不是退房。 | 你要退房。用自然的飯店櫃台英文。 | I'd like to check out<br>Use this common hotel phrase when you are ready to leave.<br>I'd like to check out. = 我想退房。 |
| t2 | What room number, please? (請問房號？) | Room 305. (305號房。) | 1. Platform three. (三號月台。) [platform_number_instead_of_room_number] - feedback: 這是月台號碼。飯店櫃台需要房號。<br>2. One ticket, please. (請給我一張票。) [ticket_purchase_at_hotel_checkout] - feedback: 這是在買票，不是回答房號。 | 櫃台問房號。直接說 room 加號碼。 |  |
| t3 | May I have the key card? (可以給我房卡嗎？) | Here is the key card. (這是房卡。) | 1. No, I don't have it. (不，我沒有。) [refusal_when_key_handover_expected] - feedback: 這是在拒絕或說沒有。情境需要交出房卡。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_at_checkout] - feedback: 這是點餐，不是交房卡。 | 櫃台要房卡。交給對方。 | Here is the key card<br>Use "Here is..." when handing something to staff.<br>Here is the key card. = 這是房卡。 |
| t4 | You're all set. Here is your receipt. (都辦好了。這是您的收據。) | Thank you. (謝謝。) | 1. Room 305. (305號房。) [repeat_room_number_after_completion] - feedback: 房號已經說過了。退房完成時道謝即可。<br>2. What's the password? (密碼是什麼？) [wifi_question_after_checkout] - feedback: 這又回到Wi-Fi問題。現在退房完成了。 | 退房完成。道謝收尾。 |  |

---

## a1:en:hotel_wifi_breakfast - Hotel Wi-Fi and Breakfast

- Level: A1
- Language: English (en)
- Scenario ID: hotel_wifi_breakfast
- Setting: Hotel front desk
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在飯店櫃台。聽櫃台人員回答，選一句自然接得上的英文。

### Clean Dialogue Path

- Front desk: Hi. How can I help? (你好。需要什麼幫忙？)
- You: What's the Wi-Fi password? (Wi-Fi密碼是什麼？)
- Front desk: It's on your key card. (在你的房卡上。)
- You: Thanks. What time is breakfast? (謝謝。早餐是幾點？)
- Front desk: Breakfast starts at seven. (早餐七點開始。)
- You: Seven, thanks. (七點，謝謝。)
- Front desk: Anything else? (還有其他需要嗎？)
- You: No, thank you. (沒有了，謝謝。)
- Front desk: You know the Wi-Fi and breakfast time. (你知道Wi-Fi和早餐時間了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. How can I help? (你好。需要什麼幫忙？) | What's the Wi-Fi password? (Wi-Fi密碼是什麼？) | 1. I need a room key. (我需要房卡。) [room_key_question_instead_of_wifi] - feedback: 這是在要房卡。你的目標是問Wi-Fi密碼。<br>2. I'd like to check out. (我想退房。) [checkout_payment_phrase] - feedback: 這像是退房。現在要問Wi-Fi。 | 你想問Wi-Fi密碼。用短句就可以。 | What's the Wi-Fi password?<br>Use "What's the Wi-Fi password?" to ask directly and politely.<br>What's the Wi-Fi password? = Wi-Fi密碼是什麼？ |
| t2 | It's on your key card. (在你的房卡上。) | Thanks. What time is breakfast? (謝謝。早餐是幾點？) | 1. I'd like the chicken rice. (我想要雞肉飯。) [restaurant_order_when_breakfast_info_expected] - feedback: 這是在餐廳點餐。現在是在飯店櫃台問早餐資訊。<br>2. I'll pay by card. (我用卡付款。) [payment_answer_in_hotel_info_context] - feedback: 這是在付款。現在要問早餐時間或地點。<br>3. Where is my room key? (我的房卡在哪裡？) [room_key_question_instead_of_breakfast] - feedback: 這又回到房卡。Wi-Fi已知道，接著問早餐。 | Wi-Fi資訊知道了。接著問早餐時間。 | What time is breakfast?<br>Use "What time is breakfast?" to ask about breakfast time.<br>What time is breakfast? = 早餐是幾點？ |
| t3 | Breakfast starts at seven. (早餐七點開始。) | Seven, thanks. (七點，謝謝。) | 1. Nine, thanks. (九點，謝謝。) [wrong_time_confirmation] - feedback: 櫃台說的是七點，不是九點。<br>2. I'd like to check out. (我想退房。) [checkout_payment_phrase] - feedback: 這像是退房。現在只要確認早餐時間。 | 櫃台告訴你早餐時間。可以確認並道謝。 |  |
| t4 | Anything else? (還有其他需要嗎？) | No, thank you. (沒有了，謝謝。) | 1. I'd like the chicken rice. (我想要雞肉飯。) [restaurant_order_after_hotel_info] - feedback: 這是餐廳點餐。飯店資訊已經問完了。<br>2. Nine, thanks. (九點，謝謝。) [repeated_wrong_time] - feedback: 早餐時間是七點。結尾時說沒有了、謝謝比較自然。 | 資訊都問完了。簡短道謝收尾。 |  |

---

## a1:en:problem_lost_item - Say a Small Item Is Lost

- Level: A1
- Language: English (en)
- Scenario ID: problem_lost_item
- Setting: Information desk
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在服務台找遺失的小物。選自然、簡短的英文。

### Clean Dialogue Path

- Staff: Hello. Can I help you? (你好，需要幫忙嗎？)
- You: I lost my small bag. (我的小包包不見了。)
- Staff: Where did you lose it? (你在哪裡弄丟的？)
- You: In the cafe. (在咖啡店。)
- Staff: The lost-and-found desk is over there. (失物招領櫃台在那邊。)
- You: Over there? (在那邊嗎？)
- Staff: Yes. Please ask there. (對。請在那裡詢問。)
- You: Thank you. (謝謝。)
- Staff: You said what was lost and where to ask next. (你說明了遺失物，也知道下一步去哪裡問。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hello. Can I help you? (你好，需要幫忙嗎？) | I lost my small bag. (我的小包包不見了。) | 1. How much is this? (這個多少錢？) [price_question_instead_of_lost_item] - feedback: 這是在問價格。現在要說物品不見了。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_instead_of_lost_item] - feedback: 這是在點餐，不是尋找遺失物。 | 簡短說你的小包包不見了。 | I lost my small bag<br>Use `I lost...` to say a simple item is lost.<br>I lost my small bag. = 我的小包包不見了。 |
| t2 | Where did you lose it? (你在哪裡弄丟的？) | In the cafe. (在咖啡店。) | 1. About ten minutes. (大約十分鐘。) [time_estimate_instead_of_lost_location] - feedback: 這是時間估計。對方問的是遺失地點。<br>2. Can I charge my phone? (我可以充手機嗎？) [charging_question_instead_of_lost_location] - feedback: 這是在問充電。現在要回答地點。 | 回答簡單地點，不需要詳細說明。 | In the cafe<br>Use a short place phrase when staff asks where.<br>In the cafe. = 在咖啡店。 |
| t3 | The lost-and-found desk is over there. (失物招領櫃台在那邊。) | Over there? (在那邊嗎？) | 1. I lost my small bag. (我的小包包不見了。) [repeat_lost_statement_after_next_step] - feedback: 你已經說過物品不見了。現在要確認下一個地點。<br>2. Can I pay now? (我可以現在付款嗎？) [payment_question_instead_of_next_step_confirmation] - feedback: 這是在付款。現在要確認失物招領櫃台的位置。 | 確認你聽到的方向。 |  |
| t4 | Yes. Please ask there. (對。請在那裡詢問。) | Thank you. (謝謝。) | 1. How many minutes? (幾分鐘？) [time_question_after_lost_item_help] - feedback: 這是問時間，和失物下一步不相關。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_after_lost_item_help] - feedback: 這是在點餐。得到協助後簡短道謝即可。 | 對方給了下一步。道謝即可。 |  |

---

## a1:en:shopping_ask_price - Asking the Price

- Level: A1
- Language: English (en)
- Scenario ID: shopping_ask_price
- Setting: Small shop counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在小店看到一件東西。選一句自然的英文問價格並回應。

### Clean Dialogue Path

- Shop staff: Hi there. Can I help you? (你好，需要幫忙嗎？)
- You: Excuse me. (不好意思。)
- You: How much is this? (這個多少錢？)
- Shop staff: It's five dollars. (五美元。)
- You: Okay, I'll take it. (好，我要這個。)
- You: Okay, I'll take it. (好，我要這個。)
- Shop staff: You understood the price and answered clearly. (你聽懂價格並清楚回應了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi there. Can I help you? (你好，需要幫忙嗎？) | Excuse me. (不好意思。) | 1. Where is the station? (車站在哪裡？) [directions_instead_of_shop_attention] - feedback: 這是在問路。現在是在店裡先引起注意。<br>2. Coffee, please. (請給我咖啡。) [food_order_in_shop_price_scene] - feedback: 這像是在點飲料，不是在問商品價格。 | 店員在打招呼。先用簡短禮貌句引起注意。 | Excuse me<br>Use "Excuse me" to politely get attention in a shop.<br>Excuse me. = 不好意思。 |
| t2 | How much is this? (這個多少錢？) | How much is this? (這個多少錢？) | 1. Can I pay by card? (我可以刷卡嗎？) [payment_method_before_price] - feedback: 這是在問付款方式。先問價格比較符合情境。<br>2. Two, please. (請給我兩個。) [quantity_before_price] - feedback: 這是在說數量。現在目標是問一件商品的價格。 | 用 this 指眼前的一件商品，句子很短也自然。 | How much is this?<br>This is the most common A1 price question for one nearby item.<br>How much is this? = 這個多少錢？ |
| t3 | It's five dollars. (五美元。) | Okay, I'll take it. (好，我要這個。) | 1. Where is the restroom? (洗手間在哪裡？) [directions_after_price] - feedback: 這突然換成問路。聽到價格後要買或道謝離開。<br>2. Can I get the check? (可以給我帳單嗎？) [restaurant_bill_in_shop] - feedback: 這是餐廳結帳用語，不是買店裡商品。 | 店員說價格。聽到 five dollars。 |  |
| t4 | Okay, I'll take it. (好，我要這個。) | Okay, I'll take it. (好，我要這個。) | 1. Where is the restroom? (洗手間在哪裡？) [directions_after_price] - feedback: 這突然換成問路。聽到價格後要買或道謝離開。<br>2. Can I get the check? (可以給我帳單嗎？) [restaurant_bill_in_shop] - feedback: 這是餐廳結帳用語，不是買店裡商品。 | 如果要買，可以用 I'll take it。 |  |

---

## a1:en:social_running_late - Say You Are Running Late

- Level: A1
- Language: English (en)
- Scenario ID: social_running_late
- Setting: Message to a friend
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你要傳訊息給朋友說會晚到。選自然、簡短的英文。

### Clean Dialogue Path

- Friend: Are you close? (你快到了嗎？)
- You: Sorry, I'm running late. (抱歉，我會晚到。)
- Friend: How many minutes? (幾分鐘？)
- You: About ten minutes. (大約十分鐘。)
- Friend: No problem. I'll wait. (沒問題。我會等。)
- You: Thanks for waiting. (謝謝你等我。)
- Friend: See you soon. (待會見。)
- You: See you soon. (待會見。)
- Friend: You told your friend you are late and gave a time. (你告訴朋友會晚到，也給了時間。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Are you close? (你快到了嗎？) | Sorry, I'm running late. (抱歉，我會晚到。) | 1. I'd like a coffee. (我想要一杯咖啡。) [food_order_instead_of_late_message] - feedback: 這是在點餐。現在要跟朋友說會晚到。<br>2. Where is the outlet? (插座在哪裡？) [charging_question_instead_of_late_message] - feedback: 這是在問充電位置。現在是晚到訊息。 | 用朋友間自然英文說抱歉，會晚到。 | I'm running late<br>Use this common phrase to say you will arrive late.<br>Sorry, I'm running late. = 抱歉，我會晚到。 |
| t2 | How many minutes? (幾分鐘？) | About ten minutes. (大約十分鐘。) | 1. Room 305. (305號房。) [room_number_instead_of_minutes] - feedback: 這是房號，不是抵達時間。<br>2. Can I pay now? (我可以現在付款嗎？) [payment_question_instead_of_minutes] - feedback: 這是在付款。朋友問的是幾分鐘。 | 給簡短時間估計，不需要精準位置。 | About ten minutes<br>Use `about` for a simple time estimate.<br>About ten minutes. = 大約十分鐘。 |
| t3 | No problem. I'll wait. (沒問題。我會等。) | Thanks for waiting. (謝謝你等我。) | 1. Sorry, I'm running late. (抱歉，我會晚到。) [repeat_apology_after_acceptance] - feedback: 朋友已經接受並會等。現在道謝更自然。<br>2. Where is the restroom? (廁所在哪裡？) [directions_question_instead_of_thanks] - feedback: 這是在問路，沒有回應朋友願意等。 | 朋友願意等。簡短道謝。 |  |
| t4 | See you soon. (待會見。) | See you soon. (待會見。) | 1. Thank you for your help. (謝謝您的幫忙。) [over_formal_service_thanks_in_friend_context] - feedback: 這像服務情境的正式道謝。朋友訊息用自然收尾即可。<br>2. I lost my bag. (我的包包不見了。) [lost_item_statement_instead_of_close] - feedback: 這是遺失物情境。現在只要跟朋友收尾。 | 用同樣自然的朋友間收尾。 |  |

---

## a1:en:travel_hotel_checkin - Hotel Check-In

- Level: A1
- Language: English (en)
- Scenario ID: travel_hotel_checkin
- Setting: Hotel front desk
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: You are at a hotel front desk. Check in, give your name, and understand the next step.

### Clean Dialogue Path

- Front desk staff: Good evening. How can I help you? (The staff member is asking what you need.)
- You: Hi, I'd like to check in. (I want to check in.)
- Front desk staff: Of course. What name is the reservation under? (The staff member is asking for the name on the reservation.)
- You: It's under Lee. (The reservation is under the name Lee.)
- Front desk staff: I found your reservation. One night, correct? (The staff member found the reservation and is confirming it.)
- You: Yes, that's right. (The reservation information is correct.)
- Front desk staff: Here is your key. Your room is on the third floor. (The staff member gives you the key and tells you the floor.)
- You: Thank you. (Thanks.)
- Front desk staff: Breakfast is in the lobby from seven to ten. (Breakfast is in the lobby in the morning.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Good evening. How can I help you? (The staff member is asking what you need.) | Hi, I'd like to check in. (I want to check in.) | 1. Can I get a coffee? (I want to order coffee.) [wrong_scenario_request] - feedback: This is a cafe order. At the front desk, say you want to check in.<br>2. Where is the station? (I am asking for directions outside.) [wrong_scenario_request] - feedback: This asks for directions. The staff is ready to help with hotel check-in. | Say that you want to check in. |  |
| t2 | Of course. What name is the reservation under? (The staff member is asking for the name on the reservation.) | It's under Lee. (The reservation is under the name Lee.) | 1. I want to check out. (I want to leave the hotel.) [wrong_act_checkout] - feedback: Check out is for leaving. You are checking in, so give the reservation name.<br>2. It is on the left. (I am giving a direction.) [wrong_scenario_response] - feedback: This gives a direction. The staff asked for your reservation name. | Give a short name phrase. You do not need a full explanation. | under + name<br>Hotels often ask what name the reservation is under. Answer with "It's under..." and your name.<br>It's under Lee. = The reservation name is Lee.<br>The name is Lee. = The name is Lee. |
| t3 | I found your reservation. One night, correct? (The staff member found the reservation and is confirming it.) | Yes, that's right. (The reservation information is correct.) | 1. Can I get a coffee? (I want to order coffee.) [wrong_scenario_request] - feedback: This is not a cafe. The staff is confirming your hotel reservation.<br>2. No, thank you. (I do not want it.) [wrong_act_refusal] - feedback: This sounds like refusing help. If the details are correct, confirm them. | If the information is right, answer yes. |  |
| t4 | Here is your key. Your room is on the third floor. (The staff member gives you the key and tells you the floor.) | Thank you. (Thanks.) | 1. It's under Lee. (The reservation is under Lee.) [repeated_prior_answer] - feedback: You already gave the name. Now the staff is giving you the key.<br>2. Where is the restroom? (I am asking for a restroom.) [off_topic_statement] - feedback: That is a different request. First close the check-in step. | You have the key. A short thank you is enough. |  |

---

## a1:en:travel_restroom_directions - Asking for the Restroom

- Level: A1
- Language: English (en)
- Scenario ID: travel_restroom_directions
- Setting: Public venue
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: You are in a public place and need to find the restroom. Ask politely and listen for the direction.

### Clean Dialogue Path

- You: Excuse me. (I want to get someone's attention politely.)
- Staff member: Yes, how can I help? (The staff member is asking what you need.)
- You: Where is the restroom? (I am asking for the restroom location.)
- Staff member: Go straight, and it's on the right. (The restroom is straight ahead and on the right.)
- You: On the right? (I am checking the direction.)
- Staff member: Yes, on the right. (The staff member confirms the direction.)
- You: Thank you. (Thanks.)
- Staff member: You're welcome. (The staff member closes politely.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Yes, how can I help? (The staff member is asking what you need.) | Where is the restroom? (I am asking for the restroom location.) | 1. Can I get an iced coffee? (I want to order coffee.) [wrong_scenario_request] - feedback: This is a cafe order. You need a location question.<br>2. How much is it? (I am asking for a price.) [wrong_scenario_request] - feedback: This asks about a price. Ask where the restroom is. | Ask where the restroom is. |  |
| t2 | Go straight, and it's on the right. (The restroom is straight ahead and on the right.) | On the right? (I am checking the direction.) | 1. It's under Lee. (I am giving a hotel reservation name.) [wrong_scenario_response] - feedback: This belongs at a hotel front desk. Here you are checking a direction.<br>2. I'm fine. (I do not need help.) [wrong_act_personal_status] - feedback: This does not check the direction. Repeat the key direction if you need to confirm. | Listen for two direction words: straight and right. | straight / right<br>"Go straight" means keep walking forward. "On the right" means it is on your right side.<br>Go straight. = Walk forward.<br>It's on the right. = It is on your right side. |
| t3 | Yes, on the right. (The staff member confirms the direction.) | Thank you. (Thanks.) | 1. On the right? (I am checking the direction again.) [repeated_prior_answer] - feedback: They already confirmed the direction. Now you can thank them.<br>2. No, thank you. (I do not want help.) [wrong_act_refusal] - feedback: This sounds like refusing help. You received the direction, so close with thanks. | You have the direction. Say thank you. |  |

---

## a1:en:travel_station_directions - Finding a Station Exit

- Level: A1
- Language: English (en)
- Scenario ID: travel_station_directions
- Setting: Train station
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在車站裡找出口。聽對方的方向提示，選一句自然接得上的英文。

### Clean Dialogue Path

- Station staff: Can I help you? (需要幫忙嗎？)
- You: Excuse me, where is exit 2? (不好意思，2號出口在哪裡？)
- Station staff: Go straight, then turn left. (直走，然後左轉。)
- You: Straight, then left? (直走，然後左轉嗎？)
- Station staff: Yes. Exit 2 is on the left. (對。2號出口在左邊。)
- You: Thank you. (謝謝。)
- Station staff: You're welcome. (不客氣。)
- You: Thanks again. (再次謝謝。)
- Station staff: You know where the exit is. (你知道出口方向了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Can I help you? (需要幫忙嗎？) | Excuse me, where is exit 2? (不好意思，2號出口在哪裡？) | 1. Where is the restroom? (洗手間在哪裡？) [restroom_question_when_exit_is_goal] - feedback: 這是在問洗手間。你的目標是找出口。<br>2. I need a taxi. (我需要計程車。) [taxi_destination_answer] - feedback: 這是在說交通方式，不是在問車站出口。 | 可以問出口在哪裡。 | Where is...?<br>Use "Where is" plus the place to ask for a location.<br>Where is exit 2? = 2號出口在哪裡？ |
| t2 | Go straight, then turn left. (直走，然後左轉。) | Straight, then left? (直走，然後左轉嗎？) | 1. Straight, then right? (直走，然後右轉嗎？) [wrong_direction_confirmation] - feedback: 對方說的是左轉，不是右轉。<br>2. I will pay by card. (我會用卡付款。) [payment_answer_in_direction_context] - feedback: 這是付款回答。現在是在確認方向。<br>3. Platform five? (5號月台嗎？) [wrong_platform_confirmation] - feedback: 你的目標是出口，不是月台。 | 對方說直走再左轉。可以確認方向。 | Straight / left<br>Use "go straight" and "turn left" for simple directions.<br>Go straight. = 直走。<br>Turn left. = 左轉。 |
| t3 | Yes. Exit 2 is on the left. (對。2號出口在左邊。) | Thank you. (謝謝。) | 1. Where is exit 2? (2號出口在哪裡？) [repeated_location_question] - feedback: 對方已經告訴你方向了。現在道謝比較自然。<br>2. One ticket, please. (請給我一張票。) [ticket_purchase_in_direction_context] - feedback: 這是在買票。現在是問路後的收尾。 | 出口位置確認了。可以道謝。 |  |
| t4 | You're welcome. (不客氣。) | Thanks again. (再次謝謝。) | 1. Can I get the check? (可以給我帳單嗎？) [wrong_scenario_payment] - feedback: 這是餐廳付款時的話，不是問路收尾。<br>2. Where is the restroom? (洗手間在哪裡？) [new_wrong_location_question] - feedback: 這會換成別的地點。你的出口方向已經確認了。 | 對話結束了。可以簡短收尾。 |  |

---

## a1:en:travel_taxi_destination - Taking a Taxi to a Destination

- Level: A1
- Language: English (en)
- Scenario ID: travel_taxi_destination
- Setting: Taxi
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在計程車上。聽司機說話，選一句自然接得上的英文。

### Clean Dialogue Path

- Driver: Where to? (要去哪裡？)
- You: Can you take me to this hotel, please? (可以載我到這間飯店嗎？)
- Driver: This hotel? (這間飯店嗎？)
- You: Yes, please. (是的，麻煩你。)
- Driver: About ten minutes. (大約十分鐘。)
- You: Okay, thank you. (好的，謝謝。)
- Driver: We're here. (到了。)
- You: Thank you. (謝謝。)
- Driver: You gave the destination and arrived. (你說出目的地並到達了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Where to? (要去哪裡？) | Can you take me to this hotel, please? (可以載我到這間飯店嗎？) | 1. Where is the restroom? (廁所在哪裡？) [directions_question_instead_of_destination] - feedback: 這是在問路。現在要告訴司機目的地。<br>2. I'd like a coffee. (我想要一杯咖啡。) [food_order_in_taxi] - feedback: 這是點餐，不是計程車目的地。 | 司機問目的地。用自然英文說要去這間飯店。 | Can you take me to this hotel?<br>Use this polite taxi formula to give a destination.<br>Can you take me to this hotel, please? = 可以載我到這間飯店嗎？ |
| t2 | This hotel? (這間飯店嗎？) | Yes, please. (是的，麻煩你。) | 1. No, cancel it. (不用，取消。) [cancel_when_confirmation_expected] - feedback: 司機確認的是正確目的地，這裡不需要取消。<br>2. Can you take me to this hotel, please? (可以載我到這間飯店嗎？) [repeat_destination_when_confirmation_expected] - feedback: 目的地已經說過了。現在自然回覆是確認。 | 司機確認目的地。直接確認。 |  |
| t3 | About ten minutes. (大約十分鐘。) | Okay, thank you. (好的，謝謝。) | 1. One ticket, please. (請給我一張票。) [ticket_purchase_in_taxi] - feedback: 這是在買票。現在是在計程車裡聽車程時間。<br>2. Where to? (要去哪裡？) [driver_role_sentence_by_learner] - feedback: 這是司機問乘客的話，不是乘客回覆。 | 聽到車程時間。表示知道並道謝。 |  |
| t4 | We're here. (到了。) | Thank you. (謝謝。) | 1. This hotel? (這間飯店嗎？) [driver_confirmation_reused_by_learner] - feedback: 這像司機確認目的地。到達後乘客說謝謝更自然。<br>2. What time is breakfast? (早餐幾點？) [hotel_question_in_taxi_closing] - feedback: 這是飯店櫃台問題，不是計程車到達後的收尾。 | 已經到目的地。簡短道謝。 |  |

---

## a1:en:travel_ticket_buying - Buying a Ticket

- Level: A1
- Language: English (en)
- Scenario ID: travel_ticket_buying
- Setting: Train ticket counter
- Source status: candidate_runtime_verified
- Review state: draft
- Native review: native_pending
- Support text: 你在火車售票櫃台買一張票。選自然、簡短的英文。

### Clean Dialogue Path

- Ticket clerk: Hello. Where are you going? (您好。您要去哪裡？)
- You: One ticket to Central Station, please. (請給我一張到中央車站的票。)
- Ticket clerk: One ticket to Central Station? (一張到中央車站的票嗎？)
- You: Yes, please. (是的，麻煩你。)
- Ticket clerk: That's three dollars. Platform two. (三美元。二號月台。)
- You: Here you go. Thank you. (給你。謝謝。)
- Ticket clerk: Here is your ticket. Platform two. (這是您的票。二號月台。)
- You: Thank you. (謝謝。)
- Ticket clerk: Here is your ticket. Platform two. (這是您的票。二號月台。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hello. Where are you going? (您好。您要去哪裡？) | One ticket to Central Station, please. (請給我一張到中央車站的票。) | 1. Where is Central Station? (中央車站在哪裡？) [directions_instead_of_ticket_purchase] - feedback: 這是在問路，不是在買票。<br>2. I'd like a sandwich. (我想要一份三明治。) [food_order_at_ticket_counter] - feedback: 這是在點餐，不適合售票櫃台。 | 售票員問目的地。說 one ticket to 加地名。 |  |
| t2 | One ticket to Central Station? (一張到中央車站的票嗎？) | Yes, please. (是的，麻煩你。) | 1. No, cancel it. (不用，取消。) [cancel_when_confirmation_expected] - feedback: 售票員確認的是正確資訊；這裡不該取消。<br>2. Two tickets to the airport. (兩張到機場的票。) [wrong_quantity_and_destination] - feedback: 這改變了張數和目的地，和前一句不一致。 | 確認目的地和張數。直接說 yes, please。 | Yes, please<br>Use this short polite answer when staff confirms your request.<br>Yes, please. = 是的，麻煩你。 |
| t3 | That's three dollars. Platform two. (三美元。二號月台。) | Here you go. Thank you. (給你。謝謝。) | 1. Are you going to Central Station? (你要去中央車站嗎？) [staff_role_sentence_by_customer] - feedback: 這像售票員問旅客，不是旅客付款。<br>2. Nice to meet you. (很高興認識你。) [social_closing_at_ticket_counter] - feedback: 這是社交初次見面語，不是買票收尾。 | 售票員給價格和月台。付款後簡短道謝。 |  |
| t4 | Here is your ticket. Platform two. (這是您的票。二號月台。) | Thank you. (謝謝。) | 1. Can I have a coffee? (可以給我一杯咖啡嗎？) [food_order_at_ticket_counter] - feedback: 這是在點咖啡，不是售票窗口收尾。<br>2. Nice to meet you. (很高興認識你。) [social_closing_at_ticket_counter] - feedback: 這是社交初次見面語，不是買票收尾。 | 拿到票和月台資訊後，簡短道謝。 |  |

---
