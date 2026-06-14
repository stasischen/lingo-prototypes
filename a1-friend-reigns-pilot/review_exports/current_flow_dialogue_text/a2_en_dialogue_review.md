# A2 English Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:en:a2_app_booking_confirmation - Confirm an App Booking

- Level: A2
- Language: English (en)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Handle a low-risk digital or simple document-help task in short A2 turns.
- Support text: Keep the task low-risk. Do not give passwords, payment details, sensitive ID, or legal/medical information.

### Clean Dialogue Path

- staff: Your booking is confirmed for 3 p.m. today. (預約確認為今天下午三點。)
- 你: Where is the place? (地點在哪裡？)
- staff: It is on the second floor of the cafe. (在咖啡店二樓。)
- 你: So, the second floor of the cafe? (是在咖啡店二樓，對嗎？)
- staff: Yes, the booking name is Mina. (對，預約姓名是 Mina。)
- 你: Yes, that is my name. (對，是我的名字。)
- staff: Then we will see you at 3 p.m. (那下午三點見。)
- 你: Okay, I will come at 3 p.m. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Your booking is confirmed for 3 p.m. today. (預約確認為今天下午三點。) | Where is the place? (地點在哪裡？) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t2 | It is on the second floor of the cafe. (在咖啡店二樓。) | So, the second floor of the cafe? (是在咖啡店二樓，對嗎？) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t3 | Yes, the booking name is Mina. (對，預約姓名是 Mina。) | Yes, that is my name. (對，是我的名字。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t4 | Then we will see you at 3 p.m. (那下午三點見。) | Okay, I will come at 3 p.m. (好，我下午三點會去。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |

---

## a2:en:a2_ask_ingredient_preference - Ask About an Ingredient Preference

- Level: A2
- Language: English (en)
- Scenario ID: a2_ask_ingredient_preference
- Setting: restaurant counter
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Ask whether a common ingredient is included and choose based on preference.
- Support text: Ask whether a common ingredient is included and choose based on preference.

### Clean Dialogue Path

- staff member: What would you like to order? (您想點什麼？)
- 你: Does this salad have onion? (這個沙拉裡有洋蔥嗎？)
- staff member: Yes, it has a little onion. (有，放一點洋蔥。)
- 你: It has a little onion, right? (有一點洋蔥，對嗎？)
- staff member: If you like, we can make it without onion. (如果您想要，可以不加洋蔥。)
- 你: Yes, without onion, please. (好的，請不要加洋蔥。)
- staff member: Sure. I’ll prepare it without onion. (可以，我會準備不加洋蔥的。)
- 你: Thank you. Please make it that way. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What would you like to order? (您想點什麼？) | Does this salad have onion? (這個沙拉裡有洋蔥嗎？) | 1. What floor is this salad on? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: A floor question does not fit food ingredients.<br>2. Please change my ticket time. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: This switches to a ticket situation. | Ask about a common ingredient. |  |
| t2 | Yes, it has a little onion. (有，放一點洋蔥。) | It has a little onion, right? (有一點洋蔥，對嗎？) | 1. It has a lot of meat, right? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: Meat was not mentioned.<br>2. The room is noisy, right? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: This switches to a hotel problem. | Confirm the ingredient information. |  |
| t3 | If you like, we can make it without onion. (如果您想要，可以不加洋蔥。) | Yes, without onion, please. (好的，請不要加洋蔥。) | 1. Yes, please give me allergy medicine. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: Medicine/allergy handling is outside this task.<br>2. Yes, please refund it. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: This is not a refund request. | Choose by preference only. |  |
| t4 | Sure. I’ll prepare it without onion. (可以，我會準備不加洋蔥的。) | Thank you. Please make it that way. (謝謝，請這樣做。) | 1. Please tell me my passport number. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: Passport details are not needed.<br>2. I want to store my luggage. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: This switches to luggage storage. | Close by confirming the order. |  |

---

## a2:en:a2_ask_late_checkout - Ask for Late Checkout

- Level: A2
- Language: English (en)
- Scenario ID: a2_ask_late_checkout
- Setting: At the hotel front desk
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Ask if late checkout is possible and confirm the final checkout time.

### Clean Dialogue Path

- Hotel Staff: How can I help you? (我可以怎麼幫您？)
- You: Can I check out a little later? (我可以晚一點退房嗎？)
- Hotel Staff: Today, you can check out by one o’clock. (今天可以一點前退房。)
- You: One o’clock is okay, right? (一點可以，對嗎？)
- Hotel Staff: Please show your room card at the desk before noon. (請在中午前把房卡拿到櫃台。)
- You: I show my card before noon, right? (中午前拿房卡給您看，對嗎？)
- Hotel Staff: Okay, I will mark checkout for one o’clock. (好的，我幫您確認一點退房。)
- You: Thank you. I will check out at one. (謝謝。我一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | How can I help you? (我可以怎麼幫您？) | Can I check out a little later? (我可以晚一點退房嗎？) | 1. Can I check in a little later? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: This is checkout, not check-in.<br>2. Please lower the price. (請幫我降價。) [forbidden_or_wrong_domain] - feedback: Price negotiation is outside this A2 task. | Ask about late checkout. |  |
| t2 | Today, you can check out by one o’clock. (今天可以一點前退房。) | One o’clock is okay, right? (一點可以，對嗎？) | 1. Ten o’clock is okay, right? (十點可以，對嗎？) [wrong_detail_or_domain] - feedback: The staff said one o’clock.<br>2. I will book a new room. (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: This is checkout time confirmation, not a new booking. | Listen for the allowed time. | A2 pattern<br>A useful pattern for this accommodation situation.<br>one o’clock = 一點 |
| t3 | Please show your room card at the desk before noon. (請在中午前把房卡拿到櫃台。) | I show my card before noon, right? (中午前拿房卡給您看，對嗎？) | 1. I tell you my passport number, right? (告訴您護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: Passport details are not needed here.<br>2. I pick up my luggage at seven, right? (七點領行李，對嗎？) [forbidden_or_wrong_domain] - feedback: This is checkout, not luggage pickup. | Confirm the simple condition. |  |
| t4 | Okay, I will mark checkout for one o’clock. (好的，我幫您確認一點退房。) | Thank you. I will check out at one. (謝謝。我一點退房。) | 1. I will ask for a refund. (我要申請退款。) [wrong_detail_or_domain] - feedback: Refunds are outside this situation.<br>2. I will take the train tomorrow morning. (我明天早上會搭火車。) [forbidden_or_wrong_domain] - feedback: This is checkout confirmation, not transport. | Confirm the final time. |  |

---

## a2:en:a2_ask_recommendation_budget - Ask for a Recommendation in Budget

- Level: A2
- Language: English (en)
- Scenario ID: a2_ask_recommendation_budget
- Setting: small shop
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Ask for a simple recommendation within a small budget.
- Support text: Ask for a simple recommendation within a small budget.

### Clean Dialogue Path

- staff member: What are you looking for? (您在找什麼？)
- 你: Could you recommend a gift under ten dollars? (可以推薦十美元以內的禮物嗎？)
- staff member: Do you want something light or something practical? (您想要輕巧的，還是實用的？)
- 你: Something practical, please. (請推薦實用的。)
- staff member: Then this small notebook is under ten dollars. (那這本小筆記本在十美元以內。)
- 你: That notebook is under ten dollars, right? (那本筆記本在十美元以內，對嗎？)
- staff member: Yes, and gift wrapping is possible. (對，也可以包裝成禮物。)
- 你: Great. I’ll take that notebook. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What are you looking for? (您在找什麼？) | Could you recommend a gift under ten dollars? (可以推薦十美元以內的禮物嗎？) | 1. Please check my bank account. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: This is not a banking task.<br>2. I want to file a lost-item report. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: Lost-item reporting is another task. | Ask for a recommendation within a small budget. |  |
| t2 | Do you want something light or something practical? (您想要輕巧的，還是實用的？) | Something practical, please. (請推薦實用的。) | 1. Something spicy, please. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Spicy fits a food menu, not this gift request.<br>2. I want late checkout. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: This switches to a hotel situation. | State a simple preference. |  |
| t3 | Then this small notebook is under ten dollars. (那這本小筆記本在十美元以內。) | That notebook is under ten dollars, right? (那本筆記本在十美元以內，對嗎？) | 1. That room is under ten dollars, right? (那個房間在十美元以內，對嗎？) [wrong_detail_or_domain] - feedback: A room is not the recommended item.<br>2. That ticket was for yesterday, right? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: This switches to tickets. | Confirm the recommendation and budget. |  |
| t4 | Yes, and gift wrapping is possible. (對，也可以包裝成禮物。) | Great. I’ll take that notebook. (很好，我要那本筆記本。) | 1. Please refund it. (請退款。) [wrong_detail_or_domain] - feedback: This is not a refund request.<br>2. Please check my insurance. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: Insurance is outside this low-risk task. | Accept the recommendation politely. |  |

---

## a2:en:a2_ask_transfer_platform - Ask for the Transfer Platform

- Level: A2
- Language: English (en)
- Scenario ID: a2_ask_transfer_platform
- Setting: At a busy station
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You need to transfer and ask a staff member for the right platform.
- Learner goal: Ask where to transfer, understand the platform, and repeat a short two-step direction.
- Support text: Ask where to transfer. Listen for the platform and repeat the short direction.

### Clean Dialogue Path

- Station Staff: Hi. Do you need help? (嗨。你需要幫忙嗎？)
- You: Where do I transfer for the airport train? (我要在哪裡轉乘機場列車？)
- Station Staff: Transfer at platform three. Go down the stairs and turn left. (在三號月台轉乘。下樓梯後左轉。)
- You: Platform three, down the stairs and left. (三號月台，下樓梯後左轉。)
- Station Staff: That's right. After you turn left, follow the airport train sign. (沒錯。左轉後，跟著機場列車標誌走。)
- You: Okay, I will follow the airport train sign. (好的，我會跟著機場列車標誌走。)
- Station Staff: Yes. Platform three is just over there. (對。三號月台就在那邊。)
- You: Great, thank you for your help. (太好了，謝謝你的幫忙。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hi. Do you need help? (嗨。你需要幫忙嗎？) | Where do I transfer for the airport train? (我要在哪裡轉乘機場列車？) | 1. Where do I cook the airport train? (我要在哪裡煮機場列車？) [wrong_verb] - feedback: Use transfer for changing trains. Cook does not fit here.<br>2. Can I order coffee here? (我可以在這裡點咖啡嗎？) [wrong_scenario_cafe] - feedback: This is cafe language. Here you need transfer information. | Ask where to transfer for the airport train. |  |
| t2 | Transfer at platform three. Go down the stairs and turn left. (在三號月台轉乘。下樓梯後左轉。) | Platform three, down the stairs and left. (三號月台，下樓梯後左轉。) | 1. Platform thirteen, up the stairs and right. (十三號月台，上樓梯後右轉。) [wrong_platform_direction] - feedback: The staff said platform three, down the stairs, and left.<br>2. Seat three, near the window. (三號座位，靠窗。) [wrong_entity_seat] - feedback: This is about a platform, not a seat. | Confirm the platform and the two short steps. | transfer at + platform<br>Use transfer at to say where to change transport.<br>transfer at platform three = 在三號月台轉乘<br>go down the stairs = 下樓梯 |
| t3 | That's right. After you turn left, follow the airport train sign. (沒錯。左轉後，跟著機場列車標誌走。) | Okay, I will follow the airport train sign. (好的，我會跟著機場列車標誌走。) | 1. Okay, I will follow the dinner menu. (好的，我會跟著晚餐菜單走。) [wrong_noun_menu] - feedback: Follow the airport train sign, not a menu.<br>2. Okay, I will stay on this train forever. (好的，我會永遠待在這班車上。) [wrong_action] - feedback: You need to transfer, so follow the sign. | Confirm the next step with the sign. |  |
| t4 | Yes. Platform three is just over there. (對。三號月台就在那邊。) | Great, thank you for your help. (太好了，謝謝你的幫忙。) | 1. Great, please call the police. (太好了，請報警。) [forbidden_emergency] - feedback: Emergency language is outside this practice. A simple thank you is enough.<br>2. Great, I want to buy a shirt. (太好了，我想買一件襯衫。) [wrong_scenario_shopping] - feedback: This is shopping language. Here you are closing a station direction. | You have the direction now. Close politely. |  |

---

## a2:en:a2_change_delivery_pickup_time - Change a Pickup Time

- Level: A2
- Language: English (en)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Handle a low-risk digital or simple document-help task in short A2 turns.
- Support text: Keep the task low-risk. Do not give passwords, payment details, sensitive ID, or legal/medical information.

### Clean Dialogue Path

- staff: Your pickup is at 4 p.m. today. (今天四點取貨。)
- 你: Can I change the pickup time? (可以改取貨時間嗎？)
- staff: Yes, 5 p.m. is available. (可以，五點可以。)
- 你: Then 5 p.m., please. (那請改成五點。)
- staff: So, change it to 5 p.m.? (改成五點嗎？)
- 你: Yes, 5 p.m. works. (對，五點可以。)
- staff: Okay, I will change it to 5 p.m. (好的，我會改成五點。)
- 你: Thanks. I will come at 5 p.m. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Your pickup is at 4 p.m. today. (今天四點取貨。) | Can I change the pickup time? (可以改取貨時間嗎？) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t2 | Yes, 5 p.m. is available. (可以，五點可以。) | Then 5 p.m., please. (那請改成五點。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t3 | So, change it to 5 p.m.? (改成五點嗎？) | Yes, 5 p.m. works. (對，五點可以。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t4 | Okay, I will change it to 5 p.m. (好的，我會改成五點。) | Thanks. I will come at 5 p.m. (謝謝，我五點會去。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |

---

## a2:en:a2_change_ticket_time - Change a Ticket Time

- Level: A2
- Language: English (en)
- Scenario ID: a2_change_ticket_time
- Setting: At a station ticket counter
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You want to change the time on a transport ticket.
- Learner goal: Ask to change the ticket time, choose an available time, and confirm it.
- Support text: Ask to change your ticket time. Listen for the available time and confirm it.

### Clean Dialogue Path

- Ticket Staff: Hello. How can I help you? (你好。我可以怎麼幫你？)
- You: Can I change my ticket time? (我可以改票的時間嗎？)
- Ticket Staff: The next available time is four thirty. (下一個可用時間是四點半。)
- You: Four thirty is fine. (四點半可以。)
- Ticket Staff: Okay. Should I change it to four thirty? (好的。我要把它改成四點半嗎？)
- You: Yes, please change it to four thirty. (是的，請改成四點半。)
- Ticket Staff: Done. Your ticket is now for four thirty. (好了。你的票現在是四點半。)
- You: Thank you. That works for me. (謝謝。這個時間我可以。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hello. How can I help you? (你好。我可以怎麼幫你？) | Can I change my ticket time? (我可以改票的時間嗎？) | 1. Can I change my hotel room? (我可以換飯店房間嗎？) [wrong_scenario_hotel] - feedback: This is hotel language. You need to ask about your ticket time.<br>2. Can I bought my ticket time? (我可以買了我的票時間嗎？) [grammar_wrong_request] - feedback: Use Can I change my ticket time? for a polite request. | Ask politely to change the time on your ticket. |  |
| t2 | The next available time is four thirty. (下一個可用時間是四點半。) | Four thirty is fine. (四點半可以。) | 1. Four thirty is yesterday. (四點半是昨天。) [wrong_time_expression] - feedback: Four thirty is a clock time. Accept it with Four thirty is fine.<br>2. I want platform four. (我要四號月台。) [wrong_entity_platform] - feedback: The staff gave a time, not a platform number. | The staff offers four thirty. Accept that time. | available time<br>Available means you can choose that time.<br>The next available time is four thirty. = 下一個可用時間是四點半。<br>Is five o'clock available? = 五點有位置嗎？ |
| t3 | Okay. Should I change it to four thirty? (好的。我要把它改成四點半嗎？) | Yes, please change it to four thirty. (是的，請改成四點半。) | 1. Yes, please change it to fourteen days. (是的，請改成十四天。) [wrong_time_unit] - feedback: The new ticket time is four thirty, not fourteen days.<br>2. No, please bring my luggage. (不用，請拿我的行李。) [wrong_scenario_luggage] - feedback: This is luggage language. Here you need to confirm the ticket time. | Confirm the new ticket time. |  |
| t4 | Done. Your ticket is now for four thirty. (好了。你的票現在是四點半。) | Thank you. That works for me. (謝謝。這個時間我可以。) | 1. Thank you. I need my money back. (謝謝。我需要退錢。) [forbidden_refund] - feedback: Refund language is outside this practice. A simple thank you is enough.<br>2. Thank you. I am at the wrong cafe. (謝謝。我在錯的咖啡店。) [wrong_scenario_cafe] - feedback: This changes the situation. Here the ticket time is confirmed. | The change is complete. Acknowledge and close. |  |

---

## a2:en:a2_compare_two_menu_options - Compare Two Menu Options

- Level: A2
- Language: English (en)
- Scenario ID: a2_compare_two_menu_options
- Setting: restaurant counter
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Compare two simple menu options and choose the one you prefer.
- Support text: Compare two simple menu options and choose the one you prefer.

### Clean Dialogue Path

- staff member: Today you can choose the rice bowl or the noodle soup. (今天可以選飯碗或湯麵。)
- 你: How are the two options different? (兩個選項有什麼不同？)
- staff member: The rice bowl is a little spicy, and the noodle soup is lighter. (飯碗有點辣，湯麵比較清爽。)
- 你: The noodle soup is lighter, right? (湯麵比較清爽，對嗎？)
- staff member: Yes, the noodle soup is less spicy. (對，湯麵比較不辣。)
- 你: Then I’ll have the noodle soup. (那我要湯麵。)
- staff member: Great. I’ll put in one noodle soup. (好的，我幫您點一份湯麵。)
- 你: Thanks. One noodle soup, please. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Today you can choose the rice bowl or the noodle soup. (今天可以選飯碗或湯麵。) | How are the two options different? (兩個選項有什麼不同？) | 1. Where is my table? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: This asks about seating, not the menu comparison.<br>2. I want a refund. (我想退款。) [forbidden_or_wrong_domain] - feedback: A refund is outside this A2 task. | Ask about the difference between the two options. |  |
| t2 | The rice bowl is a little spicy, and the noodle soup is lighter. (飯碗有點辣，湯麵比較清爽。) | The noodle soup is lighter, right? (湯麵比較清爽，對嗎？) | 1. The rice bowl is cheaper, right? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: Price was not mentioned.<br>2. The train is faster, right? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: This switches to transportation. | Confirm the comparison you heard. |  |
| t3 | Yes, the noodle soup is less spicy. (對，湯麵比較不辣。) | Then I’ll have the noodle soup. (那我要湯麵。) | 1. Then I’ll change rooms. (那我要換房間。) [wrong_detail_or_domain] - feedback: This switches to a hotel situation.<br>2. Then I’ll show my passport. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: A passport is not needed here. | Choose the option that matches your preference. |  |
| t4 | Great. I’ll put in one noodle soup. (好的，我幫您點一份湯麵。) | Thanks. One noodle soup, please. (謝謝，請給我一份湯麵。) | 1. I’ll call the police. (我要報警。) [wrong_detail_or_domain] - feedback: That is too serious for this situation.<br>2. I need to go to the hospital tomorrow. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: This is not a medical situation. | Confirm the chosen menu item politely. |  |

---

## a2:en:a2_confirm_date_time_place - Confirm Date, Time, and Place

- Level: A2
- Language: English (en)
- Scenario ID: a2_confirm_date_time_place
- Setting: Checking a short message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You confirm date, time, and place from a short message.
- Learner goal: Understand a short message and confirm the key details.
- Support text: Read your friend's short message. Confirm the date, time, and place.

### Clean Dialogue Path

- Friend: Did you check my message? (你看過我的訊息了嗎？)
- You: Yes, tomorrow at 10 a.m., right? (有，明天上午十點，對吧？)
- Friend: Yes. Where are we meeting? (對。我們在哪裡見？)
- You: In front of City Hall. (在市政廳前面。)
- Friend: If I am late, I will message you. (如果我晚到，我會傳訊息給你。)
- You: Okay, I understand. (好，我知道了。)
- Friend: Great. See you tomorrow. (太好了。明天見。)
- You: Yes, see you tomorrow. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Did you check my message? (你看過我的訊息了嗎？) | Yes, tomorrow at 10 a.m., right? (有，明天上午十點，對吧？) | 1. Yes, tonight at 10 p.m., right? (有，今晚十點，對吧？) [wrong_date_time] - feedback: The message says tomorrow at 10 a.m., not tonight at 10 p.m.<br>2. Yes, I checked the menu. (有，我看過菜單了。) [wrong_scenario_menu] - feedback: This message is about a meeting time and place, not a menu. | The message says: Tomorrow at 10 a.m., let's meet in front of City Hall. Confirm the day and time first. |  |
| t2 | Yes. Where are we meeting? (對。我們在哪裡見？) | In front of City Hall. (在市政廳前面。) | 1. Inside City Hall. (在市政廳裡面。) [wrong_place_relation] - feedback: The message says in front of City Hall, not inside it.<br>2. I am going to rest at home. (我打算在家休息。) [wrong_function_plan] - feedback: This says your own plan. It does not confirm the meeting place. | The place in the message is in front of City Hall. | in front of + place<br>Use in front of to say the meeting point is outside and before a place.<br>in front of City Hall = 在市政廳前面<br>in front of the cafe = 在咖啡店前面 |
| t3 | If I am late, I will message you. (如果我晚到，我會傳訊息給你。) | Okay, I understand. (好，我知道了。) | 1. Okay, I am late. (好，我遲到了。) [wrong_subject_status] - feedback: Your friend is talking about themselves, not saying you are late.<br>2. If the bus is late, I will call. (如果公車晚了，我會打電話。) [wrong_focus_self_delay] - feedback: This changes the focus to your own possible delay. Just acknowledge your friend. | Your friend is only saying what they will do if they are late. A short reply is enough. |  |
| t4 | Great. See you tomorrow. (太好了。明天見。) | Yes, see you tomorrow. (好，明天見。) | 1. Yes, see you yesterday. (好，昨天見。) [wrong_time_expression] - feedback: See you yesterday is not natural. Use see you tomorrow.<br>2. Can I have the bill? (可以給我帳單嗎？) [wrong_scenario_payment] - feedback: This is a payment sentence. Here you are only closing the plan. | The details are clear now. Close naturally. |  |

---

## a2:en:a2_decline_with_reason - Decline with a Simple Reason

- Level: A2
- Language: English (en)
- Scenario ID: a2_decline_with_reason
- Setting: message with a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Decline a friend invitation politely with one simple reason.
- Support text: Decline a friend invitation gently with a short, ordinary reason.

### Clean Dialogue Path

- friend: Do you want to see a movie tonight? (今晚要看電影嗎？)
- 你: Sorry, I can’t tonight. (不好意思，我今晚不行。)
- friend: No problem. Are you busy? (沒關係。你很忙嗎？)
- 你: Yes, I still have some work to do. (對，我還有一點事要做。)
- friend: Maybe another day? (也許改天？)
- 你: Yes, maybe this weekend. (好，也許這個週末。)
- friend: Okay. Let’s talk this weekend. (好，那週末再說。)
- 你: Thanks. See you this weekend. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Do you want to see a movie tonight? (今晚要看電影嗎？) | Sorry, I can’t tonight. (不好意思，我今晚不行。) | 1. No, I don’t want to. (不要，我不想。) [too_blunt] - feedback: That sounds too cold for a friend.<br>2. Please give me the receipt again. (請再給我收據。) [wrong_scenario_shop] - feedback: That is a shop situation. | Start a soft refusal. |  |
| t2 | No problem. Are you busy? (沒關係。你很忙嗎？) | Yes, I still have some work to do. (對，我還有一點事要做。) | 1. There was a serious emergency. (發生了嚴重緊急事件。) [too_heavy_or_sensitive] - feedback: That is too heavy for this A2 social task.<br>2. The movie was good yesterday. (昨天的電影很好看。) [wrong_time_or_function] - feedback: That does not explain why you cannot go tonight. | Give one ordinary reason. |  |
| t3 | Maybe another day? (也許改天？) | Yes, maybe this weekend. (好，也許這個週末。) | 1. No, don’t ask me again. (不要，不要再問我。) [too_cold] - feedback: That is too harsh for this friend context.<br>2. Yes, I will change rooms. (好，我會換房間。) [wrong_scenario_hotel] - feedback: This is not a hotel task. | Keep the relationship warm. |  |
| t4 | Okay. Let’s talk this weekend. (好，那週末再說。) | Thanks. See you this weekend. (謝謝，週末見。) | 1. I’ll pay right now. (我現在會付款。) [wrong_scenario_payment] - feedback: This is not a payment situation.<br>2. Then I will definitely go tonight. (那我今晚一定會去。) [contradicts_decline] - feedback: You already said you cannot go tonight. | Thank your friend and close warmly. |  |

---

## a2:en:a2_describe_weekend_activity - Describe a Weekend Activity

- Level: A2
- Language: English (en)
- Scenario ID: a2_describe_weekend_activity
- Setting: Monday chat with a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Describe one or two simple things you did on the weekend.
- Support text: Tell a friend what you did on the weekend with one or two short details.

### Clean Dialogue Path

- friend: What did you do on the weekend? (週末做了什麼？)
- 你: I met a friend and had lunch. (我見了朋友，也吃了午餐。)
- friend: Where did you meet? (你們在哪裡見面？)
- 你: We met at a cafe near my home. (我們在我家附近的咖啡店見。)
- friend: Was it nice? (還不錯嗎？)
- 你: Yes, it was quiet and nice. (嗯，很安靜，也很好。)
- friend: Sounds nice. Maybe I can join next time. (聽起來不錯。也許下次我可以一起去。)
- 你: Sure, let’s go together next time. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What did you do on the weekend? (週末做了什麼？) | I met a friend and had lunch. (我見了朋友，也吃了午餐。) | 1. I will meet a friend tomorrow. (我明天會見朋友。) [wrong_time_future] - feedback: Your friend asked about the past weekend.<br>2. Which platform should I go to? (我該去哪個月台？) [wrong_scenario_transport] - feedback: This is not a transport question. | Say one thing you did. |  |
| t2 | Where did you meet? (你們在哪裡見面？) | We met at a cafe near my home. (我們在我家附近的咖啡店見。) | 1. Should we meet at a cafe? (我們要在咖啡店見嗎？) [wrong_function_invite] - feedback: You are talking about a past activity.<br>2. The room was too cold. (房間太冷了。) [wrong_scenario_hotel] - feedback: This is not a hotel problem. | Answer with a simple place. |  |
| t3 | Was it nice? (還不錯嗎？) | Yes, it was quiet and nice. (嗯，很安靜，也很好。) | 1. It made me think about society. (那讓我思考社會。) [too_advanced_or_abstract] - feedback: That is too abstract for this A2 exchange.<br>2. No, I want a refund. (不，我想退款。) [wrong_scenario_refund] - feedback: This is not a refund situation. | Give one short feeling. |  |
| t4 | Sounds nice. Maybe I can join next time. (聽起來不錯。也許下次我可以一起去。) | Sure, let’s go together next time. (好，下次一起去。) | 1. Get off at the next station. (下一站下車。) [wrong_scenario_transport] - feedback: That is transport advice.<br>2. I will show my ID. (我會出示身分證。) [wrong_scenario_document] - feedback: This is not a document task. | Respond naturally. |  |

---

## a2:en:a2_exchange_wrong_item - Exchange a Wrong Item

- Level: A2
- Language: English (en)
- Scenario ID: a2_exchange_wrong_item
- Setting: shop counter
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Politely explain that you received the wrong item and ask for the correct one.
- Support text: Politely explain that you received the wrong item and ask for the correct one.

### Clean Dialogue Path

- staff member: Can I help you? (需要幫忙嗎？)
- 你: I ordered a small cup, but I got a large cup. (我訂的是小杯，但拿到大杯。)
- staff member: Let me check. Could I see the receipt? (我確認一下。可以看收據嗎？)
- 你: Yes, here is the receipt. (可以，這是收據。)
- staff member: You’re right. I can exchange it for a small cup now. (您說得對。我現在可以換成小杯。)
- 你: You’ll exchange it for a small cup, right? (您會幫我換成小杯，對嗎？)
- staff member: Yes, please wait a moment. (好的，請稍等。)
- 你: Thank you. I’ll wait here. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Can I help you? (需要幫忙嗎？) | I ordered a small cup, but I got a large cup. (我訂的是小杯，但拿到大杯。) | 1. Where is the small cup made? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: Manufacturing place is not the issue.<br>2. Please lower the price. (請降價。) [forbidden_or_wrong_domain] - feedback: Price bargaining is outside this task. | Explain that the received item is different. |  |
| t2 | Let me check. Could I see the receipt? (我確認一下。可以看收據嗎？) | Yes, here is the receipt. (可以，這是收據。) | 1. Yes, here is my passport. (可以，這是護照。) [wrong_detail_or_domain] - feedback: A passport is not needed.<br>2. Yes, I’ll take the train tomorrow. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: This switches to transportation. | Respond to the simple receipt check. |  |
| t3 | You’re right. I can exchange it for a small cup now. (您說得對。我現在可以換成小杯。) | You’ll exchange it for a small cup, right? (您會幫我換成小杯，對嗎？) | 1. Please explain the refund rules. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Refund rules are too broad here.<br>2. I’ll report this to the police. (我要報警。) [forbidden_or_wrong_domain] - feedback: This is too serious for this task. | Confirm the replacement. |  |
| t4 | Yes, please wait a moment. (好的，請稍等。) | Thank you. I’ll wait here. (謝謝，我在這裡等。) | 1. I need to go to the hospital. (我需要去醫院。) [wrong_detail_or_domain] - feedback: This is not a medical situation.<br>2. I want to change rooms. (我想換房。) [forbidden_or_wrong_domain] - feedback: This switches to a hotel situation. | Close by agreeing to wait. |  |

---

## a2:en:a2_explain_simple_delay_reason - Explain a Small Delay

- Level: A2
- Language: English (en)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: On the way to meet a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You are running a little late and need to explain the reason.
- Learner goal: Apologize, give one simple reason, and estimate the delay.
- Support text: Your friend asks where you are. Say you are sorry, explain the simple reason, and give a short time estimate.

### Clean Dialogue Path

- Friend: Where are you? Are you close? (你在哪裡？快到了嗎？)
- You: Sorry, I am going to be a little late. (不好意思，我會晚一點。)
- Friend: Why? What happened? (為什麼？怎麼了？)
- You: The bus is late. (公車晚了。)
- Friend: How late will you be? (你會晚多久？)
- You: I will be about ten minutes late. (我會晚大約十分鐘。)
- Friend: Okay. Take your time. (好。慢慢來。)
- You: Thanks. I will be there soon. (謝謝。我很快就到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Where are you? Are you close? (你在哪裡？快到了嗎？) | Sorry, I am going to be a little late. (不好意思，我會晚一點。) | 1. Yes, I arrived yesterday. (對，我昨天到了。) [wrong_time_past] - feedback: Your friend asks about now, not yesterday.<br>2. Can you recommend a menu item? (你可以推薦一道菜嗎？) [wrong_scenario_restaurant] - feedback: This is restaurant language. Here you need to explain that you are late. | Your friend is checking where you are. Start with sorry and say you will be a little late. |  |
| t2 | Why? What happened? (為什麼？怎麼了？) | The bus is late. (公車晚了。) | 1. I like the bus. (我喜歡公車。) [wrong_reason_semantics] - feedback: This does not explain why you are late.<br>2. Where is the bus stop? (公車站在哪裡？) [wrong_function_location_question] - feedback: Your friend asks for the reason, not for a location. | Give one simple everyday reason. Keep it short. | because + reason<br>Use because to give a simple reason.<br>because the bus is late = 因為公車晚了<br>because there is traffic = 因為塞車 |
| t3 | How late will you be? (你會晚多久？) | I will be about ten minutes late. (我會晚大約十分鐘。) | 1. Bus number ten is good. (十號公車很好。) [wrong_entity_bus_number] - feedback: Ten here should be minutes, not a bus number.<br>2. I am not late. (我沒有遲到。) [contradicts_context] - feedback: You already said you will be late. Now estimate the time. | Use about plus minutes for a simple estimate. |  |
| t4 | Okay. Take your time. (好。慢慢來。) | Thanks. I will be there soon. (謝謝。我很快就到。) | 1. I have a reservation. (我有預約。) [wrong_scenario_reservation] - feedback: This sounds like a hotel or restaurant situation, not a delay message.<br>2. Can I pay now? (我現在可以付款嗎？) [wrong_scenario_payment] - feedback: This is a payment sentence. A simple thanks is better here. | Your friend accepts the delay. Say thanks and close naturally. |  |

---

## a2:en:a2_fill_simple_form_help - Get Help with a Simple Form

- Level: A2
- Language: English (en)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Handle a low-risk digital or simple document-help task in short A2 turns.
- Support text: Keep the task low-risk. Do not give passwords, payment details, sensitive ID, or legal/medical information.

### Clean Dialogue Path

- staff: Please fill in this form first. (請先填這張表。)
- 你: What should I write in this box? (這一欄要填什麼？)
- staff: Please write your name here. (這裡請填姓名。)
- 你: Just my name? (只填姓名就可以嗎？)
- staff: Yes, the phone number goes below. (對，電話在下面那一欄。)
- 你: Okay, I will write it below. (知道了，我會寫在下面。)
- staff: Yes, that is enough. (對，這樣就夠了。)
- 你: Thanks. I finished it. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Please fill in this form first. (請先填這張表。) | What should I write in this box? (這一欄要填什麼？) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t2 | Please write your name here. (這裡請填姓名。) | Just my name? (只填姓名就可以嗎？) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t3 | Yes, the phone number goes below. (對，電話在下面那一欄。) | Okay, I will write it below. (知道了，我會寫在下面。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t4 | Yes, that is enough. (對，這樣就夠了。) | Thanks. I finished it. (謝謝，我填好了。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |

---

## a2:en:a2_invite_friend_activity - Invite a Friend to an Activity

- Level: A2
- Language: English (en)
- Scenario ID: a2_invite_friend_activity
- Setting: chat with a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Invite a friend to an ordinary activity and confirm a simple time and place.
- Support text: Invite a friend to a simple activity like coffee or a walk, then confirm the plan.

### Clean Dialogue Path

- friend: Do you want to get coffee later? (等一下要一起喝咖啡嗎？)
- 你: Do you want to get coffee later? (等一下要一起喝咖啡嗎？)
- friend: Sure. What time works? (好啊。什麼時間可以？)
- 你: How about three o’clock? (三點怎麼樣？)
- friend: Should we meet in front of the station? (要在車站前面見嗎？)
- 你: Yes, let’s meet in front of the station. (好，我們在車站前面見。)
- friend: Great. See you later. (很好。等一下見。)
- 你: Great. See you later. (很好。等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Do you want to get coffee later? (等一下要一起喝咖啡嗎？) | Do you want to get coffee later? (等一下要一起喝咖啡嗎？) | 1. Please change my room later. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: That is a service request, not a friend invitation.<br>2. You have to come with me today. (你今天一定要跟我來。) [too_pressuring] - feedback: That sounds too forceful for a friend invitation. | Invite your friend to a simple activity. |  |
| t2 | Sure. What time works? (好啊。什麼時間可以？) | How about three o’clock? (三點怎麼樣？) | 1. I went at three yesterday. (我昨天三點去了。) [wrong_time_past] - feedback: You are setting a future plan now.<br>2. How much is it? (多少錢？) [wrong_function_price] - feedback: This is not a price question. | Suggest a simple time. |  |
| t3 | Should we meet in front of the station? (要在車站前面見嗎？) | Yes, let’s meet in front of the station. (好，我們在車站前面見。) | 1. Yes, let’s change trains. (好，我們換車。) [wrong_scenario_transport] - feedback: This is not a transfer plan.<br>2. No, I want a refund. (不，我想退款。) [wrong_scenario_refund] - feedback: Refunds are outside this friend plan. | Confirm the meeting place. |  |
| t4 | Great. See you later. (很好。等一下見。) | Great. See you later. (很好。等一下見。) | 1. I need to cancel my booking. (我要取消預約。) [wrong_register_service] - feedback: That sounds like a booking task, not a friend plan.<br>2. That is too expensive. (那太貴了。) [wrong_detail_price] - feedback: No price was discussed. | Close the plan warmly. |  |

---

## a2:en:a2_lost_item_followup_message - Follow Up About a Lost Item

- Level: A2
- Language: English (en)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Handle a low-risk digital or simple document-help task in short A2 turns.
- Support text: Keep the task low-risk. Do not give passwords, payment details, sensitive ID, or legal/medical information.

### Clean Dialogue Path

- staff: What item are you looking for? (您在找什麼？)
- 你: I think I left a black umbrella. (我好像把黑色雨傘忘在那裡。)
- staff: Where did you leave it? (放在哪裡？)
- 你: I think it was next to a cafe chair. (好像放在咖啡店椅子旁邊。)
- staff: Please leave your name and contact number. (請留下姓名和聯絡方式。)
- 你: Okay, I will leave my name and phone number. (好，我會留下姓名和電話。)
- staff: We will check and contact you. (我確認後會聯絡您。)
- 你: Thank you. I will wait for your message. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What item are you looking for? (您在找什麼？) | I think I left a black umbrella. (我好像把黑色雨傘忘在那裡。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t2 | Where did you leave it? (放在哪裡？) | I think it was next to a cafe chair. (好像放在咖啡店椅子旁邊。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t3 | Please leave your name and contact number. (請留下姓名和聯絡方式。) | Okay, I will leave my name and phone number. (好，我會留下姓名和電話。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |
| t4 | We will check and contact you. (我確認後會聯絡您。) | Thank you. I will wait for your message. (謝謝，我等您聯絡。) | 1. I will tell you my password. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Sensitive password information is outside this A2 task.<br>2. Please refund me. (請退款。) [wrong_dispute_domain] - feedback: Refunds or disputes are outside this task. | Check only the needed low-risk detail. |  |

---

## a2:en:a2_luggage_storage_pickup - Store Luggage and Pick It Up

- Level: A2
- Language: English (en)
- Scenario ID: a2_luggage_storage_pickup
- Setting: At a station luggage counter
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You want to store a bag at a station and pick it up later.
- Learner goal: Ask to store luggage, understand the pickup time, and confirm a simple receipt number.
- Support text: Ask to store your bag. Listen for the pickup time and keep the receipt number.

### Clean Dialogue Path

- Storage Staff: Hello. Do you want to store a bag? (你好。你想寄放一個包包嗎？)
- You: Yes, can I store this bag here? (是的，我可以把這個包包寄放在這裡嗎？)
- Storage Staff: Yes. Please pick it up by six o'clock. (可以。請在六點以前取回。)
- You: Okay, I will pick it up by six. (好的，我會在六點以前取回。)
- Storage Staff: Here is your receipt. The number is twenty-four. (這是你的收據。號碼是二十四。)
- You: Receipt number twenty-four. Thank you. (收據號碼二十四。謝謝。)
- Storage Staff: Great. Bring the receipt when you come back. (很好。回來時帶著收據。)
- You: Okay, I will bring the receipt. (好的，我會帶收據。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hello. Do you want to store a bag? (你好。你想寄放一個包包嗎？) | Yes, can I store this bag here? (是的，我可以把這個包包寄放在這裡嗎？) | 1. Yes, can I eat this bag here? (是的，我可以在這裡吃這個包包嗎？) [wrong_verb] - feedback: Use store for keeping a bag somewhere. Eat does not fit.<br>2. Yes, can I change my ticket time? (是的，我可以改票的時間嗎？) [wrong_scenario_ticket] - feedback: This is ticket language. Here you need to ask about luggage storage. | Ask to store your luggage here. |  |
| t2 | Yes. Please pick it up by six o'clock. (可以。請在六點以前取回。) | Okay, I will pick it up by six. (好的，我會在六點以前取回。) | 1. Okay, I will pick it up at sixteen. (好的，我會在十六點取回。) [wrong_time_number] - feedback: The staff said by six o'clock. Keep the time simple: by six.<br>2. Okay, I will take platform six. (好的，我會搭六號月台。) [wrong_entity_platform] - feedback: Six is the pickup time, not a platform. | Confirm the pickup time. | pick it up by + time<br>Use pick it up by to say the latest pickup time.<br>pick it up by six o'clock = 六點以前取回<br>pick it up by noon = 中午以前取回 |
| t3 | Here is your receipt. The number is twenty-four. (這是你的收據。號碼是二十四。) | Receipt number twenty-four. Thank you. (收據號碼二十四。謝謝。) | 1. Room number twenty-four. Thank you. (房間號碼二十四。謝謝。) [wrong_entity_room] - feedback: This is a receipt number, not a room number.<br>2. I lost my receipt. (我弄丟了收據。) [forbidden_lost_property] - feedback: Lost receipt handling is outside this practice. Just confirm the number. | Repeat the receipt number so you remember it. |  |
| t4 | Great. Bring the receipt when you come back. (很好。回來時帶著收據。) | Okay, I will bring the receipt. (好的，我會帶收據。) | 1. Okay, I will bring my passport. (好的，我會帶護照。) [forbidden_identity_document] - feedback: Passport or ID handling is outside this practice. Bring the receipt.<br>2. Okay, please pay me for the bag. (好的，請為這個包包付錢給我。) [forbidden_compensation] - feedback: Payment or compensation is outside this practice. Just confirm the receipt. | Confirm what you will bring and close politely. |  |

---

## a2:en:a2_make_simple_plan_sequence - Make a Simple Two-Step Plan

- Level: A2
- Language: English (en)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: weekend plan call
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Make a two-step plan with a friend and confirm the order.
- Support text: Plan two simple steps with a friend: first one thing, then another.

### Clean Dialogue Path

- friend: Should we meet at the station first? (我們先在車站見嗎？)
- 你: Yes, let’s meet at the station first. (好，我們先在車站見。)
- friend: Then should we walk to the park? (接著要走去公園嗎？)
- 你: Good. Then let’s walk to the park. (好，接著走去公園。)
- friend: So, station first, then the park? (所以先車站，接著公園？)
- 你: Yes, station first, then the park. (對，先車站，接著公園。)
- friend: Great. Let’s meet at two on Saturday. (很好。星期六兩點見。)
- 你: Okay, see you at two on Saturday. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Should we meet at the station first? (我們先在車站見嗎？) | Yes, let’s meet at the station first. (好，我們先在車站見。) | 1. Yes, please refund me first. (好，請先退款給我。) [wrong_scenario_refund] - feedback: This is a friend plan, not a refund task.<br>2. No, absolutely not. (不，絕對不要。) [too_blunt] - feedback: That sounds too harsh for planning with a friend. | Confirm the first step. |  |
| t2 | Then should we walk to the park? (接著要走去公園嗎？) | Good. Then let’s walk to the park. (好，接著走去公園。) | 1. I went to the park yesterday. (我昨天去了公園。) [wrong_time_past] - feedback: You are planning for this weekend.<br>2. I will pick up luggage at the airport. (我會在機場取行李。) [wrong_scenario_transport] - feedback: This is not a luggage task. | Confirm the second step. |  |
| t3 | So, station first, then the park? (所以先車站，接著公園？) | Yes, station first, then the park. (對，先車站，接著公園。) | 1. Yes, airport first, then the hotel. (對，先機場，接著飯店。) [wrong_details] - feedback: The places changed.<br>2. No, we need three more places. (不，我們還需要三個地方。) [too_complex] - feedback: This task only uses a two-step plan. | Restate the order. |  |
| t4 | Great. Let’s meet at two on Saturday. (很好。星期六兩點見。) | Okay, see you at two on Saturday. (好，星期六兩點見。) | 1. Okay, I saw you this morning. (好，我今天早上見過你。) [wrong_time_past] - feedback: You need to confirm a future meeting.<br>2. Okay, I will ask a doctor. (好，我會問醫生。) [forbidden_or_wrong_domain] - feedback: This is not a medical situation. | Confirm the time and close. |  |

---

## a2:en:a2_plan_tomorrow_morning - Plan Tomorrow Morning

- Level: A2
- Language: English (en)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Chat with a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A friend asks what you plan to do tomorrow morning.
- Learner goal: Say a near-future plan with one simple next step.
- Support text: Your friend asks about tomorrow morning. Say what you are going to do first, then add one next step.

### Clean Dialogue Path

- Friend: What are you going to do tomorrow morning? (你明天早上打算做什麼？)
- You: I am going to go to the bank. (我打算去銀行。)
- Friend: What will you do after that? (那之後你要做什麼？)
- You: Then I am going to study at a cafe. (接著我打算在咖啡店讀書。)
- Friend: So are you free before lunch? (所以你午餐前有空嗎？)
- You: Yes, I am free around eleven. (可以，我十一點左右有空。)
- Friend: Great. I will message you at eleven. (太好了。我十一點傳訊息給你。)
- You: Okay, see you tomorrow. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | What are you going to do tomorrow morning? (你明天早上打算做什麼？) | I am going to go to the bank. (我打算去銀行。) | 1. I went to the bank yesterday. (我昨天去了銀行。) [wrong_time_past] - feedback: Your friend asks about tomorrow morning, not yesterday.<br>2. Where is the bank? (銀行在哪裡？) [wrong_function_location_question] - feedback: This asks for a place. It does not say your plan. | The question is about tomorrow morning. Use going to for a simple plan. |  |
| t2 | What will you do after that? (那之後你要做什麼？) | Then I am going to study at a cafe. (接著我打算在咖啡店讀書。) | 1. Let's meet at the cafe. (我們在咖啡店見吧。) [wrong_function_meeting_place] - feedback: This suggests a meeting place. Your friend asked about your next activity.<br>2. I am studying now. (我現在正在讀書。) [wrong_time_aspect] - feedback: This is about now. Your friend asks about the next step tomorrow. | After that asks for the next step. Answer with then or after that. | going to + verb<br>Use going to for a plan. Use then to add the next step.<br>I am going to go. = 我打算去。<br>Then I will study. = 接著我會讀書。 |
| t3 | So are you free before lunch? (所以你午餐前有空嗎？) | Yes, I am free around eleven. (可以，我十一點左右有空。) | 1. No, I was free yesterday. (不，我昨天有空。) [wrong_time_past] - feedback: The question is about tomorrow before lunch, not yesterday.<br>2. Does the bank close at eleven? (銀行十一點關門嗎？) [wrong_focus_bank_hours] - feedback: Your friend is asking when you are free. | Before lunch means late morning. You can say around plus a time. |  |
| t4 | Great. I will message you at eleven. (太好了。我十一點傳訊息給你。) | Okay, see you tomorrow. (好，明天見。) | 1. I will order it again. (我會再點一次。) [wrong_scenario_ordering] - feedback: This sounds like ordering food or a product. Here you are confirming tomorrow.<br>2. I want to change rooms. (我想換房間。) [wrong_scenario_hotel] - feedback: This is a hotel sentence. A short goodbye is enough here. | The plan is clear now. Close with a short friendly answer. |  |

---

## a2:en:a2_report_room_problem - Report a Room Problem

- Level: A2
- Language: English (en)
- Scenario ID: a2_report_room_problem
- Setting: At the hotel front desk
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Report a small room problem and confirm what the hotel staff will do next.

### Clean Dialogue Path

- Hotel Staff: Hello. How can I help you? (您好，我可以怎麼幫您？)
- You: There are no towels in my room. Could you help? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Hotel Staff: Yes, I will bring towels right away. (好的，我馬上拿毛巾過去。)
- You: You will bring towels, right? (您會拿毛巾過來，對嗎？)
- Hotel Staff: It will take about ten minutes. (大約需要十分鐘。)
- You: About ten minutes, okay. (大約十分鐘，好的。)
- Hotel Staff: I will send them to your room. (我會送到您的房間。)
- You: Thank you. I will wait in my room. (謝謝。我會在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hello. How can I help you? (您好，我可以怎麼幫您？) | There are no towels in my room. Could you help? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. I want to book a room. (我想訂房。) [wrong_detail_or_domain] - feedback: You need to report a room problem, not make a booking.<br>2. Please compensate me. (請賠償我。) [forbidden_or_wrong_domain] - feedback: Compensation is outside this A2 task. | Say the room problem briefly. |  |
| t2 | Yes, I will bring towels right away. (好的，我馬上拿毛巾過去。) | You will bring towels, right? (您會拿毛巾過來，對嗎？) | 1. You will change my room, right? (您會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: The staff said towels, not a room change.<br>2. The train is delayed, right? (是火車延誤，對嗎？) [forbidden_or_wrong_domain] - feedback: This is a hotel service situation, not transport. | Confirm what the staff will do. | A2 pattern<br>A useful pattern for this accommodation situation.<br>bring towels = 拿毛巾 |
| t3 | It will take about ten minutes. (大約需要十分鐘。) | About ten minutes, okay. (大約十分鐘，好的。) | 1. I check out in one hour. (我一小時後退房。) [wrong_detail_or_domain] - feedback: This is about towel delivery time, not checkout.<br>2. I need to go to the hospital. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: Medical content is outside this task. | Confirm the time estimate. |  |
| t4 | I will send them to your room. (我會送到您的房間。) | Thank you. I will wait in my room. (謝謝。我會在房間等。) | 1. Please explain the refund rules. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Refund rules are outside this simple room problem task.<br>2. Two coffees, please. (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: That is a restaurant order, not hotel room service. | Thank them and close. |  |

---

## a2:en:a2_request_room_change - Request a Room Change

- Level: A2
- Language: English (en)
- Scenario ID: a2_request_room_change
- Setting: At the hotel front desk
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Give one simple reason and ask whether you can change rooms.

### Clean Dialogue Path

- Hotel Staff: How can I help? (我可以怎麼幫忙？)
- You: My room is a little noisy. Can I change rooms? (我的房間有點吵。可以換房嗎？)
- Hotel Staff: I checked. We have one other room. (我確認了，有另一間房。)
- You: There is one other room, right? (有另一間房，對嗎？)
- Hotel Staff: You can move to the new room in thirty minutes. (三十分鐘後可以搬到新房間。)
- You: I can move in thirty minutes, right? (三十分鐘後可以搬，對嗎？)
- Hotel Staff: When it is ready, I will give you the new key card. (準備好後，我會給您新房卡。)
- You: Okay. I will take the new key when it is ready. (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | How can I help? (我可以怎麼幫忙？) | My room is a little noisy. Can I change rooms? (我的房間有點吵。可以換房嗎？) | 1. Can I change my restaurant table? (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: This is about a hotel room, not a restaurant table.<br>2. I will make an official report. (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: Formal reporting is outside this A2 task. | Ask for a room change with one reason. |  |
| t2 | I checked. We have one other room. (我確認了，有另一間房。) | There is one other room, right? (有另一間房，對嗎？) | 1. There is one other ticket, right? (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: This is a room, not a ticket.<br>2. Can I also get compensation? (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: Compensation is outside this simple room-change task. | Listen for the alternative. | A2 pattern<br>A useful pattern for this accommodation situation.<br>another room = 另一間房 |
| t3 | You can move to the new room in thirty minutes. (三十分鐘後可以搬到新房間。) | I can move in thirty minutes, right? (三十分鐘後可以搬，對嗎？) | 1. I check out in three hours, right? (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: The staff said you can move in thirty minutes.<br>2. I will move because I need a hospital. (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: Medical reasons are outside this task. | Confirm the move time. |  |
| t4 | When it is ready, I will give you the new key card. (準備好後，我會給您新房卡。) | Okay. I will take the new key when it is ready. (好，準備好後我拿新房卡。) | 1. No, I will change my train time. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: This is room change, not transport.<br>2. I will tell the police now. (我現在會告訴警察。) [forbidden_or_wrong_domain] - feedback: Police workflows are outside this task. | Accept and close. |  |

---

## a2:en:a2_reschedule_meeting_time - Change a Meeting Time

- Level: A2
- Language: English (en)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Changing plans with a friend
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You need to ask a friend to move a meeting time.
- Learner goal: Ask to change a time and confirm the new time.
- Support text: The original meeting time is hard for you. Ask to change it, give a new time, and confirm.

### Clean Dialogue Path

- Friend: We are meeting at three today, right? (我們今天三點見，對吧？)
- You: Sorry, can we change the time? (不好意思，我們可以改時間嗎？)
- Friend: Sure. What time works for you? (可以。你幾點方便？)
- You: Can we move it to four? (我們可以改到四點嗎？)
- Friend: Yes, four is fine. (可以，四點沒問題。)
- You: Great, see you at four. (太好了，四點見。)
- Friend: Okay. See you later. (好，晚點見。)
- You: Okay, see you later. (好，晚點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | We are meeting at three today, right? (我們今天三點見，對吧？) | Sorry, can we change the time? (不好意思，我們可以改時間嗎？) | 1. Yes, we met yesterday. (對，我們昨天見過了。) [wrong_time_past] - feedback: Your friend is confirming today's plan, not yesterday.<br>2. I will pay by card. (我會用卡付款。) [wrong_scenario_payment] - feedback: This is payment language. Here you need to ask about the meeting time. | Your friend is checking the old time. Ask to change the time. |  |
| t2 | Sure. What time works for you? (可以。你幾點方便？) | Can we move it to four? (我們可以改到四點嗎？) | 1. Should we use exit four? (我們要用四號出口嗎？) [wrong_entity_exit_number] - feedback: Exit four is a place detail. Your friend asked for a new time.<br>2. I went at four. (我四點去了。) [wrong_time_past] - feedback: This talks about the past. Ask to move the meeting to four. | Give one new time. Keep it simple. | move it to + time<br>Use move it to for changing a meeting time.<br>move it to four = 改到四點<br>move it to tomorrow = 改到明天 |
| t3 | Yes, four is fine. (可以，四點沒問題。) | Great, see you at four. (太好了，四點見。) | 1. Great, see you at three. (太好了，三點見。) [repeats_old_time] - feedback: The old time was three. You changed it to four.<br>2. Please give me the room key. (請給我房卡。) [wrong_scenario_hotel] - feedback: This is hotel language. Here you need to confirm the new time. | The new time is accepted. Confirm it once. |  |
| t4 | Okay. See you later. (好，晚點見。) | Okay, see you later. (好，晚點見。) | 1. Because I am late. (因為我遲到了。) [fragment_without_need] - feedback: The time is already changed. You do not need a reason fragment now.<br>2. I booked it again. (我重新預約了。) [wrong_scenario_reservation] - feedback: This sounds like a reservation system, not a simple plan with a friend. | The plan is finished. Close naturally. |  |

---

## a2:en:a2_transport_delay_announcement - Understand a Delay Announcement

- Level: A2
- Language: English (en)
- Scenario ID: a2_transport_delay_announcement
- Setting: At a train platform
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You hear a short train delay announcement and need to decide what to do.
- Learner goal: Understand the delay time, ask a simple follow-up, and choose to wait or use another option.
- Support text: Listen for the delay time. Confirm how long it is, then choose a simple next step.

### Clean Dialogue Path

- Station Staff: Attention, please. The train to Central is delayed by fifteen minutes. (請注意。前往 Central 的火車延誤十五分鐘。)
- You: It is delayed by fifteen minutes, right? (它延誤十五分鐘，對吧？)
- Station Staff: Yes, about fifteen minutes. (對，大約十五分鐘。)
- You: Is there another train soon? (很快會有另一班火車嗎？)
- Station Staff: There is a bus outside, or you can wait here for the train. (外面有公車，或者你可以在這裡等火車。)
- You: I will wait here for the train. (我會在這裡等火車。)
- Station Staff: Okay. Please wait near this platform. (好的。請在這個月台附近等候。)
- You: Okay, thank you. (好的，謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Attention, please. The train to Central is delayed by fifteen minutes. (請注意。前往 Central 的火車延誤十五分鐘。) | It is delayed by fifteen minutes, right? (它延誤十五分鐘，對吧？) | 1. It leaves in five minutes, right? (它五分鐘後出發，對吧？) [wrong_duration] - feedback: The announcement says delayed by fifteen minutes, not leaving in five.<br>2. Can I change my seat? (我可以換座位嗎？) [wrong_scenario_seat] - feedback: This asks about a seat. Here you need to confirm the delay time. | The announcement says the delay is fifteen minutes. Confirm that time. |  |
| t2 | Yes, about fifteen minutes. (對，大約十五分鐘。) | Is there another train soon? (很快會有另一班火車嗎？) | 1. Is there another ticket yesterday? (昨天有另一張票嗎？) [wrong_time_expression] - feedback: Yesterday does not fit. Ask about another train soon.<br>2. I need a hotel room. (我需要一間飯店房間。) [wrong_scenario_hotel] - feedback: This is hotel language. Here you are asking about transport. | Ask if there is another simple option. | delayed by + minutes<br>Use delayed by to say how long the transport is late.<br>delayed by fifteen minutes = 延誤十五分鐘<br>delayed by ten minutes = 延誤十分鐘 |
| t3 | There is a bus outside, or you can wait here for the train. (外面有公車，或者你可以在這裡等火車。) | I will wait here for the train. (我會在這裡等火車。) | 1. I waited here yesterday. (我昨天在這裡等過。) [wrong_time_past] - feedback: You need to choose what to do now, not talk about yesterday.<br>2. Please cancel my dinner. (請取消我的晚餐。) [wrong_scenario_restaurant] - feedback: This is not a restaurant situation. Choose a transport option. | Choose one simple action. Waiting is fine. |  |
| t4 | Okay. Please wait near this platform. (好的。請在這個月台附近等候。) | Okay, thank you. (好的，謝謝。) | 1. Okay, I need a refund. (好的，我需要退款。) [forbidden_refund] - feedback: Refund language is outside this practice. A simple thank you is enough.<br>2. Okay, I am the driver. (好的，我是司機。) [wrong_role] - feedback: You are a passenger. Just close politely. | The choice is clear. Close politely. |  |

---

## a2:en:a2_understand_hotel_notice - Understand a Hotel Notice

- Level: A2
- Language: English (en)
- Scenario ID: a2_understand_hotel_notice
- Setting: In the hotel lobby
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Understand a short hotel notice and confirm the time, place, and rule.

### Clean Dialogue Path

- Hotel Staff: Please look at the notice. Breakfast is from seven to nine in the morning. (請看公告。早餐是早上七點到九點。)
- You: Breakfast is from seven to nine in the morning, right? (早餐是早上七點到九點，對嗎？)
- Hotel Staff: It is in the restaurant on the second floor. (地點是二樓餐廳。)
- You: I go to the second-floor restaurant, right? (去二樓餐廳就可以，對嗎？)
- Hotel Staff: At the entrance, please just say your room number. (入口只要告知房號即可。)
- You: I just say my room number at the entrance, right? (入口只要說房號就可以，對嗎？)
- Hotel Staff: Yes, please come tomorrow morning. (對，明天早上來就可以。)
- You: Okay. I will go to the second-floor restaurant tomorrow morning. (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Please look at the notice. Breakfast is from seven to nine in the morning. (請看公告。早餐是早上七點到九點。) | Breakfast is from seven to nine in the morning, right? (早餐是早上七點到九點，對嗎？) | 1. Breakfast is from seven to nine at night, right? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: The notice says in the morning.<br>2. Checkout is at nine in the morning, right? (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: This notice is about breakfast, not checkout. | Find the time in the notice. |  |
| t2 | It is in the restaurant on the second floor. (地點是二樓餐廳。) | I go to the second-floor restaurant, right? (去二樓餐廳就可以，對嗎？) | 1. I go to a third-floor room, right? (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: The place is the restaurant on the second floor.<br>2. I show my passport, right? (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: A passport is not needed for this notice. | Confirm the place. | A2 pattern<br>A useful pattern for this accommodation situation.<br>second-floor restaurant = 二樓餐廳 |
| t3 | At the entrance, please just say your room number. (入口只要告知房號即可。) | I just say my room number at the entrance, right? (入口只要說房號就可以，對嗎？) | 1. I talk to the police at the entrance, right? (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: This is a breakfast notice, not a police process.<br>2. I get a refund at the entrance, right? (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Refunds do not fit this notice task. | Confirm the simple condition. |  |
| t4 | Yes, please come tomorrow morning. (對，明天早上來就可以。) | Okay. I will go to the second-floor restaurant tomorrow morning. (好，我明天早上去二樓餐廳。) | 1. Okay. I will pick up laundry tonight. (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: This is breakfast, not laundry.<br>2. Okay. I will write an accident report. (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: Accident reports are outside this task. | Confirm what you will do. |  |

---
