---
title: फ़्लो में Action स्टेप और कंडीशन इस्तेमाल करें
description: बना-बनाया एक्शन चुनें, हर फ़ील्ड भरें, Zapier या Pabbly को डेटा भेजें, और कंडीशन से रन को रोकें या अलग रास्तों पर भेजें। हर फ़ील्ड समझाई गई है।
---

# फ़्लो में Action स्टेप और कंडीशन इस्तेमाल करें { #use-the-action-step-and-conditions-in-a-flow }

**Action** स्टेप आपके लिए एक काम करता है। जैसे WhatsApp टेम्प्लेट भेजना, CRM लीड बनाना, किसी को ईमेल जर्नी में जोड़ना या Zapier को कॉल करना। **Continue only if…** और **Many paths by rule** स्टेप तय करते हैं कि कौन-से रन आगे जाएँ। इस पेज पर हर स्टेप की हर फ़ील्ड समझाई गई है, और यह भी कि क्या लिखना है। इसे पढ़ने में करीब 10 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- बिल्डर में आपका एक फ़्लो खुला हो। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- **Send a WhatsApp template** के लिए आपके पास कम से कम एक ऐसा टेम्प्लेट हो जिसका स्टेटस **Approved** है। देखें [WhatsApp मैसेज टेम्प्लेट बनाएँ](create-message-template.md)।
- **Send to Zapier / Pabbly** के लिए आपके पास Zap का **Catch Hook** URL या Pabbly का वेबहुक URL हो।
- कनेक्टर ऐप के लिए वह ऐप **Integrations** → **Connectors** में कनेक्ट हो। देखें [फ़्लो के लिए ऐप कनेक्ट करें](../flows/connect-apps-for-flows.md)।

## Action स्टेप क्या-क्या कर सकता है { #what-the-action-step-can-do }

**All steps** → **Advanced** → **Action** खोलें। **This step will** की लिस्ट में पहले Ohanvi के अपने एक्शन दिखते हैं, फिर आपके कनेक्टर ऐप।

| एक्शन | यह क्या करता है | इसके लिए चाहिए |
| --- | --- | --- |
| **Save the form to the CRM** | फ़ॉर्म भरने वाले को CRM लीड बनाकर सेव करता है। | ऐसा फ़्लो जो फ़ॉर्म सबमिट होने पर शुरू होता है। |
| **Send a WhatsApp message** | एक नंबर पर सादा टेक्स्ट भेजता है। | उस व्यक्ति ने पिछले 24 घंटे में आपको मैसेज किया हो। |
| **Send a WhatsApp template** | किसी को भी मंज़ूर हुआ टेम्प्लेट भेजता है। | **Approved** टेम्प्लेट। |
| **Check if they ordered recently** | आपके स्टोर से पूछता है कि इस व्यक्ति ने हाल में ऑर्डर किया है या नहीं। | कनेक्ट किया हुआ स्टोर। |
| **Start a chatbot conversation** | इस व्यक्ति के साथ आपका कोई चैटबॉट शुरू करता है। | पब्लिश किया हुआ चैटबॉट। |
| **Start the WhatsApp social assistant** | आपको एक टेम्प्लेट मैसेज भेजता है, फिर पोस्ट का ड्राफ़्ट बनाने में मदद करता है। | मंज़ूर हुआ टेम्प्लेट। |
| **Create a CRM lead** | CRM में लीड जोड़ता है। | पहला नाम। |
| **Send a form** | फ़ॉर्म को लिंक के रूप में या WhatsApp पर भेजता है। | पब्लिश किया हुआ फ़ॉर्म। |
| **Enrol in an email journey** | व्यक्ति को ईमेल जर्नी में जोड़ता है। | एक जर्नी और एक ईमेल पता। |
| **Post to social** | सेव किए हुए टेम्प्लेट से सोशल पोस्ट बनाता है। | पोस्ट टेम्प्लेट। |
| **Change a lead's status** | लीड को दूसरे स्टेटस में ले जाता है। | लीड id। |
| **Convert a lead to a contact** | लीड को कॉन्टैक्ट बना देता है। | लीड id। |
| **Send to Zapier / Pabbly** | Zap या Pabbly वर्कफ़्लो को डेटा भेजता है। | सेव किया हुआ टारगेट। |
| **Check BUSY stock** | आपके पिछले BUSY स्टॉक अपलोड में कोई प्रोडक्ट ढूँढता है। | BUSY अपलोड। |
| Google Sheets, Calendar, Meet और Contacts एक्शन | आपके Google अकाउंट के साथ काम करते हैं। | कनेक्ट किया हुआ Google अकाउंट। देखें [फ़्लो में Google Workspace के स्टेप इस्तेमाल करें](flow-google-workspace-steps.md)। |

## स्टेप { #steps }

### Action स्टेप जोड़ें और चुनें कि वह क्या करे { #add-an-action-step-and-pick-what-it-does }

1. किसी स्टेप के बगल में **+** पर क्लिक करें, फिर **All steps** पर क्लिक करें।
2. **Advanced** में **Action** पर क्लिक करें। एक कार्ड जुड़ जाएगा और उसकी सेटिंग्स दाईं तरफ़ **Step** पैनल में खुलेंगी।
3. **Step name** में लिखें कि यह स्टेप किस काम के लिए है, जैसे `Tell the customer their slot`। बॉक्स में `What this step is for` दिखता है।
4. **This step will** के नीचे की लिस्ट पर क्लिक करें और चुनें कि क्या होना चाहिए। बॉक्स में `Choose what happens` दिखता है।
5. लिस्ट के नीचे लिखा वाक्य पढ़ें। उसमें बताया होता है कि एक्शन क्या करता है।
6. बाद में दूसरा एक्शन चुनना हो, तो **Change** पर क्लिक करें।

अगर लिस्ट में सिर्फ़ Ohanvi के अपने एक्शन हैं, तो यह मैसेज दिखता है: **Connector apps couldn't be loaded right now, so only Ohanvi's own actions are listed. Reopen the flow to try again.** अगर आपके पास कोई कनेक्टर ऐप नहीं है, तो यह लिखा दिखता है: **Connector apps appear here once one is set up under Integrations → Connectors.**

### एक्शन की फ़ील्ड भरें { #fill-in-the-fields-of-an-action }

1. **Details** में एक्शन की हर फ़ील्ड भरें। जो फ़ील्ड ज़रूरी है, वह खाली नहीं छोड़ सकते।
2. ट्रिगर या पिछले स्टेप का डेटा इस्तेमाल करना हो, तो बॉक्स के बगल वाले फ़ील्ड पिकर पर क्लिक करें और कोई फ़ील्ड चुनें। आप चाहें तो एक्सप्रेशन भी लिख सकते हैं, जैसे `{{trigger.phone}}` या `{{2.publicUrl}}`।
3. लिस्ट वाली फ़ील्ड में, जैसे **How to send it**, उस पर क्लिक करें और एक विकल्प चुनें।
4. कुछ फ़ील्ड पहले से तय होती हैं। वे एक वाक्य की तरह दिखती हैं, जैसे **the form that was just submitted**। इन्हें आपको भरना नहीं पड़ता।
5. फ़ील्ड के नीचे का नोट पढ़ें। उसमें बताया होता है कि किस एक बात का ध्यान रखना है।

!!! tip "सुझाव: यह संख्या स्टेप नंबर है"
    `{{2.publicUrl}}` में `2` वही नंबर है जो स्टेप कार्ड पर लिखा है। जिस स्टेप ने वह वैल्यू बनाई, उसी का नंबर लिखें।

### WhatsApp मैसेज भेजें { #send-a-whatsapp-message }

1. **Send a WhatsApp message** चुनें।
2. **Send to** में फ़ोन नंबर लिखें, या ट्रिगर की फ़ोन फ़ील्ड चुनें। यह ज़रूरी है।
3. **Message** में टेक्स्ट लिखें। यह ज़रूरी है। उदाहरण: `Thanks for registering, {{trigger.form.name}}…`।

सादा टेक्स्ट सिर्फ़ उन्हीं तक पहुँचता है जिन्होंने पिछले 24 घंटे में आपको मैसेज किया हो। बाकी सबके लिए **Send a WhatsApp template** इस्तेमाल करें।

### WhatsApp टेम्प्लेट भेजें { #send-a-whatsapp-template }

1. **Send a WhatsApp template** चुनें।
2. नोट पढ़ें। उसमें लिखा है कि बिज़नेस की तरफ़ से पहले भेजा गया मैसेज WhatsApp तभी पहुँचाता है जब वह Meta से मंज़ूर टेम्प्लेट हो। इसलिए जो टेम्प्लेट मंज़ूर नहीं है, वह भेजा ही नहीं जाता।
3. **Send to** में पूरा अंतरराष्ट्रीय नंबर लिखें, या ऐसा एक्सप्रेशन चुनें जिससे नंबर मिले। बॉक्स में `{{trigger.phone}}` दिखता है।
4. **Template** में **Choose an approved template** पर क्लिक करें और एक चुनें। लिस्ट लोड होते समय **Loading your approved templates…** लिखा दिखता है।
5. अगर टेम्प्लेट एक से ज़्यादा भाषाओं में मंज़ूर है, तो **Language** पर क्लिक करें और एक भाषा चुनें। बॉक्स में **This template is approved in more than one language** दिखता है।
6. **What goes in the message** में टेम्प्लेट का टेक्स्ट पढ़ें। फिर **Variable {{1}}**, **Variable {{2}}** और बाकी वेरिएबल भरें। हर एक के लिए कोई फ़ील्ड चुनें या वैल्यू लिखें।
7. कोई दूसरा मैसेज चाहिए, तो **Need another message?** के नीचे **Browse the template library** पर क्लिक करें।

टेम्प्लेट इनमें से किसी एक स्टेटस में दिखता है: **Approved**, **Waiting for Meta to review it**, **Meta rejected it**, **Meta paused it for quality**, **Meta disabled it**, **Under appeal with Meta** या **Status unknown**। सिर्फ़ **Approved** टेम्प्लेट भेजा जा सकता है।

### देखें कि उन्होंने हाल में ऑर्डर किया या नहीं { #check-if-they-ordered-recently }

1. **Check if they ordered recently** चुनें।
2. **Their phone** में नंबर लिखें, या फ़ोन फ़ील्ड चुनें।
3. **Their email** में ईमेल लिखें, या ईमेल फ़ील्ड चुनें। दोनों में से कम से कम एक भरें।
4. **Within the last (minutes)** में लिखें कि कितना पीछे तक देखना है। डिफ़ॉल्ट `45` है।
5. जवाब के हिसाब से आगे बढ़ने के लिए इसके बाद एक **Continue only if…** स्टेप जोड़ें।

यह स्टेप जब भी चलता है, आपके स्टोर से उसी समय पूछता है।

### चैटबॉट बातचीत शुरू करें { #start-a-chatbot-conversation }

1. **Start a chatbot conversation** चुनें।
2. **Send to** में फ़ोन नंबर लिखें। यह ज़रूरी है।
3. **Chatbot** में उस चैटबॉट की id लिखें जिसे शुरू करना है। बॉक्स में `The chatbot this card is` दिखता है। यह ज़रूरी है।
4. **Give up after (minutes)** में लिखें कि ग्राहक के जवाब का कितनी देर इंतज़ार करना है। हिंट में `1440` दिखता है, यानी एक दिन।

### WhatsApp सोशल असिस्टेंट शुरू करें { #start-the-whatsapp-social-assistant }

1. **Start the WhatsApp social assistant** चुनें।
2. **Send to** में अपना खुद का WhatsApp नंबर लिखें। यह ज़रूरी है।
3. **Template name** में किसी मंज़ूर टेम्प्लेट का नाम लिखें, जैसे `social_daily_post`। यह ज़रूरी है।
4. **Language** में `en` रहने दें, या कोई दूसरा कोड लिखें।
5. **Region** में `IN` रहने दें, या कोई दूसरा कोड लिखें।
6. **Assistant conversation** को जैसा है वैसा ही रहने दें। इसका मतलब है Ohanvi का बना-बनाया पोस्ट असिस्टेंट।

यह स्टेप आपको टेम्प्लेट मैसेज भेजता है। आप उसका जवाब देते हैं, तो पोस्ट का ड्राफ़्ट बनाने वाली चैट शुरू हो जाती है।

### CRM लीड बनाएँ { #create-a-crm-lead }

1. **Create a CRM lead** चुनें।
2. **First name** में नाम लिखें। यह ज़रूरी है।
3. **Last name**, **Phone**, **Email** और **Company** आपके पास हों, तो भर दें।

### फ़ॉर्म को CRM में सेव करें { #save-the-form-to-the-crm }

1. **Save the form to the CRM** चुनें।
2. **Which submission** को जैसा है वैसा ही रहने दें। इसका मतलब है वह फ़ॉर्म जो अभी सबमिट हुआ है।
3. **What to do with it** को **Create a CRM lead** पर ही रखें।

इसे दो बार चलाने में कोई दिक्कत नहीं है। एक ही सबमिशन के लिए पहले बनी लीड रखी जाती है, दोबारा नहीं बनती।

### फ़ॉर्म भेजें { #send-a-form }

1. **Send a form** चुनें। स्टेप में फ़ॉर्म का नाम, उसके सवालों की गिनती और भेजने का तरीका दिखता है।
2. **Form to send** में कोई पब्लिश किया हुआ फ़ॉर्म चुनें।
3. **How to send it** में से एक तरीका चुनें:
    - **Create a public link** एक लिंक बनाता है और उसे अगले स्टेप को दे देता है। यह खुद से कुछ नहीं भेजता। फ़ॉर्म **Active** होना चाहिए और उसका पब्लिक लिंक चालू होना चाहिए।
    - **Message it on WhatsApp** फ़ॉर्म को एक नंबर पर भेजता है। इसके लिए फ़ॉर्म पहले WhatsApp पर पब्लिश होना चाहिए।
4. **WHO IT GOES TO** (WhatsApp) या **WHO IT'S FOR (OPTIONAL)** (लिंक) में उस व्यक्ति की जानकारी भरें। WhatsApp के लिए फ़ोन नंबर ज़रूरी है। बॉक्स में `{{trigger.identity.phone}}` दिखता है। फ़ोन नंबर के बिना भेजना रिजेक्ट हो जाता है। यह ईमेल पर नहीं जाता।
5. पब्लिक लिंक के लिए आप ईमेल या कॉन्टैक्ट id भी लिख सकते हैं। ये रिकॉर्ड के साथ सेव रहते हैं। लिंक उन्हें भेजा नहीं जाता।
6. **Message (optional)** में साथ जाने वाली एक लाइन लिखें, जैसे `Please complete your registration:`। WhatsApp पर यह फ़ॉर्म से ठीक पहले जाती है। लिंक के मामले में यह आगे के किसी स्टेप के लिए साथ चलती है।
7. पब्लिक लिंक भेजना हो, तो इस स्टेप के बाद WhatsApp या ईमेल स्टेप जोड़ें और उसके मैसेज में `{{N.publicUrl}}` पेस्ट करें। `N` इसी स्टेप का नंबर है।

अगर फ़ॉर्म WhatsApp पर पब्लिश नहीं है, तो कार्ड पर लिखा आता है कि यह स्टेप रिजेक्ट हो जाएगा। पहले फ़ॉर्म के मेन्यू से उसे पब्लिश करें।

### ईमेल जर्नी में जोड़ें { #enrol-in-an-email-journey }

1. **Enrol in an email journey** चुनें।
2. **Journey** में जर्नी की id लिखें। बॉक्स में `The journey id` दिखता है। यह ज़रूरी है।
3. **Their email** में ईमेल पता लिखें, या ईमेल फ़ील्ड चुनें। यह ज़रूरी है।

### सोशल पर पोस्ट करें { #post-to-social }

1. **Post to social** चुनें।
2. **Post template** में सेव किए हुए टेम्प्लेट की id लिखें। बॉक्स में `The template id` दिखता है। यह ज़रूरी है।
3. टेम्प्लेट के शब्दों की जगह अपने शब्द इस्तेमाल करने हों, तो उन्हें **Caption (optional)** में लिखें।
4. **Then** में **Save as a draft** या **Publish now** चुनें। डिफ़ॉल्ट **Save as a draft** है।
5. किन अकाउंट पर पोस्ट करना है, यह **Advanced** में `accountIds` वैल्यू में सेट करें।

!!! warning "Publish now बिना जाँचे पोस्ट कर देता है"
    टेस्ट करते समय **Save as a draft** ही रखें।

### लीड का स्टेटस बदलें या लीड को कन्वर्ट करें { #change-a-leads-status-or-convert-a-lead }

1. स्टेटस बदलने के लिए **Change a lead's status** चुनें। **Lead** में लीड id लिखें। बॉक्स में `The lead id` दिखता है। **New status** में **New**, **Contacted**, **Qualified**, **Unqualified** या **Lost** चुनें। दोनों ज़रूरी हैं।
2. कन्वर्ट करने के लिए **Convert a lead to a contact** चुनें। **Lead** में लीड id लिखें। यह ज़रूरी है।
3. **Also create an account** को **Yes** या **No** पर सेट करें। डिफ़ॉल्ट **No** है।

### BUSY स्टॉक जाँचें { #check-busy-stock }

1. **Check BUSY stock** चुनें।
2. **Product name** में लिखें कि क्या ढूँढना है, जैसे `blue shirt xl`।
3. नतीजा आगे किसी स्टेप में इस्तेमाल करें। इसमें हर मैच के साथ आइटम का नाम, मात्रा, यूनिट और स्टॉक में है या नहीं, यह दिखता है। अपलोड की तारीख भी दिखती है।

स्टॉक की जानकारी **WhatsApp** → **BUSY** में किए गए पिछले अपलोड से आती है। यह BUSY से लाइव नहीं आती।

### Zapier या Pabbly को डेटा भेजें { #send-data-to-zapier-or-pabbly }

1. **Send to Zapier / Pabbly** चुनें।
2. **Send to** के नीचे की लिस्ट पर क्लिक करें और कोई सेव किया हुआ टारगेट चुनें। लोड होते समय बॉक्स में **Loading…** लिखा दिखता है।
3. नया टारगेट सेव करना हो, तो **Add target** पर क्लिक करें। **Add a Zapier / Pabbly target** विंडो खुलेगी।
4. **Platform** में **ZAPIER** या **PABBLY** चुनें।
5. **Name** में कोई नाम लिखें, जैसे `Zap: new lead`।
6. **Webhook URL** में URL पेस्ट करें। वह `https://` से शुरू होना चाहिए। Zapier का URL `https://hooks.zapier.com/hooks/catch/…` जैसा दिखता है। Pabbly का URL `https://connect.pabbly.com/workflow/sendwebhookdata/…` जैसा दिखता है। सेव करने के बाद URL छिपा हुआ दिखता है। ध्यान रखें, जिसके पास भी यह URL होगा, वह आपके Zap को डेटा भेज सकता है।
7. ज़रूरी नहीं: **Signing secret (optional)** में एक सीक्रेट लिखें। Ohanvi `X-Ohanvi-Signature` हेडर जोड़ देता है। यह बॉडी का HMAC-SHA256 होता है, जिसे आपका वर्कफ़्लो चेक कर सकता है।
8. ज़रूरी नहीं: **Safe to send twice** तभी चालू करें जब आपका वर्कफ़्लो एक ही डेटा दोबारा आने पर उसे अनदेखा कर देता हो। तब फ़ेल हुई कॉल `Idempotency-Key` हेडर के साथ दोबारा भेजी जा सकती है।
9. **Save target** पर क्लिक करें। फ़ेल होने पर मैसेज आता है: **The target was not saved**।
10. स्टेप में वापस आकर **Data to send (JSON)** में डेटा JSON ऑब्जेक्ट की तरह लिखें। उदाहरण: `{ "email": "{{trigger.email}}" }`।
11. ज़रूरी नहीं: **Extra headers (JSON, optional)** में हेडर लिखें। उदाहरण: `{ "X-Source": "ohanvi" }`।
12. **If it answers with an error** में **Stop the flow** या **Carry on, and pass the status to the next steps** चुनें। डिफ़ॉल्ट **Stop the flow** है।
13. **Wait at most (seconds)** में लिखें कि ज़्यादा से ज़्यादा कितनी देर इंतज़ार करना है। हिंट में `20` दिखता है।
14. डेटा अभी भेजने के लिए **Test call** पर क्लिक करें। आपका Zap या वर्कफ़्लो सच में चल जाएगा। `{{…}}` वाली फ़ील्ड रन के बाहर नहीं भरतीं।

Zapier और Pabbly डेटा मिलते ही एक रसीद के साथ जवाब दे देते हैं। यह Zap का नतीजा नहीं होता। आगे के स्टेप `{{N.statusCode}}` और `{{N.responseBody.…}}` पढ़ सकते हैं। फ़ेल हुई कॉल दोबारा नहीं भेजी जाती, जब तक आपने टारगेट को "दोबारा भेजने के लिए सुरक्षित" न चुना हो। टेस्ट कॉल के बाद आगे के स्टेप वे फ़ील्ड चुन सकते हैं जो उसमें वापस आई थीं।

### कनेक्टर ऐप इस्तेमाल करें { #use-a-connector-app }

1. **This step will** में किसी ऐप का ऑपरेशन चुनें। उसमें पहले ऐप का नाम लिखा होता है, फिर ऑपरेशन।
2. **Connection** के नीचे **Signs in as** पर क्लिक करें और कनेक्शन चुनें। अगर **No connections yet. Connect the app under Integrations → Connectors before this step can authenticate.** लिखा है, तो पहले ऐप कनेक्ट करें।
3. ऑपरेशन में जो फ़ील्ड दिखें, उन्हें भरें।

### नाम से हैंडलर सेट करें (एडवांस्ड) { #set-a-handler-by-name-advanced }

1. **Platform handler** में Ohanvi के किसी एक्शन का नाम लिखें, जैसे `saveCrmLeadApiService`।
2. **Input mapping (JSON)** में जो भेजना है, उसे JSON ऑब्जेक्ट की तरह लिखें। उदाहरण: `{ "email": "{{trigger.email}}" }`।
3. याद रखें: हैंडलर या कनेक्टर ऐप, दोनों में से सिर्फ़ एक सेट करें।

वैल्यू एक्सप्रेशन होती हैं, जो ट्रिगर और इस स्टेप से पहले के स्टेप के डेटा पर चलती हैं। बाकी जो कुछ भी लिखा है, वह वैसा का वैसा भेजा जाता है। अगर बॉक्स में **Input mapping must be a JSON object.** या **Input mapping is not valid JSON.** दिखे, तो ब्रेसिज़ और कोट्स ठीक करें।

### नियम पूरा न हो तो रन रोकें { #stop-a-run-unless-a-rule-holds }

1. **Continue only if…** स्टेप जोड़ें।
2. **Only continue if** में **Add condition** पर क्लिक करें। ऐसा करने तक बॉक्स में **No condition yet — every record will continue.** लिखा रहता है।
3. **Field** में वह डेटा नाम से चुनें जिसे जाँचना है। अपना खुद का डेटा लिखना हो, तो **Something else…** चुनें और **Expression** में `{{trigger.status}}` जैसा एक्सप्रेशन लिखें।
4. तुलना चुनें:

    | तुलना | रन तब आगे जाता है जब फ़ील्ड… |
    | --- | --- |
    | **is** | वैल्यू के बराबर हो। |
    | **is not** | वैल्यू के बराबर न हो। |
    | **contains** | उसके अंदर वैल्यू हो। |
    | **does not contain** | उसके अंदर वैल्यू न हो। |
    | **starts with** | वैल्यू से शुरू हो। |
    | **ends with** | वैल्यू पर खत्म हो। |
    | **is empty** | खाली हो। |
    | **is not empty** | खाली न हो। |
    | **is greater than** | वैल्यू से बड़ी हो। |
    | **is less than** | वैल्यू से छोटी हो। |
    | **is at least** | वैल्यू के बराबर या उससे बड़ी हो। |
    | **is at most** | वैल्यू के बराबर या उससे छोटी हो। |

5. **Value** में वह लिखें या चुनें जिससे तुलना करनी है। बॉक्स में उदाहरण के तौर पर `paid` दिखता है। **is empty** और **is not empty** के लिए वैल्यू नहीं लिखनी होती।
6. और नियम जोड़ने के लिए **Add condition** पर दोबारा क्लिक करें। दो या ज़्यादा नियम होने पर **Continue when** दिखता है। हर नियम पूरा होना ज़रूरी हो, तो **all match** चुनें। कोई एक नियम काफ़ी हो, तो **any match** चुनें। नियमों के बीच कार्ड पर **and** या **or** दिखता है।
7. नियम हटाने के लिए **Remove this condition** पर क्लिक करें।

जो रन यहाँ रुक जाता है, वह **Filtered** बनकर खत्म होता है। यह सामान्य नतीजा है, फ़ेल होना नहीं।

!!! warning "खाली कंडीशन सबको आगे जाने देती है"
    कोई नियम न हो, तो हर रन आगे चला जाता है। कम से कम एक नियम ज़रूर जोड़ें।

### रन को अलग-अलग रास्तों पर भेजें { #send-runs-down-different-paths }

1. **Many paths by rule** स्टेप जोड़ें।
2. **Add two paths** पर क्लिक करें। बाद में और रास्ते जोड़ने के लिए **Add a path** पर क्लिक करें।
3. हर रास्ते का नियम ऊपर बताए तरीके से ही सेट करें।
4. नियम ध्यान से पढ़ें। जिस पहले रास्ते का नियम मेल खाता है, रन उसी पर जाता है। इसलिए रास्तों को सबसे खास नियम से सबसे आम नियम के क्रम में रखें।
5. **If nothing matches, take** में कोई रास्ता चुनें, या **nothing — end the run** चुनें।

बिना रास्तों वाला स्टेप पब्लिश नहीं हो सकता। मैसेज आता है: **Add a path on the canvas first — a branch with no paths cannot publish.**

## समस्या और समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No recipient. Map the customer's phone** | **Send to** खाली है। | ट्रिगर की फ़ोन फ़ील्ड चुनें, या पूरा अंतरराष्ट्रीय नंबर लिखें। |
| **Choose the approved template to send.** | कोई टेम्प्लेट नहीं चुना गया। | **Template** में एक टेम्प्लेट चुनें। |
| **Meta only delivers approved templates outside the 24-hour window.** | चुना हुआ टेम्प्लेट **Approved** नहीं है। | Meta की मंज़ूरी का इंतज़ार करें, या दूसरा टेम्प्लेट चुनें। |
| **Choose which language of … to send** | टेम्प्लेट एक से ज़्यादा भाषाओं में है। | **Language** में एक भाषा चुनें। |
| **The template needs a value for {{1}}.** | कोई वेरिएबल खाली है। | हर **Variable** भरें। |
| **Variable {{1}} is still the placeholder.** | बॉक्स में अब भी नमूने वाला टेक्स्ट है। | उसकी जगह असली वैल्यू लिखें या कोई फ़ील्ड चुनें। |
| **This must be a JSON object: { … }** या **This is not valid JSON.** | डेटा या हेडर वाले बॉक्स में सही JSON नहीं है। | ब्रेसिज़, कोट्स और कॉमा देखें। |
| **The target this step used was deleted. Choose another one.** | सेव किया हुआ टारगेट अब मौजूद नहीं है। | **Send to** में दूसरा टारगेट चुनें। |
| **No targets yet.** | आपने अभी तक कोई Zapier या Pabbly टारगेट सेव नहीं किया है। | **Add target** पर क्लिक करें। |
| **Not published to WhatsApp, so this step will be refused** | **Message it on WhatsApp** चुना है, पर फ़ॉर्म WhatsApp पर पब्लिश नहीं है। | फ़ॉर्म के मेन्यू से उसे WhatsApp पर पब्लिश करें। |
| **No connections yet.** | कनेक्टर ऐप कनेक्ट नहीं है। | उसे **Integrations** → **Connectors** में कनेक्ट करें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [फ़्लो में इंटीग्रेशन और एडवांस्ड स्टेप जोड़ें](chatbot-integration-and-advanced-steps.md)
- [फ़्लो में Google Workspace के स्टेप इस्तेमाल करें](flow-google-workspace-steps.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [फ़्लो के लिए ऐप कनेक्ट करें](../flows/connect-apps-for-flows.md)
