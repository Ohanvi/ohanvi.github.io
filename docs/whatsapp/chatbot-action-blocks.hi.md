---
title: चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें
description: व्हाट्सऐप चैटबॉट फ़्लो से कोई वैल्यू सेव करें, टैग जोड़ें, API कॉल करें, चैट एजेंट को सौंपें, AI से जवाब दिलवाएँ, दूसरे फ़्लो पर जाएँ या बातचीत खत्म करें।
---

# चैटबॉट फ़्लो में एक्शन ब्लॉक जोड़ें { #add-action-blocks-to-a-chatbot-flow }

ऐसे ब्लॉक जोड़ें जो चैट के बैकग्राउंड में कुछ करते हैं: संपर्क पर कोई वैल्यू सेव करना, उसे टैग करना, API कॉल करना, चैट को एजेंट को सौंपना, AI से जवाब दिलवाना, दूसरे फ़्लो पर जाना, या बातचीत खत्म करना। हर ब्लॉक में करीब 2 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- कैनवास पर आपका चैटबॉट फ़्लो खुला है। देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।
- **Jump to flow** और **Connect Flow** के लिए **WhatsApp** → **Flows** में कम से कम 1 और फ़्लो मौजूद है।
- **Chat with agent** के लिए आपकी टीम के सदस्य जोड़े जा चुके हैं। देखें [व्हाट्सऐप एजेंट जोड़ें](add-whatsapp-agents.md)।

## हर ब्लॉक क्या करता है { #what-each-block-does }

| ब्लॉक | चैट में क्या होता है |
| --- | --- |
| **Set Attribute** | संपर्क पर एक वैल्यू सेव करता है। |
| **Add Tag** | संपर्क को टैग करता है। |
| **Condition** | चैट को **True** या **False** एग्ज़िट पर भेजता है। देखें [नाम, फ़ोन, ईमेल और पता पूछें, फिर इंतज़ार करें या ब्रांच करें](chatbot-ask-details-blocks.md)। |
| **Connect Flow** | दूसरा फ़्लो चलाता है, फिर वापस आता है। |
| **API Request** | बाहरी API को कॉल करता है और जवाब रखता है। |
| **Chat with agent** | चैट को किसी इंसान को सौंपता है। |
| **AI Reply** | AI से जवाब लिखवाता है। |
| **Jump to flow** | बातचीत को दूसरे फ़्लो में ले जाता है। यह वापस नहीं आता। |
| **End** | बातचीत खत्म करता है। |

## चरण { #steps }

### Actions ब्लॉक खोलें { #open-the-actions-blocks }

1. **WhatsApp** → **Flows** खोलें, फिर अपना फ़्लो खोलें।
2. जिस ब्लॉक के बाद एक्शन चलना है, उसके बाद **+** पर क्लिक करें। **Add a step after** मेनू खुलता है।
3. **All steps** पर क्लिक करें।
4. **Actions** समूह खोजें। इस पेज के सभी ब्लॉक उसी में हैं।

    ![Actions समूह, जिसमें Set Attribute, Add Tag, Condition, Connect Flow, API Request, Chat with agent, AI Reply और Jump to flow हैं](../assets/screenshots/whatsapp-chatbot-4-actions-group.png)

5. जो ब्लॉक चाहिए उस पर क्लिक करें। उसकी सेटिंग्स दाईं पैनल में खुलती हैं।

### संपर्क पर वैल्यू सेव करें { #save-a-value-on-the-contact }

1. **Set Attribute** ब्लॉक जोड़ें।
2. **Question** में वह टेक्स्ट लिखें जो ब्लॉक इस्तेमाल करता है। बॉक्स में `Type your question...` दिखता है।
3. **Save the answer as** के नीचे **Choose…** पर क्लिक करें और नाम चुनें: **name**, **contact_number**, **email**, **address**, **city**, **interests** या **goal**।
4. अपना नाम इस्तेमाल करने के लिए **Custom…** चुनें, `company_name` जैसा नाम लिखें और **Use** पर क्लिक करें। इसे मैसेज में `{{company_name}}` के रूप में इस्तेमाल करें।
5. **The answer should be** के नीचे वैल्यू का प्रकार चुनें: **Short text**, **Long text**, **Number**, **Email**, **Phone number**, **Date**, **Time**, **One choice**, **Several choices**, **Yes or no**, **A file**, **A location**, **A rating** या **An NPS score**।

!!! note "Set Attribute और Ask Question"
    [VERIFY: Set Attribute uses the same Question, Save the answer as and The answer should be fields as Ask Question.] सेव किया हुआ जवाब मैसेज में कैसे दिखता है, यह जानने के लिए देखें [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)।

### संपर्क को टैग करें { #tag-the-contact }

1. **Add Tag** ब्लॉक जोड़ें।
2. **Tag** में टैग का नाम लिखें। बॉक्स में `tag name` दिखता है।
3. **WhatsApp** → **Manage** → **Tags** में टैग जाँचें। देखें [टैग, यूज़र एट्रिब्यूट और कस्टम इवेंट प्रबंधित करें](tags-attributes-and-events.md)।

### दूसरा फ़्लो चलाएँ और वापस आएँ { #run-another-flow-and-come-back }

1. **Connect Flow** ब्लॉक जोड़ें। विवरण में **Run another flow, then come back** लिखा होता है।
2. **Step name** में लिखें कि यह चरण किस लिए है। यह वैकल्पिक है।
3. **Which flow** के नीचे **Runs** खोलें और फ़्लो चुनें।
4. अगर सूची खाली है, तो पैनल में **No other flows to run yet.** लिखा होता है। पहले दूसरा फ़्लो बनाएँ।

दूसरा फ़्लो अपने अंत तक चलता है, उसके बाद यह फ़्लो आगे बढ़ता है।

### बाहरी API कॉल करें { #call-an-external-api }

1. **API Request** ब्लॉक जोड़ें।
2. **Method** के बगल में वैल्यू पर क्लिक करके **GET**, **POST**, **PUT**, **PATCH** और **DELETE** में बदलें। डिफ़ॉल्ट **GET** है।
3. **URL** में पता लिखें, जैसे `https://api.example.com/orders/{{orderId}}`।
4. **Headers (JSON)** में हेडर लिखें, जैसे `{ "Authorization": "Bearer …" }`।
5. **Body (JSON)** में वह डेटा लिखें जो आप भेजते हैं, जैसे `{ "phone": "{{phone}}" }`।
6. **Save the answer as** के नीचे वह नाम चुनें जिसमें जवाब रखा जाएगा, जैसा "संपर्क पर वैल्यू सेव करें" में किया था।

सेव किए हुए जवाब को URL, हेडर या बॉडी में दोहरे कर्ली ब्रैकेट के साथ, छोटे अक्षरों में इस्तेमाल करें।

!!! warning "चेतावनी"
    ब्लॉक हर बार उस पते को कॉल करता है जब कोई ग्राहक उस तक पहुँचता है। पहले अपने नंबर से टेस्ट करें।

### चैट को एजेंट को सौंपें { #hand-the-chat-to-an-agent }

1. **Chat with agent** ब्लॉक जोड़ें। कैनवास पर कार्ड पर **Handoff** लिखा होता है।
2. पैनल में नोट पढ़ें: **Handoff to agent**। ब्लॉक में कोई फ़ील्ड नहीं है।
3. इसे उस मैसेज के बाद रखें जो ग्राहक को बताता है कि कोई इंसान जवाब देगा, जैसे `Connecting you to our team.`

बातचीत **WhatsApp** → **Inbox** में **Requesting** में चली जाती है, जहाँ कोई एजेंट उसे उठाता है। देखें [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)।

### AI से जवाब दिलवाएँ { #let-ai-reply }

1. **AI Reply** ब्लॉक जोड़ें।
2. नोट पढ़ें: **The AI writes this reply**। शब्द हर ग्राहक के लिए अलग होते हैं। पब्लिश करने से पहले टेस्ट करें।
3. **Guidance for the AI (optional)** में AI को बताएँ कि क्या जवाब देना है, जैसे `Answer questions about our return policy in one short paragraph.`
4. **Model (optional)** में मॉडल का नाम लिखें। डिफ़ॉल्ट इस्तेमाल करने के लिए इसे खाली छोड़ें।

### दूसरे फ़्लो में जारी रखें { #continue-in-another-flow }

1. **Jump to flow** ब्लॉक जोड़ें।
2. **Continue in** के बगल में **Choose a flow** पर क्लिक करें। **Jump to which flow** सूची खुलती है।
3. फ़्लो चुनें। बटन पर अब उसका नाम दिखता है।
4. अगर सूची में **No other flows to jump to yet.** लिखा है, तो पहले दूसरा फ़्लो बनाएँ।

बातचीत वहाँ चली जाती है और वापस नहीं आती। बाद में वापस आना हो तो इसके बजाय **Connect Flow** इस्तेमाल करें।

| ज़रूरत | क्या इस्तेमाल करें |
| --- | --- |
| दूसरा फ़्लो चलाएँ, फिर यहीं आगे बढ़ें | **Connect Flow** |
| दूसरे फ़्लो में जाएँ और वहीं रहें | **Jump to flow** |

### बातचीत खत्म करें { #end-the-conversation }

1. किसी रास्ते के आखिरी ब्लॉक के रूप में **End** ब्लॉक जोड़ें। कैनवास पर कार्ड पर **End conversation** लिखा होता है।
2. नोट पढ़ें: **Ends the conversation**। बॉट यहीं रुक जाता है और सेशन बंद हो जाता है।

### सेव करें और पब्लिश करें { #save-and-publish }

1. **Save** पर क्लिक करें। चिप पर **DRAFT** लिखा होता है।
2. **Test** टैब खोलें और अपने कीवर्ड के लिए **Check** पर क्लिक करें।
3. **Publish** पर क्लिक करें।
4. अपने टेस्ट फ़ोन से कीवर्ड भेजें और रास्ते का पालन करें। संपर्क में नया टैग या वैल्यू जाँचें।

## वीडियो वॉकथ्रू { #video-walkthrough }

[VIDEO]

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No other flows to jump to yet.** | आपके वर्कस्पेस में सिर्फ़ यही फ़्लो है। | दूसरा फ़्लो बनाकर सेव करें, फिर **Jump to flow** दोबारा खोलें। |
| **No other flows to run yet.** | आपके वर्कस्पेस में सिर्फ़ यही फ़्लो है। | दूसरा फ़्लो बनाएँ, फिर **Connect Flow** दोबारा खोलें। |
| **Could not publish — the step that needs fixing is marked on the canvas** | कोई ब्लॉक अधूरा है, जैसे टैग का नाम नहीं है। | चिह्नित कार्ड खोलें, छूटी फ़ील्ड भरें, सेव करें और पब्लिश करें। |
| AI हर बार अलग जवाब देता है | **AI Reply** हर ग्राहक के लिए नए शब्द लिखता है। | साफ़ **Guidance for the AI (optional)** जोड़ें, और पब्लिश करने से पहले कई बार टेस्ट करें। |
| **Chat with agent** के बाद बॉट आगे नहीं बढ़ता | चैट अब एजेंट के पास है। फ़्लो वहीं रुक जाता है। | **WhatsApp** → **Inbox** से जवाब दें। |
| API का जवाब बाद के मैसेज में इस्तेमाल नहीं हो रहा | जवाब उस नाम से सेव नहीं हुआ जो मैसेज इस्तेमाल करता है। | **Save the answer as** जाँचें और वही नाम छोटे अक्षरों में इस्तेमाल करें, जैसे `{{orderId}}`। |

## संबंधित गाइड { #related }

- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [चैटबॉट में ऑर्डर और बुकिंग खोजें](chatbot-store-action-blocks.md)
- [फ़्लो में इंटीग्रेशन और एडवांस्ड चरण जोड़ें](chatbot-integration-and-advanced-steps.md)
- [व्हाट्सऐप एजेंट जोड़ें](add-whatsapp-agents.md)
- [व्हाट्सऐप इनबॉक्स का इस्तेमाल करें](use-whatsapp-inbox.md)
- [फ़्लो टेस्ट करें और फ़ेल हुए रन ठीक करें](../flows/test-and-monitor-flows.md)
