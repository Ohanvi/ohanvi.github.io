---
title: व्हाट्सऐप AI एजेंट सेट करें
description: AI एजेंट को अपना बिज़नेस सिखाएँ, नॉलेज के स्रोत जोड़ें, उसके स्किल चुनें, तय करें कि वह चैट आपकी टीम को कब सौंपे, उसे टेस्ट करें और लाइव करें।
---

# व्हाट्सऐप AI एजेंट सेट करें { #set-up-the-whatsapp-ai-agent }

ऐसा AI एजेंट सेट करें जो आपकी अपनी बिज़नेस जानकारी से व्हाट्सऐप पर ग्राहकों को जवाब दे। आखिर में एजेंट आपका बिज़नेस जानता है, मदद न कर पाने पर चैट आपकी टीम को सौंप देता है, और टेस्ट नंबरों के लिए या हर ग्राहक के लिए लाइव है।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर कनेक्ट हो। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आपको **WhatsApp** पैनल में **AI Agent** दिखता हो। इसके लिए वही एक्सेस चाहिए जो **Flows** के लिए चाहिए। अगर यह नहीं दिख रहा, तो अपने एडमिन से पूछें। देखें [टीम सदस्य, रोल और अनुमतियाँ प्रबंधित करें](../settings/roles-and-permissions.md)।
- आपके पास क्रेडिट हों। ग्राहक तक पहुँचे हर AI जवाब का चार्ज आपके क्रेडिट से कटता है। देखें [क्रेडिट और बिलिंग](../credits-and-billing.md)।

!!! note "AI यहाँ प्रबंधित होता है, Configuration में नहीं"
    AI रिप्लाई एजेंट और ऑटो-रिप्लाई अब नंबर की कॉन्फ़िगरेशन में सेट नहीं होते। AI जवाबों को AI Assistant हब और इस पेज से प्रबंधित करें।

## चरण { #steps }

### पहले जानें कि जवाब कौन देता है { #know-who-answers-first }

लेफ़्ट रेल में **WhatsApp** खोलें, फिर **AI Agent** चुनें। **Who answers your customer** कार्ड ऊपर से नीचे का क्रम दिखाता है:

1. **A teammate is already chatting** — AI चुप रहता है, ताकि कोई आपकी टीम के बीच में न बोले।
2. **A chatbot flow is running** — फ़्लो खत्म होने या टाइम आउट होने तक बातचीत उसी के पास रहती है।
3. **Otherwise this AI agent replies** — उस सबसे जो आपने इस पेज पर सेट किया है।
4. **If the agent cannot answer** — चैट इनबॉक्स में चली जाती है और आपकी टीम को नोटिफ़िकेशन मिलता है।

जब AI बंद होता है, तो लाइन 3 में **This AI agent would reply — but it is paused** लिखा होता है, और ऊपर की एक बार **Turn AI on** का विकल्प देती है।

![AI Agent पेज, जिसमें AI paused बार, बाईं ओर की सूची, Who answers your customer कार्ड और Test your Agent पैनल हैं](../assets/screenshots/whatsapp-ai-agent-1-who-answers.png)

### अपने बिज़नेस के बारे में बताएँ { #describe-your-business }

1. बाईं ओर की सूची में **Business Profile** चुनें।
2. **Website** में अपनी साइट का पता लिखें, फिर **Regenerate from site** पर क्लिक करें। Ohanvi वेबसाइट से आपकी जानकारी का ड्राफ़्ट बनाता है।
3. **Agent / business name**, **Greeting message (optional)**, **Store currency**, **Business type** और **What the business does** जाँचें। अगर आप बिज़नेस टाइप में **Other** चुनते हैं, तो उसका वर्णन लिखें।

    ![Business Profile सेक्शन, जिसमें Website, Regenerate from site, Agent / business name, Greeting message, Store currency, Business type और What the business does हैं](../assets/screenshots/whatsapp-ai-agent-2-business-profile.png)

4. **Persona & guardrails** के नीचे ज़रूरत के हिसाब से **Allowed topics**, **Forbidden topics**, **Off-topic response** और **Escalation triggers** भरें।
5. **Tone** चुनें। एक टोन और **Response length** चुनें: **Short**, **Medium** या **Long**।
6. **Save changes** पर क्लिक करें। **AI agent saved.** मैसेज आता है।

### पर्सोना, अतिरिक्त नोट और कस्टम टोन जोड़ें { #add-a-persona-extra-notes-and-a-custom-tone }

1. बाईं ओर की सूची में **Business Profile** चुनें।
2. **Persona & guardrails** के नीचे **Persona statement** लिखें, जैसे `You are Meera, our support assistant.`
3. ऐसी हर बात के लिए **Additional notes** लिखें जो एजेंट को हमेशा या कभी नहीं करनी है और जो बाकी बॉक्स में नहीं आती।
4. **Tone** चुनें। एक टोन और **Response length** चुनें।
5. **Advanced tone settings** को खोलने के लिए उस पर क्लिक करें।
6. **Custom tone instructions** लिखें, जैसे `Always answer in Hinglish. Address customers as "ji".`
7. **Save changes** पर क्लिक करें।

### नॉलेज जोड़ें { #add-knowledge }

1. **Knowledge** चुनें।
2. कोई स्रोत जोड़ें:
    - **Crawl a page** — आपकी साइट का कोई भी सार्वजनिक URL।
    - **Upload files** — PDF, DOCX, TXT या CSV, हर एक अधिकतम 50 MB की।
    - **Paste text** — पॉलिसी, स्क्रिप्ट या प्राइस लिस्ट।

    ![Knowledge, जिसमें Crawl a page, Upload files और Paste text कार्ड हैं, और Add question के साथ Quick Q&A है](../assets/screenshots/whatsapp-ai-agent-5-knowledge.png)

3. **Quick Q&A** के नीचे **Add question** पर क्लिक करें और एक सवाल और उसका **Answer** लिखें।
4. **Save changes** पर क्लिक करें। स्रोत सेव करने के कुछ ही सेकंड में इंडेक्स हो जाते हैं।

अगर किसी स्रोत पर **Not indexed yet — use Re-index all** दिखता है, तो **Re-index all** पर क्लिक करें।

### नाम के साथ पेज, फ़ाइल या टेक्स्ट जोड़ें { #add-a-page-a-file-or-text-by-name }

1. **Knowledge** चुनें।
2. पेज जोड़ने के लिए **Crawl a page** पर क्लिक करें। **Crawl a page** विंडो में **Name** और **Page URL** लिखें, फिर **Add** पर क्लिक करें।
3. टेक्स्ट जोड़ने के लिए **Paste text** पर क्लिक करें। **Paste text** विंडो में **Name** और **Text** लिखें, फिर **Add** पर क्लिक करें।
4. फ़ाइल जोड़ने के लिए **Upload files** पर क्लिक करें और PDF, DOCX, TXT, CSV या MD फ़ाइल चुनें। **[file name] added — save to index it.** मैसेज आता है।
5. नए स्रोतों को इंडेक्स करने के लिए **Save changes** पर क्लिक करें।
6. किसी स्रोत को हटाने के लिए ट्रैश आइकन (**Remove**) पर क्लिक करें, फिर **Save changes** पर क्लिक करें।

अपलोड की गई फ़ाइल का लिंक 7 दिन चलता है। उसके बाद, उसे दोबारा इंडेक्स करने के लिए फ़ाइल फिर से अपलोड करें। देखें [AI एजेंट के जवाबों की समीक्षा करें और उन्हें सुधारें](review-and-correct-ai-agent-answers.md)।

### वे इमेज जोड़ें जो एजेंट भेज सकता है { #add-images-the-agent-may-send }

1. बाईं ओर की सूची में **Images** चुनें।
2. **Image URL** में तस्वीर का वेब पता लिखें, जैसे प्रोडक्ट की फ़ोटो, मेन्यू या ब्रोशर। पहले फ़ाइल अपलोड करनी हो तो [मीडिया लाइब्रेरी](manage-media-library.md) का इस्तेमाल करें।
3. **Add** पर क्लिक करें। इमेज सूची में दिखती है।
4. एजेंट को कोई इमेज भेजने से रोकने के लिए उसके बगल के ट्रैश आइकन (**Remove**) पर क्लिक करें।
5. **Save changes** पर क्लिक करें।

प्रोडक्ट की इमेज यहाँ तब दिखती हैं जब आप प्रोडक्ट जोड़ लेते हैं।

### स्किल चुनें { #choose-skills }

1. **Skills** चुनें। हर स्किल एक काम है जो एजेंट कर सकता है।
2. किसी स्किल को खोलें और उसे सेट करने के लिए **Configure** पर क्लिक करें:

    | स्किल | यह क्या करता है |
    | --- | --- |
    | **FAQ / Support** | आपकी नॉलेज से आम सवालों के जवाब देता है। |
    | **Human Handoff** | जब ग्राहक किसी व्यक्ति को माँगे, परेशान हो, या कोई दायरे से बाहर की बात उठाए, तो चैट आपकी टीम को सौंप देता है। |
    | **Lead Qualification** | संभावित ग्राहक से आपके सवाल पूछता है और लीड को आपके CRM में भेज सकता है। |
    | **Order Status** | कनेक्ट किए गए एक्शन से ऑर्डर देखता है और उसका स्टेटस बताता है। |

3. अपना खुद का काम जोड़ने के लिए **Custom skills** के नीचे **Add custom skill** पर क्लिक करें।

उसी सूची में **Products**, **Payments**, **Meta Ads** और **Voice calls** एजेंट को प्रोडक्ट सुझाने, पेमेंट लिंक भेजने, विज्ञापन से आई चैट का जवाब देने और कॉलिंग एजेंट के साथ काम करने देते हैं।

### बताएँ कि स्किल कब इस्तेमाल हो और वह क्या इकट्ठा करे { #say-when-a-skill-is-used-and-what-it-collects }

हर स्किल में यही 2 बॉक्स होते हैं।

1. **Skills** चुनें, किसी स्किल को खोलें और **Configure** पर क्लिक करें।
2. **When it is used** में वह मौका बताएँ, जैसे `The customer asks about delivery times or shipping charges`।
3. **Information to collect** के नीचे **Add question** पर क्लिक करें।
4. वह **Question** लिखें जो एजेंट पूछता है, जैसे `Which city are you in?`
5. **Save as attribute** लिखें, जैसे `City`। हर जवाब संपर्क पर उसी एट्रिब्यूट के नाम से सेव होता है।
6. स्किल को चालू करने के लिए उस पर लगा बॉक्स टिक करें।
7. **Save changes** पर क्लिक करें।

### Lead Qualification सेट करें { #set-up-lead-qualification }

1. **Lead Qualification** को खोलें और **Configure** पर क्लिक करें।
2. **First qualifying question** लिखें।
3. **Question 2** और **Question 3** लिखें।
4. **Questions to collect** के नीचे वह हर जानकारी लिखें जो एजेंट लीड को आपकी टीम को सौंपने से पहले जुटाता है, फिर **Add** पर क्लिक करें। [VERIFY: example text for this box]
5. वैकल्पिक: **Template the agent can send (optional)** लिखें। किसी Approved टेम्प्लेट का नाम इस्तेमाल करें।
6. वैकल्पिक: **Use when contacts arrive from this ad** लिखें। सभी विज्ञापनों के लिए इसे **Any / no ad** रहने दें।
7. वैकल्पिक: **Push qualified leads to your CRM (optional)** टिक करें।
8. **Save changes** पर क्लिक करें।

### कस्टम स्किल जोड़ें { #add-a-custom-skill }

1. **Custom skills** के नीचे **Add custom skill** पर क्लिक करें। एक नया स्किल कार्ड खुलता है।
2. **Icon** लिखें, जैसे एक इमोजी।
3. **Skill name** लिखें, जैसे `Book a demo`।
4. **Step-by-step instructions** लिखें। चरणों को नंबर दें, जैसे `1. Ask which product…`
5. ऊपर की तरह **When it is used** और **Information to collect** भरें।
6. स्किल को चालू करने के लिए कार्ड पर लगा बॉक्स टिक करें।
7. स्किल हटाने के लिए **Delete skill** पर क्लिक करें।
8. **Save changes** पर क्लिक करें।

### एजेंट को प्रोडक्ट सुझाने दें { #let-the-agent-recommend-products }

1. **Products** चुनें।
2. **Agent can recommend products** चालू करें।
3. अपने स्टोर से प्रोडक्ट लाने के लिए **Sync from your store** पर क्लिक करें। इंटीग्रेशन स्क्रीन खुलती है।
4. हाथ से जोड़ने के लिए **Add product** पर क्लिक करें। **Add product** विंडो खुलती है।
5. **Name**, `₹4,999` जैसी **Price** और **Description** लिखें।
6. वैकल्पिक: **Image URL (optional)** लिखें।
7. **Add** पर क्लिक करें।
8. किसी प्रोडक्ट को हटाने के लिए ट्रैश आइकन (**Remove**) पर क्लिक करें।
9. **Save changes** पर क्लिक करें।

अगर कोई प्रोडक्ट नहीं है, तो सूची में **No products yet. Add one by hand, or sync your connected store.** लिखा आता है। पहले कैटलॉग बनाने के लिए देखें [अपना व्हाट्सऐप कैटलॉग सेट करें](set-up-whatsapp-catalog.md)।

### एजेंट को पेमेंट लिंक भेजने दें { #let-the-agent-send-payment-links }

1. **Payments** चुनें।

    ![Products और Payments कार्ड, जिनमें Agent can send payment links स्विच, Razorpay और PayU गेटवे और Out-of-window template बॉक्स हैं](../assets/screenshots/whatsapp-ai-agent-2-payments.png)

2. **Agent can send payment links** चालू करें।
3. वैकल्पिक: उस गेटवे को इस्तेमाल करने के लिए **Razorpay** या **PayU** पर क्लिक करें। चुनाव हटाने के लिए उस पर फिर क्लिक करें।
4. वैकल्पिक: **Out-of-window template (optional)** लिखें, जैसे `order_payment_reminder`। अगर ग्राहक 24 घंटे की विंडो के बाद चेकआउट करता है, तो एजेंट यह Approved टेम्प्लेट भेजता है।
5. **Save changes** पर क्लिक करें।

अगर कोई चुनाव नहीं किया गया है, तो पेज पर **No gateway override — the org's connected payment gateway is used.** दिखता है।

### विज्ञापन की चैट एजेंट को भेजें { #send-ad-chats-to-the-agent }

1. **Meta Ads** चुनें।

    ![Meta Ads कार्ड, जिसमें Agent answers ad-driven conversations और Add ad हैं, और Voice calls कार्ड, जिसमें in-call और post-call टेम्प्लेट बॉक्स हैं](../assets/screenshots/whatsapp-ai-agent-3-meta-ads-voice.png)

2. **Agent answers ad-driven conversations** चालू करें। अपने विज्ञापन देखने के लिए **Open Ads Manager** पर क्लिक करें। देखें [विज्ञापन बनाएँ](ads-manager/create-an-ad.md)।
3. **Add ad** पर क्लिक करें। **Add ad** विंडो खुलती है।
4. **Ad name / id** लिखें।
5. उस विज्ञापन से आने वाले लोगों के लिए **Custom greeting** लिखें।
6. **Context for the agent** लिखें, ताकि वह जान सके कि विज्ञापन में क्या वादा किया गया था।
7. **Add** पर क्लिक करें।
8. किसी विज्ञापन को हटाने के लिए ट्रैश आइकन (**Remove**) पर क्लिक करें।
9. **Save changes** पर क्लिक करें।

### वॉइस कॉल कनेक्ट करें { #connect-voice-calls }

इसका इस्तेमाल तब करें जब कोई AI कॉलिंग एजेंट कॉल के दौरान या बाद में व्हाट्सऐप मैसेज भेजे।

1. **Voice calls** चुनें।
2. **In-call template (optional)** और **Post-call template (optional)** लिखें। Approved टेम्प्लेट के नाम इस्तेमाल करें।
3. **Language** लिखें, जैसे `en_US`।
4. **Template variables** के नीचे **Add variable** पर क्लिक करें।
5. **{{n}}** में वेरिएबल का नंबर लिखें, जैसे `1`।
6. **Call field** में कॉल की वह जानकारी लिखें जो उसे भरती है, जैसे `customer_name`, `call_summary` या `agent_name`।
7. **Manage** → **API Key** खोलें और अपनी API key कॉपी करें।
8. अपने कॉलिंग प्लेटफ़ॉर्म को पेज पर दिखाए गए एंडपॉइंट पर लगाएँ, और key को बियरर टोकन के रूप में दें।
9. **Save changes** पर क्लिक करें।

पेज पर यह उदाहरण दिखता है:

```
POST /api/v1/wa/calls/event
Authorization: Bearer <api key>
{ "to": "919876543210", "stage": "POST_CALL",
  "fields": { "customer_name": "Asha", "call_summary": "Asked for a quote" } }
```

अपने व्हाट्सऐप नंबर पर कॉलिंग के लिए देखें [व्हाट्सऐप कॉलिंग](whatsapp-calling.md)।

### API एक्शन जोड़ें { #add-an-api-action }

एक्शन एजेंट को लाइव जानकारी देखने या कोई काम पूरा करने देता है, जैसे ऑर्डर का स्टेटस या नई लीड।

1. **Settings** चुनें। **Actions** तक स्क्रॉल करें।
2. **Add custom API action** पर क्लिक करें। विंडो खुलती है।
3. वैकल्पिक: **Paste cURL (optional)** में cURL कमांड पेस्ट करें, फिर **Fill from cURL** पर क्लिक करें। यह मेथड, URL, हेडर, बॉडी और बियरर टोकन भर देता है।
4. **Action name** लिखें, जैसे `Check order status`।
5. **When should the agent call it?** में वह मौका बताएँ, जैसे `The customer asks where their order is and gives an order number`।
6. **Intent group** लिखें, जैसे `orders`, `appointments` या `crm`।
7. **Sensitivity** चुनें: **Low — runs without asking** या **High — confirm first**।
8. **Method** चुनें: **GET**, **POST**, **PUT**, **PATCH** या **DELETE**।
9. **URL** लिखें, जैसे `https://api.example.com/orders/{{order_id}}`।
10. **Headers** और **Query params** लिखें, हर लाइन में एक, `Key: value` के रूप में।
11. **POST**, **PUT** या **PATCH** के लिए **Body** लिखें, जैसे `{"order_id": "{{order_id}}"}`।
12. **Authentication** चुनें: **None**, **Bearer token**, **Basic auth** या **API key (header)**। जो बॉक्स दिखें उन्हें भरें।
13. **Variables** के नीचे **Add variable** पर क्लिक करें। **Name** लिखें, जैसे `order_id`, और **What it is**।
14. **Examples (one per line, 1–5)** लिखें, जैसे `Customer: "where is order 1001?" → order_id=1001`।
15. वैकल्पिक: **Test call — sample values (name=value per line)** में सैंपल वैल्यू लिखें, फिर **Test call** पर क्लिक करें। नतीजे में HTTP स्टेटस और बॉडी दिखती है, या एरर।
16. **Add** पर क्लिक करें। जब आप कोई एक्शन एडिट करते हैं, तो बटन पर **Save** लिखा होता है।

एक्शन के लिए नाम और URL ज़रूरी हैं। शील्ड आइकन **High** सेंसिटिविटी वाले एक्शन पर लगा होता है। किसी एक्शन को बदलने या डिलीट करने के लिए उसके बगल के पेंसिल (**Edit**) और ट्रैश (**Remove**) आइकन का इस्तेमाल करें। अपने एक्शन रखने के लिए पेज पर **Save changes** पर क्लिक करें।

!!! tip "सुझाव: सेव करने से पहले टेस्ट करें"
    **Test call** आपके URL को असली रिक्वेस्ट भेजता है। ऐसी सैंपल वैल्यू इस्तेमाल करें जिन्हें भेजना सुरक्षित हो।

### इंसान को हैंडऑफ़ सेट करें { #set-the-handoff-to-a-human }

1. **Settings** चुनें।
2. **Hand off to a human** के नीचे वे **Trigger phrases** लिखें जो हैंडऑफ़ शुरू करते हैं, जैसे **talk to a human**।
3. वह **Handoff message** लिखें जो ग्राहक को मिलता है।
4. वैकल्पिक: **Handoff webhook (optional)** के नीचे, अपने हेल्पडेस्क या CRM को हर हैंडऑफ़ की जानकारी देने के लिए **Webhook URL** जोड़ें।
5. उस समय के लिए **Fallback message** लिखें जब एजेंट के पास जवाब न हो।

हैंडऑफ़ की गई चैट इनबॉक्स में चली जाती है और आपकी टीम को नोटिफ़िकेशन मिलता है। देखें [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)।

### हैंडऑफ़ वेबहुक को सुरक्षित करें { #secure-the-handoff-webhook }

1. **Settings** चुनें। **Hand off to a human** के नीचे **Webhook URL** ढूँढें।
2. **Authorization header (optional)** लिखें, जैसे `Bearer …`।
3. **Extra headers (JSON, optional)** लिखें, जैसे `{"X-Source":"whatsapp"}`।
4. **Save changes** पर क्लिक करें।

Ohanvi हर हैंडऑफ़ को JSON के रूप में इन फ़ील्ड के साथ भेजता है: `event`, `orgId`, `phone`, `contactName`, `reason`, `lastMessage` और `at`।

### एजेंट को टेस्ट करें { #test-the-agent }

1. **Test agent** पर क्लिक करें। **Test your Agent** पैनल खुलता है।
2. अपने सेव किए ताज़ा बदलाव टेस्ट करने के लिए **Train** चुना रहने दें। **Ask your agent something…** में लिखें और जवाब पढ़ें। टेस्ट के जवाब ग्राहकों को नहीं दिखते। दोबारा शुरू करने के लिए **New chat** पर क्लिक करें।

    ![Train पर Test your Agent पैनल, जिसमें एक टेस्ट सवाल और एजेंट का जवाब है](../assets/screenshots/whatsapp-ai-agent-3-test.png)

3. अगर कोई जवाब गलत है, तो जवाब के नीचे पेंसिल आइकन (**Correct this answer**) पर क्लिक करें, **What the agent should say** लिखें, फिर **Save & teach** पर क्लिक करें।

### लाइव करें { #go-live }

1. **Settings** → **Test numbers & going live** के नीचे, एजेंट को पहले आज़माने के लिए अधिकतम 3 व्हाट्सऐप नंबर जोड़ें। जब तक सूची में कोई नंबर है, सिर्फ़ उन्हीं नंबरों को एजेंट के जवाब मिलते हैं।
2. **Ready to go live** जाँचें। यह दिखाता है कि कितने पूरे हैं, जैसे **1 of 4**, और **Business profile**, **Knowledge added**, **Skills configured** और **Published** की सूची देता है। अगर उसके नीचे **Not answering — no key configured anywhere** दिखे, तो **Manage AI provider** पर क्लिक करें और पहले एक key जोड़ें।

    ![AI Agent Settings, जिसमें Ready to go live 1 of 4, AI provider की चेतावनी, AI paused स्विच, Fallback message और Test numbers हैं](../assets/screenshots/whatsapp-ai-agent-4-go-live.png)

3. **Publish & go live** पर क्लिक करें। **Published — customers now get this version.** मैसेज आता है।
4. **Turn AI on** से एजेंट को चालू करें। स्टेटस में **AI is live** दिखता है।
5. जब आप हर ग्राहक के लिए तैयार हों, तो टेस्ट नंबर हटा दें।

एजेंट को रोकने के लिए **Pause AI** पर क्लिक करें। सेव किए बदलाव ग्राहकों तक तभी पहुँचते हैं जब आप पब्लिश करते हैं।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Tell us your business type — "Other" needs a description.** | **Business type** **Other** है और वर्णन नहीं है। | अपने बिज़नेस टाइप का वर्णन लिखें, फिर सेव करें। |
| **Enter your website first.** | **Website** खाली है। | अपनी साइट का पता लिखें, फिर **Regenerate from site** पर क्लिक करें। |
| **Could not draft anything from that site.** | साइट पढ़ी नहीं जा सकी। | **What the business does** हाथ से भरें। |
| **Files must be 50 MB or smaller.** | फ़ाइल बहुत बड़ी है। | फ़ाइल को बाँटें या कंप्रेस करें। |
| ग्राहकों को पुराने जवाब मिल रहे हैं | आपके बदलाव सेव हैं पर पब्लिश नहीं हुए। | **Publish & go live** पर क्लिक करें। |
| एजेंट ने जवाब देना बंद कर दिया | आपके क्रेडिट खत्म हो गए, या सिर्फ़ टेस्ट नंबरों को जवाब मिल रहे हैं। | रीचार्ज करें, और टेस्ट नंबर हटा दें। देखें [जब क्रेडिट कम हों या खत्म हो जाएँ](../billing/low-or-empty-credits.md)। |

## संबंधित गाइड { #related }

- [AI एजेंट के जवाबों की समीक्षा करें और उन्हें सुधारें](review-and-correct-ai-agent-answers.md)
- [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)
- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [अपनी खुद की या मैनेज्ड सेवाएँ चुनें](../settings/choose-connectors.md)
- [अपने अकाउंट में पैसे जोड़ें](../add-funds.md)
