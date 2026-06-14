# A2 Portuguese Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:pt:a2_app_booking_confirmation - Confirmar uma Reserva no App

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma tarefa digital ou de formulário simples de baixo risco com frases curtas de A2.
- Support text: Mantenha a tarefa de baixo risco. Não dê senhas, dados de pagamento, ID sensível nem informações legais ou médicas.

### Clean Dialogue Path

- atendente: Sua reserva está confirmada para hoje às três. (預約確認為今天下午三點。)
- 你: Onde é o lugar? (地點在哪裡？)
- atendente: É no segundo andar do café. (在咖啡店二樓。)
- 你: Então é no segundo andar do café? (是在咖啡店二樓，對嗎？)
- atendente: Sim, a reserva está no nome de Mina. (對，預約姓名是 Mina。)
- 你: Sim, esse é meu nome. (對，是我的名字。)
- atendente: Então vemos você às três. (那下午三點見。)
- 你: Tudo bem, vou às três. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Sua reserva está confirmada para hoje às três. (預約確認為今天下午三點。) | Onde é o lugar? (地點在哪裡？) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t2 | É no segundo andar do café. (在咖啡店二樓。) | Então é no segundo andar do café? (是在咖啡店二樓，對嗎？) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t3 | Sim, a reserva está no nome de Mina. (對，預約姓名是 Mina。) | Sim, esse é meu nome. (對，是我的名字。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t4 | Então vemos você às três. (那下午三點見。) | Tudo bem, vou às três. (好，我下午三點會去。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |

---

## a2:pt:a2_ask_ingredient_preference - Perguntar Sobre um Ingrediente

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_ask_ingredient_preference
- Setting: balcão do restaurante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Pergunte se tem um ingrediente comum e escolha de acordo com sua preferência.
- Support text: Pergunte se tem um ingrediente comum e escolha de acordo com sua preferência.

### Clean Dialogue Path

- atendente: O que você gostaria de pedir? (您想點什麼？)
- 你: Esta salada tem cebola? (這個沙拉裡有洋蔥嗎？)
- atendente: Sim, tem um pouco de cebola. (有，放一點洋蔥。)
- 你: Tem um pouco de cebola, certo? (有一點洋蔥，對嗎？)
- atendente: Se quiser, podemos fazer sem cebola. (如果您想要，可以不加洋蔥。)
- 你: Sim, sem cebola, por favor. (好的，請不要加洋蔥。)
- atendente: Claro. Vou preparar sem cebola. (可以，我會準備不加洋蔥的。)
- 你: Obrigado. Pode preparar assim, por favor. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | O que você gostaria de pedir? (您想點什麼？) | Esta salada tem cebola? (這個沙拉裡有洋蔥嗎？) | 1. Em que andar fica esta salada? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: Andar não tem relação com ingredientes.<br>2. Por favor, mude o horário da minha passagem. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: Isso muda para uma situação de passagem. | Pergunte sobre um ingrediente comum. |  |
| t2 | Sim, tem um pouco de cebola. (有，放一點洋蔥。) | Tem um pouco de cebola, certo? (有一點洋蔥，對嗎？) | 1. Tem muita carne, certo? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: Carne não foi mencionada.<br>2. O quarto é barulhento, certo? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: Isso muda para um problema de hotel. | Confirme a informação do ingrediente. |  |
| t3 | Se quiser, podemos fazer sem cebola. (如果您想要，可以不加洋蔥。) | Sim, sem cebola, por favor. (好的，請不要加洋蔥。) | 1. Sim, me dê remédio para alergia, por favor. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: Remédio/alergia fica fora desta tarefa.<br>2. Sim, faça o reembolso, por favor. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: Isto não é pedido de reembolso. | Escolha como preferência, não como tema médico. |  |
| t4 | Claro. Vou preparar sem cebola. (可以，我會準備不加洋蔥的。) | Obrigado. Pode preparar assim, por favor. (謝謝，請這樣做。) | 1. Diga meu número de passaporte, por favor. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: Dados de passaporte não são necessários.<br>2. Quero guardar minha bagagem. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: Isso muda para guarda-volumes. | Finalize confirmando o pedido. |  |

---

## a2:pt:a2_ask_late_checkout - Pedir Check-out Mais Tarde

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_ask_late_checkout
- Setting: recepção do hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Pergunte se pode fazer o check-out um pouco mais tarde e confirme o horário final.

### Clean Dialogue Path

- Empleado del hotel: Como posso ajudar? (我可以怎麼幫您？)
- Tú: Posso fazer o check-out um pouco mais tarde? (我可以晚一點退房嗎？)
- Empleado del hotel: Hoje você pode fazer o check-out até uma da tarde. (今天可以延到下午一點退房。)
- Tú: Até uma da tarde está bom, certo? (可以到下午一點，對嗎？)
- Empleado del hotel: Por favor, mostre o cartão do quarto na recepção antes do meio-dia. (請在中午前到櫃台出示房卡。)
- Tú: Mostro o cartão antes do meio-dia, certo? (我中午前出示房卡，對嗎？)
- Empleado del hotel: Certo, vou deixar como check-out à uma da tarde. (好的，我幫您記成下午一點退房。)
- Tú: Obrigado. Vou fazer check-out à uma da tarde. (謝謝，我下午一點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Como posso ajudar? (我可以怎麼幫您？) | Posso fazer o check-out um pouco mais tarde? (我可以晚一點退房嗎？) | 1. Posso fazer o check-in um pouco mais tarde? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: Check-in é o momento errado.<br>2. Pode baixar o preço? (可以降低價格嗎？) [forbidden_or_wrong_domain] - feedback: Preço não é o objetivo. | Peça um check-out mais tarde. |  |
| t2 | Hoje você pode fazer o check-out até uma da tarde. (今天可以延到下午一點退房。) | Até uma da tarde está bom, certo? (可以到下午一點，對嗎？) | 1. Até dez horas está bom, certo? (可以到十點，對嗎？) [wrong_detail_or_domain] - feedback: Dez horas é o horário errado.<br>2. Vou reservar outro quarto. (我想再訂一間房。) [forbidden_or_wrong_domain] - feedback: Você não está reservando outro quarto. | Confirme o horário final. |  |
| t3 | Por favor, mostre o cartão do quarto na recepção antes do meio-dia. (請在中午前到櫃台出示房卡。) | Mostro o cartão antes do meio-dia, certo? (我中午前出示房卡，對嗎？) | 1. Digo meu número de passaporte, certo? (我告訴您我的護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: Passaporte não foi pedido.<br>2. Pego minha bagagem às sete, certo? (我晚上七點拿行李，對嗎？) [forbidden_or_wrong_domain] - feedback: Bagagem é outro serviço. | Confirme a exigência simples. |  |
| t4 | Certo, vou deixar como check-out à uma da tarde. (好的，我幫您記成下午一點退房。) | Obrigado. Vou fazer check-out à uma da tarde. (謝謝，我下午一點退房。) | 1. Vou pedir reembolso. (我要申請退款。) [wrong_detail_or_domain] - feedback: Reembolso está fora do objetivo.<br>2. Amanhã cedo vou pegar o trem. (明天早上我要搭火車。) [forbidden_or_wrong_domain] - feedback: Trem é outro contexto. | Finalize com o horário confirmado. |  |

---

## a2:pt:a2_ask_recommendation_budget - Pedir uma Recomendação no Orçamento

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_ask_recommendation_budget
- Setting: loja pequena
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Peça uma recomendação simples dentro de um orçamento pequeno.
- Support text: Peça uma recomendação simples dentro de um orçamento pequeno.

### Clean Dialogue Path

- atendente: O que você está procurando? (您在找什麼？)
- 你: Pode recomendar um presente por menos de cinquenta reais? (可以推薦五十雷亞爾以內的禮物嗎？)
- atendente: Você prefere algo leve ou algo prático? (您想要輕巧的，還是實用的？)
- 你: Algo prático, por favor. (請推薦實用的。)
- atendente: Então este caderninho custa menos de cinquenta reais. (那這本小筆記本在五十雷亞爾以內。)
- 你: Esse caderno custa menos de cinquenta reais, certo? (那本筆記本在五十雷亞爾以內，對嗎？)
- atendente: Sim, e dá para embrulhar para presente. (對，也可以包裝成禮物。)
- 你: Ótimo. Vou levar esse caderno. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | O que você está procurando? (您在找什麼？) | Pode recomendar um presente por menos de cinquenta reais? (可以推薦五十雷亞爾以內的禮物嗎？) | 1. Verifique minha conta bancária, por favor. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: Esta não é uma tarefa bancária.<br>2. Quero registrar um item perdido. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: Registro de item perdido é outra tarefa. | Peça uma recomendação dentro de um orçamento pequeno. |  |
| t2 | Você prefere algo leve ou algo prático? (您想要輕巧的，還是實用的？) | Algo prático, por favor. (請推薦實用的。) | 1. Algo apimentado, por favor. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Apimentado combina mais com menu de comida.<br>2. Quero check-out mais tarde. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: Isso muda para hotel. | Diga uma preferência simples. |  |
| t3 | Então este caderninho custa menos de cinquenta reais. (那這本小筆記本在五十雷亞爾以內。) | Esse caderno custa menos de cinquenta reais, certo? (那本筆記本在五十雷亞爾以內，對嗎？) | 1. Esse quarto custa menos de cinquenta reais, certo? (那個房間在五十雷亞爾以內，對嗎？) [wrong_detail_or_domain] - feedback: Um quarto não é o item recomendado.<br>2. Essa passagem era de ontem, certo? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: Isso muda para passagens. | Confirme a recomendação e o orçamento. |  |
| t4 | Sim, e dá para embrulhar para presente. (對，也可以包裝成禮物。) | Ótimo. Vou levar esse caderno. (很好，我要那本筆記本。) | 1. Quero reembolso. (請退款。) [wrong_detail_or_domain] - feedback: Isto não é pedido de reembolso.<br>2. Verifique meu seguro, por favor. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: Seguro fica fora desta tarefa de baixo risco. | Aceite a recomendação com educação. |  |

---

## a2:pt:a2_ask_transfer_platform - Perguntar a Plataforma de Conexão

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_ask_transfer_platform
- Setting: Na informação da estação
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: Pergunte onde fazer a conexão, escute a estação e a plataforma, e confirme o caminho.

### Clean Dialogue Path

- Atendente: Para onde você vai? (您要去哪裡？)
- Você: Vou para o aeroporto. Onde faço a conexão? (詢問轉乘)
- Atendente: Desça na Central e vá para a plataforma três. (請在 Central 下車，然後到 3 號月台。)
- Você: Desço na Central e vou para a plataforma três, certo? (確認路線)
- Atendente: Na plataforma três, pegue o trem para o aeroporto. (在 3 號月台搭往機場的車。)
- Você: Na plataforma três eu pego o trem para o aeroporto, certo? (確認月台與方向)
- Atendente: Sim, faça a conexão na Central. (對，請在 Central 轉乘。)
- Você: Obrigado. Vou fazer a conexão na Central. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Para onde você vai? (您要去哪裡？) | Vou para o aeroporto. Onde faço a conexão? (詢問轉乘) | 1. Fui ao aeroporto ontem. (我昨天去了機場。) - feedback: Pergunte a conexão de agora, não fale de ontem.<br>2. Quero guardar uma mala. (我想寄放行李。) - feedback: Isso é guarda-volumes, não conexão. | 詢問轉乘 |  |
| t2 | Desça na Central e vá para a plataforma três. (請在 Central 下車，然後到 3 號月台。) | Desço na Central e vou para a plataforma três, certo? (確認路線) | 1. Tomo café na Central, certo? (我在 Central 喝咖啡，對嗎？) - feedback: A orientação é ir para a plataforma três.<br>2. Quarto três, certo? (3 號房，對嗎？) - feedback: É plataforma, não quarto. | 確認兩步指示 |  |
| t3 | Na plataforma três, pegue o trem para o aeroporto. (在 3 號月台搭往機場的車。) | Na plataforma três eu pego o trem para o aeroporto, certo? (確認月台與方向) | 1. O trem para o aeroporto chegou ontem. (往機場的車昨天到了。) - feedback: Confirme o trem que você precisa agora.<br>2. Para onde vou em uma emergência? (緊急時我要去哪裡？) - feedback: Rotas de emergência ficam fora desta tarefa. | 確認方向 |  |
| t4 | Sim, faça a conexão na Central. (對，請在 Central 轉乘。) | Obrigado. Vou fazer a conexão na Central. (禮貌收尾) | 1. Quero mudar o horário da passagem. (我想更改票的時間。) - feedback: Isso não é mudança de passagem.<br>2. Vou à polícia no aeroporto. (我要去機場找警察。) - feedback: Procedimentos policiais ficam fora desta tarefa. | 收尾 |  |

---

## a2:pt:a2_change_delivery_pickup_time - Mudar o Horário de Retirada

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma tarefa digital ou de formulário simples de baixo risco com frases curtas de A2.
- Support text: Mantenha a tarefa de baixo risco. Não dê senhas, dados de pagamento, ID sensível nem informações legais ou médicas.

### Clean Dialogue Path

- atendente: A retirada é hoje às quatro. (今天四點取貨。)
- 你: Posso mudar o horário de retirada? (可以改取貨時間嗎？)
- atendente: Sim, às cinco está disponível. (可以，五點可以。)
- 你: Então às cinco, por favor. (那請改成五點。)
- atendente: Então mudamos para as cinco? (改成五點嗎？)
- 你: Sim, às cinco está bom. (對，五點可以。)
- atendente: Certo, vou mudar para as cinco. (好的，我會改成五點。)
- 你: Obrigado. Vou às cinco. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | A retirada é hoje às quatro. (今天四點取貨。) | Posso mudar o horário de retirada? (可以改取貨時間嗎？) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t2 | Sim, às cinco está disponível. (可以，五點可以。) | Então às cinco, por favor. (那請改成五點。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t3 | Então mudamos para as cinco? (改成五點嗎？) | Sim, às cinco está bom. (對，五點可以。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t4 | Certo, vou mudar para as cinco. (好的，我會改成五點。) | Obrigado. Vou às cinco. (謝謝，我五點會去。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |

---

## a2:pt:a2_change_ticket_time - Mudar o Horário de uma Passagem

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_change_ticket_time
- Setting: No guichê da estação
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: Peça para mudar o horário da passagem, escute o horário disponível e confirme.

### Clean Dialogue Path

- Atendente: Olá. Como posso ajudar? (您好，我可以怎麼幫您？)
- Você: Quero mudar o horário da minha passagem. (提出請求)
- Atendente: Dá para mudar para o trem das três da tarde. (可以改成下午 3 點的車。)
- Você: Sim, por favor, para o trem das três. (接受新時間)
- Atendente: Então, três da tarde está correto? (那就改成下午 3 點，對嗎？)
- Você: Sim, três da tarde está bom. (確認時間)
- Atendente: Está alterado. Pegue o trem das três, por favor. (已經改好了，請搭 3 點那班車。)
- Você: Obrigado. Vou pegar o trem das três. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Olá. Como posso ajudar? (您好，我可以怎麼幫您？) | Quero mudar o horário da minha passagem. (提出請求) | 1. A passagem era de ontem. (票是昨天的。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2.<br>2. Um café, por favor. (請給我一杯咖啡。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2. | 提出改時間 |  |
| t2 | Dá para mudar para o trem das três da tarde. (可以改成下午 3 點的車。) | Sim, por favor, para o trem das três. (接受新時間) | 1. Tem quarto às três? (3 點有房間嗎？) - feedback: É sobre uma passagem, não sobre um quarto.<br>2. Eu viajei às três ontem. (我昨天 3 點搭了。) - feedback: O horário disponível é para a mudança de hoje. | 接受可用時間 |  |
| t3 | Então, três da tarde está correto? (那就改成下午 3 點，對嗎？) | Sim, três da tarde está bom. (確認時間) | 1. Não, três foi ontem. (不，3 點是昨天。) - feedback: Aqui é para confirmar o novo horário.<br>2. Explique as regras de reembolso, por favor. (請說明退款規則。) - feedback: Regras de reembolso ficam fora desta tarefa A2. | 確認時間 |  |
| t4 | Está alterado. Pegue o trem das três, por favor. (已經改好了，請搭 3 點那班車。) | Obrigado. Vou pegar o trem das três. (禮貌收尾) | 1. Amanhã vou tomar café. (我明天要喝咖啡。) - feedback: Isso não fecha a troca da passagem.<br>2. Qual é o número do meu passaporte? (我的護照號碼是什麼？) - feedback: Dados de identidade não são necessários aqui. | 收尾 |  |

---

## a2:pt:a2_compare_two_menu_options - Comparar Duas Opções do Menu

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_compare_two_menu_options
- Setting: balcão do restaurante
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Compare duas opções simples do menu e escolha a que você prefere.
- Support text: Compare duas opções simples do menu e escolha a que você prefere.

### Clean Dialogue Path

- atendente: Hoje você pode escolher o bowl de arroz ou a sopa de macarrão. (今天可以選飯碗或湯麵。)
- 你: Qual é a diferença entre as duas opções? (兩個選項有什麼不同？)
- atendente: O bowl de arroz é um pouco apimentado, e a sopa de macarrão é mais leve. (飯碗有點辣，湯麵比較清爽。)
- 你: A sopa de macarrão é mais leve, certo? (湯麵比較清爽，對嗎？)
- atendente: Sim, a sopa de macarrão é menos apimentada. (對，湯麵比較不辣。)
- 你: Então vou querer a sopa de macarrão. (那我要湯麵。)
- atendente: Ótimo. Vou colocar uma sopa de macarrão. (好的，我幫您點一份湯麵。)
- 你: Obrigado. Uma sopa de macarrão, por favor. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Hoje você pode escolher o bowl de arroz ou a sopa de macarrão. (今天可以選飯碗或湯麵。) | Qual é a diferença entre as duas opções? (兩個選項有什麼不同？) | 1. Onde está minha mesa? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: Isso pergunta sobre a mesa, não compara o menu.<br>2. Quero reembolso. (我想退款。) [forbidden_or_wrong_domain] - feedback: Reembolso fica fora desta tarefa A2. | Pergunte a diferença entre as duas opções. |  |
| t2 | O bowl de arroz é um pouco apimentado, e a sopa de macarrão é mais leve. (飯碗有點辣，湯麵比較清爽。) | A sopa de macarrão é mais leve, certo? (湯麵比較清爽，對嗎？) | 1. O bowl de arroz é mais barato, certo? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: Preço não foi mencionado.<br>2. O trem é mais rápido, certo? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: Isso muda para transporte. | Confirme a comparação que ouviu. |  |
| t3 | Sim, a sopa de macarrão é menos apimentada. (對，湯麵比較不辣。) | Então vou querer a sopa de macarrão. (那我要湯麵。) | 1. Então vou trocar de quarto. (那我要換房間。) [wrong_detail_or_domain] - feedback: Isso muda para uma situação de hotel.<br>2. Então vou mostrar meu passaporte. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: Passaporte não é necessário aqui. | Escolha a opção conforme sua preferência. |  |
| t4 | Ótimo. Vou colocar uma sopa de macarrão. (好的，我幫您點一份湯麵。) | Obrigado. Uma sopa de macarrão, por favor. (謝謝，請給我一份湯麵。) | 1. Vou chamar a polícia. (我要報警。) [wrong_detail_or_domain] - feedback: Isso é grave demais para esta situação.<br>2. Amanhã preciso ir ao hospital. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: Esta não é uma situação médica. | Confirme o prato escolhido com educação. |  |

---

## a2:pt:a2_confirm_date_time_place - Confirmar Data, Hora e Lugar

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_confirm_date_time_place
- Setting: Conferindo uma mensagem curta
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Você confirma data, hora e lugar a partir de uma mensagem curta.
- Learner goal: Entender uma mensagem curta e confirmar os detalhes principais.
- Support text: Leia a mensagem curta da sua amiga. Confirme a data, a hora e o lugar.

### Clean Dialogue Path

- amiga: Você viu a minha mensagem? (你看過我的訊息了嗎？)
- você: Sim, amanhã às dez, né? (有，明天十點，對吧？)
- amiga: Isso. Onde a gente vai se encontrar? (對。我們要在哪裡見？)
- você: Na frente da prefeitura. (在市政廳前面。)
- amiga: Se eu atrasar, te mando mensagem. (如果我晚到，我會傳訊息給你。)
- você: Tá bom, entendi. (好，我知道了。)
- amiga: Perfeito. Até amanhã. (太好了。明天見。)
- você: Até amanhã. (明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Você viu a minha mensagem? (你看過我的訊息了嗎？) | Sim, amanhã às dez, né? (有，明天十點，對吧？) | 1. Sim, hoje à noite às dez, né? (有，今天晚上十點，對吧？) [wrong_date_time] - feedback: 訊息說的是明天十點，不是今天晚上十點。<br>2. Sim, vi o cardápio. (有，我看過菜單了。) [wrong_scenario_menu] - feedback: 這則訊息是在說見面的時間和地點，不是菜單。 | 訊息寫著：Amanhã, às 10h, vamos nos encontrar na frente da prefeitura. 先確認日期和時間。 |  |
| t2 | Isso. Onde a gente vai se encontrar? (對。我們要在哪裡見？) | Na frente da prefeitura. (在市政廳前面。) | 1. Dentro da prefeitura. (在市政廳裡面。) [wrong_place_relation] - feedback: 訊息說的是在市政廳前面，不是在裡面。<br>2. Vou descansar em casa. (我打算在家休息。) [wrong_function_plan] - feedback: 這是在說自己的計畫，沒有確認見面地點。 | 訊息裡的地點是 na frente da prefeitura。 | na frente de + lugar<br>用 na frente de 表示在某個地點前面。<br>na frente da prefeitura = 在市政廳前面<br>na frente da cafeteria = 在咖啡店前面 |
| t3 | Se eu atrasar, te mando mensagem. (如果我晚到，我會傳訊息給你。) | Tá bom, entendi. (好，我知道了。) | 1. Tá bom, estou atrasado. (好，我遲到了。) [wrong_subject_status] - feedback: 對方是在說自己可能晚到，不是在說你遲到。<br>2. Se o ônibus atrasar, eu ligo. (如果公車晚了，我會打電話。) [wrong_focus_self_delay] - feedback: 這把焦點改成你自己的可能晚到。現在只要回應對方。 | 對方只是說如果自己晚到會傳訊息。簡短回覆即可。 |  |
| t4 | Perfeito. Até amanhã. (太好了。明天見。) | Até amanhã. (明天見。) | 1. Até ontem. (昨天見。) [wrong_time_expression] - feedback: Até ontem 不自然。這裡要說 até amanhã。<br>2. Pode trazer a conta? (可以拿帳單來嗎？) [wrong_scenario_payment] - feedback: 這是付款句。這裡只是結束見面確認。 | 細節都清楚了。自然收尾。 |  |

---

## a2:pt:a2_decline_with_reason - Recusar com um Motivo Simples

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_decline_with_reason
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma situação social simples com um amigo usando frases curtas de A2.
- Support text: Use linguagem natural com um amigo. Mantenha a atividade e o motivo simples.

### Clean Dialogue Path

- amigo: Você quer ver um filme hoje à noite? (今晚要看電影嗎？)
- 你: Desculpa, hoje à noite não posso. (不好意思，我今晚不行。)
- amigo: Tudo bem. Você está ocupado? (沒關係。你很忙嗎？)
- 你: Ainda tenho um pouco de trabalho. (我還有一點事要做。)
- amigo: Talvez outro dia? (也許改天？)
- 你: Sim, talvez neste fim de semana. (好，也許這個週末。)
- amigo: Tá bom. A gente conversa no fim de semana. (好，那週末再說。)
- 你: Obrigado. Até o fim de semana. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Você quer ver um filme hoje à noite? (今晚要看電影嗎？) | Desculpa, hoje à noite não posso. (不好意思，我今晚不行。) | 1. Não, eu não quero. (不要，我不想。) [too_blunt] - feedback: Isso não combina com esta situação com um amigo.<br>2. Me dê o recibo de novo, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Isso soa forte demais para falar com um amigo. | Keep the refusal brief and warm. |  |
| t2 | Tudo bem. Você está ocupado? (沒關係。你很忙嗎？) | Ainda tenho um pouco de trabalho. (我還有一點事要做。) | 1. Não, eu não quero. (不要，我不想。) [too_blunt] - feedback: Isso não combina com esta situação com um amigo.<br>2. Me dê o recibo de novo, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Isso soa forte demais para falar com um amigo. | Keep the refusal brief and warm. |  |
| t3 | Talvez outro dia? (也許改天？) | Sim, talvez neste fim de semana. (好，也許這個週末。) | 1. Não, eu não quero. (不要，我不想。) [too_blunt] - feedback: Isso não combina com esta situação com um amigo.<br>2. Me dê o recibo de novo, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Isso soa forte demais para falar com um amigo. | Keep the refusal brief and warm. |  |
| t4 | Tá bom. A gente conversa no fim de semana. (好，那週末再說。) | Obrigado. Até o fim de semana. (謝謝，週末見。) | 1. Não, eu não quero. (不要，我不想。) [too_blunt] - feedback: Isso não combina com esta situação com um amigo.<br>2. Me dê o recibo de novo, por favor. (請再給我收據。) [wrong_scenario_shop] - feedback: Isso soa forte demais para falar com um amigo. | Keep the refusal brief and warm. |  |

---

## a2:pt:a2_describe_weekend_activity - Contar uma Atividade do Fim de Semana

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_describe_weekend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma situação social simples com um amigo usando frases curtas de A2.
- Support text: Use linguagem natural com um amigo. Mantenha a atividade e o motivo simples.

### Clean Dialogue Path

- amigo: O que você fez no fim de semana? (你週末做了什麼？)
- 你: Encontrei um amigo e almocei. (我見了朋友，也吃了午餐。)
- amigo: Onde vocês se encontraram? (你們在哪裡見面？)
- 你: A gente se encontrou em um café perto da minha casa. (我們在我家附近的咖啡店見。)
- amigo: Foi legal? (還不錯嗎？)
- 你: Sim, foi calmo e agradável. (嗯，很安靜，也很好。)
- amigo: Parece bom. Da próxima vez eu vou junto. (聽起來不錯。下次我也一起去。)
- 你: Claro, vamos juntos da próxima vez. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | O que você fez no fim de semana? (你週末做了什麼？) | Encontrei um amigo e almocei. (我見了朋友，也吃了午餐。) | 1. Amanhã vou encontrar um amigo. (我明天會見朋友。) [wrong_time_future] - feedback: Isso não combina com esta situação com um amigo.<br>2. Para qual plataforma eu devo ir? (要去哪個月台？) [wrong_scenario_transport] - feedback: Isso soa forte demais para falar com um amigo. | Use a short A2 past-time answer. |  |
| t2 | Onde vocês se encontraram? (你們在哪裡見面？) | A gente se encontrou em um café perto da minha casa. (我們在我家附近的咖啡店見。) | 1. Amanhã vou encontrar um amigo. (我明天會見朋友。) [wrong_time_future] - feedback: Isso não combina com esta situação com um amigo.<br>2. Para qual plataforma eu devo ir? (要去哪個月台？) [wrong_scenario_transport] - feedback: Isso soa forte demais para falar com um amigo. | Use a short A2 past-time answer. |  |
| t3 | Foi legal? (還不錯嗎？) | Sim, foi calmo e agradável. (嗯，很安靜，也很好。) | 1. Amanhã vou encontrar um amigo. (我明天會見朋友。) [wrong_time_future] - feedback: Isso não combina com esta situação com um amigo.<br>2. Para qual plataforma eu devo ir? (要去哪個月台？) [wrong_scenario_transport] - feedback: Isso soa forte demais para falar com um amigo. | Use a short A2 past-time answer. |  |
| t4 | Parece bom. Da próxima vez eu vou junto. (聽起來不錯。下次我也一起去。) | Claro, vamos juntos da próxima vez. (好，下次一起去。) | 1. Amanhã vou encontrar um amigo. (我明天會見朋友。) [wrong_time_future] - feedback: Isso não combina com esta situação com um amigo.<br>2. Para qual plataforma eu devo ir? (要去哪個月台？) [wrong_scenario_transport] - feedback: Isso soa forte demais para falar com um amigo. | Use a short A2 past-time answer. |  |

---

## a2:pt:a2_exchange_wrong_item - Trocar um Item Errado

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_exchange_wrong_item
- Setting: balcão da loja
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Explique com educação que recebeu o item errado e peça o correto.
- Support text: Explique com educação que recebeu o item errado e peça o correto.

### Clean Dialogue Path

- atendente: Como posso ajudar? (需要幫忙嗎？)
- 你: Eu pedi um copo pequeno, mas recebi um grande. (我訂的是小杯，但拿到大杯。)
- atendente: Vou verificar. Posso ver o recibo? (我確認一下。可以看收據嗎？)
- 你: Sim, aqui está o recibo. (可以，這是收據。)
- atendente: Você tem razão. Posso trocar por um copo pequeno agora. (您說得對。我現在可以換成小杯。)
- 你: Você vai trocar por um copo pequeno, certo? (您會幫我換成小杯，對嗎？)
- atendente: Sim, espere um momento, por favor. (好的，請稍等。)
- 你: Obrigado. Vou esperar aqui. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Como posso ajudar? (需要幫忙嗎？) | Eu pedi um copo pequeno, mas recebi um grande. (我訂的是小杯，但拿到大杯。) | 1. Onde o copo pequeno é feito? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: O lugar de fabricação não é o problema.<br>2. Baixe o preço, por favor. (請降價。) [forbidden_or_wrong_domain] - feedback: Negociar preço fica fora desta tarefa. | Explique que recebeu algo diferente do pedido. |  |
| t2 | Vou verificar. Posso ver o recibo? (我確認一下。可以看收據嗎？) | Sim, aqui está o recibo. (可以，這是收據。) | 1. Sim, aqui está meu passaporte. (可以，這是護照。) [wrong_detail_or_domain] - feedback: Passaporte não é necessário.<br>2. Sim, amanhã vou pegar o trem. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: Isso muda para transporte. | Responda à verificação simples do recibo. |  |
| t3 | Você tem razão. Posso trocar por um copo pequeno agora. (您說得對。我現在可以換成小杯。) | Você vai trocar por um copo pequeno, certo? (您會幫我換成小杯，對嗎？) | 1. Explique as regras de reembolso, por favor. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Regras de reembolso são amplas demais aqui.<br>2. Vou denunciar à polícia. (我要報警。) [forbidden_or_wrong_domain] - feedback: Isso é grave demais para esta tarefa. | Confirme a troca. |  |
| t4 | Sim, espere um momento, por favor. (好的，請稍等。) | Obrigado. Vou esperar aqui. (謝謝，我在這裡等。) | 1. Preciso ir ao hospital. (我需要去醫院。) [wrong_detail_or_domain] - feedback: Esta não é uma situação médica.<br>2. Quero trocar de quarto. (我想換房。) [forbidden_or_wrong_domain] - feedback: Isso muda para uma situação de hotel. | Finalize aceitando esperar. |  |

---

## a2:pt:a2_explain_simple_delay_reason - Explicar um Pequeno Atraso

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: A caminho de encontrar uma amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Você vai se atrasar um pouco e precisa explicar o motivo.
- Learner goal: Pedir desculpa, dar um motivo simples e estimar o atraso.
- Support text: Sua amiga pergunta onde você está. Peça desculpa, diga um motivo simples e dê uma estimativa curta.

### Clean Dialogue Path

- amiga: Onde você está? Já está perto? (你在哪裡？已經快到了嗎？)
- você: Desculpa, vou chegar um pouco atrasado. (不好意思，我會晚一點到。)
- amiga: Por quê? Aconteceu alguma coisa? (為什麼？發生什麼事了嗎？)
- você: O ônibus atrasou. (公車晚了。)
- amiga: Você vai atrasar quanto tempo? (你會晚多久？)
- você: Vou atrasar uns dez minutos. (我會晚大約十分鐘。)
- amiga: Tudo bem. Vai com calma. (沒關係。慢慢來。)
- você: Obrigado. Chego já. (謝謝。我很快就到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Onde você está? Já está perto? (你在哪裡？已經快到了嗎？) | Desculpa, vou chegar um pouco atrasado. (不好意思，我會晚一點到。) | 1. Sim, cheguei ontem. (對，我昨天到了。) [wrong_time_past] - feedback: 對方問的是現在，不是昨天。<br>2. Você recomenda algum prato? (你推薦哪一道菜？) [wrong_scenario_restaurant] - feedback: 這是餐廳用語。現在需要說明你會晚到。 | 對方在確認你在哪裡。先道歉，再說會晚一點。 |  |
| t2 | Por quê? Aconteceu alguma coisa? (為什麼？發生什麼事了嗎？) | O ônibus atrasou. (公車晚了。) | 1. Eu gosto do ônibus. (我喜歡公車。) [wrong_reason_semantics] - feedback: 這沒有說明為什麼會晚到。<br>2. Onde fica o ponto de ônibus? (公車站在哪裡？) [wrong_function_location_question] - feedback: 對方問的是原因，不是在問地點。 | 給一個日常、低風險的理由。保持簡短。 | porque + motivo<br>用 porque 接一個簡單理由。<br>porque o ônibus atrasou = 因為公車晚了<br>porque tem trânsito = 因為塞車 |
| t3 | Você vai atrasar quanto tempo? (你會晚多久？) | Vou atrasar uns dez minutos. (我會晚大約十分鐘。) | 1. O ônibus dez é bom. (十號公車不錯。) [wrong_entity_bus_number] - feedback: 這裡的 dez 應該是十分鐘，不是十號公車。<br>2. Não estou atrasado. (我沒有遲到。) [contradicts_context] - feedback: 你已經說會晚到。現在要估計晚多久。 | 用 uns 加分鐘數，給一個簡單估計。 |  |
| t4 | Tudo bem. Vai com calma. (沒關係。慢慢來。) | Obrigado. Chego já. (謝謝。我很快就到。) | 1. Tenho uma reserva. (我有預約。) [wrong_scenario_reservation] - feedback: 這像是飯店或餐廳情境，不是在回覆晚到訊息。<br>2. Posso pagar agora? (我現在可以付款嗎？) [wrong_scenario_payment] - feedback: 這是付款句。這裡簡單道謝更自然。 | 對方接受你晚到。道謝並自然收尾。 |  |

---

## a2:pt:a2_fill_simple_form_help - Pedir Ajuda com um Formulário Simples

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma tarefa digital ou de formulário simples de baixo risco com frases curtas de A2.
- Support text: Mantenha a tarefa de baixo risco. Não dê senhas, dados de pagamento, ID sensível nem informações legais ou médicas.

### Clean Dialogue Path

- atendente: Por favor, preencha este formulário primeiro. (請先填這張表。)
- 你: O que eu escrevo neste campo? (這一欄要填什麼？)
- atendente: Aqui escreva seu nome. (這裡請填姓名。)
- 你: Só meu nome? (只填姓名就可以嗎？)
- atendente: Sim, o telefone vai embaixo. (對，電話在下面那一欄。)
- 你: Entendi. Vou escrever embaixo. (知道了，我會寫在下面。)
- atendente: Sim, assim é suficiente. (對，這樣就夠了。)
- 你: Obrigado. Terminei. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Por favor, preencha este formulário primeiro. (請先填這張表。) | O que eu escrevo neste campo? (這一欄要填什麼？) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t2 | Aqui escreva seu nome. (這裡請填姓名。) | Só meu nome? (只填姓名就可以嗎？) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t3 | Sim, o telefone vai embaixo. (對，電話在下面那一欄。) | Entendi. Vou escrever embaixo. (知道了，我會寫在下面。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t4 | Sim, assim é suficiente. (對，這樣就夠了。) | Obrigado. Terminei. (謝謝，我填好了。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |

---

## a2:pt:a2_invite_friend_activity - Convidar um Amigo para uma Atividade

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_invite_friend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma situação social simples com um amigo usando frases curtas de A2.
- Support text: Use linguagem natural com um amigo. Mantenha a atividade e o motivo simples.

### Clean Dialogue Path

- amigo: Você quer tomar um café mais tarde? (等一下要一起喝咖啡嗎？)
- 你: Você quer tomar um café mais tarde? (等一下要一起喝咖啡嗎？)
- amigo: Claro. Que horas? (好啊。幾點？)
- 你: Que tal às três? (三點怎麼樣？)
- amigo: A gente se encontra na frente da estação? (要在車站前面見嗎？)
- 你: Sim, vamos nos encontrar na frente da estação. (好，我們在車站前面見。)
- amigo: Ótimo. Até mais tarde. (好，等一下見。)
- 你: Ótimo. Até mais tarde. (很好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Você quer tomar um café mais tarde? (等一下要一起喝咖啡嗎？) | Você quer tomar um café mais tarde? (等一下要一起喝咖啡嗎？) | 1. Por favor, troque meu quarto mais tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Isso não combina com esta situação com um amigo.<br>2. Você tem que vir comigo hoje. (你今天一定要跟我來。) [too_pressuring] - feedback: Isso soa forte demais para falar com um amigo. | Respond naturally to the friend plan. |  |
| t2 | Claro. Que horas? (好啊。幾點？) | Que tal às três? (三點怎麼樣？) | 1. Por favor, troque meu quarto mais tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Isso não combina com esta situação com um amigo.<br>2. Você tem que vir comigo hoje. (你今天一定要跟我來。) [too_pressuring] - feedback: Isso soa forte demais para falar com um amigo. | Respond naturally to the friend plan. |  |
| t3 | A gente se encontra na frente da estação? (要在車站前面見嗎？) | Sim, vamos nos encontrar na frente da estação. (好，我們在車站前面見。) | 1. Por favor, troque meu quarto mais tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Isso não combina com esta situação com um amigo.<br>2. Você tem que vir comigo hoje. (你今天一定要跟我來。) [too_pressuring] - feedback: Isso soa forte demais para falar com um amigo. | Respond naturally to the friend plan. |  |
| t4 | Ótimo. Até mais tarde. (好，等一下見。) | Ótimo. Até mais tarde. (很好，等一下見。) | 1. Por favor, troque meu quarto mais tarde. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Isso não combina com esta situação com um amigo.<br>2. Você tem que vir comigo hoje. (你今天一定要跟我來。) [too_pressuring] - feedback: Isso soa forte demais para falar com um amigo. | Respond naturally to the friend plan. |  |

---

## a2:pt:a2_lost_item_followup_message - Perguntar sobre um Item Perdido

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma tarefa digital ou de formulário simples de baixo risco com frases curtas de A2.
- Support text: Mantenha a tarefa de baixo risco. Não dê senhas, dados de pagamento, ID sensível nem informações legais ou médicas.

### Clean Dialogue Path

- atendente: Que item você está procurando? (您在找什麼？)
- 你: Acho que deixei um guarda-chuva preto. (我好像把黑色雨傘忘在那裡。)
- atendente: Onde você deixou? (放在哪裡？)
- 你: Acho que ao lado de uma cadeira do café. (好像放在咖啡店椅子旁邊。)
- atendente: Por favor, deixe seu nome e contato. (請留下姓名和聯絡方式。)
- 你: Sim, vou deixar nome e telefone. (好，我會留下姓名和電話。)
- atendente: Vamos verificar e entrar em contato. (我確認後會聯絡您。)
- 你: Obrigado. Vou esperar a mensagem. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Que item você está procurando? (您在找什麼？) | Acho que deixei um guarda-chuva preto. (我好像把黑色雨傘忘在那裡。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t2 | Onde você deixou? (放在哪裡？) | Acho que ao lado de uma cadeira do café. (好像放在咖啡店椅子旁邊。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t3 | Por favor, deixe seu nome e contato. (請留下姓名和聯絡方式。) | Sim, vou deixar nome e telefone. (好，我會留下姓名和電話。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |
| t4 | Vamos verificar e entrar em contato. (我確認後會聯絡您。) | Obrigado. Vou esperar a mensagem. (謝謝，我等您聯絡。) | 1. Vou dizer minha senha. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Senha está fora desta tarefa A2.<br>2. Quero um reembolso. (請退款。) [wrong_dispute_domain] - feedback: Reembolsos ou disputas estão fora desta tarefa. | Confirme só o detalhe necessário e de baixo risco. |  |

---

## a2:pt:a2_luggage_storage_pickup - Guardar e Retirar Bagagem

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_luggage_storage_pickup
- Setting: No guarda-volumes da estação
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: Guarde uma mala, escute o prazo de retirada e confirme o comprovante necessário.

### Clean Dialogue Path

- Atendente: Você quer guardar bagagem? (您要寄放行李嗎？)
- Você: Quero guardar esta mala. (寄放行李)
- Atendente: Você pode retirar hoje antes das sete da noite. (今天晚上領取期限前可以來領。)
- Você: Eu retiro antes das sete, certo? (確認取件時間)
- Atendente: Para retirar, mostre este comprovante. (領取時請出示這張收據。)
- Você: Sim, mostro o comprovante para retirar. (確認文件)
- Atendente: Certo. Volte antes das sete, por favor. (好的，請 7 點前回來。)
- Você: Obrigado. Volto antes das sete. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Você quer guardar bagagem? (您要寄放行李嗎？) | Quero guardar esta mala. (寄放行李) | 1. Retirei esta mala ontem. (我昨天領了這個行李箱。) - feedback: Você está guardando agora, não retirando.<br>2. Onde fica a plataforma? (月台在哪裡？) - feedback: Esta situação é de guarda-volumes. | 寄放行李 |  |
| t2 | Você pode retirar hoje antes das sete da noite. (今天晚上領取期限前可以來領。) | Eu retiro antes das sete, certo? (確認取件時間) | 1. Posso guardar às sete da manhã, certo? (我早上 7 點寄放，對嗎？) - feedback: O prazo é antes das sete da noite.<br>2. Onde pego o reembolso? (退款在哪裡拿？) - feedback: Reembolsos ficam fora desta tarefa. | 確認取件時間 |  |
| t3 | Para retirar, mostre este comprovante. (領取時請出示這張收據。) | Sim, mostro o comprovante para retirar. (確認文件) | 1. Posso jogar fora o comprovante? (我可以把收據丟掉嗎？) - feedback: Você precisa do comprovante para retirar.<br>2. Vou mostrar meu passaporte. (我出示護照。) - feedback: Passaporte não é necessário aqui. | 確認寄物單 |  |
| t4 | Certo. Volte antes das sete, por favor. (好的，請 7 點前回來。) | Obrigado. Volto antes das sete. (禮貌收尾) | 1. O trem está quinze minutos atrasado. (火車晚 15 分鐘。) - feedback: Isso não é um aviso de atraso.<br>2. Quero avisar que perdi uma mala. (我想申報行李遺失。) - feedback: Achados e perdidos ficam fora desta tarefa. | 收尾 |  |

---

## a2:pt:a2_make_simple_plan_sequence - Fazer um Plano Simples em Dois Passos

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Resolver uma situação social simples com um amigo usando frases curtas de A2.
- Support text: Use linguagem natural com um amigo. Mantenha a atividade e o motivo simples.

### Clean Dialogue Path

- amigo: A gente se encontra primeiro na estação? (我們先在車站見，好嗎？)
- 你: Sim, primeiro vamos nos encontrar na estação. (好，我們先在車站見。)
- amigo: Depois vamos ao parque? (接著去公園嗎？)
- 你: Boa. Depois vamos caminhar até o parque. (好，接著走去公園。)
- amigo: Então, primeiro a estação e depois o parque? (所以先車站，接著公園，對嗎？)
- 你: Sim, primeiro a estação, depois o parque. (對，先車站，接著公園。)
- amigo: Ótimo. Até sábado às duas. (好，星期六兩點見。)
- 你: Tá bom, até sábado às duas. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | A gente se encontra primeiro na estação? (我們先在車站見，好嗎？) | Sim, primeiro vamos nos encontrar na estação. (好，我們先在車站見。) | 1. Sim, primeiro me devolva o dinheiro. (好，先退款給我。) [wrong_scenario_refund] - feedback: Isso não combina com esta situação com um amigo.<br>2. Não, de jeito nenhum. (不，絕對不要。) [too_blunt] - feedback: Isso soa forte demais para falar com um amigo. | Keep the plan to two simple steps. |  |
| t2 | Depois vamos ao parque? (接著去公園嗎？) | Boa. Depois vamos caminhar até o parque. (好，接著走去公園。) | 1. Sim, primeiro me devolva o dinheiro. (好，先退款給我。) [wrong_scenario_refund] - feedback: Isso não combina com esta situação com um amigo.<br>2. Não, de jeito nenhum. (不，絕對不要。) [too_blunt] - feedback: Isso soa forte demais para falar com um amigo. | Keep the plan to two simple steps. |  |
| t3 | Então, primeiro a estação e depois o parque? (所以先車站，接著公園，對嗎？) | Sim, primeiro a estação, depois o parque. (對，先車站，接著公園。) | 1. Sim, primeiro me devolva o dinheiro. (好，先退款給我。) [wrong_scenario_refund] - feedback: Isso não combina com esta situação com um amigo.<br>2. Não, de jeito nenhum. (不，絕對不要。) [too_blunt] - feedback: Isso soa forte demais para falar com um amigo. | Keep the plan to two simple steps. |  |
| t4 | Ótimo. Até sábado às duas. (好，星期六兩點見。) | Tá bom, até sábado às duas. (好，星期六兩點見。) | 1. Sim, primeiro me devolva o dinheiro. (好，先退款給我。) [wrong_scenario_refund] - feedback: Isso não combina com esta situação com um amigo.<br>2. Não, de jeito nenhum. (不，絕對不要。) [too_blunt] - feedback: Isso soa forte demais para falar com um amigo. | Keep the plan to two simple steps. |  |

---

## a2:pt:a2_plan_tomorrow_morning - Planejar Amanhã de Manhã

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Conversa com uma amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Uma amiga pergunta o que você pretende fazer amanhã de manhã.
- Learner goal: Dizer um plano para amanhã de manhã com um próximo passo simples.
- Support text: Sua amiga pergunta sobre amanhã de manhã. Diga primeiro o que você vai fazer, depois acrescente o próximo passo.

### Clean Dialogue Path

- amiga: O que você vai fazer amanhã de manhã? (你明天早上打算做什麼？)
- você: Vou passar no mercado. (我打算去市場一趟。)
- amiga: E depois disso? (那之後呢？)
- você: Depois vou estudar numa cafeteria. (之後我打算在咖啡店讀書。)
- amiga: Então você fica livre antes do almoço? (所以你午餐前有空嗎？)
- você: Sim, fico livre por volta das onze. (對，我十一點左右有空。)
- amiga: Beleza. Te mando mensagem às onze. (好。我十一點傳訊息給你。)
- você: Combinado, até amanhã. (說定了，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | O que você vai fazer amanhã de manhã? (你明天早上打算做什麼？) | Vou passar no mercado. (我打算去市場一趟。) | 1. Passei no mercado ontem. (我昨天去了市場。) [wrong_time_past] - feedback: 對方問的是明天早上，不是昨天。<br>2. Onde fica o mercado? (市場在哪裡？) [wrong_function_location_question] - feedback: 這是在問地點，沒有說出你的計畫。 | 對方在問明天早上的計畫。用 vou + 動詞回答。 |  |
| t2 | E depois disso? (那之後呢？) | Depois vou estudar numa cafeteria. (之後我打算在咖啡店讀書。) | 1. Vamos nos encontrar na cafeteria. (我們在咖啡店見吧。) [wrong_function_meeting_place] - feedback: 這是在提議見面地點。對方問的是你的下一個活動。<br>2. Estou estudando agora. (我現在正在讀書。) [wrong_time_now] - feedback: 這是在說現在。對方問的是明天接下來要做什麼。 | Depois disso 是問下一步。用 depois 加一個簡短活動。 | vou + verbo; depois...<br>用 vou + 動詞說計畫，用 depois 接下一步。<br>Vou passar no mercado. = 我打算去市場一趟。<br>Depois vou estudar. = 之後我會讀書。 |
| t3 | Então você fica livre antes do almoço? (所以你午餐前有空嗎？) | Sim, fico livre por volta das onze. (對，我十一點左右有空。) | 1. Não, fiquei livre ontem. (不，我昨天有空。) [wrong_time_past] - feedback: 問題是在問明天午餐前，不是昨天。<br>2. O mercado fecha às onze? (市場十一點關門嗎？) [wrong_focus_store_hours] - feedback: 對方問的是你什麼時候有空，不是市場營業時間。 | Antes do almoço 是上午晚一點。可以用 por volta de 加時間。 |  |
| t4 | Beleza. Te mando mensagem às onze. (好。我十一點傳訊息給你。) | Combinado, até amanhã. (說定了，明天見。) | 1. Vou pedir de novo. (我會再點一次。) [wrong_scenario_ordering] - feedback: 這像是在點餐或購物。這裡只是在確認明天的安排。<br>2. Quero trocar de quarto. (我想換房間。) [wrong_scenario_hotel] - feedback: 這是飯店情境。現在用短句道別就好。 | 計畫已經清楚了。用簡短友善的回答收尾。 |  |

---

## a2:pt:a2_report_room_problem - Informar um Problema no Quarto

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_report_room_problem
- Setting: recepção do hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Informe um problema simples no quarto e confirme o que a equipe vai fazer.

### Clean Dialogue Path

- Empleado del hotel: Olá. Como posso ajudar? (您好，我可以怎麼幫您？)
- Tú: No meu quarto não tem toalhas. Pode me ajudar? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Empleado del hotel: Sim, vou levar toalhas agora mesmo. (好的，我現在幫您送毛巾。)
- Tú: Você vai levar toalhas, certo? (您會幫我送毛巾，對嗎？)
- Empleado del hotel: Vai demorar uns dez minutos. (大約需要十分鐘。)
- Tú: Uns dez minutos, tudo bem. (大約十分鐘，好的。)
- Empleado del hotel: Vamos mandar para o seu quarto. (我們會送到您的房間。)
- Tú: Obrigado. Vou esperar no quarto. (謝謝，我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Olá. Como posso ajudar? (您好，我可以怎麼幫您？) | No meu quarto não tem toalhas. Pode me ajudar? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. Quero reservar um quarto. (我想訂房。) [wrong_detail_or_domain] - feedback: Agora você não está reservando; precisa explicar um problema no quarto.<br>2. Quero uma compensação. (我想要賠償。) [forbidden_or_wrong_domain] - feedback: Compensação fica fora desta tarefa A2. | Diga o problema do quarto em uma frase curta. |  |
| t2 | Sim, vou levar toalhas agora mesmo. (好的，我現在幫您送毛巾。) | Você vai levar toalhas, certo? (您會幫我送毛巾，對嗎？) | 1. Você vai trocar meu quarto, certo? (您會幫我換房，對嗎？) [wrong_detail_or_domain] - feedback: Aqui a equipe leva toalhas, não troca o quarto.<br>2. O trem está atrasado, certo? (火車晚點了，對嗎？) [forbidden_or_wrong_domain] - feedback: Este distrator muda para transporte. | Confirme a ação da equipe. |  |
| t3 | Vai demorar uns dez minutos. (大約需要十分鐘。) | Uns dez minutos, tudo bem. (大約十分鐘，好的。) | 1. Faço check-out em uma hora. (我一小時後退房。) [wrong_detail_or_domain] - feedback: Isso fala de check-out, não de espera.<br>2. Preciso ir ao hospital. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: Hospital está fora do contexto. | Confirme o tempo de espera. |  |
| t4 | Vamos mandar para o seu quarto. (我們會送到您的房間。) | Obrigado. Vou esperar no quarto. (謝謝，我在房間等。) | 1. Explique as regras de reembolso, por favor. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Reembolso é amplo demais aqui.<br>2. Dois cafés, por favor. (兩杯咖啡，謝謝。) [forbidden_or_wrong_domain] - feedback: Café é outro serviço. | Finalize esperando no lugar certo. |  |

---

## a2:pt:a2_request_room_change - Pedir Troca de Quarto

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_request_room_change
- Setting: recepção do hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Dê um motivo simples e pergunte se pode trocar de quarto.

### Clean Dialogue Path

- Empleado del hotel: Como posso ajudar? (我可以怎麼幫您？)
- Tú: Meu quarto é um pouco barulhento. Posso trocar de quarto? (我的房間有點吵，可以換房嗎？)
- Empleado del hotel: Verifiquei. Temos outro quarto disponível. (我查了一下，還有另一間房可以換。)
- Tú: Tem outro quarto disponível, certo? (有另一間房可以換，對嗎？)
- Empleado del hotel: Você pode mudar para o novo quarto em trinta minutos. (三十分鐘後可以搬到新房間。)
- Tú: Posso mudar em trinta minutos, certo? (我三十分鐘後可以搬，對嗎？)
- Empleado del hotel: Quando estiver pronto, eu dou o novo cartão. (房間準備好後，我會給您新的房卡。)
- Tú: Certo. Pego o novo cartão quando estiver pronto. (好的，準備好後我拿新的房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Como posso ajudar? (我可以怎麼幫您？) | Meu quarto é um pouco barulhento. Posso trocar de quarto? (我的房間有點吵，可以換房嗎？) | 1. Posso trocar a mesa do restaurante? (我可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: Mesa é outro contexto.<br>2. Vou fazer uma reclamação formal. (我要提出正式投訴。) [forbidden_or_wrong_domain] - feedback: Reclamação formal é forte demais para esta tarefa. | Dê um motivo simples e peça a troca de quarto. |  |
| t2 | Verifiquei. Temos outro quarto disponível. (我查了一下，還有另一間房可以換。) | Tem outro quarto disponível, certo? (有另一間房可以換，對嗎？) | 1. Tem outra passagem disponível, certo? (有另一張票可以換，對嗎？) [wrong_detail_or_domain] - feedback: Passagem é o domínio errado.<br>2. Também posso receber compensação? (我也可以拿到賠償嗎？) [forbidden_or_wrong_domain] - feedback: Compensação não foi oferecida. | Confirme se há quarto disponível. |  |
| t3 | Você pode mudar para o novo quarto em trinta minutos. (三十分鐘後可以搬到新房間。) | Posso mudar em trinta minutos, certo? (我三十分鐘後可以搬，對嗎？) | 1. Faço check-out em três horas, certo? (我三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: Isso muda para check-out.<br>2. Vou mudar porque preciso ir ao hospital. (我換房是因為要去醫院。) [forbidden_or_wrong_domain] - feedback: O motivo hospital não é necessário. | Confirme quando pode mudar. |  |
| t4 | Quando estiver pronto, eu dou o novo cartão. (房間準備好後，我會給您新的房卡。) | Certo. Pego o novo cartão quando estiver pronto. (好的，準備好後我拿新的房卡。) | 1. Não, vou mudar o horário do trem. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: Trem é outro domínio.<br>2. Vou falar com a polícia agora. (我現在要去找警察。) [forbidden_or_wrong_domain] - feedback: Polícia é grave demais aqui. | Finalize com o novo cartão. |  |

---

## a2:pt:a2_reschedule_meeting_time - Mudar o Horário de um Encontro

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Mudando planos com uma amiga
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Você precisa pedir para uma amiga mudar o horário de um encontro.
- Learner goal: Pedir para mudar o horário e confirmar o novo horário.
- Support text: O horário original ficou difícil para você. Peça para mudar, dê um novo horário e confirme.

### Clean Dialogue Path

- amiga: A gente vai se encontrar às três hoje, né? (我們今天三點見，對吧？)
- você: Desculpa, podemos mudar o horário? (不好意思，我們可以改時間嗎？)
- amiga: Claro. Que horas fica bom para você? (當然。你幾點方便？)
- você: Podemos mudar para as quatro? (我們可以改到四點嗎？)
- amiga: Sim, quatro está bom. (可以，四點沒問題。)
- você: Ótimo, até as quatro. (太好了，四點見。)
- amiga: Fechado. Até mais tarde. (說定了，晚點見。)
- você: Até mais tarde. (晚點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | A gente vai se encontrar às três hoje, né? (我們今天三點見，對吧？) | Desculpa, podemos mudar o horário? (不好意思，我們可以改時間嗎？) | 1. Sim, a gente se encontrou ontem. (對，我們昨天見過了。) [wrong_time_past] - feedback: 對方在確認今天的計畫，不是昨天。<br>2. Vou pagar no cartão. (我會刷卡付款。) [wrong_scenario_payment] - feedback: 這是付款用語。這裡要問見面時間。 | 對方在確認原本時間。請求改時間。 |  |
| t2 | Claro. Que horas fica bom para você? (當然。你幾點方便？) | Podemos mudar para as quatro? (我們可以改到四點嗎？) | 1. A gente usa a saída quatro? (我們走四號出口嗎？) [wrong_entity_exit_number] - feedback: 四號出口是地點細節。對方問的是新時間。<br>2. Eu fui às quatro. (我四點去了。) [wrong_time_past] - feedback: 這是在說過去。現在要請求改到四點。 | 給一個新的時間，保持簡短。 | mudar para + horário<br>用 mudar para 來說把時間改到某個時候。<br>mudar para as quatro = 改到四點<br>mudar para amanhã = 改到明天 |
| t3 | Sim, quatro está bom. (可以，四點沒問題。) | Ótimo, até as quatro. (太好了，四點見。) | 1. Ótimo, até as três. (太好了，三點見。) [repeats_old_time] - feedback: 三點是原本時間。你已經改到四點。<br>2. Pode me dar a chave do quarto? (可以給我房卡嗎？) [wrong_scenario_hotel] - feedback: 這是飯店用語。這裡要確認新的見面時間。 | 新時間已經被接受了。再確認一次。 |  |
| t4 | Fechado. Até mais tarde. (說定了，晚點見。) | Até mais tarde. (晚點見。) | 1. Porque eu estou atrasado. (因為我遲到了。) [fragment_without_need] - feedback: 時間已經改好了。這裡不需要再補原因片段。<br>2. Reservei de novo. (我重新預約了。) [wrong_scenario_reservation] - feedback: 這像是預約系統，不是朋友之間改時間。 | 計畫完成了。自然收尾。 |  |

---

## a2:pt:a2_transport_delay_announcement - Entender um Aviso de Atraso

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_transport_delay_announcement
- Setting: Na plataforma do trem
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: Ouça o aviso na estação, confirme o atraso e escolha uma resposta simples.

### Clean Dialogue Path

- Atendente: Atenção, por favor. O trem para Central está atrasado quinze minutos. (請注意，開往 Central 的列車晚 15 分鐘。)
- Você: O trem está atrasado quinze minutos, certo? (確認延誤時間)
- Atendente: Se forem quinze minutos, você prefere esperar ou pegar o ônibus? (如果是 15 分鐘，您要等，還是搭公車？)
- Você: Se forem quinze minutos, eu espero. (選擇等待)
- Atendente: O próximo trem chega por volta das dez e vinte. (下一班車大約 10 點 20 分到。)
- Você: Então vou pegar o trem das dez e vinte. (確認搭下一班)
- Atendente: Certo. Por favor, espere nesta plataforma. (好的，請在這個月台等。)
- Você: Tudo bem, vou esperar aqui. (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Atenção, por favor. O trem para Central está atrasado quinze minutos. (請注意，開往 Central 的列車晚 15 分鐘。) | O trem está atrasado quinze minutos, certo? (確認延誤時間) | 1. O trem sai em cinco minutos, certo? (錯誤時間) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2.<br>2. Posso trocar de assento? (我可以換座位嗎？) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2. | 聽懂延誤時間 |  |
| t2 | Se forem quinze minutos, você prefere esperar ou pegar o ônibus? (如果是 15 分鐘，您要等，還是搭公車？) | Se forem quinze minutos, eu espero. (選擇等待) | 1. Eu esperei ontem. (我昨天等了。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2.<br>2. Pode me dar um recibo, por favor? (請給我收據。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2. | 做出簡單選擇 |  |
| t3 | O próximo trem chega por volta das dez e vinte. (下一班車大約 10 點 20 分到。) | Então vou pegar o trem das dez e vinte. (確認搭下一班) | 1. A loja fecha às dez e vinte? (店 10 點 20 分關門嗎？) - feedback: Esse horário é do trem, não de uma loja.<br>2. Quero reembolso da passagem de ônibus. (我想退公車票。) - feedback: Reembolsos ficam fora desta tarefa A2. | 確認下一班時間 |  |
| t4 | Certo. Por favor, espere nesta plataforma. (好的，請在這個月台等。) | Tudo bem, vou esperar aqui. (確認等待) | 1. Por favor, troque meu quarto. (請幫我換房間。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2.<br>2. Quero marcar uma consulta no hospital. (我想預約醫院。) - feedback: Os distratores testam horário errado, contexto errado ou uma escalada fora do escopo A2. | 禮貌收尾 |  |

---

## a2:pt:a2_understand_hotel_notice - Entender um Aviso do Hotel

- Level: A2
- Language: Portuguese (pt)
- Scenario ID: a2_understand_hotel_notice
- Setting: saguão do hotel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Entenda um aviso curto do hotel e confirme horário, lugar e regra.

### Clean Dialogue Path

- Empleado del hotel: Por favor, veja o aviso. O café da manhã é das sete às nove da manhã. (請看這張通知。早餐時間是早上七點到九點。)
- Tú: O café da manhã é das sete às nove da manhã, certo? (早餐是早上七點到九點，對嗎？)
- Empleado del hotel: É no restaurante do segundo andar. (地點在二樓餐廳。)
- Tú: Vou ao restaurante do segundo andar, certo? (我要去二樓餐廳，對嗎？)
- Empleado del hotel: Na entrada, diga apenas o número do quarto. (入口只要說房號就可以。)
- Tú: Na entrada, digo apenas o número do quarto, certo? (我在入口只要說房號，對嗎？)
- Empleado del hotel: Sim, venha amanhã de manhã. (對，請明天早上過來。)
- Tú: Certo. Amanhã de manhã vou ao restaurante do segundo andar. (好的，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Por favor, veja o aviso. O café da manhã é das sete às nove da manhã. (請看這張通知。早餐時間是早上七點到九點。) | O café da manhã é das sete às nove da manhã, certo? (早餐是早上七點到九點，對嗎？) | 1. O café da manhã é das sete às nove da noite, certo? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: Noite é o período errado.<br>2. O check-out é às nove da manhã, certo? (退房時間是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: Check-out é outra informação. | Confirme o horário. |  |
| t2 | É no restaurante do segundo andar. (地點在二樓餐廳。) | Vou ao restaurante do segundo andar, certo? (我要去二樓餐廳，對嗎？) | 1. Vou a um quarto no terceiro andar, certo? (我要去三樓的房間，對嗎？) [wrong_detail_or_domain] - feedback: Terceiro andar está errado.<br>2. Mostro meu passaporte, certo? (我要出示護照，對嗎？) [forbidden_or_wrong_domain] - feedback: Passaporte não foi pedido. | Confirme o lugar. |  |
| t3 | Na entrada, diga apenas o número do quarto. (入口只要說房號就可以。) | Na entrada, digo apenas o número do quarto, certo? (我在入口只要說房號，對嗎？) | 1. Na entrada, falo com a polícia, certo? (我在入口找警察說話，對嗎？) [wrong_detail_or_domain] - feedback: Polícia está fora do contexto.<br>2. Na entrada, recebo um reembolso, certo? (我在入口拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Reembolso não foi mencionado. | Confirme a regra simples. |  |
| t4 | Sim, venha amanhã de manhã. (對，請明天早上過來。) | Certo. Amanhã de manhã vou ao restaurante do segundo andar. (好的，我明天早上去二樓餐廳。) | 1. Certo. Hoje à noite pego a roupa lavada. (好的，我今天晚上拿洗好的衣服。) [wrong_detail_or_domain] - feedback: Lavanderia é outro serviço.<br>2. Certo. Escrevo um relatório de acidente. (好的，我寫事故報告。) [forbidden_or_wrong_domain] - feedback: Relatório de acidente é fora do domínio. | Resuma horário e lugar. |  |

---
