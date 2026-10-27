---
title: फ़्लो में इंटीग्रेशन और एडवांस्ड स्टेप जोड़ें
description: फ़्लो में लीड को CRM में सेव करें, सोशल पर पोस्ट करें, फ़ॉर्म भेजें, Meta को रिपोर्ट भेजें, ईमेल जर्नी के स्टेप चलाएँ, और वेट, लूप, पैरेलल पाथ और सब-फ़्लो इस्तेमाल करें।
---

# फ़्लो में इंटीग्रेशन और एडवांस्ड स्टेप जोड़ें { #add-integration-and-advanced-steps-to-a-flow }

कुछ स्टेप चैट से आगे का काम करते हैं। इनसे आप CRM में लीड सेव कर सकते हैं, सोशल पर पोस्ट कर सकते हैं, फ़ॉर्म या ईमेल भेज सकते हैं और रास्ता बाँट सकते हैं। आप वेबहुक कॉल कर सकते हैं, किसी लिस्ट पर काम दोहरा सकते हैं, या कई रास्ते एक साथ चला सकते हैं। हर स्टेप सेट करने में करीब 2 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- कैनवास पर आपका कोई फ़्लो खुला होना चाहिए। देखें [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md) या [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।
- **CRM** स्टेप से पहले एक ऐसा स्टेप होना चाहिए जो नाम या फ़ोन नंबर पूछता हो। देखें [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।
- **Social** के लिए आपके सोशल अकाउंट कनेक्ट होने चाहिए। देखें [सोशल अकाउंट कनेक्ट करें](../social/connect-social-accounts.md)।
- **Forms** के लिए आपके पास पब्लिश किया हुआ फ़ॉर्म होना चाहिए।
- **Send email** के लिए आपके पास ईमेल टेम्प्लेट होना चाहिए। देखें [ईमेल टेम्प्लेट बनाएँ](../email/create-email-template.md)।

## हर स्टेप कहाँ मिलता है { #where-each-step-lives }

**+** पर क्लिक करके **Add a step after** मेन्यू खोलें, फिर **All steps** पर क्लिक करें। ये स्टेप 2 ग्रुप में रखे हैं।

| ग्रुप | स्टेप |
| --- | --- |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action** |

**Advanced** के स्टेप 3 तरह के फ़्लो में काम आते हैं:

| टाइप | स्टेप |
| --- | --- |
| चैटबॉट | **Request Intervention**, **Invoke Action** |
| ऑटोमेशन | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join** |
| ईमेल जर्नी | **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook** |

[VERIFY: क्या मेन्यू वे स्टेप छिपा देता है जो आपके बनाए जा रहे फ़्लो के टाइप से मेल नहीं खाते।]

## स्टेप { #steps }

### CRM में लीड सेव करें { #save-a-lead-in-crm }

1. **CRM** स्टेप जोड़ें। उसके नीचे लिखा होता है **Create or update a CRM record**। **COMMON** में यही स्टेप **Save to CRM** नाम से मिलता है।
2. **What to do in the CRM** के नीचे एक विकल्प चुनें:
    - **Create a lead**
    - **Move the lead to a status**
    - **Convert the lead**
    - **Move the deal to a stage**
    - **Update a contact**
    - **Add to a campaign**
    - **Update a segment**
3. **Create a lead** चुनने पर **Will save** पढ़ें। उसमें वे जवाब दिखते हैं जो फ़्लो अब तक माँग चुका है।
4. उसमें **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.** लिखा हो, तो **CRM** स्टेप से पहले वह स्टेप जोड़ें।
5. **Move the lead to a status** के लिए **Status** चुनें: **NEW**, **CONTACTED**, **QUALIFIED**, **UNQUALIFIED**, **LOST** या **CONVERTED**। पहले से **QUALIFIED** चुना होता है।
6. **Move the deal to a stage** के लिए **Stage** का नाम लिखें, जैसे `Negotiation`। अपनी पाइपलाइन का ही स्टेज नाम लिखें।

यह स्टेप फ़्लो के मालिक के नाम से चलता है। इसमें उसी व्यक्ति का एक्सेस लगता है।

### सोशल पर पोस्ट करें { #post-to-social }

1. **Social** स्टेप जोड़ें। उसके नीचे लिखा होता है **Post to a social account**।
2. **Channels** के नीचे जिस अकाउंट पर पोस्ट करनी है, उस पर क्लिक करके उसे चालू करें: **Instagram**, **Facebook**, **LinkedIn**, **X** या **Threads**।
3. **Caption** में पोस्ट का टेक्स्ट लिखें, जैसे `What to post...`। इसमें 2,200 अक्षर तक आ सकते हैं।
4. **Mode** के पास दिख रही वैल्यू पर क्लिक करके **DRAFT** और **PUBLISH** में से एक चुनें। पहले से **DRAFT** चुना होता है।

!!! warning "चेतावनी"
    **PUBLISH** चुनने पर पोस्ट बिना रिव्यू के सीधे चली जाती है, और उसे वापस नहीं लिया जा सकता। टेस्ट करते समय **DRAFT** ही रखें। पोस्ट **Social** में जाकर देख लें।

### भरने के लिए फ़ॉर्म भेजें { #send-a-form-to-fill }

1. **Forms** स्टेप जोड़ें। कैनवास पर कार्ड में लिखा होता है **Send a form to fill**।
2. **Form** के नीचे पब्लिश किया हुआ फ़ॉर्म चुनें। लिस्ट में **No forms published yet.** लिखा हो, तो पहले एक फ़ॉर्म पब्लिश करें।
3. **Reaches the contact over** के नीचे चैनल चुनें: **WHATSAPP_FLOW**, **BOT_CHAIN**, **META_LEAD_ADS**, **WEB** या **API**। पहले से **BOT_CHAIN** चुना होता है।

कॉन्टैक्ट फ़ॉर्म सबमिट करता है, तो फ़ॉर्म से **form.submitted** इवेंट बनता है। कोई फ़्लो इस इवेंट से शुरू हो सकता है।

### Meta को कन्वर्ज़न की रिपोर्ट भेजें { #report-a-conversion-to-meta }

1. **Meta Conversion** स्टेप जोड़ें। उसके नीचे लिखा होता है **Report a conversion to Meta**।
2. **Node type** देखें। उसमें **META_CONVERSION** लिखा होता है। इसे जैसा है वैसा ही रहने दें।
3. **Node type** के नीचे स्टेप जो भी वैल्यू माँगता है, उन सबको भरें। [VERIFY: यह स्टेप कौन-सी कॉन्फ़िग फ़ील्ड दिखाता है।]

### नाम से इंजन एक्शन चलाएँ { #run-an-engine-action-by-name }

1. **Invoke Action** स्टेप जोड़ें। उसके नीचे लिखा होता है **Run an engine action by name**।
2. **Node type** देखें। उसमें **INVOKE_ACTION** लिखा होता है।
3. **Node type** के नीचे दी गई हर वैल्यू भरें।
4. नोट **Advanced step** पढ़ें। उसमें लिखा है कि स्टेप बिल्कुल उसी रूप में रखा जाता है जिसमें चैटबॉट इंजन उसे सेव करता है।

### चैट पर एजेंट का ध्यान दिलाएँ { #flag-a-chat-for-an-agent }

1. **Request Intervention** स्टेप जोड़ें। उसके नीचे लिखा होता है **Flag the chat for an agent to step in**।
2. नोट **Request Intervention** पढ़ें। इस स्टेप में भरने के लिए कोई फ़ील्ड नहीं है।

यह **Chat with agent** की तरह ही काम करता है। देखें [चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें](chatbot-action-blocks.md)।

### जर्नी में ईमेल भेजें { #send-an-email-in-a-journey }

1. **Send email** स्टेप जोड़ें।
2. **Template · template_id** के नीचे ईमेल टेम्प्लेट चुनें। लिस्ट में **No email templates yet.** लिखा हो, तो पहले एक टेम्प्लेट बनाएँ।
3. **Subject override** में सब्जेक्ट लिखें। टेम्प्लेट वाला सब्जेक्ट ही रखना हो, तो इसे खाली छोड़ दें।
4. **Preview text** में प्रीहेडर लिखें।
5. ईमेल तुरंत भेजना हो, तो **Send at any hour** चालू करें। भेजने का समय तय करना हो, तो इसे बंद रखें।
6. स्विच बंद हो, तो **Send window · local hours** में 0 से 23 के बीच शुरू का घंटा और आखिरी घंटा चुनें।
7. **Send days · send_days_of_week** के नीचे उन दिनों पर क्लिक करें जिन दिनों ईमेल जा सकते हैं।
8. ओपन और क्लिक गिनने के लिए **Track opens** और **Track clicks** चालू करें।

### जर्नी में इंतज़ार करें { #wait-in-a-journey }

1. **Wait** स्टेप जोड़ें।
2. **Wait for · wait_minutes** में मिनट लिखें।
3. उसके नीचे का नोट पढ़ें। उसमें इंतज़ार का समय घंटों या दिनों में दिखता है। कॉन्टैक्ट कतार से बाहर हो जाता है और समय पूरा होने पर वापस आ जाता है।

### जर्नी में कॉन्टैक्ट को टैग करें या टैग हटाएँ { #tag-or-untag-a-contact-in-a-journey }

1. **Tag contact** स्टेप जोड़ें। **Tag · tag_value** में टैग का नाम लिखें।
2. टैग हटाना हो, तो **Remove tag** स्टेप जोड़ें। **Remove tag · tag_value** में टैग का नाम लिखें।

### कॉन्टैक्ट को जर्नी से बाहर करें { #take-a-contact-off-the-journey }

1. **Unsubscribe** स्टेप जोड़ें।
2. नोट पढ़ें। यह स्टेप कॉन्टैक्ट को अनसब्सक्राइब्ड मार्क कर देता है और उसकी हर जर्नी रोक देता है।

!!! warning "जर्नी के अंदर से वापस नहीं लिया जा सकता"
    **Unsubscribe** सिर्फ़ वहीं रखें जहाँ कॉन्टैक्ट को हमेशा के लिए बाहर करना हो।

### जर्नी को दो रास्तों में बाँटें { #split-a-journey-into-two-paths }

1. **Split A/B** स्टेप जोड़ें।
2. नोट पढ़ें। बँटवारा कॉन्टैक्ट की id से होता है और किसी रास्ते को ज़्यादा वज़न नहीं मिलता। इसलिए करीब आधे कॉन्टैक्ट हर रास्ते पर जाते हैं।
3. रास्ता A अगला ब्लॉक है। **Path B starts at** के नीचे चुनें कि रास्ता B कहाँ से शुरू हो।

### कॉन्टैक्ट की किसी जानकारी से जर्नी में ब्रांच बनाएँ { #branch-a-journey-by-a-contact-detail }

1. जर्नी में **Condition** ब्लॉक जोड़ें।
2. **If the contact's** के नीचे पहली लाइन पर क्लिक करें। **Which field** लिस्ट खुलेगी। **Tags**, **Subscription status**, **Email address**, **Source** या **Lawful basis** चुनें।
3. तुलना चुनने के लिए दूसरी लाइन पर क्लिक करें। कौन-कौन से विकल्प मिलेंगे, यह फ़ील्ड पर निर्भर करता है:

    | फ़ील्ड | तुलना |
    | --- | --- |
    | **Tags** | **is tagged**, **is not tagged**, **tags contain** |
    | **Subscription status** | **is**, **is not** |
    | **Email address** | **is**, **is not**, **contains** |
    | **Source** | **is**, **is not** |
    | **Lawful basis** | **is**, **is not** |

4. **Value** में वह लिखें जिससे तुलना करनी है, जैसे टैग का नाम।
5. यह लाइन पढ़ें: **If yes, the next block runs.** "हाँ" वाला रास्ता ठीक नीचे वाला ब्लॉक है।
6. **If no, jump to** के नीचे वह ब्लॉक चुनें जहाँ से "नहीं" वाला रास्ता शुरू होगा। लिस्ट में सिर्फ़ इस ब्लॉक के बाद वाले ब्लॉक दिखते हैं। बाद में कोई ब्लॉक न हो, तो लिस्ट दिखती ही नहीं।

### जर्नी के किसी ब्लॉक के बाद आगे के ब्लॉक पर जाएँ { #skip-ahead-after-a-journey-block }

1. जर्नी का कोई ऐसा ब्लॉक चुनें जिसमें ब्रांच नहीं बनती, जैसे **Send email** या **Wait** ब्लॉक।
2. **Afterwards, jump to** के नीचे इसके बाद वाला कोई ब्लॉक चुनें।
3. यह ब्लॉक पूरा होते ही जर्नी सीधे उस ब्लॉक पर पहुँच जाती है। बीच के ब्लॉक छूट जाते हैं।

इसका इस्तेमाल किसी दूसरे रास्ते के ब्लॉक लाँघने के लिए करें। लिस्ट में सिर्फ़ इस ब्लॉक के बाद वाले ब्लॉक दिखते हैं। आखिरी ब्लॉक पर यह लिस्ट नहीं दिखती।

### जर्नी से वेबहुक कॉल करें { #call-a-webhook-from-a-journey }

1. **Webhook** स्टेप जोड़ें।
2. **Method** के पास दिख रही वैल्यू पर क्लिक करें। हर क्लिक पर **POST**, **GET** और **PUT** बदलते रहते हैं। पहले से **POST** चुना होता है।
3. **URL** में एड्रेस लिखें।
4. **Headers (JSON)** और **Body (JSON)** में भेजने वाला डेटा लिखें।
5. चुनें कि जवाब कहाँ सेव हो।

### इंतज़ार करें, दोहराएँ और रास्ते एक साथ चलाएँ { #wait-repeat-and-run-paths-at-the-same-time }

ये स्टेप ऑटोमेशन फ़्लो में काम करते हैं। पूरी लिस्ट के लिए [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md) देखें।

1. **Delay** या **Wait** स्टेप जोड़ें। **How long** के नीचे **Wait for** सेट करें और **minutes**, **hours** या **days** चुनें। यह स्टेप कोई वर्कर नहीं रोकता। यह कतार में सोया रहता है।
2. **For each** स्टेप जोड़ें। **What to repeat over** के नीचे **For each item in** में एक लिस्ट लिखें, जैसे `{{2.lineItems}}`। लूप के अंदर लूप नहीं बन सकता। अंदर वाले लेवल के लिए **Sub-flow** इस्तेमाल करें।
3. **Sub-flow** स्टेप जोड़ें। **Which flow** के नीचे **Runs** खोलें और फ़्लो चुनें। दूसरा फ़्लो पूरा चलता है। उसके खत्म होने के बाद ही यह फ़्लो आगे बढ़ता है।
4. **Parallel** स्टेप जोड़ें। **Lanes** पढ़ें: हर लेन एक ही समय पर चलती है। कार्ड से और लेन जोड़ें।
5. लेन के बाद **Join** स्टेप जोड़ें। यह आगे बढ़ने से पहले अपने ऊपर की हर लेन के पूरा होने का इंतज़ार करता है।
6. **Many paths by rule** स्टेप जोड़ें। **Add two paths** पर क्लिक करें। और रास्ते चाहिए, तो **Add a path** पर क्लिक करें। हर रास्ते के लिए एक नियम सेट करें।
7. किसी रास्ते को बंद करने के लिए **Turn this path off** पर क्लिक करें। उसे डिलीट करने के लिए **Remove this path** पर क्लिक करें। जिस रास्ते पर स्टेप लगे हों, उसे हटाया नहीं जा सकता। पहले उन स्टेप को डिलीट करें।

ऑटोमेशन के हर स्टेप में **Step name** में आप लिख सकते हैं कि वह स्टेप किसलिए है।

!!! tip "सुझाव"
    Many paths में जिस रास्ते की शर्त सबसे पहले मेल खाती है, वही रास्ता चलता है। जो रिकॉर्ड किसी भी शर्त से मेल नहीं खाता, वह डिफ़ॉल्ट रास्ते पर जाता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.** | **Create a lead** के पास सेव करने के लिए कोई जवाब नहीं है। | **CRM** स्टेप से पहले **Ask name** या **Ask phone** जोड़ें। |
| **No forms published yet.** | वर्कस्पेस में कोई फ़ॉर्म पब्लिश नहीं है। | एक फ़ॉर्म पब्लिश करें, फिर **Forms** दोबारा खोलें। |
| **No email templates yet.** | **Send email** में चुनने के लिए कोई टेम्प्लेट नहीं है। | एक ईमेल टेम्प्लेट बनाएँ, फिर स्टेप दोबारा खोलें। |
| **This path has steps on it. Delete those first.** | आपने ऐसा रास्ता हटाना चाहा जिस पर अब भी स्टेप लगे हैं। | रास्ते के स्टेप डिलीट करें, फिर रास्ता हटाएँ। |
| **No paths yet. A branch needs at least two.** | **Many paths by rule** में 2 से कम रास्ते हैं। | **Add two paths** पर क्लिक करें। |
| **Social** पोस्ट नहीं गई | **Mode** में **DRAFT** चुना है। | **Social** में जाकर ड्राफ़्ट देखें, या **Mode** को **PUBLISH** करें। |
| **Could not publish — the step that needs fixing is marked on the canvas** | कोई स्टेप अधूरा है। | निशान लगा स्टेप चुनें, फ़ील्ड भरें, सेव करें और पब्लिश करें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [Google Sheets, Calendar, Meet और Contacts के स्टेप जोड़ें](flow-google-workspace-steps.md)
- [चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें](chatbot-action-blocks.md)
- [WhatsApp चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)
- [फ़्लो में Action स्टेप और कंडीशन इस्तेमाल करें](flow-action-and-condition-steps.md)
