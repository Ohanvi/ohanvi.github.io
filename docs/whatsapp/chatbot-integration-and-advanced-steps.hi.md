---
title: फ़्लो में इंटीग्रेशन और एडवांस्ड चरण जोड़ें
description: फ़्लो में लीड को CRM में सेव करें, सोशल पर पोस्ट करें, फ़ॉर्म भेजें, Meta को रिपोर्ट करें, ईमेल जर्नी के चरण चलाएँ, और वेट, लूप, पैरेलल पाथ और सब-फ़्लो इस्तेमाल करें।
---

# फ़्लो में इंटीग्रेशन और एडवांस्ड चरण जोड़ें { #add-integration-and-advanced-steps-to-a-flow }

ऐसे चरण जोड़ें जो चैट से आगे का काम करते हैं: CRM में लीड सेव करना, सोशल पर पोस्ट करना, फ़ॉर्म भेजना, ईमेल भेजना, रास्ता बाँटना, वेबहुक कॉल करना, किसी सूची पर दोहराना, या रास्तों को एक साथ चलाना। हर चरण सेट करने में करीब 2 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- कैनवास पर आपका कोई फ़्लो खुला है। देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md) या [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)।
- **CRM** के लिए, उससे पहले एक ऐसा चरण है जो नाम या फ़ोन नंबर पूछता है। देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।
- **Social** के लिए, आपके सोशल अकाउंट कनेक्ट हैं। देखें [सोशल अकाउंट कनेक्ट करें](../social/connect-social-accounts.md)।
- **Forms** के लिए, आपके पास पब्लिश किया हुआ फ़ॉर्म है।
- **Send email** के लिए, आपके पास ईमेल टेम्प्लेट है। देखें [ईमेल टेम्प्लेट बनाएँ](../email/create-email-template.md)।

## हर चरण कहाँ मिलता है { #where-each-step-lives }

**+** से **Add a step after** मेन्यू खोलें, फिर **All steps** पर क्लिक करें। ये चरण 2 समूहों में हैं।

| समूह | चरण |
| --- | --- |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action** |

**Advanced** के चरण 3 तरह के फ़्लो के हैं:

| प्रकार | चरण |
| --- | --- |
| चैटबॉट | **Request Intervention**, **Invoke Action** |
| ऑटोमेशन | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join** |
| ईमेल जर्नी | **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook** |

[VERIFY: क्या मेन्यू उन चरणों को छिपाता है जो आपके बनाए जा रहे फ़्लो के प्रकार से मेल नहीं खाते।]

## चरण { #steps }

### CRM में लीड सेव करें { #save-a-lead-in-crm }

1. **CRM** चरण जोड़ें। विवरण में लिखा होता है **Create or update a CRM record**। **COMMON** में यही चरण **Save to CRM** नाम से मिलता है।
2. **What to do in the CRM** के नीचे एक चुनें:
    - **Create a lead**
    - **Move the lead to a status**
    - **Convert the lead**
    - **Move the deal to a stage**
    - **Update a contact**
    - **Add to a campaign**
    - **Update a segment**
3. **Create a lead** के लिए **Will save** पढ़ें। उसमें वे जवाब दिखते हैं जो फ़्लो ने अब तक माँगे हैं।
4. अगर उसमें **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.** लिखा है, तो **CRM** चरण से पहले वह चरण जोड़ें।
5. **Move the lead to a status** के लिए **Status** चुनें: **NEW**, **CONTACTED**, **QUALIFIED**, **UNQUALIFIED**, **LOST** या **CONVERTED**। डिफ़ॉल्ट **QUALIFIED** है।
6. **Move the deal to a stage** के लिए **Stage** का नाम लिखें, जैसे `Negotiation`। अपनी पाइपलाइन का स्टेज नाम इस्तेमाल करें।

यह चरण फ़्लो के मालिक के रूप में, उसी व्यक्ति के एक्सेस के साथ चलता है।

### सोशल पर पोस्ट करें { #post-to-social }

1. **Social** चरण जोड़ें। विवरण में लिखा होता है **Post to a social account**।
2. **Channels** के नीचे हर अकाउंट को चालू करने के लिए उस पर क्लिक करें: **Instagram**, **Facebook**, **LinkedIn**, **X** या **Threads**।
3. **Caption** में पोस्ट का टेक्स्ट लिखें, जैसे `What to post...`। इसमें 2,200 अक्षर तक आ सकते हैं।
4. **Mode** के बगल में **DRAFT** और **PUBLISH** के बीच बदलने के लिए वैल्यू पर क्लिक करें। डिफ़ॉल्ट **DRAFT** है।

!!! warning "चेतावनी"
    **PUBLISH** बिना समीक्षा के पोस्ट कर देता है, और पोस्ट वापस नहीं ली जा सकती। टेस्ट करते समय **DRAFT** रखें, और पोस्ट की समीक्षा **Social** में करें।

### भरने के लिए फ़ॉर्म भेजें { #send-a-form-to-fill }

1. **Forms** चरण जोड़ें। कैनवास पर कार्ड में लिखा होता है **Send a form to fill**।
2. **Form** के नीचे पब्लिश किया हुआ फ़ॉर्म चुनें। अगर सूची में **No forms published yet.** लिखा है, तो पहले एक फ़ॉर्म पब्लिश करें।
3. **Reaches the contact over** के नीचे चैनल चुनें: **WHATSAPP_FLOW**, **BOT_CHAIN**, **META_LEAD_ADS**, **WEB** या **API**। डिफ़ॉल्ट **BOT_CHAIN** है।

जब संपर्क फ़ॉर्म सबमिट करता है, तो फ़ॉर्म इवेंट **form.submitted** उठाता है। कोई फ़्लो उससे शुरू हो सकता है।

### Meta को कन्वर्ज़न रिपोर्ट करें { #report-a-conversion-to-meta }

1. **Meta Conversion** चरण जोड़ें। विवरण में लिखा होता है **Report a conversion to Meta**।
2. **Node type** जाँचें। उसमें **META_CONVERSION** लिखा होता है। उसे जैसा है वैसा ही रहने दें।
3. **Node type** के नीचे चरण जो भी वैल्यू सूचीबद्ध करता है, उन्हें भरें। [VERIFY: यह चरण कौन-से कॉन्फ़िग फ़ील्ड दिखाता है।]

### नाम से इंजन एक्शन चलाएँ { #run-an-engine-action-by-name }

1. **Invoke Action** चरण जोड़ें। विवरण में लिखा होता है **Run an engine action by name**।
2. **Node type** जाँचें। उसमें **INVOKE_ACTION** लिखा होता है।
3. **Node type** के नीचे सूचीबद्ध हर वैल्यू भरें।
4. नोट **Advanced step** पढ़ें। उसमें लिखा है कि चरण ठीक उसी रूप में रखा जाता है जैसे चैटबॉट इंजन उसे सेव करता है।

### किसी एजेंट के लिए चैट को फ़्लैग करें { #flag-a-chat-for-an-agent }

1. **Request Intervention** चरण जोड़ें। विवरण में लिखा होता है **Flag the chat for an agent to step in**।
2. नोट **Request Intervention** पढ़ें। इस चरण में कोई फ़ील्ड नहीं है।

यह **Chat with agent** की तरह काम करता है। देखें [चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें](chatbot-action-blocks.md)।

### जर्नी में ईमेल भेजें { #send-an-email-in-a-journey }

1. **Send email** चरण जोड़ें।
2. **Template · template_id** के नीचे ईमेल टेम्प्लेट चुनें। अगर सूची में **No email templates yet.** लिखा है, तो पहले एक बनाएँ।
3. **Subject override** में सब्जेक्ट लिखें। टेम्प्लेट का सब्जेक्ट इस्तेमाल करना हो, तो इसे खाली छोड़ें।
4. **Preview text** में प्रीहेडर लिखें।
5. तुरंत भेजने के लिए **Send at any hour** चालू करें। समय की खिड़की तय करनी हो, तो इसे बंद रखें।
6. स्विच बंद होने पर, **Send window · local hours** में 0 से 23 के बीच शुरू का घंटा और अंत का घंटा सेट करें।
7. **Send days · send_days_of_week** के नीचे उन दिनों पर क्लिक करें जब ईमेल जा सकते हैं।
8. ओपन और क्लिक गिनने के लिए **Track opens** और **Track clicks** चालू करें।

### जर्नी में इंतज़ार करें { #wait-in-a-journey }

1. **Wait** चरण जोड़ें।
2. **Wait for · wait_minutes** में मिनटों की संख्या लिखें।
3. उसके नीचे का नोट पढ़ें। उसमें इंतज़ार घंटों या दिनों में दिखता है। संपर्क कतार से निकल जाता है और समय होने पर वापस आता है।

### जर्नी में संपर्क को टैग करें या टैग हटाएँ { #tag-or-untag-a-contact-in-a-journey }

1. **Tag contact** चरण जोड़ें। **Tag · tag_value** में टैग का नाम लिखें।
2. टैग हटाने के लिए **Remove tag** चरण जोड़ें। **Remove tag · tag_value** में टैग का नाम लिखें।

### संपर्क को जर्नी से हटाएँ { #take-a-contact-off-the-journey }

1. **Unsubscribe** चरण जोड़ें।
2. नोट पढ़ें। यह संपर्क को अनसब्सक्राइब्ड मार्क करता है और उसकी हर जर्नी रोक देता है।

!!! warning "जर्नी के अंदर से वापस नहीं लिया जा सकता"
    **Unsubscribe** सिर्फ़ वहीं रखें जहाँ संपर्क को हमेशा के लिए निकलना चाहिए।

### जर्नी को दो रास्तों में बाँटें { #split-a-journey-into-two-paths }

1. **Split A/B** चरण जोड़ें।
2. नोट पढ़ें। बँटवारा संपर्क की id के आधार पर होता है और भारित नहीं है, इसलिए करीब आधे संपर्क हर रास्ता लेते हैं।
3. रास्ता A अगला ब्लॉक है। **Path B starts at** के नीचे चुनें कि रास्ता B कहाँ से शुरू हो।

### संपर्क की किसी जानकारी के आधार पर जर्नी में शाखा बनाएँ { #branch-a-journey-by-a-contact-detail }

1. जर्नी में **Condition** ब्लॉक जोड़ें।
2. **If the contact's** के नीचे पहली पंक्ति पर क्लिक करें। **Which field** सूची खुलती है। **Tags**, **Subscription status**, **Email address**, **Source** या **Lawful basis** चुनें।
3. तुलना चुनने के लिए दूसरी पंक्ति पर क्लिक करें। विकल्प फ़ील्ड पर निर्भर करते हैं:

    | फ़ील्ड | तुलना |
    | --- | --- |
    | **Tags** | **is tagged**, **is not tagged**, **tags contain** |
    | **Subscription status** | **is**, **is not** |
    | **Email address** | **is**, **is not**, **contains** |
    | **Source** | **is**, **is not** |
    | **Lawful basis** | **is**, **is not** |

4. **Value** में वह लिखें जिससे तुलना करनी है, जैसे टैग का नाम।
5. लाइन **If yes, the next block runs.** पढ़ें। हाँ वाला रास्ता ठीक नीचे का ब्लॉक है।
6. **If no, jump to** के नीचे वह ब्लॉक चुनें जहाँ से नहीं वाला रास्ता शुरू होता है। सूची में सिर्फ़ इस ब्लॉक के बाद वाले ब्लॉक दिखते हैं। अगर कोई नहीं है, तो सूची नहीं दिखती।

### जर्नी के ब्लॉक के बाद आगे कूदें { #skip-ahead-after-a-journey-block }

1. जर्नी का कोई ऐसा ब्लॉक चुनें जिसमें शाखा नहीं बनती, जैसे **Send email** या **Wait** ब्लॉक।
2. **Afterwards, jump to** के नीचे कोई बाद वाला ब्लॉक चुनें।
3. यह ब्लॉक पूरा होने पर जर्नी उस ब्लॉक पर जाती है और बीच के ब्लॉक छोड़ देती है।

इसे किसी दूसरे रास्ते के ब्लॉक लाँघने के लिए इस्तेमाल करें। सूची में सिर्फ़ इस ब्लॉक के बाद वाले ब्लॉक दिखते हैं, और आखिरी ब्लॉक पर यह नहीं दिखती।

### जर्नी से वेबहुक कॉल करें { #call-a-webhook-from-a-journey }

1. **Webhook** चरण जोड़ें।
2. **Method** के बगल में **POST**, **GET** और **PUT** में घुमाने के लिए वैल्यू पर क्लिक करें। डिफ़ॉल्ट **POST** है।
3. **URL** में पता लिखें।
4. **Headers (JSON)** और **Body (JSON)** में भेजा जाने वाला डेटा लिखें।
5. चुनें कि जवाब कहाँ सेव हो।

### इंतज़ार करें, दोहराएँ और रास्ते एक साथ चलाएँ { #wait-repeat-and-run-paths-at-the-same-time }

ये चरण ऑटोमेशन फ़्लो में काम करते हैं। पूरी सूची के लिए [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md) देखें।

1. **Delay** या **Wait** चरण जोड़ें। **How long** के नीचे **Wait for** सेट करें और **minutes**, **hours** या **days** चुनें। यह चरण कोई वर्कर नहीं रोकता। यह कतार में सोता रहता है।
2. **For each** चरण जोड़ें। **What to repeat over** के नीचे **For each item in** में एक सूची लिखें, जैसे `{{2.lineItems}}`। लूप एक के अंदर एक नहीं हो सकते। भीतरी स्तर के लिए **Sub-flow** इस्तेमाल करें।
3. **Sub-flow** चरण जोड़ें। **Which flow** के नीचे **Runs** खोलें और फ़्लो चुनें। दूसरा फ़्लो अपने अंत तक चलता है, उसके बाद यह फ़्लो आगे बढ़ता है।
4. **Parallel** चरण जोड़ें। **Lanes** पढ़ें: हर लेन एक ही समय पर चलती है। कार्ड से और लेन जोड़ें।
5. लेन के बाद **Join** चरण जोड़ें। आगे बढ़ने से पहले यह अपने ऊपर की हर लेन का इंतज़ार करता है।
6. **Many paths by rule** चरण जोड़ें। **Add two paths** पर क्लिक करें, और ज़्यादा के लिए **Add a path** पर। हर रास्ते के लिए नियम सेट करें।
7. किसी रास्ते को रोकने के लिए **Turn this path off** पर क्लिक करें। उसे डिलीट करने के लिए **Remove this path** पर क्लिक करें। जिस रास्ते पर चरण हों, उसे हटाया नहीं जा सकता। पहले वे चरण डिलीट करें।

हर ऑटोमेशन चरण के लिए **Step name** में आप लिख सकते हैं कि वह चरण किसलिए है।

!!! tip "सुझाव"
    Many paths में पहला मेल खाने वाला रास्ता लिया जाता है। जो रिकॉर्ड किसी से मेल नहीं खाता, वह डिफ़ॉल्ट रास्ता लेता है।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Nothing asked yet — add an "Ask name" or "Ask phone" step before this one.** | **Create a lead** के पास सेव करने के लिए कोई जवाब नहीं है। | **CRM** चरण से पहले **Ask name** या **Ask phone** जोड़ें। |
| **No forms published yet.** | वर्कस्पेस में कोई पब्लिश किया हुआ फ़ॉर्म नहीं है। | एक फ़ॉर्म पब्लिश करें, फिर **Forms** दोबारा खोलें। |
| **No email templates yet.** | **Send email** के लिए चुनने को कोई टेम्प्लेट नहीं है। | एक ईमेल टेम्प्लेट बनाएँ, फिर चरण दोबारा खोलें। |
| **This path has steps on it. Delete those first.** | आपने ऐसा रास्ता हटाने की कोशिश की जिस पर अब भी चरण हैं। | रास्ते के चरण डिलीट करें, फिर उसे हटाएँ। |
| **No paths yet. A branch needs at least two.** | **Many paths by rule** में 2 से कम रास्ते हैं। | **Add two paths** पर क्लिक करें। |
| **Social** पोस्ट नहीं गई | **Mode** **DRAFT** है। | **Social** में ड्राफ़्ट की समीक्षा करें, या **Mode** को **PUBLISH** पर बदलें। |
| **Could not publish — the step that needs fixing is marked on the canvas** | कोई चरण अधूरा है। | निशान लगे चरण को चुनें, फ़ील्ड भरें, सेव करें और पब्लिश करें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [Google Sheets, Calendar, Meet और Contacts के चरण जोड़ें](flow-google-workspace-steps.md)
- [चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें](chatbot-action-blocks.md)
- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [कोई ऐप कनेक्ट करें और उसे फ़्लो में इस्तेमाल करें](../flows/connect-apps-for-flows.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)
- [फ़्लो में Action चरण और कंडीशन इस्तेमाल करें](flow-action-and-condition-steps.md)
