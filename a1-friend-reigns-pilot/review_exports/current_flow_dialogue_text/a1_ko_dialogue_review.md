# A1 Korean Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 20

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a1:ko:convenience_payment_card_cash - 便利商店付款情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: convenience_payment_card_cash
- Setting: 便利商店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在便利商店結帳。店員會說總金額，然後問你怎麼付款。

### Clean Dialogue Path

- 店員: 총 4,500원입니다. 결제는 어떻게 하시겠어요? (總共 4,500 韓元。請問怎麼付款？)
- 你: 카드로 할게요. (我用卡。)
- 店員: 봉투 필요하세요? (需要袋子嗎？)
- 你: 아니요, 괜찮아요. (不用了，沒關係。)
- 店員: 영수증 드릴까요? (需要收據嗎？)
- 你: 괜찮아요. (不用了。)
- 店員: 네, 결제됐습니다. (好的，付款完成了。)
- 你: 감사합니다. (謝謝。)
- 店員: 안녕히 가세요. (請慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 총 4,500원입니다. 결제는 어떻게 하시겠어요? (總共 4,500 韓元。請問怎麼付款？) | 카드로 할게요. (我用卡。) | 1. 봉투 필요하세요? (需要袋子嗎？) [wrong_speaker_role] - feedback: 這是店員會問你的句子。你現在要回答付款方式。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在已經到便利商店付款。 | 결제 是付款。카드로 할게요 就是「我用卡」。 | 付款方式 + 로 할게요<br>카드로 是用卡，현금으로 是用現金。<br>카드로 할게요 = 我用卡<br>현금으로 할게요 = 我用現金 |
| t2 | 봉투 필요하세요? (需要袋子嗎？) | 아니요, 괜찮아요. (不用了，沒關係。) | 1. 카드로 할게요. (我用卡。) [repeated_prior_answer] - feedback: 付款方式剛講過了。現在他在問袋子。<br>2. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 如果沒聽懂可以用這句；這一輪先練聽懂 봉투。 | 봉투 是袋子。不要袋子時，아니요, 괜찮아요 很好用。 |  |
| t3 | 영수증 드릴까요? (需要收據嗎？) | 괜찮아요. (不用了。) | 1. 봉투 주세요. (請給我袋子。) [wrong_entity] - feedback: 봉투 是袋子，영수증 才是收據。<br>2. 두 명이요. (兩位。) [wrong_scenario_response] - feedback: 두 명이요 是餐廳回答人數。現在是在問收據。 | 영수증 是收據。不要時也可以用 괜찮아요。 |  |
| t4 | 네, 결제됐습니다. (好的，付款完成了。) | 감사합니다. (謝謝。) | 1. 카드로 할게요. (我用卡。) [repeated_prior_answer] - feedback: 付款已經完成了，這裡收尾道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員問你的句子，不是你要回的句子。 | 結帳完成，簡單道謝就好。 |  |

---

## a1:ko:core_repair_repeat_slowly - 請對方再說一次

- Level: A1
- Language: Korean (ko)
- Scenario ID: core_repair_repeat_slowly
- Setting: 便利商店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在便利商店結帳，店員問了一句你沒聽清楚的話。

### Clean Dialogue Path

- 店員: 봉투 필요하세요? (需要袋子嗎？)
- 你: 다시 말해 주세요. (請再說一次。)
- 店員: 네, 다시 말씀드릴게요. 봉투 필요하세요? (好，我再說一次。需要袋子嗎？)
- 你: 천천히 말해 주세요. (請慢一點說。)
- 店員: 봉투요. 필요하세요? (袋子。需要嗎？)
- 你: 아니요, 괜찮아요. (不用了，沒關係。)
- 店員: 네, 알겠습니다. (好的，知道了。)
- 你: 감사합니다. (謝謝。)
- 店員: 안녕히 가세요. (請慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 봉투 필요하세요? (需要袋子嗎？) | 다시 말해 주세요. (請再說一次。) | 1. 감사합니다. (謝謝。) [wrong_act_closing] - feedback: 你還沒聽懂他問什麼，先不要收尾。<br>2. 네, 맞아요. (對，沒錯。) [wrong_act_confirmation] - feedback: 這句是確認用的。沒聽懂時先請他再說一次。 | 沒聽清楚時不用猜。다시 말해 주세요 是「請再說一次」。 |  |
| t2 | 네, 다시 말씀드릴게요. 봉투 필요하세요? (好，我再說一次。需要袋子嗎？) | 천천히 말해 주세요. (請慢一點說。) | 1. 두 명이요. (兩位。) [wrong_scenario_response] - feedback: 두 명이요 是餐廳說人數時用的。這裡是在請對方慢一點說。<br>2. 아이스 아메리카노 주세요. (請給我冰美式。) [wrong_scenario_request] - feedback: 這句是在咖啡店點飲料。現在是在便利商店結帳。 | 他重複了，但如果還是太快，可以請他慢一點。천천히 是「慢慢地」。 | 다시 / 천천히<br>다시 是再一次，천천히 是慢慢地。<br>다시 말해 주세요 = 請再說一次<br>천천히 말해 주세요 = 請慢一點說 |
| t3 | 봉투요. 필요하세요? (袋子。需要嗎？) | 아니요, 괜찮아요. (不用了，沒關係。) | 1. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 已經聽懂是袋子時，就可以回答要不要。<br>2. 두 명이요. (兩位。) [wrong_scenario_response] - feedback: 두 명이요 是餐廳說人數時用的。這裡在問袋子。 | 這次短很多。봉투 是袋子，필요하세요 是問需不需要。 |  |
| t4 | 네, 알겠습니다. (好的，知道了。) | 감사합니다. (謝謝。) | 1. 봉투 필요하세요? (需要袋子嗎？) [wrong_speaker_role] - feedback: 這是店員問你的句子，不是你要回的句子。<br>2. 네, 맞아요. (對，沒錯。) [wrong_act_confirmation] - feedback: 這裡不是確認資料，簡單說謝謝就好。 | 他懂了。最後簡單道謝就好。 |  |

---

## a1:ko:daily_meet_friend - 和朋友會合情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: daily_meet_friend
- Setting: 公園入口附近
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你到了約好的地方，朋友打訊息問你到了沒、在哪裡。

### Clean Dialogue Path

- 朋友: 도착했어요? (你到了嗎？)
- 你: 네, 도착했어요. (嗯，我到了。)
- 朋友: 어디에 있어요? (你在哪裡？)
- 你: 공원 입구에 있어요. (我在公園入口。)
- 朋友: 저도 입구 쪽에 있어요. (我也在入口那邊。)
- 你: 입구 쪽이요? (入口那邊嗎？)
- 朋友: 네, 조금만 기다려 주세요. (對，請等我一下下。)
- 你: 네, 알겠어요. (好，我知道了。)
- 朋友: 곧 봐요. (馬上見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 도착했어요? (你到了嗎？) | 네, 도착했어요. (嗯，我到了。) | 1. 이거 얼마예요? (這個多少錢？) [wrong_scenario_request] - feedback: 這句是在商店問價格。朋友現在問你到了沒。<br>2. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 如果沒聽懂可以用；這裡你知道他在問到了沒，可以回答到了。 | 도착했어요 是到了。朋友問你到了沒，可以先回答 네, 도착했어요。 | 도착했어요 / 장소 + 에 있어요<br>도착했어요 是到了。地點後面接 에 있어요，表示在那裡。<br>네, 도착했어요. = 嗯，我到了。<br>공원 입구에 있어요. = 我在公園入口。 |
| t2 | 어디에 있어요? (你在哪裡？) | 공원 입구에 있어요. (我在公園入口。) | 1. 3시 좋아요. (3 點好。) [wrong_entity] - feedback: 這句是在回答時間。朋友現在問的是地點。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 這句是付款用的。現在是在和朋友找彼此。 | 어디에 있어요? 是問你在哪裡。可以用 地點 + 에 있어요 回答。 |  |
| t3 | 저도 입구 쪽에 있어요. (我也在入口那邊。) | 입구 쪽이요? (入口那邊嗎？) | 1. 분실물 센터는 1층에 있어요? (失物招領在 1 樓嗎？) [wrong_scenario_request] - feedback: 這句是在問失物招領。現在是在確認朋友的位置。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員會問你的句子，不是朋友會合時要回的句子。 | 저도 是我也。입구 쪽 是入口那邊。你可以確認一下。 |  |
| t4 | 네, 조금만 기다려 주세요. (對，請等我一下下。) | 네, 알겠어요. (好，我知道了。) | 1. 공원 입구에 있어요. (我在公園入口。) [repeated_prior_answer] - feedback: 位置剛剛已經說過了。現在朋友請你等一下。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是在拒絕。朋友說等一下時，用 알겠어요 比較自然。 | 조금만 是一下下。等朋友過來時，可以簡單回 알겠어요。 |  |

---

## a1:ko:daily_schedule_time - 約時間情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: daily_schedule_time
- Setting: 和朋友約見面
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你和朋友今天要見面，正在約時間和地點。

### Clean Dialogue Path

- 朋友: 오늘 만날 수 있어요? (今天可以見面嗎？)
- 你: 몇 시에 만날까요? (幾點見？)
- 朋友: 오후 3시 괜찮아요? (下午 3 點可以嗎？)
- 你: 3시 좋아요. (3 點好。)
- 朋友: 카페 앞에서 만나요. (在咖啡店前面見。)
- 你: 카페 앞이요? (咖啡店前面嗎？)
- 朋友: 네, 그때 봐요. (對，到時候見。)
- 你: 네, 이따 봐요. (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘 만날 수 있어요? (今天可以見面嗎？) | 몇 시에 만날까요? (幾點見？) | 1. 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這句是在飯店問 Wi-Fi。現在是在和朋友約時間。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 這句是付款用的。朋友現在在約見面。 | 他在問今天能不能見。可以先問幾點。몇 시 是幾點。 |  |
| t2 | 오후 3시 괜찮아요? (下午 3 點可以嗎？) | 3시 좋아요. (3 點好。) | 1. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 3번 출구 是 3 號出口。這裡是 3시，3 點。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像在拒絕見面。3 點可以的話，用 3시 좋아요。 | 오후 是下午，3시 是 3 點。괜찮아요? 是問可不可以。 | 時間 + 에<br>에 放在時間後面，表示在那個時間。<br>3시에 = 在 3 點<br>오후 3시 = 下午 3 點 |
| t3 | 카페 앞에서 만나요. (在咖啡店前面見。) | 카페 앞이요? (咖啡店前面嗎？) | 1. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。朋友現在在說見面地點。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員會問你的句子。現在是在確認地點。 | 앞 是前面。카페 앞 就是咖啡店前面。 |  |
| t4 | 네, 그때 봐요. (對，到時候見。) | 네, 이따 봐요. (好，等一下見。) | 1. 감사합니다. (謝謝。) [over_formal_closing] - feedback: 這句可以懂，但朋友之間約見面，用 이따 봐요 更自然。<br>2. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 如果沒聽懂可以用；這裡已經約好時間地點了，可以收尾。 | 그때 봐요 是到時候見。可以用 이따 봐요 收尾。 |  |

---

## a1:ko:daily_self_intro - 自我介紹情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: daily_self_intro
- Setting: 語言交換活動
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在語言交換活動遇到新朋友。用簡短句子介紹名字和來自哪裡，不交換個資。

### Clean Dialogue Path

- 新朋友: 안녕하세요. 처음 뵙겠습니다. (你好。初次見面。)
- 你: 저는 유나예요. (我是 Yuna。)
- 新朋友: 어디에서 왔어요? (你從哪裡來？)
- 你: 대만에서 왔어요. (我來自台灣。)
- 新朋友: 한국어 잘해요? (你韓文說得好嗎？)
- 你: 한국어를 조금 해요. (我會一點韓文。)
- 新朋友: 만나서 반가워요. (很高興認識你。)
- 你: 저도 반가워요. (我也很高興認識你。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 안녕하세요. 처음 뵙겠습니다. (你好。初次見面。) | 저는 유나예요. (我是 Yuna。) | 1. 계산해 주세요. (請結帳。) [wrong_scenario_request] - feedback: 這句是在結帳。現在是第一次見面的自我介紹。<br>2. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 如果沒聽懂可以用；這裡對方只是打招呼，可以先說名字。 | 처음 뵙겠습니다 是初次見面。可以先說自己的名字。 | 저는 X예요 / Y에서 왔어요<br>저는 X예요 可以說我是 X。Y에서 왔어요 表示我從 Y 來。<br>저는 유나예요. = 我是 Yuna。<br>대만에서 왔어요. = 我來自台灣。 |
| t2 | 어디에서 왔어요? (你從哪裡來？) | 대만에서 왔어요. (我來自台灣。) | 1. 저는 유나예요. (我是 Yuna。) [repeated_prior_answer] - feedback: 名字已經說過了。現在對方問你從哪裡來。<br>2. 3시 좋아요. (3 點好。) [wrong_entity] - feedback: 這句是在回答時間。現在問的是來自哪裡。 | 어디에서 왔어요? 是問你從哪裡來。可以用 地點 + 에서 왔어요。 |  |
| t3 | 한국어 잘해요? (你韓文說得好嗎？) | 한국어를 조금 해요. (我會一點韓文。) | 1. 대만에서 왔어요. (我來自台灣。) [repeated_prior_answer] - feedback: 來自哪裡已經回答過了。現在問的是韓文程度。<br>2. 비밀번호가 뭐예요? (密碼是什麼？) [wrong_scenario_request] - feedback: 這句是在問密碼。現在是自我介紹聊天。 | 조금 是一點。剛學時可以說 한국어를 조금 해요。 |  |
| t4 | 만나서 반가워요. (很高興認識你。) | 저도 반가워요. (我也很高興認識你。) | 1. 전화번호가 뭐예요? (電話號碼是什麼？) [unsafe_personal_info_request] - feedback: 這會要求個人聯絡方式。這個情境只練簡單自我介紹，不交換個資。<br>2. 저는 유나예요. (我是 Yuna。) [repeated_prior_answer] - feedback: 名字已經說過了。對方說很高興認識你，回應 저도 반가워요 比較自然。 | 만나서 반가워요 是很高興認識你。可以用 저도요 回應。 |  |

---

## a1:ko:digital_battery_charging - 手機充電情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: digital_battery_charging
- Setting: 咖啡店座位區
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你的手機快沒電了。在店裡先問可不可以充電，再問插座位置。

### Clean Dialogue Path

- 店員: 뭐 필요하세요? (你需要什麼嗎？)
- 你: 휴대폰 충전해도 돼요? (可以幫手機充電嗎？)
- 店員: 네, 괜찮아요. (可以，沒問題。)
- 你: 콘센트가 어디예요? (插座在哪裡？)
- 店員: 저쪽 테이블 옆에 있어요. (在那邊桌子旁邊。)
- 你: 저쪽 테이블 옆이요? (那邊桌子旁邊嗎？)
- 店員: 네, 거기에서 충전하세요. (對，請在那裡充電。)
- 你: 감사합니다. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 뭐 필요하세요? (你需要什麼嗎？) | 휴대폰 충전해도 돼요? (可以幫手機充電嗎？) | 1. 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這句是在問 Wi-Fi。現在你的手機快沒電，要問充電。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 這句是在付款。現在是詢問能不能充電。 | 충전하다 是充電。要先問可不可以，可以說 휴대폰 충전해도 돼요? | 충전해도 돼요? / 콘센트가 어디예요?<br>動詞後接 -아도/어도 돼요? 可以問可不可以。콘센트 是插座。<br>휴대폰 충전해도 돼요? = 可以幫手機充電嗎？<br>콘센트가 어디예요? = 插座在哪裡？ |
| t2 | 네, 괜찮아요. (可以，沒問題。) | 콘센트가 어디예요? (插座在哪裡？) | 1. 휴대폰 충전해도 돼요? (可以幫手機充電嗎？) [repeated_prior_answer] - feedback: 店員已經同意了。現在要問插座位置。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員會問客人的句子，不是你要回的句子。 | 店員說 네, 괜찮아요，就是可以。接著可以問插座在哪裡。 |  |
| t3 | 저쪽 테이블 옆에 있어요. (在那邊桌子旁邊。) | 저쪽 테이블 옆이요? (那邊桌子旁邊嗎？) | 1. 콘센트가 어디예요? (插座在哪裡？) [repeated_prior_answer] - feedback: 店員已經說了位置。現在可以確認你聽到的位置。<br>2. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 3번 출구 是出口號碼。現在說的是店裡的插座位置。 | 저쪽 是那邊，옆에 是旁邊。聽懂位置後可以確認。 |  |
| t4 | 네, 거기에서 충전하세요. (對，請在那裡充電。) | 감사합니다. (謝謝。) | 1. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像拒絕充電。店員已經說可以用了。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是在店裡借插座充電。 | 거기에서 是在那裡。得到同意和位置後，最後道謝就好。 |  |

---

## a1:ko:digital_wifi_connect - 連 Wi-Fi 情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: digital_wifi_connect
- Setting: 咖啡店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在咖啡店想連 Wi-Fi。先問密碼，連不上時請店員協助。

### Clean Dialogue Path

- 店員: 네, 도와드릴까요? (好的，需要幫忙嗎？)
- 你: 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？)
- 店員: 비밀번호는 lingo123이에요. (密碼是 lingo123。)
- 你: 네, 해 볼게요. (好，我試試看。)
- 店員: 잘 돼요? (可以順利連嗎？)
- 你: 연결이 안 돼요. (連不上。)
- 店員: 다시 한 번 해 보세요. (請再試一次。)
- 你: 감사합니다. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 도와드릴까요? (好的，需要幫忙嗎？) | 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) | 1. 계산해 주세요. (請結帳。) [wrong_act_payment] - feedback: 這句是在結帳。現在你想問 Wi-Fi 密碼。<br>2. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在要連 Wi-Fi。 | 와이파이 是 Wi-Fi。비밀번호 是密碼。想連網時可以問 와이파이 비밀번호가 뭐예요? | 와이파이 비밀번호 / 연결이 안 돼요<br>비밀번호 是密碼。연결이 안 돼요 是連不上。<br>와이파이 비밀번호가 뭐예요? = Wi-Fi 密碼是什麼？<br>연결이 안 돼요. = 連不上。 |
| t2 | 비밀번호는 lingo123이에요. (密碼是 lingo123。) | 네, 해 볼게요. (好，我試試看。) | 1. 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) [repeated_prior_answer] - feedback: 密碼已經說了。現在可以先試著連線。<br>2. 아이스 아메리카노 하나 주세요. (請給我一杯冰美式。) [wrong_scenario_request] - feedback: 這句是在點咖啡。現在是在處理 Wi-Fi。 | 店員說 비밀번호는 ...이에요，表示密碼是什麼。輸入後可以先說試試看。 |  |
| t3 | 잘 돼요? (可以順利連嗎？) | 연결이 안 돼요. (連不上。) | 1. 네, 맞아요. (對，沒錯。) [wrong_act_confirmation] - feedback: 店員問能不能連。你現在需要說連不上。<br>2. 충전해도 돼요? (可以充電嗎？) [wrong_scenario_request] - feedback: 這句是在問充電。現在是 Wi-Fi 連不上。 | 안 돼요 是不行、不能。連不上時可以說 연결이 안 돼요。 |  |
| t4 | 다시 한 번 해 보세요. (請再試一次。) | 감사합니다. (謝謝。) | 1. 연결이 안 돼요. (連不上。) [repeated_prior_answer] - feedback: 已經說過連不上了。店員請你再試一次，這裡可以道謝。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像拒絕協助。店員正在幫你處理 Wi-Fi。 | 다시 한 번 是再一次。店員給出協助後，可以道謝。 |  |

---

## a1:ko:food_bill_payment - 餐廳結帳情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: food_bill_payment
- Setting: 餐廳櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在餐廳吃完飯，要去櫃台結帳。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 店員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 계산해 주세요. (請結帳。)
- 店員: 현금으로 하시겠어요, 카드로 하시겠어요? (您要用現金還是刷卡？)
- 你: 카드로 할게요. (我用卡。)
- 店員: 카드는 여기에 꽂아 주세요. (請把卡插在這裡。)
- 你: 네. (好。)
- 店員: 결제됐습니다. 영수증 여기 있습니다. (付款完成了。收據在這裡。)
- 你: 감사합니다. (謝謝。)
- 店員: 안녕히 가세요. (請慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 계산해 주세요. (請結帳。) | 1. 비빔밥 하나 주세요. (請給我一份拌飯。) [repeated_prior_scenario] - feedback: 點餐已經是前面的事。現在吃完要結帳。<br>2. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在你要結帳。 | 結帳可以說 계산해 주세요。 | 계산해 주세요<br>계산 是結帳，계산해 주세요 是請結帳。<br>계산해 주세요. = 請結帳。<br>카드로 할게요. = 我用卡。 |
| t2 | 현금으로 하시겠어요, 카드로 하시겠어요? (您要用現金還是刷卡？) | 카드로 할게요. (我用卡。) | 1. 계산해 주세요. (請結帳。) [repeated_prior_answer] - feedback: 已經說要結帳了。現在店員問付款方式。<br>2. 두 명이요. (兩位。) [wrong_scenario_response] - feedback: 兩位是入座時回答人數。現在是付款。 | 카드로 是用卡。要刷卡可以說 카드로 할게요。 |  |
| t3 | 카드는 여기에 꽂아 주세요. (請把卡插在這裡。) | 네. (好。) | 1. 카드로 할게요. (我用卡。) [repeated_prior_answer] - feedback: 付款方式已經說過了。現在是照指示插卡。<br>2. 서울역 표 한 장 주세요. (請給我一張去首爾站的票。) [wrong_scenario_request] - feedback: 這句是在買車票。現在是在餐廳結帳。 | 여기에 是在這裡。聽懂指示後可以簡單回答 네。 |  |
| t4 | 결제됐습니다. 영수증 여기 있습니다. (付款完成了。收據在這裡。) | 감사합니다. (謝謝。) | 1. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員問你的句子，不是你要回的句子。<br>2. 계산해 주세요. (請結帳。) [repeated_prior_answer] - feedback: 已經結帳完成了。最後道謝。 | 付款完成了，收尾道謝。 |  |

---

## a1:ko:food_coffee_ordering - 咖啡點餐情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: food_coffee_ordering
- Setting: 咖啡店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在咖啡店櫃台。聽店員問什麼，挑一句接得上的回應。

### Clean Dialogue Path

- 店員: 어서 오세요. 주문하시겠어요? (歡迎光臨。要點餐嗎？)
- 你: 아이스 아메리카노 주세요. (請給我冰美式。)
- 店員: 드시고 가세요, 가져가세요? (內用還是外帶？)
- 你: 가져갈게요. (我要外帶。)
- 店員: 아이스 아메리카노 한 잔, 포장 맞으세요? (一杯冰美式，外帶沒錯嗎？)
- 你: 네, 맞아요. (對，沒錯。)
- 店員: 결제 도와드릴게요. 카드는 여기에 꽂아 주세요. (幫您結帳。請把卡插在這裡。)
- 你: 네. (好。)
- 店員: 주문하신 음료 나왔습니다. (您的飲料好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어서 오세요. 주문하시겠어요? (歡迎光臨。要點餐嗎？) | 아이스 아메리카노 주세요. (請給我冰美式。) | 1. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員等你點飲料。<br>2. 괜찮아요. (不用了。) [wrong_act_refusal] - feedback: 괜찮아요 像是在說不用點了。你要點飲料時別用這句。 | 他在問你要不要點餐。你可以直接說想要的飲料。 |  |
| t2 | 드시고 가세요, 가져가세요? (內用還是外帶？) | 가져갈게요. (我要外帶。) | 1. 아이스 아메리카노 주세요. (請給我冰美式。) [repeated_prior_answer] - feedback: 飲料已經點了。他現在是在問內用還是外帶。<br>2. 네, 맞아요. (對，沒錯。) [wrong_act_confirmation] - feedback: 這句是確認用的，但他給你兩個選項，要選內用或外帶。 | 드시고 가세요 是內用，가져가세요 是外帶。選一個就好。 | 드시고 가세요 / 가져가세요<br>드시고 가세요 是內用，가져가세요 是外帶。<br>드시고 가세요 = 內用<br>가져가세요 = 外帶 |
| t3 | 아이스 아메리카노 한 잔, 포장 맞으세요? (一杯冰美式，外帶沒錯嗎？) | 네, 맞아요. (對，沒錯。) | 1. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是在取消。訂單沒問題時，用 네, 맞아요。<br>2. 화장실이 어디예요? (洗手間在哪裡？) [off_topic_statement] - feedback: 先確認飲料，問洗手間是另一個場景。 | 他在跟你確認訂單。포장 也是外帶的意思；聽到 맞으세요，可以用 네, 맞아요 回。 |  |
| t4 | 결제 도와드릴게요. 카드는 여기에 꽂아 주세요. (幫您結帳。請把卡插在這裡。) | 네. (好。) | 1. 가져갈게요. (我要外帶。) [repeated_prior_answer] - feedback: 外帶剛剛講過了。現在是付款。<br>2. 아이스 아메리카노 주세요. (請給我冰美式。) [repeated_prior_answer] - feedback: 飲料已經點好了，現在接著付款。 | 他在說要結帳，把卡放到機器上就好。 |  |

---

## a1:ko:food_restaurant_ordering - 餐廳點餐情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: food_restaurant_ordering
- Setting: 餐廳
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你到餐廳吃飯。店員會先問幾位，再問要點什麼。

### Clean Dialogue Path

- 店員: 어서 오세요. 몇 분이세요? (歡迎光臨。請問幾位？)
- 你: 두 명이요. (兩位。)
- 店員: 이쪽으로 앉으세요. 주문하시겠어요? (請坐這邊。要點餐嗎？)
- 你: 비빔밥 하나 주세요. (請給我一份拌飯。)
- 店員: 비빔밥 하나 맞으세요? (一份拌飯沒錯嗎？)
- 你: 네, 맞아요. (對，沒錯。)
- 店員: 네, 준비해 드릴게요. (好的，幫您準備。)
- 你: 감사합니다. (謝謝。)
- 店員: 잠시만 기다려 주세요. (請稍等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어서 오세요. 몇 분이세요? (歡迎光臨。請問幾位？) | 두 명이요. (兩位。) | 1. 비빔밥 하나 주세요. (請給我一份拌飯。) [premature_order] - feedback: 餐點等一下再點。他現在先問幾位。<br>2. 카드로 할게요. (我用卡付款。) [wrong_act_payment] - feedback: 付款還沒到。先回答人數。 | 몇 분이세요 是在問幾位。兩個人可以說 두 명이요。 |  |
| t2 | 이쪽으로 앉으세요. 주문하시겠어요? (請坐這邊。要點餐嗎？) | 비빔밥 하나 주세요. (請給我一份拌飯。) | 1. 두 명이요. (兩位。) [repeated_prior_answer] - feedback: 人數剛講過了。現在可以點餐。<br>2. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。現在店員在等你點餐。 | 他帶你入座後問要不要點餐。주세요 可以拿來點東西。 | 餐點 + 하나 주세요<br>하나 是一個/一份，주세요 是請給我。<br>비빔밥 하나 주세요 = 請給我一份拌飯<br>물 하나 주세요 = 請給我一杯水 |
| t3 | 비빔밥 하나 맞으세요? (一份拌飯沒錯嗎？) | 네, 맞아요. (對，沒錯。) | 1. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是在取消。餐點沒問題時，用 네, 맞아요。<br>2. 카드로 할게요. (我用卡付款。) [wrong_act_payment] - feedback: 還沒結帳。現在只是確認餐點。 | 맞으세요 是確認。沒問題時，用 네, 맞아요 接上。 |  |
| t4 | 네, 준비해 드릴게요. (好的，幫您準備。) | 감사합니다. (謝謝。) | 1. 비빔밥 하나 맞으세요? (一份拌飯沒錯嗎？) [wrong_speaker_role] - feedback: 這是店員確認餐點的句子，不是你要回的句子。<br>2. 두 명이요. (兩位。) [repeated_prior_answer] - feedback: 人數已經說過了，現在收尾道謝就好。 | 點餐完成了，最後簡單道謝。 |  |

---

## a1:ko:hotel_checkout - 飯店退房情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: hotel_checkout
- Setting: 飯店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你要離開飯店，到櫃台辦退房。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 職員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 체크아웃하고 싶어요. (我想退房。)
- 職員: 객실 번호가 어떻게 되세요? (請問房號是多少？)
- 你: 302호예요. (是 302 號房。)
- 職員: 객실 카드를 주세요. (請給我房卡。)
- 你: 여기 있어요. (在這裡。)
- 職員: 체크아웃 되었습니다. 영수증 여기 있습니다. (退房完成了。收據在這裡。)
- 你: 감사합니다. (謝謝。)
- 職員: 안녕히 가세요. (請慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 체크아웃하고 싶어요. (我想退房。) | 1. 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) [wrong_scenario_request] - feedback: 這句是在問飯店資訊。現在你要退房。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是在飯店退房。 | 退房可以說 체크아웃하고 싶어요。 | 動作 + 하고 싶어요<br>하고 싶어요 是想做某事。체크아웃하고 싶어요 是想退房。<br>체크아웃하고 싶어요. = 我想退房。<br>예약하고 싶어요. = 我想預約。 |
| t2 | 객실 번호가 어떻게 되세요? (請問房號是多少？) | 302호예요. (是 302 號房。) | 1. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 3번 출구 是出口。現在職員問的是房號。<br>2. 서울역 표 한 장 주세요. (請給我一張去首爾站的票。) [wrong_scenario_request] - feedback: 這句是在買車票。現在是在飯店退房。 | 객실 번호 是房號。可以短句回答 302호예요。 |  |
| t3 | 객실 카드를 주세요. (請給我房卡。) | 여기 있어요. (在這裡。) | 1. 302호예요. (是 302 號房。) [repeated_prior_answer] - feedback: 房號已經說了。現在職員要房卡。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像拒絕退房流程。職員要房卡時，用 여기 있어요。 | 他要房卡。給出東西時可以說 여기 있어요。 |  |
| t4 | 체크아웃 되었습니다. 영수증 여기 있습니다. (退房完成了。收據在這裡。) | 감사합니다. (謝謝。) | 1. 체크아웃하고 싶어요. (我想退房。) [repeated_prior_answer] - feedback: 退房已經完成了。現在可以道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是職員會問你的句子，不是你要回的句子。 | 退房完成了，收尾道謝。 |  |

---

## a1:ko:hotel_wifi_breakfast - 飯店 Wi-Fi 和早餐情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: hotel_wifi_breakfast
- Setting: 飯店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你已經入住飯店，回到櫃台想問 Wi-Fi 和早餐時間。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 職員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？)
- 職員: 객실 카드에 적혀 있습니다. (寫在房卡上。)
- 你: 아, 네. (啊，好的。)
- 職員: 또 궁금하신 점 있으세요? (還有其他想問的嗎？)
- 你: 아침 식사는 몇 시예요? (早餐是幾點？)
- 職員: 아침 식사는 오전 7시부터 10시까지입니다. (早餐是早上 7 點到 10 點。)
- 你: 7시부터요? (從 7 點嗎？)
- 職員: 장소는 1층 식당입니다. (地點是 1 樓餐廳。)
- 你: 감사합니다. (謝謝。)
- 職員: 편안한 시간 되세요. (祝您住得愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) | 1. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在你在飯店櫃台問資訊。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 付款已經不是這一段的重點。現在要問 Wi-Fi。 | 想問 Wi-Fi 密碼時，可以直接說 와이파이 비밀번호。 |  |
| t2 | 객실 카드에 적혀 있습니다. (寫在房卡上。) | 아, 네. (啊，好的。) | 1. 다시 말해 주세요. (請再說一次。) [repair_when_understood] - feedback: 如果真的沒聽懂可以用這句；這一輪先抓 객실 카드。<br>2. 봉투 주세요. (請給我袋子。) [wrong_scenario_request] - feedback: 봉투 是便利商店袋子。這裡在說 Wi-Fi 密碼在哪裡。 | 객실 카드 是房卡。他說密碼寫在房卡上。 |  |
| t3 | 또 궁금하신 점 있으세요? (還有其他想問的嗎？) | 아침 식사는 몇 시예요? (早餐是幾點？) | 1. 3번 출구요? (3 號出口嗎？) [wrong_scenario_response] - feedback: 3번 출구 是問路會用到的出口。這裡可以問早餐。<br>2. 네, 예약했어요. (有，我有預約。) [repeated_prior_scenario] - feedback: 入住已經完成了，現在是在問飯店資訊。 | 可以接著問早餐時間。아침 식사 是早餐。 |  |
| t4 | 아침 식사는 오전 7시부터 10시까지입니다. (早餐是早上 7 點到 10 點。) | 7시부터요? (從 7 點嗎？) | 1. 2박 맞으세요? (是兩晚沒錯嗎？) [wrong_scenario_response] - feedback: 2박 是住宿幾晚。這裡在說早餐時間。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員問收據的句子。現在你在確認時間。 | 부터 是從，까지 是到。7시부터 10시까지 就是 7 點到 10 點。 | 時間 + 부터 / 까지<br>부터 是從，까지 是到。<br>7시부터 = 從 7 點<br>10시까지 = 到 10 點 |
| t5 | 장소는 1층 식당입니다. (地點是 1 樓餐廳。) | 감사합니다. (謝謝。) | 1. 와이파이 비밀번호가 뭐예요? (Wi-Fi 密碼是什麼？) [repeated_prior_answer] - feedback: Wi-Fi 剛問過了。早餐時間和地點也拿到了，這裡道謝。<br>2. 괜찮아요. (不用了。) [wrong_act_refusal] - feedback: 已經得到資訊時，不用拒絕，簡單道謝就好。 | 1층 是 1 樓，식당 是餐廳。知道地點後道謝就好。 |  |

---

## a1:ko:problem_lost_item - 東西不見情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: problem_lost_item
- Setting: 服務台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在服務台說明東西不見。這不是報案，只是先問服務人員。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 服務人員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 지갑을 잃어버렸어요. (我的錢包不見了。)
- 服務人員: 어디에서 잃어버리셨어요? (您是在哪裡弄丟的？)
- 你: 카페 앞에서요. (在咖啡店前面。)
- 服務人員: 분실물 센터는 1층에 있습니다. (失物招領處在 1 樓。)
- 你: 1층이요? (1 樓嗎？)
- 服務人員: 네, 거기에서 문의해 주세요. (對，請到那裡詢問。)
- 你: 감사합니다. (謝謝。)
- 服務人員: 잘 찾으시길 바랍니다. (希望您順利找到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 지갑을 잃어버렸어요. (我的錢包不見了。) | 1. 이거 얼마예요? (這個多少錢？) [wrong_scenario_request] - feedback: 這句是在問價格。現在要說你的東西不見了。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 這句是付款用的。現在是在求助。 | 東西不見時，可以說 지갑을 잃어버렸어요。지갑 是錢包。 | 物品 + 을/를 잃어버렸어요<br>잃어버렸어요 是弄丟了。物品後面接 을/를。<br>지갑을 잃어버렸어요 = 錢包不見了<br>가방을 잃어버렸어요 = 包包不見了 |
| t2 | 어디에서 잃어버리셨어요? (您是在哪裡弄丟的？) | 카페 앞에서요. (在咖啡店前面。) | 1. 3시 좋아요. (3 點好。) [wrong_entity] - feedback: 這句是在約時間。服務人員現在問的是地點。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是不需要幫忙。東西不見時，先說地點。 | 他在問地點。可以用短句回答：카페 앞에서요。 |  |
| t3 | 분실물 센터는 1층에 있습니다. (失物招領處在 1 樓。) | 1층이요? (1 樓嗎？) | 1. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 他說的是 1층，1 樓。3번 출구 是 3 號出口。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是在確認失物招領處的位置。 | 분실물 센터 是失物招領處。1층 是 1 樓。 |  |
| t4 | 네, 거기에서 문의해 주세요. (對，請到那裡詢問。) | 감사합니다. (謝謝。) | 1. 지갑을 잃어버렸어요. (我的錢包不見了。) [repeated_prior_answer] - feedback: 錢包不見已經說過了。現在知道去 1 樓問，可以道謝。<br>2. 이거 주세요. (請給我這個。) [wrong_scenario_request] - feedback: 這句是在買東西。現在是問失物招領。 | 거기 是那裡。知道去哪裡問之後，道謝就好。 |  |

---

## a1:ko:shopping_ask_price - 問價格情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: shopping_ask_price
- Setting: 商店櫃台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在商店看到想買的東西。先問價格，再決定要買。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 店員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 이거 얼마예요? (這個多少錢？)
- 店員: 12,000원입니다. (是 12,000 韓元。)
- 你: 이거 주세요. (請給我這個。)
- 店員: 네, 결제는 어떻게 하시겠어요? (好的，請問怎麼付款？)
- 你: 카드로 할게요. (我用卡。)
- 店員: 결제됐습니다. 여기 있습니다. (付款完成了。這是您的東西。)
- 你: 감사합니다. (謝謝。)
- 店員: 안녕히 가세요. (請慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 이거 얼마예요? (這個多少錢？) | 1. 지하철역이 어디예요? (地鐵站在哪裡？) [wrong_scenario_request] - feedback: 這句是在問路。現在你在商店問價格。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 付款還沒到。先問這個多少錢。 | 想問價格時，用 이거 얼마예요? 就可以。이거 是這個，얼마 是多少錢。 | 이거 + 얼마예요?<br>이거 是這個，얼마예요 是多少錢。<br>이거 얼마예요? = 這個多少錢？<br>이거 주세요 = 請給我這個 |
| t2 | 12,000원입니다. (是 12,000 韓元。) | 이거 주세요. (請給我這個。) | 1. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問洗手間。你剛剛問了價格，現在要不要買。<br>2. 두 명이요. (兩位。) [wrong_scenario_response] - feedback: 두 명이요 是餐廳回答人數。這裡在買東西。 | 원 是韓元。想買這個時，可以說 이거 주세요。 |  |
| t3 | 네, 결제는 어떻게 하시겠어요? (好的，請問怎麼付款？) | 카드로 할게요. (我用卡。) | 1. 이거 얼마예요? (這個多少錢？) [repeated_prior_answer] - feedback: 價格剛問過了。現在店員在問付款方式。<br>2. 아침 식사는 몇 시예요? (早餐是幾點？) [wrong_scenario_request] - feedback: 這句是在飯店問早餐。現在是在商店付款。 | 결제 是付款。這裡可以沿用便利商店學過的 카드로 할게요。 |  |
| t4 | 결제됐습니다. 여기 있습니다. (付款完成了。這是您的東西。) | 감사합니다. (謝謝。) | 1. 카페 앞이요? (咖啡店前面嗎？) [wrong_scenario_response] - feedback: 這句是在約地點。現在東西拿到了，收尾道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員問你的句子，不是你要回的句子。 | 東西拿到了，簡單道謝就好。 |  |

---

## a1:ko:social_running_late - 快遲到通知情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: social_running_late
- Setting: 和朋友傳訊息
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你要和朋友見面，但路上慢了一點。先告訴朋友你會晚到。

### Clean Dialogue Path

- 朋友: 지금 어디예요? (你現在在哪裡？)
- 你: 죄송해요, 조금 늦어요. (不好意思，我會晚一點。)
- 朋友: 몇 분 정도 늦어요? (大概晚幾分鐘？)
- 你: 10분 정도요. (大概 10 分鐘。)
- 朋友: 괜찮아요. 기다릴게요. (沒關係。我等你。)
- 你: 고마워요. (謝謝你。)
- 朋友: 천천히 와요. 이따 봐요. (慢慢來。等一下見。)
- 你: 네, 이따 봐요. (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 지금 어디예요? (你現在在哪裡？) | 죄송해요, 조금 늦어요. (不好意思，我會晚一點。) | 1. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是通知朋友會晚到。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 這句是付款。朋友現在問你在哪裡。 | 지금 是現在。快遲到時，可以先說 죄송해요, 조금 늦어요。 | 조금 늦어요 / 숫자 + 분<br>조금 늦어요 是會晚一點。분 是分鐘。<br>조금 늦어요. = 會晚一點。<br>10분 늦어요. = 會晚 10 分鐘。 |
| t2 | 몇 분 정도 늦어요? (大概晚幾分鐘？) | 10분 정도요. (大概 10 分鐘。) | 1. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 3번 출구 是出口號碼。朋友問的是幾分鐘。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像拒絕幫忙。現在要回答晚多久。 | 몇 분 是幾分鐘。10분 정도요 可以說大概 10 分鐘。 |  |
| t3 | 괜찮아요. 기다릴게요. (沒關係。我等你。) | 고마워요. (謝謝你。) | 1. 죄송해요, 조금 늦어요. (不好意思，我會晚一點。) [repeated_prior_answer] - feedback: 會晚到已經說過了。朋友說會等你，這裡可以道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員會問的句子，不是朋友聊天的回覆。 | 기다릴게요 是我會等。聽懂後可以道謝。 |  |
| t4 | 천천히 와요. 이따 봐요. (慢慢來。等一下見。) | 네, 이따 봐요. (好，等一下見。) | 1. 10분 정도요. (大概 10 分鐘。) [repeated_prior_answer] - feedback: 時間已經說過了。現在是收尾。<br>2. 감사합니다. (謝謝。) [over_formal_closing] - feedback: 朋友之間可以說 고마워요 或 이따 봐요，比 감사합니다 自然。 | 이따 봐요 是等一下見。最後簡單回覆就好。 |  |

---

## a1:ko:travel_hotel_checkin - 飯店預約情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: travel_hotel_checkin
- Setting: 飯店櫃台
- Source status: pilot_authored_derived
- Review state: ai_reviewed
- Native review: 
- Support text: 到櫃台了。聽聽看他說什麼，挑一句回他。

### Clean Dialogue Path

- 職員: 어서 오세요. 예약하셨나요? (歡迎光臨。請問有預約嗎？)
- 你: 네, 예약했어요. (有，我有預約。)
- 職員: 성함이 어떻게 되세요? (請問姓名是？)
- 你: 왕리로 예약했어요. (我是用王立預約的。)
- 職員: 네, 확인했습니다. 2박 맞으세요? (好的，確認到了。是兩晚沒錯嗎？)
- 你: 네, 맞아요. (對，沒錯。)
- 職員: 여기 객실 키입니다. 엘리베이터는 오른쪽에 있습니다. (這是您的房卡。電梯在右邊。)
- 你: 감사합니다. (謝謝。)
- 職員: 편안한 시간 되세요. (祝您住得愉快。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어서 오세요. 예약하셨나요? (歡迎光臨。請問有預約嗎？) | 네, 예약했어요. (有，我有預約。) | 1. 호텔을 좋아해요. (我喜歡飯店。) [off_topic_statement] - feedback: 這句是「我喜歡飯店」……他是在問你訂房了沒。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_function_refusal] - feedback: 괜찮아요 是「不用了」，這樣講他會以為你沒訂房。 | 他在問你「訂房了嗎」。예약 就是預約，聽到這個詞就懂了。 |  |
| t2 | 성함이 어떻게 되세요? (請問姓名是？) | 왕리로 예약했어요. (我是用王立預約的。) | 1. 네, 맞아요. (對，沒錯。) [wrong_act_confirmation] - feedback: 他還在等你的名字。<br>2. 감사합니다. (謝謝。) [wrong_act_closing] - feedback: 先別急著道謝，他在問你叫什麼。 | 他在問你的名字。可以說「我用◯◯的名字訂的」。 |  |
| t3 | 네, 확인했습니다. 2박 맞으세요? (好的，確認到了。是兩晚沒錯嗎？) | 네, 맞아요. (對，沒錯。) | 1. 왕리로 예약했어요. (我是用王立預約的。) [repeated_prior_answer] - feedback: 名字剛講過囉，他現在問的是「住幾晚」。<br>2. 호텔을 좋아해요. (我喜歡飯店。) [off_topic_statement] - feedback: 又是「我喜歡飯店」……他在問住幾晚對不對。 | 박 是「晚」，2박 就是兩晚。他在跟你對訂單。 | 數字 + 박 = 幾晚<br>박 是「晚」，2박 就是兩晚。<br>1박 = 一晚<br>2박 = 兩晚<br>3박 = 三晚 |
| t4 | 여기 객실 키입니다. 엘리베이터는 오른쪽에 있습니다. (這是您的房卡。電梯在右邊。) | 감사합니다. (謝謝。) | 1. 네, 예약했어요. (有，我有預約。) [repeated_prior_answer] - feedback: 預約早就確認過啦，拿了房卡道個謝就好。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_function_refusal] - feedback: 這樣講像在拒絕房卡，他會愣住。 | 房卡到手了，道個謝就好。 |  |

---

## a1:ko:travel_restroom_directions - 問洗手間情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: travel_restroom_directions
- Setting: 店內問路
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在店裡想找洗手間。先問一句，再聽對方指方向。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 店員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 화장실이 어디예요? (洗手間在哪裡？)
- 店員: 저쪽으로 쭉 가시면 오른쪽에 있어요. (往那邊一直走，在右邊。)
- 你: 오른쪽이요? (右邊嗎？)
- 店員: 네, 오른쪽에 있습니다. (對，在右邊。)
- 你: 감사합니다. (謝謝。)
- 店員: 네, 천천히 가세요. (好的，慢慢走。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 화장실이 어디예요? (洗手間在哪裡？) | 1. 아이스 아메리카노 주세요. (請給我冰美式。) [wrong_scenario_request] - feedback: 這句是在點咖啡。你現在要問洗手間。<br>2. 괜찮아요. (不用了。) [wrong_act_refusal] - feedback: 괜찮아요 像是在說不需要幫忙。要找洗手間時，直接問在哪裡。 | 他在問你需要什麼。直接問洗手間在哪裡就可以。 |  |
| t2 | 저쪽으로 쭉 가시면 오른쪽에 있어요. (往那邊一直走，在右邊。) | 오른쪽이요? (右邊嗎？) | 1. 아이스 아메리카노 주세요. (請給我冰美式。) [wrong_scenario_request] - feedback: 他剛剛在指路，不是在問你要點什麼。<br>2. 네, 예약했어요. (有，我有預約。) [wrong_scenario_response] - feedback: 這句是飯店入住會用到的。這裡在確認方向。 | 쭉 가세요 是一直走，오른쪽 是右邊。先抓方向就好。 | 왼쪽 / 오른쪽 = 左邊 / 右邊<br>왼쪽 是左邊，오른쪽 是右邊。<br>왼쪽 = 左邊<br>오른쪽 = 右邊 |
| t3 | 네, 오른쪽에 있습니다. (對，在右邊。) | 감사합니다. (謝謝。) | 1. 오른쪽이요? (右邊嗎？) [repeated_prior_answer] - feedback: 他已經又確認一次了，這裡可以道謝。<br>2. 괜찮아요. (不用了。) [wrong_act_refusal] - feedback: 這樣像是在拒絕幫忙。已經得到方向時，用 감사합니다。 | 他確認是右邊。這時候道謝就好。 |  |

---

## a1:ko:travel_station_directions - 問地鐵站情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: travel_station_directions
- Setting: 旅遊服務台
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在旅遊服務台想找地鐵站。先問在哪裡，再聽方向和出口。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 服務人員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 지하철역이 어디예요? (地鐵站在哪裡？)
- 服務人員: 이 길로 쭉 가서 왼쪽으로 가세요. (沿著這條路一直走，然後往左邊。)
- 你: 왼쪽이요? (左邊嗎？)
- 服務人員: 네. 3번 출구가 가까워요. (對。3 號出口比較近。)
- 你: 3번 출구요? (3 號出口嗎？)
- 服務人員: 네, 3번 출구입니다. (對，是 3 號出口。)
- 你: 감사합니다. (謝謝。)
- 服務人員: 조심히 가세요. (路上小心。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 지하철역이 어디예요? (地鐵站在哪裡？) | 1. 화장실이 어디예요? (洗手間在哪裡？) [wrong_entity] - feedback: 這句是在問洗手間。現在你要找地鐵站。<br>2. 카드로 할게요. (我用卡。) [wrong_scenario_response] - feedback: 這句是在付款。現在是在問路。 | 直接問地鐵站在哪裡就可以。지하철역 是地鐵站。 |  |
| t2 | 이 길로 쭉 가서 왼쪽으로 가세요. (沿著這條路一直走，然後往左邊。) | 왼쪽이요? (左邊嗎？) | 1. 오른쪽이요? (右邊嗎？) [wrong_direction] - feedback: 他說的是 왼쪽，左邊。오른쪽 是右邊。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是在確認方向。 | 쭉 가세요 是一直走，왼쪽 是左邊。先抓方向。 |  |
| t3 | 네. 3번 출구가 가까워요. (對。3 號出口比較近。) | 3번 출구요? (3 號出口嗎？) | 1. 2박 맞으세요? (是兩晚沒錯嗎？) [wrong_scenario_response] - feedback: 2박 是飯店住幾晚。這裡在說出口號碼。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是店員問收據的句子。現在你在確認出口。 | 번 是號，출구 是出口。3번 출구 就是 3 號出口。 | 數字 + 번 출구 = 幾號出口<br>번 是號，출구 是出口。<br>1번 출구 = 1 號出口<br>2번 출구 = 2 號出口<br>3번 출구 = 3 號出口 |
| t4 | 네, 3번 출구입니다. (對，是 3 號出口。) | 감사합니다. (謝謝。) | 1. 왼쪽이요? (左邊嗎？) [repeated_prior_answer] - feedback: 方向已經確認過了，現在出口也確認了，可以道謝。<br>2. 괜찮아요. (不用了。) [wrong_act_refusal] - feedback: 已經得到方向時，不用拒絕，簡單道謝就好。 | 他確認了出口。最後道謝就好。 |  |

---

## a1:ko:travel_taxi_destination - 搭計程車說目的地情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: travel_taxi_destination
- Setting: 計程車上
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你上了計程車，要告訴司機去飯店。

### Clean Dialogue Path

- 司機: 어디로 가세요? (您要去哪裡？)
- 你: 이 호텔로 가 주세요. (請去這間飯店。)
- 司機: 이 호텔 맞으세요? (是這間飯店沒錯嗎？)
- 你: 네, 맞아요. (對，沒錯。)
- 司機: 15분 정도 걸려요. (大概要 15 分鐘。)
- 你: 네, 알겠어요. (好，我知道了。)
- 司機: 도착했습니다. (到了。)
- 你: 감사합니다. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어디로 가세요? (您要去哪裡？) | 이 호텔로 가 주세요. (請去這間飯店。) | 1. 화장실이 어디예요? (洗手間在哪裡？) [wrong_scenario_request] - feedback: 這句是在問路。現在司機問你目的地。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在是在搭計程車。 | 어디로 가세요? 是問去哪裡。可以說 飯店名 + 으로 가 주세요。 | 目的地 + 으로 가 주세요<br>으로 가 주세요 是請去某個地方。<br>이 호텔로 가 주세요. = 請去這間飯店。<br>서울역으로 가 주세요. = 請去首爾站。 |
| t2 | 이 호텔 맞으세요? (是這間飯店沒錯嗎？) | 네, 맞아요. (對，沒錯。) | 1. 이 호텔로 가 주세요. (請去這間飯店。) [repeated_prior_answer] - feedback: 目的地已經說過了。現在是在確認。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像是不搭了。目的地正確時說 네, 맞아요。 | 맞으세요 是確認。目的地沒錯時可以說 네, 맞아요。 |  |
| t3 | 15분 정도 걸려요. (大概要 15 分鐘。) | 네, 알겠어요. (好，我知道了。) | 1. 10분 정도요. (大概 10 分鐘。) [wrong_entity] - feedback: 司機說的是 15분，15 分鐘。這裡不用改成 10 分鐘。<br>2. 카드로 할게요. (我用卡。) [wrong_act_payment] - feedback: 還沒到付款。現在先聽懂大概多久。 | 걸려요 是需要花時間。15분 정도 是大概 15 分鐘。 |  |
| t4 | 도착했습니다. (到了。) | 감사합니다. (謝謝。) | 1. 이 호텔로 가 주세요. (請去這間飯店。) [repeated_prior_answer] - feedback: 已經到了，不需要再說目的地。這裡道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是司機或店員會問你的句子，不是你要回的句子。 | 到了之後可以道謝。付款方式先保留 choice-only。 |  |

---

## a1:ko:travel_ticket_buying - 買車票情境

- Level: A1
- Language: Korean (ko)
- Scenario ID: travel_ticket_buying
- Setting: 車站售票窗口
- Source status: pilot_authored_ai_review_pending
- Review state: draft
- Native review: 
- Support text: 你在車站售票窗口，要買一張去首爾站的票。

### Clean Dialogue Path

- 你: 저기요. (不好意思。)
- 售票員: 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？)
- 你: 서울역 표 한 장 주세요. (請給我一張去首爾站的票。)
- 售票員: 서울역 한 장 맞으세요? (一張到首爾站，沒錯嗎？)
- 你: 네, 맞아요. (對，沒錯。)
- 售票員: 5,000원입니다. (是 5,000 韓元。)
- 你: 카드로 할게요. (我用卡。)
- 售票員: 표 여기 있습니다. 2번 승강장으로 가세요. (票在這裡。請到 2 號月台。)
- 你: 감사합니다. (謝謝。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (您好，需要幫忙嗎？) | 서울역 표 한 장 주세요. (請給我一張去首爾站的票。) | 1. 지하철역이 어디예요? (地鐵站在哪裡？) [wrong_scenario_request] - feedback: 這句是在問地點。現在你在售票窗口買票。<br>2. 비빔밥 하나 주세요. (請給我一份拌飯。) [wrong_scenario_request] - feedback: 這句是在餐廳點餐。現在要買車票。 | 買票時，可以說目的地 + 표 한 장 주세요。 | 目的地 + 표 한 장 주세요<br>표 是票，한 장 是一張。<br>서울역 표 한 장 주세요. = 請給我一張去首爾站的票。<br>부산역 표 한 장 주세요. = 請給我一張去釜山站的票。 |
| t2 | 서울역 한 장 맞으세요? (一張到首爾站，沒錯嗎？) | 네, 맞아요. (對，沒錯。) | 1. 서울역 표 한 장 주세요. (請給我一張去首爾站的票。) [repeated_prior_answer] - feedback: 票已經說了。現在是在確認目的地和張數。<br>2. 아니요, 괜찮아요. (不用了，沒關係。) [wrong_act_refusal] - feedback: 這樣像取消購票。沒錯時用 네, 맞아요。 | 맞으세요 是確認。沒錯時可以說 네, 맞아요。 |  |
| t3 | 5,000원입니다. (是 5,000 韓元。) | 카드로 할게요. (我用卡。) | 1. 몇 시에 만날까요? (幾點見？) [wrong_scenario_request] - feedback: 這句是在約時間。現在是在付車票錢。<br>2. 3번 출구요? (3 號出口嗎？) [wrong_entity] - feedback: 3번 출구 是出口。現在售票員說的是價格。 | 價格是聽懂就好。付款可以沿用 카드로 할게요。 |  |
| t4 | 표 여기 있습니다. 2번 승강장으로 가세요. (票在這裡。請到 2 號月台。) | 감사합니다. (謝謝。) | 1. 서울역 표 한 장 주세요. (請給我一張去首爾站的票。) [repeated_prior_answer] - feedback: 票已經買好了。現在拿到票，可以道謝。<br>2. 영수증 드릴까요? (需要收據嗎？) [wrong_speaker_role] - feedback: 這是工作人員會問你的句子，不是你要回的句子。 | 승강장 是月台。拿到票和月台資訊後道謝。 |  |

---
