# A2 French Dialogue Review Text

Generated from `a1-friend-reigns-pilot/scenario_manifest.v1.json`.
Scenario count: 24

This export is for language/content review. It intentionally removes the interactive UI and shows the clean successful path plus distractors and feedback.

## a2:fr:a2_app_booking_confirmation - Confirmer une Réservation dans l’App

- Level: A2
- Language: French (fr)
- Scenario ID: a2_app_booking_confirmation
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une tâche numérique ou un formulaire simple à faible risque avec des phrases courtes de niveau A2.
- Support text: Garde la tâche à faible risque. Ne donne pas de mot de passe, paiement, ID sensible, information juridique ou médicale.

### Clean Dialogue Path

- personnel: La réservation est confirmée pour aujourd’hui à trois heures. (預約確認為今天下午三點。)
- 你: C’est où ? (地點在哪裡？)
- personnel: C’est au deuxième étage du café. (在咖啡店二樓。)
- 你: Donc, au deuxième étage du café ? (是在咖啡店二樓，對嗎？)
- personnel: Oui, la réservation est au nom de Mina. (對，預約姓名是 Mina。)
- 你: Oui, c’est mon nom. (對，是我的名字。)
- personnel: Alors, à trois heures. (那下午三點見。)
- 你: D’accord, je viens à trois heures. (好，我下午三點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | La réservation est confirmée pour aujourd’hui à trois heures. (預約確認為今天下午三點。) | C’est où ? (地點在哪裡？) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t2 | C’est au deuxième étage du café. (在咖啡店二樓。) | Donc, au deuxième étage du café ? (是在咖啡店二樓，對嗎？) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t3 | Oui, la réservation est au nom de Mina. (對，預約姓名是 Mina。) | Oui, c’est mon nom. (對，是我的名字。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t4 | Alors, à trois heures. (那下午三點見。) | D’accord, je viens à trois heures. (好，我下午三點會去。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |

---

## a2:fr:a2_ask_ingredient_preference - Demander un Ingrédient

- Level: A2
- Language: French (fr)
- Scenario ID: a2_ask_ingredient_preference
- Setting: comptoir du restaurant
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Demandez s’il y a un ingrédient courant et choisissez selon votre préférence.
- Support text: Demandez s’il y a un ingrédient courant et choisissez selon votre préférence.

### Clean Dialogue Path

- employé: Vous voulez commander quoi ? (您想點什麼？)
- 你: Cette salade contient de l’oignon ? (這個沙拉裡有洋蔥嗎？)
- employé: Oui, il y a un peu d’oignon. (有，放一點洋蔥。)
- 你: Il y a un peu d’oignon, c’est ça ? (有一點洋蔥，對嗎？)
- employé: Si vous voulez, on peut la préparer sans oignon. (如果您想要，可以不加洋蔥。)
- 你: Oui, sans oignon, s’il vous plaît. (好的，請不要加洋蔥。)
- employé: Bien sûr. Je la prépare sans oignon. (可以，我會準備不加洋蔥的。)
- 你: Merci. Préparez-la comme ça, s’il vous plaît. (謝謝，請這樣做。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vous voulez commander quoi ? (您想點什麼？) | Cette salade contient de l’oignon ? (這個沙拉裡有洋蔥嗎？) | 1. Cette salade est à quel étage ? (這個沙拉在幾樓？) [wrong_detail_or_domain] - feedback: Un étage n’a pas de rapport avec les ingrédients.<br>2. Veuillez changer l’heure de mon billet. (請幫我改票的時間。) [forbidden_or_wrong_domain] - feedback: Cela passe à une situation de billet. | Demandez s’il y a un ingrédient courant. |  |
| t2 | Oui, il y a un peu d’oignon. (有，放一點洋蔥。) | Il y a un peu d’oignon, c’est ça ? (有一點洋蔥，對嗎？) | 1. Il y a beaucoup de viande, c’est ça ? (有很多肉，對嗎？) [wrong_detail_or_domain] - feedback: La viande n’a pas été mentionnée.<br>2. La chambre est bruyante, c’est ça ? (房間很吵，對嗎？) [forbidden_or_wrong_domain] - feedback: Cela passe à un problème d’hôtel. | Confirmez l’information sur l’ingrédient. |  |
| t3 | Si vous voulez, on peut la préparer sans oignon. (如果您想要，可以不加洋蔥。) | Oui, sans oignon, s’il vous plaît. (好的，請不要加洋蔥。) | 1. Oui, donnez-moi un médicament contre l’allergie. (好的，請給我過敏藥。) [wrong_detail_or_domain] - feedback: Médicament/allergie sort de cette tâche.<br>2. Oui, remboursez-moi, s’il vous plaît. (好的，請退款。) [forbidden_or_wrong_domain] - feedback: Ce n’est pas une demande de remboursement. | Choisissez comme préférence seulement. |  |
| t4 | Bien sûr. Je la prépare sans oignon. (可以，我會準備不加洋蔥的。) | Merci. Préparez-la comme ça, s’il vous plaît. (謝謝，請這樣做。) | 1. Dites-moi mon numéro de passeport, s’il vous plaît. (請告訴我護照號碼。) [wrong_detail_or_domain] - feedback: Les données de passeport ne sont pas nécessaires.<br>2. Je veux déposer mes bagages. (我想寄放行李。) [forbidden_or_wrong_domain] - feedback: Cela passe au dépôt de bagages. | Terminez en confirmant la commande. |  |

---

## a2:fr:a2_ask_late_checkout - Demander un Départ Tardif

- Level: A2
- Language: French (fr)
- Scenario ID: a2_ask_late_checkout
- Setting: À la réception de l’hôtel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_ask_late_checkout.
- Learner goal: Ask if late checkout is possible and confirm the allowed time.
- Support text: Demandez si vous pouvez partir un peu plus tard et confirmez l’heure finale.

### Clean Dialogue Path

- Agent de l’hôtel: Comment puis-je vous aider ? (我可以怎麼幫您？)
- Vous: Je peux faire le check-out un peu plus tard ? (我可以晚一點退房嗎？)
- Agent de l’hôtel: Aujourd’hui, vous pouvez faire le check-out jusqu’à treize heures. (今天可以到十三點退房。)
- Vous: Jusqu’à treize heures, c’est possible, c’est ça ? (到十三點可以，對嗎？)
- Agent de l’hôtel: Veuillez montrer votre carte de chambre à la réception avant midi. (請在中午前把房卡拿到櫃台。)
- Vous: Je montre ma carte avant midi, c’est ça ? (中午前拿房卡給您看，對嗎？)
- Agent de l’hôtel: D’accord, je note un check-out à treize heures. (好的，我幫您確認十三點退房。)
- Vous: Merci. Je fais le check-out à treize heures. (謝謝。我十三點退房。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Comment puis-je vous aider ? (我可以怎麼幫您？) | Je peux faire le check-out un peu plus tard ? (我可以晚一點退房嗎？) | 1. Je peux faire le check-in un peu plus tard ? (我可以晚一點入住嗎？) [wrong_detail_or_domain] - feedback: Il s’agit du check-out, pas du check-in.<br>2. Vous pouvez baisser le prix ? (可以幫我降價嗎？) [forbidden_or_wrong_domain] - feedback: La négociation du prix est hors du périmètre A2. | Pregunte por salir más tarde. |  |
| t2 | Aujourd’hui, vous pouvez faire le check-out jusqu’à treize heures. (今天可以到十三點退房。) | Jusqu’à treize heures, c’est possible, c’est ça ? (到十三點可以，對嗎？) | 1. Jusqu’à dix heures, c’est possible, c’est ça ? (到十點可以，對嗎？) [wrong_detail_or_domain] - feedback: L’agent a dit treize heures.<br>2. Je vais réserver une autre chambre. (我要重新訂房。) [forbidden_or_wrong_domain] - feedback: C’est une confirmation d’heure de départ, pas une nouvelle réservation. | Escuche la hora permitida. | Formule A2<br>Expression courte utile dans cette situation d’hôtel.<br>hasta la una = 到一點 |
| t3 | Veuillez montrer votre carte de chambre à la réception avant midi. (請在中午前把房卡拿到櫃台。) | Je montre ma carte avant midi, c’est ça ? (中午前拿房卡給您看，對嗎？) | 1. Je vous donne mon numéro de passeport, c’est ça ? (告訴您護照號碼，對嗎？) [wrong_detail_or_domain] - feedback: Les données de passeport ne sont pas nécessaires ici.<br>2. Je récupère mes bagages à dix-neuf heures, c’est ça ? (十九點領行李，對嗎？) [forbidden_or_wrong_domain] - feedback: C’est le check-out, pas la récupération des bagages. | Confirme la condición sencilla. |  |
| t4 | D’accord, je note un check-out à treize heures. (好的，我幫您確認十三點退房。) | Merci. Je fais le check-out à treize heures. (謝謝。我十三點退房。) | 1. Je vais demander un remboursement. (我要申請退款。) [wrong_detail_or_domain] - feedback: Les remboursements sont hors de cette situation.<br>2. Demain matin, je prends le train. (我明天早上搭火車。) [forbidden_or_wrong_domain] - feedback: On confirme le check-out, pas le transport. | Confirme la hora final. |  |

---

## a2:fr:a2_ask_recommendation_budget - Demander une Recommandation avec un Budget

- Level: A2
- Language: French (fr)
- Scenario ID: a2_ask_recommendation_budget
- Setting: petit magasin
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Demandez une recommandation simple dans un petit budget.
- Support text: Demandez une recommandation simple dans un petit budget.

### Clean Dialogue Path

- employé: Vous cherchez quoi ? (您在找什麼？)
- 你: Vous pouvez me recommander un cadeau à moins de dix euros ? (可以推薦十歐元以內的禮物嗎？)
- employé: Vous préférez quelque chose de léger ou de pratique ? (您想要輕巧的，還是實用的？)
- 你: Quelque chose de pratique, s’il vous plaît. (請推薦實用的。)
- employé: Alors ce petit carnet est à moins de dix euros. (那這本小筆記本在十歐元以內。)
- 你: Ce carnet est à moins de dix euros, c’est ça ? (那本筆記本在十歐元以內，對嗎？)
- employé: Oui, et l’emballage cadeau est possible. (對，也可以包裝成禮物。)
- 你: Parfait. Je prends ce carnet. (很好，我要那本筆記本。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vous cherchez quoi ? (您在找什麼？) | Vous pouvez me recommander un cadeau à moins de dix euros ? (可以推薦十歐元以內的禮物嗎？) | 1. Vérifiez mon compte bancaire, s’il vous plaît. (請查看我的銀行帳戶。) [wrong_detail_or_domain] - feedback: Ce n’est pas une tâche bancaire.<br>2. Je veux déclarer un objet perdu. (我想申報遺失物。) [forbidden_or_wrong_domain] - feedback: La déclaration d’objet perdu est une autre tâche. | Demandez une recommandation dans un petit budget. |  |
| t2 | Vous préférez quelque chose de léger ou de pratique ? (您想要輕巧的，還是實用的？) | Quelque chose de pratique, s’il vous plaît. (請推薦實用的。) | 1. Quelque chose d’épicé, s’il vous plaît. (請推薦辣的。) [wrong_detail_or_domain] - feedback: Épicé correspond plutôt à un menu.<br>2. Je veux un départ tardif de l’hôtel. (我想晚點退房。) [forbidden_or_wrong_domain] - feedback: Cela passe à l’hôtel. | Donnez une préférence simple. |  |
| t3 | Alors ce petit carnet est à moins de dix euros. (那這本小筆記本在十歐元以內。) | Ce carnet est à moins de dix euros, c’est ça ? (那本筆記本在十歐元以內，對嗎？) | 1. Cette chambre est à moins de dix euros, c’est ça ? (那個房間在十歐元以內，對嗎？) [wrong_detail_or_domain] - feedback: Une chambre n’est pas l’article recommandé.<br>2. Ce billet était pour hier, c’est ça ? (那張票是昨天的，對嗎？) [forbidden_or_wrong_domain] - feedback: Cela passe aux billets. | Confirmez la recommandation et le budget. |  |
| t4 | Oui, et l’emballage cadeau est possible. (對，也可以包裝成禮物。) | Parfait. Je prends ce carnet. (很好，我要那本筆記本。) | 1. Je veux un remboursement. (請退款。) [wrong_detail_or_domain] - feedback: Ce n’est pas une demande de remboursement.<br>2. Vérifiez mon assurance, s’il vous plaît. (請查看我的保險。) [forbidden_or_wrong_domain] - feedback: L’assurance sort de cette tâche à faible risque. | Acceptez poliment la recommandation. |  |

---

## a2:fr:a2_ask_transfer_platform - Demander le Quai de Correspondance

- Level: A2
- Language: French (fr)
- Scenario ID: a2_ask_transfer_platform
- Setting: Au point information
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_ask_transfer_platform.
- Learner goal: Ask where to transfer and confirm a short two-step direction.
- Support text: Demandez où faire la correspondance, écoutez la station et le quai, puis confirmez.

### Clean Dialogue Path

- Agent: Vous allez où ? (您要去哪裡？)
- Vous: Je vais à l’aéroport. Où est-ce que je change ? (詢問轉乘)
- Agent: Descendez à Central, puis allez au quai trois. (請在 Central 下車，然後到 3 號月台。)
- Vous: Je descends à Central et je vais au quai trois, c’est ça ? (確認路線)
- Agent: Au quai trois, prenez le train pour l’aéroport. (在 3 號月台搭往機場的車。)
- Vous: Au quai trois, je prends le train pour l’aéroport, c’est bien ça ? (確認月台與方向)
- Agent: Oui, changez à Central. (對，請在 Central 轉乘。)
- Vous: Merci. Je change à Central. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vous allez où ? (您要去哪裡？) | Je vais à l’aéroport. Où est-ce que je change ? (詢問轉乘) | 1. Je suis allé à l’aéroport hier. (我昨天去了機場。) - feedback: Demandez la correspondance pour maintenant, pas pour hier.<br>2. Je voudrais déposer un bagage. (我想寄放行李。) - feedback: C’est une consigne à bagages, pas une correspondance. | 詢問轉乘 |  |
| t2 | Descendez à Central, puis allez au quai trois. (請在 Central 下車，然後到 3 號月台。) | Je descends à Central et je vais au quai trois, c’est ça ? (確認路線) | 1. Je prends un café à Central, c’est ça ? (我在 Central 喝咖啡，對嗎？) - feedback: La consigne est d’aller au quai trois.<br>2. La chambre trois, c’est ça ? (3 號房，對嗎？) - feedback: C’est un quai, pas une chambre. | 確認兩步指示 |  |
| t3 | Au quai trois, prenez le train pour l’aéroport. (在 3 號月台搭往機場的車。) | Au quai trois, je prends le train pour l’aéroport, c’est bien ça ? (確認月台與方向) | 1. Le train pour l’aéroport est arrivé hier. (往機場的車昨天到了。) - feedback: Confirmez le train dont vous avez besoin maintenant.<br>2. Où dois-je aller en cas d’urgence ? (緊急時我要去哪裡？) - feedback: Les consignes d’urgence sont hors du périmètre. | 確認方向 |  |
| t4 | Oui, changez à Central. (對，請在 Central 轉乘。) | Merci. Je change à Central. (禮貌收尾) | 1. Je voudrais changer l’heure de mon billet. (我想更改票的時間。) - feedback: Ce n’est pas un changement de billet.<br>2. Je vais voir la police à l’aéroport. (我要去機場找警察。) - feedback: Les démarches de police sont hors du périmètre. | 收尾 |  |

---

## a2:fr:a2_change_delivery_pickup_time - Changer l’Heure de Retrait

- Level: A2
- Language: French (fr)
- Scenario ID: a2_change_delivery_pickup_time
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une tâche numérique ou un formulaire simple à faible risque avec des phrases courtes de niveau A2.
- Support text: Garde la tâche à faible risque. Ne donne pas de mot de passe, paiement, ID sensible, information juridique ou médicale.

### Clean Dialogue Path

- personnel: Le retrait est prévu aujourd’hui à quatre heures. (今天四點取貨。)
- 你: Je peux changer l’heure de retrait ? (可以改取貨時間嗎？)
- personnel: Oui, cinq heures est possible. (可以，五點可以。)
- 你: Alors cinq heures, s’il vous plaît. (那請改成五點。)
- personnel: On change pour cinq heures ? (改成五點嗎？)
- 你: Oui, cinq heures me va. (對，五點可以。)
- personnel: D’accord, je change pour cinq heures. (好的，我會改成五點。)
- 你: Merci. Je viens à cinq heures. (謝謝，我五點會去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Le retrait est prévu aujourd’hui à quatre heures. (今天四點取貨。) | Je peux changer l’heure de retrait ? (可以改取貨時間嗎？) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t2 | Oui, cinq heures est possible. (可以，五點可以。) | Alors cinq heures, s’il vous plaît. (那請改成五點。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t3 | On change pour cinq heures ? (改成五點嗎？) | Oui, cinq heures me va. (對，五點可以。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t4 | D’accord, je change pour cinq heures. (好的，我會改成五點。) | Merci. Je viens à cinq heures. (謝謝，我五點會去。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |

---

## a2:fr:a2_change_ticket_time - Changer l’Heure d’un Billet

- Level: A2
- Language: French (fr)
- Scenario ID: a2_change_ticket_time
- Setting: Au guichet de la gare
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_change_ticket_time.
- Learner goal: Ask to change a ticket time and confirm the new time.
- Support text: Demandez à changer l’heure d’un billet, écoutez l’horaire disponible, puis confirmez.

### Clean Dialogue Path

- Agent: Bonjour. Comment puis-je vous aider ? (您好，我可以怎麼幫您？)
- Vous: Je voudrais changer l’heure de mon billet. (提出請求)
- Agent: Vous pouvez le changer pour le train de quinze heures. (可以改成下午 3 點的車。)
- Vous: Oui, pour quinze heures, s’il vous plaît. (接受新時間)
- Agent: Donc, quinze heures, c’est correct ? (那就改成 15 點，對嗎？)
- Vous: Oui, quinze heures, c’est bon. (確認時間)
- Agent: C’est changé. Prenez le train de quinze heures, s’il vous plaît. (已經改好了，請搭 15 點那班車。)
- Vous: Merci. Je prends le train de quinze heures. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Comment puis-je vous aider ? (您好，我可以怎麼幫您？) | Je voudrais changer l’heure de mon billet. (提出請求) | 1. Le billet était pour hier. (票是昨天的。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2.<br>2. Un café, s’il vous plaît. (請給我一杯咖啡。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2. | 提出改時間 |  |
| t2 | Vous pouvez le changer pour le train de quinze heures. (可以改成下午 3 點的車。) | Oui, pour quinze heures, s’il vous plaît. (接受新時間) | 1. Il y a une chambre à quinze heures ? (15 點有房間嗎？) - feedback: Il s’agit d’un billet, pas d’une chambre.<br>2. J’ai voyagé à quinze heures hier. (我昨天 15 點搭了。) - feedback: L’horaire proposé concerne le changement d’aujourd’hui. | 接受可用時間 |  |
| t3 | Donc, quinze heures, c’est correct ? (那就改成 15 點，對嗎？) | Oui, quinze heures, c’est bon. (確認時間) | 1. Non, quinze heures, c’était hier. (不，15 點是昨天。) - feedback: Ici, il faut confirmer la nouvelle heure.<br>2. Expliquez-moi les règles de remboursement, s’il vous plaît. (請說明退款規則。) - feedback: Les règles de remboursement sont hors du périmètre A2. | 確認時間 |  |
| t4 | C’est changé. Prenez le train de quinze heures, s’il vous plaît. (已經改好了，請搭 15 點那班車。) | Merci. Je prends le train de quinze heures. (禮貌收尾) | 1. Demain, je vais boire un café. (我明天要喝咖啡。) - feedback: Cela ne clôt pas le changement de billet.<br>2. Quel est mon numéro de passeport ? (我的護照號碼是什麼？) - feedback: Les données d’identité ne sont pas nécessaires ici. | 收尾 |  |

---

## a2:fr:a2_compare_two_menu_options - Comparer Deux Options du Menu

- Level: A2
- Language: French (fr)
- Scenario ID: a2_compare_two_menu_options
- Setting: comptoir du restaurant
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Comparez deux options simples du menu et choisissez celle que vous préférez.
- Support text: Comparez deux options simples du menu et choisissez celle que vous préférez.

### Clean Dialogue Path

- employé: Aujourd’hui, vous pouvez choisir le bol de riz ou la soupe de nouilles. (今天可以選飯碗或湯麵。)
- 你: Quelle est la différence entre les deux options ? (兩個選項有什麼不同？)
- employé: Le bol de riz est un peu épicé, et la soupe de nouilles est plus légère. (飯碗有點辣，湯麵比較清爽。)
- 你: La soupe de nouilles est plus légère, c’est ça ? (湯麵比較清爽，對嗎？)
- employé: Oui, la soupe de nouilles est moins épicée. (對，湯麵比較不辣。)
- 你: Alors je prends la soupe de nouilles. (那我要湯麵。)
- employé: Très bien. Je vous note une soupe de nouilles. (好的，我幫您點一份湯麵。)
- 你: Merci. Une soupe de nouilles, s’il vous plaît. (謝謝，請給我一份湯麵。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Aujourd’hui, vous pouvez choisir le bol de riz ou la soupe de nouilles. (今天可以選飯碗或湯麵。) | Quelle est la différence entre les deux options ? (兩個選項有什麼不同？) | 1. Où est ma table ? (我的桌子在哪裡？) [wrong_detail_or_domain] - feedback: Cette question concerne la table, pas le menu.<br>2. Je veux un remboursement. (我想退款。) [forbidden_or_wrong_domain] - feedback: Un remboursement sort de cette tâche A2. | Demandez la différence entre les deux options. |  |
| t2 | Le bol de riz est un peu épicé, et la soupe de nouilles est plus légère. (飯碗有點辣，湯麵比較清爽。) | La soupe de nouilles est plus légère, c’est ça ? (湯麵比較清爽，對嗎？) | 1. Le bol de riz est moins cher, c’est ça ? (飯碗比較便宜，對嗎？) [wrong_detail_or_domain] - feedback: Le prix n’a pas été mentionné.<br>2. Le train est plus rapide, c’est ça ? (火車比較快，對嗎？) [forbidden_or_wrong_domain] - feedback: Cela passe au transport. | Confirmez la comparaison entendue. |  |
| t3 | Oui, la soupe de nouilles est moins épicée. (對，湯麵比較不辣。) | Alors je prends la soupe de nouilles. (那我要湯麵。) | 1. Alors je change de chambre. (那我要換房間。) [wrong_detail_or_domain] - feedback: Cela passe à une situation d’hôtel.<br>2. Alors je montre mon passeport. (那我要出示護照。) [forbidden_or_wrong_domain] - feedback: Le passeport n’est pas nécessaire ici. | Choisissez l’option selon votre préférence. |  |
| t4 | Très bien. Je vous note une soupe de nouilles. (好的，我幫您點一份湯麵。) | Merci. Une soupe de nouilles, s’il vous plaît. (謝謝，請給我一份湯麵。) | 1. Je vais appeler la police. (我要報警。) [wrong_detail_or_domain] - feedback: C’est trop grave pour cette situation.<br>2. Je dois aller à l’hôpital demain. (我明天需要去醫院。) [forbidden_or_wrong_domain] - feedback: Ce n’est pas une situation médicale. | Confirmez poliment le plat choisi. |  |

---

## a2:fr:a2_confirm_date_time_place - Confirmer la date, l'heure et le lieu

- Level: A2
- Language: French (fr)
- Scenario ID: a2_confirm_date_time_place
- Setting: Message court d'une amie
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Une amie te demande de confirmer les details d'un court message.
- Learner goal: Confirmer la date, l'heure et le lieu a partir d'un message court.
- Support text: Lis le court message de ton amie. Confirme la date, l'heure, puis le lieu sans ajouter d'itineraire.

### Clean Dialogue Path

- amie: Tu as vu mon message ? Samedi, 10 h, devant le cinéma Lumière. (你看到我的訊息了嗎？星期六，10點，在 Lumière 電影院前。)
- toi: Oui, c'est samedi à dix heures. (有，是星期六十點。)
- amie: Et on se retrouve où ? (那我們在哪裡見？)
- toi: Devant le cinéma Lumière. (在 Lumière 電影院前。)
- amie: C'est bien ça ? (是這樣嗎？)
- toi: Oui, samedi à dix heures, devant le cinéma. (對，星期六十點，在電影院前。)
- amie: Parfait, à samedi. (太好了，星期六見。)
- toi: À samedi ! (星期六見！)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tu as vu mon message ? Samedi, 10 h, devant le cinéma Lumière. (你看到我的訊息了嗎？星期六，10點，在 Lumière 電影院前。) | Oui, c'est samedi à dix heures. (有，是星期六十點。) | 1. Oui, c'est dimanche à dix heures. (有，是星期日十點。) [wrong_date] - feedback: Le message dit samedi, pas dimanche.<br>2. Oui, c'est samedi à huit heures. (有，是星期六八點。) [wrong_time] - feedback: Le message dit dix heures, pas huit heures. | Repere la date et l'heure dans le message. |  |
| t2 | Et on se retrouve où ? (那我們在哪裡見？) | Devant le cinéma Lumière. (在 Lumière 電影院前。) | 1. Dans le train. (在火車上。) [wrong_place_relation] - feedback: Le message donne un lieu de rendez-vous, pas un moyen de transport.<br>2. À la banque Lumière. (在 Lumière 銀行。) [wrong_place_type] - feedback: Le message dit cinema Lumiere, pas banque. | Confirme le lieu exact du message. | devant + lieu<br>Pour dire le point de rendez-vous, utilise devant + le lieu: devant le cinéma.<br>Devant le cinéma. = 在電影院前。<br>On se retrouve devant le cinéma. = 我們在電影院前見。 |
| t3 | C'est bien ça ? (是這樣嗎？) | Oui, samedi à dix heures, devant le cinéma. (對，星期六十點，在電影院前。) | 1. Oui, samedi à dix heures, dans le cinéma. (對，星期六十點，在電影院裡。) [wrong_place_relation] - feedback: Le message dit devant le cinéma, pas dans le cinéma.<br>2. Oui, je vais être en retard. (對，我會遲到。) [wrong_scenario_delay] - feedback: Cette phrase parle d'un retard. Ici, il faut confirmer les details. | Repete les trois informations: date, heure, lieu. |  |
| t4 | Parfait, à samedi. (太好了，星期六見。) | À samedi ! (星期六見！) | 1. À demain matin à la banque ! (明天早上銀行見！) [wrong_scenario_plan] - feedback: Cette phrase reprend un autre scenario. Le message dit samedi au cinema.<br>2. Je peux changer l'heure ? (可以改時間嗎？) [wrong_function_reschedule] - feedback: Cette phrase demande un changement. Ici, les details sont deja confirmes. | Ferme naturellement avec une courte reponse. |  |

---

## a2:fr:a2_decline_with_reason - Refuser avec une Raison Simple

- Level: A2
- Language: French (fr)
- Scenario ID: a2_decline_with_reason
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une situation sociale simple avec un ami en phrases courtes de niveau A2.
- Support text: Utilise un langage naturel avec un ami. Garde l’activité et la raison simples.

### Clean Dialogue Path

- ami: Tu veux voir un film ce soir ? (今晚要看電影嗎？)
- 你: Désolé, ce soir je ne peux pas. (不好意思，我今晚不行。)
- ami: Pas de souci. Tu es occupé ? (沒關係。你很忙嗎？)
- 你: J’ai encore un peu de travail. (我還有一點事要做。)
- ami: Peut-être un autre jour ? (也許改天？)
- 你: Oui, peut-être ce week-end. (好，也許這個週末。)
- ami: D’accord. On en parle ce week-end. (好，那週末再說。)
- 你: Merci. On se voit ce week-end. (謝謝，週末見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tu veux voir un film ce soir ? (今晚要看電影嗎？) | Désolé, ce soir je ne peux pas. (不好意思，我今晚不行。) | 1. Non, je ne veux pas. (不要，我不想。) [too_blunt] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Redonnez-moi le reçu, s’il vous plaît. (請再給我收據。) [wrong_scenario_shop] - feedback: C’est trop fort pour parler à un ami. | Keep the refusal brief and warm. |  |
| t2 | Pas de souci. Tu es occupé ? (沒關係。你很忙嗎？) | J’ai encore un peu de travail. (我還有一點事要做。) | 1. Non, je ne veux pas. (不要，我不想。) [too_blunt] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Redonnez-moi le reçu, s’il vous plaît. (請再給我收據。) [wrong_scenario_shop] - feedback: C’est trop fort pour parler à un ami. | Keep the refusal brief and warm. |  |
| t3 | Peut-être un autre jour ? (也許改天？) | Oui, peut-être ce week-end. (好，也許這個週末。) | 1. Non, je ne veux pas. (不要，我不想。) [too_blunt] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Redonnez-moi le reçu, s’il vous plaît. (請再給我收據。) [wrong_scenario_shop] - feedback: C’est trop fort pour parler à un ami. | Keep the refusal brief and warm. |  |
| t4 | D’accord. On en parle ce week-end. (好，那週末再說。) | Merci. On se voit ce week-end. (謝謝，週末見。) | 1. Non, je ne veux pas. (不要，我不想。) [too_blunt] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Redonnez-moi le reçu, s’il vous plaît. (請再給我收據。) [wrong_scenario_shop] - feedback: C’est trop fort pour parler à un ami. | Keep the refusal brief and warm. |  |

---

## a2:fr:a2_describe_weekend_activity - Raconter une Activité du Week-end

- Level: A2
- Language: French (fr)
- Scenario ID: a2_describe_weekend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une situation sociale simple avec un ami en phrases courtes de niveau A2.
- Support text: Utilise un langage naturel avec un ami. Garde l’activité et la raison simples.

### Clean Dialogue Path

- ami: Qu’est-ce que tu as fait ce week-end ? (你週末做了什麼？)
- 你: J’ai vu un ami et on a déjeuné. (我見了朋友，也吃了午餐。)
- ami: Vous vous êtes vus où ? (你們在哪裡見面？)
- 你: On s’est retrouvés dans un café près de chez moi. (我們在我家附近的咖啡店見。)
- ami: C’était sympa ? (還不錯嗎？)
- 你: Oui, c’était calme et sympa. (嗯，很安靜，也很好。)
- ami: Ça a l’air bien. La prochaine fois, je viens avec toi. (聽起來不錯。下次我也一起去。)
- 你: Oui, on y va ensemble la prochaine fois. (好，下次一起去。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Qu’est-ce que tu as fait ce week-end ? (你週末做了什麼？) | J’ai vu un ami et on a déjeuné. (我見了朋友，也吃了午餐。) | 1. Je vais voir un ami demain. (我明天會見朋友。) [wrong_time_future] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Je vais à quel quai ? (要去哪個月台？) [wrong_scenario_transport] - feedback: C’est trop fort pour parler à un ami. | Use a short A2 past-time answer. |  |
| t2 | Vous vous êtes vus où ? (你們在哪裡見面？) | On s’est retrouvés dans un café près de chez moi. (我們在我家附近的咖啡店見。) | 1. Je vais voir un ami demain. (我明天會見朋友。) [wrong_time_future] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Je vais à quel quai ? (要去哪個月台？) [wrong_scenario_transport] - feedback: C’est trop fort pour parler à un ami. | Use a short A2 past-time answer. |  |
| t3 | C’était sympa ? (還不錯嗎？) | Oui, c’était calme et sympa. (嗯，很安靜，也很好。) | 1. Je vais voir un ami demain. (我明天會見朋友。) [wrong_time_future] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Je vais à quel quai ? (要去哪個月台？) [wrong_scenario_transport] - feedback: C’est trop fort pour parler à un ami. | Use a short A2 past-time answer. |  |
| t4 | Ça a l’air bien. La prochaine fois, je viens avec toi. (聽起來不錯。下次我也一起去。) | Oui, on y va ensemble la prochaine fois. (好，下次一起去。) | 1. Je vais voir un ami demain. (我明天會見朋友。) [wrong_time_future] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Je vais à quel quai ? (要去哪個月台？) [wrong_scenario_transport] - feedback: C’est trop fort pour parler à un ami. | Use a short A2 past-time answer. |  |

---

## a2:fr:a2_exchange_wrong_item - Échanger un Article Incorrect

- Level: A2
- Language: French (fr)
- Scenario ID: a2_exchange_wrong_item
- Setting: comptoir du magasin
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"food_shopping_preferences","review_slice":"food_shopping","interaction":"service_preference_or_exchange","source_brief":"A2_FOOD_SHOPPING_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Expliquez poliment que vous avez reçu le mauvais article et demandez le bon.
- Support text: Expliquez poliment que vous avez reçu le mauvais article et demandez le bon.

### Clean Dialogue Path

- employé: Je peux vous aider ? (需要幫忙嗎？)
- 你: J’ai demandé une petite tasse, mais j’ai reçu une grande tasse. (我訂的是小杯，但拿到大杯。)
- employé: Je vérifie. Je peux voir le reçu ? (我確認一下。可以看收據嗎？)
- 你: Oui, voici le reçu. (可以，這是收據。)
- employé: Vous avez raison. Je peux l’échanger contre une petite tasse maintenant. (您說得對。我現在可以換成小杯。)
- 你: Vous l’échangez contre une petite tasse, c’est ça ? (您會幫我換成小杯，對嗎？)
- employé: Oui, attendez un instant, s’il vous plaît. (好的，請稍等。)
- 你: Merci. J’attends ici. (謝謝，我在這裡等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Je peux vous aider ? (需要幫忙嗎？) | J’ai demandé une petite tasse, mais j’ai reçu une grande tasse. (我訂的是小杯，但拿到大杯。) | 1. Où fabrique-t-on la petite tasse ? (小杯在哪裡製作？) [wrong_detail_or_domain] - feedback: Le lieu de fabrication n’est pas le problème.<br>2. Baissez le prix, s’il vous plaît. (請降價。) [forbidden_or_wrong_domain] - feedback: La négociation du prix sort de cette tâche. | Expliquez que l’article reçu est différent. |  |
| t2 | Je vérifie. Je peux voir le reçu ? (我確認一下。可以看收據嗎？) | Oui, voici le reçu. (可以，這是收據。) | 1. Oui, voici mon passeport. (可以，這是護照。) [wrong_detail_or_domain] - feedback: Le passeport n’est pas nécessaire.<br>2. Oui, je prends le train demain. (可以，我明天搭火車。) [forbidden_or_wrong_domain] - feedback: Cela passe au transport. | Répondez à la vérification simple du reçu. |  |
| t3 | Vous avez raison. Je peux l’échanger contre une petite tasse maintenant. (您說得對。我現在可以換成小杯。) | Vous l’échangez contre une petite tasse, c’est ça ? (您會幫我換成小杯，對嗎？) | 1. Expliquez-moi les règles de remboursement. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Les règles de remboursement sont trop larges ici.<br>2. Je vais le signaler à la police. (我要報警。) [forbidden_or_wrong_domain] - feedback: C’est trop grave pour cette tâche. | Confirmez le remplacement. |  |
| t4 | Oui, attendez un instant, s’il vous plaît. (好的，請稍等。) | Merci. J’attends ici. (謝謝，我在這裡等。) | 1. Je dois aller à l’hôpital. (我需要去醫院。) [wrong_detail_or_domain] - feedback: Ce n’est pas une situation médicale.<br>2. Je veux changer de chambre. (我想換房。) [forbidden_or_wrong_domain] - feedback: Cela passe à une situation d’hôtel. | Terminez en acceptant d’attendre. |  |

---

## a2:fr:a2_explain_simple_delay_reason - Expliquer un petit retard

- Level: A2
- Language: French (fr)
- Scenario ID: a2_explain_simple_delay_reason
- Setting: Message à une amie
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Une amie demande ou tu es parce que tu n'es pas encore arrive.
- Learner goal: Dire que tu vas etre un peu en retard et donner une raison simple.
- Support text: Ton amie t'attend. Excuse-toi, dis que tu arrives un peu en retard, puis donne une raison simple et une estimation.

### Clean Dialogue Path

- amie: Tu es où ? Tu es presque arrivé ? (你在哪裡？你快到了嗎？)
- toi: Désolé, je vais être un peu en retard. (抱歉，我會晚一點。)
- amie: D'accord. Tu arrives dans combien de temps ? (好。你多久會到？)
- toi: J'arrive dans dix minutes. (我十分鐘後到。)
- amie: Pas de problème. Pourquoi ? (沒問題。為什麼？)
- toi: Le bus est en retard. (公車晚點了。)
- amie: D'accord, je t'attends. (好，我等你。)
- toi: Merci, j'arrive bientôt. (謝謝，我很快到。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tu es où ? Tu es presque arrivé ? (你在哪裡？你快到了嗎？) | Désolé, je vais être un peu en retard. (抱歉，我會晚一點。) | 1. Je suis arrivé hier. (我昨天到了。) [wrong_time_past] - feedback: Ton amie parle de maintenant, pas d'hier.<br>2. Je voudrais une table pour deux. (我想要一張兩人桌。) [wrong_scenario_restaurant] - feedback: C'est une phrase de restaurant. Ici, tu dois expliquer ton retard. | Ton amie veut savoir si tu arrives bientot. Commence par une excuse simple. |  |
| t2 | D'accord. Tu arrives dans combien de temps ? (好。你多久會到？) | J'arrive dans dix minutes. (我十分鐘後到。) | 1. Le rendez-vous est à dix heures. (約會是十點。) [wrong_focus_original_time] - feedback: Cette phrase donne l'heure du rendez-vous, pas ton retard estime.<br>2. Je prends le café sans sucre. (我喝不加糖的咖啡。) [wrong_scenario_ordering] - feedback: Cette phrase parle d'une commande, pas de ton arrivee. | Donne une estimation courte avec dans. | dans + duree<br>Pour dire une estimation, utilise dans + une duree: dans dix minutes.<br>J'arrive dans dix minutes. = 我十分鐘後到。<br>Je vais être un peu en retard. = 我會晚一點。 |
| t3 | Pas de problème. Pourquoi ? (沒問題。為什麼？) | Le bus est en retard. (公車晚點了。) | 1. Le bus est très bon. (公車很好。) [wrong_meaning_quality] - feedback: Cette phrase donne une opinion, pas une raison pour ton retard.<br>2. J'ai déjà payé par carte. (我已經用卡付款了。) [wrong_scenario_payment] - feedback: C'est une phrase de paiement. Elle n'explique pas ton retard. | Donne une raison quotidienne et courte. |  |
| t4 | D'accord, je t'attends. (好，我等你。) | Merci, j'arrive bientôt. (謝謝，我很快到。) | 1. Je voudrais changer l'heure. (我想改時間。) [wrong_function_reschedule] - feedback: Changer l'heure est une autre situation. Ici, ton amie accepte d'attendre.<br>2. Où est la gare ? (車站在哪裡？) [wrong_scenario_directions] - feedback: Cette phrase demande un chemin. Il faut simplement confirmer que tu arrives. | Remercie et confirme que tu arrives bientot. |  |

---

## a2:fr:a2_fill_simple_form_help - Demander de l’Aide pour un Formulaire Simple

- Level: A2
- Language: French (fr)
- Scenario ID: a2_fill_simple_form_help
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une tâche numérique ou un formulaire simple à faible risque avec des phrases courtes de niveau A2.
- Support text: Garde la tâche à faible risque. Ne donne pas de mot de passe, paiement, ID sensible, information juridique ou médicale.

### Clean Dialogue Path

- personnel: Veuillez remplir ce formulaire d’abord. (請先填這張表。)
- 你: Qu’est-ce que j’écris dans cette case ? (這一欄要填什麼？)
- personnel: Ici, écrivez votre nom. (這裡請填姓名。)
- 你: Seulement mon nom ? (只填姓名就可以嗎？)
- personnel: Oui, le numéro de téléphone va en dessous. (對，電話在下面那一欄。)
- 你: D’accord, je l’écris en dessous. (知道了，我會寫在下面。)
- personnel: Oui, c’est suffisant. (對，這樣就夠了。)
- 你: Merci. J’ai terminé. (謝謝，我填好了。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Veuillez remplir ce formulaire d’abord. (請先填這張表。) | Qu’est-ce que j’écris dans cette case ? (這一欄要填什麼？) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t2 | Ici, écrivez votre nom. (這裡請填姓名。) | Seulement mon nom ? (只填姓名就可以嗎？) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t3 | Oui, le numéro de téléphone va en dessous. (對，電話在下面那一欄。) | D’accord, je l’écris en dessous. (知道了，我會寫在下面。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t4 | Oui, c’est suffisant. (對，這樣就夠了。) | Merci. J’ai terminé. (謝謝，我填好了。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |

---

## a2:fr:a2_invite_friend_activity - Inviter un Ami à une Activité

- Level: A2
- Language: French (fr)
- Scenario ID: a2_invite_friend_activity
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une situation sociale simple avec un ami en phrases courtes de niveau A2.
- Support text: Utilise un langage naturel avec un ami. Garde l’activité et la raison simples.

### Clean Dialogue Path

- ami: Tu veux prendre un café plus tard ? (等一下要一起喝咖啡嗎？)
- 你: Tu veux prendre un café plus tard ? (等一下要一起喝咖啡嗎？)
- ami: Bien sûr. À quelle heure ? (好啊。幾點？)
- 你: Vers trois heures, ça te va ? (三點左右可以嗎？)
- ami: On se retrouve devant la gare ? (要在車站前面見嗎？)
- 你: Oui, on se retrouve devant la gare. (好，我們在車站前面見。)
- ami: Parfait. À tout à l’heure. (好，等一下見。)
- 你: Super. À tout à l’heure. (很好，等一下見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Tu veux prendre un café plus tard ? (等一下要一起喝咖啡嗎？) | Tu veux prendre un café plus tard ? (等一下要一起喝咖啡嗎？) | 1. Change ma chambre plus tard, s’il vous plaît. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Tu dois venir avec moi aujourd’hui. (你今天一定要跟我來。) [too_pressuring] - feedback: C’est trop fort pour parler à un ami. | Respond naturally to the friend plan. |  |
| t2 | Bien sûr. À quelle heure ? (好啊。幾點？) | Vers trois heures, ça te va ? (三點左右可以嗎？) | 1. Change ma chambre plus tard, s’il vous plaît. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Tu dois venir avec moi aujourd’hui. (你今天一定要跟我來。) [too_pressuring] - feedback: C’est trop fort pour parler à un ami. | Respond naturally to the friend plan. |  |
| t3 | On se retrouve devant la gare ? (要在車站前面見嗎？) | Oui, on se retrouve devant la gare. (好，我們在車站前面見。) | 1. Change ma chambre plus tard, s’il vous plaît. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Tu dois venir avec moi aujourd’hui. (你今天一定要跟我來。) [too_pressuring] - feedback: C’est trop fort pour parler à un ami. | Respond naturally to the friend plan. |  |
| t4 | Parfait. À tout à l’heure. (好，等一下見。) | Super. À tout à l’heure. (很好，等一下見。) | 1. Change ma chambre plus tard, s’il vous plaît. (等一下請幫我換房間。) [wrong_scenario_service] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Tu dois venir avec moi aujourd’hui. (你今天一定要跟我來。) [too_pressuring] - feedback: C’est trop fort pour parler à un ami. | Respond naturally to the friend plan. |  |

---

## a2:fr:a2_lost_item_followup_message - Faire un Suivi pour un Objet Perdu

- Level: A2
- Language: French (fr)
- Scenario ID: a2_lost_item_followup_message
- Setting: low-risk help message
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"digital_documents_low_risk_help","review_slice":"digital_documents","interaction":"low_risk_confirmation_or_help","source_brief":"A2_DIGITAL_DOCUMENTS_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une tâche numérique ou un formulaire simple à faible risque avec des phrases courtes de niveau A2.
- Support text: Garde la tâche à faible risque. Ne donne pas de mot de passe, paiement, ID sensible, information juridique ou médicale.

### Clean Dialogue Path

- personnel: Quel objet cherchez-vous ? (您在找什麼？)
- 你: Je crois avoir oublié un parapluie noir. (我好像把黑色雨傘忘在那裡。)
- personnel: Vous l’avez laissé où ? (放在哪裡？)
- 你: Je crois près d’une chaise du café. (好像放在咖啡店椅子旁邊。)
- personnel: Laissez votre nom et votre contact, s’il vous plaît. (請留下姓名和聯絡方式。)
- 你: D’accord, je laisse mon nom et mon téléphone. (好，我會留下姓名和電話。)
- personnel: Nous vérifions et nous vous contactons. (我確認後會聯絡您。)
- 你: Merci. J’attends votre message. (謝謝，我等您聯絡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Quel objet cherchez-vous ? (您在找什麼？) | Je crois avoir oublié un parapluie noir. (我好像把黑色雨傘忘在那裡。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t2 | Vous l’avez laissé où ? (放在哪裡？) | Je crois près d’une chaise du café. (好像放在咖啡店椅子旁邊。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t3 | Laissez votre nom et votre contact, s’il vous plaît. (請留下姓名和聯絡方式。) | D’accord, je laisse mon nom et mon téléphone. (好，我會留下姓名和電話。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |
| t4 | Nous vérifions et nous vous contactons. (我確認後會聯絡您。) | Merci. J’attends votre message. (謝謝，我等您聯絡。) | 1. Je donne mon mot de passe. (我會告訴你密碼。) [forbidden_sensitive] - feedback: Le mot de passe est hors de cette tâche A2.<br>2. Je veux un remboursement. (請退款。) [wrong_dispute_domain] - feedback: Les remboursements ou litiges sont hors de cette tâche. | Vérifie seulement le détail nécessaire et à faible risque. |  |

---

## a2:fr:a2_luggage_storage_pickup - Déposer et Reprendre un Bagage

- Level: A2
- Language: French (fr)
- Scenario ID: a2_luggage_storage_pickup
- Setting: À la consigne de la gare
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_luggage_storage_pickup.
- Learner goal: Ask to store luggage and confirm pickup time and receipt.
- Support text: Déposez un bagage, écoutez l’heure limite de retrait, puis confirmez le reçu nécessaire.

### Clean Dialogue Path

- Agent: Vous voulez déposer un bagage ? (您要寄放行李嗎？)
- Vous: Je voudrais laisser ce sac. (寄放行李)
- Agent: Vous pouvez le reprendre aujourd’hui avant dix-neuf heures. (今天晚上領取期限前可以來領。)
- Vous: Je le reprends avant dix-neuf heures, c’est ça ? (確認取件時間)
- Agent: Pour le reprendre, montrez ce reçu. (領取時請出示這張收據。)
- Vous: Oui, je montre le reçu pour le reprendre. (確認文件)
- Agent: Très bien. Revenez avant dix-neuf heures, s’il vous plaît. (好的，請 19 點前回來。)
- Vous: Merci. Je reviens avant dix-neuf heures. (禮貌收尾)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Vous voulez déposer un bagage ? (您要寄放行李嗎？) | Je voudrais laisser ce sac. (寄放行李) | 1. J’ai repris ce sac hier. (我昨天領了這個包。) - feedback: Vous le déposez maintenant, vous ne le reprenez pas.<br>2. Où est le quai ? (月台在哪裡？) - feedback: Cette situation concerne la consigne à bagages. | 寄放行李 |  |
| t2 | Vous pouvez le reprendre aujourd’hui avant dix-neuf heures. (今天晚上領取期限前可以來領。) | Je le reprends avant dix-neuf heures, c’est ça ? (確認取件時間) | 1. Je peux le déposer à sept heures du matin, c’est ça ? (我早上 7 點寄放，對嗎？) - feedback: La limite de retrait est avant dix-neuf heures.<br>2. Où est-ce que je reçois le remboursement ? (退款在哪裡拿？) - feedback: Les remboursements sont hors du périmètre. | 確認取件時間 |  |
| t3 | Pour le reprendre, montrez ce reçu. (領取時請出示這張收據。) | Oui, je montre le reçu pour le reprendre. (確認文件) | 1. Je peux jeter le reçu ? (我可以把收據丟掉嗎？) - feedback: Vous avez besoin du reçu pour reprendre le bagage.<br>2. Je montre mon passeport. (我出示護照。) - feedback: Le passeport n’est pas nécessaire ici. | 確認寄物單 |  |
| t4 | Très bien. Revenez avant dix-neuf heures, s’il vous plaît. (好的，請 19 點前回來。) | Merci. Je reviens avant dix-neuf heures. (禮貌收尾) | 1. Le train a quinze minutes de retard. (火車晚 15 分鐘。) - feedback: Ce n’est pas une annonce de retard.<br>2. Je voudrais déclarer un bagage perdu. (我想申報行李遺失。) - feedback: Les objets perdus sont hors du périmètre de cette tâche. | 收尾 |  |

---

## a2:fr:a2_make_simple_plan_sequence - Faire un Plan Simple en Deux Étapes

- Level: A2
- Language: French (fr)
- Scenario ID: a2_make_simple_plan_sequence
- Setting: friend chat
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: {"domain":"daily_social_coordination","review_slice":"daily_social","interaction":"friend_social_coordination","source_brief":"A2_DAILY_SOCIAL_NEUTRAL_ADAPTATION_BRIEFS_20260614","blueprint_source":"language_neutral_adaptation_brief","ko_pack_role":"mature_scenario_blueprint_not_translation_source"}
- Learner goal: Gérer une situation sociale simple avec un ami en phrases courtes de niveau A2.
- Support text: Utilise un langage naturel avec un ami. Garde l’activité et la raison simples.

### Clean Dialogue Path

- ami: On se retrouve d’abord à la gare ? (我們先在車站見，好嗎？)
- 你: Oui, on se retrouve d’abord à la gare. (好，我們先在車站見。)
- ami: Ensuite, on va au parc ? (接著去公園嗎？)
- 你: D’accord. Ensuite, on marche jusqu’au parc. (好，接著走去公園。)
- ami: Donc, d’abord la gare, puis le parc ? (所以先車站，接著公園，對嗎？)
- 你: Oui, d’abord la gare, puis le parc. (對，先車站，接著公園。)
- ami: Parfait. À samedi à deux heures. (好，星期六兩點見。)
- 你: D’accord, à samedi à deux heures. (好，星期六兩點見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | On se retrouve d’abord à la gare ? (我們先在車站見，好嗎？) | Oui, on se retrouve d’abord à la gare. (好，我們先在車站見。) | 1. Oui, rembourse-moi d’abord. (好，先退款給我。) [wrong_scenario_refund] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Non, absolument pas. (不，絕對不要。) [too_blunt] - feedback: C’est trop fort pour parler à un ami. | Keep the plan to two simple steps. |  |
| t2 | Ensuite, on va au parc ? (接著去公園嗎？) | D’accord. Ensuite, on marche jusqu’au parc. (好，接著走去公園。) | 1. Oui, rembourse-moi d’abord. (好，先退款給我。) [wrong_scenario_refund] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Non, absolument pas. (不，絕對不要。) [too_blunt] - feedback: C’est trop fort pour parler à un ami. | Keep the plan to two simple steps. |  |
| t3 | Donc, d’abord la gare, puis le parc ? (所以先車站，接著公園，對嗎？) | Oui, d’abord la gare, puis le parc. (對，先車站，接著公園。) | 1. Oui, rembourse-moi d’abord. (好，先退款給我。) [wrong_scenario_refund] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Non, absolument pas. (不，絕對不要。) [too_blunt] - feedback: C’est trop fort pour parler à un ami. | Keep the plan to two simple steps. |  |
| t4 | Parfait. À samedi à deux heures. (好，星期六兩點見。) | D’accord, à samedi à deux heures. (好，星期六兩點見。) | 1. Oui, rembourse-moi d’abord. (好，先退款給我。) [wrong_scenario_refund] - feedback: Cela ne correspond pas à cette situation avec un ami.<br>2. Non, absolument pas. (不，絕對不要。) [too_blunt] - feedback: C’est trop fort pour parler à un ami. | Keep the plan to two simple steps. |  |

---

## a2:fr:a2_plan_tomorrow_morning - Prévoir demain matin

- Level: A2
- Language: French (fr)
- Scenario ID: a2_plan_tomorrow_morning
- Setting: Conversation avec une amie
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Une amie te demande ce que tu vas faire demain matin.
- Learner goal: Dire un projet proche avec une etape simple ensuite.
- Support text: Ton amie te demande ton programme de demain matin. Dis d'abord ce que tu vas faire, puis ajoute une prochaine etape.

### Clean Dialogue Path

- amie: Qu'est-ce que tu vas faire demain matin ? (你明天早上打算做什麼？)
- toi: Je vais passer à la banque. (我打算去銀行一趟。)
- amie: Et après ? (那之後呢？)
- toi: Ensuite, je vais étudier au café. (接著我打算在咖啡店讀書。)
- amie: Tu es libre avant midi ? (你中午前有空嗎？)
- toi: Oui, je suis libre vers onze heures. (有，我十一點左右有空。)
- amie: Super. Je t'écris à onze heures. (太好了。我十一點傳訊息給你。)
- toi: D'accord, à demain. (好，明天見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Qu'est-ce que tu vas faire demain matin ? (你明天早上打算做什麼？) | Je vais passer à la banque. (我打算去銀行一趟。) | 1. Je suis passé à la banque hier. (我昨天去過銀行了。) [wrong_time_past] - feedback: Ton amie parle de demain matin, pas d'hier.<br>2. Où est la banque ? (銀行在哪裡？) [wrong_function_location_question] - feedback: Cette phrase demande un lieu. Elle ne dit pas ton programme. | La question porte sur demain matin. Utilise je vais pour un projet simple. |  |
| t2 | Et après ? (那之後呢？) | Ensuite, je vais étudier au café. (接著我打算在咖啡店讀書。) | 1. On se retrouve au café. (我們在咖啡店見面。) [wrong_function_meeting_place] - feedback: Cette phrase propose un rendez-vous. Ton amie demande ton activite suivante.<br>2. J'étudie maintenant. (我現在正在讀書。) [wrong_time_now] - feedback: Maintenant ne correspond pas a l'etape de demain matin. | Et après demande l'étape suivante. Réponds avec ensuite. | je vais + infinitif<br>Pour parler d'un projet proche, utilise je vais + verbe. Ensuite ajoute l'étape suivante.<br>Je vais passer à la banque. = 我打算去銀行一趟。<br>Ensuite, je vais étudier. = 接著我打算讀書。 |
| t3 | Tu es libre avant midi ? (你中午前有空嗎？) | Oui, je suis libre vers onze heures. (有，我十一點左右有空。) | 1. Non, j'étais libre hier. (不，我昨天有空。) [wrong_time_past] - feedback: La question parle de demain avant midi, pas d'hier.<br>2. La banque ferme à onze heures ? (銀行十一點關門嗎？) [wrong_focus_opening_hours] - feedback: Ton amie demande quand tu es libre, pas les horaires de la banque. | Avant midi veut dire en fin de matinee. Tu peux dire vers avec une heure. |  |
| t4 | Super. Je t'écris à onze heures. (太好了。我十一點傳訊息給你。) | D'accord, à demain. (好，明天見。) | 1. Je voudrais commander encore une fois. (我想再點一次。) [wrong_scenario_ordering] - feedback: Cette phrase sert a commander. Ici, il suffit de confirmer demain.<br>2. Je veux changer de chambre. (我想換房間。) [wrong_scenario_hotel] - feedback: C'est une phrase d'hotel. Une courte confirmation suffit. | Le programme est clair. Termine avec une reponse courte et amicale. |  |

---

## a2:fr:a2_report_room_problem - Signaler un Problème dans la Chambre

- Level: A2
- Language: French (fr)
- Scenario ID: a2_report_room_problem
- Setting: À la réception de l’hôtel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_report_room_problem.
- Learner goal: Report a simple room problem and confirm the next step.
- Support text: Signalez un petit problème dans la chambre et confirmez ce que le personnel va faire.

### Clean Dialogue Path

- Agent de l’hôtel: Bonjour. Comment puis-je vous aider ? (您好，我可以怎麼幫您？)
- Vous: Il n’y a pas de serviettes dans ma chambre. Vous pouvez m’aider ? (我的房間裡沒有毛巾。可以幫忙嗎？)
- Agent de l’hôtel: Oui, je vous apporte des serviettes tout de suite. (好的，我馬上拿毛巾過去。)
- Vous: Vous m’apportez des serviettes, c’est ça ? (您會拿毛巾過來，對嗎？)
- Agent de l’hôtel: Cela prendra environ dix minutes. (大約需要十分鐘。)
- Vous: Environ dix minutes, d’accord. (大約十分鐘，好的。)
- Agent de l’hôtel: Nous les envoyons dans votre chambre. (我們會送到房間。)
- Vous: Merci. J’attends dans la chambre. (謝謝。我在房間等。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Bonjour. Comment puis-je vous aider ? (您好，我可以怎麼幫您？) | Il n’y a pas de serviettes dans ma chambre. Vous pouvez m’aider ? (我的房間裡沒有毛巾。可以幫忙嗎？) | 1. Je voudrais réserver une chambre. (我想訂房。) [wrong_detail_or_domain] - feedback: Ici, vous devez signaler un problème dans la chambre, pas réserver.<br>2. Je veux une compensation. (我想要賠償。) [forbidden_or_wrong_domain] - feedback: La compensation est hors du périmètre A2. | Diga el problema de la habitación en una frase corta. |  |
| t2 | Oui, je vous apporte des serviettes tout de suite. (好的，我馬上拿毛巾過去。) | Vous m’apportez des serviettes, c’est ça ? (您會拿毛巾過來，對嗎？) | 1. Vous me changez de chambre, c’est ça ? (您會幫我換房間，對嗎？) [wrong_detail_or_domain] - feedback: L’agent a parlé de serviettes, pas d’un changement de chambre.<br>2. Le train est en retard, c’est ça ? (火車會晚，對嗎？) [forbidden_or_wrong_domain] - feedback: C’est un service d’hôtel, pas un transport. | Confirme lo que hará el personal. | Formule A2<br>Expression courte utile dans cette situation d’hôtel.<br>llevar toallas = 拿毛巾 |
| t3 | Cela prendra environ dix minutes. (大約需要十分鐘。) | Environ dix minutes, d’accord. (大約十分鐘，好的。) | 1. Je quitte l’hôtel dans une heure. (我一小時後退房。) [wrong_detail_or_domain] - feedback: Il s’agit du délai pour les serviettes, pas du check-out.<br>2. Je dois aller à l’hôpital. (我需要去醫院。) [forbidden_or_wrong_domain] - feedback: Le contenu médical est hors du périmètre. | Confirme el tiempo. |  |
| t4 | Nous les envoyons dans votre chambre. (我們會送到房間。) | Merci. J’attends dans la chambre. (謝謝。我在房間等。) | 1. Expliquez-moi les règles de remboursement. (請說明退款規則。) [wrong_detail_or_domain] - feedback: Les règles de remboursement sont hors du périmètre.<br>2. Deux cafés, s’il vous plaît. (請給我兩杯咖啡。) [forbidden_or_wrong_domain] - feedback: C’est une commande au restaurant, pas un service de chambre. | Agradezca y cierre. |  |

---

## a2:fr:a2_request_room_change - Demander un Changement de Chambre

- Level: A2
- Language: French (fr)
- Scenario ID: a2_request_room_change
- Setting: À la réception de l’hôtel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_request_room_change.
- Learner goal: Ask for a room change with a simple reason and confirm the move timing.
- Support text: Donnez une raison simple et demandez si vous pouvez changer de chambre.

### Clean Dialogue Path

- Agent de l’hôtel: Comment puis-je vous aider ? (我可以怎麼幫忙？)
- Vous: Ma chambre est un peu bruyante. Je peux changer de chambre ? (我的房間有點吵。可以換房嗎？)
- Agent de l’hôtel: J’ai vérifié. Nous avons une autre chambre disponible. (我確認了，有另一間房。)
- Vous: Il y a une autre chambre disponible, c’est ça ? (有另一間房，對嗎？)
- Agent de l’hôtel: Vous pouvez passer dans la nouvelle chambre dans trente minutes. (三十分鐘後可以搬到新房間。)
- Vous: Je peux changer dans trente minutes, c’est ça ? (三十分鐘後可以搬，對嗎？)
- Agent de l’hôtel: Quand elle sera prête, je vous donnerai la nouvelle carte. (準備好後，我會給您新房卡。)
- Vous: D’accord. Je prends la nouvelle carte quand elle est prête. (好，準備好後我拿新房卡。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Comment puis-je vous aider ? (我可以怎麼幫忙？) | Ma chambre est un peu bruyante. Je peux changer de chambre ? (我的房間有點吵。可以換房嗎？) | 1. Je peux changer de table au restaurant ? (可以換餐廳座位嗎？) [wrong_detail_or_domain] - feedback: Il s’agit d’une chambre d’hôtel, pas d’une table.<br>2. Je vais déposer une plainte officielle. (我要正式申訴。) [forbidden_or_wrong_domain] - feedback: Une plainte officielle est hors du périmètre A2. | Pida cambiar de habitación con una razón. |  |
| t2 | J’ai vérifié. Nous avons une autre chambre disponible. (我確認了，有另一間房。) | Il y a une autre chambre disponible, c’est ça ? (有另一間房，對嗎？) | 1. Il y a un autre billet disponible, c’est ça ? (有另一張票，對嗎？) [wrong_detail_or_domain] - feedback: C’est une chambre, pas un billet.<br>2. Je peux aussi recevoir une compensation ? (也可以得到賠償嗎？) [forbidden_or_wrong_domain] - feedback: La compensation est hors du périmètre. | Escuche la alternativa. | Formule A2<br>Expression courte utile dans cette situation d’hôtel.<br>otra habitación = 另一間房 |
| t3 | Vous pouvez passer dans la nouvelle chambre dans trente minutes. (三十分鐘後可以搬到新房間。) | Je peux changer dans trente minutes, c’est ça ? (三十分鐘後可以搬，對嗎？) | 1. Je fais le check-out dans trois heures, c’est ça ? (三小時後退房，對嗎？) [wrong_detail_or_domain] - feedback: L’agent a dit que vous pouvez changer dans trente minutes.<br>2. Je change parce que je dois aller à l’hôpital. (因為要去醫院，所以要換。) [forbidden_or_wrong_domain] - feedback: Les raisons médicales sont hors du périmètre. | Confirme cuándo puede cambiarse. |  |
| t4 | Quand elle sera prête, je vous donnerai la nouvelle carte. (準備好後，我會給您新房卡。) | D’accord. Je prends la nouvelle carte quand elle est prête. (好，準備好後我拿新房卡。) | 1. Non, je vais changer l’heure du train. (不，我要改火車時間。) [wrong_detail_or_domain] - feedback: C’est un changement de chambre, pas un transport.<br>2. Je vais parler à la police maintenant. (我現在會告訴警察。) [forbidden_or_wrong_domain] - feedback: Les démarches de police sont hors du périmètre. | Acepte y cierre. |  |

---

## a2:fr:a2_reschedule_meeting_time - Changer l'heure d'un rendez-vous

- Level: A2
- Language: French (fr)
- Scenario ID: a2_reschedule_meeting_time
- Setting: Message entre amis
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: Une amie confirme l'heure originale d'un rendez-vous personnel.
- Learner goal: Demander de changer l'heure et confirmer la nouvelle heure.
- Support text: Ton amie confirme l'heure du rendez-vous. Demande poliment de changer l'heure, propose une nouvelle heure, puis confirme.

### Clean Dialogue Path

- amie: On se voit toujours à trois heures ? (我們還是三點見嗎？)
- toi: On peut changer l'heure, s'il te plaît ? (可以改時間嗎？)
- amie: Oui, quelle heure te va ? (可以，幾點適合你？)
- toi: À quatre heures, c'est possible ? (四點可以嗎？)
- amie: D'accord, quatre heures me va. (好，四點適合我。)
- toi: Donc pas trois heures, mais quatre heures. (所以不是三點，而是四點。)
- amie: Parfait, à quatre heures alors. (太好了，那就四點。)
- toi: Merci, à tout à l'heure. (謝謝，待會見。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | On se voit toujours à trois heures ? (我們還是三點見嗎？) | On peut changer l'heure, s'il te plaît ? (可以改時間嗎？) | 1. Oui, à trois heures. (對，三點。) [old_time_repetition] - feedback: Cette phrase garde l'ancienne heure. Tu dois demander a changer l'heure.<br>2. On se voit à la gare ? (我們在車站見嗎？) [wrong_focus_place] - feedback: Cette phrase change le lieu. Le probleme est l'heure. | Ton amie confirme l'ancienne heure. Demande simplement si vous pouvez changer. |  |
| t2 | Oui, quelle heure te va ? (可以，幾點適合你？) | À quatre heures, c'est possible ? (四點可以嗎？) | 1. À trois heures, c'est possible ? (三點可以嗎？) [old_time_repetition] - feedback: Trois heures est l'ancienne heure. Tu dois proposer une nouvelle heure.<br>2. Quatre personnes, c'est possible ? (四個人可以嗎？) [number_confusion] - feedback: Cette phrase parle du nombre de personnes, pas de l'heure. | Propose une seule nouvelle heure. | a la place<br>Pour proposer une autre option, tu peux dire à quatre heures à la place.<br>À quatre heures, c'est possible ? = 四點可以嗎？<br>Pas à trois heures, mais à quatre heures. = 不是三點，而是四點。 |
| t3 | D'accord, quatre heures me va. (好，四點適合我。) | Donc pas trois heures, mais quatre heures. (所以不是三點，而是四點。) | 1. Donc pas quatre heures, mais trois heures. (所以不是四點，而是三點。) [old_new_reversed] - feedback: Cette phrase inverse l'ancienne et la nouvelle heure.<br>2. Donc pas au café, mais à la gare. (所以不是咖啡店，而是車站。) [wrong_focus_place] - feedback: Cette phrase change le lieu. Ici, tu dois confirmer l'heure. | Confirme clairement l'ancienne heure et la nouvelle heure. |  |
| t4 | Parfait, à quatre heures alors. (太好了，那就四點。) | Merci, à tout à l'heure. (謝謝，待會見。) | 1. Je suis en retard de dix minutes. (我遲到十分鐘。) [wrong_function_delay] - feedback: Cette phrase explique un retard. Ici, la nouvelle heure est deja confirmee.<br>2. Je vais commander un café. (我打算點一杯咖啡。) [wrong_scenario_ordering] - feedback: Cette phrase parle de commander. Elle ne ferme pas le changement d'heure. | Termine avec une courte confirmation amicale. |  |

---

## a2:fr:a2_transport_delay_announcement - Comprendre une Annonce de Retard

- Level: A2
- Language: French (fr)
- Scenario ID: a2_transport_delay_announcement
- Setting: Sur le quai
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A2 transport scenario: a2_transport_delay_announcement.
- Learner goal: Understand a delay duration and choose whether to wait.
- Support text: Écoutez l’annonce à la gare, confirmez la durée du retard, puis choisissez une réponse simple.

### Clean Dialogue Path

- Agent: Attention, s’il vous plaît. Le train pour Central a quinze minutes de retard. (請注意，開往 Central 的列車晚 15 分鐘。)
- Vous: Il a quinze minutes de retard, c’est bien ça ? (確認延誤時間)
- Agent: Si c’est quinze minutes, vous attendez ou vous prenez le bus ? (如果是 15 分鐘，您要等，還是搭公車？)
- Vous: Si c’est quinze minutes, j’attends. (選擇等待)
- Agent: Le prochain train arrive vers dix heures vingt. (下一班車大約 10 點 20 分到。)
- Vous: Alors je prends le train de dix heures vingt. (確認搭下一班)
- Agent: Très bien. Veuillez attendre sur ce quai. (好的，請在這個月台等。)
- Vous: D’accord, j’attends ici. (確認等待)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Attention, s’il vous plaît. Le train pour Central a quinze minutes de retard. (請注意，開往 Central 的列車晚 15 分鐘。) | Il a quinze minutes de retard, c’est bien ça ? (確認延誤時間) | 1. Il part dans cinq minutes, c’est bien ça ? (錯誤時間) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2.<br>2. Je peux changer de siège ? (我可以換座位嗎？) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2. | 聽懂延誤時間 |  |
| t2 | Si c’est quinze minutes, vous attendez ou vous prenez le bus ? (如果是 15 分鐘，您要等，還是搭公車？) | Si c’est quinze minutes, j’attends. (選擇等待) | 1. J’ai attendu hier. (我昨天等了。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2.<br>2. Un reçu, s’il vous plaît. (請給我收據。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2. | 做出簡單選擇 |  |
| t3 | Le prochain train arrive vers dix heures vingt. (下一班車大約 10 點 20 分到。) | Alors je prends le train de dix heures vingt. (確認搭下一班) | 1. Le magasin ferme à dix heures vingt ? (店 10 點 20 分關門嗎？) - feedback: Cette heure concerne le train, pas un magasin.<br>2. Je voudrais un remboursement du billet de bus. (我想退公車票。) - feedback: Les remboursements sont hors du périmètre de cette tâche A2. | 確認下一班時間 |  |
| t4 | Très bien. Veuillez attendre sur ce quai. (好的，請在這個月台等。) | D’accord, j’attends ici. (確認等待) | 1. Veuillez changer ma chambre. (請幫我換房間。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2.<br>2. Je voudrais prendre rendez-vous à l’hôpital. (我想預約醫院。) - feedback: Les distracteurs testent une mauvaise heure, un mauvais contexte ou une demande hors du périmètre A2. | 禮貌收尾 |  |

---

## a2:fr:a2_understand_hotel_notice - Comprendre un Avis de l’Hôtel

- Level: A2
- Language: French (fr)
- Scenario ID: a2_understand_hotel_notice
- Setting: Dans le hall de l’hôtel
- Source status: candidate_runtime_verified
- Review state: ai_reviewed
- Native review: native_pending
- Scenario brief: A hotel/accommodation service scenario: a2_understand_hotel_notice.
- Learner goal: Understand a short hotel notice and confirm time, place, and rule details.
- Support text: Comprenez un court avis de l’hôtel et confirmez l’heure, le lieu et la règle.

### Clean Dialogue Path

- Agent de l’hôtel: Veuillez regarder l’avis. Le petit-déjeuner est de sept heures à neuf heures du matin. (請看公告。早餐是早上七點到九點。)
- Vous: Le petit-déjeuner est de sept à neuf heures du matin, c’est ça ? (早餐是早上七點到九點，對嗎？)
- Agent de l’hôtel: C’est au restaurant du deuxième étage. (地點是二樓餐廳。)
- Vous: Je vais au restaurant du deuxième étage, c’est ça ? (去二樓餐廳就可以，對嗎？)
- Agent de l’hôtel: À l’entrée, dites seulement votre numéro de chambre. (入口只要告知房號即可。)
- Vous: Je dis seulement mon numéro de chambre à l’entrée, c’est ça ? (入口只要說房號就可以，對嗎？)
- Agent de l’hôtel: Oui, venez demain matin. (對，明天早上來就可以。)
- Vous: D’accord. Demain matin, je vais au restaurant du deuxième étage. (好，我明天早上去二樓餐廳。)

### Turn Review

| Turn | NPC line | Correct learner line | Distractors / feedback | Friend hint | Formula |
| :--- | :--- | :--- | :--- | :--- | :--- |
| t1 | Veuillez regarder l’avis. Le petit-déjeuner est de sept heures à neuf heures du matin. (請看公告。早餐是早上七點到九點。) | Le petit-déjeuner est de sept à neuf heures du matin, c’est ça ? (早餐是早上七點到九點，對嗎？) | 1. Le petit-déjeuner est de sept à neuf heures du soir, c’est ça ? (早餐是晚上七點到九點，對嗎？) [wrong_detail_or_domain] - feedback: L’avis dit le matin.<br>2. Le check-out est à neuf heures du matin, c’est ça ? (退房是早上九點，對嗎？) [forbidden_or_wrong_domain] - feedback: Cet avis parle du petit-déjeuner, pas du check-out. | Busque la hora en el aviso. |  |
| t2 | C’est au restaurant du deuxième étage. (地點是二樓餐廳。) | Je vais au restaurant du deuxième étage, c’est ça ? (去二樓餐廳就可以，對嗎？) | 1. Je vais dans une chambre au troisième étage, c’est ça ? (去三樓房間就可以，對嗎？) [wrong_detail_or_domain] - feedback: Le lieu est le restaurant du deuxième étage.<br>2. Je montre mon passeport, c’est ça ? (給您看護照就可以，對嗎？) [forbidden_or_wrong_domain] - feedback: Le passeport n’est pas nécessaire pour cet avis. | Confirme el lugar. | Formule A2<br>Expression courte utile dans cette situation d’hôtel.<br>restaurante del segundo piso = 二樓餐廳 |
| t3 | À l’entrée, dites seulement votre numéro de chambre. (入口只要告知房號即可。) | Je dis seulement mon numéro de chambre à l’entrée, c’est ça ? (入口只要說房號就可以，對嗎？) | 1. Je parle à la police à l’entrée, c’est ça ? (入口要跟警察說，對嗎？) [wrong_detail_or_domain] - feedback: C’est un avis de petit-déjeuner, pas une démarche de police.<br>2. Je reçois un remboursement à l’entrée, c’est ça ? (入口可以拿退款，對嗎？) [forbidden_or_wrong_domain] - feedback: Les remboursements ne correspondent pas à cet avis. | Confirme la condición sencilla. |  |
| t4 | Oui, venez demain matin. (對，明天早上來就可以。) | D’accord. Demain matin, je vais au restaurant du deuxième étage. (好，我明天早上去二樓餐廳。) | 1. D’accord. Ce soir, je récupère le linge. (好，我今晚去拿洗衣。) [wrong_detail_or_domain] - feedback: C’est le petit-déjeuner, pas la laverie.<br>2. D’accord. J’écris un rapport d’accident. (好，我會寫事故報告。) [forbidden_or_wrong_domain] - feedback: Les rapports d’accident sont hors du périmètre. | Confirme lo que hará. |  |

---
