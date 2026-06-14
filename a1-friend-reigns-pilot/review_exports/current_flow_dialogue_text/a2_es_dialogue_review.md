# A2 Spanish Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:es:a2_app_booking_confirmation - Confirmar una Reserva en la App

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_app_booking_confirmation
- Setting: mensaje de ayuda
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Manejar una tarea digital o de formulario simple de bajo riesgo con frases cortas de A2.
- Support text: Mantén la tarea de bajo riesgo. No des contraseñas, pagos, ID sensible ni información legal o médica.

### Clean Dialogue Path

- personal: La reserva está confirmada para hoy a las tres. (預約確認為今天下午三點。)
- 你: ¿Dónde es el lugar? (地點在哪裡？)
- personal: Es en el segundo piso de la cafetería. (在咖啡店二樓。)
- 你: ¿Entonces es en el segundo piso de la cafetería? (是在咖啡店二樓，對嗎？)
- personal: Sí, la reserva está a nombre de Mina. (對，預約姓名是 Mina。)
- 你: Sí, ese es mi nombre. (對，是我的名字。)
- personal: Entonces le esperamos a las tres. (那下午三點見。)
- 你: De acuerdo, voy a las tres. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | La reserva está confirmada para hoy a las tres. (預約確認為今天下午三點。) | ¿Dónde es el lugar? (地點在哪裡？) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t2 | Es en el segundo piso de la cafetería. (在咖啡店二樓。) | ¿Entonces es en el segundo piso de la cafetería? (是在咖啡店二樓，對嗎？) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t3 | Sí, la reserva está a nombre de Mina. (對，預約姓名是 Mina。) | Sí, ese es mi nombre. (對，是我的名字。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t4 | Entonces le esperamos a las tres. (那下午三點見。) | De acuerdo, voy a las tres. (好，我下午三點會去。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |

---

## a2:es:a2_ask_ingredient_preference - Preguntar por un Ingrediente

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_ask_ingredient_preference
- Setting: mostrador del restaurante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Pregunte si lleva un ingrediente común y elija según su preferencia.
- Support text: Pregunte si lleva un ingrediente común y elija según su preferencia.

### Clean Dialogue Path

- empleado: ¿Qué desea pedir? (您想點什麼？)
- 你: ¿Esta ensalada lleva cebolla? (這個沙拉裡有洋蔥嗎？)
- empleado: Sí, lleva un poco de cebolla. (有，放一點洋蔥。)
- 你: Lleva un poco de cebolla, ¿verdad? (有一點洋蔥，對嗎？)
- empleado: Si quiere, podemos prepararla sin cebolla. (如果您想要，可以不加洋蔥。)
- 你: Sí, sin cebolla, por favor. (好的，請不要加洋蔥。)
- empleado: Claro. La preparo sin cebolla. (可以，我會準備不加洋蔥的。)
- 你: Gracias. Prepárela así, por favor. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Qué desea pedir? (您想點什麼？) | ¿Esta ensalada lleva cebolla? (這個沙拉裡有洋蔥嗎？) | 1. ¿En qué piso está esta ensalada? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: Un piso no tiene relación con ingredientes.<br>2. Por favor, cambie la hora de mi billete. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: Esto cambia a una situación de billete. | Pregunte por un ingrediente común. |  |
| t2 | Sí, lleva un poco de cebolla. (有，放一點洋蔥。) | Lleva un poco de cebolla, ¿verdad? (有一點洋蔥，對嗎？) | 1. Lleva mucha carne, ¿verdad? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: No se mencionó carne.<br>2. La habitación es ruidosa, ¿verdad? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: Esto cambia a un problema de hotel. | Confirme la información del ingrediente. |  |
| t3 | Si quiere, podemos prepararla sin cebolla. (如果您想要，可以不加洋蔥。) | Sí, sin cebolla, por favor. (好的，請不要加洋蔥。) | 1. Sí, deme medicina para alergia, por favor. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: La medicina o alergia queda fuera de esta tarea.<br>2. Sí, reembólselo, por favor. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: Esta no es una solicitud de reembolso. | Elija como preferencia, no como tema médico. |  |
| t4 | Claro. La preparo sin cebolla. (可以，我會準備不加洋蔥的。) | Gracias. Prepárela así, por favor. (謝謝，請這樣做。) | 1. Dígame mi número de pasaporte, por favor. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: No se necesitan datos de pasaporte.<br>2. Quiero guardar mi equipaje. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: Esto cambia a guardar equipaje. | Cierre confirmando el pedido. |  |

---

## a2:es:a2_ask_late_checkout - Pedir Salida Tarde

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_ask_late_checkout
- Setting: En la recepción del hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Pregunte si puede salir un poco más tarde y confirme la hora final.

### Clean Dialogue Path

- Empleado del hotel: ¿En qué puedo ayudarle? (我可以怎麼幫您？)
- Tú: ¿Puedo hacer el check-out un poco más tarde? (我可以晚一點退房嗎？)
- Empleado del hotel: Hoy puede hacer el check-out hasta la una. (今天可以到一點退房。)
- Tú: Hasta la una está bien, ¿verdad? (到一點可以，對嗎？)
- Empleado del hotel: Por favor, muestre la tarjeta de la habitación en recepción antes del mediodía. (請在中午前把房卡拿到櫃台。)
- Tú: Muestro la tarjeta antes del mediodía, ¿verdad? (中午前拿房卡給您看，對嗎？)
- Empleado del hotel: De acuerdo, lo dejo como salida a la una. (好的，我幫您確認一點退房。)
- Tú: Gracias. Haré el check-out a la una. (謝謝。我一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿En qué puedo ayudarle? (我可以怎麼幫您？) | ¿Puedo hacer el check-out un poco más tarde? (我可以晚一點退房嗎？) | 1. ¿Puedo hacer el check-in un poco más tarde? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: La pregunta es por el check-out, no por el check-in.<br>2. ¿Me baja el precio? (可以幫我降價嗎？) [forbidden_or_wrong_domain] - feedback: Negociar el precio queda fuera de esta tarea A2. | Pregunte por salir más tarde. |  |
| t2 | Hoy puede hacer el check-out hasta la una. (今天可以到一點退房。) | Hasta la una está bien, ¿verdad? (到一點可以，對嗎？) | 1. Hasta las diez está bien, ¿verdad? (到十點可以，對嗎？) [wrong_detail_or_domain] - feedback: El personal dijo hasta la una.<br>2. Voy a reservar otra habitación. (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: Esto confirma la hora de salida, no una nueva reserva. | Escuche la hora permitida. | Fórmula A2<br>Expresión breve útil en esta situación de hotel.<br>hasta la una = 到一點 |
| t3 | Por favor, muestre la tarjeta de la habitación en recepción antes del mediodía. (請在中午前把房卡拿到櫃台。) | Muestro la tarjeta antes del mediodía, ¿verdad? (中午前拿房卡給您看，對嗎？) | 1. Le digo mi número de pasaporte, ¿verdad? (告訴您護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: No hace falta dar datos de pasaporte aquí.<br>2. Recojo mi equipaje a las siete, ¿verdad? (七點領行李，對嗎？) [forbidden_or_wrong_domain] - feedback: Esto es check-out, no recogida de equipaje. | Confirme la condición sencilla. |  |
| t4 | De acuerdo, lo dejo como salida a la una. (好的，我幫您確認一點退房。) | Gracias. Haré el check-out a la una. (謝謝。我一點退房。) | 1. Voy a pedir un reembolso. (我要申請退款。) [wrong_detail_or_domain] - feedback: Los reembolsos quedan fuera de esta situación.<br>2. Mañana por la mañana tomo el tren. (我明天早上搭火車。) [forbidden_or_wrong_domain] - feedback: Esto confirma el check-out, no el transporte. | Confirme la hora final. |  |

---

## a2:es:a2_ask_recommendation_budget - Pedir una Recomendación con Presupuesto

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_ask_recommendation_budget
- Setting: tienda pequeña
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Pida una recomendación sencilla dentro de un presupuesto pequeño.
- Support text: Pida una recomendación sencilla dentro de un presupuesto pequeño.

### Clean Dialogue Path

- empleado: ¿Qué está buscando? (您在找什麼？)
- 你: ¿Me puede recomendar un regalo por menos de diez euros? (可以推薦十歐元以內的禮物嗎？)
- empleado: ¿Prefiere algo ligero o algo práctico? (您想要輕巧的，還是實用的？)
- 你: Algo práctico, por favor. (請推薦實用的。)
- empleado: Entonces este cuaderno pequeño cuesta menos de diez euros. (那這本小筆記本在十歐元以內。)
- 你: Ese cuaderno cuesta menos de diez euros, ¿verdad? (那本筆記本在十歐元以內，對嗎？)
- empleado: Sí, y se puede envolver para regalo. (對，也可以包裝成禮物。)
- 你: Perfecto. Me llevo ese cuaderno. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Qué está buscando? (您在找什麼？) | ¿Me puede recomendar un regalo por menos de diez euros? (可以推薦十歐元以內的禮物嗎？) | 1. Revise mi cuenta bancaria, por favor. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: Esta no es una tarea bancaria.<br>2. Quiero hacer un reporte de objeto perdido. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: El reporte de objeto perdido es otra tarea. | Pida una recomendación dentro de un presupuesto pequeño. |  |
| t2 | ¿Prefiere algo ligero o algo práctico? (您想要輕巧的，還是實用的？) | Algo práctico, por favor. (請推薦實用的。) | 1. Algo picante, por favor. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Picante corresponde más a un menú de comida.<br>2. Quiero salida tarde del hotel. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: Esto cambia a un hotel. | Diga una preferencia sencilla. |  |
| t3 | Entonces este cuaderno pequeño cuesta menos de diez euros. (那這本小筆記本在十歐元以內。) | Ese cuaderno cuesta menos de diez euros, ¿verdad? (那本筆記本在十歐元以內，對嗎？) | 1. Esa habitación cuesta menos de diez euros, ¿verdad? (那個房間在十歐元以內，對嗎？) [wrong_detail_or_domain] - feedback: Una habitación no es el artículo recomendado.<br>2. Ese billete era de ayer, ¿verdad? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: Esto cambia a billetes. | Confirme la recomendación y el presupuesto. |  |
| t4 | Sí, y se puede envolver para regalo. (對，也可以包裝成禮物。) | Perfecto. Me llevo ese cuaderno. (很好，我要那本筆記本。) | 1. Quiero un reembolso. (請退款。) [wrong_detail_or_domain] - feedback: Esta no es una solicitud de reembolso.<br>2. Revise mi seguro, por favor. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: El seguro queda fuera de esta tarea de bajo riesgo. | Acepte la recomendación con cortesía. |  |

---

## a2:es:a2_ask_transfer_platform - Preguntar por la Plataforma de Transbordo

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_ask_transfer_platform
- Setting: En información de la estación
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: Pregunta dónde hacer el transbordo, escucha la estación y el andén, y confirma la ruta corta.

### Clean Dialogue Path

- Empleado: ¿A dónde va? (您要去哪裡？)
- Tú: Voy al aeropuerto. ¿Dónde hago transbordo? (詢問轉乘)
- Empleado: Baje en Central y vaya a la plataforma tres. (請在 Central 下車，然後到 3 號月台。)
- Tú: Bajo en Central y voy a la plataforma tres, ¿verdad? (確認路線)
- Empleado: En la plataforma tres tome el tren al aeropuerto. (在 3 號月台搭往機場的車。)
- Tú: En la plataforma tres tomo el tren al aeropuerto, ¿verdad? (確認月台與方向)
- Empleado: Sí, haga transbordo en Central. (對，請在 Central 轉乘。)
- Tú: Gracias. Hago transbordo en Central. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿A dónde va? (您要去哪裡？) | Voy al aeropuerto. ¿Dónde hago transbordo? (詢問轉乘) | 1. Ayer fui al aeropuerto. (我昨天去了機場。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Quiero dejar una maleta. (我想寄放行李。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 詢問轉乘 |  |
| t2 | Baje en Central y vaya a la plataforma tres. (請在 Central 下車，然後到 3 號月台。) | Bajo en Central y voy a la plataforma tres, ¿verdad? (確認路線) | 1. Tomo café en Central, ¿verdad? (我在 Central 喝咖啡，對嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. La habitación tres, ¿verdad? (3 號房，對嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認兩步指示 |  |
| t3 | En la plataforma tres tome el tren al aeropuerto. (在 3 號月台搭往機場的車。) | En la plataforma tres tomo el tren al aeropuerto, ¿verdad? (確認月台與方向) | 1. El tren al aeropuerto llegó ayer. (往機場的車昨天到了。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. ¿Adónde voy en una emergencia? (緊急時我要去哪裡？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認方向 |  |
| t4 | Sí, haga transbordo en Central. (對，請在 Central 轉乘。) | Gracias. Hago transbordo en Central. (禮貌收尾) | 1. Quiero cambiar la hora de mi boleto. (我想更改票的時間。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Voy a ir a la policía en el aeropuerto. (我要去機場報警。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 收尾 |  |

---

## a2:es:a2_change_delivery_pickup_time - Cambiar la Hora de Recogida

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: mensaje de ayuda
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Manejar una tarea digital o de formulario simple de bajo riesgo con frases cortas de A2.
- Support text: Mantén la tarea de bajo riesgo. No des contraseñas, pagos, ID sensible ni información legal o médica.

### Clean Dialogue Path

- personal: La recogida es hoy a las cuatro. (今天四點取貨。)
- 你: ¿Puedo cambiar la hora de recogida? (可以改取貨時間嗎？)
- personal: Sí, a las cinco es posible. (可以，五點可以。)
- 你: Entonces a las cinco, por favor. (那請改成五點。)
- personal: ¿La cambiamos a las cinco? (改成五點嗎？)
- 你: Sí, a las cinco está bien. (對，五點可以。)
- personal: Listo, la cambio a las cinco. (好的，我會改成五點。)
- 你: Gracias. Voy a las cinco. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | La recogida es hoy a las cuatro. (今天四點取貨。) | ¿Puedo cambiar la hora de recogida? (可以改取貨時間嗎？) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t2 | Sí, a las cinco es posible. (可以，五點可以。) | Entonces a las cinco, por favor. (那請改成五點。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t3 | ¿La cambiamos a las cinco? (改成五點嗎？) | Sí, a las cinco está bien. (對，五點可以。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t4 | Listo, la cambio a las cinco. (好的，我會改成五點。) | Gracias. Voy a las cinco. (謝謝，我五點會去。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |

---

## a2:es:a2_change_ticket_time - Cambiar la Hora de un Boleto

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_change_ticket_time
- Setting: En la taquilla de la estación
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: Pide cambiar la hora de un boleto, escucha la hora disponible y confirma la nueva salida.

### Clean Dialogue Path

- Empleado: Hola. ¿En qué puedo ayudarle? (您好，我可以怎麼幫您？)
- Tú: Quiero cambiar la hora del boleto. (提出請求)
- Empleado: Puede cambiarlo al tren de las tres de la tarde. (可以改成下午 3 點的車。)
- Tú: Sí, por favor, al tren de las tres. (接受新時間)
- Empleado: Entonces, queda para las tres de la tarde, ¿correcto? (那就改成下午 3 點，對嗎？)
- Tú: Sí, las tres está bien. (確認時間)
- Empleado: Ya está cambiado. Tome el tren de las tres, por favor. (已經改好了，請搭 3 點那班車。)
- Tú: Gracias. Tomo el tren de las tres. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola. ¿En qué puedo ayudarle? (您好，我可以怎麼幫您？) | Quiero cambiar la hora del boleto. (提出請求) | 1. El boleto era de ayer. (票是昨天的。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Un café, por favor. (請給我一杯咖啡。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 提出改時間 |  |
| t2 | Puede cambiarlo al tren de las tres de la tarde. (可以改成下午 3 點的車。) | Sí, por favor, al tren de las tres. (接受新時間) | 1. ¿Hay una habitación a las tres? (3 點有房間嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Ayer viajé a las tres. (我昨天 3 點搭了。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 接受可用時間 |  |
| t3 | Entonces, queda para las tres de la tarde, ¿correcto? (那就改成下午 3 點，對嗎？) | Sí, las tres está bien. (確認時間) | 1. No, las tres fue ayer. (不，3 點是昨天。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Explíqueme las reglas de reembolso, por favor. (請說明退款規則。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認時間 |  |
| t4 | Ya está cambiado. Tome el tren de las tres, por favor. (已經改好了，請搭 3 點那班車。) | Gracias. Tomo el tren de las tres. (禮貌收尾) | 1. Mañana voy a tomar café. (我明天要喝咖啡。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. ¿Cuál es mi número de pasaporte? (我的護照號碼是什麼？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 收尾 |  |

---

## a2:es:a2_compare_two_menu_options - Comparar Dos Opciones del Menú

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_compare_two_menu_options
- Setting: mostrador del restaurante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Compare dos opciones sencillas del menú y elija la que prefiere.
- Support text: Compare dos opciones sencillas del menú y elija la que prefiere.

### Clean Dialogue Path

- empleado: Hoy puede elegir el bol de arroz o la sopa de fideos. (今天可以選飯碗或湯麵。)
- 你: ¿En qué se diferencian las dos opciones? (兩個選項有什麼不同？)
- empleado: El bol de arroz es un poco picante y la sopa de fideos es más ligera. (飯碗有點辣，湯麵比較清爽。)
- 你: La sopa de fideos es más ligera, ¿verdad? (湯麵比較清爽，對嗎？)
- empleado: Sí, la sopa de fideos es menos picante. (對，湯麵比較不辣。)
- 你: Entonces quiero la sopa de fideos. (那我要湯麵。)
- empleado: Perfecto. Le pongo una sopa de fideos. (好的，我幫您點一份湯麵。)
- 你: Gracias. Una sopa de fideos, por favor. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hoy puede elegir el bol de arroz o la sopa de fideos. (今天可以選飯碗或湯麵。) | ¿En qué se diferencian las dos opciones? (兩個選項有什麼不同？) | 1. ¿Dónde está mi mesa? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: Esto pregunta por la mesa, no compara el menú.<br>2. Quiero un reembolso. (我想退款。) [forbidden_or_wrong_domain] - feedback: Un reembolso queda fuera de esta tarea A2. | Pregunte la diferencia entre las dos opciones. |  |
| t2 | El bol de arroz es un poco picante y la sopa de fideos es más ligera. (飯碗有點辣，湯麵比較清爽。) | La sopa de fideos es más ligera, ¿verdad? (湯麵比較清爽，對嗎？) | 1. El bol de arroz es más barato, ¿verdad? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: No se mencionó el precio.<br>2. El tren es más rápido, ¿verdad? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: Esto cambia al tema de transporte. | Confirme la comparación que escuchó. |  |
| t3 | Sí, la sopa de fideos es menos picante. (對，湯麵比較不辣。) | Entonces quiero la sopa de fideos. (那我要湯麵。) | 1. Entonces voy a cambiar de habitación. (那我要換房間。) [wrong_detail_or_domain] - feedback: Esto cambia a una situación de hotel.<br>2. Entonces muestro mi pasaporte. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: Aquí no se necesita pasaporte. | Elija la opción que coincide con su preferencia. |  |
| t4 | Perfecto. Le pongo una sopa de fideos. (好的，我幫您點一份湯麵。) | Gracias. Una sopa de fideos, por favor. (謝謝，請給我一份湯麵。) | 1. Voy a llamar a la policía. (我要報警。) [wrong_detail_or_domain] - feedback: Eso es demasiado grave para esta situación.<br>2. Mañana tengo que ir al hospital. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: Esta no es una situación médica. | Confirme el plato elegido con cortesía. |  |

---

## a2:es:a2_confirm_date_time_place - Confirmar fecha, hora y lugar

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_confirm_date_time_place
- Setting: Mensaje de una amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Una amiga te pide confirmar los datos de un mensaje corto.
- Learner goal: Extraer fecha, hora y lugar de un mensaje breve y confirmarlos de forma natural.
- Support text: 你的朋友提到一則短訊。從訊息中確認日期、時間和地點，不需要問路或處理複雜安排。

### Clean Dialogue Path

- amiga: ¿Puedes revisar el mensaje? (你可以看一下訊息嗎？)
- tú: Sí, lo estoy mirando. (可以，我正在看。)
- amiga: ¿Qué día y a qué hora es? (是哪一天、幾點？)
- tú: Es el sábado a las cinco y media. (是星期六五點半。)
- amiga: ¿Y dónde quedamos? (那我們在哪裡見？)
- tú: En la biblioteca. (在圖書館。)
- amiga: Entonces, sábado a las cinco y media en la biblioteca. (那就是星期六五點半在圖書館。)
- tú: Sí, exacto. Nos vemos allí. (對，沒錯。那裡見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Puedes revisar el mensaje? (你可以看一下訊息嗎？) | Sí, lo estoy mirando. (可以，我正在看。) | 1. Sí, quiero cambiar la hora. (可以，我想改時間。) [wrong_function_reschedule] - feedback: 這是在改時間。現在只是要看訊息並確認內容。<br>2. Perdón, llego tarde. (抱歉，我會晚到。) [wrong_scenario_delay] - feedback: 這是在說遲到。現在要確認訊息內容。 | 先表示你正在看訊息。重點是後面確認日期、時間和地點。 |  |
| t2 | ¿Qué día y a qué hora es? (是哪一天、幾點？) | Es el sábado a las cinco y media. (是星期六五點半。) | 1. Es el domingo a las cinco y media. (是星期日五點半。) [wrong_date] - feedback: 訊息寫的是星期六，不是星期日。<br>2. Es el sábado a las siete y media. (是星期六七點半。) [wrong_time] - feedback: 17:30 是五點半，不是七點半。 | 從短訊中找日期和時間：sábado, 17:30。 | Es el... a las...<br>確認活動日期和時間時，可以用「Es el sábado a las cinco y media」。<br>Es el sábado. = 是星期六。<br>A las cinco y media. = 五點半。 |
| t3 | ¿Y dónde quedamos? (那我們在哪裡見？) | En la biblioteca. (在圖書館。) | 1. Al lado de la biblioteca. (在圖書館旁邊。) [wrong_place_relation] - feedback: 訊息說在圖書館，不是在旁邊。<br>2. En el parque. (在公園。) [wrong_place] - feedback: 訊息中的地點是圖書館，不是公園。 | 從訊息中找地點：en la biblioteca。 |  |
| t4 | Entonces, sábado a las cinco y media en la biblioteca. (那就是星期六五點半在圖書館。) | Sí, exacto. Nos vemos allí. (對，沒錯。那裡見。) | 1. No, voy a llegar tarde. (不，我會晚到。) [wrong_function_delay] - feedback: 這是在說遲到。現在只是確認日期、時間和地點。<br>2. Sí, quiero una mesa para dos. (對，我要兩人桌。) [wrong_scenario_restaurant] - feedback: 這是餐廳情境。現在是在確認訊息內容。 | 三個資訊都確認了。用自然短句收尾。 |  |

---

## a2:es:a2_decline_with_reason - Rechazar con una Razón Sencilla

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_decline_with_reason
- Setting: chat con un amigo
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Coordina una situación social sencilla con un amigo en frases cortas de A2.
- Support text: Usa lenguaje natural con un amigo. Mantén la actividad y la razón sencillas.

### Clean Dialogue Path

- amigo: ¿Quieres ver una película esta noche? (今晚要看電影嗎？)
- 你: Lo siento, esta noche no puedo. (不好意思，我今晚不行。)
- amigo: No pasa nada. ¿Estás ocupado? (沒關係。你很忙嗎？)
- 你: Tengo un poco de trabajo todavía. (我還有一點事要做。)
- amigo: ¿Quizá otro día? (也許改天？)
- 你: Sí, quizá este fin de semana. (好，也許這個週末。)
- amigo: Vale. Hablamos el fin de semana. (好，那週末再說。)
- 你: Gracias. Nos vemos el fin de semana. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Quieres ver una película esta noche? (今晚要看電影嗎？) | Lo siento, esta noche no puedo. (不好意思，我今晚不行。) | 1. No, no quiero. (不要，我不想。) [too_blunt] - feedback: No corresponde a esta situación con un amigo.<br>2. Dame el recibo otra vez, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Suena demasiado fuerte para un amigo. | Keep the refusal brief and warm. |  |
| t2 | No pasa nada. ¿Estás ocupado? (沒關係。你很忙嗎？) | Tengo un poco de trabajo todavía. (我還有一點事要做。) | 1. No, no quiero. (不要，我不想。) [too_blunt] - feedback: No corresponde a esta situación con un amigo.<br>2. Dame el recibo otra vez, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Suena demasiado fuerte para un amigo. | Keep the refusal brief and warm. |  |
| t3 | ¿Quizá otro día? (也許改天？) | Sí, quizá este fin de semana. (好，也許這個週末。) | 1. No, no quiero. (不要，我不想。) [too_blunt] - feedback: No corresponde a esta situación con un amigo.<br>2. Dame el recibo otra vez, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Suena demasiado fuerte para un amigo. | Keep the refusal brief and warm. |  |
| t4 | Vale. Hablamos el fin de semana. (好，那週末再說。) | Gracias. Nos vemos el fin de semana. (謝謝，週末見。) | 1. No, no quiero. (不要，我不想。) [too_blunt] - feedback: No corresponde a esta situación con un amigo.<br>2. Dame el recibo otra vez, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Suena demasiado fuerte para un amigo. | Keep the refusal brief and warm. |  |

---

## a2:es:a2_describe_weekend_activity - Contar una Actividad del Fin de Semana

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_describe_weekend_activity
- Setting: chat con un amigo
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Coordina una situación social sencilla con un amigo en frases cortas de A2.
- Support text: Usa lenguaje natural con un amigo. Mantén la actividad y la razón sencillas.

### Clean Dialogue Path

- amigo: ¿Qué hiciste el fin de semana? (你週末做了什麼？)
- 你: Me encontré con un amigo y almorcé. (我見了朋友，也吃了午餐。)
- amigo: ¿Dónde se vieron? (你們在哪裡見面？)
- 你: Nos vimos en una cafetería cerca de mi casa. (我們在我家附近的咖啡店見。)
- amigo: ¿Fue agradable? (還不錯嗎？)
- 你: Sí, fue tranquilo y agradable. (嗯，很安靜，也很好。)
- amigo: Suena bien. La próxima vez voy contigo. (聽起來不錯。下次我也一起去。)
- 你: Claro, vamos juntos la próxima vez. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Qué hiciste el fin de semana? (你週末做了什麼？) | Me encontré con un amigo y almorcé. (我見了朋友，也吃了午餐。) | 1. Mañana voy a ver a un amigo. (我明天會見朋友。) [wrong_time_future] - feedback: No corresponde a esta situación con un amigo.<br>2. ¿A qué andén voy? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suena demasiado fuerte para un amigo. | Use a short A2 past-time answer. |  |
| t2 | ¿Dónde se vieron? (你們在哪裡見面？) | Nos vimos en una cafetería cerca de mi casa. (我們在我家附近的咖啡店見。) | 1. Mañana voy a ver a un amigo. (我明天會見朋友。) [wrong_time_future] - feedback: No corresponde a esta situación con un amigo.<br>2. ¿A qué andén voy? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suena demasiado fuerte para un amigo. | Use a short A2 past-time answer. |  |
| t3 | ¿Fue agradable? (還不錯嗎？) | Sí, fue tranquilo y agradable. (嗯，很安靜，也很好。) | 1. Mañana voy a ver a un amigo. (我明天會見朋友。) [wrong_time_future] - feedback: No corresponde a esta situación con un amigo.<br>2. ¿A qué andén voy? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suena demasiado fuerte para un amigo. | Use a short A2 past-time answer. |  |
| t4 | Suena bien. La próxima vez voy contigo. (聽起來不錯。下次我也一起去。) | Claro, vamos juntos la próxima vez. (好，下次一起去。) | 1. Mañana voy a ver a un amigo. (我明天會見朋友。) [wrong_time_future] - feedback: No corresponde a esta situación con un amigo.<br>2. ¿A qué andén voy? (要去哪個月台？) [wrong_scenario_transport] - feedback: Suena demasiado fuerte para un amigo. | Use a short A2 past-time answer. |  |

---

## a2:es:a2_exchange_wrong_item - Cambiar un Artículo Equivocado

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_exchange_wrong_item
- Setting: mostrador de la tienda
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Explique con cortesía que recibió el artículo equivocado y pida el correcto.
- Support text: Explique con cortesía que recibió el artículo equivocado y pida el correcto.

### Clean Dialogue Path

- empleado: ¿En qué puedo ayudarle? (需要幫忙嗎？)
- 你: Pedí una taza pequeña, pero recibí una grande. (我訂的是小杯，但拿到大杯。)
- empleado: Déjeme revisar. ¿Puedo ver el recibo? (我確認一下。可以看收據嗎？)
- 你: Sí, aquí está el recibo. (可以，這是收據。)
- empleado: Tiene razón. Se la cambio por una taza pequeña ahora. (您說得對。我現在可以換成小杯。)
- 你: Me la cambia por una taza pequeña, ¿verdad? (您會幫我換成小杯，對嗎？)
- empleado: Sí, espere un momento, por favor. (好的，請稍等。)
- 你: Gracias. Espero aquí. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿En qué puedo ayudarle? (需要幫忙嗎？) | Pedí una taza pequeña, pero recibí una grande. (我訂的是小杯，但拿到大杯。) | 1. ¿Dónde se fabrica la taza pequeña? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: El lugar de fabricación no es el problema.<br>2. Baje el precio, por favor. (請降價。) [forbidden_or_wrong_domain] - feedback: Regatear el precio queda fuera de esta tarea. | Explique que recibió algo diferente de lo pedido. |  |
| t2 | Déjeme revisar. ¿Puedo ver el recibo? (我確認一下。可以看收據嗎？) | Sí, aquí está el recibo. (可以，這是收據。) | 1. Sí, aquí está mi pasaporte. (可以，這是護照。) [wrong_detail_or_domain] - feedback: No se necesita pasaporte.<br>2. Sí, mañana tomo el tren. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: Esto cambia a transporte. | Responda a la revisión sencilla del recibo. |  |
| t3 | Tiene razón. Se la cambio por una taza pequeña ahora. (您說得對。我現在可以換成小杯。) | Me la cambia por una taza pequeña, ¿verdad? (您會幫我換成小杯，對嗎？) | 1. Explíqueme las reglas de reembolso. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Las reglas de reembolso son demasiado amplias aquí.<br>2. Voy a denunciarlo a la policía. (我要報警。) [forbidden_or_wrong_domain] - feedback: Esto es demasiado grave para esta tarea. | Confirme el cambio. |  |
| t4 | Sí, espere un momento, por favor. (好的，請稍等。) | Gracias. Espero aquí. (謝謝，我在這裡等。) | 1. Tengo que ir al hospital. (我需要去醫院。) [wrong_detail_or_domain] - feedback: Esta no es una situación médica.<br>2. Quiero cambiar de habitación. (我想換房。) [forbidden_or_wrong_domain] - feedback: Esto cambia a una situación de hotel. | Cierre aceptando esperar. |  |

---

## a2:es:a2_explain_simple_delay_reason - Explicar un pequeño retraso

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: Mensaje a una amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Una amiga pregunta si ya estás cerca y necesitas explicar un pequeño retraso.
- Learner goal: Disculparse, decir que llegas un poco tarde y dar una razón simple con una estimación.
- Support text: 你的朋友問你到了沒。用西班牙語簡短道歉，說你會晚一點，並給一個日常原因。

### Clean Dialogue Path

- amiga: ¿Ya estás cerca? (你已經在附近了嗎？)
- tú: Perdón, voy a llegar un poco tarde. (抱歉，我會晚一點到。)
- amiga: No pasa nada. ¿Cuánto tardas? (沒關係。你還要多久？)
- tú: Llego en unos diez minutos. (我大約十分鐘後到。)
- amiga: ¿Por qué? ¿Va todo bien? (為什麼？一切還好嗎？)
- tú: Sí, el autobús va lento. (沒事，公車開得慢。)
- amiga: Vale, te espero dentro. (好，我在裡面等你。)
- tú: Gracias, llego enseguida. (謝謝，我馬上到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Ya estás cerca? (你已經在附近了嗎？) | Perdón, voy a llegar un poco tarde. (抱歉，我會晚一點到。) | 1. Sí, llegué ayer. (對，我昨天到了。) [wrong_time_past] - feedback: 對方問現在是否快到了，不是昨天。<br>2. Quiero pedir un café. (我想點一杯咖啡。) [wrong_scenario_ordering] - feedback: 這是點餐情境。現在要說你會晚到。 | 對方在確認你是否快到了。先用自然的道歉開頭。 |  |
| t2 | No pasa nada. ¿Cuánto tardas? (沒關係。你還要多久？) | Llego en unos diez minutos. (我大約十分鐘後到。) | 1. Son las diez. (現在十點。) [wrong_function_clock_time] - feedback: 這是在報時間，不是在說你還要多久到。<br>2. A las diez en la entrada. (十點在入口。) [wrong_scenario_meeting_plan] - feedback: 這像是在約時間地點。對方問的是延誤多久。 | 對方問晚多久。用「unos minutos」說簡單估計。 | un poco tarde<br>說小延誤時，可以用「voy a llegar un poco tarde」加上原因或時間。<br>Voy a llegar un poco tarde. = 我會晚一點到。<br>Llego en unos diez minutos. = 我大約十分鐘後到。 |
| t3 | ¿Por qué? ¿Va todo bien? (為什麼？一切還好嗎？) | Sí, el autobús va lento. (沒事，公車開得慢。) | 1. Necesito comprar un billete. (我需要買一張票。) [wrong_scenario_ticket] - feedback: 這像是在買票。這裡只需要說為什麼會晚到。<br>2. Quiero cambiar la reserva. (我想改訂位。) [wrong_scenario_reservation] - feedback: 這是在改預約。現在要解釋為什麼晚到。 | 給一個低風險、日常的原因就好。 |  |
| t4 | Vale, te espero dentro. (好，我在裡面等你。) | Gracias, llego enseguida. (謝謝，我馬上到。) | 1. La cuenta, por favor. (請結帳。) [wrong_scenario_restaurant] - feedback: 這是餐廳用語。朋友只是在說會等你。<br>2. Mañana por la mañana voy a la biblioteca. (明天早上我去圖書館。) [wrong_scenario_plan] - feedback: 這是在說明天計畫，不是在回覆現在晚到的情境。 | 對方接受了。簡短回覆並再次確認就可以。 |  |

---

## a2:es:a2_fill_simple_form_help - Pedir Ayuda con un Formulario Simple

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_fill_simple_form_help
- Setting: mensaje de ayuda
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Manejar una tarea digital o de formulario simple de bajo riesgo con frases cortas de A2.
- Support text: Mantén la tarea de bajo riesgo. No des contraseñas, pagos, ID sensible ni información legal o médica.

### Clean Dialogue Path

- personal: Primero complete este formulario. (請先填這張表。)
- 你: ¿Qué escribo en este espacio? (這一欄要填什麼？)
- personal: Aquí escriba su nombre. (這裡請填姓名。)
- 你: ¿Solo mi nombre? (只填姓名就可以嗎？)
- personal: Sí, el teléfono va abajo. (對，電話在下面那一欄。)
- 你: Entiendo. Lo escribo abajo. (知道了，我會寫在下面。)
- personal: Sí, así es suficiente. (對，這樣就夠了。)
- 你: Gracias. Ya terminé. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Primero complete este formulario. (請先填這張表。) | ¿Qué escribo en este espacio? (這一欄要填什麼？) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t2 | Aquí escriba su nombre. (這裡請填姓名。) | ¿Solo mi nombre? (只填姓名就可以嗎？) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t3 | Sí, el teléfono va abajo. (對，電話在下面那一欄。) | Entiendo. Lo escribo abajo. (知道了，我會寫在下面。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t4 | Sí, así es suficiente. (對，這樣就夠了。) | Gracias. Ya terminé. (謝謝，我填好了。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |

---

## a2:es:a2_invite_friend_activity - Invitar a un Amigo a una Actividad

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_invite_friend_activity
- Setting: chat con un amigo
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Coordina una situación social sencilla con un amigo en frases cortas de A2.
- Support text: Usa lenguaje natural con un amigo. Mantén la actividad y la razón sencillas.

### Clean Dialogue Path

- amigo: ¿Quieres tomar un café más tarde? (等一下要一起喝咖啡嗎？)
- 你: Sí, me apetece un café. (Sí, me apetece un café.)
- amigo: Claro. ¿A qué hora? (好啊。幾點？)
- 你: ¿Qué tal a las tres? (三點怎麼樣？)
- amigo: ¿Nos vemos delante de la estación? (要在車站前面見嗎？)
- 你: Sí, nos vemos delante de la estación. (好，我們在車站前面見。)
- amigo: Perfecto. Nos vemos luego. (好，等一下見。)
- 你: Genial. Nos vemos luego. (很好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Quieres tomar un café más tarde? (等一下要一起喝咖啡嗎？) | Sí, me apetece un café. (Sí, me apetece un café.) | 1. Por favor, cámbiame la habitación más tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: No corresponde a esta situación con un amigo.<br>2. Tienes que venir conmigo hoy. (你今天一定要跟我來。) [too_pressuring] - feedback: Suena demasiado fuerte para un amigo. | Acepta la invitación de forma natural. |  |
| t2 | Claro. ¿A qué hora? (好啊。幾點？) | ¿Qué tal a las tres? (三點怎麼樣？) | 1. Por favor, cámbiame la habitación más tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: No corresponde a esta situación con un amigo.<br>2. Tienes que venir conmigo hoy. (你今天一定要跟我來。) [too_pressuring] - feedback: Suena demasiado fuerte para un amigo. | Propón una hora sencilla. |  |
| t3 | ¿Nos vemos delante de la estación? (要在車站前面見嗎？) | Sí, nos vemos delante de la estación. (好，我們在車站前面見。) | 1. Por favor, cámbiame la habitación más tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: No corresponde a esta situación con un amigo.<br>2. Tienes que venir conmigo hoy. (你今天一定要跟我來。) [too_pressuring] - feedback: Suena demasiado fuerte para un amigo. | Confirma el lugar de encuentro. |  |
| t4 | Perfecto. Nos vemos luego. (好，等一下見。) | Genial. Nos vemos luego. (很好，等一下見。) | 1. Por favor, cámbiame la habitación más tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: No corresponde a esta situación con un amigo.<br>2. Tienes que venir conmigo hoy. (你今天一定要跟我來。) [too_pressuring] - feedback: Suena demasiado fuerte para un amigo. | Cierra el plan con naturalidad. |  |

---

## a2:es:a2_lost_item_followup_message - Consultar por un Objeto Perdido

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_lost_item_followup_message
- Setting: mensaje de ayuda
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Manejar una tarea digital o de formulario simple de bajo riesgo con frases cortas de A2.
- Support text: Mantén la tarea de bajo riesgo. No des contraseñas, pagos, ID sensible ni información legal o médica.

### Clean Dialogue Path

- personal: ¿Qué objeto busca? (您在找什麼？)
- 你: Creo que dejé un paraguas negro. (我好像把黑色雨傘忘在那裡。)
- personal: ¿Dónde lo dejó? (放在哪裡？)
- 你: Creo que junto a una silla de la cafetería. (好像放在咖啡店椅子旁邊。)
- personal: Deje su nombre y contacto, por favor. (請留下姓名和聯絡方式。)
- 你: Sí, dejo mi nombre y teléfono. (好，我會留下姓名和電話。)
- personal: Vamos a revisar y le contactamos. (我確認後會聯絡您。)
- 你: Gracias. Espero su mensaje. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Qué objeto busca? (您在找什麼？) | Creo que dejé un paraguas negro. (我好像把黑色雨傘忘在那裡。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t2 | ¿Dónde lo dejó? (放在哪裡？) | Creo que junto a una silla de la cafetería. (好像放在咖啡店椅子旁邊。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t3 | Deje su nombre y contacto, por favor. (請留下姓名和聯絡方式。) | Sí, dejo mi nombre y teléfono. (好，我會留下姓名和電話。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |
| t4 | Vamos a revisar y le contactamos. (我確認後會聯絡您。) | Gracias. Espero su mensaje. (謝謝，我等您聯絡。) | 1. Le digo mi contraseña. (我會告訴你密碼。) [forbidden_sensitive] - feedback: La contraseña está fuera de esta tarea A2.<br>2. Quiero un reembolso. (請退款。) [wrong_dispute_domain] - feedback: Los reembolsos o disputas están fuera de esta tarea. | Confirma solo el detalle necesario y de bajo riesgo. |  |

---

## a2:es:a2_luggage_storage_pickup - Guardar y Recoger Equipaje

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_luggage_storage_pickup
- Setting: En la consigna de la estación
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: Deja una maleta, escucha la hora límite para recogerla y confirma qué recibo necesitas.

### Clean Dialogue Path

- Empleado: ¿Quiere dejar equipaje? (您要寄放行李嗎？)
- Tú: Quiero dejar esta maleta. (寄放行李)
- Empleado: Puede recogerla hoy antes de las siete de la tarde. (今天晚上領取期限前可以來領。)
- Tú: La recojo antes de las siete, ¿verdad? (確認取件時間)
- Empleado: Para recogerla, muestre este recibo. (領取時請出示這張收據。)
- Tú: Sí, muestro el recibo al recogerla. (確認文件)
- Empleado: Muy bien. Vuelva antes de las siete, por favor. (好的，請 7 點前回來。)
- Tú: Gracias. Vuelvo antes de las siete. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Quiere dejar equipaje? (您要寄放行李嗎？) | Quiero dejar esta maleta. (寄放行李) | 1. Ayer recogí esta maleta. (我昨天領了這個行李箱。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. ¿Dónde está el andén? (月台在哪裡？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 寄放行李 |  |
| t2 | Puede recogerla hoy antes de las siete de la tarde. (今天晚上領取期限前可以來領。) | La recojo antes de las siete, ¿verdad? (確認取件時間) | 1. La dejo a las siete de la mañana, ¿verdad? (我早上 7 點寄放，對嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. ¿Dónde me devuelven el dinero? (退款在哪裡拿？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認取件時間 |  |
| t3 | Para recogerla, muestre este recibo. (領取時請出示這張收據。) | Sí, muestro el recibo al recogerla. (確認文件) | 1. ¿Puedo tirar el recibo? (我可以把收據丟掉嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Muestro mi pasaporte. (我出示護照。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認寄物單 |  |
| t4 | Muy bien. Vuelva antes de las siete, por favor. (好的，請 7 點前回來。) | Gracias. Vuelvo antes de las siete. (禮貌收尾) | 1. El tren tiene quince minutos de retraso. (火車晚 15 分鐘。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Quiero informar de una maleta perdida. (我想申報行李遺失。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 收尾 |  |

---

## a2:es:a2_make_simple_plan_sequence - Hacer un Plan Sencillo de Dos Pasos

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: chat con un amigo
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Coordina una situación social sencilla con un amigo en frases cortas de A2.
- Support text: Usa lenguaje natural con un amigo. Mantén la actividad y la razón sencillas.

### Clean Dialogue Path

- amigo: ¿Nos vemos primero en la estación? (我們先在車站見，好嗎？)
- 你: Sí, primero nos vemos en la estación. (好，我們先在車站見。)
- amigo: ¿Después vamos al parque? (接著去公園嗎？)
- 你: Bien. Después caminamos al parque. (好，接著走去公園。)
- amigo: Entonces, primero la estación y después el parque, ¿no? (所以先車站，接著公園，對嗎？)
- 你: Sí, primero la estación y después el parque. (對，先車站，接著公園。)
- amigo: Perfecto. Nos vemos el sábado a las dos. (好，星期六兩點見。)
- 你: Vale, nos vemos el sábado a las dos. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Nos vemos primero en la estación? (我們先在車站見，好嗎？) | Sí, primero nos vemos en la estación. (好，我們先在車站見。) | 1. Sí, primero devuélveme el dinero. (好，先退款給我。) [wrong_scenario_refund] - feedback: No corresponde a esta situación con un amigo.<br>2. No, de ninguna manera. (不，絕對不要。) [too_blunt] - feedback: Suena demasiado fuerte para un amigo. | Mantén el plan en dos pasos sencillos. |  |
| t2 | ¿Después vamos al parque? (接著去公園嗎？) | Bien. Después caminamos al parque. (好，接著走去公園。) | 1. Sí, primero devuélveme el dinero. (好，先退款給我。) [wrong_scenario_refund] - feedback: No corresponde a esta situación con un amigo.<br>2. No, de ninguna manera. (不，絕對不要。) [too_blunt] - feedback: Suena demasiado fuerte para un amigo. | Mantén el plan en dos pasos sencillos. |  |
| t3 | Entonces, primero la estación y después el parque, ¿no? (所以先車站，接著公園，對嗎？) | Sí, primero la estación y después el parque. (對，先車站，接著公園。) | 1. Sí, primero devuélveme el dinero. (好，先退款給我。) [wrong_scenario_refund] - feedback: No corresponde a esta situación con un amigo.<br>2. No, de ninguna manera. (不，絕對不要。) [too_blunt] - feedback: Suena demasiado fuerte para un amigo. | Mantén el plan en dos pasos sencillos. |  |
| t4 | Perfecto. Nos vemos el sábado a las dos. (好，星期六兩點見。) | Vale, nos vemos el sábado a las dos. (好，星期六兩點見。) | 1. Sí, primero devuélveme el dinero. (好，先退款給我。) [wrong_scenario_refund] - feedback: No corresponde a esta situación con un amigo.<br>2. No, de ninguna manera. (不，絕對不要。) [too_blunt] - feedback: Suena demasiado fuerte para un amigo. | Mantén el plan en dos pasos sencillos. |  |

---

## a2:es:a2_plan_tomorrow_morning - Plan para mañana por la mañana

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Charla con una amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Una amiga pregunta qué piensas hacer mañana por la mañana.
- Learner goal: Decir un plan cercano con un paso siguiente y una hora aproximada.
- Support text: 你的朋友問你明天早上的計畫。先說一件你打算做的事，再接一個簡單的下一步。

### Clean Dialogue Path

- amiga: ¿Qué vas a hacer mañana por la mañana? (你明天早上打算做什麼？)
- tú: Voy a ir a la biblioteca. (我打算去圖書館。)
- amiga: ¿Y después? (那之後呢？)
- tú: Después voy a estudiar en una cafetería. (之後我打算在咖啡店讀書。)
- amiga: Entonces, ¿estás libre antes de comer? (所以你午餐前有空嗎？)
- tú: Sí, estoy libre sobre las once. (可以，我大約十一點有空。)
- amiga: Perfecto. Te escribo a las once. (很好。我十一點傳訊息給你。)
- tú: Vale, nos vemos mañana. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Qué vas a hacer mañana por la mañana? (你明天早上打算做什麼？) | Voy a ir a la biblioteca. (我打算去圖書館。) | 1. Fui a la biblioteca ayer. (我昨天去了圖書館。) [wrong_time_past] - feedback: 對方問的是明天早上，不是昨天。<br>2. ¿Dónde está la biblioteca? (圖書館在哪裡？) [wrong_function_location_question] - feedback: 這是在問地點，沒有說你的計畫。 | 對方問明天早上的計畫。用「voy a」加動詞回答。 |  |
| t2 | ¿Y después? (那之後呢？) | Después voy a estudiar en una cafetería. (之後我打算在咖啡店讀書。) | 1. Quedamos en la cafetería. (我們在咖啡店見。) [wrong_function_meeting_place] - feedback: 這是在約地點。對方問的是你的下一個活動。<br>2. Estoy estudiando ahora. (我現在正在讀書。) [wrong_time_now] - feedback: 這是在說現在。對方問的是明天早上的下一步。 | 對方在問下一步。用「Después」接下一個活動。 | voy a + verbo<br>說近期計畫時，西班牙語常用「voy a」加原形動詞。用「después」接下一步。<br>Voy a ir a la biblioteca. = 我打算去圖書館。<br>Después voy a estudiar. = 之後我打算讀書。 |
| t3 | Entonces, ¿estás libre antes de comer? (所以你午餐前有空嗎？) | Sí, estoy libre sobre las once. (可以，我大約十一點有空。) | 1. No, estuve libre ayer. (不，我昨天有空。) [wrong_time_past] - feedback: 問題是明天午餐前，不是昨天。<br>2. ¿Abre la biblioteca a las once? (圖書館十一點開嗎？) [wrong_focus_opening_hours] - feedback: 這是在問圖書館時間。朋友問的是你什麼時候有空。 | 對方問你什麼時候有空。用「sobre las...」說大約時間。 |  |
| t4 | Perfecto. Te escribo a las once. (很好。我十一點傳訊息給你。) | Vale, nos vemos mañana. (好，明天見。) | 1. Lo pido otra vez. (我再點一次。) [wrong_scenario_ordering] - feedback: 這像是在點餐或購物。現在只是確認明天的安排。<br>2. Quiero cambiar de habitación. (我想換房間。) [wrong_scenario_hotel] - feedback: 這是飯店情境。這裡用簡短道別就可以。 | 計畫已經清楚了。用簡短自然的句子收尾。 |  |

---

## a2:es:a2_report_room_problem - Avisar de un Problema en la Habitación

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_report_room_problem
- Setting: En la recepción del hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Avise de un problema sencillo en la habitación y confirme qué hará el personal.

### Clean Dialogue Path

- Empleado del hotel: Hola. ¿En qué puedo ayudarle? (您好，我可以怎麼幫您？)
- Tú: En mi habitación no hay toallas. ¿Me puede ayudar? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Empleado del hotel: Sí, le llevo toallas ahora mismo. (好的，我馬上拿毛巾過去。)
- Tú: Me trae toallas, ¿verdad? (您會拿毛巾過來，對嗎？)
- Empleado del hotel: Tardará unos diez minutos. (大約需要十分鐘。)
- Tú: Unos diez minutos, de acuerdo. (大約十分鐘，好的。)
- Empleado del hotel: Se lo enviamos a la habitación. (我們會送到房間。)
- Tú: Gracias. Espero en la habitación. (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hola. ¿En qué puedo ayudarle? (您好，我可以怎麼幫您？) | En mi habitación no hay toallas. ¿Me puede ayudar? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. Quiero reservar una habitación. (我想訂房。) [wrong_detail_or_domain] - feedback: Ahora no está reservando; tiene que explicar un problema de la habitación.<br>2. Quiero una compensación. (我想要賠償。) [forbidden_or_wrong_domain] - feedback: La compensación queda fuera de esta tarea A2. | Diga el problema de la habitación en una frase corta. |  |
| t2 | Sí, le llevo toallas ahora mismo. (好的，我馬上拿毛巾過去。) | Me trae toallas, ¿verdad? (您會拿毛巾過來，對嗎？) | 1. Me cambia de habitación, ¿verdad? (您會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: El personal dijo toallas, no cambio de habitación.<br>2. El tren llega tarde, ¿verdad? (火車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: Esto es un servicio de hotel, no transporte. | Confirme lo que hará el personal. | Fórmula A2<br>Expresión breve útil en esta situación de hotel.<br>llevar toallas = 拿毛巾 |
| t3 | Tardará unos diez minutos. (大約需要十分鐘。) | Unos diez minutos, de acuerdo. (大約十分鐘，好的。) | 1. Salgo del hotel en una hora. (我一小時後退房。) [wrong_detail_or_domain] - feedback: Es el tiempo de entrega de las toallas, no la salida del hotel.<br>2. Tengo que ir al hospital. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: El contenido médico queda fuera de esta tarea. | Confirme el tiempo. |  |
| t4 | Se lo enviamos a la habitación. (我們會送到房間。) | Gracias. Espero en la habitación. (謝謝。我在房間等。) | 1. Explíqueme las reglas de reembolso. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Las reglas de reembolso quedan fuera de este problema sencillo.<br>2. Dos cafés, por favor. (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: Eso es un pedido de restaurante, no servicio de habitación. | Agradezca y cierre. |  |

---

## a2:es:a2_request_room_change - Pedir Cambio de Habitación

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_request_room_change
- Setting: En la recepción del hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Dé una razón sencilla y pregunte si puede cambiar de habitación.

### Clean Dialogue Path

- Empleado del hotel: ¿Cómo puedo ayudarle? (我可以怎麼幫忙？)
- Tú: Mi habitación es un poco ruidosa. ¿Puedo cambiar de habitación? (我的房間有點吵。可以換房嗎？)
- Empleado del hotel: He revisado. Tenemos otra habitación disponible. (我確認了，有另一間房。)
- Tú: Hay otra habitación disponible, ¿verdad? (有另一間房，對嗎？)
- Empleado del hotel: Puede mudarse a la nueva habitación en treinta minutos. (三十分鐘後可以搬到新房間。)
- Tú: Puedo mudarme en treinta minutos, ¿verdad? (三十分鐘後可以搬，對嗎？)
- Empleado del hotel: Cuando esté lista, le doy la nueva tarjeta. (準備好後，我會給您新房卡。)
- Tú: De acuerdo. Tomo la nueva tarjeta cuando esté lista. (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | ¿Cómo puedo ayudarle? (我可以怎麼幫忙？) | Mi habitación es un poco ruidosa. ¿Puedo cambiar de habitación? (我的房間有點吵。可以換房嗎？) | 1. ¿Puedo cambiar la mesa del restaurante? (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: Es una habitación de hotel, no una mesa de restaurante.<br>2. Voy a presentar una queja formal. (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: Una queja formal queda fuera de esta tarea A2. | Pida cambiar de habitación con una razón. |  |
| t2 | He revisado. Tenemos otra habitación disponible. (我確認了，有另一間房。) | Hay otra habitación disponible, ¿verdad? (有另一間房，對嗎？) | 1. Hay otro billete disponible, ¿verdad? (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: Es una habitación, no un billete.<br>2. ¿También puedo recibir compensación? (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: La compensación queda fuera de esta tarea sencilla. | Escuche la alternativa. | Fórmula A2<br>Expresión breve útil en esta situación de hotel.<br>otra habitación = 另一間房 |
| t3 | Puede mudarse a la nueva habitación en treinta minutos. (三十分鐘後可以搬到新房間。) | Puedo mudarme en treinta minutos, ¿verdad? (三十分鐘後可以搬，對嗎？) | 1. Salgo del hotel en tres horas, ¿verdad? (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: El personal dijo que puede mudarse en treinta minutos.<br>2. Me mudo porque necesito un hospital. (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: Las razones médicas quedan fuera de esta tarea. | Confirme cuándo puede cambiarse. |  |
| t4 | Cuando esté lista, le doy la nueva tarjeta. (準備好後，我會給您新房卡。) | De acuerdo. Tomo la nueva tarjeta cuando esté lista. (好，準備好後我拿新房卡。) | 1. No, voy a cambiar la hora del tren. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: Esto es cambio de habitación, no transporte.<br>2. Voy a hablar con la policía ahora. (我現在會告訴警察。) [forbidden_or_wrong_domain] - feedback: Los trámites policiales quedan fuera de esta tarea. | Acepte y cierre. |  |

---

## a2:es:a2_reschedule_meeting_time - Cambiar la hora de una quedada

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Plan con una amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Una amiga confirma la hora original y necesitas pedir un cambio sencillo.
- Learner goal: Pedir cambiar la hora, proponer una alternativa y confirmar la nueva hora.
- Support text: 你的朋友確認原本時間。用西班牙語簡短請對方改時間，提出一個新的時間，最後確認。

### Clean Dialogue Path

- amiga: Entonces, quedamos a las tres, ¿verdad? (那我們三點見，對嗎？)
- tú: Perdona, ¿podemos cambiar la hora? (不好意思，我們可以改時間嗎？)
- amiga: Claro. ¿A qué hora te va bien? (當然。你幾點方便？)
- tú: ¿Te va bien a las cuatro? (四點你方便嗎？)
- amiga: Sí, a las cuatro puedo. (可以，我四點可以。)
- tú: Perfecto, entonces a las cuatro. (太好了，那就四點。)
- amiga: Genial. Nos vemos a las cuatro. (很好。我們四點見。)
- tú: Gracias, nos vemos. (謝謝，到時見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Entonces, quedamos a las tres, ¿verdad? (那我們三點見，對嗎？) | Perdona, ¿podemos cambiar la hora? (不好意思，我們可以改時間嗎？) | 1. Sí, a las tres. (對，三點。) [old_time_repetition] - feedback: 這是在確認原本時間，沒有提出改時間。<br>2. La estación está cerca. (車站很近。) [wrong_scenario_location] - feedback: 這是在說地點。現在要請朋友改時間。 | 對方確認原本時間。如果要改時間，先禮貌提出。 |  |
| t2 | Claro. ¿A qué hora te va bien? (當然。你幾點方便？) | ¿Te va bien a las cuatro? (四點你方便嗎？) | 1. A las tres está bien. (三點可以。) [old_time_repetition] - feedback: 這又回到原本三點。你需要提出新的時間。<br>2. En la entrada principal. (在正門。) [wrong_slot_place] - feedback: 這是在回答地點。對方問的是新的時間。 | 對方問新的時間。直接提出一個可行時間。 | ¿Podemos cambiar...?<br>請人改低風險安排時，可以用「¿Podemos cambiar...?」再提出新時間。<br>¿Podemos cambiar la hora? = 我們可以改時間嗎？<br>¿Te va bien a las cuatro? = 四點你方便嗎？ |
| t3 | Sí, a las cuatro puedo. (可以，我四點可以。) | Perfecto, entonces a las cuatro. (太好了，那就四點。) | 1. Perfecto, entonces a las tres. (太好了，那就三點。) [wrong_old_time] - feedback: 三點是原本時間。現在已經改成四點。<br>2. Perfecto, dos entradas. (太好了，兩張票。) [wrong_scenario_ticket] - feedback: 這像是在買票。現在是在確認新的見面時間。 | 對方接受新時間。確認從三點改到四點。 |  |
| t4 | Genial. Nos vemos a las cuatro. (很好。我們四點見。) | Gracias, nos vemos. (謝謝，到時見。) | 1. Voy a llegar diez minutos tarde. (我會晚十分鐘到。) [wrong_function_delay] - feedback: 這是在說遲到。這裡新時間已經確認了。<br>2. Quiero pagar con tarjeta. (我想刷卡付款。) [wrong_scenario_payment] - feedback: 這是付款情境。現在只要自然收尾。 | 新時間已確認。簡短道謝收尾。 |  |

---

## a2:es:a2_transport_delay_announcement - Entender un Anuncio de Retraso

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_transport_delay_announcement
- Setting: En el andén del tren
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: Escucha el anuncio de la estación, confirma cuánto se retrasa el tren y elige un siguiente paso sencillo.

### Clean Dialogue Path

- Empleado: Atención, por favor. El tren a Central llega con quince minutos de retraso. (請注意，開往 Central 的列車晚 15 分鐘。)
- Tú: Llega con quince minutos de retraso, ¿verdad? (確認延誤時間)
- Empleado: Si son quince minutos, ¿quiere esperar o tomar el bus? (如果是 15 分鐘，您要等，還是搭公車？)
- Tú: Si son quince minutos, espero. (選擇等待)
- Empleado: El próximo tren llega sobre las diez y veinte. (下一班車大約 10 點 20 分到。)
- Tú: Entonces tomo el tren de las diez y veinte. (確認搭下一班)
- Empleado: De acuerdo. Espere en este andén, por favor. (好的，請在這個月台等。)
- Tú: De acuerdo, espero aquí. (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Atención, por favor. El tren a Central llega con quince minutos de retraso. (請注意，開往 Central 的列車晚 15 分鐘。) | Llega con quince minutos de retraso, ¿verdad? (確認延誤時間) | 1. Sale en cinco minutos, ¿verdad? (錯誤時間) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. ¿Puedo cambiar de asiento? (我可以換座位嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 聽懂延誤時間 |  |
| t2 | Si son quince minutos, ¿quiere esperar o tomar el bus? (如果是 15 分鐘，您要等，還是搭公車？) | Si son quince minutos, espero. (選擇等待) | 1. Ayer esperé. (我昨天等了。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Deme un recibo, por favor. (請給我收據。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 做出簡單選擇 |  |
| t3 | El próximo tren llega sobre las diez y veinte. (下一班車大約 10 點 20 分到。) | Entonces tomo el tren de las diez y veinte. (確認搭下一班) | 1. ¿La tienda cierra a las diez y veinte? (店 10 點 20 分關門嗎？) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Quiero que me devuelvan el billete de bus. (我想退公車票。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 確認下一班時間 |  |
| t4 | De acuerdo. Espere en este andén, por favor. (好的，請在這個月台等。) | De acuerdo, espero aquí. (確認等待) | 1. Por favor, cámbieme de habitación. (請幫我換房間。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2.<br>2. Quiero pedir una cita en el hospital. (我想預約醫院。) - feedback: Los distractores prueban tiempo equivocado, escenario equivocado o una escalada fuera del alcance A2. | 禮貌收尾 |  |

---

## a2:es:a2_understand_hotel_notice - Entender un Aviso del Hotel

- Level: A2
- Language: Spanish (es)
- Scenario ID: a2_understand_hotel_notice
- Setting: En el vestíbulo del hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Entienda un aviso corto del hotel y confirme hora, lugar y regla.

### Clean Dialogue Path

- Empleado del hotel: Por favor, mire el aviso. El desayuno es de siete a nueve de la mañana. (請看公告。早餐是早上七點到九點。)
- Tú: El desayuno es de siete a nueve de la mañana, ¿verdad? (早餐是早上七點到九點，對嗎？)
- Empleado del hotel: Es en el restaurante del segundo piso. (地點是二樓餐廳。)
- Tú: Voy al restaurante del segundo piso, ¿verdad? (去二樓餐廳就可以，對嗎？)
- Empleado del hotel: En la entrada, solo diga su número de habitación. (入口只要告知房號即可。)
- Tú: Solo digo mi número de habitación en la entrada, ¿verdad? (入口只要說房號就可以，對嗎？)
- Empleado del hotel: Sí, venga mañana por la mañana. (對，明天早上來就可以。)
- Tú: De acuerdo. Mañana por la mañana voy al restaurante del segundo piso. (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Por favor, mire el aviso. El desayuno es de siete a nueve de la mañana. (請看公告。早餐是早上七點到九點。) | El desayuno es de siete a nueve de la mañana, ¿verdad? (早餐是早上七點到九點，對嗎？) | 1. El desayuno es de siete a nueve de la noche, ¿verdad? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: El aviso dice por la mañana.<br>2. El check-out es a las nueve de la mañana, ¿verdad? (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: Este aviso es sobre el desayuno, no el check-out. | Busque la hora en el aviso. |  |
| t2 | Es en el restaurante del segundo piso. (地點是二樓餐廳。) | Voy al restaurante del segundo piso, ¿verdad? (去二樓餐廳就可以，對嗎？) | 1. Voy a una habitación del tercer piso, ¿verdad? (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: El lugar es el restaurante del segundo piso.<br>2. Muestro mi pasaporte, ¿verdad? (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: No se necesita pasaporte para este aviso. | Confirme el lugar. | Fórmula A2<br>Expresión breve útil en esta situación de hotel.<br>restaurante del segundo piso = 二樓餐廳 |
| t3 | En la entrada, solo diga su número de habitación. (入口只要告知房號即可。) | Solo digo mi número de habitación en la entrada, ¿verdad? (入口只要說房號就可以，對嗎？) | 1. Hablo con la policía en la entrada, ¿verdad? (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: Es un aviso de desayuno, no un trámite policial.<br>2. Recibo un reembolso en la entrada, ¿verdad? (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Los reembolsos no corresponden a este aviso. | Confirme la condición sencilla. |  |
| t4 | Sí, venga mañana por la mañana. (對，明天早上來就可以。) | De acuerdo. Mañana por la mañana voy al restaurante del segundo piso. (好，我明天早上去二樓餐廳。) | 1. De acuerdo. Esta noche recojo la ropa lavada. (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: Esto es desayuno, no lavandería.<br>2. De acuerdo. Escribo un informe de accidente. (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: Los informes de accidente quedan fuera de esta tarea. | Confirme lo que hará. |  |

---
