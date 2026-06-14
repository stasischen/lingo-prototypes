# A2 Thai Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:th:a2_app_booking_confirmation - ยืนยันการจองในแอป

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: จัดการงานดิจิทัลหรือเอกสารง่าย ๆ แบบความเสี่ยงต่ำด้วยประโยคสั้นระดับ A2
- Support text: ใช้เฉพาะข้อมูลที่จำเป็น ห้ามให้รหัสผ่าน ข้อมูลจ่ายเงิน บัตรประจำตัว หรือข้อมูลกฎหมาย/แพทย์ค่ะ

### Clean Dialogue Path

- พนักงาน: การจองยืนยันวันนี้บ่ายสามค่ะ (預約確認為今天下午三點。)
- 你: สถานที่อยู่ที่ไหนคะ (地點在哪裡？)
- พนักงาน: อยู่ชั้นสองของคาเฟ่ค่ะ (在咖啡店二樓。)
- 你: ชั้นสองของคาเฟ่ใช่ไหมคะ (是在咖啡店二樓，對嗎？)
- พนักงาน: ใช่ค่ะ ชื่อจองคือมีนาค่ะ (對，預約姓名是 Mina。)
- 你: ใช่ค่ะ เป็นชื่อของฉัน (對，是我的名字。)
- พนักงาน: งั้นเจอกันบ่ายสามนะคะ (那下午三點見。)
- 你: ค่ะ ฉันจะไปบ่ายสาม (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | การจองยืนยันวันนี้บ่ายสามค่ะ (預約確認為今天下午三點。) | สถานที่อยู่ที่ไหนคะ (地點在哪裡？) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t2 | อยู่ชั้นสองของคาเฟ่ค่ะ (在咖啡店二樓。) | ชั้นสองของคาเฟ่ใช่ไหมคะ (是在咖啡店二樓，對嗎？) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t3 | ใช่ค่ะ ชื่อจองคือมีนาค่ะ (對，預約姓名是 Mina。) | ใช่ค่ะ เป็นชื่อของฉัน (對，是我的名字。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t4 | งั้นเจอกันบ่ายสามนะคะ (那下午三點見。) | ค่ะ ฉันจะไปบ่ายสาม (好，我下午三點會去。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |

---

## a2:th:a2_ask_ingredient_preference - ถามเรื่องวัตถุดิบที่ชอบ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_ask_ingredient_preference
- Setting: เคาน์เตอร์ร้านอาหาร
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: ถามว่ามีวัตถุดิบทั่วไปไหม แล้วเลือกตามความชอบค่ะ
- Support text: ถามว่ามีวัตถุดิบทั่วไปไหม แล้วเลือกตามความชอบค่ะ

### Clean Dialogue Path

- พนักงาน: จะสั่งอะไรดีคะ (您想點什麼？)
- 你: สลัดนี้มีหัวหอมไหมคะ (這個沙拉有洋蔥嗎？)
- พนักงาน: มีนิดหน่อยค่ะ (有一點。)
- 你: มีหัวหอมนิดหน่อยใช่ไหมคะ (有一點洋蔥，對嗎？)
- พนักงาน: ถ้าต้องการ ทำแบบไม่ใส่หัวหอมได้ค่ะ (如果需要，可以做不加洋蔥的。)
- 你: ค่ะ ไม่ใส่หัวหอมค่ะ (好的，不加洋蔥。)
- พนักงาน: ได้ค่ะ จะเตรียมแบบไม่ใส่หัวหอมให้นะคะ (可以，我會準備不加洋蔥的。)
- 你: ขอบคุณค่ะ เอาแบบนั้นค่ะ (謝謝，我要那樣。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | จะสั่งอะไรดีคะ (您想點什麼？) | สลัดนี้มีหัวหอมไหมคะ (這個沙拉有洋蔥嗎？) | 1. สลัดนี้อยู่ชั้นไหนคะ (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: คำถามเรื่องชั้นไม่เกี่ยวกับวัตถุดิบค่ะ<br>2. ช่วยเปลี่ยนเวลาตั๋วให้หน่อยค่ะ (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องตั๋วค่ะ | ถามว่ามีวัตถุดิบทั่วไปไหมค่ะ |  |
| t2 | มีนิดหน่อยค่ะ (有一點。) | มีหัวหอมนิดหน่อยใช่ไหมคะ (有一點洋蔥，對嗎？) | 1. มีเนื้อเยอะใช่ไหมคะ (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: ไม่ได้พูดเรื่องเนื้อค่ะ<br>2. ห้องเสียงดังใช่ไหมคะ (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปปัญหาโรงแรมค่ะ | ยืนยันข้อมูลวัตถุดิบค่ะ |  |
| t3 | ถ้าต้องการ ทำแบบไม่ใส่หัวหอมได้ค่ะ (如果需要，可以做不加洋蔥的。) | ค่ะ ไม่ใส่หัวหอมค่ะ (好的，不加洋蔥。) | 1. ค่ะ ขอยาแก้แพ้ค่ะ (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: ยา/ภูมิแพ้อยู่นอกงานนี้ค่ะ<br>2. ค่ะ ขอคืนเงินค่ะ (好的，請退款。) [forbidden_or_wrong_domain] - feedback: นี่ไม่ใช่การขอคืนเงินค่ะ | เลือกตามความชอบ ไม่ใช่เรื่องแพทย์ค่ะ |  |
| t4 | ได้ค่ะ จะเตรียมแบบไม่ใส่หัวหอมให้นะคะ (可以，我會準備不加洋蔥的。) | ขอบคุณค่ะ เอาแบบนั้นค่ะ (謝謝，我要那樣。) | 1. บอกเลขพาสปอร์ตให้หน่อยค่ะ (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: ไม่ต้องใช้ข้อมูลพาสปอร์ตค่ะ<br>2. อยากฝากกระเป๋าค่ะ (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องฝากกระเป๋าค่ะ | ปิดด้วยการยืนยันออร์เดอร์ค่ะ |  |

---

## a2:th:a2_ask_late_checkout - ถามเรื่องเช็กเอาต์ช้า

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_ask_late_checkout
- Setting: ที่แผนกต้อนรับโรงแรม
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: ถามว่าสามารถเช็กเอาต์ช้ากว่าเดิมได้ไหม แล้วยืนยันเวลาสุดท้าย

### Clean Dialogue Path

- พนักงานโรงแรม: มีอะไรให้ช่วยไหมคะ (需要什麼協助嗎？)
- คุณ: ขอเช็กเอาต์ช้าหน่อยได้ไหมคะ (可以晚一點退房嗎？)
- พนักงานโรงแรม: วันนี้เช็กเอาต์ได้ถึงบ่ายโมงค่ะ (今天可以到下午一點退房。)
- คุณ: ถึงบ่ายโมงได้ใช่ไหมคะ (可以到下午一點，對嗎？)
- พนักงานโรงแรม: กรุณาเอาคีย์การ์ดมาให้ดูที่เคาน์เตอร์ก่อนเที่ยงค่ะ (請在中午前把房卡拿到櫃台。)
- คุณ: เอาคีย์การ์ดมาให้ดูก่อนเที่ยงใช่ไหมคะ (中午前拿房卡給您看，對嗎？)
- พนักงานโรงแรม: ได้ค่ะ จะบันทึกเป็นเช็กเอาต์บ่ายโมงนะคะ (好的，幫您確認為下午一點退房。)
- คุณ: ขอบคุณค่ะ จะเช็กเอาต์บ่ายโมงค่ะ (謝謝。我下午一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมคะ (需要什麼協助嗎？) | ขอเช็กเอาต์ช้าหน่อยได้ไหมคะ (可以晚一點退房嗎？) | 1. ขอเช็กอินช้าหน่อยได้ไหมคะ (可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: ตอนนี้ถามเรื่องเช็กเอาต์ ไม่ใช่เช็กอิน<br>2. ช่วยลดราคาได้ไหมคะ (可以降價嗎？) [forbidden_or_wrong_domain] - feedback: การต่อรองราคาอยู่นอกขอบเขต A2 นี้ | ถามเรื่องเช็กเอาต์ช้า |  |
| t2 | วันนี้เช็กเอาต์ได้ถึงบ่ายโมงค่ะ (今天可以到下午一點退房。) | ถึงบ่ายโมงได้ใช่ไหมคะ (可以到下午一點，對嗎？) | 1. ถึงสิบโมงเช้าได้ใช่ไหมคะ (可以到上午十點，對嗎？) [wrong_detail_or_domain] - feedback: พนักงานบอกว่าถึงบ่ายโมง<br>2. จะจองห้องใหม่ค่ะ (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: นี่เป็นการยืนยันเวลาเช็กเอาต์ ไม่ใช่จองห้องใหม่ | ฟังเวลาที่ทำได้ | รูปแบบ A2 ที่ใช้บ่อย<br>เป็นสำนวนสั้น ๆ ที่ใช้ได้ในสถานการณ์โรงแรมนี้<br>ถึงบ่ายโมง = 到下午一點 |
| t3 | กรุณาเอาคีย์การ์ดมาให้ดูที่เคาน์เตอร์ก่อนเที่ยงค่ะ (請在中午前把房卡拿到櫃台。) | เอาคีย์การ์ดมาให้ดูก่อนเที่ยงใช่ไหมคะ (中午前拿房卡給您看，對嗎？) | 1. บอกเลขพาสปอร์ตใช่ไหมคะ (告訴您護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: ไม่ต้องใช้ข้อมูลพาสปอร์ตที่นี่<br>2. มารับกระเป๋าตอนหนึ่งทุ่มใช่ไหมคะ (晚上七點領行李，對嗎？) [forbidden_or_wrong_domain] - feedback: นี่ไม่ใช่การรับฝากกระเป๋า | 確認เงื่อนไขสั้น ๆ |  |
| t4 | ได้ค่ะ จะบันทึกเป็นเช็กเอาต์บ่ายโมงนะคะ (好的，幫您確認為下午一點退房。) | ขอบคุณค่ะ จะเช็กเอาต์บ่ายโมงค่ะ (謝謝。我下午一點退房。) | 1. จะขอคืนเงินค่ะ (我要申請退款。) [wrong_detail_or_domain] - feedback: การคืนเงินอยู่นอกสถานการณ์นี้<br>2. พรุ่งนี้เช้าจะขึ้นรถไฟค่ะ (我明天早上會搭火車。) [forbidden_or_wrong_domain] - feedback: นี่เป็นการยืนยันเช็กเอาต์ ไม่ใช่การเดินทาง | 確認เวลาสุดท้าย |  |

---

## a2:th:a2_ask_recommendation_budget - ขอคำแนะนำตามงบ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_ask_recommendation_budget
- Setting: ร้านเล็ก ๆ
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: ขอคำแนะนำในงบเล็ก ๆ และบอกความชอบสั้น ๆ ค่ะ
- Support text: ขอคำแนะนำในงบเล็ก ๆ และบอกความชอบสั้น ๆ ค่ะ

### Clean Dialogue Path

- พนักงาน: กำลังหาอะไรอยู่คะ (您在找什麼？)
- 你: ช่วยแนะนำของขวัญไม่เกินสามร้อยบาทได้ไหมคะ (可以推薦三百泰銖以內的禮物嗎？)
- พนักงาน: อยากได้ของเบา ๆ หรือของที่ใช้ได้จริงคะ (想要輕巧的，還是實用的？)
- 你: อยากได้แบบใช้ได้จริงค่ะ (我想要實用的。)
- พนักงาน: งั้นสมุดเล่มเล็กนี้ไม่เกินสามร้อยบาทค่ะ (那這本小筆記本不超過三百泰銖。)
- 你: สมุดเล่มนั้นไม่เกินสามร้อยบาทใช่ไหมคะ (那本筆記本不超過三百泰銖，對嗎？)
- พนักงาน: ใช่ค่ะ และห่อของขวัญได้ด้วยค่ะ (對，也可以包裝成禮物。)
- 你: ดีค่ะ เอาสมุดเล่มนั้นค่ะ (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | กำลังหาอะไรอยู่คะ (您在找什麼？) | ช่วยแนะนำของขวัญไม่เกินสามร้อยบาทได้ไหมคะ (可以推薦三百泰銖以內的禮物嗎？) | 1. ช่วยเช็กบัญชีธนาคารให้หน่อยค่ะ (請幫我查銀行帳戶。) [wrong_detail_or_domain] - feedback: นี่ไม่ใช่งานธนาคารค่ะ<br>2. อยากแจ้งของหายค่ะ (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: การแจ้งของหายเป็นอีกงานหนึ่งค่ะ | ขอคำแนะนำในงบเล็ก ๆ ค่ะ |  |
| t2 | อยากได้ของเบา ๆ หรือของที่ใช้ได้จริงคะ (想要輕巧的，還是實用的？) | อยากได้แบบใช้ได้จริงค่ะ (我想要實用的。) | 1. อยากได้แบบเผ็ดค่ะ (我想要辣的。) [wrong_detail_or_domain] - feedback: ความเผ็ดเป็นเรื่องเมนูอาหารค่ะ<br>2. อยากเช็กเอาต์ช้าค่ะ (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องโรงแรมค่ะ | บอกความชอบง่าย ๆ ค่ะ |  |
| t3 | งั้นสมุดเล่มเล็กนี้ไม่เกินสามร้อยบาทค่ะ (那這本小筆記本不超過三百泰銖。) | สมุดเล่มนั้นไม่เกินสามร้อยบาทใช่ไหมคะ (那本筆記本不超過三百泰銖，對嗎？) | 1. ห้องนั้นไม่เกินสามร้อยบาทใช่ไหมคะ (那個房間不超過三百泰銖，對嗎？) [wrong_detail_or_domain] - feedback: ห้องไม่ใช่สินค้าที่แนะนำค่ะ<br>2. ตั๋วนั้นเป็นของเมื่อวานใช่ไหมคะ (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องตั๋วค่ะ | ยืนยันของแนะนำและงบค่ะ |  |
| t4 | ใช่ค่ะ และห่อของขวัญได้ด้วยค่ะ (對，也可以包裝成禮物。) | ดีค่ะ เอาสมุดเล่มนั้นค่ะ (很好，我要那本筆記本。) | 1. ขอคืนเงินค่ะ (請退款。) [wrong_detail_or_domain] - feedback: นี่ไม่ใช่การคืนเงินค่ะ<br>2. ช่วยเช็กประกันให้หน่อยค่ะ (請幫我查保險。) [forbidden_or_wrong_domain] - feedback: ประกันอยู่นอกงานความเสี่ยงต่ำนี้ค่ะ | รับคำแนะนำอย่างสุภาพค่ะ |  |

---

## a2:th:a2_ask_transfer_platform - ถามชานชาลาที่ต้องเปลี่ยนขบวน

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_ask_transfer_platform
- Setting: ถามทางในสถานี
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You ask station staff where to transfer and which platform to use.
- Learner goal: Ask for a transfer point and confirm a short two-step direction.
- Support text: ถามว่าต้องเปลี่ยนขบวนที่ไหน และต้องไปชานชาลาไหน

### Clean Dialogue Path

- เจ้าหน้าที่: จะไปไหนคะ (您要去哪裡？)
- คุณ: จะไปสนามบิน ต้องเปลี่ยนขบวนที่ไหนคะ (我要去機場，要在哪裡轉乘？)
- เจ้าหน้าที่: ลงที่สถานี Central แล้วไปชานชาลา 3 ค่ะ (在 Central 站下車，然後去 3 號月台。)
- คุณ: ลงที่ Central แล้วไปชานชาลา 3 ใช่ไหมคะ (在 Central 下車後去 3 號月台，對嗎？)
- เจ้าหน้าที่: ที่ชานชาลา 3 ให้ขึ้นรถไฟไปสนามบินค่ะ (在 3 號月台搭往機場的車。)
- คุณ: ชานชาลา 3 รถไฟไปสนามบินนะคะ (3 號月台，往機場的車，對嗎？)
- เจ้าหน้าที่: ใช่ค่ะ เปลี่ยนขบวนที่ Central ได้เลย (對，在 Central 轉乘就可以。)
- คุณ: ขอบคุณค่ะ จะเปลี่ยนขบวนที่ Central (謝謝，我會在 Central 轉乘。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | จะไปไหนคะ (您要去哪裡？) | จะไปสนามบิน ต้องเปลี่ยนขบวนที่ไหนคะ (我要去機場，要在哪裡轉乘？) | 1. เมื่อวานไปสนามบินแล้วค่ะ (我昨天已經去了機場。) [wrong_time_past] - feedback: ตอนนี้ต้องถามทางไปสนามบิน ไม่ใช่เล่าเรื่องเมื่อวาน<br>2. อยากฝากกระเป๋าค่ะ (我想寄放包包。) [wrong_scenario_luggage] - feedback: นี่เป็นเรื่องฝากกระเป๋า แต่ตอนนี้ต้องถามเรื่องเปลี่ยนขบวน | บอกว่าจะไปสนามบิน แล้วถามว่าต้องเปลี่ยนขบวนที่ไหน |  |
| t2 | ลงที่สถานี Central แล้วไปชานชาลา 3 ค่ะ (在 Central 站下車，然後去 3 號月台。) | ลงที่ Central แล้วไปชานชาลา 3 ใช่ไหมคะ (在 Central 下車後去 3 號月台，對嗎？) | 1. ลงที่ Central แล้วไปดื่มกาแฟใช่ไหมคะ (在 Central 下車後去喝咖啡，對嗎？) [wrong_action_cafe] - feedback: เจ้าหน้าที่บอกให้ไปชานชาลา 3 ไม่ใช่ไปดื่มกาแฟ<br>2. ไปห้องหมายเลข 3 ใช่ไหมคะ (去 3 號房，對嗎？) [wrong_location_room] - feedback: ไม่ใช่ห้อง แต่เป็นชานชาลา | คำว่า แล้ว ใช้ต่อสองขั้นตอนสั้น ๆ | แล้ว = 然後<br>ลงที่สถานี Central แล้วไปชานชาลา 3 links two simple steps.<br>ลงที่สถานี Central = 在 Central 站下車<br>แล้วไปชานชาลา 3 = 然後去 3 號月台 |
| t3 | ที่ชานชาลา 3 ให้ขึ้นรถไฟไปสนามบินค่ะ (在 3 號月台搭往機場的車。) | ชานชาลา 3 รถไฟไปสนามบินนะคะ (3 號月台，往機場的車，對嗎？) | 1. รถไฟไปสนามบินมาเมื่อวานนะคะ (往機場的車昨天來了，對嗎？) [wrong_time_past] - feedback: กำลังยืนยันรถไฟที่จะขึ้นตอนนี้ ไม่ใช่เมื่อวาน<br>2. ถ้าฉุกเฉินต้องไปไหนคะ (緊急時要去哪裡？) [forbidden_emergency_reroute] - feedback: เรื่องฉุกเฉินเกินขอบเขตการถามทาง A2 นี้ | ยืนยันชานชาลาและทิศทาง |  |
| t4 | ใช่ค่ะ เปลี่ยนขบวนที่ Central ได้เลย (對，在 Central 轉乘就可以。) | ขอบคุณค่ะ จะเปลี่ยนขบวนที่ Central (謝謝，我會在 Central 轉乘。) | 1. จะเปลี่ยนเวลาตั๋วค่ะ (我要改票時間。) [wrong_scenario_ticket_change] - feedback: ตอนนี้กำลังยืนยันทางเปลี่ยนขบวน ไม่ใช่เปลี่ยนตั๋ว<br>2. จะไปแจ้งตำรวจที่สนามบินค่ะ (我會在機場報警。) [forbidden_police_domain] - feedback: เรื่องตำรวจไม่อยู่ในงานถามทางแบบง่ายนี้ | เส้นทางชัดแล้ว ขอบคุณสั้น ๆ |  |

---

## a2:th:a2_change_delivery_pickup_time - เปลี่ยนเวลารับของ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: จัดการงานดิจิทัลหรือเอกสารง่าย ๆ แบบความเสี่ยงต่ำด้วยประโยคสั้นระดับ A2
- Support text: ใช้เฉพาะข้อมูลที่จำเป็น ห้ามให้รหัสผ่าน ข้อมูลจ่ายเงิน บัตรประจำตัว หรือข้อมูลกฎหมาย/แพทย์ค่ะ

### Clean Dialogue Path

- พนักงาน: วันนี้รับของตอนสี่โมงค่ะ (今天四點取貨。)
- 你: ขอเปลี่ยนเวลารับของได้ไหมคะ (可以改取貨時間嗎？)
- พนักงาน: ได้ค่ะ ห้าโมงว่างค่ะ (可以，五點可以。)
- 你: งั้นขอเป็นห้าโมงค่ะ (那請改成五點。)
- พนักงาน: เปลี่ยนเป็นห้าโมงนะคะ (改成五點嗎？)
- 你: ใช่ค่ะ ห้าโมงได้ค่ะ (對，五點可以。)
- พนักงาน: ค่ะ จะเปลี่ยนเป็นห้าโมงให้ค่ะ (好的，我會改成五點。)
- 你: ขอบคุณค่ะ ฉันจะไปห้าโมง (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | วันนี้รับของตอนสี่โมงค่ะ (今天四點取貨。) | ขอเปลี่ยนเวลารับของได้ไหมคะ (可以改取貨時間嗎？) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t2 | ได้ค่ะ ห้าโมงว่างค่ะ (可以，五點可以。) | งั้นขอเป็นห้าโมงค่ะ (那請改成五點。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t3 | เปลี่ยนเป็นห้าโมงนะคะ (改成五點嗎？) | ใช่ค่ะ ห้าโมงได้ค่ะ (對，五點可以。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t4 | ค่ะ จะเปลี่ยนเป็นห้าโมงให้ค่ะ (好的，我會改成五點。) | ขอบคุณค่ะ ฉันจะไปห้าโมง (謝謝，我五點會去。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |

---

## a2:th:a2_change_ticket_time - เปลี่ยนเวลาตั๋ว

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_change_ticket_time
- Setting: เคาน์เตอร์ตั๋วที่สถานี
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You ask to change a ticket time at a station counter.
- Learner goal: Make a polite time-change request and confirm a new time.
- Support text: ที่เคาน์เตอร์ตั๋ว ขอเปลี่ยนเวลา แล้วตอบรับเวลาใหม่แบบสั้น ๆ

### Clean Dialogue Path

- เจ้าหน้าที่: สวัสดีค่ะ ให้ช่วยอะไรคะ (您好，需要幫什麼嗎？)
- คุณ: อยากเปลี่ยนเวลาตั๋วค่ะ (我想改票的時間。)
- เจ้าหน้าที่: เปลี่ยนเป็นตั๋วบ่ายสามวันนี้ได้ค่ะ (可以改成今天下午三點的票。)
- คุณ: ได้ค่ะ ขอเป็นตั๋วบ่ายสาม (可以，請改成下午三點的票。)
- เจ้าหน้าที่: ยืนยันเป็นรอบบ่ายสามนะคะ (確認改成下午三點那班，對嗎？)
- คุณ: ใช่ค่ะ รอบบ่ายสามถูกต้อง (對，下午三點那班正確。)
- เจ้าหน้าที่: เปลี่ยนเรียบร้อยแล้วค่ะ ขึ้นรอบบ่ายสามได้เลย (已經更改好了，可以搭下午三點那班。)
- คุณ: ขอบคุณค่ะ จะขึ้นรอบบ่ายสาม (謝謝，我會搭下午三點那班。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีค่ะ ให้ช่วยอะไรคะ (您好，需要幫什麼嗎？) | อยากเปลี่ยนเวลาตั๋วค่ะ (我想改票的時間。) | 1. ตั๋วเป็นของเมื่อวานค่ะ (票是昨天的。) [wrong_time_past] - feedback: ตอนนี้ต้องขอเปลี่ยนเวลา ไม่ใช่เล่าเรื่องเมื่อวาน<br>2. ขอกาแฟหนึ่งแก้วค่ะ (請給我一杯咖啡。) [wrong_scenario_cafe] - feedback: นี่เป็นประโยคในคาเฟ่ ไม่ใช่เคาน์เตอร์ตั๋ว | บอกว่าต้องการเปลี่ยนเวลาตั๋ว |  |
| t2 | เปลี่ยนเป็นตั๋วบ่ายสามวันนี้ได้ค่ะ (可以改成今天下午三點的票。) | ได้ค่ะ ขอเป็นตั๋วบ่ายสาม (可以，請改成下午三點的票。) | 1. บ่ายสามมีห้องไหมคะ (下午三點有房間嗎？) [wrong_scenario_hotel] - feedback: นี่เป็นเรื่องตั๋ว ไม่ใช่ห้องพัก<br>2. เมื่อวานขึ้นตอนบ่ายสามแล้วค่ะ (我昨天已經下午三點搭了。) [wrong_time_past] - feedback: เจ้าหน้าที่พูดถึงเวลาที่เปลี่ยนได้วันนี้ | ถ้ารับเวลาใหม่นี้ ให้ตอบว่าขอเป็นบ่ายสาม | เปลี่ยนเป็น = 改成<br>เปลี่ยนเป็นตั๋วบ่ายสาม means change it to a 3 p.m. ticket.<br>เปลี่ยนเป็น = 改成<br>ตั๋วบ่ายสาม = 下午三點的票 |
| t3 | ยืนยันเป็นรอบบ่ายสามนะคะ (確認改成下午三點那班，對嗎？) | ใช่ค่ะ รอบบ่ายสามถูกต้อง (對，下午三點那班正確。) | 1. ไม่ค่ะ บ่ายสามเป็นเมื่อวาน (不是，下午三點是昨天。) [wrong_time_past] - feedback: กำลังยืนยันเวลาใหม่ ไม่ใช่เวลาเมื่อวาน<br>2. ช่วยอธิบายกฎคืนเงินค่ะ (請說明退款規則。) [forbidden_refund_rules] - feedback: กฎคืนเงินเกินขอบเขตงานนี้ ให้ยืนยันเวลาใหม่ก็พอ | ยืนยันเวลาใหม่ให้ชัดเจน |  |
| t4 | เปลี่ยนเรียบร้อยแล้วค่ะ ขึ้นรอบบ่ายสามได้เลย (已經更改好了，可以搭下午三點那班。) | ขอบคุณค่ะ จะขึ้นรอบบ่ายสาม (謝謝，我會搭下午三點那班。) | 1. พรุ่งนี้จะดื่มกาแฟค่ะ (我明天會喝咖啡。) [wrong_topic_plan] - feedback: นี่ไม่ใช่การปิดบทสนทนาเรื่องเปลี่ยนตั๋ว<br>2. เลขพาสปอร์ตของฉันคืออะไรคะ (我的護照號碼是什麼？) [forbidden_identity_detail] - feedback: เลขพาสปอร์ตไม่จำเป็นสำหรับการเปลี่ยนเวลาตั๋วแบบง่าย ๆ | บริการเสร็จแล้ว ขอบคุณสั้น ๆ |  |

---

## a2:th:a2_compare_two_menu_options - เปรียบเทียบเมนูสองอย่าง

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_compare_two_menu_options
- Setting: เคาน์เตอร์ร้านอาหาร
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: ฟังความต่างของเมนูสองอย่าง แล้วเลือกอย่างที่ชอบค่ะ
- Support text: ฟังความต่างของเมนูสองอย่าง แล้วเลือกอย่างที่ชอบค่ะ

### Clean Dialogue Path

- พนักงาน: วันนี้เลือกข้าวยำหรือก๋วยเตี๋ยวได้ค่ะ (今天可以選泰式拌飯或麵。)
- 你: สองอย่างนี้ต่างกันยังไงคะ (這兩個有什麼不同？)
- พนักงาน: ข้าวยำเผ็ดนิดหน่อย ส่วนก๋วยเตี๋ยวเบากว่าค่ะ (泰式拌飯有點辣，麵比較清爽。)
- 你: ก๋วยเตี๋ยวเบากว่าใช่ไหมคะ (麵比較清爽，對嗎？)
- พนักงาน: ใช่ค่ะ ก๋วยเตี๋ยวเผ็ดน้อยกว่าค่ะ (對，麵比較不辣。)
- 你: งั้นเอาก๋วยเตี๋ยวค่ะ (那我要麵。)
- พนักงาน: ได้ค่ะ เดี๋ยวสั่งก๋วยเตี๋ยวหนึ่งที่ให้นะคะ (好的，我幫您點一份麵。)
- 你: ขอบคุณค่ะ เอาก๋วยเตี๋ยวหนึ่งที่ค่ะ (謝謝，請給我一份麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | วันนี้เลือกข้าวยำหรือก๋วยเตี๋ยวได้ค่ะ (今天可以選泰式拌飯或麵。) | สองอย่างนี้ต่างกันยังไงคะ (這兩個有什麼不同？) | 1. โต๊ะอยู่ที่ไหนคะ (桌子在哪裡？) [wrong_detail_or_domain] - feedback: นี่ถามเรื่องที่นั่ง ไม่ใช่เปรียบเทียบเมนูค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [forbidden_or_wrong_domain] - feedback: การคืนเงินอยู่นอกงาน A2 นี้ค่ะ | ถามความต่างของสองเมนูค่ะ |  |
| t2 | ข้าวยำเผ็ดนิดหน่อย ส่วนก๋วยเตี๋ยวเบากว่าค่ะ (泰式拌飯有點辣，麵比較清爽。) | ก๋วยเตี๋ยวเบากว่าใช่ไหมคะ (麵比較清爽，對嗎？) | 1. ข้าวยำถูกกว่าใช่ไหมคะ (泰式拌飯比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: ไม่ได้พูดเรื่องราคา<br>2. รถไฟเร็วกว่าใช่ไหมคะ (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องเดินทางค่ะ | ยืนยันข้อมูลเปรียบเทียบที่ได้ยินค่ะ |  |
| t3 | ใช่ค่ะ ก๋วยเตี๋ยวเผ็ดน้อยกว่าค่ะ (對，麵比較不辣。) | งั้นเอาก๋วยเตี๋ยวค่ะ (那我要麵。) | 1. งั้นเปลี่ยนห้องค่ะ (那我要換房間。) [wrong_detail_or_domain] - feedback: เปลี่ยนไปสถานการณ์โรงแรมค่ะ<br>2. งั้นแสดงพาสปอร์ตค่ะ (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: ไม่ต้องใช้พาสปอร์ตค่ะ | เลือกเมนูตามความชอบค่ะ |  |
| t4 | ได้ค่ะ เดี๋ยวสั่งก๋วยเตี๋ยวหนึ่งที่ให้นะคะ (好的，我幫您點一份麵。) | ขอบคุณค่ะ เอาก๋วยเตี๋ยวหนึ่งที่ค่ะ (謝謝，請給我一份麵。) | 1. จะไปบอกตำรวจค่ะ (我要報警。) [wrong_detail_or_domain] - feedback: คำตอบนี้แรงเกินไปสำหรับสถานการณ์นี้ค่ะ<br>2. พรุ่งนี้ต้องไปโรงพยาบาลค่ะ (我明天要去醫院。) [forbidden_or_wrong_domain] - feedback: นี่ไม่ใช่สถานการณ์ทางการแพทย์ค่ะ | ยืนยันเมนูที่เลือกอย่างสุภาพค่ะ |  |

---

## a2:th:a2_confirm_date_time_place - ยืนยันวัน เวลา และสถานที่

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_confirm_date_time_place
- Setting: อ่านข้อความสั้นจากเพื่อน
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You confirm date, time, and place from a short message.
- Learner goal: Understand a short message and confirm the date, time, and place.
- Support text: อ่านข้อความสั้นจากเพื่อน แล้วยืนยันวัน เวลา และสถานที่ด้วยประโยคสั้น ๆ

### Clean Dialogue Path

- เพื่อน: เห็นข้อความที่ส่งไปหรือยัง (你看到我傳的訊息了嗎？)
- คุณ: เห็นแล้ว พรุ่งนี้สิบโมงเช้าใช่ไหม (看到了，明天上午十點對嗎？)
- เพื่อน: ใช่ แล้วสถานที่คือที่ไหนนะ (對，那地點是哪裡？)
- คุณ: เจอกันหน้าห้างนะ (在商場前面見。)
- เพื่อน: ถ้าฉันไปช้า จะส่งข้อความบอกนะ (如果我晚到，我會傳訊息告訴你。)
- คุณ: โอเค รับทราบนะ (好，知道了。)
- เพื่อน: งั้นเจอกันพรุ่งนี้นะ (那明天見。)
- คุณ: ได้ เจอกันพรุ่งนี้นะ (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | เห็นข้อความที่ส่งไปหรือยัง (你看到我傳的訊息了嗎？) | เห็นแล้ว พรุ่งนี้สิบโมงเช้าใช่ไหม (看到了，明天上午十點對嗎？) | 1. เห็นแล้ว วันนี้สี่ทุ่มใช่ไหม (看到了，今天晚上十點對嗎？) [wrong_date_time] - feedback: ข้อความบอกพรุ่งนี้สิบโมงเช้า ไม่ใช่วันนี้สี่ทุ่ม<br>2. เห็นแล้ว เมนูนี้ใช่ไหม (看到了，是這個菜單對嗎？) [wrong_scenario_menu] - feedback: ข้อความไม่ใช่เมนู แต่เป็นเวลานัดและสถานที่ | ข้อความคือ พรุ่งนี้สิบโมงเช้า เจอกันหน้าห้างนะ เริ่มจากยืนยันวันและเวลา |  |
| t2 | ใช่ แล้วสถานที่คือที่ไหนนะ (對，那地點是哪裡？) | เจอกันหน้าห้างนะ (在商場前面見。) | 1. เจอกันในห้างนะ (在商場裡面見。) [wrong_place_relation] - feedback: ข้อความบอกว่า หน้า คือ前面 ไม่ใช่ ใน คือ裡面<br>2. จะพักอยู่บ้านนะ (我會在家休息。) [wrong_function_plan] - feedback: นี่เป็นการบอกแผนของตัวเอง ไม่ใช่ยืนยันสถานที่นัด | ข้อความบอกว่า หน้าห้าง คือ商場前面 | หน้า + สถานที่<br>หน้า means in front of a place.<br>หน้าห้าง = 商場前面<br>หน้าคาเฟ่ = 咖啡店前面 |
| t3 | ถ้าฉันไปช้า จะส่งข้อความบอกนะ (如果我晚到，我會傳訊息告訴你。) | โอเค รับทราบนะ (好，知道了。) | 1. โอเค ฉันไปช้าแล้ว (好，我已經晚到了。) [wrong_subject_status] - feedback: เพื่อนพูดถึงตัวเขาเองถ้าไปช้า ไม่ใช่ว่าคุณสายแล้ว<br>2. ถ้ารถเมล์ช้า ฉันจะโทรหา (如果公車晚了，我會打電話。) [wrong_focus_self_delay] - feedback: คำนี้เปลี่ยนเป็นเรื่องของคุณเอง แต่เพื่อนแค่บอกว่าจะส่งข้อความถ้าเขาช้า | เพื่อนบอกเงื่อนไขง่าย ๆ ตอบรับสั้น ๆ ก็พอ |  |
| t4 | งั้นเจอกันพรุ่งนี้นะ (那明天見。) | ได้ เจอกันพรุ่งนี้นะ (好，明天見。) | 1. ได้ เจอกันเมื่อวานนะ (好，昨天見。) [wrong_time_expression] - feedback: เมื่อวานคือ昨天 ใช้ไม่ได้กับการนัดเจอในอนาคต<br>2. ขอบิลหน่อย (請給我帳單。) [wrong_scenario_payment] - feedback: นี่เป็นคำพูดตอนจ่ายเงิน แต่ตอนนี้แค่ปิดบทสนทนานัดหมาย | รายละเอียดครบแล้ว ปิดด้วยคำว่าเจอกันพรุ่งนี้ |  |

---

## a2:th:a2_decline_with_reason - ปฏิเสธพร้อมเหตุผลง่าย ๆ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_decline_with_reason
- Setting: แชตกับเพื่อน
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: ปฏิเสธคำชวนของเพื่อนอย่างสุภาพ พร้อมเหตุผลง่าย ๆ หนึ่งข้อ
- Support text: ปฏิเสธคำชวนของเพื่อนอย่างนุ่มนวล พร้อมเหตุผลสั้น ๆ ธรรมดาค่ะ

### Clean Dialogue Path

- เพื่อน: คืนนี้ไปดูหนังไหม (今晚要看電影嗎？)
- 你: ขอโทษนะ คืนนี้ไปไม่ได้ (不好意思，今晚不能去。)
- เพื่อน: ไม่เป็นไร ยุ่งอยู่เหรอ (沒關係。你很忙嗎？)
- 你: ใช่ ยังมีงานนิดหน่อย (對，還有一點事。)
- เพื่อน: ไว้วันอื่นไหม (改天嗎？)
- 你: ได้ อาจจะสุดสัปดาห์นี้ (好，也許這個週末。)
- เพื่อน: โอเค งั้นคุยกันสุดสัปดาห์นะ (好，那週末再說。)
- 你: ขอบคุณนะ เจอกันสุดสัปดาห์ (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | คืนนี้ไปดูหนังไหม (今晚要看電影嗎？) | ขอโทษนะ คืนนี้ไปไม่ได้ (不好意思，今晚不能去。) | 1. ไม่ไป ไม่อยากไป (不要，不想去。) [too_blunt] - feedback: ฟังดูห้วนเกินไปกับเพื่อนค่ะ<br>2. ขอใบเสร็จอีกครั้งค่ะ (請再給我收據。) [wrong_scenario_shop] - feedback: นี่เป็นสถานการณ์ร้านค้าค่ะ | เริ่มปฏิเสธอย่างนุ่มนวลค่ะ |  |
| t2 | ไม่เป็นไร ยุ่งอยู่เหรอ (沒關係。你很忙嗎？) | ใช่ ยังมีงานนิดหน่อย (對，還有一點事。) | 1. มีเหตุฉุกเฉินร้ายแรง (發生嚴重緊急事件。) [too_heavy_or_sensitive] - feedback: หนักเกินไปสำหรับงาน A2 นี้ค่ะ<br>2. หนังเมื่อวานสนุกมาก (昨天的電影很好看。) [wrong_time_or_function] - feedback: ไม่ได้บอกเหตุผลที่คืนนี้ไปไม่ได้ค่ะ | ให้เหตุผลง่าย ๆ หนึ่งข้อค่ะ |  |
| t3 | ไว้วันอื่นไหม (改天嗎？) | ได้ อาจจะสุดสัปดาห์นี้ (好，也許這個週末。) | 1. ไม่ต้องถามอีกนะ (不要再問了。) [too_cold] - feedback: ฟังดูแรงเกินไปกับเพื่อนค่ะ<br>2. ได้ ฉันจะเปลี่ยนห้อง (好，我會換房間。) [wrong_scenario_hotel] - feedback: นี่ไม่ใช่สถานการณ์โรงแรมค่ะ | รักษาความสัมพันธ์ไว้ค่ะ |  |
| t4 | โอเค งั้นคุยกันสุดสัปดาห์นะ (好，那週末再說。) | ขอบคุณนะ เจอกันสุดสัปดาห์ (謝謝，週末見。) | 1. ฉันจะจ่ายตอนนี้ค่ะ (我現在會付款。) [wrong_scenario_payment] - feedback: นี่ไม่ใช่สถานการณ์จ่ายเงินค่ะ<br>2. งั้นคืนนี้ฉันจะไปแน่นอน (那今晚一定會去。) [contradicts_decline] - feedback: ก่อนหน้านี้บอกว่าคืนนี้ไปไม่ได้ค่ะ | ขอบคุณเพื่อนแล้วปิดบทสนทนาอย่างอบอุ่นค่ะ |  |

---

## a2:th:a2_describe_weekend_activity - เล่าเรื่องที่ทำช่วงสุดสัปดาห์

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_describe_weekend_activity
- Setting: คุยกับเพื่อนวันจันทร์
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: เล่าสิ่งที่ทำในช่วงสุดสัปดาห์หนึ่งหรือสองอย่าง
- Support text: เล่าให้เพื่อนฟังว่าช่วงสุดสัปดาห์ทำอะไร ด้วยรายละเอียดสั้น ๆ ค่ะ

### Clean Dialogue Path

- เพื่อน: สุดสัปดาห์ทำอะไรมา (週末做了什麼？)
- 你: ไปกินข้าวกับเพื่อนมา (和朋友去吃飯了。)
- เพื่อน: เจอกันที่ไหน (在哪裡見面？)
- 你: เจอกันที่คาเฟ่ใกล้บ้าน (在家附近的咖啡店見。)
- เพื่อน: ดีไหม (還不錯嗎？)
- 你: ดีนะ เงียบแล้วก็ดี (很好，很安靜也不錯。)
- เพื่อน: ฟังดูดี ครั้งหน้าฉันไปด้วยได้ไหม (聽起來不錯。下次我可以一起去嗎？)
- 你: ได้ ครั้งหน้าไปด้วยกันนะ (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สุดสัปดาห์ทำอะไรมา (週末做了什麼？) | ไปกินข้าวกับเพื่อนมา (和朋友去吃飯了。) | 1. พรุ่งนี้จะไปเจอเพื่อน (明天會去見朋友。) [wrong_time_future] - feedback: เพื่อนถามเรื่องสุดสัปดาห์ที่ผ่านมาแล้วค่ะ<br>2. ต้องไปชานชาลาไหน (要去哪個月台？) [wrong_scenario_transport] - feedback: นี่ไม่ใช่คำถามเรื่องเดินทางค่ะ | บอกสิ่งที่ทำหนึ่งอย่างค่ะ |  |
| t2 | เจอกันที่ไหน (在哪裡見面？) | เจอกันที่คาเฟ่ใกล้บ้าน (在家附近的咖啡店見。) | 1. เจอกันที่คาเฟ่ไหม (要在咖啡店見嗎？) [wrong_function_invite] - feedback: กำลังพูดถึงเรื่องที่เกิดไปแล้วค่ะ<br>2. ห้องหนาวเกินไป (房間太冷了。) [wrong_scenario_hotel] - feedback: นี่ไม่ใช่ปัญหาโรงแรมค่ะ | ตอบสถานที่สั้น ๆ ค่ะ |  |
| t3 | ดีไหม (還不錯嗎？) | ดีนะ เงียบแล้วก็ดี (很好，很安靜也不錯。) | 1. ทำให้คิดถึงสังคม (讓我想到社會。) [too_advanced_or_abstract] - feedback: นามธรรมเกินไปสำหรับบทสนทนา A2 นี้ค่ะ<br>2. ไม่ค่ะ อยากคืนเงิน (不，想退款。) [wrong_scenario_refund] - feedback: นี่ไม่ใช่สถานการณ์คืนเงินค่ะ | บอกความรู้สึกสั้น ๆ ค่ะ |  |
| t4 | ฟังดูดี ครั้งหน้าฉันไปด้วยได้ไหม (聽起來不錯。下次我可以一起去嗎？) | ได้ ครั้งหน้าไปด้วยกันนะ (好，下次一起去。) | 1. ลงสถานีถัดไปค่ะ (下一站下車。) [wrong_scenario_transport] - feedback: นี่เป็นคำแนะนำเรื่องเดินทางค่ะ<br>2. ฉันจะแสดงบัตรประชาชนค่ะ (我會出示身分證。) [wrong_scenario_document] - feedback: นี่ไม่ใช่สถานการณ์เอกสารค่ะ | ตอบเพื่อนอย่างเป็นธรรมชาติค่ะ |  |

---

## a2:th:a2_exchange_wrong_item - ขอเปลี่ยนของที่ได้ผิด

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_exchange_wrong_item
- Setting: เคาน์เตอร์ร้านค้า
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: บอกอย่างสุภาพว่าได้ของไม่ตรงที่สั่ง และขอเปลี่ยนเป็นของที่ถูกต้องค่ะ
- Support text: บอกอย่างสุภาพว่าได้ของไม่ตรงที่สั่ง และขอเปลี่ยนเป็นของที่ถูกต้องค่ะ

### Clean Dialogue Path

- พนักงาน: ให้ช่วยอะไรคะ (需要幫忙嗎？)
- 你: ฉันสั่งแก้วเล็ก แต่ได้แก้วใหญ่ค่ะ (我訂的是小杯，但拿到大杯。)
- พนักงาน: ขอตรวจสอบนะคะ ขอดูใบเสร็จได้ไหมคะ (我確認一下。可以看收據嗎？)
- 你: ได้ค่ะ นี่ใบเสร็จค่ะ (可以，這是收據。)
- พนักงาน: ใช่ค่ะ เดี๋ยวเปลี่ยนเป็นแก้วเล็กให้ทันทีค่ะ (對，我馬上換成小杯。)
- 你: จะเปลี่ยนเป็นแก้วเล็กให้ใช่ไหมคะ (會幫我換成小杯，對嗎？)
- พนักงาน: ค่ะ กรุณารอสักครู่นะคะ (好的，請稍等。)
- 你: ขอบคุณค่ะ จะรอตรงนี้ค่ะ (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ให้ช่วยอะไรคะ (需要幫忙嗎？) | ฉันสั่งแก้วเล็ก แต่ได้แก้วใหญ่ค่ะ (我訂的是小杯，但拿到大杯。) | 1. แก้วเล็กทำที่ไหนคะ (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: สถานที่ผลิตไม่ใช่ปัญหานี้ค่ะ<br>2. ลดราคาให้หน่อยค่ะ (請降價。) [forbidden_or_wrong_domain] - feedback: การต่อราคาอยู่นอกงานนี้ค่ะ | บอกว่าสินค้าที่ได้ไม่ตรงกับที่สั่งค่ะ |  |
| t2 | ขอตรวจสอบนะคะ ขอดูใบเสร็จได้ไหมคะ (我確認一下。可以看收據嗎？) | ได้ค่ะ นี่ใบเสร็จค่ะ (可以，這是收據。) | 1. ได้ค่ะ นี่พาสปอร์ตค่ะ (可以，這是護照。) [wrong_detail_or_domain] - feedback: ไม่ต้องใช้พาสปอร์ตค่ะ<br>2. ได้ค่ะ พรุ่งนี้จะขึ้นรถไฟค่ะ (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องเดินทางค่ะ | ตอบเรื่องใบเสร็จอย่างง่ายค่ะ |  |
| t3 | ใช่ค่ะ เดี๋ยวเปลี่ยนเป็นแก้วเล็กให้ทันทีค่ะ (對，我馬上換成小杯。) | จะเปลี่ยนเป็นแก้วเล็กให้ใช่ไหมคะ (會幫我換成小杯，對嗎？) | 1. ช่วยอธิบายกฎการคืนเงินค่ะ (請說明退款規則。) [wrong_detail_or_domain] - feedback: กฎคืนเงินกว้างเกินไปค่ะ<br>2. จะไปแจ้งตำรวจค่ะ (我要報警。) [forbidden_or_wrong_domain] - feedback: คำตอบนี้แรงเกินไปค่ะ | ยืนยันของที่จะเปลี่ยนค่ะ |  |
| t4 | ค่ะ กรุณารอสักครู่นะคะ (好的，請稍等。) | ขอบคุณค่ะ จะรอตรงนี้ค่ะ (謝謝，我在這裡等。) | 1. ต้องไปโรงพยาบาลค่ะ (我需要去醫院。) [wrong_detail_or_domain] - feedback: นี่ไม่ใช่สถานการณ์แพทย์ค่ะ<br>2. อยากเปลี่ยนห้องค่ะ (我想換房。) [forbidden_or_wrong_domain] - feedback: เปลี่ยนไปเรื่องโรงแรมค่ะ | ตอบว่าจะรอสั้น ๆ ค่ะ |  |

---

## a2:th:a2_explain_simple_delay_reason - บอกเหตุผลง่าย ๆ ว่าจะไปสาย

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: กำลังไปหาเพื่อน
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You are running a little late and need to explain the reason.
- Learner goal: Apologize, give one simple reason, and estimate the delay.
- Support text: เพื่อนถามว่าคุณอยู่ไหน บอกสั้น ๆ ว่าจะสาย เพราะอะไร และสายประมาณกี่นาที

### Clean Dialogue Path

- เพื่อน: ถึงไหนแล้ว ใกล้ถึงหรือยัง (你到哪了？快到了嗎？)
- คุณ: ขอโทษนะ น่าจะไปสายหน่อย (不好意思，我可能會晚一點。)
- เพื่อน: ทำไมเหรอ (為什麼？)
- คุณ: เพราะรถเมล์มาช้านิดหน่อย (因為公車稍微晚了一點。)
- เพื่อน: แล้วจะสายประมาณกี่นาที (那你大概會晚幾分鐘？)
- คุณ: ประมาณสิบนาทีนะ (大約十分鐘。)
- เพื่อน: โอเค ไม่เป็นไร ค่อย ๆ มา (好，沒關係，慢慢來。)
- คุณ: ขอบใจนะ เดี๋ยวรีบไป (謝謝，我等一下趕過去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ถึงไหนแล้ว ใกล้ถึงหรือยัง (你到哪了？快到了嗎？) | ขอโทษนะ น่าจะไปสายหน่อย (不好意思，我可能會晚一點。) | 1. ถึงตั้งแต่เมื่อวานแล้ว (我昨天就到了。) [wrong_time_past] - feedback: เพื่อนถามตอนนี้ ไม่ใช่เมื่อวาน<br>2. ช่วยแนะนำเมนูหน่อย (請推薦菜單。) [wrong_scenario_restaurant] - feedback: นี่เป็นคำพูดในร้านอาหาร ตอนนี้ต้องบอกว่าคุณจะสาย | เริ่มด้วยคำขอโทษ แล้วบอกว่าจะสายหน่อย |  |
| t2 | ทำไมเหรอ (為什麼？) | เพราะรถเมล์มาช้านิดหน่อย (因為公車稍微晚了一點。) | 1. เพราะชอบนั่งรถเมล์ (因為我喜歡搭公車。) [wrong_reason_semantics] - feedback: นี่ไม่ใช่เหตุผลว่าทำไมถึงสาย<br>2. รถเมล์อยู่ที่ไหน (公車在哪裡？) [wrong_function_location_question] - feedback: เพื่อนถามเหตุผล ไม่ได้ถามว่ารถเมล์อยู่ที่ไหน | ใช้ เพราะ... เพื่อให้เหตุผลง่าย ๆ | เพราะ = 因為<br>เพราะ introduces a simple reason in Thai.<br>เพราะรถติด = 因為塞車<br>เพราะรถเมล์มาช้า = 因為公車來晚了 |
| t3 | แล้วจะสายประมาณกี่นาที (那你大概會晚幾分鐘？) | ประมาณสิบนาทีนะ (大約十分鐘。) | 1. รถเมล์สายสิบดีนะ (十號公車不錯。) [wrong_entity_bus_number] - feedback: สายสิบคือรถเมล์เลขสิบ แต่เพื่อนถามว่าจะสายกี่นาที<br>2. ไม่ได้สายนะ (我沒有晚。) [contradicts_context] - feedback: ก่อนหน้านี้คุณบอกว่าจะสายแล้ว ตอนนี้ต้องประเมินเวลา | ตอบเป็นเวลาสั้น ๆ เช่น ประมาณสิบนาที |  |
| t4 | โอเค ไม่เป็นไร ค่อย ๆ มา (好，沒關係，慢慢來。) | ขอบใจนะ เดี๋ยวรีบไป (謝謝，我等一下趕過去。) | 1. จองไว้แล้ว (我已經預約了。) [wrong_scenario_reservation] - feedback: นี่เป็นเรื่องการจอง ไม่ใช่การบอกว่าจะไปสาย<br>2. คิดเงินหน่อย (請結帳。) [wrong_scenario_payment] - feedback: นี่เป็นคำพูดตอนจ่ายเงิน ไม่ใช่ปิดบทสนทนาเรื่องไปสาย | เพื่อนรับรู้แล้ว ขอบคุณและบอกว่าจะรีบไปแบบสั้น ๆ |  |

---

## a2:th:a2_fill_simple_form_help - ขอความช่วยเหลือกับแบบฟอร์มง่าย ๆ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: จัดการงานดิจิทัลหรือเอกสารง่าย ๆ แบบความเสี่ยงต่ำด้วยประโยคสั้นระดับ A2
- Support text: ใช้เฉพาะข้อมูลที่จำเป็น ห้ามให้รหัสผ่าน ข้อมูลจ่ายเงิน บัตรประจำตัว หรือข้อมูลกฎหมาย/แพทย์ค่ะ

### Clean Dialogue Path

- พนักงาน: กรุณากรอกแบบฟอร์มนี้ก่อนค่ะ (請先填這張表。)
- 你: ช่องนี้ต้องเขียนอะไรคะ (這一欄要填什麼？)
- พนักงาน: ตรงนี้เขียนชื่อค่ะ (這裡請填姓名。)
- 你: เขียนแค่ชื่อใช่ไหมคะ (只填姓名就可以嗎？)
- พนักงาน: ใช่ค่ะ เบอร์โทรอยู่ช่องล่างค่ะ (對，電話在下面那一欄。)
- 你: เข้าใจแล้วค่ะ จะเขียนข้างล่าง (知道了，我會寫在下面。)
- พนักงาน: ใช่ค่ะ แค่นี้พอค่ะ (對，這樣就夠了。)
- 你: ขอบคุณค่ะ เขียนเสร็จแล้ว (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | กรุณากรอกแบบฟอร์มนี้ก่อนค่ะ (請先填這張表。) | ช่องนี้ต้องเขียนอะไรคะ (這一欄要填什麼？) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t2 | ตรงนี้เขียนชื่อค่ะ (這裡請填姓名。) | เขียนแค่ชื่อใช่ไหมคะ (只填姓名就可以嗎？) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t3 | ใช่ค่ะ เบอร์โทรอยู่ช่องล่างค่ะ (對，電話在下面那一欄。) | เข้าใจแล้วค่ะ จะเขียนข้างล่าง (知道了，我會寫在下面。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t4 | ใช่ค่ะ แค่นี้พอค่ะ (對，這樣就夠了。) | ขอบคุณค่ะ เขียนเสร็จแล้ว (謝謝，我填好了。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |

---

## a2:th:a2_invite_friend_activity - ชวนเพื่อนไปทำกิจกรรม

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_invite_friend_activity
- Setting: คุยกับเพื่อนทางแชต
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: ชวนเพื่อนไปกิจกรรมธรรมดา แล้วตกลงเวลาและสถานที่ง่าย ๆ
- Support text: ชวนเพื่อนไปกิจกรรมง่าย ๆ เช่น ดื่มกาแฟหรือเดินเล่น แล้วตกลงแผนค่ะ

### Clean Dialogue Path

- เพื่อน: บ่ายนี้ไปดื่มกาแฟด้วยกันไหม (今天下午要一起喝咖啡嗎？)
- 你: บ่ายนี้ไปดื่มกาแฟด้วยกันไหม (今天下午要一起喝咖啡嗎？)
- เพื่อน: ได้สิ กี่โมงดี (好啊。幾點好？)
- 你: ประมาณบ่ายสามดีไหม (三點左右好嗎？)
- เพื่อน: เจอกันหน้าสถานีไหม (在車站前面見嗎？)
- 你: ได้ เจอกันหน้าสถานี (好，在車站前面見。)
- เพื่อน: ดีเลย เดี๋ยวเจอกันนะ (好，等一下見。)
- 你: ดีเลย เดี๋ยวเจอกันนะ (好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | บ่ายนี้ไปดื่มกาแฟด้วยกันไหม (今天下午要一起喝咖啡嗎？) | บ่ายนี้ไปดื่มกาแฟด้วยกันไหม (今天下午要一起喝咖啡嗎？) | 1. บ่ายนี้ช่วยเปลี่ยนห้องให้หน่อยค่ะ (今天下午請幫我換房間。) [wrong_scenario_service] - feedback: นี่เป็นคำขอบริการ ไม่ใช่คำชวนเพื่อนค่ะ<br>2. วันนี้ต้องมากับฉันนะ (今天一定要跟我來。) [too_pressuring] - feedback: ประโยคนี้กดดันเพื่อนเกินไปค่ะ | ชวนเพื่อนไปกิจกรรมง่าย ๆ ค่ะ |  |
| t2 | ได้สิ กี่โมงดี (好啊。幾點好？) | ประมาณบ่ายสามดีไหม (三點左右好嗎？) | 1. เมื่อวานไปตอนบ่ายสาม (昨天三點去了。) [wrong_time_past] - feedback: ตอนนี้กำลังนัดเวลาข้างหน้าค่ะ<br>2. ราคาเท่าไรคะ (多少錢？) [wrong_function_price] - feedback: นี่ไม่ใช่คำถามเรื่องราคาค่ะ | เสนอเวลาง่าย ๆ ค่ะ |  |
| t3 | เจอกันหน้าสถานีไหม (在車站前面見嗎？) | ได้ เจอกันหน้าสถานี (好，在車站前面見。) | 1. ได้ เปลี่ยนรถไฟกัน (好，換火車。) [wrong_scenario_transport] - feedback: นี่ไม่ใช่แผนเปลี่ยนรถค่ะ<br>2. ไม่ค่ะ ขอคืนเงิน (不，請退款。) [wrong_scenario_refund] - feedback: การคืนเงินอยู่นอกสถานการณ์นัดเพื่อนค่ะ | ยืนยันสถานที่นัดค่ะ |  |
| t4 | ดีเลย เดี๋ยวเจอกันนะ (好，等一下見。) | ดีเลย เดี๋ยวเจอกันนะ (好，等一下見。) | 1. ฉันต้องยกเลิกการจองค่ะ (我要取消預約。) [wrong_register_service] - feedback: เหมือนสถานการณ์จองบริการ ไม่ใช่นัดเพื่อนค่ะ<br>2. แพงเกินไปค่ะ (太貴了。) [wrong_detail_price] - feedback: ยังไม่ได้คุยเรื่องราคาค่ะ | ปิดแผนอย่างอบอุ่นค่ะ |  |

---

## a2:th:a2_lost_item_followup_message - ติดตามของที่ลืมไว้

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: จัดการงานดิจิทัลหรือเอกสารง่าย ๆ แบบความเสี่ยงต่ำด้วยประโยคสั้นระดับ A2
- Support text: ใช้เฉพาะข้อมูลที่จำเป็น ห้ามให้รหัสผ่าน ข้อมูลจ่ายเงิน บัตรประจำตัว หรือข้อมูลกฎหมาย/แพทย์ค่ะ

### Clean Dialogue Path

- พนักงาน: กำลังหาอะไรอยู่คะ (您在找什麼？)
- 你: ฉันน่าจะลืมร่มสีดำไว้ค่ะ (我好像把黑色雨傘忘在那裡。)
- พนักงาน: วางไว้ที่ไหนคะ (放在哪裡？)
- 你: น่าจะข้างเก้าอี้ในคาเฟ่ค่ะ (好像放在咖啡店椅子旁邊。)
- พนักงาน: กรุณาฝากชื่อและเบอร์ติดต่อค่ะ (請留下姓名和聯絡方式。)
- 你: ได้ค่ะ จะฝากชื่อและเบอร์โทรไว้ (好，我會留下姓名和電話。)
- พนักงาน: เราจะตรวจแล้วติดต่อกลับค่ะ (我確認後會聯絡您。)
- 你: ขอบคุณค่ะ จะรอข้อความนะคะ (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | กำลังหาอะไรอยู่คะ (您在找什麼？) | ฉันน่าจะลืมร่มสีดำไว้ค่ะ (我好像把黑色雨傘忘在那裡。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t2 | วางไว้ที่ไหนคะ (放在哪裡？) | น่าจะข้างเก้าอี้ในคาเฟ่ค่ะ (好像放在咖啡店椅子旁邊。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t3 | กรุณาฝากชื่อและเบอร์ติดต่อค่ะ (請留下姓名和聯絡方式。) | ได้ค่ะ จะฝากชื่อและเบอร์โทรไว้ (好，我會留下姓名和電話。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |
| t4 | เราจะตรวจแล้วติดต่อกลับค่ะ (我確認後會聯絡您。) | ขอบคุณค่ะ จะรอข้อความนะคะ (謝謝，我等您聯絡。) | 1. ฉันจะบอกรหัสผ่านค่ะ (我會告訴你密碼。) [forbidden_sensitive] - feedback: รหัสผ่านอยู่นอกขอบเขตงาน A2 นี้ค่ะ<br>2. ขอคืนเงินค่ะ (請退款。) [wrong_dispute_domain] - feedback: การคืนเงินหรือข้อพิพาทอยู่นอกขอบเขตงานนี้ค่ะ | ยืนยันเฉพาะรายละเอียดที่จำเป็นและปลอดภัยค่ะ |  |

---

## a2:th:a2_luggage_storage_pickup - ฝากกระเป๋าและถามเวลารับคืน

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_luggage_storage_pickup
- Setting: จุดฝากกระเป๋าในสถานี
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You store luggage and confirm pickup time with a simple receipt.
- Learner goal: Ask to store luggage and confirm pickup time/receipt.
- Support text: ฝากกระเป๋าที่สถานี แล้วถามว่าต้องมารับคืนกี่โมงและใช้ใบอะไร

### Clean Dialogue Path

- พนักงาน: จะฝากกระเป๋าไหมคะ (要寄放包包嗎？)
- คุณ: ค่ะ อยากฝากกระเป๋าใบนี้ (是的，我想寄放這個包包。)
- พนักงาน: มารับคืนได้ก่อนหนึ่งทุ่มวันนี้ค่ะ (今天晚上七點前可以來取回。)
- คุณ: มารับก่อนหนึ่งทุ่มได้ใช่ไหมคะ (晚上七點前來取就可以，對嗎？)
- พนักงาน: ตอนมารับคืน กรุณาแสดงใบรับฝากใบนี้ค่ะ (取件時請出示這張寄物單。)
- คุณ: ค่ะ ตอนรับคืนจะแสดงใบรับฝาก (好，取件時我會出示寄物單。)
- พนักงาน: ค่ะ มารับก่อนหนึ่งทุ่มนะคะ (好的，請晚上七點前來取。)
- คุณ: ขอบคุณค่ะ จะมาก่อนหนึ่งทุ่ม (謝謝，我會七點前來。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | จะฝากกระเป๋าไหมคะ (要寄放包包嗎？) | ค่ะ อยากฝากกระเป๋าใบนี้ (是的，我想寄放這個包包。) | 1. เมื่อวานรับกระเป๋าใบนี้แล้วค่ะ (我昨天已經取了這個包包。) [wrong_time_past] - feedback: ตอนนี้จะฝากกระเป๋า ไม่ใช่เล่าเรื่องเมื่อวาน<br>2. ชานชาลาอยู่ที่ไหนคะ (月台在哪裡？) [wrong_scenario_platform] - feedback: นี่เป็นจุดฝากกระเป๋า ไม่ใช่ถามชานชาลา | บอกว่าต้องการฝากกระเป๋าใบนี้ |  |
| t2 | มารับคืนได้ก่อนหนึ่งทุ่มวันนี้ค่ะ (今天晚上七點前可以來取回。) | มารับก่อนหนึ่งทุ่มได้ใช่ไหมคะ (晚上七點前來取就可以，對嗎？) | 1. ฝากตอนเจ็ดโมงเช้าได้ใช่ไหมคะ (早上七點寄放就可以，對嗎？) [wrong_time_pickup] - feedback: พนักงานบอกเวลารับคืนก่อนหนึ่งทุ่ม ไม่ใช่ฝากตอนเช้า<br>2. ขอคืนเงินได้ที่ไหนคะ (退款在哪裡拿？) [forbidden_refund_domain] - feedback: เรื่องคืนเงินไม่ใช่เนื้อหาของการฝากกระเป๋านี้ | เวลารับคืนคือก่อนหนึ่งทุ่ม | ก่อน = 在...之前<br>ก่อนหนึ่งทุ่ม means before 7 p.m.<br>ก่อนหนึ่งทุ่ม = 晚上 7 點前<br>มารับคืน = 來取回 |
| t3 | ตอนมารับคืน กรุณาแสดงใบรับฝากใบนี้ค่ะ (取件時請出示這張寄物單。) | ค่ะ ตอนรับคืนจะแสดงใบรับฝาก (好，取件時我會出示寄物單。) | 1. ทิ้งใบรับฝากได้ไหมคะ (可以丟掉寄物單嗎？) [wrong_instruction] - feedback: พนักงานบอกให้แสดงใบรับฝากตอนรับคืน จึงไม่ควรทิ้ง<br>2. จะแสดงพาสปอร์ตค่ะ (我會出示護照。) [forbidden_identity_detail] - feedback: งานนี้ใช้ใบรับฝาก ไม่ใช่พาสปอร์ต | ต้องแสดงอะไรตอนมารับคืน |  |
| t4 | ค่ะ มารับก่อนหนึ่งทุ่มนะคะ (好的，請晚上七點前來取。) | ขอบคุณค่ะ จะมาก่อนหนึ่งทุ่ม (謝謝，我會七點前來。) | 1. รถไฟช้าสิบนาทีค่ะ (火車晚十分鐘。) [wrong_scenario_delay] - feedback: นี่เป็นสถานการณ์รถไฟล่าช้า ไม่ใช่รับกระเป๋าคืน<br>2. อยากแจ้งกระเป๋าหายค่ะ (我想申報行李遺失。) [forbidden_lost_property_claim] - feedback: เรื่องกระเป๋าหายเกินขอบเขตงานฝากและรับคืนแบบง่ายนี้ | ยืนยันเวลาแล้ว ขอบคุณสั้น ๆ |  |

---

## a2:th:a2_make_simple_plan_sequence - วางแผนสองขั้นตอนง่าย ๆ

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: โทรคุยแผนสุดสัปดาห์
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: วางแผนสองขั้นตอนกับเพื่อน และยืนยันลำดับ
- Support text: วางแผนกับเพื่อนสองขั้นตอน: ก่อนทำอย่างหนึ่ง แล้วค่อยทำอีกอย่างค่ะ

### Clean Dialogue Path

- เพื่อน: เราเจอกันที่สถานีก่อนดีไหม (我們先在車站見好嗎？)
- 你: ได้ เจอกันที่สถานีก่อน (好，先在車站見。)
- เพื่อน: แล้วเดินไปสวนสาธารณะกันไหม (接著走去公園嗎？)
- 你: ดี แล้วเดินไปสวนกัน (好，接著走去公園。)
- เพื่อน: งั้นเจอสถานีก่อน แล้วไปสวนใช่ไหม (所以先車站，接著去公園，對嗎？)
- 你: ใช่ เจอสถานีก่อน แล้วไปสวน (對，先車站，接著去公園。)
- เพื่อน: ดีเลย เจอกันวันเสาร์บ่ายสองนะ (很好，星期六下午兩點見。)
- 你: โอเค เจอกันวันเสาร์บ่ายสอง (好，星期六下午兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | เราเจอกันที่สถานีก่อนดีไหม (我們先在車站見好嗎？) | ได้ เจอกันที่สถานีก่อน (好，先在車站見。) | 1. ได้ คืนเงินให้ฉันก่อน (好，先退款給我。) [wrong_scenario_refund] - feedback: นี่เป็นแผนกับเพื่อน ไม่ใช่การคืนเงินค่ะ<br>2. ไม่ เด็ดขาด (不，絕對不要。) [too_blunt] - feedback: ฟังดูแรงเกินไปสำหรับการวางแผนกับเพื่อนค่ะ | ยืนยันขั้นตอนแรกค่ะ |  |
| t2 | แล้วเดินไปสวนสาธารณะกันไหม (接著走去公園嗎？) | ดี แล้วเดินไปสวนกัน (好，接著走去公園。) | 1. เมื่อวานไปสวนมา (昨天去了公園。) [wrong_time_past] - feedback: กำลังวางแผนสำหรับวันข้างหน้าค่ะ<br>2. ฉันจะไปรับกระเป๋าที่สนามบิน (我會在機場取行李。) [wrong_scenario_transport] - feedback: นี่ไม่ใช่เรื่องรับกระเป๋าค่ะ | ยืนยันขั้นตอนที่สองค่ะ |  |
| t3 | งั้นเจอสถานีก่อน แล้วไปสวนใช่ไหม (所以先車站，接著去公園，對嗎？) | ใช่ เจอสถานีก่อน แล้วไปสวน (對，先車站，接著去公園。) | 1. ใช่ สนามบินก่อน แล้วโรงแรม (對，先機場，接著飯店。) [wrong_details] - feedback: สถานที่เปลี่ยนไปค่ะ<br>2. ไม่ ต้องไปอีกสามที่ (不，還要去三個地方。) [too_complex] - feedback: งานนี้ใช้แผนสองขั้นตอนเท่านั้นค่ะ | พูดลำดับอีกครั้งค่ะ |  |
| t4 | ดีเลย เจอกันวันเสาร์บ่ายสองนะ (很好，星期六下午兩點見。) | โอเค เจอกันวันเสาร์บ่ายสอง (好，星期六下午兩點見。) | 1. โอเค เจอกันเมื่อเช้านี้แล้ว (好，今天早上已經見過了。) [wrong_time_past] - feedback: ต้องยืนยันเวลาที่จะเจอกันข้างหน้าค่ะ<br>2. โอเค ฉันจะถามหมอ (好，我會問醫生。) [forbidden_or_wrong_domain] - feedback: นี่ไม่ใช่สถานการณ์ทางการแพทย์ค่ะ | ยืนยันเวลาและปิดแผนค่ะ |  |

---

## a2:th:a2_plan_tomorrow_morning - บอกแผนพรุ่งนี้เช้า

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: คุยกับเพื่อนเรื่องพรุ่งนี้เช้า
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A friend asks what you plan to do tomorrow morning.
- Learner goal: Say a near-future plan with one simple next step and an approximate time.
- Support text: เพื่อนถามแผนพรุ่งนี้เช้า เลือกคำตอบสั้น ๆ ที่บอกว่าจะทำอะไร แล้วทำอะไรต่อ

### Clean Dialogue Path

- เพื่อน: พรุ่งนี้เช้า จะทำอะไรเหรอ (明天早上你要做什麼？)
- คุณ: จะไปตลาดตอนเช้า (我早上要去市場。)
- เพื่อน: แล้วต่อจากนั้นล่ะ (那之後呢？)
- คุณ: แล้วก็จะไปอ่านหนังสือที่คาเฟ่ (然後我會去咖啡店讀書。)
- เพื่อน: งั้นก่อนเที่ยงว่างไหม (那中午前有空嗎？)
- คุณ: ว่าง ประมาณสิบเอ็ดโมงนะ (有空，大約十一點。)
- เพื่อน: โอเค งั้นสิบเอ็ดโมงค่อยคุยกัน (好，那十一點再聊。)
- คุณ: ได้เลย พรุ่งนี้เจอกันนะ (可以，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | พรุ่งนี้เช้า จะทำอะไรเหรอ (明天早上你要做什麼？) | จะไปตลาดตอนเช้า (我早上要去市場。) | 1. เมื่อวานไปตลาดแล้ว (我昨天已經去市場了。) [wrong_time_past] - feedback: เพื่อนถามพรุ่งนี้เช้า ไม่ใช่เมื่อวาน<br>2. ตลาดอยู่ที่ไหน (市場在哪裡？) [wrong_function_location_question] - feedback: นี่เป็นคำถามเรื่องสถานที่ แต่ตอนนี้ต้องบอกแผนของคุณ | เพื่อนถามแผนพรุ่งนี้เช้า ใช้ จะ ไป... เพื่อบอกสิ่งที่ตั้งใจทำ |  |
| t2 | แล้วต่อจากนั้นล่ะ (那之後呢？) | แล้วก็จะไปอ่านหนังสือที่คาเฟ่ (然後我會去咖啡店讀書。) | 1. เจอกันที่คาเฟ่ไหม (要在咖啡店見嗎？) [wrong_function_meeting_place] - feedback: คำนี้ใช้ชวนเจอ แต่เพื่อนถามว่าคุณจะทำอะไรต่อ<br>2. ตอนนี้อ่านเสร็จแล้ว (我現在讀完了。) [wrong_time_aspect] - feedback: ต้องบอกแผนพรุ่งนี้ต่อจากนั้น ไม่ใช่สิ่งที่ทำเสร็จแล้วตอนนี้ | ใช้ แล้วก็ เพื่อบอกขั้นตอนต่อไปแบบสั้น ๆ | แล้วก็ = 然後<br>แล้วก็ connects a simple next step in everyday Thai.<br>แล้วก็ไปคาเฟ่ = 然後去咖啡店<br>แล้วก็กลับบ้าน = 然後回家 |
| t3 | งั้นก่อนเที่ยงว่างไหม (那中午前有空嗎？) | ว่าง ประมาณสิบเอ็ดโมงนะ (有空，大約十一點。) | 1. เมื่อวานว่างนะ (我昨天有空。) [wrong_time_past] - feedback: เพื่อนถามพรุ่งนี้ก่อนเที่ยง ไม่ใช่เมื่อวาน<br>2. ตลาดปิดสิบเอ็ดโมงไหม (市場十一點關門嗎？) [wrong_focus_market_hours] - feedback: ตอนนี้เพื่อนถามว่าคุณว่างไหม ไม่ได้ถามเวลาปิดตลาด | ตอบเวลาคร่าว ๆ ได้ เช่น ประมาณสิบเอ็ดโมง |  |
| t4 | โอเค งั้นสิบเอ็ดโมงค่อยคุยกัน (好，那十一點再聊。) | ได้เลย พรุ่งนี้เจอกันนะ (可以，明天見。) | 1. ขอสั่งอีกครั้ง (我想再點一次。) [wrong_scenario_ordering] - feedback: นี่เป็นสถานการณ์สั่งอาหาร ไม่ใช่คุยแผนพรุ่งนี้<br>2. อยากเปลี่ยนห้อง (我想換房間。) [wrong_scenario_hotel] - feedback: นี่เป็นสถานการณ์โรงแรม ตอนนี้แค่ยืนยันว่าเจอกันพรุ่งนี้ | แผนตกลงแล้ว ปิดด้วยคำสั้น ๆ แบบเพื่อนได้ |  |

---

## a2:th:a2_report_room_problem - แจ้งปัญหาในห้องพัก

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_report_room_problem
- Setting: ที่แผนกต้อนรับโรงแรม
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: แจ้งปัญหาเล็ก ๆ ในห้องพัก แล้วฟังว่าพนักงานจะช่วยอย่างไร

### Clean Dialogue Path

- พนักงานโรงแรม: สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ (您好，有什麼可以幫忙嗎？)
- คุณ: ในห้องไม่มีผ้าขนหนูค่ะ ช่วยได้ไหมคะ (房間裡沒有毛巾。可以幫忙嗎？)
- พนักงานโรงแรม: ได้ค่ะ เดี๋ยวเอาผ้าขนหนูไปให้ทันทีค่ะ (好的，馬上拿毛巾過去。)
- คุณ: จะเอาผ้าขนหนูมาให้ใช่ไหมคะ (會拿毛巾過來，對嗎？)
- พนักงานโรงแรม: ใช้เวลาประมาณสิบนาทีค่ะ (大約需要十分鐘。)
- คุณ: ประมาณสิบนาทีนะคะ (大約十分鐘，對嗎？)
- พนักงานโรงแรม: จะส่งไปที่ห้องนะคะ (會送到房間。)
- คุณ: ขอบคุณค่ะ จะรอในห้องค่ะ (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | สวัสดีค่ะ มีอะไรให้ช่วยไหมคะ (您好，有什麼可以幫忙嗎？) | ในห้องไม่มีผ้าขนหนูค่ะ ช่วยได้ไหมคะ (房間裡沒有毛巾。可以幫忙嗎？) | 1. อยากจองห้องค่ะ (我想訂房。) [wrong_detail_or_domain] - feedback: ตอนนี้ต้องแจ้งปัญหาในห้อง ไม่ใช่จองห้อง<br>2. ขอค่าชดเชยค่ะ (請賠償我。) [forbidden_or_wrong_domain] - feedback: การขอค่าชดเชยอยู่นอกขอบเขต A2 นี้ | บอกปัญหาในห้องสั้น ๆ |  |
| t2 | ได้ค่ะ เดี๋ยวเอาผ้าขนหนูไปให้ทันทีค่ะ (好的，馬上拿毛巾過去。) | จะเอาผ้าขนหนูมาให้ใช่ไหมคะ (會拿毛巾過來，對嗎？) | 1. จะเปลี่ยนห้องให้ใช่ไหมคะ (會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: พนักงานบอกว่าจะเอาผ้าขนหนูไปให้ ไม่ใช่เปลี่ยนห้อง<br>2. รถไฟจะช้าใช่ไหมคะ (是火車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: นี่เป็นสถานการณ์โรงแรม ไม่ใช่การเดินทาง | 確認ว่าพนักงานจะทำอะไร | รูปแบบ A2 ที่ใช้บ่อย<br>เป็นสำนวนสั้น ๆ ที่ใช้ได้ในสถานการณ์โรงแรมนี้<br>เอาผ้าขนหนูไปให้ = 拿毛巾過去 |
| t3 | ใช้เวลาประมาณสิบนาทีค่ะ (大約需要十分鐘。) | ประมาณสิบนาทีนะคะ (大約十分鐘，對嗎？) | 1. เช็กเอาต์ในอีกหนึ่งชั่วโมงค่ะ (一小時後退房。) [wrong_detail_or_domain] - feedback: นี่เป็นเวลารอผ้าขนหนู ไม่ใช่เช็กเอาต์<br>2. ต้องไปโรงพยาบาลค่ะ (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: เนื้อหาทางการแพทย์อยู่นอกขอบเขตนี้ | 確認เวลาที่ต้องรอ |  |
| t4 | จะส่งไปที่ห้องนะคะ (會送到房間。) | ขอบคุณค่ะ จะรอในห้องค่ะ (謝謝。我在房間等。) | 1. ช่วยอธิบายกฎคืนเงินค่ะ (請說明退款規則。) [wrong_detail_or_domain] - feedback: กฎคืนเงินอยู่นอกขอบเขตปัญหาเล็ก ๆ ในห้อง<br>2. ขอกาแฟสองแก้วค่ะ (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: นี่เป็นการสั่งอาหาร ไม่ใช่บริการห้องพัก | ขอบคุณและจบสถานการณ์ |  |

---

## a2:th:a2_request_room_change - ขอเปลี่ยนห้องพัก

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_request_room_change
- Setting: ที่แผนกต้อนรับโรงแรม
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: บอกเหตุผลง่าย ๆ แล้วถามว่าสามารถเปลี่ยนห้องได้ไหม

### Clean Dialogue Path

- พนักงานโรงแรม: มีอะไรให้ช่วยไหมคะ (需要什麼協助嗎？)
- คุณ: ห้องเสียงดังนิดหน่อย เปลี่ยนห้องได้ไหมคะ (房間有點吵，可以換房嗎？)
- พนักงานโรงแรม: เช็กแล้วค่ะ มีห้องอื่นหนึ่งห้อง (確認後，有另一間房。)
- คุณ: มีห้องอื่นหนึ่งห้องใช่ไหมคะ (有另一間房，對嗎？)
- พนักงานโรงแรม: อีกสามสิบนาทีย้ายไปห้องใหม่ได้ค่ะ (三十分鐘後可以搬到新房間。)
- คุณ: อีกสามสิบนาทีย้ายได้ใช่ไหมคะ (三十分鐘後可以搬，對嗎？)
- พนักงานโรงแรม: ถ้าห้องพร้อมแล้ว จะให้คีย์การ์ดใหม่นะคะ (準備好後，會給您新房卡。)
- คุณ: ค่ะ ถ้าพร้อมแล้วจะรับคีย์การ์ดใหม่ค่ะ (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | มีอะไรให้ช่วยไหมคะ (需要什麼協助嗎？) | ห้องเสียงดังนิดหน่อย เปลี่ยนห้องได้ไหมคะ (房間有點吵，可以換房嗎？) | 1. เปลี่ยนโต๊ะในร้านอาหารได้ไหมคะ (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: นี่เป็นห้องพัก ไม่ใช่โต๊ะร้านอาหาร<br>2. จะร้องเรียนอย่างเป็นทางการค่ะ (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: การร้องเรียนทางการอยู่นอกขอบเขต A2 นี้ | ขอเปลี่ยนห้องพร้อมเหตุผลง่าย ๆ |  |
| t2 | เช็กแล้วค่ะ มีห้องอื่นหนึ่งห้อง (確認後，有另一間房。) | มีห้องอื่นหนึ่งห้องใช่ไหมคะ (有另一間房，對嗎？) | 1. มีตั๋วอื่นหนึ่งใบใช่ไหมคะ (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: นี่เป็นห้อง ไม่ใช่ตั๋ว<br>2. ขอค่าชดเชยด้วยได้ไหมคะ (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: ค่าชดเชยอยู่นอกขอบเขตงานนี้ | ฟังตัวเลือกที่มี | รูปแบบ A2 ที่ใช้บ่อย<br>เป็นสำนวนสั้น ๆ ที่ใช้ได้ในสถานการณ์โรงแรมนี้<br>ห้องอื่นหนึ่งห้อง = 另一間房 |
| t3 | อีกสามสิบนาทีย้ายไปห้องใหม่ได้ค่ะ (三十分鐘後可以搬到新房間。) | อีกสามสิบนาทีย้ายได้ใช่ไหมคะ (三十分鐘後可以搬，對嗎？) | 1. อีกสามชั่วโมงเช็กเอาต์ใช่ไหมคะ (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: พนักงานบอกว่าย้ายได้ในสามสิบนาที<br>2. จะย้ายเพราะต้องไปโรงพยาบาลค่ะ (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: เหตุผลทางการแพทย์อยู่นอกขอบเขตนี้ | 確認เวลาย้ายห้อง |  |
| t4 | ถ้าห้องพร้อมแล้ว จะให้คีย์การ์ดใหม่นะคะ (準備好後，會給您新房卡。) | ค่ะ ถ้าพร้อมแล้วจะรับคีย์การ์ดใหม่ค่ะ (好，準備好後我拿新房卡。) | 1. ไม่ค่ะ จะเปลี่ยนเวลารถไฟค่ะ (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: นี่เป็นการเปลี่ยนห้อง ไม่ใช่ตั๋วเดินทาง<br>2. จะบอกตำรวจตอนนี้ค่ะ (我現在會告訴警察。) [forbidden_or_wrong_domain] - feedback: ขั้นตอนตำรวจอยู่นอกขอบเขตนี้ | ตอบรับและจบสถานการณ์ |  |

---

## a2:th:a2_reschedule_meeting_time - ขอเลื่อนเวลานัด

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_reschedule_meeting_time
- Setting: ปรับเวลานัดกับเพื่อน
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You need to ask a friend to move a meeting time.
- Learner goal: Ask to change a meeting time and confirm the new time.
- Support text: เวลานัดเดิมไม่สะดวกแล้ว ขอเปลี่ยนเวลา เสนอเวลาใหม่ และยืนยันกับเพื่อน

### Clean Dialogue Path

- เพื่อน: วันนี้เจอกันบ่ายสามใช่ไหม (今天下午三點見，對嗎？)
- คุณ: ขอโทษนะ ขอเลื่อนเวลาได้ไหม (不好意思，可以改時間嗎？)
- เพื่อน: ได้ แล้วอยากเลื่อนไปกี่โมง (可以，那想改到幾點？)
- คุณ: เลื่อนไปสี่โมงได้ไหม (可以改到四點嗎？)
- เพื่อน: ได้ สี่โมงก็โอเค (可以，四點也可以。)
- คุณ: งั้นเจอกันสี่โมงนะ (那四點見。)
- เพื่อน: โอเค แล้วเจอกัน (好，到時見。)
- คุณ: ได้ แล้วเจอกันนะ (可以，到時見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | วันนี้เจอกันบ่ายสามใช่ไหม (今天下午三點見，對嗎？) | ขอโทษนะ ขอเลื่อนเวลาได้ไหม (不好意思，可以改時間嗎？) | 1. ใช่ เมื่อวานเจอกันแล้ว (對，昨天已經見過了。) [wrong_time_past] - feedback: เพื่อนพูดถึงนัดวันนี้ ไม่ใช่เมื่อวาน<br>2. จ่ายด้วยบัตรได้ไหม (可以刷卡嗎？) [wrong_scenario_payment] - feedback: นี่เป็นเรื่องจ่ายเงิน แต่ตอนนี้ต้องขอเปลี่ยนเวลานัด | เพื่อนยืนยันเวลาเดิม คุณต้องขอเปลี่ยนเวลาอย่างสุภาพ |  |
| t2 | ได้ แล้วอยากเลื่อนไปกี่โมง (可以，那想改到幾點？) | เลื่อนไปสี่โมงได้ไหม (可以改到四點嗎？) | 1. ไปทางออกที่สี่ไหม (要去四號出口嗎？) [wrong_entity_exit_number] - feedback: ทางออกที่สี่คือสถานที่ ไม่ใช่เวลาใหม่<br>2. สี่โมงไปแล้ว (我四點已經去了。) [wrong_time_past] - feedback: นี่เป็นอดีต แต่ตอนนี้ต้องเสนอเวลาใหม่ | เสนอเวลาใหม่ด้วย เลื่อนไป... ได้ไหม | เลื่อนไป + เวลา<br>เลื่อนไปสี่โมง means move it to four o'clock.<br>เลื่อนไปสี่โมง = 改到四點<br>เลื่อนไปพรุ่งนี้ = 改到明天 |
| t3 | ได้ สี่โมงก็โอเค (可以，四點也可以。) | งั้นเจอกันสี่โมงนะ (那四點見。) | 1. งั้นเจอกันบ่ายสามนะ (那下午三點見。) [repeats_old_time] - feedback: เวลาเดิมคือบ่ายสาม แต่ตอนนี้เลื่อนไปสี่โมงแล้ว<br>2. ขอกุญแจห้องหน่อย (請給我房間鑰匙。) [wrong_scenario_hotel] - feedback: นี่เป็นสถานการณ์โรงแรม ไม่ใช่ยืนยันเวลานัดใหม่ | เวลาใหม่ตกลงแล้ว ยืนยันอีกครั้งให้ชัด |  |
| t4 | โอเค แล้วเจอกัน (好，到時見。) | ได้ แล้วเจอกันนะ (可以，到時見。) | 1. เพราะสายแล้ว (因為已經晚了。) [fragment_without_need] - feedback: ตอนนี้ตกลงเวลาใหม่แล้ว ไม่ต้องเพิ่มเหตุผลสั้น ๆ<br>2. จองใหม่แล้ว (我重新預約了。) [wrong_scenario_reservation] - feedback: นี่ไม่ใช่ระบบจอง เป็นการเลื่อนเวลานัดกับเพื่อน | นัดใหม่เสร็จแล้ว ปิดบทสนทนาสั้น ๆ |  |

---

## a2:th:a2_transport_delay_announcement - ฟังประกาศรถไฟล่าช้า

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_transport_delay_announcement
- Setting: ชานชาลารถไฟ
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: You hear a short train delay announcement and choose what to do.
- Learner goal: Understand the delay duration and make a simple next-step choice.
- Support text: ฟังประกาศว่ารถไฟล่าช้ากี่นาที แล้วเลือกว่าจะรอหรือใช้ทางอื่น

### Clean Dialogue Path

- เจ้าหน้าที่: ประกาศค่ะ รถไฟสายนี้จะมาช้าไปประมาณสิบนาที (廣播：這班車會晚大約十分鐘。)
- คุณ: รถไฟช้าประมาณสิบนาทีใช่ไหม (火車大約晚十分鐘，對嗎？)
- เจ้าหน้าที่: ถ้าประมาณสิบนาที จะรอไหมคะ หรือจะไปขึ้นรถบัส (如果大約十分鐘，您要等嗎？還是去搭公車？)
- คุณ: ถ้าสิบนาที จะรอค่ะ (如果十分鐘，我會等。)
- เจ้าหน้าที่: ขบวนถัดไปจะมาประมาณสิบโมงยี่สิบค่ะ (下一班大約十點二十分會到。)
- คุณ: งั้นจะขึ้นขบวนสิบโมงยี่สิบค่ะ (那我搭十點二十分那班。)
- เจ้าหน้าที่: ค่ะ รอที่ชานชาลานี้ได้เลยค่ะ (好的，在這個月台等就可以。)
- คุณ: เข้าใจแล้วค่ะ จะรอตรงนี้ (了解，我會在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ประกาศค่ะ รถไฟสายนี้จะมาช้าไปประมาณสิบนาที (廣播：這班車會晚大約十分鐘。) | รถไฟช้าประมาณสิบนาทีใช่ไหม (火車大約晚十分鐘，對嗎？) | 1. รถไฟออกเดี๋ยวนี้ใช่ไหม (火車現在就出發，對嗎？) [wrong_delay_meaning] - feedback: ประกาศบอกว่ารถไฟช้าประมาณสิบนาที ไม่ใช่ออกเดี๋ยวนี้<br>2. ต้องเปลี่ยนตั๋วใช่ไหม (需要換票，對嗎？) [wrong_scenario_ticket_change] - feedback: นี่เป็นประกาศรถไฟล่าช้า ไม่ใช่เรื่องเปลี่ยนตั๋ว | ฟังคำว่า สิบนาที ว่ารถไฟช้าเท่าไร |  |
| t2 | ถ้าประมาณสิบนาที จะรอไหมคะ หรือจะไปขึ้นรถบัส (如果大約十分鐘，您要等嗎？還是去搭公車？) | ถ้าสิบนาที จะรอค่ะ (如果十分鐘，我會等。) | 1. เมื่อวานรอแล้วค่ะ (我昨天已經等了。) [wrong_time_past] - feedback: ตอนนี้ต้องบอกว่าจะทำอะไร ไม่ใช่เรื่องเมื่อวาน<br>2. ขอใบเสร็จค่ะ (請給我收據。) [wrong_service_receipt] - feedback: ตอนนี้ไม่ได้ขอใบเสร็จ ต้องเลือกว่าจะรอหรือไปทางอื่น | ใช้ ถ้า... จะ... เพื่อบอกการตัดสินใจง่าย ๆ | ถ้า... จะ... = 如果...會...<br>ถ้าประมาณสิบนาที จะรอ means if it is about ten minutes, I will wait.<br>ถ้าประมาณสิบนาที = 如果大約十分鐘<br>จะรอ = 會等 |
| t3 | ขบวนถัดไปจะมาประมาณสิบโมงยี่สิบค่ะ (下一班大約十點二十分會到。) | งั้นจะขึ้นขบวนสิบโมงยี่สิบค่ะ (那我搭十點二十分那班。) | 1. ร้านปิดสิบโมงยี่สิบใช่ไหม (店十點二十分關門，對嗎？) [wrong_function_business_hours] - feedback: เวลานี้เป็นเวลารถไฟ ไม่ใช่เวลาร้านปิด<br>2. ขอคืนเงินค่าตั๋วรถบัสค่ะ (我想退公車票。) [forbidden_refund_escalation] - feedback: เรื่องคืนเงินเกินขอบเขต A2 นี้ ให้ยืนยันเวลารถไฟก็พอ | ยืนยันเวลาขบวนถัดไป |  |
| t4 | ค่ะ รอที่ชานชาลานี้ได้เลยค่ะ (好的，在這個月台等就可以。) | เข้าใจแล้วค่ะ จะรอตรงนี้ (了解，我會在這裡等。) | 1. ขอเปลี่ยนห้องค่ะ (我想換房間。) [wrong_scenario_hotel] - feedback: นี่เป็นสถานี ไม่ใช่โรงแรม<br>2. อยากจองโรงพยาบาลค่ะ (我想預約醫院。) [forbidden_medical_domain] - feedback: เรื่องโรงพยาบาลไม่เกี่ยวกับสถานการณ์รถไฟล่าช้า | รู้ที่รอแล้ว ตอบสั้น ๆ ได้ |  |

---

## a2:th:a2_understand_hotel_notice - เข้าใจประกาศของโรงแรม

- Level: A2
- Language: Thai (th)
- Scenario ID: a2_understand_hotel_notice
- Setting: ที่ล็อบบี้โรงแรม
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: อ่านหรือฟังประกาศสั้น ๆ ของโรงแรม แล้วยืนยันเวลา สถานที่ และกฎง่าย ๆ

### Clean Dialogue Path

- พนักงานโรงแรม: ดูประกาศนะคะ อาหารเช้าเริ่มเจ็ดโมงถึงเก้าโมงเช้า (請看公告。早餐是早上七點到九點。)
- คุณ: อาหารเช้าเจ็ดโมงถึงเก้าโมงเช้าใช่ไหมคะ (早餐是早上七點到九點，對嗎？)
- พนักงานโรงแรม: สถานที่คือร้านอาหารชั้นสองค่ะ (地點是二樓餐廳。)
- คุณ: ไปที่ร้านอาหารชั้นสองใช่ไหมคะ (去二樓餐廳就可以，對嗎？)
- พนักงานโรงแรม: ที่ทางเข้า บอกแค่หมายเลขห้องก็พอค่ะ (入口只要告知房號即可。)
- คุณ: บอกหมายเลขห้องที่ทางเข้าก็พอใช่ไหมคะ (入口只要說房號就可以，對嗎？)
- พนักงานโรงแรม: ใช่ค่ะ พรุ่งนี้เช้ามาได้เลยค่ะ (對，明天早上來就可以。)
- คุณ: ค่ะ พรุ่งนี้เช้าจะไปร้านอาหารชั้นสองค่ะ (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ดูประกาศนะคะ อาหารเช้าเริ่มเจ็ดโมงถึงเก้าโมงเช้า (請看公告。早餐是早上七點到九點。) | อาหารเช้าเจ็ดโมงถึงเก้าโมงเช้าใช่ไหมคะ (早餐是早上七點到九點，對嗎？) | 1. อาหารเช้าหนึ่งทุ่มถึงสามทุ่มใช่ไหมคะ (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: ประกาศบอกว่าเป็นตอนเช้า<br>2. เช็กเอาต์เก้าโมงเช้าใช่ไหมคะ (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: ประกาศนี้เกี่ยวกับอาหารเช้า ไม่ใช่เช็กเอาต์ | หาเวลาในประกาศ |  |
| t2 | สถานที่คือร้านอาหารชั้นสองค่ะ (地點是二樓餐廳。) | ไปที่ร้านอาหารชั้นสองใช่ไหมคะ (去二樓餐廳就可以，對嗎？) | 1. ไปที่ห้องชั้นสามใช่ไหมคะ (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: สถานที่คือร้านอาหารชั้นสอง<br>2. โชว์พาสปอร์ตใช่ไหมคะ (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: ไม่ต้องใช้พาสปอร์ตกับประกาศนี้ | 確認สถานที่ | รูปแบบ A2 ที่ใช้บ่อย<br>เป็นสำนวนสั้น ๆ ที่ใช้ได้ในสถานการณ์โรงแรมนี้<br>ร้านอาหารชั้นสอง = 二樓餐廳 |
| t3 | ที่ทางเข้า บอกแค่หมายเลขห้องก็พอค่ะ (入口只要告知房號即可。) | บอกหมายเลขห้องที่ทางเข้าก็พอใช่ไหมคะ (入口只要說房號就可以，對嗎？) | 1. คุยกับตำรวจที่ทางเข้าใช่ไหมคะ (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: นี่เป็นประกาศอาหารเช้า ไม่ใช่เรื่องตำรวจ<br>2. รับเงินคืนที่ทางเข้าใช่ไหมคะ (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: การคืนเงินไม่เกี่ยวกับประกาศนี้ | 確認เงื่อนไขง่าย ๆ |  |
| t4 | ใช่ค่ะ พรุ่งนี้เช้ามาได้เลยค่ะ (對，明天早上來就可以。) | ค่ะ พรุ่งนี้เช้าจะไปร้านอาหารชั้นสองค่ะ (好，我明天早上去二樓餐廳。) | 1. ค่ะ คืนนี้จะไปรับผ้าซักค่ะ (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: นี่เป็นอาหารเช้า ไม่ใช่ซักรีด<br>2. ค่ะ จะเขียนรายงานอุบัติเหตุค่ะ (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: รายงานอุบัติเหตุอยู่นอกขอบเขตนี้ | 確認ว่าจะทำอะไร |  |

---
