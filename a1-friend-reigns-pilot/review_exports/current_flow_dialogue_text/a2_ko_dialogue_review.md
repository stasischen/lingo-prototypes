# A2 Korean Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:ko:a2_app_booking_confirmation - 앱 예약 확인하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_app_booking_confirmation
- Setting: 앱 예약 화면
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 앱 예약 시간과 장소를 확인해 보세요.
- Support text: 앱 예약 시간과 장소를 확인해 보세요.

### Clean Dialogue Path

- 직원: 예약이 오늘 오후 3시로 확인됐어요. (預約確認為今天下午三點。)
- 你: 장소가 어디예요? (地點在哪裡？)
- 직원: 카페 2층이에요. (在咖啡店二樓。)
- 你: 카페 2층이 맞나요? (是在咖啡店二樓，對嗎？)
- 직원: 네, 예약 이름은 민수 씨예요. (對，預約姓名是敏洙。)
- 你: 네, 제 이름이 맞아요. (對，是我的名字。)
- 직원: 그럼 오후 3시에 뵐게요. (那下午三點見。)
- 你: 네, 오후 3시에 갈게요. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 예약이 오늘 오후 3시로 확인됐어요. (預約確認為今天下午三點。) | 장소가 어디예요? (地點在哪裡？) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t2 | 카페 2층이에요. (在咖啡店二樓。) | 카페 2층이 맞나요? (是在咖啡店二樓，對嗎？) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t3 | 네, 예약 이름은 민수 씨예요. (對，預約姓名是敏洙。) | 네, 제 이름이 맞아요. (對，是我的名字。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t4 | 그럼 오후 3시에 뵐게요. (那下午三點見。) | 네, 오후 3시에 갈게요. (好，我下午三點會去。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |

---

## a2:ko:a2_ask_ingredient_preference - 재료 선호 말하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_ask_ingredient_preference
- Setting: 식당 카운터
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 일반적인 재료가 들어가는지 묻고, 선호에 맞게 선택해 보세요.
- Support text: 일반적인 재료가 들어가는지 묻고, 선호에 맞게 선택해 보세요.

### Clean Dialogue Path

- 호텔 직원: 무엇을 주문하시겠어요? (您想點什麼？)
- 你: 이 샐러드에 양파가 들어가요? (這個沙拉裡有洋蔥嗎？)
- 호텔 직원: 네, 조금 들어가요. (有，放一點洋蔥。)
- 你: 양파가 조금 들어가는군요. (有一點洋蔥，對嗎？)
- 호텔 직원: 원하시면 양파 없이 해 드릴 수 있어요. (如果您想要，可以不加洋蔥。)
- 你: 네, 양파 없이 해 주세요. (好的，請不要加洋蔥。)
- 호텔 직원: 알겠습니다. 양파 없이 준비해 드릴게요. (了解，我幫您準備不加洋蔥的。)
- 你: 감사합니다. 그렇게 해 주세요. (謝謝，請這樣準備。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 무엇을 주문하시겠어요? (您想點什麼？) | 이 샐러드에 양파가 들어가요? (這個沙拉裡有洋蔥嗎？) | 1. 이 샐러드는 몇 층이에요? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: 층수는 음식 재료와 관련이 없어요.<br>2. 제 표 시간을 바꿔 주세요. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: 교통/표 상황으로 바뀌었어요. | 일반적인 재료가 들어가는지 물어보세요. |  |
| t2 | 네, 조금 들어가요. (有，放一點洋蔥。) | 양파가 조금 들어가는군요. (有一點洋蔥，對嗎？) | 1. 고기가 많이 들어가는군요. (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: 고기는 말하지 않았어요.<br>2. 방이 시끄럽군요. (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: 호텔 문제로 바뀌었어요. | 재료 정보를 확인하세요. |  |
| t3 | 원하시면 양파 없이 해 드릴 수 있어요. (如果您想要，可以不加洋蔥。) | 네, 양파 없이 해 주세요. (好的，請不要加洋蔥。) | 1. 네, 알레르기 약을 주세요. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: 의료/알레르기 처방은 금지예요.<br>2. 네, 환불해 주세요. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: 환불 요청이 아니에요. | 선호로 말하고 선택하세요. |  |
| t4 | 알겠습니다. 양파 없이 준비해 드릴게요. (了解，我幫您準備不加洋蔥的。) | 감사합니다. 그렇게 해 주세요. (謝謝，請這樣準備。) | 1. 제 여권 번호를 알려 주세요. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: 여권 정보는 필요하지 않아요.<br>2. 짐을 맡기고 싶어요. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: 짐 보관 상황이 아니에요. | 주문 확인으로 마무리하세요. |  |

---

## a2:ko:a2_ask_late_checkout - 늦은 체크아웃 물어보기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_ask_late_checkout
- Setting: 호텔 프런트
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: 체크아웃을 조금 늦출 수 있는지 묻고, 가능한 시간을 확인해 보세요.

### Clean Dialogue Path

- 호텔 직원: 무엇을 도와드릴까요? (我可以怎麼幫您？)
- 你: 체크아웃을 조금 늦게 할 수 있을까요? (可以晚一點退房嗎？)
- 호텔 직원: 오늘은 오후 한 시까지 가능합니다. (今天可以到下午一點。)
- 你: 오후 한 시까지 가능하군요. (可以到下午一點，對嗎？)
- 호텔 직원: 객실 카드는 정오 전에 프런트에 한번 보여 주세요. (房卡請在中午前先拿到櫃台給我們看一下。)
- 你: 정오 전에 카드를 보여 드리면 되죠? (中午前拿房卡給您看就可以，對嗎？)
- 호텔 직원: 네, 한 시 체크아웃으로 확인해 드릴게요. (好的，我幫您確認為一點退房。)
- 你: 감사합니다. 한 시에 체크아웃할게요. (謝謝。我一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 무엇을 도와드릴까요? (我可以怎麼幫您？) | 체크아웃을 조금 늦게 할 수 있을까요? (可以晚一點退房嗎？) | 1. 체크인을 조금 늦게 할 수 있을까요? (可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: 체크인이 아니라 체크아웃을 묻는 상황이에요.<br>2. 요금을 깎아 주세요. (請幫我降價。) [forbidden_or_wrong_domain] - feedback: 요금 협상은 이 A2 과제 범위를 넘어가요. | 늦은 체크아웃을 물어봐요. |  |
| t2 | 오늘은 오후 한 시까지 가능합니다. (今天可以到下午一點。) | 오후 한 시까지 가능하군요. (可以到下午一點，對嗎？) | 1. 오전 열 시까지 가능하군요. (可以到上午十點，對嗎？) [wrong_detail_or_domain] - feedback: 직원은 오후 한 시까지 가능하다고 했어요.<br>2. 방을 새로 예약할게요. (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: 새 예약이 아니라 체크아웃 시간 확인이에요. | 가능한 시간을 들어요. | -까지 = 到...為止<br>이 상황에서 자주 쓰는 A2 표현입니다.<br>오후 한 시까지 = 到下午一點 |
| t3 | 객실 카드는 정오 전에 프런트에 한번 보여 주세요. (房卡請在中午前先拿到櫃台給我們看一下。) | 정오 전에 카드를 보여 드리면 되죠? (中午前拿房卡給您看就可以，對嗎？) | 1. 여권 번호를 알려 드리면 되죠? (告訴您護照號碼就可以，對嗎？) [wrong_detail_or_domain] - feedback: 여권 번호 같은 신분 정보는 필요하지 않아요.<br>2. 저녁 일곱 시에 짐을 찾으면 되죠? (晚上七點領行李就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: 짐 보관이 아니라 체크아웃 시간 이야기예요. | 간단한 조건을 확인해요. |  |
| t4 | 네, 한 시 체크아웃으로 확인해 드릴게요. (好的，我幫您確認為一點退房。) | 감사합니다. 한 시에 체크아웃할게요. (謝謝。我一點退房。) | 1. 환불을 신청할게요. (我要申請退款。) [wrong_detail_or_domain] - feedback: 환불 신청은 이 상황의 범위를 넘어가요.<br>2. 내일 아침에 기차를 탈게요. (我明天早上會搭火車。) [forbidden_or_wrong_domain] - feedback: 교통 계획이 아니라 체크아웃 확인이에요. | 마지막 시간을 확인해요. |  |

---

## a2:ko:a2_ask_recommendation_budget - 예산 안에서 추천받기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_ask_recommendation_budget
- Setting: 가게
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 작은 예산 안에서 추천을 부탁하고, 원하는 조건을 짧게 말해 보세요.
- Support text: 작은 예산 안에서 추천을 부탁하고, 원하는 조건을 짧게 말해 보세요.

### Clean Dialogue Path

- 호텔 직원: 무엇을 찾으세요? (您在找什麼？)
- 你: 만 원 안에서 선물 추천해 주세요. (請推薦一個一萬韓元以內的禮物。)
- 호텔 직원: 가벼운 선물이 좋아요, 아니면 실용적인 게 좋아요? (想要輕巧的禮物，還是實用的？)
- 你: 실용적인 게 좋아요. (我想要實用的。)
- 호텔 직원: 그럼 이 작은 노트가 만 원 안이에요. (那這本小筆記本在一萬韓元以內。)
- 你: 그 노트가 만 원 안이라는 거죠? (那本筆記本在一萬韓元以內，對嗎？)
- 호텔 직원: 네, 선물 포장도 가능해요. (對，也可以包裝成禮物。)
- 你: 좋아요. 그 노트로 할게요. (好，我選那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 무엇을 찾으세요? (您在找什麼？) | 만 원 안에서 선물 추천해 주세요. (請推薦一個一萬韓元以內的禮物。) | 1. 제 통장을 확인해 주세요. (請確認我的帳戶。) [wrong_detail_or_domain] - feedback: 은행/계좌 상황이 아니에요.<br>2. 분실 신고를 하고 싶어요. (我想報遺失。) [forbidden_or_wrong_domain] - feedback: 분실 신고는 다른 과제예요. | 작은 예산 안에서 추천을 부탁하세요. |  |
| t2 | 가벼운 선물이 좋아요, 아니면 실용적인 게 좋아요? (想要輕巧的禮物，還是實用的？) | 실용적인 게 좋아요. (我想要實用的。) | 1. 매운 게 좋아요. (我想要辣的。) [wrong_detail_or_domain] - feedback: 매운맛은 음식 메뉴 쪽이에요.<br>2. 체크아웃을 늦추고 싶어요. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: 호텔 체크아웃 상황이 아니에요. | 간단한 선호를 말하세요. |  |
| t3 | 그럼 이 작은 노트가 만 원 안이에요. (那這本小筆記本在一萬韓元以內。) | 그 노트가 만 원 안이라는 거죠? (那本筆記本在一萬韓元以內，對嗎？) | 1. 그 방이 만 원 안이라는 거죠? (那個房間在一萬韓元以內，對嗎？) [wrong_detail_or_domain] - feedback: 방은 물건 추천이 아니에요.<br>2. 그 표가 어제였다는 거죠? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: 표 시간으로 바뀌었어요. | 추천과 예산을 확인하세요. |  |
| t4 | 네, 선물 포장도 가능해요. (對，也可以包裝成禮物。) | 좋아요. 그 노트로 할게요. (好，我選那本筆記本。) | 1. 환불해 주세요. (請退款。) [wrong_detail_or_domain] - feedback: 환불 요청이 아니에요.<br>2. 제 보험을 확인해 주세요. (請確認我的保險。) [forbidden_or_wrong_domain] - feedback: 보험은 금지된 금융/행정 영역이에요. | 추천을 받아들이며 마무리하세요. |  |

---

## a2:ko:a2_ask_transfer_platform - 환승 플랫폼 묻기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_ask_transfer_platform
- Setting: 기차역 환승 안내
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler asks station staff where to transfer and which platform to use.
- Learner goal: Ask for a transfer point and confirm a short two-step direction.
- Support text: 환승할 곳과 플랫폼을 물어보고, 짧게 확인해 보세요.

### Clean Dialogue Path

- 역무원: 어디까지 가세요? (您要到哪裡？)
- 你: 공항에 가는데 어디서 갈아타요? (我要去機場，在哪裡轉乘？)
- 역무원: 시청역에서 내려서 3번 플랫폼으로 가세요. (請在市廳站下車，去 3 號月台。)
- 你: 시청역에서 내려서 3번 플랫폼으로 가면 돼요? (在市廳站下車後去 3 號月台就可以嗎？)
- 역무원: 3번 플랫폼에서 공항행 열차를 타시면 돼요. (在 3 號月台搭往機場的列車就可以了。)
- 你: 3번 플랫폼에서 공항행 열차를 타면 되죠? (在 3 號月台搭往機場的列車，對吧？)
- 역무원: 네, 시청역에서 갈아타시면 됩니다. (對，在市廳站轉乘即可。)
- 你: 감사합니다. 시청역에서 갈아탈게요. (謝謝。我會在市廳站轉乘。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어디까지 가세요? (您要到哪裡？) | 공항에 가는데 어디서 갈아타요? (我要去機場，在哪裡轉乘？) | 1. 공항에 어제 갔어요. (我昨天去了機場。) [wrong_time_past] - feedback: 現在要問轉乘，不是說昨天去過。<br>2. 짐을 맡기고 싶어요. (我想寄放行李。) [wrong_scenario_luggage] - feedback: 寄放行李是另一個服務。這裡要問轉乘。 | 你要問去機場在哪裡轉乘。 |  |
| t2 | 시청역에서 내려서 3번 플랫폼으로 가세요. (請在市廳站下車，去 3 號月台。) | 시청역에서 내려서 3번 플랫폼으로 가면 돼요? (在市廳站下車後去 3 號月台就可以嗎？) | 1. 시청역에서 커피를 마시면 돼요? (在市廳站喝咖啡就可以嗎？) [wrong_action_cafe] - feedback: 직원은 커피가 아니라 3번 플랫폼으로 가라고 했어요.<br>2. 3번 방으로 가면 돼요? (去 3 號房就可以嗎？) [wrong_location_room] - feedback: 방이 아니라 플랫폼이에요. | 這是一個兩步指示：先下車，再去 3 號月台。 | -서 = 然後<br>내려서 가세요 可以把兩個簡單動作接起來。<br>내려서 = 下車後<br>3번 플랫폼으로 = 往 3 號月台 |
| t3 | 3번 플랫폼에서 공항행 열차를 타시면 돼요. (在 3 號月台搭往機場的列車就可以了。) | 3번 플랫폼에서 공항행 열차를 타면 되죠? (在 3 號月台搭往機場的列車，對吧？) | 1. 공항행 열차가 어제 왔죠? (往機場的列車昨天來了吧？) [wrong_time_past] - feedback: 現在要確認要搭的列車，不是昨天的事。<br>2. 응급 상황이면 어디로 가요? (緊急狀況要去哪裡？) [forbidden_emergency_reroute] - feedback: 緊急狀況超出這個 A2 轉乘練習。 | 確認平台和方向，避免搭錯。 |  |
| t4 | 네, 시청역에서 갈아타시면 됩니다. (對，在市廳站轉乘即可。) | 감사합니다. 시청역에서 갈아탈게요. (謝謝。我會在市廳站轉乘。) | 1. 표 시간을 바꿀게요. (我要改票的時間。) [wrong_scenario_ticket_change] - feedback: 這是在轉乘確認，不是在改票。<br>2. 공항에서 신고할게요. (我會在機場報案。) [forbidden_police_domain] - feedback: 報案不是這個低風險轉乘任務的一部分。 | 路線確認了，簡單道謝。 |  |

---

## a2:ko:a2_change_delivery_pickup_time - 픽업 시간 바꾸기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: 가게 메시지
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 픽업 시간을 정중하게 바꾸고 새 시간을 확인해 보세요.
- Support text: 픽업 시간을 정중하게 바꾸고 새 시간을 확인해 보세요.

### Clean Dialogue Path

- 직원: 오늘 4시에 픽업 예정이에요. (今天四點取貨。)
- 你: 픽업 시간을 바꿀 수 있을까요? (可以改取貨時間嗎？)
- 직원: 네, 5시는 가능해요. (可以，五點可以。)
- 你: 그럼 5시로 부탁드려요. (那請改成五點。)
- 직원: 5시로 바꾸면 되나요? (改成五點可以嗎？)
- 你: 네, 5시가 좋아요. (對，五點可以。)
- 직원: 네, 5시로 바꿔 둘게요. (好的，我會改成五點。)
- 你: 감사합니다. 5시에 갈게요. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘 4시에 픽업 예정이에요. (今天四點取貨。) | 픽업 시간을 바꿀 수 있을까요? (可以改取貨時間嗎？) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t2 | 네, 5시는 가능해요. (可以，五點可以。) | 그럼 5시로 부탁드려요. (那請改成五點。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t3 | 5시로 바꾸면 되나요? (改成五點可以嗎？) | 네, 5시가 좋아요. (對，五點可以。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t4 | 네, 5시로 바꿔 둘게요. (好的，我會改成五點。) | 감사합니다. 5시에 갈게요. (謝謝，我五點會去。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |

---

## a2:ko:a2_change_ticket_time - 표 시간 바꾸기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_change_ticket_time
- Setting: 기차역 매표소
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler asks to change a train ticket time at a ticket counter.
- Learner goal: Make a polite time-change request and confirm a simple alternative time.
- Support text: 매표소에서 표 시간을 바꾸고 싶어요. 새 시간을 짧게 확인해 보세요.

### Clean Dialogue Path

- 직원: 무엇을 도와드릴까요? (需要幫您什麼嗎？)
- 你: 표 시간을 바꾸고 싶어요. (我想改票的時間。)
- 직원: 오늘 3시 표로 바꿀 수 있어요. (可以改成今天 3 點的票。)
- 你: 네, 3시 표로 바꿔 주세요. (好，請改成 3 點的票。)
- 직원: 3시 출발 표로 변경해 드리면 맞으세요? (幫您改成 3 點出發的票，對嗎？)
- 你: 네, 3시 출발이 맞아요. (對，是 3 點出發。)
- 직원: 변경됐습니다. 3시에 타시면 돼요. (已經更改了。您 3 點搭乘即可。)
- 你: 감사합니다. 3시에 탈게요. (謝謝。我 3 點搭。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 무엇을 도와드릴까요? (需要幫您什麼嗎？) | 표 시간을 바꾸고 싶어요. (我想改票的時間。) | 1. 표가 어제였어요. (票是昨天的。) [wrong_time_past] - feedback: 現在要提出改時間的請求，不是說昨天。<br>2. 커피를 하나 주세요. (請給我一杯咖啡。) [wrong_scenario_cafe] - feedback: 這是咖啡店句子，不是改票時間。 | 先說你想改票的時間。 |  |
| t2 | 오늘 3시 표로 바꿀 수 있어요. (可以改成今天 3 點的票。) | 네, 3시 표로 바꿔 주세요. (好，請改成 3 點的票。) | 1. 3시에 방이 있어요? (3 點有房間嗎？) [wrong_scenario_hotel] - feedback: 방이 아니라 표 시간을 바꾸는 상황이에요.<br>2. 어제 3시에 탔어요. (我昨天 3 點搭了。) [wrong_time_past] - feedback: 직원이 오늘 가능한 시간을 말했어요. 지금 바꾸겠다고 말해야 해요. | 직원이 가능한 시간을 말했어요. 받아들일지 말해 보세요. | -로 바꾸다 = 改成<br>3시 표로 바꿀 수 있어요 表示可以改成 3 點的票。<br>3시 표로 = 改成 3 點的票<br>바꿀 수 있어요 = 可以改 |
| t3 | 3시 출발 표로 변경해 드리면 맞으세요? (幫您改成 3 點出發的票，對嗎？) | 네, 3시 출발이 맞아요. (對，是 3 點出發。) | 1. 아니요, 3시가 어제였어요. (不是，3 點是昨天。) [wrong_time_past] - feedback: 現在確認的是今天要改的新時間。<br>2. 환불 규정을 설명해 주세요. (請說明退款規定。) [forbidden_refund_rules] - feedback: 退款規定超出這個 A2 任務。現在只確認改票時間。 | 時間確認了，用短句確認。 |  |
| t4 | 변경됐습니다. 3시에 타시면 돼요. (已經更改了。您 3 點搭乘即可。) | 감사합니다. 3시에 탈게요. (謝謝。我 3 點搭。) | 1. 내일 커피를 마실게요. (我明天會喝咖啡。) [wrong_topic_plan] - feedback: 這不是改票情境的收尾。<br>2. 제 여권 번호는요? (我的護照號碼呢？) [forbidden_identity_detail] - feedback: 護照號碼不是這個低風險改時間任務需要的資訊。 | 服務完成了，禮貌收尾。 |  |

---

## a2:ko:a2_compare_two_menu_options - 메뉴 두 가지 비교하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_compare_two_menu_options
- Setting: 식당 카운터
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 메뉴 두 가지의 차이를 듣고, 원하는 쪽을 골라 확인해 보세요.
- Support text: 메뉴 두 가지의 차이를 듣고, 원하는 쪽을 골라 확인해 보세요.

### Clean Dialogue Path

- 호텔 직원: 오늘은 비빔밥과 국수 중에서 고르실 수 있어요. (今天可以在拌飯和麵之間選。)
- 你: 두 메뉴가 어떻게 달라요? (兩個菜單有什麼不同？)
- 호텔 직원: 비빔밥은 조금 맵고, 국수는 더 가벼워요. (拌飯有點辣，麵比較清爽。)
- 你: 국수가 더 가벼운 거죠? (麵比較清爽，對嗎？)
- 호텔 직원: 네, 국수가 덜 매워요. (對，麵比較不辣。)
- 你: 그럼 국수로 할게요. (那我選麵。)
- 호텔 직원: 좋아요. 국수 하나로 주문해 드릴게요. (好的，我幫您點一份麵。)
- 你: 감사합니다. 국수 하나 주세요. (謝謝，請給我一份麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘은 비빔밥과 국수 중에서 고르실 수 있어요. (今天可以在拌飯和麵之間選。) | 두 메뉴가 어떻게 달라요? (兩個菜單有什麼不同？) | 1. 테이블이 어디예요? (桌子在哪裡？) [wrong_detail_or_domain] - feedback: 자리를 묻는 말이라 메뉴 비교가 아니에요.<br>2. 환불해 주세요. (請退款。) [forbidden_or_wrong_domain] - feedback: 환불은 이 A2 과제 밖이에요. | 두 메뉴의 차이를 물어보세요. |  |
| t2 | 비빔밥은 조금 맵고, 국수는 더 가벼워요. (拌飯有點辣，麵比較清爽。) | 국수가 더 가벼운 거죠? (麵比較清爽，對嗎？) | 1. 비빔밥이 더 싼 거죠? (拌飯比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: 가격은 말하지 않았어요.<br>2. 기차가 더 빠른 거죠? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: 교통으로 주제가 바뀌었어요. | 들은 비교 정보를 확인하세요. |  |
| t3 | 네, 국수가 덜 매워요. (對，麵比較不辣。) | 그럼 국수로 할게요. (那我選麵。) | 1. 그럼 방을 바꿀게요. (那我換房間。) [wrong_detail_or_domain] - feedback: 호텔 상황으로 바뀌었어요.<br>2. 그럼 여권을 보여드릴게요. (那我出示護照。) [forbidden_or_wrong_domain] - feedback: 여권은 필요하지 않아요. | 선호에 맞는 메뉴를 고르세요. |  |
| t4 | 좋아요. 국수 하나로 주문해 드릴게요. (好的，我幫您點一份麵。) | 감사합니다. 국수 하나 주세요. (謝謝，請給我一份麵。) | 1. 경찰에 말할게요. (我要報警。) [wrong_detail_or_domain] - feedback: 너무 심각한 대응이에요.<br>2. 내일 병원에 갈게요. (我明天要去醫院。) [forbidden_or_wrong_domain] - feedback: 의료 상황이 아니에요. | 선택한 메뉴를 짧게 확인하세요. |  |

---

## a2:ko:a2_confirm_date_time_place - 날짜, 시간, 장소 확인하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_confirm_date_time_place
- Setting: 짧은 메시지 확인
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You confirm date, time, and place from a short message.
- Learner goal: Understand a short message and confirm the key details.
- Support text: 친구가 보낸 짧은 메시지를 보고 날짜, 시간, 장소를 확인해요.

### Clean Dialogue Path

- 친구: 메시지 확인했어요? (你確認訊息了嗎？)
- 你: 네, 내일 오전 10시 맞죠? (有，明天上午 10 點對吧？)
- 친구: 네. 장소는 어디였죠? (對。地點是哪裡來著？)
- 你: 시청 앞에서 만나요. (在市政府前面見。)
- 친구: 혹시 늦으면 메시지할게요. (如果我晚到，我會傳訊息。)
- 你: 네, 알겠어요. (好，我知道了。)
- 친구: 그럼 내일 봐요. (那明天見。)
- 你: 네, 내일 봐요. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 메시지 확인했어요? (你確認訊息了嗎？) | 네, 내일 오전 10시 맞죠? (有，明天上午 10 點對吧？) | 1. 네, 오늘 밤 10시 맞죠? (有，今天晚上 10 點對吧？) [wrong_date_time] - feedback: 訊息是 내일 오전 10시，明天上午 10 點，不是今天晚上。<br>2. 네, 메뉴 확인했어요. (有，我確認菜單了。) [wrong_scenario_menu] - feedback: 訊息不是菜單，是見面的時間地點。 | 訊息是：내일 오전 10시, 시청 앞에서 만나요。先確認日期和時間。 |  |
| t2 | 네. 장소는 어디였죠? (對。地點是哪裡來著？) | 시청 앞에서 만나요. (在市政府前面見。) | 1. 시청 안에서 만나요. (在市政府裡面見。) [wrong_place_relation] - feedback: 訊息是 앞에서，前面，不是 안에서，裡面。<br>2. 집에서 쉬려고 해요. (我打算在家休息。) [wrong_function_plan] - feedback: 這是在說自己的計畫，不是在確認地點。 | 訊息裡的 장소 是 시청 앞，市政府前面。 | N 앞에서 = 在 N 前面<br>앞에서 表示在某個地方前面進行動作或見面。<br>시청 앞에서 = 在市政府前面<br>카페 앞에서 = 在咖啡店前面 |
| t3 | 혹시 늦으면 메시지할게요. (如果我晚到，我會傳訊息。) | 네, 알겠어요. (好，我知道了。) | 1. 네, 늦었어요. (好，我遲到了。) [wrong_subject_status] - feedback: 他是在說如果他晚到會傳訊息，不是說你已經遲到。<br>2. 버스가 늦으면 연락할게요. (如果公車晚了，我會聯絡你。) [wrong_focus_self_delay] - feedback: 這句像是在說你自己的情況；他只是說如果他晚到會傳訊息。 | 혹시 늦으면 是如果晚到。可以回答知道了。 |  |
| t4 | 그럼 내일 봐요. (那明天見。) | 네, 내일 봐요. (好，明天見。) | 1. 네, 어제 봐요. (好，昨天見。) [wrong_time_expression] - feedback: 어제 봐요 不自然；要說 내일 봐요。<br>2. 계산서를 주세요. (請給我帳單。) [wrong_scenario_payment] - feedback: 這是付款情境。現在只是約明天見。 | 細節確認完了，自然收尾。 |  |

---

## a2:ko:a2_decline_with_reason - 간단한 이유로 정중히 거절하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_decline_with_reason
- Setting: 친구와 메시지
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 친구의 제안을 부드럽게 거절하고, 간단한 이유와 다음 기회를 말해 보세요.
- Support text: 친구의 초대를 거절해야 할 때, 짧고 따뜻하게 이유를 말해 보세요.

### Clean Dialogue Path

- 친구: 오늘 저녁에 영화 볼래요? (今天晚上要看電影嗎？)
- 你: 미안하지만 오늘은 어려워요. (不好意思，今天不太方便。)
- 친구: 괜찮아요. 무슨 일 있어요? (沒關係。有什麼事嗎？)
- 你: 오늘은 일이 조금 있어요. (今天有一點事。)
- 친구: 그럼 다음에 갈까요? (那下次去嗎？)
- 你: 네, 다음 주말은 괜찮아요. (好，下週末可以。)
- 친구: 좋아요. 그럼 다음 주말에 이야기해요. (好，那下週末再說。)
- 你: 고마워요. 다음 주말에 봐요. (謝謝，下週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘 저녁에 영화 볼래요? (今天晚上要看電影嗎？) | 미안하지만 오늘은 어려워요. (不好意思，今天不太方便。) | 1. 아니요, 싫어요. (不要，我不喜歡。) [too_blunt] - feedback: 친구에게 너무 차갑게 들려요.<br>2. 영수증을 다시 주세요. (請再給我收據。) [wrong_scenario_shop] - feedback: 상점 상황으로 바뀌었어요. | 친구가 초대했어요. 부드럽게 거절을 시작하세요. |  |
| t2 | 괜찮아요. 무슨 일 있어요? (沒關係。有什麼事嗎？) | 오늘은 일이 조금 있어요. (今天有一點事。) | 1. 큰 사고가 있었어요. (發生了大事故。) [too_heavy_or_sensitive] - feedback: 이 A2 과제에는 너무 무겁고 자세한 이유예요.<br>2. 어제 영화가 재미있었어요. (昨天的電影很好看。) [wrong_time_or_function] - feedback: 오늘 못 가는 이유가 아니에요. | 무거운 설명 말고 간단한 이유를 말하세요. |  |
| t3 | 그럼 다음에 갈까요? (那下次去嗎？) | 네, 다음 주말은 괜찮아요. (好，下週末可以。) | 1. 아니요, 다시 묻지 마세요. (不要，不要再問我。) [too_cold] - feedback: 친구 관계를 유지하기 어려운 말이에요.<br>2. 네, 방을 바꿀게요. (好，我要換房間。) [wrong_scenario_hotel] - feedback: 호텔 상황이 아니에요. | 관계를 유지하면서 다음 기회를 제안하세요. |  |
| t4 | 좋아요. 그럼 다음 주말에 이야기해요. (好，那下週末再說。) | 고마워요. 다음 주말에 봐요. (謝謝，下週末見。) | 1. 지금 바로 결제할게요. (我現在馬上付款。) [wrong_scenario_payment] - feedback: 결제 상황이 아니에요.<br>2. 그럼 오늘 밤에 꼭 갈게요. (那我今晚一定去。) [contradicts_decline] - feedback: 처음에 오늘은 어렵다고 했어요. | 따뜻하게 고마움을 전하며 마무리하세요. |  |

---

## a2:ko:a2_describe_weekend_activity - 주말에 한 일 말하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_describe_weekend_activity
- Setting: 친구와 월요일 대화
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 주말에 한 일을 한두 문장으로 짧게 말해 보세요.
- Support text: 친구가 주말 이야기를 물어봐요. 짧은 과거 표현으로 답해 보세요.

### Clean Dialogue Path

- 친구: 주말에 뭐 했어요? (週末做了什麼？)
- 你: 친구를 만나서 점심을 먹었어요. (我見了朋友，吃了午餐。)
- 친구: 어디에서 만났어요? (在哪裡見面？)
- 你: 집 근처 카페에서 만났어요. (在家附近的咖啡店見面。)
- 친구: 좋았어요? (好玩嗎？)
- 你: 네, 조용하고 좋았어요. (嗯，很安靜，也很好。)
- 친구: 좋네요. 다음에는 저도 같이 가요. (不錯。下次我也一起去。)
- 你: 좋아요. 다음에 같이 가요. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 주말에 뭐 했어요? (週末做了什麼？) | 친구를 만나서 점심을 먹었어요. (我見了朋友，吃了午餐。) | 1. 내일 친구를 만날 거예요. (我明天要見朋友。) [wrong_time_future] - feedback: 주말에 이미 한 일을 묻고 있어요.<br>2. 몇 번 플랫폼으로 가요? (要去幾號月台？) [wrong_scenario_transport] - feedback: 교통 상황이 아니에요. | 주말에 한 일을 짧게 말하세요. |  |
| t2 | 어디에서 만났어요? (在哪裡見面？) | 집 근처 카페에서 만났어요. (在家附近的咖啡店見面。) | 1. 카페에서 만날까요? (要在咖啡店見嗎？) [wrong_function_invite] - feedback: 이미 지난 일을 말하는 중이에요.<br>2. 방이 너무 추웠어요. (房間太冷了。) [wrong_scenario_hotel] - feedback: 호텔 문제 상황이 아니에요. | 장소를 짧게 말하세요. |  |
| t3 | 좋았어요? (好玩嗎？) | 네, 조용하고 좋았어요. (嗯，很安靜，也很好。) | 1. 그래서 사회 문제에 대해 생각했어요. (所以我思考了社會問題。) [too_advanced_or_abstract] - feedback: A2 주말 대화에는 너무 추상적이에요.<br>2. 아니요, 환불하고 싶어요. (不，我想退款。) [wrong_scenario_refund] - feedback: 환불 상황이 아니에요. | 긴 감상 말고 짧게 느낌을 말하세요. |  |
| t4 | 좋네요. 다음에는 저도 같이 가요. (不錯。下次我也一起去。) | 좋아요. 다음에 같이 가요. (好，下次一起去。) | 1. 다음 역에서 내려요. (下一站下車。) [wrong_scenario_transport] - feedback: 교통 안내가 아니에요.<br>2. 신분증을 보여드릴게요. (我會出示身分證。) [wrong_scenario_document] - feedback: 서류 상황이 아니에요. | 친구의 말에 자연스럽게 답하세요. |  |

---

## a2:ko:a2_exchange_wrong_item - 잘못 받은 물건 바꾸기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_exchange_wrong_item
- Setting: 가게 카운터
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 주문한 것과 다른 물건을 받았을 때 정중하게 바꿔 달라고 해 보세요.
- Support text: 주문한 것과 다른 물건을 받았을 때 정중하게 바꿔 달라고 해 보세요.

### Clean Dialogue Path

- 호텔 직원: 도와드릴까요? (需要幫忙嗎？)
- 你: 제가 주문한 건 작은 컵인데 큰 컵을 받았어요. (我訂的是小杯，但拿到大杯。)
- 호텔 직원: 확인해 보겠습니다. 영수증을 보여 주시겠어요? (我確認一下。可以給我看收據嗎？)
- 你: 네, 여기 영수증이 있어요. (好的，這是收據。)
- 호텔 직원: 맞네요. 작은 컵으로 바로 바꿔 드릴게요. (沒錯。我馬上幫您換成小杯。)
- 你: 작은 컵으로 바꿔 주시는 거죠? (您會幫我換成小杯，對嗎？)
- 호텔 직원: 네, 잠시만 기다려 주세요. (好的，請稍等一下。)
- 你: 감사합니다. 여기서 기다릴게요. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 도와드릴까요? (需要幫忙嗎？) | 제가 주문한 건 작은 컵인데 큰 컵을 받았어요. (我訂的是小杯，但拿到大杯。) | 1. 작은 컵은 어디에서 만들어요? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: 제조 장소를 묻는 말이 아니에요.<br>2. 가격을 깎아 주세요. (請降價。) [forbidden_or_wrong_domain] - feedback: 가격 흥정은 이 과제 밖이에요. | 받은 물건이 주문과 다르다고 말하세요. |  |
| t2 | 확인해 보겠습니다. 영수증을 보여 주시겠어요? (我確認一下。可以給我看收據嗎？) | 네, 여기 영수증이 있어요. (好的，這是收據。) | 1. 네, 여기 여권이 있어요. (好的，這是護照。) [wrong_detail_or_domain] - feedback: 여권은 필요하지 않아요.<br>2. 네, 내일 기차를 탈게요. (好的，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: 교통 상황이 아니에요. | 간단한 영수증 확인에 답하세요. |  |
| t3 | 맞네요. 작은 컵으로 바로 바꿔 드릴게요. (沒錯。我馬上幫您換成小杯。) | 작은 컵으로 바꿔 주시는 거죠? (您會幫我換成小杯，對嗎？) | 1. 환불 규정을 설명해 주세요. (請說明退款規則。) [wrong_detail_or_domain] - feedback: 환불 규정은 너무 넓어요.<br>2. 경찰에 신고할게요. (我要報警。) [forbidden_or_wrong_domain] - feedback: 너무 심각한 대응이에요. | 교환 내용을 확인하세요. |  |
| t4 | 네, 잠시만 기다려 주세요. (好的，請稍等一下。) | 감사합니다. 여기서 기다릴게요. (謝謝，我在這裡等。) | 1. 병원에 가야 해요. (我需要去醫院。) [wrong_detail_or_domain] - feedback: 의료 상황이 아니에요.<br>2. 방을 바꾸고 싶어요. (我想換房。) [forbidden_or_wrong_domain] - feedback: 호텔 상황으로 바뀌었어요. | 짧게 기다리겠다고 말하세요. |  |

---

## a2:ko:a2_explain_simple_delay_reason - 조금 늦는 이유 말하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: 약속 장소로 가는 길
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You are running a little late and need to explain the reason.
- Learner goal: Apologize, give one simple reason, and estimate the delay.
- Support text: 친구가 어디쯤인지 물어봐요. 늦는 이유를 짧게 말해 보세요.

### Clean Dialogue Path

- 친구: 어디쯤이에요? 거의 다 왔어요? (你大概到哪了？快到了嗎？)
- 你: 미안해요, 조금 늦을 것 같아요. (不好意思，我可能會晚一點。)
- 친구: 왜요? 무슨 일 있어요? (為什麼？發生什麼事了嗎？)
- 你: 버스가 늦어서요. (因為公車晚了。)
- 친구: 얼마나 늦을 것 같아요? (你大概會晚多久？)
- 你: 10분 정도 늦을 것 같아요. (我可能會晚 10 分鐘左右。)
- 친구: 알겠어요. 천천히 오세요. (知道了。慢慢來。)
- 你: 고마워요. 곧 갈게요. (謝謝。我很快過去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 어디쯤이에요? 거의 다 왔어요? (你大概到哪了？快到了嗎？) | 미안해요, 조금 늦을 것 같아요. (不好意思，我可能會晚一點。) | 1. 네, 어제 도착했어요. (對，我昨天到了。) [wrong_time_past] - feedback: 他問現在到哪，不是昨天。<br>2. 메뉴를 추천해 주세요. (請推薦菜單。) [wrong_scenario_restaurant] - feedback: 這是餐廳用語。現在你要說明自己會晚。 | 他在確認你到哪了。先說抱歉，再說會晚一點。 |  |
| t2 | 왜요? 무슨 일 있어요? (為什麼？發生什麼事了嗎？) | 버스가 늦어서요. (因為公車晚了。) | 1. 버스를 좋아해서요. (因為我喜歡公車。) [wrong_reason_semantics] - feedback: 這個理由不符合「為什麼會晚」。<br>2. 버스가 어디예요? (公車在哪裡？) [wrong_function_location_question] - feedback: 他問原因，不是在問公車在哪裡。 | 可以用 -아서/어서 說簡單原因。不要講太長。 | -아서/어서 = 因為...<br>原因接 -아서/어서，後面接結果。버스가 늦어서 = 因為公車晚了。<br>버스가 늦어서 = 因為公車晚了<br>길이 막혀서 = 因為塞車 |
| t3 | 얼마나 늦을 것 같아요? (你大概會晚多久？) | 10분 정도 늦을 것 같아요. (我可能會晚 10 分鐘左右。) | 1. 10번 버스가 좋아요. (10 號公車很好。) [wrong_entity_bus_number] - feedback: 10번 是 10 號，這裡要說 10분，10 分鐘。<br>2. 늦지 않았어요. (我沒有晚。) [contradicts_context] - feedback: 前面已經說會晚一點，這裡要估時間。 | 用 10분 정도 說大約 10 分鐘。 |  |
| t4 | 알겠어요. 천천히 오세요. (知道了。慢慢來。) | 고마워요. 곧 갈게요. (謝謝。我很快過去。) | 1. 예약했어요. (我有預約。) [wrong_scenario_hotel] - feedback: 這是飯店或預約情境，不是遲到說明。<br>2. 계산해 주세요. (請結帳。) [wrong_scenario_payment] - feedback: 這是餐廳結帳用語。 | 朋友接受了，簡短道謝就好。 |  |

---

## a2:ko:a2_fill_simple_form_help - 간단한 양식 도움 요청하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_fill_simple_form_help
- Setting: 접수대
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 민감하지 않은 간단한 항목을 어디에 쓰는지 물어보세요.
- Support text: 민감하지 않은 간단한 항목을 어디에 쓰는지 물어보세요.

### Clean Dialogue Path

- 직원: 이 양식을 먼저 작성해 주세요. (請先填這張表。)
- 你: 이 칸에는 무엇을 쓰면 돼요? (這一欄要填什麼？)
- 직원: 여기에는 이름을 쓰시면 돼요. (這裡請填姓名。)
- 你: 이름만 쓰면 되나요? (只填姓名就可以嗎？)
- 직원: 네, 전화번호는 아래 칸이에요. (對，電話在下面那一欄。)
- 你: 알겠습니다. 아래에 쓸게요. (知道了，我會寫在下面。)
- 직원: 네, 이렇게 쓰면 충분해요. (對，這樣寫就夠了。)
- 你: 감사합니다. 다 썼어요. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 이 양식을 먼저 작성해 주세요. (請先填這張表。) | 이 칸에는 무엇을 쓰면 돼요? (這一欄要填什麼？) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t2 | 여기에는 이름을 쓰시면 돼요. (這裡請填姓名。) | 이름만 쓰면 되나요? (只填姓名就可以嗎？) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t3 | 네, 전화번호는 아래 칸이에요. (對，電話在下面那一欄。) | 알겠습니다. 아래에 쓸게요. (知道了，我會寫在下面。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t4 | 네, 이렇게 쓰면 충분해요. (對，這樣寫就夠了。) | 감사합니다. 다 썼어요. (謝謝，我填好了。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |

---

## a2:ko:a2_invite_friend_activity - 친구에게 활동 제안하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_invite_friend_activity
- Setting: 친구와 메시지
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 친구에게 평범한 활동을 제안하고, 시간까지 짧게 정해 보세요.
- Support text: 친구에게 산책이나 카페 같은 간단한 활동을 자연스럽게 제안해 보세요.

### Clean Dialogue Path

- 친구: 오늘 오후에 같이 산책할래요? (今天下午要一起散步嗎？)
- 你: 좋아요. 같이 산책해요. (좋아요. 같이 산책해요.)
- 친구: 좋아요. 몇 시에 만날까요? (好啊。幾點見？)
- 你: 세 시쯤 어때요? (三點左右怎麼樣？)
- 친구: 그럼 카페 앞에서 만나요? (那在咖啡店前面見嗎？)
- 你: 네, 카페 앞에서 만나요. (好，在咖啡店前面見。)
- 친구: 좋아요. 이따 봐요. (好，等一下見。)
- 你: 네, 이따 봐요. (네, 이따 봐요.)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘 오후에 같이 산책할래요? (今天下午要一起散步嗎？) | 좋아요. 같이 산책해요. (좋아요. 같이 산책해요.) | 1. 오늘 오후에 방을 바꿔 주세요. (今天下午請幫我換房間。) [wrong_scenario_service] - feedback: 호텔 서비스 요청이라 친구 초대가 아니에요.<br>2. 오늘 꼭 와야 해요. (你今天一定要來。) [too_pressuring] - feedback: 친구에게 부담을 주는 말이에요. | 친구의 제안에 자연스럽게 답하세요. |  |
| t2 | 좋아요. 몇 시에 만날까요? (好啊。幾點見？) | 세 시쯤 어때요? (三點左右怎麼樣？) | 1. 어제 세 시에 갔어요. (我昨天三點去了。) [wrong_time_past] - feedback: 지금은 약속 시간을 정하는 중이에요.<br>2. 얼마예요? (多少錢？) [wrong_function_price] - feedback: 가격을 묻는 상황이 아니에요. | 간단한 시간을 제안하세요. |  |
| t3 | 그럼 카페 앞에서 만나요? (那在咖啡店前面見嗎？) | 네, 카페 앞에서 만나요. (好，在咖啡店前面見。) | 1. 네, 기차를 갈아타요. (好，換火車。) [wrong_scenario_transport] - feedback: 교통 환승 이야기가 아니에요.<br>2. 아니요, 환불해 주세요. (不，請退款。) [wrong_scenario_refund] - feedback: 환불은 이 친구 약속 상황 밖이에요. | 만날 장소를 확인하세요. |  |
| t4 | 좋아요. 이따 봐요. (好，等一下見。) | 네, 이따 봐요. (네, 이따 봐요.) | 1. 죄송하지만 예약을 취소할게요. (不好意思，我要取消預約。) [wrong_register_service] - feedback: 예약 취소 표현이라 친구 약속 마무리에 맞지 않아요.<br>2. 이건 너무 비싸요. (這太貴了。) [wrong_detail_price] - feedback: 가격 이야기는 나오지 않았어요. | 약속을 따뜻하게 마무리하세요. |  |

---

## a2:ko:a2_lost_item_followup_message - 잃어버린 물건 문의하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_lost_item_followup_message
- Setting: 분실물 메시지
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 평범한 분실물에 대해 짧게 문의하고 특징을 말해 보세요.
- Support text: 평범한 분실물에 대해 짧게 문의하고 특징을 말해 보세요.

### Clean Dialogue Path

- 직원: 무엇을 찾고 계세요? (您在找什麼？)
- 你: 검은 우산을 두고 간 것 같아요. (我好像把黑色雨傘忘在那裡。)
- 직원: 어디에 두셨나요? (放在哪裡？)
- 你: 카페 의자 옆에 둔 것 같아요. (好像放在咖啡店椅子旁邊。)
- 직원: 이름과 연락처를 남겨 주세요. (請留下姓名和聯絡方式。)
- 你: 네, 이름과 전화번호를 남길게요. (好，我會留下姓名和電話。)
- 직원: 확인하고 연락드릴게요. (我確認後會聯絡您。)
- 你: 감사합니다. 연락 기다릴게요. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 무엇을 찾고 계세요? (您在找什麼？) | 검은 우산을 두고 간 것 같아요. (我好像把黑色雨傘忘在那裡。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t2 | 어디에 두셨나요? (放在哪裡？) | 카페 의자 옆에 둔 것 같아요. (好像放在咖啡店椅子旁邊。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t3 | 이름과 연락처를 남겨 주세요. (請留下姓名和聯絡方式。) | 네, 이름과 전화번호를 남길게요. (好，我會留下姓名和電話。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |
| t4 | 확인하고 연락드릴게요. (我確認後會聯絡您。) | 감사합니다. 연락 기다릴게요. (謝謝，我等您聯絡。) | 1. 비밀번호를 알려드릴게요. (我會告訴你密碼。) [forbidden_sensitive] - feedback: 비밀번호는 이 과제에서 다루지 않아요.<br>2. 환불해 주세요. (請退款。) [wrong_dispute_domain] - feedback: 환불이나 분쟁 상황이 아니에요. | 필요한 정보만 짧게 확인하세요. |  |

---

## a2:ko:a2_luggage_storage_pickup - 짐 맡기고 찾는 시간 확인하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_luggage_storage_pickup
- Setting: 역 안 짐 보관소
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler stores luggage and confirms pickup time with a simple receipt.
- Learner goal: Ask to store luggage and confirm pickup time/receipt.
- Support text: 역 보관소에서 짐을 맡기고, 언제 찾을 수 있는지 확인해 보세요.

### Clean Dialogue Path

- 직원: 짐 보관 도와드릴까요? (需要幫您寄放行李嗎？)
- 你: 네, 이 가방을 맡기고 싶어요. (是的，我想寄放這個包包。)
- 직원: 오늘 저녁 7시 전까지 찾으시면 돼요. (今天晚上 7 點前來取就可以。)
- 你: 저녁 7시 전까지 찾으면 되죠? (晚上 7 點前來取就可以，對吧？)
- 직원: 찾으실 때 이 보관증을 보여 주세요. (取件時請出示這張寄物單。)
- 你: 네, 찾을 때 보관증을 보여 드릴게요. (好，取件時我會出示寄物單。)
- 직원: 네, 7시 전까지 오시면 됩니다. (好的，7 點前過來即可。)
- 你: 감사합니다. 7시 전에 올게요. (謝謝。我會在 7 點前來。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 짐 보관 도와드릴까요? (需要幫您寄放行李嗎？) | 네, 이 가방을 맡기고 싶어요. (是的，我想寄放這個包包。) | 1. 이 가방을 어제 찾았어요. (我昨天取了這個包包。) [wrong_time_past] - feedback: 現在是要寄放，不是說昨天取件。<br>2. 플랫폼은 어디예요? (月台在哪裡？) [wrong_scenario_platform] - feedback: 這是在寄放行李，不是在問月台。 | 先說你想寄放這個行李。 |  |
| t2 | 오늘 저녁 7시 전까지 찾으시면 돼요. (今天晚上 7 點前來取就可以。) | 저녁 7시 전까지 찾으면 되죠? (晚上 7 點前來取就可以，對吧？) | 1. 아침 7시에 맡기면 되죠? (早上 7 點寄放就可以，對吧？) [wrong_time_pickup] - feedback: 직원은 저녁 7시 전까지 찾으라고 했어요.<br>2. 환불은 어디서 받아요? (退款在哪裡拿？) [forbidden_refund_domain] - feedback: 退款不是這個寄物取件練習的內容。 | 聽取件時間：今天晚上 7 點前。 | -전까지 = 之前<br>7시 전까지 means by/before 7 o'clock.<br>7시 전까지 = 7 點前<br>찾으시면 돼요 = 來取就可以 |
| t3 | 찾으실 때 이 보관증을 보여 주세요. (取件時請出示這張寄物單。) | 네, 찾을 때 보관증을 보여 드릴게요. (好，取件時我會出示寄物單。) | 1. 보관증을 버려도 돼요? (寄物單可以丟掉嗎？) [wrong_instruction] - feedback: 직원은 보관증을 보여 달라고 했어요. 버리면 안 돼요.<br>2. 여권을 보여 드릴게요. (我會出示護照。) [forbidden_identity_detail] - feedback: 이 상황에서는 여권이 아니라 보관증만 확인해요. | 重點是取件時要出示 보관증。 |  |
| t4 | 네, 7시 전까지 오시면 됩니다. (好的，7 點前過來即可。) | 감사합니다. 7시 전에 올게요. (謝謝。我會在 7 點前來。) | 1. 기차가 10분 늦어요. (火車晚 10 分鐘。) [wrong_scenario_delay] - feedback: 這是延誤廣播情境，不是寄放行李收尾。<br>2. 잃어버린 짐을 신고하고 싶어요. (我想申報遺失行李。) [forbidden_lost_property_claim] - feedback: 遺失申報超出這個低風險寄放/取件任務。 | 確認完時間和寄物單，用禮貌句收尾。 |  |

---

## a2:ko:a2_make_simple_plan_sequence - 두 단계 계획 세우기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: 친구와 주말 계획 통화
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source_after_gate"}
- Learner goal: 친구와 두 단계 계획을 세우고, 먼저/그다음 순서를 확인해 보세요.
- Support text: 친구와 간단한 계획을 만들어요. 먼저 할 일과 그다음 할 일을 짧게 말해 보세요.

### Clean Dialogue Path

- 친구: 토요일에 먼저 카페에서 만날까요? (星期六先在咖啡店見嗎？)
- 你: 네, 먼저 카페에서 만나요. (好，先在咖啡店見。)
- 친구: 그다음에는 공원에 갈까요? (接著去公園嗎？)
- 你: 좋아요. 그다음에 공원에 가요. (好。接著去公園。)
- 친구: 그럼 먼저 카페, 그다음 공원이죠? (那就是先咖啡店，接著公園，對嗎？)
- 你: 네, 먼저 카페, 그다음 공원이에요. (對，先咖啡店，接著公園。)
- 친구: 좋아요. 토요일 두 시에 만나요. (好，星期六兩點見。)
- 你: 네, 토요일 두 시에 봐요. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 토요일에 먼저 카페에서 만날까요? (星期六先在咖啡店見嗎？) | 네, 먼저 카페에서 만나요. (好，先在咖啡店見。) | 1. 네, 먼저 환불해 주세요. (好，請先退款。) [wrong_scenario_refund] - feedback: 친구와 계획을 세우는 상황이에요.<br>2. 아니요, 절대 안 돼요. (不，絕對不行。) [too_blunt] - feedback: 친구 계획 대화에서 너무 딱딱해요. | 첫 번째 단계를 제안하세요. |  |
| t2 | 그다음에는 공원에 갈까요? (接著去公園嗎？) | 좋아요. 그다음에 공원에 가요. (好。接著去公園。) | 1. 공원은 어제 갔어요. (公園昨天去了。) [wrong_time_past] - feedback: 지금은 이번 토요일 계획을 정하고 있어요.<br>2. 공항에서 수하물을 찾을게요. (我會在機場取行李。) [wrong_scenario_transport] - feedback: 수하물 상황이 아니에요. | 두 번째 단계를 확인하세요. |  |
| t3 | 그럼 먼저 카페, 그다음 공원이죠? (那就是先咖啡店，接著公園，對嗎？) | 네, 먼저 카페, 그다음 공원이에요. (對，先咖啡店，接著公園。) | 1. 네, 먼저 공항, 그다음 호텔이에요. (對，先機場，接著飯店。) [wrong_details] - feedback: 장소가 바뀌었어요.<br>2. 아니요, 세 곳 더 가야 해요. (不，還要再去三個地方。) [too_complex] - feedback: 이 과제는 두 단계 계획만 다뤄요. | 순서를 짧게 다시 말하세요. |  |
| t4 | 좋아요. 토요일 두 시에 만나요. (好，星期六兩點見。) | 네, 토요일 두 시에 봐요. (好，星期六兩點見。) | 1. 네, 오늘 아침에 봤어요. (好，今天早上見過了。) [wrong_time_past] - feedback: 앞으로 만날 시간을 확인해야 해요.<br>2. 네, 의사에게 물어볼게요. (好，我會問醫生。) [forbidden_or_wrong_domain] - feedback: 의료 상황이 아니에요. | 시간까지 확인하고 마무리하세요. |  |

---

## a2:ko:a2_plan_tomorrow_morning - 내일 아침 계획 말하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: 친구와 메시지 후 통화
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A friend asks what you plan to do tomorrow morning.
- Learner goal: Say a near-future plan with one simple sequence.
- Support text: 친구가 내일 아침 계획을 물어봐요. 무엇을 먼저 할지 짧게 말해 보세요.

### Clean Dialogue Path

- 친구: 내일 아침에는 뭐 할 거예요? (明天早上你要做什麼？)
- 你: 은행에 가려고 해요. (我打算去銀行。)
- 친구: 그다음에는요? (那之後呢？)
- 你: 그다음에 카페에서 공부하려고 해요. (接著我打算在咖啡店讀書。)
- 친구: 그럼 점심 전에 시간 있어요? (那午餐前你有時間嗎？)
- 你: 네, 11시쯤 괜찮아요. (可以，11 點左右可以。)
- 친구: 좋아요. 그럼 11시에 연락할게요. (好。那我 11 點聯絡你。)
- 你: 네, 내일 봐요. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 내일 아침에는 뭐 할 거예요? (明天早上你要做什麼？) | 은행에 가려고 해요. (我打算去銀行。) | 1. 어제 은행에 갔어요. (我昨天去了銀行。) [wrong_time_past] - feedback: 他問明天早上，不是昨天。<br>2. 은행이 어디예요? (銀行在哪裡？) [wrong_function_location_question] - feedback: 這是在問地點，不是在說你的計畫。 | 他問的是明天早上的計畫。可以用 -려고 해요 說「打算」。 |  |
| t2 | 그다음에는요? (那之後呢？) | 그다음에 카페에서 공부하려고 해요. (接著我打算在咖啡店讀書。) | 1. 카페에서 만나요. (在咖啡店見。) [wrong_function_meeting_place] - feedback: 這句可以用來約地點，但他問的是你接下來要做什麼。<br>2. 지금 공부했어요. (我現在讀過了。) [wrong_time_aspect] - feedback: 要說明天接下來的計畫，用 -려고 해요 更合適。 | 그다음에는요? 是問「接下來呢？」用一句話接第二步。 | -려고 해요 = 打算<br>動詞接 -려고 해요，可以說接下來打算做什麼。<br>가려고 해요 = 打算去<br>공부하려고 해요 = 打算讀書 |
| t3 | 그럼 점심 전에 시간 있어요? (那午餐前你有時間嗎？) | 네, 11시쯤 괜찮아요. (可以，11 點左右可以。) | 1. 아니요, 어제 괜찮았어요. (不，昨天可以。) [wrong_time_past] - feedback: 他問明天午餐前，不是昨天。<br>2. 은행은 11시에 문을 닫아요? (銀行 11 點關門嗎？) [wrong_focus_bank_hours] - feedback: 現在他在問你有沒有時間。 | 점심 전에 是午餐前。可以說大概幾點之後有空。 |  |
| t4 | 좋아요. 그럼 11시에 연락할게요. (好。那我 11 點聯絡你。) | 네, 내일 봐요. (好，明天見。) | 1. 다시 주문할게요. (我會再點一次。) [wrong_scenario_ordering] - feedback: 這是點餐情境，不是約明天。<br>2. 방을 바꾸고 싶어요. (我想換房間。) [wrong_scenario_hotel] - feedback: 這是飯店情境。現在只要確認明天見。 | 計畫確認了，用短句收尾就好。 |  |

---

## a2:ko:a2_report_room_problem - 객실 문제 말하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_report_room_problem
- Setting: 호텔 프런트
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm what hotel staff will do next.
- Support text: 객실에 작은 문제가 있을 때 짧게 설명하고, 직원의 다음 조치를 확인해 보세요.

### Clean Dialogue Path

- 호텔 직원: 안녕하세요. 무엇을 도와드릴까요? (您好，我可以怎麼幫您？)
- 你: 방에 수건이 없어요. 도와주실 수 있나요? (房間裡沒有毛巾。可以幫忙嗎？)
- 호텔 직원: 네, 바로 수건을 가져다드릴게요. (好的，我們馬上拿毛巾過去。)
- 你: 수건을 가져다주시는 거죠? (會拿毛巾過來，對嗎？)
- 호텔 직원: 십 분 정도 걸릴 거예요. (大約需要十分鐘。)
- 你: 십 분 정도 걸리는군요. (大約需要十分鐘。)
- 호텔 직원: 네, 객실로 보내드리겠습니다. (好的，我們會送到房間。)
- 你: 감사합니다. 방에서 기다릴게요. (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 안녕하세요. 무엇을 도와드릴까요? (您好，我可以怎麼幫您？) | 방에 수건이 없어요. 도와주실 수 있나요? (房間裡沒有毛巾。可以幫忙嗎？) | 1. 방을 예약하고 싶어요. (我想訂房。) [wrong_detail_or_domain] - feedback: 지금은 예약이 아니라 객실 문제를 말해야 해요.<br>2. 보상해 주세요. (請賠償我。) [forbidden_or_wrong_domain] - feedback: 보상 요구는 이 A2 상황의 범위를 넘어가요. | 객실 문제를 짧게 말해요. |  |
| t2 | 네, 바로 수건을 가져다드릴게요. (好的，我們馬上拿毛巾過去。) | 수건을 가져다주시는 거죠? (會拿毛巾過來，對嗎？) | 1. 방을 바꿔 주시는 거죠? (是要幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: 직원은 방을 바꾸는 것이 아니라 수건을 가져다준다고 했어요.<br>2. 기차가 늦는다는 거죠? (是火車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: 이건 교통 안내가 아니라 호텔 서비스 상황이에요. | 직원이 해 줄 일을 확인해요. | -아/어 드릴게요 = 我會幫您...<br>이 상황에서 자주 쓰는 A2 표현입니다.<br>수건을 가져다드릴게요 = 會拿毛巾過去 |
| t3 | 십 분 정도 걸릴 거예요. (大約需要十分鐘。) | 십 분 정도 걸리는군요. (大約需要十分鐘。) | 1. 한 시간 뒤에 체크아웃해요. (一小時後退房。) [wrong_detail_or_domain] - feedback: 체크아웃 시간이 아니라 수건이 오는 시간을 말하고 있어요.<br>2. 제가 병원에 가야 해요. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: 의료 내용은 이 과제 범위가 아니에요. | 걸리는 시간을 확인해요. |  |
| t4 | 네, 객실로 보내드리겠습니다. (好的，我們會送到房間。) | 감사합니다. 방에서 기다릴게요. (謝謝。我在房間等。) | 1. 환불 규정을 알려 주세요. (請告訴我退款規則。) [wrong_detail_or_domain] - feedback: 환불 규정은 이 간단한 객실 문제 범위를 넘어가요.<br>2. 커피 두 잔 주세요. (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: 식당 주문이 아니라 호텔 객실 서비스 상황이에요. | 감사 인사로 마무리해요. |  |

---

## a2:ko:a2_request_room_change - 객실 변경 요청하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_request_room_change
- Setting: 호텔 프런트
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: 간단한 이유를 말하며 방을 바꿀 수 있는지 묻고, 가능한 대안을 확인해 보세요.

### Clean Dialogue Path

- 호텔 직원: 네, 무엇을 도와드릴까요? (好的，我可以怎麼幫您？)
- 你: 방이 조금 시끄러워서 바꿀 수 있을까요? (房間有點吵，可以換房嗎？)
- 호텔 직원: 확인해 보니 다른 방 하나가 있습니다. (我確認了一下，有另一間房。)
- 你: 다른 방이 하나 있군요. (有另一間房，對嗎？)
- 호텔 직원: 삼십 분 뒤에 새 방으로 옮기실 수 있어요. (三十分鐘後可以搬到新房間。)
- 你: 삼십 분 뒤에 옮길 수 있네요. (三十分鐘後可以搬，對嗎？)
- 호텔 직원: 준비되면 새 방 키를 드리겠습니다. (準備好後，我們會給您新房卡。)
- 你: 네, 준비되면 새 키를 받을게요. (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 네, 무엇을 도와드릴까요? (好的，我可以怎麼幫您？) | 방이 조금 시끄러워서 바꿀 수 있을까요? (房間有點吵，可以換房嗎？) | 1. 식당 자리를 바꿀 수 있을까요? (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: 식당 자리가 아니라 호텔 객실을 바꾸는 상황이에요.<br>2. 정식으로 신고하겠습니다. (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: 공식 신고나 법적 절차는 이 A2 과제 범위를 넘어가요. | 방 변경과 이유를 짧게 말해요. |  |
| t2 | 확인해 보니 다른 방 하나가 있습니다. (我確認了一下，有另一間房。) | 다른 방이 하나 있군요. (有另一間房，對嗎？) | 1. 다른 표가 하나 있군요. (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: 표가 아니라 객실 이야기예요.<br>2. 보상도 같이 받을 수 있나요? (也可以一起得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: 보상 요청은 이 간단한 객실 변경 과제를 넘어가요. | 가능한 대안을 들어요. | -아서/어서 = 因為...所以...<br>이 상황에서 자주 쓰는 A2 표현입니다.<br>다른 방 하나 = 另一間房 |
| t3 | 삼십 분 뒤에 새 방으로 옮기실 수 있어요. (三十分鐘後可以搬到新房間。) | 삼십 분 뒤에 옮길 수 있네요. (三十分鐘後可以搬，對嗎？) | 1. 세 시간 뒤에 체크아웃하네요. (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: 직원은 삼십 분 뒤에 방을 옮길 수 있다고 했어요.<br>2. 병원에 가야 해서 옮길게요. (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: 의료 이유는 이 과제 범위에 넣지 않아요. | 이동 시간을 확인해요. |  |
| t4 | 준비되면 새 방 키를 드리겠습니다. (準備好後，我們會給您新房卡。) | 네, 준비되면 새 키를 받을게요. (好，準備好後我拿新房卡。) | 1. 아니요, 기차 시간을 바꿀게요. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: 교통 티켓 변경이 아니라 객실 변경 상황이에요.<br>2. 경찰에 바로 말할게요. (我會直接告訴警察。) [forbidden_or_wrong_domain] - feedback: 경찰 절차는 이 A2 과제 범위를 넘어가요. | 대안을 받아들이고 마무리해요. |  |

---

## a2:ko:a2_reschedule_meeting_time - 약속 시간 바꾸기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_reschedule_meeting_time
- Setting: 친구와 약속 조정
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You need to ask a friend to move a meeting time.
- Learner goal: Ask to change a time and confirm the new time.
- Support text: 오늘 약속 시간이 조금 어려워졌어요. 다른 시간으로 바꿀 수 있는지 물어보세요.

### Clean Dialogue Path

- 친구: 오늘 3시에 보는 거 맞죠? (今天 3 點見，對吧？)
- 你: 미안한데 시간을 바꿀 수 있을까요? (不好意思，可以改時間嗎？)
- 친구: 괜찮아요. 몇 시가 좋아요? (可以。幾點比較好？)
- 你: 4시로 바꿀 수 있을까요? (可以改到 4 點嗎？)
- 친구: 네, 4시 괜찮아요. (好，4 點可以。)
- 你: 그럼 4시에 봐요. (那 4 點見。)
- 친구: 좋아요. 이따 봐요. (好，等一下見。)
- 你: 네, 이따 봐요. (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 오늘 3시에 보는 거 맞죠? (今天 3 點見，對吧？) | 미안한데 시간을 바꿀 수 있을까요? (不好意思，可以改時間嗎？) | 1. 네, 어제 봤어요. (對，昨天見過了。) [wrong_time_past] - feedback: 他在確認今天 3 點，不是在說昨天。<br>2. 카드로 계산할게요. (我用卡結帳。) [wrong_scenario_payment] - feedback: 這是付款情境。現在要改約定時間。 | 他在確認原本的時間。你要請他改時間。 |  |
| t2 | 괜찮아요. 몇 시가 좋아요? (可以。幾點比較好？) | 4시로 바꿀 수 있을까요? (可以改到 4 點嗎？) | 1. 4번 출구로 갈까요? (要去 4 號出口嗎？) [wrong_entity_exit_number] - feedback: 4번 출구 是 4 號出口。這裡要說 4시，4 點。<br>2. 4시에 갔어요. (我 4 點去了。) [wrong_time_past] - feedback: 這是在說過去已經去了。現在要請對方改到 4 點。 | 提出一個替代時間。4시로 是改到 4 點。 | 시간 + 로 바꾸다<br>用 시간 + 로 바꾸다 表示把時間改到某個時間。<br>4시로 바꾸다 = 改到 4 點<br>내일로 바꾸다 = 改到明天 |
| t3 | 네, 4시 괜찮아요. (好，4 點可以。) | 그럼 4시에 봐요. (那 4 點見。) | 1. 그럼 3시에 봐요. (那 3 點見。) [repeats_old_time] - feedback: 剛剛已經改到 4 點，不是 3 點。<br>2. 방 키 주세요. (請給我房卡。) [wrong_scenario_hotel] - feedback: 這是飯店情境。現在要確認新時間。 | 新時間被接受了。再確認一次就好。 |  |
| t4 | 좋아요. 이따 봐요. (好，等一下見。) | 네, 이따 봐요. (好，等一下見。) | 1. 늦어서요. (因為晚了。) [fragment_without_need] - feedback: 現在已經改好時間，不需要再補原因片段。<br>2. 다시 예약했어요. (我重新預約了。) [wrong_scenario_reservation] - feedback: 這不是預約系統，是和朋友改時間。 | 約定完成，用自然的收尾。 |  |

---

## a2:ko:a2_transport_delay_announcement - 교통 지연 안내 이해하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_transport_delay_announcement
- Setting: 지하철역 안내 방송
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A traveler hears a short subway delay announcement and decides what to do.
- Learner goal: Understand a delay duration and choose a simple next step.
- Support text: 안내 방송을 듣고 얼마나 늦는지 확인한 뒤, 기다릴지 다른 방법을 쓸지 말해 보세요.

### Clean Dialogue Path

- 역무원: 안내 말씀드립니다. 2호선 열차가 약 10분 늦게 도착합니다. (廣播通知：2 號線列車大約晚 10 分鐘到。)
- 你: 10분 늦게 도착한다고 했어요. (他說會晚 10 分鐘到。)
- 역무원: 10분 정도면 기다리시겠어요, 아니면 버스를 타시겠어요? (大約 10 分鐘的話，您要等，還是搭公車？)
- 你: 10분이면 기다릴게요. (如果 10 分鐘，我會等。)
- 역무원: 다음 열차는 10시 20분쯤 도착해요. (下一班列車大約 10 點 20 分到。)
- 你: 그럼 10시 20분 열차를 탈게요. (那我搭 10 點 20 分的車。)
- 역무원: 네, 이쪽 플랫폼에서 기다리시면 돼요. (好的，您在這邊月台等就可以了。)
- 你: 알겠습니다. 여기서 기다릴게요. (了解。我會在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 안내 말씀드립니다. 2호선 열차가 약 10분 늦게 도착합니다. (廣播通知：2 號線列車大約晚 10 分鐘到。) | 10분 늦게 도착한다고 했어요. (他說會晚 10 分鐘到。) | 1. 지금 바로 출발한다고 했어요. (他說現在馬上出發。) [wrong_delay_meaning] - feedback: 방송은 바로 출발이 아니라 10분 늦게 도착한다고 했어요.<br>2. 표를 바꾸라고 했어요. (他說要換票。) [wrong_scenario_ticket_change] - feedback: 표 변경 안내가 아니라 열차 지연 안내예요. | 重點是 약 10분 늦게，到底晚多久？ |  |
| t2 | 10분 정도면 기다리시겠어요, 아니면 버스를 타시겠어요? (大約 10 分鐘的話，您要等，還是搭公車？) | 10분이면 기다릴게요. (如果 10 分鐘，我會等。) | 1. 어제 기다렸어요. (我昨天等了。) [wrong_time_past] - feedback: 지금 무엇을 할지 말해야 해요. 어제 이야기가 아니에요.<br>2. 영수증을 주세요. (請給我收據。) [wrong_service_receipt] - feedback: 여기서는 영수증이 아니라 기다릴지 말지 정하는 상황이에요. | 對方給你兩個簡單選項：等或搭公車。 | -면 = 如果／的話<br>10분 정도면 可以用來說「如果大約 10 分鐘的話」。<br>10분 정도면 = 如果大約 10 分鐘<br>기다릴게요 = 我會等 |
| t3 | 다음 열차는 10시 20분쯤 도착해요. (下一班列車大約 10 點 20 分到。) | 그럼 10시 20분 열차를 탈게요. (那我搭 10 點 20 分的車。) | 1. 10시 20분에 문을 닫아요? (10 點 20 分關門嗎？) [wrong_function_business_hours] - feedback: 그 시간은 문 닫는 시간이 아니라 다음 열차 도착 시간이에요.<br>2. 버스 표를 환불하고 싶어요. (我想退公車票。) [forbidden_refund_escalation] - feedback: 환불 이야기는 이 A2 상황의 범위를 넘어가요. 열차 시간을 확인하면 돼요. | 聽到下一班的時間後，用一句話確認。 |  |
| t4 | 네, 이쪽 플랫폼에서 기다리시면 돼요. (好的，您在這邊月台等就可以了。) | 알겠습니다. 여기서 기다릴게요. (了解。我會在這裡等。) | 1. 방을 바꿔 주세요. (請幫我換房間。) [wrong_scenario_hotel] - feedback: 이건 호텔 상황이에요. 지금은 지하철 플랫폼에서 기다리는 상황입니다.<br>2. 진료 예약을 하고 싶어요. (我想預約看診。) [forbidden_medical_domain] - feedback: 의료 예약은 이 교통 상황과 맞지 않아요. | 對方確認了等候地點，用簡單句收尾。 |  |

---

## a2:ko:a2_understand_hotel_notice - 호텔 안내문 이해하기

- Level: A2
- Language: Korean (ko)
- Scenario ID: a2_understand_hotel_notice
- Setting: 호텔 로비
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and simple rule details.
- Support text: 호텔 안내문에서 시간과 규칙을 확인하고, 내가 어떻게 하면 되는지 말해 보세요.

### Clean Dialogue Path

- 호텔 직원: 안내문을 봐 주세요. 조식은 아침 일곱 시부터 아홉 시까지입니다. (請看公告。早餐是早上七點到九點。)
- 你: 조식은 아침 일곱 시부터 아홉 시까지군요. (早餐是早上七點到九點，對嗎？)
- 호텔 직원: 장소는 2층 식당입니다. (地點是二樓餐廳。)
- 你: 2층 식당으로 가면 되죠? (去二樓餐廳就可以，對嗎？)
- 호텔 직원: 입구에서 객실 번호만 말씀해 주세요. (入口只要告知房號即可。)
- 你: 입구에서 객실 번호만 말하면 되네요. (入口只要說房號就可以，對嗎？)
- 호텔 직원: 네, 내일 아침에 오시면 됩니다. (對，明天早上來就可以。)
- 你: 네, 내일 아침에 2층 식당으로 갈게요. (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | 안내문을 봐 주세요. 조식은 아침 일곱 시부터 아홉 시까지입니다. (請看公告。早餐是早上七點到九點。) | 조식은 아침 일곱 시부터 아홉 시까지군요. (早餐是早上七點到九點，對嗎？) | 1. 조식은 밤 일곱 시부터 아홉 시까지군요. (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: 안내문은 아침 일곱 시부터 아홉 시까지라고 했어요.<br>2. 체크아웃은 아침 아홉 시군요. (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: 이 안내문은 체크아웃이 아니라 조식 시간이에요. | 안내문에서 시간을 찾아요. |  |
| t2 | 장소는 2층 식당입니다. (地點是二樓餐廳。) | 2층 식당으로 가면 되죠? (去二樓餐廳就可以，對嗎？) | 1. 삼 층 객실로 가면 되죠? (去三樓客房就可以，對嗎？) [wrong_detail_or_domain] - feedback: 장소는 삼 층 객실이 아니라 이 층 식당이에요.<br>2. 여권을 보여 드리면 되죠? (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: 여권 같은 신분 정보는 이 안내 확인에 필요하지 않아요. | 장소를 확인해요. | -부터 -까지 = 從...到...<br>이 상황에서 자주 쓰는 A2 표현입니다.<br>2층 식당 = 二樓餐廳 |
| t3 | 입구에서 객실 번호만 말씀해 주세요. (入口只要告知房號即可。) | 입구에서 객실 번호만 말하면 되네요. (入口只要說房號就可以，對嗎？) | 1. 입구에서 경찰에게 말하면 되네요. (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: 경찰 절차가 아니라 호텔 조식 안내예요.<br>2. 입구에서 환불을 받으면 되네요. (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: 환불은 이 안내문 이해 과제와 맞지 않아요. | 간단한 조건을 확인해요. |  |
| t4 | 네, 내일 아침에 오시면 됩니다. (對，明天早上來就可以。) | 네, 내일 아침에 2층 식당으로 갈게요. (好，我明天早上去二樓餐廳。) | 1. 네, 오늘 밤에 세탁물을 찾을게요. (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: 세탁물이 아니라 조식 안내문이에요.<br>2. 네, 사고 신고서를 쓸게요. (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: 사고 신고나 법적 문서는 이 과제 범위를 넘어가요. | 무엇을 할지 확인하고 마무리해요. |  |

---
