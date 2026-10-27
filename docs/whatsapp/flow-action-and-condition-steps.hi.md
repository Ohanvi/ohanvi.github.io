---
title: फ़्लो में Action स्टेप और कंडीशन का इस्तेमाल करें
description: पहले से बना कोई एक्शन चुनें, हर फ़ील्ड भरें, Zapier या Pabbly को डेटा भेजें, और कंडीशन से रन को रोकें या शाखाओं में बाँटें। हर फ़ील्ड की व्याख्या के साथ।
---

# फ़्लो में Action स्टेप और कंडीशन का इस्तेमाल करें { #use-the-action-step-and-conditions-in-a-flow }

**Action** स्टेप आपके लिए एक काम करता है: व्हाट्सऐप टेम्प्लेट भेजना, CRM लीड बनाना, किसी को ईमेल जर्नी में जोड़ना, Zapier को कॉल करना और बहुत कुछ। **Continue only if…** और **Many paths by rule** स्टेप तय करते हैं कि कौन-से रन आगे जाएँ। यह पेज हर एक की हर फ़ील्ड और क्या लिखना है, यह समझाता है। इसे पढ़ने में करीब 10 मिनट लगते हैं।

## शुरू करने से पहले { #before-you-start }

- बिल्डर में आपका एक फ़्लो खुला है। देखें [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)।
- **Send a WhatsApp template** के लिए आपके पास कम से कम एक टेम्प्लेट है जिसका स्टेटस **Approved** है। देखें [व्हाट्सऐप मैसेज टेम्प्लेट बनाएँ](create-message-template.md)।
- **Send to Zapier / Pabbly** के लिए आपके पास Zap का **Catch Hook** URL या Pabbly वेबहुक URL है।
- कनेक्टर ऐप के लिए ऐप **Integrations** → **Connectors** में कनेक्ट है। देखें [फ़्लो के लिए ऐप कनेक्ट करें](../flows/connect-apps-for-flows.md)।

## Action स्टेप क्या-क्या कर सकता है { #what-the-action-step-can-do }

**All steps** → **Advanced** → **Action** खोलें। **This step will** में सूची पहले Ohanvi के अपने एक्शन दिखाती है, फिर आपके कनेक्टर ऐप।

| एक्शन | यह क्या करता है | इसके लिए चाहिए |
| --- | --- | --- |
| **Save the form to the CRM** | फ़ॉर्म भरने वाले व्यक्ति को CRM लीड के रूप में सेव करता है। | ऐसा फ़्लो जो फ़ॉर्म सबमिट होने पर शुरू होता है। |
| **Send a WhatsApp message** | एक नंबर को सादा टेक्स्ट भेजता है। | व्यक्ति ने पिछले 24 घंटे में आपको लिखा हो। |
| **Send a WhatsApp template** | किसी को भी मंज़ूर टेम्प्लेट भेजता है। | **Approved** टेम्प्लेट। |
| **Check if they ordered recently** | आपके स्टोर से पूछता है कि इस व्यक्ति ने हाल में ऑर्डर किया या नहीं। | कनेक्ट किया हुआ स्टोर। |
| **Start a chatbot conversation** | इस व्यक्ति के साथ आपका कोई चैटबॉट खोलता है। | पब्लिश किया हुआ चैटबॉट। |
| **Start the WhatsApp social assistant** | आपको टेम्प्लेट मैसेज भेजता है, फिर पोस्ट का ड्राफ़्ट बनाने में मदद करता है। | मंज़ूर टेम्प्लेट। |
| **Create a CRM lead** | CRM में लीड जोड़ता है। | पहला नाम। |
| **Send a form** | फ़ॉर्म को लिंक के रूप में या व्हाट्सऐप पर भेजता है। | पब्लिश किया हुआ फ़ॉर्म। |
| **Enrol in an email journey** | व्यक्ति को ईमेल जर्नी में जोड़ता है। | एक जर्नी और एक ईमेल पता। |
| **Post to social** | सेव किए टेम्प्लेट से सोशल पोस्ट बनाता है। | पोस्ट टेम्प्लेट। |
| **Change a lead's status** | लीड को दूसरे स्टेटस में ले जाता है। | लीड id। |
| **Convert a lead to a contact** | लीड को संपर्क बनाता है। | लीड id। |
| **Send to Zapier / Pabbly** | Zap या Pabbly वर्कफ़्लो को डेटा भेजता है। | सेव किया हुआ टारगेट। |
| **Check BUSY stock** | आपके पिछले BUSY स्टॉक अपलोड में किसी प्रोडक्ट को खोजता है। | BUSY अपलोड। |
| Google Sheets, Calendar, Meet और Contacts एक्शन | आपके Google अकाउंट के साथ काम करते हैं। | कनेक्ट किया हुआ Google अकाउंट। देखें [फ़्लो में Google Workspace के चरण इस्तेमाल करें](flow-google-workspace-steps.md)। |

## चरण { #steps }

### Action स्टेप जोड़ें और चुनें कि वह क्या करे { #add-an-action-step-and-pick-what-it-does }

1. किसी स्टेप के बगल में **+** पर क्लिक करें, फिर **All steps** पर क्लिक करें।
2. **Advanced** के तहत **Action** पर क्लिक करें। एक कार्ड जुड़ जाता है और उसकी सेटिंग्स दाईं ओर **Step** पैनल में खुलती हैं।
3. **Step name** में लिखें कि यह स्टेप किसलिए है, जैसे `Tell the customer their slot`। बॉक्स में `What this step is for` दिखता है।
4. **This step will** के तहत सूची पर क्लिक करें और चुनें कि क्या हो। बॉक्स में `Choose what happens` दिखता है।
5. सूची के नीचे का वाक्य पढ़ें। वह बताता है कि एक्शन क्या करता है।
6. बाद में दूसरा एक्शन चुनने के लिए **Change** पर क्लिक करें।

अगर सूची में सिर्फ़ Ohanvi के अपने एक्शन हैं, तो संदेश **Connector apps couldn't be loaded right now, so only Ohanvi's own actions are listed. Reopen the flow to try again.** होता है। अगर आपके पास कोई कनेक्टर ऐप नहीं है, तो **Connector apps appear here once one is set up under Integrations → Connectors.** लिखा होता है।

### एक्शन की फ़ील्ड भरें { #fill-in-the-fields-of-an-action }

1. **Details** के तहत एक्शन की दिखाई हर फ़ील्ड भरें। ज़रूरी बताई गई फ़ील्ड खाली नहीं रह सकती।
2. ट्रिगर या पिछले स्टेप का डेटा इस्तेमाल करने के लिए बॉक्स के बगल के फ़ील्ड पिकर पर क्लिक करें और कोई फ़ील्ड चुनें। या कोई एक्सप्रेशन लिखें, जैसे `{{trigger.phone}}` या `{{2.publicUrl}}`।
3. सूची वाली फ़ील्ड, जैसे **How to send it**, पर क्लिक करें और एक विकल्प चुनें।
4. कुछ फ़ील्ड तय होती हैं। वे एक वाक्य के रूप में दिखती हैं, जैसे **the form that was just submitted**। इन्हें आप नहीं लिखते।
5. फ़ील्ड के नीचे का नोट पढ़ें। वह बताता है कि किस एक बात का ध्यान रखना है।

!!! tip "सुझाव: संख्या स्टेप नंबर है"
    `{{2.publicUrl}}` में `2` स्टेप कार्ड पर लिखा नंबर है। उस स्टेप का नंबर इस्तेमाल करें जिसने वह वैल्यू बनाई।

### व्हाट्सऐप मैसेज भेजें { #send-a-whatsapp-message }

1. **Send a WhatsApp message** चुनें।
2. **Send to** में फ़ोन नंबर लिखें या ट्रिगर की फ़ोन फ़ील्ड चुनें। ज़रूरी है।
3. **Message** में टेक्स्ट लिखें। ज़रूरी है। उदाहरण: `Thanks for registering, {{trigger.form.name}}…`।

सादा टेक्स्ट सिर्फ़ उन लोगों तक पहुँचता है जिन्होंने पिछले 24 घंटे में आपको मैसेज किया हो। बाकी सबके लिए **Send a WhatsApp template** इस्तेमाल करें।

### व्हाट्सऐप टेम्प्लेट भेजें { #send-a-whatsapp-template }

1. **Send a WhatsApp template** चुनें।
2. नोट पढ़ें। वह बताता है कि व्हाट्सऐप बिज़नेस की तरफ़ से शुरू किया मैसेज सिर्फ़ Meta से मंज़ूर टेम्प्लेट के रूप में डिलीवर करता है, इसलिए गैर-मंज़ूर टेम्प्लेट भेजा ही नहीं जाता।
3. **Send to** में पूरा अंतरराष्ट्रीय नंबर लिखें, या कोई ऐसा एक्सप्रेशन चुनें जो नंबर दे। बॉक्स में `{{trigger.phone}}` दिखता है।
4. **Template** में **Choose an approved template** पर क्लिक करें और एक चुनें। सूची लोड होने तक **Loading your approved templates…** लिखा होता है।
5. अगर टेम्प्लेट एक से ज़्यादा भाषाओं में मंज़ूर है, तो **Language** पर क्लिक करें और एक चुनें। बॉक्स में **This template is approved in more than one language** दिखता है।
6. **What goes in the message** के तहत टेम्प्लेट का टेक्स्ट पढ़ें। फिर **Variable {{1}}**, **Variable {{2}}** और आगे के भरें। हर एक के लिए कोई फ़ील्ड चुनें या वैल्यू लिखें।
7. अगर आपको दूसरा मैसेज चाहिए, तो **Need another message?** के तहत **Browse the template library** पर क्लिक करें।

टेम्प्लेट इनमें से किसी एक स्थिति में दिखता है: **Approved**, **Waiting for Meta to review it**, **Meta rejected it**, **Meta paused it for quality**, **Meta disabled it**, **Under appeal with Meta** या **Status unknown**। सिर्फ़ **Approved** भेजा जा सकता है।

### देखें कि उन्होंने हाल में ऑर्डर किया या नहीं { #check-if-they-ordered-recently }

1. **Check if they ordered recently** चुनें।
2. **Their phone** में नंबर लिखें या फ़ोन फ़ील्ड चुनें।
3. **Their email** में ईमेल लिखें या ईमेल फ़ील्ड चुनें। दोनों में से कम से कम एक भरें।
4. **Within the last (minutes)** में लिखें कि कितना पीछे तक देखना है। डिफ़ॉल्ट `45` है।
5. जवाब के हिसाब से काम करने के लिए इसके बाद एक **Continue only if…** स्टेप जोड़ें।

यह स्टेप हर बार चलने पर आपके स्टोर से लाइव पूछता है।

### चैटबॉट बातचीत शुरू करें { #start-a-chatbot-conversation }

1. **Start a chatbot conversation** चुनें।
2. **Send to** में फ़ोन नंबर लिखें। ज़रूरी है।
3. **Chatbot** में उस चैटबॉट की id लिखें जिसे खोलना है। बॉक्स में `The chatbot this card is` दिखता है। ज़रूरी है।
4. **Give up after (minutes)** में लिखें कि ग्राहक का कितना इंतज़ार करना है। हिंट में `1440` दिखता है, यानी एक दिन।

### व्हाट्सऐप सोशल असिस्टेंट शुरू करें { #start-the-whatsapp-social-assistant }

1. **Start the WhatsApp social assistant** चुनें।
2. **Send to** में अपना खुद का व्हाट्सऐप नंबर लिखें। ज़रूरी है।
3. **Template name** में किसी मंज़ूर टेम्प्लेट का नाम लिखें, जैसे `social_daily_post`। ज़रूरी है।
4. **Language** में `en` रहने दें या कोई और कोड लिखें।
5. **Region** में `IN` रहने दें या कोई और कोड लिखें।
6. **Assistant conversation** को जैसा है वैसा रहने दें। इसका मतलब है बना-बनाया पोस्ट असिस्टेंट।

यह स्टेप आपको टेम्प्लेट भेजता है। आप जवाब देते हैं तो पोस्ट का ड्राफ़्ट बनाने वाली चैट शुरू हो जाती है।

### CRM लीड बनाएँ { #create-a-crm-lead }

1. **Create a CRM lead** चुनें।
2. **First name** में नाम लिखें। ज़रूरी है।
3. अगर आपके पास हैं तो **Last name**, **Phone**, **Email** और **Company** भरें।

### फ़ॉर्म को CRM में सेव करें { #save-the-form-to-the-crm }

1. **Save the form to the CRM** चुनें।
2. **Which submission** को जैसा है वैसा रहने दें। इसका मतलब है अभी सबमिट हुआ फ़ॉर्म।
3. **What to do with it** को **Create a CRM lead** पर रखें।

इसे दो बार चलाना सुरक्षित है। उसी सबमिशन के लिए पहले बनी लीड रखी जाती है, दोहराई नहीं जाती।

### फ़ॉर्म भेजें { #send-a-form }

1. **Send a form** चुनें। स्टेप फ़ॉर्म का नाम, उसमें कितने सवाल हैं और वह कैसे भेजा जाता है, यह दिखाता है।
2. **Form to send** के तहत कोई पब्लिश किया फ़ॉर्म चुनें।
3. **How to send it** के तहत एक चुनें:
    - **Create a public link** एक लिंक बनाता है और उसे अगले स्टेप को दे देता है। यह अपने-आप कुछ नहीं भेजता। फ़ॉर्म **Active** होना चाहिए और उसका पब्लिक लिंक चालू होना चाहिए।
    - **Message it on WhatsApp** फ़ॉर्म को एक नंबर पर भेजता है। फ़ॉर्म पहले व्हाट्सऐप पर पब्लिश होना चाहिए।
4. **WHO IT GOES TO** (व्हाट्सऐप) या **WHO IT'S FOR (OPTIONAL)** (लिंक) के तहत व्यक्ति की जानकारी भरें। व्हाट्सऐप के लिए फ़ोन ज़रूरी है। बॉक्स में `{{trigger.identity.phone}}` दिखता है। इसके बिना सेंड अस्वीकार हो जाता है, और वह ईमेल पर नहीं जाता।
5. पब्लिक लिंक के लिए आप ईमेल या संपर्क id भी दर्ज कर सकते हैं। वे रिकॉर्ड के साथ रखे जाते हैं। लिंक उन्हें डिलीवर नहीं किया जाता।
6. **Message (optional)** में साथ जाने वाली एक पंक्ति लिखें, जैसे `Please complete your registration:`। व्हाट्सऐप पर यह फ़ॉर्म से ठीक पहले भेजी जाती है। लिंक के लिए यह बाद के किसी स्टेप के लिए साथ चलती है।
7. पब्लिक लिंक डिलीवर करने के लिए इस स्टेप के बाद व्हाट्सऐप या ईमेल स्टेप जोड़ें और उसके मैसेज में `{{N.publicUrl}}` पेस्ट करें। `N` इस स्टेप का नंबर है।

अगर फ़ॉर्म व्हाट्सऐप पर पब्लिश नहीं है, तो कार्ड बताता है कि वह अस्वीकार हो जाएगा। पहले उसे फ़ॉर्म के मेन्यू से पब्लिश करें।

### ईमेल जर्नी में जोड़ें { #enrol-in-an-email-journey }

1. **Enrol in an email journey** चुनें।
2. **Journey** में जर्नी की id लिखें। बॉक्स में `The journey id` दिखता है। ज़रूरी है।
3. **Their email** में पता लिखें या ईमेल फ़ील्ड चुनें। ज़रूरी है।

### सोशल पर पोस्ट करें { #post-to-social }

1. **Post to social** चुनें।
2. **Post template** में सेव किए टेम्प्लेट की id लिखें। बॉक्स में `The template id` दिखता है। ज़रूरी है।
3. **Caption (optional)** में टेम्प्लेट के शब्दों की जगह इस्तेमाल होने वाले शब्द लिखें।
4. **Then** में **Save as a draft** या **Publish now** चुनें। डिफ़ॉल्ट **Save as a draft** है।
5. किन अकाउंट पर पोस्ट करना है, यह **Advanced** के तहत `accountIds` वैल्यू में सेट करें।

!!! warning "Publish now बिना समीक्षा के पोस्ट करता है"
    टेस्ट करते समय **Save as a draft** ही रखें।

### लीड का स्टेटस बदलें या लीड को कन्वर्ट करें { #change-a-leads-status-or-convert-a-lead }

1. स्टेटस बदलने के लिए **Change a lead's status** चुनें। **Lead** में लीड id लिखें। बॉक्स में `The lead id` दिखता है। **New status** में **New**, **Contacted**, **Qualified**, **Unqualified** या **Lost** चुनें। दोनों ज़रूरी हैं।
2. कन्वर्ट करने के लिए **Convert a lead to a contact** चुनें। **Lead** में लीड id लिखें। ज़रूरी है।
3. **Also create an account** को **Yes** या **No** पर सेट करें। डिफ़ॉल्ट **No** है।

### BUSY स्टॉक जाँचें { #check-busy-stock }

1. **Check BUSY stock** चुनें।
2. **Product name** में लिखें कि क्या खोजना है, जैसे `blue shirt xl`।
3. नतीजा बाद के किसी स्टेप में इस्तेमाल करें। यह हर मिलान को उसके आइटम के नाम, मात्रा, यूनिट और स्टॉक में है या नहीं, के साथ दिखाता है, साथ में अपलोड की तारीख भी।

स्टॉक **WhatsApp** → **BUSY** के तहत किए पिछले अपलोड से आता है। यह BUSY से लाइव नहीं आता।

### Zapier या Pabbly को डेटा भेजें { #send-data-to-zapier-or-pabbly }

1. **Send to Zapier / Pabbly** चुनें।
2. **Send to** के तहत सूची पर क्लिक करें और कोई सेव किया टारगेट चुनें। लोड होने तक बॉक्स में **Loading…** लिखा होता है।
3. नया टारगेट सेव करने के लिए **Add target** पर क्लिक करें। **Add a Zapier / Pabbly target** विंडो खुलती है।
4. **Platform** के तहत **ZAPIER** या **PABBLY** चुनें।
5. **Name** में कोई नाम लिखें, जैसे `Zap: new lead`।
6. **Webhook URL** में URL पेस्ट करें। वह `https://` से शुरू होना चाहिए। Zapier के लिए वह `https://hooks.zapier.com/hooks/catch/…` जैसा दिखता है। Pabbly के लिए `https://connect.pabbly.com/workflow/sendwebhookdata/…` जैसा। सेव करने के बाद सिर्फ़ छिपा हुआ रूप दिखता है। URL जिसके पास भी हो, वह आपके Zap को डेटा भेज सकता है।
7. वैकल्पिक: **Signing secret (optional)** में एक सीक्रेट लिखें। Ohanvi एक `X-Ohanvi-Signature` हेडर जोड़ता है, जो बॉडी का HMAC-SHA256 है और जिसे आपका वर्कफ़्लो जाँच सकता है।
8. वैकल्पिक: **Safe to send twice** तभी चालू करें जब आपका वर्कफ़्लो दोहराव को अनदेखा करता हो। इससे फ़ेल हुई कॉल `Idempotency-Key` हेडर के साथ दोबारा आज़माई जा सकती है।
9. **Save target** पर क्लिक करें। फ़ेल हो तो संदेश **The target was not saved** होता है।
10. स्टेप में लौटकर **Data to send (JSON)** में डेटा JSON ऑब्जेक्ट के रूप में लिखें। उदाहरण: `{ "email": "{{trigger.email}}" }`।
11. वैकल्पिक: **Extra headers (JSON, optional)** में हेडर लिखें। उदाहरण: `{ "X-Source": "ohanvi" }`।
12. **If it answers with an error** में **Stop the flow** या **Carry on, and pass the status to the next steps** चुनें। डिफ़ॉल्ट **Stop the flow** है।
13. **Wait at most (seconds)** में लिखें कि कितना इंतज़ार करना है। हिंट में `20` दिखता है।
14. डेटा अभी भेजने के लिए **Test call** पर क्लिक करें। आपका Zap या वर्कफ़्लो सचमुच चलता है। `{{…}}` फ़ील्ड रन के बाहर भरी नहीं जातीं।

Zapier और Pabbly डेटा मिलते ही एक रसीद के साथ जवाब देते हैं, Zap का नतीजा नहीं। बाद के स्टेप `{{N.statusCode}}` और `{{N.responseBody.…}}` पढ़ सकते हैं। फ़ेल हुई कॉल दोबारा नहीं आज़माई जाती, जब तक टारगेट को दोहराने के लिए सुरक्षित न चिह्नित किया हो। टेस्ट कॉल के बाद बाद के स्टेप वे फ़ील्ड चुन सकते हैं जो उसने लौटाईं।

### कनेक्टर ऐप इस्तेमाल करें { #use-a-connector-app }

1. **This step will** में किसी ऐप का ऑपरेशन चुनें। उसमें पहले ऐप का नाम, फिर ऑपरेशन लिखा होता है।
2. **Connection** के तहत **Signs in as** पर क्लिक करें और कनेक्शन चुनें। अगर **No connections yet. Connect the app under Integrations → Connectors before this step can authenticate.** लिखा है, तो पहले ऐप कनेक्ट करें।
3. ऑपरेशन की दिखाई फ़ील्ड भरें।

### नाम से हैंडलर सेट करें (एडवांस्ड) { #set-a-handler-by-name-advanced }

1. **Platform handler** में Ohanvi के किसी एक्शन का नाम लिखें, जैसे `saveCrmLeadApiService`।
2. **Input mapping (JSON)** में जो भेजना है वह JSON ऑब्जेक्ट के रूप में लिखें। उदाहरण: `{ "email": "{{trigger.email}}" }`।
3. याद रखें: हैंडलर या कनेक्टर ऐप में से एक सेट करें, दोनों नहीं।

वैल्यू ट्रिगर और इस स्टेप से पहले के स्टेप पर बने एक्सप्रेशन होती हैं। बाकी सब जैसा लिखा है वैसा भेजा जाता है। अगर बॉक्स में **Input mapping must be a JSON object.** या **Input mapping is not valid JSON.** दिखे, तो ब्रेसिज़ और कोट्स ठीक करें।

### नियम पूरा न होने पर रन रोकें { #stop-a-run-unless-a-rule-holds }

1. **Continue only if…** स्टेप जोड़ें।
2. **Only continue if** के तहत **Add condition** पर क्लिक करें। ऐसा करने तक बॉक्स में **No condition yet — every record will continue.** लिखा होता है।
3. **Field** में जाँचने वाला डेटा नाम से चुनें। अपना खुद का लिखने के लिए **Something else…** चुनें और **Expression** में `{{trigger.status}}` जैसा एक्सप्रेशन लिखें।
4. तुलना चुनें:

    | तुलना | रन तब आगे जाता है जब फ़ील्ड… |
    | --- | --- |
    | **is** | वैल्यू के बराबर हो। |
    | **is not** | वैल्यू के बराबर न हो। |
    | **contains** | उसके अंदर वैल्यू हो। |
    | **does not contain** | उसके अंदर वैल्यू न हो। |
    | **starts with** | वैल्यू से शुरू हो। |
    | **ends with** | वैल्यू पर खत्म हो। |
    | **is empty** | उसमें कुछ न हो। |
    | **is not empty** | उसमें कुछ हो। |
    | **is greater than** | वैल्यू से बड़ी हो। |
    | **is less than** | वैल्यू से छोटी हो। |
    | **is at least** | वैल्यू के बराबर या उससे बड़ी हो। |
    | **is at most** | वैल्यू के बराबर या उससे छोटी हो। |

5. **Value** में वह लिखें या चुनें जिससे तुलना करनी है। बॉक्स में उदाहरण के लिए `paid` दिखता है। **is empty** और **is not empty** के लिए कोई वैल्यू नहीं होती।
6. और नियम जोड़ने के लिए **Add condition** पर फिर क्लिक करें। दो या ज़्यादा होने पर **Continue when** दिखता है। हर नियम चाहिए तो **all match** चुनें, एक काफ़ी हो तो **any match**। नियमों के बीच कार्ड पर **and** या **or** दिखता है।
7. नियम हटाने के लिए **Remove this condition** पर क्लिक करें।

यहाँ रुका हुआ रन **Filtered** के रूप में खत्म होता है। यह सामान्य नतीजा है, फ़ेल होना नहीं।

!!! warning "खाली कंडीशन सबको आगे जाने देती है"
    कोई नियम न हो तो हर रन आगे जाता है। हमेशा कम से कम एक नियम जोड़ें।

### रन को अलग-अलग रास्तों पर भेजें { #send-runs-down-different-paths }

1. **Many paths by rule** स्टेप जोड़ें।
2. **Add two paths** पर क्लिक करें। बाद में और जोड़ने के लिए **Add a path** पर क्लिक करें।
3. हर रास्ते का नियम ऊपर बताए तरीके से ही सेट करें।
4. नियम पढ़ें। जिस पहले रास्ते का नियम मेल खाता है वही चलता है। रास्तों को सबसे खास से सबसे आम के क्रम में रखें।
5. **If nothing matches, take** के तहत कोई रास्ता चुनें, या **nothing — end the run** चुनें।

बिना रास्तों वाला स्टेप पब्लिश नहीं हो सकता। संदेश **Add a path on the canvas first — a branch with no paths cannot publish.** होता है।

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **No recipient. Map the customer's phone** | **Send to** खाली है। | ट्रिगर की फ़ोन फ़ील्ड चुनें, या पूरा अंतरराष्ट्रीय नंबर लिखें। |
| **Choose the approved template to send.** | कोई टेम्प्लेट नहीं चुना गया। | **Template** में एक चुनें। |
| **Meta only delivers approved templates outside the 24-hour window.** | चुना हुआ टेम्प्लेट **Approved** नहीं है। | Meta का इंतज़ार करें, या दूसरा टेम्प्लेट चुनें। |
| **Choose which language of … to send** | टेम्प्लेट एक से ज़्यादा भाषाओं में है। | **Language** में एक चुनें। |
| **The template needs a value for {{1}}.** | कोई वेरिएबल खाली है। | हर **Variable** भरें। |
| **Variable {{1}} is still the placeholder.** | बॉक्स में अब भी नमूने वाला टेक्स्ट है। | उसे असली वैल्यू या किसी फ़ील्ड से बदलें। |
| **This must be a JSON object: { … }** या **This is not valid JSON.** | डेटा या हेडर वाला बॉक्स सही JSON नहीं है। | ब्रेसिज़, कोट्स और कॉमा जाँचें। |
| **The target this step used was deleted. Choose another one.** | सेव किया टारगेट अब मौजूद नहीं है। | **Send to** के तहत दूसरा टारगेट चुनें। |
| **No targets yet.** | आपने कोई Zapier या Pabbly टारगेट सेव नहीं किया है। | **Add target** पर क्लिक करें। |
| **Not published to WhatsApp, so this step will be refused** | **Message it on WhatsApp** चुना है पर फ़ॉर्म व्हाट्सऐप पर पब्लिश नहीं है। | फ़ॉर्म को उसके मेन्यू से व्हाट्सऐप पर पब्लिश करें। |
| **No connections yet.** | कनेक्टर ऐप कनेक्ट नहीं है। | उसे **Integrations** → **Connectors** में कनेक्ट करें। |

## संबंधित गाइड { #related }

- [फ़्लो बिल्डर को समझें](understand-the-flow-builder.md)
- [फ़्लो में इंटीग्रेशन और एडवांस्ड चरण जोड़ें](chatbot-integration-and-advanced-steps.md)
- [फ़्लो में Google Workspace के चरण इस्तेमाल करें](flow-google-workspace-steps.md)
- [ऑटोमेशन फ़्लो बनाएँ](../flows/build-automation-flow.md)
- [फ़्लो के लिए ऐप कनेक्ट करें](../flows/connect-apps-for-flows.md)
