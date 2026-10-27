---
title: फ़्लो बिल्डर को समझें
description: फ़्लो बिल्डर का दौरा करें: फ़्लो बनाएँ, Step पैनल से चरण जोड़ें, व्यू बदलें, टेस्ट करें, सेव करें, पब्लिश करें और फ़्लो चालू करें।
---

# फ़्लो बिल्डर को समझें { #understand-the-flow-builder }

फ़्लो बिल्डर वह जगह है जहाँ आप चैटबॉट डिज़ाइन करते हैं। आप कैनवास पर चरण रखते हैं, हर चरण भरते हैं, फ़्लो को टेस्ट करते हैं और पब्लिश करते हैं। यह पेज स्क्रीन का हर हिस्सा और चरणों का हर समूह दिखाता है, ताकि आपको पता रहे कि हर ब्लॉक कहाँ मिलेगा।

## शुरू करने से पहले { #before-you-start }

- आपका व्हाट्सऐप नंबर Ohanvi से कनेक्ट हो। देखें [अपना व्हाट्सऐप नंबर कनेक्ट करें](connect-whatsapp-number.md)।
- आपको **WhatsApp** पैनल में **Flows** दिखता हो। न दिखे तो अपने एडमिन से पूछें।
- आपको पता हो कि बॉट को क्या करना है। पहले फ़्लो के लिए [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md) को फ़ॉलो करें।

## बिल्डर के हिस्से { #the-parts-of-the-builder }

| हिस्सा | कहाँ है | क्या करता है |
| --- | --- | --- |
| **Back to flows** तीर | ऊपर बाएँ | फ़्लो की सूची पर वापस ले जाता है। |
| फ़्लो का नाम | ऊपर बाएँ, तीर के पास | फ़्लो का नाम बदलने के लिए उस पर क्लिक करें। |
| वर्शन चिप | नाम के पास | वर्शन नंबर के साथ **DRAFT**, **LIVE**, **PAUSED** या **VIEWING** दिखाता है, जैसे **v1 · LIVE**। |
| **Undo** और **Redo** | ऊपर का टूलबार | अपने बदलावों में पीछे या आगे जाएँ। |
| **Test** | ऊपर का टूलबार | **Test** टैब खोलता है ताकि आप फ़्लो आज़मा सकें। |
| **Save** | ऊपर का टूलबार | आपके बदलाव ड्राफ़्ट के रूप में सेव करता है। सेव करने तक **Unsaved changes** दिखाता है। |
| **Publish** | पेज का ऊपर दायाँ हिस्सा | सेव किए हुए फ़्लो को लाइव करता है। |
| **Active** स्विच | ऊपर का टूलबार | पब्लिश किए हुए फ़्लो को चालू या बंद करता है। उस पर **Active** या **Inactive** लिखा होता है। |
| **Compact** और **Preview** | कैनवास के ऊपर | एक ही फ़्लो को देखने के दो तरीके। |
| कैनवास | बीच में | बिंदुओं वाला हिस्सा जहाँ कार्ड और तार रहते हैं। |
| **Step** पैनल | दाईं ओर | चुने हुए चरण की सेटिंग्स, या जोड़े जा सकने वाले चरणों की सूची दिखाता है। |
| **Logs** और **Run test** | नीचे की पट्टी | टेस्ट रन में क्या हुआ, यह दिखाता है। |
| ज़ूम बटन और मिनीमैप | कैनवास के कोने | ज़ूम इन, ज़ूम आउट, फ़्लो को स्क्रीन में फ़िट करें, और बड़े फ़्लो में इधर-उधर जाएँ। |

## नया फ़्लो बनाएँ { #create-a-new-flow }

1. लेफ़्ट रेल में **WhatsApp** खोलें, फिर **Flows** चुनें।
2. **New flow** पर क्लिक करें। बिल्डर खाली कैनवास पर खुलता है। जब तक आप **Save** पर क्लिक नहीं करते, कुछ सेव नहीं होता।
3. या तैयार फ़्लो से शुरू करने के लिए **New flow** के पास के तीर पर क्लिक करें और **Start from library** चुनें।
4. कैनवास पर **How does this flow start?** पढ़ें और कोई शुरुआत चुनें। देखें [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)।

## चरण { #steps }

### चरण जोड़ें { #add-a-step }

1. आख़िरी चरण के अंत में **+** पर क्लिक करें। **Add a step after** मेन्यू खुलता है।
2. किसी चरण को उसके नाम या काम से खोजने के लिए **Search** में टाइप करें।
3. **COMMON** से कोई चरण चुनें, या सभी समूह देखने के लिए **All steps** पर क्लिक करें।
4. या दाईं ओर के **Step** पैनल का इस्तेमाल करें। जोड़ने के लिए किसी टाइल पर क्लिक करें, या टाइल को कैनवास पर खींचें।
5. या **Describe the flow you want…** में लिखें कि आप क्या चाहते हैं और **Generate with AI** पर क्लिक करें। AI आपके शब्दों से नया फ़्लो लिखता है।

!!! warning "Generate with AI कैनवास को बदल देता है"
    अगर कैनवास पर पहले से चरण हैं, तो बिल्डर पूछता है **Replace the steps on the canvas?** रद्द करने के लिए **Keep what I have** पर क्लिक करें।

आप कैनवास पर राइट-क्लिक मेन्यू भी इस्तेमाल कर सकते हैं: **Add a step here**, **Select all steps**, **Fit to screen** और **See the whole flow**।

### एक चरण के साथ काम करें { #work-with-one-step }

1. कैनवास पर किसी चरण पर क्लिक करें। उसकी सेटिंग्स **Step** पैनल के **Setup** टैब में खुलती हैं।
2. ज़्यादा विकल्प देखने के लिए चरण पर राइट-क्लिक करें: **Edit in panel**, **Rename**, **Add a step after**, **Add content block**, **Duplicate**, **Disconnect from path** और **Delete**।
3. उसी कार्ड में एक और ब्लॉक जोड़ने के लिए कार्ड के नीचे **+ Add Content** बटन पर क्लिक करें।
4. कई चरण चुनकर उन्हें एक साथ **Duplicate** या **Delete** करें।
5. कार्ड पर, उसे छोटे डिब्बे में समेटने के लिए **Collapse card** पर क्लिक करें, और फिर खोलने के लिए **Expand card** पर।
6. ब्लॉक के दाएँ किनारे पर, कार्ड में एक और ब्लॉक जोड़ने के लिए **Add a block** (प्लस) पर क्लिक करें। सिर्फ़ उसी ब्लॉक को हटाने के लिए **Delete this block** (डस्टबिन) पर क्लिक करें।
7. किसी ब्रांच पर, सिर्फ़ उसी रास्ते में चरण जोड़ने के लिए **Add a step on this branch** पर क्लिक करें।

### तारों से चरण जोड़ें { #join-steps-with-wires }

1. किसी चरण के दाएँ किनारे के बिंदु से अगले चरण तक खींचें।
2. किसी तार पर राइट-क्लिक करके **Insert a step in between**, **Disconnect this step** या **Delete this connection** चुनें।
3. जिन ब्लॉक में विकल्प होते हैं, जैसे बटन, उनमें हर विकल्प के लिए एक बिंदु होता है। हर विकल्प को उस चरण से जोड़ें जो उसके बाद चलना चाहिए।

### व्यू बदलें { #change-the-view }

1. हर कार्ड को छोटे डिब्बे के रूप में देखने के लिए **Compact** पर क्लिक करें। बड़े फ़्लो के लिए इसका इस्तेमाल करें।
2. हर कार्ड को खुला देखने के लिए, जैसे ग्राहक उसे पढ़ेगा, **Preview** पर क्लिक करें।
3. कैनवास को ज़्यादा जगह देने के लिए **Hide step panel** (टूलटिप **Hide the panel**) पर क्लिक करें। उसे वापस लाने के लिए **Show step panel** पर क्लिक करें।
4. अपने फ़्लो की सूची पर लौटने के लिए ऊपर बाईं ओर के बैक तीर (टूलटिप **Back to flows**) पर क्लिक करें।
5. कई चरण चुनकर उन्हें छोड़ने के लिए राइट-क्लिक मेन्यू में **Clear selection** पर क्लिक करें। **Step** पैनल में एक चरण का चुनाव हटाने के लिए **Clear selected step** पर क्लिक करें।

### टेस्ट करें, सेव करें और पब्लिश करें { #test-save-and-publish }

1. **Test** पर क्लिक करें और [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md) को फ़ॉलो करें।
2. **Save** पर क्लिक करें। चिप पर **DRAFT** लिखा होता है।
3. **Publish** पर क्लिक करें। संदेश **Published and live — new runs use this version.** दिखता है।
4. अगर फ़्लो बंद है, तो संदेश होता है **Published. This flow is turned off, so it will not run yet.** **Active** को चालू करें।
5. बाद में फ़्लो को रोकने के लिए **Active** को बंद करें।

!!! note "पब्लिश किए हुए वर्शन कभी नहीं बदलते"
    लाइव फ़्लो में बदलाव करने के लिए, एडिट करें और दोबारा पब्लिश करें। पुराने वर्शन पर लौटने के लिए **Versions** बटन खोलें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)।

### AI पैनल से फ़्लो बनाएँ और बदलें { #build-and-change-a-flow-with-the-ai-panel }

1. **Build with AI** पर क्लिक करें। पैनल बाईं ओर **Build with AI** शीर्षक के साथ खुलता है। वह आपका स्वागत करता है **Describe the flow you want and I will build it out.** से। अगर फ़्लो का नाम है, तो लिखा होता है **You are working on "name". Describe the flow you want and I will build it out.**
2. **Ask anything…** में लिखें कि आप क्या चाहते हैं। या माइक्रोफ़ोन (टूलटिप **Describe the flow out loud**) पर क्लिक करके बोलें। बोले हुए शब्द आपके पहले से टाइप किए हुए में जुड़ जाते हैं।
3. **Enter** दबाएँ, या भेजने वाले बटन (टूलटिप **Send · Enter**) पर क्लिक करें।
4. इंतज़ार करें। पैनल में **Thinking…** और फिर **Writing the flow…** लिखा आता है।
5. अगर कैनवास पर पहले से चरण हैं, तो एक विंडो पूछती है **Replace the steps on the canvas?**। वह बताती है कि नया फ़्लो पुराने चरणों की जगह लेगा और जब तक आप सेव नहीं करते कुछ सेव नहीं होता, इसलिए आपका आख़िरी सेव किया वर्शन सुरक्षित रहता है। आगे बढ़ने के लिए **Replace and build** पर क्लिक करें। रद्द करने के लिए **Keep what I have** पर क्लिक करें। तब पैनल कहता है **Kept what you have. Say the word when you want it replaced.**
6. पूरा होने पर पैनल कहता है **Named it "…"** और **It is on the canvas. Look it over and save it when it reads right — or tell me what to change.**
7. नतीजा बदलने के लिए, जो बदलना है वह लिखकर भेजें। पैनल कहता है **Changed. Look it over and save when it reads right — or tell me what else to adjust.**
8. अगर AI यह नहीं कर पाता, तो पैनल वजह के साथ **I could not draft that** या **I could not change that** लिखता है। अपना अनुरोध दोबारा लिखें और फिर भेजें।
9. याद दिलाने वाली लाइन **Look the flow over before you save it.** पढ़ें। फिर **Save** पर क्लिक करें।
10. काम पूरा होने पर **Close the AI builder** (पैनल के ऊपर का x) पर क्लिक करें।

### Step पैनल के टैब पढ़ें { #read-the-tabs-of-the-step-panel }

**Step** पैनल में तीन टैब हैं: **Setup**, **Test** और **Output**।

1. किसी चरण पर क्लिक करें, फिर **Setup** पर क्लिक करें। यह एक छोटा सारांश दिखाता है: **Step name**, और शुरुआती चरण के लिए **Starts on**, **Match** और **Test number**। कार्ड के लिए यह **Selected block** भी दिखाता है। जो चरण कार्ड नहीं है, उसके लिए यह **Does** और **Lane** दिखाता है।
2. फ़्लो आज़माने के लिए **Test** पर क्लिक करें। देखें [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)। **Would this run?** के नीचे आप बिना कुछ भेजे कोई कीवर्ड जाँच सकते हैं।
3. पिछले टेस्ट रन में किसी चरण ने क्या लौटाया, यह देखने के लिए **Output** पर क्लिक करें। अगर कोई चरण चुना नहीं है, तो पैनल में लिखा होता है **Select a step on the canvas to inspect it. Edit message content directly inside its card.**
4. कुछ भी चुना न हो, तब ब्लॉक की सूची खोलने के लिए **+ Add a step** पर क्लिक करें।
5. **Test** टैब में, लाइव वर्शन को एक बार चलाने के लिए **Run published** पर क्लिक करें। यह असली डेटा और असली असर के साथ चलता है, स्क्रीन पर मौजूद ड्राफ़्ट के साथ कभी नहीं।

### कुछ चरण अधूरे हों तब पब्लिश करें { #publish-when-some-steps-are-not-finished }

1. **Publish** पर क्लिक करें।
2. अगर कुछ चरण अधूरे हैं, तो एक विंडो खुलती है। उसका शीर्षक होता है **One step will not be published** या **N steps will not be published**। वह अधिकतम 6 समस्याएँ सूचीबद्ध करती है और बताती है कि और कितनी हैं।
3. यह लाइन पढ़ें: **The rest of the flow publishes as it is. Fix these to include them:**।
4. वापस जाकर उन्हें पूरा करने के लिए **Fix the steps** पर क्लिक करें। यही बेहतर विकल्प है।
5. या सिर्फ़ पूरे हुए चरण पब्लिश करने के लिए **Publish without them** पर क्लिक करें।

### अपना काम खोए बिना पुराना वर्शन खोलें { #open-an-older-version-without-losing-your-work }

1. बिल्डर के ऊपर **Versions** पर क्लिक करें। सूची हर वर्शन दिखाती है, और यह भी कि कौन-सा लाइव है।
2. किसी वर्शन को देखने के लिए उस पर क्लिक करें। अगर आपके बदलाव सेव नहीं हैं, तो एक विंडो पूछती है **Save before switching?**। उसमें लिखा होता है **This flow has changes you have not saved. Opening another version leaves them behind.** रुकने के लिए **Keep editing** पर क्लिक करें, या अपने बदलाव छोड़ने के लिए **Discard and switch** पर।
3. पब्लिश किया हुआ वर्शन बदला नहीं जा सकता। बैनर में लिखा होता है **Showing vN. It is published, so it cannot be changed — use "Edit as new version" to carry on from it.**
4. किसी वर्शन पर **More** (तीन बिंदु) पर क्लिक करें और **Edit as new version** चुनें। अगर आपके पास पहले से बिना पब्लिश किया ड्राफ़्ट है, तो एक विंडो पूछती है **Replace the draft you have open?**। वह बताती है कि आपका ड्राफ़्ट डिलीट हो जाएगा और उस वर्शन की कॉपी उसकी जगह ले लेगी, और जो पहले से लाइव है उसमें कुछ नहीं बदलता। **Replace it** या **Keep my draft** पर क्लिक करें।
5. किसी पुराने वर्शन को लाइव बनाने के लिए, उस पर **More** पर क्लिक करें और **Make this live** चुनें। यह विकल्प उस वर्शन पर नहीं दिखता जो पहले से लाइव है।

### Logs पैनल पढ़ें { #read-the-logs-panel }

1. पैनल खोलने के लिए बिल्डर के नीचे **Logs** पर क्लिक करें।
2. **Run test** पर क्लिक करें। अगर फ़्लो में कोई चरण नहीं है, तो संदेश आता है **Add a step before testing.**
3. चैटबॉट फ़्लो में **Test on your phone** विंडो खुलती है। उसमें लिखा होता है **Message this flow from your own WhatsApp and watch the canvas follow you. Nothing is published — the flow answers this number and nobody else.** **Your WhatsApp number** में अपना नंबर लिखें। बॉक्स में `91XXXXXXXXXX` दिखता है। **Start** पर क्लिक करें, या बंद करने के लिए **Cancel** पर।
4. टेस्ट चलते समय बटन पर **Testing…** लिखा होता है। टेस्ट खत्म करने के लिए **Stop** पर क्लिक करें।
5. चिप पढ़ें। उस पर **Running…**, **Success**, **Failed**, **Stopped** या **Finished** लिखा होता है, साथ में लगा समय, जैसे **Success in 1.2s**।
6. किसी चरण ने क्या लौटाया यह देखने के लिए सूची में उस पर क्लिक करें। हिस्से में लिखा होता है **Pick a step to see what it returned.** नतीजा **STEP RESULT** के नीचे होता है।
7. रन को दोबारा लोड करने के लिए **Refresh** पर क्लिक करें। पैनल खाली करने के लिए **Clear this run** पर क्लिक करें।
8. पहले रन से पहले पैनल में लिखा होता है **Nothing to display yet. Run a test to see what each step does.** इंतज़ार के दौरान लिखा होता है **Waiting for the first step…**। अगर किसी रन में कुछ दर्ज नहीं हुआ, तो लिखा होता है **No steps were recorded for this run.**

## Step पैनल के सभी समूह { #every-group-in-the-step-panel }

**Step** पैनल ब्लॉक को इस आधार पर बाँटता है कि वे ग्राहक के लिए क्या करते हैं।

| समूह | ब्लॉक | समूह किसलिए है |
| --- | --- | --- |
| **Triggers** | **Flow Start** | बातचीत कैसे शुरू होती है। देखें [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)। |
| **Message types** | **Text**, **Media**, **List / Buttons**, **Catalogue**, **Single product**, **Multi product**, **Template**, **WhatsApp Form** | बॉट क्या कहता है। देखें [टेक्स्ट और लिस्ट ब्लॉक](chatbot-text-and-list-blocks.md) और [मीडिया, प्रोडक्ट और फ़ॉर्म ब्लॉक](chatbot-message-blocks.md)। |
| **Ask the customer** | **Ask name**, **Ask phone**, **Ask email**, **Ask address**, **Ask Question**, **Ask Location**, **Ask Media**, **Wait & Branch**, **Delay** | बॉट क्या पूछता है, और कितनी देर इंतज़ार करता है। देखें [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md) और [पूछने और इंतज़ार करने वाले ब्लॉक](chatbot-ask-and-wait-blocks.md)। |
| **Actions** | **Set Attribute**, **Add Tag**, **Condition**, **Connect Flow**, **API Request**, **Chat with agent**, **AI Reply**, **Jump to flow**, **End** | बॉट पर्दे के पीछे क्या करता है। देखें [एक्शन ब्लॉक](chatbot-action-blocks.md) और [नाम, फ़ोन, ईमेल और पता पूछें](chatbot-ask-details-blocks.md)। |
| **Store actions** | **Order status**, **Cancel order**, **Reorder**, **Confirm address**, **COD check**, **COD to prepaid**, **Book appointment** | स्टोर चैट के लिए ऑर्डर और बुकिंग के काम। देखें [चैटबॉट में ऑर्डर और बुकिंग देखें](chatbot-store-action-blocks.md)। |
| **Integrations** | **CRM**, **Social**, **Forms**, **Meta Conversion** | डेटा को Ohanvi के दूसरे हिस्सों और Meta को भेजें। देखें [इंटीग्रेशन और एडवांस्ड चरण](chatbot-integration-and-advanced-steps.md)। |
| **Google Sheets**, **Google Calendar**, **Google Meet**, **Google Contacts** | **Add a row**, **Read rows**, **Create spreadsheet**, **Create event**, **Find events**, **Check availability**, **Update event**, **Cancel event**, **Instant Meet link**, **Find contact**, **Save contact** | अपने Google ऐप के साथ काम करें। देखें [Google Sheets, Calendar, Meet और Contacts के चरण जोड़ें](flow-google-workspace-steps.md)। |
| **Advanced** | **Action**, **Continue only if…**, **Many paths by rule**, **Delay**, **For each**, **Sub-flow**, **Parallel**, **Join**, **Send email**, **Wait**, **Tag contact**, **Remove tag**, **Unsubscribe**, **Split A/B**, **Webhook**, **Request Intervention**, **Invoke Action**, और **Pick a …** लिस्ट | ऑटोमेशन और ईमेल जर्नी के चरण, और तैयार विकल्पों की लिस्ट। जब तक आप इसे खोलते या खोजते नहीं, यह बंद रहता है। देखें [इंटीग्रेशन और एडवांस्ड चरण](chatbot-integration-and-advanced-steps.md)। |

## समस्या का समाधान { #troubleshooting }

| समस्या | कारण | समाधान |
| --- | --- | --- |
| **Publish first — there is no live version to run.** | आपने ऐसे फ़्लो पर **Run test** पर क्लिक किया जो कभी पब्लिश नहीं हुआ। | **Publish** पर क्लिक करें, फिर दोबारा टेस्ट करें। |
| टूलबार पर **Unsaved changes** बना रहता है | आपने फ़्लो एडिट किया और सेव नहीं किया। | **Save** पर क्लिक करें। |
| फ़्लो पब्लिश है पर जवाब नहीं देता | **Active** बंद है। | **Active** चालू करें। |
| जो चरण आप ढूँढ रहे हैं वह सूची में नहीं है | चरण बंद **Advanced** समूह में है। | **Search** में उसका नाम टाइप करें, या उसे खोलने के लिए **Advanced** पर क्लिक करें। |
| **Remove tag is not a chatbot step — use Set attribute, or move it to a journey card.** | आपने चैटबॉट कार्ड पर **Remove tag** रखा है। | **Set Attribute** इस्तेमाल करें, या ब्लॉक को जर्नी कार्ड पर ले जाएँ। |
| **… is not a chatbot step and will not be sent.** | आपने चैटबॉट कार्ड पर ऐसा ब्लॉक रखा है जो सिर्फ़ किसी और तरह के फ़्लो में चलता है। | ब्लॉक डिलीट करें, या उसे सही तरह के कार्ड पर ले जाएँ। |
| **… is not a journey step and will be skipped.** | आपने जर्नी कार्ड पर ऐसा ब्लॉक रखा है जो सिर्फ़ चैटबॉट में चलता है। | ब्लॉक डिलीट करें, या उसे चैटबॉट कार्ड पर ले जाएँ। |
| **Button 'Name' leads to "…", which is not a chatbot step.** | कोई बटन या ब्रांच ऐसे चरण से जुड़ा है जो चैटबॉट चरण नहीं है। | जान लें कि तार सेव हो जाता है और ऑटोमेशन उसे फ़ॉलो करता है, पर बातचीत वहीं खत्म हो जाती है। अगर चैट आगे चलनी चाहिए, तो बटन को किसी चैटबॉट चरण से जोड़ें। |
| कार्ड पर **Needs setup** | चरण में कोई ज़रूरी वैल्यू नहीं है। | चरण पर क्लिक करें और ज़रूरी के रूप में चिह्नित फ़ील्ड भरें। |
| **One step will not be published** | **Publish** पर क्लिक करते समय कुछ चरण अधूरे हैं। | **Fix the steps** पर क्लिक करें, या **Publish without them** पर। देखें [कुछ चरण अधूरे हों तब पब्लिश करें](#publish-when-some-steps-are-not-finished)। |

## संबंधित गाइड { #related }

- [व्हाट्सऐप चैटबॉट फ़्लो बनाएँ](../create-whatsapp-flow.md)
- [चुनें कि फ़्लो कैसे शुरू हो](chatbot-flow-start-and-triggers.md)
- [चैट सिम्युलेटर से चैटबॉट फ़्लो टेस्ट करें](test-a-flow-with-the-chat-simulator.md)
- [फ़्लो और फ़्लो की सूची को समझें](../flows/flows-overview-and-list.md)
- [फ़्लो में Action चरण और कंडीशन इस्तेमाल करें](flow-action-and-condition-steps.md)
